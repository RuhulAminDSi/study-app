# Knowledge Representation & Logic: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-knowledge-representation.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-knowledge-representation.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** introduction to old and new AI techniques / **knowledge representation** / **propositional and first order logic** / search techniques in AI / probabilistic reasoning. This notebook covers the two bold lines; search and probabilistic reasoning are the neighbouring lessons of the chapter.

**High-yield:** KR = formal encoding of information for reasoning · the six schemes (logic, semantic network, frame, production rule, script, ontology) · Quillian 1968 · Minsky 1975 · Schank & Abelson 1977 · Robinson 1965 · P→Q is false only when P = T, Q = F · modus ponens and modus tollens · resolution (P∨Q), (¬P∨R) ⇒ (Q∨R) · tautology / satisfiability / contradiction · ∀x (Human(x) → Mortal(x)) and the order of ∀∃ · unification and the MGU · Horn clause = at most one positive literal · forward chaining vs backward chaining.

---

## 1. What is knowledge representation?

- **Knowledge Representation (KR)** is the process of **formally encoding** information about the world in a form an AI system can store and use to **reason, infer and decide**. The knowledge is explicit and machine-processable instead of being hidden inside program code.
- **KR vs data:** KR gives data *structure and meaning*.
- **KR vs AI:** KR is a **part** of AI; AI also searches, learns, plans.
- **KR vs database:** a database *stores*; KR also permits *inference*.
- **Data vs knowledge:** data are raw records; knowledge is data organised so that conclusions can be drawn from it.

| Building block | What it is | Example |
|---|---|---|
| **Fact** | a basic assertion | `Human(Socrates)` |
| **Rule** | a conditional linking facts | `Human(x) → Mortal(x)` |
| **Ontology** | the formal set of concepts and relations in a domain | the class `Dog` with relation `is-a Animal` |
| **Inference** | deriving new knowledge from existing facts and rules | Human(Socrates) ⇒ Mortal(Socrates) |

| Property a good scheme needs | The question it answers |
|---|---|
| **Representational adequacy** | can it describe everything the domain needs? |
| **Inferential adequacy** | can the required conclusions be derived? |
| **Inferential efficiency** | how fast is a conclusion produced? |
| **Acquisitional efficiency** | how cheap is it to add a new fact? |
| **Ease of acquisition** | can a human read, check and correct it? |

- 💡 **Trick:** "**Representation on the left, reasoning on the right.**" KR decides *how knowledge is stored*; the inference engine decides *how it is used*.
- ⚠ **Trap:** KR is not the same as knowledge, nor a database. "Knowledge" here is **declarative** — a statement of what is true — while the procedure that uses it belongs to the inference engine.
- ✍ **Worked example:** KB = fact `Human(Socrates)`, rule `Human(x) → Mortal(x)`. Unify `x` with Socrates, apply the rule, get `Mortal(Socrates)`, then **store the conclusion back** in the base — that loop is inference.

## 2. The knowledge representation schemes

A **KR scheme** is the notation and structure used to encode knowledge. Every scheme is a compromise; the classic comparison has **six** schemes.

| Scheme | Core idea | Strength | Weakness |
|---|---|---|---|
| **Logical** (PL, FOL) | facts and rules as formulas | exact and provable | verbose, no partial knowledge |
| **Semantic network** | nodes = concepts, arcs = relations | facts inherit automatically | no formal semantics, cannot prove |
| **Frame** | a stereotyped object: slots, values, facets | handles defaults and exceptions | rigid and verbose, no computation |
| **Production rule** | IF–THEN rules on a working memory | modular, easy to extend | slow, needs a conflict strategy |
| **Script** | a stereotyped sequence of events | reads situations well | cannot compute, no surprises |
| **Ontology** | axioms over classes, vocabulary | reuse and consistency | expensive to build and maintain |

- **Ontologies** are not a sixth cousin of the others: an ontology is the **vocabulary plus the constraints** the others are written in. Semantic networks and ontologies are the same idea at two scales — an early AI representation, and the machinery of the Semantic Web (RDF, OWL) and of modern knowledge graphs. Frames are the ancestor of every class-based object model; production rules of every expert system.
- 💡 **Trick:** match the *question* to the scheme — is it true? → logic · how related? → net · what does it have? → frame · what if…? → production rule · in what order? → script · what vocabulary? → ontology.
- ⚠ **Trap:** a script is **not** a plan (a plan is what this agent intends) and **not** a production rule (a rule is a guarantee).
- ✍ **Worked example:** "birds fly" → **frame** (default + exception penguin). "if temperature > 100 °C then alarm" → **production rule**. "enter → order → eat → pay → leave" → **script**. "if it rains the ground is wet" → **propositional logic**. "dog is-a animal" → **semantic network**.

## 3. Semantic networks and inheritance

- A **semantic network** is a **directed graph** whose **nodes are objects, concepts, events or properties** and whose **labelled arcs are the relations between them**. Introduced by **M. R. Quillian, 1968** as a model of associative memory; the direct ancestor of the knowledge graph.

| Arc family | Typical labels |
|---|---|
| **Structural** | IS-A, HAS-A, PART-OF, AKO |
| **Semantic** | synonym, antonym, hyponym |
| **Procedural** | arcs attached to an action |

- **Inheritance** lets an object take the properties of its class without restating them. Two kinds: **default inheritance** (assume the general case unless told otherwise) and **specific inheritance** (an override always wins). Inheritance is **transitive** — it travels down the whole chain.

| Property | Semantic network |
|---|---|
| Facts inherit for free | **yes** — add a property to a class and every subclass gains it |
| Formal semantics | **none** — the arcs have no logical meaning |
| Consistency | not guaranteed — two arcs can contradict |
| Inference | traversal only: **inheritance** and graph search |

- 💡 **Trick:** "**IS-A is a class arrow, HAS-A is an ownership arrow.**" You may say "a dog IS-A mammal"; never "a mammal IS-A dog".
- ⚠ **Trap:** a semantic network is **not** a truth table and **not** a production system — it answers "what is related to what", not "what follows from what". It cannot **prove** anything.
- ✍ **Worked example:** `Animal → breathes = true`, `Mammal IS-A Animal`, `Dog IS-A Mammal`, `Fido IS-A Dog`, plus `Fido → legs = 4`. Ask for `Fido → breathes`: the engine walks **Fido → Dog → Mammal → Animal** and answers **true** without Fido storing it. Now add `Fido → legs = 3` — the **specific** value 3 must win, which is exactly the conflict-resolution problem frames solve explicitly.

## 4. Frames and scripts

- **Frame — Minsky, 1975:** a data structure describing a **stereotyped object, class or situation** as a named set of **slots**. Each slot holds a value, a **facet** (default, range, if-needed procedure) or a link to another frame. A frame for a class is a **schema**; filling one in gives an **instance**.
- **Script — Schank & Abelson, 1977:** a stereotyped **ordered sequence of events** that normally takes place in a given situation. It stores what is *typical*, so a story becomes predictable and cheap to understand.
- The **five parts of a script:** ① initial conditions ② a sequence of states and events ③ transitions, each with a condition so steps can be skipped ④ resulting conditions ⑤ **props** — the roles played by objects (customer, waiter, food). A frame instead has a **name, slots, values and facets** — no time line at all.

| Point of comparison | Frame | Script |
|---|---|---|
| What it describes | an **object or class** and its attributes | a **situation** and its events in order |
| Internal structure | name + slots + values + facets | initial + states + transitions + props |
| Organised by | a **class / instance** hierarchy | a **time line** of states |
| Handles exceptions | yes — **default overridden** | partly — a step may be skipped |

- 💡 **Trick:** "**Frame = furniture, script = theatre.**" A frame is a thing you point at; a script is something that happens to it in a fixed order. Facets live only in frames; props live only in scripts.
- ⚠ **Trap:** a frame is not a record format with typed columns — a slot may hold a value, a **default**, a range or a **procedure**. A script is **not** a production rule: a rule is a guarantee, a script is only an expectation.
- ✍ **Worked example:** open the frame *CAR* and ask for the colour of "my car" — nothing is filled, so the engine takes the **default facet** and answers *white*. Ask for the engine of a scrapped car and the **if-needed** procedure runs instead of returning a value. That is why frames are said to carry **procedural attachments**.

## 5. Propositional logic: syntax and connectives

- **Propositional (sentential) logic** treats every whole statement as a single **proposition** that is either true (T) or false (F), joined by **logical connectives**. An **atomic** proposition is a single letter P; a **compound** proposition is built from atoms and connectives.

| Connective | Symbol | True exactly when |
|---|---|---|
| negation, NOT | ¬P | P is false |
| conjunction, AND | P ∧ Q | both P and Q are true |
| disjunction, OR (inclusive) | P ∨ Q | at least one of P, Q is true |
| implication, IF–THEN | P → Q | **anything except P true and Q false** |
| biconditional, IFF | P ↔ Q | P and Q have the same truth value |

| P | Q | P ∧ Q | P ∨ Q | ¬P | P → Q | P ↔ Q |
|---|---|---|---|---|---|---|
| T | T | T | T | F | T | T |
| T | F | **F** | T | F | **F** | F |
| F | T | F | T | T | T | F |
| F | F | F | F | T | T | T |

- **Precedence, tightest first:** ¬ → ∧ → ∨ → → → ↔. Brackets beat everything: ¬(P ∧ Q) is **not** the same as (¬P) ∧ Q.
- **Limitation:** propositional logic **cannot** express variables, quantifiers or relations between objects. Nothing is shared between "Socrates is human" and "Plato is human" — the base grows as a flat list and inference cannot generalise.
- 💡 **Trick:** "**→ only looks backwards once.**" P → Q is false in exactly one row, so read it as "everything is fine *unless* P happens and Q does not." Write P → Q as **¬P ∨ Q** and it becomes obvious.
- ⚠ **Trap:** OR is **inclusive**: P ∨ P = P, not P. P → Q is **not** P ← Q. "P is false and Q is true" makes P → Q **true**, not false. A proposition is an entire sentence — you may not split "Socrates is a man" into two.
- ✍ **Worked example:** "if it rains and I carry an umbrella the ground stays dry" with R = rain, U = umbrella, D = ground dry is **(R ∧ U) → D**. If R = T, U = T, D = F the implication is **false** — the one and only combination that breaks it. If R = F the formula is true whatever else happens: an implication is **not** a biconditional.

## 6. Validity, satisfiability and inference rules

- A **tautology (valid)** formula is true for **every** assignment · a **contradiction (unsatisfiable)** is false for every assignment · a **satisfiable** formula is true for **at least one** assignment. "P ⊨ Q" means the truth table of **P → Q** is a tautology. n propositions need **2ⁿ rows**.

| Rule of inference | From | Conclude |
|---|---|---|
| Modus ponens | P, P → Q | **Q** |
| Modus tollens | ¬Q, P → Q | **¬P** |
| Hypothetical syllogism | P → Q, Q → R | **P → R** |
| Disjunctive syllogism | P ∨ Q, ¬P | **Q** |
| Addition | P | **P ∨ Q** |
| Simplification | P ∧ Q | **P** |
| Resolution | P ∨ Q, ¬P ∨ R | **Q ∨ R** |

- ✍ **Worked example 1 — classify four formulas:** (a) `P ∨ ¬P` — T in every row ⟹ **tautology**. (b) `P ∧ ¬P` — F in every row ⟹ **contradiction**. (c) `P → (Q ∨ ¬Q)` — the consequent is always true ⟹ tautology. (d) `(P ∨ Q) ∧ ¬P` — true when P = F, Q = T ⟹ satisfiable but not valid.
- ✍ **Worked example 2 — modus tollens in the clinic:** from "if the patient took the drug, the rash clears" and "the rash has not cleared", modus tollens gives **¬P**: the patient did not take the drug.
- 💡 **Trick:** "**Tautology always, satisfiable sometimes, contradiction never.**"
- ⚠ **Trap:** "valid" and "true" are **not** the same: valid only if *every* assignment makes it true. P ⊨ Q does **not** give Q — it only says Q would be true if P were true.
- **Why resolution wins:** modus ponens needs a matching fact at every step; resolution needs only two clauses, and it alone works on disjunctions — hence automated theorem proving (Robinson, **1965**).

## 7. First-order logic, predicates and quantifiers

- **First-order logic (FOL)** extends propositional logic with **objects, predicates over them, functions and quantifiers**. A formula is built from atomic formulas `P(t₁,…,tₙ)` using connectives and quantifiers.

| Component | What it is | Example |
|---|---|---|
| Constant | one named individual | Socrates |
| Variable | an arbitrary individual | x, y |
| Function | individual → individual | FatherOf(x) |
| Predicate | property or n-place relation | Human(x), Loves(a,b) |
| Quantifier | ranges the variable | ∀x, ∃y |

- **∀** "for **all** x …" · **∃** "there **exists** x such that …". **Their order matters.** A **WFF** is any well-formed formula; a **sentence** is a WFF with no free variables.

| English sentence | First-order form | Feature | Propositional | First-order |
|---|---|---|---|---|
| All humans are mortal | ∀x (Human(x) → Mortal(x)) | Talks about | whole statements | objects, relations |
| Someone loves everyone | ∃x ∀y Loves(x, y) | Quantifiers | **none** | **∀ and ∃** |
| Everyone loves someone | ∀x ∃y Loves(x, y) | Cost | cheap, 2ⁿ rows | **expensive** |

- 💡 **Trick:** "**∀ says every, ∃ says at least one.**" The **→ inside** the ∀ is what keeps "all humans are mortal" true even when some x is not a human: Human(x) → Mortal(x) never asserts Mortality of a non-human.
- ⚠ **Trap:** ∀x P(x) is **not** P(a). And "all humans are mortal" must **not** be written ∀x (Human(x) ∧ Mortal(x)) — that would claim everybody is both human and mortal.
- ✍ **Worked example:** committee rule "every member has at least one car" = ∀x (Member(x) → ∃y (Car(y) ∧ Owns(x,y))). The two quantifiers can pick **different** cars for **different** members, so the base stays consistent — but as soon as the committee shrinks to **one member and no cars**, ∀x∃y fails while its negation is still available, which is exactly the case a resolution engine detects automatically.

## 8. Unification, resolution and Horn clauses

- **Unification** is finding a substitution for the variables of two atoms so that they become identical. The result is the **most general unifier (MGU)**; when no substitution exists the two atoms **clash**.

| Atom pair | Most general unifier |
|---|---|
| `Loves(x, Bob)` , `Loves(Alice, y)` | {x↦Alice, y↦Bob} |
| `Human(x)` , `Human(Socrates)` | {x↦Socrates} |
| `P(x)` , `Q(y)` | **clash — none** |
| `P(x, y)` , `P(y, z)` | {y↦x, z↦x} |

- **Algorithm:** walk the atoms left to right; equal constants → go on; a variable on either side → **bind it to the other term**; different constants → clash; never bind a variable to a term that already contains it (occurs check) — X = f(X) has no solution.
- **Refutation by resolution:** to prove goal φ, convert every statement to **clause form**, add the **negated** goal, and resolve clauses repeatedly. Two clauses that resolve to the **empty clause** prove the goal. Sound, and complete for FOL by Robinson's theorem.

✍ **Worked example — prove Mortal(Socrates) by resolution**

1. KB: `Human(Socrates)` · `Human(x) → Mortal(x)`
2. Clause form: **C₁ = Human(Socrates)**, **C₂ = ¬Human(x) ∨ Mortal(x)**; add the negated goal **C₃ = ¬Mortal(Socrates)**
3. Resolve C₁ with C₂ — `Human` and `¬Human` disappear: **C₄ = Mortal(Socrates)**
4. Resolve C₄ with C₃ — `Mortal` and `¬Mortal` disappear ⟹ **the empty clause**, so the goal is proved

- 💡 **Trick:** "**Prove by not-proving.**" Refutation adds ¬goal and searches for a contradiction. Resolution is the only rule that consumes a **disjunction**, and every formula can be turned into a disjunction of disjunctions.
- ⚠ **Trap:** resolving (P ∨ Q) with (¬P ∨ R) gives **Q ∨ R** — you drop the **complementary** pair P, ¬P and keep both remaining literals joined by **∨**, never ∧. Horn clauses cannot express a disjunction in the head at all.
- **Horn clauses:** a Horn clause has **at most one positive literal**, i.e. H ← B₁ ∧ B₂ ∧ … ∧ Bₙ. Three consequences: **forward chaining is complete** for Horn knowledge · **backward chaining is complete** as well · the logic is **monotonic** — adding facts never removes conclusions. Horn logic is exactly what Datalog and every production system run on.

## 9. Forward and backward chaining

- **Forward chaining** — **data-driven, bottom-up.** Start from the facts, fire every rule whose antecedents are satisfied, and add each conclusion to the working memory. Repeat until nothing fires.
- **Backward chaining** — **goal-driven, top-down.** Start from the goal, find the rule whose head matches it, and recurse on that rule's antecedents until only facts remain.

| Point of comparison | Forward chaining | Backward chaining |
|---|---|---|
| Starts from | the facts (data-driven) | the goal (goal-driven) |
| Answers | **everything** derivable | **only** what the goal needs |
| Cost | may explode: many firings, irrelevant facts | cheap when the goal is specific |
| Explainability | full — you can print the whole chain | partial — only the proof needed |
| Best when | monitoring, all facts known, many questions | diagnosis, one clear question, missing facts |
| Complete for | Horn knowledge | Horn knowledge |

- ⚠ **Trap:** backward chaining does **not** invent facts — if the knowledge base does not support the goal it simply **fails**; it never guesses. When several rules fire at once the engine needs a **conflict-resolution strategy** (breadth-first, depth-first, most-specific, most-recent).
- 💡 **Trick:** "**Forward looks up, backward looks down.**" Forward climbs from data to conclusions; backward descends from the question to the data. "Forward is thorough, backward is targeted" is the one-line answer to the written question.
- ✍ **Worked example:** (a) a bank flagging every transaction above 10 000 taka *as it happens* — all facts known, no single question → **forward**; (b) a doctor asking "diagnosis?" and needing one justified answer from thousands of symptoms → **backward**; (c) a KB containing P ∨ Q, which is not Horn — neither chaining is complete, so **resolution**.

## Practice MCQs

1. Knowledge representation is: (a) a language (b) formal encoding for reasoning (c) a search algorithm (d) a database engine
2. A semantic network uses: (a) nodes and labelled arcs (b) truth-table rows (c) IF–THEN rules only (d) slot tables only
3. Frames are associated with: (a) Quillian (b) Robinson (c) Schank (d) Minsky
4. P → Q is false only when: (a) P false, Q true (b) both false (c) P true, Q false (d) both true
5. From P and P → Q, concluding Q uses: (a) modus tollens (b) modus ponens (c) hypothetical syllogism (d) disjunctive syllogism
6. P → Q is equivalent to: (a) Q → P (b) ¬P → ¬Q (c) ¬Q → ¬P (d) P ∧ ¬Q
7. Resolving (P ∨ Q) with (¬P ∨ R) gives: (a) (Q ∨ R) (b) (P ∨ R) (c) (¬Q ∨ R) (d) (Q ∧ R)
8. "All men are mortal" is: (a) ∃x (Man(x) → Mortal(x)) (b) ∀x (Man(x) → Mortal(x)) (c) ∀x (Man(x) ∧ Mortal(x)) (d) ∃x Man(x) ∧ ∃x Mortal(x)
9. A Horn clause has at most: (a) one negative literal (b) one positive literal (c) one variable (d) one predicate
10. Forward chaining begins from: (a) the goal (b) the rules (c) the facts in memory (d) the refutation

**Answer key:** 1-b · 2-a · 3-d · 4-c · 5-b · 6-c · 7-a · 8-b · 9-b · 10-c

## Written question (10 marks)

Define knowledge representation and name four representation schemes with one strength and one weakness each. Then for the knowledge base *Human(Socrates)* and *Human(x) → Mortal(x)*: (a) write the first-order form, (b) convert it to clause form, (c) use resolution to prove Mortal(Socrates), (d) state whether forward or backward chaining is the better choice here and why.

**Model answer:**

1. **Definition and schemes (3 marks):** KR is the formal encoding of information about the world so that an AI system can reason over it. Schemes: logic (exact, but no partial knowledge) · semantic network (inherits facts, but no formal semantics) · frame (defaults and exceptions, but rigid) · production rules (modular, but slow). Scripts and ontologies may be named for the fifth mark.
2. **First-order form (1 mark):** `Human(Socrates)` and `∀x (Human(x) → Mortal(x))`.
3. **Clause form (2 marks):** eliminate → by writing `¬Human(x) ∨ Mortal(x)`, drop the quantifier: C₁ = Human(Socrates), C₂ = ¬Human(x) ∨ Mortal(x).
4. **Resolution (3 marks):** add the negated goal C₃ = ¬Mortal(Socrates); resolve C₁ with C₂ → Mortal(Socrates); resolve that with C₃ → the empty clause, so the goal is proved.
5. **Direction (1 mark):** both are complete for this Horn knowledge base; backward chaining is preferred because a single question is being asked, so only the facts on the path to the goal are examined.

## Night-before one-liners

Semantic networks: **Quillian, 1968** · frames: **Minsky, 1975** · scripts: **Schank & Abelson, 1977** · resolution: **Robinson, 1965** · IS-A only goes subclass → superclass · a semantic network has **no formal semantics** · a frame carries **defaults and procedures** · a script stores only what **usually** happens · forward chaining: data-driven, **bottom-up** · backward chaining: goal-driven, **top-down** · resolution is **complete** for FOL by Robinson · Horn = **at most one positive literal** · P → Q is true when P is false · OR is inclusive · resolution keeps **∨**, never ∧ · modus tollens needs ¬Q, not P · ∃x ∀y ≠ ∀x ∃y · "all humans are mortal" uses **→** inside ∀, not ∧.