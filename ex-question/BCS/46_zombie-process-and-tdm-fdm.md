# BCS Preliminary MCQs with Solutions — "All of the above" worked examples (unsigned / hexadecimal / two's complement), Q27–Q28 (Unix zombie process, TDM vs FDM)

- **Source image:** `46_zombie-process-and-tdm-fdm.jpg` (original file name `569117388_1582905689343193_8568447232635693798_n.jpg`)
- **Page:** 46 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q28 carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of an explanation whose question text and number are on an earlier page; the answer given is "All of the above", so the question itself is not recoverable from this image.
- Q27 has no printed source citation.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.
- Subscript base indicators are reproduced as printed (e.g. `10110011₂`, `B₁₆`, `77₁₀`, `-77₁₀`).

## Content

**উত্তর (ঘ) All of the above:**

**Explanation (ব্যাখ্যা):** একই বাইনারি স্ট্রিং ভিন্ন ভিন্ন ব্যাখ্যার উপর ভিত্তি করে ভিন্ন মান প্রকাশ করতে পারে।

- **একটি unsigned integer হিসাবে:** `10110011₂ = 1×128 + 0×64 + 1×32 + 1×16 + 0×8 + 0×4 + 1×2 + 1×1 = 179₁₀`। সুতরাং, (ক) সঠিক।
- **একটি hexadecimal সংখ্যা হিসাবে:** বিভিন্নলোকে গ্রুপ করি: `1011 0011| 1011₂ = B₁₆, 0011₂ = 3₁₆`। সুতরাং, এটি হয় **B3₁₆**। সুতরাং, (খ) সঠিক।
- **একটি signed integer (Two's Complement) হিসাবে:** বামদিকের বিটটি 1, তাই এটি negative। মান বের করতে, বিভিন্নলো উল্টে দিয়ে 1 যোগ করুন: `10110011 → 01001100 + 1 = 01001101₂ = 77₁₀`। সুতরাং, আসল সংখ্যাটি হল **-77₁₀**। সুতরাং, (গ) সঠিক।

সুতরাং, সবগুলোই ব্যাখ্যাটি সত্য।

**27. A zombie process in Unix is:** [ইউনিক্স zombie process হল:]

| অপশন | উত্তর |
|---|---|
| (ক) | a process whose parent has not acknowledged its exit status |
| (খ) | a process waiting for I/O |
| (গ) | a process stuck in deadlock |
| (ঘ) | a process in an infinite loop |

**উত্তর (ক) a process whose parent has not acknowledged its exit status**

**Explanation (ব্যাখ্যা):** একটি জোম্বি প্রসেস হল একটি প্রসেস যা তার execution শেষ করেছে (terminated) কিন্তু এখনও process table-এ একটি entry আছে এটি যখন যখন একটি child process terminate হয়, কিন্তু তার parent process এখনও তার exit status পড়েনি (wait() system call ব্যবহার করে)। প্রসেসটি "মৃত" কিন্তু এখনও সরাচনা হয়নি, তার parent-এর তার status collect করার জন্য অপেক্ষা করছে। এটি I/O-র জন্য অপেক্ষা করছে না (খ), deadlock-এ আটকে নেই (গ), বা infinite loop-এ নেই (ঘ)।

**28. The main disadvantage of TDM over FDM is:** [FDM এর তুলনায় TDM এর প্রধান অসুবিধা হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৫৬৬]

| অপশন | উত্তর |
|---|---|
| (ক) | Higher BW requirement |
| (খ) | Noise immunity |
| (গ) | Complex Synchronization |
| (ঘ) | Limited frequency usage |

**উত্তর (গ) Complex Synchronization:**

**Explanation (ব্যাখ্যা):** TDM (Time Division Multiplexing)-এর transmitter এবং receiver-এর মধ্যে precise **synchronization** প্রয়োজন। receiver-কে আবশ্য জানতে হবে প্রতিটি time slot কখন শুরু হয় সঠিক সমিকভাবে। এটাই accurate timing এবং synchronization-এর প্রয়োজন। এই synchronization-এর প্রয়োজন FDM-এর তুলনায় নিবেদ্ধ মূলত অনেক বেশি জটিল করে তোলে।

FDM (Frequency Division Multiplexing) frequency দ্বারা চ্যানেল আলাদা করে, এবং এটির bandpass filter প্রয়োজন হলেও, synchronization-এর প্রয়োজনীয়তা TDM-এর মতো উপরে নয়।

**অন্যান্য অপশন ভুল:** TDM আরো bandwidth-efficient হতে পারে (উচ্চ BW প্রয়োজনীয়তা (ক) নয়), এটি inherently ডাল বা খারাপ noise immunity নেই (খ), এবং limited frequency usage (ঘ) FDM-এর তুলনায় এর প্রধান অসুবিধা নয়।

---
