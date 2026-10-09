import fs from "fs";
import os from "os";
import path from "path";
import { describe, it, expect, beforeEach } from "vitest";
import { pool } from "../src/db/pool";
import { seedModules, type SeedModule } from "../src/db/seed";
import { applyNotes, chapterDir, loadNotesManifest, viewerHtml, type NotesEntry } from "../src/db/applyNotes";
import { seedExamPrep } from "../src/db/seedExamPrep";
import { resetDb } from "./helpers/db";

beforeEach(resetDb);

const modules: SeedModule[] = [
  {
    title: "1. Basic Physics",
    level: "Beginner",
    lessons: [
      { title: "Electromagnetism Basics", content: "Charge text", contentBn: "আধান" },
      { title: "Logic Gates", content: "Basic Logic Gates:\n• NOT", contentBn: "মৌলিক লজিক গেট", code: "NAND = (A × B)'", takeaways: ["old"] },
    ],
  },
];

const replaceEntry: NotesEntry = {
  slug: "dld-logic-gates",
  chapterNumber: 1,
  mode: "replace",
  lessonTitleEn: "Logic Gates",
  heading: { en: "Logic Gates: notes", bn: "লজিক গেট: নোট" },
  takeaways: { en: ["NAND and NOR are universal"], bn: ["NAND ও NOR সর্বজনীন"] },
};

const addEntry: NotesEntry = {
  slug: "ch1-basic-physics",
  chapterNumber: 1,
  mode: "add",
  lessonTitleEn: "Revision Notes (Handwritten)",
  lessonTitleBn: "রিভিশন নোট (হাতে লেখা)",
  heading: { en: "Basic Physics notes", bn: "পদার্থবিজ্ঞান নোট" },
  takeaways: { en: ["F = kq₁q₂/r²"], bn: ["F = kq₁q₂/r²"] },
};

const CH1 = "01-basic-physics";

const lesson = async (title: string) =>
  (await pool.query("SELECT lesson_number, content_en, content_bn, code_en, takeaways_en, is_published FROM lessons WHERE title_en = $1", [title])).rows;

describe("chapterDir", () => {
  it("names the folder after the seed module's number and title", () => {
    expect(chapterDir(1, modules)).toBe(CH1);
    expect(chapterDir(17, [...Array(16)].map(() => modules[0]).concat({ title: "17. Software Engineering & Information System Design", lessons: [] })))
      .toBe("17-software-engineering-information-system-design");
    expect(chapterDir(2, modules)).toBeUndefined();
  });
});

describe("viewerHtml", () => {
  it("shows the notebook page by default with PDF and full-page buttons, and no Markdown button", () => {
    const html = viewerHtml(replaceEntry, "bn", CH1);
    expect(html.startsWith("<div")).toBe(true); // rendered as HTML, not by the legacy parser
    expect(html).toContain('data-notes="dld-logic-gates" data-notes-dir="01-basic-physics" data-lang="bn" data-title="লজিক গেট: নোট"');
    expect(html).toContain('<iframe class="hn-viewer-frame" src="/notes/01-basic-physics/dld-logic-gates/dld-logic-gates.bn.html"');
    expect(html).toContain('href="/notes/01-basic-physics/dld-logic-gates/dld-logic-gates.bn.pdf" download');
    expect(html).toContain('href="/notes/01-basic-physics/dld-logic-gates/dld-logic-gates.bn.html" target="_blank"');
    expect(html).not.toContain(".md");
    expect(html).not.toContain("Markdown");
  });
});

describe("applyNotes", () => {
  it("replaces a lesson that still holds its seed text, clearing stale code", async () => {
    await seedModules(pool, modules);
    expect(await applyNotes(pool, [replaceEntry], modules)).toEqual([{ slug: "dld-logic-gates", action: "replaced" }]);
    const [row] = await lesson("Logic Gates");
    expect(row.content_en).toBe(viewerHtml(replaceEntry, "en", CH1));
    expect(row.content_bn).toBe(viewerHtml(replaceEntry, "bn", CH1));
    expect(row.code_en).toBeNull();
    expect(row.takeaways_en).toEqual(["NAND and NOR are universal"]);
  });

  it("skips a lesson an admin has edited, unless forced", async () => {
    await seedModules(pool, modules);
    await pool.query("UPDATE lessons SET content_en = 'Admin rewrote this' WHERE title_en = 'Logic Gates'");
    const [skipped] = await applyNotes(pool, [replaceEntry], modules);
    expect(skipped).toMatchObject({ action: "skipped" });
    expect((await lesson("Logic Gates"))[0].content_en).toBe("Admin rewrote this");

    expect(await applyNotes(pool, [replaceEntry], modules, { force: true })).toEqual([{ slug: "dld-logic-gates", action: "replaced" }]);
    expect((await lesson("Logic Gates"))[0].content_en).toContain('data-notes="dld-logic-gates"');
  });

  it("refreshes its own lessons on re-run without duplicating them", async () => {
    await seedModules(pool, modules);
    await applyNotes(pool, [replaceEntry, addEntry], modules);
    const again = await applyNotes(pool, [replaceEntry, addEntry], modules);
    expect(again.map((r) => r.action)).toEqual(["refreshed", "refreshed"]);
    expect((await pool.query("SELECT count(*)::int AS n FROM lessons")).rows[0].n).toBe(3);
  });

  it("finds its own added lesson after a rename and updates the title instead of adding another", async () => {
    await seedModules(pool, modules);
    await applyNotes(pool, [addEntry], modules);
    const renamed = { ...addEntry, lessonTitleEn: "Revision Notes", lessonTitleBn: "রিভিশন নোট" };
    expect(await applyNotes(pool, [renamed], modules)).toEqual([{ slug: "ch1-basic-physics", action: "refreshed" }]);
    const { rows } = await pool.query("SELECT title_en, title_bn FROM lessons WHERE content_en LIKE '%data-notes=\"ch1-basic-physics\"%'");
    expect(rows).toEqual([{ title_en: "Revision Notes", title_bn: "রিভিশন নোট" }]);
  });

  it("adds a published lesson after the chapter's last lesson", async () => {
    await seedModules(pool, modules);
    expect(await applyNotes(pool, [addEntry], modules)).toEqual([{ slug: "ch1-basic-physics", action: "inserted" }]);
    const [row] = await lesson("Revision Notes (Handwritten)");
    expect(row).toMatchObject({ lesson_number: 3, is_published: true });
    expect(row.content_en).toContain('data-notes-kind="revision"');
  });

  it("skips note sets that are not published yet when given the published folder", async () => {
    await seedModules(pool, modules);
    const published = fs.mkdtempSync(path.join(os.tmpdir(), "notes-pub-"));
    fs.mkdirSync(path.join(published, CH1, "dld-logic-gates"), { recursive: true });
    fs.writeFileSync(path.join(published, CH1, "dld-logic-gates", "dld-logic-gates.en.html"), "<html></html>");
    const [skipped] = await applyNotes(pool, [replaceEntry], modules, { publishedDir: published });
    expect(skipped).toMatchObject({ action: "skipped", reason: expect.stringContaining("dld-logic-gates.bn.html") });
    expect((await lesson("Logic Gates"))[0].content_en).not.toContain("data-notes");

    fs.writeFileSync(path.join(published, CH1, "dld-logic-gates", "dld-logic-gates.bn.html"), "<html></html>");
    expect(await applyNotes(pool, [replaceEntry], modules, { publishedDir: published })).toEqual([{ slug: "dld-logic-gates", action: "replaced" }]);
  });

  it("accepts a single-language note set and falls back to it instead of pointing at an unpublished file", async () => {
    await seedModules(pool, modules);
    const published = fs.mkdtempSync(path.join(os.tmpdir(), "notes-pub-en-"));
    fs.mkdirSync(path.join(published, CH1, "pyq-ai"), { recursive: true });
    fs.writeFileSync(path.join(published, CH1, "pyq-ai", "pyq-ai.en.html"), "<html></html>");
    const enOnly: NotesEntry = {
      slug: "pyq-ai",
      chapterNumber: 1,
      mode: "add",
      langs: ["en"],
      lessonTitleEn: "Solved Past Questions",
      heading: { en: "AI: solved questions", bn: "AI: সমাধানসহ প্রশ্ন" },
      takeaways: { en: ["paradigms"], bn: ["প্যারাডাইগম"] },
    };
    expect(await applyNotes(pool, [enOnly], modules, { publishedDir: published })).toEqual([{ slug: "pyq-ai", action: "inserted" }]);

    // The Bangla view must not iframe pyq-ai.bn.html, which was never published.
    expect(viewerHtml(enOnly, "bn", CH1)).toContain('data-lang="en"');
    expect(viewerHtml(enOnly, "bn", CH1)).toContain('src="/notes/01-basic-physics/pyq-ai/pyq-ai.en.html"');
    expect(viewerHtml(enOnly, "bn", CH1)).not.toContain(".bn.html");
    // The English view is unaffected.
    expect(viewerHtml(enOnly, "en", CH1)).toContain('data-lang="en"');
  });

  it("still requires both languages for a note set that does not declare langs", async () => {
    await seedModules(pool, modules);
    const published = fs.mkdtempSync(path.join(os.tmpdir(), "notes-pub-both-"));
    fs.mkdirSync(path.join(published, CH1, "dld-logic-gates"), { recursive: true });
    fs.writeFileSync(path.join(published, CH1, "dld-logic-gates", "dld-logic-gates.en.html"), "<html></html>");
    const [skipped] = await applyNotes(pool, [replaceEntry], modules, { publishedDir: published });
    expect(skipped).toMatchObject({ action: "skipped", reason: expect.stringContaining("dld-logic-gates.bn.html") });
  });

  it("skips notes whose chapter or lesson does not exist", async () => {
    const results = await applyNotes(pool, [replaceEntry, addEntry], modules);
    expect(results.map((r) => r.action)).toEqual(["skipped", "skipped"]);
    await seedModules(pool, modules);
    const [missing] = await applyNotes(pool, [{ ...replaceEntry, lessonTitleEn: "No such lesson" }], modules);
    expect(missing).toMatchObject({ action: "skipped", reason: 'lesson "No such lesson" not found' });
  });

  it("keeps an added revision lesson out of the exam-prep topics", async () => {
    await seedModules(pool, modules);
    await applyNotes(pool, [replaceEntry, addEntry], modules);
    await seedExamPrep(pool, fs.mkdtempSync(path.join(os.tmpdir(), "no-questions-")));
    const topics = await pool.query("SELECT name_en FROM topics ORDER BY sort_order");
    expect(topics.rows.map((r) => r.name_en)).toEqual(["Electromagnetism Basics", "Logic Gates"]);
  });

  it("ships a manifest whose entries are complete", () => {
    for (const e of loadNotesManifest()) {
      expect(e.slug).toMatch(/^[a-z0-9-]+$/);
      expect(["replace", "add"]).toContain(e.mode);
      expect(e.heading.en && e.heading.bn).toBeTruthy();
      expect(e.takeaways.en.length).toBeGreaterThan(0);
      expect(e.takeaways.bn.length).toBe(e.takeaways.en.length);
    }
  });
});
