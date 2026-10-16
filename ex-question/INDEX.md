# Past exam questions: index

Photographed question and solution sheets (BCS, NTRCA, BPSC, bank, BUET-run recruitment exams, BUET M.Sc. admission tests, vivas), the Bit to Exabyte question books and suggestion sheets, with a Markdown transcription next to every image (original image names in `image-rename-log.csv`). Text extracted from the PDFs is in `PDF-TEXT/`. `by-subject/` regroups every question by syllabus subject and topic, ranks topics and questions by how many exams asked them, and shows for every question **which exams asked it and which source it was taken from**. Data: `by-subject/questions.json` (every record), `by-subject/frequency.json` (one entry per distinct question), `exam-tags.json` (exam-name normalisation), `by-subject/pattern-topics.json` (coaching topic index). Rebuild with `node tools/parse-new.mjs && node tools/build-exam-tags.mjs && node tools/merge.mjs && node tools/render.mjs`. The handwritten revision notebooks built from these questions are catalogued in [HANDWRITTEN-NOTES.md](HANDWRITTEN-NOTES.md).

Total: 5771 records → 4976 distinct questions, 299 exams, 148 printed answers corrected.

## By subject

| # | Subject | Distinct questions | Records | Written | MCQ | Viva | Exams | Most-asked topic | Corrections |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [Basic Physics](by-subject/01_PHY.md) | 27 | 27 | 10 | 17 | 0 | 11 | Other | 1 |
| 2 | [Introduction to Computer Systems](by-subject/02_ICS.md) | 470 | 520 | 307 | 98 | 115 | 114 | Other | 6 |
| 3 | [Electrical Circuits](by-subject/03_EC.md) | 51 | 51 | 20 | 31 | 0 | 20 | Other | 1 |
| 4 | [Digital Logic Design](by-subject/04_DLD.md) | 297 | 337 | 282 | 45 | 5 | 110 | Logic gates & universal gates | 12 |
| 5 | [Basic Electronics](by-subject/05_ELN.md) | 94 | 97 | 45 | 50 | 2 | 29 | Other | 1 |
| 6 | [Microprocessor and Interfacing](by-subject/06_MPI.md) | 87 | 105 | 75 | 26 | 4 | 46 | 8086 architecture & segmentation | 3 |
| 7 | [Computer Architecture](by-subject/07_CA.md) | 173 | 193 | 149 | 41 | 2 | 98 | Cache memory | 1 |
| 8 | [Communication Theory](by-subject/08_COM.md) | 195 | 209 | 147 | 39 | 14 | 74 | Multiplexing (TDM, FDM, WDM) | 10 |
| 9 | [Computer Networking and Security](by-subject/09_NET.md) | 1021 | 1241 | 889 | 139 | 189 | 217 | IP addressing & subnetting | 31 |
| 10 | [Structured Programming (C)](by-subject/10_SPL.md) | 424 | 492 | 424 | 56 | 12 | 161 | Output tracing | 6 |
| 11 | [Object Oriented Programming](by-subject/11_OOP.md) | 204 | 228 | 176 | 26 | 26 | 86 | Polymorphism, overloading & overriding | 7 |
| 12 | [Discrete Mathematics](by-subject/12_DM.md) | 63 | 68 | 54 | 14 | 0 | 32 | Other | 1 |
| 13 | [Graph Theory](by-subject/13_GRAPH.md) | 49 | 51 | 40 | 11 | 0 | 32 | Other | 3 |
| 14 | [Theory of Computation](by-subject/14_TOC.md) | 48 | 48 | 29 | 18 | 0 | 25 | Other | 1 |
| 15 | [Data Structures and Algorithms](by-subject/15_DSA.md) | 386 | 446 | 355 | 75 | 15 | 131 | Trees & traversals | 12 |
| 16 | [Database Systems](by-subject/16_DBMS.md) | 458 | 541 | 449 | 44 | 48 | 157 | SQL queries | 16 |
| 17 | [Software Engineering](by-subject/17_SE.md) | 302 | 402 | 338 | 31 | 33 | 104 | Testing & quality assurance | 3 |
| 18 | [Operating System](by-subject/18_OS.md) | 367 | 449 | 385 | 54 | 2 | 131 | Memory management & paging | 17 |
| 19 | [Artificial Intelligence](by-subject/19_AI.md) | 126 | 131 | 80 | 33 | 18 | 43 | Other | 1 |
| 20 | [Bangla](by-subject/20_BAN.md) | 4 | 4 | 1 | 3 | 0 | 2 | সমাস, বানান, প্রতিশব্দ, কারক-বিভক্তি, বিদেশি শব্দ, সাহিত্য, যুক্তবর্ণ, বাক্য | 1 |
| 21 | [English](by-subject/21_ENG.md) | 13 | 13 | 8 | 5 | 0 | 6 | Idioms, narration, spelling, articles, prepositions | 2 |
| 22 | [Mathematics](by-subject/22_MATH.md) | 11 | 11 | 8 | 3 | 0 | 5 | Logarithms, indices, vectors, trigonometry, mensuration, probability, combinations | 3 |
| 23 | [General Knowledge](by-subject/23_GK.md) | 106 | 107 | 4 | 5 | 96 | 4 | Current affairs, currency, antonym, DC current | 9 |

## Most-asked questions (all subjects)

| # | Subject | Question | Exams | Asked in | Source |
|---|---|---|---|---|---|
| 1 | SE | Difference between White Box testing and Black Box testing. Give examples of both type of… | 8 | 17th NTRCA ICT (2023); BARC Programmer 2023; BPSC AP 2021; BPSC SAE 2021; EPB Programmer 2018; ICB AP 2017; PSB Programmer 2018; Teletalk AM(IT) 2023 | [G1230](by-subject/17_SE.md#g1230) |
| 2 | OOP | Explain Method overloading and Method overriding with example . | 8 | 17th NTRCA ICT (2023); 36th BCS (2016); BPSC AME 2021; BPSC AP 2023; Combined Bank AHE 2021; Combined Bank SO(AME) 2021; NU AP 2020; RAKUB Programmer 2021 | [G2340](by-subject/11_OOP.md#g2340) |
| 3 | NET | What is SQL Injection? How to Prevent against SQL Injection Attacks? | 7 | 46th BCS CSE; BTV AP 2019; RAKUB ME 2021; RAKUB Programmer 2021; SGFL AE(IT) 2023; SPCBL AME 2021; SPCBL SAE 2022 | [G3014](by-subject/09_NET.md#g3014) |
| 4 | SPL | Differences between 'Call by Value' and 'Call by Reference'. | 5 | 17th NTRCA ICT (2023); BPSC ADA 2022; BPSC AP 2022; BPSC AP 2023; PSB AP 2018 | [G3424](by-subject/10_SPL.md#g3424) |
| 5 | SPL | What do you mean by recursion? Calculate factorial function using recursion with C progra… | 5 | 45th BCS ICT (2024); BPSC ANE 2020; BPSC AP 2020; BPSC AP 2022; Milk Vita AM(CSE) 2023 | [G1043](by-subject/10_SPL.md#g1043) |
| 6 | DSA | Differentiate between Linked list and Array? | 5 | 17th NTRCA ICT (2023); BNPS AP 2017; BPSC AP 2021; BPSC AP 2023; BPSC ME 2021 | [G1277](by-subject/15_DSA.md#g1277) |
| 7 | NET | Differentiate between IPv4 and IPv6. | 5 | BMA AE 2021; BPSC AME 2021; BREB AGM(IT) 2021; RAKUB ANSE 2023; WZPGCL AE(CSE) 2023 | [G0560](by-subject/09_NET.md#g0560) |
| 8 | SPL | Distinguish between Compiler and Interpreter with example. | 5 | 40th BCS (2020); BCC Programmer 2019; BPSC ADA 2022; BPSC AP 2022; PGCB SAE 2021 | [G1033](by-subject/10_SPL.md#g1033) |
| 9 | NET | Given IP address 192.168.1.50, Subnet Mask: 255.255.255.240. Find the valid IP range. Als… | 4 | BIWTA AE(CSE) 2023; BPDB AE(CSE) 2024; BTCL AME 2023; NWPGCL AM(ICT) 2024 | [G0167](by-subject/09_NET.md#g0167) |
| 10 | NET | c. Explain the difference between symmetric and asymmetric encryption and give example. 4 | 4 | BPSC SAE 2021; NPCBL ET(Soft) 2023; Parliament Secretariat SAE 2023; WZPGCL AE(CSE) 2023 | [G3472](by-subject/09_NET.md#g3472) |
| 11 | NET | 3-way handshake protocol for TCP connection using diagram. | 4 | BCIC AP 2022; BGDCL AE(CSE) 2021; BRICM AME 2024; Sonali Bank Officer(IT) 2021 | [G1451](by-subject/09_NET.md#g1451) |
| 12 | SPL | Difference between Array and Structure data type. | 4 | BOF AE(CSE) 2021; BPSC AE 2022; BPSC AP 2021; BPSC AP 2022 | [G1042](by-subject/10_SPL.md#g1042) |
| 13 | NET | Differentiate between TCP and UDP. | 4 | 37th BCS; 45th BCS CSE (2024); BPSC AP 2021; Combined Bank SO(IT) 2024 | [G1474](by-subject/09_NET.md#g1474) |
| 14 | DLD | What is the difference between Latch and Flip-flop? | 5 | 36th BCS (2016); BB AME 2017; BPSC AP 2021; BWDB AP 2018; SPCBL AME 2021 | [G1834](by-subject/04_DLD.md#g1834) |
| 15 | DLD | Simplify F(A,B,C,D) = Σm(0,3,5,7,8,10,11,12,13,14,15) using a 4-variable K-map. | 4 | 46th BCS ICT; Combined Bank AME 2026; Combined Bank AME/AE(IT) 2026(Jan); Combined Bank SO(IT) 2026 | [G0325](by-subject/04_DLD.md#g0325) |
| 16 | ICS | What is the difference between System Software and Application Software? | 4 | 45th BCS General (Sci & Tech) (2024); BB AME 2016; MM AP 2017; NPCBL JAM 2022 | [G1014](by-subject/02_ICS.md#g1014) |
| 17 | DBMS | Analyze the output of the following SQL. Select department_name, AVG(salary) As average_s… | 3 | Combined Bank Officer(IT) 2023; Rupali Bank ANA 2023; Rupali Bank ANE 2023 | [G3140](by-subject/16_DBMS.md#g3140) |
| 18 | DLD | Simplify F(A,B,C,D) = Σm(2,8,9,11,13,15) using a 4-variable K-map. | 3 | BCIC AP 2022; BPDB AE(CSE) 2024; Teletalk AM(IT) 2023 | [G0319](by-subject/04_DLD.md#g0319) |
| 19 | NET | Routing Table - supernet - CIDR nation [site's expanded wording, assumed: An ISP has been… | 3 | BRICM AME 2024; Combined Bank ADA 2026; Combined Bank Officer(IT) 2026 | [G0909](by-subject/09_NET.md#g0909) |
| 20 | NET | Write down the top 10 cyber-attack. | 3 | Combined Bank AME/AHE 2023; Combined Bank Officer(IT) 2023; Combined Bank SO(IT) 2023 | [G1105](by-subject/09_NET.md#g1105) |
| 21 | NET | Difference between HTTP and HTTPS. | 3 | MGMCL AM(ICT) 2022; PGCB AE(CSE) 2024; RAKUB ANSE 2023 | [G1494](by-subject/09_NET.md#g1494) |
| 22 | DBMS | Explain Primary key, Candidate key, and Foreign key. | 3 | 36th BCS (2016); SPCBL AME 2021; Teletalk AM(IT) 2023 | [G4625](by-subject/16_DBMS.md#g4625) |
| 23 | NET | কম্পিউটার থেকে কম্পিউটারে তথ্য আদান-প্রদানের প্রযুক্তিকে কী বলা হয়? (ক) ই-মেইল (খ) ইন্টার… | 4 | 13th NTRCA School-2 Prelim (2016); 14th NTRCA College Prelim (2017); 15th NTRCA College Prelim (2019); 18th NTRCA School Prelim (2024) | [G4162](by-subject/09_NET.md#g4162) |
| 24 | DBMS | What are the ACID properties of transaction to ensure data reliability and integrity? | 3 | BBL AM(ICT) 2019; BPSC AP 2023; Milk Vita AM(CSE) 2023 | [G0951](by-subject/16_DBMS.md#g0951) |
| 25 | SE | Write down the SDLC steps with Explain. | 3 | BPSC ANE 2020; BRICM AME 2024; EGCB SAE(ICT) 2023 | [G2133](by-subject/17_SE.md#g2133) |
| 26 | OS | Swapping কী? Internal এবং External Fragmentation এর মধ্যে পার্থক্য লিখুন। | 3 | 15th NTRCA ICT; 17th NTRCA ICT (2023); 18th NTRCA College ICT (2024) | [G1747](by-subject/18_OS.md#g1747) |
| 27 | OS | What is deadlock in operating system (OS)? What are the four necessary and sufficient con… | 3 | 46th BCS CSE; BPSC AP 2023; Milk Vita AM(CSE) 2023 | [G2729](by-subject/18_OS.md#g2729) |
| 28 | SE | What is the difference between black box and white box testing? | 3 | 45th BCS ICT (2024); 46th BCS ICT; Teletalk AM(IT) 2023 | [G2762](by-subject/17_SE.md#g2762) |
| 29 | NET | Explain TCP/IP model and its protocol and device. | 3 | BRICM AME 2024; RAKUB NSE 2021; SPARRSO 2020 | [G1475](by-subject/09_NET.md#g1475) |
| 30 | NET | What is OSI Model? Write all layer name sequence should be top to bottom or bottom to top. | 3 | BTRC SAD 2021; DESCO AE 2023; RAKUB NSE 2021 | [G1487](by-subject/09_NET.md#g1487) |
| 31 | DLD | What is a Universal Gate? Prove that the NAND Gate is a Universal Gate. [BSCS AP 26] [DLD] | 3 | Bank (name cut off) AP; Combined Bank AP 2026; SPCBL AME 2021 | [G2980](by-subject/04_DLD.md#g2980) |
| 32 | SE | Explain the concept of the Software Development Life Cycle (SDLC) and describe its main p… | 3 | 40th BCS (2020); Bank (name cut off) AP; Combined Bank AP 2026 | [G3243](by-subject/17_SE.md#g3243) |
| 33 | NET | What is CIA Triad? | 2 | EGCB SAE(ICT) 2023; Teletalk AM(IT) 2023 | [G0612](by-subject/09_NET.md#g0612) |
| 34 | OOP | Friend Function কী? Friend Function-এর বৈশিষ্ট্য এবং সুবিধা ও অসুবিধাগুলো লিখুন। | 3 | 16th NTRCA; 16th NTRCA ICT; 18th NTRCA College ICT (2024) | [G2098](by-subject/11_OOP.md#g2098) |
| 35 | SPL | কম্পাইলার এবং ইন্টারপ্রিটারের মধ্যে পার্থক্য লিখুন। | 3 | 15th NTRCA Computer Operation (2019); 16th NTRCA CSE (2019); SPARRSO TO(IT) 2021 | [G4147](by-subject/10_SPL.md#g4147) |
| 36 | COM | FDM এবং TDM এর পার্থক্য লিখুন। | 2 | 17th NTRCA CSE (2023); 17th NTRCA ICT (2023) | [G1430](by-subject/08_COM.md#g1430) |
| 37 | DLD | Simplify F = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map (same function as Q47). | 2 | BPSC AP 2023; BPSC AP 2026 | [G0320](by-subject/04_DLD.md#g0320) |
| 38 | DSA | Linked List কী? উদাহরণসহ বর্ণনা করুন। | 2 | 17th NTRCA CSE (2023); 17th NTRCA ICT (2023) | [G1278](by-subject/15_DSA.md#g1278) |
| 39 | DSA | How to represent binary tree using array? | 2 | BGDCL AM(CSE) 2024; MRA SCO 2023 | [G1288](by-subject/15_DSA.md#g1288) |
| 40 | DSA | B-tree data structure কী? এর প্রয়োগ ব্যাখ্যা করুন। | 2 | 17th NTRCA CSE (2023); 17th NTRCA ICT (2023) | [G1290](by-subject/15_DSA.md#g1290) |

## By exam

| Exam | Type | Distinct questions | Subjects |
|---|---|---|---|
| 49th BCS ICT (2025) | bcs | 102 | COM 10, DLD 10, AI 9, DSA 8, DBMS 7, NET 7, OS 7, SE 7, EC 6, CA 5, ELN 5, GRAPH 5, MPI 5, OOP 4, SPL 3, DM 2, PHY 2 |
| BUET M.Sc. April 2021 | admission | 100 | AI 10, SE 10, TOC 10, NET 9, DSA 8, CA 6, COM 6, DLD 5, DM 5, ICS 5, MPI 5, OOP 5, OS 5, SPL 5, DBMS 4, GRAPH 2 |
| 45th BCS CSE (2024) | bcs | 76 | DSA 15, DLD 12, MPI 10, NET 10, AI 6, SPL 6, COM 4, SE 4, DBMS 3, GRAPH 2, OS 2, CA 1, OOP 1 |
| 49th BCS CSE (2025) | bcs | 73 | DSA 10, NET 9, OS 8, DBMS 7, CA 6, DM 5, TOC 5, AI 4, MPI 4, SPL 4, COM 3, SE 3, DLD 2, OOP 2, GRAPH 1 |
| 17th NTRCA ICT (2023) | ntrca | 66 | DSA 10, OS 10, SPL 9, DBMS 8, ICS 7, NET 7, SE 6, OOP 4, COM 2, AI 1, CA 1, GRAPH 1 |
| BUET IICT April 2021 | admission | 60 | DLD 12, EC 12, NET 12, SPL 10, CA 7, MPI 4, OOP 2, COM 1 |
| Combined Bank Officer(IT) 2020 | bank | 56 | ICS 12, NET 9, SPL 9, DBMS 5, OS 5, DSA 4, SE 4, AI 3, CA 2, COM 1, DLD 1, OOP 1 |
| BPSC AP 2022 | bpsc | 55 | ELN 8, ICS 8, NET 8, SPL 8, DBMS 4, EC 4, OOP 4, DSA 3, OS 3, CA 2, COM 1, DLD 1, DM 1 |
| 17th NTRCA CSE (2023) | ntrca | 54 | DSA 9, ICS 7, SPL 7, OS 6, DLD 5, NET 5, OOP 4, AI 3, SE 3, DBMS 2, COM 1, DM 1, GRAPH 1 |
| 36th BCS (2016) | bcs | 48 | DSA 8, DBMS 5, OS 5, NET 4, OOP 4, SE 4, DLD 3, GRAPH 3, AI 2, CA 2, DM 2, MPI 2, COM 1, ICS 1, SPL 1, TOC 1 |
| BB AD(ICT) 2025 | bank | 48 | NET 10, DSA 9, DBMS 7, ELN 4, DLD 3, ICS 3, OS 3, SPL 3, EC 2, OOP 2, SE 2 |
| Petrobangla AM(CSE) 2024 | public-body | 47 | DBMS 8, DSA 6, OS 5, SE 4, SPL 4, COM 3, DLD 3, OOP 3, BAN 2, ENG 2, GK 2, MATH 2, NET 2, ICS 1 |
| 15th NTRCA ICT | ntrca | 45 | DBMS 9, OS 7, SPL 6, DSA 5, OOP 4, COM 3, GRAPH 3, ICS 3, SE 3, NET 2 |
| 45th BCS ICT (2024) | bcs | 44 | DLD 7, OS 6, SPL 6, AI 5, PHY 5, DSA 3, SE 3, EC 2, ICS 2, MPI 2, CA 1, DBMS 1, NET 1 |
| 38th BCS (2018) | bcs | 42 | DLD 9, COM 6, OOP 4, OS 4, SPL 4, DSA 3, ICS 3, NET 3, SE 2, AI 1, CA 1, DBMS 1, MPI 1 |
| 16th NTRCA ICT | ntrca | 41 | DSA 8, DBMS 7, NET 5, OOP 5, OS 4, SE 4, SPL 4, ICS 3, DLD 1 |
| Combined Bank Officer(IT) 2026 | bank | 41 | NET 11, ICS 6, CA 4, DSA 4, AI 2, COM 2, DBMS 2, OOP 2, SPL 2, DLD 1, EC 1, ELN 1, MPI 1, OS 1, SE 1 |
| 15th NTRCA Computer Operation (2019) | ntrca | 40 | DLD 8, ICS 6, COM 5, SPL 5, CA 4, DBMS 4, OS 3, NET 2, SE 2, OOP 1 |
| 46th BCS CSE | bcs | 40 | DSA 6, DLD 5, DM 5, DBMS 4, NET 4, OS 4, SPL 3, AI 2, MPI 2, CA 1, GRAPH 1, OOP 1, SE 1, TOC 1 |
| 15th NTRCA CSE | ntrca | 38 | SPL 8, DLD 7, DBMS 5, DSA 4, ICS 4, NET 3, CA 2, DM 2, OOP 1, OS 1, TOC 1 |
| 46th BCS ICT | bcs | 38 | DLD 6, AI 4, COM 4, NET 4, CA 3, DBMS 3, SE 3, SPL 3, PHY 2, DSA 1, GRAPH 1, MPI 1, OOP 1, OS 1, TOC 1 |
| 16th NTRCA CSE (2019) | ntrca | 36 | DLD 9, SPL 4, CA 3, DBMS 3, DM 3, DSA 3, NET 3, OOP 2, OS 2, COM 1, GRAPH 1, ICS 1, TOC 1 |
| Parliament Secretariat SAE 2023 | public-body | 36 | NET 14, ICS 6, SPL 4, DSA 3, OS 3, DBMS 2, SE 2, CA 1, DLD 1 |
| BPSC AP 2023 | bpsc | 35 | NET 8, DSA 7, SPL 6, OS 4, DLD 3, OOP 2, CA 1, COM 1, DBMS 1, ICS 1, SE 1 |
| 47th BCS CSE | bcs | 33 | NET 7, SPL 4, AI 3, CA 3, DSA 3, MPI 3, OS 2, SE 2, DBMS 1, DLD 1, DM 1, ELN 1, GRAPH 1, ICS 1 |
| BPSC AP 2021 | bpsc | 33 | NET 10, DSA 5, DLD 4, SE 4, OOP 3, ICS 2, OS 2, COM 1, DBMS 1, SPL 1 |
| BUET M.Sc. April 2017 | admission | 33 | CA 6, DSA 6, DLD 3, DM 3, DBMS 2, MPI 2, NET 2, OS 2, SE 2, TOC 2, AI 1, OOP 1, SPL 1 |
| BUET M.Sc. May 2016 | admission | 32 | DSA 4, SPL 4, DLD 3, OOP 3, SE 3, AI 2, CA 2, DBMS 2, DM 2, NET 2, OS 2, GRAPH 1, MPI 1, TOC 1 |
| 13th NTRCA CSE (2016) | ntrca | 30 | DLD 6, SPL 5, DBMS 4, DM 4, CA 2, DSA 2, SE 2, COM 1, ICS 1, NET 1, OOP 1, OS 1 |
| 17th NTRCA School (2023) | ntrca | 30 | DLD 12, ICS 10, SPL 5, OS 2, NET 1 |
| BUET M.Sc. October 2017 | admission | 30 | CA 5, DSA 4, SE 3, AI 2, DBMS 2, DLD 2, DM 2, MPI 2, NET 2, OOP 2, OS 2, SPL 1, TOC 1 |
| MoFood Network/Website Manager 2025 | public-body | 30 | NET 5, AI 4, CA 4, DBMS 3, DSA 3, DLD 2, OOP 2, OS 2, SE 2, SPL 2, GRAPH 1 |
| BUET M.Sc. May 2019 | admission | 27 | SE 4, DSA 3, OOP 3, TOC 3, DBMS 2, DM 2, MPI 2, NET 2, SPL 2, AI 1, CA 1, DLD 1, OS 1 |
| BUET M.Sc. October 2018 | admission | 27 | OOP 3, SE 3, CA 2, DBMS 2, DLD 2, DM 2, DSA 2, MPI 2, NET 2, OS 2, SPL 2, TOC 2, AI 1 |
| DPDC AM(ICT) 2025 | public-body | 27 | SE 5, DSA 4, SPL 4, AI 3, DBMS 2, OS 2, COM 1, DLD 1, EC 1, GRAPH 1, ICS 1, MPI 1, NET 1 |
| BPSC AME 2022 | bpsc | 26 | DSA 5, NET 5, ELN 4, AI 2, CA 2, DBMS 1, DLD 1, GRAPH 1, ICS 1, OS 1, PHY 1, SPL 1, TOC 1 |
| Combined Bank SO(IT) 2023 | bank | 26 | NET 10, ICS 5, SPL 3, CA 2, COM 2, DBMS 1, MPI 1, OS 1, SE 1 |
| 47th BCS ICT | bcs | 25 | DLD 5, COM 4, GRAPH 4, ELN 2, MPI 2, OOP 2, PHY 2, CA 1, DSA 1, EC 1, TOC 1 |
| Bank (name cut off) AP | bank | 24 | DSA 4, MATH 4, OS 3, AI 2, ENG 2, NET 2, DBMS 1, DLD 1, ICS 1, OOP 1, SE 1, SPL 1, TOC 1 |
| BCC AP 2021 | public-body | 24 | ICS 6, DBMS 5, DSA 3, NET 3, OS 2, SPL 2, CA 1, COM 1, OOP 1 |
| DESCO AE(CSE) 2016 | public-body | 23 | DBMS 4, SPL 4, DSA 3, NET 3, ICS 2, SE 2, CA 1, DLD 1, MPI 1, OOP 1, OS 1 |
| Hydrocarbon Unit AD(ICT) 2025 | public-body | 23 | OS 5, NET 4, AI 3, DBMS 3, DLD 3, CA 1, DSA 1, GRAPH 1, OOP 1, SPL 1 |
| DoICT AP 2020 | public-body | 22 | NET 6, DSA 3, DBMS 2, DLD 2, MPI 2, SPL 2, AI 1, CA 1, ICS 1, OOP 1, SE 1 |
| 18th NTRCA College ICT (2024) | ntrca | 21 | DSA 4, DBMS 3, NET 3, OS 3, ICS 2, OOP 2, SE 2, SPL 2 |
| 37th BCS | bcs | 21 | NET 7, OOP 5, DSA 4, ICS 2, OS 2, SPL 1 |
| BPDB AE(CSE) 2021 | public-body | 21 | NET 6, DBMS 4, OS 4, GRAPH 2, SPL 2, COM 1, DSA 1, OOP 1 |
| BPDB AE(CSE) 2023 | public-body | 21 | DSA 3, NET 3, OS 3, GK 2, TOC 2, AI 1, BAN 1, CA 1, DBMS 1, DM 1, ENG 1, OOP 1, SPL 1 |
| Combined Bank SO(IT) 2024 | bank | 21 | NET 6, ICS 3, SPL 3, CA 2, DBMS 2, SE 2, AI 1, COM 1, MPI 1 |
| DoICT ANE 2019 | public-body | 21 | DSA 4, NET 3, SPL 3, AI 2, DBMS 2, DLD 2, CA 1, COM 1, GRAPH 1, MPI 1, SE 1 |
| RAKUB ANSE 2023 | bank | 21 | NET 13, COM 3, ICS 2, CA 1, DBMS 1, SPL 1 |
| BB AME 2023 | bank | 20 | ICS 5, NET 5, COM 3, ELN 3, CA 2, SE 2 |
| BPSC AME 2019 | bpsc | 20 | NET 6, OS 4, COM 2, ELN 2, OOP 2, SPL 2, ICS 1, PHY 1 |
| BTCL JAM 2024 | public-body | 20 | DLD 5, OS 3, DBMS 2, GRAPH 2, ICS 2, SPL 2, DM 1, DSA 1, MPI 1, NET 1 |
| Combined Bank SO(IT) 2020 | bank | 20 | CA 4, DSA 4, NET 4, DBMS 2, COM 1, DLD 1, ICS 1, OS 1, SE 1, SPL 1 |
| Titas Gas AE(CSE) 2024 | public-body | 20 | OS 5, NET 4, CA 3, DSA 3, DBMS 1, DLD 1, SE 1, SPL 1, TOC 1 |
| BTRC AD(Technical) 2019 | public-body | 19 | ELN 6, COM 3, EC 3, NET 3, PHY 2, ICS 1, MPI 1 |
| Sonali Bank Officer(IT) 2021 | bank | 19 | NET 9, DBMS 6, SPL 2, COM 1, GRAPH 1 |
| BDCCL AM(Transmission) 2022 | public-body | 18 | ELN 7, PHY 4, COM 3, DLD 3, ICS 1 |
| BTCL AE(CSE) 2017 | public-body | 18 | DBMS 6, NET 4, CA 2, SPL 2, COM 1, DLD 1, DSA 1, OS 1 |
| BTCL JAM 2022 | public-body | 18 | ICS 3, NET 3, DSA 2, ELN 2, OS 2, PHY 2, DBMS 1, MPI 1, OOP 1, SE 1 |
| Combined Bank AME/AE(IT) 2026(Jan) | bank | 18 | NET 4, CA 3, ICS 3, ELN 2, OS 2, AI 1, DBMS 1, DLD 1, SE 1 |
| Combined Bank Officer(IT) 2023 | bank | 18 | NET 10, DBMS 2, DSA 2, SE 2, ICS 1, OOP 1 |
| SPCBL AME 2021 | public-body | 18 | COM 4, NET 4, DLD 3, DBMS 2, MPI 2, EC 1, ELN 1, OS 1 |
| BB AP 2023 | bank | 17 | NET 3, OOP 3, DBMS 2, DSA 2, ICS 2, SPL 2, DLD 1, GRAPH 1, SE 1 |
| BPSC SAE 2021 | bpsc | 17 | DLD 4, NET 4, DSA 2, OS 2, SE 2, DBMS 1, ICS 1, OOP 1 |
| BSCL AE(CSE) 2026 | public-body | 17 | NET 8, DBMS 3, ICS 2, SE 2, COM 1, DSA 1 |
| BTCL AM(Technical) 2021 | public-body | 17 | COM 6, NET 5, ELN 4, PHY 1, SPL 1 |
| BTRC DAD 2021 | public-body | 17 | COM 6, ELN 5, EC 2, NET 2, MPI 1, SE 1 |
| BUET ICT Cell AHE 2025 | public-body | 17 | ICS 6, OS 5, CA 2, NET 2, EC 1, ELN 1 |
| BUET M.Sc. | admission | 17 | OS 4, AI 2, DBMS 2, MPI 2, DLD 1, DSA 1, GRAPH 1, MATH 1, NET 1, OOP 1, SPL 1 |
| Combined Bank ADA 2022 | bank | 17 | DBMS 10, OS 3, DSA 2, GRAPH 1, SPL 1 |
| NESCO AM(ICT) 2021 | public-body | 17 | ICS 3, NET 3, OS 3, COM 2, DBMS 2, DSA 2, SE 1, SPL 1 |
| Rupali Bank ANA 2023 | bank | 17 | NET 9, COM 2, DBMS 2, ICS 2, CA 1, SPL 1 |
| BPSC AME 2021 | bpsc | 16 | NET 4, OS 4, DLD 2, SPL 2, DBMS 1, DSA 1, GRAPH 1, OOP 1 |
| BPSC ANE 2020 | bpsc | 16 | ICS 3, SPL 3, DLD 2, NET 2, SE 2, AI 1, CA 1, DBMS 1, DM 1 |
| BUET M.Sc. April 2024 | admission | 16 | TOC 3, AI 2, NET 2, SE 2, DBMS 1, DLD 1, DM 1, DSA 1, OOP 1, OS 1, SPL 1 |
| Combined Bank AME/AE(IT) 2024 | bank | 16 | ICS 5, NET 4, OS 3, DLD 2, CA 1, SE 1 |
| Combined Bank AME/AHE 2023 | bank | 16 | NET 5, ICS 4, OS 3, COM 2, CA 1, DLD 1 |
| Combined Bank AP(SB & Janata) 2026 | bank | 16 | NET 6, OS 3, ICS 2, SE 2, DBMS 1, DLD 1, SPL 1 |
| Combined Bank Officer(IT) 2024 | bank | 16 | DSA 4, DM 2, OOP 2, OS 2, CA 1, DBMS 1, DLD 1, NET 1, SE 1, SPL 1 |
| Combined Bank SO(IT) 2026 | bank | 16 | DSA 3, NET 3, CA 2, COM 2, DBMS 1, DLD 1, ICS 1, SE 1, SPL 1, TOC 1 |
| Intl Crimes Tribunal Hardware Technician 2024 | public-body | 16 | ICS 7, NET 3, CA 2, AI 1, DBMS 1, DLD 1, SE 1 |
| Parliament Secretariat Programmer 2023 | public-body | 16 | NET 3, DBMS 2, DSA 2, OOP 2, OS 2, SE 2, AI 1, MPI 1, SPL 1 |
| PGCB AE(CSE) 2024 | public-body | 16 | NET 6, SE 3, DLD 2, DSA 2, CA 1, DBMS 1, SPL 1 |
| Teletalk Executive 2019 | public-body | 16 | ELN 6, ICS 3, COM 2, SPL 2, CA 1, NET 1, SE 1 |
| WZPGCL AE(CSE) 2023 | public-body | 16 | DSA 4, NET 3, DBMS 2, SE 2, SPL 2, ICS 1, OOP 1, OS 1 |
| 40th BCS (2020) | bcs | 15 | NET 6, SE 4, OOP 2, DBMS 1, ICS 1, SPL 1 |
| BCIC AP 2025 | public-body | 15 | NET 3, CA 2, DSA 2, OOP 2, OS 2, COM 1, DBMS 1, DM 1, SE 1 |
| BCPCL JI 2019 | public-body | 15 | DLD 3, NET 3, SPL 3, DSA 2, CA 1, MPI 1, OS 1, SE 1 |
| Combined Bank ADA 2024 | bank | 15 | DBMS 6, DLD 2, NET 2, SPL 2, ELN 1, ICS 1, OS 1 |
| Combined Bank AP 2026 | bank | 15 | DSA 3, AI 2, NET 2, OS 2, SE 2, DBMS 1, DLD 1, OOP 1, SPL 1 |
| Combined Bank Officer(IT) 2025 | bank | 15 | AI 2, DBMS 2, NET 2, OS 2, DSA 1, GRAPH 1, ICS 1, MPI 1, OOP 1, SE 1, SPL 1 |
| IBBL SO(Network) 2025 | private (not counted) | 15 | NET 4, OS 4, DBMS 2, SE 2, SPL 2, COM 1 |
| JBL ANA 2022 | bank | 15 | NET 8, CA 1, COM 1, DBMS 1, DSA 1, GRAPH 1, OS 1, SPL 1 |
| NWPGCL JAM 2020 | public-body | 15 | DLD 4, DSA 4, MPI 2, NET 2, DBMS 1, OS 1, SPL 1 |
| PBL SO 2018 | private (not counted) | 15 | OOP 5, DBMS 3, SE 3, ICS 2, DM 1, DSA 1 |
| 18th NTRCA School-2 (2024) | ntrca | 14 | DLD 3, COM 2, OS 2, CA 1, DBMS 1, DSA 1, ICS 1, MPI 1, NET 1, SPL 1 |
| BB AME 2019 | bank | 14 | OS 3, DBMS 2, NET 2, SE 2, CA 1, COM 1, EC 1, ELN 1, ICS 1 |
| BOF AE(CSE) 2021 | public-body | 14 | NET 5, SPL 3, DLD 2, ICS 2, CA 1, DBMS 1 |
| BPSC ADA 2022 | bpsc | 14 | DLD 3, NET 3, DSA 2, ICS 2, SPL 2, OOP 1, SE 1 |
| BRICM AME 2024 | public-body | 14 | NET 10, ELN 2, DLD 1, SE 1 |
| BTRC SAD 2021 | public-body | 14 | PHY 5, ELN 4, COM 1, ICS 1, MPI 1, NET 1, SE 1 |
| Cadet College Lecturer(ICT) 2025 | public-body | 14 | DLD 4, NET 3, OS 2, SPL 2, DBMS 1, DSA 1, OOP 1 |
| Combined Bank ADA 2026 | bank | 14 | DBMS 5, ICS 4, NET 2, CA 1, OS 1, SE 1 |
| Combined Bank AP 2024 | bank | 14 | SPL 5, DBMS 3, OOP 3, DSA 2, SE 1 |
| Combined Bank SO(IT) 2022 | bank | 14 | NET 5, DBMS 2, DSA 2, COM 1, DLD 1, OS 1, SPL 1, TOC 1 |
| Fisheries & Livestock Instructor(CS) 2023 | public-body | 14 | NET 3, DBMS 2, DLD 2, DM 2, OS 2, COM 1, ICS 1, SPL 1 |
| ICB Securities AP 2026 | public-body | 14 | CA 2, DBMS 2, GK 2, MATH 2, NET 2, DM 1, ENG 1, ICS 1, SPL 1 |
| JBL ASA 2021 | bank | 14 | OS 7, NET 3, DBMS 1, GRAPH 1, SPL 1, TOC 1 |
| NPCBL Engineer(Cyber Security) 2026 | public-body | 14 | NET 12, AI 1, ICS 1 |
| RAKUB NSE 2021 | bank | 14 | NET 14 |
| Teletalk AM(IT) 2023 | public-body | 14 | DLD 3, NET 3, OS 2, SE 2, AI 1, DBMS 1, DSA 1, SPL 1 |
| WZPDCL AE(CSE) 2019 | public-body | 14 | NET 3, DBMS 2, DLD 2, DSA 2, OOP 2, COM 1, DM 1, SPL 1 |
| WZPDCL SAE 2023 | public-body | 14 | ICS 3, NET 3, DBMS 2, SPL 2, CA 1, DM 1, MPI 1, OOP 1 |
| BAERA Engineer(CSE) 2023 | public-body | 13 | DSA 6, DLD 1, DM 1, ICS 1, NET 1, OS 1, SE 1, SPL 1 |
| BAERA Engineer(CSE) January 2021 | public-body | 13 | ICS 3, DSA 2, NET 2, OS 2, DBMS 1, OOP 1, SE 1, SPL 1 |
| BCC AP 2023 | public-body | 13 | NET 5, DSA 2, ICS 2, OOP 2, DBMS 1, SPL 1 |
| Combined Bank AHE 2021 | bank | 13 | OS 3, ICS 2, NET 2, OOP 2, COM 1, DBMS 1, DLD 1, DSA 1 |
| JBL ANE 2022 | bank | 13 | NET 6, GRAPH 2, DBMS 1, OOP 1, SE 1, SPL 1, TOC 1 |
| RAKUB ANSE 2026 | bank | 13 | NET 6, OS 2, AI 1, CA 1, COM 1, DBMS 1, SPL 1 |
| 18th NTRCA School (2024) | ntrca | 12 | DLD 6, CA 2, ICS 2, OS 1, SPL 1 |
| BB AD(General) 2018 | bank | 12 | ICS 9, NET 3 |
| BTRC AD 2021 | public-body | 12 | ELN 6, CA 2, COM 2, NET 2 |
| Dhaka WASA AME(Network) 2025 | public-body | 12 | EC 2, ELN 2, NET 2, OS 2, COM 1, DBMS 1, OOP 1, SPL 1 |
| PGCB AE(CSE) 2021 | public-body | 12 | NET 3, DBMS 2, DLD 2, CA 1, DSA 1, MPI 1, SPL 1, TOC 1 |
| RAKUB ADBA 2020 | bank | 12 | DBMS 11, ICS 1 |
| Rupali Bank ANE 2021 | bank | 12 | DBMS 3, COM 2, DSA 2, OS 2, DLD 1, NET 1, SPL 1 |
| SPCBL SAE 2022 | public-body | 12 | NET 3, SPL 3, OOP 2, OS 2, DSA 1, ICS 1 |
| BAPEX AGM(ICT) 2023 | public-body | 11 | DBMS 3, NET 3, DLD 2, DSA 2, SPL 1 |
| BGDCL AM(CSE) 2024 | public-body | 11 | DBMS 3, DSA 2, SPL 2, MPI 1, NET 1, OS 1, SE 1 |
| BPSC AE 2022 | bpsc | 11 | NET 5, COM 2, CA 1, DSA 1, SE 1, SPL 1 |
| Jamuna Oil JO(IT & MIS) 2025 | public-body | 11 | DSA 2, NET 2, OS 2, CA 1, DBMS 1, DLD 1, SE 1, SPL 1 |
| JBL SO(ANE) 2020 | bank | 11 | DLD 3, NET 3, DBMS 2, DSA 2, COM 1 |
| RPGCL AM(ICT) 2022 | public-body | 11 | OS 3, COM 2, NET 2, SPL 2, DSA 1, ICS 1 |
| Sonali Bank ADA 2026 | bank | 11 | NET 6, SPL 2, DSA 1, OS 1, SE 1 |
| BAERA Engineer(CSE) November 2021 | public-body | 10 | DBMS 2, DLD 2, NET 2, AI 1, CA 1, DSA 1, SPL 1 |
| BB AD(General) 2021 | bank | 10 | ICS 5, CA 1, DLD 1, ELN 1, NET 1, OS 1 |
| BB AD(General) 2022 | bank | 10 | NET 3, COM 2, OS 2, CA 1, ICS 1, SPL 1 |
| BB AD(General) 2023 | bank | 10 | ICS 5, OS 2, DBMS 1, DSA 1, NET 1 |
| BB AD(General) 2026 | bank | 10 | NET 4, OS 3, CA 1, ICS 1, SPL 1 |
| BPDB AE(CSE) 2018 | public-body | 10 | DSA 2, NET 2, SE 2, DBMS 1, OOP 1, OS 1, SPL 1 |
| BRPL AM(ICT) 2024 | public-body | 10 | NET 3, DBMS 2, DLD 1, DSA 1, EC 1, ELN 1, OS 1 |
| Combined Bank AME 2026 | bank | 10 | ICS 3, NET 3, OS 2, DBMS 1, DLD 1 |
| DBBL ANE/AHE 2019 | private (not counted) | 10 | NET 5, SPL 2, DBMS 1, EC 1, OS 1 |
| ICB AMCL AP 2024 | public-body | 10 | NET 3, SPL 3, DBMS 1, DSA 1, OS 1, SE 1 |
| NHA AP 2019 | public-body | 10 | AI 2, SE 2, DBMS 1, DLD 1, NET 1, OOP 1, OS 1, SPL 1 |
| Rupali Bank ANE 2023 | bank | 10 | NET 8, DBMS 1, ICS 1 |
| SPCBL SAME 2022 | public-body | 10 | NET 7, OS 2, COM 1 |
| 15th NTRCA | ntrca | 9 | SPL 5, OOP 4 |
| BB AP 2019 | bank | 9 | NET 3, DBMS 1, DLD 1, DM 1, ICS 1, OOP 1, SPL 1 |
| BUET AP 2025 | public-body | 9 | NET 2, OOP 2, CA 1, DBMS 1, EC 1, ICS 1, SPL 1 |
| DESCO AE(IT) 2022 | public-body | 9 | NET 5, SPL 2, DLD 1, DSA 1 |
| DESCO SAE 2022 | public-body | 9 | MPI 2, CA 1, COM 1, DBMS 1, DLD 1, DSA 1, NET 1, SPL 1 |
| DMTCL AE(ICT) 2023 | public-body | 9 | NET 3, SPL 2, DBMS 1, DSA 1, ICS 1, OS 1 |
| DUET AP 2025 | public-body | 9 | DM 2, NET 2, DLD 1, DSA 1, EC 1, MPI 1, SPL 1 |
| ICT Ministry AP 2021 | public-body | 9 | ICS 3, DBMS 2, CA 1, NET 1, SE 1, SPL 1 |
| NWPGCL AM(ICT) 2024 | public-body | 9 | DBMS 4, SPL 2, COM 1, NET 1, SE 1 |
| NWPGCL JAM(ICT) 2022 | public-body | 9 | NET 3, DBMS 2, SPL 2, DLD 1, DM 1 |
| 17th NTRCA | ntrca | 8 | SPL 5, OOP 3 |
| BOF SAE(Computer) 2021 | public-body | 8 | NET 2, SE 2, CA 1, DSA 1, OOP 1, OS 1 |
| BTRC DAD(Technical) 2019 | public-body | 8 | COM 5, ELN 2, EC 1 |
| Combined Bank AP 2021 | bank | 8 | DSA 4, OOP 2, DBMS 1, TOC 1 |
| DPDC JAM(ICT) 2020 | public-body | 8 | DLD 3, SPL 2, DBMS 1, DSA 1, OS 1 |
| Petrobangla AM(IT) 2022 | public-body | 8 | DLD 1, DSA 1, EC 1, ELN 1, GRAPH 1, NET 1, SE 1, SPL 1 |
| PGCB SAE(Computer) 2020 | public-body | 8 | DBMS 2, DSA 2, OS 2, NET 1, SPL 1 |
| BBL AM(ICT) 2019 | bank | 7 | DSA 2, SPL 2, CA 1, DBMS 1, NET 1 |
| BOF AP 2022 | public-body | 7 | COM 2, NET 2, SPL 2, CA 1 |
| BPDB AE(CSE) 2024 | public-body | 7 | DLD 2, CA 1, DSA 1, NET 1, OS 1, SE 1 |
| BSCPLC AM(Engineering) 2024 | public-body | 7 | AI 1, CA 1, COM 1, DBMS 1, DM 1, NET 1, SPL 1 |
| Combined Bank 2023 | bank | 7 | NET 2, SE 2, DBMS 1, DSA 1, GRAPH 1 |
| Combined Bank SO 2020 | bank | 7 | CA 1, COM 1, DBMS 1, DLD 1, ELN 1, ICS 1, SPL 1 |
| DUET AP 2020 | public-body | 7 | ICS 2, DBMS 1, NET 1, OOP 1, OS 1, SE 1 |
| EGCB SAE(ICT) 2023 | public-body | 7 | NET 3, DBMS 1, ICS 1, OS 1, SE 1 |
| IBBL QA Engineer 2025 | private (not counted) | 7 | DBMS 2, NET 2, SE 2, OOP 1 |
| IFIC Bank MTO 2025 | private (not counted) | 7 | DBMS 1, DSA 1, GRAPH 1, NET 1, OOP 1, OS 1, SPL 1 |
| MRA SCO 2023 | public-body | 7 | DLD 3, DBMS 1, DSA 1, ICS 1, NET 1 |
| PGCB SAE 2021 | public-body | 7 | ICS 2, DBMS 1, MPI 1, OS 1, SE 1, SPL 1 |
| RAKUB ME 2021 | bank | 7 | OS 4, NET 2, COM 1 |
| SPARRSO 2020 | public-body | 7 | NET 6, SPL 1 |
| BBA AME 2025 | public-body | 6 | NET 3, SPL 2, DBMS 1 |
| BCIC AP 2022 | public-body | 6 | NET 2, DLD 1, OOP 1, OS 1, SE 1 |
| BPSC ME 2021 | bpsc | 6 | NET 3, DSA 2, SE 1 |
| BUET AP(Exam Controller) 2025 | public-body | 6 | CA 2, DBMS 1, NET 1, OS 1, SPL 1 |
| Combined Bank SO(AME) 2021 | bank | 6 | OOP 2, DLD 1, ICS 1, NET 1, OS 1 |
| DESCO SAE(Computer) 2026 | public-body | 6 | DBMS 1, DLD 1, DSA 1, EC 1, MPI 1, NET 1 |
| ICT Ministry AP 2017 | public-body | 6 | NET 3, DLD 1, ICS 1, OS 1 |
| NPCBL JAM 2022 | public-body | 6 | DLD 3, ICS 3 |
| NU AP 2020 | public-body | 6 | OS 2, DBMS 1, NET 1, OOP 1, SPL 1 |
| PBL HE 2023 | private (not counted) | 6 | ICS 2, NET 2, OS 2 |
| Sonali Bank ADBA 2024 | bank | 6 | DLD 2, OS 2, NET 1, SPL 1 |
| 16th NTRCA | ntrca | 5 | SPL 4, OOP 1 |
| 45th BCS General (Sci & Tech) (2024) | bcs | 5 | NET 3, ICS 2 |
| APSCL AE(ICT) 2021 | public-body | 5 | DBMS 1, DLD 1, DSA 1, NET 1, OS 1 |
| BCC AP 2017 | public-body | 5 | SPL 4, DBMS 1 |
| BCC Programmer 2019 | public-body | 5 | OS 3, OOP 1, SPL 1 |
| BEPZA Programmer 2023 | public-body | 5 | NET 3, DSA 1, ICS 1 |
| BSCL AE(CSE) 2025 | public-body | 5 | DBMS 1, ICS 1, NET 1, SE 1, SPL 1 |
| DBBL PO 2017 | private (not counted) | 5 | DSA 2, OOP 2, DBMS 1 |
| DESCO SAE 2023 | public-body | 5 | OOP 2, DSA 1, ICS 1, NET 1 |
| GTCL AE(CSE) 2022 | public-body | 5 | NET 2, AI 1, OS 1, SPL 1 |
| MGMCL AM(ICT) 2022 | public-body | 5 | NET 2, OS 2, COM 1 |
| Milk Vita AM(CSE) 2023 | public-body | 5 | DBMS 2, OS 2, SPL 1 |
| MM AP 2017 | public-body | 5 | CA 1, ICS 1, MPI 1, NET 1, SPL 1 |
| MoL AME 2023 | public-body | 5 | NET 4, OS 1 |
| NESCO AM(ICT) 2018 | public-body | 5 | ICS 2, DBMS 1, DSA 1, NET 1 |
| NSDA AME 2024 | public-body | 5 | NET 5 |
| NWPGCL AE(CSE) | public-body | 5 | SPL 2, DBMS 1, NET 1, OS 1 |
| SGFL AE(IT) 2023 | public-body | 5 | DSA 2, NET 2, OS 1 |
| Sonali Bank ADA 2020 | bank | 5 | DSA 3, DBMS 1, SPL 1 |
| BARC Programmer 2023 | public-body | 4 | SE 2, NET 1, SPL 1 |
| BB AME 2016 | bank | 4 | ICS 3, NET 1 |
| BB AME 2017 | bank | 4 | CA 1, DLD 1, MPI 1, NET 1 |
| BGDCL AE(CSE) 2021 | public-body | 4 | NET 2, OS 1, SPL 1 |
| BKKB AP 2017 | bank | 4 | DBMS 2, ICS 1, NET 1 |
| BMA AE 2021 | public-body | 4 | NET 3, DLD 1 |
| BWDB AP 2018 | public-body | 4 | DLD 2, NET 2 |
| Combined Bank AME 2019 | bank | 4 | ICS 2, DBMS 1, SE 1 |
| Combined Bank AP 2023 | bank | 4 | COM 1, DSA 1, NET 1, SPL 1 |
| DBBL MTO 2024 | private (not counted) | 4 | SPL 2, DSA 1, NET 1 |
| DG Food AP 2022 | public-body | 4 | DBMS 3, SPL 1 |
| Petrobangla AE 2022 | public-body | 4 | ENG 1, GK 1, MATH 1, TOC 1 |
| PSB AP 2018 | bank | 4 | SPL 2, DSA 1, NET 1 |
| PSB Programmer 2018 | bank | 4 | DSA 1, OOP 1, SE 1, SPL 1 |
| APSCL AM(MIS) 2021 | public-body | 3 | DSA 2, DM 1 |
| BCPSC AP 2018 | public-body | 3 | SPL 2, DBMS 1 |
| BIWTA AE(CSE) 2023 | public-body | 3 | DBMS 1, NET 1, OS 1 |
| BKSP AP 2022 | public-body | 3 | SPL 2, DBMS 1 |
| BNPS AP 2017 | public-body | 3 | DSA 3 |
| BPSC Lecturer 2017 | bpsc | 3 | DLD 1, DSA 1, NET 1 |
| BREB AP 2023 | public-body | 3 | NET 2, SPL 1 |
| BTCL AME 2023 | public-body | 3 | NET 2, OS 1 |
| BTV AP 2019 | public-body | 3 | NET 2, OS 1 |
| CB AP 2018 | bank | 3 | DBMS 1, ICS 1, SE 1 |
| Combined Bank AP 2020 | bank | 3 | DSA 2, CA 1 |
| ICB AP 2017 | public-body | 3 | ICS 2, SE 1 |
| ICB Securities AP 2026(Aptitude) | public-body | 3 | DBMS 1, OOP 1, SPL 1 |
| NPCBL ET(Soft) 2023 | public-body | 3 | NET 1, OS 1, SE 1 |
| PBL SQA 2023 | private (not counted) | 3 | SE 3 |
| RAKUB Programmer 2021 | bank | 3 | DSA 1, NET 1, OOP 1 |
| Teletalk Executive(Technical) 2015 | public-body | 3 | COM 2, SPL 1 |
| 17th NTRCA School Prelim (2022) | ntrca | 2 | ICS 1, NET 1 |
| ABL Officer(ICT) 2017 | bank | 2 | DBMS 1, ICS 1 |
| BAUST AP 2021 | public-body | 2 | DBMS 1, NET 1 |
| BB AP 2016 | bank | 2 | NET 1, SPL 1 |
| BCSCL NE 2017 | public-body | 2 | COM 1, NET 1 |
| BLPU AP 2018 | public-body | 2 | ICS 1, SE 1 |
| BPSC AME 2017 | bpsc | 2 | ICS 2 |
| BPSC SCO 2022 | bpsc | 2 | DSA 2 |
| BREB 2019 | public-body | 2 | CA 1, DSA 1 |
| BUET M.Sc. October 2015 | admission | 2 | CA 1, MPI 1 |
| BUET M.Sc. October 2019 | admission | 2 | SE 2 |
| Combined Bank Officer(IT) 2019 | bank | 2 | DSA 2 |
| DESCO AE 2023 | public-body | 2 | NET 1, SE 1 |
| IBBL AD 2017 | private (not counted) | 2 | DSA 1, SE 1 |
| NACTAR 2020 | public-body | 2 | DBMS 1, NET 1 |
| NRCC AP 2021 | public-body | 2 | DBMS 1, NET 1 |
| NSDA AP 2022 | public-body | 2 | NET 1, SPL 1 |
| PGCL SAE 2021 | public-body | 2 | DBMS 1, NET 1 |
| SGFL AGE 2021 | public-body | 2 | DLD 1, NET 1 |
| SPARRSO TO(IT) 2021 | public-body | 2 | SPL 2 |
| 13th NTRCA School-2 Prelim (2016) | ntrca | 1 | NET 1 |
| 14th NTRCA College Prelim (2017) | ntrca | 1 | NET 1 |
| 15th NTRCA College Prelim (2019) | ntrca | 1 | NET 1 |
| 16th NTRCA College Prelim (2019) | ntrca | 1 | ICS 1 |
| 18th NTRCA College Prelim (2024) | ntrca | 1 | ICS 1 |
| 18th NTRCA School Prelim (2024) | ntrca | 1 | NET 1 |
| 43rd BCS (2023) | bcs | 1 | NET 1 |
| 43rd BCS CSE | bcs | 1 | CA 1 |
| 44th BCS CSE (2023) | bcs | 1 | CA 1 |
| ABL SO(IT) 2017 | bank | 1 | ICS 1 |
| BB IT 2020 | bank | 1 | NET 1 |
| BDB SO(IT) 2017 | bank | 1 | OOP 1 |
| BDCCL AM(Cloud) 2022 | public-body | 1 | ENG 1 |
| BITAC AME(ICT) 2021 | public-body | 1 | OS 1 |
| BITAC AP 2023 | public-body | 1 | OOP 1 |
| BPSC AP | bpsc | 1 | SE 1 |
| BPSC AP 2020 | bpsc | 1 | SPL 1 |
| BPSC AP 2026 | bpsc | 1 | DLD 1 |
| BPSC Lecturer 2019 | bpsc | 1 | CA 1 |
| BPSC NE 2025 | bpsc | 1 | DLD 1 |
| BRDB AP 2023 | public-body | 1 | DBMS 1 |
| BREB AGM(IT) 2021 | public-body | 1 | NET 1 |
| BTCL JAM 2018 | public-body | 1 | CA 1 |
| BUET M.Sc. 2016 | admission | 1 | CA 1 |
| BUET M.Sc. 2019 | admission | 1 | CA 1 |
| BUET M.Sc. April 2016 | admission | 1 | DSA 1 |
| Combined Bank Officer(IT) 2018 | bank | 1 | DSA 1 |
| DESCO SAE 2021 | public-body | 1 | CA 1 |
| EPB Programmer 2018 | public-body | 1 | SE 1 |
| JRBDB AP 2023 | public-body | 1 | NET 1 |
| KGDCL AE(CSE) 2021 | public-body | 1 | SPL 1 |
| MRA AME 2022 | public-body | 1 | COM 1 |
| NESCO AM(ICT) 2020 | public-body | 1 | CA 1 |
| NESCO JAM(ICT) 2021 | public-body | 1 | DBMS 1 |
| PGCB AE(CSE) 2023 | public-body | 1 | CA 1 |
| PKB Programmer 2019 | bank | 1 | DSA 1 |
| PSB ADA 2018 | bank | 1 | DSA 1 |
| PSB ADA 2019 | bank | 1 | CA 1 |
| SGFL AE(IT) 2021 | public-body | 1 | CA 1 |

## By folder (page → subjects)

### .

- [Exam_Bank_Assistant_Programmer_Written.md](Exam_Bank_Assistant_Programmer_Written.md) — OOP, SE, NET, DLD, OS, ICS, DSA, SPL, DBMS, AI, MATH, TOC, ENG
- [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) — SPL, DBMS, NET, DM, CA, MATH, GK, ENG, ICS

### 18th NTCRA

- [01_ntrca-qbank-p01-c-theory-q01-17.md](18th%20NTCRA/01_ntrca-qbank-p01-c-theory-q01-17.md) — SPL
- [02_ntrca-qbank-p02-c-functions-programs-q18-40.md](18th%20NTCRA/02_ntrca-qbank-p02-c-functions-programs-q18-40.md) — SPL
- [03_ntrca-qbank-p03-c-series-oop-q41-62.md](18th%20NTCRA/03_ntrca-qbank-p03-c-series-oop-q41-62.md) — SPL, OOP
- [04_ntrca-qbank-p04-oop-dsa-q63-83.md](18th%20NTCRA/04_ntrca-qbank-p04-oop-dsa-q63-83.md) — OOP, DSA
- [05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md](18th%20NTCRA/05_ntrca-qbank-p05-algorithms-dbms-theory-q84-102.md) — DSA, DBMS
- [06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md](18th%20NTCRA/06_ntrca-qbank-p06-dbms-keys-sql-q103-121.md) — DBMS, OS
- [07_ntrca-qbank-p07-sql-practice-se-q122-137.md](18th%20NTCRA/07_ntrca-qbank-p07-sql-practice-se-q122-137.md) — DBMS, SE
- [08_ntrca-qbank-p08-se-testing-web-q138-157.md](18th%20NTCRA/08_ntrca-qbank-p08-se-testing-web-q138-157.md) — SE, ICS
- [09_ntrca-qbank-p09-xss-os-networking-q158-177.md](18th%20NTCRA/09_ntrca-qbank-p09-xss-os-networking-q158-177.md) — ICS, OS, NET
- [10_ntrca-qbank-p10-networking-architecture-q178-196.md](18th%20NTCRA/10_ntrca-qbank-p10-networking-architecture-q178-196.md) — NET, COM, ICS, CA
- [11_ntrca-qbank-p11-digital-logic-ai-q197-213.md](18th%20NTCRA/11_ntrca-qbank-p11-digital-logic-ai-q197-213.md) — DLD, COM, AI, ICS
- [12_ntrca18-lecturer-ict452-paper-p1.md](18th%20NTCRA/12_ntrca18-lecturer-ict452-paper-p1.md) — SPL, OOP, SE, DSA, ICS, OS, DBMS
- [13_ntrca18-lecturer-ict452-paper-p2.md](18th%20NTCRA/13_ntrca18-lecturer-ict452-paper-p2.md) — DBMS, NET

### BANK

- [01_parity-method-and-delta-ascii.md](BANK/01_parity-method-and-delta-ascii.md) — CA, NET
- [02_class-diagram-and-short-questions.md](BANK/02_class-diagram-and-short-questions.md) — NET, OOP, ENG, MATH, CA
- [03_jfet-regions-of-operation.md](BANK/03_jfet-regions-of-operation.md) — SE, ELN
- [04_virtual-machine-and-data-centers.md](BANK/04_virtual-machine-and-data-centers.md) — ICS
- [05_packetization-delay-and-cloud-models.md](BANK/05_packetization-delay-and-cloud-models.md) — NET, ICS
- [06_data-centre-energy-and-payment-gateway.md](BANK/06_data-centre-energy-and-payment-gateway.md) — ICS, NET
- [07_delta-ascii-tv-rate-packetization.md](BANK/07_delta-ascii-tv-rate-packetization.md) — NET, COM
- [08_payment-gateway-and-cmmi-verification.md](BANK/08_payment-gateway-and-cmmi-verification.md) — NET, SE

### BCS

- [01_interrupt-part2-mergesort.md](BCS/01_interrupt-part2-mergesort.md) — MPI, CA, DSA
- [02_virus-worm-trojan-agents.md](BCS/02_virus-worm-trojan-agents.md) — NET, AI
- [03_c-digit-sum-flowchart.md](BCS/03_c-digit-sum-flowchart.md) — SPL
- [04_assembly-number-systems-boolean.md](BCS/04_assembly-number-systems-boolean.md) — MPI, DLD
- [05_course-outline-class-01-09.md](BCS/05_course-outline-class-01-09.md) — DSA
- [06_45th-bcs-physics-logic-questions.md](BCS/06_45th-bcs-physics-logic-questions.md) — AI, COM, PHY, DLD
- [07_dns-tcp-udp-differences.md](BCS/07_dns-tcp-udp-differences.md) — NET
- [08_machine-learning-and-problem-solving.md](BCS/08_machine-learning-and-problem-solving.md) — SE, AI, SPL
- [09_bfs-dfs-and-linked-list.md](BCS/09_bfs-dfs-and-linked-list.md) — COM, DSA
- [10_course-outline-class-10-19.md](BCS/10_course-outline-class-10-19.md) — COM
- [11_flip-flops-truth-table-multiplexer.md](BCS/11_flip-flops-truth-table-multiplexer.md) — DLD, COM
- [12_course-outline-class-20-27.md](BCS/12_course-outline-class-20-27.md) — CA
- [13_structured-vs-oop-and-arrays.md](BCS/13_structured-vs-oop-and-arrays.md) — SPL
- [14_course-outline-class-28-32.md](BCS/14_course-outline-class-28-32.md) — TOC
- [15_pipelining-and-interrupt-enable.md](BCS/15_pipelining-and-interrupt-enable.md) — CA, MPI
- [16_shortest-path-sql-boolean-truth-table.md](BCS/16_shortest-path-sql-boolean-truth-table.md) — GRAPH, ICS, DBMS, DLD
- [17_pipelining-non-pipelined-comparison.md](BCS/17_pipelining-non-pipelined-comparison.md) — CA
- [18_database-security-osi-binary-logic.md](BCS/18_database-security-osi-binary-logic.md) — OOP, DBMS, DLD, NET
- [19_pcm-and-computer-building-blocks.md](BCS/19_pcm-and-computer-building-blocks.md) — COM, ICS
- [20_software-risks-overloaded-functions.md](BCS/20_software-risks-overloaded-functions.md) — SE, OOP
- [21_sampling-rate-and-modulation.md](BCS/21_sampling-rate-and-modulation.md) — COM
- [22_pulse-code-modulation.md](BCS/22_pulse-code-modulation.md) — COM
- [23_karnaugh-map-nyquist-sampling.md](BCS/23_karnaugh-map-nyquist-sampling.md) — DLD, COM
- [24_deadlock-detection-recovery-os-hardware.md](BCS/24_deadlock-detection-recovery-os-hardware.md) — OS, SE
- [25_ipv4-ipv6-addressing-classes.md](BCS/25_ipv4-ipv6-addressing-classes.md) — MPI, NET
- [26_ipv6-prefix-table-structured-programming.md](BCS/26_ipv6-prefix-table-structured-programming.md) — NET, SPL
- [27_oop-advantages-data-structures-circular-queue.md](BCS/27_oop-advantages-data-structures-circular-queue.md) — SPL, OOP, DSA
- [28_computer-system-components-pipelining-question.md](BCS/28_computer-system-components-pipelining-question.md) — ICS, CA
- [29_circular-queue-solution-operating-system-deadlock.md](BCS/29_circular-queue-solution-operating-system-deadlock.md) — DSA, OS
- [30_hospital-primary-key-transistor-alpha-beta.md](BCS/30_hospital-primary-key-transistor-alpha-beta.md) — DLD, DBMS, ELN
- [31_function-pointer-s2pl-class-spooling.md](BCS/31_function-pointer-s2pl-class-spooling.md) — SPL, DBMS, OOP, OS
- [32_8086-reset-thrashing-mov-modulo-2.md](BCS/32_8086-reset-thrashing-mov-modulo-2.md) — MPI, OS, DLD
- [33_line-voltage-2s-complement-sorting-cpu.md](BCS/33_line-voltage-2s-complement-sorting-cpu.md) — EC, DLD, DSA, CA
- [34_maximum-power-transfer-sql-8255-ppi.md](BCS/34_maximum-power-transfer-sql-8255-ppi.md) — EC, DBMS, MPI, DLD
- [35_16qam-backpropagation-esc-ui-design.md](BCS/35_16qam-backpropagation-esc-ui-design.md) — COM, AI, MPI, SE
- [36_full-adder-superposition-decision-tree.md](BCS/36_full-adder-superposition-decision-tree.md) — DLD, EC, DSA
- [37_bcs-2025-ofdma-cache-mapping-bipartite.md](BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.md) — NET, CA, GRAPH
- [38_user-centered-design-schrodinger-hash-bitmap.md](BCS/38_user-centered-design-schrodinger-hash-bitmap.md) — SE, PHY, DSA, DBMS
- [39_c-operator-associativity-cocomo.md](BCS/39_c-operator-associativity-cocomo.md) — SPL, SE
- [40_big-o-firewall-scheduling-shannon-hartley.md](BCS/40_big-o-firewall-scheduling-shannon-hartley.md) — DSA, NET, SE, COM
- [41_array-pointers-white-box-bst-pcb.md](BCS/41_array-pointers-white-box-bst-pcb.md) — SPL, SE, DSA, OS
- [42_gmsk-am-bandwidth-feedback-circuits.md](BCS/42_gmsk-am-bandwidth-feedback-circuits.md) — COM, DLD
- [43_nlp-and-mosfet-gate-voltage.md](BCS/43_nlp-and-mosfet-gate-voltage.md) — AI, ELN
- [44_db-keys-reinforcement-learning-epsilon.md](BCS/44_db-keys-reinforcement-learning-epsilon.md) — DSA, DBMS, AI, CA
- [45_hamiltonian-cycle-and-rnn.md](BCS/45_hamiltonian-cycle-and-rnn.md) — ELN, GRAPH, AI
- [46_zombie-process-and-tdm-fdm.md](BCS/46_zombie-process-and-tdm-fdm.md) — DLD, OS, COM
- [47_white-box-testing-and-pop3.md](BCS/47_white-box-testing-and-pop3.md) — OS, SE, NET, EC
- [48_java-final-keyword-and-ad.md](BCS/48_java-final-keyword-and-ad.md) — OOP
- [49_entropy-bcd-counter-planar-graph.md](BCS/49_entropy-bcd-counter-planar-graph.md) — CA, COM, DLD, GRAPH
- [50_class-a-vhf-8086-anticoincidence.md](BCS/50_class-a-vhf-8086-anticoincidence.md) — ELN, COM, DLD
- [51_encapsulation-ipv6-bankers-algorithm.md](BCS/51_encapsulation-ipv6-bankers-algorithm.md) — OS, OOP, NET
- [52_cascadeless-schedules-waterfall-model.md](BCS/52_cascadeless-schedules-waterfall-model.md) — EC, DBMS, SE
- [53_bfs-injective-functions-tree-leaves.md](BCS/53_bfs-injective-functions-tree-leaves.md) — DBMS, DSA, DM, GRAPH
- [54_qpsk-bpsk-8086-addressing.md](BCS/54_qpsk-bpsk-8086-addressing.md) — COM, MPI, CA, DSA
- [55_ieee-standards-von-neumann-rlc-phase.md](BCS/55_ieee-standards-von-neumann-rlc-phase.md) — NET, CA, EC
- [56_regression-metrics-delta-modulation-transistor.md](BCS/56_regression-metrics-delta-modulation-transistor.md) — AI, COM, ELN
- [57_write-ahead-logging-random-search.md](BCS/57_write-ahead-logging-random-search.md) — GRAPH, DBMS, PHY, AI
- [58_euler-corollary-deadlock-insertion-sort.md](BCS/58_euler-corollary-deadlock-insertion-sort.md) — GRAPH, OS, DSA
- [59_blockchain-polynomial-suffix-tree.md](BCS/59_blockchain-polynomial-suffix-tree.md) — DLD, NET, GRAPH, DSA
- [60_tunnel-diode-hill-climbing.md](BCS/60_tunnel-diode-hill-climbing.md) — CA, ELN, AI
- [61_gantt-chart-rsa-binary-conversion.md](BCS/61_gantt-chart-rsa-binary-conversion.md) — COM, SE, NET, DLD
- [62_pla-power-factor-set-intersection.md](BCS/62_pla-power-factor-set-intersection.md) — AI, DLD, EC, DM, COM
- [63_pure-virtual-ai-techniques-rlc.md](BCS/63_pure-virtual-ai-techniques-rlc.md) — DLD, OOP, AI, EC

### BUET JOB

- [01_bpdb-ae-jfet-and-tokens.md](BUET%20JOB/01_bpdb-ae-jfet-and-tokens.md) — ELN, TOC, OS
- [02_bjt-regions-and-jfet-principle.md](BUET%20JOB/02_bjt-regions-and-jfet-principle.md) — ELN
- [03_pgcb-sae-subnet-cfg-mysql-js.md](BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.md) — NET, TOC, DBMS, ICS
- [04_heap-insert-and-delete-7.md](BUET%20JOB/04_heap-insert-and-delete-7.md) — NET, DSA
- [05_gas-sensor-pgcb-trigger-xor-cache.md](BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) — SPL, MPI, DBMS, DLD, CA
- [06_c-recursion-sql-java-completion.md](BUET%20JOB/06_c-recursion-sql-java-completion.md) — SPL, DBMS, OOP
- [07_subnet-grep-divide-conquer.md](BUET%20JOB/07_subnet-grep-divide-conquer.md) — NET, OS, DSA, SPL
- [08_ccc-ap-2017-c-and-sql.md](BUET%20JOB/08_ccc-ap-2017-c-and-sql.md) — SPL, DBMS
- [09_facade-shapemaker-steps-3-4.md](BUET%20JOB/09_facade-shapemaker-steps-3-4.md) — OOP
- [10_stages-osi-model-bcc-mcq.md](BUET%20JOB/10_stages-osi-model-bcc-mcq.md) — SE, NET, GK, ICS, CA, DBMS, COM
- [11_agents-and-facade-interface.md](BUET%20JOB/11_agents-and-facade-interface.md) — AI, OOP
- [12_equilibrium-index-biwta-subnet.md](BUET%20JOB/12_equilibrium-index-biwta-subnet.md) — DSA, NET
- [13_pattern-processor-widths-blacklist.md](BUET%20JOB/13_pattern-processor-widths-blacklist.md) — CA, SPL, MPI, NET
- [14_er-model-python-o1-search.md](BUET%20JOB/14_er-model-python-o1-search.md) — OOP, DBMS, SPL, DSA
- [15_bpdb-customer-slot-scheduling.md](BUET%20JOB/15_bpdb-customer-slot-scheduling.md) — OS, DSA
- [16_inclusion-exclusion-and-equilibrium.md](BUET%20JOB/16_inclusion-exclusion-and-equilibrium.md) — DSA, DM
- [17_des-feistel-and-rational-agent.md](BUET%20JOB/17_des-feistel-and-rational-agent.md) — NET, AI
- [18_regex-and-des-structure.md](BUET%20JOB/18_regex-and-des-structure.md) — TOC, NET
- [19_protocol-layer-sql-terms.md](BUET%20JOB/19_protocol-layer-sql-terms.md) — OOP, NET, DBMS, OS
- [20_bpdb-tokens-and-linux-users.md](BUET%20JOB/20_bpdb-tokens-and-linux-users.md) — ELN, TOC, OS
- [21_linux-count-and-max-subarray.md](BUET%20JOB/21_linux-count-and-max-subarray.md) — OS, DSA
- [22_vm-containers-and-network-questions.md](BUET%20JOB/22_vm-containers-and-network-questions.md) — ICS, NET
- [23_buet-msc-cse-questions-1-9.md](BUET%20JOB/23_buet-msc-cse-questions-1-9.md) — AI, OS, SPL, OOP, MPI, DBMS
- [24_bengali-mcq-gk-and-english.md](BUET%20JOB/24_bengali-mcq-gk-and-english.md) — GK, ENG
- [25_petrobangla-bangla-mcq-1-10.md](BUET%20JOB/25_petrobangla-bangla-mcq-1-10.md) — SE, OS, COM, NET, BAN, GK
- [26_bscll-ae-cse-questions-1-4.md](BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) — GRAPH, DSA, MPI, SE, ICS, COM, DBMS
- [27_islamic-bank-network-questions-1-6.md](BUET%20JOB/27_islamic-bank-network-questions-1-6.md) — NET, OS, COM, DBMS, SE
- [28_islamic-bank-cont-and-dpdc.md](BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) — SE, NET, SPL, DBMS, DSA, AI, OS
- [29_general-knowledge-english-math-mcq.md](BUET%20JOB/29_general-knowledge-english-math-mcq.md) — GK, ENG, MATH
- [30_java-oop-sql-fsm-questions.md](BUET%20JOB/30_java-oop-sql-fsm-questions.md) — OOP, DSA, DBMS, DLD, SE
- [31_bpdb-protocols-sql-algorithms.md](BUET%20JOB/31_bpdb-protocols-sql-algorithms.md) — NET, DBMS, OS, DSA, DM, GK
- [32_bengali-mcq-and-petrobangla-start.md](BUET%20JOB/32_bengali-mcq-and-petrobangla-start.md) — GK, ENG, BAN, SPL
- [33_sql-array-recursion-questions.md](BUET%20JOB/33_sql-array-recursion-questions.md) — DBMS, SPL
- [34_bscll-ae-and-bba-questions.md](BUET%20JOB/34_bscll-ae-and-bba-questions.md) — NET, SPL, SE, DBMS, ICS
- [35_mcq-short-and-written-questions.md](BUET%20JOB/35_mcq-short-and-written-questions.md) — GRAPH, OS, OOP, DBMS, NET, COM, SPL
- [36_math-mcq-and-bpdb-2021.md](BUET%20JOB/36_math-mcq-and-bpdb-2021.md) — MATH, SPL, DSA, NET, DBMS, OS, GRAPH
- [37_buet-msc-cse-questions-10-13.md](BUET%20JOB/37_buet-msc-cse-questions-10-13.md) — DBMS, MATH, DSA, GRAPH, DLD
- [38_buet-msc-cse-questions-1-9.md](BUET%20JOB/38_buet-msc-cse-questions-1-9.md) — DBMS, OS, AI, SPL, OOP, MPI

### BUET MSC

- [01_buet-msc-questions-10-14.md](BUET%20MSC/01_buet-msc-questions-10-14.md) — MATH, DSA, GRAPH, DLD, NET
- [02_bpdb-assistant-engineer-questions-1-9.md](BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) — TOC, OS, DSA, NET, AI, OOP

### DLD

- [01_kmap-solution-q36.md](DLD/01_kmap-solution-q36.md) — DLD
- [02_karnaugh-map-rules-sop-pos.md](DLD/02_karnaugh-map-rules-sop-pos.md) — DLD
- [03_q127-3variable-kmap.md](DLD/03_q127-3variable-kmap.md) — DLD
- [04_q47-bpsc-ap-kmap.md](DLD/04_q47-bpsc-ap-kmap.md) — DLD
- [05_bpsc-sae-2021-simplify.md](DLD/05_bpsc-sae-2021-simplify.md) — DLD
- [06_q96-sop-to-pos.md](DLD/06_q96-sop-to-pos.md) — DLD
- [07_q95-pos-minimization.md](DLD/07_q95-pos-minimization.md) — DLD
- [08_q128-47th-bcs-ict.md](DLD/08_q128-47th-bcs-ict.md) — DLD
- [09_sop-pos-representation.md](DLD/09_sop-pos-representation.md) — DLD
- [10_q53-q73-kmap.md](DLD/10_q53-q73-kmap.md) — DLD
- [11_bpsc-ap-2026-kmap.md](DLD/11_bpsc-ap-2026-kmap.md) — DLD

### Network

- [01_guard-band-fdm-bandwidth.md](Network/01_guard-band-fdm-bandwidth.md) — COM
- [02_fm-numerical-digital-modulation.md](Network/02_fm-numerical-digital-modulation.md) — COM
- [03_checksum-examples.md](Network/03_checksum-examples.md) — NET
- [04_shannon-capacity.md](Network/04_shannon-capacity.md) — COM
- [05_total-latency-delay-questions.md](Network/05_total-latency-delay-questions.md) — NET
- [06_hamming-code.md](Network/06_hamming-code.md) — COM, NET

### PDF-TEXT

- [BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md) — SPL, OOP, DSA, DBMS, DLD, SE, OS, COM, ICS
- [Cryptography sheet.md](PDF-TEXT/Cryptography%20sheet.md) — NET
- [Linux-command.md](PDF-TEXT/Linux-command.md) — OS
- [Viva Questions Extracted from Viva Experiences.md](PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md) — GK, ICS, NET, SE, COM, DSA, DBMS, OOP, OS, AI, SPL, CA, MPI, DLD

### PETROBANGLA

- [01_rpgcl-assistant-manager-2022.md](PETROBANGLA/01_rpgcl-assistant-manager-2022.md) — COM, SPL
- [02_gtcl-assistant-engineer-2022.md](PETROBANGLA/02_gtcl-assistant-engineer-2022.md) — DBMS, SPL
- [03_sjf-scheduling-and-sha.md](PETROBANGLA/03_sjf-scheduling-and-sha.md) — SPL, OS, ICS, NET
- [04_subnet-mask-and-dns-poisoning.md](PETROBANGLA/04_subnet-mask-and-dns-poisoning.md) — SPL, NET, OS
- [05_stack-ops-and-teletalk-kmap.md](PETROBANGLA/05_stack-ops-and-teletalk-kmap.md) — DSA, SPL, DLD
- [06_sjf-table-and-routing-table.md](PETROBANGLA/06_sjf-table-and-routing-table.md) — OS, NET
- [07_routing-and-erd-schema.md](PETROBANGLA/07_routing-and-erd-schema.md) — NET, DLD, DBMS
- [08_bellman-ford-negative-cycle.md](PETROBANGLA/08_bellman-ford-negative-cycle.md) — SE, GRAPH, DLD
- [09_crypto-algorithms-and-bfs-dfs.md](PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md) — DBMS, NET, DSA
- [10_ensemble-learning-and-max-heap.md](PETROBANGLA/10_ensemble-learning-and-max-heap.md) — NET, AI, DSA
- [11_ipv6-nat-and-complexity.md](PETROBANGLA/11_ipv6-nat-and-complexity.md) — SPL, NET, DSA, OS
- [12_ip-validation-cpp-code.md](PETROBANGLA/12_ip-validation-cpp-code.md) — SPL
- [13_grammar-viva-and-written-q1-3.md](PETROBANGLA/13_grammar-viva-and-written-q1-3.md) — ENG, GK, SPL, NET, SE
- [14_mcq-assistant-engineer-cloud.md](PETROBANGLA/14_mcq-assistant-engineer-cloud.md) — ENG, MATH, TOC, GK
- [15_adc-and-binary-search-recurrence.md](PETROBANGLA/15_adc-and-binary-search-recurrence.md) — ELN, DSA, EC
- [16_sha-channel-capacity-nsda.md](PETROBANGLA/16_sha-channel-capacity-nsda.md) — NET, COM, SPL
- [17_english-grammar-mathematics-mcq.md](PETROBANGLA/17_english-grammar-mathematics-mcq.md) — ENG, MATH
- [18_petrobangla-am-cse-written-2024.md](PETROBANGLA/18_petrobangla-am-cse-written-2024.md) — SPL, OOP, DSA, DBMS, DLD
- [19_general-knowledge-and-english-mcq.md](PETROBANGLA/19_general-knowledge-and-english-mcq.md) — BAN, GK, ENG
- [20_petrobangla-gas-chain-charts.md](PETROBANGLA/20_petrobangla-gas-chain-charts.md) — GK
- [21_petrobangla-aptitude-marks-structure.md](PETROBANGLA/21_petrobangla-aptitude-marks-structure.md) — GK
- [22_bangla-mcq-and-short-questions.md](PETROBANGLA/22_bangla-mcq-and-short-questions.md) — SE, OS, COM, NET, BAN

### VIVA

- [01_bpsc-ica-and-ir-viva.md](VIVA/01_bpsc-ica-and-ir-viva.md) — GK, SPL, ELN
- [02_bpsc-oop-and-dbms-viva.md](VIVA/02_bpsc-oop-and-dbms-viva.md) — GK, NET, OOP, SPL, DBMS
- [03_ntrca-post-lecturer-ict-viva.md](VIVA/03_ntrca-post-lecturer-ict-viva.md) — GK, DBMS, NET, ICS, SPL
- [04_ntrca-keywords-and-dbms-keys.md](VIVA/04_ntrca-keywords-and-dbms-keys.md) — GK, SPL, DBMS, DSA, OOP
- [05_jdk-android-and-java-viva.md](VIVA/05_jdk-android-and-java-viva.md) — ICS, GK, NET, AI
- [06_ntrca-topology-url-and-osi.md](VIVA/06_ntrca-topology-url-and-osi.md) — GK, NET, ICS
- [07_osi-deadlock-and-ascii-viva.md](VIVA/07_osi-deadlock-and-ascii-viva.md) — NET, ICS, COM, GK
- [08_ntrca-full-adder-and-osi.md](VIVA/08_ntrca-full-adder-and-osi.md) — GK, DLD, NET, DSA, MPI

### bank-written-web

- [bb-ad-general-2018-ict.md](bank-written-web/2018-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2018-ict.md) — ICS, NET
- [pubali-so-sd-2018.md](bank-written-web/2018-pubali-so-sd-stackit-slideshare/pubali-so-sd-2018.md) — OOP, ICS, SE, DM, DBMS, DSA
- [bb-ame-2019.md](bank-written-web/2019-bb-ame-stackit-slideshare/bb-ame-2019.md) — DBMS, SE, ICS, OS, NET, CA, COM, ELN, EC
- [bb-ap-2019.md](bank-written-web/2019-bb-ap-stackit-slideshare/bb-ap-2019.md) — SPL, DM, NET, DBMS, DLD, ICS, OOP
- [rakub-adba-2020.md](bank-written-web/2020-rakub-adba-stackit-slideshare/rakub-adba-2020.md) — DBMS, ICS
- [sbl-jbl-officer-it-2020-mcq.md](bank-written-web/2020-sbl-jbl-officer-it-jobstestbd/sbl-jbl-officer-it-2020-mcq.md) — DBMS, AI, CA, ICS, NET, SPL, OS, SE
- [6banks-ap-2021.md](bank-written-web/2021-6banks-ap-itjobqns/6banks-ap-2021.md) — DSA, OOP, DBMS, TOC
- [bb-ad-general-2021-ict.md](bank-written-web/2021-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2021-ict.md) — NET, OS, ICS, ELN, DLD, CA
- [bb-ad-general-2022-ict.md](bank-written-web/2022-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2022-ict.md) — NET, OS, CA, SPL, COM, ICS
- [bb-ad-general-2023-ict.md](bank-written-web/2023-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2023-ict.md) — OS, ICS, DBMS, DSA, NET
- [dbbl-mto-card-2024.md](bank-written-web/2024-dbbl-mto-card-itjobqns/dbbl-mto-card-2024.md) — SPL, DSA, NET
- [icb-amcl-ap-2024.md](bank-written-web/2024-icb-amcl-ap-itjobqns/icb-amcl-ap-2024.md) — NET, SPL, SE, DSA, OS, DBMS
- [bb-adict-2025-mcq.md](bank-written-web/2025-bb-adict-mcq-itjobqns/bb-adict-2025-mcq.md) — SPL, DLD, DSA, ELN, DBMS, EC, OOP, NET, OS, ICS, SE
- [bb-adict-2025-written.md](bank-written-web/2025-bb-adict-written-itjobqns/bb-adict-2025-written.md) — DSA, SPL, DLD, OS, NET, DBMS
- [ibbl-qa-engineer-2025.md](bank-written-web/2025-ibbl-qa-engineer-itjobqns/ibbl-qa-engineer-2025.md) — OOP, DBMS, SE, NET
- [bb-ad-general-2026-ict.md](bank-written-web/2026-bb-ad-general-mcq-ictsection-jobstestbd/bb-ad-general-2026-ict.md) — NET, OS, CA, SPL, ICS
- [combined-ada-2026.md](bank-written-web/2026-combined-ada-itjobqns-recollection/combined-ada-2026.md) — OS, ICS, NET, DBMS, CA, SE
- [icb-securities-ap-2026-setc.md](bank-written-web/2026-icb-securities-ap-setc-itjobqns/icb-securities-ap-2026-setc.md) — SPL, OOP, DBMS
- [rakub-anse-2026.md](bank-written-web/2026-rakub-anse-itjobqns/rakub-anse-2026.md) — NET, COM, AI, CA, OS, DBMS, SPL

### bcs-written-web

- [49th-bcs-ict-281-paper2.md](bcs-written-web/49th-281-livemcq-ict/49th-bcs-ict-281-paper2.md) — OS, DLD, DBMS, ELN, SPL, MPI, OOP
- [49th-bcs-cse-971-paper2.md](bcs-written-web/49th-971-livemcq-cse/49th-bcs-cse-971-paper2.md) — DBMS, COM, SPL, OS, NET, CA, AI, DSA, TOC, OOP, DM, GRAPH, SE, MPI, DLD

### bit to exabyte

- [01_bte-p001-ip-subnetting-q01-11.md](bit%20to%20exabyte/01_bte-p001-ip-subnetting-q01-11.md) — NET
- [02_bte-p002-ip-subnetting-q12-24.md](bit%20to%20exabyte/02_bte-p002-ip-subnetting-q12-24.md) — NET
- [03_bte-p003-ip-subnetting-q25-35.md](bit%20to%20exabyte/03_bte-p003-ip-subnetting-q25-35.md) — NET
- [04_bte-p004-ip-subnetting-q36-45.md](bit%20to%20exabyte/04_bte-p004-ip-subnetting-q36-45.md) — NET
- [05_bte-p005-ip-q46-49-raid-dbms-q01.md](bit%20to%20exabyte/05_bte-p005-ip-q46-49-raid-dbms-q01.md) — NET, OS, DBMS
- [06_bte-p006-dbms-q02-13-deadlock-q01-02.md](bit%20to%20exabyte/06_bte-p006-dbms-q02-13-deadlock-q01-02.md) — DBMS, OS
- [07_bte-p007-deadlock-q03-11-bankers.md](bit%20to%20exabyte/07_bte-p007-deadlock-q03-11-bankers.md) — OS
- [08_bte-p008-kmap-q01-09-sql-q01.md](bit%20to%20exabyte/08_bte-p008-kmap-q01-09-sql-q01.md) — DLD, DBMS
- [09_bte-p009-sql-q01-05.md](bit%20to%20exabyte/09_bte-p009-sql-q01-05.md) — DBMS
- [10_bte-p010-sql-q06-13.md](bit%20to%20exabyte/10_bte-p010-sql-q06-13.md) — DBMS
- [11_bte-p011-sql-q14-19.md](bit%20to%20exabyte/11_bte-p011-sql-q14-19.md) — DBMS
- [12_bte-p012-sql-q19-22.md](bit%20to%20exabyte/12_bte-p012-sql-q19-22.md) — DBMS
- [13_bte-p013-sql-q22-32.md](bit%20to%20exabyte/13_bte-p013-sql-q22-32.md) — DBMS
- [14_bte-p014-sql-q33-weak-entity.md](bit%20to%20exabyte/14_bte-p014-sql-q33-weak-entity.md) — DBMS
- [15_bte-g2-p01-computer-fundamentals-q01-17.md](bit%20to%20exabyte/15_bte-g2-p01-computer-fundamentals-q01-17.md) — ICS, CA
- [16_bte-g2-p02-architecture-q18-26-c-q01-05.md](bit%20to%20exabyte/16_bte-g2-p02-architecture-q18-26-c-q01-05.md) — ICS, CA, SPL
- [17_bte-g2-p03-c-programming-q06-23.md](bit%20to%20exabyte/17_bte-g2-p03-c-programming-q06-23.md) — SPL
- [18_bte-g2-p04-c-programming-q24-26.md](bit%20to%20exabyte/18_bte-g2-p04-c-programming-q24-26.md) — SPL
- [19_bte-g2-p05-c-programming-q26-28.md](bit%20to%20exabyte/19_bte-g2-p05-c-programming-q26-28.md) — SPL
- [20_bte-g2-p06-c-programming-q29-33.md](bit%20to%20exabyte/20_bte-g2-p06-c-programming-q29-33.md) — SPL
- [21_bte-g2-p07-c-q34-42-oop-q01.md](bit%20to%20exabyte/21_bte-g2-p07-c-q34-42-oop-q01.md) — SPL, OOP
- [22_bte-g2-p08-oop-q02-19.md](bit%20to%20exabyte/22_bte-g2-p08-oop-q02-19.md) — OOP
- [23_bte-g2-p09-oop-q20-36.md](bit%20to%20exabyte/23_bte-g2-p09-oop-q20-36.md) — OOP, SPL, DSA
- [24_bte-g2-p10-oop-q37-41-security-q01-06.md](bit%20to%20exabyte/24_bte-g2-p10-oop-q37-41-security-q01-06.md) — OOP, NET, ICS
- [25_bte-g2-p11-cyber-security-q07-26.md](bit%20to%20exabyte/25_bte-g2-p11-cyber-security-q07-26.md) — NET
- [26_bte-g2-p12-security-q27-37-cloud-bigdata-q01-07.md](bit%20to%20exabyte/26_bte-g2-p12-security-q27-37-cloud-bigdata-q01-07.md) — NET, ICS
- [27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md](bit%20to%20exabyte/27_bte-g2-p13-cloud-datacenter-q08-15-db-q01-04.md) — ICS, DBMS
- [28_bte-g2-p14-database-sql-q05-15.md](bit%20to%20exabyte/28_bte-g2-p14-database-sql-q05-15.md) — DBMS
- [29_bte-g2-p15-database-sql-q15-20.md](bit%20to%20exabyte/29_bte-g2-p15-database-sql-q15-20.md) — DBMS
- [30_bte-g2-p16-database-sql-q20-25.md](bit%20to%20exabyte/30_bte-g2-p16-database-sql-q20-25.md) — DBMS
- [31_bte-g2-p17-database-sql-q26-31.md](bit%20to%20exabyte/31_bte-g2-p17-database-sql-q26-31.md) — DBMS
- [32_bte-g2-p18-database-sql-q32-36.md](bit%20to%20exabyte/32_bte-g2-p18-database-sql-q32-36.md) — DBMS
- [33_bte-g2-p19-database-sql-q36-44.md](bit%20to%20exabyte/33_bte-g2-p19-database-sql-q36-44.md) — DBMS
- [34_bte-g2-p20-database-sql-q45-weak-entity.md](bit%20to%20exabyte/34_bte-g2-p20-database-sql-q45-weak-entity.md) — DBMS
- [35_bte-g2-p21-os-deadlock-q01-11.md](bit%20to%20exabyte/35_bte-g2-p21-os-deadlock-q01-11.md) — OS
- [36_bte-g2-p22-bankers-table-os-q01-09.md](bit%20to%20exabyte/36_bte-g2-p22-bankers-table-os-q01-09.md) — OS
- [37_bte-g2-p23-os-q10-24-process-scheduling.md](bit%20to%20exabyte/37_bte-g2-p23-os-q10-24-process-scheduling.md) — OS
- [38_bte-g2-p24-os-q25-37-scheduling-memory.md](bit%20to%20exabyte/38_bte-g2-p24-os-q25-37-scheduling-memory.md) — OS
- [39_bte-g2-p25-os-q38-50-paging-cache-linux.md](bit%20to%20exabyte/39_bte-g2-p25-os-q38-50-paging-cache-linux.md) — OS, CA
- [40_bte-g2-p26-linux-q51-62.md](bit%20to%20exabyte/40_bte-g2-p26-linux-q51-62.md) — OS
- [41_bte-g2-p27-linux-q63-64-se-q01-10.md](bit%20to%20exabyte/41_bte-g2-p27-linux-q63-64-se-q01-10.md) — OS, SE
- [42_bte-g2-p28-se-q11-24-models-agile-srs.md](bit%20to%20exabyte/42_bte-g2-p28-se-q11-24-models-agile-srs.md) — SE
- [43_bte-g2-p29-se-q24-39-testing.md](bit%20to%20exabyte/43_bte-g2-p29-se-q24-39-testing.md) — SE
- [44_bte-g2-p30-se-q40-dm-web-q01-09.md](bit%20to%20exabyte/44_bte-g2-p30-se-q40-dm-web-q01-09.md) — SE, DM, ICS
- [45_bte-g2-p31-web-q10-19-mpi-q01-02.md](bit%20to%20exabyte/45_bte-g2-p31-web-q10-19-mpi-q01-02.md) — ICS, CA
- [46_bte-g2-p32-microprocessor-q02-18.md](bit%20to%20exabyte/46_bte-g2-p32-microprocessor-q02-18.md) — CA, MPI
- [47_bte-g2-p33-data-structure-q01-14.md](bit%20to%20exabyte/47_bte-g2-p33-data-structure-q01-14.md) — DBMS, DSA
- [48_bte-g2-p34-data-structure-q15-30-trees.md](bit%20to%20exabyte/48_bte-g2-p34-data-structure-q15-30-trees.md) — DSA
- [49_bte-g2-p35-data-structure-q31-43-graphs-algorithms.md](bit%20to%20exabyte/49_bte-g2-p35-data-structure-q31-43-graphs-algorithms.md) — DSA, GRAPH
- [50_bte-g2-p36-data-structure-q44-58-algorithms.md](bit%20to%20exabyte/50_bte-g2-p36-data-structure-q44-58-algorithms.md) — DSA
- [51_bte-g2-p37-data-structure-q59-72-sorting-mcq.md](bit%20to%20exabyte/51_bte-g2-p37-data-structure-q59-72-sorting-mcq.md) — DSA
- [52_bte-g2-p38-ds-mcq-d-p-cache-q01-03.md](bit%20to%20exabyte/52_bte-g2-p38-ds-mcq-d-p-cache-q01-03.md) — DSA, CA
- [53_bte-g2-p39-cache-memory-q04-11.md](bit%20to%20exabyte/53_bte-g2-p39-cache-memory-q04-11.md) — CA
- [54_bte-g2-p40-digital-electronics-q01-15-number-systems.md](bit%20to%20exabyte/54_bte-g2-p40-digital-electronics-q01-15-number-systems.md) — DLD
- [55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md](bit%20to%20exabyte/55_bte-g2-p41-digital-electronics-q15-34-boolean-gates.md) — DLD
- [56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md](bit%20to%20exabyte/56_bte-g2-p42-digital-electronics-q35-51-gates-adders-flipflops.md) — DLD
- [57_bte-g2-p43-digital-q52-kmap-q16-24.md](bit%20to%20exabyte/57_bte-g2-p43-digital-q52-kmap-q16-24.md) — DLD
- [58_bte-g2-p44-ip-subnetting-q01-11.md](bit%20to%20exabyte/58_bte-g2-p44-ip-subnetting-q01-11.md) — NET
- [59_bte-g2-p45-ip-subnetting-q11-48.md](bit%20to%20exabyte/59_bte-g2-p45-ip-subnetting-q11-48.md) — NET
- [60_bte-g2-p46-ip-subnetting-q49-63.md](bit%20to%20exabyte/60_bte-g2-p46-ip-subnetting-q49-63.md) — NET
- [61_bte-g2-p47-ip-subnetting-q63-74.md](bit%20to%20exabyte/61_bte-g2-p47-ip-subnetting-q63-74.md) — NET
- [62_bte-g2-p48-ip-q75-79-networking-q01-06.md](bit%20to%20exabyte/62_bte-g2-p48-ip-q75-79-networking-q01-06.md) — NET
- [63_bte-g2-p49-networking-q07-17-bandwidth-nyquist.md](bit%20to%20exabyte/63_bte-g2-p49-networking-q07-17-bandwidth-nyquist.md) — NET, COM
- [64_bte-g2-p50-networking-q18-31-line-coding-multiplexing.md](bit%20to%20exabyte/64_bte-g2-p50-networking-q18-31-line-coding-multiplexing.md) — COM, NET
- [65_bte-g2-p51-networking-q32-47-media-topology.md](bit%20to%20exabyte/65_bte-g2-p51-networking-q32-47-media-topology.md) — NET
- [66_bte-g2-p52-networking-q48-65-devices-firewall.md](bit%20to%20exabyte/66_bte-g2-p52-networking-q48-65-devices-firewall.md) — NET
- [67_bte-g2-p53-networking-q66-74-osi-q01-09.md](bit%20to%20exabyte/67_bte-g2-p53-networking-q66-74-osi-q01-09.md) — NET
- [68_bte-g2-p54-networking-q10-30-osi-crc-protocols.md](bit%20to%20exabyte/68_bte-g2-p54-networking-q10-30-osi-crc-protocols.md) — NET
- [69_bte-g2-p55-networking-q31-50-vlan-ports-nat.md](bit%20to%20exabyte/69_bte-g2-p55-networking-q31-50-vlan-ports-nat.md) — NET
- [70_bte-g2-p56-networking-q51-59-routing.md](bit%20to%20exabyte/70_bte-g2-p56-networking-q51-59-routing.md) — NET
- [71_bte-g2-p57-banking-it-q01-03.md](bit%20to%20exabyte/71_bte-g2-p57-banking-it-q01-03.md) — SE

### buet-msc-web

- [buet-msc-cse-2016-05.md](buet-msc-web/2016-05-cse-scribd-852677045/buet-msc-cse-2016-05.md) — DLD, DSA, CA, MPI, NET, GRAPH, SE, OOP, SPL, DM, AI, DBMS, TOC, OS
- [buet-msc-cse-2017-04.md](buet-msc-web/2017-04-cse-hackimpossible/buet-msc-cse-2017-04.md) — TOC, AI, DLD, DBMS, CA, OS, DSA, SPL, NET, MPI, DM, SE, OOP
- [buet-msc-cse-2017-10.md](buet-msc-web/2017-10-cse-hackimpossible/buet-msc-cse-2017-10.md) — DSA, CA, AI, SPL, OOP, DBMS, MPI, OS, DLD, SE, TOC, DM, NET
- [buet-msc-cse-2018-10.md](buet-msc-web/2018-10-cse-hackimpossible/buet-msc-cse-2018-10.md) — DSA, TOC, SPL, OOP, DM, DLD, CA, NET, AI, SE, MPI, OS, DBMS
- [buet-msc-cse-2019-05.md](buet-msc-web/2019-05-cse-scribd-500733615/buet-msc-cse-2019-05.md) — DLD, DSA, OOP, MPI, DBMS, TOC, SE, AI, SPL, NET, DM, OS, CA
- [buet-msc-cse-2021-06.md](buet-msc-web/2021-06-cse-online-mcq-itjobexam/buet-msc-cse-2021-06.md) — DM, OOP, SPL, DSA, GRAPH, TOC, DBMS, COM, OS, SE, NET, MPI, DLD, CA, AI, ICS
- [buet-iict-msc-ict-2021-07.md](buet-msc-web/2021-07-iict-msc-ict-itjobexam/buet-iict-msc-ict-2021-07.md) — EC, NET, SPL, COM, DLD, MPI, CA, OOP
- [buet-msc-cse-2024-04.md](buet-msc-web/2024-04-cse-hackimpossible/buet-msc-cse-2024-04.md) — AI, TOC, NET, OS, SPL, DBMS, OOP, DSA, DM, DLD, SE

### duranta

- [1704037243.md](duranta/1704037243-wzpdcl-ae-cse-ece-ete/1704037243.md) — SPL, OS, DBMS, SE, NET, DSA, ICS, OOP
- [1705173540.md](duranta/1705173540-nwpgcl-am-ict-mis-2024/1705173540.md) — SPL, DBMS, NET, SE, COM
- [1706697796.md](duranta/1706697796-36th-bcs-lecturer-ict/1706697796.md) — DSA, OS, DLD, OOP, GRAPH, CA, MPI, DM, SPL, ICS, TOC, SE, DBMS, AI, NET, COM
- [1706697836.md](duranta/1706697836-37th-bcs-lecturer-ict/1706697836.md) — NET, ICS, SPL, DSA, OS, OOP
- [1706697857.md](duranta/1706697857-38th-bcs-lecturer-ict/1706697857.md) — DLD, COM, ICS, CA, MPI, NET, SPL, OOP, DSA, OS, AI, SE, DBMS
- [1706723189.md](duranta/1706723189-45th-bcs-lecturer-ict/1706723189.md) — SPL, MPI, DLD, COM, GRAPH, DSA, OS, DBMS, SE, NET, AI
- [1707373769.md](duranta/1707373769-dbbl-2019-written/1707373769.md) — NET, OS, EC, SPL, DBMS
- [1707458917.md](duranta/1707458917-15th-ntrca-lecturer-ict-written/1707458917.md) — SPL, OS, OOP, SE, DSA, GRAPH, ICS, DBMS, NET, COM
- [1707458946.md](duranta/1707458946-15th-ntrca-lecturer-cs-written/1707458946.md) — ICS, OS, SPL, DSA, DM, DLD, CA, DBMS, NET, OOP, TOC
- [1707459059.md](duranta/1707459059-17th-ntrca-asst-teacher-ict-written/1707459059.md) — ICS, OS, SPL, DLD, NET
- [1707459097.md](duranta/1707459097-17th-ntrca-lecturer-ict-written/1707459097.md) — SPL, OOP, SE, DSA, GRAPH, AI, ICS, OS, DBMS, NET, COM
- [1707459159.md](duranta/1707459159-17th-ntrca-lecturer-cs-written/1707459159.md) — ICS, DSA, SPL, GRAPH, DM, SE, DLD, OS, NET, DBMS, AI, OOP
- [1707468692.md](duranta/1707468692-16th-ntrca-lecturer-ict-written/1707468692.md) — SPL, OOP, SE, DSA, ICS, NET, OS, DBMS, DLD
- [1708869322.md](duranta/1708869322-bricm-exam-2024/1708869322.md) — NET, DLD, SE, ELN
- [1710606589.md](duranta/1710606589-18th-ntrca-prelim-2018/1710606589.md) — ICS
- [1713450345.md](duranta/1713450345-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713450345.md) — OS, SPL, DLD, DM, DBMS, NET, GRAPH
- [1713711956.md](duranta/1713711956-bangladesh-telecommunications-company-limited-btcl-jam-techn/1713711956.md) — DLD, DBMS, OS, SPL, MPI, DSA, GRAPH, ICS
- [1713750743.md](duranta/1713750743-bakhrabad-gas-distribution-company-limited-bgdcl-am-cse/1713750743.md) — DSA, SPL, OS, DBMS, SE, MPI, NET
- [1713804982.md](duranta/1713804982-br-power-generation-company-limited-brpl/1713804982.md) — EC, ELN, DSA, DBMS, NET, DLD, OS
- [1716050174.md](duranta/1716050174-power-grid-company-of-bangladesh-assistant-engineer-cse/1716050174.md) — DSA, SPL, NET, SE, CA, DBMS, DLD
- [1716661561.md](duranta/1716661561-titas-gas-transmission-and-distribution-company-limited-tgtd/1716661561.md) — SPL, DSA, TOC, DLD, CA, OS, SE, NET, DBMS
- [1717249637.md](duranta/1717249637-bangladesh-oil-gas-and-mineral-corporation-petrobangla-assis/1717249637.md) — SPL, OOP, DSA, DBMS, DLD, SE, OS, COM, ICS
- [1720852216.md](duranta/1720852216-bangladesh-telecommunication-regulatory-authority-ad-dad-tec/1720852216.md) — NET, CA, ELN, EC, COM, SE
- [1720853431.md](duranta/1720853431-bangladesh-telecommunication-regulatory-authority-ad-dad-tec/1720853431.md) — ELN, COM, NET, EC, PHY, ICS, MPI
- [1728262949.md](duranta/1728262949-officer-it/1728262949.md) — DLD, DM, DSA, OOP, CA, OS, SE, NET, SPL, DBMS
- [1732800614.md](duranta/1732800614-46th-bcs-written-suggestions-part1/1732800614.md) — CA, OS, NET, ICS, SE, SPL
- [1732968747.md](duranta/1732968747-46th-47th-bcs-written-suggestions-code-971/1732968747.md) — CA, OS, NET, ICS, SE, SPL, OOP, DSA, GRAPH, COM, DBMS, DLD, DM, TOC, AI, MPI
- [1734525457.md](duranta/1734525457-nwpgcl-jam-ict-2024/1734525457.md) — DLD, DSA, DBMS, OS, SPL, MPI, NET, SE, CA, COM
- [1734830068.md](duranta/1734830068-software-engineering-question-pattern-ntrca-msc-job-exam-bcs/1734830068.md) — SE, ICS, NET
- [1737452307.md](duranta/1737452307-bangladesh-bank-ad-ict-question-pattern-bb-assistant-program/1737452307.md) — DSA, SPL, DBMS, SE, OOP, NET
- [1737542359.md](duranta/1737542359-bangladesh-bank-ame-ad-ict-2023/1737542359.md) — CA, ELN, COM, NET, ICS, SE
- [1741131167.md](duranta/1741131167-directorate-of-food-assistant-programmer-practical-viva-2022/1741131167.md) — SPL, DBMS, ICS, NET, AI
- [1751286806.md](duranta/1751286806-dawasa-previous-ame-ahe-ane-buet-question/1751286806.md) — ELN, NET, CA, ICS, OS, DBMS, SPL, COM, DM, SE, DLD, EC
- [1758501721.md](duranta/1758501721-bpsv-non-cadre-cse-q/1758501721.md) — OOP, SPL, DLD, NET, OS, DBMS, DSA, GRAPH, CA, DM, AI, MPI, ELN, PHY, COM, SE, ICS
- [1766849158.md](duranta/1766849158-wzpdcl-ae-cse-2019/1766849158.md) — DM, DSA, NET, OOP, DLD, SPL, DBMS, COM
- [1766849185.md](duranta/1766849185-wzpdcl-sae-2023-cse/1766849185.md) — ICS, MPI, SPL, OOP, NET, DBMS, DM, CA
- [1769271736.md](duranta/1769271736-banker-s-selection-committee-secretariate-bscs-assistant-eng/1769271736.md) — CA, NET, DBMS, SE, OS, ELN, ICS, DLD, AI
- [1775612046.md](duranta/1775612046-bcs-cse-ict-questions-lecturer-ict/1775612046.md) — PHY, DLD, ICS, EC, MPI, SPL, AI, OS, DBMS, CA, SE, OOP, DM, DSA, TOC, GRAPH, NET, COM, ELN
- [1775695828.md](duranta/1775695828-mist-pattern/1775695828.md) — NET, SPL, DBMS, ICS, DLD, CA, SE, OOP, OS, DSA, COM, ELN, MPI
- [1777536660.md](duranta/1777536660-bank-questions-2020-2026/1777536660.md) — NET, ICS, COM, SE, OOP, DSA, DBMS, SPL, OS, DLD, CA, ELN, GRAPH, TOC, MPI, EC, AI, DM
- [1780933203.md](duranta/1780933203-npcbl-suggestions/1780933203.md) — NET, ICS, OS, SE, DBMS
- [1781868667.md](duranta/1781868667-nwpgcl-jam-ict-duet-taken-previous-questions/1781868667.md) — ICS, SE, NET, OS, OOP, DBMS, SPL, DLD, DM, DSA, MPI, EC
- [1782205758.md](duranta/1782205758-baera-engr-computer/1782205758.md) — OOP, SE, DSA, OS, NET, DBMS, SPL, ICS, AI, DLD, CA, DM
- [1783405234.md](duranta/1783405234-bscs-ame-ae-it/1783405234.md) — OS, ICS, NET, DBMS
- [1783757387.md](duranta/1783757387-bpsc-non-cadre-questions/1783757387.md) — CA, COM, ICS, DBMS, SPL, OOP, OS, SE, NET, AI, DSA, DLD, DM, MPI, GRAPH, ELN
- [1783762106.md](duranta/1783762106-npcbl-sae-csa/1783762106.md) — NET, ICS, AI
- [1785328629.md](duranta/1785328629-so-it-job-id-25104/1785328629.md) — CA, NET, DBMS, SE, DSA, DLD, COM, ICS, SPL, TOC
- [1785503716.md](duranta/1785503716-so-it-job-id-25105/1785503716.md) — CA, ICS, MPI, AI, NET, DSA, COM, DBMS, OOP, SPL, EC, ELN, DLD, OS, SE

### ministry-ap-web

- [bpsc-ame-2017-mcq.md](ministry-ap-web/2017-bpsc-ame-various-ministries-mcq/bpsc-ame-2017-mcq.md) — ICS
- [nha-ap-2019-written.md](ministry-ap-web/2019-nha-ap-written-bdquestionbank/nha-ap-2019-written.md) — DBMS, SE, NET, AI, OS, DLD, SPL, OOP
- [bpsc-ane-2020-written.md](ministry-ap-web/2020-bpsc-ane-written-itjobexam/bpsc-ane-2020-written.md) — NET, ICS, CA, AI, DBMS, SE
- [ict-ministry-ap-2021-written.md](ministry-ap-web/2021-bpsc-ap-ict-ministry-written-itjobexam/ict-ministry-ap-2021-written.md) — ICS, SPL, CA, SE, DBMS, NET
- [doict-ap-2020-mcq.md](ministry-ap-web/2021-doict-ap-mcq/doict-ap-2020-mcq.md) — ICS, NET, DLD, OOP, CA, SPL
- [bpsc-ame-2022-mcq.md](ministry-ap-web/2022-bpsc-ame-various-ministries-mcq/bpsc-ame-2022-mcq.md) — NET, DSA, AI, ICS, TOC, SPL
- [bpsc-ap-2022-screening.md](ministry-ap-web/2022-bpsc-ap-screening-mcq-slideshare/bpsc-ap-2022-screening.md) — OS, EC, ICS, NET, SPL, COM

### model test

- [01_bte-model-test-01-2026-10-02.md](model%20test/01_bte-model-test-01-2026-10-02.md) — ENG, BAN, OS, SPL, DSA, DBMS, OOP, NET

### model-test-web

- [dmtcl-2025-suggestion.md](model-test-web/daudbd-dmtcl-2025-suggestion/dmtcl-2025-suggestion.md) — COM, MPI, NET
- [uttara-so-it-model-written-tests.md](model-test-web/daudbd-uttara-bank-so-it-model-written-tests/uttara-so-it-model-written-tests.md) — SE, OS, ICS, NET, DBMS, SPL, CA
- [uttara-so-it-pattern.md](model-test-web/daudbd-uttara-bank-so-it-pattern/uttara-so-it-pattern.md) — NET, DBMS, OS
- [buet-pattern-it-questions.md](model-test-web/scribd-buet-pattern-it-questions/buet-pattern-it-questions.md) — DSA, OOP, SE, CA, OS, DBMS, COM, NET, DM, EC, SPL, ICS, ELN, GRAPH, DLD, AI
- [ap-final-model-test.md](model-test-web/scribd-govtjobcarebd-ap-final-model-test/ap-final-model-test.md) — EC, DSA, COM, NET, SE, ELN, ICS, SPL, DLD, OOP, CA, OS, DBMS

### ntrca-written-web

- [13-431-lecturer-cs-partial.md](ntrca-written-web/13-431-lecturer-cs-partial/13-431-lecturer-cs-partial.md) — ICS, OOP, SE, SPL, DLD, DM, DSA, DBMS, OS, NET, CA, COM
- [13-school2-prelim-ict-mcq.md](ntrca-written-web/13-school2-prelim-ict-mcq/13-school2-prelim-ict-mcq.md) — NET
- [14-college-prelim-ict-mcq.md](ntrca-written-web/14-college-prelim-ict-mcq/14-college-prelim-ict-mcq.md) — NET
- [15-432-lecturer-computer-operation.md](ntrca-written-web/15-432-lecturer-computer-operation/15-432-lecturer-computer-operation.md) — ICS, CA, OS, DBMS, SPL, COM, DLD, NET, SE, OOP
- [15-college-prelim-ict-mcq.md](ntrca-written-web/15-college-prelim-ict-mcq/15-college-prelim-ict-mcq.md) — NET
- [16-431-lecturer-cs-set-r.md](ntrca-written-web/16-431-lecturer-cs-set-r/16-431-lecturer-cs-set-r.md) — ICS, NET, OS, DBMS, CA, TOC, DLD, DM, SPL, COM, DSA, OOP, GRAPH
- [16-college-prelim-ict-mcq.md](ntrca-written-web/16-college-prelim-ict-mcq/16-college-prelim-ict-mcq.md) — ICS
- [17-school-prelim-ict-mcq.md](ntrca-written-web/17-school-prelim-ict-mcq/17-school-prelim-ict-mcq.md) — NET, ICS
- [18-313-school-ict.md](ntrca-written-web/18-313-school-ict/18-313-school-ict.md) — ICS, CA, DLD, SPL, OS
- [18-school-prelim-ict-mcq.md](ntrca-written-web/18-school-prelim-ict-mcq/18-school-prelim-ict-mcq.md) — NET
- [18-school2-ict-trade-instructor.md](ntrca-written-web/18-school2-ict-trade-instructor/18-school2-ict-trade-instructor.md) — COM, DLD, OS, CA, NET, MPI, ICS, DSA, SPL, DBMS

### power-sector-web

- [desco-ae-cse-2016.md](power-sector-web/2016-desco-ae-cse-binaryitc/desco-ae-cse-2016.md) — DBMS, OOP, SPL, DSA, SE, NET, DLD, MPI, CA, OS, ICS
- [bpdb-ae-cse-2018.md](power-sector-web/2018-bpdb-ae-cse-scribd-384369493/bpdb-ae-cse-2018.md) — SPL, OOP, SE, OS, DSA, NET, DBMS
- [power-items.md](power-sector-web/2020-dpdc-nesco-ict-itjobexam-scribd-693327151/power-items.md) — DSA, SPL, ICS
- [pgcb-sae-computer-2020.md](power-sector-web/2020-pgcb-sae-computer-carrierbd/pgcb-sae-computer-2020.md) — NET, DSA, DBMS, OS, SPL
- [apscl-am-mis-2021.md](power-sector-web/2021-apscl-am-mis-carrierbd/apscl-am-mis-2021.md) — DSA, DM
- [nesco-am-ict-2021.md](power-sector-web/2021-nesco-am-ict-carrierbd-askunion/nesco-am-ict-2021.md) — OS, ICS, NET, DBMS, SE, SPL, DSA, COM
- [nwpgcl-ae-cse.md](power-sector-web/2021-nwpgcl-ae-cse-carrierbd/nwpgcl-ae-cse.md) — SPL, OS, DBMS, NET

### suggestion based on previous yr

- [01_petrobangla-ane-q01-11-erd-subnet-cables.md](suggestion%20based%20on%20previous%20yr/01_petrobangla-ane-q01-11-erd-subnet-cables.md) — DBMS, SPL, NET, COM, ICS
- [02_petrobangla-ane-q11-14-c-output-blanks-sql.md](suggestion%20based%20on%20previous%20yr/02_petrobangla-ane-q11-14-c-output-blanks-sql.md) — SPL, NET, DBMS
- [03_petrobangla-ane-q15-23-firewall-switching-disk-scheduling.md](suggestion%20based%20on%20previous%20yr/03_petrobangla-ane-q15-23-firewall-switching-disk-scheduling.md) — NET, ICS, OS
- [04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md](suggestion%20based%20on%20previous%20yr/04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.md) — NET, DBMS, ICS
- [05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.md](suggestion%20based%20on%20previous%20yr/05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.md) — NET, DBMS, OS
- [06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md](suggestion%20based%20on%20previous%20yr/06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.md) — NET, DSA, TOC, DBMS
- [07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md](suggestion%20based%20on%20previous%20yr/07_petrobangla-ane-q46-56-bank-network-tdm-tree-vlsm-sql.md) — NET, COM, DSA, DBMS
- [08_petrobangla-ane-q57-64-topology-media-osi-crypto-bank-sql.md](suggestion%20based%20on%20previous%20yr/08_petrobangla-ane-q57-64-topology-media-osi-crypto-bank-sql.md) — NET, DBMS
- [09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md](suggestion%20based%20on%20previous%20yr/09_petrobangla-ane-q65-72-char-varchar-tdm-repeats.md) — DBMS, COM, NET
- [10_petrobangla-ane-q72-73-sql-server-maintenance.md](suggestion%20based%20on%20previous%20yr/10_petrobangla-ane-q72-73-sql-server-maintenance.md) — DBMS, ICS

### telecom-web

- [teletalk-executive-technical-2015.md](telecom-web/2015-teletalk-executive-technical-scribd-427357146/teletalk-executive-technical-2015.md) — COM, SPL
- [teletalk-executive-2019.md](telecom-web/2019-teletalk-executive-jobstestbd/teletalk-executive-2019.md) — SPL, ELN, ICS, NET, COM, SE, CA
- [btcl-am-2021-ae-cse-2017.md](telecom-web/2021-btcl-am-technical-stackit-scribd-534777028/btcl-am-2021-ae-cse-2017.md) — ELN, PHY, COM, NET, SPL, DLD, DSA, DBMS, CA, OS
- [btrc-sad-technical-2021.md](telecom-web/2021-btrc-sad-technical-jobstestbd/btrc-sad-technical-2021.md) — PHY, ELN, ICS, MPI, COM
- [bdccl-am-transmission-2022.md](telecom-web/2022-bdccl-am-transmission-jobqns/bdccl-am-transmission-2022.md) — PHY, ELN, DLD, COM, ICS
- [btcl-jam-technical-2022.md](telecom-web/2022-btcl-jam-technical-jobqns/btcl-jam-technical-2022.md) — OS, MPI, PHY, ELN, ICS, NET
- [teletalk-am-it-2023.md](telecom-web/2023-teletalk-am-it-jobqns/teletalk-am-it-2023.md) — DLD, AI, NET, SE, DSA, OS, DBMS, SPL
- [bscplc-am-engineering-2024.md](telecom-web/2024-bscplc-am-engineering-scribd-973052916/bscplc-am-engineering-2024.md) — DBMS, CA, COM, SPL, AI, DM, NET
- [btcl-jam-it-2024.md](telecom-web/2024-btcl-jam-it-jobqns/btcl-jam-it-2024.md) — ICS

### viva-web

- [optimal-ap-2019.md](viva-web/bank-2019-optimal-ap-viva/optimal-ap-2019.md) — NET, ICS
- [optimal-so-it-4banks.md](viva-web/bank-2019-optimal-so-it-4banks/optimal-so-it-4banks.md) — NET
- [optimal-rbl-ane-1.md](viva-web/bank-2021-optimal-rbl-ane-part1/optimal-rbl-ane-1.md) — NET, COM
- [optimal-rbl-ane-2.md](viva-web/bank-2021-optimal-rbl-ane-part2/optimal-rbl-ane-2.md) — NET
- [jobqns-bank-viva.md](viva-web/bank-2026-jobqns-bank-viva/jobqns-bank-viva.md) — ICS, DLD, DBMS, COM, NET, ELN, AI, SPL, SE, OOP
- [bcs-real-viva-34th.md](viva-web/bcs-2015-idoc-34th-real-viva/bcs-real-viva-34th.md) — ICS, NET, COM
- [ekushey-37th-bcs-viva.md](viva-web/bcs-2017-ekushey-37th-viva/ekushey-37th-bcs-viva.md) — ICS, NET
- [jobqns-wzpdcl-ae.md](viva-web/power-2026-jobqns-wzpdcl-ae/jobqns-wzpdcl-ae.md) — NET, SE
