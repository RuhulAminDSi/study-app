# Deadlock detection and recovery, OS–hardware relationship, software risk analysis

- **Source image:** `24_deadlock-detection-recovery-os-hardware.jpg` (original file name `490356882_1232701028858809_6264181980028818465_n.jpg`)
- **Page:** 24 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 575
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- The page opens mid-answer: the opening lines belong to part (c) of an earlier question (deadlock avoidance/characteristics) whose question text is not on this image. The first visible heading is "Deadlock Detection".
- A resource-allocation graph (R1/P1/R2/P2) is a figure; its nodes and labelled arrows are transcribed as an edge list below the printed text.
- Question (d) is printed with the marker "(d)" but no question number; question 9 (a) follows. The number of the question containing part (d) is not visible on this page.
- The answer to 9 (a) is cut off by the page break: only the first of the five risk impact areas ("New, unproven technologies") is visible; the remaining four are [cut off].
- No handwritten marginalia observed on this page.

## Content

**Deadlock Detection**

**If resources have single instance:** In this case for Deadlock detection, we can run an algorithm to check for cycle in the resource allocation graph. Presence of cycle in the graph is the sufficient condition for deadlock. In the above diagram, resource 1 and resource 2 have single instances. There is a cycle R1 → P1 → R2 → P2. So, Deadlock is confirmed.

**If there are multiple instances of resources:** Detection of the cycle is necessary but not sufficient condition for deadlock detection, in this case, the system may or may not be in deadlock varies according to different situations.

*[Figure: resource allocation graph. Rectangles: R1 (top), R2 (bottom). Ellipses: P1 (left), P2 (right). Edges: R1 → P1 labelled "Assign to"; P1 → R2 labelled "Waiting for"; R2 → P2 labelled "Assign to"; P2 → R1 labelled "Waiting for".]*

**Deadlock Recovery**

A traditional operating system such as Windows doesn't deal with deadlock recovery as it is time and space consuming process. Real-time operating systems use Deadlock recovery.

**Recovery method**

- **Killing the process:** Killing all the process involved in the deadlock. Killing process one by one. After killing each process check for deadlock again keep repeating the process till system recover from deadlock.
- **Resource Preemption:** Resources are preempted from the processes involved in the deadlock; preempted resources are allocated to other processes so that there is a possibility of recovering the system from deadlock. In this case, the system goes into starvation.

**(d) What are the relationship between operating system and computer hardware?**

**Answer:**

An operating system or OS is software on the hard drive that enables the computer hardware to communicate and operate with the computer software. Without an operating system, a computer and software programs would be useless. It is like an interpreter between user and hardware.

**9. (a) Describe different techniques use the risk analysis of software development.**

**Answer:**

During the risk analysis process, have to consider every identified risk and make a perception of the probability and seriousness of that risk. For most software development projects, we can define five main risk impact areas:

- New, unproven technologies

[cut off — remaining list items continue on the next page]