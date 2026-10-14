# Internal Data Representation & Abstract Data Types: Revision Notes

> Plain-text companion to `notes/src/15-data-structures-and-algorithms/dsa-data-representation-adt.en.html` (handwritten-style PDF: `notes/pdf/15-data-structures-and-algorithms/dsa-data-representation-adt.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Data Structures and Algorithms):** the syllabus opens "**Internal data representation; Abstract data types; Elementary data structures: arrays, lists, stacks, queues, trees, graphs**; Advanced data structures: heaps, Fibonacci heaps, B-trees; Recursion, sorting, searching, hashing, storage management …" **This note covers the first three clauses.** Heaps, Fibonacci heaps and B-trees belong to the advanced data structures lesson; recursion, sorting, searching and hashing to the next lesson; BFS, DFS, topological sort, MST and shortest paths to the graph algorithms lesson. Base conversion is in the number-systems lessons of the earlier chapters.

**High-yield:** n-bit 2's complement range **−2^(n−1) … 2^(n−1) − 1** (8-bit −128 … 127) · −5 in 8-bit 2's complement = **11111011** (sign-magnitude 10000101, 1's complement 11111010) · IEEE 754 single = 1 + 8 + 23 bits, **bias 127**; double = 1 + 11 + 52, bias 1023 · ASCII is **7-bit**; Unicode is a character set, UTF-8 is 1–4 bytes · an ADT defines **what** (values + operations), a data structure **how** · row-major address B + w[(i − Lr)·n + (j − Lc)] · stack = **LIFO**, queue = **FIFO** · circular queue full when **(rear + 1) % n == front** · postfix `2 3 4 * +` = **14** · binary tree: at most 2^i nodes on level i, 2^(h+1) − 1 in height h, **n0 = n2 + 1** · adjacency matrix **O(V²)**, adjacency list O(V + E).

---

## 1. Bits, Data Types and Signed Integers

- **Internal data representation** is how numbers, characters and instructions are encoded as *binary patterns*. Bit = one 0/1, nibble = 4 bits, byte = 8 bits, word = the CPU's natural unit (16/32/64 bits). The **type** gives a pattern its meaning: `01000001` is 65 as an integer and 'A' as ASCII.
- n bits give **2^n patterns**, so unsigned n-bit integers run **0 … 2^n − 1** (8-bit 0…255, 16-bit 0…65535, 32-bit 0…4 294 967 295).
- **Primitive vs non-primitive.** Primitive: built into the language — int, char, float, double, boolean, pointer. Non-primitive: built from them — **linear** (array, list, stack, queue) and **non-linear** (tree, graph). One hex digit = 4 bits.

| C type | Size | Typical range |
|---|---|---|
| char / unsigned char | 1 B | −128…127 / 0…255 |
| short | 2 B | −32768…32767 |
| int / long long | 4 / 8 B | −2^31…2^31−1 / −2^63…2^63−1 |
| float / double | 4 / 8 B | ~7 / ~15–16 significant digits |

- **Three ways to store a negative number in n bits.** *Sign-magnitude*: MSB = sign (0 +, 1 −), the rest = |x|. *1's complement*: invert every bit of +x. *2's complement*: invert every bit, then **add 1** (= 2^n − x). CPUs use 2's complement: one zero, and one adder for both + and −.

| Method | n-bit range | 8-bit range | Zeros | −5 (4-bit) | −5 (8-bit) |
|---|---|---|---|---|---|
| Sign-magnitude | −(2^(n−1)−1) … 2^(n−1)−1 | −127 … 127 | **two** (+0, −0) | 1101 | 10000101 |
| 1's complement | −(2^(n−1)−1) … 2^(n−1)−1 | −127 … 127 | **two** | 1010 | 11111010 |
| **2's complement** | **−2^(n−1) … 2^(n−1)−1** | **−128 … 127** | one | **1011** | **11111011** |

- 💡 **Trick:** "**Copy up to the first 1, flip the rest.**" Scan +x from the right, copy bits up to and including the first 1, invert the rest: 00000101 → 11111011. To **decode**, the MSB weighs −2^(n−1): 11111011 = −128 + 123 = −5.
- ⚠ **Trap:** 2's complement is **asymmetric** — −128 exists in 8 bits, +128 does not. 10000101 (sign-magnitude) and 11111010 (1's complement) are the distractors for "2's complement of −5". To widen, **copy the sign bit** (sign extension): 1011 → 1111 1011.
- **Overflow** is possible only when **two numbers of the same sign are added** and the result has the **opposite sign** (carry into MSB ≠ carry out). Opposite signs never overflow; a carry out of the MSB alone is discarded.
- ✍ Worked example — 8-bit. 100 + 50: `01100100 + 00110010 = 10010110` → MSB 1 from two positives: **overflow** (the pattern reads −106). 7 − 5 = 7 + (−5): `00000111 + 11111011 = 1 00000010` → drop the carry → **2**, no overflow.

## 2. IEEE 754 Floating Point and Character Codes

- A real number is stored in normalised form **(−1)^S × 1.M × 2^(E − bias)** with three fields: **sign** S, **biased exponent** E and **mantissa** (fraction) M. The leading 1 is not stored (hidden bit).

| Format | Sign | Exponent | Mantissa | Bias | Precision |
|---|---|---|---|---|---|
| **Single (32)** | 1 | 8 | 23 | **127** | ~7 decimal digits |
| **Double (64)** | 1 | 11 | 52 | **1023** | ~15–16 decimal digits |

- Special patterns: exponent all 0s → ±0 (M = 0) or a denormal number; exponent all 1s → ±∞ (M = 0) or NaN.
- ✍ Worked example — −6.75 to single precision. (1) Negative → S = 1. (2) 6.75 = 110.11₂. (3) Normalise: 1.1011 × 2²; drop the hidden 1, M = 1011 followed by 19 zeros. (4) E = 2 + 127 = 129 = 10000001. (5) `1 10000001 10110000000000000000000` = **C0D80000** (hex). Check: 1.1011₂ = 1.6875, × 4 = 6.75 ✓.
- 💡 **Trick:** "**1-8-23, 127; 1-11-52, 1023.**" The bias is always 2^(k−1) − 1 for a k-bit exponent. Field order **S-E-M**.
- ⚠ **Trap:** 0.1 has no exact binary form (0.000110011… recurring), so `0.1 + 0.2 == 0.3` is **false** in C, Java and Python. Compare floats with |a − b| < ε; keep money in integers (paisa).

| Code | Size | Facts examiners use |
|---|---|---|
| **BCD** (8421) | 4 bits per decimal digit | 59 → 0101 1001; 1010–1111 invalid; pure binary 59 = 111011 |
| **ASCII** | **7 bits**, 128 chars | 'A' = 65 (41h), 'a' = 97 (61h), '0' = 48 (30h); cases differ by 32 |
| Extended ASCII / EBCDIC | 8 bits | 256 chars / IBM mainframes |
| **Unicode** | a character *set* | U+0000 … U+10FFFF; Bangla block U+0980–U+09FF; 'অ' = U+0985 |
| **UTF-8** · UTF-16 · UTF-32 | 1–4 · 2 or 4 · 4 bytes | UTF-8 is ASCII-compatible; 'অ' = E0 A6 85 |

- ✍ Worked example — endianness. `0x12345678` at address 100. **Big-endian**: 100→12, 101→34, 102→56, 103→78. **Little-endian**: 100→78, 101→56, 102→34, 103→12. x86 is little-endian; **network byte order is big-endian**.
- ⚠ **Trap:** "Unicode is 16-bit" is outdated: Unicode is a set of 1 114 112 code points and UTF-8/16/32 are its encodings. ASCII is 7-bit, not 8. The size of `int` is compiler-dependent (at least 16 bits in C).

## 3. Abstract Data Types

- An **abstract data type (ADT)** is a mathematical model of a type defined by *its values and the operations on them* (with their rules), **not by how it is implemented**. A **data structure** is a concrete arrangement of data in memory that implements an ADT. "Stack" is an ADT; "array with a `top` index" is one data structure that implements it.

| Point | ADT | Data structure |
|---|---|---|
| Level | logical, abstract | physical, concrete |
| Says | **what** it does | **how** it does it |
| Contains | values + operations + rules | memory layout + algorithms |
| Example | Stack, Queue, List, Map | array, linked list, heap, hash table |
| In code | interface / header | class / .c file |

| ADT | Core operations | Rule | Built with |
|---|---|---|---|
| List | insert, delete, get(i), search | position | array, linked list |
| Stack | push, pop, peek, isEmpty | **LIFO** | array, linked list |
| Queue | enqueue, dequeue, front, rear | **FIFO** | circular array, list |
| Deque | insert/delete at both ends | both ends | doubly linked list |
| Priority queue | insert, extract-max, peek | priority | **binary heap** |
| Set / Map | add, contains · put(k,v), get(k) | no duplicates | hash table, BST |
| Tree | insert, delete, search, traverse | one parent | linked nodes, array |
| Graph | addVertex, addEdge, adjacent | any to any | adjacency matrix / list |

- **Why ADTs — three benefits.** *Encapsulation* (information hiding): users see only the operations, so the representation can change without breaking them. *Reusability*: one ADT, several implementations, many programs. *Modularity*: each module is written, tested and debugged on its own. Together: **data abstraction**, the basis of classes in OOP.
- 💡 **Trick:** **ADT = a menu; data structure = the kitchen.** Change the kitchen, keep the menu. Benefits: "**E-R-M**".
- ⚠ **Trap:** BFS and DFS are **algorithms** run on a graph, not operations of the Graph ADT. A priority queue is **not FIFO**. A linked list is a data structure; "List" is the ADT. "An ADT defines…?" → **behaviour**, not storage.

## 4. Arrays and Address Calculation

- An **array** is a fixed-size collection of elements of *one type in contiguous memory*, reached by index. The address of any element comes from a formula, so **access is O(1)** (random access); insertion or deletion in the middle shifts elements, **O(n)**.
- **Address formulas** (B = base address, w = bytes per element, L = lower bound):
  - 1-D: LOC(A[i]) = **B + w(i − L)**; number of elements = U − L + 1.
  - 2-D, m rows × n columns, **row-major** (C, C++, Java, Python): LOC(A[i][j]) = **B + w[(i − Lr)·n + (j − Lc)]**.
  - 2-D, **column-major** (Fortran, MATLAB): LOC(A[i][j]) = **B + w[(j − Lc)·m + (i − Lr)]**.
  - Row-major multiplies by the number of **columns n**; column-major by the number of **rows m**.
- ✍ Worked example — `int A[20][30]` (0-based, m = 20, n = 30), B = 1000, w = 4, find A[5][10]. Row-major: 1000 + 4(5 × 30 + 10) = 1000 + 4 × 160 = **1640**. Column-major: 1000 + 4(10 × 20 + 5) = 1000 + 4 × 205 = **1820**.
- ✍ Worked example — `A[5..50]`, B = 200, w = 2: elements = 50 − 5 + 1 = **46**; LOC(A[20]) = 200 + 2(20 − 5) = **230**. `A[−5..10]` holds 10 − (−5) + 1 = **16** elements.

| Operation on an array of n | Time | Why |
|---|---|---|
| Access A[i] | **O(1)** | address by formula |
| Search (unsorted / sorted) | O(n) / O(log n) | linear scan / binary search |
| Insert / delete at end | O(1) | no shifting (if space remains) |
| Insert / delete at position k | **O(n)** | shift n − k elements |

- **Sparse matrix:** most elements are 0; store only the non-zeros as **triplets (row, col, value)** or as a linked list. A 100 × 100 matrix with 50 non-zeros needs 150 cells instead of 10 000. An n × n lower-triangular matrix has **n(n+1)/2** stored elements.
- ⚠ **Trap:** check the **lower bound** (with 1-based `A[1..m][1..n]`, subtract 1 from i and j first) and whether the question says row- or column-major. C has no bounds checking: `A[10]` in `int A[10]` is **undefined behaviour**, not an error message.

## 5. Linked Lists: Singly, Doubly, Circular

- A **linked list** is a sequence of *nodes*, each holding data and a **pointer** to the next node; the nodes may lie anywhere in memory. A `head` pointer reaches the first node and the last node's `next` is NULL. Size changes at run time; no random access, so reaching the k-th node is **O(n)**.

```c
struct Node { int data; struct Node *next; };

/* insert at head: O(1) */
struct Node *n = malloc(sizeof *n);
n->data = x;  n->next = head;  head = n;

/* delete the node after p: O(1) */
struct Node *t = p->next;  p->next = t->next;  free(t);
```

| Type | Node | Use |
|---|---|---|
| Singly | data, next | stacks, simple lists |
| Doubly | prev, data, next | browser back/forward, LRU cache, deque |
| Circular | last → first | **round-robin scheduling** |
| Circular doubly | both links wrap | music playlists, Fibonacci heap roots |
| Header list | dummy first node | no special case for an empty list |

| Point | Array | Linked list |
|---|---|---|
| Memory | contiguous, fixed size | scattered, grows at run time |
| Access k-th | **O(1)** | **O(n)** |
| Insert/delete at front | O(n) (shift) | **O(1)** |
| Insert at end | O(1) if space | O(n), or O(1) with a tail pointer |
| Extra space | none (may waste unused slots) | one pointer per node (two if doubly) |

- 💡 **Trick:** "**Link first, then cut.**" Set the new node's `next` before redirecting the old pointer, or the rest of the list is lost. Middle node: slow/fast pointers. Cycle: Floyd's tortoise and hare.
- ⚠ **Trap:** deleting a given node in a **singly** list needs its **predecessor** (O(n) to find); in a **doubly** list it is **O(1)**. Reversing a singly list takes O(n) time and O(1) space (prev, curr, next).

## 6. Stacks, Infix → Postfix and Postfix Evaluation

- A **stack** inserts (**push**) and deletes (**pop**) at *one end, the top*: **Last In, First Out**. Array version: `top = −1` means empty; push when `top == MAX−1` is **overflow**; pop when `top == −1` is **underflow**. A linked stack pushes and pops at the head and never overflows until memory runs out. All operations **O(1)**.

```c
void push(int x) {
  if (top == MAX-1) { puts("Overflow"); return; }
  s[++top] = x; }
int pop(void) {
  if (top == -1) { puts("Underflow"); return -1; }
  return s[top--]; }
```

- **Applications:** function calls and recursion (the call stack holds return addresses and locals) · expression conversion and evaluation · balanced-parenthesis check · undo/redo · browser back · backtracking · DFS · reversing a string.
- **Infix → postfix rules.** Scan left to right. Operand → output. `(` → push. `)` → pop to output until `(`. Operator → pop while the top has higher or equal precedence (equal only if left-associative), then push. At the end pop everything. Precedence **^ > * / > + −**; ^ is right-associative.

| Read | Stack | Output |
|---|---|---|
| A | | A |
| + | + | A |
| B | + | A B |
| * | + * | A B |
| C | + * | A B C |
| − | − | A B C * + |
| D, /, E | − / | A B C * + D E |
| end | | **A B C * + D E / −** |

- ✍ Worked example — evaluate postfix. Operand → push; operator → pop B (top), pop A, push A op B. `2 3 4 * +`: push 2, 3, 4; * → 12; + → 2 + 12 = **14** (infix 2 + 3 * 4). `5 6 2 + * 12 4 / −`: 6 + 2 = 8; 5 × 8 = 40; 12 / 4 = 3; 40 − 3 = **37**.
- ✍ Worked example — three notations. Infix `(A + B) * (C − D)`; postfix (reverse Polish) **A B + C D − \***; prefix (Polish) **\* + A B − C D**. Postfix needs no parentheses and no precedence rules.
- 💡 **Trick:** "**Stack of plates.**" For postfix evaluation the **second pop is the left operand** — matters for − and /.
- ⚠ **Trap:** `2 3 4 * +` is **14, not 20** (20 would be `2 3 + 4 *`). Pushing 1, 2, 3 in order can never pop as 3, 1, 2. Recursion that never reaches its base case ends in **stack overflow**.

## 7. Queues: Linear, Circular, Deque, Priority

- A **queue** inserts at the **rear** (enqueue) and deletes from the **front** (dequeue): **First In, First Out**. In a plain array front and rear only move forward, so freed slots are never reused ("full" while half empty); a **circular queue** wraps the indices with `% n`.

| Circular queue (array of n) | Condition |
|---|---|
| Enqueue | `rear = (rear + 1) % n; Q[rear] = x` |
| Dequeue | `x = Q[front]; front = (front + 1) % n` |
| **Full** | **(rear + 1) % n == front** |
| **Empty** | `front == −1` (or `front == rear` in the one-slot-free form) |
| Elements | `(rear − front + n) % n` (one-slot-free form) |

- Two conventions: `front = rear = −1` as empty — all n slots usable; `front = rear = 0` as empty — one slot stays free, capacity n − 1.
- ✍ Worked example — trace. enqueue(1), enqueue(2), enqueue(3) → [1, 2, 3]; dequeue() removes 1 → [2, 3]; enqueue(4) → [2, 3, 4]; dequeue() removes 2 → [3, 4]. Front = **3**, rear = 4. The same pushes and pops on a stack leave [1, 2] with 2 on top.

| Variant | Rule | Typical use |
|---|---|---|
| Linear queue | FIFO, indices only move forward | simple buffers |
| Circular queue | FIFO, indices wrap with % n | CPU **round-robin**, keyboard and network buffers |
| Deque | insert and delete at **both** ends | sliding-window maximum, undo history |
| Restricted deque | input-restricted: insert at one end · output-restricted: delete at one end | — |
| Priority queue | highest priority served first; ties FIFO | Dijkstra, OS job scheduling, Huffman |

- 💡 **Trick:** "**Bank counter queue.**" Join at the back, leave from the front. **D**ouble-**E**nded **QUE**ue = deque. Uses: BFS, printer spooling, CPU scheduling, buffers between fast and slow devices.
- ⚠ **Trap:** a priority queue is best built on a **binary heap** (insert and delete-max both O(log n)); an unsorted array makes delete O(n). A queue can be built from **two stacks** (amortised O(1)). BFS → queue; DFS → stack.

## 8. Trees and Binary Trees

- A **tree** is a connected acyclic hierarchy with one **root**; every other node has exactly one parent, so n nodes have **n − 1 edges**. A **binary tree** gives each node at most two children (left, right). Terms: leaf, internal node, siblings, degree = number of children, level (root = 0), height = edges on the longest root-to-leaf path.
- Example tree: A has children B and C; B has D and E; C has a left child F.

| Traversal | Order | Result for this tree |
|---|---|---|
| Preorder | Node, Left, Right | A B D E C F |
| Inorder | Left, Node, Right | D B E A F C |
| Postorder | Left, Right, Node | **D E B F C A** |
| Level order | level by level (queue) | A B C D E F |

| Binary-tree property (root at level 0, height h) | Formula | Check (h = 2) |
|---|---|---|
| Max nodes at level i | **2^i** | level 2: 4 |
| Max nodes in a tree of height h | **2^(h+1) − 1** | 7 |
| Min height with n nodes | ⌈log2(n + 1)⌉ − 1 | n = 7 → 2 |
| Leaves vs nodes of degree 2 | **n0 = n2 + 1** | perfect h = 2: 4 = 3 + 1 |
| Distinct binary trees with n nodes | Catalan: C(2n, n)/(n + 1) | n = 3 → 5 |

- **Kinds:** *full/strict* — every node has 0 or 2 children; *complete* — all levels full except the last, filled **from the left** (heap shape); *perfect* — every internal node has 2 children, all leaves on one level; *skewed* — one child each, effectively a list.
- **Array representation:** store level by level. 0-based: left = **2i + 1**, right = 2i + 2, parent = ⌊(i − 1)/2⌋. 1-based: left = 2i, right = 2i + 1, parent = ⌊i/2⌋. Ideal for complete trees; wasteful for skewed ones.
- ✍ Worked example — rebuild from two traversals. Preorder A B D E C F, inorder D B E A F C. Preorder's first is the root A; in the inorder D B E is its left subtree and F C its right. B roots the left part (D, E); C roots the right with F on its left. Postorder: **D E B F C A**. Inorder + pre/post fixes a tree uniquely; pre + post alone does not.
- 💡 **Trick:** the name says **where the Node goes** — Pre = first, In = middle, Post = last; Left always before Right. **BST:** left < node < right, so its **inorder is sorted**.
- ⚠ **Trap:** check where the level count starts — with the root at level 1, max nodes at level i = 2^(i−1) and in height h = 2^h − 1. BST search is O(log n) on average but **O(n) when skewed**, hence AVL and red-black trees.

## 9. Graphs, and the Cost of Every Operation

- A **graph** G = (V, E) is a set of vertices and a set of edges joining pairs of them: undirected or directed (digraph), weighted or not. Degree = edges at a vertex (in-/out-degree in a digraph). A path joins vertices by edges; a cycle returns to its start; a graph is connected if every pair is joined by a path. A **tree is a connected acyclic graph**.
- Example: undirected graph on vertices 0–3 with edges 0–1, 0–2, 0–3, 1–3. Adjacency list: 0 → 1, 2, 3; 1 → 0, 3; 2 → 0; 3 → 0, 1. Its adjacency matrix is symmetric.

| Point | Adjacency matrix | Adjacency list |
|---|---|---|
| Space | **O(V²)** | **O(V + E)** |
| Is (u, v) an edge? | **O(1)** | O(degree of u) |
| List all neighbours of u | O(V) | O(degree of u) |
| Best for | dense graphs | sparse graphs (most real ones) |

- **Counting facts:** max edges in a simple undirected graph **n(n − 1)/2**, directed n(n − 1) — K5 has 10 edges. Handshaking: sum of all degrees = 2|E|, so the number of odd-degree vertices is even. A tree on n vertices has n − 1 edges; a DAG is a directed graph with no cycle; an incidence matrix is V × E.

| Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array (unsorted) | O(1) | O(n) | O(n) | O(n) |
| Sorted array | O(1) | O(log n) | O(n) | O(n) |
| Singly linked list | O(n) | O(n) | O(1) at head | O(1) after a known node |
| Stack / Queue | top/front O(1) | O(n) | O(1) | O(1) |
| BST (average / worst) | — | O(log n) / O(n) | O(log n) / O(n) | O(log n) / O(n) |
| Binary heap | max O(1) | O(n) | O(log n) | O(log n) |

- ⚠ **Trap:** the space of an adjacency list is **O(V + E)**, not O(E): every vertex needs a list head even with no edges. A complete graph is dense, so a matrix wins there.
- **Where the rest of this chapter lives:** heaps, Fibonacci heaps, B-trees → advanced data structures lesson; recursion, sorting, searching, hashing → next lesson; BFS, DFS, topological sort, MST, shortest paths → graph algorithms lesson.

---

## Practice MCQs

1. Which ADT follows LIFO? (a) Queue (b) Stack (c) Priority queue (d) Circular queue
2. The 8-bit two's complement of −5 is: (a) 10000101 (b) 11111010 (c) 11111011 (d) 00000101
3. The range of 8-bit two's complement is: (a) −127 … 127 (b) −128 … 127 (c) 0 … 255 (d) −128 … 128
4. The exponent bias of IEEE 754 single precision is: (a) 127 (b) 128 (c) 1023 (d) 255
5. `int A[20][30]`, B = 1000, w = 4, row-major address of A[5][10]: (a) 1820 (b) 1640 (c) 1600 (d) 1660
6. The value of the postfix expression `2 3 4 * +` is: (a) 20 (b) 24 (c) 9 (d) 14
7. A circular queue of size n is full when: (a) front == rear (b) rear == n − 1 (c) (rear + 1) % n == front (d) front == 0
8. enqueue 1, 2, 3, dequeue, enqueue 4, dequeue — the front is: (a) 3 (b) 4 (c) 2 (d) 1
9. Maximum nodes in a binary tree of height 3 (root at level 0): (a) 8 (b) 7 (c) 15 (d) 16
10. Space required by an adjacency matrix: (a) O(V + E) (b) O(E) (c) O(V log V) (d) O(V²)

**Answer key:** 1-b · 2-c · 3-b · 4-a · 5-b · 6-d · 7-c · 8-a · 9-c · 10-d

## Written question (10 marks)

What is an abstract data type? Describe the Stack ADT and its array implementation with overflow and underflow. Convert `A + B * C − D / E` to postfix showing the stack, and evaluate `5 6 2 + * 12 4 / −`.

**Model answer:**
1. **ADT (2):** a type defined by its values and operations, independent of implementation; benefits: encapsulation, reusability, modularity. A data structure implements it.
2. **Stack ADT (2):** LIFO list; push, pop, peek, isEmpty, isFull, all O(1). Uses: call stack, expression handling, undo, backtracking.
3. **Array implementation (2):** `top = −1` means empty; push: if `top == MAX−1` → **overflow**, else `s[++top] = x`; pop: if `top == −1` → **underflow**, else return `s[top−−]`.
4. **Infix → postfix (2):** A out; push +; B out; * outranks +, push; C out; − pops * and + (≥ precedence), push −; D out; push /; E out; pop / and − → **A B C * + D E / −**.
5. **Evaluate (2):** push 5, 6, 2; + → 8; * → 40; push 12, 4; / → 3; − → 40 − 3 = **37**.

## Night-before one-liners

n bits → 2^n patterns; unsigned 0 … 2^n − 1 · 2's complement −2^(n−1) … 2^(n−1) − 1, one zero; sign-magnitude and 1's complement have two · −5 (8-bit): S-M 10000101, 1's 11111010, **2's 11111011** · copy to the first 1, flip the rest · overflow only when same signs give the opposite sign; a carry out alone is not overflow · IEEE single 1-8-23 bias 127, double 1-11-52 bias 1023, bias = 2^(k−1) − 1 · 0.1 + 0.2 ≠ 0.3 · ASCII 7-bit, 'A' 65, 'a' 97, '0' 48 · Unicode is a set; UTF-8 is 1–4 bytes · little-endian puts the low byte at the low address; network order is big-endian · ADT = what (operations), data structure = how · row-major B + w[(i − Lr)n + (j − Lc)], column-major B + w[(j − Lc)m + (i − Lr)] · array access O(1), insert in the middle O(n) · a doubly list deletes a given node in O(1) · stack LIFO, overflow at top == MAX − 1 · `2 3 4 * +` = 14; A + B * C → A B C * + · precedence ^ > * / > + −, ^ right-associative · recursion uses a stack, BFS a queue · circular queue full: (rear + 1) % n == front · priority queue → binary heap · level i ≤ 2^i nodes, height h ≤ 2^(h+1) − 1, n0 = n2 + 1, children 2i + 1 and 2i + 2 (0-based) · inorder of a BST is sorted · matrix O(V²), list O(V + E), max edges n(n − 1)/2.

| Job | Structure |
|---|---|
| recursion, undo, postfix evaluation | stack |
| BFS, printer spooling | queue |
| round-robin CPU scheduling | circular queue / circular list |
| job priority, Dijkstra | priority queue (heap) |

✍ Five numbers in one minute: 8-bit 2's complement of −20 = 11101100 · 16-bit 2's range −32768 … 32767 · `A[10][10]`, B = 500, w = 2, row-major A[3][4] = 500 + 2 × 34 = 568 · a binary tree with 10 leaves has 9 nodes of degree 2 · a simple undirected graph on 6 vertices has at most 15 edges.
