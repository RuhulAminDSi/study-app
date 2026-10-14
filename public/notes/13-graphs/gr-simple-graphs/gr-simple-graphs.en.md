# Graph Fundamentals: Simple Graphs, Digraphs & More — Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/13-graphs/gr-simple-graphs.en.html` (handwritten-style PDF: `notes/pdf/13-graphs/gr-simple-graphs.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Graph Theory):** "Graph theory: basic definitions — simple graph, directed graph, subgraph, degree, walk, path, cycle, special graphs (Kₙ, Cₙ, Kₘ,ₙ), representations (adjacency matrix, adjacency list)." This lesson is the foundation for Trees, Euler & Hamiltonian, and Planar Graphs lessons.

**High-yield:** ① G=(V,E) def ② no loop, no multi-edge ③ deg⁺+deg⁻=|E| ④ Handshaking: Σdeg=2|E| ⑤ Walk⊇Trail⊇Path⊇Cycle ⑥ Kₙ has n(n−1)/2 edges ⑦ Adj. matrix O(V²) ⑧ Cycle Cₙ has n edges.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. What is a graph? Simple vs directed — p. 2 · 2. Subgraphs & vertex degrees — p. 3 · 3. Walks, trails, paths, cycles — p. 4 · 4. Special graphs Kₙ, Cₙ, Pₙ — p. 5 · 5. Bipartite & regular graphs — p. 6 · 6. Graph representation — p. 7 · 7. Degree sequences & Havel-Hakimi — p. 8 · 8. Night-before sheet — p. 9 · 9. Practice MCQs + written — p. 10.

---

## 1. What Is a Graph?

A **graph** G is an ordered pair **G = (V, E)**, where **V** is a non-empty set of **vertices** (nodes) and **E** is a set of **edges** (links). In an **undirected** graph each edge is an unordered pair {u, v}; in a **directed graph** (digraph) each edge is an ordered pair (u, v), written u → v.

**Simple graph**: An undirected graph with **no loops** (an edge from a vertex to itself) and **no multiple edges** between the same pair of vertices. Every pair of distinct vertices is joined by **at most one** edge.

*(Doodle: left side shows an undirected triangle A-B-C with undirected edges; right side shows a directed path 1→2→3 with arrow-headed edges.)*

| Term | Undirected | Directed (digraph) |
|---|---|---|
| Edge | {u, v} = {v, u} | (u, v) ≠ (v, u) in general |
| Loop | {v, v} — forbidden in simple graphs | (v, v) — self-loop |
| Multiple edge | Two edges {u,v} and {u,v} — forbidden | Two edges (u,v) and (u,v) — forbidden in simple digraph |

- 💡 **Trick:** "**Simple = clean.**" No self-loops, no parallel edges — just pure connections between distinct vertices. The moment you allow loops or parallel edges, you leave the world of simple graphs and enter **multigraphs**.
- ⚠️ **Trap:** (i) A **loop** at vertex v is an edge {v, v} — it breaks simplicity. (ii) **Multiple edges** between u and v also break simplicity. (iii) "Simple" does **not** mean "small" — K₁₀₀ is still a simple graph.

✍ **Is this simple?** V={A,B,C}, E={{A,B},{B,C},{C,A},{A,A}}. The edge {A,A} is a **loop** — so **not** simple. Remove it and the remaining graph **is** simple (it is the triangle C₃).

## 2. Subgraphs & Vertex Degrees

A **subgraph** H of G = (V, E) is a graph H = (V', E') such that **V' ⊆ V**, **E' ⊆ E**, and every edge in E' has both endpoints in V'. A **spanning subgraph** is a subgraph with V' = V (it keeps all vertices but may drop some edges).

| Concept | Undirected | Directed |
|---|---|---|
| **Degree** deg(v) | # of edges incident to v | — |
| **In-degree** deg⁻(v) | — | # of edges entering v |
| **Out-degree** deg⁺(v) | — | # of edges leaving v |

**Handshaking Lemma — undirected:** **Σ deg(v) = 2|E|**. Every edge touches exactly two ends, so it is counted twice in the degree sum. **Corollary: the number of odd-degree vertices is always even.**

**Handshaking Lemma — directed:** **Σ deg⁺(v) = Σ deg⁻(v) = |E|**. Every directed edge leaves one vertex and enters another, so total out-degrees = total in-degrees = number of edges.

- 💡 **Trick:** "**Every edge has two hands to shake.**" Count every handshake from each vertex's perspective — each edge is shaken at both ends, so it contributes 2 to the total.
- ⚠️ **Trap:** (i) Handshaking holds for **multigraphs** too — the "simple" condition is not needed. (ii) A loop contributes **2** to the degree of its vertex. (iii) Σdeg⁺ = Σdeg⁻ = |E| for digraphs; do not multiply by 2 here.

✍ **Applying Handshaking.** A simple undirected graph has 12 edges. By the lemma, Σ deg(v) = 2 × 12 = **24**. If the graph has 6 vertices, the average degree is 24/6 = 4.

## 3. Walks, Trails, Paths & Cycles

Given a graph G, a **walk** of length k is a sequence v₀, e₁, v₁, e₂, …, eₖ, vₖ where each eᵢ joins vᵢ₋₁ and vᵢ. Vertices and edges **may repeat**. A **trail** is a walk with **no repeated edge** (vertices may repeat). A **path** (or simple path) is a walk with **no repeated vertex** — hence no repeated edge automatically. A **cycle** is a path that starts and ends at the same vertex; for a simple graph the length must be ≥ 3.

| Type | Vertices repeat? | Edges repeat? | Closed? |
|---|---|---|---|
| **Walk** | yes | yes | maybe |
| **Trail** | yes | no | maybe |
| **Path** | no | no | no |
| **Cycle** | only start=end | no | yes |

- 💡 **Trick:** "**No vertex repeated = path; no edge repeated = trail; both allowed = walk; closed path = cycle.**"
- ⚠️ **Trap:** (i) "Path" in everyday language means any route; in graph theory it means **no repeated vertex**. (ii) A cycle must have **length ≥ 3** in a simple graph. (iii) A single vertex with a self-loop is **not** a cycle in a simple graph.

## 4. Special Graphs I: Complete, Cycle, Path

| Graph | Structure | \|E\| | Degree of each vertex |
|---|---|---|---|
| **Kₙ** | every pair joined | n(n−1)/2 | n − 1 |
| **Cₙ** | n vertices in one cycle | n | 2 |
| **Pₙ** | n vertices in a line | n − 1 | end = 1, internal = 2 |

Conditions: Kₙ requires n ≥ 1. Cₙ requires n ≥ 3. Pₙ requires n ≥ 1.

- 💡 **Trick:** "**K gets all connections, C makes a ring, P draws a line.**"
- ⚠️ **Trap:** K₁ has 0 edges, K₂ has 1 edge. Cₙ exists only for n ≥ 3. Kₙ is (n−1)-regular, not n-regular.

## 5. Bipartite & Regular Graphs

A **bipartite graph** has its vertices partitioned into two sets V₁ and V₂ such that every edge joins a vertex in V₁ to one in V₂. A **complete bipartite graph** K<sub>m,n</sub> joins **every** vertex of V₁ to **every** vertex of V₂.

| Property | K<sub>m,n</sub> |
|---|---|
| \|V\| | m + n |
| \|E\| | **m × n** |
| Degree of v ∈ V₁ | n |
| Degree of v ∈ V₂ | m |
| Regular? | Only when m = n (then n-regular) |

**k-Regular graph**: every vertex has degree k. Kₙ is (n−1)-regular. Cₙ is 2-regular.

**König's theorem**: A graph is **bipartite if and only if it has no odd cycle**.

- 💡 **Trick:** "**Even cycle = bipartite; odd cycle = not.**"
- ⚠️ **Trap:** C₄ is bipartite (even cycle). C₅ is not (odd cycle). K<sub>n</sub> is bipartite only for n ≤ 2.

## 6. Graph Representation

| Representation | Space | Edge lookup | Iterate neighbours | Best for |
|---|---|---|---|---|
| **Adjacency matrix** | O(V²) | O(1) | O(V) | dense graphs |
| **Adjacency list** | O(V + E) | O(deg(v)) | O(deg(v)) | sparse graphs |
| **Edge list** | O(E) | O(E) | O(E) | algorithm input |

**Worked example:** G: V={1,2,3,4}, E={{1,2},{1,3},{2,3},{2,4}}.
- Adjacency matrix: `0 1 1 0 / 1 0 1 1 / 1 1 0 0 / 0 1 0 0`
- Adjacency list: `1→[2,3], 2→[1,3,4], 3→[1,2], 4→[2]`
- Edge list: `(1,2) (1,3) (2,3) (2,4)`

- 💡 **Trick:** "**Matrix is square, list is lean.**"
- ⚠️ **Trap:** For a **directed** graph, the adjacency matrix need **not** be symmetric. Adjacency matrix uses V² space **even for sparse graphs**.

## 7. Degree Sequences & Handshaking Applications

The **degree sequence** of a graph is the list of vertex degrees in non-increasing order. A sequence that can be realised as the degree sequence of some simple graph is called **graphical**.

**Havel-Hakimi algorithm:**
1. Sort in non-increasing order.
2. Remove d₁ and subtract 1 from the next d₁ terms.
3. Re-sort and repeat.
4. If you ever get a negative → **not graphical**. If you reach all zeros → **graphical**.

✍ **(3, 3, 1, 1):** Remove 3, subtract 1 from next 3 → (3,1,1) → (2,0,0). Remove 2, subtract 1 from next 2 → (0,0) → (-1,-1). **Not graphical.**

- 💡 **Corollaries:** (i) Σdeg(v) = 2|E|, sum is always **even**. (ii) Number of odd-degree vertices is **always even**. (iii) For k-regular on n vertices, **nk must be even**.
- ⚠️ **Trap:** **Same degree sequence ≠ isomorphic.** Havel-Hakimi tests for **simple** graphs only.

---

## Night-before-the-exam fact sheet

- G = (V, E): vertices & edges · Simple: no loop, no multi-edge
- Digraph: edges are ordered pairs · Subgraph: V'⊆V, E'⊆E, endpoints in V'
- deg(v): # incident edges · deg⁺(v): out-degree · deg⁻(v): in-degree
- Handshaking: Σ deg(v) = 2|E| · Digraph: Σ deg⁺ = Σ deg⁻ = |E|
- Walk ⊃ Trail ⊃ Path ⊃ Cycle
- Kₙ: |E| = n(n−1)/2, deg = n−1 · Cₙ: |E| = n, 2-regular · Pₙ: |E| = n−1
- K<sub>m,n</sub>: |E| = m×n · Bipartite ⟺ no odd cycle
- Adj. matrix: O(V²) space, O(1) lookup · Adj. list: O(V+E) space
- Havel-Hakimi: subtract & re-sort · Odd-degree vertices: even count
- Same degree seq ≠ isomorphic

## Top 12 one-liners for MCQs

1. G = (V, E): V vertices, E edges
2. Simple = no loop, no multi-edge
3. Handshaking: Σdeg(v) = 2|E|
4. Digraph: Σ deg⁺ = Σ deg⁻ = |E|
5. Walk ⊃ Trail ⊃ Path ⊃ Cycle
6. Kₙ has n(n−1)/2 edges
7. Cₙ is 2-regular with n edges
8. K<sub>m,n</sub> has m×n edges
9. Bipartite ⟺ no odd cycle
10. Adj. matrix O(V²); list O(V+E)
11. Odd-degree vertices: even count
12. Same degree seq ≠ isomorphic

**Top traps:** "path" in graph theory = no repeated vertex · cycle needs length ≥ 3 · Handshaking holds for multigraphs too · Kₙ is (n−1)-regular · adjacency matrix not symmetric for digraphs · same degree sequence ≠ isomorphic · Cₙ requires n ≥ 3 · Kₙ bipartite only for n ≤ 2

**All tricks together:** "Simple = clean" · "Every edge has two hands to shake" · "K gets all connections, C makes a ring, P draws a line" · "Even cycle = bipartite; odd cycle = not" · "Matrix is square, list is lean" · "No vertex repeated = path; no edge repeated = trail; both allowed = walk; closed path = cycle".

---

## Practice MCQs (exam pattern, 10 marks)

1. Maximum edges in a simple graph with 10 vertices: (a) 90 (b) 45 (c) 100 (d) 50
2. An undirected graph has 12 edges. Sum of all vertex degrees: (a) 12 (b) 6 (c) 24 (d) 144
3. In any undirected graph, the number of odd-degree vertices is: (a) always even (b) always odd (c) always zero (d) equal to |E|
4. In a digraph, the sum of all in-degrees equals: (a) 2|E| (b) |V| (c) |E| (d) |E|²
5. A walk with no repeated edge but vertices may repeat is called a: (a) trail (b) path (c) cycle (d) bridge
6. Which sequence CANNOT be a simple graph degree sequence? (a) (3,3,3,3) (b) (2,2,2,2) (c) (3,3,1,1) (d) (2,2,1,1)
7. A 4-regular simple graph with 9 vertices has how many edges? (a) 18 (b) 36 (c) 13 (d) 9
8. How many edges does K(4,5) have? (a) 9 (b) 20 (c) 36 (d) 10
9. A graph is bipartite iff it has no: (a) even cycle (b) odd cycle (c) vertex of degree 1 (d) bridge
10. For a simple graph with 8 vertices and 10 edges, the complement has how many edges? (a) 10 (b) 28 (c) 38 (d) 18

**Answer key:** 1-b · 2-c · 3-a · 4-c · 5-a · 6-c · 7-a · 8-b · 9-b · 10-d

## Written question (10 marks)

State and prove the Handshaking Lemma. Hence show that every undirected graph has an even number of vertices of odd degree. Illustrate with an example.

**Model answer:**

1. **Statement (2)** — For any undirected graph G = (V, E), Σ<sub>v∈V</sub> deg(v) = 2|E|.
2. **Proof (4)** — Each edge {u, v} has two ends. When summing degrees, that edge is counted once at u and once at v (a loop counts twice at its single vertex). So each edge contributes exactly 2 to the sum. Hence Σ deg(v) = 2|E|.
3. **Corollary (3)** — Split V into V_even (even degree) and V_odd (odd degree). Then Σ<sub>V_odd</sub> deg(v) = 2|E| − Σ<sub>V_even</sub> deg(v). The RHS is a difference of two even numbers, hence even. A sum of odd numbers is even only when the number of terms is even. Hence |V_odd| is even.
4. **Example (1)** — degrees 3, 3, 2, 2, 2: sum = 12 = 2|E|, so |E| = 6. Odd-degree vertices = 2 (even). ✓

**Before the exam ✓** Can state G=(V,E), simple vs digraph · Can apply Handshaking Lemma instantly · Can compute |E| for Kₙ, Cₙ, K<sub>m,n</sub> · Can classify walk/trail/path/cycle · Can run Havel-Hakimi · Can draw adj. matrix and adj. list · Can test bipartiteness via odd cycles · Knows same degree seq ≠ isomorphic
