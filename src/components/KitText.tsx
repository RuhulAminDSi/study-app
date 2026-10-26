import type { ReactNode } from 'react'

/*
 * Formats the plain authored text of an Exam Kit (topics, worked answers, examples). The text is plain on purpose
 * (no HTML in the kit files), so this reads the conventions the authors use:
 *   "## Heading"                  -> subheading;  "**term**" inside a line -> highlighted
 *   "Step 1: …" / "ধাপ ১: …"      -> numbered steps
 *   "• …" / "- …"                -> bullet list;  "1. …" -> numbered list;  "(i) …" / "(a) …" -> labelled parts
 *   "a | b | c" on 2+ lines      -> table (first row is the header); on one line -> chips
 *   "Exam tip: …", "Answer: …", "Real-world example: …", "Note: …" (and the Bangla labels) -> callouts
 *   "Label: …" with a short label -> the label in bold
 * and, inside any line, marks IPv4/IPv6 addresses, prefixes and binary octets as code and a^b as a power.
 */

type CalloutKind = 'tip' | 'answer' | 'example' | 'note' | 'practice'
const CALLOUTS: [RegExp, CalloutKind][] = [
  [/^(Exam tip|Tip|Master first|পরীক্ষার টিপ|টিপ|প্রথমে আয়ত্ত করুন)$/i, 'tip'],
  [/^(Answer|Final answer|Summary|উত্তর|চূড়ান্ত উত্তর|সারসংক্ষেপ)$/i, 'answer'],
  [/^(Real-world example|Example|বাস্তব উদাহরণ|উদাহরণ)$/i, 'example'],
  [/^(Note|Assumption|Check|নোট|টীকা|ধারণা \(Assumption\)|ধরে নেওয়া হয়েছে|যাচাই)$/i, 'note'],
  [/^(Practice|অনুশীলন)$/i, 'practice'],
]

type Item = { n: string; text: string }
type Block =
  | { k: 'p'; lines: string[] }
  | { k: 'h'; text: string }
  | { k: 'diagram'; text: string }
  | { k: 'steps'; items: Item[] }
  | { k: 'ul'; items: string[] }
  | { k: 'ol'; items: Item[] }
  | { k: 'parts'; items: Item[] }
  | { k: 'table'; rows: string[][] }
  | { k: 'callout'; kind: CalloutKind; label: string; lines: string[] }

const HEAD = /^#{2,3}\s+(.*)$/
// diagram connector lines: a lone "|", a "-----" rule, or a row of "|"s
const CONNECTOR = /^\s*(?:[|│]|[-─]{6,}|(?:[|│]\s+){2,}[|│])\s*$/
const STEP = /^(?:Step|ধাপ)\s*([\d০-৯]+)\s*(\([^)]*\))?\s*[:.)]\s*(.*)$/
const BULLET = /^[•\-–]\s+(.*)$/
const NUMBERED = /^([\d০-৯]{1,2})[.)]\s+(.*)$/
const PART = /^\(([ivx]{1,4}|[a-h]|[ক-ঙ])\)\s*(.*)$/
const LABEL = /^([^:।|•\d(][^:।|]{0,38}):\s+(.*)$/
const isRow = (line: string) => line.split(' | ').length >= 3

function calloutOf(line: string): { kind: CalloutKind; label: string; rest: string } | null {
  const m = line.match(LABEL)
  if (!m) return null
  const hit = CALLOUTS.find(([re]) => re.test(m[1].trim()))
  return hit ? { kind: hit[1], label: m[1].trim(), rest: m[2] } : null
}

const structural = (l: string, next?: string) =>
  HEAD.test(l) || STEP.test(l) || BULLET.test(l) || NUMBERED.test(l) || PART.test(l) || !!calloutOf(l) || (isRow(l) && isRow(next ?? ''))

function parse(text: string): Block[] {
  const blocks: Block[] = []
  for (const rawChunk of text.split(/\n\s*\n/)) {
    // a text diagram (boxes joined by "|" and "----" lines) is kept as drawn; text around it is parsed as usual
    const raw = rawChunk.split('\n').filter(l => l.trim() !== '')
    const conn = raw.map((l, i) => (CONNECTOR.test(l) ? i : -1)).filter(i => i >= 0)
    if (conn.length >= 2) {
      const from = Math.max(0, conn[0] - 1)
      const to = Math.min(raw.length, conn[conn.length - 1] + 2)
      if (from > 0) blocks.push(...parse(raw.slice(0, from).join('\n')))
      blocks.push({ k: 'diagram', text: raw.slice(from, to).join('\n') })
      if (to < raw.length) blocks.push(...parse(raw.slice(to).join('\n')))
      continue
    }
    const chunk = raw.join('\n')
    // "(a) … (b) … (c) …" on one line: one item per part
    const lines = chunk.split('\n').filter(l => l.trim() !== '')
      .flatMap(l => (PART.test(l) ? l.split(/\s+(?=\((?:[ivx]{1,4}|[a-h]|[ক-ঙ])\)\s)/) : [l]))
    for (let i = 0; i < lines.length;) {
      const l = lines[i]
      const take = <T,>(re: RegExp, map: (m: RegExpMatchArray) => T): T[] => {
        const out: T[] = []
        let m: RegExpMatchArray | null
        while (i < lines.length && (m = lines[i].match(re))) {
          out.push(map(m))
          i++
          // a wrapped continuation line (no marker of its own) belongs to the item above
          while (i < lines.length && !structural(lines[i], lines[i + 1])) { out[out.length - 1] = appendTo(out[out.length - 1], lines[i]); i++ }
        }
        return out
      }
      const head = l.match(HEAD)
      if (head) { blocks.push({ k: 'h', text: head[1] }); i++ }
      else if (STEP.test(l)) blocks.push({ k: 'steps', items: take(STEP, m => ({ n: m[1], text: m[2] ? `${m[2].charAt(1).toUpperCase()}${m[2].slice(2, -1)}: ${m[3]}` : m[3] })) })
      else if (BULLET.test(l)) blocks.push({ k: 'ul', items: take(BULLET, m => m[1]) })
      else if (NUMBERED.test(l)) blocks.push({ k: 'ol', items: take(NUMBERED, m => ({ n: m[1], text: m[2] })) })
      else if (PART.test(l)) blocks.push({ k: 'parts', items: take(PART, m => ({ n: m[1], text: m[2] })) })
      else if (isRow(l) && isRow(lines[i + 1] ?? '')) {
        const rows: string[][] = []
        while (i < lines.length && isRow(lines[i])) rows.push(lines[i++].split(' | ').map(c => c.trim()))
        // "Comparison at a glance. Feature | IPv4 | IPv6": the lead sentence goes above the table
        const lead = rows[0][0].match(/^(.*[.:।])\s+(\S.*)$/)
        if (lead) { blocks.push({ k: 'p', lines: [lead[1]] }); rows[0][0] = lead[2] }
        blocks.push({ k: 'table', rows })
      } else {
        const c = calloutOf(l)
        if (c) {
          i++
          const body = c.rest ? [c.rest] : []
          // the callout keeps the plain lines (and any steps or bullets) that follow it in the same paragraph
          while (i < lines.length && !calloutOf(lines[i])) body.push(lines[i++])
          blocks.push({ k: 'callout', kind: c.kind, label: c.label, lines: body })
        } else {
          const start = i
          while (i < lines.length && (i === start || !structural(lines[i], lines[i + 1]))) i++
          const para = lines.slice(start, i)
          // one long run-on line reads as a wall of text: break it into short paragraphs at sentence ends
          if (para.length === 1 && para[0].length > LONG) for (const s of sentenceGroups(para[0])) blocks.push({ k: 'p', lines: [s] })
          else blocks.push({ k: 'p', lines: para })
        }
      }
    }
  }
  return blocks
}

const LONG = 320
const GROUP = 180
const ABBREV = /\b(?:e\.g|i\.e|vs|etc|approx|cf|No|Fig)\.$/

/** Splits a paragraph at sentence ends ("." or Bangla "।") into groups of roughly GROUP characters. */
function sentenceGroups(text: string): string[] {
  const parts = text.split(/(?<=[.!?।])\s+(?=["'(“]?[A-Zঀ-৿])/)
  const sentences: string[] = []
  for (const p of parts) {
    if (sentences.length && ABBREV.test(sentences[sentences.length - 1])) sentences[sentences.length - 1] += ` ${p}`
    else sentences.push(p)
  }
  const groups: string[] = []
  for (const s of sentences) {
    const last = groups.length - 1
    if (last >= 0 && groups[last].length < GROUP && groups[last].length + s.length < GROUP * 1.6) groups[last] += ` ${s}`
    else groups.push(s)
  }
  return groups
}

function appendTo<T>(item: T, line: string): T {
  if (typeof item === 'string') return `${item}\n${line}` as T
  const it = item as unknown as Item
  return { ...it, text: `${it.text}\n${line}` } as T
}

// IPv4 (+/prefix), bare /prefix, binary octets, IPv6 (2+ colons), and a^b powers
const TOKEN = new RegExp(
  [
    String.raw`(?<![\w.])\d{1,3}(?:\.\d{1,3}){3}(?:\/\d{1,2})?(?![\w])`,
    String.raw`(?<![\w)])\/\d{1,2}(?![\w/]|\.\d)`,
    String.raw`(?<![\w.])[01]{8}(?:\.[01]{8}){0,3}(?![\w])`,
    String.raw`(?<![\w:])(?=[0-9a-fA-F:]*[0-9a-fA-F])(?:[0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}(?:\/\d{1,3})?(?![\w:])`,
    String.raw`\b\d+\^\(?[\w−+-]+\)?`,
  ].join('|'),
  'g',
)

function inline(text: string, key = ''): ReactNode[] {
  // **text** marks a highlighted key term or value
  if (text.includes('**')) {
    return text.split(/\*\*(.+?)\*\*/).flatMap((part, i): ReactNode[] =>
      i % 2 ? [<mark key={`${key}h${i}`} className="kt-hl">{tokens(part, `${key}h${i}-`)}</mark>] : tokens(part, `${key}t${i}-`))
  }
  return tokens(text, key)
}

function tokens(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(TOKEN)) {
    const s = m[0]
    const at = m.index ?? 0
    if (at > last) out.push(text.slice(last, at))
    const pow = s.match(/^(\d+)\^\(?([\w−+-]+?)\)?$/)
    out.push(pow
      ? <span key={`${key}${at}`} className="kt-pow">{pow[1]}<sup>{pow[2]}</sup></span>
      : <code key={`${key}${at}`} className="kt-code">{s}</code>)
    last = at + s.length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

/** One line: "Label: rest" with a short label gets a bold label; " | "-separated runs become chips. */
function Line({ text }: { text: string }) {
  if (isRow(text)) {
    const parts = text.split(' | ')
    const lead = parts[0].match(/^(.*[:—→])\s*(\S.*)$/)
    if (lead) parts[0] = lead[2]
    return (
      <>
        {lead && <>{inline(lead[1])} </>}
        <span className="kt-chips">{parts.map((p, i) => <span key={i} className="kt-chip">{inline(p.trim(), `c${i}-`)}</span>)}</span>
      </>
    )
  }
  // "**Term**: explanation" (a bold lead, usually on a bullet): the term in bold, not a highlight
  const lead = text.match(/^\*\*([^*]+)\*\*\s*([:—–]|-\s)\s*(.*)$/)
  if (lead) return <><b className="kt-label">{tokens(lead[1], 'l')}{lead[2] === ':' ? ':' : ` ${lead[2].trim()}`}</b> {inline(lead[3])}</>
  const m = text.match(LABEL)
  if (m && m[1].length <= 32 && !/\d\.\d/.test(m[1])) return <><b className="kt-label">{inline(m[1], 'l')}:</b> {inline(m[2])}</>
  return <>{inline(text)}</>
}

function Lines({ lines }: { lines: string[] }) {
  return <>{lines.map((l, i) => <span key={i} className="kt-line"><Line text={l} /></span>)}</>
}

const CALLOUT_ICON: Record<CalloutKind, string> = {
  tip: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z',
  answer: 'M20 6 9 17l-5-5',
  example: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  note: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v5M12 8h.01',
  practice: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
}

function Callout({ b }: { b: Extract<Block, { k: 'callout' }> }) {
  // steps or bullets inside a callout (e.g. a practice question and its working) keep their own formatting
  const inner = parse(b.lines.join('\n'))
  return (
    <div className={`kt-callout kt-${b.kind}`}>
      <span className="kt-callout-label">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={CALLOUT_ICON[b.kind]} /></svg>
        {b.label}
      </span>
      <div className="kt-callout-body">{inner.map((x, i) => <BlockView key={i} b={x} />)}</div>
    </div>
  )
}

function BlockView({ b }: { b: Block }) {
  switch (b.k) {
    case 'p': {
      // a short lead-in such as "Fields it checks:" labels the list after it
      const intro = b.lines.length === 1 && b.lines[0].length < 70 && /[:：]$/.test(b.lines[0].trim())
      return <p className={`kt-p${intro ? ' kt-intro' : ''}`}><Lines lines={b.lines} /></p>
    }
    case 'h': return <h5 className="kt-h">{inline(b.text)}</h5>
    case 'diagram': return <pre className="kt-diagram">{b.text}</pre>
    case 'steps':
      return (
        <ol className="kt-steps">
          {b.items.map((s, i) => <li key={i}><span className="kt-step-n">{s.n}</span><div className="kt-step-body"><Lines lines={s.text.split('\n')} /></div></li>)}
        </ol>
      )
    case 'ul': return <ul className="kt-ul">{b.items.map((s, i) => <li key={i}><Lines lines={s.split('\n')} /></li>)}</ul>
    case 'ol':
      return <ol className="kt-ol">{b.items.map((s, i) => <li key={i}><span className="kt-ol-n">{s.n}.</span><div><Lines lines={s.text.split('\n')} /></div></li>)}</ol>
    case 'parts':
      return <ul className="kt-parts">{b.items.map((s, i) => <li key={i}><span className="kt-part-n">{s.n}</span><div><Lines lines={s.text.split('\n')} /></div></li>)}</ul>
    case 'table':
      return (
        <div className="ek-table-wrap">
          <table className="ek-table">
            <thead><tr>{b.rows[0].map((c, j) => <th key={j}>{inline(c)}</th>)}</tr></thead>
            <tbody>{b.rows.slice(1).map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j}>{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
    case 'callout': return <Callout b={b} />
  }
}

/** Authored Exam Kit text, formatted. */
export default function KitText({ text, className }: { text: string; className?: string }) {
  return <div className={`kt${className ? ` ${className}` : ''}`}>{parse(text).map((b, i) => <BlockView key={i} b={b} />)}</div>
}
