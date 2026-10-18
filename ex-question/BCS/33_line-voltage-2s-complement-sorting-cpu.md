# Chapter O (BCS prili) — line/phase voltage, 2's complement, non-comparison sort, CPU component

- **Source image:** `33_line-voltage-2s-complement-sorting-cpu.jpg` (original file name `568138132_1582906192676476_3682956566295913076_n.jpg`)
- **Page:** 33 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q53 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৩৬৬]", Q55 "নং- ১৯৭"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ); Q53 prints all four on a single line while Q54/Q55 print them in two columns. Both layouts are reproduced in table form.
- The blank fill in Q53 is printed as a long underscore rule in both the English and Bengali lines; reproduced as printed.
- Q52, Q54 and Q55 carry no red source citation; Q55's answer/explanation is not printed on this page — [cut off].
- No handwritten marginalia observed on this page.

## Content

**52. The relationship between line voltage (VL) and phase voltage (VP) is:** [লাইন ভোল্টেজ (VL) এর ফেজ ভোল্টেজ (VP) এর মধ্যে সম্পর্ক হল:]

| | |
|---|---|
| (ক) VL = VP | (খ) VL = √3 VP |
| (গ) VL = VP / √3 | (ঘ) VL = 3VP |

**উত্তর (খ) VL = √3 VP: Explanation (ব্যাখ্যা):** একটি **balanced three-phase star (Y) connection**-এ, line voltage (VL), যা যেকোনো two lines-এর মধ্যে voltage, এবং phase voltage (VP), যা যেকোনো one phase winding-এর মধ্যে voltage বা যেকোনো line এবং neutral-এর মধ্যে voltage, তাদের মধ্যে সম্পর্কটি নিম্নরূপ:

**VL = √3 VP**

এটি three-phase AC systems-এর একটি fundamental formula।

**53. ______ complement method is predominantly used to represent negative numbers in computer systems.** [কম্পিউটার সিস্টেমে ঋণাত্মক সংখ্যা উপস্থাপনের জন্য প্রধানত ______ পদ্ধতি ব্যবহৃত হয়।] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৩৬৬]

| (ক) 1's | (খ) 2's | (গ) 9's | (ঘ) 10's |
|---|---|---|---|

**উত্তর (খ) 2's: Explanation (ব্যাখ্যা):** **2's complement** পদ্ধতিটি আধুনিক কম্পিউটার সিস্টেমে signed integers represent করার standard এবং predominant পদ্ধতি এবং প্রাধান্যের reasons হল:

- এটি শূন্যের জন্য **representation** আছে, 1's complement-এর unlike যার +0 এবং -0 উভয়ই আছে।
- **Arithmetic operations** (যোগ এবং বিয়োগ) সহজ এবং unsigned numbers-এর জন্য একই hardware ব্যবহার করে performed করা যেতে পারে, special correction cycles-এর any need ছাড়াই।

**54. Which sorting algorithm below is not comparison based?** [নিচের কোন sorting অ্যালগরিদম তুলনা ভিত্তিক নয়?]

| (ক) Merge sort | (খ) Heap sort | (গ) Counting sort | (ঘ) Quick sort |
|---|---|---|---|

**উত্তর (গ) Counting sort: Explanation (ব্যাখ্যা):** **Comparison-based** sorting algorithms একটি comparison operator (যেমন <, >) ব্যবহার করে elements-গুলিকে একে অপরের সাথে compare করে sorted order নির্ধারণ করে। **Merge Sort (ক), Heap Sort (খ),** এবং **Quick Sort (ঘ)** সবই comparison-based sort।

- **Counting Sort (গ)** হল একটি **non-comparison-based** sorting algorithm। এটি প্রতিটি distinct key value objects-এর সংখ্যা গণনা করে এবং তারপর output sequence-এ প্রতিটি key value-এর positions নির্ধারণ করতে those counts-এর উপর arithmetic ব্যবহার করে works। এটি elements-কে directly compare করে না।

**55. Which of the following is not a main component of a CPU?** [নিচের কোনটি CPU-র প্রধান উপাদান নয়?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১৯৭]

| | |
|---|---|
| (ক) Control unit | (খ) ALU |
| (গ) Cache | (ঘ) Registers |

[cut off — Q55's answer/explanation is not printed on this page]