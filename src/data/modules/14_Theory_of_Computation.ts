import type { Module } from '../../types'

const m14: Module = {
  title: "14. Theory of Computation",
  titleBn: "১৪. গণনার তত্ত্ব",
  level: "Advanced",
  lessons: [
    {
      id: "tc1",
      title: "Language Theory & Finite Automata (DFA, NFA, PDA)",
      titleBn: "ভাষা তত্ত্ব ও ফাইনিট অটোমাটা (DFA, NFA, PDA)",
      content: `📌 LANGUAGE THEORY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Language Theory studies formal languages, which are sets of strings over an alphabet.

Basic Concepts:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Alphabet (Σ)        │ Finite set of symbols                       │
│                     │ Example: Σ = {0, 1} (binary alphabet)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ String (w)          │ Finite sequence of symbols from alphabet    │
│                     │ Example: w = "1010"                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Language (L)        │ Set of strings over an alphabet             │
│                     │ Example: L = {w | w has even number of 0s}  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CHOMSKY HIERARCHY (Language Types)

┌────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Type       │ Grammar         │ Automaton       │ Example         │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Type 0     │ Unrestricted    │ Turing Machine  │ {w#w | w∈{0,1}*}│
│ Recursively│                 │                 │                 │
│ Enumerable │                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Type 1     │ Context-        │ Linear Bounded  │ {aⁿbⁿcⁿ | n≥1}  │
│ Context-   │ Sensitive       │ Automaton       │                 │
│ Sensitive  │                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Type 2     │ Context-Free    │ Pushdown        │ {aⁿbⁿ | n≥0}    │
│ Context-   │ Grammar (CFG)   │ Automaton (PDA) │                 │
│ Free       │                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Type 3     │ Regular Grammar │ Finite Automaton│ {w ends with 01}│
│ Regular    │                 │ (FA)            │                 │
└────────────┴─────────────────┴─────────────────┴─────────────────┘

Hierarchy Visualization:
        ┌─────────────────────────────────────┐
        │         Recursively Enumerable      │
        │  ┌─────────────────────────────┐    │
        │  │      Context-Sensitive      │    │
        │  │  ┌─────────────────────┐    │    │
        │  │  │    Context-Free     │    │    │
        │  │  │  ┌─────────────┐    │    │    │
        │  │  │  │   Regular   │    │    │    │
        │  │  │  └─────────────┘    │    │    │
        │  │  └─────────────────────┘    │    │
        │  └─────────────────────────────┘    │
        └─────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 FINITE AUTOMATA (FA)

Definition: A mathematical model of a machine that recognizes regular languages.

Components (5-tuple): M = (Q, Σ, δ, q₀, F)
• Q = finite set of states
• Σ = input alphabet
• δ = transition function (δ: Q × Σ → Q)
• q₀ = start state (∈ Q)
• F = set of accepting/final states (⊆ Q)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 1. DETERMINISTIC FINITE AUTOMATON (DFA)

Definition: For every state and input symbol, there is exactly ONE next state.

DFA Example (L = {w | w ends with 0} over Σ={0,1}):

States: Q = {q₀, q₁}
• q₀ = start state (does not end with 0)
• q₁ = accepting state (ends with 0)

Transition Table:
┌──────────┬──────────┬──────────┐
│ State    │ δ(·,0)   │ δ(·,1)   │
├──────────┼──────────┼──────────┤
│ q₀       │ q₁       │ q₀       │
├──────────┼──────────┼──────────┤
│ q₁       │ q₁       │ q₀       │
└──────────┴──────────┴──────────┘

DFA Diagram:
       0        1
    q₀ ──→ q₁ ←──┐
    ↑      │      │
    └──────┴──────┘
       0        1

Properties:
• One deterministic transition per input
• No ambiguity
• Easy to implement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2. NONDETERMINISTIC FINITE AUTOMATON (NFA)

Definition: For a state and input, there can be MULTIPLE possible next states (including none). May have ε-transitions (move without consuming input).

NFA Example (L = {w | w contains "01"} over Σ={0,1}):

States: Q = {q₀, q₁, q₂}
• q₀ = start state
• q₂ = accepting state

Transitions:
• q₀ --0--> q₀, q₁
• q₀ --1--> q₀
• q₁ --1--> q₂
• q₂ --0,1--> q₂

NFA Diagram:
        0,1           1           0,1
    q₀ ────→ q₀ ──0──→ q₁ ──1──→ q₂ ────→ q₂
              ↑                    ↑
              └───────ε────────────┘

Properties:
• Multiple possible transitions
• ε-transitions allowed (move without input)
• Easier to design than DFA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 3. EQUIVALENCE OF DFA AND NFA

Key Theorem: DFA and NFA recognize exactly the same class of languages (Regular Languages).

NFA → DFA Conversion (Subset Construction / Power Set Method):

Each DFA state represents a SET of NFA states.

Example Conversion:
NFA States: {q₀, q₁}
DFA States: ∅, {q₀}, {q₁}, {q₀, q₁}

Conversion Algorithm:
1. Start with ε-closure(q₀) as initial DFA state
2. For each DFA state and input symbol, compute next state:
   next = ε-closure(move(current, symbol))
3. Add transition from current to next
4. Repeat until no new DFA states

DFA → NFA: Trivial (DFA is a special case of NFA)

Properties:
• DFA and NFA have equivalent expressive power
• NFA can be exponentially smaller than equivalent DFA
• DFA has faster execution (no backtracking)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 4. PUSHDOWN AUTOMATA (PDA)

Definition: An NFA with a STACK memory. Recognizes Context-Free Languages (CFL).

Components (7-tuple): M = (Q, Σ, Γ, δ, q₀, Z₀, F)
• Q = finite set of states
• Σ = input alphabet
• Γ = stack alphabet
• δ = transition function: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)
• q₀ = start state
• Z₀ = initial stack symbol
• F = set of accepting states

PDA Example (L = {aⁿbⁿ | n ≥ 0}):

States: Q = {q₀, q₁, q₂}
Stack alphabet: Γ = {A, Z₀}

Transitions:
┌─────────────────────────────────────────────────────────────────┐
│ (q₀, a, Z₀) → (q₀, AZ₀)    Push A for first a                  │
│ (q₀, a, A)  → (q₀, AA)     Push A for each a                   │
│ (q₀, b, A)  → (q₁, ε)      Pop A for each b (start popping)    │
│ (q₁, b, A)  → (q₁, ε)      Continue popping                    │
│ (q₁, ε, Z₀) → (q₂, Z₀)     Accept when stack empty              │
└─────────────────────────────────────────────────────────────────┘

PDA Operation for "aaabbb":
Input: a a a b b b
Stack: Z₀ → AZ₀ → AAZ₀ → AAAZ₀ → AAZ₀ → AZ₀ → Z₀ → Accept ✓

Properties:
• Adds stack memory to finite automaton
• Recognizes Context-Free Languages
• More powerful than FA, less powerful than TM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 COMPARISON TABLE

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Feature             │ DFA          │ NFA          │ PDA          │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Determinism         │ Deterministic│ Non-deterministic│ Non-det.  │
│ Transitions per input│ Exactly 1   │ 0 or more    │ 0 or more    │
│ ε-transitions       │ Not allowed  │ Allowed      │ Allowed      │
│ Memory              │ None         │ None         │ Stack        │
│ Language Class      │ Regular      │ Regular      │ Context-Free │
│ Example Language    │ ends with 0  │ contains 01  │ aⁿbⁿ         │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

✅ SUMMARY
• Language Theory: Formal study of strings, languages, and grammars
• Chomsky Hierarchy: 4 language types with increasing power
• DFA: Deterministic, single transition, recognizes regular languages
• NFA: Non-deterministic, multiple transitions, ε allowed
• DFA = NFA in expressive power (convertible)
• PDA: Adds stack memory, recognizes context-free languages (aⁿbⁿ)`,
      contentBn: `📌 ভাষা তত্ত্ব

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: ভাষা তত্ত্ব ফর্মাল ভাষা নিয়ে অধ্যয়ন করে, যা একটি অ্যালফাবেটের উপর স্ট্রিংয়ের সেট।

মৌলিক ধারণা:
┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যালফাবেট (Σ)      │ প্রতীকের সসীম সেট                          │
│                     │ উদাহরণ: Σ = {0, 1} (বাইনারি অ্যালফাবেট)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্ট্রিং (w)         │ অ্যালফাবেট থেকে প্রতীকের সসীম ক্রম          │
│                     │ উদাহরণ: w = "1010"                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ ভাষা (L)            │ একটি অ্যালফাবেটের উপর স্ট্রিংয়ের সেট       │
│                     │ উদাহরণ: L = {w | w-এ জোড় সংখ্যক 0 আছে}     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 চমস্কি শ্রেণিবিন্যাস (ভাষার প্রকার)

┌────────────┬─────────────────┬─────────────────┬─────────────────┐
│ প্রকার     │ গ্রামার         │ অটোমাটন        │ উদাহরণ         │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ টাইপ ০     │ আনরেস্ট্রিক্টেড │ টিউরিং মেশিন   │ {w#w | w∈{0,1}*}│
│ রিকার্সিভলি│                 │                 │                 │
│ এনিউমারেবল│                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ টাইপ ১     │ কনটেক্সট-       │ লিনিয়ার বাউন্ডেড│ {aⁿbⁿcⁿ | n≥1}  │
│ কনটেক্সট-  │ সেনসিটিভ        │ অটোমাটন        │                 │
│ সেনসিটিভ   │                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ টাইপ ২     │ কনটেক্সট-ফ্রি   │ পাশডাউন        │ {aⁿbⁿ | n≥0}    │
│ কনটেক্সট-  │ গ্রামার (CFG)   │ অটোমাটন (PDA)  │                 │
│ ফ্রি       │                 │                 │                 │
├────────────┼─────────────────┼─────────────────┼─────────────────┤
│ টাইপ ৩     │ রেগুলার গ্রামার│ ফাইনিট অটোমাটন│ {w 01-এ শেষ হয়}│
│ রেগুলার    │                 │ (FA)            │                 │
└────────────┴─────────────────┴─────────────────┴─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ফাইনিট অটোমাটা (FA)

সংজ্ঞা: একটি গাণিতিক মডেল যা রেগুলার ভাষা চিনতে পারে।

উপাদান (৫-টাপল): M = (Q, Σ, δ, q₀, F)
• Q = অবস্থার সসীম সেট
• Σ = ইনপুট অ্যালফাবেট
• δ = ট্রানজিশন ফাংশন (δ: Q × Σ → Q)
• q₀ = শুরু অবস্থা (∈ Q)
• F = গ্রহণকারী/চূড়ান্ত অবস্থার সেট (⊆ Q)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ১. ডিটারমিনিস্টিক ফাইনিট অটোমাটন (DFA)

সংজ্ঞা: প্রতিটি অবস্থা ও ইনপুট প্রতীকের জন্য ঠিক একটি পরবর্তী অবস্থা থাকে।

DFA উদাহরণ (L = {w | w 0-এ শেষ হয়} over Σ={0,1}):

অবস্থা: Q = {q₀, q₁}
• q₀ = শুরু অবস্থা (0-এ শেষ হয় না)
• q₁ = গ্রহণকারী অবস্থা (0-এ শেষ হয়)

ট্রানজিশন টেবিল:
┌──────────┬──────────┬──────────┐
│ অবস্থা   │ δ(·,0)   │ δ(·,1)   │
├──────────┼──────────┼──────────┤
│ q₀       │ q₁       │ q₀       │
├──────────┼──────────┼──────────┤
│ q₁       │ q₁       │ q₀       │
└──────────┴──────────┴──────────┘

বৈশিষ্ট্য:
• প্রতি ইনপুটে একটি ডিটারমিনিস্টিক ট্রানজিশন
• কোনো অস্পষ্টতা নেই
• বাস্তবায়ন সহজ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২. ননডিটারমিনিস্টিক ফাইনিট অটোমাটন (NFA)

সংজ্ঞা: একটি অবস্থা ও ইনপুটের জন্য একাধিক সম্ভাব্য পরবর্তী অবস্থা থাকতে পারে। ε-ট্রানজিশন থাকতে পারে (ইনপুট ব্যবহার না করেই চলা)।

NFA উদাহরণ (L = {w | w-তে "01" আছে} over Σ={0,1}):

অবস্থা: Q = {q₀, q₁, q₂}
• q₀ = শুরু অবস্থা
• q₂ = গ্রহণকারী অবস্থা

ট্রানজিশন:
• q₀ --0--> q₀, q₁
• q₀ --1--> q₀
• q₁ --1--> q₂
• q₂ --0,1--> q₂

বৈশিষ্ট্য:
• একাধিক সম্ভাব্য ট্রানজিশন
• ε-ট্রানজিশন অনুমোদিত
• DFA-এর চেয়ে ডিজাইন করা সহজ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৩. DFA ও NFA-এর সমতা

মূল উপপাদ্য: DFA ও NFA একই শ্রেণির ভাষা চিনতে পারে (রেগুলার ভাষা)।

NFA → DFA রূপান্তর (সাবসেট কনস্ট্রাকশন / পাওয়ার সেট পদ্ধতি):
প্রতিটি DFA অবস্থা NFA অবস্থার একটি সেট প্রতিনিধিত্ব করে।

রূপান্তর অ্যালগরিদম:
১. ε-closure(q₀) দিয়ে শুরু DFA অবস্থা হিসেবে
২. প্রতিটি DFA অবস্থা ও ইনপুট প্রতীকের জন্য পরবর্তী অবস্থা গণনা
৩. ট্রানজিশন যোগ করুন
৪. নতুন DFA অবস্থা না পাওয়া পর্যন্ত পুনরাবৃত্তি করুন

DFA → NFA: সাধারণ (DFA, NFA-এর একটি বিশেষ ক্ষেত্র)

বৈশিষ্ট্য:
• DFA ও NFA-এর সমান এক্সপ্রেসিভ পাওয়ার
• NFA সমতুল্য DFA-এর তুলনায় সূচকীয়ভাবে ছোট হতে পারে
• DFA-র কার্যকরী গতি দ্রুত (কোনো ব্যাকট্র্যাকিং নেই)

✅ সারাংশ
• ভাষা তত্ত্ব: স্ট্রিং, ভাষা ও গ্রামারের ফর্মাল অধ্যয়ন
• চমস্কি শ্রেণিবিন্যাস: ক্রমবর্ধমান ক্ষমতার ৪টি ভাষার প্রকার
• DFA: ডিটারমিনিস্টিক, একক ট্রানজিশন, রেগুলার ভাষা চিনে
• NFA: ননডিটারমিনিস্টিক, একাধিক ট্রানজিশন, ε অনুমোদিত
• DFA = NFA এক্সপ্রেসিভ পাওয়ারে (পরিবর্তনযোগ্য)
• PDA: স্ট্যাক মেমোরি যোগ করে, কনটেক্সট-ফ্রি ভাষা চিনে (aⁿbⁿ)`,
      takeaways: [
        "Chomsky Hierarchy: 4 language types with increasing power",
        "DFA: deterministic, single transition per input",
        "NFA: non-deterministic, multiple transitions, ε allowed",
        "DFA and NFA have equivalent expressive power",
        "PDA adds stack memory, recognizes context-free languages (aⁿbⁿ)"
      ],
      takeawaysBn: [
        "চমস্কি শ্রেণিবিন্যাস: ক্রমবর্ধমান ক্ষমতার ৪টি ভাষার প্রকার",
        "DFA: ডিটারমিনিস্টিক, প্রতি ইনপুটে একক ট্রানজিশন",
        "NFA: ননডিটারমিনিস্টিক, একাধিক ট্রানজিশন, ε অনুমোদিত",
        "DFA ও NFA-এর সমান এক্সপ্রেসিভ পাওয়ার",
        "PDA স্ট্যাক মেমোরি যোগ করে, কনটেক্সট-ফ্রি ভাষা চিনে (aⁿbⁿ)"
      ],
      level: "Advanced"
    },
    {
      id: "tc2",
      title: "Context-Free Languages & Context-Free Grammars (CFG)",
      titleBn: "কনটেক্সট-ফ্রি ভাষা ও কনটেক্সট-ফ্রি গ্রামার (CFG)",
      content: `📌 CONTEXT-FREE LANGUAGES (CFL)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Context-Free Languages are languages that can be generated by Context-Free Grammars (CFG) and recognized by Pushdown Automata (PDA).

Examples of CFLs:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Language            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {aⁿbⁿ | n ≥ 0}  │ Equal number of a's and b's                │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {wwᴿ | w∈{a,b}*}│ Palindromes (w followed by reverse)         │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {aⁿbᵐcᵐ | n,m≥0}│ Nested structures                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {balanced       │ Balanced parentheses ( (()()) )            │
│     parentheses}    │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

Properties of CFLs:
• Closed under: Union, Concatenation, Kleene Star
• Not closed under: Intersection, Complementation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 CONTEXT-FREE GRAMMAR (CFG)

Definition: A formal grammar that generates context-free languages using production rules.

Components (4-tuple): G = (V, Σ, P, S)
• V = set of variables (non-terminals)
• Σ = set of terminals (alphabet)
• P = set of production rules (V → (V ∪ Σ)*)
• S = start symbol (∈ V)

CFG Example (L = {aⁿbⁿ | n ≥ 0}):

V = {S}
Σ = {a, b}
P = {
    S → aSb,
    S → ε
}
S = S

Derivation of "aaabbb":
S ⇒ aSb ⇒ aaSbb ⇒ aaaSbbb ⇒ aaabbb

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Types of Derivation:

Leftmost Derivation: Replace leftmost non-terminal first
Rightmost Derivation: Replace rightmost non-terminal first

Parse Tree (Derivation Tree):
        S
       /|\\
      a S b
       /|\\
      a S b
       /|\\
      a S b
         |
         ε

Final: a a a b b b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CFG for Balanced Parentheses:

V = {S}
Σ = {(, )}
P = {
    S → SS,
    S → (S),
    S → ε
}

Derivation of "(())()":
S ⇒ SS ⇒ (S)S ⇒ ((S))S ⇒ (())S ⇒ (())(S) ⇒ (())() 

Parse Tree:
        S
       /|\\
      S S
     /|\\ |
    ( S ) ( S )
      |     |
      ε     ε

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 CFG Simplification Techniques:

1. Elimination of Useless Symbols
   - Remove non-generating symbols (cannot reach terminals)
   - Remove unreachable symbols (cannot reach from start)

2. Elimination of ε-Productions (A → ε)
   - Remove nullable variables

3. Elimination of Unit Productions (A → B)
   - Replace with productions from B

4. Chomsky Normal Form (CNF):
   All productions of form: A → BC or A → a
   (where A,B,C are variables, a is terminal)

Example (CNF conversion):
Original: S → aSb | ε
CNF: S → ASB | ε, A → a, B → b

5. Greibach Normal Form (GNF):
   All productions of form: A → aα
   (where a is terminal, α is variables)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Pumping Lemma for CFLs:

If L is context-free, then ∃ p (pumping length) such that:
For any string s ∈ L with |s| ≥ p,
s can be written as s = uvxyz where:
1. |vxy| ≤ p
2. |vy| ≥ 1
3. uvⁱxyⁱz ∈ L for all i ≥ 0

Application (Proving L is NOT context-free):
Example: L = {aⁿbⁿcⁿ | n ≥ 0} is NOT context-free
Proof: Pumping lemma fails for this language

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 CFG ↔ PDA Equivalence:

Theorem: A language is context-free iff there exists a PDA that recognizes it.

CFG → PDA Conversion (Top-down parsing):
1. Push start symbol S on stack
2. For each production A → α, replace A with α (reverse)
3. For each terminal a, match with input

PDA → CFG Conversion:
1. Create variable [pXq] for each state p,q and stack symbol X
2. Add productions for each transition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CFG Applications:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Application         │ Use of CFG                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Programming         │ Syntax specification (BNF)                  │
│ Languages           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Compilers           │ Parsing (Parser generators like YACC)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Natural Language    │ Grammar for sentence structure              │
│ Processing          │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Markup Languages    │ XML, HTML structure validation              │
│ (XML/HTML)          │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Context-Free Languages: Generated by CFG, recognized by PDA
• CFG: 4-tuple (V, Σ, P, S) with production rules
• Examples: aⁿbⁿ, balanced parentheses, palindromes
• CFLs are closed under union, concatenation, Kleene star
• CFG ↔ PDA equivalence: both define CFLs
• Pumping lemma used to prove non-context-free languages`,
      contentBn: `📌 কনটেক্সট-ফ্রি ভাষা (CFL)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: কনটেক্সট-ফ্রি ভাষা হল সেই ভাষা যা কনটেক্সট-ফ্রি গ্রামার (CFG) দ্বারা তৈরি করা যায় এবং পাশডাউন অটোমাটন (PDA) দ্বারা চেনা যায়।

CFL-এর উদাহরণ:
┌─────────────────────┬─────────────────────────────────────────────┐
│ ভাষা                │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {aⁿbⁿ | n ≥ 0}  │ a ও b-এর সমান সংখ্যা                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {wwᴿ | w∈{a,b}*}│ প্যালিন্ড্রোম (w ও তার বিপরীত)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ L = {সুষম বন্ধনী}  │ সুষম বন্ধনী ( (()()) )                       │
└─────────────────────┴─────────────────────────────────────────────┘

CFL-এর বৈশিষ্ট্য:
• বদ্ধ: ইউনিয়ন, কনক্যাটেনেশন, ক্লিন স্টার
• বদ্ধ নয়: ইন্টারসেকশন, কমপ্লিমেন্টেশন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 কনটেক্সট-ফ্রি গ্রামার (CFG)

সংজ্ঞা: একটি ফর্মাল গ্রামার যা প্রোডাকশন নিয়ম ব্যবহার করে কনটেক্সট-ফ্রি ভাষা তৈরি করে।

উপাদান (৪-টাপল): G = (V, Σ, P, S)
• V = ভেরিয়েবলের সেট (নন-টার্মিনাল)
• Σ = টার্মিনালের সেট (অ্যালফাবেট)
• P = প্রোডাকশন নিয়মের সেট (V → (V ∪ Σ)*)
• S = শুরু প্রতীক (∈ V)

CFG উদাহরণ (L = {aⁿbⁿ | n ≥ 0}):

V = {S}
Σ = {a, b}
P = {
    S → aSb,
    S → ε
}
S = S

"aaabbb"-এর ডেরাইভেশন:
S ⇒ aSb ⇒ aaSbb ⇒ aaaSbbb ⇒ aaabbb

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 ডেরাইভেশনের প্রকার:

লেফটমোস্ট ডেরাইভেশন: প্রথমে বামদিকের নন-টার্মিনাল প্রতিস্থাপন
রাইটমোস্ট ডেরাইভেশন: প্রথমে ডানদিকের নন-টার্মিনাল প্রতিস্থাপন

পার্স ট্রি (ডেরাইভেশন ট্রি):
        S
       /|\\
      a S b
       /|\\
      a S b
       /|\\
      a S b
         |
         ε

ফলাফল: a a a b b b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 CFG সরলীকরণ কৌশল:

১. অব্যবহৃত প্রতীক বাদ দেওয়া
২. ε-প্রোডাকশন বাদ দেওয়া (A → ε)
৩. ইউনিট প্রোডাকশন বাদ দেওয়া (A → B)
৪. চমস্কি নরমাল ফর্ম (CNF): A → BC বা A → a
৫. গ্রেবাখ নরমাল ফর্ম (GNF): A → aα

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 CFG ↔ PDA সমতা:

উপপাদ্য: একটি ভাষা কনটেক্সট-ফ্রি হবে যদি এবং শুধুমাত্র যদি একটি PDA থাকে যা এটি চিনতে পারে।

CFG → PDA রূপান্তর (টপ-ডাউন পার্সিং):
১. শুরু প্রতীক S স্ট্যাকে push করুন
২. প্রতিটি প্রোডাকশন A → α-এর জন্য A-কে α দিয়ে প্রতিস্থাপন
৩. প্রতিটি টার্মিনাল a-এর জন্য ইনপুটের সাথে মিলান

✅ সারাংশ
• কনটেক্সট-ফ্রি ভাষা: CFG দ্বারা তৈরি, PDA দ্বারা চেনা
• CFG: ৪-টাপল (V, Σ, P, S) প্রোডাকশন নিয়ম সহ
• উদাহরণ: aⁿbⁿ, সুষম বন্ধনী, প্যালিন্ড্রোম
• CFL ইউনিয়ন, কনক্যাটেনেশন, ক্লিন স্টারে বদ্ধ
• CFG ↔ PDA সমতা: উভয়ই CFL সংজ্ঞায়িত করে
• পাম্পিং লেমা অ-কনটেক্সট-ফ্রি ভাষা প্রমাণ করতে ব্যবহৃত`,
      takeaways: [
        "Context-Free Languages: generated by CFG, recognized by PDA",
        "CFG: 4-tuple (V, Σ, P, S) with production rules",
        "Examples: aⁿbⁿ, balanced parentheses, palindromes",
        "CFLs closed under union, concatenation, Kleene star",
        "CFG ↔ PDA equivalence: both define CFLs",
        "Pumping lemma proves non-context-free languages"
      ],
      takeawaysBn: [
        "কনটেক্সট-ফ্রি ভাষা: CFG দ্বারা তৈরি, PDA দ্বারা চেনা",
        "CFG: ৪-টাপল (V, Σ, P, S) প্রোডাকশন নিয়ম সহ",
        "উদাহরণ: aⁿbⁿ, সুষম বন্ধনী, প্যালিন্ড্রোম",
        "CFL ইউনিয়ন, কনক্যাটেনেশন, ক্লিন স্টারে বদ্ধ",
        "CFG ↔ PDA সমতা: উভয়ই CFL সংজ্ঞায়িত করে",
        "পাম্পিং লেমা অ-কনটেক্সট-ফ্রি ভাষা প্রমাণ করতে ব্যবহৃত"
      ],
      level: "Advanced"
    },
    {
      id: "tc3",
      title: "Turing Machines & Computability Theory",
      titleBn: "টিউরিং মেশিন ও গণনাযোগ্যতা তত্ত্ব",
      content: `📌 TURING MACHINES (TM)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A Turing Machine is the most powerful computational model, capable of simulating any algorithm. Recognizes Recursively Enumerable Languages.

Components (7-tuple): M = (Q, Σ, Γ, δ, q₀, B, F)
• Q = finite set of states
• Σ = input alphabet (subset of Γ, not containing B)
• Γ = tape alphabet (includes Σ and blank symbol B)
• δ = transition function: Q × Γ → Q × Γ × {L, R}
• q₀ = start state (∈ Q)
• B = blank symbol (∈ Γ \ Σ)
• F = set of accepting/final states (⊆ Q)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ BASIC MACHINE CONFIGURATION

Tape: Infinite in both directions, divided into cells
Head: Reads/writes symbols and moves left/right
State: Current control state

Turing Machine Diagram:
┌─────────────────────────────────────────────────────────────────┐
│   Tape:   | B | 0 | 1 | 0 | 1 | B | B | ...                     │
│              ↑                                                  │
│            Head                                                 │
│                                                                 │
│   State: q₂                                                     │
│                                                                 │
│   Control Unit (Finite State Machine)                          │
└─────────────────────────────────────────────────────────────────┘

Transition Format: δ(current_state, read_symbol) = (new_state, write_symbol, direction)

Example Transition: δ(q₀, 0) = (q₁, 1, R)
Meaning: In state q₀, reading 0 → write 1, move Right, go to q₁

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 CONFIGURATION (Instantaneous Description)

A configuration describes the complete state of a Turing Machine at a given moment:
(u, q, v) where:
• u = symbols to the left of head
• q = current state
• v = symbols from head to right (head on first symbol)

Example Configuration: (010, q₂, 11)
Means: Tape has ...010 q₂ 11... (head on first 1 of "11")

Move Notation (⊢):
(010, q₂, 11) ⊢ (0101, q₃, 1) if δ(q₂, 1) = (q₃, 1, R)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 COMPUTING WITH TURING MACHINES

Turing Machine for L = {aⁿbⁿ | n ≥ 0}:

States: Q = {q₀, q₁, q₂, q₃, q₄}
Alphabet: Σ = {a, b}, Γ = {a, b, X, Y, B}

Transitions:
┌─────────────────────────────────────────────────────────────────┐
│ δ(q₀, a) = (q₁, X, R)    Mark first a as X, move right         │
│ δ(q₁, a) = (q₁, a, R)    Skip a's                              │
│ δ(q₁, Y) = (q₁, Y, R)    Skip Y's                              │
│ δ(q₁, b) = (q₂, Y, L)    Mark first b as Y, move left          │
│ δ(q₂, Y) = (q₂, Y, L)    Skip Y's                              │
│ δ(q₂, a) = (q₂, a, L)    Skip a's                              │
│ δ(q₂, X) = (q₀, X, R)    Back to start, move right             │
│ δ(q₀, Y) = (q₃, Y, R)    All a's matched, check b's            │
│ δ(q₃, Y) = (q₃, Y, R)    Skip Y's                              │
│ δ(q₃, B) = (q₄, B, R)    Accept if blank reached               │
└─────────────────────────────────────────────────────────────────┘

Execution for "aabb":
Start:   B a a b b B
Step 1:  B X a b b B   (mark first a)
Step 2:  B X a Y b B   (match with b)
Step 3:  B X a Y b B   (back to start)
Step 4:  B X X Y b B   (mark second a)
Step 5:  B X X Y Y B   (match with b)
Step 6:  B X X Y Y B   (check all matched)
Accept:  B X X Y Y B   (halt in accepting state)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 VARIANTS OF TURING MACHINES (All equivalent in power):

┌─────────────────────┬─────────────────────────────────────────────┐
│ Variant             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multi-tape TM       │ Multiple tapes (input, work, output)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-deterministic TM│ Multiple possible transitions (NFA style)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multi-head TM       │ Multiple heads on same tape                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Offline TM          │ Read-only input tape + work tapes           │
└─────────────────────┴─────────────────────────────────────────────┘

Church-Turing Thesis: Turing-computable = Algorithmically computable
(Any algorithm can be simulated by a Turing Machine)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 COMPUTABILITY THEORY

Decidable vs Undecidable Problems:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Decidable           │ Algorithm exists that always gives answer   │
│ (Recursive)         │ Example: Sorting, Searching                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Semi-Decidable      │ Algorithm halts for YES, may loop for NO    │
│ (Recursively        │ Example: Halting Problem (YES cases)        │
│ Enumerable)         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Undecidable         │ No algorithm exists                         │
│                     │ Example: Halting Problem                    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 THE HALTING PROBLEM

Definition: Given a program P and input I, determine if P halts on I.

Theorem: The Halting Problem is UNDECIDABLE (Turing, 1936)

Proof by Contradiction:
1. Assume H(P, I) exists that decides halting
2. Construct D(P) that calls H(P, P)
3. If H says "halts" → D loops forever
4. If H says "loops" → D halts
5. Contradiction: D(D) cannot be decided

Implications:
• No general algorithm for debugging/infinite loops
• Many problems are undecidable (reduced from Halting)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 REDUCTION TECHNIQUE

Definition: Problem A reduces to Problem B (A ≤ B) if:
Solving B allows solving A

Properties:
• If A is undecidable and A ≤ B → B is undecidable
• If B is decidable and A ≤ B → A is decidable

Common Reductions:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem A           │ Reduces to Problem B                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Halting Problem     │ State-entry problem                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Halting Problem     │ Blank-tape halting problem                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Halting Problem     │ Equivalence of TMs                          │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 RICE'S THEOREM

Theorem: Any non-trivial property of Turing Machines is undecidable.

Non-trivial property: Some TMs have it, some don't (not all, not none)

Examples of Undecidable Properties:
• Does TM halt on all inputs?
• Does TM accept any input?
• Does TM accept a finite language?
• Are two TMs equivalent?

Examples of Decidable Properties:
• Does TM reach a specific state?
• Does TM halt within 100 steps? (bounded)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RECURSIVELY ENUMERABLE (RE) LANGUAGES

Definition: Languages accepted by Turing Machines (TM may loop for non-members)

Properties:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Status                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed under Union  │ Yes                                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed under        │ Yes                                         │
│ Intersection        │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed under        │ Yes                                         │
│ Concatenation       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed under        │ Yes                                         │
│ Kleene Star         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed under        │ No                                          │
│ Complement          │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

RE vs Co-RE:
• RE: Languages accepted by TM (halts on YES)
• Co-RE: Complements of RE languages (halts on NO)
• Halting Problem is RE but not Co-RE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 HIERARCHY OF LANGUAGE CLASSES

┌─────────────────────────────────────────────────────────────────┐
│                    Recursively Enumerable (RE)                  │
│                         ┌─────┐                                 │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │   Recursive   │                            │
│                    │  (Decidable)  │                            │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │ Context-      │                            │
│                    │ Sensitive     │                            │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │ Context-Free  │                            │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │   Regular     │                            │
│                    └───────────────┘                            │
└─────────────────────────────────────────────────────────────────┘

Inclusion: Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursive ⊂ RE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 EXAMPLES BY CLASS:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Language Class      │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Regular             │ {w | w ends with 00}                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Context-Free        │ {aⁿbⁿ | n ≥ 0}                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Context-Sensitive   │ {aⁿbⁿcⁿ | n ≥ 1}                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Recursive (Decidable)│ {w#w | w ∈ {0,1}*} (equality)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Recursively         │ Halting Problem (accepting cases)           │
│ Enumerable          │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Turing Machine: Most powerful model (7-tuple: Q, Σ, Γ, δ, q₀, B, F)
• Configuration: (left, state, right) describes TM state
• Church-Turing Thesis: TM = Algorithmically computable
• Halting Problem: Undecidable (no algorithm exists)
• Reduction: Transform one problem to another
• Rice's Theorem: Non-trivial TM properties are undecidable
• Hierarchy: Regular ⊂ CF ⊂ CS ⊂ Recursive ⊂ RE`,
      contentBn: `📌 টিউরিং মেশিন (TM)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি টিউরিং মেশিন হল সবচেয়ে শক্তিশালী গণনা মডেল, যা যেকোনো অ্যালগরিদম অনুকরণ করতে পারে। রিকার্সিভলি এনিউমারেবল ভাষা চিনতে পারে।

উপাদান (৭-টাপল): M = (Q, Σ, Γ, δ, q₀, B, F)
• Q = অবস্থার সসীম সেট
• Σ = ইনপুট অ্যালফাবেট (Γ-এর উপসেট, B ধারণ করে না)
• Γ = টেপ অ্যালফাবেট (B এবং Σ অন্তর্ভুক্ত)
• δ = ট্রানজিশন ফাংশন: Q × Γ → Q × Γ × {L, R}
• q₀ = শুরু অবস্থা (∈ Q)
• B = ফাঁকা প্রতীক (∈ Γ \ Σ)
• F = গ্রহণকারী/চূড়ান্ত অবস্থার সেট (⊆ Q)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ মৌলিক মেশিন কনফিগারেশন

টেপ: উভয় দিকে অসীম, কোষে বিভক্ত
হেড: প্রতীক পড়ে/লেখে এবং বাম/ডানে চলে
অবস্থা: বর্তমান নিয়ন্ত্রণ অবস্থা

টিউরিং মেশিন ডায়াগ্রাম:
┌─────────────────────────────────────────────────────────────────┐
│   টেপ:    | B | 0 | 1 | 0 | 1 | B | B | ...                     │
│               ↑                                                  │
│             হেড                                                 │
│                                                                 │
│   অবস্থা: q₂                                                    │
│                                                                 │
│   কন্ট্রোল ইউনিট (ফাইনিট স্টেট মেশিন)                          │
└─────────────────────────────────────────────────────────────────┘

ট্রানজিশন ফরম্যাট: δ(বর্তমান_অবস্থা, পড়া_প্রতীক) = (নতুন_অবস্থা, লেখা_প্রতীক, দিক)

উদাহরণ ট্রানজিশন: δ(q₀, 0) = (q₁, 1, R)
অর্থ: q₀ অবস্থায়, 0 পড়লে → 1 লেখ, ডানে যাও, q₁-এ যাও

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 কনফিগারেশন (তাৎক্ষণিক বর্ণনা)

একটি কনফিগারেশন একটি নির্দিষ্ট মুহূর্তে টিউরিং মেশিনের সম্পূর্ণ অবস্থা বর্ণনা করে:
(u, q, v) যেখানে:
• u = হেডের বাম দিকের প্রতীক
• q = বর্তমান অবস্থা
• v = হেড থেকে ডান দিকের প্রতীক (হেড প্রথম প্রতীকের উপর)

উদাহরণ কনফিগারেশন: (010, q₂, 11)
অর্থ: টেপে আছে ...010 q₂ 11... (হেড "11"-এর প্রথম 1-এর উপর)

সরণ নোটেশন (⊢):
(010, q₂, 11) ⊢ (0101, q₃, 1) যদি δ(q₂, 1) = (q₃, 1, R)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 টিউরিং মেশিন দিয়ে গণনা

L = {aⁿbⁿ | n ≥ 0} ভাষার জন্য টিউরিং মেশিন:

অবস্থা: Q = {q₀, q₁, q₂, q₃, q₄}
অ্যালফাবেট: Σ = {a, b}, Γ = {a, b, X, Y, B}

ট্রানজিশন:
┌─────────────────────────────────────────────────────────────────┐
│ δ(q₀, a) = (q₁, X, R)    প্রথম a কে X চিহ্নিত, ডানে যাও         │
│ δ(q₁, a) = (q₁, a, R)    a এড়িয়ে যাও                          │
│ δ(q₁, Y) = (q₁, Y, R)    Y এড়িয়ে যাও                          │
│ δ(q₁, b) = (q₂, Y, L)    প্রথম b কে Y চিহ্নিত, বামে যাও         │
│ δ(q₂, Y) = (q₂, Y, L)    Y এড়িয়ে যাও                          │
│ δ(q₂, a) = (q₂, a, L)    a এড়িয়ে যাও                          │
│ δ(q₂, X) = (q₀, X, R)    শুরুত ফিরে যাও, ডানে যাও                 │
│ δ(q₀, Y) = (q₃, Y, R)    সব a ম্যাচ হয়েছে, b পরীক্ষা কর        │
│ δ(q₃, Y) = (q₃, Y, R)    Y এড়িয়ে যাও                          │
│ δ(q₃, B) = (q₄, B, R)    ফাঁকা পেলে গ্রহণ                      │
└─────────────────────────────────────────────────────────────────┘

"aabb"-এর জন্য কার্যকরী প্রক্রিয়া:
শুরু:   B a a b b B
ধাপ ১:  B X a b b B   (প্রথম a চিহ্নিত)
ধাপ ২:  B X a Y b B   (b এর সাথে মিলান)
ধাপ ৩:  B X a Y b B   (শুরুত ফিরে)
ধাপ ৪:  B X X Y b B   (দ্বিতীয় a চিহ্নিত)
ধাপ ৫:  B X X Y Y B   (b এর সাথে মিলান)
ধাপ ৬:  B X X Y Y B   (সব মিল হয়েছে পরীক্ষা)
গ্রহণ:  B X X Y Y B   (গ্রহণকারী অবস্থায় থামে)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 টিউরিং মেশিনের ভেরিয়েন্ট (সব সমান ক্ষমতার):

┌─────────────────────┬─────────────────────────────────────────────┐
│ ভেরিয়েন্ট          │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ মাল্টি-টেপ টিএম     │ একাধিক টেপ (ইনপুট, কাজ, আউটপুট)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ নন-ডিটারমিনিস্টিক  │ একাধিক সম্ভাব্য ট্রানজিশন (NFA স্টাইল)      │
│ টিএম                │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ মাল্টি-হেড টিএম     │ একই টেপে একাধিক হেড                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ অফলাইন টিএম         │ শুধু-পড়ার ইনপুট টেপ + কাজের টেপ           │
└─────────────────────┴─────────────────────────────────────────────┘

চার্চ-টিউরিং থিসিস: টিউরিং-গণনাযোগ্য = অ্যালগরিদমিক্যালি গণনাযোগ্য
(যেকোনো অ্যালগরিদম একটি টিউরিং মেশিন দ্বারা অনুকরণ করা যায়)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 গণনাযোগ্যতা তত্ত্ব

সিদ্ধান্তযোগ্য বনাম অসিদ্ধান্তযোগ্য সমস্যা:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ সিদ্ধান্তযোগ্য     │ অ্যালগরিদম আছে যা সর্বদা উত্তর দেয়         │
│ (রিকার্সিভ)        │ উদাহরণ: সর্টিং, সার্চিং                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ আধা-সিদ্ধান্তযোগ্য │ অ্যালগরিদম হ্যাঁ-এর জন্য থামে, না-এর জন্য  │
│ (রিকার্সিভলি       │ লুপ করতে পারে                               │
│ এনিউমারেবল)        │ উদাহরণ: হাল্টিং সমস্যা (হ্যাঁ ক্ষেত্রে)     │
├─────────────────────┼─────────────────────────────────────────────┤
│ অসিদ্ধান্তযোগ্য     │ কোনো অ্যালগরিদম নেই                        │
│                     │ উদাহরণ: হাল্টিং সমস্যা                      │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 হাল্টিং সমস্যা

সংজ্ঞা: একটি প্রোগ্রাম P এবং ইনপুট I দেওয়া হলে, P I-তে থামে কিনা তা নির্ধারণ করুন।

উপপাদ্য: হাল্টিং সমস্যা অসিদ্ধান্তযোগ্য (টিউরিং, ১৯৩৬)

বিরোধিতার মাধ্যমে প্রমাণ:
১. ধরি H(P, I) বিদ্যমান যা হাল্টিং সিদ্ধান্ত নেয়
২. D(P) তৈরি করি যা H(P, P) কল করে
৩. যদি H বলে "থামে" → D চিরকাল লুপ করে
৪. যদি H বলে "লুপ করে" → D থামে
৫. বিরোধিতা: D(D) সিদ্ধান্ত নেওয়া যায় না

প্রভাব:
• ডিবাগিং/অসীম লুপের জন্য কোনো সাধারণ অ্যালগরিদম নেই
• অনেক সমস্যা অসিদ্ধান্তযোগ্য (হাল্টিং থেকে রিডিউস করা)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 রিডাকশন কৌশল

সংজ্ঞা: সমস্যা A, সমস্যা B-তে রিডিউস করে (A ≤ B) যদি:
B সমাধান করলে A সমাধান করা যায়

বৈশিষ্ট্য:
• যদি A অসিদ্ধান্তযোগ্য এবং A ≤ B → B অসিদ্ধান্তযোগ্য
• যদি B সিদ্ধান্তযোগ্য এবং A ≤ B → A সিদ্ধান্তযোগ্য

সাধারণ রিডাকশন:
┌─────────────────────┬─────────────────────────────────────────────┐
│ সমস্যা A            │ সমস্যা B-তে রিডিউস করে                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ হাল্টিং সমস্যা      │ স্টেট-এন্ট্রি সমস্যা                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ হাল্টিং সমস্যা      │ ফাঁকা-টেপ হাল্টিং সমস্যা                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ হাল্টিং সমস্যা      │ টিএম-এর সমতা                               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 রাইসের উপপাদ্য

উপপাদ্য: টিউরিং মেশিনের যেকোনো অ-সামান্য বৈশিষ্ট্য অসিদ্ধান্তযোগ্য।

অ-সামান্য বৈশিষ্ট্য: কিছু টিএম-এ আছে, কিছুতে নেই (সব নয়, কোনোটি নয়)

অসিদ্ধান্তযোগ্য বৈশিষ্ট্যের উদাহরণ:
• টিএম কি সব ইনপুটে থামে?
• টিএম কি কোনো ইনপুট গ্রহণ করে?
• টিএম কি সসীম ভাষা গ্রহণ করে?
• দুটি টিএম কি সমতুল্য?

সিদ্ধান্তযোগ্য বৈশিষ্ট্যের উদাহরণ:
• টিএম কি একটি নির্দিষ্ট অবস্থায় পৌঁছায়?
• টিএম কি ১০০ ধাপের মধ্যে থামে? (সীমাবদ্ধ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 রিকার্সিভলি এনিউমারেবল (RE) ভাষা

সংজ্ঞা: টিউরিং মেশিন দ্বারা গৃহীত ভাষা (অ-সদস্যদের জন্য টিএম লুপ করতে পারে)

বৈশিষ্ট্য:
┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ অবস্থা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউনিয়নে বদ্ধ       │ হ্যাঁ                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইন্টারসেকশনে বদ্ধ  │ হ্যাঁ                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ কনক্যাটেনেশনে বদ্ধ │ হ্যাঁ                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্লিন স্টারে বদ্ধ   │ হ্যাঁ                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ কমপ্লিমেন্টে বদ্ধ   │ না                                           │
└─────────────────────┴─────────────────────────────────────────────┘

RE বনাম Co-RE:
• RE: টিএম দ্বারা গৃহীত ভাষা (হ্যাঁ-তে থামে)
• Co-RE: RE ভাষার কমপ্লিমেন্ট (না-তে থামে)
• হাল্টিং সমস্যা RE কিন্তু Co-RE নয়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ভাষা শ্রেণির শ্রেণিবিন্যাস

┌─────────────────────────────────────────────────────────────────┐
│                    রিকার্সিভলি এনিউমারেবল (RE)                 │
│                         ┌─────┐                                 │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │  রিকার্সিভ    │                            │
│                    │ (সিদ্ধান্তযোগ্য)│                           │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │ কনটেক্সট-     │                            │
│                    │ সেনসিটিভ      │                            │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │ কনটেক্সট-ফ্রি │                            │
│                    └────┬─────┬────┘                            │
│                         │     │                                 │
│                    ┌────┴─────┴────┐                            │
│                    │   রেগুলার     │                            │
│                    └───────────────┘                            │
└─────────────────────────────────────────────────────────────────┘

অন্তর্ভুক্তি: রেগুলার ⊂ কনটেক্সট-ফ্রি ⊂ কনটেক্সট-সেনসিটিভ ⊂ রিকার্সিভ ⊂ RE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 শ্রেণি অনুযায়ী উদাহরণ:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ভাষা শ্রেণি         │ উদাহরণ                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ রেগুলার             │ {w | w 00-এ শেষ হয়}                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ কনটেক্সট-ফ্রি       │ {aⁿbⁿ | n ≥ 0}                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ কনটেক্সট-সেনসিটিভ   │ {aⁿbⁿcⁿ | n ≥ 1}                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিকার্সিভ           │ {w#w | w ∈ {0,1}*} (সমতা)                   │
│ (সিদ্ধান্তযোগ্য)    │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিকার্সিভলি         │ হাল্টিং সমস্যা (গ্রহণকারী ক্ষেত্রে)         │
│ এনিউমারেবল          │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• টিউরিং মেশিন: সবচেয়ে শক্তিশালী মডেল (৭-টাপল: Q, Σ, Γ, δ, q₀, B, F)
• কনফিগারেশন: (বাম, অবস্থা, ডান) টিএম অবস্থা বর্ণনা করে
• চার্চ-টিউরিং থিসিস: টিএম = অ্যালগরিদমিক্যালি গণনাযোগ্য
• হাল্টিং সমস্যা: অসিদ্ধান্তযোগ্য (কোনো অ্যালগরিদম নেই)
• রিডাকশন: এক সমস্যা থেকে অন্য সমস্যায় রূপান্তর
• রাইসের উপপাদ্য: অ-সামান্য টিএম বৈশিষ্ট্য অসিদ্ধান্তযোগ্য
• শ্রেণিবিন্যাস: রেগুলার ⊂ সিএফ ⊂ সিএস ⊂ রিকার্সিভ ⊂ আরই`,
      takeaways: [
        "Turing Machine: Most powerful computational model (7-tuple)",
        "Church-Turing Thesis: TM = Algorithmically computable",
        "Halting Problem: Undecidable - no algorithm exists",
        "Reduction: Transform one problem to another",
        "Rice's Theorem: Non-trivial TM properties are undecidable",
        "Hierarchy: Regular ⊂ CF ⊂ CS ⊂ Recursive ⊂ RE"
      ],
      takeawaysBn: [
        "টিউরিং মেশিন: সবচেয়ে শক্তিশালী গণনা মডেল (৭-টাপল)",
        "চার্চ-টিউরিং থিসিস: টিএম = অ্যালগরিদমিক্যালি গণনাযোগ্য",
        "হাল্টিং সমস্যা: অসিদ্ধান্তযোগ্য - কোনো অ্যালগরিদম নেই",
        "রিডাকশন: এক সমস্যা থেকে অন্য সমস্যায় রূপান্তর",
        "রাইসের উপপাদ্য: অ-সামান্য টিএম বৈশিষ্ট্য অসিদ্ধান্তযোগ্য",
        "শ্রেণিবিন্যাস: রেগুলার ⊂ সিএফ ⊂ সিএস ⊂ রিকার্সিভ ⊂ আরই"
      ],
      level: "Advanced"
    }
  ]
}

export const module14 = m14