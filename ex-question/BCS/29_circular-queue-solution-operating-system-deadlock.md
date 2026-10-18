# Circular queue solution tables; operating system basics and deadlock definition

- **Source image:** `29_circular-queue-solution-operating-system-deadlock.jpg` (original file name `490556033_1232701245525454_5308026647454988140_n.jpg`)
- **Page:** 29 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 574
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- The page opens with sub-part "g) R is added to the queue" — the last sub-part of question 7 (a) on the previous page. Sub-parts a)–f) are not repeated here.
- In the queue tables the printed row order of letters sometimes does not follow insertion order (e.g. the "K, L & M are added" table shows M, _, D, F, K, L). The tables are transcribed exactly as printed; no correction has been made.
- The "Two letters are deleted" tables contain cells printed with no index number in the first two columns; reproduced as printed.
- Part (c) is cut off mid-answer after the "Hold and Wait" sentence.
- No handwritten marginalia observed on this page.

## Content

g) R is added to the queue

**Answer:**

Initially Queue is empty: (FRONT = REAR=-1)

| | | | | | |
|---|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 | 5 |

A, C &D are added in the Queue:

| A | C | D | | | |
|---|---|---|---|---|---|
| 0 (FRONT) | 1 | 2(REAR) | 3 | 4 | 5 |

F is inserted in the Queue:

| A | C | D | F | | |
|---|---|---|---|---|---|
| 0 (FRONT) | 1 | 2 | 3 (REAR) | 4 | 5 |

Two letters are deleted from the Queue:

| | | D | F | | |
|---|---|---|---|---|---|
| 0 | 1 | 2(FRONT) | 3 (REAR) | 4 | 5 |

K, L & M are added in the Queue:

| M | | D | F | K | L |
|---|---|---|---|---|---|
| 0 (REAR) | 1 | 2(FRONT) | 3 | 4 | 5 |

Two letters are deleted from the Queue:

| M | | | | K | L |
|---|---|---|---|---|---|
| 0 (REAR) | 1 | 2 | 3 | 4(FRONT) | 5 |

R is added in the Queue:

| M | R | | | K | L |
|---|---|---|---|---|---|
| 0 | 1(REAR) | 2 | 3 | 4(FRONT) | 5 |

**(b) What is operating system? Why do we need operating system?**

**Answer:**

An operating system (OS) is software that manages computer hardware and software. Common desktop operating systems include Windows, Mac OS X and Linux.

An operating system is the most important software that runs on a computer. It manages the computer's memory and processes, as well as all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer's language.

**(c) What is deadlock? Describe the way of detecting and protecting deadlock.**

**Answer:**

Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. Hold and Wait: A process is holding at least one resource and waiting for resources.

[cut off]