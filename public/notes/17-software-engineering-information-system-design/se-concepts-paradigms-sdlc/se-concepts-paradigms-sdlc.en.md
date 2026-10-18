# Software Engineering: Concepts, Paradigms & SDLC: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/17-software-engineering-information-system-design/se-concepts-paradigms-sdlc.en.html` (handwritten-style PDF: `notes/pdf/17-software-engineering-information-system-design/se-concepts-paradigms-sdlc.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Software Engineering and Information System Design):** "Concepts of Software Engineering, Software Engineering paradigms, Different phases of software System Development, Different types of information, qualities of information." Estimation (COCOMO), Gantt / PERT / CPM scheduling and the full risk cycle sit in the *Project Management, Metrics, Risk & Scheduling* lesson and are only cross-referenced here.

**High-yield:** ① SE coined at the **NATO, Garmisch 1968** conference, which also named the **software crisis** ② IEEE wording: **systematic, disciplined and quantifiable** ③ software attributes = **C-C-C-I** (complexity, conformity, changeability, invisibility) ④ **maintainability ≈ 70%** of the total cost ⑤ generic process patterns: **5 technology + 3 process + 6 practice = 14** ⑥ a model is a **basket of patterns**, not a rival theory ⑦ **Royce did not** offer the waterfall as a recipe for success ⑧ V-model pairs: module→unit, architecture→integration, system→system, requirements→acceptance ⑨ **Spiral = Boehm, 1986, risk-driven**; quadrants read clockwise **ORBP** ⑩ **RAD ≈ 90 days**, small team, component reuse, James Martin ⑪ **Big Bang has no phases at all** ⑫ **SRS** is the requirements-phase deliverable ⑬ maintenance kinds **CAPP**; 60–80% of life-cycle cost ⑭ the later the fix, the dearer: **×1 → ×5 → ×10 → ×15–50 → ×100**.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. What software engineering is — p. 2 · 2. Qualities of good software — p. 2 · 3. The process, its framework, its practices — p. 3 · 4. The 14 generic patterns and information types — p. 4 · 5. Models I: waterfall & V-model — p. 5 · 6. Models II: prototyping, incremental, Big Bang — p. 6 · 7. Models III: spiral & RAD — p. 7 · 8. Seven models in one table — p. 8 · 9. The SDLC phases and their deliverables — p. 9 · 10. Where each model places the phases — p. 10 · 11. Night-before sheet — p. 11 · 12. Practice MCQs + written — p. 12.

---

## 1. What Is Software Engineering?

**Software engineering (SE)** is the **systematic, disciplined and quantifiable application of an engineering method** to software: how it is specified, designed, built, verified, validated, deployed, maintained and evolved. The word *engineering* is what makes it a discipline rather than an art — the method is repeatable, and its results can be measured.

The term was **coined at a NATO conference held at Garmisch, West Germany, in 1968**. That same conference named the problem the discipline was created to answer: the **software crisis** — projects running late, over budget, and full of defects.

### 1.1 Why a process is unavoidable

Hardware obeys physical law. Software does not, and that single difference generates four attributes which make a formal process necessary.

| Attribute of software | What it means | Why it forces a process |
|---|---|---|
| **Complexity** | software embodies many interacting parts, and no physical law bounds how large it may grow | only a disciplined method keeps a large structure understandable |
| **Conformity** | it must obey contracts, standards, regulations and law | external obligations must be traced, not assumed |
| **Changeability** | requirements move while the product is still being built | change has to be managed, versioned and controlled |
| **Invisibility** | progress is invisible — you cannot point at a fraction of the program and see it working | progress must be demonstrated through concrete artefacts |

- 💡 **Trick:** **C-C-C-I** — **C**omplexity, **C**onformity, **C**hangeability, **I**nvisibility. A "which is **not** an attribute of software?" question is answered with **rigidity** or **fatigue**.
- ⚠️ **Trap:** hardware's complexity is largely visible and measurable; software's is not. Do not swap the two columns.

### 1.2 The three goals of SE

1. **A good product** — correct, complete, usable, maintainable.
2. **A repeatable process** — one the team can execute again and get the same quality.
3. **Delivery on time and within budget** — the commercial constraint.

*(Doodle: a central yellow "SE" circle wired to four labelled boxes — two blue across the top (Complexity, Conformity) and two red across the bottom (Changeability, Invisibility).)*

## 2. Characteristics (Qualities) of Good Software

| Quality | Exactly what it means | MCQ keyword |
|---|---|---|
| **Correctness** | produces the output the SRS demands | "meets the spec" |
| **Reliability** | does not fail under expected operating conditions | MTBF |
| **Efficiency** | uses CPU time, memory and I/O optimally | time & space complexity |
| **Maintainability** | the effort needed to fix, adapt or enhance it | "≈ 70% of total cost" |
| **Portability** | runs on another environment with little change | bytecode |
| **Usability** | learnable, forgiving interface | user-friendly |
| **Integrity** | security — no unauthorised access | confidentiality |
| **Flexibility** | new features added by local changes | modularity |
| **Testability** | can be verified by repeatable tests | verifiability |
| **Reusability** | parts can be used again in another product | libraries, components |

- ⚠️ **Trap:** **correctness cannot be proved in general.** Testing only raises confidence in it, so "100% correct" is never certifiable — the strongest defensible claim is "tested to the required confidence level".
- ⚠️ **Trap:** **maintainability ≠ usability.** Usability is judged by the *user*; maintainability by the *developer* who must change the code later.

## 3. The Process, Its Framework, Its Universal Practices

The **software process** is the set of activities — together with their **order, the roles that perform them, and their inputs and outputs** — that turns a requirement into an operating product.

| Term | Means |
|---|---|
| **Process** | activities + order + roles + artefacts |
| **Methodology** | a process **plus** its rules, paperwork and prescribed techniques |
| **Model / paradigm** | the **shape** of the process — how the activities are arranged |
| **Tool** | something that automates an activity (CASE tool, IDE, build server) |

*(Doodle: a purple "framework activities" umbrella bar across the top, sheltering three blue boxes below — Requirements engineering · Design · Construction · and Testing · Deploy · Maintain — with a green caption "every activity set wears the umbrella under whatever model is chosen".)*

### 3.1 The six framework activities

These are **universal**: they cut across *every* process model, whatever its shape. In Pressman's phrasing they are the **umbrella activities** under which the model-specific activities sit.

| Framework activity | What it does | Artefact produced |
|---|---|---|
| **Project planning** | estimates effort, cost and schedule; fixes milestones | project plan |
| **Tracking and control** | measures actual progress against the plan and corrects it | status report |
| **Risk analysis** | identifies technical, schedule, budget and staffing risks | risk register |
| **Quality assurance** | the QA plan, the standards, the formal reviews | QA plan |
| **Configuration management** | baselines, versioning, change control | baselines |
| **Technical reviews** | the gate that checks each artefact before acceptance | review minutes |

- 💡 **Trick:** the umbrella spells **P-T-R-Q-C-T** — **P**lan, **T**rack, **R**isk, **Q**uality, **C**onfiguration, **T**eview.
- **Also standard practice:** requirements **traceability** (requirement → design → code → test, recorded in an **RTM**), unit tests written together with the code, prototyping to explore options, and reuse of libraries and COTS components.
- 📌 **Standards:** **ISO/IEC 12207** standardises life-cycle processes; process maturity is rated by **CMM / CMMI**, which has **five levels**. Note the object of measurement: a **process** is rated, not a product.
- ⚠️ **Trap:** the **generic process framework is not a process model**. It is the umbrella; a model is what operates under it. "Which is the model?" ⇒ waterfall / spiral / V-model, never "framework".

## 4. The 14 Generic Process Patterns

**Patterns** are reusable, named **solutions to recurring problems in the process itself**. A lifecycle model is a **selection** of these patterns — which is why no model is universally best, and why the same project can be run two ways.

### 4.1 Technology patterns (5)

1. **Reusable-architecture evolution**
2. **Iterative design**
3. **Incremental delivery**
4. **Evolutionary prototyping**
5. **Spiraling**

### 4.2 Process patterns (3)

6. **Staged delivery**
7. **Discipline of formal methods**
8. **Executable specifications**

### 4.3 Practice patterns (6)

9. **Tool-based transformation and automation**
10. **Computer-aided software engineering (CASE)**
11. **Documented rationales for data design**
12. **Prototyping for data design**
13. **Mathematical formalism in algorithms and data structures**
14. **Object-oriented design paradigms**

*(Doodle: three blue pattern boxes across the top — "staged delivery", "spiraling", "iterative + incremental" — feeding three model boxes below — a wide red WATERFALL, a red SPIRAL, and a small green AGILE — under a yellow caption "each model = a basket of patterns".)*

- 📌 **Models as baskets:** waterfall = staged delivery · spiral = spiraling + risk analysis · agile = iterative + incremental + evolutionary prototyping.
- ⚠️ **Trap:** patterns are **not** prescriptions, and two similarly named patterns are easy to confuse. "Which pattern prescribes a **disciplined use of mathematics** in designing algorithms and data structures?" → **mathematical formalism**. "Discipline of formal methods" is the *process* pattern of staging formal proof in the development flow — a different entry.

## 5. Information: Types and Qualities

### 5.1 Types of information, by basis

| Basis | Types and examples |
|---|---|
| **By nature** | **Quantitative** (sales figures, temperature) · **Qualitative** (customer feedback) |
| **By time** | **Real-time** (live share price) · **Historical** (last month's sales) |
| **By source** | **Internal** (own sales data) · **External** (market research) |
| **By purpose** | **Strategic** (expansion plans) · **Tactical** (resource allocation) · **Operational** (daily stock level) |

### 5.2 Qualities of good information

1. **Accuracy** — correct and free of error
2. **Relevance** — serves the decision it is meant to support
3. **Completeness** — carries all the detail the decision needs
4. **Timeliness** — available at the moment it is needed
5. **Reliability** — the source can be trusted
6. **Understandability** — the receiver can interpret it
7. **Consistency** — free of internal contradiction
8. **Accessibility** — easy to retrieve when required

## 6. Process Models I — Waterfall and V-Model

Every model performs the **same** activities. What differs between them is the **order**, the **feedback**, and the **timing of tests**. Never memorise a model as a list of phases — memorise its **shape**.

### 6.1 Waterfall (linear / sequential) model

- **Origin:** **Benington (IBM), 1956**; drawn and named by **Royce, 1970**.
- **Shape:** phases in strict order, each **signed off** before the next begins.
- **Fits:** requirements already understood and frozen; fixed-price contracts; regulated work.
- **Strengths:** discipline; a document at every gate; easy budgeting; **contract-friendly**.
- **Weaknesses:** no working software until very late; wrong requirements discovered very late; **inflexible to change**.

*(Doodle: five descending, staggered bars — Requirements → System design → Coding → Testing → Maintenance (green) — with a red arrow looping back from the end labelled "feedback comes late".)*

- ⚠️ **Trap:** **Royce did not propose the waterfall as a recipe for success.** His 1970 paper presents it as a model with **serious problems**, to be cured by feeding verification results back into every phase. The paper is titled *"Managing the Development of Large Software Systems"*.

### 6.2 V-Model (verification and validation model)

The V-model keeps the left descent of the waterfall but adds a right ascent: **every design level on the left has a matching test level on the right.**

| Left arm — development | Right arm — the matching test level |
|---|---|
| Requirements | **Acceptance** testing (the user's view) |
| System design | **System** testing (whole system) |
| Architectural design | **Integration** testing (modules together) |
| Module design | **Unit** testing (by the developer) |

*(Doodle: two columns of four boxes — blue on the left (Requirements, System design, Arch. design, Module design) and red on the right (Acceptance test, System test, Integration test, Unit test) — with dashed green horizontals joining each pair and the caption "tests are designed left, executed right".)*

- 💡 **Trick:** read the V-model **bottom up** for the pairings: **module → unit, architecture → integration, system → system, requirements → acceptance**. "The smaller the design box, the smaller the test."
- 📌 **High-yield:** under the V-model, **unit testing begins at coding time** — testing is *planned* when the corresponding design is done, not deferred to the end.

## 7. Process Models II — Prototyping, Incremental, Big Bang

### 7.1 Prototyping model

- **Use when** requirements are unclear and must be explored **with** the user *before* the build.
- **1st generation (throw-away):** a paper or screen model used only to discover requirements, then **discarded**.
- **2nd generation (evolutionary):** improved repeatedly until it **becomes** the product.

| Generation | Fate | Loop |
|---|---|---|
| **Evolutionary** | the prototype *becomes* the product | refine and keep |
| **Throw-away** | the prototype is *discarded* and rebuilt cleanly | find requirements, then restart |

- **Strength:** kills requirements ambiguity early; the user sees something working fast.
- **Weakness:** users may mistake the prototype for the product, so shortcuts taken for speed survive into production.
- ⚠️ **Trap:** prototyping is **not** "build it twice and keep the worse version". The second generation is a fresh build informed by what the first one taught you.

### 7.2 Incremental (evolutionary delivery) model

- **Shape:** the system grows in **working, releasable increments**; **each increment runs the whole SDLC**. **Increment 1 is the core product**, not a stub or a skeleton.
- **Fits:** requirements can be listed and **prioritised**; the customer can use the system early.
- **Strengths:** usable software early; feedback per release; risk spread over time.
- **Weaknesses:** total cost can exceed waterfall's; a later increment may have to **redo requirements and design** work.

*(Doodle: four rising blocks — Inc 1, Inc 2, Inc 3, and a taller green Inc 4 — under a red diagonal arrow labelled "each increment = a complete mini-SDLC".)*

- ⚠️ **Trap:** **iterative ≠ incremental.** *Iterative* means **repeating** the process to refine it; *incremental* means **adding a slice** of new capability. A project can be one without the other.

### 7.3 Big Bang model (build-and-ship)

- **Shape:** **no phases at all** — requirements, design, coding and testing all at once; a single release.
- **Fits:** tiny, low-risk, throwaway experiments where the schedule beats the method.
- **Strength:** zero process overhead; the fastest possible first build.
- **Weakness:** **massive late risk** — no feedback, no intermediate release, unmaintainable afterwards.

*(Doodle: three blue circles — Req, Design, Code — dropping into one wide red bar labelled "ONE BIG BANG RELEASE", with the note "no intermediate checkpoint".)*

- ⚠️ **Trap:** Big Bang is **not** "the waterfall done badly". It is the **absence** of a process.

## 8. Process Models III — Spiral (Boehm) and RAD

### 8.1 Spiral model

- **Author:** **Boehm, 1986** — he adapted risk-management practice to large software projects.
- **Shape:** **risk-driven**. Each loop does **planning → risk analysis → engineering → evaluation**, and the product grows progressively out of a prototype.

| Quadrant | Activity |
|---|---|
| 1 | Determine objectives, alternatives and constraints |
| 2 | Evaluate alternatives and **resolve the risks** |
| 3 | Develop and verify the next-level product |
| 4 | **Plan** the next iteration |

*(Doodle: a large circle quartered by a cross, with RISK in the middle; the four quadrant labels placed clockwise from the top-left, and the caption "later loops cost less".)*

- **Fits:** large, high-risk, expensive-to-fail projects — defence, banking core, safety-critical systems.
- **Strengths:** makes risk **explicit and front-loaded**; combines **cyclic** work with **reuse**.
- **Weaknesses:** expensive; needs trained risk analysts; without discipline it degrades into "chaotic waterfall".
- 💡 **Trick:** clockwise from the top-left: **O**bjectives → **R**isk → **b**uild → **P**lan — **ORBP**, one full round per loop.

*(Doodle: four small boxes in a row — plan → risk → build → review (green) — with a red loop-back arrow underneath and the caption "the next round is cheaper".)*

### 8.2 RAD — Rapid Application Development

**RAD** is a **time-boxed, small-team, component-reuse** approach in which analysis, design and prototyping are **fused into a single round** and the product is built in roughly **90 days**. It was popularised in the 1980s by **James Martin**.

- **Fits:** small teams; GUI / business applications; requirements already understood by both sides.
- **Does not fit:** large mission-critical back-end systems; heavy safety demands; distributed teams.
- **Strength:** an extremely short cycle; the user works with the system continuously.
- **Weakness:** a narrow fit; time-boxing pushes testing and documentation out of the round.
- 💡 **Trick:** the three **R**'s of RAD — **R**apid, **R**equirements already known, **R**euse.
- 📌 **Agile:** iterative + incremental + prototyping (Agile Manifesto, **2001**).

## 9. Seven Models, One Table

| Model | Shape | Fits when | Strength | Weakness |
|---|---|---|---|---|
| **Waterfall** | one pass, linear | needs known and frozen | documented, budgetable | inflexible; a late fix costs ×100 |
| **V-Model** | development left, tests right | safety-critical, testable | tests are designed early | costly, heavy up front |
| **Prototyping** | analyse → prototype → build | needs unclear, UI-heavy | kills ambiguity early | prototype mistaken for the product |
| **Incremental** | staircase of releases | needs can be prioritised | usable early, risk spread | can cost more than waterfall |
| **Spiral (Boehm)** | four-quadrant risk loop | large, high-risk projects | explicit risk analysis | needs trained risk analysts |
| **RAD** | fused analyse + design + build | small team, GUI app | very short cycle | narrow fit; quality squeezed |
| **Big Bang** | no phases at all | tiny, low-risk, throwaway | zero process overhead | no feedback, huge late risk |

*(Doodle: four models — Spiral (red), V-Model, Waterfall, RAD (green) — placed at the four corners of a soft blue oval with all four paths converging on a central "one goal".)*

- 💡 **Trick — picking a model in three questions.** ① **Are the requirements clear?** no → **prototyping**; yes → ② **Is the risk high?** yes → **spiral** or **V-model**; no → ③ **Small GUI build?** yes → **RAD**; otherwise → **incremental**.
- ⚠️ **Trap:** never mix **iterative** with **incremental** in one answer — they are different axes.

## 10. The SDLC Phases and Their Deliverables

**SDLC** = **S**oftware **D**evelopment **L**ife **C**ycle — the ordered phases running from the feasibility study to retirement. A written answer must give, **for each phase**, the **main activity** and the **artefact it produces**.

| Phase | Main activities | Deliverable (artefact) |
|---|---|---|
| **0 Feasibility** | TELOS check — **T**echnically, **E**conomically, **L**egally, **O**perationally possible? | **feasibility report**, project charter |
| **1 Requirements analysis & specification** | elicit (interviews, questionnaires, observation, prototyping), analyse, specify, validate, manage change | **SRS**, use cases, user & system requirements |
| **2 System design** | architecture, modules, interfaces, data design; HLD then LLD; UML diagrams | design document (HLD/LLD), UML class & sequence diagrams |
| **3 Implementation / coding** | write the code, unit-test as written, code review, integrate modules | source code, unit-test results, build |
| **4 Testing** | verification and validation; unit → integration → system → acceptance | test plan & cases, defect log, test report |
| **5 Deployment** | install, data migration, user training, transition, post-deployment review | release package, installation & user manual |
| **6 Maintenance** | corrective (bug), adaptive (new platform), perfective (feature), preventive (refactoring) | change request, updated release, report |

*(Doodle: six boxes in a ring — 1 Requirements analysis, 2 System design, 3 Implementation across the top, then 4 Testing, 5 Deployment, 6 Maintenance (green) across the bottom — each with its red deliverable beneath it (SRS, Design doc + UML, Source code, Test report, Release package, Change request) and a red feedback arrow from maintenance back to requirements.)*

- 💡 **Trick — maintenance kinds:** **CAPP** — **C**orrective = bug · **A**daptive = new OS/platform · **P**erfective = new feature · **P**reventive = stop future bugs. About **60–80% of the life-cycle cost** is spent here.
- 💡 **Trick — cost of a late fix:** the later a defect is caught, the dearer the repair: **×1 → ×5 → ×10 → ×15–50 → ×100**.
- 📌 **TELOS** is worth memorising whole — it is a frequently tested acronym for the feasibility gate.

## 11. Where Does Each Model Place the Phases?

No model deletes a phase. A model **re-orders, repeats, overlaps or fuses** them. That single sentence answers most "compare the models" written questions.

| Model | Phases repeated? | When testing starts | Feedback comes from | Phase emphasised |
|---|---|---|---|---|
| **Waterfall** | no, one pass | after coding | the next phase, late | documentation |
| **V-Model** | no, 4 test levels | **planned** with each design | the paired test level | verification |
| **Prototyping** | requirements twice | on the prototype | the user's reaction to a model | requirements |
| **Incremental** | yes — **whole SDLC per increment** | in every increment | each release | delivery |
| **Spiral** | yes — every loop | in every loop | evaluation per loop | risk analysis |
| **RAD** | fused into one box | continuously, over 90 days | constant, informal | speed and reuse |
| **Big Bang** | none exist | after all is built | the single release | none |

- 💡 **Trick:** each model answers one question. **Waterfall:** "is it finished?" · **V-model:** "is it tested?" · **Prototyping:** "is it the right thing?" · **Incremental:** "is some of it shipped?" · **Spiral:** "is it safe?" · **RAD:** "is it fast?"
- ⚠️ **Trap:** "In which model does **testing begin first**?" — if the option says "at the **design of the unit**", the answer is the **V-model**. "Which model has **no** phases?" → **Big Bang**. "Which repeats the **entire** life cycle?" → **incremental / iterative / spiral**, never waterfall.

## 12. Night-Before-the-Exam Fact Sheet

- **SE** = systematic, disciplined, quantifiable · coined at **NATO, Garmisch, 1968**
- Attributes: **complexity, conformity, changeability, invisibility**
- Goals: a good product · a repeatable process · on time and in budget
- Qualities: correctness, reliability, efficiency, maintainability, portability, usability + integrity, flexibility, testability, reusability
- Framework activities: planning, tracking, risk, QA, configuration, reviews · **ISO/IEC 12207** · **CMM/CMMI** 5 levels
- Patterns: 5 technology + 3 process + 6 practice = **14**
- **Waterfall:** Benington 1956 · **Royce 1970** (published it as a problem)
- **V-model:** requirements→acceptance, system→system, architecture→integration, module→unit
- **Spiral:** **Boehm 1986**, 4 quadrants, risk-driven
- **RAD:** ~**90 days**, small team, GUI, requirements known
- **Big Bang:** **no phases at all**
- SDLC: feasibility, requirements, design, coding, testing, deployment, maintenance · **SRS** = the requirements-phase deliverable
- Maintenance: corrective, adaptive, perfective, preventive · **60–80%** of cost
- Cost of a fix: **×1 → ×5 → ×10 → ×15–50 → ×100**
- Information: quantitative/qualitative, real-time/historical, internal/external, strategic/tactical/operational
- Good information: accurate, relevant, complete, timely, reliable

### Top 12 one-liners for MCQs

1. **SE** was coined at a **1968 NATO** conference (Garmisch).
2. The waterfall is **linear**, one pass.
3. The V-model pairs each phase with a **test level**.
4. The spiral is **risk-driven** (Boehm, 1986).
5. Big Bang has **no defined phases**.
6. The **SRS** is written in the **requirements** phase.
7. Prototyping suits **unclear** needs.
8. Incremental means **working slices**, and increment 1 is the core.
9. RAD requires requirements **already known**.
10. Maintenance is the **largest** single share of life-cycle cost.
11. QA = **reviews + standards**.
12. The Agile Manifesto is dated **2001**.

**Top traps:** Royce did not invent the waterfall as a success formula · prototyping ≠ writing the code twice · iterative ≠ incremental · testing is not "only after coding" (V-model) · correctness cannot be proved in general · maintainability ≠ usability.

**All tricks together:** **C-C-C-I** for software attributes · **CAPP** for maintenance kinds · V-model read **bottom up** · spiral clockwise **ORBP** · the three questions (clear? risky? GUI?) to pick a model · **TELOS** for feasibility · **×1 → ×100** for fix cost.

---

## Practice MCQs (exam pattern, 10 marks)

1. Which model loops plan → risk → build → review? (a) Waterfall (b) V-model (c) Spiral (d) Big Bang
2. The SRS document is prepared in which phase? (a) Analysis & specification (b) Design (c) Coding (d) Maintenance
3. Which model pairs each development phase with a test level? (a) Incremental (b) V-model (c) Prototyping (d) RAD
4. Prototyping is most appropriate when: (a) needs known, fixed (b) a small known change (c) no customer contact (d) needs are unclear
5. "Software Engineering" was coined in 1968 at: (a) Bangalore (b) Garmisch (NATO) (c) Cambridge (d) Tokyo
6. Which model has no formal process at all? (a) Waterfall (b) V-model (c) Incremental (d) Big Bang
7. The Spiral model was proposed by: (a) B. W. Boehm (b) J. Martin (c) K. Beck (d) W. Royce
8. RAD is most suitable for: (a) air-traffic control (b) a small GUI application (c) a new compiler (d) an OS kernel
9. Maintenance is roughly what share of life-cycle cost? (a) 5% (b) 20% (c) 70% (d) 100%
10. A defect fixed after production costs how many times more? (a) 5 (b) 10 (c) 15 (d) 100

**Answer key:** 1-c · 2-a · 3-b · 4-d · 5-b · 6-d · 7-a · 8-b · 9-c · 10-d

## Written Question (10 marks)

An agency must build (i) a payroll system whose rules are fixed by statute, (ii) a citizen portal whose needs are unknown, and (iii) a payment gateway where a security failure is costly. Name and justify the model for each, giving its shape, one strength, one weakness and the phase it emphasises.

**Model answer:**

1. **(i) Payroll → Waterfall, with V-model test levels** *(4)*. Requirements are fixed by statute, so they can be frozen and signed off; a linear, document-driven sequence is the cheapest way to show an auditor that each rule was traced. *Strength:* budgetable and contract-friendly. *Weakness:* a statute change forces expensive rework, since there is no intermediate release. *Phase emphasised:* documentation.
2. **(ii) Portal → Prototyping, delivered incrementally** *(3)*. Needs are unknown, so ambiguity must be killed before the build; a prototype lets the citizen see the service and correct it. Delivering in increments means the first usable release arrives early. *Strength:* user feedback before commitment. *Weakness:* the prototype can be mistaken for the product.
3. **(iii) Gateway → Spiral, risk-driven** *(3)*. Security and availability risks are severe and expensive to discover late, so each loop retires the highest risk first. *Strength:* risk is explicit and front-loaded. *Weakness:* expensive, and it needs competent risk analysts.

**Also practise (written):** ① Name the deliverable of each of the 6 phases. ② Draw the spiral model with its four quadrants and their order. ③ Distinguish iterative from incremental development, with an example of each.

**Before the exam ✓** Can give the IEEE definition and the 1968 origin · Can list the 7 models and draw each shape · Can recite the V-model pairings from module → unit.