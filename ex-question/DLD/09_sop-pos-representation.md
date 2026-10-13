# Digital Logic Design — SOP and POS forms explained, with representation examples

- **Source image:** `09_sop-pos-representation.jpg` (original file name `829462255_4522928941279868_146841100337323061_n.jpg`)
- **Page:** 9 of 11
- **Paper / Post:** not shown (coaching handout: Debug IT Job Solution, "Digital Logic Design", footer "MCQ & Written", printed page 10)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Theory/teaching page, no question numbers and no marks.
- The first line is the tail of the SOP discussion begun on the previous printed page ("Then the terms are connected using OR.").
- The K-map here has no coloured grouping; blank = no value written.

## Content

Then the terms are connected using OR.

**Example:**

F = AB + AC + BC

**Here:**

AB, AC, BC → Product (AND) terms

\+ → Sum (OR)

**Representation of SOP:**

F(A,B,C,D) = ∑m(0,1,2,3,5,6,11,12)

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | 1 | 1 | 1 | 1 |
| 01 |  | 1 |  | 1 |
| 11 | 1 |  |  |  |
| 10 |  |  | 1 |  |

Group 1s → Find constant variables → Write Product terms → OR them

**2. POS = Product of Sums**

In POS form:

OR terms are formed first.

Then the terms are connected using AND.

**Example:**

F = (A + B)(A + C)(B + C)

**Here:**

(A + B), (A + C), (B + C) → Sum (OR) terms

( ) × ( ) → Product (AND)