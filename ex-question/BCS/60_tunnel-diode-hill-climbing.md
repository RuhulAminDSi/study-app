# BCS Preliminary MCQs with Solutions — machine epsilon (continued), Q64–Q65 (tunnel diode working principle, hill climbing drawback)

- **Source image:** `60_tunnel-diode-hill-climbing.jpg` (original file name `571132991_1582906556009773_4483199749375768763_n.jpg`)
- **Page:** 60 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q64 carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of Q63's explanation ('machine epsilon' in floating point representation); the question text is on page 44.
- Q65's explanation is cut off at the foot of the page — the remaining two bullets appear on the next page.
- Q65 has no printed source citation.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**উত্তর (গ) the difference between one and the next larger representable number**

**Explanation (ব্যাখ্যা):** মেশিন এপসিলন হল floating-point arithmetic-এ একটি fundamental value। এটি 1.0 এবং পরবর্তী larger floating-point number-এর মধ্যে পার্থক্য হিসাবে defined হয় যা represent করা যেতে পারে। এটি floating-point arithmetic-এ rounding-এর কারণে relative error-এর upper bound দেয়। এটি একটি floating-point সিস্টেমের precision (পরিসর নয়) এর একটি crucial measure।

- (ক) The largest representable number overflow-এর সাথে related।
- (খ) The smallest representable number underflow-এর সাথে related।
- (ঘ) Rounding error একটি general concept, কিন্তু machine epsilon specifically এটি number 1-এর জন্য quantifies করে।

**64. Working principle of a Tunnel Diode:** [টানেল ডায়োডের কার্যনীতি:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১০৭৮]

| অপশন | উত্তর |
|---|---|
| (ক) | Quantum mechanical tunneling |
| (খ) | Zener breakdown |
| (গ) | Avalanche breakdown |
| (ঘ) | Ionization tunneling |

**উত্তর (ক) Quantum mechanical tunneling**

**Explanation (ব্যাখ্যা):** একটি টানেল ডায়োড **কোয়ান্টাম মেকানিক্যাল টানেলিং** effect-এর উপর ভিত্তি করে কাজ করে। এটি একটি heavily doped p-n junction যেখানে heavy doping-এর কারণে, depletion region খুবই narrow হয়ে যায়। এই narrow barrier ইনডাকট্যুনালিক barrier-এর মধ্য দিয়ে "টানেল" করতে দেয় যেহেতু এমনকি যদি তাদের classically উচিতকে overcome করার enough energy না থাকে। এই tunneling phenomenon purely quantum mechanical এবং টানেল ডায়োডটিকে তার current-voltage (I-V) characteristic curve-এ unique negative resistance region দেয়।

**জেনার ব্রেকডাউন (খ)** এবং **অ্যাভালাঞ্চ ব্রেকডাউন (গ)** হল অন্যান্য effects যা ডায়োডে occurs কিন্তু একটি টানেল ডায়োডের primary operating principle নয়।

**65. The main drawback of hill climbing search is:** [hill climbing search এর প্রধান অসুবিধা হল:]

| অপশন | উত্তর |
|---|---|
| (ক) | high memory requirement |
| (খ) | Can get stuck in local optima |
| (গ) | expands all nodes |
| (ঘ) | Requires heuristic functions |

**উত্তর (খ) Can get stuck in local optima**

**Explanation (ব্যাখ্যা):** হিল ক্লাইম্বিং একটি local search algorithm। এটি continuously increasing value (uphill)-এর দিকে moves হয় যতক্ষণ না এটি একটি peak-এ পৌঁছায়। কেউ থেকে প্রশ্ন করলে কোনও প্রতিবেশী state-এর higher value নেই। প্রধান drawback হল যে এটি একটি **local optimum**-এ terminate হতে পারে (একটি peak যা state space-এর highest peak-এর চেয়ে lower, global optimum)। এটি immediate neighbors-এর beyond explore করতে fails করে এবং plateaus বা ridges-এ stuck হতে পারে।

- (ক) High memory requirement false; হিল ক্লাইম্বিং-এর low memory requirements আছে কারণ এটি শুধুমাত্র current state-টি track রাখে। [cut off — bullets for (গ) and (ঘ) appear on the following page]

---
