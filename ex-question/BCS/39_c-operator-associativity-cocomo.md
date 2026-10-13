# Chapter O (BCS prili) — C operator associativity and COCOMO organic mode development time

- **Source image:** `39_c-operator-associativity-cocomo.jpg` (original file name `569035526_1582907222676373_8771313725975134715_n.jpg`)
- **Page:** 39 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q95 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২২৭]", Q96 "নং- ৯৬৬"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) on a single line for both questions; reproduced as such.
- In Q95's explanation the book first states that the conditional operator (?:) also has right-to-left associativity, but then argues for (ঘ) Assignment. This internal contradiction is reproduced exactly as printed; the conditional-operator points are set off as an italicised aside ("দ্রষ্টব্য:") in the original and are kept here.
- No handwritten marginalia observed on this page.

## Content

**95. Which C operator below has a right to left associativity?** [নিচের কোন C অপারেটরের right to left associativity আছে?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২২৭]

| (ক) , (Comma) | (খ) + (Addition) | (গ) ? : (Conditional) | (ঘ) = (Assignment) |
|---|---|---|---|

**উত্তর (ঘ) = (Assignment) Explanation (ব্যাখ্যা):** Associativity নির্ধারণ করে একই precedence level-এর operators কোন ক্রমে evaluated হয়।

- **Assignment operator (=)**-এর **right-to-left** associativity আছে। এই কারণেই a = b = c;-এর মধ্যে একটি statement-এ, c b-তে assigned হয়, এবং then that assignment-এর result (c-এর value) a-তে assigned হয়।
- **Comma operator (ক)**-এর left-to-right associativity আছে।
- **Addition operator (খ)**-এর left-to-right associativity আছে।
- **Conditional operator (?:)** **(গ)**-এর right-to-left associativity আছে।

*দ্রষ্টব্য: Conditional operator (?:)-এরও right-to-left associativity আছে। যদিওকে, যেহেতু প্রশ্নটি একটি চয়ন এবং assignment operator একটি খুব সাধারণ উত্তরণ, (খ) একটি সঠিক উত্তর/ (গ) এবং (ঘ) উভয়েরই right-to-left associativity আছে, কিন্তু সাধারণত assignment operator-ই এই ধরনের প্রশ্নে highlight করা হয়।*

**96. There are 32 kilo lines of code of an organic software. The normal development time (in months) using COCOMO model is:** [একটি organic সফটওয়্যারের ৩২ কিলো লাইন কোড আছে। COCOMO মডেল ব্যবহার করে স্বাভাবিক ডেভেলপমেন্ট সময় (মাসে) হল:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৯৬৬]

| (ক) 6 | (খ) 7 | (গ) 14 | (ঘ) 21 |
|---|---|---|---|

**উত্তর (গ) 14: Explanation (ব্যাখ্যা):** বেসিক COCOMO মডেলে লাইনস অফ কোড (KLOC - Thousands of Lines of Code) এর উপর ভিত্তি করে সফটওয়্যার প্রকল্পের effort এবং development time অনুমান করে।
Development time (Tdev) এর সূত্র হল:
**Tdev = a × (Effort)^b**

**অপারেটিভ মোড প্রকল্পের (সরল, ভালোভাবে বোঝা applications) জন্য:**

- Effort, E = 3.2 × (KLOC)^1.05 person-months
- Development Time, Tdev = 2.5 × (E)^0.38 months

**প্রদত্ত KLOC = 32:**

1. প্রথমে, Effort গণনা করুন: E = 3.2 × (32)^1.05 ≈ 3.2 × 38.05 ≈ 121.76 person-months
2. তারপর, Development Time গণনা করুন: Tdev = 2.5 × (121.76)^0.38 ≈ 2.5 × 5.63 ≈ **14.075 months**

অতএব, development time প্রায় **14 months**।