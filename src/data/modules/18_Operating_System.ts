import type { Module } from '../../types'

const m18: Module = {
  title: "18. Operating System",
  titleBn: "১৮. অপারেটিং সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "os1",
      title: "Operating System: Role, Concepts & Structure",
      titleBn: "অপারেটিং সিস্টেম: ভূমিকা, ধারণা ও কাঠামো",
      content: `Operating System: its role in computer systems;

🔹 What is an Operating System?
An Operating System (OS) is system software that acts as a bridge between the user and the computer hardware. It manages hardware, software, memory, processes, and provides services to applications. Without an OS, a computer is just hardware with no usability.

🔹 Role of an Operating System in Computer Systems

1. Process Management: Handles creation, scheduling, and termination of processes. Ensures CPU is used efficiently.

2. Memory Management: Allocates and deallocates memory to programs. Manages virtual memory and caching. Prevents memory conflicts between processes.

3. File System Management: Organizes and stores data in files and directories. Provides access methods (read/write/execute).

4. Device Management: Controls and coordinates input/output devices (keyboard, mouse, printers, etc.). Uses device drivers to communicate with hardware.

5. Security & Protection: Provides authentication (login/password). Prevents unauthorized access to resources. Ensures data protection (permissions, encryption).

6. User Interface (UI): Provides CLI (Command Line Interface) or GUI (Graphical User Interface).

7. Networking: Supports communication between computers (via TCP/IP stack). Enables resource sharing across networks.

8. Resource Management: Manages CPU, memory, disk, and I/O devices. Ensures fair resource allocation to different programs.

🔹 Operating System Concepts

1. Process: A program in execution. OS manages process scheduling, creation, termination.

2. Threads: Lightweight processes within a process. Allow multitasking inside a single program.

3. CPU Scheduling: Decides which process runs next on the CPU. Algorithms: FCFS, SJF, Round Robin, Priority.

4. Memory Management: Allocation & deallocation of memory. Paging, segmentation, virtual memory.

5. File System: Manages files, directories, and storage. Provides operations like create, read, write, delete.

6. I/O System Management: Handles input/output devices via device drivers.

7. Protection & Security: Protects resources from unauthorized access. Provides authentication, access rights, and encryption.

8. Virtualization: Provides an abstract view of hardware (e.g., virtual memory, virtual machines).

9. Concurrency & Synchronization: Manages multiple processes/threads running simultaneously. Avoids race conditions using semaphores, mutex, monitors.

🔹 Operating System Structure

(a) Monolithic Structure: Entire OS runs in one large kernel. All services inside the kernel. Example: UNIX, MS-DOS. Fast but hard to maintain.

(b) Layered Structure: OS divided into layers (bottom = hardware, top = user interface). Each layer uses services from layer below. Easy to debug but has performance overhead.

(c) Microkernel Structure: Kernel contains only essential services (process management, communication). Other services run in user space. Example: Minix, QNX, macOS (partially). Secure and modular but slower.

(d) Modules (Modular Kernel): Kernel is divided into modules that can be loaded/unloaded. Example: Linux. Flexibility + efficiency.

(e) Hybrid Structure: Mix of Monolithic + Microkernel. Example: Windows, macOS. Balance between performance and modularity.

🔹 Examples of Operating Systems
Windows, Linux, macOS, Android, iOS, UNIX.`,
      contentBn: `অপারেটিং সিস্টেম: কম্পিউটার সিস্টেমে এর ভূমিকা;

🔹 অপারেটিং সিস্টেম কী?
অপারেটিং সিস্টেম হল সিস্টেম সফটওয়্যার যা ব্যবহারকারী এবং কম্পিউটার হার্ডওয়্যারের মধ্যে সেতু হিসেবে কাজ করে। এটি হার্ডওয়্যার, সফটওয়্যার, মেমোরি, প্রসেস পরিচালনা করে এবং অ্যাপ্লিকেশনে সেবা প্রদান করে। OS ছাড়া, একটি কম্পিউটার কেবল হার্ডওয়্যার যা ব্যবহারযোগ্য নয়।

🔹 কম্পিউটার সিস্টেমে অপারেটিং সিস্টেমের ভূমিকা

১. প্রসেস ম্যানেজমেন্ট: প্রসেস তৈরি, শিডিউলিং ও সমাপ্তি পরিচালনা করে। নিশ্চিত করে CPU দক্ষভাবে ব্যবহার হয়।

২. মেমোরি ম্যানেজমেন্ট: প্রোগ্রামে মেমোরি বরাদ্দ ও মুক্ত করে। ভার্চুয়াল মেমোরি ও ক্যাশিং পরিচালনা করে। প্রসেসের মধ্যে মেমোরি দ্বন্দ্ব প্রতিরোধ করে।

৩. ফাইল সিস্টেম ম্যানেজমেন্ট: ফাইল ও ডিরেক্টরিতে ডেটা সংগঠিত ও সংরক্ষণ করে। অ্যাক্সেস পদ্ধতি প্রদান করে (পড়া/লেখা/এক্সিকিউট)।

৪. ডিভাইস ম্যানেজমেন্ট: ইনপুট/আউটপুট ডিভাইস নিয়ন্ত্রণ ও সমন্বয় করে। হার্ডওয়্যারের সাথে যোগাযোগে ডিভাইস ড্রাইভার ব্যবহার করে।

৫. নিরাপত্তা ও সুরক্ষা: প্রমাণীকরণ প্রদান করে। রিসোর্সে অননুমোদিত অ্যাক্সেস প্রতিরোধ করে। ডেটা সুরক্ষা নিশ্চিত করে।

৬. ইউজার ইন্টারফেস: CLI বা GUI প্রদান করে।

৭. নেটওয়ার্কিং: কম্পিউটারের মধ্যে যোগাযোগ সমর্থন করে। নেটওয়ার্ক জুড়ে রিসোর্স শেয়ারিং সক্ষম করে।

৮. রিসোর্স ম্যানেজমেন্ট: CPU, মেমোরি, ডিস্ক ও I/O ডিভাইস পরিচালনা করে। বিভিন্ন প্রোগ্রামে ন্যায্য রিসোর্স বরাদ্দ নিশ্চিত করে।

🔹 অপারেটিং সিস্টেমের ধারণা

১. প্রসেস: কার্যকরী একটি প্রোগ্রাম। OS প্রসেস শিডিউলিং, তৈরি, সমাপ্তি পরিচালনা করে।

২. থ্রেড: প্রসেসের ভিতরে লাইটওয়েট প্রসেস। একটি প্রোগ্রামের ভিতরে মাল্টিটাস্কিং অনুমতি দেয়।

৩. CPU শিডিউলিং: সিদ্ধান্ত নেয় CPU-তে পরবর্তী কোন প্রসেস চলবে। অ্যালগরিদম: FCFS, SJF, রাউন্ড রবিন, প্রায়োরিটি।

৪. মেমোরি ম্যানেজমেন্ট: মেমোরির বরাদ্দ ও মুক্তিকরণ। পেজিং, সেগমেন্টেশন, ভার্চুয়াল মেমোরি।

৫. ফাইল সিস্টেম: ফাইল, ডিরেক্টরি ও স্টোরেজ পরিচালনা করে। তৈরি, পড়া, লেখা, মুছে ফেলার মতো অপারেশন প্রদান করে।

৬. I/O সিস্টেম ম্যানেজমেন্ট: ডিভাইস ড্রাইভারের মাধ্যমে ইনপুট/আউটপুট ডিভাইস পরিচালনা করে।

৭. সুরক্ষা ও নিরাপত্তা: অননুমোদিত অ্যাক্সেস থেকে রিসোর্স রক্ষা করে। প্রমাণীকরণ, অ্যাক্সেস অধিকার ও এনক্রিপশন প্রদান করে।

৮. ভার্চুয়ালাইজেশন: হার্ডওয়্যারের একটি বিমূর্ত দৃশ্য প্রদান করে।

৯. কনকারেন্সি ও সিনক্রোনাইজেশন: একসাথে চলমান একাধিক প্রসেস/থ্রেড পরিচালনা করে। সেমাফোর, মিউটেক্স, মনিটর ব্যবহার করে রেস কন্ডিশন এড়ায়।

🔹 অপারেটিং সিস্টেমের কাঠামো

(ক) মোনোলিথিক স্ট্রাকচার: সম্পূর্ণ OS একটি বড় কার্নেলে চলে। সব সেবা কার্নেলের ভিতরে। উদাহরণ: UNIX, MS-DOS। দ্রুত কিন্তু রক্ষণাবেক্ষণ কঠিন।

(খ) লেয়ারড স্ট্রাকচার: OS স্তরে বিভক্ত। প্রতিটি স্তর নিচের স্তরের সেবা ব্যবহার করে। ডিবাগ করা সহজ কিন্তু কর্মদক্ষতায় ওভারহেড।

(গ) মাইক্রোকার্নেল স্ট্রাকচার: কার্নেলে কেবল অপরিহার্য সেবা থাকে। অন্যান্য সেবা ইউজার স্পেসে চলে। উদাহরণ: Minix, QNX, macOS। নিরাপদ ও মডুলার কিন্তু ধীর।

(ঘ) মডিউলার কার্নেল: কার্নেল মডিউলে বিভক্ত যা লোড/আনলোড করা যায়। উদাহরণ: লিনাক্স। নমনীয়তা + দক্ষতা।

(ঙ) হাইব্রিড স্ট্রাকচার: মোনোলিথিক + মাইক্রোকার্নেলের মিশ্রণ। উদাহরণ: উইন্ডোজ, ম্যাকওএস। কর্মদক্ষতা ও মডুলারিটির মধ্যে ভারসাম্য।

🔹 অপারেটিং সিস্টেমের উদাহরণ
উইন্ডোজ, লিনাক্স, ম্যাকওএস, অ্যান্ড্রয়েড, iOS, ইউনিক্স।`,
      takeaways: [
        "OS acts as bridge between user and hardware",
        "OS manages processes, memory, files, devices, security",
        "OS concepts: process, threads, scheduling, memory, files, I/O, security",
        "OS structures: monolithic, layered, microkernel, modular, hybrid"
      ],
      takeawaysBn: [
        "OS ব্যবহারকারী ও হার্ডওয়্যারের মধ্যে সেতু হিসেবে কাজ করে",
        "OS প্রসেস, মেমোরি, ফাইল, ডিভাইস, নিরাপত্তা পরিচালনা করে",
        "OS ধারণা: প্রসেস, থ্রেড, শিডিউলিং, মেমোরি, ফাইল, I/O, নিরাপত্তা",
        "OS কাঠামো: মোনোলিথিক, লেয়ারড, মাইক্রোকার্নেল, মডুলার, হাইব্রিড"
      ],
      level: "Advanced"
    },
    {
      id: "os2",
      title: "Process: Model, IPC, Scheduling, Multiprocessing & Time-sharing",
      titleBn: "প্রসেস: মডেল, আইপিসি, শিডিউলিং, মাল্টিপ্রসেসিং ও টাইম-শেয়ারিং",
      content: `Process: process model and implementation, Inter-Process Communication (IPC), classical IPC problems, process scheduling, multiprocessing and time-sharing.

🔹 What is a Process?
A process = a program in execution. It includes: Program code (text section), Data (variables, heap, stack), Program Counter (PC), Registers & Resources.

🔹 Process Model

Key Concepts:
1. Multiprogramming Model: Multiple processes loaded in memory. CPU switches between them (context switching).
2. Process States: New → Ready → Running → Waiting → Terminated
3. Process Control Block (PCB): Data structure used by OS to store process info. Contains: PID, state, registers, program counter, scheduling info, memory info.

🔹 Process Implementation
(a) Process Creation: Created by system calls (e.g., fork() in UNIX, CreateProcess() in Windows). Parent process spawns child processes.
(b) Process Execution: Scheduler decides which process runs (CPU Scheduling). Context switch occurs when switching processes.
(c) Process Termination: Normal exit, error exit, killed by another process, or killed by OS.
(d) Process Communication: Inter-Process Communication (IPC): Shared Memory, Message Passing (pipes, sockets, queues).

🔹 Inter-Process Communication (IPC)
Definition: IPC is the mechanism that allows processes to communicate and synchronize with each other.

IPC Mechanisms:
1. Message Passing: Processes send/receive messages. Example: Pipes, Message Queues, Sockets.
2. Shared Memory: A region of memory is shared between processes. Faster but needs synchronization (semaphores, mutex).
3. Signals: Used to notify a process about an event (e.g., SIGKILL in UNIX).
4. Semaphores: Synchronization tool to control access to shared resources.
5. Monitors: High-level synchronization construct.

🔹 Classical IPC Problems
(a) Producer–Consumer Problem: Producer generates data, Consumer takes data. Synchronization needed for buffer management.
(b) Readers–Writers Problem: Multiple readers can read simultaneously, writers need exclusive access.
(c) Dining Philosophers Problem: 5 philosophers need 2 forks to eat. Prevents deadlock and starvation.
(d) Bounded Buffer Problem: Producer-Consumer with fixed-size buffer.
(e) Sleeping Barber Problem: Synchronize barber and customers.

🔹 Process Scheduling
Types of Scheduling:
1. Long-Term Scheduling: Decides which jobs are admitted into the system.
2. Medium-Term Scheduling: Temporarily suspends/resumes processes (swapping).
3. Short-Term Scheduling (CPU Scheduling): Decides which process gets CPU next.

CPU Scheduling Algorithms:
(a) FCFS (First-Come, First-Served): Processes served in arrival order. Suffers from Convoy Effect.
(b) SJF (Shortest Job First): Process with smallest burst time runs first. Optimal for average waiting time.
(c) Priority Scheduling: CPU assigned based on priority. Problem: Starvation. Solution: Aging.
(d) Round Robin (RR): Each process gets fixed time quantum. Fair for time-sharing systems.
(e) Multilevel Queue Scheduling: Processes divided into multiple queues with different algorithms.
(f) Multilevel Feedback Queue: Processes can move between queues.

Scheduling Criteria:
• CPU Utilization – keep CPU busy
• Throughput – processes completed per unit time
• Turnaround Time – submission to completion
• Waiting Time – time in ready queue
• Response Time – request to first response
• Fairness – all processes get CPU time

🔹 Multiprocessing
Definition: Use of two or more CPUs within a single computer system for simultaneous execution.
Key Features: True parallelism, multiple CPUs share same memory and I/O.
Advantages: Faster execution, high reliability, better CPU utilization.

🔹 Time-Sharing
Definition: CPU time divided into small slices (time quantum), each process gets a slice in round-robin fashion.
Key Features: Based on context switching, provides interactive computing for multiple users.
Advantages: Fair CPU allocation, fast response, good for multi-user environments.

Comparison: Multiprocessing uses multiple CPUs for true parallelism; Time-sharing shares single CPU time among processes.`,
      contentBn: `প্রসেস: প্রসেস মডেল ও বাস্তবায়ন, ইন্টার-প্রসেস কমিউনিকেশন (IPC), শাস্ত্রীয় IPC সমস্যা, প্রসেস শিডিউলিং, মাল্টিপ্রসেসিং ও টাইম-শেয়ারিং।

🔹 প্রসেস কী?
একটি প্রসেস = কার্যকরী একটি প্রোগ্রাম। এতে অন্তর্ভুক্ত: প্রোগ্রাম কোড, ডেটা, প্রোগ্রাম কাউন্টার, রেজিস্টার ও রিসোর্স।

🔹 প্রসেস মডেল

মূল ধারণা:
১. মাল্টিপ্রোগ্রামিং মডেল: একাধিক প্রসেস মেমোরিতে লোড করা। CPU তাদের মধ্যে সুইচ করে।
২. প্রসেস অবস্থা: নিউ → রেডি → রানিং → ওয়েটিং → টার্মিনেটেড
৩. প্রসেস কন্ট্রোল ব্লক (PCB): OS দ্বারা প্রসেস তথ্য সংরক্ষণের ডেটা স্ট্রাকচার।

🔹 প্রসেস বাস্তবায়ন
(ক) প্রসেস তৈরি: সিস্টেম কল দ্বারা তৈরি। প্যারেন্ট প্রসেস চাইল্ড প্রসেস তৈরি করে।
(খ) প্রসেস এক্সিকিউশন: শিডিউলার সিদ্ধান্ত নেয় কোন প্রসেস চালাবে।
(গ) প্রসেস সমাপ্তি: স্বাভাবিক সমাপ্তি, ত্রুটিতে সমাপ্তি, অন্য প্রসেস দ্বারা বন্ধ।
(ঘ) প্রসেস কমিউনিকেশন: IPC: শেয়ার্ড মেমোরি, মেসেজ পাসিং।

🔹 ইন্টার-প্রসেস কমিউনিকেশন (IPC)
সংজ্ঞা: IPC হল প্রক্রিয়া যা প্রসেসকে একে অপরের সাথে যোগাযোগ ও সিনক্রোনাইজ করতে দেয়।

IPC পদ্ধতি:
১. মেসেজ পাসিং: প্রসেস বার্তা পাঠায়/গ্রহণ করে।
২. শেয়ার্ড মেমোরি: মেমোরির একটি অঞ্চল প্রসেসের মধ্যে ভাগ করা হয়।
৩. সিগন্যাল: ইভেন্ট সম্পর্কে প্রসেসকে জানাতে ব্যবহৃত হয়।
৪. সেমাফোর: শেয়ার্ড রিসোর্স অ্যাক্সেস নিয়ন্ত্রণের সিনক্রোনাইজেশন টুল।
৫. মনিটর: উচ্চ-স্তরের সিনক্রোনাইজেশন কনস্ট্রাক্ট।

🔹 শাস্ত্রীয় IPC সমস্যা
(ক) প্রোডিউসার-কনজিউমার সমস্যা
(খ) রিডার্স-রাইটার্স সমস্যা
(গ) ডাইনিং ফিলোসফার্স সমস্যা
(ঘ) বাউন্ডেড বাফার সমস্যা
(ঙ) স্লিপিং বার্বার সমস্যা

🔹 প্রসেস শিডিউলিং

শিডিউলিংয়ের প্রকার:
১. দীর্ঘমেয়াদী শিডিউলিং
২. মধ্যবর্তী শিডিউলিং
৩. স্বল্পমেয়াদী শিডিউলিং (CPU শিডিউলিং)

CPU শিডিউলিং অ্যালগরিদম:
(ক) FCFS: আগে আসা আগে সার্ভ
(খ) SJF: সবচেয়ে ছোট চাকরি আগে
(গ) প্রায়োরিটি শিডিউলিং: প্রায়োরিটি অনুযায়ী
(ঘ) রাউন্ড রবিন: নির্দিষ্ট টাইম কোয়ান্টাম
(ঙ) মাল্টিলেভেল কিউ শিডিউলিং
(চ) মাল্টিলেভেল ফিডব্যাক কিউ

শিডিউলিং মাপকাঠি:
• CPU ব্যবহার
• থ্রুপুট
• টার্নঅ্যারাউন্ড সময়
• অপেক্ষার সময়
• প্রতিক্রিয়া সময়
• ন্যায্যতা

🔹 মাল্টিপ্রসেসিং
সংজ্ঞা: একটি কম্পিউটার সিস্টেমে একসাথে একাধিক CPU ব্যবহার।

🔹 টাইম-শেয়ারিং
সংজ্ঞা: CPU সময় ছোট স্লাইসে ভাগ করা হয়, প্রতিটি প্রসেস স্লাইস পায়।

তুলনা: মাল্টিপ্রসেসিং একাধিক CPU ব্যবহার করে প্রকৃত প্যারালেলিজমের জন্য; টাইম-শেয়ারিং একটি CPU সময় প্রসেসের মধ্যে ভাগ করে।`,
      takeaways: [
        "Process = program in execution with states: new, ready, running, waiting, terminated",
        "IPC mechanisms: message passing, shared memory, semaphores, signals, monitors",
        "Classical IPC problems: Producer-Consumer, Readers-Writers, Dining Philosophers",
        "CPU Scheduling algorithms: FCFS, SJF, Priority, Round Robin, Multilevel Queue"
      ],
      takeawaysBn: [
        "প্রসেস = কার্যকরী প্রোগ্রাম যার অবস্থা: নিউ, রেডি, রানিং, ওয়েটিং, টার্মিনেটেড",
        "IPC পদ্ধতি: মেসেজ পাসিং, শেয়ার্ড মেমোরি, সেমাফোর, সিগন্যাল, মনিটর",
        "শাস্ত্রীয় IPC সমস্যা: প্রোডিউসার-কনজিউমার, রিডার্স-রাইটার্স, ডাইনিং ফিলোসফার্স",
        "CPU শিডিউলিং অ্যালগরিদম: FCFS, SJF, প্রায়োরিটি, রাউন্ড রবিন, মাল্টিলেভেল কিউ"
      ],
      level: "Advanced"
    },
    {
      id: "os3",
      title: "Memory Management: Swapping, Paging, Segmentation & Virtual Memory",
      titleBn: "মেমোরি ম্যানেজমেন্ট: সোয়াপিং, পেজিং, সেগমেন্টেশন ও ভার্চুয়াল মেমোরি",
      content: `Memory management: swapping, paging, segmentation, virtual memory.

🔹 Swapping
Definition: Entire processes are temporarily moved between main memory (RAM) and secondary storage (disk).
How it works: If RAM is full, OS swaps out a process to disk. When needed again, swaps it back.
Advantages: Allows more processes to run than physical memory.
Disadvantages: Slow (disk I/O slower than RAM), thrashing if too much swapping.

🔹 Paging
Definition: Memory management scheme that eliminates external fragmentation by dividing memory into fixed-size blocks.
- Logical memory (process) → divided into pages (same size)
- Physical memory (RAM) → divided into frames (same size as pages)
Page Table: Keeps track of where each page is stored in RAM.
Advantages: No external fragmentation, efficient memory use, non-contiguous memory.
Disadvantages: Page table overhead, internal fragmentation.

Paging Formulas:
- Page Number (P) = Logical Address / Page Size
- Offset (d) = Logical Address mod Page Size
- Physical Address (PA) = (Frame Number × Frame Size) + Offset

🔹 Segmentation
Definition: Memory is divided into logical segments (not fixed-size like paging). Each segment represents a logical unit: Code segment, Data segment, Stack segment, Heap segment.
Addressing: Logical Address = (Segment Number, Offset)
Segmentation Table: Each entry stores Base (starting physical address) and Limit (length).
Physical Address: PA = Base[S] + Offset, if Offset < Limit, else Segmentation Fault.

🔹 Virtual Memory
Definition: Technique that allows execution of processes that may not be fully in physical memory (RAM). Uses secondary storage (disk) + demand paging.
Key Concepts:
- Page Table: Maps virtual pages to physical frames
- Page Fault: If required page not in memory, OS brings it from disk
- Thrashing: Page faults occur too frequently

Effective Access Time (EAT):
EAT = (1 - p) × m + p × f
where m = memory access time, f = page fault service time, p = page fault rate

🔹 Page Replacement Algorithms
1. FIFO (First-In, First-Out): Oldest loaded page is replaced. Simple but may have Belady's Anomaly.
2. LRU (Least Recently Used): Replace page that was least recently used. Good practical choice.
3. Optimal (MIN): Replace page that will not be used for longest time in future. Theoretical best.

Page Fault Rate (PFR) = Page Faults / Total References

Comparison:
| Algorithm | Policy | Faults (8 refs, 3 frames) |
| FIFO | Oldest page replaced | 7 |
| LRU | Least recently used | 6 |
| Optimal | Future knowledge | 5-6 |`,
      contentBn: `মেমোরি ম্যানেজমেন্ট: সোয়াপিং, পেজিং, সেগমেন্টেশন ও ভার্চুয়াল মেমোরি।

🔹 সোয়াপিং
সংজ্ঞা: সম্পূর্ণ প্রসেস অস্থায়ীভাবে মেইন মেমোরি (RAM) এবং সেকেন্ডারি স্টোরেজ (ডিস্ক) এর মধ্যে স্থানান্তরিত হয়।
কিভাবে কাজ করে: RAM পূর্ণ হলে, OS একটি প্রসেস ডিস্কে সরিয়ে দেয়। প্রয়োজন হলে, পুনরায় RAM-এ নিয়ে আসে।
সুবিধা: ফিজিক্যাল মেমোরির চেয়ে বেশি প্রসেস চালানোর অনুমতি দেয়।
অসুবিধা: ধীর, অতিরিক্ত সোয়াপিং থ্র্যাশিং সৃষ্টি করে।

🔹 পেজিং
সংজ্ঞা: মেমোরি ম্যানেজমেন্ট পদ্ধতি যা মেমোরিকে স্থির-আকারের ব্লকে ভাগ করে বাহ্যিক ফ্র্যাগমেন্টেশন দূর করে।
- লজিক্যাল মেমোরি (প্রসেস) → পেজে বিভক্ত
- ফিজিক্যাল মেমোরি (RAM) → ফ্রেমে বিভক্ত
পেজ টেবিল: প্রতিটি পেজ RAM-এর কোথায় সংরক্ষিত তা ট্র্যাক করে।
সুবিধা: বাহ্যিক ফ্র্যাগমেন্টেশন নেই, দক্ষ মেমোরি ব্যবহার।
অসুবিধা: পেজ টেবিল ওভারহেড, অভ্যন্তরীণ ফ্র্যাগমেন্টেশন।

পেজিং সূত্র:
- পেজ নাম্বার (P) = লজিক্যাল অ্যাড্রেস / পেজ সাইজ
- অফসেট (d) = লজিক্যাল অ্যাড্রেস mod পেজ সাইজ
- ফিজিক্যাল অ্যাড্রেস (PA) = (ফ্রেম নাম্বার × ফ্রেম সাইজ) + অফসেট

🔹 সেগমেন্টেশন
সংজ্ঞা: মেমোরি লজিক্যাল সেগমেন্টে বিভক্ত (পেজিংয়ের মতো স্থির-আকার নয়)। প্রতিটি সেগমেন্ট লজিক্যাল ইউনিট প্রতিনিধিত্ব করে: কোড সেগমেন্ট, ডেটা সেগমেন্ট, স্ট্যাক সেগমেন্ট, হিপ সেগমেন্ট।
অ্যাড্রেসিং: লজিক্যাল অ্যাড্রেস = (সেগমেন্ট নাম্বার, অফসেট)
সেগমেন্টেশন টেবিল: প্রতিটি এন্ট্রিতে বেস ও লিমিট থাকে।

🔹 ভার্চুয়াল মেমোরি
সংজ্ঞা: পদ্ধতি যা প্রসেস এক্সিকিউশন অনুমতি দেয় যা সম্পূর্ণরূপে ফিজিক্যাল মেমোরিতে নাও থাকতে পারে। ডিমান্ড পেজিং + ডিস্ক ব্যবহার করে।
মূল ধারণা:
- পেজ টেবিল: ভার্চুয়াল পেজকে ফিজিক্যাল ফ্রেমে ম্যাপ করে
- পেজ ফল্ট: প্রয়োজনীয় পেজ মেমোরিতে না থাকলে, OS ডিস্ক থেকে আনে
- থ্র্যাশিং: পেজ ফল্ট খুব ঘন ঘন ঘটে

কার্যকর অ্যাক্সেস সময় (EAT):
EAT = (1 - p) × m + p × f

🔹 পেজ রিপ্লেসমেন্ট অ্যালগরিদম
১. FIFO: সবচেয়ে পুরোনো লোড করা পেজ প্রতিস্থাপিত হয়।
২. LRU: সবচেয়ে কম সম্প্রতি ব্যবহৃত পেজ প্রতিস্থাপিত হয়।
৩. অপ্টিমাল: ভবিষ্যতে সবচেয়ে দীর্ঘ সময়ের জন্য ব্যবহার হবে না এমন পেজ প্রতিস্থাপিত হয়।

পেজ ফল্ট রেট = পেজ ফল্ট / মোট উল্লেখন

তুলনা:
| অ্যালগরিদম | নীতি | ফল্ট (৮ উল্লেখন, ৩ ফ্রেম) |
| FIFO | সবচেয়ে পুরোনো পেজ | ৭ |
| LRU | সবচেয়ে কম সম্প্রতি ব্যবহৃত | ৬ |
| অপ্টিমাল | ভবিষ্যত জ্ঞান | ৫-৬ |`,
      takeaways: [
        "Swapping moves entire processes between RAM and disk",
        "Paging divides memory into fixed-size pages and frames",
        "Segmentation divides memory into logical segments (code, data, stack)",
        "Virtual memory allows execution of processes larger than physical RAM",
        "Page replacement: FIFO, LRU, Optimal"
      ],
      takeawaysBn: [
        "সোয়াপিং সম্পূর্ণ প্রসেস RAM ও ডিস্কের মধ্যে স্থানান্তর করে",
        "পেজিং মেমোরিকে স্থির-আকারের পেজ ও ফ্রেমে বিভক্ত করে",
        "সেগমেন্টেশন মেমোরিকে লজিক্যাল সেগমেন্টে বিভক্ত করে",
        "ভার্চুয়াল মেমোরি ফিজিক্যাল RAM-এর চেয়ে বড় প্রসেস এক্সিকিউশন অনুমতি দেয়",
        "পেজ রিপ্লেসমেন্ট: FIFO, LRU, অপ্টিমাল"
      ],
      level: "Advanced"
    },
    {
      id: "os4",
      title: "Input/Output: Hardware, Software, Disk, Terminals, Clocks",
      titleBn: "ইনপুট/আউটপুট: হার্ডওয়্যার, সফটওয়্যার, ডিস্ক, টার্মিনাল, ক্লক",
      content: `Input/Output: hardware, software, disk, terminals, clocks.

🔹 I/O Overview
I/O refers to the communication between a computer system and the external environment (users, devices, network, storage). It involves input devices (data into the system) and output devices (data from the system).

🔹 I/O Hardware
Hardware provides the physical interface between the computer and devices.
Key Components:
1. Disk Drives (Hard Disk, SSD): Persistent storage, read/write blocks of data.
2. Terminals (Keyboard, Monitor): Keyboard for input, Monitor for output.
3. Clocks / Timers: Hardware timer used for CPU scheduling, time-stamping, and generating interrupts.
4. Controllers / Interface Cards: Disk controller, USB controller, etc. Manage low-level device operations.

🔹 I/O Software
OS provides software mechanisms to manage devices.
Layers:
1. Device Drivers: Interface between OS and hardware. Translate OS commands into device-specific operations.
2. Interrupt Handling: Devices notify CPU via interrupts when ready or completed.
3. I/O Scheduling: OS decides order of servicing I/O requests.
4. Buffers and Caches: Temporarily store data to reduce CPU waiting and improve speed.

🔹 Disks
Magnetic disks → persistent storage, organized in tracks, sectors, cylinders.
Access time components:
1. Seek time: moving read/write head
2. Rotational latency: waiting for correct sector
3. Transfer time: actually reading/writing data

Disk Scheduling Algorithms: FCFS, SSTF (Shortest Seek Time First), SCAN / C-SCAN (elevator algorithms).

🔹 Terminals
Devices for human interaction: input/output.
Types:
1. Character-based terminals: keyboard + screen
2. Graphical terminals: GUI-based input/output
Handled using line discipline and device drivers in OS.

🔹 Clocks
Hardware timers generate regular interrupts for:
- Preemptive CPU scheduling
- Maintaining system time
- Multiplexing CPU for time-sharing systems
OS can use timers to implement sleep, delay, or timeout functions.

Summary Table:
| Component | Role / Function |
| Hardware | Physical I/O devices: disks, keyboards, monitors, clocks |
| Software | Device drivers, buffers, I/O scheduling, interrupt handlers |
| Disk | Persistent storage, organized in tracks/sectors |
| Terminals | User interaction (input/output) |
| Clocks | Timers generate interrupts for scheduling |`,
      contentBn: `ইনপুট/আউটপুট: হার্ডওয়্যার, সফটওয়্যার, ডিস্ক, টার্মিনাল, ক্লক।

🔹 I/O ওভারভিউ
I/O বলতে কম্পিউটার সিস্টেম এবং বাহ্যিক পরিবেশের মধ্যে যোগাযোগ বোঝায়।

🔹 I/O হার্ডওয়্যার
হার্ডওয়্যার কম্পিউটার ও ডিভাইসের মধ্যে শারীরিক ইন্টারফেস প্রদান করে।
মূল উপাদান:
১. ডিস্ক ড্রাইভ: স্থায়ী স্টোরেজ
২. টার্মিনাল: কীবোর্ড (ইনপুট), মনিটর (আউটপুট)
৩. ক্লক/টাইমার: CPU শিডিউলিং, টাইম-স্ট্যাম্পিং, ইন্টারাপ্ট তৈরির জন্য
৪. কন্ট্রোলার/ইন্টারফেস কার্ড: ডিভাইস অপারেশন পরিচালনা করে

🔹 I/O সফটওয়্যার
OS ডিভাইস পরিচালনার জন্য সফটওয়্যার পদ্ধতি প্রদান করে।
স্তর:
১. ডিভাইস ড্রাইভার: OS ও হার্ডওয়্যারের মধ্যে ইন্টারফেস
২. ইন্টারাপ্ট হ্যান্ডলিং: ডিভাইস CPU-কে ইন্টারাপ্টের মাধ্যমে জানায়
৩. I/O শিডিউলিং: OS I/O অনুরোধ সার্ভিসের ক্রম সিদ্ধান্ত নেয়
৪. বাফার ও ক্যাশ: অস্থায়ীভাবে ডেটা সংরক্ষণ করে

🔹 ডিস্ক
ম্যাগনেটিক ডিস্ক → স্থায়ী স্টোরেশন, ট্র্যাক, সেক্টর, সিলিন্ডারে সংগঠিত।
অ্যাক্সেস সময়ের উপাদান:
১. সিক টাইম: রিড/রাইট হেড সরানো
২. রোটেশনাল লেটেন্সি: সঠিক সেক্টরের জন্য অপেক্ষা
৩. ট্রান্সফার টাইম: আসলে ডেটা পড়া/লেখা

ডিস্ক শিডিউলিং অ্যালগরিদম: FCFS, SSTF, SCAN / C-SCAN

🔹 টার্মিনাল
মানব মিথস্ক্রিয়ার জন্য ডিভাইস: ইনপুট/আউটপুট।
প্রকার:
১. ক্যারেক্টার-ভিত্তিক টার্মিনাল
২. গ্রাফিক্যাল টার্মিনাল

🔹 ক্লক
হার্ডওয়্যার টাইমার নিয়মিত ইন্টারাপ্ট তৈরি করে:
- প্রিম্পটিভ CPU শিডিউলিং
- সিস্টেম সময় রক্ষণাবেক্ষণ
- টাইম-শেয়ারিং সিস্টেমের জন্য CPU মাল্টিপ্লেক্সিং

সারাংশ টেবিল:
| উপাদান | ভূমিকা/কাজ |
| হার্ডওয়্যার | শারীরিক I/O ডিভাইস |
| সফটওয়্যার | ডিভাইস ড্রাইভার, বাফার, I/O শিডিউলিং |
| ডিস্ক | স্থায়ী স্টোরেজ |
| টার্মিনাল | ব্যবহারকারী মিথস্ক্রিয়া |
| ক্লক | শিডিউলিংয়ের জন্য টাইমার ও ইন্টারাপ্ট |`,
      takeaways: [
        "I/O hardware includes disks, terminals, clocks, controllers",
        "I/O software includes device drivers, interrupt handling, buffers",
        "Disk access time: seek time + rotational latency + transfer time",
        "Clocks generate interrupts for scheduling and time-sharing"
      ],
      takeawaysBn: [
        "I/O হার্ডওয়্যারে ডিস্ক, টার্মিনাল, ক্লক, কন্ট্রোলার অন্তর্ভুক্ত",
        "I/O সফটওয়্যারে ডিভাইস ড্রাইভার, ইন্টারাপ্ট হ্যান্ডলিং, বাফার অন্তর্ভুক্ত",
        "ডিস্ক অ্যাক্সেস সময়: সিক টাইম + রোটেশনাল লেটেন্সি + ট্রান্সফার টাইম",
        "ক্লক শিডিউলিং ও টাইম-শেয়ারিংয়ের জন্য ইন্টারাপ্ট তৈরি করে"
      ],
      level: "Advanced"
    },
    {
      id: "os5",
      title: "Deadlock: Resource Allocation, Detection, Prevention & Recovery",
      titleBn: "ডেডলক: রিসোর্স বরাদ্দ, সনাক্তকরণ, প্রতিরোধ ও পুনরুদ্ধার",
      content: `Deadlock: resource allocation and deadlock, deadlock detection, prevention and recovery.

🔹 Deadlock in Operating Systems
A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process.

🔹 Resource Allocation and Deadlock
Coffman's Four Conditions for Deadlock (all must hold simultaneously):
1. Mutual Exclusion: Resources can't be shared, only one process at a time.
2. Hold and Wait: A process holding at least one resource can request more.
3. No Preemption: Resources cannot be forcibly taken away.
4. Circular Wait: A closed chain of processes exists, each waiting for a resource held by the next.

🔹 Deadlock Detection
System checks if a deadlock has happened.
- Resource Allocation Graph (RAG): Processes and Resources as nodes. Edges: Request (Process→Resource) and Allocation (Resource→Process).
- Cycle in RAG = Deadlock possible (if single instance per resource).
- Detection Algorithm: Similar to Banker's Algorithm. Check if available resources can satisfy waiting processes.

🔹 Deadlock Prevention
Stop at least one Coffman condition from happening.
1. Mutual Exclusion: Not always preventable.
2. Hold and Wait: Require processes to request all resources at once.
3. No Preemption: Allow OS to take resources back.
4. Circular Wait: Impose ordering of resources (e.g., request in increasing ID order).

🔹 Deadlock Avoidance (Banker's Algorithm)
Instead of prevention, avoid unsafe states.
Data Structures (n processes, m resources):
- Available[m]: Currently available resources
- Max[n][m]: Maximum demand of each process
- Allocation[n][m]: Currently allocated resources
- Need[n][m] = Max - Allocation

Safety Algorithm:
1. Work = Available, Finish[i] = false
2. Find Pi with Need[i] ≤ Work and Finish[i] = false
3. If found: Work = Work + Allocation[i], Finish[i] = true, repeat
4. If all Finish[i] = true → Safe state

Resource Request Algorithm:
1. If Request[i] ≤ Need[i] → continue
2. If Request[i] ≤ Available → continue
3. Pretend to allocate, run safety algorithm
4. If safe → grant; if unsafe → deny

🔹 Deadlock Recovery
If deadlock happens, fix it.
Methods:
1. Process Termination: Kill one or more processes until deadlock cycle breaks.
2. Resource Preemption: Take resources away and assign to others.

Summary:
| Method | Idea | Example |
| Detection | Check for deadlock | RAG cycle check |
| Prevention | Break one of 4 conditions | Order resources |
| Avoidance | Use safe states | Banker's Algorithm |
| Recovery | Resolve after it occurs | Kill process / Preempt |`,
      contentBn: `ডেডলক: রিসোর্স বরাদ্দ ও ডেডলক, ডেডলক সনাক্তকরণ, প্রতিরোধ ও পুনরুদ্ধার।

🔹 অপারেটিং সিস্টেমে ডেডলক
ডেডলক এমন একটি পরিস্থিতি যেখানে একাধিক প্রসেস ব্লক হয়ে যায় কারণ প্রতিটি প্রসেস একটি রিসোর্স ধরে রেখে অন্য প্রসেসের ধরা আরেকটি রিসোর্সের অপেক্ষায় থাকে।

🔹 রিসোর্স বরাদ্দ ও ডেডলক
কফম্যানের চারটি শর্ত (সবগুলো একসাথে থাকতে হবে):
১. মিউচুয়াল এক্সক্লুশন: রিসোর্স শেয়ার করা যায় না
২. হোল্ড অ্যান্ড ওয়েট: প্রসেস আরও রিসোর্স চাইতে পারে
৩. নো প্রিম্পশন: রিসোর্স জোর করে কেড়ে নেওয়া যায় না
৪. সার্কুলার ওয়েট: প্রসেসের একটি বদ্ধ চেইন থাকে

🔹 ডেডলক সনাক্তকরণ
সিস্টেম চেক করে ডেডলক ঘটেছে কিনা।
- রিসোর্স এলোকেশন গ্রাফ (RAG): নোড হিসেবে প্রসেস ও রিসোর্স
- RAG-এ চক্র = ডেডলক সম্ভব

🔹 ডেডলক প্রতিরোধ
কমপক্ষে একটি কফম্যান শর্ত বন্ধ করা।
১. মিউচুয়াল এক্সক্লুশন: সবসময় প্রতিরোধযোগ্য নয়
২. হোল্ড অ্যান্ড ওয়েট: সব রিসোর্স একসাথে চাইতে হবে
৩. নো প্রিম্পশন: OS কে রিসোর্স ফেরত নেওয়ার অনুমতি
৪. সার্কুলার ওয়েট: রিসোর্সের অর্ডারিং আরোপ

🔹 ডেডলক এভয়েড্যান্স (ব্যাংকার্স অ্যালগরিদম)
অসুরক্ষিত অবস্থা এড়িয়ে চলা।
ডেটা স্ট্রাকচার:
- Available[m]: বর্তমানে উপলব্ধ রিসোর্স
- Max[n][m]: প্রতিটি প্রসেসের সর্বোচ্চ চাহিদা
- Allocation[n][m]: বর্তমানে বরাদ্দকৃত রিসোর্স
- Need[n][m] = Max - Allocation

নিরাপত্তা অ্যালগরিদম:
সব প্রসেস ফিনিশ করলে → নিরাপদ অবস্থা

রিসোর্স অনুরোধ অ্যালগরিদম:
নিরাপদ হলে → মঞ্জুর; অসুরক্ষিত হলে → অস্বীকার

🔹 ডেডলক পুনরুদ্ধার
ডেডলক ঘটলে সমাধান করা।
পদ্ধতি:
১. প্রসেস টার্মিনেশন: এক বা একাধিক প্রসেস বন্ধ করা
২. রিসোর্স প্রিম্পশন: রিসোর্স কেড়ে নিয়ে অন্যদের দেওয়া

সারাংশ:
| পদ্ধতি | ধারণা | উদাহরণ |
| সনাক্তকরণ | ডেডলক চেক | RAG চক্র চেক |
| প্রতিরোধ | ৪টি শর্তের একটি ভাঙা | রিসোর্স অর্ডারিং |
| এভয়েড্যান্স | নিরাপদ অবস্থা ব্যবহার | ব্যাংকার্স অ্যালগরিদম |
| পুনরুদ্ধার | ঘটার পর সমাধান | প্রসেস বন্ধ / প্রিম্পশন |`,
      takeaways: [
        "Deadlock requires all four Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
        "Deadlock detection uses Resource Allocation Graph (RAG)",
        "Prevention breaks at least one Coffman condition",
        "Banker's Algorithm avoids deadlock by maintaining safe states",
        "Recovery methods: process termination or resource preemption"
      ],
      takeawaysBn: [
        "ডেডলকের জন্য কফম্যানের চারটি শর্ত প্রয়োজন: মিউচুয়াল এক্সক্লুশন, হোল্ড অ্যান্ড ওয়েট, নো প্রিম্পশন, সার্কুলার ওয়েট",
        "ডেডলক সনাক্তকরণ রিসোর্স এলোকেশন গ্রাফ (RAG) ব্যবহার করে",
        "প্রতিরোধ কমপক্ষে একটি কফম্যান শর্ত ভাঙে",
        "ব্যাংকার্স অ্যালগরিদম নিরাপদ অবস্থা বজায় রেখে ডেডলক এড়ায়",
        "পুনরুদ্ধার পদ্ধতি: প্রসেস বন্ধ বা রিসোর্স প্রিম্পশন"
      ],
      level: "Advanced"
    },
    {
      id: "os6",
      title: "File Systems & Case Study of Operating Systems",
      titleBn: "ফাইল সিস্টেম ও অপারেটিং সিস্টেমের কেস স্টাডি",
      content: `File Systems: files, directories, security, protection. Case study of some operating systems.

🔹 File Systems
A file system is the way an operating system organizes and manages data on storage devices.

1. Files
A file is a collection of related data stored on secondary storage.
Types: Text files (human-readable), Binary files (machine-readable), Executable files (programs).
Attributes: name, size, type, location, owner, creation/modification date, permissions.
Operations: create, open, read, write, delete, append, seek.

2. Directories
A directory stores file information and organizes them hierarchically.
Functions: File grouping, Path naming (absolute vs relative path), Searching, navigation, access control.
Structures:
- Single-level directory: all files in one place
- Two-level directory: separate for each user
- Tree-structured directory: most common
- Acyclic graph / General graph directory: allow sharing, shortcuts, links

3. Security
Ensures files are safe from unauthorized access, corruption, or data loss.
Achieved through: Authentication, Authorization, Encryption, Backups.

4. Protection
Prevents accidental or malicious misuse of files/resources.
Common models:
- Access Control Lists (ACLs): specify users and their permissions
- User/Group/Other permissions (rwx in UNIX/Linux)
- Capability lists: tokens given to processes with rights

🔹 Case Study of Operating Systems

1. UNIX
History: 1969 at Bell Labs. Design: Portable, multi-tasking, multi-user OS written in C.
Key Features: Hierarchical file system, Command-line shell, Device independence.
Use Cases: Servers, scientific computing, workstations.

2. Linux
History: Created by Linus Torvalds in 1991. Design: Open-source, monolithic kernel.
Key Features: Open-source, supports multiple file systems, excellent networking.
Use Cases: Web servers, cloud computing, Android OS foundation.

3. Windows
History: Introduced by Microsoft in 1985. Design: Proprietary, hybrid kernel.
Key Features: GUI, wide software & hardware compatibility, strong backward compatibility.
Use Cases: Personal computers, office work, gaming, enterprise.

4. macOS (Apple)
History: Current macOS is UNIX-based. Design: Hybrid (Mach + BSD UNIX).
Key Features: Elegant GUI, UNIX-based security, exclusive for Apple hardware.
Use Cases: Creative industries, general personal computing.

5. Android
History: Based on Linux kernel, developed by Google. Design: Modified Linux kernel.
Key Features: Touchscreen optimized GUI, millions of apps via Play Store, open-source.
Use Cases: Smartphones, tablets, TVs, cars, IoT.

6. iOS
History: Apple's mobile OS, introduced in 2007. Design: Based on Darwin (UNIX).
Key Features: Highly secure, sandboxed apps, seamless Apple integration.
Use Cases: iPhones, iPads, Apple TVs.

7. Real-Time OS (RTOS) - Example: VxWorks
Design: Optimized for deterministic (real-time) response.
Key Features: Low latency, task prioritization, minimal overhead.
Use Cases: Embedded systems, aviation, medical devices.

Comparative Analysis:
| OS | Type | Strengths | Weaknesses |
| UNIX | Multi-user | Secure, stable | Not beginner-friendly |
| Linux | Open-source | Free, secure, scalable | Steep learning curve |
| Windows | Proprietary | User-friendly, widely used | Security vulnerabilities |
| macOS | Proprietary | Stable, polished UI | Expensive, hardware lock |
| Android | Open-source | Flexible, large ecosystem | Fragmentation |
| iOS | Proprietary | Secure, optimized | Limited customization |
| RTOS | Real-time | Deterministic, reliable | Limited general-purpose features |`,
      contentBn: `ফাইল সিস্টেম: ফাইল, ডিরেক্টরি, নিরাপত্তা, সুরক্ষা। অপারেটিং সিস্টেমের কেস স্টাডি।

🔹 ফাইল সিস্টেম
ফাইল সিস্টেম হল অপারেটিং সিস্টেমের স্টোরেজ ডিভাইসে ডেটা সংগঠিত ও পরিচালনার উপায়।

১. ফাইল
ফাইল হল সেকেন্ডারি স্টোরেজে সংরক্ষিত সম্পর্কিত ডেটার সংগ্রহ।
প্রকার: টেক্সট ফাইল, বাইনারি ফাইল, এক্সিকিউটেবল ফাইল।
অপারেশন: তৈরি, খোলা, পড়া, লেখা, মুছে ফেলা, সংযোজন।

২. ডিরেক্টরি
ডিরেক্টরি ফাইল তথ্য সংরক্ষণ করে এবং তাদের অনুক্রমিকভাবে সংগঠিত করে।
গঠন: সিঙ্গেল-লেভেল, টু-লেভেল, ট্রি-স্ট্রাকচার্ড, অ্যাসাইক্লিক গ্রাফ।

৩. নিরাপত্তা
নিশ্চিত করে ফাইল অননুমোদিত অ্যাক্সেস থেকে নিরাপদ।
পদ্ধতি: প্রমাণীকরণ, অনুমোদন, এনক্রিপশন, ব্যাকআপ।

৪. সুরক্ষা
ফাইল/রিসোর্সের দুর্ঘটনাজনিত বা দূষিত অপব্যবহার প্রতিরোধ করে।
মডেল: ACL, ইউজার/গ্রুপ/অদার অনুমতি, ক্যাপাবিলিটি লিস্ট।

🔹 অপারেটিং সিস্টেমের কেস স্টাডি

১. ইউনিক্স
ইতিহাস: ১৯৬৯ বেল ল্যাবে। ডিজাইন: পোর্টেবল, মাল্টি-টাস্কিং, মাল্টি-ইউজার।
ব্যবহার: সার্ভার, বৈজ্ঞানিক কম্পিউটিং।

২. লিনাক্স
ইতিহাস: ১৯৯১ লিনাস টরভাল্ডস দ্বারা তৈরি। ডিজাইন: ওপেন-সোর্স, মোনোলিথিক কার্নেল।
ব্যবহার: ওয়েব সার্ভার, ক্লাউড কম্পিউটিং, অ্যান্ড্রয়েড।

৩. উইন্ডোজ
ইতিহাস: ১৯৮৫ মাইক্রোসফট দ্বারা। ডিজাইন: প্রোপ্রাইয়েটারি, হাইব্রিড কার্নেল।
ব্যবহার: ব্যক্তিগত কম্পিউটার, অফিস কাজ, গেমিং।

৪. ম্যাকওএস (অ্যাপল)
ইতিহাস: ইউনিক্স-ভিত্তিক। ডিজাইন: হাইব্রিড (Mach + BSD UNIX)।
ব্যবহার: ক্রিয়েটিভ ইন্ডাস্ট্রি, ব্যক্তিগত কম্পিউটিং।

৫. অ্যান্ড্রয়েড
ইতিহাস: লিনাক্স কার্নেল-ভিত্তিক, গুগল দ্বারা উন্নত।
ব্যবহার: স্মার্টফোন, ট্যাবলেট, টিভি, গাড়ি, IoT।

৬. iOS
ইতিহাস: অ্যাপলের মোবাইল OS, ২০০৭ সালে প্রবর্তিত।
ব্যবহার: আইফোন, আইপ্যাড, অ্যাপল টিভি।

৭. রিয়াল-টাইম OS (RTOS) - উদাহরণ: VxWorks
ডিজাইন: ডিটারমিনিস্টিক রেসপন্সের জন্য অপটিমাইজড।
ব্যবহার: এমবেডেড সিস্টেম, এভিয়েশন, মেডিকেল ডিভাইস।

তুলনামূলক বিশ্লেষণ:
| OS | প্রকার | শক্তি | দুর্বলতা |
| ইউনিক্স | মাল্টি-ইউজার | নিরাপদ, স্থিতিশীল | শিক্ষানবিশ-বান্ধব নয় |
| লিনাক্স | ওপেন-সোর্স | বিনামূল্যে, নিরাপদ | খাড়া শিখন বক্ররেখা |
| উইন্ডোজ | প্রোপ্রাইয়েটারি | ব্যবহারকারী-বান্ধব | নিরাপত্তা দুর্বলতা |
| ম্যাকওএস | প্রোপ্রাইয়েটারি | স্থিতিশীল, পলিশড UI | ব্যয়বহুল |
| অ্যান্ড্রয়েড | ওপেন-সোর্স | নমনীয়, বড় ইকোসিস্টেম | খণ্ডিতকরণ |
| iOS | প্রোপ্রাইয়েটারি | নিরাপদ, অপটিমাইজড | সীমিত কাস্টমাইজেশন |`,
      takeaways: [
        "File system organizes data in files and directories",
        "Files have attributes and support operations (create, read, write, delete)",
        "Directory structures: single-level, two-level, tree-structured, acyclic graph",
        "Security uses authentication, authorization, encryption, backups",
        "Major OS case studies: UNIX, Linux, Windows, macOS, Android, iOS, RTOS"
      ],
      takeawaysBn: [
        "ফাইল সিস্টেম ফাইল ও ডিরেক্টরিতে ডেটা সংগঠিত করে",
        "ফাইলের বৈশিষ্ট্য ও অপারেশন রয়েছে (তৈরি, পড়া, লেখা, মুছে ফেলা)",
        "ডিরেক্টরি গঠন: সিঙ্গেল-লেভেল, টু-লেভেল, ট্রি-স্ট্রাকচার্ড, অ্যাসাইক্লিক গ্রাফ",
        "নিরাপত্তা প্রমাণীকরণ, অনুমোদন, এনক্রিপশন, ব্যাকআপ ব্যবহার করে",
        "প্রধান OS কেস স্টাডি: ইউনিক্স, লিনাক্স, উইন্ডোজ, ম্যাকওএস, অ্যান্ড্রয়েড, iOS, RTOS"
      ],
      level: "Advanced"
    }
  ]
}

export const module18 = m18