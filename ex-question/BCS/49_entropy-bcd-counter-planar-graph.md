# BCS Preliminary MCQs with Solutions — CPU components / Cache (continued), Q56–Q58 (entropy, BCD ripple counter, planar graph)

- **Source image:** `49_entropy-bcd-counter-planar-graph.jpg` (original file name `569559652_1582906359343126_6337368936831299836_n.jpg`)
- **Page:** 49 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q57 and Q58 carry their own red citations; Q56 has none.
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of an explanation about CPU components and the "Cache" answer; the question text and number are on an earlier page and are not recoverable from this image.
- Q58 is cut off after its answer line — its explanation appears later in the booklet.
- Subscripts are reproduced as printed (`H(xᵢ)`, `P(xᵢ)`, `2⁴`).
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

**উত্তর (গ) Cache:**

**Explanation (ব্যাখ্যা):** সেস্ট্রাল প্রসেসর ইউনিট (CPU) primarily তিনটি core components নিয়ে গঠিত যা instruction execute করতে একসাথে works করে:

1. **Control Unit (CU) (ক):** processor-এর operation Directs করে।
2. **Arithmetic Logic Unit (ALU) (খ):** arithmetic এবং logical operations Performs করে।
3. **Registers (ঘ):** Small, fast storage locations যা currently used হওয়া data, addresses, এবং instructions hold করে।

**Cache memory** হল একটি very fast ধরনের memory যা CPU এবং main RAM-এর মধ্যে একটি buffer হিসেবে acts করে। যদিও এটি performance-এর জন্য crucial এবং CPU-এর very close-এ located থাকে (প্রায়শই একই chip-এ), এটি technically **memory hierarchy**-এর একটি part হিসেবে considered হয়, CPU-এর processing circuitry-এর একটি core component নয়।

**56. Which one of the following is true for Entropy?** [এনট্রপির ক্ষেত্রে নিচের কোনটি সত্য?]

| অপশন | উত্তর |
|---|---|
| (ক) | Σᵢ Pᵢ log₂ Pᵢ |
| (খ) | -Σᵢ log₂ Pᵢ |
| (গ) | -Σᵢ Pᵢ log₂ Pᵢ |
| (ঘ) | Σᵢ Pᵢ log₂ (Pᵢ / (1 + Pᵢ)) |

**উত্তর (গ) -Σᵢ Pᵢ log₂ Pᵢ:**

**Explanation (ব্যাখ্যা):** তথ্য তত্ত্বে, এনট্রপি (H) হল একটি সিস্টেমের অনিশ্চয়তা বা randomness-এর measure। একটি discrete random variable X-এর এনট্রপির জন্য standard formula, যার probability mass function P(X), তা হল:

    H(X) = - Σ P(xᵢ) log₂ P(xᵢ)

negative sign টি নিশ্চিত করে যে ফলাফলটি non-negative, যেহেতু probabilities 0 এবং 1 এর মধ্যে থাকে, তাদের logarithms-কে negative বা zero করে তোলে।

**57. The number of states in a 4-bit BCD ripple counter is:** [একটি 4-বিট BCD রিপল কাউন্টারের number of states হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৪১২]

| অপশন | উত্তর |
|---|---|
| (ক) | 4 |
| (খ) | 10 |
| (গ) | 16 |
| (ঘ) | 5 |

**উত্তর (খ) 10:**

**Explanation (ব্যাখ্যা):** একটি **BCD (Binary Coded Decimal)** কাউন্টার 0 থেকে 9 পর্যন্ত binary-তে গণনা করার জন্য designed এবং তারপর 0 তে reset হয়। যদিও এটি 4টি ফ্লিপ-ফ্লপ দিয়ে built (যা 2⁴ = 16টি state represent করতে পারে), এটি শুধুমাত্র প্রথম 10টি state (0000 থেকে 1001) ব্যবহার করে। 1010 থেকে 1111 পর্যন্ত state-গুলি invalid এবং counting sequence-এ ব্যবহার করা হয় না। তাই একটি BCD কাউন্টার সত্য state-এর সংখ্যা হল 10।

**58. A simple connected planar graph with V ≥ 3 vertices, E edges and F faces satisfies:** [V ≥ 3 শর্তিবদ্ধ, E প্রান্ত এবং F faces সহ একটি simple connected planar graph satisfy করে:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫১৩]

| অপশন | উত্তর |
|---|---|
| (ক) | E ≤ 3V - 6 |
| (খ) | E ≥ 3V |
| (গ) | V + E = F |
| (ঘ) | F ≤ V – 2 |

**উত্তর (ক) E ≤ 3V - 6** [explanation not on this page]

---
