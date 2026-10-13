# Data Structures and Algorithms (DSA): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 56 (Study note 1, Written 31, MCQ 9, Viva 15)
- **Corrections:** 7
- **Papers:** 38th BCS Written; 45th BCS Written (CSE-971); 46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch); 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BAPEX Assistant General Manager (ICT) (BUET); BCC Assistant Programmer (BUET); BOGMC (Petrobangla) Assistant Manager; BPDB Assistant Engineer (CSE); BPDB Assistant Engineer (CSE) (BUET); BPSC (Ministry of Home Affairs) Senior Computer Operator; BUET MSc in CSE; Bangladesh Satellite Company PLC Assistant Engineer (CSE); Bank (name cut off, 'B... Ltd') Assistant Programmer Written; Bank IT viva (compiled from candidates' viva experiences); DPDC Assistant Manager (ICT); NTRCA 17th registration viva 2023; PGCB Assistant Engineer (CSE) (BUET); Petrobangla Assistant Manager (CSE); Petrobangla Assistant Manager (CSE) (BUET); Petrobangla Assistant Manager (IT) (BUET); RPGCL Assistant Manager (ICT) (BUET)

## Topics

- Quicksort worst case (sorted input) (2)
- Activity selection (interval scheduling, greedy) (1)
- Array (1)
- Array and linked list drawbacks (1)
- Array vs linked list (1)
- Array vs Linked List (1)
- Array vs linked list (which is better) (1)
- Asymptotic complexity (Big-O) (1)
- Best/worst-case complexity (binary search, quicksort, DFS) (1)
- BFS vs DFS (1)
- Binary search (1)
- Binary search vs linear search (1)
- Binary tree from postorder, array representation (1)
- Binary tree from postorder; array representation (1)
- Binary tree traversal (BFS/DFS) (1)
- Breadth-first search (1)
- BST traversal (1)
- Bubble sort (1)
- Bubble sort vs merge sort (1)
- Choice of data structure (deletion cost) (1)
- Circular queue (1)
- Course outline: programming, data structures, algorithms, digital systems (1)
- Divide and conquer algorithms (1)
- Divide and conquer on linked lists (1)
- Divide and conquer vs dynamic programming (1)
- Equilibrium index of an array (1)
- Hashing (O(1) search) (1)
- Hashing (separate chaining) (1)
- Heap construction and deletion (1)
- Heapsort (1)
- Insertion sort complexity (1)
- Linked list (1)
- Linked List (1)
- Linked list vs array (1)
- Max heap properties (1)
- Maximum subarray (Kadane's algorithm) (1)
- Merge sort (1)
- Parameterized algorithms (1)
- Queue (1)
- Queue using two stacks (1)
- Quick sort (1)
- Quicksort worst case (1)
- Recurrence of binary search (1)
- Sorting algorithms (1)
- Sorting complexities (1)
- Sorting lower bound (decision tree) (1)
- Stack (1)
- Stack push/pop (1)
- Stack vs Queue (1)
- Suffix tree (1)
- Tree (1)
- Tree data structure uses (1)
- Tree reconstruction from traversals (1)
- Tree traversal (right-left-root) (1)
- Tree traversal and array representation (1)

## Quicksort worst case (sorted input)

### Q2(b) <sub>Q0469</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Quicksort with the first element as pivot: analyse the time complexity when the array is already sorted.

- **Printed answer:** T(n) = T(n-1) + O(n) = n(n+1)/2 -> O(n^2).
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p3](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

### Q2(b) <sub>Q0888</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Analyse the time complexity of quicksort with the first element as pivot when the input is already sorted.

- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

## Activity selection (interval scheduling, greedy)

### Q12 <sub>Q0174</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · Written*

n customers request time slots [start, end]; overlapping requests cannot both be served. Write an algorithm to serve the maximum number of customers.

- **Printed answer:** Greedy: sort by start time, add each slot that does not overlap the schedule, return schedule length (Python).
- **Correction:** Sorting by start time is not optimal (e.g. [1,10],[2,3],[4,5] gives 1 instead of 2). Sort by end time and take each slot whose start ≥ last chosen end, O(n log n).
- **Source:** [BUET JOB/15_bpdb-customer-slot-scheduling.md](../BUET%20JOB/15_bpdb-customer-slot-scheduling.md) · [image](../BUET%20JOB/15_bpdb-customer-slot-scheduling.jpg); [BUET JOB/16_inclusion-exclusion-and-equilibrium.md](../BUET%20JOB/16_inclusion-exclusion-and-equilibrium.md) · [image](../BUET%20JOB/16_inclusion-exclusion-and-equilibrium.jpg); [BUET JOB/31_bpdb-protocols-sql-algorithms.md](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.md) · [image](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.jpg)

## Array

### Viva p14 Q10 <sub>Q0612</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is an Array?

- **Printed answer:** An Array is a linear data structure that stores elements of the same type in contiguous memory locations. It allows fast access using an index
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Array and linked list drawbacks

### Viva p13 Q4 <sub>Q0607</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the problems with Array and Linked List?

- **Printed answer:** Array: Fixed size and expensive insertion/deletion due to shifting elements; Linked List: Slow random access and requires extra memory for pointers
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p13](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Array vs linked list

### Q7 <sub>Q0429</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

Difference between array and linked list?

- **Printed answer:** Array: contiguous memory, fast access, costly insert/delete; linked list: nodes chained by links, easy insert/delete, slower access
- **Source:** [VIVA/04_ntrca-keywords-and-dbms-keys.md](../VIVA/04_ntrca-keywords-and-dbms-keys.md) · [image](../VIVA/04_ntrca-keywords-and-dbms-keys.jpg)

## Array vs Linked List

### Viva p13 Q3 <sub>Q0606</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Difference between Array and Linked List.

- **Printed answer:** Array: Stores elements in contiguous memory and supports fast random access; Linked List: Stores elements using nodes connected by pointers, allowing dynamic memory allocation
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p13](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Array vs linked list (which is better)

### Viva p13 Q2 <sub>Q0605</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Array vs Linked List — which one is better?

- **Printed answer:** Neither is always better; it depends on the application. Arrays are faster for indexing, while Linked Lists are better for frequent insertions and deletions
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p13](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Asymptotic complexity (Big-O)

### Q7 <sub>Q0075</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which runs the fastest? (O(log n) / O(n) / O(n log n) / O(√n))

- **Printed answer:** (ক) O(log n)
- **Source:** [BCS/54_qpsk-bpsk-8086-addressing.md](../BCS/54_qpsk-bpsk-8086-addressing.md) · [image](../BCS/54_qpsk-bpsk-8086-addressing.jpg); [BCS/40_big-o-firewall-scheduling-shannon-hartley.md](../BCS/40_big-o-firewall-scheduling-shannon-hartley.md) · [image](../BCS/40_big-o-firewall-scheduling-shannon-hartley.jpg)

## Best/worst-case complexity (binary search, quicksort, DFS)

### Q3 <sub>Q0844</sub>

*RPGCL Assistant Manager (ICT) (BUET) · 2022 · Written*

Give the best-case and worst-case complexity of binary search, quick sort and depth-first search.

- **Printed answer:** Binary search O(1)/O(log n); quicksort O(n)/O(n^2); DFS O(V+E)
- **Correction:** Quicksort best case is O(n log n), not O(n).
- **Source:** [PETROBANGLA/11_ipv6-nat-and-complexity.md](../PETROBANGLA/11_ipv6-nat-and-complexity.md) · [image](../PETROBANGLA/11_ipv6-nat-and-complexity.jpg)

## BFS vs DFS

### Q21(a) <sub>Q0016</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

What are the differences between BFS and DFS? For what sort of problems is it better to use BFS than DFS?

- **Printed answer:** BFS uses a queue and finds shortest paths near the source; DFS uses a stack and backtracking with less memory; both O(V+E).
- **Correction:** Minor errors: the DFS column says the stack is used for 'BFS traversal' (it should say DFS), and 'BFS is slower than DFS' is not generally true, since both are O(V+E). The 'when to use BFS' part should name shortest paths in unweighted graphs and solutions close to the root.
- **Source:** [BCS/09_bfs-dfs-and-linked-list.md](../BCS/09_bfs-dfs-and-linked-list.md) · [image](../BCS/09_bfs-dfs-and-linked-list.jpg)

## Binary search

### Q7 <sub>Q0927</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written · 10 marks*

Describe step by step how binary search locates a target value in a sorted array.

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Binary search vs linear search

### Viva p14 Q5 <sub>Q0608</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Why is Binary Search faster than Sequential Search?

- **Printed answer:** Binary Search repeatedly divides the search space in half, giving O(log n) time complexity. Sequential Search checks elements one by one, taking O(n) time
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Binary tree from postorder, array representation

### Q2(a) <sub>Q0887</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Binary tree with nodes {a..i} has postorder a b f c h d e g i; draw the tree and its sequential array representation (only solvable uniquely if the tree is assumed complete).

- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

## Binary tree from postorder; array representation

### Q2(a) <sub>Q0468</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Binary tree with nodes a..i has postorder a b f c h d e g i. Draw the tree and give its (approximate) array representation.

- **Printed answer:** Solution says the tree cannot be built from postorder alone (root i; inorder needed).
- **Correction:** True in general, but the question asks for an array representation, which implies a complete binary tree. Under that assumption the tree is unique: root i; i->(h,g); h->(f,c); g->(d,e); f->(a,b); array (1-based) = [i, h, g, f, c, d, e, a, b]. The solution should give this.
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p3](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

## Binary tree traversal (BFS/DFS)

### Q5 <sub>Q0866</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · 2023-01-20 · Written*

Give BFS and DFS traversals of the binary tree: root 1, children 2 and 3; node 2 has children 4 and 5.

- **Printed answer:** BFS 1 2 3 4 5; preorder 1 2 4 5 3, inorder 4 2 5 1 3, postorder 4 5 2 3 1
- **Source:** [PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.md) · [image](../PETROBANGLA/09_crypto-algorithms-and-bfs-dfs.jpg); [PETROBANGLA/05_stack-ops-and-teletalk-kmap.md](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.md) · [image](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.jpg)

## Breadth-first search

### Q76 <sub>Q0136</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which data structure is used in breadth-first search? (Stack / Queue / Heap / Linked list)

- **Printed answer:** (খ) Queue
- **Source:** [BCS/53_bfs-injective-functions-tree-leaves.md](../BCS/53_bfs-injective-functions-tree-leaves.md) · [image](../BCS/53_bfs-injective-functions-tree-leaves.jpg)

## BST traversal

### Q87 <sub>Q0147</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which traversal sorts the elements of a binary search tree? (Preorder / Postorder / Inorder / Level order)

- **Printed answer:** (গ) Inorder
- **Source:** [BCS/41_array-pointers-white-box-bst-pcb.md](../BCS/41_array-pointers-white-box-bst-pcb.md) · [image](../BCS/41_array-pointers-white-box-bst-pcb.jpg)

## Bubble sort

### Q6 <sub>Q0926</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written · 10 marks*

What is bubble sort? Why does it fail if the array is unsorted? (Premise is flawed: bubble sort works on unsorted arrays; probably meant binary search failing on unsorted data.)

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Bubble sort vs merge sort

### Q9 <sub>Q0929</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written · 10 marks*

Explain the logic of bubble sort and why it is inefficient for large datasets compared with merge sort.

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Choice of data structure (deletion cost)

### Q6(a) <sub>Q0048</sub>

*38th BCS Written · 2018 · Written*

The list 3, 5, 7, 11, 13, 17 is stored in sequence. Which of FIFO, queue, heap, linked list and stack needs the least data movement when 11 is removed? Justify.

- **Printed answer:** Linked list: only a pointer changes. Queue/stack need repeated pops and pushes, and a heap must re-heapify.
- **Source:** [BCS/27_oop-advantages-data-structures-circular-queue.md](../BCS/27_oop-advantages-data-structures-circular-queue.md) · [image](../BCS/27_oop-advantages-data-structures-circular-queue.jpg)

## Circular queue

### Q7(a) <sub>Q0049</sub>

*38th BCS Written · 2018 · Written*

A circular queue has 6 locations (0-5). Starting empty: add A, C, D; insert F; delete two; add K, L, M; delete two; add R. Give FRONT and REAR after each step.

- **Printed answer:** Steps: (-1,-1) → F=0,R=2 → R=3 → F=2 → R=0 (M wraps to 0) → F=4 → R=1. Final FRONT = 4, REAR = 1.
- **Source:** [BCS/27_oop-advantages-data-structures-circular-queue.md](../BCS/27_oop-advantages-data-structures-circular-queue.md) · [image](../BCS/27_oop-advantages-data-structures-circular-queue.jpg); [BCS/29_circular-queue-solution-operating-system-deadlock.md](../BCS/29_circular-queue-solution-operating-system-deadlock.md) · [image](../BCS/29_circular-queue-solution-operating-system-deadlock.jpg)

## Course outline: programming, data structures, algorithms, digital systems

### Outline p1 (Class 01-09) <sub>Q0001</sub>

*46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch) · Study note*

Coaching course outline, classes 01-09: computer programming (C, OOP), data structures (arrays, stacks/queues, lists, trees, graphs, sorting, hashing), algorithms (asymptotics, D&C, DP, greedy, graph algorithms), digital systems (number systems, Boolean algebra, K-map, flip-flops, counters, MUX, ADC/DAC).

- **Source:** [BCS/05_course-outline-class-01-09.md](../BCS/05_course-outline-class-01-09.md) · [image](../BCS/05_course-outline-class-01-09.jpg)

## Divide and conquer algorithms

### Q1(ii) <sub>Q0244</sub>

*BPDB Assistant Engineer (CSE) · 2021 · MCQ*

Which of the given algorithms use divide and conquer? (options not on page)

- **Note:** No answer printed. Expected: e.g. merge sort, quick sort, binary search.
- **Source:** [BUET JOB/36_math-mcq-and-bpdb-2021.md](../BUET%20JOB/36_math-mcq-and-bpdb-2021.md) · [image](../BUET%20JOB/36_math-mcq-and-bpdb-2021.jpg)

## Divide and conquer on linked lists

### Viva p14 Q6 <sub>Q0609</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Can Divide and Conquer be applied to Linked Lists?

- **Printed answer:** Yes, but not efficiently for searching because linked lists don't support direct access. It is commonly used for algorithms like Merge Sort on linked lists
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Divide and conquer vs dynamic programming

### Q3 <sub>Q0215</sub>

*BCC Assistant Programmer (BUET) (inferred from page order) · 2021-02-12 · Written*

Differentiate divide-and-conquer and dynamic programming.

- **Printed answer:** Table: D&C has independent subproblems, top-down, recursive (merge sort, binary search); DP has overlapping subproblems solved once and stored, bottom-up (matrix-chain multiplication).
- **Source:** [BUET JOB/07_subnet-grep-divide-conquer.md](../BUET%20JOB/07_subnet-grep-divide-conquer.md) · [image](../BUET%20JOB/07_subnet-grep-divide-conquer.jpg)

## Equilibrium index of an array

### Q14 <sub>Q0176</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · Written*

Write int equilibrium(int arr[], int n) returning an index where the sum of lower-index elements equals the sum of higher-index elements, else -1. E.g. {-7,1,5,2,-4,3,0} → 3; {1,2,3} → -1.

- **Printed answer:** O(n²) C++ solution computing left and right sums for each i; returns 3 for the example.
- **Source:** [BUET JOB/16_inclusion-exclusion-and-equilibrium.md](../BUET%20JOB/16_inclusion-exclusion-and-equilibrium.md) · [image](../BUET%20JOB/16_inclusion-exclusion-and-equilibrium.jpg); [BUET JOB/12_equilibrium-index-biwta-subnet.md](../BUET%20JOB/12_equilibrium-index-biwta-subnet.md) · [image](../BUET%20JOB/12_equilibrium-index-biwta-subnet.jpg); [BUET JOB/31_bpdb-protocols-sql-algorithms.md](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.md) · [image](../BUET%20JOB/31_bpdb-protocols-sql-algorithms.jpg)

## Hashing (O(1) search)

### Q9 <sub>Q0221</sub>

*BCC Assistant Programmer (BUET) (inferred from page order) · 2021-02-12 · Written*

Which data structure gives O(1) expected search time for a set of objects?

- **Note:** No answer printed ('Try yourself'). Correct: a hash table.
- **Source:** [BUET JOB/14_er-model-python-o1-search.md](../BUET%20JOB/14_er-model-python-o1-search.md) · [image](../BUET%20JOB/14_er-model-python-o1-search.jpg)

## Hashing (separate chaining)

### Q74 <sub>Q0134</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Average search time of a hash table using separate chaining with load factor α: (O(1+α) / O(α²) / O(log α) / O(α))

- **Printed answer:** (ক) O(1 + α)
- **Source:** [BCS/38_user-centered-design-schrodinger-hash-bitmap.md](../BCS/38_user-centered-design-schrodinger-hash-bitmap.md) · [image](../BCS/38_user-centered-design-schrodinger-hash-bitmap.jpg)

## Heap construction and deletion

### Q7 <sub>Q0190</sub>

*PGCB Assistant Engineer (CSE) (BUET) (inferred from page order) · 2021-09-30 · Written*

Build a heap from {15, 19, 10, 7, 17, 16} and redraw it after deleting element 7.

- **Printed answer:** Draws a binary search tree (15 root; 10, 19; 7; 17; 16) and deletes leaf 7.
- **Correction:** The tree drawn is a BST, not a heap. Max-heap by insertion: 19 / 17,16 / 7,15,10; deleting 7 (move last element 10 into its place) gives 19 / 17,16 / 10,15. (Min-heap: 7 / 10,15 / 19,17,16; deleting root 7 gives 10 / 16,15 / 19,17.)
- **Source:** [BUET JOB/04_heap-insert-and-delete-7.md](../BUET%20JOB/04_heap-insert-and-delete-7.md) · [image](../BUET%20JOB/04_heap-insert-and-delete-7.jpg)

## Heapsort

### Q1 (part 2) <sub>Q0859</sub>

*BPSC (Ministry of Home Affairs) Senior Computer Operator · 2022-09-13 · Written*

Write down the heapsort algorithm.

- **Printed answer:** Only the header 'HeapSort(arr)' is on this page; the body is on a page not in the folder
- **Source:** [PETROBANGLA/10_ensemble-learning-and-max-heap.md](../PETROBANGLA/10_ensemble-learning-and-max-heap.md) · [image](../PETROBANGLA/10_ensemble-learning-and-max-heap.jpg)

## Insertion sort complexity

### Q60 <sub>Q0120</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Worst-case number of comparisons in insertion sort: (n(n+1) / n log n / n(n−1)/2 / n(n−1)/4)

- **Printed answer:** (গ) n(n−1)/2 = 1 + 2 + … + (n−1)
- **Source:** [BCS/58_euler-corollary-deadlock-insertion-sort.md](../BCS/58_euler-corollary-deadlock-insertion-sort.md) · [image](../BCS/58_euler-corollary-deadlock-insertion-sort.jpg); [BCS/44_db-keys-reinforcement-learning-epsilon.md](../BCS/44_db-keys-reinforcement-learning-epsilon.md) · [image](../BCS/44_db-keys-reinforcement-learning-epsilon.jpg)

## Linked list

### Q1 (candidate 2, VIVA-59) <sub>Q0461</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What is a linked list?

- **Printed answer:** A data structure storing data as nodes, each with fields and a link to the next node
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

## Linked List

### Viva p14 Q11 <sub>Q0613</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Linked List?

- **Printed answer:** A Linked List is a linear data structure where each node contains data and a pointer to the next node. It supports dynamic memory allocation and easy insertion/deletion
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Linked list vs array

### Q21(b) <sub>Q0017</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Write the advantages and disadvantages of using a linked list instead of an array.

- **Printed answer:** Advantages: dynamic size, no memory wastage, easy stack/queue implementation, easy insertion/deletion. The disadvantages continue on printed page 276, which is not in this batch.
- **Source:** [BCS/09_bfs-dfs-and-linked-list.md](../BCS/09_bfs-dfs-and-linked-list.md) · [image](../BCS/09_bfs-dfs-and-linked-list.jpg)

## Max heap properties

### Q1 (part 1) <sub>Q0858</sub>

*BPSC (Ministry of Home Affairs) Senior Computer Operator · 2022-09-13 · Written*

Write down the properties of a max heap.

- **Printed answer:** Parent key ≥ children keys; maximum at root; largest element popped first
- **Source:** [PETROBANGLA/10_ensemble-learning-and-max-heap.md](../PETROBANGLA/10_ensemble-learning-and-max-heap.md) · [image](../PETROBANGLA/10_ensemble-learning-and-max-heap.jpg)

## Maximum subarray (Kadane's algorithm)

### Q4 <sub>Q0166</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · Written*

Find the maximum-sum contiguous subarray of A = [-2, 1, -3, -1, 2, 1, -5, 4] (the question-only sheet prints A[3] = 1).

- **Printed answer:** Kadane's algorithm; claims max sum 6 with subarray [1, -3, -1, 2, 1, -5, 4].
- **Correction:** Wrong (copied from the classic array [-2,1,-3,4,-1,2,1,-5,4]); the stated subarray sums to -1. For the given array the maximum sum is 4 (subarray [4]; also [1,2,1] if A[3]=1).
- **Source:** [BUET JOB/21_linux-count-and-max-subarray.md](../BUET%20JOB/21_linux-count-and-max-subarray.md) · [image](../BUET%20JOB/21_linux-count-and-max-subarray.jpg); [BUET MSC/02_bpdb-assistant-engineer-questions-1-9.md](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) · [image](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.jpg)

## Merge sort

### Q23(a) <sub>Q0020</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Write the Mergesort algorithm to sort n elements using the divide and conquer strategy.

- **Printed answer:** Recursive MergeSort(arr,start,end) on halves plus Merge with left/right temporary arrays (pseudocode cut off at the page end).
- **Source:** [BCS/01_interrupt-part2-mergesort.md](../BCS/01_interrupt-part2-mergesort.md) · [image](../BCS/01_interrupt-part2-mergesort.jpg)

## Parameterized algorithms

### Q11 <sub>Q0277</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

What is a parameterized algorithm and how does it improve code reusability and efficiency?

- **Source:** [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)

## Queue

### Viva p15 Q13 <sub>Q0615</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Queue?

- **Printed answer:** A Queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are enqueued at the rear and dequeued from the front
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p15](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Queue using two stacks

### Q8 <sub>Q0928</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written · 10 marks*

Explain the logic to implement a FIFO queue using only two stacks.

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Quick sort

### Q2 (candidate 2, VIVA-59) <sub>Q0462</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

How does quick sort work?

- **Printed answer:** Divide and conquer: split the list into a part with smaller elements and a part with larger ones, recursively, until each part has one element
- **Note:** Simplified: the split is made by partitioning around a chosen pivot.
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

## Quicksort worst case

### Q2(b) <sub>Q0230</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

Analyse quicksort (first element as pivot) when the input is already sorted.

- **Note:** No answer printed. Correct: worst case T(n)=T(n−1)+O(n) = O(n²).
- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

## Recurrence of binary search

### Q7 <sub>Q0878</sub>

*Petrobangla Assistant Manager (IT) (BUET) · 2022-09-16 · Written*

Write the recurrence equation of binary search and solve it.

- **Printed answer:** States T(n) = T(n/2) + 1, then guesses O(n log n) and 'proves' it using T(n) = 2T(n/2) + n
- **Correction:** Solves the merge-sort recurrence instead. T(n) = T(n/2) + c gives T(n) = c·log2 n + T(1) = O(log n).
- **Source:** [PETROBANGLA/15_adc-and-binary-search-recurrence.md](../PETROBANGLA/15_adc-and-binary-search-recurrence.md) · [image](../PETROBANGLA/15_adc-and-binary-search-recurrence.jpg)

## Sorting algorithms

### Q54 <sub>Q0114</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which sorting algorithm is not comparison based? (Merge / Heap / Counting / Quick sort)

- **Printed answer:** (গ) Counting sort
- **Source:** [BCS/33_line-voltage-2s-complement-sorting-cpu.md](../BCS/33_line-voltage-2s-complement-sorting-cpu.md) · [image](../BCS/33_line-voltage-2s-complement-sorting-cpu.jpg)

## Sorting complexities

### Q9 <sub>Q0304</sub>

*DPDC Assistant Manager (ICT) (inferred from page order) · 2025-06-27 · Written*

Best, worst and average time complexities of selection, insertion, merge, quick and heap sort.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## Sorting lower bound (decision tree)

### Q99 <sub>Q0159</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which method is often used to prove lower bounds in sorting? (Recursion tree / Master theorem / Decision tree / Dynamic programming)

- **Printed answer:** (গ) Decision tree → Ω(n log n) comparisons
- **Source:** [BCS/36_full-adder-superposition-decision-tree.md](../BCS/36_full-adder-superposition-decision-tree.md) · [image](../BCS/36_full-adder-superposition-decision-tree.jpg)

## Stack

### Viva p14 Q12 <sub>Q0614</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Stack?

- **Printed answer:** A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Common operations are Push (insert) and Pop (remove)
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Stack push/pop

### Q6 <sub>Q0867</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · 2023-01-20 · Written*

Push(200), Push(500), Push(100), S = Pop(). What is S?

- **Printed answer:** S = 100; stack left with 500 (top), 200
- **Source:** [PETROBANGLA/05_stack-ops-and-teletalk-kmap.md](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.md) · [image](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.jpg)

## Stack vs Queue

### Viva p14 Q7 <sub>Q0610</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Difference between Stack and Queue.

- **Printed answer:** Stack: Follows LIFO (Last In, First Out); insertion and deletion occur at the same end; Queue: Follows FIFO (First In, First Out); insertion occurs at the rear and deletion at the front
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Suffix tree

### Q16 <sub>Q0084</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A suffix tree is useful for: (fast string search / minimum cut / sorting numbers / graph coloring)

- **Printed answer:** (ক) Fast string search
- **Source:** [BCS/59_blockchain-polynomial-suffix-tree.md](../BCS/59_blockchain-polynomial-suffix-tree.md) · [image](../BCS/59_blockchain-polynomial-suffix-tree.jpg)

## Tree

### Viva p14 Q8 <sub>Q0611</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Tree?

- **Printed answer:** A Tree is a non-linear data structure made up of nodes connected by edges. It has a root node and parent-child relationships
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Tree data structure uses

### Viva p13 Q1 (+p14 Q9) <sub>Q0604</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Why do we use Tree data structures?

- **Printed answer:** A Tree is used to store hierarchical data efficiently, such as file systems and databases. It provides fast searching, insertion, and deletion compared to linear structures
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p13](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p14](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Tree reconstruction from traversals

### Q1 <sub>Q0310</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2026-08-21 · Written*

Reconstruct a binary tree from given preorder and inorder sequences, showing the steps.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## Tree traversal (right-left-root)

### Q4 <sub>Q0299</sub>

*DPDC Assistant Manager (ICT) · 2025-06-27 · Written*

Write the traversal order of a given tree visiting right child, then left child, then root (tree not on this page).

- **Source:** [BUET JOB/28_islamic-bank-cont-and-dpdc.md](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.md) · [image](../BUET%20JOB/28_islamic-bank-cont-and-dpdc.jpg)

## Tree traversal and array representation

### Q2(a) <sub>Q0229</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

A binary tree with nodes {a..i} has post-order a b f c h d e g i. Draw it and give its sequential array representation.

- **Note:** No answer printed. Assuming a complete binary tree: root i; i.left = h(f(a,b), c), i.right = g(d, e); array: i h g f c d e a b.
- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)
