import fs from "fs";
import os from "os";
import path from "path";
import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { checkKit, type ExamKit, type KitFact } from "../src/services/examKitShape";
import { checkKitFiles, seedBlueprints, seedExamKits } from "../src/db/seedExamKits";
import { seedExamPrep } from "../src/db/seedExamPrep";
import { resetDb, insertCandidate } from "./helpers/db";
import { candidateToken, createAdmin } from "./helpers/auth";

beforeEach(resetDb);

const bi = (s: string) => ({ en: s, bn: `${s} (বাংলা)` });
const FACT: KitFact = { id: "bd-5g", en: "5G launched 1 Sep 2025", bn: "৫জি", asOf: "2026-10-16", status: "confirmed", sources: ["https://example.org"] };

function kit(over: Partial<ExamKit> = {}): ExamKit {
  return {
    slug: "net-ip-firewalls", chapter: 9, subject: "NET", lessonTitleEn: "Firewalls, IPv4, IPv6", status: "published", updatedOn: "2026-10-16",
    heat: { asked: 120, recent: 60, repeats: 9, byBody: { bpsc: 20 }, topClusters: [{ name: "IP addressing & subnetting", asked: 90 }] },
    asked: [{ group: "G0173", cluster: "IP addressing & subnetting", question: "Find the range of 192.168.1.50/28", kind: "written", askedIn: ["PGCB AE(CSE) 2024"], sources: ["by-subject/09_NET.md#g0173"], repeat: true }],
    mustKnow: Array.from({ length: 15 }, (_, i) => bi(`fact ${i}`)),
    formulas: [{ title: bi("Hosts per subnet"), formula: "2^h − 2", example: { question: bi("/28?"), working: bi("h = 4"), answer: "14" } }],
    traps: Array.from({ length: 5 }, (_, i) => bi(`trap ${i}`)),
    writtenPlan: Array.from({ length: 3 }, (_, i) => ({ question: bi(`Q${i}`), askedIn: [], skeleton: { en: ["define"], bn: ["সংজ্ঞা"] }, marks: { "10": bi("table + example") } })),
    viva: Array.from({ length: 5 }, (_, i) => ({ q: bi(`q${i}`), a: bi(`a${i}`) })),
    facts: ["bd-5g"],
    sources: [{ url: "https://example.org", title: "Example", accessed: "2026-10-16" }],
    ...over,
  };
}

const ctx = (over = {}) => ({ facts: new Map([[FACT.id, FACT]]), bank: { mcq: 30, written: 10, programming: 3 }, today: new Date("2026-10-20"), ...over });

describe("checkKit", () => {
  it("accepts a complete published kit", () => {
    expect(checkKit(kit(), "net-ip-firewalls.json", ctx())).toEqual([]);
  });

  it("needs both languages, the minimum counts and the bank quota for a published kit", () => {
    const k = kit({ mustKnow: [{ en: "only English", bn: "" }], traps: [] });
    const problems = checkKit(k, "net-ip-firewalls.json", ctx({ bank: { mcq: 5, written: 1, programming: 0 } }));
    expect(problems.join("\n")).toMatch(/mustKnow\[0\] needs en and bn/);
    expect(problems.join("\n")).toMatch(/traps has 0/);
    expect(problems.join("\n")).toMatch(/bank has 5 MCQs/);
  });

  it("checks a draft for shape only", () => {
    expect(checkKit(kit({ status: "draft", traps: [], asked: [] }), "net-ip-firewalls.json", ctx({ bank: { mcq: 0, written: 0, programming: 0 } }))).toEqual([]);
  });

  it("rejects unknown, unconfirmed and stale facts", () => {
    const unconfirmed = { ...FACT, id: "x", status: "unconfirmed: sources disagree" };
    const stale = { ...FACT, id: "old", asOf: "2025-01-01" };
    const facts = new Map([[FACT.id, FACT], [unconfirmed.id, unconfirmed], [stale.id, stale]]);
    const problems = checkKit(kit({ facts: ["missing", "x", "old"] }), "net-ip-firewalls.json", ctx({ facts })).join("\n");
    expect(problems).toMatch(/"missing" is not in _facts.json/);
    expect(problems).toMatch(/"x" is unconfirmed/);
    expect(problems).toMatch(/"old" was last checked 2025-01-01/);
  });

  it("requires the file name to match the slug", () => {
    expect(checkKit(kit(), "db2.json", ctx())).toContain("db2.json: slug must match the file name");
  });
});

function dirs(kits: ExamKit[], bankForSlug = "net-ip-firewalls") {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "kits-"));
  const kitsDir = path.join(root, "exam-kits");
  const qDir = path.join(root, "questions");
  fs.mkdirSync(kitsDir);
  fs.mkdirSync(qDir);
  fs.writeFileSync(path.join(kitsDir, "_facts.json"), JSON.stringify({ facts: [FACT] }));
  for (const k of kits) fs.writeFileSync(path.join(kitsDir, `${k.slug}.json`), JSON.stringify(k));
  const rows = [
    ...Array.from({ length: 30 }, (_, i) => ({ type: "mcq", lesson_slug: bankForSlug, stem_en: `m${i}` })),
    ...Array.from({ length: 10 }, (_, i) => ({ type: "written", lesson_slug: bankForSlug, stem_en: `w${i}` })),
  ];
  fs.writeFileSync(path.join(qDir, "NET.json"), JSON.stringify(rows));
  return { kitsDir, qDir };
}

describe("seedExamKits", () => {
  it("adds kits once, publishes per status, and resolves facts into the stored data", async () => {
    const { kitsDir, qDir } = dirs([kit(), kit({ slug: "db2", chapter: 16, subject: "DBMS", status: "draft", lessonTitleEn: "SQL" })]);
    expect(checkKitFiles(kitsDir, qDir, new Date("2026-10-20"))).toEqual([]);
    expect(await seedExamKits(pool, kitsDir, qDir)).toEqual({ added: 2, refreshed: 0 });
    expect(await seedExamKits(pool, kitsDir, qDir)).toEqual({ added: 0, refreshed: 0 });
    const { rows } = await pool.query("SELECT slug, is_published, data->'factsResolved'->0->>'id' AS fact FROM exam_kits ORDER BY slug");
    expect(rows).toEqual([
      { slug: "db2", is_published: false, fact: "bd-5g" },
      { slug: "net-ip-firewalls", is_published: true, fact: "bd-5g" },
    ]);
  });

  it("refreshes a kit whose file is newer, and never brings back a deleted one", async () => {
    const { kitsDir, qDir } = dirs([kit()]);
    await seedExamKits(pool, kitsDir, qDir);
    fs.writeFileSync(path.join(kitsDir, "net-ip-firewalls.json"), JSON.stringify(kit({ updatedOn: "2026-11-01", lessonTitleEn: "Renamed" })));
    expect(await seedExamKits(pool, kitsDir, qDir)).toEqual({ added: 0, refreshed: 1 });
    expect((await pool.query("SELECT lesson_title_en FROM exam_kits")).rows[0].lesson_title_en).toBe("Renamed");
    await pool.query("DELETE FROM exam_kits");
    expect(await seedExamKits(pool, kitsDir, qDir)).toEqual({ added: 0, refreshed: 0 });
    expect((await pool.query("SELECT count(*)::int AS n FROM exam_kits")).rows[0].n).toBe(0);
  });

  it("refuses to seed when a kit is invalid", async () => {
    const { kitsDir, qDir } = dirs([kit({ traps: [] })]);
    await expect(seedExamKits(pool, kitsDir, qDir)).rejects.toThrow(/traps has 0/);
  });
});

describe("seedBlueprints", () => {
  it("creates one unpublished model test per blueprint with per-subject sections", async () => {
    await seedExamPrep(pool, path.join(os.tmpdir(), "no-questions-here"));
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "bp-"));
    fs.writeFileSync(path.join(dir, "bpsc-nc-screening.json"), JSON.stringify({
      id: "bpsc-nc-screening", title: { en: "BPSC screening", bn: "বাছাই" }, durationMinutes: 60, totalMarks: 100,
      sections: [
        { type: "mcq", label: "Technical", practised: true, questionCount: 40, marksPerQuestion: 1, negativeMark: 0.5, subjectWeights: { NET: 0.5, DBMS: 0.25, OS: 0.25 } },
        { type: "mcq", label: "Bangla", practised: false, marks: 20 },
      ],
    }));
    expect(await seedBlueprints(pool, dir)).toBe(1);
    expect(await seedBlueprints(pool, dir)).toBe(0);
    const m = (await pool.query("SELECT id, kind, blueprint_id, is_published, total_questions, negative_mark FROM mock_tests WHERE blueprint_id IS NOT NULL")).rows[0];
    expect(m).toMatchObject({ kind: "model", blueprint_id: "bpsc-nc-screening", is_published: false, total_questions: 40 });
    expect(Number(m.negative_mark)).toBe(0.5);
    const sections = (await pool.query(
      "SELECT s.code, ms.question_count, ms.type FROM mock_test_sections ms JOIN subjects s ON s.id = ms.subject_id WHERE ms.mock_test_id = $1 ORDER BY s.code",
      [m.id],
    )).rows;
    expect(sections).toEqual([
      { code: "DBMS", question_count: 10, type: "mcq" },
      { code: "NET", question_count: 20, type: "mcq" },
      { code: "OS", question_count: 10, type: "mcq" },
    ]);
  });
});

describe("exam kit routes", () => {
  async function seeded() {
    const { kitsDir, qDir } = dirs([kit(), kit({ slug: "db2", chapter: 16, subject: "DBMS", status: "draft", lessonTitleEn: "SQL" })]);
    await seedExamKits(pool, kitsDir, qDir);
  }

  it("needs a signed-in reader", async () => {
    await seeded();
    expect((await request(createApp()).get("/api/public/exam-kits/net-ip-firewalls")).status).toBe(401);
  });

  it("serves published kits to candidates and hides drafts", async () => {
    await seeded();
    const id = await insertCandidate();
    const auth = `Bearer ${candidateToken(id)}`;
    const list = await request(createApp()).get("/api/public/exam-kits").set("Authorization", auth);
    expect(list.body).toEqual([{ slug: "net-ip-firewalls", chapter_number: 9, lesson_title_en: "Firewalls, IPv4, IPv6", asked: 120 }]);
    const one = await request(createApp()).get("/api/public/exam-kits/net-ip-firewalls").set("Authorization", auth);
    expect(one.status).toBe(200);
    expect(one.body.data.mustKnow).toHaveLength(15);
    expect((await request(createApp()).get("/api/public/exam-kits/db2").set("Authorization", auth)).status).toBe(404);
    expect((await request(createApp()).get("/api/public/exam-kits/..%2Fetc").set("Authorization", auth)).status).toBe(404);
  });

  it("lets admins preview drafts and publish them", async () => {
    await seeded();
    const auth = `Bearer ${(await createAdmin()).token}`;
    expect((await request(createApp()).get("/api/public/exam-kits/db2").set("Authorization", auth)).status).toBe(200);
    const list = await request(createApp()).get("/api/exam-kits").set("Authorization", auth);
    expect(list.body.map((k: { slug: string; status: string }) => `${k.slug}:${k.status}`)).toEqual(["net-ip-firewalls:published", "db2:draft"]);
    const pub = await request(createApp()).patch("/api/exam-kits/db2").set("Authorization", auth).send({ is_published: true });
    expect(pub.body).toEqual({ slug: "db2", is_published: true });
    expect((await request(createApp()).patch("/api/exam-kits/db2").set("Authorization", auth).send({})).status).toBe(400);
    expect((await request(createApp()).patch("/api/exam-kits/nope").set("Authorization", auth).send({ is_published: true })).status).toBe(404);
  });
});
