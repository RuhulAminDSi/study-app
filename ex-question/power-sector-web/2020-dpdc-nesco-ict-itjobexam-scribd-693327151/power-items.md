# Power-sector items in "Previous Question Bank for all IT Job Exam" (itjobexam.com, via Scribd 693327151): DPDC 2020 and NESCO AM (ICT) 2018

- **Source:** Scribd document 693327151, "IT Job Exam Question Bank" — https://www.scribd.com/document/693327151/all-IT-job-examinationl (public preview; text layer saved as `scribd-693327151.txt`, 23 pages). It is a print of the blog post https://www.itjobexam.com/2021/05/Previous-Question-Bank-for-all-IT-job-examination.html (the page header reads "Previous Question Bank for all IT Job Exam").
- **Publisher:** itjobexam.com (topic-wise compilation; each question tagged with its exam in brackets)
- **Pages:** 23 (whole compilation); power-sector items on pages 10, 11, 13, 15, 17–18 and 5
- **Document type:** exam compilation

## Transcription Notes

- Only items tagged with a power or energy organisation are transcribed: 6 tagged "DPDC 2020" and 5 tagged "NESCO AM (ICT) 2018". The other ~300 items belong to bank, BCS, BPSC and ministry exams and are out of scope here.
- The Bangla in this print uses a legacy font and comes out garbled in the text layer (e.g. the DPDC binary-search item). Scribd serves no page raster for those pages, so the garbled words are marked `[garbled]`; the legible English words are kept.
- **Overlap with existing files:** the `DPDC JAM(ICT) 2020` and `NESCO AM(ICT) 2018` keys already hold most of these items via the Bit to Exabyte book (worker-table SQL, A/B resource deadlock, (1AC)16 conversion, Excess-3, Boolean simplification; NESCO subnet /30, SQL insert, power-transmission shortest path). **New here:** the DPDC code-output question *with its code* (the held record says "code not printed in the source"), the DPDC binary-search item, NESCO's E-commerce question and NESCO's Excel A5 question. Records are written only for those 4 new items; the others are listed below for completeness. Status: **partial**.
- The exam keys follow the held ones: `DPDC JAM(ICT) 2020` (the compilation prints only "DPDC 2020") and `NESCO AM(ICT) 2018`. Takers are not printed.

## Content

### DPDC 2020 (items tagged "[DPDC 2020]")

Dhaka Power Distribution Company (DPDC) — post not printed (held key: JAM (ICT)) — 2020 — Exam taker: not printed. Document type: exam compilation.

**4. Data Structure and Algorithm, item 5.** [garbled Bangla] array , array binary search step [garbled Bangla: "…এবং এর … কত … হবে তা বের কর"] time complexity (DPDC 2020]

**10. (Programming) item 10.** After compilation and execution, what will be output in the following code: [DPDC 2020]

```c
int main() {
int i=-3, j=1, k=0, m;
m=++i || ++j && ++k;
 printf("%d,%d,%d, %d", i, j, k, m);
return 0;
```

> No answer printed. (Worked out: `++i` gives −2, which is true, so `||` short-circuits and `++j && ++k` is never evaluated; output `-2,1,0, 1`.)

Already held (not re-recorded): "Simply the following function: ABCD + ĀBD + ABCD" (the overbars are partly lost in this print); "(i) (1AC)16 = (?) and (?)10 (ii) What is the Excess-3 code of 1010?"; "Given a database schema and worker table … (i) distinct name (ii) first three letter of first_name"; "A, B two resources … P1 request A, P2 request B, P1 request B, P2 request A".

### NESCO AM (ICT) 2018 (items tagged "[NESCO AM (ICT) 2018]")

Northern Electricity Supply Company (NESCO) — Assistant Manager (ICT) — 2018 — Exam taker: not printed. Document type: exam compilation.

**E-commerce, item 2.** What is E-Commerce? What are the types of E-commerce? [ NESCO AM (ICT) 2018]

**Office applications, item 5.** In an excel sheet cell A1, A2, A3, A4 contains the value of power generation by four plants. Write a function in A5 to show the average of best three power plants. [NESCO AM (ICT) 2018]

> No answer printed. (One answer: `=(SUM(A1:A4)-MIN(A1:A4))/3`, or `=AVERAGE(LARGE(A1:A4,{1,2,3}))`.)

Already held (not re-recorded): "Draw a graph to find the shortest path to transmit power. (i) Calculates the average cost."; "Write an SQL query to insert a tuple in the table: Employee (ID, Name, Designation, and Salary)."; "Find Network Address, Broadcast Address, Net mask, valid host of the IP: 192.16.13.0/30".
