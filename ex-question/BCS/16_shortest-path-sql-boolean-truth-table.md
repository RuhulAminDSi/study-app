# COMPACT IT Written (Previous Exam Questions) — Shortest path table, Excel AVERAGE/LARGE, SQL INSERT, and 38th BCS (2018) Boolean truth table

- **Source image:** `16_shortest-path-sql-boolean-truth-table.jpg` (original file name `489967561_1232700815525497_1411022355940698965_n.jpg`)
- **Page:** 16 of 63 (folder-wide position)
- **Paper / Post:** 38th BCS, Written Exam: 2018 (banner appears mid-page); preceding question numbers belong to an earlier paper not identified on this page
- **Exam date:** 2018 (as printed: "38th BCS, Written Exam: 2018")
- **Marks:** not shown on this page

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Written — Previous Exam Questions", footer "COMPACT IT Written").
- Two different source papers share this page: the top (selected vertices table, Q4, Q5) belongs to an unidentified earlier paper; the "38th BCS, Written Exam: 2018" banner then starts a new question at Q1.
- The Boolean truth table is cut off at the bottom edge of the image — only 12 of the 16 rows for A,B,C,D are visible (the last visible row is 1 0 1 0). The remaining rows are [cut off].
- In the printed source the fourth product term of the equation reads "A B̄ C D" in the question line but the truth-table column header shows the same term as "Ā B C̄ D"; both are transcribed exactly as printed.
- No handwritten marginalia on this page.

## Content

*[Continuation — shortest path / all-pairs table from a preceding question]*

| Selected vertics | S2 | S3 | S4 | S5 |
| --- | --- | --- | --- | --- |
| S1 | 1 | 1 | ∞ | 1 |
| S2 | 1 | 1 | 2 | 1 |
| S3 | 1 | 1 | 2 | 1 |
| S5 | 1 | 1 | 2 | 1 |

Now, sortest path source is S1 to S4 is-

```
S1=> S3=> S4  or  S1=> S5=> S4  or  S1=> S2=> S4
```

So, Average cost = 2

**4. In an excel sheet cell A1, A2, A3, A4 contains the value of power generation by four plants. Write a function in A5 to show the average of best three power plants.**

**Answer:**

```
=AVERAGE(LARGE(A1:A4,{1,2,3}))
```

**5. Write an SQL query to insert a tuple in the table: Employee (ID, Name, Designation, and Salary).**

**Answer:**

```sql
INSERT INTO employee(ID, Name, Designation, Salary)
VALUES(1, "Compact", "Officer", 22000);
```

---

## 38th BCS, Written Exam: 2018

**1. Consider the following algebraic equation**

**a) Draw a truth table that satisfies the above-mentioned equation.**

$$
Y = A\bar{B}C\bar{D} + A\bar{B}\bar{C} + \bar{A}BD + A\bar{B}CD
$$

**Answer:**

| A | B | C | D | Ā | B̄ | C̄ | D̄ | B̄C̄ | C̄ | AB̄C̄D̄ | ABC̄ | ĀBD | AB̄CD | Y |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| [cut off] | | | | | | | | | | | | | | | |
