# Bit to Exabyte — Petrobangla Assistant Networking Engineer (ANE): suggested questions, Q72 (cont.)–73

- **Source image:** `10_petrobangla-ane-q72-73-sql-server-maintenance.jpg` (original file name `843366663_122143463409191819_6656406409500483606_n.jpg`)
- **Page:** 10 of 10 (folder-wide position; the pages carry no printed page number)
- **Paper / Post:** Assistant Networking Engineer (ANE), Petrobangla, "AP" — **suggested questions** compiled by the coaching from previous years, not a single real paper
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"). A faint logo watermark sits behind the text and hides nothing.
- No per-question exam tags are printed. These items count as "suggested for Petrobangla ANE", not as asked in a dated exam.
- Spelling and grammar are kept as printed; obvious typos are listed here, not corrected in the text.
- Last page; the rest of the page is blank apart from the watermark.
- Q73 repeats Q29 word for word. `HAVING COUNT ()>2` printed with empty parentheses.

## Content

*(Q72, continued)*

```sql
JOIN department d ON e.department_id = d.department_id
where salary> (SELECT AVG(salary) FROM employee where department_id = d.department_id)
GROUP BY department_name
HAVING COUNT ()>2
ORDER BY average_salary DESC;
```

73. Descuss server maintenance best practices, including routine tasks like clearing, monitoring, and applying security patches. How do these practices contributes to serve longevity and performance?

## Subject map (for Phase 2)

| Q | Subject | Topic |
|---|---|---|
| 73 | ICS | (repeat of 29) |
