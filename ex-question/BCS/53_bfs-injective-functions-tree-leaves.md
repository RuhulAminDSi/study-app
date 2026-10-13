# BCS Preliminary MCQs with Solutions — SVG explanation (continued), Q76–Q78 (breadth-first search, injective functions, tree with K leaves)

- **Source image:** `53_bfs-injective-functions-tree-leaves.jpg` (original file name `570401136_1582906796009749_3454145762973790701_n.jpg`)
- **Page:** 53 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of an explanation about the SVG (Scalable Vector Graphics) format; the question text and number are on an earlier page and are not recoverable from this image.
- Q78's explanation is cut off at the foot of the page — it continues on page 57.
- Subscripts are reproduced as printed (`ᵢP_m` for the permutation notation; the scan renders it as a garbled glyph followed by `P_m`).
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

**Explanation (ব্যাখ্যা):** একটি বিস্তৃত ইন্ডেক্স একটি কলামের প্রতিটি স্থানে জন্য একটি বিস্তৃত ধরনের একটি ডেটা স্টোরেজ। একটি ডেটা ম্যানিপুলেটর যা প্রতিটি বিট একটি সারিকে উপস্থাপন করে এবং নির্দেশ করে যে সেই সারিতে নির্দিষ্ট মানটি নির্দিষ্ট মানটি রয়েছে।

- **লো-কেসিনালিটি কলাম-এ** সারির সংখ্যার তুলনায় খুব কম স্থানে মান থাকে (যেমন, একটি "লিঙ্গ" কলাম যার মান 'M', 'F', 'অন্যান্য', বা একটি "স্থিতি" কলাম যার মান 'সক্রিয়', 'নিষ্ক্রিয়')। এই ধরনের কলামের জন্য, বিস্তৃত ইন্ডেক্স খুবই স্পেস-এফিসিয়েন্ট এবং জটিল কোয়ারীর জন্য অত্যন্ত লাভজনক অপটিমাইজেশন (AND, OR, NOT) করার অনুমতি দেয়।
- **হাই-কার্ডিনালিটি কলাম (ক)**, যেমন প্রাথমিক কী বা "নাম" ফিল্ড, এর জন্য প্রচুর সংখ্যক বিভিন্ন মান থাকে, যা ইন্ডেক্সকে অদক্ষ করে তোলে।
- **তারা ব্যব টেক্সট কিল্ড (গ)** বা JSON (ঘ) এর জন্য আদর্শ নয়।

**76. In the breadth first search, which of the following should be used?** [breadth first search, এ নিচের কোনটি ব্যবহার করা উচিত?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৫৮]

| অপশন | উত্তর |
|---|---|
| (ক) | Stack |
| (খ) | Queue |
| (গ) | Heap |
| (ঘ) | Linked list |

**উত্তর (খ) Queue:**

**Explanation (ব্যাখ্যা):** ব্রেডথ-ফার্স্ট সার্চ (BFS) হল একটি গ্রাফ ট্রাভার্সল অ্যালগরিদম যা পরবর্ত্যজেরের নোড যথেষ্ট ব্রেডথের আগে বিস্তার করতে পাঠায়। একটি **কিউই** (যা ফার্স্ট-ইন-ফার্স্ট-আউট বা FIFO নীতি অনুসরণ করে) এটি জন্য নিঃশ্বত ভাড়া খুঁজতে ভিত্তি হিসেবে কাজ করে এবং সমন্বয় একটি node ভিজিটে করা হয় এবং সামনে থেকে ড্রিকিট করা হয়, নিচ্ছত কবে যে কোনে আবিষ্কৃত হয় সেই কখনে ভিজিট করা হয়, যা BFS-এর মূল বিশেষতা।

**77. if |A| = m, |B|=n, then the number of injective functions A -> B (m<=n) is?** [যদি |A| = m, |B|=n, তাহলে A -> B (m<=n) ইনজেক্টিভ ফাংশনের সংখ্যা হল?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৪৮৮]

| অপশন | উত্তর |
|---|---|
| (ক) | P(n,m) |
| (খ) | C(n,m) |
| (গ) | nm |
| (ঘ) | m |

**উত্তর (ক) P(n,m):**

**Explanation (ব্যাখ্যা):** একটি **ইনজেক্টিভ ফাংশন** (বা এক ফাংশন) হল একটি ফাংশন যেখানে ডোমেইনের (A) প্রতিটি element কোডোমেইনের (B) একটি ভিন্ন element-এর সাথে ম্যাপ করে। A-তে সব element B-এর **n**টি element-এর যেকোনো একটিতে ম্যাপ করতে পারে।

- দ্বিতীয় element-টিকে একটি ভিন্ন element-এ ম্যাপ করতে হবে, তাই এর **(n-1)**টি পছন্দ আছে।
- এটি m-তম element পর্যন্ত চলতে থাকে, যায় **(n - m + 1)**টি পছন্দ আছে।

এই ধরনের ফাংশনের মোট সংখ্যা হল: `n × (n-1) × (n-2) × ... × (n - m + 1)`। এটি **m** টি করে নেওয়া **n** আইটেমের পারমিউটেশনের সংখ্যার সমান, যাকে **P(n, m)** বা ᵢP_m দ্বারা চিহ্নিত করা হয়।

**78. A tree with K leaves has at least ________ vertices.** [K পাতা বিশিষ্ট একটি গাছের কমপক্ষে ________ vertices থাকে।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৪৯৪]

| অপশন | উত্তর |
|---|---|
| (ক) | K |
| (খ) | K - 1 |
| (গ) | K + 1 |
| (ঘ) | 2K |

**উত্তর: (গ) K + 1:**

ব্যাখ্যা:

- একটি ট্রি (tree) হলো connected, acyclic গ্রাফ।
- যদি ট্রিতে K টি লিফ (leaf) থাকে, তাহলে ন্যূনতম vertices-এর সংখ্যা হবে লিফগুলোর সাথে ভার্সতে একটি internal vertex যোগ করে।

[cut off — explanation continues on the following page]

---
