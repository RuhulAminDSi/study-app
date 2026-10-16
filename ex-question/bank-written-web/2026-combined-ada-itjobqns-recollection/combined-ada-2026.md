# Combined Bank (BSCS) Assistant Database Administrator (based year 2023), 08 May 2026 — IT Job QnS recollection

- **Source:** IT Job QnS, "Combined Bank, Assistant Database Administrator, 2026 (Based year 2023)" — https://it.jobqns.com/combined-bank-assistant-database-administrator-2026-based-year-2023/ (published 2026-06-06); question text saved as `combined-bank-assistant-database-administrator-2026-based-year-2023.html.txt`. The same items appear in https://it.jobqns.com/previous2021-2026-bank-assistant-database-administrator-qns/.
- **Publisher:** IT Job QnS (it.jobqns.com)
- **Pages:** 1 web page
- **Document type:** exam paper (**candidates' recollection**: a short "Collected question" list a–o, then the site's own scenario-style rewrites of each item)

## Transcription Notes

- Header as printed: "Combined Bank / Post: Assistant Database Administrator(Based Year 2023) / Exam: 08-May-2026 / All questions are scenario-based and assumed. / Collected question a) … o)". **Exam taker, marks and time not stated.**
- **The exam's wording is not known.** The collected list (a–o, no item j) is the candidates' recollection; the numbered questions 1–14 are the site's reconstruction ("scenario-based and assumed"). Both are given; the collected line is the evidence, the expanded wording is labelled as the site's.
- Typos kept in the collected list: "CIDR nation", "Querry", "affirmation", "Backened", "uncertaintiy".
- Same day as the BSCS AME/AE(IT) written paper of 08/05/2026 (held in `ex-question/duranta/1783405234-bscs-ame-ae-it/`); topics overlap (RAID 5, preventive vs corrective maintenance) but this is the separate ADA paper.
- Duplicate check: no ADA 2026 (based year 2023) paper in `ex-question/` (the `Sonali Bank ADA 2026` key is the 09/01/2026 Sonali paper). New.

## Content

### Combined Bank (BSCS) — Assistant Database Administrator (based year 2023) — 08-May-2026 — Exam taker: not stated — marks not printed — candidates' recollection (14 items)

**1.** Collected: "a) Hard Drive need RAID-5"

Site's expanded wording: A bank plans to upgrade its storage system for transaction processing. The system must continue operating even if a single hard drive fails while efficiently utilizing available storage capacity. Which RAID level would you recommend, how does it work, and why is it suitable for this scenario?

> Printed answer: RAID 5 (block striping with distributed parity; survives one disk failure, usable (n−1)/n).

**2.** Collected: "b) Preventive and Corrective Maintenance - Data Center"

Site's expanded wording: A data center supporting 24/7 online banking services experiences occasional hardware failures and service interruptions. Explain how preventive maintenance and corrective maintenance differ, and discuss how each contributes to maintaining service availability.

> Printed answer: preventive = scheduled, proactive; corrective = repair after failure; both raise availability.

**3.** Collected: "c) Routing Table - supernet - CIDR nation"

Site's expanded wording: An ISP has been assigned the networks 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, and 192.168.3.0/24. To reduce routing table entries, the network engineer decides to use CIDR-based route aggregation. Determine the supernet address and explain how supernetting improves routing efficiency.

> Printed answer: 192.168.0.0/22, mask 255.255.252.0 (checked).

**4.** Collected: "d) SQL Querry- top 5 hospitals name from accident treatment"

Site's expanded wording: A database contains a table named Hospital(HospitalID, HospitalName, Specialization, PatientCount). Write an SQL query to display the names of the five hospitals that specialize in accident treatment and have treated the highest number of patients.

> Printed answer: `SELECT HospitalName FROM Hospital WHERE Specialization = 'Accident Treatment' ORDER BY PatientCount DESC LIMIT 5;`

**5.** Collected: "e) SQL Querry error - salary"

Site's expanded wording: A developer writes the SQL statement SELECT EmployeeName, Salary FROM Employees WHERE Salary > AVG(Salary);, but the query generates an error. Identify the problem and write a corrected SQL query.

> Printed answer: aggregate not allowed in WHERE; use `WHERE Salary > (SELECT AVG(Salary) FROM Employees)`.

**6.** Collected: "f) Given Table - Super Key + primary key"

Site's expanded wording: Given the relation Employee(EmployeeID, NationalID, Email, Name, Department), where EmployeeID, NationalID, and Email are unique, identify the super keys, candidate keys, and the most appropriate primary key with justification.

> Printed answer: candidate keys EmployeeID, NationalID, Email; PK EmployeeID; super keys = any superset.

**7.** Collected: "g) Http code- mobile phone upload not affirmation"

Site's expanded wording: A mobile banking application successfully connects to a server and attempts to upload a customer document, but the server rejects the request because the uploaded file format is not supported. Which HTTP status code should be returned and why?

> Printed answer: 415 Unsupported Media Type.

**8.** Collected: "h) Why not use nosql(mongoDB) why use RDBMS in Banking?"

Site's expanded wording: A bank is considering replacing its relational database system with MongoDB for its core banking application. Discuss whether this is an appropriate decision and justify why an RDBMS or NoSQL database would be more suitable.

> Printed answer: keep RDBMS for core banking (ACID, joins, integrity); NoSQL only for auxiliary workloads.

**9.** Collected: "i) R1 R2 lossless Join- decomposition database"

Site's expanded wording: A relation R(A, B, C) is decomposed into R1(A, B) and R2(B, C). Explain whether the decomposition is lossless and describe the conditions required for a lossless join decomposition.

> Printed answer: lossless iff B → A or B → C (R1 ∩ R2 is a key of one side).

**10.** Collected: "k) Cloud Vendor or bank fault; legally vs technically"

Site's expanded wording: A bank hosts its online banking platform on a public cloud infrastructure. Due to a cloud service outage, customers are unable to access services for several hours. Discuss the technical and legal responsibilities of both the cloud service provider and the bank.

> Printed answer: shared responsibility under the SLA: provider for infrastructure uptime; bank for continuity planning, customers and regulators.

**11.** Collected: "l) Half duplex and full duplex- example with network topology/hardware"

Site's expanded wording: A network administrator is replacing a hub-based LAN with a switch-based LAN. Explain the differences between half-duplex and full-duplex communication and discuss how the change affects network performance.

> Printed answer: half duplex (hub, CSMA/CD collisions) vs full duplex (switch, no collisions, double throughput).

**12.** Collected: "m) API Gateway? Backened"

Site's expanded wording: A bank is migrating from a monolithic application to a microservices architecture and plans to deploy an API Gateway. Explain the role of an API Gateway and how it interacts with backend services in such an environment.

> Printed answer: single entry point: routing, authentication, rate limiting, aggregation in front of microservices.

**13.** Collected: "n) RISC ARM processor vs CISC- x86 processor -RISC design philosophy-which setup will be better cloud infrastructure environment?"

Site's expanded wording: A cloud service provider must choose between ARM-based processors and x86 processors for a new data center deployment. Compare the RISC and CISC architectures and recommend the most suitable option for large-scale cloud infrastructure.

> Printed answer: RISC/ARM for power-efficient scale-out cloud; x86 where legacy software compatibility matters.

**14.** Collected: "o) An app- weekly changing user feedback - government tight policies regarding user information- which SDLC(Waterfall,Agile/scrum or spiral)-uncertaintiy vs Rigidity- trade off"

Site's expanded wording: A government mobile application receives frequent user feedback that requires weekly feature updates, while strict regulatory policies demand extensive documentation, compliance checks, and security reviews. Which SDLC model would be most appropriate for this project and why?

> Printed answer: Agile/Scrum with compliance gates (or a hybrid), not pure Waterfall.
