# Quantum Physics & EM Waves: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-quantum-physics.en.html` (handwritten-style PDF: `notes/pdf/ch1-quantum-physics.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, BSC Officer (IT)). MCQ + written.

**Syllabus coverage:** "Electromagnetic waves, **Photoelectric effect**, **Quantum theory of light**, X-ray and X-ray diffraction, **Compton effect**". This note covers EM waves and the whole spectrum, propagation in media, **polarisation**, black-body radiation and Planck's quantum, the photoelectric effect, **Compton effect and pair production**, matter waves and **wave-particle duality**, and the Bohr model with the hydrogen spectrum. X-ray production and Bragg's diffraction law sit in the Basic Physics notes; de Broglie waves and the wave equation are taken further in the next lesson of this chapter.

**High-yield:** c = λν and no medium needed · spectrum order RMIVUXG with all six boundaries · v = c/√(μ_r ε_r) and n = c/v · frequency never changes at a boundary · E = hf and K_max = hf − φ · Compton shift Δλ = (h/m_e c)(1 − cos φ) · pair production ≥ 1.022 MeV · λ = h/p · E_n = −13.6/n² eV and only the Balmer series is visible.

---

## 1. What is an electromagnetic wave?

- An EM wave is a travelling **coupled oscillation of an electric field E and a magnetic field B**. E and B are **perpendicular to each other** and **both perpendicular to the direction of travel** — three mutually perpendicular directions.
- A changing E field creates a B field and vice versa, so the wave needs **no material medium** and crosses a vacuum unchanged.
- **Origin:** Maxwell predicted EM waves (1864–65); Hertz generated and detected them (1887). Maxwell (1865) concluded light itself is an EM wave.
- E and B oscillate **in phase** (peaks together). In vacuum E₀/B₀ = c. Energy flux (Poynting vector) S = E₀B₀/μ₀.

| Property | Electromagnetic wave | Sound wave |
|---|---|---|
| Medium needed? | **No** — travels through vacuum | Yes — gas, liquid or solid only |
| Nature | transverse | longitudinal |
| Speed in vacuum | 3 × 10⁸ m/s | cannot travel at all |
| Can be polarised? | **Yes** | No |
| What oscillates | electric **and** magnetic fields | pressure / particle displacement |
| Deflection by E, B fields | none | magnetic force deflects it |

- 💡 **Trick:** "**E–B–c right**" — E, B and the travel direction are mutually at right angles, and the wave travels along E × B.
- ⚠ **Trap:** "EM waves are deflected by magnetic fields" is **false** (they carry no charge), but they *do* exert forces on charges. A wave with only an E field is not a physical EM wave.
- ✍ **Worked example:** a station transmits on 90 MHz → λ = 3 × 10⁸ / 90 × 10⁶ = **3.33 m** (radio). On 900 MHz, λ = **0.33 m** (microwave). Photon energy there = **3.7 × 10⁻⁷ eV**.

## 2. The electromagnetic spectrum

- The **family of all EM waves**, arranged in order of wavelength. As λ falls, frequency f, photon energy hf, penetrating power and ionising power **all rise together**.
- Order of *decreasing* wavelength: **radio → microwave → infrared → visible → ultraviolet → X-ray → gamma**.

| Band | λ | f (Hz) | Photon energy | Typical use |
|---|---|---|---|---|
| Radio | > 1 m | < 3 × 10⁸ | < 10⁻⁵ eV | radio & TV broadcast, mobile, MRI |
| Microwave | 1 m – 1 mm | 3 × 10⁸ – 3 × 10¹¹ | 10⁻⁵ – 10⁻³ eV | radar, satellite, Wi-Fi, oven (2.45 GHz) |
| Infrared | 1 mm – 700 nm | 3 × 10¹¹ – 4.3 × 10¹⁴ | 10⁻³ – 1.8 eV | remote control, night vision, optical fibre |
| **Visible** | **700 – 400 nm** | 4.3 × 10¹⁴ – 7.5 × 10¹⁴ | 1.8 – 3.1 eV | human eye, photography, fibre |
| Ultraviolet | 400 – 10 nm | 7.5 × 10¹⁴ – 3 × 10¹⁶ | 3.1 – 124 eV | sterilising, fluorescence, DNA damage |
| X-ray | 10 – 0.01 nm | 3 × 10¹⁶ – 3 × 10¹⁹ | 0.1 – 124 keV | radiography, crystallography |
| Gamma ray | < 0.01 nm | > 3 × 10¹⁹ | > 124 keV | cancer therapy, PET, nuclear research |

- Colours inside visible light: violet **400** · blue **450** · green **495** · yellow **570** · orange **620** · red **700 nm**.
- 💡 **Trick:** **RMIVUXG** — Radio, Microwave, Infrared, Visible, Ultraviolet, X-rays, Gamma. Read it backwards for increasing frequency.
- ⚠ **Trap:** the band boundaries are **the same numbers** — 1 m, 1 mm, 700 nm, 400 nm, 10 nm, 0.01 nm. Only **UV, X-ray and gamma** are ionising.
- ✍ **Worked examples:**
  - λ = 3 cm → f = **1 × 10¹⁰ Hz = 10 GHz** → microwave.
  - f = 3 × 10¹⁸ Hz → λ = **0.1 nm** → X-ray; E = 1240/0.1 = **12.4 keV**.
  - λ = 600 nm → f = 5 × 10¹⁴ Hz, **orange**, E = **2.07 eV**.

## 3. Speed in a medium, refractive index, polarisation

- In a material medium the wave slows down: **v = 1/√(με) = c/√(μ_r ε_r)**. The **refractive index n = c/v = √(μ_r ε_r)**; for glass and water μ_r ≈ 1, so **n = √ε_r**.
- Snell's law: **sin i / sin r = v₁/v₂ = n₂/n₁**. Entering a denser medium bends **towards** the normal (r < i).
- At a boundary **f never changes**; only v and λ change, with **λ′ = λ/n**. Photon energy hf never changes either.

| Medium | Vacuum | Air | Water | Crown glass | Diamond |
|---|---|---|---|---|---|
| Refractive index n | 1 | 1.0003 | 1.33 | 1.50 | **2.42** |
| ε_r if μ_r = 1 | 1 | ≈ 1 | 1.77 | 2.25 | 5.86 |

- **Polarisation** = restricting the vibration of E to one plane across the direction of travel. The **plane of polarisation** is the plane containing both the direction of travel and the electric vector.
- **Malus's law:** I = I₀ cos²θ after a second filter at angle θ. Unpolarised light through one ideal Polaroid drops to **half** the intensity.
- **Brewster's law:** tan i_p = n₂/n₁. At that angle i_p + r = 90°, the reflected ray is **perpendicular** to the refracted ray, and the reflected light is completely plane-polarised with E perpendicular to the plane of incidence.
- Uses: sunglasses, camera filters, **LCD** panels, photoelastic stress analysis, 3-D cinema glasses.
- 💡 **Trick:** "**Enter, bend, stay**" — light *enters* a denser medium, *bends* toward the normal, but its frequency *stays*. Only λ shrinks.
- ⚠ **Trap:** the commonest error is claiming the frequency changes in glass or water. It does **not**. Sound cannot be polarised — it is longitudinal.
- ✍ **Worked example:** 600 nm light enters glass of n = 1.5 → (i) f = **5 × 10¹⁴ Hz** (unchanged), (ii) λ′ = **400 nm**, (iii) v = **2 × 10⁸ m/s**. With μ_r = 4, ε_r = 9 → n = √36 = **6**, v = c/6 = **5 × 10⁷ m/s**.

## 4. Black-body radiation and Planck's quantum

- A **black body** absorbs **all** EM radiation falling on it at every wavelength and reflects nothing. Kirchhoff's law: a good absorber is a good emitter, so at thermal equilibrium the emitted spectrum is the absorption spectrum.
- **Planck (1900)** proposed that energy is exchanged in **discrete packets** hf. That single assumption removed the **ultraviolet catastrophe**, in which classical theory demanded infinite energy at short wavelengths.

| Law | Formula | Constant |
|---|---|---|
| Stefan–Boltzmann | P/A = σT⁴ | σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴ |
| Wien's displacement | **λ_max T = b** | b = 2.9 × 10⁻³ m·K |
| Rayleigh–Jeans | e_λ ∝ λ⁻⁴ T (long λ only) | fails at short λ |
| Planck's quantisation | **E = hf** | h = 6.626 × 10⁻³⁴ J·s |
| Planck's radiation law | e_λ dλ = 8πhc dλ / λ⁵ (e^{hc/λkT} − 1) | k = 1.38 × 10⁻²³ J/K |

- As T rises, the peak slides IR → red → orange → yellow → white. The Sun's surface (≈ 5800 K) looks slightly bluish-white.
- 💡 **Trick:** "**Wien finds the peak, Stefan counts the heat**" — Wien gives T from one wavelength; Stefan–Boltzmann gives total power.
- ⚠ **Trap:** Wien's law finds the **peak wavelength**, not the total energy. Planck proposed quanta for **black-body radiation**; it was **Einstein (1905)** who pushed them into light as photons.
- ✍ **Worked examples:**
  - λ_max = 500 nm → T = 2.9 × 10⁻³ / 5 × 10⁻⁷ = **5800 K**.
  - A room at 300 K → λ_max = **9.7 μm**, deep infrared.
  - At 1000 K: P/A = **5.67 × 10⁴ W m⁻²**.
  - ν = 6 × 10¹⁴ Hz → E = hf = **3.98 × 10⁻¹⁹ J = 2.48 eV**.

## 5. The photoelectric effect

- **Definition:** emission of electrons from a metal surface when EM radiation of **frequency above the threshold** falls on it. Hertz observed it (1887), Lenard studied it (1902), **Einstein 1905**, **Nobel Prize 1921**.
- **Einstein's equation: hf = φ + K_max**, i.e. K_max = hf − φ = h(f − f₀), where φ = h f₀ is the work function, f₀ the threshold frequency, λ₀ = hc/φ the threshold wavelength, and the stopping potential obeys eV₀ = K_max.

| You change… | Photocurrent | K_max, V₀ |
|---|---|---|
| Intensity ↑, f fixed | **increases** | **no change** |
| f ↑, intensity fixed | ≈ no change | **increases linearly** with f |
| λ ↑ but still above λ₀ | no change | decreases |
| f < f₀, any intensity | **no emission at all** — emission is instantaneous | |

- **Why classical wave theory fails:** (1) no emission below f₀ however intense the light; (2) K_max depends on f, not intensity; (3) emission is instantaneous, with no energy-accumulation delay. All three follow from **one photon hf absorbed by one electron**.
- 💡 **Trick:** "**Brightness counts, energy ranks**" — intensity decides **how many** electrons escape; frequency decides **how fast** they escape.
- ⚠ **Trap:** doubling the intensity does **not** double K_max. The K_max vs f graph is a straight line of **slope h** through (f₀, 0).
- ✍ **Worked examples:**
  - φ = 2.0 eV, λ = 400 nm → E = 1240/400 = 3.1 eV → K_max = **1.1 eV** → V₀ = **1.1 V**.
  - λ = 500 nm gives V₀ = 1.48 V → φ = 2.48 − 1.48 = **1.0 eV**, f₀ = **6 × 10¹⁴ Hz**, λ₀ = **500 nm**.
- 💻 **IT link:** photodiodes in optical-fibre receivers, CCD / CMOS image sensors and solar cells all detect **single photons** — the same hf = φ + K_max relation.

## 6. Compton effect, pair production, photons

- **Photon:** energy **E = hf = hc/λ**, momentum **p = h/λ = E/c**, **rest mass = 0**, charge 0, spin 0, speed always c. Because m = 0 while v = c, momentum and energy are locked together by p = E/c.
- **Compton effect (A.H. Compton, 1923; Nobel 1927):** an X-ray photon scattered by a **nearly free electron** comes out with a **longer wavelength** — direct proof that photons carry momentum.

| Scattering angle φ | 0° | 60° | 90° | 180° |
|---|---|---|---|---|
| Δλ | 0 | 1.21 pm | 2.43 pm | **4.85 pm (max)** |

- **Δλ = λ′ − λ = (h/m_e c)(1 − cos φ) = 2λ_C sin²(φ/2)**, with the Compton wavelength λ_C = h/m_e c = **2.43 pm**.
- The shift depends **only on φ** — not on the incident λ, not on the target material. Energy the photon loses becomes **kinetic energy of the recoiling electron**.
- **Pair production:** γ → e⁻ + e⁺ near a nucleus. Energy must reach **2m_e c² = 1.022 MeV**, so λ ≤ **1.21 × 10⁻³ nm**.
- **Annihilation:** e⁻ + e⁺ → γ + γ, **each** photon carrying at least **0.511 MeV**. Two photons, never one.
- 💡 **Trick:** "0.511 **each**, 1.022 **together**".
- ⚠ **Trap:** visible light would also shift, but by only ~2 pm out of 500 nm — undetectable. That is why the effect was found with X-rays.
- ✍ **Worked examples:** a 60 keV photon (λ = 0.0207 nm) scattered at 60° → Δλ = **1.21 pm**, λ′ = 0.0219 nm. Shortest wavelength that can create a pair: λ = 1240 / 1.022 × 10⁶ = **1.21 × 10⁻³ nm**. At 180° the maximum shift is **4.85 pm**.

## 7. de Broglie matter waves and wave-particle duality

- **de Broglie (1924):** if light behaves like a particle, then a particle must behave like a wave. Every moving particle has a wavelength **λ = h/p = h/mv = h/√(2mK)**. Heavier or faster ⇒ shorter λ.
- **Davisson–Germer (1927):** electrons at **54 V** scattered from a **nickel** crystal gave a clear diffraction pattern; λ = 1.226/√54 = **0.167 nm**, the same order as the Ni lattice spacing (0.215 nm). **G. P. Thomson (1927)** got concentric rings through a thin foil.
- **Bohr orbits as standing waves:** only an integer number of wavelengths fits round a stable orbit, **2πr = nλ**. With λ = h/p = h/mv this gives **mvr = nh/2π = nħ**.
- **Uses:** electron microscope, electron diffraction in a TEM, LEED for chip surfaces.
- Phase velocity, group velocity, the wave function and the Schrödinger equation are taken further in the next lesson of this chapter.

| Evidence for… | Observation | Experiment |
|---|---|---|
| **Wave** nature of light | interference, diffraction | Young's double slit (1801) |
| **Particle** nature of light | threshold f, instant emission | photoelectric effect |
| **Particle** nature of light | photon returns with a longer λ | Compton effect (1923) |
| **Particle** nature of light | γ → e⁻ + e⁺ above 1.022 MeV | pair production |
| **Wave** nature of matter | electron diffraction from a crystal | Davisson–Germer (1927) |
| **Wave** nature of matter | diffraction rings through a foil | G. P. Thomson (1927) |

- 💡 **Trick:** "**Light → particle** (photoelectric, Compton, pair). **Particle → wave** (de Broglie, Davisson–Germer). The **same h** sits in the middle of both halves."
- ⚠ **Trap:** matter waves are not ripples of a medium. A photon has **zero** rest mass, an electron does not.
- ✍ **Worked example:** 54 V → λ = **0.167 nm**. A neutron of mass 1.675 × 10⁻²⁷ kg at 1000 m/s has p = 1.675 × 10⁻²⁴ kg·m/s, so λ = **3.96 × 10⁻¹⁰ m = 0.396 nm**.

## 8. Bohr's model and the hydrogen spectrum

- **Niels Bohr, 1913** (Nobel 1922): ① electrons revolve only in certain **discrete stationary orbits** and radiate **no** energy while in them; ② angular momentum is quantised, **mvr = nh/2π = nħ**; ③ a photon is emitted or absorbed only during a jump, with **hf = |E₂ − E₁|**.

| Quantity | Hydrogen (Z = 1) |
|---|---|
| Orbit radius | r_n = n² × 0.0529 nm |
| Energy of level n | **E_n = −13.6 / n² eV** (E₁ = −13.6 eV) |
| Ionisation from ground | 13.6 eV |
| Rydberg formula | 1/λ = R (1/n₁² − 1/n₂²) |
| Constants | R = **1.097 × 10⁷ m⁻¹**, a₀ = 0.529 × 10⁻¹⁰ m |

| Series | Jumps to | Wavelength range | Region | Famous lines |
|---|---|---|---|---|
| Lyman | n → 1 | 121.6 → 91.2 nm | ultraviolet | L_α = 121.6 nm |
| **Balmer** | **n → 2** | 656 → 365 nm | **visible** (4 lines) | 656.3, 486.1, 434.0, 410.2 nm |
| Paschen | n → 3 | 1875 → 820 nm | infrared | — |
| Brackett | n → 4 | 4051 → 2279 nm | infrared | — |
| Pfund | n → 5 | 7462 → 2279 nm | infrared | — |

- 💡 **Trick:** only the series ending at **n = 2 (Balmer)** is visible; n = 1 gives **UV**, n ≥ 3 gives **IR**.
- ⚠ **Trap:** Bohr's model reproduces **hydrogen only** — it fails for helium and heavier atoms, which is why quantum mechanics replaced it. E_n is **negative**; its magnitude shrinks as n grows.
- ✍ **Worked examples:** E₂ = **−3.4 eV**; ionising from n = 2 needs **3.4 eV**. Jump n = 3 → 2: ΔE = 13.6(1/4 − 1/9) = 1.89 eV → λ = **656 nm**, the red H_α line. Radius of n = 3: **0.476 nm**. Excitation n = 1 → 3 needs **12.09 eV**.

---

## Night-before sheet — constants

- c = 3 × 10⁸ m/s · **hc = 1240 eV·nm**
- h = 6.626 × 10⁻³⁴ J·s · ħ = h/2π = 1.055 × 10⁻³⁴ J·s
- e = 1.602 × 10⁻¹⁹ C · λ_C = h/m_e c = **2.43 pm** · m_e c² = **0.511 MeV**
- b = 2.9 × 10⁻³ m·K (Wien) · σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴
- a₀ = 0.0529 nm · E₁ = −13.6 eV · R = 1.097 × 10⁷ m⁻¹

## Night-before sheet — formulas

- c = 1/√(μ₀ε₀) · **c = fλ** · v = c/√(μ_r ε_r) · n = c/v · sin i/sin r = n₂/n₁
- I = I₀cos²θ · tan i_p = n₂/n₁ · P/A = σT⁴ · λ_max T = b · e_λ ∝ λ⁻⁴T
- **E = hf = hc/λ** · p = h/λ · hf = φ + K_max · eV₀ = K_max · f₀ = φ/h · λ₀ = hc/φ
- Δλ = (h/m_e c)(1 − cos φ) · pair 1.022 MeV · annihilation ≥ 0.511 MeV each
- **λ = h/p = h/mv = h/√(2mK)** · e⁻: λ(nm) = 1.226/√V · mvr = nħ · 2πr = nλ
- E_n = −13.6/n² eV · r_n = n²a₀ · 1/λ = R(1/n₁² − 1/n₂²) · ΔE = 13.6(1/n₁² − 1/n₂²) eV

## Night-before — top traps

- f changes in a medium ✗ · brighter ≠ faster electrons ✗ · Planck ≠ Einstein for quanta ✗
- Bohr works for hydrogen only ✗ · only Balmer is visible ✗
- pair needs 1.022 MeV, annihilation 0.511 MeV each ✗

---

## Practice MCQs
1. Speed of an EM wave in vacuum: (a) 3 × 10⁶ m/s (b) 3 × 10⁸ m/s (c) 3 × 10¹⁰ m/s (d) 9 × 10¹⁶ m/s
2. In an EM wave E and B are mutually: (a) parallel (b) antiparallel (c) perpendicular (d) identical
3. Energy of a 620 nm photon: (a) 2.0 eV (b) 1.0 eV (c) 4.0 eV (d) 0.5 eV
4. Photoemission needs a frequency f: (a) below f₀ (b) equal to zero (c) of any value (d) above f₀
5. Planck's constant h equals: (a) 6.626 × 10³⁴ J·s (b) 6.626 × 10⁻³⁴ J·s (c) 1.602 × 10⁻¹⁹ J (d) 3 × 10⁸ m/s
6. Maximum Compton shift, φ = 180°: (a) 4.85 pm (b) 2.43 pm (c) 4.85 nm (d) zero
7. Minimum photon energy for a pair: (a) 0.511 MeV (b) 2.044 MeV (c) 1.022 MeV (d) 8.19 MeV
8. Electron energy at n = 2 of H: (a) −3.4 eV (b) −13.6 eV (c) −6.8 eV (d) −1.51 eV
9. Visible hydrogen series: (a) Lyman (b) Paschen (c) Balmer (d) Brackett
10. Refractive index if v = 2 × 10⁸ m/s: (a) 2 (b) 4 (c) 0.5 (d) 1.5

**Answer key:** 1-b · 2-c · 3-a · 4-d · 5-b · 6-a · 7-c · 8-a · 9-c · 10-d

## Written question (10 marks)
State Einstein's photoelectric equation with every symbol explained. Light of wavelength 400 nm falls on a metal of work function 2.0 eV. Find (i) photon energy, (ii) K_max, (iii) stopping potential and (iv) threshold wavelength. Why can classical wave theory not explain the effect?

**Model answer:**
1. **Equation (2 marks):** hf = φ + K_max — the energy of one photon = work function + maximum kinetic energy of the ejected electron. φ = work function, K_max = maximum electron kinetic energy.
2. **(i) Photon energy (2 marks):** E = hc/λ = 1240 / 400 = **3.1 eV** (4.96 × 10⁻¹⁹ J).
3. **(ii) K_max (2 marks):** K_max = hf − φ = 3.1 − 2.0 = **1.1 eV**.
4. **(iii) Stopping potential and (iv) threshold wavelength (2 marks):** eV₀ = K_max → V₀ = **1.1 V**; λ₀ = hc/φ = 1240 / 2.0 = **620 nm**.
5. **Why wave theory fails (2 marks):** no emission below f₀ however intense the light; K_max depends on f, not intensity; emission is instantaneous. All three follow from one photon hf being absorbed by one electron.

## Before the exam ✓

- Know why EM waves need no medium
- Recite the spectrum order and all six boundaries
- Know f never changes at a boundary
- Convert λ ↔ f ↔ E with 1240/λ
- Solve hf = φ + K_max in eV and volts
- Know Δλ and the pair-production thresholds
- Name the Balmer lines and the Bohr radii