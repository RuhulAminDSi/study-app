# COMPACT IT Written (Previous Exam Questions) — Pipelining: definition, stages, and non-pipelined vs pipelined CPU

- **Source image:** `17_pipelining-non-pipelined-comparison.jpg` (original file name `490076950_1232701125525466_7277903507322686666_n.jpg`)
- **Page:** 17 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Written — Previous Exam Questions" job-solution sheet)
- **Exam date:** not shown
- **Marks:** not shown on this page

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Written — Previous Exam Questions", footer "COMPACT IT Written").
- The page opens mid-answer: it is a continuation of a sub-part (b) answer on pipelining; the question stem is on the preceding page.
- The two comparison diagrams (Non-Pipelined and Pipelined occupancy grids) are printed graphics; their visible labels and cell markings are described below rather than reproduced pixel-exactly.
- No handwritten marginalia on this page.

## Content

*[Continuation of a preceding sub-part answer on pipelining]*

Pipelining is the process of accumulating instruction from the processor through a pipeline. It allows storing and executing instructions in an orderly process. It is also known as pipeline processing. It is divided into 2 categories:

- Arithmetic Pipeline
- Instruction Pipeline

Pipelining is a technique used to improve the execution throughput of a CPU by using the processor resources in a more efficient manner. The basic idea is to split the processor instructions into a series of small independent stages. Each stage is designed to perform a certain part of the instruction. At a very basic level, these stages can be broken down into:

- **Fetch Unit** Fetch an instruction from memory
- **Decode Unit** Decode the instruction be executed
- **Execute Unit** Execute the instruction
- **Write Unit** Write the result back to register or memory

*[Diagram 1 — "Non-Pipelined"]* Grid with rows labelled Instruction / Fetch / Decode / Execute / Write / Clock and clock columns numbered 1 2 3 4 5 6 7 8. Instruction 1 is fetched at clock 1 and instruction 2 at clock 5; each instruction's Fetch → Decode → Execute → Write occupies four consecutive clocks with the other rows idle in between.

*[Diagram 2 — "Pipelined"]* Grid with rows labelled Instruction / Fetch / Decode / Execute / Write / Clock and clock columns numbered 1 2 3 4 5. Instruction 1 and instruction 2 each occupy four consecutive clocks, staggered by one clock so that a different stage works each cycle.

There will be a dedicated CPU module for each of the stages mentioned above.

On a non-pipelined CPU, when an instruction is being processed at a particular stage, the other stages are at an idle state – which is very inefficient. If you look at the diagram, when the 1ˢᵗ instruction is being decoded, the Fetch, Execute and Write Units of the CPU are not being used and it takes 8 clock cycles to execute the 2 instructions.

On the other hand, on a pipelined CPU, all the stages work in parallel. When the 1ˢᵗ instruction is being decoded by the Decoder Unit, the 2ⁿᵈ instruction is being fetched by the Fetch Unit. It only takes 5 clock cycles to execute 2 instructions on a pipelined CPU.

Note that increasing the number of stages in the pipeline will not always result in an increase of the execution throughput. On a non-pipelined CPU, an instruction could only take 3 cycles, but on a pipelined CPU it could take 4 cycles because of the different stages involved. Therefore, a single instruction might require more clock cycles to execute on a pipelined CPU. But the time taken to complete the execution of multiple instructions gets faster in pipelined CPUs.
