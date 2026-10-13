# BCS Preliminary MCQs with Solutions — PCB explanation (continued), Q89–Q91 (encapsulation, IPv6 address size, Banker's algorithm)

- **Source image:** `51_encapsulation-ipv6-bankers-algorithm.jpg` (original file name `570182124_1582907056009723_3720337041044233900_n.jpg`)
- **Page:** 51 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Each question carries its own red citation: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- The page opens with the tail of an explanation about the Process Control Block; the question text and number are on an earlier page and are not recoverable from this image.
- Q91 is cut off at the foot of the page after its last two bullets; the closing line is not present in the image.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

**উত্তর (ঘ) all of the above:**

**Explanation (ব্যাখ্যা):** একটি প্রসেস কন্ট্রোল ব্লক (PCB) হল অপারেটিং সিস্টেম কান্ডেলে একটি ডাটা স্ট্রাকচার যা একটি প্রসেস সম্পর্কিত সমস্ত তথ্য সংরক্ষণ করে। এটি ট্র্যাক করতে লক থেকে সমস্যা ও স্থিতিও থাকে। PCB-তে সাধারণত অন্তর্ভুক্ত থাকে:

- **প্রসেস ID (ক):** প্রসেসের জন্য একটি অনন্য identifier।
- **প্রসেস State (খ):** প্রসেসের বর্তমান state (যেমন, running, ready, waiting)।
- **প্রোগ্রাম কাউন্টার (গ):** এই প্রসেসের জন্য executed হতে হবে এমন পরবর্তী নির্দেশের address। এগুলোর সাথে, একে অন্যান্য তথ্য যেমন CPU রেজিস্টার, মেমোরি ম্যানেজমেন্ট তথ্য, I/O status তথ্য, অ্যাকাউন্টিং তথ্য ইত্যাদি। তাই এবং, প্রতিটি সমস্ত options PCB-এর অংশ।

**89. Which one corresponds to binding data and code together?** [কোনটি তথ্য এবং কোড একসাথে binding এর সাথে সম্পর্কিত?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ২৯৫]

| অপশন | উত্তর |
|---|---|
| (ক) | Polymorphism |
| (খ) | Abstraction |
| (গ) | Encapsulation |
| (ঘ) | Inheritance |

**উত্তর (গ) Encapsulation:**

**Explanation (ব্যাখ্যা):** **Encapsulation** হল Object-Oriented Programming (OOP) ধারণা যা refers to the binding of data (variables) and the methods (functions) that operate on that data into a single unit, called a class। এটিতে also involves restricting direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the data। এটি প্রায়শই private এবং public access specifiers ব্যবহার করে achieved হয়।

**90. The size of the IPV6 address is:** [IPV6 address এর আকার হল:] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৬৫৩]

| অপশন | উত্তর |
|---|---|
| (ক) | 128 bits |
| (খ) | 64 bits |
| (গ) | 32 bits |
| (ঘ) | None of the above |

**উত্তর (ক) 128 bits:**

**Explanation (ব্যাখ্যা):** একটি IPv6 address 128 bits নয়। এটি একটি মৌলিক specification যা IPv4-এর চেয়ে much larger address space প্রদানের জন্য designed, যা মাত্র 32 bits নয়। 128-bit address 2¹²⁸টি possible addresses-এর allows for, যা একটি extremely large number, IPv4 address exhaustion problem কাটিয়ে উঠতে intended।

**91. ________ algorithm is the most prominent method to avoid deadlock.** [_________ অ্যালগরিদম হল অনলাইভ এড়ানোর এড়াতে সবচেয়ে গুরুত্বপূর্ণ পদ্ধতি।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৭৮২]

| অপশন | উত্তর |
|---|---|
| (ক) | Banker's |
| (খ) | Elevator |
| (গ) | Karin's |
| (ঘ) | None of the above |

**উত্তর (ক) Banker's:**

**Explanation (ব্যাখ্যা):** **Banker's Algorithm** হল **deadlock avoidance**-এর জন্য সবচেয়ে সুপ্রতিষ্ঠিত algorithm। এটি একটি resource allocation এবং deadlock avoidance algorithm যা all resources-এর predetermined maximum possible amounts-এর allocation simulate করে safety-এর জন্য test করে, এবং তারপর potential deadlocks detect করতে একটি "safe-state" check করে। এটি resource requests সাধারণে granting করে নিশ্চিত করে যে সিস্টেমটি deadlock state-এ never enter হবে।

- **Elevator Algorithm (খ)** (বা SCAN) disk scheduling-এর জন্য used, deadlock-এর জন্য নয়।
- **Karin's Algorithm (গ)** deadlock-এর জন্য জন্য একটি standard algorithm নয়। [cut off]

---
