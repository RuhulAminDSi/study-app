import { pool } from "./src/db/pool.js";

(async () => {
  try {
    const r = await pool.query(`
      SELECT c.chapter_number, c.title_en,
             count(l.id)::int AS lessons,
             count(*) FILTER (WHERE l.content_en LIKE '%data-notes=%')::int AS with_notes,
             string_agg(l.title_en, ' | ' ORDER BY m.sort_order, l.lesson_number) FILTER (WHERE l.content_en NOT LIKE '%data-notes=%') AS missing
        FROM chapters c
        LEFT JOIN side_menus m ON m.chapter_id = c.id
        LEFT JOIN lessons l ON l.side_menu_id = m.id
       GROUP BY c.chapter_number, c.title_en
       ORDER BY c.chapter_number`);
    console.log("chapter | lessons | notes | still missing a note");
    for (const c of r.rows) {
      console.log(String(c.chapter_number).padStart(2) + " | " + String(c.lessons).padStart(7) + " | " +
        String(c.with_notes).padStart(5) + " | " + (c.missing ? c.missing.length + ": " + c.missing : "-"));
    }
    const tot = r.rows.reduce((a, b) => a + b.lessons, 0);
    const noted = r.rows.reduce((a, b) => a + b.with_notes, 0);
    console.log(`\nTOTAL lessons=${tot}  with a handwritten note=${noted}  without=${tot - noted}`);
  } catch (e) {
    console.log("DB ERROR: " + (e as Error).message);
  } finally {
    await pool.end();
  }
})();