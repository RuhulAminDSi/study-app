# 6 Banks & Financial Institutions Assistant Programmer, 2021 — IT Job QnS recollection

- **Source:** IT Job QnS — https://it.jobqns.com/6-banks-fin-institutions-assistant-programmer-2021/ (page text saved as `6-banks-fin-institutions-assistant-programmer-2021.html.txt`) — MCQ part of the same exam: https://it.jobqns.com/6-bank-financial-institution-assistant-programmer-2021mcq/ (40 MCQs, not transcribed)
- **Publisher:** IT Job QnS (it.jobqns.com), with the site's own solutions
- **Pages:** 1 web page
- **Document type:** exam paper (recollection, with the site's solutions)

## Transcription Notes

- Header as printed: "Assistant Programmer • Year 2021 / 6 Banks and Financial Institution / Post Name: Assistant Programmer / Exam Date: 2021". **Exam taker and marks not stated.** The site's MCQ page gives "Exam Date: 18/03/2021"; its post-wise analysis page heads the same paper "6 Bank and FI, Assistant Programmer, 2022 (exam date: 15-01-2022)". Date left open.
- Item 6 is printed with its own number "7." ("7. Write SQL command from the following tables."); kept.
- Typos kept: "Acyclie", "First Corporation Bank".
- Duplicate check: `exam-tags.json` has a `Combined Bank AP 2021` key; grep for the topological-sort, balanced-parentheses and mountain-array items finds none of these questions in `ex-question/`. New (exam key reused).

## Content

### 6 Banks & Financial Institutions (BSCS) — Assistant Programmer — 2021 (date conflicting: 18/03/2021 on the MCQ page; 15-01-2022 in the site's analysis page) — Exam taker: not stated — recollection (8 items)

**1.** Topological sorting for Directed Acyclie Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG. Now write a C/C++ Program with the following input and Output.

Input: 5 2, 5 0, 4 0, 4 1, 2 3, 3 1
Output: 5 4 2 3 1 0

**2.** Write a C/C++ program to check Balanced parentheses in an Expression.

**3.** We are given an array of integers and a range, we need to find whether the subarray which falls in this range has values in the form of a mountain or not. All values of the subarray are said to be in the form of a mountain if either all values are increasing or decreasing or first increasing and then decreasing. Write a C/C++ Program that shows input is a Mountain sequence or Not Mountain sequence.

**4.** Given n jobs starting time n[] and duration d[], print maximum number of jobs that don't overlap between each other.

**5.** Write a C/C++ Program that has a Class Account, Subclass Savings Account, Current Account etc with related hierarchy way.

**6.** 7. Write SQL command from the following tables.

Employee (ename, street, city)
Works (ename, cname, salary, joindate)
Company (cname, city)
Manages (ename, mname)
(a) Find name, street, city who work for First Corporation Bank and earn more than 30000
(b) Find name of all employees, who live in the same city and company for which they work.

**7.** Write the definition of Inheritance, Polymorphism with coding example.

**8.** State diagram of DFA using binary strings having 0 with multiple of 3 on input {0,1}. Also showing regular expression.

> Printed answer: 3-state DFA; regex 1*(01*01*01*)*1* (correct; the trailing 1* is redundant).

