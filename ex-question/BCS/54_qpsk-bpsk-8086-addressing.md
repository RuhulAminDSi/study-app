# BCS Preliminary MCQs with Solutions — Q4–Q7 (QPSK/BPSK symbol time, 8086 physical address, CPU execution time, fastest running complexity)

- **Source image:** `54_qpsk-bpsk-8086-addressing.jpg` (original file name `570470334_1582905462676549_6203765360345417408_n.jpg`)
- **Page:** 54 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Question numbering restarts at 4 on this page, i.e. this belongs to a second question block in the same booklet chapter; the booklet's global numbering is not continuous across the whole scan.
- Q7 is cut off after its option list — the answer/explanation appears later in the booklet.
- Superscripts and hexadecimal suffixes are reproduced as printed (`T_Q`, `T_B`, `20000H`, `10⁹`).
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**4. For the symbol times of QPSK (TQ) and BPSK (TB), we have:** [QPSK (TQ) এবং BPSK (TB) এর symbol time এর জন্য, আমাদের আছে:]

| অপশন | উত্তর |
|---|---|
| (ক) | TQ = 0.25TB |
| (খ) | TQ = 4TB |
| (গ) | TQ = 0.5TB |
| (ঘ) | TQ = 2TB |

**উত্তর (ঘ).TQ = 2TB:**

**Explanation (ব্যাখ্যা):** BPSK প্রতি সিম্বলে 1 বিট ট্রান্সমিট করে তাই, একটি নির্দিষ্ট বিট রেট (R বিট/সেকেন্ড) বাজায় রাখলে, এর সিম্বল টাইম T_B = 1/R। QPSK প্রতি সিম্বলে 2 বিট ট্রান্সমিট করে তাই, একই বিট রেট (R বিট/সেকেন্ড)-এর জন্য, এর অর্থক সংখ্যক সিম্বল পাঠানোর দরকার হয় এর সিম্বল টাইম T_Q = 2/R।

দুটি তুলনা করলে: T_Q = 2/R এবং T_B = 1/R, তাই T_Q = 2 × T_B।

**5. Calculate the physical address in 8086 with segment and offset addresses 2000H and 0020H, respectively:** [8086-এ যখনে 2000H এবং 0020H সেগমেন্ট এবং offset addresses দিয়ে physical address পগলা করুন:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং-১৯২]

| অপশন | উত্তর |
|---|---|
| (ক) | 200200H |
| (খ) | 20020H X 16 |
| (গ) | 20020H |
| (ঘ) | 20020H + 0020H |

**উত্তর (গ) 20020H:**

**Explanation (ব্যাখ্যা):** 8086 মাইক্রোপ্রসেসরটি একটি 16-বিট সেগমেন্ট অ্যাড্রেস এবং একটি 16-বিট অফসেট অ্যাড্রেস কশাইন করে 20-বিট ফিজিক্যাল অ্যাড্রেস তৈরি করে। সূত্র হল:

    ফিজিক্যাল অ্যাড্রেস = (সেগমেন্ট অ্যাড্রেস × 16) + অফসেট অ্যাড্রেস

- সেগমেন্ট অ্যাড্রেস (2000H)-কে 4 বিট বামে শিফট করলে (বা 16 দিয়ে গুণ করলে) = 20000H
- অফসেট অ্যাড্রেস (0020H) যোগ করলে = 20000H + 0020H = **20020H**

**6. The execution time (in sec) to execute 10⁹ instructions with CPI = 2 and clock frequency = 1GHz is:** [CPI = 2 এবং clock frequency = 1GHz সহ 10⁹ নির্দেশাবলী কার্যকর করার execution time (সেকেন্ডে) হল:]

| অপশন | উত্তর |
|---|---|
| (ক) | 0.5 |
| (খ) | 1 |
| (গ) | 2 |
| (ঘ) | 3 |

**উত্তর (গ) 2:**

**Explanation (ব্যাখ্যা):**

    CPU Time = (Instruction Count × CPI) / Clock Rate

- Instruction Count = 10⁹
- CPI (Cycles Per Instruction) = 2
- Clock Rate = 1 GHz = 10⁹ Hz = 10⁹ cycles/sec

    CPU Time = (10⁹ × 2) / 10⁹ = 2 seconds.

**7. Which of the following runs the fastest?** [নিচের কোনটি সবচেয়ে দ্রুত চলে?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং-৪৫০]

| অপশন | উত্তর |
|---|---|
| (ক) | O(log n) |
| (খ) | O(n) |
| (গ) | O(n log n) |
| (ঘ) | O(√n) |

[cut off — answer/explanation not on this page]

---
