# Digital Logic Design — K-map grouping and Q47 (BPSC AP, 19.07.2023)

- **Source image:** `04_q47-bpsc-ap-kmap.jpg` (original file name `828890820_4522929101279852_4342841117207701082_n.jpg`)
- **Page:** 4 of 11
- **Paper / Post:** Q47 — BPSC AP (Assistant Professor)
- **Exam date:** 19.07.2023
- **Marks:** not shown

## Transcription Notes

- The first two K-maps belong to a question whose statement is not visible on this image (it begins on the previous printed page).
- Complements are written with prime notation (A′ = A with an overbar); every overbar on this page covers a single letter. The group label under the first K-map is printed as plain "AD" (no overbar), which matches the blue group.
- Coloured cell fills are the coach's grouping marks (map 1: pink cell AB=00/CD=10, blue block AB=11/10 × CD=01/11; map 2: yellow cells AB=10/CD=00 and AB=10/CD=01; Q47: pink corner cells, yellow block AB=01/11 × CD=11/10); blank = no value written.
- The K-map and result under Q47 are the coaching handout's worked solution, not part of the official paper.
- Re-transcribed from the image on 2026-10-08 (fixed: the result under K-map (2) is F = AD + AB′C′ + A′B′CD′ — the earlier version had A′B′C and AB′CD′ with the bars in the wrong places; complements now in prime notation). Both printed results check out against their K-maps.

## Content

### K-map (1) — group label printed below: AD

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  |  | 1 |
| 01 |  |  |  |  |
| 11 |  | 1 | 1 |  |
| 10 | 1 | 1 | 1 |  |

**AD**

### K-map (2)

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 |  |  |  | 1 |
| 01 |  |  |  |  |
| 11 |  | 1 | 1 |  |
| 10 | 1 | 1 | 1 |  |

F = AD + AB′C′ + A′B′CD′

---

**47.** Simplify the following boolean expression using a 4-variable K-map:

F(A,B,C,D) = ∑ m(0,2,6,7,8,10,14,15)

**[BPSC AP : 19.07.2023]**

**Solution:**

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | 1 |  |  | 1 |
| 01 |  |  | 1 | 1 |
| 11 |  |  | 1 | 1 |
| 10 | 1 |  |  | 1 |

F = BC + B′D′