# Set Theory, Relations & Functions: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/12-discrete-mathematics/dm1.en.html` (handwritten-style PDF: `notes/pdf/12-discrete-mathematics/dm1.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Discrete Mathematics):** "Discrete Mathematics, Theory of Computation and Basic Graph Theory: **Set theory**; **Relations**; **Functions**; Graph theory; Propositional calculus and predicate calculus; Mathematical reasoning: induction, contradiction and recursion; Counting; Principles of inclusion and exclusion; Recurrence relations; Algebraic structures: rings and groups." This notebook covers the first three items; graph theory, predicate calculus, counting and algebraic structures have their own lessons in the chapter.

**High-yield:** ① 4 elements ⇒ 2⁴ = **16** subsets ② |A| = n ⇒ 2ⁿ subsets; C(n,k) of size k ③ |A ∪ B| = |A| + |B| − |A ∩ B| ④ De Morgan: (A ∪ B)′ = A′ ∩ B′ ⑤ a relation is a **subset** of A × B ⑥ 3-element set ⇒ 2⁹ = **512** relations ⑦ injective ⇒ |A| ≤ |B|; onto ⇒ |A| ≥ |B| ⑧ functions A→B: |B|^|A|; one-to-one: n!/(n−m)! ⑨ (f ∘ g)(x) = f(g(x)) — f **after** g ⑩ bijective ⇔ f⁻¹ exists.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. What is a set; the two forms — p. 2 · 2. Counting subsets: 2ⁿ and C(n,k) — p. 2 · 3. Types of sets, subsets & the power set — p. 3 · 4. Set operations and the laws — p. 4 · 5. Relations are subsets of A × B — p. 5 · 6. The six properties, with counter-examples — p. 6 · 7. Equivalence relations and partial orders — p. 7 · 8. Functions: domain, codomain, range — p. 8 · 9. Composition, inverse, identity and counting — p. 9 · 10. Night-before sheet — p. 10 · 11. Practice MCQs + written — p. 11.

---

## 1. What Is a Set?

A **set** is a well-defined collection of distinct objects, its **elements** or **members**. "Well-defined" means we can decide unambiguously **yes or no** whether an object belongs. The objects may be numbers, letters, points, or even other sets.

| Form | It does what | Example |
|---|---|---|
| **Roster** (tabular) | lists **every** element one by one | A = {2, 4, 6, 8} |
| **Set-builder** | states the **property** the elements share | A = {x \| x even, x < 10} |

**Order and repetition are irrelevant:** {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 2}, but (1, 2) ≠ (2, 1) — **ordered pairs do care**. |A| is read "the **cardinality** of A": |{a, b}| = 2.

- ⚠️ **Trap:** **{even numbers}** is **not** a set — it is not well defined until you say which evens. That clause is the whole definition and it is asked often.
- 💡 **Trick:** a set is a **basket with a label**: the label decides who is in, and the order of picking never changes the contents.

## 2. Counting Subsets: 2ⁿ and C(n,k)

**The counting argument.** Walk through the **n** elements one at a time; each has exactly **two choices — put it in, or leave it out**. Two choices, n times, gives **2ⁿ** subsets, counting both **∅ and A itself**.

| n | \|P(A)\| = 2ⁿ | of size 2 | proper subsets |
|---|---|---|---|
| 0 (A = ∅) | **1** | 0 | 0 |
| 2 | 4 | 1 | 3 |
| 3 | 8 | 3 | 7 |
| **4** | **16** | **6** | **15** |
| 5 | 32 | 10 | 31 |

✍ **Worked example.** "A set A has **4 elements**. How many subsets?" → **16**, not 8 and not 4. **Proper** subsets → **15**; excluding the empty set as well → **14**. Subsets of size k = C(n,k) = n!/k!(n−k)!; for n = 4 the counts are 4 + 6 + 4 + 1 = 15, and adding ∅ gives 16 ✓

*(Doodle: six bars for n = 0 … 5, heights 1, 2, 4, 8, 16, 32 — every extra element doubles the count; 2ⁿ grows faster than anything else in this lesson.)*

## 3. Types of Sets, Subsets & the Power Set

| Name | Definition | Example |
|---|---|---|
| **Finite** / **infinite** | a definite countable number of elements, \|A\| = n / elements never run out | {1, 2, 3} / ℕ, ℤ, ℚ, ℝ |
| **Null / empty** set ∅ | **no** elements at all; also written { } or φ | ∅ = {x \| 1 = 0} |
| **Singleton** set | **exactly one** element | {a} |
| **Equal** sets | the same elements, in any order: A = B | {1, 2, 3} = {3, 2, 1} |
| **Subset** A ⊆ B | every element of A is in B | {1, 2} ⊆ {1, 2, 3} |
| **Proper** subset A ⊂ B | A ⊆ B **and** A ≠ B | {1, 2} ⊂ {1, 2, 3} |
| **Universal** set U | every element under discussion belongs to it | U = {1, 2, 3, 4, 5, 6} |
| **Complement** A′ | everything in U that is **not** in A: A′ = U − A | U = {1,2,3,4}, A = {1,2} ⇒ {3,4} |

**Power set.** P(A) = { X | X ⊆ A } — the set of **all** subsets of A. Then **|P(A)| = 2^|A|** and, for every finite A, **|P(A)| > |A|** (Cantor). Edge cases: |P(∅)| = 1 and P({a}) = { ∅, {a} }, so P(A) itself is a set and P(P(A)) exists too.

- 💡 **Trick:** **⊆ is "all in", ⊂ is "all in and more outside."** Every set is a subset of itself (A ⊆ A) and ∅ is a subset of every set (∅ ⊆ A): ∅ is the smallest subset, U the largest.
- ✍ **Worked example (A = {1, 2, 3, 4}).** total 16 · exactly 2 elements → 6 · exactly 3 → 4 · proper → 15 · proper and non-empty → 14. Since |P(A)| = 16 > 4, A ⊂ P(A) strictly, and the largest subset is A itself.
- ⚠️ **Trap:** (i) ∅ ⊂ {x} holds, but {x} ⊂ ∅ is **false** — ∅ has no elements to miss. (ii) The empty set is **not** equal to {0} or {∅}. (iii) "Subset" never means "proper subset" in ordinary exam wording. (iv) "Equal sets" means exactly the same elements, A = B — do not confuse it with ⊆.
- 📌 **IT link:** the power set is not an exam abstraction: an **n-bit flag word has exactly 2ⁿ settings**, and "which of these 32 permissions is on?" is a power-set question in disguise. The same count bounds the number of distinct result shapes of a query with n boolean predicates.

*(Doodle: nested boxes U ⊃ B ⊃ A with a green dot inside A marking the singleton {a}; the same picture read the other way round says B ⊃ A.)*

## 4. Set Operations and the Laws of Set Algebra

| Operation | Symbol & definition | Worked instance |
|---|---|---|
| **Union** | A ∪ B = {x \| x ∈ A **or** x ∈ B} | {1,2} ∪ {2,3} = {1,2,3} |
| **Intersection** | A ∩ B = {x \| x ∈ A **and** x ∈ B} | {1,2} ∩ {2,3} = {2} |
| **Difference** | A − B = {x \| x ∈ A and x ∉ B} | {1,2,3} − {2,3} = {1} |
| **Complement** | A′ = {x \| x ∈ U and x ∉ A} — U − A | U = {1,2,3,4}, A = {1,2} ⇒ {3,4} |
| **Cartesian product** | A × B = {(a, b) \| a ∈ A, b ∈ B} | {1,2} × {x,y} = {(1,x),(1,y),(2,x),(2,y)} |

| Law | Statement |
|---|---|
| Commutative | A ∪ B = B ∪ A · A ∩ B = B ∩ A |
| Associative | (A ∪ B) ∪ C = A ∪ (B ∪ C) · same for ∩ |
| Distributive | A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) |
| Identity | A ∪ ∅ = A · A ∩ U = A |
| Complement | A ∪ A′ = U · A ∩ A′ = ∅ |
| Idempotent | A ∪ A = A · A ∩ A = A |
| Involution | (A′)′ = A |
| Absorption | A ∪ (A ∩ B) = A · A ∩ (A ∪ B) = A |
| **De Morgan** | **(A ∪ B)′ = A′ ∩ B′ · (A ∩ B)′ = A′ ∪ B′** |

**Cardinality formulas.** **|A ∪ B| = |A| + |B| − |A ∩ B|**. If A ∩ B = ∅ (disjoint) this collapses to **|A| + |B|**. Generalising to three sets gives inclusion–exclusion, a separate lesson.

✍ **Simplify with the laws.** (A ∪ B)′ = A′ ∩ B′ by De Morgan, and ((A ∪ B)′)′ returns to A ∪ B by involution. Also A − B = A ∩ B′, so {1,2,3} − {2,3} = {1,2,3} ∩ {1} = {1}.

- ⚠️ **Trap:** A − B and B − A are **different sets**, so difference is **not** commutative: {1,2,3} − {2,3} = {1} but {2,3} − {1,2,3} = ∅. And A × B ≠ B × A as sets, though |A × B| = |B × A|.

*(Doodle: two circles inside a rectangle U, the lens between them shaded red and labelled A ∩ B, with A − B, B − A and (A ∪ B)′ marked in the remaining regions.)*

## 5. A Relation Is a Subset of A × B

A **relation R from A to B** is **any subset of A × B**, written **R ⊆ A × B**. Its elements are **ordered pairs** (a, b) with a ∈ A, b ∈ B, read "a is related to b." If R ⊆ A × A it is a **binary relation on A**; that is the case whenever both sets are the same.

**The two counting results**

- **|A × B| = |A| · |B|** — the pairs form a full grid, m rows by n columns.
- **Relations A→B = 2^(|A|·|B|)** — a relation is **any** subset, and a set of m·n elements has 2^(m·n) subsets.
- On a single set with n elements: |A × A| = n², so **2^(n²) binary relations**.

✍ **The counts that always appear.** (a) |A| = 3: |A × A| = 9, so **2⁹ = 512** relations on A. (b) |A| = 3, |B| = 4: |A × B| = 12, so 2¹² = **4096** relations A→B. (c) |A| = 4: **2¹⁶ = 65 536**. The count explodes because the exponent is n², not n.

⚠️ **Trap:** **not every relation is a function.** A relation may contain (1, x) **and** (1, y) for the same first element; a function may leave part of the codomain untouched. And R ⊆ A × B does **not** mean R = A × B — the universal relation is only one of the 2^(m·n) choices.

### Three ways to write the same relation

1. **Set of ordered pairs** — R = {(1, x), (2, y)}.
2. **Matrix** M_R = [m_ij], rows = A, columns = B, m_ij = 1 if (a_i, b_j) ∈ R, else 0.
3. **Digraph** — one vertex per element of A and one per element of B, with a directed edge a_i → b_j for every pair in R. For a relation **on** A there is a single vertex set, and (a, a) is drawn as a **self-loop**.

✍ **Matrix form.** For R = {(1,x), (2,y)} with rows 1, 2, 3 and columns x, y: M_R = [[1,0],[0,1],[0,0]]. A 1 in row i, column j says exactly that (a_i, b_j) ∈ R. On a relation **on** A the same array serves for rows and columns, so **the diagonal is the reflexivity test**: all ones means reflexive, any zero means not.

- 📌 **IT link:** two separate sets give a relation "from A to B", one set gives a relation "on A" — the wording matters in questions. In a database a join condition is a **relation** between two tables, and a foreign key declares one. A functional dependency says the relation is injective, which is exactly "no two rows share a key."

*(Doodle: a 3 × 2 grid — rows 1, 2, 3 of A against columns x, y of B — with the two cells of R = {(1,x), (2,y)} marked in green; the grid has 6 cells, so 2⁶ = 64 relations A→B.)*

## 6. The Six Properties, with a Counter-example for Each

All examples on A = {1, 2, 3}.

| Property | Exact statement | Counter-example |
|---|---|---|
| **Reflexive** | (a, a) ∈ R for **every** a ∈ A | R = {(1,2),(2,3)} — (3,3) is missing |
| **Not reflexive** (irreflexive) | (a, a) ∉ R for every a ∈ A | R = {(1,1)} — (2,2) is present |
| **Symmetric** | (a, b) ∈ R ⇒ (b, a) ∈ R | R = {(1,2),(1,1)} — (2,1) is missing |
| **Antisymmetric** | (a, b) ∈ R and (b, a) ∈ R ⇒ a = b | R = {(1,2),(2,1)} — both ways, yet 1 ≠ 2 |
| **Transitive** | (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R | R = {(1,2),(2,3)} — forces (1,3), missing |
| **Asymmetric** | (a, b) ∈ R and a ≠ b ⇒ (b, a) ∉ R | R = {(1,2),(2,1)} — symmetry holds instead |

| Relation | Refl | Sym | Anti | Trans |
|---|---|---|---|---|
| ∅ on a non-empty A | ✗ | ✓ | ✓ | ✓ |
| A × A (universal) | ✓ | ✓ | ✗ | ✓ |
| {(a, a) \| a ∈ A} (identity) | ✓ | ✓ | ✓ | ✓ |
| {(a, b) \| a < b} on ℕ | ✗ | ✗ | ✓ | ✓ |
| {(a, b) \| a divides b} on ℤ⁺ | ✓ | ✗ | ✓ | ✓ |

- ⚠️ **The distinction that loses marks:** **symmetric** and **antisymmetric** are **not opposites** and neither implies the other. R = {(1,2),(2,1)} fails antisymmetry but **is** symmetric. R = {(1,2)} is antisymmetric yet **not** symmetric. Only "asymmetric" is the true opposite of "symmetric".
- 💡 **Trick:** **symmetric = the arrow reverses; antisymmetric = at most one arrow per unordered pair.** Two more worth memorising: ∅ on a non-empty A is symmetric, antisymmetric and transitive but **not** reflexive, while A × A is reflexive, symmetric and transitive but **not** antisymmetric. The identity relation is the only one that passes all four.

✍ **Checking property by property.** R = {(1,1),(2,2),(3,3),(1,2),(2,3),(1,3)}. Reflexive: three loops ✓. Symmetric: (1,2) present, (2,1) absent ✗. Antisymmetric: no pair appears both ways ✓. Transitive: (1,2),(2,3) gives (1,3) ✓. So it is a **partial order**, not an equivalence relation (symmetry fails).

*(Doodle: three yellow vertices 1, 2, 3 with a red self-loop at each and blue arrows 1 → 2 and 2 → 1, captioned "loops everywhere + 1↔2 ⇒ equivalence". Reflexivity = a loop at every vertex; transitivity = every path of length two has a shortcut arrow.)*

## 7. Equivalence Relations and Partial Orders

An **equivalence relation** is **reflexive + symmetric + transitive**, nothing more. Its classes [a] = { x ∈ A | (a, x) ∈ R } are non-empty, pairwise disjoint, and their union is A. **Equivalence relation ↔ partition, one-to-one.**

✍ **R = {(1,1),(2,2),(3,3),(1,2),(2,1)} on {1,2,3}.** Reflexive: three loops present. Symmetric: (1,2) and (2,1) both present. Transitive: (1,2),(2,1) forces (1,1) ✓ and (2,1),(1,2) forces (2,2) ✓. So R is an **equivalence relation** with classes **{1, 2}** and **{3}** — and it is **not** a partial order, since (1,2) and (2,1) with 1 ≠ 2 break antisymmetry.

**Why the classes give a partition.** Build [a] for any a ∈ A. No class is empty (reflexivity); two classes never overlap (otherwise (a, b) and (b, a) would both be in R and symmetry together with antisymmetry would force a = b); every element falls into at least one class (transitivity). Conversely, from any partition, "related iff in the same block" is an equivalence relation — so the two counts are always equal.

**Equivalence relations on a small set = Bell numbers.** They correspond one-to-one to the partitions, so the count is B_n: **B₁ = 1 · B₂ = 2 · B₃ = 5 · B₄ = 15 · B₅ = 52**. A 4-element set gives 15 = 1 (one block) + 7 (two) + 6 (three) + 1 (four).

A **partial order (poset)** is **reflexive + antisymmetric + transitive**. Add "every two elements are comparable" and you get a **total order**. The Hasse diagram drops the loops and keeps only the **covering** arrows upward.

✍ **Congruence mod 3 on ℤ.** a R b iff 3 divides (a − b). Reflexive: a − a = 0 = 3·0. Symmetric: a − b = 3m ⇒ b − a = 3(−m). Transitive: 3m + 3k = 3(m + k). Classes [0] = {…, −6, 0, 3, 6, …}, [1] = {…, −2, 1, 4, 7, …}, [2] = {…, −1, 2, 5, 8, …} — disjoint, and their union is ℤ.

- 💡 **Trick:** both are named for what they do — **E**quivalence lumps equal-looking things into **classes**; a partial order gives **P**artial **O**rdering, where some things are ranked and others are not comparable. **⊆ on P(A) is always a partial order** — the standard example.
- ⚠️ **Trap:** a relation is **both** an equivalence relation and a partial order only when every class is a singleton, i.e. R is the identity relation. And "not symmetric" does **not** make a relation antisymmetric — antisymmetry is a separate test, not a negation.

*(Doodles: two green rounded blocks {1, 2} and {3, 4} side by side captioned "a partition ⇒ exactly one equivalence relation"; and a small Hasse diagram of P({1,2}) with ∅ on top, {1} and {2} below and no arrow between them, captioned "{1} and {2} are not comparable".)*

## 8. Functions: Domain, Codomain, Range

A **function** f: A → B is a relation from A to B in which **every element of A appears exactly once as the first component of a pair**. Equivalently, (a₁, b₁), (a₂, b₂) ∈ R with a₁ = a₂ force b₁ = b₂. Nothing is said about how often an element of B is hit.

| Name | It is | In code |
|---|---|---|
| **Domain** | the whole set A the function is declared on | every x that must be handled |
| **Codomain** | the declared target set B | the set the signature promises |
| **Range** / image | f(A) = { f(a) \| a ∈ A } ⊆ B — only the values actually taken | the values you can really observe |
| **Constant** function | one fixed value for every input; the range is a singleton | the same constant returned always |
| **Total / partial** | total = every domain element has an image; partial may not | no null |

| Name | Test | Plain words |
|---|---|---|
| **Injective** (one-to-one) | f(a₁) = f(a₂) ⇒ a₁ = a₂ | no two inputs share an output |
| **Surjective** (onto) | ∀ b ∈ B ∃ a ∈ A : f(a) = b | no output is left unused |
| **Bijective** | both of the above | a perfect pairing |

**The counting facts for finite sets**

- **|A| ≤ |B|** is **necessary** for an injective A→B.
- **|A| ≥ |B|** is **necessary** for a surjective A→B.
- A bijection needs **|A| = |B|**, and then range = codomain.

So if |A| > |B| a function still exists but it **cannot** be injective; if |A| < |B| it **cannot** be surjective.

- ⚠️ **Trap:** **injective and surjective are independent.** f: {1,2,3} → {x,y} must be onto but can never be one-to-one. A **constant** function is onto only when |B| = 1, and one-to-one only when |A| = 1.

*(Doodle: two mapping diagrams — A = {1,2} into B = {x,y,z} with two green arrows (injective, not onto), and A = {1,2,3} into B = {x,y} with three arrows, two of which land on x (onto, not injective).)*

## 9. Composition, Inverse, Identity — and Counting Functions

**Composition.** Let g: A → B and f: B → C. Then **(f ∘ g)(x) = f(g(x))**, a function A → C. Read right to left: **g acts first, f afterwards**. The domain of f ∘ g is the domain of g. Composition is **associative** but **not commutative**.

**Inverse and identity.** The **identity** map I_A(x) = x changes nothing. f: A → B is **invertible ⇔ bijective**; then f⁻¹: B → A exists and **f⁻¹ ∘ f = I_A and f ∘ f⁻¹ = I_B**. Formally f⁻¹(y) = x whenever f(x) = y.

**Counting functions A → B with |A| = m, |B| = n**

| Kind | Count |
|---|---|
| All functions | **n^m** |
| Injective | **n(n−1)···(n−m+1)** = n!/(n−m)! |
| Surjective | **n! · S(m, n)**, S = Stirling number of the second kind |
| Bijections | **n!** (only when m = n) |

✍ **|A| = 3, |B| = 4.** Each of the 3 inputs picks any of 4 outputs independently → **4³ = 64** functions. (24 = 4·3·2 counts only the injective ones; 81 = 3⁴ would be functions **B → A**.) Surjective: 0, because 3 inputs cannot cover 4 outputs. Bijections: 0.

✍ **Inverse and composition.** f(x) = 2x + 3. Let y = 2x + 3 ⇒ x = **(y − 3)/2**, so f⁻¹(x) = (x − 3)/2, and f((x − 3)/2) = x checks it out. Note 1/(2x + 3) is the **reciprocal**, never the inverse. For f(x) = 2x + 1 and g(x) = x²: (f ∘ g)(x) = 2x² + 1 but (g ∘ f)(x) = (2x + 1)² — **not equal**.

✍ **Associativity.** (f ∘ g) ∘ h = f ∘ (g ∘ h) always, since (f ∘ g)(h(x)) = f(g(h(x))). But f ∘ g ≠ g ∘ f, even when both are bijective; f(x) = x + 1 and g(x) = x² are one of the rare commuting pairs.

- 💡 **Trick:** **∘ is a "then" sign: f ∘ g means "f after g"**, exactly as the brackets f(g(x)) say. The types forbid f ∘ g unless the codomain of g fits the domain of f.
- ⚠️ **Trap:** (i) (f ∘ g)(x) is **f(g(x))**, not g(f(x)) — check with a concrete x. (ii) Composition of bijections is bijective and injective ∘ injective is injective, but the mixed cases are not guaranteed. (iii) A relation has an inverse function only if it is a **bijection**, not merely injective.
- 📌 **IT link:** **f⁻¹** is not free: a join, an index lookup and a call all cost time. That is why an inverse is cached in a hash table, and a hash-map **put** builds f while **get** runs f⁻¹.

---

## Night-Before-the-Exam Sheet

**Fact sheet**

- |A| = n ⇒ |P(A)| = **2ⁿ** subsets · of size k: **C(n,k)** = n!/k!(n−k)!
- |A ∪ B| = |A| + |B| − |A ∩ B| · disjoint ⇒ |A ∪ B| = |A| + |B|
- A ∪ A′ = U · A ∩ A′ = ∅ · (A′)′ = A · A − B = A ∩ B′
- **De Morgan:** (A ∪ B)′ = A′ ∩ B′ · (A ∩ B)′ = A′ ∪ B′
- |A × B| = |A| · |B| · relations A→B = 2^(|A||B|) · on an n-set **2^(n²)**
- injective ⇒ |A| ≤ |B| · surjective ⇒ |A| ≥ |B| · bijection ⇒ |A| = |B| ⇔ f⁻¹ exists
- A→B: **|B|^|A|** functions · injective: n!/(n−m)! · bijections: **n!**
- (f ∘ g)(x) = f(g(x)) — f after g
- equivalence = R + S + T · poset = R + anti + T

**Top 12 one-liners for MCQs**

1. 4 elements ⇒ **16** subsets, 15 proper
2. Sets ignore order and repeats
3. |P(∅)| = 1, |P({a})| = 2
4. |A ∪ B| = |A|+|B|−|A ∩ B|
5. A × B ≠ B × A
6. 3 elements ⇒ **2⁹ = 512** relations
7. Relation = **any** subset of A × B
8. Symmetric ≠ antisymmetric
9. Empty relation: symmetric, antisymmetric, transitive
10. A→B = **|B|^|A|** functions
11. f⁻¹ of 2x+3 is **(x−3)/2**
12. f ∘ g means **f after g**

**Top traps:** counting subsets as 2ⁿ − 1 without reading "proper" · treating **symmetric** and **antisymmetric** as opposites · writing 2ⁿ relations on an n-set when it is 2^(n²) · "every relation is a function" · "injective implies surjective" · swapping f ∘ g into g(f(x)) · calling 1/(2x+3) an inverse.

**All tricks together:** "A set is a basket with a label" · "in or out, n times, gives 2ⁿ" · "⊆ is all-in, ⊂ is all-in and more outside" · "a relation is any subset of the grid" · "symmetric reverses the arrow, antisymmetric allows at most one" · "equivalence lumps equal things into classes" · "∘ is a then-sign: f after g" · "bijective is the only kind that can be undone".

---

## Practice MCQs (exam pattern, 10 marks)

1. A set A has 4 elements. How many subsets? (a) 8 (b) 16 (c) 4 (d) 32
2. A = {1,2,3}, B = {2,3,4}. A ∩ B is: (a) {1,4} (b) {1,2,3,4} (c) {2,3} (d) {1}
3. Number of relations on a 3-element set: (a) 9 (b) 64 (c) 27 (d) 512
4. |A| = 3, |B| = 4. Number of functions A→B: (a) 12 (b) 64 (c) 81 (d) 24
5. f(x) = 2x + 3. Its inverse is: (a) (x+3)/2 (b) 2x − 3 (c) (x−3)/2 (d) 1/(2x+3)
6. Equivalence relations on a 4-element set: (a) 16 (b) 52 (c) 15 (d) 24
7. {(1,2),(2,1)} on {1,2,3} is: (a) symmetric only (b) antisymmetric (c) both (d) neither
8. (A ∪ B)′ equals: (a) A′ ∪ B′ (b) A′ ∩ B′ (c) A ∩ B (d) A − B
9. |A| = 5, |B| = 2. Every function A→B must be: (a) surjective (b) injective (c) bijective (d) constant
10. Subsets of A = {1,2,3} of size 2: (a) 2 (b) 3 (c) 6 (d) 8

**Answer key:** 1-b · 2-c · 3-d · 4-b · 5-c · 6-c · 7-a · 8-b · 9-a · 10-b

## Written question (8 marks)

On the integers ℤ define a R b iff 3 divides (a − b). Prove R is an equivalence relation, list its classes, then give on A = {1, 2, 3} a relation that is reflexive and symmetric but not transitive.

**Model answer:**

1. **Reflexive (2)** — a − a = 0 = 3·0, so 3 divides a − a and a R a.
2. **Symmetric (2)** — if a − b = 3m then b − a = 3(−m), and −m is an integer, so b R a.
3. **Transitive (2)** — a − b = 3m and b − c = 3k give a − c = 3(m + k), so a R c; hence R is an **equivalence relation**.
4. **Classes (2)** by remainder on division by 3: [0] = {…, 0, 3, 6, …}, [1] = {…, 1, 4, 7, …}, [2] = {…, 2, 5, 8, …} (all negatives included) — disjoint, union ℤ, i.e. a partition.
5. **Counter-example** — on {1,2,3} take R = {(1,1),(2,2),(3,3),(1,2),(2,1)}. Reflexive (three loops) and symmetric (1 ↔ 2 both ways), but **not** transitive: (1,2) and (2,3) would force (1,3), which is absent.

**Also practise (written):** ① list all 15 partitions of a 4-element set and the equivalence relation each induces ② show that "a R b iff a − b is divisible by 5" gives five classes ③ classify {(a,b) | a ≤ b} on ℕ as reflexive / symmetric / antisymmetric / transitive and name the poset ④ prove there is no bijection from ℕ to ℤ's proper subset, and relate that to |A| ≤ |B|.

**Before the exam ✓** 2ⁿ, C(n,k) and |A × B| instantly · all set laws with symbols · the six properties on a small relation · equivalence vs partial order.