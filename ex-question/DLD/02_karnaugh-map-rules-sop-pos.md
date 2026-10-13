# Karnaugh Map (K-Map) — rules, 4-variable cell numbering, SOP and POS

- **Source image:** `02_karnaugh-map-rules-sop-pos.jpg` (original file name `828539167_4522928887946540_1242503928036305975_n.jpg`)
- **Page:** 2 of 11
- **Paper / Post:** not shown (coaching handout: Debug IT Job Solution, "Digital Logic Design", footer "MCQ & Written", printed page 9)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- This is a theory/teaching page, not a question. No marks or paper reference appear on it.
- The watermark logo and coaching advertising have been omitted.
- "2ⁿ" in the heading is printed with a superscript n.

## Content

## Karnaugh Map (K-Map)

A Karnaugh Map (K-Map) is a graphical method used to simplify Boolean expressions and minimize digital logic circuits.

**K-Map is used to simplify Boolean expressions in order to:**

- Use fewer logic gates
- Reduce circuit complexity
- Reduce cost and power consumption
- Improve circuit speed and efficiency

**Important rules: 2ⁿ**

- Group size must be 1, 2, 4, 8...
- Make the largest possible groups.
- Groups must contain adjacent cells.
- Diagonal cells are not adjacent.
- First and last columns can be adjacent (wrap-around).
- A 1 can be included in more than one group if it helps simplify the expression.
- For SOP, group the 1s.
- For POS, group the 0s.

**Cell Numbered 4-Variable K-Map**

| AB\CD | 00 | 01 | 11 | 10 |
| --- | --- | --- | --- | --- |
| 00 | m0 | m1 | m3 | m2 |
| 01 | m4 | m5 | m7 | m6 |
| 11 | m12 | m13 | m15 | m14 |
| 10 | m8 | m9 | m11 | m10 |

## SOP and POS in K-Map

**1. SOP = Sum of Products**

In SOP form:

AND terms are formed first.