# Gas-sensor microcontroller signal; PGCB Assistant Engineer 30.09.2021 — SQL trigger, XOR by NAND, cache access time

- **Source image:** `05_gas-sensor-pgcb-trigger-xor-cache.jpg` (original file name `494200940_9672704109511820_2080368400133807799_n.jpg`)
- **Page:** 5 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **274**
- **Paper / Post:** Two papers on this page. Top: end of an earlier paper (not shown, no banner visible above it). Then banner: **PGCB, Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)** — coaching compilation: "COMPACT IT Written" / Previous Exam Questions, COMPACT IT JOB SOLUTION
- **Exam date:** 30.09.2021 (PGCB Assistant Engineer); not shown for the preceding section
- **Marks:** not shown

## Transcription Notes

- The page carries two distinct papers. The code fragment and question 12 at the top belong to the preceding paper (no banner for it appears on this page). The "PGCB, Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)" banner then starts a new paper whose questions 1–3 appear below it. Question numbers therefore restart at 1 mid-page; this is as printed and is preserved.
- The top of the page begins mid-trace (the recursion steps for i = 1 is on the preceding page of the original document, not in this set). Steps for i = 2 onward are present.
- Question 3 is **cut off** at the bottom edge of the page: the printed answer line reads only "The average read access time in nanoseconds" with no number filled in. Marked `[cut off]`.
- **Figures transcribed as text.** (a) The gas-leakage/flame-detection block diagram — blocks "Gas sensor MQ-6" and "Flame Sensor" feeding "Microcontroller Arduino Une", which drives "Buzzer" — rendered as an ASCII flow diagram with its printed caption. (b) The 4-NAND-gate XOR circuit for question 2, with inputs A and B and output Q, rendered as an ASCII gate-level diagram; the original is a gate drawing and cannot be reproduced literally in text, so the wiring described is limited to what is unambiguous on the scan.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected. (Note the printed trigger for question 1 is syntactically incomplete as given on the page — reproduced verbatim.)
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (End of preceding paper — no banner shown)

```text
when i =2 then r=0^arr [2] =1^1 = 0;
when i =3 then r=0^arr [3] =0^0 = 0;
when i =4 then r=0^arr [4] =0^1 = 1;
when i =5 then r=0^arr [5] =1^1 = 0;
when i =6 then r=0^arr [6] =0^0 = 0;
when i =7 then r=0^arr [7] =0^1 = 1;
when i =8, condition false and return r=1; f(arr,8) = 1.
```

So, the output is, 1011.

**12. Which signal a sensor could to send the signal to microcontroller if the sensor finds any gas leakage point?** *[self study]*

**Answer:**

```
                ┌───────────────────┐
                │   Gas sensor      │
                │      MQ-6         │
                └─────────┬─────────┘
                          │
   ┌──────────────┐      ▼      ┌───────────────────────┐     ┌─────────┐
   │ Flame Sensor │ ───────────► │    Microcontroller    │ ──► │ Buzzer  │
   └──────────────┘             │    Arduino Une        │     └─────────┘
                                └───────────────────────┘
```

Relay for Block Diagram of gas leakage and flame detection security system by alarm

---

## PGCB, Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)

**1. Suppose, 'Employee' table (emp_id, emp_name, dept_id, salary) and 'Department' table (dept_id, dept_name, increment_dept). Create a tigger to increment the salary of the employee by 10% whose salary is above 30000.**

**Answer:**

```sql
CREATE TRIGGER New_EMP
ALTER INSERT ON employee
FOR EACH ROW
      UPDATE salary = salary +salary *0.10
WHEN salary > 30000
```

**2. Implement X-OR gate using NAND gate. Maximum 4 NAND gate are using.**

**Answer:**

*[Figure: X-OR built from four NAND gates. Inputs A (top rail) and B (bottom rail); the first NAND takes both A and B as inputs; its output and A feed the second NAND; its output and B feed the third NAND; the outputs of the second and third NANDs feed the fourth NAND whose output is Q. A NAND symbol with a small bubble at each output is shown at all four stages.]*

```
A ──┬──────────────┬─────────►[NAND]──┐
    │              │                    │
    │              └───┐                ▼
    └───►[NAND]──►────┴──►[NAND]──►[NAND]──► Q
B ──┬───► ▲                ▲
    └─────────────────────┘
```

**3. Assume that for a certain processor, a read request takes 50 nanoseconds on a cache miss and 5 nanoseconds on a cache hit. Suppose while running a program, it was observed that 80% of the processor's read requests result in a cache hit. The average read access time in nanoseconds is \_\_\_\_\_\_\_\_\_\_\_\_.**

**Answer:**

The average read access time in nanoseconds `[cut off — page ends; no value printed]`
