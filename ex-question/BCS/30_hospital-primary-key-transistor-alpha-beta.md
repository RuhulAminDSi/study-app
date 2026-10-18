# Chapter O (BCS prili) — hospital record primary key and transistor α, β relation

- **Source image:** `30_hospital-primary-key-transistor-alpha-beta.jpg` (original file name `567056647_1582906169343145_6591073902308258254_n.jpg`)
- **Page:** 30 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q50 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৮২২]" and Q51 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১০৯১]"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; it is transcribed here as "O" as it appears in the image.
- The page opens with the tail of an earlier question's Explanation (XOR / Exclusive-OR / "Anticoincidence"), whose question text and options are not on this image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) in two columns; reproduced as such and rendered as a table for legibility.
- Red bracketed source citations are part of the printed compilation, reproduced verbatim. No handwritten marginalia observed on this page.
- Question 51's explanation is complete; nothing appears cut off on this page.

## Content

**Explanation (ব্যাখ্যা): XOR (Exclusive-OR)** গেটটিকে "Anticoincidence" গেট হিসাবে known। এটি কারণ এর output HIGH (1) হয় only যখন এর inputs *different* হয় (অর্থাৎ, তারা coincide করে না)। inputs একই হলে (উভয় 0 বা উভয় 1), output LOW (0) হয়। "Anticoincidence" নামটি আক্ষরিক অর্থে "coincidence-এর বিরুদ্ধে," যা এই function-কে perfectly describes করে।

**50. In a hospital, a patient file stores name, disease, date of admission, room number, bed number, as information. Which should be the primary key in this case?** [ একটি হাসপাতালে, একজন রোগীর ফাইলে নাম, রোগ, ভর্তির তারিখ, রুম নম্বর, বেড নম্বর ইত্যাদি তথ্য সংরক্ষণ করা হয়। এই ক্ষেত্রে কোনটি primary key হওয়া উচিত?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৮২২]

| | |
|---|---|
| (ক) Name | (খ) Date of admission |
| (গ) Disease | (ঘ) None of the above. |

**উত্তর (ঘ) None of the above: Explanation (ব্যাখ্যা):** একটি **primary key** একটি টেবিলের প্রতিটি record-কে uniquely এবং stably identify করতে হবে। দেওয়া options-গুলি মূল্যায়ন করা যাক:

- **নাম (ক):** অনন্য নয়। একাধিক রোগীর একই নাম থাকতে পারে।
- **ভর্তির তারিখ (খ):** অনন্য নয়। একই দিনে একাধিক রোগী ভর্তি হতে পারে।
- **রোগ (গ):** অনন্য নয়। অনেক রোগীর একই রোগ হতে পারে।
- **রুম নম্বর / বেড নম্বর:** আরও specific হলেও, এগুলি একটি রোগীর জন্য stable বা unique identifier নয়। একজন রোগী রুম পরিবর্তন করতে পারে, এবং একটি রুম/বেড সময়ের সাথে সাথে সাথে বিভিন্ন রোগীকে assigned হতে পারে।

সঠিক primary key হবে রোগীর জন্য একটি unique, non-changing identifier, যেমন একটি **Patient ID** বা **Medical Record Number**। যেহেতু এটি options-এর মধ্যে তালিকাভুক্ত নেই, সঠিক পছন্দ হল **None of the above**।

**51. The relation between α, β in the transistor is:** [ ট্রানজিস্টরে α, β এর মধ্যে সম্পর্ক হল:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১০৯১]

| | |
|---|---|
| (ক) β = α / (1 + α) | (খ) β = 1 - α |
| (গ) α = β² | (ঘ) β = α / (1 - α) |

**উত্তর (ঘ) β = α / (1 - α): Explanation (ব্যাখ্যা):** একটি Bipolar Junction Transistor (BJT)-এ:

- **α (alpha)** হল common-base কারেন্ট gain (collector current-এর সাথে emitter current-এর ratio)। α = IC / IE
- **β (beta)** হল common-emitter কারেন্ট gain (collector current-এর সাথে base current-এর ratio)। β = IC / IB

Current-গুলির মধ্যে সম্পর্ক হল: IE = IB + IC

এটি থেকে শুরু করে: β = IC / IB = IC / (IE - IC)

Numerator এবং denominator-কে IE দিয়ে ভাগ করলে: β = (IC/IE) / (1 - IC/IE) = **α / (1 - α)**