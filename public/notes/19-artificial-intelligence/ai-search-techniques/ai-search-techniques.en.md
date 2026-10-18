# Search Techniques in AI: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-search-techniques.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-search-techniques.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** "Introduction to old and new AI techniques; Knowledge representation; Propositional and first order logic; **Search techniques in AI**; Probabilistic reasoning; Natural language processing." This note covers exactly that line. Knowledge representation and logic have their own note; probabilistic reasoning and NLP follow it.

**High-yield:** nodes = states, edges = actions, frontier vs closed list · BFS = FIFO queue, DFS = LIFO stack · UCS = priority queue on g(n), optimal iff every step cost ≥ ε > 0 · A*: f(n) = g(n) + h(n), optimal only when h is admissible · consistency ⇒ admissibility · Manhattan distance for the sliding puzzles · α-β: O(b^(d/2)) best case, O(b^(3d/4)) random · CSP = (X, D, C): backtracking + MRV + forward checking.

---

## 1. Search as a state-space problem

- **State-space search** models a problem as a graph whose **nodes are complete states** and whose **edges are actions (operators)**. The agent starts from the **initial state** and stops when a state passes the **goal test**. A *node* additionally remembers parent, action and path cost g(n).
- Five parts of a formulation: **I** initial state · **A** actions · **T** transition function results(s, a) = s′ · **G** goal test · **C** path cost C(s₀, …, s<sub>k</sub>).

| Term | Meaning in one line |
|---|---|
| state space | every state reachable from the start |
| frontier (open list) | leaves generated, not yet expanded |
| closed list | nodes expanded — stops repeats |
| d, b | d = shallowest goal depth, b = mean successors |
| g(n) | cost of the best-known path start → n |

- 💡 **Trick:** the **frontier** is the waiting room, the **closed list** is the memory.
- ⚠ **Trap:** a **state** is a complete description, not a history; two nodes may hold the **same state** by different paths; goal **test** ≠ goal **state**; b is an **average** branching factor.
- ✍ Worked example — the 8-puzzle: state = 3 × 3 arrangement of tiles 1–8 plus the blank; operator = slide a neighbouring tile into the blank (2, 3 or 4 moves, effective b ≈ 1.67); goal test = 1 2 3 / 4 5 6 / 7 8 _; path cost = number of moves. Only **9!/2 = 181 440** of the 9! arrangements are reachable, and the inversion test for reachability costs O(n²).
- **Tree search vs graph search:** tree search keeps no list (completeness then needs finite b and d); graph search keeps a closed list but may need **re-expansion** when a cheaper path to the same node appears.
- **IT link:** any problem writable as "state + action + goal test" is a search problem — the algorithm just walks that state graph.

## 2. Breadth-first and depth-first search

- **Uninformed (blind) search** uses no knowledge beyond the initial state and the goal test. **BFS** expands the **shallowest unexpanded node** (FIFO queue); **DFS** expands the **deepest unexpanded node** (LIFO stack).

| Property | Breadth-first | Depth-first |
|---|---|---|
| frontier | FIFO **queue** | LIFO **stack** |
| expands | shallowest left | deepest left |
| complete | Yes, if b, d finite | **No** |
| optimal | Yes, **unit step costs** | No |
| time / space | O(b^d) / **O(b^d)** | O(b^m) / **O(bm)** |
| use for | fewest steps, level order | tight memory, mazes |

- 💡 **Trick:** the **queue** is wide and blind — it remembers everything and knows nothing; the **stack** is narrow and brave — it remembers almost nothing and goes deep.
- ⚠ **Trap:** "BFS finds the shortest path" means fewest **edges**; with unequal costs the fewest-edge path can be the **dearest** — use UCS. DFS is neither complete nor optimal. BFS's real price is **space**. BFS = queue, DFS = stack; **every informed search uses a priority queue**.
- ✍ In the tree drawn in the notes (goal Z under G): BFS expands A, B, C, D, E, F, G, Z = **8 expansions**; DFS expands A, B, D, H, I (dead end), E, C, F, G, Z = **10 expansions**.

## 3. Uniform-cost, depth-limited and iterative deepening

- **UCS** = BFS on costs, priority queue on g(n); it expands the **cheapest node so far** (Dijkstra's algorithm). **DLS** = DFS cut off at depth l: complete iff l ≥ d, never optimal. **IDDFS** = DLS repeated with l = 0, 1, 2, …: **DFS memory with BFS completeness**.

| Algorithm | Complete | Optimal | Time | Space |
|---|---|---|---|---|
| BFS | Yes | Yes, unit cost | O(b^d) | O(b^d) |
| DFS | **No** | **No** | O(b^m) | O(bm) |
| UCS (Dijkstra) | Yes | Yes | O(b^(C*/ε)) | O(b^(C*/ε)) |
| DLS | Yes if l ≥ d | No | O(b^l) | O(bl) |
| IDDFS | Yes | Yes, unit cost | O(b^d) | O(bd) |

- Symbols: b = branching factor, d = depth of the shallowest goal, m = maximum depth, C* = cost of the optimal solution, ε = smallest step cost.
- ✍ UCS on S→A = 1, S→B = 7, A→B = 2, A→D = 5, B→D = 1, B→C = 5, C→G = 10, D→G = 2 expands S, A, B, D, G and returns **S-A-B-D-G**, cost 1 + 2 + 1 + 2 = **6**; the rival S-B-C-G costs 7 + 5 + 10 = **22** and is never opened. Watch the re-insertions: B's g falls 7 → 3 when A is expanded.
- 💡 **Trick:** UCS is **BFS with a metre tape**; IDDFS is **BFS wearing a DFS's memory**.
- ⚠ **Trap:** UCS is optimal only because every step cost is **at least ε > 0**; BFS is **not** optimal on weighted graphs; IDDFS is optimal only for **unit** costs.
- **Bidirectional search:** forward from the start and backward from the goal at once turns a d-deep tree into two d/2-deep trees — work falls from **O(b^d)** to about **O(b^(d/2))**.

## 4. Informed search: greedy best-first and A*

- **Informed (heuristic) search** uses a **heuristic h(n)** estimating the cost from n to the goal. All best-first algorithms keep a **priority queue** and pop the smallest f; only f differs.

| Algorithm | f(n) | Ranks by | Complete | Optimal |
|---|---|---|---|---|
| UCS | g(n) | cost so far | Yes | Yes |
| Greedy best-first | h(n) | looks closest | **No** | **No** |
| A* | **g(n) + h(n)** | cheapest route | Yes | Yes, if h admissible |

- A* properties: time **O(b^d)**, space **O(b^d)**; the gain is the **constant factor**. h = 0 collapses A* to UCS; g = 0 collapses it to greedy best-first.
- ✍ Same graph, two answers (S→A = 1, S→B = 4, A→B = 2, A→G = 6, B→G = 2; h(S) = 5, h(A) = 4, h(B) = 2, h(G) = 0): greedy expands B and returns **S-B-G, cost 6**; A* re-reaches B with g = 3 < 4 and G with g = 5 < 7 and returns **S-A-B-G, cost 5**.
- 💡 **Trick:** g is the bill already paid, h is the doctor's guess, f is the total bill.
- ⚠ **Trap:** f = h(n) alone is **greedy**, f = g(n) alone is **UCS**, f = g·h is meaningless; A*'s optimality is a promise about h; greedy best-first is **incomplete**.
- **Where A* runs:** route finding (Google Maps, OSRM), robot path planning, typewriter word prediction. With a **consistent** heuristic, A* is the dynamic-programming view of shortest paths.

## 5. Admissible, consistent and good heuristics

- **h*(n)** = true cost of the cheapest path from n to a goal. **Admissible**: h(n) ≤ h*(n) for every n. **Consistent (monotone)**: h(n) ≤ c(n, n′) + h(n′) on every edge. Consistency implies admissibility.

| Problem | Usual heuristic h(n) | Admissible? | Comment |
|---|---|---|---|
| route finding | straight-line distance | Yes | roads wind, so it is weak |
| 8-puzzle | tiles out of place | Yes | very weak — ignores the blank |
| 8-, 15-puzzle | **Manhattan distance** | Yes | row + column; standard |
| sliding puzzles | pattern databases | Yes | exact costs for a few tiles |
| 8-queens | attacking pairs | No | divide by 2 to repair |
| travelling salesman | cheapest straight link | Yes | classic lower bound |

- ✍ Worked example 1 (8-puzzle): start 2 8 3 / 1 6 4 / 7 5 _ , goal 1 2 3 / 4 5 6 / 7 8 _ . Tiles out of place → h = 6; Manhattan sums 1 + 1 + 2 + 1 + 1 + 2 = **h = 8**, and h* ≥ 8.
- ✍ Worked example 2 (admissibility audit): for S→A = 2, S→B = 1, A→C = 2, B→C = 4, B→D = 5, C→G = 3, D→G = 2 with h(S) = 5, h(A) = 4, h(B) = 4, h(C) = 3, h(D) = 2, h(G) = 0, the true remaining costs are h*(G) = 0, h*(C) = 3, h*(D) = 2, h*(A) = 5, h*(B) = 7, h*(S) = 7 — every h(n) ≤ h*(n), so h is **admissible** and consistent.
- 💡 **Trick:** admissible aims low; consistency is cautious. Hierarchy: **consistency ⇒ admissibility**.
- ⚠ **Trap:** admissible means **never overestimate** (h = 0 is trivially admissible and useless); **tree search** A* needs admissible h, **graph search** A* needs consistency.
- If h = c · h* with c > 0, the error δ = h* − h makes A* behave roughly like an **uninformed search with branching factor b^δ**: on the 8-puzzle the tile-count heuristic is like b ≈ 3, Manhattan like b ≈ 1.4.

## 6. Local search: hill climbing, annealing, genetic algorithms

- **Local search** keeps only **one current state** and scores it with an **evaluation function E(s)**. **Hill climbing** moves to a neighbour with better E and stops where none is better: a **local optimum**.

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| E(x) | 4 | **5** | 3 | 6 | 1 | 2 | **7** | 4 | 6 |

| Method | What it does | Local optimum? |
|---|---|---|
| Hill climbing | move to a better neighbour, stop when none is | No — **stuck** |
| Random restart | restart from a random state, keep the best | Yes, by luck |
| Simulated annealing | accept a worse move with p = **e^(−ΔE/T)**, T falling | Yes while T is high |
| Genetic algorithm | a **population**: selection, crossover, mutation | Yes, many live at once |
| Tabu search | forbid the last few moves (short memory) | Yes, it walks out |

- ✍ Hill climbing from x = 3 (E = 6) stops at the **local maximum 6** while the global maximum 7 at x = 6 is two steps away. With T = 2 the move to x = 4 (ΔE = −5) is accepted with probability e^(−5/2) ≈ **0.082**; then x = 5 and x = 6 are accepted outright.
- 💡 **Trick:** annealing is eating a cold dinner — to escape a bad meal you must first accept a worse one; a genetic algorithm breeds a population (fitness, selection, crossover, mutation).
- ⚠ **Trap:** getting stuck at a local optimum is hill climbing's **defining** failure; the acceptance probability falls both as T falls and as the move gets worse; GA operators are **selection, crossover, mutation**; local search keeps **no path**.
- **Applications:** VLSI layout and channel assignment (hill climbing); 8-queens, tour improvement, chip placement (annealing); antenna placement, function optimisation (GA).

## 7. Adversarial search: minimax and α-β pruning

- With two opponents the graph is a **game tree**: MAX maximises the utility, MIN minimises it. Minimax: v(s) = utility on a terminal node, **max** of the successors at MAX, **min** at MIN; b branches to depth d cost **O(b^d)** evaluations.
- ✍ On the tree with leaves D: 3, 5 · E: 6, 9 · F: 2, 3 · G: 5, 8: D = max(3,5) = 5, E = max(6,9) = 9, B = min(5,9) = **6**; F = 3, so β = 3 at C; at G the first leaf 5 already beats β, so the leaf **8 is cut**; G = 5, C = min(3,5) = 3, root = max(6,3) = **6**. Plain minimax evaluates 8 leaves, α-β with this order **7**.
- For b = 2 and d = 10: minimax needs 2^10 = **1024** leaves, perfect-ordering α-β about 2^5 = **32** — the same time, **twice the depth**.

| Order of moves | Nodes examined |
|---|---|
| best first | **O(b^(d/2))** ≈ 10^(0.15d) |
| random | O(b^(3d/4)) ≈ 10^(0.26d) |
| worst | O(b^d) |

- 💡 **Trick:** **α is MAX's best so far, β is MIN's best so far**; if a node's best can no longer beat what the opponent already has, cut it. Update α at MAX nodes only, β at MIN nodes only; α ≤ β always holds at a node.
- ⚠ **Trap:** pruning changes the **work**, never the **value**; move order is everything; minimax assumes **optimal play by both sides**.

## 8. Constraint satisfaction and backtracking

- A **CSP** is the triple (X, D, C): variables X, domains D, constraints C. A solution is a complete assignment — no path, no cost — so BFS and A* are **not** used. The standard solver is **backtracking search**: assign a value, recurse, undo on failure.

| Ingredient | Meaning |
|---|---|
| variable, domain | a thing to decide; its values |
| unary / binary / n-ary | a constraint over 1, 2, k variables — its **arity** |
| constraint graph | variables as nodes, an edge per pair |
| backtracking | assign, recurse, **undo on failure** |
| forward checking | prune the neighbours' domains after each assignment |
| MRV (fail-first) | next variable = the one with the **fewest values left** |
| LCV | next value = the one that constrains others **least** |
| arc consistency AC-3 | every value has support next door |
| min-conflicts | local search: fix the worst conflict |

- ✍ 4-queens with forward checking and MRV: Q1 = 1 gives Q2 ∈ {3,4}, Q3 ∈ {2,4}, Q4 ∈ {2,3}; Q2 = 3 empties Q3, Q2 = 4 forces Q3 = 2 and then Q4 = 3, a diagonal clash — so Q1 = 1 is dead. **Q1 = 2** leaves Q2 ∈ {4}; MRV forces Q2 = 4, Q3 = 1, Q4 = 3, giving **(2, 4, 1, 3)** in four assignments.
- 💡 **Trick:** MRV asks the most constrained question first; LCV tries the least annoying answer first; forward checking crosses out the answers your neighbours just lost.
- ⚠ **Trap:** a CSP is **not** a path search; forward checking is **not** arc consistency; MRV chooses the **variable**, LCV the **value**; backtracking is complete but exponential, and general CSPs are NP-complete.
- **Applications:** Sudoku, timetabling, rostering, cryptarithmetic, scheduling, register allocation. On an 8 × 8 board plain backtracking needs about **10^5** nodes for the first solution; MRV + forward checking brings that to a few hundred.

## 9. Choosing a search and what it costs

| Algorithm | Complete | Optimal | Time | Space | Frontier |
|---|---|---|---|---|---|
| BFS | Yes | Yes, unit | O(b^d) | O(b^d) | FIFO queue |
| DFS | No | No | O(b^m) | O(bm) | LIFO stack |
| UCS | Yes | Yes | O(b^(C*/ε)) | O(b^(C*/ε)) | queue on g |
| IDDFS | Yes | Yes, unit | O(b^d) | O(bd) | stack per depth |
| Greedy best-first | No | No | O(b^m) | O(b^m) | queue on h |
| A* | Yes | Yes, admissible h | O(b^d) | O(b^d) | queue on g + h |
| α-β | Yes | Yes, same value | O(b^(d/2)) best | O(bd) | bounds α, β |

| If the problem looks like… | Use |
|---|---|
| fewest steps, all equal | BFS, or IDDFS when memory is tight |
| deep search, little memory | DFS, DLS, IDDFS |
| roads, money, fuel | UCS / Dijkstra |
| roads with a map at hand | A* with straight-line distance |
| a board game, an opponent | minimax + α-β |
| timetable, roster, Sudoku | backtracking + MRV + forward checking |
| huge combinatorial or continuous optimum | annealing, genetic algorithm, tabu |

- ✍ Why heuristics are not optional: the 15-puzzle tree an uninformed search must face has about **7 × 10^32** nodes at b = 2.13 and d = 100, although the whole problem contains only 16!/2 ≈ **1.05 × 10^13** distinct states. With an admissible Manhattan heuristic the effective branching factor collapses to roughly 1.4.
- ⚠ **Trap:** **complete ≠ optimal**; A*'s O(b^d) is a **worst case**; α-β saves **time, never correctness**.

---

## Practice MCQs

1. BFS frontier is a: (a) LIFO stack (b) priority queue (c) search tree (d) FIFO queue
2. A* picks the next node: (a) g(n) + h(n) (b) g(n) × h(n) (c) h(n) alone (d) g(n) alone
3. h(n) is admissible if: (a) it overestimates (b) it never exceeds (c) it is constant time (d) it falls by 1/edge
4. Perfect ordering, α-β examines about: (a) O(b × d) (b) O(d^b) (c) O(b^(d/2)) (d) O(b^(2d))
5. IDDFS is preferred for: (a) optimality (b) low memory (c) no depth limit (d) no repeats
6. Plain DFS is complete only when: (a) costs are equal (b) graph is finite (c) h is admissible (d) depth is bounded
7. At a MIN node minimax returns: (a) the minimum (b) the maximum (c) the sum (d) α + β
8. MRV picks the variable with: (a) the largest domain (b) the most constraints (c) fewest values (d) the highest degree
9. Annealing accepts worse moves with probability: (a) p → 0 as T → 0 (b) p = e^(−ΔE/T) (c) only uphill moves (d) equal chance
10. UCS is optimal if step costs are: (a) at least ε > 0 (b) exactly 1 (c) negative (d) zero

**Answer key:** 1-d · 2-a · 3-b · 4-c · 5-b · 6-d · 7-a · 8-c · 9-d · 10-a

## Written question (10 marks)

Trace A* search on the directed graph with edge costs S→A = 2, S→B = 1, A→C = 2, B→C = 4, B→D = 5, C→G = 3, D→G = 2 and heuristics 5, 4, 4, 3, 2, 0 for S, A, B, C, D, G. Give the expansion order, the path, its cost and an admissibility test.

**Model answer:**
1. **Rule (1 mark):** use f = g + h with the frontier in a priority queue on f. Start: open = {S (g = 0, f = 5)}.
2. **Expand S (1 mark):** A (g = 2, f = 6), B (g = 1, f = 5); open = {B 5, A 6}.
3. **Expand B (1 mark):** C (g = 5, f = 8), D (g = 6, f = 8); open = {A 6, C 8, D 8}.
4. **Expand A (1 mark):** C is reachable with g = 4 < 5, so C is **updated** to g = 4, f = 7; open = {C 7, D 8}.
5. **Expand C (2 marks):** G (g = 7, f = 7); open = {G 7, D 8}; expand G — goal test passes, so the order is **S, B, A, C, G**.
6. **Path and cost (1 mark):** **S-A-C-G**, 2 + 2 + 3 = **7**; S-B-C-G = 8 and S-B-D-G = 8 are dearer.
7. **Admissibility (3 marks):** true remaining costs h*(G) = 0, h*(C) = 3, h*(D) = 2, h*(A) = 5, h*(B) = 7, h*(S) = 7 — every h(n) ≤ h*(n), so h is **admissible** and consistent, hence A*'s answer is guaranteed **optimal**.

## Night-before one-liners

BFS frontier = FIFO **queue**, DFS = LIFO **stack** · BFS optimal only for **unit** step costs · DFS is neither complete nor optimal · UCS = Dijkstra, optimal, needs ε > 0 · IDDFS = BFS completeness + DFS memory O(bd) · greedy best-first: f = h, not optimal · A* optimal ⟸ h admissible · consistency ⇒ admissibility · Manhattan distance is the 8-puzzle heuristic · minimax: max at MAX nodes, min at MIN nodes · α-β prunes work, never the value · CSP = variables, domains, constraints, no path · 8-puzzle 9!/2 = 181 440, effective b ≈ 1.67 · α-β b = 2, d = 10: 1024 vs about 32 leaves · annealing accepts with p = e^(−ΔE/T) · GA = selection, crossover, mutation.