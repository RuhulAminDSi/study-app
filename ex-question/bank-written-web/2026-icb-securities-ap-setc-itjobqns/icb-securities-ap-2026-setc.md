# ICB Securities Trading Co. Assistant Programmer aptitude test (Set C), 11 July 2026 — IT Job QnS

- **Source:** IT Job QnS — https://it.jobqns.com/icb-securities-trading-company-limited-ap-2026-aptitude-test-set-c/ (page text saved as `icb-securities-trading-company-limited-ap-2026-aptitude-test-set-c.html.txt`)
- **Publisher:** IT Job QnS (it.jobqns.com), with the site's own solutions
- **Pages:** 1 web page
- **Document type:** exam paper (practical/aptitude test, 3 questions, with the site's solutions)
- **Bank type:** state-owned financial institution (ICB subsidiary)

## Transcription Notes

- Header as printed: "Aptitude Test • Year 2026 / ICB Securities Trading Company Limited / Post Name: Assistant Programmer / Exam Taker: DU CSE / Exam Date: 11-July-2026 / Marks: 40, Time: 60 Minutes, Set: C". **Exam taker DU CSE — site label, unverified.**
- Marks printed per part (3+3+3+3, 4+5+4, 15) add to 40.
- Typos kept: "specifie branch", "iique reference number", grade cell "<F".
- Duplicate check: `ex-question/Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md` is the **written** exam of 27-06-2026; this is the later aptitude (practical) test of 11-07-2026. New.

## Content

### ICB Securities Trading Company Limited — Assistant Programmer — Aptitude test, Set C — 11-July-2026 — Exam taker: DU CSE (as labelled by IT Job QnS; unverified) — Marks 40, 60 minutes

**1.** A file student.txt contains records in the format: StudentID Name Marks1 Marks2 Marks3 Marks4 *(12 marks)*

Write a program that:
(a) (3 Marks) Calculates total and average marks.
(b) (3 Marks) Assigns grades (A+, A, B,C,F). Where, Marks ≥80 → A+, ≥70 → A, ≥60 → B, ≥50 → C, <50 → F (printed as a table; last cell "<F")
(c) (3 Marks) Displays the top scored three students.
(d) (3 Marks) Displays the subject having the highest average mark.

> Printed answer: C program with a struct array, fscanf loop, sort for top three, per-subject averages.

**2.** Develop a program using object-oriented programming principles. *(13 marks)*

Requirements
(a) (4 Marks) Create a base class named Employee with the private/protected data members Employee ID, Employee Name, and Basic Salary. In addition, this class should include a constructor to initialize the data members and a method to display employee information.
(b) (5 Marks) Create a derived class named PermanentEmployee that inherits from Employee. It should have methods to calculate a 20% allowance based on the basic salary, to calculate the total salary, and to display the total salary along with the employee information.
(c) (4 Marks) In the main() method:
(i) Create objects for three PermanentEmployee.
(ii) Display the details and total salary of each employee.
(iii) Display the employee with the highest total salary.

> Printed answer: C++ classes Employee / PermanentEmployee.

**3.** A bank introduces a Digital Gold Banking System that allows customers to maintain both conventional bank accounts and digital gold investments. A customer may open one or more accounts, but each account belongs to only one customer and is maintained by a specifie branch. Customers may deposit, withdraw, or transfer money between accounts. Every transaction is processed by an employee and is assigned a iique reference number with its date and time. Customers can also buy or sell digital gold using money from one of their accounts. Since the market price of gold changes throughout the day, the bank records every price update with its effective timestamp. When a gold transaction occurs, the transaction must permanently store the price that was applicable at that moment, even if the market price changes later. A customer cannot sell more gold than the amount currently owned. *(15 marks)*

Now, design and implement the database with necessary tables with relevant constraints.

> Printed answer: tables Branch, Customer, Employee, Account, BankTransaction, GoldPriceHistory, GoldHolding, GoldTransaction with PK/FK/CHECK constraints.

