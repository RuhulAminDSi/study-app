# Theory of Computation (TOC): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 4 (Study note 1, Written 2, MCQ 1)
- **Corrections:** 1
- **Papers:** 46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch); BPDB Assistant Engineer (CSE) (BUET); PGCB Assistant Engineer (CSE) (BUET)

## Topics

- Context-free grammar (1)
- Course outline: compiler design, previous questions, model tests (1)
- Lexical analysis (tokens) (1)
- Regular expressions (1)

## Context-free grammar

### Q9 <sub>Q0192</sub>

*PGCB Assistant Engineer (CSE) (BUET) (inferred from page order) · 2021-09-30 · Written*

Define a context-free grammar with examples.

- **Printed answer:** CFG = (N, T, P, S) with productions N → (N ∪ T)*; three example grammars.
- **Correction:** The second example ({S, a, b}, {a, b}, P, S) lists a and b as both non-terminals and terminals, which breaks N ∩ T = ∅; it should be ({S}, {a, b}, P, S). The definition also misprints 'does have' for 'does not have' a context.
- **Source:** [BUET JOB/03_pgcb-sae-subnet-cfg-mysql-js.md](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.md) · [image](../BUET%20JOB/03_pgcb-sae-subnet-cfg-mysql-js.jpg)

## Course outline: compiler design, previous questions, model tests

### Outline p4 (Class 28-32) <sub>Q0004</sub>

*46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch) · Study note*

Coaching course outline, classes 28-32: compiler design and theory of computation (lexical/syntax/semantic analysis, code generation/optimization), 45th BCS written question solving, three all-subject model tests; plus registration contact block.

- **Source:** [BCS/14_course-outline-class-28-32.md](../BCS/14_course-outline-class-28-32.md) · [image](../BCS/14_course-outline-class-28-32.jpg)

## Lexical analysis (tokens)

### Q1 <sub>Q0163</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · Written*

How many tokens does the lexical analyzer generate for the C statement Power=bpdb*(nuclear+coal+hydro) (ignore spaces)?

- **Printed answer:** 11 tokens (Power, =, bpdb, *, (, nuclear, +, coal, +, hydro, )).
- **Source:** [BUET JOB/01_bpdb-ae-jfet-and-tokens.md](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.md) · [image](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.jpg); [BUET JOB/20_bpdb-tokens-and-linux-users.md](../BUET%20JOB/20_bpdb-tokens-and-linux-users.md) · [image](../BUET%20JOB/20_bpdb-tokens-and-linux-users.jpg); [BUET MSC/02_bpdb-assistant-engineer-questions-1-9.md](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) · [image](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.jpg)

## Regular expressions

### Q5 <sub>Q0167</sub>

*BPDB Assistant Engineer (CSE) (BUET) · 2023-02-24 · MCQ*

Which regex denotes binary strings having two consecutive 0s and two consecutive 1s? (a) (0+1)*0011(0+1)*+(0+1)*1100(0+1)* (b) (0+1)*(00(0+1)*11+11(0+1)*00)(0+1)* (c) (0+1)*00(0+1)*+(0+1)*11(0+1)* (d) 00(0+1)*11+11(0+1)*00

- **Printed answer:** (b)
- **Source:** [BUET JOB/18_regex-and-des-structure.md](../BUET%20JOB/18_regex-and-des-structure.md) · [image](../BUET%20JOB/18_regex-and-des-structure.jpg); [BUET MSC/02_bpdb-assistant-engineer-questions-1-9.md](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.md) · [image](../BUET%20MSC/02_bpdb-assistant-engineer-questions-1-9.jpg)
