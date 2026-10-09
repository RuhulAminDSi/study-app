# Electromagnetism: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-electromagnetism.en.html` (handwritten-style PDF: `notes/pdf/ch1-electromagnetism.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage:** "Basic elements: charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field; Faraday's law, Maxwell's equations". This note covers that whole line at university depth: charge and Coulomb's law · electric field and Gauss's law · potential and capacitance · current, resistance and resistivity · magnetic field (Biot–Savart, Ampère, Lorentz force) · magnetic flux, Faraday and Lenz · self and mutual inductance, eddy currents · Maxwell's equations and EM waves. Neighbouring lessons: Waves and Oscillations, Special Relativity, Quantum Physics & EM Waves.

**High-yield:** k, ε₀, μ₀, e, c values · Gauss ∮E·dA = q/ε₀ and the cube-face q/6ε₀ · E ∝ 1/r² vs V ∝ 1/r · R = ρL/A and Joule heat I²Rt · ε = −N dΦ/dt with Lenz · Maxwell's four laws and c = 1/√(μ₀ε₀).

---

## 1. Electric charge and Coulomb's law

- **Charge (q):** the property of matter that makes it experience an electric force. Scalar; two kinds, **positive (+) and negative (−)**. Unit: **coulomb (C) = 1 A·s**.
- **Quantised:** q = ±ne, e = **1.602 × 10⁻¹⁹ C**. **Conserved** in an isolated system (rubbing only *transfers* charge). **Invariant:** the same in every inertial frame. 1 C = **6.24 × 10¹⁸** electrons.
- **Coulomb's law (1785):** F = k q₁q₂ / r², with k = 1/4πε₀ = **8.99 × 10⁹ N·m²/C²** and ε₀ = **8.854 × 10⁻¹² C²/(N·m²)**.
- The force is **central** (along the joining line), attractive for unlike charges and repulsive for like ones.
- In a medium: F = F_vacuum / εᵣ. Water has εᵣ ≈ 80.

| You change… | Force becomes | Reason |
|---|---|---|
| r → 2r | **F/4** | inverse-square law |
| r → r/2 | **4F** | same law, read backwards |
| both charges ×2 | **4F** | F ∝ q₁q₂ |
| one charge ×2 | 2F | F ∝ q, not r |

- 💡 **Trick:** memorise **k = 9 × 10⁹**, not ε₀ — every exam numeric uses 9 × 10⁹.
- ⚠ **Trap:** k = 9 × 10⁹ is **1/4πε₀**, not ε₀.
- ✍ **Example:** +2 μC and +3 μC, 0.3 m apart: F = 9 × 10⁹ × 6 × 10⁻¹² / 0.09 = **0.6 N, repulsive**. At 0.6 m it becomes 0.15 N, still repulsive.

## 2. Electric field (E)

- **E = F/q₀** (force per unit *positive* test charge), a **vector**, unit **N/C = V/m**. For a point charge, **E = kq/r²**.
- Field lines leave **+** and land on **−**; they never cross; their density ∝ E; they meet a conductor at 90°; **E = 0 inside a conductor**, so excess charge sits on the surface.
- 💡 **Trick:** E is to q what g is to m — E = F/q, g = F/m.
- ✍ **Example:** 20 cm from a 2 μC charge, E = 9 × 10⁹ × 2 × 10⁻⁶ / 0.04 = **4.5 × 10⁵ N/C**.

## 3. Gauss's law

- **∮E·dA = q_enc / ε₀.** Flux Φ_E = EA cos θ, unit N·m²/C.
- The flux depends only on the charge *inside*; a charge outside gives net flux **0**.
- E is only easy to remove from the integral for **symmetric** distributions.

| Charge distribution | E |
|---|---|
| Point charge / outside a sphere | kq/r² |
| Infinite line (λ) | λ / 2πε₀r (∝ 1/r) |
| Infinite plane sheet (σ) | σ / 2ε₀ (independent of distance) |
| Just outside a conductor | σ / ε₀ |
| Inside a conductor | **0** |

- 💡 **Trick:** **sphere → 1/r², line → 1/r, sheet → constant.** Count the dimensions you can spread a charge over: 2, 1, 0.
- ⚠ **Classic MCQ:** a charge q at the centre of a cube gives flux **q/6ε₀** through each face.

## 4. Electric potential (V)

- **V = W/q** (a **scalar**), unit volt = J/C. For a point charge, **V = kq/r**.
- **E = −dV/dr**: E points from **high to low** potential. ΔU = qΔV. **1 eV = 1.602 × 10⁻¹⁹ J.**
- Equipotential surfaces are ⟂ to field lines; no work is done along one; a conductor is a single equipotential.

| | Field E | Potential V |
|---|---|---|
| nature | vector | scalar |
| point charge q | **kq/r²** | **kq/r** |
| unit | N/C = V/m | volt = J/C |

- 💡 **Trick:** E is the **downhill slope** of V.
- ✍ **Example:** 30 cm from a +2 μC charge, V = **6 × 10⁴ V**. Doubling r halves V, while the *field* would fall to a quarter.

## 5. Capacitance and capacitors

- **C = Q/V**, unit **farad (F)**, 1 F = 1 C/V. Parallel plates: **C = ε₀εᵣA/d**.

| Two capacitors C₁, C₂ | Result | Note |
|---|---|---|
| In series | C = C₁C₂/(C₁+C₂) | always **smaller** than the smallest |
| In parallel | C = C₁ + C₂ | always **larger** than the largest |
| Energy stored | ½CV² = ½Q²/C = ½QV | |
| Charging to V | q = CV(1 − e^(−t/RC)) | τ = RC; 63.2 % after one τ |
| In series | same q, V splits inversely | smallest C takes the largest V |

- 💡 **Trick:** parallel adds like sums of money; series is the **tightest link**, exactly like resistors.
- ⚠ **Trap:** farad = capacitance, weber = flux, henry = inductance. Two 3 μF in series give **1.5 μF**, not 6 μF.
- ✍ **Example:** air plates, A = 0.01 m², d = 1 mm → C = **88.5 pF**; at 200 V, Q = **1.77 × 10⁻⁸ C** and U = ½CV² = **0.035 J**.
- 💻 **IT link:** a 100 nF decoupling capacitor's τ = RC is the same idea as a firmware debounce delay; its stored ½CV² is what must be dissipated when the rail collapses.

## 6. Current, resistance and resistivity

- **I = Q/t** (ampere, 1 A = 1 C/s) · **Ohm's law V = IR** · **R = ρL/A**.
- R is a property of the *piece of wire*; ρ is a property of the *material* (resistivity). Conductivity σ = 1/ρ.

| Material | ρ (Ω·m) at 20 °C | α (°C⁻¹) |
|---|---|---|
| Silver (best conductor) | 1.59 × 10⁻⁸ | 3.8 × 10⁻³ |
| Copper | 1.68 × 10⁻⁸ | 3.93 × 10⁻³ |
| Aluminium | 2.82 × 10⁻⁸ | 3.9 × 10⁻³ |
| Iron | 9.7 × 10⁻⁸ | 5.0 × 10⁻³ |
| Constantan (≈ 0 alloy) | **4.9 × 10⁻⁷** | **≈ 0** |
| Nichrome (heater wire) | 1.0 × 10⁻⁶ | 4 × 10⁻⁴ |

- Temperature: **R_t = R₀(1 + αt)**. Joule heat **H = I²Rt = V²t/R**; power **P = VI = I²R = V²/R**.
- 💡 **Trick:** **ρ = RA/L** is the material fingerprint — copper 1.68 × 10⁻⁸ and silver 1.59 × 10⁻⁸ Ω·m settle every "which is the better conductor" MCQ.
- ⚠ **Trap:** halve L and double A → R unchanged. Constantan and nichrome are used in heaters because α ≈ 0.
- ✍ **Example:** copper wire, L = 100 m, A = 2 mm² → R = **0.84 Ω**; at 5 A, P = I²R = **21 W**.
- 💻 **IT link:** V = IR for a fixed resistance is a straight line through the origin — that is why a two-resistor voltage divider scales a 5 V logic level, and how every SPICE resistor model works.

## 7. Magnetic field (B)

- Region in which a **moving charge or a current** feels a force. **B** is a vector; SI unit **tesla (T)** = N/(A·m) = Wb/m²; **1 T = 10⁴ gauss** (1 G = 10⁻⁴ T). μ₀ = **4π × 10⁻⁷ T·m/A**.
- **Biot–Savart:** dB = (μ₀/4π)·I dl sin θ / r².

| Source | B | Falls off as |
|---|---|---|
| Long straight wire | μ₀I / 2πr | 1/r |
| Centre of a circular loop | μ₀I / 2R | 1/R (not 1/R²) |
| Solenoid, inside (n turns/m) | **μ₀nI** | uniform |
| Long solenoid, far outside | μ₀NI / 2L | 1/r |

- **Right-hand grip rule:** thumb = conventional current, curled fingers = B. For a solenoid the fingers follow the winding and the **thumb points to the north pole**.
- **Forces:** Lorentz force **F = q(v × B)**, |F| = qvB sin θ; wire **F = BIL sin θ**; coil torque τ = NIAB sin θ; circular path r = mv/qB, ω_c = qB/m.
- Like currents in parallel wires attract; opposite currents repel.
- 💡 **Trick:** Fleming's **left** hand = **mo**tor: **F**ield, se**C**ond, thu**M**b. The right hand is the **generator** rule.
- ⚠ **Trap:** F = **0** when θ = 0° (v ∥ B) or the charge is at rest, and the magnetic force does **no work** — it bends the path, never the speed.
- ✍ **Example:** 2 A wire, r = 5 cm: B = 2 × 10⁻⁷ × 2 / 0.05 = **8 × 10⁻⁶ T**. Solenoid n = 500 turns/m, I = 2 A: B = **1.26 × 10⁻³ T**.

## 8. Magnetic flux, Faraday's law and Lenz's law

- **Φ_B = BA cos θ**, unit **weber (Wb)** = T·m² = V·s. θ is measured between **B and the area normal**.
- **Faraday (1831): ε = −N dΦ_B/dt** for N turns. An emf appears when B, the area, or θ changes, or when the circuit moves.
- **Lenz's law** is the minus sign: the induced current **opposes the change** that produced it — energy conservation.

| Situation | Induced emf | Note |
|---|---|---|
| N-turn coil, flux change | **ε = −N ΔΦ/Δt** | N multiplies the emf |
| Rod of length L moving at v ⟂ B | ε = BLv | motional; no magnet needed |
| Coil rotating at ω in B | ε = NBAω sin ωt | alternating, ε_max = NBAω |
| Self-inductance | ε = −L dI/dt | opposes a change of current |
| Mutual inductance | ε₂ = −M dI₁/dt | basis of the transformer |

- 💡 **Trick:** Faraday in words: **more turns, faster change, bigger emf.** Lenz in words: **the induced effect always brakes the cause.**
- ⚠ **Trap:** Lenz opposes the **change**, not the field — push a magnet in and the coil repels; pull it out and it still attracts. An emf is volts (energy per charge), **not** newtons.
- ✍ **Example:** 100 turns, flux 0.05 → 0.01 Wb in 0.2 s: |ε| = 100 × 0.04 / 0.2 = **20 V**.
- 💻 **IT link:** transformers need **AC only** — which is why SMPS rectify to DC and chop it back to a changing current before the transformer. The same law reads card mag-strips and writes hard disks.

## 9. Self & mutual inductance, transformers, eddy currents

- **Self-inductance:** L = NΦ_B / I, ε = −L dI/dt, energy **U = ½LI²**.
- **Mutual inductance:** M = N₂Φ₂ / I₁, ε₂ = −M dI₁/dt. Both measured in **henry (H)** = V·s/A.
- L depends on N², the core material and the geometry; a soft-iron core raises L enormously. A current **cannot change instantly** in an inductor — that is why a switch across a coil arcs.
- **Transformer:** Vs/Vp = **Ns/Np**, Is/Ip = **Np/Ns**, power ideally unchanged. Step-up raises voltage and **lowers** current.

| Quantity | Symbol | SI unit |
|---|---|---|
| Self-inductance | L | henry (H) |
| Mutual inductance | M | henry (H) |
| Magnetic flux | Φ_B | weber (Wb) |
| Flux density | B | **tesla (T)** |

- **Eddy currents:** closed circulating currents inside a **bulk conductor** cutting a changing flux. Lenz makes them **oppose the motion**, so the motion is damped and the energy appears as **Joule heat**.
- Uses: induction furnace, eddy-current brake, metal detector, induction cooker, meter damping. Losses in transformer cores are removed with **laminated silicon-steel** cores.
- ⚠ **Trap:** eddy currents are not a single path — every closed loop inside the metal carries one, and they always oppose.
- ✍ **Example:** a 2 H inductor at 3 A stores U = ½LI² = **9 J**; cutting the current to zero in 0.05 s produces an average opposing emf of LΔI/Δt = **120 V**.

## 10. Maxwell's equations (1865)

| # | Law | Integral form | Differential form | Says |
|---|---|---|---|---|
| 1 | Gauss (E) | ∮E·dA = q/ε₀ | ∇·E = ρ/ε₀ | charge is the source of E |
| 2 | Gauss (B) | **∮B·dA = 0** | ∇·B = 0 | **no magnetic monopoles** |
| 3 | Faraday | ∮E·dl = −dΦ_B/dt | ∇×E = −∂B/∂t | changing B creates a circulating E |
| 4 | Ampère–Maxwell | ∮B·dl = μ₀I + μ₀ε₀ dΦ_E/dt | ∇×B = μ₀J + μ₀ε₀ ∂E/∂t | current *and* changing E create B |

- **Displacement current** I_d = ε₀ dΦ_E/dt was Maxwell's own addition: it counts as current across the gap of a **charging capacitor**, and it is what makes self-sustaining EM waves possible.
- Maxwell predicted EM waves in 1865; **Hertz** produced and detected them in **1887–88**.
- 💡 **Trick:** order **G–G–F–A** — two **divergences** (sources: charge yes, monopole no) and two **curls** (circulation: Faraday, Ampère).
- ⚠ **Trap:** it is the **second** equation (∇·B = 0) that rules out monopoles. ∇·E = ρ/ε₀ uses the volume density ρ; the integral form uses the total charge q inside.

## 11. Electromagnetic waves

- **c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s**, the same in every frame.
- **E ⟂ B ⟂ direction of travel**; |E| = cB so E/B = c.
- Transverse, needs **no medium**, and carries energy (Poynting vector S = E×B/μ₀) and momentum.
- The whole spectrum shares c; only λ and f change, with **c = fλ**.
- ✍ **Example:** at 100 MHz, λ = 3 × 10⁸ / 10⁸ = **3 m**; a 60 Hz mains line has λ = 5 × 10⁶ m.
- 💻 **IT link:** the free-space wave impedance is Z₀ = √(μ₀/ε₀) ≈ **377 Ω** (≈ 120π Ω), and a half-wave dipole radiates about **73 Ω** — which is exactly why Wi-Fi antennas are fed with 75 Ω coax.

---

## Practice MCQs
1. SI unit of electric charge: (a) Ampere (b) Volt (c) Farad (d) Coulomb
2. Distance doubled, force F →: (a) F/4 (b) F/2 (c) 2F (d) 4F
3. Denies magnetic monopoles: (a) ∇·E = ρ/ε₀ (b) ∇·B = 0 (c) ∇×E = −∂B/∂t (d) ∇×B = μ₀J + μ₀ε₀ ∂E/∂t
4. 100 turns, ΔΦ = 0.04 Wb in 0.2 s → ε: (a) 2 V (b) 0.2 V (c) 20 V (d) 200 V
5. +2 μC, +3 μC, 0.3 m apart: (a) 0.6 N, repulsive (b) 6 N, repulsive (c) 0.06 N, attractive (d) 0.6 N, attractive
6. SI unit of flux density B: (a) Weber (b) Henry (c) Gauss (d) Tesla
7. E inside a conductor at equilibrium: (a) kq/r² (b) zero (c) σ/ε₀ (d) infinite
8. 3 μF and 6 μF in parallel: (a) 2 μF (b) 18 μF (c) 9 μF (d) 4.5 μF
9. Wire: L doubled, A halved → R is: (a) R (b) 4R (c) 2R (d) R/2
10. EM wave speed in vacuum: (a) 3 × 10⁸ m/s (b) 340 m/s (c) 1.5 × 10⁸ m/s (d) 3 × 10⁶ m/s

**Answer key:** 1-d · 2-a · 3-b · 4-c · 5-a · 6-d · 7-b · 8-c · 9-b · 10-a

## Written question (10 marks)
A 4 μF capacitor charged to 200 V is connected across a 1 kΩ resistor. Find the charge and energy stored, the time constant, the charge after one time constant, and the heat dissipated.

**Model answer:**
1. **Stored (3 marks):** Q₀ = CV = 4 × 10⁻⁶ × 200 = **8 × 10⁻⁴ C (800 μC)**; U = ½CV² = ½ × 4 × 10⁻⁶ × 200² = **0.08 J**.
2. **Time constant (2 marks):** τ = RC = 10³ × 4 × 10⁻⁶ = **4 × 10⁻³ s = 4 ms**.
3. **After one τ (3 marks):** q(t) = Q₀e^(−t/τ), so q(τ) = Q₀/e = 8 × 10⁻⁴ × 0.368 = **2.94 × 10⁻⁴ C**; the voltage has fallen to 200/e = 73.6 V.
4. **Heat (2 marks):** as t → ∞ the voltage → 0, so **all** the stored energy becomes Joule heat, H = ½Q₀V = **0.08 J**.

## Before the exam ✓
- F, E, V: which is 1/r and which is 1/r²?
- All four Maxwell equations, in integral and differential form
- Gauss's law applied to a sphere, a line, a sheet and a cube
- An emf from N, ΔΦ, Δt — and why the sign is negative

## Also practise (written)
1. Use Gauss's law to derive E = kq/r² for a point charge outside a sphere.
2. Emf of a 500-turn coil rotating at 300 rpm in B = 0.2 T (NABω, ω = 2πn/60).
3. Force per unit length between two parallel wires 2 cm apart, 5 A in each.