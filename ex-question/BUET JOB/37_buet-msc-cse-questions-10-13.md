# BUET Msc in CSE exam continued — question 9 (ERD/schema) and questions 10–13, including a 3-bit timing diagram

- **Source image:** `37_buet-msc-cse-questions-10-13.jpg` (original file name `840380686_4531100543796041_4191829702364727608_n.jpg`)
- **Page:** 37 of 38 (folder-wide position)
- **Paper / Post:** BUET — Post Name: Msc in CSE (header not printed on this page; taken from the paper this page continues)
- **Exam date:** 03.10.2026 (header not printed on this page; taken from the paper this page continues)
- **Marks:** not shown

## Transcription Notes

- **No paper header is printed on this page.** It is the continuation page of the BUET "Msc in CSE" paper whose first page appears on folder page 23 (printed header: BUET, Post Name: Msc in CSE, Exam Date: 03.10.2026) and again on folder page 38. The identification rests on that continuity, stated here rather than presented as printed on this page.
- The page opens mid-question 9, repeating its two entity bullets before the rest of the question — a print artefact of the compilation, reproduced as printed.
- **Q13's timing diagram** cannot be rendered as an image here. Its three traces (A in blue, B in green, C in red) are transcribed as a bit-sequence table. **Caveat:** the scan shows no time-axis labels and no gridline values, so the interval widths were read visually off the waveform shape alone. The counts of high/low runs per trace are reliable; the individual interval widths are approximate. Re-check against the original if exact timings matter.
- No handwriting, ticks or marginalia are visible on this page.
- The translucent coaching watermark is ignored.

## Content

*(Continuation of question 9)*

- Course (c_id, c_name, total_credit)
- Program (prog_no, prog_name)

Assuming a relationship where a Course can be part of multiple Programs, but a Program contains only one Course:
- Draw an ER Diagram (ERD).
- Write the relational Database Schema including primary and foreign keys

---

**10.** In a survey of 500 people, 180 are smokers, 90 have lung cancer, and 54 are both smokers and diagnosed with lung cancer. Determine the probability that a randomly selected smoker has lung cancer.

Determine the probability, P(Lung Cancer | Smoker).

**11.** What is a parameterized algorithm, and how does it improve code reusability and efficiency?

**12.** Which algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph? Which algorithm is used to find the shortest path in a graph containing negative edge weights?

**13.** A 3-bit input (ABC) is given to a combinational logic circuit. The output (D) should be 1 when the number of 1s in the input combination (ABC) is odd; otherwise, (D) should be 0.

Construct the truth table and determine the Boolean expression for the output (D).

*Figure: a timing diagram with three input traces A, B and C (each marked 1/0 at the left), aligned to a common set of dashed vertical gridlines. Traced across the gridlines, the levels read:*

| Trace | Level per gridline interval (left to right) |
|---|---|
| A (blue) | 0, 1, 1, 0, 1, 1, 0, 1, 1, 0 |
| B (green) | 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0 |
| C (red) | 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0 |

*Number of dashed gridlines in the figure: 5 vertical divisions visible across the three traces; no time values are printed on the axis, so the exact clock period per division is not given on this page.*

`[cut off — questions 14 onward are not printed on this page]`
