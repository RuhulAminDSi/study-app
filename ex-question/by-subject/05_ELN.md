# Basic Electronics (ELN): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 11 (MCQ 5, Written 5, Viva 1)
- **Corrections:** 1
- **Papers:** 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BPSC viva 2023; Bangladesh Bank Assistant Maintenance Engineer (BIBM); Petrobangla Assistant Manager (IT) (BUET)

## Topics

- Active vs passive components (1)
- ADC (counter-type) (1)
- BJT alpha and beta (1)
- BJT operating regions (1)
- BJT regions of operation (cut-off, saturation, active) (1)
- Enhancement MOSFET (1)
- JFET working principle (1)
- Low-pass, high-pass and band-pass filters (1)
- n-channel JFET operation (V_GS, V_DS) (1)
- Power amplifier efficiency (class A) (1)
- Tunnel diode (1)

## Active vs passive components

### Q31 <sub>Q0096</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which acts as an active component in a circuit? (Resistor [printed "Register"] / Transistor / Inductor / Capacitor)

- **Printed answer:** (খ) Transistor
- **Source:** [BCS/56_regression-metrics-delta-modulation-transistor.md](../BCS/56_regression-metrics-delta-modulation-transistor.md) · [image](../BCS/56_regression-metrics-delta-modulation-transistor.jpg)

## ADC (counter-type)

### Q6 <sub>Q0877</sub>

*Petrobangla Assistant Manager (IT) (BUET) · 2022-09-16 · Written*

Draw an ADC circuit that converts an analog signal to digital and explain it.

- **Printed answer:** Counter-type ADC: comparator, AND-gated clock, counter, DAC feedback, latch; counts until V_DAC exceeds V_in, then latches the count
- **Source:** [PETROBANGLA/15_adc-and-binary-search-recurrence.md](../PETROBANGLA/15_adc-and-binary-search-recurrence.md) · [image](../PETROBANGLA/15_adc-and-binary-search-recurrence.jpg)

## BJT alpha and beta

### MCQ 51 <sub>Q0060</sub>

*paper not shown · MCQ*

The relation between α and β in a transistor is: (a) β = α/(1+α) (b) β = 1-α (c) α = β² (d) β = α/(1-α).

- **Printed answer:** (d) β = α/(1-α)
- **Source:** [BCS/30_hospital-primary-key-transistor-alpha-beta.md](../BCS/30_hospital-primary-key-transistor-alpha-beta.md) · [image](../BCS/30_hospital-primary-key-transistor-alpha-beta.jpg)

## BJT operating regions

### unnumbered (BJT regions) <sub>Q0161</sub>

*paper not shown · Written*

Explain the cut-off, saturation and active regions of a transistor (CE circuit, load line); the question stem is on a page not in the set.

- **Printed answer:** Cut-off: VCE≈VCC; saturation: IC(sat)≈VCC/RC, VCE=Vknee, CB junction no longer reverse biased; active: BE forward, CB reverse biased.
- **Source:** [BUET JOB/02_bjt-regions-and-jfet-principle.md](../BUET%20JOB/02_bjt-regions-and-jfet-principle.md) · [image](../BUET%20JOB/02_bjt-regions-and-jfet-principle.jpg)

## BJT regions of operation (cut-off, saturation, active)

### Q10 (part 1) <sub>Q0917</sub>

*Bangladesh Bank Assistant Maintenance Engineer (BIBM) · 2023-02-04 · Written*

Describe the cut-off, saturation and active regions of a transistor with a diagram.

- **Printed answer:** Only (i) cut-off present: IB = 0, only leakage ICEO flows; rest on a page not in the folder
- **Source:** [BANK/03_jfet-regions-of-operation.md](../BANK/03_jfet-regions-of-operation.md) · [image](../BANK/03_jfet-regions-of-operation.jpg)

## Enhancement MOSFET

### Q43 <sub>Q0105</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

What gate voltage must be applied to an enhancement-type N-channel MOSFET? (+VDD / −VDD / 0 / None)

- **Printed answer:** (ক) +VDD (positive VGS above Vth)
- **Source:** [BCS/43_nlp-and-mosfet-gate-voltage.md](../BCS/43_nlp-and-mosfet-gate-voltage.md) · [image](../BCS/43_nlp-and-mosfet-gate-voltage.jpg); [BCS/45_hamiltonian-cycle-and-rnn.md](../BCS/45_hamiltonian-cycle-and-rnn.md) · [image](../BCS/45_hamiltonian-cycle-and-rnn.jpg)

## JFET working principle

### unnumbered (JFET) <sub>Q0162</sub>

*paper not shown · Written*

Explain the working principle of an n-channel JFET and its operating regions (cutoff, ohmic/triode, saturation).

- **Printed answer:** Gate voltage widens the depletion region to control channel width and drain current; regions cutoff, triode, saturation (answer cut off).
- **Correction:** States the gate is separated from the channel by an insulating layer (that is a MOSFET; a JFET gate is a reverse-biased p-n junction) and uses a threshold voltage Vth. For an n-channel JFET, cutoff is VGS ≤ VGS(off) = −Vp; ohmic region for VDS < VGS − VGS(off); saturation (pinch-off) beyond it.
- **Source:** [BUET JOB/02_bjt-regions-and-jfet-principle.md](../BUET%20JOB/02_bjt-regions-and-jfet-principle.md) · [image](../BUET%20JOB/02_bjt-regions-and-jfet-principle.jpg); [BUET JOB/01_bpdb-ae-jfet-and-tokens.md](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.md) · [image](../BUET%20JOB/01_bpdb-ae-jfet-and-tokens.jpg); [BUET JOB/20_bpdb-tokens-and-linux-users.md](../BUET%20JOB/20_bpdb-tokens-and-linux-users.md) · [image](../BUET%20JOB/20_bpdb-tokens-and-linux-users.jpg)

## Low-pass, high-pass and band-pass filters

### Viva <sub>Q0388</sub>

*BPSC viva 2023 · Assistant Maintenance Engineer (various ministries) · 2023 · Viva*

Can you explain low-pass and band-pass signals/filters?

- **Printed answer:** Candidate could not answer; book answer: low-pass passes low frequencies, high-pass passes high frequencies, band-pass passes a given frequency range (with -3 dB response graphs)
- **Source:** [VIVA/01_bpsc-ica-and-ir-viva.md](../VIVA/01_bpsc-ica-and-ir-viva.md) · [image](../VIVA/01_bpsc-ica-and-ir-viva.jpg)

## n-channel JFET operation (V_GS, V_DS)

### Q10 (part 2) <sub>Q0918</sub>

*Bangladesh Bank Assistant Maintenance Engineer (BIBM) · 2023-02-04 · Written*

Explain the working principle of an n-channel JFET for various values of V_GS and V_DS.

- **Source:** [BANK/03_jfet-regions-of-operation.md](../BANK/03_jfet-regions-of-operation.md) · [image](../BANK/03_jfet-regions-of-operation.jpg)

## Power amplifier efficiency (class A)

### Q46 <sub>Q0108</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Maximum efficiency of a transformer-coupled class-A power amplifier? (25% / 30% / 50% / 78%)

- **Printed answer:** (গ) 50%
- **Source:** [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)

## Tunnel diode

### Q64 <sub>Q0124</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Working principle of a tunnel diode: (quantum mechanical tunneling / Zener breakdown / avalanche breakdown / ionization tunneling)

- **Printed answer:** (ক) Quantum mechanical tunneling
- **Source:** [BCS/60_tunnel-diode-hill-climbing.md](../BCS/60_tunnel-diode-hill-climbing.md) · [image](../BCS/60_tunnel-diode-hill-climbing.jpg)
