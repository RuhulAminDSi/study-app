# Waves and Oscillations: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/ch1-waves-oscillations.en.html` (handwritten-style PDF: `notes/pdf/ch1-waves-oscillations.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC / Bangladesh Bank Assistant Programmer, Officer (IT)). MCQ + written.

**Syllabus coverage (Basic Physics):** "Basic elements: charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field; Faraday's law, Maxwell's equations / **waves and oscillations** / theory of special relativity / electromagnetic waves, photoelectric effect, quantum theory of light, X-ray and X-ray diffraction, Compton effect / de Broglie waves, phase and group velocity, wave function and wave equation."

This note covers that "waves and oscillations" line in full: oscillation and SHM, pendulum and spring-mass systems, damping, forcing and resonance, the wave equation, superposition and beats, standing waves and harmonics, and the Doppler effect. EM-wave properties and the spectrum are in the Quantum & EM Waves lesson.

**High-yield:** F = −kx ⇒ a = −ω²x · x = A sin(ωt + φ) · E = ½kA² · T = 2π√(m/k) and 2π√(L/g) · resonance when driving f = natural f · v = fλ = ω/k, k = 2π/λ · f_beat = |f₁ − f₂| · closed pipe = odd harmonics only · approach ⇒ higher frequency.

---

## 1. Oscillation and simple harmonic motion
- **Oscillation:** a repetitive to-and-fro motion of a body about a fixed **mean (equilibrium) position**, repeating after a fixed time. Examples: pendulum, mass on a spring, tuning fork, AC current.

| Type | What happens | Example |
|---|---|---|
| Free / natural | no external force | pendulum in air |
| Damped | amplitude **falls** | shock absorber |
| Forced | external periodic force | radio set |
| Undamped | amplitude **constant** | ideal spring |
| Periodic | repeats after T | all of the above |
| SHM | a ∝ −x, **constant A** | spring, pendulum (small θ) |

- **SHM:** the restoring force is directly proportional to the displacement and directed toward the mean position — **F = −kx**. Since F = ma, **a = −ω²x**, with ω² = k/m.

| Quantity | Meaning | Formula / unit |
|---|---|---|
| Amplitude A | maximum displacement | m |
| Period T | time of one complete oscillation | s |
| Frequency f | oscillations per second | f = 1/T, **hertz (Hz) = s⁻¹** |
| Angular frequency ω | angular version of f | ω = 2πf = 2π/T (rad s⁻¹) |
| Phase φ | starting position and direction | rad, one full oscillation = 2π rad = 360° |

- ⚠ **Trap:** amplitude A is a **displacement**, never the distance travelled — one complete oscillation covers **4A**. Strictly, SHM needs a constant amplitude, so a damped pendulum is not in SHM.
- 💡 **Trick:** "**M**ean = **M**ax speed, **E**xtreme = **M**ax acceleration" — at x = 0 the speed is maximum and a = 0; at x = ±A the speed is zero and a is maximum.
- ✍ **Example:** 20 oscillations in 8 s ⇒ f = 2.5 Hz, T = 0.4 s, ω = 2πf = 5π ≈ 15.7 rad s⁻¹. With A = 4 cm, three oscillations cover 3 × 4A = **48 cm**.

## 2. Equations of motion and energy in SHM
- The three equations (derive them, don't memorise blind):
  - **x = A sin(ωt + φ)**
  - **v = dx/dt = Aω cos(ωt + φ)**
  - **a = dv/dt = −ω²x = −Aω² sin(ωt + φ)**
- Eliminating t: **v² = ω²(A² − x²)** ⇒ v = ω√(A² − x²).

| Position | Velocity | Acceleration | Energy state |
|---|---|---|---|
| x = 0 (mean) | **v_max = Aω** | a = 0 | KE maximum, PE = 0 |
| x = ±A (extreme) | v = 0 | **\|a\| = Aω²** | PE maximum, KE = 0 |

- **Energy:** KE = ½mv² = ½mω²(A² − x²), PE = ½kx² = ½mω²x², so the total **E = ½kA² = ½mω²A²** is constant.
- Energy is *exchanged* between KE and PE; each reaches its maximum **twice** per oscillation. Energy ∝ **A²**: double the amplitude ⇒ four times the energy.

| x | 0 | A/2 | 0 | −A/2 | 0 | A | 0 |
|---|---|---|---|---|---|---|---|
| KE / E | 1 | ¾ | 1 | ¾ | 1 | 0 | 1 |
| PE / E | 0 | ¼ | 0 | ¼ | 0 | 1 | 0 |

- 💡 **Trick:** force is **R**estoring and **P**roportional — hence the minus sign. "**KE** at the **C**entre, **PE** at the **E**nds."
- ⚠ **Trap:** at the extremes the speed is zero but the acceleration is **maximum**. ½kA² is the *total* energy; ½kA and kA² are both wrong.
- ✍ **Example:** A = 0.02 m, f = 5 Hz ⇒ ω = 10π ≈ 31.4 rad/s; v_max = Aω = 0.63 m s⁻¹; a_max = Aω² = 19.7 m s⁻². At x = A/2, v = ω√(A² − x²) = 0.54 m s⁻¹.
- **IT link:** a phone accelerometer is a tiny mass–spring oscillator — it measures **a** from x. A vibration tool picks the fundamental and its harmonics out of the FFT of the x–t trace.

## 3. Two systems you must know
### (a) Mass on a spring
- Hooke's law **F = −kx** (k in N m⁻¹) ⇒ a = −(k/m)x ⇒ **ω = √(k/m)**, **T = 2π√(m/k)**, f = (1/2π)√(k/m).
- Independent of **g** and of amplitude. Soft spring (small k) ⇒ slower; heavy mass ⇒ slower.

### (b) Simple pendulum
- Restoring force **F = −mg sinθ ≈ −mgθ** for small θ (< 10°), and x ≈ Lθ ⇒ a = −(g/L)x ⇒ **ω = √(g/L)**, **T = 2π√(L/g)**.
- Independent of the **bob's mass**. A larger amplitude makes T slightly larger: T ≈ T₀(1 + θ₀²/16), θ₀ in radians.

| Feature | Spring–mass | Simple pendulum |
|---|---|---|
| Restoring force | −kx | −mgθ |
| Period | **2π√(m/k)** | **2π√(L/g)** |
| Depends on | m, k only | L, g only |
| Not dependent on | g, amplitude | bob's mass, amplitude |
| Increase m | T ↑ by √m | **no change** |
| Increase L | — | T ↑ by √L |
| On the Moon | **no change** | T ↑ by √6 ≈ 2.45 |

- ⚠ **Trap:** a pendulum's T never contains the bob's mass and a spring–mass period never contains g, so the same spring–mass keeps its period on Earth and on the Moon. Making a pendulum 4× longer **doubles** T — it does not quadruple it.
- ✍ **Examples:** m = 0.5 kg, k = 200 N/m ⇒ ω = √400 = 20 rad/s, T = 2π/20 = **0.314 s**, f ≈ 3.2 Hz. Pendulum L = 1 m, g = 9.8 ⇒ T = **2.01 s**; L four times ⇒ T = 2T. Pendulum on the Moon ⇒ T ≈ 2.45T. k = 800 N/m, m = 0.2 kg ⇒ f = (1/2π)√4000 = **10.1 Hz**.

## 4. Damped, forced oscillation and resonance
- **Damped oscillation:** a force opposite to the velocity (friction, air drag) leaks energy as heat: **mx″ + bx′ + kx = 0** and the amplitude falls as **A = A₀e^(−bt/2m)**. The **period is unchanged**.

| Damping | Where the energy goes |
|---|---|
| Viscous / air | fluid friction → heat |
| Coulomb (dry) | constant force, **linear** fall |
| Electromagnetic | eddy currents → Joule heat |

- **Forced oscillation:** an external periodic force F₀ cos ωt drives the system: **mx″ + bx′ + kx = F₀ cos ωt**. In the steady state the body moves at the *driving* frequency, with amplitude A(ω) = (F₀/m)/√[(ω₀² − ω²)² + (bω/m)²].
- **Resonance:** the amplitude is **maximum when the driving frequency equals the natural frequency**, ω = ω₀ = √(k/m). There the force **lags the displacement by π/2**, so force is in phase with velocity and energy is pumped in fastest.
- **Sharpness:** Q = ω₀m/b. Large Q (little damping) ⇒ tall, narrow peak; small Q ⇒ broad, flat curve. Used in radio/TV tuning, the resonance column, MRI and organ pipes. Danger: bridge resonance, marching soldiers, tall buildings in an earthquake.
- 💡 **Trick:** "Damaged = amplitude **d**ies, period **l**ives." The resonant peak ⇔ energy in per cycle = energy lost per cycle.
- ⚠ **Trap:** resonance means **matching frequencies**, not "always loud"; a big amplitude needs low damping. With damping the amplitude peak sits slightly *below* f₀.
- ✍ **Example:** ω₀ = 20 rad/s. Driven at 20 rad/s ⇒ resonance. At 40 rad/s with negligible damping, A ∝ 1/(ω₀² − ω²) = 1/(ω₀² − 4ω₀²) ⇒ **one third** of the resonant amplitude. Q = ω₀m/b = 20 × 0.5/2 = **5**.

## 5. Wave motion and the wave equation
- **Wave:** a travelling disturbance that **transfers energy without transferring matter** — the particles of the medium oscillate about their own mean positions while the pattern moves on.
- **Wave equation:** **y(x, t) = A sin(kx − ωt + φ)** (A cos is equally valid; the sign only fixes the direction of travel).
- Differential form: **∂²y/∂x² = (1/v²) ∂²y/∂t²**.

| Symbol | Meaning |
|---|---|
| A | amplitude (m) |
| λ | wavelength (m) |
| k = 2π/λ | **wave number** (rad m⁻¹) |
| ω = 2πf | angular frequency (rad s⁻¹) |
| f = 1/T | frequency (Hz) |
| v = fλ = ω/k | wave speed (m s⁻¹) |
| Δφ = 2πΔx/λ = 2πfΔt | phase difference |

| Type | Examples | Key fact | Type | Examples | Key fact |
|---|---|---|---|---|---|
| Mechanical | sound, water, string | needs a **medium** | Transverse | string, light, surface | can be **polarised** |
| Electromagnetic | light, radio, X-ray | travels in **vacuum** | Longitudinal | sound in air, spring | never polarised |

- **Speed:** string v = √(F/μ) · fluid v = √(B/ρ) · solid rod v = √(Y/ρ). Order **v_solid > v_liquid > v_gas**; sound in air ≈ 331 m/s at 0 °C and 343 m/s at 20 °C; EM waves in vacuum 3 × 10⁸ m/s.
- ⚠ **Trap:** a wave crossing into a new medium keeps the **same frequency** — only v and λ change (v ∝ λ). Energy ∝ **A²**: double A ⇒ 4× the power. Sound is mechanical, so there is **no sound in a vacuum**.
- 💡 **Trick:** "Go **F**rom a **C**rest to the next **C**rest" and λ is done — one full oscillation of every point of the medium. k = 2π/λ is a wave number in rad m⁻¹, not a frequency.
- ✍ **Example:** f = 500 Hz, λ = 0.68 m ⇒ v = fλ = **340 m s⁻¹**. In water (v = 1500 m s⁻¹) the frequency stays 500 Hz, so λ = 3 m. Wi-Fi 2.4 GHz: λ = c/f = 12.5 cm — routers use λ/2 or λ/4 antennas.

## 6. Superposition, interference and beats
- **Principle of superposition:** the resultant displacement is the **algebraic sum** of the individual displacements; the waves pass through each other unchanged.

| Case | Path difference Δ | Phase difference | Result |
|---|---|---|---|
| Constructive (in phase) | nλ | 2nπ | amplitude **maximum** |
| Destructive (out of phase) | (n + ½)λ | (2n + 1)π | amplitude **minimum** — zero if A₁ = A₂ |

- **Beats:** two waves of equal amplitude and very nearly equal frequency superpose; the sum is a fast vibration inside a slow swelling and shrinking envelope, heard as loud → soft → loud.
- y = 2A cos[π(f₁ − f₂)t] · cos[π(f₁ + f₂)t] ⇒ **f_beat = |f₁ − f₂|**, interval between beats = 1/f_beat.
- Beats are distinct only for a small difference (roughly < 20 Hz); f₁ = f₂ gives **no** beats, one steady tone. Uses: detecting an inaudible frequency by beating it with a known one, calibrating a tuning fork, tuning by beat notes.
- 💡 **Trick:** the **beat** frequency is the difference; the **note** you hear is the average — f_note = (f₁ + f₂)/2, f_beat = |f₁ − f₂|.
- ⚠ **Trap:** f_beat is **not** the average and **not** a signed difference — always take the absolute value.
- ✍ **Example:** forks of 440 Hz and 444 Hz ⇒ f_beat = **4 Hz**, interval 0.25 s, 40 beats in 10 s, average pitch 442 Hz. A 1000 Hz fork beats 4 times per second with an unknown tone ⇒ that tone is 1004 Hz.
- **IT link:** two nearby Wi-Fi access points on one channel beat against each other (interference → dropouts); superheterodyne radios deliberately mix two frequencies and listen to the difference (beat) frequency.

## 7. Standing waves, nodes and harmonics
- **Standing wave:** two identical waves travelling in **opposite** directions superpose: A sin(kx − ωt) + A sin(kx + ωt) = **2A sin kx cos ωt**. The pattern no longer travels, so no energy is transferred along it.

| Point | Displacement | Amplitude |
|---|---|---|
| **Node** | always zero | 0 |
| **Antinode** | oscillates fully | maximum = 2A |
| Node → node | — | **λ/2** |
| Node → next antinode | — | **λ/4** |

| System | Ends | Allowed frequencies | Harmonics |
|---|---|---|---|
| String fixed at both ends | node, node | fₙ = nv/2L | all (n = 1, 2, 3 …); nodes = n + 1, antinodes = n |
| Pipe open at both ends | antinode, antinode | fₙ = nv/2L | all; antinodes = n, nodes = n − 1 |
| Pipe closed at one end | node, antinode | fₙ = (2n − 1)v/4L | **odd only** (f, 3f, 5f) |

| System | Fundamental | 2nd harmonic | 3rd harmonic | Ratio | 1st overtone is the |
|---|---|---|---|---|---|
| String (both ends fixed) | v/2L | 2v/2L | 3v/2L | 1 : 2 : 3 | 2nd harmonic |
| Open pipe | v/2L | 2v/2L | 3v/2L | 1 : 2 : 3 | 2nd harmonic |
| Closed pipe | v/4L | **absent** | 3v/4L | 1 : 3 : 5 | **3rd harmonic** |

- 💡 **Trick:** "**O**pen = all **O**rders allowed (1, 2, 3); **C**losed = **C**ount only the odds (1, 3, 5)." So a closed pipe's first overtone needs **3L**, not 2L.
- ⚠ **Trap:** node to node is **λ/2**, not λ. Both ends of a fixed string are nodes; both ends of an open pipe are antinodes. Standing waves carry no net energy along the medium.
- ✍ **Example:** string L = 2 m, μ = 0.5 kg m⁻¹, F = 200 N ⇒ v = √(F/μ) = **20 m s⁻¹**; f₁ = v/2L = **5 Hz**; f₃ = 3f₁ = **15 Hz** (λ₃ = 2L/3 = 1.33 m, with 4 nodes and 3 antinodes). Closed pipe L = 0.25 m, v = 340 ⇒ f₁ = v/4L = 340 Hz, first overtone 1020 Hz.

## 8. The Doppler effect
- The apparent change in **frequency** (and hence pitch and observed wavelength) when there is **relative motion between source and observer** (Christian Doppler, 1842).

| Motion | Observed frequency f′ | Motion | Observed frequency f′ |
|---|---|---|---|
| Source approaching (> f) | **f′ = f v/(v − v_s)** | Observer approaching (> f) | f′ = f(v + v_o)/v |
| Source receding (< f) | f′ = f v/(v + v_s) | Observer receding (< f) | f′ = f(v − v_o)/v |
| Both moving | f′ = f(v + v_o)/(v − v_s) | Light (relativistic) | f′ = f√[(1+β)/(1−β)], β = v/c |

- v is the speed of the wave **in that medium** (340 m s⁻¹ for sound in air) and the medium is at rest. What matters is the compression of the wavelength, so a source and observer moving together *with* the medium hear nothing unusual.
- **Echo / radar:** the shift is applied twice, out and back — f_echo = f(v + v_o)/(v − v_o). Police radar guns and Doppler ultrasound use this.
- **Blood flow:** cells moving towards the probe shift the echo up, and the shift measures their speed.
- **Light:** a galaxy receding shows **redshift** (evidence of an expanding universe); approaching shows blueshift.
- 💡 **Trick:** "**C**rush in ⇒ **C**rowd" — closer wavefronts, higher frequency. "**F**lee far ⇒ **F**lat." Whatever the cause, **approach ⇒ high, recede ⇒ low**.
- ⚠ **Trap:** only the wave speed **in the medium** appears, not the source–observer relative speed. Doppler changes **pitch**, not loudness. For light use the relativistic formula.
- ✍ **Example:** a 1000 Hz siren at 15 m s⁻¹ (v = 340) ⇒ approaching f′ = 1000 × 340/325 = **1046 Hz**; receding f′ = 340000/355 = **958 Hz**. An observer at 20 m s⁻¹ towards a still 1000 Hz source ⇒ f′ = 1000(340 + 20)/340 = **1059 Hz**.

---

## Night-before formula sheet
- f = 1/T, ω = 2πf = 2π/T · x = A sin(ωt + φ) · F = −kx ⇒ a = −ω²x · v = ω√(A² − x²)
- v_max = Aω, a_max = Aω² · E = ½kA² = ½mω²A²
- Spring T = 2π√(m/k) · Pendulum T = 2π√(L/g) · Damped A = A₀e^(−bt/2m) · Resonance ω = ω₀, Q = ω₀m/b
- v = fλ = ω/k, k = 2π/λ · ∂²y/∂x² = (1/v²)∂²y/∂t² · string v = √(F/μ) · Δφ = 2πΔx/λ = 2πfΔt
- f_beat = |f₁ − f₂| · node → node = λ/2 · string / open pipe fₙ = nv/2L · closed pipe fₙ = (2n − 1)v/4L
- Doppler source f′ = fv/(v − v_s) · Doppler observer f′ = f(v + v_o)/v
- Sound: audible 20 Hz – 20 kHz · ≈ 331 m/s at 0 °C, 343 m/s at 20 °C · v_solid > v_liquid > v_gas · intensity ∝ A²

**Top traps:** amplitude ≠ distance travelled (that is 4A) · a is maximum at the extremes · v = ω√(A² − x²), not ω(A − x) · frequency is fixed when a wave changes medium · beat frequency is the difference, not the average · a closed pipe has no 2nd harmonic · node to node is λ/2.

## Practice MCQs
1. The SI unit of frequency: (a) Hertz (b) Joule (c) Newton (d) Pascal
2. A 440 Hz wave of λ = 2 m travels at: (a) 220 m/s (b) 880 m/s (c) 440 m/s (d) 2200 m/s
3. Period of a 2 kg mass on a 200 N/m spring: (a) 0.314 s (b) 1.57 s (c) 0.157 s (d) 0.628 s
4. A pendulum made 4× longer has a period: (a) Half (b) 4 × (c) 2 × (d) 1/4
5. Closed pipe resonance ratio: (a) 1, 2, 3 (b) 1, 3, 5 (c) 1 only (d) 2, 4, 6
6. Beats of 500 Hz and 505 Hz waves: (a) 5 Hz (b) 1005 Hz (c) 2.5 Hz (d) 502.5 Hz
7. SHM energy at amplitude A, constant k: (a) ½kA (b) kA² (c) ½kA² (d) ½mv² only
8. Closed pipe length for its 1st overtone: (a) 3L (b) 2L (c) 4L (d) L/3
9. Resonance needs: (a) Max driving force (b) Zero amplitude (c) Zero frequency (d) Equal frequencies
10. A 500 Hz source approaches at 20 m/s (v = 340 m/s): (a) 472 Hz (b) 531 Hz (c) 500 Hz (d) 560 Hz

**Answer key:** 1-a · 2-b · 3-d · 4-c · 5-b · 6-a · 7-c · 8-a · 9-d · 10-b

## Written question (7 marks)
A string of length 2 m and mass per unit length 0.5 kg m⁻¹ is fixed at both ends and vibrates under a tension of 200 N. (a) Speed of the waves? (b) Fundamental and third-harmonic frequency? (c) Nodes and antinodes, and wavelength, there?

**Model answer:**
1. **Wave speed (2 marks):** v = √(F/μ) = √(200/0.5) = √400 = **20 m s⁻¹**.
2. **Fundamental (2 marks):** with both ends fixed, L = nλ/2 ⇒ f₁ = v/2L = 20/4 = **5 Hz**.
3. **Third harmonic (1 mark):** f₃ = 3f₁ = **15 Hz**.
4. **Nodes and antinodes (1 mark):** in the nth harmonic of a fixed string, nodes = n + 1 = **4** (the two fixed ends plus two inside) and antinodes = n = **3**.
5. **Wavelength (1 mark):** λ₃ = 2L/3 = 4/3 m ≈ **1.33 m** (check: v = f₃λ₃ = 15 × 1.33 = 20 m s⁻¹).
