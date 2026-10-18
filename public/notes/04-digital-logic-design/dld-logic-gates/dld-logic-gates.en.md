# Logic Gates: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/dld-logic-gates.en.html` (handwritten-style PDF: `notes/pdf/dld-logic-gates.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, BSC Officer (IT)). MCQ + written.

**Syllabus coverage (DLD):** "Digital logic: Boolean algebra, De Morgan's Theorems, logic gates and their truth tables, canonical forms, combinational logic circuits, minimization techniques". This note covers gates in depth and bridges into canonical forms. K-maps are in the Boolean Algebra lesson.

**High-yield:** 2-input truth tables · minimum NAND/NOR gate counts · De Morgan and bubble pushing · XOR as odd parity · 7400/02/04/08/32/86 · positive vs negative logic.

---

## 1. What is a logic gate?
- A logic gate is an electronic circuit that maps one or more binary inputs to one binary output according to a fixed Boolean function.

| Boolean operation | Symbol | Gate | Output is 1 when … |
|---|---|---|---|
| Logical product | A·B | AND | all inputs are 1 |
| Logical sum | A+B | OR | at least one input is 1 |
| Complement | A′ | NOT | the input is 0 |

- n inputs give **2ⁿ** truth-table rows. n variables give **2^(2ⁿ)** different Boolean functions (n = 2 → 16 functions).
- 💡 **Trick:** write the input columns by counting in binary (00, 01, 10, 11) so no row is missed.

## 2. Logic levels: positive vs negative logic
- **Positive logic:** HIGH = 1, LOW = 0 (the default). **Negative logic:** HIGH = 0, LOW = 1.
- **TTL (5 V) levels:**
  - Input: V_IL ≤ **0.8 V**, V_IH ≥ **2.0 V**.
  - Output: V_OL ≤ 0.4 V, V_OH ≥ 2.4 V.
  - Noise margin is **0.4 V**.
- CMOS thresholds scale with the supply voltage V_DD.
- ⚠ **Trap:** a positive-logic AND gate behaves as an OR gate in negative logic, and a positive NAND behaves as a negative NOR.

## 3. Basic gates: AND, OR, NOT

| A | B | AND | OR |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

- NOT: 0 → 1, 1 → 0. It is the only single-input gate. A bubble on a symbol means NOT. (A′)′ = A.
- Switch models: AND is two switches in series, OR is two switches in parallel.
- An n-input AND is 1 only for 11…1. An n-input OR is 0 only for 00…0. AND and OR are associative, so 2-input gates can be cascaded.
- **Gating:**
  - AND: control = 1 passes the data; control = 0 forces 0.
  - OR: control = 0 passes the data; control = 1 forces 1.
  - XOR: control = 1 inverts the data.
- 💡 **Trick:** AND means "all", OR means "any".

## 4. NAND, NOR, XOR, XNOR
- NAND: Y = (AB)′, which is 0 only when all inputs are 1.
- NOR: Y = (A+B)′, which is 1 only when all inputs are 0.
- XOR: A⊕B = **A′B + AB′**, which is 1 when the inputs differ.
- XNOR: A⊙B = **AB + A′B′**, which is 1 when the inputs are equal.

| A | B | AND | OR | NAND | NOR | XOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

- **XOR properties:**
  - A⊕0 = A; A⊕1 = A′; A⊕A = 0; A⊕A′ = 1.
  - XOR is commutative and associative.
  - (A⊕B)′ = A′⊕B = A⊕B′.
  - An n-input XOR is 1 when the number of 1s is odd (the odd-parity function). It is used in parity generators and checkers, comparators, adders and controlled inverters.
- ⚠ **Trap:** NAND and NOR are **not associative**. A 3-input NAND is (ABC)′, not two cascaded 2-input NANDs.
- 💡 **Trick:**
  - An "N" in front of a gate's name means a bubble on its output, which flips that gate's column.
  - XOR = "different → 1". XNOR = "same → 1".

## 5. Universal gates: NAND and NOR
- A gate is universal when NOT, AND and OR (and therefore any Boolean function) can be built from it alone. NAND and NOR are universal.
- **NAND only:**
  - NOT = NAND(A, A).
  - AND = NAND followed by a NAND inverter.
  - OR = NAND(A′, B′), with each input inverted by its own NAND.
- **NOR only:**
  - NOT = NOR(A, A).
  - OR = NOR followed by a NOR inverter.
  - AND = NOR(A′, B′), with each input inverted by its own NOR.

| Minimum 2-input gates | NOT | AND | OR | XOR | XNOR |
|---|---|---|---|---|---|
| NAND | 1 | 2 | 3 | **4** | 5 |
| NOR | 1 | 3 | 2 | 5 | **4** |

- **XOR from 4 NAND gates:**
  1. P = (AB)′
  2. Q = (A·P)′ = (AB′)′
  3. R = (B·P)′ = (A′B)′
  4. Y = (Q·R)′ = AB′ + A′B = A⊕B
- ⚠ **Trap:** textbooks often draw XOR with 5 NAND or 6 NOR gates. Those circuits work but are not minimal. MCQs ask for the minimum: 4 NAND, 5 NOR.

## 6. De Morgan's theorems
- **(A·B)′ = A′ + B′** and **(A + B)′ = A′·B′**. They extend to n variables.
- Proof by truth table: the columns for (AB)′ and A′+B′ match on every row, and so do the columns for (A+B)′ and A′B′.
- Equivalent symbols: NAND ≡ an OR gate with bubbled inputs; NOR ≡ an AND gate with bubbled inputs.
- 💡 **Trick:** "break the bar, change the sign". **Bubble pushing:** move the bubbles from the output to every input and swap AND ↔ OR.
- ✍ **Worked example:** F = (A+B)′ + (A′+B′)′ = A′B′ + AB = **A⊙B (XNOR)**. One XNOR gate replaces 2 NOR + 2 NOT + 1 OR.

## 7. Duality principle
- Swap + ↔ · and 0 ↔ 1, leaving the variables as they are.
- Examples:
  - A + 0 = A ↔ A·1 = A
  - A(B+C) = AB + AC ↔ A + BC = (A+B)(A+C)
- ⚠ **Trap:** the dual is not the complement. The complement also flips every variable.

## 8. From truth table to gate circuit
- **Minterm:** an AND term containing every variable, equal to 1 on exactly one row. SOP = Σm.
- **Maxterm:** an OR term containing every variable, equal to 0 on exactly one row. POS = ΠM.
- **Steps:**
  1. Write the truth table.
  2. List the minterms where F = 1.
  3. Simplify.
  4. Draw the AND-OR (or NAND-NAND) circuit.
  5. Check every row.
- ✍ **Majority voter:**
  - F = Σm(3,5,6,7) = ΠM(0,1,2,4).
  - Simplified: **F = AB + BC + CA** = (A+B)(B+C)(C+A).
  - NAND-NAND form: F = ((AB)′(BC)′(CA)′)′, i.e. 3 two-input NAND gates feeding 1 three-input NAND.
- **Two-level rule:** SOP → NAND-NAND; POS → NOR-NOR.
- ⚠ **Trap:** the minterm and maxterm index lists are complements of each other; together they cover all 2ⁿ rows.

## 9. Gate ICs (74xx TTL)

| IC | Contents |
|---|---|
| 7400 | quad 2-input NAND |
| 7402 | quad 2-input NOR |
| 7404 | hex inverter (6 NOT) |
| 7408 | quad 2-input AND |
| 7432 | quad 2-input OR |
| 7486 | quad 2-input XOR |
| 74266 | quad 2-input XNOR (open collector) |

- On a standard 14-pin DIP: **V_CC = pin 14, GND = pin 7**.
- 💡 **Trick:** the last two digits are the gate code: 00 NAND, 02 NOR, 04 NOT, 08 AND, 32 OR, 86 XOR.

## 10. Logic families and gate parameters

| | TTL (74xx) | CMOS (4000 / 74HC) |
|---|---|---|
| Built from | bipolar transistors | MOSFETs |
| Supply | 5 V ± 5% | 3–15 V (4000), 2–6 V (74HC) |
| Static power | higher | very low |
| Fan-out | about 10 (standard TTL) | large |

- **Fan-in:** the number of inputs. **Fan-out:** the number of gate inputs one output can drive.
- **Propagation delay:** about 10 ns for standard TTL. **Noise margin:** 0.4 V for TTL.
- **Integration scale (typical convention):** SSI < 12 gates, MSI 12–99, LSI 100–9,999, VLSI ≥ 10,000.

## 11. Applications
- **Half adder:** S = A⊕B, C = AB.
- **Even-parity bit** for A, B, C: P = A⊕B⊕C.
- **1-bit equality comparator:** A⊙B.
- **C bitwise operators:**
  - 12 & 10 = 8, 12 | 10 = 14, 12 ^ 10 = 6, ~12 = −13.
  - Masks: test a bit with &, set bits with |, toggle bits with ^.
  - XOR swap: `a ^= b; b ^= a; a ^= b;`.

---

## Practice MCQs
1. Which gate gives output 1 only when all inputs are 0? (a) NAND (b) NOR (c) XOR (d) OR
2. Minimum number of 2-input NAND gates to build XOR: (a) 3 (b) 5 (c) 4 (d) 6
3. A ⊕ 1 equals: (a) A (b) 1 (c) 0 (d) A′
4. Rows in the truth table of a 4-input gate: (a) 8 (b) 16 (c) 4 (d) 32
5. IC 7404 contains: (a) 6 inverters (b) 4 NAND (c) 4 NOR (d) 4 XOR
6. A positive-logic AND gate works in negative logic as: (a) NAND (b) NOR (c) OR (d) AND
7. (A + B)′ equals: (a) A′B′ (b) A′ + B′ (c) AB (d) (AB)′
8. Number of distinct Boolean functions of 2 variables: (a) 4 (b) 8 (c) 2 (d) 16
9. Minimum 2-input NOR gates for an AND gate: (a) 2 (b) 3 (c) 1 (d) 4
10. In C, 12 ^ 10 evaluates to: (a) 6 (b) 8 (c) 14 (d) 2

**Answer key:** 1-b · 2-c · 3-d · 4-b · 5-a · 6-c · 7-a · 8-d · 9-b · 10-a

## Written question (8 marks)
Implement a 2-input XOR gate using the minimum number of NAND gates only. Draw the circuit and prove it algebraically.

**Model answer:**
1. **Circuit (2 marks):** G1 = NAND(A,B) → P; G2 = NAND(A,P) → Q; G3 = NAND(B,P) → R; G4 = NAND(Q,R) → Y.
2. **Gate outputs (3 marks):** P = A′ + B′; Q = (A(A′+B′))′ = (AB′)′; R = (A′B)′.
3. **Output (2 marks):** Y = (QR)′ = Q′ + R′ = AB′ + A′B = A⊕B.
4. **Check (1 mark):** AB = 00 → Y = 0; AB = 10 → Y = 1. Four gates is the minimum.
