# Graph Theory (GRAPH): past exam questions

Every question from the photographed sheets, books and PDFs in `ex-question/` that belongs to this subject. The same question asked in several exams, or printed in several sources, is shown once. For each question you get **where it was asked** (the exams, with names normalised in `../exam-tags.json`) and **where it was taken from** (each source document, linked to its transcription and image).

- **Distinct questions:** 49 (from 51 records: Written 40, MCQ 11)
- **Exams it appears in:** 32
- **Corrections to printed answers:** 3
- **How counts work:** "Asked in (N)" counts different government/public-sector recruitment exams (BCS, NTRCA, BPSC, state banks, public bodies) and BUET M.Sc. admission tests. Private-bank exams and compiled viva experiences are listed but not counted. Coaching suggestion sheets and model tests never add to the count.

## Most-asked topics

| # | Topic | Exams | Questions | Viva mentions |
|---|---|---|---|---|
| 1 | [Graph types & properties](#graph-types--properties) | 13 | 16 | 0 |
| 2 | [Paths, Euler & Hamilton](#paths-euler--hamilton) | 12 | 16 | 0 |
| 3 | [Trees & spanning trees](#trees--spanning-trees) | 10 | 10 | 0 |
| 4 | [Other](#other) | 7 | 7 | 0 |

## Most-asked questions

Ranked by the number of exams, with recent exams (2022 onwards) weighted higher.

1. **Find the minimum spanning tree of the following graph using Prim's algorithm: *[Graph figure, undirected, edges as drawn: a–b 4, a–h 8, b–c 8, c–d 7, d–e 9, d–…**  
   Asked in (2): 46th BCS CSE; JBL ANE 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13) · duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20 — see [G2726](#g2726)
2. **Number of edges in the complete bipartite graph K(m,n)? (mn / m+n / m²+n² / m!n!)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0057](#g0057)
3. **The characteristic polynomial of the adjacency matrix is used to study: (chromatic number directly / graph spectra / connectivity only / planarity)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0069](#g0069)
4. **A Hamiltonian cycle must visit: (all edges once / some vertices / only leaves / all vertices once)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0092](#g0092)
5. **A simple connected planar graph with V ≥ 3 vertices, E edges, F faces satisfies: (E ≤ 3V−6 / E ≥ 3V / V+E = F / F ≤ V−2)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0104](#g0104)
6. **A tree with K leaves has at least how many vertices? (K / K−1 / K+1 / 2K)**  
   Asked in (1): 49th BCS ICT (2025)  
   Source: 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025) — see [G0124](#g0124)
7. **A pathfinding robot needs the shortest path: which algorithm would you choose, why, and what are its steps?**  
   Asked in (1): DPDC AM(ICT) 2025  
   Source: DPDC Assistant Manager (ICT) (2025-06-27) — see [G0279](#g0279)
8. **How do you find single-source shortest paths in a graph with negative weights, justify it, and how do you detect a negative-weight cycle?**  
   Asked in (1): Petrobangla AM(IT) 2022  
   Source: Petrobangla Assistant Manager (IT) (BUET) (2022-09-16) — see [G0829](#g0829)
9. **Breadth-first search (BFS) এবং Depth-first search (DFS) এর পার্থক্যগুলো লিখুন। কী কী ধরনের problems এর জন্য BFS DFS এর থেকে ভালো?**  
   Asked in (1): 45th BCS CSE (2024)  
   Source: duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3) — see [G1906](#g1906)
10. **Feasible solution এবং Optimal solution এর সংজ্ঞা দিন। একটি graph এর single-source shortest path তৈরি করার জন্য greedy algorithm-টি লিখুন।**  
   Asked in (1): 45th BCS CSE (2024)  
   Source: duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3) — see [G1914](#g1914)
11. **BFS ও DFS এর পার্থক্য লিখুন।**  
   Asked in (1): 17th NTRCA ICT (2023)  
   Source: duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3) — see [G2046](#g2046)
12. **নিম্নে বর্ণিত Adjacency ম্যাট্রিক্স A এবং B এর জন্য লেখচিত্র অংকন করুন। | 0 1 0 1 0 | | 1 0 0 1 0 | | 1 3 0 0 | (i) A = | 0 0 0 1 1 | (ii) B = | 3 0 1 1 | | 1 …**  
   Asked in (1): 17th NTRCA CSE (2023)  
   Source: duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2) — see [G2071](#g2071)
13. **Shortest path বের করা ১ থেকে ৬ এ যাবার। [directed graph: 1->2 9, 1->3 4, 3->2 4, 2->4 12, 2->5 5, 3->5 13, 5->4 3, 4->6 2, 5->6 15]**  
   Asked in (1): BTCL JAM 2024  
   Source: duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 — see [G2145](#g2145)
14. **নোড সংখ্যা N হলে edge সংখ্যা কত হবে। (What is the number of edge if node is N)**  
   Asked in (1): BTCL JAM 2024  
   Source: duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 (Set-04) — see [G2153](#g2153)
15. **Which of the following search algorithm requires less memory? ক) Optimal Search খ) Breadth-First Search গ) Depth-First Search ঘ) Linear Search**  
   Asked in (1): BPSC AME 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী রক্ষণাবেক্ষণ প্রকৌশলী ২২ — non-cadre Assistant Maintenance Engineer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 17 MCQs — pages 8–34 — see [G2587](#g2587)
16. **Find the shortest path from A to all nodes using the Dijkstra algorithm?**  
   Asked in (1): JBL ANE 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20 — see [G3033](#g3033)
17. **Write the adjacency matrix and adjacency list for the following graph, Also, calculate the in-degree and out-degrees of all vertices in the graph.**  
   Asked in (1): JBL ANA 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 14 — Assistant Network Administrator (ANA) – JBL — 25.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks=200 marks — pages 21–23 — see [G3046](#g3046)
18. **Is Bellman ford a greedy algorithm? Can all pair shortest paths (with negative cycles) be done in O (V3)?**  
   Asked in (1): Combined Bank ADA 2022  
   Source: duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26 — see [G3077](#g3077)
19. **Consider two stander representations of a directed graph, the adjacency list solved more efficiently adjacency than in the adjacency matrix representations and…**  
   Asked in (1): Combined Bank 2023  
   Source: duranta.app question bank (coaching compilation of the question paper) — 1 — Combined 5 Bank — 03.02.2023 — post not printed — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 26–28 — see [G3093](#g3093)
20. **Give an adjacency-list representation for a complete binary tree on 7 vertices. Give an equivalent adjacency-matrix representation. Assume that vertices are nu…**  
   Asked in (1): BB AP 2023  
   Source: duranta.app question bank (coaching compilation of the question paper) — 2 — Bangladesh Bank — Assistant Programmer — 03.02.2023 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (1 Hour); Written: 9 Subjective Question (150) +Math 4(20) +Focus (10) +B/E (20) — pages 28–30 — see [G3095](#g3095)

## Coaching "standard pattern" topics (not counted)

Topics the Bit to Exabyte question book lists as its standard pattern for this subject (from `../Standard Pattern/`). They show what the coaching expects, not what was asked.

- 37. BFS and DFS traversal with example graph — [Standard Pattern/02_super-ict-index-p2-q15-38.md](../Standard%20Pattern/02_super-ict-index-p2-q15-38.md)
- 115. Bipartite graph and its condition — [Standard Pattern/06_super-ict-index-p6-q110-120-descriptive.md](../Standard%20Pattern/06_super-ict-index-p6-q110-120-descriptive.md)

## All questions by topic

## Graph types & properties

<a id="g0057"></a>

### Number of edges in the complete bipartite graph K(m,n)? (mn / m+n / m²+n² / m!n!) <sub>G0057</sub>

*MCQ*

Number of edges in the complete bipartite graph K(m,n)? (mn / m+n / m²+n² / m!n!)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q3 — [BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.md](../BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.md) · [image](../BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.jpg)
- **Printed answer:** (ক) mn

<a id="g0069"></a>

### The characteristic polynomial of the adjacency matrix is used to study: (chromatic number… <sub>G0069</sub>

*MCQ*

The characteristic polynomial of the adjacency matrix is used to study: (chromatic number directly / graph spectra / connectivity only / planarity)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q15 — [BCS/59_blockchain-polynomial-suffix-tree.md](../BCS/59_blockchain-polynomial-suffix-tree.md) · [image](../BCS/59_blockchain-polynomial-suffix-tree.jpg)
- **Printed answer:** (খ) Graph spectra (eigenvalues of A)

<a id="g3046"></a>

### Write the adjacency matrix and adjacency list for the following graph, Also, calculate th… <sub>G3046</sub>

*Written*

Write the adjacency matrix and adjacency list for the following graph, Also, calculate the in-degree and out-degrees of all vertices in the graph.

- **Asked in (1):** JBL ANA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 14 — Assistant Network Administrator (ANA) – JBL — 25.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks=200 marks — pages 21–23, Q2 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3093"></a>

### Consider two stander representations of a directed graph, the adjacency list solved more … <sub>G3093</sub>

*Written*

Consider two stander representations of a directed graph, the adjacency list solved more efficiently adjacency than in the adjacency matrix representations and another problem that can be solved more efficiently in the adjacency matrix representations than in the adjacency list representations?

- **Asked in (1):** Combined Bank 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 1 — Combined 5 Bank — 03.02.2023 — post not printed — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 26–28, Q6 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3201"></a>

### Determine whether the following pair of graphs are isomorphic, and justify your answer in… <sub>G3201</sub>

*Written*

Determine whether the following pair of graphs are isomorphic, and justify your answer in one sentence (10 Marks) [Combined Bank Officer (IT) 25]

- **Asked in (1):** Combined Bank Officer(IT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Combined Bank — Officer (IT) — 17.10.2025 — Exam taker: BIBM — 80 MCQ (IT:75 + Math+GK: 25); Written: IT Question (150) + Math 4(20) + Focus(10)+B/E(20)=200 marks — pages 49–52, Q7 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3991"></a>

### The chromatic index of a bipartite graph with at least one edge is: (ক) 1 (খ) 2 (গ) 3 (ঘ)… <sub>G3991</sub>

*MCQ*

The chromatic index of a bipartite graph with at least one edge is: (ক) 1 (খ) 2 (গ) 3 (ঘ) 4

- **Asked in (1):** 49th BCS CSE (2025)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — 49th Special BCS (Education) written 2025 — Computer Science (971), question paper 2 (Q101–173 of 200), 10.10.2025, Q118 — [bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md](../bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md)

<a id="g0225"></a>

### Which is true? (a) Adjacency matrix is better for a dense graph (b) ... for a sparse grap… <sub>G0225</sub>

*MCQ*

Which is true? (a) Adjacency matrix is better for a dense graph (b) ... for a sparse graph (c) both (d) none

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q1(vi) — [BUET JOB/36_math-mcq-and-bpdb-2021.md](../BUET%20JOB/36_math-mcq-and-bpdb-2021.md) · [image](../BUET%20JOB/36_math-mcq-and-bpdb-2021.jpg); [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)
- **Correction:** No answer printed. Expected: (a).

<a id="g1305"></a>

### What is a strongly connected graph? <sub>G1305</sub>

*Written*

What is a strongly connected graph?

- **Asked in (1):** BPSC AME 2021
- **Source:**
  - Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions) — Data Structure, Q41 — [bit to exabyte/49_bte-g2-p35-data-structure-q31-43-graphs-algorithms.md](../bit%20to%20exabyte/49_bte-g2-p35-data-structure-q31-43-graphs-algorithms.md) · [image](../bit%20to%20exabyte/49_bte-g2-p35-data-structure-q31-43-graphs-algorithms.jpg)

<a id="g2592"></a>

### Which is represented by graph? a. Queue b. Stack c. Adjacency list d. Pointer <sub>G2592</sub>

*MCQ*

Which is represented by graph? a. Queue b. Stack c. Adjacency list d. Pointer

- **Asked in (1):** DoICT ANE 2019
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — DoICT ANE 2019 — Department of ICT, Assistant Network Engineer, 2019 — exam taker not printed — MCQ, marks not printed — 22 MCQs — pages 5–33, Data Structures and Algorithms Q11 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g3805"></a>

### An upazilla map represents N villages which is actually a planar graph. The 8 vertices of… <sub>G3805</sub>

*MCQ*

An upazilla map represents N villages which is actually a planar graph. The 8 vertices of that graph have degrees 4, 3, 4, 3, 3, 3, 3, 3. How many villages can be in that upazilla? (a) 8 (b) 4 (c) 6 (d) 3

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P1-Q18 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g3807"></a>

### Let G = (V,E) be a graph where V={a,b,c,d,e,f,g,h,i,j,k}. If S={a,c,g,h,k} is a maximum i… <sub>G3807</sub>

*MCQ*

Let G = (V,E) be a graph where V={a,b,c,d,e,f,g,h,i,j,k}. If S={a,c,g,h,k} is a maximum independent set in G then a minimum vertex cover can have (a) less than 5 vertices (b) more than 5 vertices (c) more than 6 vertices (d) None of the above

- **Asked in (1):** BUET M.Sc. April 2021
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE April 2021 online MCQ (24 June 2021), P1-Q20 — [buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md](../buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md)

<a id="g1954"></a>

### Node A থেকে শুরু করে নিম্নোক্ত গ্রাফটির DFS Traversal লিখুন। *[Figure: undirected graph, … <sub>G1954</sub>

*Written*

Node A থেকে শুরু করে নিম্নোক্ত গ্রাফটির DFS Traversal লিখুন। *[Figure: undirected graph, edges as drawn: A–B, B–E, E–F, F–K, A–D, D–C, C–G, G–H, H–I, I–J, A–J (long line over the top), H–J (line under the bottom row).]*

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৪ অথবা (খ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2770"></a>

### Write down the algorithm for Breadth-First Search (BFS) in graph traversal. <sub>G2770</sub>

*Written*

Write down the algorithm for Breadth-First Search (BFS) in graph traversal.

- **Asked in (1):** 46th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 7 — 46th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 13–16), 9 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2825"></a>

### prove that a graph G is chordal if and only if minimum separator of G is a clique. <sub>G2825</sub>

*Written*

prove that a graph G is chordal if and only if minimum separator of G is a clique.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 6 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2826"></a>

### Define complement of a graph. Prove that for any graph of six vertices, either the graph … <sub>G2826</sub>

*Written*

Define complement of a graph. Prove that for any graph of six vertices, either the graph of its complement contains triangle.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 6 (d) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g3657"></a>

### Draw a weighted graph using the following adjacency matrix. 0 1 2 3 0 0 1 1 0 1 0 0 0 0 2… <sub>G3657</sub>

*Written*

Draw a weighted graph using the following adjacency matrix. 0 1 2 3 0 0 1 1 0 1 0 0 0 0 2 0 1 0 0 3 0 1 0 0

- **Asked in (1):** BUET M.Sc. May 2016
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — BUET M.Sc. CSE May 2016, Q7 — [buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md](../buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md)

## Paths, Euler & Hamilton

<a id="g0092"></a>

### A Hamiltonian cycle must visit: (all edges once / some vertices / only leaves / all verti… <sub>G0092</sub>

*MCQ*

A Hamiltonian cycle must visit: (all edges once / some vertices / only leaves / all vertices once)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q44 — [BCS/45_hamiltonian-cycle-and-rnn.md](../BCS/45_hamiltonian-cycle-and-rnn.md) · [image](../BCS/45_hamiltonian-cycle-and-rnn.jpg)
- **Printed answer:** (ঘ) All vertices exactly once

<a id="g0104"></a>

### A simple connected planar graph with V ≥ 3 vertices, E edges, F faces satisfies: (E ≤ 3V−… <sub>G0104</sub>

*MCQ*

A simple connected planar graph with V ≥ 3 vertices, E edges, F faces satisfies: (E ≤ 3V−6 / E ≥ 3V / V+E = F / F ≤ V−2)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q58 — [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg); [BCS/58_euler-corollary-deadlock-insertion-sort.md](../BCS/58_euler-corollary-deadlock-insertion-sort.md) · [image](../BCS/58_euler-corollary-deadlock-insertion-sort.jpg)
- **Printed answer:** (ক) E ≤ 3V − 6 (from V − E + F = 2 and 3F ≤ 2E)

<a id="g0279"></a>

### A pathfinding robot needs the shortest path: which algorithm would you choose, why, and w… <sub>G0279</sub>

*Written*

A pathfinding robot needs the shortest path: which algorithm would you choose, why, and what are its steps?

- **Asked in (1):** DPDC AM(ICT) 2025
- **Source:**
  - DPDC Assistant Manager (ICT) (2025-06-27), Q8 — [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

<a id="g0829"></a>

### How do you find single-source shortest paths in a graph with negative weights, justify it… <sub>G0829</sub>

*Written*

How do you find single-source shortest paths in a graph with negative weights, justify it, and how do you detect a negative-weight cycle?

- **Asked in (1):** Petrobangla AM(IT) 2022
- **Source:**
  - Petrobangla Assistant Manager (IT) (BUET) (2022-09-16), Q4 — [PETROBANGLA/08_bellman-ford-negative-cycle.md](../PETROBANGLA/08_bellman-ford-negative-cycle.md) · [image](../PETROBANGLA/08_bellman-ford-negative-cycle.jpg)
- **Printed answer:** Bellman-Ford: V−1 relaxation passes suffice since a shortest simple path has ≤ V−1 edges; example graph 0→1(1),1→2(−1),2→3(−1),3→0(−1) has a negative cycle
- **Correction:** Never states the detection step: after V−1 passes run one more relaxation pass; if any distance still decreases, a negative cycle is reachable from the source (shortest paths undefined). Complexity O(VE) also missing.

<a id="g1914"></a>

### Feasible solution এবং Optimal solution এর সংজ্ঞা দিন। একটি graph এর single-source shortes… <sub>G1914</sub>

*Written*

Feasible solution এবং Optimal solution এর সংজ্ঞা দিন। একটি graph এর single-source shortest path তৈরি করার জন্য greedy algorithm-টি লিখুন।

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ৫ (খ) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)

<a id="g2145"></a>

### Shortest path বের করা ১ থেকে ৬ এ যাবার। [directed graph: 1->2 9, 1->3 4, 3->2 4, 2->4 12,… <sub>G2145</sub>

*Written*

Shortest path বের করা ১ থেকে ৬ এ যাবার। [directed graph: 1->2 9, 1->3 4, 3->2 4, 2->4 12, 2->5 5, 3->5 13, 5->4 3, 4->6 2, 5->6 15]

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024, Q7 — [duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md](../duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md)

<a id="g3033"></a>

### Find the shortest path from A to all nodes using the Dijkstra algorithm? <sub>G3033</sub>

*Written*

Find the shortest path from A to all nodes using the Dijkstra algorithm?

- **Asked in (1):** JBL ANE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20, Q1 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3077"></a>

### Is Bellman ford a greedy algorithm? Can all pair shortest paths (with negative cycles) be… <sub>G3077</sub>

*Written*

Is Bellman ford a greedy algorithm? Can all pair shortest paths (with negative cycles) be done in O (V3)?

- **Asked in (1):** Combined Bank ADA 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 16 — [ADA-SBL, JBL 2022 CTI] — 01.03.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10 marks + GK: 2*5 marks = 200 marks — pages 25–26, Q4 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3534"></a>

### Write an algorithm to detect a cycle in a directed graph. <sub>G3534</sub>

*Written*

Write an algorithm to detect a cycle in a directed graph.

- **Asked in (1):** MoFood Network/Website Manager 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 38 — খাদ্য মন্ত্রণালয়ের নেটওয়ার্ক/ওয়েবসাইট ম্যানেজার — পরীক্ষার তারিখঃ ২১.০৫.২০২৫ — exam taker not printed — সময় ৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান, টেকনিক্যাল ৮০) — pages 19–24, গ্রুপ-ক Q2 — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g0237"></a>

### What is Dijkstra's algorithm and how does it find shortest paths in a weighted graph? <sub>G0237</sub>

*Written*

What is Dijkstra's algorithm and how does it find shortest paths in a weighted graph?

- **Asked in (1):** BPDB AE(CSE) 2021
- **Source:**
  - BPDB Assistant Engineer (CSE) (2021), Q5 — [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

<a id="g0255"></a>

### Which algorithm finds single-source shortest paths in a weighted graph, and which handles… <sub>G0255</sub>

*Written*

Which algorithm finds single-source shortest paths in a weighted graph, and which handles negative edge weights?

- **Asked in (1):** BUET M.Sc.
- **Source:**
  - BUET MSc in CSE (2026-10-03), Q12 — [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)
- **Correction:** No answer printed. Dijkstra; Bellman-Ford.

<a id="g1850"></a>

### Explain how to Bellman Ford Algorithm can identify a negative cycle of a graph. <sub>G1850</sub>

*Written*

Explain how to Bellman Ford Algorithm can identify a negative cycle of a graph.

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 29. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)

<a id="g2827"></a>

### Define a graph and explain the concepts of degree, path, cycle and connectedness in an un… <sub>G2827</sub>

*Written*

Define a graph and explain the concepts of degree, path, cycle and connectedness in an undirected graph. Differentiate between Eulerian and Hamiltonian graphs with examples.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 7. (a) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g2829"></a>

### Consider the following undirected weighted graph: The shortest route is A- 1. Vertices: A… <sub>G2829</sub>

*Written*

Consider the following undirected weighted graph: The shortest route is A- 1. Vertices: A, B, C, D, E 2. Edges: A→B: 44, A→C:2, B→C:1, B→D:5, C→D:8, C→E:10, D→E:2, i. Apply Dijkstra's algorithm to find the shortest path from vertex A to all other vertices. ii. Show the step-by-step table of distance updates. iii. Determine the minimum distance from A to E.

- **Asked in (1):** 47th BCS ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 9 — 47th BCS Written, Information and Communication Technology, Subject Code 281, Time 4 hours, Full Marks 200 (pp. 18–19, cut off), 7 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

<a id="g0027"></a>

### Shortest-path question from S1 to S4 on a 5-vertex graph (stem on the preceding page; onl… <sub>G0027</sub>

*Written*

Shortest-path question from S1 to S4 on a 5-vertex graph (stem on the preceding page; only the final selected-vertices table is visible).

- **Asked in (0):** no dated exam tag on the source
- **Source:**
  - Paper not shown on the source sheet, Q3 — [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg)
- **Printed answer:** Shortest S1→S4 paths: S1→S3→S4, S1→S5→S4 or S1→S2→S4; cost = 2.

<a id="g4889"></a>

### BFS shortest path <sub>G4889</sub>

*Written*

BFS shortest path

- **Asked in (0):** no dated exam tag on the source
- **Also asked in (not counted):** IFIC Bank MTO 2025
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — IFIC Bank PLC — MTO, 17/05/2025 (practical by BUET) (suggestion), P4 — [model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md](../model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md)

## Trees & spanning trees

<a id="g2726"></a>

### Find the minimum spanning tree of the following graph using Prim's algorithm: *[Graph fig… <sub>G2726</sub>

*Written*

Find the minimum spanning tree of the following graph using Prim's algorithm: *[Graph figure, undirected, edges as drawn: a–b 4, a–h 8, b–c 8, c–d 7, d–e 9, d–f 14, e–f 10, h–i 5, i–g 6, h–g 1, g–f 2.]*

- **Asked in (2):** 46th BCS CSE; JBL ANE 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 6 — 46th BCS Written, Computer Science, Subject Code: 971, Time: 4 hours, Full Marks: 200 (pp. 9–13), 6 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)
  - duranta.app question bank (coaching compilation of the question paper) — 13 — Assistant Network Engineer (ANE)-JBL — 24.01.2022 — Exam taker: CTI — IT: 15*10 marks + Non IT: 4*10marks + GK: 2*5 marks = 200 marks — pages 19–20, Q7 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g0124"></a>

### A tree with K leaves has at least how many vertices? (K / K−1 / K+1 / 2K) <sub>G0124</sub>

*MCQ*

A tree with K leaves has at least how many vertices? (K / K−1 / K+1 / 2K)

- **Asked in (1):** 49th BCS ICT (2025)
- **Source:**
  - 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) (2025), Q78 — [BCS/53_bfs-injective-functions-tree-leaves.md](../BCS/53_bfs-injective-functions-tree-leaves.md) · [image](../BCS/53_bfs-injective-functions-tree-leaves.jpg); [BCS/57_write-ahead-logging-random-search.md](../BCS/57_write-ahead-logging-random-search.md) · [image](../BCS/57_write-ahead-logging-random-search.jpg)
- **Printed answer:** (গ) K + 1 (star tree)

<a id="g3095"></a>

### Give an adjacency-list representation for a complete binary tree on 7 vertices. Give an e… <sub>G3095</sub>

*Written*

Give an adjacency-list representation for a complete binary tree on 7 vertices. Give an equivalent adjacency-matrix representation. Assume that vertices are numbered from 1 to 7 as in a binary heap.

- **Asked in (1):** BB AP 2023
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 2 — Bangladesh Bank — Assistant Programmer — 03.02.2023 — Exam Taker: BIBM — Exam Time: 1+2 hour; 80 MCQ (1 Hour); Written: 9 Subjective Question (150) +Math 4(20) +Focus (10) +B/E (20) — pages 28–30, Q2 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g3580"></a>

### (a) Apply the Krushkal's algorithm for the following graph to find out the cost of the Mi… <sub>G3580</sub>

*Written*

(a) Apply the Krushkal's algorithm for the following graph to find out the cost of the Minimum Spanning Tree (MST). [Figure: undirected weighted graph, vertices A, B, C, D, E, F. Edges: C–A 1, C–E 4, A–E 3, A–B 8, E–B 9, E–F 9, B–F 4, B–D 5, D–F 1.]

- **Asked in (1):** Hydrocarbon Unit AD(ICT) 2025
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 39 — জ্বালানি ও খনিজ সম্পদ বিভাগের আওতাধীন হাইড্রোকার্বন ইউনিটের সহকারী পরিচালক (আইসিটি)-৯ম গ্রেড — পরীক্ষার তারিখঃ ৩০/০৫/২০২৫ — exam taker not printed — সময়ঃ ০৪ ঘণ্টা — পূর্ণমান ২০০ (বাংলা ৪০, English ৪০, সাধারণ জ্ঞান ৪০, টেকনিক্যাল ৮০) — pages 24–30, Q7(a) — [duranta/1783757387-bpsc-non-cadre-questions/1783757387.md](../duranta/1783757387-bpsc-non-cadre-questions/1783757387.md)

<a id="g2968"></a>

### Let's assume G - (V, E) be an undirected graph. Write an algorithm to find the minimum-co… <sub>G2968</sub>

*Written*

Let's assume G - (V, E) be an undirected graph. Write an algorithm to find the minimum-cost spanning tree in G

- **Asked in (1):** JBL ASA 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 07 — Assistant System Administrator (ASA)-JBL — 01.12.2021 — Exam taker: not printed — IT: 15*10 marks + Non - IT: 4*10 marks + GK: 2*5 marks — pages 12–14, Q5 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g2995"></a>

### Finding Shortest Spanning tree using Kruskal's Algorithm from the following graph. <sub>G2995</sub>

*Written*

Finding Shortest Spanning tree using Kruskal's Algorithm from the following graph.

- **Asked in (1):** Sonali Bank Officer(IT) 2021
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 08 — BSCA- Sonali Bank Limited — Officer IT — 11-12-2021 — Exam taker: CTI — Written, Marks 200 [Dept-150; non-50], Time 2 Hours — pages 14–15, Q11 — [duranta/1777536660-bank-questions-2020-2026/1777536660.md](../duranta/1777536660-bank-questions-2020-2026/1777536660.md)

<a id="g1832"></a>

### What are the differences between Graph & Tree ? What is Hamiltonian Graph ? <sub>G1832</sub>

*Written*

What are the differences between Graph & Tree ? What is Hamiltonian Graph ?

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 10. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)
  - duranta.app question bank (coaching suggestion, not a dated paper) — suggestion — 46th & 47th BCS Written Suggestions, CSE 971 & ICT 281 (BPSC technical cadre written), Duranta Career & Skills Academy, no time/marks scheme printed, pp. 1-16 — [duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md](../duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md)

<a id="g1849"></a>

### What is minimum spanning tree ? <sub>G1849</sub>

*Written*

What is minimum spanning tree ?

- **Asked in (1):** 36th BCS (2016)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — Bangladesh Civil Service – 36th (ICT), Date: 2016 — Time: 3 Hours, Full marks: 200 (pp. 1–32), 27. — [duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md](../duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md)

<a id="g1955"></a>

### দেখান যে, n সংখ্যক vertex এর একটি tree এর ঠিক n - 1 সংখ্যক edge আছে। <sub>G1955</sub>

*Written*

দেখান যে, n সংখ্যক vertex এর একটি tree এর ঠিক n - 1 সংখ্যক edge আছে।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৫ (খ) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)

<a id="g2785"></a>

### Write an algorithm to find out the second bestruinimum spanning tree (MST) from a graph <sub>G2785</sub>

*Written*

Write an algorithm to find out the second bestruinimum spanning tree (MST) from a graph

- **Asked in (1):** 47th BCS CSE
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — 8 — 47th BCS, Computer Science, Subject Code: 971, Full Marks 200, Time: 4 Hours (pp. 16–17), 3 (c) — [duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md](../duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md)

## Other

<a id="g1906"></a>

### Breadth-first search (BFS) এবং Depth-first search (DFS) এর পার্থক্যগুলো লিখুন। কী কী ধরনে… <sub>G1906</sub>

*Written*

Breadth-first search (BFS) এবং Depth-first search (DFS) এর পার্থক্যগুলো লিখুন। কী কী ধরনের problems এর জন্য BFS DFS এর থেকে ভালো?

- **Asked in (1):** 45th BCS CSE (2024)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ৪৫ তম বিসিএস সাধারণ শিক্ষা (প্রভাষক -তথ্য ও যোগাযোগ প্রযুক্তি) বিষয়ের প্রাসঙ্গিক টেকিক্যাল পদের লিখিত পরীক্ষার প্রশ্ন — কম্পিউটার সায়েন্স, বিষয় কোড – ৯৭১ (pp. 1–3), ৩. (ক) — [duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md](../duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md)

<a id="g2046"></a>

### BFS ও DFS এর পার্থক্য লিখুন। <sub>G2046</sub>

*Written*

BFS ও DFS এর পার্থক্য লিখুন।

- **Asked in (1):** 17th NTRCA ICT (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–3), ৪ (খ) — [duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md](../duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md)

<a id="g2071"></a>

### নিম্নে বর্ণিত Adjacency ম্যাট্রিক্স A এবং B এর জন্য লেখচিত্র অংকন করুন। | 0 1 0 1 0 | | 1… <sub>G2071</sub>

*Written*

নিম্নে বর্ণিত Adjacency ম্যাট্রিক্স A এবং B এর জন্য লেখচিত্র অংকন করুন। | 0 1 0 1 0 | | 1 0 0 1 0 | | 1 3 0 0 | (i) A = | 0 0 0 1 1 | (ii) B = | 3 0 1 1 | | 1 1 1 0 1 | | 0 1 2 2 | | 0 1 1 1 0 | | 0 1 2 0 |

- **Asked in (1):** 17th NTRCA CSE (2023)
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৭ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: কম্পিউটার বিজ্ঞান, বিষয় কোড : ৪৩১, পদের নাম: প্রভাষক (pp. 1–2), ৪। (ক) — [duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md](../duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md)

<a id="g2153"></a>

### নোড সংখ্যা N হলে edge সংখ্যা কত হবে। (What is the number of edge if node is N) <sub>G2153</sub>

*Written*

নোড সংখ্যা N হলে edge সংখ্যা কত হবে। (What is the number of edge if node is N)

- **Asked in (1):** BTCL JAM 2024
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — BTCL Junior Assistant Manager (Technical) 05.04.2024 (Set-04), Q8 — [duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md](../duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md)

<a id="g2587"></a>

### Which of the following search algorithm requires less memory? ক) Optimal Search খ) Breadt… <sub>G2587</sub>

*MCQ*

Which of the following search algorithm requires less memory? ক) Optimal Search খ) Breadth-First Search গ) Depth-First Search ঘ) Linear Search

- **Asked in (1):** BPSC AME 2022
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — সাধারণ পুলের আওতায় সহকারী রক্ষণাবেক্ষণ প্রকৌশলী ২২ — non-cadre Assistant Maintenance Engineer (general pool), 2022 — exam taker not printed (BPSC per document title) — MCQ, marks not printed — 17 MCQs — pages 8–34, Data Structures and Algorithms Q6 — [duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md](../duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md)

<a id="g4145"></a>

### ইলুমিনেশন ও শ্যাডিং কী? ইলুমিনেশন এর প্রধান দুইটি অংশ এবং বিভিন্ন প্রকার লাইটিং সোর্স বর্… <sub>G4145</sub>

*Written*

ইলুমিনেশন ও শ্যাডিং কী? ইলুমিনেশন এর প্রধান দুইটি অংশ এবং বিভিন্ন প্রকার লাইটিং সোর্স বর্ণনা করুণ।

- **Asked in (1):** 16th NTRCA CSE (2019)
- **Source:**
  - Question paper found on the web (see the folder README for the URL) — NTRCA 16th Written Examination-2019, Set-R — Computer Science (Subject Code-431), Post: Lecturer (College), ৮ — [ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md](../ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md)

<a id="g1953"></a>

### BFS অ্যালগরিদম উদাহরণসহ ব্যাখ্যা করুন। <sub>G1953</sub>

*Written*

BFS অ্যালগরিদম উদাহরণসহ ব্যাখ্যা করুন।

- **Asked in (1):** 15th NTRCA ICT
- **Source:**
  - duranta.app question bank (coaching compilation of the question paper) — ১৫ তম শিক্ষক নিবন্ধন লিখিত — বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি, বিষয় কোড : ৪৫২, পদের নাম: প্রভাষক (pp. 1–5), ৪ অথবা (ক) — [duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md](../duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md)
