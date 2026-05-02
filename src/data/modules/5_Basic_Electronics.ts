import type { Module } from '../../types'

const m5: Module = {
  title: "5. Basic Electronics",
  titleBn: "৫. মৌলিক ইলেকট্রনিক্স",
  level: "Beginner",
  lessons: [
    {
      id: "be1",
      title: "Diode Circuits: Characteristics, Models, Rectifiers, Clippers, Clampers",
      titleBn: "ডায়োড সার্কিট: বৈশিষ্ট্য, মডেল, রেকটিফায়ার, ক্লিপার, ক্ল্যাম্পার",
      content: `📌 DIODE CIRCUITS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Basic Diode Concept

A diode is a semiconductor device that allows current to flow in only one direction.

• Made from p–n junction (p-type and n-type semiconductor)
• p-side → Anode, n-side → Cathode

Symbol:  ┌───┐
Anode ──┤▷├── Cathode
        └───┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Current-Voltage (I-V) Characteristics

┌─────────────────────┬─────────────────────────────────────────────┐
│ Bias Type           │ Behavior                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Forward Bias        │ p-side positive, n-side negative            │
│                     │ Current flows exponentially after threshold│
│                     │ Si: ~0.7V, Ge: ~0.3V                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reverse Bias        │ p-side negative, n-side positive            │
│                     │ Very small current (I_s) flows              │
│                     │ Breakdown at high reverse voltage           │
└─────────────────────┴─────────────────────────────────────────────┘

I-V Equation:
I = I_s (e^{V/nV_T} - 1)

Where:
• I_s = reverse saturation current
• V_T = thermal voltage ≈ 26mV at room temperature
• n = ideality factor (≈1 for silicon)

I-V Curve:
    I ↑
      |     Forward Region
      |        /
      |       /
      |      /
      |─────┘
      |  Reverse
      |  Region
      └──────────────────→ V
    (Breakdown)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 DC and AC Models of a Diode

┌─────────────────────┬─────────────────────────────────────────────┐
│ Model               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Ideal Diode         │ Forward: short (0V drop)                    │
│                     │ Reverse: open circuit                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Practical Diode     │ Forward: 0.7V drop (Si)                     │
│                     │ Reverse: open circuit                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Small-Signal (AC)   │ Dynamic resistance: r_d = nV_T / I_D        │
│ Model               │ Junction capacitance (C_j)                  │
└─────────────────────┴─────────────────────────────────────────────┘

Dynamic Resistance: r_d = dV/dI = nV_T / I_D

Junction Capacitance: C_j = εA / W (W = depletion width)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📉 Load Line Analysis

Used to determine operating point (Q-point) of a diode circuit.

Load Line Equation: V_D + I_D R = V_supply

Steps:
1. Plot diode I-V curve
2. Draw load line (V_D + I_D R = V_s)
3. Intersection point = Q-point (operating point)

DC Load Line: For steady operation
AC Load Line: For signal variations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Zener Diode and Zener Regulator

Zener Diode: Designed to operate in reverse breakdown region safely.
Maintains constant voltage even if current or load changes.

Zener Voltage Regulator:
• Input voltage increases → Zener conducts more → output constant
• Input decreases → conducts less → output constant

V_out ≈ V_Z

Zener Regulator Circuit:
         R
Vin ──www────┬───── Vout (≈ V_Z)
            │
           ┌┴┐
           │ │ Zener
           └┬┘
            │
           GND

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ RECTIFIERS (AC → DC Conversion)

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Half-Wave Rectifier │ 1 diode, conducts only positive half cycle  │
│                     │ Efficiency: 40.6%, Ripple: 1.21             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Full-Wave Rectifier │ 2 diodes (center-tap) or 4 (bridge)         │
│ (Bridge)            │ Conducts both half cycles                   │
│                     │ Efficiency: 81.2%, Ripple: 0.48             │
└─────────────────────┴─────────────────────────────────────────────┘

Half-Wave Rectifier Circuit:
    AC ────┬──────┐
           │      │
          ┌┴┐     │
          │ │ Diode
          └┬┘     │
           │      │
    AC ────┴──────┘   Load

Full-Wave Bridge Rectifier:
    AC1 ────┬────┐
           ┌┴┐  ┌┴┐
           │ │  │ │
           └┬┘  └┬┘
            │    │
    AC2 ────┴────┘    Load

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Voltage Multiplier Circuits

Used to generate high DC voltages from low AC input.

Types:
• Voltage Doubler: Output ≈ 2 × V_peak
• Voltage Tripler: Output ≈ 3 × V_peak
• Voltage Quadrupler: Output ≈ 4 × V_peak

Applications: CRTs, photocopiers, X-ray tubes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 Clippers and Clampers

┌─────────────────────┬─────────────────────────────────────────────┐
│ Circuit             │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clipper             │ Removes (clips) part of waveform above or   │
│                     │ below reference level. Wave shaping.        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clamper             │ Shifts entire waveform up or down without   │
│                     │ changing shape. DC restoration.             │
└─────────────────────┴─────────────────────────────────────────────┘

Clipper Types:
• Series clipper: Removes one part directly
• Parallel clipper: Uses reference voltage
• Biased clipper: Uses DC bias + diode

Clamper Types:
• Positive clamper: Shifts signal upward
• Negative clamper: Shifts signal downward

Applications: TV receivers, oscilloscopes, signal processing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Formula / Note                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ I-V Characteristics │ I = I_s(e^{V/nV_T} - 1)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ DC Model            │ V_D ≈ 0.7V (Si), 0.3V (Ge)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ AC Model            │ r_d = nV_T / I_D                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Load Line           │ V_D + I_D R = V_supply                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Zener Regulator     │ V_out ≈ V_Z                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Half-Wave Rectifier │ Efficiency: 40.6%                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Full-Wave Rectifier │ Efficiency: 81.2%                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Voltage Multiplier  │ V_out = n × V_peak                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clipper             │ Removes portion of waveform                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clamper             │ Shifts waveform level                      │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Diode allows current in one direction (p→n)
• I-V: Exponential forward, small reverse current
• DC Model: 0.7V drop (Si), AC Model: r_d = nV_T/I_D
• Load line determines Q-point (operating point)
• Zener diode maintains constant voltage in reverse breakdown
• Rectifiers: Half-wave (40.6%), Full-wave (81.2%) convert AC to DC
• Voltage multipliers: Doubler, tripler, quadrupler
• Clippers remove waveform portions; Clampers shift DC level`,
      contentBn: `📌 ডায়োড সার্কিট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ডায়োডের মৌলিক ধারণা

ডায়োড একটি সেমিকন্ডাক্টর ডিভাইস যা শুধুমাত্র এক দিকে প্রবাহ প্রবাহিত হতে দেয়।

• p–n জাংশন থেকে তৈরি (p-টাইপ ও n-টাইপ সেমিকন্ডাক্টর)
• p-পাশ → অ্যানোড, n-পাশ → ক্যাথোড

প্রতীক:  ┌───┐
অ্যানোড ──┤▷├── ক্যাথোড
        └───┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 প্রবাহ-ভোল্টেজ (I-V) বৈশিষ্ট্য

┌─────────────────────┬─────────────────────────────────────────────┐
│ বায়াস প্রকার       │ আচরণ                                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফরওয়ার্ড বায়াস    │ p-পাশ পজিটিভ, n-পাশ নেগেটিভ               │
│                     │ থ্রেশহোল্ডের পরে প্রবাহ সূচকীয়ভাবে বাড়ে   │
│                     │ Si: ~0.7V, Ge: ~0.3V                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিভার্স বায়াস      │ p-পাশ নেগেটিভ, n-পাশ পজিটিভ               │
│                     │ খুব ছোট প্রবাহ (I_s) প্রবাহিত হয়           │
│                     │ উচ্চ রিভার্স ভোল্টেজে ব্রেকডাউন হয়        │
└─────────────────────┴─────────────────────────────────────────────┘

I-V সমীকরণ:
I = I_s (e^{V/nV_T} - 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ডায়োডের DC ও AC মডেল

┌─────────────────────┬─────────────────────────────────────────────┐
│ মডেল                │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ আইডিয়াল ডায়োড    │ ফরওয়ার্ড: শর্ট (0V ড্রপ)                   │
│                     │ রিভার্স: ওপেন সার্কিট                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্র্যাকটিক্যাল      │ ফরওয়ার্ড: 0.7V ড্রপ (Si)                  │
│ ডায়োড             │ রিভার্স: ওপেন সার্কিট                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্মল-সিগন্যাল (AC) │ ডায়নামিক রেজিস্ট্যান্স: r_d = nV_T / I_D  │
│ মডেল               │ জাংশন ক্যাপাসিট্যান্স (C_j)                 │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• ডায়োড এক দিকে প্রবাহ দেয় (p→n)
• I-V: ফরওয়ার্ডে সূচকীয়, রিভার্সে ছোট প্রবাহ
• DC মডেল: 0.7V ড্রপ (Si), AC মডেল: r_d = nV_T/I_D
• লোড লাইন Q-পয়েন্ট নির্ধারণ করে
• জেনার ডায়োড রিভার্স ব্রেকডাউনে স্থির ভোল্টেজ বজায় রাখে
• রেকটিফায়ার: হাফ-ওয়েভ (40.6%), ফুল-ওয়েভ (81.2%) AC কে DC-তে রূপান্তর করে
• ভোল্টেজ মাল্টিপ্লায়ার: ডাবলার, ট্রিপলার, কোয়াড্রুপ্লার
• ক্লিপার তরঙ্গের অংশ কেটে ফেলে; ক্ল্যাম্পার DC স্তর স্থানান্তর করে`,
      takeaways: [
        "Diode allows current in one direction (p→n)",
        "I-V: Exponential forward, small reverse current",
        "DC Model: 0.7V drop (Si), AC Model: r_d = nV_T/I_D",
        "Rectifiers: Half-wave (40.6%), Full-wave (81.2%)",
        "Zener diode maintains constant voltage in reverse breakdown",
        "Clippers remove waveform portions; Clampers shift DC level"
      ],
      takeawaysBn: [
        "ডায়োড এক দিকে প্রবাহ দেয় (p→n)",
        "I-V: ফরওয়ার্ডে সূচকীয়, রিভার্সে ছোট প্রবাহ",
        "DC মডেল: 0.7V ড্রপ (Si), AC মডেল: r_d = nV_T/I_D",
        "রেকটিফায়ার: হাফ-ওয়েভ (40.6%), ফুল-ওয়েভ (81.2%)",
        "জেনার ডায়োড রিভার্স ব্রেকডাউনে স্থির ভোল্টেজ বজায় রাখে",
        "ক্লিপার তরঙ্গের অংশ কেটে ফেলে; ক্ল্যাম্পার DC স্তর স্থানান্তর করে"
      ],
      level: "Intermediate"
    },
    {
      id: "be2",
      title: "Bipolar Junction Transistors (BJT): Construction, Operation, Configurations, Biasing, Models",
      titleBn: "বাইপোলার জাংশন ট্রানজিস্টর (BJT): গঠন, অপারেশন, কনফিগারেশন, বায়াসিং, মডেল",
      content: `📌 BIPOLAR JUNCTION TRANSISTORS (BJT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Construction and Operation

BJT is a three-layer, two-junction semiconductor device that can amplify or switch electrical signals.

Three Terminals:
• Emitter (E): Heavily doped; emits charge carriers
• Base (B): Very thin and lightly doped
• Collector (C): Moderately doped; collects carriers

Two Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Operation                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ NPN Transistor      │ Current flows from Collector → Emitter      │
│                     │ when Base is positive relative to Emitter   │
├─────────────────────┼─────────────────────────────────────────────┤
│ PNP Transistor      │ Current flows from Emitter → Collector      │
│                     │ when Base is negative relative to Emitter   │
└─────────────────────┴─────────────────────────────────────────────┘

Operation Principle:
A small base current controls a large collector current.

NPN Structure:
      Collector (C)
           ↑
           │
      ┌────┴────┐
      │  n-type │
      ├─────────┤
      │  p-type │ ← Base (B)
      ├─────────┤
      │  n-type │
      └────┬────┘
           │
      Emitter (E)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Amplifying Action

Current Gain: β = I_C / I_B (typically 100-300)

Power Gain: Ap = Av × Ai

A small input current at the base produces a large output current at the collector → Amplification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Three Configurations

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Configuration       │ Input        │ Output       │ Characteristics│
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Base (CB)    │ Emitter      │ Collector    │ Low Z_in,     │
│                     │              │              │ High Z_out    │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Emitter (CE) │ Base         │ Collector    │ Medium Z_in,  │
│                     │              │              │ Medium Z_out, │
│                     │              │              │ High gain     │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Collector    │ Base         │ Emitter      │ High Z_in,    │
│ (CC) / Emitter      │              │              │ Low Z_out,    │
│ Follower            │              │              │ Unity gain    │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

CB:  Base common to input & output
CE:  Emitter common
CC:  Collector common

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📉 Load Line Analysis

Load line represents all possible combinations of I_C and V_CE for a given load resistance.

DC Load Line: Drawn on output characteristics to determine Q-point.

Q-point (Quiescent point): Steady-state operating condition (no input signal).

Load Line Equation: V_CE + I_C R_L = V_CC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Biasing Methods

Purpose: Provide proper DC voltage to operate transistor in desired region.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Biasing Method      │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fixed Bias          │ Simplest, least stable                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Collector-to-Base   │ Improved stability                         │
│ Bias                │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Voltage Divider     │ Most stable, most common                    │
│ Bias                │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Emitter Bias        │ Good stability, uses two supplies           │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Stability Factor (S)

Indicates how stable I_C remains despite temperature changes or β variations.

S = dI_C / dI_CO (for leakage current)

Lower stability factor → more stable biasing.

For voltage divider bias: S ≈ 1 (most stable)
For fixed bias: S = 1 + β (least stable)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Small Signal Equivalent Circuit Models

Used to analyze transistor amplifiers for small AC signals.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Model               │ Parameters                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ h-Parameter Model   │ h_ie (input impedance)                      │
│ (Hybrid Model)      │ h_re (reverse voltage gain)                 │
│                     │ h_fe (forward current gain = β)            │
│                     │ h_oe (output admittance)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ r-Parameter Model   │ r_π = input resistance                      │
│ (Re Model)          │ g_m = transconductance = I_C / V_T         │
│                     │ r_o = output resistance                     │
└─────────────────────┴─────────────────────────────────────────────┘

h-Parameter Equations:
V_1 = h_11 I_1 + h_12 V_2
I_2 = h_21 I_1 + h_22 V_2

For Common Emitter: h_ie, h_re, h_fe, h_oe
For Common Base:   h_ib, h_rb, h_fb, h_ob
For Common Collector: h_ic, h_rc, h_fc, h_oc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 BJT as a Switch

BJT operates in two extreme modes:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Mode                │ Junction States                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cutoff              │ Both junctions reverse-biased               │
│                     │ Transistor OFF, I_C ≈ 0                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Saturation          │ Both junctions forward-biased               │
│                     │ Transistor ON, V_CE ≈ 0.2V                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Active              │ E-B forward, C-B reverse                    │
│                     │ Used for amplification                      │
└─────────────────────┴─────────────────────────────────────────────┘

BJT Switch Applications:
• Logic gates (TTL)
• Relay drivers
• LED drivers
• Inverter circuits

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Region              │ E-B Junction │ C-B Junction │ Transistor    │
├─────────────────────┼──────────────┼──────────────┼───────────────┤
│ Cutoff              │ Reverse      │ Reverse      │ OFF           │
├─────────────────────┼──────────────┼──────────────┼───────────────┤
│ Active              │ Forward      │ Reverse      │ Amplifier     │
├─────────────────────┼──────────────┼──────────────┼───────────────┤
│ Saturation          │ Forward      │ Forward      │ ON (Switch)   │
└─────────────────────┴──────────────┴──────────────┴───────────────┘

✅ SUMMARY
• BJT: 3-layer device (Emitter, Base, Collector)
• Types: NPN and PNP
• Current gain: β = I_C / I_B
• Configurations: CB, CE, CC
• Load line determines Q-point
• Biasing methods: Fixed, Collector-to-base, Voltage divider, Emitter
• Stability factor (S): Lower = more stable
• h-parameter model for small-signal AC analysis
• BJT as switch: Cutoff (OFF), Saturation (ON)`,
      contentBn: `📌 বাইপোলার জাংশন ট্রানজিস্টর (BJT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 গঠন ও অপারেশন

BJT একটি তিন-স্তর, দুই-জাংশন সেমিকন্ডাক্টর ডিভাইস যা সংকেত বৃদ্ধি বা সুইচ করতে পারে।

তিনটি টার্মিনাল:
• এমিটার (E): ভারী ডোপড; চার্জ ক্যারিয়ার নির্গত করে
• বেস (B): খুব পাতলা ও হালকা ডোপড
• কালেক্টর (C): মাঝারি ডোপড; ক্যারিয়ার সংগ্রহ করে

দুটি প্রকার:
• NPN ট্রানজিস্টর: বেস পজিটিভ হলে কালেক্টর → এমিটার
• PNP ট্রানজিস্টর: বেস নেগেটিভ হলে এমিটার → কালেক্টর

অপারেশন নীতি:
একটি ছোট বেস প্রবাহ একটি বড় কালেক্টর প্রবাহ নিয়ন্ত্রণ করে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 তিনটি কনফিগারেশন

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ কনফিগারেশন         │ ইনপুট        │ আউটপুট       │ বৈশিষ্ট্য     │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন বেস (CB)        │ এমিটার       │ কালেক্টর     │ কম Z_in,     │
│                     │              │              │ উচ্চ Z_out    │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন এমিটার (CE)     │ বেস          │ কালেক্টর     │ মাঝারি Z_in,  │
│                     │              │              │ মাঝারি Z_out, │
│                     │              │              │ উচ্চ গেইন     │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন কালেক্টর (CC)   │ বেস          │ এমিটার       │ উচ্চ Z_in,    │
│ / এমিটার ফলোয়ার    │              │              │ কম Z_out,     │
│                     │              │              │ ইউনিটি গেইন  │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 BJT সুইচ হিসেবে

BJT দুটি চরম মোডে কাজ করে:

• কাটঅফ: উভয় জাংশন রিভার্স-বায়াসড → ট্রানজিস্টর OFF
• স্যাচুরেশন: উভয় জাংশন ফরওয়ার্ড-বায়াসড → ট্রানজিস্টর ON
• অ্যাক্টিভ: E-B ফরওয়ার্ড, C-B রিভার্স → এম্প্লিফিকেশন

✅ সারাংশ
• BJT: ৩-স্তর ডিভাইস (এমিটার, বেস, কালেক্টর)
• প্রকার: NPN ও PNP
• প্রবাহ গেইন: β = I_C / I_B
• কনফিগারেশন: CB, CE, CC
• বায়াসিং: ফিক্সড, ভোল্টেজ ডিভাইডার, এমিটার
• h-প্যারামিটার মডেল এসি বিশ্লেষণের জন্য
• BJT সুইচ: কাটঅফ (OFF), স্যাচুরেশন (ON)`,
      takeaways: [
        "BJT: 3-layer device (Emitter, Base, Collector)",
        "Current gain: β = I_C / I_B (typically 100-300)",
        "Three configurations: CB, CE, CC with different impedances",
        "h-parameter model for small-signal AC analysis",
        "BJT as switch: Cutoff (OFF), Saturation (ON), Active (amplifier)"
      ],
      takeawaysBn: [
        "BJT: ৩-স্তর ডিভাইস (এমিটার, বেস, কালেক্টর)",
        "প্রবাহ গেইন: β = I_C / I_B (সাধারণত ১০০-৩০০)",
        "তিনটি কনফিগারেশন: CB, CE, CC ভিন্ন ইম্পিডেন্স সহ",
        "h-প্যারামিটার মডেল স্মল-সিগন্যাল এসি বিশ্লেষণের জন্য",
        "BJT সুইচ: কাটঅফ (OFF), স্যাচুরেশন (ON), অ্যাক্টিভ (এম্প্লিফায়ার)"
      ],
      level: "Advanced"
    },
    {
      id: "be3",
      title: "Single Stage Amplifiers & Field Effect Transistors (FET)",
      titleBn: "সিঙ্গেল স্টেজ এম্পলিফায়ার ও ফিল্ড ইফেক্ট ট্রানজিস্টর (FET)",
      content: `📌 SINGLE STAGE AMPLIFIERS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A single-stage amplifier uses one transistor (BJT or FET) to amplify a weak input signal.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Voltage and Current Gain

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Configuration       │ Voltage Gain │ Current Gain │ Power Gain   │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Base (CB)    │ High         │ < 1 (≈ 0.98) │ Medium       │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Emitter (CE) │ High         │ High (≈ β)   │ Very High    │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Collector    │ ≈ 1          │ High (≈ β)   │ Moderate     │
│ (CC)                │              │              │              │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

Formulas:
• Voltage Gain (Av) = V_out / V_in
• Current Gain (Ai) = I_out / I_in
• Power Gain (Ap) = Av × Ai

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Input and Output Impedance

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Configuration       │ Input Z_in   │ Output Z_out │ Phase Shift  │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Base (CB)    │ Low (50-500Ω)│ High (kΩ)    │ 0°           │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Emitter (CE) │ Medium (1-5kΩ)│ Medium (10-50kΩ)│ 180°     │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Common Collector    │ High (100kΩ+)│ Low (10-100Ω)│ 0°           │
│ (CC)                │              │              │              │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 h-Parameters (Hybrid Parameters)

h-parameter model represents small-signal behavior using four parameters.

h-Parameter Equations:
V_1 = h_11 I_1 + h_12 V_2
I_2 = h_21 I_1 + h_22 V_2

┌─────────────────────┬─────────────────────────────────────────────┐
│ Parameter           │ Meaning                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ h_11 (h_ie, h_ib)   │ Input impedance (Ω)                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ h_12 (h_re, h_rb)   │ Reverse voltage gain (dimensionless)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ h_21 (h_fe, h_fb)   │ Forward current gain (β, dimensionless)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ h_22 (h_oe, h_ob)   │ Output admittance (S)                       │
└─────────────────────┴─────────────────────────────────────────────┘

Approximations (simplified model):
h_re ≈ 0, h_oe ≈ 0 (for many calculations)

Then: Av ≈ -h_fe × R_L / h_ie (for CE)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 FIELD EFFECT TRANSISTORS (FET)

FET is a voltage-controlled device (unlike BJT which is current-controlled).

Advantages over BJT:
• Higher input impedance
• Lower noise
• Better thermal stability
• Smaller size (MOSFET)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 JFET (Junction Field Effect Transistor)

Structure:
• N-channel JFET: Current flows through n-type channel between Drain and Source
• P-channel JFET: Current flows through p-type channel

Terminals:
• Gate (G): Controls channel conductivity
• Drain (D): Where current exits
• Source (S): Where current enters

Operation:
• Gate-Source voltage (V_GS) controls channel width
• Negative V_GS reduces channel width (depletion mode)
• JFET is normally ON (conducts at V_GS = 0)

Characteristics:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Region              │ V_GS condition │ I_D behavior                │
├─────────────────────┼────────────────┼─────────────────────────────┤
│ Ohmic (Triode)      │ V_GS > V_P     │ I_D ∝ V_DS                  │
├─────────────────────┼────────────────┼─────────────────────────────┤
│ Saturation (Active) │ V_GS > V_P     │ I_D ≈ constant (pinch-off)  │
├─────────────────────┼────────────────┼─────────────────────────────┤
│ Cutoff              │ V_GS < V_P     │ I_D ≈ 0                     │
└─────────────────────┴────────────────┴─────────────────────────────┘

JFET Symbol (N-channel):
Drain (D)
   │
  ┌┴┐
  │ │
  └┬┘
   │
Gate (G)──┤
   │
  Source (S)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 MOSFET (Metal-Oxide-Semiconductor FET)

Most common FET in digital and analog circuits.

Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Enhancement Mode    │ Normally OFF (conducts when V_GS > V_TH)    │
│ (E-MOSFET)          │ Most common in digital circuits             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Depletion Mode      │ Normally ON (conducts at V_GS = 0)           │
│ (D-MOSFET)          │ Less common                                 │
└─────────────────────┴─────────────────────────────────────────────┘

MOSFET Structure:
• Gate is insulated from channel by thin SiO₂ layer
• Very high input impedance (> 10¹² Ω)
• Four terminals: Gate, Drain, Source, Substrate (Body)

MOSFET Operation (N-channel Enhancement):
┌─────────────────────┬─────────────────────────────────────────────┐
│ Region              │ Condition        │ I_D behavior              │
├─────────────────────┼──────────────────┼───────────────────────────┤
│ Cutoff              │ V_GS < V_TH      │ I_D = 0                   │
├─────────────────────┼──────────────────┼───────────────────────────┤
│ Triode (Linear)     │ V_GS > V_TH,     │ I_D = k[2(V_GS-V_TH)V_DS  │
│                     │ V_DS < V_GS-V_TH │   - V_DS²]                │
├─────────────────────┼──────────────────┼───────────────────────────┤
│ Saturation (Active) │ V_GS > V_TH,     │ I_D = k(V_GS - V_TH)²     │
│                     │ V_DS ≥ V_GS-V_TH │                           │
└─────────────────────┴──────────────────┴───────────────────────────┘

MOSFET Symbol (N-channel Enhancement):
Drain (D)
   │
  ┌┴┐
  │ ├─ Gate (G)
  └┬┘
   │
  Source (S)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison: BJT vs FET

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ BJT                  │ FET (JFET/MOSFET)    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Control Type        │ Current-controlled   │ Voltage-controlled   │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Input Impedance     │ Low (kΩ)             │ Very High (MΩ-GΩ)    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Gain Parameter      │ β = I_C/I_B          │ g_m = I_D/V_GS       │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Noise Level         │ Higher               │ Lower                │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Thermal Stability   │ Poor                 │ Good                 │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Power Consumption   │ Higher               │ Lower                │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Common Applications │ Amplifiers, Switches │ Digital ICs, Op-amps,│
│                     │                      │ Power Electronics    │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Single-stage amplifier: One transistor for signal amplification
• CE: High gain, 180° phase shift (most common)
• CB: High voltage gain, low input impedance
• CC: Unity gain, high input impedance (buffer)
• h-parameters: Small-signal model (h_ie, h_fe, h_oe, h_re)
• JFET: Voltage-controlled, high input impedance, normally ON
• MOSFET: Very high input impedance, enhancement (normally OFF) most common
• MOSFET has Cutoff, Triode, and Saturation regions
• FET advantages: Higher input impedance, lower noise, better thermal stability`,
      contentBn: `📌 সিঙ্গেল স্টেজ এম্পলিফায়ার

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি সিঙ্গেল-স্টেজ এম্পলিফায়ার একটি ট্রানজিস্টর (BJT বা FET) ব্যবহার করে দুর্বল ইনপুট সংকেত বৃদ্ধি করে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ভোল্টেজ ও কারেন্ট গেইন

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ কনফিগারেশন         │ ভোল্টেজ গেইন│ কারেন্ট গেইন │ পাওয়ার গেইন │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন বেস (CB)        │ উচ্চ         │ < ১          │ মাঝারি       │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন এমিটার (CE)     │ উচ্চ         │ উচ্চ (≈ β)   │ খুব উচ্চ      │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন কালেক্টর (CC)   │ ≈ ১          │ উচ্চ (≈ β)   │ মাঝারি       │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ইনপুট ও আউটপুট ইম্পিডেন্স

┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ কনফিগারেশন         │ ইনপুট Z_in   │ আউটপুট Z_out │ ফেজ শিফ্ট    │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন বেস (CB)        │ কম (৫০-৫০০Ω)│ উচ্চ (kΩ)     │ ০°           │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন এমিটার (CE)     │ মাঝারি (১-৫kΩ)│ মাঝারি (১০-৫০kΩ)│ ১৮০°        │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ কমন কালেক্টর (CC)   │ উচ্চ (১০০kΩ+)│ কম (১০-১০০Ω) │ ০°           │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ফিল্ড ইফেক্ট ট্রানজিস্টর (FET)

FET একটি ভোল্টেজ-নিয়ন্ত্রিত ডিভাইস (BJT কারেন্ট-নিয়ন্ত্রিত)।

FET-এর সুবিধা:
• উচ্চ ইনপুট ইম্পিডেন্স
• কম নয়েজ
• ভালো তাপীয় স্থিতিশীলতা
• ছোট আকার (MOSFET)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 JFET (জাংশন ফিল্ড ইফেক্ট ট্রানজিস্টর)

JFET N-চ্যানেল: ড্রেন ও সোর্সের মধ্যে N-টাইপ চ্যানেল দিয়ে প্রবাহ
টার্মিনাল: গেট (G), ড্রেন (D), সোর্স (S)

JFET সাধারণত ON থাকে (V_GS = 0-এ প্রবাহিত হয়)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 MOSFET (মেটাল-অক্সাইড-সেমিকন্ডাক্টর FET)

সর্বাধিক সাধারণ FET (ডিজিটাল ও অ্যানালগ সার্কিটে)।

প্রকার:
• এনহান্সমেন্ট মোড (E-MOSFET): সাধারণত OFF (V_GS > V_TH হলে ON)
• ডিপ্লিশন মোড (D-MOSFET): সাধারণত ON

MOSFET সুবিধা:
• অতি উচ্চ ইনপুট ইম্পিডেন্স (> ১০¹² Ω)
• কম পাওয়ার খরচ
• ডিজিটাল IC-তে ব্যাপক ব্যবহার

✅ সারাংশ
• সিঙ্গেল-স্টেজ এম্পলিফায়ার: একটি ট্রানজিস্টর দিয়ে সংকেত বৃদ্ধি
• CE: উচ্চ গেইন, ১৮০° ফেজ শিফট (সর্বাধিক সাধারণ)
• CB: উচ্চ ভোল্টেজ গেইন, কম ইনপুট ইম্পিডেন্স
• CC: ইউনিটি গেইন, উচ্চ ইনপুট ইম্পিডেন্স (বাফার)
• h-প্যারামিটার: স্মল-সিগন্যাল মডেল
• FET: ভোল্টেজ-নিয়ন্ত্রিত, উচ্চ ইনপুট ইম্পিডেন্স
• MOSFET: অতি উচ্চ ইনপুট ইম্পিডেন্স, এনহান্সমেন্ট (সাধারণত OFF) সর্বাধিক সাধারণ
• FET সুবিধা: উচ্চ ইনপুট ইম্পিডেন্স, কম নয়েজ, ভালো তাপীয় স্থিতিশীলতা`,
      takeaways: [
        "CE: High gain, 180° phase shift (most common amplifier)",
        "CB: High voltage gain, low input impedance",
        "CC: Unity gain, high input impedance (buffer)",
        "h-parameters: Small-signal model (h_ie, h_fe, h_oe, h_re)",
        "FET: Voltage-controlled, high input impedance",
        "MOSFET: Very high input impedance, enhancement mode (normally OFF)",
        "JFET: Normally ON, depletion mode operation",
        "FET advantages: Higher Z_in, lower noise, better thermal stability"
      ],
      takeawaysBn: [
        "CE: উচ্চ গেইন, ১৮০° ফেজ শিফট (সর্বাধিক সাধারণ এম্পলিফায়ার)",
        "CB: উচ্চ ভোল্টেজ গেইন, কম ইনপুট ইম্পিডেন্স",
        "CC: ইউনিটি গেইন, উচ্চ ইনপুট ইম্পিডেন্স (বাফার)",
        "h-প্যারামিটার: স্মল-সিগন্যাল মডেল (h_ie, h_fe, h_oe, h_re)",
        "FET: ভোল্টেজ-নিয়ন্ত্রিত, উচ্চ ইনপুট ইম্পিডেন্স",
        "MOSFET: অতি উচ্চ ইনপুট ইম্পিডেন্স, এনহান্সমেন্ট মোড (সাধারণত OFF)",
        "JFET: সাধারণত ON, ডিপ্লিশন মোড অপারেশন",
        "FET সুবিধা: উচ্চ Z_in, কম নয়েজ, ভালো তাপীয় স্থিতিশীলতা"
      ],
      level: "Advanced"
    }
  ]
}

export const module5 = m5