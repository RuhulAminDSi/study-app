# BCS Preliminary MCQs with Solutions — Insertion-sort comparison list (tail), Q61–Q63 (DB keys, reinforcement learning, machine epsilon)

- **Source image:** `44_db-keys-reinforcement-learning-epsilon.jpg` (original file name `569093568_1582906389343123_7925980765024156215_n.jpg`)
- **Page:** 44 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The top of the page is a continuation of a bulleted list belonging to a question whose text and question number are on an earlier page (the list is the worst-case comparison count for insertion sort; the numbered question 60 appears later in the booklet).
- Q63 is cut off after its option list — no answer/explanation appears on this page; the answer block for Q63 appears on page 60.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

- 3rd element-টি insert করতে, 2 comparisons প্রয়োজন।
- …
- nth element-টি insert করতে, (n-1) comparisons প্রয়োজন।

মোট comparisons-এর সংখ্যা হল প্রথম (n-1)টি পূর্ণসংখ্যার যোগফল:

    1 + 2 + 3 + ... + (n-1) = n(n-1)/2

**61. Which key is known as the minimal super key?** [কোন কী টি মিনিমাল সুপার কী নামে পরিচিত?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৮২২]

| অপশন | উত্তর |
|---|---|
| (ক) | Primary key |
| (খ) | Secondary key |
| (গ) | Foreign key |
| (ঘ) | Candidate key |

**উত্তর (ঘ) Candidate key:**

**Explanation (ব্যাখ্যা):** একটি সুপার কী হল এক বা একাধিক কলামের একটি সেট যা একটি টেবিলের একটি সারিকে uniquely identify করতে পারে।

- একটি **প্রাথমিক** কী হল একটি **minimal super key**, অর্থাৎ এটি এমন একটি সুপার কী যে যেহেতু হেতে unique identification property হারালনা ছাড়া আপনি কোনও কলাম সরাচ্ছে পারবেন না।
- **প্রাথমিক** কী (ক) হল সেই প্রাথমিক কী যেটি ডাটাবেজে ডিজাইনের দ্বারা টেবিলের প্রথম identifier হিসেবে chosen হয়।

সুতরাং, সমস্ত প্রাথমিক কী হল সুপার কী, কিন্তু শুধুমাত্র minimal গুলোই প্রাথমিক কী।

**62. ________ algorithm requires policy.** [_________ অ্যালগরিদমের জন্য নীতি প্রয়োজন।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১০০৯]

| অপশন | উত্তর |
|---|---|
| (ক) | Supervised learning |
| (খ) | Fuzzy logic |
| (গ) | Deep learning |
| (ঘ) | Reinforcement learning |

**উত্তর (ঘ) Reinforcement learning**

**Explanation (ব্যাখ্যা):** Reinforcement Learning (RL)-এ, একটি এজেন্ট একটি cumulative reward maximize করার জন্য একটি **environment**-এ actions performing করে decisions নেওয়া learns। একটি RL এজেন্টের core হল তার **policy (π)**। একটি policy হল একটি strategy বা mapping যা এজেন্টকে বলে একটি given state-এ কী action নিতে হবে এটি একটি simple lookup table বা একটি complex neural network হতে পারে। RL-এর goal হল optimal policy-টি find করা।

Supervised learning (ক), Fuzzy logic (খ), এবং Deep learning (গ)-এর মতো অন্যান্য options বিভিন্ন parameters বা rules ব্যবহার করতে পারে, কিন্তু "policy" এর ধারণাটি Reinforcement Learning-এর জন্য central এবং specific।

**63. In a floating point representation, 'machine epsilon' refers to:** [একটি floating point representation, এ 'মেশিন এপসিলন' বলতে বোঝায়:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ২১২]

| অপশন | উত্তর |
|---|---|
| (ক) | The largest representable number |
| (খ) | The smallest representable number |
| (গ) | the difference between one and the next larger representable number |
| (ঘ) | The rounding error in subtraction |

[cut off — answer/explanation not on this page]

---
