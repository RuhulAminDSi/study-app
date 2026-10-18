# BCS Preliminary MCQs with Solutions — Q29–Q31 (regression metrics, delta modulation, transistor as active component)

- **Source image:** `56_regression-metrics-delta-modulation-transistor.jpg` (original file name `570897688_1582905752676520_7654553239359319729_n.jpg`)
- **Page:** 56 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q30 and Q31 carry their own red citations; Q29 has none.
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Q31's explanation is cut off at the foot of the page; the closing bullets for (গ) and (ঘ) appear on the next page.
- The option letter in the closing bullet of the transistor classification ("ইহউদ্দিয় (গ)") is reproduced as printed even though it looks like a typo for (খ).
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**29. ________ is not used as a performance metric for a regression model.** [_______ একটি রিগ্রেশন মডেলের জন্য performance metric হিসেবে ব্যবহৃত হয় না।]

| অপশন | উত্তর |
|---|---|
| (ক) | R² |
| (খ) | RMSE |
| (গ) | Recall |
| (ঘ) | MAE |

**উত্তর (গ) Recall:**

**Explanation (ব্যাখ্যা):** R² (ক), RMSE (খ), এবং MAE (ঘ) সবগুলোই regression models (যা continuous value predict করে) এর performance মূল্যায়নের জন্য standard metrics। এগুলি measures করে predicted values actual values-এর কত কাছাকাছি।

**Recall (গ)** হল classification models (যা categorical label predict করে) এর evaluation-এর জন্য ব্যবহৃত একটি metric। এটি measures করে প্রকৃত positive গুলোর কতটা সঠিকভাবে শনাক্ত করা হয়েছে।

**30. Which of the following offers a higher slope-overload and granular noise?** [নিচের কোনটি higher slope-overload এবং granular noise প্রদান করে?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৭৭]

| অপশন | উত্তর |
|---|---|
| (ক) | DPCM |
| (খ) | DM |
| (গ) | ADM |
| (ঘ) | PCM |

**উত্তর (খ) DM (Delta Modulation):**

**Explanation (ব্যাখ্যা):**

- **DM (Delta Modulation)** হল differential PCM-এর simplest form। এটি একটি 1-bit quantizer ব্যবহার করে।
  - এটি **Slope Overload Distortion**-এর জন্য highly prone যখন input signal খুব দ্রুত পরিবর্তিত হয় step size-এর অনুসরণ করার জন্য।
  - এটি **Granular Noise**-এ ভোক্তে যখন input signal relatively constant থাকে কিন্তু quantizer output signal-এর চারপাশে oscillates করে, যায় ফলে noise সৃষ্টি হয়।
- **DPCM (ক)** 1-বিটের বেশি ব্যবহার করে, উভয় ধরনের noise কমায়।
- **ADM (Adaptive DM) (গ)** slope overload এবং granular noise-এর মোকাবিলা করার জন্য dynamically step size adjust করে।
- **PCM (ঘ)** একটি differential technique নয় এবং একইভাবে এই specific issues-গুলি ভোক্তে না।

**31. ________ acts as an active component in a circuit.** [_________ একটি সার্কিটে সক্রিয় উপাদান হিসেবে কাজ করে।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১০৭৬]

| অপশন | উত্তর |
|---|---|
| (ক) | Register |
| (খ) | Transistor |
| (গ) | Inductor |
| (ঘ) | Capacitor |

**উত্তর (খ) Transistor:**

**Explanation (ব্যাখ্যা):** ইলেকট্রনিক কম্পোনেন্টগুলো classified করা হয়:

- **একটিভ কম্পোনেন্ট:** এগুলো বিদ্যুৎের প্রবাহ নিয়ন্ত্রণ করতে পারে এবং একটি signal amplify করতে পারে (পাওয়ার gain দিতে পারে)। উদাহরণ হল ট্রানজিস্টর, ডায়োড, ইন্টিগ্রেটেড সার্কিট (IC)।
- **প্যাসিভ কম্পোনেন্ট:** এগুলি একটি signal amplify বা কানট্রোল নিয়ন্ত্রণ করতে পারে না তারা শুধুমাত্র একটি signal attenuate (কমানো) করতে পারে। উদাহরণ হল রেজিস্টর, ইনডাক্টর (গ), এবং ক্যাপাসিটর (ঘ)।
- একটি রেজিস্টর (ক) হল ট্রানজিস্টরের দিতে তবু একটি ডিজিটাল কম্পোনেন্ট এবং এটি সাধারণত একটি ট্রানজিস্টরের মতো মৌলিক সক্রিয় উপাদান হিসেবে গোনা হয় না। [cut off — continuation appears on the following page]

---
