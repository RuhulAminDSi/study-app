# Digital Logic Design (DLD): past exam questions

Every question from the photographed sheets, books and PDFs in `ex-question/` that belongs to this subject. The same question asked in several exams, or printed in several sources, is shown once. For each question you get **where it was asked** (the exams, with names normalised in `../exam-tags.json`) and **where it was taken from** (each source document, linked to its transcription and image).

- **Distinct questions:** 297 (from 337 records: Written 282, MCQ 45, Study note 3, Worked example 2, Viva 5)
- **Exams it appears in:** 110
- **Corrections to printed answers:** 12
- **How counts work:** "Asked in (N)" counts different government/public-sector recruitment exams (BCS, NTRCA, BPSC, state banks, public bodies) and BUET M.Sc. admission tests. Private-bank exams and compiled viva experiences are listed but not counted. Coaching suggestion sheets and model tests never add to the count.

## Most-asked topics

| # | Topic | Exams | Questions | Viva mentions |
|---|---|---|---|---|
| 1 | [Logic gates & universal gates](#logic-gates--universal-gates) | 33 | 45 | 0 |
| 2 | [Number systems & codes](#number-systems--codes) | 31 | 61 | 1 |
| 3 | [K-map](#k-map) | 31 | 41 | 0 |
| 4 | [Boolean algebra & simplification](#boolean-algebra--simplification) | 28 | 42 | 1 |
| 5 | [Other](#other) | 23 | 42 | 1 |
| 6 | [Combinational circuits](#combinational-circuits) | 23 | 34 | 2 |
| 7 | [Sequential circuits (flip-flops, counters)](#sequential-circuits-flip-flops-counters) | 23 | 32 | 0 |

## Most-asked questions

Ranked by the number of exams, with recent exams (2022 onwards) weighted higher.

1. **What is the difference between Latch and Flip-flop?**  
   Asked in (5): 36th BCS (2016); BB AME 2017; BPSC AP 2021; BWDB AP 2018; SPCBL AME 2021  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics · duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32) — see [G1834](#g1834)
2. **Simplify F(A,B,C,D) = Σm(0,3,5,7,8,10,11,12,13,14,15) using a 4-variable K-map.**  
   Asked in (4): 46th BCS ICT; Combined Bank AME 2026; Combined Bank AME/AE(IT) 2026(Jan); Combined Bank SO(IT) 2026  
   Source: Bank AME 08.05.2026; Bank SO IT 25.07.2026; 46th BCS ICT (2026-05-08) · duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariate (BSCS), Assistant Engineer (IT)/ Assistant Maintenance Engineer – Grade 9 — Exam Date 24/01/2026 — exam taker not printed — time not printed — 16 questions, marks in brackets (total not printed) — pages 1–3 · duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Senior Officer (IT), Grade-9 (Job ID-25104) — 25/07/2026 — Exam taker: not printed — Time 2 hours, Marks 200 (IT: 15×10 = 150) — pages 1–12 — see [G0325](#g0325)
3. **Simplify F(A,B,C,D) = Σm(2,8,9,11,13,15) using a 4-variable K-map.**  
   Asked in (3): BCIC AP 2022; BPDB AE(CSE) 2024; Teletalk AM(IT) 2023  
   Source: BPDM AE(CSE) 10.05.2024; Teletalk AM(IT) 2023 (2024-05-10) · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics — see [G0319](#g0319)
4. **What is a Universal Gate? Prove that the NAND Gate is a Universal Gate. [BSCS AP 26] [DLD]**  
   Asked in (3): Bank (name cut off) AP; Combined Bank AP 2026; SPCBL AME 2021  
   Source: Bank (name cut off, 'B... Ltd') Assistant Programmer Written · duranta.app question bank (coaching compilation of the question paper) — 09 — The Security Printing Corporation (Bangladesh) Ltd — Assistant Maintenance Engineer — 08-12-2021 — Exam taker: CTI — Written, Time 2 Hours, marks not printed — page 14 · duranta.app question bank (coaching compilation of the question paper) — 16 — [BSCS AP 26] — Assistant Programmer — 17.01.2026 — Exam taker: BIBM/CTI — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 56–57 — see [G2980](#g2980)
5. **Simplify F = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map (same function as Q47).**  
   Asked in (2): BPSC AP 2023; BPSC AP 2026  
   Source: BPSC AP (2023-07-19) · BPSC AP (2026-07-19) — see [G0320](#g0320)
6. **Simplify F = A'B'C' + AB'C' + AB'C + A'BC + ABC using a 3-variable K-map (minterms 0,3,4,5,7).**  
   Asked in (2): BPSC NE 2025; JBL SO(ANE) 2020  
   Source: Janata Bank ANE 2020; BPSC Network Engineer 21.05.2025 (2020) — see [G0322](#g0322)
7. **ডিকোডার কী? একটি 3-to-8 লাইন ডিকোডারের সত্যক সারণী ও বর্তনী অংকন করুন।**  
   Asked in (2): 13th NTRCA CSE (2016); 17th NTRCA CSE (2023)  
   Source: duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2) · Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper) — see [G4063](#g4063)
8. **Simplify the following Boolean function using K-map and implement it using NAND gates only: F (A, B, C, D) = (3,5,7,9,11,13,14,15). Show the simplification ste…**  
   Asked in (2): 47th BCS ICT; Combined Bank SO(AME) 2021  
   Source: Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map · Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics · duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off) — see [G0969](#g0969)
9. **Write the decimal, octal and binary form of (E)16. Write the next four numbers in the hexadecimal sequence 6FC, 6FE, __, __, __, __.**  
   Asked in (1): 45th BCS CSE (2024)  
   Source: 45th BCS Written (CSE-971) (2024-01-31) — see [G0011](#g0011)
10. **Flip-flop sub-part (stem on missing printed page 273); visible tail compares clocked J-K and clocked D flip-flops.**  
   Asked in (1): 45th BCS CSE (2024)  
   Source: 45th BCS Written (CSE-971) (2024-01-31) — see [G0012](#g0012)
11. **Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C).**  
   Asked in (1): 45th BCS CSE (2024)  
   Source: 45th BCS Written (CSE-971) (2024-01-31) — see [G0013](#g0013)
12. **Convert 101.101₂ to decimal. (4.525 / 4.535 / 5.515 / 5.625)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0067](#g0067)
13. **Which could be a correct interpretation of 10110011₂? (179 / B3 / -77 / All of the above)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0077](#g0077)
14. **Question text not on these pages; the surviving answer concerns which operations are identical in modulo-2 arithmetic (both reduce to XOR).**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0083](#g0083)
15. **Which gate is known as the "anticoincidence" gate? (NOR / XNOR / XOR / OR)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0097](#g0097)
16. **Which complement method is predominantly used to represent negative numbers in computers? (1's / 2's / 9's / 10's)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0099](#g0099)
17. **Number of states in a 4-bit BCD ripple counter? (4 / 10 / 16 / 5)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0103](#g0103)
18. **A programmable logic array is mainly used for: (custom sequential circuits / memory / custom combinational circuits / fixed logic)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0112](#g0112)
19. **Basic difference between combinational and sequential circuits lies in: (feedback used / logic gates used / inputs / none)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0140](#g0140)
20. **If x, y, z are full-adder inputs, the carry-out expression is: (x̄y + x̄z + yz / x + y + z / xy + xz + yz / xy + xz + yz [printed twice])**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0143](#g0143)

## Coaching "standard pattern" topics (not counted)

Topics the Bit to Exabyte question book lists as its standard pattern for this subject (from `../Standard Pattern/`). They show what the coaching expects, not what was asked.

- 09. K-map simplification (4-variable and 3-variable) — [Standard Pattern/01_super-ict-index-p1-q01-14.md](../Standard%20Pattern/01_super-ict-index-p1-q01-14.md)
- 34. Synchronous vs asynchronous counters; MOD-6 counter — [Standard Pattern/02_super-ict-index-p2-q15-38.md](../Standard%20Pattern/02_super-ict-index-p2-q15-38.md)
- 54. Universal gates; XOR using NAND and NOR — [Standard Pattern/03_super-ict-index-p3-q39-63.md](../Standard%20Pattern/03_super-ict-index-p3-q39-63.md)
- 66. 8-bit 2's complement: 120 + (-45), overflow check — [Standard Pattern/04_super-ict-index-p4-q64-85.md](../Standard%20Pattern/04_super-ict-index-p4-q64-85.md)
- 113. Latch vs flip-flop — [Standard Pattern/06_super-ict-index-p6-q110-120-descriptive.md](../Standard%20Pattern/06_super-ict-index-p6-q110-120-descriptive.md)

## All questions by topic

## Logic gates & universal gates

<a id="g2980"></a>

### What is a Universal Gate? Prove that the NAND Gate is a Universal Gate. [BSCS AP 26] [DLD] <sub>G2980</sub>

*Written*

What is a Universal Gate? Prove that the NAND Gate is a Universal Gate. [BSCS AP 26] [DLD]

- **Asked in (3):** Bank (name cut off) AP; Combined Bank AP 2026; SPCBL AME 2021
- **Source:**
  - Bank (name cut off, 'B... Ltd') Assistant Programmer Written, Q4 (part 1) — [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — 09 — The Security Printing Corporation (Bangladesh) Ltd — Assistant Maintenance Engineer — 08-12-2021 — Exam taker: CTI — Written, Time 2 Hours, marks not printed — page 14, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [BSCS AP 26] — Assistant Programmer — 17.01.2026 — Exam taker: BIBM/CTI — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 56–57, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g0097"></a>

### Which gate is known as the "anticoincidence" gate? (NOR / XNOR / XOR / OR) <sub>G0097</sub>

*MCQ*

Which gate is known as the "anticoincidence" gate? (NOR / XNOR / XOR / OR)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q49 — [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)
- **Printed answer:** (গ) XOR (explanation not on these pages)

<a id="g0140"></a>

### Basic difference between combinational and sequential circuits lies in: (feedback used / … <sub>G0140</sub>

*MCQ*

Basic difference between combinational and sequential circuits lies in: (feedback used / logic gates used / inputs / none)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q94 — [BCS/42_gmsk-am-bandwidth-feedback-circuits.md](../BCS/42_gmsk-am-bandwidth-feedback-circuits.md) · [image](../BCS/42_gmsk-am-bandwidth-feedback-circuits.jpg)
- **Printed answer:** (ক) Feedback (memory) used

<a id="g1388"></a>

### What are universal gates? Implement F = AB + CD + E using NAND gates only. <sub>G1388</sub>

*Written*

What are universal gates? Implement F = AB + CD + E using NAND gates only.

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - 45th BCS Written Technical Cadre (ICT-281) (2024-01-31), Q28(a) — [BCS/06_45th-bcs-physics-logic-questions.md](../BCS/06_45th-bcs-physics-logic-questions.md) · [image](../BCS/06_45th-bcs-physics-logic-questions.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q31 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)
- **Correction:** Answer continues on printed page 292, which is not in this batch. Expected: F = NAND(NAND(A,B), NAND(C,D), NAND(E,E)), which uses 4 NAND gates.

<a id="g1389"></a>

### What is the Universal gate and how is it constructed? <sub>G1389</sub>

*Written*

What is the Universal gate and how is it constructed?

- **Asked in (1):** BRICM AME 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q32 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — BRICM (Bangladesh Reference Institute for Chemical Measurements), Assistant Maintenance Engineer — Written, 24 Feb 2024, Q3 — [duranta/1708869322-bricm-exam-2024/1708869322.md](../duranta/1708869322-bricm-exam-2024/1708869322.md)

<a id="g1390"></a>

### Implement OR gate and AND gate using minimum number of NAND and NOR gate. <sub>G1390</sub>

*Written*

Implement OR gate and AND gate using minimum number of NAND and NOR gate.

- **Asked in (1):** PGCB AE(CSE) 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q33 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1391"></a>

### Why NAND gate is called universal gate? Derive given Boolean expression using only NAND g… <sub>G1391</sub>

*Written*

Why NAND gate is called universal gate? Derive given Boolean expression using only NAND gate. An expression was given consisting of five variables.

- **Asked in (1):** MRA SCO 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q34 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1392"></a>

### Derive given Boolean expression using only NAND gate. $F = A'B'C'D' + AB'CD' + AB'C'D' + … <sub>G1392</sub>

*Written*

Derive given Boolean expression using only NAND gate. $F = A'B'C'D' + AB'CD' + AB'C'D' + A'CD + A'B'CD'$

- **Asked in (1):** MRA SCO 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q35 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1393"></a>

### Explain: NOR and NAND is a Universal gate. <sub>G1393</sub>

*Written*

Explain: NOR and NAND is a Universal gate.

- **Asked in (1):** NPCBL JAM 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q36 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1394"></a>

### Define basic logical operations with examples. (AND, OR, NOT) <sub>G1394</sub>

*Written*

Define basic logical operations with examples. (AND, OR, NOT)

- **Asked in (1):** BPSC ADA 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q37 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g2025"></a>

### মৌলিক লজিক গেইটসমূহ সত্যক সারণীসহ বর্ণনা করুন। <sub>G2025</sub>

*Written*

মৌলিক লজিক গেইটসমূহ সত্যক সারণীসহ বর্ণনা করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৫। (ক) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2027"></a>

### NOR গেইটের সাহায্যে নট, অর এবং অ্যান্ড গেইটের বাস্তবায়ন দেখান। <sub>G2027</sub>

*Written*

NOR গেইটের সাহায্যে নট, অর এবং অ্যান্ড গেইটের বাস্তবায়ন দেখান।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৫ অথবা (ক) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2183"></a>

### F1 = A+B F2 = AB Create the functions using NAND and NOR gate <sub>G2183</sub>

*Written*

F1 = A+B F2 = AB Create the functions using NAND and NOR gate

- **Asked in (1):** PGCB AE(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — PGCB Assistant Engineer (CSE) 17.05.2024, Q8 — [duranta/1716050174-power-grid-company-of-bangladesh-assistant-engineer-cse/1716050174.md](../duranta/1716050174-power-grid-company-of-bangladesh-assistant-engineer-cse/1716050174.md)

<a id="g2409"></a>

### NAND গেট ব্যবহার করে OR গেট তৈরি করার লজিক ডায়াগ্রাম ডায়াগ্রাম অংকন করুন? <sub>G2409</sub>

*Written*

NAND গেট ব্যবহার করে OR গেট তৈরি করার লজিক ডায়াগ্রাম ডায়াগ্রাম অংকন করুন?

- **Asked in (1):** DESCO SAE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DESCO Sub-Assistant Engineer 2022, ৪ — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2551"></a>

### The logic gate that will have a low output when any one of its inputs is High is... ক) NA… <sub>G2551</sub>

*MCQ*

The logic gate that will have a low output when any one of its inputs is High is... ক) NAND gate খ) AND gate গ) NOR gate ঘ) OR gate

- **Asked in (1):** BPSC AP 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী প্রোগ্রামার ২২ — non-cadre Assistant Programmer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 28 MCQs — pages 1–34, Digital Systems / Logic / Circuits Q1 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2679"></a>

### ইউনিভার্সেল গেট বলতে কী বোঝায়? FAB + CD + E সমীকরণের উপর NAND গেট প্রতিস্থাপন করুন। <sub>G2679</sub>

*Written*

ইউনিভার্সেল গেট বলতে কী বোঝায়? FAB + CD + E সমীকরণের উপর NAND গেট প্রতিস্থাপন করুন।

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 5 — ৪৫তম বিসিএস, তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড: ২৮১ — ১ম অংশ (pp. 7–8), ২। ক) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2895"></a>

### X-OR and X-NOR gate truth table diagram <sub>G2895</sub>

*Written*

X-OR and X-NOR gate truth table diagram

- **Asked in (1):** Cadet College Lecturer(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 11. Cadet College, Lecturer (ICT), 10.05.2025; Exam Taker: MIST; time and marks not printed; pp. 16-17 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g3350"></a>

### Implementation the following two Boolean functions using NAND gate only. (a) F = A + (B' … <sub>G3350</sub>

*Written*

Implementation the following two Boolean functions using NAND gate only. (a) F = A + (B' + C) (D' + B * E') (b) F = ((A + B) + CD) E

- **Asked in (1):** NWPGCL JAM(ICT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager (ICT) 26.08.2022, 3 — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3362"></a>

### F = (w,x,y,z)={3,5,7,9,10,13,14,15) Simplify using karun map and design output using gate… <sub>G3362</sub>

*Written*

F = (w,x,y,z)={3,5,7,9,10,13,14,15) Simplify using karun map and design output using gates.

- **Asked in (1):** DUET AP 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DUET Assistant Programmer 01/02/2025, 5 — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3497"></a>

### b. Simplify the following Boolean expression using NAND gates only: (A + B) (C + D) 5 <sub>G3497</sub>

*Written*

b. Simplify the following Boolean expression using NAND gates only: (A + B) (C + D) 5

- **Asked in (1):** Fisheries & Livestock Instructor(CS) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 35 — মৎস্য ও প্রাণীসম্পদ অধিদপ্তরের ইন্সট্রাক্টর কম্পিউটার সায়েন্স — তারিখঃ ২০.০৬.২০২৩ — exam taker not printed — time and total not printed — pages 10–13, Q6(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3520"></a>

### What are the universal gates? Draw AND, OR and NOT gates by using universal gates. <sub>G3520</sub>

*Written*

What are the universal gates? Draw AND, OR and NOT gates by using universal gates.

- **Asked in (1):** Intl Crimes Tribunal Hardware Technician 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 37 — আইন ও বিচার বিভাগের নিয়ন্ত্রণাধীন আন্তর্জাতিক অপরাধ ট্রাইবুনাল, হার্ডওয়্যার টেকনিশিয়ান (১০ম) গ্রেড — ২০২৪ — exam taker not printed — time and total not printed — pages 16–19, Q4 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3642"></a>

### Draw the circuit schematic diagrams to build an Exclusive-OR (XOR) logic function using o… <sub>G3642</sub>

*Written*

Draw the circuit schematic diagrams to build an Exclusive-OR (XOR) logic function using only universal NAND gates.

- **Asked in (1):** Combined Bank Officer(IT) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Officer (IT), Grade-10 (Job ID-25105) — 31/07/2026 — Exam taker: not printed — Part A MCQ 1 hour; Part B Written 2 hours (IT 15 × 10 = 150) — pages 1–16, Q6.5 — [duranta/1785503716-so-it-job-id-25105/1785503716.md](../duranta/1785503716-so-it-job-id-25105/1785503716.md)

<a id="g4157"></a>

### মৌলিক গেইট কী? NAND এবং NOR গেইটকে কেন সার্বজনীন গেইট বলা হয় ব্যাখ্যা করুন। <sub>G4157</sub>

*Written*

মৌলিক গেইট কী? NAND এবং NOR গেইটকে কেন সার্বজনীন গেইট বলা হয় ব্যাখ্যা করুন।

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন লিখিত (স্কুল পর্যায়) — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি), বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) — 12.07.2024, ৪। — [ntrca-written-web/18-313-school-ict/18-313-school-ict.md](../ntrca-written-web/18-313-school-ict/18-313-school-ict.md)

<a id="g4161"></a>

### X = ĀBC + AB̄C + ABC̄ + ABC সমীকরণটির সরলীকৃত মান NAND এবং NOR গেইট দ্বারা বাস্তবায়ন করু… <sub>G4161</sub>

*Written*

X = ĀBC + AB̄C + ABC̄ + ABC সমীকরণটির সরলীকৃত মান NAND এবং NOR গেইট দ্বারা বাস্তবায়ন করুন।

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন লিখিত (স্কুল পর্যায়) — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি), বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) — 12.07.2024, ১০। — [ntrca-written-web/18-313-school-ict/18-313-school-ict.md](../ntrca-written-web/18-313-school-ict/18-313-school-ict.md)

<a id="g4320"></a>

### Which one is a Universal Logic Gate? (a) NAND (b) AND (c) OR (d) NOT <sub>G4320</sub>

*MCQ*

Which one is a Universal Logic Gate? (a) NAND (b) AND (c) OR (d) NOT

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ3 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g0031"></a>

### Draw the circuit for the simplified equation (F = ĀB + ĀC + BC) using basic gates and cal… <sub>G0031</sub>

*Written*

Draw the circuit for the simplified equation (F = ĀB + ĀC + BC) using basic gates and calculate the number of basic gates required.

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - 38th BCS Written (2018), Q1(c) — [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)
- **Printed answer:** Circuit: NOT on A, three 2-input AND gates (ĀB, ĀC, BC) into one 3-input OR.
- **Correction:** The gate count the question asks for is never stated. It is 5 gates: 1 NOT, 3 AND and 1 OR.

<a id="g0171"></a>

### Implement an XOR gate using at most 4 NAND gates. <sub>G0171</sub>

*Written*

Implement an XOR gate using at most 4 NAND gates.

- **Asked in (1):** PGCB AE(CSE) 2021
- **Source:**
  - PGCB Assistant Engineer (CSE) (BUET) (2021-09-30), Q2 — [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)
- **Printed answer:** Standard 4-NAND XOR: N1=NAND(A,B), N2=NAND(A,N1), N3=NAND(B,N1), Q=NAND(N2,N3).

<a id="g1395"></a>

### Implement X-OR gate using NAND gate. Maximum 4 NAND gate are using. <sub>G1395</sub>

*Written*

Implement X-OR gate using NAND gate. Maximum 4 NAND gate are using.

- **Asked in (1):** PGCB AE(CSE) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q38 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1396"></a>

### Universal logic gate কি? 3-input এর একটি Universal logic gate এর Logic Symbol এবং Truth T… <sub>G1396</sub>

*Written*

Universal logic gate কি? 3-input এর একটি Universal logic gate এর Logic Symbol এবং Truth Table দেখান।

- **Asked in (1):** BPSC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q39 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1397"></a>

### What is basic Logic gate? Which gate are called Universal gate and write down advantages … <sub>G1397</sub>

*Written*

What is basic Logic gate? Which gate are called Universal gate and write down advantages of Universal gate?

- **Asked in (1):** SPCBL AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q40 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1398"></a>

### How can you Implement AND, OR and NOT gates using only NAND and NOR gates? <sub>G1398</sub>

*Written*

How can you Implement AND, OR and NOT gates using only NAND and NOR gates?

- **Asked in (1):** BPSC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q41 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1399"></a>

### Make NAND gate using NOR gate. <sub>G1399</sub>

*Written*

Make NAND gate using NOR gate.

- **Asked in (1):** BMA AE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q42 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1400"></a>

### লজিক গেইট কী? মৌলিক লজিক গেইট কয়টি ও কী কী? সত্যক সারণিসহ আলোচনা করুন। <sub>G1400</sub>

*Written*

লজিক গেইট কী? মৌলিক লজিক গেইট কয়টি ও কী কী? সত্যক সারণিসহ আলোচনা করুন।

- **Asked in (1):** BPSC ANE 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q43 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1886"></a>

### Draw the circuit diagram for the simplified equation by using basic gates. Calculate the … <sub>G1886</sub>

*Written*

Draw the circuit diagram for the simplified equation by using basic gates. Calculate the number of basic gates required for implementing the simplified circuit .

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 38th (ICT), Date: 2018 — Time: 3 Hours, Full marks: 200 (pp. 1–18), 4.(c) — [duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md](../duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md)

<a id="g1887"></a>

### Draw the circuit for simplified equation by using only NOR gate . <sub>G1887</sub>

*Written*

Draw the circuit for simplified equation by using only NOR gate .

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 38th (ICT), Date: 2018 — Time: 3 Hours, Full marks: 200 (pp. 1–18), 4.(d) — [duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md](../duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md)

<a id="g2400"></a>

### X-OR gate এর logic এবং Truth Table দেখাও। <sub>G2400</sub>

*Written*

X-OR gate এর logic এবং Truth Table দেখাও।

- **Asked in (1):** BCPCL JI 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BCPCL Junior Instructor 27-12-2019, 10 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g3761"></a>

### F1=A+B and F2=AB. (a) Use the minimum NAND gate for F1 and F2 and (b) Use the minimum NOT… <sub>G3761</sub>

*Written*

F1=A+B and F2=AB. (a) Use the minimum NAND gate for F1 and F2 and (b) Use the minimum NOT gate for F1 and F2.

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q1 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g4090"></a>

### মৌলিক লজিক গেইটসমূহ চিত্রসহ বর্ণনা করুন। <sub>G4090</sub>

*Written*

মৌলিক লজিক গেইটসমূহ চিত্রসহ বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৩ অথবা (ক) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4097"></a>

### NAND গেইটের সার্বজনীনতা প্রমাণ করুন। <sub>G4097</sub>

*Written*

NAND গেইটের সার্বজনীনতা প্রমাণ করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q197 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৪ অথবা (খ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g1981"></a>

### X-NOR gate এর আউটপুটকে NAND gate এর সাহায্যে বাস্তবায়ন করুন। <sub>G1981</sub>

*Written*

X-NOR gate এর আউটপুটকে NAND gate এর সাহায্যে বাস্তবায়ন করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৩। (ক) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2709"></a>

### Explain properties of universal gates. How an XOR gate can be implemented using NAND gate… <sub>G2709</sub>

*Written*

Explain properties of universal gates. How an XOR gate can be implemented using NAND gates? Explain with the appropriate figures.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 2 (b) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2781"></a>

### For determining 2's complement of 4-bit binary numbers, design a combinational logic circ… <sub>G2781</sub>

*Written*

For determining 2's complement of 4-bit binary numbers, design a combinational logic circuit using necessary gates.

- **Asked in (1):** 47th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 8 — 47th BCS, Computer Science, Subject Code: 971, Full Marks 200, Time: 4 Hours (pp. 16–17), 2 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g4062"></a>

### সার্বজনীন গেট কী? NOR গেটের সার্বজনীনতা প্রমাণ করুন। <sub>G4062</sub>

*Written*

সার্বজনীন গেট কী? NOR গেটের সার্বজনীনতা প্রমাণ করুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৩ অথবা (ক) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g0048"></a>

### Which gate is known as the 'anticoincidence' gate? (Stem and options are on a preceding p… <sub>G0048</sub>

*MCQ*

Which gate is known as the 'anticoincidence' gate? (Stem and options are on a preceding page; only the explanation tail is visible.)

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, MCQ (number not shown) — [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)
- **Printed answer:** XOR: the output is HIGH only when the inputs differ.

<a id="g2535"></a>

### How can you implement And and Or gate using CMOS NAND AND NOR gate .?? <sub>G2535</sub>

*Written*

How can you implement And and Or gate using CMOS NAND AND NOR gate .??

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — AHE/ANE Question Set -04 (suggestion), Set-04 Q8 — [duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md](../duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md)

## Number systems & codes

<a id="g0011"></a>

### Write the decimal, octal and binary form of (E)16. Write the next four numbers in the hex… <sub>G0011</sub>

*Written*

Write the decimal, octal and binary form of (E)16. Write the next four numbers in the hexadecimal sequence 6FC, 6FE, __, __, __, __.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - 45th BCS Written (CSE-971) (2024-01-31), Q20(a) — [BCS/04_assembly-number-systems-boolean.md](../BCS/04_assembly-number-systems-boolean.md) · [image](../BCS/04_assembly-number-systems-boolean.jpg)
- **Printed answer:** Printed: (E)16 = 15 decimal = 17 octal = 1111 binary; the sequence part is not answered.
- **Correction:** E = 14, not 15: (E)16 = (14)10 = (16)8 = (1110)2. The sequence (step 2) is not answered; it continues 700, 702, 704, 706.

<a id="g0067"></a>

### Convert 101.101₂ to decimal. (4.525 / 4.535 / 5.515 / 5.625) <sub>G0067</sub>

*MCQ*

Convert 101.101₂ to decimal. (4.525 / 4.535 / 5.515 / 5.625)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q13 — [BCS/61_gantt-chart-rsa-binary-conversion.md](../BCS/61_gantt-chart-rsa-binary-conversion.md) · [image](../BCS/61_gantt-chart-rsa-binary-conversion.jpg); [BCS/59_blockchain-polynomial-suffix-tree.md](../BCS/59_blockchain-polynomial-suffix-tree.md) · [image](../BCS/59_blockchain-polynomial-suffix-tree.jpg)
- **Printed answer:** (ঘ) 5.625

<a id="g0077"></a>

### Which could be a correct interpretation of 10110011₂? (179 / B3 / -77 / All of the above) <sub>G0077</sub>

*MCQ*

Which could be a correct interpretation of 10110011₂? (179 / B3 / -77 / All of the above)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q26 — [BCS/34_maximum-power-transfer-sql-8255-ppi.md](../BCS/34_maximum-power-transfer-sql-8255-ppi.md) · [image](../BCS/34_maximum-power-transfer-sql-8255-ppi.jpg); [BCS/46_zombie-process-and-tdm-fdm.md](../BCS/46_zombie-process-and-tdm-fdm.md) · [image](../BCS/46_zombie-process-and-tdm-fdm.jpg)
- **Printed answer:** (ঘ) All of the above: 179 unsigned, B3 hex, -77 in 2's complement

<a id="g0083"></a>

### Question text not on these pages; the surviving answer concerns which operations are iden… <sub>G0083</sub>

*MCQ*

Question text not on these pages; the surviving answer concerns which operations are identical in modulo-2 arithmetic (both reduce to XOR).

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), MCQ (number not shown, precedes Q36) — [BCS/63_pure-virtual-ai-techniques-rlc.md](../BCS/63_pure-virtual-ai-techniques-rlc.md) · [image](../BCS/63_pure-virtual-ai-techniques-rlc.jpg)
- **Printed answer:** (ঘ) Subtraction & addition — both equal XOR in modulo-2

<a id="g0099"></a>

### Which complement method is predominantly used to represent negative numbers in computers?… <sub>G0099</sub>

*MCQ*

Which complement method is predominantly used to represent negative numbers in computers? (1's / 2's / 9's / 10's)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q53 — [BCS/33_line-voltage-2s-complement-sorting-cpu.md](../BCS/33_line-voltage-2s-complement-sorting-cpu.md) · [image](../BCS/33_line-voltage-2s-complement-sorting-cpu.jpg)
- **Printed answer:** (খ) 2's complement

<a id="g1360"></a>

### Write the decimal, octal and binary form of the number $(E)_{16}$. Write the next four nu… <sub>G1360</sub>

*Written*

Write the decimal, octal and binary form of the number $(E)_{16}$. Write the next four numbers in the following hexadecimal sequences: 6FC, 6FE, \_\_\_\_, \_\_\_\_, \_\_\_\_, \_\_\_\_.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q1 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1361"></a>

### Convert $39.B8_{16}$ into decimal. What is the difference between 1100101001-1100110110? <sub>G1361</sub>

*Written*

Convert $39.B8_{16}$ into decimal. What is the difference between 1100101001-1100110110?

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q2 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1362"></a>

### Write the 2's Complement of $(+55)_{10}$. <sub>G1362</sub>

*Written*

Write the 2's Complement of $(+55)_{10}$.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q3 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1363"></a>

### Convert Decimal to Octal $(423)_{10}$ and Decimal to Hexadecimal $(3000)_{10}$. <sub>G1363</sub>

*Written*

Convert Decimal to Octal $(423)_{10}$ and Decimal to Hexadecimal $(3000)_{10}$.

- **Asked in (1):** BPDB AE(CSE) 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q4 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1364"></a>

### $(CDAB)_{16}$ কে অকটাল এ রূপান্তর কর। <sub>G1364</sub>

*Written*

$(CDAB)_{16}$ কে অকটাল এ রূপান্তর কর।

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q5 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1365"></a>

### $(∂D.AB)_{১৬}$ ও $(৩৩৬.৫১)_৮$ যোগ করুন এবং ফলাফল বাইনারীতে প্রকাশ করুন। (১১০১০১) কোন সংখ্… <sub>G1365</sub>

*Written*

$(∂D.AB)_{১৬}$ ও $(৩৩৬.৫১)_৮$ যোগ করুন এবং ফলাফল বাইনারীতে প্রকাশ করুন। (১১০১০১) কোন সংখ্যা পদ্ধতির সংখ্যা হতে পারে বলে মনে করেন?

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q7 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1369"></a>

### কোড কী? BCD এবং Binary কোডের মধ্যে পার্থক্য লিখুন। তিনভিত্তিক সংখ্যা পদ্ধতি সম্পর্কে ব্যা… <sub>G1369</sub>

*Written*

কোড কী? BCD এবং Binary কোডের মধ্যে পার্থক্য লিখুন। তিনভিত্তিক সংখ্যা পদ্ধতি সম্পর্কে ব্যাখ্যা করুন।

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q11 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন লিখিত (স্কুল পর্যায়) — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি), বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) — 12.07.2024, ৭। — [ntrca-written-web/18-313-school-ict/18-313-school-ict.md](../ntrca-written-web/18-313-school-ict/18-313-school-ict.md)

<a id="g1370"></a>

### Explain parity method for error detection. Write down the bit strings of "Delta" using AS… <sub>G1370</sub>

*Written*

Explain parity method for error detection. Write down the bit strings of "Delta" using ASCII.

- **Asked in (1):** BB AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q12 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1371"></a>

### BCD Addition: $00010011 + 00100110$ <sub>G1371</sub>

*Written*

BCD Addition: $00010011 + 00100110$

- **Asked in (1):** NPCBL JAM 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q13 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1902"></a>

### (E)16 সংখ্যার decimal, octal এবং binary রূপ লিখুন। নিম্নলিখিত Hexadecimal sequence এর পরব… <sub>G1902</sub>

*Written*

(E)16 সংখ্যার decimal, octal এবং binary রূপ লিখুন। নিম্নলিখিত Hexadecimal sequence এর পরবর্তী ৪টি সংখ্যা কী হবে লিখুন। 6FC, 6FE,------, --------, --------, --------

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ২. (ক) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g2021"></a>

### সংখ্যা পদ্ধতির ভিত্তি বলতে কী বোঝায়? পজিশনাল ও নন-পজিশনাল সংখ্যা পদ্ধতি উদাহরণসহ আলোচনা … <sub>G2021</sub>

*Written*

সংখ্যা পদ্ধতির ভিত্তি বলতে কী বোঝায়? পজিশনাল ও নন-পজিশনাল সংখ্যা পদ্ধতি উদাহরণসহ আলোচনা করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৪। (ক) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2022"></a>

### (৫৩.৬২)১০ সংখ্যাকে অক্টালে প্রকাশ করুন। <sub>G2022</sub>

*Written*

(৫৩.৬২)১০ সংখ্যাকে অক্টালে প্রকাশ করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৪ (খ) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2023"></a>

### ২-এর পরিপূরক পদ্ধতি কী? ২-এর পরিপূরক পদ্ধতি ব্যবহার করে (-১৩)১০ থেকে (৯)১০ বিয়োগ করুন। <sub>G2023</sub>

*Written*

২-এর পরিপূরক পদ্ধতি কী? ২-এর পরিপূরক পদ্ধতি ব্যবহার করে (-১৩)১০ থেকে (৯)১০ বিয়োগ করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৪ অথবা (ক) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2024"></a>

### বাইনারি সংখ্যা পদ্ধতি ও বিসিডি কোডের তুলনামূলক আলোচনা করুন। <sub>G2024</sub>

*Written*

বাইনারি সংখ্যা পদ্ধতি ও বিসিডি কোডের তুলনামূলক আলোচনা করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৪ অথবা (খ) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2033"></a>

### কোড কী? ASCII কোডের বৈশিষ্ট্যগুলো লিখুন। <sub>G2033</sub>

*Written*

কোড কী? ASCII কোডের বৈশিষ্ট্যগুলো লিখুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৮। — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2035"></a>

### (BF)১৬ এবং (৫৫)৮ সংখ্যা দুটি যোগ করুন এবং ফলাফল হেক্সাডেসিমেলে প্রকাশ করুন। <sub>G2035</sub>

*Written*

(BF)১৬ এবং (৫৫)৮ সংখ্যা দুটি যোগ করুন এবং ফলাফল হেক্সাডেসিমেলে প্রকাশ করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৯। — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2075"></a>

### (৯০ – ৭৫)১০ সংখ্যাটিকে বাইনারি ও হেক্সাডেসিমেলে রূপান্তর করুন। <sub>G2075</sub>

*Written*

(৯০ – ৭৫)১০ সংখ্যাটিকে বাইনারি ও হেক্সাডেসিমেলে রূপান্তর করুন।

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৬। (ক) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2078"></a>

### ২ এর পরিপূরক পদ্ধতি ব্যবহার করে (১০৮)৮ থেকে (৭৮)১৬ বিয়োগ করুন। <sub>G2078</sub>

*Written*

২ এর পরিপূরক পদ্ধতি ব্যবহার করে (১০৮)৮ থেকে (৭৮)১৬ বিয়োগ করুন।

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৭ (খ) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2147"></a>

### ৫৫ থেকে ২৭ ২'s complement এর মাধ্যমে বিয়োগ (Subtract from 55 to 27 using 2's complement) <sub>G2147</sub>

*Written*

৫৫ থেকে ২৭ ২'s complement এর মাধ্যমে বিয়োগ (Subtract from 55 to 27 using 2's complement)

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 (Set-04), Q2 — [duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md](../duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md)

<a id="g2247"></a>

### You are required to convert a 32 bit digital number to an analogue voltage over the volta… <sub>G2247</sub>

*Written*

You are required to convert a 32 bit digital number to an analogue voltage over the voltage range of 0 to 3.3V with a Digital to Analogue converter (DAC). What is the resolution of the analogue output ?

- **Asked in (1):** Combined Bank Officer(IT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Officer (IT) — 04.10.2024 — organisation not printed (= Combined 2 Bank (10184) Officer IT 2024, BIBM, per `1777536660.md`) — Exam taker: not printed — marks not printed — pages 1–10, Q1 — [duranta/1728262949-officer-it/1728262949.md](../duranta/1728262949-officer-it/1728262949.md)
  - duranta.app question bank (coaching compilation of the question paper) — 12 — Combined 2 Bank (10184) — Officer IT 2024 — 04.10.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT: 50 + Math+GK: 20); Written: Subjective (150) + Math (20) + Focus (10) + B/E+E/B — pages 47–49, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2552"></a>

### Which of the following numbers is the next sequence number of 77(8) in Octal? ক) 88 খ) 80… <sub>G2552</sub>

*MCQ*

Which of the following numbers is the next sequence number of 77(8) in Octal? ক) 88 খ) 80 গ) 100 ঘ) 99

- **Asked in (1):** BPSC AME 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী রক্ষণাবেক্ষণ প্রকৌশলী ২২ — non-cadre Assistant Maintenance Engineer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 17 MCQs — pages 8–34, Digital Systems / Logic / Circuits Q2 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2886"></a>

### Convert decimal (1741) to hexadecimal? <sub>G2886</sub>

*Written*

Convert decimal (1741) to hexadecimal?

- **Asked in (1):** DESCO AE(IT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 9. Dhaka Electric Supply Company Ltd. (DESCO)-2022, Assistant Engineer-IT, 10-09-2022; exam taker not printed; Marks: 100; Time: 2.00 Hours; pp. 13-15 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g2902"></a>

### Conversion. i.decimal number 9 base number, ii.octal number to decimal number. ii.octal n… <sub>G2902</sub>

*Written*

Conversion. i.decimal number 9 base number, ii.octal number to decimal number. ii.octal number to hexadecimal number.

- **Asked in (1):** Cadet College Lecturer(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 11. Cadet College, Lecturer (ICT), 10.05.2025; Exam Taker: MIST; time and marks not printed; pp. 16-17 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g3563"></a>

### (b) Represent - 25 in 8 bit binary using 2's complement. <sub>G3563</sub>

*Written*

(b) Represent - 25 in 8 bit binary using 2's complement.

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q1(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3965"></a>

### In modulo-2 operation, ____ give the same result. (ক) Addition & division (খ) Addition & … <sub>G3965</sub>

*MCQ*

In modulo-2 operation, ____ give the same result. (ক) Addition & division (খ) Addition & multiplication (গ) Multiplication & division (ঘ) Subtraction & addition

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — ICT (281), question paper 2 (Q101–200), 10.10.2025, Q111 — [bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md](../bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md)

<a id="g4158"></a>

### ২-এর পরিপূরক পদ্ধতি কী? ২-এর পরিপূরক পদ্ধতি ব্যবহার করে $(-১৫)_{১০}$ থেকে $(+২১)_{১০}$ বি… <sub>G4158</sub>

*Written*

২-এর পরিপূরক পদ্ধতি কী? ২-এর পরিপূরক পদ্ধতি ব্যবহার করে $(-১৫)_{১০}$ থেকে $(+২১)_{১০}$ বিয়োগ করুন।

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q6 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন লিখিত (স্কুল পর্যায়) — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি), বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) — 12.07.2024, ৫। — [ntrca-written-web/18-313-school-ict/18-313-school-ict.md](../ntrca-written-web/18-313-school-ict/18-313-school-ict.md)

<a id="g4160"></a>

### (৯D·AB৬)১৬ ও (৩০৬·৫১)১০ যোগ করুন এবং ফলাফল বাইনারীতে প্রকাশ করুন। (১১০১০১) কোন সংখ্যা পদ্… <sub>G4160</sub>

*Written*

(৯D·AB৬)১৬ ও (৩০৬·৫১)১০ যোগ করুন এবং ফলাফল বাইনারীতে প্রকাশ করুন। (১১০১০১) কোন সংখ্যা পদ্ধতির সংখ্যা হতে পারে বলে মনে করেন?

- **Asked in (1):** 18th NTRCA School (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন লিখিত (স্কুল পর্যায়) — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি), বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) — 12.07.2024, ৮। — [ntrca-written-web/18-313-school-ict/18-313-school-ict.md](../ntrca-written-web/18-313-school-ict/18-313-school-ict.md)

<a id="g4165"></a>

### K-ম্যাপ ব্যবহার করে সরল করুন: Y = ABCD + AB̄CD + ĀBD + CD̄ + ĀB̄CD <sub>G4165</sub>

*Written*

K-ম্যাপ ব্যবহার করে সরল করুন: Y = ABCD + AB̄CD + ĀBD + CD̄ + ĀB̄CD

- **Asked in (1):** 18th NTRCA School-2 (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন পরীক্ষা (স্কুল সমপর্যায়-২) — ট্রেড ইন্সট্রাক্টর, কম্পিউটার ও তথ্যপ্রযুক্তি (লিখিত) — 12.07.2024, ৩। — [ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md](../ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md)

<a id="g4324"></a>

### What is the 2’s complement of (67)₁₀ (a) 01000011 (b) 01000011 <sub>G4324</sub>

*MCQ*

What is the 2’s complement of (67)₁₀ (a) 01000011 (b) 01000011

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs, MCQ7 — [bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md](../bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md)

<a id="g4598"></a>

### বিসিডি কোডে বিট সংখ্যা কত? (a) ১ (b) ২ (c) ৮ (d) ৪ <sub>G4598</sub>

*MCQ*

বিসিডি কোডে বিট সংখ্যা কত? (a) ১ (b) ২ (c) ৮ (d) ৪

- **Asked in (1):** BDCCL AM(Transmission) 2022
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BDCCL Assistant Manager (Transmission) 2022, MCQ11 — [telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md](../telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md)

<a id="g0046"></a>

### Why is binary logic used for digital systems? <sub>G0046</sub>

*Written*

Why is binary logic used for digital systems?

- **Asked in (1):** BWDB AP 2018
- **Source:**
  - Bangladesh Water Development Board Assistant Programmer Written (2018), Q1 — [BCS/18_database-security-osi-binary-logic.md](../BCS/18_database-security-osi-binary-logic.md) · [image](../BCS/18_database-security-osi-binary-logic.jpg)
- **Printed answer:** Transistors have two states (on/off), so 0/1 maps directly onto the hardware.

<a id="g1366"></a>

### Convert the following Octal number into Decimal and Hexadecimal: $(651)_8$ <sub>G1366</sub>

*Written*

Convert the following Octal number into Decimal and Hexadecimal: $(651)_8$

- **Asked in (1):** BPSC AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q8 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1367"></a>

### $(1AC)_{16} = (?)_{10}$ and $(?)_{10} = (?)_{16}$ <sub>G1367</sub>

*Written*

$(1AC)_{16} = (?)_{10}$ and $(?)_{10} = (?)_{16}$

- **Asked in (1):** DPDC JAM(ICT) 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q9 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1372"></a>

### What is the Excess-3 code of 1010? <sub>G1372</sub>

*Written*

What is the Excess-3 code of 1010?

- **Asked in (1):** DPDC JAM(ICT) 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q14 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g1384"></a>

### Simply the following function: $ABCD + \bar{A}BD + A\bar{B}\bar{C}D$ <sub>G1384</sub>

*Written*

Simply the following function: $ABCD + \bar{A}BD + A\bar{B}\bar{C}D$

- **Asked in (1):** DPDC JAM(ICT) 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q27 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g2405"></a>

### (539)10 Decimal Number কে Hexa-Decimal এবং Octal Number এ রূপান্তর কর। <sub>G2405</sub>

*Written*

(539)10 Decimal Number কে Hexa-Decimal এবং Octal Number এ রূপান্তর কর।

- **Asked in (1):** BCPCL JI 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BCPCL Junior Instructor 27-12-2019, 15 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2555"></a>

### 10000000 এর 2's Complement মান কত (8-bit)? A. 0 B. 128 C. -128 D. 256 <sub>G2555</sub>

*MCQ*

10000000 এর 2's Complement মান কত (8-bit)? A. 0 B. 128 C. -128 D. 256

- **Asked in (1):** DoICT AP 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT AP 2020 — Department of ICT, Assistant Programmer, 2020 — exam taker not printed — MCQ, marks not printed — 10 MCQs — pages 9–33, Digital Systems / Logic / Circuits Q5 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2917"></a>

### There are different number systems. (i) Convert (10010.101)2=(?)10 (ii) Convert (543)10 =… <sub>G2917</sub>

*Written*

There are different number systems. (i) Convert (10010.101)2=(?)10 (ii) Convert (543)10 =(?)16

- **Asked in (1):** Combined Bank Officer(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 01 — BSCS Recruitment 2020, Combine 2 Bank (SB & JB) — Officer IT (Written) — date not printed — Exam taker: not printed — Time 2 Hours, Full Mark 200 — pages 1–3, Q5(M) — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3896"></a>

### If the message bit is 111 then the Even-parity bit will be: (a) 1111 (b) 1 (c) 0 (d) None <sub>G3896</sub>

*MCQ*

If the message bit is 111 then the Even-parity bit will be: (a) 1111 (b) 1 (c) 0 (d) None

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q9 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3899"></a>

### Which of the following format is usually used to store data? (a) Decimal (b) BCD (c) Octa… <sub>G3899</sub>

*MCQ*

Which of the following format is usually used to store data? (a) Decimal (b) BCD (c) Octal (d) Hexadecimal

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q12 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3918"></a>

### 2’s complement of 00000000 is: (a) 11111111 (b) 10000000 (c) 00000000 (d) 00000001 <sub>G3918</sub>

*MCQ*

2’s complement of 00000000 is: (a) 11111111 (b) 10000000 (c) 00000000 (d) 00000001

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q31 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g4092"></a>

### কোড কী? BCD কোড, ASCII কোড, EBCDIC কোড এর বর্ণনা করুন। <sub>G4092</sub>

*Written*

কোড কী? BCD কোড, ASCII কোড, EBCDIC কোড এর বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৩ অথবা (গ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4105"></a>

### ২-এর পরিপূরক পদ্ধতি ব্যবহার করে (৩২)১০ থেকে (১৮)১০ বিয়োগ করুন। <sub>G4105</sub>

*Written*

২-এর পরিপূরক পদ্ধতি ব্যবহার করে (৩২)১০ থেকে (১৮)১০ বিয়োগ করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৬ — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4123"></a>

### প্যারিটি বিট কী? (90.625)10 কে বাইনারি এবং (AB.C)16 কে দশমিক সংখ্যায় প্রকাশ করুন। <sub>G4123</sub>

*Written*

প্যারিটি বিট কী? (90.625)10 কে বাইনারি এবং (AB.C)16 কে দশমিক সংখ্যায় প্রকাশ করুন।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ২ অথবা (ক) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4124"></a>

### (3D.4C)16 এবং (514.6)8 কে বাইনারি সংখ্যায় পরিবর্তন করে যোগ করুন এবং যোগফল হেক্সাডেসিমালে… <sub>G4124</sub>

*Written*

(3D.4C)16 এবং (514.6)8 কে বাইনারি সংখ্যায় পরিবর্তন করে যোগ করুন এবং যোগফল হেক্সাডেসিমালে প্রকাশ করুন।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ২ অথবা (খ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4279"></a>

### The ASCII code of ‘C’ is? <sub>G4279</sub>

*MCQ*

The ASCII code of ‘C’ is?

- **Asked in (1):** BB AD(General) 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (General) — Preliminary MCQ, ICT items (Q71–80 of the "GK & ICT" section) — 12 November 2021 — Exam taker: Faculty of Business Studies, DU (as stated by jobstestbd; unverified) — 100 MCQ, 1 hour, MCQ76 — [bank-written-web/2021-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2021-ict.md](../bank-written-web/2021-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2021-ict.md)

<a id="g4500"></a>

### 'b'এর ASCII Value কত? 66 / 98 / 3000 / 1 Printed answer: 98 <sub>G4500</sub>

*MCQ*

'b'এর ASCII Value কত? 66 / 98 / 3000 / 1 Printed answer: 98

- **Asked in (1):** DoICT AP 2020
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DoICT (Department of ICT), Assistant Programmer — MCQ (screening), 24.12.2021 per listing (26-12-2021 per URL), 2020 circular — Exam taker: not shown — 100 MCQ — Computer & ICT items 1–15 (site order), SA-ICT 3 — [ministry-ap-web/2021-doict-ap-mcq/doict-ap-2020-mcq.md](../ministry-ap-web/2021-doict-ap-mcq/doict-ap-2020-mcq.md)

<a id="g1368"></a>

### Convert $(2345)_{10}$ to hexadecimal and $(ABCD)_{16}$ to octal number. <sub>G1368</sub>

*Written*

Convert $(2345)_{10}$ to hexadecimal and $(ABCD)_{16}$ to octal number.

- **Asked in (1):** ICT Ministry AP 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q10 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg)

<a id="g2708"></a>

### Convert the numbers (16A.6)₁₆ and (72.3)₈ in binary format and show their summation in He… <sub>G2708</sub>

*Written*

Convert the numbers (16A.6)₁₆ and (72.3)₈ in binary format and show their summation in Hexadecimal format.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 2 (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2810"></a>

### Convert decimal number 250.5 to base 3 and base 7. Round the answers keeping three digits… <sub>G2810</sub>

*Written*

Convert decimal number 250.5 to base 3 and base 7. Round the answers keeping three digits after point.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 1 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g4671"></a>

### 5. Binary এবং decimal কী? 3 কে বাইনারিতে কত বলবেন? <sub>G4671</sub>

*Viva*

5. Binary এবং decimal কী? 3 কে বাইনারিতে কত বলবেন?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J1 Combined Bank Officer (IT) 2026, Job ID 10229 (viva), A1-V5 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g0054"></a>

### In a modulo-2 operation, ____ give the same result: (a) addition & division (b) addition … <sub>G0054</sub>

*MCQ*

In a modulo-2 operation, ____ give the same result: (a) addition & division (b) addition & multiplication (c) multiplication & division (d) subtraction & addition.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, MCQ 35 — [BCS/32_8086-reset-thrashing-mov-modulo-2.md](../BCS/32_8086-reset-thrashing-mov-modulo-2.md) · [image](../BCS/32_8086-reset-thrashing-mov-modulo-2.jpg)
- **Correction:** The answer is not printed on this page. The correct answer is (d) subtraction & addition, since both are XOR.

<a id="g1720"></a>

### ২-এর পরিপূরক (2's Complement) এর নিয়ম লিখুন এবং ২-এর পরিপূরক ব্যবহার করে বাইনারি বিয়োগ … <sub>G1720</sub>

*Written*

২-এর পরিপূরক (2's Complement) এর নিয়ম লিখুন এবং ২-এর পরিপূরক ব্যবহার করে বাইনারি বিয়োগ সম্পন্ন করার ধাপ দেখান।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q199 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

<a id="g1721"></a>

### সংখ্যা পদ্ধতির রূপান্তর (Hexadecimal, Binary, Octal, Decimal) এবং হেক্সাডেসিমাল পদ্ধতিতে … <sub>G1721</sub>

*Written*

সংখ্যা পদ্ধতির রূপান্তর (Hexadecimal, Binary, Octal, Decimal) এবং হেক্সাডেসিমাল পদ্ধতিতে যোগ ও বিয়োগের নিয়ম লিখুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q200 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

<a id="g3437"></a>

### Design a circuit that counts the number of 1's presence in 3-inputs A, B and C. Its outpu… <sub>G3437</sub>

*Written*

Design a circuit that counts the number of 1's presence in 3-inputs A, B and C. Its output is a two-bit number X1 X0 representing that count in binary. Assume active-High logic. (c) Draw the corresponding logic diagram for the circuit.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q9(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q9(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)
  - duranta.app question bank (coaching compilation of the question paper) — Unidentified paper (banner on book page 1-110, not in this PDF) — technical part — exam taker, date, marks not shown — pages 1–2, Q9(c) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4974"></a>

### What is the largest decimal value that can be represented by 12 bits? ক. 1024 খ. 2048 গ. … <sub>G4974</sub>

*MCQ*

What is the largest decimal value that can be represented by 12 bits? ক. 1024 খ. 2048 গ. 2095 ঘ. 4096

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — Govt Job Care BD — BPSc Assistant Programmer Final Model Test (suggestion), Q96 — [model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md](../model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md)

## K-map

<a id="g0325"></a>

### Simplify F(A,B,C,D) = Σm(0,3,5,7,8,10,11,12,13,14,15) using a 4-variable K-map. <sub>G0325</sub>

*Written*

Simplify F(A,B,C,D) = Σm(0,3,5,7,8,10,11,12,13,14,15) using a 4-variable K-map.

- **Asked in (4):** 46th BCS ICT; Combined Bank AME 2026; Combined Bank AME/AE(IT) 2026(Jan); Combined Bank SO(IT) 2026
- **Source:**
  - Bank AME 08.05.2026; Bank SO IT 25.07.2026; 46th BCS ICT (2026-05-08), Q36 — [DLD/01_kmap-solution-q36.md](../DLD/01_kmap-solution-q36.md) · [image](../DLD/01_kmap-solution-q36.jpg); [DLD/11_bpsc-ap-2026-kmap.md](../DLD/11_bpsc-ap-2026-kmap.md) · [image](../DLD/11_bpsc-ap-2026-kmap.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariate (BSCS), Assistant Engineer (IT)/ Assistant Maintenance Engineer – Grade 9 — Exam Date 24/01/2026 — exam taker not printed — time not printed — 16 questions, marks in brackets (total not printed) — pages 1–3, Q6 — [duranta/1769271736-banker-s-selection-committee-secretariate-bscs-assistant-eng/1769271736.md](../duranta/1769271736-banker-s-selection-committee-secretariate-bscs-assistant-eng/1769271736.md)
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Senior Officer (IT), Grade-9 (Job ID-25104) — 25/07/2026 — Exam taker: not printed — Time 2 hours, Marks 200 (IT: 15×10 = 150) — pages 1–12, Q13 — [duranta/1785328629-so-it-job-id-25104/1785328629.md](../duranta/1785328629-so-it-job-id-25104/1785328629.md)
- **Printed answer:** F = AD' + CD + BD + B'C'D'

<a id="g0319"></a>

### Simplify F(A,B,C,D) = Σm(2,8,9,11,13,15) using a 4-variable K-map. <sub>G0319</sub>

*Written*

Simplify F(A,B,C,D) = Σm(2,8,9,11,13,15) using a 4-variable K-map.

- **Asked in (3):** BCIC AP 2022; BPDB AE(CSE) 2024; Teletalk AM(IT) 2023
- **Source:**
  - BPDM AE(CSE) 10.05.2024; Teletalk AM(IT) 2023 (2024-05-10), Q36 — [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg); [DLD/04_q47-bpsc-ap-kmap.md](../DLD/04_q47-bpsc-ap-kmap.md) · [image](../DLD/04_q47-bpsc-ap-kmap.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q1 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q2 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q4 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q16 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q17 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q19 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)
- **Printed answer:** F = AD + AB'C' + A'B'CD'

<a id="g0320"></a>

### Simplify F = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map (same function as Q47). <sub>G0320</sub>

*Written*

Simplify F = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map (same function as Q47).

- **Asked in (2):** BPSC AP 2023; BPSC AP 2026
- **Source:**
  - BPSC AP (2023-07-19), Q47 — [DLD/04_q47-bpsc-ap-kmap.md](../DLD/04_q47-bpsc-ap-kmap.md) · [image](../DLD/04_q47-bpsc-ap-kmap.jpg)
  - BPSC AP (2026-07-19), Unnumbered (BPSC AP 2026) — [DLD/11_bpsc-ap-2026-kmap.md](../DLD/11_bpsc-ap-2026-kmap.md) · [image](../DLD/11_bpsc-ap-2026-kmap.jpg); [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)
- **Printed answer:** F = BC + B'D'

<a id="g0322"></a>

### Simplify F = A'B'C' + AB'C' + AB'C + A'BC + ABC using a 3-variable K-map (minterms 0,3,4,… <sub>G0322</sub>

*Written*

Simplify F = A'B'C' + AB'C' + AB'C + A'BC + ABC using a 3-variable K-map (minterms 0,3,4,5,7).

- **Asked in (2):** BPSC NE 2025; JBL SO(ANE) 2020
- **Source:**
  - Janata Bank ANE 2020; BPSC Network Engineer 21.05.2025 (2020), Q73 — [DLD/10_q53-q73-kmap.md](../DLD/10_q53-q73-kmap.md) · [image](../DLD/10_q53-q73-kmap.jpg)
- **Printed answer:** F = AC + BC + B'C'

<a id="g0969"></a>

### Simplify the following Boolean function using K-map and implement it using NAND gates onl… <sub>G0969</sub>

*Written*

Simplify the following Boolean function using K-map and implement it using NAND gates only: F (A, B, C, D) = (3,5,7,9,11,13,14,15). Show the simplification steps and draw the final logic diagram.

- **Asked in (2):** 47th BCS ICT; Combined Bank SO(AME) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q5 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q20 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 3 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0321"></a>

### Simplify F(A,B,C,D) = Σm(0,2,3,7,8,10) using a 4-variable K-map. <sub>G0321</sub>

*Written*

Simplify F(A,B,C,D) = Σm(0,2,3,7,8,10) using a 4-variable K-map.

- **Asked in (1):** MRA SCO 2023
- **Source:**
  - MRA SCO (2023-02-24), Q53 — [DLD/10_q53-q73-kmap.md](../DLD/10_q53-q73-kmap.md) · [image](../DLD/10_q53-q73-kmap.jpg)
- **Printed answer:** F = A'CD + B'D'

<a id="g0823"></a>

### Minimize the given function in minimal SOP form using a K-map (function not printed). <sub>G0823</sub>

*Written*

Minimize the given function in minimal SOP form using a K-map (function not printed).

- **Asked in (1):** Teletalk AM(IT) 2023
- **Source:**
  - Teletalk Assistant Manager (IT) (2023), Q1 — [PETROBANGLA/05_stack-ops-and-teletalk-kmap.md](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.md) · [image](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.jpg)
- **Printed answer:** Cross-reference only: [See BPSC (Ministry of Home Affairs), Assistant Database Administrator, Exam: 2022 (CSE)]

<a id="g0830"></a>

### Simplify the given expression using a K-map and draw the logic circuit (expression not pr… <sub>G0830</sub>

*Written*

Simplify the given expression using a K-map and draw the logic circuit (expression not printed).

- **Asked in (1):** Petrobangla AM(IT) 2022
- **Source:**
  - Petrobangla Assistant Manager (IT) (BUET) (2022-09-16), Q5 — [PETROBANGLA/08_bellman-ford-negative-cycle.md](../PETROBANGLA/08_bellman-ford-negative-cycle.md) · [image](../PETROBANGLA/08_bellman-ford-negative-cycle.jpg)
- **Printed answer:** Cross-reference only: [See Janata Bank Ltd, SO (Assistant Network Engineer), Written Exam: 2020]

<a id="g0968"></a>

### Simplify the following Boolean function using K-map: $Y = ABCD + AB\overline{CD} + \overl… <sub>G0968</sub>

*Written*

Simplify the following Boolean function using K-map: $Y = ABCD + AB\overline{CD} + \overline{A}BC\overline{D} + \overline{A}BCD + ABCD + A\overline{B}C\overline{D} + ABCD + ABCD$

- **Asked in (1):** BPSC AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q3 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q18 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)

<a id="g0971"></a>

### Simplify $F(A,B,C,D) = ACD + AB + \overline{D} + AC\overline{D}$ using K-map and draw the… <sub>G0971</sub>

*Written*

Simplify $F(A,B,C,D) = ACD + AB + \overline{D} + AC\overline{D}$ using K-map and draw the logic circuits.

- **Asked in (1):** BPSC ADA 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q7 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q22 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)

<a id="g2170"></a>

### Sum of min terms given F(A,B,C,D) = ∑(0,2,5,7,8,9,10,13,15) Now find simplest form using … <sub>G2170</sub>

*Written*

Sum of min terms given F(A,B,C,D) = ∑(0,2,5,7,8,9,10,13,15) Now find simplest form using Karnaugh Map

- **Asked in (1):** BRPL AM(ICT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BRPL Assistant Manager (ICT) 29.03.2024, Q6 — [duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md](../duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md)

<a id="g3071"></a>

### Minimize the boolean expression using the K-map, F-Y-A'B'CA'BC+A'BC'D + ABC'D + ABCD' + A… <sub>G3071</sub>

*Written*

Minimize the boolean expression using the K-map, F-Y-A'B'CA'BC+A'BC'D + ABC'D + ABCD' + AB'C'D'

- **Asked in (1):** Combined Bank SO(IT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 15 — [Senior Officer (IT)-SBL, BDBL 2022 CTI] — 31.01.2022 — Exam taker: CTI — "5*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks" (as printed, IT figure cut) — pages 23–25, Q12 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3452"></a>

### Minimize the following function using K-Map: 5 F (A, B, C, D) = Σ (0, 1, 7, 8, 13,15) <sub>G3452</sub>

*Written*

Minimize the following function using K-Map: 5 F (A, B, C, D) = Σ (0, 1, 7, 8, 13,15)

- **Asked in (1):** Parliament Secretariat SAE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 34 — বাংলাদেশ জাতীয় সংসদ সচিবালয়ের উপসহকারী মেইনটেন্যান্স ইঞ্জিনিয়ার — পরীক্ষার তারিখঃ ১৭.০৭.২০২৩ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 5–10, CS Q1 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3551"></a>

### b) Use the Karnaugh Map to simplify the following function. f(A,B,C)=A'B'C'+A'B'C+A'BC'+A… <sub>G3551</sub>

*Written*

b) Use the Karnaugh Map to simplify the following function. f(A,B,C)=A'B'C'+A'B'C+A'BC'+A'BC+ABC+ABC

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-খ Q2(b) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3562"></a>

### (a) Consider the following logic circuit. [Figure: logic circuit, inputs A, B, C; interme… <sub>G3562</sub>

*Written*

(a) Consider the following logic circuit. [Figure: logic circuit, inputs A, B, C; intermediate outputs T1–T4; outputs F1 and F2. Visible gates: two NOT gates feeding two AND gates (T1, T2), an OR gate (T3), an XOR-type gate (T4), an OR gate driving F1 and a further gate driving F2. Wiring not reliably legible on the scan.] (i) Derive the boolean expression algebraically for T, through T4. Derive F₁ and F₂ as function the three inputs A, B and C. (ii) Use K-map to simplify these expressions F₁ and F2, and show that they are equivalent the ones obtained in (i).

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q1(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4620"></a>

### Minimize the following function in SOP minimal form using K-map. (function not given on t… <sub>G4620</sub>

*Written*

Minimize the following function in SOP minimal form using K-map. (function not given on this source: "Question not fully collected")

- **Asked in (1):** Teletalk AM(IT) 2023
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Teletalk Assistant Manager (IT) 2023, Q1 — [telecom-web/2023-teletalk-am-it-jobqns/teletalk-am-it-2023.md](../telecom-web/2023-teletalk-am-it-jobqns/teletalk-am-it-2023.md)

<a id="g4903"></a>

### In a 3-input logic circuit (inputs A, B, and C), the output F is 1 if at least two or all… <sub>G4903</sub>

*Written*

In a 3-input logic circuit (inputs A, B, and C), the output F is 1 if at least two or all three inputs are 1. (a) Construct the truth table. (b) Use the truth table to find the POS (Product of Sums) expression using K-map simplification.

- **Asked in (1):** Jamuna Oil JO(IT & MIS) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Jamuna Oil Company Limited — Junior Officer (IT & MIS), 23/05/2025 (BUET) (suggestion), [11] — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g0030"></a>

### Simplify using a K-map: f(A,B,C) = ĀBC̄ + ĀBC + ĀB̄C + ABC. <sub>G0030</sub>

*Written*

Simplify using a K-map: f(A,B,C) = ĀBC̄ + ĀBC + ĀB̄C + ABC.

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - 38th BCS Written (2018), Q1(b) — [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)
- **Printed answer:** f = ĀB + ĀC + BC (minterms 1, 2, 3, 7).

<a id="g0970"></a>

### Draw the k-map for the equation: $F = A'B'C'D' + A'B'CD' + A'BCD' + A'BCD + AB'C'D' + AB'… <sub>G0970</sub>

*Written*

Draw the k-map for the equation: $F = A'B'C'D' + A'B'CD' + A'BCD' + A'BCD + AB'C'D' + AB'CD' + ABCD' + ABCD$

- **Asked in (1):** BOF AE(CSE) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q6 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q21 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)

<a id="g0972"></a>

### $F = \overline{ABC} + A\overline{BC} + \overline{AB}C + \overline{A}BC + ABC$, Simplify u… <sub>G0972</sub>

*Written*

$F = \overline{ABC} + A\overline{BC} + \overline{AB}C + \overline{A}BC + ABC$, Simplify using K-map with logic circuit.

- **Asked in (1):** JBL SO(ANE) 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q8 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q23 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)

<a id="g0973"></a>

### Simplify the equation by using K-map: $f(A,B,C) = \overline{ABC} + \overline{A}BC + \over… <sub>G0973</sub>

*Written*

Simplify the equation by using K-map: $f(A,B,C) = \overline{ABC} + \overline{A}BC + \overline{AB}C + ABC$

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — k_map, Q9 — [bit to exabyte/08_bte-p008-kmap-q01-09-sql-q01.md](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) · [image](../bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q24 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)

<a id="g1885"></a>

### Simplify the equation using K-map . <sub>G1885</sub>

*Written*

Simplify the equation using K-map .

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 38th (ICT), Date: 2018 — Time: 3 Hours, Full marks: 200 (pp. 1–18), 4.(b) — [duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md](../duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md)

<a id="g2839"></a>

### Draw the k-map for the equation. F=A'B'C'+A'B'CD'+A'BCD'+A'BCD+AB'C'D+AB'CD+ABCD'+ABCD <sub>G2839</sub>

*Written*

Draw the k-map for the equation. F=A'B'C'+A'B'CD'+A'BCD'+A'BCD+AB'C'D+AB'CD+ABCD'+ABCD

- **Asked in (1):** BOF AE(CSE) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 2. বাংলাদেশ সমরাস্ত্র কারখানা: (BOF)-2021, Assistant Engineer; (EEE/ME/CSE), 06-03-2021; exam taker not printed; Full Mark: 100 [Non-40, Department-60]; pp. 2-4 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g2937"></a>

### Simplify the following Boolean function using k-map and draw the logic circuit. F=A'B'C' … <sub>G2937</sub>

*Written*

Simplify the following Boolean function using k-map and draw the logic circuit. F=A'B'C' + AB'C' + AB'C + A'BC + ABC

- **Asked in (1):** JBL SO(ANE) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 03 — Assistant Network Engineer (ANE) – JBL — 12.11.2020 — Exam taker: not printed — IT: 10*16 marks + Non IT: 2*20 marks - 200 marks — pages 4–6, Q2 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2950"></a>

### 7 segment display, a segment consists of BCD code that represent by ABCD, a segment is on… <sub>G2950</sub>

*Written*

7 segment display, a segment consists of BCD code that represent by ABCD, a segment is on by 2,3,5,6,7,8,9.Write the Boolean expression in SOP form and simplify with Kmap.

- **Asked in (1):** Combined Bank SO 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 04 — BSCS Combined 3 Bank (Sonali, Janata, Rakub) — Post: SO (Written) — 16-11-2020 — Exam taker: not printed — marks not printed — pages 6–8, Q7 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3004"></a>

### Simplify the following Boolean function using k-map. F(A, B, C, D) = 2 (3,4,5,7,9,13,14,1… <sub>G3004</sub>

*Written*

Simplify the following Boolean function using k-map. F(A, B, C, D) = 2 (3,4,5,7,9,13,14,15)

- **Asked in (1):** Combined Bank AHE 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Assistant Hardware Engineer (AHE) - SBL, JBL, RBL [AHE SBL, JBL, RBL 2021 CTI] — 24.12.2021 — Exam taker: CTI (from the printed tag) — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks — pages 15–17, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3944"></a>

### Assume A̅, B̅, C̅ and D̅ represent the complements of A, B, C, and D, respectively. Now i… <sub>G3944</sub>

*MCQ*

Assume A̅, B̅, C̅ and D̅ represent the complements of A, B, C, and D, respectively. Now in a 4-variable (ABCD) logic circuit K-map (AB makes Row andCD makes Column) the cell of first row and then the third column will be indicated by: (a) A B̅ C D (b) A̅ B̅ C D̅ (c) A̅ B̅ C D (d) ABCD

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q57 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g0318"></a>

### Convert the canonical SOP f(A,B,C,D) = Σ(1,3,5,8,11) into canonical POS. <sub>G0318</sub>

*Written*

Convert the canonical SOP f(A,B,C,D) = Σ(1,3,5,8,11) into canonical POS.

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - 46th BCS ICT, Q96 — [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 1 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)
- **Printed answer:** f = Π(0,2,4,6,7,9,10,12,13,14,15)

<a id="g0323"></a>

### Minimize f(A,B,C,D) = Π(2,3,7,12,13,14,15). (Printed twice on the page; the repeat contin… <sub>G0323</sub>

*Written*

Minimize f(A,B,C,D) = Π(2,3,7,12,13,14,15). (Printed twice on the page; the repeat continues onto the next page.)

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - 46th BCS ICT, Q95 — [DLD/07_q95-pos-minimization.md](../DLD/07_q95-pos-minimization.md) · [image](../DLD/07_q95-pos-minimization.jpg); [DLD/08_q128-47th-bcs-ict.md](../DLD/08_q128-47th-bcs-ict.md) · [image](../DLD/08_q128-47th-bcs-ict.jpg)
- **Printed answer:** Converted to Σ(0,1,4,5,6,8,9,10,11); F = AB' + A'C' + A'BD'
- **Correction:** Result is the minimal SOP and correct; the equivalent minimal POS (A'+B')(A+B+C')(A+C'+D') is not given.

<a id="g0324"></a>

### Simplify F(A,B,C,D) = Σ(3,5,7,9,13,14,15) using a 4-variable K-map. <sub>G0324</sub>

*Written*

Simplify F(A,B,C,D) = Σ(3,5,7,9,13,14,15) using a 4-variable K-map.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - 47th BCS ICT, Q128 — [DLD/08_q128-47th-bcs-ict.md](../DLD/08_q128-47th-bcs-ict.md) · [image](../DLD/08_q128-47th-bcs-ict.jpg); [DLD/01_kmap-solution-q36.md](../DLD/01_kmap-solution-q36.md) · [image](../DLD/01_kmap-solution-q36.jpg)
- **Printed answer:** F = BD + A'CD + ABC + AC'D

<a id="g0326"></a>

### Simplify F = A'B'C + AB'C + ABC' + ABC using a 3-variable K-map. <sub>G0326</sub>

*Written*

Simplify F = A'B'C + AB'C + ABC' + ABC using a 3-variable K-map.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - 46th BCS CSE, Q127 — [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)
- **Printed answer:** F = B'C + AB (solved algebraically)

<a id="g1983"></a>

### মিনটার্ম কি? K-Map এর সাহায্যে নিচের সমীকরণটির সরল করুন:-- F (A, B, C, D) = A B C +A BD +… <sub>G1983</sub>

*Written*

মিনটার্ম কি? K-Map এর সাহায্যে নিচের সমীকরণটির সরল করুন:-- F (A, B, C, D) = A B C +A BD + ABC + AC.

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৩ (গ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2742"></a>

### Minimize the following function using the Karnaugh map method, (A,B,C,D) - Π (2, 3. 7, 12… <sub>G2742</sub>

*Written*

Minimize the following function using the Karnaugh map method, (A,B,C,D) - Π (2, 3. 7, 12, 13, 14, 15)

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 1 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3670"></a>

### Kmap <sub>G3670</sub>

*Written*

Kmap

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q20 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g3697"></a>

### Find the canonical sum of product of a function using K-Map? [ Function look like this A{… <sub>G3697</sub>

*Written*

Find the canonical sum of product of a function using K-Map? [ Function look like this A{w,x,y,z)=Summation of F{9,6,7,8}+M{3,4,5,6}]

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q19 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g0314"></a>

### K-map: graphical method to simplify Boolean expressions (fewer gates, lower cost/power, f… <sub>G0314</sub>

*Study note*

K-map: graphical method to simplify Boolean expressions (fewer gates, lower cost/power, faster). Rules: group sizes 1,2,4,8 (2^n); largest possible groups; adjacent cells only, no diagonals; edges wrap around; a 1 may be reused; SOP groups 1s, POS groups 0s. Includes the 4-variable cell numbering (rows AB 00,01,11,10; m0 m1 m3 m2 / m4 m5 m7 m6 / m12 m13 m15 m14 / m8 m9 m11 m10).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, Karnaugh Map (K-Map) — [DLD/02_karnaugh-map-rules-sop-pos.md](../DLD/02_karnaugh-map-rules-sop-pos.md) · [image](../DLD/02_karnaugh-map-rules-sop-pos.jpg)

<a id="g0315"></a>

### SOP form: AND (product) terms are formed first, then ORed together; example F = AB + AC +… <sub>G0315</sub>

*Study note*

SOP form: AND (product) terms are formed first, then ORed together; example F = AB + AC + BC.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, SOP = Sum of Products — [DLD/02_karnaugh-map-rules-sop-pos.md](../DLD/02_karnaugh-map-rules-sop-pos.md) · [image](../DLD/02_karnaugh-map-rules-sop-pos.jpg); [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)

<a id="g0316"></a>

### Plot F(A,B,C,D) = Σm(0,1,2,3,5,6,11,12) on a 4-variable K-map; procedure: group 1s, find … <sub>G0316</sub>

*Worked example*

Plot F(A,B,C,D) = Σm(0,1,2,3,5,6,11,12) on a 4-variable K-map; procedure: group 1s, find constant variables, write product terms, OR them.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, Representation of SOP — [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)
  - Paper not shown on the source sheet, Representation of POS — [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg)
- **Printed answer:** K-map with 1s at m0,m1,m2,m3,m5,m6,m11,m12 (no grouping shown)

<a id="g0317"></a>

### POS form: OR (sum) terms are formed first, then ANDed together; example F = (A+B)(A+C)(B+… <sub>G0317</sub>

*Study note*

POS form: OR (sum) terms are formed first, then ANDed together; example F = (A+B)(A+C)(B+C).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, POS = Product of Sums — [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)

<a id="g1726"></a>

### কার্নো ম্যাপ (K-Map) কী? নিচের সমীকরণগুলো সরলীকরণ করুন: - `F(A,B,C,D) = Σ(0, 1, 2, 5, 7, … <sub>G1726</sub>

*Written*

কার্নো ম্যাপ (K-Map) কী? নিচের সমীকরণগুলো সরলীকরণ করুন: - `F(A,B,C,D) = Σ(0, 1, 2, 5, 7, 11, 15)` - `A'B + ABC'D + A'BCD + A + BC'D`

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q205 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

<a id="g2364"></a>

### Consider the following algebraic equation : Y = AB'CD' +ABC'+A'BD+AB'CD [BCS – 38th(ICT)]… <sub>G2364</sub>

*Written*

Consider the following algebraic equation : Y = AB'CD' +ABC'+A'BD+AB'CD [BCS – 38th(ICT)] a. Draw the truth table that satisfies the above-mentioned equation b. Simplify the equation using k-map c. Draw the circuit diagram for the simplified equation by using basic gates. Calculate the number of basic gates required for implementing the simplified circuit. d. Draw the circuit for simplified equation by using only NOR gate.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

## Boolean algebra & simplification

<a id="g0013"></a>

### Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C). <sub>G0013</sub>

*Written*

Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C).

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - 45th BCS Written (CSE-971) (2024-01-31), Q20(d) — [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)
- **Printed answer:** Result is F only for A=B=C=T, T for all other rows (with an intermediate X = A⊕B column).
- **Correction:** The final column is right, but the intermediate X = A⊕B column is wrong in three rows: (T,T,F) should be F, (T,F,F) should be T and (F,T,F) should be T.

<a id="g0817"></a>

### For the given circuit (A,B → AB and NOT(A+B) → combined and inverted), find the function … <sub>G0817</sub>

*Written*

For the given circuit (A,B → AB and NOT(A+B) → combined and inverted), find the function and the inputs for which the output is 1.

- **Asked in (1):** BAPEX AGM(ICT) 2023
- **Source:**
  - BAPEX Assistant General Manager (ICT) (BUET) (2023-01-20), Q2 — [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg)
- **Printed answer:** F = NOT(AB + NOT(A+B)) = A'B + AB' = A XOR B (output 1 for 01 and 10)

<a id="g1373"></a>

### What is Boolean function? How can we simplify the following Boolean function? $F = A'B'C … <sub>G1373</sub>

*Written*

What is Boolean function? How can we simplify the following Boolean function? $F = A'B'C + A'BC + AB'$

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - 45th BCS Written (CSE-971) (2024-01-31), Q20(b) — [BCS/04_assembly-number-systems-boolean.md](../BCS/04_assembly-number-systems-boolean.md) · [image](../BCS/04_assembly-number-systems-boolean.jpg)
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q15 — [bit to exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) · [image](../bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.jpg); [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)
- **Correction:** Answer is on printed page 273, which is not in the folder. The .md transcribes the first term as A'B'C', but the image shows A'B'C. Expected result: minterms 1,3,4,5 give F = A'C + AB'.

<a id="g1374"></a>

### Determine the truth table of $(A \oplus B) \lor (\neg A) \lor (\neg C)$. <sub>G1374</sub>

*Written*

Determine the truth table of $(A \oplus B) \lor (\neg A) \lor (\neg C)$.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q16 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1375"></a>

### State De-Morgan's law with an appropriate example. <sub>G1375</sub>

*Written*

State De-Morgan's law with an appropriate example.

- **Asked in (1):** BPSC AP 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q17 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1376"></a>

### Write the function for which the output is 1 for that input. <sub>G1376</sub>

*Written*

Write the function for which the output is 1 for that input.

- **Asked in (1):** BAPEX AGM(ICT) 2023
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q18 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1377"></a>

### $AB + (A(BC))(AC + \overline{BC})$ <sub>G1377</sub>

*Written*

$AB + (A(BC))(AC + \overline{BC})$

- **Asked in (1):** NPCBL JAM 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q19 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1378"></a>

### Simplify $Y = AB + (\bar{A} + B)C$ in digital logic design. <sub>G1378</sub>

*Written*

Simplify $Y = AB + (\bar{A} + B)C$ in digital logic design.

- **Asked in (1):** BPSC ADA 2022
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q20 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1386"></a>

### Draw the logic circuit of the Boolean: Expression, $Q = AB + BC(B + C)$; find $Q$ as outp… <sub>G1386</sub>

*Written*

Draw the logic circuit of the Boolean: Expression, $Q = AB + BC(B + C)$; find $Q$ as output where input $(A,B,C) = (1,0,1)$.

- **Asked in (1):** Combined Bank AME/AE(IT) 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q29 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1387"></a>

### Logic Circuit of Boolean algebra: $Q = \bar{C} + \bar{A}B + BC(B + C)$; Where output $Q$ … <sub>G1387</sub>

*Written*

Logic Circuit of Boolean algebra: $Q = \bar{C} + \bar{A}B + BC(B + C)$; Where output $Q$ and input $Q(A,B,C) = (0,0,1)$?

- **Asked in (1):** Sonali Bank ADBA 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q30 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1903"></a>

### Boolean function কী? নিচের Boolean function-কে কীভাবে সহজীকরণ করা যেতে পারে? F = A’B' C +… <sub>G1903</sub>

*Written*

Boolean function কী? নিচের Boolean function-কে কীভাবে সহজীকরণ করা যেতে পারে? F = A’B' C + A' BC + AB'

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ২ (খ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g2365"></a>

### (A+B) V(not A) V (notC) এর truth table নির্ণয় করুন। <sub>G2365</sub>

*Written*

(A+B) V(not A) V (notC) এর truth table নির্ণয় করুন।

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ২ (ঘ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g3164"></a>

### Truth Table from the following circuit: <sub>G3164</sub>

*Written*

Truth Table from the following circuit:

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3184"></a>

### Draw logic circuit for the Boolean Expression Q= (A'B + BC (B+C)')' and find value of Q w… <sub>G3184</sub>

*Written*

Draw logic circuit for the Boolean Expression Q= (A'B + BC (B+C)')' and find value of Q when (A, B, C) = (1, 0, 1).

- **Asked in (1):** Combined Bank AME/AE(IT) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 11 — Combined 3 Bank (10199) — Assistant Maintenance engineer/Assistant Engineer IT 2024 — 24.02.2024 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (IT: 50 + Math+GK: 20); Written: Subjective (150) + Math (20) + Focus (10) + B/E+E/B — pages 42–44, Q8 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3227"></a>

### Construct a Truth Table for a system that triggers an Alarm (Output 1) if (Motion is Dete… <sub>G3227</sub>

*Written*

Construct a Truth Table for a system that triggers an Alarm (Output 1) if (Motion is Detected AND it is Night Time) C (Panic Button is Pressed). [BSCS AP (SB & Janata Bank) 26]. 10

- **Asked in (1):** Combined Bank AP(SB & Janata) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 14 — BSCS (Sonali & Janata Bank PLC) — Assistant Programmer / Officer (IT) — 03/01/2026 — Exam taker: not printed — Time: 09-12; Written: 200 Marks — pages 52–55, Q14 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)
  - duranta.app question bank (coaching compilation of the question paper) — 14 — BSCS (Sonali & Janata Bank PLC) — Assistant Programmer / Officer (IT) — 03/01/2026 — Exam taker: not printed — Time: 09-12; Written: 200 Marks — pages 52–55, Q16 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3370"></a>

### (iii) DeMorgan's Duality Formula লিখ এবং উদাহরণ দাও। <sub>G3370</sub>

*Written*

(iii) DeMorgan's Duality Formula লিখ এবং উদাহরণ দাও।

- **Asked in (1):** DESCO SAE(Computer) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DESCO Sub-Assistant Engineer (Computer) 15/05/2026, 4 — [duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md](../duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md)

<a id="g3408"></a>

### A Boolean expression given simplify it: yz+xz+xyz <sub>G3408</sub>

*Written*

A Boolean expression given simplify it: yz+xz+xyz

- **Asked in (1):** BAERA Engineer(CSE) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Exam 28/07/2023, 7+6 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g4027"></a>

### Which of the following is the simplified version of boolean function F = Y̲ (X + X̲Y)? (ক… <sub>G4027</sub>

*MCQ*

Which of the following is the simplified version of boolean function F = Y̲ (X + X̲Y)? (ক) X̲.Y (খ) X.Y̲ (গ) X.Y (ঘ) X̲.Y̲

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q154 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4359"></a>

### Given a logical function, find out the truth table of AB· (A+B).C <sub>G4359</sub>

*Written*

Given a logical function, find out the truth table of AB· (A+B).C

- **Asked in (1):** BB AD(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — Written — 07.02.2025 — Exam taker: not stated (coaching labels FBS / DU; unverified) — marks not printed — recollection, R3 — [bank-written-web/2025-bb-adict-written-itjobqns/bb-adict-2025-written.md](../bank-written-web/2025-bb-adict-written-itjobqns/bb-adict-2025-written.md)

<a id="g0029"></a>

### Draw a truth table for Y = A·B̄·C·D̄ + A·B·C̄̄ + Ā·B·D + A·B̄̄·C·D (double bars as printe… <sub>G0029</sub>

*Written*

Draw a truth table for Y = A·B̄·C·D̄ + A·B·C̄̄ + Ā·B·D + A·B̄̄·C·D (double bars as printed, i.e. Y = AB̄CD̄ + ABC + ĀBD + ABCD).

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - 38th BCS Written (2018), Q1(a) — [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg); [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)
- **Printed answer:** Y = 1 for ABCD = 0101, 0111, 1010, 1110, 1111 (minterms 5, 7, 10, 14, 15).

<a id="g0327"></a>

### Simplify F = A'B'C' + B'CD' + A'BCD' + AB'C'. <sub>G0327</sub>

*Written*

Simplify F = A'B'C' + B'CD' + A'BCD' + AB'C'.

- **Asked in (1):** BPSC SAE 2021
- **Source:**
  - BPSC SAE (2021), Unnumbered (BPSC SAE 2021, first) — [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)
- **Printed answer:** F = B'C' + B'D' + A'CD'
- **Correction:** Final result is correct (minterms 0,1,2,6,8,9,10), but the intermediate algebra lines contain typos (term written A'BCA', factor CD'(B + A'B)).

<a id="g0328"></a>

### Simplify F = AB'CD' + A'B'C'D + A'BC'D + AB'C'D'. <sub>G0328</sub>

*Written*

Simplify F = AB'CD' + A'B'C'D + A'BC'D + AB'C'D'.

- **Asked in (1):** BPSC SAE 2021
- **Source:**
  - BPSC SAE (2021), Unnumbered (BPSC SAE 2021, second) — [DLD/05_bpsc-sae-2021-simplify.md](../DLD/05_bpsc-sae-2021-simplify.md) · [image](../DLD/05_bpsc-sae-2021-simplify.jpg)
- **Printed answer:** F = AB'D' + A'C'D

<a id="g1379"></a>

### নিম্নলিখিত Boolean Function টি সংক্ষিপ্ত আকারে লিখুন: $F(A,B,C,D) = \bar{A}\bar{B}\bar{C}… <sub>G1379</sub>

*Written*

নিম্নলিখিত Boolean Function টি সংক্ষিপ্ত আকারে লিখুন: $F(A,B,C,D) = \bar{A}\bar{B}\bar{C} + \bar{B}C\bar{D} + \bar{A}\bar{B}C\bar{D} + A\bar{B}\bar{C}$

- **Asked in (1):** BPSC SAE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q21 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1380"></a>

### $A\bar{B}\bar{C}D + \bar{A}\bar{B}\bar{D} + A\bar{B}CD$ convert it into minimum lateral. <sub>G1380</sub>

*Written*

$A\bar{B}\bar{C}D + \bar{A}\bar{B}\bar{D} + A\bar{B}CD$ convert it into minimum lateral.

- **Asked in (1):** SGFL AGE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q22 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1381"></a>

### Simplify the following Boolean expression: $(x + y + xy)(x + z)$ <sub>G1381</sub>

*Written*

Simplify the following Boolean expression: $(x + y + xy)(x + z)$

- **Asked in (1):** BPSC AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q24 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1382"></a>

### Simplify the Boolean expression as possible $A\bar{B}\bar{C}D + ABCD + A\bar{B}\bar{D}$ <sub>G1382</sub>

*Written*

Simplify the Boolean expression as possible $A\bar{B}\bar{C}D + ABCD + A\bar{B}\bar{D}$

- **Asked in (1):** APSCL AE(ICT) 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q25 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1383"></a>

### Simplify the following expression using Boolean Algebra: $xyz + \bar{x}yz + x\bar{y}$ <sub>G1383</sub>

*Written*

Simplify the following expression using Boolean Algebra: $xyz + \bar{x}yz + x\bar{y}$

- **Asked in (1):** BPSC AP 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q26 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1385"></a>

### Draw a truth table that satisfies the above-mentioned equation. $Y = \bar{A}\bar{B}\bar{C… <sub>G1385</sub>

*Written*

Draw a truth table that satisfies the above-mentioned equation. $Y = \bar{A}\bar{B}\bar{C}\bar{D} + \bar{A}\bar{B}\bar{C} + \bar{A}B\bar{C} + \bar{A}BCD$

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q28 — [bit to exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) · [image](../bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.jpg)

<a id="g1884"></a>

### Consider the following algebraic equation : Y = AB’CD’ +ABC’+A’BD+AB’CD. Draw the truth t… <sub>G1884</sub>

*Written*

Consider the following algebraic equation : Y = AB’CD’ +ABC’+A’BD+AB’CD. Draw the truth table that satisfies the above-mentioned equation .

- **Asked in (1):** 38th BCS (2018)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 38th (ICT), Date: 2018 — Time: 3 Hours, Full marks: 200 (pp. 1–18), 4.(a) — [duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md](../duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md)

<a id="g2377"></a>

### f(a, b, c, d) = a'b'c'd' + a'b'c'd + a'bc'd + ab'cd' কে কারনুম্যাপ এর সাহায্যে Simplify ক… <sub>G2377</sub>

*Written*

f(a, b, c, d) = a'b'c'd' + a'b'c'd + a'bc'd + ab'cd' কে কারনুম্যাপ এর সাহায্যে Simplify করুন।

- **Asked in (1):** NWPGCL JAM 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager 17-01-2020, 02 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g3389"></a>

### Given traffic light truth table for red, yellow, green. Find Boolean function <sub>G3389</sub>

*Written*

Given traffic light truth table for red, yellow, green. Find Boolean function

- **Asked in (1):** BAERA Engineer(CSE) November 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Exam 26.11.2021, 5 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g3744"></a>

### Minimize function of the given logic cirsuit. <sub>G3744</sub>

*Written*

Minimize function of the given logic cirsuit.

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q11 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g3745"></a>

### Truth table given. Find out which circuit it refers to. <sub>G3745</sub>

*Written*

Truth table given. Find out which circuit it refers to.

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q12 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g3844"></a>

### A majority circuit is a combinational circuit whose output is equal to 1 if the input var… <sub>G3844</sub>

*MCQ*

A majority circuit is a combinational circuit whose output is equal to 1 if the input variables have more 1’s than 0’s. The output is 0 otherwise. What will be the simplified Boolean equation for the output of a 3-input (a, b, c) majority circuit? (a) ab+bc+ac (b) abc (c) abc+ab+bc (d) abc+abc’+a’bc+ab’c

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P3-Q7 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3854"></a>

### What will be the simplified form of the following Boolean expression in terms of the mini… <sub>G3854</sub>

*MCQ*

What will be the simplified form of the following Boolean expression in terms of the minimum number of literals: wx+ w x’+xyz’ + x’yz’ + xy’z’ + x’y’z’ + z? (a) 1 (b) w (c) w+z (d) 0

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P3-Q17 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g4480"></a>

### K- map £x,y,z =(0,2,4,6,7) simplify. <sub>G4480</sub>

*Written*

K- map £x,y,z =(0,2,4,6,7) simplify.

- **Asked in (1):** NHA AP 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — National Housing Authority (Ministry of Housing and Public Works), Assistant Programmer — Written, 29.11.2019 — Exam taker: not printed — marks/time not printed, Q8 — [ministry-ap-web/2019-nha-ap-written-bdquestionbank/nha-ap-2019-written.md](../ministry-ap-web/2019-nha-ap-written-bdquestionbank/nha-ap-2019-written.md)

<a id="g0256"></a>

### 3-bit input ABC; D = 1 when the number of 1s is odd. Give the truth table and Boolean exp… <sub>G0256</sub>

*Written*

3-bit input ABC; D = 1 when the number of 1s is odd. Give the truth table and Boolean expression (a timing diagram of A, B, C is given).

- **Asked in (1):** BUET M.Sc.
- **Source:**
  - BUET MSc in CSE (2026-10-03), Q13 — [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)
- **Correction:** No answer printed. D = A ⊕ B ⊕ C (minterms 1, 2, 4, 7).

<a id="g2710"></a>

### Simplify the following circuit: F = A'B'C + AB'C + ABC' + ABC <sub>G2710</sub>

*Written*

Simplify the following circuit: F = A'B'C + AB'C + ABC' + ABC

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 2 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2743"></a>

### State and prove De Morgan's theorem using Boolean algebra <sub>G2743</sub>

*Written*

State and prove De Morgan's theorem using Boolean algebra

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 2) (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2814"></a>

### Define Boolean algebra. State its fundamental laws and illustrate how these laws are appl… <sub>G2814</sub>

*Written*

Define Boolean algebra. State its fundamental laws and illustrate how these laws are applied to simplify logic expressions.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 3 (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0711"></a>

### What is Boolean Logic? <sub>G0711</sub>

*Viva*

What is Boolean Logic?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Bank IT viva (compiled from candidates' viva experiences) (viva), Viva p31 Q15 — [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md#p31)
- **Printed answer:** Boolean Logic is a system of logic based on two values: True (1) and False (0). It uses operations like AND, OR, and NOT to make logical decisions

<a id="g1719"></a>

### তিন চলকের ডি-মরগ্যান উপপাদ্য দুইটি লিখুন এবং Truth Table এর সাহায্যে প্রমাণ করুন। <sub>G1719</sub>

*Written*

তিন চলকের ডি-মরগ্যান উপপাদ্য দুইটি লিখুন এবং Truth Table এর সাহায্যে প্রমাণ করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q198 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

## Other

<a id="g2026"></a>

### সত্যক সারণী কী? উদাহরণসহ লিখুন। <sub>G2026</sub>

*Written*

সত্যক সারণী কী? উদাহরণসহ লিখুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৫ (খ) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2028"></a>

### যদি F = X̄Y + XYZ̄ হয়, তবে প্রমাণ করুন যে, F. F̄ = 0 . <sub>G2028</sub>

*Written*

যদি F = X̄Y + XYZ̄ হয়, তবে প্রমাণ করুন যে, F. F̄ = 0 .

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৫ অথবা (খ) — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2036"></a>

### কোন যুক্তিতে ১ + ১ = ১ এবং ১ + ১ = ১০ হয়? ব্যাখ্যা করুন। <sub>G2036</sub>

*Written*

কোন যুক্তিতে ১ + ১ = ১ এবং ১ + ১ = ১০ হয়? ব্যাখ্যা করুন।

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ৯ অথবা — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2037"></a>

### NOT[(A+C̄)(B̄+D)] সমীকরণটি সরল করুন এবং যুক্তি বর্তনী অঙ্কন করুন। (the whole product is o… <sub>G2037</sub>

*Written*

NOT[(A+C̄)(B̄+D)] সমীকরণটি সরল করুন এবং যুক্তি বর্তনী অঙ্কন করুন। (the whole product is overbarred as printed)

- **Asked in (1):** 17th NTRCA School (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার শিক্ষা, বিষয় কোড : ৩১৩, পদের নাম: সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি) (pp. 1–2), ১০। — [duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md](../duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md)

<a id="g2076"></a>

### সরল করুন: Ā B̄ C + A B̄ C̄ + ABC <sub>G2076</sub>

*Written*

সরল করুন: Ā B̄ C + A B̄ C̄ + ABC

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৬ (খ) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2077"></a>

### EX - OR গেইট সত্যক সারণিসহ বর্ণনা করুন। <sub>G2077</sub>

*Written*

EX - OR গেইট সত্যক সারণিসহ বর্ণনা করুন।

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৬ (গ) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2141"></a>

### (CDAB)16 কে অক্টাল এ রূপান্তর কর। <sub>G2141</sub>

*Written*

(CDAB)16 কে অক্টাল এ রূপান্তর কর।

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024, Q3 — [duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md](../duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md)

<a id="g2683"></a>

### 39-B816 কে ডিসিম্যালে (দশমিক) রূপান্তর করুন। 1100101001-1100110110 এর মধ্যে পার্থক্য লিখু… <sub>G2683</sub>

*Written*

39-B816 কে ডিসিম্যালে (দশমিক) রূপান্তর করুন। 1100101001-1100110110 এর মধ্যে পার্থক্য লিখুন।

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 5 — ৪৫তম বিসিএস, তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড: ২৮১ — ১ম অংশ (pp. 7–8), ৩ (খ) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3148"></a>

### Describe the important characteristics of digital ICs (Integrated Circuits). <sub>G3148</sub>

*Written*

Describe the important characteristics of digital ICs (Integrated Circuits).

- **Asked in (1):** Combined Bank AME/AHE 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — Senior Officer (AHE/AME) — Job ID: 10165 (5 post) — 24.11.2023 — Exam taker: not printed — Total Marks-200, Time: 02 Hours (10:30 am-12:30 pm) — pages 37–39, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3168"></a>

### Logic Circuit of Olean algebra: Q = C + AB+BC(B+C); Where output Q and input (A, B, C)=(0… <sub>G3168</sub>

*Written*

Logic Circuit of Olean algebra: Q = C + AB+BC(B+C); Where output Q and input (A, B, C)=(0,0,10) [Combined Bank ADA 2024]

- **Asked in (1):** Combined Bank ADA 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 10 — Combined 3 Bank (10200) — Assistant Database Administrator 2024 — 23.02.2024 — Exam Taker: BIBM — Exam Time: 2 hour; Written: subjective (150) + Math (20) + Focus (10) + B/E + E/B — pages 40–42, Q9 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3496"></a>

### a. Describe the differences between combinational and sequential circuits with necessary … <sub>G3496</sub>

*Written*

a. Describe the differences between combinational and sequential circuits with necessary diagram. 5

- **Asked in (1):** Fisheries & Livestock Instructor(CS) 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 35 — মৎস্য ও প্রাণীসম্পদ অধিদপ্তরের ইন্সট্রাক্টর কম্পিউটার সায়েন্স — তারিখঃ ২০.০৬.২০২৩ — exam taker not printed — time and total not printed — pages 10–13, Q6(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3564"></a>

### (c) Compare TTL and CMOS logic family in terms of (i) Speed (ii) Noise and (iii) Power co… <sub>G3564</sub>

*Written*

(c) Compare TTL and CMOS logic family in terms of (i) Speed (ii) Noise and (iii) Power consumption.

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q1(c) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g4164"></a>

### 2's কমপ্লিমেন্ট পদ্ধতিতে (5)10 হতে (7)10 বিয়োগ করুন। <sub>G4164</sub>

*Written*

2's কমপ্লিমেন্ট পদ্ধতিতে (5)10 হতে (7)10 বিয়োগ করুন।

- **Asked in (1):** 18th NTRCA School-2 (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন পরীক্ষা (স্কুল সমপর্যায়-২) — ট্রেড ইন্সট্রাক্টর, কম্পিউটার ও তথ্যপ্রযুক্তি (লিখিত) — 12.07.2024, ২। — [ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md](../ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md)

<a id="g4597"></a>

### নিম্নের কোন লজিক অপারেশনটি সঠিক? (a) A + A = 1 (b) A A = 0 (c) A + 1 = 1 (d) A + 1 = 0 <sub>G4597</sub>

*MCQ*

নিম্নের কোন লজিক অপারেশনটি সঠিক? (a) A + A = 1 (b) A A = 0 (c) A + 1 = 1 (d) A + 1 = 0

- **Asked in (1):** BDCCL AM(Transmission) 2022
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BDCCL Assistant Manager (Transmission) 2022, MCQ10 — [telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md](../telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md)

<a id="g4599"></a>

### বাইনারি পদ্ধতির যোগে 1+1+1 = কত? (a) 10 (b) 11 (c) 101 (d) 111 <sub>G4599</sub>

*MCQ*

বাইনারি পদ্ধতির যোগে 1+1+1 = কত? (a) 10 (b) 11 (c) 101 (d) 111

- **Asked in (1):** BDCCL AM(Transmission) 2022
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BDCCL Assistant Manager (Transmission) 2022, MCQ12 — [telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md](../telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md)

<a id="g4915"></a>

### Design a traffic light system, when there is Sunlight, It will OFF and No Sunlight, It wi… <sub>G4915</sub>

*Written*

Design a traffic light system, when there is Sunlight, It will OFF and No Sunlight, It will ON.

- **Asked in (1):** DPDC AM(ICT) 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Dhaka Power Distribution Company Limited — AM ICT (Exam Controller), 27/06/2025 (BUET) (suggestion), Q7 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

<a id="g2376"></a>

### (1111001101011)2, কে অক্টাল ও হেক্সাডেসিম্যালে রূপান্তর করুন। <sub>G2376</sub>

*Written*

(1111001101011)2, কে অক্টাল ও হেক্সাডেসিম্যালে রূপান্তর করুন।

- **Asked in (1):** NWPGCL JAM 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager 17-01-2020, 01 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2553"></a>

### 10101111 OR 00110011 = ? a. 10111111 b. 00100011 c. 01010101 d. 111111111 <sub>G2553</sub>

*MCQ*

10101111 OR 00110011 = ? a. 10111111 b. 00100011 c. 01010101 d. 111111111

- **Asked in (1):** DoICT ANE 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33, Digital Systems / Logic / Circuits Q3 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2638"></a>

### Main Difference between Combinational and Sequential circuit? <sub>G2638</sub>

*Written*

Main Difference between Combinational and Sequential circuit?

- **Asked in (1):** WZPDCL AE(CSE) 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE) 29-06-2019, 7 — [duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md](../duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md)

<a id="g4091"></a>

### অ্যাডার কী? দুটি হাফ অ্যাডারের সাহায্যে একটি ফুল অ্যাডারের বর্তনী গঠন করুন। <sub>G4091</sub>

*Written*

অ্যাডার কী? দুটি হাফ অ্যাডারের সাহায্যে একটি ফুল অ্যাডারের বর্তনী গঠন করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৩ অথবা (খ) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4093"></a>

### ন্যান্ড গেইট কী? প্রমাণ করুন যে, (i) \overline{A+B} · \overline{Ā+B} = 0 ; (ii) A + ĀB + … <sub>G4093</sub>

*Written*

ন্যান্ড গেইট কী? প্রমাণ করুন যে, (i) \overline{A+B} · \overline{Ā+B} = 0 ; (ii) A + ĀB + \overline{AB} = 1

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৪(ক) — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4107"></a>

### নিচের সমীকরণটি সরল করুন ও বর্তনী অংকন করুন : S = ĀB̄Cᵢ + ĀBC̄ᵢ + AB̄C̄ᵢ + ABCᵢ <sub>G4107</sub>

*Written*

নিচের সমীকরণটি সরল করুন ও বর্তনী অংকন করুন : S = ĀB̄Cᵢ + ĀBC̄ᵢ + AB̄C̄ᵢ + ABCᵢ

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৭ — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4108"></a>

### (73·75)10 কে বাইনারী ও হেক্সাডেসিমেলে প্রকাশ করুন। <sub>G4108</sub>

*Written*

(73·75)10 কে বাইনারী ও হেক্সাডেসিমেলে প্রকাশ করুন।

- **Asked in (1):** 15th NTRCA Computer Operation (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৫তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার অপারেশন, বিষয় কোড : ৪৩২, পদের নাম: প্রভাষক (ব্যবসায় ব্যবস্থাপনা ইনস্টিটিউট), Y সেট, ৭ অথবা — [ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md](../ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md)

<a id="g4132"></a>

### বুলিয়ান অ্যালজেবরার সাহায্যে সরল করুন: \overline{x + ȳ(x + z)} <sub>G4132</sub>

*Written*

বুলিয়ান অ্যালজেবরার সাহায্যে সরল করুন: \overline{x + ȳ(x + z)}

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৪ অথবা (ক) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4133"></a>

### প্রমান করুন: \overline{A⊕B} = AB + ĀB̄ <sub>G4133</sub>

*Written*

প্রমান করুন: \overline{A⊕B} = AB + ĀB̄

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৪ অথবা (খ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4134"></a>

### মিনটার্ম কী? কারনু ম্যাপের সাহায্যে সরল করুন: ĀB̄C̄ + ĀB + ABC̄ + AC. <sub>G4134</sub>

*Written*

মিনটার্ম কী? কারনু ম্যাপের সাহায্যে সরল করুন: ĀB̄C̄ + ĀB + ABC̄ + AC.

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৪ অথবা (গ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4135"></a>

### তিনটি চলকের ডী-মরগ্যান উপপাদ্য দুইটি লিখুন এবং সত্যক সারিণির সাহায্যে প্রমাণ করুণ। <sub>G4135</sub>

*Written*

তিনটি চলকের ডী-মরগ্যান উপপাদ্য দুইটি লিখুন এবং সত্যক সারিণির সাহায্যে প্রমাণ করুণ।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৫(ক) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4136"></a>

### সার্বজনীন গেইট কাকে বলে? সার্বজনীন গেইটের সাবজনীনতা প্রমাণ করুণ। <sub>G4136</sub>

*Written*

সার্বজনীন গেইট কাকে বলে? সার্বজনীন গেইটের সাবজনীনতা প্রমাণ করুণ।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৫(খ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4142"></a>

### রিপল কাউন্টার কী? একটি তিন বিটের এসিনক্রোনাস আপ রিপল কাউন্টারের গঠন লিখুন। <sub>G4142</sub>

*Written*

রিপল কাউন্টার কী? একটি তিন বিটের এসিনক্রোনাস আপ রিপল কাউন্টারের গঠন লিখুন।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৬ অথবা — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4210"></a>

### (12345) base 10 to (?) base 8. <sub>G4210</sub>

*Written*

(12345) base 10 to (?) base 8.

- **Asked in (1):** BB AP 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — Bangladesh Bank — Assistant Programmer — 25.10.2019 — Exam taker: IBA (as printed by the coaching banner; unverified) — Marks 200, Time 1.30 h, MCQ 64×1.25 = 80, Written 120 (dept 100, non-dept 20) — pages 1–2 (partial), Q5 — [bank-written-web/2019-bb-ap-stackit-slideshare/bb-ap-2019.md](../bank-written-web/2019-bb-ap-stackit-slideshare/bb-ap-2019.md)

<a id="g1982"></a>

### AB + BC (B + C) ফাংশনটি সরল করুন এবং সরলীকৃত অংশের লজিক সার্কিট অংকন করুন। <sub>G1982</sub>

*Written*

AB + BC (B + C) ফাংশনটি সরল করুন এবং সরলীকৃত অংশের লজিক সার্কিট অংকন করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৩ (খ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2004"></a>

### (456)₈ ও (2D)₁₆ কে বাইনারি পদ্ধতিতে যোগ করুন। যোগফলকে দশমিকে প্রকাশ করুন। <sub>G2004</sub>

*Written*

(456)₈ ও (2D)₁₆ কে বাইনারি পদ্ধতিতে যোগ করুন। যোগফলকে দশমিকে প্রকাশ করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৮ অথবা — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2129"></a>

### মাল্টিপ্লেক্সার কী? চিত্রসহ একটি মাল্টিপ্লেক্সারের গঠন ও কাজ বর্ণনা করুন। <sub>G2129</sub>

*Written*

মাল্টিপ্লেক্সার কী? চিত্রসহ একটি মাল্টিপ্লেক্সারের গঠন ও কাজ বর্ণনা করুন।

- **Asked in (1):** 16th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৬তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ১০ অথবা (খ) — [duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md](../duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md)

<a id="g3653"></a>

### Multiply the following two 2 digit numbers with only three 1 bit multiplication. 16 x 35 … <sub>G3653</sub>

*Written*

Multiply the following two 2 digit numbers with only three 1 bit multiplication. 16 x 35 -------- ??

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q1 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g3723"></a>

### A very easy K Map with don't cares <sub>G3723</sub>

*Written*

A very easy K Map with don't cares

- **Asked in (1):** BUET M.Sc. October 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2017, Q19 — [buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md](../buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md)

<a id="g4054"></a>

### ĀBC + AB̄C + ABC̄ + ABC এর যুক্তি বর্তনী অংকন করুন। <sub>G4054</sub>

*Written*

ĀBC + AB̄C + ABC̄ + ABC এর যুক্তি বর্তনী অংকন করুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ২(গ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4055"></a>

### (১০১১০·১১)২ কে হেক্সাডেসিমালে এবং (AB·4C)16 কে বাইনারীতে রূপান্তর করুন। <sub>G4055</sub>

*Written*

(১০১১০·১১)২ কে হেক্সাডেসিমালে এবং (AB·4C)16 কে বাইনারীতে রূপান্তর করুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ২(ঘ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4072"></a>

### কারনৌ ম্যাপের সাহায্যে সরল করুন : F(A, B, C, D) = Σ(2, 4, 6, 7, 10, 12, 14, 15). <sub>G4072</sub>

*Written*

কারনৌ ম্যাপের সাহায্যে সরল করুন : F(A, B, C, D) = Σ(2, 4, 6, 7, 10, 12, 14, 15).

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৫ অথবা (ক) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4073"></a>

### কাউন্টার কী? একটি ৩-বিট রিপল কাউন্টার বর্ণনা করুন। <sub>G4073</sub>

*Written*

কাউন্টার কী? একটি ৩-বিট রিপল কাউন্টার বর্ণনা করুন।

- **Asked in (1):** 13th NTRCA CSE (2016)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৫ অথবা (খ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g4423"></a>

### Fill out the table from given circuit <sub>G4423</sub>

*Written*

Fill out the table from given circuit

- **Asked in (1):** DESCO AE(CSE) 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — DESCO Assistant Engineer (CSE) 27.05.2016, Q11 — [power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md](../power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md)

<a id="g4669"></a>

### 3. Number কয় ধরণের হয়? <sub>G4669</sub>

*Viva*

3. Number কয় ধরণের হয়?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - Viva questions recalled by candidates (counted apart from written exams) — J1 Combined Bank Officer (IT) 2026, Job ID 10229 (viva), A1-V3 — [viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md](../viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md)

<a id="g4955"></a>

### (B12)16+(5CA)16=? ক. (10DC)16 খ. (AFDC)16 গ. (IFDC)16 ঘ. (EIDC)16 <sub>G4955</sub>

*MCQ*

(B12)16+(5CA)16=? ক. (10DC)16 খ. (AFDC)16 গ. (IFDC)16 ঘ. (EIDC)16

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Web suggestion or sample sheet (not a dated paper) — Govt Job Care BD — BPSc Assistant Programmer Final Model Test (suggestion), Q56 — [model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md](../model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md)

## Combinational circuits

<a id="g4063"></a>

### ডিকোডার কী? একটি 3-to-8 লাইন ডিকোডারের সত্যক সারণী ও বর্তনী অংকন করুন। <sub>G4063</sub>

*Written*

ডিকোডার কী? একটি 3-to-8 লাইন ডিকোডারের সত্যক সারণী ও বর্তনী অংকন করুন।

- **Asked in (2):** 13th NTRCA CSE (2016); 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৭। (ক) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)
  - Question paper found on the web (see the folder README for the URL) — ১৩তম শিক্ষক নিবন্ধন লিখিত (প্রভাষক) — বিষয়: কম্পিউটার বিজ্ঞান (ঐচ্ছিক), বিষয় কোড : ৪৩১, খ সেট — 2016 (pp. 1–2 of the paper), ৩ অথবা (খ) — [ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md](../ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md)

<a id="g0112"></a>

### A programmable logic array is mainly used for: (custom sequential circuits / memory / cus… <sub>G0112</sub>

*MCQ*

A programmable logic array is mainly used for: (custom sequential circuits / memory / custom combinational circuits / fixed logic)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q66 — [BCS/62_pla-power-factor-set-intersection.md](../BCS/62_pla-power-factor-set-intersection.md) · [image](../BCS/62_pla-power-factor-set-intersection.jpg)
- **Printed answer:** (গ) Custom combinational circuits

<a id="g0143"></a>

### If x, y, z are full-adder inputs, the carry-out expression is: (x̄y + x̄z + yz / x + y + … <sub>G0143</sub>

*MCQ*

If x, y, z are full-adder inputs, the carry-out expression is: (x̄y + x̄z + yz / x + y + z / xy + xz + yz / xy + xz + yz [printed twice])

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q97 — [BCS/36_full-adder-superposition-decision-tree.md](../BCS/36_full-adder-superposition-decision-tree.md) · [image](../BCS/36_full-adder-superposition-decision-tree.jpg)
- **Printed answer:** (গ) Cout = xy + xz + yz

<a id="g1401"></a>

### Truth Table from following circuit (2-bit input A, B full adder with carry bit $C_{in}$). <sub>G1401</sub>

*Written*

Truth Table from following circuit (2-bit input A, B full adder with carry bit $C_{in}$).

- **Asked in (1):** Sonali Bank ADBA 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q44 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1407"></a>

### Design a $5 \times 32$ decoder with four $3 \times 8$ decoders and a $2 \times 4$ decoder… <sub>G1407</sub>

*Written*

Design a $5 \times 32$ decoder with four $3 \times 8$ decoders and a $2 \times 4$ decoder. Use block diagram construction.

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q51 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1408"></a>

### একটি ২:৪ ডিকোডার ওঁ একটি OR গেট ব্যবহার করে একটি হাফ এডার ডিজাইন কর। <sub>G1408</sub>

*Written*

একটি ২:৪ ডিকোডার ওঁ একটি OR গেট ব্যবহার করে একটি হাফ এডার ডিজাইন কর।

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q52 — [bit to exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) · [image](../bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024, Q4 (second) — [duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md](../duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md)

<a id="g2146"></a>

### ৪বিট অ্যাডার দিয়ে ৪ বিট সাবট্রাক্টর ডিজাইন। (Design 4 bit Subtractor using 4 bit Adder) <sub>G2146</sub>

*Written*

৪বিট অ্যাডার দিয়ে ৪ বিট সাবট্রাক্টর ডিজাইন। (Design 4 bit Subtractor using 4 bit Adder)

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 (Set-04), Q1 — [duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md](../duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md)

<a id="g2187"></a>

### A 4*1 MUX is given, write down its expression in SOM form. <sub>G2187</sub>

*Written*

A 4*1 MUX is given, write down its expression in SOM form.

- **Asked in (1):** Titas Gas AE(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Titas Gas Assistant Engineer (CSE) 24/05/2024, Q2(a) — [duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md](../duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md)

<a id="g2680"></a>

### চারটি 3×8 ডিকোডার এবং একটি 2x4 ডিকোডার নিয়ে একটি 5x32 ডিকোডার অংকন করুন। <sub>G2680</sub>

*Written*

চারটি 3×8 ডিকোডার এবং একটি 2x4 ডিকোডার নিয়ে একটি 5x32 ডিকোডার অংকন করুন।

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 5 — ৪৫তম বিসিএস, তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড: ২৮১ — ১ম অংশ (pp. 7–8), ২ (খ) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2681"></a>

### F(A, B, C, D) - (0, 5, 6, 8, 13, 14) প্রতিস্থাপন করুন MUX ব্যবহার করে। <sub>G2681</sub>

*Written*

F(A, B, C, D) - (0, 5, 6, 8, 13, 14) প্রতিস্থাপন করুন MUX ব্যবহার করে।

- **Asked in (1):** 45th BCS ICT (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 5 — ৪৫তম বিসিএস, তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড: ২৮১ — ১ম অংশ (pp. 7–8), ২ (গ) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2894"></a>

### Full adder circuit and diagram <sub>G2894</sub>

*Written*

Full adder circuit and diagram

- **Asked in (1):** Cadet College Lecturer(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 11. Cadet College, Lecturer (ICT), 10.05.2025; Exam Taker: MIST; time and marks not printed; pp. 16-17 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g2897"></a>

### 3 into 8 encoder logic diagrams <sub>G2897</sub>

*Written*

3 into 8 encoder logic diagrams

- **Asked in (1):** Cadet College Lecturer(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — exam paper — 11. Cadet College, Lecturer (ICT), 10.05.2025; Exam Taker: MIST; time and marks not printed; pp. 16-17 — [duranta/1775695828-mist-pattern/1775695828.md](../duranta/1775695828-mist-pattern/1775695828.md)

<a id="g3535"></a>

### Design a full adder using two half adders and an OR gate. <sub>G3535</sub>

*Written*

Design a full adder using two half adders and an OR gate.

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-ক Q3 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g3960"></a>

### Build XOR with 2 to 4 decoder and NOR gate <sub>G3960</sub>

*Written*

Build XOR with 2 to 4 decoder and NOR gate

- **Asked in (1):** BUET M.Sc. April 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024, Q13 — [buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md](../buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md)

<a id="g1402"></a>

### Draw the logic diagram of Half-Adder the truth table of Full-Adder and use half Adder (S)… <sub>G1402</sub>

*Written*

Draw the logic diagram of Half-Adder the truth table of Full-Adder and use half Adder (S) and basic gates to build a Full-Adder.

- **Asked in (1):** BPSC SAE 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q45 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g2389"></a>

### 4:1 MUX এর লজিক ডায়াগ্রাম ডিজাইন করুন এবং Selection Line দুটির কাজ লিখুন। <sub>G2389</sub>

*Written*

4:1 MUX এর লজিক ডায়াগ্রাম ডিজাইন করুন এবং Selection Line দুটির কাজ লিখুন।

- **Asked in (1):** NWPGCL JAM 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager 17-01-2020, 14 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2935"></a>

### Draw a Full Adder circuit using two half adders. <sub>G2935</sub>

*Written*

Draw a Full Adder circuit using two half adders.

- **Asked in (1):** Combined Bank SO(IT) 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 02 — BSCS Combined 3 Banks ((1) Sonali Bank Limited (2) Bangladesh New Development Bank Limited) — Senior Officer (IT) — 03-11-2020 — Exam taker: not printed — Total Mark 200, Total Time 2.00 Hours — pages 3–4, Q15 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2960"></a>

### (i) Design 7 segment display decoder to find logic expression of sum of product for 2 bit… <sub>G2960</sub>

*Written*

(i) Design 7 segment display decoder to find logic expression of sum of product for 2 bit binary input.

- **Asked in (1):** Rupali Bank ANE 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 06 — Assistant Network Engineer (ANE) – RBL [ANE RBL 2021 CTI] — 16.03.2021 — Exam taker: CTI (from the printed tag) — 10*16 marks +2*20 marks = 200 — pages 10–11, Q8 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3840"></a>

### What will be output function F (X, Y, Z) in the sum-of-minterms form? Assume X as the mos… <sub>G3840</sub>

*MCQ*

What will be output function F (X, Y, Z) in the sum-of-minterms form? Assume X as the most significant bit and Z as the least significant bit. [Figure: 4-to-1 MUX with I0 = Z̅, I1 = Z̅, I2 = 0, I3 = 1; select S1 = X, S0 = Y; output F] (a) ∑(0, 1, 2, 3) (b) ∑(0, 2, 6, 7) (c) ∑(2, 3) (d) ∑(0, 1)

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P3-Q3 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3862"></a>

### Consider the following truth table for a 4-input priority encoder. What is the priority o… <sub>G3862</sub>

*MCQ*

Consider the following truth table for a 4-input priority encoder. What is the priority order of the inputs? D3 D2 D1 D0 | X Y X X 1 X | 0 1 X X 0 1 | 0 0 1 X 0 0 | 1 1 0 1 0 0 | 1 0 (a) 1, 0, 3, 2 (b) 1, 2, 3, 4 (c) 4, 3, 2, 1 (d) 1, 2, 4, 3

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P3-Q25 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3922"></a>

### Suppose you have many 4/1 MUXes. You need a 16/1 MUX. How many 4/1 MUX youare required to… <sub>G3922</sub>

*MCQ*

Suppose you have many 4/1 MUXes. You need a 16/1 MUX. How many 4/1 MUX youare required to build a 16/1 MUX : (a) 3 (b) 4 (c) 5 (d) 6

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q35 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3929"></a>

### If we apply 0001 to a to the input of a seven-segment decoder then what will be the outpu… <sub>G3929</sub>

*MCQ*

If we apply 0001 to a to the input of a seven-segment decoder then what will be the outputs, (a) 0110000 for a seven-segment display with common-cathode (b) 1001111 for a seven-segment display with common-anode (c) Both A and B are true (d) None are true

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q42 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3942"></a>

### In priority encoder: (a) first bit is considered don’t care (b) higher priority bit is co… <sub>G3942</sub>

*MCQ*

In priority encoder: (a) first bit is considered don’t care (b) higher priority bit is considered don’t care (c) lower priority bit is considered don’t care (d) None

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q55 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g4146"></a>

### হাফ এডার এর সাহায্যে ফুল এডারের বাস্তবায়ন করুণ। <sub>G4146</sub>

*Written*

হাফ এডার এর সাহায্যে ফুল এডারের বাস্তবায়ন করুণ।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৮ অথবা — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g1403"></a>

### Draw a full adder that is made of two half adder and find out the function of output of t… <sub>G1403</sub>

*Written*

Draw a full adder that is made of two half adder and find out the function of output of that full adder.

- **Asked in (1):** BPSC Lecturer 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q46 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1833"></a>

### Design a 4 bit binary adder using 1-Bit full adder circuit. <sub>G1833</sub>

*Written*

Design a 4 bit binary adder using 1-Bit full adder circuit.

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 11. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g2007"></a>

### Half adder এর লজিক সার্কিট অংকন করুন ও সত্যক সারণি অংকন করুন। <sub>G2007</sub>

*Written*

Half adder এর লজিক সার্কিট অংকন করুন ও সত্যক সারণি অংকন করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ১০। — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2815"></a>

### What are combinational and sequential logic circuits? Explain the design procedure of a f… <sub>G2815</sub>

*Written*

What are combinational and sequential logic circuits? Explain the design procedure of a full adder with its truth table.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 3 (b) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3669"></a>

### 2*4 decoder using only basic gates(AND,OR,NOT) <sub>G3669</sub>

*Written*

2*4 decoder using only basic gates(AND,OR,NOT)

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q19 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g4562"></a>

### Design 4x1 MUX with two selection line & 4 input (A,B,C,D). <sub>G4562</sub>

*Written*

Design 4x1 MUX with two selection line & 4 input (A,B,C,D).

- **Asked in (1):** BTCL AE(CSE) 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BTCL Assistant Engineer (CSE) 2017, Q1 — [telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md](../telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md)

<a id="g0423"></a>

### What are a half adder and a full adder? <sub>G0423</sub>

*Viva*

What are a half adder and a full adder?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 17th registration viva 2023 (2023) (viva), Q2 (candidate 1) — [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)
- **Printed answer:** Full adder: a logic circuit that adds two bits and outputs a carry bit (half adder answer given in an earlier viva)
- **Correction:** That describes a half adder. A full adder adds three bits (A, B, Cin) giving Sum = A⊕B⊕Cin and Cout = AB + Cin(A⊕B).

<a id="g0433"></a>

### How many outputs does an encoder with 10 inputs have? <sub>G0433</sub>

*Viva*

How many outputs does an encoder with 10 inputs have?

- **Asked in (0):** no dated exam tag on the source
- **Viva mentions:** 1
- **Source:**
  - NTRCA 17th registration viva 2023 (2023) (viva), Q5 (candidate 2) — [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)
- **Printed answer:** Outputs = 2^n, so 2^10 = 1024
- **Correction:** Wrong (that is decoder logic, and reversed). An encoder with 2^n inputs has n outputs; 10 inputs (decimal-to-BCD) need ceil(log2 10) = 4 outputs.

<a id="g1722"></a>

### লজিক সার্কিট কাকে বলে? হাফ অ্যাডার (Half Adder) এর সাহায্যে ফুল অ্যাডার (Full Adder) সার্… <sub>G1722</sub>

*Written*

লজিক সার্কিট কাকে বলে? হাফ অ্যাডার (Half Adder) এর সাহায্যে ফুল অ্যাডার (Full Adder) সার্কিট বাস্তবায়ন করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q201 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

<a id="g1724"></a>

### এনকোডার ও ডিকোডার কী? 3×8 লাইন ডিকোডারের এবং 8×3 লাইন এনকোডারের সত্যক সারণি ও লজিক বর্তনী… <sub>G1724</sub>

*Written*

এনকোডার ও ডিকোডার কী? 3×8 লাইন ডিকোডারের এবং 8×3 লাইন এনকোডারের সত্যক সারণি ও লজিক বর্তনী অঙ্কন করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q203 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

## Sequential circuits (flip-flops, counters)

<a id="g1834"></a>

### What is the difference between Latch and Flip-flop? <sub>G1834</sub>

*Written*

What is the difference between Latch and Flip-flop?

- **Asked in (5):** 36th BCS (2016); BB AME 2017; BPSC AP 2021; BWDB AP 2018; SPCBL AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q48 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 12. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)

<a id="g0012"></a>

### Flip-flop sub-part (stem on missing printed page 273); visible tail compares clocked J-K … <sub>G0012</sub>

*Written*

Flip-flop sub-part (stem on missing printed page 273); visible tail compares clocked J-K and clocked D flip-flops.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - 45th BCS Written (CSE-971) (2024-01-31), Q20(c) — [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)
- **Printed answer:** JK needs J and K inputs and can set/reset/toggle; D needs only D and is used for storage/delay.

<a id="g0103"></a>

### Number of states in a 4-bit BCD ripple counter? (4 / 10 / 16 / 5) <sub>G0103</sub>

*MCQ*

Number of states in a 4-bit BCD ripple counter? (4 / 10 / 16 / 5)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q57 — [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg)
- **Printed answer:** (খ) 10

<a id="g0439"></a>

### Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, clock period 5 s. Minimum number of … <sub>G0439</sub>

*Written*

Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, clock period 5 s. Minimum number of flip-flops?

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - BOGMC (Petrobangla) Assistant Manager (2024), Q4(a) — [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md#p5)
- **Printed answer:** 14 + 1 + 15 = 30 states; 2^5 = 32 >= 30, so 5 flip-flops.

<a id="g0845"></a>

### A traffic light cycles GREEN 70 s, YELLOW 5 s, RED 75 s, driven only by a 5 s clock. Mini… <sub>G0845</sub>

*Written*

A traffic light cycles GREEN 70 s, YELLOW 5 s, RED 75 s, driven only by a 5 s clock. Minimum number of flip-flops for the FSM?

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - Petrobangla Assistant Manager (CSE) (BUET) (2024-05-31), Q4(a) — [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)
  - Petrobangla Assistant Manager (CSE) (2024-05-31), Q4(a) — [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)
- **Correction:** No answer printed. 150 s / 5 s = 30 states → ⌈log2 30⌉ = 5 flip-flops.

<a id="g1404"></a>

### Show the differences between clocked J-K flip-flop and clocked D-flip-flop. <sub>G1404</sub>

*Written*

Show the differences between clocked J-K flip-flop and clocked D-flip-flop.

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q47 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1904"></a>

### (+55)10 এর 2's complement লিখুন। J-K flip-flop এবং clocked D-flip-flop এব পার্থক্যগুলো দে… <sub>G1904</sub>

*Written*

(+55)10 এর 2's complement লিখুন। J-K flip-flop এবং clocked D-flip-flop এব পার্থক্যগুলো দেখান।

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ২ (গ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g2204"></a>

### A traffic signal cycles from GREEN to YELLOW, YELLOW to RED and RED to GREEN. In each cyc… <sub>G2204</sub>

*Written*

A traffic signal cycles from GREEN to YELLOW, YELLOW to RED and RED to GREEN. In each cycle, GREEN is turned on for 70 seconds, YELLOW is turned on for 5 seconds and the RED is turned on for 75 seconds. This traffic light has to be implemented using a finite state machine (FSM). The only input to this FSM is a clock of 5 second period. The minimum number of flip-flops required to implement this FSM .

- **Asked in (1):** Petrobangla AM(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Petrobangla Assistant Manager (CSE/IT/ICT) 31/05/2024, Q4(a) — [duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md](../duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md)

<a id="g4017"></a>

### The main difference between a latch (L) and a flip flop (FF) is: (ক) FF is level-triggere… <sub>G4017</sub>

*MCQ*

The main difference between a latch (L) and a flip flop (FF) is: (ক) FF is level-triggered, L is edge-triggered (খ) FF is edge-triggered, L is level-triggered (গ) FF cannot store data but L can (ঘ) L can store more data than a FF

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q144 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4170"></a>

### চিত্রসহ J-K Flip Flop এর Truth table উল্লেখপূর্বক বর্ণনা করুন। <sub>G4170</sub>

*Written*

চিত্রসহ J-K Flip Flop এর Truth table উল্লেখপূর্বক বর্ণনা করুন।

- **Asked in (1):** 18th NTRCA School-2 (2024)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — ১৮তম শিক্ষক নিবন্ধন পরীক্ষা (স্কুল সমপর্যায়-২) — ট্রেড ইন্সট্রাক্টর, কম্পিউটার ও তথ্যপ্রযুক্তি (লিখিত) — 12.07.2024, ৯। — [ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md](../ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md)

<a id="g1405"></a>

### R-S Flip-flop এর সত্যক সারণি ও বৈশিষ্ট্য আলোচনা করুন। <sub>G1405</sub>

*Written*

R-S Flip-flop এর সত্যক সারণি ও বৈশিষ্ট্য আলোচনা করুন।

- **Asked in (1):** BPSC ANE 2020
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q49 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g2378"></a>

### MOD-6 বাইনারি কাউন্টারের Block Diagram অংকন করুন. <sub>G2378</sub>

*Written*

MOD-6 বাইনারি কাউন্টারের Block Diagram অংকন করুন.

- **Asked in (1):** NWPGCL JAM 2020
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — NWPGCL Junior Assistant Manager 17-01-2020, 03 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2402"></a>

### Latch এবং Flip Flop এর মধ্যে পার্থক্য কী? De-Morgan's theorem দুটি লিখ। <sub>G2402</sub>

*Written*

Latch এবং Flip Flop এর মধ্যে পার্থক্য কী? De-Morgan's theorem দুটি লিখ।

- **Asked in (1):** BCPCL JI 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BCPCL Junior Instructor 27-12-2019, 12 — [duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md](../duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md)

<a id="g2554"></a>

### Which circuit can store 1 bit of data? a. Register b. Encoder c. Decoder d. Flip-flop <sub>G2554</sub>

*MCQ*

Which circuit can store 1 bit of data? a. Register b. Encoder c. Decoder d. Flip-flop

- **Asked in (1):** DoICT ANE 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33, Digital Systems / Logic / Circuits Q4 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g2637"></a>

### Difference between Register and Latch? <sub>G2637</sub>

*Written*

Difference between Register and Latch?

- **Asked in (1):** WZPDCL AE(CSE) 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — WZPDCL Assistant Engineer (CSE) 29-06-2019, 6 — [duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md](../duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md)

<a id="g3395"></a>

### Design an asynchronous counter using any flip flop. <sub>G3395</sub>

*Written*

Design an asynchronous counter using any flip flop.

- **Asked in (1):** BAERA Engineer(CSE) November 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BAERA Exam 26.11.2021, 13 — [duranta/1782205758-baera-engr-computer/1782205758.md](../duranta/1782205758-baera-engr-computer/1782205758.md)

<a id="g3852"></a>

### What is the next state equation for A(t+1) for the following circuit? [Figure: JK flip-fl… <sub>G3852</sub>

*MCQ*

What is the next state equation for A(t+1) for the following circuit? [Figure: JK flip-flop; J = X XOR Q (Q fed back), K = NOT X; output A taken from Q̅] (a) 1 (b) X(t)+A(t) (c) 0 (d) X’(t)

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P3-Q15 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3894"></a>

### Difference between Latch and Flipflop is: (a) Flipflop has a clock but Latch doesn’t have… <sub>G3894</sub>

*MCQ*

Difference between Latch and Flipflop is: (a) Flipflop has a clock but Latch doesn’t have (b) Flipflop is edge-triggered but Latch is level triggered (c) Both are true (d) None are true

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q7 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3906"></a>

### A D flip-flop is having three inputs D, CLK, and CLR Which input is asynchronous: (a) D (… <sub>G3906</sub>

*MCQ*

A D flip-flop is having three inputs D, CLK, and CLR Which input is asynchronous: (a) D (b) CLK (c) CLR (d) None

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q19 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3920"></a>

### How to convert a JK Flipflip to T Flipflop ? (a) by adding an NOT Gate (b) by adding an A… <sub>G3920</sub>

*MCQ*

How to convert a JK Flipflip to T Flipflop ? (a) by adding an NOT Gate (b) by adding an AND Gate (c) by adding an X-OR Gate (d) No extra gate is required

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q33 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3924"></a>

### In a Johnson counter : (a) the output of the first flipflop is connected to the input of … <sub>G3924</sub>

*MCQ*

In a Johnson counter : (a) the output of the first flipflop is connected to the input of the last flipflop (b) the output of the last flipflop is connected to the input of the first flipflop (c) the inverted output of the last flipflop is connected to the input of the first flipflop (d) None

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q37 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g3940"></a>

### Advantage of JK Flip-flop over SR Flipflop is: (a) It is faster than SR (b) It has no for… <sub>G3940</sub>

*MCQ*

Advantage of JK Flip-flop over SR Flipflop is: (a) It is faster than SR (b) It has no forbidden state (c) It has no toggle state (d) All of the above

- **Asked in (1):** BUET IICT April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET IICT M.Sc. ICT April 2021 (1 July 2021), Q53 — [buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md](../buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md)

<a id="g1406"></a>

### Draw logic diagram of MOD-12 up counter using only T Flip flop. <sub>G1406</sub>

*Written*

Draw logic diagram of MOD-12 up counter using only T Flip flop.

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Digital Electronics, Q50 — [bit to exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) · [image](../bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.jpg)

<a id="g1828"></a>

### How to convert a J-K Flip Flop to a T Flip Flop ? <sub>G1828</sub>

*Written*

How to convert a J-K Flip Flop to a T Flip Flop ?

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 5. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1984"></a>

### কাউন্টার কি? একটি 3 bit-Ripple Counter এর গঠন বর্ণনা করুন। <sub>G1984</sub>

*Written*

কাউন্টার কি? একটি 3 bit-Ripple Counter এর গঠন বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৩ অথবা (ক) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g1992"></a>

### Flip-flop কী? একটি S-R Flip-flop এর গঠন সত্যক সারণিসহ বর্ণনা করুন। <sub>G1992</sub>

*Written*

Flip-flop কী? একটি S-R Flip-flop এর গঠন সত্যক সারণিসহ বর্ণনা করুন।

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৪ অথবা (গ) — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2711"></a>

### Draw the circuit diagram of a mod-12 ripple counter and explain its operation. <sub>G2711</sub>

*Written*

Draw the circuit diagram of a mod-12 ripple counter and explain its operation.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 2 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2745"></a>

### Explain the race-around condition in Flip-Flops and discuss how it can be resolved. <sub>G2745</sub>

*Written*

Explain the race-around condition in Flip-Flops and discuss how it can be resolved.

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 2 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3682"></a>

### Draw a logic diagram of MOD-12 Up counter using only T FF? <sub>G3682</sub>

*Written*

Draw a logic diagram of MOD-12 Up counter using only T FF?

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q3 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g3724"></a>

### Convert a 100 MHz clock to 50 MHz and 25 MHz by only using D flip-flops <sub>G3724</sub>

*Written*

Convert a 100 MHz clock to 50 MHz and 25 MHz by only using D flip-flops

- **Asked in (1):** BUET M.Sc. October 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2017, Q20 — [buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md](../buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md)

<a id="g1725"></a>

### ফ্লিপ-ফ্লপ (Flip-Flop) কাকে বলে? R-S, Master-Slave এবং D Flip-Flop সম্পর্কে আলোচনা করুন। <sub>G1725</sub>

*Written*

ফ্লিপ-ফ্লপ (Flip-Flop) কাকে বলে? R-S, Master-Slave এবং D Flip-Flop সম্পর্কে আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q204 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)

<a id="g1727"></a>

### রিপল কাউন্টার কাকে বলে? MOD-6/10, Synchronous ও Asynchronous কাউন্টারের সার্কিট অঙ্কনপূর্… <sub>G1727</sub>

*Written*

রিপল কাউন্টার কাকে বলে? MOD-6/10, Synchronous ও Asynchronous কাউন্টারের সার্কিট অঙ্কনপূর্বক আলোচনা করুন।

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, NTRCA Computer Science & ICT written question bank — ডিজিটাল লজিক ও সার্কিট ডিজাইন, Q206 — [18th NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) · [image](../18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.jpg)
