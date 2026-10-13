# Database Systems (DBMS): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 83 (Written 32, MCQ 10, Viva 41)
- **Corrections:** 12
- **Papers:** 38th BCS Written; 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BAPEX Assistant General Manager (ICT) (BUET); BBA Assistant Maintenance Engineer; BCC Assistant Programmer (BUET); BCC Assistant Programmer Written Test; BOGMC (Petrobangla) Assistant Manager; BPDB Assistant Engineer (CSE); BPDB Assistant Engineer (CSE) (BUET); BPSC viva; BUET MSc in CSE; Bangladesh Satellite Company PLC Assistant Engineer (CSE); Bank (name cut off, 'B... Ltd') Assistant Programmer Written; Bank IT viva (compiled from candidates' viva experiences); DPDC Assistant Manager (ICT); ICB Securities Trading Company Limited Assistant Programmer; Islamic Bank PLC SQA, Senior Officer (Network); NTRCA 15th registration viva (2019); NTRCA 17th registration viva 2023; PGCB Assistant Engineer (CSE) (BUET); PGCB Sub-Assistant Engineer (CSE) (BUET); Petrobangla Assistant Manager (CSE); Petrobangla Assistant Manager (CSE) (BUET)

## Topics

- ER modelling (3)
- Composite primary key (2)
- Primary key (2)
- Relational algebra (2)
- SQL GROUP BY / HAVING (2)
- SQL GROUP BY / HAVING COUNT (2)
- ACID properties (1)
- Assistant DBA responsibilities (1)
- Assistant DBA risks (1)
- Bank database crash recovery (1)
- Bitmap index (1)
- Branch User access vs DBA access (1)
- Cascadeless schedules (1)
- Composite key application (1)
- Concurrency control (locking) (1)
- Data (1)
- Database (1)
- Database Normalization (1)
- Database Schema (1)
- Database security (1)
- Database Security (1)
- Database security (DBMS vs application provided) (1)
- Database security measures (1)
- DBA role (1)
- DBMS limitations, NewSQL vs SQL/NoSQL (1)
- Distributed database advantages (1)
- ER diagram (1)
- ER diagram and relational schema (1)
- Indexing (1)
- Keys (super/candidate) (1)
- Materialized View (1)
- MySQL backup and restore (1)
- Normal forms (1)
- Normalization importance (1)
- Oracle RAC (1)
- PHP database connection code (1)
- PHP-MySQL connection (1)
- Primary Key vs Foreign Key (1)
- Primary key-foreign key relationship (1)
- Primary vs super vs foreign key (1)
- Primary, super and candidate keys (1)
- Relational algebra to SQL (1)
- Relationship cardinality (library Book–Borrower) (1)
- ROLLBACK (1)
- SQL (1)
- SQL (GROUP BY ... HAVING AVG) (1)
- SQL (GROUP BY ... HAVING COUNT) (1)
- SQL (GROUP BY, aggregate max) (1)
- SQL clauses (1)
- SQL commands (1)
- SQL COUNT(*) vs COUNT(DISTINCT) with NULLs (1)
- SQL duplicates (GROUP BY HAVING) (1)
- SQL GROUP BY / HAVING with COUNT (1)
- SQL injection (1)
- SQL INSERT (1)
- SQL JOIN (1)
- SQL JOIN types (1)
- SQL JOIN with GROUP BY (1)
- SQL second highest salary (1)
- SQL SELECT (1)
- SQL self-join (1)
- SQL subquery with GROUP BY / HAVING (1)
- SQL trigger (1)
- Strict two-phase locking (1)
- Super Key (1)
- Super key vs candidate key (1)
- Three-schema architecture (1)
- Trigger (1)
- Trigger function (1)
- Trigger real-life use (1)
- Tuple (1)
- View (1)
- View vs Materialized View (1)
- Weak entity (ER model) (1)
- WHERE clause (1)
- Write-ahead logging (recovery) (1)

## ER modelling

### Q4(a) <sub>Q0315</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2026-08-21 · Written*

For a given scenario, identify entities, attributes and relationships.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

### Q4(b) <sub>Q0316</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2026-08-21 · Written*

Draw the ER diagram.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

### Q4(c) <sub>Q0317</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2026-08-21 · Written*

Convert the ERD into relational schemas with primary and foreign keys.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## Composite primary key

### Viva (VIVA-45, candidate 1) <sub>Q0412</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

What is a composite primary key?

- **Printed answer:** A primary key formed by combining two attributes, e.g. manufacturer ID + product ID when product IDs repeat across companies
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

### Viva (VIVA-45, candidate 2) <sub>Q0417</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

What is a composite primary key?

- **Printed answer:** Several key fields together that uniquely identify a row/tuple/record
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## Primary key

### MCQ 50 <sub>Q0059</sub>

*paper not shown · MCQ*

A hospital patient file stores name, disease, date of admission, room number and bed number. Which should be the primary key? (a) Name (b) Date of admission (c) Disease (d) None of the above.

- **Printed answer:** (d) None of the above; a Patient ID is needed.
- **Source:** [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)

### Viva (VIVA-45, candidate 1) <sub>Q0411</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

Do you have an idea about databases? Define primary key.

- **Printed answer:** A unique identifier for each entity in an entity set; an attribute whose values are all distinct, e.g. Student ID
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## Relational algebra

### Q6(i) <sub>Q0261</sub>

*BPDB Assistant Engineer (CSE) (inferred from page order) · 2021 · Written*

Powerplant(Powerplant_ID, location, type, capacity, unit_price), Customer(Customer_ID, name, address, DoB, monthly_demand), Customer_usage_profile(ID, month_name, Customer_ID, Powerplant_ID): relational algebra for customers with a yearly bill above Tk 5,000.

- **Source:** [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

### Q6(ii) <sub>Q0262</sub>

*BPDB Assistant Engineer (CSE) (inferred from page order) · 2021 · Written*

Same schema: relational algebra for customers who use nuclear power in December and have a December bill below Tk 500.

- **Source:** [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg)

## SQL GROUP BY / HAVING

### Q3(a) <sub>Q0231</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, deptlocation): list departments with average monthly salary > 1000.

- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

### Q3(a) <sub>Q0470</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department, Course, Offering: find departments whose average monthly salary is greater than 1000.

- **Printed answer:** SELECT deptno, AVG(monthlysalary) FROM Employee GROUP BY deptno HAVING AVG(monthlysalary) > 1000;
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p3](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md); [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p4](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

## SQL GROUP BY / HAVING COUNT

### Q3(b) <sub>Q0232</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offeringlocation, empno): retrieve course details for courses with exactly 2 offerings.

- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

### Q2(b) <sub>Q0945</sub>

*ICB Securities Trading Company Limited Assistant Programmer · 2026-06-27 · Written*

Find the courses and their number of students where enrollment is ≤ 30.

- **Source:** [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) · [image](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.jpg)

## ACID properties

### Q10 <sub>Q0406</sub>

*BPSC viva · Assistant Programmer (ICT Division) · Viva*

What are the ACID properties?

- **Printed answer:** Atomicity, Consistency, Isolation, Durability
- **Source:** [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)

## Assistant DBA responsibilities

### Viva p26 Q18 <sub>Q0714</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the responsibilities of an Assistant Database Administrator (ADBA)?

- **Printed answer:** An ADBA assists in database monitoring, backup and recovery, user management, performance monitoring, security implementation, and troubleshooting
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Assistant DBA risks

### Viva p26 Q19 <sub>Q0715</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the risks associated with the ADBA role?

- **Printed answer:** Risks include data loss, unauthorized access, accidental deletion, misconfiguration, downtime, and security breaches if proper procedures are not followed
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Bank database crash recovery

### Viva p20 Q14 <sub>Q0662</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What should be done if the bank database crashes?

- **Printed answer:** First, identify the cause and isolate the problem. Then restore data from backups or switch to the Disaster Recovery Site (DRS) to continue banking operations while recovery is performed
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p20](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p21](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Bitmap index

### Q75 <sub>Q0135</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Bitmap indexes are particularly well-suited for: (high-cardinality columns / low-cardinality columns / large text fields / JSON)

- **Printed answer:** (খ) Low-cardinality columns
- **Source:** [BCS/38_user-centered-design-schrodinger-hash-bitmap.md](../BCS/38_user-centered-design-schrodinger-hash-bitmap.md) · [image](../BCS/38_user-centered-design-schrodinger-hash-bitmap.jpg); [BCS/53_bfs-injective-functions-tree-leaves.md](../BCS/53_bfs-injective-functions-tree-leaves.md) · [image](../BCS/53_bfs-injective-functions-tree-leaves.jpg)

## Branch User access vs DBA access

### Viva p25 Q7 <sub>Q0704</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the difference between Branch User access and DBA access?

- **Printed answer:** Branch User: Can perform only authorized business operations like viewing or updating permitted records; DBA: Has administrative privileges to manage the entire database, users, security, backup, and recovery
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Cascadeless schedules

### Q39 <sub>Q0101</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Cascadeless schedules prevent: (deadlocks / aborts / reading uncommitted data / long transactions)

- **Printed answer:** (গ) reading uncommitted data (no cascading rollback)
- **Source:** [BCS/52_cascadeless-schedules-waterfall-model.md](../BCS/52_cascadeless-schedules-waterfall-model.md) · [image](../BCS/52_cascadeless-schedules-waterfall-model.jpg)

## Composite key application

### Viva (VIVA-45, candidate 1) <sub>Q0414</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

If I had no NID, how else could I be identified?

- **Printed answer:** By birth registration certificate; candidate answered name + date of birth (a composite primary key), which the chairman accepted
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## Concurrency control (locking)

### Q1(iv) <sub>Q0246</sub>

*BPDB Assistant Engineer (CSE) · 2021 · MCQ*

Locking protocols are used in DBMS for ____.

- **Note:** No answer printed. Expected: concurrency control.
- **Source:** [BUET JOB/36_math-mcq-and-bpdb-2021.md](../BUET%20JOB/36_math-mcq-and-bpdb-2021.md) · [image](../BUET%20JOB/36_math-mcq-and-bpdb-2021.jpg)

## Data

### Viva p26 Q13 <sub>Q0710</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Data?

- **Printed answer:** Data is raw facts or figures that can be processed to produce meaningful information
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Database

### Viva p26 Q14 <sub>Q0711</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Database?

- **Printed answer:** A Database is an organized collection of related data that allows efficient storage, retrieval, and management
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Database Normalization

### Viva p25 Q8 <sub>Q0705</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Database Normalization?

- **Printed answer:** Normalization is the process of organizing database tables to reduce redundancy and improve data integrity
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Database Schema

### Viva p25 Q1 <sub>Q0698</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Database Schema?

- **Printed answer:** A Database Schema is the logical structure of a database that defines tables, columns, relationships, constraints, and data types
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Database security

### Q9(c) <sub>Q0055</sub>

*38th BCS Written · 2018 · Written*

What is database security? Describe the different approaches to ensure database security.

- **Printed answer:** Protecting the database against intentional or accidental threats: strong passwords, encryption, hidden backdoors, segmentation, and monitoring/auditing.
- **Source:** [BCS/18_database-security-osi-binary-logic.md](../BCS/18_database-security-osi-binary-logic.md) · [image](../BCS/18_database-security-osi-binary-logic.jpg)

## Database Security

### Viva p27 Q27 <sub>Q0722</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Database Security?

- **Printed answer:** Database Security is the practice of protecting databases from unauthorized access, data theft, corruption, and misuse while ensuring confidentiality, integrity, and availability
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Database security (DBMS vs application provided)

### Q34 <sub>Q0852</sub>

*paper not shown · Written*

Describe the advantages and disadvantages of DBMS-provided and application-provided security.

- **Printed answer:** DBMS security: login + DBA-granted rights, only overhead of storing privileges; application security: programmer enforces it; then generic DBMS advantages/disadvantages
- **Correction:** Off target: lists generic DBMS pros/cons. Should contrast: DBMS security is centralised and enforced for every application but coarse-grained; application security allows fine-grained business rules but is duplicated per app, error-prone and bypassed by direct DB access.
- **Source:** [PETROBANGLA/02_gtcl-assistant-engineer-2022.md](../PETROBANGLA/02_gtcl-assistant-engineer-2022.md) · [image](../PETROBANGLA/02_gtcl-assistant-engineer-2022.jpg)

## Database security measures

### Viva p18 Q33 (+p26 Q17, p27 Q25) <sub>Q0644</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

How do you secure a database?

- **Printed answer:** Use strong authentication, encryption, access control, regular backups, patch updates, and SQL injection prevention
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p18](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## DBA role

### Viva p25 Q6 <sub>Q0703</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the role of a DBA?

- **Printed answer:** A Database Administrator (DBA) installs, configures, secures, backs up, monitors, and maintains databases while ensuring high availability and performance
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## DBMS limitations, NewSQL vs SQL/NoSQL

### Q5 <sub>Q0288</sub>

*Islamic Bank PLC SQA, Senior Officer (Network) · 2025-03-14 · Written*

Major limitations of a DBMS; how NewSQL differs from and relates to SQL and NoSQL databases.

- **Source:** [BUET JOB/27_islamic-bank-network-questions-1-6.md](../BUET%20JOB/27_islamic-bank-network-questions-1-6.md) · [image](../BUET%20JOB/27_islamic-bank-network-questions-1-6.jpg)

## Distributed database advantages

### MCQ 8 <sub>Q0205</sub>

*BCC Assistant Programmer (BUET) · 2021-02-12 · MCQ*

Which is an advantage of a distributed database over a centralized one? (software cost/complexity/slow response/modular growth)

- **Printed answer:** d (Modular growth)
- **Source:** [BUET JOB/10_stages-osi-model-bcc-mcq.md](../BUET%20JOB/10_stages-osi-model-bcc-mcq.md) · [image](../BUET%20JOB/10_stages-osi-model-bcc-mcq.jpg)

## ER diagram

### Q3(i) <sub>Q0863</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · 2023-01-20 · Written*

Schema employee(id, name, salary), equipment(id, name, price), hire(employee_id, equipment_id): draw the ERD.

- **Source:** [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg)

## ER diagram and relational schema

### Q9 <sub>Q0275</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

Course(c_id, c_name, total_credit) and Program(prog_no, prog_name); a course can be in many programs but a program has only one course. Draw the ERD and write the schema with PK/FK.

- **Note:** No answer printed. 1:N Course→Program: Course(c_id PK, ...), Program(prog_no PK, prog_name, c_id FK → Course).
- **Source:** [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg); [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg)

## Indexing

### Q4 <sub>Q0330</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2025-08-23 · Written*

How does indexing improve query performance?

- **Source:** [BUET JOB/34_bscll-ae-and-bba-questions.md](../BUET%20JOB/34_bscll-ae-and-bba-questions.md) · [image](../BUET%20JOB/34_bscll-ae-and-bba-questions.jpg)

## Keys (super/candidate)

### Q61 <sub>Q0121</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which key is known as the minimal super key? (Primary / Secondary / Foreign / Candidate)

- **Printed answer:** (ঘ) Candidate key
- **Source:** [BCS/44_db-keys-reinforcement-learning-epsilon.md](../BCS/44_db-keys-reinforcement-learning-epsilon.md) · [image](../BCS/44_db-keys-reinforcement-learning-epsilon.jpg)

## Materialized View

### Viva p25 Q3 <sub>Q0700</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Materialized View?

- **Printed answer:** A Materialized View stores the query result physically in the database. It improves query performance but requires periodic refresh
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## MySQL backup and restore

### Q1 <sub>Q0193</sub>

*PGCB Sub-Assistant Engineer (CSE) (BUET) · 2021-09-30 · Written*

Write the commands to back up and restore a MySQL database.

- **Printed answer:** mysqldump -u user -p db > file.sql; mysql -u user -p db < file.sql.
- **Source:** [BUET JOB/03_pgcb-sae-subnet-cfg-mysql-js.md](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.md) · [image](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.jpg)

## Normal forms

### Viva p25 Q10 <sub>Q0707</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the different Normal Forms?

- **Printed answer:** The common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF, and 5NF
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Normalization importance

### Viva p25 Q9 <sub>Q0706</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Why is Normalization important?

- **Printed answer:** Normalization eliminates duplicate data, improves consistency, saves storage, and makes database maintenance easier
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Oracle RAC

### Viva p25 Q5 <sub>Q0702</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Oracle RAC?

- **Printed answer:** Oracle RAC (Real Application Clusters) allows multiple servers to access the same database simultaneously, providing high availability, scalability, and fault tolerance
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## PHP database connection code

### Viva p24 Q37 <sub>Q0697</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Explain PHP database connection method/code.

- **Printed answer:** A basic PHP connection uses the mysqli_connect() function or the PDO class to establish a connection with the MySQL database. If the connection succeeds, PHP can execute SQL queries; otherwise, it returns an error
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p24](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## PHP-MySQL connection

### Viva p24 Q36 <sub>Q0696</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

How to connect PHP with MySQL database?

- **Printed answer:** PHP connects to MySQL using MySQLi or PDO by specifying the host, username, password, and database name
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p24](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Primary Key vs Foreign Key

### Viva p26 Q20 <sub>Q0716</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the difference between Primary Key and Foreign Key?

- **Printed answer:** Primary Key: Uniquely identifies each record in a table; Foreign Key: References the primary key of another table to establish relationships
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Primary key-foreign key relationship

### Viva p26 Q21 <sub>Q0717</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the relationship between Primary Key and Foreign Key?

- **Printed answer:** A Foreign Key references a Primary Key in another table, maintaining referential integrity between related tables
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Primary vs super vs foreign key

### Viva p27 Q23 <sub>Q0719</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Difference between Primary Key, Super Key, and Foreign Key.

- **Printed answer:** Primary Key: Unique identifier; cannot be NULL; Super Key: Any attribute(s) that uniquely identify a row; may contain extra attributes; Foreign Key: References the primary key of another table
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Primary, super and candidate keys

### Q5 <sub>Q0427</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What are primary, super and candidate keys?

- **Printed answer:** Primary key: unique, non-null column identifying a row; super key: compound key from several columns that helps build the primary key but does not fully identify a row; candidate key: possible primary key
- **Correction:** Super key description is wrong: a super key is any set of attributes that uniquely identifies every tuple (it does identify rows); candidate keys are minimal super keys, one of which is chosen as primary key.
- **Source:** [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)

## Relational algebra to SQL

### Q8 <sub>Q0274</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

Write SQL for Π s.name, s.id (σ d.name='ECE' (Student s ⋈ s.dept_id=d.dept_id Department d)).

- **Note:** No answer printed. SELECT s.name, s.id FROM Student s JOIN Department d ON s.dept_id = d.dept_id WHERE d.name = 'ECE';
- **Source:** [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg)

## Relationship cardinality (library Book–Borrower)

### Q12 <sub>Q0932</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written · 10 marks*

In a library database, is the Book–Borrower relationship 1-to-1, 1-to-many or many-to-many? Justify.

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## ROLLBACK

### Q11 <sub>Q0407</sub>

*BPSC viva · Assistant Programmer (ICT Division) · Viva*

What is ROLLBACK?

- **Printed answer:** Transaction command that undoes all changes of an incomplete transaction, restoring the previous state
- **Source:** [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)

## SQL

### Viva (VIVA-45, candidate 2) <sub>Q0418</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

Full form of SQL?

- **Printed answer:** Structure Query Language
- **Correction:** Correct expansion is 'Structured Query Language'.
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## SQL (GROUP BY ... HAVING AVG)

### Q3(a) <sub>Q0889</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Schema Employee(empno, empname, monthlysalary, deptno, mgrno), Department(deptno, deptname, deptlocation), Course(crscode, crsdesc, crscategory, crsduration), Offering(offbegindate, crscode, offeringlocation, empno): display departments with average monthly salary > 1000.

- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

## SQL (GROUP BY ... HAVING COUNT)

### Q3(b) <sub>Q0890</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Same schema: retrieve course details for courses that have exactly 2 offerings.

- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

## SQL (GROUP BY, aggregate max)

### Q3(ii) <sub>Q0864</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · 2023-01-20 · Written*

Same schema: write an SQL query showing the name of the employee who borrowed the maximum number of equipment.

- **Printed answer:** Joins employee/hire with a subquery grouping hire BY eqp_id ORDER BY count DESC LIMIT 1
- **Correction:** Groups by equipment, so it returns employees who hired the most-hired equipment, not the employee with the most hires; also uses emp_id/eqp_id instead of employee_id/equipment_id. Correct: SELECT e.name FROM employee e JOIN hire h ON e.id=h.employee_id GROUP BY e.id,e.name HAVING COUNT(*) = (SELECT MAX(c) FROM (SELECT COUNT(*) c FROM hire GROUP BY employee_id) t).
- **Source:** [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg); [PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md) · [image](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.jpg)

## SQL clauses

### Viva (VIVA-45, candidate 2) <sub>Q0419</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

How many SQL clauses are there and what are they?

- **Printed answer:** 3: SELECT, FROM, WHERE
- **Correction:** Incomplete: SELECT-FROM-WHERE is only the basic query block; SQL also has GROUP BY, HAVING, ORDER BY, JOIN ... ON, LIMIT etc.
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## SQL commands

### Q24 <sub>Q0089</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which is not a command/keyword in SQL? (REMOVE / ORDER BY / SELECT / WHERE)

- **Printed answer:** (ক) REMOVE (deleting rows uses DELETE)
- **Source:** [BCS/34_maximum-power-transfer-sql-8255-ppi.md](../BCS/34_maximum-power-transfer-sql-8255-ppi.md) · [image](../BCS/34_maximum-power-transfer-sql-8255-ppi.jpg)

## SQL COUNT(*) vs COUNT(DISTINCT) with NULLs

### Q5 <sub>Q0217</sub>

*BCC Assistant Programmer (BUET) (inferred from page order) · 2021-02-12 · Written*

Table t(val INT) holds 1,2,3,NULL,NULL,4,5. What do SELECT COUNT(*) and SELECT COUNT(DISTINCT val) return?

- **Printed answer:** COUNT(*) = 6; COUNT(DISTINCT val) = 5.
- **Correction:** COUNT(*) counts all rows including NULLs: 7, not 6. COUNT(DISTINCT val) = 5 is right.
- **Source:** [BUET JOB/06_c-recursion-sql-java-completion.md](../BUET%20JOB/06_c-recursion-sql-java-completion.md) · [image](../BUET%20JOB/06_c-recursion-sql-java-completion.jpg)

## SQL duplicates (GROUP BY HAVING)

### Q4 <sub>Q0338</sub>

*BBA Assistant Maintenance Engineer (inferred from page order) · 2025-07-12 · Written*

Define SQL and write a query to find duplicates in the employee table.

- **Source:** [BUET JOB/33_sql-array-recursion-questions.md](../BUET%20JOB/33_sql-array-recursion-questions.md) · [image](../BUET%20JOB/33_sql-array-recursion-questions.jpg)

## SQL GROUP BY / HAVING with COUNT

### Q3(b) <sub>Q0471</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Same schema (Offering(offbegindate, crscode, offeringlocation, empno)): find the courses that have more than two offerings.

- **Printed answer:** SELECT crscode, COUNT(*) FROM Offering GROUP BY crscode HAVING COUNT(*) > 2;
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p3](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md); [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p4](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

## SQL injection

### Q12 <sub>Q0408</sub>

*BPSC viva · Assistant Programmer (ICT Division) · Viva*

What is SQL injection?

- **Printed answer:** An attack in which hackers inject SQL to read, update, delete or modify a database without authentication
- **Source:** [VIVA/02_bpsc-oop-and-dbms-viva.md](../VIVA/02_bpsc-oop-and-dbms-viva.md) · [image](../VIVA/02_bpsc-oop-and-dbms-viva.jpg)

## SQL INSERT

### Q5 <sub>Q0032</sub>

*paper not shown · Written*

Write an SQL query to insert a tuple into Employee(ID, Name, Designation, Salary).

- **Printed answer:** INSERT INTO employee(ID, Name, Designation, Salary) VALUES(1, "Compact", "Officer", 22000);
- **Source:** [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg)

## SQL JOIN

### Viva p26 Q11 <sub>Q0708</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is SQL JOIN?

- **Printed answer:** A JOIN combines rows from two or more tables based on a related column
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## SQL JOIN types

### Viva p26 Q12 <sub>Q0709</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the different types of JOIN?

- **Printed answer:** Common JOINs are INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## SQL JOIN with GROUP BY

### Q11 <sub>Q0294</sub>

*Islamic Bank PLC SQA, Senior Officer (Network) · 2025-03-14 · Written*

Find the department name and average salary of employees by joining Department and Employee.

- **Source:** [BUET JOB/28_islamic-bank-cont-and-dpdc.md](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) · [image](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.jpg)

## SQL second highest salary

### Q3 <sub>Q0224</sub>

*BCC Assistant Programmer Written Test · 2017 · Written*

Write an SQL query to get the second highest salary from Employee.

- **Printed answer:** SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee); plus NOT IN and LIMIT variants.
- **Source:** [BUET JOB/08_ccc-ap-2017-c-and-sql.md](../BUET%20JOB/08_ccc-ap-2017-c-and-sql.md) · [image](../BUET%20JOB/08_ccc-ap-2017-c-and-sql.jpg)

## SQL SELECT

### Q2(a) <sub>Q0944</sub>

*ICB Securities Trading Company Limited Assistant Programmer · 2026-06-27 · Written*

Given Student and Course tables, find student information.

- **Source:** [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) · [image](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.jpg)

## SQL self-join

### Q5 <sub>Q0300</sub>

*DPDC Assistant Manager (ICT) · 2025-06-27 · Written*

Find employees whose manager is in the same region as the employee (schema given).

- **Source:** [BUET JOB/28_islamic-bank-cont-and-dpdc.md](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) · [image](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.jpg)

## SQL subquery with GROUP BY / HAVING

### Q10 <sub>Q0172</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · Written*

EMPLOYEE(id, name, department, salary): find employees who work in a department whose average salary is lower than the average salary of all departments.

- **Printed answer:** SELECT ... WHERE e.salary < (SELECT AVG(salary) FROM employee) AND e.department IN (SELECT department ... GROUP BY department HAVING AVG(salary) < (SELECT AVG(salary) FROM employee)).
- **Correction:** The extra condition e.salary < overall average wrongly drops higher-paid employees of those departments; only the department IN (... HAVING AVG(salary) < (SELECT AVG(salary) FROM employee)) filter is needed.
- **Source:** [BUET JOB/19_protocol-layer-sql-terms.md](../BUET%20JOB/19_protocol-layer-sql-terms.md) · [image](../BUET%20JOB/19_protocol-layer-sql-terms.jpg); [BUET JOB/31_bpdb-protocols-sql-algorithms.md](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.md) · [image](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.jpg)

## SQL trigger

### Q1 <sub>Q0184</sub>

*PGCB Assistant Engineer (CSE) (BUET) · 2021-09-30 · Written*

Employee(emp_id, emp_name, dept_id, salary), Department(dept_id, dept_name, increment_dept): create a trigger that increases salary by 10% for employees whose salary is above 30000.

- **Printed answer:** CREATE TRIGGER New_EMP ALTER INSERT ON employee FOR EACH ROW UPDATE salary = salary + salary*0.10 WHEN salary > 30000
- **Correction:** Invalid syntax ('ALTER INSERT', bare UPDATE). E.g. MySQL: CREATE TRIGGER inc_sal BEFORE INSERT ON Employee FOR EACH ROW BEGIN IF NEW.salary > 30000 THEN SET NEW.salary = NEW.salary * 1.10; END IF; END;
- **Source:** [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)

## Strict two-phase locking

### MCQ 18 <sub>Q0062</sub>

*paper not shown · MCQ*

Strict two-phase locking (S2PL) holds ____ till commit: (a) All locks (b) Only read locks (c) Only write locks (d) No locks.

- **Printed answer:** Printed: (a) All locks.
- **Correction:** Strict 2PL keeps only exclusive (write) locks until commit or abort, so the answer is (c) Only write locks. Holding all locks until commit is rigorous 2PL.
- **Source:** [BCS/31_function-pointer-s2pl-class-spooling.md](../BCS/31_function-pointer-s2pl-class-spooling.md) · [image](../BCS/31_function-pointer-s2pl-class-spooling.jpg)

## Super Key

### Viva p27 Q22 <sub>Q0718</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Super Key?

- **Printed answer:** A Super Key is any set of one or more columns that can uniquely identify a record in a table
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Super key vs candidate key

### Q6 <sub>Q0428</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

Difference between a super key and a candidate key?

- **Printed answer:** A super key must be unique while a candidate key need not be unique
- **Correction:** Both uniquely identify tuples; the difference is minimality: a candidate key is a minimal super key (no attribute can be removed), whereas a super key may contain extra attributes.
- **Source:** [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)

## Three-schema architecture

### Q1(ix) <sub>Q0251</sub>

*BPDB Assistant Engineer (CSE) (inferred from page order) · 2021 · MCQ*

In database architecture, the external level is the ____.

- **Note:** No answer printed. Expected: user (view) level.
- **Source:** [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

## Trigger

### Viva p26 Q15 <sub>Q0712</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Trigger?

- **Printed answer:** A Trigger is a stored database object that automatically executes when a specified event (INSERT, UPDATE, or DELETE) occurs
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Trigger function

### Viva p26 Q16 <sub>Q0713</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the function of a Trigger?

- **Printed answer:** Triggers automatically perform tasks such as auditing, logging, enforcing business rules, and maintaining data integrity
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p26](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Trigger real-life use

### Viva p27 Q24 <sub>Q0720</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is the real-life application of a Database Trigger?

- **Printed answer:** A trigger can automatically record transaction logs, update account balances, maintain audit trails, or generate notifications after database changes
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Tuple

### Q10 <sub>Q0432</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What is a tuple?

- **Printed answer:** In Python, a tuple is an ordered collection of items in (), separated by commas, described as an 'অবিচ্ছিন্ন' data type
- **Correction:** Python tuple should be described as immutable (অপরিবর্তনীয়), not 'continuous'; in DBMS context a tuple is a row (record) of a relation.
- **Source:** [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)

## View

### Viva p25 Q2 <sub>Q0699</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a View?

- **Printed answer:** A View is a virtual table created from one or more SQL queries. It stores only the query, not the actual data
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## View vs Materialized View

### Viva p25 Q4 <sub>Q0701</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Difference between View and Materialized View.

- **Printed answer:** View: Stores only the SQL query; data is fetched every time; Materialized View: Stores the query result physically; faster but needs refreshing
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p25](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Weak entity (ER model)

### Q7 <sub>Q0219</sub>

*BCC Assistant Programmer (BUET) (inferred from page order) · 2021-02-12 · Written*

What is a weak entity? Find a weak entity and its identifying relationship for a school database with Student(student_id, ...), Teacher(teacher_id, ...), Course(course_id, ...).

- **Printed answer:** Shows an ER diagram (Student, Course, Lecturer, Subjects) without naming a weak entity.
- **Correction:** Does not answer: a weak entity has no key of its own and depends on an owner through an identifying relationship (double rectangle/diamond). None of the three tables is weak (each has its own key); e.g. a Section or Dependent entity identified through Course/Teacher would be.
- **Source:** [BUET JOB/14_er-model-python-o1-search.md](../BUET%20JOB/14_er-model-python-o1-search.md) · [image](../BUET%20JOB/14_er-model-python-o1-search.jpg)

## WHERE clause

### Viva (VIVA-45, candidate 2) <sub>Q0420</sub>

*NTRCA 15th registration viva (2019) · Lecturer (ICT), college level · 2019 · Viva*

What is written in the WHERE clause?

- **Printed answer:** The condition
- **Source:** [VIVA/03_ntrca-post-lecturer-ict-viva.md](../VIVA/03_ntrca-post-lecturer-ict-viva.md) · [image](../VIVA/03_ntrca-post-lecturer-ict-viva.jpg)

## Write-ahead logging (recovery)

### Q79 <sub>Q0139</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Write-ahead logging requires: (data first, log later / no redo phase / log record flushed before data page / none)

- **Printed answer:** (গ) log record flushed before the data page
- **Source:** [BCS/57_write-ahead-logging-random-search.md](../BCS/57_write-ahead-logging-random-search.md) · [image](../BCS/57_write-ahead-logging-random-search.jpg)
