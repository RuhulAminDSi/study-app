# Graph Theory (GRAPH): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 11 (Written 5, MCQ 6)
- **Corrections:** 1
- **Papers:** 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BPDB Assistant Engineer (CSE); BUET MSc in CSE; DPDC Assistant Manager (ICT); Petrobangla Assistant Manager (IT) (BUET)

## Topics

- Bellman-Ford, negative-weight cycle detection (1)
- Complete bipartite graph (1)
- Dijkstra's algorithm (1)
- Graph representation (1)
- Hamiltonian cycle (1)
- Planar graphs (Euler's formula) (1)
- Shortest path (1)
- Shortest path (Dijkstra / A*) (1)
- Shortest paths (Dijkstra, Bellman-Ford) (1)
- Spectral graph theory (1)
- Trees (leaves and vertices) (1)

## Bellman-Ford, negative-weight cycle detection

### Q4 <sub>Q0875</sub>

*Petrobangla Assistant Manager (IT) (BUET) · 2022-09-16 · Written*

How do you find single-source shortest paths in a graph with negative weights, justify it, and how do you detect a negative-weight cycle?

- **Printed answer:** Bellman-Ford: V−1 relaxation passes suffice since a shortest simple path has ≤ V−1 edges; example graph 0→1(1),1→2(−1),2→3(−1),3→0(−1) has a negative cycle
- **Correction:** Never states the detection step: after V−1 passes run one more relaxation pass; if any distance still decreases, a negative cycle is reachable from the source (shortest paths undefined). Complexity O(VE) also missing.
- **Source:** [PETROBANGLA/08_bellman-ford-negative-cycle.md](../PETROBANGLA/08_bellman-ford-negative-cycle.md) · [image](../PETROBANGLA/08_bellman-ford-negative-cycle.jpg)

## Complete bipartite graph

### Q3 <sub>Q0071</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Number of edges in the complete bipartite graph K(m,n)? (mn / m+n / m²+n² / m!n!)

- **Printed answer:** (ক) mn
- **Source:** [BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.md](../BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.md) · [image](../BCS/37_bcs-2025-ofdma-cache-mapping-bipartite.jpg)

## Dijkstra's algorithm

### Q5 <sub>Q0260</sub>

*BPDB Assistant Engineer (CSE) (inferred from page order) · 2021 · Written*

What is Dijkstra's algorithm and how does it find shortest paths in a weighted graph?

- **Source:** [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

## Graph representation

### Q1(vi) <sub>Q0248</sub>

*BPDB Assistant Engineer (CSE) · 2021 · MCQ*

Which is true? (a) Adjacency matrix is better for a dense graph (b) ... for a sparse graph (c) both (d) none

- **Note:** No answer printed. Expected: (a).
- **Source:** [BUET JOB/36_math-mcq-and-bpdb-2021.md](../BUET%20JOB/36_math-mcq-and-bpdb-2021.md) · [image](../BUET%20JOB/36_math-mcq-and-bpdb-2021.jpg); [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

## Hamiltonian cycle

### Q44 <sub>Q0106</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A Hamiltonian cycle must visit: (all edges once / some vertices / only leaves / all vertices once)

- **Printed answer:** (ঘ) All vertices exactly once
- **Source:** [BCS/45_hamiltonian-cycle-and-rnn.md](../BCS/45_hamiltonian-cycle-and-rnn.md) · [image](../BCS/45_hamiltonian-cycle-and-rnn.jpg)

## Planar graphs (Euler's formula)

### Q58 <sub>Q0118</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A simple connected planar graph with V ≥ 3 vertices, E edges, F faces satisfies: (E ≤ 3V−6 / E ≥ 3V / V+E = F / F ≤ V−2)

- **Printed answer:** (ক) E ≤ 3V − 6 (from V − E + F = 2 and 3F ≤ 2E)
- **Source:** [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg); [BCS/58_euler-corollary-deadlock-insertion-sort.md](../BCS/58_euler-corollary-deadlock-insertion-sort.md) · [image](../BCS/58_euler-corollary-deadlock-insertion-sort.jpg)

## Shortest path

### Q3 <sub>Q0030</sub>

*paper not shown · Written*

Shortest-path question from S1 to S4 on a 5-vertex graph (stem on the preceding page; only the final selected-vertices table is visible).

- **Printed answer:** Shortest S1→S4 paths: S1→S3→S4, S1→S5→S4 or S1→S2→S4; cost = 2.
- **Source:** [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg)

## Shortest path (Dijkstra / A*)

### Q8 <sub>Q0303</sub>

*DPDC Assistant Manager (ICT) (inferred from page order) · 2025-06-27 · Written*

A pathfinding robot needs the shortest path: which algorithm would you choose, why, and what are its steps?

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## Shortest paths (Dijkstra, Bellman-Ford)

### Q12 <sub>Q0278</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

Which algorithm finds single-source shortest paths in a weighted graph, and which handles negative edge weights?

- **Note:** No answer printed. Dijkstra; Bellman-Ford.
- **Source:** [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)

## Spectral graph theory

### Q15 <sub>Q0083</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

The characteristic polynomial of the adjacency matrix is used to study: (chromatic number directly / graph spectra / connectivity only / planarity)

- **Printed answer:** (খ) Graph spectra (eigenvalues of A)
- **Source:** [BCS/59_blockchain-polynomial-suffix-tree.md](../BCS/59_blockchain-polynomial-suffix-tree.md) · [image](../BCS/59_blockchain-polynomial-suffix-tree.jpg)

## Trees (leaves and vertices)

### Q78 <sub>Q0138</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A tree with K leaves has at least how many vertices? (K / K−1 / K+1 / 2K)

- **Printed answer:** (গ) K + 1 (star tree)
- **Source:** [BCS/53_bfs-injective-functions-tree-leaves.md](../BCS/53_bfs-injective-functions-tree-leaves.md) · [image](../BCS/53_bfs-injective-functions-tree-leaves.jpg); [BCS/57_write-ahead-logging-random-search.md](../BCS/57_write-ahead-logging-random-search.md) · [image](../BCS/57_write-ahead-logging-random-search.jpg)
