import type { Module } from '../../types'

const m8: Module = {
  title: "8. Communication Theory",
  titleBn: "৮. যোগাযোগ তত্ত্ব",
  level: "Intermediate",
  lessons: [
    {
      id: "ct1",
      title: "Spectral Analysis: Fourier Series, Sampling, Power Spectrum, Fourier Transform, Convolution, Parseval's Theorem",
      titleBn: "স্পেকট্রাল অ্যানালাইসিস: ফোরিয়ার সিরিজ, স্যাম্পলিং, পাওয়ার স্পেকট্রাম, ফোরিয়ার ট্রান্সফর্ম, কনভোলিউশন, পার্সিভ্যালের উপপাদ্য",
      content: `📌 SPECTRAL ANALYSIS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Spectral analysis studies signals in the frequency domain rather than time domain.

Applications: Communication systems, audio processing, image processing, vibration analysis.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. FOURIER SERIES

Definition: Represents periodic signals as a sum of sines and cosines (harmonics).

Formula:
x(t) = a₀ + Σ_{n=1}^{∞} [a_n cos(nω₀t) + b_n sin(nω₀t)]

Where:
• a₀ = DC component (average value)
• a_n, b_n = Fourier coefficients
• ω₀ = 2π/T = fundamental angular frequency

Key Points:
• Converts time-domain signals to frequency components
• Only works for periodic signals
• Shows which frequencies are present in the signal

Example: Square wave contains odd harmonics (1f, 3f, 5f, ...)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. SAMPLING FUNCTION

Definition: Converting continuous-time signal to discrete-time signal.

Nyquist Sampling Theorem:
f_s ≥ 2f_max

Where:
• f_s = sampling frequency
• f_max = maximum frequency component in signal

Key Points:
• Ensures no information is lost
• Avoids aliasing (false frequency components)
• Minimum sampling rate = Nyquist rate (2f_max)

Aliasing Example:
If f_s < 2f_max, high frequencies "fold back" and appear as lower frequencies.

Sampling Process:
Analog Signal → Sampler → Discrete Samples → Quantizer → Digital Signal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. POWER SPECTRUM

Definition: Represents distribution of signal power over frequency.

Formula:
P(f) = |X(f)|²

Where X(f) is the Fourier Transform of signal x(t)

Key Points:
• Shows how signal energy/power is distributed across frequencies
• Used in noise analysis and filter design
• For periodic signals: Power Spectral Density (PSD)

Types:
• Energy Spectral Density (for energy signals)
• Power Spectral Density (for power signals)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 4. FOURIER TRANSFORM (FT)

Definition: Converts time-domain signal x(t) into frequency-domain representation X(f).

Fourier Transform (Analysis Equation):
X(f) = ∫_{-∞}^{∞} x(t) e^{-j2πft} dt

Inverse Fourier Transform (Synthesis Equation):
x(t) = ∫_{-∞}^{∞} X(f) e^{j2πft} df

Properties of Fourier Transform:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Mathematical Expression                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Linearity           │ a·x₁(t) + b·x₂(t) ↔ a·X₁(f) + b·X₂(f)     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Time Shifting       │ x(t - t₀) ↔ X(f) e^{-j2πft₀}              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Frequency Shifting  │ x(t) e^{j2πf₀t} ↔ X(f - f₀)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Time Scaling        │ x(at) ↔ (1/|a|) X(f/a)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Differentiation     │ dx(t)/dt ↔ j2πf X(f)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Integration         │ ∫x(t)dt ↔ X(f)/(j2πf) + (X(0)/2)δ(f)       │
└─────────────────────┴─────────────────────────────────────────────┘

Discrete Fourier Transform (DFT) for digital signals:
X[k] = Σ_{n=0}^{N-1} x[n] e^{-j2πkn/N}

Fast Fourier Transform (FFT): Efficient algorithm for DFT computation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 5. CONVOLUTION

Definition: Mathematical operation that combines input signal and system impulse response.

Time Domain Convolution:
y(t) = x(t) * h(t) = ∫_{-∞}^{∞} x(τ) h(t-τ) dτ

Where:
• x(t) = input signal
• h(t) = system impulse response
• y(t) = output signal

Frequency Domain Relation:
Convolution in time domain ↔ Multiplication in frequency domain
Y(f) = X(f) × H(f)

Key Points:
• Models how linear systems respond to inputs
• Used in filtering, signal processing, system analysis
• Commutative: x(t) * h(t) = h(t) * x(t)
• Associative: (x * h₁) * h₂ = x * (h₁ * h₂)
• Distributive: x * (h₁ + h₂) = x * h₁ + x * h₂

Convolution Visualization:
Input:    x[0] x[1] x[2] ...
Impulse:  h[0] h[1] h[2] ...
Output:   y[n] = Σ_{k} x[k] h[n-k]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 6. PARSEVAL'S THEOREM

Definition: Relates total energy in time domain to total energy in frequency domain.

Parseval's Theorem (for continuous signals):
∫_{-∞}^{∞} |x(t)|² dt = ∫_{-∞}^{∞} |X(f)|² df

Parseval's Theorem (for discrete signals):
Σ_{n=0}^{N-1} |x[n]|² = (1/N) Σ_{k=0}^{N-1} |X[k]|²

Key Points:
• Ensures energy conservation between domains
• Total energy computed in time = total energy computed in frequency
• Used in power calculations and signal analysis
• Rayleigh's theorem: Energy of signal is preserved under Fourier Transform

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SUMMARY TABLE

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Idea                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fourier Series      │ Periodic signals → sum of sinusoids         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Sampling            │ Continuous → discrete; Nyquist: f_s ≥ 2f_max│
├─────────────────────┼─────────────────────────────────────────────┤
│ Power Spectrum      │ P(f) = |X(f)|², power distribution          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fourier Transform   │ Time ↔ Frequency domain conversion          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Convolution         │ y(t) = x(t) * h(t); time ↔ freq multiplication│
├─────────────────────┼─────────────────────────────────────────────┤
│ Parseval's Theorem  │ Time energy = Frequency energy              │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Fourier Series: Periodic signals → frequency components
• Sampling: Nyquist theorem prevents aliasing (f_s ≥ 2f_max)
• Power Spectrum: P(f) = |X(f)|² shows power distribution
• Fourier Transform: Converts time ↔ frequency domains
• Convolution: Time domain convolution = frequency domain multiplication
• Parseval's Theorem: Energy conserved between time and frequency domains`,
      contentBn: `📌 স্পেকট্রাল অ্যানালাইসিস

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: স্পেকট্রাল অ্যানালাইসিস সময় ডোমেইনের পরিবর্তে ফ্রিকোয়েন্সি ডোমেইনে সংকেত অধ্যয়ন করে।

প্রয়োগ: যোগাযোগ ব্যবস্থা, অডিও প্রসেসিং, ইমেজ প্রসেসিং, কম্পন বিশ্লেষণ।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. ফোরিয়ার সিরিজ

সংজ্ঞা: পিরিওডিক সংকেতকে সাইন ও কোসাইন এর যোগফল হিসেবে উপস্থাপন করে।

সূত্র:
x(t) = a₀ + Σ_{n=1}^{∞} [a_n cos(nω₀t) + b_n sin(nω₀t)]

মূল বিষয়:
• সময় ডোমেইন সংকেতকে ফ্রিকোয়েন্সি উপাদানে রূপান্তর করে
• শুধুমাত্র পিরিওডিক সংকেতের জন্য কাজ করে
• সংকেতে কোন ফ্রিকোয়েন্সি আছে তা দেখায়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. স্যাম্পলিং ফাংশন

সংজ্ঞা: ক্রমাগত-সময় সংকেতকে বিচ্ছিন্ন-সময় সংকেতে রূপান্তর।

নাইকুইস্ট স্যাম্পলিং উপপাদ্য:
f_s ≥ 2f_max

যেখানে:
• f_s = স্যাম্পলিং ফ্রিকোয়েন্সি
• f_max = সংকেতের সর্বোচ্চ ফ্রিকোয়েন্সি উপাদান

মূল বিষয়:
• কোনো তথ্য হারায় না তা নিশ্চিত করে
• অ্যালিয়াসিং (ভুয়া ফ্রিকোয়েন্সি উপাদান) এড়ায়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৩. পাওয়ার স্পেকট্রাম

সংজ্ঞা: ফ্রিকোয়েন্সির উপর সংকেত শক্তির বণ্টন উপস্থাপন করে।

সূত্র:
P(f) = |X(f)|²

যেখানে X(f) হল সংকেত x(t)-এর ফোরিয়ার ট্রান্সফর্ম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৪. ফোরিয়ার ট্রান্সফর্ম (FT)

সংজ্ঞা: সময়-ডোমেইন সংকেত x(t)-কে ফ্রিকোয়েন্সি-ডোমেইন উপস্থাপনায় রূপান্তর করে।

ফোরিয়ার ট্রান্সফর্ম:
X(f) = ∫_{-∞}^{∞} x(t) e^{-j2πft} dt

ইনভার্স ফোরিয়ার ট্রান্সফর্ম:
x(t) = ∫_{-∞}^{∞} X(f) e^{j2πft} df

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৫. কনভোলিউশন

সংজ্ঞা: ইনপুট সংকেত ও সিস্টেম ইম্পালস রেসপন্স একত্রিত করার গাণিতিক অপারেশন।

সময় ডোমেইন কনভোলিউশন:
y(t) = x(t) * h(t) = ∫_{-∞}^{∞} x(τ) h(t-τ) dτ

ফ্রিকোয়েন্সি ডোমেইন সম্পর্ক:
সময় ডোমেইনে কনভোলিউশন ↔ ফ্রিকোয়েন্সি ডোমেইনে গুণ
Y(f) = X(f) × H(f)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৬. পার্সিভ্যালের উপপাদ্য

সংজ্ঞা: সময় ডোমেইনের মোট শক্তিকে ফ্রিকোয়েন্সি ডোমেইনের মোট শক্তির সাথে সম্পর্কিত করে।

পার্সিভ্যালের উপপাদ্য (ক্রমাগত সংকেত):
∫_{-∞}^{∞} |x(t)|² dt = ∫_{-∞}^{∞} |X(f)|² df

মূল বিষয়:
• ডোমেইনের মধ্যে শক্তি সংরক্ষণ নিশ্চিত করে
• সময়ে গণনা করা মোট শক্তি = ফ্রিকোয়েন্সিতে গণনা করা মোট শক্তি

✅ সারাংশ
• ফোরিয়ার সিরিজ: পিরিওডিক সংকেত → ফ্রিকোয়েন্সি উপাদান
• স্যাম্পলিং: নাইকুইস্ট উপপাদ্য অ্যালিয়াসিং প্রতিরোধ করে (f_s ≥ 2f_max)
• পাওয়ার স্পেকট্রাম: P(f) = |X(f)|² শক্তি বণ্টন দেখায়
• ফোরিয়ার ট্রান্সফর্ম: সময় ↔ ফ্রিকোয়েন্সি ডোমেইন রূপান্তর
• কনভোলিউশন: সময় ডোমেইন কনভোলিউশন = ফ্রিকোয়েন্সি ডোমেইন গুণ
• পার্সিভ্যালের উপপাদ্য: সময় ও ফ্রিকোয়েন্সি ডোমেইনে শক্তি সংরক্ষিত`,
      takeaways: [
        "Fourier Series: Periodic signals → sum of sinusoids",
        "Sampling: Nyquist theorem (f_s ≥ 2f_max) prevents aliasing",
        "Power Spectrum: P(f) = |X(f)|² shows power distribution",
        "Fourier Transform: Converts time ↔ frequency domains",
        "Convolution: Time domain convolution = frequency domain multiplication",
        "Parseval's Theorem: Energy conserved between time and frequency domains"
      ],
      takeawaysBn: [
        "ফোরিয়ার সিরিজ: পিরিওডিক সংকেত → সাইনাসয়েডের যোগফল",
        "স্যাম্পলিং: নাইকুইস্ট উপপাদ্য (f_s ≥ 2f_max) অ্যালিয়াসিং প্রতিরোধ করে",
        "পাওয়ার স্পেকট্রাম: P(f) = |X(f)|² শক্তি বণ্টন দেখায়",
        "ফোরিয়ার ট্রান্সফর্ম: সময় ↔ ফ্রিকোয়েন্সি ডোমেইন রূপান্তর করে",
        "কনভোলিউশন: সময় ডোমেইন কনভোলিউশন = ফ্রিকোয়েন্সি ডোমেইন গুণ",
        "পার্সিভ্যালের উপপাদ্য: সময় ও ফ্রিকোয়েন্সি ডোমেইনে শক্তি সংরক্ষিত"
      ],
      level: "Advanced"
    },
    {
      id: "ct2",
      title: "Information Theory: Entropy, Information Rate, Shannon's Theorem, Channel Capacity",
      titleBn: "তথ্য তত্ত্ব: এনট্রপি, তথ্য হার, শ্যাননের উপপাদ্য, চ্যানেল ক্যাপাসিটি",
      content: `📌 INFORMATION THEORY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Information theory quantifies information in messages and analyzes communication efficiency.

Developed by: Claude Shannon (1948)

Applications: Data compression, digital communication, cryptography, data storage.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. ENTROPY

Definition: Measure of uncertainty or information content in a source.

For a discrete source with symbols x_i and probabilities p_i:

H(X) = - Σ_i p_i log₂ p_i  [bits/symbol]

Properties:
• 0 ≤ H(X) ≤ log₂(N) where N = number of symbols
• H = 0 when one symbol has probability 1 (no uncertainty)
• H = log₂(N) when all symbols equally likely (maximum uncertainty)

Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Source              │ Probabilities        │ Entropy (bits/symbol)│
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Fair coin           │ P(H)=0.5, P(T)=0.5   │ 1.0                  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Biased coin         │ P(H)=0.9, P(T)=0.1   │ 0.47                 │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ English text        │ Letter probabilities │ ≈ 4.0                │
└─────────────────────┴──────────────────────┴──────────────────────┘

Interpretation:
• High entropy: More uncertainty, more information per symbol
• Low entropy: Predictable data, less information

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. INFORMATION RATE

Definition: Average information produced per unit time by a source.

Formula:
R = H(X) × r  [bits/sec]

Where:
• H(X) = entropy (bits/symbol)
• r = symbol rate (symbols/sec)

Example:
If H(X) = 2 bits/symbol and r = 1000 symbols/sec:
R = 2 × 1000 = 2000 bits/sec

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. SHANNON'S THEOREM (Noisy Channel Coding Theorem)

Definition: Maximum rate of error-free communication over a noisy channel is the channel capacity (C).

Statement:
There exists a coding scheme that can achieve error-free transmission at any rate R < C.

R ≤ C

Where:
• R = information rate (bits/sec)
• C = channel capacity (bits/sec)

Implications:
• If R > C → error-free communication impossible
• If R < C → possible with proper coding
• Theoretical limit, not practical implementation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 4. CHANNEL CAPACITY

Definition: Maximum data rate at which information can be transmitted without error.

Shannon-Hartley Theorem (for AWGN channel):
C = B log₂ (1 + SNR)  [bits/sec]

Where:
• B = channel bandwidth (Hz)
• SNR = Signal-to-Noise Ratio (linear, not dB)

SNR in dB: SNR_dB = 10 log₁₀(SNR_linear)

Examples:
┌─────────────────────┬──────────────┬──────────┬─────────────────┐
│ Bandwidth (B)       │ SNR          │ C = B log₂(1+SNR)           │
├─────────────────────┼──────────────┼─────────────────────────────┤
│ 1 MHz               │ 10 (10 dB)   │ 1 × log₂(11) ≈ 3.46 Mbps    │
├─────────────────────┼──────────────┼─────────────────────────────┤
│ 1 MHz               │ 100 (20 dB)  │ 1 × log₂(101) ≈ 6.66 Mbps   │
├─────────────────────┼──────────────┼─────────────────────────────┤
│ 10 MHz              │ 10 (10 dB)   │ 10 × log₂(11) ≈ 34.6 Mbps   │
└─────────────────────┴──────────────┴─────────────────────────────┘

Key Points:
• Higher bandwidth (B) → higher capacity (linear)
• Higher SNR → higher capacity (logarithmic)
• Capacity approaches infinity as SNR → ∞
• Real systems operate below theoretical capacity

Channel Capacity Diagram:
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Capacity (C)                                                  │
│        ↑                                                        │
│        │                                   C = B log₂(1+SNR)    │
│        │                              ┌─────────┐               │
│        │                          ┌───┘         │               │
│        │                      ┌───┘             │               │
│        │                  ┌───┘                 │               │
│        │              ┌───┘                     │               │
│        │          ┌───┘                         │               │
│        │      ┌───┘                             │               │
│        │  ┌───┘                                 │               │
│        │──┘                                     │               │
│        └──────────────────────────────────────────→ SNR         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SUMMARY TABLE

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Formula & Key Idea                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Entropy (H)         │ H = -Σ p_i log₂ p_i [bits/symbol]          │
│                     │ Measure of uncertainty/information         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Information Rate (R)│ R = H × r [bits/sec]                       │
│                     │ Bits transmitted per second                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Shannon's Theorem   │ R ≤ C (error-free communication possible)  │
│                     │ Upper limit for reliable transmission      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Channel Capacity (C)│ C = B log₂(1 + SNR) [bits/sec]             │
│                     │ Maximum achievable data rate               │
└─────────────────────┴─────────────────────────────────────────────┘

Communication System Block Diagram:
┌────────┐    ┌──────────┐    ┌─────────┐    ┌──────────┐    ┌────────┐
│ Source │ →  │ Encoder  │ →  │Channel │ →  │ Decoder  │ →  │Sink    │
└────────┘    └──────────┘    └─────────┘    └──────────┘    └────────┘
                  ↑               ↑                ↑
                  │               │                │
              Entropy H        Capacity C      Information Rate R

✅ SUMMARY
• Entropy (H): Measures uncertainty; H = -Σ p_i log₂ p_i [bits/symbol]
• Information Rate (R): R = H × r [bits/sec], average bits per second
• Shannon's Theorem: Error-free communication possible iff R ≤ C
• Channel Capacity (C): C = B log₂(1 + SNR) [bits/sec]
• Higher bandwidth and higher SNR increase channel capacity`,
      contentBn: `📌 তথ্য তত্ত্ব

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: তথ্য তত্ত্ব বার্তাগুলিতে তথ্য পরিমাপ করে এবং যোগাযোগ দক্ষতা বিশ্লেষণ করে।

উন্নয়নকারী: ক্লদ শ্যানন (১৯৪৮)

প্রয়োগ: ডেটা কম্প্রেশন, ডিজিটাল যোগাযোগ, ক্রিপ্টোগ্রাফি, ডেটা স্টোরেজ।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. এনট্রপি

সংজ্ঞা: একটি উৎসের অনিশ্চয়তা বা তথ্য সামগ্রীর পরিমাপ।

একটি বিচ্ছিন্ন উৎসের জন্য প্রতীক x_i এবং সম্ভাবনা p_i সহ:

H(X) = - Σ_i p_i log₂ p_i  [বিট/প্রতীক]

বৈশিষ্ট্য:
• 0 ≤ H(X) ≤ log₂(N) যেখানে N = প্রতীকের সংখ্যা
• H = 0 যখন একটি প্রতীকের সম্ভাবনা 1 (কোনো অনিশ্চয়তা নেই)
• H = log₂(N) যখন সব প্রতীক সমান সম্ভাব্য (সর্বোচ্চ অনিশ্চয়তা)

উদাহরণ:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ উৎস                 │ সম্ভাবনা             │ এনট্রপি (বিট/প্রতীক)│
├─────────────────────┼──────────────────────┼──────────────────────┤
│ সুষম মুদ্রা         │ P(H)=0.5, P(T)=0.5   │ 1.0                  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ পক্ষপাতদুষ্ট মুদ্রা │ P(H)=0.9, P(T)=0.1   │ 0.47                 │
└─────────────────────┴──────────────────────┴──────────────────────┘

ব্যাখ্যা:
• উচ্চ এনট্রপি: বেশি অনিশ্চয়তা, প্রতি প্রতীকে বেশি তথ্য
• নিম্ন এনট্রপি: পূর্বাভাসযোগ্য ডেটা, কম তথ্য

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. তথ্য হার

সংজ্ঞা: একটি উৎস দ্বারা প্রতি একক সময়ে উৎপাদিত গড় তথ্য।

সূত্র:
R = H(X) × r  [বিট/সেকেন্ড]

যেখানে:
• H(X) = এনট্রপি (বিট/প্রতীক)
• r = প্রতীক হার (প্রতীক/সেকেন্ড)

উদাহরণ:
যদি H(X) = ২ বিট/প্রতীক এবং r = ১০০০ প্রতীক/সেকেন্ড:
R = ২ × ১০০০ = ২০০০ বিট/সেকেন্ড

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৩. শ্যাননের উপপাদ্য (গোলমাল চ্যানেল কোডিং উপপাদ্য)

সংজ্ঞা: একটি গোলমাল চ্যানেলে ত্রুটিমুক্ত যোগাযোগের সর্বোচ্চ হার হল চ্যানেল ক্যাপাসিটি (C)।

বিবৃতি:
R < C হলে ত্রুটিমুক্ত সংক্রমণ সম্ভব করে এমন একটি কোডিং স্কিম বিদ্যমান।

R ≤ C

যেখানে:
• R = তথ্য হার (বিট/সেকেন্ড)
• C = চ্যানেল ক্যাপাসিটি (বিট/সেকেন্ড)

প্রভাব:
• R > C হলে → ত্রুটিমুক্ত যোগাযোগ অসম্ভব
• R < C হলে → উপযুক্ত কোডিং দিয়ে সম্ভব

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৪. চ্যানেল ক্যাপাসিটি

সংজ্ঞা: ত্রুটি ছাড়া তথ্য প্রেরণ করা যায় এমন সর্বোচ্চ ডেটা হার।

শ্যানন-হার্টলি উপপাদ্য (AWGN চ্যানেলের জন্য):
C = B log₂ (1 + SNR)  [বিট/সেকেন্ড]

যেখানে:
• B = চ্যানেল ব্যান্ডউইথ (Hz)
• SNR = সিগনাল-টু-নয়েজ রেশিও (রৈখিক, dB নয়)

dB-তে SNR: SNR_dB = 10 log₁₀(SNR_রৈখিক)

মূল বিষয়:
• উচ্চতর ব্যান্ডউইথ (B) → উচ্চতর ক্যাপাসিটি (রৈখিক)
• উচ্চতর SNR → উচ্চতর ক্যাপাসিটি (লগারিদমিক)

✅ সারাংশ
• এনট্রপি (H): অনিশ্চয়তা পরিমাপ করে; H = -Σ p_i log₂ p_i [বিট/প্রতীক]
• তথ্য হার (R): R = H × r [বিট/সেকেন্ড]
• শ্যাননের উপপাদ্য: ত্রুটিমুক্ত যোগাযোগ সম্ভব যদি R ≤ C
• চ্যানেল ক্যাপাসিটি (C): C = B log₂(1 + SNR) [বিট/সেকেন্ড]
• উচ্চতর ব্যান্ডউইথ ও উচ্চতর SNR চ্যানেল ক্যাপাসিটি বাড়ায়`,
      takeaways: [
        "Entropy (H): Measures uncertainty; H = -Σ p_i log₂ p_i [bits/symbol]",
        "Information Rate (R): R = H × r [bits/sec]",
        "Shannon's Theorem: Error-free communication possible iff R ≤ C",
        "Channel Capacity (C): C = B log₂(1 + SNR) [bits/sec]",
        "Higher bandwidth and higher SNR increase channel capacity"
      ],
      takeawaysBn: [
        "এনট্রপি (H): অনিশ্চয়তা পরিমাপ করে; H = -Σ p_i log₂ p_i [বিট/প্রতীক]",
        "তথ্য হার (R): R = H × r [বিট/সেকেন্ড]",
        "শ্যাননের উপপাদ্য: ত্রুটিমুক্ত যোগাযোগ সম্ভব যদি R ≤ C",
        "চ্যানেল ক্যাপাসিটি (C): C = B log₂(1 + SNR) [বিট/সেকেন্ড]",
        "উচ্চতর ব্যান্ডউইথ ও উচ্চতর SNR চ্যানেল ক্যাপাসিটি বাড়ায়"
      ],
      level: "Advanced"
    },
    {
      id: "ct3",
      title: "Analog & Digital Modulation, Pulse Signals, Multiplexing & Multiple Access",
      titleBn: "অ্যানালগ ও ডিজিটাল মডুলেশন, পালস সংকেত, মাল্টিপ্লেক্সিং ও মাল্টিপল অ্যাক্সেস",
      content: `📌 ANALOG COMMUNICATION SYSTEM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Transmission of continuous-time signals (voice, audio, video) over a communication channel.

Purpose: Convey information from source to destination efficiently and accurately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. ANALOG MODULATION

Modulation: Process of imposing a low-frequency message signal onto a high-frequency carrier.

A) Amplitude Modulation (AM)
• Carrier amplitude varies according to message signal
• Frequency and phase remain constant
• Formula: s(t) = [A_c + m(t)] × cos(2πf_c t)

Types of AM:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ DSB-AM              │ Double-sideband (both sidebands + carrier)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ DSB-SC              │ Double-sideband suppressed carrier          │
├─────────────────────┼─────────────────────────────────────────────┤
│ SSB-AM              │ Single-sideband (efficient, one sideband)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ VSB-AM              │ Vestigial sideband (TV broadcasting)        │
└─────────────────────┴─────────────────────────────────────────────┘

Applications: AM radio broadcasting

B) Frequency Modulation (FM)
• Carrier frequency varies according to message amplitude
• Amplitude remains constant
• Formula: s(t) = A_c × cos(2πf_c t + k_f ∫ m(t) dt)

Advantages: Less susceptible to noise than AM
Applications: FM radio, audio transmission

C) Phase Modulation (PM)
• Carrier phase varies with message signal
• Formula: s(t) = A_c × cos(2πf_c t + k_p m(t))

Applications: Some communication and digital transmission systems

Analog Modulation Comparison:
┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Feature             │ AM           │ FM           │ PM           │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Parameter varied    │ Amplitude    │ Frequency    │ Phase        │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Bandwidth           │ Narrow       │ Wide         │ Wide         │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Noise immunity      │ Low          │ High         │ High         │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Applications        │ AM radio     │ FM radio     │ Digital mod  │
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. MODULATION CIRCUITS AND DETECTORS

Modulation Circuits:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Modulation Type     │ Typical Circuit                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ AM                  │ Balanced modulator, transistor-based AM mod │
├─────────────────────┼─────────────────────────────────────────────┤
│ FM                  │ Varactor diode FM modulator, VCO            │
├─────────────────────┼─────────────────────────────────────────────┤
│ PM                  │ Phase modulator using VCO or mixer          │
└─────────────────────┴─────────────────────────────────────────────┘

Detectors (Demodulation):
┌─────────────────────┬─────────────────────────────────────────────┐
│ Modulation Type     │ Detector Circuit                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ AM                  │ Envelope detector (rectifier + RC filter)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ FM                  │ Frequency discriminator, slope detector, PLL│
├─────────────────────┼─────────────────────────────────────────────┤
│ PM                  │ Phase-locked loop (PLL)                     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 DIGITAL MODULATION

Definition: Process of transmitting digital data by modifying a carrier signal according to binary information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. DIGITAL MODULATION SCHEMES

A) Amplitude Shift Keying (ASK)
• Carrier amplitude changes with binary data (0 or 1)
• Simple but sensitive to noise
• Applications: Low-speed data, optical communication

B) Frequency Shift Keying (FSK)
• Carrier frequency changes with binary data
• More noise-resistant than ASK
• Types: BFSK (2 frequencies), MFSK (multiple frequencies)
• Applications: Modems, wireless communication

C) Phase Shift Keying (PSK)
• Carrier phase changes with binary data
• Types:
  - BPSK: 0° or 180° phase shift (1 bit/symbol)
  - QPSK: 4 phase shifts (2 bits/symbol)
  - 8-PSK, 16-PSK: Higher-order (3,4 bits/symbol)
• Applications: Satellite, Wi-Fi, digital TV

D) Quadrature Amplitude Modulation (QAM)
• Combines ASK and PSK
• Multiple bits per symbol (high spectral efficiency)
• Types: 16-QAM (4 bits), 64-QAM (6 bits), 256-QAM (8 bits)
• Applications: DSL, cable modems, 4G/5G, Wi-Fi

E) Other Advanced Modulation
• MSK (Minimum Shift Keying): Continuous phase FSK
• OFDM (Orthogonal Frequency Division Multiplexing): Multi-carrier
• Applications: LTE, Wi-Fi 5/6, 5G, DVB

Digital Modulation Comparison:
┌─────────────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ Modulation          │ ASK          │ FSK          │ PSK          │ QAM          │
├─────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Parameter varied    │ Amplitude    │ Frequency    │ Phase        │ Amp + Phase  │
├─────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Bits per symbol     │ 1            │ 1            │ 1-4          │ 2-16+        │
├─────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Noise immunity      │ Low          │ Moderate     │ High         │ Moderate     │
├─────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Spectral efficiency │ Low          │ Low          │ Moderate     │ High         │
└─────────────────────┴──────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 PULSE AND DIGITAL SIGNALS

🔷 4. Pulse Amplitude Modulation (PAM)

Definition: Analog signal sampled at regular intervals; pulse amplitude proportional to signal.

Characteristics:
• Simple but susceptible to noise
• Basis for PCM and other digital schemes
• Applications: Baseband transmission, A/D conversion

PAM Waveform:
Analog:    ┌─┐  ┌─┐  ┌─┐
          │ │  │ │  │ │
        ──┘ └──┘ └──┘ └──
PAM:     ●  ●  ●  ●  ●  ●
        ↑  ↑  ↑  ↑  ↑  ↑
(Samples at discrete times)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 5. Pulse Code Modulation (PCM)

Definition: Analog signal → sampled → quantized → converted to binary code.

PCM Steps:
1. Sampling: At Nyquist rate (f_s ≥ 2f_max)
2. Quantization: Round samples to nearest level
3. Encoding: Convert quantized value to binary code

PCM Block Diagram:
┌────────┐   ┌────────┐   ┌────────────┐   ┌────────┐
│Analog  │ → │Sampler │ → │ Quantizer  │ → │Encoder │ → Digital
│Signal  │   │        │   │            │   │        │   Output
└────────┘   └────────┘   └────────────┘   └────────┘

Advantages:
• Noise-resistant (digital transmission)
• Regenerative repeaters (no cumulative noise)
• Can be encrypted
• Applications: Telephony (PSTN), CDs, digital TV

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 6. Delta Modulation (DM)

Definition: Transmit only the difference (step) between successive samples.

Characteristics:
• Uses 1-bit code per sample (up/down)
• Simple implementation
• Drawbacks: Slope overload, granular noise

DM Block Diagram:
┌────────┐   ┌──────────────┐   ┌─────┐
│Analog  │ → │ Comparator   │ → │ 1-bit│ → Digital
│Signal  │   │ (x - x̂)      │   │Output│
└────────┘   └──────┬───────┘   └─────┘
                    │
            ┌───────▼───────┐
            │  Integrator   │
            │  (Step up/down)│
            └───────────────┘

Applications: Voice transmission, low-bit-rate systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 7. Adaptive Delta Modulation (ADM / ADPCM)

Definition: Delta modulation with adaptive step size that changes with signal slope.

Advantages over DM:
• Reduces slope overload (for steep signals)
• Reduces granular noise (for flat signals)
• More efficient for wide dynamic range signals

Step size adaptation:
• Large steps for rapidly changing signals
• Small steps for slowly varying signals

Applications: Mobile telephony, VoIP, speech coding

Pulse Modulation Comparison:
┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Modulation          │ Key Idea     │ Bit Rate     │ Applications │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ PAM                 │ Amplitude    │ N/A (analog) │ Baseband     │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ PCM                 │ Quantized    │ 64 kbps      │ Telephony,   │
│                     │ binary codes │ (typical)    │ digital audio│
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ DM                  │ 1-bit diff   │ 16-32 kbps   │ Voice,       │
│                     │              │              │ low-bit-rate │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ ADM/ADPCM           │ Adaptive     │ 32 kbps      │ Mobile       │
│                     │ step size    │              │ telephony,VoIP│
└─────────────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📡 MULTIPLEXING & MULTIPLE ACCESS

Definition:
• Multiplexing: Combine multiple signals for transmission over a single channel
• Multiple Access: Allow multiple users to share the same communication medium

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 8. Frequency-Division Multiplexing (FDM)

Concept: Each signal assigned a unique frequency band within the channel.

Features:
• Signals transmitted simultaneously
• Requires guard bands to avoid interference
• Applications: Radio broadcasting, cable TV

FDM Diagram:
Channel Bandwidth
├─────┬─────┬─────┬─────┤
│CH1  │CH2  │CH3  │CH4  │
│f₁   │f₂   │f₃   │f₄   │
└─────┴─────┴─────┴─────┘
     ↑ Guard bands ↑

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 9. Time-Division Multiplexing (TDM)

Concept: Each signal assigned a time slot in a periodic sequence.

Features:
• Signals transmitted one after another rapidly
• Types: Synchronous TDM, Asynchronous (Statistical) TDM
• Applications: Digital telephony (T1/E1), ISDN

TDM Diagram:
Time →
┌───┬───┬───┬───┬───┬───┬───┬───┐
│CH1│CH2│CH3│CH4│CH1│CH2│CH3│CH4│...
└───┴───┴───┴───┴───┴───┴───┴───┘
  Frame 1        Frame 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 10. Frequency-Division Multiple Access (FDMA)

Concept: Each user assigned a different frequency band.

Features:
• Simultaneous transmission possible
• Used in analog cellular systems
• Applications: AMPS (1G cellular)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 11. Time-Division Multiple Access (TDMA)

Concept: Each user assigned a different time slot on same frequency.

Features:
• Efficient for digital systems
• Requires synchronization
• Applications: GSM (2G cellular)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 12. Code-Division Multiple Access (CDMA)

Concept: All users share same frequency and time, use unique spreading codes.

Features:
• Signals separated using correlation with user's code
• High capacity, robust to interference
• Soft handoff capability
• Applications: 3G cellular (IS-95, UMTS), GPS

CDMA Principle:
User 1: Data × Code1 → Transmit
User 2: Data × Code2 → Transmit
All users share same frequency & time
Receiver: Received × Code1 = User 1 data only (Code2 appears as noise)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Multiplexing vs Multiple Access Comparison:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Technique           │ How Channel is Shared                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ FDM                 │ Different frequency bands                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ TDM                 │ Different time slots                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ FDMA                │ Different frequencies per user              │
├─────────────────────┼─────────────────────────────────────────────┤
│ TDMA                │ Different time slots per user               │
├─────────────────────┼─────────────────────────────────────────────┤
│ CDMA                │ Same frequency & time, different codes      │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Analog Modulation: AM (amplitude), FM (frequency), PM (phase)
• Digital Modulation: ASK, FSK, PSK, QAM, OFDM
• Pulse Modulation: PAM (amplitude pulses), PCM (binary coded), DM (1-bit diff), ADM (adaptive)
• Multiplexing: FDM (frequency), TDM (time) combine signals
• Multiple Access: FDMA, TDMA, CDMA allow multiple users to share channel`,
      contentBn: `📌 অ্যানালগ যোগাযোগ ব্যবস্থা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি যোগাযোগ চ্যানেলে ক্রমাগত-সময় সংকেতের স্থানান্তর।

উদ্দেশ্য: উৎস থেকে গন্তব্যে দক্ষ ও নির্ভুলভাবে তথ্য পৌঁছে দেওয়া।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. অ্যানালগ মডুলেশন

মডুলেশন: নিম্ন-ফ্রিকোয়েন্সি বার্তা সংকেতকে উচ্চ-ফ্রিকোয়েন্সি ক্যারিয়ারের উপর আরোপ করার প্রক্রিয়া।

A) অ্যামপ্লিটিউড মডুলেশন (AM)
• ক্যারিয়ারের প্রশস্ততা বার্তা সংকেত অনুযায়ী পরিবর্তিত হয়
• ফ্রিকোয়েন্সি ও ফেজ স্থির থাকে
• সূত্র: s(t) = [A_c + m(t)] × cos(2πf_c t)

প্রয়োগ: AM রেডিও সম্প্রচার

B) ফ্রিকোয়েন্সি মডুলেশন (FM)
• ক্যারিয়ারের ফ্রিকোয়েন্সি বার্তা প্রশস্ততা অনুযায়ী পরিবর্তিত হয়
• প্রশস্ততা স্থির থাকে
• সূত্র: s(t) = A_c × cos(2πf_c t + k_f ∫ m(t) dt)

সুবিধা: AM-এর চেয়ে কম শব্দ সংবেদনশীল
প্রয়োগ: FM রেডিও, অডিও ট্রান্সমিশন

C) ফেজ মডুলেশন (PM)
• ক্যারিয়ারের ফেজ বার্তা সংকেতের সাথে পরিবর্তিত হয়

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ডিজিটাল মডুলেশন

সংজ্ঞা: বাইনারি তথ্য অনুযায়ী ক্যারিয়ার সংকেত পরিবর্তন করে ডিজিটাল ডেটা প্রেরণের প্রক্রিয়া।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. ডিজিটাল মডুলেশন স্কিম

ASK: প্রশস্ততা পরিবর্তন (সরল কিন্তু শব্দ সংবেদনশীল)
FSK: ফ্রিকোয়েন্সি পরিবর্তন (ASK-এর চেয়ে ভালো)
PSK: ফেজ পরিবর্তন (রোবাস্ট, QPSK ২ বিট/প্রতীক)
QAM: প্রশস্ততা + ফেজ (উচ্চ স্পেকট্রাল দক্ষতা)
OFDM: মাল্টি-ক্যারিয়ার (LTE, Wi-Fi, 5G)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 পালস ও ডিজিটাল সংকেত

PAM: পালস প্রশস্ততা সংকেতের সমানুপাতিক
PCM: স্যাম্পলিং → কোয়ান্টাইজেশন → বাইনারি কোড
DM: ধারাবাহিক নমুনার মধ্যে পার্থক্য প্রেরণ (১ বিট)
ADM: অভিযোজিত ধাপ আকার DM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📡 মাল্টিপ্লেক্সিং ও মাল্টিপল অ্যাক্সেস

FDM: ভিন্ন ফ্রিকোয়েন্সি ব্যান্ড (রেডিও, কেবল টিভি)
TDM: ভিন্ন সময় স্লট (ডিজিটাল টেলিফোনি)

FDMA: প্রতি ব্যবহারকারী ভিন্ন ফ্রিকোয়েন্সি
TDMA: প্রতি ব্যবহারকারী ভিন্ন সময় স্লট (GSM)
CDMA: একই ফ্রিকোয়েন্সি ও সময়, ভিন্ন কোড (৩জি)

✅ সারাংশ
• অ্যানালগ মডুলেশন: AM, FM, PM
• ডিজিটাল মডুলেশন: ASK, FSK, PSK, QAM, OFDM
• পালস মডুলেশন: PAM, PCM, DM, ADM
• মাল্টিপ্লেক্সিং: FDM, TDM
• মাল্টিপল অ্যাক্সেস: FDMA, TDMA, CDMA`,
      takeaways: [
        "Analog Modulation: AM (amplitude), FM (frequency), PM (phase)",
        "Digital Modulation: ASK, FSK, PSK, QAM, OFDM",
        "Pulse Modulation: PAM (amplitude), PCM (binary coded), DM (1-bit diff), ADM (adaptive)",
        "Multiplexing: FDM (frequency), TDM (time) combine multiple signals",
        "Multiple Access: FDMA, TDMA, CDMA for multiple users sharing channel",
        "CDMA uses unique spreading codes for each user"
      ],
      takeawaysBn: [
        "অ্যানালগ মডুলেশন: AM (প্রশস্ততা), FM (ফ্রিকোয়েন্সি), PM (ফেজ)",
        "ডিজিটাল মডুলেশন: ASK, FSK, PSK, QAM, OFDM",
        "পালস মডুলেশন: PAM (প্রশস্ততা), PCM (বাইনারি কোডেড), DM (১-বিট ডিফ), ADM (অভিযোজিত)",
        "মাল্টিপ্লেক্সিং: FDM (ফ্রিকোয়েন্সি), TDM (সময়) একাধিক সংকেত একত্রিত করে",
        "মাল্টিপল অ্যাক্সেস: FDMA, TDMA, CDMA একাধিক ব্যবহারকারীর জন্য",
        "CDMA প্রতিটি ব্যবহারকারীর জন্য অনন্য স্প্রেডিং কোড ব্যবহার করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module8 = m8