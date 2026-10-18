# Digital Logic Design — POS representation, Q96 (SOP → POS) and Q36

- **Source image:** `06_q96-sop-to-pos.jpg` (original file name `829157845_4522929061279856_4170605103521676010_n.jpg`)
- **Page:** 6 of 11
- **Paper / Post:** Q96 — 46th BCS ICT; Q36 — BPDM AE (CSE) and Teletalk AM (IT)
- **Exam date:** BPDM AE(CSE): 10.05.2024; Teletalk AM(IT): 2023
- **Marks:** not shown

## Transcription Notes

- The "Representation of POS" block at the top and its K-map are the tail of a worked example begun on the previous printed page.
- Q36's solution is not on this page; only the word "Solution:" appears at the foot — the page ends there.
- Coloured cell fills are the coach's grouping marks; blank = no value written.
- The worked material is the coaching handout's own solution, not part of the official papers.

## Content

**Representation of POS:**

F(A,B,C,D) = ∏M(0,1,2,3,5,6,11,12)

F(A,B,C,D) = ∑m (4,7,8,9,10,13,14,15)

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  |  |  |
| 01 | 1 |  | 1 |  |
| 11 |  | 1 | 1 | 1 |
| 10 | 1 | 1 |  | 1 |

---

**96.** Convert the following Sum of Products (SOP) canonical expression into Product of Sums (POS) canonical expression:

f(A,B,C,D) = ∑(1,3,5,8,11)

**[46th BCS ICT]**

**Solution:**

SOP, f(A,B,C,D) = ∑(1,3,5,8,11)

Given 1s: {1,3,5,8,11}

Therefore, the 0s are: {0,2,4,6,7,9,10,12,13,14,15}

Product of Sums (POS), f(A,B,C,D) = ∏(0,2,4,6,7,9,10,12,13,14,15)

---

**36.** Simplify the following boolean expression using a 4-variable K-map:

F(A,B,C,D) = ∑ m(2,8,9,11,13,15)

**[BPDM AE(CSE) : 10.05.2024]  [ Teletalk AM(IT) : 2023]**

Solution: