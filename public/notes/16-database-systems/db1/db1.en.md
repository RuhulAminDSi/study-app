# Database Concepts & Data Models (ER, Relational): Revision Notes

> Plain-text companion to `notes/src/16-database-systems/db1.en.html` (handwritten-style PDF: `notes/pdf/16-database-systems/db1.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Database Systems):** the syllabus runs "Concepts of database systems; Data Models: **Entity-Relationship model, Relational model**; Query Languages: Relational algebra, SQL; **Constraints and triggers**; Functional dependencies and normalization; File organization and data storage; Indexing; Query optimization; Transaction management; Recovery; Concurrency control; Access control and security; Semi-structured database; Object oriented databases." **This note covers the first three clauses only** — database-system concepts, the E-R model, the relational model, and constraints & triggers. Relational algebra and SQL belong to the query-languages lesson; functional dependencies and normalization to the normalisation lesson; indexing, B+ trees and optimisation to the indexing lesson; transactions, concurrency and recovery to the transactions lesson.

**High-yield:** Database system = database + DBMS + application programs + users + hardware · database is the data, DBMS is the managing software · schema = the blueprint, instance = the data at a point in time · ANSI/SPARC three levels: external → conceptual → internal · exactly **two** kinds of data independence, logical and physical · Chen's notation: entity = rectangle, attribute = ellipse, relationship = diamond, key = underlined attribute · a **weak entity set is a double rectangle**, its identifying relationship a double diamond, a derived attribute a dashed ellipse · degree = number of columns, cardinality = number of rows · every candidate key is a superkey, every primary key is a candidate key, a foreign key is somebody else's primary key · a foreign key enforces **referential integrity**, a primary key **entity integrity** · for 1:N the foreign key goes on the **N side** · only **M:N** forces a junction relation · `DROP` removes structure and data; `DELETE` and `TRUNCATE` keep the structure · a trigger is event-driven stored logic run by the DBMS, not by the application.

---

## 1. Database, DBMS and Database System

- A **database** is an organised collection of related data. A **DBMS** (Database Management System) is the software that stores, retrieves and protects it. The **database system** is the whole assembly: *database + DBMS + application programs + users + hardware*. Every "which one is X?" question turns on which of those five a name denotes.

| Term | What it actually is | Examples |
|---|---|---|
| **Database** | the data itself, in an organised persistent form | students, courses, exams of a university |
| **DBMS** | software sitting between the application and the data | MySQL, Oracle, PostgreSQL, SQL Server; MongoDB is *NoSQL* |
| **Database system** | **all five parts together** | what a university actually installs and runs |
| **Application program** | a program that asks the DBMS for data | a marks-entry program, an ATM program, a website |
| **Hardware** | the memory and disks that hold the files and blocks | where the data physically sits |
| **File system** | the OS's files: no rules, no shared access | what the database replaced |

- **Why databases replaced files.** Four failures, four answers: *redundancy* (a fact stored in several files) → one schema; *inconsistency* (copies disagree) → constraints; *poor sharing* → views and a query language; *program–data dependence* (change the file layout, rewrite every program) → the DBMS owns the storage.
- 💡 **Trick:** "**Data, software, everything.**" Is the DBMS the database? **No** — the DBMS is the manager. Is the database the DBMS? Also no. Only **database system** means the whole assembly.
- ⚠ **Trap:** a **database is not a table**, and a **file system is not a database** — files enforce no schema, no transactions and no concurrency. "Which one enforces integrity?" → the **DBMS**.
- ✍ Worked example — an ATM. The **database** is the account table. The **DBMS** decrypts the PIN, locks the row so nobody withdraws at the same instant, checks the balance and writes the new one. The **application** is the screen menu; the **database system** is bank software + core server + card machine + network + customer.

## 2. The Three-Level Architecture

- The **three-level (three-schema) architecture** of **ANSI/SPARC** splits the database into an **external** level (what each user sees), a **conceptual** level (the logical structure of the whole organisation's data) and an **internal** level (how it is physically stored). Mappings join them — and the mappings are what make **data independence** possible.

| Level | Question it answers | Who sees it |
|---|---|---|
| **External** | "What does *this* user see?" | one user or application; many views |
| **Conceptual** | "What data exists, and what does it mean?" | the whole organisation's logical view |
| **Internal** | "Where and how is it stored?" | the DBMS alone |
| **Mapping** | "How is the upper level's language bound to the lower one?" | the DBMS writes it, not the user |

- 💡 **Trick:** "**Outside, Concept, Inside.**" *E* = **E**very **u**ser, *C* = **C**ommunity view of all data, *I* = **I**nternal plumbing. Read the stack **top down**: from the user's words to the bytes on disk.
- ⚠ **Trap:** the **external level is not one view** — there are normally several. The **internal level is private to the DBMS**; no program is written against it. The **conceptual level is logical**: no file names, no block sizes.
- ✍ Worked example — schema vs instance on one table. The **schema** is `Student(id, name, dept)` — the blueprint, changed rarely, kept in the **data dictionary**. The **instance** is `(101,"Alice","CSE")`, `(102,"Bob","ECE")` — the values *right now*.

| Point | Schema | Instance |
|---|---|---|
| Also called | logical design, metadata | snapshot, current state |
| Contains | names, columns, types, constraints | the actual rows stored |
| Changed | rarely, by the designer (DDL) | constantly, by every insert (DML) |
| Stored in | the data dictionary / catalogue | the data files |
| Who sees it | designer, DBA | the user and the application |

## 3. Why Three Levels? Data Independence

- **Data independence** is the ability to change one level of the schema without changing the level above. There are exactly **two** kinds; a paper offering "three levels of independence" is testing this. **Logical** is conceptual → external; **physical** is internal → conceptual.

| | Logical data independence | Physical data independence |
|---|---|---|
| Between | conceptual level and external level | internal level and conceptual level |
| You change | the **logical** schema: add `phone`, split a table | the **storage**: add a B+ tree index, reorganise pages |
| Unaffected | external views and application programs | conceptual schema and application programs |
| Holds because | the external/conceptual **mapping** is rewritten | the conceptual/internal **mapping** is rewritten |
| Typical example | adding a column without touching any query | dropping an index changes speed, not meaning |
| Difficulty | **harder** — the meaning changes | **easier** — only the layout changes |

- 💡 **Trick:** "**Logical is on top, physical is underneath.**" Read the arrow upwards in each pair: logical independence changes the level *above*, physical the level *below*.
- ⚠ **Trap:** there are **two** kinds, not three. Adding an index is **physical**; adding a column is **logical**; reformatting a file without touching the schema is the classic **physical** example.
- ✍ Worked example — name the change. "The admin rebuilds the table with a hash index on *dept*." → **physical**: the queries still mean the same. "A column *nationality* is added to Student." → **logical**: the conceptual schema changed.

## 4. The Entity-Relationship Model in Chen's Notation

- The **E-R model** (Peter Chen, **1976**) is a high-level **conceptual** model used to design a database before any table is built. It has three primitive components — **entity**, **attribute**, **relationship** — and every one has a fixed symbol.

| Component | Symbol | Example |
|---|---|---|
| **Strong entity** | rectangle | Employee |
| **Weak entity** | **double rectangle** | Dependent |
| **Attribute** | ellipse | name, id |
| **Key attribute** | **underlined** attribute | id |
| **Derived** | dashed ellipse | age |
| **Multivalued** | double ellipse | phones |
| **Composite** | ellipse with sub-ellipses | address |
| **Relationship** | diamond | Enrolls |
| **Identifying** | double diamond | the weak entity's own link to its owner |
| **Cardinality** | 1, N or M on the arms | 1:N, M:N |
| **Total participation** | double line = total, single = partial | every employee is in a department |

- A **weak entity set has no key of its own**: it is identified by the *owner's key + its own partial key*, and it is existence-dependent on that owner.
- 💡 **Trick:** "**Rectangle entity, ellipse attribute, diamond relationship, underlined = key.**" Then one letter per exception: **double** rectangle = weak, **dashed** ellipse = derived, **double** ellipse = multivalued, **double** diamond = identifying. A **composite** attribute is an ellipse with sub-ellipses (*address* = house, street, city).
- ⚠ **Trap:** a **weak entity set is a double rectangle** — not a diamond (that is a relationship), not an ellipse (that is an attribute) and not a dashed ellipse (that is a *derived attribute*). Its identifying relationship is a **double diamond**.
- ✍ Worked example — reading an E-R diagram. "Every **DEPARTMENT** rectangle has one **name** underlined and a dashed ellipse **no_of_staff**. A **double rectangle** **ASSIGNMENT** joins PROJECT to it." → *name* is the key attribute of a strong entity; *no_of_staff* is **derived** (count the rows); **ASSIGNMENT** is a **weak entity**, meaningless until you know which project and which employee it belongs to.

## 5. Cardinality: 1:1, 1:N and M:N

- **Cardinality** states how many instances of one entity may be associated with one instance of the other. There are only three shapes — **1:1**, **1:N**, **M:N** — and the shape decides **how many relations the design needs**.

| Cardinality | Meaning | Example | Mapping to relations |
|---|---|---|---|
| **1:1** | one A, at most one B | Person ↔ Passport | no new table: put the "one" side's **PK as an FK** in the other table |
| **1:N** | one A, many B | Department ↔ Students | no new table: **the "one" side's PK as an FK in the "many" side** |
| **M:N** | many A, many B | Student ↔ Courses | **its own relation**, whose FKs point to both sides |
| 1:N with data | the relationship itself carries *since*, *grade* | Student ↔ Enrols | the junction table becomes necessary even for 1:N |
| Mandatory 1:N | every student has a department | Department ↔ Students | `dept_id` must be NOT NULL |
| Optional 1:N | a student may have no adviser | Student ↔ Adviser | the FK may be NULL |

- **Why M:N needs a relation.** Try to put the link in `Student`: the column `courses` would have to hold `{CSE101, MAT201}` — a **multi-valued cell**, so one student gives one value per column, exactly what 1NF forbids. Put it in `Course` and the same problem appears. Therefore `ENROLLS(student_id, course_code)`, with an FK to each side; the pair is usually also the composite key.
- 💡 **Trick:** "**One FK on the many side, none on the one side.**" 1:1 and 1:N cost no new relation; M:N always costs one junction relation.
- ⚠ **Trap:** for **1:N the foreign key goes on the N side**; on the "one" side it would need several ids in one cell, which breaks 1NF. An **M:N cannot be written with any single foreign key**, because a student has many courses *and* a course has many students — neither table can hold the other's list.
- ✍ Worked example — choosing the side for a 1:1. Put the foreign key on the side that may be **missing**: the employee table gets `passport_no`, so an employee without a passport stores NULL. Putting it on `Passport` would demand a passport row for every employee. For **1:N the side is not a choice**.

## 6. The Relational Model

- The **relational model** (E. F. Codd, 1970) represents data as **relations** — mathematical sets of tuples over named attributes. A relation is shown as a table: tuples are rows, attributes are columns. Two properties matter in every answer: a relation has **no duplicate tuples** and **no order**.

| Formal term | Everyday name | Meaning |
|---|---|---|
| **Relation** | table | a set of tuples with the same attributes |
| **Tuple** | row / record | one fact: `(101,"Alice","CSE")` |
| **Attribute** | column / field | a named property: *name*, *dept* |
| **Domain** | allowed value set | integers 1–999 for *id* |
| **Degree** | arity, #columns | Student has degree **3** |
| **Cardinality** | #rows | Student holds 3 tuples |
| **Relation schema** | table definition | `Student(id, name, dept)` |
| **Relation instance** | current contents | the rows *right now* |

- Formal properties: cells hold **atomic** values only · tuples are **unique** · tuple and attribute **order does not matter** · every tuple has the same attributes in the same domains.
- 💡 **Trick:** "**Table–Row–Column–Set.**" "Is degree rows or columns?" → **columns**. "Is cardinality rows or columns?" → **rows**. Degree and cardinality are the pair examiners swap.
- ⚠ **Trap:** a table **may be sorted on screen**, but the relation is a set, so **row order is not part of the data**. **Degree does not change** when rows are added. Two identical rows are **not** allowed — that is what the primary key prevents.
- ✍ Worked example — describe one table formally. `Student(id, name, dept)` holding `(101,"Alice","CSE")`, `(102,"Bob","ECE")`, `(103,"Carol","CSE")`: relation name **Student**; degree **3**; cardinality **3**; domain of *id* = integers 1–999; *id* underlined, so it is the key attribute. Adding a fourth student raises cardinality to 4 and leaves degree at 3.

## 7. Keys: Super, Candidate, Primary, Foreign, Composite

- A **superkey** is any set of attributes that uniquely identifies a tuple. A **candidate key** is a superkey that is **minimal** — remove one attribute and it no longer identifies. The **primary key** is the single candidate key chosen as the official identifier. A **foreign key** points at another relation's candidate key. A **composite key** is built from two or more attributes.

| Key | What it is | Rule | Example |
|---|---|---|---|
| **Superkey** | any set that identifies a tuple | may be larger than needed | {id, name} |
| **Candidate key** | **minimal** superkey | no attribute can be removed | {id} |
| **Primary key** | the candidate key chosen | **one per table; never NULL; unique** | PRIMARY KEY (id) |
| **Foreign key** | points at another table's key | enforces **referential integrity** | `dept_id INT REFERENCES Dept(id)` |
| **Composite key** | two or more attributes | a primary key may be composite | (StudentID, CourseID) |
| **Alternate key** | a candidate key not chosen | still UNIQUE if declared | {passport_no} |

- The nesting runs **one way**: superkey ⊇ candidate key ⊇ primary key. A superkey that is not minimal is **not** a candidate key.
- 💡 **Trick:** "**Every candidate key is a superkey; every primary key is a candidate key; a foreign key is somebody else's primary key.**"
- ⚠ **Trap:** a table has **exactly one** primary key but many candidate keys and many superkeys. A primary key may be **composite** — it need not be one column. A foreign key column **may** hold NULL; only its non-NULL values must match.
- ✍ Worked example — classify the keys of one table. `Person(pid, passport_no, phone)`: {pid} unique → superkey; remove *pid* and it fails → minimal → **candidate key**; chosen → **primary key**. {passport_no} is minimal too → **alternate key**. {pid, phone} is unique but **not** a candidate key, because *phone* can be dropped.

## 8. Constraints and the Two Integrity Rules

- A **constraint** is a rule declared on a column or a table that restricts what may be stored, so the data stays correct however it is written. SQL gives six constraint forms, and they exist to protect two named properties of data.

| Constraint | What it forbids | SQL |
|---|---|---|
| **NOT NULL** | a NULL in the column | `name VARCHAR(50) NOT NULL` |
| **UNIQUE** | two rows sharing a value (NULL excepted) | `email VARCHAR(100) UNIQUE` |
| **PRIMARY KEY** | NULLs and duplicates — implies the two above | `id INT PRIMARY KEY` |
| **FOREIGN KEY** | a value matching no key of the referenced table | `dept_id INT REFERENCES Dept(id)` |
| **CHECK** | a value failing a stated condition | `CHECK (Age >= 18)` |
| **DEFAULT** | nothing — supplies a value when none is given | `status VARCHAR(20) DEFAULT 'active'` |

- **Entity integrity** — the **primary key is never NULL** and is unique in every row. A relation must be addressable: a row with no identity cannot be pointed at. Enforced by **PRIMARY KEY**.
- **Referential integrity** — **every non-NULL foreign key value must match an existing key value in the table it references**. No orphan rows. Enforced by **FOREIGN KEY**; when the parent row is deleted you must say what happens: `ON DELETE CASCADE`, `SET NULL`, `SET DEFAULT` or `RESTRICT / NO ACTION`.

```sql
CREATE TABLE Enrolls ( student_id  INT      NOT NULL REFERENCES Student(id),
                      course_code CHAR(7)  NOT NULL REFERENCES Course(code),
                      grade       CHAR(2)  CHECK (grade IN ('A','B','C','F')),
                      enrolled_on DATE     DEFAULT CURRENT_DATE );
```

- 💡 **Trick:** "**E**ntity = every row gets an identity (no NULL PK). **R**eferential = every arrow lands on a real target." Match the first word: **E**ntity → primary key; **R**eferential → foreign key.
- ⚠ **Trap:** a foreign key exists to enforce **referential integrity** — not entity integrity, encryption or faster sorting; entity integrity is the primary key's job. A foreign key column **may** hold NULL. And **`DROP` removes the table's structure *and* its data**, while **`DELETE`** (optionally by `WHERE`) and **`TRUNCATE`** remove rows and **keep the structure**; **`ALTER`** changes the structure and keeps the data.
- ✍ Worked example — why an orphan row is a bug. `Enrolls.student_id = 999` with no such student breaks referential integrity, so the FK rejects the insert. `Enrolls.student_id = NULL` is allowed: that enrolment has no student yet, which is how an optional relationship is stored.

## 9. Triggers, and E-R Model vs Relational Model

- A **trigger** is stored logic the DBMS executes **automatically when an event happens** on a table — before, after, or instead of an `INSERT`, `UPDATE` or `DELETE`. The application never calls a trigger; the *engine* fires it, which is why it cannot be bypassed by any client.

| Timing | Fires |
|---|---|
| **BEFORE** | before the row is written; may change `NEW` |
| **AFTER** | after the row is written; `OLD` and `NEW` both available |
| **FOR EACH ROW** | once per affected row, not per statement |
| **INSTEAD OF** | on a **view**, to make it updatable |

```sql
CREATE TRIGGER trg_student_count
AFTER INSERT ON Student
FOR EACH ROW
BEGIN
  UPDATE Department
  SET StudentCount = StudentCount + 1
  WHERE DeptID = NEW.DeptID;
END;
```

- 💡 **Trick:** a constraint is a **rule**, a trigger is a **reaction**. Put rules in constraints; put reactions (counts, audit trails, derived values) in triggers.
- ⚠ **Trap:** a trigger is **not** a stored procedure — nobody executes it by name, it fires on an **event**. It is not a substitute for a constraint: a `CHECK` is cheaper and clearer. **Foreign-key enforcement is done by the constraint, not by a trigger.**
- ✍ Worked example — three uses. **1. Maintain a count:** the trigger above adds 1 to that department's head-count after every insert. **2. Audit:** after any update of `salary`, copy the old and new value into `Salary_Log`. **3. Validate:** before inserting, reject a booking dated in the past — though a `CHECK` is preferred.

| Aspect | E-R model (conceptual) | Relational model |
|---|---|---|
| Stage | **design** — before any table exists | **implementation** — the tables themselves |
| Data as | entities, attributes, relationships | relations, tuples, attributes |
| Abstraction | high — logical, implementation-free | low — close to storage |
| Users | designers and analysts | programmers and DBAs |
| Maps to | the **conceptual level** of the three-level architecture | the **external and internal levels** of the implementation |

---

## Practice MCQs

1. A database system consists of: (a) the DBMS alone (b) the database alone (c) DB + DBMS + apps + users + hardware (d) the data files alone
2. Schema and instance are best described as: (a) schema = structure, instance = data at a point in time (b) schema = data now (c) both in the data files (d) instance = blueprint
3. Adding a B+ tree index without changing any program is: (a) logical data independence (b) physical data independence (c) the external level (d) a schema change
4. In Chen's notation a weak entity set is drawn as: (a) a diamond (b) an ellipse (c) a dashed ellipse (d) a double rectangle
5. 1:N between DEPARTMENT and EMPLOYEE maps as: (a) DEPARTMENT's PK as an FK in EMPLOYEE (b) EMPLOYEE's PK as an FK in DEPARTMENT (c) merge both into one table (d) a third table for the link
6. Student ↔ Course is M:N and needs its own relation because: (a) both sides have many attributes (b) no single FK can represent it on either table (c) a relationship cannot live in two tables (d) M:N needs an index on both sides
7. A foreign key constraint is mainly used to enforce: (a) entity integrity (b) data encryption (c) referential integrity (d) faster sorting
8. Which of these is a composite key? (a) id (b) (StudentID, CourseID) (c) name (d) the whole row
9. A trigger differs from a stored procedure because it: (a) must be written in Java (b) cannot modify data (c) is called by the application (d) is run by the DBMS automatically on an event
10. Which SQL command removes a table's structure and all its data? (a) DELETE (b) TRUNCATE (c) ALTER (d) DROP

**Answer key:** 1-c · 2-a · 3-b · 4-d · 5-a · 6-b · 7-c · 8-b · 9-d · 10-d

## Written question (10 marks)

Define a database system and distinguish schema from instance. Explain the three-level architecture and the two kinds of data independence. Draw Chen's E-R notation including a weak entity set, and show how 1:1, 1:N and M:N map to relations. Finally, state what constraints and triggers are for.

**Model answer:**
1. **Definition (1):** database = the data; DBMS = the managing software; database system = database + DBMS + applications + users + hardware. **Schema** = the blueprint, changed rarely, kept in the data dictionary; **instance** = the rows at a point in time.
2. **Three levels (2):** **external** (user views, one per application), **conceptual** (logical structure of all data: tables, relations, constraints), **internal** (physical storage: files, pages, blocks, indexes). Standard: ANSI/SPARC.
3. **Data independence (2):** **logical** — change the conceptual schema (add a column, split a table) and the external views and programs are unaffected, via the external/conceptual mapping. **physical** — change the internal schema (add an index, reorganise pages) and the conceptual schema and programs are unaffected. Physical is easier; logical is harder.
4. **E-R notation (2):** entity = rectangle (weak entity = **double rectangle**), attribute = ellipse (key **underlined**, derived **dashed**, multivalued double), relationship = **diamond** (identifying = double diamond), cardinality 1/N/M on the arms, total participation = double line.
5. **Mapping (2):** **1:1** and **1:N** — no new relation; put the "one" side's primary key as a foreign key in the other / in the "many" side. **M:N** — no single foreign key can hold the other side's list, so create a junction relation `Enrolls(student_id, course_code)` with an FK to each side.
6. **Constraints and triggers (1):** constraints are declared rules (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT) protecting **entity integrity** (PK never NULL) and **referential integrity** (FK matches an existing key); triggers are stored logic the DBMS runs automatically on an INSERT/UPDATE/DELETE event, before or after.

## Night-before one-liners

Database system = DB + DBMS + apps + users + hardware · schema is the blueprint, instance is the data now · ANSI/SPARC: external, conceptual, internal · data independence has exactly **two** kinds, logical and physical · adding an index is **physical**, adding a column is **logical** · Chen: rectangle entity, ellipse attribute, diamond relationship, underlined key · a weak entity set is a **double rectangle**, its identifying relationship a double diamond, a derived attribute a dashed ellipse · 1:1 and 1:N need no extra table; **only M:N forces a junction relation** · for 1:N the FK goes on the **N side** · degree = columns, cardinality = rows · a relation is a set of tuples: no duplicates, no order · superkey ⊇ candidate key ⊇ primary key · a table has exactly one primary key but many candidate keys · FK ⇒ referential integrity, PK ⇒ entity integrity · `DROP` kills structure, `DELETE` and `TRUNCATE` only empty it · a trigger is event-driven stored logic, not a stored procedure · the E-R model designs, the relational model implements.