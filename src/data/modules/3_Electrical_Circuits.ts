import type { Module } from '../../types'

const m3: Module = {
  title: "3. Electrical Circuits",
  titleBn: "৩. তড়িৎ সার্কিট",
  level: "Beginner",
  lessons: [
    {
      id: "ec1",
      title: "Circuit Variables, Elements & Basic Laws (Ohm's Law, KCL, KVL)",
      titleBn: "সার্কিট ভেরিয়েবল, উপাদান ও মৌলিক সূত্র (ওহমের সূত্র, KCL, KVL)",
      content: `📌 CIRCUIT VARIABLES AND ELEMENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Fundamental Electrical Quantities

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Quantity            │ Symbol   │ Description                     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Voltage (V)         │ V or v(t)│ Electrical potential difference │
│                     │          │ Unit: Volt (V)                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Current (I)         │ I or i(t)│ Rate of flow of electric charge │
│                     │          │ Unit: Ampere (A)                │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Power (P)           │ P        │ Rate of energy transfer         │
│                     │          │ Unit: Watt (W)                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Energy (W)          │ W        │ Total electrical work done      │
│                     │          │ Unit: Joule (J)                 │
└─────────────────────┴──────────┴─────────────────────────────────┘

Key Relations:
• Current: I = dQ/dt (Q = charge)
• Voltage: V = dW/dQ
• Power: P = V × I
• Energy: W = ∫ P dt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Circuit Elements

┌─────────────────────┬─────────────────────────────────────────────┐
│ Element             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Independent Voltage │ Provides fixed voltage regardless of       │
│ Source              │ circuit conditions (battery)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Independent Current │ Provides fixed current regardless of       │
│ Source              │ circuit conditions                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Dependent Source    │ Output depends on another circuit variable │
│ (VCVS, CCVS, VCCS,  │ Symbol: Diamond shape                      │
│ CCCS)               │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Resistor (R)        │ Opposes current flow                       │
│                     │ Unit: Ohm (Ω)                              │
└─────────────────────┴─────────────────────────────────────────────┘

Dependent Source Types:
• VCVS: Voltage-Controlled Voltage Source
• CCVS: Current-Controlled Voltage Source
• VCCS: Voltage-Controlled Current Source
• CCCS: Current-Controlled Current Source

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 OHM'S LAW

Statement: Voltage across a resistor is directly proportional to current through it.

Formula:
V = I × R

Where:
• V = Voltage (Volts)
• I = Current (Amperes)
• R = Resistance (Ohms)

Rearranged forms:
I = V / R,  R = V / I

Power in resistor:
P = I²R = V²/R

Real-World Analogy:
• Voltage = Water pressure
• Current = Water flow
• Resistance = Pipe narrowness

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 KIRCHHOFF'S CURRENT LAW (KCL)

Statement: The algebraic sum of currents entering a node is zero.
Or: Total current entering = Total current leaving

Formula:
Σ I_in = Σ I_out  or  Σ I_k = 0

KCL Diagram:
        I₁ →
            \
        I₂ →  ●  ← I₃
            /
        I₄ ←

KCL: I₁ + I₂ + I₃ = I₄

Physical basis: Conservation of electric charge

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 KIRCHHOFF'S VOLTAGE LAW (KVL)

Statement: The algebraic sum of all voltages around any closed loop is zero.

Formula:
Σ V_k = 0

KVL Diagram (Series circuit):
    ┌───R1───┐
    │        │
    +        │
    V       R2
    -        │
    │        │
    └────────┘

KVL: V - V_R1 - V_R2 = 0

Physical basis: Conservation of energy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SIMPLE RESISTIVE CIRCUITS

🔷 Series Circuits

Characteristics:
• Same current through all elements
• Voltages divide across components
• Total resistance: R_eq = R₁ + R₂ + ... + R_n

Series Circuit Diagram:
    ┌───R1───┬───R2───┬───R3───┐
    │        │        │        │
    +        │        │        │
    V        │        │        │
    -        │        │        │
    │        │        │        │
    └────────┴────────┴────────┘

Voltage Division Rule:
V_k = V_total × (R_k / R_total)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Parallel Circuits

Characteristics:
• Same voltage across all branches
• Currents divide among branches
• Total resistance: 1/R_eq = 1/R₁ + 1/R₂ + ... + 1/R_n

Parallel Circuit Diagram:
        ┌───R1───┐
        │        │
    ┌───┼───R2───┼───┐
    │   │        │   │
    +   └───R3───┘   │
    V                │
    -                │
    │                │
    └────────────────┘

For two resistors: R_eq = (R₁ × R₂) / (R₁ + R₂)

Current Division Rule (for two resistors):
I₁ = I_total × (R₂ / (R₁ + R₂))
I₂ = I_total × (R₁ / (R₁ + R₂))

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Source Transformation

Allows replacement of:
• Voltage source (V_s) in series with resistor R
  ⇔
• Current source (I_s) in parallel with resistor R

Relationship:
I_s = V_s / R  or  V_s = I_s × R

Example:
12V source in series with 4Ω → equivalent to 3A source in parallel with 4Ω

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison Table

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Series               │ Parallel             │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Current             │ Same through all     │ Divides among branches│
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Voltage             │ Divides across       │ Same across all       │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Equivalent R        │ R_eq = Σ R_k         │ 1/R_eq = Σ 1/R_k      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Power               │ I²R per resistor     │ V²/R per resistor     │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Circuit variables: Voltage (V), Current (I), Power (P), Energy (W)
• Sources: Independent (fixed) and Dependent (controlled)
• Ohm's Law: V = I × R
• KCL: Σ I_in = Σ I_out (charge conservation)
• KVL: Σ V = 0 around closed loop (energy conservation)
• Series: Same current, voltage divides
• Parallel: Same voltage, current divides
• Source Transformation: V_s with R ↔ I_s with R (I_s = V_s/R)`,
      contentBn: `📌 সার্কিট ভেরিয়েবল ও উপাদান

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 মৌলিক তড়িৎ পরিমাণ

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ পরিমাণ              │ প্রতীক   │ বর্ণনা                          │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ভোল্টেজ (V)         │ V বা v(t)│ তড়িৎ বিভব পার্থক্য            │
│                     │          │ একক: ভোল্ট (V)                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ প্রবাহ (I)          │ I বা i(t)│ তড়িৎ আধানের প্রবাহের হার       │
│                     │          │ একক: অ্যাম্পিয়ার (A)           │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ শক্তি (P)           │ P        │ শক্তি স্থানান্তরের হার         │
│                     │          │ একক: ওয়াট (W)                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ কাজ (W)             │ W        │ মোট তড়িৎ কাজ                   │
│                     │          │ একক: জুল (J)                    │
└─────────────────────┴──────────┴─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ওহমের সূত্র

বিবৃতি: রোধ জুড়ে ভোল্টেজ এর মধ্য দিয়ে প্রবাহের সমানুপাতিক।

সূত্র:
V = I × R

যেখানে:
• V = ভোল্টেজ (ভোল্ট)
• I = প্রবাহ (অ্যাম্পিয়ার)
• R = রোধ (ওহম)

রোধে শক্তি:
P = I²R = V²/R

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 কির্শহফের প্রবাহ সূত্র (KCL)

বিবৃতি: একটি নোডে প্রবেশকারী প্রবাহের বীজগাণিতিক যোগফল শূন্য।
অথবা: মোট প্রবেশকারী প্রবাহ = মোট বেরিয়ে যাওয়া প্রবাহ

সূত্র:
Σ I_in = Σ I_out  অথবা  Σ I_k = 0

ভৌত ভিত্তি: তড়িৎ আধানের সংরক্ষণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 কির্শহফের ভোল্টেজ সূত্র (KVL)

বিবৃতি: যেকোনো বন্ধ লুপে সকল ভোল্টেজের বীজগাণিতিক যোগফল শূন্য।

সূত্র:
Σ V_k = 0

ভৌত ভিত্তি: শক্তির সংরক্ষণ

✅ সারাংশ
• সার্কিট ভেরিয়েবল: ভোল্টেজ (V), প্রবাহ (I), শক্তি (P), কাজ (W)
• উৎস: স্বাধীন (স্থির) ও নির্ভরশীল (নিয়ন্ত্রিত)
• ওহমের সূত্র: V = I × R
• KCL: Σ I_in = Σ I_out
• KVL: Σ V = 0
• শ্রেণী: একই প্রবাহ, ভোল্টেজ বিভাগ
• সমান্তরাল: একই ভোল্টেজ, প্রবাহ বিভাগ`,
      takeaways: [
        "Circuit variables: Voltage (V), Current (I), Power (P), Energy (W)",
        "Ohm's Law: V = I × R",
        "KCL: Σ I_in = Σ I_out (charge conservation)",
        "KVL: Σ V = 0 around closed loop (energy conservation)",
        "Series: Same current, voltage divides",
        "Parallel: Same voltage, current divides",
        "Source Transformation: V_s with R ↔ I_s with R (I_s = V_s/R)"
      ],
      takeawaysBn: [
        "সার্কিট ভেরিয়েবল: ভোল্টেজ (V), প্রবাহ (I), শক্তি (P), কাজ (W)",
        "ওহমের সূত্র: V = I × R",
        "KCL: Σ I_in = Σ I_out (আধান সংরক্ষণ)",
        "KVL: Σ V = 0 (শক্তি সংরক্ষণ)",
        "শ্রেণী: একই প্রবাহ, ভোল্টেজ বিভাগ",
        "সমান্তরাল: একই ভোল্টেজ, প্রবাহ বিভাগ",
        "উৎস রূপান্তর: V_s ও R ↔ I_s ও R (I_s = V_s/R)"
      ],
      level: "Beginner"
    },
    {
      id: "ec2",
      title: "Circuit Analysis Methods: Nodal, Mesh & Circuit Theorems",
      titleBn: "সার্কিট বিশ্লেষণ পদ্ধতি: নোডাল, মেশ ও সার্কিট উপপাদ্য",
      content: `📌 METHODS OF ANALYSIS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Nodal Analysis (Node-Voltage Method)

Purpose: Find voltage at each node using KCL.

Steps:
1. Choose a reference node (ground)
2. Label unknown node voltages V₁, V₂, ...
3. Write KCL at each non-reference node
4. Express branch currents as (V_node - V_neighbor)/R
5. Solve simultaneous equations

Example:
    ┌───R1───┬───R2───┐
    │        │        │
    +        V₁       │
    V_s      │        │
    -        R₃       R₄
    │        │        │
    └────────┴────────┘
           Ground

KCL at V₁: (V₁ - V_s)/R₁ + V₁/R₃ + (V₁ - V₂)/R₂ = 0

Best for: Circuits with fewer nodes than meshes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Mesh Analysis (Loop-Current Method)

Purpose: Find unknown currents using KVL.

Steps:
1. Identify meshes (independent loops)
2. Assign mesh currents I₁, I₂, ... (clockwise)
3. Write KVL for each mesh
4. Shared elements carry difference of mesh currents
5. Solve simultaneous equations

Example (Two meshes):
    ┌───R1───┬───R2───┐
    │        │        │
    +        I₁↑      I₂↑
    V_s      ↓        ↓
    -        │        │
    │        │        │
    └────────┴────────┘

KVL for Mesh 1: V_s - I₁R₁ - (I₁ - I₂)R₂ = 0
KVL for Mesh 2: -I₂R₃ - (I₂ - I₁)R₂ = 0

Best for: Circuits with fewer meshes than nodes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CIRCUIT THEOREMS

🔷 Superposition Theorem

Principle: In linear circuit with multiple sources, total response = sum of responses from each source alone.

Steps:
1. Keep one source active
2. Deactivate others: V_s → short, I_s → open
3. Calculate contribution
4. Repeat for all sources
5. Sum all contributions

Example: Find I in branch with 10V source and 5A source

Valid only for linear circuits (R, L, C)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Thevenin's Theorem

Principle: Any linear two-terminal network can be replaced by V_th in series with R_th.

Steps:
1. Remove load across terminals
2. Find V_th = open-circuit voltage
3. Find R_th: deactivate sources → resistance seen at terminals
4. Replace network with V_th + R_th

Thevenin Equivalent:
    ┌─────R_th─────┐
    │              │
    │  ┌───┐       │
    │  │ V_th      │
    │  └───┘       │
    │              │
    └──────────────┘
          Load

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Norton's Theorem

Principle: Any linear two-terminal network can be replaced by I_n in parallel with R_n.

Where:
• R_n = R_th (same as Thevenin)
• I_n = short-circuit current at terminals

Norton Equivalent:
        ┌─────┐
        │     │
        │  I_n│
        │  ↑  │
        │  │  │
        └──┬──┘
           │
         ┌─┴─┐
         │ R_n│
         └───┘
           │
         Load

Conversion:
V_th = I_n × R_n

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Maximum Power Transfer Theorem

Principle: Load receives maximum power when load resistance equals source resistance.

R_L = R_th

Maximum Power:
P_max = V_th² / (4R_th)

Power vs R_L curve:
    P ↑
      |     /‾‾‾\
      |    /     \
      |   /       \
      |  /         \
      | /           \
      └────────────────→ R_L
            R_L = R_th

Applications:
• Audio amplifier matching to speaker
• Communication systems
• Impedance matching

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Reciprocity Theorem

Principle: In linear bilateral network, current at point B due to voltage at A equals current at A due to same voltage at B.

I_A→B (with V at A) = I_B→A (with V at B)

Application: Network verification, antenna analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Wye-Delta (Y-Δ) and Delta-Wye (Δ-Y) Conversions

Used to simplify three-terminal networks.

Delta (Δ) Configuration:
    a ────R_ab──── b
     \\           /
      \\         /
       R_ca     R_bc
         \\     /
          \\   /
            c

Wye (Y) Configuration:
        a
        │
       R_a
        │
    b──R_b─┴─R_c──c

Δ → Y Conversion:
R_a = (R_ab × R_ca) / (R_ab + R_bc + R_ca)
R_b = (R_ab × R_bc) / (R_ab + R_bc + R_ca)
R_c = (R_bc × R_ca) / (R_ab + R_bc + R_ca)

Y → Δ Conversion:
R_ab = (R_a R_b + R_b R_c + R_c R_a) / R_c
R_bc = (R_a R_b + R_b R_c + R_c R_a) / R_a
R_ca = (R_a R_b + R_b R_c + R_c R_a) / R_b

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Comparison Table

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Theorem             │ Replaces With        │ Best Use             │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Superposition       │ Sum of individual    │ Multiple sources     │
│                     │ responses            │                      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Thevenin            │ V_th + R_th          │ Simplify for load    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Norton              │ I_n + R_n            │ Parallel load        │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Max Power Transfer  │ R_L = R_th           │ Impedance matching   │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Nodal Analysis: KCL at nodes, find voltages
• Mesh Analysis: KVL around loops, find currents
• Superposition: Sum of individual source contributions
• Thevenin: V_th in series with R_th
• Norton: I_n in parallel with R_n
• Max Power Transfer: R_L = R_th
• Y-Δ Conversions: Simplify three-terminal networks`,
      contentBn: `📌 বিশ্লেষণের পদ্ধতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 নোডাল বিশ্লেষণ

উদ্দেশ্য: KCL ব্যবহার করে প্রতিটি নোডের ভোল্টেজ নির্ণয়।

ধাপ:
১. রেফারেন্স নোড নির্বাচন করুন (গ্রাউন্ড)
২. অজানা নোড ভোল্টেজ V₁, V₂, ... লেবেল করুন
৩. প্রতিটি নন-রেফারেন্স নোডে KCL লিখুন
৪. ব্রাঞ্চ প্রবাহকে (V_node - V_neighbor)/R হিসাবে প্রকাশ করুন
৫. সমীকরণ সমাধান করুন

সেরা: মেশের চেয়ে কম নোড আছে এমন সার্কিটের জন্য

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 মেশ বিশ্লেষণ

উদ্দেশ্য: KVL ব্যবহার করে অজানা প্রবাহ নির্ণয়।

ধাপ:
১. মেশ চিহ্নিত করুন (স্বাধীন লুপ)
২. মেশ প্রবাহ I₁, I₂, ... বরাদ্দ করুন (ঘড়ির কাঁটার দিকে)
৩. প্রতিটি মেশের জন্য KVL লিখুন
৪. ভাগ করা উপাদান মেশ প্রবাহের পার্থক্য বহন করে
৫. সমীকরণ সমাধান করুন

সেরা: নোডের চেয়ে কম মেশ আছে এমন সার্কিটের জন্য

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সার্কিট উপপাদ্য

সুপারপজিশন: একাধিক উৎসের সার্কিটে মোট প্রতিক্রিয়া = প্রতিটি উৎসের প্রতিক্রিয়ার যোগফল

থেভেনিন: যেকোনো রৈখিক দুই-টার্মিনাল নেটওয়ার্ককে V_th ও R_th দ্বারা প্রতিস্থাপন

নর্টন: যেকোনো রৈখিক দুই-টার্মিনাল নেটওয়ার্ককে I_n ও R_n দ্বারা প্রতিস্থাপন

সর্বোচ্চ শক্তি স্থানান্তর: R_L = R_th হলে লোড সর্বোচ্চ শক্তি পায়

✅ সারাংশ
• নোডাল বিশ্লেষণ: নোডে KCL, ভোল্টেজ নির্ণয়
• মেশ বিশ্লেষণ: লুপে KVL, প্রবাহ নির্ণয়
• সুপারপজিশন: পৃথক উৎসের প্রতিক্রিয়ার যোগফল
• থেভেনিন: V_th ও R_th শ্রেণীতে
• নর্টন: I_n ও R_n সমান্তরালে
• সর্বোচ্চ শক্তি স্থানান্তর: R_L = R_th
• Y-Δ রূপান্তর: তিন-টার্মিনাল নেটওয়ার্ক সরলীকরণ`,
      takeaways: [
        "Nodal Analysis: KCL at nodes, find voltages",
        "Mesh Analysis: KVL around loops, find currents",
        "Superposition: Sum of individual source contributions",
        "Thevenin: V_th in series with R_th",
        "Norton: I_n in parallel with R_n",
        "Max Power Transfer: R_L = R_th",
        "Y-Δ Conversions: Simplify three-terminal networks"
      ],
      takeawaysBn: [
        "নোডাল বিশ্লেষণ: নোডে KCL, ভোল্টেজ নির্ণয়",
        "মেশ বিশ্লেষণ: লুপে KVL, প্রবাহ নির্ণয়",
        "সুপারপজিশন: পৃথক উৎসের প্রতিক্রিয়ার যোগফল",
        "থেভেনিন: V_th ও R_th শ্রেণীতে",
        "নর্টন: I_n ও R_n সমান্তরালে",
        "সর্বোচ্চ শক্তি স্থানান্তর: R_L = R_th",
        "Y-Δ রূপান্তর: তিন-টার্মিনাল নেটওয়ার্ক সরলীকরণ"
      ],
      level: "Intermediate"
    },
    {
      id: "ec3",
      title: "Capacitors, Inductors, AC Circuits & Phasors",
      titleBn: "ক্যাপাসিটর, ইন্ডাক্টর, এসি সার্কিট ও ফেজর",
      content: `📌 CAPACITORS AND INDUCTORS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Capacitors

Characteristics:
• Stores energy in electric field
• Voltage cannot change instantaneously
• Current leads voltage by 90° in AC

Basic Relations:
i(t) = C × dv(t)/dt
Q = C × V
Energy stored: W = ½ C V²

Unit: Farad (F)

Capacitor Symbol:
    ──||──

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Inductors

Characteristics:
• Stores energy in magnetic field
• Current cannot change instantaneously
• Voltage leads current by 90° in AC

Basic Relations:
v(t) = L × di(t)/dt
Energy stored: W = ½ L I²

Unit: Henry (H)

Inductor Symbol:
    ──mmmm──

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Series-Parallel Combinations

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Configuration       │ Capacitors           │ Inductors            │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Series              │ 1/C_eq = Σ 1/C_k     │ L_eq = Σ L_k         │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Parallel            │ C_eq = Σ C_k         │ 1/L_eq = Σ 1/L_k     │
└─────────────────────┴──────────────────────┴──────────────────────┘

Note: Opposite of resistor combinations!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RLC Transients

Time constant for RC circuit: τ = RC
Time constant for RL circuit: τ = L/R

RC Charging:
v_C(t) = V_s(1 - e^{-t/RC})

RC Discharging:
v_C(t) = V_0 e^{-t/RC}

RL Current Rise:
i_L(t) = (V_s/R)(1 - e^{-tR/L})

RL Current Decay:
i_L(t) = I_0 e^{-tR/L}

RLC Circuit (Second Order):

Damping factor: α = R/(2L)
Natural frequency: ω₀ = 1/√(LC)

Response types:
• Underdamped (α < ω₀): Oscillatory decay
• Critically damped (α = ω₀): Fastest non-oscillatory
• Overdamped (α > ω₀): Two exponential decays

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 AC CIRCUITS

Impedance (Z): Generalized resistance for AC

Z = R + jX

Where:
• R = Resistance (real part)
• X = Reactance (imaginary part)
  - Inductive: X_L = ωL = 2πfL
  - Capacitive: X_C = -1/(ωC)

Magnitude: |Z| = √(R² + X²)
Phase angle: θ = tan⁻¹(X/R)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Phasor Diagrams

Phasor: Rotating vector representing sinusoid's magnitude and phase.

Phasor Diagram for RL Circuit (I as reference):
        V_L (90° lead)
           ↑
           │
           │
    I ────→ V_R (in phase)
    
    V_total = V_R + V_L (vector sum)

Phasor Diagram for RC Circuit (I as reference):
    V_R (in phase) ────→ I
    
           ↓
        V_C (90° lag)

For RLC series:
• If X_L > X_C: Circuit is inductive (current lags)
• If X_C > X_L: Circuit is capacitive (current leads)
• If X_L = X_C: Resonance (purely resistive)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Admittance and Susceptance

Admittance (Y): Reciprocal of impedance
Y = 1/Z = G + jB

Where:
• G = Conductance (real part) = R/(R²+X²)
• B = Susceptance (imaginary part) = -X/(R²+X²)

For parallel AC circuits, use admittance:
Y_eq = Y₁ + Y₂ + ... (add directly)

Then Z_eq = 1/Y_eq

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 AC Circuit Analysis Methods

Voltage Divider Rule (AC):
V_k = V_total × (Z_k / Z_total)

Current Divider Rule (AC):
I_k = I_total × (Y_k / Y_total)

Series AC: Z_eq = Z₁ + Z₂ + ...
Parallel AC: 1/Z_eq = 1/Z₁ + 1/Z₂ + ... or Y_eq = Y₁ + Y₂ + ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Power in AC Circuits

┌─────────────────────┬─────────────────────────────────────────────┐
│ Power Type          │ Formula                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Real Power (P)      │ V_rms I_rms cos φ (Watts)                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reactive Power (Q)  │ V_rms I_rms sin φ (VAR)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Apparent Power (S)  │ V_rms I_rms (VA)                           │
└─────────────────────┴─────────────────────────────────────────────┘

Power Factor: pf = cos φ = P/S
• Leading pf: Capacitive circuit (current leads)
• Lagging pf: Inductive circuit (current lags)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Formula                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Capacitor           │ i = C dv/dt, Energy = ½ CV²                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Inductor            │ v = L di/dt, Energy = ½ LI²                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Impedance           │ Z = R + jX, |Z| = √(R²+X²)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Admittance          │ Y = G + jB = 1/Z                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Resonance           │ X_L = X_C, ω = 1/√(LC)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Power Factor        │ pf = cos φ = P/S                           │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Capacitors: i = C dv/dt, oppose voltage change, store E-field energy
• Inductors: v = L di/dt, oppose current change, store B-field energy
• C & L combinations: Opposite rules from resistors
• RLC transients: RC (τ=RC), RL (τ=L/R), RLC (α=R/2L, ω₀=1/√LC)
• Impedance (Z): R + jX, magnitude |Z| = √(R²+X²)
• Phasor diagrams: Visualize magnitude/phase relationships
• Admittance (Y): 1/Z = G + jB, convenient for parallel circuits
• AC power: Real (P), Reactive (Q), Apparent (S), Power Factor = cos φ`,
      contentBn: `📌 ক্যাপাসিটর ও ইন্ডাক্টর

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ক্যাপাসিটর

বৈশিষ্ট্য:
• তড়িৎক্ষেত্রে শক্তি সঞ্চয় করে
• ভোল্টেজ তাৎক্ষণিকভাবে পরিবর্তিত হতে পারে না
• এসি-তে প্রবাহ ভোল্টেজ থেকে ৯০° অগ্রগামী

মৌলিক সম্পর্ক:
i(t) = C × dv(t)/dt
সঞ্চিত শক্তি: W = ½ C V²

একক: ফ্যারাড (F)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ইন্ডাক্টর

বৈশিষ্ট্য:
• চুম্বকক্ষেত্রে শক্তি সঞ্চয় করে
• প্রবাহ তাৎক্ষণিকভাবে পরিবর্তিত হতে পারে না
• এসি-তে ভোল্টেজ প্রবাহ থেকে ৯০° অগ্রগামী

মৌলিক সম্পর্ক:
v(t) = L × di(t)/dt
সঞ্চিত শক্তি: W = ½ L I²

একক: হেনরি (H)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 এসি সার্কিট

ইম্পিডেন্স (Z): এসির জন্য সাধারণীকৃত রোধ

Z = R + jX

যেখানে:
• R = রোধ (বাস্তব অংশ)
• X = রিঅ্যাকট্যান্স (কাল্পনিক অংশ)
  - ইন্ডাকটিভ: X_L = ωL = 2πfL
  - ক্যাপাসিটিভ: X_C = -1/(ωC)

পরিমাণ: |Z| = √(R² + X²)
ফেজ কোণ: θ = tan⁻¹(X/R)

✅ সারাংশ
• ক্যাপাসিটর: i = C dv/dt, ভোল্টেজ পরিবর্তনে বাধা দেয়, তড়িৎক্ষেত্রে শক্তি সঞ্চয়
• ইন্ডাক্টর: v = L di/dt, প্রবাহ পরিবর্তনে বাধা দেয়, চুম্বকক্ষেত্রে শক্তি সঞ্চয়
• RLC ট্রানজিয়েন্ট: RC (τ=RC), RL (τ=L/R)
• ইম্পিডেন্স (Z): R + jX, পরিমাণ |Z| = √(R²+X²)
• ফেজর ডায়াগ্রাম: পরিমাণ ও ফেজ সম্পর্ক দৃশ্যায়ন করে
• অ্যাডমিট্যান্স (Y): 1/Z = G + jB, সমান্তরাল সার্কিটের জন্য সুবিধাজনক
• এসি শক্তি: বাস্তব (P), প্রতিঘাতী (Q), আপাত (S), পাওয়ার ফ্যাক্টর = cos φ`,
      takeaways: [
        "Capacitors: i = C dv/dt, oppose voltage change, store E-field energy",
        "Inductors: v = L di/dt, oppose current change, store B-field energy",
        "Impedance (Z): R + jX, magnitude |Z| = √(R²+X²)",
        "Phasor diagrams: Visualize magnitude and phase relationships",
        "Admittance (Y): 1/Z = G + jB, convenient for parallel circuits",
        "AC Power: Real (P), Reactive (Q), Apparent (S), Power Factor = cos φ",
        "RLC transients: RC (τ=RC), RL (τ=L/R), RLC (α=R/2L, ω₀=1/√LC)"
      ],
      takeawaysBn: [
        "ক্যাপাসিটর: i = C dv/dt, ভোল্টেজ পরিবর্তনে বাধা দেয়, তড়িৎক্ষেত্রে শক্তি সঞ্চয়",
        "ইন্ডাক্টর: v = L di/dt, প্রবাহ পরিবর্তনে বাধা দেয়, চুম্বকক্ষেত্রে শক্তি সঞ্চয়",
        "ইম্পিডেন্স (Z): R + jX, পরিমাণ |Z| = √(R²+X²)",
        "ফেজর ডায়াগ্রাম: পরিমাণ ও ফেজ সম্পর্ক দৃশ্যায়ন করে",
        "অ্যাডমিট্যান্স (Y): 1/Z = G + jB, সমান্তরাল সার্কিটের জন্য সুবিধাজনক",
        "এসি শক্তি: বাস্তব (P), প্রতিঘাতী (Q), আপাত (S), পাওয়ার ফ্যাক্টর = cos φ",
        "RLC ট্রানজিয়েন্ট: RC (τ=RC), RL (τ=L/R), RLC (α=R/2L, ω₀=1/√LC)"
      ],
      level: "Intermediate"
    }
  ]
}

export const module3 = m3