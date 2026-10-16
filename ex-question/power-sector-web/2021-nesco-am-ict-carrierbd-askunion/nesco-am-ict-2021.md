# NESCO Assistant Manager (ICT), 31.12.2021 (BUET): Linux ls/df, JavaScript phone validation, CSS, DHCP/DNS/POP3/ARP, DDoS, SQL above-average department, MVC login, series sum, linked list vs array, binary-tree node bounds, TDM bit rate

- **Sources (three recollections of the same sitting, all saved here):**
  - `nesco-am-ict-2021-drive.pdf` / `.txt` — 2-page PDF by "MD. ATUL KABIR" headed "Northern Electricity Supply Company Limited (NESCO) AM(ICT) Exam: BUET Exam Date: 31/12/2021", public Google Drive file https://drive.google.com/file/d/1MWLg_wDKG0FVSq5O1I0ri5-k3I5co_Oy/view linked from the AskUnion thread
  - `nesco-am-ict-2021-askunion.html.txt` — https://askunion.com/1158 ("NESCO Assistant Manager (ICT) full Question with solution 2021 Exam Taker BUET on 31 December, 2021", posted 2022-01-01; question collection credited to "John Vonn Newman", solution to "Atul Kabir")
  - `nesco-am-ict-2021-carrierbd.html.txt` — https://carrierbd.com/nesco-am-ict-written-exam-solution-2021-12-31/ (Liton's IT Job Solution, posted 2022-01-27; the site is offline, fetched from the Wayback capture of 2023-06-05). This page also lists the recalled non-departmental MCQs.
- **Pages:** PDF 2; web pages 1 each
- **Document type:** exam paper (candidates' recollections; the PDF says "[Something like…]" for Q3(a) and Q5)

## Transcription Notes

- Numbering follows the Drive PDF and AskUnion (5 questions × 8 marks = 40). carrierbd numbers the same items 1–6 (TDM as its own Q6) and puts the C/C++ series as Q3 and SQL/MVC as Q4.
- **Wording differences between sources** (all recollections):
  - 1(b)(i): Drive PDF — 10-digit phone number, no comma/space/punctuation/"+" sign; carrierbd — "11 digits and not start with '+'"; AskUnion — "an 11 digit phone number". The Drive version is used, the others noted here.
  - 1(a)(ii): "disk size, disk space" (Drive) vs "page size, disk space" (AskUnion) vs "disk usage report" (carrierbd).
  - 3(a): carrierbd gives a schema: `Employee(empno(PK), empname, empsal, deptno(FK))`, `Department(deptno(PK), deptname, deptdate, empno(FK))`. The Drive PDF says only "[Table structure given; Something Like…]".
  - 5: only carrierbd recalls the data: "eight signal frequencies 2kHz each. Noise amplitude is not more than 1% of signal amplitude. Sampling frequency should be 25% above the Nyquist rate."
- Non-departmental MCQs (60 marks): carrierbd recalls 27 items plus a second list of 15 with answers (GK, Bangla, English, power-sector facts such as NESCO's districts and transformers). None is IT. Not transcribed.
- Coaching answers are summarised in one line each.
- **Overlap with existing files:** the `NESCO AM(ICT) 2021` key already holds 8 of these items from the Bit to Exabyte book (SQL above-average department, Linux hidden files and human-readable disk usage, CSS function, linked list vs array, binary-tree node bounds, Nyquist/TDM, DHCP). New here: 1(b)(i) JavaScript validation, 2(a)(ii)–(iv) DNS/POP3/ARP, 2(b) DDoS, 3(b) MVC login design, 4(a) series program, the TDM data, the exam date and the taker. Status: **partial** (completes a partly held paper).

## Content

### NESCO Assistant Manager (ICT) 31.12.2021

Northern Electricity Supply Company Limited (NESCO) — Assistant Manager (ICT) — **Exam taker: BUET** (as printed: "Exam: BUET Exam Date: 31/12/2021") — Marks: Non-Technical 60 + Technical 40 (5 × 8). Document type: exam paper (recollection).

Non-IT section (not transcribed): non-departmental MCQ, 60 marks (GK, Bangla, English, power sector).

**1. (a)**
(i) Linux command for showing all files including the hidden files inside home directory.
(ii) Showing disk size, disk space in human readable format.

> Printed answer: `ls -a`; `df -h`.

**(b)**
(i) Write a JavaScript function for validate a phone number of 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number. Simply the validation will remove all non-digits and permit only phone numbers with 10 digits.
(ii) Why use CSS in website.

> Printed answer: a function testing `/^\d{10}$/` with alerts; CSS separates presentation, eases maintenance, loads faster.

**2.**
(i) Protocol used for automatically assigns IP address.
(ii) Protocol used for generating IP address from a URL.
(iii) Protocol used to retrieve emails.
(iv) Protocol used to find MAC address from an IP address.

> Printed answer: DHCP, DNS, POP3, ARP.

**(b)** Explain DDOS Attack.

> Printed answer: a distributed flood of traffic that denies service to legitimate users.

**3. (a)** SQL Query for list the dept name whose average salary is greater than the average salary of the company. [Table structure given; Something Like…]

(carrierbd's recalled schema: `Employee(empno(PK), empname, empsal, deptno(FK))`, `Department(deptno(PK), deptname, deptdate, empno(FK))`.)

**(b)** Design the communication for the user login system for a MVC pattern framework.

**4. (a)** Write a c/c++ program up to series n:

```
1/(2X3) + 2/(3X4) + 3/(4X5) + ⋯
```

> Printed answer: C++ loop `sum += i/((i+1)*(i+2))` for i up to n.

**(b)**
(i) For which data structure operations, Linked List is better than Array? (Insert, Delete, Search).
(ii) Maximum and Minimum no of Nodes for a binary tree of height 7 where root is considered as height 0.

> Printed answer: linked list for insert/delete, array for search; minimum 2^(0+1) − 1 = 1, maximum 2^(7+1) − 1 = 255.
> Answer issue: a binary tree of height 7 needs at least **8** nodes (a chain of 8); 1 node has height 0. The maximum, 255, is correct.

**5.** Finding bit rate from a TDM network using Nyquist Theorem. [Something like…]

(carrierbd's recalled data: "In the TDM system, There are eight signal frequencies 2kHz each. Noise amplitude is not more than 1% of signal amplitude. Sampling frequency should be 25% above the Nyquist rate. Find the bit rate.")

> No answer printed. (Worked out from carrierbd's data: Nyquist rate 4 kHz, +25 % → 5 k samples/s per channel; noise ≤ 1 % needs ≥ 100 levels → 7 bits; 8 × 5000 × 7 = 280 kbps.)
