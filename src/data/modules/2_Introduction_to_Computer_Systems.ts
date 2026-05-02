import type { Module } from '../../types'

const m2: Module = {
  title: "2. Introduction to Computer Systems",
  titleBn: "২. কম্পিউটার সিস্টেমের পরিচিতি",
  level: "Beginner",
  lessons: [
    {
      id: "cs1",
      title: "Introduction to Computations & History of Computing Devices",
      titleBn: "গণনার পরিচিতি ও গণনা যন্ত্রের ইতিহাস",
      content: `📌 INTRODUCTION TO COMPUTATIONS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Computation is the process of solving problems, performing calculations, or processing information using a well-defined set of rules or instructions.

Key Components:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Input               │ Data provided to the computation           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Process             │ Operations, rules, or algorithms applied   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Output              │ Result produced by the computation         │
└─────────────────────┴─────────────────────────────────────────────┘

Formula: Computation = Input → Algorithm → Output

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Types of Computation

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Exact Computation   │ Produces precise, deterministic results    │
│                     │ Example: 5 × 7 = 35                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Approximate         │ Results close to exact value               │
│ Computation         │ Example: Numerical solutions to equations  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Symbolic            │ Manipulates symbols or expressions         │
│ Computation         │ Example: Simplifying algebraic expressions │
├─────────────────────┼─────────────────────────────────────────────┤
│ Logical/Boolean     │ Uses true/false or yes/no values           │
│ Computation         │ Example: Decision-making in algorithms     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Models of Computation

┌─────────────────────┬─────────────────────────────────────────────┐
│ Model               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Turing Machine      │ Abstract model defining what problems are   │
│                     │ computable                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Finite Automata     │ Computation with limited memory, used in    │
│                     │ pattern recognition                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Lambda Calculus     │ Mathematical model for defining functions   │
│                     │ and transformations                         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 EARLY HISTORY OF COMPUTING DEVICES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Prehistoric & Ancient Tools

┌─────────────────────┬─────────────────────────────────────────────┐
│ Device              │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tally Sticks        │ Marking notches to count objects           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Quipus (Inca)       │ Knotted strings for numerical recording    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Abacus (c. 2400 BCE)│ Early mechanical aid for arithmetic using   │
│                     │ beads on rods                               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Mechanical Computation

┌─────────────────────┬─────────────────────────────────────────────┐
│ Device/Inventor     │ Contribution                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Antikythera         │ Earliest known analog mechanical device     │
│ Mechanism (100 BCE) │ Calculated celestial body positions        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Napier's Bones      │ Multiplication and division using rods     │
│ (1617, John Napier) │ marked with numbers                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Slide Rule (1620s)  │ Based on logarithms for multiplication,    │
│ (William Oughtred)  │ division, and powers                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Pascaline (1642)    │ Mechanical adding machine using gears      │
│ (Blaise Pascal)     │ Could add and subtract                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Leibniz's Step      │ Advanced calculator with multiplication,   │
│ Reckoner (1673)     │ division, and root calculation              │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 19th Century – Analytical Engine

Charles Babbage (1791–1871):
• Difference Engine: Automatic calculation of polynomial tables
• Analytical Engine: First concept of a programmable mechanical computer
  - Components similar to modern computers:
    * Input: Punched cards
    * Processing: Arithmetic logic unit (ALU)
    * Memory: Storage for numbers
    * Output: Printed results

Ada Lovelace:
• Considered the first computer programmer
• Wrote algorithms for the Analytical Engine

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Late 19th – Early 20th Century

┌─────────────────────┬─────────────────────────────────────────────┐
│ Device/Inventor     │ Contribution                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mechanical          │ Automated arithmetic for businesses and    │
│ Calculators         │ engineering (Comptometer 1887)             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Punched Card Systems│ Developed tabulating machine for U.S.       │
│ (Herman Hollerith,  │ Census; precursor to IBM machines          │
│ 1890)               │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Analog Computers    │ Used continuous physical quantities to     │
│                     │ solve equations (differential analyzers)   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Timeline Summary

┌─────────────────────┬─────────────────────────────────────────────┐
│ Period              │ Device/Concept                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Prehistoric         │ Tally sticks (counting & recording)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Ancient             │ Abacus (arithmetic operations)             │
├─────────────────────┼─────────────────────────────────────────────┤
│ 17th Century        │ Pascaline, Leibniz's Engine (mechanical    │
│                     │ addition, multiplication)                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ 19th Century        │ Babbage's Analytical Engine (concept of    │
│                     │ programmable computer)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Late 19th Century   │ Punched cards (Hollerith) for data         │
│                     │ processing & automation                    │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Computation: Input → Algorithm → Output
• Types: Exact, Approximate, Symbolic, Logical
• Models: Turing Machine, Finite Automata, Lambda Calculus
• Early devices: Abacus → Mechanical calculators → Analytical Engine
• Babbage's Analytical Engine: First programmable computer concept
• Ada Lovelace: First computer programmer`,
      contentBn: `📌 গণনার পরিচিতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: গণনা হল সুসংজ্ঞায়িত নিয়ম বা নির্দেশনার সেট ব্যবহার করে সমস্যা সমাধান, গণনা বা তথ্য প্রক্রিয়াকরণের প্রক্রিয়া।

মূল উপাদান:
┌─────────────────────┬─────────────────────────────────────────────┐
│ উপাদান              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইনপুট               │ গণনায় প্রদত্ত তথ্য                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রক্রিয়া          │ প্রয়োগকৃত অপারেশন, নিয়ম বা অ্যালগরিদম   │
├─────────────────────┼─────────────────────────────────────────────┤
│ আউটপুট              │ গণনা দ্বারা উৎপাদিত ফলাফল                 │
└─────────────────────┴─────────────────────────────────────────────┘

সূত্র: গণনা = ইনপুট → অ্যালগরিদম → আউটপুট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 গণনার প্রকার

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ সঠিক গণনা          │ নির্দিষ্ট, নির্ণায়ক ফলাফল উৎপাদন করে      │
│                     │ উদাহরণ: ৫ × ৭ = ৩৫                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ আসন্ন গণনা          │ সঠিক মানের কাছে ফলাফল                      │
│                     │ উদাহরণ: সমীকরণের সংখ্যাসূচক সমাধান         │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রতীকী গণনা        │ প্রতীক বা অভিব্যক্তি হেরফের করে            │
│                     │ উদাহরণ: বীজগাণিতিক অভিব্যক্তি সরলীকরণ      │
├─────────────────────┼─────────────────────────────────────────────┤
│ যৌক্তিক/বুলিয়ান    │ সত্য/মিথ্যা বা হ্যাঁ/না মান ব্যবহার করে     │
│ গণনা                │ উদাহরণ: অ্যালগরিদমে সিদ্ধান্ত গ্রহণ        │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• গণনা: ইনপুট → অ্যালগরিদম → আউটপুট
• প্রকার: সঠিক, আসন্ন, প্রতীকী, যৌক্তিক
• মডেল: টিউরিং মেশিন, ফাইনিট অটোমাটা, ল্যাম্ডা ক্যালকুলাস
• প্রাথমিক যন্ত্র: অ্যাব্যাকাস → যান্ত্রিক ক্যালকুলেটর → অ্যানালিটিক্যাল ইঞ্জিন
• ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন: প্রথম প্রোগ্রামেবল কম্পিউটারের ধারণা
• অ্যাডা লাভলেস: প্রথম কম্পিউটার প্রোগ্রামার`,
      takeaways: [
        "Computation: Input → Algorithm → Output",
        "Types: Exact, Approximate, Symbolic, Logical",
        "Models: Turing Machine, Finite Automata, Lambda Calculus",
        "Early devices: Abacus → Mechanical calculators → Analytical Engine",
        "Babbage's Analytical Engine: First programmable computer concept",
        "Ada Lovelace: First computer programmer"
      ],
      takeawaysBn: [
        "গণনা: ইনপুট → অ্যালগরিদম → আউটপুট",
        "প্রকার: সঠিক, আসন্ন, প্রতীকী, যৌক্তিক",
        "মডেল: টিউরিং মেশিন, ফাইনিট অটোমাটা, ল্যাম্ডা ক্যালকুলাস",
        "প্রাথমিক যন্ত্র: অ্যাব্যাকাস → যান্ত্রিক ক্যালকুলেটর → অ্যানালিটিক্যাল ইঞ্জিন",
        "ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন: প্রথম প্রোগ্রামেবল কম্পিউটারের ধারণা",
        "অ্যাডা লাভলেস: প্রথম কম্পিউটার প্রোগ্রামার"
      ],
      level: "Beginner"
    },
    {
      id: "cs2",
      title: "Computers, Hardware Components & Basic Architecture",
      titleBn: "কম্পিউটার, হার্ডওয়্যার উপাদান ও মৌলিক আর্কিটেকচার",
      content: `📌 COMPUTERS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A computer is an electronic device that can accept input, process data according to instructions, store information, and produce output.

Key Characteristics:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Characteristic      │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Speed               │ Performs operations much faster than humans│
├─────────────────────┼─────────────────────────────────────────────┤
│ Accuracy            │ High precision in calculations             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Automation          │ Can execute instructions automatically     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Storage             │ Can store vast amounts of data             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Versatility         │ Can perform a variety of tasks             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Types of Computers

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Example                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Supercomputer       │ Extremely fast, complex computations       │
│                     │ Weather, simulations (IBM Summit, Fugaku)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mainframe           │ Large, powerful, multi-user systems        │
│                     │ Organizations (IBM Z series)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Minicomputer /      │ Medium power, departmental tasks           │
│ Midrange            │ (DEC PDP series)                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Personal Computer   │ Desktop or laptop for individual use       │
│ (PC)                │ Windows/Mac/Linux PCs                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Workstation         │ High-performance PC for engineering,       │
│                     │ graphics, scientific tasks                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Embedded Systems    │ Computers integrated into devices for      │
│                     │ specific control tasks (washing machines,  │
│                     │ cars, IoT devices)                         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Generations of Computers

┌─────────────────────┬─────────────────────────────────────────────┐
│ Generation          │ Technology & Features                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1st (1940–1956)     │ Vacuum tubes: large, expensive, slow,      │
│                     │ high power consumption                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ 2nd (1956–1963)     │ Transistors: smaller, more reliable,       │
│                     │ less heat                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ 3rd (1964–1971)     │ Integrated Circuits: more compact, faster, │
│                     │ multi-programming                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ 4th (1971–present)  │ Microprocessors: personal computers,       │
│                     │ laptops, portable devices                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ 5th (Present/Future)│ AI, Quantum: advanced parallel processing, │
│                     │ AI, natural language processing            │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 MAJOR HARDWARE COMPONENTS

Processor (CPU - Central Processing Unit):
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ALU (Arithmetic     │ Performs arithmetic and logical operations │
│ Logic Unit)         │ (add, subtract, multiply, AND, OR, NOT)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Control Unit (CU)   │ Directs data flow, decodes instructions,   │
│                     │ manages I/O devices                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Registers           │ Small, high-speed storage for temporary    │
│                     │ data and instructions                      │
└─────────────────────┴─────────────────────────────────────────────┘

Instruction Cycle: Fetch → Decode → Execute → Store

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Memory

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary Memory      │ RAM (Random Access Memory): volatile,       │
│ (Volatile)          │ temporary storage for running programs     │
│                     │ Cache Memory: super-fast memory near CPU   │
│                     │ Registers: extremely fast inside CPU       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Secondary Memory    │ HDD (Hard Disk Drive): magnetic storage    │
│ (Non-volatile)      │ SSD (Solid State Drive): flash storage     │
│                     │ Optical disks (CD, DVD, Blu-ray)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tertiary/Backup     │ Magnetic tapes, cloud storage for backup   │
│ Storage             │ and archival                               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Input/Output (I/O) Devices

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Examples                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Input Devices       │ Keyboard, mouse, scanner, microphone,      │
│                     │ touchscreen, camera                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Output Devices      │ Monitor, printer, speakers, headphones,    │
│                     │ projector                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ I/O Devices         │ Touchscreen, network cards, USB devices    │
│ (Both)              │ (can send and receive data)                │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ BASIC ARCHITECTURE OF A COMPUTER

System Bus:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Bus Type            │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data Bus            │ Transfers actual data                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Address Bus         │ Specifies memory or I/O addresses          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Control Bus         │ Carries control signals (read/write,       │
│                     │ interrupt)                                 │
└─────────────────────┴─────────────────────────────────────────────┘

How Components Work Together:
1. Input devices send data to CPU via buses
2. CPU fetches instructions from memory
3. ALU processes data using arithmetic/logic operations
4. Results stored back in memory or sent to output devices

Block Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                          COMPUTER SYSTEM                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                        CPU                               │    │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │    │
│  │  │   ALU   │  │   CU    │  │Registers│                  │    │
│  │  └─────────┘  └─────────┘  └─────────┘                  │    │
│  └───────────────────────────────┬─────────────────────────┘    │
│                                  │                               │
│                    ┌─────────────┴─────────────┐                 │
│                    │       System Bus          │                 │
│                    └─────────────┬─────────────┘                 │
│            ┌─────────────────────┼─────────────────────┐         │
│            ▼                     ▼                     ▼         │
│  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐  │
│  │     Memory      │   │   Input Devices │   │  Output Devices │  │
│  │  (RAM, Cache,   │   │ (Keyboard,      │   │ (Monitor,       │  │
│  │   HDD, SSD)     │   │  Mouse, Scanner)│   │  Printer,       │  │
│  └─────────────────┘   └─────────────────┘   │  Speakers)      │  │
│                                               └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

✅ SUMMARY
• Computer: Electronic device for input, processing, storage, output
• Types: Supercomputer, Mainframe, PC, Workstation, Embedded
• Generations: Vacuum tubes → Transistors → ICs → Microprocessors → AI/Quantum
• CPU: ALU, Control Unit, Registers (fetch-decode-execute cycle)
• Memory: Primary (RAM, Cache), Secondary (HDD, SSD)
• I/O: Input devices, Output devices
• System Bus: Data, Address, Control buses connect all components`,
      contentBn: `📌 কম্পিউটার

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি কম্পিউটার হল একটি ইলেকট্রনিক যন্ত্র যা ইনপুট গ্রহণ করতে, নির্দেশনা অনুযায়ী ডেটা প্রসেস করতে, তথ্য সংরক্ষণ করতে এবং আউটপুট উৎপাদন করতে পারে।

মূল বৈশিষ্ট্য:
┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ গতি                 │ মানুষের চেয়ে অনেক দ্রুত অপারেশন করে       │
├─────────────────────┼─────────────────────────────────────────────┤
│ নির্ভুলতা           │ গণনায় উচ্চ সঠিকতা                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ অটোমেশন            │ স্বয়ংক্রিয়ভাবে নির্দেশনা বাস্তবায়ন করে  │
├─────────────────────┼─────────────────────────────────────────────┤
│ সংরক্ষণ             │ বিপুল পরিমাণ ডেটা সংরক্ষণ করতে পারে        │
├─────────────────────┼─────────────────────────────────────────────┤
│ বহুমুখীতা           │ বিভিন্ন ধরনের কাজ করতে পারে               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 কম্পিউটারের প্রকার

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ সুপারকম্পিউটার     │ অত্যন্ত দ্রুত, জটিল গণনার জন্য             │
│                     │ আবহাওয়া, সিমুলেশন (IBM Summit, Fugaku)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ মেইনফ্রেম           │ বড়, শক্তিশালী, বহু-ব্যবহারকারী সিস্টেম   │
│                     │ সংস্থা (IBM Z সিরিজ)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ মিনিকম্পিউটার /     │ মাঝারি শক্তি, বিভাগীয় কাজের জন্য         │
│ মিডরেঞ্জ            │ (DEC PDP সিরিজ)                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ ব্যক্তিগত           │ ব্যক্তিগত ব্যবহারের জন্য ডেস্কটপ বা ল্যাপটপ│
│ কম্পিউটার (PC)      │ উইন্ডোজ/ম্যাক/লিনাক্স পিসি                │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়ার্কস্টেশন       │ ইঞ্জিনিয়ারিং, গ্রাফিক্স, বৈজ্ঞানিক কাজের  │
│                     │ জন্য উচ্চ-কর্মক্ষমতা পিসি                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ এম্বেডেড সিস্টেম    │ নির্দিষ্ট নিয়ন্ত্রণ কাজের জন্য ডিভাইসে    │
│                     │ সমন্বিত কম্পিউটার (ওয়াশিং মেশিন, গাড়ি,   │
│                     │ IoT ডিভাইস)                                │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• কম্পিউটার: ইনপুট, প্রক্রিয়াকরণ, সংরক্ষণ, আউটপুটের জন্য ইলেকট্রনিক যন্ত্র
• প্রকার: সুপারকম্পিউটার, মেইনফ্রেম, পিসি, ওয়ার্কস্টেশন, এম্বেডেড
• প্রজন্ম: ভ্যাক্যুম টিউব → ট্রানজিস্টর → আইসি → মাইক্রোপ্রসেসর → এআই/কোয়ান্টাম
• CPU: ALU, কন্ট্রোল ইউনিট, রেজিস্টার (ফেচ-ডিকোড-এক্সিকিউট চক্র)
• মেমরি: প্রাথমিক (RAM, ক্যাশ), গৌণ (HDD, SSD)
• I/O: ইনপুট ডিভাইস, আউটপুট ডিভাইস
• সিস্টেম বাস: ডেটা, অ্যাড্রেস, কন্ট্রোল বাস সব উপাদান সংযুক্ত করে`,
      takeaways: [
        "Computer: Electronic device for input, processing, storage, output",
        "Types: Supercomputer, Mainframe, PC, Workstation, Embedded",
        "CPU: ALU, Control Unit, Registers (fetch-decode-execute cycle)",
        "Memory: Primary (RAM, Cache), Secondary (HDD, SSD)",
        "I/O: Input devices, Output devices",
        "System Bus: Data, Address, Control buses connect all components"
      ],
      takeawaysBn: [
        "কম্পিউটার: ইনপুট, প্রক্রিয়াকরণ, সংরক্ষণ, আউটপুটের জন্য ইলেকট্রনিক যন্ত্র",
        "প্রকার: সুপারকম্পিউটার, মেইনফ্রেম, পিসি, ওয়ার্কস্টেশন, এম্বেডেড",
        "CPU: ALU, কন্ট্রোল ইউনিট, রেজিস্টার (ফেচ-ডিকোড-এক্সিকিউট চক্র)",
        "মেমরি: প্রাথমিক (RAM, ক্যাশ), গৌণ (HDD, SSD)",
        "I/O: ইনপুট ডিভাইস, আউটপুট ডিভাইস",
        "সিস্টেম বাস: ডেটা, অ্যাড্রেস, কন্ট্রোল বাস সব উপাদান সংযুক্ত করে"
      ],
      level: "Beginner"
    },
    {
      id: "cs3",
      title: "Software: Operating System & Application Software",
      titleBn: "সফটওয়্যার: অপারেটিং সিস্টেম ও অ্যাপ্লিকেশন সফটওয়্যার",
      content: `📌 SOFTWARE OVERVIEW

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Software is a set of instructions or programs that tell the computer how to perform tasks. Unlike hardware, software is intangible.

Types of Software:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ System Software     │ Manages hardware and provides a platform    │
│                     │ for applications                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Application         │ Performs specific tasks for users          │
│ Software            │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 OPERATING SYSTEM (OS)

Definition: The operating system is system software that acts as an interface between the user and the hardware. It manages resources and provides services for applications.

Key Functions:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Function            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Process Management  │ Creates, schedules, and terminates         │
│                     │ processes                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Memory Management   │ Allocates RAM to processes and manages     │
│                     │ virtual memory                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ File System         │ Organizes, stores, retrieves, and protects  │
│ Management          │ data on storage devices                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Device Management   │ Controls input/output devices using        │
│                     │ drivers                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ User Interface      │ Provides CLI (Command Line Interface) or    │
│                     │ GUI (Graphical User Interface)              │
└─────────────────────┴─────────────────────────────────────────────┘

Examples: Windows, Linux, macOS, Android, iOS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 APPLICATION SOFTWARE

Definition: Application software is designed to perform specific tasks for the user, using the resources managed by the OS.

Categories and Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Category            │ Examples                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Productivity        │ MS Office, Google Docs, Excel, PowerPoint  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Graphics &          │ Photoshop, CorelDRAW, VLC, Adobe           │
│ Multimedia          │ Illustrator                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Web Browsers        │ Chrome, Firefox, Edge, Safari              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Educational         │ Duolingo, Khan Academy, MATLAB             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Enterprise          │ SAP, Oracle ERP, Salesforce                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Communication       │ Zoom, Slack, Microsoft Teams, WhatsApp     │
└─────────────────────┴─────────────────────────────────────────────┘

Key Points:
• Application software requires OS to run
• Can be single-purpose (calculator) or multi-purpose (MS Office suite)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Relationship Between OS and Application Software

[User] → [Application Software] → [Operating System] → [Hardware]

• The application software sends requests to the OS
• The OS translates these requests into hardware-level operations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Summary Table

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ OS                   │ Application Software │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Type                │ System software      │ User-oriented        │
│                     │                      │ software             │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Function            │ Manages resources,   │ Performs specific    │
│                     │ provides interface   │ user tasks           │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Examples            │ Windows, Linux,      │ MS Word, Photoshop,  │
│                     │ Android, macOS       │ Chrome               │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Software: Intangible instructions for computer operations
• OS: System software managing hardware and providing interface
• OS functions: Process, Memory, File, Device management, UI
• Application software: Performs specific user tasks
• Applications require OS to run on hardware`,
      contentBn: `📌 সফটওয়্যারের সংক্ষিপ্ত বিবরণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: সফটওয়্যার হল নির্দেশনার একটি সেট যা কম্পিউটারকে কীভাবে কাজ করতে হবে তা বলে। হার্ডওয়্যারের বিপরীতে, সফটওয়্যার অস্পর্শনীয়।

সফটওয়্যারের প্রকার:
┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ সিস্টেম সফটওয়্যার │ হার্ডওয়্যার পরিচালনা করে এবং অ্যাপ্লিকেশনের│
│                     │ জন্য প্ল্যাটফর্ম প্রদান করে                │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাপ্লিকেশন        │ ব্যবহারকারীর জন্য নির্দিষ্ট কাজ সম্পাদন করে│
│ সফটওয়্যার         │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 অপারেটিং সিস্টেম (OS)

সংজ্ঞা: অপারেটিং সিস্টেম হল সিস্টেম সফটওয়্যার যা ব্যবহারকারী ও হার্ডওয়্যারের মধ্যে ইন্টারফেস হিসেবে কাজ করে। এটি সম্পদ পরিচালনা করে এবং অ্যাপ্লিকেশনের জন্য সেবা প্রদান করে।

মূল কার্যক্রম:
┌─────────────────────┬─────────────────────────────────────────────┐
│ কার্যক্রম           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রসেস ম্যানেজমেন্ট│ প্রসেস তৈরি, সময়সূচী ও সমাপ্তি করে        │
├─────────────────────┼─────────────────────────────────────────────┤
│ মেমরি ম্যানেজমেন্ট │ প্রক্রিয়ায় RAM বরাদ্দ করে এবং ভার্চুয়াল  │
│                     │ মেমরি পরিচালনা করে                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফাইল সিস্টেম        │ সংরক্ষণ ডিভাইসে ডেটা সংগঠিত, সংরক্ষণ,     │
│ ম্যানেজমেন্ট        │ পুনরুদ্ধার ও সুরক্ষা করে                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডিভাইস ম্যানেজমেন্ট│ ড্রাইভার ব্যবহার করে ইনপুট/আউটপুট ডিভাইস  │
│                     │ নিয়ন্ত্রণ করে                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউজার ইন্টারফেস    │ CLI বা GUI প্রদান করে                       │
└─────────────────────┴─────────────────────────────────────────────┘

উদাহরণ: উইন্ডোজ, লিনাক্স, ম্যাকওএস, অ্যান্ড্রয়েড, আইওএস

✅ সারাংশ
• সফটওয়্যার: কম্পিউটার অপারেশনের জন্য অস্পর্শনীয় নির্দেশনা
• OS: সিস্টেম সফটওয়্যার যা হার্ডওয়্যার পরিচালনা করে এবং ইন্টারফেস প্রদান করে
• OS কার্যক্রম: প্রসেস, মেমরি, ফাইল, ডিভাইস ম্যানেজমেন্ট, UI
• অ্যাপ্লিকেশন সফটওয়্যার: নির্দিষ্ট ব্যবহারকারী কাজ সম্পাদন করে
• অ্যাপ্লিকেশন চালাতে OS প্রয়োজন`,
      takeaways: [
        "Software: Intangible instructions for computer operations",
        "OS: System software managing hardware and providing interface",
        "OS functions: Process, Memory, File, Device management, UI",
        "Application software: Performs specific user tasks",
        "Applications require OS to run on hardware"
      ],
      takeawaysBn: [
        "সফটওয়্যার: কম্পিউটার অপারেশনের জন্য অস্পর্শনীয় নির্দেশনা",
        "OS: সিস্টেম সফটওয়্যার যা হার্ডওয়্যার পরিচালনা করে এবং ইন্টারফেস প্রদান করে",
        "OS কার্যক্রম: প্রসেস, মেমরি, ফাইল, ডিভাইস ম্যানেজমেন্ট, UI",
        "অ্যাপ্লিকেশন সফটওয়্যার: নির্দিষ্ট ব্যবহারকারী কাজ সম্পাদন করে",
        "অ্যাপ্লিকেশন চালাতে OS প্রয়োজন"
      ],
      level: "Beginner"
    },
    {
      id: "cs4",
      title: "Basic Information Technology & The Internet",
      titleBn: "মৌলিক তথ্য প্রযুক্তি ও ইন্টারনেট",
      content: `📌 BASIC INFORMATION TECHNOLOGY (IT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Information Technology is the use of computers, networks, storage, and software to create, process, store, secure, and exchange all forms of electronic data.

Core Components of IT:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hardware            │ Physical devices (CPU, RAM, hard drives,    │
│                     │ keyboards, printers)                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Software            │ Programs and operating systems (Windows,    │
│                     │ Linux, word processors, web browsers)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Networks            │ Systems connecting computers to share       │
│                     │ information (LAN, WAN, Internet)            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data/Information    │ Raw facts processed to produce meaningful   │
│                     │ information                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ People              │ Users, IT professionals, administrators     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Functions of IT

┌─────────────────────┬─────────────────────────────────────────────┐
│ Function            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data Management     │ Collecting, storing, and retrieving         │
│                     │ information                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Communication       │ Email, video conferencing, instant          │
│                     │ messaging                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Automation          │ Performing tasks with minimal human         │
│                     │ intervention                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Decision Support    │ Data analytics and business intelligence   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Security            │ Protecting systems and data from            │
│                     │ unauthorized access                         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Applications of IT

┌─────────────────────┬─────────────────────────────────────────────┐
│ Sector              │ Examples                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Business & Finance  │ Online banking, ERP, accounting software   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Education           │ E-learning platforms, online exams         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Healthcare          │ Electronic health records, telemedicine    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Government          │ Digital governance, citizen services       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Entertainment       │ Streaming services, gaming                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Communication       │ Social media, email, VoIP                  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 THE INTERNET

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: The Internet is a global network of interconnected computers and servers that communicate using a common protocol (TCP/IP) to share information and resources.

Key Idea: It's a network of networks, allowing billions of devices worldwide to connect and exchange data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Brief History

┌─────────────────────┬─────────────────────────────────────────────┐
│ Year                │ Milestone                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1960s               │ ARPANET - First packet-switching network    │
│                     │ by US Department of Defense                │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1970s               │ TCP/IP protocol developed - standardized   │
│                     │ communication across networks              │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1983                │ ARPANET switched to TCP/IP - Internet's     │
│                     │ official birth                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1990                │ World Wide Web (WWW) invented by Tim       │
│                     │ Berners-Lee                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1990s               │ Internet became publicly accessible,       │
│                     │ leading to email, browsers, and websites   │
├─────────────────────┼─────────────────────────────────────────────┤
│ 2000s–present       │ Growth of broadband, wireless Internet,    │
│                     │ cloud computing, social media, IoT         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Components of the Internet

1. Hardware:
   • Servers, routers, switches, cables, modems, computers

2. Protocols (Rules for communication):
   ┌─────────────────────┬─────────────────────────────────────────┐
   │ Protocol            │ Purpose                                 │
   ├─────────────────────┼─────────────────────────────────────────┤
   │ TCP/IP              │ Basic Internet protocol                 │
   ├─────────────────────┼─────────────────────────────────────────┤
   │ HTTP/HTTPS          │ Web communication                       │
   ├─────────────────────┼─────────────────────────────────────────┤
   │ FTP                 │ File transfer                           │
   ├─────────────────────┼─────────────────────────────────────────┤
   │ SMTP, POP3, IMAP    │ Email                                   │
   └─────────────────────┴─────────────────────────────────────────┘

3. Services:
   • Web browsing (WWW)
   • Email (Gmail, Outlook)
   • File sharing (FTP, cloud storage)
   • Streaming (YouTube, Netflix)
   • Social networking (Facebook, Twitter)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 How the Internet Works

1. Devices connect to ISPs (Internet Service Providers)
2. Data is divided into packets
3. Packets travel through routers and switches using the fastest path
4. Packets are reassembled at the destination device
5. Communication is managed using IP addresses and domain names

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Advantages & Challenges

Advantages:
• Communication: Email, social media, messaging apps
• Information Access: Search engines, online libraries
• E-commerce: Online shopping, banking, digital payments
• Education: E-learning platforms, virtual classrooms
• Entertainment: Streaming, online gaming

Risks and Challenges:
• Cybersecurity threats: viruses, malware, hacking
• Privacy concerns: data collection, tracking
• Digital divide: not everyone has equal access
• Over-reliance: addiction, misinformation spread

✅ SUMMARY
• IT: Use of computers, networks, software for data management
• IT functions: Data management, communication, automation, security
• Internet: Global network of networks using TCP/IP
• Internet history: ARPANET → TCP/IP → WWW → modern Internet
• Key protocols: TCP/IP, HTTP/HTTPS, FTP, SMTP
• Services: Web browsing, email, streaming, social media`,
      contentBn: `📌 মৌলিক তথ্য প্রযুক্তি (IT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: তথ্য প্রযুক্তি হল কম্পিউটার, নেটওয়ার্ক, স্টোরেজ ও সফটওয়্যার ব্যবহার করে সকল প্রকার ইলেকট্রনিক ডেটা তৈরি, প্রক্রিয়া, সংরক্ষণ, সুরক্ষা ও বিনিময় করা।

IT-এর মূল উপাদান:
• হার্ডওয়্যার: ভৌত যন্ত্র (CPU, RAM, হার্ড ড্রাইভ, কীবোর্ড)
• সফটওয়্যার: প্রোগ্রাম ও অপারেটিং সিস্টেম
• নেটওয়ার্ক: কম্পিউটার সংযোগকারী ব্যবস্থা (LAN, WAN, ইন্টারনেট)
• ডেটা/তথ্য: অর্থপূর্ণ তথ্য উৎপাদনের জন্য প্রক্রিয়াকৃত কাঁচা তথ্য
• মানুষ: ব্যবহারকারী, আইটি পেশাজীবী, প্রশাসক

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ইন্টারনেট

সংজ্ঞা: ইন্টারনেট হল আন্তঃসংযুক্ত কম্পিউটার ও সার্ভারের একটি বৈশ্বিক নেটওয়ার্ক যা একটি সাধারণ প্রোটোকল (TCP/IP) ব্যবহার করে তথ্য ও সম্পদ ভাগাভাগি করে।

মূল ধারণা: এটি নেটওয়ার্কের নেটওয়ার্ক, যা বিশ্বব্যাপী বিলিয়ন বিলিয়ন ডিভাইসকে সংযোগ ও ডেটা বিনিময় করতে দেয়।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সংক্ষিপ্ত ইতিহাস

• ১৯৬০-এর দশক: ARPANET - মার্কিন প্রতিরক্ষা দপ্তরের প্রথম প্যাকেট-সুইচিং নেটওয়ার্ক
• ১৯৭০-এর দশক: TCP/IP প্রোটোকল উন্নয়ন
• ১৯৮৩: ARPANET TCP/IP-তে স্যুইচ করে - ইন্টারনেটের আনুষ্ঠানিক জন্ম
• ১৯৯০: টিম বার্নার্স-লি ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) উদ্ভাবন
• ১৯৯০-এর দশক: ইন্টারনেট সর্বসাধারণের জন্য উন্মুক্ত

✅ সারাংশ
• আইটি: ডেটা ম্যানেজমেন্টের জন্য কম্পিউটার, নেটওয়ার্ক, সফটওয়্যার ব্যবহার
• ইন্টারনেট: TCP/IP ব্যবহার করে নেটওয়ার্কের বৈশ্বিক নেটওয়ার্ক
• মূল প্রোটোকল: TCP/IP, HTTP/HTTPS, FTP, SMTP
• সেবা: ওয়েব ব্রাউজিং, ইমেইল, স্ট্রিমিং, সোশ্যাল মিডিয়া`,
      takeaways: [
        "IT: Use of computers, networks, software for data management",
        "Internet: Global network of networks using TCP/IP",
        "Internet history: ARPANET → TCP/IP → WWW → modern Internet",
        "Key protocols: TCP/IP, HTTP/HTTPS, FTP, SMTP",
        "Services: Web browsing, email, streaming, social media"
      ],
      takeawaysBn: [
        "আইটি: ডেটা ম্যানেজমেন্টের জন্য কম্পিউটার, নেটওয়ার্ক, সফটওয়্যার ব্যবহার",
        "ইন্টারনেট: TCP/IP ব্যবহার করে নেটওয়ার্কের বৈশ্বিক নেটওয়ার্ক",
        "ইন্টারনেট ইতিহাস: ARPANET → TCP/IP → WWW → আধুনিক ইন্টারনেট",
        "মূল প্রোটোকল: TCP/IP, HTTP/HTTPS, FTP, SMTP",
        "সেবা: ওয়েব ব্রাউজিং, ইমেইল, স্ট্রিমিং, সোশ্যাল মিডিয়া"
      ],
      level: "Beginner"
    },
    {
      id: "cs5",
      title: "Number Systems: Binary, Octal, Hexadecimal & Binary Arithmetic",
      titleBn: "সংখ্যা পদ্ধতি: বাইনারি, অক্টাল, হেক্সাডেসিমাল ও বাইনারি পাটিগণিত",
      content: `📌 NUMBER SYSTEMS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A number system is a way to represent numbers using a consistent set of symbols (digits) and a base (radix).

Base (radix): Number of unique digits including zero.

Common Number Systems:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ System              │ Base     │ Digits                          │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Binary              │ 2        │ 0, 1                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Octal               │ 8        │ 0, 1, 2, 3, 4, 5, 6, 7          │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Decimal             │ 10       │ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9    │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Hexadecimal         │ 16       │ 0-9, A, B, C, D, E, F            │
│                     │          │ (A=10, B=11, C=12, D=13, E=14,  │
│                     │          │ F=15)                           │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 BINARY (Base 2)

Used in computers because digital circuits have two states (ON/OFF).

Example:
1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 OCTAL (Base 8)

Compact representation of binary (3 bits per octal digit).

Example:
157₈ = 1×8² + 5×8¹ + 7×8⁰ = 64 + 40 + 7 = 111₁₀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 HEXADECIMAL (Base 16)

Used in computing and memory addressing (compact representation of 4 bits).

Example:
2F₁₆ = 2×16¹ + 15×16⁰ = 32 + 15 = 47₁₀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CONVERSION BETWEEN NUMBER SYSTEMS

1. Decimal → Binary: Divide by 2 repeatedly, record remainders
   Example: 25₁₀ = ?
   25 ÷ 2 = 12 remainder 1
   12 ÷ 2 = 6 remainder 0
   6 ÷ 2 = 3 remainder 0
   3 ÷ 2 = 1 remainder 1
   1 ÷ 2 = 0 remainder 1
   Read remainders upward: 11001₂

2. Binary → Decimal: Multiply each bit by 2ⁿ and sum
   11001₂ = 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 16+8+0+0+1 = 25₁₀

3. Binary ↔ Octal: Group binary digits in sets of 3 (from right)
   10 110 001₂ = 2 6 1₈ = 261₈

4. Binary ↔ Hexadecimal: Group binary digits in sets of 4 (from right)
   1011 0001₂ = B 1₁₆ = B1₁₆

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BINARY ARITHMETIC

Binary uses only 0 and 1.

Addition Table:
┌─────────────────────┬─────────────────────────────────────────────┐
│ +                   │ 0           │ 1                            │
├─────────────────────┼─────────────┼──────────────────────────────┤
│ 0                   │ 0           │ 1                            │
├─────────────────────┼─────────────┼──────────────────────────────┤
│ 1                   │ 1           │ 10 (0 carry 1)               │
└─────────────────────┴─────────────┴──────────────────────────────┘

Example: 101₂ + 11₂ = 1000₂
   1 0 1
 +   1 1
 ---------
 1 0 0 0

Multiplication Table:
┌─────────────────────┬─────────────────────────────────────────────┐
│ ×                   │ 0           │ 1                            │
├─────────────────────┼─────────────┼──────────────────────────────┤
│ 0                   │ 0           │ 0                            │
├─────────────────────┼─────────────┼──────────────────────────────┤
│ 1                   │ 0           │ 1                            │
└─────────────────────┴─────────────┴──────────────────────────────┘

Example: 101₂ × 11₂ = 1111₂
     1 0 1
   ×   1 1
   --------
     1 0 1   (101 × 1)
   1 0 1     (101 × 1, shifted left)
   --------
   1 1 1 1

Subtraction (use borrowing):
Example: 1010₂ - 11₂ = 111₂
   1 0 1 0
 -   0 1 1
 ---------
     0 1 1 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Quick Conversion Reference

┌─────────────────────┬─────────────────────────────────────────────┐
│ Decimal │ Binary    │ Octal │ Hexadecimal                         │
├─────────┼───────────┼───────┼─────────────────────────────────────┤
│ 0       │ 0000      │ 0     │ 0                                   │
│ 1       │ 0001      │ 1     │ 1                                   │
│ 2       │ 0010      │ 2     │ 2                                   │
│ 3       │ 0011      │ 3     │ 3                                   │
│ 4       │ 0100      │ 4     │ 4                                   │
│ 5       │ 0101      │ 5     │ 5                                   │
│ 6       │ 0110      │ 6     │ 6                                   │
│ 7       │ 0111      │ 7     │ 7                                   │
│ 8       │ 1000      │ 10    │ 8                                   │
│ 9       │ 1001      │ 11    │ 9                                   │
│ 10      │ 1010      │ 12    │ A                                   │
│ 11      │ 1011      │ 13    │ B                                   │
│ 12      │ 1100      │ 14    │ C                                   │
│ 13      │ 1101      │ 15    │ D                                   │
│ 14      │ 1110      │ 16    │ E                                   │
│ 15      │ 1111      │ 17    │ F                                   │
└─────────┴───────────┴───────┴─────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Summary Table

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ System              │ Base     │ Usage                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Binary              │ 2        │ Computers, logic circuits       │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Octal               │ 8        │ Compact binary representation    │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Decimal             │ 10       │ Everyday calculations           │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Hexadecimal         │ 16       │ Memory addressing, programming  │
└─────────────────────┴──────────┴─────────────────────────────────┘

✅ SUMMARY
• Binary (base 2): 0,1 - used in computers
• Octal (base 8): 0-7 - compact binary (3 bits/digit)
• Hexadecimal (base 16): 0-9, A-F - compact binary (4 bits/digit)
• Binary arithmetic: addition, subtraction, multiplication
• Binary ↔ Octal: group 3 bits
• Binary ↔ Hexadecimal: group 4 bits`,
      contentBn: `📌 সংখ্যা পদ্ধতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: সংখ্যা পদ্ধতি হল প্রতীক (অঙ্ক) এবং একটি ভিত্তি (রেডিক্স) এর একটি সামঞ্জস্যপূর্ণ সেট ব্যবহার করে সংখ্যা উপস্থাপনের একটি উপায়।

ভিত্তি (রেডিক্স): শূন্য সহ অনন্য অঙ্কের সংখ্যা।

সাধারণ সংখ্যা পদ্ধতি:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ পদ্ধতি              │ ভিত্তি   │ অঙ্ক                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ বাইনারি             │ ২        │ ০, ১                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ অক্টাল              │ ৮        │ ০-৭                             │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ দশমিক               │ ১০       │ ০-৯                             │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ হেক্সাডেসিমাল       │ ১৬       │ ০-৯, A, B, C, D, E, F           │
│                     │          │ (A=১০, B=১১, C=১২, D=১৩, E=১৪, │
│                     │          │ F=১৫)                           │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 বাইনারি (ভিত্তি ২)

কম্পিউটারে ব্যবহৃত হয় কারণ ডিজিটাল সার্কিটের দুটি অবস্থা থাকে (চালু/বন্ধ)।

উদাহরণ:
১০১১₂ = ১×২³ + ০×২² + ১×২¹ + ১×২⁰ = ৮ + ০ + ২ + ১ = ১১₁₀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 হেক্সাডেসিমাল (ভিত্তি ১৬)

কম্পিউটিং ও মেমরি অ্যাড্রেসিংয়ে ব্যবহৃত (৪ বিটের কম্প্যাক্ট উপস্থাপন)।

উদাহরণ:
২F₁₆ = ২×১৬¹ + ১৫×১৬⁰ = ৩২ + ১৫ = ৪৭₁₀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সংখ্যা পদ্ধতির মধ্যে রূপান্তর

১. দশমিক → বাইনারি: বারবার ২ দ্বারা ভাগ করুন, ভাগশেষ রেকর্ড করুন
২. বাইনারি → দশমিক: প্রতিটি বিটকে ২ⁿ দ্বারা গুণ করুন ও যোগ করুন
৩. বাইনারি ↔ অক্টাল: ডান থেকে ৩ বিটের দলে গ্রুপ করুন
৪. বাইনারি ↔ হেক্সাডেসিমাল: ডান থেকে ৪ বিটের দলে গ্রুপ করুন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 বাইনারি পাটিগণিত

যোগ:
১০১₂ + ১১₂ = ১০০০₂

গুণ:
১০১₂ × ১১₂ = ১১১১₂

বিয়োগ:
১০১০₂ - ১১₂ = ১১১₂

✅ সারাংশ
• বাইনারি (ভিত্তি ২): ০,১ - কম্পিউটারে ব্যবহৃত
• অক্টাল (ভিত্তি ৮): ০-৭ - কম্প্যাক্ট বাইনারি (৩ বিট/অঙ্ক)
• হেক্সাডেসিমাল (ভিত্তি ১৬): ০-৯, A-F - কম্প্যাক্ট বাইনারি (৪ বিট/অঙ্ক)
• বাইনারি পাটিগণিত: যোগ, বিয়োগ, গুণ
• বাইনারি ↔ অক্টাল: ৩ বিট গ্রুপ
• বাইনারি ↔ হেক্সাডেসিমাল: ৪ বিট গ্রুপ`,
      takeaways: [
        "Binary (base 2): 0,1 - used in computers",
        "Octal (base 8): 0-7 - compact binary (3 bits/digit)",
        "Hexadecimal (base 16): 0-9, A-F - compact binary (4 bits/digit)",
        "Binary arithmetic: addition, subtraction, multiplication",
        "Binary ↔ Octal: group 3 bits",
        "Binary ↔ Hexadecimal: group 4 bits"
      ],
      takeawaysBn: [
        "বাইনারি (ভিত্তি ২): ০,১ - কম্পিউটারে ব্যবহৃত",
        "অক্টাল (ভিত্তি ৮): ০-৭ - কম্প্যাক্ট বাইনারি (৩ বিট/অঙ্ক)",
        "হেক্সাডেসিমাল (ভিত্তি ১৬): ০-৯, A-F - কম্প্যাক্ট বাইনারি (৪ বিট/অঙ্ক)",
        "বাইনারি পাটিগণিত: যোগ, বিয়োগ, গুণ",
        "বাইনারি ↔ অক্টাল: ৩ বিট গ্রুপ",
        "বাইনারি ↔ হেক্সাডেসিমাল: ৪ বিট গ্রুপ"
      ],
      level: "Beginner"
    }
  ]
}

export const module2 = m2