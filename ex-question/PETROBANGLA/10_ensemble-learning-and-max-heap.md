# DNS-spoofing diagram, Q5 (weak and strong learner ensemble learning), BPSC Senior Computer Operator 13.09.2022 (CSE) — Q1 (properties of Max heap)

- **Source image:** `10_ensemble-learning-and-max-heap.jpg` (original file name `496844285_9767686420013588_8247476755939179830_n.jpg`)
- **Page:** 10 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** BPSC (Ministry of Home Affairs) — Senior Computer Operator; Exam: 13.09.2022 (CSE)
- **Exam date:** 13.09.2022
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- This page spans two papers. The DNS-spoofing figure and Q5 belong to the preceding paper (the GTCL Assistant Engineer (CSE) 2022 (BUET) sequence started on page 2), whose banner is not on this page.
- The only date printed on this page is "Exam: 13.09.2022 (CSE)" for the BPSC Senior Computer Operator paper beginning at Q1 near the bottom.
- The DNS-spoofing figure at the top is a flow diagram with numbered steps ①–③; its labels are transcribed below. It cannot be rendered in markdown.
- Q1's `Algorithm` block is cut off by the bottom of the page after the pseudocode header `HeapSort(arr)`; the algorithm body continues onto the next page.
- The source prints "heapsort algorithm" in the Q1 question and "Max heap"/"Max-Heap" inconsistently in the answer; both forms are reproduced.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

*[Figure: DNS poisoning flow diagram. Nodes and labels: `Hacker` (top); arrow ① labelled "Injects fake DNS entry" leading down to `DNS Server`; `Client` (left) with arrow ② labelled "Issues request to real website" leading to `DNS Server`; from `DNS Server` a curved arrow ③ labelled "Redirected to fake website" leading up-right to `Fake website` (top right, marked with a padlock), and a straight grey arrow leading right to `Real website` (bottom right, marked with a tick).]*

Once someone gains access to a DNS server and begins redirecting traffic, they are engaging in DNS spoofing. DNS cache poisoning takes this one step further. When DNS cache poisoning happens, a user's device places the illegitimate IP address in its cache. This means that the device will automatically direct the user to the illegitimate IP address even after the issue is resolved.

**5. Weak and strong learner ensemble learning in Machine learning.**

**Answer:**

**Weak Learners:** A weak classifier is a model for binary classification that performs slightly better than random guessing.

**Strong Learners:** A strong classifier is a model for binary classification that performs with arbitrary performance, much better than random guessing.

---

**BPSC**
**(Ministry of Home Affairs)**
**Senior Computer Operator**
**Exam: 13.09.2022 (CSE)**

**1. Write down the properties of Max heap. Also write down the heapsort algorithm.**

**Answer:**

**Properties of Max heap:**

- In a Max-Heap the key present at the root node must be greater than or equal to among the keys present at all of its children.
- In a Max-Heap the maximum key element present at the root.
- A Max-Heap uses the descending priority.
- In the construction of a Max-Heap, the largest element has priority.
- In a Max-Heap, the largest element is the first to be popped from the heap.

**Algorithm**

```
    HeapSort(arr)
```

[cut off — the heapsort algorithm body continues on the next page]
