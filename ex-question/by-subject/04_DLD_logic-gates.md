# Logic Gates — merged revision set (categorized + tagged)

Every **logic-gate** question found anywhere in `ex-question/` — pulled from all eight photographed folders plus
the two top-level exam sheets — sorted by gate sub-topic and tagged. This is the gate-only view of the DLD bank:
the full DLD set (K-map, Boolean simplification, SOP/POS, flip-flops) stays in [04_DLD.md](04_DLD.md), and this
file cross-references those entries instead of repeating them.

- **Items merged:** 31 from **8 photographed folders** plus 2 exam-root sheets at the top level
  (BCS 14 · BUET JOB 4 · Network 4 · PETROBANGLA 2 · VIVA 2 · BUET MSC 1 · BANK 1 · PDF-TEXT 1 · exam-root 2)
- **By form:** Written 17 · MCQ 8 · Viva 2 · Theory 3 · Worked example 1
- **Distinct papers:** 16 (7 items carry no paper attribution)
- **Already in [04_DLD.md](04_DLD.md):** 24 · **Newly merged here from other subjects:** 7
- **Corrections to printed answers:** 5 (Q0035, Q0014, Q0455, Q0465, Q0909)

### Tag legend

| Tag | Meaning |
|---|---|
| `#gate-and` `#gate-or` `#gate-not` `#gate-nand` `#gate-nor` `#gate-xor` `#gate-xnor` | the gate(s) the question turns on |
| `#truth-table` | a truth table must be built, read or completed |
| `#universal` | universal-gate definition or NAND/NOR-only construction |
| `#adder` `#mux` `#parity` `#encoder` `#pla` `#sequential` | gate-built block |
| `#mcq` `#written` `#viva` `#theory` `#example` | question form |
| `#1mark` `#5marks` | printed mark value |
| `#folder-BCS` … | folder the page came from (`#exam-root` for the top-level exam sheets) |
| `#high-yield` | repeated across papers, or asked as a full written part |
| `#correction` | the printed answer is wrong or incomplete |

---

## Part 1 — Core reference (theory, not extracted)

This part is the revision scaffold the extracted questions hang on. Items **not** drawn from a sheet are marked
as such, so nothing here is passed off as an exam fact it isn't.

### The seven gates

| Gate | Symbol | Boolean | Y = 1 when | Also called |
|---|---|---|---|---|
| AND | · | Y = A·B | **all** inputs are 1 | conjunction |
| OR | + | Y = A + B | **at least one** input is 1 | disjunction, inclusive OR |
| NOT | —○— | Y = A′ | the input is 0 | inverter, complement |
| NAND | —&○— | Y = (A·B)′ | not all inputs are 1 | — |
| NOR | —≥1○— | Y = (A + B)′ | all inputs are 0 | — |
| XOR | —≥1— | Y = A⊕B | inputs **differ** (odd parity) | **anticoincidence**, exclusive OR |
| XNOR | —=1— | Y = (A⊕B)′ | inputs **agree** (even parity) | coincidence |

### 2-input truth tables (memorise all three)

| A | B | A·B | A+B | A′ | (A·B)′ | (A+B)′ | A⊕B | (A⊕B)′ |
|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |

**Counting rules.** n inputs → 2ⁿ rows. n variables → 2^(2ⁿ) distinct Boolean functions (n = 2 → 4 rows,
16 possible functions). Write the input columns in binary-counting order (00, 01, 10, 11) so you cannot miss a row.

**NAND and NOR are the only universal gates.** Every other gate is built from them, which is why
"NAND-only implementation" and "XOR using NAND" are asked as full written parts.

**De Morgan (two rules, memorise as a pair).** A bubble on a wire = NOT; move it to the other side of the
connection and the shape flips AND ↔ OR.
- (A · B)′ = A′ + B′ — a bubbled AND becomes an OR of complements
- (A + B)′ = A′ · B′ — a bubbled OR becomes an AND of complements

**Modulo-2 (GF(2)).** Addition and subtraction are the *same* operation — both are XOR, since 1+1 = 0 and 1−1 = 0.
Multiplication is **AND**, not XOR, which is exactly why "addition & multiplication give the same result" is a
wrong option and "subtraction & addition" is the right one.

### Gate-built blocks

| Block | Function | Gate count |
|---|---|---|
| Half adder | Sum = A⊕B, Cout = A·B | 1 XOR + 1 AND |
| Full adder | Sum = A⊕B⊕Cin, Cout = A·B + Cin·(A⊕B) | 2 XOR + 2 AND + 1 OR |
| 2-input MUX | Y = A₀·S′ + A₁·S | 1 NOT + 2 AND + 1 OR = **4** |
| n-input MUX | 2ⁿ data in, 1 out, n select lines | ⌈log₂ 2ⁿ⌉ select |
| Encoder | 2ⁿ in → n out (10 in → 4 out) | — |
| Decoder | n in → 2ⁿ out | — |

**Adder trap.** A **half** adder adds two bits and has no carry-in. A **full** adder adds three bits
(A, B, Cin) and produces Sum *and* Carry-out. "Adds two bits and outputs a carry" is the **half** adder — it is
the single most common viva slip in this set.

### TTL 74xx gate ICs (reference)

| IC | Function | IC | Function |
|---|---|---|---|
| 7400 | quad 2-input NAND | 7432 | quad 2-input OR |
| 7402 | quad 2-input NOR | 7404 | hex inverter |
| 7408 | quad 2-input AND | 7486 | quad 2-input XOR |

### Memory tricks

- **"Anticoincidence = XOR"** — the outputs *coincide* when inputs agree, so XOR's 1 is exactly when they
  **don't** agree. XNOR is the coincidence gate.
- **Parity = XOR.** Odd parity of 3 bits is just A⊕B⊕C; each extra bit chains one more ⊕.
- **Gate counting:** count the *shape* changes, not the wires. `ĀB + ĀC + BC` = 1 inverter + 3 AND + 1 OR = 5.
- **Hamming:** r parity bits for m data bits when **2^r ≥ m + r + 1**; they sit at positions **1, 2, 4, 8, 16…**.

### Exam traps seen in this set

1. Encoder/decoder reversed — **2ⁿ inputs → n outputs**, not n → 2ⁿ.
2. A printed "correct" answer can be wrong in the *intermediate* step while the final column is right (Q0014).
3. Unanswered written parts are common; the expected answer is still worth writing out in full.
4. Even parity on a word with an odd number of 1s **needs** the bit added — received `10110` has three 1s (Q0909).

---

## Part 2 — Merged questions by sub-topic

### A. Fundamentals and logic levels

#### Q1 <sub>Q0056</sub>

*Bangladesh Water Development Board Assistant Programmer Written · Assistant Programmer · 2018 · Written*

Why is binary logic used for digital systems?

- **Printed answer:** Transistors have two states (on/off), so 0/1 maps directly onto the hardware.
- **Tags:** `#gate-not` `#written` `#folder-BCS`
- **Source:** [BCS/18_database-security-osi-binary-logic.md](../BCS/18_database-security-osi-binary-logic.md) · [image](../BCS/18_database-security-osi-binary-logic.jpg)

#### Q94 <sub>Q0154</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Basic difference between combinational and sequential circuits lies in: (feedback used / logic gates used / inputs / none)

- **Printed answer:** (ক) Feedback (memory) used
- **Tags:** `#sequential` `#mcq` `#1mark` `#folder-BCS` `#high-yield`
- **Source:** [BCS/42_gmsk-am-bandwidth-feedback-circuits.md](../BCS/42_gmsk-am-bandwidth-feedback-circuits.md) · [image](../BCS/42_gmsk-am-bandwidth-feedback-circuits.jpg)

> The answer is *feedback*, not "logic gates". A combinational circuit is pure gate logic; a sequential circuit
> feeds output back into the input. This distinction is the hinge between Part 2 G and Part 2 I.

### B. Basic gates and gate counting

#### Q1(c) <sub>Q0035</sub>

*38th BCS Written · 2018 · Written*

Draw the circuit for the simplified equation (F = ĀB + ĀC + BC) using basic gates and calculate the number of basic gates required.

- **Printed answer:** Circuit: NOT on A, three 2-input AND gates (ĀB, ĀC, BC) into one 3-input OR.
- **Note:** The gate count the question asks for is never stated. It is **5 gates**: 1 NOT, 3 AND and 1 OR.
- **Tags:** `#gate-and` `#gate-or` `#gate-not` `#written` `#folder-BCS` `#correction`
- **Source:** [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)

> The page carries a gate-level figure (A, B, C at the left; A through an inverter; three 2-input ANDs into one
> 3-input OR). Read the count off the diagram: 1 + 3 + 1 = 5.

#### Q2 <sub>Q0862</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · Assistant General Manager (ICT) · 2023-01-20 · Written*

For the given circuit (A,B → AB and NOT(A+B) → combined and inverted), find the function and the inputs for which the output is 1.

- **Printed answer:** F = NOT(AB + NOT(A+B)) = A'B + AB' = A XOR B (output 1 for 01 and 10)
- **Tags:** `#gate-xor` `#gate-not` `#truth-table` `#written` `#folder-PETROBANGLA` `#high-yield`
- **Source:** [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg)

> Worked through: NOT(A+B) = A′B′, so F = (AB + A′B′)′ = (AB)′(A′B′)′ = (A′+B′)(A+B) = **A′B + AB′**.
> Two AND/OR/NOR blocks plus an output inverter reconstruct XOR from basic gates alone.

### C. Universal gates

#### Q28(a) <sub>Q0029</sub>

*45th BCS Written Technical Cadre (ICT-281) · 2024-01-31 · Written*

What are universal gates? Implement F = AB + CD + E using NAND gates only.

- **Note:** Answer continues on printed page 292, which is not in this batch. Expected: F = NAND(NAND(A,B), NAND(C,D), NAND(E,E)), which uses **4 NAND gates**.
- **Tags:** `#gate-nand` `#universal` `#written` `#folder-BCS` `#high-yield`
- **Source:** [BCS/06_45th-bcs-physics-logic-questions.md](../BCS/06_45th-bcs-physics-logic-questions.md) · [image](../BCS/06_45th-bcs-physics-logic-questions.jpg)

> The trick: **NAND(A,A) = A′**, and double inversion cancels, so an OR of three product terms collapses into
> one 3-input NAND. E is passed through as NAND(E,E) to feed the final gate.

#### Q4 (part 1) <sub>Q0922</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Assistant Programmer · Written*

What is a universal gate? Prove that NAND is a universal gate.

- **Tags:** `#gate-nand` `#universal` `#written` `#exam-root` `#high-yield`
- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

> Proof skeleton, because this part is never answered on the sheet: NOT(A) = NAND(A,A). AND(A,B) = NAND(NAND(A,B),
> NAND(A,B)). OR(A,B) = NAND(NAND(A,A), NAND(B,B)). With NOT, AND and OR all available, any Boolean function is
> buildable — hence *universal*. Swap the shape to get NOR-only equivalents.

### D. XOR / XNOR, modulo-2 and anticoincidence

#### MCQ (number not shown) <sub>Q0058</sub>

*paper not shown · MCQ*

Which gate is known as the 'anticoincidence' gate? (Stem and options are on a preceding page; only the explanation tail is visible.)

- **Printed answer:** XOR: the output is HIGH only when the inputs differ.
- **Tags:** `#gate-xor` `#mcq` `#folder-BCS` `#high-yield`
- **Source:** [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)

#### Q49 <sub>Q0111</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which gate is known as the "anticoincidence" gate? (NOR / XNOR / XOR / OR)

- **Printed answer:** (গ) XOR (explanation not on these pages)
- **Tags:** `#gate-xor` `#mcq` `#1mark` `#folder-BCS` `#high-yield`
- **Source:** [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)

> The same one-line MCQ appears on **three separate sheets** in this set (Q0058, Q0111 and the Bangla version on
> the same page as Q0111). Treat "anticoincidence = XOR" as guaranteed recall.

#### MCQ 35 <sub>Q0068</sub>

*paper not shown · MCQ*

In a modulo-2 operation, ____ give the same result: (a) addition & division (b) addition & multiplication (c) multiplication & division (d) subtraction & addition.

- **Note:** The answer is not printed on this page. The correct answer is **(d) subtraction & addition**, since both are XOR.
- **Tags:** `#gate-xor` `#mcq` `#folder-BCS` `#high-yield`
- **Source:** [BCS/32_8086-reset-thrashing-mov-modulo-2.md](../BCS/32_8086-reset-thrashing-mov-modulo-2.md) · [image](../BCS/32_8086-reset-thrashing-mov-modulo-2.jpg)

#### MCQ (number not shown, precedes Q36) <sub>Q0097</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Question text not on these pages; the surviving answer concerns which operations are identical in modulo-2 arithmetic (both reduce to XOR).

- **Printed answer:** (ঘ) Subtraction & addition — both equal XOR in modulo-2
- **Tags:** `#gate-xor` `#mcq` `#1mark` `#folder-BCS` `#high-yield`
- **Source:** [BCS/63_pure-virtual-ai-techniques-rlc.md](../BCS/63_pure-virtual-ai-techniques-rlc.md) · [image](../BCS/63_pure-virtual-ai-techniques-rlc.jpg)

> Q0068 and Q0097 are the same question from two different papers — a clean signal that modulo-2 = XOR is
> repeatedly tested.

#### Q2 <sub>Q0185</sub>

*PGCB Assistant Engineer (CSE) (BUET) · Assistant Engineer (CSE) · 2021-09-30 · Written*

Implement an XOR gate using at most 4 NAND gates.

- **Printed answer:** Standard 4-NAND XOR: N1=NAND(A,B), N2=NAND(A,N1), N3=NAND(B,N1), Q=NAND(N2,N3).
- **Tags:** `#gate-nand` `#gate-xor` `#universal` `#written` `#folder-BUET-JOB` `#high-yield`
- **Source:** [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)

> Why 4 is the minimum: with only the 4-NAND block you reuse the shared inversion N1 = (AB)′ to feed both
> second-stage NANDs. The page's figure shows exactly this — A on the top rail, B on the bottom rail, both
> feeding the first NAND.

### E. Truth tables

#### Q20(d) <sub>Q0014</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C).

- **Printed answer:** Result is F only for A=B=C=T, T for all other rows (with an intermediate X = A⊕B column).
- **Correction:** The final column is right, but the intermediate X = A⊕B column is wrong in three rows: (T,T,F) should be F, (T,F,F) should be T and (F,T,F) should be T.
- **Tags:** `#gate-xor` `#gate-or` `#truth-table` `#written` `#5marks` `#folder-BCS` `#high-yield` `#correction`
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)

> Verified: with X = A⊕B, the only zero row is A=B=C=1. Always re-check the **intermediate** column even when the
> printed final column looks plausible — this is the only item in the set where the answer is half-right.

#### Q1(a) <sub>Q0033</sub>

*38th BCS Written · 2018 · Written*

Draw a truth table for Y = A·B̄·C·D̄ + A·B·C̄̄ + Ā·B·D + A·B̄̄·C·D (double bars as printed, i.e. Y = AB̄CD̄ + ABC + ĀBD + ABCD).

- **Printed answer:** Y = 1 for ABCD = 0101, 0111, 1010, 1110, 1111 (minterms 5, 7, 10, 14, 15).
- **Tags:** `#gate-and` `#truth-table` `#written` `#folder-BCS` `#high-yield`
- **Source:** [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg); [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)

> The double bars in the printed stem are scan noise for a single bar. Only 12 of the 16 rows are visible on
> the page (the table is cut off at the bottom edge), so the minterm list is the reliable part.

#### Q13 <sub>Q0279</sub>

*BUET MSc in CSE · MSc in CSE · 2026-10-03 · Written*

3-bit input ABC; D = 1 when the number of 1s is odd. Give the truth table and Boolean expression (a timing diagram of A, B, C is given).

- **Note:** No answer printed. **D = A ⊕ B ⊕ C** (minterms 1, 2, 4, 7).
- **Tags:** `#gate-xor` `#truth-table` `#parity` `#written` `#folder-BUET-MSC` `#folder-BUET-JOB` `#high-yield`
- **Source:** [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)

> Pure parity play: 1, 2 and 4 are the minterms where an odd number of bits are set. Three-input odd parity **is**
> a 3-input XOR — chain them.

### F. Adders

#### Q97 <sub>Q0157</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

If x, y, z are full-adder inputs, the carry-out expression is: (x̄y + x̄z + yz / x + y + z / xy + xz + yz / xy + xz + yz [printed twice])

- **Printed answer:** (গ) Cout = xy + xz + yz
- **Tags:** `#adder` `#gate-or` `#gate-and` `#mcq` `#1mark` `#folder-BCS` `#high-yield`
- **Source:** [BCS/36_full-adder-superposition-decision-tree.md](../BCS/36_full-adder-superposition-decision-tree.md) · [image](../BCS/36_full-adder-superposition-decision-tree.jpg)

> Cout is 1 whenever **any two** of the three inputs are 1 — that is exactly the pairwise OR: xy + xz + yz.
> Sum is the odd-parity XOR: x⊕y⊕z.

#### Q2 (candidate 1) <sub>Q0455</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What are a half adder and a full adder?

- **Printed answer:** Full adder: a logic circuit that adds two bits and outputs a carry bit (half adder answer given in an earlier viva)
- **Correction:** That describes a half adder. A **full adder adds three bits** (A, B, Cin) giving **Sum = A⊕B⊕Cin** and **Cout = AB + Cin(A⊕B)**. The half adder is Sum = A⊕B, Cout = AB.
- **Tags:** `#adder` `#gate-xor` `#viva` `#folder-VIVA` `#correction`
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

> Say both out loud in the viva: *half = two bits, no carry-in; full = three bits, carry-in and carry-out.*

### G. Data selectors, converters and PLAs

#### Q20(e) <sub>Q0015</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Draw the logic circuit of a two-input multiplexer. Compare multiplexer and demultiplexer.

- **Printed answer:** Y = A0·S' + A1·S (NOT, 2 AND, 1 OR); MUX = data selector with many inputs and 1 output, DEMUX = data distributor with 1 input and many outputs.
- **Tags:** `#mux` `#gate-and` `#gate-or` `#gate-not` `#written` `#5marks` `#folder-BCS` `#high-yield`
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg); [BCS/09_bfs-dfs-and-linked-list.md](../BCS/09_bfs-dfs-and-linked-list.md) · [image](../BCS/09_bfs-dfs-and-linked-list.jpg)

> This is a **De Morgan question in disguise**: complement the select line, AND it with each data input, then OR.
> Gate count = 1 NOT + 2 AND + 1 OR = **4**.

#### Q5 (candidate 2) <sub>Q0465</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

How many outputs does an encoder with 10 inputs have?

- **Printed answer:** Outputs = 2^n, so 2^10 = 1024
- **Correction:** Wrong (that is decoder logic, and reversed). An encoder with 2^n inputs has n outputs; 10 inputs (decimal-to-BCD) need **⌈log₂ 10⌉ = 4 outputs**.
- **Tags:** `#encoder` `#viva` `#folder-VIVA` `#correction`
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

> Memory hook: **encoder compresses** (many → few), **decoder expands** (few → many). The printed answer is a
> decoder with the direction flipped — the classic viva trap.

#### Q66 <sub>Q0126</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A programmable logic array is mainly used for: (custom sequential circuits / memory / custom combinational circuits / fixed logic)

- **Printed answer:** (গ) Custom combinational circuits
- **Tags:** `#pla` `#written` `#mcq` `#1mark` `#folder-BCS`
- **Source:** [BCS/62_pla-power-factor-set-intersection.md](../BCS/62_pla-power-factor-set-intersection.md) · [image](../BCS/62_pla-power-factor-set-intersection.jpg)

> A PLA replaces a fixed gate network with a user-programmable AND–OR array: **no feedback ⇒ combinational**.
> Remember a PLA has both planes programmable; a PROM has a fixed AND plane; a PAL has a fixed OR plane.

### H. Parity and Hamming codes (merged from Computer Networking)

These are **XOR/parity logic in the error-control role**. They sit under NET in the by-subject split, so they
were previously invisible from the DLD side — this is one of the seven items newly merged here.

#### 14. Hamming Code <sub>Q0374</sub>

*paper not shown · Theory*

Hamming code adds parity bits at chosen positions to detect and correct single-bit errors; extended Hamming (SEC-DED) also detects double-bit errors.

- **Tags:** `#parity` `#gate-xor` `#theory` `#folder-Network`
- **Source:** [Network/06_hamming-code.md](../Network/06_hamming-code.md) · [image](../Network/06_hamming-code.jpg)

#### 15. Position of Hamming Parity Bits <sub>Q0375</sub>

*paper not shown · Theory*

Parity bits sit at power-of-2 positions 1, 2, 4, 8, 16...; 7-bit code layout P1 P2 D1 P4 D2 D3 D4.

- **Tags:** `#parity` `#gate-xor` `#theory` `#folder-Network`
- **Source:** [Network/06_hamming-code.md](../Network/06_hamming-code.md) · [image](../Network/06_hamming-code.jpg)

#### 16. Number of Parity Bits in Hamming Code <sub>Q0376</sub>

*paper not shown · Theory*

Number of parity bits r for m data bits satisfies 2^r >= m + r + 1.

- **Tags:** `#parity` `#theory` `#folder-Network`
- **Source:** [Network/06_hamming-code.md](../Network/06_hamming-code.md) · [image](../Network/06_hamming-code.jpg)

#### Example: 4 data bits <sub>Q0377</sub>

*paper not shown · Worked example*

How many parity bits does a Hamming code need for 4 data bits, and what is the code length?

- **Printed answer:** r = 3 (2^3 = 8 >= 4+3+1); 7-bit Hamming code
- **Tags:** `#parity` `#example` `#folder-Network`
- **Source:** [Network/06_hamming-code.md](../Network/06_hamming-code.md) · [image](../Network/06_hamming-code.jpg)

> Check r = 2: 2² = 4 ≥ 4+2+1 = 7? No. r = 3: 8 ≥ 8? Yes. So r = 3 and code length = m + r = 7.
> Each parity bit is itself an **XOR** of the data bits it covers.

#### Q2 <sub>Q0909</sub>

*Bangladesh Bank Assistant Maintenance Engineer (BIBM) · Assistant Maintenance Engineer · 2023-02-04 · Written*

Explain the parity method for error detection and write down the bit strings of "Delta" using ASCII.

- **Printed answer:** Even-parity example 1011 → 10111; Delta = 01000100 01100101 01101100 01110100 01100001
- **Note:** Example error: received 10110 has three 1s (odd), so even parity flags an error; the book says two 1s / error-free. Codes listed as '68 65 6C 74 61' and called decimal mix decimal and hex (decimal 68 101 108 116 97; hex 44 65 6C 74 61). The bit strings themselves are correct.
- **Tags:** `#parity` `#gate-xor` `#written` `#folder-BANK` `#correction`
- **Source:** [BANK/01_parity-method-and-delta-ascii.md](../BANK/01_parity-method-and-delta-ascii.md) · [image](../BANK/01_parity-method-and-delta-ascii.jpg); [BANK/07_delta-ascii-tv-rate-packetization.md](../BANK/07_delta-ascii-tv-rate-packetization.md) · [image](../BANK/07_delta-ascii-tv-rate-packetization.jpg)

> **Parity = XOR of all bits.** Even parity wants XOR = 0, odd parity wants XOR = 1.
> Worked: 1011 → three 1s (odd) → append 1 → **10111** (now four, even). Received 10110 → three 1s → odd
> → **error flagged**; the book's "two 1s" is a miscount.
> ASCII "Delta" verified: D=01000100, e=01100101, l=01101100, t=01110100, a=01100001.

### I. Gate-adjacent sequential logic (flip-flops, counters, FSM)

These need the gate vocabulary from Part 1 A/B but add memory; full items live in [04_DLD.md](04_DLD.md).

#### Q20(c) <sub>Q0013</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written*

Flip-flop sub-part (stem on missing printed page 273); visible tail compares clocked J-K and clocked D flip-flops.

- **Printed answer:** JK needs J and K inputs and can set/reset/toggle; D needs only D and is used for storage/delay.
- **Tags:** `#sequential` `#gate-and` `#written` `#5marks` `#folder-BCS`
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)

#### Q57 <sub>Q0117</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Number of states in a 4-bit BCD ripple counter? (4 / 10 / 16 / 5)

- **Printed answer:** (খ) 10
- **Tags:** `#sequential` `#mcq` `#1mark` `#folder-BCS`
- **Source:** [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg)

> BCD counts **0–9**, so a "4-bit" BCD counter is a trap: 4 bits would allow 16 states, but BCD only uses 10.

#### Q4(a) <sub>Q0472</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, clock period 5 s. Minimum number of flip-flops?

- **Printed answer:** 14 + 1 + 15 = 30 states; 2^5 = 32 >= 30, so 5 flip-flops.
- **Tags:** `#sequential` `#written` `#folder-PDF-TEXT` `#high-yield`
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

#### Q4(a) <sub>Q0233</sub>

*Petrobangla Assistant Manager (CSE) (BUET) · 2024-05-31 · Written*

A traffic light cycles GREEN 70 s, YELLOW 5 s, RED 75 s, driven only by a 5 s clock. Minimum number of flip-flops for the FSM?

- **Note:** No answer printed. 150 s / 5 s = 30 states → ⌈log₂ 30⌉ = **5 flip-flops**.
- **Tags:** `#sequential` `#written` `#folder-BUET-JOB`
- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

#### Q4(a) <sub>Q0891</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, only input a 5-second clock. Minimum number of flip-flops?

- **Tags:** `#sequential` `#written` `#folder-PETROBANGLA`
- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

> Three papers, one question (Q0472, Q0233, Q0891). The recurring method is: **total seconds ÷ clock period =
> states**, then **⌈log₂ states⌉ = flip-flops**. 150/5 = 30 → 5 flip-flops.

### J. Boolean / XOR usage outside DLD (weak fit — listed for completeness)

#### Unnumbered (before Q12) <sub>Q0182</sub>

*paper not shown · Written*

Trace a recursive C function f(arr, i) that XORs array elements (r ^ arr[i]) for i up to 8; the code and array are on a page not in the set.

- **Printed answer:** Output 1011.
- **Tags:** `#gate-xor` `#written` `#folder-BUET-JOB` `#weak-fit`
- **Source:** [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)

> XOR here is the **C operator**, not a gate. Filed under DLD's sibling SPL subject; keep it only as a reminder
> that XOR folds to a *parity bit* of the array.

#### Q4 <sub>Q0947</sub>

*ICB Securities Trading Company Limited Assistant Programmer · Assistant Programmer · 2026-06-27 · Written*

For a given propositional expression (not reproduced), decide whether it is a tautology, contradiction or contingency using a truth table.

- **Tags:** `#truth-table` `#written` `#exam-root` `#weak-fit`
- **Source:** [Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.md) · [image](../Exam_ICB_Securities_Assistant_Programmer_2026-06-27.jpg)

> Same skill as Part 2 E — build the truth table, then read off whether any row is all-1 (tautology),
> all-0 (contradiction), or mixed (contingency). Filed under Discrete Mathematics.

---

## Part 3 — Index by paper

| Paper | Date | Gate items | Forms |
|---|---|---|---|
| *(paper not shown)* | — | 7 (Q0058, Q0068, Q0182, Q0374–Q0377) | MCQ 2 · Theory 3 · Written 1 · Example 1 |
| 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) | 2025 | 6 (Q0097, Q0111, Q0117, Q0126, Q0154, Q0157) | MCQ, all 1 mark |
| 45th BCS Written (CSE-971) | 2024-01-31 | 3 (Q0013, Q0014, Q0015) | Written, 2 × 5 marks |
| 38th BCS Written | 2018 | 2 (Q0033, Q0035) | Written |
| NTRCA 17th registration viva | 2023 | 2 (Q0455, Q0465) | Viva |
| 45th BCS Written Technical Cadre (ICT-281) | 2024-01-31 | 1 (Q0029) | Written |
| BAPEX Assistant General Manager (ICT) (BUET) | 2023-01-20 | 1 (Q0862) | Written |
| Bangladesh Bank Assistant Maintenance Engineer (BIBM) | 2023-02-04 | 1 (Q0909) | Written |
| Bangladesh Water Development Board Assistant Programmer | 2018 | 1 (Q0056) | Written |
| Bank (name cut off, 'B... Ltd') Assistant Programmer | — | 1 (Q0922) | Written |
| BOGMC (Petrobangla) Assistant Manager | 2024 | 1 (Q0472) | Written |
| BUET MSc in CSE | 2026-10-03 | 1 (Q0279) | Written |
| ICB Securities Assistant Programmer | 2026-06-27 | 1 (Q0947) | Written |
| PGCB Assistant Engineer (CSE) (BUET) | 2021-09-30 | 1 (Q0185) | Written |
| Petrobangla Assistant Manager (CSE) | 2024-05-31 | 1 (Q0891) | Written |
| Petrobangla Assistant Manager (CSE) (BUET) | 2024-05-31 | 1 (Q0233) | Written |

16 papers, 31 items. Q0279 (BUET MSc) and Q0233/Q0891 both trace to the same photographed Petrobangla page, so
the exam attribution is per *item*, not per *page*.

**Highest-yield gate facts in this set** — "anticoincidence = XOR" (3 sheets), "modulo-2 addition = subtraction =
XOR" (2 papers), "universal gate = NAND, prove it" (2 papers + a viva), "XOR from 4 NANDs" (1 paper but always
written), "full adder carry-out" (MCQ + viva).

---

## Coverage notes

- **Present:** all seven gates, universal-gate proof and NAND-only construction, De Morgan in circuit form, XOR/XNOR
  naming, modulo-2, parity and Hamming, half/full adder, MUX/DEMUX, encoder, PLA, gate counting, flip-flops,
  counters, FSM sizing.
- **Not asked anywhere in this folder set:** TTL/CMOS voltage thresholds, fan-in/fan-out and propagation delay,
  74xx IC part numbers (see the reference table in Part 1), 3- and 4-input NAND/NOR gate counts, POS-form gate
  implementations. Worth preparing anyway — the reference table covers the IC numbers at zero cost.
- **K-map, Boolean simplification and canonical SOP/POS** are deliberately **out of scope** here; they have
  their own dense coverage in [04_DLD.md](04_DLD.md).