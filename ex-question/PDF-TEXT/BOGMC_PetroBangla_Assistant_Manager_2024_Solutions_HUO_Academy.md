# BOGMC (PetroBangla) Assistant Manager (CSE/IT/ICT) 2024: Written Exam Solutions

| | |
|---|---|
| Source PDF | `BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.pdf` |
| Pages | 7 |
| What it is | Worked solutions (by HUO Academy) to the written exam of Bangladesh Oil Gas and Mineral Corporation (BOGMC), PetroBangla |
| Post | Assistant Manager (CSE/IT/ICT) |
| Exam date | 31.05.2024 |
| Exam taker | BUET |
| Extraction | Text layer extracted with PyMuPDF. Table cells were rebuilt as Markdown tables; superscripts that the text layer flattened (2n, 24, 25, n2) are written as 2^n, 2^4, 2^5, n^2; the repeated page footer is shown once per page. Wording is unchanged. |

## Page 1

**Bangladesh Oil Gas and Mineral Corporation (BOGMC) – PetroBangla**

Post: Assistant Manager (CSE/IT/ICT)
Exam Date: 31.05.2024 | Exam Taker: BUET

Written Exam — 2024
Complete Worked Solutions

These are worked solutions to the written questions from the Bangladesh Oil Gas and Mineral Corporation (BOGMC) – PetroBangla Assistant Manager (CSE/IT/ICT) exam, held on 31.05.2024 and conducted by BUET. Each question is reproduced first, followed by a clear, step-by-step solution and a highlighted final answer.

| Q# | Topic | Area |
|---|---|---|
| 1(a) | Output of a Conditional Program | Programming (C) |
| 1(b) | Java Access Specifiers | Object-Oriented Programming |
| 2(a) | Binary Tree from Postorder | Data Structures |
| 2(b) | Quicksort — Sorted Input | Algorithms |
| 3(a) | Departments by Average Salary | Database Management (SQL) |
| 3(b) | Courses with More Than Two Offerings | Database Management (SQL) |
| 4(a) | Traffic Signal FSM — Flip-Flops | Digital Logic Design |
| 4(b) | Types of Software Testing | Software Engineering |
| 5(a) | Shell vs Kernel | Operating Systems |
| 5(b) | Handling RAID Drive Failure | Storage Systems |
| 5(c) | Use of mmWave in IoT | Wireless / IoT |
| 5(d) | Need for an Edge Server | Cloud / IoT |

How to use this guide: attempt each question yourself first, then compare your working against the solution shown.

*Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 1*

## Page 2

### 1(a) Programming · Conditionals

A C program is given. Write the output of the program when the value of a = 85.

```
a = 85
if (a >= 90) print A;
if (a >= 80) print B;
if (a >= 70) print C;
if (a >= 60) print D; else print F;
```

**Solution**

Each if is a separate, independent test, and the else belongs only to the last one. For a = 85:

| Condition | Result | Output |
|---|---|---|
| a >= 90 | False | – |
| a >= 80 | True | B |
| a >= 70 | True | C |
| a >= 60 | True | D |

Because a >= 60 is true, the else branch (print F) is not executed.

**Answer:** B C D (printed as BCD).

### 1(b) Object-Oriented Programming · Java

Java has three access specifiers: public, private and protected. Find which access specifier works with each of the Public, Private and Protected modes. Write Y if it does and N if it does not.

**Solution**

| Access specifier | Public mode | Private mode | Protected mode |
|---|---|---|---|
| public | Y | N | N |
| private | N | Y | N |
| protected | N | N | Y |

Note: in Java, public, private and protected are themselves the access modifiers/specifiers, so each one works only with its own mode.

**Answer:** public → Y for Public only; private → Y for Private only; protected → Y for Protected only.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 2*

## Page 3

### 2(a) Data Structures · Binary Tree

You are given a binary tree with nodes a, b, c, d, e, f, g, h, i. The postorder of the binary tree is: a b f c h d e g i. Draw the binary tree and show the array representation of this binary tree (approximate).

**Solution**

Given nodes: a, b, c, d, e, f, g, h, i
Given postorder: a b f c h d e g i

In a postorder traversal the root is visited last, so i is the root. However, the postorder sequence alone does not say which nodes belong to the left subtree and which to the right.

Important: a binary tree cannot be uniquely constructed from its postorder traversal alone. The inorder traversal (or equivalent additional information) is also required. So, for an exact tree and its array representation, the inorder sequence must be given.

**Answer:** postorder alone gives insufficient information to determine the binary tree uniquely; the inorder sequence is also needed.

### 2(b) Algorithms · Quicksort

In the quicksort algorithm, taking the first element as the pivot, analyze the time complexity when all elements of the array are already sorted.

**Solution**

If the first element is always chosen as the pivot and the array is already sorted, the pivot is always the smallest (or largest) element. Each partition puts all remaining elements on one side, so the partitions are highly unbalanced.

T(n) = T(n − 1) + O(n)
T(n) = n + (n − 1) + … + 2 + 1 = n(n + 1) / 2 = O(n^2)

**Answer:** worst-case time complexity = O(n²).

### 3 Database Management · SQL

Consider the following relational schema (PK = primary key, FK = foreign key). Write SQL queries for parts (a) and (b).

```
Employee   (empno PK, empname, monthlysalary, deptno FK, mgrno FK)
Department (deptno PK, deptname, deptlocation)
Course     (crscode PK, crsdesc, crscategory, crsduration)
Offering   (offbegindate, crscode FK, offeringlocation, empno FK)
```

Attribute names are written in a consistent form; the keys are as given in the question.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 3*

## Page 4

### 3(a) Database Management · GROUP BY / HAVING

Find the departments whose average monthly salary is greater than 1000.

**Solution**

```sql
SELECT   deptno, AVG(monthlysalary) AS avg_salary
FROM     Employee
GROUP BY deptno
HAVING   AVG(monthlysalary) > 1000;
```

**Answer:** the query above lists each department with its average salary, keeping only those above 1000.

### 3(b) Database Management · GROUP BY / HAVING

Find the courses that have more than two offerings.

**Solution**

```sql
SELECT   crscode, COUNT(*) AS offering_count
FROM     Offering
GROUP BY crscode
HAVING   COUNT(*) > 2;
```

Exam point: use WHERE for row-level conditions and HAVING for conditions on grouped/aggregate results.

**Answer:** the query above returns each course code offered more than twice, with its offering count.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 4*

## Page 5

### 4(a) Digital Logic Design · Finite State Machine

A traffic signal cycles from GREEN to YELLOW, YELLOW to RED and RED to GREEN. In each cycle, GREEN is on for 70 seconds, YELLOW for 5 seconds and RED for 75 seconds. The traffic light is implemented as a finite state machine (FSM) whose only input is a clock of 5-second period. What is the minimum number of flip-flops required to implement this FSM?

**Solution**

Clock period = 5 seconds, so each state lasts a whole number of clock cycles.

| Light | On time | Clock cycles (time ÷ 5 s) |
|---|---|---|
| GREEN | 70 s | 70 / 5 = 14 |
| YELLOW | 5 s | 5 / 5 = 1 |
| RED | 75 s | 75 / 5 = 15 |
| Total states | | 14 + 1 + 15 = 30 |

For n flip-flops the FSM can have up to 2^n states, so we need 2^n ≥ 30. Since 2^4 = 16 is too small and 2^5 = 32 ≥ 30, n = 5.

**Answer:** 5 flip-flops.

### 4(b) Software Engineering · Testing

Five software engineering scenarios are given for Unit testing, Regression testing, Smoke testing, Integration testing and Load testing (one is done for you). Write the name of the testing and whether it is functional, non-functional, or both.

**Solution**

| Testing | What it checks | Type |
|---|---|---|
| Unit testing | Each individual function, method or class in isolation. | Functional |
| Integration testing | That separately tested modules work correctly together and exchange data properly. | Functional |
| Smoke testing | A quick check that the most critical functions of a new build work, to decide if deeper testing is worthwhile. | Functional |
| Regression testing | That existing features still work after a code change, fix or new feature. | Functional |
| Load testing | System behaviour and response time under the expected (or heavy) number of users or requests. | Non-functional |

Note: the five scenario descriptions are not part of the question text available here, so the table gives the standard classification of each testing type. Match each scenario to the type it describes.

**Answer:** Unit, Integration, Smoke and Regression testing are functional; Load testing is non-functional.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 5*

## Page 6

### 5(a) Operating Systems · Shell and Kernel

What is the difference between a shell and a kernel?

**Solution**

| Shell | Kernel |
|---|---|
| Interface between the user and the kernel | Core of the operating system |
| Accepts and interprets user commands | Manages CPU, memory, devices and processes |
| Runs as a user-level program | Runs with privileged/system-level access |
| Example: Bash, Zsh | Example: Linux kernel |

**Answer:** the shell is the user-facing command interpreter; the kernel is the privileged core that manages the hardware and processes.

### 5(b) Storage Systems · RAID

How do you recover when a drive fails in a RAID array?

**Solution**

It depends on the RAID level:

- RAID 1: replace the failed drive and rebuild (re-mirror) the data from the surviving drive.
- RAID 5: replace the failed drive; the data is reconstructed using parity and the array is rebuilt.
- RAID 6: can tolerate two drive failures; replace the failed drive(s) and rebuild using dual parity.
- RAID 0: no fault tolerance; a single drive failure causes data loss.

General steps: identify the failed drive → replace it → rebuild/reconstruct the RAID array → verify array health.

**Answer:** replace the failed drive and rebuild from mirror or parity (RAID 1/5/6); RAID 0 cannot recover.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 6*

## Page 7

### 5(c) Wireless / IoT · mmWave

What is the use of mmWaves in IoT?

**Solution**

mmWave (millimetre wave) communication provides very high bandwidth and data rates with low latency. In IoT it is used for:

- High-speed communication
- High-density IoT deployments
- 5G-based IoT
- Radar and sensing applications
- Smart factories and autonomous systems

**Answer:** mmWave gives IoT very high data rates and low latency for dense, real-time, 5G-based and sensing applications.

### 5(d) Cloud / IoT · Edge Computing

What is the need for an edge server?

**Solution**

An edge server processes data near the source/device instead of sending everything to a central cloud server.

Benefits:

- Reduces latency
- Reduces network bandwidth usage
- Enables faster real-time processing
- Improves reliability when cloud connectivity is limited
- Can improve data privacy by processing data locally

Example: in a smart factory, an edge server can analyse sensor data locally and immediately detect a machine fault.

**Answer:** edge servers cut latency and bandwidth use by processing data close to where it is produced.

*HUO Academy — BOGMC (PetroBangla) Assistant Manager Exam — 2024 | Solutions. Provided by HUO Academy (huoacademy.com). Copying, sharing or reselling without permission is prohibited. — Page 7*
