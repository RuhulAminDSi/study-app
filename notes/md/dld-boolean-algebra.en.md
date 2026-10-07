# Boolean Algebra: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/dld-boolean-algebra.en.html` (handwritten-style PDF: `notes/pdf/dld-boolean-algebra.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, Officer (IT)). MCQ + written.

**Syllabus coverage:** "Digital logic: Boolean algebra, De Morgan's Theorems, logic gates and their truth tables, canonical forms, combinational logic circuits, minimization techniques". This set covers the algebra, the canonical forms and minimization (K-map and Quine–McCluskey). Gate symbols and gate counts are in the Logic Gates notes.

**High-yield:** A + A′B = A + B · consensus theorem · De Morgan and F′ · Σm ↔ ΠM · K-map grouping · don't-cares.

---

## 1. Basics
- **Boolean algebra** is the algebra of the two values 0 and 1, with three operations: AND (·), OR (+) and NOT (′).
- It was introduced by **George Boole (1854)**. **Claude Shannon (1938)** applied it to switching circuits.

| Operation | Symbol | Rule | In C |
|---|---|---|---|
| AND | A · B or AB | 1 only if all inputs are 1 | `&&` |
| OR | A + B | 0 only if all inputs are 0 | `\|\|` |
| NOT | A′ (Ā) | flips 0 ↔ 1 | `!` |

- **Precedence:** ( ) → NOT → AND → OR. So A + BC′ = A + (B·(C′)).
- With n variables a truth table has **2ⁿ** rows, and there are **2^(2ⁿ)** possible functions (n = 2 gives 16, n = 3 gives 256).
- ⚠ **Trap:** in Boolean algebra 1 + 1 = 1 (OR). In binary arithmetic 1 + 1 = 10.

## 2. Huntington's postulates (1904) and duality
The six postulates:
1. Closure.
2. Identity: A + 0 = A, A·1 = A.
3. Commutative.
4. Distributive (both forms: A(B + C) = AB + AC and A + BC = (A + B)(A + C)).
5. Complement: A + A′ = 1, A·A′ = 0.
6. At least two distinct elements (0 ≠ 1).

Every other law can be proved from these six.

- **Duality:** swap + ↔ · and 0 ↔ 1, keeping every literal as it is. The dual of a true identity is also true.
  - A + 0 = A ↔ A·1 = A
  - A + AB = A ↔ A(A + B) = A
  - The dual of A + BC is **A(B + C)**.
- 💡 **Trick:** the dual mirrors the operators and keeps the letters. The complement mirrors the operators **and** flips every letter.

## 3. Laws and theorems (★ = Boolean only)
| # | Law | Form | Dual form |
|---|---|---|---|
| 1 | Identity | A + 0 = A | A·1 = A |
| 2 | Null | A + 1 = 1 ★ | A·0 = 0 |
| 3 | Idempotent | A + A = A ★ | A·A = A ★ |
| 4 | Complement | A + A′ = 1 ★ | A·A′ = 0 ★ |
| 5 | Involution | (A′)′ = A | self-dual |
| 6 | Commutative | A + B = B + A | AB = BA |
| 7 | Associative | A + (B + C) = (A + B) + C | A(BC) = (AB)C |
| 8 | Distributive | A(B + C) = AB + AC | **A + BC = (A + B)(A + C)** ★ |
| 9 | Absorption | A + AB = A ★ | A(A + B) = A ★ |
| 10 | Redundant literal | **A + A′B = A + B** ★ | A(A′ + B) = AB ★ |
| 11 | Consensus | AB + A′C + BC = AB + A′C ★ | (A + B)(A′ + C)(B + C) = (A + B)(A′ + C) ★ |
| 12 | De Morgan | (A + B)′ = A′B′ ★ | (AB)′ = A′ + B′ ★ |

- **Proofs:**
  - A + AB = A(1 + B) = A.
  - A + A′B = (A + A′)(A + B) = A + B.
- 💡 **Consensus:** A appears both plain and primed. Drop it and AND what's left (BC). That "bridge" term is redundant.

## 4. De Morgan in depth
- (A + B)′ = A′B′ and (AB)′ = A′ + B′. With n variables: (A + B + C + …)′ = A′B′C′… and (ABC…)′ = A′ + B′ + C′ + …
- **Complement of a function, F′:** bracket every AND term, swap + ↔ · (this gives the dual), then complement every literal.
- ✍ **Examples:**
  - F = AB′ + A′C → F′ = (A′ + B)(A + C′) = A′C′ + AB.
  - F = x(y′z + yz′) → F′ = x′ + yz + y′z′.
  - (A + BC)′ = A′(B′ + C′) = A′B′ + A′C′.
- ⚠ **Trap:** (A + B)′ ≠ A′ + B′. Flipping the letters without swapping the operator is the classic mistake.

## 5. Algebraic simplification (name the law at each step)
1. AB + AB′ + A′B = A + A′B = **A + B** (6 → 2 literals).
2. (A + B)(A + B′) = A + BB′ = **A**.
3. A′B′C + A′BC + AB′C = A′C + AB′C = C(A′ + B′) = **A′C + B′C**.
4. XY + X′Z + YZ = **XY + X′Z** (consensus: expand YZ = XYZ + X′YZ, then absorb).
5. A′BC + AB′C′ + ABC′ + ABC = **BC + AC′** (12 → 4 literals).

💡 **Look for, in this order:** X + X′ pairs → a term inside another (absorption) → X + X′Y → consensus.

## 6. Minterms, maxterms and canonical forms
| ABC | Minterm | mᵢ | Maxterm | Mᵢ |
|---|---|---|---|---|
| 000 | A′B′C′ | m0 | A + B + C | M0 |
| 001 | A′B′C | m1 | A + B + C′ | M1 |
| 010 | A′BC′ | m2 | A + B′ + C | M2 |
| 011 | A′BC | m3 | A + B′ + C′ | M3 |
| 100 | AB′C′ | m4 | A′ + B + C | M4 |
| 101 | AB′C | m5 | A′ + B + C′ | M5 |
| 110 | ABC′ | m6 | A′ + B′ + C | M6 |
| 111 | ABC | m7 | A′ + B′ + C′ | M7 |

- **Canonical SOP** is Σm (an OR of minterms). **Canonical POS** is ΠM (an AND of maxterms).
- **Key relations:**
  - mᵢ′ = Mᵢ.
  - Σm(…) = ΠM(missing indices), and F′ = Σm(missing).
  - #m + #M = 2ⁿ.
- **Standard vs canonical:** a standard form (e.g. A + B′C) can have terms that leave out variables. In a canonical form every term contains every variable.
- ✍ **Example:** A + B′C = Σm(1, 4, 5, 6, 7) = ΠM(0, 2, 3), so F′ = Σm(0, 2, 3).
- ⚠ **Trap:** a 3-variable F = Σm(1, 3, 5) has 8 − 3 = 5 maxterms.

## 7. K-map rules (Karnaugh 1953)
- Cells are in **Gray-code order 00, 01, 11, 10**, so neighbouring cells differ in exactly one variable.
- 4-variable cell numbering (rows AB, columns CD):

  | AB\CD | 00 | 01 | 11 | 10 |
  |---|---|---|---|---|
  | 00 | 0 | 1 | 3 | 2 |
  | 01 | 4 | 5 | 7 | 6 |
  | 11 | 12 | 13 | 15 | 14 |
  | 10 | 8 | 9 | 11 | 10 |

- **Grouping rules:**
  1. Group the 1s for SOP, or the 0s for POS. X may join any group.
  2. Group sizes are 1, 2, 4, 8 or 16, and every group is a rectangle.
  3. Make the groups as large as possible and as few as possible.
  4. Groups may overlap.
  5. The edges wrap round, and the 4 corners are adjacent.
- A group of 2ᵏ cells removes k variables.
- **Prime implicant:** a group that can't be made larger. **Essential PI:** the only group covering some 1, so it must be in the answer.
- ⚠ **Trap:** adjacent means one bit apart. m1 and m2 are **not** adjacent.

## 8. K-map worked examples
- **(a)** Σm(0, 1, 2, 5, 8, 9, 10) = **B′C′ + B′D′ + A′C′D**.
  - Groups: quad 0, 1, 8, 9; the corners 0, 2, 8, 10; the pair 1, 5.
  - All three groups are essential.
- **(b)** Σm(1, 3, 7, 11, 15) + d(0, 2, 5) = **CD + A′B′**. CD + A′D is equally minimal.
- **(c)** ΠM(0, 1, 2, 3, 6) = **A(B′ + C)**, by grouping the 0s.
- ⚠ **Trap:** use an X only if it makes a group larger. Don't-cares never have to be covered.

## 9. Quine–McCluskey (Quine 1952, McCluskey 1956)
**Steps:**
1. Group the minterms by their number of 1s.
2. Combine terms that differ in one bit (write a –), and tick the terms you used.
3. Repeat until nothing more combines. The unticked terms are the prime implicants.
4. Draw the PI chart and pick the essential PIs, then cover the rest (Petrick's method).

✍ **Example:** Σm(0, 1, 2, 3, 7) gives the PIs 0–– (A′) and –11 (BC), so F = **A′ + BC**.

| | K-map | QM |
|---|---|---|
| Size | ≤ 4 (5–6) variables | any |
| Method | visual | tabular |
| Best for | exams | software / CAD |

## 10. Minimal form → gates and code
- SOP → NAND-NAND; POS → NOR-NOR (see the Logic Gates notes). Cost ≈ gates + gate inputs.
- **IT link:**
  - `!(age < 18 || age > 60)` == `age >= 18 && age <= 60`
  - `x || (x && y)` == `x`
  - In SQL: `dept = 'IT' OR (dept = 'IT' AND pay > 50000)` == `dept = 'IT'`

---

## Practice MCQs
1. A + 1 = (a) A (b) 0 (c) A′ (d) 1
2. A + AB = (a) B (b) AB (c) A (d) A + B
3. (A + B)′ = (a) A′B′ (b) A′ + B′ (c) AB (d) A′B
4. Σm(0, 2, 4, 6) of A, B, C = (a) A′ (b) B′C′ (c) A′C′ (d) C′
5. AB + A′C + BC = (a) AB + C (b) AB + A′C (c) A + C (d) B + C
6. A + A′B = (a) A + B (b) AB (c) A′ + B (d) B
7. Dual of A + BC: (a) A′(B′ + C′) (b) (A + B)(A + C) (c) A(B + C) (d) A + B + C
8. Cells in a 4-variable K-map: (a) 8 (b) 16 (c) 4 (d) 32
9. Group size NOT allowed: (a) 2 (b) 4 (c) 8 (d) 6
10. Maxterms in the ΠM form of 3-variable Σm(1, 3, 5): (a) 3 (b) 5 (c) 8 (d) 2

**Answer key:** 1-d · 2-c · 3-a · 4-d · 5-b · 6-a · 7-c · 8-b · 9-d · 10-b. For Q7, (b) **equals** A + BC; it isn't the dual.

## Written question (8 marks)
Minimize F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15) with a K-map and implement it with NAND gates only.

**Model answer:**
1. The corners (0, 2, 8, 10) give B′D′, and the centre (5, 7, 13, 15) gives BD.
2. F = **B′D′ + BD** = B ⊙ D.
3. As NAND-NAND: F = ((B′D′)′(BD)′)′, with B′ and D′ made from NAND inverters.
4. That makes **5 NAND gates** in total.
