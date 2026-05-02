import type { Module } from '../../types'

const m13: Module = {
  title: "13. Graphs",
  titleBn: "১৩. গ্রাফ তত্ত্ব",
  level: "Intermediate",
  lessons: [
    {
      id: "gr1",
      title: "Simple Graphs, Digraphs, Subgraphs, Vertex-Degrees, Walks, Paths & Cycles",
      titleBn: "সরল গ্রাফ, ডাইগ্রাফ, সাবগ্রাফ, ভার্টেক্স-ডিগ্রি, ওয়াক, পাথ ও সাইকেল",
      content: `📌 GRAPH FUNDAMENTALS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A graph G = (V, E) where V = set of vertices (nodes) and E = set of edges (connections).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. SIMPLE GRAPH

Definition: An undirected graph with:
• No loops (edge from vertex to itself)
• No multiple edges between same pair of vertices

Example:
V = {A, B, C}
E = { (A,B), (B,C) }

Visualization:
    A ----- B
             \\
              C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. DIRECTED GRAPH (DIGRAPH)

Definition: A graph where edges have direction. Edge represented as ordered pair (u → v).

Example:
V = {1, 2, 3}
E = { (1,2), (2,3) }

Visualization:
    1 → 2 → 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. SUBGRAPH

Definition: A subgraph H of graph G is formed by:
• Subset of vertices of G
• Subset of edges of G connecting those vertices

Example:
G: V = {A, B, C, D}, E = {(A,B), (B,C), (C,D), (A,D)}
Subgraph H: V = {A, B, C}, E = {(A,B), (B,C)}

Visualization:
    G:                 H:
    A ----- B          A ----- B
    |       |          |
    |       |          |
    D ----- C          C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 4. VERTEX DEGREES

Definition: Number of edges incident to a vertex.

For Undirected Graph:
deg(v) = number of edges connected to v

For Directed Graph (Digraph):
• In-degree deg⁻(v) = number of edges entering v
• Out-degree deg⁺(v) = number of edges leaving v

Example (Undirected):
V = {A, B, C}, E = {(A,B), (A,C)}
deg(A) = 2, deg(B) = 1, deg(C) = 1

Example (Directed):
V = {A, B, C}, E = {A→B, A→C}
deg⁺(A)=2, deg⁻(A)=0
deg⁺(B)=0, deg⁻(B)=1

Handshaking Lemma (Undirected):
Σ deg(v) = 2|E|
(The sum of all degrees equals twice the number of edges)

Handshaking Lemma (Directed):
Σ deg⁺(v) = Σ deg⁻(v) = |E|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 5. WALKS, PATHS, AND CYCLES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Definition & Example                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Walk                │ Sequence of vertices where consecutive      │
│                     │ vertices are connected by edges.            │
│                     │ Can repeat vertices and edges.              │
│                     │ Example: A → B → C → B                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Trail               │ Walk with no repeated edges.                │
│                     │ Example: A → B → C → D                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Path                │ Walk with no repeated vertices.             │
│                     │ Example: A → B → C → D                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cycle               │ Path that starts and ends at same vertex.   │
│                     │ Example: A → B → C → A                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Simple Cycle        │ Cycle with no repeated vertices except      │
│                     │ start/end. Length ≥ 3 for simple graphs.    │
│                     │ Example: A → B → C → A                      │
└─────────────────────┴─────────────────────────────────────────────┘

Visualization of Path and Cycle:
    
    Path: A -- B -- C -- D
    
    Cycle: A -- B
           |    |
           D -- C

Relationship:
Every Path is a Walk (but not vice versa)
Every Trail is a Walk (but not vice versa)
Every Cycle is a closed Path

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SPECIAL GRAPHS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Graph Type          │ Description & Properties                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complete Graph (Kₙ) │ Every pair of vertices connected by edge    │
│                     │ Number of edges = n(n-1)/2                  │
│                     │ deg(v) = n-1 for all vertices               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cycle Graph (Cₙ)    │ Closed loop with n vertices                 │
│                     │ Each vertex has degree 2                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Path Graph (Pₙ)     │ Sequence of n vertices in a line            │
│                     │ End vertices degree 1, internal degree 2    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complete Bipartite  │ Vertices partitioned into two sets          │
│ Graph (K_{m,n})     │ All edges between sets, no edges within     │
│                     │ deg(v) = n for vertices in first set        │
│                     │ deg(v) = m for vertices in second set       │
└─────────────────────┴─────────────────────────────────────────────┘

Complete Graph K₅ Visualization:
        A
       /|\\
      B | C
       \\|/
        D
        |
        E

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 GRAPH REPRESENTATION

┌─────────────────────┬─────────────────────────────────────────────┐
│ Representation      │ Description & Complexity                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Adjacency Matrix    │ 2D array where M[i][j] = 1 if edge exists   │
│                     │ Space: O(V²)                                │
│                     │ Edge lookup: O(1)                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Adjacency List      │ Array of lists for each vertex's neighbors  │
│                     │ Space: O(V + E)                             │
│                     │ Edge lookup: O(deg(v))                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Edge List           │ List of all edges (u, v)                    │
│                     │ Space: O(E)                                 │
│                     │ Edge lookup: O(E)                           │
└─────────────────────┴─────────────────────────────────────────────┘

Adjacency Matrix Example (Graph with vertices A,B,C):
    A B C
A   0 1 1
B   1 0 0
C   1 0 0

Adjacency List Example:
A → [B, C]
B → [A]
C → [A]

✅ SUMMARY
• Simple Graph: No loops, no multiple edges
• Digraph: Edges have direction
• Subgraph: Subset of vertices and edges
• Degree: Number of incident edges (in/out for digraphs)
• Walk: Sequence with possible repeats
• Path: Walk with distinct vertices
• Cycle: Closed path (start = end)
• Handshaking Lemma: Σ deg(v) = 2|E|`,
      contentBn: `📌 গ্রাফের মৌলিক ধারণা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি গ্রাফ G = (V, E) যেখানে V = শীর্ষবিন্দুর সেট এবং E = এজের সেট।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. সরল গ্রাফ

সংজ্ঞা: একটি আনডিরেক্টেড গ্রাফ যাতে:
• কোনো লুপ নেই (শীর্ষবিন্দু থেকে নিজের দিকে এজ)
• একই জোড়া শীর্ষবিন্দুর মধ্যে একাধিক এজ নেই

উদাহরণ:
V = {A, B, C}
E = { (A,B), (B,C) }

চিত্র:
    A ----- B
             \\
              C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. ডিরেক্টেড গ্রাফ (ডাইগ্রাফ)

সংজ্ঞা: একটি গ্রাফ যেখানে এজের দিক থাকে। এজকে সাজানো জোড়া (u → v) হিসেবে উপস্থাপন করা হয়।

উদাহরণ:
V = {১, ২, ৩}
E = { (১,২), (২,৩) }

চিত্র:
    ১ → ২ → ৩

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৩. সাবগ্রাফ

সংজ্ঞা: G গ্রাফের একটি সাবগ্রাফ H গঠিত হয়:
• G-এর শীর্ষবিন্দুর উপসেট
• ঐ শীর্ষবিন্দুগুলিকে সংযুক্তকারী G-এর এজের উপসেট

উদাহরণ:
G: V = {A, B, C, D}, E = {(A,B), (B,C), (C,D), (A,D)}
সাবগ্রাফ H: V = {A, B, C}, E = {(A,B), (B,C)}

চিত্র:
    G:                 H:
    A ----- B          A ----- B
    |       |          |
    |       |          |
    D ----- C          C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৪. শীর্ষবিন্দুর ডিগ্রি

সংজ্ঞা: একটি শীর্ষবিন্দুর সাথে সংযুক্ত এজের সংখ্যা।

আনডিরেক্টেড গ্রাফের জন্য:
deg(v) = v-এর সাথে সংযুক্ত এজের সংখ্যা

ডিরেক্টেড গ্রাফের (ডাইগ্রাফ) জন্য:
• ইন-ডিগ্রি deg⁻(v) = v-তে প্রবেশকারী এজের সংখ্যা
• আউট-ডিগ্রি deg⁺(v) = v থেকে বের হওয়া এজের সংখ্যা

হ্যান্ডশেকিং লেমা (আনডিরেক্টেড):
Σ deg(v) = 2|E|
(সব ডিগ্রির যোগফল এজের সংখ্যার দ্বিগুণের সমান)

হ্যান্ডশেকিং লেমা (ডিরেক্টেড):
Σ deg⁺(v) = Σ deg⁻(v) = |E|

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৫. ওয়াক, পাথ ও সাইকেল

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ সংজ্ঞা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়াক               │ শীর্ষবিন্দুর ক্রম যেখানে পরপর শীর্ষবিন্দু    │
│                     │ এজ দ্বারা সংযুক্ত। শীর্ষবিন্দু ও এজ পুনরাবৃত্তি│
│                     │ হতে পারে। উদাহরণ: A → B → C → B             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ট্রেইল             │ ওয়াক যাতে কোনো এজ পুনরাবৃত্তি হয় না।       │
│                     │ উদাহরণ: A → B → C → D                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ পাথ                │ ওয়াক যাতে কোনো শীর্ষবিন্দু পুনরাবৃত্তি হয় না│
│                     │ উদাহরণ: A → B → C → D                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ সাইকেল             │ পাথ যা একই শীর্ষবিন্দুতে শুরু ও শেষ হয়।      │
│                     │ উদাহরণ: A → B → C → A                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ সরল সাইকেল         │ সাইকেল যাতে শুরু/শেষ ছাড়া কোনো শীর্ষবিন্দু   │
│                     │ পুনরাবৃত্তি হয় না। সরল গ্রাফে দৈর্ঘ্য ≥ ৩   │
│                     │ উদাহরণ: A → B → C → A                       │
└─────────────────────┴─────────────────────────────────────────────┘

সম্পর্ক:
প্রতিটি পাথ একটি ওয়াক (কিন্তু উল্টোটা সত্য নয়)
প্রতিটি ট্রেইল একটি ওয়াক (কিন্তু উল্টোটা সত্য নয়)
প্রতিটি সাইকেল একটি বন্ধ পাথ

✅ সারাংশ
• সরল গ্রাফ: কোনো লুপ নেই, কোনো একাধিক এজ নেই
• ডাইগ্রাফ: এজের দিক আছে
• সাবগ্রাফ: শীর্ষবিন্দু ও এজের উপসেট
• ডিগ্রি: সংযুক্ত এজের সংখ্যা (ডাইগ্রাফের জন্য ইন/আউট)
• ওয়াক: পুনরাবৃত্তি সহ ক্রম
• পাথ: স্বতন্ত্র শীর্ষবিন্দু সহ ওয়াক
• সাইকেল: বন্ধ পাথ (শুরু = শেষ)
• হ্যান্ডশেকিং লেমা: Σ deg(v) = 2|E|`,
      takeaways: [
        "Simple Graph: No loops, no multiple edges",
        "Digraph: Edges have direction (u→v)",
        "Subgraph: Subset of vertices and edges",
        "Degree: Number of incident edges (in/out for digraphs)",
        "Walk: Sequence with possible repeats",
        "Path: Walk with distinct vertices",
        "Cycle: Closed path (start = end)",
        "Handshaking Lemma: Σ deg(v) = 2|E|"
      ],
      takeawaysBn: [
        "সরল গ্রাফ: কোনো লুপ নেই, কোনো একাধিক এজ নেই",
        "ডাইগ্রাফ: এজের দিক আছে (u→v)",
        "সাবগ্রাফ: শীর্ষবিন্দু ও এজের উপসেট",
        "ডিগ্রি: সংযুক্ত এজের সংখ্যা (ডাইগ্রাফের জন্য ইন/আউট)",
        "ওয়াক: পুনরাবৃত্তি সহ ক্রম",
        "পাথ: স্বতন্ত্র শীর্ষবিন্দু সহ ওয়াক",
        "সাইকেল: বন্ধ পাথ (শুরু = শেষ)",
        "হ্যান্ডশেকিং লেমা: Σ deg(v) = 2|E|"
      ],
      level: "Intermediate"
    },
    {
      id: "gr2",
      title: "Trees, Spanning Trees, Distance, Complementary Graphs, Cut-Vertex, Bridges, k-Connected",
      titleBn: "ট্রি, স্প্যানিং ট্রি, দূরত্ব, কমপ্লিমেন্টারি গ্রাফ, কাট-ভার্টেক্স, ব্রিজ, কে-সংযুক্ত",
      content: `📌 TREES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A tree is a connected, acyclic graph.

Properties of a Tree:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Edges               │ If tree has n vertices, it has n-1 edges    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Unique Path         │ Exactly one path between any two vertices   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Adding Edge         │ Adding any edge creates exactly one cycle   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Removing Edge       │ Removing any edge disconnects the graph     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Leaves              │ Every tree with n ≥ 2 has at least 2 leaves │
│                     │ (vertices with degree 1)                    │
└─────────────────────┴─────────────────────────────────────────────┘

Tree Visualization:
        A
       /|\\
      B C D
         / \\
        E   F

Properties:
• Vertices: 6
• Edges: 5 (n-1 = 5)
• Leaves: B, E, F (degree 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 SPANNING TREES

Definition: A spanning tree of a graph G is a subgraph that:
• Includes all vertices of G
• Is a tree (connected and acyclic)

Key Points:
• Every connected graph has at least one spanning tree
• A graph with cycles can have multiple spanning trees
• Number of edges in spanning tree = |V| - 1

Example Graph G:
    A ----- B
    |       |
    |       |
    D ----- C

Possible Spanning Trees:
    
    Tree 1:         Tree 2:
    A ----- B       A ----- B
    |               |
    |               |
    D ----- C       D ----- C
    
    (removed edge B-C)  (removed edge A-D)

Applications:
• Network design (minimum cables to connect all computers)
• Circuit design
• Clustering algorithms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📏 DISTANCE IN GRAPHS

Definition: Distance d(u, v) between two vertices u and v is the length of the shortest path connecting them.

Properties:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ d(u, v) = 0         │ If and only if u = v                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ d(u, v) = d(v, u)   │ Symmetric in undirected graphs              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Triangle Inequality │ d(u, w) ≤ d(u, v) + d(v, w)                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Infinite Distance   │ If u and v are in different components      │
└─────────────────────┴─────────────────────────────────────────────┘

Example Graph:
    A -- B -- C -- D
         |
         E

Distances:
d(A,B) = 1
d(A,C) = 2
d(A,E) = 2
d(A,D) = 3

Related Concepts:
• Eccentricity: ecc(v) = max{d(v, u) | u ∈ V}
• Diameter: diam(G) = max{ecc(v) | v ∈ V} (maximum distance)
• Radius: rad(G) = min{ecc(v) | v ∈ V} (minimum eccentricity)
• Center: Vertices with eccentricity = radius

Example (Path P₅: A-B-C-D-E):
Eccentricities: A=4, B=3, C=2, D=3, E=4
Diameter = 4, Radius = 2
Center = {C}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 COMPLEMENTARY GRAPHS

Definition: The complement of graph G, denoted G̅, has:
• Same vertex set as G
• Edge between u and v in G̅ if and only if NO edge between u and v in G

Properties:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ G ∪ G̅               │ Complete graph Kₙ                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ G̿                  │ G (complement of complement is original)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Self-Complementary  │ Graph isomorphic to its complement          │
│                     │ Example: P₄ (path of 4 vertices)            │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
Graph G (4 vertices, edges: A-B, B-C):
    A ----- B ----- C
    |
    D

Complement G̅ (edges: A-C, A-D, B-D, C-D):
    A ----- C
    |\\     |
    | \\    |
    D ----- B

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✂️ CUT-VERTICES (ARTICULATION POINTS)

Definition: A vertex v is a cut-vertex if removing v (and its incident edges) increases the number of connected components.

Properties:
• Bridges and cut-vertices are weak points in networks
• Leaves are NOT cut-vertices (except in tree with 2 vertices)
• Every cycle has no cut-vertices

Example Graph:
    A ----- B ----- C
           / \\
          E   D

Cut-vertices: B (removing B disconnects A, C, D, E)

Visualization (before removing B):
    A -- B -- C
         / \\
        E   D
(All connected)

After removing B:
    A    C
         D
    E
(3 components: {A}, {C, D}, {E})

Applications:
• Network vulnerability analysis
• Finding bottlenecks in communication networks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌉 BRIDGES (CUT-EDGES)

Definition: An edge e is a bridge (cut-edge) if removing it increases the number of connected components.

Properties:
• Every edge in a tree is a bridge
• An edge is a bridge if and only if it is not part of any cycle
• Removing a bridge disconnects the graph

Example Graph:
    A ----- B ----- C
           / \\
          E   D

Bridges: A-B (removing disconnects A from rest)

Visualization:
    A     B ----- C
         / \\
        E   D
(After removing A-B: A isolated, rest connected)

Finding Bridges using DFS:
• Use discovery time and low-link values
• Edge (u,v) is bridge if low[v] > disc[u]

Applications:
• Finding critical connections in networks
• Designing fault-tolerant networks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 BLOCKS

Definition: A block is a maximal connected subgraph with no cut-vertices.

Properties:
• Blocks are either:
  - Maximal 2-connected subgraphs, or
  - Bridges (edges that are blocks themselves), or
  - Isolated vertices

Block Decomposition:
Graph G can be decomposed into blocks connected by cut-vertices.

Example Graph:
    A ----- B ----- D
           / \\     |
          C   E    F

Blocks:
1. Block 1: {A, B} (edge A-B)
2. Block 2: {B, C, E} (triangle or cycle)
3. Block 3: {D, F} (edge D-F)
4. Block 4: {B, D} (edge B-D)

Block Tree (BC-Tree):
• Nodes represent blocks and cut-vertices
• Edges connect cut-vertices to blocks they belong to

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 k-CONNECTED GRAPHS

Definition: A graph is k-connected if:
• |V| > k
• Graph remains connected after removing any (k-1) vertices

Vertex Connectivity (κ(G)):
• Minimum number of vertices whose removal disconnects the graph
• κ(G) = 0 for disconnected graph
• κ(G) = 1 for graph with cut-vertex
• κ(G) ≥ 2 for 2-connected graph

Edge Connectivity (λ(G)):
• Minimum number of edges whose removal disconnects the graph

Whitney's Theorem:
κ(G) ≤ λ(G) ≤ δ(G) (minimum degree)

Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Graph               │ κ(G) │ λ(G) │ Description                   │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ Tree (n ≥ 2)        │ 1    │ 1    │ Has cut-vertices and bridges  │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ Cycle Cₙ (n ≥ 3)    │ 2    │ 2    │ 2-connected, 2-edge-connected │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ Complete Graph Kₙ   │ n-1  │ n-1  │ Maximally connected           │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ Complete Bipartite  │ min(m,n)│ min(m,n)│ Depends on smaller part   │
│ K_{m,n} (m,n ≥ 2)   │      │      │                               │
└─────────────────────┴──────┴──────┴───────────────────────────────┘

2-Connected Graphs (κ ≥ 2):
• No cut-vertices
• Every pair of vertices lies on a common cycle
• Important for network reliability

Applications:
• Designing fault-tolerant networks
• Survivable network design
• Social network analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SUMMARY TABLE

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Definition & Key Properties                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tree                │ Connected, acyclic, n vertices → n-1 edges  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Spanning Tree       │ Subgraph that is tree and includes all      │
│                     │ vertices                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distance            │ Length of shortest path between vertices    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complementary Graph │ G̅ has edge iff G does not                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cut-Vertex          │ Removing increases components               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Bridge              │ Removing increases components               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Block               │ Maximal subgraph with no cut-vertices       │
├─────────────────────┼─────────────────────────────────────────────┤
│ k-Connected         │ Remains connected after removing k-1 vertices│
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Tree: Connected, acyclic, n-1 edges, unique paths
• Spanning Tree: Tree connecting all vertices
• Distance: Shortest path length (diameter = max distance)
• Complement: G̅ has opposite edges
• Cut-Vertex: Removal disconnects graph
• Bridge: Removal disconnects graph
• Block: Maximal subgraph without cut-vertices
• k-Connected: κ(G) ≥ k (vertex connectivity)`,
      contentBn: `📌 ট্রি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি ট্রি হল একটি সংযুক্ত, অ্যাসাইক্লিক গ্রাফ।

ট্রির বৈশিষ্ট্য:
┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ এজ                  │ nটি শীর্ষবিন্দু থাকলে এজ সংখ্যা n-1         │
├─────────────────────┼─────────────────────────────────────────────┤
│ অনন্য পাথ           │ যেকোনো দুই শীর্ষবিন্দুর মধ্যে ঠিক একটি পাথ  │
├─────────────────────┼─────────────────────────────────────────────┤
│ এজ যোগ করলে         │ যেকোনো এজ যোগ করলে একটি চক্র তৈরি হয়       │
├─────────────────────┼─────────────────────────────────────────────┤
│ এজ বাদ দিলে         │ যেকোনো এজ বাদ দিলে গ্রাফ সংযোগহীন হয়       │
├─────────────────────┼─────────────────────────────────────────────┤
│ লিভ                 │ n ≥ 2 হলে অন্তত 2টি লিভ থাকে (ডিগ্রি ১)     │
└─────────────────────┴─────────────────────────────────────────────┘

ট্রি চিত্র:
        A
       /|\\
      B C D
         / \\
        E   F

বৈশিষ্ট্য:
• শীর্ষবিন্দু: ৬
• এজ: ৫ (n-1 = 5)
• লিভ: B, E, F (ডিগ্রি ১)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 স্প্যানিং ট্রি

সংজ্ঞা: G গ্রাফের একটি স্প্যানিং ট্রি হল একটি সাবগ্রাফ যা:
• G-এর সব শীর্ষবিন্দু অন্তর্ভুক্ত করে
• একটি ট্রি (সংযুক্ত ও অ্যাসাইক্লিক)

মূল বিষয়:
• প্রতিটি সংযুক্ত গ্রাফের অন্তত একটি স্প্যানিং ট্রি থাকে
• চক্রযুক্ত গ্রাফের একাধিক স্প্যানিং ট্রি থাকতে পারে
• স্প্যানিং ট্রিতে এজ সংখ্যা = |V| - 1

অ্যাপ্লিকেশন:
• নেটওয়ার্ক ডিজাইন (সব কম্পিউটার সংযোগের জন্য ন্যূনতম কেবল)
• সার্কিট ডিজাইন
• ক্লাস্টারিং অ্যালগরিদম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📏 গ্রাফে দূরত্ব

সংজ্ঞা: d(u, v) দূরত্ব হল u ও v-এর মধ্যে সংযোগকারী সবচেয়ে ছোট পাথের দৈর্ঘ্য।

বৈশিষ্ট্য:
┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ d(u, v) = 0         │ যদি এবং শুধুমাত্র যদি u = v                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ d(u, v) = d(v, u)   │ আনডিরেক্টেড গ্রাফে সিমেট্রিক                │
├─────────────────────┼─────────────────────────────────────────────┤
│ ত্রিভুজ অসমতা       │ d(u, w) ≤ d(u, v) + d(v, w)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ অসীম দূরত্ব         │ যদি u ও v ভিন্ন কম্পোনেন্টে থাকে            │
└─────────────────────┴─────────────────────────────────────────────┘

সম্পর্কিত ধারণা:
• ইক্সেন্ট্রিসিটি: ecc(v) = max{d(v, u) | u ∈ V}
• ডায়ামিটার: diam(G) = max{ecc(v) | v ∈ V} (সর্বোচ্চ দূরত্ব)
• রেডিয়াস: rad(G) = min{ecc(v) | v ∈ V}
• সেন্টার: যেসব শীর্ষবিন্দুর ইক্সেন্ট্রিসিটি = রেডিয়াস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 কমপ্লিমেন্টারি গ্রাফ

সংজ্ঞা: G গ্রাফের কমপ্লিমেন্ট G̅-এর:
• G-এর মতোই শীর্ষবিন্দুর সেট
• u ও v-এর মধ্যে এজ থাকবে G̅-এ যদি এবং শুধুমাত্র যদি G-তে এজ না থাকে

বৈশিষ্ট্য:
• G ∪ G̅ = সম্পূর্ণ গ্রাফ Kₙ
• G̿ = G (কমপ্লিমেন্টের কমপ্লিমেন্ট মূল গ্রাফ)
• সেলফ-কমপ্লিমেন্টারি: গ্রাফ তার কমপ্লিমেন্টের সাথে আইসোমরফিক

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✂️ কাট-ভার্টেক্স (আর্টিকুলেশন পয়েন্ট)

সংজ্ঞা: একটি শীর্ষবিন্দু v কাট-ভার্টেক্স যদি v (এবং এর সংযুক্ত এজ) বাদ দিলে সংযুক্ত কম্পোনেন্টের সংখ্যা বৃদ্ধি পায়।

বৈশিষ্ট্য:
• ব্রিজ ও কাট-ভার্টেক্স নেটওয়ার্কের দুর্বল বিন্দু
• লিভ কাট-ভার্টেক্স নয় (২টি শীর্ষবিন্দুর ট্রি ছাড়া)
• প্রতিটি চক্রের কোনো কাট-ভার্টেক্স নেই

অ্যাপ্লিকেশন:
• নেটওয়ার্ক দুর্বলতা বিশ্লেষণ
• যোগাযোগ নেটওয়ার্কে বাধা সনাক্তকরণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌉 ব্রিজ (কাট-এজ)

সংজ্ঞা: একটি এজ e ব্রিজ (কাট-এজ) যদি এটি বাদ দিলে সংযুক্ত কম্পোনেন্টের সংখ্যা বৃদ্ধি পায়।

বৈশিষ্ট্য:
• ট্রির প্রতিটি এজ ব্রিজ
• একটি এজ ব্রিজ হবে যদি এবং শুধুমাত্র যদি এটি কোনো চক্রের অংশ না হয়
• ব্রিজ বাদ দিলে গ্রাফ সংযোগহীন হয়

ব্রিজ সনাক্তকরণ (DFS ব্যবহার করে):
• ডিসকভারি সময় ও লো-লিঙ্ক মান ব্যবহার
• এজ (u,v) ব্রিজ হবে যদি low[v] > disc[u]

অ্যাপ্লিকেশন:
• নেটওয়ার্কে গুরুত্বপূর্ণ সংযোগ সনাক্তকরণ
• ফল্ট-টলারেন্ট নেটওয়ার্ক ডিজাইন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 ব্লক

সংজ্ঞা: একটি ব্লক হল একটি সর্বোচ্চ সংযুক্ত সাবগ্রাফ যাতে কোনো কাট-ভার্টেক্স নেই।

বৈশিষ্ট্য:
• ব্লকগুলি হল:
  - সর্বোচ্চ ২-সংযুক্ত সাবগ্রাফ, বা
  - ব্রিজ (যে এজগুলি নিজেরাই ব্লক), বা
  - বিচ্ছিন্ন শীর্ষবিন্দু

ব্লক ট্রি (BC-ট্রি):
• নোডগুলি ব্লক ও কাট-ভার্টেক্স প্রতিনিধিত্ব করে
• এজগুলি কাট-ভার্টেক্সকে তাদের অন্তর্গত ব্লকের সাথে সংযুক্ত করে

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 k-সংযুক্ত গ্রাফ

সংজ্ঞা: একটি গ্রাফ k-সংযুক্ত যদি:
• |V| > k
• যেকোনো (k-1)টি শীর্ষবিন্দু বাদ দিলেও গ্রাফ সংযুক্ত থাকে

ভার্টেক্স কানেক্টিভিটি (κ(G)):
• ন্যূনতম সংখ্যক শীর্ষবিন্দু যাদের বাদ দিলে গ্রাফ সংযোগহীন হয়
• বিচ্ছিন্ন গ্রাফের জন্য κ(G) = 0
• কাট-ভার্টেক্সযুক্ত গ্রাফের জন্য κ(G) = 1
• ২-সংযুক্ত গ্রাফের জন্য κ(G) ≥ 2

এজ কানেক্টিভিটি (λ(G)):
• ন্যূনতম সংখ্যক এজ যাদের বাদ দিলে গ্রাফ সংযোগহীন হয়

হুইটনির উপপাদ্য:
κ(G) ≤ λ(G) ≤ δ(G) (ন্যূনতম ডিগ্রি)

উদাহরণ:
┌─────────────────────┬──────┬──────┬───────────────────────────────┐
│ গ্রাফ               │ κ(G) │ λ(G) │ বর্ণনা                        │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ ট্রি (n ≥ 2)        │ ১    │ ১    │ কাট-ভার্টেক্স ও ব্রিজ আছে      │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ সাইকেল Cₙ (n ≥ 3)  │ ২    │ ২    │ ২-সংযুক্ত, ২-এজ-সংযুক্ত       │
├─────────────────────┼──────┼──────┼───────────────────────────────┤
│ সম্পূর্ণ গ্রাফ Kₙ   │ n-1  │ n-1  │ সর্বোচ্চ সংযুক্ত               │
└─────────────────────┴──────┴──────┴───────────────────────────────┘

২-সংযুক্ত গ্রাফ (κ ≥ 2):
• কোনো কাট-ভার্টেক্স নেই
• শীর্ষবিন্দুর প্রতিটি জোড়া একটি সাধারণ চক্রের উপর অবস্থিত
• নেটওয়ার্ক নির্ভরযোগ্যতার জন্য গুরুত্বপূর্ণ

অ্যাপ্লিকেশন:
• ফল্ট-টলারেন্ট নেটওয়ার্ক ডিজাইন
• টিকে থাকা নেটওয়ার্ক ডিজাইন
• সামাজিক নেটওয়ার্ক বিশ্লেষণ

✅ সারাংশ
• ট্রি: সংযুক্ত, অ্যাসাইক্লিক, n-1 এজ, অনন্য পাথ
• স্প্যানিং ট্রি: সব শীর্ষবিন্দু সংযোগকারী ট্রি
• দূরত্ব: সবচেয়ে ছোট পাথের দৈর্ঘ্য
• কমপ্লিমেন্ট: G̅-এ বিপরীত এজ থাকে
• কাট-ভার্টেক্স: বাদ দিলে গ্রাফ সংযোগহীন হয়
• ব্রিজ: বাদ দিলে গ্রাফ সংযোগহীন হয়
• ব্লক: কাট-ভার্টেক্সবিহীন সর্বোচ্চ সাবগ্রাফ
• k-সংযুক্ত: κ(G) ≥ k (ভার্টেক্স কানেক্টিভিটি)`,
      takeaways: [
        "Tree: Connected, acyclic, n vertices → n-1 edges",
        "Spanning Tree: Tree connecting all vertices",
        "Distance: Shortest path length (diameter = max distance)",
        "Complement: G̅ has opposite edges",
        "Cut-Vertex: Removal disconnects graph",
        "Bridge: Removal disconnects graph",
        "Block: Maximal subgraph without cut-vertices",
        "k-Connected: κ(G) ≥ k (vertex connectivity)"
      ],
      takeawaysBn: [
        "ট্রি: সংযুক্ত, অ্যাসাইক্লিক, n শীর্ষবিন্দু → n-1 এজ",
        "স্প্যানিং ট্রি: সব শীর্ষবিন্দু সংযোগকারী ট্রি",
        "দূরত্ব: সবচেয়ে ছোট পাথের দৈর্ঘ্য (ডায়ামিটার = সর্বোচ্চ দূরত্ব)",
        "কমপ্লিমেন্ট: G̅-এ বিপরীত এজ থাকে",
        "কাট-ভার্টেক্স: বাদ দিলে গ্রাফ সংযোগহীন হয়",
        "ব্রিজ: বাদ দিলে গ্রাফ সংযোগহীন হয়",
        "ব্লক: কাট-ভার্টেক্সবিহীন সর্বোচ্চ সাবগ্রাফ",
        "k-সংযুক্ত: κ(G) ≥ k (ভার্টেক্স কানেক্টিভিটি)"
      ],
      level: "Intermediate"
    }
  ]
}

export const module13 = m13