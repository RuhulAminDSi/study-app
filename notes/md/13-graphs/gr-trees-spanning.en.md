# Trees, Spanning Trees, Distance & Connectivity — Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/13-graphs/gr-trees-spanning.en.html`
> Audience: BPSC Assistant Programmer, Bangladesh Bank AME, BSC IT Officer

---

## Syllabus Coverage

*Graph theory: basic definitions — simple graph, directed graph, subgraph, degree, walk, path, cycle, special graphs (Kₙ, Cₙ, Kₘ,ₙ), representations (adjacency matrix, adjacency list).* This lesson extends those fundamentals to trees, spanning trees, distance metrics, complementary graphs, cut-vertices, bridges, and k-connected graphs.

---

## 1. Trees

**Definition:** A **tree** is a connected, acyclic undirected graph. Equivalently: a graph with no cycles in which every pair of vertices is joined by exactly one path. A **forest** is a disjoint union of trees.

### Key Properties

| Property | Description |
|---|---|
| Edges | If a tree has *n* vertices, it has **n − 1** edges |
| Unique path | Exactly one path between any two vertices |
| Adding edge | Adding any edge creates **exactly one cycle** |
| Removing edge | Removing any edge **disconnects** the graph |
| Leaves | Every tree with n ≥ 2 has at least **2 leaves** (degree 1) |
| Forest | *n* vertices, *k* trees → **n − k** edges |

**Memory trick:** *"A tree never loops — it only branches."* No cycles, no shortcuts, just one road between any two nodes. Minimum edges for maximum reach.

**Exam trap:** A tree is **not** just "acyclic" — it must also be **connected**. An acyclic graph with 4 vertices and 2 edges is a forest, not a tree. A single vertex (n = 1) is a tree with 0 edges — the formula n − 1 still holds.

**Worked example:** A graph has 8 vertices and 7 edges. Is it necessarily a tree? **No** — it could be disconnected (e.g. a triangle + 5 isolated vertices has 3 edges, not 7). A connected graph with *n* vertices and *n* − 1 edges **is** a tree.

---

## 2. Spanning Trees

**Definition:** A **spanning tree** of a connected graph G = (V, E) is a subgraph T = (V, E') such that: (i) T includes **all vertices** of G, and (ii) T is a **tree** (connected and acyclic). Any spanning tree has exactly **|V| − 1** edges.

### Key Facts

- Every connected graph has **at least one** spanning tree
- A graph with cycles can have **many** spanning trees
- Number of edges in any spanning tree = |V| − 1
- Removing one edge from each cycle in G yields a spanning tree
- **Cayley's formula:** The number of distinct labelled spanning trees of Kₙ is **nⁿ⁻²**
- For a cycle Cₙ, the number of spanning trees is exactly **n** (remove any one of the n edges)

**Worked example:** C₄ has 4 vertices and 4 edges. Removing any one edge breaks the cycle while keeping the graph connected, giving a spanning tree. Since there are 4 edges, C₄ has exactly **4** spanning trees. For K₄, Cayley gives 4² = **16** spanning trees.

**Memory trick:** *"Spanning tree = skeleton."* It touches every vertex (spans all) and uses the fewest possible edges (tree) to keep everything connected. Think of it as the minimum-cable wiring to link all computers in a network.

**Exam trap:**
- A spanning tree of G is **not** a subgraph of every spanning tree — it is a spanning tree **of G**. Different spanning trees share vertices but may differ in edges.
- A disconnected graph has **no** spanning tree — only a **spanning forest**.
- K₄ has 4⁴⁻² = **16** spanning trees, not 6.

**IT link:** Minimum-spanning-tree algorithms (Kruskal's, Prim's) are used in network design, cluster analysis, and approximating the Traveling Salesman Problem.

---

## 3. Distance in Graphs

**Definition:** The **distance** d(u, v) between two vertices u and v is the length (number of edges) of a **shortest path** connecting them. If no path exists, d(u, v) = ∞.

### Distance Properties

| Property | Description |
|---|---|
| d(u, v) = 0 | If and only if u = v |
| d(u, v) = d(v, u) | Symmetric in undirected graphs |
| Triangle inequality | d(u, w) ≤ d(u, v) + d(v, w) |
| Infinite distance | If u and v are in different components |

### Derived Metrics

- **Eccentricity:** ecc(v) = max{d(v, u) \| u ∈ V}
- **Diameter:** diam(G) = max{ecc(v) \| v ∈ V}
- **Radius:** rad(G) = min{ecc(v) \| v ∈ V}
- **Center:** {v | ecc(v) = rad(G)}
- **Periphery:** {v | ecc(v) = diam(G)}

**Worked example — P₅ path graph (A–B–C–D–E):**
- Distances from A: d(A,B)=1, d(A,C)=2, d(A,D)=3, d(A,E)=4, so ecc(A)=4
- Similarly: ecc(B)=3, ecc(C)=2, ecc(D)=3, ecc(E)=4
- **Diameter** = max ecc = **4**
- **Radius** = min ecc = **2**
- **Center** = {C}
- **Periphery** = {A, E}

**Worked example — S₄ star graph (center c, leaves a, b, d):**
- d(c,a)=d(c,b)=d(c,d)=1, d(a,b)=d(a,d)=d(b,d)=2
- ecc(c)=1, ecc(a)=ecc(b)=ecc(d)=2
- **Diameter** = 2, **Radius** = 1, **Center** = {c}, **Periphery** = {a, b, d}
- Note: in a star graph, rad ≠ diam (rad = diam/2 only for paths with odd length)

**Exam trap:**
- Diameter is the **maximum** eccentricity, not the maximum degree.
- The center may contain **one or two adjacent** vertices — e.g. P₄ has center {B, C}.
- In a disconnected graph, distance is ∞ between components, so diameter is often defined only for connected graphs.

---

## 4. Complementary Graphs

**Definition:** The **complement** of a graph G = (V, E), denoted **Ḡ**, has the **same vertex set** V, and an edge {u, v} is in Ḡ **if and only if** {u, v} is **not** in E. Thus G and Ḡ partition the edges of the complete graph Kₙ.

### Properties

| Property | Description |
|---|---|
| G ∪ Ḡ | Complete graph Kₙ (edge-disjoint union) |
| Ḡ̄ | G (complement of complement is original) |
| Edges | \|E(Ḡ)\| = **n(n−1)/2 − \|E(G)\**| |
| Self-complementary | G ≅ Ḡ; requires n ≡ 0 or 1 (mod 4) |

**Worked example:** For a self-complementary graph on 8 vertices: |E| = 8·7/4 = **14** edges.

**Memory trick:** *"Complement = the rest."* Take Kₙ, remove G's edges, what remains is Ḡ. For a self-complementary graph, G and Ḡ are mirror images in edge space — each gets exactly half of Kₙ's edges.

**Exam trap:**
- G and Ḡ **never** share an edge — their edge sets are complementary within Kₙ.
- Both G and Ḡ cannot be disconnected for n ≥ 2 — at least one is connected.
- A self-complementary graph on n vertices has exactly n(n−1)/4 edges, so n(n−1) must be divisible by 4 — this means n ≡ 0 or 1 (mod 4).

---

## 5. Cut-Vertices (Articulation Points)

**Definition:** A vertex v is a **cut-vertex** (articulation point) if removing v and all incident edges **increases** the number of connected components. A graph with no cut-vertices is **2-connected** (or non-separable).

### Key Properties

- Bridges and cut-vertices are **weak points** in networks
- Leaves are **not** cut-vertices (except in K₂)
- Every cycle has **no** cut-vertices
- A block is a maximal subgraph **without** cut-vertices
- A tree with n ≥ 3 has n − 2 cut-vertices (all non-leaf vertices)

**Worked example:** Graph: A—B—C with D attached to B (B is centre). Removing B gives components {A}, {C}, {D} — **3 components** (was 1). So B is a cut-vertex. A, C, D are leaves — removing any one leaves 2 vertices still connected, so they are **not** cut-vertices. In a path P₅ (A–B–C–D–E), the cut-vertices are B, C, D (3 of them); A and E are leaves, not cut-vertices.

**Memory trick:** *"A cut-vertex is a bottleneck."* Remove it and the network falls apart into more pieces. Think of a bridge city on a river — close it and the two banks are isolated.

**Exam trap:** A leaf (degree-1 vertex) is **never** a cut-vertex in a tree with ≥ 3 vertices — removing it leaves the rest still connected. Only in K₂ does the single edge's endpoint count as a cut-vertex. Also: a graph with a cut-vertex has κ(G) = 1, so it is **not** 2-connected.

**IT link:** Cut-vertices identify single points of failure in communication networks, power grids, and road systems — locations where one outage isolates entire regions.

---

## 6. Bridges (Cut-Edges)

**Definition:** An edge e is a **bridge** (cut-edge) if removing e **increases** the number of connected components. Equivalently: e is a bridge **if and only if** it belongs to **no cycle** in G.

### Key Facts

- Every edge in a **tree** is a bridge
- An edge is a bridge ⟺ it is not in any cycle
- Removing a bridge **disconnects** the graph
- Bridges are the edge-analogue of cut-vertices
- A graph with no bridges is **2-edge-connected**

### DFS Bridge-Finding Algorithm

Compute **discovery time** disc[u] and **low-link** value low[u] = min(discovery time of u, discovery time of ancestor reachable via back-edge from subtree of u). Edge (u, v) (u = parent of v) is a **bridge** if **low[v] > disc[u]**.

**Worked example — Triangle + tail:** G: A—B, B—C, C—A (triangle), C—D (tail). Edge C—D is a bridge (removing it isolates D). Edges A—B, B—C, C—A are **not bridges** — each is part of the cycle, and removing any one leaves a path A-B-C still connected. So this graph has exactly **1 bridge**: C—D.

**Worked example — Path P₄:** A—B—C—D. Every edge is a bridge — 3 bridges, 0 cycles.

**Memory trick:** *"No cycle = bridge."* If you can绕 (go around) from v back to u without using edge (u,v), then (u,v) is safe — it is not a bridge. If not, it is a bridge.

**Exam trap:**
- An edge in a **cycle** is **never** a bridge — removing one edge from a cycle leaves a path, still connected.
- **Every tree edge is a bridge**, but not every bridge is in a tree — bridges exist in graphs with cycles too.
- low[v] > disc[u] (strictly greater); low[v] = disc[u] means there is a back-edge, so (u,v) is **not** a bridge.

**IT link:** A 2-edge-connected graph has no bridges — there are two independent paths between every pair of vertices. This concept is used in fault-tolerant network design.

---

## 7. Blocks & k-Connected Graphs

### Block

A **block** is a maximal connected subgraph with **no cut-vertex**. Blocks are either:
1. A maximal 2-connected subgraph, or
2. A bridge (single edge that is a block itself), or
3. An isolated vertex.

A **block tree** (BC-tree) has nodes for blocks and cut-vertices, with edges linking each cut-vertex to the blocks it belongs to.

### k-Connected Graphs

A graph is **k-connected** if |V| > k and removing any set of fewer than k vertices leaves the graph connected.

- **Vertex connectivity** κ(G): minimum number of vertices whose removal disconnects G (or makes it trivial).
- **Edge connectivity** λ(G): minimum number of edges whose removal disconnects G.

### Whitney's Theorem

For every graph G:

> **κ(G) ≤ λ(G) ≤ δ(G)**

where δ(G) is the minimum degree.

### Connectivity Values Table

| Graph | κ(G) | λ(G) | Note |
|---|---|---|---|
| Tree (n ≥ 2) | 1 | 1 | Has cut-vertices and bridges |
| Cycle Cₙ (n ≥ 3) | 2 | 2 | 2-connected, 2-edge-connected |
| Complete Kₙ | n−1 | n−1 | Maximally connected |
| Complete bipartite K_{m,n} (m,n ≥ 2) | min(m,n) | min(m,n) | Depends on smaller part |

**Worked example — connectivity values:**
- (a) Tree with n ≥ 2: κ = 1 (has cut-vertices), λ = 1 (has bridges).
- (b) Cycle Cₙ, n ≥ 3: κ = 2, λ = 2 — removing any 1 vertex or edge leaves a path (connected).
- (c) K₆: κ = 5, λ = 5 — you must remove 5 vertices/edges to isolate one vertex.
- (d) K₃,₃: κ = 3, λ = 3 (3-regular, each vertex has degree 3).

**Memory trick:** *"κ is the weakest link, δ is the strongest ceiling."* Vertex connectivity (κ) ≤ edge connectivity (λ) ≤ minimum degree (δ). The minimum degree is an upper bound — you can always disconnect by removing all neighbours of a min-degree vertex, but sometimes fewer suffice.

**Exam trap:**
- κ(Kₙ) = n − 1, **not** n. You need to remove all but one vertex to disconnect Kₙ.
- A graph with a cut-vertex has κ = 1 — it is **not** 2-connected.
- κ ≤ λ ≤ δ is always true; equality on both sides holds for Kₙ and Cₙ but not generally.

---

## Night-Before-the-Exam Sheet

### Fact Sheet

- Tree: connected + acyclic
- n vertices → n − 1 edges
- Unique path between any 2 vertices
- Adding edge → exactly one cycle
- Removing edge → disconnects
- Leaves: at least 2 when n ≥ 2
- Forest: n vertices, k trees → n − k edges
- Spanning tree: |V| − 1 edges
- Cayley: Kₙ has nⁿ⁻² spanning trees
- Distance: shortest-path length
- Diameter = max eccentricity
- Radius = min eccentricity
- Center: vertices with ecc = rad
- Periphery: vertices with ecc = diam
- G ∪ Ḡ = Kₙ (edge-disjoint)
- \|E(Ḡ)\| = n(n−1)/2 − \|E(G)\|
- Self-complementary: n ≡ 0, 1 (mod 4)
- Cut-vertex: removal ↑ components
- Bridge: edge not in any cycle
- Bridge test: low[v] > disc[u]
- Block: maximal subgraph, no cut-vertex
- κ(G) ≤ λ(G) ≤ δ(G) (Whitney)
- κ(Kₙ) = n − 1; κ(Cₙ) = 2
- k-connected: survives removal of k−1 vertices

### Top 12 One-Liners for MCQs

1. Tree: n vertices, n − 1 edges
2. Forest: n vertices, k trees → n − k edges
3. Spanning tree of G has |V| − 1 edges
4. Cayley: Kₙ has nⁿ⁻² spanning trees
5. d(u,v) = length of shortest path
6. diam(G) = max ecc; rad(G) = min ecc
7. \|E(Ḡ)\| = n(n−1)/2 − \|E(G)\|
8. Cut-vertex: removal increases components
9. Bridge: edge not in any cycle
10. Bridge test: low[v] > disc[u]
11. Block: maximal subgraph with no cut-vertex
12. Whitney: κ ≤ λ ≤ δ

### Top Traps

- "Tree" requires both connected AND acyclic — acyclic alone is a forest
- A leaf is never a cut-vertex in n ≥ 3
- low[v] > disc[u] is strict — equality means a back-edge exists
- Self-complementary needs n(n−1)/4 edges, so n ≡ 0 or 1 (mod 4)
- κ(K₆) = 5, not 6
- Diameter is max eccentricity, not max degree
- Center of P₄ is {B,C}, not a single vertex

### All Tricks Together

- "A tree never loops — it only branches"
- "Spanning tree = skeleton"
- "Complement = the rest"
- "A cut-vertex is a bottleneck"
- "No cycle = bridge"
- "κ is the weakest link, δ is the strongest ceiling"

---

## Practice MCQs (10 marks)

1. How many edges does a tree with 20 vertices have?
   - a) 20  b) 21  c) 18  **d) 19**

2. Which is a bridge (cut-edge) of a graph?
   - a) An edge that joins a vertex to itself
   - b) An edge between two vertices of maximum degree
   - c) An edge that lies on every cycle of the graph
   - **d) An edge whose removal increases the number of connected components**

3. A simple graph G has 8 vertices and 10 edges. How many edges does its complement have?
   - a) 10  b) 28  c) 38  **d) 18**

4. A forest has 15 vertices and consists of 4 trees. How many edges does it have?
   - a) 14  **b) 11**  c) 15  d) 19

5. How many distinct labeled spanning trees does the complete graph K₄ have?
   - a) 4  b) 12  **c) 16**  d) 64

6. Which statement is true for every tree with at least two vertices?
   - a) It contains at least one cycle
   - b) Every vertex is a cut-vertex
   - c) It has exactly n edges
   - **d) Every edge is a bridge**

7. What is the vertex connectivity κ(K₆) of the complete graph on 6 vertices?
   - a) 6  **b) 5**  c) 4  d) 15

8. For the path graph with 7 vertices (6 edges in a line), what are the radius and the diameter?
   - **a) 3 and 6**  b) 6 and 3  c) 3.5 and 7  d) 4 and 6

9. For any graph G, let κ(G) be the vertex connectivity, λ(G) the edge connectivity and δ(G) the minimum degree. Which inequality (Whitney's) always holds?
   - a) λ ≤ κ ≤ δ  b) δ ≤ κ ≤ λ  **c) κ ≤ λ ≤ δ**  d) κ ≤ δ ≤ λ

10. A simple graph G with 8 vertices is self-complementary (G is isomorphic to its complement). How many edges does G have?
    - **a) 14**  b) 28  c) 7  d) 16

**Answer key:** 1-d · 2-d · 3-d · 4-b · 5-c · 6-d · 7-b · 8-a · 9-c · 10-a

---

## Written Question (10 marks)

**Prove that every tree with n vertices has exactly n − 1 edges.**

**Model answer:**

1. **Base case (n = 1).** A tree with one vertex has 0 edges. Formula: 1 − 1 = 0. ✓

2. **Inductive hypothesis.** Assume every tree with k vertices has k − 1 edges.

3. **Inductive step.** Let T be a tree with k + 1 vertices. T has at least two leaves (vertices of degree 1). Remove a leaf v and its incident edge e. The remaining graph T' has k vertices and is still a tree (removing a leaf preserves connectivity and acyclicity). By the hypothesis, T' has k − 1 edges. Therefore T has (k − 1) + 1 = **k** = (k + 1) − 1 edges. ✓

4. **Conclusion.** By mathematical induction, every tree with n vertices has exactly n − 1 edges for all n ≥ 1.

5. **Converse (bonus).** A connected graph with n vertices and n − 1 edges is a tree. Proof: it has no cycle (else removing one edge keeps it connected with n − 2 edges, contradicting minimality).
