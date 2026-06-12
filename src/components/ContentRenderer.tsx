import type { ReactNode } from 'react'

function parseTable(lines: string[]): ReactNode | null {
  const rows: string[][] = []
  const borderChars = /[┌┬┐├┤└┘┴┤┬┼╋╰╮╯╭░▒▓╔╗╚╝╠╣╦╩━▀▄▌▐╫╬┄┆]/g

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (/^[─┑▒▓│┃]{3,}$/.test(trimmed)) continue

    let processed = line
      .replace(borderChars, '')
      .replace(/║/g, '│')
      .replace(/▕/g, '│')

    if (processed.includes('│') || processed.includes('┃')) {
      const cells = processed.split(/[│┃]+/)
        .map(s => s.trim())
        .filter(s => s && s.length > 0)

      if (cells.length > 0) rows.push(cells)
    }
  }

  if (rows.length < 2) return null

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            {rows[0].map((cell, idx) => (
              <th key={idx} dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function isTableLine(line: string): boolean {
  const trimmed = line.trim()
  if (!trimmed || trimmed.length < 3) return false
  return trimmed.includes('│') || /[┌┬┐├┤└┘┄┆─]/.test(trimmed)
}

export function renderContent(content: string): ReactNode[] {
  if (/^\s*<(?:div|table|p|h[1-6]|pre|ul|ol|li|blockquote|hr|img|br|section|article|header|footer|main|figure|figcaption|span|a)\b/i.test(content.trim())) {
    return [<div key="html" className="html-content" dangerouslySetInnerHTML={{ __html: content }} />]
  }

  const allLines = content.split('\n')
  const result: ReactNode[] = []
  let i = 0

  while (i < allLines.length) {
    const line = allLines[i]

    if (isTableLine(line)) {
      const tableLines: string[] = [line]
      i++
      while (i < allLines.length && isTableLine(allLines[i])) {
        tableLines.push(allLines[i])
        i++
      }

      if (tableLines.length >= 2) {
        const table = parseTable(tableLines)
        if (table) result.push(table)
      }
      continue
    }

    const trimmed = line.trim()
    if (!trimmed) { i++; continue }

    if (trimmed.startsWith('<table>')) {
      const tableMatch = trimmed.match(/<table>.*?<\/table>/s)
      if (tableMatch) {
        result.push(<div key={i} className="lesson-table-container" dangerouslySetInnerHTML={{ __html: tableMatch[0] }} />)
      }
    } else if (trimmed.match(/^[🔬⚡🌊📐🧲🌐✅⚠️]$/)) {
      result.push(<div key={i} className="section-emoji">{trimmed}</div>)
    } else if (trimmed.match(/^🔹\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^🔹\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.trim().startsWith('•') || l.trim().startsWith('- '))
      result.push(
        <ul key={i} className="bullet-list">
          {items.map((item, j) => <li key={j}>{item.replace(/^[•-]\s*/, '').replace(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*/, '')}</li>)}
        </ul>
      )
    } else if (trimmed.match(/^যেখানে:$|^Where:$/i)) {
      result.push(<h4 key={i} className="subsection-title">{trimmed}</h4>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+.+:$/) || trimmed.match(/^মূল বৈশিষ্ট্য:$|^Key Properties:$/i)) {
      result.push(<h4 key={i} className="subsection-title">{trimmed.replace(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+/, '')}</h4>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+[A-Zঅ-ঔ].+/) && !trimmed.includes('=')) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+(.+)/)
      result.push(<h4 key={i} className="subsection-title">{match?.[1]}</h4>)
    } else if (trimmed.match(/^[📐🔹⚡🌊]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[📐🔹⚡🌊]\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.match(/^[A-Za-z].+=\s*.+$/) || trimmed.match(/^[a-z].+=\s*.+$/)) {
      result.push(<div key={i} className="formula-line">{trimmed}</div>)
    } else if (trimmed.match(/^✅\s*সংক্ষেপে:|^✅\s*In Short:$/i)) {
      result.push(<h4 key={i} className="summary-title">{trimmed}</h4>)
    } else {
      result.push(<p key={i} className="content-paragraph">{trimmed}</p>)
    }

    i++
  }

  return result
}
