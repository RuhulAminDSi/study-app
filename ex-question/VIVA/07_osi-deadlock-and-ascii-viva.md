# BPSC Viva 2023 — Assistant Maintenance Engineer (continued): OSI Layers, Network Setup, Keyboard-to-Monitor Signal Path, ASCII, Digital Signal, Country's Main Problem (VIVA-20 + continuation)

- **Source image:** `07_osi-deadlock-and-ascii-viva.jpg` (original file name `492897039_122162937608336015_6551267300846408920_n.jpg`)
- **Page:** 7 of 8
- **Paper / Post:** BPSC — বিপিএসসি ভাইভা-২০২৩; পদবীঃ সহকারী মেইন্টেন্যান্স ইঞ্জিনিয়ার; বিভিন্ন মন্ত্রণালয় (অভিজ্ঞতায়ঃ সাইফুল্যা ইবনে আমিন). This page continues the viva that starts on `01_bpsc-ica-and-ir-viva.jpg` (`VIVA-18`, `VIVA-19`); the banner itself is printed only there. Printed page footer here: `VIVA- 20`.
- **Exam date:** not shown (banner on VIVA-18 reads "বিপিএসসি ভাইভা-২০২৩")
- **Marks:** not shown

## Transcription Notes

- This page **continues `01_bpsc-ica-and-ir-viva.md` (`VIVA-19`)** — the BPSC viva 2023 for Assistant Maintenance Engineer. It carries no banner of its own, only the `Order on: bitboxbd.com / bitBox Question Bank` running header.
- This scan contains **two** printed blocks. The first ends with the footer `VIVA- 20` (the technical sir's questions); the second is the next page of the same viva (the 3rd sir's questions), with the header `bitBox Question Bank / Order on: bitboxbd.com` and the `VIVA Experience` footer. Transcribed as `VIVA-20` and `VIVA-20 (continued)`.
- The OSI layer list is printed in two columns (1–3 left, 4–7 right). It is reproduced as one ordered list because the columns form one continuous enumeration.
- Kept as printed: `টি টি` doubling in `প্রথম তিনটি টি লেয়ার`, `ব্যাটার` (for বেতার, wireless) and `সন্টওয়্যার`/`সফটওয়্যার` spelling variation.
- No handwritten marginalia are visible.
- Reviewer note: in the keyboard answer a display driver is software (it is not "a hardware and software application"), and a keystroke's scan code is produced by the keyboard's own controller and delivered to the CPU as an interrupt rather than being converted to digital form by the motherboard. Also, the OSI model is a reference model, not a "protocol model".
- Re-transcribed from the image on 2026-10-08 (fixed: the Bangla was badly garbled throughout — speaker labels `টেকনিক্যাল স্যার` and `৩য় স্যার` (not "সারা"/"৭ নম্বর সারা"), every question and answer, and the closing `বিঃ দ্রঃ` note; the title named deadlock, database concurrency, varchar and encryption, none of which are on the page; header now identifies this as the BPSC 2023 Assistant Maintenance Engineer viva continued from VIVA-19).

## Content

### Printed page `VIVA- 20`

**Header:** Order on: bitboxbd.com — bitBox Question Bank

**টেকনিক্যাল স্যার:** OSI কি? এখানে কয়টা লেয়ার আছে? নাম বলতে পারবেন?
**আমি:** জি স্যার, ওপেন সিস্টেম ইন্টারকানেকশন মডেল (OSI) হল একটি বিস্তৃত প্রোটোকল মডেল যা কম্পিউটার নেটওয়ার্কগুলির মধ্যে যোগাযোগের জন্য ব্যবহৃত হয়। এটি সাতটি লেয়ারে বিভক্ত, প্রতিটি লেয়ার একটি নির্দিষ্ট কাজের জন্য উপযোগী।

1. Physical layer
2. Data link layer
3. Network layer
4. Transport layer
5. Session layer
6. Presentation layer
7. Application layer

**টেকনিক্যাল স্যার:** ধরুন, আপনাকে OIC এর অফিসের একটা রুমে নেটওয়ার্ক সেটআপ করতে বললো। আপনি কোন লেয়ারে কাজ করবেন? কি কি টুলস ব্যবহার করবেন?
**আমি:** স্যার,

- ✓ আমি প্রথমে অবশ্যই ফিজিক্যাল লেয়ারে কাজ করবো। এতে কম্পিউটার, রাউটার, হাব, সুইচ, ক্যাবল, কানেক্টর এবং অন্যান্য হার্ডওয়্যার অন্তর্ভুক্ত থাকবে। আমি নেটওয়ার্ক অ্যাডাপ্টারগুলিকে কম্পিউটারে ইনস্টল করব এবং ক্যাবলগুলিকে নেটওয়ার্ক ডিভাইসগুলিতে সংযুক্ত করব।
- ✓ তারপরে, ডেটা লিংক লেয়ারে কাজ করবো। তারের বা বেতার সংযোগের মাধ্যমে নেটওয়ার্ক ডিভাইসগুলির মধ্যে সংযোগ স্থাপন করব। আমি তারের নেটওয়ার্কের জন্য ক্যাবলগুলিকে টেপিং করব এবং ব্যাটার নেটওয়ার্কের জন্য রাউটার এবং সুইচগুলিকে কনফিগার করব।
- ✓ এরপরে নেটওয়ার্ক লেয়ারে কাজ করবো, নেটওয়ার্কের জন্য একটি IP অ্যাড্রেসিং কনফিগার করব। এটি নিশ্চিত করবে যে নেটওয়ার্ক ডিভাইসগুলি একে অপরের সাথে যোগাযোগ করতে পারে।
- ✓ এরপরে ট্রান্সপোর্ট লেয়ারে আমি ডেটা স্থানান্তরের জন্য প্রয়োজনীয় প্রোটোকলগুলি কনফিগার করব। এটি নিশ্চিত করবে যে ডেটা সঠিকভাবে এবং নিরাপদে স্থানান্তরিত হয়।

স্যার, ৭টি লেয়ারের প্রথম তিনটি টি লেয়ার হার্ডওয়্যার রিলেটেড লেয়ার, শেষ তিনটি সফটওয়্যার রিলেটেড লেয়ার। আমাকে মূলত প্রথম তিনটি লেয়ারেই বেশি কাজ করতে হবে।

**টেকনিক্যাল স্যার:** গুড, আমরা কীবোর্ডে কী প্রেস করলে সেটা মনিটরে শো করে। এই যে কী প্রেস করার পর সেটা মনিটরে শো করে, এটার প্রসেসটা কি? সিগন্যাল গুলো কিভাবে পাস হয়?
**আমি:** কীবোর্ডে কী প্রেস করলে সেটা মনিটরে শো করার প্রক্রিয়াটি নিম্নরূপ:

- ✓ কীবোর্ডে কী প্রেস করলে, কীবোর্ডের ভেতরের একটি সুইচ বন্ধ হয়ে যায়। এই সুইচটি একটি বৈদ্যুতিক সংকেত তৈরি করে।
- ✓ এই বৈদ্যুতিক সংকেতটি কীবোর্ডের ভেতরের একটি তারের মাধ্যমে মাদারবোর্ডে পাঠানো হয়।
- ✓ মাদারবোর্ড এই বৈদ্যুতিক সংকেতটিকে একটি ডিজিটাল সংকেতে রূপান্তরিত করে। এই ডিজিটাল সংকেতটিতে কীবোর্ডে কী প্রেস করা হয়েছে তার তথ্য থাকে।
- ✓ মাদারবোর্ড এই ডিজিটাল সংকেতটিকে সিপিইউ-এর কাছে পাঠায়।
- ✓ সিপিইউ এই ডিজিটাল সংকেতটিকে একটি প্রোগ্রামে পাঠায়। এই প্রোগ্রামটি কীবোর্ডে কী প্রেস করা হয়েছে তা বোঝে।
- ✓ এই প্রোগ্রামটি একটি ডিসপ্লে ড্রাইভারকে বলে যে কীবোর্ডে কী প্রেস করা হয়েছে। ডিসপ্লে ড্রাইভার হল একটি হার্ডওয়্যার এবং সন্টওয়্যার অ্যাপ্লিকেশন যা কম্পিউটারের ডিসপ্লেকে নিয়ন্ত্রণ করে।
- ✓ ডিসপ্লে ড্রাইভার এই তথ্যটিকে ডিসপ্লেতে পাঠায়। ডিসপ্লে এই তথ্যটিকে একটি চিত্রের আকারে প্রদর্শন করে।

আসলে এই প্রক্রিয়াটি খুব দ্রুত হয়। কীবোর্ডে কী প্রেস করার সাথে সাথেই মনিটরে সেই চিত্রটি প্রদর্শিত হয়।

**টেকনিক্যাল স্যার:** কম্পিউটারতো বাইনারী (০,১) বুঝে। তো কী বোর্ডে কী প্রেস করলে কম্পিউটারে সেটা যেকোন ক্যারেক্টারে কিভাবে রূপান্তরিত হয়?
**আমি:** কীবোর্ডে কী প্রেস করলে কম্পিউটারে সেটা যেকোনো ক্যারেক্টারে রূপান্তরিত হয় ASCII কোডের মাধ্যমে।

**টেকনিক্যাল স্যার:** এই ASCII কোড আবার কি?
**আমি:** ASCII কোড হচ্ছে American Standard Code for Information Interchange সংক্ষিপ্ত রূপ। ASCII কোড হল একটি 7-বিট কোডিং সিস্টেম যা 128টি ক্যারেক্টারকে ধারণ করতে পারে। এই ক্যারেক্টারগুলির মধ্যে রয়েছে অক্ষর, সংখ্যা, অপারেটর এবং অন্যান্য স্পেশাল প্রতীক।

**টেকনিক্যাল স্যার:** গুড। ডিজিটাল সংকেত কি? ক্যান ইউ ড্র ইট?
**আমি:** ডিজিটাল সংকেত হল এমন একটি সংকেত যা দুটি বা ততোধিক নির্দিষ্ট অবস্থার মধ্যে একটিকে বুঝায় ।

টেকনিক্যাল স্যার এবার বাকী অন্য স্যারকে প্রশ্ন করার জন্য ইশারা করলেন।

**Footer:** VIVA- 20

---

### Printed page `VIVA- 20 (continued)`

**Header:** bitBox Question Bank — Order on: bitboxbd.com

**৩য় স্যার:** অবসর সময়ে কী করেন? আমি: স্যার, খেলাধূলা করি এবং খেলাধূলা দেখতেও পছন্দ করি।

**৩য় স্যার:** কি কি খেলা খেলতে পারেন? আমি: ফুটবল আর ক্রিকেট খেলা দেখতে এবং খেলতে পছন্দ করি।

**৩য় স্যার:** প্রিয় ফুটবলার কে? আমি: বললাম।

**৩য় স্যার:** আচ্ছা, বর্তমান প্রেক্ষাপটে দেশের কোন সমস্যাকে আপনার মূল/প্রধান সমস্যা বলে মনে হয়?
**আমি:** আমি বললাম এবং কিছু যুক্তিও দিলাম। (আমি সাইবার সিকিউরিটি আইনের কথা বলছি ও যুক্তি দিছি।)

**৩য় স্যার:** এটাই কি প্রধান সমস্যা? ফ্রাংকলি বলেন, কোনো ভয় নেই।
আমি: প্রথমে মাননীয় প্রধানমন্ত্রীর কিছু সাফল্য ও দেশের অর্থনীতি ও অগ্রগতি নিয়ে বললাম। পরে বললাম দূর্নীতি প্রধান সমস্যা ও দ্রব্যমূল্যের উর্ধ্বগতির পিছনে সিন্ডিকেট এর কথা তুলে ধরলাম। বিস্তারিত কিছু ব্যাখ্যা করলাম, স্যার কিছু উদাহরণ চাইলেন, ব্যাংকে দূর্নীতির কথা বলার পর আর আগাতে দিলেন না।

**[বিঃ দ্রঃ** মূলত ভাইভা বোর্ডে সরকার বা দেশের সমস্যা নিয়ে প্রশ্ন করলে সরাসরি নেগেটিভ কিছু বলা যাবেনা। পজিটিভ ওয়েতে সমস্যা গুলো তুলে ধরতে হবে, যাতে করে সরকারের সাফল্য ও সমস্যা এবং সমস্যা থেকে উত্তরণের উপায় ইত্যাদি সব দিকই ফুটে উঠে।**]**

**Footer:** VIVA Experience
