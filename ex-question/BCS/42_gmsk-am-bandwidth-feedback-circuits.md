# Chapter O (BCS prili) — GSM modulation scheme, AM bandwidth, combinational vs sequential circuits

- **Source image:** `42_gmsk-am-bandwidth-feedback-circuits.jpg` (original file name `569066103_1582907172676378_4099119529963346999_n.jpg`)
- **Page:** 42 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not stated generically — the running header is "Chapter – O [BCS prili Questions Solution]"; individual questions cite their source in red, e.g. Q92 "[বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৬০০]", Q93 "নং- ৫৭৩", Q94 "নং- ৩১৩"
- **Exam date:** not shown (sources cited as 4th edition books with page numbers, not dates)
- **Marks:** not shown
- **Prepared by (compilation):** bitBOX (BCS prili Questions Solution)

## Transcription Notes

- Page is heavily Bengali/English mixed; all Bengali is reproduced exactly as printed.
- The chapter glyph in the running header is ambiguous between the Latin letter "O" and the Bengali digit ০; transcribed here as "O" as it appears in the image.
- Option markers are printed as (ক), (খ), (গ), (ঘ) on a single line for all three questions; reproduced as such.
- Q92's blank is printed as "______" in the English line and "______" in the Bengali line; reproduced as printed.
- Q93's question text names the modulating signal frequency as 10kHz in the English line and 10kHz in the Bengali line; the explanation then reads the given value as 10 kHz. Reproduced exactly as printed.
- No handwritten marginalia observed on this page.

## Content

**92. ______ is the modulation technique used in the GSM system.** [______ হল GSM সিস্টেমে ব্যবহৃত মডুলেশন কৌশল।] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৬০০]

| (ক) MSK | (খ) FSK | (গ) ASK | (ঘ) GMSK |
|---|---|---|---|

**উত্তর (ঘ) GMSK: Explanation (ব্যাখ্যা):** **GMSK (Gaussian Minimum Shift Keying)** হল GSM (Global System for Mobile Communications) স্ট্যান্ডার্ডে ব্যবহৃত modulation scheme। এটি এক ধরনের continuous-phase frequency-shift keying যা positive এবং negative frequency deviations-কে মসৃণ করতে একটি Gaussian filter ব্যবহার করে, যা sideband power এবং adjacent channel interference কম করে। এটি এন্টেক spectralভাবে খুব efficient করে ভোল্টে, যা cellular systems-এর জন্য crucial।

**93. If the carrier and modulating signal frequencies are 1MHz and 10kHz respectively, what is the required bandwidth for Amplitude modulated signal?** [যদি ক্যারিয়ার এবং মডুলেটিং সিগন্যালের ফ্রিকোয়েন্সি যথাক্রমে 1MHz এবং 10kHz হয়, তাহলে অ্যাম্প্লিটিউড মডুলেটেড সিগন্যালের জন্য প্রয়োজনীয় ব্যান্ডউইথ কত?] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৫৭৩]

| (ক) 5 kHz | (খ) 10 kHz | (গ) 20 kHz | (ঘ) 2 MHz |
|---|---|---|---|

**উত্তর (গ) 20 kHz: Explanation (ব্যাখ্যা):** একটি স্ট্যান্ডার্ড Amplitude Modulated (AM) signal-এর জন্য, bandwidth (BW) দেওয়া হয়:

**BW = 2 × f<sub>m</sub>**

যেখানে f<sub>m</sub> হল modulating signal-এর highest frequency component।

প্রদত্ত যে modulating signal frequency হল 10 kHz, required bandwidth হল:

BW = 2 × 10 kHz = **20 kHz**।
Carrier frequency (এই ক্ষেত্রে 1 MHz) modulated signal-এর center frequency নির্ধারণ করে কিন্তু bandwidth-কে প্রভাবিত করে না।

**94. Basic difference between combinational and sequential circuits lies in:** [combinational এবং sequential সার্কিটের মধ্যে মৌলিক পার্থক্য হল] [বিভিন্ন অহসিসিট মাস্টার্স -৪র্থ এডিশন- পাওয়ার নং- ৩১৩]

| (ক) Feedback used | (খ) Logic gates used | (গ) Inputs | (ঘ) None of the above |
|---|---|---|---|

**উত্তর (ক) Feedback used: Explanation (ব্যাখ্যা):** Combinational এবং sequential circuits-এর মধ্যে মৌলিক পার্থক্য হল **feedback** এবং **memory**-এর উপস্থিতি।

- **Combinational Circuits:** তাদের output **শুধুমাত্র** present input-এর উপর নির্ভর করে। তাদের past inputs-এর কোনো memory নেই। কোনো feedback path নেই।
- **Sequential Circuits:** তাদের output present input এবং inputs-এর past history (state) উভয়ের উপর নির্ভর করে। এগুলিতে memory elements (যেমন flip-flops) থাকে এবং এই state ব্যবহার রাখার জন্য output থেকে input-এ **feedback** ব্যবহার করে।

Combinational এবং sequential circuits একই ধরনের logic gates (খ) এবং inputs (গ) ব্যবহার করতে পারে, তাই key differentiator হল feedback-এর ব্যবহার।