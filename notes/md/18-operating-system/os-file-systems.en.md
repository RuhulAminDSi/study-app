# File Systems & Case Study of Operating Systems: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/18-operating-system/os-file-systems.en.html` (handwritten-style PDF: `notes/pdf/18-operating-system/os-file-systems.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Operating System):** "… **File Systems: files, directories, security, protection**; **Case study of some operating systems**." That is the whole of this notebook. Processes, scheduling, memory management, I/O and deadlock are the other lessons of this chapter.

**High-yield:** ① 8 file attributes and exactly **7** file operations ② contiguous = base + n, but **external** fragmentation and the allocation-size problem ③ **FAT = linked allocation** with the links in one table ④ inode = 10 direct + 1 single + 1 double + 1 triple indirect pointer, 128 addresses per 512-B indirect block ⑤ 512-B block ÷ 16-B UNIX dirent = **32** entries per block ⑥ FAT12 2¹² = 4 096 clusters ≈ 2 MB · FAT16 2¹⁶ = 65 524 ≈ 32 MB · FAT32 28-bit cluster number ⑦ a journal is a **write-ahead log** and protects **metadata**, not data ⑧ protection = **access control matrix**, stored as a per-object **ACL** or a per-subject **capability list**.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. The file system and the file — p. 2 · 2. The seven operations and access methods — p. 3 · 3. Contiguous and linked (FAT) — p. 4 · 4. Indexed allocation and the inode — p. 5 · 5. Directory structures — p. 6 · 6. Worked trace: open → read → close — p. 7 · 7. Free-space management and protection — p. 8 · 8. File-system types, journaling and recovery — p. 9 · 9. Case study of operating systems — p. 10 · 10. Night-before sheet — p. 11 · 11. Practice MCQs + written — p. 12.

---

## 1. The File System and the File

A **file system** is how the OS **names, stores, shares and protects** data on secondary storage, giving programs one **device-independent** view — a tree of named files, not raw blocks. It has two halves: the **physical** (which blocks belong to a file) and the **logical** (what a program may do with it). The disk is already cut into **blocks of 512 B – 4 KiB**; a file is a list of such blocks.

### File attributes

| # | Attribute | What it records | Exam hooks |
|---|---|---|---|
| 1 | **name** | the symbolic name | in the **directory entry**, never in the inode; unique only within one directory |
| 2 | **identifier** | the number the OS actually uses | UNIX inode number · FAT first cluster · NTFS MFT record number · ext2/4 inode number |
| 3 | **type** | text, binary, executable, special | also the *format*: ASCII/Unicode characters vs a packed record layout |
| 4 | **location** | pointer(s) to the data blocks | one start block (contiguous), a chain (linked), or an index (indexed) |
| 5 | **size** | length in bytes and in blocks | a **fixed-width field** — this is what forces an allocation size at create time |
| 6 | **protection** | who may read / write / execute | UNIX mode bits · POSIX ACLs · NTFS ACEs |
| 7 | **timestamps** | creation, modification, access | UNIX keeps **atime, mtime, ctime**; ext4 stores nanosecond stamps |
| 8 | **owner** | user id and group id | the owner may change the mode; only root may change the owner |

### Logical file vs physical file

- **Logical file** = the sequence of **bytes** the program sees, from offset 0 onwards, plus the operations allowed on it.
- **Physical file** = the actual blocks on the medium plus the directory entry / inode that points at them.
- The **logical → physical mapping** is the **file organisation**.
- Nothing inside a file marks where a "record" ends — **the format does**, so one file can be read byte-wise, record-wise or block-wise.

### File types

| Type | What it is | Examples |
|---|---|---|
| text | characters, human-readable | .txt .md .csv |
| binary | packed records or objects | .jpg .mp4 .exe |
| executable | machine code the CPU runs (ELF on UNIX) | /bin/ls |
| special (UNIX) | devices, FIFOs, sockets — they look like ordinary files | /dev/sda, /dev/null |

💡 **Trick:** "The inode holds everything **except the name**." Attribute 1 sits in the directory; attributes 2–8 sit in the inode. That one split explains hard links, `ln -s` and every path lookup.

⚠️ **Trap:** A file's **identifier is not its name**, and the **superblock is not a file's metadata** — the superblock describes the whole volume (it holds the block bit map and the inode-table pointers). A file system manages **secondary** storage; RAM holds buffers, not files.

✍ **Worked example — decode one directory line**

```
-rwxr-xr--  1 rahim exam 8200 Sep 9 10:14 report.txt
```

- `-` = regular file (`d` would mean directory)
- `rwxr-xr--` = 7 5 4 → owner `rahim` rwx, group `exam` r-x, others r--
- link count 1 · size **8 200 B** = 17 blocks of 512 B (16 full + 1 part)
- last modified 9 September

## 2. The Seven Standard File Operations

A file is an **abstract data type**: a named, protected sequence of bytes. Every operating system gives it **exactly seven operations**, and every system call is one of them.

| # | Operation | What it does | Typical call |
|---|---|---|---|
| 1 | **create** | make a new empty file and add a directory entry | `creat()`, `open(…, O_CREAT)` |
| 2 | **delete** | remove the entry, free the blocks | `unlink()`, `remove()` |
| 3 | **open** | resolve the name, read metadata, check rights, return a descriptor | `open()` |
| 4 | **close** | flush buffers, release the descriptor | `close()` |
| 5 | **read** | copy bytes *from the current offset* into a buffer | `read()`, `fread()` |
| 6 | **write** | copy bytes *into the file at the current offset* | `write()`, `fwrite()` |
| 7 | **seek** | move the offset: SEEK_SET, SEEK_CUR, SEEK_END | `lseek()`, `fseek()` |

### The byte-stream model

Everything follows from **one number**: the current offset, initially **0**.

```c
fd = open("/home/rahim/report.txt", O_RDONLY);   /* fd = 3 */
n  = read(fd, buf, 512);       /* offset 0 → 512   */
n  = read(fd, buf, 512);       /* 512 → 1024       */
p  = lseek(fd, 0, SEEK_END);  /* p = size         */
close(fd);
```

`open()` returns a small integer — an index into the process's **file descriptor table**, whose entry points to a **system-wide open-file table** entry holding the inode pointer, the access mode, the current offset and a reference count.

### Access methods

- **Sequential access** — read from the start, record by record; the only method a tape supports.
- **Direct (random) access** — the file is a numbered block sequence; logical block *n* becomes a physical block in **O(1)**.
- **Indexed-sequential access (ISAM)** — a sparse index, then a short scan (the old library compromise).

| Allocation | Block n is found by | Random access |
|---|---|---|
| contiguous | start + n | **fastest** (one seek, no per-block pointer) |
| linked / FAT | `FAT[n]` | one table lookup |
| indexed / inode | entry *n* of an index block | one extra read |

💡 **Trick:** "Create before you open, open before you read, close when done." Only `read` and `write` touch bytes — **`seek` moves the cursor without moving data**.

⚠️ **Trap:** **append** is not an eighth operation: it is **write** with the offset forced to the end. **rename** is a directory operation, not a file one. **close** is on the list — omitting it leaks buffers and descriptors.

✍ **Worked example — turn an offset into a disk address.** A **contiguous** file starts at **block 12**, block size **512 B**. `lseek(fd, 2048, SEEK_SET)` → logical block 2048 ÷ 512 = **4**, offset inside the block 2048 mod 512 = **0**; the transfer starts at **block 16**, so reading 1 KB touches **blocks 16 and 17**. Under linked or indexed allocation the same arithmetic yields only the *logical* block.

## 3. File Organisation I — Contiguous & Linked

**File organisation** decides *which disk blocks* belong to a file, and so how a logical block number becomes a physical one. It trades **access speed** against **freedom in using free space**.

| Point | Contiguous | Linked |
|---|---|---|
| Directory holds | start block + length | first block only |
| Random access | **O(1)**: base + n | O(n): walk the chain |
| Grows later | must be **moved** | free, anywhere |
| Fragmentation | **external** | none outside (some internal) |
| Per-block cost | no pointer | one pointer wasted (read amplification) |
| A bad block | loses one block | truncates the rest of the file |

### The FAT — linked allocation with a table

The **File Allocation Table (FAT)** is linked allocation in which the "next block" pointer of **every block on the volume** is kept in **one table at the start of the volume** instead of inside the data blocks. Entry *i* holds the block that follows block *i* of the same file; **0 = free**, **0xFFF = end of chain** (FAT32 uses 0x0FFFFFFF). The directory entry stores only the **first cluster**.

✍ **Worked example — what does the FAT cost?** A 1.44 MB floppy has 2 880 sectors of 512 B: **1** boot sector + **2 × 9** FAT12 sectors + **14** root-directory sectors, leaving 2 880 − 1 − 18 − 14 = **2 847 data clusters**. Check: 2 847 × 12 bits = 34 164 bits = 4 271 B → **9 sectors** ✓. Overhead 33/2 880 ≈ **1.15 %** of the medium, and the **second copy** of the FAT is what lets the disk be rebuilt after a crash.

✍ **Worked example — the allocation-size problem.** A **4 096 B** file with 512-B blocks needs 8 blocks, so contiguous allocation must **declare a length** at create time. With a 16-bit length field a file holds at most 65 535 blocks = **32 MiB**; appending past the declared length forces the file to be **relocated**. The modern fix is **extents** — a short list of (start, length) runs, which FAT32, NTFS and ext4 all use.

💡 **Trick:** "A **F**AT is **linked** allocation whose **links** were moved into a **t**able." The links still exist; they have simply been hoisted out of the data blocks, which is exactly what makes random access possible.

⚠️ **Trap:** A FAT is **not** contiguous and **not** indexed allocation. The table is **per volume, not per file**, so its size — not the data — is what limits a FAT12/16 disk.

## 4. Indexed Allocation & the UNIX Inode

**Indexed allocation** gives each file an **index block** — one block whose entries are the addresses of the file's data blocks. To reach logical block *n* the OS reads the index block and takes entry *n*: **no external fragmentation**, direct access, and the file may grow anywhere. Its one weakness is **internal fragmentation** — a 3-block file still burns a whole index block. **Multi-level indexing** lets index blocks point to index blocks, so the reach grows as n^k instead of n.

| Level | Pointers | Blocks reached | Bytes (512-B blocks) | Reads |
|---|---|---|---|---|
| direct | 10 | 10 | 5 120 | 1 |
| single indirect | 1 → 128 | 128 | 65 536 | 2 |
| double indirect | 1 → 128² | 16 384 | 8 388 608 | 3 |
| triple indirect | 1 → 128³ | 2 097 152 | 1 073 741 824 | 4 |
| **total** | **13** | **2 113 674** | **≈ 1.01 GiB** | |

- **128** = block size ÷ pointer size = 512 B ÷ 4 B.
- Modern **ext2/ext4** keeps the shape with **12 direct + 1 + 1 + 1 = 15** pointers; with 4 KiB blocks and 1 KiB indirect blocks (1 024 addresses) it reaches 4 MiB + 4 GiB + 4 TiB.
- An **i-node** ("index node") holds the metadata **and** the pointers. A **hard link** is a second directory entry on the same inode, so the file dies only when **nlink** falls to 0 — and because the name is *not* in the inode, one file can have many names.
- The **superblock** holds the block bit map and the inode-table pointers (it is volume-wide), and a **file descriptor** is an integer index into a table, not the inode.

✍ **Worked example 1 — locate logical block 20.** Direct covers blocks 0–9, so block 20 is **single indirect**: 20 − 10 = **10** → the **11th** address in that block. Cost: **2 disk reads**.

✍ **Worked example 2 — locate logical block 300.** Direct + single reach only 138 blocks, so 300 is **double indirect**: 300 − 138 = 162 → sub-block 162 ÷ 128 = 1 (the 2nd) and address 162 mod 128 = **34** inside it. Cost: **3 disk reads**.

💡 **Trick:** "Subtract as you climb." Direct takes the first 10; subtract 10 and read a single indirect; if the answer is still ≥ 128, subtract 128 and read a double indirect. An indirect block is an **address book**, never data.

## 5. Directory Structures

A **directory** is a special file whose entries map a **name to an identifier** (an inode number or the first cluster) of a file or sub-directory. It does four jobs: **grouping, naming, searching, sharing**. A directory's own "write" bit is what allows entries to be added or removed inside it.

| Structure | Shape | What it buys | Weakness |
|---|---|---|---|
| **single-level** | one flat list | simplest possible design | name clashes; no grouping at all |
| **two-level** | master directory + one per user | per-user isolation, shorter lists | no per-project grouping; renaming collides |
| **tree** | acyclic, arbitrary depth | grouping; a natural hierarchy | sharing needs copies or extra links |
| **acyclic graph** | tree + a shared directory | one copy, many parents (UNIX symlink) | can dangle; "who owns it?" |
| **general graph** | cycles allowed | maximum flexibility | traversal may loop for ever; needs reference counts |
| **hash** | table h(name) → bucket | O(1) lookup, no tree walk | no natural order; poor for large or growing directories |

- **Absolute path**: `/usr/bin/gcc` (from the root). **Relative path**: `../docs/report.txt` (from the current working directory). `.` = this directory, `..` = parent.
- The classic UNIX directory entry is **16 bytes**: a 2-byte inode number + a 14-character name.

💡 **Trick:** The ladder runs **single → two → tree → acyclic → general → hash**. Only the **general graph** has real cycles, so it is the only one that needs reference counts or mark-and-sweep garbage collection.

⚠️ **Trap:** A **symlink stores a path**; a **hard link stores an inode number**. A symlink may dangle if its target is deleted; a hard link cannot, until the last link goes.

✍ **Worked example — what does a path cost?** Opening `/a/b/c/file`: read the root's block → find **a**; read a's block → **b**; read b's block → **c**; read c's block → **file**; then the inode. With **512-B blocks** and 16-byte UNIX directory entries a block holds **32 entries**, so it is **4 directory reads + 1 inode read** before a single data byte moves. This is why file systems cache the blocks they have just walked.

## 6. Worked Trace: Opening a File

**open()** does not read the file — it resolves a **path name to an inode**, checks the caller's rights and returns a **file descriptor**.

1. **Parse the path.** It starts with `/`, so the walk begins at the **root directory** (inode 2); a relative path starts at the process's **cwd**.
2. **Walk the components.** Read the root's blocks, match **home** and take its inode number (30); repeat for **rahim** (41) and **report.txt** → inode **4711**. One directory-block read per component.
3. **Fetch the inode.** Using the inode-table pointers held in the **superblock**, read inode 4711: mode, uid, gid, nlink, size, timestamps and the direct/indirect block pointers.
4. **Check protection.** Compare the mode's owner / group / other bits with the caller's uid and gid; a missing right fails with **EACCES** — this is where the ACL is consulted.
5. **Build the open-file entry.** Store the inode pointer, the mode **O_RDONLY**, the current **offset 0** and a reference count; allocate a **file descriptor** in the process's table and return it (**fd = 3**).
6. **read(fd, buf, 512).** Offset 0 → logical block 0 → the inode's first direct pointer → **block 1042** → DMA into the buffer → offset becomes 512.
7. **close(fd).** Flush buffers, free the descriptor, decrement the reference count; at zero the entry goes and the inode is released (and the blocks freed if nlink also reached 0).

| Call | Reads from disk | Changes | Returns |
|---|---|---|---|
| `open("/home/rahim/report.txt", O_RDONLY)` | 3 directory blocks + the inode | one open-file entry, offset 0 | fd = 3 |
| `read(3, buf, 512)` | data block 1042 | offset 0 → 512 | 512 |
| `lseek(3, 0, SEEK_END)` | nothing | offset ← size | 8200 |
| `close(3)` | nothing | descriptor freed, refcount −1 | 0 |

💡 **Trick:** "Resolve, record, return — then read": path → inode → open-file table → descriptor → data block.

⚠️ **Trap:** **open()** touches **no data block** — only directories and the inode. Every component must resolve: a missing name anywhere aborts the **whole** call, so there is no partial open. And what `open` returns is a **descriptor**, never the file itself.

**IT link:** this is exactly what a shell does for `./app --config conf.ini`: every component becomes a `getdents` walk, every `open` an inode lookup, and the descriptor an entry in the process table that `/proc/<pid>/fd` exposes. A slow NFS mount makes step 2 one network round trip per component.

## 7. Free-Space Management

The file system must always answer "where is the next run of free blocks?".

| Method | How free space is recorded | Strength | Weakness |
|---|---|---|---|
| **bit vector** (bitmap) | 1 bit per block, 1 = allocated | fast; cached whole in memory | grows with the volume; O(n) scan for a run |
| **linked list** (implicit) | the next free address stored inside a free block | no extra space at all | slow; one damaged block loses its list |
| **grouping** (UNIX) | the first block of a group holds many free addresses | fast | fixed group boundaries |
| **extents** (free runs) | (start, length) per free run | one entry for a whole run | needs compaction as files fragment |

✍ **Worked example — how big is the bit vector?** A **1 GiB** volume with 512-B blocks has 2³⁰ ÷ 2⁹ = **2 097 152 blocks**, so the map needs 2 097 152 ÷ 8 = **256 KiB** — it fits in cache and is loaded in one read. A pointer-per-block list would need the same 2 097 152 entries at 4 B = **8 MiB**, so the bit vector is **32×** smaller. Scanning for a run of 16 free blocks costs 16 bit tests. In a FAT the free map is **implicit**: an entry of **0** means the block is free.

💡 **Trick:** n bits instead of n pointers. For 512-B blocks a pointer is 64 bits' worth of bitmap per block, so the bit map is 64× more compact than 8-byte pointers and 32× more compact than 4-byte pointers.

## 8. Protection: Matrix, ACLs, Capabilities

The **access control matrix** has subjects (users, domains) as rows and objects (files) as columns; each cell holds the rights allowed on that pair. The classical rights are **read, write, execute, append, delete, change ownership**. Storing it densely is impossible, so two sparse forms are used.

| Form | Stored where | Best for | Catch |
|---|---|---|---|
| **Access list (ACL)** | per **file**: a list of (user or group, rights) | few files, many owners; groups | every user must be listed on every file |
| **Capability list** | per **process**: unforgeable (object, rights) tokens | a process needs rights on few objects | rights must be passed on and revoked by hand |
| **UNIX mode** | the inode: 9 bits, owner / group / others | rwx = 4 + 2 + 1; `chmod`, `chown` | one bit-set only — no named users |
| **NTFS ACE** | the MFT record: allow / deny entries per SID | Windows groups and inheritance | deny entries are evaluated first |

- UNIX special bits: **setuid 4000**, **setgid 2000**, **sticky 1000** — so `1777 /tmp` lets anyone create but only the owner delete.
- A **capability** is an unforgeable token (an index into a protected kernel table). It is delegated with `fork`/message passing and revoked explicitly — which is why a web server can hold "read /var/www" and hand it to a child instead of running as root.

✍ **Worked example.** `chmod 640 notes.txt` → owner **rw-** (6), group **r--** (4), others **---** (0).

⚠️ **Trap:** The **matrix is the model**; the ACL is per **object** and the capability list is per **subject**. Protection is about **rights** — authentication ("who are you") and encryption ("can it be read in transit") are **security**, not protection.

## 9. File-System Types, Journaling & Recovery

| Point | FAT12 | FAT16 | FAT32 |
|---|---|---|---|
| Bits per entry | **12** | **16** | **32** (28 hold the cluster number) |
| Max clusters | 2¹² = **4 096** | 2¹⁶ = **65 524** | 2²⁸ ≈ **268 M** |
| Cluster size | 512 B | 512 B–32 KB | 512 B–32 KB |
| Max volume | ≈ **2 MB** | ≈ **32 MB** (2 GB at 32-K clusters) | 128 GiB … **2 TB** |
| Names | 8.3 | 8.3 | 8.3 + long names (VFAT) |
| Where used | 1.44 MB floppies | 1980s–90s hard disks | Windows 95 OSR2 (1996) onward |

| System | Year | Journal | Defining features |
|---|---|---|---|
| FAT12 / FAT16 | 1977 / 1983 | no | table of links, 8.3 names, no protection |
| **ext2** | 1992 | no | 15-pointer inode, block groups, fast |
| **ext3** | 2001 | **yes** | ext2 + a metadata journal |
| **ext4** | 2006 | yes (with checksums) | extents, delayed allocation, 64-bit, huge files, online resize |
| **NTFS** | 1993 (Windows NT 3.1) | yes ($LogFile) | MFT, ACLs keyed by SIDs, alternate data streams, compression, EFS, quotas, hard links |
| **XFS** | 1998 (SGI) / Linux 2.6, 2004 | yes (metadata) | 64-bit, allocation groups, very high concurrency |

### Journaling = what exactly?

A **write-ahead log** of intended **metadata** changes, flushed to stable storage **before** the change itself; on the next mount it is **replayed** and then discarded. The order is: (1) write the log record and flush it, (2) write the real block, (3) commit and flush. A crash therefore leaves the file system **consistent**, not the data intact: a journal protects **the metadata**, not the user's bytes, and does nothing about bad sectors or a failing disk.

- **Transaction thinking.** A metadata update is a transaction: begin → log → write → commit. It needs **atomicity** (all or nothing), **durability** (survives the crash) and **consistency** (the structure stays valid); **isolation** is added when several updates run at once.
- ext3's default `data = ordered` writes a file's data blocks **before** the metadata that makes them reachable, so a crash gives an *old or new* file, never a half-written one.
- **fsck / e2fsck** (UNIX, Linux) and **chkdsk** (Windows) run at boot on a system with no journal: verify the superblock, the block and inode bit maps, the inode table and the free-block count, rebuild the free-space map, then report or remove unreferenced inodes. It is O(volume size) — exactly the cost a journal removes.

💡 **Trick:** "ext**3** = ext**2** + a **log** (2001); ext**4** = extents + 64-bit + checksums (2006)." **NTFS 1993**; **XFS** = allocation groups, one name one idea.

⚠️ **Trap:** FAT12's limit is **4 096 clusters** (≈ 2 MB); **65 524** belongs to FAT16. A journal protects **metadata**, not data.

## 10. Case Study of Operating Systems

### MS-DOS (1981)

Single-user, **single-tasking**, real mode on the 8086, **640 KB** of conventional memory, **no memory protection** and no virtual memory. FAT12 on floppies and FAT16 on disks, 8.3 names, **.COM** and **.EXE** programs, device drivers as **.SYS** files, the shell **COMMAND.COM**, configuration in **CONFIG.SYS** and **AUTOEXEC.BAT**.

### UNIX (Bell Labs, 1969–70)

Ken Thompson and Dennis Ritchie; development started in **1969**, **Version 1 in 1970**, named "Unix" in 1972 and rewritten in **C** in 1973 — which is why it runs everywhere. Multi-user, multi-tasking, **time-sharing**. **Everything is a file**, so `read` and `write` serve every device (/dev/sda, /dev/null); the **shell** is an ordinary program, not part of the kernel; **pipes** (Thompson, 1971) join command stages — `ls | wc -l`; the file system is the **inode** system with a hierarchical tree; protection is the 9-bit rwx mode plus setuid/setgid with users and groups.

### Windows NT (1993)

A **hybrid kernel** — a microkernel core, a large executive and user-mode subsystems — plus a **HAL** (hardware abstraction layer) that hides the hardware. Its signature is the **registry**, a hierarchical database of keys and values that replaced the DOS text configuration files; NTFS stores **ACLs** keyed by **SIDs**; it can also mount FAT and other volumes.

### Linux (announced 14 August 1991)

Linus Torvalds, inspired by MINIX and UNIX. A **monolithic kernel** — process, memory, VFS and networking in one address space — but **modular at run time** through **loadable kernel modules** (`insmod` / `rmmod`), so it is often called monolithic-modular. **Everything is a file**; the **VFS** makes ext2/3/4, XFS, tmpfs, procfs and sysfs look the same to the user; /proc and /sys expose the kernel's own state as files; POSIX-oriented (fork/exec, signals, users, permissions); root owns /etc.

| Point | MS-DOS | UNIX | Windows NT | Linux |
|---|---|---|---|---|
| Origin | IBM / Microsoft, 1981 | Bell Labs, 1969–70 | Microsoft, 1993 | Torvalds, 1991 |
| Kernel | none protected | monolithic (traditional) | **hybrid** | monolithic + **modules** |
| Users / tasks | 1 / 1 | many / many | many / many | many / many |
| Memory | 640 KB, no protection | protected + virtual | protected + virtual | protected + virtual |
| Everything a file? | no | **yes** | no | **yes** |
| Config | CONFIG.SYS, AUTOEXEC.BAT | text files in /etc | **registry** | text files in /etc |
| File system | FAT12 / FAT16 | inodes (UFS), ext2/3/4 | **NTFS**, FAT, exFAT | ext2/3/4, XFS, btrfs |
| Protection | none | rwx, users/groups | ACLs, SIDs | rwx, users/groups |
| Shell | COMMAND.COM | sh, csh, ksh | cmd.exe, PowerShell | bash, sh, zsh |

💡 **Trick:** "UNIX and Linux are **files**, Windows is a **database**." Kernel shapes: monolithic · microkernel · hybrid — and Linux is monolithic *with loadable modules*.

⚠️ **Trap:** **Windows 1.0 (1985)** was a **graphical shell on top of DOS**, not a multitasking OS — the multitasking line is **Windows NT (1993)**. And a **registry is not a file system**: it is the settings database.

---

## Night-before-the-exam fact sheet

- block size 512 B – 4 KiB
- 8 attributes, 7 operations (append = write at the end)
- contiguous: block = start + n; **external** fragmentation
- linked: walk the chain; one pointer per block wasted
- FAT = linked allocation, links in one table; entry 0 free, 0xFFF end of chain
- FAT12 2¹² = 4 096 clusters ≈ 2 MB · FAT16 2¹⁶ = 65 524 ≈ 32 MB · FAT32 28-bit cluster number ≈ 2 TB
- 1.44 MB floppy: 2 880 sectors → 2 847 data clusters, FAT = 9 sectors, overhead 1.15 %
- inode: 10 direct + 1 single + 1 double + 1 triple indirect = **13**
- 512 B ÷ 4 B = **128** addresses per indirect block
- 10 + 128 + 16 384 + 2 097 152 = 2 113 674 blocks ≈ **1.01 GiB**
- ext2/ext4: 12 direct + 1 + 1 + 1 = 15 pointers
- UNIX directory entry 16 B → 512 ÷ 16 = **32** entries per block
- symlink = a path; hard link = an inode number
- 1 GiB / 512-B blocks = 2 097 152 blocks → **256 KiB** bit vector (a pointer list would be 8 MiB, 32× larger)
- free space: bit vector, linked list, grouping, extents
- ACL per **object**, capability list per **subject**; rights = read, write, execute, append, delete, change ownership
- rwx = 4 + 2 + 1; setuid 4000, setgid 2000, sticky 1000
- ext2 1992 (no journal) · ext3 2001 · ext4 2006 · NTFS 1993 · XFS allocation groups
- journal = write-ahead log of **metadata**; fsck / e2fsck / chkdsk rebuild the maps without one
- MS-DOS 1981 · UNIX 1969–70 · Windows 1.0 1985 (GUI on DOS) · Windows NT 1993 · Linux 1991

## Top 12 one-liners for MCQs

1. A file's **name** is in the directory, not the inode
2. Standard file operations = **7**
3. Contiguous random access = base + n
4. Contiguous suffers **external** fragmentation
5. FAT = linked allocation with a table
6. FAT12 max = **4 096** clusters (≈ 2 MB)
7. ext3 = ext2 + a journal
8. A journal protects **metadata**, not data
9. ACL per object, capability per subject
10. Hard link = inode number; symlink = path
11. Windows NT replaced the DOS text files with the **registry**
12. UNIX and Linux: **everything is a file**

**Top traps:** FAT12 = 4 096 clusters, not 65 524 · FAT is linked, not contiguous or indexed · the inode has no file name · 512 ÷ 4 = 128 addresses per indirect block · a bit vector needs n/8 bytes, not n · a journal protects metadata · Windows 1.0 (1985) was a GUI on DOS, Windows NT (1993) is the multitasking system.

**All tricks together:** the inode holds everything except the name · FAT = linked links hoisted into a table · contiguous = base + n, so it is fast · subtract as you climb the indirect levels · a symlink stores a path, a hard link an inode number · a bit vector is 32× smaller than a pointer list · ext3 = ext2 + a log · UNIX and Linux are files, Windows is a database.

**The file system in five nouns** — directory (the name) → inode (the metadata) → block map (FAT / extents) → journal (replay after a crash) → ACL (who may touch it).

---

## Practice MCQs (exam pattern, 10 marks)

1. How many standard file operations are there? (a) 5 (b) 7 (c) 9 (d) 4
2. In UNIX/Linux a file's metadata and block pointers live in: (a) the superblock (b) the boot block (c) the inode (d) the file descriptor
3. The FAT is a variation of which allocation method? (a) linked allocation (b) contiguous allocation (c) indexed allocation (d) multi-level indexed allocation
4. A 512-B block of 16-byte UNIX directory entries holds: (a) 16 entries (b) 64 entries (c) 8 entries (d) 32 entries
5. ext3 differs from ext2 by adding: (a) an inode table (b) a journal (log) (c) clusters (d) a FAT
6. How many clusters can FAT12 address at most? (a) 4 096 (b) 65 524 (c) 2²⁸ (d) 2¹⁶
7. Free space recorded as (start, length) pairs is called: (a) a bit vector (b) a linked list (c) extents (d) an inode
8. A 1 GiB volume with 512-B blocks needs a bit vector of: (a) 64 KiB (b) 128 KiB (c) 512 KiB (d) 256 KiB
9. Windows NT replaced the DOS text configuration files with: (a) CONFIG.SYS (b) the registry (c) the MFT (d) a batch file
10. A contiguous file starts at block 12; its 5th block is: (a) block 5 (b) block 12 (c) block 16 (d) block 17

**Answer key:** 1-b · 2-c · 3-a · 4-d · 5-b · 6-a · 7-c · 8-d · 9-b · 10-c

## Written question (10 marks)

A UNIX file system uses 512-byte blocks, 4-byte pointers and the classic inode: 10 direct addresses plus one each of single, double and triple indirect. (i) What is the largest file the inode can reach? (ii) Show how the file system locates logical block 20 and logical block 300, and how many disk reads each takes. (iii) Give two advantages and two disadvantages of a FAT compared with this inode scheme.

**Model answer:**

1. **Addresses per indirect block** — 512 B ÷ 4 B = **128**. (1)
2. **Maximum file size** — 10 + 128 + 128² + 128³ = 10 + 128 + 16 384 + 2 097 152 = **2 113 674 blocks** = 1 082 201 088 B ≈ **1.01 GiB**. (2)
3. **Block 20** — direct covers 0–9, so 20 is **single indirect**: index 20 − 10 = **10**, the 11th address in that block. **2 disk reads**. (2)
4. **Block 300** — direct + single reach only 138, so 300 is **double indirect**: 300 − 138 = 162; sub-block 162 ÷ 128 = 1 (the 2nd) and address 162 mod 128 = **34** inside it. **3 disk reads**. (2)
5. **FAT — advantages** the whole chain can be walked without touching data blocks, and one table lookup answers any random access; the table sits at a fixed known place on the volume. **Disadvantages** the table is **per volume**, so it grows with the disk (12/16/32 bits per block) and a damaged table can lose whole directories; a second copy doubles that overhead. (3)

**Also practise (written):** ① compare contiguous, linked and indexed allocation with two points each ② trace `open("/etc/passwd")` step by step ③ compare FAT12, FAT16 and FAT32 and say what a journal protects ④ explain the access control matrix, an ACL and a capability list with one example each.

**Before the exam ✓** Can list the 8 attributes and 7 operations · Can compare contiguous, linked and indexed · Can do the inode pointer arithmetic · Can trace open → read → close · Knows the FAT12/16/32 limits and what a journal does · Can name the four case-study systems and their kernel shapes.