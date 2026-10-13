# Written/MCQ question sheet, items 10–14 (algorithms, boolean circuit, network topology)

- **Source image:** `01_buet-msc-questions-10-14.jpg` (original file name `833413767_4527643134141782_8326381131922110225_n.jpg`)
- **Page:** 1 of 2
- **Paper / Post:** not shown
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Coaching brand printed in the page footer: **Debug IT Job Solution**. Footer also reads `MCQ & Written` and `Page|24`, indicating this is page 24 of the original paper; the footer itself is a repeated page footer and is not part of the paper content.
- This page is a continuation: it begins at question **10**, so questions 1–9 are on an earlier page not supplied here.
- The page is laid out as a two-column table (number column + question column). No marks column is visible for any item.
- **Question 13** is supplied as a *timing diagram figure*, not as a table. The waveform values below were read off the dashed vertical grid lines; where a transition does not sit cleanly on a grid line the reading is approximate. Marked accordingly rather than invented.
- **Question 14** is supplied as a *network topology figure*. All text labels printed inside the figure are transcribed verbatim; the figure itself is reproduced as a table because the drawing cannot be rendered in plain text.
- No handwriting, ticks, circled options, or other marginalia are present on this scan. Any such marks would not be part of the official paper.

## Content

### 10.

In a survey of 500 people, 180 are smokers, 90 have lung cancer, and 54 are both smokers and diagnosed with lung cancer. Determine the probability that a randomly selected smoker has lung cancer.

Determine the probability, P(Lung Cancer | Smoker).

### 11.

What is a parameterized algorithm, and how does it improve code reusability and efficiency?

### 12.

Which algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph? Which algorithm is used to find the shortest path in a graph containing negative edge weights?

### 13.

A 3-bit input (ABC) is given to a combinational logic circuit. The output (D) should be 1 when the number of 1s in the input combination (ABC) is odd; otherwise, (D) should be 0.

Construct the truth table and determine the Boolean expression for the output (D).

*Figure — timing diagram, three input waveforms A, B, C (values read across the dashed vertical grid lines; left-most and right-most partial segments included as printed):*

| Waveform | seg 1 | seg 2 | seg 3 | seg 4 | seg 5 | seg 6 | seg 7 | seg 8 |
|---|---|---|---|---|---|---|---|---|
| A | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 |
| B | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| C | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |

### 14.

Networking Related Math: (just figure is given)

*Figure — network topology. Labels transcribed verbatim:*

| Device | Labels |
|---|---|
| ROUTER (device caption `ROUTER`, instance name `Router_1`) | G0/0, G0/1; `network/Internet via G0/0: 10.0.0.1/30` |
| SWITCH 1 (`Switch_1`) | IP: 192.168.10.254; MAC: 00:1A:2B:3C:4D:5E |
| SWITCH 2 (`Switch_2`) | IP: 192.168.20.254; MAC: 00:5F:4E:3D:2C:1B |
| PC 1 | IP: 192.168.10.11/24; MAC: 00:A1:B2:C3:D4:E5 |
| PC 2 | IP: 192.168.10.12/24; MAC: 00:F6:E5:D4:C3:B2 |
| PC 3 | IP: 192.168.20.11/24; MAC: 00:7E:6F:5E:4D:3C |
| PC 4 | IP: 192.168.20.12/24; MAC: 00:D9:C8:B7:A6:95 |

*Port labels on the links as printed:*

| Link | Port labels (left end, right end) |
|---|---|
| ROUTER — SWITCH 1 | G0/1 : 192.168.10.1/24 ; Fa0/1 |
| ROUTER — SWITCH 2 | G0/2: 192.168.20.1/24 ; G0/2 |
| SWITCH 1 — PC 1 | Fa0/1 |
| SWITCH 1 — PC 2 | Fa0/2 |
| SWITCH 2 — PC 3 | Fa0/1 |
| SWITCH 2 — PC 4 | Fa0/1 |