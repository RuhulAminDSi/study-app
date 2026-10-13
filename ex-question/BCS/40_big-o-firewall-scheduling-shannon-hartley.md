# Chapter O (BCS prili) — Big-O growth order, firewall OSI layer, project scheduling, Shannon-Hartley capacity

- **Source image:** `40_big-o-firewall-scheduling-shannon-hartley.jpg` (original file name `569039659_1582905459343216_1448389073548900839_n.jpg`)
- **Page:** 40 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q8 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৫৬৯]", Q10 "নং- ৫৬৯"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- The page opens with the answer/explanation of a preceding question (O(log n)) whose question text and options are not on this image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) in two columns; reproduced as such and rendered as a table for legibility.
- Q8's blank is printed as "___" in the English line and "___" in the Bengali line; reproduced as printed.
- Q10's explanation is cut off by the page break after "C = 16000 × log₂(16)" — the final numeric result line is [cut off].
- No handwritten marginalia observed on this page.

## Content

**উত্তর (ক) O(log n): Explanation (ব্যাখ্যা):** Big O notation-এ, যা গ্রোথের upper bound বর্ণনা করে, কম्प्यूটারগুলোর গতি/ক্ষমতা হার অনুযায়ী সাজিয়ে পার্ট: O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²)

প্রদত্ত আশপাশের মধ্যে, **O(log n)**-এর গ্রোথ সবচেয়ে ধীর। যখন ইনপুট সাইজ (n) খুব বড় হয়ে যায়, O(log n) কমগ্রিসিটি সম্পর্ণ একটি আ্যালগরিদম অনুগুণের ক্ষেত্রে কত ছোট।

**8. The firewall works at the ___ layer of OSI model.** [ফায়ারওয়াল OSI মডেলের ___ স্তরে কাজ করে।] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং-৫৬৯]

| | |
|---|---|
| (ক) Network | (খ) Physical |
| (গ) Data link | (ঘ) Presentation |

**উত্তর (ক) Network: Explanation (ব্যাখ্যা):** ফায়ারওয়াল একটি নেটওয়ার্ক সিকিউরিটি সিস্টেম বা পুরোধারণের ফায়ারওয়াল এবং আন্ডারগ্রাউন্ড নেটওয়ার্ক ট্রাফিক মনিটর ও কন্ট্রোল করে। সবচেয়ে বেশি ব্যবহৃত ফায়ারওয়াল, একটি প্যাকেট-ফিল্টারিং ফায়ারওয়াল, OSI মডেলের নেটওয়ার্ক স্তর (লেয়ার 3)-এ কাজ করে। এটি সাধারণ/ডিফল্ট IP অ্যাড্রেস, প্রোটোকল, এবং পোর্ট নম্বরের ভিত্তিতে সিকিউরিটি পলিসি প্রয়োগ করে। (দ্রষ্টব্য: তারও ত্যাতড়া ফায়ারওয়াল ট্রাফিক পারফরমেন্সের মতে উপরের স্তরে উপভক্ত করতে পারে)।

**9. The main goal of project scheduling is to:** [প্রকল্পের scheduling এর মূল লক্ষ্য হল:]

| | |
|---|---|
| (ক) minimize coding error | (খ) allocate resources & set deadlines |
| (গ) best software early | (ঘ) improve documentation quality |

**উত্তর (খ) allocate resources & set deadlines: Explanation (ব্যাখ্যা):** প্রতিটি কোম্পানির হল প্রতিষ্ঠানের মধ্যে একটি কার্যকর পরিকল্পনা এবং প্রাথমিক লক্ষ্য হল প্রকল্পের জন্য একটি টাইমলাইন তৈরি করা, যার মধ্যে রয়েছে:

- **রিসোর্স বরাদ্দ করা** (টিম মেম্বার, equipment, budget) নির্দিষ্ট টাস্কের জন্য।
- **সময়সীমা** এবং **মাইলফলক** নির্ধারণ করা টাইক **সম্পূর্ণ** করা।

তুল কমানো (ক) এবং ভুলমোটেশনের মান ছাড়াই সবচেয়ে উপযুক্ত ফলাফল দেওয়া যায় না। তবে একটি ভালোভাবে সুন্দর প্রকল্পের সময়সূচি এবং সরচর প্রকল্পের বাজেট দেয়। ভেলোতরি (গ) একটি কাজ ফলোআপ হলেও, এগুলিং প্রথম লক্ষ্য নয়।

**10. Channel capacity (in kbps) of band limited Gaussian channel (SNR=15, bandwidth=16 kHz) is:** [band limited Gaussian channel এর চ্যানেল ক্যাপাসিটি (কেবিপিটে) (SNR=15, ব্যান্ডউইথ=16 kHz) হল:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৫৬৯]

| | |
|---|---|
| (ক) 32 | (খ) 64 |
| (গ) 18 | (ঘ) 128 |

**উত্তর (খ) 64: Explanation (ব্যাখ্যা):** চ্যানেল ক্যাপাসিটি (C) বের করতে আমরা Shannon-Hartley theorem ব্যবহার করি:

**C = B × log₂(1 + SNR)**

- Bandwidth (B) = 16 kHz = 16,000 Hz
- SNR = 15 (এটি একটি ratio, dB-এ নয়)

C = 16000 × log₂(1 + 15)
C = 16000 × log₂(16)

[cut off — the remaining computation lines are not printed on this page]