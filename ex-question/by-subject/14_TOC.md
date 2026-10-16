# Theory of Computation (TOC): past exam questions

Every question from the photographed sheets, books and PDFs in `ex-question/` that belongs to this subject. The same question asked in several exams, or printed in several sources, is shown once. For each question you get **where it was asked** (the exams, with names normalised in `../exam-tags.json`) and **where it was taken from** (each source document, linked to its transcription and image).

- **Distinct questions:** 48 (from 48 records: Study note 1, Written 29, MCQ 18)
- **Exams it appears in:** 25
- **Corrections to printed answers:** 1
- **How counts work:** "Asked in (N)" counts different government/public-sector recruitment exams (BCS, NTRCA, BPSC, state banks, public bodies) and BUET M.Sc. admission tests. Private-bank exams and compiled viva experiences are listed but not counted. Coaching suggestion sheets and model tests never add to the count.

## Most-asked topics

| # | Topic | Exams | Questions | Viva mentions |
|---|---|---|---|---|
| 1 | [Other](#other) | 21 | 42 | 0 |
| 2 | [Lexical analysis (tokens)](#lexical-analysis-tokens) | 1 | 1 | 0 |
| 3 | [Regular expressions](#regular-expressions) | 1 | 1 | 0 |
| 4 | [Bangla grammar (কারক-বিভক্তি, বানান, সন্ধি) and literature (first female novelist)](#bangla-grammar-করক-বভকত-বনন-সনধ-and-literature-first-female-novelist) | 1 | 1 | 0 |
| 5 | [Context-free grammar](#context-free-grammar) | 1 | 1 | 0 |
| 6 | [Grammar: conditionals, future perfect, inversion (hardly), subject-verb agreement, had better, connectors, articles, prepositions, subjunctive](#grammar-conditionals-future-perfect-inversion-hardly-subject-verb-agreement-had-better-connectors-articles-prepositions-subjunctive) | 1 | 1 | 0 |
| 7 | [Course outline: compiler design, previous questions, model tests](#course-outline-compiler-design-previous-questions-model-tests) | 0 | 1 | 0 |

## Most-asked questions

Ranked by the number of exams, with recent exams (2022 onwards) weighted higher.

1. **How many tokens does the lexical analyzer generate for the C statement Power=bpdb*(nuclear+coal+hydro) (ignore spaces)?**  
   Asked in (1): BPDB AE(CSE) 2023  
   Source: BPDB Assistant Engineer (CSE) (BUET) (2023-02-24) — see [G0149](#g0149)
2. **Which regex denotes binary strings having two consecutive 0s and two consecutive 1s? (a) (0+1)*0011(0+1)*+(0+1)*1100(0+1)* (b) (0+1)*(00(0+1)*11+11(0+1)*00)(0+…**  
   Asked in (1): BPDB AE(CSE) 2023  
   Source: BPDB Assistant Engineer (CSE) (BUET) (2023-02-24) — see [G0153](#g0153)
3. **Bangla grammar and literature MCQs (transcription partly garbled).**  
   Asked in (1): Petrobangla AE 2022  
   Source: Petrobangla Assistant Engineer (2022-12-16) — see [G0836](#g0836)
4. **Problem A can be reduced to problem B in polynomial time, which problem is harder and why?**  
   Asked in (1): Titas Gas AE(CSE) 2024  
   Source: duranta.app question bank (coaching compilation of the question paper) — Titas Gas Assistant Engineer (CSE) 24/05/2024 — see [G2186](#g2186)
5. **Construct FA on {0, 1} which accepts even number of 1's and even number of 0's?**  
   Asked in (1): JBL ANE 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20 — see [G3037](#g3037)
6. **Draw DFA of a string with at least two b's.**  
   Asked in (1): Combined Bank SO(IT) 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 15 — [Senior Officer (IT)-SBL, BDBL 2022 CTI] — 31.01.2022 — Exam taker: CTI — "5*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks" (as printed, IT figure cut) — pages 23–25 — see [G3073](#g3073)
7. **Consider the grammar: E → E + E | E * E | id Show that the grammar is ambiguous for the string: id + id * idT**  
   Asked in (1): Combined Bank SO(IT) 2026  
   Source: duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Senior Officer (IT), Grade-9 (Job ID-25104) — 25/07/2026 — Exam taker: not printed — Time 2 hours, Marks 200 (IT: 15×10 = 150) — pages 1–12 — see [G3612](#g3612)
8. **Why pumping lemma is only used for negative proofing?**  
   Asked in (1): BUET M.Sc. April 2024  
   Source: Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024 — see [G3949](#g3949)
9. **Predictive parsing cell entry in A ->∞ and A->∈. Describe it in terms of First and Follow.**  
   Asked in (1): BUET M.Sc. April 2024  
   Source: Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024 — see [G3956](#g3956)
10. **Define P and NP classes. Differentiate between approximation and heuristic algorithm.**  
   Asked in (1): BUET M.Sc. April 2024  
   Source: Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024 — see [G3959](#g3959)
11. **What output will be generated by the compiler after lexical and syntax analyses, respectively? (ক) Tokens and a parse tree (খ) A parse tree and tokens (গ) A Sy…**  
   Asked in (1): 49th BCS CSE (2025)  
   Source: Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025 — see [G3987](#g3987)
12. **Which optimization technique is not used for eliminating redundant codes? (ক) Dead code elimination (খ) Partial redundancy elimination (গ) Common subexpression…**  
   Asked in (1): 49th BCS CSE (2025)  
   Source: Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025 — see [G4014](#g4014)
13. **Which phase in the compiler design performs data type checking? A. Lexical analysis (খ) Syntax analysis (গ) Semantic analysis (ঘ) Code generation**  
   Asked in (1): 49th BCS CSE (2025)  
   Source: Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025 — see [G4018](#g4018)
14. **Which one is true for a DFA? (ক) DFA can have ε-transitions (খ) DFA accepts all context-free languages (গ) DFA accepts regular languages (ঘ) DFA can have multi…**  
   Asked in (1): 49th BCS CSE (2025)  
   Source: Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025 — see [G4028](#g4028)
15. **Pushdown automata (PDA) is equivalent in power to: (ক) regular expressions (খ) context-free grammars (গ) context-sensitive grammars (ঘ) Turing machines**  
   Asked in (1): 49th BCS CSE (2025)  
   Source: Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025 — see [G4035](#g4035)
16. **Travelling Salesperson Problem is an example of - Polynomial -time / Np-Complete / NP / NP- Hard Printed answer: NP- Hard**  
   Asked in (1): BPSC AME 2022  
   Source: Question paper found on the web (see the folder README for the URL) — BPSC — various ministries (general pool), Assistant Maintenance Engineer — Screening MCQ, 24.05.2022 — Exam taker: BPSC (not shown on page) — 100 MCQ — Computer & ICT items 1–15 (site order) — see [G4515](#g4515)
17. **Define a context-free grammar with examples.**  
   Asked in (1): PGCB AE(CSE) 2021  
   Source: PGCB Assistant Engineer (CSE) (BUET) (2021-09-30) — see [G0178](#g0178)
18. **Draw a DFA diagram to identify all the valid file names. Note that a file name can be a non- empty string starting with underscore or alphanumeric only.**  
   Asked in (1): JBL ASA 2021  
   Source: duranta.app question bank (coaching compilation of the question paper) — 07 — Assistant System Administrator (ASA)-JBL — 01.12.2021 — Exam taker: not printed — IT: 15*10 marks + Non - IT: 4*10 marks + GK: 2*5 marks — pages 12–14 — see [G2974](#g2974)
19. **Why left empty strings have to be eliminated to build a parser**  
   Asked in (1): BUET M.Sc. October 2018  
   Source: Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018 — see [G3736](#g3736)
20. **Draw DFA of words ending with two a’s only, that is ‘aa’ for grammar {a,b}**  
   Asked in (1): BUET M.Sc. October 2018  
   Source: Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018 — see [G3737](#g3737)

## Coaching "standard pattern" topics (not counted)

Topics the Bit to Exabyte question book lists as its standard pattern for this subject (from `../Standard Pattern/`). They show what the coaching expects, not what was asked.

- 44. DFA vs NFA; regular vs context-free language — [Standard Pattern/03_super-ict-index-p3-q39-63.md](../Standard%20Pattern/03_super-ict-index-p3-q39-63.md)
- 87. Ambiguous grammar for id + id * id — [Standard Pattern/05_super-ict-index-p5-q86-109.md](../Standard%20Pattern/05_super-ict-index-p5-q86-109.md)
- 88. NFA to DFA; DFA for exactly three 1s; DFA for substring 110; flip-flops for 10 states — [Standard Pattern/05_super-ict-index-p5-q86-109.md](../Standard%20Pattern/05_super-ict-index-p5-q86-109.md)

## All questions by topic

## Other

<a id="g2186"></a>

### Problem A can be reduced to problem B in polynomial time, which problem is harder and why? <sub>G2186</sub>

*Written*

Problem A can be reduced to problem B in polynomial time, which problem is harder and why?

- **Asked in (1):** Titas Gas AE(CSE) 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Titas Gas Assistant Engineer (CSE) 24/05/2024, Q1(c) — [duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md](../duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md)

<a id="g3037"></a>

### Construct FA on {0, 1} which accepts even number of 1's and even number of 0's? <sub>G3037</sub>

*Written*

Construct FA on {0, 1} which accepts even number of 1's and even number of 0's?

- **Asked in (1):** JBL ANE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3073"></a>

### Draw DFA of a string with at least two b's. <sub>G3073</sub>

*Written*

Draw DFA of a string with at least two b's.

- **Asked in (1):** Combined Bank SO(IT) 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 15 — [Senior Officer (IT)-SBL, BDBL 2022 CTI] — 31.01.2022 — Exam taker: CTI — "5*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks" (as printed, IT figure cut) — pages 23–25, Q14 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3612"></a>

### Consider the grammar: E → E + E | E * E | id Show that the grammar is ambiguous for the s… <sub>G3612</sub>

*Written*

Consider the grammar: E → E + E | E * E | id Show that the grammar is ambiguous for the string: id + id * idT

- **Asked in (1):** Combined Bank SO(IT) 2026
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) — Senior Officer (IT), Grade-9 (Job ID-25104) — 25/07/2026 — Exam taker: not printed — Time 2 hours, Marks 200 (IT: 15×10 = 150) — pages 1–12, Q20 — [duranta/1785328629-so-it-job-id-25104/1785328629.md](../duranta/1785328629-so-it-job-id-25104/1785328629.md)

<a id="g3949"></a>

### Why pumping lemma is only used for negative proofing? <sub>G3949</sub>

*Written*

Why pumping lemma is only used for negative proofing?

- **Asked in (1):** BUET M.Sc. April 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024, Q2 — [buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md](../buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md)

<a id="g3956"></a>

### Predictive parsing cell entry in A ->∞ and A->∈. Describe it in terms of First and Follow. <sub>G3956</sub>

*Written*

Predictive parsing cell entry in A ->∞ and A->∈. Describe it in terms of First and Follow.

- **Asked in (1):** BUET M.Sc. April 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024, Q9 — [buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md](../buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md)

<a id="g3959"></a>

### Define P and NP classes. Differentiate between approximation and heuristic algorithm. <sub>G3959</sub>

*Written*

Define P and NP classes. Differentiate between approximation and heuristic algorithm.

- **Asked in (1):** BUET M.Sc. April 2024
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2024, Q12 — [buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md](../buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md)

<a id="g3987"></a>

### What output will be generated by the compiler after lexical and syntax analyses, respecti… <sub>G3987</sub>

*MCQ*

What output will be generated by the compiler after lexical and syntax analyses, respectively? (ক) Tokens and a parse tree (খ) A parse tree and tokens (গ) A Syntax tree and intermediate codes (ঘ) Tokens and error messages

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q114 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4014"></a>

### Which optimization technique is not used for eliminating redundant codes? (ক) Dead code e… <sub>G4014</sub>

*MCQ*

Which optimization technique is not used for eliminating redundant codes? (ক) Dead code elimination (খ) Partial redundancy elimination (গ) Common subexpression elimination (ঘ) Constant folding

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q141 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4018"></a>

### Which phase in the compiler design performs data type checking? A. Lexical analysis (খ) S… <sub>G4018</sub>

*MCQ*

Which phase in the compiler design performs data type checking? A. Lexical analysis (খ) Syntax analysis (গ) Semantic analysis (ঘ) Code generation

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q145 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4028"></a>

### Which one is true for a DFA? (ক) DFA can have ε-transitions (খ) DFA accepts all context-f… <sub>G4028</sub>

*MCQ*

Which one is true for a DFA? (ক) DFA can have ε-transitions (খ) DFA accepts all context-free languages (গ) DFA accepts regular languages (ঘ) DFA can have multiple transitions for the same input from a state

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q155 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4035"></a>

### Pushdown automata (PDA) is equivalent in power to: (ক) regular expressions (খ) context-fr… <sub>G4035</sub>

*MCQ*

Pushdown automata (PDA) is equivalent in power to: (ক) regular expressions (খ) context-free grammars (গ) context-sensitive grammars (ঘ) Turing machines

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q162 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g4515"></a>

### Travelling Salesperson Problem is an example of - Polynomial -time / Np-Complete / NP / N… <sub>G4515</sub>

*MCQ*

Travelling Salesperson Problem is an example of - Polynomial -time / Np-Complete / NP / NP- Hard Printed answer: NP- Hard

- **Asked in (1):** BPSC AME 2022
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BPSC — various ministries (general pool), Assistant Maintenance Engineer — Screening MCQ, 24.05.2022 — Exam taker: BPSC (not shown on page) — 100 MCQ — Computer & ICT items 1–15 (site order), SA-ICT 10 — [ministry-ap-web/2022-bpsc-ame-various-ministries-mcq/bpsc-ame-2022-mcq.md](../ministry-ap-web/2022-bpsc-ame-various-ministries-mcq/bpsc-ame-2022-mcq.md)

<a id="g2974"></a>

### Draw a DFA diagram to identify all the valid file names. Note that a file name can be a n… <sub>G2974</sub>

*Written*

Draw a DFA diagram to identify all the valid file names. Note that a file name can be a non- empty string starting with underscore or alphanumeric only.

- **Asked in (1):** JBL ASA 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 07 — Assistant System Administrator (ASA)-JBL — 01.12.2021 — Exam taker: not printed — IT: 15*10 marks + Non - IT: 4*10 marks + GK: 2*5 marks — pages 12–14, Q12 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3736"></a>

### Why left empty strings have to be eliminated to build a parser <sub>G3736</sub>

*Written*

Why left empty strings have to be eliminated to build a parser

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q3 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g3737"></a>

### Draw DFA of words ending with two a’s only, that is ‘aa’ for grammar {a,b} <sub>G3737</sub>

*Written*

Draw DFA of words ending with two a’s only, that is ‘aa’ for grammar {a,b}

- **Asked in (1):** BUET M.Sc. October 2018
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2018, Q4 — [buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md](../buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md)

<a id="g3770"></a>

### Construct NFA that accepts binary strings having odd number of 1's or even number of 0's. <sub>G3770</sub>

*Written*

Construct NFA that accepts binary strings having odd number of 1's or even number of 0's.

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q10 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g3777"></a>

### Draw relationship diagram for P, NP, NP hard and Np complete. <sub>G3777</sub>

*Written*

Draw relationship diagram for P, NP, NP hard and Np complete.

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q17 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g3779"></a>

### Elimination of left recursion. <sub>G3779</sub>

*Written*

Elimination of left recursion.

- **Asked in (1):** BUET M.Sc. May 2019
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2019, Q19 — [buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md](../buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md)

<a id="g3813"></a>

### What language does the following deterministic finite automaton (DFA) accept? [Figure: st… <sub>G3813</sub>

*MCQ*

What language does the following deterministic finite automaton (DFA) accept? [Figure: start q0 (loop on 1) --0--> q2 (loop on 0) --1--> q1 (accepting, loop on 0,1)] (a) The set of all binary strings that start with a 1 (b) The set of all binary strings with equal number of 0s and 1s (c) The set of all binary strings with a 01 substring (d) All of the above

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q1 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3818"></a>

### Which one of the following is (are) not true? (i) A basic block is a sequence of instruct… <sub>G3818</sub>

*MCQ*

Which one of the following is (are) not true? (i) A basic block is a sequence of instructions where control enters the sequence at the beginning and exits at the end. (ii) Expression analysis can be used for common subexpression elimination. (iii) Live variable analysis can be used for dead code elimination. (a) (i) and (ii) (b) (i) and (iii) (c) (i), (ii) and (iii) (d) None of the above

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q6 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3819"></a>

### Which of the following context-free grammars (CFG) generates all palindromes over the bin… <sub>G3819</sub>

*MCQ*

Which of the following context-free grammars (CFG) generates all palindromes over the binary alphabet of length at least one? (a) P → 1P1 | 0P0 | 00 | 11 | 0 | 1 (b) P → 1P1 | 0P0 | 0 | 1 (c) P → 1P1 | 0P0 | 00 | 11 | ε (d) P → 1P1 | 0P0 | 0 | 1 | ε

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q7 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3820"></a>

### In certain programming languages, an identifier consists of a letter following by any num… <sub>G3820</sub>

*MCQ*

In certain programming languages, an identifier consists of a letter following by any number of letters or digits. If L and D denote the sets of letters and digits respectively, which of the following expressions correctly defines an identifier? (a) L(L.D)* (b) (L.D)* (c) L(L ∪ D)* (d) (L ∪ D)⁺

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q8 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3826"></a>

### Which of the following regular expressions describe the set of all binary strings contain… <sub>G3826</sub>

*MCQ*

Which of the following regular expressions describe the set of all binary strings containing at least one 0 and at least one 1? (‘∪’ is analogous to ‘+’) (a) 0*1* (b) (0⁺1⁺) ∪ (1⁺0⁺) (c) 0⁺1⁺ (d) (0|1)*((01)|(10))(0|1)*

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q14 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3828"></a>

### Which of the following correctly portrays the number of states in the parsing tables for … <sub>G3828</sub>

*MCQ*

Which of the following correctly portrays the number of states in the parsing tables for the corresponding parsing techniques? (a) States(CLR) < States(SLR) < States(LALR) (b) States(CLR) > States(SLR) = States(LALR) (c) States(CLR) = States(SLR) > States(LALR) (d) States(CLR) > States(SLR) > States(LALR)

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q16 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3830"></a>

### Which regular expression describes the language that the following non-deterministic fini… <sub>G3830</sub>

*MCQ*

Which regular expression describes the language that the following non-deterministic finite automaton (NFA) accepts? (‘∪’ is analogous to ‘+’) [Figure: start q0 (loop on 0,1) --0--> q1 --1--> q2 (accepting)] (a) (0∪1)⁺(01)* (b) (0∪1)⁺01 (c) (0∪1)*01 (d) (0∪1)*(01)*

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q18 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3832"></a>

### Which of the following is not true about Turing machines? (a) There are languages that ca… <sub>G3832</sub>

*MCQ*

Which of the following is not true about Turing machines? (a) There are languages that cannot be decided by any Turing machine (b) Turing machines read from and write to a tape of finite length (c) Turing machines can decide all regular languages (d) Turing machines can decide all context-free languages

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q20 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3833"></a>

### Eliminate left-recursion from the grammar: S → Sab | SBb | bSs | s (a) S → bSsT | sT, T →… <sub>G3833</sub>

*MCQ*

Eliminate left-recursion from the grammar: S → Sab | SBb | bSs | s (a) S → bSsT | sT, T → abT | BbT | ϵ (b) S → bSsT | T s, T → abT | BbT | ϵ (c) S → bSsT | sT, T → abT | BbT (d) None of the above

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q21 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3836"></a>

### Which of the following statements is (are) true for lexical analyzer? (i) Checks every ch… <sub>G3836</sub>

*MCQ*

Which of the following statements is (are) true for lexical analyzer? (i) Checks every character of the source text including the comments. (ii) Proceeds even if the input program is not syntactically correct. (iii) The order of definitions for keywords and identifiers is important. (a) (i) and (iii) (b) (i) and (ii) (c) (ii) and (iii) (d) (i), (ii), and (iii)

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P2-Q24 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g4122"></a>

### পার্সিং কী? টপ ডাউন পার্সিং ও বটম আপ পার্সিং সম্পর্কে লিখুন। <sub>G4122</sub>

*Written*

পার্সিং কী? টপ ডাউন পার্সিং ও বটম আপ পার্সিং সম্পর্কে লিখুন।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ২(খ) — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g4273"></a>

### State diagram of DFA using binary strings having 0 with multiple of 3 on input {0,1}. Als… <sub>G4273</sub>

*Written*

State diagram of DFA using binary strings having 0 with multiple of 3 on input {0,1}. Also showing regular expression.

- **Asked in (1):** Combined Bank AP 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 6 Banks & Financial Institutions (BSCS) — Assistant Programmer — 2021 (date conflicting: 18/03/2021 on the MCQ page; 15-01-2022 in the site's analysis page) — Exam taker: not stated — recollection (8 items), Q8 — [bank-written-web/2021-6banks-ap-itjobqns/6banks-ap-2021.md](../bank-written-web/2021-6banks-ap-itjobqns/6banks-ap-2021.md)

<a id="g1844"></a>

### Explain the functionality of a push down automata <sub>G1844</sub>

*Written*

Explain the functionality of a push down automata

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 22. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)

<a id="g2001"></a>

### Code generation ও Code optimization কী? Code generation এর প্রধান কাজগুলো কী কী? <sub>G2001</sub>

*Written*

Code generation ও Code optimization কী? Code generation এর প্রধান কাজগুলো কী কী?

- **Asked in (1):** 15th NTRCA CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–3), ৭। — [duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md](../duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md)

<a id="g2723"></a>

### Compare and Contrast among lexical analysis, syntax analysis and semantic analysis. <sub>G2723</sub>

*Written*

Compare and Contrast among lexical analysis, syntax analysis and semantic analysis.

- **Asked in (1):** 46th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 5 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2746"></a>

### Distinguish between Mealy and Moore machines <sub>G2746</sub>

*Written*

Distinguish between Mealy and Moore machines

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 2 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2828"></a>

### Explain the difference between Deterministic Finite Automata (DFA) and Non-Deterministic … <sub>G2828</sub>

*Written*

Explain the difference between Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA). Prove that for every NFA, there exists an equivalent DFA that recognizes the same language.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 7 (b) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3673"></a>

### CFG(odd length pallindrome) <sub>G3673</sub>

*Written*

CFG(odd length pallindrome)

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q23 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

<a id="g3680"></a>

### Why intermediate code generator is required between syntax analysis and semantic analysis? <sub>G3680</sub>

*Written*

Why intermediate code generator is required between syntax analysis and semantic analysis?

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q1 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g3686"></a>

### Write the regular expression which takes one or more alphanumeric character followed by e… <sub>G3686</sub>

*Written*

Write the regular expression which takes one or more alphanumeric character followed by even number of digits?

- **Asked in (1):** BUET M.Sc. April 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2017, Q7 — [buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md](../buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md)

<a id="g3727"></a>

### Context Free Grammar of Even length non empty palindromes comprising of { a , b , c } <sub>G3727</sub>

*Written*

Context Free Grammar of Even length non empty palindromes comprising of { a , b , c }

- **Asked in (1):** BUET M.Sc. October 2017
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE October 2017, Q23 — [buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md](../buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md)

<a id="g1775"></a>

### State diagram of DFA using binary strings having 0 with multiple of 3. <sub>G1775</sub>

*Written*

State diagram of DFA using binary strings having 0 with multiple of 3.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper) — Petrobangla ANE suggested questions, Q39 — [suggestion based on previous yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) · [image](../suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg)

<a id="g2366"></a>

### Explain the functionality of a push down automata. [BCS – 36th(ICT)] <sub>G2366</sub>

*Written*

Explain the functionality of a push down automata. [BCS – 36th(ICT)]

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

## Lexical analysis (tokens)

<a id="g0149"></a>

### How many tokens does the lexical analyzer generate for the C statement Power=bpdb*(nuclea… <sub>G0149</sub>

*Written*

How many tokens does the lexical analyzer generate for the C statement Power=bpdb*(nuclear+coal+hydro) (ignore spaces)?

- **Asked in (1):** BPDB AE(CSE) 2023
- **Source:**
  - BPDB Assistant Engineer (CSE) (BUET) (2023-02-24), Q1 — [BUET JOB/01_bpdb-ae-jfet-and-tokens.md](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.md) · [image](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.jpg); [BUET JOB/20_bpdb-tokens-and-linux-users.md](../BUET%20JOB/20_bpdb-tokens-and-linux-users.md) · [image](../BUET%20JOB/20_bpdb-tokens-and-linux-users.jpg); [BUET MSC/02_bpdb-assistant-engineer-questions-1-9.md](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) · [image](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.jpg)
- **Printed answer:** 11 tokens (Power, =, bpdb, *, (, nuclear, +, coal, +, hydro, )).

## Regular expressions

<a id="g0153"></a>

### Which regex denotes binary strings having two consecutive 0s and two consecutive 1s? (a) … <sub>G0153</sub>

*MCQ*

Which regex denotes binary strings having two consecutive 0s and two consecutive 1s? (a) (0+1)*0011(0+1)*+(0+1)*1100(0+1)* (b) (0+1)*(00(0+1)*11+11(0+1)*00)(0+1)* (c) (0+1)*00(0+1)*+(0+1)*11(0+1)* (d) 00(0+1)*11+11(0+1)*00

- **Asked in (1):** BPDB AE(CSE) 2023
- **Source:**
  - BPDB Assistant Engineer (CSE) (BUET) (2023-02-24), Q5 — [BUET JOB/18_regex-and-des-structure.md](../BUET%20JOB/18_regex-and-des-structure.md) · [image](../BUET%20JOB/18_regex-and-des-structure.jpg); [BUET MSC/02_bpdb-assistant-engineer-questions-1-9.md](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) · [image](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.jpg)
- **Printed answer:** (b)

## Bangla grammar (কারক-বিভক্তি, বানান, সন্ধি) and literature (first female novelist)

<a id="g0836"></a>

### Bangla grammar and literature MCQs (transcription partly garbled). <sub>G0836</sub>

*MCQ*

Bangla grammar and literature MCQs (transcription partly garbled).

- **Asked in (1):** Petrobangla AE 2022
- **Source:**
  - Petrobangla Assistant Engineer (2022-12-16), MCQ 7–9, 11–12 — [PETROBANGLA/14_mcq-assistant-engineer-cloud.md](../PETROBANGLA/14_mcq-assistant-engineer-cloud.md) · [image](../PETROBANGLA/14_mcq-assistant-engineer-cloud.jpg)
- **Printed answer:** 7: ঘ; 8: ঘ (অধিকরণে শূন্য); 9: গ; 11: ঘ; 12: ঘ

## Context-free grammar

<a id="g0178"></a>

### Define a context-free grammar with examples. <sub>G0178</sub>

*Written*

Define a context-free grammar with examples.

- **Asked in (1):** PGCB AE(CSE) 2021
- **Source:**
  - PGCB Assistant Engineer (CSE) (BUET) (2021-09-30), Q9 — [BUET JOB/03_pgcb-sae-subnet-cfg-mysql-js.md](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.md) · [image](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.jpg)
- **Printed answer:** CFG = (N, T, P, S) with productions N → (N ∪ T)*; three example grammars.
- **Correction:** The second example ({S, a, b}, {a, b}, P, S) lists a and b as both non-terminals and terminals, which breaks N ∩ T = ∅; it should be ({S}, {a, b}, P, S). The definition also misprints 'does have' for 'does not have' a context.

## Grammar: conditionals, future perfect, inversion (hardly), subject-verb agreement, had better, connectors, articles, prepositions, subjunctive

<a id="g0889"></a>

### Ten fill-in-the-blank items choosing the correct form (would have succeeded / will have c… <sub>G0889</sub>

*Written*

Ten fill-in-the-blank items choosing the correct form (would have succeeded / will have completed / had ... begun / meets / leave / however / a / in / advocate / be).

- **Asked in (1):** Bank (name cut off) AP
- **Source:**
  - Bank (name cut off, 'B... Ltd') Assistant Programmer Written, Q20 (A–J) — [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Course outline: compiler design, previous questions, model tests

<a id="g0004"></a>

### Coaching course outline, classes 28-32: compiler design and theory of computation (lexica… <sub>G0004</sub>

*Study note*

Coaching course outline, classes 28-32: compiler design and theory of computation (lexical/syntax/semantic analysis, code generation/optimization), 45th BCS written question solving, three all-subject model tests; plus registration contact block.

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - 46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch), Outline p4 (Class 28-32) — [BCS/14_course-outline-class-28-32.md](../BCS/14_course-outline-class-28-32.md) · [image](../BCS/14_course-outline-class-28-32.jpg)
