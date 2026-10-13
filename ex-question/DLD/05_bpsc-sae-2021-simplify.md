# Digital Logic Design — BPSC SAE:2021 boolean simplification (algebraic)

- **Source image:** `05_bpsc-sae-2021-simplify.jpg` (original file name `829105748_4522929797946449_887151662985424920_n.jpg`)
- **Page:** 5 of 11
- **Paper / Post:** BPSC SAE (Senior Assistant Engineer?)
- **Exam date:** 2021
- **Marks:** not shown

## Transcription Notes

- Complements are written with prime notation (A′ = A with an overbar; (BC)′ = one bar over both B and C). In the last term of the question and of the first solution line, a single long bar spans "BC" and a separate bar covers D, so it is transcribed A(BC)′D′.
- The lower two-thirds of the page is blank apart from the watermark.
- The worked solution is the coaching handout's own, not part of the official paper.
- Re-transcribed from the image on 2026-10-08 (fixed: first term is AB′CD′ (the earlier version had AB′C′D′), last term is A(BC)′D′ (earlier ABC′D′); complements now in prime notation).
- Reviewer note: the printed answer AB′D′ + A′C′D is right only if the last term is read as AB′C′D′ (separate bars, which the working assumes). As printed, A(BC)′D′ = AB′D′ + AC′D′ also covers minterm 12, and the function (minterms 1, 5, 8, 10, 12) simplifies to AB′D′ + AC′D′ + A′C′D.

## Content

Simplify the boolean Function: AB′CD′ + A′B′C′D + A′BC′D + A(BC)′D′

**[BPSC SAE:2021]**

**Solution:**

```
  AB′CD′ + A′B′C′D + A′BC′D + A(BC)′D′
= AB′D′(C + C′) + A′C′D(B + B′)
= AB′D′ + A′C′D
```
