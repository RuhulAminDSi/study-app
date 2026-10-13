# Microprocessor and Interfacing (MPI): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 19 (Study note 1, Written 8, MCQ 6, Viva 4)
- **Corrections:** 4
- **Papers:** 38th BCS Written; 45th BCS Written (CSE-971); 46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch); 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BUET MSc in CSE; Bank IT viva (compiled from candidates' viva experiences); DPDC Assistant Manager (ICT); NTRCA 17th registration viva 2023; PGCB Assistant Engineer (CSE) (BUET)

## Topics

- Microprocessor components (2)
- 32-bit microprocessor (1)
- 8086 physical address calculation (1)
- 8086 pin multiplexing (1)
- 8086 reset vector (1)
- 8086–8087 coprocessor interface (1)
- 8255 PPI modes (1)
- Assembly language (1)
- Course outline: SE, AI, discrete math, microprocessors, architecture (1)
- Data and address bus widths (1)
- Embedded System (1)
- Interrupt enabling and interrupt processing (1)
- Interrupt types (1)
- Microcontroller-based automatic street light (1)
- Microprocessor (1)
- Microprocessor vs microcontroller (1)
- MOV instruction (1)
- Sensor interfacing (gas leakage detection) (1)

## Microprocessor components

### Q4 (candidate 2) <sub>Q0464</sub>

*NTRCA 17th registration viva 2023 · Lecturer (ICT), college level · 2023 · Viva*

What does a microprocessor contain?

- **Printed answer:** ALU, registers, cache memory, output circuit
- **Correction:** The control unit is missing and "output circuit" is not a CPU part; main components are ALU, control unit, register array and internal buses (cache is optional).
- **Source:** [VIVA/08_ntrca-full-adder-and-osi.md](../VIVA/08_ntrca-full-adder-and-osi.md) · [image](../VIVA/08_ntrca-full-adder-and-osi.jpg)

### Viva p30 Q6 <sub>Q0747</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are the components of a Microprocessor?

- **Printed answer:** The main components are Arithmetic Logic Unit (ALU), Control Unit (CU), Registers, Cache Memory, and Buses (Address, Data, and Control Bus)
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p30](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## 32-bit microprocessor

### Q6 <sub>Q0272</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

What is a 32-bit microprocessor? Explain its key characteristics.

- **Source:** [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg)

## 8086 physical address calculation

### Q5 <sub>Q0073</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

8086 physical address for segment 2000H and offset 0020H? (200200H / 20020H×16 / 20020H / 20020H+0020H)

- **Printed answer:** (গ) 20020H = 2000H×16 + 0020H
- **Source:** [BCS/54_qpsk-bpsk-8086-addressing.md](../BCS/54_qpsk-bpsk-8086-addressing.md) · [image](../BCS/54_qpsk-bpsk-8086-addressing.jpg)

## 8086 pin multiplexing

### Q48 <sub>Q0110</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

How many address lines are multiplexed with the data lines in Intel 8086? (8 / 32 / 64 / 16)

- **Printed answer:** Printed key (ক) 8; explanation itself says 16 (AD0–AD15)
- **Correction:** Wrong key: 8086 multiplexes 16 address lines (AD0–AD15) with D0–D15, so the answer is (ঘ) 16; the explanation wrongly claims 16 is not among the options (8 applies to the 8088).
- **Source:** [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)

## 8086 reset vector

### MCQ 32 <sub>Q0065</sub>

*paper not shown · MCQ*

After RESET, the 8086 starts from memory location: (a) FFFFFH (b) FFFFH (c) 00000H (d) 00001H.

- **Printed answer:** Printed: (a) FFFFFH, explained as CS = FFFFFH, IP = 0000H, giving FFFFF0H.
- **Correction:** The explanation is wrong. After reset CS = FFFFH and IP = 0000H, so the physical address is FFFF0H (20-bit). FFFFF0H is impossible. None of the options is exact; (a) FFFFFH is only the nearest choice.
- **Source:** [BCS/32_8086-reset-thrashing-mov-modulo-2.md](../BCS/32_8086-reset-thrashing-mov-modulo-2.md) · [image](../BCS/32_8086-reset-thrashing-mov-modulo-2.jpg)

## 8086–8087 coprocessor interface

### Q71 <sub>Q0131</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which is used to transfer an instruction from 8086 to 8087? (INT 3 / JMP / LOCK / ESC)

- **Printed answer:** (ঘ) ESC
- **Source:** [BCS/35_16qam-backpropagation-esc-ui-design.md](../BCS/35_16qam-backpropagation-esc-ui-design.md) · [image](../BCS/35_16qam-backpropagation-esc-ui-design.jpg)

## 8255 PPI modes

### Q25 <sub>Q0090</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which 8255 PPI mode allows handshake I/O? (Mode 0 / Mode 1 / Mode 2 / None)

- **Printed answer:** (খ) Mode 1 (strobed I/O)
- **Source:** [BCS/34_maximum-power-transfer-sql-8255-ppi.md](../BCS/34_maximum-power-transfer-sql-8255-ppi.md) · [image](../BCS/34_maximum-power-transfer-sql-8255-ppi.jpg)

## Assembly language

### Q19(d) <sub>Q0010</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

What is assembly language? Write its features. Write a program in assembly language to add and multiply two numbers.

- **Printed answer:** Low-level symbolic form of machine language (mnemonics, symbolic operands); x86 NASM program: mov eax,[n1]; add eax,[n2]; then imul eax,[n2]; exit via int 0x80.
- **Source:** [BCS/04_assembly-number-systems-boolean.md](../BCS/04_assembly-number-systems-boolean.md) · [image](../BCS/04_assembly-number-systems-boolean.jpg)

## Course outline: SE, AI, discrete math, microprocessors, architecture

### Outline p3 (Class 20-27) <sub>Q0003</sub>

*46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch) · Study note*

Coaching course outline, classes 20-27: software engineering (process, requirements, design, testing, COCOMO), AI (agents, FOL, search, NLP, expert systems), discrete mathematics (logic, sets, relations, counting, recurrences), microprocessor & interfacing (8086, interrupts, x86 memory management, 8255/8253/8259/8237), computer organization & architecture (ALU, control, cache, pipelining).

- **Source:** [BCS/12_course-outline-class-20-27.md](../BCS/12_course-outline-class-20-27.md) · [image](../BCS/12_course-outline-class-20-27.jpg)

## Data and address bus widths

### Q5 <sub>Q0188</sub>

*PGCB Assistant Engineer (CSE) (BUET) · 2021-09-30 · Written*

Give the data and address widths of an 8-bit and a 16-bit microprocessor.

- **Printed answer:** 8-bit: data 8, address 16; 16-bit: data 16, address 20 (8085 / 8086).
- **Source:** [BUET JOB/13_pattern-processor-widths-blacklist.md](../BUET%20JOB/13_pattern-processor-widths-blacklist.md) · [image](../BUET%20JOB/13_pattern-processor-widths-blacklist.jpg)

## Embedded System

### Viva p34 Q17 <sub>Q0769</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is an Embedded System?

- **Printed answer:** An Embedded System is a specialized computer system built into a device to perform a dedicated function, such as in ATMs, routers, or washing machines
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p34](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Interrupt enabling and interrupt processing

### Q3(c) <sub>Q0040</sub>

*38th BCS Written · 2018 · Written*

How can an interrupt be enabled? What are the steps that occur when an interrupt is processed?

- **Printed answer:** Enable through the IE register (EA bit D7 = 1 plus the individual enable bits, 8051-style). Processing: push flags/CS/IP, clear TF/IF, jump to the ISR, IRET pops CS/IP/flags, then the interrupted process resumes.
- **Source:** [BCS/15_pipelining-and-interrupt-enable.md](../BCS/15_pipelining-and-interrupt-enable.md) · [image](../BCS/15_pipelining-and-interrupt-enable.jpg); [BCS/25_ipv4-ipv6-addressing-classes.md](../BCS/25_ipv4-ipv6-addressing-classes.md) · [image](../BCS/25_ipv4-ipv6-addressing-classes.jpg)

## Interrupt types

### Q22 (sub-part not shown) - interrupts <sub>Q0018</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written*

Tail of an interrupt sub-part (stem on a missing page): types of software interrupts.

- **Printed answer:** Software interrupts are normal interrupts (caused by instructions) and exceptions (unplanned, e.g. divide by zero).
- **Source:** [BCS/01_interrupt-part2-mergesort.md](../BCS/01_interrupt-part2-mergesort.md) · [image](../BCS/01_interrupt-part2-mergesort.jpg)

## Microcontroller-based automatic street light

### Q10 <sub>Q0305</sub>

*DPDC Assistant Manager (ICT) (inferred from page order) · 2025-06-27 · Written*

Design an automatic street-light controller that turns lights on when ambient light falls below a threshold.

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## Microprocessor

### Viva p31 Q13 <sub>Q0753</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is a Microprocessor?

- **Printed answer:** A Microprocessor is an integrated circuit (IC) that contains the CPU on a single chip. It performs arithmetic, logic, and control operations
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p31](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Microprocessor vs microcontroller

### Q7 <sub>Q0273</sub>

*BUET MSc in CSE · 2026-10-03 · Written*

Differentiate a microprocessor and a microcontroller.

- **Source:** [BUET JOB/38_buet-msc-cse-questions-1-9.md](../BUET%20JOB/38_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/38_buet-msc-cse-questions-1-9.jpg); [BUET JOB/23_buet-msc-cse-questions-1-9.md](../BUET%20JOB/23_buet-msc-cse-questions-1-9.md) · [image](../BUET%20JOB/23_buet-msc-cse-questions-1-9.jpg)

## MOV instruction

### MCQ 34 <sub>Q0067</sub>

*paper not shown · MCQ*

MOV AX, BX: (a) copies AX to BX (b) copies BX to AX (c) erases both (d) is a wrong instruction.

- **Printed answer:** (b) copies content of BX to AX
- **Source:** [BCS/32_8086-reset-thrashing-mov-modulo-2.md](../BCS/32_8086-reset-thrashing-mov-modulo-2.md) · [image](../BCS/32_8086-reset-thrashing-mov-modulo-2.jpg)

## Sensor interfacing (gas leakage detection)

### Q12 <sub>Q0183</sub>

*paper not shown · Written*

Which signal can a sensor send to a microcontroller when it detects a gas leak?

- **Printed answer:** Block diagram only: MQ-6 gas sensor and flame sensor → Arduino Uno → buzzer.
- **Correction:** Does not name the signal: the MQ-6 module gives an analog voltage (AO → ADC pin) and a digital threshold output (DO high/low, usable as an interrupt) to the microcontroller.
- **Source:** [BUET JOB/05_gas-sensor-pgcb-trigger-xor-cache.md](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.md) · [image](../BUET%20JOB/05_gas-sensor-pgcb-trigger-xor-cache.jpg)
