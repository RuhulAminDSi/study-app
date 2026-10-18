# Chapter O (BCS prili) — 8086 RESET address, thrashing, MOV AX,BX, modulo-2

- **Source image:** `32_8086-reset-thrashing-mov-modulo-2.jpg` (original file name `567144742_1582905779343184_8379348569506984169_n.jpg`)
- **Page:** 32 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q32 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৯৪৩]", Q34 "নং- ১৫০"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) in two columns; reproduced as such and rendered as a table for legibility.
- Q33 and Q35 are printed without red source citations; Q33 has no visible answer-block heading for option (ঘ) beyond the answer line, and Q35's answer is not printed on this page at all — the page ends after Q35's options, so Q35's answer is [cut off].
- The printed answer to Q32 states the computed address as FFFFF0H in the worked line while the option and answer key are both FFFFFH; this inconsistency is reproduced exactly as printed (the book itself flags it as an "inconsistency" / typo).
- No handwritten marginalia observed on this page.

## Content

**32. After RESET, 8086 starts from memory location:** [RESET এর পর, 8086 মেমরি অবস্থান থেকে শুরু হয় ] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৯৪৩]

| | |
|---|---|
| (ক) FFFFFH | (খ) FFFFH |
| (গ) 00000H | (ঘ) 00001H |

**উত্তর (ক) FFFFFH: Explanation (ব্যাখ্যা):** যখন 8086 মাইক্রোপ্রসেসর রিসেট করা হয়, তখন এটি Code Segment (CS) রেজিস্টারটি FFFFFH দিয়ে এবং Instruction Pointer (IP) রেজিস্টারটি 0000H দিয়ে সেড করে। ফিজিক্যাল অ্যাড্রেস স্থির করা হয় এভাবে: (CS × 16) + IP = (FFFFF × 16) + 0000H = FFFFF0H + 0000H = **FFFFF0H**।

অপশনগুলো দেখে, **FFFFFH (ক)-ই সবচেয়ে কাছাকাছি।** এখানে একটি সামান্য inconsistency আছে: স্ট্যান্ডার্ড এবং well-documented starting address হল **FFFFF0H**। FFFFFH অপশনটি একটি trick বা misprint হতে পারে, কিন্তু প্রশ্নে choices-এর মধ্যে, FFFFFH-ই সেই high memory region-কে represent করার জন্য জন্য দেওয়া হয়েছে যেখানে BIOS reset vector থাকে। তন্য অপশনগুলো (00000H, ইত্যাদি) memory-তে অনেক নিচে থাকে।

**33. Thrashing occurs when:** [Thrashing ঘটে যখন:]

| | |
|---|---|
| (ক) too many processes wait for I/O | (খ) CPU is under-utilized |
| (গ) processes spend more time swapping pages than executing instructions | |
| (ঘ) Memory is fragmented | |

**উত্তর (গ) processes spend more time swapping pages than executing instructions**

**Explanation (ব্যাখ্যা):** thrashing হল virtual memory সিস্টেমের একটি condition যেখানে operating system প্রক্রিয়াগুলোকে execute করার বদলে তার বেশিরভাগ সময় ডিস্ক pages swap in এবং swap out করতে (paging) ব্যয় করে। এটি ঘটে যখন active processes-এর প্রয়োজনীয় pages-এর সংখ্যা (working set) available physical memory frames-এর চেয়ে বেশি হয়, যার ফলে constant page faults হয়। সিস্টেমের throughput drastically কমে যায়, এবং CPU utilization কম পড়ে কারণ CPU সরসময় ডিস্ক থেকে pages আনার জন্য অপেক্ষা করে।

**34. MOV AX, BX:** [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১৫০]

| | |
|---|---|
| (ক) copies content of AX to BX | (খ) copies content of BX to AX |
| (গ) erases content of both AX and BX | (ঘ) is a wrong instruction |

**উত্তর (খ) copies content of BX to AX**

**Explanation (ব্যাখ্যা):** x86 assembly language-এ, MOV instruction টি source (ডান operand) থেকে destination (বাম operand)-এ ডাটা কপি করে। সুতরাং, MOV AX, BX instruction টি BX register-এর কন্টেন্ট AX register-এ কপি করে। BX-এর কন্টেন্ট unchanged থাকে।

**35. In modulo-2 operation, ______ give the same result.** [মডুলো-২ অপারেশনে, ______ একই ফলাফল দেয়।]

| | |
|---|---|
| (ক) Addition & division | (খ) Addition & multiplication |
| (গ) Multiplication & division | (ঘ) Subtraction & addition |

[cut off — Q35's answer/explanation is not printed on this page]