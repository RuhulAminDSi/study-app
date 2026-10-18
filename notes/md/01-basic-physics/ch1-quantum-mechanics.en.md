# Quantum Mechanics: De Broglie Waves & Wave Equation — Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-quantum-mechanics.en.html` (handwritten-style PDF: `notes/pdf/ch1-quantum-mechanics.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Basic Physics):** "De Broglie waves, Phase and group velocity, Wave function and wave equation." This note takes that line to university depth: matter-wave scaling, wave packets, Born's rule and normalisation, the Schrödinger equation and separation of variables, the particle in a box, the harmonic oscillator, the hydrogen atom, expectation values, the uncertainty principle and the correspondence principle. Photon momentum p = h/λ and the photoelectric effect are in the Quantum Theory of Light note.

**High-yield:** λ = h/p = h/mv = h/√(2mK) · v_p = ω/k = E/p = c²/v · v_g = dω/dk = dE/dp = v and v_p·v_g = c² · ∫|Ψ|²dV = 1 · iħ ∂Ψ/∂t = ĤΨ · E_n = n²π²ħ²/2mL² · E_n = (n+½)ħω · r_n = n²a₀ and E_n = −13.6/n² eV · Δx·Δp ≥ ħ/2.

---

## 1. de Broglie waves (matter waves)
- Louis de Broglie (**1924**, thesis; Nobel Prize **1937**) inverted Einstein's logic: if light can behave like particles, then **particles behave like waves**.
- **λ = h/p = h/mv = h/√(2mK)** (non-relativistic). h = **6.626 × 10⁻³⁴ J·s** (exact since the 2019 SI redefinition); ħ = h/2π = **1.0546 × 10⁻³⁴ J·s**.
- λ ∝ 1/p: double the mass (same v) → halve λ; double v (same m) → halve λ; double p → halve λ.
- λ_C = h/mc is the de Broglie wavelength of a particle **at rest** (for the electron it is the Compton wavelength, 2.43 pm).

| Situation | λ |
|---|---|
| electron at 1 eV | 1.226 nm |
| electron through 100 V | 0.123 nm = 1.23 Å |
| electron through 10 kV | 0.123 pm |
| 1 MeV proton or neutron | 28.6 fm |
| 5 MeV α-particle | 6.4 fm |
| cricket ball, 0.1 kg at 10 m/s | 6.6 × 10⁻³⁴ m |

- 💡 **Trick:** "big thing → tiny wave". Quantum behaviour shows up only for light or fast objects.
- ⚠ **Trap:** λ = h/p, never hp. λ is in metres only if h is in J·s and p in kg·m/s. Above ≈ 0.1c use p = γmv.
- ✍ **Example 1:** electron at 2.0 × 10⁶ m/s: p = 1.82 × 10⁻²⁴ kg·m/s → λ = **3.64 × 10⁻¹⁰ m = 0.364 nm**.
- ✍ **Example 2:** 1.0 MeV proton: p = √(2mE) = 2.32 × 10⁻²⁰ → λ = **2.86 × 10⁻¹⁴ m = 28.6 fm**.
- A photon also carries p = h/λ, but its rest mass is zero, so p = E/c.

## 2. Phase velocity and group velocity
- A free particle is a **wave packet**: a superposition of many component waves of nearly equal k.

| | Phase velocity v_p | Group velocity v_g |
|---|---|---|
| definition | ω/k = E/p | dω/dk = **dE/dp** |
| free massive particle | c²/v (≥ c) | **= v** (the particle) |
| light in vacuum | c | c |
| dispersive medium | ω/k | signal & information speed |
| carries | **no information** | energy **and** information |

- **v_p·v_g = c² exactly.** From E² = p²c² + m²c⁴: ① v_p = E/p, ② v_g = dE/dp = p²c²/E, ③ product = c². For light m = 0 and E = pc, so both equal c.
- 💡 **Trick:** "one crest is a fiction, the packet is the truth". A lone crest carries no signal, so its speed is unmeasurable and may exceed c.
- ⚠ **Trap:** v_p > c violates nothing. v_g is **dE/dp**, never dp/dm. A packet can never outrun c: the rear would overtake the front.
- ✍ **Example:** electron at 0.8c → v_g = 0.8c = 2.40 × 10⁸ m/s, v_p = c²/(0.8c) = 1.25c = 3.75 × 10⁸ m/s, product 0.8 × 1.25 = 1. γ = 1/0.6 = 1.67, so p = γmv = 3.64 × 10⁻²² kg·m/s and λ = 1.82 pm (using mv alone would wrongly give 3.03 pm).

## 3. The wave function Ψ and Born's rule
- **Ψ(x, y, z, t)** is the complete mathematical description of a state: everything knowable about the particle. Ψ is **complex-valued** and is **not itself measurable**.
- **Born's rule (1926): |Ψ|² is the probability density.** |Ψ|²dV is a probability; |Ψ|² alone is a density.
- **Normalisation: ∫|Ψ|²dτ = 1.**

| Object | Meaning |
|---|---|
| Ψ(x, t) | wave function — complex, unobservable |
| \|Ψ\|² = Ψ\*Ψ | **probability density** (per unit volume) |
| ∫\|Ψ\|²dV | = 1 (exactly one particle) |
| \|Ψ(x, t)\|²dV | probability of finding it in the element dV |
| ψ, E | eigenfunction and eigenvalue of Ĥ |

- Conditions on Ψ: single-valued, finite, continuous; Ψ and ∂Ψ/∂x continuous wherever V is finite; Ψ ≡ 0 is not a state; a measurement leaves Ψ in an eigenstate of the measured quantity; Ψ is linear, so Ψ = c₁Ψ₁ + c₂Ψ₂.
- 💡 **Trick:** "bar the star, then square": |Ψ|² = **Ψ\* × Ψ**, never Ψ × Ψ.
- ⚠ **Trap:** |Ψ|² is a density; a probability needs an integral. Ψ may be complex, so Ψ² can be complex and meaningless.
- ✍ **Example:** normalise ψ = A sin(πx/L) on 0 < x < L: 1 = A²(L/2) ⇒ **A = √(2/L)**, so ψ_n = √(2/L) sin(nπx/L). Probability in the middle half (L/4 < x < 3L/4) = **1/2**.

## 4. The Schrödinger equation
- **1926**, Nobel Prize **1933**. The fundamental law of quantum mechanics — it says how the *state* changes, not where the particle is.
- **Time-dependent (always valid): iħ ∂Ψ/∂t = −(ħ²/2m)∇²Ψ + VΨ = ĤΨ**
- **Time-independent (stationary states, V not time-dependent): −(ħ²/2m)∇²ψ + Vψ = Eψ**
- In 1-D replace ∇² with ∂²/∂x².

| Classically we write… | …in quantum mechanics it becomes the operator… |
|---|---|
| position x · momentum p | x → x · p → −iħ∇ |
| kinetic energy p²/2m | −(ħ²/2m)∇² |
| energy E | E → iħ ∂/∂t |
| total energy H | **Ĥ = −(ħ²/2m)∇² + V** (Hamiltonian) |

**Separation of variables**
1. Put Ψ(x, t) = **ψ(x) T(t)**, substitute, divide through by ψT.
2. The left side depends on t only, the right side on position only ⇒ both equal one constant, −E/ħ.
3. T(t) = e^(−iEt/ħ); since |T| = 1, |Ψ|² = |ψ|² is constant in time.
4. That is a **stationary state**: ψ is the eigenfunction, E the eigenvalue.

- 💡 **Trick:** "replace the word with a hat" — every quantity becomes an operator; the equation then only says energy = Ĥ acting on the state.
- ⚠ **Trap:** the time-independent form is invalid if V depends on time, and it uses lower-case ψ. A stationary state is stationary in probability only.
- ✍ **Example:** free particle, V = 0, ψ = Ae^(ikx) ⇒ −(ħ²/2m)(−k²)ψ = Eψ ⇒ **E = ħ²k²/2m = h²/(2mλ²) = p²/2m**. The Schrödinger equation hands back λ = h/p.

## 5. Particle in a one-dimensional box
- V(x) = ∞ outside and V = 0 for 0 < x < L. Because Ψ must stay finite and the particle is impossible where V = ∞, **ψ(0) = ψ(L) = 0**.

| Quantity | Result |
|---|---|
| normalised eigenfunction | ψ_n(x) = √(2/L) sin(nπx/L) |
| energy eigenvalue | **E_n = n²π²ħ²/2mL² = n²h²/8mL²** |
| allowed n | n = 1, 2, 3 … (never 0); nodes = n − 1 |
| levels in units of E₁ | 1 : 4 : 9 : 16 … |
| momentum | ⟨p⟩ = 0, but ⟨p²⟩ = (nπħ/L)² |

- 💡 **Trick:** a particle in a box is a string fixed at both ends — only 3λ/2, 5λ/2, 7λ/2 … fit, so n starts at 1 and E ∝ n².
- ⚠ **Trap:** E₁ is **not** zero (zero-point energy). ⟨p⟩ = 0 does not mean p = 0; Δp is large.
- ✍ **Example:** electron in a 0.1 nm box: E₁ = **37.6 eV**, E₂ = 150 eV, E₃ = 338 eV, E₄ = 602 eV. A 2 → 1 jump releases 3E₁ = 113 eV ⇒ photon λ = 1240/113 = **11.0 nm** (far UV). Halving L lifts every level fourfold.
- **IT link:** the barrier between two boxes is a **quantum tunnel** — the electron leaks through even when E < V. That is how NAND flash cells are programmed and erased, and how a scanning tunnelling microscope resolves single atoms (current ∝ e^(−2κd), Binnig & Rohrer, Nobel 1986).

## 6. The quantum harmonic oscillator
- V(x) = ½kx² = ½mω²x², ω = √(k/m).
- **E_n = (n + ½)ħω = (n + ½)hf**, n = 0, 1, 2, 3 …
- ψ₀ = (mω/πħ)^(1/4) e^(−mωx²/2ħ), ⟨x⟩₀ = 0, ⟨x²⟩₀ = ħ/(2mω), Δx₀ = √(ħ/2mω).

| | Classical oscillator | Quantum oscillator |
|---|---|---|
| energies | continuous, E = ½kA² | discrete, (n + ½)ħω |
| lowest energy | may be 0 | **½ħω, never 0** |
| spacing | depends on A | constant, ħω |
| width | fixed amplitude A | Δx₀ = √(ħ/2mω) |
| degeneracy (1-D) | — | none: every level is unique |

- 💡 **Trick:** "the box counts from 1, the oscillator counts from 0." n = 0 would give the forbidden ψ ≡ 0 in the box; in the oscillator n = 0 is the real ground state.
- ⚠ **Trap:** the oscillator is never dead still (⟨p⟩ = 0 but ⟨p²⟩ ≠ 0), and its spacing does **not** grow with n.
- ✍ **Example:** a molecular vibration at ω = 5.0 × 10¹⁴ rad/s: ħω = 0.329 eV, so **E₀ = 0.165 eV** and E₁ − E₀ = 0.329 eV lands in the infrared. For an electron in the same field Δx₀ = 0.34 nm — ten atomic diameters.

## 7. The hydrogen atom and Bohr quantisation
- Bohr (**1913**) kept Rutherford's nucleus and forced Planck's quantum on it.
  1. Only orbits with angular momentum an exact multiple of ħ are allowed: **L = m_e v r = nħ**.
  2. In these **stationary orbits** the electron does not radiate; light appears only in jumps between orbits.
- Balancing the electrostatic pull against the centripetal need forces r_n = n²a₀ and E_n = −13.6/n² eV, with a₀ = 4πε₀ħ²/(m_e e²) = **0.529 Å**, α = 1/137, v_n = αc/n so v₁ = **2.19 × 10⁶ m/s**.

| n | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| rₙ/Å | 0.529 | 2.12 | 4.76 | 8.46 |
| Eₙ/eV | **−13.6** | −3.40 | −1.51 | −0.85 |
| L/ħ | 1 | 2 | 3 | 4 |

| Spectral series | n′ | Region | Famous lines |
|---|---|---|---|
| Lyman | 1 | ultraviolet | series limit 91.2 nm |
| Balmer | 2 | **visible** | Hα 656.3, Hβ 486.1, Hγ 434.0, Hδ 410.2 nm |
| Paschen / Brackett | 3 / 4 | infrared | used in IR spectroscopy of hydrogen |

- Rydberg form: 1/λ = R(1/n₁² − 1/n₂²), R = 1.097 × 10⁷ m⁻¹.
- 💡 **Trick:** "two conditions, one spectrum" — the orbit must hold a whole number of de Broglie wavelengths **and** have L = nħ.
- ⚠ **Trap:** **L = nħ is Bohr's, not Schrödinger's.** Real QM gives L² = l(l+1)ħ² with l = 0 … n−1, so the ground state has L = 0 and a circular orbit is impossible. Bohr also cannot explain the relative intensities of the lines.
- Schrödinger's hydrogen has the same energies, but l = 0 … n−1 and m_l = −l … +l, so the n-th shell holds **n² states**: 1s · 2s, 2p · 3s, 3p, 3d …
- ✍ **Example:** Balmer α is the transition n = 3 → n = 2: ΔE = 13.6(1/4 − 1/9) = 13.6 × 5/36 = **1.89 eV** ⇒ λ = 1240/1.89 = **656 nm**, hydrogen's red line. Ionising the ground state needs exactly 13.6 eV.

## 8. Expectation values, uncertainty and correspondence
- **Expectation value: ⟨A⟩ = ∫Ψ\* Â Ψ dτ** — the average over many identically prepared copies. For Ψ = ΣcᵢΨᵢ in an orthonormal set, ⟨A⟩ = Σ|cᵢ|²⟨Aᵢ⟩ᵢ.

| Quantity | Expectation value | Spread (standard deviation) |
|---|---|---|
| position | ⟨x⟩ = ∫Ψ\* x Ψ dτ | Δx = √(⟨x²⟩ − ⟨x⟩²) |
| momentum | ⟨p⟩ = ∫Ψ\* (−iħ∇)Ψ dτ | Δp = √(⟨p²⟩ − ⟨p⟩²) |
| energy | ⟨E⟩ = ∫Ψ\* ĤΨ dτ | ΔE (0 in a stationary state) |

- **Heisenberg uncertainty principle (1927): Δx · Δp ≥ ħ/2.** Equality only for a minimum-uncertainty **Gaussian** packet. x̂ and p̂ do not commute ([x̂, p̂] = iħ), so no state can be an eigenstate of both.
- **Correspondence principle (Bohr, 1920):**

| System | Quantum | Large-n limit |
|---|---|---|
| box | E_n = n²h²/8mL² | ΔE/E = (2n+1)/n² → 0 |
| oscillator | E_n = (n+½)ħω | constant ħω → smooth |
| Bohr H atom | L = nħ, r = n²a₀ | L/ħ → ∞, orbit looks classical |
| tunnelling | T ≈ e^(−2κd) | ħ → 0 ⇒ T → 0 |

- 💡 **Trick:** "you may have it small **or** small — never both." Δx is a length, Δp a momentum; their product is an action (J·s). Put ħ = 0 and you get the classical world back.
- ⚠ **Trap:** the sign is **≥**, and equality is the exception. For the box ground state Δx·Δp ≈ 0.57 ħ, not ħ/2. ΔE·Δt ≥ ħ/2 is the energy–time form and is less rigorous.
- ✍ **Example:** electron in the 0.1 nm box: ⟨x⟩ = L/2 and ⟨x²⟩ = L²(1/3 − 1/2π²) = 0.2827 L², so Δx = √(0.2827 − 0.25)L = 0.181L = 1.81 × 10⁻¹¹ m. Then Δp ≥ ħ/(2Δx) = **2.9 × 10⁻²⁴ kg·m/s**, i.e. Δv ≥ 3.2 × 10⁶ m/s, while the particle's own speed is only √(2E₁/m) = 3.6 × 10⁶ m/s.

---

## Constants
| h | ħ | ħ/2 | a₀ |
|---|---|---|---|
| 6.626 × 10⁻³⁴ J·s | 1.0546 × 10⁻³⁴ J·s | 5.27 × 10⁻³⁵ J·s | 0.529 × 10⁻¹⁰ m |

| E₁(H) | α, v₁ | m_e | 1 eV | hc | e⁻ through V |
|---|---|---|---|---|---|
| −13.6 eV | 1/137, 2.19 × 10⁶ m/s | 9.11 × 10⁻³¹ kg | 1.602 × 10⁻¹⁹ J | 1240 eV·nm | λ(nm) = 1.226/√V |

## Formula sheet
| | |
|---|---|
| λ = h/p = h/mv = h/√(2mK) | λ ∝ 1/p |
| v_p = ω/k = E/p = c²/v | v_g = dω/dk = dE/dp = v |
| v_p·v_g = c² | light in vacuum: both = c |
| \|Ψ\|² = probability density | ∫\|Ψ\|²dτ = 1 |
| iħ ∂Ψ/∂t = ĤΨ | Ĥ = −(ħ²/2m)∇² + V |
| −(ħ²/2m)∇²ψ + Vψ = Eψ | Ψ = ψ e^(−iEt/ħ) |
| p → −iħ∇, E → iħ ∂/∂t | ⟨A⟩ = ∫Ψ\* Â Ψ dτ |
| ψ_n = √(2/L) sin(nπx/L) | E_n = n²π²ħ²/2mL² |
| E_n(osc) = (n+½)ħω | E₀ = ½ħω |
| r_n = n²a₀, E_n = −13.6/n² eV | L = nħ, L² = l(l+1)ħ² |
| Δx · Δp ≥ ħ/2 | [x, p] = iħ |

## Practice MCQs
1. de Broglie λ at 100 V: (a) 1.23 Å (b) 12.3 Å (c) 0.123 Å (d) 123 Å
2. Time-independent Schrödinger eqn needs: (a) V varies in time (b) relativistic Ψ (c) static potential (d) complex Ψ
3. Group velocity, free particle: (a) ω/k (b) the speed v (c) c²/v (d) the speed c
4. −(ħ²/2m)∇² + V is the: (a) Laplacian (b) wave operator (c) Lagrangian (d) Hamiltonian
5. Box ground state, width L: (a) 0 (b) ħ²/2mL² (c) π²ħ²/2mL² (d) 2π²ħ²/2mL²
6. Oscillator zero-point energy: (a) 0 (b) ½ħω (c) ħω (d) 3ħω/2
7. Hydrogen ground state: (a) −13.6 eV (b) +13.6 eV (c) −3.40 eV (d) 0 eV
8. Visible hydrogen series: (a) Lyman (b) Paschen (c) Brackett (d) Balmer
9. Heisenberg position–momentum: (a) ΔxΔp = ħ (b) Δx+Δp ≥ ħ (c) ΔxΔp ≥ ħ/2 (d) ΔxΔp ≤ ħ
10. Quantum → classical when: (a) ħ → ∞ (b) n → ∞ (c) v → c (d) λ → 0

**Answer key:** 1-a · 2-c · 3-b · 4-d · 5-c · 6-b · 7-a · 8-d · 9-c · 10-b

## Written question (8 marks)
An electron is confined to a 1-D infinite well of width 0.5 nm. (i) Write the time-independent Schrödinger equation inside the well and the boundary conditions. (ii) Obtain the normalised wave function and the energy levels. (iii) Find E₁ in eV. (iv) Find the photon wavelength for the transition n = 3 → n = 1.

**Model answer:**
1. **(i)** Inside the well V = 0, so −(ħ²/2m) d²ψ/dx² = Eψ, with **ψ(0) = ψ(L) = 0** (Ψ vanishes where V = ∞). (2)
2. **(ii)** ψ = A sin kx; ψ(L) = 0 forces k = nπ/L, n = 1, 2, 3 … . Normalising: A² L/2 = 1 ⇒ ψ_n = √(2/L) sin(nπx/L), E_n = n²h²/8mL². (2)
3. **(iii)** E₁ = (6.626 × 10⁻³⁴)²/(8 × 9.11 × 10⁻³¹ × 2.5 × 10⁻¹⁹) = 2.41 × 10⁻¹⁹ J = **1.50 eV**. (2)
4. **(iv)** ΔE = E₃ − E₁ = (9 − 1)E₁ = 8 × 1.50 = 12.0 eV, so λ = 1240/12.0 = **103 nm**, far ultraviolet. (2)

## Before the exam ✓
- Convert λ = h/p into nm, Å and fm without slipping a power of ten.
- Explain in one line why v_p > c is not a violation of relativity.
- Write both Schrödinger forms and carry out the separation of variables.
- Derive ψ_n and E_n for the box from ψ(0) = ψ(L) = 0.
- Know E_n for the box, the oscillator and hydrogen by heart.

**Also practise (written):** ① Show v_p·v_g = c² from E² = p²c² + m²c⁴ · ② Derive r_n = n²a₀ from Bohr + Coulomb · ③ Normalise the Gaussian ψ = A e^(−x²/4a²) · ④ Explain the correspondence principle using the box.