# Handwritten revision notes for the past exam questions

The **question** side of this folder is the photographed sheets (`BCS/`, `BANK/`, `DLD/`, `VIVA/`, …) regrouped by
subject in [`by-subject/`](by-subject/). This file is the **answer side**: the handwritten A4 revision notebooks
built from those same questions, kept here so a question and its worked notebook sit in the same folder.

PDFs are in [`notes-pdf/`](notes-pdf/). The live, in-app versions of every note set (with a web viewer and
downloads) live in [`../public/notes/`](../public/notes/).

---

## Exam-question note sets (PYQ)

Solved-past-question notebooks, each built from the actual questions in this folder and tagged to the subject file
it answers. From `pyq-dbms` on, **every question on a sheet names the exams it was asked in** (canonical names from
[`exam-tags.json`](exam-tags.json)), and the sets are built with `/pyq-notes <SUBJECT>`.

### `pyq-dbms` — Database Systems: Solved Past Questions

[handwritten PDF (16 sheets)](notes-pdf/pyq-dbms.en.pdf) · [বাংলা](notes-pdf/pyq-dbms.bn.pdf) ·
[cover](notes-pdf/pyq-dbms.en.cover.jpg) · [typed PDF](notes-pdf/pyq-dbms.en.note.pdf) ·
[answers this subject →](by-subject/16_DBMS.md) · plan: `docs/superpowers/specs/2026-10-15-pyq-dbms-plan.md`

Built from 179 distinct DBMS questions asked across 58 exams; 27 numbered past questions, 6 inline ones and
10 MCQs, each with its "Asked in" exams. Every query was run against the sample rows on sheet 2. Sheets 13–15 (added
2026-10-25, plan `docs/superpowers/specs/2026-10-25-pyq-dbms-book-sheets-plan.md`) solve the 17 Super ICT book questions,
which print no exam, so their cards carry a "Source" line instead; their queries were run on the rows printed on sheet 13.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–3 | SQL I: GROUP BY, HAVING, aggregates · SQL II: subqueries vs an average |
| 4 | SQL II: Nth-highest salary · SQL III: self-joins (manager queries) |
| 5 | SQL III: multi-table joins (APSCL, BAPEX, NWPGCL) |
| 6–7 | SQL III–IV: anti-join, create/insert/update/delete, duplicates, top 10 %, predict-the-output |
| 8 | Views, triggers, DDL/DML/DCL/TCL |
| 9 | ER notation and mapping rules (M:N, weak entity) |
| 10 | Worked ERD (18th NTRCA Worker/Building) · keys |
| 11 | DBMS concepts and architecture · transactions and ACID |
| 12 | Normalization, indexing, distributed DB, NoSQL · night-before sheet |
| 13 | Book drills I: highest / 2nd highest / duplicate salaries · self-joins (Super ICT book) |
| 14 | Book drills II: department with the highest average · ten practice problems (ALL/ANY, DENSE_RANK, NOT EXISTS) |
| 15 | Book drills III: library ER diagram · aptitude-test schema · wording → SQL pattern table |
| 16 | Practice MCQs (asked ones first) · written "Analyze the SQL" answer |

### `pyq-os` — Operating System: Solved Past Questions

[handwritten PDF (19 sheets)](notes-pdf/pyq-os.en.pdf) · [বাংলা](notes-pdf/pyq-os.bn.pdf) ·
[cover](notes-pdf/pyq-os.en.cover.jpg) · [typed PDF](notes-pdf/pyq-os.en.note.pdf) ·
[answers this subject →](by-subject/18_OS.md) · plan: `docs/superpowers/specs/2026-10-15-pyq-os-plan.md`

Built from 149 distinct OS questions asked across 58 exams; 47 numbered past questions and 10 MCQs, 136 exam
citations, each checked against `by-subject/questions.json`. Every numerical (LRU traces, Banker's, Gantt charts,
paging, disk pack) was recomputed by script; the Linux text commands were run on the sample folder on sheet 7.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–3 | Memory I–II: paging vs segmentation, swapping, fragmentation · virtual memory, page fault, thrashing |
| 4 | Memory III: LRU trace (BPDB 2021/2024), FIFO vs LRU vs Optimal, LRU vs NRU, Belady |
| 5 | Memory IV: page count, page-table size (45th BCS), fixed partitions · Linux I: permission bits |
| 6–7 | Linux I–II: chmod 701, task → command table · tail -f, sed, grep, wc, history |
| 8 | Linux III: shell script, chained commands · Processes I: process states diagram |
| 9–10 | Processes II–III: PCB, context switch, threads · multitasking vs multiprocessing, race condition, producer–consumer |
| 11–13 | Deadlock I–III: four conditions, scenarios, not-sufficient example · handling, Banker's · P(m − 1) + 1 ≤ r |
| 13–15 | Scheduling I–III: schedulers, preemptive vs non-preemptive · FCFS/SJF/RR, priority · six-process Gantt charts |
| 16–17 | OS concepts: kernel vs shell, micro vs monolithic kernel, real-time, memory hierarchy · RAID levels |
| 18 | RAID recovery · blocking vs buffering, disk pack · night-before sheet |
| 19 | Practice MCQs (49th BCS first) · written SJF Gantt-chart answer |

### `pyq-dsa` — Data Structures and Algorithms: Solved Past Questions

[handwritten PDF (23 sheets)](notes-pdf/pyq-dsa.en.pdf) · [বাংলা](notes-pdf/pyq-dsa.bn.pdf) ·
[cover](notes-pdf/pyq-dsa.en.cover.jpg) · [typed PDF](notes-pdf/pyq-dsa.en.note.pdf) ·
[answers this subject →](by-subject/15_DSA.md) · plan: `docs/superpowers/specs/2026-10-15-pyq-dsa-plan.md`

Built from 165 distinct DSA questions asked across 62 exams; 59 numbered past questions and 10 MCQs, 136 exam
citations, each checked against `by-subject/questions.json`. Every algorithm was run on the sample printed on its
sheet (tree rebuilds, heaps, sorts, BFS/DFS, Dijkstra, Kruskal, B+ tree, circular queue, Kadane, equilibrium).

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–5 | Trees I–IV: node counts, full-tree proof, array form · rebuild from traversals (45th BCS, BPDB/BUET, APSCL, Petrobangla) · BST operations · B-tree, B+ tree (BUET) |
| 6–8 | Sorting I–III: complexity table · bubble, quick sort (worst case) · merge sort, linear merge, selection sort |
| 9–11 | Graphs I–III: BFS vs DFS · adjacency list vs matrix, Dijkstra · Kruskal |
| 11–12 | Linked list: array vs linked list (5 exams), types, binary search on a list, D&C on lists |
| 13–14 | Stack and queue: stack vs queue, operations, enqueue, circular queue (38th BCS), queue from two stacks |
| 14–15 | Heap: properties, heapsort, building heaps · heap vs merge vs insertion sort |
| 15–16 | Searching: linear vs binary, recurrence · hashing, blind vs informed search |
| 17–19 | Design I–III: D&C vs DP, Fibonacci · greedy, Huffman, interval scheduling · NP, minimax, IDA* |
| 20–21 | Infix/prefix/postfix with a stack trace, Tower of Hanoi · basics, Kadane, equilibrium index |
| 22 | Night-before sheet: formulas, the 49th BCS MCQs, operation costs |
| 23 | Practice MCQs (49th BCS first) · written tree-from-traversals answer |

### `pyq-ai` — Artificial Intelligence: Solved Past Questions

[handwritten PDF (12 sheets)](notes-pdf/pyq-ai.en.pdf) · [cover](notes-pdf/pyq-ai.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-ai.en.note.pdf) ·
[answers this subject →](by-subject/19_AI.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | Machine Learning: three paradigms |
| 3 | Reinforcement learning: policy, reward, ε-greedy · Local search: hill climbing & random search |
| 4 | Intelligent & rational agents |
| 5 | Heuristic (A\*) vs blind (BFS) search |
| 6 | High training / low test accuracy · Weak vs strong learners (ensembles) |
| 7 | Agentic AI vs traditional chatbots |
| 8 | Market basket analysis: Apriori |
| 9 | Deep learning, backpropagation, RNN · NLP |
| 10 | MCQs asked (49th BCS ICT-281, 2025) · Viva rapid-fire (bank IT vivas) |
| 11 | Night-before-the-exam sheet |
| 12 | Practice MCQs |

### `pyq-eln` — Electronics, Circuits & Physics: Solved Past Questions

[handwritten PDF (10 sheets)](notes-pdf/pyq-eln.en.pdf) · [cover](notes-pdf/pyq-eln.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-eln.en.note.pdf) ·
[Basic Electronics →](by-subject/05_ELN.md) · [Electrical Circuits →](by-subject/03_EC.md) ·
[Basic Physics →](by-subject/01_PHY.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | n-channel JFET: working principle & regions |
| 3 | BJT: cut-off, active & saturation regions |
| 4 | Counter-type (digital-ramp) ADC |
| 5 | Electronic devices MCQs asked · Filters |
| 6 | Circuits: solved past questions |
| 7 | Physics: E vs B field · Coulomb's law · Gauss's law |
| 8 | Maxwell's equations · Waves & quantum MCQs asked |
| 9 | Night-before-the-exam sheet |
| 10 | Practice MCQs (exam pattern) |

### `pyq-net-written` — Computer Networking: Solved Past Questions

[handwritten PDF (31 sheets)](notes-pdf/pyq-net-written.en.pdf) · [বাংলা](notes-pdf/pyq-net-written.bn.pdf) ·
[cover](notes-pdf/pyq-net-written.en.cover.jpg) · [typed PDF](notes-pdf/pyq-net-written.en.note.pdf) ·
[answers this subject →](by-subject/09_NET.md) · plan: `docs/superpowers/specs/2026-10-19-pyq-net-written-plan.md`

Written past questions on addressing, subnetting, OSI/TCP-IP, devices, TCP/UDP, routing, topology, media,
IPv6 and error control, each with its "Asked in" exams (audited 2026-10-25; the security and crypto questions
are a separate companion set). Every subnetting and delay answer was computed by script.

| Sheet | Covers |
|---|---|
| 1 | Cover |
| 2 | IP classes |
| 3 | Private / special / static-dynamic |
| 4 | Subnet mask & CIDR |
| 5 | Subnetting worked /25-/28 |
| 6 | Subnetting worked /8-/23 |
| 7 | Equal subnets + VLSM |
| 8 | Supernet + routing table |
| 9 | IP protocols + binary + MCQs |
| 10 | OSI model |
| 11 | OSI functions + devices + MCQs |
| 12 | TCP/IP model |
| 13 | OSI vs TCP/IP |
| 14 | Network devices |
| 15 | Switching |
| 16 | TCP/UDP |
| 17 | Congestion + numericals |
| 18 | Routing |
| 19 | Topology I |
| 20 | Topology II (formulas) |
| 21 | Transmission media |
| 22 | Delay/throughput numericals |
| 23 | Network types |
| 24 | IPv4 vs IPv6 |
| 25 | IPv6 details |
| 26 | Data communication basics |
| 27 | Error detection |
| 28 | Wireless |
| 29 | Casting + misc |
| 30 | Night before |
| 31 | Practice |

### `pyq-net-viva` — Viva Questions Solved: Networking & Security

[handwritten PDF (12 sheets)](notes-pdf/pyq-net-viva.en.pdf) · [cover](notes-pdf/pyq-net-viva.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-net-viva.en.note.pdf) ·
[answers this subject →](by-subject/09_NET.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | OSI & TCP/IP reference models |
| 3 | Network devices & their OSI layers |
| 4 | Topologies & network types · Transmission media & Ethernet |
| 5 | IP & MAC addressing, casting · PING & troubleshooting |
| 6 | Application protocols & ports |
| 7 | VLAN, VPN & Active Directory · Bank WAN, routing & ATM |
| 8 | Cryptography & encryption · Security principles & authentication |
| 9 | Firewalls, IDS/IPS, DMZ & honeypots |
| 10 | Phishing, malware, DoS & ethical hacking |
| 11 | Night-before-the-viva sheet |
| 12 | Practice MCQs (exam pattern) |

---

## Topic note sets

Per-topic notebooks (theory plus the asked questions). These are **not** copied into this folder — they stay in
`../notes/pdf/` and `../public/notes/` because there are 22 of them and they are not question-specific.

| Topic | Answers |
|---|---|
| `dld-logic-gates` | [DLD](by-subject/04_DLD.md) · gate-only merged view: [04_DLD_logic-gates.md](by-subject/04_DLD_logic-gates.md) |
| `dld-boolean-algebra`, `dld-number-systems`, `dld-combinational`, `dld-sequential` | [DLD](by-subject/04_DLD.md) |
| `ics-history-computing`, `ics-hardware-architecture`, `ics-software-os`, `ics-it-internet`, `ics-number-systems` | [ICS](by-subject/02_ICS.md) |
| `ec-basic-laws`, `ec-analysis-theorems`, `ec-ac-phasors` | [EC](by-subject/03_EC.md) |
| `eln-diodes`, `eln-bjt`, `eln-amplifiers-fet` | [ELN](by-subject/05_ELN.md) |
| `mpi-8086`, `mpi-memory-io-8255`, `mpi-timer-serial`, `mpi-interrupts-dma` | [MPI](by-subject/06_MPI.md) |
| `ca-cpu-organization` | [CA](by-subject/07_CA.md) |
| `ch1-basic-physics` | [PHY](by-subject/01_PHY.md) |

### `pyq-dld` — Digital Logic Design: Solved Past Questions

[handwritten PDF (18 sheets)](notes-pdf/pyq-dld.en.pdf) · [বাংলা](notes-pdf/pyq-dld.bn.pdf) ·
[cover](notes-pdf/pyq-dld.en.cover.jpg) · [typed PDF](notes-pdf/pyq-dld.en.note.pdf) ·
[answers this subject →](by-subject/04_DLD.md) · plan: `docs/superpowers/specs/2026-10-18-pyq-dld-plan.md`

Built 2026-10-18 from 299 distinct DLD questions (339 records, most from the web collections) asked across 111 exams.
48 numbered past questions, 128 more in answer tables, "Also asked" lines and quick-answer lists, and 10 practice MCQs: all 275 asked
question groups name their exam on a sheet. Every conversion, K-map and circuit answer was checked by script.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–3 | Logic gates: truth tables, XOR/XNOR, TTL vs CMOS · universal gates, XOR from 4 NAND |
| 4–5 | Number systems: conversions table, (E)₁₆, base 3/7 · fractions and mixed-base sums |
| 6–7 | 2's complement arithmetic (8-bit worked table) · BCD, ASCII, parity, Excess-3 |
| 8–10 | Boolean algebra: laws, De Morgan, proofs · 20 simplifications · truth tables and word problems |
| 11–12 | K-map: the 46th BCS / Combined Bank map · POS, don't cares, NAND–NAND |
| 13–14 | Adders, subtractor, 2's complement circuit · decoders, encoders, MUX |
| 15–16 | Latch vs flip-flop (most asked), SR/JK/D/T, race-around · ripple and MOD-N counters, FSM flip-flop count |
| 17 | Night-before sheet · traps seen in printed solutions |
| 18 | Practice MCQs (all asked) · written K-map answer with marks |

### `pyq-oop` — Object Oriented Programming: Solved Past Questions

[handwritten PDF (32 sheets)](notes-pdf/pyq-oop.en.pdf) · [বাংলা](notes-pdf/pyq-oop.bn.pdf) ·
[cover](notes-pdf/pyq-oop.en.cover.jpg) · [typed PDF](notes-pdf/pyq-oop.en.note.pdf) ·
[answers this subject →](by-subject/11_OOP.md) · plan: `docs/superpowers/specs/2026-10-19-pyq-oop-plan.md`

Built 2026-10-19 from 207 distinct OOP questions (231 records) asked across 88 exams. 73 question cards and
14 table/practice MCQs: all 147 asked question groups name their exam on a sheet. Every C++, Java and Python
program on the sheets was compiled and run (clang via zig, JDK 21, Python 3.14); outputs shown are real.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–4 | OOP and the four pillars · concepts in one program, C++ as OOP · structured vs OOP |
| 5–7 | Class and object · designing a class (circle, WASA fix) · student program, struct vs class, inner class, inheritance modes |
| 8–9 | Encapsulation and abstraction · two bank-account programs (Java, Python) |
| 10–11 | Access specifiers (Petrobangla Y/N table) · friend function, `isneg()` |
| 12–16 | Inheritance types, hybrid · diamond, constructor order · Gamma/Box/Bicycle · Employee (ICB 2026) · Account hierarchy |
| 17–19 | Polymorphism · overloading vs overriding (8 exams) · function/operator overloading, 38th BCS ambiguity |
| 20–22 | Binding and virtual functions · interfaces and the BB AP 2023 hide puzzle · ++, <<, default-method and generics traps |
| 23–25 | Constructor vs destructor · copy constructor · default constructor, `static`, ArrayList |
| 26–27 | C++ vs Java, processors, data types, Swing lambda · Java output questions (207, 200, string ==) |
| 28–31 | Short programs · threads · exceptions + OD account · Facade pattern, company model |
| 32 | Night-before sheet · practice MCQs (all asked) |

### `pyq-spl` — Structured Programming (C): Solved Past Questions

[handwritten PDF (41 sheets)](notes-pdf/pyq-spl.en.pdf) · [বাংলা](notes-pdf/pyq-spl.bn.pdf) ·
[cover](notes-pdf/pyq-spl.en.cover.jpg) · [typed PDF](notes-pdf/pyq-spl.en.note.pdf) ·
[answers this subject →](by-subject/10_SPL.md) · plan: `docs/superpowers/specs/2026-10-19-pyq-spl-plan.md`

Built 2026-10-19 from 427 distinct SPL questions (495 records) asked across 162 exams. 98 question cards, 7 output
tables and 8 practice MCQs: all 328 asked question groups name their exam on a sheet. All 78 listings were compiled
and run (clang via zig, JDK 21, Python 3.14) and every output-tracing answer was produced by running the exam's code;
undefined-behaviour questions say so and give the key's expected value.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map with exam counts · how to read a card · contents |
| 2–4 | Language levels and MCQs · compiler vs interpreter (8 exams) · linker, loader, JIT, kinds of error |
| 5–8 | Algorithm, flowchart symbols · largest of three (9 exams) · GCD, LCM, factorial · structured programming |
| 9–11 | Data types, local vs global · ++i/i++, sizeof, precedence · loops, break/continue |
| 12–14 | Calculator, triangle, bills · slab tax, JDBC login · printing patterns |
| 15–20 | Series (sum, eˣ, sin x, harmonic) · digit programs, reverse, palindrome · prime, Armstrong, binary · quadratic |
| 21–24 | Call by value vs reference (most asked) · functions · recursion I (factorial), II (Fibonacci, GCD, digits) |
| 25–28 | Arrays I–III (min/max, missing number, Kadane) · matrices, selection sort, binary search |
| 29–35 | Pointers I–II · strings I–II (IP class and validation) · structure vs union · I/O, files, argv · file-records program |
| 36–40 | Find the output I–V: conditions, ++ and macros, loops, pointers and recursion, lost questions + ten traps |
| 41 | Night-before sheet · practice MCQs (all asked) |

### `pyq-ics` — Introduction to Computer Systems: Solved Past Questions

[handwritten PDF (32 sheets)](notes-pdf/pyq-ics.en.pdf) · [বাংলা](notes-pdf/pyq-ics.bn.pdf) ·
[cover](notes-pdf/pyq-ics.en.cover.jpg) · [typed PDF](notes-pdf/pyq-ics.en.note.pdf) ·
[answers this subject →](by-subject/02_ICS.md) · plan: `docs/superpowers/specs/2026-10-19-pyq-ics-plan.md`

Built 2026-10-19: all 284 asked question groups are cited in both languages (100 distinct exams). JS, regex,
Excel and numerical answers were run and the outputs shown are real. The DPDC XSS question is answered
defensively (risk and mitigations only).

| Sheet | Covers |
|---|---|
| 1 | Cover · topic map · most asked · contents |
| 2–6 | Software · generations · computer types · building blocks · CPU, GPU, bus, interrupts |
| 7–11 | Input/output devices · memory and storage · data units · BIOS, booting, CMOS |
| 12–16 | Cloud: service models · virtualization · data centre · scaling and deployment · cloud security |
| 17–22 | Web: HTML I–II · CSS · JavaScript and PHP · HTTP and protocols · hosting and deployment |
| 23–26 | Emerging tech · e-commerce and search engines · e-governance, Smart Bangladesh · digital banking |
| 27–30 | Excel · graphics transformations (BUET M.Sc.) · rapid-fire MCQs I–II |
| 31 | Night-before sheet |
| 32 | Practice MCQs + answer key |

### `pyq-mpi-ca` — Microprocessor & Computer Architecture: Solved Past Questions

[handwritten PDF (30 sheets)](notes-pdf/pyq-mpi-ca.en.pdf) · [বাংলা](notes-pdf/pyq-mpi-ca.bn.pdf) ·
[cover](notes-pdf/pyq-mpi-ca.en.cover.jpg) · [typed PDF](notes-pdf/pyq-mpi-ca.en.note.pdf) ·
answers [06_MPI.md](by-subject/06_MPI.md) and [07_CA.md](by-subject/07_CA.md) · plan: `docs/superpowers/specs/2026-10-26-pyq-mpi-ca-plan.md`

Built 2026-10-26: 67 question cards, 10 practice MCQs and a written question, with 251 exam citations audited
against the PYQ records. Every numerical (addresses, flags, assembly results, CPI, cache fields and bits, AMAT,
replacement traces, Amdahl, pipeline cycles) was recomputed by script. Faulty printed keys (8086 reset address,
memory-mapped I/O, AMAT, "147 KB" cache bits, the 47th BCS "00%" hit ratio) are answered correctly, with the
assumption stated on the sheet.

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · most asked · contents |
| 2–4 | MP basics · microprocessor vs microcontroller (9 exams) · 32/64-bit, GHz, MCU design |
| 5–8 | 8086 architecture, segmentation and reset · flag register · memory banks, 8085 vs 8086 |
| 9–11 | Addressing modes · assembly programs · MCQ drill |
| 12–14 | Interrupts, 8259, DMA · 80386, superscalar, cores · 8255, memory-mapped I/O, GPU, Amdahl |
| 15–17 | CA basics (Von Neumann vs Harvard, bus, instruction cycle) · RISC vs CISC · CA drill |
| 18–20 | CPU performance and CPI · pipelining (k + n − 1) · hazards |
| 21–23 | Memory hierarchy, SRAM vs DRAM, sizing, BIOS/CMOS, SSD |
| 24–28 | Cache: locality, write policies, mapping, 3 Cs, field split and total bits, AMAT (17 exams), LRU/FIFO and direct-mapped traces, split cache |
| 29 | Night-before sheet |
| 30 | Practice: 10 MCQs + written (cache split + AMAT) |

### `pyq-com` — Communication Theory: Solved Past Questions

[handwritten PDF (29 sheets)](notes-pdf/pyq-com.en.pdf) · [বাংলা](notes-pdf/pyq-com.bn.pdf) ·
[cover](notes-pdf/pyq-com.en.cover.jpg) · [typed PDF](notes-pdf/pyq-com.en.note.pdf) ·
[answers this subject →](by-subject/08_COM.md) · plan: `docs/superpowers/specs/2026-10-26-pyq-com-plan.md`

Built 2026-10-26: 70 question cards and 35 MCQs, plus 10 practice MCQs and a written question. All 145 exam
citations were audited against the PYQ records, and every exam in the COM data is cited at least once. Every
numerical was recomputed by script, and the line-code waveforms were generated by one. Misprinted questions
("30 dB", "3162 dB", "630 Hz", missing figures) are worked with the assumption stated on the sheet.

| Sheet | Covers |
|---|---|
| 1 | Cover |
| 2–6 | Multiplexing: TDM vs FDM vs WDM (most asked) · FDM and fibre numericals · TDM frame numericals |
| 6–9 | MUX/DEMUX circuits · sampling theorem · Shannon and Nyquist capacity, SNR |
| 10–14 | Bit rate, baud, dB, QAM · AM vs FM, FM numericals · digital modulation, BER |
| 14–17 | PCM, DM/ADM · line coding, 4B/5B · entropy and information rate |
| 18–21 | Bands, wavelength, DTMF · simplex/duplex, sync vs async · data-comm components and media |
| 22–24 | Optical fibre, splicing, power budgets · satellite, submarine cable, orbits |
| 25–27 | Mobile: GSM, LTE, GPRS, TDMA vs CDMA, 1G–5G · other questions filed under COM |
| 28 | Night-before sheet |
| 29 | Practice: 10 MCQs + written |

---

## Build status

No `pyq-*` set is left as source only: every set below has a PDF, is published in the app and has its
section above.

| Set | Sheets | State |
|---|---|---|
| `pyq-dbms`, `pyq-os`, `pyq-dsa`, `pyq-ai`, `pyq-eln`, `pyq-net-viva`, `pyq-net-written`, `pyq-dld`, `pyq-oop`, `pyq-spl`, `pyq-ics`, `pyq-mpi-ca`, `pyq-com` | — | **built, published, in `notes-pdf/`** (`pyq-se` is published in the app too) |

Every PYQ set with a draft is now built and published.