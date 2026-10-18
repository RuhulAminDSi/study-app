# Chapter O (BCS prili) — array of float pointers, structural testing, BST traversal, process control block

- **Source image:** `41_array-pointers-white-box-bst-pcb.jpg` (original file name `569059583_1582906999343062_5327289085167482591_n.jpg`)
- **Page:** 41 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q85 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২০২]", Q86 "নং- ১১৫", Q87 "নং- ৫২৫", Q88 "নং- ৭৬৮"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ); Q85, Q88 print them in two columns while Q86, Q87 print all four on a single line. Both layouts are reproduced in table form.
- Q88's question text and options are the last content on the page; its answer/explanation is [cut off] and continues on the next page.
- In Q85's option (গ) the printed form is "float *Arr[4];" — the answer key (গ) is printed as "float *Arr[4];" as well; reproduced exactly.
- No handwritten marginalia observed on this page.

## Content

**85. How will you declare an array (Arr) of four pointers to float?** [চারটি পয়েন্টারের একটি অ্যারে (Arr) কীভাবে float অবস্থায় ঘোষণা করবেন?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ২০২]

| | |
|---|---|
| (ক) float Arr[4]; | (খ) (float) Arr[4]; |
| (গ) float \*Arr[4]; | (ঘ) Ptr (float) Arr[4]; |

**উত্তর (গ) float \*Arr[4]:**

**Explanation (ব্যাখ্যা):** C/C++-তে, float \*Arr[4]; declaration-এর অর্থ:

- Arr একটি অ্যারে ([4])
- পয়েন্টারের (\*)
- float-এ।

সুতরাং, Arr[0], Arr[1], Arr[2], এবং Arr[3] প্রতিটি একটি float মানের পয়েন্টার।

**86. In software testing, which technique is called structural testing?** [সফটওয়্যার পরীক্ষায়, কোন কৌশলটিকে কীওয়ারাত্মক পরীক্ষা বলা হয়?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ১১৫]

| (ক) Black box | (খ) Regression | (গ) System | (ঘ) White box |
|---|---|---|---|

**উত্তর (ঘ) White box: Explanation (ব্যাখ্যা):**

- **হোয়াইট বক্স টেস্টিং (ঘ), স্ট্রাকচারাল টেস্টিং** নামেও পরিচিত, হল একটি পদ্ধতি যেখানে টেস্টার সফটওয়্যারের ভেতরের structure, design এবং code পরীক্ষা করে। টেস্টগুলো internal logic, code paths এবং conditions-এর ভেতরের উপর ভিত্তি করে designed হয়।
- **ব্ল্যাক বক্স টেস্টিং (ক)** internal mechanism উপেক্ষা করে এবং requirements এবং functionality-এর উপর ভিত্তি করে test করে।
- **রিগ্রেশন টেস্টিং (খ)**-এ নিশ্চিত করতে যে নতুন changes existing functionality ভেঙে দেয়নি তার জন্য test পুনরায় চালানো হয়।
- **সিস্টেম টেস্টিং (গ)** হল testing-এর একটি level যেখানে একটি সম্পূর্ণ, integrated system tested হয়।

**87. Which traversal will you perform to sort the elements of a binary search tree?** [বাইনারি সার্চ ট্রি উপাদানগুলোকে সাজাতে আপনি কোন ট্রাভার্সালিটি সম্পাদন করবেন?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৫২৫]

| (ক) Preorder | (খ) Postorder | (গ) Inorder | (ঘ) Level order |
|---|---|---|---|

**উত্তর (গ) Inorder: Explanation (ব্যাখ্যা):** একটি বাইনারি সার্চ ট্রি (BST)-এর ট্রাশিং হল যে যেকোনো নোডের জন্য, তার বাম সাবট্রি সবগুলে উপাদান উপাদান নোডের থেকে কম এবং তার ডান সাবট্রি সমস্ত উপাদান উপাদান নোডের থেকে বেশি। একটি BST-এর ইনঅর্ডার ট্রাভার্সাল (বাম, root, ডান) নোডগুলিকে **ascending order**-এ visits করে। এই বৈশিষ্ট্য ইনঅর্ডার ট্রাভার্সালকে BST থেকে উপাদানগুলির sorted list পাওয়ার সহজ পথি করে তোলে।

**88. Process control block includes:** [Process control ব্লকের মধ্যে রয়েছে:] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৭৬৮]

| | |
|---|---|
| (ক) Process ID | (খ) Process state |
| (গ) program counter | (ঘ) all the above |

[cut off — Q88's answer/explanation is not printed on this page]