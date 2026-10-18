# COMPACT IT Recent Question Bank (Written) — Clocked J-K and D Flip-Flops, truth table of (A⊕B) ∨ (¬A) ∨ (¬C), 2-input multiplexer (Q d, Q e)

- **Source image:** `11_flip-flops-truth-table-multiplexer.jpg` (original file name `487511930_775600641482263_7860186032325501309_n.jpg`)
- **Page:** 11 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 5 for each of (d), (e)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Parts (d) and (e) have no parent question number visible on this page.
- The truth-table rows and the multiplexer logic circuit are printed as graphics; both are reproduced as tables/ascii description of what is shown.
- The question line reads `(A⊕B) ∨ (¬A) ∨ (¬C)`; the printed table uses `X` for A⊕B and heads its last column `X ∨ (¬A) ∨ (¬C)`. Transcribed as printed in both places.
- No handwritten marginalia on this page.
- Reviewer note: the printed X (= A⊕B) column is wrong in three rows — A=T,B=T,C=F should be F (printed T), A=T,B=F,C=F should be T (printed F) and A=F,B=T,C=F should be T (printed F); the correct X column is F, F, T, T, T, T, F, F. The final column (F, T, T, T, T, T, T, T) is nevertheless correct.
- Re-transcribed from the image on 2026-10-08 (fixed: X column of the truth table — row F,T,F now reads X = F as printed, not T; rest of the page checked against the image and unchanged).

## Content

*[Continuation — tail of a flip-flop sub-part answer]*

- **Clocked J-K Flip-Flop:** J-K flip-flops require both the J and K inputs to operate properly. They have more functionality than D flip-flops because they can be used for toggling, setting, or resetting operations.
- **Clocked D Flip-Flop:** D flip-flops require only the D input to operate properly. They are simpler in terms of functionality compared to J-K flip-flops but are widely used for basic storage or delay applications due to their simplicity.

**(d) Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C).** — **5**

**Answer:** Here's the truth table for the expression:

| A | B | C | X | (¬A) | (¬C) | X ∨ (¬A) ∨ (¬C) |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | T | F | F | F | F |
| T | T | F | T | F | T | T |
| T | F | T | T | F | F | T |
| T | F | F | F | F | T | T |
| F | T | T | T | T | F | T |
| F | T | F | F | T | T | T |
| F | F | T | F | T | F | T |
| F | F | F | F | T | T | T |

**(e) Draw the logic circuit of two input multiplexer. Compare between multiplexer and demultiplexer.** — **5**

**Answer:**

*[Logic circuit diagram, as printed]*

- Inputs labelled `A₀` and `A₁`.
- `S` (Select input S) feeds a NOT gate; `A₀` and NOT(S) feed the first AND gate; `A₁` and S feed the second AND gate.
- Both AND outputs feed a single OR gate.
- OR gate output labelled: `Y = A₀ S' + A₁ S`

| Multiplexer | Demultiplexer |
| --- | --- |
| Multiplexer processes the digital information from various sources into a single source. | Demultiplexer receives digital information from a single source and converts it into several sources |
| It is known as Data Selector | It is known as Data Distributor |
| Multiplexer is a digital switch | Demultiplexer is a digital circuit |
| It follows combinational logic type | It also follows combinational logic type |
| It has 2n input data lines | It has single input line |
| It has a single output data line | It has 2n output data lines |
