# Tail of a black-box testing answer, Q4 (shortest path in a negative weighted graph), Q5 (K-map simplification)

- **Source image:** `08_bellman-ford-negative-cycle.jpg` (original file name `496843911_9767686440013586_5245126165637145866_n.jpg`)
- **Page:** 8 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** not shown (no exam banner on this page)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- No exam banner appears anywhere on this page, so the paper/post cannot be identified from this image alone.
- The page opens mid-answer to a preceding question on equivalence classes / boundary value analysis, whose question text and Black Box diagram are on the previous page (only the tail of the diagram strip — "Input → Black Box → Output" — is visible at the top of this page).
- Q4's answer contains a worked example with printed `Input:`/`Output:` blocks and a small directed graph (nodes 0, 1, 2, 3 with edges 0→1 weight 1, 1→2 weight −1, 2→3 weight −1, 3→0 weight −1). The figure is described; edges are also listed below.
- Q5's answer is a cross-reference only ("[See Janata Bank Ltd, SO (Assistant Network Engineer), Written Exam: 2020]"); the expression to be simplified is not printed on this page.
- The source prints the equivalence-class test set as `{-5, 500, 6000}` and the boundary-value set as `{0, -1, 5000, 5001}`. Reproduced as printed.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

*[Figure strip carried over from the previous page: `Input ...........→ [Black Box] ...........→ Output`]*

For a program that calculates the square root of an input integer which can assume values in the range of 0 to 5000 there are three equivalence classes. The set of negative integers the set of integers in the range of 0 and 5000 as well as the integers larger than 5000. Consequently the test cases must include representatives for each of the three equivalence classes and a possible test set can be: {-5, 500, 6000}. Boundary value analysis initiates selection of test cases at the boundaries of the different equivalence classes. For a function that calculates the square root of integer values in the range of 0 and 5000, the test cases must include the following values: {0, -1, 5000, 5001}.

**4. How to find single source shortest path from negative weighted cycle. Justify and how you find it is negative weighted graph.**

**Answer:**

The Bellman-Ford algorithm assumes that after V-1 steps, all the nodes will surely have correct distances. Let's prove this assumption.

Any acyclic path inside the graph can have at most V nodes, which means it has V-1 edges. If a path has more than V-1 edges, it means that the path has a cycle because it has more than V nodes. Therefore, it must visit the same node more than once.

We can guarantee that any shortest path won't go through cycles. Otherwise, we could have removed the cycle, and gained a better path.

Going back to the Bellman-Ford algorithm, we can guarantee that after V-1 steps, the algorithm will cover all the possible shortest paths. Therefore, the algorithm is guaranteed to give an optimal solution.

**Examples:**

```
Input:  4 4
        0 1  1
        1 2 -1
        2 3 -1
        3 0 -1
Output: Yes
The graph contains a negative cycle.
```

*[Figure: directed graph with four nodes. Node 0 top-left, node 1 top-right, node 2 bottom-right, node 3 bottom-left. Edges: 0 → 1 labelled 1; 1 → 2 labelled −1; 2 → 3 labelled −1; 3 → 0 labelled −1.]*

**5. Simplify using K-map with logic circuit.**

**Answer:** [See Janata Bank Ltd, SO (Assistant Network Engineer), Written Exam: 2020]
