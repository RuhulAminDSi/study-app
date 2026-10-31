# Waterfall, Inception, Use Cases & UML: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/17-software-engineering-information-system-design/se-waterfall-uml-oo.en.html` (handwritten-style PDF: `notes/pdf/17-software-engineering-information-system-design/se-waterfall-uml-oo.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Software Engineering and Information System Design):** "…Object Oriented software development and design: Iterative Development and the Unified Process. **Sequential waterfall life cycles, Inception**. **Use case model** for requirement writing, Elaboration using System Sequence Diagram, Domain Model. Visualizing concept classes. **UML diagrams**, Interaction and Collaboration Diagram for designing Software. **Designing Objects with responsibilities**." SDLC phases as a whole sit in *Software Engineering: Concepts, Paradigms & SDLC*; analysis and architectural design in *Analysis, Modeling, Design & Architecture*; COCOMO and the risk cycle in *Project Management, Metrics, Risk & Scheduling*; GRASP patterns in *GRASP & DCD*.

**High-yield:**

1. **Waterfall** = linear-sequential: each phase is finished, reviewed and signed off before the next; the deliverable of phase *n* is the **only** input of phase *n + 1*. Proposed by **W. W. Royce, 1970**.
2. The six phases, in order: **R**equirements → **D**esign → **C**ode → **T**est → **D**eploy → **M**aintenance (**R-D-C-T-D-M**).
3. Waterfall's fatal flaw is **late feedback**: a user can only judge software by running it, and the budget is gone by then. Requirement errors surface only in **testing**.
4. Defect cost multiplier: requirement **1×** · design **5×** · code **10×** · test **15–50×** · production **100–1000×**.
5. **V-model** = the same sequential stages on the descending left arm, the matching **test level** on the ascending right arm: requirements ↔ **acceptance**, architecture ↔ **integration**, detailed design ↔ **unit test**. It fixes *where* testing is planned, not *when* feedback arrives.
6. **Verification** = building the product the *right* way; **validation** = building the *right* product. **Testing** finds that errors exist; **debugging** corrects them.
7. **UP** = use-case-driven, architecture-centric, iterative and incremental. Four phases: **Inception · Elaboration · Construction · Transition**; each phase holds many **iterations**.
8. **Inception** answers only *"should this project start at all?"* and produces **vision, business case, initial scope, rough estimate, initial risk list** — about **10 %** of project effort, to roughly **±30 %**.
9. **Risk exposure = probability × impact**; the chain is identify → assess → mitigate → monitor, with mitigation by avoid, reduce, transfer or accept. The study ends in a **go / no-go**.
10. A **use case** is a sequence of transactions yielding a meaningful result **with a particular actor** (Jacobson): precondition in, main flow through, postcondition out. An actor is a **role**, drawn **outside** the system boundary.
11. `<<include>>` is **mandatory** ("always"), base → included. `<<extend>>` is **conditional** ("only if"), extending → extended. Same arrow; the **direction and the condition** tell them apart.
12. **UML** began at **Rational in the late 1980s** (Booch, Rumbaugh, Jacobson) and has been an **OMG standard since 1997**. UML 2 has **14 diagrams = 7 structural + 7 behavioural**.
13. Notation: **hollow diamond** = aggregation (weak whole–part) · **filled diamond** = composition (strong, one owner) · **hollow triangle** = generalisation/realisation · **dashed + open head** = dependency · **solid line** = association.
14. **CRC cards** are attributed to **Beck & Cunningham (OOPSLA 1989)**. A **responsibility** = what a class **knows** or **does**; a **collaborator** is the class that helps fulfil it.
15. A **domain (concept) class** is information only — no calculating operations. A **design class** is **any class of the design model**: implementation-level, attributes and operations in full detail, and it **need not be abstract**.
16. **Refactoring** = behaviour-preserving restructuring in small steps, never mixed with new feature work. Objects classify as **entity** (the data), **boundary** (what the user touches), **control** (the sequencing logic).

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** Waterfall model & phases … p. 2 · Strengths, weaknesses, V-model … p. 3 · Unified Process & Inception … p. 4 · Inception vs waterfall reqs … p. 5 · The use case model … p. 6 · include/extend, SSD, sequence … p. 7 · UML: 14 diagrams & relations … p. 8 · OO design & CRC cards … p. 9 · Night-before sheet … p. 10 · Practice MCQs + written … p. 11.

---

## 1. The Topic on One Page (cover)

*(Doodle: a yellow ellipse in the centre reading "WATERFALL & UML / topic mind-map" with eight spokes out to eight rounded boxes — Strengths · weaknesses (blue), Phases + feedback ★ (red), V-model test arm ★ (red), UP · Inception ★ (red), Use case model ★ (red), include vs extend (green), UML 14 diagrams ★ (red), CRC · responsibilities (green). Red = high-yield, green = method / applied.)*

The whole topic in one sentence: **a linear model that delays feedback (waterfall)** → **an iterative process that fixes it early (UP, inception)** → **use cases to write requirements** → **UML to draw the solution** → **CRC cards to assign responsibilities**.

**Cover high-yield list**

1. Waterfall: **linear, rigid**, phases never overlap
2. Feedback arrives **late** — that is the flaw
3. The **V-model** is its test arm
4. **Inception ≈ 10 %** of the effort
5. `<<include>>` is **mandatory**
6. **Filled ◆** = composition

**Contents of the eleven sheets**

| Sheet | What is on it |
|---|---|
| p. 1 | cover: mind map, high-yield, syllabus, legend |
| p. 2 | the definition and the six phases of the waterfall |
| p. 3 | advantages, disadvantages, feedback, the V-model |
| p. 4 | the Unified Process, four phases, Inception |
| p. 5 | Inception vs waterfall requirements; feasibility and risk |
| p. 6 | the use case model: actors, flows, "Place Order" |
| p. 7 | `include`/`extend`, the SSD, sequence, communication |
| p. 8 | UML: 14 diagrams and the six notations |
| p. 9 | OO principles, design process, CRC cards, concept vs design class |
| p. 10 | night-before sheet: fact sheet, fourteen one-liners |
| p. 11 | practice MCQs, written questions, checklist |

## 2. The Waterfall (Linear Sequential) Model

**Definition.** Development as a **cascade of phases**: each phase is **completed, reviewed and signed off** before the next starts, and the deliverable of one phase is the **only** input of the next. Phases do not overlap, and a finished phase is not re-opened.

> **Margin note:** output of *n* = **only** input of *n + 1*.

| # | Phase | Main activity | Deliverable |
|---|---|---|---|
| 1 | **Requirements analysis & specification** | elicitation, analysis, SRS, feasibility | SRS (user + system) |
| 2 | **System & software design** | architecture, data, module, UI design | system + software design docs |
| 3 | **Implementation (coding)** | coding, code review, unit testing | source code, build |
| 4 | **Integration & system testing** | integration, functional testing, fixing | test plan, report, defect log |
| 5 | **Deployment** | installation, migration, training | released system, manual |
| 6 | **Maintenance** | correction, adaptation, improvement | patches, updated docs |

- **Linear and rigid** — one active phase, no overlap.
- **Documentation-heavy** — every phase ends in a reviewed deliverable.
- **Requirement freeze** — later changes go through **change control**.
- **Verification is late** — the feedback sits in the **testing phase**.

*(Doodle: six blue rounded boxes left to right — Req, Design, Code, Test, Deploy, Maint — joined by short blue arrows; a long dashed red arrow loops from the far right back to the far left with a small red cross on it, captioned "a change request has to climb the whole cascade again".)*

- 💡 **Trick:** **R-D-C-T-D-M** — **R**equirements → **D**esign → **C**ode → **T**est → **D**eploy → **M**aintenance. You may only go **down** the falls.
- ⚠️ **Trap:** Royce's 1970 paper drew **verification arrows going back** to earlier stages — the feedback-free waterfall is a textbook simplification, not what was published.
- 📌 **IT link:** a public-sector e-tender (tender → SRS → fixed-price contract → milestones) is classically waterfall: the buyer must own a frozen scope document before money is committed.

## 3. Strengths, Weaknesses & the Feedback Problem

**Advantages**

- Simple to plan and **manage**.
- Clear **milestones and deliverables** → progress is measurable.
- Each phase staffed by **specialists**.
- Thorough **documentation** — handover, audit, maintenance.
- Fits **small projects with stable requirements** (BPO, fixed-price tender).

**Disadvantages**

- No overlap → **long elapsed time**, late working software.
- Changes are **costly**: re-entering a phase voids every later document.
- Requirement errors surface only in **testing**.
- The user sees **nothing running** until the end.
- Poor fit for **large, novel or fast-changing** systems.

**The feedback problem.** Waterfall assumes the requirements can be **fully and correctly stated before any code exists**. But a user can only judge software by **running** it, so the first real feedback arrives after most of the budget is spent — and a late change means redoing design, code and tests.

> **Margin note:** cost of fixing a defect — requirement **1×** · design **5×** · code **10×** · test **15–50×** · production **100–1000×**.

*(Doodle: a blue "V" outline, descending left arm and ascending right arm meeting at "Coding" in green at the bottom; red dots pair each development level on the left with its test on the right — Requirements ↔ Acceptance, System reqs ↔ System test, Architecture ↔ Integration, Detailed design ↔ Unit test. Caption: "each development level is paired with the test that proves it".)*

| Where it still fits | Where it fails |
|---|---|
| small project · stable requirements | ambiguous or volatile requirements |
| proved technology · documented work | large, distributed, long-lived systems |
| fixed-price milestone contract | innovation risk · fast market · heavy UI work |

✍ **The V-model.** Put the same sequential development stages on the **descending left arm** and the matching **test level** on the **ascending right arm**. It fixes **where** testing is planned, not **when** feedback arrives. **Verification** = are we building the product *right*; **validation** = are we building the *right* product. **Testing** finds that errors exist; **debugging** corrects them.

- ⚠️ **Trap:** the V-model does **not** mean "test early every iteration" — it is still sequential; and the counterpart of **requirements is acceptance testing**.

## 4. The Unified Process and Its Inception Phase

**Unified Process (UP).** A **use-case-driven, architecture-centric, iterative and incremental** process **framework** created at Rational by **Booch, Rumbaugh and Jacobson** with Cockburn. Each project **tailors** it; the **Rational Unified Process (RUP)** is Rational's packaged version.

| Phase | What happens in it | Milestone |
|---|---|---|
| **Inception** | business case, vision, initial scope, rough estimate, first risk list | the **Vision** — "is it worth doing?" |
| **Elaboration** | most requirements, the domain model, the architecture prototype | the **Architecture baseline** |
| **Construction** | build the rest, refine the design, test continuously | working **increments** |
| **Transition** | deployment, migration, training, support handover | the **released product** |

*(Doodle: four boxes in a row — Inception (red), Elaboration, Construction, Transition (blue) — connected by arrows; beneath Construction sit three small green boxes "it 1 / it 2 / it 3" labelled "iterations inside a phase"; under Inception, red text "≈ 10% of the effort"; along the bottom "a phase is a long-term goal · an iteration is a short cycle".)*

**Inception.** The first and shortest phase. Its only question is **"should this project start at all?"** It fixes the **vision**, **business case**, **initial scope**, a **rough estimate** and an **initial risk list**.

1. Decide the **scope and size**
2. Document the **business case**
3. Rough-estimate cost and duration
4. Form the **initial risk list**
5. Identify the **stakeholders**
6. Define the **vision** and high-level use cases

| Inception activity | Produces |
|---|---|
| Stakeholder identification | users, clients, sponsors |
| Requirements elicitation | high-level needs only |
| Feasibility study | technical, operational, economic |
| Initial risk assessment | risk list, impact, mitigation |
| High-level use cases | ~10–20 cases, no detail |
| Project estimation | rough size, cost, schedule |

**Outputs of inception:** vision & business case · initial risk list · initial high-level use-case model · rough size, cost and schedule. **Effort guideline: about 10 % of the project effort**; the estimate is **rough**, typically **±30 %**.

## 5. Inception vs the Waterfall Requirements Phase

| Aspect | Waterfall requirements | UP Inception |
|---|---|---|
| Scope covered | complete, detailed, **frozen** | high-level only, **incomplete by design** |
| Main output | **SRS** | **vision**, business case, initial use cases |
| Timing | one long phase before any design | short first phase; elaboration continues it |
| Accuracy | claims to be exact | order of magnitude, **±30 %** |
| Change | change request + impact analysis | normal — the use-case model keeps growing |
| Risk | not explicitly addressed | an **initial risk list** is a first-class output |
| Testing | later, via the V-model | continuous, risk-driven, per iteration |

**Feasibility: five questions**

- **Technical** — can it be built with the available technology and skills?
- **Economic** — does the benefit beat the cost? (cost-benefit, payback, NPV)
- **Operational** — will people use it, and can the organisation run it?
- **Legal** — data-protection and e-government compliance
- **Schedule** — deliverable in the required time?

The study ends in a **go / no-go** decision — cancelling a weak project is a legitimate result.

**Initial risk assessment.** A **risk** is an uncertain future event with a probability and an impact; **exposure = probability × impact**. The chain is **identify → assess → mitigate → monitor**, with mitigation by **avoid, reduce, transfer or accept**. Inception produces only the **first** risk list; full risk analysis and COCOMO are in the Project Management notes.

- 💡 **Trick:** Inception = **"SCOOPE"** — **S**takeholders, feasibility, **C**ost/effort estimate, **O**utput = vision & use cases, **P**roject go/no-go, **E**licit only high-level needs.
- ⚠️ **Trap:** do **not** write "Inception replaces the requirements phase" — it only *frames* requirements; the bulk are elaborated later. And do not call UP "waterfall renamed": UP is **iterative**, each phase holding many iterations, while waterfall is strictly sequential.
- 📌 **IT link:** a real project does exactly this: a one- or two-week *spike* produces a vision note, a handful of use cases and a risk list — then the funding decision is taken.
- ✍ **Rough estimation inside inception.** Size the work by **function points**, **use-case points** (weight each use case by complexity), **analogy** or **expert judgement**; then effort × rate ≈ cost. Inception needs only an **order of magnitude** — the firm figure arrives after elaboration. COCOMO and the full risk matrix are in the Project Management notes.

## 6. The Use Case Model for Requirement Writing

**Definition.** A **use case** is a sequence of transactions that yields a **meaningful result with a particular actor** (Ivar Jacobson). It abstracts **behaviour** in the user's language — not a design, a screen or a test case.

| Element | What it states | "Place Order" example |
|---|---|---|
| **Actor** | a **role** played by a person or external system, outside the boundary, drawn as a stick figure | Customer; Payment Gateway |
| **Precondition** | what must already be true — an **assumption**, never the trigger | registered, logged in, cart not empty |
| **Main flow** | the basic sequence that always delivers the goal | checkout → summary → pay → confirm |
| **Alternative flows** | variations, error and exception paths | card declined; stock changed; cancel |
| **Postcondition** | what is guaranteed true after success — a **result** | order confirmed, stock reserved |
| **Trigger** | the boundary event that starts the use case | customer clicks "Checkout" |

- **Primary actor** — whose goal the use case delivers; it drives the system.
- **Supporting / secondary actor** — provides a service the use case needs (Payment Gateway); a **tertiary** actor only benefits indirectly (Courier).
- An actor is a **role, not a person**: **one person may play several actors**, one actor several people.

✍ **Worked example: "Place Order".**

- **Main flow:** ① customer selects Checkout → ② the system shows the summary → ③ the customer enters card details → ④ the gateway authorises → ⑤ the system creates the order, reserves stock and confirms → ⑥ the order ID is shown.
- **Alternative flows:** card declined → another card; stock changed → recalculate; cancel → no order.

*(Doodle: a rectangular system boundary labelled "Online Shopping System"; inside it a red oval "Place Order", a blue oval "Validate payment" joined to it by a dashed red arrow labelled <<include>>, and a green oval "Apply coupon" joined back by a dashed green arrow labelled <<extend>>; a stick figure "Customer (primary)" outside on the left and "Payment (supporting)" outside on the right. Caption: "a use case diagram: actors outside the boundary, ovals inside it".)*

- ⚠️ **Trap:** a use case is **not** a screen, a class or a test case. Name it **verb + noun** at the **user-goal level**.
- 💡 **Trick:** **P**recondition in, **M**ain flow through, **P**ostcondition out. An actor is a **role**, outside the box.

## 7. Use Case Relations, SSD & Sequence Diagrams

| Relationship | When it is used | Direction & notation |
|---|---|---|
| `<<include>>` | **mandatory** — the base use case **always** performs the included one | base **→** included; dashed arrow, open head |
| `<<extend>>` | **optional** — added only under a condition; never completes alone | extending **→** extended |
| **Generalisation** | a specialisation inherits the flow and adds or overrides steps | specialised **→** general; hollow triangle |

**System Sequence Diagram (SSD).** Draws the **whole system as one black box**: only events crossing the boundary appear. Rules (Cockburn): **one event per step**, names in **verb + noun** form, **no internal messages**, no loops.

```text
Customer → System : createOrder(items)
System   → Customer: paymentRequired(total)
Customer → System : makePayment(cardDetails)
System   → Customer: orderConfirmed(orderId)
```

A gateway call is **inside** the box here — that is why an SSD is not a sequence diagram.

**Reading a sequence diagram**

- **Time flows downward**; read each message **left → right**, then move down.
- **Lifelines** = the objects taking part.
- **Numbered messages** give the order.
- **Activation bar** = focus of control.
- **Filled arrow** = synchronous · **open arrow** = asynchronous · **dashed** = reply · `[guard]` = condition.
- **Dot** = exists · **open circle** = created · **X** = destroyed.

*(Doodle: three lifelines headed Customer, Order (blue boxes) and Payment (green box) with dashed vertical lines; narrow red activation bars on the Customer and Order lifelines; numbered messages 1: submitOrder(), 2: authorize(amt), 3: approved() (dashed green reply), 4: orderConfirmed(id); caption "time runs downward · numbers give the order".)*

**Communication (= collaboration) diagram.** The **same interaction** redrawn as a graph of **object links**, messages numbered on the links: it shows **who is connected to whom** (structure), not when things happen (time).

- ⚠️ **Trap:** "Withdraw Cash **always** performs Authenticate User" → `<<include>>`. "A discount **only for members**" → `<<extend>>`. Same arrow — the **direction and the condition** tell them apart.

## 8. UML: What Each Diagram Is For

**UML.** The OMG standard visual language for specifying, visualising and documenting software, **originating at Rational in the late 1980s** (Booch, Rumbaugh, Jacobson) and an **OMG standard since 1997**. UML 2 has **14 diagrams**: **structural** (what exists) and **behavioural** (what happens).

| Structural (7) | What it is FOR |
|---|---|
| **Class** | static structure: classes, attributes, operations |
| **Object** | a snapshot of *instances* and their links |
| **Composite Structure** | how a classifier is built from parts |
| **Component** | modules, interfaces, dependencies |
| **Deployment** | artifacts on hardware nodes and links |
| **Package** | grouping into namespaces / folders |
| **Profile** | stereotypes tailoring UML to a domain |

| Behavioural (7) | What it is FOR |
|---|---|
| **Use Case** | actors and the goals they want from us |
| **Activity** | workflow: flow, decisions, swimlanes |
| **State Machine** | life of one object: states, events |
| **Sequence** | interaction over **time**: lifelines + messages |
| **Communication** | the same interaction as an object graph |
| **Interaction Overview** | how interaction diagrams fit together |
| **Timing** | object values changing over time |

| Relationship | Meaning → notation |
|---|---|
| **Association** | "a knows b"; role, navigability, multiplicity → **solid line** |
| **Aggregation** | weak whole–part, parts live alone → **hollow diamond** |
| **Composition** | strong whole–part, one owner → **filled diamond** |
| **Dependency** | weakest, temporary "uses a" → **dashed + open head** |
| **Generalisation** | "is-a": subclass → superclass → solid, **hollow △** |
| **Realisation** | "implements" a contract → dashed, **hollow △** |

*(Doodle: six short line segments each carrying one notation — a plain line with an open head (Association), a line into a hollow triangle (Generalisation), a line out of a hollow diamond (Aggregation), a dashed line with an open head (Dependency), a line into a filled diamond (Composition), a dashed line into a hollow triangle (Realisation); captioned "the six notations you must be able to draw".)*

- ⚠️ **Trap:** filled diamond = **composition**, hollow diamond = **aggregation**; a hollow **triangle** is generalisation, not a diamond. "Collaboration diagram" is the old UML 1.x name for the **Communication diagram**.

## 9. Designing Objects: Principles, Process & CRC

| OO principle | Exactly what it means |
|---|---|
| **Encapsulation** (information hiding) | data and its operations bundled in one class; state private, changed only through the public interface |
| **Abstraction** | exposing **what** the object does, not **how** |
| **Inheritance** | a subclass inherits and specialises state and behaviour ("is-a") |
| **Polymorphism** | the **same message**, different behaviour, decided at **run time** |

**The OO design process**

1. Develop or reuse a **design model**
2. Find the **design classes** for each element
3. Assign each class its **responsibilities** (CRC cards)
4. Assign each class its **collaborators**
5. Design collaborations, associations, generalisations
6. Refine classes; repeat until all behaviour is held

**Responsibility** = what a class **knows** (attributes, linked objects) or what it **does** (operations); a **collaborator** is another class that helps fulfil one.

| Class | Knows (state) | Does (operations) |
|---|---|---|
| **Customer** | name, email, cart | `addToCart()`, `checkout()` |
| **Cart** | products, quantities | `calculateTotal()`, `createOrder()` |
| **Order** | orderId, lines | `confirm()`, `generateInvoice()` |
| **Payment** | method, amount | `processTransaction()` |

*(Doodle: a yellow index card labelled "CART" split into two columns — RESPONSIBILITIES (red header) listing "know the items, know the total, addItem(sku), calculateTotal(), createOrder(), clear()" and COLLABORATORS (green header) listing Customer, Product, Order, Payment. Caption: "a CRC card (Beck & Cunningham, OOPSLA 1989)".)*

- **Concept vs design class.** A **domain (concept) class** is pure information — **no operations that calculate** — named as a **singular common noun**. A **design class** is **any class of the design model** — implementation-level, with attributes and operations in full detail; it **need not be abstract**.
- 💡 **Reuse & refactoring.** **Reuse** = patterns, inheritance, composition. **Refactoring** = a **behaviour-preserving** restructuring of code, in small steps, never mixed with feature work.
- 📌 **Categories of object.** **Entity** = the data of the use case · **Boundary** = what the user touches · **Control** = the sequencing logic.

✍ **Domain model & concept classes.** The **domain model** is the **conceptual** representation of the domain's real-world concepts: every domain noun becomes a **concept class** carrying its **attributes** and its **associations**, but **no operations** — nothing calculates, nothing is implemented (the "concept vs design class" rule above is exactly this rule). For an online-shopping domain the concept classes are **Customer, Order, OrderLine, Product, Payment**, each holding data only:

| Concept class | Holds (attributes) |
|---|---|
| **Customer** | name, email, address |
| **Order** | orderId, date, status |
| **OrderLine** | quantity, subtotal |
| **Product** | name, price, sku |
| **Payment** | method, amount |

✍ **Multiplicity notation.** Each end of an association is labelled with how many instances may take part:

| Multiplicity | Means |
|---|---|
| `1` | exactly one |
| `0..1` | zero or one |
| `*` or `1..*` | many (one or more, unbounded above) |

Read a multiplicity **at the far end** of the association, never left to right. So in `Customer 1 — * Order`, one Customer may place many Orders; read from the other end, **each Order is for exactly one Customer**. The same rule gives `Order 1 — * OrderLine` (an Order holds many lines, each line belongs to one Order) and `OrderLine * — 1 Product` (a Product appears on many order lines, each line names exactly one Product). Exam trap: `1` and `*` are **class names' multiplicities, not attribute types**, and they belong to the *opposite* end from the arrow you are reading.

## 10. Night-Before-the-Exam Sheet

### Fact sheet

| | |
|---|---|
| Phases: Req → Design → Code → Test → Deploy → Maint | Royce, 1970 · linear, rigid, no overlap |
| Verification = the product the right way | Validation = the right product |
| V-model: reqs ↔ acceptance · arch ↔ integration | detailed design ↔ unit test |
| Testing finds errors · debugging removes them | UP = use-case driven, architecture centric |
| UP: Inception · Elaboration · Construction · Transition | each phase holds many iterations |
| Inception = vision, business case, scope, estimate, risks | Inception ≈ 10 % of effort · estimate ±30 % |
| `<<include>>` = always (base → included) | `<<extend>>` = only if (extending → extended) |
| SSD = black box, verb+noun, no internals | Sequence: time ↓, lifelines, activations |
| Aggregation = hollow ◆ · Composition = filled ◆ | Dependency = dashed + open arrowhead |
| Generalisation / realisation = hollow △ | UML 2 = 14 diagrams = 7 + 7 |
| Collaboration = Communication diagram | CRC: Beck & Cunningham, 1989 |
| Responsibility = knowing + doing | Refactoring = behaviour-preserving |
| Concept class = information only | Objects: entity · boundary · control |

### Top 14 one-liners for MCQs

1. Waterfall was proposed by **W. W. Royce, 1970**
2. Waterfall = linear-sequential, phases do not overlap
3. **Inception** is the first UP phase
4. Inception answers "is it worth starting?"
5. Inception outputs a **vision**, not an SRS
6. An **actor** stands outside the system boundary
7. Sequence diagram = lifelines + messages in time order
8. "Collaboration diagram" was renamed **Communication**
9. **Filled diamond** = composition
10. **Hollow diamond** = aggregation
11. **Hollow triangle** = generalisation
12. **Dashed arrow, open head** = dependency
13. **Elaboration** builds the architecture baseline
14. **CRC cards** were invented by **Beck & Cunningham**

**Top traps.** `<<include>>` vs `<<extend>>`: "always" vs "only if" · composition vs aggregation: filled vs hollow diamond · verification vs validation: the product vs the process · SSD vs sequence: black box vs opened up · "waterfall has no feedback at all" is **wrong** · Inception does **not** write the SRS · a use case is **not** a screen.

💡 **All tricks together.** R-D-C-T-D-M staircase · "only down the falls" · V = development left, test right · Inception = SCOOPE · precondition in, main flow through, postcondition out · "always" = include, "only if" = extend · solid = knows, dashed = merely uses · hollow diamond is weak, filled is strong · concept classes store, design classes behave.

*(Doodle: a red oval "Base" → dashed red arrow → blue oval "Authenticate" labelled "<<include>> always"; and a green oval "Discount" → dashed green arrow → blue oval "Withdraw cash" labelled "<<extend>> only if"; beneath, "the arrow points at the use case whose behaviour is used".)*

## 11. Practice MCQs, Written Questions and Checklist

1. Which diagram uses **lifelines** and messages?
   - a. Class diagram · b. Sequence diagram · c. Deployment · d. Use case
2. A person or system interacting with it is:
   - a. Class · b. Node · c. Actor · d. Component
3. Which UP phase sets the **business case**?
   - a. Inception · b. Elaboration · c. Construction · d. Transition
4. A base use case **always** performs another:
   - a. `<<extend>>` · b. Generalisation · c. Association · d. `<<include>>`
5. **Composition** is drawn as which symbol?
   - a. Hollow diamond · b. Filled diamond · c. Hollow triangle · d. Dashed arrow
6. **Aggregation** is drawn as which symbol?
   - a. Hollow diamond · b. Filled diamond · c. Hollow triangle · d. Dotted line
7. A "depends on" relation is drawn as:
   - a. Solid arrow · b. Filled diamond · c. Dashed arrow · d. Solid triangle
8. Runs only when a coupon code is present:
   - a. `<<include>>` · b. `<<extend>>` · c. Generalisation · d. Realisation
9. "SavingsAccount is-a Account" is shown by:
   - a. Filled diamond · b. Hollow diamond · c. Hollow triangle · d. Dashed arrow
10. Inception uses about what share of effort?
    - a. 25 % · b. 50 % · c. 10 % · d. 75 %

**Answer key →** 1-b · 2-c · 3-a · 4-d · 5-b · 6-a · 7-c · 8-b · 9-c · 10-c

✍ **Written question 1 (8 marks).** Describe the Waterfall model and its phases. Give two advantages and two disadvantages.

1. **Definition** — linear-sequential: each phase is finished, reviewed and signed off before the next. *(2)*
2. **Phases** — requirements (SRS) → design → implementation with unit testing → integration and system testing → deployment → maintenance. *(2)*
3. **Advantages** — simple to plan with clear milestones; good documentation. *(2)*
4. **Disadvantages** — changes are costly; software appears late. *(2)*

*(Doodle: one black-box rectangle labelled "System" on the right, a stick figure "Customer" on the left with a dashed lifeline; four alternating blue and green arrows crossing the boundary — `createOrder(items)` and `makePayment(card)` out, `paymentRequired(total)` and `orderConfirmed(id)` back. Caption: "SSD = one black box".)*

✍ **Written question 2 (7 marks).** Draw a use case diagram for online shopping with one primary actor, one supporting actor, one `<<include>>` and one `<<extend>>`, stating each arrow's direction.

**Answer:** **Customer** on the left (primary), **Payment Gateway** on the right (supporting); `<<include>>` *Place Order* → *Validate Payment*; `<<extend>>` *Apply Coupon* → *Place Order*.

**Before the exam ✓**

- Recite the six waterfall phases
- Give two advantages and two disadvantages
- Name the four UP phases and inception's outputs
- Tell `include` from `extend` by the condition
- Draw all six UML notations

**Neighbours:** the SDLC phases are in **SE Concepts**; estimation and COCOMO in **Project Management**; responsibility patterns in **GRASP & DCD**.