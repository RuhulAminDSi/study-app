# Database Systems (DBMS): past exam questions

Every question from the photographed sheets, books and PDFs in `ex-question/` that belongs to this subject. The same question asked in several exams, or printed in several sources, is shown once. For each question you get **where it was asked** (the exams, with names normalised in `../exam-tags.json`) and **where it was taken from** (each source document, linked to its transcription and image).

- **Distinct questions:** 458 (from 541 records: Written 449, MCQ 44, Viva 48)
- **Exams it appears in:** 157
- **Corrections to printed answers:** 16
- **How counts work:** "Asked in (N)" counts different government/public-sector recruitment exams (BCS, NTRCA, BPSC, state banks, public bodies) and BUET M.Sc. admission tests. Private-bank exams and compiled viva experiences are listed but not counted. Coaching suggestion sheets and model tests never add to the count.

## Most-asked topics

| # | Topic | Exams | Questions | Viva mentions |
|---|---|---|---|---|
| 1 | [SQL queries](#sql-queries) | 94 | 174 | 9 |
| 2 | [Keys](#keys) | 30 | 40 | 10 |
| 3 | [ER model & relationships](#er-model--relationships) | 28 | 44 | 0 |
| 4 | [DBMS concepts & architecture](#dbms-concepts--architecture) | 24 | 51 | 13 |
| 5 | [Transactions & ACID](#transactions--acid) | 19 | 24 | 1 |
| 6 | [Normalization](#normalization) | 15 | 25 | 2 |
| 7 | [Indexing, B+ tree & hashing](#indexing-b-tree--hashing) | 15 | 20 | 0 |
| 8 | [Other](#other) | 14 | 32 | 5 |
| 9 | [Views, triggers & procedures](#views-triggers--procedures) | 8 | 17 | 6 |
| 10 | [SQL command types](#sql-command-types) | 6 | 7 | 0 |
| 11 | [Distributed DB, NoSQL & backup](#distributed-db-nosql--backup) | 5 | 8 | 0 |
| 12 | [Concurrency control & recovery](#concurrency-control--recovery) | 5 | 12 | 2 |
| 13 | [Data warehouse & mining](#data-warehouse--mining) | 3 | 4 | 0 |

## Most-asked questions

Ranked by the number of exams, with recent exams (2022 onwards) weighted higher.

1. **Analyze the output of the following SQL. Select department_name, AVG(salary) As average_salary From employee e JOIN department d ON e.department_id = d.departm…**  
   Asked in (3): Combined Bank Officer(IT) 2023; Rupali Bank ANA 2023; Rupali Bank ANE 2023  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL · Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions · duranta.app question bank (coaching compilation of the question paper) — 07 — RUPALI BANK — ANA (5 Post) 2023 — Job ID: 10166 — 04.11.2023 — Exam taker: BIBM — Marks: Focus + GK (15+15+10) + IT (15×10) — pages 35–37 — see [G3140](#g3140)
2. **Explain Primary key, Candidate key, and Foreign key.**  
   Asked in (3): 36th BCS (2016); SPCBL AME 2021; Teletalk AM(IT) 2023 · viva mentions: 3  
   Source: Bank IT viva (compiled from candidates' viva experiences) · duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32) · duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 · duranta.app question bank (coaching compilation of the question paper) — 09 — The Security Printing Corporation (Bangladesh) Ltd — Assistant Maintenance Engineer — 08-12-2021 — Exam taker: CTI — Written, Time 2 Hours, marks not printed — page 14 · duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — NPCBL Engineer (Quality), SQA related Job Exam Suggestions (Engineer (Quality) – Nuclear Power Plant Company Bangladesh Ltd), CSE Career Master Guide, no exam/date/marks, pp. 19-21 · Question paper found on the web (see the folder README for the URL) — Teletalk Assistant Manager (IT) 2023 — see [G4625](#g4625)
3. **What are the ACID properties of transaction to ensure data reliability and integrity?**  
   Asked in (3): BBL AM(ICT) 2019; BPSC AP 2023; Milk Vita AM(CSE) 2023  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL — see [G0951](#g0951)
4. **What is Database?**  
   Asked in (2): BKKB AP 2017; EGCB SAE(ICT) 2023 · viva mentions: 1  
   Source: Bank IT viva (compiled from candidates' viva experiences) · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL — see [G0672](#g0672)
5. **সাধারণ ফাইলভিত্তিক সিস্টেমের চেয়ে DBMS এর সুবিধা কী কী?**  
   Asked in (2): 15th NTRCA ICT; 17th NTRCA ICT (2023)  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL · duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5) — see [G0949](#g0949)
6. **ডাটাবেস ট্রান্সেকশনের ACID Properties সম্পর্কে লিখুন।**  
   Asked in (2): 15th NTRCA ICT; 17th NTRCA ICT (2023)  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL · duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5) — see [G1961](#g1961)
7. **Which is known as database aggregate function? a. where b. sum c. select d. from**  
   Asked in (2): DoICT ANE 2019; DoICT AP 2020  
   Source: duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33 · duranta.app question bank (coaching compilation of the question paper) — DoICT AP 2020 — Department of ICT, Assistant Programmer, 2020 — exam taker not printed — MCQ, marks not printed — 10 MCQs — pages 9–33 — see [G2580](#g2580)
8. **Which is not a command/keyword in SQL? (REMOVE / ORDER BY / SELECT / WHERE)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0075](#g0075)
9. **Cascadeless schedules prevent: (deadlocks / aborts / reading uncommitted data / long transactions)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0087](#g0087)
10. **Which key is known as the minimal super key? (Primary / Secondary / Foreign / Candidate)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0107](#g0107)
11. **Bitmap indexes are particularly well-suited for: (high-cardinality columns / low-cardinality columns / large text fields / JSON)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0121](#g0121)
12. **Write-ahead logging requires: (data first, log later / no redo phase / log record flushed before data page / none)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0125](#g0125)
13. **EMPLOYEE(id, name, department, salary): find employees who work in a department whose average salary is lower than the average salary of all departments.**  
   Asked in (1): BPDB AE(CSE) 2023  
   Source: BPDB Assistant Engineer (CSE) (BUET) (2023-02-24) — see [G0158](#g0158)
14. **Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, deptlocation): list departments with average monthly salary > 1000.**  
   Asked in (1): Petrobangla AM(CSE) 2024  
   Source: Petrobangla Assistant Manager (CSE) (BUET) (2024-05-31) — see [G0210](#g0210)
15. **Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offeringlocation, empno): retrieve course details for courses with exactly …**  
   Asked in (1): Petrobangla AM(CSE) 2024  
   Source: Petrobangla Assistant Manager (CSE) (BUET) (2024-05-31) — see [G0211](#g0211)
16. **Find employees whose manager is in the same region as the employee (schema given).**  
   Asked in (1): DPDC AM(ICT) 2025  
   Source: DPDC Assistant Manager (ICT) (2025-06-27) — see [G0276](#g0276)
17. **For a given scenario, identify entities, attributes and relationships.**  
   Asked in (1): BSCL AE(CSE) 2026  
   Source: Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21) — see [G0291](#g0291)
18. **Draw the ER diagram.**  
   Asked in (1): BSCL AE(CSE) 2026  
   Source: Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21) — see [G0292](#g0292)
19. **Convert the ERD into relational schemas with primary and foreign keys.**  
   Asked in (1): BSCL AE(CSE) 2026  
   Source: Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21) — see [G0293](#g0293)
20. **How does indexing improve query performance?**  
   Asked in (1): BSCL AE(CSE) 2025  
   Source: Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2025-08-23) — see [G0306](#g0306)

## Coaching "standard pattern" topics (not counted)

Topics the Bit to Exabyte question book lists as its standard pattern for this subject (from `../Standard Pattern/`). They show what the coaching expects, not what was asked.

- 03. SQL: highest salary, 2nd highest salary, duplicate rows — [Standard Pattern/01_super-ict-index-p1-q01-14.md](../Standard%20Pattern/01_super-ict-index-p1-q01-14.md)
- 05. ACID properties in DBMS — [Standard Pattern/01_super-ict-index-p1-q01-14.md](../Standard%20Pattern/01_super-ict-index-p1-q01-14.md)
- 16. Normalization: 1NF, 2NF, 3NF, BCNF; functional, partial, transitive dependency — [Standard Pattern/02_super-ict-index-p2-q15-38.md](../Standard%20Pattern/02_super-ict-index-p2-q15-38.md)
- 27. SQL: Book and Author join with country and year filter — [Standard Pattern/02_super-ict-index-p2-q15-38.md](../Standard%20Pattern/02_super-ict-index-p2-q15-38.md)
- 33. DBMS keys (primary, candidate, super, foreign, composite); indexing disadvantages — [Standard Pattern/02_super-ict-index-p2-q15-38.md](../Standard%20Pattern/02_super-ict-index-p2-q15-38.md)
- 45. ER diagram: library management system — [Standard Pattern/03_super-ict-index-p3-q39-63.md](../Standard%20Pattern/03_super-ict-index-p3-q39-63.md)
- 47. Triggers in DBMS with SQL example — [Standard Pattern/03_super-ict-index-p3-q39-63.md](../Standard%20Pattern/03_super-ict-index-p3-q39-63.md)
- 83. Database vs data warehouse vs data mining — [Standard Pattern/04_super-ict-index-p4-q64-85.md](../Standard%20Pattern/04_super-ict-index-p4-q64-85.md)
- 92. ATM transaction architecture; ACID in ATM transactions — [Standard Pattern/05_super-ict-index-p5-q86-109.md](../Standard%20Pattern/05_super-ict-index-p5-q86-109.md)
- 97. Database relationships; use case diagram; ER diagram for e-commerce — [Standard Pattern/05_super-ict-index-p5-q86-109.md](../Standard%20Pattern/05_super-ict-index-p5-q86-109.md)
- 117. Hadoop; architecture; HDFS block and replica calculations — [Standard Pattern/06_super-ict-index-p6-q110-120-descriptive.md](../Standard%20Pattern/06_super-ict-index-p6-q110-120-descriptive.md)
- 02. SQL on Department and Employee: inserts, join, department average, above-average employees — [Standard Pattern/08_super-ict-index-p8-aptitude-bcs-sets.md](../Standard%20Pattern/08_super-ict-index-p8-aptitude-bcs-sets.md)

## All questions by topic

## SQL queries

<a id="g3140"></a>

### Analyze the output of the following SQL. Select department_name, AVG(salary) As average_s… <sub>G3140</sub>

*Written*

Analyze the output of the following SQL. Select department_name, AVG(salary) As average_salary From employee e JOIN department d ON e.department_id = d.department_id Where salary> (SELECT AVG(salary) From employee where department_id= d.department_id) GROUP BY department_name HAVING COUNT ()>2 ORDER BY average_salary DESC;

- **Asked in (3):** Combined Bank Officer(IT) 2023; Rupali Bank ANA 2023; Rupali Bank ANE 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q10 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q23 — [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q28 — [suggestion based on previous yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md](../suggestion%20based%20on%20previous%20yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md) · [image](../suggestion%20based%20on%20previous%20yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.jpg)
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q72 — [suggestion based on previous yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md](../suggestion%20based%20on%20previous%20yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md) · [image](../suggestion%20based%20on%20previous%20yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.jpg); [suggestion based on previous yr/10_petrobangla-ane-q72-73-sql-server-maintenance.md](../suggestion%20based%20on%20previous%20yr/10_petrobangla-ane-q72-73-sql-server-maintenance.md) · [image](../suggestion%20based%20on%20previous%20yr/10_petrobangla-ane-q72-73-sql-server-maintenance.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — 07 — RUPALI BANK — ANA (5 Post) 2023 — Job ID: 10166 — 04.11.2023 — Exam taker: BIBM — Marks: Focus + GK (15+15+10) + IT (15×10) — pages 35–37, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2580"></a>

### Which is known as database aggregate function? a. where b. sum c. select d. from <sub>G2580</sub>

*MCQ*

Which is known as database aggregate function? a. where b. sum c. select d. from

- **Asked in (2):** DoICT ANE 2019; DoICT AP 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33, Database Management Systems (DBMS) Q5 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)
  - duranta.app question bank (coaching compilation of the question paper) — DoICT AP 2020 — Department of ICT, Assistant Programmer, 2020 — exam taker not printed — MCQ, marks not printed — 10 MCQs — pages 9–33, Database Management Systems (DBMS) Q7 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g0075"></a>

### Which is not a command/keyword in SQL? (REMOVE / ORDER BY / SELECT / WHERE) <sub>G0075</sub>

*MCQ*

Which is not a command/keyword in SQL? (REMOVE / ORDER BY / SELECT / WHERE)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q24 — [BCS/34_maximum-power-transfer-sql-8255-ppi.md](../BCS/34_maximum-power-transfer-sql-8255-ppi.md) · [image](../BCS/34_maximum-power-transfer-sql-8255-ppi.jpg)
- **Printed answer:** (ক) REMOVE (deleting rows uses DELETE)

<a id="g0158"></a>

### EMPLOYEE(id, name, department, salary): find employees who work in a department whose ave… <sub>G0158</sub>

*Written*

EMPLOYEE(id, name, department, salary): find employees who work in a department whose average salary is lower than the average salary of all departments.

- **Asked in (1):** BPDB AE(CSE) 2023
- **Source:**
  - BPDB Assistant Engineer (CSE) (BUET) (2023-02-24), Q10 — [BUET JOB/19_protocol-layer-sql-terms.md](../BUET%20JOB/19_protocol-layer-sql-terms.md) · [image](../BUET%20JOB/19_protocol-layer-sql-terms.jpg); [BUET JOB/31_bpdb-protocols-sql-algorithms.md](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.md) · [image](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.jpg)
- **Printed answer:** SELECT ... WHERE e.salary < (SELECT AVG(salary) FROM employee) AND e.department IN (SELECT department ... GROUP BY department HAVING AVG(salary) < (SELECT AVG(salary) FROM employee)).
- **Correction:** The extra condition e.salary < overall average wrongly drops higher-paid employees of those departments; only the department IN (... HAVING AVG(salary) < (SELECT AVG(salary) FROM employee)) filter is needed.

<a id="g0210"></a>

### Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, dept… <sub>G0210</sub>

*Written*

Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, deptlocation): list departments with average monthly salary > 1000.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - Petrobangla Assistant Manager (CSE) (BUET) (2024-05-31), Q3(a) — [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

<a id="g0211"></a>

### Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offer… <sub>G0211</sub>

*Written*

Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offeringlocation, empno): retrieve course details for courses with exactly 2 offerings.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - Petrobangla Assistant Manager (CSE) (BUET) (2024-05-31), Q3(b) — [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

<a id="g0276"></a>

### Find employees whose manager is in the same region as the employee (schema given). <sub>G0276</sub>

*Written*

Find employees whose manager is in the same region as the employee (schema given).

- **Asked in (1):** DPDC AM(ICT) 2025
- **Source:**
  - DPDC Assistant Manager (ICT) (2025-06-27), Q5 — [BUET JOB/28_islamic-bank-cont-and-dpdc.md](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) · [image](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.jpg)

<a id="g0311"></a>

### Define SQL and write a query to find duplicates in the employee table. <sub>G0311</sub>

*Written*

Define SQL and write a query to find duplicates in the employee table.

- **Asked in (1):** BBA AME 2025
- **Source:**
  - BBA Assistant Maintenance Engineer (2025-07-12), Q4 — [BUET JOB/33_sql-array-recursion-questions.md](../BUET%20JOB/33_sql-array-recursion-questions.md) · [image](../BUET%20JOB/33_sql-array-recursion-questions.jpg)

<a id="g0437"></a>

### Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department, Course, Offeri… <sub>G0437</sub>

*Written*

Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department, Course, Offering: find departments whose average monthly salary is greater than 1000.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - BOGMC (Petrobangla) Assistant Manager (2024), Q3(a) — [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md#p3); [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md#p4)
- **Printed answer:** SELECT deptno, AVG(monthlysalary) FROM Employee GROUP BY deptno HAVING AVG(monthlysalary) > 1000;

<a id="g0438"></a>

### Same schema (Offering(offbegindate, crscode, offeringlocation, empno)): find the courses … <sub>G0438</sub>

*Written*

Same schema (Offering(offbegindate, crscode, offeringlocation, empno)): find the courses that have more than two offerings.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - BOGMC (Petrobangla) Assistant Manager (2024), Q3(b) — [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md#p3); [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md#p4)
- **Printed answer:** SELECT crscode, COUNT(*) FROM Offering GROUP BY crscode HAVING COUNT(*) > 2;

<a id="g0819"></a>

### Same schema: write an SQL query showing the name of the employee who borrowed the maximum… <sub>G0819</sub>

*Written*

Same schema: write an SQL query showing the name of the employee who borrowed the maximum number of equipment.

- **Asked in (1):** BAPEX AGM(ICT) 2023
- **Source:**
  - BAPEX Assistant General Manager (ICT) (BUET) (2023-01-20), Q3(ii) — [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg); [PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md) · [image](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.jpg)
- **Printed answer:** Joins employee/hire with a subquery grouping hire BY eqp_id ORDER BY count DESC LIMIT 1
- **Correction:** Groups by equipment, so it returns employees who hired the most-hired equipment, not the employee with the most hires; also uses emp_id/eqp_id instead of employee_id/equipment_id. Correct: SELECT e.name FROM employee e JOIN hire h ON e.id=h.employee_id GROUP BY e.id,e.name HAVING COUNT(*) = (SELECT MAX(c) FROM (SELECT COUNT(*) c FROM hire GROUP BY employee_id) t).

<a id="g0843"></a>

### Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptnam… <sub>G0843</sub>

*Written*

Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, deptlocation), Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offeringlocation, empno): display departments with average monthly salary > 1000.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - Petrobangla Assistant Manager (CSE) (2024-05-31), Q3(a) — [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

<a id="g0844"></a>

### Same schema: retrieve course details for courses that have exactly 2 offerings. <sub>G0844</sub>

*Written*

Same schema: retrieve course details for courses that have exactly 2 offerings.

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - Petrobangla Assistant Manager (CSE) (2024-05-31), Q3(b) — [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

<a id="g0893"></a>

### Given Student and Course tables, find student information. <sub>G0893</sub>

*Written*

Given Student and Course tables, find student information.

- **Asked in (1):** ICB Securities AP 2026
- **Source:**
  - ICB Securities Trading Company Limited Assistant Programmer (2026-06-27), Q2(a) — [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) · [image](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.jpg)

<a id="g0894"></a>

### Find the courses and their number of students where enrollment is ≤ 30. <sub>G0894</sub>

*Written*

Find the courses and their number of students where enrollment is ≤ 30.

- **Asked in (1):** ICB Securities AP 2026
- **Source:**
  - ICB Securities Trading Company Limited Assistant Programmer (2026-06-27), Q2(b) — [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) · [image](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.jpg)

<a id="g0975"></a>

### Database Query: Employee (ID, First_name, Last_name, Joining_date, Salary) Employee_Info … <sub>G0975</sub>

*Written · marked important in the Bit to Exabyte book*

Database Query: Employee (ID, First_name, Last_name, Joining_date, Salary) Employee_Info (Emp_ID, Designation) a. Create both tables b. Show department-wise min, max, average salary of employees c. Show details of employees joined before February 2023.

- **Asked in (1):** MRA SCO 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q4 — [bit to exabyte/09_bte-p009-sql-q01-05.md](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) · [image](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q17 — [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg)

<a id="g0979"></a>

### Consider the Schema employee(id, name, salary), equipment(id, name, price), hire(employee… <sub>G0979</sub>

*Written · marked important in the Bit to Exabyte book*

Consider the Schema employee(id, name, salary), equipment(id, name, price), hire(employee_id, equipment_id); Write the SQL query to show the name of employee who borrow the maximum equipment?

- **Asked in (1):** BAPEX AGM(ICT) 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q8 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q21 — [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)

<a id="g0981"></a>

### Employee table হতে Employee_id, Employee কে খোঁজে বের করার SQL Command লিখ যাদের গড় sala… <sub>G0981</sub>

*Written*

Employee table হতে Employee_id, Employee কে খোঁজে বের করার SQL Command লিখ যাদের গড় salary 2000 উপরে।

- **Asked in (1):** BTCL JAM 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q11 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q24 — [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)

<a id="g1145"></a>

### Query's: Employee & department table given: (i) Write the employee name who got same sala… <sub>G1145</sub>

*Written*

Query's: Employee & department table given: (i) Write the employee name who got same salary named Rahim but not same job of Rahim. (ii) Write the employee's name who's average salary is more than company's average salary.

- **Asked in (1):** BGDCL AM(CSE) 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q2 — [bit to exabyte/09_bte-p009-sql-q01-05.md](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) · [image](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q15 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg); [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg)

<a id="g1146"></a>

### From an Employee table. Write SQL statement statement according to the following question… <sub>G1146</sub>

*Written · marked important in the Bit to Exabyte book*

From an Employee table. Write SQL statement statement according to the following question: (i) Find out the employees who join the same date (ii) Find those employees whose salary greater than 8,000 and Less than 25,000.

- **Asked in (1):** BRDB AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q3 — [bit to exabyte/09_bte-p009-sql-q01-05.md](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) · [image](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q16 — [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg)

<a id="g1821"></a>

### (Schema as in Q2) (a) Select person name who bought American category product <sub>G1821</sub>

*Written*

(Schema as in Q2) (a) Select person name who bought American category product

- **Asked in (1):** NWPGCL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Assistant Manager (ICT) 12/01/2024, Q2(a) — [duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md](../duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md)

<a id="g2143"></a>

### একটি mySQL database এর ডাটা ব্যাক আপ ওঁ ব্যাক আপ করা ডাটা রিস্টোর করার কমান্ড লিখ। <sub>G2143</sub>

*Written*

একটি mySQL database এর ডাটা ব্যাক আপ ওঁ ব্যাক আপ করা ডাটা রিস্টোর করার কমান্ড লিখ।

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024, Q5 — [duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md](../duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md)

<a id="g2148"></a>

### Department (dept_id,Salary, Dept_name) Employee(dept_id, emp_name) যাদের স্যালারির গড় ৫০… <sub>G2148</sub>

*Written*

Department (dept_id,Salary, Dept_name) Employee(dept_id, emp_name) যাদের স্যালারির গড় ৫০০০০ থেকে বেশি তাদের নাম,আইডি দেখাও (Find Name, ID whose average salary is greater than 50000)

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 (Set-04), Q3 — [duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md](../duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md)

<a id="g2158"></a>

### Employee & department table given. (i) Write the employee name who got same salary named … <sub>G2158</sub>

*Written*

Employee & department table given. (i) Write the employee name who got same salary named Rahim but not same job of Rahim.

- **Asked in (1):** BGDCL AM(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BGDCL Assistant Manager (CSE) 15.03.2024, Q5(i) — [duranta/1713750743-bakhrabad-gas-distribution-company-limited-bgdcl-am-cse/1713750743.md](../duranta/1713750743-bakhrabad-gas-distribution-company-limited-bgdcl-am-cse/1713750743.md)

<a id="g2159"></a>

### Employee & department table given. (ii) Write the employee's name who's average salary is… <sub>G2159</sub>

*Written*

Employee & department table given. (ii) Write the employee's name who's average salary is more than company's average salary

- **Asked in (1):** BGDCL AM(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BGDCL Assistant Manager (CSE) 15.03.2024, Q5(ii) — [duranta/1713750743-bakhrabad-gas-distribution-company-limited-bgdcl-am-cse/1713750743.md](../duranta/1713750743-bakhrabad-gas-distribution-company-limited-bgdcl-am-cse/1713750743.md)

<a id="g2196"></a>

### Write query to find out supliers name who supplies 'wheel' at least cost. Suppliers (sid,… <sub>G2196</sub>

*Written*

Write query to find out supliers name who supplies 'wheel' at least cost. Suppliers (sid, sname, address) Parts (pid, pname, color) Catalog (sid, pid, cost)

- **Asked in (1):** Titas Gas AE(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Titas Gas Assistant Engineer (CSE) 24/05/2024, Q5(a) — [duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md](../duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md)

<a id="g2202"></a>

### Employee (empno, PK, empname, monthlysalary, deptno, FK, mqrnd(FK)) Department(deptno, de… <sub>G2202</sub>

*Written*

Employee (empno, PK, empname, monthlysalary, deptno, FK, mqrnd(FK)) Department(deptno, deptname,deptlocation) Course(crscode,pk, crd desc, crs category, crs duration); Offering(off begingate, crscode fk, offeringlocation, empno fk) (a) Dept has averageMonthlySalary greater than 1000;

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Petrobangla Assistant Manager (CSE/IT/ICT) 31/05/2024, Q3(a) — [duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md](../duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md)

<a id="g2258"></a>

### Consider you are given a database of a pet society with the following relations: Animals … <sub>G2258</sub>

*Written*

Consider you are given a database of a pet society with the following relations: Animals (ID: integer, Name: string, PrevOwner: string, DateAdmitted: date, Type: string Adopter (PSIN: integer, Name: string, Address: string, OtherAnimals: integer Adoption(AnimalID: integer, PSIN: integer, AdoptDate: date, chipNo: integer) Give a sql query that list total number of adoptions on June 30, 2024 for each animal type

- **Asked in (1):** Combined Bank Officer(IT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Officer (IT) — 04.10.2024 — organisation not printed (= Combined 2 Bank (10184) Officer IT 2024, BIBM, per `1777536660.md`) — Exam taker: not printed — marks not printed — pages 1–10, Q15 — [duranta/1728262949-officer-it/1728262949.md](../duranta/1728262949-officer-it/1728262949.md)
  - duranta.app question bank (coaching compilation of the question paper) — 12 — Combined 2 Bank (10184) — Officer IT 2024 — 04.10.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT: 50 + Math+GK: 20); Written: Subjective (150) + Math (20) + Focus (10) + B/E+E/B — pages 47–49, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2411"></a>

### Employee টেবিল হতে যে সকল কর্মচারীদের বেতন 30000 টাকার বেশি তাদের নাম ও পদবী আলাদা করার S… <sub>G2411</sub>

*Written*

Employee টেবিল হতে যে সকল কর্মচারীদের বেতন 30000 টাকার বেশি তাদের নাম ও পদবী আলাদা করার SQL কমান্ড লিখুন?

- **Asked in (1):** DESCO SAE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DESCO Sub-Assistant Engineer 2022, ৬ — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2488"></a>

### Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 1) wr… <sub>G2488</sub>

*Written*

Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 1) write a sql query to select the name from applicant table which is female and name start with Capital letter

- **Asked in (1):** DG Food AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Directorate of Food, Ministry of Food (DG Food), Assistant Programmer — Practical Test, 17.01.2022 — Exam Taker: BCC — time not printed — marks not printed ("Score : 30", "Score: 7" printed in header) — page 1, SQL 1 — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g2489"></a>

### Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 2) Co… <sub>G2489</sub>

*Written*

Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 2) Count the gender of all entry which joining date between 31/12/2021 to 01/01/2022 and division is Dhaka.

- **Asked in (1):** DG Food AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Directorate of Food, Ministry of Food (DG Food), Assistant Programmer — Practical Test, 17.01.2022 — Exam Taker: BCC — time not printed — marks not printed ("Score : 30", "Score: 7" printed in header) — page 1, SQL 2 — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g2490"></a>

### Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 3) Se… <sub>G2490</sub>

*Written*

Applicant (Applicant id, Applicant Name, Date of birth, Gender, Division, Position) 3) Select the applicant name which position is Assistant Programmer and Division is Dhaka

- **Asked in (1):** DG Food AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Directorate of Food, Ministry of Food (DG Food), Assistant Programmer — Practical Test, 17.01.2022 — Exam Taker: BCC — time not printed — marks not printed ("Score : 30", "Score: 7" printed in header) — page 1, SQL 3 — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g2576"></a>

### To remove a relational table from SQL database, we use ....... ক) Delete খ) Purge গ) Remo… <sub>G2576</sub>

*MCQ*

To remove a relational table from SQL database, we use ....... ক) Delete খ) Purge গ) Remove ঘ) Drop

- **Asked in (1):** BPSC AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী প্রোগ্রামার ২২ — non-cadre Assistant Programmer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 28 MCQs — pages 1–34, Database Management Systems (DBMS) Q2 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2651"></a>

### Create a table in MySQL to a person ID, Last Name, First Name, age.ID, and are not NULL. … <sub>G2651</sub>

*Written*

Create a table in MySQL to a person ID, Last Name, First Name, age.ID, and are not NULL. Insert two rows in the table.

- **Asked in (1):** WZPDCL SAE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Sub-Assistant Engineer (CSE) 27.05.2023, ৯ — [duranta/1766849185-wzpdcl-sae-2023-cse/1766849185.md](../duranta/1766849185-wzpdcl-sae-2023-cse/1766849185.md)

<a id="g2872"></a>

### Query for Employee table (Approx.) <sub>G2872</sub>

*Written*

Query for Employee table (Approx.)

- **Asked in (1):** DMTCL AE(ICT) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 8. Dhaka Mass Transit Company Limited (DMTCL), Assistant Engineer (ICT), 27.01.2023; Exam Taker: MIST; Time: 1hour; Mark:100; Dept: 56, Non-Dept-MCQ (44*1=44); pp. 12-13, Q2 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g2889"></a>

### ২ টা টেবিল দেওয়া ছিল। সেগুলো থেকে ২টা কুয়েরি করতে বলছে (জয়েনিং এর)। <sub>G2889</sub>

*Written*

২ টা টেবিল দেওয়া ছিল। সেগুলো থেকে ২টা কুয়েরি করতে বলছে (জয়েনিং এর)।

- **Asked in (1):** BKSP AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 10. Bangladesh Krira Shikkha Protishtan (BKSP), Assistant Programmer, 04-12-2022; exam taker not printed; Total Marks: 30; Time: 45 Minute; p. 16 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g3060"></a>

### Give SQL for the following queries - Worker (worker-id, worker-name, hourly-rate, skill-t… <sub>G3060</sub>

*Written*

Give SQL for the following queries - Worker (worker-id, worker-name, hourly-rate, skill-type, supervisor-id) Assignment (worker-id, building-id, start-date, num-days) Building (building-id, address, building-type) a) What are the skill types of workers assigned to building 'B02' (building-id)? b) List the name of the workers assigned to 'warehouse' (building-type) buildings. c) Find the no. of workers for each building where more than 5 workers are working for it. d) Give 5% hourly wage increment for the workers working for 'hospital' buildings

- **Asked in (1):** Combined Bank SO(IT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 15 — [Senior Officer (IT)-SBL, BDBL 2022 CTI] — 31.01.2022 — Exam taker: CTI — "5*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks" (as printed, IT figure cut) — pages 23–25, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3074"></a>

### Four queries (table's client, salesman, sale, order etc.) (Unable to collect this questio… <sub>G3074</sub>

*Written*

Four queries (table's client, salesman, sale, order etc.) (Unable to collect this question)

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3083"></a>

### Some marks are given in MARKS(id, mark) table, write a query to show the grades(F.A.C etc… <sub>G3083</sub>

*Written*

Some marks are given in MARKS(id, mark) table, write a query to show the grades(F.A.C etc.) according to the marks, and write another query to show the number of students who got a particular grade

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q10 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3099"></a>

### Analysis of following code: SELECT department-name, AVG(salary) as average-salary FROM em… <sub>G3099</sub>

*Written*

Analysis of following code: SELECT department-name, AVG(salary) as average-salary FROM employees e JOIN department d ON e. department-id = d. department-id Where salary > (SELECT AVG(salary) FROM employees) GROUP BY department-name HAVING COUNT(*) >2 . ORDER BY average-salary desk ;

- **Asked in (1):** Combined Bank Officer(IT) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 04 — Officer IT- Combined Bank — 14.10.2023 — Job ID: 10152 — Exam taker: BIBM — IT: 150 marks + Non IT: 40 marks + GK: 10 marks = 200 marks — pages 32–33, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3132"></a>

### Given a SQL query, write what is the Question for this query. <sub>G3132</sub>

*Written*

Given a SQL query, write what is the Question for this query.

- **Asked in (1):** RAKUB ANSE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 06 — RAKUB — ANSE (2 post) 2023 — 03.11.2023 — Exam taker: BIBM — Marks: Focus, GK (15+15+10) + IT (15×10) — pages 34–35, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3158"></a>

### Create table Department ( DeptCode int, DeptName Varchar (2Ø), Location varchar (2Ø) ) Cr… <sub>G3158</sub>

*Written*

Create table Department ( DeptCode int, DeptName Varchar (2Ø), Location varchar (2Ø) ) Create table Employee ( EmpCode int, EmpFname Varchar (2Ø), Salary int, Commission int DeptCode vachar (2Ø), ) a) Select all EmpFname with total salary (total salary is sum of salary and commission). b) Select all EmpFname, Location which salary is greater than avg salary in order by EmpFname. c) Select EmpFname and count employee number and order by employee number ascending.

- **Asked in (1):** Combined Bank AP 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 09 — Combined 5 bank (10198) SBL, BKB, KB, ICB — Assistant programmer 2024 — 09.02.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT:50 + Math+gk: 20); Written 10 Subjective Question (150) + Math 4(20) + Focus(20) + Letter(10) — pages 39–40, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3171"></a>

### Difference between MS Access and MS FoxPro in SQL or Oracle. [Combined Bank ADA 2024] <sub>G3171</sub>

*Written*

Difference between MS Access and MS FoxPro in SQL or Oracle. [Combined Bank ADA 2024]

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q12 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3175"></a>

### Database program with base and high-level language (SQL) to find out the interest rate fr… <sub>G3175</sub>

*Written*

Database program with base and high-level language (SQL) to find out the interest rate from the given database table. If the first two letters of the column in the account of the rate table are the same, then the rate of all those accounts will be the same in the EMP table. [Combined Bank ADA 2024] EMP table: | id | Acc | Name | salary | |---|---|---|---| | 1001 | Sb0090 | XXX | 10000 | | 1002 | Dp0022 | Firoz | 25900 | | 1003 | Ac0057 | Atul | 40000 | | 1005 | CC0023 | Sumon | 35000 | | Acc | Rate | |---|---| | Sb0290 | 10 | | Dp0262 | 12 | | CC00273 | 9 | | Ac0092 | 5 |

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q16 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3195"></a>

### Let a database has two tables, Customers and Orders. The following figure shows the parti… <sub>G3195</sub>

*Written*

Let a database has two tables, Customers and Orders. The following figure shows the partial data of these two tables. Based on this partial data, explain Inner, Left, Right and Full join. Show the result set of each join operation. Table: Customers Table: Orders. [Combined 3 Bank SO(IT) 24] | Customer_id | First_name | |---|---| | 1 | Rahim | | 2 | Karim | | 3 | Belal | | 4 | Rony | | 5 | Helal |

- **Asked in (1):** Combined Bank SO(IT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 11 (second) — Combined 3 Bank (10185) — Senior Officer IT 2024 — 17.05.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT: 50 + Math+GK: 20); Written: Subjective (150) + Math (20) + Focus (10) + B/E+E/B — pages 44–47, Q(unnumbered 4) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3209"></a>

### Consider the following relation: [Combined Bank Officer (IT) 25] (10 Marks) Sales(sales i… <sub>G3209</sub>

*Written*

Consider the following relation: [Combined Bank Officer (IT) 25] (10 Marks) Sales(sales id, salesman, region, sale amount, sale date) Write as SQL query to display the region, average sale amount, total number of sales for each region where. The average sale amount exceeds BDT 50183) and the total number of sales in that region is at least 5. (10 Marks)

- **Asked in (1):** Combined Bank Officer(IT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Combined Bank — Officer (IT) — 17.10.2025 — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 49–52, Q17 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3231"></a>

### You have table EMPLOYEES (ID, Name, DeptID) and table DEPARTMENTS (Dept, DeptName). Write… <sub>G3231</sub>

*Written*

You have table EMPLOYEES (ID, Name, DeptID) and table DEPARTMENTS (Dept, DeptName). Write the logical steps for pseudo SQL logic) to get a list of Employee Names who work in "IT". [BSCS AP (SB & Janata Bank) 26] 10

- **Asked in (1):** Combined Bank AP(SB & Janata) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 14 — BSCS (Sonali & Janata Bank PLC) — Assistant Programmer / Officer (IT) — 03/01/2026 — Exam taker: not printed — Time: 09-12; Written: 200 Marks — pages 52–55, Q20 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3351"></a>

### Write down the SQL command into the following two: (a) Find out the all information of em… <sub>G3351</sub>

*Written*

Write down the SQL command into the following two: (a) Find out the all information of employees from emp_info table. Where employee's salary is more than 20,000 and city is Dhaka.

- **Asked in (1):** NWPGCL JAM(ICT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager (ICT) 26.08.2022, 4(a) — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3352"></a>

### Write down the SQL command into the following two: (b) Update employee name 'Mr. X' in Em… <sub>G3352</sub>

*Written*

Write down the SQL command into the following two: (b) Update employee name 'Mr. X' in Emp info, whose epm_id is 2.

- **Asked in (1):** NWPGCL JAM(ICT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager (ICT) 26.08.2022, 4(b) — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3544"></a>

### Given a Patient table in a hospital database below. | Patient ID | Discase Norme | |---|-… <sub>G3544</sub>

*Written*

Given a Patient table in a hospital database below. | Patient ID | Discase Norme | |---|---| | 1 | Covid-19 | | 2 | Dialysis | | 3 | Covid-19 | | 4 | Dengue | Write down an SQL query to display the total number of patients under cach disease category.

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-ক Q13 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3555"></a>

### Given the following two tables (Students and Marks) in a database, write down the output … <sub>G3555</sub>

*Written*

Given the following two tables (Students and Marks) in a database, write down the output of the given SQL queries and write down the SQL queries for the outputs: Students | Studentid | StudentName | |---|---| | 1 | Mr. A | | 2 | Mr. B | | 3 | Mr. C | | 4 | Mr. D | Marks | Studentid | Subject | Mark | |---|---|---| | 1 | Math | 70 | | 2 | Math | 90 | | 3 | Math | 30 | | 1 | Bangali | 50 | | 2 | Bangali | 60 | | 3 | Bangali | 70 | | 1 | Physics | 80 | | 2 | Physics | 70 | | 3 | Physics | 60 | i) SELECT Count (*) FROM Students S LEFT JOIN Marks M; ii) SELECT StudentName From Students S JOIN Marks M ON S.StudentIdM.Studentid GROUP BY S.Studentld, S.StudentName HAVING SUM (Mark)>-200; iii) List all the students name and number of subjects they have completed. iv) List all the students who have not completed any subject. v) List all the subject names.

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-খ Q5 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3566"></a>

### (b) Consider the following database schema employee (employee_name, street, city) works (… <sub>G3566</sub>

*Written*

(b) Consider the following database schema employee (employee_name, street, city) works (employee_name, company_name, salary) company (employee_name, city) Write the SQL commands to perform the following operations: (i) Find the names of all employees who live in the city 'Dhaka'. (ii) Find the names of all employees whose salary in greater than BDT 1,00,000. (iii) Find the names of all employees who live in 'Dhaka' and whose salary in less than 1,00,000.

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q2(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3602"></a>

### Consider the following relation: Employee(EmpID, Name, Department, Salary) Write an SQL q… <sub>G3602</sub>

*Written*

Consider the following relation: Employee(EmpID, Name, Department, Salary) Write an SQL query to retrieve the Department, the total number of employees, and the average salary for each department. The output should display one record for each department.

- **Asked in (1):** Combined Bank SO(IT) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Senior Officer (IT), Grade-9 (Job ID-25104) — 25/07/2026 — Exam taker: not printed — Time 2 hours, Marks 200 (IT: 15×10 = 150) — pages 1–12, Q9 — [duranta/1785328629-so-it-job-id-25104/1785328629.md](../duranta/1785328629-so-it-job-id-25104/1785328629.md)

<a id="g3633"></a>

### Which SQL query is used to sort student records in descending order (largest to smallest)? <sub>G3633</sub>

*MCQ*

Which SQL query is used to sort student records in descending order (largest to smallest)?

- **Asked in (1):** Combined Bank Officer(IT) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Officer (IT), Grade-10 (Job ID-25105) — 31/07/2026 — Exam taker: not printed — Part A MCQ 1 hour; Part B Written 2 hours (IT 15 × 10 = 150) — pages 1–16, MCQ 22 — [duranta/1785503716-so-it-job-id-25105/1785503716.md](../duranta/1785503716-so-it-job-id-25105/1785503716.md)

<a id="g3954"></a>

### DBMS Query: Number of topic select count(*) group by name 4 more queries <sub>G3954</sub>

*Written*

DBMS Query: Number of topic select count(*) group by name 4 more queries

- **Asked in (1):** BUET M.Sc. April 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024, Q7 — [buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md](../buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md)

<a id="g4019"></a>

### Which one below is an example of a NoSQL database? (ক) MySQL (খ) MongoDB (গ) Oracle (ঘ) P… <sub>G4019</sub>

*MCQ*

Which one below is an example of a NoSQL database? (ক) MySQL (খ) MongoDB (গ) Oracle (ঘ) PostgreSQL

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q146 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4332"></a>

### Which clause is executed first in an SQL query? (a) WHERE (b) SELECT (c) FROM (d) ORDER BY <sub>G4332</sub>

*MCQ*

Which clause is executed first in an SQL query? (a) WHERE (b) SELECT (c) FROM (d) ORDER BY

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ15 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4334"></a>

### Which of the following is a DML (Data Manipulation Language) command? (a) CREATE (b) DELE… <sub>G4334</sub>

*MCQ*

Which of the following is a DML (Data Manipulation Language) command? (a) CREATE (b) DELETE (c) DROP (d) ALTER

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ17 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4341"></a>

### Which of the following is a command of Data Definition Language (DDL)? (a) SELECT (b) INS… <sub>G4341</sub>

*MCQ*

Which of the following is a command of Data Definition Language (DDL)? (a) SELECT (b) INSERT (c) UPDATE (d) CREATE

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ24 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4382"></a>

### SQL Querry- top 5 hospitals name from accident treatment [site's expanded wording, assume… <sub>G4382</sub>

*Written*

SQL Querry- top 5 hospitals name from accident treatment [site's expanded wording, assumed: A database contains a table named Hospital(HospitalID, HospitalName, Specialization, PatientCount). Write an SQL query to display the names of the five hospitals that specialize in accident treatment and have treated the highest number of patients.]

- **Asked in (1):** Combined Bank ADA 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items), Q4 (d) — [bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md](../bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md)

<a id="g4383"></a>

### SQL Querry error - salary [site's expanded wording, assumed: A developer writes the SQL s… <sub>G4383</sub>

*Written*

SQL Querry error - salary [site's expanded wording, assumed: A developer writes the SQL statement SELECT EmployeeName, Salary FROM Employees WHERE Salary > AVG(Salary);, but the query generates an error. Identify the problem and write a corrected SQL query.]

- **Asked in (1):** Combined Bank ADA 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items), Q5 (e) — [bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md](../bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md)

<a id="g4386"></a>

### Why not use nosql(mongoDB) why use RDBMS in Banking? [site's expanded wording, assumed: A… <sub>G4386</sub>

*Written*

Why not use nosql(mongoDB) why use RDBMS in Banking? [site's expanded wording, assumed: A bank is considering replacing its relational database system with MongoDB for its core banking application. Discuss whether this is an appropriate decision and justify why an RDBMS or NoSQL database would be more suitable.]

- **Asked in (1):** Combined Bank ADA 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items), Q8 (h) — [bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md](../bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md)

<a id="g4387"></a>

### R1 R2 lossless Join- decomposition database [site's expanded wording, assumed: A relation… <sub>G4387</sub>

*Written*

R1 R2 lossless Join- decomposition database [site's expanded wording, assumed: A relation R(A, B, C) is decomposed into R1(A, B) and R2(B, C). Explain whether the decomposition is lossless and describe the conditions required for a lossless join decomposition.]

- **Asked in (1):** Combined Bank ADA 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items), Q9 (i) — [bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md](../bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md)

<a id="g4403"></a>

### Explain the distinct filtering behaviors of a WHERE clause versus a HAVING clause withing… <sub>G4403</sub>

*Written*

Explain the distinct filtering behaviors of a WHERE clause versus a HAVING clause withing a SQL statement containing an aggregate execution layout.

- **Asked in (1):** RAKUB ANSE 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Rajshahi Krishi Unnayan Bank (RAKUB) — Assistant Network System Engineer (Job ID 10230) — 05-Jun-2026 — Exam taker: not stated — marks not printed — recollection (13 items), Q9 — [bank-written-web/2026-rakub-anse-itjobqns/rakub-anse-2026.md](../bank-written-web/2026-rakub-anse-itjobqns/rakub-anse-2026.md)

<a id="g4627"></a>

### Employees (Employee_id, Name, Salary, Manager_id, Department_id) Department (Department_i… <sub>G4627</sub>

*Written*

Employees (Employee_id, Name, Salary, Manager_id, Department_id) Department (Department_id, Department_name, Manager_id, City, DOB, Joining_date) (a) Find out the names of employee under a manager. (b) Sort the employees of each department based on paid salary where city = 'Dhaka' department wise in descending order .

- **Asked in (1):** BSCPLC AM(Engineering) 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BSCPLC Assistant Manager (Engineering) 13.12.2024, Q1 — [telecom-web/2024-bscplc-am-engineering-scribd-973052916/bscplc-am-engineering-2024.md](../telecom-web/2024-bscplc-am-engineering-scribd-973052916/bscplc-am-engineering-2024.md)

<a id="g4873"></a>

### Update a price where current price is less than 1000 <sub>G4873</sub>

*Written*

Update a price where current price is less than 1000

- **Asked in (1):** BUET AP 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh University of Engineering and Technology (BUET) — Assistant Programmer, 22/02/2025 (suggestion), W4 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g4897"></a>

### SQL Query: Table was given. (a) Write an SQL query to show the top 10 highest marks from … <sub>G4897</sub>

*Written*

SQL Query: Table was given. (a) Write an SQL query to show the top 10 highest marks from the Result table. (b) Write an SQL query to show the number of male and female students who passed, individually. (c) Write an SQL query to show the absent students in the Result table.

- **Asked in (1):** Jamuna Oil JO(IT & MIS) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Jamuna Oil Company Limited — Junior Officer (IT & MIS), 23/05/2025 (BUET) (suggestion), Q5 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g4916"></a>

### Write a SQL query to find full name and region when employee is same region to managers. <sub>G4916</sub>

*Written*

Write a SQL query to find full name and region when employee is same region to managers.

- **Asked in (1):** DPDC AM(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Dhaka Power Distribution Company Limited — AM ICT (Exam Controller), 27/06/2025 (BUET) (suggestion), Q8 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g4933"></a>

### Employees (emp_id, first_name, last_name, manager_id, salary, department_id) Department (… <sub>G4933</sub>

*Written*

Employees (emp_id, first_name, last_name, manager_id, salary, department_id) Department (department_id, department_name) Show Manager in which an employee is under supervision. Which employee is more than 2 years, show them and average salary.DESC sort of the employee Manager_id, num_ofemployee, average salary

- **Asked in (1):** Dhaka WASA AME(Network) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Dhaka WASA — Assistant Maintenance Engineer (Network), 04.07.2025 (BUET) (suggestion), Q11 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g0179"></a>

### Write the commands to back up and restore a MySQL database. <sub>G0179</sub>

*Written*

Write the commands to back up and restore a MySQL database.

- **Asked in (1):** PGCB SAE 2021
- **Source:**
  - PGCB Sub-Assistant Engineer (CSE) (BUET) (2021-09-30), Q1 — [BUET JOB/03_pgcb-sae-subnet-cfg-mysql-js.md](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.md) · [image](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.jpg)
- **Printed answer:** mysqldump -u user -p db > file.sql; mysql -u user -p db < file.sql.

<a id="g0198"></a>

### Table t(val INT) holds 1,2,3,NULL,NULL,4,5. What do SELECT COUNT(*) and SELECT COUNT(DIST… <sub>G0198</sub>

*Written*

Table t(val INT) holds 1,2,3,NULL,NULL,4,5. What do SELECT COUNT(*) and SELECT COUNT(DISTINCT val) return?

- **Asked in (1):** BCC AP 2021
- **Source:**
  - BCC Assistant Programmer (BUET) (2021-02-12), Q5 — [BUET JOB/06_c-recursion-sql-java-completion.md](../BUET%20JOB/06_c-recursion-sql-java-completion.md) · [image](../BUET%20JOB/06_c-recursion-sql-java-completion.jpg)
- **Printed answer:** COUNT(*) = 6; COUNT(DISTINCT val) = 5.
- **Correction:** COUNT(*) counts all rows including NULLs: 7, not 6. COUNT(DISTINCT val) = 5 is right.

<a id="g0238"></a>

### Powerplant(Powerplant_ID, location, type, capacity, unit_price), Customer(Customer_ID, na… <sub>G0238</sub>

*Written*

Powerplant(Powerplant_ID, location, type, capacity, unit_price), Customer(Customer_ID, name, address, DoB, monthly_demand), Customer_usage_profile(ID, month_name, Customer_ID, Powerplant_ID): relational algebra for customers with a yearly bill above Tk 5,000.

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q6(i) — [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

<a id="g0953"></a>

### Write difference between relational database and NoSQL database. <sub>G0953</sub>

*Written*

Write difference between relational database and NoSQL database.

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q9 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q9 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g0982"></a>

### SQL Query for finding Dept names for departments Find out the employees whose salaries ar… <sub>G0982</sub>

*Written*

SQL Query for finding Dept names for departments Find out the employees whose salaries are greater than the salaries of their managers.

- **Asked in (1):** NESCO AM(ICT) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q12 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q25 — [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)

<a id="g0983"></a>

### Suppose, 'Employee' table (emp_id, emp_name, dept_id, salary) and 'Department' table (dep… <sub>G0983</sub>

*Written*

Suppose, 'Employee' table (emp_id, emp_name, dept_id, salary) and 'Department' table (dept_id, dept_name, increment_dept). Create a tigger to increment the salary of the employee by 10% whose salary is above 30000.

- **Asked in (1):** PGCB AE(CSE) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q13 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q26 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0984"></a>

### Below tables are given, Employee (employee_id, name, salary, department) Leave (employee_… <sub>G0984</sub>

*Written*

Below tables are given, Employee (employee_id, name, salary, department) Leave (employee_id, date, reason, no_leaves) Holiday (Date, description): (i) Write query to show all employee's leave count. (ii) Write query to show employees who are in 'HR' department and have taken at least 5 leaves.

- **Asked in (1):** Rupali Bank ANE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q14 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q27 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0985"></a>

### Find the Query for the Instructor table: a) Find the average salary of instructors in eac… <sub>G0985</sub>

*Written*

Find the Query for the Instructor table: a) Find the average salary of instructors in each department. b) Find the names and average salaries of all departments whose average salary is greater than 42000. c) Find names of instructors with salary greater than that of some (at least one) instructor in the CSE department.

- **Asked in (1):** NRCC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q15 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q28 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0986"></a>

### Write a SQL query to find those employees who report that manager whose first name is 'ab… <sub>G0986</sub>

*Written*

Write a SQL query to find those employees who report that manager whose first name is 'abc'. Return first name, last name, employee ID and salary.

- **Asked in (1):** PGCL SAE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q16 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q29 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0987"></a>

### emp [e_id, e_name, dept_id, salary, DOB], dept [dept_id, city, dept_name]; প্রত্যেকটি Dep… <sub>G0987</sub>

*Written · marked important in the Bit to Exabyte book*

emp [e_id, e_name, dept_id, salary, DOB], dept [dept_id, city, dept_name]; প্রত্যেকটি Department এর নাম এবং ঐ Department এর employee দের গড় Salary দেখার SQL Query লিখ।

- **Asked in (1):** NESCO JAM(ICT) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q17 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q30 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0988"></a>

### Given Table: Project (Project_id, Project_name, Manager_name) Location (location_id, Loca… <sub>G0988</sub>

*Written*

Given Table: Project (Project_id, Project_name, Manager_name) Location (location_id, Location_name, project_id) Employee (Employee_id, Employee_Name, Location_id, Joning date, Salary) Write a query to show project_name, Location_name, Total_salary of each projects employee who joined before 'January 2021'

- **Asked in (1):** APSCL AE(ICT) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q18 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q31 — [bit to exabyte/31_bte-g2-p17-database-sql-q26-31.md](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) · [image](../bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.jpg)

<a id="g0989"></a>

### Database table by name Loan Records is given below: | Borrower | Bank_Manager | Loan_Amou… <sub>G0989</sub>

*Written*

Database table by name Loan Records is given below: | Borrower | Bank_Manager | Loan_Amount | |---|---|---| | Rahim | Shuvo | 1000.00 | | Shamim | Rasel | 500.00 | | Mamun | Shuvo | 7000.00 | What is the output of the following SQL query? ```sql SELECT count (*) FROM ( (SELECT Borrower, Bank_Manager, FROM Loan_Records) AS S NATURAL JOIN (SELECT Bank_Manager, Loan_Amount FROM Loan_Records) AS T); ```

- **Asked in (1):** BAUST AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q19 — [bit to exabyte/11_bte-p011-sql-q14-19.md](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) · [image](../bit%20to%20exabyte/11_bte-p011-sql-q14-19.jpg); [bit to exabyte/12_bte-p012-sql-q19-22.md](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.md) · [image](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q32 — [bit to exabyte/32_bte-g2-p18-database-sql-q32-36.md](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) · [image](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.jpg)

<a id="g0990"></a>

### Consider the following Schemas- Movies (title, year, length, genre, studioName, producerC… <sub>G0990</sub>

*Written*

Consider the following Schemas- Movies (title, year, length, genre, studioName, producerCert) starsIn (movieTitle, movieYear, starName, salary) MovieStar (name, address, gender, birthdate) MovieExec (name, address, producerCert, netWorth) Studio (name, address) Write SQL queries for the following: (a) Find the address of a studio named MGM (b) Find the number of movies that was not produced by "MGM"

- **Asked in (1):** BPSC AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q20 — [bit to exabyte/12_bte-p012-sql-q19-22.md](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.md) · [image](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q33 — [bit to exabyte/32_bte-g2-p18-database-sql-q32-36.md](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) · [image](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.jpg)

<a id="g0991"></a>

### What will be the output after running all the following queries? [code] <sub>G0991</sub>

*Written*

What will be the output after running all the following queries? ```sql CREATE Table t( val INT ); INSERT INTO t(val) values (1), (2), (3), (null), (null), (4), (5); SELECT count(*) val_count From t; SELECT count(Distinct val) val_count From t; ```

- **Asked in (1):** BCC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q21 — [bit to exabyte/12_bte-p012-sql-q19-22.md](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.md) · [image](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.jpg)

<a id="g0992"></a>

### Given a database schema and worker table with fully code: Now writes SQL Query from the f… <sub>G0992</sub>

*Written*

Given a database schema and worker table with fully code: Now writes SQL Query from the following questions. - Write a query to get distinct name - Write a query to get the first three letter of first_name column from worker table.

- **Asked in (1):** DPDC JAM(ICT) 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q22 — [bit to exabyte/12_bte-p012-sql-q19-22.md](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.md) · [image](../bit%20to%20exabyte/12_bte-p012-sql-q19-22.jpg); [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q34 — [bit to exabyte/32_bte-g2-p18-database-sql-q32-36.md](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) · [image](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.jpg)

<a id="g0993"></a>

### SQL Query: (i) Commission greater than 10% (ii) Remove duplicate data from table: <sub>G0993</sub>

*Written*

SQL Query: (i) Commission greater than 10% (ii) Remove duplicate data from table:

- **Asked in (1):** NU AP 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q23 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q35 — [bit to exabyte/32_bte-g2-p18-database-sql-q32-36.md](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) · [image](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.jpg)

<a id="g0995"></a>

### Write a query to select top 10% row from grade table. <sub>G0995</sub>

*Written*

Write a query to select top 10% row from grade table.

- **Asked in (1):** CB AP 2018
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q26 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q38 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g0996"></a>

### What is the SQL command used to fetch first 3 characters name from employees? <sub>G0996</sub>

*Written*

What is the SQL command used to fetch first 3 characters name from employees?

- **Asked in (1):** BCPSC AP 2018
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q27 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q39 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g0997"></a>

### Write an SQL query to insert a tuple in the table: Employee (ID, Name, Designation, and S… <sub>G0997</sub>

*Written*

Write an SQL query to insert a tuple in the table: Employee (ID, Name, Designation, and Salary).

- **Asked in (1):** NESCO AM(ICT) 2018
- **Source:**
  - Paper not shown on the source sheet, Q5 — [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q28 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q40 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)
- **Printed answer:** INSERT INTO employee(ID, Name, Designation, Salary) VALUES(1, "Compact", "Officer", 22000);

<a id="g1000"></a>

### নিচের Table টি তৈরি করার SQL কমান্ড লিখুন। student_info (std_id, name, department, phone_… <sub>G1000</sub>

*Written*

নিচের Table টি তৈরি করার SQL কমান্ড লিখুন। student_info (std_id, name, department, phone_number) a. Table টি তে ২টি record (insert) প্রবেশ করার SQL কমান্ড লিখুন। b. Table টি থেকে CSE বিভাগের ছাত্র/ছাত্রীদের নামের তালিকা বের করার SQL command লিখুন।

- **Asked in (1):** BPSC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q32 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q44 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g1805"></a>

### Database Query: Given two table COURSE (Course_ID, Course_name, Chief_ID) and INSTRUCTOR … <sub>G1805</sub>

*Written*

Database Query: Given two table COURSE (Course_ID, Course_name, Chief_ID) and INSTRUCTOR (Instructor_ID, Course_ID, Salary, Joining_date). Write down database query Average salary for different courses.

- **Asked in (1):** NACTAR 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q24 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q36 — [bit to exabyte/32_bte-g2-p18-database-sql-q32-36.md](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) · [image](../bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.jpg); [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)
  - Bit to Exabyte Model Test 01, 2 Oct 2026 (coaching mock, not a real paper) — Bit to Exabyte Model Test 01 (2026-10-02), Q8 — [model test/01_bte-model-test-01-2026-10-02.md](../model%20test/01_bte-model-test-01-2026-10-02.md) · [image](../model%20test/01_bte-model-test-01-2026-10-02.jpg)

<a id="g2382"></a>

### Employee টেবিল থেকে যেসকল Employee এর Salary 2500 থেকে 50000 এর মধ্যে এবং Designation হচ্… <sub>G2382</sub>

*Written*

Employee টেবিল থেকে যেসকল Employee এর Salary 2500 থেকে 50000 এর মধ্যে এবং Designation হচ্ছে officer এবং City হচ্ছে Dhaka তাদের দেখার জন্য SQL টেবিল দেখান।

- **Asked in (1):** NWPGCL JAM 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager 17-01-2020, 07 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2642"></a>

### Write an SQL query for 2nd highest score from the table 'T <sub>G2642</sub>

*Written*

Write an SQL query for 2nd highest score from the table 'T

- **Asked in (1):** WZPDCL AE(CSE) 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE) 29-06-2019, 11 — [duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md](../duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md)

<a id="g2916"></a>

### Main components of SQL are DDL (Data definition Language), DML (Data Manipulation Languag… <sub>G2916</sub>

*Written*

Main components of SQL are DDL (Data definition Language), DML (Data Manipulation Language) and DCL (Data Control Language). Give some examples of DDL, DML and DCL commands.

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 01 — BSCS Recruitment 2020, Combine 2 Bank (SB & JB) — Officer IT (Written) — date not printed — Exam taker: not printed — Time 2 Hours, Full Mark 200 — pages 1–3, Q5(L) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2940"></a>

### Answer the following question based on the following table in DBMS- Employee (emp_id, emp… <sub>G2940</sub>

*Written*

Answer the following question based on the following table in DBMS- Employee (emp_id, emp_name, street, emp_city, join_date) Works (emp_id, comp_name, leaves, salary, dept, man_id) Company (comp_id, comp_name, comp_city) Manager (man id, emp_id, man_name) (i) Write a SQL query to find employee details from the employee table who's Salary is between 5000 and 8000. (ii) Find all employees who earn more than the average salary of all employees of that department. (iii) Calculate the number of leaves taken by an employee. (iv) List the managers and the number of employees working for those managers.

- **Asked in (1):** JBL SO(ANE) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 03 — Assistant Network Engineer (ANE) – JBL — 12.11.2020 — Exam taker: not printed — IT: 10*16 marks + Non IT: 2*20 marks - 200 marks — pages 4–6, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2948"></a>

### Write those sql commands. Employees ( ename,street,city),Works (ename, cname, salary, joi… <sub>G2948</sub>

*Written*

Write those sql commands. Employees ( ename,street,city),Works (ename, cname, salary, joindate), Company (cname,city), Manages (ename,mname). i) Find name, street, city, who work for first Corporation bank and earn more than 3000. ii) Find name of all employees, who live in the same city and company for which they works. iii) Give all employees of first Corporation bank 10 percent salary raise. iv) Find the company with payroll less then 100000.

- **Asked in (1):** Combined Bank SO 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 04 — BSCS Combined 3 Bank (Sonali, Janata, Rakub) — Post: SO (Written) — 16-11-2020 — Exam taker: not printed — marks not printed — pages 6–8, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2975"></a>

### Provide SQL queries for the following statements. Note that a manager is also an employee… <sub>G2975</sub>

*Written*

Provide SQL queries for the following statements. Note that a manager is also an employee. Employee (Empid, Lastname, FirstName, street, city) Works (Empid, deptName, company, salary) Manager (manid, name, deptName) (i) Show the no of employees in each department. (ii) Give 15% of the salary to the employee whose salary is greater than 20000.

- **Asked in (1):** JBL ASA 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 07 — Assistant System Administrator (ASA)-JBL — 01.12.2021 — Exam taker: not printed — IT: 15*10 marks + Non - IT: 4*10 marks + GK: 2*5 marks — pages 12–14, Q13 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2990"></a>

### Comparison and Contrast between and NoSQL Database. <sub>G2990</sub>

*Written*

Comparison and Contrast between and NoSQL Database.

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2997"></a>

### Database Query: Four table is given. (table missing). <sub>G2997</sub>

*Written*

Database Query: Four table is given. (table missing).

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q13 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2998"></a>

### Write a query for find the publisher name which location is 'Dhaka' and which book is pub… <sub>G2998</sub>

*Written*

Write a query for find the publisher name which location is 'Dhaka' and which book is published after 1980 year.

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q14 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2999"></a>

### Write a query to change the type of Book name 'Science' to 'Computer Science' which branc… <sub>G2999</sub>

*Written*

Write a query to change the type of Book name 'Science' to 'Computer Science' which branch name is 'Dhaka' city.

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3348"></a>

### Database Query to show 2nd highest salary of an employee <sub>G3348</sub>

*Written*

Database Query to show 2nd highest salary of an employee

- **Asked in (1):** DUET AP 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DUET Assistant Programmer 2020, 7 — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3380"></a>

### Given a table : Employee (dept_id,dept_name,location),Employee(id,dept_id,salary,joining_… <sub>G3380</sub>

*Written*

Given a table : Employee (dept_id,dept_name,location),Employee(id,dept_id,salary,joining_date) Write a SQL query for the above table. Find the Average Salary of all Employees and Department name for each department .

- **Asked in (1):** BAERA Engineer(CSE) January 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Recruitment Exam 29/01/2021, 8 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g3768"></a>

### Update sql. Update the price i) rise cost by 10% when cost <500 ; i) less cost by 10% whe… <sub>G3768</sub>

*Written*

Update sql. Update the price i) rise cost by 10% when cost <500 ; i) less cost by 10% when cost>1000

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q8 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g3814"></a>

### There are two relations student (id, name, CGPA) and takes(id, course-id, semester) . The… <sub>G3814</sub>

*MCQ*

There are two relations student (id, name, CGPA) and takes(id, course-id, semester) . The student relation has 5 tuples and takes relation has 15 tuples. How many tuples will be the output for the SQL: SELECT * FROM student, takes? (a) 5+15 (b) 5 (c) 15 (d) 5*15

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q2 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3827"></a>

### The algebra for the SQL "SELECT nid FROM person" is a) σ nid (person) b) π nid (person) c… <sub>G3827</sub>

*MCQ*

The algebra for the SQL "SELECT nid FROM person" is a) σ nid (person) b) π nid (person) c) π nid (σ nid (person)) d) σ nid ( π nid (person) ) (a) Option a (b) Option b (c) Option c (d) Option d

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q15 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g4086"></a>

### কুয়েরি ল্যাংগুয়েজ বলতে কী বুঝেন? SQL এর Clause কয়টি ও কী কী বর্ণনা করুন। <sub>G4086</sub>

*Written*

কুয়েরি ল্যাংগুয়েজ বলতে কী বুঝেন? SQL এর Clause কয়টি ও কী কী বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ২ অথবা (খ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4220"></a>

### Query to find out even number from given table <sub>G4220</sub>

*Written*

Query to find out even number from given table

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q6 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4221"></a>

### PHOTO/PDF/DOCX Data Type, how to find duplicate data, DDL, DML <sub>G4221</sub>

*Written*

PHOTO/PDF/DOCX Data Type, how to find duplicate data, DDL, DML

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q7 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4222"></a>

### Constraint Definition, Why use constraint, Differ table and column level Constraint <sub>G4222</sub>

*Written*

Constraint Definition, Why use constraint, Differ table and column level Constraint

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q8 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4225"></a>

### How to copy from Parent table to Child Table with 1 column dividing into 3 different colu… <sub>G4225</sub>

*Written*

How to copy from Parent table to Child Table with 1 column dividing into 3 different column.

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q11 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4226"></a>

### 5 Queries from HR schema (items printed on the sheet, not stated to be the exam's own): 1… <sub>G4226</sub>

*Written*

5 Queries from HR schema (items printed on the sheet, not stated to be the exam's own): 1. Display details of jobs that were done by any employee who is currently drawing more than 15000 of salary. 2. Display department name, manager name, and salary of the manager for all managers whose experience is more than 5 years. 3. Display employee name if the employee joined before his manager. 4. Display employee name, job title for the jobs employee did in the past where the job was done less than six months. 5. Display employee name and country in which he is working. 6. Display department name, average salary and number of employees with commission within the department.

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q12 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4227"></a>

### Which one is not unary operation in relational algebra <sub>G4227</sub>

*MCQ*

Which one is not unary operation in relational algebra

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Sonali Bank & Janata Bank (BSCS combined 2 bank) — Officer (IT/ICT) — Preliminary MCQ — 02 October 2020 — Exam taker: not stated — 80 MCQ (technical Q41–80), stems only, MCQ41 — [bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md](../bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md)

<a id="g4272"></a>

### 7. Write SQL command from the following tables. Employee (ename, street, city) Works (ena… <sub>G4272</sub>

*Written*

7. Write SQL command from the following tables. Employee (ename, street, city) Works (ename, cname, salary, joindate) Company (cname, city) Manages (ename, mname) (a) Find name, street, city who work for First Corporation Bank and earn more than 30000 (b) Find name of all employees, who live in the same city and company for which they work.

- **Asked in (1):** Combined Bank AP 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 6 Banks & Financial Institutions (BSCS) — Assistant Programmer — 2021 (date conflicting: 18/03/2021 on the MCQ page; 15-01-2022 in the site's analysis page) — Exam taker: not stated — recollection (8 items), Q6 — [bank-written-web/2021-6banks-ap-itjobqns/6banks-ap-2021.md](../bank-written-web/2021-6banks-ap-itjobqns/6banks-ap-2021.md)

<a id="g4440"></a>

### 3 queries from country(name, continent, area, population) to find a city with maximum pop… <sub>G4440</sub>

*Written*

3 queries from country(name, continent, area, population) to find a city with maximum population, area wise list, people having more than 10 million.

- **Asked in (1):** BPDB AE(CSE) 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BPDB Assistant Engineer (CSE) 2018, Q10 — [power-sector-web/2018-bpdb-ae-cse-scribd-384369493/bpdb-ae-cse-2018.md](../power-sector-web/2018-bpdb-ae-cse-scribd-384369493/bpdb-ae-cse-2018.md)

<a id="g4447"></a>

### Database quarry Update related <sub>G4447</sub>

*Written*

Database quarry Update related

- **Asked in (1):** PGCB SAE(Computer) 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — PGCB SAE (Computer) 24.12.2020, Q3 — [power-sector-web/2020-pgcb-sae-computer-carrierbd/pgcb-sae-computer-2020.md](../power-sector-web/2020-pgcb-sae-computer-carrierbd/pgcb-sae-computer-2020.md)

<a id="g4461"></a>

### SQL Query for list the dept name whose average salary is greater than the average salary … <sub>G4461</sub>

*Written*

SQL Query for list the dept name whose average salary is greater than the average salary of the company. [Table structure given; Something Like…] (carrierbd: Employee(empno(PK), empname, empsal, deptno(FK)); Department(deptno(PK), deptname, deptdate, empno(FK)))

- **Asked in (1):** NESCO AM(ICT) 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NESCO Assistant Manager (ICT) 31.12.2021, Q3(a) — [power-sector-web/2021-nesco-am-ict-carrierbd-askunion/nesco-am-ict-2021.md](../power-sector-web/2021-nesco-am-ict-carrierbd-askunion/nesco-am-ict-2021.md)

<a id="g4473"></a>

### Query : given two tables and find out average CGPA. <sub>G4473</sub>

*Written*

Query : given two tables and find out average CGPA.

- **Asked in (1):** NHA AP 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — National Housing Authority (Ministry of Housing and Public Works), Assistant Programmer — Written, 29.11.2019 — Exam taker: not printed — marks/time not printed, Q1 — [ministry-ap-web/2019-nha-ap-written-bdquestionbank/nha-ap-2019-written.md](../ministry-ap-web/2019-nha-ap-written-bdquestionbank/nha-ap-2019-written.md)

<a id="g0205"></a>

### Write an SQL query to get the second highest salary from Employee. <sub>G0205</sub>

*Written*

Write an SQL query to get the second highest salary from Employee.

- **Asked in (1):** BCC AP 2017
- **Source:**
  - BCC Assistant Programmer Written Test (2017), Q3 — [BUET JOB/08_ccc-ap-2017-c-and-sql.md](../BUET%20JOB/08_ccc-ap-2017-c-and-sql.md) · [image](../BUET%20JOB/08_ccc-ap-2017-c-and-sql.jpg)
- **Printed answer:** SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee); plus NOT IN and LIMIT variants.

<a id="g0251"></a>

### Write SQL for Π s.name, s.id (σ d.name='ECE' (Student s ⋈ s.dept_id=d.dept_id Department … <sub>G0251</sub>

*Written*

Write SQL for Π s.name, s.id (σ d.name='ECE' (Student s ⋈ s.dept_id=d.dept_id Department d)).

- **Asked in (1):** BUET M.Sc.
- **Source:**
  - BUET MSc in CSE (2026-10-03), Q8 — [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg)
- **Correction:** No answer printed. SELECT s.name, s.id FROM Student s JOIN Department d ON s.dept_id = d.dept_id WHERE d.name = 'ECE';

<a id="g0999"></a>

### What is the SQL query for showing only the duplicate lists in student (id, name, gpa) tab… <sub>G0999</sub>

*Written*

What is the SQL query for showing only the duplicate lists in student (id, name, gpa) table?

- **Asked in (1):** ABL Officer(ICT) 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q31 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q43 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g1861"></a>

### What is SQL? Write down two example of SQL. <sub>G1861</sub>

*Written*

What is SQL? Write down two example of SQL.

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 43. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1964"></a>

### SQL এ DDL, DML এবং DCL এর মধ্যে পার্থক্য লিখুন। <sub>G1964</sub>

*Written*

SQL এ DDL, DML এবং DCL এর মধ্যে পার্থক্য লিখুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৯ (খ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g1966"></a>

### নিম্নোক্ত টেবিলগুলো হতে (ক), (খ) এবং (গ) এর উত্তর দিন। Restaurent (rid, rname, rcity, pho… <sub>G1966</sub>

*Written*

নিম্নোক্ত টেবিলগুলো হতে (ক), (খ) এবং (গ) এর উত্তর দিন। Restaurent (rid, rname, rcity, phone, seat-capacity) Dishes (did, dname dtype) Customer (cid, cname, ccity) Serves (rid, did) (ক) যে যে রেস্টুরেন্টগুলো ‘Burger’ পরিবেশন করে সেগুলোর নাম খুঁজে বের করার জন্য SQL Query লিখুন। (খ) ‘Ziman’ নামক একজন Customer যে যে খাবারগুলো অ্যালার্জি সংক্রান্ত সমস্যা এড়িয়ে খেতে পারেন তার তালিকা তৈরী করুন। (গ) যে যে খাবারগুলো ঢাকার সকল রেস্টুরেন্টে পাওয়া যায় তার তালিকা তৈরি করুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৯ অথবা — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2125"></a>

### SQL ব্যবহার করে Student নামে একটি টেবিল তৈরি করুন। টেবিলে std-id, std-name, std-address এ… <sub>G2125</sub>

*Written*

SQL ব্যবহার করে Student নামে একটি টেবিল তৈরি করুন। টেবিলে std-id, std-name, std-address এবং GPA নামে চারটি field থাকবে। Student টেবিল হতে যে সকল ছাত্রের ফলাফল GPA-5 তাদের সকল রেকর্ড দেখানোর জন্য SQL query লিখুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯ অথবা (খ) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g3671"></a>

### relational algebra <sub>G3671</sub>

*Written*

relational algebra

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q21 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g3715"></a>

### A huge SQL DDL code including constraints <sub>G3715</sub>

*Written*

A huge SQL DDL code including constraints

- **Asked in (1):** BUET M.Sc. October 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2017, Q10 — [buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md](../buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md)

<a id="g4408"></a>

### Which type of JOIN is used to find not matched data from table? <sub>G4408</sub>

*Written*

Which type of JOIN is used to find not matched data from table?

- **Asked in (1):** DESCO AE(CSE) 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DESCO Assistant Engineer (CSE) 27.05.2016, Q1(i) — [power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md](../power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md)

<a id="g4409"></a>

### In which keyword is used for retrieving data from table without duplicate row data? <sub>G4409</sub>

*Written*

In which keyword is used for retrieving data from table without duplicate row data?

- **Asked in (1):** DESCO AE(CSE) 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DESCO Assistant Engineer (CSE) 27.05.2016, Q1(ii) — [power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md](../power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md)

<a id="g4410"></a>

### What is the output of the following query – SELECT * FROM myTbale WHERE id>0 ORDER BY id … <sub>G4410</sub>

*Written*

What is the output of the following query – SELECT * FROM myTbale WHERE id>0 ORDER BY id DESC, NAME DESC

- **Asked in (1):** DESCO AE(CSE) 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DESCO Assistant Engineer (CSE) 27.05.2016, Q1(iii) — [power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md](../power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md)

<a id="g4564"></a>

### Salesperson (ID, Name, Age, Salary), Customer (ID, Name, City, Industry, Type) Orders (Nu… <sub>G4564</sub>

*Written*

Salesperson (ID, Name, Age, Salary), Customer (ID, Name, City, Industry, Type) Orders (Number, order_date, cust_id, salesperson_id, Amount). Given table above find the following: a) The names of all salespeople that have an order with Samsonic. b) The names of all salespeople that do not have any order with Samsonic. c) The name of all salespeople that have 2 or more orders.

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q3 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g4570"></a>

### What is query to display even rows from the employees table? <sub>G4570</sub>

*Written*

What is query to display even rows from the employees table?

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q9 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g4571"></a>

### How to get distinct records from the employees table without using distinct keyword. <sub>G4571</sub>

*Written*

How to get distinct records from the employees table without using distinct keyword.

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q10 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g4572"></a>

### Write an SQL query to print the name of employees having the highest salary in each depar… <sub>G4572</sub>

*Written*

Write an SQL query to print the name of employees having the highest salary in each department.

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q11 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g4578"></a>

### Given a database table with some column a) find out the min salary from table b) find out… <sub>G4578</sub>

*Written*

Given a database table with some column a) find out the min salary from table b) find out a matched string

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q17 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g4579"></a>

### Probably a SQL query a) show the branch name with the minimum balance b) select all dept_… <sub>G4579</sub>

*Written*

Probably a SQL query a) show the branch name with the minimum balance b) select all dept_name, roll from Student

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q18 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g0379"></a>

### What is SQL injection? <sub>G0379</sub>

*Viva*

What is SQL injection?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - BPSC viva (viva), Q12 — [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)
- **Printed answer:** An attack in which hackers inject SQL to read, update, delete or modify a database without authentication

<a id="g0388"></a>

### Full form of SQL? <sub>G0388</sub>

*Viva*

Full form of SQL?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 2) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** Structure Query Language
- **Correction:** Correct expansion is 'Structured Query Language'.

<a id="g0389"></a>

### How many SQL clauses are there and what are they? <sub>G0389</sub>

*Viva*

How many SQL clauses are there and what are they?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 2) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** 3: SELECT, FROM, WHERE
- **Correction:** Incomplete: SELECT-FROM-WHERE is only the basic query block; SQL also has GROUP BY, HAVING, ORDER BY, JOIN ... ON, LIMIT etc.

<a id="g0669"></a>

### What is SQL JOIN? <sub>G0669</sub>

*Viva*

What is SQL JOIN?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q11 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** A JOIN combines rows from two or more tables based on a related column

<a id="g0670"></a>

### What are the different types of JOIN? <sub>G0670</sub>

*Viva*

What are the different types of JOIN?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q12 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** Common JOINs are INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN

<a id="g2495"></a>

### database query find max value <sub>G2495</sub>

*Viva*

database query find max value

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — Directorate of Food (খাদ্য অধিদপ্তর), Assistant Programmer — Viva experience (ভাইভা অভিজ্ঞতা), 2022 (date not printed) — exam taker not printed — no marks — pages 2–3 (viva), V-maxquery — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g3336"></a>

### SQL JOIN কত প্রকার? <sub>G3336</sub>

*Viva*

SQL JOIN কত প্রকার?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — suggestion — NPCBL Engineer (Quality), SQA related Job Exam Suggestions (Engineer (Quality) – Nuclear Power Plant Company Bangladesh Ltd), CSE Career Master Guide, no exam/date/marks, pp. 19-21 (viva) — [duranta/1780933203-npcbl-suggestions/1780933203.md](../duranta/1780933203-npcbl-suggestions/1780933203.md)

<a id="g4691"></a>

### 9. Drop 3 Delete এর মধ্যে পার্থক্য কি? <sub>G4691</sub>

*Viva*

9. Drop 3 Delete এর মধ্যে পার্থক্য কি?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J5 Combined Bank Officer (IT) 2026, Job ID 10229 (viva), A5-V8 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g4692"></a>

### 10. Database Table এ Drop আর Delete কোথায় ব্যবহার করা হয়? <sub>G4692</sub>

*Viva*

10. Database Table এ Drop আর Delete কোথায় ব্যবহার করা হয়?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J5 Combined Bank Officer (IT) 2026, Job ID 10229 (viva), A5-V9 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g0265"></a>

### Major limitations of a DBMS; how NewSQL differs from and relates to SQL and NoSQL databas… <sub>G0265</sub>

*Written*

Major limitations of a DBMS; how NewSQL differs from and relates to SQL and NoSQL databases.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IBBL SO(Network) 2025
- **Source:**
  - Islamic Bank PLC SQA, Senior Officer (Network) (2025-03-14), Q5 — [BUET JOB/27_islamic-bank-network-questions-1-6.md](../BUET%20JOB/27_islamic-bank-network-questions-1-6.md) · [image](../BUET%20JOB/27_islamic-bank-network-questions-1-6.jpg)

<a id="g0270"></a>

### Find the department name and average salary of employees by joining Department and Employ… <sub>G0270</sub>

*Written*

Find the department name and average salary of employees by joining Department and Employee.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IBBL SO(Network) 2025
- **Source:**
  - Islamic Bank PLC SQA, Senior Officer (Network) (2025-03-14), Q11 — [BUET JOB/28_islamic-bank-cont-and-dpdc.md](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) · [image](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.jpg)

<a id="g0977"></a>

### Write following EMPLOYEE database table write an SQL query to find employee who work is a… <sub>G0977</sub>

*Written*

Write following EMPLOYEE database table write an SQL query to find employee who work is a department where the average salary is lower than the average salary all the department......

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q6 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q19 — [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg)

<a id="g0998"></a>

### Given two tables are employee (id, name, salary, dept_id) and department (dept_id, dept_n… <sub>G0998</sub>

*Written*

Given two tables are employee (id, name, salary, dept_id) and department (dept_id, dept_name), write SQL to find MAX salary and average salary of specific department.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** DBBL PO 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q30 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q42 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g1646"></a>

### Query Language কী ও কত প্রকার? SQL-এর বিভিন্ন Clause (GROUP BY, HAVING, ORDER BY) আলোচনা … <sub>G1646</sub>

*Written*

Query Language কী ও কত প্রকার? SQL-এর বিভিন্ন Clause (GROUP BY, HAVING, ORDER BY) আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — SQL কুয়েরি ও প্র্যাকটিস সমস্যা, Q119 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1649"></a>

### SQL স্টেটমেন্ট `DELETE`, `DROP` এবং `TRUNCATE` এর মধ্যকার মূল পার্থক্যগুলো লিখুন। <sub>G1649</sub>

*Written*

SQL স্টেটমেন্ট `DELETE`, `DROP` এবং `TRUNCATE` এর মধ্যকার মূল পার্থক্যগুলো লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q122 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1651"></a>

### SQL Join কী? বিভিন্ন প্রকার Join (Inner, Left, Right, Full Outer Join) উদাহরণসহ লিখুন। <sub>G1651</sub>

*Written*

SQL Join কী? বিভিন্ন প্রকার Join (Inner, Left, Right, Full Outer Join) উদাহরণসহ লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q124 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1652"></a>

### SQL ব্যবহার করে `Student(std_id, std_name, std_address, GPA)` টেবিল তৈরি করুন এবং যে সকল … <sub>G1652</sub>

*Written*

SQL ব্যবহার করে `Student(std_id, std_name, std_address, GPA)` টেবিল তৈরি করুন এবং যে সকল ছাত্রের GPA-5 তাদের সকল রেকর্ড প্রদর্শনের SQL Query লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q125 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1653"></a>

### প্রদত্ত টেবিল: `Employee(Emp_Id, Emp_Name, Salary, City, Dept)` এবং `Job(Emp_ID, Post, Br… <sub>G1653</sub>

*Written*

প্রদত্ত টেবিল: `Employee(Emp_Id, Emp_Name, Salary, City, Dept)` এবং `Job(Emp_ID, Post, Branch)`। নিচের প্রশ্নগুলোর SQL লিখুন: - টেবিলটিতে নতুন একজনের তথ্য ইনসার্ট করুন। - যাদের স্যালারি ২০,০০০ এর উপরে এবং পোস্ট 'Manager' তাদের নাম, ব্রাঞ্চ, সিটি ও স্যালারি দেখান। - ঐ সকল ডিপার্টমেন্টের এভারেজ স্যালারি বের করুন যাদের গড় স্যালারি ৩০,০০০ এর নিচে। - CSE dept-এর যেসকল এমপ্লয়ির স্যালারি IT dept-এর যেকোনো কর্মীর স্যালারির সাথে মিলে তাদের নাম বের করুন। - যাদের স্যালারি ২০,০০০ এর কম তাদের স্যালারির সাথে ১,০০০ বৃদ্ধি করে প্রদর্শন করুন। - Employee টেবিল হতে ৩য় সর্বোচ্চ স্যালারি (3rd Maximum Salary) বের করার কোয়েরি লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q126 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1654"></a>

### রেস্টুরেন্ট ডেটাবেজ কুয়েরি: `Restaurant(rid, rname, rcity)`, `Dishes(did, dname, dtype)`… <sub>G1654</sub>

*Written*

রেস্টুরেন্ট ডেটাবেজ কুয়েরি: `Restaurant(rid, rname, rcity)`, `Dishes(did, dname, dtype)`, `Customer(cid, cname, ccity)`, `Serves(rid, did)`: (ক) যেসকল রেস্টুরেন্ট 'Burger' সার্ভ করে তাদের নাম বের করুন। (খ) 'Saiful' নামক ব্যক্তি এলার্জি এড়িয়ে খেতে পারেন এমন খাবারের তালিকা তৈরিতে কুয়েরি লিখুন। (গ) ঢাকার সকল রেস্টুরেন্টে পাওয়া যায় এমন খাবারের তালিকা তৈরির কুয়েরি লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q127 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1655"></a>

### টেবিল: `course(course_id, course_name, chief_id)` ও `instructor(instructor_id, course_id,… <sub>G1655</sub>

*Written*

টেবিল: `course(course_id, course_name, chief_id)` ও `instructor(instructor_id, course_id, salary, joining_date)`। প্রতিটি কোর্সের নাম এবং সংশ্লিষ্ট প্রশিক্ষকদের গড় স্যালারি প্রদর্শনের জন্য SQL লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q128 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

<a id="g1762"></a>

### SQL query to find avg salary of all is greater than the salary of each department. Given … <sub>G1762</sub>

*Written*

SQL query to find avg salary of all is greater than the salary of each department. Given table: Employee(emp_id, name,salary,city,dept).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q14 — [suggestion based on previous yr/02_petrobangla-ane-q11-14-c-output-blanks-sql.md](../suggestion%20based%20on%20previous%20yr/02_petrobangla-ane-q11-14-c-output-blanks-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/02_petrobangla-ane-q11-14-c-output-blanks-sql.jpg)

<a id="g1771"></a>

### Answer the following question based on the following table in DBMS. Actor (actor_id, name… <sub>G1771</sub>

*Written*

Answer the following question based on the following table in DBMS. Actor (actor_id, name, age ...) Play (play_id, writer ...) Role (play_id, actor_id ...) i. Count the number of actors who plays role in the 3 or more time that is written by "Shakespeare". ii. Show the actor name who played the role that is written by "Chekhov" but never played roles that are written by "Shakespeare".

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q33 — [suggestion based on previous yr/05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.md](../suggestion%20based%20on%20previous%20yr/05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.md) · [image](../suggestion%20based%20on%20previous%20yr/05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.jpg)

<a id="g1776"></a>

### Write SQL command from the following tables - i. Employee (ename, street, city) ii. Works… <sub>G1776</sub>

*Written*

Write SQL command from the following tables - i. Employee (ename, street, city) ii. Works (ename, cname, salary, joindate) iii. Company (cname, city) iv. Manager (ename, mname)

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q40 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g1777"></a>

### Find name, street, city who work for First Corporation Bank and earn more than 30000 <sub>G1777</sub>

*Written*

Find name, street, city who work for First Corporation Bank and earn more than 30000

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q41 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g1778"></a>

### Find name of all employees, who live in the same city and company for which they works. <sub>G1778</sub>

*Written*

Find name of all employees, who live in the same city and company for which they works.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q42 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g1779"></a>

### Give all employees of First Century Bank 10 percent salary raise <sub>G1779</sub>

*Written*

Give all employees of First Century Bank 10 percent salary raise

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q43 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g1780"></a>

### Find the company with payroll less than 100000 <sub>G1780</sub>

*Written*

Find the company with payroll less than 100000

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q44 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g1785"></a>

### Below tables are given - i. Employee (employee_id, name, salary, department) ii. Leave (e… <sub>G1785</sub>

*Written*

Below tables are given - i. Employee (employee_id, name, salary, department) ii. Leave (employee_id, date, reason) iii. Holiday (date, description)

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q50 — [suggestion based on previous yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.jpg)

<a id="g1787"></a>

### Write query to show all employee's leave count. <sub>G1787</sub>

*Written*

Write query to show all employee's leave count.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q52 — [suggestion based on previous yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.jpg)

<a id="g1788"></a>

### Write query to show employees who are in 'HR' department and have taken at least 5 leaves. <sub>G1788</sub>

*Written*

Write query to show employees who are in 'HR' department and have taken at least 5 leaves.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q53 — [suggestion based on previous yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.jpg)

<a id="g1795"></a>

### Given table: i. BRANCH (branch_name, branch_city, assets) ii. CUSTOMER (customer_name, cu… <sub>G1795</sub>

*Written*

Given table: i. BRANCH (branch_name, branch_city, assets) ii. CUSTOMER (customer_name, customer_street, customer_city) iii. ACCOUNT (account_number, branch_name, amount) iv. LOAN (loan_number, branch_name, amount) v. DEPOSITOR (customer_name, account_number) vi. BORROWER (customer_name, loan_number) vii. EMPLOYEE (employee_name, branch_name, salary) a) Find the name, loan number and loan amount of all customers having a loan at the Perryridge branch. b) Find the names of all customers whose street includes the substring "Main". c) Find all customers with an account but no loan.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q64 — [suggestion based on previous yr/08_petrobangla-ane-q57-64-topology-media-osi-crypto-bank-sql.md](../suggestion%20based%20on%20previous%20yr/08_petrobangla-ane-q57-64-topology-media-osi-crypto-bank-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/08_petrobangla-ane-q57-64-topology-media-osi-crypto-bank-sql.jpg)

<a id="g1938"></a>

### SQL query to find avg salary of all is greater than the salary of each department .Employ… <sub>G1938</sub>

*Written*

SQL query to find avg salary of all is greater than the salary of each department .Employee (emp_id,emp_name,salary,city,dept_name) with some condition

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** DBBL ANE/AHE 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Dutch Bangla Bank — Assistant Network/Hardware Engineer — 05/03/19 — Exam Taker: BUET — Time 1:30 Hours — Marks distribution: 20 (non_dept) + 65 (dept.) = 85 — pages 1–2, Q10 — [duranta/1707373769-dbbl-2019-written/1707373769.md](../duranta/1707373769-dbbl-2019-written/1707373769.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — AHE/ANE Question Set -05 (suggestion), Set-05 Q10 — [duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md](../duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md)

<a id="g3329"></a>

### WHERE এবং HAVING এর পার্থক্য। <sub>G3329</sub>

*Written*

WHERE এবং HAVING এর পার্থক্য।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — NPCBL Engineer (Quality), SQA related Job Exam Suggestions (Engineer (Quality) – Nuclear Power Plant Company Bangladesh Ltd), CSE Career Master Guide, no exam/date/marks, pp. 19-21 — [duranta/1780933203-npcbl-suggestions/1780933203.md](../duranta/1780933203-npcbl-suggestions/1780933203.md)

<a id="g4194"></a>

### Suppose you've two table (Employee, Department) in a Database and Employee table three ce… <sub>G4194</sub>

*Written*

Suppose you've two table (Employee, Department) in a Database and Employee table three cell (emp_name, dept_id, salary) also Department table two cell (dept_id, dept_name), now update the salary 10% increase value from Department table. Give the appropriate example.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** PBL SO 2018
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q29 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q41 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)
  - Question paper found on the web (see the folder README for the URL) — Pubali Bank Ltd (private) — Senior Officer (SD) — 2018 — Exam taker: AUST (as printed by the coaching banner; unverified) — Time 2 h, marks not printed, answer all — pages 1–4, Q11 — [bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md](../bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md)

<a id="g4366"></a>

### Write an SQL query to retrieve the department name and the average salary from two tables… <sub>G4366</sub>

*Written*

Write an SQL query to retrieve the department name and the average salary from two tables named Department and Employee.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IBBL QA Engineer 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Islami Bank Bangladesh PLC (private) — Quality Assurance (Engineer) — 2025 (date not printed) — Exam taker: not stated — recollection (8 items, 1 not collected), Q2 — [bank-written-web/2025-ibbl-qa-engineer-itjobqns/ibbl-qa-engineer-2025.md](../bank-written-web/2025-ibbl-qa-engineer-itjobqns/ibbl-qa-engineer-2025.md)

<a id="g4367"></a>

### What are the limitations of dbms and how to related newsql with sql and no sql. <sub>G4367</sub>

*Written*

What are the limitations of dbms and how to related newsql with sql and no sql.

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IBBL QA Engineer 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Islami Bank Bangladesh PLC (private) — Quality Assurance (Engineer) — 2025 (date not printed) — Exam taker: not stated — recollection (8 items, 1 not collected), Q4 — [bank-written-web/2025-ibbl-qa-engineer-itjobqns/ibbl-qa-engineer-2025.md](../bank-written-web/2025-ibbl-qa-engineer-itjobqns/ibbl-qa-engineer-2025.md)

<a id="g4814"></a>

### SQL Task: Given a table accounts(account_id INT, customer_id INT, balance DECIMAL, status… <sub>G4814</sub>

*Written*

SQL Task: Given a table accounts(account_id INT, customer_id INT, balance DECIMAL, status VARCHAR) write SQL queries for: a) List accounts with balance < 1000.00. b) Increase balance by 5% for active accounts. c) Delete accounts flagged 'closed' older than 365 days (assume a closed_date exists).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper II) (suggestion), C1 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

<a id="g4852"></a>

### Which SQL command removes entire table data but keeps structure? A) DROP B) DELETE C) TRU… <sub>G4852</sub>

*MCQ*

Which SQL command removes entire table data but keeps structure? A) DROP B) DELETE C) TRUNCATE D) REMOVE

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank Senior Officer (IT) question pattern: sample questions (suggestion), IT-2 — [model-test-web/daudbd-uttara-bank-so-it-pattern/uttara-so-it-pattern.md](../model-test-web/daudbd-uttara-bank-so-it-pattern/uttara-so-it-pattern.md)

<a id="g4890"></a>

### "There were several tables, and I had to write a query to get the output using JOIN, GROU… <sub>G4890</sub>

*Written*

"There were several tables, and I had to write a query to get the output using JOIN, GROUP BY, LIMIT, and OFFSET."

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IFIC Bank MTO 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — IFIC Bank PLC — MTO, 17/05/2025 (practical by BUET) (suggestion), P5 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

## Keys

<a id="g4625"></a>

### Explain Primary key, Candidate key, and Foreign key. <sub>G4625</sub>

*Written*

Explain Primary key, Candidate key, and Foreign key.

- **Asked in (3):** 36th BCS (2016); SPCBL AME 2021; Teletalk AM(IT) 2023
- **Viva mentions:** 3
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q20 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q21 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p27 Q23 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 36. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)
  - duranta.app question bank (coaching compilation of the question paper) — 09 — The Security Printing Corporation (Bangladesh) Ltd — Assistant Maintenance Engineer — 08-12-2021 — Exam taker: CTI — Written, Time 2 Hours, marks not printed — page 14, Q9 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — NPCBL Engineer (Quality), SQA related Job Exam Suggestions (Engineer (Quality) – Nuclear Power Plant Company Bangladesh Ltd), CSE Career Master Guide, no exam/date/marks, pp. 19-21 — [duranta/1780933203-npcbl-suggestions/1780933203.md](../duranta/1780933203-npcbl-suggestions/1780933203.md)
  - Question paper found on the web (see the folder README for the URL) — Teletalk Assistant Manager (IT) 2023, Q9 — [telecom-web/2023-teletalk-am-it-jobqns/teletalk-am-it-2023.md](../telecom-web/2023-teletalk-am-it-jobqns/teletalk-am-it-2023.md)
- **Printed answer:** Primary Key: Uniquely identifies each record in a table; Foreign Key: References the primary key of another table to establish relationships

<a id="g0107"></a>

### Which key is known as the minimal super key? (Primary / Secondary / Foreign / Candidate) <sub>G0107</sub>

*MCQ*

Which key is known as the minimal super key? (Primary / Secondary / Foreign / Candidate)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q61 — [BCS/44_db-keys-reinforcement-learning-epsilon.md](../BCS/44_db-keys-reinforcement-learning-epsilon.md) · [image](../BCS/44_db-keys-reinforcement-learning-epsilon.jpg)
- **Printed answer:** (ঘ) Candidate key

<a id="g0293"></a>

### Convert the ERD into relational schemas with primary and foreign keys. <sub>G0293</sub>

*Written*

Convert the ERD into relational schemas with primary and foreign keys.

- **Asked in (1):** BSCL AE(CSE) 2026
- **Source:**
  - Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21), Q4(c) — [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

<a id="g0976"></a>

### Suppose that we have a relational database with the following table. Underlined one repre… <sub>G0976</sub>

*Written*

Suppose that we have a relational database with the following table. Underlined one represent primary key: Movies (_mid_, title, year) People (_pid_, name) Genres (_gid_, genre) HasRole (_pid_, mid, role) Has Genre (_gid_, mid) Write a SQL query to return the number of movies that are romantic comedies.

- **Asked in (1):** BB AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q5 — [bit to exabyte/09_bte-p009-sql-q01-05.md](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) · [image](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q18 — [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg)

<a id="g0978"></a>

### Consider the two schema employees (id, first_name, last_name, designation, joining_date, … <sub>G0978</sub>

*Written · marked important in the Bit to Exabyte book*

Consider the two schema employees (id, first_name, last_name, designation, joining_date, salary, dept_id) and department (dept_id, dept_name). Where detp_id is forgeign key. Find the first_name and department name whose salary is maximum.

- **Asked in (1):** BIWTA AE(CSE) 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q7 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q20 — [bit to exabyte/29_bte-g2-p15-database-sql-q15-20.md](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) · [image](../bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.jpg); [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)

<a id="g1813"></a>

### Differentiate between primary key and foreign key. What is trigger and how it works? <sub>G1813</sub>

*Written*

Differentiate between primary key and foreign key. What is trigger and how it works?

- **Asked in (1):** WZPGCL AE(CSE) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE/CS/ECE/ETE) 27/05/2023, Q10 — [duranta/1704037243-wzpdcl-ae-cse-ece-ete/1704037243.md](../duranta/1704037243-wzpdcl-ae-cse-ece-ete/1704037243.md)

<a id="g2180"></a>

### Given DB table with Employee (NID, Company_id, Name, Mobile Number), Assume every record … <sub>G2180</sub>

*Written*

Given DB table with Employee (NID, Company_id, Name, Mobile Number), Assume every record has a unique mobile number. Find the number of super key, candidate and give example of two candidate key.

- **Asked in (1):** PGCB AE(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — PGCB Assistant Engineer (CSE) 17.05.2024, Q6 — [duranta/1716050174-power-grid-company-of-bangladesh-assistant-engineer-cse/1716050174.md](../duranta/1716050174-power-grid-company-of-bangladesh-assistant-engineer-cse/1716050174.md)

<a id="g2575"></a>

### The key selected from the sets of candidate keys by database design is called----key: ক) … <sub>G2575</sub>

*MCQ*

The key selected from the sets of candidate keys by database design is called----key: ক) Candidate খ) Primary গ) Super ঘ) Foreign

- **Asked in (1):** BPSC AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী প্রোগ্রামার ২২ — non-cadre Assistant Programmer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 28 MCQs — pages 1–34, Database Management Systems (DBMS) Q1 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2577"></a>

### Which of the following types of table constraints prevents the entry of duplicate rows? ক… <sub>G2577</sub>

*MCQ*

Which of the following types of table constraints prevents the entry of duplicate rows? ক) Foreign keys খ) Primary keys গ) Unique keys ঘ) Candidate keys

- **Asked in (1):** BPSC AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী প্রোগ্রামার ২২ — non-cadre Assistant Programmer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 28 MCQs — pages 1–34, Database Management Systems (DBMS) Q3 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2896"></a>

### Define RDBMS and Primary key, Candidate key, Super key Foreign key. <sub>G2896</sub>

*Written*

Define RDBMS and Primary key, Candidate key, Super key Foreign key.

- **Asked in (1):** Cadet College Lecturer(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 11. Cadet College, Lecturer (ICT), 10.05.2025; Exam Taker: MIST; time and marks not printed; pp. 16-17 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g3045"></a>

### Employee (id,first _ name, last _ name…) Primary key: id. City (city – id, city – name …)… <sub>G3045</sub>

*Written*

Employee (id,first _ name, last _ name…) Primary key: id. City (city – id, city – name …) Primary key: city _ id. PH_ Employee (id, reportsTo, authors, date_of_join, start_date..) Primary key: id. Reference key: id (Relation of Employee table) Reference key: reports To (Relation of City table) (i) Now write a DDL query to create PH_ Employee table, Also, maintain the reference key. (ii) Write query to get the employee _id, last_name, city who has reports To one or more times to him/her.

- **Asked in (1):** JBL ANA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 14 — Assistant Network Administrator (ANA) – JBL — 25.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks=200 marks — pages 21–23, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3089"></a>

### Suppose we have a relational database with five tables. | Table | Primary Key | |---|---|… <sub>G3089</sub>

*Written*

Suppose we have a relational database with five tables. | Table | Primary Key | |---|---| | S (sid, A) | sid | | T (tid, B) | tid | | U (uid, C) | uid | | R (sid, tid, D) | sid, tid | | Q (tid, uid, E) | tid, uid | Here R implements a many-to-many relationship between the entities implemented with tables sand T, and Q implements a many-to-many relationship between the entities implemented with tables T and U. Write an SQL query that returns all records of the form Sid, uid where Sid is the key of an S-record and uid is the key of a U-record and these two records are related through the relations R and Q. Use SELECT and not SELECT DISTINCT in your query.

- **Asked in (1):** Combined Bank 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 1 — Combined 5 Bank — 03.02.2023 — post not printed — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 26–28, Q2 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3096"></a>

### Write a SQL query return the number of movies which are romantic comedies. Suppose that w… <sub>G3096</sub>

*Written*

Write a SQL query return the number of movies which are romantic comedies. Suppose that we have a relational database with the following tables. | Table | Primary Key | |---|---| | Movies (mid, title, year | mid | | People (pid, name) | pid | | Genres (gid, genre) | gid | | ActsIn (pid, mid) | pid, mid | | HasRole (pid, mid, role) | pid, mid, role | | HasGenre (gid, mid) | gid, mid | In tables ActsIn and HasRole, pid is a foreign key into people and mid is a foreign key into movies. In table HasGenre, mid is a foreign key into movies and gid is a foreign key into Genres.

- **Asked in (1):** BB AP 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank, Assistant Programmer 2023 — Exam date 3.2.2023 — Exam Taker: BIBM — Exam Time: 1+2 hour — marks as printed: 80 MCQ (1 Hour); Written: 9 Subjective Question (150) + Math 4 (20) + Focus (10) + B/E (20) — pages 1–5, Q4 — [duranta/1737452307-bangladesh-bank-ad-ict-question-pattern-bb-assistant-program/1737452307.md](../duranta/1737452307-bangladesh-bank-ad-ict-question-pattern-bb-assistant-program/1737452307.md)
  - duranta.app question bank (coaching compilation of the question paper) — 2 — Bangladesh Bank — Assistant Programmer — 03.02.2023 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (1 Hour); Written: 9 Subjective Question (150) +Math 4(20) +Focus (10) +B/E (20) — pages 28–30, Q4 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3651"></a>

### An institute wants to create a database table named STUDENT to store student information.… <sub>G3651</sub>

*Written*

An institute wants to create a database table named STUDENT to store student information. The table should include the columns Roll Number, Name, Department, Email, and Admission Date. Specify the most appropriate SQL data type for each column and identify which column should be defined as the Primary Key, giving a brief justification for your choice.

- **Asked in (1):** Combined Bank Officer(IT) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Officer (IT), Grade-10 (Job ID-25105) — 31/07/2026 — Exam taker: not printed — Part A MCQ 1 hour; Part B Written 2 hours (IT 15 × 10 = 150) — pages 1–16, Q6.14 — [duranta/1785503716-so-it-job-id-25105/1785503716.md](../duranta/1785503716-so-it-job-id-25105/1785503716.md)

<a id="g3969"></a>

### In a hospital, a patient file stores name, disease, date of admission, room number, bed n… <sub>G3969</sub>

*MCQ*

In a hospital, a patient file stores name, disease, date of admission, room number, bed number, as information. Which should be the primary key in this case? (ক) Name (খ) Date of admission (গ) Disease (ঘ) None of the above

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - Paper not shown on the source sheet, MCQ 50 — [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — ICT (281), question paper 2 (Q101–200), 10.10.2025, Q127 — [bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md](../bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md)
- **Printed answer:** (d) None of the above; a Patient ID is needed.

<a id="g4024"></a>

### A primary key: (ক) Can have NULL (খ) Uniquely identifies each row (গ) must be a foreign k… <sub>G4024</sub>

*MCQ*

A primary key: (ক) Can have NULL (খ) Uniquely identifies each row (গ) must be a foreign key (ঘ) Can have duplicates

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q151 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4384"></a>

### Given Table - Super Key + primary key [site's expanded wording, assumed: Given the relati… <sub>G4384</sub>

*Written*

Given Table - Super Key + primary key [site's expanded wording, assumed: Given the relation Employee(EmployeeID, NationalID, Email, Name, Department), where EmployeeID, NationalID, and Email are unique, identify the super keys, candidate keys, and the most appropriate primary key with justification.]

- **Asked in (1):** Combined Bank ADA 2026
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items), Q6 (f) — [bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md](../bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md)

<a id="g4862"></a>

### [Bangla instruction, garbled in the text layer: it mentions an employee table, insert que… <sub>G4862</sub>

*Written*

[Bangla instruction, garbled in the text layer: it mentions an employee table, insert queries, employees whose salary is above the avg salary, and "Partition by dept_id"] CREATE TABLE employee ( emp_id INT PRIMARY KEY, emp_name VARCHAR(50), dept_id INT, salary DECIMAL(10, 2) ); INSERT INTO employee (emp_id, emp_name, dept_id, salary) VALUES (1, 'John Doe', 101, 50000.00), (2, 'Jane Smith', 102, 60000.00), (3, 'Alice Johnson', 101, 55000.00), (4, 'Bob Brown', 102, 70000.00), (5, 'Charlie Davis', 103, 45000.00); Find the output: SELECT emp_name, salary FROM employee WHERE salary > (SELECT AVG(salary) FROM employee); SELECT emp_name, salary, AVG(salary) OVER (PARTITION BY dept_id) AS avg_dept_salary FROM employee;

- **Asked in (1):** BCIC AP 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Chemical Industries Corporation (BCIC) — Assistant Programmer, 14/02/2025 (BUET) (suggestion), Q8 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g2835"></a>

### What is the primary key, candidate key, and super key? <sub>G2835</sub>

*Written*

What is the primary key, candidate key, and super key?

- **Asked in (1):** BOF AE(CSE) 2021
- **Viva mentions:** 1
- **Source:**
  - NTRCA 17th registration viva 2023 (2023) (viva), Q6 — [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 2. বাংলাদেশ সমরাস্ত্র কারখানা: (BOF)-2021, Assistant Engineer; (EEE/ME/CSE), 06-03-2021; exam taker not printed; Full Mark: 100 [Non-40, Department-60]; pp. 2-4 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)
- **Printed answer:** A super key must be unique while a candidate key need not be unique
- **Correction:** Both uniquely identify tuples; the difference is minimality: a candidate key is a minimal super key (no attribute can be removed), whereas a super key may contain extra attributes.

<a id="g2579"></a>

### Which is represented as uniqueness of a database table? a. Primary key b. Foreign key c. … <sub>G2579</sub>

*MCQ*

Which is represented as uniqueness of a database table? a. Primary key b. Foreign key c. Entity d. Relation

- **Asked in (1):** DoICT ANE 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33, Database Management Systems (DBMS) Q6 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2581"></a>

### কোনটি Database টেবিলে Uniqueness নিশ্চিত করে? A. Relation B. Entity C. Primary key D. For… <sub>G2581</sub>

*MCQ*

কোনটি Database টেবিলে Uniqueness নিশ্চিত করে? A. Relation B. Entity C. Primary key D. Foreign key

- **Asked in (1):** DoICT AP 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT AP 2020 — Department of ICT, Assistant Programmer, 2020 — exam taker not printed — MCQ, marks not printed — 10 MCQs — pages 9–33, Database Management Systems (DBMS) Q8 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2645"></a>

### What is foreign key? When foreign key is used? <sub>G2645</sub>

*Written*

What is foreign key? When foreign key is used?

- **Asked in (1):** WZPDCL AE(CSE) 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE) 29-06-2019, 14 — [duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md](../duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md)

<a id="g2938"></a>

### Assume we have the following application that models soccer teams, the games they play, a… <sub>G2938</sub>

*Written*

Assume we have the following application that models soccer teams, the games they play, and the players in each team. In the design, we want to capture the following: - We have a set of teams, each team has an ID (unique identifier), name, main stadium, and to which city this team belongs. - Each team has many players, and each player belongs to one team. Each player has a number (unique identifier), name, DOB, start year, and shirt number that he uses. - Tearms play matches, in each match there is a host team and a guest team. The match takes place in the stadium of the host team. - For each match we need to keep track of the following the date on which the game is played, the final result of the match and the players participated in the match. For each player, how many goals he scored, whether or not he took yellow card, and whether or not he took red card. Design an ER diagram to capture the above requirements. Make sure cardinalities and primary keys are clear.

- **Asked in (1):** JBL SO(ANE) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 03 — Assistant Network Engineer (ANE) – JBL — 12.11.2020 — Exam taker: not printed — IT: 10*16 marks + Non IT: 2*20 marks - 200 marks — pages 4–6, Q3 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2954"></a>

### Assume we have the following application that models soccer teams, the games they play, a… <sub>G2954</sub>

*Written*

Assume we have the following application that models soccer teams, the games they play, and the players in each team. In the design, we want to capture the following: - We have a set of teams, each team has an ID (unique identifier), name, main stadium and to which city this team belongs. - Each team has many players and each player belongs to one team. Each player has a number (unique identifier), name, DoB, start year and shirt number that he uses. - Teams play matches in each match there is a host team and a guest team. The match takes place in the stadium of the host team. - For each match we need to keep track of the following: The date on which the game is played, The final result of the match; The players participated in the match. For each player how many goals he scored, whether or not he took yellow card, and whether or not he took red card; During the match, one player may substitute another player. We want to capture this substitution and the time at which it took place. - Each match has exactly three referees. For each referee we have an ID (unique identifier), name, DoB, years of experience. One referee is the main referee and the other two are assistant referee. Design an ER diagram to capture the above requirements. State any assumptions you have that affects your design (use the back of the page if needed). Make sure cardinalities and primary keys are clear.

- **Asked in (1):** Sonali Bank ADA 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 05 — Assistant Database Administrator (ADA) – SBL — 14.12.2020 — Exam taker: not printed — 10*16 marks + 2*20 marks = 200 — pages 8–9, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3009"></a>

### The following ER diagram captures important information of a company. Now convert the ER … <sub>G3009</sub>

*Written*

The following ER diagram captures important information of a company. Now convert the ER diagram into a relational database schema (you must maintain the primary key properly).

- **Asked in (1):** Combined Bank AHE 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Assistant Hardware Engineer (AHE) - SBL, JBL, RBL [AHE SBL, JBL, RBL 2021 CTI] — 24.12.2021 — Exam taker: CTI (from the printed tag) — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks — pages 15–17, Q12 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g4209"></a>

### A company needs key person for DBMS. What is his/her duty as key person? <sub>G4209</sub>

*Written*

A company needs key person for DBMS. What is his/her duty as key person?

- **Asked in (1):** BB AP 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Programmer — 25.10.2019 — Exam taker: IBA (as printed by the coaching banner; unverified) — Marks 200, Time 1.30 h, MCQ 64×1.25 = 80, Written 120 (dept 100, non-dept 20) — pages 1–2 (partial), Q4 — [bank-written-web/2019-bb-ap-stackit-slideshare/bb-ap-2019.md](../bank-written-web/2019-bb-ap-stackit-slideshare/bb-ap-2019.md)

<a id="g4218"></a>

### Differ: Primary vs Unique Key, Shared vs Exclusive Lock, Drop vs Drop Purge, Delete vs Tr… <sub>G4218</sub>

*Written*

Differ: Primary vs Unique Key, Shared vs Exclusive Lock, Drop vs Drop Purge, Delete vs Truncate

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q4 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4448"></a>

### Primary and Foreign key related 'Yes'/No <sub>G4448</sub>

*Written*

Primary and Foreign key related 'Yes'/No

- **Asked in (1):** PGCB SAE(Computer) 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — PGCB SAE (Computer) 24.12.2020, Q4 — [power-sector-web/2020-pgcb-sae-computer-carrierbd/pgcb-sae-computer-2020.md](../power-sector-web/2020-pgcb-sae-computer-carrierbd/pgcb-sae-computer-2020.md)

<a id="g4494"></a>

### Relational Database Design এ Primary Key ও Foreign Key বলতে কি বুঝায়? উদাহরণসহ লিখুন। <sub>G4494</sub>

*Written*

Relational Database Design এ Primary Key ও Foreign Key বলতে কি বুঝায়? উদাহরণসহ লিখুন।

- **Asked in (1):** ICT Ministry AP 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BPSC — ICT Division (ICT Ministry), Assistant Programmer (59 posts) — Written, 2021 — Exam taker: BPSC (per title) — time and marks not printed — technical part only, Q5(খ) — [ministry-ap-web/2021-bpsc-ap-ict-ministry-written-itjobexam/ict-ministry-ap-2021-written.md](../ministry-ap-web/2021-bpsc-ap-ict-ministry-written-itjobexam/ict-ministry-ap-2021-written.md)

<a id="g1960"></a>

### Primary এবং Super key এর মধ্যে পার্থক্য লিখুন। <sub>G1960</sub>

*Written*

Primary এবং Super key এর মধ্যে পার্থক্য লিখুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৮ (খ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2795"></a>

### নিচের ব্যাংক ফাটাবেজটি বিবেকনা করুন, যেখানে Underline করার মাধ্যমে Primary Key শেখানো আছে… <sub>G2795</sub>

*Written*

নিচের ব্যাংক ফাটাবেজটি বিবেকনা করুন, যেখানে Underline করার মাধ্যমে Primary Key শেখানো আছে। branch (branch name, branch city, assets) customer (customer name, customer street, customer city) loan floan number, branch name, amount) bomower (customer wame, loan number) account (account number, branch_name, balance) depositor (customer name, account number) উপরোক্ত ডাটাবেজের জন্য নিম্নলিখিত SQL Query গুলো লিখুন। (i) Dhaka-কে অস্থিত সকল শাখায় একাউন্ট আছে এখন সকল গ্রাহকের তালিকা তৈরির জন্য Query ii) একটি শাখার মোট ঋণের পরিমাণ বের করার জন্য Query (iii) Dhaka তে অবস্থিত কমপক্ষে একটি শাখার চেয়ে বেশি সম্পদ আছে এমন সকল শাখার তালিকা তৈরির জন্য Query (iv) একজন গ্রাহকের মোট ঋণের পরিমাণ বের করার জন্য Query

- **Asked in (1):** 47th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 8 — 47th BCS, Computer Science, Subject Code: 971, Full Marks 200, Time: 4 Hours (pp. 16–17), ৭। ক) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0383"></a>

### What is a composite primary key? <sub>G0383</sub>

*Viva*

What is a composite primary key?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 2
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 1) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 2) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** A primary key formed by combining two attributes, e.g. manufacturer ID + product ID when product IDs repeat across companies

<a id="g0382"></a>

### Do you have an idea about databases? Define primary key. <sub>G0382</sub>

*Viva*

Do you have an idea about databases? Define primary key.

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 1) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** A unique identifier for each entity in an entity set; an attribute whose values are all distinct, e.g. Student ID

<a id="g0385"></a>

### If I had no NID, how else could I be identified? <sub>G0385</sub>

*Viva*

If I had no NID, how else could I be identified?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 1) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** By birth registration certificate; candidate answered name + date of birth (a composite primary key), which the chairman accepted

<a id="g0397"></a>

### What are primary, super and candidate keys? <sub>G0397</sub>

*Viva*

What are primary, super and candidate keys?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 17th registration viva 2023 (2023) (viva), Q5 — [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)
- **Printed answer:** Primary key: unique, non-null column identifying a row; super key: compound key from several columns that helps build the primary key but does not fully identify a row; candidate key: possible primary key
- **Correction:** Super key description is wrong: a super key is any set of attributes that uniquely identifies every tuple (it does identify rows); candidate keys are minimal super keys, one of which is chosen as primary key.

<a id="g0677"></a>

### What is a Super Key? <sub>G0677</sub>

*Viva*

What is a Super Key?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p27 Q22 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
- **Printed answer:** A Super Key is any set of one or more columns that can uniquely identify a record in a table

<a id="g1631"></a>

### কী (Key) ফিল্ড কী? Primary Key, Foreign Key, Super Key, Composite Primary Key, Alternate … <sub>G1631</sub>

*Written*

কী (Key) ফিল্ড কী? Primary Key, Foreign Key, Super Key, Composite Primary Key, Alternate Key, Surrogate Key ও Candidate Key এর পার্থক্য ও সংজ্ঞা লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q104 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1642"></a>

### Private Key ও Public Key এর ব্যাখ্যা এবং Plaintext ও Ciphertext এর পার্থক্য লিখুন। <sub>G1642</sub>

*Written*

Private Key ও Public Key এর ব্যাখ্যা এবং Plaintext ও Ciphertext এর পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q115 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g4192"></a>

### Difference between Super Key and Unique key? <sub>G4192</sub>

*Written*

Difference between Super Key and Unique key?

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** PBL SO 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Pubali Bank Ltd (private) — Senior Officer (SD) — 2018 — Exam taker: AUST (as printed by the coaching banner; unverified) — Time 2 h, marks not printed, answer all — pages 1–4, Q9 — [bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md](../bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md)

<a id="g4785"></a>

### Define Primary Key and Foreign Key. Provide SQL examples to create two related tables (Em… <sub>G4785</sub>

*Written*

Define Primary Key and Foreign Key. Provide SQL examples to create two related tables (Employees and Departments) showing keys.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion), C1 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

## ER model & relationships

<a id="g0291"></a>

### For a given scenario, identify entities, attributes and relationships. <sub>G0291</sub>

*Written*

For a given scenario, identify entities, attributes and relationships.

- **Asked in (1):** BSCL AE(CSE) 2026
- **Source:**
  - Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21), Q4(a) — [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

<a id="g0292"></a>

### Draw the ER diagram. <sub>G0292</sub>

*Written*

Draw the ER diagram.

- **Asked in (1):** BSCL AE(CSE) 2026
- **Source:**
  - Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2026-08-21), Q4(b) — [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

<a id="g0818"></a>

### Schema employee(id, name, salary), equipment(id, name, price), hire(employee_id, equipmen… <sub>G0818</sub>

*Written*

Schema employee(id, name, salary), equipment(id, name, price), hire(employee_id, equipment_id): draw the ERD.

- **Asked in (1):** BAPEX AGM(ICT) 2023
- **Source:**
  - BAPEX Assistant General Manager (ICT) (BUET) (2023-01-20), Q3(i) — [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg)

<a id="g0974"></a>

### Product (pname,price,category,maker), Purchase (buyer,seller,stock), Company(cname,countr… <sub>G0974</sub>

*Written · marked important in the Bit to Exabyte book*

Product (pname,price,category,maker), Purchase (buyer,seller,stock), Company(cname,country), Person(per-name, address, phone). Here in Product table make is similar to cname, here buyer and seller in Purchase table is similar to per-name in Person table, Draw the ER diagram of from the above information: a. Select person name who bought American category product b. Find Sum of all product and Sum of All sales product according to country of origin.

- **Asked in (1):** NWPGCL AM(ICT) 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q1 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg); [bit to exabyte/09_bte-p009-sql-q01-05.md](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) · [image](../bit%20to%20exabyte/09_bte-p009-sql-q01-05.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q14 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g1750"></a>

### নিম্নের ডেটাবেস অনুযায়ী E-R ডায়াগ্রাম তৈরি করুন : <sub>G1750</sub>

*Written*

নিম্নের ডেটাবেস অনুযায়ী E-R ডায়াগ্রাম তৈরি করুন :

- **Asked in (1):** 18th NTRCA College ICT (2024)
- **Source:**
  - Question paper, Q9(খ) — [18th NTCRA/13_ntrca18-lecturer-ict452-paper-p2.md](../18th%20NTCRA/13_ntrca18-lecturer-ict452-paper-p2.md) · [image](../18th%20NTCRA/13_ntrca18-lecturer-ict452-paper-p2.jpg)

<a id="g1820"></a>

### Product (pname,price,category,maker) Purchase (buyer,seller,stock) Company(cname,country)… <sub>G1820</sub>

*Written*

Product (pname,price,category,maker) Purchase (buyer,seller,stock) Company(cname,country) Person(per-name, address, phone) Here in Product table make is similar to cname, here buyer and seller in Purchase table is similar to per-name in Person table, Draw the ER diagram of from the above information

- **Asked in (1):** NWPGCL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Assistant Manager (ICT) 12/01/2024, Q2 — [duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md](../duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md)

<a id="g2166"></a>

### Given four table Customer, Product, Employee and Order table Customer(customerID, firstna… <sub>G2166</sub>

*Written*

Given four table Customer, Product, Employee and Order table Customer(customerID, firstname, lastName, OrderDate, OrderAmount); Product(ProductId, OrderID, Category); Employee(EmpID, EmpName, EmpBirthDate, EmpRegion, EmpMobile); Order(OrderID, ProductID, OrderNo CustomerID, TotalOder, OrderDate) Find the firstname of customers who order all products which Categoty = 'B' and OrderDate = '15 March 2024';

- **Asked in (1):** BRPL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BRPL Assistant Manager (ICT) 29.03.2024, Q4(i) — [duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md](../duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md)

<a id="g3044"></a>

### TV channel, reality show, user, producer, and user eating. Create an ER Diagram using the… <sub>G3044</sub>

*Written*

TV channel, reality show, user, producer, and user eating. Create an ER Diagram using the following terms. Answer the following question based on the following table in DBMS. Actor (actor_id, name,age…) Play (play_id, writer…) Role (play_id, actor_id… (i) Count the number of actors who plays role in the 3 or more time that is written by "Shakespeare". (ii) Show the actor name who played the role that is written by "Chekhov" but never played roles that are written by "Shakespeare".

- **Asked in (1):** JBL ANE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20, Q(unnumbered 3) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3068"></a>

### ER diagram from the given information. (Unable to collect this question) <sub>G3068</sub>

*Written*

ER diagram from the given information. (Unable to collect this question)

- **Asked in (1):** Combined Bank SO(IT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 15 — [Senior Officer (IT)-SBL, BDBL 2022 CTI] — 31.01.2022 — Exam taker: CTI — "5*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks" (as printed, IT figure cut) — pages 23–25, Q9 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3075"></a>

### Draw an ER diagram of BPL (Team, Player, Game, Captain) <sub>G3075</sub>

*Written*

Draw an ER diagram of BPL (Team, Player, Game, Captain)

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q2 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3086"></a>

### Weak entity type VS strong entity type, show example in a ER diagram. <sub>G3086</sub>

*Written*

Weak entity type VS strong entity type, show example in a ER diagram.

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q13 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3252"></a>

### You are designing a database for a Library Explain the relationship between a "Book" tabl… <sub>G3252</sub>

*Written*

You are designing a database for a Library Explain the relationship between a "Book" table and a "Borrower" table. Is it 1-to-1, 1-to-Many, or Many-to-Many? Justify your answer. [BSCS AP 26] [DB]

- **Asked in (1):** Combined Bank AP 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [BSCS AP 26] — Assistant Programmer — 17.01.2026 — Exam taker: BIBM/CTI — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 56–57, Q13 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3455"></a>

### Consider the following description of a university :10 There are a number of departments … <sub>G3455</sub>

*Written*

Consider the following description of a university :10 There are a number of departments (i. e, CSE, BBA, ME) in a university. Each department has a number of programs (e.g, CSE dept offers B.Sc in PIS CSE and M.Sc degree in CSE). Students are admitted for each program. Basic student information includes Name, Address, ID, Date of Birth, Dept Name and Program Name. Now your tasks are i. Create Entity-Relationship (E-R) diagram using standard symbols. ii. Write DDL statements to implement the E-R diagram.

- **Asked in (1):** Parliament Secretariat SAE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 34 — বাংলাদেশ জাতীয় সংসদ সচিবালয়ের উপসহকারী মেইনটেন্যান্স ইঞ্জিনিয়ার — পরীক্ষার তারিখঃ ১৭.০৭.২০২৩ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 5–10, CS Q4 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3565"></a>

### (a) Design an ER diagram for a library management systems where (i) A library has multipl… <sub>G3565</sub>

*Written*

(a) Design an ER diagram for a library management systems where (i) A library has multiple books. (ii) Each book can have multiple copies.

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q2(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4175"></a>

### DBMS এর সুবিধা ও অসুবিধা লিখুন। একটি ER Model অঙ্কনপূর্বক বিভিন্ন অংশ চিহ্নিত করুন। <sub>G4175</sub>

*Written*

DBMS এর সুবিধা ও অসুবিধা লিখুন। একটি ER Model অঙ্কনপূর্বক বিভিন্ন অংশ চিহ্নিত করুন।

- **Asked in (1):** 18th NTRCA School-2 (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন পরীক্ষা (স্কুল সমপর্যায়-২) — ট্রেড ইন্সট্রাক্টর, কম্পিউটার ও তথ্যপ্রযুক্তি (লিখিত) — 12.07.2024, ১৪। — [ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md](../ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md)

<a id="g0200"></a>

### What is a weak entity? Find a weak entity and its identifying relationship for a school d… <sub>G0200</sub>

*Written*

What is a weak entity? Find a weak entity and its identifying relationship for a school database with Student(student_id, ...), Teacher(teacher_id, ...), Course(course_id, ...).

- **Asked in (1):** BCC AP 2021
- **Source:**
  - BCC Assistant Programmer (BUET) (2021-02-12), Q7 — [BUET JOB/14_er-model-python-o1-search.md](../BUET%20JOB/14_er-model-python-o1-search.md) · [image](../BUET%20JOB/14_er-model-python-o1-search.jpg)
- **Printed answer:** Shows an ER diagram (Student, Course, Lecturer, Subjects) without naming a weak entity.
- **Correction:** Does not answer: a weak entity has no key of its own and depends on an owner through an identifying relationship (double rectangle/diamond). None of the three tables is weak (each has its own key); e.g. a Section or Dependent entity identified through Course/Teacher would be.

<a id="g0954"></a>

### While converting E-R diagram into Tables, how is a Many-to-many relationship set between … <sub>G0954</sub>

*Written · marked important in the Bit to Exabyte book*

While converting E-R diagram into Tables, how is a Many-to-many relationship set between entities A and B is converted into database tables?

- **Asked in (1):** BPSC SAE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q10 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q10 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g1001"></a>

### What is a weak entity for data modeling using the entity relationship model find out any … <sub>G1001</sub>

*Written*

What is a weak entity for data modeling using the entity relationship model find out any weak entity and it's identify relationship for the school database? Which of the following table? Student (student_id, student_name, admission_year) Teacher (teacher_id, teacher_name, teacher_joindate) Course (course_id, subject_name, credit)

- **Asked in (1):** BCC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q33 — [bit to exabyte/14_bte-p014-sql-q33-weak-entity.md](../bit%20to%20exabyte/14_bte-p014-sql-q33-weak-entity.md) · [image](../bit%20to%20exabyte/14_bte-p014-sql-q33-weak-entity.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q45 — [bit to exabyte/34_bte-g2-p20-database-sql-q45-weak-entity.md](../bit%20to%20exabyte/34_bte-g2-p20-database-sql-q45-weak-entity.md) · [image](../bit%20to%20exabyte/34_bte-g2-p20-database-sql-q45-weak-entity.jpg)

<a id="g2962"></a>

### A football club has a name, a stadium with a playing ground, and a team made up of player… <sub>G2962</sub>

*Written*

A football club has a name, a stadium with a playing ground, and a team made up of players. A player can play for only one club. Each team is managed by a manager, represented by his or her name. A player has a registration number, name, and age. A club manager also buys players. Each club plays against every other club in the league, and each match has a date, stadium venue, and score. Draw an ER diagram to represent the case just described.

- **Asked in (1):** Rupali Bank ANE 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 06 — Assistant Network Engineer (ANE) – RBL [ANE RBL 2021 CTI] — 16.03.2021 — Exam taker: CTI (from the printed tag) — 10*16 marks +2*20 marks = 200 — pages 10–11, Q10 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2963"></a>

### Below tables are given- Employee (employee_id, name, salary, department) Leave (employee_… <sub>G2963</sub>

*Written*

Below tables are given- Employee (employee_id, name, salary, department) Leave (employee_id, date, and reason) Holiday (date, description) (i) Write mapping cardinality between Employee' and 'Holiday' table (ii) Write query to show all employee's leave count.

- **Asked in (1):** Rupali Bank ANE 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 06 — Assistant Network Engineer (ANE) – RBL [ANE RBL 2021 CTI] — 16.03.2021 — Exam taker: CTI (from the printed tag) — 10*16 marks +2*20 marks = 200 — pages 10–11, Q11 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2994"></a>

### Draw a E-R Diagram about Railway Reservations System. Where has a passengers, Terminal, T… <sub>G2994</sub>

*Written*

Draw a E-R Diagram about Railway Reservations System. Where has a passengers, Terminal, Train, Seat schemas and different attribute?

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q10 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3386"></a>

### Draw ER diagram on hostipal Patient(ID,name,age,appointment_time) Doctor(ID,name,speciaiz… <sub>G3386</sub>

*Written*

Draw ER diagram on hostipal Patient(ID,name,age,appointment_time) Doctor(ID,name,speciaization) Test(ID,name,date,time,result)

- **Asked in (1):** BAERA Engineer(CSE) November 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Exam 26.11.2021, 1 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g3757"></a>

### E-R diagram <sub>G3757</sub>

*Written*

E-R diagram

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q24 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g4228"></a>

### Which one is an entity <sub>G4228</sub>

*MCQ*

Which one is an entity

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Sonali Bank & Janata Bank (BSCS combined 2 bank) — Officer (IT/ICT) — Preliminary MCQ — 02 October 2020 — Exam taker: not stated — 80 MCQ (technical Q41–80), stems only, MCQ42 — [bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md](../bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md)

<a id="g4493"></a>

### Entity-Relationship (ER) Diagram কেন ব্যবহার করা হয়? একটি উদাহরন এর মাদ্ধ্যমে ব্যাখ্যা ক… <sub>G4493</sub>

*Written*

Entity-Relationship (ER) Diagram কেন ব্যবহার করা হয়? একটি উদাহরন এর মাদ্ধ্যমে ব্যাখ্যা করুন।

- **Asked in (1):** ICT Ministry AP 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BPSC — ICT Division (ICT Ministry), Assistant Programmer (59 posts) — Written, 2021 — Exam taker: BPSC (per title) — time and marks not printed — technical part only, Q5(ক) — [ministry-ap-web/2021-bpsc-ap-ict-ministry-written-itjobexam/ict-ministry-ap-2021-written.md](../ministry-ap-web/2021-bpsc-ap-ict-ministry-written-itjobexam/ict-ministry-ap-2021-written.md)

<a id="g0252"></a>

### Course(c_id, c_name, total_credit) and Program(prog_no, prog_name); a course can be in ma… <sub>G0252</sub>

*Written*

Course(c_id, c_name, total_credit) and Program(prog_no, prog_name); a course can be in many programs but a program has only one course. Draw the ERD and write the schema with PK/FK.

- **Asked in (1):** BUET M.Sc.
- **Source:**
  - BUET MSc in CSE (2026-10-03), Q9 — [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg); [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg)
- **Correction:** No answer printed. 1:N Course→Program: Course(c_id PK, ...), Program(prog_no PK, prog_name, c_id FK → Course).

<a id="g0881"></a>

### In a library database, is the Book–Borrower relationship 1-to-1, 1-to-many or many-to-man… <sub>G0881</sub>

*Written*

In a library database, is the Book–Borrower relationship 1-to-1, 1-to-many or many-to-many? Justify.

- **Asked in (1):** Bank (name cut off) AP
- **Source:**
  - Bank (name cut off, 'B... Ltd') Assistant Programmer Written, Q12 — [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

<a id="g2118"></a>

### Database এর ক্ষেত্রে E-R Diagram বলতে কী বোঝায়? একটি উদাহরণের মাধ্যমে ব্যাখ্যা করুন। <sub>G2118</sub>

*Written*

Database এর ক্ষেত্রে E-R Diagram বলতে কী বোঝায়? একটি উদাহরণের মাধ্যমে ব্যাখ্যা করুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮। (ক) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g2733"></a>

### Consider the schema - employee (id, name, salary), equipment (id, name, price), hire (emp… <sub>G2733</sub>

*Written*

Consider the schema - employee (id, name, salary), equipment (id, name, price), hire (employee-id, equipment-id), (i) Draw the ER diagram for the above. (ii) Write the SQL query to show the name of the employee who hired the maximum number of equipment.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 8 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2767"></a>

### In a payroll management system, the salary of everyone working in a company is managed. T… <sub>G2767</sub>

*Written*

In a payroll management system, the salary of everyone working in a company is managed. The salary comprises several components, such as, basic, house rent (a certain percentage of basic), medical allowance, etc. and deductible components like PF contribution, insurance subscription etc If an employee takes a loan, the repayment is adjusted at the beginning of the next month, basic of all employees are incremented following a rule which defines the percentage of increment. However, each salary grade has a maximum bound. The increment will be applicable within this bound Draw an Entity Relationship (ER) diagram of this payroll management systems.

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 8 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3672"></a>

### ERD(constraint) <sub>G3672</sub>

*Written*

ERD(constraint)

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q22 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g3684"></a>

### A student can be identified by ID who has attributes name, Address, Grade. A Course can b… <sub>G3684</sub>

*Written*

A student can be identified by ID who has attributes name, Address, Grade. A Course can be identified by C_ID and its attributes are C_Name, Credit etc. A student can Enroll in multiple course similarly a course can be enrolled by many students. Draw an E-R diagram showing the relationship between Student and course with full and partial participation. Create database table for student and Course entity.

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q5 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g3714"></a>

### ER diagram <sub>G3714</sub>

*Written*

ER diagram

- **Asked in (1):** BUET M.Sc. October 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2017, Q9 — [buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md](../buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md)

<a id="g1623"></a>

### রিলেশনশিপ (Relationship) বলতে কী বোঝায়? দুটি টেবিলের মধ্যে রিলেশন তৈরির পদ্ধতি এবং রিলেশ… <sub>G1623</sub>

*Written*

রিলেশনশিপ (Relationship) বলতে কী বোঝায়? দুটি টেবিলের মধ্যে রিলেশন তৈরির পদ্ধতি এবং রিলেশনশিপের প্রকারভেদ (One-to-One, One-to-Many, Many-to-Many) লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q96 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1624"></a>

### রিলেশনশিপের ডিগ্রি (Degree of Relationship) কাকে বলে ও কত প্রকার? <sub>G1624</sub>

*Written*

রিলেশনশিপের ডিগ্রি (Degree of Relationship) কাকে বলে ও কত প্রকার?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q97 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1626"></a>

### Entity ও Entity Set কী? Strong Entity Set এবং Weak Entity Set এর মধ্যে পার্থক্য লিখুন। <sub>G1626</sub>

*Written*

Entity ও Entity Set কী? Strong Entity Set এবং Weak Entity Set এর মধ্যে পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q99 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1627"></a>

### Attribute কাকে বলে এবং Attribute এর প্রকারভেদ আলোচনা করুন। <sub>G1627</sub>

*Written*

Attribute কাকে বলে এবং Attribute এর প্রকারভেদ আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q100 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1628"></a>

### E-R Diagram এর উপাদান ও ব্যবহৃত প্রতীকসমূহের সচিত্র বর্ণনা দিন। DFD ও ERD এর তুলনা লিখুন। <sub>G1628</sub>

*Written*

E-R Diagram এর উপাদান ও ব্যবহৃত প্রতীকসমূহের সচিত্র বর্ণনা দিন। DFD ও ERD এর তুলনা লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q101 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1629"></a>

### Mapping Cardinalities বিস্তারিত বর্ণনা করুন। <sub>G1629</sub>

*Written*

Mapping Cardinalities বিস্তারিত বর্ণনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q102 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1630"></a>

### বাস্তব ডেটাবেজে E-R Diagram অঙ্কন করুন: - Movie Database: `Movie(movie_id, movie_title, r… <sub>G1630</sub>

*Written*

বাস্তব ডেটাবেজে E-R Diagram অঙ্কন করুন: - Movie Database: `Movie(movie_id, movie_title, release_date)`, `Actor(actor_id, actor_name)`, `Director(dir_id, dir_name)`, `Genre(...)` - Book Database: `book(id, name, price)`, `author(id, name, city)`, `publication(id, name, city)`

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q103 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1753"></a>

### BCC has many projects each projects have many employees. The projects has project id, pro… <sub>G1753</sub>

*Written*

BCC has many projects each projects have many employees. The projects has project id, project name, project location and the employee has employee id, employee name, employee NID, employee date of birth, joining date. Now draw the ERD diagram for the above information.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q1 — [suggestion based on previous yr/01_petrobangla-ane-q01-11-erd-subnet-cables.md](../suggestion%20based%20on%20previous%20yr/01_petrobangla-ane-q01-11-erd-subnet-cables.md) · [image](../suggestion%20based%20on%20previous%20yr/01_petrobangla-ane-q01-11-erd-subnet-cables.jpg)

<a id="g1786"></a>

### Write mapping cardinality between 'Employee' and 'Holiday' table <sub>G1786</sub>

*Written*

Write mapping cardinality between 'Employee' and 'Holiday' table

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q51 — [suggestion based on previous yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md) · [image](../suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.jpg)

<a id="g2515"></a>

### BCC has many projects each projects have many employees.The projects has project id ,proj… <sub>G2515</sub>

*Written*

BCC has many projects each projects have many employees.The projects has project id ,project name ,project location and the employee has employee id, employee name, employee NID, employee date of birth, joining date. Draw an ER diagram.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — AHE/ANE Question Set -02 (suggestion), Set-02 Q2 — [duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md](../duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md)

<a id="g3423"></a>

### (g) How can you define E-R model in <sub>G3423</sub>

*Written*

(g) How can you define E-R model in

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q1(g) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

## DBMS concepts & architecture

<a id="g0672"></a>

### What is Database? <sub>G0672</sub>

*Written*

What is Database?

- **Asked in (2):** BKKB AP 2017; EGCB SAE(ICT) 2023
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q14 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q3 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q3 — [bit to exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md) · [image](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.jpg)
- **Printed answer:** A Database is an organized collection of related data that allows efficient storage, retrieval, and management

<a id="g0949"></a>

### সাধারণ ফাইলভিত্তিক সিস্টেমের চেয়ে DBMS এর সুবিধা কী কী? <sub>G0949</sub>

*Written*

সাধারণ ফাইলভিত্তিক সিস্টেমের চেয়ে DBMS এর সুবিধা কী কী?

- **Asked in (2):** 15th NTRCA ICT; 17th NTRCA ICT (2023)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q2 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q2 — [bit to exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md) · [image](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৯। (ক) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g0807"></a>

### Describe the advantages and disadvantages of DBMS-provided and application provided secur… <sub>G0807</sub>

*Written*

Describe the advantages and disadvantages of DBMS-provided and application provided security.

- **Asked in (1):** BPSC AP 2022
- **Source:**
  - Paper not shown on the source sheet, Q34 — [PETROBANGLA/02_gtcl-assistant-engineer-2022.md](../PETROBANGLA/02_gtcl-assistant-engineer-2022.md) · [image](../PETROBANGLA/02_gtcl-assistant-engineer-2022.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q7 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q7 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q7(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)
- **Printed answer:** DBMS security: login + DBA-granted rights, only overhead of storing privileges; application security: programmer enforces it; then generic DBMS advantages/disadvantages
- **Correction:** Off target: lists generic DBMS pros/cons. Should contrast: DBMS security is centralised and enforced for every application but coarse-grained; application security allows fine-grained business rules but is duplicated per app, error-prone and bypassed by direct DB access.

<a id="g0948"></a>

### Discuss about different types of relations in DBMS. <sub>G0948</sub>

*Written*

Discuss about different types of relations in DBMS.

- **Asked in (1):** Combined Bank AP 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q1 — [bit to exabyte/05_bte-p005-ip-q46-49-raid-dbms-q01.md](../bit%20to%20exabyte/05_bte-p005-ip-q46-49-raid-dbms-q01.md) · [image](../bit%20to%20exabyte/05_bte-p005-ip-q46-49-raid-dbms-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q1 — [bit to exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md) · [image](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Data Structure, Q1 — [bit to exabyte/47_bte-g2-p33-data-structure-q01-14.md](../bit%20to%20exabyte/47_bte-g2-p33-data-structure-q01-14.md) · [image](../bit%20to%20exabyte/47_bte-g2-p33-data-structure-q01-14.jpg)

<a id="g0950"></a>

### What is the degree of relation in DBMS? <sub>G0950</sub>

*Written*

What is the degree of relation in DBMS?

- **Asked in (1):** BCC AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q4 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q4 — [bit to exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md) · [image](../bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.jpg)

<a id="g1822"></a>

### (Schema as in Q2) (b) Find Sum of all product and Sum of All sales product according to c… <sub>G1822</sub>

*Written*

(Schema as in Q2) (b) Find Sum of all product and Sum of All sales product according to country of origin.

- **Asked in (1):** NWPGCL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Assistant Manager (ICT) 12/01/2024, Q2(b) — [duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md](../duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md)

<a id="g2059"></a>

### Data Fragmentation কী? ব্যাখ্যা করুন। <sub>G2059</sub>

*Written*

Data Fragmentation কী? ব্যাখ্যা করুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯। (ক) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g2203"></a>

### (Same schema as Q3) (b) Course contain 2 course offering <sub>G2203</sub>

*Written*

(Same schema as Q3) (b) Course contain 2 course offering

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Petrobangla Assistant Manager (CSE/IT/ICT) 31/05/2024, Q3(b) — [duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md](../duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md)

<a id="g3161"></a>

### Describe different types of relation in DBMS. <sub>G3161</sub>

*Written*

Describe different types of relation in DBMS.

- **Asked in (1):** Combined Bank AP 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 09 — Combined 5 bank (10198) SBL, BKB, KB, ICB — Assistant programmer 2024 — 09.02.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT:50 + Math+gk: 20); Written 10 Subjective Question (150) + Math 4(20) + Focus(20) + Letter(10) — pages 39–40, Q9 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3166"></a>

### Database Data Loss based case study type question. [Combined Bank ADA 2024] <sub>G3166</sub>

*Written*

Database Data Loss based case study type question. [Combined Bank ADA 2024]

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q7 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3371"></a>

### DESCO System এ Customer Information, Prepaid Meter Information, Payment Information ও Com… <sub>G3371</sub>

*Written*

DESCO System এ Customer Information, Prepaid Meter Information, Payment Information ও Complaint Records আছে।এদের জন্য একটি Database Schema অঙ্কন কর।

- **Asked in (1):** DESCO SAE(Computer) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DESCO Sub-Assistant Engineer (Computer) 15/05/2026, 5 — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3491"></a>

### b. What is the difference between CHAR and VARCHAR data types? Explain with examples. 4 <sub>G3491</sub>

*Written*

b. What is the difference between CHAR and VARCHAR data types? Explain with examples. 4

- **Asked in (1):** Fisheries & Livestock Instructor(CS) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 35 — মৎস্য ও প্রাণীসম্পদ অধিদপ্তরের ইন্সট্রাক্টর কম্পিউটার সায়েন্স — তারিখঃ ২০.০৬.২০২৩ — exam taker not printed — time and total not printed — pages 10–13, Q3(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3512"></a>

### a. Oracle Database has two data types: CHAR and VARCHAR. What are the differences between… <sub>G3512</sub>

*Written*

a. Oracle Database has two data types: CHAR and VARCHAR. What are the differences between those two data types. 5

- **Asked in (1):** Parliament Secretariat Programmer 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 36 — বাংলাদেশ জাতীয় সংসদ সচিবালয়ের কম্পিউটার প্রোগ্রামার — ০৮.০৫.২০২৩ — exam taker not printed — time and total not printed — pages 13–16, Q6(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3526"></a>

### Name and define the major tasks that a DBMS enables users to do. 2 <sub>G3526</sub>

*Written*

Name and define the major tasks that a DBMS enables users to do. 2

- **Asked in (1):** Intl Crimes Tribunal Hardware Technician 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 37 — আইন ও বিচার বিভাগের নিয়ন্ত্রণাধীন আন্তর্জাতিক অপরাধ ট্রাইবুনাল, হার্ডওয়্যার টেকনিশিয়ান (১০ম) গ্রেড — ২০২৪ — exam taker not printed — time and total not printed — pages 16–19, Q10 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4030"></a>

### Data __ is the ability to modify a schema definition in a level without affecting the nex… <sub>G4030</sub>

*MCQ*

Data __ is the ability to modify a schema definition in a level without affecting the next higher level. (ক) binding (খ) abstraction (গ) mapping (ঘ) independence

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q157 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g0045"></a>

### What is database security? Describe the different approaches to ensure database security. <sub>G0045</sub>

*Written*

What is database security? Describe the different approaches to ensure database security.

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - 38th BCS Written (2018), Q9(c) — [BCS/18_database-security-osi-binary-logic.md](../BCS/18_database-security-osi-binary-logic.md) · [image](../BCS/18_database-security-osi-binary-logic.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 38th (ICT), Date: 2018 — Time: 3 Hours, Full marks: 200 (pp. 1–18), 13.(c) — [duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md](../duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)
- **Printed answer:** Protecting the database against intentional or accidental threats: strong passwords, encryption, hidden backdoors, segmentation, and monitoring/auditing.

<a id="g0228"></a>

### In database architecture, the external level is the ____. <sub>G0228</sub>

*MCQ*

In database architecture, the external level is the ____.

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q1(ix) — [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)
- **Correction:** No answer printed. Expected: user (view) level.

<a id="g0239"></a>

### Same schema: relational algebra for customers who use nuclear power in December and have … <sub>G0239</sub>

*Written*

Same schema: relational algebra for customers who use nuclear power in December and have a December bill below Tk 500.

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q6(ii) — [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg)

<a id="g0955"></a>

### DBMS বলতে কী বোঝানো হয়? DBMS শ্রেণিভিন্যাস বর্ণনা করুন। <sub>G0955</sub>

*Written*

DBMS বলতে কী বোঝানো হয়? DBMS শ্রেণিভিন্যাস বর্ণনা করুন।

- **Asked in (1):** 40th BCS (2020)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q11 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q11 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g0994"></a>

### Design a database of student with the gpa of a university. Find the top 10% gpa holder fr… <sub>G0994</sub>

*Written*

Design a database of student with the gpa of a university. Find the top 10% gpa holder from the different department of the university.

- **Asked in (1):** Combined Bank AME 2019
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q25 — [bit to exabyte/13_bte-p013-sql-q22-32.md](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) · [image](../bit%20to%20exabyte/13_bte-p013-sql-q22-32.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q37 — [bit to exabyte/33_bte-g2-p19-database-sql-q36-44.md](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) · [image](../bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.jpg)

<a id="g4223"></a>

### What are the ways for no data loss, describe. <sub>G4223</sub>

*Written*

What are the ways for no data loss, describe.

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q9 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4224"></a>

### What are the roles of Database Engineer <sub>G4224</sub>

*Written*

What are the roles of Database Engineer

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q10 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g4265"></a>

### Flat file database are most useful for—— <sub>G4265</sub>

*MCQ*

Flat file database are most useful for——

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Sonali Bank & Janata Bank (BSCS combined 2 bank) — Officer (IT/ICT) — Preliminary MCQ — 02 October 2020 — Exam taker: not stated — 80 MCQ (technical Q41–80), stems only, MCQ79 — [bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md](../bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md)

<a id="g1998"></a>

### Data abstraction কী? Data abstraction এর লেভেলগুলো বর্ণনা করুন। <sub>G1998</sub>

*Written*

Data abstraction কী? Data abstraction এর লেভেলগুলো বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৫ অথবা (গ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2119"></a>

### Relational database model কী? অন্যান্য মডেলের তুলনায় এর সুবিধা-অসুবিধাগুলো উল্লেখ করুন। <sub>G2119</sub>

*Written*

Relational database model কী? অন্যান্য মডেলের তুলনায় এর সুবিধা-অসুবিধাগুলো উল্লেখ করুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮ [(খ) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g2731"></a>

### What is a DBMS? Explain the advantages and disadvantages of DBMS. <sub>G2731</sub>

*Written*

What is a DBMS? Explain the advantages and disadvantages of DBMS.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 8 (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0390"></a>

### What is written in the WHERE clause? <sub>G0390</sub>

*Viva*

What is written in the WHERE clause?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 15th registration viva (2019) (2019) (viva), Viva (VIVA-45, candidate 2) — [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)
- **Printed answer:** The condition

<a id="g0400"></a>

### What is a tuple? <sub>G0400</sub>

*Viva*

What is a tuple?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 17th registration viva 2023 (2023) (viva), Q10 — [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)
- **Printed answer:** In Python, a tuple is an ordered collection of items in (), separated by commas, described as an 'অবিচ্ছিন্ন' data type
- **Correction:** Python tuple should be described as immutable (অপরিবর্তনীয়), not 'continuous'; in DBMS context a tuple is a row (record) of a relation.

<a id="g0606"></a>

### How do you secure a database? <sub>G0606</sub>

*Viva*

How do you secure a database?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p18 Q33 (+p26 Q17, p27 Q25) — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p18); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
- **Printed answer:** Use strong authentication, encryption, access control, regular backups, patch updates, and SQL injection prevention

<a id="g0659"></a>

### What is a Database Schema? <sub>G0659</sub>

*Viva*

What is a Database Schema?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q1 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** A Database Schema is the logical structure of a database that defines tables, columns, relationships, constraints, and data types

<a id="g0663"></a>

### What is Oracle RAC? <sub>G0663</sub>

*Viva*

What is Oracle RAC?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q5 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** Oracle RAC (Real Application Clusters) allows multiple servers to access the same database simultaneously, providing high availability, scalability, and fault tolerance

<a id="g0664"></a>

### What is the role of a DBA? <sub>G0664</sub>

*Viva*

What is the role of a DBA?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q6 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** A Database Administrator (DBA) installs, configures, secures, backs up, monitors, and maintains databases while ensuring high availability and performance

<a id="g0665"></a>

### What is the difference between Branch User access and DBA access? <sub>G0665</sub>

*Viva*

What is the difference between Branch User access and DBA access?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q7 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** Branch User: Can perform only authorized business operations like viewing or updating permitted records; DBA: Has administrative privileges to manage the entire database, users, security, backup, and recovery

<a id="g0668"></a>

### What are the different Normal Forms? <sub>G0668</sub>

*Viva*

What are the different Normal Forms?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q10 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** The common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF, and 5NF

<a id="g0671"></a>

### What is Data? <sub>G0671</sub>

*Viva*

What is Data?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q13 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** Data is raw facts or figures that can be processed to produce meaningful information

<a id="g0675"></a>

### What are the responsibilities of an Assistant Database Administrator (ADBA)? <sub>G0675</sub>

*Viva*

What are the responsibilities of an Assistant Database Administrator (ADBA)?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q18 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** An ADBA assists in database monitoring, backup and recovery, user management, performance monitoring, security implementation, and troubleshooting

<a id="g0676"></a>

### What are the risks associated with the ADBA role? <sub>G0676</sub>

*Viva*

What are the risks associated with the ADBA role?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q19 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** Risks include data loss, unauthorized access, accidental deletion, misconfiguration, downtime, and security breaches if proper procedures are not followed

<a id="g0680"></a>

### What is Database Security? <sub>G0680</sub>

*Viva*

What is Database Security?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p27 Q27 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
- **Printed answer:** Database Security is the practice of protecting databases from unauthorized access, data theft, corruption, and misuse while ensuring confidentiality, integrity, and availability

<a id="g1616"></a>

### Database ও DBMS কী? Type of DBMS and Core components of a database environment. <sub>G1616</sub>

*Written*

Database ও DBMS কী? Type of DBMS and Core components of a database environment.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q89 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1617"></a>

### Conventional File Processing System (CFPS) বনাম DBMS এর তুলনামূলক পার্থক্য ও ডেটাবেজ ব্যব… <sub>G1617</sub>

*Written*

Conventional File Processing System (CFPS) বনাম DBMS এর তুলনামূলক পার্থক্য ও ডেটাবেজ ব্যবহারের উদ্দেশ্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q90 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1618"></a>

### DBMS এবং RDBMS এর মধ্যকার পার্থক্য লিখুন। <sub>G1618</sub>

*Written*

DBMS এবং RDBMS এর মধ্যকার পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q91 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1619"></a>

### Database 3-tier Architecture চিত্রসহ বিস্তারিত বর্ণনা করুন। <sub>G1619</sub>

*Written*

Database 3-tier Architecture চিত্রসহ বিস্তারিত বর্ণনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q92 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1621"></a>

### Database Schema ও Database Instance কাকে বলে? স্কিমার প্রকারভেদ লিখুন। <sub>G1621</sub>

*Written*

Database Schema ও Database Instance কাকে বলে? স্কিমার প্রকারভেদ লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q94 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1622"></a>

### Data Model কী ও কত প্রকার? Relational Data Model এর সুবিধা ও অসুবিধাগুলো লিখুন। <sub>G1622</sub>

*Written*

Data Model কী ও কত প্রকার? Relational Data Model এর সুবিধা ও অসুবিধাগুলো লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q95 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1625"></a>

### Database User, Manager এবং Database Administrator (DBA)-এর দায়িত্ব ও কার্যাবলী লিখুন। <sub>G1625</sub>

*Written*

Database User, Manager এবং Database Administrator (DBA)-এর দায়িত্ব ও কার্যাবলী লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q98 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1639"></a>

### Heterogeneous এবং Homogeneous Database System কী? <sub>G1639</sub>

*Written*

Heterogeneous এবং Homogeneous Database System কী?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q112 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1641"></a>

### Data Encryption কী? এনক্রিপশনের সুবিধা, প্রকারভেদ এবং প্রচলিত বিভিন্ন এনক্রিপশন অ্যালগরিদ… <sub>G1641</sub>

*Written*

Data Encryption কী? এনক্রিপশনের সুবিধা, প্রকারভেদ এবং প্রচলিত বিভিন্ন এনক্রিপশন অ্যালগরিদমের নাম লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q114 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1796"></a>

### An Account members information : name, address are placed into a record file. The data ty… <sub>G1796</sub>

*Written*

An Account members information : name, address are placed into a record file. The data type CHAR, VARCHAR are used to held string type data like name, ...

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q65 — [suggestion based on previous yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md](../suggestion%20based%20on%20previous%20yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md) · [image](../suggestion%20based%20on%20previous%20yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.jpg)

<a id="g3433"></a>

### (a) Explain the difference between a database administrator and a data administrator. <sub>G3433</sub>

*Written*

(a) Explain the difference between a database administrator and a data administrator.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q7(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4823"></a>

### What are the main responsibilities of a Database Administrator (DBA)? <sub>G4823</sub>

*Written*

What are the main responsibilities of a Database Administrator (DBA)?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test #3 (suggestion), A1 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

<a id="g4970"></a>

### In the hypermedia database information bits are stored in the form of: ক. Cubes খ. Nodes … <sub>G4970</sub>

*MCQ*

In the hypermedia database information bits are stored in the form of: ক. Cubes খ. Nodes গ. Signals ঘ. Symbols

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — Govt Job Care BD — BPSc Assistant Programmer Final Model Test (suggestion), Q89 — [model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md](../model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md)

## Transactions & ACID

<a id="g0951"></a>

### What are the ACID properties of transaction to ensure data reliability and integrity? <sub>G0951</sub>

*Written · marked important in the Bit to Exabyte book*

What are the ACID properties of transaction to ensure data reliability and integrity?

- **Asked in (3):** BBL AM(ICT) 2019; BPSC AP 2023; Milk Vita AM(CSE) 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q5 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q5 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g1961"></a>

### ডাটাবেস ট্রান্সেকশনের ACID Properties সম্পর্কে লিখুন। <sub>G1961</sub>

*Written*

ডাটাবেস ট্রান্সেকশনের ACID Properties সম্পর্কে লিখুন।

- **Asked in (2):** 15th NTRCA ICT; 17th NTRCA ICT (2023)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q6 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q6 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৮ (গ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g0087"></a>

### Cascadeless schedules prevent: (deadlocks / aborts / reading uncommitted data / long tran… <sub>G0087</sub>

*MCQ*

Cascadeless schedules prevent: (deadlocks / aborts / reading uncommitted data / long transactions)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q39 — [BCS/52_cascadeless-schedules-waterfall-model.md](../BCS/52_cascadeless-schedules-waterfall-model.md) · [image](../BCS/52_cascadeless-schedules-waterfall-model.jpg)
- **Printed answer:** (গ) reading uncommitted data (no cascading rollback)

<a id="g1748"></a>

### Transaction কী? Transaction Management-এর ACID properties সমূহ বর্ণনা করুন। <sub>G1748</sub>

*Written*

Transaction কী? Transaction Management-এর ACID properties সমূহ বর্ণনা করুন।

- **Asked in (1):** 18th NTRCA College ICT (2024)
- **Source:**
  - Question paper, Q8(খ) — [18th NTCRA/12_ntrca18-lecturer-ict452-paper-p1.md](../18th%20NTCRA/12_ntrca18-lecturer-ict452-paper-p1.md) · [image](../18th%20NTCRA/12_ntrca18-lecturer-ict452-paper-p1.jpg)

<a id="g1920"></a>

### নিম্নলিখিত Transaction হতে inconsistency state ব্যাখ্যা করুন (যদি থাকে)। | T1 | T2 | |---… <sub>G1920</sub>

*Written*

নিম্নলিখিত Transaction হতে inconsistency state ব্যাখ্যা করুন (যদি থাকে)। | T1 | T2 | |---|---| | read (a) | | | A:=A-5 | | | | read(A) | | | temp: = A*0.12 | | | A:= A- temp | | | Write(A) | | | Write(B) | | Write (A) | | | read(B) | | | B:= B+50 | | | Write(B) | | | commit | | | | B:= B + temp | | | Write(B) | | | commit |

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ৬ (গ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g3081"></a>

### Write a short notes on ACID properties of database. <sub>G3081</sub>

*Written*

Write a short notes on ACID properties of database.

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q8 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3174"></a>

### Given a Case study about Database problem. (which solve is done by : ACID Properties). [C… <sub>G3174</sub>

*Written*

Given a Case study about Database problem. (which solve is done by : ACID Properties). [Combined Bank ADA 2024]

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3210"></a>

### Explain the concept of ACID properties in a database transaction. each property Atomicity… <sub>G3210</sub>

*Written*

Explain the concept of ACID properties in a database transaction. each property Atomicity. Consistency Isolation, and Durability ensures the reliability and integrity of a database system. Describe how. [Combined Bank Officer (IT) 25] (10 Marks)

- **Asked in (1):** Combined Bank Officer(IT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Combined Bank — Officer (IT) — 17.10.2025 — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 49–52, Q18 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3412"></a>

### What does the Consistency property in ACID guarantee during a bank fund transfer transact… <sub>G3412</sub>

*Written*

What does the Consistency property in ACID guarantee during a bank fund transfer transaction? You are designing the schema for a Savings_Accounts table. Write the specific SQL constraint clause to ensure that the current_balance column can never drop below zero.

- **Asked in (1):** Combined Bank AME 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS), Assistant Maintenance Engineer/Assistant Engineer (IT) — Exam Date 08/05/2026 — exam taker not printed — time not printed — 15 questions, total marks 200 (Q1–Q6: 15 marks each) — pages 1–10, Q4 — [duranta/1783405234-bscs-ame-ae-it/1783405234.md](../duranta/1783405234-bscs-ame-ae-it/1783405234.md)

<a id="g3974"></a>

### Which one is not an ACID property? (ক) Authenticity (খ) Consistency (গ) Isolation (ঘ) Dur… <sub>G3974</sub>

*MCQ*

Which one is not an ACID property? (ক) Authenticity (খ) Consistency (গ) Isolation (ঘ) Durability

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q101 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4037"></a>

### Which command can we use to save all transactions? (ক) save point (খ) commit (গ) save (ঘ)… <sub>G4037</sub>

*MCQ*

Which command can we use to save all transactions? (ক) save point (খ) commit (গ) save (ঘ) rollback

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q164 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4323"></a>

### A to B transfer balance but not sent to B? Which property in ACID is responsible? (a) Ato… <sub>G4323</sub>

*MCQ*

A to B transfer balance but not sent to B? Which property in ACID is responsible? (a) Atomicity (b) Consistency (c) Isolation (d) Durability

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ6 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4351"></a>

### Which ACID property ensures that a transaction, once committed, will remain permanent eve… <sub>G4351</sub>

*MCQ*

Which ACID property ensures that a transaction, once committed, will remain permanent even after a system failure? (a) Atomicity (b) Consistency (c) Isolation (d) Durability

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ43 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g2910"></a>

### A transaction consists of a sequence of query and/or update statements. SQL statement mus… <sub>G2910</sub>

*Written*

A transaction consists of a sequence of query and/or update statements. SQL statement must be required to end the transaction. List the SQL statements, required to end the transaction and also write their functions.

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 01 — BSCS Recruitment 2020, Combine 2 Bank (SB & JB) — Officer IT (Written) — date not printed — Exam taker: not printed — Time 2 Hours, Full Mark 200 — pages 1–3, Q5(E) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3815"></a>

### Which one of the following is not included in ACID property of transaction? (a) Isolation… <sub>G3815</sub>

*MCQ*

Which one of the following is not included in ACID property of transaction? (a) Isolation (b) Concurrency (c) Durability (d) Atomicity

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q3 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g4215"></a>

### Explain ACID properties in details <sub>G4215</sub>

*Written*

Explain ACID properties in details

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q1 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g2766"></a>

### What are the properties of a transaction? How concurrent transactions are managed? Explai… <sub>G2766</sub>

*Written*

What are the properties of a transaction? How concurrent transactions are managed? Explain any concurrency control mechanism.

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 8 (b) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g4395"></a>

### A bank introduces a Digital Gold Banking System that allows customers to maintain both co… <sub>G4395</sub>

*Written*

A bank introduces a Digital Gold Banking System that allows customers to maintain both conventional bank accounts and digital gold investments. A customer may open one or more accounts, but each account belongs to only one customer and is maintained by a specifie branch. Customers may deposit, withdraw, or transfer money between accounts. Every transaction is processed by an employee and is assigned a iique reference number with its date and time. Customers can also buy or sell digital gold using money from one of their accounts. Since the market price of gold changes throughout the day, the bank records every price update with its effective timestamp. When a gold transaction occurs, the transaction must permanently store the price that was applicable at that moment, even if the market price changes later. A customer cannot sell more gold than the amount currently owned. Now, design and implement the database with necessary tables with relevant constraints.

- **Asked in (1):** ICB Securities AP 2026(Aptitude)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ICB Securities Trading Company Limited — Assistant Programmer — Aptitude test, Set C — 11-July-2026 — Exam taker: DU CSE (as labelled by IT Job QnS; unverified) — Marks 40, 60 minutes, Q3 — [bank-written-web/2026-icb-securities-ap-setc-itjobqns/icb-securities-ap-2026-setc.md](../bank-written-web/2026-icb-securities-ap-setc-itjobqns/icb-securities-ap-2026-setc.md)

<a id="g0377"></a>

### What are the ACID properties? <sub>G0377</sub>

*Viva*

What are the ACID properties?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - BPSC viva (viva), Q10 — [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)
- **Printed answer:** Atomicity, Consistency, Isolation, Durability

<a id="g1643"></a>

### Database Transaction কী? ট্রানজেকশনের ACID Properties সম্পর্কে বিস্তারিত আলোচনা করুন। <sub>G1643</sub>

*Written*

Database Transaction কী? ট্রানজেকশনের ACID Properties সম্পর্কে বিস্তারিত আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q116 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g4786"></a>

### Write SQL queries for: a) Display all employees whose salary > 40,000. b) Count the numbe… <sub>G4786</sub>

*Written*

Write SQL queries for: a) Display all employees whose salary > 40,000. b) Count the number of transactions recorded today (assume a table transactions with a date column).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion), C2 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

<a id="g4787"></a>

### What is the ACID property in DBMS? Explain Atomicity, Consistency, Isolation and Durabili… <sub>G4787</sub>

*Written*

What is the ACID property in DBMS? Explain Atomicity, Consistency, Isolation and Durability with short examples.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion), C3 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

<a id="g4816"></a>

### DB Design: Design simple table structures for an ATM transaction log. Include fields for … <sub>G4816</sub>

*Written*

DB Design: Design simple table structures for an ATM transaction log. Include fields for transaction_id, atm_id, account_no (masked), txn_type, amount, timestamp, status, and machine_location. Show SQL CREATE TABLE for the log and mention indexes you would create.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper II) (suggestion), C3 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

<a id="g4842"></a>

### SQL Task: Given tables: customers(customer_id, name, phone) transactions(txn_id, customer… <sub>G4842</sub>

*Written*

SQL Task: Given tables: customers(customer_id, name, phone) transactions(txn_id, customer_id, amount, txn_date, type) Write SQL for: a) List total transaction amount per customer. b) Find customers who made no transactions this month. c) Display highest transaction amount of each type.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test #3 (suggestion), C1 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

## Normalization

<a id="g1749"></a>

### Normalization কী? কত প্রকার ও কী কী? ব্যাখ্যা করুন। <sub>G1749</sub>

*Written*

Normalization কী? কত প্রকার ও কী কী? ব্যাখ্যা করুন।

- **Asked in (1):** 18th NTRCA College ICT (2024)
- **Source:**
  - Question paper, Q9(ক) — [18th NTCRA/13_ntrca18-lecturer-ict452-paper-p2.md](../18th%20NTCRA/13_ntrca18-lecturer-ict452-paper-p2.md) · [image](../18th%20NTCRA/13_ntrca18-lecturer-ict452-paper-p2.jpg)

<a id="g1810"></a>

### What is database normalization? Write down the types of database normalization. <sub>G1810</sub>

*Written*

What is database normalization? Write down the types of database normalization.

- **Asked in (1):** WZPGCL AE(CSE) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE/CS/ECE/ETE) 27/05/2023, Q7 — [duranta/1704037243-wzpdcl-ae-cse-ece-ete/1704037243.md](../duranta/1704037243-wzpdcl-ae-cse-ece-ete/1704037243.md)

<a id="g1918"></a>

### Normalization কী? BCNF উদাহরণসহ আলোচনা করুন। <sub>G1918</sub>

*Written*

Normalization কী? BCNF উদাহরণসহ আলোচনা করুন।

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ৬। (ক) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1919"></a>

### Functional dependency এর সংজ্ঞা দিন। ইহার Armstrong's axioms property গুলো লিখুন। <sub>G1919</sub>

*Written*

Functional dependency এর সংজ্ঞা দিন। ইহার Armstrong's axioms property গুলো লিখুন।

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ৬ (খ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g2578"></a>

### "There must not be any partial dependency" – Which Normal Form holds this condition? ক) 1… <sub>G2578</sub>

*MCQ*

"There must not be any partial dependency" – Which Normal Form holds this condition? ক) 1NF খ) 2NF গ) 3NF ঘ) BCNF

- **Asked in (1):** BPSC AME 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী রক্ষণাবেক্ষণ প্রকৌশলী ২২ — non-cadre Assistant Maintenance Engineer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 17 MCQs — pages 8–34, Database Management Systems (DBMS) Q4 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g3079"></a>

### Functional dependencies were given, optimize and show candidate/primary keys. (Unable to … <sub>G3079</sub>

*Written*

Functional dependencies were given, optimize and show candidate/primary keys. (Unable to collect this question)

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3084"></a>

### BCNF related question <sub>G3084</sub>

*Written*

BCNF related question

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q11 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3167"></a>

### Normalized a database, used containers if needed, draw an ERD Diagram. [Combined Bank ADA… <sub>G3167</sub>

*Written*

Normalized a database, used containers if needed, draw an ERD Diagram. [Combined Bank ADA 2024] | Proj_Budget | Proj_coDe | Proj_manager | Emp_code | Emp_name | Dept_code | Dept_naMe | Salary | |---|---|---|---|---|---|---|---|

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q8 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3513"></a>

### b. What do you understand by 'Database Normalization'? Why is it necessary to do Normaliz… <sub>G3513</sub>

*Written*

b. What do you understand by 'Database Normalization'? Why is it necessary to do Normalization? 5

- **Asked in (1):** Parliament Secretariat Programmer 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 36 — বাংলাদেশ জাতীয় সংসদ সচিবালয়ের কম্পিউটার প্রোগ্রামার — ০৮.০৫.২০২৩ — exam taker not printed — time and total not printed — pages 13–16, Q6(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3543"></a>

### Explain the differences between Second Normal Form (2NF) and Third Normal Form (3NF) with… <sub>G3543</sub>

*Written*

Explain the differences between Second Normal Form (2NF) and Third Normal Form (3NF) with 5 examples.

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-ক Q12 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3567"></a>

### (c) Why normalization is required in Database? Write shortly about 3NF. 1+1 <sub>G3567</sub>

*Written*

(c) Why normalization is required in Database? Write shortly about 3NF. 1+1

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q2(c) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4350"></a>

### Which one makes data access from a database faster? (a) Indexing (b) Normalization (c) De… <sub>G4350</sub>

*MCQ*

Which one makes data access from a database faster? (a) Indexing (b) Normalization (c) Denormalization (d) All of the above

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ42 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4362"></a>

### Find the primary key and foreign key after decomposition of the given schema (Branch_name… <sub>G4362</sub>

*Written*

Find the primary key and foreign key after decomposition of the given schema (Branch_name, Acc_name, Balance, Brnach_city, Assets) and then identify which normalization it is?

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — Written — 07.02.2025 — Exam taker: not stated (coaching labels FBS / DU; unverified) — marks not printed — recollection, R6 — [bank-written-web/2025-bb-adict-written-itjobqns/bb-adict-2025-written.md](../bank-written-web/2025-bb-adict-written-itjobqns/bb-adict-2025-written.md)

<a id="g2981"></a>

### DBMS definition and why normalization in database? <sub>G2981</sub>

*Written*

DBMS definition and why normalization in database?

- **Asked in (1):** SPCBL AME 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 09 — The Security Printing Corporation (Bangladesh) Ltd — Assistant Maintenance Engineer — 08-12-2021 — Exam taker: CTI — Written, Time 2 Hours, marks not printed — page 14, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g4487"></a>

### DBMS কী? একটি Database কে normalize করার পদ্ধতি গুলো বর্ণনা করুন। <sub>G4487</sub>

*Written*

DBMS কী? একটি Database কে normalize করার পদ্ধতি গুলো বর্ণনা করুন।

- **Asked in (1):** BPSC ANE 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BPSC — non-cadre Assistant Network Engineer (ANE) — Written, 2020 — Exam taker: BPSC (per title) — time and marks not printed — technical part only, Q2(i) (second block) — [ministry-ap-web/2020-bpsc-ane-written-itjobexam/bpsc-ane-2020-written.md](../ministry-ap-web/2020-bpsc-ane-written-itjobexam/bpsc-ane-2020-written.md)

<a id="g1859"></a>

### What is database normalization? Why 1NF,2NF,3NF and BCNF. <sub>G1859</sub>

*Written*

What is database normalization? Why 1NF,2NF,3NF and BCNF.

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 40 (second) — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1962"></a>

### “BCNF is Stricter than 3NF” এই উক্তিটি উদাহরণসহ ব্যাখ্যা করুন। <sub>G1962</sub>

*Written*

“BCNF is Stricter than 3NF” এই উক্তিটি উদাহরণসহ ব্যাখ্যা করুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৮ অথবা (ক) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2734"></a>

### Compare and contrast among the following normalization: 2NF, 3NF and BCNF. <sub>G2734</sub>

*Written*

Compare and contrast among the following normalization: 2NF, 3NF and BCNF.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 8 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0666"></a>

### What is Database Normalization? <sub>G0666</sub>

*Viva*

What is Database Normalization?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q8 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** Normalization is the process of organizing database tables to reduce redundancy and improve data integrity

<a id="g0667"></a>

### Why is Normalization important? <sub>G0667</sub>

*Viva*

Why is Normalization important?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q9 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** Normalization eliminates duplicate data, improves consistency, saves storage, and makes database maintenance easier

<a id="g1632"></a>

### Database Normalization কী? নরমালাইজেশনের প্রয়োজনীয়তা ও প্রকারভেদ (1NF, 2NF, 3NF, BCNF) … <sub>G1632</sub>

*Written*

Database Normalization কী? নরমালাইজেশনের প্রয়োজনীয়তা ও প্রকারভেদ (1NF, 2NF, 3NF, BCNF) ব্যাখ্যা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q105 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g2523"></a>

### Find the functional dependency if have then write yes and if no then write no in the belo… <sub>G2523</sub>

*Written*

Find the functional dependency if have then write yes and if no then write no in the below table : R(A,B,C,D,E,H) . A->B ,BC->D, E->C , D->A

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — AHE/ANE Question Set -03 (suggestion), Set-03 Q2 — [duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md](../duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md)

<a id="g3422"></a>

### (f) Why do we need database normalization? <sub>G3422</sub>

*Written*

(f) Why do we need database normalization?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q1(f) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4191"></a>

### What do you mean by Database Properties using Normalization? <sub>G4191</sub>

*Written*

What do you mean by Database Properties using Normalization?

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** PBL SO 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Pubali Bank Ltd (private) — Senior Officer (SD) — 2018 — Exam taker: AUST (as printed by the coaching banner; unverified) — Time 2 h, marks not printed, answer all — pages 1–4, Q8 — [bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md](../bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md)

<a id="g4775"></a>

### What is Database Normalization? Explain 1NF and 2NF. <sub>G4775</sub>

*Written*

What is Database Normalization? Explain 1NF and 2NF.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion), A10 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

## Indexing, B+ tree & hashing

<a id="g0121"></a>

### Bitmap indexes are particularly well-suited for: (high-cardinality columns / low-cardinal… <sub>G0121</sub>

*MCQ*

Bitmap indexes are particularly well-suited for: (high-cardinality columns / low-cardinality columns / large text fields / JSON)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q75 — [BCS/38_user-centered-design-schrodinger-hash-bitmap.md](../BCS/38_user-centered-design-schrodinger-hash-bitmap.md) · [image](../BCS/38_user-centered-design-schrodinger-hash-bitmap.jpg); [BCS/53_bfs-injective-functions-tree-leaves.md](../BCS/53_bfs-injective-functions-tree-leaves.md) · [image](../BCS/53_bfs-injective-functions-tree-leaves.jpg)
- **Printed answer:** (খ) Low-cardinality columns

<a id="g0306"></a>

### How does indexing improve query performance? <sub>G0306</sub>

*Written*

How does indexing improve query performance?

- **Asked in (1):** BSCL AE(CSE) 2025
- **Source:**
  - Bangladesh Satellite Company PLC Assistant Engineer (CSE) (2025-08-23), Q4 — [BUET JOB/34_bscll-ae-and-bba-questions.md](../BUET%20JOB/34_bscll-ae-and-bba-questions.md) · [image](../BUET%20JOB/34_bscll-ae-and-bba-questions.jpg)

<a id="g2057"></a>

### Indexing এবং Hashing এর পদ্ধতিগুলো বর্ণনা করুন। <sub>G2057</sub>

*Written*

Indexing এবং Hashing এর পদ্ধতিগুলো বর্ণনা করুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮ অথবা (ক) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g3196"></a>

### Briefly describe primary key, foreign key and index in relational database and their rela… <sub>G3196</sub>

*Written*

Briefly describe primary key, foreign key and index in relational database and their relationship. Do you think database indexing always makes applications faster? Explain your answer. [Combined 3 Bank SO(IT) 24]

- **Asked in (1):** Combined Bank SO(IT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 11 (second) — Combined 3 Bank (10185) — Senior Officer IT 2024 — 17.05.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT: 50 + Math+GK: 20); Written: Subjective (150) + Math (20) + Focus (10) + B/E+E/B — pages 44–47, Q(unnumbered 5) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3465"></a>

### Compare sparse index and dense îndex in a database system. <sub>G3465</sub>

*Written*

Compare sparse index and dense îndex in a database system.

- **Asked in (1):** Parliament Secretariat SAE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 34 — বাংলাদেশ জাতীয় সংসদ সচিবালয়ের উপসহকারী মেইনটেন্যান্স ইঞ্জিনিয়ার — পরীক্ষার তারিখঃ ১৭.০৭.২০২৩ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 5–10, CS Q14 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3490"></a>

### a. Define the term "Indexing" in Databases. What is its major benefit? 6 <sub>G3490</sub>

*Written*

a. Define the term "Indexing" in Databases. What is its major benefit? 6

- **Asked in (1):** Fisheries & Livestock Instructor(CS) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 35 — মৎস্য ও প্রাণীসম্পদ অধিদপ্তরের ইন্সট্রাক্টর কম্পিউটার সায়েন্স — তারিখঃ ২০.০৬.২০২৩ — exam taker not printed — time and total not printed — pages 10–13, Q3(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4021"></a>

### What is the role of an index in a database? (ক) To store large binary objects (খ) To stor… <sub>G4021</sub>

*MCQ*

What is the role of an index in a database? (ক) To store large binary objects (খ) To store data integrity constraints (গ) To boost the speed of data retrieval operations (ঘ) To group the related table together

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q148 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g3387"></a>

### Delete a specific node (200) from B+ tree & write the result <sub>G3387</sub>

*Written*

Delete a specific node (200) from B+ tree & write the result

- **Asked in (1):** BAERA Engineer(CSE) November 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Exam 26.11.2021, 2 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g3816"></a>

### The value of ‘n’ of a B+ tree index is 100. What will be the maximum record pointers for … <sub>G3816</sub>

*MCQ*

The value of ‘n’ of a B+ tree index is 100. What will be the maximum record pointers for a leaf node? (a) 98 (b) 50 (c) 100 (d) 99

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q4 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g4216"></a>

### Index definition, usage of index, Index for PT. <sub>G4216</sub>

*Written*

Index definition, usage of index, Index for PT.

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q2 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g1860"></a>

### How hash indexing & B+ Tree indexing? <sub>G1860</sub>

*Written*

How hash indexing & B+ Tree indexing?

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 42. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1991"></a>

### Indexing ও Hashing কী? Dense index ও Sparse index বর্ণনা করুন। <sub>G1991</sub>

*Written*

Indexing ও Hashing কী? Dense index ও Sparse index বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৪ অথবা (খ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2123"></a>

### Database এর ক্ষেত্রে indexing এর কার্যকারিতা বর্ণনা করুন। <sub>G2123</sub>

*Written*

Database এর ক্ষেত্রে indexing এর কার্যকারিতা বর্ণনা করুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯ (খ) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g3683"></a>

### Draw a B+ tree using the indexes- 12,14,19,30,21,22,13,34,18,23,38,40 where n=5? <sub>G3683</sub>

*Written*

Draw a B+ tree using the indexes- 12,14,19,30,21,22,13,34,18,23,38,40 where n=5?

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q4 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g4411"></a>

### Why indexing is used in database? How hash table works? <sub>G4411</sub>

*Written*

Why indexing is used in database? How hash table works?

- **Asked in (1):** DESCO AE(CSE) 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DESCO Assistant Engineer (CSE) 27.05.2016, Q1(iv) — [power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md](../power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md)

<a id="g1633"></a>

### ডেটাবেজে ইন্ডেক্সিং (Indexing) কী ও এর সুবিধা? Dense Index ও Sparse Index এর মধ্যে পার্থক… <sub>G1633</sub>

*Written*

ডেটাবেজে ইন্ডেক্সিং (Indexing) কী ও এর সুবিধা? Dense Index ও Sparse Index এর মধ্যে পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q106 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1634"></a>

### সর্টিং (Sorting) ও ইন্ডেক্সিং (Indexing) এর মধ্যে পার্থক্য লিখুন। <sub>G1634</sub>

*Written*

সর্টিং (Sorting) ও ইন্ডেক্সিং (Indexing) এর মধ্যে পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q107 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1635"></a>

### Hash Function কী? Static Hashing এবং Dynamic Hashing এর কার্যপদ্ধতি আলোচনা করুন। <sub>G1635</sub>

*Written*

Hash Function কী? Static Hashing এবং Dynamic Hashing এর কার্যপদ্ধতি আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q108 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1636"></a>

### B+ Tree Index Files এর গঠন ও সার্চিং কার্যপদ্ধতি বর্ণনা করুন। <sub>G1636</sub>

*Written*

B+ Tree Index Files এর গঠন ও সার্চিং কার্যপদ্ধতি বর্ণনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q109 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g4789"></a>

### Explain indexing in databases. Why is indexing important in Core Banking Systems (CBS)? <sub>G4789</sub>

*Written*

Explain indexing in databases. Why is indexing important in Core Banking Systems (CBS)?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion), C5 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

## Other

<a id="g2056"></a>

### Centralized System ও Client-Server System সম্পর্কে সচিত্র বর্ণনা করুন। <sub>G2056</sub>

*Written*

Centralized System ও Client-Server System সম্পর্কে সচিত্র বর্ণনা করুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮ (খ) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g2058"></a>

### Speedup এবং Scaleup চিত্রসহ ব্যাখ্যা করুন। <sub>G2058</sub>

*Written*

Speedup এবং Scaleup চিত্রসহ ব্যাখ্যা করুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮ অথবা (খ) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g2060"></a>

### One-to-one এবং One-to-many রিলেশন উদাহরণসহ ব্যাখ্যা করুন। <sub>G2060</sub>

*Written*

One-to-one এবং One-to-many রিলেশন উদাহরণসহ ব্যাখ্যা করুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯ (খ) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g2084"></a>

### রিলেশনশীপ কী? দুটি টেবিলের মধ্যে রিলেশন তৈরির পদ্ধতি আলোচনা করুন। <sub>G2084</sub>

*Written*

রিলেশনশীপ কী? দুটি টেবিলের মধ্যে রিলেশন তৈরির পদ্ধতি আলোচনা করুন।

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ১০। (ক) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2085"></a>

### কী ফিল্ড কী? প্রাইমারি ও ফরেন কী বলতে কী বুঝায়? ব্যাখ্যা করুন। <sub>G2085</sub>

*Written*

কী ফিল্ড কী? প্রাইমারি ও ফরেন কী বলতে কী বুঝায়? ব্যাখ্যা করুন।

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ১০ (খ) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2167"></a>

### (Same four tables) Find the TotalOrder as Monetary Amount which is ordered between the da… <sub>G2167</sub>

*Written*

(Same four tables) Find the TotalOrder as Monetary Amount which is ordered between the date 15 March 2024 and 29 March 2024

- **Asked in (1):** BRPL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BRPL Assistant Manager (ICT) 29.03.2024, Q4(ii) — [duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md](../duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md)

<a id="g2655"></a>

### ডাটাবেইজ এর ক্ষেত্রে এগ্রিগেট ফাংশন কি? পাঁচটি এগ্রিগেট ফাংশন এর নাম লিখ। <sub>G2655</sub>

*Written*

ডাটাবেইজ এর ক্ষেত্রে এগ্রিগেট ফাংশন কি? পাঁচটি এগ্রিগেট ফাংশন এর নাম লিখ।

- **Asked in (1):** WZPDCL SAE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Sub-Assistant Engineer (CSE) 27.05.2023, ১৩ — [duranta/1766849185-wzpdcl-sae-2023-cse/1766849185.md](../duranta/1766849185-wzpdcl-sae-2023-cse/1766849185.md)

<a id="g2700"></a>

### ডাটাবেজ ব্যর্থ হওয়ার কারণ কী? Logical এবং physical ডাটাবেজ ডিজাইন ব্যাখ্যা করুন। <sub>G2700</sub>

*Written*

ডাটাবেজ ব্যর্থ হওয়ার কারণ কী? Logical এবং physical ডাটাবেজ ডিজাইন ব্যাখ্যা করুন।

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 5 — ৪৫তম বিসিএস, তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড: ২৮১ — ২য় অংশ, নম্বর ২০*৫=১০০ (pp. 8–9), ৪ (গ) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g4039"></a>

### "Either all of its operations are executed or none."- this refers to: (ক) Consistency (খ)… <sub>G4039</sub>

*MCQ*

"Either all of its operations are executed or none."- this refers to: (ক) Consistency (খ) Isolation (গ) Atomicity (ঘ) Durability

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q166 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4905"></a>

### Students (id,name,dep) Enrollments(id,grade,course) 1. Print name, name of the students 2… <sub>G4905</sub>

*Written*

Students (id,name,dep) Enrollments(id,grade,course) 1. Print name, name of the students 2. Name student whose grade is A and from CSE dept

- **Asked in (1):** BUET AP(Exam Controller) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh University of Engineering & Technology — AP (Exam Controller), 21/06/2025 (suggestion), Q2 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g4082"></a>

### ডেটাবেজ ম্যানেজমেন্ট সিস্টেমের প্রাথমিক কাজগুলো বর্ণনা করুন। <sub>G4082</sub>

*Written*

ডেটাবেজ ম্যানেজমেন্ট সিস্টেমের প্রাথমিক কাজগুলো বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ২(ক) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4083"></a>

### রিলেশনশীপ কী? উদাহরণসহ One to Many এবং Many to Many রিলেশন বর্ণনা করুন। <sub>G4083</sub>

*Written*

রিলেশনশীপ কী? উদাহরণসহ One to Many এবং Many to Many রিলেশন বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ২(খ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4084"></a>

### ডেটাবেজ ইন্ডেক্সিং কী? ইন্ডেক্সিং-এর সুবিধা ও অসুবিধা বর্ণনা করুন। <sub>G4084</sub>

*Written*

ডেটাবেজ ইন্ডেক্সিং কী? ইন্ডেক্সিং-এর সুবিধা ও অসুবিধা বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ২(গ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4118"></a>

### রিলেশনশিপের ডিগ্রি কাকে বলে? উহা কত প্রকার ও কি কি? সংক্ষেপে লিখুন। <sub>G4118</sub>

*Written*

রিলেশনশিপের ডিগ্রি কাকে বলে? উহা কত প্রকার ও কি কি? সংক্ষেপে লিখুন।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ১ অথবা (ক) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4119"></a>

### ক্যান্ডিডেট কী ও কম্পোজিট কী কাকে বলে? <sub>G4119</sub>

*Written*

ক্যান্ডিডেট কী ও কম্পোজিট কী কাকে বলে?

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ১ অথবা (খ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4141"></a>

### ডাটাবেজ টিউনিং এবং ডাটা মাইনিং বলতে কী বোঝেন? <sub>G4141</sub>

*Written*

ডাটাবেজ টিউনিং এবং ডাটা মাইনিং বলতে কী বোঝেন?

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৬ — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g1959"></a>

### একজন ডাটাবেস এডমিন এর কাজ কী? কিছু ডাটাবেস সিস্টেম অ্যাপ্লিকেশনের নাম লিখুন। <sub>G1959</sub>

*Written*

একজন ডাটাবেস এডমিন এর কাজ কী? কিছু ডাটাবেস সিস্টেম অ্যাপ্লিকেশনের নাম লিখুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৮। (ক) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g1963"></a>

### ডাটাবেস ব্যবস্থাপনা সিস্টেমের তিন স্তরবিশিষ্ট আর্কিটেকচার ব্যাখ্যা করুন। <sub>G1963</sub>

*Written*

ডাটাবেস ব্যবস্থাপনা সিস্টেমের তিন স্তরবিশিষ্ট আর্কিটেকচার ব্যাখ্যা করুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৮ অথবা (খ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g1987"></a>

### রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম কি? ডাটাবেজের বিভিন্ন প্রকার রিলেশনশীপ বর্ণনা করুন। <sub>G1987</sub>

*Written*

রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম কি? ডাটাবেজের বিভিন্ন প্রকার রিলেশনশীপ বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৪। (ক) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g1988"></a>

### GRANT ও REVOKE এর কাজ বর্ণনা করুন। <sub>G1988</sub>

*Written*

GRANT ও REVOKE এর কাজ বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৪ (খ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2121"></a>

### Direct বা Random Access ফাইল প্রক্রিয়াকরণ চিত্রসহ বর্ণনা করুন। <sub>G2121</sub>

*Written*

Direct বা Random Access ফাইল প্রক্রিয়াকরণ চিত্রসহ বর্ণনা করুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮ অথবা (খ) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g2124"></a>

### সর্টিং এবং ইন্ডেক্সিং এর মধ্যে পার্থক্য লিখুন। <sub>G2124</sub>

*Written*

সর্টিং এবং ইন্ডেক্সিং এর মধ্যে পার্থক্য লিখুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯ অথবা (ক) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g2664"></a>

### Why is "Atomicity" specifically critical for an Inter-Bank Fund Transfer? <sub>G2664</sub>

*Written*

Why is "Atomicity" specifically critical for an Inter-Bank Fund Transfer?

- **Asked in (1):** Combined Bank AME/AE(IT) 2026(Jan)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariate (BSCS), Assistant Engineer (IT)/ Assistant Maintenance Engineer – Grade 9 — Exam Date 24/01/2026 — exam taker not printed — time not printed — 16 questions, marks in brackets (total not printed) — pages 1–3, Q3(i) — [duranta/1769271736-banker-s-selection-committee-secretariate-bscs-assistant-eng/1769271736.md](../duranta/1769271736-banker-s-selection-committee-secretariate-bscs-assistant-eng/1769271736.md)

<a id="g4060"></a>

### ডাটা নরমালাইজেশন বলতে কী বুঝেন? <sub>G4060</sub>

*Written*

ডাটা নরমালাইজেশন বলতে কী বুঝেন?

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৩(খ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4068"></a>

### রিলেশনাল অ্যালজেবরা কী? এর মৌলিক অপারেশনসমূহ লিখুন। <sub>G4068</sub>

*Written*

রিলেশনাল অ্যালজেবরা কী? এর মৌলিক অপারেশনসমূহ লিখুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৪ অথবা (খ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4070"></a>

### রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম কী? বিভিন্ন ধরনের ডাটাবেজ রিলেশনশীপের বর্ণনা দিন। <sub>G4070</sub>

*Written*

রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম কী? বিভিন্ন ধরনের ডাটাবেজ রিলেশনশীপের বর্ণনা দিন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৫(ক) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g2492"></a>

### ডাটাবেজ নিয়ে প্রাকটিকাল কনসেপ্ট। <sub>G2492</sub>

*Viva*

ডাটাবেজ নিয়ে প্রাকটিকাল কনসেপ্ট।

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — Directorate of Food (খাদ্য অধিদপ্তর), Assistant Programmer — Viva experience (ভাইভা অভিজ্ঞতা), 2022 (date not printed) — exam taker not printed — no marks — pages 2–3 (viva), V3 — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g2497"></a>

### খাদ্যের ওয়েরসাইট তৈরিতে টেবিল কিভাবে সাজানো যেতে পারে কি কি টেবিল হবে <sub>G2497</sub>

*Viva*

খাদ্যের ওয়েরসাইট তৈরিতে টেবিল কিভাবে সাজানো যেতে পারে কি কি টেবিল হবে

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — Directorate of Food (খাদ্য অধিদপ্তর), Assistant Programmer — Viva experience (ভাইভা অভিজ্ঞতা), 2022 (date not printed) — exam taker not printed — no marks — pages 2–3 (viva), V-tables — [duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md](../duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md)

<a id="g4672"></a>

### 3. কয়েকটি ডাটাবেজ Softwere এর নাম বলুন? <sub>G4672</sub>

*Viva*

3. কয়েকটি ডাটাবেজ Softwere এর নাম বলুন?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J2 Combined Bank Officer (IT) 2026, Job ID 10229 (viva), A2-V1 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g4700"></a>

### 14. কয়েকটি ডাটাবেজ এর নাম বল। কোন গুলো স্টাকচার্ড আর কোন গুলো নন- স্টাকচার্ড? <sub>G4700</sub>

*Viva*

14. কয়েকটি ডাটাবেজ এর নাম বল। কোন গুলো স্টাকচার্ড আর কোন গুলো নন- স্টাকচার্ড?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J6 Combined Bank Officer (IT) 2026, Job ID 10229, Board 03, 13/07/2026 (viva), A6-V6 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g4701"></a>

### 15. তুমি জানো যে ব্যাংক এ ওরাকল ডাটাবেজ ব্যবহার করা হয়, এতো ডাটাবেজ থাকতে আমরা বেশি টাকা… <sub>G4701</sub>

*Viva*

15. তুমি জানো যে ব্যাংক এ ওরাকল ডাটাবেজ ব্যবহার করা হয়, এতো ডাটাবেজ থাকতে আমরা বেশি টাকা খরচ করে ওরাকল ব্যবহার করি কেন? কি এমন আছে যা অন্য ডাটাবেজ এ নাই?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J6 Combined Bank Officer (IT) 2026, Job ID 10229, Board 03, 13/07/2026 (viva), A6-V7 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g3434"></a>

### (c) What do you mean by the terms: roll back and roll forward? <sub>G3434</sub>

*Written*

(c) What do you mean by the terms: roll back and roll forward?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q7(c) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

## Views, triggers & procedures

<a id="g0980"></a>

### Consider the employee tables: Create a SQL view that shows the details of Employee inform… <sub>G0980</sub>

*Written*

Consider the employee tables: Create a SQL view that shows the details of Employee information who have the salary equivalent to the maximum, minimum and average salary of employee.

- **Asked in (1):** Milk Vita AM(CSE) 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — sql, Q9 — [bit to exabyte/10_bte-p010-sql-q06-13.md](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) · [image](../bit%20to%20exabyte/10_bte-p010-sql-q06-13.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q22 — [bit to exabyte/30_bte-g2-p16-database-sql-q20-25.md](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) · [image](../bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.jpg)

<a id="g3076"></a>

### What is trigger? When it is used? Write down some advantages of trigger. <sub>G3076</sub>

*Written*

What is trigger? When it is used? Write down some advantages of trigger.

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q3 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g4317"></a>

### What is trigger, explain with example. Why trigger needed? <sub>G4317</sub>

*Written*

What is trigger, explain with example. Why trigger needed?

- **Asked in (1):** ICB AMCL AP 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ICB Asset Management Company Ltd — Assistant Programmer — 2024 (date not printed) — Exam taker: FBS, DU (as labelled by IT Job QnS; unverified) — Non-tech 50 + Tech 50, Q10 — [bank-written-web/2024-icb-amcl-ap-itjobqns/icb-amcl-ap-2024.md](../bank-written-web/2024-icb-amcl-ap-itjobqns/icb-amcl-ap-2024.md)

<a id="g0170"></a>

### Employee(emp_id, emp_name, dept_id, salary), Department(dept_id, dept_name, increment_dep… <sub>G0170</sub>

*Written*

Employee(emp_id, emp_name, dept_id, salary), Department(dept_id, dept_name, increment_dept): create a trigger that increases salary by 10% for employees whose salary is above 30000.

- **Asked in (1):** PGCB AE(CSE) 2021
- **Source:**
  - PGCB Assistant Engineer (CSE) (BUET) (2021-09-30), Q1 — [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)
- **Printed answer:** CREATE TRIGGER New_EMP ALTER INSERT ON employee FOR EACH ROW UPDATE salary = salary + salary*0.10 WHEN salary > 30000
- **Correction:** Invalid syntax ('ALTER INSERT', bare UPDATE). E.g. MySQL: CREATE TRIGGER inc_sal BEFORE INSERT ON Employee FOR EACH ROW BEGIN IF NEW.salary > 30000 THEN SET NEW.salary = NEW.salary * 1.10; END IF; END;

<a id="g3769"></a>

### Fill in the gaps with Trigger sql. <sub>G3769</sub>

*Written*

Fill in the gaps with Trigger sql.

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q9 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g4217"></a>

### Define View, Materialized View, Difference btw them and Usage of two. <sub>G4217</sub>

*Written*

Define View, Materialized View, Difference btw them and Usage of two.

- **Asked in (1):** RAKUB ADBA 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — RAKUB — Assistant Database Administrator (ADBA) — Written — 04/12/2020 — Exam taker: not printed — marks per question as printed (IT 145 + Bangla/English focus 40) — pages 1–9, Q3 — [bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md](../bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md)

<a id="g1965"></a>

### ডাটাবেস সিস্টেমে View কী? এটি কী কী কাজে লাগে? <sub>G1965</sub>

*Written*

ডাটাবেস সিস্টেমে View কী? এটি কী কী কাজে লাগে?

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৯ (গ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2765"></a>

### Differentiate between stored procedure and trigger in Structural Query Language (SQL). <sub>G2765</sub>

*Written*

Differentiate between stored procedure and trigger in Structural Query Language (SQL).

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 8) (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0660"></a>

### What is a View? <sub>G0660</sub>

*Viva*

What is a View?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q2 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** A View is a virtual table created from one or more SQL queries. It stores only the query, not the actual data

<a id="g0661"></a>

### What is a Materialized View? <sub>G0661</sub>

*Viva*

What is a Materialized View?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q3 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** A Materialized View stores the query result physically in the database. It improves query performance but requires periodic refresh

<a id="g0662"></a>

### Difference between View and Materialized View. <sub>G0662</sub>

*Viva*

Difference between View and Materialized View.

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p25 Q4 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p25)
- **Printed answer:** View: Stores only the SQL query; data is fetched every time; Materialized View: Stores the query result physically; faster but needs refreshing

<a id="g0673"></a>

### What is a Trigger? <sub>G0673</sub>

*Viva*

What is a Trigger?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q15 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** A Trigger is a stored database object that automatically executes when a specified event (INSERT, UPDATE, or DELETE) occurs

<a id="g0674"></a>

### What is the function of a Trigger? <sub>G0674</sub>

*Viva*

What is the function of a Trigger?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p26 Q16 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p26)
- **Printed answer:** Triggers automatically perform tasks such as auditing, logging, enforcing business rules, and maintaining data integrity

<a id="g0678"></a>

### What is the real-life application of a Database Trigger? <sub>G0678</sub>

*Viva*

What is the real-life application of a Database Trigger?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p27 Q24 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p27)
- **Printed answer:** A trigger can automatically record transaction logs, update account balances, maintain audit trails, or generate notifications after database changes

<a id="g1620"></a>

### Data Abstraction কী? ডেটা অ্যাবস্ট্রাকশনের বিভিন্ন লেভেল (Physical, Logical, View Level) … <sub>G1620</sub>

*Written*

Data Abstraction কী? ডেটা অ্যাবস্ট্রাকশনের বিভিন্ন লেভেল (Physical, Logical, View Level) আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডেটাবেজ থিওরি, আর্কিটেকচার ও মডেল, Q93 — [18th NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) · [image](../18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.jpg)

<a id="g1648"></a>

### ডেটাবেজ ভিউ (View) কী? ইহা কী কাজে লাগে এবং Table ও View এর মধ্যে পার্থক্য লিখুন। <sub>G1648</sub>

*Written*

ডেটাবেজ ভিউ (View) কী? ইহা কী কাজে লাগে এবং Table ও View এর মধ্যে পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — SQL কুয়েরি ও প্র্যাকটিস সমস্যা, Q121 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1650"></a>

### Database Trigger কী এবং ডেটাবেজে ট্রিগারের সুবিধা কী কী? <sub>G1650</sub>

*Written*

Database Trigger কী এবং ডেটাবেজে ট্রিগারের সুবিধা কী কী?

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — DBMS — SQL (continued), Q123 — [18th NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) · [image](../18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.jpg)

## SQL command types

<a id="g2055"></a>

### DDL এবং DML এর মধ্যে পার্থক্য লিখুন। <sub>G2055</sub>

*Written*

DDL এবং DML এর মধ্যে পার্থক্য লিখুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৮। (ক) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g0957"></a>

### What is DBMS? Write the full meaning of DDL and DML. <sub>G0957</sub>

*Written*

What is DBMS? Write the full meaning of DDL and DML.

- **Asked in (1):** BKKB AP 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q13 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q13 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g1858"></a>

### What are the DDL and DML? <sub>G1858</sub>

*Written*

What are the DDL and DML?

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 41. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1989"></a>

### DDL ও DML সম্পর্কে লিখুন। <sub>G1989</sub>

*Written*

DDL ও DML সম্পর্কে লিখুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৪ (গ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g4066"></a>

### DDL, DML, 4GL সম্পর্কে বর্ণনা করুন। <sub>G4066</sub>

*Written*

DDL, DML, 4GL সম্পর্কে বর্ণনা করুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৪(খ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4468"></a>

### What are the difference among DDL,DML and DCL? <sub>G4468</sub>

*Written*

What are the difference among DDL,DML and DCL?

- **Asked in (1):** NWPGCL AE(CSE)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NWPGCL Assistant Engineer (CSE) (year not printed), Q3 — [power-sector-web/2021-nwpgcl-ae-cse-carrierbd/nwpgcl-ae-cse.md](../power-sector-web/2021-nwpgcl-ae-cse-carrierbd/nwpgcl-ae-cse.md)

<a id="g1647"></a>

### ডেটাবেজ সাব-ল্যাঙ্গুয়েজ: DDL, DML, DCL, TCL এবং DQL এর সংজ্ঞা, কমান্ড ও পার্থক্য লিখুন। <sub>G1647</sub>

*Written*

ডেটাবেজ সাব-ল্যাঙ্গুয়েজ: DDL, DML, DCL, TCL এবং DQL এর সংজ্ঞা, কমান্ড ও পার্থক্য লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — SQL কুয়েরি ও প্র্যাকটিস সমস্যা, Q120 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

## Distributed DB, NoSQL & backup

<a id="g0952"></a>

### What is distributed database? <sub>G0952</sub>

*Written*

What is distributed database?

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q8 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q8 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g3082"></a>

### What is the distributed database system? What is the responsibilities of a database admin… <sub>G3082</sub>

*Written*

What is the distributed database system? What is the responsibilities of a database administrator?

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q9 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3139"></a>

### In the context of data management, what are the primary difference between data replicati… <sub>G3139</sub>

*Written*

In the context of data management, what are the primary difference between data replication and data backup? Provide real-world example of ashen each is employed effectively.

- **Asked in (1):** Rupali Bank ANA 2023
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q26 — [suggestion based on previous yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md](../suggestion%20based%20on%20previous%20yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md) · [image](../suggestion%20based%20on%20previous%20yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — 07 — RUPALI BANK — ANA (5 Post) 2023 — Job ID: 10166 — 04.11.2023 — Exam taker: BIBM — Marks: Focus + GK (15+15+10) + IT (15×10) — pages 35–37, Q13 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3176"></a>

### Difference between incremental backup and differential backup. Which is more suitable for… <sub>G3176</sub>

*Written*

Difference between incremental backup and differential backup. Which is more suitable for the banking system? [Combined Bank ADA 2024]

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q17 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g0191"></a>

### Which is an advantage of a distributed database over a centralized one? (software cost/co… <sub>G0191</sub>

*MCQ*

Which is an advantage of a distributed database over a centralized one? (software cost/complexity/slow response/modular growth)

- **Asked in (1):** BCC AP 2021
- **Source:**
  - BCC Assistant Programmer (BUET) (2021-02-12), MCQ 8 — [BUET JOB/10_stages-osi-model-bcc-mcq.md](../BUET%20JOB/10_stages-osi-model-bcc-mcq.md) · [image](../BUET%20JOB/10_stages-osi-model-bcc-mcq.jpg)
- **Printed answer:** d (Modular growth)

<a id="g0956"></a>

### Explain the concept distributed DBMS. What are the features of DBMS? <sub>G0956</sub>

*Written*

Explain the concept distributed DBMS. What are the features of DBMS?

- **Asked in (1):** BB AME 2019
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database Management System / DB ACID, Q12 — [bit to exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) · [image](../bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Database and SQL, Q12 — [bit to exabyte/28_bte-g2-p14-database-sql-q05-15.md](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) · [image](../bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.jpg)

<a id="g2530"></a>

### What is the distributed DBMS and describe its feature? <sub>G2530</sub>

*Written*

What is the distributed DBMS and describe its feature?

- **Asked in (1):** BB AME 2019
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — AHE/ANE Question Set -04 (suggestion), Set-04 Q1 — [duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md](../duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md)
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Maintenance Engineer (AME) — 21.09.2019 — Exam taker: BUET (as printed by the coaching banner; unverified) — Marks 150, Time 1.30 h, answer all — pages 1–5, Q1 — [bank-written-web/2019-bb-ame-stackit-slideshare/bb-ame-2019.md](../bank-written-web/2019-bb-ame-stackit-slideshare/bb-ame-2019.md)

<a id="g1638"></a>

### Database System Architectures: Centralized, Distributed এবং Client-Server ডেটাবেজ সিস্টেম… <sub>G1638</sub>

*Written*

Database System Architectures: Centralized, Distributed এবং Client-Server ডেটাবেজ সিস্টেম সচিত্র বর্ণনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q111 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

## Concurrency control & recovery

<a id="g0125"></a>

### Write-ahead logging requires: (data first, log later / no redo phase / log record flushed… <sub>G0125</sub>

*MCQ*

Write-ahead logging requires: (data first, log later / no redo phase / log record flushed before data page / none)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q79 — [BCS/57_write-ahead-logging-random-search.md](../BCS/57_write-ahead-logging-random-search.md) · [image](../BCS/57_write-ahead-logging-random-search.jpg)
- **Printed answer:** (গ) log record flushed before the data page

<a id="g3966"></a>

### Strict two-phase locking (S2PL) holds ________ till commit. (ক) All locks (খ) Only read l… <sub>G3966</sub>

*MCQ*

Strict two-phase locking (S2PL) holds ________ till commit. (ক) All locks (খ) Only read locks (গ) only write locks (ঘ) No locks

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - Paper not shown on the source sheet, MCQ 18 — [BCS/31_function-pointer-s2pl-class-spooling.md](../BCS/31_function-pointer-s2pl-class-spooling.md) · [image](../BCS/31_function-pointer-s2pl-class-spooling.jpg)
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — ICT (281), question paper 2 (Q101–200), 10.10.2025, Q115 — [bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md](../bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md)
- **Printed answer:** Printed: (a) All locks.
- **Correction:** Strict 2PL keeps only exclusive (write) locks until commit or abort, so the answer is (c) Only write locks. Holding all locks until commit is rigorous 2PL.

<a id="g0223"></a>

### Locking protocols are used in DBMS for ____. <sub>G0223</sub>

*MCQ*

Locking protocols are used in DBMS for ____.

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q1(iv) — [BUET JOB/36_math-mcq-and-bpdb-2021.md](../BUET%20JOB/36_math-mcq-and-bpdb-2021.md) · [image](../BUET%20JOB/36_math-mcq-and-bpdb-2021.jpg)
- **Correction:** No answer printed. Expected: concurrency control.

<a id="g2920"></a>

### When does a Deadlock occur and how do you prevent it in a database? <sub>G2920</sub>

*Written*

When does a Deadlock occur and how do you prevent it in a database?

- **Asked in (1):** Combined Bank SO(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 02 — BSCS Combined 3 Banks ((1) Sonali Bank Limited (2) Bangladesh New Development Bank Limited) — Senior Officer (IT) — 03-11-2020 — Exam taker: not printed — Total Mark 200, Total Time 2.00 Hours — pages 3–4, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2922"></a>

### Classify the failure of Database Management. <sub>G2922</sub>

*Written*

Classify the failure of Database Management.

- **Asked in (1):** Combined Bank SO(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 02 — BSCS Combined 3 Banks ((1) Sonali Bank Limited (2) Bangladesh New Development Bank Limited) — Senior Officer (IT) — 03-11-2020 — Exam taker: not printed — Total Mark 200, Total Time 2.00 Hours — pages 3–4, Q3 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3755"></a>

### Write down the full form of DDL, DML, DCL and TCL. Classify the following commands into D… <sub>G3755</sub>

*Written*

Write down the full form of DDL, DML, DCL and TCL. Classify the following commands into DDL/DML/DCL/TCL SELECT, INSERT, GRANT, ALTER, MODIFY, COMMIT, ROLLBACK..etc

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q22 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g2732"></a>

### Why do we use a trigger? Write a trigger that inserts the timestamp in another table as s… <sub>G2732</sub>

*Written*

Why do we use a trigger? Write a trigger that inserts the timestamp in another table as soon as an insert or update is done in a table.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 8 (b) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0378"></a>

### What is ROLLBACK? <sub>G0378</sub>

*Viva*

What is ROLLBACK?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - BPSC viva (viva), Q11 — [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)
- **Printed answer:** Transaction command that undoes all changes of an incomplete transaction, restoring the previous state

<a id="g0624"></a>

### What should be done if the bank database crashes? <sub>G0624</sub>

*Viva*

What should be done if the bank database crashes?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p20 Q14 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p20); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p21)
- **Printed answer:** First, identify the cause and isolate the problem. Then restore data from backups or switch to the Disaster Recovery Site (DRS) to continue banking operations while recovery is performed

<a id="g1644"></a>

### Concurrency Control কী? Lock-Based Protocols এবং Timestamp-Based Protocols ব্যাখ্যা করুন। <sub>G1644</sub>

*Written*

Concurrency Control কী? Lock-Based Protocols এবং Timestamp-Based Protocols ব্যাখ্যা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q117 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g1645"></a>

### Database Failure কী ও এর শ্রেণিবিভাগ? ফেইলিউর অবস্থা হতে ডেটাবেজ পুনরুদ্ধারে Log-Based Re… <sub>G1645</sub>

*Written*

Database Failure কী ও এর শ্রেণিবিভাগ? ফেইলিউর অবস্থা হতে ডেটাবেজ পুনরুদ্ধারে Log-Based Recovery মেকানিজম ব্যাখ্যা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q118 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)

<a id="g4798"></a>

### Define Backup and Recovery in DBMS (brief). <sub>G4798</sub>

*Written*

Define Backup and Recovery in DBMS (brief).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper II) (suggestion), A4 — [model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md](../model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md)

## Data warehouse & mining

<a id="g3112"></a>

### Difference between database, data warehouse & data mining with real-world examples. Write… <sub>G3112</sub>

*Written*

Difference between database, data warehouse & data mining with real-world examples. Write down 10 most common Cyber Attacks.

- **Asked in (1):** Combined Bank SO(IT) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 05 — Combined 4 Bank — SO IT (222 post) 2023 — Job ID: 10149 — 13.10.2023 — Exam taker: BIBM — Marks: Focus, GK (15+15+10) + IT (150) — pages 33–34, Q8 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g4298"></a>

### Which of the following tools is used in business intelligence? ক. OLAP খ. Data Mining গ. … <sub>G4298</sub>

*MCQ*

Which of the following tools is used in business intelligence? ক. OLAP খ. Data Mining গ. Web Mining ঘ. All of these

- **Asked in (1):** BB AD(General) 2023
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (General) — Preliminary MCQ, "Basic computer knowledge" section (Q91–100) — 20 October 2023 — Exam taker: not stated — 100 MCQ, 1 hour, 100 marks, MCQ95 — [bank-written-web/2023-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2023-ict.md](../bank-written-web/2023-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2023-ict.md)

<a id="g2122"></a>

### Data mining এবং Data warehousing বলতে কী বোঝায়? এদের মধ্যে সম্পর্ক কী? এদের উপকারিতা কী? <sub>G2122</sub>

*Written*

Data mining এবং Data warehousing বলতে কী বোঝায়? এদের মধ্যে সম্পর্ক কী? এদের উপকারিতা কী?

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৯। (ক) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g1640"></a>

### Data Warehousing, Data Analysis এবং Data Mining কী? এদের পারস্পরিক সম্পর্ক লিখুন। <sub>G1640</sub>

*Written*

Data Warehousing, Data Analysis এবং Data Mining কী? এদের পারস্পরিক সম্পর্ক লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — কী, নরমালাইজেশন, ইনডেক্সিং ও কনকারেন্সি, Q113 — [18th NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) · [image](../18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.jpg)
