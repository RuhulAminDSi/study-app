# COMPACT IT Recent Question Bank (Written) — Multiplexer divider table row, BFS vs DFS, and advantages of linked list over array (Q21a-b)

- **Source image:** `09_bfs-dfs-and-linked-list.jpg` (original file name `487506848_775600508148943_8794719893518029731_n.jpg`)
- **Page:** 9 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 5 for each of Q21(a), Q21(b)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Top of page is a continuation: the first row is the last row of a Multiplexer/Demultiplexer comparison table belonging to a sub-part (c) on the preceding page.
- Q21(b)'s printed sentence carries the mark value inline as "using array. 5"; rendered here as a separate marks value.
- No handwritten marginalia on this page.

## Content

*[Continuation — last row of the Multiplexer vs Demultiplexer table from part (c)]*

| (left column) | (right column) |
| --- | --- |
| In time division Multiplexing, multiplexer is used at the transmitter end | In time division Multiplexing, demultiplexer is used at the receiver end |

---

**21. (a) What are differences between Breadth first search (BFS) and Depth first search (DFS)? For what sort of problems it is better to use BFS than DFS?** — **5**

**Answer:** The following are the differences between the BFS and DFS:

| BFS | DFS |
| --- | --- |
| BFS stands for Breadth First Search. | DFS stands for Depth First Search. |
| It a vertex-based technique to find the shortest path in a graph. | It is an edge-based technique because the vertices along the edge are explored first from the starting to the end node. |
| Queue data structure is used for the BFS traversal. | Stack data structure is used for the BFS traversal. |
| BFS does not use the backtracking concept. | DFS uses backtracking to traverse all the unvisited nodes. |
| BFS traversal is optimal for those vertices which are to be searched closer to the source vertex. | DFS traversal is optimal for those graphs in which solutions are away from the source vertex. |
| BFS is slower than DFS. | DFS is faster than BFS. |
| It is not memory efficient as it requires more memory than DFS. | It is memory efficient as it requires less memory than BFS. |

DFS is faster than BFS. Time Complexity of BFS = O(V+E) where V is vertices and E is edges. Time Complexity of DFS is also O(V+E) where V is vertices and E is edges. The DFS needs less memory as it only has to keep track of the nodes in a chain from the top to the bottom, while the BFS has to keep track of all the nodes on the same level.

**(b) Write the advantages and disadvantages of using linked list instead of using array.** — **5**

**Answer:**

**Advantages of Linked List:**

- **Dynamic data structure:** A linked list is a dynamic arrangement so it can grow and shrink at runtime by allocating and deallocating memory. So there is no need to give the initial size of the linked list.
- **No memory wastage:** In the Linked list, efficient memory utilization can be achieved since the size of the linked list increase or decrease at run time so there is no memory wastage and there is no need to pre-allocate the memory.
- **Implementation:** Linear data structures like stacks and queues are often easily implemented using a linked list.
- **Insertion and Deletion Operations:** Insertion and deletion operations are quite easier in the linked list. There is no need to shift elements after the insertion or deletion of an element only the address present in the next pointer needs to be updated.
