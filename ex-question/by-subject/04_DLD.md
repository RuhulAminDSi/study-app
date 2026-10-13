# Digital Logic Design (DLD): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

> **Logic gates?** The gate questions from this file are collected, categorized and tagged in
> **[04_DLD_logic-gates.md](04_DLD_logic-gates.md)** — a merged revision set that also pulls in the
> parity/Hamming items filed under Computer Networking, with a truth-table reference sheet and memory tricks.

- **Items:** 50 (Written 31, MCQ 11, Study note 3, Worked example 2, Viva 3)
- **Corrections:** 5
- **Papers:** 38th BCS Written; 45th BCS Written (CSE-971); 45th BCS Written Technical Cadre (ICT-281); 46th BCS CSE; 46th BCS ICT; 47th BCS ICT; 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BAPEX Assistant General Manager (ICT) (BUET); BOGMC (Petrobangla) Assistant Manager; BPDM AE(CSE) 10.05.2024; Teletalk AM(IT) 2023; BPSC AP; BPSC SAE; BUET MSc in CSE; Bangladesh Water Development Board Assistant Programmer Written; Bank (name cut off, 'B... Ltd') Assistant Programmer Written; Bank AME 08.05.2026; Bank SO IT 25.07.2026; 46th BCS ICT; Bank IT viva (compiled from candidates' viva experiences); Janata Bank ANE 2020; BPSC Network Engineer 21.05.2025; MRA SCO; NTRCA 17th registration viva 2023; PGCB Assistant Engineer (CSE) (BUET); Petrobangla Assistant Manager (CSE); Petrobangla Assistant Manager (CSE) (BUET); Petrobangla Assistant Manager (IT) (BUET); Teletalk Assistant Manager (IT)

## Topics

- K-map minimization (7)
- Boolean algebra simplification (2)
- Modulo-2 arithmetic (2)
- 3-variable K-map (1)
- Binary logic (1)
- Boolean function simplification (1)
- Boolean Logic (1)
- Boolean simplification (3-variable) (1)
- Combinational vs sequential circuits (1)
- Complement representation (1)
- Counters (BCD ripple counter) (1)
- Encoder outputs (1)
- Flip-flops (JK vs D) (1)
- FSM design (flip-flop count) (1)
- FSM state assignment (flip-flops) (1)
- FSM state count and flip-flops (1)
- Full adder (1)
- Half adder and full adder (1)
- K-map minimization (SOP) (1)
- K-map rules (1)
- K-map simplification and logic circuit (1)
- Logic circuit analysis (truth table) (1)
- Logic circuit with basic gates (1)
- Logic gates (XOR) (1)
- Multiplexer vs demultiplexer (1)
- Number representation (unsigned, hex, 2's complement) (1)
- Number system conversion (1)
- Number system conversion; hexadecimal sequence (1)
- Odd parity function (truth table) (1)
- POS form (1)
- POS minimization (1)
- POS on K-map (1)
- Programmable logic array (PLA) (1)
- SOP form (1)
- SOP on K-map (1)
- SOP to POS conversion (1)
- Truth table (1)
- Truth table from Boolean expression (1)
- Universal gates (NAND) (1)
- Universal gates; NAND-only implementation (1)
- XOR gate (anticoincidence) (1)
- XOR using NAND gates (1)

## K-map minimization

### Q1(b) <sub>Q0034</sub>

*38th BCS Written · 2018 · Written*

Simplify using a K-map: f(A,B,C) = ĀBC̄ + ĀBC + ĀB̄C + ABC.

- **Printed answer:** f = ĀB + ĀC + BC (minterms 1, 2, 3, 7).
- **Source:** [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)

### Q36 <sub>Q0347</sub>

*BPDM AE(CSE) 10.05.2024; Teletalk AM(IT) 2023 · Assistant Engineer (CSE) / Assistant Manager (IT) · 2024-05-10 · Written*

Simplify F(A,B,C,D) = Σm(2,8,9,11,13,15) using a 4-variable K-map.

- **Printed answer:** F = AD + AB'C' + A'B'CD'
- **Source:** [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg); [DLD/04_q47-bpsc-ap-kmap.md](../DLD/04_q47-bpsc-ap-kmap.md) · [image](../DLD/04_q47-bpsc-ap-kmap.jpg)

### Q47 <sub>Q0348</sub>

*BPSC AP · Assistant Programmer · 2023-07-19 · Written*

Simplify F(A,B,C,D) = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map.

- **Printed answer:** F = BC + B'D'
- **Source:** [DLD/04_q47-bpsc-ap-kmap.md](../DLD/04_q47-bpsc-ap-kmap.md) · [image](../DLD/04_q47-bpsc-ap-kmap.jpg)

### Q53 <sub>Q0349</sub>

*MRA SCO · 2023-02-24 · Written*

Simplify F(A,B,C,D) = Σm(0,2,3,7,8,10) using a 4-variable K-map.

- **Printed answer:** F = A'CD + B'D'
- **Source:** [DLD/10_q53-q73-kmap.md](../DLD/10_q53-q73-kmap.md) · [image](../DLD/10_q53-q73-kmap.jpg)

### Q128 <sub>Q0352</sub>

*47th BCS ICT · Written*

Simplify F(A,B,C,D) = Σ(3,5,7,9,13,14,15) using a 4-variable K-map.

- **Printed answer:** F = BD + A'CD + ABC + AC'D
- **Source:** [DLD/08_q128-47th-bcs-ict.md](../DLD/08_q128-47th-bcs-ict.md) · [image](../DLD/08_q128-47th-bcs-ict.jpg); [DLD/01_kmap-solution-q36.md](../DLD/01_kmap-solution-q36.md) · [image](../DLD/01_kmap-solution-q36.jpg)

### Q36 <sub>Q0353</sub>

*Bank AME 08.05.2026; Bank SO IT 25.07.2026; 46th BCS ICT · Assistant Maintenance Engineer / Senior Officer (IT) · 2026-05-08 · Written*

Simplify F(A,B,C,D) = Σm(0,3,5,7,8,10,11,12,13,14,15) using a 4-variable K-map.

- **Printed answer:** F = AD' + CD + BD + B'C'D'
- **Source:** [DLD/01_kmap-solution-q36.md](../DLD/01_kmap-solution-q36.md) · [image](../DLD/01_kmap-solution-q36.jpg); [DLD/11_bpsc-ap-2026-kmap.md](../DLD/11_bpsc-ap-2026-kmap.md) · [image](../DLD/11_bpsc-ap-2026-kmap.jpg)

### Unnumbered (BPSC AP 2026) <sub>Q0354</sub>

*BPSC AP · Assistant Programmer · 2026-07-19 · Written*

Simplify F = Σm(0,2,6,7,8,10,14,15) using a 4-variable K-map (same function as Q47).

- **Printed answer:** F = BC + B'D'
- **Source:** [DLD/11_bpsc-ap-2026-kmap.md](../DLD/11_bpsc-ap-2026-kmap.md) · [image](../DLD/11_bpsc-ap-2026-kmap.jpg); [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)

## Boolean algebra simplification

### Unnumbered (BPSC SAE 2021, first) <sub>Q0356</sub>

*BPSC SAE · Sub-Assistant Engineer · 2021 · Written*

Simplify F = A'B'C' + B'CD' + A'BCD' + AB'C'.

- **Printed answer:** F = B'C' + B'D' + A'CD'
- **Note:** Final result is correct (minterms 0,1,2,6,8,9,10), but the intermediate algebra lines contain typos (term written A'BCA', factor CD'(B + A'B)).
- **Source:** [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)

### Unnumbered (BPSC SAE 2021, second) <sub>Q0357</sub>

*BPSC SAE · Sub-Assistant Engineer · 2021 · Written*

Simplify F = AB'CD' + A'B'C'D + A'BC'D + AB'C'D'.

- **Printed answer:** F = AB'D' + A'C'D
- **Source:** [DLD/05_bpsc-sae-2021-simplify.md](../DLD/05_bpsc-sae-2021-simplify.md) · [image](../DLD/05_bpsc-sae-2021-simplify.jpg)

## Modulo-2 arithmetic

### MCQ 35 <sub>Q0068</sub>

*paper not shown · MCQ*

In a modulo-2 operation, ____ give the same result: (a) addition & division (b) addition & multiplication (c) multiplication & division (d) subtraction & addition.

- **Note:** The answer is not printed on this page. The correct answer is (d) subtraction & addition, since both are XOR.
- **Source:** [BCS/32_8086-reset-thrashing-mov-modulo-2.md](../BCS/32_8086-reset-thrashing-mov-modulo-2.md) · [image](../BCS/32_8086-reset-thrashing-mov-modulo-2.jpg)

### MCQ (number not shown, precedes Q36) <sub>Q0097</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Question text not on these pages; the surviving answer concerns which operations are identical in modulo-2 arithmetic (both reduce to XOR).

- **Printed answer:** (ঘ) Subtraction & addition — both equal XOR in modulo-2
- **Source:** [BCS/63_pure-virtual-ai-techniques-rlc.md](../BCS/63_pure-virtual-ai-techniques-rlc.md) · [image](../BCS/63_pure-virtual-ai-techniques-rlc.jpg)

## 3-variable K-map

### Q73 <sub>Q0350</sub>

*Janata Bank ANE 2020; BPSC Network Engineer 21.05.2025 · Assistant Network Engineer / Network Engineer · 2020 · Written*

Simplify F = A'B'C' + AB'C' + AB'C + A'BC + ABC using a 3-variable K-map (minterms 0,3,4,5,7).

- **Printed answer:** F = AC + BC + B'C'
- **Source:** [DLD/10_q53-q73-kmap.md](../DLD/10_q53-q73-kmap.md) · [image](../DLD/10_q53-q73-kmap.jpg)

## Binary logic

### Q1 <sub>Q0056</sub>

*Bangladesh Water Development Board Assistant Programmer Written · 2018 · Written*

Why is binary logic used for digital systems?

- **Printed answer:** Transistors have two states (on/off), so 0/1 maps directly onto the hardware.
- **Source:** [BCS/18_database-security-osi-binary-logic.md](../BCS/18_database-security-osi-binary-logic.md) · [image](../BCS/18_database-security-osi-binary-logic.jpg)

## Boolean function simplification

### Q20(b) <sub>Q0012</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

What is a Boolean function? Simplify F = A'B'C + A'BC + AB'.

- **Note:** Answer is on printed page 273, which is not in the folder. The .md transcribes the first term as A'B'C', but the image shows A'B'C. Expected result: minterms 1,3,4,5 give F = A'C + AB'.
- **Source:** [BCS/04_assembly-number-systems-boolean.md](../BCS/04_assembly-number-systems-boolean.md) · [image](../BCS/04_assembly-number-systems-boolean.jpg)

## Boolean Logic

### Viva p31 Q15 <sub>Q0755</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Boolean Logic?

- **Printed answer:** Boolean Logic is a system of logic based on two values: True (1) and False (0). It uses operations like AND, OR, and NOT to make logical decisions
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p31](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Boolean simplification (3-variable)

### Q127 <sub>Q0355</sub>

*46th BCS CSE · Written*

Simplify F = A'B'C + AB'C + ABC' + ABC using a 3-variable K-map.

- **Printed answer:** F = B'C + AB (solved algebraically)
- **Source:** [DLD/03_q127-3variable-kmap.md](../DLD/03_q127-3variable-kmap.md) · [image](../DLD/03_q127-3variable-kmap.jpg)

## Combinational vs sequential circuits

### Q94 <sub>Q0154</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Basic difference between combinational and sequential circuits lies in: (feedback used / logic gates used / inputs / none)

- **Printed answer:** (ক) Feedback (memory) used
- **Source:** [BCS/42_gmsk-am-bandwidth-feedback-circuits.md](../BCS/42_gmsk-am-bandwidth-feedback-circuits.md) · [image](../BCS/42_gmsk-am-bandwidth-feedback-circuits.jpg)

## Complement representation

### Q53 <sub>Q0113</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which complement method is predominantly used to represent negative numbers in computers? (1's / 2's / 9's / 10's)

- **Printed answer:** (খ) 2's complement
- **Source:** [BCS/33_line-voltage-2s-complement-sorting-cpu.md](../BCS/33_line-voltage-2s-complement-sorting-cpu.md) · [image](../BCS/33_line-voltage-2s-complement-sorting-cpu.jpg)

## Counters (BCD ripple counter)

### Q57 <sub>Q0117</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Number of states in a 4-bit BCD ripple counter? (4 / 10 / 16 / 5)

- **Printed answer:** (খ) 10
- **Source:** [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg)

## Encoder outputs

### Q5 (candidate 2) <sub>Q0465</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

How many outputs does an encoder with 10 inputs have?

- **Printed answer:** Outputs = 2^n, so 2^10 = 1024
- **Correction:** Wrong (that is decoder logic, and reversed). An encoder with 2^n inputs has n outputs; 10 inputs (decimal-to-BCD) need ceil(log2 10) = 4 outputs.
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

## Flip-flops (JK vs D)

### Q20(c) <sub>Q0013</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written*

Flip-flop sub-part (stem on missing printed page 273); visible tail compares clocked J-K and clocked D flip-flops.

- **Printed answer:** JK needs J and K inputs and can set/reset/toggle; D needs only D and is used for storage/delay.
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)

## FSM design (flip-flop count)

### Q4(a) <sub>Q0891</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, only input a 5-second clock. Minimum number of flip-flops?

- **Source:** [PETROBANGLA/18_petrobangla-am-cse-written-2024.md](../PETROBANGLA/18_petrobangla-am-cse-written-2024.md) · [image](../PETROBANGLA/18_petrobangla-am-cse-written-2024.jpg)

## FSM state assignment (flip-flops)

### Q4(a) <sub>Q0233</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

A traffic light cycles GREEN 70 s, YELLOW 5 s, RED 75 s, driven only by a 5 s clock. Minimum number of flip-flops for the FSM?

- **Note:** No answer printed. 150 s / 5 s = 30 states → ⌈log2 30⌉ = 5 flip-flops.
- **Source:** [BUET JOB/30_java-oop-sql-fsm-questions.md](../BUET%20JOB/30_java-oop-sql-fsm-questions.md) · [image](../BUET%20JOB/30_java-oop-sql-fsm-questions.jpg)

## FSM state count and flip-flops

### Q4(a) <sub>Q0472</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

Traffic light FSM: GREEN 70 s, YELLOW 5 s, RED 75 s, clock period 5 s. Minimum number of flip-flops?

- **Printed answer:** 14 + 1 + 15 = 30 states; 2^5 = 32 >= 30, so 5 flip-flops.
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p5](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

## Full adder

### Q97 <sub>Q0157</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

If x, y, z are full-adder inputs, the carry-out expression is: (x̄y + x̄z + yz / x + y + z / xy + xz + yz / xy + xz + yz [printed twice])

- **Printed answer:** (গ) Cout = xy + xz + yz
- **Source:** [BCS/36_full-adder-superposition-decision-tree.md](../BCS/36_full-adder-superposition-decision-tree.md) · [image](../BCS/36_full-adder-superposition-decision-tree.jpg)

## Half adder and full adder

### Q2 (candidate 1) <sub>Q0455</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What are a half adder and a full adder?

- **Printed answer:** Full adder: a logic circuit that adds two bits and outputs a carry bit (half adder answer given in an earlier viva)
- **Correction:** That describes a half adder. A full adder adds three bits (A, B, Cin) giving Sum = A⊕B⊕Cin and Cout = AB + Cin(A⊕B).
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

## K-map minimization (SOP)

### Q1 <sub>Q0869</sub>

*Teletalk Assistant Manager (IT) · 2023 · Written*

Minimize the given function in minimal SOP form using a K-map (function not printed).

- **Printed answer:** Cross-reference only: [See BPSC (Ministry of Home Affairs), Assistant Database Administrator, Exam: 2022 (CSE)]
- **Source:** [PETROBANGLA/05_stack-ops-and-teletalk-kmap.md](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.md) · [image](../PETROBANGLA/05_stack-ops-and-teletalk-kmap.jpg)

## K-map rules

### Karnaugh Map (K-Map) <sub>Q0341</sub>

*paper not shown · Study note*

K-map: graphical method to simplify Boolean expressions (fewer gates, lower cost/power, faster). Rules: group sizes 1,2,4,8 (2^n); largest possible groups; adjacent cells only, no diagonals; edges wrap around; a 1 may be reused; SOP groups 1s, POS groups 0s. Includes the 4-variable cell numbering (rows AB 00,01,11,10; m0 m1 m3 m2 / m4 m5 m7 m6 / m12 m13 m15 m14 / m8 m9 m11 m10).

- **Source:** [DLD/02_karnaugh-map-rules-sop-pos.md](../DLD/02_karnaugh-map-rules-sop-pos.md) · [image](../DLD/02_karnaugh-map-rules-sop-pos.jpg)

## K-map simplification and logic circuit

### Q5 <sub>Q0876</sub>

*Petrobangla Assistant Manager (IT) (BUET) · 2022-09-16 · Written*

Simplify the given expression using a K-map and draw the logic circuit (expression not printed).

- **Printed answer:** Cross-reference only: [See Janata Bank Ltd, SO (Assistant Network Engineer), Written Exam: 2020]
- **Source:** [PETROBANGLA/08_bellman-ford-negative-cycle.md](../PETROBANGLA/08_bellman-ford-negative-cycle.md) · [image](../PETROBANGLA/08_bellman-ford-negative-cycle.jpg)

## Logic circuit analysis (truth table)

### Q2 <sub>Q0862</sub>

*BAPEX Assistant General Manager (ICT) (BUET) · 2023-01-20 · Written*

For the given circuit (A,B → AB and NOT(A+B) → combined and inverted), find the function and the inputs for which the output is 1.

- **Printed answer:** F = NOT(AB + NOT(A+B)) = A'B + AB' = A XOR B (output 1 for 01 and 10)
- **Source:** [PETROBANGLA/07_routing-and-erd-schema.md](../PETROBANGLA/07_routing-and-erd-schema.md) · [image](../PETROBANGLA/07_routing-and-erd-schema.jpg)

## Logic circuit with basic gates

### Q1(c) <sub>Q0035</sub>

*38th BCS Written · 2018 · Written*

Draw the circuit for the simplified equation (F = ĀB + ĀC + BC) using basic gates and calculate the number of basic gates required.

- **Printed answer:** Circuit: NOT on A, three 2-input AND gates (ĀB, ĀC, BC) into one 3-input OR.
- **Correction:** The gate count the question asks for is never stated. It is 5 gates: 1 NOT, 3 AND and 1 OR.
- **Source:** [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)

## Logic gates (XOR)

### Q49 <sub>Q0111</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which gate is known as the "anticoincidence" gate? (NOR / XNOR / XOR / OR)

- **Printed answer:** (গ) XOR (explanation not on these pages)
- **Source:** [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)

## Multiplexer vs demultiplexer

### Q20(e) <sub>Q0015</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Draw the logic circuit of a two-input multiplexer. Compare multiplexer and demultiplexer.

- **Printed answer:** Y = A0·S' + A1·S (NOT, 2 AND, 1 OR); MUX = data selector with many inputs and 1 output, DEMUX = data distributor with 1 input and many outputs.
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg); [BCS/09_bfs-dfs-and-linked-list.md](../BCS/09_bfs-dfs-and-linked-list.md) · [image](../BCS/09_bfs-dfs-and-linked-list.jpg)

## Number representation (unsigned, hex, 2's complement)

### Q26 <sub>Q0091</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which could be a correct interpretation of 10110011₂? (179 / B3 / -77 / All of the above)

- **Printed answer:** (ঘ) All of the above: 179 unsigned, B3 hex, -77 in 2's complement
- **Source:** [BCS/34_maximum-power-transfer-sql-8255-ppi.md](../BCS/34_maximum-power-transfer-sql-8255-ppi.md) · [image](../BCS/34_maximum-power-transfer-sql-8255-ppi.jpg); [BCS/46_zombie-process-and-tdm-fdm.md](../BCS/46_zombie-process-and-tdm-fdm.md) · [image](../BCS/46_zombie-process-and-tdm-fdm.jpg)

## Number system conversion

### Q13 <sub>Q0081</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Convert 101.101₂ to decimal. (4.525 / 4.535 / 5.515 / 5.625)

- **Printed answer:** (ঘ) 5.625
- **Source:** [BCS/61_gantt-chart-rsa-binary-conversion.md](../BCS/61_gantt-chart-rsa-binary-conversion.md) · [image](../BCS/61_gantt-chart-rsa-binary-conversion.jpg); [BCS/59_blockchain-polynomial-suffix-tree.md](../BCS/59_blockchain-polynomial-suffix-tree.md) · [image](../BCS/59_blockchain-polynomial-suffix-tree.jpg)

## Number system conversion; hexadecimal sequence

### Q20(a) <sub>Q0011</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Write the decimal, octal and binary form of (E)16. Write the next four numbers in the hexadecimal sequence 6FC, 6FE, __, __, __, __.

- **Printed answer:** Printed: (E)16 = 15 decimal = 17 octal = 1111 binary; the sequence part is not answered.
- **Correction:** E = 14, not 15: (E)16 = (14)10 = (16)8 = (1110)2. The sequence (step 2) is not answered; it continues 700, 702, 704, 706.
- **Source:** [BCS/04_assembly-number-systems-boolean.md](../BCS/04_assembly-number-systems-boolean.md) · [image](../BCS/04_assembly-number-systems-boolean.jpg)

## Odd parity function (truth table)

### Q13 <sub>Q0279</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

3-bit input ABC; D = 1 when the number of 1s is odd. Give the truth table and Boolean expression (a timing diagram of A, B, C is given).

- **Note:** No answer printed. D = A ⊕ B ⊕ C (minterms 1, 2, 4, 7).
- **Source:** [BUET JOB/37_buet-msc-cse-questions-10-13.md](../BUET%20JOB/37_buet-msc-cse-questions-10-13.md) · [image](../BUET%20JOB/37_buet-msc-cse-questions-10-13.jpg); [BUET MSC/01_buet-msc-questions-10-14.md](../BUET%20MSC/01_buet-msc-questions-10-14.md) · [image](../BUET%20MSC/01_buet-msc-questions-10-14.jpg)

## POS form

### POS = Product of Sums <sub>Q0344</sub>

*paper not shown · Study note*

POS form: OR (sum) terms are formed first, then ANDed together; example F = (A+B)(A+C)(B+C).

- **Source:** [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)

## POS minimization

### Q95 <sub>Q0351</sub>

*46th BCS ICT · Written*

Minimize f(A,B,C,D) = Π(2,3,7,12,13,14,15). (Printed twice on the page; the repeat continues onto the next page.)

- **Printed answer:** Converted to Σ(0,1,4,5,6,8,9,10,11); F = AB' + A'C' + A'BD'
- **Note:** Result is the minimal SOP and correct; the equivalent minimal POS (A'+B')(A+B+C')(A+C'+D') is not given.
- **Source:** [DLD/07_q95-pos-minimization.md](../DLD/07_q95-pos-minimization.md) · [image](../DLD/07_q95-pos-minimization.jpg); [DLD/08_q128-47th-bcs-ict.md](../DLD/08_q128-47th-bcs-ict.md) · [image](../DLD/08_q128-47th-bcs-ict.jpg)

## POS on K-map

### Representation of POS <sub>Q0345</sub>

*paper not shown · Worked example*

Represent F(A,B,C,D) = ΠM(0,1,2,3,5,6,11,12) on a K-map by converting to the complementary minterm list.

- **Printed answer:** F = Σm(4,7,8,9,10,13,14,15), plotted on the K-map
- **Source:** [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg)

## Programmable logic array (PLA)

### Q66 <sub>Q0126</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

A programmable logic array is mainly used for: (custom sequential circuits / memory / custom combinational circuits / fixed logic)

- **Printed answer:** (গ) Custom combinational circuits
- **Source:** [BCS/62_pla-power-factor-set-intersection.md](../BCS/62_pla-power-factor-set-intersection.md) · [image](../BCS/62_pla-power-factor-set-intersection.jpg)

## SOP form

### SOP = Sum of Products <sub>Q0342</sub>

*paper not shown · Study note*

SOP form: AND (product) terms are formed first, then ORed together; example F = AB + AC + BC.

- **Source:** [DLD/02_karnaugh-map-rules-sop-pos.md](../DLD/02_karnaugh-map-rules-sop-pos.md) · [image](../DLD/02_karnaugh-map-rules-sop-pos.jpg); [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)

## SOP on K-map

### Representation of SOP <sub>Q0343</sub>

*paper not shown · Worked example*

Plot F(A,B,C,D) = Σm(0,1,2,3,5,6,11,12) on a 4-variable K-map; procedure: group 1s, find constant variables, write product terms, OR them.

- **Printed answer:** K-map with 1s at m0,m1,m2,m3,m5,m6,m11,m12 (no grouping shown)
- **Source:** [DLD/09_sop-pos-representation.md](../DLD/09_sop-pos-representation.md) · [image](../DLD/09_sop-pos-representation.jpg)

## SOP to POS conversion

### Q96 <sub>Q0346</sub>

*46th BCS ICT · Written*

Convert the canonical SOP f(A,B,C,D) = Σ(1,3,5,8,11) into canonical POS.

- **Printed answer:** f = Π(0,2,4,6,7,9,10,12,13,14,15)
- **Source:** [DLD/06_q96-sop-to-pos.md](../DLD/06_q96-sop-to-pos.md) · [image](../DLD/06_q96-sop-to-pos.jpg)

## Truth table

### Q20(d) <sub>Q0014</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

Determine the truth table of (A⊕B) ∨ (¬A) ∨ (¬C).

- **Printed answer:** Result is F only for A=B=C=T, T for all other rows (with an intermediate X = A⊕B column).
- **Correction:** The final column is right, but the intermediate X = A⊕B column is wrong in three rows: (T,T,F) should be F, (T,F,F) should be T and (F,T,F) should be T.
- **Source:** [BCS/11_flip-flops-truth-table-multiplexer.md](../BCS/11_flip-flops-truth-table-multiplexer.md) · [image](../BCS/11_flip-flops-truth-table-multiplexer.jpg)

## Truth table from Boolean expression

### Q1(a) <sub>Q0033</sub>

*38th BCS Written · 2018 · Written*

Draw a truth table for Y = A·B̄·C·D̄ + A·B·C̄̄ + Ā·B·D + A·B̄̄·C·D (double bars as printed, i.e. Y = AB̄CD̄ + ABC + ĀBD + ABCD).

- **Printed answer:** Y = 1 for ABCD = 0101, 0111, 1010, 1110, 1111 (minterms 5, 7, 10, 14, 15).
- **Source:** [BCS/16_shortest-path-sql-boolean-truth-table.md](../BCS/16_shortest-path-sql-boolean-truth-table.md) · [image](../BCS/16_shortest-path-sql-boolean-truth-table.jpg); [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg)

## Universal gates (NAND)

### Q4 (part 1) <sub>Q0922</sub>

*Bank (name cut off, 'B... Ltd') Assistant Programmer Written · Written*

What is a universal gate? Prove that NAND is a universal gate.

- **Source:** [Exam_Bank_Assistant_Programmer_Written.md](../Exam_Bank_Assistant_Programmer_Written.md) · [image](../Exam_Bank_Assistant_Programmer_Written.jpg)

## Universal gates; NAND-only implementation

### Q28(a) <sub>Q0029</sub>

*45th BCS Written Technical Cadre (ICT-281) · 2024-01-31 · Written*

What are universal gates? Implement F = AB + CD + E using NAND gates only.

- **Note:** Answer continues on printed page 292, which is not in this batch. Expected: F = NAND(NAND(A,B), NAND(C,D), NAND(E,E)), which uses 4 NAND gates.
- **Source:** [BCS/06_45th-bcs-physics-logic-questions.md](../BCS/06_45th-bcs-physics-logic-questions.md) · [image](../BCS/06_45th-bcs-physics-logic-questions.jpg)

## XOR gate (anticoincidence)

### MCQ (number not shown) <sub>Q0058</sub>

*paper not shown · MCQ*

Which gate is known as the 'anticoincidence' gate? (Stem and options are on a preceding page; only the explanation tail is visible.)

- **Printed answer:** XOR: the output is HIGH only when the inputs differ.
- **Source:** [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)

## XOR using NAND gates

### Q2 <sub>Q0185</sub>

*PGCB Assistant Engineer (CSE) (BUET) · 2021-09-30 · Written*

Implement an XOR gate using at most 4 NAND gates.

- **Printed answer:** Standard 4-NAND XOR: N1=NAND(A,B), N2=NAND(A,N1), N3=NAND(B,N1), Q=NAND(N2,N3).
- **Source:** [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)
