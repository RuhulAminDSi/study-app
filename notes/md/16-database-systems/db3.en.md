# Functional Dependencies & Normalization (1NF–BCNF)

**DBMS · Functional Dependencies** · Govt IT Recruitment: Revision Notebook · Revision Notes

*FD notation · attribute closure · 1NF → 2NF → 3NF → BCNF · lossless decomposition: exam-ready in 11 sheets*

---

## Sheet 1 — Cover

### High-yield list

1. `A → B`: same A ⇒ same B
2. Trivial: Y ⊆ X · non-trivial: Y ⊄ X
3. Closure X⁺ = everything derivable from X
4. Superkey = any key; candidate = minimal superkey
5. 1NF: atomic values, no repeating group
6. 2NF: no partial dependency
7. 3NF: no transitive dependency
8. **BCNF: every determinant is a candidate key**
9. Lossless ⟺ (R1∩R2)→R1 or (R1∩R2)→R2
10. Normalise for writes, denormalise for reads

### Syllabus coverage

The Database Systems syllabus line in full: **"Normalization — Process of reducing redundancy and improving data consistency. Steps: 1NF → 2NF → 3NF → BCNF."** This lesson takes that clause in full. The algebra and SQL that read these tables were covered in **db2**; the ER and relational models, constraints and triggers, file organisation, indexing and optimisation each have their own place in the chapter.

### Contents

| Sheet | Topic | Page |
|---|---|---|
| 2 | FDs: notation and the five types | 2 |
| 3 | Attribute closure, keys | 3 |
| 4 | 1NF and 2NF | 4 |
| 5 | 3NF and BCNF | 5 |
| 6 | The ladder in one table, highest normal form | 6 |
| 7 | Lossless join, dependency preservation | 7 |
| 8 | Full normalization, step by step | 8 |
| 9 | Anomalies & denormalization | 9 |
| 10 | Night-before sheet | 10 |
| 11 | Practice MCQs + written | 11 |

---

## Sheet 2 — Functional Dependencies: What A → B Really Means

*foundation of all ★*

**Definition.** A relation R satisfies the functional dependency `X → Y` when **every two tuples that agree on X also agree on Y**. X is the **determinant**, Y is the **dependent**; read `A → B` as "A determines B". Example: `StudentID → Name` — knowing the ID settles the name, so two rows sharing an ID can never carry different names. An FD is a statement about what a relation *means*, not about today's rows.

### The five types of FD

| Type | Rule | Example | Note |
|---|---|---|---|
| **Trivial** | Y ⊆ X | `(StudentID, Name) → Name` | always true |
| **Non-trivial** | Y ⊄ X | `StudentID → Name` | the only ones that matter |
| **Full** | Y needs the whole of X | `(StudentID, CourseID) → Grade` | what 2NF insists on |
| **Partial** | Y needs only part of X | `StudentID → StudentName`, key (StudentID, CourseID) | **breaks 2NF** |
| **Transitive** | A→B and B→C give A→C | `StudentID → DeptID → DeptName` | **breaks 3NF** |

**Memory trick.** "An arrow is a promise, not a coincidence." If `A → B`, the database must *never* hold two rows with the same A and different B — that is why `StudentID` is a key candidate, and why "same student, two names" is a **design error**.

**Exam traps.** (1) `(A, B) → A` is trivial and true in every relation — no information at all. (2) The arrow is **one-way**: `StudentID → Name` never licenses `Name → StudentID`, because two students may share a name.

### Normalization

**Normalization** is the process of **reducing redundancy** and **improving data consistency** by decomposing a badly designed relation into smaller ones, each obeying a **normal form**. The ladder is cumulative: **1NF → 2NF → 3NF → BCNF**, each rung adding one condition to the rung below.

```
        BCNF   ← every determinant is a candidate key  (strictest)
          ↑
        3NF    ← + no transitive dependency
          ↑
        2NF    ← + no partial dependency
          ↑
        1NF    ← atomic values
```

A relation in BCNF stores each fact in **exactly one place**, which removes the three **anomalies** — update, insert and delete. The price is extra joins at read time.

---

## Sheet 3 — Attribute Closure, Candidate Keys and Superkeys

*where the marks are ★*

**Attribute closure X⁺** is the set of every attribute derivable from X using F repeatedly. **X is a key of R iff X⁺ = R.**

```
X⁺ = X
repeat:
  for every FD  P → Q  in F:
      if  P ⊆ X⁺ :  X⁺ ← X⁺ ∪ Q
until  X⁺ stops growing
```

### Worked example 1 ✍ the classic closure

`R(A, B, C, D, E)` with `F = {A→B, BC→D, D→E}`. Compute {A, C}⁺:

| Step | Set | Why |
|---|---|---|
| start | {A, C} | given |
| 1 | {A, B, C} | `A→B` applies (A is in) |
| 2 | {A, B, C, D} | `BC→D` applies (B and C are in) |
| 3 | {A, B, C, D, E} | `D→E` applies |
| stop | = R | every FD in F fires — nothing new |

So **{A,C}⁺ = {A,B,C,D,E}** and **AC is a key** of R.

### Superkey · candidate key · prime attribute

- A **superkey** is any attribute set whose closure is all of R — AB is one above, since {A,B}⁺ = {A,B,C,D,E}.
- A **candidate key** is a **minimal** superkey: no proper subset still closes R.
- An attribute is **prime** if it belongs to *some* candidate key.

### Worked example 2 ✍ the superkey trap

`R(A, B, C, D)` with `F = {A→B, B→C, C→D}`.

- **A⁺:** A → {A,B} → {A,B,C} → {A,B,C,D} = R, so A is a superkey; being a **single attribute** it is minimal, so **A is the candidate key**.
- A appears on **no right-hand side** of any FD, so every key of R must contain A.
- **AB is a superkey but not minimal** (drop B and A alone still closes R), so AB is **not** a candidate key.
- **B⁺ = {B, C, D}** — A can never be reached from B, so B is not a key at all.

**Exam trap ✍ minimal is the whole question.** "Which is the candidate key?" is *not* "which set determines all attributes?" — that is the superkey, and there is usually more than one. Always test **minimality** second. R(A,B,C,D) above has superkeys AB, AC, AD, ABC, ABD, ACD, ABCD — and exactly **one** candidate key, A.

**Memory trick.** "Super is a superset; candidate is the smallest one inside it." And "**prime = in some key**", not "in *every* key" — in R(A,B,C) with key A, only A is prime even though A is the sole key. Prime/non-prime is the exact test that separates 3NF from BCNF.

---

## Sheet 4 — First and Second Normal Form

*the two easy rungs ★*

**1NF.** Every attribute holds a single **atomic value**. No repeating groups, no lists or arrays inside a cell.

| Before 1NF | StudentID | Courses |
|---|---|---|
| | 101 | **CSE101, MAT201** ← not atomic |

| After 1NF | StudentID | Course |
|---|---|---|
| | 101 | CSE101 |
| | 101 | MAT201 |

**Exam trap.** The comma-separated list breaks **three** rules at once: it is not atomic, it is a repeating group, and it hides a second fact per row. The fix costs **one extra row** and nothing else.

**2NF.** R is in 2NF iff it is in **1NF** and **no non-prime attribute depends on only part of a composite candidate key**. Partial dependency is impossible when the key is a single attribute, so 2NF only ever bites on **composite-key tables**.

### Worked example ✍ before 2NF

Key is the composite **(StudentID, CourseID)**.

```
(StudentID, CourseID) → StudentName, Instructor, Grade
```

**Problems:** StudentName depends on StudentID **alone** (partial); Instructor depends on CourseID **alone** (partial). Only `→ Grade` needs the whole key, so only it stays behind.

| Student | |
|---|---|
| **StudentID** | PK |
| StudentName | |

| Course | |
|---|---|
| **CourseID** | PK |
| Instructor | |

| Enrollment | |
|---|---|
| **StudentID** | PK, FK |
| **CourseID** | PK, FK |
| Grade | |

**Exam trap ✍ two.** (1) A partial dependency is defined against a **composite key**; for a single-attribute key, 2NF is **automatically** satisfied and the real question is 3NF. (2) The split must be **lossless**: here R1 ∩ R2 = {StudentID}, and StudentID → Student (the whole of R1), so joining the three tables reproduces the original rows exactly.

**Memory trick.** "**Split by the arrow, not by the column.**" 1NF splits by *value* (one fact per cell); 2NF splits by *dependency* (one fact per table).

---

## Sheet 5 — Third and Boyce–Codd Normal Form

*the tested pair ★*

**3NF.** R is in 3NF iff it is in **2NF** and no non-prime attribute depends **transitively** on the key: for every FD `X → A` with A non-prime, X must be a superkey.

### Worked example ✍ the genuine 3NF violation

**Before** — `Student(StudentID, Name, DeptID, DeptName)`, key **StudentID**:

```
StudentID → Name, DeptID     and then     DeptID → DeptName
          ⇒  StudentID → DeptID → DeptName
```

DeptID is **not** part of the key, yet DeptName hangs off it: a transitive dependency on a non-key attribute.

**After** — `Student(StudentID, Name, DeptID·FK)` plus `Department(DeptID, DeptName)`. DeptName is now stored once per department, no matter how many students sit in it.

**BCNF.** R is in BCNF iff for **every** non-trivial FD `X → Y`, X is a **superkey**. In the shortest exam phrasing: **every determinant must be a candidate key**. It is strictly stronger than 3NF — 3NF only demands this when the dependent is *non-prime*.

### Worked example ✍ a BCNF violation that 3NF cannot remove

`R(CourseID, Semester, Instructor)` with `(CourseID, Semester) → Instructor` and `Instructor → CourseID`. Instructor is a prime attribute, yet the relation is **still only 2NF**, because the determinant `Instructor` is not a superkey. Neither **CourseID** alone nor **Semester** alone closes the relation, so the determinant (CourseID, Semester) is not a superkey either.

**BCNF solution:** split — `Instructor(CourseID, Instructor)` keyed by Instructor, and `Offering(CourseID, Semester)`.

**Exam traps ✍ three.** (1) 3NF says "every *non-prime* attribute depends on the key"; BCNF says "every *determinant* is a key". (2) The single-attribute key case has no partial dependency at all, so it can be in 2NF while still failing 3NF. (3) **BCNF is not the top of the ladder**: a 4NF exists for multi-valued dependencies.

**Memory trick.** "1NF one value, 2NF whole key, 3NF no detour, BCNF key on every arrow."

---

## Sheet 6 — The Ladder in One Table, and How Far Up It Goes

*memorise the table ★*

| Normal form | Requirement | In plain words |
|---|---|---|
| **1NF** | atomic values, no repeating groups | one fact per cell |
| **2NF** | 1NF + **no partial dependency** | nothing hangs off half a composite key |
| **3NF** | 2NF + **no transitive dependency** | nothing hangs off a non-key attribute |
| **BCNF** | 3NF + **every determinant is a candidate key** | every arrow starts at a key |

### Worked example ✍ "the highest normal form"

`R(A, B, C)` with `F = {A→B, B→C}`, and A its only candidate key.

1. **Keys.** A appears on no right-hand side, so every key contains A. A⁺ = {A, B, C} = R, and A is one attribute, so A is the **sole candidate key** and the only **prime** attribute.
2. **2NF?** The key is a **single** attribute, so no partial dependency can exist. **R is in 2NF.**
3. **3NF?** `A→B→C` is transitive: in `B→C`, B is not a superkey and C is not prime. So R **violates 3NF**, and BCNF too.

**Answer: 2NF.** **Decompose:** `R1(A, B)` and `R2(B, C)`.

### Worked example ✍ composite key

`R(StudentID, CourseID, Grade, StudentName)`, key **(StudentID, CourseID)**. Here `StudentID → StudentName` is **partial**. The ladder stops at step 2: the relation is **only 1NF**. Split into `Student(StudentID, StudentName)` and `Enrollment(StudentID, CourseID, Grade)`.

### How to answer any "highest normal form" question

Four moves, in order: **1.** find the candidate keys (closures + minimality); **2.** list the prime attributes; **3.** if the key is composite, look for **partial** dependencies — if any, stop at 1NF; **4.** otherwise look for a **transitive** dependency on a non-key attribute — if any, stop at 2NF; if none but some determinant is not a key, stop at 3NF; otherwise **BCNF**.

**Memory trick.** "Atomic, All-key, Away-from-key, BCNF." **Exam trap.** Students often answer "3NF" whenever a transitive dependency exists, forgetting that 3NF only forbids a transitive dependency whose destination is non-prime.

---

## Sheet 7 — Decomposition: Lossless Join and Dependency Preservation

*prove it or it failed ★*

A split is a legitimate normalisation only if it is **lossless** (no information invented or destroyed) and **dependency-preserving** (the FDs can still be checked without joining).

### The lossless-join rule

For R → R1, R2 the join is **lossless** iff

```
(R1 ∩ R2) → R1        or        (R1 ∩ R2) → R2
```

The attributes the two pieces **share** must be a key of at least one of them. If the shared attribute decides one whole side, every original tuple has a definite partner and nothing is fabricated or lost.

### Dependency preservation

The decomposition is **dependency-preserving** iff the union of the projections of F onto R1 and onto R2 is exactly F — in practice, iff **every FD in F lives entirely inside one piece** and can be enforced on that table alone, with no join.

### Worked example ✍ the standard two-part answer

`R(A, B, C)` with `F = {A→B}`, decomposed into `R1(A, B)` and `R2(A, C)`.

- **Lossless?** `R1 ∩ R2 = {A}`, and `A→B` means `A→R1`, so the common attribute A is a key of R1. The first alternative of the rule holds → **lossless**.
- **Preserved?** The only FD in F is `A→B`, and it lies entirely inside R1, so it can be enforced there with no join → **dependency-preserving**.

### Worked example ✍ lossless but not preserving

`R(A, B, C)` with `F = {A→B, B→C}`, decomposed into `R1(A, B)` and `R2(A, C)`.

- **Lossless?** R1 ∩ R2 = {A}, and `A→B` gives `A→R1` → **lossless**.
- **Preserved?** `A→B` sits inside R1, but `B→C` sits in **neither** piece — checking it needs a join → **not dependency-preserving**.

### Exam trap ✍ the lossy counter-example

Take `R(A, B, C)` with F = {A→B} but decompose it wrongly, into `R1(A, C)` and `R2(B, C)`. Now R1 ∩ R2 = {C}, and C determines neither R1 nor R2, so the rule fails: the join is **lossy**. Pairing C = 3 from R1 with C = 3 from R2 produces a row (3, 3) that was never in R. The pieces must be split so the shared attribute is a **key** on one side.

**Memory trick.** "**Lossless asks about the overlap; preservation asks about the arrows.**" Neither test needs the data — **the FDs alone decide it**.

---

## Sheet 8 — The Whole Normalization Example, Step by Step

*the standard written answer ★*

### The original unnormalized table

| StudentID | Name | DeptID | DeptName | CourseID | CourseName | Grade |
|---|---|---|---|---|---|---|
| 101 | Alice | 10 | CSE | C101 | DBMS | A |
| 101 | Alice | 10 | CSE | C102 | Algorithms | B |

**What is wrong with this one table.** It is already in 1NF — every cell holds a single value. But the key is the composite **(StudentID, CourseID)**, and the table repeats three facts: **Alice** is written twice, **10 / CSE** is written twice, and a course name would be written once per student.

**The three anomalies it causes.**

- **Update** — rename Alice and you must edit every row she appears in; miss one and the database holds two names for student 101.
- **Insert** — a new department with no student cannot be recorded, because there is no StudentID to put beside it.
- **Delete** — delete Alice's only enrolment row and you lose her name *and* the fact that department 10 exists.

### Step 1 — 1NF ✍

Already satisfied: each column holds one atomic value and the grade belongs to the pair (student, course), not to the student.

### Step 2 — 2NF ✍

The key (StudentID, CourseID) is composite, and three non-key attributes depend on only **half** of it: `StudentID → Name`, `CourseID → CourseName` and `StudentID → DeptID` are all partial, while `(StudentID, CourseID) → Grade` is full.

### Step 3 — 3NF ✍

The genuine remaining violation is the transitive chain `StudentID → DeptID → DeptName` inside `Student(StudentID, Name, DeptID, DeptName)`: DeptID is **not** part of the key, yet DeptName hangs off it. Moving DeptName out into its own Department table is exactly what removes it.

### The final normalized design

| Student | Name | DeptID |
|---|---|---|
| 101 | Alice | 10 |

| Department | DeptName |
|---|---|
| 10 | CSE |

| Course | CourseName |
|---|---|
| C101 | DBMS |

| Enrollment | Grade |
|---|---|
| 101 | A |

Keys are underlined; DeptID and both IDs of Enrollment are foreign keys into the tables above.

**What it buys.** Grade stays with the pair it describes, a department's name is stored **once**, a course name is stored **once**. Renaming a student is now a **single** row update, a new empty department can be inserted without inventing a student, and deleting an enrolment cannot take a department with it.

**Exam trap.** Was every split lossless? Yes — at each step the shared attribute was a key of one of the pieces: StudentID for the Student split, DeptID for the Department split. No original row is invented or lost.

---

## Sheet 9 — Anomalies, Denormalization and the Trade-off

*the "why" questions ★*

An **anomaly** is a wrong update that becomes possible only because the same fact is stored in several places. There are exactly three kinds.

| Anomaly | What goes wrong |
|---|---|
| **Update** | A fact must be changed in **every** copy or the relation becomes self-contradictory. |
| **Insert** | A perfectly valid fact **cannot be stored** because the key demands a companion fact that does not exist yet. |
| **Delete** | Deleting one row silently removes facts that had nothing to do with it. |

### Benefits of normalisation

1. Less redundancy, so less disk and fewer copies to keep in step.
2. Better integrity — each fact has one home, so a single update is the whole update.
3. Fewer **update, insert and delete anomalies**.
4. **Smaller, more meaningful tables**, so indexes and joins are cheaper to plan.

### Denormalization — the deliberate undo

**Denormalization** is **intentionally** re-introducing redundancy after normalising, so that **reads** get fast. A normalised schema needs a three-table join to print one report row; copying a department name into a fact table turns that join into a single scan. It is a deliberate trade — **write once, read a million times** — and it re-opens all three anomalies.

**Exam trap ✍ the direction question.** "Which is better?" has no answer — it depends on the workload. Normalise for **OLTP**; denormalise for **reporting / data warehousing**. "Denormalization always improves performance" is **false**: it speeds reads and slows every write.

### Where the rest of the chapter lives

The algebra and SQL that read these tables were covered in **db2**; relational and ER models, constraints in **db1**. File organisation, indexes, B+ trees, cost-based optimisation → **db4**. Transactions, ACID, isolation, concurrency, recovery → **db5**.

---

## Sheet 10 — Night-Before-the-Exam Sheet

### Fact sheet

- `X → Y`: same X ⇒ same Y; X = determinant, Y = dependent
- Trivial: Y ⊆ X · Non-trivial: Y ⊄ X
- Partial: on part of X · Transitive: A→B, B→C
- `X⁺` = everything derivable from X; X is a key iff `X⁺ = R`
- Superkey = any key; Candidate key = minimal superkey
- Prime = in some candidate key
- 1NF: atomic values
- 2NF: + no partial dependency
- 3NF: + no transitive dependency
- BCNF: + every determinant is a key
- Anomalies: update, insert, delete
- Lossless ⟺ (R1∩R2)→R1 or (R1∩R2)→R2
- Preserved ⟺ every FD inside one piece
- {A,C}⁺ in R(A,B,C,D,E) = all five
- Key of R(A,B,C,D) with A→B→C→D is A alone
- R(A,B,C), A→B→C, key A ⇒ 2NF only

### Top 12 one-liners for MCQs

1. `A → B`: two rows agreeing on A agree on B
2. Trivial FD: Y ⊆ X — always true, never interesting
3. `X⁺ = R` means X is a key
4. Superkey = any key; candidate = the minimal one
5. Prime attribute = belongs to some candidate key
6. 1NF needs one atomic value per cell
7. 2NF matters only for composite keys
8. 3NF forbids transitives through non-key attributes
9. BCNF: every determinant must be a candidate key
10. Lossless ⟺ (R1∩R2)→R1 or (R1∩R2)→R2
11. Lossless is about the overlap, preservation about the arrows
12. The anomalies are update, insert and delete

### Top traps

Calling a **superkey** the candidate key · forgetting to test **minimality** · answering "3NF" whenever a transitive dependency exists, without checking **primeness** · applying 2NF to a single-attribute key · reading the arrow backwards · omitting the **composite key** in the 2NF "before" table · claiming a decomposition is safe without testing **lossless-join** · confusing lossless with dependency-preserving · treating denormalization as free.

### All tricks together

An arrow is a promise · one value per cell, then one arrow per table · split by the arrow, not by the column · super is a superset, candidate the smallest one inside it · atomic, whole key, no detour, key on every arrow · lossless asks about the overlap, preservation about the arrows · normalise for writes, denormalise for reads.

---

## Sheet 11 — Practice

### MCQs (exam pattern, 10 marks)

**1.** A relation is in First Normal Form (1NF) if:
- (a) Every attribute holds only atomic values
- (b) It has no partial dependencies
- (c) It has no transitive dependencies
- (d) Every determinant is a candidate key

**2.** `R(A, B, C, D)` has `A→B`, `B→C`, `C→D`. The candidate key of R is:
- (a) B
- (b) AB
- (c) A
- (d) CD

**3.** `R(A, B, C, D, E)` has `A→B`, `BC→D`, `D→E`. The closure {A, C}⁺ is:
- (a) {A, B, C}
- (b) {A, B, C, D}
- (c) {A, C, E}
- (d) {A, B, C, D, E}

**4.** `R(A, B, C)` has `A→B`, `B→C`, and A is its only candidate key. The highest normal form is:
- (a) 1NF only
- (b) 2NF
- (c) 3NF
- (d) BCNF

**5.** `R(A, B, C)` with `F = {A→B}` is split into `R1(A, B)` and `R2(A, C)`. Which is correct?
- (a) Lossy but dependency-preserving
- (b) Neither lossless nor preserving
- (c) Lossless but not dependency-preserving
- (d) Lossless and dependency-preserving

**6.** In `Enrollment(StudentID, CourseID, Grade, StudentName, Instructor)` keyed (StudentID, CourseID), which FD is partial?
- (a) StudentID→StudentName
- (b) (StudentID, CourseID)→Grade
- (c) CourseID→Instructor
- (d) All three

**7.** A relation is in BCNF only if:
- (a) It has no transitive dependencies
- (b) Every determinant is a candidate key
- (c) It has no partial dependencies
- (d) Every attribute holds an atomic value

**8.** For R split into R1 and R2, the join is lossless iff:
- (a) R1 ∩ R2 is empty
- (b) R1 and R2 are both in 3NF
- (c) (R1 ∩ R2)→R1 or (R1 ∩ R2)→R2
- (d) Every dependency is preserved

**9.** Denormalization is deliberately used to:
- (a) Remove redundancy and eliminate anomalies
- (b) Speed up read-heavy queries by accepting redundancy
- (c) Enforce foreign-key constraints automatically
- (d) Reduce update anomalies

**10.** In `R(A, B, C)` with `A→B`, `B→C` and A the only candidate key, how many prime attributes are there?
- (a) 1
- (b) 2
- (c) 3
- (d) 0

**Answer key → 1-a · 2-c · 3-d · 4-b · 5-d · 6-a · 7-b · 8-c · 9-b · 10-a**

### Written question (10 marks)

Define a functional dependency and name the five types, distinguishing trivial from non-trivial. For `R(A, B, C, D, E)` with `F = {A→B, BC→D, D→E}`, compute {A, C}⁺ and say whether AC is a candidate key. For `R(A, B, C)` with `A→B, B→C` and A the only candidate key, state the highest normal form and decompose it. Then test the split of that R into `R1(A, B)` and `R2(A, C)` for lossless-join and dependency preservation.

### Model answer

1. **Definitions (2)** — `X → Y` holds when every two tuples agreeing on X also agree on Y; X is the determinant. **Trivial**: Y ⊆ X, e.g. (A, B)→A. **Non-trivial**: Y ⊄ X, e.g. StudentID→Name. **Full**: Y depends on the whole of X. **Partial**: on part of X. **Transitive**: A→B and B→C give A→C.
2. **Closure (2)** — {A, C}; A→B adds B → {A, B, C}; BC→D adds D → {A, B, C, D}; D→E adds E → **{A, B, C, D, E} = R**, so **AC is a candidate key**.
3. **Highest normal form (2)** — A is on no right-hand side and is one attribute, so it is the sole candidate key and the only prime attribute. A single key means no partial dependency, so R is in **2NF**. But A→B→C is transitive, and in B→C the determinant is not a superkey and C is not prime, so 3NF fails: the answer is **2NF**, decomposed to **R1(A, B)** and **R2(B, C)**.
4. **Lossless (2)** — R1 ∩ R2 = {A}, and A→B gives A→R1, so the shared attribute is a key of R1: the join is **lossless**.
5. **Preservation + rules (2)** — the only FD, A→B, lies entirely inside R1, so it holds with no join: **dependency-preserving**. In general lossless ⟺ (R1∩R2)→R1 or (R1∩R2)→R2; preserving ⟺ the projections of F onto R1 and R2 union to F.

### Before the exam ✓

- [ ] Can write a definition and the five FD types
- [ ] Can compute X⁺ and find candidate keys
- [ ] Can separate a superkey from a candidate key
- [ ] Can state the four normal-form rules
- [ ] Can test a decomposition for lossless-join
- [ ] Can name the anomalies and denormalization