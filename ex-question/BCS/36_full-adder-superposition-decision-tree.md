# Chapter O (BCS prili) — Full Adder carry-out, Superposition Theorem, decision tree lower bound

- **Source image:** `36_full-adder-superposition-decision-tree.jpg` (original file name `568919857_1582907279343034_3396271159856702757_n.jpg`)
- **Page:** 36 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q97 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৩৯৪]", Q98 "নং- ১০৫৫"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) in two columns; reproduced as such and rendered as a table for legibility.
- In Q97 options (গ) and (ঘ) are printed identically ("xy + xz + yz"); both are reproduced as printed.
- Q99's blank is printed as a long underscore rule in both the English and Bengali lines; reproduced as printed. Q99 carries no red source citation.
- No handwritten marginalia observed on this page.

## Content

**97. If x, y, z are inputs to a Full Adder, the logic expression of carry out is:** [যদি x, y, z একটি Full Adder-এর ইনপুট হয়, তাহলে carry out-এর লজিক এক্সপ্রেশন হল:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৩৯৪]

| | |
|---|---|
| (ক) x̅y + x̅z + yz | (খ) x + y + z |
| (গ) xy + xz + yz | (ঘ) xy + xz + yz |

**উত্তর (গ) xy + xz + yz: Explanation (ব্যাখ্যা):** একটি ফুল অ্যাডার তিনটি ইনপুট-বিট ইনপুট হয়: x, y, এবং একটি ক্যারি-ইন z। ক্যারি-আউট (C_out) 1 হয় যখন তিনটি ইনপুটের মধ্যে দুইটি বা তার বেশি 1 হয়। সত্য সারণি এবং কারনউঘ ম্যাপ সরলীকরণের ক্যারি-আউটটির জন্য স্ট্যান্ডার্ড এক্সপ্রেশন দেয়: C_out = xy + xz + yz

এটি এভাবে পড়া যেতে পারে: "ক্যারি জেনারেট হয় যদি x এবং y উভয়ই 1 হয়, অথবা x এবং z উভয়ই 1 হয়, অথবা y এবং z উভয়ই 1 হয়।"

**98. Which of the following is true for the Superposition Theorem?** [সুপারপজিশন Theorem এর ক্ষেত্রে নিচের কোনটি সত্য?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১০৫৫]

| | |
|---|---|
| (ক) Duality | (খ) Linearity |
| (গ) Reciprocity | (ঘ) Non-linearity |

**উত্তর (খ) Linearity: Explanation (ব্যাখ্যা):** সুপারপজিশন থিওরেম হল নিরনীত সার্কিটে আনালগ হিসাবের ব্যাখ্যা একটি মৌলিক নীতি। এটি বলে যে একাধিক স্বাধীন সোর্স সেট থেকে কোনো লিনিয়ার, বাইলিনিয়ার সিস্টেমে, যেকোনো একটিতে রেণ্ডম স্কেলিং (ভোল্টেজ বা কারেন্ট) হল প্রতিটি সোর্স তার স্কেলিং ফ্যাক্টর দ্বারা গুণ করে যার ফলে সোর্সটি একটি সুপারপজিশন যোগফলের যোগ করে যায়। যখন তন্য সমস্ত স্বাধীন সোর্স তাদের অত্যুত্তরীণ হিসাবডেক্স দিয়ে প্রতিস্থাপিত হয়।

উপস্থাপাদ্য শুদ্ধমাত্র লিনিয়ার সার্কিট প্রাক্তিক্ষ এবং homogeneity (কেলিং) এবং additivity-এর বৈশিষ্ট্যের উপর নির্ভর করে, যা একটে **লিনিয়ারিটি** গঠন করে।

**99. _______ method is often used to prove lower bounds in sorting.** [_______ পদ্ধতি প্রায়ই sorting এর ক্ষেত্রে নিম্ন সীমা প্রমাণ করার জন্য ব্যবহৃত হয়]

| | |
|---|---|
| (ক) Recursion tree | (খ) Master theorem |
| (গ) Decision tree | (ঘ) Dynamic programming |

**উত্তর (গ) Decision tree Explanation (ব্যাখ্যা):** ডিসিশন ট্রি মতেলটি comparison-based sorting algorithms-এর জন্য lower bounds প্রমাণ করতে ব্যবহৃত একটি শক্তিশালী abstraction। এই মডেলে, ট্রি প্রতিটি internal node দুটি উপাদানের মধ্যে একটি তুলনা represents করে (যেমন, a<sub>i</sub> : a<sub>j</sub>), এবং প্রতিটি leaf ইনপুট উপাদানগুলির একটি সংস্থাপ permutation (একটি sorted order) represents করে। root থেকে একটি leaf-এর path আ্যালগরিদম দ্বারা করা তুলনার sequence represents করে।

যেহেতু n উপাদানের জন্য n! সম্ভাব্য permutation আছে, decision tree-এর n!টি leaf থাকতে হবে। Lটি leaf সহ একটি বাইনারি ট্রির minimum height হল log₂(L)। অতএব, worst case-এ required comparisons-এর minimum সংখ্যা হল log₂(n!), যা Ω(n log n)। এটি প্রমাণ করে যে কোনও comparison-based sort O(n log n)-এর থেকে ক্রত হতে পারে না।