# BCS Preliminary MCQs with Solutions — Euler corollary for planar graphs (continued), Q59–Q60 (deadlock with 4 processes/3 resources, insertion sort comparisons)

- **Source image:** `58_euler-corollary-deadlock-insertion-sort.jpg` (original file name `571113620_1582906392676456_792467123353301124_n.jpg`)
- **Page:** 58 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q59 and Q60 carry their own red citations: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of Q58's explanation (simple connected planar graph, E ≤ 3V − 6) from page 49.
- The option list for Q59 is printed on two very short lines — reproduced in reading order.
- Q60's explanation is cut off at the foot of the page after the first bullet; the remaining bullets appear on page 44.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

**Explanation (ব্যাখ্যা):** এটি planar graphs-এর জন্য Euler-এর সূত্রের একটি corollary। Euler-এর সূত্র states: V - E + F = 2। V ≥ 3 সহ একটি simple, connected, planar graph-এর জন্য, প্রতিটি face-কে 3টি edge দ্বারা bounded হতে হবে, এবং প্রতিটি edge সর্বাধিক 2টি face-কে borders করে। এটি inequality-এর দিকে নিয়ে যায়: 3F ≤ 2E। Euler-এর সূত্র থেকে F-কে (F = 2 - V + E) এই inequality-তে substituting করলে পাওয়া যায়:

    3(2 - V + E) ≤ 2E
    6 - 3V + 3E ≤ 2E
    6 - 3V ≤ -E
    E ≤ 3V - 6

**59. A system has 4 processes and 3 resources. To avoid deadlock, the maximum number of processes that can be simultaneously executed is:** [একটি সিস্টেমে 4টি process এবং 3টি resource থাকে। অনলাইঘ এড়াতে, একসাথে সর্বাধিক কতগুলি process সম্পাদন করা যেতে পারে তা হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৭৮২]

| অপশন | উত্তর |
|---|---|
| (ক) | 3 |
| (খ) | 2 |
| (গ) | 1 |
| (ঘ) | 4 |

**উত্তর (ক) 3:**

**Explanation (ব্যাখ্যা):** এই প্রশ্নটি deadlock-এর known necessary condition "Hold and Wait"-এর সাথে সম্পর্কিত। Deadlock এড়াতে যেতে পারে এই শর্তাবলি থেকে নিশ্চিত করতে হয় যে সিস্টেমটি কখনও একটি deadlock state-এ enters না যেখানে একটি process অন্য process-এর held একটি resource-এর জন্য waiting করে। একটি common strategy হল একটি process-কে run করতে allow করা only যদি এটি তার required resources-গুলি একবারের acquire করতে পারে। যদি 4টি process-কে simultaneously run করতে allow করা হয়, তাহলে তারা প্রত্যেকে একটি resource hold করতে পারে এবং another-এর জন্য wait করতে পারে, leading to a circular wait and deadlock।

বাইটাইকে, concurrent processes-এর সংখ্যা 3-এ limit করি, এবং 3টি resource থাকে, তাই তিনটি প্রতিটি process-এ একটি resource allocate করা possible। worst case-এ, even if all three hold one resource each, resource-এর total number exceeded হয় না, এবং তাদের মধ্যে একটি eventually finish হতে পারে এবং তার resource release করতে পারে, allowing others to proceed। এটি 4টি process-এর মধ্যে circular wait-এর potential-কে breaks করে।

**60. In the worst case, the number of comparisons in the Insertion sort algorithm is:** [সবচেয়ে খারাপ ক্ষেত্রে, Insertion sort অ্যালগরিদমে তুলনার সংখ্যা হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৪৯]

| অপশন | উত্তর |
|---|---|
| (ক) | n(n+1) |
| (খ) | n log n |
| (গ) | n(n-1)/2 |
| (ঘ) | n(n-1)/4 |

**উত্তর (গ) n(n-1)/2:**

**Explanation (ব্যাখ্যা):** Insertion Sort-এর জন্য worst-case scenario ঘটে যখন array-টি reverse order-এ sorted থাকে (descending order যখন ascending-এর প্রয়োজন হয়)। এই case-এ:

- 2nd element-টি insert করতে, 1 comparison প্রয়োজন। [cut off — remaining bullets appear on the following page]

---
