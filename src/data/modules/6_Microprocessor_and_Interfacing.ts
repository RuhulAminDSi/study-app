import type { Module } from '../../types'

const m6: Module = {
  title: "6. Microprocessor and Interfacing",
  titleBn: "৬. মাইক্রোপ্রসেসর ও ইন্টারফেসিং",
  level: "Advanced",
  lessons: [
    {
      id: "mp1",
      title: "Introduction to Microprocessors, 8086/8088 Architecture & Programming",
      titleBn: "মাইক্রোপ্রসেসরের ভূমিকা, 8086/8088 আর্কিটেকচার ও প্রোগ্রামিং",
      content: `📌 INTRODUCTION TO MICROPROCESSOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A microprocessor is a central processing unit (CPU) on a single integrated circuit (IC) chip that executes instructions, performs calculations, and controls other parts of a computer system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Overview of Computer Architecture

Key Components:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ALU (Arithmetic     │ Performs arithmetic and logical operations  │
│ Logic Unit)         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Registers           │ Small, fast storage for temporary data      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Control Unit        │ Directs data flow and instruction execution │
├─────────────────────┼─────────────────────────────────────────────┤
│ Memory              │ Stores instructions and data (RAM, ROM)     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Input/Output (I/O)  │ Interfaces to communicate with peripherals  │
└─────────────────────┴─────────────────────────────────────────────┘

Instruction Cycle:
Fetch → Decode → Execute → Store

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Evolution of Microprocessors

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Generation          │ Year     │ Features / Example               │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ 1st Gen (4-bit)     │ 1971     │ Intel 4004                       │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ 2nd Gen (8-bit)     │ 1974     │ Intel 8080, 8085                 │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ 3rd Gen (16-bit)    │ 1978     │ Intel 8086/8088                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ 4th Gen (32-bit)    │ 1985     │ Intel 80386                      │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ 5th Gen (64-bit)    │ 1990s+   │ Intel Pentium, AMD x86-64        │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Microprocessor vs Microcontroller

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Microprocessor (MPU) │ Microcontroller (MCU)│
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Definition          │ CPU only             │ CPU + Memory + I/O   │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Applications        │ Computers, Servers   │ Embedded Systems,    │
│                     │                      │ IoT Devices          │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Integration         │ External memory/     │ Highly integrated    │
│                     │ peripherals needed   │                      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Cost                │ Higher               │ Lower                │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Example             │ Intel Core i7        │ Arduino (ATmega328)  │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 8086/8088 MICROPROCESSOR

Intel 8086: 16-bit microprocessor, introduced in 1978
Intel 8088: 8-bit external data bus version of 8086

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Basic Architecture of 8086

Internal Architecture:
┌─────────────────────────────────────────────────────────────────┐
│                     8086 Architecture                           │
├─────────────────────────┬───────────────────────────────────────┤
│   Bus Interface Unit    │        Execution Unit                 │
│        (BIU)            │           (EU)                        │
├─────────────────────────┼───────────────────────────────────────┤
│ • Instruction Queue     │ • ALU (Arithmetic Logic Unit)         │
│ • Segment Registers     │ • General Purpose Registers           │
│ • Instruction Pointer   │ • Flag Register                       │
│ • Address Generation    │ • Control Circuitry                   │
└─────────────────────────┴───────────────────────────────────────┘

Registers in 8086:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Register Type       │ Registers                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ General Purpose     │ AX, BX, CX, DX (can split into AH/AL, etc.)│
├─────────────────────┼─────────────────────────────────────────────┤
│ Segment Registers   │ CS (Code), DS (Data), SS (Stack), ES (Extra)│
├─────────────────────┼─────────────────────────────────────────────┤
│ Pointer & Index     │ SP (Stack Pointer), BP (Base Pointer),      │
│                     │ SI (Source Index), DI (Destination Index)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Instruction Pointer │ IP (Points to next instruction)            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Flags Register      │ Status and Control flags                   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Memory Segmentation

8086 has 1 MB addressable memory (20-bit address bus)

Physical Address = (Segment × 16) + Offset

Segments:
• Code Segment (CS): Stores instructions
• Data Segment (DS): Stores data
• Stack Segment (SS): Stores stack (function calls, local variables)
• Extra Segment (ES): Additional data storage

Example:
CS = 1234H, IP = 5678H
Physical Address = (1234H × 16) + 5678H = 12340H + 5678H = 179B8H

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Flags Register

Status Flags:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Flag                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ CF (Carry)          │ Carry from MSB in arithmetic                │
├─────────────────────┼─────────────────────────────────────────────┤
│ PF (Parity)         │ Even parity in lower 8 bits                │
├─────────────────────┼─────────────────────────────────────────────┤
│ AF (Auxiliary Carry)│ Carry from bit 3 (BCD operations)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ ZF (Zero)           │ Result is zero                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ SF (Sign)           │ Result is negative (MSB = 1)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ OF (Overflow)       │ Overflow in signed arithmetic              │
└─────────────────────┴─────────────────────────────────────────────┘

Control Flags:
• TF (Trap): Single-step mode for debugging
• IF (Interrupt): Enables/disabled interrupts
• DF (Direction): Direction for string operations (increment/decrement)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Addressing Modes

┌─────────────────────┬─────────────────────────────────────────────┐
│ Addressing Mode     │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Immediate           │ MOV AX, 5                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Register            │ MOV AX, BX                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Direct              │ MOV AX, [1234H]                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Register Indirect   │ MOV AX, [BX]                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Based               │ MOV AX, [BX+10H]                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Indexed             │ MOV AX, [SI+5]                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Based-Indexed       │ MOV AX, [BX+SI+8]                           │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Pins & Signals

8086 has 40 pins classified as:
• Data Bus (D0-D15): 16-bit data transfer
• Address Bus (A0-A19): 20-bit addressing
• Control Signals: RD, WR, ALE, READY, INTR, NMI
• Clock & Power: Vcc, Vss, CLK
• Status Signals: S0, S1, S2 (Bus status)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Single vs Multi-Processor Systems

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Single Processor    │ Only one 8086 CPU, controls all memory      │
│ System              │ and I/O                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multi-Processor     │ Multiple CPUs share memory and I/O          │
│ System              │ Uses bus arbitration to avoid conflicts     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 INSTRUCTION SET & ASSEMBLY LANGUAGE PROGRAMMING

Instruction Set Categories:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Category            │ Instructions                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data Transfer       │ MOV, XCHG, LEA                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Arithmetic          │ ADD, SUB, MUL, DIV, INC, DEC                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Logic               │ AND, OR, XOR, NOT, SHL, SHR                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Branch/Control      │ JMP, JE, JNE, CALL, RET                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Stack               │ PUSH, POP                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ String              │ MOVS, CMPS, LODS, STOS                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Flag Control        │ CLC, STC, CMC                               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Processor Control   │ NOP, HLT, WAIT                              │
└─────────────────────┴─────────────────────────────────────────────┘

Assembly Program Structure:
┌─────────────────────────────────────────────────────────────────┐
│ DATA SEGMENT                                                    │
│     num1 DB 10                                                  │
│     num2 DB 20                                                  │
│ DATA ENDS                                                       │
│                                                                 │
│ CODE SEGMENT                                                    │
│ START:                                                          │
│     MOV AL, num1    ; Load num1 into AL                         │
│     ADD AL, num2    ; Add num2 to AL                            │
│     HLT             ; Stop program                              │
│ CODE ENDS                                                       │
│     END START                                                   │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 TOOLS: ASSEMBLERS, DEBUGGERS, DEVELOPMENT SYSTEMS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Tool                │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Assembler           │ Converts assembly code to machine code      │
│ (MASM, TASM)        │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Debugger            │ Tests and troubleshoots code               │
│                     │ Step execution, breakpoints, memory dump    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Development System  │ Integrated environment (editor, assembler,  │
│ (EMU8086, IDE)      │ simulator, debugger)                        │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Microprocessor: CPU on a chip, executes instructions
• Evolution: 4-bit → 8-bit → 16-bit → 32-bit → 64-bit
• MPU vs MCU: CPU only vs CPU + Memory + I/O on chip
• 8086: 16-bit, segmented memory (CS, DS, SS, ES)
• Flags: Status (CF, ZF, SF, OF) and Control (IF, TF, DF)
• Addressing Modes: Immediate, Register, Direct, Indirect, etc.
• Instruction Set: Data transfer, arithmetic, logic, branch, stack, string
• Assembly: Human-readable mnemonics, structured as DATA/CODE segments
• Tools: Assemblers, Debuggers, Development Systems (EMU8086)`,
      contentBn: `📌 মাইক্রোপ্রসেসরের ভূমিকা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি মাইক্রোপ্রসেসর হল একটি একক ইন্টিগ্রেটেড সার্কিট (IC) চিপের উপর কেন্দ্রীয় প্রক্রিয়াকরণ ইউনিট (CPU) যা নির্দেশনা সম্পাদন করে, গণনা করে এবং কম্পিউটার সিস্টেমের অন্যান্য অংশ নিয়ন্ত্রণ করে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 মাইক্রোপ্রসেসরের বিবর্তন

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ প্রজন্ম             │ সাল      │ বৈশিষ্ট্য / উদাহরণ              │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ১ম প্রজন্ম (৪-বিট)  │ ১৯৭১     │ ইন্টেল ৪০০৪                     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ২য় প্রজন্ম (৮-বিট) │ ১৯৭৪     │ ইন্টেল ৮০৮০, ৮০৮৫               │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ৩য় প্রজন্ম (১৬-বিট)│ ১৯৭৮     │ ইন্টেল ৮০৮৬/৮০৮৮                │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ৪র্থ প্রজন্ম (৩২-বিট)│ ১৯৮৫    │ ইন্টেল ৮০৩৮৬                    │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ৫ম প্রজন্ম (৬৪-বিট) │ ১৯৯০+   │ ইন্টেল পেন্টিয়াম, AMD x86-64    │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 মাইক্রোপ্রসেসর বনাম মাইক্রোকন্ট্রোলার

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ বৈশিষ্ট্য           │ মাইক্রোপ্রসেসর       │ মাইক্রোকন্ট্রোলার    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ সংজ্ঞা              │ শুধু CPU             │ CPU + মেমোরি + I/O   │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ প্রয়োগ             │ কম্পিউটার, সার্ভার   │ এম্বেডেড সিস্টেম,    │
│                     │                      │ IoT ডিভাইস           │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ ইন্টিগ্রেশন         │ বাহ্যিক মেমোরি/      │ উচ্চ মাত্রায়        │
│                     │ পেরিফেরাল প্রয়োজন   │ সমন্বিত              │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ খরচ                 │ বেশি                 │ কম                   │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ উদাহরণ              │ ইন্টেল কোর i7       │ Arduino (ATmega328)  │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ সারাংশ
• মাইক্রোপ্রসেসর: চিপের উপর CPU
• বিবর্তন: ৪-বিট → ৮-বিট → ১৬-বিট → ৩২-বিট → ৬৪-বিট
• ৮০৮৬: ১৬-বিট, সেগমেন্টেড মেমোরি (CS, DS, SS, ES)
• ফ্ল্যাগ: স্ট্যাটাস (CF, ZF, SF, OF) ও কন্ট্রোল (IF, TF, DF)
• অ্যাড্রেসিং মোড: ইমিডিয়েট, রেজিস্টার, ডাইরেক্ট, ইনডাইরেক্ট ইত্যাদি
• নির্দেশনা সেট: ডেটা ট্রান্সফার, অ্যারিথমেটিক, লজিক, ব্রাঞ্চ, স্ট্যাক, স্ট্রিং
• অ্যাসেম্বলি: মানব-পাঠযোগ্য মেনিমোনিক, DATA/CODE সেগমেন্টে কাঠামোবদ্ধ
• টুলস: অ্যাসেম্বলার, ডিবাগার, ডেভেলপমেন্ট সিস্টেম (EMU8086)`,
      takeaways: [
        "Microprocessor: CPU on a chip, executes instructions",
        "Evolution: 4-bit → 8-bit → 16-bit → 32-bit → 64-bit",
        "MPU vs MCU: CPU only vs CPU + Memory + I/O on chip",
        "8086: 16-bit, segmented memory (CS, DS, SS, ES)",
        "Flags: Status (CF, ZF, SF, OF) and Control (IF, TF, DF)",
        "Addressing Modes: Immediate, Register, Direct, Indirect, etc.",
        "Assembly: Human-readable mnemonics, DATA/CODE segments"
      ],
      takeawaysBn: [
        "মাইক্রোপ্রসেসর: চিপের উপর CPU, নির্দেশনা সম্পাদন করে",
        "বিবর্তন: ৪-বিট → ৮-বিট → ১৬-বিট → ৩২-বিট → ৬৪-বিট",
        "MPU বনাম MCU: শুধু CPU বনাম CPU + মেমোরি + I/O চিপে",
        "৮০৮৬: ১৬-বিট, সেগমেন্টেড মেমোরি (CS, DS, SS, ES)",
        "ফ্ল্যাগ: স্ট্যাটাস (CF, ZF, SF, OF) ও কন্ট্রোল (IF, TF, DF)",
        "অ্যাড্রেসিং মোড: ইমিডিয়েট, রেজিস্টার, ডাইরেক্ট, ইনডাইরেক্ট ইত্যাদি",
        "অ্যাসেম্বলি: মানব-পাঠযোগ্য মেনিমোনিক, DATA/CODE সেগমেন্ট"
      ],
      level: "Advanced"
    },
    {
      id: "mp2",
      title: "Clock & Bus Controller, Memory & I/O Interfacing, 8255A PPI",
      titleBn: "ক্লক ও বাস কন্ট্রোলার, মেমোরি ও I/O ইন্টারফেসিং, 8255A PPI",
      content: `📌 CLOCK AND BUS CONTROLLER INTERFACING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Clock Generator

Purpose: Provides stable timing signals for synchronizing all microprocessor operations.

Functions:
• Generate clock pulses (square waves) at fixed frequency
• Synchronize instruction fetch, execution, memory access
• Determine instruction cycle time and system speed

For 8086 system: CLK signal drives both BIU and EU.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Bus Demultiplexer

Definition: Separates address and data lines when multiplexed to save pins.

Function in 8086:
• AD0–AD15 lines carry address and data
• First part of cycle: lines carry address
• Later part: same lines carry data
• Bus demultiplexer (8282/8283) isolates address for memory access

Benefit: Single set of pins performs multiple functions efficiently.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Bus Controller Interfacing

Purpose: Coordinates read/write operations and data transfer.

Key Functions:
1. Generate control signals: MEMR/MEMW, IOR/IOW
2. Bus arbitration in multiprocessor systems
3. Interfacing with slow peripherals

Component: 8288 Bus Controller in 8086 system

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 MEMORY INTERFACING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 SRAM Interfacing

SRAM (Static RAM): Volatile memory, stores data while power is supplied.

Interface with 8086:
• Connect address lines to memory address pins
• Data lines connect to CPU data bus
• Control signals: MEMR (Memory Read), MEMW (Memory Write)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 EEPROM Interfacing

EEPROM: Non-volatile, retains data without power.

Requires read/write control signals similar to SRAM.
Includes write enable (WE) and chip select (CS) signals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 TYPES OF I/O

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Parallel I/O        │ Transfers multiple bits simultaneously      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Programmed I/O      │ CPU repeatedly checks device status         │
│ (Polling)           │ (Software-based)                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Interrupt-Driven I/O│ Device notifies CPU via interrupt signal    │
├─────────────────────┼─────────────────────────────────────────────┤
│ DMA (Direct Memory  │ I/O transfers data directly to/from memory  │
│ Access)             │ without CPU intervention                    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 I/O Port Address Decoding

Purpose: Assign unique addresses to I/O devices.

Methods:
• Memory-mapped I/O: I/O device assigned memory addresses
• Isolated I/O (Port-mapped): Separate I/O instructions (IN, OUT)

Decoder selects the correct I/O device based on address lines.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 8255A Programmable Peripheral Interface (PPI)

Features:
• 3 × 8-bit ports: Port A, Port B, Port C
• Programmable in input/output mode
• Control Word sets mode of operation

Modes of 8255A:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Mode                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 0              │ Simple input/output                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 1              │ Handshake I/O (with strobe/acknowledge)     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 2              │ Bidirectional bus (Port A only)             │
└─────────────────────┴─────────────────────────────────────────────┘

8255A Block Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                        8255A PPI                                │
├─────────────────────────────────────────────────────────────────┤
│  Data Bus  ←→  Port A  →  I/O Lines (PA0-PA7)                  │
│  (D0-D7)      Port B  →  I/O Lines (PB0-PB7)                   │
│              Port C  →  I/O Lines (PC0-PC7)                     │
│                                                                 │
│  Control ←→ Control Word Register                               │
│  Signals                                                        │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INTERFACE EXAMPLES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Device              │ Interface Concept                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Keyboard Matrix     │ Rows and columns scanned via I/O ports;     │
│                     │ key press detected by row-col intersection │
├─────────────────────┼─────────────────────────────────────────────┤
│ LCD/7-Segment       │ Data/Control lines connected to ports;      │
│ Display             │ CPU sends ASCII/data codes to display       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Printer             │ Handshake lines for busy/ready; data via    │
│                     │ parallel port                               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Stepper Motor       │ Step sequence generated by CPU via output   │
│                     │ port; controls motor rotation               │
├─────────────────────┼─────────────────────────────────────────────┤
│ A/D Converter       │ Analog input converted to digital; CPU      │
│                     │ reads via port or interrupt                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ D/A Converter       │ Digital data from CPU converted to analog   │
│                     │ signal for actuator control                 │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Clock Generator: Provides timing synchronization
• Bus Demultiplexer: Separates address/data lines
• Bus Controller: Generates control signals, bus arbitration
• SRAM: Volatile, EEPROM: Non-volatile memory
• I/O Types: Parallel, Programmed (polling), Interrupt-driven, DMA
• 8255A PPI: 3 ports, programmable modes (0,1,2)
• Devices: Keyboard matrix, LCD/7-segment, printer, stepper motor, ADC/DAC`,
      contentBn: `📌 ক্লক ও বাস কন্ট্রোলার ইন্টারফেসিং

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ক্লক জেনারেটর

উদ্দেশ্য: সমস্ত মাইক্রোপ্রসেসর অপারেশন সিঙ্ক্রোনাইজ করার জন্য স্থিতিশীল টাইমিং সিগন্যাল প্রদান।

ফাংশন:
• স্থির ফ্রিকোয়েন্সিতে ক্লক পালস তৈরি
• নির্দেশনা ফেচ, এক্সিকিউশন, মেমোরি অ্যাক্সেস সিঙ্ক্রোনাইজ
• নির্দেশনা চক্র সময় এবং সিস্টেম গতি নির্ধারণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 বাস ডিমাল্টিপ্লেক্সার

সংজ্ঞা: পিন বাঁচাতে মাল্টিপ্লেক্সড হলে অ্যাড্রেস ও ডেটা লাইন আলাদা করে।

৮০৮৬-এ ফাংশন:
• AD0–AD15 লাইন অ্যাড্রেস ও ডেটা বহন করে
• চক্রের প্রথম অংশে: লাইন অ্যাড্রেস বহন করে
• পরবর্তী অংশে: একই লাইন ডেটা বহন করে
• বাস ডিমাল্টিপ্লেক্সার (৮২৮২/৮২৮৩) মেমোরি অ্যাক্সেসের জন্য অ্যাড্রেস আলাদা করে

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 বাস কন্ট্রোলার ইন্টারফেসিং

উদ্দেশ্য: রিড/রাইট অপারেশন এবং ডেটা ট্রান্সফার সমন্বয় করে।

মূল ফাংশন:
১. কন্ট্রোল সিগন্যাল তৈরি: MEMR/MEMW, IOR/IOW
২. মাল্টিপ্রসেসর সিস্টেমে বাস আর্বিট্রেশন
৩. ধীর পেরিফেরালের সাথে ইন্টারফেসিং

উপাদান: ৮২৮৮ বাস কন্ট্রোলার

✅ সারাংশ
• ক্লক জেনারেটর: টাইমিং সিঙ্ক্রোনাইজেশন প্রদান
• বাস ডিমাল্টিপ্লেক্সার: অ্যাড্রেস/ডেটা লাইন আলাদা করে
• বাস কন্ট্রোলার: কন্ট্রোল সিগন্যাল তৈরি, বাস আর্বিট্রেশন
• SRAM: ভোলাটাইল, EEPROM: নন-ভোলাটাইল মেমোরি
• I/O প্রকার: প্যারালেল, প্রোগ্রামড, ইন্টারাপ্ট-ড্রিভেন, DMA
• ৮২৫৫এ পিপিআই: ৩টি পোর্ট, প্রোগ্রামেবল মোড (০,১,২)
• ডিভাইস: কীবোর্ড ম্যাট্রিক্স, LCD/৭-সেগমেন্ট, প্রিন্টার, স্টেপার মোটর, ADC/DAC`,
      takeaways: [
        "Clock Generator: Provides timing synchronization",
        "Bus Demultiplexer: Separates address/data lines",
        "Bus Controller: Generates control signals, bus arbitration",
        "SRAM: Volatile, EEPROM: Non-volatile memory",
        "I/O Types: Parallel, Programmed (polling), Interrupt-driven, DMA",
        "8255A PPI: 3 ports, programmable modes (0,1,2)",
        "Devices: Keyboard matrix, LCD/7-segment, printer, stepper motor, ADC/DAC"
      ],
      takeawaysBn: [
        "ক্লক জেনারেটর: টাইমিং সিঙ্ক্রোনাইজেশন প্রদান",
        "বাস ডিমাল্টিপ্লেক্সার: অ্যাড্রেস/ডেটা লাইন আলাদা করে",
        "বাস কন্ট্রোলার: কন্ট্রোল সিগন্যাল তৈরি, বাস আর্বিট্রেশন",
        "SRAM: ভোলাটাইল, EEPROM: নন-ভোলাটাইল মেমোরি",
        "I/O প্রকার: প্যারালেল, প্রোগ্রামড, ইন্টারাপ্ট-ড্রিভেন, DMA",
        "৮২৫৫এ পিপিআই: ৩টি পোর্ট, প্রোগ্রামেবল মোড (০,১,২)",
        "ডিভাইস: কীবোর্ড ম্যাট্রিক্স, LCD/৭-সেগমেন্ট, প্রিন্টার, স্টেপার মোটর, ADC/DAC"
      ],
      level: "Advanced"
    },
    {
      id: "mp3",
      title: "8254 Timer, Serial I/O, RS232, 8251 USART",
      titleBn: "৮২৫৪ টাইমার, সিরিয়াল I/O, RS232, ৮২৫১ USART",
      content: `📌 8254 PROGRAMMABLE INTERVAL TIMER (PIT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Features of 8254 PIT:
• 3 independent 16-bit counters/timers (Counter 0, 1, 2)
• 6 modes of operation
• Input/Output Pins: CLK (clock), GATE (enable/disable), OUT (output)
• Control Word Register: Configures counter mode, read/write

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Modes of 8254:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Mode                │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 0              │ Interrupt on terminal count (simple delay)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 1              │ Programmable one-shot (single pulse)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 2              │ Rate generator (periodic pulses)            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 3              │ Square wave generator                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 4              │ Software triggered strobe                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mode 5              │ Hardware triggered strobe                   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Interfacing with Microprocessor (8086):
• Data Bus (D0-D7): Bidirectional connection with CPU
• Control Signals: RD, WR, CS
• Address Lines (A0, A1): Select counter 0, 1, or 2
• CLK/GATE/OUT: Connect to timers or devices

Example Applications:
• Counter 0: Generate 1 ms time delay
• Counter 1: Pulse for stepper motor
• Counter 2: Square wave for speaker tone

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Timing Applications:
• Generating precise delays for devices
• Event counting (input pulses from sensors)
• Frequency generation (square waves for clocks/motors)
• Pulse width modulation for controlling motors or LEDs
• Measuring time intervals in data acquisition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 SERIAL I/O INTERFACE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Serial Communication:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Asynchronous        │ No shared clock; start/stop bits per byte   │
│ Communication       │ Requires agreed baud rate                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Synchronous         │ Clock-synchronized; no start/stop bits      │
│ Communication       │ Higher speed, continuous data stream        │
└─────────────────────┴─────────────────────────────────────────────┘

Asynchronous Frame Format:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│Start│ D0  │ D1  │ D2  │ D3  │ D4  │ D5  │ D6  │ D7  │Parity│Stop │
│Bit  │     │     │     │     │     │     │     │     │ Bit  │ Bit │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 EIA RS-232 Physical Standard

RS-232 Features:
• Voltage levels: ±3V to ±15V
  - Logic 1 (Mark) = Negative voltage (-3V to -15V)
  - Logic 0 (Space) = Positive voltage (+3V to +15V)
• Connector: DB9 or DB25
• Signal lines: TXD, RXD, RTS, CTS, DTR, DSR, GND

Applications: Serial communication for PC modems, serial printers, mice

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 8251 USART (Universal Synchronous/Asynchronous Receiver Transmitter)

Features:
• Configurable for synchronous or asynchronous mode
• Handles serial-to-parallel and parallel-to-serial conversion
• Generates interrupts when data is ready or sent
• Registers: Mode register, control register, status register, data register

Functions:
1. Transmit/receive data serially
2. Frame data with start/stop bits (asynchronous)
3. Synchronize with clock (synchronous)
4. Interface with CPU via data bus and control signals

8251 USART Block Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                        8251 USART                               │
├─────────────────────────────────────────────────────────────────┤
│                     ┌─────────────┐                             │
│  CPU Data Bus ←→    │ Transmitter │ → TXD (Serial Out)          │
│  (D0-D7)            │ Receiver    │ ← RXD (Serial In)           │
│                     └─────────────┘                             │
│                                                                 │
│  Control ←→ Control/Status Registers                            │
│  Signals                                                        │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Serial I/O Device Interfacing:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Device              │ Interface Method                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mouse               │ Asynchronous serial, RS-232, 9600-115200    │
│                     │ baud                                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Modem               │ Asynchronous serial, RS-232, standard baud  │
│                     │ rates                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ PC Keyboard         │ Serial or matrix + controller; scan codes   │
│                     │ sent to CPU                                 │
└─────────────────────┴─────────────────────────────────────────────┘

General Interfacing Steps:
1. Connect TX/RX lines between CPU and device
2. Configure baud rate/clock in programmable interface (8251)
3. Use interrupts or polling to read/write data
4. Handle framing (start/stop bits) in asynchronous mode

✅ SUMMARY
• 8254 PIT: 3 counters, 6 modes (delay, pulse, square wave, rate gen)
• Timing Applications: Delays, event counting, PWM, frequency gen
• Serial I/O: Asynchronous (start/stop bits) vs Synchronous (clock)
• RS-232: Voltage levels (±3V to ±15V), DB9/DB25 connector
• 8251 USART: Configurable for async/sync, serial-parallel conversion
• Devices: Mouse, modem, PC keyboard via serial interface`,
      contentBn: `📌 ৮২৫৪ প্রোগ্রামেবল ইন্টারভাল টাইমার (PIT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

৮২৫৪ PIT-এর বৈশিষ্ট্য:
• ৩টি স্বাধীন ১৬-বিট কাউন্টার/টাইমার (কাউন্টার ০, ১, ২)
• ৬টি অপারেশন মোড
• ইনপুট/আউটপুট পিন: CLK (ক্লক), GATE (সক্ষম/অক্ষম), OUT (আউটপুট)
• কন্ট্রোল ওয়ার্ড রেজিস্টার: কাউন্টার মোড কনফিগার করে

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

৮২৫৪-এর মোড:

┌─────────────────────┬─────────────────────────────────────────────┐
│ মোড                 │ ফাংশন                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ০               │ টার্মিনাল কাউন্টে ইন্টারাপ্ট (সরল বিলম্ব)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ১               │ প্রোগ্রামেবল ওয়ান-শট (একক পালস)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ২               │ রেট জেনারেটর (পর্যায়ক্রমিক পালস)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ৩               │ বর্গ তরঙ্গ জেনারেটর                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ৪               │ সফটওয়্যার ট্রিগার্ড স্ট্রোব                │
├─────────────────────┼─────────────────────────────────────────────┤
│ মোড ৫               │ হার্ডওয়্যার ট্রিগার্ড স্ট্রোব               │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• ৮২৫৪ PIT: ৩টি কাউন্টার, ৬টি মোড (বিলম্ব, পালস, বর্গ তরঙ্গ)
• টাইমিং অ্যাপ্লিকেশন: বিলম্ব, ইভেন্ট কাউন্টিং, PWM, ফ্রিকোয়েন্সি জেনারেশন
• সিরিয়াল I/O: অ্যাসিঙ্ক্রোনাস (স্টার্ট/স্টপ বিট) বনাম সিঙ্ক্রোনাস (ক্লক)
• RS-232: ভোল্টেজ স্তর (±৩V থেকে ±১৫V), DB9/DB25 কানেক্টর
• ৮২৫১ USART: অ্যাসিঙ্ক/সিঙ্কের জন্য কনফিগারেবল, সিরিয়াল-প্যারালেল রূপান্তর
• ডিভাইস: মাউস, মডেম, পিসি কীবোর্ড সিরিয়াল ইন্টারফেসের মাধ্যমে`,
      takeaways: [
        "8254 PIT: 3 counters, 6 modes (delay, pulse, square wave, rate generator)",
        "Timing Applications: Delays, event counting, PWM, frequency generation",
        "Serial I/O: Asynchronous (start/stop bits) vs Synchronous (clock)",
        "RS-232: Voltage levels (±3V to ±15V), DB9/DB25 connector",
        "8251 USART: Configurable for async/sync, serial-parallel conversion",
        "Devices: Mouse, modem, PC keyboard via serial interface"
      ],
      takeawaysBn: [
        "৮২৫৪ PIT: ৩টি কাউন্টার, ৬টি মোড (বিলম্ব, পালস, বর্গ তরঙ্গ, রেট জেনারেটর)",
        "টাইমিং অ্যাপ্লিকেশন: বিলম্ব, ইভেন্ট কাউন্টিং, PWM, ফ্রিকোয়েন্সি জেনারেশন",
        "সিরিয়াল I/O: অ্যাসিঙ্ক্রোনাস (স্টার্ট/স্টপ বিট) বনাম সিঙ্ক্রোনাস (ক্লক)",
        "RS-232: ভোল্টেজ স্তর (±৩V থেকে ±১৫V), DB9/DB25 কানেক্টর",
        "৮২৫১ USART: অ্যাসিঙ্ক/সিঙ্কের জন্য কনফিগারেবল, সিরিয়াল-প্যারালেল রূপান্তর",
        "ডিভাইস: মাউস, মডেম, পিসি কীবোর্ড সিরিয়াল ইন্টারফেসের মাধ্যমে"
      ],
      level: "Advanced"
    },
    {
      id: "mp4",
      title: "Interrupts, 8259A PIC, DMA, 8237 DMAC",
      titleBn: "ইন্টারাপ্ট, ৮২৫৯এ PIC, DMA, ৮২৩৭ DMAC",
      content: `📌 INTERRUPTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A signal that temporarily halts CPU execution to attend to an urgent task, then resumes the original program.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Types of Interrupts

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Software Interrupts │ Triggered by executing INT instruction      │
│                     │ Used for system calls, debugging            │
│                     │ Example: INT 21h in DOS                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hardware Interrupts │ Generated by external devices               │
│                     │ Signals CPU that device needs attention     │
│                     │ Example: IRQ0 (timer), IRQ1 (keyboard)      │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Interrupt Driven I/O

Steps:
1. Device raises interrupt request (INTR)
2. CPU acknowledges interrupt
3. CPU executes Interrupt Service Routine (ISR)
4. CPU resumes original program

Benefit: Eliminates polling, saves CPU cycles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Interrupt Vectors and Vector Table

Interrupt Vector: Address of the ISR for a specific interrupt

Interrupt Vector Table (IVT): Stores vector addresses for all interrupts

8086 IVT: Starts at 0000:0000
• 256 vectors × 4 bytes = 1 KB

Vector Table Entry:
┌───────────────┬───────────────┬─────────────────────────────────┐
│ Offset (2 bytes) │ Segment (2 bytes) │ Address of ISR              │
└───────────────┴───────────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Interrupt Processing Steps (8086)

1. CPU finishes current instruction
2. Pushes FLAGS, CS, IP on stack
3. Loads CS:IP of ISR from vector table
4. Executes ISR
5. Executes IRET to restore previous state and resume program

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 8259A Programmable Interrupt Controller (PIC)

Functions:
• Manages multiple hardware interrupts (up to 8)
• Prioritizes interrupts
• Sends interrupt vector to CPU
• Masking of interrupts (disable specific interrupts)

Connections:
• CPU INTR/INTA pins
• Interrupt request lines (IR0–IR7) from peripherals

8259A Block Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                        8259A PIC                                │
├─────────────────────────────────────────────────────────────────┤
│  IR0 ─┐                                                         │
│  IR1 ─┤    ┌─────────────┐                                      │
│  IR2 ─┼───→│ Interrupt   │───→ INTR to CPU                      │
│  IR3 ─┤    │ Controller  │                                      │
│  IR4 ─┤    └─────────────┘                                      │
│  IR5 ─┤         ↑                                               │
│  IR6 ─┤         │                                               │
│  IR7 ─┘    INTA from CPU                                        │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 DIRECT MEMORY ACCESS (DMA)

Definition: Allows peripheral devices to transfer data directly to/from memory without CPU intervention.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 8237 DMA Controller (DMAC)

Features:
• 4 independent channels for data transfer
• Handles memory read/write automatically
• CPU is free for other tasks

Operation Steps:
1. CPU programs DMA controller with source, destination, byte count
2. Device requests DMA transfer (DRQ)
3. DMA controller takes control of system bus (HOLD/HLDA)
4. Transfers data directly to memory
5. Generates DMA interrupt after transfer completion

8237 DMAC Block Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                        8237 DMAC                                │
├─────────────────────────────────────────────────────────────────┤
│  DRQ0 ─┐                                                       │
│  DRQ1 ─┤    ┌─────────────┐                                    │
│  DRQ2 ─┼───→│ DMA         │───→ HOLD to CPU                     │
│  DRQ3 ─┘    │ Controller  │←─── HLDA from CPU                   │
│             └─────────────┘                                    │
│                                                                 │
│  DACK0─┐                                                        │
│  DACK1─┤    ┌─────────────┐                                    │
│  DACK2─┼───→│ Address     │───→ Address Bus                     │
│  DACK3─┘    │ Generator   │                                    │
│             └─────────────┘                                    │
└─────────────────────────────────────────────────────────────────┘

Benefits of DMA:
• High-speed data transfer
• Reduces CPU overhead
• CPU can perform other tasks during transfer

Applications:
• Disk controllers (hard drive, floppy)
• Sound cards
• Graphics controllers
• High-speed data acquisition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Points                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Interrupts          │ CPU temporarily stops to handle urgent tasks│
├─────────────────────┼─────────────────────────────────────────────┤
│ Software Interrupts │ Triggered by INT instruction                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hardware Interrupts │ Triggered by peripherals (keyboard, timer)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ IVT                 │ Stores ISR addresses for each interrupt     │
├─────────────────────┼─────────────────────────────────────────────┤
│ 8259A PIC           │ Manages multiple interrupts, prioritization │
├─────────────────────┼─────────────────────────────────────────────┤
│ DMA                 │ Direct memory access without CPU            │
├─────────────────────┼─────────────────────────────────────────────┤
│ 8237 DMAC           │ 4 channels, HOLD/HLDA bus control           │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Interrupts: CPU temporarily halts for urgent tasks (software/hardware)
• Interrupt Driven I/O: Device notifies CPU, no polling needed
• IVT: 256 vectors × 4 bytes, stores ISR addresses
• 8259A PIC: Manages up to 8 interrupts, prioritization, masking
• DMA: Direct memory access without CPU intervention
• 8237 DMAC: 4 independent channels, HOLD/HLDA bus control
• Applications: Disk controllers, sound cards, graphics, data acquisition`,
      contentBn: `📌 ইন্টারাপ্ট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি সংকেত যা জরুরি কাজে মনোযোগ দেওয়ার জন্য CPU এক্সিকিউশন অস্থায়ীভাবে থামায়, তারপর মূল প্রোগ্রাম পুনরায় শুরু করে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ইন্টারাপ্টের প্রকার

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ সফটওয়্যার         │ INT নির্দেশনা দ্বারা ট্রিগার হয়             │
│ ইন্টারাপ্ট         │ সিস্টেম কল, ডিবাগিংয়ের জন্য ব্যবহৃত        │
├─────────────────────┼─────────────────────────────────────────────┤
│ হার্ডওয়্যার       │ বাহ্যিক ডিভাইস দ্বারা উৎপন্ন                 │
│ ইন্টারাপ্ট         │ ডিভাইসের মনোযোগ প্রয়োজন CPU-কে সংকেত দেয়  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ইন্টারাপ্ট ভেক্টর এবং ভেক্টর টেবিল

ইন্টারাপ্ট ভেক্টর: একটি নির্দিষ্ট ইন্টারাপ্টের জন্য ISR-এর অ্যাড্রেস

ইন্টারাপ্ট ভেক্টর টেবিল (IVT): সব ইন্টারাপ্টের জন্য ভেক্টর অ্যাড্রেস সংরক্ষণ করে

৮০৮৬ IVT: ০০০০:০০০০ থেকে শুরু
• ২৫৬টি ভেক্টর × ৪ বাইট = ১ কেবি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৮২৫৯এ প্রোগ্রামেবল ইন্টারাপ্ট কন্ট্রোলার (PIC)

ফাংশন:
• একাধিক হার্ডওয়্যার ইন্টারাপ্ট পরিচালনা করে (৮টি পর্যন্ত)
• ইন্টারাপ্টকে অগ্রাধিকার দেয়
• CPU-তে ইন্টারাপ্ট ভেক্টর পাঠায়
• ইন্টারাপ্ট মাস্কিং (নির্দিষ্ট ইন্টারাপ্ট অক্ষম করে)

সংযোগ:
• CPU INTR/INTA পিন
• পেরিফেরাল থেকে ইন্টারাপ্ট রিকোয়েস্ট লাইন (IR0–IR7)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ডাইরেক্ট মেমোরি অ্যাক্সেস (DMA)

সংজ্ঞা: পেরিফেরাল ডিভাইসকে CPU-র হস্তক্ষেপ ছাড়াই সরাসরি মেমোরিতে ডেটা স্থানান্তরের অনুমতি দেয়।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৮২৩৭ DMA কন্ট্রোলার (DMAC)

বৈশিষ্ট্য:
• ডেটা ট্রান্সফারের জন্য ৪টি স্বাধীন চ্যানেল
• স্বয়ংক্রিয়ভাবে মেমোরি রিড/রাইট পরিচালনা করে
• CPU অন্যান্য কাজের জন্য মুক্ত থাকে

অপারেশন ধাপ:
১. CPU DMA কন্ট্রোলারে উৎস, গন্তব্য, বাইট কাউন্ট প্রোগ্রাম করে
২. ডিভাইস DMA ট্রান্সফার অনুরোধ করে (DRQ)
৩. DMA কন্ট্রোলার সিস্টেম বাসের নিয়ন্ত্রণ নেয় (HOLD/HLDA)
৪. সরাসরি মেমোরিতে ডেটা ট্রান্সফার করে
৫. ট্রান্সফার সম্পন্ন হলে DMA ইন্টারাপ্ট তৈরি করে

✅ সারাংশ
• ইন্টারাপ্ট: জরুরি কাজের জন্য CPU অস্থায়ীভাবে থামে
• ইন্টারাপ্ট ড্রিভেন I/O: ডিভাইস CPU-কে সংকেত দেয়, পোলিং প্রয়োজন হয় না
• IVT: ২৫৬টি ভেক্টর × ৪ বাইট, ISR অ্যাড্রেস সংরক্ষণ করে
• ৮২৫৯এ PIC: ৮টি ইন্টারাপ্ট পরিচালনা করে, অগ্রাধিকার, মাস্কিং
• DMA: CPU হস্তক্ষেপ ছাড়াই সরাসরি মেমোরি অ্যাক্সেস
• ৮২৩৭ DMAC: ৪টি স্বাধীন চ্যানেল, HOLD/HLDA বাস নিয়ন্ত্রণ`,
      takeaways: [
        "Interrupts: CPU temporarily halts for urgent tasks (software/hardware)",
        "Interrupt Driven I/O: Device notifies CPU, no polling needed",
        "IVT: 256 vectors × 4 bytes, stores ISR addresses at 0000:0000",
        "8259A PIC: Manages up to 8 interrupts, prioritization, masking",
        "DMA: Direct memory access without CPU intervention",
        "8237 DMAC: 4 independent channels, HOLD/HLDA bus control",
        "Applications: Disk controllers, sound cards, graphics, data acquisition"
      ],
      takeawaysBn: [
        "ইন্টারাপ্ট: জরুরি কাজের জন্য CPU অস্থায়ীভাবে থামে (সফটওয়্যার/হার্ডওয়্যার)",
        "ইন্টারাপ্ট ড্রিভেন I/O: ডিভাইস CPU-কে সংকেত দেয়, পোলিং প্রয়োজন হয় না",
        "IVT: ২৫৬টি ভেক্টর × ৪ বাইট, ০০০০:০০০০-এ ISR অ্যাড্রেস সংরক্ষণ করে",
        "৮২৫৯এ PIC: ৮টি ইন্টারাপ্ট পরিচালনা করে, অগ্রাধিকার, মাস্কিং",
        "DMA: CPU হস্তক্ষেপ ছাড়াই সরাসরি মেমোরি অ্যাক্সেস",
        "৮২৩৭ DMAC: ৪টি স্বাধীন চ্যানেল, HOLD/HLDA বাস নিয়ন্ত্রণ",
        "অ্যাপ্লিকেশন: ডিস্ক কন্ট্রোলার, সাউন্ড কার্ড, গ্রাফিক্স, ডেটা অ্যাকুইজিশন"
      ],
      level: "Advanced"
    }
  ]
}

export const module6 = m6