# BCS Preliminary MCQs with Solutions — Q46–Q49 (class-A amplifier efficiency, VHF band, Intel 8086 address multiplexing, anticoincidence gate)

- **Source image:** `50_class-a-vhf-8086-anticoincidence.jpg` (original file name `569589000_1582906152676480_1180235759414369666_n.jpg`)
- **Page:** 50 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Q49 is cut off after its answer line — its explanation appears later in the booklet.
- Pin names AD0–AD15, D0–D15 and A16–A19 are reproduced exactly as printed.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**46. What is the value of maximum efficiency of a transformer coupled class-A power amplifier?** [একটি ট্রান্সফরমার সংযুক্ত class-A পাওয়ার অ্যাম্প্লিফায়ারের সর্বোচ্চ দক্ষতার মান কত?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১১০৮]

| অপশন | উত্তর |
|---|---|
| (ক) | 25% |
| (খ) | 30% |
| (গ) | 50% |
| (ঘ) | 78% |

**উত্তর (গ) 50%:**

**Explanation (ব্যাখ্যা):** একটি সর্বোচ্চ Class-A পাওয়ার অ্যাম্প্লিফায়ারের সর্বোচ্চ তাত্ত্বিক দক্ষতা 25%। তবে, যখন কাশনলিফয়ারের জন্য একটি ট্রান্সফরমার ব্যবহার করা হয়, এটি ইম্পিডেন্স ম্যাচিংয়ের অনুমতি দেয় এবং দক্ষতা বাড়ায় পর্যন্ত 50%। একটি ট্রান্সফরমার-কপ্লেড Class-A অ্যাম্প্লিফায়ার-এর জন্য সর্বোচ্চ তাত্ত্বিক দক্ষতা হয় **50%**। এই কারণে ট্রান্সফরমার একটি higher voltage swing এবং লোডে পাওয়ার ট্রান্সফর অর্জনে সাহায্য করে।

**47. Frequency range of the VHF band is:** [ভিএইচএফ ব্যান্ডের ফ্রিকোয়েন্সি রেঞ্জ হল:]

| অপশন | উত্তর |
|---|---|
| (ক) | 3-30 MHz |
| (খ) | 30-300 MHz |
| (গ) | 300 MHz-3 GHz |
| (ঘ) | 3 GHz - 30 GHz |

**উত্তর (খ) 30-300 MHz:**

**Explanation (ব্যাখ্যা):** রেডিও ফ্রিকোয়েন্সি ব্যান্ডের জন্য স্ট্যান্ডার্ড ITU design হল:

- **HF (High Frequency):** 3-30 MHz
- **VHF (Very High Frequency):** 30-300 MHz
- **UHF (Ultra High Frequency):** 300 MHz - 3 GHz
- **SHF (Super High Frequency):** 3 GHz - 30 GHz

**48. How many address lines are multiplexed with the data lines in Intel 8086?** [ইন্টেল 8086-এ ডেটা লাইনের সাথে কতটি address line মাল্টিপ্লেক্স করা হয়েছে?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১৯২]

| অপশন | উত্তর |
|---|---|
| (ক) | 8 |
| (খ) | 32 |
| (গ) | 64 |
| (ঘ) | 16 |

**উত্তর (ক) 8:**

**Explanation (ব্যাখ্যা):** ইন্টেল 8086 মাইক্রোপ্রসেসরের একটি 20-বিট অ্যাড্রেস বাস এবং একটি 16-বিট ডেটা বাস রয়েছে। এই signals-গুলি একটি স্ট্যান্ডার্ড 40-পিন প্যাকেজে ফিট করতে, lower 16টি অ্যাড্রেস লাইন (AD0 থেকে AD15) 16টি ডেটা লাইন (D0 থেকে D15) এর সাথে **মাল্টিপ্লেক্স**। এর মানে হল একই physical pins একটি সময়ে address information এবং অন্য সময়ে data information বহন করে। Additionally, upper 4টি অ্যাড্রেস লাইন (A16 থেকে A19) status signals-এর সাথে মাল্টিপ্লেক্স। তাই, মোট **16টি** অ্যাড্রেস লাইন মাল্টিপ্লেক্স, কিন্তু প্রশ্নটি ডেটা লাইন-এর সাথে মাল্টিপ্লেক্স সংখ্যা চিহ্নিত করে, যা **16**।

তবে, options ভালোলে, 16 তালিকাভুক্ত নেই। সবচেয়ে কাছের option হল 8, কিন্তু এটি 8086-এর জন্য ভুল। 8088, একটি related processor, শুধুমাত্র 8টি ডেটা লাইন মাল্টিপ্লেক্স করে। options দেওয়া আছে, একটি 8086-ভিত্তিক প্রশ্নের intended উত্তর সম্ভবত **16**, কিন্তু বেছে নিতে একটি option নয়, প্রশ্ন বা options-এ একটি ত্রুটি থাকতে পারে। সঠিক প্রশ্নটি হলে সঠিক উত্তর হতো 16।

**49. _________ gate is known as "Anticoincidence".** [________ গেট "অ্যান্টিকোইনসিডেন্স" নামে পরিচিত।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৩৬৯]

| অপশন | উত্তর |
|---|---|
| (ক) | NOR |
| (খ) | XNOR |
| (গ) | XOR |
| (ঘ) | OR |

**উত্তর (গ) XOR** [explanation not on this page]

---
