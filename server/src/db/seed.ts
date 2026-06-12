import bcrypt from "bcrypt";
import { pool } from "./pool.js";

async function seed() {
  console.log("Seeding database...");

  // 1. Create default admin
  const hash = await bcrypt.hash("admin123", 12);
  await pool.query(
    `INSERT INTO admin_users (username, email, password_hash, role)
     VALUES ('admin', 'admin@studyhub.com', $1, 'super_admin')
     ON CONFLICT (username) DO NOTHING`,
    [hash],
  );
  console.log("  ✔ Admin user created (admin / admin123)");

  // 2. Chapters
  const chaptersData = [
    { num: 1, en: "1. Basic Physics", bn: "১. পদার্থবিদ্যার মূল ধারণা", lv: "Beginner" },
    { num: 2, en: "2. Introduction to Computer Systems", bn: "২. কম্পিউটার সিস্টেমের পরিচিতি", lv: "Beginner" },
    { num: 3, en: "3. Electrical Circuits", bn: "৩. তড়িৎ সার্কিট", lv: "Beginner" },
    { num: 4, en: "4. Digital Logic Design", bn: "৪. ডিজিটাল লজিক ডিজাইন", lv: "Intermediate" },
    { num: 5, en: "5. Basic Electronics", bn: "৫. মৌলিক ইলেকট্রনিক্স", lv: "Beginner" },
    { num: 6, en: "6. Microprocessor and Interfacing", bn: "৬. মাইক্রোপ্রসেসর ও ইন্টারফেসিং", lv: "Advanced" },
    { num: 7, en: "7. Computer Architecture", bn: "৭. কম্পিউটার আর্কিটেকচার", lv: "Intermediate" },
    { num: 8, en: "8. Communication Theory", bn: "৮. যোগাযোগ তত্ত্ব", lv: "Intermediate" },
    { num: 9, en: "9. Computer Networking and Security", bn: "৯. কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা", lv: "Intermediate" },
    { num: 10, en: "10. Structured Programming Language (C)", bn: "১০. স্ট্রাকচার্ড প্রোগ্রামিং ল্যাংগুয়েজ (C)", lv: "Intermediate" },
    { num: 11, en: "11. Object Oriented Programming (OOP)", bn: "১১. অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)", lv: "Intermediate" },
    { num: 12, en: "12. Discrete Mathematics", bn: "১২. ডিসক্রিট গণিত", lv: "Intermediate" },
    { num: 13, en: "13. Graphs", bn: "১৩. গ্রাফ তত্ত্ব", lv: "Intermediate" },
    { num: 14, en: "14. Theory of Computation", bn: "১৪. গণনার তত্ত্ব", lv: "Advanced" },
    { num: 15, en: "15. Data Structures and Algorithms", bn: "১৫. ডেটা স্ট্রাকচার ও অ্যালগরিদম", lv: "Advanced" },
    { num: 16, en: "16. Database Systems", bn: "১৬. ডেটাবেস সিস্টেম", lv: "Advanced" },
    { num: 17, en: "17. Software Engineering and Info System Design", bn: "১৭. সফটওয়্যার ইঞ্জিনিয়ারিং ও তথ্য সিস্টেম ডিজাইন", lv: "Advanced" },
    { num: 18, en: "18. Operating System", bn: "১৮. অপারেটিং সিস্টেম", lv: "Advanced" },
    { num: 19, en: "19. Artificial Intelligence", bn: "১৯. আর্টিফিসিয়াল ইন্টেলিজেন্স", lv: "Advanced" },
  ];

  for (const ch of chaptersData) {
    await pool.query(
      `INSERT INTO chapters (chapter_number, title_en, title_bn, level, is_published, sort_order)
       VALUES ($1, $2, $3, $4, true, $5) ON CONFLICT (chapter_number) DO NOTHING`,
      [ch.num, ch.en, ch.bn, ch.lv, ch.num],
    );
  }
  console.log(`  ✔ ${chaptersData.length} chapters seeded`);

  // 3. Side menus (one per chapter)
  for (const ch of chaptersData) {
    const chResult = await pool.query("SELECT id FROM chapters WHERE chapter_number = $1", [ch.num]);
    if (chResult.rows[0]) {
      await pool.query(
        `INSERT INTO side_menus (chapter_id, label_en, label_bn, sort_order, is_active)
         VALUES ($1, $2, $3, $4, true) ON CONFLICT DO NOTHING`,
        [chResult.rows[0].id, ch.en, ch.bn, ch.num],
      );
    }
  }
  console.log("  ✔ Side menus seeded");

  console.log("\n✅ Seed complete!");
  await pool.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
