// Exam Kit format (spec 2026-10-16-exam-edge-lesson-upgrade-design.md §4.2) and its checks, shared by the seeder
// (src/db/seedExamKits.ts) and the CLI check (npm run check:kit). A kit lives in data/exam-kits/<slug>.json.
// `heat` and `asked` are generated from the PYQ data by ex-question/tools/kit-asked.mjs; the rest is authored.

export interface Bi { en: string; bn: string }
export interface KitFact { id: string; en: string; bn: string; asOf: string; status: string; sources: string[] }

export interface ExamKit {
  slug: string;
  chapter: number;
  subject: string;
  lessonTitleEn: string;
  /** "draft" kits are checked without quotas and seeded unpublished. */
  status: "draft" | "published";
  updatedOn: string;
  heat?: { asked: number; recent: number; repeats: number; byBody: Record<string, number>; topClusters: { name: string; asked: number }[] };
  asked?: { group: string; cluster: string; question: string; kind: string; askedIn: string[]; sources: string[]; repeat: boolean }[];
  mustKnow: Bi[];
  formulas: { title: Bi; formula: string; example: { question: Bi; working: Bi; answer: string } }[];
  traps: Bi[];
  writtenPlan: { question: Bi; askedIn: string[]; skeleton: { en: string[]; bn: string[] }; marks: Partial<Record<"5" | "10" | "20", Bi>> }[];
  viva: { q: Bi; a: Bi }[];
  facts: string[];
  sources: { url: string; title: string; accessed: string }[];
}

/** Minimum counts for a published kit; bank quotas are counted from data/questions by lesson_slug. */
export const KIT_MINIMUMS = { mustKnow: 15, traps: 5, viva: 5, writtenPlan: 3 };
export const BANK_MINIMUMS = { mcq: 30, written: 10 };
const FACT_MAX_AGE_DAYS = 183;

const isBi = (v: unknown): v is Bi =>
  !!v && typeof v === "object" && typeof (v as Bi).en === "string" && (v as Bi).en.trim() !== "" &&
  typeof (v as Bi).bn === "string" && (v as Bi).bn.trim() !== "";
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export interface KitCheckContext {
  facts: Map<string, KitFact>;
  /** questions in the bank for this lesson, by type; omit to skip the bank quota */
  bank?: { mcq: number; written: number; programming: number };
  today?: Date;
}

/** Returns a list of problems; empty means the kit is valid. Draft kits skip the minimum counts and bank quotas. */
export function checkKit(kit: ExamKit, file: string, ctx: KitCheckContext): string[] {
  const p: string[] = [];
  const at = (s: string) => p.push(`${file}: ${s}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kit.slug ?? "")) at("slug must be a lower-case slug");
  if (`${kit.slug}.json` !== file.replace(/^.*[\\/]/, "")) at("slug must match the file name");
  if (!Number.isInteger(kit.chapter)) at("chapter must be an integer");
  if (!kit.subject) at("subject is required");
  if (!kit.lessonTitleEn) at("lessonTitleEn is required");
  if (!["draft", "published"].includes(kit.status)) at('status must be "draft" or "published"');
  if (!ISO.test(kit.updatedOn ?? "")) at("updatedOn must be YYYY-MM-DD");

  const list = <T>(name: string, v: T[] | undefined, each: (x: T, i: number) => void) => {
    if (!Array.isArray(v)) { at(`${name} must be an array`); return; }
    v.forEach(each);
  };
  list("mustKnow", kit.mustKnow, (x, i) => { if (!isBi(x)) at(`mustKnow[${i}] needs en and bn`); });
  list("traps", kit.traps, (x, i) => { if (!isBi(x)) at(`traps[${i}] needs en and bn`); });
  list("viva", kit.viva, (x, i) => { if (!isBi(x?.q) || !isBi(x?.a)) at(`viva[${i}] needs q and a in en and bn`); });
  list("formulas", kit.formulas, (x, i) => {
    if (!isBi(x?.title) || !x?.formula || !isBi(x?.example?.question) || !isBi(x?.example?.working) || !x?.example?.answer) {
      at(`formulas[${i}] needs title (en/bn), formula and an example with question, working (en/bn) and answer`);
    }
  });
  list("writtenPlan", kit.writtenPlan, (x, i) => {
    if (!isBi(x?.question)) at(`writtenPlan[${i}].question needs en and bn`);
    if (!Array.isArray(x?.skeleton?.en) || !x.skeleton.en.length || !Array.isArray(x?.skeleton?.bn) || !x.skeleton.bn.length) {
      at(`writtenPlan[${i}].skeleton needs en and bn steps`);
    }
    const marks = Object.entries(x?.marks ?? {});
    if (!marks.length) at(`writtenPlan[${i}].marks needs at least one of 5, 10, 20`);
    for (const [k, v] of marks) if (!["5", "10", "20"].includes(k) || !isBi(v)) at(`writtenPlan[${i}].marks.${k} is invalid`);
  });
  list("asked", kit.asked ?? [], (x, i) => {
    if (!x?.question || !Array.isArray(x.sources) || !x.sources.length) at(`asked[${i}] needs the question and its sources`);
  });
  list("sources", kit.sources, (x, i) => { if (!/^https?:\/\//.test(x?.url ?? "") && !x?.url?.startsWith("ex-question/")) at(`sources[${i}].url must be a URL or an ex-question/ path`); });

  const today = ctx.today ?? new Date();
  list("facts", kit.facts, (id) => {
    const f = ctx.facts.get(id);
    if (!f) { at(`fact "${id}" is not in _facts.json`); return; }
    if (f.status.startsWith("unconfirmed")) at(`fact "${id}" is unconfirmed and can't be used yet`);
    const age = (today.getTime() - Date.parse(f.asOf)) / 86_400_000;
    if (age > FACT_MAX_AGE_DAYS) at(`fact "${id}" was last checked ${f.asOf}; re-check it before this wave`);
  });

  if (kit.status === "published") {
    for (const [k, min] of Object.entries(KIT_MINIMUMS)) {
      const n = (kit as unknown as Record<string, unknown[]>)[k]?.length ?? 0;
      if (n < min) at(`${k} has ${n}, a published kit needs at least ${min}`);
    }
    if (!kit.asked?.length) at("asked is empty: run ex-question/tools/kit-asked.mjs for this lesson");
    if (ctx.bank) {
      if (ctx.bank.mcq < BANK_MINIMUMS.mcq) at(`bank has ${ctx.bank.mcq} MCQs for this lesson, needs ${BANK_MINIMUMS.mcq}`);
      if (ctx.bank.written < BANK_MINIMUMS.written) at(`bank has ${ctx.bank.written} written questions for this lesson, needs ${BANK_MINIMUMS.written}`);
    }
  }
  return p;
}
