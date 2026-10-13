# Chapter O (BCS prili) — UCD in UI design, Schrödinger equation, hash table search time, bitmap index

- **Source image:** `38_user-centered-design-schrodinger-hash-bitmap.jpg` (original file name `568978054_1582906792676416_3998102514590217077_n.jpg`)
- **Page:** 38 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; none of the questions on this page carries a red source citation
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- The page opens with the Explanation belonging to question 72 (user interface design principle) from the previous page; Q72's question text and options are not repeated here.
- Option markers are printed as (ক), (খ), (গ), (ঘ); Q73 and Q75 print them in two columns while Q74 prints all four on a single line. Both layouts are reproduced in table form.
- Q73's blank is printed as a long underscore rule in both the English and Bengali lines; reproduced as printed.
- The answer key line "উত্তর (খ) Low-cardinality columns" for Q75 is the last line on the page; its explanation is [cut off].
- No handwritten marginalia observed on this page.

## Content

**Explanation (ব্যাখ্যা):** ইউজার-সেন্টার্ড ডিজাইন (UCD) হল UI/UX ডিজাইনে অনুসৃত মৌলিক নীতি এবং প্রক্রিয়া এটি একটি পুরোবৃত্তিমূলক ডিজাইন প্রক্রিয়া যেখানে ডিজাইনারের প্রক্রিয়াটি প্রতিষ্ঠানের লক্ষ্য পরিষ্কারী এবং তাদের প্রাপ্ত যোগ্যতার উপর কোড করে। লক্ষ্য হল এমন পণ্য তৈরি করা যা পেশ ব্যবহারকারীদের জন্য ব্যবহারযোগ্যতার জন্য এবং উপযোগী।

- **(ক) হাই কাপলিং** হল একটি সফটওয়্যার ইউজনিরার ধারণা যা মাডিউলের সম্পর্কিত এবং একটি অধসম্পন্নিতে।
- **(গ) সিকোয়েনশিয়াল প্রসেসিং** হল একটি প্রোগ্রামিং পদ্ধতি, UI ডিজাইনের নীতি নয়।
- **(ঘ) খরচ অপটিমাইজেশন** একটি ব্যবসায়িক লক্ষ্য, UI ডিজাইনের মূল নীতি নয়।

**73. _______ equation describes the wave nature of particles.** [_______ সমীকরণ কণার তরঙ্গ প্রকৃতি বর্ণনা করে।]

| | |
|---|---|
| (ক) Schrödinger | (খ) Maxwell's |
| (গ) Newton's wave | (ঘ) Gauss-Jordan |

**উত্তর (ক) Schrödinger: Explanation (ব্যাখ্যা):** শ্রোডিঙ্গার সমীকরণ হল কোয়ান্টাম মেকানিক্সের একটি মৌলিক সমীকরণ যা বলনা করে কিভাবে একটি তরঙ্গ ফাংশনের কোয়ান্টাম অবস্থা সময়ের সাথে পরিবর্তিত হয়। এটি গণিতিকভাবে ইলেকট্রনের মতো কণার ভরঙ্গ-সম্ভাবনা আচরণ বর্ণনা করে। এই সমীকরণের সমাধান হল একটি তরঙ্গ ফাংশন (Ψ) যা স্থানের একটি প্রদত্ত অবস্থানে একটি কণা স্থির পাওয়ার সম্ভাবনা সরাসরি তথ্য প্রদান করে।

- **(খ) ম্যাক্সওয়েলের সমীকরণ** পশ্চিম ভাউড়শিফট বলনা করে।
- **(গ) নিউটনের সূত্র শারীরিক বলবিদ্যা বলনা করে।
- **(ঘ) গাউস-জর্ডান বৈশিষ্ট্যক সমীকরণের সমাধানের একটি পদ্ধতি।

**74. The average search time for a hash table using separate chaining with a load factor α is:** [লোড ফ্যাক্টর α সহ পৃথক চেইনিং ব্যবহার করে একটি হ্যাশ টেবিলের **average search time** হল:]

| (ক) O(1+*α*) | (খ) O(*α*²) | (গ) O(log *α*) | (ঘ) O(*α*) |
|---|---|---|---|

**উত্তর (ক) O(1+*α*): Explanation (ব্যাখ্যা):** একটি হ্যাশ টেবিল যা সেপারেট চেইনিং ব্যবহার করে কলিশন হ্যান্ডলেন করতে, আ্যাভেরেজ প্রতিটি বাকেট (বা স্লট) সেই সংখ্যা একটি লিঙ্কড লিস্টের দিকে নির্দেশ করে যা সেই বাকেটে হ্যাশ হয়েছে।

- **লোড ফ্যাক্টর α** কে n/m হিসাবে সংজ্ঞায়িত করা হয়, যেখানে n হল এন্ট্রি সংখ্যা এবং m হল বাকেটের সংখ্যা।
- একটি সফল বা ব্যর্থ অনুসন্ধানের জন্য একটি লিঙ্কড লিস্টে ক্ষণ ক্ষণ করা প্রয়োজন।
- গড়ে, যে তালিকাটি র্যান করতে হবে তার দৈর্ঘ্য হল α।
- অতএব, একটি অনুসন্ধান তার প্রথম সময়ে জুটে সম্ভাব্য হলে **হ্যাশ পাওয়া** করতে এবং বাকেটে আ্যাভেরেজ করতে **O(1) + তালিকাটি অনুসন্ধান করতে O(*α*),** যা হল **O(1 + *α*)**।

**75. Bitmap indexes are particularly well-suited for:** [বিটম্যাপ সূচকগুলি বিশেষভাবে নিম্নলিখিতগুলির জন্য উপযুক্ত:]

| | |
|---|---|
| (ক) High-cardinality columns | (খ) Low-cardinality columns |
| (গ) large text fields | (ঘ) JSON |

**উত্তর (খ) Low-cardinality columns**

[cut off — Q75's explanation is not printed on this page]