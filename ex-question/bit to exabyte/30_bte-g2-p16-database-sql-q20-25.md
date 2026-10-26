# Bit to Exabyte — Super ICT 150++ Questions Book (previous questions, chapter by chapter), book page 16 — Database and SQL, Q20 (cont.)–25 (repeat of group-1 SQL Q7–12)

- **Source image:** `30_bte-g2-p16-database-sql-q20-25.jpg` (original file name `831522172_122143271193191819_5180298329126113820_n.jpg`)
- **Page:** printed "Bit to Exabyte | 16"; folder position 30 of 71
- **Paper / Post:** none: a **compiled list of previous recruitment-exam questions**, grouped by topic; every question carries its own exam tag(s) in square brackets
- **Exam date:** per question (year inside each tag)
- **Marks:** not printed

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"); Part A of the book indexed in `../Standard Pattern/`. A faint logo watermark sits behind the text and hides nothing.
- Questions and exam tags are verbatim (tag spelling as printed, e.g. post abbreviations AME, AP, SAE, AE(CSE), ANE). Typos in questions are kept.
- Second upload group of this folder: a separate "Previous Questions" chapter set whose page numbering restarts at 1 (book pages here are group-2 page numbers).
- Questions printed in **orange** (the highlight colour used in this part of the book) are marked ◆.
- The group-2 "Database and SQL" chapter **repeats the group-1 lists** with the same exam tags (DBMS Q1–13 → `05_`/`06_`; SQL → `08_`–`14_`). Phase 2 must count each question once.
- Q23 the tag is printed in red here. Q25 tag is missing its closing bracket, as in group 1.

## Content

*(Q20, continued)* joining_date, salary, dept_id) and department (dept_id, dept_name). Where detp_id is forgeign key. Find the first_name and department name whose salary is maximum. *[BIWTA AE(CSE) 2023]*

21. ◆ Consider the Schema employee(id, name, salary), equipment(id, name, price), hire(employee_id, equipment_id); Write the SQL query to show the name of employee who borrow the maximum equipment? *[BAPEX AGM(ICT) 2023]*
22. Consider the employee tables: Create a SQL view that shows the details of Employee information who have the salary equivalent to the maximum, minimum and average salary of employee. *[Milk Vita AM(CSE) 2023]*
23. Analyze the following code:

```sql
SELECT department_name, AVG(salary) as average_salary
FROM employees
JOIN department d ON e.department_id = d.department_id
WHERE salary > (SELECT AVG(salary) FROM employees )
GROUP BY department_name
HAVING COUNT(*) > 2
ORDER BY average_salary desc
```
*[Combined Bank Officer(IT), Rupali Bank ANE 2023]*

24. Employee table হতে Employee_id, Employee কে খোঁজে বের করার SQL Command লিখ যাদের গড় salary 2000 উপরে। *[BTCL, JAM 2022]*
25. SQL Query for finding Dept names for departments Find out the employees whose salaries are greater than the salaries of their managers. *[NESCO AM(ICT) 2021*
