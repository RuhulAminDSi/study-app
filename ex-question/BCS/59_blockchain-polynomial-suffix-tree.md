# BCS Preliminary MCQs with Solutions — 101.101₂ decimal conversion (continued), Q14–Q16 (blockchain immutability, characteristic polynomial, suffix tree)

- **Source image:** `59_blockchain-polynomial-suffix-tree.jpg` (original file name `571115487_1582905549343207_690585311220721454_n.jpg`)
- **Page:** 59 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q15 carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of Q13's worked conversion (101.101₂) from page 61; the question itself is printed later in the booklet on page 61.
- The scan prints "রঙ্গদৈর্ঘ্য" for wavelength in Q16 where "স্ট্রিং" (string) is evidently meant — reproduced as scanned.
- Q14 and Q16 have no printed source citation.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

    101.101₂ = (1×2²) + (0×2¹) + (1×2⁰) . (1×2⁻¹) + (0×2⁻²) + (1×2⁻³)
    = (1×4) + (0×2) + (1×1) . (1×0.5) + (0×0.25) + (1×0.125)
    = (4 + 0 + 1) . (0.5 + 0 + 0.125)
    = 5 . 0.625
    = 5.625

**14. ________ ensures that data cannot be altered in a blockchain.** [__________ নিশ্চিত করে যে ব্লকচেইনে ডেটা পরিবর্তন করা যাবে না।]

| অপশন | উত্তর |
|---|---|
| (ক) | Consensus mechanism |
| (খ) | Smart contract |
| (গ) | Immutability |
| (ঘ) | Distributed ledger |

**উত্তর (গ) Immutability:**

**Explanation (ব্যাখ্যা):** **ইমিউটেবিলিটি** হল ব্লকচেইনের একটি বৈশিষ্ট্য যা নিশ্চিত করে যে ডেটাবেসের একটি রুক তৈরি হয়, তথন এটিকে পরিবর্তন করা আত্যন্ত কঠিন এবং ব্যবহারিকতার অসম্ভব হয়ে পড়ে। এটি অর্জন করা হয় কিভেটোঘাধাধিক হালমাইং এবং ব্লকচেইর বিস্তারকৃত প্রকৃতির মাধ্যমে। কেউ যদি একটি রুক পরিবর্তন করার চেষ্টা করে, তবে তাকে পরবর্তী সমস্ত রুক পরিবর্তন করতে হবে এবং নেটওয়ার্কের majority নিয়ন্ত্রণ করতে হবে, যা গাণনাতাত্ত্বিকভাবে অসম্ভব।

- কনসেনসাস মেকানিজম (ক) হল ব্লকচেইনের বৈধতা নিশ্চিত একত্বায় হয়।
- স্মার্ট কন্ট্রাক্ট (খ) হল একটি স্বয়ংক্রিয়ভাবে চালু হওয়া শর্তাবলী কোডে লেখা থাকে।
- ডিস্ট্রিবিউটেড লেজার (ঘ) হল এমন প্রযুক্তি যা ডেটা একটি নেটওয়ার্ক জুড়ে সংরক্ষণ করতে দেয়।

**15. The characteristic polynomial of adjacency matrix is used to study:** [adjacency ম্যাট্রিক্সের বৈশিষ্ট্যতম polynomial অধ্যয়নের জন্য ব্যবহৃত হয়:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং-৫১৫]

| অপশন | উত্তর |
|---|---|
| (ক) | chromatic number directly |
| (খ) | Graph spectra |
| (গ) | connectivity only |
| (ঘ) | planarity |

**উত্তর (খ) Graph spectra:**

**Explanation (ব্যাখ্যা):** একটি গ্রাফের অ্যাডজেসেন্স ম্যাট্রিক্সের ক্যারেক্টারিস্টিক পলিনোমিয়াল হল det(λI - A), যেখানে A হল অ্যাডজেসেন্স ম্যাট্রিক্স। এই পলিনোমিয়ালের মূলগুলি হল অ্যাডজেসেন্স ম্যাট্রিক্সের eigenvalues। একটি গ্রাফের অ্যাডজেসেন্স ম্যাট্রিক্সের eigenvalue-গুলির সেটকে গ্রাফের স্পেকট্রাম বলা হয়। গ্রাফ স্পেকট্রাম (Graph Spectra) অধ্যয়ন করা গ্রাফের গুরুত্বপূর্ণ গঠনগত ধর্মকে বোঝায়, যেমন কানেক্টিভিটি, bipartiteness, এবং chromatic number-এর সীমা নির্ধারণ, কিন্তু এটি সরাসরি chromatic number (যেমন না (ক)), শুধুমাত্র কানেক্টিভিটির মধ্যে সীমাবদ্ধ নয় (গ), এবং planarity অধ্যয়নের প্রাথমিক tool নয় (ঘ)।

**16. Which case is a suffix tree useful for?** [কোন ক্ষেত্রে suffix tree কার্যকর:] [লেখার আগে লগিং করার জন্য প্রয়োজন:]

| অপশন | উত্তর |
|---|---|
| (ক) | Fast string search |
| (খ) | Minimum cut |
| (গ) | Sorting numbers |
| (ঘ) | Graph coloring |

**উত্তর (ক) Fast string search:**

**Explanation (ব্যাখ্যা):** একটি সাফিক্স ট্রি হল একটি compressed ডাটা স্ট্রাকচার যাতে একটি প্রান্ত স্ট্রিং-এর সমস্ত সাফিক্স থাকে। এর প্রাথমিক উদ্দেশ্য হল স্ট্রিং প্রসেসিং-এর বিভিন্ন সমস্যা আত্যন্ত কার্যকরভাবে সমাধান করা। একবার তৈরি হয়ে গেলে, এটি অত্যন্ত দ্রুত স্ট্রিং (যেমন, একটি প্যাটার্ন ট্রাউন্ট আছে কিনা বা পরিকল্প করা) করতে সমক্ষম হয়, যায় সমস্য্য প্যাটার্নের দেখের সময়ুপরিত, টেক্সটের দেখের নয়। এটি মিনিমাম কাট বের করা, নাম্বার সর্ট করা বা গ্রাফ কালারিং-এর জন্য ব্যবহার করা হয় না।

---
