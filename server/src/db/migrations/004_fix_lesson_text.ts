import type { Migration } from "./types.js";

/**
 * Data fix for seeded lessons that were stored with broken text. Each entry is an exact
 * search-and-replace over the lesson text fields; rows that no longer contain the bad text
 * (for example because an admin already rewrote it) are left untouched.
 */
const FIXES: { bad: string; good: string; note: string }[] = [
  // U+FFFD (replacement character) corruption in the Bangla text of four seeded lessons
  { bad: "ডিমাল্টিপ্লেক��সার", good: "ডিমাল্টিপ্লেক্সার", note: "DLD Combinational Circuits: demultiplexer" },
  { bad: "সিকোয়ে��শ��য়াল", good: "সিকোয়েনশিয়াল", note: "DLD Sequential Circuits: sequential" },
  { bad: "রেজ���স্টার", good: "রেজিস্টার", note: "CA CPU Organization: register" },
  { bad: "ম্���া��িং", good: "ম্যাপিং", note: "CA Memory Hierarchy: (cache) mapping" },
  // Basic Physics bp5: group velocity is dω/dk = dE/dp, not dp/dm
  { bad: "v_g = dω/dk = dp/dm = v", good: "v_g = dω/dk = dE/dp = v", note: "Basic Physics bp5: group velocity" },
];

const lit = (s: string) => `'${s.replace(/'/g, "''")}'`;
const fixArray = (col: string, bad: string, good: string) =>
  `COALESCE((SELECT array_agg(replace(t, ${bad}, ${good}) ORDER BY i) FROM unnest(${col}) WITH ORDINALITY AS u(t, i)), ${col})`;

function fixSql({ bad, good }: { bad: string; good: string }): string {
  const b = lit(bad);
  const g = lit(good);
  return `UPDATE lessons SET
  content_en = replace(content_en, ${b}, ${g}),
  content_bn = replace(content_bn, ${b}, ${g}),
  takeaways_en = ${fixArray("takeaways_en", b, g)},
  takeaways_bn = ${fixArray("takeaways_bn", b, g)},
  updated_at = now()
WHERE strpos(content_en, ${b}) > 0
   OR strpos(COALESCE(content_bn, ''), ${b}) > 0
   OR strpos(COALESCE(array_to_string(takeaways_en, chr(1)), ''), ${b}) > 0
   OR strpos(COALESCE(array_to_string(takeaways_bn, chr(1)), ''), ${b}) > 0;`;
}

export const LESSON_TEXT_FIXES = FIXES;

export const migration004: Migration = {
  version: 4,
  name: "fix_lesson_text",
  sql: FIXES.map(fixSql).join("\n"),
};
