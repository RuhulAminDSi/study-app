# Digital Logic Design — worked K-map solution (continuation) and Question 36

- **Source image:** `01_kmap-solution-q36.jpg` (original file name `828311250_4522929487946480_3257324925026227895_n.jpg`)
- **Page:** 1 of 11
- **Paper / Post:** not shown (coaching handout: Debug IT Job Solution, "Digital Logic Design", footer "MCQ & Written", printed page 16). Question 36 cites: Bank AME 08.05.2026, Bank SO IT 25.07.2026, 46th BCS ICT
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The three K-maps at the top of this page are the tail of a solution whose question statement is **not** visible on this image (it begins on the previous printed page). No question number is given for them here.
- All three K-maps hold the same 1s (cells for minterms 3, 5, 7, 9, 13, 14, 15); each repeats the map to show one more group. The highlighted cells mark the group named under that map: map (1) blue cells AB=00/CD=11 and AB=01/CD=11; map (2) yellow cells AB=11/CD=11 and AB=11/CD=10; map (3) blue cells AB=11/CD=01 and AB=10/CD=01. The pale blue circle behind cell AB=00/CD=11 in map (2) is part of the page watermark. Blank = no value written.
- Complements are written with prime notation (A′ = A with an overbar); the bar extent is as printed.
- All K-maps, group labels and the final expressions are typeset material from the coaching handout — i.e. the coach's own worked solutions, not part of any official question paper.
- Re-transcribed from the image on 2026-10-08 (fixed: K-map (1) cell values, which were wrong in the earlier version; group label of map (1) is A′CD, not A′C′D′; final expression's second term is A′CD; complements now in prime notation).

## Content

### K-map (1) — group label printed below: A′CD

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  | 1 |  |
| 01 |  | 1 | 1 |  |
| 11 |  | 1 | 1 | 1 |
| 10 |  | 1 |  |  |

### K-map (2) — group label printed below: ABC

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  | 1 |  |
| 01 |  | 1 | 1 |  |
| 11 |  | 1 | 1 | 1 |
| 10 |  | 1 |  |  |

### K-map (3) — group label printed below: AC′D

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  | 1 |  |
| 01 |  | 1 | 1 |  |
| 11 |  | 1 | 1 | 1 |
| 10 |  | 1 |  |  |

F = BD + A′CD + ABC + AC′D

---

**36.** Simplify the following boolean expression using a 4-variable K-map:

F(A,B,C,D) = ∑ m(0,3,5,7,8,10,11,12,13,14,15 )

**[ Bank AME:08.05.2026, Bank SO IT:25.07.2026,46th BCS ICT]**

Solution:
