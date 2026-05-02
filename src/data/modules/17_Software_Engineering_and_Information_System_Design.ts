import type { Module } from '../../types'

const m17: Module = {
  title: "17. Software Engineering & Information System Design",
  titleBn: "১৭. সফটওয়্যার ইঞ্জিনিয়ারিং ও তথ্য সিস্টেম ডিজাইন",
  level: "Advanced",
  lessons: [
    {
      id: "se1",
      title: "Software Engineering Concepts, Paradigms & SDLC Phases",
      titleBn: "সফটওয়্যার ইঞ্জিনিয়ারিং ধারণা, প্যারাডাইম ও SDLC ধাপ",
      content: `📌 SOFTWARE ENGINEERING - CONCEPTS & PARADIGMS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 What is Software Engineering?
Software Engineering (SE) is the systematic approach to design, develop, test, and maintain software using engineering principles.

Goals:
• Deliver high-quality software on time and within budget
• Ensure reliability, maintainability, and scalability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Key Concepts of Software Engineering

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Explanation                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Software Development│ Structured approach from requirements       │
│ Life Cycle (SDLC)   │ to maintenance                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Requirements        │ Gathering, analyzing, documenting needs     │
│ Engineering         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Design              │ Architecture, components, interfaces        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Implementation      │ Writing actual code                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Testing             │ Verifying software works correctly          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Maintenance         │ Updating to fix bugs, improve performance   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Characteristics of Good Software
✓ Correctness: Meets requirements
✓ Reliability: Functions under expected conditions
✓ Efficiency: Uses resources optimally
✓ Maintainability: Easy to modify and enhance
✓ Portability: Works in different environments
✓ Usability: User-friendly interface

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 SOFTWARE ENGINEERING PARADIGMS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Paradigm            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Waterfall Model     │ Sequential: Requirements → Design →         │
│                     │ Implementation → Testing → Maintenance      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Iterative &         │ Build in small increments, adding features  │
│ Incremental         │ each iteration                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Prototyping Model   │ Create prototype to gather feedback first   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Spiral Model        │ Risk-driven + iterative development         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Agile Model         │ Flexible, collaborative, incremental        │
│ (Scrum, Kanban)     │ delivery                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ RAD (Rapid          │ Fast prototyping, minimal planning          │
│ Application Dev)    │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ V-Model             │ Testing phase corresponds to each           │
│                     │ development phase                           │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SDLC PHASES (Software System Development)

┌─────────────────────┬─────────────────────────────────────────────┐
│ Phase               │ Purpose & Activities                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1. Requirement      │ Gather user needs → SRS document            │
│    Analysis         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ 2. System Design    │ Convert requirements into blueprint         │
│                     │ HLD + LLD, UML diagrams                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ 3. Implementation   │ Translate design into actual code           │
│    / Coding         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ 4. Testing          │ Verify correctness, find defects            │
├─────────────────────┼─────────────────────────────────────────────┤
│ 5. Deployment       │ Make software available to users            │
├─────────────────────┼─────────────────────────────────────────────┤
│ 6. Maintenance      │ Fix issues, enhance functionality           │
└─────────────────────┴─────────────────────────────────────────────┘

SDLC Flow Diagram:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│Requirements│ → │  Design  │ → │   Code   │ → │ Testing  │
└──────────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                      │
┌──────────┐    ┌──────────┐                         │
│Maintenance│ ← │Deployment│ ←───────────────────────┘
└──────────┘    └──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 TYPES OF INFORMATION

┌─────────────────────┬─────────────────────────────────────────────┐
│ Classification      │ Types & Examples                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ By Nature           │ Quantitative (numbers): Sales, temperature  │
│                     │ Qualitative (descriptive): Customer reviews │
├─────────────────────┼─────────────────────────────────────────────┤
│ By Time             │ Real-time: Stock ticker                     │
│                     │ Historical: Last month's sales              │
├─────────────────────┼─────────────────────────────────────────────┤
│ By Source           │ Internal: Employee data                     │
│                     │ External: Market research                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ By Purpose          │ Strategic: Business expansion               │
│                     │ Tactical: Resource allocation               │
│                     │ Operational: Daily inventory updates        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ QUALITIES OF GOOD INFORMATION

┌─────────────────────┬─────────────────────────────────────────────┐
│ Quality             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Accuracy            │ Correct and error-free                      │
│ Relevance           │ Pertinent to the decision                   │
│ Completeness        │ Contains all necessary details              │
│ Timeliness          │ Available when needed                       │
│ Reliability         │ From trustworthy sources                    │
│ Understandability   │ Easy to interpret                           │
│ Consistency         │ No contradictions with other data           │
│ Accessibility       │ Easily retrievable                          │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Software Engineering = systematic software development
• SDLC Phases: Requirements → Design → Code → Test → Deploy → Maintain
• Information types: Quantitative/Qualitative, Real-time/Historical, Internal/External, Strategic/Tactical/Operational
• Good information = Accurate, Relevant, Complete, Timely, Reliable`,
      contentBn: `📌 সফটওয়্যার ইঞ্জিনিয়ারিং - ধারণা ও প্যারাডাইম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 সফটওয়্যার ইঞ্জিনিয়ারিং কী?
সফটওয়্যার ইঞ্জিনিয়ারিং (SE) হল ইঞ্জিনিয়ারিং নীতি ব্যবহার করে সফটওয়্যার ডিজাইন, ডেভেলপ, টেস্ট ও মেইনটেইন করার পদ্ধতিগত পদ্ধতি।

লক্ষ্য:
• সময় ও বাজেটের মধ্যে উচ্চ-মানের সফটওয়্যার সরবরাহ
• নির্ভরযোগ্যতা, রক্ষণাবেক্ষণযোগ্যতা ও স্কেলেবিলিটি নিশ্চিত করা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মূল ধারণা

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ ব্যাখ্যা                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ সফটওয়্যার ডেভেলপমেন্ট│ রিকোয়ারমেন্টস থেকে মেইনটেন্যান্স পর্যন্ত │
│ লাইফ সাইকেল (SDLC)  │ কাঠামোবদ্ধ পদ্ধতি                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিকোয়ারমেন্টস      │ প্রয়োজন সংগ্রহ, বিশ্লেষণ, ডকুমেন্টেশন     │
│ ইঞ্জিনিয়ারিং       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডিজাইন              │ আর্কিটেকচার, উপাদান, ইন্টারফেস              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইমপ্লিমেন্টেশন     │ প্রকৃত কোড লেখা                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ টেস্টিং             │ সফটওয়্যার সঠিকভাবে কাজ করে যাচাই           │
├─────────────────────┼─────────────────────────────────────────────┤
│ মেইনটেন্যান্স      │ বাগ ফিক্স, কর্মক্ষমতা উন্নত করতে আপডেট       │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ভালো সফটওয়্যারের বৈশিষ্ট্য
✓ সঠিকতা: রিকোয়ারমেন্টস পূরণ করে
✓ নির্ভরযোগ্যতা: প্রত্যাশিত অবস্থায় কাজ করে
✓ দক্ষতা: সম্পদ সর্বোত্তম ব্যবহার করে
✓ রক্ষণাবেক্ষণযোগ্যতা: পরিবর্তন ও উন্নতি সহজ
✓ পোর্টেবিলিটি: ভিন্ন পরিবেশে কাজ করে
✓ ব্যবহারযোগ্যতা: ব্যবহারকারী-বান্ধব ইন্টারফেস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 সফটওয়্যার ইঞ্জিনিয়ারিং প্যারাডাইম

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্যারাডাইম         │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়াটারফল মডেল    │ ক্রমিক: রিকোয়ারমেন্টস → ডিজাইন →           │
│                     │ ইমপ্লিমেন্টেশন → টেস্টিং → মেইনটেন্যান্স    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইটারেটিভ ও         │ ছোট বৃদ্ধিতে তৈরি, প্রতিটি ইটারেশনে         │
│ ইনক্রিমেন্টাল      │ ফিচার যোগ করে                               │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রোটোটাইপিং মডেল │ প্রতিক্রিয়া সংগ্রহের জন্য প্রোটোটাইপ তৈরি   │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্পাইরাল মডেল     │ ঝুঁকি-চালিত + ইটারেটিভ ডেভেলপমেন্ট          │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাজাইল মডেল      │ নমনীয়, সহযোগিতামূলক, ক্রমবর্ধমান ডেলিভারি  │
│ (স্ক্রাম, কানবান)  │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ RAD (র‍্যাপিড       │ দ্রুত প্রোটোটাইপিং, ন্যূনতম পরিকল্পনা       │
│ অ্যাপ্লিকেশন ডেভ)  │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ V-মডেল             │ টেস্টিং ধাপ প্রতিটি ডেভেলপমেন্ট ধাপের সাথে   │
│                     │ মিলে                                       │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SDLC ধাপ (সফটওয়্যার সিস্টেম ডেভেলপমেন্ট)

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধাপ                 │ উদ্দেশ্য ও কার্যক্রম                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ১. রিকোয়ারমেন্টস   │ ব্যবহারকারীর প্রয়োজন সংগ্রহ → SRS ডকুমেন্ট  │
│    অ্যানালাইসিস     │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ২. সিস্টেম ডিজাইন   │ রিকোয়ারমেন্টসকে ব্লুপ্রিন্টে রূপান্তর       │
│                     │ HLD + LLD, UML ডায়াগ্রাম                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ৩. ইমপ্লিমেন্টেশন  │ ডিজাইনকে প্রকৃত কোডে রূপান্তর                │
│    / কোডিং         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ৪. টেস্টিং         │ সঠিকতা যাচাই, ত্রুটি খুঁজে বের করা           │
├─────────────────────┼─────────────────────────────────────────────┤
│ ৫. ডিপ্লয়মেন্ট    │ সফটওয়্যার ব্যবহারকারীদের জন্য উপলব্ধ করা   │
├─────────────────────┼─────────────────────────────────────────────┤
│ ৬. মেইনটেন্যান্স   │ সমস্যা সমাধান, কার্যকারিতা বৃদ্ধি            │
└─────────────────────┴─────────────────────────────────────────────┘

SDLC প্রবাহ চিত্র:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│রিকোয়ারমেন্টস│ → │ ডিজাইন  │ → │  কোড    │ → │ টেস্টিং  │
└──────────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                      │
┌──────────┐    ┌──────────┐                         │
│মেইনটেন্যান্স│ ← │ডিপ্লয়মেন্ট│ ←───────────────────────┘
└──────────┘    └──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 তথ্যের প্রকার

┌─────────────────────┬─────────────────────────────────────────────┐
│ শ্রেণিবিভাগ        │ প্রকার ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রকৃতি অনুযায়ী   │ পরিমাণগত: বিক্রয়, তাপমাত্রা                 │
│                     │ গুণগত: গ্রাহক পর্যালোচনা                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ সময় অনুযায়ী       │ রিয়েল-টাইম: স্টক টিকার                     │
│                     │ ঐতিহাসিক: গত মাসের বিক্রয়                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ উৎস অনুযায়ী       │ অভ্যন্তরীণ: কর্মচারী ডেটা                   │
│                     │ বাহ্যিক: বাজার গবেষণা                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ উদ্দেশ্য অনুযায়ী   │ কৌশলগত: ব্যবসা সম্প্রসারণ                   │
│                     │ কৌশলগত: সম্পদ বরাদ্দ                        │
│                     │ অপারেশনাল: দৈনিক ইনভেন্টরি আপডেট           │
└─────────────────────┴─────────────────────────────────────────────┘

✨ ভালো তথ্যের গুণাবলী

┌─────────────────────┬─────────────────────────────────────────────┐
│ গুণাবলী             │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ নির্ভুলতা           │ সঠিক ও ত্রুটিমুক্ত                          │
│ প্রাসঙ্গিকতা        │ সিদ্ধান্তের সাথে প্রাসঙ্গিক                 │
│ সম্পূর্ণতা          │ সব প্রয়োজনীয় বিবরণ রয়েছে                 │
│ সময়োপযোগিতা        │ প্রয়োজন হলে উপলব্ধ                        │
│ নির্ভরযোগ্যতা       │ বিশ্বস্ত উৎস থেকে                          │
│ বোধগম্যতা           │ ব্যাখ্যা করা সহজ                           │
│ ধারাবাহিকতা         │ অন্যান্য তথ্যের সাথে দ্বন্দ্ব নেই           │
│ অ্যাক্সেসযোগ্যতা    │ সহজে পুনরুদ্ধারযোগ্য                        │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• সফটওয়্যার ইঞ্জিনিয়ারিং = পদ্ধতিগত সফটওয়্যার ডেভেলপমেন্ট
• SDLC ধাপ: রিকোয়ারমেন্টস → ডিজাইন → কোড → টেস্ট → ডিপ্লয় → মেইনটেন
• তথ্যের প্রকার: পরিমাণগত/গুণগত, রিয়েল-টাইম/ঐতিহাসিক, অভ্যন্তরীণ/বাহ্যিক, কৌশলগত/কৌশলগত/অপারেশনাল
• ভালো তথ্য = নির্ভুল, প্রাসঙ্গিক, সম্পূর্ণ, সময়োপযোগী, নির্ভরযোগ্য`,
      takeaways: [
        "SE applies engineering principles to software development",
        "SDLC has 6 phases: Requirements, Design, Code, Test, Deploy, Maintain",
        "Paradigms: Waterfall, Agile, Spiral, Prototyping, V-Model",
        "Information quality requires accuracy, relevance, completeness, timeliness"
      ],
      takeawaysBn: [
        "SE সফটওয়্যার ডেভেলপমেন্টে ইঞ্জিনিয়ারিং নীতি প্রয়োগ করে",
        "SDLC-তে ৬টি ধাপ: রিকোয়ারমেন্টস, ডিজাইন, কোড, টেস্ট, ডিপ্লয়, মেইনটেন",
        "প্যারাডাইম: ওয়াটারফল, অ্যাজাইল, স্পাইরাল, প্রোটোটাইপিং, V-মডেল",
        "তথ্যের গুণমানের জন্য নির্ভুলতা, প্রাসঙ্গিকতা, সম্পূর্ণতা, সময়োপযোগিতা প্রয়োজন"
      ],
      level: "Advanced"
    },
    {
      id: "se2",
      title: "Project Management, Metrics, Risk & Scheduling",
      titleBn: "প্রজেক্ট ম্যানেজমেন্ট, মেট্রিক্স, ঝুঁকি ও শিডিউলিং",
      content: `📌 PROJECT MANAGEMENT CONCEPTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Definition:
Software Project Management (SPM) is the application of management principles to software development to ensure projects are delivered on time, within budget, and meet quality requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Key Project Management Concepts

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Explanation & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Project             │ Temporary endeavor to create unique product │
│                     │ Example: E-commerce website                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Scope Management    │ Define and control what's included/excluded │
├─────────────────────┼─────────────────────────────────────────────┤
│ Time Management     │ Estimate, schedule, control timelines       │
│                     │ CPM, PERT, Gantt charts                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cost Management     │ Estimating, budgeting, controlling costs    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Quality Management  │ Ensuring functional & non-functional reqs   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Resource Management │ Human resources, tools, infrastructure      │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 SOFTWARE PROCESS & PROJECT METRICS

Definition: Metrics are quantitative measures to assess software processes, quality, and productivity.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Metric Type         │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Product Metrics     │ Attributes of software product              │
│                     │ LOC (Lines of Code), Function Points        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Process Metrics     │ Effectiveness of development process        │
│                     │ Defect density, effort estimation accuracy  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Project Metrics     │ Project progress and performance            │
│                     │ Schedule variance, cost variance            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Quality Metrics     │ Quality aspects of software                 │
│                     │ Defects per KLOC, MTBF                      │
└─────────────────────┴─────────────────────────────────────────────┘

Example: If module has 2000 LOC and 10 defects → defect density = 10/2 = 5 defects/KLOC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SOFTWARE PROJECT PLANNING

Key Activities:
1. Define Objectives: Goals, scope, deliverables
2. Estimate Resources: Team, hardware, software, tools
3. Effort Estimation: Person-hours (COCOMO model)
4. Schedule Development: Gantt chart / PERT chart
5. Risk Planning: Identify risks & mitigation
6. Budgeting: Cost of resources, licenses, infrastructure
7. Staffing Plan: Assign roles

Example Project Plan:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Task                │ Duration │ Resources                       │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Requirements        │ 2 weeks  │ BA Team                         │
│ System Design       │ 3 weeks  │ Designers                       │
│ Coding              │ 6 weeks  │ Developers                      │
│ Testing             │ 3 weeks  │ QA Team                         │
│ Deployment          │ 1 week   │ DevOps                          │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ RISK ANALYSIS AND MANAGEMENT

Definition: Risk = Any event that could negatively affect project objectives.

Steps in Risk Management:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Step                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Risk Identification │ Identify potential risks                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Risk Analysis       │ Evaluate likelihood and impact             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Risk Prioritization │ Rank based on severity                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Risk Mitigation     │ Plan to prevent or reduce risk             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Risk Monitoring     │ Continuously track during project          │
└─────────────────────┴─────────────────────────────────────────────┘

Risk Types:
• Technical: New technology, software bugs
• Project Management: Delays, scope creep
• Organizational: Lack of resources
• External: Regulations, market shifts

Risk Analysis Techniques:
• Qualitative: High/Medium/Low priority
• Quantitative: EMV = Probability × Impact

Example: Server crash probability = 0.1, Impact = $10,000 → EMV = $1,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 PROJECT SCHEDULING AND TRACKING

Definition:
• Scheduling: Defining tasks, duration, sequence, dependencies
• Tracking: Monitoring progress, identifying deviations

Key Scheduling Activities:
1. Task Breakdown (WBS - Work Breakdown Structure)
2. Estimate Duration
3. Sequence Tasks (dependencies)
4. Assign Resources
5. Prepare Schedule (Gantt, PERT/CPM)

Gantt Chart Example:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Task                │ Timeline                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Requirements (2w)   │ [====]                                      │
│ Design (3w)         │     [======]                               │
│ Coding (6w)         │         [============]                     │
│ Testing (3w)        │                 [======]                   │
│ Deployment (1w)     │                      [==]                  │
└─────────────────────┴─────────────────────────────────────────────┘

Tracking Techniques:
• Milestone Tracking: Key deliverables
• Progress Tracking: Actual vs planned
• Earned Value Analysis: EV, PV, AC calculations
• Status Meetings: Daily Scrum, weekly reports

✅ SUMMARY
• Project Management: Planning, organizing, monitoring software projects
• Metrics: LOC, Function Points, Defect Density measure quality
• Risk Management: Identify, analyze, mitigate, monitor
• Scheduling: Gantt charts, WBS, CPM/PERT ensure timely delivery`,
      contentBn: `📌 প্রজেক্ট ম্যানেজমেন্ট ধারণা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 সংজ্ঞা:
সফটওয়্যার প্রজেক্ট ম্যানেজমেন্ট (SPM) হল সফটওয়্যার ডেভেলপমেন্টে ম্যানেজমেন্ট নীতি প্রয়োগ করে নিশ্চিত করা যে প্রকল্পগুলি সময়মতো, বাজেটের মধ্যে এবং মানের প্রয়োজনীয়তা পূরণ করে বিতরণ করা হয়।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 মূল প্রজেক্ট ম্যানেজমেন্ট ধারণা

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ ব্যাখ্যা ও উদাহরণ                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রকল্প             │ অনন্য পণ্য তৈরির অস্থায়ী প্রচেষ্টা         │
│                     │ উদাহরণ: ই-কমার্স ওয়েবসাইট                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ সুযোগ ম্যানেজমেন্ট │ কী অন্তর্ভুক্ত/বহির্ভূত তা সংজ্ঞায়িত ও     │
│                     │ নিয়ন্ত্রণ করে                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ সময় ম্যানেজমেন্ট  │ টাইমলাইন অনুমান, সময়সূচী, নিয়ন্ত্রণ        │
│                     │ CPM, PERT, Gantt চার্ট                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ খরচ ম্যানেজমেন্ট   │ খরচ অনুমান, বাজেট, নিয়ন্ত্রণ                │
├─────────────────────┼─────────────────────────────────────────────┤
│ গুণমান ম্যানেজমেন্ট│ কার্যকরী ও অ-কার্যকরী প্রয়োজনীয়তা নিশ্চিত  │
├─────────────────────┼─────────────────────────────────────────────┤
│ সম্পদ ম্যানেজমেন্ট │ মানবসম্পদ, সরঞ্জাম, অবকাঠামো                │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 সফটওয়্যার প্রক্রিয়া ও প্রকল্প মেট্রিক্স

সংজ্ঞা: মেট্রিক্স হল সফটওয়্যার প্রক্রিয়া, গুণমান ও উৎপাদনশীলতা মূল্যায়নের পরিমাণগত পরিমাপ।

┌─────────────────────┬─────────────────────────────────────────────┐
│ মেট্রিক্স প্রকার    │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ পণ্য মেট্রিক্স      │ সফটওয়্যার পণ্যের বৈশিষ্ট্য                 │
│                     │ LOC (কোডের লাইন), ফাংশন পয়েন্ট             │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রক্রিয়া মেট্রিক্স│ ডেভেলপমেন্ট প্রক্রিয়ার কার্যকারিতা        │
│                     │ ডিফেক্ট ডেনসিটি, প্রচেষ্টা অনুমান নির্ভুলতা │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রকল্প মেট্রিক্স   │ প্রকল্পের অগ্রগতি ও কর্মক্ষমতা              │
│                     │ সময়সূচী বৈচিত্র, খরচ বৈচিত্র               │
├─────────────────────┼─────────────────────────────────────────────┤
│ গুণমান মেট্রিক্স    │ সফটওয়্যারের গুণমানের দিক                  │
│                     │ প্রতি KLOC তে ডিফেক্ট, MTBF                 │
└─────────────────────┴─────────────────────────────────────────────┘

উদাহরণ: মডিউলে 2000 LOC ও 10টি ডিফেক্ট থাকলে → defect density = 10/2 = 5 defects/KLOC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 সফটওয়্যার প্রকল্প পরিকল্পনা

মূল কার্যক্রম:
১. উদ্দেশ্য সংজ্ঞায়িত করুন: লক্ষ্য, সুযোগ, ডেলিভারেবল
২. সম্পদ অনুমান করুন: দল, হার্ডওয়্যার, সফটওয়্যার, সরঞ্জাম
৩. প্রচেষ্টা অনুমান: ব্যক্তি-ঘন্টা (COCOMO মডেল)
৪. সময়সূচী উন্নয়ন: Gantt চার্ট / PERT চার্ট
৫. ঝুঁকি পরিকল্পনা: ঝুঁকি চিহ্নিত ও প্রশমন
৬. বাজেট: সম্পদ, লাইসেন্স, অবকাঠামোর খরচ
৭. স্টাফিং পরিকল্পনা: ভূমিকা বরাদ্দ

প্রকল্প পরিকল্পনার উদাহরণ:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ কাজ                 │ সময়কাল  │ সম্পদ                           │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ রিকোয়ারমেন্টস      │ ২ সপ্তাহ │ বিএ দল                         │
│ সিস্টেম ডিজাইন      │ ৩ সপ্তাহ │ ডিজাইনার                       │
│ কোডিং               │ ৬ সপ্তাহ │ ডেভেলপার                       │
│ টেস্টিং             │ ৩ সপ্তাহ │ কিউএ দল                        │
│ ডিপ্লয়মেন্ট        │ ১ সপ্তাহ │ ডেভঅপস                         │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ ঝুঁকি বিশ্লেষণ ও ম্যানেজমেন্ট

সংজ্ঞা: ঝুঁকি = যে কোনো ঘটনা যা প্রকল্পের উদ্দেশ্যকে নেতিবাচকভাবে প্রভাবিত করতে পারে।

ঝুঁকি ম্যানেজমেন্টের ধাপ:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধাপ                 │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ঝুঁকি সনাক্তকরণ    │ সম্ভাব্য ঝুঁকি চিহ্নিত করুন                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ ঝুঁকি বিশ্লেষণ      │ সম্ভাবনা ও প্রভাব মূল্যায়ন করুন           │
├─────────────────────┼─────────────────────────────────────────────┤
│ ঝুঁকি অগ্রাধিকার    │ তীব্রতার ভিত্তিতে র্যাঙ্ক করুন             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ঝুঁকি প্রশমন        │ ঝুঁকি প্রতিরোধ বা কমানোর পরিকল্পনা        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ঝুঁকি পর্যবেক্ষণ    │ প্রকল্প চলাকালীন ক্রমাগত ট্র্যাক করুন       │
└─────────────────────┴─────────────────────────────────────────────┘

ঝুঁকির প্রকার:
• প্রযুক্তিগত: নতুন প্রযুক্তি, সফটওয়্যার বাগ
• প্রকল্প ম্যানেজমেন্ট: বিলম্ব, সুযোগ বৃদ্ধি
• সাংগঠনিক: সম্পদের অভাব
• বাহ্যিক: নিয়মকানুন, বাজার পরিবর্তন

ঝুঁকি বিশ্লেষণ কৌশল:
• গুণগত: উচ্চ/মধ্যম/নিম্ন অগ্রাধিকার
• পরিমাণগত: EMV = সম্ভাবনা × প্রভাব

উদাহরণ: সার্ভার ক্র্যাশের সম্ভাবনা = 0.1, প্রভাব = $10,000 → EMV = $1,000

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 প্রকল্প সময়সূচী ও ট্র্যাকিং

সংজ্ঞা:
• সময়সূচী: কাজ, সময়কাল, ক্রম, নির্ভরতা সংজ্ঞায়িত করা
• ট্র্যাকিং: অগ্রগতি পর্যবেক্ষণ, বিচ্যুতি চিহ্নিত করা

মূল সময়সূচী কার্যক্রম:
১. কাজ বিভাজন (WBS - ওয়ার্ক ব্রেকডাউন স্ট্রাকচার)
২. সময়কাল অনুমান
৩. কাজ ক্রম নির্ধারণ (নির্ভরতা)
৪. সম্পদ বরাদ্দ
৫. সময়সূচী প্রস্তুত (Gantt, PERT/CPM)

Gantt চার্ট উদাহরণ:
┌─────────────────────┬─────────────────────────────────────────────┐
│ কাজ                 │ সময়রেখা                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিকোয়ারমেন্টস (২স)│ [====]                                      │
│ ডিজাইন (৩স)        │     [======]                               │
│ কোডিং (৬স)         │         [============]                     │
│ টেস্টিং (৩স)       │                 [======]                   │
│ ডিপ্লয়মেন্ট (১স)  │                      [==]                  │
└─────────────────────┴─────────────────────────────────────────────┘

ট্র্যাকিং কৌশল:
• মাইলস্টোন ট্র্যাকিং: মূল ডেলিভারেবল
• অগ্রগতি ট্র্যাকিং: প্রকৃত বনাম পরিকল্পিত
• অার্জিত মূল্য বিশ্লেষণ: EV, PV, AC গণনা
• স্ট্যাটাস মিটিং: দৈনিক স্ক্রাম, সাপ্তাহিক প্রতিবেদন

✅ সারাংশ
• প্রজেক্ট ম্যানেজমেন্ট: সফটওয়্যার প্রকল্পের পরিকল্পনা, সংগঠিত, পর্যবেক্ষণ
• মেট্রিক্স: LOC, ফাংশন পয়েন্ট, ডিফেক্ট ডেনসিটি গুণমান পরিমাপ করে
• ঝুঁকি ম্যানেজমেন্ট: সনাক্তকরণ, বিশ্লেষণ, প্রশমন, পর্যবেক্ষণ
• সময়সূচী: Gantt চার্ট, WBS, CPM/PERT সময়মত ডেলিভারি নিশ্চিত করে`,
      takeaways: [
        "Project management ensures timely, on-budget delivery",
        "Metrics: LOC, Function Points, Defect Density, MTBF",
        "Risk management: Identify, analyze, mitigate, monitor",
        "Scheduling tools: Gantt charts, WBS, CPM/PERT"
      ],
      takeawaysBn: [
        "প্রজেক্ট ম্যানেজমেন্ট সময়মত, বাজেটের মধ্যে ডেলিভারি নিশ্চিত করে",
        "মেট্রিক্স: LOC, ফাংশন পয়েন্ট, ডিফেক্ট ডেনসিটি, MTBF",
        "ঝুঁকি ম্যানেজমেন্ট: সনাক্তকরণ, বিশ্লেষণ, প্রশমন, পর্যবেক্ষণ",
        "সময়সূচী সরঞ্জাম: Gantt চার্ট, WBS, CPM/PERT"
      ],
      level: "Advanced"
    },
    {
      id: "se3",
      title: "Analysis, Modeling, Design & Architecture",
      titleBn: "অ্যানালাইসিস, মডেলিং, ডিজাইন ও আর্কিটেকচার",
      content: `📌 ANALYSIS CONCEPTS AND PRINCIPLES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Definition:
Software Analysis is the process of understanding and specifying what the software should do before design and implementation. Focuses on "what" rather than "how".

Key Principles:
• Correctness: Capture all real requirements accurately
• Consistency: No conflicting requirements
• Completeness: All functional & non-functional requirements captured
• Feasibility: Achievable within constraints
• Traceability: Each requirement traceable to source
• Understandability: Clear for stakeholders & developers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 REQUIREMENT ANALYSIS

Definition: Process of gathering, understanding, documenting, and validating requirements.

Activities:
1. Requirements Elicitation: Interviews, surveys, workshops
2. Requirements Analysis: Classify and prioritize
3. Requirements Specification: SRS document
4. Requirements Validation: Complete, consistent, feasible

Types of Requirements:
• Functional: What system should do (login, search products)
• Non-Functional: Quality attributes (performance, security)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ANALYSIS MODELING

Definition: Abstract representation of system to understand requirements and interactions.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Model               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data Flow Diagram   │ Shows how data moves through system         │
│ (DFD)               │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Use Case Diagram    │ Shows actors and system interactions        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Entity-Relationship │ Visualizes data and relationships           │
│ Diagram (ERD)       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ State Diagram       │ Shows system states and transitions         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗄️ DATA MODELING

Definition: Defines what data is needed and how it is organized.

Types of Data Models:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Model               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Conceptual Model    │ High-level, main entities & relationships   │
│                     │ (ERD)                                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Logical Model       │ Adds attributes, keys (DBMS independent)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Physical Model      │ Actual tables, columns, data types, indexes │
└─────────────────────┴─────────────────────────────────────────────┘

Example (ERD):
Entities: Customer, Product, Order
Relationships: Customer places Order, Order contains Product

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 DESIGN CONCEPTS AND PRINCIPLES

Definition: Transforming requirements into blueprint for implementation.

Key Design Concepts:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Explanation                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Abstraction         │ Focus on essential features, ignore details │
├─────────────────────┼─────────────────────────────────────────────┤
│ Modularity          │ Divide system into manageable modules       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cohesion            │ Degree module performs single task (high ✓) │
├─────────────────────┼─────────────────────────────────────────────┤
│ Coupling            │ Dependency between modules (low ✓)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Information Hiding  │ Hide internal details of modules            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Separation of       │ Each module addresses separate concern      │
│ Concerns            │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ ARCHITECTURAL DESIGN

Definition: Defines overall system structure, components, and their interaction.

Common Architectural Styles:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Style               │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Layered Architecture│ UI Layer → Business Layer → Data Layer      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Client-Server       │ Client requests services from server        │
├─────────────────────┼─────────────────────────────────────────────┤
│ MVC (Model-View-    │ Separates data, UI, and logic               │
│ Controller)         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Event-Driven        │ Components communicate via events           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Microservices       │ Independent services (payment, catalog)     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ USER INTERFACE (UI) DESIGN

Goal: Intuitive, efficient, and pleasant user experience.

UI Design Principles:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Principle           │ Explanation                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Consistency         │ Uniform look and feel across screens        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Simplicity          │ Avoid clutter, easy to understand           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Feedback            │ Provide responses for user actions          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Error Prevention    │ Reduce chances of user mistakes             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Accessibility       │ Usable by all users, including disabled     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 OBJECT-ORIENTED SOFTWARE DEVELOPMENT & DESIGN

Definition: Uses objects, classes, inheritance, polymorphism to model real-world entities.

Key OO Concepts:
• Class: Blueprint for objects
• Object: Instance of a class
• Inheritance: Reuse and extend behavior
• Polymorphism: Same interface, different behavior
• Encapsulation: Hide internal data
• Abstraction: Show only necessary features

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 ITERATIVE DEVELOPMENT & UNIFIED PROCESS (UP)

Definition: Develop software incrementally in repeated cycles, refining each iteration.

Unified Process Phases:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Phase               │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Inception           │ Define project scope & feasibility          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Elaboration         │ Refine requirements and architecture        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Construction        │ Implement the software                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Transition          │ Deploy system to users                      │
└─────────────────────┴─────────────────────────────────────────────┘

Key Points:
• Each iteration produces partial working system
• User feedback incorporated in next iteration
• Reduces risk by early detection of design flaws

✅ SUMMARY
• Analysis: Understanding "what" system should do
• Modeling: DFD, Use Cases, ERD for visualization
• Design: Abstraction, modularity, low coupling, high cohesion
• Architecture: Layered, MVC, Microservices
• UI Design: Consistent, simple, accessible
• OOD: Classes, objects, inheritance, polymorphism
• UP: Inception → Elaboration → Construction → Transition`,
      contentBn: `📌 অ্যানালাইসিস ধারণা ও নীতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 সংজ্ঞা:
সফটওয়্যার অ্যানালাইসিস হল ডিজাইন ও ইমপ্লিমেন্টেশনের আগে সফটওয়্যারটি কী করা উচিত তা বোঝার এবং নির্দিষ্ট করার প্রক্রিয়া। "কী" এর উপর ফোকাস করে, "কিভাবে" নয়।

মূল নীতি:
• সঠিকতা: সব বাস্তব প্রয়োজনীয়তা সঠিকভাবে ধারণ করা
• ধারাবাহিকতা: কোনো বিরোধপূর্ণ প্রয়োজনীয়তা নেই
• সম্পূর্ণতা: সব কার্যকরী ও অ-কার্যকরী প্রয়োজনীয়তা ধারণ করা
• সম্ভাব্যতা: সীমাবদ্ধতার মধ্যে অর্জনযোগ্য
• ট্রেসেবিলিটি: প্রতিটি প্রয়োজনীয়তা উৎসে ট্রেসযোগ্য
• বোধগম্যতা: স্টেকহোল্ডার ও ডেভেলপারদের জন্য পরিষ্কার

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 রিকোয়ারমেন্ট অ্যানালাইসিস

সংজ্ঞা: প্রয়োজনীয়তা সংগ্রহ, বোঝা, ডকুমেন্ট ও বৈধকরণের প্রক্রিয়া।

কার্যক্রম:
১. প্রয়োজনীয়তা আহরণ: ইন্টারভিউ, জরিপ, কর্মশালা
২. প্রয়োজনীয়তা বিশ্লেষণ: শ্রেণিবদ্ধ ও অগ্রাধিকার
৩. প্রয়োজনীয়তা স্পেসিফিকেশন: SRS ডকুমেন্ট
৪. প্রয়োজনীয়তা বৈধকরণ: সম্পূর্ণ, ধারাবাহিক, সম্ভাব্য

প্রয়োজনীয়তার প্রকার:
• কার্যকরী: সিস্টেম কী করা উচিত (লগইন, পণ্য অনুসন্ধান)
• অ-কার্যকরী: গুণমান বৈশিষ্ট্য (কর্মক্ষমতা, নিরাপত্তা)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 অ্যানালাইসিস মডেলিং

সংজ্ঞা: প্রয়োজনীয়তা ও মিথস্ক্রিয়া বোঝার জন্য সিস্টেমের বিমূর্ত উপস্থাপনা।

┌─────────────────────┬─────────────────────────────────────────────┐
│ মডেল                │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেটা ফ্লো ডায়াগ্রাম│ সিস্টেমের মাধ্যমে কীভাবে ডেটা চলে তা দেখায়  │
│ (DFD)               │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউজ কেস ডায়াগ্রাম  │ অভিনেতা ও সিস্টেম মিথস্ক্রিয়া দেখায়        │
├─────────────────────┼─────────────────────────────────────────────┤
│ এন্টিটি-রিলেশনশিপ  │ ডেটা ও সম্পর্ক কল্পনা করে                   │
│ ডায়াগ্রাম (ERD)    │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্টেট ডায়াগ্রাম    │ সিস্টেম অবস্থা ও পরিবর্তন দেখায়             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗄️ ডেটা মডেলিং

সংজ্ঞা: কী ডেটা প্রয়োজন এবং কীভাবে সংগঠিত হবে তা সংজ্ঞায়িত করে।

ডেটা মডেলের প্রকার:
┌─────────────────────┬─────────────────────────────────────────────┐
│ মডেল                │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ কনসেপচুয়াল মডেল  │ উচ্চ-স্তরীয়, প্রধান সত্তা ও সম্পর্ক (ERD)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ লজিক্যাল মডেল      │ বৈশিষ্ট্য, কী যোগ করে (DBMS স্বাধীন)         │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফিজিক্যাল মডেল     │ প্রকৃত টেবিল, কলাম, ডেটা টাইপ, সূচী          │
└─────────────────────┴─────────────────────────────────────────────┘

উদাহরণ (ERD):
সত্তা: গ্রাহক, পণ্য, অর্ডার
সম্পর্ক: গ্রাহক অর্ডার দেয়, অর্ডারে পণ্য থাকে

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 ডিজাইন ধারণা ও নীতি

সংজ্ঞা: ইমপ্লিমেন্টেশনের জন্য ব্লুপ্রিন্টে প্রয়োজনীয়তা রূপান্তর।

মূল ডিজাইন ধারণা:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ ব্যাখ্যা                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাবস্ট্রাকশন     │ অপরিহার্য বৈশিষ্ট্যের উপর ফোকাস, বিবরণ উপেক্ষা│
├─────────────────────┼─────────────────────────────────────────────┤
│ মডুলারিটি          │ সিস্টেমকে পরিচালনাযোগ্য মডিউলে ভাগ করা       │
├─────────────────────┼─────────────────────────────────────────────┤
│ কোহিশন             │ মডিউল একক কাজ করার মাত্রা (উচ্চ ✓)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ কাপলিং             │ মডিউলের মধ্যে নির্ভরতা (নিম্ন ✓)             │
├─────────────────────┼─────────────────────────────────────────────┤
│ তথ্য গোপনকরণ       │ মডিউলের অভ্যন্তরীণ বিবরণ লুকানো              │
├─────────────────────┼─────────────────────────────────────────────┤
│ উদ্বেগ পৃথকীকরণ    │ প্রতিটি মডিউল পৃথক উদ্বেগ সমাধান করে          │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ আর্কিটেকচারাল ডিজাইন

সংজ্ঞা: সামগ্রিক সিস্টেম কাঠামো, উপাদান ও তাদের মিথস্ক্রিয়া সংজ্ঞায়িত করে।

সাধারণ আর্কিটেকচারাল স্টাইল:

┌─────────────────────┬─────────────────────────────────────────────┐
│ স্টাইল               │ বর্ণনা ও উদাহরণ                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ লেয়ার্ড আর্কিটেকচার│ UI লেয়ার → বিজনেস লেয়ার → ডেটা লেয়ার      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্লায়েন্ট-সার্ভার  │ ক্লায়েন্ট সার্ভার থেকে পরিষেবা চায়         │
├─────────────────────┼─────────────────────────────────────────────┤
│ MVC (মডেল-ভিউ-      │ ডেটা, UI ও লজিক পৃথক করে                   │
│ কন্ট্রোলার)        │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইভেন্ট-চালিত       │ উপাদানগুলি ইভেন্টের মাধ্যমে যোগাযোগ করে     │
├─────────────────────┼─────────────────────────────────────────────┤
│ মাইক্রোসার্ভিসেস   │ স্বাধীন পরিষেবা (পেমেন্ট, ক্যাটালগ)         │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• অ্যানালাইসিস: সিস্টেম "কী" করা উচিত তা বোঝা
• মডেলিং: DFD, ইউজ কেস, ERD ভিজুয়ালাইজেশনের জন্য
• ডিজাইন: অ্যাবস্ট্রাকশন, মডুলারিটি, নিম্ন কাপলিং, উচ্চ কোহিশন
• আর্কিটেকচার: লেয়ার্ড, MVC, মাইক্রোসার্ভিসেস
• UI ডিজাইন: ধারাবাহিক, সরল, অ্যাক্সেসযোগ্য
• OOD: ক্লাস, অবজেক্ট, ইনহেরিটেন্স, পলিমরফিজম
• UP: ইনসেপশন → এলাবরেশন → কনস্ট্রাকশন → ট্রানজিশন`,
      takeaways: [
        "Analysis defines 'what' system should do",
        "Data Modeling: Conceptual → Logical → Physical",
        "Design principles: Low coupling, high cohesion",
        "Architecture styles: Layered, MVC, Microservices"
      ],
      takeawaysBn: [
        "অ্যানালাইসিস সিস্টেম 'কী' করা উচিত তা সংজ্ঞায়িত করে",
        "ডেটা মডেলিং: কনসেপচুয়াল → লজিক্যাল → ফিজিক্যাল",
        "ডিজাইন নীতি: নিম্ন কাপলিং, উচ্চ কোহিশন",
        "আর্কিটেকচার স্টাইল: লেয়ার্ড, MVC, মাইক্রোসার্ভিসেস"
      ],
      level: "Advanced"
    },
    {
      id: "se4",
      title: "Waterfall, Inception, Use Cases, UML & OO Design",
      titleBn: "ওয়াটারফল, ইনসেপশন, ইউজ কেস, UML ও OO ডিজাইন",
      content: `📌 SEQUENTIAL WATERFALL LIFE CYCLE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Waterfall Model: Linear and sequential software development life cycle. Each phase must be completed before the next begins.

Phases:
Requirements → Design → Implementation → Testing → Deployment → Maintenance

Characteristics:
• Linear and rigid: No overlap between phases
• Documentation-heavy: Each phase produces formal deliverables
• Best for: Well-understood projects with fixed requirements

Advantages: Simple, easy to manage, clear milestones
Disadvantages: Inflexible to changes, late defect detection

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INCEPTION PHASE (Unified Process)

Definition: First phase of iterative development (Unified Process, RUP). Purpose: Determine project scope, feasibility, and high-level requirements.

Key Activities:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Activity            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Stakeholder ID      │ Identify users, clients, sponsors          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Requirement         │ Collect high-level requirements             │
│ Elicitation         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Feasibility Study   │ Technical, operational, financial viability │
├─────────────────────┼─────────────────────────────────────────────┤
│ Initial Risk        │ Identify potential project risks           │
│ Assessment          │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ High-Level Use Cases│ Define main system interactions             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Project Estimation  │ Rough cost, time, resource estimates        │
└─────────────────────┴─────────────────────────────────────────────┘

Outputs: Vision document, initial use cases, risk list, rough plan

Comparison: Waterfall vs Inception
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ Waterfall Requirements│ Inception Phase      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Scope               │ Full detailed        │ High-level only      │
│ Flexibility         │ Rigid                │ Flexible             │
│ Deliverables        │ Complete SRS         │ Vision, initial cases│
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 USE CASE MODEL FOR REQUIREMENT WRITING

Definition: Use case describes how an actor interacts with the system to achieve a goal.

Components:
• Actor: User or external system
• Use Case: Specific goal or task
• Precondition: What must be true before
• Postcondition: What will be true after
• Main Flow: Normal sequence of events
• Alternative Flows: Exceptions or variations

Example: "Place Order" Use Case
┌─────────────────────────────────────────────────────────────────┐
│ Use Case: Place Order                                           │
│ Actor: Customer                                                 │
│ Precondition: Customer logged in, cart has items                │
│ Main Flow:                                                      │
│ 1. Customer clicks "Checkout"                                   │
│ 2. System displays order summary                                │
│ 3. Customer enters payment details                              │
│ 4. System processes payment                                     │
│ 5. System confirms order                                        │
│ Postcondition: Order created, payment processed                 │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ELABORATION: SYSTEM SEQUENCE DIAGRAM (SSD)

Definition: Shows events between actors and system over time.

Example SSD - Place Order:
┌─────────┐                                    ┌─────────┐
│ Customer│                                    │ System  │
└────┬────┘                                    └────┬────┘
     │ 1. enterOrderDetails()                      │
     │────────────────────────────────────────────>│
     │                                              │
     │ 2. makePayment(details)                      │
     │────────────────────────────────────────────>│
     │                                              │
     │ 3. orderConfirmed(orderID)                   │
     │<────────────────────────────────────────────│
     │                                              │
     │ 4. displayOrderSummary()                     │
     │<────────────────────────────────────────────│
     │                                              │

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ DOMAIN MODEL & VISUALIZING CONCEPT CLASSES

Domain Model: Conceptual representation of real-world concepts (classes) and their relationships.

Example Domain Model (Online Shopping):
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Customer   │    │   Order     │    │   Product   │
├─────────────┤    ├─────────────┤    ├─────────────┤
│ -name       │    │ -orderID    │    │ -name       │
│ -email      │    │ -date       │    │ -price      │
│ -address    │    │ -status     │    │ -sku        │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       │ 1                │ *                │ *
       └──────────────────┼──────────────────┘
                          │
                    ┌─────┴─────┐
                    │ OrderLine │
                    ├───────────┤
                    │ -quantity │
                    │ -subtotal │
                    └───────────┘

Concept Classes: Customer, Order, Product, OrderLine, Payment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 UML DIAGRAMS OVERVIEW

UML (Unified Modeling Language) provides standard way to visualize system design.

Structural Diagrams (what):
• Class Diagram - classes & relationships
• Object Diagram - runtime instances
• Component Diagram - modules
• Deployment Diagram - hardware mapping

Behavioral Diagrams (how):
• Use Case Diagram - actors & interactions
• Sequence Diagram - time-ordered messages
• Collaboration/Communication Diagram - object links
• Activity Diagram - workflow
• State Diagram - states & transitions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 INTERACTION & COLLABORATION DIAGRAMS

Sequence Diagram (Time Focus):
┌────────┐  ┌────────┐  ┌────────┐  ┌────────────┐
│Customer│  │  Cart  │  │ Order  │  │ PaymentSys │
└───┬────┘  └───┬────┘  └───┬────┘  └─────┬──────┘
    │1: addItem()│           │             │
    │───────────>│           │             │
    │2: checkout()           │             │
    │───────────────────────>│             │
    │           │3: createOrder()          │
    │           │───────────>│             │
    │           │            │4: makePayment()
    │           │            │────────────>│
    │           │            │5: confirmed │
    │           │            │<────────────│
    │6: orderConfirmed        │             │
    │<────────────────────────│             │

Collaboration Diagram (Relationship Focus):
[Customer] ──1: addItem()──→ [Cart]
    │                           │
    │2: checkout()              │3: createOrder()
    ↓                           ↓
[Order] ←─────────────────── [Cart]
    │
    │4: makePayment()
    ↓
[PaymentSystem]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 DESIGNING OBJECTS WITH RESPONSIBILITIES

In OO Design: Responsibility = what an object knows and does.

Types of Responsibilities:
• Knowing: Knowledge of attributes and related objects
• Doing: Actions/behaviors (methods)

Example - Online Shopping Responsibilities:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Class               │ Responsibilities                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Customer            │ Knows: name, email, cart                   │
│                     │ Does: addToCart(), checkout()              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cart                │ Knows: list of products                    │
│                     │ Does: calculateTotal(), createOrder()      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Order               │ Knows: orderID, products, payment          │
│                     │ Does: confirm(), generateInvoice()         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Payment             │ Knows: method, amount                      │
│                     │ Does: processTransaction()                 │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Waterfall: Sequential phases, rigid, good for fixed requirements
• Inception: First UP phase for scope & feasibility
• Use Cases: Describe actor-system interactions
• Domain Model: Conceptual classes and relationships
• UML: Standard diagrams for software design
• Sequence/Collaboration: Show object interactions
• Responsibilities: What objects know and do`,
      contentBn: `📌 সিকোয়েনশিয়াল ওয়াটারফল লাইফ সাইকেল

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ওয়াটারফল মডেল: রৈখিক ও ক্রমিক সফটওয়্যার ডেভেলপমেন্ট লাইফ সাইকেল। পরবর্তী ধাপ শুরু করার আগে প্রতিটি ধাপ সম্পূর্ণ করতে হবে।

ধাপ:
রিকোয়ারমেন্টস → ডিজাইন → ইমপ্লিমেন্টেশন → টেস্টিং → ডিপ্লয়মেন্ট → মেইনটেন্যান্স

বৈশিষ্ট্য:
• রৈখিক ও কঠোর: ধাপের মধ্যে ওভারল্যাপ নেই
• ডকুমেন্টেশন-ভারী: প্রতিটি ধাপ আনুষ্ঠানিক ডেলিভারেবল তৈরি করে
• উপযোগী: স্থির প্রয়োজনীয়তা সহ সু-বোঝাপড়া প্রকল্পের জন্য

সুবিধা: সরল, পরিচালনা সহজ, পরিষ্কার মাইলস্টোন
অসুবিধা: পরিবর্তনে অনমনীয়, দেরিতে ত্রুটি সনাক্তকরণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ইনসেপশন ফেজ (ইউনিফাইড প্রসেস)

সংজ্ঞা: ইটারেটিভ ডেভেলপমেন্টের প্রথম ধাপ (ইউনিফাইড প্রসেস, RUP)। উদ্দেশ্য: প্রকল্পের সুযোগ, সম্ভাব্যতা ও উচ্চ-স্তরের প্রয়োজনীয়তা নির্ধারণ।

মূল কার্যক্রম:

┌─────────────────────┬─────────────────────────────────────────────┐
│ কার্যক্রম           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্টেকহোল্ডার সনাক্ত │ ব্যবহারকারী, ক্লায়েন্ট, স্পনসর চিহ্নিত করুন│
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রয়োজনীয়তা আহরণ │ উচ্চ-স্তরের প্রয়োজনীয়তা সংগ্রহ করুন        │
├─────────────────────┼─────────────────────────────────────────────┤
│ সম্ভাব্যতা অধ্যয়ন  │ প্রযুক্তিগত, কার্যক্ষম, আর্থিক সম্ভাব্যতা   │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রাথমিক ঝুঁকি      │ সম্ভাব্য প্রকল্প ঝুঁকি চিহ্নিত করুন         │
│ মূল্যায়ন           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ উচ্চ-স্তরের ইউজ    │ প্রধান সিস্টেম মিথস্ক্রিয়া সংজ্ঞায়িত করুন  │
│ কেস                │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রকল্প অনুমান     │ মোটামুটি খরচ, সময়, সম্পদ অনুমান             │
└─────────────────────┴─────────────────────────────────────────────┘

আউটপুট: ভিশন ডকুমেন্ট, প্রাথমিক ইউজ কেস, ঝুঁকি তালিকা, মোটামুটি পরিকল্পনা

তুলনা: ওয়াটারফল বনাম ইনসেপশন
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ দিক                 │ ওয়াটারফল রিকোয়ারমেন্টস│ ইনসেপশন ফেজ        │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ সুযোগ               │ সম্পূর্ণ বিস্তারিত   │ শুধু উচ্চ-স্তরীয়    │
│ নমনীয়তা            │ কঠোর                │ নমনীয়               │
│ ডেলিভারেবল         │ সম্পূর্ণ SRS         │ ভিশন, প্রাথমিক কেস  │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 রিকোয়ারমেন্ট রাইটিংয়ের জন্য ইউজ কেস মডেল

সংজ্ঞা: ইউজ কেস বর্ণনা করে কিভাবে একজন অভিনেতা একটি লক্ষ্য অর্জনের জন্য সিস্টেমের সাথে কাজ করে।

উপাদান:
• অভিনেতা: ব্যবহারকারী বা বাহ্যিক সিস্টেম
• ইউজ কেস: নির্দিষ্ট লক্ষ্য বা কাজ
• পূর্বশর্ত: আগে কী সত্য হতে হবে
• পরবর্তী শর্ত: পরে কী সত্য হবে
• মূল প্রবাহ: ঘটনার স্বাভাবিক ক্রম
• বিকল্প প্রবাহ: ব্যতিক্রম বা তারতম্য

উদাহরণ: "অর্ডার প্লেস" ইউজ কেস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 UML ডায়াগ্রাম ওভারভিউ

UML (ইউনিফাইড মডেলিং ল্যাংগুয়েজ) সিস্টেম ডিজাইন কল্পনা করার মানক উপায় প্রদান করে।

স্ট্রাকচারাল ডায়াগ্রাম (কী):
• ক্লাস ডায়াগ্রাম - ক্লাস ও সম্পর্ক
• অবজেক্ট ডায়াগ্রাম - রানটাইম ইনস্ট্যান্স
• কম্পোনেন্ট ডায়াগ্রাম - মডিউল
• ডিপ্লয়মেন্ট ডায়াগ্রাম - হার্ডওয়্যার ম্যাপিং

বিহেভিয়ারাল ডায়াগ্রাম (কিভাবে):
• ইউজ কেস ডায়াগ্রাম - অভিনেতা ও মিথস্ক্রিয়া
• সিকোয়েন্স ডায়াগ্রাম - সময়-ক্রমিক বার্তা
• কলাবোরেশন ডায়াগ্রাম - অবজেক্ট লিঙ্ক
• অ্যাক্টিভিটি ডায়াগ্রাম - কর্মপ্রবাহ
• স্টেট ডায়াগ্রাম - অবস্থা ও পরিবর্তন

✅ সারাংশ
• ওয়াটারফল: ক্রমিক ধাপ, কঠোর, স্থির প্রয়োজনীয়তার জন্য ভাল
• ইনসেপশন: সুযোগ ও সম্ভাব্যতার জন্য প্রথম UP ধাপ
• ইউজ কেস: অভিনেতা-সিস্টেম মিথস্ক্রিয়া বর্ণনা করে
• ডোমেন মডেল: কনসেপচুয়াল ক্লাস ও সম্পর্ক
• UML: সফটওয়্যার ডিজাইনের জন্য মানক ডায়াগ্রাম
• সিকোয়েন্স/কলাবোরেশন: অবজেক্ট মিথস্ক্রিয়া দেখায়
• দায়িত্ব: অবজেক্ট কী জানে ও করে`,
      takeaways: [
        "Waterfall: sequential, rigid, good for fixed requirements",
        "Inception: define scope and feasibility",
        "Use Cases describe actor-system interactions",
        "UML provides standard diagrams for software design"
      ],
      takeawaysBn: [
        "ওয়াটারফল: ক্রমিক, কঠোর, স্থির প্রয়োজনীয়তার জন্য ভাল",
        "ইনসেপশন: সুযোগ ও সম্ভাব্যতা সংজ্ঞায়িত করে",
        "ইউজ কেস অভিনেতা-সিস্টেম মিথস্ক্রিয়া বর্ণনা করে",
        "UML সফটওয়্যার ডিজাইনের জন্য মানক ডায়াগ্রাম প্রদান করে"
      ],
      level: "Advanced"
    },
    {
      id: "se5",
      title: "GRASP Patterns, DCD, Testing Strategies",
      titleBn: "GRASP প্যাটার্ন, DCD, টেস্টিং কৌশল",
      content: `📌 GRASP PATTERNS (General Responsibility Assignment Software Patterns)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 GRASP: Guidelines to assign responsibilities to objects for maintainable, reusable software.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ INFORMATION EXPERT

Principle: Assign responsibility to the class that has the necessary information.

Example: Invoice should calculate totalAmount() because it knows its LineItems.

Java Code:
┌─────────────────────────────────────────────────────────────────┐
│ class LineItem {                                                │
│     Product product;                                            │
│     int quantity;                                               │
│     double getSubTotal() { return product.price * quantity; }   │
│ }                                                               │
│ class Invoice {                                                 │
│     List<LineItem> items;                                       │
│     double getTotal() {                                         │
│         return items.stream().mapToDouble(LineItem::getSubTotal)│
│                      .sum();                                    │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2️⃣ CREATOR

Principle: Class that contains or aggregates another should create it.

Example: Cart creates Order objects.

Java Code:
┌─────────────────────────────────────────────────────────────────┐
│ class Cart {                                                    │
│     List<Product> products = new ArrayList<>();                 │
│     Order createOrder() {                                       │
│         return new Order(products);                             │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3️⃣ LOW COUPLING

Principle: Minimize dependencies between classes for reusability and flexibility.

Bad (High Coupling):
class Customer {
    void saveToDatabase() { /* direct DB access */ }
}

Good (Low Coupling):
class CustomerRepository {
    void save(Customer c) { /* DB logic here */ }
}
class Customer {
    String name;  // No DB logic
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4️⃣ HIGH COHESION

Principle: Each class should focus on a single purpose.

Bad (Low Cohesion - God Class):
class CustomerManager {
    // handles shopping, payment, order, email, database...
}

Good (High Cohesion):
class Customer { /* only customer data */ }
class Cart { /* only cart operations */ }
class Payment { /* only payment processing */ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 CREATING DESIGN CLASS DIAGRAMS (DCD)

Design Class Diagram extends UML Class Diagram with responsibilities.

Example DCD (Online Shopping):
┌──────────────────┐     ┌──────────────────┐
│    Customer      │     │     Product      │
├──────────────────┤     ├──────────────────┤
│ - name: String   │     │ - name: String   │
│ - email: String  │     │ - price: double  │
├──────────────────┤     └────────┬─────────┘
│ + checkout()     │              │
│ + addToCart()    │              │
└────────┬─────────┘              │
         │                        │
         ↓                        ↓
┌──────────────────┐     ┌──────────────────┐
│      Cart        │     │      Order       │
├──────────────────┤     ├──────────────────┤
│ - products: List │     │ - orderID: int   │
├──────────────────┤     │ - status: String │
│ + addProduct()   │     ├──────────────────┤
│ + calculateTotal()│    │ + confirm()      │
│ + createOrder()  │     │ + total()        │
└──────────────────┘     └──────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 MAPPING DESIGN TO CODE

DCD → Java Implementation:

class Customer {
    String name, email;
    Cart cart = new Cart();
    
    void checkout() {
        Order order = cart.createOrder();
        order.confirm();
    }
}

class Cart {
    List<Product> products = new ArrayList<>();
    
    void addProduct(Product p) { products.add(p); }
    double calculateTotal() { /* sum prices */ }
    Order createOrder() { return new Order(products); }
}

class Order {
    List<Product> products;
    Order(List<Product> prods) { this.products = prods; }
    double total() { return products.stream().mapToDouble(p->p.price).sum(); }
    void confirm() { System.out.println("Order confirmed. Total: " + total()); }
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 SOFTWARE TESTING: WHITE BOX & BLACK BOX

Definition: Software Testing evaluates software to ensure it meets requirements and is defect-free.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 WHITE BOX TESTING

Definition: Tests internal structure and logic of code. Tester knows program internals.

Focus: Control flow, loops, branches, conditions
Coverage: Statement, Branch, Path

Techniques:
• Statement Coverage: Each line executes at least once
• Branch Coverage: Each decision outcome executes
• Path Coverage: All execution paths tested

Example Java:
int findMax(int a, int b, int c) {
    if(a > b && a > c) return a;
    else if(b > c) return b;
    else return c;
}

White Box Tests:
• Case 1: a largest (10,5,3)
• Case 2: b largest (3,8,4)
• Case 3: c largest (2,6,9)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 BLACK BOX TESTING

Definition: Tests functionality without knowing internal code. Focus on inputs and outputs.

Techniques:
• Equivalence Partitioning: Divide input into valid/invalid classes
• Boundary Value Analysis (BVA): Test at boundaries
• Cause-Effect Graphing: Map conditions to outcomes

Example (Age 18-60):
Equivalence classes: <18 (invalid), 18-60 (valid), >60 (invalid)
Test Cases: 17, 18, 30, 60, 61

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 BASIS PATH TESTING (White Box)

Definition: Uses Control Flow Graph (CFG) to design test cases covering all independent paths.

Steps:
1. Draw CFG
2. Compute Cyclomatic Complexity: V(G) = E - N + 2
3. Identify independent paths
4. Design test cases

Example (if-else nested):
Cyclomatic Complexity = 4 → Need 4 test cases

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 TESTING FOR SPECIALIZED ENVIRONMENTS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Environment         │ Special Considerations                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Real-time Systems   │ Timing constraints, stress, response time  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distributed Systems │ Network latency, synchronization, fault    │
│                     │ tolerance                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Web Applications    │ Security (SQL Injection, XSS), browser     │
│                     │ compatibility                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mobile Apps         │ Device variety, screen sizes, network      │
│                     │ conditions                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Embedded Systems    │ Limited resources (CPU, memory), real-world│
│                     │ signals                                    │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• GRASP: Information Expert, Creator, Low Coupling, High Cohesion
• DCD: UML extension showing class responsibilities
• White Box: Tests internal code structure
• Black Box: Tests functionality without code knowledge
• Basis Path: Uses CFG and cyclomatic complexity
• Specialized testing: Real-time, distributed, web, mobile, embedded`,
      contentBn: `📌 GRASP প্যাটার্ন (জেনারেল রেসপন্সিবিলিটি অ্যাসাইনমেন্ট সফটওয়্যার প্যাটার্ন)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 GRASP: রক্ষণাবেক্ষণযোগ্য, পুনর্ব্যবহারযোগ্য সফটওয়্যারের জন্য অবজেক্টে দায়িত্ব বরাদ্দের নির্দেশিকা।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

১️⃣ ইনফরমেশন এক্সপার্ট

নীতি: প্রয়োজনীয় তথ্য আছে এমন ক্লাসে দায়িত্ব বরাদ্দ করুন।

উদাহরণ: ইনভয়েসের calculateTotal() হওয়া উচিত কারণ এটি তার লাইনআইটেম জানে।

জাভা কোড:
┌─────────────────────────────────────────────────────────────────┐
│ class LineItem {                                                │
│     Product product;                                            │
│     int quantity;                                               │
│     double getSubTotal() { return product.price * quantity; }   │
│ }                                                               │
│ class Invoice {                                                 │
│     List<LineItem> items;                                       │
│     double getTotal() {                                         │
│         return items.stream().mapToDouble(LineItem::getSubTotal)│
│                      .sum();                                    │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

২️⃣ ক্রিয়েটর

নীতি: যে ক্লাস অন্যকে ধারণ করে বা একত্রিত করে তাকে তৈরি করা উচিত।

উদাহরণ: কার্ট অর্ডার অবজেক্ট তৈরি করে।

জাভা কোড:
┌─────────────────────────────────────────────────────────────────┐
│ class Cart {                                                    │
│     List<Product> products = new ArrayList<>();                 │
│     Order createOrder() {                                       │
│         return new Order(products);                             │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

৩️⃣ লো কাপলিং

নীতি: পুনর্ব্যবহারযোগ্যতা ও নমনীয়তার জন্য ক্লাসের মধ্যে নির্ভরতা কমিয়ে দিন।

খারাপ (উচ্চ কাপলিং):
class Customer {
    void saveToDatabase() { /* সরাসরি DB অ্যাক্সেস */ }
}

ভালো (নিম্ন কাপলিং):
class CustomerRepository {
    void save(Customer c) { /* DB লজিক এখানে */ }
}
class Customer {
    String name;  // কোনো DB লজিক নেই
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

৪️⃣ হাই কোহিশন

নীতি: প্রতিটি ক্লাস একটি একক উদ্দেশ্যে ফোকাস করা উচিত।

খারাপ (নিম্ন কোহিশন - গড ক্লাস):
class CustomerManager {
    // শপিং, পেমেন্ট, অর্ডার, ইমেইল, ডেটাবেস সব হ্যান্ডেল করে
}

ভালো (উচ্চ কোহিশন):
class Customer { /* শুধু গ্রাহক ডেটা */ }
class Cart { /* শুধু কার্ট অপারেশন */ }
class Payment { /* শুধু পেমেন্ট প্রসেসিং */ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 ডিজাইন ক্লাস ডায়াগ্রাম (DCD) তৈরি করা

ডিজাইন ক্লাস ডায়াগ্রাম দায়িত্ব সহ UML ক্লাস ডায়াগ্রাম প্রসারিত করে।

উদাহরণ DCD (অনলাইন শপিং):
┌──────────────────┐     ┌──────────────────┐
│    গ্রাহক        │     │     পণ্য         │
├──────────────────┤     ├──────────────────┤
│ - নাম: স্ট্রিং   │     │ - নাম: স্ট্রিং   │
│ - ইমেইল: স্ট্রিং│     │ - দাম: ডাবল     │
├──────────────────┤     └────────┬─────────┘
│ + চেকআউট()      │              │
│ + কার্টে যোগ()   │              │
└────────┬─────────┘              │
         │                        │
         ↓                        ↓
┌──────────────────┐     ┌──────────────────┐
│      কার্ট       │     │      অর্ডার      │
├──────────────────┤     ├──────────────────┤
│ - পণ্য: তালিকা   │     │ - অর্ডার আইডি   │
├──────────────────┤     │ - অবস্থা: স্ট্রিং│
│ + পণ্য যোগ()     │     ├──────────────────┤
│ + মোট গণনা()     │     │ + নিশ্চিত()      │
│ + অর্ডার তৈরি()  │     │ + মোট()          │
└──────────────────┘     └──────────────────┘

✅ সারাংশ
• GRASP: ইনফরমেশন এক্সপার্ট, ক্রিয়েটর, লো কাপলিং, হাই কোহিশন
• DCD: ক্লাস দায়িত্ব দেখানো UML এক্সটেনশন
• হোয়াইট বক্স: অভ্যন্তরীণ কোড কাঠামো পরীক্ষা করে
• ব্ল্যাক বক্স: কোড জ্ঞান ছাড়া কার্যকারিতা পরীক্ষা করে
• বেসিস পাথ: CFG ও সাইক্লোম্যাটিক কমপ্লেক্সিটি ব্যবহার করে
• বিশেষায়িত টেস্টিং: রিয়েল-টাইম, ডিস্ট্রিবিউটেড, ওয়েব, মোবাইল, এমবেডেড`,
      takeaways: [
        "GRASP: Information Expert, Creator, Low Coupling, High Cohesion",
        "DCD maps design directly to code",
        "White Box tests internal structure, Black Box tests functionality",
        "Basis Path uses cyclomatic complexity for test coverage"
      ],
      takeawaysBn: [
        "GRASP: ইনফরমেশন এক্সপার্ট, ক্রিয়েটর, লো কাপলিং, হাই কোহিশন",
        "DCD ডিজাইন সরাসরি কোডে ম্যাপ করে",
        "হোয়াইট বক্স অভ্যন্তরীণ কাঠামো পরীক্ষা করে, ব্ল্যাক বক্স কার্যকারিতা পরীক্ষা করে",
        "বেসিস পাথ টেস্ট কভারেজের জন্য সাইক্লোম্যাটিক কমপ্লেক্সিটি ব্যবহার করে"
      ],
      level: "Advanced"
    },
    {
      id: "se6",
      title: "Testing Strategies, Maintenance, Quality & Metrics",
      titleBn: "টেস্টিং কৌশল, মেইনটেন্যান্স, গুণমান ও মেট্রিক্স",
      content: `📌 SOFTWARE TESTING STRATEGIES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 1. UNIT TESTING

Definition: Testing individual components (methods, classes) in isolation. Usually automated with JUnit.

Example (JUnit):
┌─────────────────────────────────────────────────────────────────┐
│ class Calculator {                                              │
│     int add(int a, int b) { return a + b; }                     │
│ }                                                               │
│ @Test                                                           │
│ public void testAdd() {                                         │
│     assertEquals(5, calculator.add(2, 3));                      │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2. INTEGRATION TESTING

Definition: Tests how modules interact with each other. Strategies: Big Bang, Top-down, Bottom-up, Sandwich.

Example: LoginService + DatabaseService integration test

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 3. VALIDATION TESTING

Definition: Checks if software meets customer requirements (Are we building the right product?). Based on SRS.

Example: "System should not allow login with invalid password" → Test invalid login returns error.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 4. SYSTEM TESTING

Definition: Tests entire system after integration. Includes functional & non-functional.

Types:
• Load Testing: Many users at once
• Stress Testing: Extreme workload
• Security Testing: SQL injection, XSS
• Compatibility Testing: Browsers, devices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 5. ART OF DEBUGGING

Definition: Process of finding, analyzing, and fixing defects.

Steps:
1. Reproduce the bug
2. Identify location (logs, breakpoints)
3. Analyze root cause
4. Fix the code
5. Re-test

Techniques: Print debugging, Debugger tools, Binary search debugging

Example (Division by zero):
int divide(int a, int b) {
    if(b == 0) throw new IllegalArgumentException("b cannot be zero");
    return a / b;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 TESTING PYRAMID
         [ System Testing ]      ← End-to-end
        [ Integration Testing ]  ← Module interactions
       [ Unit Testing ]           ← Smallest components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 SYSTEM MAINTENANCE AND UPGRADING

Definition: Continuous support after deployment to fix problems, improve performance, adapt to new environments.

🔹 Types of Maintenance (IEEE):

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Corrective          │ Fixing bugs/errors                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Adaptive            │ Modifying for new environment               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Perfective          │ Improving performance or features           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Preventive          │ Future-proofing, reducing risks             │
└─────────────────────┴─────────────────────────────────────────────┘

🔹 Key Terms:
• Software Repair: Fixing defects after deployment
• Downtime: Time system unavailable (planned/unplanned)
• Error: Human mistake
• Fault/Bug: Incorrect code/design
• Failure: Software doesn't perform as required

🔹 Maintenance Cost Models:
• Bohem's Model: Cost increases with time
• Lehman's Law: Software must evolve or become obsolete
• 60-80% of software lifecycle cost is maintenance

🔹 Documentation: Essential for efficient maintenance (requirements, design, test cases, user manuals)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SOFTWARE QUALITY ASSURANCE (SQA)

Definition: Activities ensuring software meets required quality standards. Covers entire SDLC.

Key Goals:
• Ensure reliable, secure, maintainable software
• Prevent defects rather than just detect them
• Comply with standards (ISO 9001, CMMI, IEEE)

🔹 McCall's Quality Factors:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Category            │ Factors                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Product Operation   │ Correctness, Reliability, Efficiency,       │
│                     │ Integrity, Usability                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Product Revision    │ Maintainability, Flexibility, Testability   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Product Transition  │ Portability, Reusability, Interoperability  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 SOFTWARE QUALITY MEASURES (Metrics)

┌─────────────────────┬─────────────────────────────────────────────┐
│ Metric Type         │ Examples                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Product Metrics     │ Defect Density = Defects / KLOC             │
│                     │ MTBF (Mean Time Between Failures)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Process Metrics     │ DRE = Defects found before release / Total  │
│                     │ Effort Variance                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Project Metrics     │ Schedule Variance, Cost Variance            │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 COST IMPACT OF SOFTWARE DEFECTS

Cost escalates dramatically if defects found later:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Phase Found         │ Relative Cost to Fix                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Requirements        │ 1x                                          │
│ Design              │ 5x                                          │
│ Implementation      │ 10x                                         │
│ Testing             │ 15-20x                                      │
│ Production          │ 100x+                                       │
└─────────────────────┴─────────────────────────────────────────────┘

Key Takeaway: "The earlier you detect defects, the cheaper it is to fix."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 RELIABILITY, AVAILABILITY & SAFETY

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Definition & Metric                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reliability         │ Probability software works without failure  │
│                     │ Metric: MTBF (Mean Time Between Failures)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Availability        │ Probability software is operational when    │
│                     │ needed. Formula: MTBF/(MTBF+MTTR)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Safety              │ Operates without causing harm even in       │
│                     │ failure. Focus: Critical systems            │
└─────────────────────┴─────────────────────────────────────────────┘

Example: MTBF=1000h, MTTR=2h → Availability = 1000/1002 = 99.8%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 FUNCTION-BASED METRICS & BANG METRICS

🔹 Function-Based Metrics (Function Point Analysis):

Measures functionality delivered rather than lines of code.

Components: External Inputs, Outputs, Inquiries, Internal Files, External Interfaces

🔹 BANG Metrics:

Measures code complexity: B (Branch) + A (Assignment) + N (Number of Loops) + G (Global variables)

Higher BANG → more complex → harder to maintain

Example:
int sumArray(int[] arr) {
    int sum = 0;           // A=1
    for(int i=0;i<arr.length;i++) { // N=1
        if(arr[i] > 0) {   // B=1
            sum += arr[i]; // A=2
        }
    }
    return sum;
}
// BANG Score = B(1) + A(2) + N(1) + G(0) = 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 COMPREHENSIVE METRICS TABLE

┌─────────────────────┬─────────────────────────────────────────────┐
│ Phase               │ Metrics                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Analysis & Design   │ NOC, NOR, DIT, NOM, Use Case Metrics        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Source Code         │ LOC, Cyclomatic Complexity, BANG, Coverage  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Testing             │ Defect Density, DRE, Test Coverage, MTBF    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Maintenance         │ MTTR, Post-Release Defects, Code Churn      │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Testing Strategies: Unit → Integration → Validation → System
• Debugging: Find, analyze, fix, re-test
• Maintenance: Corrective, Adaptive, Perfective, Preventive
• SQA: Ensures quality across SDLC
• Quality Factors: McCall's model (Operation, Revision, Transition)
• Cost Impact: Earlier detection = cheaper fixes
• Reliability/ Availability: MTBF, MTTR metrics
• Metrics: Function-based, BANG, and phase-specific metrics`,
      contentBn: `📌 সফটওয়্যার টেস্টিং কৌশল

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ১. ইউনিট টেস্টিং

সংজ্ঞা: পৃথক উপাদান (পদ্ধতি, ক্লাস) বিচ্ছিন্নভাবে পরীক্ষা করা। সাধারণত JUnit দিয়ে স্বয়ংক্রিয়।

উদাহরণ (JUnit):
┌─────────────────────────────────────────────────────────────────┐
│ class Calculator {                                              │
│     int add(int a, int b) { return a + b; }                     │
│ }                                                               │
│ @Test                                                           │
│ public void testAdd() {                                         │
│     assertEquals(5, calculator.add(2, 3));                      │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২. ইন্টিগ্রেশন টেস্টিং

সংজ্ঞা: মডিউলগুলি কীভাবে একে অপরের সাথে যোগাযোগ করে তা পরীক্ষা করে। কৌশল: বিগ ব্যাং, টপ-ডাউন, বটম-আপ, স্যান্ডউইচ।

উদাহরণ: লগইন সার্ভিস + ডেটাবেস সার্ভিস ইন্টিগ্রেশন টেস্ট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৩. ভ্যালিডেশন টেস্টিং

সংজ্ঞা: সফটওয়্যার গ্রাহকের প্রয়োজনীয়তা পূরণ করে কিনা তা পরীক্ষা করে (আমরা কি সঠিক পণ্য তৈরি করছি?)। SRS এর ভিত্তিতে।

উদাহরণ: "সিস্টেম ভুল পাসওয়ার্ড দিয়ে লগইন অনুমতি দেবে না" → ভুল লগইন ত্রুটি ফেরত দেয় পরীক্ষা করুন।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৪. সিস্টেম টেস্টিং

সংজ্ঞা: ইন্টিগ্রেশনের পরে সম্পূর্ণ সিস্টেম পরীক্ষা করে। কার্যকরী ও অ-কার্যকরী উভয়ই অন্তর্ভুক্ত।

প্রকার:
• লোড টেস্টিং: একসাথে অনেক ব্যবহারকারী
• স্ট্রেস টেস্টিং: চরম কাজের চাপ
• সিকিউরিটি টেস্টিং: SQL ইনজেকশন, XSS
• কম্প্যাটিবিলিটি টেস্টিং: ব্রাউজার, ডিভাইস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৫. ডিবাগিংয়ের শিল্প

সংজ্ঞা: ত্রুটি খোঁজা, বিশ্লেষণ এবং ঠিক করার প্রক্রিয়া।

ধাপ:
১. বাগ পুনরুত্পাদন করুন
২. অবস্থান চিহ্নিত করুন (লগ, ব্রেকপয়েন্ট)
৩. মূল কারণ বিশ্লেষণ করুন
৪. কোড ঠিক করুন
৫. পুনরায় পরীক্ষা করুন

কৌশল: প্রিন্ট ডিবাগিং, ডিবাগার টুল, বাইনারি সার্চ ডিবাগিং

উদাহরণ (শূন্য দ্বারা ভাগ):
int divide(int a, int b) {
    if(b == 0) throw new IllegalArgumentException("b শূন্য হতে পারে না");
    return a / b;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 টেস্টিং পিরামিড
         [ সিস্টেম টেস্টিং ]      ← শেষ-থেকে-শেষ
        [ ইন্টিগ্রেশন টেস্টিং ]   ← মডিউল মিথস্ক্রিয়া
       [ ইউনিট টেস্টিং ]          ← ক্ষুদ্রতম উপাদান

✅ সারাংশ
• টেস্টিং কৌশল: ইউনিট → ইন্টিগ্রেশন → ভ্যালিডেশন → সিস্টেম
• ডিবাগিং: খোঁজা, বিশ্লেষণ, ঠিক করা, পুনরায় পরীক্ষা
• মেইনটেন্যান্স: কারেক্টিভ, অ্যাডাপটিভ, পারফেক্টিভ, প্রিভেন্টিভ
• SQA: SDLC জুড়ে গুণমান নিশ্চিত করে
• গুণমানের কারণ: ম্যাককলের মডেল (অপারেশন, রিভিশন, ট্রানজিশন)
• খরচ প্রভাব: আগে সনাক্তকরণ = সস্তা সমাধান
• নির্ভরযোগ্যতা/প্রাপ্যতা: MTBF, MTTR মেট্রিক্স
• মেট্রিক্স: ফাংশন-ভিত্তিক, BANG, এবং ধাপ-নির্দিষ্ট মেট্রিক্স`,
      takeaways: [
        "Testing strategies: Unit → Integration → Validation → System",
        "Maintenance types: Corrective, Adaptive, Perfective, Preventive",
        "SQA ensures quality across entire SDLC",
        "Earlier defect detection = lower cost impact",
        "Metrics: Function-based, BANG, phase-specific measures"
      ],
      takeawaysBn: [
        "টেস্টিং কৌশল: ইউনিট → ইন্টিগ্রেশন → ভ্যালিডেশন → সিস্টেম",
        "মেইনটেন্যান্স প্রকার: কারেক্টিভ, অ্যাডাপটিভ, পারফেক্টিভ, প্রিভেন্টিভ",
        "SQA পুরো SDLC জুড়ে গুণমান নিশ্চিত করে",
        "আগে ত্রুটি সনাক্তকরণ = কম খরচের প্রভাব",
        "মেট্রিক্স: ফাংশন-ভিত্তিক, BANG, ধাপ-নির্দিষ্ট পরিমাপ"
      ],
      level: "Advanced"
    }
  ]
}

export const module17 = m17