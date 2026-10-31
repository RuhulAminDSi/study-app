# Analysis, Modeling, Design & Architecture: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/17-software-engineering-information-system-design/se-analysis-design.en.html` (handwritten-style PDF: `notes/pdf/17-software-engineering-information-system-design/se-analysis-design.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Software Engineering and Information System Design):** "Analysis Concepts and principles: requirement analysis, **Analysis modeling**, **data modeling**. **Design concepts and principles**, **Architectural design**, User Interface design." Use cases, the Unified Process and the full UML-by-type treatment are in the Use Cases / OO Design notes; GRASP patterns are in the GRASP notes.

**High-yield:** ① analysis = **what**, design = **how** ② context diagram = **one process**, no store ③ DFD **balancing**: a child's in-flow/out-flow must equal the parent's ④ **functional cohesion** is best, **coincidental** is worst ⑤ **data coupling** is loosest, **content coupling** is worst ⑥ **M : N → a new relation** carrying both keys as FKs (same for a multivalued attribute and an n-ary relationship) ⑦ **TELOS** feasibility; the report ends in a **go / no-go** ⑧ weak entity key = **owner key + partial key** ⑨ **double line = total participation** (not cardinality) ⑩ **Parnas, 1972** — information hiding; modularity is the goal, information hiding the technique ⑪ conceptual → logical → physical; the **conceptual model has no attributes and no keys** ⑫ strict layering calls the layer **below** only.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Analysis: the "what" before the "how" … p. 2 · 2. Functional vs non-functional; SRS … p. 2 · 3. Elicitation: four techniques … p. 3 · 4. Feasibility TELOS & validation … p. 3 · 5. DFD: elements, context, balancing … p. 4 · 6. Data dictionary + library DFD … p. 5 · 7. ER: entities, attrs, relations … p. 6 · 8. Library ERD → relational schema … p. 7 · 9. Cohesion, coupling, principles … p. 8 · 10. Design types, architecture, UI … p. 9–10 · 11. Night-before sheet … p. 11 · 12. Practice MCQs + written … p. 12.

---

## 1. The Topic on One Page (cover)

*(Doodle: a yellow ellipse in the centre reading "ANALYSIS + DESIGN" with eight spokes out to eight rounded boxes — six principles, Feasibility TELOS ★, Elicitation × 4, DFD + dictionary ★, ER model + mapping ★, Cohesion · coupling, Design principles ★, Layered · MVC · UI. Red = high-yield, green = applied.)*

The whole topic in one line: **requirements → model → design → code**, with **validation** sending work backwards at every step.

**Cover high-yield list**

1. analysis = **what**, design = **how**
2. context diagram = **one process**
3. the **DFD balancing** rule
4. **functional cohesion** is best
5. **data coupling** best, **content coupling** worst
6. **M : N → a new relation, two FKs**

**Contents of the twelve sheets**

| Sheet | What is on it |
|---|---|
| p. 1 | cover: mind map, high-yield list, syllabus line, legend |
| p. 2 | §1 analysis principles · §2 functional vs non-functional · §3 the SRS |
| p. 3 | §4 elicitation: four techniques · §5 feasibility TELOS & validation |
| p. 4 | §6 the analysis model and the DFD · §7 level 0, the context diagram |
| p. 5 | §8 the data dictionary · Case A drawn as a DFD |
| p. 6 | §9 ER modelling: entities, attributes, relationships |
| p. 7 | §10 Case B: the ERD · §11 ER → relational mapping, seven rules |
| p. 8 | §12 design principles · §13 cohesion and coupling |
| p. 9 | §14 three levels of design · §15 the architectural design process |
| p. 10 | §16 architectural styles · §17 UI design |
| p. 11 | night-before sheet |
| p. 12 | practice MCQs, written question, checklist |

## 2. Analysis: the "What" Before the "How"

**Software analysis** = **understanding and specifying what the software must do**, before design and implementation. It studies the problem and the **information domain**, never the solution. Analysis answers **WHAT**, design answers **HOW**, implementation is the doing.

| Principle | What it demands |
|---|---|
| **Correctness** | every real need captured |
| **Consistency** | no two requirements clash |
| **Completeness** | functional **and** non-functional |
| **Feasibility** | achievable within the limits |
| **Traceability** | traced back to source and forward to test |
| **Understandability** | clear to every reader |

*(Doodle: two boxes side by side — a red "ANALYSIS / what it does" box pointing by a blue arrow to a green "DESIGN / how it is built" box, with a wide yellow bar beneath reading "study the problem and the information domain, not the solution".)*

- 💡 **Trick:** the six principles come in three friendly pairs — **right** (correctness), **no clash** (consistency), **nothing missing** (completeness), then **can we** (feasibility), **can I trace it** (traceability), **can anyone read it** (understandability).
- ⚠️ **Trap:** "requirements analysis" is not the same as "software analysis". Requirements analysis covers the *whole* requirements process — elicitation, analysis, specification, validation. **Analysis** is the middle of that.

### Functional vs Non-Functional Requirements

| | **Functional** | **Non-functional** |
|---|---|---|
| Answers | which **services and behaviours** | how **well** and how **much** |
| Examples | log in, search, issue a book | reply in 2 s; 99.9 % uptime; AES-256 |
| Interested party | the end user, the analyst | the user **and** the organisation |

- 💡 **Memory trick (three levels).** **Business:** "cut overdue returns" → **User:** "staff see a due-date list" → **System:** "the query returns in 2 s". Every vague business wish must be pushed down through all three levels to become testable.
- ⚠️ **Exam trap:** "The system shall be **fast**" is not a requirement — it is unverifiable. Every non-functional need needs a **measurable criterion**.

### What the SRS Must Contain (IEEE 830 / ISO-IEC 29148)

1. **Introduction** — purpose, scope, definitions, overview, references.
2. **Overall description** — perspective, functions, user classes, environment, constraints, assumptions.
3. **Specific requirements** — external interface requirements, functional requirements, performance requirements, design constraints, system attributes.
4. **Appendices** — glossary, index.

## 3. Elicitation, Feasibility (TELOS) and Validation

### Requirements Elicitation: the Four Techniques

| Technique | Strength | Weakness |
|---|---|---|
| **Interview** | deep detail; instant follow-up | slow; costly; interviewer bias |
| **Workshop / JAD** | fast; builds consensus; ownership | needs a skilled facilitator |
| **Questionnaire** | cheap; repeatable; wide coverage | low response; no clarification |
| **Observation** | captures the workflow **used** | slow; users behave differently when watched |

*(Doodle: a four-step chain of blue boxes ELICIT → ANALYSE → SPECIFY → VALIDATE, with a purple return arrow labelled "feedback & rework" running from VALIDATE back to ELICIT. A yellow box under the first two steps lists ① interviews ② JAD workshop ③ questionnaire ④ observation; a green box under the last two reads "out → SRS + models / back → fix the requirements".)*

- 📌 **Requirements engineering is a loop, not a line** — validation sends work back. It is not "gather, then write".

### Feasibility Study: TELOS

| Letter | Question it answers |
|---|---|
| **T**echnical | can it be built at all with the available hardware, software and skills? |
| **E**conomic | cost–benefit: do the benefits exceed the costs? (**payback period**) |
| **L**egal | law, privacy, licensing, contracts, standards |
| **O**perational | will it fit the way the organisation works? |
| **S**chedule | can it be delivered in the time available? |

- 💡 **Memory trick:** say it as a word — **T-E-L-O-S**, Greek *telos* = the goal. The report ends in a **go / no-go** call.
- ⚠️ **Exam trap:** feasibility is judged **before** the SRS and again when the model is built — it is **not** the last step.

**Validation** = proving the model and the specification are right. Methods: reviews and inspections, prototypes, acceptance-test cases, model walkthrough, decision tables. It checks **correctness, completeness, consistency, realism, verifiability**.

✍ **Worked judgement.** A hospital wants online appointments.
**T**: a server and a biometric device must be bought. **E**: six staff-years saved; licences cost three; payback five years? **L**: patient data must stay inside the country. **O**: counter staff will not re-key everything. **S**: go live before the quarter closes?
**Only T, L and O clear — the project waits.**

## 4. The Analysis Model and the DFD

An **analysis model** is an **abstract representation of the system** built from the requirements.

- **DFD = what happens** (functions and flows)
- **ERD = what exists** (data structure)

They are **complements, never rivals**. A DFD is drawn on the *what happens* side; an ERD on the *what exists* side.

| Element | Symbol | Meaning |
|---|---|---|
| **External entity** | square | a source or sink outside the system |
| **Process** | circle | turns input data into output data; numbered 1.0, 2.0 … |
| **Data store** | two parallel lines | related data at rest, inside the system |
| **Data flow** | arrow | a **named data element** moving between elements |

*(Doodle: a red rounded box "1.0 Issue & Return" at the top with a red in-flow arrow entering from the left and a green out-flow arrow leaving to the right; below it a wide yellow frame "level-2 DFD of 1.0" holding two blue boxes, 2.1 Check stock and 2.2 Write loan. Caption: "balanced: the child's in-flow = the parent's and its out-flow = the parent's".)*

### Level 0: the Context Diagram

**Level 0 = the context diagram** — the **whole system as one process**, joined to its external entities by the flows that cross the system boundary. **No store, no internal process** — level 1 adds those.

*(Doodle: a MEMBER square on the left and a LIBRARIAN square on the right, one large yellow circle in the centre labelled "0 / Library System", and four numbered arrows: ① borrow / search request (red, in), ② book + due date (green, out), ③ loan & fine report (green, in), ④ new book record (red, out). Caption: "frequently tested: one bubble = the entire system".)*

- ⚠️ **Exam trap:** the context diagram shows neither the database tables (that is the ERD), nor the internal processes (level 1), nor timed messages.

| | |
|---|---|
| **Levels & decomposition** | Context (0) → level 1 = one bubble per major function → level 2, 3 … Numbering: 1.0, 2.0, then 2.1, 2.2. Complexity is handled by **divide and conquer**. |
| **Rules (DFD)** | No store → store, no store → entity, no entity → store. Every process needs **≥ 1 input and ≥ 1 output** (a **grey hole** = inputs but no output, a **black hole** = output but no input — both are errors). Flows are **logical** and **named**. |

- 📌 **Balancing, in words:** decomposing a process into a lower level must leave the flows at the boundary of that process **exactly the same**. The child's in-flow = the parent's in-flow; the child's out-flow = the parent's out-flow.

## 5. The Data Dictionary — and Case A as a DFD

The **data dictionary** is the **specification of every data flow, data store and data element** in the DFD. Each entry has four parts:

> **name = composition / definition / where used / comment**

An entry that cannot be written down is a requirement that is still fuzzy.

| Symbol | Means |
|---|---|
| `x = a + b` | x is **composed of** a and b |
| `x = [a \| b]` | selection — a **or** b |
| `x = {a}` | iteration — **zero or more** (`1{a}n` sets bounds) |
| `x = (a)` | optional — **zero or one** |
| `@x` | x is the key that identifies the entry |
| `* text *` | comment / alias |

✍ **Entries for Case A.**

```
Loan    = loan_id + member_id + accession_no +
          issue_date + due_date + (return_date)
Member  = member_id + name + phone + membership_type
Book    = accession_no + isbn + title + author
```

### Case A — the same library system, drawn as a DFD

*(Doodle: level 1 — an external box MEMBER at the far left, three blue process circles across the top numbered 1.0 Register, 2.0 Search and 3.0 Loan; two double-line data stores below them, D1 Members and D2 Books; an external box LIBRARIAN at the lower right. Caption: "three processes, two stores, two external entities".)*

- **1.0 Register**: member data → D1 Members.
- **2.0 Search**: catalogue query → book list; reads D2.
- **3.0 Loan**: issue / return → checks D2, writes D1, returns book + due date.
- **Librarian**: maintains D2, receives the overdue report.

**Balanced against the context diagram of the previous sheet**: every flow entering the system there is consumed by a process here, and every flow leaving there is produced here.

- ⚠️ **Exam trap:** a DFD shows **logical** flow, so a "book file" is not `C:\library\books.txt`. If the question asks for the database design, draw the **ERD**.

## 6. Entity–Relationship Modelling

The **ER model** (Chen, **1976**) is a **conceptual data model**: it pictures the real world as **entities**, the **attributes** they carry and the **relationships** between them, with no reference to any DBMS, table or file.

- 💡 **Trap in a box:** the ER model is *conceptual*, so it may not name tables, columns, types or file names. If your ERD contains `INT` and `VARCHAR`, it is a logical design, not an ERD.

| | |
|---|---|
| **Entity** | a real-world object or event that can be distinctly identified. A **strong** entity owns its key; a **weak** entity (double rectangle, partial key) has none of its own and is identified only through its **owner**. |
| **Attributes** | **simple / composite** (name = first + last) · **single / multivalued** (several phone numbers) · **derived** (age from date of birth) · **key** (underlined, minimal). |
| **Relationships** | an association among entities. **Degree** = how many entity types take part: unary (1), binary (2), ternary (3). Unary is also **recursive** — Employee *manages* Employee. |

*(Doodle 1: a blue rectangle BOOK with attribute ellipses Title, Accession (underlined = key), Author; above, a composite ellipse Keywords split into First and Last; a dashed ellipse Available; a double ellipse and the legend "double ellipse = multivalued · dashed = derived · red = key".)*

*(Doodle 2: three mini-diagrams side by side — A ⟡ has B (1 : 1); A ⟡ has two Bs (1 : N); A buys B with the far line doubled (M : N), captioned "cardinality (how many at most) and participation (must it join?)" with "total participation = double line" and "partial participation = single line".)*

| Cardinality | Library example |
|---|---|
| **1 : 1** | one member ↔ one card |
| **1 : N** | one member → many loans |
| **M : N** | members ↔ books, over time |
| **Total participation** | every instance **must** join |
| **Partial participation** | an entity **may** stay out |

- ⚠️ **Exam trap:** cardinality and participation are **different questions**: "how many at most?" vs "must it take part?". **1 : N does not make the N side mandatory.**

## 7. Case B — the ER Diagram, Then the Relational Schema

*(Doodle: Chen notation — MEMBER rectangle —1— `issues` diamond —0..*— LOAN (double rectangle) —0..*— `on loan` diamond —1— BOOK rectangle. Caption: "LOAN is weak: key = Member_id + Accession_no".)*

A **MEMBER** issues 0..* **LOAN**s and a **BOOK** appears in 0..* **LOAN**s; LOAN joins both totally, so it cannot exist without both. It carries Issue_date, Due_date and Return_date. When the same two entities meet again **later in time** — loans, orders, enrolments — you need a **third relation holding the event**.

- ⚠️ **Exam trap:** MEMBER–LOAN is **not** a plain 1:N on one line: the pair (member, book) repeats over time, so it is **M : N**, resolved by making LOAN the **associative entity**.

### ER → Relational Mapping: the Seven Rules

| # | Source construct | Relation produced |
|---|---|---|
| 1 | **Strong entity** | same attributes; its key = **primary key** |
| 2 | **Weak entity** | owner key as FK; PK = owner key + partial key |
| 3 | **1 : 1 relationship** | key of the "one" side carried as FK in the relation on the other side |
| 4 | **1 : N relationship** | key of the **one** side as FK in the **many** side |
| 5 | **M : N relationship** | **new relation**: the two keys as FKs; the pair is the PK |
| 6 | **Multivalued attribute** | **new relation**: entity key + attribute = the PK |
| 7 | **N-ary relationship** | **new relation**: all participants' keys = the PK |

✍ **Case B applied.**

```
MEMBER(member_id, name, phone)
BOOK(accession_no, isbn, title)
LOAN(member_id, accession_no, issue_date, due_date, return_date)
AUTHOR_BOOK(isbn, author_name)
```

Rule 2 gives the LOAN key; rule 6 splits a multi-author title.

| Data model | Answers |
|---|---|
| **Conceptual** | which entities and relationships exist — the ERD |
| **Logical** | attributes, domains, keys; mapped to the relational model |
| **Physical** | tables, columns, data types, indexes — DBMS-specific |

- ⚠️ **Exam trap:** **Conceptual → logical → physical**. The conceptual model has **no attributes and no keys** — those arrive in the logical model.

## 8. Design Principles, Cohesion and Coupling

**Design** turns the requirements into a **blueprint** the implementer can build from.

| Principle | In practice |
|---|---|
| **Abstraction** | describe **what** a unit does, hide **how** |
| **Modularity** | split into separately testable **modules** |
| **Information hiding ★** | (**Parnas, 1972**) hide what is **likely to change** |
| **Separation of concerns** | one module, one concern |
| **Refinement** | top-down, step by step, down to code |
| **Reuse** | reuse an existing design or component |

- 📌 **Why it pays:** modules are understood, unit-tested, reused and changed independently; a fix stays inside one module.
- ⚠️ **Exam trap:** **abstraction ≠ encapsulation.** Abstraction decides *what* to expose; encapsulation bundles data with its operations. **Modularity is the goal, information hiding is the technique.**

### Functional Independence: Cohesion & Coupling

**Cohesion** = how strongly the **elements inside one module** belong together for one purpose. **Higher is better.**

| # | Type | Ask |
|---|---|---|
| **1** | **Functional** ★ | one clear job? |
| 2 | Sequential | output → input? |
| 3 | Communicational | same data in and out? |
| 4 | Procedural | fixed order? |
| 5 | Temporal | run together only |
| 6 | Logical | any one of them chosen? |
| **7** | **Coincidental** | same file only |

**Coupling** = how strongly one module **depends on** another. **Lower is better.**

| # | Type | Shares |
|---|---|---|
| **1** | **Data** ★ | simple parameters |
| 2 | Stamp | a whole structure |
| 3 | Control | a control flag |
| 4 | External | an interface |
| 5 | Common | a global area |
| **6** | **Content** | the other module's internal data |

*(Doodle: two panels side by side — "COHESION ↓" listing functional (green), sequential, communicational, procedural, temporal, logical, coincidental (red); and "COUPLING ↓" listing data (green), stamp, control, external, common, content (red). Caption: "both lists are examined directly — learn them in this order".)*

- 💡 **Trick:** "**High inside, low outside.**" Cohesion is an *internal* property — a module's parts should agree; coupling is an *external* property — modules should not need each other. "Functional" answers a single question; "coincidental" answers "they happen to be in the same file" — that is not cohesion at all.
- ⚠️ **Trap:** the two orders are **opposite in direction**: cohesion is listed best → worst with **1 at the top**; coupling is listed best → worst the same way. Getting the two "worst" ends confused (couincidental vs content) is the commonest error on this topic.
- 📌 **Common misconception:** "low coupling = no coupling". Zero coupling is not the goal either — it is that modules communicate through **simple, explicit data** (parameters), never by reaching into each other's internals.

## 9. Three Levels of Design and the Design Process

*(Doodle: three red boxes in a row — 1 Architectural → 2 High-level → 3 Detailed — with a green box 4 Code underneath and a green arrow curving back from Detailed down to Code, captioned "refinement, top-down".)*

| Level | Decides |
|---|---|
| **1 Architectural** | the system structure: components, their relationships and constraints; the data architecture and the interfaces |
| **2 High-level (modular)** | modules → submodules; which data structures and abstract data types each module owns |
| **3 Detailed** | the exact algorithm, the nesting of records, language-level data structures |

### The Architectural Design Process

1. **Address the design** — which functions must the design model perform?
2. **Design the data** — the domain model becomes the **design class diagram** (DCD).
3. **Assign functions to components** — map each class onto a component or subsystem.
4. **Refine the design classes** — attributes, operations, associations and **navigability**.
5. **Define the design sequence** — the **order in which classes are implemented and unit-tested**.

*(Doodle: four UML-style class boxes — Member (`- id : int`, `+ borrow(b)`), Loan (`- issue : Date`), Book (`- accession : String`, `+ issueTo(m)`), Fine (`- amount : double`) — joined by green navigability arrows with multiplicities 1, 0..*, 1, 0..1. Caption: "case C: domain classes → design classes".)*

- The **domain model** (data only) gains **operations**, **navigability arrows** and packages.
- **Case C**: Member 1 → 0..* Loan, Book 1 → 0..* Loan, Loan 1 → 0..1 Fine.
- Design sequence: **Book** and **Member** first (they carry the data), then **Loan**, then **Fine**; unit-test each with its collaborators.
- **Information Expert, Creator, Low Coupling–High Cohesion** are the GRASP patterns that do exactly this job.
- ⚠️ **Exam trap:** the **DCD is not** the domain model: it is implementation-aware, while the domain model holds only classes, attributes and associations.

## 10. Architectural Styles and UI Design

| Style | How the components talk | Example |
|---|---|---|
| **Layered** | serves the layer above, uses the one below | UI → business → data |
| **Pipe-and-filter** | a stream through a chain of filters | Unix shell: `cat f \| grep x` |
| **Client–server** | a client requests services | browser and web server |
| **Repository** | components read/write one store | shared database |
| **Event-driven** | components announce events | GUI listeners, queues |
| **Broker** | a broker matches request and service | service lookup, CORBA bus |
| **MVC** | Model data, View render, Controller events | web frameworks, desktop apps |
| **Microservices** | one service per business capability | a separate payment service |

*(Doodle: the library system as a strict three-layer stack — Presentation layer (web page, mobile screen, CLI) → Business layer (member · catalogue · loan · fine) → Data-access layer (repositories → SQL database), with the note "strict layering: a layer calls only the one below".)*

✍ **Why layered wins.** Move the database from MySQL to PostgreSQL and only the data-access layer changes; restyle the UI and only the top layer changes. Each layer is unit-tested alone. The price is a copy of the data object at every boundary.

- 💡 **Memory trick (MVC):** **M**odel = what is true · **V**iew = what it looks like · **C**ontroller = what the user just did.
- 💡 **Memory trick (layering):** "**Layers call downward only.**" A request travels down, a response travels up — but the *call* dependency never goes up. Strict layering forbids skipping and forbids calling upward.

### UI Design: Principles for a Usable Interface

| Principle | Meaning |
|---|---|
| **Visibility of system status** | show what is happening |
| **Match the real world** | the user's language, their units |
| **User control and freedom** | undo, cancel, a clear exit |
| **Consistency and standards** | one look, one meaning |
| **Error prevention** | constrain, confirm, offer a default |
| **Recognition over recall** | show the options instead of making the user remember |
| **Accessibility** | usable by elderly and disabled users |

**Goal:** intuitive, efficient, pleasant use. Three **golden rules**: **place the user in control**, **reduce the user's memory load**, **make the system consistent**.

- ⚠️ **Exam trap:** **usability ≠ learnability.** A system can be learnable and still not usable; a novice-friendly system can be unusable for an expert doing the same job all day.

## 11. Night-Before-the-Exam Sheet

### Fact sheet

| | |
|---|---|
| Analysis = **what** · design = **how** | 6 principles: correct, consistent, complete, feasible, traceable, understandable |
| Elicitation: interview, JAD, survey, observe | TELOS = T, E, L, O, S feasibility |
| DFD: entity, process, store, flow | Level 0 = context = **1 process**, no store |
| Balancing: child's flows = parent's flows | Levels: 1.0, 2.0 → 2.1, 2.2 … |
| Cohesion: functional → coincidental | Coupling: data → content |
| ER: entity, attribute, relationship | Degree = number of participants |
| Double line = total participation | M:N, multivalued, n-ary → new relation |
| Conceptual → logical → physical | Design: architectural → high → detailed |
| Layered, MVC, client–server, events | Information hiding: Parnas, 1972 |

### Twelve one-liners

1. Context diagram = one process
2. A DFD never links store → store
3. Every process needs an input **and** an output
4. Functional cohesion is best
5. Data coupling is the loosest
6. Content coupling is the worst
7. M : N becomes a junction relation
8. Weak key = owner key + partial key
9. Double line = total participation
10. The conceptual model has no attributes
11. Information hiding: Parnas, 1972
12. Microservices deploy independently

*(Doodle: three blue circles WHAT — MODEL → HOW, with a purple return arrow from HOW back to WHAT captioned "validation sends work back to the model".)*

**Top traps.** "what" and "how" swapped · a context diagram drawn with data stores · a flow read as physical storage · cohesion and coupling ranks reversed · an M : N left as two columns · total participation read as cardinality · attributes given to the conceptual model.

**All tricks together.** context = one bubble · balance in against out · number every process · the flow must carry a name · weak = double box + dashed diamond · underlining = key, double ellipse = many, dashed = derived · strict layering calls downward only · control, memory load, consistency.

**Also practise (written).** ① Context + level-1 DFD for a hospital, with balancing · ② a data dictionary for six flows · ③ ER → relations for a bank with M : N accounts.

**Where the neighbours live.** Use cases, the Unified Process and the UML by type sit with the Use Cases / OO Design notes; GRASP patterns sit with the GRASP notes.

## 12. Practice MCQs, Written Question and Checklist

1. **Loosest coupling is:** (a) Data coupling (b) Content (c) Common (d) Control
2. **Strongest cohesion is:** (a) Coincidental (b) Functional (c) Temporal (d) Logical
3. **Level 0 DFD shows:** (a) Processes (b) The tables (c) Messages (d) One process
4. **Not allowed in a DFD:** (a) Proc → store (b) Proc → entity (c) Store → store (d) Entity → proc
5. **Weak entity key is:** (a) Partial key (b) Owner + partial (c) Surrogate key (d) Owner key only
6. **M : N maps to:** (a) A new relation (b) Nothing (c) A new column (d) A procedure
7. **Double line means:** (a) Partial participation (b) Identifying relationship (c) Total participation (d) Multivalued
8. **Multivalued maps to:** (a) An array (b) Two columns (c) A derived attribute (d) A relation
9. **UI / business / data is which style?** (a) Layered (b) Repository (c) Broker (d) Pipe-and-filter
10. **"Can it be built at all?" is which letter of TELOS?** (a) Legal (b) Economic (c) Schedule (d) Technical

**Answer key:** 1-a · 2-b · 3-d · 4-c · 5-b · 6-a · 7-c · 8-d · 9-a · 10-d

### Written question (10 marks)

> **What are cohesion and coupling? Why should a good design have high cohesion and low coupling? List the types of each from best to worst.**

*(Doodle: two boxes "Module A" and "Module B" at the top, both with red arrows pointing down into a single red box labelled "shared", captioned "coupling — remove it".)*

**Model answer:**

1. **Definitions (3)** — **Cohesion** = how much one module's elements belong together for one purpose; **coupling** = how much modules depend on each other. Cohesion is measured **inside** a module, coupling **between** modules.
2. **Why it matters (2)** — a good design keeps modules **easy to understand, test, reuse and change**: a change in one hardly affects the others. High cohesion means a module does one thing, so a defect is local and a unit test can cover it.
3. **Cohesion, best → worst (2)** — **functional, sequential, communicational, procedural, temporal, logical, coincidental**.
4. **Coupling, best → worst (3)** — **data, stamp, control, external, common, content**.

**Before the exam ✓**

- Can state the six principles of analysis
- Can name the four elicitation techniques
- Can draw a context diagram and a balanced DFD
- Can draw an ER diagram and map it to relations
- Can recite both the cohesion and the coupling ranks
- Can name the three levels of design