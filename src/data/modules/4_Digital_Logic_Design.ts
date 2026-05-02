import type { Module } from '../../types'

const m4: Module = {
  title: "4. Digital Logic Design",
  titleBn: "৪. ডিজিটাল লজিক ডিজাইন",
  level: "Intermediate",
  lessons: [
    {
      id: "dl1",
      title: "Number Systems",
      titleBn: "সংখ্যা পদ্ধতি",
      content: "Number Systems:\n• Binary (Base 2): 0, 1\n• Octal (Base 8): 0-7\n• Decimal (Base 10): 0-9\n• Hexadecimal (Base 16): 0-9, A-F\n\nConversions:\n• Binary to Decimal: Sum of bit × 2^position\n• Decimal to Binary: Repeated division by 2\n• Binary to Hex: Group 4 bits\n\nSigned Numbers:\n• Sign-Magnitude: MSB is sign bit\n• 2's Complement: 1's complement + 1 (for negative numbers)\n• Range for n-bit: -2^(n-1) to +2^(n-1)-1",
      contentBn: "সংখ্যা পদ্ধতি:\n• বাইনারি (ভিত্তি ২): ০, ১\n• অক্টাল (ভিত্তি ৮): ০-৭\n• ডেসিমাল (ভিত্তি ১০): ০-৯\n• হেক্সাডেসিমাল (ভিত্তি ১৬): ০-৯, A-F\n\nরূপান্তর:\n• বাইনারি থেকে ডেসিমাল: বিট × ২^অবস্থানের যোগফল\n• ডেসিমাল থেকে বাইনারি: ২ দিয়ে বারবার ভাগ\n• বাইনারি থেকে হেক্স: ৪ বিট গ্রুপ করুন\n\nচিহ্নিত সংখ্যা:\n• চিহ্ন-মান: MSB হলো চিহ্ন বিট\n• ২-এর সম্পূরক: ১-এর সম্পূরক + ১",
      code: "Binary to Decimal: 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 11\n2's Comp: invert bits, add 1",
      takeaways: [
        "All number systems are positional",
        "Binary is base-2, Hex is base-16",
        "2's complement represents negative numbers",
        "Binary arithmetic is fundamental to computers"
      ],
      takeawaysBn: [
        "সব সংখ্যা পদ্ধতি হলো স্থানিক",
        "বাইনারি হলো ভিত্তি ২, হেক্স হলো ভিত্তি ১৬",
        "২-এর সম্পূরক ঋণাত্মক সংখ্যা প্রকাশ করে",
        "বাইনারি পাটিগণিত কম্পিউটারের মৌলিক"
      ],
      level: "Intermediate"
    },
    {
      id: "dl2",
      title: "Boolean Algebra",
      titleBn: "বুলিয়ান বীজগণিত",
      content: "Boolean Algebra: Mathematical system for logic operations.\n\nBasic Operations:\n• OR (+): Output 1 if any input is 1\n• AND (×): Output 1 if all inputs are 1\n• NOT (¬): Inverts input\n\nLaws:\n• Identity: A + 0 = A, A × 1 = A\n• Null: A + 1 = 1, A × 0 = 0\n• Complement: A + A' = 1, A × A' = 0\n• Commutative, Associative, Distributive\n\nDe Morgan's Theorems:\n• (A + B)' = A' × B'\n• (A × B)' = A' + B'",
      contentBn: "বুলিয়ান বীজগণিত: লজিক অপারেশনের জন্য গাণিতিক ব্যবস্থা।\n\nমৌলিক অপারেশন:\n• OR (+): যেকোনো ইনপুট ১ হলে আউটপুট ১\n• AND (×): সব ইনপুট ১ হলে আউটপুট ১\n• NOT (¬): ইনপুট উল্টায়\n\nসূত্র:\n• প্রত্যক্ষ: A + 0 = A, A × 1 = A\n• শূন্য: A + 1 = 1, A × 0 = 0\n• সম্পূরক: A + A' = 1, A × A' = 0\n• কমিউটেটিভ, অ্যাসোসিয়েটিভ, ডিস্ট্রিবিউটিভ\n\nডি মর্গানের উপপাদ্য:\n• (A + B)' = A' × B'\n• (A × B)' = A' + B'",
      code: "F = A + B × C\nDe Morgan: (A + B)' = A' × B'",
      takeaways: [
        "Boolean algebra uses AND, OR, NOT operations",
        "Laws simplify and transform expressions",
        "De Morgan's theorems convert between forms",
        "Fundamental to digital circuit design"
      ],
      takeawaysBn: [
        "বুলিয়ান বীজগণিতে AND, OR, NOT অপারেশন",
        "সূত্র প্রকাশ সরল ও রূপান্তরিত করে",
        "ডি মর্গানের উপপাদ্য রূপের মধ্যে রূপান্তর করে",
        "ডিজিটাল সার্কিট ডিজাইনের মৌলিক"
      ],
      level: "Intermediate"
    },
    {
      id: "dl3",
      title: "Logic Gates",
      titleBn: "লজিক গেট",
      content: "Basic Logic Gates:\n• NOT: Inverts input\n• AND: Output 1 when all inputs are 1\n• OR: Output 1 when any input is 1\n\nDerived Gates:\n• NAND: AND + NOT. Universal gate\n• NOR: OR + NOT. Universal gate\n• XOR: Output 1 when inputs differ\n• XNOR: Output 1 when inputs same\n\nKarnaugh Map (K-Map): Simplifies Boolean expressions visually.\n• Group adjacent 1s (powers of 2: 1, 2, 4, 8...)\n• Groups can wrap around edges",
      contentBn: "মৌলিক লজিক গেট:\n• NOT: ইনপুট উল্টায়\n• AND: সব ইনপুট ১ হলে আউটপুট ১\n• OR: যেকোনো ইনপুট ১ হলে আউটপুট ১\n\nউদ্ভূত গেট:\n• NAND: AND + NOT. ইউনিভার্সাল গেট\n• NOR: OR + NOT. ইউনিভার্সাল গেট\n• XOR: ইনপুট ভিন্ন হলে আউটপুট ১\n• XNOR: ইনপুট একই হলে আউটপুট ১\n\nকার্নagh ম্যাপ (K-ম্যাপ): বুলিয়ান প্রকাশ দৃশ্যমানভাবে সরল করে।\n• সংলগ্ন ১ গ্রুপ করুন (২-এর শক্তি: ১, ২, ৪, ৮...)\n• গ্রুপ প্রান্ত থেকে প্রান্তে যেতে পারে",
      code: "NAND = (A × B)'\nNOR = (A + B)'\nXOR = A ⊕ B",
      takeaways: [
        "Basic gates: NOT, AND, OR",
        "NAND and NOR are universal gates",
        "K-map simplifies Boolean expressions",
        "Truth table defines gate behavior"
      ],
      takeawaysBn: [
        "মৌলিক গেট: NOT, AND, OR",
        "NAND ও NOR হলো ইউনিভার্সাল গেট",
        "K-ম্যাপ বুলিয়ান প্রকাশ সরল করে",
        "ট্রুথ টেবিল গেট আচরণ সংজ্ঞায়িত করে"
      ],
      level: "Intermediate"
    },
    {
      id: "dl4",
      title: "Combinational Circuits",
      titleBn: "কম্বিনেশনাল সার্কিট",
      content: "Combinational Circuits: Output depends only on current inputs. No memory.\n\nDesign Process:\n1. Identify inputs and outputs\n2. Create truth table\n3. Write Boolean expressions\n4. Simplify using K-maps or algebra\n5. Implement with gates\n\nCommon Circuits:\n• Adders: Half adder (sum, carry), Full adder (3 inputs)\n• Multiplexer (MUX): Selects one input from many\n• Demultiplexer (DEMUX): Routes input to one output\n• Encoder/Decoder, Comparator",
      contentBn: "কম্বিনেশনাল সার্কিট: আউটপুট শুধুমাত্র বর্তমান ইনপুটের উপর নির্ভর করে। মেমোরি নেই।\n\nনকশা প্রক্রিয়া:\n১. ইনপুট ও আউটপুট চিহ্নিত করুন\n২. ট্রুথ টেবিল তৈরি করুন\n৩. বুলিয়ান প্রকাশ লিখুন\n৪. K-ম্যাপ বা বীজগণিত ব্যবহার করে সরল করুন\n৫. গেট দিয়ে বাস্তবায়ন করুন\n\nসাধারণ সার্কিট:\n• অ্যাডার: হাফ অ্যাডার (সাম, ক্যারি), ফুল অ্যাডার (৩ ইনপুট)\n• মাল্টিপ্লেক্সার (MUX): অনেক থেকে একটি ইনপুট নির্বাচন করে\n• ডিমাল্টিপ্লেক��সার (DEMUX): একটি আউটপুটে ইনপুট পথ তৈরি করে\n• এনকোডার/ডিকোডার, কম্পারেটর",
      code: "Half Adder:\nS = A ⊕ B\nC = A × B",
      takeaways: [
        "Combinational circuits have no memory",
        "Adders perform binary addition",
        "MUX selects from multiple inputs",
        "Design follows truth table → simplified expression → gates"
      ],
      takeawaysBn: [
        "কম্বিনেশনাল সার্কিটের মেমোরি নেই",
        "অ্যাডার বাইনারি যোগ করে",
        "MUX একাধিক ইনপুট থেকে নির্বাচন করে",
        "নকশা অনুসরণ করে: ট্রুথ টেবিল → সরল প্রকাশ → গেট"
      ],
      level: "Intermediate"
    },
    {
      id: "dl5",
      title: "Sequential Circuits",
      titleBn: "সিকোয়েনশিয়াল সার্কিট",
      content: "Sequential Circuits: Output depends on current inputs AND past history. Has memory.\n\nComponents:\n• Combinational Logic: Gates\n• Memory Elements: Flip-flops\n• Feedback: Output fed back as input\n\nFlip-Flops (Edge-triggered):\n• SR: Q* = S + R'Q\n• D: Q* = D (Delay element)\n• JK: Q* = JQ' + K'Q (Toggle when J=K=1)\n• T: Q* = T ⊕ Q (Toggle on each pulse)\n\nCounters:\n• Asynchronous (Ripple): Slow\n• Synchronous: Faster\n• MOD-n: Counts from 0 to n-1 states\n\nState Machines:\n• Mealy: Output depends on input AND state\n• Moore: Output depends only on state",
      contentBn: "সিকোয়েনশিয়াল সার্কিট: আউটপুট বর্তমান ইনপুট এবং অতীত ইতিহাসের উপর নির্ভর করে। মেমোরি আছে।\n\nউপাদান:\n• কম্বিনেশনাল লজিক: গেট\n• মেমোরি উপাদান: ফ্লিপ-ফ্লপ\n• ফিডব্যাক: আউটপুট ইনপুট হিসেবে ফেরত যায়\n\nফ্লিপ-ফ্লপ (এজ-ট্রিগার্ড):\n• SR: Q* = S + R'Q\n• D: Q* = D (ডিলে উপাদান)\n• JK: Q* = JQ' + K'Q (J=K=1 হলে টগল)\n• T: Q* = T ⊕ Q (প্রতিটি পালসে টগল)\n\nকাউন্টার:\n• অ্যাসিঙ্ক্রোনাস (রিপল): ধীর\n• সিঙ্ক্রোনাস: দ্রুত\n• MOD-n: 0 থেকে n-1 অবস্থা গণনা করে\n\nস্টেট মেশিন:\n• মিলি: আউটপুট ইনপুট ও স্টেটের উপর নির্ভর করে\n• মুর: আউটপুট শুধু স্টেটের উপর নির্ভর করে",
      code: "Q* = S + R'Q (SR)\nQ* = D (D FF)\nQ* = JQ' + K'Q (JK)\nQ* = T ⊕ Q (T FF)",
      takeaways: [
        "Sequential circuits have memory (flip-flops)",
        "Flip-flops trigger on clock edge",
        "Counters and registers store data",
        "State machines model sequential behavior"
      ],
      takeawaysBn: [
        "সিকোয়েনশিয়াল সার্কিটের মেমোরি আছে (ফ্লিপ-ফ্লপ)",
        "ফ্লিপ-ফ্লপ ক্লক এজে ট্রিগার করে",
        "কাউন্টার ও রেজিস্টার ডেটা সংরক্ষণ করে",
        "স্টেট মেশিন সিকোয়ে��শ��য়াল আচরণ মডেল করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module4 = m4