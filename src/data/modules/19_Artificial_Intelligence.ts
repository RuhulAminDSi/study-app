import type { Module } from '../../types'

const m19: Module = {
  title: "19. Artificial Intelligence",
  titleBn: "১৯. আর্টিফিসিয়াল ইন্টেলিজেন্স",
  level: "Advanced",
  lessons: [
    {
      id: "ai1",
      title: "Introduction to AI: Old & New Techniques",
      titleBn: "AI এর পরিচয়: পুরাতন ও নতুন কৌশল",
      content: `🤖 INTRODUCTION TO ARTIFICIAL INTELLIGENCE

Definition:
Artificial Intelligence is the branch of computer science that aims to create machines capable of performing tasks that typically require human intelligence.

Key Goals of AI:
• Problem solving and reasoning
• Knowledge representation
• Learning from data and experience
• Understanding natural language
• Perception (vision, speech, sensors)
• Planning and decision making

Applications: Robotics, autonomous vehicles, expert systems, speech recognition, medical diagnosis, recommendation systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 OLD AI TECHNIQUES (Classical / Symbolic AI)
Timeframe: 1950s – 1980s

Characteristics:
• Rule-based / Knowledge-based: Decisions based on explicitly programmed rules
• Focused on symbolic reasoning, logical inference, and search algorithms

Common Techniques:
1. Expert Systems → Example: MYCIN (medical diagnosis) uses if-then rules
2. Search Algorithms → BFS, DFS, A* algorithm
3. Logic and Reasoning → Propositional logic, predicate logic, theorem proving
4. Knowledge Representation → Semantic networks, frames, production rules
5. Planning → STRIPS

Pros: Explainable, deterministic, good for structured problems
Cons: Difficult to scale, brittle with incomplete or noisy data

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ NEW AI TECHNIQUES (Modern / Statistical AI)
Timeframe: 1990s – Present

Characteristics:
• Data-driven, probabilistic, and adaptive
• Relies on machine learning, neural networks, and statistical methods
• Can handle uncertain and unstructured data

Common Techniques:
1. Machine Learning (ML) → Supervised, unsupervised, reinforcement learning
2. Deep Learning (DL) → Neural networks (CNN, RNN, Transformers)
3. Probabilistic Reasoning → Bayesian networks, Hidden Markov Models (HMM)
4. Evolutionary Algorithms → Genetic algorithms for optimization
5. Natural Language Processing (NLP) → Text analysis, chatbots, translation

Pros: Learns from data, adaptable, handles uncertainty and large datasets
Cons: Less interpretable ("black-box"), requires large datasets and computation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 COMPARISON: Old vs New AI Techniques

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ Feature             │ Old AI (Classical)       │ New AI (Modern)          │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Approach            │ Symbolic, rule-based     │ Data-driven, statistical │
│ Knowledge           │ Explicit rules           │ Learned from data        │
│ Adaptability        │ Low                      │ High (adaptive)          │
│ Scalability         │ Poor                     │ High (handles big data)  │
│ Interpretability    │ High (explainable)       │ Low ("black box")        │
│ Examples            │ Expert systems, logic    │ ML, neural networks, DL  │
└─────────────────────┴──────────────────────────┴──────────────────────────┘

✅ SUMMARY
• Old AI: Symbolic, rule-based, deterministic, works for structured problems, explainable
• New AI: Data-driven, adaptive, statistical, suitable for complex and uncertain environments
• Trend: Modern AI increasingly relies on learning from data rather than hard-coded rules

📈 EVOLUTION TIMELINE
1950s-80s: Symbolic AI → Expert Systems, Logic, Search
1990s-2010s: Statistical ML → Regression, SVM, Random Forests
2012-present: Deep Learning → CNNs, RNNs, Transformers, LLMs`,
      contentBn: `🤖 আর্টিফিসিয়াল ইন্টেলিজেন্সের পরিচিতি

সংজ্ঞা:
আর্টিফিসিয়াল ইন্টেলিজেন্স হল কম্পিউটার বিজ্ঞানের শাখা যা এমন মেশিন তৈরি করার লক্ষ্যে কাজ করে যা সাধারণত মানুষের বুদ্ধিমত্তার প্রয়োজন হয় এমন কাজ করতে পারে।

AI এর মূল লক্ষ্য:
• সমস্যা সমাধান ও যুক্তি প্রদান
• জ্ঞান উপস্থাপন
• ডেটা ও অভিজ্ঞতা থেকে শেখা
• প্রাকৃতিক ভাষা বোঝা
• উপলব্ধি (দৃষ্টি, বক্তৃতা, সেন্সর)
• পরিকল্পনা ও সিদ্ধান্ত গ্রহণ

অ্যাপ্লিকেশন: রোবোটিক্স, স্বয়ংক্রিয় যানবাহন, এক্সপার্ট সিস্টেম, বক্তৃতা শনাক্তকরণ, মেডিকেল ডায়াগনোসিস, রেকমেন্ডেশন সিস্টেম।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 পুরাতন AI কৌশল (ক্লাসিক্যাল / সিম্বলিক AI)
সময়কাল: ১৯৫০ – ১৯৮০ দশক

বৈশিষ্ট্য:
• নিয়ম-ভিত্তিক / জ্ঞান-ভিত্তিক: স্পষ্টভাবে প্রোগ্রাম করা নিয়মের ভিত্তিতে সিদ্ধান্ত
• সিম্বলিক রিজনিং, লজিক্যাল ইনফারেন্স ও সার্চ অ্যালগরিদমে ফোকাসড

সাধারণ কৌশল:
১. এক্সপার্ট সিস্টেম → উদাহরণ: MYCIN (মেডিকেল ডায়াগনোসিস) IF-THEN নিয়ম ব্যবহার করে
২. সার্চ অ্যালগরিদম → BFS, DFS, A* অ্যালগরিদম
৩. লজিক ও রিজনিং → প্রপোজিশনাল লজিক, প্রেডিকেট লজিক, থিওরেম প্রভিং
৪. জ্ঞান উপস্থাপন → সিম্যান্টিক নেটওয়ার্ক, ফ্রেম, প্রোডাকশন রুল
৫. প্ল্যানিং → STRIPS

সুবিধা: ব্যাখ্যাযোগ্য, ডিটারমিনিস্টিক, কাঠামোবদ্ধ সমস্যার জন্য ভাল
অসুবিধা: স্কেল করা কঠিন, অসম্পূর্ণ বা গোলমেলে ডেটায় ভঙ্গুর

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ নতুন AI কৌশল (আধুনিক / স্ট্যাটিস্টিকাল AI)
সময়কাল: ১৯৯০ – বর্তমান

বৈশিষ্ট্য:
• ডেটা-চালিত, প্রোবাবিলিস্টিক ও অভিযোজিত
• মেশিন লার্নিং, নিউরাল নেটওয়ার্ক ও স্ট্যাটিস্টিক্যাল পদ্ধতির উপর নির্ভরশীল
• অনিশ্চিত ও অগঠিত ডেটা হ্যান্ডেল করতে পারে

সাধারণ কৌশল:
১. মেশিন লার্নিং (ML) → সুপারভাইজড, আনসুপারভাইজড, রিইনফোর্সমেন্ট লার্নিং
২. ডিপ লার্নিং (DL) → নিউরাল নেটওয়ার্ক (CNN, RNN, ট্রান্সফর্মার)
৩. প্রোবাবিলিস্টিক রিজনিং → বেইসিয়ান নেটওয়ার্ক, হিডেন মার্কভ মডেল (HMM)
৪. ইভোলিউশনারি অ্যালগরিদম → জেনেটিক অ্যালগরিদম
৫. ন্যাচারাল ল্যাংগুয়েজ প্রসেসিং (NLP) → টেক্সট অ্যানালাইসিস, চ্যাটবট, অনুবাদ

সুবিধা: ডেটা থেকে শেখে, অভিযোজিত, অনিশ্চয়তা ও বড় ডেটাসেট হ্যান্ডেল করে
অসুবিধা: কম ব্যাখ্যাযোগ্য ("ব্ল্যাক বক্স"), বড় ডেটাসেট ও গণনার প্রয়োজন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 তুলনা: পুরাতন বনাম নতুন AI কৌশল

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ বৈশিষ্ট্য           │ পুরাতন AI (ক্লাসিক্যাল)   │ নতুন AI (আধুনিক)         │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ পদ্ধতি              │ সিম্বলিক, নিয়ম-ভিত্তিক   │ ডেটা-চালিত, স্ট্যাটিস্টিক│
│ জ্ঞান               │ স্পষ্ট নিয়ম              │ ডেটা থেকে শেখা           │
│ অভিযোজন ক্ষমতা      │ কম                        │ উচ্চ (অভিযোজিত)          │
│ স্কেলেবিলিটি        │ দুর্বল                    │ উচ্চ (বড় ডেটা হ্যান্ডেল) │
│ ব্যাখ্যাযোগ্যতা     │ উচ্চ (ব্যাখ্যাযোগ্য)      │ কম ("ব্ল্যাক বক্স")       │
│ উদাহরণ              │ এক্সপার্ট সিস্টেম, লজিক  │ ML, নিউরাল নেটওয়ার্ক, DL │
└─────────────────────┴──────────────────────────┴──────────────────────────┘

✅ সারাংশ
• পুরাতন AI: সিম্বলিক, নিয়ম-ভিত্তিক, ডিটারমিনিস্টিক, কাঠামোবদ্ধ সমস্যার জন্য ভাল, ব্যাখ্যাযোগ্য
• নতুন AI: ডেটা-চালিত, অভিযোজিত, স্ট্যাটিস্টিক্যাল, জটিল ও অনিশ্চিত পরিবেশের জন্য উপযুক্ত
• প্রবণতা: আধুনিক AI ক্রমবর্ধমানভাবে হার্ড-কোডেড নিয়মের পরিবর্তে ডেটা থেকে শেখার উপর নির্ভরশীল

📈 বিবর্তনের সময়রেখা
১৯৫০-৮০: সিম্বলিক AI → এক্সপার্ট সিস্টেম, লজিক, সার্চ
১৯৯০-২০১০: স্ট্যাটিস্টিক্যাল ML → রিগ্রেশন, SVM, র্যান্ডম ফরেস্ট
২০১২-বর্তমান: ডিপ লার্নিং → CNN, RNN, ট্রান্সফর্মার, LLM`,
      takeaways: [
        "AI mimics human cognitive functions",
        "Old AI: rule-based, symbolic, explainable",
        "New AI: data-driven, statistical, adaptive",
        "Trend: From hard-coded rules to learning from data"
      ],
      takeawaysBn: [
        "AI মানব জ্ঞানীয় ফাংশন অনুকরণ করে",
        "পুরাতন AI: নিয়ম-ভিত্তিক, সিম্বলিক, ব্যাখ্যাযোগ্য",
        "নতুন AI: ডেটা-চালিত, স্ট্যাটিস্টিক্যাল, অভিযোজিত",
        "প্রবণতা: হার্ড-কোডেড নিয়ম থেকে ডেটা থেকে শেখার দিকে"
      ],
      level: "Advanced"
    },
    {
      id: "ai2",
      title: "Knowledge Representation & Logic",
      titleBn: "জ্ঞান উপস্থাপন ও লজিক",
      content: `📚 KNOWLEDGE REPRESENTATION (KR)

Definition:
Knowledge Representation is the way of formally encoding information about the world so that an AI system can reason, learn, and make decisions.

Purpose:
• Allow machines to simulate human reasoning
• Make knowledge explicit for processing
• Enable problem-solving, inference, and decision-making

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 KEY CONCEPTS OF KR

┌─────────────┬────────────────────────────────────────────┐
│ Concept     │ Description                                │
├─────────────┼────────────────────────────────────────────┤
│ Fact        │ Basic assertion about the world            │
│             │ Example: "Socrates is a man"               │
├─────────────┼────────────────────────────────────────────┤
│ Rule        │ Conditional statement linking facts        │
│             │ Example: "If X is man, X is mortal"        │
├─────────────┼────────────────────────────────────────────┤
│ Ontology    │ Structured representation of concepts      │
│             │ and relationships in a domain              │
├─────────────┼────────────────────────────────────────────┤
│ Inference   │ Deriving new knowledge from existing       │
│             │ facts and rules                            │
└─────────────┴────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 METHODS OF KNOWLEDGE REPRESENTATION

1. LOGICAL REPRESENTATION
   • Uses propositional and predicate logic
   • Propositional logic: Facts are true or false
     → Example: P → Q ("If it rains, ground is wet")
   • Predicate logic: Objects, properties, relationships
     → Example: Man(Socrates) → Mortal(Socrates)

2. SEMANTIC NETWORKS
   • Graph of nodes (concepts) and edges (relationships)
   
        ┌─────┐    is-a    ┌────────┐
        │ Dog │ ────────→ │ Animal │
        └─────┘           └────────┘
          │ has-color         │ has-habitat
          ↓                   ↓
        ┌─────┐            ┌────────┐
        │Brown│            │ Earth  │
        └─────┘            └────────┘

3. FRAMES
   • Data structures representing objects, attributes, values
   
   ┌─────────────────────────┐
   │ Frame: CAR              │
   ├─────────────────────────┤
   │ Color: Red              │
   │ Wheels: 4               │
   │ Engine: Gas             │
   │ Doors: 4                │
   └─────────────────────────┘

4. PRODUCTION RULES
   • IF-THEN rules for reasoning
     IF temperature > 100°C 
     THEN alert = TRUE

5. ONTOLOGIES
   • Formal representation of concepts and relationships
   • Used in semantic web, knowledge graphs

6. SCRIPTS
   • Represent sequences of events or actions
   • "Restaurant Script": enter → order → eat → pay → leave

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ DESIRABLE PROPERTIES OF KR
• Expressiveness: Can describe complex domains
• Inference capability: Supports automatic reasoning
• Consistency: Avoid contradictions
• Efficiency: Allows fast retrieval and reasoning
• Understandability: Human-readable and maintainable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 PROPOSITIONAL LOGIC

Definition: Formal system using propositions (T/F statements) and logical connectives.

Logical Connectives:

┌─────────────┬───────┬─────────────────────────────────┐
│ Connective  │Symbol │ Meaning                         │
├─────────────┼───────┼─────────────────────────────────┤
│ AND         │  ∧    │ P ∧ Q true if both P and Q true │
│ OR          │  ∨    │ P ∨ Q true if at least one true │
│ NOT         │  ¬    │ ¬P true if P false              │
│ IMPLIES     │  →    │ P→Q false only if P true Q false│
│ BICONDITION │  ↔    │ P↔Q true if P and Q same value  │
└─────────────┴───────┴─────────────────────────────────┘

Inference Rules:
• Modus Ponens: P, P→Q ⇒ Q
• Modus Tollens: ¬Q, P→Q ⇒ ¬P

Limitations: Cannot express relations between objects or quantifiers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔶 FIRST-ORDER LOGIC (FOL)

Definition: Extends propositional logic with objects, functions, relations, and quantifiers.

Components:
• Constants: Specific objects (e.g., Alice, John)
• Variables: Arbitrary objects (e.g., x, y)
• Functions: Map objects to objects (e.g., FatherOf(x))
• Predicates: Properties or relationships (e.g., Loves(Alice, Bob))

Quantifiers:
┌─────────────┬───────┬─────────────────────────────────┐
│ Quantifier  │Symbol │ Meaning                         │
├─────────────┼───────┼─────────────────────────────────┤
│ Universal   │  ∀    │ "For all x, ..."                │
│ Existential │  ∃    │ "There exists x such that ..."  │
└─────────────┴───────┴─────────────────────────────────┘

Examples:
• "All humans are mortal" → ∀x (Human(x) → Mortal(x))
• "Socrates is human" → Human(Socrates)
• "Someone loves everyone" → ∃x ∀y Loves(x, y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 COMPARISON: PL vs FOL

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Propositional Logic  │ First-Order Logic    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Entities            │ Simple propositions  │ Objects, relations   │
│ Quantifiers         │ None                 │ ∀ (for all), ∃ (exists)│
│ Expressiveness      │ Limited              │ High                 │
│ Example             │ P → Q                │ ∀x (Human(x)→Mortal(x))│
│ Usage               │ Simple puzzles       │ KR, expert systems   │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Knowledge Representation encodes facts, rules, and relationships for AI
• Methods: Logic, semantic networks, frames, production rules, scripts
• Propositional Logic: True/false statements with connectives
• First-Order Logic: Adds objects, quantifiers, relations for complex reasoning`,
      contentBn: `📚 জ্ঞান উপস্থাপন (KR)

সংজ্ঞা:
জ্ঞান উপস্থাপন হল বিশ্ব সম্পর্কে তথ্য আনুষ্ঠানিকভাবে এনকোড করার উপায় যাতে একটি AI সিস্টেম যুক্তি দিতে, শিখতে এবং সিদ্ধান্ত নিতে পারে।

উদ্দেশ্য:
• মেশিনকে মানব যুক্তি অনুকরণের অনুমতি দেওয়া
• প্রক্রিয়াকরণের জন্য জ্ঞান স্পষ্ট করা
• সমস্যা সমাধান, অনুমান ও সিদ্ধান্ত গ্রহণ সক্ষম করা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 KR এর মূল ধারণা

┌─────────────┬────────────────────────────────────────────┐
│ ধারণা       │ বর্ণনা                                     │
├─────────────┼────────────────────────────────────────────┤
│ তথ্য        │ বিশ্ব সম্পর্কে মৌলিক বিবৃতি                │
│             │ উদাহরণ: "সক্রেটিস একজন মানুষ"              │
├─────────────┼────────────────────────────────────────────┤
│ নিয়ম        │ তথ্য সংযোগকারী শর্তসাপেক্ষ বিবৃতি          │
│             │ উদাহরণ: "যদি X মানুষ, তাহলে X নশ্বর"       │
├─────────────┼────────────────────────────────────────────┤
│ অন্টোলজি    │ একটি ডোমেইনে ধারণা ও সম্পর্কের কাঠামোবদ্ধ  │
│             │ উপস্থাপন                                   │
├─────────────┼────────────────────────────────────────────┤
│ অনুমান      │ বিদ্যমান তথ্য ও নিয়ম থেকে নতুন জ্ঞান      │
│             │ আহরণ                                      │
└─────────────┴────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 জ্ঞান উপস্থাপনের পদ্ধতি

১. লজিক্যাল উপস্থাপন
   • প্রপোজিশনাল ও প্রেডিকেট লজিক ব্যবহার করে
   • প্রপোজিশনাল লজিক: তথ্য সত্য বা মিথ্যা
     → উদাহরণ: P → Q ("যদি বৃষ্টি হয়, মাটি ভেজা")
   • প্রেডিকেট লজিক: বস্তু, বৈশিষ্ট্য, সম্পর্ক
     → উদাহরণ: Man(সক্রেটিস) → Mortal(সক্রেটিস)

২. সিম্যান্টিক নেটওয়ার্ক
   • নোড (ধারণা) ও এজ (সম্পর্ক) এর গ্রাফ
   
        ┌─────┐    is-a    ┌────────┐
        │ কুকুর│ ────────→ │ প্রাণী │
        └─────┘           └────────┘
          │ has-color         │ has-habitat
          ↓                   ↓
        ┌─────┐            ┌────────┐
        │বাদামী│            │ পৃথিবী │
        └─────┘            └────────┘

৩. ফ্রেম
   • বস্তু, বৈশিষ্ট্য ও মান উপস্থাপনকারী ডেটা স্ট্রাকচার
   
   ┌─────────────────────────┐
   │ ফ্রেম: গাড়ি            │
   ├─────────────────────────┤
   │ রং: লাল                │
   │ চাকা: ৪                 │
   │ ইঞ্জিন: পেট্রোল         │
   │ দরজা: ৪                 │
   └─────────────────────────┘

৪. প্রোডাকশন রুল
   • যুক্তির জন্য IF-THEN নিয়ম
     IF তাপমাত্রা > ১০০°C 
     THEN সতর্কতা = সত্য

৫. অন্টোলজি
   • ধারণা ও সম্পর্কের আনুষ্ঠানিক উপস্থাপন
   • সিম্যান্টিক ওয়েব, নলেজ গ্রাফে ব্যবহৃত

৬. স্ক্রিপ্ট
   • ঘটনা বা কর্মের ক্রম উপস্থাপন
   • "রেস্টুরেন্ট স্ক্রিপ্ট": প্রবেশ → অর্ডার → খাওয়া → পেমেন্ট → প্রস্থান

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ KR এর কাঙ্ক্ষিত বৈশিষ্ট্য
• এক্সপ্রেসিভনেস: জটিল ডোমেইন বর্ণনা করতে পারে
• অনুমান ক্ষমতা: স্বয়ংক্রিয় যুক্তি সমর্থন করে
• ধারাবাহিকতা: দ্বন্দ্ব এড়ায়
• দক্ষতা: দ্রুত পুনরুদ্ধার ও যুক্তি অনুমতি দেয়
• বোধগম্যতা: মানব-পাঠযোগ্য ও রক্ষণাবেক্ষণযোগ্য

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 প্রপোজিশনাল লজিক

সংজ্ঞা: প্রপোজিশন (সত্য/মিথ্যা বিবৃতি) ও লজিক্যাল কানেক্টিভ ব্যবহারকারী আনুষ্ঠানিক পদ্ধতি।

লজিক্যাল কানেক্টিভ:

┌─────────────┬───────┬─────────────────────────────────┐
│ কানেক্টিভ   │চিহ্ন  │ অর্থ                            │
├─────────────┼───────┼─────────────────────────────────┤
│ AND         │  ∧    │ P ∧ Q সত্য যদি P ও Q উভয় সত্য   │
│ OR          │  ∨    │ P ∨ Q সত্য যদি অন্তত একটি সত্য   │
│ NOT         │  ¬    │ ¬P সত্য যদি P মিথ্যা            │
│ IMPLIES     │  →    │ P→Q মিথ্যা শুধু যদি P সত্য Q মিথ্যা│
│ BICONDITION │  ↔    │ P↔Q সত্য যদি P ও Q একই মানের     │
└─────────────┴───────┴─────────────────────────────────┘

অনুমানের নিয়ম:
• মোডাস পোনেন্স: P, P→Q ⇒ Q
• মোডাস টোলেন্স: ¬Q, P→Q ⇒ ¬P

সীমাবদ্ধতা: বস্তুর মধ্যে সম্পর্ক বা কোয়ান্টিফায়ার প্রকাশ করতে পারে না।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔶 ফার্স্ট-অর্ডার লজিক (FOL)

সংজ্ঞা: বস্তু, ফাংশন, সম্পর্ক ও কোয়ান্টিফায়ার যোগ করে প্রপোজিশনাল লজিককে প্রসারিত করে।

উপাদান:
• কনস্ট্যান্ট: নির্দিষ্ট বস্তু (যেমন: আলিস, জন)
• ভেরিয়েবল: ইচ্ছামত বস্তু (যেমন: x, y)
• ফাংশন: বস্তুকে বস্তুতে ম্যাপ করে (যেমন: FatherOf(x))
• প্রেডিকেট: বৈশিষ্ট্য বা সম্পর্ক (যেমন: Loves(আলিস, বব))

কোয়ান্টিফায়ার:
┌─────────────┬───────┬─────────────────────────────────┐
│ কোয়ান্টিফায়ার│চিহ্ন │ অর্থ                            │
├─────────────┼───────┼─────────────────────────────────┤
│ ইউনিভার্সাল│  ∀    │ "সব x এর জন্য, ..."              │
│ এক্সিস্টেনশিয়াল│∃ │ "এমন x আছে যে ..."               │
└─────────────┴───────┴─────────────────────────────────┘

উদাহরণ:
• "সব মানুষ নশ্বর" → ∀x (Human(x) → Mortal(x))
• "সক্রেটিস মানুষ" → Human(সক্রেটিস)
• "কেউ সবাইকে ভালবাসে" → ∃x ∀y Loves(x, y)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 তুলনা: PL বনাম FOL

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ বৈশিষ্ট্য           │ প্রপোজিশনাল লজিক    │ ফার্স্ট-অর্ডার লজিক  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ সত্তা               │ সরল প্রপোজিশন       │ বস্তু, সম্পর্ক        │
│ কোয়ান্টিফায়ার     │ নেই                  │ ∀ (সবার জন্য), ∃ (আছে)│
│ এক্সপ্রেসিভনেস      │ সীমিত                │ উচ্চ                  │
│ উদাহরণ              │ P → Q                │ ∀x (Human(x)→Mortal(x))│
│ ব্যবহার             │ সরল ধাঁধা            │ KR, এক্সপার্ট সিস্টেম │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ সারাংশ
• জ্ঞান উপস্থাপন AI-এর জন্য তথ্য, নিয়ম ও সম্পর্ক এনকোড করে
• পদ্ধতি: লজিক, সিম্যান্টিক নেটওয়ার্ক, ফ্রেম, প্রোডাকশন রুল, স্ক্রিপ্ট
• প্রপোজিশনাল লজিক: কানেক্টিভ সহ সত্য/মিথ্যা বিবৃতি
• ফার্স্ট-অর্ডার লজিক: জটিল যুক্তির জন্য বস্তু, কোয়ান্টিফায়ার, সম্পর্ক যোগ করে`,
      takeaways: [
        "Knowledge Representation encodes facts for AI reasoning",
        "KR methods: Logic, Semantic Networks, Frames, Rules, Scripts",
        "Propositional Logic uses true/false statements with connectives",
        "First-Order Logic adds objects, quantifiers for complex reasoning"
      ],
      takeawaysBn: [
        "জ্ঞান উপস্থাপন AI যুক্তির জন্য তথ্য এনকোড করে",
        "KR পদ্ধতি: লজিক, সিম্যান্টিক নেটওয়ার্ক, ফ্রেম, রুল, স্ক্রিপ্ট",
        "প্রপোজিশনাল লজিক কানেক্টিভ সহ সত্য/মিথ্যা বিবৃতি ব্যবহার করে",
        "ফার্স্ট-অর্ডার লজিক জটিল যুক্তির জন্য বস্তু, কোয়ান্টিফায়ার যোগ করে"
      ],
      level: "Advanced"
    },
    {
      id: "ai3",
      title: "Search Techniques in AI",
      titleBn: "AI এ সার্চ টেকনিক",
      content: `🔍 SEARCH TECHNIQUES IN AI

Introduction:
Search techniques are strategies for finding solutions by exploring possible states or actions.
• AI problems modeled as state spaces (nodes = states, edges = actions)
• Search is fundamental to problem-solving, planning, and reasoning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CLASSIFICATION OF SEARCH TECHNIQUES

                    SEARCH TECHNIQUES
                           │
           ┌───────────────┼───────────────┐
           │               │               │
    UNINFORMED        INFORMED        ADVERSARIAL
     (BLIND)         (HEURISTIC)        (GAMES)
           │               │               │
     BFS, DFS,       A*, Greedy,     Minimax,
     UCS, DLS        Hill Climbing   Alpha-Beta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 A) UNINFORMED (BLIND) SEARCH
Does not use domain-specific knowledge. Explores all possibilities systematically.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Breadth-First(BFS)  │ Explores level by level. Finds shortest     │
│                     │ path. High memory usage O(b^d)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Depth-First (DFS)   │ Explores deep first, then backtracks.       │
│                     │ Low memory O(bm). Not optimal.              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Uniform-Cost (UCS)  │ Explores node with least path cost first.   │
│                     │ Optimal for weighted graphs.                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Depth-Limited (DLS) │ DFS with depth limit. Avoids infinite paths.│
├─────────────────────┼─────────────────────────────────────────────┤
│ Iterative Deepening │ DFS repeated with increasing depth limits.  │
│ (IDDFS)             │ Combines BFS completeness + DFS memory.     │
└─────────────────────┴─────────────────────────────────────────────┘

BFS Visualization (Level Order):
Level 0:     [A]
            /   \
Level 1:   B     C
          / \   / \
Level 2: D   E F   G

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔸 B) INFORMED (HEURISTIC) SEARCH
Uses domain knowledge (heuristics) to guide search toward goal.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Greedy Best-First   │ Chooses node closest to goal using h(n).    │
│                     │ Fast but not guaranteed optimal.            │
├─────────────────────┼─────────────────────────────────────────────┤
│ A* Search           │ Uses f(n) = g(n) + h(n)                     │
│                     │ g(n)=cost so far, h(n)=estimated to goal    │
│                     │ Complete & optimal if h(n) admissible.      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hill Climbing       │ Moves to neighbor with best heuristic value.│
│                     │ Simple but can get stuck in local maxima.   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Simulated Annealing │ Randomized moves to escape local maxima.    │
│                     │ Can reach global optimum probabilistically. │
├─────────────────────┼─────────────────────────────────────────────┤
│ Beam Search         │ Expands only k best nodes at each level.    │
│                     │ Space-efficient but may miss optimal.       │
└─────────────────────┴─────────────────────────────────────────────┘

A* Formula: f(n) = g(n) + h(n)

Where:
• g(n) = actual cost from start to node n
• h(n) = heuristic estimate from n to goal
• f(n) = estimated total cost through n

Properties of A*:
✓ Complete if finite state space
✓ Optimal if heuristic is admissible (never overestimates)
✓ Time complexity: O(b^d)
✓ Space complexity: O(b^d)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎮 C) ADVERSARIAL SEARCH
Used in games and competitive environments.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Minimax             │ Evaluates moves assuming optimal play       │
│                     │ from both sides (maximizer vs minimizer)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Alpha-Beta Pruning  │ Optimized minimax that skips unnecessary    │
│                     │ branches. Makes search faster.              │
└─────────────────────┴─────────────────────────────────────────────┘

Minimax Tree Visualization:
              MAX
             /   \\
          MIN     MIN
         /  \\    /  \\
       TERM TERM TERM TERM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 D) LOCAL SEARCH / OPTIMIZATION
Works with large state spaces without storing all states.

• Hill Climbing (variant)
• Simulated Annealing
• Genetic Algorithms
• Tabu Search

Focuses on improving a single solution iteratively.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY CONCEPTS IN SEARCH

┌─────────────────┬───────────────────────────────────────────────┐
│ Concept         │ Description                                   │
├─────────────────┼───────────────────────────────────────────────┤
│ State Space     │ All possible states of a problem              │
│ Initial State   │ Starting point of the search                  │
│ Goal State      │ Desired solution or condition                 │
│ Operators/Actions│ Transitions between states                   │
│ Path Cost       │ Cost to reach a state (used in UCS and A*)    │
│ Heuristic h(n)  │ Estimated cost from current state to goal     │
└─────────────────┴───────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ALGORITHM COMPARISON TABLE

┌─────────────────────┬──────────┬──────────┬──────────┬──────────┐
│ Algorithm           │ Complete │ Optimal  │ Time     │ Space    │
├─────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ BFS                 │ Yes      │ Yes*     │ O(b^d)   │ O(b^d)   │
│ DFS                 │ No       │ No       │ O(b^m)   │ O(bm)    │
│ UCS                 │ Yes      │ Yes      │ O(b^C*/ε)│ O(b^C*/ε)│
│ IDDFS               │ Yes      │ Yes*     │ O(b^d)   │ O(bd)    │
│ Greedy Best-First   │ No       │ No       │ O(b^m)   │ O(b^m)   │
│ A*                  │ Yes      │ Yes**    │ O(b^d)   │ O(b^d)   │
└─────────────────────┴──────────┴──────────┴──────────┴──────────┘

* For unweighted graphs
** If heuristic is admissible

✅ SUMMARY
• Uninformed search: No knowledge, systematic (BFS, DFS, UCS)
• Informed search: Uses heuristics (A*, Greedy, Hill Climbing)
• Adversarial search: For games (Minimax, Alpha-Beta)
• Local search: Iterative improvement for large spaces`,
      contentBn: `🔍 AI এ সার্চ টেকনিক

ভূমিকা:
সার্চ টেকনিক হল সম্ভাব্য অবস্থা বা কর্ম অন্বেষণ করে সমাধান খোঁজার কৌশল।
• AI সমস্যা স্টেট স্পেস হিসেবে মডেল করা হয় (নোড = অবস্থা, এজ = কর্ম)
• সমস্যা সমাধান, পরিকল্পনা ও যুক্তির জন্য সার্চ মৌলিক

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সার্চ টেকনিকের শ্রেণিবিভাগ

                    সার্চ টেকনিক
                           │
           ┌───────────────┼───────────────┐
           │               │               │
    আনইনফর্মড         ইনফর্মড         অ্যাডভারসারিয়াল
     (ব্লাইন্ড)       (হিউরিস্টিক)       (গেমস)
           │               │               │
     BFS, DFS,       A*, গ্রিডি,     মিনিম্যাক্স,
     UCS, DLS        হিল ক্লাইম্বিং  আলফা-বিটা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 A) আনইনফর্মড (ব্লাইন্ড) সার্চ
ডোমেইন-নির্দিষ্ট জ্ঞান ব্যবহার করে না। পদ্ধতিগতভাবে সব সম্ভাবনা অন্বেষণ করে।

┌─────────────────────┬─────────────────────────────────────────────┐
│ অ্যালগরিদম         │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ব্রেডথ-ফার্স্ট(BFS)│ স্তরে স্তরে অন্বেষণ। সবচেয়ে ছোট পথ খুঁজে।   │
│                     │ উচ্চ মেমোরি ব্যবহার O(b^d)                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেপথ-ফার্স্ট (DFS) │ প্রথমে গভীরে যায়, তারপর ব্যাকট্র্যাক করে।  │
│                     │ কম মেমোরি O(bm)। অপ্টিমাল নয়।              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউনিফর্ম-কস্ট (UCS)│ সবচেয়ে কম পাথ কস্টের নোড প্রথমে অন্বেষণ করে।│
│                     │ ওয়েটেড গ্রাফের জন্য অপ্টিমাল।              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেপথ-লিমিটেড (DLS) │ ডেপথ সীমা সহ DFS। অসীম পথ এড়ায়।           │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইটারেটিভ ডিপেনিং   │ বাড়তে থাকা ডেপথ সীমা সহ DFS পুনরাবৃত্তি।   │
│ (IDDFS)             │ BFS সম্পূর্ণতা + DFS মেমোরি একত্রিত করে।    │
└─────────────────────┴─────────────────────────────────────────────┘

BFS ভিজুয়ালাইজেশন (স্তর অনুসারে):
স্তর 0:     [A]
            /   \
স্তর 1:    B     C
          / \   / \
স্তর 2:  D   E F   G

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔸 B) ইনফর্মড (হিউরিস্টিক) সার্চ
লক্ষ্যের দিকে সার্চ গাইড করতে ডোমেইন জ্ঞান (হিউরিস্টিক) ব্যবহার করে।

┌─────────────────────┬─────────────────────────────────────────────┐
│ অ্যালগরিদম         │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ গ্রিডি বেস্ট-ফার্স্ট│ h(n) ব্যবহার করে লক্ষ্যের সবচেয়ে কাছের    │
│                     │ নোড বেছে নেয়। দ্রুত কিন্তু অপ্টিমাল নয়।  │
├─────────────────────┼─────────────────────────────────────────────┤
│ A* সার্চ            │ f(n) = g(n) + h(n) ব্যবহার করে              │
│                     │ g(n)=এখন পর্যন্ত খরচ, h(n)=লক্ষ্যে অনুমিত   │
│                     │ সম্পূর্ণ ও অপ্টিমাল যদি h(n) অ্যাডমিসিবল    │
├─────────────────────┼─────────────────────────────────────────────┤
│ হিল ক্লাইম্বিং      │ সেরা হিউরিস্টিক মানের প্রতিবেশীতে চলে।     │
│                     │ সরল কিন্তু লোকাল ম্যাক্সিমায় আটকে যেতে পারে│
├─────────────────────┼─────────────────────────────────────────────┤
│ সিমুলেটেড অ্যানিলিং│ লোকাল ম্যাক্সিমা থেকে বাঁচতে র্যান্ডমাইজড   │
│                     │ মুভ। সম্ভাব্যভাবে গ্লোবাল অপটিমামে পৌঁছায়  │
├─────────────────────┼─────────────────────────────────────────────┤
│ বিম সার্চ           │ প্রতিটি স্তরে শুধু k সেরা নোড প্রসারিত করে। │
│                     │ স্পেস-দক্ষ কিন্তু অপ্টিমাল মিস করতে পারে    │
└─────────────────────┴─────────────────────────────────────────────┘

A* সূত্র: f(n) = g(n) + h(n)

যেখানে:
• g(n) = শুরু থেকে নোড n পর্যন্ত প্রকৃত খরচ
• h(n) = n থেকে লক্ষ্য পর্যন্ত হিউরিস্টিক অনুমান
• f(n) = n এর মাধ্যমে আনুমানিক মোট খরচ

A* এর বৈশিষ্ট্য:
✓ সম্পূর্ণ যদি সসীম স্টেট স্পেস থাকে
✓ অপ্টিমাল যদি হিউরিস্টিক অ্যাডমিসিবল হয় (কখনো বেশি অনুমান না করে)
✓ সময় জটিলতা: O(b^d)
✓ স্থান জটিলতা: O(b^d)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎮 C) অ্যাডভারসারিয়াল সার্চ
গেমস ও প্রতিযোগিতামূলক পরিবেশে ব্যবহৃত হয়।

┌─────────────────────┬─────────────────────────────────────────────┐
│ অ্যালগরিদম         │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ মিনিম্যাক্স         │ উভয় পক্ষের (ম্যাক্সিমাইজার বনাম মিনিমাইজার)│
│                     │ অপ্টিমাল খেলা ধরে মুভ মূল্যায়ন করে         │
├─────────────────────┼─────────────────────────────────────────────┤
│ আলফা-বিটা প্রুনিং  │ অপ্রয়োজনীয় শাখা বাদ দিয়ে অপটিমাইজড      │
│                     │ মিনিম্যাক্স। সার্চ দ্রুত করে।              │
└─────────────────────┴─────────────────────────────────────────────┘

মিনিম্যাক্স ট্রি ভিজুয়ালাইজেশন:
              MAX
             /   \\
          MIN     MIN
         /  \\    /  \\
       TERM TERM TERM TERM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 D) লোকাল সার্চ / অপটিমাইজেশন
সব অবস্থা সংরক্ষণ না করে বড় স্টেট স্পেস নিয়ে কাজ করে।

• হিল ক্লাইম্বিং (ভ্যারিয়েন্ট)
• সিমুলেটেড অ্যানিলিং
• জেনেটিক অ্যালগরিদম
• টাবু সার্চ

পুনরাবৃত্তিমূলকভাবে একটি সমাধান উন্নত করার উপর ফোকাস করে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 সার্চের মূল ধারণা

┌─────────────────┬───────────────────────────────────────────────┐
│ ধারণা           │ বর্ণনা                                       │
├─────────────────┼───────────────────────────────────────────────┤
│ স্টেট স্পেস     │ একটি সমস্যার সব সম্ভাব্য অবস্থা              │
│ প্রাথমিক অবস্থা │ সার্চের শুরুর বিন্দু                         │
│ লক্ষ্য অবস্থা   │ কাঙ্ক্ষিত সমাধান বা শর্ত                     │
│ অপারেটর/কর্ম    │ অবস্থার মধ্যে পরিবর্তন                       │
│ পাথ কস্ট        │ একটি অবস্থায় পৌঁছানোর খরচ (UCS ও A* তে ব্যবহৃত)│
│ হিউরিস্টিক h(n) │ বর্তমান অবস্থা থেকে লক্ষ্যে অনুমিত খরচ       │
└─────────────────┴───────────────────────────────────────────────┘

✅ সারাংশ
• আনইনফর্মড সার্চ: কোনো জ্ঞান নেই, পদ্ধতিগত অন্বেষণ (BFS, DFS, UCS)
• ইনফর্মড সার্চ: সার্চ গাইড করতে হিউরিস্টিক ব্যবহার করে (A*, গ্রিডি, হিল ক্লাইম্বিং)
• অ্যাডভারসারিয়াল সার্চ: গেমসের জন্য (মিনিম্যাক্স, আলফা-বিটা)
• লোকাল সার্চ: বড় স্পেসের জন্য পুনরাবৃত্তিমূলক উন্নতি`,
      takeaways: [
        "Search techniques explore state spaces to find solutions",
        "Uninformed: BFS, DFS, UCS - no domain knowledge",
        "Informed: A*, Greedy, Hill Climbing - uses heuristics",
        "A* is optimal and complete with admissible heuristic"
      ],
      takeawaysBn: [
        "সার্চ টেকনিক সমাধান খুঁজতে স্টেট স্পেস অন্বেষণ করে",
        "আনইনফর্মড: BFS, DFS, UCS - কোনো ডোমেইন জ্ঞান নেই",
        "ইনফর্মড: A*, গ্রিডি, হিল ক্লাইম্বিং - হিউরিস্টিক ব্যবহার করে",
        "A* অ্যাডমিসিবল হিউরিস্টিক দিয়ে অপ্টিমাল ও সম্পূর্ণ"
      ],
      level: "Advanced"
    },
    {
      id: "ai4",
      title: "Probabilistic Reasoning & NLP",
      titleBn: "প্রোবাবিলিস্টিক রিজনিং ও NLP",
      content: `🎲 PROBABILISTIC REASONING IN AI

Definition:
Probabilistic reasoning is the process of drawing conclusions and making decisions under uncertainty using probability theory.
• AI systems often deal with incomplete, uncertain, or noisy data
• Allows AI to quantify uncertainty and make rational decisions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 KEY CONCEPTS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Random Variable     │ Represents uncertain quantities             │
│                     │ Example: Rain = Yes/No                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Probability         │ Likelihood of an event: P(Event) ∈ [0,1]    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Conditional         │ Probability given another event:            │
│ Probability         │ P(A|B) = P(A∧B)/P(B)                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Joint Probability   │ Probability of multiple events together     │
│                     │ P(A ∧ B)                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Independence        │ Two events are independent if               │
│                     │ P(A|B) = P(A)                               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 PROBABILISTIC MODELS IN AI

1. BAYESIAN NETWORKS (Belief Networks)
   • Graphical model representing variables and conditional dependencies
   • Nodes: Random variables
   • Edges: Probabilistic dependencies

   Example Structure:
   
        ┌─────────┐
        │  Rain   │
        └────┬────┘
             │
        ┌────┴────┐
        │         │
        ▼         ▼
   ┌───────┐  ┌──────────┐
   │WetGrass│  │Sprinkler │
   └────────┘  └──────────┘

   • Can compute probability of rain given wet grass using Bayes' theorem

2. HIDDEN MARKOV MODELS (HMMs)
   • Used for sequential or temporal data
   • Applications: Speech recognition, POS tagging
   • Components: States, observations, transition probabilities, emission probabilities

   HMM Structure:
   Hidden:  S1 → S2 → S3 → ... → Sn
             ↓    ↓    ↓         ↓
   Observed: O1   O2   O3   ...  On

3. MARKOV DECISION PROCESSES (MDPs)
   • Framework for decision-making under uncertainty
   • Components: States, actions, transition probabilities, rewards
   • Goal: Maximize expected cumulative reward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 KEY TECHNIQUES

Bayes' Theorem (Bayesian Inference):
P(H|E) = [P(E|H) × P(H)] / P(E)

Where:
• P(H|E) = Posterior probability (after seeing evidence)
• P(E|H) = Likelihood (probability of evidence given hypothesis)
• P(H) = Prior probability (before evidence)
• P(E) = Marginal probability of evidence

Maximum Likelihood Estimation (MLE):
Find parameters θ that maximize P(Data | θ)

Expectation-Maximization (EM):
Iterative method for learning with hidden variables

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 APPLICATIONS
• Expert Systems: Medical diagnosis under uncertainty
• Robotics: Sensor fusion and navigation
• NLP: Speech recognition, POS tagging
• Recommendation Systems: Probabilistic user preference prediction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 NATURAL LANGUAGE PROCESSING (NLP)

Definition:
NLP is a field of AI that focuses on enabling computers to understand, interpret, generate, and respond to human language.

Goal: Bridge gap between human communication and computer understanding

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY COMPONENTS OF NLP

┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Morphological       │ Understand word structure, roots, affixes   │
│ Lexical Analysis    │ Tokenization: breaking text into words      │
│ Syntactic Analysis  │ Determine grammatical structure (parse trees)│
│ Semantic Analysis   │ Understand meaning of words and sentences   │
│ Pragmatic Analysis  │ Contextual meaning in conversation          │
│ Discourse Analysis  │ Understand relationships between sentences  │
│ Speech Processing   │ Speech-to-text and text-to-speech           │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 NLP TASKS

1. Text Classification: Spam detection, sentiment analysis
2. Named Entity Recognition (NER): Identify names, locations, dates
3. Machine Translation: Translate between languages (Google Translate)
4. Part-of-Speech Tagging (POS): Label words as nouns, verbs, etc.
5. Question Answering & Chatbots: Respond to user queries
6. Text Summarization: Generate concise summaries
7. Information Retrieval: Search engines

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 TECHNIQUES IN NLP

• Rule-Based: Grammar and dictionary methods (early NLP)
• Statistical: HMM, probabilistic models
• Machine Learning: Supervised learning for classification
• Deep Learning: RNN, LSTM, Transformers (BERT, GPT)

NLP Pipeline:
Raw Text → Tokenization → POS Tagging → Parsing → Semantic Analysis → Output

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ CHALLENGES IN NLP
• Ambiguity: Words/sentences with multiple meanings
• Context understanding: Sarcasm, idioms, cultural references
• Syntax vs semantics: Grammar ≠ meaning
• Multilinguality: Different languages and scripts

✅ SUMMARY
• Probabilistic reasoning handles uncertainty using probability theory
• Models: Bayesian Networks, HMMs, MDPs
• NLP enables computers to understand and generate human language
• Applications: Chatbots, translation, sentiment analysis, search engines`,
      contentBn: `🎲 AI এ প্রোবাবিলিস্টিক রিজনিং

সংজ্ঞা:
প্রোবাবিলিস্টিক রিজনিং হল অনিশ্চয়তার অধীনে সম্ভাব্যতা তত্ত্ব ব্যবহার করে সিদ্ধান্তে পৌঁছানোর প্রক্রিয়া।
• AI সিস্টেম প্রায়ই অসম্পূর্ণ, অনিশ্চিত বা গোলমেলে ডেটা নিয়ে কাজ করে
• AI কে অনিশ্চয়তা পরিমাপ করতে এবং যুক্তিসঙ্গত সিদ্ধান্ত নিতে দেয়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 মূল ধারণা

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ র্যান্ডম ভেরিয়েবল  │ অনিশ্চিত পরিমাণ প্রতিনিধিত্ব করে            │
│                     │ উদাহরণ: বৃষ্টি = হ্যাঁ/না                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ সম্ভাব্যতা          │ একটি ঘটনার সম্ভাবনা: P(ঘটনা) ∈ [0,1]        │
├─────────────────────┼─────────────────────────────────────────────┤
│ শর্তসাপেক্ষ         │ অন্য ঘটনা দেওয়া সম্ভাবনা:                  │
│ সম্ভাব্যতা          │ P(A|B) = P(A∧B)/P(B)                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ যৌথ সম্ভাব্যতা     │ একসাথে একাধিক ঘটনার সম্ভাব্যতা              │
│                     │ P(A ∧ B)                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্বাধীনতা           │ দুটি ঘটনা স্বাধীন যদি P(A|B) = P(A)         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 AI এ প্রোবাবিলিস্টিক মডেল

১. বেইসিয়ান নেটওয়ার্ক (বিশ্বাস নেটওয়ার্ক)
   • ভেরিয়েবল ও শর্তসাপেক্ষ নির্ভরতা উপস্থাপনকারী গ্রাফিক্যাল মডেল
   • নোড: র্যান্ডম ভেরিয়েবল
   • এজ: প্রোবাবিলিস্টিক নির্ভরতা

   উদাহরণ গঠন:
   
        ┌─────────┐
        │ বৃষ্টি  │
        └────┬────┘
             │
        ┌────┴────┐
        │         │
        ▼         ▼
   ┌───────┐  ┌──────────┐
   │ভেজা ঘাস│  │স্প্রিংকলার│
   └────────┘  └──────────┘

   • ভেজা ঘাস দেওয়া বৃষ্টির সম্ভাবনা বেইসের উপপাদ্য ব্যবহার করে গণনা করতে পারে

২. হিডেন মার্কভ মডেল (HMM)
   • সিকোয়েনশিয়াল বা টেম্পোরাল ডেটার জন্য ব্যবহৃত
   • অ্যাপ্লিকেশন: বক্তৃতা শনাক্তকরণ, POS ট্যাগিং
   • উপাদান: অবস্থা, পর্যবেক্ষণ, পরিবর্তন সম্ভাব্যতা, নির্গমন সম্ভাব্যতা

   HMM গঠন:
   হিডেন:   S1 → S2 → S3 → ... → Sn
             ↓    ↓    ↓         ↓
   পর্যবেক্ষিত: O1   O2   O3   ...  On

৩. মার্কভ ডিসিশন প্রসেস (MDP)
   • অনিশ্চয়তার অধীনে সিদ্ধান্ত গ্রহণের কাঠামো
   • উপাদান: অবস্থা, কর্ম, পরিবর্তন সম্ভাব্যতা, পুরস্কার
   • লক্ষ্য: ক্রমবর্ধমান প্রত্যাশিত পুরস্কার সর্বোচ্চ করা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 মূল কৌশল

বেইসের উপপাদ্য (বেইসিয়ান ইনফারেন্স):
P(H|E) = [P(E|H) × P(H)] / P(E)

যেখানে:
• P(H|E) = পোস্টেরিয়র সম্ভাব্যতা (প্রমাণ দেখার পর)
• P(E|H) = লাইকেলিহুড (হাইপোথিসিস দেওয়া প্রমাণের সম্ভাব্যতা)
• P(H) = প্রায়োর সম্ভাব্যতা (প্রমাণের আগে)
• P(E) = প্রমাণের প্রান্তিক সম্ভাব্যতা

ম্যাক্সিমাম লাইকেলিহুড এস্টিমেশন (MLE):
θ প্যারামিটার খুঁজুন যা P(Data | θ) সর্বোচ্চ করে

এক্সপেক্টেশন-ম্যাক্সিমাইজেশন (EM):
লুকানো ভেরিয়েবল সহ শেখার জন্য পুনরাবৃত্তিমূলক পদ্ধতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 অ্যাপ্লিকেশন
• এক্সপার্ট সিস্টেম: অনিশ্চয়তার অধীনে মেডিকেল ডায়াগনোসিস
• রোবোটিক্স: সেন্সর ফিউশন ও নেভিগেশন
• NLP: বক্তৃতা শনাক্তকরণ, POS ট্যাগিং
• রেকমেন্ডেশন সিস্টেম: প্রোবাবিলিস্টিক ব্যবহারকারী পছন্দ পূর্বাভাস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 ন্যাচারাল ল্যাংগুয়েজ প্রসেসিং (NLP)

সংজ্ঞা:
NLP হল AI এর একটি ক্ষেত্র যা কম্পিউটারকে মানব ভাষা বুঝতে, ব্যাখ্যা করতে, তৈরি করতে এবং সাড়া দিতে সক্ষম করার উপর ফোকাস করে।

লক্ষ্য: মানব যোগাযোগ ও কম্পিউটার বোঝার মধ্যে ব্যবধান পূরণ করা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 NLP এর মূল উপাদান

┌─────────────────────┬─────────────────────────────────────────────┐
│ উপাদান              │ কাজ                                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ মরফোলজিক্যাল       │ শব্দ গঠন, মূল, উপসর্গ বুঝতে                  │
│ লেক্সিক্যাল অ্যানালাইসিস│ টোকেনাইজেশন: টেক্সট শব্দে ভাঙা         │
│ সিনট্যাক্টিক অ্যানালাইসিস│ ব্যাকরণগত গঠন নির্ণয় (পার্স ট্রি)      │
│ সিম্যান্টিক অ্যানালাইসিস│ শব্দ ও বাক্যের অর্থ বোঝা                │
│ প্রাগম্যাটিক অ্যানালাইসিস│ কথোপকথনে প্রাসঙ্গিক অর্থ               │
│ ডিসকোর্স অ্যানালাইসিস│ বাক্য ও অনুচ্ছেদের মধ্যে সম্পর্ক বোঝা      │
│ স্পিচ প্রসেসিং     │ বক্তৃতা-থেকে-টেক্সট ও টেক্সট-থেকে-বক্তৃতা    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 NLP কাজ

১. টেক্সট ক্লাসিফিকেশন: স্প্যাম সনাক্তকরণ, সেন্টিমেন্ট অ্যানালাইসিস
২. নেমড এন্টিটি রিকগনিশন (NER): নাম, অবস্থান, তারিখ শনাক্তকরণ
৩. মেশিন ট্রান্সলেশন: ভাষার মধ্যে অনুবাদ (গুগল ট্রান্সলেট)
৪. পার্ট-অফ-স্পিচ ট্যাগিং (POS): শব্দকে বিশেষ্য, ক্রিয়া ইত্যাদি লেবেল করা
৫. কোয়েশ্চন আন্সারিং ও চ্যাটবট: ব্যবহারকারী প্রশ্নের উত্তর দেওয়া
৬. টেক্সট সামারাইজেশন: সংক্ষিপ্ত সারাংশ তৈরি করা
৭. ইনফরমেশন রিট্রিভাল: সার্চ ইঞ্জিন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 NLP তে কৌশল

• রুল-ভিত্তিক: ব্যাকরণ ও অভিধান পদ্ধতি (প্রাথমিক NLP)
• স্ট্যাটিস্টিক্যাল: HMM, প্রোবাবিলিস্টিক মডেল
• মেশিন লার্নিং: ক্লাসিফিকেশনের জন্য সুপারভাইজড লার্নিং
• ডিপ লার্নিং: RNN, LSTM, ট্রান্সফর্মার (BERT, GPT)

NLP পাইপলাইন:
কাঁচা টেক্সট → টোকেনাইজেশন → POS ট্যাগিং → পার্সিং → সিম্যান্টিক অ্যানালাইসিস → আউটপুট

✅ সারাংশ
• প্রোবাবিলিস্টিক রিজনিং সম্ভাব্যতা তত্ত্ব ব্যবহার করে অনিশ্চয়তা পরিচালনা করে
• মডেল: বেইসিয়ান নেটওয়ার্ক, HMM, MDP
• NLP কম্পিউটারকে মানব ভাষা বুঝতে ও তৈরি করতে সক্ষম করে
• অ্যাপ্লিকেশন: চ্যাটবট, অনুবাদ, সেন্টিমেন্ট অ্যানালাইসিস, সার্চ ইঞ্জিন`,
      takeaways: [
        "Probabilistic reasoning handles uncertainty using Bayes' theorem",
        "Bayesian Networks model conditional dependencies graphically",
        "NLP enables computers to understand and generate human language",
        "Key NLP tasks: classification, NER, translation, summarization"
      ],
      takeawaysBn: [
        "প্রোবাবিলিস্টিক রিজনিং বেইসের উপপাদ্য ব্যবহার করে অনিশ্চয়তা পরিচালনা করে",
        "বেইসিয়ান নেটওয়ার্ক শর্তসাপেক্ষ নির্ভরতা গ্রাফিক্যালি মডেল করে",
        "NLP কম্পিউটারকে মানব ভাষা বুঝতে ও তৈরি করতে সক্ষম করে",
        "মূল NLP কাজ: ক্লাসিফিকেশন, NER, অনুবাদ, সামারাইজেশন"
      ],
      level: "Advanced"
    },
    {
      id: "ai5",
      title: "Expert Systems & Machine Learning Fundamentals",
      titleBn: "এক্সপার্ট সিস্টেম ও মেশিন লার্নিং মৌলিক",
      content: `🧠 INTRODUCTION TO EXPERT SYSTEMS

Definition:
An Expert System (ES) is a computer program that mimics the decision-making ability of a human expert.
• Uses knowledge and reasoning to solve problems in a specific domain
• Provides advice, diagnosis, or recommendations
• One of the earliest practical applications of AI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ COMPONENTS OF AN EXPERT SYSTEM

┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Knowledge Base      │ Stores facts and rules about the domain     │
│                     │ Example: "If fever and cough → possible flu"│
├─────────────────────┼─────────────────────────────────────────────┤
│ Inference Engine    │ Applies reasoning to deduce new facts       │
│                     │ Uses forward/backward chaining              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Working Memory      │ Stores temporary facts about current problem│
├─────────────────────┼─────────────────────────────────────────────┤
│ User Interface      │ Allows user to interact with the system     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Explanation Facility│ Explains reasoning steps to the user        │
│                     │ "Because symptom X and Y, diagnosis is Z"   │
└─────────────────────┴─────────────────────────────────────────────┘

Expert System Architecture:

┌─────────────────────────────────────────────────────────┐
│                    USER INTERFACE                        │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────────┐
│                    INFERENCE ENGINE                      │
│         ┌───────────────┼───────────────┐               │
│         │ Forward       │ Backward      │               │
│         │ Chaining      │ Chaining      │               │
│         └───────────────┼───────────────┘               │
└─────────────────────────┼───────────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────────┐
│         ┌───────────────┴───────────────┐               │
│         │         KNOWLEDGE BASE         │               │
│         │   Facts + Rules + Heuristics   │               │
│         └───────────────────────────────┘               │
│                    WORKING MEMORY                        │
└─────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CHARACTERISTICS OF EXPERT SYSTEMS
• Domain-specific: Expert in narrow field (medical, engineering)
• Rule-based reasoning: Uses IF-THEN rules
• Handles uncertainty: Probabilistic or fuzzy logic
• Non-learning (usually): Knowledge manually input by experts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 TYPES OF EXPERT SYSTEMS
1. Rule-Based Systems: IF-THEN rules for reasoning
2. Frame-Based Systems: Knowledge in structures with slots
3. Fuzzy Expert Systems: Handle uncertainty with fuzzy logic
4. Case-Based Reasoning: Solve based on similar past cases

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 APPLICATIONS
• Medical Diagnosis: MYCIN, CADUCEUS
• Engineering: Fault detection
• Finance: Loan approval, stock analysis
• Process Control: Plant monitoring

✅ PROS: Consistent, expert-level advice, explainable
❌ CONS: Knowledge acquisition difficult, domain-limited

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 INTRODUCTION TO MACHINE LEARNING

Definition:
Machine Learning (ML) is a branch of AI that allows computers to learn from data and improve without explicit programming.

Key idea: Experience → Learning → Improved Performance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 KEY CONCEPTS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Data                │ Input examples (features and labels)        │
│ Model               │ Mathematical mapping inputs→outputs         │
│ Training            │ Process of learning the model from data     │
│ Prediction          │ Using learned model on new data             │
│ Feature             │ Individual measurable property              │
│ Label/Target        │ Desired output for supervised learning      │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 MACHINE LEARNING WORKFLOW

┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Data    │ -> │   Data   │ -> │  Model   │ -> │ Training │
│Collection│    │Preprocess│    │ Selection│    │          │
└──────────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                      │
┌──────────┐    ┌──────────┐    ┌──────────┐         │
│Deployment│ <- │Evaluation│ <- │ Testing  │ <───────┘
└──────────┘    └──────────┘    └──────────┘

Step 1: Data Collection → Gather relevant data
Step 2: Data Preprocessing → Clean, normalize, prepare
Step 3: Feature Engineering → Select/create features
Step 4: Model Selection → Choose algorithm
Step 5: Training → Fit model on training data
Step 6: Evaluation → Test on unseen data
Step 7: Deployment → Use for real-world predictions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 TYPES OF MACHINE LEARNING

1. SUPERVISED LEARNING
   • Learn from labeled data (input-output pairs)
   • Goal: Predict outputs for new inputs
   
   ┌─────────────────────────────────────────┐
   │  Labeled Data: (X, Y)                   │
   │  X = Features, Y = Label                │
   │  Learn: f(X) → Y                        │
   └─────────────────────────────────────────┘
   
   • Classification: Predict discrete labels (spam/not spam)
   • Regression: Predict continuous values (house price)

2. UNSUPERVISED LEARNING
   • Learn from unlabeled data
   • Goal: Discover patterns/structure
   
   ┌─────────────────────────────────────────┐
   │  Unlabeled Data: (X)                    │
   │  Find hidden structure                  │
   └─────────────────────────────────────────┘
   
   • Clustering: Group similar data points
   • Dimensionality Reduction: Compress features

3. REINFORCEMENT LEARNING
   • Learn from rewards/penalties
   • Agent interacts with environment
   • Goal: Maximize cumulative reward

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 COMMON ALGORITHMS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Category            │ Algorithms                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Supervised          │ Linear Regression, Logistic Regression,     │
│                     │ Decision Trees, SVM, Random Forest,         │
│                     │ Neural Networks                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Unsupervised        │ K-Means, Hierarchical Clustering, PCA,      │
│                     │ DBSCAN, Gaussian Mixture Models             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reinforcement       │ Q-Learning, Deep Q-Networks,                │
│                     │ Policy Gradient                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SUPERVISED vs UNSUPERVISED LEARNING

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Supervised           │ Unsupervised         │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Data                │ Labeled              │ Unlabeled            │
│ Goal                │ Predict labels       │ Find patterns        │
│ Feedback            │ Uses known output    │ No feedback          │
│ Algorithms          │ Regression, Classif. │ Clustering, Dim Red. │
│ Applications        │ Spam detection,      │ Market segmentation, │
│                     │ Medical diagnosis    │ Anomaly detection    │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Expert Systems: Rule-based AI mimicking human experts
• ML: Systems learn from data without explicit programming
• Supervised: Labeled data for prediction
• Unsupervised: Unlabeled data for pattern discovery
• Workflow: Data → Model → Train → Evaluate → Deploy`,
      contentBn: `🧠 এক্সপার্ট সিস্টেমের পরিচিতি

সংজ্ঞা:
একটি এক্সপার্ট সিস্টেম (ES) হল একটি কম্পিউটার প্রোগ্রাম যা একজন মানব বিশেষজ্ঞের সিদ্ধান্ত গ্রহণের ক্ষমতা অনুকরণ করে।
• একটি নির্দিষ্ট ডোমেইনে সমস্যা সমাধানের জন্য জ্ঞান ও যুক্তি ব্যবহার করে
• পরামর্শ, ডায়াগনোসিস বা সুপারিশ প্রদান করে
• AI এর প্রাথমিক ব্যবহারিক অ্যাপ্লিকেশনগুলির মধ্যে একটি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ এক্সপার্ট সিস্টেমের উপাদান

┌─────────────────────┬─────────────────────────────────────────────┐
│ উপাদান              │ কাজ                                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ নলেজ বেস           │ ডোমেইন সম্পর্কে তথ্য ও নিয়ম সংরক্ষণ করে     │
│                     │ উদাহরণ: "যদি জ্বর ও কাশি → সম্ভাব্য ফ্লু"    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইনফারেন্স ইঞ্জিন   │ নতুন তথ্য অনুমান করতে যুক্তি প্রয়োগ করে     │
│                     │ ফরওয়ার্ড/ব্যাকওয়ার্ড চেইনিং ব্যবহার করে   │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়ার্কিং মেমোরি   │ বর্তমান সমস্যা সম্পর্কে অস্থায়ী তথ্য সংরক্ষণ │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউজার ইন্টারফেস    │ ব্যবহারকারীকে সিস্টেমের সাথে যোগাযোগ করতে দেয়│
├─────────────────────┼─────────────────────────────────────────────┤
│ এক্সপ্ল্যানেশন     │ ব্যবহারকারীকে যুক্তির ধাপ ব্যাখ্যা করে       │
│ ফ্যাসিলিটি          │ "লক্ষণ X ও Y থাকায়, রোগ নির্ণয় Z"         │
└─────────────────────┴─────────────────────────────────────────────┘

এক্সপার্ট সিস্টেম আর্কিটেকচার:

┌─────────────────────────────────────────────────────────┐
│                    ইউজার ইন্টারফেস                      │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────────┐
│                    ইনফারেন্স ইঞ্জিন                     │
│         ┌───────────────┼───────────────┐               │
│         │ ফরওয়ার্ড     │ ব্যাকওয়ার্ড   │               │
│         │ চেইনিং       │ চেইনিং       │               │
│         └───────────────┼───────────────┘               │
└─────────────────────────┼───────────────────────────────┘
                          │
┌─────────────────────────┼───────────────────────────────┐
│         ┌───────────────┴───────────────┐               │
│         │         নলেজ বেস              │               │
│         │   তথ্য + নিয়ম + হিউরিস্টিক   │               │
│         └───────────────────────────────┘               │
│                    ওয়ার্কিং মেমোরি                     │
└─────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 এক্সপার্ট সিস্টেমের বৈশিষ্ট্য
• ডোমেইন-নির্দিষ্ট: সংকীর্ণ ক্ষেত্রে বিশেষজ্ঞ (মেডিকেল, ইঞ্জিনিয়ারিং)
• নিয়ম-ভিত্তিক যুক্তি: IF-THEN নিয়ম ব্যবহার করে
• অনিশ্চয়তা পরিচালনা করে: প্রোবাবিলিস্টিক বা ফাজি লজিক
• অ-শিক্ষণ (সাধারণত): বিশেষজ্ঞদের দ্বারা ম্যানুয়ালি জ্ঞান ইনপুট

🔧 এক্সপার্ট সিস্টেমের প্রকার
১. রুল-ভিত্তিক সিস্টেম: IF-THEN নিয়ম
২. ফ্রেম-ভিত্তিক সিস্টেম: স্লট সহ কাঠামোতে জ্ঞান
৩. ফাজি এক্সপার্ট সিস্টেম: ফাজি লজিক দিয়ে অনিশ্চয়তা
৪. কেস-ভিত্তিক রিজনিং: অনুরূপ অতীত ঘটনার ভিত্তিতে সমাধান

💡 অ্যাপ্লিকেশন
• মেডিকেল ডায়াগনোসিস: MYCIN, CADUCEUS
• ইঞ্জিনিয়ারিং: ফল্ট সনাক্তকরণ
• ফাইন্যান্স: লোন অনুমোদন, স্টক বিশ্লেষণ
• প্রসেস কন্ট্রোল: প্ল্যান্ট মনিটরিং

✅ সুবিধা: সামঞ্জস্যপূর্ণ, বিশেষজ্ঞ-স্তরের পরামর্শ, ব্যাখ্যাযোগ্য
❌ অসুবিধা: জ্ঞান আহরণ কঠিন, ডোমেইন-সীমিত

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 মেশিন লার্নিংয়ের পরিচিতি

সংজ্ঞা:
মেশিন লার্নিং (ML) হল AI এর একটি শাখা যা কম্পিউটারকে স্পষ্ট প্রোগ্রামিং ছাড়া ডেটা থেকে শিখতে এবং উন্নতি করতে দেয়।

মূল ধারণা: অভিজ্ঞতা → শেখা → উন্নত কর্মক্ষমতা

📊 মূল ধারণা

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেটা                │ ইনপুট উদাহরণ (ফিচার ও লেবেল)               │
│ মডেল               │ গাণিতিক ম্যাপিং ইনপুট→আউটপুট                │
│ ট্রেনিং             │ ডেটা থেকে মডেল শেখার প্রক্রিয়া             │
│ প্রেডিকশন           │ নতুন ডেটায় শেখা মডেল ব্যবহার               │
│ ফিচার              │ পৃথক পরিমাপযোগ্য বৈশিষ্ট্য                   │
│ লেবেল/টার্গেট       │ সুপারভাইজড লার্নিংয়ের জন্য কাঙ্ক্ষিত আউটপুট│
└─────────────────────┴─────────────────────────────────────────────┘

📈 মেশিন লার্নিং ওয়ার্কফ্লো

┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ ডেটা     │ -> │ ডেটা     │ -> │ মডেল     │ -> │ ট্রেনিং  │
│ সংগ্রহ   │    │প্রিপ্রসেস│    │ নির্বাচন │    │          │
└──────────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                      │
┌──────────┐    ┌──────────┐    ┌──────────┐         │
│ডেপ্লয়মেন্ট│ <- │মূল্যায়ন │ <- │ টেস্টিং  │ <───────┘
└──────────┘    └──────────┘    └──────────┘

ধাপ ১: ডেটা সংগ্রহ → প্রাসঙ্গিক ডেটা সংগ্রহ
ধাপ ২: ডেটা প্রিপ্রসেসিং → পরিষ্কার, স্বাভাবিককরণ, প্রস্তুত
ধাপ ৩: ফিচার ইঞ্জিনিয়ারিং → ফিচার নির্বাচন/তৈরি
ধাপ ৪: মডেল নির্বাচন → অ্যালগরিদম নির্বাচন
ধাপ ৫: ট্রেনিং → ট্রেনিং ডেটায় মডেল ফিট
ধাপ ৬: মূল্যায়ন → অদেখা ডেটায় পরীক্ষা
ধাপ ৭: ডেপ্লয়মেন্ট → বাস্তব-বিশ্বের পূর্বাভাসের জন্য ব্যবহার

📚 মেশিন লার্নিংয়ের প্রকার

১. সুপারভাইজড লার্নিং
   • লেবেলযুক্ত ডেটা থেকে শেখে (ইনপুট-আউটপুট জোড়া)
   • লক্ষ্য: নতুন ইনপুটের জন্য আউটপুট পূর্বাভাস
   
   ┌─────────────────────────────────────────┐
   │  লেবেলযুক্ত ডেটা: (X, Y)               │
   │  X = ফিচার, Y = লেবেল                  │
   │  শেখে: f(X) → Y                         │
   └─────────────────────────────────────────┘
   
   • ক্লাসিফিকেশন: বিচ্ছিন্ন লেবেল পূর্বাভাস (স্প্যাম/স্প্যাম নয়)
   • রিগ্রেশন: ধারাবাহিক মান পূর্বাভাস (বাড়ির দাম)

২. আনসুপারভাইজড লার্নিং
   • লেবেলবিহীন ডেটা থেকে শেখে
   • লক্ষ্য: প্যাটার্ন/গঠন আবিষ্কার
   
   ┌─────────────────────────────────────────┐
   │  লেবেলবিহীন ডেটা: (X)                  │
   │  লুকানো গঠন খুঁজুন                     │
   └─────────────────────────────────────────┘
   
   • ক্লাস্টারিং: অনুরূপ ডেটা পয়েন্ট গ্রুপ করা
   • ডাইমেনশনালিটি রিডাকশন: ফিচার সংকুচিত করা

৩. রিইনফোর্সমেন্ট লার্নিং
   • পুরস্কার/শাস্তি থেকে শেখে
   • এজেন্ট এনভায়রনমেন্টের সাথে কাজ করে
   • লক্ষ্য: ক্রমবর্ধমান পুরস্কার সর্বোচ্চ করা

🔧 সাধারণ অ্যালগরিদম

┌─────────────────────┬─────────────────────────────────────────────┐
│ বিভাগ               │ অ্যালগরিদম                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ সুপারভাইজড        │ লিনিয়ার রিগ্রেশন, লজিস্টিক রিগ্রেশন,        │
│                     │ ডিসিশন ট্রি, SVM, র্যান্ডম ফরেস্ট,          │
│                     │ নিউরাল নেটওয়ার্ক                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ আনসুপারভাইজড      │ K-মিনস, হায়ারার্কিক্যাল ক্লাস্টারিং, PCA,  │
│                     │ DBSCAN, গাউসিয়ান মিক্সচার মডেল             │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিইনফোর্সমেন্ট     │ Q-লার্নিং, ডিপ Q-নেটওয়ার্ক,                │
│                     │ পলিসি গ্রেডিয়েন্ট                           │
└─────────────────────┴─────────────────────────────────────────────┘

📊 সুপারভাইজড বনাম আনসুপারভাইজড লার্নিং

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ বৈশিষ্ট্য           │ সুপারভাইজড          │ আনসুপারভাইজড        │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ ডেটা                │ লেবেলযুক্ত           │ লেবেলবিহীন           │
│ লক্ষ্য              │ লেবেল পূর্বাভাস      │ প্যাটার্ন খোঁজা       │
│ ফিডব্যাক            │ পরিচিত আউটপুট ব্যবহার│ কোনো ফিডব্যাক নেই     │
│ অ্যালগরিদম         │ রিগ্রেশন, ক্লাসিফিকেশন│ ক্লাস্টারিং, ডাইমেনশনালিটি রিডাকশন │
│ অ্যাপ্লিকেশন       │ স্প্যাম সনাক্তকরণ,    │ বাজার বিভাজন,         │
│                     │ মেডিকেল ডায়াগনোসিস  │ অ্যানোমালি সনাক্তকরণ  │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ সারাংশ
• এক্সপার্ট সিস্টেম: মানব বিশেষজ্ঞ অনুকরণকারী নিয়ম-ভিত্তিক AI
• ML: সিস্টেম স্পষ্ট প্রোগ্রামিং ছাড়া ডেটা থেকে শেখে
• সুপারভাইজড: পূর্বাভাসের জন্য লেবেলযুক্ত ডেটা
• আনসুপারভাইজড: প্যাটার্ন আবিষ্কারের জন্য লেবেলবিহীন ডেটা
• ওয়ার্কফ্লো: ডেটা → মডেল → ট্রেন → মূল্যায়ন → ডেপ্লয়`,
      takeaways: [
        "Expert Systems mimic human experts using rules",
        "ML enables learning from data without explicit programming",
        "Supervised: labeled data for prediction",
        "Unsupervised: unlabeled data for pattern discovery"
      ],
      takeawaysBn: [
        "এক্সপার্ট সিস্টেম নিয়ম ব্যবহার করে মানব বিশেষজ্ঞ অনুকরণ করে",
        "ML স্পষ্ট প্রোগ্রামিং ছাড়া ডেটা থেকে শেখা সক্ষম করে",
        "সুপারভাইজড: পূর্বাভাসের জন্য লেবেলযুক্ত ডেটা",
        "আনসুপারভাইজড: প্যাটার্ন আবিষ্কারের জন্য লেবেলবিহীন ডেটা"
      ],
      level: "Advanced"
    },
    {
      id: "ai6",
      title: "Practical ML Applications & Regression",
      titleBn: "ব্যবহারিক ML অ্যাপ্লিকেশন ও রিগ্রেশন",
      content: `🚀 PRACTICAL APPLICATIONS OF MACHINE LEARNING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏥 A) HEALTHCARE

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Medical Diagnosis    │ Detect diseases from symptoms/images     │
│                      │ Example: Tumor detection in MRI using CNN│
├─────────────────────────────────────────────────────────────────┤
│ Drug Discovery       │ Predict effectiveness of compounds       │
├─────────────────────────────────────────────────────────────────┤
│ Patient Monitoring   │ Predict deterioration from sensor data   │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 B) FINANCE

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Fraud Detection      │ Identify fraudulent transactions         │
├─────────────────────────────────────────────────────────────────┤
│ Credit Scoring       │ Predict risk for loan approvals          │
├─────────────────────────────────────────────────────────────────┤
│ Algorithmic Trading  │ Predict stock trends from historical data│
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛒 C) RETAIL & E-COMMERCE

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Recommendation       │ Suggest products (Amazon, Netflix)       │
│ Systems              │                                         │
├─────────────────────────────────────────────────────────────────┤
│ Customer             │ Group similar customers for marketing    │
│ Segmentation         │                                         │
├─────────────────────────────────────────────────────────────────┤
│ Demand Forecasting   │ Predict inventory requirements           │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 D) AUTONOMOUS SYSTEMS

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Self-driving Cars    │ Detect objects, pedestrians, lanes       │
├─────────────────────────────────────────────────────────────────┤
│ Drones & Robotics    │ Navigation and obstacle avoidance        │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 E) NATURAL LANGUAGE PROCESSING

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Chatbots & Virtual   │ Siri, Alexa, Google Assistant            │
│ Assistants           │                                         │
├─────────────────────────────────────────────────────────────────┤
│ Sentiment Analysis   │ Determine opinion from reviews/social    │
├─────────────────────────────────────────────────────────────────┤
│ Machine Translation  │ Google Translate                         │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏭 F) INDUSTRIAL & CYBERSECURITY

┌─────────────────────────────────────────────────────────────────┐
│ Application          │ Description                              │
├─────────────────────────────────────────────────────────────────┤
│ Predictive           │ Predict machine failures before they     │
│ Maintenance          │ happen                                   │
├─────────────────────────────────────────────────────────────────┤
│ Quality Control      │ Detect defective products using CV       │
├─────────────────────────────────────────────────────────────────┤
│ Intrusion Detection  │ Identify suspicious network activity     │
├─────────────────────────────────────────────────────────────────┤
│ Spam Filtering       │ Email and message filtering              │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ BENEFITS OF ML IN PRACTICE
• Automates repetitive/complex decision-making
• Provides real-time predictions
• Processes large volumes of data efficiently
• Enhances accuracy over traditional systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 REGRESSION IN MACHINE LEARNING

Definition:
Regression is a supervised learning technique used to predict continuous numerical values based on input features.

Goal: Model relationship between independent variable(s) (X) and dependent variable (Y)

Examples: House prices, stock prices, temperature, sales revenue

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 KEY CONCEPTS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Dependent Variable  │ Value to be predicted (Y)                   │
│ Independent Variable│ Input features (X)                          │
│ Regression Function │ Mathematical relation: Y = f(X) + ε        │
│ Error (Residual)    │ Difference between predicted and actual     │
│ Loss Function       │ Measure of model performance (e.g., MSE)    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 TYPES OF REGRESSION

1. LINEAR REGRESSION
   • Predicts Y as linear combination of features:
     
     Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε
   
   • Simple Linear: One feature
   • Multiple Linear: Multiple features
   • Goal: Minimize error (least squares method)

   Visualization:
   
        Y ↑
          │     *
          │   *   *
          │ *       *
          │*         *
          └────────────────→ X
               Y = mX + c

2. POLYNOMIAL REGRESSION
   • Models non-linear relationships with polynomial terms:
     
     Y = β₀ + β₁X + β₂X² + ... + βₙXⁿ

3. LOGISTIC REGRESSION
   • Used for binary classification (despite name)
   • Models probability using sigmoid function:
     
     P(Y=1|X) = 1 / (1 + e^-(β₀ + β₁X))

4. REGULARIZED REGRESSION
   • Ridge (L2): Adds penalty to large coefficients
   • Lasso (L1): Can reduce coefficients to zero (feature selection)
   • Elastic Net: Combination of L1 and L2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 EVALUATION METRICS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Metric              │ Formula & Purpose                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mean Squared Error  │ MSE = (1/n) Σ(y_i - ŷ_i)²                  │
│ (MSE)               │ Penalizes large errors more                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Root Mean Squared   │ RMSE = √MSE                                │
│ Error (RMSE)        │ Interpretable in original units            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Mean Absolute Error │ MAE = (1/n) Σ|y_i - ŷ_i|                   │
│ (MAE)               │ Less sensitive to outliers                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ R-squared (R²)      │ R² = 1 - (SS_res / SS_tot)                 │
│                     │ Proportion of variance explained (0-1)     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 APPLICATIONS OF REGRESSION

• 🏠 Real Estate: Predicting house/car prices
• 📈 Finance: Stock market forecasting
• 🌤️ Weather: Temperature prediction
• 🛒 Retail: Sales forecasting
• 🏥 Healthcare: Medical risk prediction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 QUICK REFERENCE TABLE

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Point                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Regression          │ Predicts continuous values                 │
│ Linear Regression   │ Linear relationship: Y = mX + c            │
│ Polynomial          │ Non-linear: includes X², X³ terms          │
│ Logistic            │ Binary classification (sigmoid)            │
│ MSE                 │ Average squared prediction error           │
│ R²                  │ How well model explains variance           │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Regression predicts continuous numerical outcomes
• Linear, Polynomial, Logistic are main types
• Evaluation: MSE, RMSE, MAE, R²
• Applications across finance, healthcare, retail, weather

🎯 KEY TAKEAWAYS FOR ALL OF AI:

1. Old AI: Symbolic, rule-based, explainable
2. New AI: Data-driven, statistical, adaptive
3. Search: BFS, DFS, A* for problem-solving
4. Knowledge Rep: Logic, networks, frames, rules
5. ML Types: Supervised, Unsupervised, Reinforcement
6. Regression: Predict continuous values
7. NLP: Understanding human language
8. Expert Systems: Rule-based human expertise simulation`,
      contentBn: `🚀 মেশিন লার্নিংয়ের ব্যবহারিক প্রয়োগ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏥 ক) স্বাস্থ্যসেবা

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ মেডিকেল ডায়াগনোসিস │ লক্ষণ/ছবি থেকে রোগ সনাক্তকরণ               │
│                      │ উদাহরণ: MRI তে টিউমার সনাক্তকরণ CNN ব্যবহার করে│
├─────────────────────────────────────────────────────────────────┤
│ ড্রাগ ডিসকভারি     │ যৌগের কার্যকারিতা পূর্বাভাস                │
├─────────────────────────────────────────────────────────────────┤
│ রোগী পর্যবেক্ষণ     │ সেন্সর ডেটা থেকে অবনতি পূর্বাভাস           │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 খ) অর্থায়ন

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ জালিয়াতি সনাক্তকরণ │ জাল লেনদেন শনাক্তকরণ                      │
├─────────────────────────────────────────────────────────────────┤
│ ক্রেডিট স্কোরিং    │ ঋণ অনুমোদনের জন্য ঝুঁকি পূর্বাভাস          │
├─────────────────────────────────────────────────────────────────┤
│ অ্যালগরিদমিক ট্রেডিং│ ঐতিহাসিক ডেটা থেকে স্টক প্রবণতা পূর্বাভাস │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛒 গ) খুচরা ও ই-কমার্স

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ রেকমেন্ডেশন সিস্টেম │ পণ্য সুপারিশ (অ্যামাজন, নেটফ্লিক্স)       │
├─────────────────────────────────────────────────────────────────┤
│ গ্রাহক বিভাজন       │ মার্কেটিংয়ের জন্য অনুরূপ গ্রাহক গ্রুপিং    │
├─────────────────────────────────────────────────────────────────┤
│ চাহিদা পূর্বাভাস   │ ইনভেন্টরি প্রয়োজনীয়তা পূর্বাভাস          │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 ঘ) স্বয়ংক্রিয় সিস্টেম

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ স্ব-চালিত গাড়ি     │ বস্তু, পথচারী, লেন সনাক্তকরণ               │
├─────────────────────────────────────────────────────────────────┤
│ ড্রোন ও রোবোটিক্স   │ নেভিগেশন ও বাধা এড়ানো                    │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 ঙ) ন্যাচারাল ল্যাংগুয়েজ প্রসেসিং

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ চ্যাটবট ও ভার্চুয়াল│ সিরি, অ্যালেক্সা, গুগল অ্যাসিস্ট্যান্ট       │
│ অ্যাসিস্ট্যান্ট      │                                          │
├─────────────────────────────────────────────────────────────────┤
│ সেন্টিমেন্ট অ্যানালাইসিস│ রিভিউ/সোশ্যাল থেকে মতামত নির্ণয়        │
├─────────────────────────────────────────────────────────────────┤
│ মেশিন অনুবাদ        │ গুগল ট্রান্সলেট                           │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏭 চ) শিল্প ও সাইবার নিরাপত্তা

┌─────────────────────────────────────────────────────────────────┐
│ প্রয়োগ              │ বর্ণনা                                    │
├─────────────────────────────────────────────────────────────────┤
│ প্রেডিক্টিভ মেইনটেন্যান্স│ ঘটার আগে মেশিন ব্যর্থতা পূর্বাভাস     │
├─────────────────────────────────────────────────────────────────┤
│ কোয়ালিটি কন্ট্রোল  │ CV ব্যবহার করে ত্রুটিপূর্ণ পণ্য সনাক্তকরণ  │
├─────────────────────────────────────────────────────────────────┤
│ অনুপ্রবেশ সনাক্তকরণ │ সন্দেহজনক নেটওয়ার্ক কার্যকলাপ শনাক্তকরণ   │
├─────────────────────────────────────────────────────────────────┤
│ স্প্যাম ফিল্টারিং  │ ইমেল ও বার্তা ফিল্টারিং                    │
└─────────────────────────────────────────────────────────────────┘

✅ অনুশীলনে ML এর সুবিধা
• পুনরাবৃত্তিমূলক/জটিল সিদ্ধান্ত গ্রহণ স্বয়ংক্রিয় করে
• রিয়েল-টাইম পূর্বাভাস প্রদান করে
• বড় ভলিউম ডেটা দক্ষতার সাথে প্রক্রিয়া করে
• ঐতিহ্যবাহী সিস্টেমের তুলনায় নির্ভুলতা বাড়ায়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 মেশিন লার্নিংয়ে রিগ্রেশন

সংজ্ঞা:
রিগ্রেশন হল একটি সুপারভাইজড লার্নিং কৌশল যা ইনপুট ফিচারের ভিত্তিতে ধারাবাহিক সংখ্যাসূচক মান পূর্বাভাস দিতে ব্যবহৃত হয়।

লক্ষ্য: স্বাধীন চলক(গুলি) (X) এবং নির্ভরশীল চলক (Y) এর মধ্যে সম্পর্ক মডেল করা

উদাহরণ: বাড়ির দাম, স্টকের দাম, তাপমাত্রা, বিক্রয় রাজস্ব

🔑 মূল ধারণা

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ নির্ভরশীল চলক       │ যে মান পূর্বাভাস দিতে হবে (Y)               │
│ স্বাধীন চলক         │ ইনপুট ফিচার (X)                            │
│ রিগ্রেশন ফাংশন      │ গাণিতিক সম্পর্ক: Y = f(X) + ε              │
│ ত্রুটি (অবশিষ্ট)    │ পূর্বাভাসিত ও প্রকৃত মানের মধ্যে পার্থক্য   │
│ লস ফাংশন            │ মডেল কর্মক্ষমতার পরিমাপ (যেমন, MSE)        │
└─────────────────────┴─────────────────────────────────────────────┘

📊 রিগ্রেশনের প্রকার

১. লিনিয়ার রিগ্রেশন
   • Y কে ফিচারের রৈখিক সংমিশ্রণ হিসাবে পূর্বাভাস দেয়:
     
     Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε
   
   • সরল লিনিয়ার: একটি ফিচার
   • একাধিক লিনিয়ার: একাধিক ফিচার
   • লক্ষ্য: ত্রুটি কমানো (ন্যূনতম বর্গ পদ্ধতি)

   ভিজুয়ালাইজেশন:
   
        Y ↑
          │     *
          │   *   *
          │ *       *
          │*         *
          └────────────────→ X
               Y = mX + c

২. পলিনোমিয়াল রিগ্রেশন
   • বহুপদী পদ সহ অ-রৈখিক সম্পর্ক মডেল করে:
     
     Y = β₀ + β₁X + β₂X² + ... + βₙXⁿ

৩. লজিস্টিক রিগ্রেশন
   • বাইনারি ক্লাসিফিকেশনের জন্য ব্যবহৃত (নাম সত্ত্বেও)
   • সিগময়েড ফাংশন ব্যবহার করে সম্ভাব্যতা মডেল করে:
     
     P(Y=1|X) = 1 / (1 + e^-(β₀ + β₁X))

৪. রেগুলারাইজড রিগ্রেশন
   • রিজ (L2): বড় সহগগুলিতে জরিমানা যোগ করে
   • ল্যাসো (L1): সহগ শূন্যে কমাতে পারে (ফিচার নির্বাচন)
   • ইলাস্টিক নেট: L1 এবং L2 এর সংমিশ্রণ

📐 মূল্যায়ন মেট্রিক

┌─────────────────────┬─────────────────────────────────────────────┐
│ মেট্রিক             │ সূত্র ও উদ্দেশ্য                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ মিন স্কোয়ার্ড     │ MSE = (1/n) Σ(y_i - ŷ_i)²                   │
│ এরর (MSE)          │ বড় ত্রুটিগুলো বেশি শাস্তি দেয়              │
├─────────────────────┼─────────────────────────────────────────────┤
│ রুট মিন স্কোয়ার্ড │ RMSE = √MSE                                 │
│ এরর (RMSE)         │ মূল এককে ব্যাখ্যাযোগ্য                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ মিন অ্যাবসুলিউট   │ MAE = (1/n) Σ|y_i - ŷ_i|                    │
│ এরর (MAE)          │ আউটলায়ারে কম সংবেদনশীল                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ R-স্কোয়ার্ড (R²)  │ R² = 1 - (SS_res / SS_tot)                  │
│                     │ ভ্যারিয়েন্সের অনুপাত ব্যাখ্যা করে (০-১)    │
└─────────────────────┴─────────────────────────────────────────────┘

💡 রিগ্রেশনের প্রয়োগ

• 🏠 রিয়েল এস্টেট: বাড়ি/গাড়ির দাম পূর্বাভাস
• 📈 অর্থায়ন: স্টক বাজার পূর্বাভাস
• 🌤️ আবহাওয়া: তাপমাত্রা পূর্বাভাস
• 🛒 খুচরা: বিক্রয় পূর্বাভাস
• 🏥 স্বাস্থ্যসেবা: মেডিকেল ঝুঁকি পূর্বাভাস

✅ সারাংশ
• রিগ্রেশন ধারাবাহিক সংখ্যাসূচক ফলাফল পূর্বাভাস দেয়
• লিনিয়ার, পলিনোমিয়াল, লজিস্টিক প্রধান প্রকার
• মূল্যায়ন: MSE, RMSE, MAE, R²
• অর্থায়ন, স্বাস্থ্যসেবা, খুচরা, আবহাওয়ায় প্রয়োগ

🎯 সমস্ত AI এর জন্য মূল টেকঅ্যাওয়ে:

১. পুরাতন AI: সিম্বলিক, নিয়ম-ভিত্তিক, ব্যাখ্যাযোগ্য
২. নতুন AI: ডেটা-চালিত, স্ট্যাটিস্টিক্যাল, অভিযোজিত
৩. সার্চ: BFS, DFS, A* সমস্যা সমাধানের জন্য
৪. জ্ঞান উপস্থাপন: লজিক, নেটওয়ার্ক, ফ্রেম, নিয়ম
৫. ML প্রকার: সুপারভাইজড, আনসুপারভাইজড, রিইনফোর্সমেন্ট
৬. রিগ্রেশন: ধারাবাহিক মান পূর্বাভাস
৭. NLP: মানব ভাষা বোঝা
৮. এক্সপার্ট সিস্টেম: নিয়ম-ভিত্তিক মানব দক্ষতা অনুকরণ`,
      takeaways: [
        "ML applications span healthcare, finance, retail, NLP, autonomous systems",
        "Regression predicts continuous numerical values",
        "Linear, Polynomial, Logistic are main regression types",
        "Evaluation metrics: MSE, RMSE, MAE, R²"
      ],
      takeawaysBn: [
        "ML প্রয়োগ স্বাস্থ্যসেবা, অর্থায়ন, খুচরা, NLP, স্বয়ংক্রিয় সিস্টেম জুড়ে",
        "রিগ্রেশন ধারাবাহিক সংখ্যাসূচক মান পূর্বাভাস দেয়",
        "লিনিয়ার, পলিনোমিয়াল, লজিস্টিক প্রধান রিগ্রেশন প্রকার",
        "মূল্যায়ন মেট্রিক: MSE, RMSE, MAE, R²"
      ],
      level: "Advanced"
    }
  ]
}

export const module19 = m19