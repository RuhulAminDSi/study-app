# Scheduling code completion, inclusion-exclusion for hospital/police station selection, equilibrium index

- **Source image:** `16_inclusion-exclusion-and-equilibrium.jpg` (original file name `495015824_9680213508760880_8416475988039171329_n.jpg`)
- **Page:** 16 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **24**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown". The same paper (BPDB, per the question text on printed pages 233–234) continues after this page with a "BIWTA, Assistant Engineer (CSE), Exam: 24.02.2023 (BUET)" banner on printed page 25 — recorded here as "not shown" because it is not printed on this scan.
- **The page begins mid-code:** the `if not overlap: / schedule.append(requests[i]) / return len(schedule)` lines are the tail of the Python function whose statement is question 12 on printed page 233. Reproduced verbatim as a continuation block.
- **Question 14 is cut off** at the bottom edge: the printed example ends at "3 is an equilibrium index, because: A[0] + A[1] + A[2] = A[4] + A[5] + A[6]" with no "Answer:" section on this page. Marked `[cut off]`. (Note the printed equality indexes A[4] rather than A[3]; reproduced as printed.)
- **A typographical error in the source is preserved:** question 13 is printed as "for uninterrupted power supply" in the body while the question statement reads "interrupted power supply". Both spellings are kept exactly as printed.
- Question 13's arithmetic is presented as centred display equations in the source; reproduced with LaTeX/plain notation, values unchanged.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Continuation of the Python answer to question 12 from printed page 233)

```python
        if not overlap:
            schedule.append(requests[i])
    return len(schedule)
```

The input n is the number of customer requests, and requests is a list of tuples representing each customer request. Each tuple contains two integers start and end, representing the starting and ending time of the customer's time slot. The output is the maximum number of customers who can receive service at the same time.

**13. Suppose we have 6 hospital and 4 police station. Need to select a 4 stations for interrupted power supply. How many ways can we select where at least one hospital on the uninterrupted power supply list?**

**Answer:**

To calculate the number of ways to select 4 stations for uninterrupted power supply where at least one hospital is included, we can use the principle of inclution-exclusion.

Let A be the set of all possible selections of 4 stations from the 10 available stations, and let B be the set of selections that do not include any hospital. We want to find the size of the set A - B, which represents the set of selections that include at least one hospital.

The size of A can be calculated as the number of combinations of 4 stations from 10:

$$
A = C(10, 4) = 210
$$

The size of B can be calculated as the number of combinations of 4 police stations from the 6 available police stations:

$$
B = C(6, 4) = 15
$$

To apply the inclution-exclusion principle, we need to find the size of the intersection of A and B, which represents the set of selections that include no hospitals and no police stations. This set is empty, since we need to select at least one hospital or one police station. Therefore, the size of the intersection is 0.

Using the inclution-exclusion principle, the size of the set A - B, which represents the set of selections that include at least one hospital, can be calculated as:

$$
|A - B| = |A| - |B| + |A \cap B|
$$
$$
= 210 - 15 + 0
$$
$$
= 195
$$

Therefore, there are 195 ways to select 4 stations for uninterrupted power supply where at least one hospital is included.

**14. Write a function int equilibrium (int[] arr, int n); that given a sequence arr[] of size n, returns an equilibrium index (if any) or -1 if no equilibrium indexes exist. The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. Foe example:**

**Input:** A[ ] = {-7, 1, 5, 2, -4, 3, 0}

**Output:** 3

3 is an equilibrium index, because: A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

`[cut off — no "Answer:" section appears on this page; the worked solution is on printed page 25 of the original document]`

[Note: the source prints "Foe example" — reproduced verbatim.]
