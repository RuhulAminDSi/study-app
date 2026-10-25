# Bit to Exabyte — Super ICT 150++ Questions Book (PDF excerpt): solutions part, descriptive chapters, math and aptitude

- **Source PDF:** `../../bit to exabyte ex question.pdf` (185 PDF pages, produced with iLovePDF; added to `ex-question/` on 2026-10-25)
- **Publisher:** Bit to Exabyte ("Your IT/CSE Job consultant"), by @Mofazzal Hossain Titon; running header "SUPER ICT 150++ QUESTIONS BOOK"
- **Document type:** coaching question book with worked solutions (`suggestion`). The numbered solved questions carry **no exam tags**, so nothing here adds to an exam count.
- **Paper / Post / Date / Marks:** none (Aptitude Q1 prints "15 Marks")
- **Page map of the whole PDF:** `../../PDF-TEXT/bit to exabyte ex question.md`

## Transcription Notes

- The PDF has a text layer, but its Bangla is garbled (legacy font mapping). English was taken from the text layer; every Bangla line below was read from the page rendered as an image.
- **PDF pages 1–8** (question index) repeat the index already transcribed in `../../Standard Pattern/01–05`. **PDF pages 10–61** ("QUESTIONS BANK (PREVIOUS ALL YEARS)", printed 10–61) are the same chapter-by-chapter previous questions already transcribed from photographs in `../15_*.md` to `../71_*.md` (all 688 numbered questions are there: 684 matched one by one, 4 Bangla-only lines checked by count). Neither part is repeated here.
- The solutions part is an **excerpt**: book pages 1–9 (Q01–Q03), 106–139 (Q34–Q45) and 439–519 (end of descriptive Chapter 01, Chapters 02–04, Math, Aptitude). Q03 stops after its table (its sub-questions are on book page 10, not included); Q45's answer and Aptitude Question 02 stop at the end of their pages. The index's Q04–Q33, Q46–Q120 and the 50th / 47th / 46th BCS Computer Science sets are **not in this PDF**.
- Question statements are verbatim (typos kept). Solutions are summarised in one line at most. Coaching remarks in Bangla are kept in brackets as printed.
- Printed slips kept, not corrected: Q02's closing paragraph speaks of "95% … in 2 ns … (7 ns)" although the worked answer uses 90%, 10 ns and gets 20 ns; Math-01's count method prints "10000 × 30 = 300 %" (3000 is meant; the 240 defectives that follow are right); Chapter 3 Problem 1 prints "Consonants = 5" for "CSE 2026 Exam", which has 4 (C, S, x, m).
- Math questions are general mathematics (Bayes' theorem, work, interest, mixtures). They are in the records sidecar under subject `MATH` (by-subject `22_MATH.md`), as the user asked on 2026-10-25. Two carry BCS tags as printed, *[36th BCS]* and *[10th BCS]* (BCS preliminary mathematics, not the IT papers); those two are exam records, the rest are coaching material. MATH-04 has the same data as ICB Securities AP 2026 Q7 (`../../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md`) but is worded differently, so it is not merged with it.

## Content

### Part B — Answers of Super ICT 150++ Questions (book pages 1–9, 106–139)

**01.** Describe the OSI Model with Functions and Protocols of Every Layer. Differentiate Between the OSI Model and TCP/IP Model.

> Coaching remark (book p. 3): [পরীক্ষায় শুধু লেয়ারের নাম লিখে এক বা দুই শব্দে কাজ গুলো লিখবেন। অবশ্যই Protocols এর নাম শিখবেন। এমসিকিউ তে কাজে লাগবে।] Solution: layer-by-layer responsibilities/protocols/devices tables, a protocol table "for mcq", and an OSI vs TCP/IP comparison and layer mapping.

Practice Questions (Q01):

- a) A user accesses a website by typing a URL in a web browser. Explain how the data travels through all seven layers of the OSI Model from the sender to the receiver.
- b) What is the relationship between the OSI Model and the TCP/IP Model?
- c) MAC Address vs IP Address
- d) Physical Address vs Logical Address
- e) TCP vs UDP

**02.** A computer system has a cache access time of 10 ns, a hit rate of 90%, and a main memory access time of 100 ns. Calculate the Average Memory Access Time (AMAT).

> [ এই টাইপের মিনিমাম ৪/৫ টা ম্যাথ প্র্যাক্টিস করবেন। যেকোন ধরনের প্রশ্নের উত্তরের জন্য আমাদের ওয়েবসাইটে ভিজিত করুন। হোমপেইজ এ Request Answer বাটনে ক্লিক করে প্রশ্ন পাঠান অথবা Resource Browse করে প্রশ্নটি খুজে বের করুন] Solution: AMAT = 10 + 0.1 × 100 = 20 ns (also by the probability method).

Practice Questions (Q02):

1. Define the following terms: Cache Hit; Cache Miss; Hit Ratio (Hit Rate); Miss Ratio (Miss Rate); Hit Time; Miss Penalty
2. Explain the following cache mapping techniques with suitable examples: 1. Direct Mapping 2. Fully Associative Mapping 3. Set-Associative Mapping
3. A processor has the following cache hierarchy: L1 Cache: Hit Time = 1 ns, Hit Ratio = 95%; L2 Cache: Hit Time = 5 ns, Hit Ratio = 90%; Main Memory Access Time = 80 ns. Calculate the Average Memory Access Time (AMAT) considering both cache levels.

**03.** Read The following table [ আইটির সকল পরীক্ষায় sql আসবেই। তাই কমন আনকমন সকল sql পড়ার ট্রাই করবেন। আমি যেগুলো দিয়েছি সেগুলো অবশ্যই পড়বেন। Descriptive Part এ আমি বেসিক থেকে Advanced পর্যন্ত sql এর ব্যাখ্যা সহ অধ্যায় দিয়েছি, পড়বেন]

| emp_id | emp_name | salary |
|---|---|---|
| 1 | Rahim | 50000 |
| 2 | Karim | 70000 |
| 3 | Jamil | 90000 |
| 4 | Salma | 70000 |

*(cut off: the sub-questions are on book page 10, which this PDF skips; the book's index lists Q03 as "SQL: highest salary, 2nd highest salary, duplicate rows")*

**34.** What is the difference between synchronous and asynchronous counters? Design a MOD-6 counter using flip-flops (explain logic steps).

> Solution: comparison table; 3 flip-flops (2³ = 8 ≥ 6), count 000–101, asynchronous clear when Q2 = 1 and Q1 = 1.

**35.** Differentiate between Functional Testing and Non-Functional Testing with mentioning testing names. Compare Black Box Testing and White Box Testing with suitable examples.

**36.** Compare P, NP, NP-Complete, and NP-Hard with suitable examples.(গুরুত্বপূর্ণ)

**37.** Define Breadth-First Search (BFS) and Depth-First Search (DFS). State one application of each. Given the graph below, perform BFS and DFS traversal starting from vertex A.

Graph — Vertices: {A, B, C, D, E, F, G}; Edges: (A,B), (A,C), (B,D), (B,E), (C,F), (E,G), (F,G)

**38.** Write a C program that accepts N integers and performs the following operations:

- Display all elements
- Find the maximum and minimum values
- Calculate the sum and average
- Search for an element
- Reverse the array

**39.** Briefly describe topology and classification. What topology is best? Compare Bus, Star, Ring, Mesh, Tree, and Hybrid Topologies with respect to Physical Structure, Cost, Scalability, Reliability, Fault Tolerance, Ease of Maintenance, Performance, and Suitable Applications.

**40.** Write the name of the fastest sorting algorithm. What would be the complexity of an already sorted array if we use Quick Sort? OR Trace the complete execution of Quick Sort for the following array using the first element as the pivot. Show every partition and recursive call. Array: {50, 30, 70, 10, 90, 40, 80, 20}

**41.** Construct a Binary Search Tree (BST) by inserting the following keys in order: 50, 30, 70, 20, 40, 60, 80, 23, 77, 11, 90 Then perform:

- Inorder Traversal
- Preorder Traversal
- Postorder Traversal

> Solution: Inorder 11, 20, 23, 30, 40, 50, 60, 70, 77, 80, 90; Preorder 50, 30, 20, 11, 23, 40, 70, 60, 80, 77, 90; Postorder 11, 23, 20, 40, 30, 60, 77, 90, 80, 70, 50.

Construct the Binary Tree from Given Traversals (unsolved exercises after Q41):

1. Preorder + Inorder — Construct the binary tree from: Preorder: A, B, D, E, C, F, G Inorder: D, B, E, A, F, C, G
2. Postorder + Inorder — Construct the binary tree from: Postorder: 10, 30, 20, 60, 80, 70, 50 Inorder: 10, 20, 30, 50, 60, 70, 80 Then find: 1. Preorder traversal 2. Root node 3. Leaf nodes 4. Height of the tree

**42.** Differentiate between the Waterfall, Agile, and Spiral Model with suitable examples. When and why are the Waterfall and Agile models applicable?

**43.** Write a C program to find GCD of two numbers using functions. Let, num1 = 20; num2 = 15; Result (GCD) = 5.

**44.** Differentiate between Deterministic Finite Automata (DFA) and Nondeterministic Finite Automata (NFA). — OR Differentiate between Regular Language and Context-Free Language (CFL). *(the "OR" part is printed as a heading inside the answer, book p. 138)*

**45.** What is an ER Diagram? Draw an ER Diagram for a Library Management System with the following requirements: [ এই টাইপের মিনিমাম ৪/৫ টা ER প্র্যাক্টিস করবেন ]

- a) A library has many books.
- b) Each book is written by one author.
- c) Members can borrow multiple books.
- d) Each borrowing record stores the issue date and return date.

*(the answer continues past book page 139, which is the last page of this part in the PDF)*

### Part C — Descriptive Chapter 01: SQL (end of chapter, book pages 439–448)

The PDF picks up at the end of the correlated-subquery and CASE-expression examples (tables `Employee(name, deptid, salary, …)` and `Department(deptid, deptname)`).

**Advanced SQL Problem — Department with Highest Average Salary** (solved with `JOIN … GROUP BY … ORDER BY average_salary DESC LIMIT 1`).

**SQL problem using SELF JOIN with table, query, output, and explanation.** Employee Table (empid, name, managerid, salary): 101 Rahim NULL 90000; 102 Karim 101 70000; 103 Hasan 101 65000; 104 Jannat 102 50000; 105 Rafi 102 55000; 106 Nila 103 48000.

- Problem 1: Find the name of every employee along with the name of their manager.
- Problem 2: Find employees whose manager earns more than them.
- Problem 3: Find employees who have the same salary.

**Advanced Practice Problems**

1. Find the employee who earns the third-highest distinct salary.
2. Find all employees whose salary is greater than the average salary of their own department.
3. Find the department having the highest total salary.
4. Find the second-highest-paid employee from every department.
5. Find employees whose salary is greater than every employee in the HR department.
6. Find employees whose salary is greater than at least one employee in the Finance department.
7. Find departments whose average salary is greater than the overall company average salary.
8. Find the employee with the maximum salary without using MAX().
9. Find duplicate employee names.
10. Find the top 3 salaries in each department, including ties.

### Part C — Descriptive Chapter 02: Memory management; logical and physical address (book pages 448–472, mostly Bangla)

Expository chapter: memory-management objectives, contiguous allocation, internal and external fragmentation, paging (pages, frames, page table, address translation, number of pages, page/offset bits, number of frames), TLB, page fault, demand paging, page replacement (FIFO, Optimal, LRU, Second Chance, Clock), thrashing, segmentation, then a Bangla section on logical vs physical address. Worked numericals (statements as printed, Bangla read from the page images):

- Numerical Example — Paging: ধরি: Logical Address = 2500, Page Size = 1000 bytes; Page Table-এ Page 2 → Frame 7 (answer: physical address 7500).
- আরেকটি Exam Numerical: ধরি: Logical Address = 4096, Page Size = 1024 bytes; Page 4 → Frame 10 (answer: 10240).
- Address Bits এবং Page Bits: Logical Address = 32 bits, Page Size = 4 KB (answer: offset 12 bits, page number 20 bits, 2²⁰ = 1,048,576 pages).
- Physical Address-এর Numerical: Physical Address = 32 bits, Page size = 4 KB (answer: 20 frame bits, 2²⁰ frames, 4 GB).
- Effective access time with TLB: EAT = 0.8(10+100) + 0.2(10+200) = 130 ns.

**Question:** What is the difference between logical and physical address? (answered in the book: the MMU translates the CPU-generated logical address to the physical address in main memory)

### Part C — Descriptive Chapter 03: Strings in C (book pages 473–486)

Expository chapter (declaration, '\0', input/output, string.h functions, strlen/strcpy/strcat/strcmp/strchr, ctype functions, manual strlen, copy, reverse, palindrome). Problems as printed:

- **25. Common String Problems in C — Problem 1 — Count Vowels, Consonants, Digits and Spaces:** Write a C program that reads a string and counts: Number of vowels; Number of consonants; Number of digits; Number of spaces. Input: CSE 2026 Exam → Output: Vowels = 3, Consonants = 5, Digits = 4, Spaces = 2.
- **26. Advanced String Problem — Frequency Analysis:** A common interview/exam problem is to calculate the frequency of every character.

### Part C — Descriptive Chapter 04: HTTP and HTTPS (book pages 487–506)

Expository chapter only (requests and responses, methods incl. OPTIONS, status codes, TLS handshake, certificates and CA chain, cookies `Secure`/`HttpOnly`, HTTP/1.0 vs 1.1 vs 2 vs 3/QUIC, caching, proxies, security problems, key points). No questions printed.

### Part C — Math (book pages 507–514; general mathematics)

**MATH-01.** A factory produces 70% of its products from Machine A and 30% from Machine B. The defect rates of Machine A and Machine B are 2% and 8%, respectively. If a randomly selected product is found to be defective, what is the probability that it was produced by Machine B? *(answer: 12/19 ≈ 63.16%)*

**MATH-02.** প্রশ্ন — একটি কারখানায়— মোট পণ্যের 70% তৈরি হয় Machine A দিয়ে। মোট পণ্যের 30% তৈরি হয় Machine B দিয়ে। Machine A-এর defect rate = 2%; Machine B-এর defect rate = 8%। একটি পণ্য randomly selected করা হলো এবং দেখা গেল সেটি defective। প্রশ্ন: সেই defective পণ্যটি Machine B-তে তৈরি হওয়ার সম্ভাবনা কত? *(the same problem, solved by counting 10,000 units)*

**MATH-03.** In a Bangladesh Bank office, there are 6 Assistant Directors (ADs) and 4 Deputy Directors (DDs). Every Assistant Director brings one office bag, whereas only half of the Deputy Directors bring a bag. If one bag is selected at random from all the bags brought to the office, what is the probability that the selected bag belongs to a Deputy Director (DD)? *(answer: 2/8 = 25%)*

**MATH-04.** A bank processes 60% of its online transactions through Server A and 40% through Server B. The transaction failure rates for Server A and Server B are 2% and 6%, respectively. If a randomly selected transaction is found to have failed, what is the probability that it was processed by Server B? *(answer: 2/3 = 66.67%)*

**Practice Math Questions**

1. In a survey of 500 people, it was found that 50 do not read The Observer and 25 do not read Ittefaq. Moreover, 10 people read neither of the two newspapers. If a person is chosen at random, what is the probability that the person reads Ittefaq but does not read The Observer? *[36th BCS]*
2. Among 100 students of class eleven in a college, 30 play football, 40 play cricket, and 20 play both football and cricket. If one person is selected at random, what is the probability that the student plays football given that he plays cricket?
3. Out of 250 examinees in Mathematics and Statistics, 25 failed in Statistics and 45 failed in Mathematics. 15 students failed in both subjects. If one examinee is selected at random, what is the probability that the examinee passed in Statistics but failed in Mathematics?
4. A box contains 5 red, 7 blue, and 3 green balls. If 3 balls are drawn at random one after another from the box, what is the probability that the drawn balls will be red, blue, and green in that order: (a) if the balls are drawn with replacement? (b) if the balls are drawn without replacement?
5. One container contains 2 white and 3 black balls, and another container contains 3 white and 4 black balls. If one ball is drawn from each container, what is the probability that: (a) the balls are of the same color? (b) the balls are of different colors?
6. One vessel contains 5 red and 4 white balls, and another vessel contains 3 red and 6 white balls. If one ball is drawn from each vessel, find the probability that at least one of the two balls is red.
7. A person walked from Gulistan to Gulshan at a speed of 4 km/h. After some time, he returned to Gulistan walking at a speed of 5 km/h. On the return journey, it took him half an hour less. What is the distance from Gulistan to Gulshan? *[10th BCS]*
8. If the length of a rectangle is decreased by 5 meters and the breadth is increased by 3 meters, its area remains unchanged. Again, if the length is increased by 5 meters and the breadth is decreased by 2 meters, its area also remains unchanged. Find the length and breadth of the rectangle. [Class 9–10 Board Book (General Mathematics - 2002 Edition), Chapter 8.7 (Exercise No. 14)]
9. The area of a rectangle is 24 square meters. The length and breadth of another rectangle are 4 meters and 1 meter more than the length and breadth of the first rectangle respectively, and its area is 50 square meters. Determine the length and breadth of the first rectangle. [Class 9–10 Board Book (Higher Mathematics), Chapter 5.5 (Exercise No. 05)]
10. 5 men earn as much as 9 women, and 6 women earn as much as 10 boys. If a boy earns 12.50 taka per day, how much will 10 men earn daily?
11. Working 8 hours a day, 50 people can complete a piece of work in 12 days. Working how many hours a day can 60 people complete the same work in 16 days? [Class 9–10 Board Book (General Mathematics - 1993 Edition), Chapter 2 (Exercise No. 24)]
12. If 8 men working 7 hours a day can complete a piece of work in 12 days, in how many days can 14 boys finish it working 6 hours a day? It is given that the work done by 1 man = work done by 2 boys. [Class 9–10 Board Book (General Mathematics - 1993 Edition), Chapter 2 (Exercise No. 25)]
13. A cistern has three pipes. The cistern is filled by the 1st and 2nd pipes in 12 and 18 minutes respectively, and emptied by the 3rd pipe. When all three pipes are opened together, the cistern is filled in 36 minutes. In how much time will the full cistern be emptied by the 3rd pipe alone? [Class 9–10 Board Book (General Mathematics - 1993 Edition), Chapter 2 (Exercise No. 35)]
14. What will be the difference between the simple interest and compound interest on 5,000 taka for 3 years at an annual interest rate of 10%? [Class 8 Board Book (General Mathematics), Chapter 2.2 (Exercise No. ...)]
15. A certain principal amounts to 28,000 taka with simple interest in 3 years, and 30,000 taka with simple interest in 5 years. (a) Write the formula for finding the principal along with descriptions of the symbols. (b) Determine the rate of interest. (c) How much money needs to be deposited in the bank at the same rate so that the principal with interest amounts to 4,800 taka in 5 years? [Class 8 Board Book (General Mathematics), Chapter 2.1 (Exercise No. ...)]
16. 16. In a 60-liter mixture of milk and water, the concentration of milk is 70%. How much water must be added to reduce the concentration of milk to 40%?
17. A chemist has two acid solutions: Solution A contains 20% acid and Solution B contains 50% acid. How many liters of each solution must be mixed to obtain 60 liters of a solution with a 30% acid concentration?

### Part C — Aptitude Test Questions (book pages 515–519)

**Aptitude qs-01.** Programming (File Handling) – Complete Question (15 Marks)

A text file named students.txt contains student records in the following format:

```text
101,Rahim,CSE,3.75
102,Karim,EEE,3.20
103,Nila,CSE,3.90
104,Rafi,ICT,2.95
105,Ayesha,CSE,3.65
106,Sumaiya,EEE,3.55
.................................
```

Each record contains: Student ID ,Student, Name, Department ,CGPA

Write a C program(any structured) to perform the following tasks:

- a) Read all student records from students.txt.
- b) Display all student information on the screen.
- c) Find all students whose CGPA is greater than 3.50.
- d) Store the selected students in a new file named new.txt.
- e) Calculate and display the average CGPA of all students.
- f) Display the total number of students in the file.

> Solution: a `struct Student` + `fscanf(fp,"%d,%49[^,],%19[^,],%f",…)` loop; sample output Average CGPA = 3.50, Total Students = 6; new.txt holds 101, 103, 105, 106.

**Aptitude Question-02.** Consider the following two tables: Department ( dept_id, dept_name); Employee ( emp_id, name, dept_id, salary, joining_date); a) Input some tuples into the tables,

*(cut off: the PDF ends here, book page 519; the index describes it as "SQL on Department and Employee: inserts, join, department average, above-average employees")*
