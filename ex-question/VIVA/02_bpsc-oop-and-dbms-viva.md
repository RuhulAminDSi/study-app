# BPSC Viva — Assistant Programmer (ICT Division): Optical Fiber, Blockchain, Cryptography, Overloading/Overriding/Polymorphism, ACID, ROLLBACK, SQL Injection (VIVA-12 and continuation)

- **Source image:** `02_bpsc-oop-and-dbms-viva.jpg` (original file name `492237935_122162938412336015_2775149679514905911_n.jpg`)
- **Page:** 2 of 8
- **Paper / Post:** BPSC — বিপিএসসি ভাইভা; পদের নামঃ Assistant Programmer; Information and Communication Technology Division
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- This scan contains **two** printed pages: the first starts with the BPSC banner and questions ১–৮ and ends with the footer `VIVA- 12`; the second is headed `bitBox Question Bank / Order on: bitboxbd.com`, continues question ৮ and runs to question ১২, ending with the `VIVA Experience` footer.
- Question numbers are printed with Bengali numerals (১, ২, ৩ …); reproduced as printed.
- The answer to question ৮ is set in two columns across both pages (left: overloading, then overriding definition; right: the overriding code and its explanation). It is transcribed in reading order: left column then right column of each page, so the overriding code follows its definition.
- Answer to question ৯ is printed as a dashed blank.
- The answers are reproduced as printed, including spellings such as `অর্থহ রুপ`, `হ্যাকারগন`, `মডিফিকেশন্স`, `পুর্বের`.
- No handwritten marginalia are visible.
- Reviewer note: in answer ৫, light is turned back into bits by the receiver's photodetector (photodiode in an optical transceiver/SFP), not by an "optical modulator"; a modulator/laser does the opposite (electrical → light) at the transmitter.
- Re-transcribed from the image on 2026-10-08 (fixed: the Bangla was badly garbled throughout — questions ১–৯ and every answer; banner reads বিপিএসসি ভাইভা, not বিসিএস; question ৭ is ক্রিপ্টোগ্রাফি, ৯ is a blank programming task; the first page is not a mid-topic continuation; title now lists the topics actually on the page).

## Content

### Printed page marked `VIVA-12`

**Header (grey banner, BPSC logo at left):**
বিপিএসসি ভাইভা
পদের নামঃ Assistant Programmer
Information and Communication Technology Division

১. নিজ জেলা সম্পর্কে প্রশ্ন করছেন প্রথমে।

২. আইসিটি রুলস ও আইন কত ধারাতে আছি, কি তাই বলতে বলছে, আগের জব সম্পর্কে প্রশ্ন।

৩. অপটিক্যাল ফাইবার কাকে বলে? কোন নিয়ম অনুসরণ করে চলে?
**উত্তরঃ** অপটিক্যাল ফাইবার হলো অত্যন্ত সরু এক ধরনের কাচের তন্তু। যা একধরনের পাতলা, স্বচ্ছ তন্তু বিশেষ, সাধারণত বিশুদ্ধ কাচ (সিলিকা) অথবা প্লাস্টিক দিয়ে বানানো হয়, যা আলো পরিবহনে ব্যবহৃত হয়। অপটিক্যাল ফাইবার সাধারণত টেলিযোগাযোগের ক্ষেত্রে বহুল ব্যবহৃত হচ্ছে। এছাড়া আলোকসজ্জা, সেন্সর ও ছবি সম্পাদনার কাজেও বর্তমানে ব্যবহৃত হচ্ছে।

**যেভাবে কাজ করে:** পূর্ণ অভ্যন্তরীণ প্রতিফলনের প্রযুক্তি কাজে লাগিয়ে ইলেকট্রিকাল সিগন্যালের পরিবর্তে আলোক বা লাইট সিগন্যাল করে কাজ করে এবং ডেটা আদান-প্রদানের জন্য লেজার রশ্মি ব্যবহার করে। অপটিক্যাল ফাইবার মোট অভ্যন্তরীণ প্রতিফলনের নীতিতে কাজ করে। আলো যখন কেন্দ্রে প্রবেশ করে, এটি একটি জিগ-জ্যাগ আকারে এক প্রান্ত থেকে অন্য প্রান্তে ভ্রমণ করে। এই সব শুধুমাত্র কোর এবং Cladding কারণে উৎপন্ন মোট অভ্যন্তরীণ প্রতিফলনের কারণে সম্ভব।

৪. নেটওয়ার্ক ক্যাবল কাটা গেলে ডিটেক্ট করা যায় কিভাবে?
**উত্তরঃ** ক্যাবল কাটা গেলে নেটওয়ার্ক এ সমস্যা সৃষ্টি হলেও কিছু উপায় আছে যেগুলো ব্যবহার করে ক্যাবল কাটা আইডেন্টিফাই করা যায়। এবং ক্যাবল টেস্টারের মাধ্যমে আইডেন্টিফাই করা যায় ক্যাবল ভালো আছে নাকি সমস্যা হয়েছে বা কাটা গেছে।

৫. অপটিকাল ফাইবার থেকে যে আলো যায় এটা নেটওয়ার্ক বিটে রুপান্তরিত হয় কিভাবে?
**উত্তরঃ** অপটিক্যাল ফাইবার থেকে যে আলো যায় এটা নেটওয়ার্ক বিটে রুপান্তরিত হয় একটি ডিভাইস দিয়ে যাকে অপটিক্যাল মড্যুলেটর বলা হয়। অপটিক্যাল মড্যুলেটর একটি ইলেকট্রনিক সিগন্যালকে আলোর সিগন্যালে রূপান্তরিত করে। ইলেকট্রনিক সিগন্যালটি একটি লাইটার দ্বারা চালিত হয় যা আলোকে উৎপন্ন করে। আলোটি তারপর অপটিক্যাল ফাইবারে প্রবেশ করে এবং ফাইবারটি ধরে রাখে। আলোটি তারপর অপর প্রান্তে পৌঁছায় এবং একটি রিসিভার দ্বারা গ্রহণ করা হয়। রিসিভার আলোকে একটি ইলেকট্রনিক সিগন্যালে রূপান্তরিত করে যা তারপর নেটওয়ার্কে প্রেরণ করা হয়।

৬. ব্লকচেইন কি?
**উত্তরঃ** ব্লকচেইন হল একটি ডিস্ট্রিবিউটেড লেজার টেকনোলজি যা ডাটা স্টোর এবং ট্রানজেকশন প্রক্রিয়াকে সিকিউর এবং ট্রান্সপারেন্ট করে। এটি একটি ডাটাবেস হিসেবে কাজ করে এবং নেটওয়ার্কের বিভিন্ন নোডে সংরক্ষিত হয়। এই টেকনোলজির সম্প্রসারণে ব্যবহারকারীদের কাছে নিজের ডাটা নিয়ন্ত্রণে থাকতে সম্ভব হয় এবং ট্রানজেকশনগুলি সিকিউর ভাবে প্রক্রিয়া করা হয়।

৭. ক্রিপ্টোগ্রাফি কি?
**উত্তরঃ** ক্রিপ্টোগ্রাফি এমন এক ধরণের প্রযুক্তি যা কোন ডিজিটাল তথ্যকে গোপন করা জন্য ব্যবহৃত হয়। এর মাধ্যমে তথ্য এনক্রিপ্ট করা হয় যাতে অনুমতি ব্যাক্তি ছাড়া তথ্যটি পড়া ও পরিবর্তন করতে না পারে। ক্রিপ্টোগ্রাফি ব্যবহার করে ব্যক্তিগত তথ্য, সংক্ষিপ্ত বাণী বা পুর্ন ফাইল ইত্যাদি সংরক্ষণ করা হয়। ক্রিপ্টোগ্রাফি বিভিন্ন ধরণের হতে পারে, যেমন সিমেট্রিক ক্রিপ্টোগ্রাফি, অ্যাসিমেট্রিক ক্রিপ্টোগ্রাফি, হ্যাশ ফাংশন ইত্যাদি।

৮. ওভারলোডিং, ওভাররাইডিং,পলিমরফিজম কি এবং উদাহরণ।
**উত্তরঃ ওভারলোডিং:** একই নামের একাধিক পদ্ধতি সংজ্ঞায়িত করার প্রক্রিয়া যা ভিন্ন প্যারামিটার গ্রহণ করে। উদাহরণস্বরূপ, নিম্নলিখিত কোড দুটি পদ্ধতি সংজ্ঞায়িত করে যা উভয়ই print()

*(right column of this page)* Base ক্লাসে একটি print() পদ্ধতি রয়েছে, এবং Derived ক্লাসে একটি print() পদ্ধতি রয়েছে যা Base ক্লাসের print() পদ্ধতিকে ওভাররাইড করে:

`VIVA- 12`

---

### Printed page (unnumbered continuation)

**Running head:** bitBox Question Bank — Order on: bitboxbd.com

*(left column)*

নামে পরিচিত, কিন্তু তারা ভিন্ন প্যারামিটার গ্রহণ করে:

```cpp
void print(int x) {
  cout << x << endl;
}

void print(string str) {
  cout << str << endl;
}
```

print(1) কল print(int x) পদ্ধতিটিকে কল করবে, কারণ এটি একটি প্যারামিটার গ্রহণ করে যা একটি অঙ্ক। print("Hello, world!") কল print(string str) পদ্ধতিটিকে কল করবে, কারণ এটি একটি প্যারামিটার গ্রহণ করে যা একটি স্ট্রিং।

**ওভার রাইডিং:** বেস ক্লাসে সংজ্ঞায়িত একটি পদ্ধতিকে পুনঃসংজ্ঞায়িত করার প্রক্রিয়া যা সাব-ক্লাসে সংজ্ঞায়িত করা হয়। উদাহরণস্বরূপ, নিম্নলিখিত কোড একটি Base ক্লাস এবং একটি Derived ক্লাস সংজ্ঞায়িত করে।

*(right column)*

```cpp
class Base {
public:
  void print() {
    cout << "Base" << endl;
  }
};

class Derived : public Base {
public:
  void print() {
    cout << "Derived" << endl;
  }
};
```

যদি আমরা একটি Derived অবজেক্ট তৈরি করি এবং print() পদ্ধতিটি কল করি, তাহলে Derived ক্লাসের print() পদ্ধতিটি কল হবে, কারণ এটি Base ক্লাসের print() পদ্ধতিকে ওভাররাইড করে।

*(full width)*

**পলিমরফিজম:** পলিমরফিজম হচ্ছে গ্রিক শব্দ। ইংরেজিতে "Poly-Morphism" দুটি শব্দ এখানে poly শব্দের অর্থ অনেক এবং "Morphism" শব্দের অর্থহ রুপ। অর্থাৎ স্থানভেদে যদি কোনো অবজেক্টে ভিন্ন ভিন্ন রুপ ধারণ করে থাকে তবে তাকে পলিমরফিজম বলে। মেথড ওভারলোডিং এবং মেথড ওভাররাইডিং উভয়ই পলিমরফিজমের উদাহরণ।

৯. বেসিক একটা প্রোগ্রাম করতে দিছিলো খাতায়।
**উত্তরঃ** ------------------

১০. ACID প্রোপার্টিজ কি কি?
**উত্তরঃ** ACID প্রোপার্টিজ গুলোঃ Atomicity, Consistency, Isolation এবং Durability

১১. ROLLBACK কি?
**উত্তরঃ** ROLLBACK একটি ডাটাবেজ ট্রানজেকশন কমান্ড। যখন একটি ডাটাবেজ ট্রানজেকশন অসম্পূর্ণ হয় তখন তাকে পুর্বের অবস্থায় ফিরিয়ে আনতে ROLLBACK কমান্ড ব্যবহার করা হয়। ROLLBACK ট্রানজেকশনের সমস্ত পরিবর্তন বাতিল করে পুর্বের অবস্থায় ফিরিয়ে আনে।

১২. SQL INJECTION কি?
**উত্তরঃ** SQL injection একটি ডাটাবেজ হ্যাকিং পদ্ধতি যার মাধ্যমে হ্যাকারগন SQL ডাটাবেজ injection কোন প্রকার অথেন্টিকেশন ছাড়াই ডাটাবেজ , আপডেট, ডিলিট এবং মডিফিকেশন্স করতে পারে।

**Footer:** `Q/A VIVA Experience`
