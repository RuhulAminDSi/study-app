# Graph Theory, Propositional & Predicate Calculus: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/12-discrete-mathematics/dm-graph-calculus.en.html` (handwritten-style PDF: `notes/pdf/12-discrete-mathematics/dm-graph-calculus.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Discrete Mathematics):** "Discrete Mathematics, Theory of Computation and Basic Graph Theory: Set theory; Relations; Functions; **Graph theory**; **Propositional calculus and predicate calculus**; Mathematical reasoning: induction, contradiction and recursion; Counting; Principles of inclusion and exclusion; Recurrence relations; Algebraic structures: rings and groups." This notebook covers the two items in bold. Set theory, relations and functions are in the previous lesson; induction/contradiction/recursion, counting, recurrence and algebraic structures have their own lessons in the chapter.

**High-yield:** ① Σdeg(v) = **2|E|**, odd-degree vertices come in pairs ② K_n: degree n−1, edges n(n−1)/2 ③ Euler circuit ⇔ every degree **even** ④ Euler path ⇔ exactly **two** odd degrees ⑤ Euler counts **edges**, Hamilton counts **vertices** ⑥ planar: V − E + F = **2**, E ≤ 3V − 6 ⑦ bipartite planar: E ≤ **2V − 4** ⑧ a tree on n vertices has exactly **n − 1** edges ⑨ Dijkstra needs weights **≥ 0** ⑩ p → q is false only at T, F, and p ⊕ q = ¬(p ↔ q).

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Graph foundations: vertices, edges, degree — p. 2 · 2. Euler paths and circuits — p. 3 · 3. Hamilton paths and circuits — p. 3 · 4. Bipartite and planar graphs — p. 4 · 5. Trees — p. 5 · 6. Traversal: BFS and DFS — p. 5 · 7. MST and shortest path — p. 6 · 8. Propositional calculus: connectives — p. 7 · 9. Equivalence, laws, CNF and resolution — p. 8 · 10. Predicate calculus: quantifiers — p. 9 · 11. Rules of inference — p. 9 · 12. Night-before sheet — p. 10 · 13. Practice MCQs + written — p. 11.

---

## 1. Graph Foundations: Vertices, Edges & Degree

A **graph** G = (V, E) is an ordered pair of sets: **V** = the **vertices** (nodes), **E** = the **edges**, each edge joining exactly two vertices. Write **|V| = n** (order) and **|E| = m** (size). A graph is **simple** when it has **no loop and no pair of parallel edges**; a **multigraph** allows both. An edge is **incident** to a vertex when it has that endpoint.

| Name | What it is |
|---|---|
| **Simple graph** | no loop, no parallel edge; deg(v) ≤ n − 1 |
| **Complete Kₙ** | every pair joined; deg n−1; **\|E\| = n(n−1)/2** |
| **Cycle Cₙ** | n vertices in a ring; every degree 2 |
| **Path Pₙ** | vertices in a line; exactly **two** of degree 1 |
| **r-regular** | every vertex of degree r, so m = nr/2 |
| **Bipartite** | V = V₁ ∪ V₂, every edge across the split |

| Term | Exact definition | Closed? |
|---|---|---|
| **Walk** | any alternating sequence of vertices and edges — no restriction at all | may be |
| **Trail** | a walk that uses **no edge twice** (vertices may repeat) | may be |
| **Path** | a walk that uses **no vertex twice** (so no edge twice either) | never |
| **Cycle** | a closed path: same start and end vertex, **length ≥ 3** | must be |

**Handshaking lemma:** Σ deg(v) = **2|E|**. Each edge has two ends, so each edge adds 1 to the degree of each of its two endpoints. A corollary that is asked constantly: **the number of odd-degree vertices is always even**.

- ⚠️ **Trap:** (i) a **cycle needs length ≥ 3** in a simple graph — u, v, u is a walk, not a cycle; (ii) "starts and ends at the same vertex" is only half the definition — **no other vertex may repeat**; (iii) an isolated vertex has degree 0 and is still a vertex; (iv) **isomorphism** needs a bijection that preserves edges — the same n, m and degree sequence is **not** enough.
- 💡 **Trick:** "**W**alks are **W**ild, **T**rails have **T**ight edges, **P**aths are **P**ure." Each rule removes one freedom — walk ⊂ trail ⊂ path — and a cycle is a path that closed up, so it is the **strongest** of the four.

**Two ways to store a graph.** **Adjacency matrix** — an n × n table, A[i][j] = 1 when (vᵢ, vⱼ) is an edge: O(V²) space and build time, and deg(vᵢ) is the count of 1s in row i. **Adjacency list** — one neighbour list per vertex, O(V + E): it wins on sparse graphs.

*(Doodle: five vertices A–E joined by six edges, with each vertex's degree written beside it — 2, 3, 2, 3, 2; the two red ones are the odd-degree vertices, and 2+3+2+3+2 = 12 = 2 × 6 edges.)*

✍ **Worked example.** A graph has 7 edges. The sum of all vertex degrees = 2 × 7 = **14**, not 7 and not 21. Equivalently, a graph where every vertex has degree 3 must have an **even** number of vertices, because 3n = 2m forces n to be even — that is why a 3-regular graph can never have an odd order.

## 2. Euler Paths & Circuits

An **Euler trail** uses **every edge exactly once**; an **Euler circuit** is one that also returns to its start. Vertices may repeat as often as needed — **edges** are what count. For a connected undirected graph:

| Connected undirected graph | What exists |
|---|---|
| every degree **even** | **Euler circuit** — and therefore also a path |
| exactly **two** odd degrees | Euler **path** only; it must start at one odd vertex and end at the other |
| more than two odd degrees | **no** Euler trail |
| disconnected | no Euler trail, however even the degrees |

- ⚠️ **Trap:** "all degrees even" is **necessary and sufficient**, not a shortcut. In a **directed** graph the rule changes: an Euler circuit exists iff the graph is connected and **in-degree = out-degree** at every vertex.
- 💡 **Trick:** the two odd vertices of an Euler path are exactly its **ends**.

## 3. Hamilton Paths & Circuits

A **Hamilton path** visits **every vertex exactly once**; a **Hamilton circuit** closes up. Here it is the **vertices** that count and edges may not repeat. There is no cheap test like Euler's — the problem is NP-complete in general. Useful **sufficient** conditions: **Dirac's theorem** — deg(v) ≥ n/2 at every vertex ⇒ Hamilton circuit; **Ore's theorem** — deg(u) + deg(v) ≥ n for every non-adjacent pair ⇒ Hamilton circuit. Every Kₙ is Hamiltonian.

- ⚠️ **Trap — the line that decides the MCQ:** **Euler is about EDGES; Hamilton is about VERTICES.** K₄ has degree 3, all **odd**, so **no Euler circuit**, yet it is complete, so it **has** a Hamilton circuit. Hence **Kₙ has an Euler circuit exactly when n is odd**, while **every** Kₙ has a Hamilton circuit. In practice an Euler circuit is the postal-carrier round (polynomial) while a Hamilton circuit is the travelling-salesman problem (NP-complete).
- 📌 **IT link:** a **dependency graph** (module A needs module B) is a **digraph**; if it has a cycle the build breaks, so build tools topologically sort it — the DFS of section 6.

✍ **Worked example.** Take V = {A, B, C, D, E} with edges AB, BC, AD, DE, CE, BD, so deg(A) = 2, deg(B) = 3, deg(C) = 2, deg(D) = 3, deg(E) = 2. **(a)** Two odd vertices (B, D) ⇒ an Euler **path** exists and **no circuit**; it must start at B and end at D. **(b)** A Hamilton path? A → B → C → E → D visits all five once ⇒ **yes**. **(c)** A Hamilton circuit would need 12 edge-ends = 6 edges, i.e. **every** edge — impossible, because B and D would then have to drop from degree 3 to 2 ⇒ **no**.

## 4. Bipartite & Planar Graphs

A graph is **bipartite** if V = V₁ ∪ V₂ and every edge joins a vertex of V₁ to one of V₂ — equivalently, if it can be coloured with **two colours** so that no edge is monochromatic. It is **planar** if it can be drawn in the plane with **no edge crossings**. A bipartite graph contains **no odd cycle**; Kₙ is bipartite **only for n ≤ 2**, and K₃,₃ is bipartite but not planar.

**Euler's formula for planar graphs.** Connected: **V − E + F = 2** · with C connected components: **V − E + F = 1 + C** · simple planar, V ≥ 3: **E ≤ 3V − 6** · simple planar **and bipartite**, V ≥ 3: **E ≤ 2V − 4**. The outer face is **included** in F.

| Graph class | Edges it can carry | Colours it needs |
|---|---|---|
| simple planar, V ≥ 3 | E ≤ **3V − 6**; equality when every face is a triangle | ≤ **4** (four-colour theorem) |
| simple planar **bipartite** | E ≤ **2V − 4**; every face has ≥ 4 sides | ≤ **2** |
| complete Kₙ | n(n − 1)/2 — planar only for **n ≤ 4** | exactly **n** |
| tree on n vertices | exactly **n − 1** — always planar, always bipartite | exactly **2** (n > 1) |

**Three equivalences for bipartite.** (i) G is bipartite ⇔ G has **no odd cycle**; (ii) ⇔ some **subgraph** of G is a **tree**; (iii) the complete bipartite K_{m,n} has mn edges with degrees n and m, so K_{m,n} is planar only when m = 1 or n ≤ 2.

**Graph colouring.** A **proper colouring** gives adjacent vertices different colours; the fewest colours is the **chromatic number χ(G)**. χ(bipartite) ≤ 2; χ(Kₙ) = **n**; χ(tree) = **2**. **The four-colour theorem** (Appel & Haken, 1976, computer-assisted): every planar graph is colourable with at most **four** colours, and K₄ shows four are really needed. K₅ is not planar and needs five.

- ⚠️ **Trap:** (i) "every planar graph can be coloured with **three** colours" is **false** — that was the disproved claim; (ii) planarity is a property of **the graph**, not of one bad drawing — K₅ cannot be drawn planarly **at all**; (iii) E ≤ 3V − 6 needs V ≥ 3; (iv) "connected and E ≥ V" is exactly the threshold for **containing a cycle**, while E ≥ V − 1 is the threshold for being connected.
- 💡 **Trick:** "**K**ruskal goes **K**ayaking over **K**rossed-out edges" — take the cheapest, throw away anything that would close a loop. "**P**rim stays **P**ut" — it never leaves the tree it has already grown.

✍ **Worked example.** V = 5, E = 7 ⇒ F = 2 − 5 + 7 = **4**. If that graph were bipartite **and** planar, E ≤ 2(5) − 4 = **6**, so 7 edges would already be impossible — it has an odd cycle, hence is **not** bipartite. For V = 6 the two ceilings are 3·6 − 6 = 12 and 2·6 − 4 = **8**.

## 5. Trees

A **tree** is a **connected acyclic** graph. These are all **equivalent**, and exam questions use them interchangeably: **n vertices ⇒ exactly n − 1 edges** · **exactly one** path between any two vertices · **no cycle** · adding any edge creates a cycle · deleting any edge disconnects it · every degree-1 vertex is a **leaf**, and a tree always has **at least two** leaves.

- 💡 **Trick:** "**Tree = n − 1**." Read it as a **budget**: start from n isolated vertices, i.e. n components; each edge merges exactly two components, so it costs one merge. Going from n components to one therefore takes exactly n − 1 merges — which is also why a connected graph **cannot** have fewer than n − 1 edges. The three numbers of a tree: **n − 1** edges, **1** path between two vertices, **2** minimum leaves.
- ⚠️ **Trap:** (i) a tree on n vertices has **n − 1 edges, not n** — a **forest** with c components has n − c; (ii) **acyclic ≠ complete** — a tree has no cycle but also no triangle; (iii) a **rooted** tree adds a chosen root with a **depth**, and two trees with the same number of edges need not be isomorphic.

## 6. Traversal: BFS & DFS

Both **BFS** (breadth-first, a **queue**) and **DFS** (depth-first, a **stack** or recursion) visit every reachable vertex once, each returns a **spanning tree** of the component it reached, and **a spanning tree on n vertices always has exactly n − 1 edges**. Both run in O(V + E); only the **order** differs, and that order is the whole answer to "which one do I use".

| | BFS | DFS |
|---|---|---|
| **Structure** | queue — expand level by level | stack / recursion — go as deep as possible |
| **Gives** | **shortest path by edge count** | a DFS forest plus finishing times |
| **Shortest path?** | yes, on an **unweighted** graph | **no**, weighted or not |
| **Used for** | level order, hop counts, nearest node | cycle detection, topological sort |

**Cycle test.** In an undirected graph a **DFS** finds a back edge to a vertex still on the recursion stack ⇒ a cycle exists. In a digraph **BFS** detects a cycle when an already-discovered vertex is met again. Neither test needs weights, so neither gives a **shortest** path on a weighted graph.

✍ **Worked example (V = 6, E = 7).** **(a)** Connected? A graph on n vertices with E ≥ n − 1 **may** be connected; here 7 ≥ 5, so connectivity is possible but not guaranteed. **(b)** Cycle? E ≥ V (7 ≥ 6) ⇒ if it is connected it **must** contain a cycle. **(c)** A spanning tree on 6 vertices keeps exactly **5** of those 7 edges.

## 7. Minimum Spanning Tree & Shortest Path

A **spanning tree** connects every vertex with no cycle; an **MST** does it with the smallest total edge weight. Always **n − 1** edges, and **unique only when all weights differ**.

| | Kruskal | Prim |
|---|---|---|
| **Strategy** | sort edges ↑, take each joining two **different** components | grow **one** tree, add the cheapest edge leaving it |
| **Data** | union–find / disjoint sets | a min priority queue |
| **Feeds on** | **sparse** graphs | **dense** graphs |
| **Cost** | O(E log E) | O(E log V) |

**Cut property** — the condition both algorithms rest on. Given any cut of the graph, the **cheapest single** edge crossing that cut may be used in **some** MST; substituting it never increases the total weight.

**Dijkstra — single-source shortest path.** Greedy and correct **only when every edge weight is ≥ 0**. Keep dist[v] for each vertex; repeatedly finalise the unvisited vertex with the smallest dist and **relax** its edges: if dist[u] + w(u,v) < dist[v], set dist[v] = dist[u] + w(u,v) and parent[v] = u. Cost O(V²), or O((V+E) log V) with a heap. **Bellman–Ford** relaxes every edge |V| − 1 times, handles **negative weights**, and detects a negative-weight cycle. **Why a negative edge breaks Dijkstra:** the algorithm declares a vertex *final* when it is cheapest among the unsettled ones; if a later edge could still improve it, that edge must run through some unsettled vertex whose distance is **not smaller** — impossible when every added weight is ≥ 0.

✍ **Worked example (Dijkstra, V = {A, B, C, D}).** Edges A–B = 4, A–C = 1, C–B = 2, B–D = 3, C–D = 5.
**(1)** dist = (A 0, B 4, C 1, D ∞). Smallest unsettled is **C** at 1; settle it. Relax C–B: 1 + 2 = 3 < 4 ⇒ dist[B] = **3**. Relax C–D: 1 + 5 = 6 ⇒ dist[D] = **6**.
**(2)** Smallest unsettled is **B** at 3; settle it. Relax B–D: 3 + 3 = 6, not < 6 ⇒ dist[D] stays **6** (a tie — the route A–C–D also costs 6).
**(3)** Settle **D** at 6. Final: **d(A) = 0, d(C) = 1, d(B) = 3, d(D) = 6**, with parents C ← A, B ← C.
**Kruskal on the same graph:** sorted AC(1), BC(2), BD(3), AB(4), CD(5) — take **AC**, then **BC**, then **BD**. Three edges = n − 1, no cycle ⇒ an MST of weight 1 + 2 + 3 = **6**.

- ⚠️ **Trap:** Dijkstra finds a **shortest path**; Kruskal and Prim find a **minimum spanning tree**. They are different questions and on a general graph they choose different edges. An MST exists only for a **connected** graph — on a disconnected one both algorithms return a **minimum spanning forest**.

## 8. Propositional Calculus: Connectives

A **proposition** is a declarative sentence that is **either true or false, and nothing else** — no "maybe", no dependence on an unknown. "2 + 2 = 4" is a proposition; "x + 2 = 5" is an **open sentence**, not a proposition until x is given a value. A **compound** proposition is built from simple ones with **logical connectives**.

| Connective | Symbol | Reads | True exactly when |
|---|---|---|---|
| **Negation** | ¬P | not P | P is **false** (T→F, F→T) |
| **Conjunction** | P ∧ Q | P and Q | **both** are true |
| **Disjunction** | P ∨ Q | P or Q | **at least one** is true (inclusive) |
| **Exclusive or** | P ⊕ Q | P or Q, not both | **exactly one** is true |
| **Implication** | P → Q | if P then Q | P is false, **or** Q is true |
| **Biconditional** | P ↔ Q | P if and only if Q | **both have the same truth value** |

| P | Q | P∧Q | P∨Q | P⊕Q | P→Q | P↔Q |
|---|---|---|---|---|---|---|
| T | T | T | T | **F** | T | T |
| T | F | **F** | T | T | **F** | **F** |
| F | T | **F** | T | T | T | **F** |
| F | F | **F** | **F** | **F** | T | T |

**Three classifications.** **Tautology** — always T (P ∨ ¬P, P → P) · **Contradiction** — always F (P ∧ ¬P, P ⊕ P) · **Contingency** — T in some rows and F in others (P ∨ Q). Test: build the column; if every entry matches, it is one of the first two. With n variables there are **2ⁿ rows**, so n = 3 gives 8 rows and n = 4 gives 16 — at that size use the laws instead of the table.

- ⚠️ **Trap:** (i) **p → q is false only at p = T, q = F**; the other three rows are true, so a false hypothesis still yields a true implication; (ii) P ⊕ Q is true when **exactly one** is true — with both true it is **false**; (iii) **P ↔ Q is an operator, P ≡ Q states equivalence** — the first is built from P and Q, the second compares two whole formulas; (iv) **precedence** ¬ > ∧ > ∨ > → > ↔, so ¬P ∧ Q means (¬P) ∧ Q.
- 💡 **Trick:** "**M**inus **A**gain **M**akes **N**othing" — the one connective that turns a false hypothesis into a true conclusion. "**xor is nothing-or-something**": **P ⊕ Q ≡ ¬(P ↔ Q)**. Implication is the only connective that is not symmetric, while ↔ and ≡ are the only genuine equivalences.

## 9. Equivalence, Laws & Canonical Forms

Two formulas **P** and **Q** are **logically equivalent**, written **P ≡ Q**, when they have the **same truth value in every row** — equivalently when **P ↔ Q is a tautology**. A truth table proves it; the laws below prove it in one line.

| Law | Statement |
|---|---|
| **Identity** | P ∧ T ≡ P, P ∨ F ≡ P |
| **Domination** | P ∧ F ≡ F, P ∨ T ≡ T |
| **Idempotent** | P ∧ P ≡ P, P ∨ P ≡ P |
| **Complement** | P ∧ ¬P ≡ F, P ∨ ¬P ≡ T, ¬¬P ≡ P |
| **Commutative** | P ∧ Q ≡ Q ∧ P, P ∨ Q ≡ Q ∨ P |
| **Associative** | (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R) — and for ∨ |
| **Distributive** | P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R); P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R) |
| **De Morgan** | ¬(P ∧ Q) ≡ ¬P ∨ ¬Q, ¬(P ∨ Q) ≡ ¬P ∧ ¬Q |
| **Absorption** | P ∨ (P ∧ Q) ≡ P, P ∧ (P ∨ Q) ≡ P |

**The five forms to know by heart.** **P → Q** ≡ ¬P ∨ Q · **¬Q → ¬P** ≡ P → Q (the **contrapositive**) · **Q → P** is the **converse** and **¬P → ¬Q** the **inverse** — neither is equivalent to the original, though **converse ≡ inverse** · **P ↔ Q** ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q) ≡ (P → Q) ∧ (Q → P) · **P ⊕ Q** ≡ ¬(P ↔ Q).

✍ **Worked example (exportation).** P → (Q → R) ≡ ¬P ∨ (¬Q ∨ R) ≡ (¬P ∨ ¬Q) ∨ R ≡ ¬(P ∧ Q) ∨ R ≡ **(P ∧ Q) → R**. With P = F, Q = F, R = F the chained form (P → Q) → R is **false** while the original is **true**, so **implication is the one connective that is not associative**.

**Canonical (normal) forms.** A formula in **DNF** (sum of products) is a **disjunction of conjunctions**; in **CNF** (product of sums) it is a **conjunction of disjunctions**. Every formula has **both**, read off its truth table by taking exactly **one minterm per row**: DNF takes the rows where it is true, CNF the rows where it is false. **DNF of P → Q is (¬P) ∨ (P ∧ Q); CNF is (¬P ∨ Q).**

**Resolution — the one automated rule.** It applies to **CNF only**. From (P ∨ Q) and (¬P ∨ R) cancel P and take the **resolvent** (Q ∨ R). Resolution is **sound** — it never draws a false conclusion — but **not complete** on non-CNF input, which is why automated theorem provers convert everything to CNF first. Steps: write every premise as a clause in CNF; find two clauses sharing one variable in opposite polarity; drop that variable and join the rest. The empty clause **□** means the premises contradict each other.

## 10. Predicate Calculus: Quantifiers

Predicate logic adds **variables**, **predicates** and **quantifiers** to propositional logic, so it can speak about a statement's **internal structure**. A **predicate** P(x) is a property of x; the set of values x may take is its **domain**. A variable is **bound** if a quantifier covers it and **free** otherwise — only a bound formula is a proposition.

| Words | Formula | Read |
|---|---|---|
| For every / all | **∀x** P(x) | P(x) holds for **every** x in the domain |
| There exists / some | **∃x** P(x) | P(x) holds for **at least one** x |
| Every … some, vs some … every | **∀x ∃y** vs **∃x ∀y** P(x, y) | the y **may depend** on x, or one x works for all y |

**The four quantifier laws.** **¬∀x P(x) ≡ ∃x ¬P(x)** (universal negation) · **¬∃x P(x) ≡ ∀x ¬P(x)** (existential negation) · **∀x (P ∧ Q) ≡ (∀x P) ∧ (∀x Q)** · **∃x (P ∨ Q) ≡ (∃x P) ∨ (∃x Q)** — while **∀x (P ∨ Q) ≢ (∀x P) ∨ (∀x Q)**, and its dual likewise.

- ⚠️ **Trap:** (i) "All humans are mortal" is **∀x (Human(x) → Mortal(x))** — with an **implication**, never ∀x(Human ∧ Mortal), which would absurdly claim every object is human; (ii) "There is a prime greater than 100" is **∃x (Prime(x) ∧ x > 100)**; an implication would let a non-prime witness it; (iii) **∀x ∃y ≠ ∃x ∀y** — "everyone has a friend" is the first; (iv) a **free** variable leaves the formula without a truth value at all.
- 📌 **IT link:** **∀x P(x)** is `SELECT … WHERE` with no `GROUP BY`; **∃x P(x)** is `EXISTS`. **∀x ∃y** is a correlated subquery returning a different y per row, while **∃x ∀y** forces one row that works for all — the two return different results on the same data.

## 11. Rules of Inference

An **argument** is a set of **premises** followed by a **conclusion**; it is **valid** when no truth-table row has every premise T and the conclusion F. **Valid ⇒ the conclusion is true; a true conclusion ⇏ a valid argument.**

| Rule | Form | Rule | Form |
|---|---|---|---|
| **Modus ponens** | P → Q, P ∴ **Q** | **Addition** | P ∴ **P ∨ Q** |
| **Modus tollens** | P → Q, ¬Q ∴ **¬P** | **Simplification** | P ∧ Q ∴ **P** |
| **Hypothetical syllogism** | P → Q, Q → R ∴ **P → R** | **Conjunction** | P, Q ∴ **P ∧ Q** |
| **Disjunctive syllogism** | P ∨ Q, ¬P ∴ **Q** | **Resolution** | P ∨ Q, ¬P ∨ R ∴ **Q ∨ R** |
| **UI · UG · EI · EG** | UI: ∀x P(x) ∴ P(a) · UG: P(a) ∴ ∀x P(x) · EI: ∃x P(x) ∴ P(c) · EG: P(c) ∴ ∃x P(x) | | |

- ⚠️ **Trap — the classic fallacies.** **Affirming the consequent:** P → Q, P ∴ Q — **invalid** ("if it rains the road is wet" + "the road is wet" does not prove rain). **Denying the antecedent:** P → Q, ¬P ∴ ¬Q — **invalid**. **Undistributed middle:** all A are B, all C are B ∴ all A are C — invalid. **Every rule in the table is valid.**
- 💡 **Trick:** "**M**odus **P**onens **P**egs the premise; **M**odus **T**ollens **T**akes it away." The shape that works in both directions is the **contrapositive** ¬Q → ¬P, never the converse Q → P.

✍ **Worked examples.** **(a)** "Every human is mortal" = ∀x(H(x) → M(x)) with "Socrates is human" = H(s): **UI**, then **modus ponens** ⇒ **M(s)**. **(b)** Premises (P ∨ Q), (¬P ∨ R), (¬R): resolve the last two ⇒ **¬P**, then resolve with the first ⇒ **Q**. **(c)** "All A are B and all B are C" ⇒ "all A are C" is hypothetical syllogism; undistributed middle would need two **different** middles.

---

## Night-Before-the-Exam Sheet

**Fact sheet:** Σdeg = 2|E|, odd vertices in pairs · Kₙ: deg n−1, edges n(n−1)/2 · Euler circuit ⇔ all deg even · Euler path ⇔ exactly 2 odd · Euler = edges, Hamilton = vertices · Kₙ Euler circuit ⇔ n odd · Dirac: deg ≥ n/2 ⇒ Hamilton · cycle ⇒ E ≥ V; connected ⇒ E ≥ V−1 · planar: V − E + F = 2 · simple planar: E ≤ 3V − 6 · bipartite planar: E ≤ 2V − 4 · four-colour theorem; χ(Kₙ) = n · tree: n vertices ⇒ n − 1 edges · tree ⇒ unique path, no cycle · BFS = queue = shortest hops · DFS = stack = topological sort · BFS/DFS cost O(V + E) · spanning tree always n − 1 edges · Dijkstra needs w ≥ 0 · Bellman–Ford: negatives + cycle detect · Kruskal: sort, union–find, O(E log E) · Prim: one tree, heap, O(E log V) · p → q false only at T, F · P ⊕ Q ≡ ¬(P ↔ Q) · p → q ≡ ¬p ∨ q · contrapositive ¬q → ¬p · **¬∀x ≡ ∃x¬**, **¬∃x ≡ ∀x¬** · all humans mortal = ∀x(H → M) · UI, UG, EI, EG · resolution: cancel one variable.

**Top 12 one-liners for MCQs**

1. Sum of degrees = **2 × edges**
2. Odd-degree vertices are **even in number**
3. Euler circuit ⇔ every degree **even**
4. Euler counts **edges**, Hamilton counts **vertices**
5. Planar: **V − E + F = 2**
6. A tree on n vertices has **n − 1** edges
7. BFS finds shortest **unweighted** paths
8. DFS gives topological sorts
9. Dijkstra breaks on **negative weights**
10. **p → q** is false only at T, F
11. De Morgan **flips** ∧ into ∨
12. **¬∀x P ≡ ∃x ¬P**

**Top traps:** "cycle = starts and ends at the same vertex" without saying **no other vertex repeats** · a tree with **n** edges · "every planar graph is 3-colourable" · Euler's formula with the outer face **left out** · claiming a graph is bipartite from one bad drawing · Dijkstra on negative weights · **p ⊕ q** true when both are true · treating **↔** and **≡** as the same symbol · ∀x(P∨Q) ≡ (∀xP)∨(∀xQ) · affirming the consequent.

**All tricks together:** "Walks are wild, trails have tight edges, paths are pure" · "Euler walks every street, Hamilton visits every city" · "cycle needs length ≥ 3" · "two ends per edge — count the ends" · "tree = n − 1" · "Kruskal kayaking, cross out the loops; Prim stays put" · "minuses again makes nothing" · "xor is nothing-or-something" · "minus again, or exists" · "modus ponens pokes, modus tollens takes away".

---

## Practice MCQs (exam pattern, 10 marks)

1. An undirected graph has 7 edges. The sum of all vertex degrees is: (a) 14 (b) 7 (c) 21 (d) 49
2. The number of edges in K₆ is: (a) 30 (b) 12 (c) 15 (d) 36
3. If every vertex of a graph has degree 3, the number of vertices is: (a) odd (b) even (c) prime (d) at least 5
4. A connected planar graph with V = 5 and E = 8 has how many faces? (a) 4 (b) 6 (c) 8 (d) 5
5. Kₙ has an Euler circuit exactly when n is: (a) odd (b) even (c) prime (d) at least 3
6. Dijkstra's algorithm fails to give correct shortest paths when the graph has: (a) unit weights (b) negative edge weights (c) undirected edges (d) two sources
7. The negation of ∀x P(x) is: (a) ∀x ¬P(x) (b) ∃x P(x) (c) ¬∀x ¬P(x) (d) ∃x ¬P(x)
8. The contrapositive of p → q is: (a) q → p (b) ¬p → ¬q (c) ¬q → ¬p (d) p → ¬q
9. A simple bipartite planar graph on V vertices has at most: (a) 3V − 6 edges (b) V² edges (c) 2V − 4 edges (d) 2V − 2 edges
10. The minimum edges a connected graph with n vertices can have: (a) n − 1 (b) n (c) n + 1 (d) ⌈n/2⌉

**Answer key:** 1-a · 2-c · 3-b · 4-d · 5-a · 6-b · 7-d · 8-c · 9-c · 10-a

## Written question (10 marks)

A simple undirected graph G has 6 vertices, 9 edges and every vertex of degree 3. (i) Verify the handshaking lemma. (ii) Can you conclude that G is bipartite? Justify. (iii) A connected planar graph has V = 5 and E = 8; find F, and the largest E for a bipartite planar graph on 5 vertices. (iv) Distinguish a proposition from a predicate and write the negation of ∀x P(x) ∨ ∃x Q(x) in the simplest form.

**Model answer:**

1. **Handshaking (2)** — Σ deg(v) = 2|E| = 2 × 9 = **18**, and 6 vertices of degree 3 give 6 × 3 = 18 ✓. The number of odd-degree vertices is 6, which is even, as it must be.
2. **Bipartite? (3)** — **Cannot be determined.** K₃,₃ has 6 vertices, 9 edges, every degree 3, and is bipartite. The triangular prism has the same data but contains a triangle, so it is **not** bipartite. The same degree sequence allows opposite answers, so degree data alone never decides it.
3. **Planar counts (3)** — F = 2 − V + E = 2 − 5 + 8 = **5**, the outer face included. For a bipartite planar graph on V = 5: E ≤ 2V − 4 = **6**.
4. **Logic (2)** — a **proposition** is a declarative sentence with one definite truth value; a **predicate** P(x) names a property of x and becomes a proposition only once x is bound or assigned. ¬(∀x P(x) ∨ ∃x Q(x)) ≡ ¬∀x P(x) ∧ ¬∃x Q(x) ≡ **∃x ¬P(x) ∧ ∀x ¬Q(x)**.

**Also practise (written):** ① prove that a connected graph has an Euler circuit iff every degree is even, using a greedy edge argument ② show that K₅ is not planar but K₅ minus one edge is ③ run Kruskal and Prim by hand on the same six-vertex weighted graph and compare the two trees ④ convert P → (Q → R) to both DNF and CNF and verify each against a truth table ⑤ show by truth table that (P → Q) → R is **not** equivalent to P → (Q → R).

**Before the exam ✓** apply Σdeg = 2|E| without hesitating · decide Euler vs Hamilton from the object being counted · quote V − E + F = 2 and both edge ceilings · fill a truth table for any 2- or 3-variable formula · say when Dijkstra breaks and why · apply ¬∀ ≡ ∃¬ and the valid inference rules.