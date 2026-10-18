# BCS Preliminary MCQs with Solutions — modulo-2 arithmetic (continued), Q36–Q38 (pure virtual function, AI techniques, series RLC impedance)

- **Source image:** `63_pure-virtual-ai-techniques-rlc.jpg` (original file name `571269265_1582905809343181_984958027384222800_n.jpg`)
- **Page:** 63 of 63
- **Paper / Post:** Not a single sitting paper — printed header reads "Chapter – O [BCS prili Questions Solution]", compiled by **bitBox**. Q36 and Q37 carry their own red citations: "বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন - পাঠা নং- …".
- **Exam date:** not shown
- **Marks:** not shown

## Folder Content Map

This is the last page in my assigned run (pages 43–63 of the 63-file folder). The preceding pages in this folder that I transcribed are all pages of the **same bitBox booklet — "Chapter – O [BCS prili Questions Solution]"** — a compiled bank of BCS Preliminary multiple-choice questions drawn from a "বিভিন্ন অহিসিটি মস্টার, ৪র্থ এডিশন" question bank, each question followed by a grey-highlighted "উত্তর" (answer) plus a Bengali "Explanation (ব্যাখ্যা)".

What the preceding pages in my run covered, in order:

- **43** — Q41–Q43: NLP word embeddings, NLP ambiguity, N-channel MOSFET gate voltage (answer only).
- **44** — insertion-sort comparison list (tail), Q61–Q63: minimal super key/candidate key, reinforcement-learning policy, machine epsilon (question only).
- **45** — Q43 answer explanation (continued), Q44–Q45: Hamiltonian cycle, RNN for time-series.
- **46** — unsigned/hexadecimal/two's-complement "All of the above" worked example (tail), Q27–Q28: Unix zombie process, TDM vs FDM.
- **47** — print-spooler explanation (tail), Q21–Q23: white-box testing, POP3 email retrieval, maximum power transfer (question only).
- **48** — Q100: Java `final` keyword, followed by the full-page BitBox "Complete IT Job Package" advertisement. **This is the printed end of one question run in the booklet** (question numbering reached 100).
- **49** — CPU components / Cache explanation (tail), Q56–Q58: entropy, 4-bit BCD ripple counter, planar-graph inequality E ≤ 3V − 6 (answer only).
- **50** — Q46–Q49: class-A amplifier efficiency, VHF band, Intel 8086 address multiplexing, anticoincidence gate (answer only).
- **51** — Process Control Block explanation (tail), Q89–Q91: encapsulation, IPv6 address size, Banker's algorithm.
- **52** — series RLC impedance explanation (tail), Q39–Q40: cascadeless schedules, sequential waterfall model.
- **53** — SVG explanation (tail), Q76–Q78: breadth-first search, injective functions, tree with K leaves.
- **54** — Q4–Q7: QPSK/BPSK symbol time, 8086 physical address, CPU execution time, asymptotic complexity (question only). **Question numbering restarts at 4 here**, i.e. a second question block inside the same chapter.
- **55** — Q82–Q84: IEEE 802 standards, Von Neumann memory, series RLC phase difference.
- **56** — Q29–Q31: regression performance metrics, delta modulation, transistor as active component.
- **57** — tree-with-K-leaves explanation (tail), Q79–Q81: write-ahead logging, velocity/frequency/wavelength, random search.
- **58** — Euler corollary E ≤ 3V − 6 explanation (tail), Q59–Q60: deadlock with 4 processes/3 resources, insertion-sort comparisons.
- **59** — 101.101₂ conversion (tail), Q14–Q16: blockchain immutability, characteristic polynomial of adjacency matrix, suffix tree.
- **60** — machine epsilon explanation (tail), Q64–Q65: tunnel diode working principle, hill-climbing drawback.
- **61** — channel-capacity calculation (tail), Q11–Q13: Gantt chart, asymmetric cryptography (RSA), binary-to-decimal conversion.
- **62** — hill-climbing explanation (tail), Q66–Q69: programmable logic array, power factor, set intersection, bandwidth-efficient modulation (question only).

Because the booklet interleaves several numbering blocks (roughly 1–63, 4–7, 14–16, 21–23, 27–31, 36–49, 56–65, 66–91, 100) and the scan pages are not in question-number order, several questions appear on a later page than their number suggests, and some answers/explanations are split across page boundaries.

**Pages 1–42 of this folder were transcribed by other agents and are outside my scope.** I therefore cannot state what they cover; the booklet chapter letter ("Chapter – O") and subject mix (Computer Science / AI / Data Structures / Networking / Electronics / Maths) suggest they are earlier pages of the same or a sibling compiled BCS preliminary question-solution booklet, but I cannot confirm that from what I was given.

## Transcription Notes

- The page opens with the tail of an explanation about Modulo-2 arithmetic; the question text and number are on an earlier page and are not recoverable from this image.
- Q38 is cut off after its answer line — its explanation appears on page 52.
- The grey-highlighted "উত্তর …" bars are printed solutions by the coaching booklet, not part of any official question paper.

## Content

*(continuation from previous page)*

**উত্তর (ঘ) Subtraction & addition:**

**Explanation (ব্যাখ্যা):** Modulo-2 arithmetic ডিজিটেশন নেটওয়ার্ক এবং coding theory-তে ব্যবহৃত হয়। এটি carry ছাড়া binary numbers-এর উপর ভিত্তি করে।

- **Modulo-2 Addition:** 0+0=0, 0+1=1, 1+0=1, 1+1=0
- **Modulo-2 Subtraction:** 0-0=0, 0-1=1, 1-0=1, 1-1=0

আপনি দেখতে পাচ্ছেন, addition এবং subtraction-এর rules একই modulo-2-তে, subtraction-ও addition-এর মতোই (কারণ -1, +1 mod 2-এর সমতুল্য)। এই কারণেই modulo-2 addition এবং subtraction উভয়ই **XOR** (exclusive OR) operation-এর সমতুল্য।

**36. Which one describes a pure virtual function in C++?** [কোনটি C++ তে একটি pure virtual function বর্ণনা করে।] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ৬৮৪]

| অপশন | উত্তর |
|---|---|
| (ক) | virtual void f() = 0; |
| (খ) | virtual void f(); |
| (গ) | void f()=0; |
| (ঘ) | pure virtual f(); |

**উত্তর (ক) virtual void f() = 0;**

**Explanation (ব্যাখ্যা):** C++-এ একটি pure virtual function ডিক্লেয়ার করার সঠিক সিনট্যাক্স হল virtual কীওয়ার্ড ব্যবহার করে এবং ফাংশনটিকে 0-এ অ্যাসাইন করা। এটি ফাংশনটিকে একটি pure virtual function বানায়, যার অর্থ:

- এটি যেকোনো class-এ থাকতে পারে যেটি **abstract class** হবে (instantiate করা যাবে না)।
- কোনো derived class-কে অবশ্যই এই ফাংশনটি **override** করতে হবে concrete class হতে পারার জন্য।

    virtual void f(); (খ) virtual function, pure virtual function নয়।

**37. Which one below is not an AI technique?** [নিচের কোনটি AI কৌশল নয়?] [বিভিন্ন অহিসিটি মস্টার -৪র্থ এডিশন- পাঠা নং- ১০০৭]

| অপশন | উত্তর |
|---|---|
| (ক) | Gradient descent |
| (খ) | Genetic algorithm |
| (গ) | Deep learning |
| (ঘ) | Reinforcement learning |

**উত্তর (ক) Gradient descent:**

**Explanation (ব্যাখ্যা):** Gradient Descent (ক) হল একটি মৌলিক অপটিমাইজেশন অ্যালগরিদম যা একটি ফাংশন কমানোর জন্য ব্যবহৃত হয়, সবচেয়ে বিখ্যাতভাবে machine learning model-এর loss function। যদিও এটি *AI*-তে ব্যবহৃত বহুল, এটি নিজেই একটি AI technique নয়; এটি একটি mathematical optimization method।

- **Genetic Algorithm (খ), Deep Learning (গ), এবং Reinforcement Learning (ঘ)** সবই Artificial Intelligence-এর মধ্যে specific paradigms বা sub-fields।

সুতরাং, Gradient Descent হল সেইটাই যা primarily একটি optimization tool যা AI techniques দ্বারা ব্যবহৃত হয়।

**38. The impedance of a series RLC circuit:** [একটি সিরিজ RLC সার্কিটের ইম্পিডেন্স:]

| অপশন | উত্তর |
|---|---|
| (ক) | R + j(X_L + X_C) |
| (খ) | R - j(X_L + X_C) |
| (গ) | √[R² + (X_L - X_C)²] |
| (ঘ) | √[R² + (X_L + X_C)²] |

**উত্তর (গ) √[R² + (X_L - X_C)²]** [explanation appears on page 52]

---
