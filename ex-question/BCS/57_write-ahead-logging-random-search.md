# BCS Preliminary MCQs with Solutions — tree with K leaves (continued), Q79–Q81 (write-ahead logging, velocity/frequency/wavelength, random search)

- **Source image:** `57_write-ahead-logging-random-search.jpg` (original file name `570974287_1582906872676408_6592850088206152828_n.jpg`)
- **Page:** 57 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q80 and Q81 carry their own red citations; Q79 has none.
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of Q78's explanation (tree with K leaves) from page 53.
- The symbol for wavelength is printed as `λ` in the question and spelled "তরঙ্গদৈর্ঘ্য" in the Bengali; the Hindi-looking transliteration "তরঙ্গদৈর্ঘ্য" appears exactly as scanned.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

- একটি simplest tree যেখানে K লিফ আছে তা হলো **star tree**, যেখানে একটি central node সর K লিফের সাথে যুক্ত।
- এই ক্ষেত্রে, total vertices = 1 (central) + K (leaves) = K + 1।

তাই এবং, **least vertices = K + 1**

**79. Write-ahead logging requires:** [লেখার আগে লগিং করার জন্য প্রয়োজন:]

| অপশন | উত্তর |
|---|---|
| (ক) | Data first, log later |
| (খ) | No redo phase |
| (গ) | log record flushed before data page |
| (ঘ) | None of the above |

**উত্তর (গ) log record flushed before data page**

**Explanation (ব্যাখ্যা):** রাইট-আহেড লগিং (WAL) হল ডাটাবেস সিস্টেমে ব্যবহৃত একটি মৌলিক প্রোটোকল যা পারম্পারিকভাবে এবং স্থায়ীভাবে নিশ্চিত করে। এর মূল নিয়ম হল যে একটি লেনদেনের সাথে যুক্ত **একটি লেনদেনের সাথে যুক্ত ব্লকে must be permanently written to stable storage (the log) *before* the corresponding data pages are written to the database on disk**। এটি নিশ্চিত করে যে যদি একটি ক্র্যাশ ঘটে, pemulihan সিস্টেম লেনদেনগুলি পুনরায় ব্যবহার করতে বা পুর্ববর্তী কিরিয়েসে আনতে লাগতে পারে, কারণ লগে সমস্ত পরিবর্তনের একটি রেকর্ড থাকে।

**80. For velocity (v), frequency (f), and wavelength (λ), we have:** [বেগ (v), ফ্রিকোয়েন্সি (f), এবং তরঙ্গদৈর্ঘ্য (λ) এর জন্য, আমাদের আছে:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৬৩]

| অপশন | উত্তর |
|---|---|
| (ক) | v = f / λ |
| (খ) | v = λ / f |
| (গ) | v = f λ |
| (ঘ) | v = f + λ |

**উত্তর (গ) v = f λ:**

**Explanation (ব্যাখ্যা):** এটি মৌলিক তরঙ্গ সমীকরণ যা একটি তরঙ্গের গতি তার কম্পাঙ্ক এবং তরঙ্গদৈর্ঘ্যের সাথে সম্পর্কিত এবং তরঙ্গদৈর্ঘ্যের মাথায় সম্পর্কিত। এটি বলে যে তরঙ্গ **বেগ (v)** তার **কম্পাঙ্ক (f)** এবং তার **তরঙ্গদৈর্ঘ্য (λ)**-এর গুণফলের সমান।

- কম্পাঙ্ক (f) হল প্রতি সেকেন্ডে একটি বিলুপ অতিক্রমকারী তরঙ্গের সংখ্যা (Hz)।
- তরঙ্গদৈর্ঘ্য (λ) হল দুটি successive crest (বা trough) এর মধ্যকার দূরত্ব।
- বেগ (v) হল যে গতিতে তরঙ্গ প্রসারিত হয়।

**81. Random search is ______ algorithm.** [Random search হল ______ অ্যালগরিদম।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৩৩]

| অপশন | উত্তর |
|---|---|
| (ক) | a greedy |
| (খ) | a local optimization |
| (গ) | an optimal |
| (ঘ) | a global optimization |

**উত্তর (ঘ) a global optimization:**

**Explanation (ব্যাখ্যা):** র‍্যান্ডম সার্চ হল একটি অনুমানভিত্তিক (টেকনিক বা সম্পর্থ) যা সমস্থাপক সার্চ থেকে সমাধানানুসন্ধান এলোকেললোকেতরে sample করে। greedy algorithms (ক) এর মতো নয় বা locally optimal choices নেয়, বা local search algorithms (খ) যা একটি সীমিত neighborhood অন্বেষণ করে, র‍্যান্ডম সার্চের search space-এর যেকোনো অংশে jump করার সম্ভাবনা থাকে। এই বৈশিষ্ট্যটি এটিকে local optima-তে আটকে যাওয়া এড়াতে সাহায্য করে এবং এটিকে একটি **global optimization** পদ্ধতি করে তোলে, যদিও এটি absolute best solution খুঁজে পেতে guaranteed নয় এবং inefficient হতে পারে।

---
