/*
 * ============================================================================
 *  Study Hub landing page: CENTRAL CONFIG
 *  Edit this file to change where CTAs go, the subjects, and every piece of
 *  text on the page. `text.bn` and `text.en` hold the two languages: `ui` is
 *  the fixed page copy (keys match data-i18n attributes in index.html), the
 *  rest are the lists landing.js renders. Keep both languages in step.
 *  Items marked  // PLACEHOLDER  must be checked or replaced before going live.
 * ============================================================================
 */
export default {
  /* ---- Study Hub destination ------------------------------------------- */
  // Every CTA on the page uses this one value. Study Hub is served from
  // study-hub/index.html (hash-routed: "/study-hub/#/..."); "/" is this page.
  // Study Hub needs a candidate account: a signed-out visitor's CTAs go to
  // its login screen (LOGIN_HASH) instead, and sign-up goes to SIGNUP_HASH.
  STUDY_HUB_URL: '/study-hub/',
  LOGIN_HASH: '#/login',
  SIGNUP_HASH: '#/signup',

  // false = open Study Hub in the same tab (default), true = new tab.
  OPEN_IN_NEW_TAB: false,

  // Subject deep links. Study Hub has no slug route yet, so subject cards
  // link to STUDY_HUB_URL until the router supports "#/subject/<slug>".
  // Flip to true once that route exists.
  DEEP_LINKS_ENABLED: false,
  deepLink(slug) {
    return `${this.STUDY_HUB_URL}#/subject/${slug}`
  },

  /* ---- Language -------------------------------------------------------- */
  // Used until the visitor presses the language button. index.html is written
  // in English to match. The choice is stored under 'studyhub_language', which
  // Study Hub also reads, so both open in the language last picked.
  DEFAULT_LANG: 'en',

  /* ---- Subjects: mirrors the Study Hub sidebar ------------------------- */
  // slug = the chapter folder name used by the notes pipeline; pyq = a
  // solved-past-questions note set is published for this subject.
  subjects: [
    { no: 1, bn: 'পদার্থবিদ্যার মূল ধারণা', en: 'Basic Physics', slug: '01-basic-physics' },
    { no: 2, bn: 'কম্পিউটার সিস্টেমের পরিচিতি', en: 'Introduction to Computer Systems', slug: '02-introduction-to-computer-systems' },
    { no: 3, bn: 'তড়িৎ সার্কিট', en: 'Electrical Circuits', slug: '03-electrical-circuits' },
    { no: 4, bn: 'ডিজিটাল লজিক ডিজাইন', en: 'Digital Logic Design', slug: '04-digital-logic-design' },
    { no: 5, bn: 'মৌলিক ইলেকট্রনিক্স', en: 'Basic Electronics', slug: '05-basic-electronics', pyq: true },
    { no: 6, bn: 'মাইক্রোপ্রসেসর ও ইন্টারফেসিং', en: 'Microprocessor and Interfacing', slug: '06-microprocessor-and-interfacing' },
    { no: 7, bn: 'কম্পিউটার আর্কিটেকচার', en: 'Computer Architecture', slug: '07-computer-architecture' },
    { no: 8, bn: 'যোগাযোগ তত্ত্ব', en: 'Communication Theory', slug: '08-communication-theory' },
    { no: 9, bn: 'কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা', en: 'Computer Networking and Security', slug: '09-computer-networking-and-security', pyq: true },
    { no: 10, bn: 'স্ট্রাকচার্ড প্রোগ্রামিং (C)', en: 'Structured Programming (C)', slug: '10-structured-programming-language-c' },
    { no: 11, bn: 'অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং', en: 'Object Oriented Programming', slug: '11-object-oriented-programming-oop' },
    { no: 12, bn: 'ডিসক্রিট গণিত', en: 'Discrete Mathematics', slug: '12-discrete-mathematics' },
    { no: 13, bn: 'গ্রাফ তত্ত্ব', en: 'Graph Theory', slug: '13-graphs' },
    { no: 14, bn: 'গণনার তত্ত্ব', en: 'Theory of Computation', slug: '14-theory-of-computation' },
    { no: 15, bn: 'ডেটা স্ট্রাকচার ও অ্যালগরিদম', en: 'Data Structures and Algorithms', slug: '15-data-structures-and-algorithms', pyq: true },
    { no: 16, bn: 'ডেটাবেস সিস্টেম', en: 'Database Systems', slug: '16-database-systems', pyq: true },
    { no: 17, bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং', en: 'Software Engineering', slug: '17-software-engineering-information-system-design', pyq: true },
    { no: 18, bn: 'অপারেটিং সিস্টেম', en: 'Operating System', slug: '18-operating-system', pyq: true },
    { no: 19, bn: 'কৃত্রিম বুদ্ধিমত্তা', en: 'Artificial Intelligence', slug: '19-artificial-intelligence', pyq: true },
  ],

  /* ---- Footer ---------------------------------------------------------- */
  contact: {
    email: '', // PLACEHOLDER: e.g. 'hello@your-domain.com'; hidden while empty
    facebook: '', // PLACEHOLDER: page URL; hidden while empty
    youtube: '', // PLACEHOLDER: channel URL; hidden while empty
  },
  copyrightName: 'Study Hub',

  /* ======================================================================
   *  TEXT, per language
   * ==================================================================== */
  text: {
    /* ------------------------------ বাংলা ------------------------------ */
    bn: {
      ui: {
        metaTitle: 'Study Hub | সরকারি আইটি চাকরির প্রস্তুতি: BCS, ব্যাংক ও আইসিটি পদ',
        metaDesc: 'সরকারি আইটি চাকরির প্রস্তুতি এক জায়গায়: BCS কম্পিউটার/আইসিটি, ব্যাংকের Assistant Programmer ও Officer (IT), টেলিকম ও সরকারি প্রতিষ্ঠানের আইটি পদের জন্য ১৯টি টেকনিক্যাল বিষয়ের পাঠ, রিভিশন নোট ও বিগত প্রশ্নের সমাধান। অ্যাকাউন্ট খুলে পড়া শুরু করুন।',
        skip: 'মূল অংশে যান',
        brandAria: 'Study Hub, পাতার শুরুতে যান',
        navAria: 'প্রধান',
        navFeatures: 'ফিচার',
        navSubjects: 'বিষয়সমূহ',
        navExams: 'পরীক্ষা',
        navHow: 'যেভাবে কাজ করে',
        navFaq: 'প্রশ্নোত্তর',
        themeToLight: 'লাইট মোডে যান',
        themeToDark: 'ডার্ক মোডে যান',
        langButton: 'EN',
        langAria: 'Switch to English',
        menuOpen: 'মেনু খুলুন',
        menuClose: 'মেনু বন্ধ করুন',
        ctaNav: 'পড়া শুরু করুন',
        signIn: 'সাইন ইন',
        signUp: 'সাইন আপ',
        openHub: 'Study Hub খুলুন',
        heroEyebrow: 'সরকারি আইটি চাকরির প্রস্তুতি',
        heroTitleA: 'আইটি পদের পুরো টেকনিক্যাল সিলেবাস, ',
        heroTitleB: 'এক জায়গায় গোছানো',
        heroLead: 'BCS-এর কম্পিউটার ও আইসিটি পদ, ব্যাংকের Assistant Programmer ও Officer (IT), টেলিকম ও সরকারি প্রতিষ্ঠানের আইটি নিয়োগ পরীক্ষার জন্য ১৯টি বিষয়ের পাঠ, রিভিশন নোট আর বিগত প্রশ্নের সমাধান।',
        heroCta: 'Study Hub-এ পড়া শুরু করুন',
        heroSecondary: 'বিষয়গুলো দেখুন',
        heroNote: 'সহজ সাইন আপ · বাংলা ও ইংরেজি · মোবাইলে পড়ার উপযোগী',
        mockAria: 'Study Hub-এর সাইডবার ও পাঠের পাতার নমুনা',
        mockTitle: 'ডেটাবেস ম্যানেজমেন্ট সিস্টেমের পরিচিতি',
        mockCard: 'মূল বিষয়',
        mockPrev: '← আগের পাঠ',
        mockNext: 'পরের পাঠ →',
        statsAria: 'এক নজরে',
        examsEyebrow: 'কাদের জন্য',
        examsTitle: 'যেসব নিয়োগ পরীক্ষার প্রস্তুতিতে কাজে লাগবে',
        examsDesc: 'বিভিন্ন সরকারি ও রাষ্ট্রায়ত্ত প্রতিষ্ঠানের আইটি পদের টেকনিক্যাল অংশের সিলেবাস প্রায় একই বিষয়গুলো ঘিরে।',
        examsNote: 'Study Hub কোনো নিয়োগকারী প্রতিষ্ঠানের সঙ্গে যুক্ত নয়। সর্বশেষ বিজ্ঞপ্তি ও সিলেবাস সংশ্লিষ্ট প্রতিষ্ঠানের ওয়েবসাইটে মিলিয়ে নিন।',
        subjectsEyebrow: 'বিষয়সমূহ',
        subjectsTitle: 'Study Hub-এর ১৯টি টেকনিক্যাল বিষয়',
        subjectsDesc: 'Study Hub-এর সাইডবারে যে ক্রমে আছে, এখানেও সেই ক্রমে। যেকোনো বিষয়ে চাপ দিয়ে পড়া শুরু করুন।',
        pyqBadge: 'বিগত প্রশ্নের সমাধান',
        featuresEyebrow: 'কেন Study Hub',
        featuresTitle: 'পড়ায় মন দিন, বাকিটা গোছানো আছে',
        howEyebrow: 'যেভাবে কাজ করে',
        howTitle: 'তিন ধাপে শুরু',
        roadmapEyebrow: 'প্রস্তুতির রোডম্যাপ',
        roadmapTitle: 'একটি নমুনা প্রস্তুতি-পথ',
        roadmapDesc: 'এটি একটি পরামর্শমাত্র, কোনো অফিশিয়াল সিলেবাস নয়। আপনার পরীক্ষার বিজ্ঞপ্তি ও হাতে থাকা সময় অনুযায়ী ক্রম বদলে নিন।',
        roadmapStep: 'ধাপ {n}: ',
        faqEyebrow: 'প্রশ্নোত্তর',
        faqTitle: 'সাধারণ প্রশ্ন',
        finalTitle: 'আজই একটি বিষয় দিয়ে শুরু করুন',
        finalDesc: 'প্রতিদিন একটি করে পাঠ শেষ করলেও কয়েক মাসে পুরো টেকনিক্যাল সিলেবাস একবার ঘুরে আসা যায়।',
        finalCta: 'Study Hub খুলুন',
        footerAbout: 'সরকারি আইটি চাকরির টেকনিক্যাল প্রস্তুতির জন্য পাঠ, রিভিশন নোট ও বিগত প্রশ্নের সমাধান। কোনো নিয়োগকারী প্রতিষ্ঠানের সঙ্গে যুক্ত নয়।',
        footerNavAria: 'ফুটার',
        footerPages: 'পাতা',
        footerRoadmap: 'রোডম্যাপ',
        footerContact: 'যোগাযোগ',
        backToTop: 'উপরে ফিরুন',
      },
      // Only verifiable numbers. Recount when content changes.
      stats: [
        { value: '১৯', label: 'টেকনিক্যাল বিষয়' },
        { value: '৯০+', label: 'রিভিশন নোট সেট' }, // counted from public/notes on 2026-10-15
        { value: 'বাংলা + English', label: 'দুই ভাষায় পাঠ' },
        { value: '৭', label: 'বিগত প্রশ্নের সমাধান সেট' },
      ],
      exams: [
        { title: 'BCS', tag: 'কম্পিউটার ও আইসিটি সংশ্লিষ্ট পদ', desc: 'প্রিলিমিনারির কম্পিউটার অংশ এবং টেকনিক্যাল পদের লিখিত পরীক্ষার কারিগরি বিষয়।' },
        { title: 'ব্যাংকের আইটি পদ', tag: 'Assistant Programmer · Officer (IT) · AME', desc: 'বাংলাদেশ ব্যাংক এবং সোনালী, জনতা, অগ্রণী, রূপালীসহ রাষ্ট্রায়ত্ত ব্যাংকের আইটি নিয়োগ।' },
        { title: 'টেলিকম ও আইসিটি', tag: 'BTCL · BTRC · Teletalk · ICT Division', desc: 'নেটওয়ার্কিং, কমিউনিকেশন ও সিস্টেম-ভিত্তিক প্রশ্নের প্রস্তুতি।' },
        { title: 'বিদ্যুৎ, জ্বালানি ও সেবা খাত', tag: 'BREB · Petrobangla · Bangladesh Railway', desc: 'সহকারী প্রোগ্রামার, সহকারী ব্যবস্থাপক (আইটি) ও সমমানের পদ।' },
        { title: 'BUET ও বিশ্ববিদ্যালয়-আয়োজিত পরীক্ষা', tag: 'বিভিন্ন প্রতিষ্ঠানের আইটি নিয়োগ', desc: 'যেসব নিয়োগ পরীক্ষার প্রশ্ন BUET বা অন্য বিশ্ববিদ্যালয় প্রণয়ন করে।' },
        { title: 'NTRCA ও শিক্ষকতা', tag: 'আইসিটি প্রভাষক ও শিক্ষক নিবন্ধন', desc: 'কম্পিউটার ও আইসিটি বিষয়ের শিক্ষক নিবন্ধন ও নিয়োগ পরীক্ষা।' },
      ],
      // icon = key into ICONS in landing.js
      features: [
        { icon: 'door', title: 'এক অ্যাকাউন্টে সব', desc: 'একবার ইমেইল দিয়ে সাইন আপ করলেই সব প্রকাশিত পাঠ, রিভিশন নোট ও বিগত প্রশ্নের সেট খুলে যায়।' },
        { icon: 'sidebar', title: 'সাইডবারে গোছানো সিলেবাস', desc: 'বিষয় → অধ্যায় → পাঠ ক্রমে সাজানো। আগের ও পরের পাঠে এক ক্লিকে যাওয়া যায়, আছে সার্চ।' },
        { icon: 'lang', title: 'বাংলা ও ইংরেজি', desc: 'পাঠগুলো দুই ভাষায় পড়া যায়। টেকনিক্যাল শব্দ ইংরেজিতেই রাখা, যেমনটা পরীক্ষায় আসে।' },
        { icon: 'note', title: 'রিভিশন নোট', desc: 'পাঠভিত্তিক হাতে-লেখা ধাঁচের নোট ও টাইপ করা নোট, PDF হিসেবে ডাউনলোড করা যায়।' },
        { icon: 'history', title: 'বিগত সালের প্রশ্নের সমাধান', desc: 'কয়েকটি বিষয়ে সমাধানসহ বিগত প্রশ্ন, প্রতিটির সঙ্গে কোন পরীক্ষায় এসেছিল তা উল্লেখ করা।' },
        { icon: 'phone', title: 'মোবাইলে স্বচ্ছন্দ', desc: 'ফোনেই পড়ার উপযোগী লেআউট, সঙ্গে ডার্ক ও লাইট মোড।' },
      ],
      steps: [
        { title: 'অ্যাকাউন্ট খুলুন', desc: 'নাম ও ইমেইল দিয়ে সাইন আপ করুন। আগে থেকে অ্যাকাউন্ট থাকলে সাইন ইন করুন।' },
        { title: 'বিষয় ও পাঠ বেছে নিন', desc: 'সাইডবার থেকে বিষয় খুলে প্রথম পাঠ থেকে ধারাবাহিকভাবে পড়ুন।' },
        { title: 'নোট ও বিগত প্রশ্নে ঝালাই', desc: 'পাঠ শেষে রিভিশন নোট দেখুন, তারপর বিগত প্রশ্ন মিলিয়ে নিজেকে যাচাই করুন।' },
      ],
      // A suggestion, not an official syllabus. subjects = numbers from the list above.
      roadmap: [
        { title: 'ভিত্তি তৈরি', desc: 'সংখ্যাপদ্ধতি, লজিক গেট ও কম্পিউটারের গঠন: পরের সব বিষয়ের ভিত্তি।', subjects: [2, 4, 7] },
        { title: 'প্রোগ্রামিং ও অ্যালগরিদম', desc: 'লিখিত পরীক্ষায় কোড, আউটপুট ও কমপ্লেক্সিটির প্রশ্ন এখান থেকে বেশি আসে।', subjects: [10, 11, 15] },
        { title: 'সিস্টেম বিষয়', desc: 'OS, ডেটাবেস (SQL সহ) ও নেটওয়ার্কিং: আইটি পদের MCQ ও লিখিত দুই অংশেই গুরুত্বপূর্ণ।', subjects: [18, 16, 9] },
        { title: 'তত্ত্ব ও উচ্চতর বিষয়', desc: 'গণিত, কম্পিউটেশন তত্ত্ব, সফটওয়্যার ইঞ্জিনিয়ারিং ও AI।', subjects: [12, 14, 17, 19] },
        { title: 'রিভিশন ও অনুশীলন', desc: 'রিভিশন নোট ও বিগত প্রশ্ন দিয়ে দুর্বল অংশ খুঁজে আবার পড়ুন। বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞানের প্রস্তুতি আলাদাভাবে চালিয়ে যান।', subjects: [] },
      ],
      faq: [
        { q: 'Study Hub ব্যবহার করতে কি অ্যাকাউন্ট লাগে?', a: 'হ্যাঁ। পাঠ ও নোট পড়তে একটি Study Hub অ্যাকাউন্ট লাগে: নাম, ইমেইল ও একটি পাসওয়ার্ড দিয়ে সাইন আপ করুন।' },
        // PLACEHOLDER: confirm the pricing statement (both languages) before going live.
        { q: 'এটি কি বিনামূল্যে?', a: 'হ্যাঁ, বর্তমানে Study Hub-এর সব প্রকাশিত পাঠ ও রিভিশন নোট বিনামূল্যে পড়া যায়।' },
        { q: 'কোন কোন পরীক্ষার প্রস্তুতিতে কাজে লাগবে?', a: 'BCS-এর কম্পিউটার ও আইসিটি সংশ্লিষ্ট পদ, ব্যাংকের Assistant Programmer ও Officer (IT), টেলিকম, বিদ্যুৎ ও জ্বালানি খাত এবং অন্যান্য সরকারি প্রতিষ্ঠানের আইটি পদের টেকনিক্যাল অংশের জন্য।' },
        { q: 'কনটেন্ট কি সর্বশেষ সিলেবাস অনুযায়ী?', a: 'বিষয়গুলো সরকারি আইটি নিয়োগ পরীক্ষার প্রচলিত সিলেবাস ও বিগত প্রশ্ন দেখে সাজানো। তবে প্রতিটি পরীক্ষার সিলেবাস আলাদা হতে পারে, তাই আপনার বিজ্ঞপ্তির সিলেবাসের সঙ্গে মিলিয়ে নিন।' },
        { q: 'বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান কি আছে?', a: 'বর্তমানে Study Hub-এ মূলত ১৯টি টেকনিক্যাল বিষয় রয়েছে। সাধারণ অংশগুলোর প্রস্তুতি আলাদাভাবে নিতে হবে।' },
        { q: 'মোবাইলে পড়া বা নোট ডাউনলোড করা যায়?', a: 'হ্যাঁ। পুরো সাইট মোবাইলে পড়ার উপযোগী, আর রিভিশন নোটগুলো PDF হিসেবে ডাউনলোড করা যায়। যে ফোনে PDF সরাসরি খোলে না, সেখানে ডাউনলোড বাটন দেখানো হয়।' },
        { q: 'বিগত সালের প্রশ্ন কোথায় পাব?', a: 'কয়েকটি বিষয়ে (ইলেকট্রনিক্স, নেটওয়ার্কিং, ডেটা স্ট্রাকচার, ডেটাবেস, সফটওয়্যার ইঞ্জিনিয়ারিং, অপারেটিং সিস্টেম, AI) সংশ্লিষ্ট অধ্যায়ে সমাধানসহ বিগত প্রশ্নের নোট আছে। প্রতিটি প্রশ্নের সঙ্গে কোন পরীক্ষায় এসেছিল তা লেখা। আরও বিষয় যোগ হচ্ছে।' },
        { q: 'Study Hub কি চাকরির নিশ্চয়তা দেয়?', a: 'না। Study Hub পড়ার একটি সহায়ক মাধ্যম। কোনো নিয়োগ বা ফলাফলের নিশ্চয়তা দেয় না।' },
      ],
    },

    /* ------------------------------ English ---------------------------- */
    en: {
      ui: {
        metaTitle: 'Study Hub | Govt IT Job Preparation in Bangladesh: BCS, Bank and ICT Posts',
        metaDesc: 'Govt IT job preparation in one place: lessons, revision notes and solved past questions across 19 technical subjects for BCS computer/ICT posts, bank Assistant Programmer and Officer (IT) roles, and IT posts at telecom and government organisations. Sign up and start reading.',
        skip: 'Skip to main content',
        brandAria: 'Study Hub, go to the top of the page',
        navAria: 'Main',
        navFeatures: 'Features',
        navSubjects: 'Subjects',
        navExams: 'Exams',
        navHow: 'How it works',
        navFaq: 'FAQ',
        themeToLight: 'Switch to light mode',
        themeToDark: 'Switch to dark mode',
        langButton: 'বাং',
        langAria: 'বাংলায় দেখুন',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        ctaNav: 'Start studying',
        signIn: 'Sign in',
        signUp: 'Sign up',
        openHub: 'Open Study Hub',
        heroEyebrow: 'Govt IT job preparation',
        heroTitleA: 'The full technical syllabus for IT posts, ',
        heroTitleB: 'organised in one place',
        heroLead: 'Lessons, revision notes and solved past questions across 19 subjects for BCS computer and ICT posts, bank Assistant Programmer and Officer (IT) roles, and IT recruitment exams at telecom and government organisations.',
        heroCta: 'Start studying on Study Hub',
        heroSecondary: 'See the subjects',
        heroNote: 'Quick sign-up · Bangla and English · Works on mobile',
        mockAria: 'A preview of the Study Hub sidebar and lesson page',
        mockTitle: 'Introduction to Database Management Systems',
        mockCard: 'Key points',
        mockPrev: '← Previous',
        mockNext: 'Next →',
        statsAria: 'At a glance',
        examsEyebrow: "Who it's for",
        examsTitle: 'Recruitment exams it helps you prepare for',
        examsDesc: 'The technical syllabus for IT posts at government and state-owned organisations covers largely the same subjects.',
        examsNote: 'Study Hub is not affiliated with any recruiting organisation. Always check the latest circular and syllabus on the organisation’s own website.',
        subjectsEyebrow: 'Subjects',
        subjectsTitle: 'The 19 technical subjects in Study Hub',
        subjectsDesc: 'Listed in the same order as the Study Hub sidebar. Pick any subject to start reading.',
        pyqBadge: 'Solved past questions',
        featuresEyebrow: 'Why Study Hub',
        featuresTitle: 'Focus on studying. The rest is organised for you.',
        howEyebrow: 'How it works',
        howTitle: 'Get started in three steps',
        roadmapEyebrow: 'Preparation roadmap',
        roadmapTitle: 'A sample preparation path',
        roadmapDesc: 'This is a suggestion, not an official syllabus. Adjust the order to your exam circular and the time you have.',
        roadmapStep: 'Step {n}: ',
        faqEyebrow: 'FAQ',
        faqTitle: 'Frequently asked questions',
        finalTitle: 'Start with one subject today',
        finalDesc: 'Even one lesson a day takes you through the whole technical syllabus once within a few months.',
        finalCta: 'Open Study Hub',
        footerAbout: 'Lessons, revision notes and solved past questions for the technical part of govt IT job exams. Not affiliated with any recruiting organisation.',
        footerNavAria: 'Footer',
        footerPages: 'Pages',
        footerRoadmap: 'Roadmap',
        footerContact: 'Contact',
        backToTop: 'Back to top',
      },
      stats: [
        { value: '19', label: 'Technical subjects' },
        { value: '90+', label: 'Revision note sets' },
        { value: 'Bangla + English', label: 'Lessons in two languages' },
        { value: '7', label: 'Solved past-question sets' },
      ],
      exams: [
        { title: 'BCS', tag: 'Computer and ICT posts', desc: 'The computer section of the preliminary exam and the technical subjects of written exams for technical posts.' },
        { title: 'Bank IT posts', tag: 'Assistant Programmer · Officer (IT) · AME', desc: 'IT recruitment at Bangladesh Bank and state-owned banks such as Sonali, Janata, Agrani and Rupali.' },
        { title: 'Telecom and ICT', tag: 'BTCL · BTRC · Teletalk · ICT Division', desc: 'Preparation for networking, communication and systems questions.' },
        { title: 'Power, energy and utilities', tag: 'BREB · Petrobangla · Bangladesh Railway', desc: 'Assistant Programmer, Assistant Manager (IT) and equivalent posts.' },
        { title: 'BUET and university-set exams', tag: 'IT recruitment across organisations', desc: 'Recruitment exams whose questions are set by BUET or another university.' },
        { title: 'NTRCA and teaching', tag: 'ICT lecturer and teacher registration', desc: 'Teacher registration and recruitment exams for computer and ICT subjects.' },
      ],
      features: [
        { icon: 'door', title: 'One account, everything in one place', desc: 'Sign up once with your email to open every published lesson, revision note and past-question set.' },
        { icon: 'sidebar', title: 'Syllabus organised in a sidebar', desc: 'Arranged as subject → chapter → lesson, with one-click previous and next lessons and a search.' },
        { icon: 'lang', title: 'Bangla and English', desc: 'Lessons can be read in both languages, with technical terms kept in English as they appear in exams.' },
        { icon: 'note', title: 'Revision notes', desc: 'Lesson-wise handwritten-style and typed notes, downloadable as PDFs.' },
        { icon: 'history', title: 'Solved past questions', desc: 'Past questions with solutions for several subjects, each naming the exams it was asked in.' },
        { icon: 'phone', title: 'Comfortable on mobile', desc: 'A layout made for reading on a phone, with dark and light modes.' },
      ],
      steps: [
        { title: 'Create an account', desc: 'Sign up with your name and email, or sign in if you already have an account.' },
        { title: 'Pick a subject and lesson', desc: 'Open a subject from the sidebar and read in order from the first lesson.' },
        { title: 'Revise with notes and past questions', desc: 'After each lesson, go through its revision notes, then test yourself with past questions.' },
      ],
      roadmap: [
        { title: 'Build the foundation', desc: 'Number systems, logic gates and how a computer is built: the base for every later subject.', subjects: [2, 4, 7] },
        { title: 'Programming and algorithms', desc: 'Written exams draw many code, output and complexity questions from here.', subjects: [10, 11, 15] },
        { title: 'Systems subjects', desc: 'OS, databases (including SQL) and networking: important in both the MCQ and written parts of IT posts.', subjects: [18, 16, 9] },
        { title: 'Theory and advanced subjects', desc: 'Mathematics, theory of computation, software engineering and AI.', subjects: [12, 14, 17, 19] },
        { title: 'Revision and practice', desc: 'Use revision notes and past questions to find weak areas and reread them. Keep preparing Bangla, English, mathematics and general knowledge separately.', subjects: [] },
      ],
      faq: [
        { q: 'Do I need an account to use Study Hub?', a: 'Yes. Reading the lessons and notes needs a Study Hub account: sign up with your name, email and a password.' },
        { q: 'Is it free?', a: 'Yes. All published lessons and revision notes on Study Hub are currently free to read.' },
        { q: 'Which exams does it help with?', a: 'The technical part of BCS computer and ICT posts, bank Assistant Programmer and Officer (IT) roles, telecom, power and energy sector posts, and IT posts at other government organisations.' },
        { q: 'Is the content up to date with the latest syllabus?', a: 'The subjects follow the usual syllabus and past questions of govt IT recruitment exams. Syllabi differ between exams, so check yours against the syllabus in your circular.' },
        { q: 'Does it cover Bangla, English, mathematics and general knowledge?', a: 'Study Hub currently focuses on 19 technical subjects. Prepare the general sections separately.' },
        { q: 'Can I read on mobile or download the notes?', a: 'Yes. The whole site works on mobile, and revision notes can be downloaded as PDFs. On phones that cannot open PDFs inline, a download button is shown instead.' },
        { q: 'Where are the past questions?', a: 'Several subjects (electronics, networking, data structures, databases, software engineering, operating systems and AI) have a solved past-question note set in their chapter. Every question lists the exams it was asked in. More subjects are being added.' },
        { q: 'Does Study Hub guarantee a job?', a: 'No. Study Hub is a study aid and does not guarantee any recruitment or result.' },
      ],
    },
  },
}
