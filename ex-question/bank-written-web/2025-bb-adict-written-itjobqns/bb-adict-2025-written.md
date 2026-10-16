# Bangladesh Bank Assistant Director (ICT), written part, 07.02.2025 — IT Job QnS recollection

- **Source:** IT Job QnS, "Previous Bangladesh Bank IT QnS (2021-2026)(এক নজরে)" — https://it.jobqns.com/previous-bangladesh-bank-it-qns-2021-2026/ (published 2026-07-07; page text saved as `previous-bangladesh-bank-it-qns-2021-2026.html.txt`), items tagged "BB, AD(ICT), 25". Non-technical items also from https://it.jobqns.com/bank-it-previous-non-technical-question/ (excerpt saved as `bank-it-previous-non-technical-question.excerpt.html.txt`).
- **Figures:** `bankers_example_bb_ad-removebg-preview.png` (the Banker's-algorithm snapshot printed with the question) and `truth_table_bb_ad_2025.png` (the site's answer table) — https://it.jobqns.com/wp-content/uploads/2025/10/bankers_example_bb_ad-removebg-preview.png, https://it.jobqns.com/wp-content/uploads/2025/05/truth_table_bb_ad_2025.png
- **Publisher:** IT Job QnS (it.jobqns.com), topic-wise question bank with the site's solutions
- **Pages:** 1 web page (8 IT written items + 1 non-technical block for this exam)
- **Document type:** exam paper (**candidates' recollection**, regrouped by topic; not an official paper)

## Transcription Notes

- **Recollection, regrouped.** The site files each item under a topic and tags it "BB, AD(ICT), 25 | Bangladesh Bank". The exam's own question numbers, order and marks are not given; the labels R1–R8 below are the order on the page. Exam date taken from the same site's MCQ page ("Exam Date: 07.02.2025") and the Bangladesh Bank result notice (written held 7 February 2025, 180 passed; Job ID 271).
- **Exam taker:** not stated on this page. The site's MCQ page says "FBS"; the Debug IT sheet in `Network/05_total-latency-delay-questions.md` says "(DU)" with date "06.02.25". Both are coaching labels — **unverified attribution**.
- Stages as far as known: MCQ part (see `../2025-bb-adict-mcq-itjobqns/`) and this written part, then viva. Marks and time are not printed anywhere found.
- R4's process table is an image; transcribed below from `bankers_example_bb_ad-removebg-preview.png`. Its totals (allocation + available = 3, 14, 12, 12) match the stated maximum instances.
- Non-technical items (listed by section only): an integral "∫ from 0 to 2 of (2x² + 3x) dx", a probability problem (6 ADs, 4 DDs, bags), two Bangla→English translations, and a short note "AI and machine language mitigate challenge of cyber attack on banking system".
- Typos kept: "Brnach_city", "a nation of communication network", "2 × 108 m/s" (10⁸), "Synthia … He sends".
- **Duplicate check:** R7 (Dhaka–Rangpur latency) is already in `ex-question/Network/05_total-latency-delay-questions.md` as Q2 (Debug IT; "BB, AD(ICT): 06.02.25(DU)") — partial duplicate. The other seven IT items are not in `ex-question/` (grep for "56,33,48", "Synthia", "Branch_name, Acc_name", "Mail server, DNS server"). The token-ring class-diagram item on the same page belongs to BB AP 2023 (already held).

## Content

### Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — Written — 07.02.2025 — Exam taker: not stated (coaching labels FBS / DU; unverified) — marks not printed — recollection

- Non-IT: integral (1), probability (1), translations (2), short note on AI against cyber attacks in banking (1) — 5 items, marks not printed.

**R1.** Convert the array (56,33,48,29,99,12 and 344) into min heap.

> Printed answer: bottom-up heapify → 12, 29, 48, 33, 99, 56, 344 (checked).

**R2.** Write the pseudocode/ program (in any language) to print the common element between two arrays and the total number of such elements found. [assume each element in an array distinct].

> Printed answer: C++ nested-loop program printing common elements and their count.

**R3.** Given a logical function, find out the truth table of AB· (A+B).C

> Printed answer: 8-row truth table (image); the expression reduces to ABC, true only for A=B=C=1.

**R4.** Consider the following snapshot of a system where maximum instance of A, B, C and D are 3, 14, 12 and 12.

| Process | Alloc A | Alloc B | Alloc C | Alloc D | Max A | Max B | Max C | Max D |
|---|---|---|---|---|---|---|---|---|
| P0 | 0 | 0 | 1 | 2 | 0 | 0 | 1 | 2 |
| P1 | 1 | 0 | 0 | 0 | 1 | 7 | 5 | 0 |
| P2 | 1 | 3 | 5 | 4 | 2 | 3 | 5 | 6 |
| P3 | 0 | 6 | 3 | 2 | 0 | 6 | 5 | 2 |
| P4 | 0 | 0 | 1 | 4 | 0 | 6 | 5 | 6 |

Available: A = 1, B = 5, C = 2, D = 0

Answer the following Question using the Bankers algorithm,
a) Calculate the need matrix from the above table?
b) Is the system in the safe state? Find out the safe sequence if no, justify the reason.

> Printed answer: Need P0 0000, P1 0750, P2 1002, P3 0020, P4 0642; safe, sequence ⟨P0, P2, P3, P4, P1⟩ (checked).

**R5.** Synthia wants to send an email to her friend. He sends the email through the application and transport layer.
(a) Mention the protocol of application layer and transport layer
(b) Draw a diagram from the above scenario.

> Printed answer: SMTP over TCP; diagram sender → sender's mail server → receiver's mail server (SMTP) → receiver (POP3/IMAP).

**R6.** Find the primary key and foreign key after decomposition of the given schema (Branch_name, Acc_name, Balance, Brnach_city, Assets) and then identify which normalization it is?

> Printed answer: Account(Acc_no PK, Acc_name, Balance, Branch_name FK) and Branch(Branch_name PK, Branch_city, Assets); 2NF.
> Answer issue: the printed answer introduces an `Acc_no` attribute that is not in the given schema; with Branch_name → Branch_city, Assets as the only dependency removed, the decomposition is also in 3NF/BCNF.

**R7.** Suppose Bangladesh bank is designing a nation of communication network for office located in Dhaka and Rangpur. Their offices are connected via wide area network (WAN). The team needs to ensure that applications with low latency requirements (such as VOIP and video conferencing) can operate efficiently between these offices.
Given: Distance between Dhaka and Rangpur = 30 km
Speed of fiber optic link = 2 × 10⁸ m/s
Link capacity = 1 Gbps
Average size of data packets = 15,000 bytes
Delay at each router/switch along the path = 5 ms
RTT between Dhaka and Rangpur = 50 ms
Calculate the total network latency between office at Dhaka and Rangpur, considering the propagation delay and transmission delay.

> Printed answer: propagation 0.15 ms + transmission 0.12 ms + 2 × 5 ms device delay = 10.27 ms.
> Answer issue: the number of routers/switches is not given; the "2 devices" is the solver's assumption. Propagation + transmission alone = 0.27 ms.

**R8.** Bangladesh Bank have client server and the communicate with Mail server, DNS server, web server. Bangladesh Bank want to ensure the security using firewall on those server. Draw a diagram with the scenario.

> Printed answer: perimeter firewall → DMZ (web, mail, DNS servers) → internal firewall → application and database servers (diagram).
