# Digital Logic Design — Q95 minimization of a POS function (46th BCS ICT)

- **Source image:** `07_q95-pos-minimization.jpg` (original file name `829301463_4522929364613159_416026348293256743_n.jpg`)
- **Page:** 7 of 11
- **Paper / Post:** 46th BCS ICT (Assistant Programmer, ICT)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Q95 appears twice on this page: once with the full K-map solution, then repeated immediately with the POS→SOP conversion restated. Both instances are transcribed.
- Complements are written with prime notation (A′); each prime covers exactly the letter(s) under the printed overbar. The result reads `F = AB′ + A′C′ + A′BD′` (separate bars over A and D in the last term; B is not barred).
- Shaded cells: first map — rows 00 and 01 × columns 00 and 01 (A′C′) and the whole row 10 (AB′); second map — cells 01/00 and 01/10 (A′BD′).
- Re-transcribed from the image on 2026-10-08 (fixed: misplaced overbars in the result; the last term is A′BD′, not AB̄D̄; added the shaded-group description).
- Coloured cell fills are the coach's grouping marks; blank = no value written.
- The worked material is the coaching handout's own solution, not part of the official paper.

## Content

**95.** Minimize the following function f(A,B,C,D) = ∏(2,3,7,12,13,14,15)

**[46th BCS ICT]**

**Solution:**

f(A,B,C,D) = ∏(2,3,7,12,13,14,15)

f(A,B,C,D) = ∑(0,1,4,5,6,8,9,10,11)

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | 1 | 1 |  |  |
| 01 | 1 | 1 |  | 1 |
| 11 |  |  |  |  |
| 10 | 1 | 1 | 1 | 1 |

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | 1 | 1 |  |  |
| 01 | 1 | 1 |  | 1 |
| 11 |  |  |  |  |
| 10 | 1 | 1 | 1 | 1 |

F = AB′ + A′C′ + A′BD′

---

**95.** Minimize the following function f(A,B,C,D) = ∏(2,3,7,12,13,14,15)

**[46th BCS ICT]**

**Solution:**

POS: f(A,B,C,D) = ∏(2,3,7,12,13,14,15)

Then

SOP: f(A,B,C,D) = ∑(0,1,4,5,6,8,9,10,11)