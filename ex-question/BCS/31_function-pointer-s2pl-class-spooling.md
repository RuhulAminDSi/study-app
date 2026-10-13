# Chapter O (BCS prili) — C function pointer declaration, S2PL, C++ class, spooling

- **Source image:** `31_function-pointer-s2pl-class-spooling.jpg` (original file name `567098099_1582905572676538_2390863879414530605_n.jpg`)
- **Page:** 31 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q17 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২৩০]", Q18 "নং-৮৪১", Q19 "নং-৬৮৩", Q20 "নং-৭৫৭"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) in two columns; reproduced as such and rendered as a table for legibility.
- The blank fill in Q18 is printed as a long underscore rule "_______" (about 7 underscores) in the English line and as "________" in the Bengali line; reproduced as printed.
- The answer/explanation to Q20 is cut off by the page break after "CPU-এর" — the remaining text is [cut off].
- Red bracketed source citations are part of the printed compilation, reproduced verbatim. No handwritten marginalia observed on this page.

## Content

**17. Which one below declares a function pointer (f) pointing to a function taking an int and a float and returning a double?** [নিচের কোনটি একটি ফাংশন পয়েন্টার (f) ঘোষণা করে যা একটি int এবং একটি float গ্রহণ করে এবং একটি ডাবল ফেরত দেয়?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২৩০]

| | |
|---|---|
| (ক) double \*f (int, float) | (খ) double (\*f) (int, float) |
| (গ) (\*double) f (int, float) | (ঘ) double f \*(int, float) |

**উত্তর (খ) double (\*f) (int, float): Explanation (ব্যাখ্যা):** C/C++-এ একটি ফাংশন পয়েন্টার ডিক্লেয়ার করার সঠিক সিনট্যাক্স হল:

```
return_type (*pointer_name) (parameter_list);
```

- double হল রিটার্ন টাইপ।
- (\*f) নির্দেশ করে যে f একটি ফাংশনের পয়েন্টার।
- (int, float) হল প্যারামিটারের লিস্ট।

অপশন (ক) এবং (ঘ) একটি ফাংশন ডিক্লেয়ার করে যার নাম f, পয়েন্টারের নয়। অপশন (গ) একটি ভুল কাস্ট সিনট্যাক্স ব্যবহার করে।

**18. Strict two-phase locking (S2PL) holds _______ till commit.** [ Strict two-phase locking (S2PL) কমিট না হওয়া পর্যন্ত _______ ধরে রাখে।] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং-৮৪১]

| | |
|---|---|
| (ক) All locks | (খ) Only read locks |
| (গ) Only write locks | (ঘ) No locks |

**উত্তর (ক) All locks: Explanation (ব্যাখ্যা):** কনকারেন্সিং কন্ট্রোলে, স্ট্রিক্ট টু-ফেজ লকিং (S2PL) হল টু-ফেজ লকিং প্রোটোকলের একটি variant। এর মূল নিয়ম হল, একটি transaction-কে অবশ্যেই ট্রা তে সমস্ত লক অফল করতে হবে (release করতে হবে না) transaction টি commit বা abort না করা পর্যন্ত ধরে রাখতে হবে। এটি strict serializability নিশ্চিত করে এবং অন্য transaction-কে uncommitted ডেটা পড়া (dirty reads) বা একটি transaction-এর দ্বারা এমন একটি value পড়া রোধ করে যা একটি uncommitted transaction দ্বারা পরিবর্তন করা হয়েছে তা প্রতিরোধ করে।

**19. The class in C++ contains:** [C++ এর ক্লাস রয়েছে] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং-৬৮৩]

| | |
|---|---|
| (ক) data only | (খ) function only |
| (গ) data and function both | (ঘ) None of the above |

**উত্তর (গ) data and function both: Explanation (ব্যাখ্যা):** C++-এ class হল Object-Oriented Programming-এর ভিত্তি। এটি একটি ইউজার-ডিফাইন্ড ডাটা টাইপ যা object তৈরি করার জন্য একটি ক্লাসিফাইড মতো কাজ করে। একটি class ডাটা (যেকে member variables বা attributes বলে) এবং ফাংশন (যেকে member functions বা methods বলে) যারা সেই ডাটার উপর কাজ করে, তাদের একটি single unit-এ bundle করে। এই bundle কে বোঝায় কে **encapsulation** বলে।

**20. Spooling is generally used for:** [স্পুলিং সাধারণত নিম্নলিখিত ক্ষেত্রে ব্যবহৃত হয়:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং-৭৫৭]

| | |
|---|---|
| (ক) CPU scheduling | (খ) deadlock detection |
| (গ) printer management | (ঘ) memory allocation |

**উত্তর (গ) printer management: Explanation (ব্যাখ্যা):** SPOOL হল "Simultaneous Peripheral Operations Online"-এর সংক্ষিপ্ত রূপ। এটি peripheral devices, যেমন একটি প্রিন্টার, যেগুলো সাধারণত CPU-এর [cut off]