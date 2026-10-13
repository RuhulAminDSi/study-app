# Karnaugh map simplification with circuit diagram, and Nyquist sampling rate

- **Source image:** `23_karnaugh-map-nyquist-sampling.jpg` (original file name `490351138_1232701142192131_6489574111166065346_n.jpg`)
- **Page:** 23 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 564
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- The page opens mid-solution: a 5-row × 16-column binary grid at the top is the tail of the (Karnaugh-map / truth) table belonging to part (a) of the preceding question, which is not visible on this image. Its header row and any column labels are not shown on this page.
- The Boolean expression printed in part (b) and the answer line for it appear with inconsistent overbar placement between the question line and the answer line; both are transcribed exactly as printed. Overbars are shown as `A̅` (A-bar) etc.
- The two Karnaugh maps and the gate-level circuit are figures; their contents (cell values, groupings, gates) are transcribed as tables/text. Grouping loops drawn by hand on the K-maps cannot be reproduced and are described in the transcription note beside each map.
- No handwritten marginalia observed on this page.

## Content

*[Continuation of a binary table from the previous page — 5 rows × 16 columns, no header row visible on this page:]*

| | | | | | | | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 |

**b) Simplify the equation by using K-map: f (A, B, C) =A̅B̅C̅+ A̅BC̅+A̅BC+ABC**

**Answer:** Either of the two Karnaugh maps can be used:

*[Figure — two 3-variable Karnaugh maps side by side, each drawn as a 2×4 grid. Columns are indexed 00, 01, 11, 10 across the top; rows 0 and 1 down the side. Each cell shows a small superscripted minterm index (0–7) and the binary value. Pencil/ink loops mark the groups.]*

**Map 1** — row axis `C`, column axis `AB`:

| C \ AB | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | ⁰ 0 | ² 1 | ⁶ 0 | ⁴ 0 |
| 1 | ¹ 1 | ³ 1 | ⁷ 1 | ⁵ 0 |

*[Grouping loops: one loop enclosing the adjacent 1s at m0–m1–m3–m2 region (the ¹/³ column pair plus the ⁰/² pair as drawn), and a second loop enclosing m1, m3 and m7.]*

**Map 2** — row axis `A`, column axis `BC`:

| A \ BC | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | ⁰ 0 | ¹ 1 | ³ 1 | ² 1 |
| 1 | ⁴ 0 | ⁵ 0 | ⁷ 1 | ⁶ 0 |

*[Grouping loops: a four-cell loop wrapping around the 0/1 columns (m0, m1, m5, m4 positions as drawn), a loop over m1–m3, a loop over m3–m7, and a loop over m2–m3.]*

The function can be represented by the OR of the three resulting terms:

f (A, B, C) = A̅B + A̅C+BC

**c) Draw circuit diagram for the simplified equation by using basic gates. Calculate the number of basic gates required for implementing the simplified circuit.**

**Answer:**

Diagram for the simplified equation by using basic gates:

*[Figure — gate-level logic diagram. Inputs A, B, C at the left; A passes through an inverter (NOT gate) producing A̅. Three 2-input AND gates feed a 3-input OR gate whose output is labelled: F = A̅B + A̅C + BC. The three AND-gate inputs are (A̅, B), (A̅, C) and (B, C) respectively.]*

F = A̅B + A̅C+BC

**2. a) Determine the Nyquist sampling rate and the Nyquist sampling interval for the signal X(t)=sin(2100πt)**

**Related Answer:**

A technique used to record analog information by recording periodic snapshots. If the sampling rate is fast enough, the eye cannot discern the gaps between each snapshot when they are played back. This is the principle behind motion pictures. Sampling is the key technique used to digitize analog information such as sound, photographs, and images.

**Sampling and the Nyquist Theorem**

Nyquist sampling (f) = d/2, where d=the smallest object, or highest frequency. The Nyquist Theorem states that in order to adequately reproduce a signal it should be periodically sampled [cut off]