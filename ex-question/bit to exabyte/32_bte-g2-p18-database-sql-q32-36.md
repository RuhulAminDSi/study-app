# Bit to Exabyte — Super ICT 150++ Questions Book (previous questions, chapter by chapter), book page 18 — Database and SQL, Q32–36 (repeat of group-1 SQL Q19–24)

- **Source image:** `32_bte-g2-p18-database-sql-q32-36.jpg` (original file name `839934819_122143271277191819_3033654585215410728_n.jpg`)
- **Page:** printed "Bit to Exabyte | 18"; folder position 32 of 71
- **Paper / Post:** none: a **compiled list of previous recruitment-exam questions**, grouped by topic; every question carries its own exam tag(s) in square brackets
- **Exam date:** per question (year inside each tag)
- **Marks:** not printed

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"); Part A of the book indexed in `../Standard Pattern/`. A faint logo watermark sits behind the text and hides nothing.
- Questions and exam tags are verbatim (tag spelling as printed, e.g. post abbreviations AME, AP, SAE, AE(CSE), ANE). Typos in questions are kept.
- Second upload group of this folder: a separate "Previous Questions" chapter set whose page numbering restarts at 1 (book pages here are group-2 page numbers).
- The group-2 "Database and SQL" chapter **repeats the group-1 lists** with the same exam tags (DBMS Q1–13 → `05_`/`06_`; SQL → `08_`–`14_`). Phase 2 must count each question once.
- Q36 continues on page 19.

## Content

32. Database table by name Loan Records is given below:

    | Borrower | Bank_Manager | Loan_Amount |
    |---|---|---|
    | Rahim | Shuvo | 1000.00 |
    | Shamim | Rasel | 500.00 |
    | Mamun | Shuvo | 7000.00 |

    What is the output of the following SQL query?

```sql
SELECT count (*) FROM (
(SELECT Borrower, Bank_Manager, FROM Loan_Records) AS S NATURAL JOIN
(SELECT Bank_Manager, Loan_Amount FROM Loan_Records) AS T);
```
*[BAUST AP 2021]*

33. Consider the following Schemas-
    Movies (title, year, length, genre, studioName, producerCert)
    starsIn (movieTitle, movieYear, starName, salary)
    MovieStar (name, address, gender, birthdate)
    MovieExec (name, address, producerCert, netWorth)
    Studio (name, address)
    Write SQL queries for the following:
    (a) Find the address of a studio named MGM
    (b) Find the number of movies that was not produced by "MGM" *[BPSC AME 2021]*
34. Given a database schema and worker table with fully code: Now writes SQL Query from the following questions.
    - Write a query to get distinct name
    - Write a query to get the first three letter of first_name column from worker table. *[DPDC 2020]*
35. SQL Query:
    (i) Commission greater than 10% *[NU AP 2020]*
    (ii) Remove duplicate data from table: *[NU AP 2020]*
36. Database Query: Given two table *(continued on page 19)*
