# BCS Preliminary MCQs with Solutions — series RLC impedance (continued), Q39–Q40 (cascadeless schedules, waterfall model)

- **Source image:** `52_cascadeless-schedules-waterfall-model.jpg` (original file name `570391096_1582905952676500_2410405581680464342_n.jpg`)
- **Page:** 52 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q40 carries its own red citation; Q39 has none.
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of the explanation for Q38 (impedance of a series RLC circuit); the question itself is printed later in the booklet on page 63.
- The impedance magnitude formula is printed with underscores in the subscripts (`X_L`, `X_C`) exactly as shown in the scan.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**Explanation (ব্যাখ্যা):** একটি series RLC circuit-এর impedance (Z) হল একটি complex quantity যার একটি magnitude এবং phase। impedance-এর magnitude সূত্র দেওয়া হয়:

    |Z| = √[ R² + (X_L - X_C)² ]

যেখানে:

- R হল রোধস্থান (Resistance)
- X_L হল ইনডাকটিভ রিঅ্যাক্ট্যান্স ( = ωL )
- X_C হল ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স ( = 1/ωC )

(X_L - X_C) টাইমটি হল সার্কিটের net reactance। অপশন (ঘ)-এর square root-এর ভিতরে wrong sign আছে।

**39. Cascadeless schedules prevent:** [ক্যাসকেডলেস schedules প্রতিরোধ করে:]

| অপশন | উত্তর |
|---|---|
| (ক) | deadlocks |
| (খ) | aborts |
| (গ) | reading uncommitted data |
| (ঘ) | Long transactions |

**উত্তর (গ) reading uncommitted data:**

**Explanation (ব্যাখ্যা):** একটি cascadeless schedule হল তড়াৎবেলস transaction management-এ এক ধরনের schedule যা cascading rollbacks প্রতিরোধ করে। একটি cascading rollback ঘটে যখন একটি transaction-এর failure জন্য transaction-গুলোর rollback-এর দিকে নিয়ে যায় যেগুলো failed transaction দ্বারা লেখা ডেটা পড়েছিল। Cascadeless schedules এই প্রতিরোধ করে এইভাবে নিশ্চিত করে যে কোনো transaction-কে এমন কোনো ডেটা আইটেম পড়তে হবে না যা অন্য কোনো transaction দ্বারা লেখা হয়েছে যেটি পরে rollback করা হবে (যাকে dirty reads-এ বলা হয়)।

- **Deadlocks (ক)** অন্যান্য protocol যেমন wait-die বা wound-wait দ্বারা প্রতিরোধ করা হয়।
- **Aborts (খ)** সম্পৃক্তিগত প্রতিরোধ করা যায় না।
- **Long transactions (ঘ)** অন্যান্য concurrency control mechanisms দ্বারা ব্যবস্থাপনা করা হয়।

**40. Key disadvantage of the sequential waterfall model is:** [সিকুয়েন্সিয়াল waterfall model এর মূল অসুবিধা হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১১০১]

| অপশন | উত্তর |
|---|---|
| (ক) | Lack of documentation |
| (খ) | Overlapping phases |
| (গ) | Lack of client feedback |
| (ঘ) | Too many prototypes |

**উত্তর (গ) Lack of client feedback:**

**Explanation (ব্যাখ্যা):** ওয়াটারফল মডেল হল একটি linear এবং sequential সফটওয়্যার ডেভেলপমেন্ট lifecycle model। এর সবচেয়ে significant অসুবিধা হল যে এটি খুবই rigid এবং inflexible। একটি phase শেষ হয়ে গেলে গেলে changes incorporate করা difficult এবং costly। এটি ডেভেলপমেন্ট প্রক্রিয়ার সময় continuous client feedback-এর অভাব এর দিকে নির্দেশ করে। ক্লায়েন্ট সাধারণত শেষে only final product-টি দেখতে পায়, যা একটি এমন পণ্য তৈরি করার risk বাড়ায় যা ক্লায়েন্টের প্রকৃত needs পূরণ করে না।

- **ডকুমেন্টেশনের অভাব (ক)** ওয়াটারফলের সাথে একটি সমস্যা নয়; এটি actually ডকুমেন্টেশনের উপর জোর দেয়।
- **ওভারল্যাপিং phases (খ)** pure ওয়াটারফল মডেলে নয়; phases পৃথক এবং sequential।
- **অতিরিক্ত প্রোটোটাইপিং (ঘ)** প্রোটোটাইপিং মডেলের সাথে যুক্ত, ওয়াটারফলের সাথে নয়।

---
