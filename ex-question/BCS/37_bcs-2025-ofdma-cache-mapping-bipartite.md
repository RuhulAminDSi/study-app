# 49th BCS written exam 2025, ICT (281) — OFDMA, cache mapping, complete bipartite graph edges

- **Source image:** `37_bcs-2025-ofdma-cache-mapping-bipartite.jpg` (original file name `568951129_1582905442676551_2888321937354108418_n.jpg`)
- **Page:** 37 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** ৪৯ তম বি.সি.এস. লিখিত পরীক্ষা — ২০২৫ | বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (২৮১) | স্টেট-০১ (চাঁদলী) | প্রশ্নপত্র ২ : ১০০ নম্বর | সময়: ০২ ঘণ্টা (পূর্ণমান ২০০)
- **Exam date:** not shown (paper year printed as ২০২৫; no exact date printed on this page)
- **Marks:** full paper ২০০; this question sheet is "প্রশ্নপত্র ২ : ১০০ নম্বর" — per-question marks are not shown on this page
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- This is the first page in this run that carries a real, printed BCS paper header, reproduced verbatim in Bengali in the front matter.
- The printed instruction line reads: "[ মোট নম্বর ১০০ (একশত) টি প্রতিটি শুক্ত উত্তরের জন্য ০১ (এক) নম্বর প্রতিটি ভুল উত্তরের জন্য ০.৫০ নম্বর কাটা যাবে। ]" — i.e. wrong answers carry negative marking, recorded here in the front matter as the paper's only marks-related statement.
- Option markers are printed as (ক), (খ), (গ), (ঘ); reproduced as such and rendered as a table for legibility.
- Q3's symbol K_m,n and the product m × n are printed in italic math notation; written in LaTeX here.
- No handwritten marginalia observed on this page.

## Content

**৪৯ তম বি.সি.এস. লিখিত পরীক্ষা - ২০২৫**
**বিষয়: তথ্য ও যোগাযোগ প্রযুক্তি (২৮১)**
**স্টেট-০১ (চাঁদলী)** | **সময়: ০২ ঘণ্টা (পূর্ণমান ২০০)** | **প্রশ্নপত্র ২ : ১০০ নম্বর**

[ মোট নম্বর ১০০ (একশত) টি প্রতিটি শুক্ত উত্তরের জন্য ০১ (এক) নম্বর প্রতিটি ভুল উত্তরের জন্য ০.৫০ নম্বর কাটা যাবে। ]

**1. _______ is the mostly used multiple access technique in WLAN.** [_______ হল WLAN-তে সর্বাধিক ব্যবহৃত **multiple access technique**]

| | |
|---|---|
| (ক) OFDMA | (খ) TDMA |
| (গ) CDMA | (ঘ) TDMA+CDMA |

**উত্তর (ক) OFDMA: Explanation (ব্যাখ্যা):** আধুনিক ওয়্যারলেস LAN (যেমন Wi-Fi 5 এবং Wi-Fi 6) প্রযুক্তিতে Orthogonal Frequency Division Multiple Access (OFDMA) ব্যবহার করা এটি চ্যানেলকে একাধিক ছোট সাব-চ্যানেলে ভাগ করতে দেয়, ফলে একই সময়ে একাধিক ইউজারকে ডেটা পাঠানো সম্ভব হয়। পুরোনো Wi-Fi স্ট্যান্ডার্ডে Contention-Based পদ্ধতি (CSMA/CA) ব্যবহার করা হতো বটে, কিন্তু বর্তমান WLAN-এ স্পেকট্রাল দক্ষ ব্যবহারের জন্য OFDMA-ই মূল মান্ত্রণ আন্তর্জন টেকনিক।

**2. _______ mapping is not a useful cache mapping technique.** [_______ ম্যাপিং একটি কার্যকর cache mapping technique নয়]

| | |
|---|---|
| (ক) Direct | (খ) Set associative |
| (গ) Fully associative | (ঘ) Random |

**উত্তর (ঘ) Random: Explanation (ব্যাখ্যা):** ক্যাশ ম্যাপিং-এর তিনটি স্ট্যান্ডার্ড ও কার্যকর পদ্ধতি হল:

| | |
|---|---|
| i. | ডাইরেক্ট ম্যাপিং |
| ii. | ফুলি অ্যাসোসিয়েটিভ ম্যাপিং |
| iii. | সেট অ্যাসোসিয়েটিভ ম্যাপিং |

**র‍্যান্ডম ম্যাপিং** একটি স্ট্যান্ডার্ড বা ব্যবহারিক পদ্ধতি না। প্রসেসরটি ক্যাশে ডাটা খুঁজে পাওয়া এবং রাখার জন্য একটি সুনির্দিষ্ট (Deterministic) পদ্ধতির দরকার হয়। র‍্যান্ডম রিপ্লেসমেন্ট অ্যালগরিদম হিসাবে ব্যবহার হয় (যেমন, স্কুল অ্যাসোসিয়েটিভ বা সেট অ্যাসোসিয়েটিভ ক্যাশেতে) যেখানে একটি রুলকে প্রতিস্থাপন করতে হয়, কিন্তু এটি নিজে কোন ম্যাপিং টেকনিক নয়।

**3. The number of edges in a complete bipartite graph, K<sub>m,n</sub> is:** [একটি complete bipartite গ্রাফের প্রান্তের সংখ্যা হল:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং-৫১২]

| | |
|---|---|
| (ক) mn | (খ) m+n |
| (গ) m² + n² | (ঘ) m! n! |

**উত্তর (ক) mn: Explanation (ব্যাখ্যা):** একটি কমপ্লিট বাইপার্টাইট গ্রাফ $K_{m,n}$ -এ ভার্টেক্সের দুটি সেট থাকে। একটি সেটে 'm'টি ভার্টেক্স এবং অপর সেটে 'n'টি ভার্টেক্স থাকে। প্রথম সেটের প্রতিটি ভার্টেক্স দ্বিতীয় সেটের প্রতিটি ভার্টেক্সের সাথে যুক্ত থাকে, কিন্তু একই সেটের ভার্টেক্স সংযোগ থাকে না। সুতরাং, মোট এজেজ সংখ্যা দুই সেটের সাইজের গুণফল: $m \times n$।