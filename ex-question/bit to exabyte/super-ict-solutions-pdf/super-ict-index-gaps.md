# Bit to Exabyte — Super ICT 150++ book: questions missing from the PDF excerpt

- **Source:** the book's contents page (`../../Standard Pattern/01–08_super-ict-index-*.md`); the PDF `../../bit to exabyte ex question.pdf` leaves out the pages of these solved questions.
- **Document type:** coaching book (`suggestion`); no exam tags, so nothing here adds to an exam count.
- **What was done (2026-10-25):** each of the 107 titles was matched against every record in `../../by-subject/questions.json` (reading the question text, numbers must agree).
  - 59 are **already in the data** as the same question (mostly from real exam papers), so they need nothing more; the table names the exam and the question group.
  - 48 have only related questions; their contents-page line is added as a record in `super-ict-index-gaps.records.json` (question text = the title as printed, because the book's full wording is not available).

## Transcription Notes

- Titles are copied from the contents-page transcription, typos kept. Q25 and Q31 are printed as repeats of Q15 and Q12.
- Q80's "graph concept comparisons" looks like two contents lines run together; Q55 offers two alternatives (palindrome string or matrix addition).
- The 50th BCS Computer Science set (solved in the book) is not in the PDF and was not found online; the 46th and 47th BCS sets are already in the data from other sources.

## Content

| No. | Title on the contents page | Subject | Status |
|---|---|---|---|
| Q04 | RAID levels and how capacity is calculated | OS | **already in the data**: What is RAID? Explain Different RAID Levels and How Capacity… (no exam) (G1800) |
| Q05 | ACID properties in DBMS | DBMS | **already in the data**: Milk Vita AM(CSE) 2023; BPSC AP 2023; BBL AM(ICT) 2019 (G0951) |
| Q06 | C program: sum of digits | SPL | **already in the data**: 45th BCS CSE (2024) (G0009) |
| Q07 | Deadlock, four necessary conditions, prevention vs avoidance | OS | related only → added from the contents page |
| Q08 | Banker's algorithm: safe state and safe sequence | OS | **already in the data**: BB AD(ICT) 2025 (G4605) |
| Q09 | K-map simplification (4-variable and 3-variable) | DLD | **already in the data**: Combined Bank AME 2026; Combined Bank SO(IT) 2026; 46th BCS ICT (G0325) |
| Q10 | DoS vs DDoS attack | NET | **already in the data**: NPCBL Engineer(Cyber Security) 2026 (G3656) |
| Q11 | Subnetting 192.168.10.0/24 into four subnets | NET | **already in the data**: Subnetting Problem (10 Marks) Your bank branch network is 19… (no exam) (G2728) |
| Q12 | Private vs public IP; why NAT is needed | NET | related only → added from the contents page |
| Q13 | C program: factorial using loop and recursion | SPL | **already in the data**: 45th BCS ICT (2024); Milk Vita AM(CSE) 2023; BPSC AP 2022; BPSC AP 2020; BPSC ANE 2020 (G1043) |
| Q14 | CPU functions; ALU vs CU vs registers; BIOS vs UEFI, firmware, cache vs RAM, DRAM vs SRAM notes | ICS | related only → added from the contents page |
| Q15 | Process vs program; process state diagram | OS | **already in the data**: Differentiate between a Program and a Process. Explain the d… (no exam) (G1801) |
| Q16 | Normalization: 1NF, 2NF, 3NF, BCNF; functional, partial, transitive dependency | DBMS | **already in the data**: 36th BCS (2016) (G1924) |
| Q17 | DNS name resolution process | NET | **already in the data**: Combined Bank Officer(IT) 2025 (G3269) |
| Q18 | Hub vs switch vs router | NET | **already in the data**: DESCO SAE 2023 (G1463) |
| Q19 | Min heap construction (35, 12, 43, 8, 51, 20, 5); min vs max heap | DSA | **already in the data**: Construct a Min Heap by inserting the following elements in … (no exam) (G1803) |
| Q20 | 192.168.1.0/27: subnets, hosts, first-subnet addresses | NET | related only → added from the contents page |
| Q21 | Polymorphism: method overloading vs overriding | OOP | **already in the data**: BPSC AP 2023; 17th NTRCA ICT (2023); Combined Bank SO(AME) 2021; RAKUB Programmer 2021; BPSC AME 2021; NU AP 2020 (G2405) |
| Q22 | Waterfall vs Agile model | SE | **already in the data**: Combined Bank Officer(IT) 2023 (G1218) |
| Q23 | C program: reverse a string without library functions | SPL | **already in the data**: BREB AP 2023; Combined Bank ADA 2022 (G1060) |
| Q24 | 2-D array address in row-major and column-major order | DSA | **already in the data**: 46th BCS CSE (G2783) |
| Q25 | Process vs program and process state diagram (repeat of 15) | OS | **already in the data**: Differentiate between a Program and a Process. Explain the d… (no exam) (G1801) |
| Q26 | Cloud computing; IaaS, PaaS, SaaS | NET | **already in the data**: BB AME 2023 (G2549) |
| Q27 | SQL: Book and Author join with country and year filter | DBMS | related only → added from the contents page |
| Q28 | C program: replace each alphabet with the next alphabet | SPL | **already in the data**: ICB Securities AP 2026 (G0892) |
| Q29 | VLSM for 192.168.10.0/22 with five departments | NET | **already in the data**: ICB Securities AP 2026 (G0895) |
| Q30 | Truth table: tautology check | DM | **already in the data**: ICB Securities AP 2026 (G0896) |
| Q31 | Private vs public IP and NAT (repeat of 12) | NET | related only → added from the contents page |
| Q32 | Linked list vs array; types of linked list; insertion pseudocode | DSA | related only → added from the contents page |
| Q33 | DBMS keys (primary, candidate, super, foreign, composite); indexing disadvantages | DBMS | related only → added from the contents page |
| Q46 | Microcontroller vs microprocessor | MPI | **already in the data**: BUET M.Sc. (G0250) |
| Q47 | Triggers in DBMS with SQL example | DBMS | **already in the data**: ICB AMCL AP 2024 (G4562) |
| Q48 | ARP working procedure | NET | related only → added from the contents page |
| Q49 | Call by value vs call by reference; swap with pointers | SPL | **already in the data**: 46th BCS CSE (G2769) |
| Q50 | API; REST vs SOAP; API request flow to database | SE | related only → added from the contents page |
| Q51 | Structure vs union and memory management | SPL | **already in the data**: 47th BCS CSE (G2843) |
| Q52 | Inheritance; multiple inheritance in Java via interfaces | OOP | related only → added from the contents page |
| Q53 | Binary tree from inorder with postorder or preorder | DSA | **already in the data**: Rupali Bank ANE 2021 (G1783) |
| Q54 | Universal gates; XOR using NAND and NOR | DLD | **already in the data**: 46th BCS CSE (G2774) |
| Q55 | C program: palindrome string, or matrix addition | SPL | **already in the data**: Combined Bank SO(IT) 2022 (G3126) |
| Q56 | Linux commands: touch, mv, mkdir, cd, grep, chmod, ps, top, kill, ping and more | OS | related only → added from the contents page |
| Q57 | Commercial bank network diagram and firewall protection | NET | **already in the data**: BB AD(ICT) 2025 (G4609) |
| Q58 | Zero-day vulnerability vs exploit; bank's immediate response | NET | related only → added from the contents page |
| Q59 | Max heap insertion of 88, 100, 65 | DSA | related only → added from the contents page |
| Q60 | Time complexity of nested loops, O(n^2 log n) | DSA | related only → added from the contents page |
| Q61 | HTTP request; GET vs POST; which is more secure | NET | **already in the data**: Combined Bank Officer(IT) 2026 (G3710) |
| Q62 | HTTP status codes 1xx to 5xx; why 404 is a client error | NET | **already in the data**: Combined Bank AME/AE(IT) 2026(Jan) (G2735) |
| Q63 | Page vs frame; paging and fragmentation; page and frame bit calculation | OS | related only → added from the contents page |
| Q64 | Virtual memory; page fault sequence | OS | **already in the data**: Fisheries & Livestock Instructor(CS) 2023 (G3563) |
| Q65 | Confusion matrix (TP 90, TN 80, FP 20, FN 10) | AI | related only → added from the contents page |
| Q66 | 8-bit 2's complement: 120 + (-45), overflow check | DLD | related only → added from the contents page |
| Q67 | Wi-Fi, Bluetooth, WiMAX; world without them | NET | **already in the data**: NPCBL Engineer(Cyber Security) 2026 (G3657) |
| Q68 | Why packet switching suits the Internet | NET | **already in the data**: NPCBL Engineer(Cyber Security) 2026 (G3654) |
| Q69 | B+ tree of order 3; B-tree vs B+ tree | DSA | related only → added from the contents page |
| Q70 | Man-in-the-Middle attack and two countermeasures | NET | **already in the data**: MoFood Network/Website Manager 2025 (G3651) |
| Q71 | Header files and library functions; C uppercase to lowercase | SPL | related only → added from the contents page |
| Q72 | Complexity; time complexity of double loop | DSA | **already in the data**: Combined Bank SO(IT) 2022 (G3131) |
| Q73 | Types of ROM; SRAM vs DRAM | ICS | related only → added from the contents page |
| Q74 | Memory management with 8 GB RAM, 24 GB virtual memory, 14 GB demand | OS | related only → added from the contents page |
| Q75 | 2 GB file over 500 Mbps: transmission, propagation delay, RTT | NET | related only → added from the contents page |
| Q76 | Maximum memory with a 20-bit address bus | CA | related only → added from the contents page |
| Q77 | Preemptive vs non-preemptive priority scheduling | OS | related only → added from the contents page |
| Q78 | Short notes: process vs thread, paging vs segmentation, virtual vs physical memory, deadlock vs starvation, multiprogramming vs multitasking, context switching, kernel | OS | related only → added from the contents page |
| Q79 | CPU scheduling: FCFS, SJF, preemptive priority with Gantt charts | OS | related only → added from the contents page |
| Q80 | Instruction pipelining; 5-stage pipeline; speedup calculation; graph concept comparisons | CA | related only → added from the contents page |
| Q81 | AI agent; narrow, general and super AI | AI | related only → added from the contents page |
| Q82 | CSRF, XSS, SQL injection and prevention | NET | **already in the data**: IBBL SO(Network) 2025 (G0267) |
| Q83 | Database vs data warehouse vs data mining | DBMS | **already in the data**: Combined Bank SO(IT) 2023 (G3177) |
| Q84 | Logical and physical address bits (512 pages, 128 frames, 2 KB page) | OS | **already in the data**: Combined Bank Officer(IT) 2025 (G3268) |
| Q85 | OOP bank account program in C++ and encapsulation | OOP | **already in the data**: Combined Bank Officer(IT) 2025 (G3272) |
| Q86 | Version control (Git): commit vs push | SE | **already in the data**: Bank (name cut off) AP (G0875) |
| Q87 | Ambiguous grammar for id + id * id | TOC | **already in the data**: Combined Bank SO(IT) 2026 (G3677) |
| Q88 | NFA to DFA; DFA for exactly three 1s; DFA for substring 110; flip-flops for 10 states | TOC | related only → added from the contents page |
| Q89 | Software testing types: unit, integration, system, acceptance, smoke, regression, stress, performance | SE | **already in the data**: Petrobangla AM(CSE) 2024 (G2270) |
| Q90 | Feasibility study; TELOS model | SE | **already in the data**: 16th NTRCA ICT (G2169) |
| Q91 | Spiral model as risk-driven; Agile and Prototype models | SE | related only → added from the contents page |
| Q92 | ATM transaction architecture; ACID in ATM transactions | DBMS | related only → added from the contents page |
| Q93 | Social engineering; CERT; Bangladesh Bank heist | NET | related only → added from the contents page |
| Q94 | Digital signature generation and verification; CA and PKI | NET | related only → added from the contents page |
| Q95 | Type casting; output-tracing problems | SPL | related only → added from the contents page |
| Q96 | Handshaking; TCP three-way handshake; flow vs congestion control | NET | related only → added from the contents page |
| Q97 | Database relationships; use case diagram; ER diagram for e-commerce | DBMS | related only → added from the contents page |
| Q98 | Dynamic programming vs greedy algorithms | DSA | **already in the data**: Parliament Secretariat Programmer 2023 (G3576) |
| Q99 | Knapsack with greedy and DP; Tower of Hanoi for 3 disks | DSA | related only → added from the contents page |
| Q100 | Search algorithm choice for 1 million employee records | DSA | **already in the data**: Combined Bank SO(IT) 2026 (G3676) |
| Q101 | Enterprise bank network design using the OSI model | NET | related only → added from the contents page |
| Q102 | 8086 addressing modes | MPI | **already in the data**: 47th BCS ICT (G2883) |
| Q103 | 8086 effective and physical address calculation | MPI | related only → added from the contents page |
| Q104 | RISC vs CISC | CA | **already in the data**: Combined Bank SO(IT) 2024 (G1258) |
| Q105 | C program: star pyramid pattern | SPL | related only → added from the contents page |
| Q106 | C program: sum of series 1 + 11 + 111 + ... up to N | SPL | related only → added from the contents page |
| Q107 | Classful IP addressing (Class A to E) | NET | related only → added from the contents page |
| Q108 | CRC remainder calculation; even parity error detection | NET | **already in the data**: Combined Bank AP 2023 (G1491) |
| Q109 | Loopback IP; accessing 127.0.0.1:8080; special IP addresses | NET | **already in the data**: Parliament Secretariat Programmer 2023 (G3572) |
| Q110 | Binary tree representation using an array | DSA | **already in the data**: Petrobangla AM(CSE) 2024 (G2265) |
| Q111 | JVM vs JRE vs JDK | OOP | related only → added from the contents page |
| Q112 | Important protocols and port numbers (MCQ) | NET | **already in the data**: BPSC ADA 2022 (G1505) |
| Q113 | Latch vs flip-flop | DLD | **already in the data**: SPCBL AME 2021; BPSC AP 2021; BWDB AP 2018; BB AME 2017 (G1899) |
| Q114 | Symmetric vs asymmetric encryption; number of 128-bit keys | NET | **already in the data**: NPCBL ET(Soft) 2023; WZPGCL AE(CSE) 2023; BPSC SAE 2021 (G3537) |
| Q115 | Bipartite graph and its condition | GRAPH | related only → added from the contents page |
| Q116 | C increment and decrement expression output | SPL | **already in the data**: DESCO AE(IT) 2022 (G2943) |
| Q117 | Hadoop; architecture; HDFS block and replica calculations | DBMS | related only → added from the contents page |
| Q118 | A* algorithm (in Bangla) | AI | **already in the data**: BUET M.Sc. May 2016 (G3733) |
| Q119 | TCP sequence number problems (10 questions) | NET | related only → added from the contents page |
| Q120 | Linux file permissions and chmod | OS | **already in the data**: BPDB AE(CSE) 2021 (G0224) |
| Math index 04 | Bayes theorem: failed transaction from Server B | MATH | **already in the data**: ICB Securities AP 2026 (G0901) |
| Aptitude Q04 | MS Excel: IF, SUMIFS, COUNTIFS, AVERAGEIFS, VLOOKUP, HLOOKUP, XLOOKUP, UNIQUE, sort and filter | ICS | related only → added from the contents page |
