# COMPACT IT Written (Previous Exam Questions) — Pipelining complications and enabling/processing an interrupt (Q c)

- **Source image:** `15_pipelining-and-interrupt-enable.jpg` (original file name `489959595_1232700955525483_6071397402699304377_n.jpg`)
- **Page:** 15 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Written — Previous Exam Questions" job-solution sheet)
- **Exam date:** not shown
- **Marks:** not shown on this page

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Written — Previous Exam Questions", footer "COMPACT IT Written").
- The opening paragraph is a continuation of a preceding sub-part answer about deep pipelining / conditional branch complications.
- Part (c) has no parent question number visible on this page.
- The Interrupt Enable Register is printed as a bit-field table with no bit numbers; reproduced as printed without adding bit indices.
- Note a wording slip in the printed source: "previos values"; preserved as printed.
- No handwritten marginalia on this page.

## Content

One of the major complications with deep pipelining is when a conditional branch instruction is being executed – due to the fact that the processor will not be able to determine the location of the next instruction, therefore it has to wait for the branch instruction to finish and the whole pipeline may need to be flushed as a result. If a program has many conditional branch instructions, pipelining could have a negative effect on the overall performance. To alleviate this problem, branch prediction can be used, but this too can have a negative effect if the branches are predicted wrongly.

**c) How does an interrupt can be enabled? What are the steps that occur when an interrupt is processed?**

**Answer:**

The interrupts must be enabled using software in order for the microcontroller to respond to those interrupts. IE (interrupt enable) register is responsible for enabling and disabling the interrupt. IE is a bit addressable register.

**Interrupt Enable Register**

| EA | - | ET2 | ES | ET1 | EX1 | ET0 | EX0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

- EA – Global enable/disable.
- - – Undefined.
- ET2 – Enable Timer 2 interrupt.
- ES – Enable Serial port interrupt.
- ET1 – Enable Timer 1 interrupt.
- EX1 – Enable External 1 interrupt.
- ET0 – Enable Timer 0 interrupt.
- EX0 – Enable External 0 interrupt.

**To enable an interrupt, we take the following steps:**

- Bit D7 of the IE register (EA) must be high to allow the rest of register to take effect.
- If EA = 1, interrupts will be enabled and will be responded to, if their corresponding bits in IE are high. If EA = 0, no interrupts will respond, even if their associated pins in the IE register are high.

**The interrupt handler will do the following steps:**

- The contents of flag register the CS and IP are pushed on to the stack.
- To disable single steps and INTR interrupts the TF and IF are cleared.
- The program then jumps to the beginning or starting address of ISS.
- When the IRET executes last line that are also ISS last line the CS and IP flag contents are popped from stack and placed in appropriate registers.
- Once the flags are restored then Tf and IF values are also restored to their previos values.
