# Digital Logic Design — Q47 K-map, Q127 (3-variable K-map) and a BPSC SAE:2021 simplification

- **Source image:** `03_q127-3variable-kmap.jpg` (original file name `828783138_4522929704613125_5075084729702219513_n.jpg`)
- **Page:** 3 of 11
- **Paper / Post:** Q127 — 46th BCS CSE; second problem — BPSC SAE:2021. The K-map at the top continues a solution begun on the previous printed page (paper not shown).
- **Exam date:** BPSC SAE:2021
- **Marks:** not shown

## Transcription Notes

- The K-map at the top of the page belongs to a question whose statement is not visible on this image.
- Complements are written with prime notation (A′ = A with an overbar; a bar over several letters would be written (…)′). On this page every overbar covers a single letter.
- In the BPSC SAE:2021 problem, the second line of the printed solution ends in the term `A′BCA′` (bar over the final A) — transcribed exactly as printed; it is a typographical error in the source for the third term `A′BCD′` of the line above.
- Coloured cell fills are the coach's grouping marks (green: the four corner cells; yellow: AB=01/11 × CD=11/10); blank = no value written.
- Everything after each question box is the coaching handout's own worked solution, not part of the official paper.
- Re-transcribed from the image on 2026-10-08 (fixed: all overbars rewritten as primes and checked against the bar extents; BPSC SAE:2021 working line 4 is printed `CD′(A′ + B′)(B + B′)`, and line 5 term `A′CD′`).
- Reviewer note: the BPSC SAE:2021 final result B′C′ + B′D′ + A′CD′ is correct (minterms 0, 1, 2, 6, 8, 9, 10), but two working lines carry typos: line 2's `A′BCA′` should be `A′BCD′`, and line 3's `CD′(B + A′B)` should be `CD′(B′ + A′B)` (from B′CD′ + A′BCD′). Q127 (B′C + AB) and the top K-map (BC + B′D′) are correct.

## Content

### K-map (top of page) — result printed below: F = BC + B′D′

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | 1 |  |  | 1 |
| 01 |  |  | 1 | 1 |
| 11 |  |  | 1 | 1 |
| 10 | 1 |  |  | 1 |

F= BC + B′D′

---

## Simplification

**127.** Simplify the following boolean expression using a 3-variable K-map:

F = A′B′C + AB′C + ABC′ + ABC

**[ 46th BCS CSE]**

**Solution:**

```
F = A′B′C + AB′C + ABC′ + ABC
  = B′C(A + A′) + AB(C + C′)
  = B′C + AB
```

---

Simplify the boolean Function: A′B′C′ + B′CD′ + A′BCD′ + AB′C′

**[BPSC SAE:2021]**

**Solution:**

```
  A′B′C′ + B′CD′ + A′BCD′ + AB′C′
= AB′C′ + A′B′C′ + B′CD′ + A′BCA′
= B′C′(A + A′) + CD′(B + A′B)
= B′C′ + CD′(A′ + B′)(B + B′)
= B′C′ + A′CD′ + B′CD′
= B′(C′ + CD′) + A′CD′
= B′(C′ + D′)(C′ + C) + A′CD′
= B′C′ + B′D′ + A′CD′
```
