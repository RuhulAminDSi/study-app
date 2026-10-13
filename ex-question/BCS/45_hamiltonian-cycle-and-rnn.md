# BCS Preliminary MCQs with Solutions — MOSFET gate voltage (continued), Q44–Q45 (Hamiltonian cycle, RNN)

- **Source image:** `45_hamiltonian-cycle-and-rnn.jpg` (original file name `569105119_1582905992676496_3699452731552812923_n.jpg`)
- **Page:** 45 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of Q43's explanation (Enhancement-type N-channel MOSFET) from page 43.
- Q84 uses a slightly non-standard set of subscripts in the original (`X_L`, `X_C` written as "XL", "XC"); values preserved exactly as printed.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**Explanation (ব্যাখ্যা):** এনহান্সমেন্ট-টাইপ N-চ্যানেল MOSFET সাধারণত OFF থাকে যখন gate-to-source voltage (VGS) 0 হয়। source এবং drain-এর মধ্যে একটি conductive channel তৈরি করতে, একটি **positive gate voltage** (threshold voltage, Vth-এর চেয়ে বেশি) প্রয়োগ করতে হয়। digital circuits-এ, এই positive voltage সাধারণত supply voltage, **+VDD** হয়, transistor-টিকে strongly ON করার জন্য।

- **-VDD (খ)** transistor-টিকে OFF রাখবে বা কোনো existing channel-কেও deplete করবে।
- **0 (গ)** transistor-টিকে তার default OFF state-এ রাখবে।

**44. A Hamiltonian Cycle must visit:** [হ্যামিল্টোনিয়ান সাইকেল অবশ্যই পরিদর্শন করতে হবে:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫২৫]

| অপশন | উত্তর |
|---|---|
| (ক) | all edges once |
| (খ) | some vertices |
| (গ) | only leaves |
| (ঘ) | All vertices once |

**উত্তর (ঘ) All vertices once:**

**Explanation (ব্যাখ্যা):** একটি গ্রাফে হ্যামিল্টোনিয়ান সাইকেল (বা Hamiltonian Circuit) হল একটি cycle যা প্রতিটি **vertex**-কে exactly একবার visits করে এবং starting vertex-এ ফিরে আসে। মূল points হল:

- এটিকে সমস্ত **vertex** visit করতে হবে।
- এটিকে প্রতিটি vertex-কে **exactly একবার** visit করতে হবে (start/end vertex বাদ দিয়ে, যেটি beginning এবং end-এ দুইবার visit করা হয়)।
- এটি একটি **cycle**, তাই এটি একই vertex-এ start এবং end হতে হবে।

এটি একটি Eulerian Circuit থেকে আলাদা, যা সমস্ত **edge** exactly একবার ব্যবহার করে।

**45. _________ algorithm is best for time-series data.** [টাইম-সিরিজ ডেটার জন্য _____ অ্যালগরিদম সবচেয়ে ভালো।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১০১১]

| অপশন | উত্তর |
|---|---|
| (ক) | CNN |
| (খ) | RNN |
| (গ) | DNN |
| (ঘ) | ANN |

**উত্তর (খ) RNN (Recurrent Neural Network)**

**Explanation (ব্যাখ্যা):** RNN (Recurrent Neural Network) বিশেষভাবে sequential data, যেমন time-series data-এর সাথে কাজ করার জন্য designed। এর internal memory (hidden state) এটিকে time steps জুড়ে information persist করতে দেয়, যা এমন tasks-এর জন্য effective করে তোলে যেখানে previous data points-এর order এবং context পরবর্তীটি predict করার জন্য important।

- **CNN (Convolutional Neural Network) (ক)** spatial data যেমন images-এর জন্য excellent কিন্তু inherently sequences-এর জন্য designed নয়।
- **DNN (Deep Neural Network) (গ)** এবং **ANN (Artificial Neural Network) (ঘ)** feedforward networks-এর জন্য general terms। যদিও এগুলি time-series-এর জন্য ব্যবহার করা যেতে পারে, তারা প্রতিটি input-কে independent হিসেবে treats এবং RNN-এর built-in memory-এর অতুত আছে, যা এগুলিকে এই specific data type-এর জন্য less effective করে তোলে।

---
