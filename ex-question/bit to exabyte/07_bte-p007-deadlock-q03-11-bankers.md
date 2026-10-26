# Bit to Exabyte — Super ICT 150++ Questions Book (previous questions, chapter by chapter), book page 7 — Operating System – Deadlock, Q3–11 (Banker's algorithm)

- **Source image:** `07_bte-p007-deadlock-q03-11-bankers.jpg` (original file name `831400179_122142235191191819_7385374697500898111_n.jpg`)
- **Page:** printed "Bit to Exabyte | 7"; folder position 7 of 71
- **Paper / Post:** none: a **compiled list of previous recruitment-exam questions**, grouped by topic; every question carries its own exam tag(s) in square brackets
- **Exam date:** per question (year inside each tag)
- **Marks:** not printed

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"); Part A of the book indexed in `../Standard Pattern/`. A faint logo watermark sits behind the text and hides nothing.
- Questions and exam tags are verbatim (tag spelling as printed, e.g. post abbreviations AME, AP, SAE, AE(CSE), ANE). Typos in questions are kept.
- Q11: only the P_0 and P_1 rows of the Need matrix are printed and page 8 starts a new section, so P_2–P_4 are missing in the source (Max − Allocation gives 6 0 0, 0 1 1, 4 3 1). The question asked is not printed (the textbook version asks for the safe sequence).
- Q11 prints "Snapshot at time $T_0$:" with raw LaTeX dollar signs.

## Content

3. When does deadlock occur and how to prevent it? *[45th BCS, ICT 2024]*
4. Explain Circular wait deadlock. *[Titas Gas AE(CSE) 2024]*
5. Deadlock এর চারটি শর্ত লিখ। *[BTCL, JAM 2024]*
6. What is deadlock in operating system (OS)? What are the four necessary and sufficient conditions behind deadlock? *[BPSC AP 2023, Milk Vita AM(CSE) 2023]*
7. A system has P processes each needing a maximum of m resources and a total of r resources available. Which conditions must hold to make the system deadlock free? *[BPSC AP 2023]*
8. Name and define characteristics properties of the Deadlock situation in a computer system. *[BPSC, AP 2022]*
9. Describe how deadlock is possible with the dining-philosopher's problem. *[BPSC AME 2021]*
10. What is deadlock? Describe the way of detecting and protecting deadlock. *[38th BCS]*
11. Banker's Algorithm: 5 processes P_0 through P_4; 3 resource types A (10 instances), B (5 instances), and C (7 instances). *[RAKUB ME 2021]*
    - Snapshot at time $T_0$:

    | Process | Allocation (A B C) | Max (A B C) | Available (A B C) |
    |---|---|---|---|
    | P_0 | 0 1 0 | 7 5 3 | 3 3 2 |
    | P_1 | 2 0 0 | 3 2 2 | |
    | P_2 | 3 0 2 | 9 0 2 | |
    | P_3 | 2 1 1 | 2 2 2 | |
    | P_4 | 0 0 2 | 4 3 3 | |

    The content of the matrix. Need is defined to be Max – Allocation.

    | Process | Need (A B C) |
    |---|---|
    | P_0 | 7 4 3 |
    | P_1 | 1 2 2 |
