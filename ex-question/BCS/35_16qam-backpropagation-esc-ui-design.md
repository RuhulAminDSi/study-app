# Chapter O (BCS prili) — 16QAM bandwidth, backpropagation ML models, ESC prefix, UI design principle

- **Source image:** `35_16qam-backpropagation-esc-ui-design.jpg` (original file name `568847258_1582906636009765_4085942993364788001_n.jpg`)
- **Page:** 35 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; Q70 cites its source in red as "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১০০৬/১০০৯]"
- **Exam date:** not shown (source cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- The page opens with the answer/explanation of a preceding question (16QAM spectral efficiency) whose question text and options are not on this image.
- Option markers are printed as (ক), (খ), (গ), (ঘ); Q70 and Q71 print all four on a single line while Q72 prints them in two columns. Both layouts are reproduced in table form.
- Q72's answer key line "উত্তর (খ) User-centered design" is the last line on the page; its explanation is [cut off] and continues on the next page.
- No handwritten marginalia observed on this page.

## Content

**উত্তর (ঘ) 16QAM: Explanation (ব্যাখ্যা):** বাউডউথ দক্ষতা বলতে বোঝায় প্রতি হার্জ বাউডউথে কত বিট প্রতি সেকেন্ডে পাঠানো যেতে পারে (bps/Hz)।

- **BPSK (ক):** 1 বিট/সিম্বল → বাউডউথ দক্ষতা ~1 bps/Hz।
- **QPSK (খ):** 2 বিট/সিম্বল → বাউডউথ দক্ষতা ~2 bps/Hz।
- **FSK (গ):** সাধারণত খারাপ বাউডউথ দক্ষতা আছে।
- **16QAM (ঘ):** 4 বিট/সিম্বল → বাউডউথ দক্ষতা ~4 bps/Hz।

সুতরাং, প্রধান বিকল্পগুলির মধ্যে, **16QAM** হল সবচেয়ে বাউডউথ-দক্ষ কারণ এটি প্রতি সিম্বলে সর্বাধিক বিট পাঠায়। বেশি বিট প্যাকেজএর মধ্যে।

**70. Which ML model employs backpropagation?** [কোন এমএল মডেল ব্যাকপ্রোপাগেশন নিয়োগ করে?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১০০৬/১০০৯]

| (ক) MLP | (খ) CNN | (গ) RNN | (ঘ) All of the above |
|---|---|---|---|

**উত্তর (ঘ) All of the above: Explanation (ব্যাখ্যা):** ব্যাকপ্রোপাগেশন হল নেটওয়ার্ক নেটওয়ার্কের প্রশিক্ষণ দেওয়ার জন্য ব্যবহৃত মূল অ্যালগরিদম, যা নেটওয়ার্কের সমস্ত ওজনের সাপেক্ষ লস ফাংশনের গ্রেডিয়েন্ট দক্ষতার সাথে গণনা করা এবং ওজনগুলোতে একটি কমানোর জন্য ব্যবহৃত হয়।

- **(ক) MLP (মাল্টি-লেয়ার পারসেপ্ট্রন):** এটি একটি মৌলিক ফিডফরওয়ার্ড নেটওয়ার্ক নেটওয়ার্ক, এবং ব্যাকপ্রোপাগেশন হল এর প্রশিক্ষণের জন্য স্ট্যান্ডার্ড অ্যালগরিদম।
- **(খ) CNN (কনভলিউশনাল নেটওয়ার্ক নেটওয়ার্ক):** সিম্বলেন এক ধরনের বিশেষায়িত নেটওয়ার্ক নেটওয়ার্ক। এগুলো ব্যাকপ্রোপাগেশন ব্যবহার করে প্রশিক্ষিত হয়।
- **(গ) RNN (রিকারেন্ট নেটওয়ার্ক নেটওয়ার্ক):** আরও একটি সিকোয়েনশিয়াল তথ্য বিশ্লেষণের জন্য ব্যবহৃত হয়। ব্যাকপ্রোপাগেশনের একটি variant, যাকে ব্যাকপ্রোপাগেশন থ্রু টাইম (**BPTT**) বলা হয়, সেগুলোকে প্রশিক্ষণ দিতে ব্যবহৃত হয়।

সুতরাং, এই সমস্ত মডেলগুলো শেখার জন্য ব্যাকপ্রোপাগেশন অ্যালগরিদম (বা একটি variant) নিয়োগ করে।

**71. Which of the following is used to transfer an instruction from 8086 to 8087?** [8086 থেকে 8087 এ একটি instruction স্থানান্তর করতে নিচের কোনটি ব্যবহার করা হয়?]

| (ক) INT 3 | (খ) JMP | (গ) LOCK | (ঘ) ESC |
|---|---|---|---|

**উত্তর (ঘ) ESC: Explanation (ব্যাখ্যা):** **ESC (Escape)** নির্দেশটি 8086 (মূল প্রসেসর) এবং 8087 এর মধ্যে যোগাযোগের জন্য ব্যবহৃত হয়। যখন 8086 একটি নির্দেশ কোড করে যা 8087-এর নির্দেশ সেটের অন্তর্ভুক্ত (যা '11011' বিট প্যাটার্ন দিয়ে শুরু হয়), এটি তার কিছু স্ট্রোটোপস লাইন সক্ষিপ্ত করে এবং একটি ESC নির্দেশ কার্যকর করে। এটি 8087-কে সংকেত দেয় যে ভালো থেকে নির্দেশ নিয়ে এটিকে পড়ে। অন্যান্য বিকল্পগুলি (INT 3, JMP, LOCK) বিভিন্ন উদ্দেশ্যে ব্যবহৃত হয় (যেমন ইন্টারাপ্ট, প্রোগ্রাম কন্ট্রোল এবং বাম লক)।

**72. Which principle is followed during user interface design?** [ইউজার ইন্টারফেস ডিজাইনের সময় কোন নীতি অনুসরণ করা হয়?]

| | |
|---|---|
| (ক) High coupling | (খ) User-centered design |
| (গ) Sequential processing | (ঘ) Cost optimization |

**উত্তর (খ) User-centered design**

[cut off — Q72's explanation is not printed on this page]