# RAKUB Assistant Database Administrator (ADBA), written exam 04/12/2020 — Stack IT Job Solution sheet

- **Source:** SlideShare deck "bank-question-solutionadba-previous-year-question-for-ap-ane-ame-ada-ae" — https://www.slideshare.net/slideshow/bank-question-solutionadba-previous-year-question-for-ap-ane-ame-ada-ae/250217143 (9 slide images `s01.jpg`–`s09.jpg` in this folder, 2048 px renders from image.slidesharecdn.com; URL list in `source-urls.txt`)
- **Publisher:** Stack IT Job Solution ("A pattern Based IT job Solution", stackvaly.com). Header line lists "(BUET, DUET, RUET, KUET, IBA, DU, MIS, DPI, BB, BPSC" as the patterns the coaching covers; this is not an exam-taker statement.
- **Pages:** 9
- **Document type:** exam paper (questions with the coach's solutions)

## Transcription Notes

- Banner as printed: "ADBA - RAKUB / Solved By Stack IT Job Solution / A pattern IT Job Solution / Written question: [04/12/2020]". Post read as Assistant Database Administrator (ADBA) at Rajshahi Krishi Unnayan Bank. **Exam taker not printed.** Total marks and time not printed.
- Marks are printed per question (shown below). IT items add up to 10+10+10+10+5+5+10+10+10+10+5+50 = 145; with the two 20-mark focus items the paper totals 185 as printed (the sheet does not print a total).
- Non-IT: Bangla focus "বাংলাদেশের অর্থনীতিতে ক্ষুদ্র আইটি উদ্যোক্তাদের ভূমিকা" (20) and English focus "Importance of Mobile Banking during Pandemic" (20) — 2 questions, 40 marks. Not transcribed.
- Q5 refers to a figure: three boxes, "Table 1" (ASP.NET, C#.NET, SQL 2K5, JQUERY, VB.NET, PHP, MVC, JAVA, SQL 2K12), "Table 2" (PHP, MVC, C#.NET, JQUERY, SQL 2K12) and "Result" (ASP.NET, SQL 2K5, VB.NET, JAVA). Rendered as text below.
- Q12 "5 Queries from HR schema" (50): the sheet prints six numbered HR-schema queries with SQL. It does not say whether these are the exam's own five queries or the coach's examples; they are transcribed as printed, flagged as such.
- Typos kept: "btw", "Differ:", "Drop vs Drop Purge".
- Duplicate check: no RAKUB 2020 paper exists in `ex-question/` (grep for `04/12/2020`, `RAKUB` 2020); `exam-tags.json` has RAKUB keys only for 2021 and 2023.

## Content

### RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9

- Non-IT: Bangla focus (20), English focus (20) — 2 questions, 40 marks.

**1.** Explain ACID properties in details - **10**

> Printed answer: atomicity, consistency, isolation, durability, each with a funds-transfer example.

**2.** Index definition, usage of index, Index for PT. **10**

> Printed answer: index speeds SELECT/WHERE, slows INSERT/UPDATE; "Index for PT" answered as Percona `pt-index-usage` tool options.

**3.** Define View, Materialized View, Difference btw them and Usage of two. -10

> Printed answer: view = virtual, not stored; materialized view = stored snapshot, refreshed manually/by trigger, faster.

**4.** Differ: Primary vs Unique Key, Shared vs Exclusive Lock, Drop vs Drop Purge, Delete vs Truncate, -10

> Printed answer: comparison tables (one PK vs many unique keys, NULLs; S-lock read vs X-lock write; DROP to recycle bin vs PURGE permanent; DELETE DML/rollback vs TRUNCATE DDL).

**5.** Query for retrieving UNCOMMON Name from Name column of two given tables -5

```text
Table 1        Table 2        Result
ASP.NET        PHP            ASP.NET
C#.NET         MVC            SQL 2K5
SQL 2K5        C#.NET         VB.NET
JQUERY         JQUERY         JAVA
VB.NET         SQL 2K12
PHP
MVC
JAVA
SQL 2K12
```

> Printed answer: `SELECT * FROM TableA FULL OUTER JOIN TableB ON TableA.name = TableB.name WHERE TableA.id IS null OR TableB.id IS null`

**6.** Query to find out even number from given table - **5**

> Printed answer: `Select * from table where id % 2 = 0`

**7.** PHOTO/PDF/DOCX Data Type, how to find duplicate data, DDL, DML - **10**

> Printed answer: VARBINARY(MAX); `GROUP BY … HAVING COUNT(*) > 1`; DDL (CREATE, DROP, ALTER, TRUNCATE, COMMENT, RENAME) vs DML (INSERT, UPDATE, DELETE).

**8.** Constraint Definition, Why use constraint, Differ table and column level Constraint - 10

> Printed answer: constraints limit data in a table; table-level defined after columns (composite keys), column-level defined with the column (NOT NULL only here).

**9.** What are the ways for no data loss, describe. -10

> Printed answer: list of 12 measures (backups, diversify backups, encryption, antivirus, firewall, surge protection, DR plan, access levels…).

**10.** What are the roles of Database Engineer -10

> Printed answer: ten duties (performance tuning, design support, monitoring, scripts, reviews, debugging, mentoring DBAs, backup practice, documentation).

**11.** How to copy from Parent table to Child Table with 1 column dividing into 3 different column. -5

> Printed answer: CTE with `ROW_NUMBER()` and `MAX(CASE WHEN FLOOR(rn/2)=k …)` pivot.
> Answer issue: the printed query repeats the alias `Name1` (the second column should be `Name2`), and grouping by `rn % 2` with `FLOOR(rn/2)` only fills three columns when the table has exactly six rows; the general form groups by `rn / 3` and picks `CASE WHEN rn % 3 = 0/1/2`.

**12.** 5 Queries from HR schema: -50

The sheet prints these six items under Q12 (whether they are the exam's own queries is not stated):

1. Display details of jobs that were done by any employee who is currently drawing more than 15000 of salary.
2. Display department name, manager name, and salary of the manager for all managers whose experience is more than 5 years.
3. Display employee name if the employee joined before his manager.
4. Display employee name, job title for the jobs employee did in the past where the job was done less than six months.
5. Display employee name and country in which he is working.
6. Display department name, average salary and number of employees with commission within the department.

> Printed answer: one Oracle SQL query per item over the HR sample schema (EMPLOYEES, JOB_HISTORY, DEPARTMENTS, LOCATIONS, COUNTRIES, JOBS).
