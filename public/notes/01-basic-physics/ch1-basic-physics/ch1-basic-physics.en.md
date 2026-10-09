# Basic Physics: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-basic-physics.en.html` (handwritten-style PDF: `notes/pdf/ch1-basic-physics.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, Officer (IT)). MCQ + written.

**Syllabus coverage:** charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field; Faraday's law, Maxwell's equations / waves and oscillations / special relativity / EM waves, photoelectric effect, quantum theory of light, X-ray and X-ray diffraction, Compton effect / de Broglie waves, phase and group velocity, wave function and wave equation.

**High-yield:** k, ε₀, μ₀, e, h values · Gauss Φ = q/ε₀ · Maxwell's 4 laws · γ and time dilation · hf = φ + K_max · λ = h/p and the Compton shift.

---

## 1. Electric charge and Coulomb's law
- **Charge (q):** the property of matter that makes it feel an electric force. Unit: coulomb (C) = 1 A·s.
- **Quantised:** q = ±ne, with e = **1.602 × 10⁻¹⁹ C**. **Conserved** in an isolated system. **Invariant**: the same in every frame. 1 C ≈ **6.25 × 10¹⁸** electrons.
- **Coulomb's law:** F = k q₁q₂ / r², with k = 1/4πε₀ = **8.99 × 10⁹ N·m²/C²** and ε₀ = **8.854 × 10⁻¹² C²/N·m²**.
- In a medium: F_medium = F_vacuum / εᵣ. Water has εᵣ ≈ 80.
- ⚠ **Trap:** double r → F/4. Double both charges → 4F.
- ✍ **Example:** two 1 μC charges 30 cm apart: F = 9×10⁹ × 10⁻¹² / 0.09 = **0.1 N**.

## 2. Electric field
- **E = F/q₀** (a vector), in N/C = V/m. For a point charge, E = kq/r².
- Field lines leave + and end on −. They never cross, they are denser where E is stronger, and they meet a conductor at 90° (E = 0 inside the conductor).
- 💡 **Trick:** field lines flow like a fountain, out of + and into −. Analogy: g = F/m ↔ E = F/q.

## 3. Gauss's law
- **∮E·dA = q_enc / ε₀.** Flux Φ_E = EA cos θ (N·m²/C).
- Flux depends only on the enclosed charge, not on the size or shape of the surface. A charge outside the surface gives zero net flux.

| Charge distribution | E |
|---|---|
| Point charge / outside a sphere | kq/r² |
| Infinite line (λ) | λ / 2πε₀r |
| Infinite plane sheet (σ) | σ / 2ε₀ (independent of distance) |
| Just outside a conductor | σ / ε₀ |
| Inside a conductor | 0 |

- ⚠ **Classic MCQ:** a charge q at the centre of a cube gives flux q/6ε₀ through each face.

## 4. Electric potential
- **V = W/q** (a scalar), in volts (J/C). For a point charge, V = kq/r (∝ 1/r, not 1/r²).
- E = −dV/dr: E points from high to low potential. ΔU = qΔV. **1 eV = 1.602 × 10⁻¹⁹ J.**
- Equipotential surfaces are ⟂ to field lines. A conductor is a single equipotential.
- 💡 **Trick:** E is the downhill slope of V.
- ✍ **Example:** 10 cm from a 1 nC charge, V = 90 V.

## 5. Magnetic field
- B is measured in tesla. 1 T = 10⁴ gauss. μ₀ = **4π × 10⁻⁷ T·m/A**.
- **Lorentz force:** F = q(v × B), so |F| = qvB sin θ. On a wire, F = BIL sin θ.
- Magnetic force does no work. A charge moving across B follows a circle of radius r = mv/qB.
- Field of a long straight wire: B = μ₀I/2πr. Centre of a loop: B = μ₀I/2R. Inside a solenoid: B = μ₀nI.
- 💡 **Trick:** Fleming's left hand (motor): First finger = Field, seCond = Current, thuMb = Motion. Right hand = generator.
- ⚠ **Trap:** a charge moving parallel to B, or at rest, feels no magnetic force (F = 0).

## 6. Faraday's law and Lenz's law
- **ε = −N dΦ_B/dt**, with Φ_B = BA cos θ in weber (Wb = T·m²).
- **Lenz's law:** the induced current opposes the change that causes it (energy conservation).
- AC generator: ε = NBAω sin ωt. Motional emf: ε = BLv. Transformer: Vs/Vp = Ns/Np (AC only).
- ✍ **Example:** 100 turns, flux falls 0.02 Wb → 0 in 0.1 s: ε = **20 V**.

## 7. Maxwell's equations (1865)

| # | Law | Integral form | Meaning |
|---|---|---|---|
| 1 | Gauss (E) | ∮E·dA = q/ε₀ | charges create E |
| 2 | Gauss (B) | ∮B·dA = 0 | no magnetic monopoles |
| 3 | Faraday | ∮E·dl = −dΦ_B/dt | changing B creates E |
| 4 | Ampère–Maxwell | ∮B·dl = μ₀I + μ₀ε₀ dΦ_E/dt | current and changing E create B |

- Differential forms: ∇·E = ρ/ε₀, ∇·B = 0, ∇×E = −∂B/∂t, ∇×B = μ₀J + μ₀ε₀ ∂E/∂t.
- **Displacement current** I_d = ε₀ dΦ_E/dt was Maxwell's addition. It covers the gap of a charging capacitor and makes EM waves possible.
- 💡 **Trick:** the order is G-G-F-A: two divergences, then two curls.

## 8. EM waves and the spectrum
- Predicted by Maxwell, produced by Hertz (1887–88). c = 1/√(μ₀ε₀) = **3 × 10⁸ m/s**.
- Transverse, with E ⟂ B ⟂ direction and E/B = c. They need no medium.
- Spectrum in order of increasing frequency: Radio (> 1 m), Microwave (1 mm–1 m: Wi-Fi 2.4/5 GHz, mobile, radar), Infrared (700 nm–1 mm: remotes; fibre uses 1310/1550 nm), **Visible (400–700 nm)**, UV (10–400 nm), X-ray (0.01–10 nm), Gamma (< 0.01 nm).
- 💡 **Trick:** "Raging Martians Invaded Venus Using X-ray Guns".
- ⚠ **Trap:** all EM waves travel at the same c in vacuum. Sound is not an EM wave.

## 9. Oscillations and SHM
- **SHM:** F = −kx, so a = −ω²x. x = A sin(ωt + φ), f = 1/T, ω = 2πf.
- v = ω√(A² − x²). v_max = Aω (at the mean position). a_max = Aω² (at the extremes). E = ½kA².
- Spring–mass: T = 2π√(m/k). Pendulum: T = 2π√(L/g), independent of mass and amplitude. LC circuit: f = 1/2π√(LC).
- **Resonance:** when the driving frequency equals the natural frequency, amplitude is maximum (e.g. radio tuning).
- ⚠ **Trap:** on the Moon a pendulum's T grows by √6 ≈ 2.45×. Doubling the mass changes nothing. Making L four times longer doubles T.
- ✍ **Example:** k = 100 N/m and m = 1 kg give ω = 10 rad/s and T ≈ 0.63 s.

## 10. Waves and the wave equation
- Waves carry energy, not matter. Mechanical waves need a medium; EM waves do not.
- Transverse waves can be polarised. Longitudinal waves (sound in air) cannot.
- v = fλ, k = 2π/λ, v = ω/k, y = A sin(kx − ωt). On a string, v = √(T/μ).
- **Wave equation:** ∂²y/∂x² = (1/v²) ∂²y/∂t². Any f(x − vt) is a solution.
- Sound in air ≈ **343 m/s** at 20 °C. Audible range **20 Hz – 20 kHz**. Intensity ∝ A².
- Standing waves: nodes are λ/2 apart. Beats: f = |f₁ − f₂|.
- ⚠ **Trap:** frequency does not change when a wave enters a new medium.
- ✍ **IT link:** Wi-Fi at 2.4 GHz has λ = 12.5 cm. FM at 100 MHz has λ = 3 m.

## 11. Special relativity (Einstein 1905)
- **Postulates:** (1) physics is the same in every inertial frame; (2) c is the same for all observers. Michelson–Morley (1887) found no ether.
- γ = 1/√(1 − v²/c²) ≥ 1.
- Time dilation: Δt = γΔt₀. Length contraction: L = L₀/γ. Mass: m = γm₀. **E = mc²**. Energy–momentum: E² = (pc)² + (m₀c²)².
- γ values: 0.6c → 1.25, 0.8c → 1.67, 0.866c → 2, 0.99c → 7.09.
- ✍ **Muon:** a lifetime of 2.2 μs at rest becomes about 15.6 μs at 0.99c.
- ✍ **Mass–energy:** 1 g of mass is equivalent to 9 × 10¹³ J.
- ⚠ **Trap:** nothing with mass reaches c. Velocity addition u = (u′+v)/(1+u′v/c²) gives c + anything = c. Charge is invariant with speed.
- **IT link:** GPS clocks need relativity corrections of about 38 μs/day.

## 12. Quantum theory of light
- A photon has energy E = hf = hc/λ, momentum p = h/λ, and zero rest mass.
- h = **6.626 × 10⁻³⁴ J·s**. Shortcut: **hc = 1240 eV·nm**, so a 620 nm photon carries 2 eV.
- Duality: interference and diffraction show the wave nature. The photoelectric and Compton effects show the particle nature.

## 13. Photoelectric effect
- Observed by Hertz (1887), explained by Einstein (1905, Nobel Prize 1921).
- **hf = φ + K_max**, K_max = eV₀, threshold f₀ = φ/h, λ₀ = hc/φ.
- Raising the intensity increases the photocurrent but leaves K_max unchanged. Raising the frequency increases K_max linearly. Below f₀ there is no emission, however bright the light, and emission is instantaneous.
- ⚠ **Trap:** brighter light means more electrons, not faster ones.
- ✍ **Example:** 400 nm light on sodium (φ = 2.3 eV) gives K_max = 0.8 eV and V₀ = 0.8 V.

## 14. X-rays (Röntgen 1895)
- λ ≈ 0.01–10 nm. Produced when fast electrons hit a tungsten target.
- The spectrum has a continuous part (bremsstrahlung) and characteristic lines (Kα, Kβ).
- X-rays are not deflected by E or B fields.
- **λ_min = hc/eV**, i.e. λ_min (nm) = 1240/V. A 30 kV tube gives 0.041 nm.

## 15. X-ray diffraction and Bragg's law
- **2d sin θ = nλ**, where θ is the **glancing angle**. The largest possible λ is 2d.
- History: Laue (1912), the Braggs (1913). Photo 51 (1952) revealed the DNA double helix.
- ✍ **Example:** d = 0.28 nm at θ = 15° gives λ ≈ 0.145 nm.

## 16. Compton effect (1923)
- **Δλ = (h/m_e c)(1 − cos φ)**, with h/m_e c = **2.43 pm**.
- The shift is 2.43 pm at 90° and reaches its maximum of 4.85 pm at 180°.
- It depends only on φ. It proves that photons carry momentum.

## 17. de Broglie waves (1924)
- **λ = h/p = h/mv = h/√(2mK)**.
- For an electron accelerated through V volts, λ = **1.226/√V nm** (≈ 0.123 nm at 100 V).
- Davisson–Germer (1927) confirmed matter waves. Bohr's orbit condition 2πr = nλ follows from them.
- **IT link:** the electron microscope.

## 18. Phase and group velocity
- v_p = ω/k = E/p, which for a matter wave equals c²/v > c and carries no information.
- **v_g = dω/dk = dE/dp = v**, the particle's speed.
- v_p · v_g = c².
- Heisenberg: Δx · Δp ≥ ħ/2.
- ⚠ The seeded app lesson writes v_g = dp/dm. The correct form is **dE/dp**.

## 19. Wave function and Schrödinger equation (1926)
- **|Ψ|²** is the probability density. Ψ must be normalised (∫|Ψ|² dx = 1), single-valued, finite and continuous.
- **Time-dependent:** iħ ∂Ψ/∂t = −(ħ²/2m) ∂²Ψ/∂x² + VΨ.
- **Time-independent:** −(ħ²/2m) d²ψ/dx² + Vψ = Eψ.
- Particle in a 1-D box: E_n = n²h²/8mL². The lowest level is not zero (zero-point energy).
- **IT link:** tunnelling is how NAND flash is programmed and erased.

---

## Constants
| c | e | m_e | m_p | h | ħ |
|---|---|---|---|---|---|
| 3×10⁸ m/s | 1.602×10⁻¹⁹ C | 9.11×10⁻³¹ kg | 1.673×10⁻²⁷ kg | 6.626×10⁻³⁴ J·s | 1.055×10⁻³⁴ J·s |

| k | ε₀ | μ₀ | 1 eV | hc | h/m_e c |
|---|---|---|---|---|---|
| 8.99×10⁹ | 8.854×10⁻¹² | 4π×10⁻⁷ | 1.602×10⁻¹⁹ J | 1240 eV·nm | 2.43 pm |

## Practice MCQs
1. If the distance between two point charges is tripled, the force becomes: (a) F/9 (b) F/3 (c) 3F (d) 9F
2. SI unit of magnetic flux: (a) tesla (b) henry (c) weber (d) gauss
3. Which Maxwell equation rules out magnetic monopoles? (a) ∮E·dA = q/ε₀ (b) ∮E·dl = −dΦ_B/dt (c) ∮B·dl = μ₀I (d) ∮B·dA = 0
4. Wavelength of a 3 GHz microwave: (a) 1 cm (b) 10 cm (c) 1 m (d) 10 m
5. A pendulum's length is made 4 times. Its period becomes: (a) 2T (b) T/2 (c) 4T (d) T
6. Lorentz factor γ at v = 0.8c: (a) 1.25 (b) 2 (c) 1.67 (d) 0.6
7. In the photoelectric effect with f > f₀ fixed, raising the intensity increases: (a) K_max (b) photocurrent (c) V₀ (d) f₀
8. Energy of a 620 nm photon: (a) 1 eV (b) 3 eV (c) 6.2 eV (d) 2 eV
9. The Compton shift is maximum at a scattering angle of: (a) 0° (b) 45° (c) 180° (d) 90°
10. de Broglie λ of an electron accelerated through 100 V: (a) 0.123 nm (b) 0.012 nm (c) 1.23 nm (d) 12.3 nm

**Answer key:** 1-a · 2-c · 3-d · 4-b · 5-a · 6-c · 7-b · 8-d · 9-c · 10-a

## Written question (8 marks)
State Einstein's photoelectric equation. Light of wavelength 300 nm falls on a metal of work function 2.5 eV. Find (i) K_max, (ii) the stopping potential, (iii) the threshold wavelength.

**Model answer:**
1. hf = φ + K_max.
2. E = 1240/300 = 4.13 eV.
3. (i) K_max = 1.63 eV (2.6 × 10⁻¹⁹ J).
4. (ii) V₀ = 1.63 V. (iii) λ₀ = 1240/2.5 = 496 nm.
