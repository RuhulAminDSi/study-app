# Input/Output, Disks & Clocks: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/18-operating-system/os-input-output.en.html` (handwritten-style PDF: `notes/pdf/18-operating-system/os-input-output.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Operating System):** "Operating System: its role in computer systems; Operating system concepts; Operating system structure; Process: process model and implementation, Inter-Process Communication (IPC), classical IPC problems, process scheduling, multiprocessing and time-sharing; Memory management: swapping, paging, segmentation, virtual memory; **Input/Output: hardware, software, disk, terminals, clocks**; Deadlock: resource allocation and deadlock, deadlock detection, prevention and recovery; File Systems: files, directories, security, protection; Case study of some operating systems." Controllers and registers, port- vs memory-mapped addressing, DMA modes, the I/O software stack, I/O scheduling, buffering/caching/spooling, disk structure and timings, disk formatting, boot blocks, RAID, SSDs, terminals, line discipline, clocks and timer interrupts are added because the written questions on this line reach for all of them. Memory management is in the Memory lesson, file allocation in the File Systems lesson, CPU scheduling in the Process lesson.

**High-yield:** ① access time = seek + ½ rotation + transfer ② ½ rotation = **30 ÷ rpm** seconds ③ transfer time = bytes ÷ transfer rate ④ the CPU touches only the controller's **registers** ⑤ port-mapped = its own IN/OUT space; memory-mapped costs address space ⑥ DMA = **one** interrupt per block ⑦ block device = fixed blocks, character device = byte stream ⑧ SSTF starves, SCAN is fair, C-SCAN is uniform ⑨ RAID 5 = (N − 1) disks, one may fail ⑩ a small RAID 5 write = **4** disk I/Os.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. I/O hardware: devices, controllers & registers — p. 2 · 2. Polling, interrupt-driven I/O & DMA — p. 3 · 3. The four layers of I/O software — p. 4 · 4. I/O scheduling, buffering & spooling — p. 5 · 5. Disk structure & access time — p. 6 · 6. Disk scheduling: FCFS, SSTF, SCAN, C-SCAN, LOOK — p. 7 · 7. Formatting, boot blocks, RAID & SSDs — p. 8 · 8. Terminals & clocks — p. 9 · 9. Night-before sheet — p. 10 · 10. Practice MCQs + written — p. 11.

---

## 1. I/O Hardware: Devices, Controllers & Registers

**I/O** is any transfer of data between the computer and the outside world — a keyboard, a printer, a disk, a network. It is carried out by a **controller** (I/O subsystem, adapter or interface card), which does three jobs: it **moves data between the device and main memory**, it hides the device's speed from the CPU, and it lets the CPU **do other work while a transfer runs**.

| Piece | What it actually is |
|---|---|
| **Device** | the physical unit that does the real work: head, drum, print head, keys |
| **Controller** | the middleman — takes generic commands, buffers data, reports errors |
| **Control register** | what the device should do next (read, write, seek to a cylinder) |
| **Status register** | how it is doing: **busy, ready, error** — the CPU reads this to decide |
| **Data register** | the one-word buffer where a byte crosses between CPU and device |

*(Doodle: four register boxes on the left — CPU, control reg, status reg, data reg — connected by arrows to a controller box on the right holding a small disk ellipse labelled "disk / printer"; the caption marks that the CPU's whole view of a device is three registers and an interrupt line.)*

| Device addressing | Port-mapped (isolated) I/O | Memory-mapped I/O |
|---|---|---|
| **Where the register lives** | in a **separate port address space** — x86 gives 2¹⁶ = 64 K ports | at an **ordinary memory address** in the normal address space |
| **Instructions used** | special **IN** / **OUT** only — few addressing modes | ordinary **load** / **store**; every addressing mode works |
| **What it costs** | a separate instruction set; **no memory is wasted** | **it eats memory address space**, and those addresses must never be cached |

- **Interrupts.** An **interrupt** lets a device call the CPU instead of the CPU calling the device. Three kinds: **trap** (an internal error — divide by zero, page fault), **interrupt** (a device, **asynchronous**), **software interrupt** (a system call). The CPU keeps each handler's address in a **vector table**; the **priority** decides who runs first.
- ⚠️ **Trap:** (i) memory-mapped I/O does **not** turn a device into memory — the address still lands on a controller register. (ii) It is **port-mapped** I/O that has the small instruction set; memory-mapped I/O is what **costs address space**. (iii) An interrupt is **asynchronous**; a trap comes from the instruction being executed.
- 💡 **Trick:** "**Three registers, one table.**" Control says *what*, status says *when*, data says *what byte*; the vector table says *who to jump to*. Everything else in this lesson is a way of avoiding the wait between control and status. A modern machine still does exactly this through one PCIe/USB/SATA controller, **memory-mapped** registers and MSI-X interrupts.

## 2. Polling, Interrupt-Driven I/O & Direct Memory Access

The question of this sheet is always the same: **who carries the bytes, and who pays while it happens?** In **polling** the CPU carries them and pays the whole wait; in **interrupt-driven I/O** it carries them one byte at a time, paying a handler each time; in **DMA** the **controller** carries the whole block and the CPU pays **once, at the end**.

| Method | Who moves data | Interrupts | Verdict |
|---|---|---|---|
| **Polling** | the CPU, word by word | none | **CPU spins; only for slow, rare transfers** |
| **Interrupt-driven** | the CPU, on every interrupt | **one per byte** | works otherwise; **worse than polling below ~1 MB/s** |
| **DMA** ★ | the controller, the whole block | **one per block** | the only method a disk can use |

*(Doodle: three horizontal bars labelled polling, interrupt-driven and DMA, each with a short caption; the dashed red loop between them is the CPU re-testing the status register, and the caption notes that only the last row grows without costing more CPU time.)*

**How DMA shares the bus — and the two device classes**

- **Cycle stealing** — one memory cycle at a time; the CPU slows but is **never blocked**
- **Burst mode** — the controller holds the bus for the **whole block**; **best throughput**
- **Transparent mode** — the bus is used only when the CPU is **not** using it
- **Block device** — fixed-size blocks, **random** access: buffering, caching and scheduling all pay off
- **Character device** — a **byte stream in sequence**: no seek, nothing to schedule or cache

✍ **What does 1 KB really cost?** A device delivers **one byte every 1 µs** (1 MB/s); a block is **1 KB**; a handler costs **2 µs** of CPU. (a) The transfer takes 1024 µs. (b) **Polling:** the CPU is busy all 1024 µs moving bytes. (c) **Interrupt-driven:** 1024 × 2 µs = **2048 µs of CPU** — **twice** the transfer time, so at this rate the device is **faster with polling**. (d) **DMA:** 1 interrupt = 2 µs of CPU for 1024 bytes, i.e. **0.2 %** overhead.

- ⚠️ **Trap:** (i) "interrupt-driven is always better than polling" is **false**: a handler costs more CPU time than a few instructions. (ii) DMA still needs the CPU to **set up** the transfer — it removes the **copying**, not the CPU.
- 💡 **Trick:** "**Slow ⇒ spin, fast ⇒ interrupt, faster ⇒ DMA.**" And "**Steal a cycle, hold a burst, wait quietly.**" — cycle stealing, burst and transparent in three phrases.
- 📌 **IT link:** the 8237 DMA controller of the microprocessor lesson does exactly this job — four channels, one device each.

## 3. The Four Layers of I/O Software

I/O software is built in **four layers**, and the whole design answers one question: **how far down does the hardware-specific knowledge go?** Only the layer directly above the controller knows the device exists, so a new disk means **one new driver** — not one new program.

| Layer | What it does |
|---|---|
| **1 · User-level I/O software** | the library the program calls; buffers output into lines, formats it, copies between user and kernel space |
| **2 · Device-independent layer** | uniform naming and protection, allocating and releasing the device, **buffering**, block sizing, error reporting |
| **3 · Device driver** ★ | the **only** hardware-aware layer: turns a generic request into controller commands, starts the I/O, reads the status register |
| **4 · Interrupt handlers** | wait for the interrupt, save and restore context, identify the device, move the data, wake the waiting process |

*(Doodle: four stacked bars labelled 1 · user-level I/O library, 2 · device-independent OS software, 3 · device driver (green), 4 · interrupt handlers (red); the caption runs from the program that calls `read()` down to the wire.)*

**Who answers what**

- **Who names the device?** layer 2 — a table maps the logical name to the physical one
- **Who knows the device?** layer 3, the driver — and only layer 3
- **Who waits for the interrupt?** layer 4, the handler
- **Who pads a 300-byte write into whole blocks?** layer 2

**In-kernel drivers** — Linux — risk one bad driver taking the whole machine down. **User-mode drivers** isolate the damage: if the driver dies only that device is lost.

- ⚠️ **Trap:** (i) **buffering and error handling** live in the **device-independent** layer, not in the driver. (ii) A **driver** is kernel code; the **interrupt handler** is the **bottom** of the stack and runs in kernel mode on every interrupt.
- 💡 **Trick:** "**Library, common, driver, handler.**" Read the layers as "*who asked*, *what rules*, *how the hardware works*, *what woke us up*". A written question almost always wants these four in that order.
- 📌 **IT link:** loading a module for a new device — a USB printer, a graphics card — is exactly layer 3 being inserted at run time, and **nothing above it changes**.

## 4. I/O Scheduling, Buffering, Caching & Spooling

A device can serve only one request at a time, so they queue in a **device queue**; **I/O scheduling** is the policy that picks the next one, and it exists to stop a request being **starved**.

| I/O scheduling policy | It serves… | Verdict |
|---|---|---|
| **FCFS / fair-share** | in arrival order, one round each per process | fair, but one long seek blocks everything behind it |
| **Priority** | the highest-priority request first | low priority can starve |
| **SSTF** (shortest seek first) | the request **nearest** the current position | **smallest average wait**, but starves far requests |
| **EDF** (earliest deadline first) | the request with the nearest deadline | the fairest policy; used for real-time service |
| **Random (no-seek)** | requests in any order | terrible on a disk; **optimal on an SSD**, where every block is equally far |

*(Doodle: six paired boxes — spool on disk / daemon, printer / its only owner for that moment, P1 P2 P3 / spooler that frees the caller — with a red arrow along the bottom; the caption notes that spooling does not make the printer faster, it makes it never idle.)*

**Buffering — the three schemes and their cost**

- **Single**: fill, then empty — the two sides take turns
- **Double**: fill one while emptying the other
- **Circular**: a ring; a used buffer is **reused**

Let C = time to compute, M = time to transfer one block. T = **C + M** unbuffered · **max(C,M) + M** single · **max(C,M)** double · **max(C, M÷n) + M** with n circular buffers.

**Caching vs spooling.** **Caching** keeps a copy that can be fetched again cheaply, so it speeds up *reads*. **Spooling** stores a process's **whole output** on disk so an **exclusive** device can be shared. Caching **serves the same reader again**; spooling **serves many processes**.

✍ **The printer case study.** A laser printer finishes **1 page every 10 s** (6 pages/min). A program builds a 500-page report needing **0.2 s** of work per page. (a) Building the text = 500 × 0.2 = **100 s**; printing = 500 × 10 s = **5000 s ≈ 83.3 min**. (b) **No buffering:** 10 + 0.2 = 10.2 s per page. **Single:** max(0.2, 10) + 10 = 20 s per page ⇒ 500 pages = **10 000 s**, **worse than no buffer at all**. **Double:** max(0.2, 10) = 10 s per page = 5000 s. (c) With **spooling** the program returns after 100 s and a daemon prints steadily while ten other programs queue their own output.

- ⚠️ **Trap:** (i) **SSTF is I/O scheduling, SJF is CPU scheduling** — both are "shortest first", for different resources. (ii) Double buffering **overlaps** compute and transfer. (iii) Caching serves the **same** data again; spooling serves **different** processes.
- 💡 **Trick:** "**Buffer to bridge a gap, spool to share an exclusive device, cache to avoid a re-read.**" A **circular** buffer is "double buffering with more slots".

## 5. Disk Structure and Access Time

A magnetic disk is a stack of **platters** on a **spindle**, turning at a fixed speed. Data lives on concentric **tracks**; each track is cut into fixed-length **sectors**, the smallest unit transferred; there is one **read/write head** per surface; and the tracks at the same radius on **every** surface form a **cylinder** — which can be read with no head movement at all.

| Term | Meaning |
|---|---|
| **Platter / surface** | one magnetised disc, one side usable ⇒ **heads = surfaces** |
| **Track** | a circle on one surface; **tracks per surface = cylinders** |
| **Sector** | **the unit of transfer** — **512 B**, or **4 KiB** in the advanced format |
| **Address** | **CHS** = (cylinder, head, sector); modern disks expose **LBA** |

*(Doodle: a yellow platter seen at an angle with concentric track ellipses and eight radial sector lines, a red head on its arm reaching to the rim, and a green dashed ellipse around it labelled "cylinder"; leader lines label track, sector, head + arm and the caption notes that a cylinder is not a shape but every track at the same radius.)*

**The three timings and the one formula every question is built on**

- **Seek time** T_s — move the head to the track
- **Rotational delay** T_r = **½ × 60 ÷ rpm** s
- **Transfer time** T_t = bytes ÷ transfer rate
- **Access time** = T_s + T_r + T_t

Because **a sector arrives at a random point in a revolution, the average rotational delay is half of one revolution** — so **T_r = 30 ÷ rpm seconds**, and that is the shortest way to do the arithmetic.

✍ **Average access time.** A disk turns at **7200 rpm**, average seek is **4 ms**, its transfer rate is **200 MB/s**, and the read moves one **4 KiB** block. (a) One revolution = 60 ÷ 7200 = **8.33 ms**, so the average rotational delay is half of it = **4.17 ms**. (b) Transfer = 4096 B ÷ (200 × 10⁶ B/s) = 2.05 × 10⁻⁵ s = **0.02 ms**. (c) Average access = 4 + 4.17 + 0.02 = **8.19 ms**. (d) Rotational delay is 4.17 ÷ 8.19 ≈ **51 %** of it — half of every access is spent merely *waiting for the sector*. (e) At **14400 rpm** that wait halves to 2.08 ms and the total falls to **6.10 ms**; doubling the transfer rate saves only 0.01 ms.

- ⚠️ **Trap:** (i) old disks have the **same number of sectors on every track**; modern ones use **zone bit recording**, so outer tracks hold **more**. (ii) A cylinder is a **set of tracks**, not a shape.
- 💡 **Trick:** "**Seek, spin, ship.**" Head move, wait for the sector, move the bytes — always in that order, and **add them**. "**30 over rpm**" is the half-revolution wait in seconds.
- 📌 **In practice:** the drive reorders requests internally and keeps a small cache, so what the OS sees is a mean latency closer to **8–10 ms** however far the head really moved.

## 6. Disk Scheduling: FCFS, SSTF, SCAN, C-SCAN, LOOK

Requests queue up as **cylinder numbers**, and disk scheduling fixes the order in which the head visits them. The measure is the **total head movement** in cylinders, because every cylinder crossed costs a seek. **SSTF** minimises that total and starves; **SCAN** gives every request a **bounded wait** — that trade-off is what a written answer has to argue.

| Algorithm | Order it serves in | Verdict |
|---|---|---|
| **FCFS** | arrival order | fair, no starvation, **largest total movement** |
| **SSTF** | whichever cylinder is **nearest** right now | **smallest total** — far requests may wait for ever |
| **SCAN** (elevator) | one way to the **physical end** of the disk, then reverse | the classic balanced answer |
| **C-SCAN** | one way only; on the return trip it **serves nobody** | **most uniform wait** — like a queue, not a lift |
| **LOOK / C-LOOK** | SCAN, but stopping at the **last request** instead of at the edge | the practical versions; far less wasted travel |

*(Doodle: a vertical cylinder axis with request ticks and three arrows — blue and green pointing up, a dashed red arrow pointing down; the right-hand text says the lift serves everyone on the way up, C-SCAN serves nobody on the way down, the head starts at 53 and no request waits more than one full sweep.)*

✍ **Trace: head at cylinder 53, queue in arrival order 98, 183, 37, 122, 14, 124, 65, 67; disk 0–199.**

| Algorithm | Head movement, step by step | Total |
|---|---|---|
| **FCFS** | 53→98→183→37→122→14→124→65→67 : 45+85+146+85+108+110+59+2 | **640** |
| **SSTF** | 53→65→67→37→14→98→122→124→183 : 12+2+30+23+84+24+2+59 | **236** |
| **SCAN** ↑ | 53→65→67→98→122→124→183→199, then down to 37→14 : 130+16+162+23 | **331** |
| **LOOK** ↑ | as SCAN, but reversing at 183 and not 199 : 130+169 | **299** |
| **C-SCAN** ↑ | up to 199 (146), jump to 0 (199), then 0→14→37 (14+23) | **382** |
| **C-LOOK** ↑ | up to 183 (130), jump back to 14 (169), then up to 124 (110) | **409** |

- ⚠️ **Trap:** (i) **SCAN** reaches the **end of the disk**; **LOOK** stops at the last request — that is the whole 331 − 32 = **299**. (ii) **C-SCAN** services in one direction only. (iii) "Smallest total movement" and "smallest average wait" are **not** the same question.
- 💡 **Trick:** "**SSTF is nearest, SCAN is the lift, C-SCAN is the queue.**" A lift takes people both ways up and down; a queue is served in one direction and the return trip carries nobody.

## 7. Disk Formatting, Boot Blocks, RAID & Solid-State Disks

A blank disk must be marked before anything can be stored on it, at **two levels**. **Low-level (physical) formatting** divides the surface into sectors and writes the **preamble, header, ECC and inter-sector gaps**; it is the factory's job. **High-level (logical) formatting** writes the **free-space structure** — the bit map marking every block.

*(Doodle: a red boot-block bar on top marked "block 0 — the boot loader lives here", and below it one sector split into preamble, header, data 512 B and ECC parity with dashed red inter-sector gaps between sectors; captions mark low-level formatting as this picture, high-level formatting as the free-space bit map, and the sequence partition → file system → boot block.)*

**From a blank disk to a bootable system**

- **1 · Low-level format:** sectors, gaps, ECC
- **2 · Partition table:** MBR (4 primary, 2 TB) or GPT (128, huge)
- **3 · High-level format:** a file system on one partition
- **4 · Boot block:** block 0 holds the boot loader

The BIOS/UEFI reads block 0 and runs the boot loader, which loads the kernel. **Bad blocks** are handled by **sparing**: the content moves to a reserved sector and the number is remapped.

| RAID level | How it works | Usable capacity (min. disks) | Disks that may fail |
|---|---|---|---|
| **0 — striping** | data split across all disks, no redundancy | **100 %** = N × size (2) | **0** — lose one, lose all |
| **1 — mirroring** | an exact copy on every disk | one disk's size (2) | N − 1 |
| **5 — distributed parity** ★ | parity spread round-robin | **(N − 1) × size** (3) | **1** |
| **6 — double parity** | RAID 5 with **two** parity blocks | **(N − 2) × size** (4) | **2** |
| **10 — 1 + 0** | mirror pairs, then stripe across them | 50 % of raw (4) | one per pair |

✍ **RAID arithmetic.** (a) RAID 0 of 4 × 1 TB → **4 TB**, no redundancy. (b) RAID 1 of 4 × 1 TB → **1 TB**, any **3** disks may fail. (c) RAID 5 of 4 × 1 TB → (4 − 1) = **3 TB**, one disk tolerated, but rebuilding rewrites everything. (d) RAID 6 of 5 × 1 TB → (5 − 2) = **3 TB** with **2** tolerated; RAID 10 of 8 × 1 TB → 8 ÷ 2 = **4 TB**. (e) A **small** write to RAID 5 costs **4 disk I/Os** — read old data, read old parity, write new data, write new parity.

- ⚠️ **Trap:** (i) sectors are separated by **inter-sector gaps**, so **a formatted disk never shows its full nominal capacity**. (ii) Low-level formatting is the **factory's** job; a bad block is **spared**.
- 💡 **Trick:** "**Zero stripes, one mirror, five one parity, six two, ten half.**" Mirror-then-stripe is written **10**; stripe-then-mirror is **01** — the digits are the order of the operations.
- 📌 **SSD vs magnetic disk:** no head, no rotation, **random access ≈ 0.1 ms** against 4–10 ms; symmetric reads and writes; **wear levelling** spreads writes over the cells; TRIM marks dead blocks. Still dearer per TB.

## 8. Terminals, Line Discipline, Clocks & Timer Interrupts

A **terminal** is the device through which a person talks to the computer — a keyboard for input, a display for output, **character by character**. A **line discipline** in the device-independent layer sits between them and decides buffering, echo and special keys.

| Terminal | What it is |
|---|---|
| **Character terminal** | keyboard + character display; a **byte stream** in, text out — a **character device** |
| **Graphics terminal** | accepts **escape sequences** and draws at the pixel level |
| **Line discipline** | **canonical** assembles a whole line and echoes it; **raw** passes each keystroke at once |
| **Pseudo-terminal** | what SSH uses: a file the terminal writes and the line discipline reads, then sends over the network |

*(Doodle: a terminal box and a line-discipline box on the left feeding a "the program gets a whole line" box and a "timer interrupt → scheduler" box on the right, with arrows between them; the caption notes that three keystrokes are three interrupts and one `read()` is one line.)*

**The three jobs of a clock**

- **1 · Measure elapsed time.** A free-running counter read on request
- **2 · Enforce time limits.** **the interval timer** — what makes scheduling **preemptive**
- **3 · Account CPU time.** charge each process for the ticks it used
- **Time-of-day clock:** keeps wall-clock time — the battery-backed CMOS/RTC

Hardware is simple: a counter is decremented every clock tick and, on reaching zero, it **raises an interrupt** and is reloaded. That single interrupt is what stops a runaway process from keeping the CPU for ever. A typical tick is **10 ms**, so eight round-robin processes each get 10 ms in an 80 ms round.

**Clock vs timer.** A **clock** keeps the **time**; a **timer** **counts** and **raises an interrupt**. A time-of-day clock can be read but never interrupts; an interval timer interrupts on schedule. Real hardware merges them into one counter with a compare register.

- 💡 **Trick:** "**The clock tells the time; the timer tells the process to stop.**" Only an interrupt can move a running process off the CPU, and that interrupt always comes from a timer.
- ⚠️ **Trap:** (i) without a timer interrupt, scheduling is **non-preemptive**. (ii) The time-of-day clock does **not** enforce the quantum; the interval timer does; Linux now runs **tickless**.

---

## Night-before-the-exam sheet

**Fact sheet**

- Controller = the middleman · control, status, data registers
- Status says **busy / ready / error** · vector table = handler addresses
- Port-mapped = IN/OUT, own space · memory-mapped = load/store, **eats space**
- Trap = internal error · interrupt = device, asynchronous
- **Polling** = CPU spins · interrupt = CPU per byte
- **DMA** = controller, whole block · DMA = **one** interrupt per block
- Steal a cycle · hold a burst · wait quietly · block device = blocks, char = stream
- I/O stack: library, common, driver, handler · only the driver knows the device
- I/O policies: FCFS, priority, SSTF, EDF · on an SSD, **random is optimal**
- Buffer = speed + size mismatch · cache = avoid a re-read · spool = share an exclusive device · spooling uses a **daemon**
- T = max(C,M) with double buffering · platters → tracks → sectors → cylinder
- **T_r = 30 ÷ rpm seconds** · T_t = bytes ÷ rate · access = seek + spin + ship
- Same sectors per track: **no** (ZBR) · SSTF starves · SCAN is the lift · C-SCAN = a queue, one direction · LOOK stops at the last request
- Formatting: gaps · ECC · sparing · boot block = block 0 = the loader
- RAID 0/1/5/6/10: 0 · 1 · N−1 · N−2 · N/2 · small RAID 5 write = **4 I/Os**
- SSD ≈ 0.1 ms · disk ≈ 8 ms · line discipline: canonical or raw · clock keeps time, timer interrupts

**Top 12 one-liners for MCQs**

1. The CPU sees a device as **three registers**
2. Memory-mapped I/O costs **address space**
3. Interrupt-driven I/O = **one interrupt per byte**
4. DMA interrupts the CPU **once per block**
5. 7200 rpm ⇒ average rotational delay **4.17 ms**
6. 7200 rpm + 4 ms seek + 4 KiB ⇒ **8.19 ms**
7. A cylinder = every track at the same radius
8. This queue under SSTF from 53 ⇒ **236**
9. The same queue under SCAN ⇒ **331**; LOOK ⇒ **299**
10. RAID 5 of 4 disks ⇒ **3** usable, **1** may fail
11. Keyboard, mouse, printer = **character** devices
12. Only a **timer interrupt** can preempt a process

**Top traps:** saying polling is efficient because it needs no interrupt logic · interrupt-driven I/O always better than polling · DMA said to remove the CPU instead of the copying · a sector said to be the same size on every track · a cylinder drawn as a shape · SCAN said to stop at the last request · C-SCAN said to serve on the return trip · **RAID 5 said to survive two failures** · RAID 10 written 01 · low-level formatting said to be the user's job · the time-of-day clock said to enforce the quantum.

**All tricks together:** "Three registers, one table" · "Slow ⇒ spin, fast ⇒ interrupt, faster ⇒ DMA" · "Steal a cycle, hold a burst, wait quietly" · "Library, common, driver, handler" · "Buffer to bridge a gap, spool to share an exclusive device, cache to avoid a re-read" · "Seek, spin, ship" · "30 over rpm" · "SSTF is nearest, SCAN is the lift, C-SCAN is the queue" · "Zero stripes, one mirror, five one, six two, ten half" · "The clock tells the time; the timer tells the process to stop".

---

## Practice MCQs (exam pattern, 10 marks)

1. A controller transfers a whole block straight to memory and interrupts the CPU only at the end. That is: (a) programmed I/O (b) polling (c) direct memory access (d) spooling
2. The main cost of memory-mapped I/O over port-mapped I/O is that it: (a) needs a special instruction (b) cannot raise interrupts (c) must use DMA (d) consumes memory address space
3. At a low data rate a handler may cost more than the transfer, so which method can be **faster**? (a) DMA (b) polling (c) cycle stealing (d) spooling
4. The tracks at the same radius on every platter surface form a: (a) cylinder (b) sector (c) surface (d) spindle
5. A disk running at 7200 rpm has an average rotational latency of: (a) 8.33 ms (b) 2.08 ms (c) 4.17 ms (d) 16.7 ms
6. Which of these is a **character**, not a block, device? (a) hard disk (b) SSD (c) USB flash drive (d) keyboard
7. Which disk policy guarantees no request waits more than one full sweep? (a) FCFS (b) SCAN (c) SSTF (d) random
8. Head at 53, queue 98, 183, 37, 122, 14, 124, 65, 67. Total movement under **SSTF**: (a) 236 (b) 640 (c) 331 (d) 299
9. Moving the head to the required track is the: (a) rotational latency (b) transfer time (c) queueing delay (d) seek time
10. What does a time-of-day clock do that an interval timer does not? (a) interrupt on schedule (b) keep the wall-clock time (c) end a time slice (d) charge CPU time to a process

**Answer key:** 1-c · 2-d · 3-b · 4-a · 5-c · 6-d · 7-b · 8-a · 9-d · 10-b

## Written question (10 marks)

Explain the layers of I/O software. Describe DMA and its three modes of bus access.

**Model answer:**

1. **The four layers (4)** — (1) **user-level I/O software**: the library the program calls, buffering output into lines. (2) **Device-independent OS software**: uniform naming, allocating the device, buffering, block sizing, error reporting. (3) **Device driver**: the only hardware-aware layer. (4) **Interrupt handlers**: run on the interrupt, move the data, wake the waiting process.
2. **DMA (3)** — the controller itself transfers a **whole block** between the device and main memory; the CPU only sets up the memory address, the count and the device port, then continues other work and is **interrupted once when the block has moved**.
3. **Three modes (3)** — **cycle stealing**: one memory cycle at a time, the bus returned, so the CPU slows but is never blocked. **Burst mode**: the bus is held for the whole block. **Transparent mode**: the bus is used only when the CPU is idle.

**Also practise (written):** ① the full trace of a request queue under FCFS, SSTF, SCAN, LOOK, C-SCAN and C-SCAN, and why SCAN and LOOK differ by exactly the distance to the end of the disk ② an average-access-time calculation from rpm, seek time, transfer rate and block size, and what changes at double the rpm ③ the buffering cost arithmetic for the printer case, and why single buffering can be worse than no buffering ④ RAID capacity and fault-tolerance arithmetic for 0, 1, 5, 6 and 10, plus the four I/Os of a small RAID 5 write.

**Before the exam ✓** Can name the four layers of the I/O stack · Can tell polling, interrupt and DMA apart by CPU cost · Can compute average access time from rpm, seek and rate · Can trace a request queue under SCAN and total the movement · Can do RAID capacity arithmetic and say how many disks may fail · Can separate the clock from the timer.
