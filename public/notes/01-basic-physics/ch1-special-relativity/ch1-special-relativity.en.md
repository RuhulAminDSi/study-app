# Special Relativity: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-special-relativity.en.html` (handwritten-style PDF: `notes/pdf/ch1-special-relativity.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, BSC Officer (IT)). MCQ + written.

**Syllabus coverage (Basic Physics):** charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field; Faraday's law, Maxwell's equations / waves and oscillations / **theory of special relativity** / electromagnetic waves, photoelectric effect, quantum theory of light, X-ray and X-ray diffraction, Compton effect / de Broglie waves, phase and group velocity, wave function and wave equation. This note covers the third line only; photons and the quantum theory of light belong to the Quantum Physics lesson.

**High-yield:** γ = 1/√(1 − v²/c²) and its values at 0.6c / 0.8c · Δt = γΔt₀ (proper time is shortest) · L = L₀/γ along the motion only · relativistic velocity addition · E = γmc² = mc² + K, K = (γ − 1)mc² · E² = p²c² + m₀²c⁴ · Michelson–Morley 1887 and the two postulates of 1905.

---

## 1. Frames, the ether and Michelson–Morley

- **Inertial frame:** one in which Newton's first law holds — a free body moves in a straight line at constant speed. Special relativity compares **only inertial frames**; frames that accelerate are outside the theory.
- Classical (Galilean) mechanics assumes **absolute time and length**: t′ = t, x′ = x − vt. It is correct only while v ≪ c.
- **Michelson–Morley, 1887** (Michelson and Morley, Case School of Applied Science, Cleveland). A beam is split by a beam splitter into two **equal, perpendicular** arms; mirrors return them to recombine at a detector. A stationary luminous ether would make the outward and return legs unequal, so rotating the apparatus should drag the fringe pattern.

| Quantity | Value |
|---|---|
| Predicted fringe shift | ≈ **0.4** fringe |
| Shift actually observed | **< 0.01** fringe |
| Ether drift still allowed | a few km/s at most |
| Conclusion | no ether found |

- Round-trip times with an ether drift v: t∥ = L/(c−v) + L/(c+v) = 2Lc/(c²−v²), t⊥ = 2L/√(c²−v²).
- ⚠ **Trap:** a null result *removes* a hypothesis; it does not prove another. Michelson won the **1907** Nobel Prize in Physics — the first American to do so — for precision optical instruments, not for relativity.
- The same technique is still used: LIGO (gravitational waves) and stepper lithography.

## 2. Einstein's two postulates (1905)

1. **Principle of relativity** — the laws of physics are **identical in every inertial frame**; no closed-laboratory experiment can detect uniform absolute motion.
2. **Constancy of the speed of light** — light in vacuum travels at **c = 3 × 10⁸ m/s** in *every* inertial frame, whatever the motion of the source or of the observer.

| Postulate | Rules out | Forces | Frequent MCQ hook |
|---|---|---|---|
| ① relativity principle | absolute rest, a privileged ether frame | all inertial frames are physically equivalent | Galilean mechanics is the v ≪ c limit |
| ② c invariant | the ether drift of Michelson–Morley | no absolute time; γ finite only for v < c | c is exact in SI since 1983 |

| Class | Galileo / Newton (1642–1727) | Einstein / Lorentz (1905) |
|---|---|---|
| Time | absolute: t′ = t | mixed with space: t′ = γ(t − vx/c²) |
| Length | absolute: x′ = x − vt | mixed with time: x′ = γ(x − vt) |
| Velocity sum | u = u′ + v | u = (u′ + v)/(1 + u′v/c²) |
| Speed limit | none | c |

- Einstein's 1905 paper was *On the Electrodynamics of Moving Bodies*. Maxwell's equations give one speed for light in vacuum and no other, so the ether frame would have been the one frame where the laws were different.
- ✍ Postulate 2 for a source at rest plus postulate 1 gives the **relativistic Doppler shift** for a receding observer: f′ = f√((1−β)/(1+β)).
- ⚠ **Trap:** c is the speed **in vacuum** only. Since **1983** the metre is defined so that **c = 299 792 458 m/s exactly**; in glass, water or air the speed is c/n.
- The **general theory (1915)** differs in one line: it drops the inertial-frame restriction and treats gravitation as curvature of spacetime. That is a separate lesson.

## 3. The Lorentz factor γ

**γ = 1/√(1 − v²/c²) = 1/√(1 − β²)**, with β = v/c.

- Properties: **γ ≥ 1** always; γ = 1 at v = 0; γ → ∞ as v → c; γ ≈ 1 + β²/2 when v ≪ c (the Galilean limit).

| v/c | β² | √(1−β²) | γ | 1/γ |
|---|---|---|---|---|
| 0 | 0 | 1.000 | **1.000** | 1.000 |
| 0.20 | 0.04 | 0.980 | 1.021 | 0.980 |
| 0.40 | 0.16 | 0.917 | 1.091 | 0.917 |
| 0.50 | 0.25 | 0.866 | 1.155 | 0.866 |
| **0.60** | 0.36 | 0.800 | **1.250** | 0.800 |
| **0.80** | 0.64 | 0.600 | **1.667** | 0.600 |
| 0.866 = √3/2 | 0.75 | 0.500 | **2.000** | 0.500 |
| 0.90 | 0.81 | 0.436 | 2.294 | 0.436 |
| 0.99 | 0.9801 | 0.141 | **7.089** | 0.141 |

- Inverse: from γ²(1 − v²/c²) = 1, **v = c√(1 − 1/γ²)**. γ = 2 ⟹ v = c√(3/4) = **0.866c**; γ = 1.25 ⟹ v = 0.60c ✓
- 💡 **Trick:** γ is the number you multiply time by and the number you divide length by. √(1 − v²/c²) is just **1/γ**, never γ.
- ⚠ **Trap:** γ(0.6c) = 1.25, not 1.67. γ can never be below 1. γ → ∞ does not forbid c, it forbids a body with mass *reaching* c.
- LHC protons run at γ ≈ 7 500.

## 4. The Lorentz transformation

- x′ = γ(x − vt)
- t′ = γ(t − vx/c²)
- y′ = y, z′ = z
- Inverse: x = γ(x′ + vt′), t = γ(t′ + vx′/c²)

| Quantity | Frame-dependent? | Frame-invariant |
|---|---|---|
| Time, length, momentum | yes — γΔt₀ · L₀/γ · γm₀v | **c**, the interval c²t² − x² − y² − z², **rest mass m₀**, **rest energy m₀c²**, **charge**, and the causal order of timelike events |
| Energy | yes — γm₀c² | as above |

✍ **Derivation sketch (why the coefficients must be γ):**
1. Space and time are homogeneous, so the transform is linear: x′ = a(x − vt), t′ = b(t − k·v·x).
2. Postulate 2 for the ray x = ct, which must also have x′ = ct′: a(c−v) = b(c − kvc) ⟹ **a = b** and **k = 1/c²**.
3. The transform for −v must be the **inverse** of the one for +v; with a = b = A this gives A²(1 − v²/c²) = 1, so **A = γ**.

## 5. Relativistic velocity addition

**u = (u′ + v)/(1 + u′v/c²)** for an object moving at u′ in S′ while S′ moves at v in S. Putting u′ = c returns u = c exactly, so c is the ceiling of every speed.

- ✍ Two ships each seeing the other at 0.6c in the same direction: u = (0.6c + 0.6c)/(1 + 0.36) = **0.882c**, not 1.2c.
- ✍ Two bodies receding at 0.8c and 0.6c relative to Earth: u = (0.8c + 0.6c)/(1 + 0.8 × 0.6) = **0.946c**.
- 💡 **Trick:** "γ in, γ out" — every relativistic formula is the Newtonian one times γ (time, momentum, energy) or divided by γ (length). The velocity sum is the exception.
- ⚠ **Trap:** Galilean addition u = u′ + v is wrong except in the v ≪ c limit; the two agree there because u′v/c² → 0.

## 6. Time dilation Δt′ = γΔt

- Two events at the **same place in one inertial frame** are separated there by the **proper time Δt₀** — the interval read by one clock present at both. Every other inertial frame measures a longer interval: **Δt′ = γΔt₀**, and always Δt′ ≥ Δt₀.
- Some books write Δt = γΔt₀ and others Δt′ = γΔt — same physics, just check which symbol carries the proper time.

✍ **Derivation A, the light clock:**
1. Own frame S′: straight up and down, so Δt₀ = 2L₀/c.
2. Lab S: each leg is the hypotenuse of a right triangle with legs L₀ and vΔt/2.
3. cΔt/2 = √(L₀² + v²Δt²/4) ⟹ Δt²(c² − v²) = 4L₀² ⟹ **Δt = γΔt₀**.

✍ **Derivation B, straight from the Lorentz transform:**
1. Both ticks are at the same place in S′, so Δx′ = γ(Δx + vΔt′) = 0 ⟹ Δx = −vΔt′.
2. Δt′ = γ(Δt − vΔx/c²) = γΔt(1 − v²/c²) = Δt/γ ⟹ **Δt = γΔt′**.

| v | γ | 1.00 s proper time | lab path of a 2.2 μs muon |
|---|---|---|---|
| 0.6c | 1.25 | 1.25 s | — |
| 0.8c | 5/3 | 1.667 s | 3.67 μs, 880 m |
| 0.998c | 15.8 | 15.8 s | 34.8 μs, ≈ 10.4 km |

- Muons born high in the atmosphere reach the ground. At 0.8c the lab lifetime is (5/3)(2.2 μs) = **3.67 μs** and the lab path is 0.8c × 3.67 μs = **880 m**; in the muon's own frame the path is only 528 m.
- **Hafele–Keating (1971):** four caesium clocks flown round the world came back shifted by exactly the amount γ and the difference in gravitational potential predict.
- **GPS:** satellite clocks tick faster (weaker gravity) and slower (v ≈ 3.9 km/s), a **net gain of ≈ 38 μs per day**; uncorrected a receiver drifts ≈ 10 km/day.
- 💡 **Trick:** "**Proper time is the shortest time.**" One clock in one place always reads the smallest interval; every other frame over-measures it, because γ ≥ 1.
- ⚠ **Trap:** both observers see the other's clock run slow — no contradiction, they are in *different* inertial frames. Only when one twin **turns round** (accelerates, changes frames) do the readings differ, and then the stay-at-home twin is **older**.

## 7. Length contraction L′ = L/γ

**L = L₀√(1 − v²/c²) = L₀/γ**, where L₀ is the proper (rest) length. Only the component **parallel to the motion** contracts; transverse dimensions are unchanged.

| v | 0.20c | 0.50c | 0.60c | 0.80c | 0.866c | 0.90c | 0.99c |
|---|---|---|---|---|---|---|---|
| γ | 1.021 | 1.155 | 1.25 | 1.667 | 2.000 | 2.294 | 7.089 |
| L/L₀ = √(1−β²) | 0.980 | 0.866 | **0.800** | **0.600** | 0.500 | 0.436 | 0.141 |

✍ **Derivation (one line):** the rod is at rest in S′, so its ends differ by Δx′ = L₀. In S both end positions must be recorded at the **same instant**, Δt = 0, so the time term vanishes and x′₂ − x′₁ = γ(x₂ − x₁) = γL. Hence **L₀ = γL ⟹ L = L₀/γ**.

- ✍ A spaceship of proper length 120 m passes Earth at 0.8c (γ = 5/3): L = 120 × 0.6 = **72 m**, while its height and width are unchanged.
- ✍ The LHC ring is 27.4 km long in the laboratory frame; protons at γ ≈ 7 500 see their own orbit as only 27.4 km / 7 500 ≈ **3.7 m** of proper circumference.
- 💡 **Trick:** "γ divides length, γ multiplies time, and it only touches the **along-motion** direction." Read 1/γ straight off the γ table.
- ⚠ **Trap:** contraction is *not* an optical illusion of light arriving late — it survives unlimited resolution. It is *not* perpendicular to the motion. The **proper** length L₀ is what the object itself measures. Only **inertial** observers can quote L = L₀/γ.

## 8. Relativity of simultaneity, spacetime and the light cone

- Two events simultaneous in one frame (Δt = 0) are **not** simultaneous in a frame moving along the line joining them: **Δt′ = −γvΔx/c² ≠ 0**. Their order is therefore relative.
- Spacetime is the single 4-dimensional entity (x, y, z, t); Minkowski (1908) showed its geometry is not Euclidean.

| Separation | Δs² = c²Δt² − Δx² − Δy² − Δz² | All frames must agree that |
|---|---|---|
| **Timelike** (Δx < cΔt) | > 0 | the cause comes first |
| **Null / lightlike** (Δx = cΔt) | = 0 | only light does this |
| **Spacelike** (Δx > cΔt) | < 0 | order **can** differ; no signal connects them |

- ✍ Two flashes 1 000 km apart along a rail are simultaneous for an observer S at the front, so Δt = 0, Δx = 1 000 km. A train passes at v = 0.6c (γ = 1.25): Δt′ = −(1.25)(0.6c)(1.0 × 10⁶ m)/c² = **−2.5 ms**. The rear flash happens 2.5 ms *earlier* in the train frame.
- 💡 **Trick:** "Set **Δt = 0** in the transform and simultaneity splits." A pair of events one frame calls simultaneous gains a gap γvΔx/c² in the other frame.
- ⚠ **Trap:** simultaneity is relative only for events separated **along** the relative motion; events side by side still agree (Δx = 0 ⟹ Δt′ = 0). The twin paradox is *not* a violation — the traveller's worldline is not a straight line, so it does not carry the longest proper time.
- **IT link:** two datacentres call different events "simultaneous" — the same problem. Light cones become wall diagrams, latency budgets become Δt, and the speed of the medium (fibre, ≈ 2 × 10⁸ m/s) plays the part of c. Ordering guarantees — clocks plus synchronisation, or Lamport's happens-before — are the engineering answer.

## 9. Relativistic mass, energy and momentum

| Quantity | Formula | Notes |
|---|---|---|
| Mass: rest m₀, relativistic m | m₀ · γm₀ | m₀ is invariant; m → ∞ as v → c |
| Rest energy E₀ | **m₀c²** | 1 g → 9 × 10¹³ J |
| Total energy E | **γm₀c²** | = mc² with m = γm₀ |
| Kinetic energy K | **(γ − 1)m₀c²** | K/E = 1 − 1/γ = 1 − √(1−β²) |
| Momentum p | γm₀v | = mv only if v ≪ c |
| Mass–energy relation | E² = p²c² + m₀²c⁴ | photon: m₀ = 0 ⟹ E = pc |

| v | γ | m/m₀ | K/(m₀c²) | E/(m₀c²) | K/E | L/L₀ | Δt/Δt₀ |
|---|---|---|---|---|---|---|---|
| 0.6c | 1.25 | 1.25 | 0.25 | 1.25 | 0.20 | 0.800 | 1.25 |
| 0.8c | 5/3 = 1.67 | 1.67 | 0.667 | 1.67 | 0.40 | 0.600 | 1.67 |

- **E = γmc² = mc² + K**: the total energy is the rest energy plus the kinetic energy.
- ✍ **Electron at 0.8c** (m₀ = 9.11 × 10⁻³¹ kg, m₀c² = 0.511 MeV, γ = 5/3): E = **0.852 MeV**, K = **0.341 MeV**, m = **1.52 × 10⁻³⁰ kg**, p = **3.64 × 10⁻²² kg·m/s**.
- ✍ **Proton at 0.6c** (m₀ = 1.673 × 10⁻²⁷ kg, m₀c² = 938.3 MeV, γ = 1.25): E = **1173 MeV** = 1.88 × 10⁻¹⁰ J, K = **234.6 MeV**, p = **3.76 × 10⁻¹⁹ kg·m/s**.
- ✍ **Bulk:** 1 g fully released gives E = 10⁻³ × (3 × 10⁸)² = **9 × 10¹³ J** ≈ 21 500 t of TNT, about 1.4 times the 1945 Hiroshima yield. One U-235 fission, ≈ 200 MeV, has a mass defect of 200/931.5 u = 0.215 u.
- 💡 **Trick:** "**E is the whole bar, K is the extra bit on top.**" At 0.6c a quarter of the rest energy has been added (20 % of the total); at 0.8c two thirds has (40 % of the total). Never write K = γmc².
- ⚠ **Trap:** E = mc² is the **total** energy only when m means γm₀; with the modern invariant mass m₀ it reads E = γm₀c². "Mass increases with speed" is the old relativistic-mass language. Charge and **m₀** never change with speed.
- **Applications:** nuclear reactors and weapons · PET imaging (e⁻ + e⁺ → two 511 keV γ rays) · smoke detectors (²⁴¹Am α) · the LHC: two 7 TeV protons meet at 14 TeV · γ-ray astronomy, p = E/c.

---

## Practice MCQs
1. Speed of light in vacuum, for all frames: (a) set by the source (b) larger when closing (c) same for all frames (d) varies with the frame
2. The Lorentz factor at v = 0.8c is: (a) 5/3 = 1.67 (b) 1.25 (c) 0.60 (d) 1/3
3. γ = 2 corresponds to a speed of: (a) 0.50c (b) 0.99c (c) 0.866c (d) 0.75c
4. Proper length 400 m at 0.8c. Length seen: (a) 667 m (b) 240 m (c) 480 m (d) 400 m
5. A light clock ticks 2.00 s apart. At 0.6c: (a) 1.60 s (b) 2.00 s (c) 3.20 s (d) 2.50 s
6. The energy equivalent of 1 g of mass is: (a) 9 × 10¹³ J (b) 9 × 10¹⁶ J (c) 3 × 10⁵ J (d) 9 × 10¹⁰ J
7. Two ships at 0.6c each, same direction: (a) 1.20c (b) 0.60c (c) 0.75c (d) 0.882c
8. Einstein published the special theory of relativity in: (a) 1901 (b) 1915 (c) 1905 (d) 1921
9. The Michelson–Morley experiment (1887): (a) shift proving ether (b) no shift at all (c) light slows in water (d) c varies with speed
10. Total energy with Lorentz factor γ (E₀ = m₀c²): (a) (γ − 1)E₀ (b) E₀ (c) E₀/γ (d) γE₀

**Answer key:** 1-c · 2-a · 3-c · 4-b · 5-d · 6-a · 7-d · 8-c · 9-b · 10-d

## Written question (10 marks)
State Einstein's two postulates. Using the Lorentz transformation, derive time dilation for a clock moving at v = 0.8c, and find the length of a 200 m rod moving along its length at 0.8c.

**Model answer:**
1. **Postulates (3 marks):** P1 — the laws of physics are identical in every inertial frame. P2 — light in vacuum travels at c for every inertial observer, whatever the source or the observer does.
2. **Lorentz transform (2 marks):** x′ = γ(x − vt), t′ = γ(t − vx/c²), with γ = 1/√(1 − v²/c²).
3. **Time dilation (3 marks):** both ticks are at one place in the clock's frame, so Δx′ = 0 and Δx = −vΔt′; then Δt′ = γ(Δt − vΔx/c²) = γΔt(1 − v²/c²) = Δt/γ, i.e. **Δt = γΔt′**.
4. **Numbers (1 mark):** at v = 0.8c, γ = 1/√0.36 = 5/3, so 3.00 s on the clock measures 5.00 s in the lab.
5. **Length (1 mark):** read both ends at one instant of the measuring frame, Δt = 0, so Δx′ = γΔx = L₀ and **L = L₀/γ = 200/(5/3) = 120 m**, contracted only along the motion.

## Night-before one-liners
Special relativity: Einstein, **1905** · Michelson–Morley ether test: **1887** · Michelson: Nobel Prize in Physics, **1907** · γ ≥ 1, γ = 1 only at v = 0 · γ(0.6c) = 1.25, γ(0.8c) = 1.667, γ(0.866c) = 2, γ(0.99c) = 7.09 · proper time is the **shortest** interval · contraction is only along the motion · simultaneity is relative along the motion · timelike events keep their order in every frame · nothing with mass reaches c · K = (γ − 1)m₀c², never γm₀c² · photon: m₀ = 0 and E = pc · 1 g → 9 × 10¹³ J · 1 eV = 1.602 × 10⁻¹⁹ J.