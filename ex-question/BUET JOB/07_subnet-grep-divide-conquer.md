# Subnetting table, grep with history, and Divide & Conquer vs Dynamic Programming

- **Source image:** `07_subnet-grep-divide-conquer.jpg` (original file name `494410673_9665564380225793_7942891721340559911_n.jpg`)
- **Page:** 7 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **223**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **Cut off at the bottom edge:** question 4 ("Find the Output of following C Program:") is printed as a heading only — the program itself is on the following page of the original document (printed page 224, which does carry the tail of that program and its "Output: 146"). Marked `[cut off]`.
- Tables have been reproduced as markdown tables. The question 3 comparison table is a single wide table with two columns ("Divide & Conquer Method" / "Dynamic Programming") whose first data row contains internal bullet lists — these have been flattened into the cell with `<br>`-separated lines, preserving order and wording verbatim.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

**1. Answer the following:**

| Question | Answer |
|---|---|
| (i) 192.168.10.2/28, Find subnet mask. | 255.255.255.240 |
| (ii) 192.168.10.2/28, Find Network Address. | 192.168.10.0 |
| (iii) 192.168.10.2/28, Find IP Address of the first host? | 192.168.10.1 |
| (iv) 192.168.10.2/28, Find IP Address of the last host? | 192.168.10.14 |
| (v) 192.168.10.2/28, Find Broadcast Address. | 192.168.10.15 |

**2. In Linux, History is a very useful command to show you all of the last commands that have been recently used. Grep is a Linux command-line tool used to search for a string of characters in a specified file. Write grep and history command to find previous commands in Linux.**

**Answer:**

```
history | grep -i searchterm
```

**3. Both the algorithm the Divide and Conquer and Dynamic Programming solve a problem by breaking it into smaller problem instances and by solving them. What are the difference between there two techniques?**

**Answer:**

| Divide & Conquer Method | Dynamic Programming |
|---|---|
| It deals (involves) three steps at each level of recursion:<br>o Divide the problem into a number of subproblems.<br>o Conquer the subproblems by solving them recursively.<br>o Combine the solution to the subproblems into the solution for original subproblems. | It involves the sequence of four steps:<br>o Characterize the structure of optimal solutions.<br>o Recursively defines the values of optimal solutions.<br>o Compute the value of optimal solutions in a Bottom-up minimum.<br>o Construct an Optimal Solution from computed information. |
| It is Recursive. | It is non Recursive. |
| It does more work on subproblems and hence has more time consumption. | It solves subproblems only once and then stores in the table. |
| It is a top-down approach. | It is a Bottom-up approach. |
| In this subproblems are independent of each other. | In this subproblems are interdependent. |
| For example: Merge Sort & Binary Search etc. | For example: Matrix Multiplication. |

**4. Find the Output of following C Program:** `[cut off — the C program itself is on the following page of the original document]`
