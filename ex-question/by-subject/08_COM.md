# Communication Theory (COM): past exam questions

Organized from the photographed question/solution sheets and PDFs in `ex-question/`. Each item gives the paper it was asked in (when the page shows it), a condensed question, the printed answer and, where the printed answer is wrong or incomplete, a correction. Follow the links for the full transcription and the original image.

- **Items:** 41 (Written 18, MCQ 10, Study note 6, Viva 7)
- **Corrections:** 3
- **Papers:** 38th BCS Written; 45th BCS Written (CSE-971); 49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ); BCC Assistant Programmer (BUET); BOGMC (Petrobangla) Assistant Manager; BPDB Assistant Engineer (CSE); BPSC viva 2023; Bangladesh Bank Assistant Maintenance Engineer (BIBM); Bangladesh Ordnance Factory AP 2022 (MIST); Bangladesh Satellite Company PLC Assistant Engineer (CSE); Bank IT viva (compiled from candidates' viva experiences); Combined Bank SO(IT) (E-zone); Islamic Bank PLC SQA, Senior Officer (Network); MGMCL AM(ICT) 2022 (BUET) (reference partly cut off); MRA AME 2022; Petrobangla Assistant Manager (CSE); Petrobangla Assistant Manager (CSE) (BUET); RPGCL AM(ICT) 2022 (BUET); RPGCL Assistant Manager (ICT) (BUET)

## Topics

- Shannon capacity (3)
- SNR and SNR in dB (2)
- AM bandwidth (1)
- AM/FM/PM comparison (1)
- Delta modulation (1)
- Digital modulation (ASK/FSK/PSK/QPSK/QAM) (1)
- Digital modulation (QPSK/BPSK symbol time) (1)
- Digital modulation bandwidth efficiency (1)
- Digital signal (1)
- Digital TV source rate (1)
- Entropy (information theory) (1)
- FDM bandwidth (1)
- FDM bandwidth with guard bands (1)
- FM deviation, modulation index, Carson bandwidth (1)
- Frequency division multiplexing (1)
- GSM modulation (GMSK) (1)
- Guard band (FDM) (1)
- Millimeter waves in IoT (1)
- Millimetre waves in IoT (1)
- mmWave in IoT (1)
- Multiplexing (TDM vs FDM) (1)
- Multiplexing; TDM vs FDM (1)
- Nyquist bit rate (signal levels) (1)
- Nyquist sampling rate (1)
- Optical fiber first use (1)
- Optical fiber splicing (1)
- Optical link power budget (1)
- Polarization (1)
- Pulse code modulation (1)
- Radio frequency bands (1)
- Satellite and submarine cable uses (1)
- Satellite Communication vs Submarine Cable (1)
- SEA-ME-WE (1)
- SEA-ME-WE landing stations in Bangladesh (1)
- Shannon channel capacity (1)
- Shannon-Hartley channel capacity (1)
- TDM (1)
- Transmission modes (1)

## Shannon capacity

### 2.6 Shannon Capacity <sub>Q0369</sub>

*paper not shown · Study note*

Shannon capacity of a noisy channel C = B log2(1 + S/N); if SNR is in dB, S/N = 10^(SNR_dB/10).

- **Source:** [Network/04_shannon-capacity.md](../Network/04_shannon-capacity.md) · [image](../Network/04_shannon-capacity.jpg)

### Q1 <sub>Q0370</sub>

*MRA AME 2022 · Assistant Maintenance Engineer · 2022 · Written*

Channel capacity of a teleprinter channel with 300 Hz bandwidth and SNR of 3 dB.

- **Printed answer:** S/N = 10^0.3 ≈ 1.995; C = 300 log2(2.995) ≈ 474.7 bps
- **Note:** Result correct (≈474.8 bps); the 'Given' line misprints SNR = 30 dB although 3 dB is used.
- **Source:** [Network/04_shannon-capacity.md](../Network/04_shannon-capacity.md) · [image](../Network/04_shannon-capacity.jpg)

### Q2 <sub>Q0371</sub>

*RPGCL AM(ICT) 2022 (BUET) · Assistant Manager (ICT) · 2022 · Written*

Telephone line with 3000 Hz bandwidth and SNR 3162 (ratio). Find the channel capacity.

- **Printed answer:** C = 3000 log2(3163) ≈ 34,878 bps
- **Note:** Result correct (≈34.88 kbps); 'SNR = 3162dB' in the Given line is wrong, 3162 is a power ratio (≈35 dB).
- **Source:** [Network/04_shannon-capacity.md](../Network/04_shannon-capacity.md) · [image](../Network/04_shannon-capacity.jpg)

## SNR and SNR in dB

### SNR example (page 14 tail) <sub>Q0368</sub>

*MGMCL AM(ICT) 2022 (BUET) (reference partly cut off) · Assistant Manager (ICT) · 2022 · Written*

Signal power 10 mW, noise power 1 µW; find SNR and SNR in dB (question line partly cut off).

- **Printed answer:** SNR = 10000; SNR_dB = 40 dB
- **Source:** [Network/04_shannon-capacity.md](../Network/04_shannon-capacity.md) · [image](../Network/04_shannon-capacity.jpg)

### Previous Q (tail) <sub>Q0840</sub>

*paper not shown · Written*

Tail of a question whose text is on an earlier page (not in folder): compute SNR and SNR_dB (printed working gives SNR = 10^4) and SNR for a noiseless channel.

- **Printed answer:** SNR_dB = 40 dB; noiseless channel SNR = SNR_dB = infinity
- **Correction:** First line prints 10 log10 100000 (=50 dB) while the working uses 10^4; for SNR = 10,000 the result is 40 dB. Also prints 'α' where infinity is meant.
- **Source:** [PETROBANGLA/01_rpgcl-assistant-manager-2022.md](../PETROBANGLA/01_rpgcl-assistant-manager-2022.md) · [image](../PETROBANGLA/01_rpgcl-assistant-manager-2022.jpg)

## AM bandwidth

### Q93 <sub>Q0153</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Carrier 1 MHz, modulating signal 10 kHz: required bandwidth of the AM signal? (5 kHz / 10 kHz / 20 kHz / 2 MHz)

- **Printed answer:** (গ) 20 kHz = 2 × fm
- **Source:** [BCS/42_gmsk-am-bandwidth-feedback-circuits.md](../BCS/42_gmsk-am-bandwidth-feedback-circuits.md) · [image](../BCS/42_gmsk-am-bandwidth-feedback-circuits.jpg)

## AM/FM/PM comparison

### AM vs FM vs PM comparison (fragment) <sub>Q0362</sub>

*paper not shown · Study note*

Comparison table (header cut off): carrier frequency constant in all; carrier phase constant/changes indirectly/changes; noise immunity low/high/high; bandwidth relatively low/high/high; power efficiency lower/better/better; common use AM broadcasting/FM radio/digital communication.

- **Source:** [Network/02_fm-numerical-digital-modulation.md](../Network/02_fm-numerical-digital-modulation.md) · [image](../Network/02_fm-numerical-digital-modulation.jpg)

## Delta modulation

### Q30 <sub>Q0095</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which suffers higher slope-overload and granular noise? (DPCM / DM / ADM / PCM)

- **Printed answer:** (খ) DM (1-bit quantizer with fixed step)
- **Source:** [BCS/56_regression-metrics-delta-modulation-transistor.md](../BCS/56_regression-metrics-delta-modulation-transistor.md) · [image](../BCS/56_regression-metrics-delta-modulation-transistor.jpg)

## Digital modulation (ASK/FSK/PSK/QPSK/QAM)

### 30. Digital Modulation <sub>Q0364</sub>

*paper not shown · Study note*

Digital data-to-analog signal: ASK varies amplitude, FSK frequency, PSK phase, QPSK uses four phase states, QAM combines amplitude and phase changes.

- **Source:** [Network/02_fm-numerical-digital-modulation.md](../Network/02_fm-numerical-digital-modulation.md) · [image](../Network/02_fm-numerical-digital-modulation.jpg)

## Digital modulation (QPSK/BPSK symbol time)

### Q4 <sub>Q0072</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Relation between QPSK symbol time TQ and BPSK symbol time TB at the same bit rate? (TQ=0.25TB / 4TB / 0.5TB / 2TB)

- **Printed answer:** (ঘ) TQ = 2TB (QPSK carries 2 bits/symbol)
- **Source:** [BCS/54_qpsk-bpsk-8086-addressing.md](../BCS/54_qpsk-bpsk-8086-addressing.md) · [image](../BCS/54_qpsk-bpsk-8086-addressing.jpg)

## Digital modulation bandwidth efficiency

### Q69 <sub>Q0129</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which is the most bandwidth-efficient digital modulation? (BPSK / QPSK / FSK / 16QAM)

- **Printed answer:** (ঘ) 16QAM (4 bits/symbol)
- **Source:** [BCS/62_pla-power-factor-set-intersection.md](../BCS/62_pla-power-factor-set-intersection.md) · [image](../BCS/62_pla-power-factor-set-intersection.jpg); [BCS/35_16qam-backpropagation-esc-ui-design.md](../BCS/35_16qam-backpropagation-esc-ui-design.md) · [image](../BCS/35_16qam-backpropagation-esc-ui-design.jpg)

## Digital signal

### Viva (VIVA-20) <sub>Q0394</sub>

*BPSC viva 2023 · Assistant Maintenance Engineer (various ministries) · 2023 · Viva*

What is a digital signal? Can you draw it?

- **Printed answer:** A signal that takes one of two or more discrete states
- **Source:** [VIVA/07_osi-deadlock-and-ascii-viva.md](../VIVA/07_osi-deadlock-and-ascii-viva.md) · [image](../VIVA/07_osi-deadlock-and-ascii-viva.jpg)

## Digital TV source rate

### Q3 <sub>Q0910</sub>

*Bangladesh Bank Assistant Maintenance Engineer (BIBM) · 2023-02-04 · Written*

A TV picture of 480 × 500 pixels, each with 32 intensity levels, at 30 pictures/s: find the source rate R.

- **Printed answer:** 240,000 × 5 bits × 30 = 36 Mbps
- **Source:** [BANK/07_delta-ascii-tv-rate-packetization.md](../BANK/07_delta-ascii-tv-rate-packetization.md) · [image](../BANK/07_delta-ascii-tv-rate-packetization.jpg)

## Entropy (information theory)

### Q56 <sub>Q0116</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which expression is the entropy? (ΣPᵢlog₂Pᵢ / −Σlog₂Pᵢ / −ΣPᵢlog₂Pᵢ / ΣPᵢlog₂(Pᵢ/(1+Pᵢ)))

- **Printed answer:** (গ) H = −Σ Pᵢ log₂ Pᵢ
- **Source:** [BCS/49_entropy-bcd-counter-planar-graph.md](../BCS/49_entropy-bcd-counter-planar-graph.md) · [image](../BCS/49_entropy-bcd-counter-planar-graph.jpg)

## FDM bandwidth

### FDM Bandwidth Calculation <sub>Q0359</sub>

*paper not shown · Study note*

For N channels of bandwidth B with guard band G: number of guard bands = N-1; total bandwidth = NB + (N-1)G.

- **Source:** [Network/01_guard-band-fdm-bandwidth.md](../Network/01_guard-band-fdm-bandwidth.md) · [image](../Network/01_guard-band-fdm-bandwidth.jpg)

## FDM bandwidth with guard bands

### Worked example <sub>Q0360</sub>

*Combined Bank SO(IT) (E-zone) · Senior Officer (IT) · 2026-07-25 · Written*

Five channels, each 100 kHz, are multiplexed with a 10 kHz guard band between channels. Find the minimum link bandwidth.

- **Printed answer:** BW = 5×100 + 4×10 = 540 kHz
- **Source:** [Network/01_guard-band-fdm-bandwidth.md](../Network/01_guard-band-fdm-bandwidth.md) · [image](../Network/01_guard-band-fdm-bandwidth.jpg)

## FM deviation, modulation index, Carson bandwidth

### Q1 <sub>Q0363</sub>

*Bangladesh Ordnance Factory AP 2022 (MIST) · Assistant Programmer · 2022 · Written*

A 5 V, 2 kHz sinusoidal modulating signal drives an FM generator with sensitivity 40 Hz/V. Find frequency deviation, modulation index and bandwidth.

- **Printed answer:** Δf = 200 Hz, β = 0.1, BW (Carson) = 2(200+2000) = 4400 Hz
- **Source:** [Network/02_fm-numerical-digital-modulation.md](../Network/02_fm-numerical-digital-modulation.md) · [image](../Network/02_fm-numerical-digital-modulation.jpg)

## Frequency division multiplexing

### Q3 <sub>Q0314</sub>

*Bangladesh Satellite Company PLC Assistant Engineer (CSE) · 2026-08-21 · Written*

Solve an FDM numerical problem: frequency allocation / required bandwidth (data not on page).

- **Source:** [BUET JOB/26_bscll-ae-cse-questions-1-4.md](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.md) · [image](../BUET%20JOB/26_bscll-ae-cse-questions-1-4.jpg)

## GSM modulation (GMSK)

### Q92 <sub>Q0152</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Which modulation technique is used in GSM? (MSK / FSK / ASK / GMSK)

- **Printed answer:** (ঘ) GMSK
- **Source:** [BCS/42_gmsk-am-bandwidth-feedback-circuits.md](../BCS/42_gmsk-am-bandwidth-feedback-circuits.md) · [image](../BCS/42_gmsk-am-bandwidth-feedback-circuits.jpg)

## Guard band (FDM)

### Guard Band <sub>Q0358</sub>

*paper not shown · Study note*

A guard band is a small unused frequency range between adjacent channels to prevent interference and overlap.

- **Source:** [Network/01_guard-band-fdm-bandwidth.md](../Network/01_guard-band-fdm-bandwidth.md) · [image](../Network/01_guard-band-fdm-bandwidth.jpg)

## Millimeter waves in IoT

### Q5(c) <sub>Q0237</sub>

*Petrobangla Assistant Manager (CSE) (BUET) (inferred from page order) · 2024-05-31 · Written*

Purpose and main application of mmWaves in IoT ecosystems?

- **Source:** [BUET JOB/25_petrobangla-bangla-mcq-1-10.md](../BUET%20JOB/25_petrobangla-bangla-mcq-1-10.md) · [image](../BUET%20JOB/25_petrobangla-bangla-mcq-1-10.jpg)

## Millimetre waves in IoT

### Q5(c) <sub>Q0895</sub>

*Petrobangla Assistant Manager (CSE) · 2024-05-31 · Written*

What is the purpose and primary application of millimetre waves (mmWave) in IoT ecosystems?

- **Source:** [PETROBANGLA/22_bangla-mcq-and-short-questions.md](../PETROBANGLA/22_bangla-mcq-and-short-questions.md) · [image](../PETROBANGLA/22_bangla-mcq-and-short-questions.jpg)

## mmWave in IoT

### Q5(c) <sub>Q0476</sub>

*BOGMC (Petrobangla) Assistant Manager · Assistant Manager (CSE/IT/ICT) · 2024 · Written*

What is the use of mmWaves in IoT?

- **Printed answer:** Very high bandwidth / data rate and low latency: 5G IoT, dense deployments, radar/sensing, smart factories.
- **Source:** [PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md p7](../PDF-TEXT/BOGMC_PetroBangla_Assistant_Manager_2024_Solutions_HUO_Academy.md)

## Multiplexing (TDM vs FDM)

### Q28 <sub>Q0093</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Main disadvantage of TDM over FDM? (Higher BW requirement / Noise immunity / Complex synchronization / Limited frequency usage)

- **Printed answer:** (গ) Complex synchronization
- **Source:** [BCS/46_zombie-process-and-tdm-fdm.md](../BCS/46_zombie-process-and-tdm-fdm.md) · [image](../BCS/46_zombie-process-and-tdm-fdm.jpg)

## Multiplexing; TDM vs FDM

### Q26(e) <sub>Q0026</sub>

*45th BCS Written (CSE-971) · 2024-01-31 · Written · 5 marks*

What is multiplexing in data communication? Write the differences between TDM and FDM.

- **Printed answer:** Cross-references only: see Combined Bank AME/AHE 23.11.2023 (BIBM) and Senior Officer (IT) 13.10.2023 (MIST).
- **Note:** No answer text is printed, only cross-references. Expected: multiplexing combines several signals onto one link. TDM gives each signal time slots and suits digital signals; FDM gives each signal its own frequency band with guard bands and suits analog signals.
- **Source:** [BCS/06_45th-bcs-physics-logic-questions.md](../BCS/06_45th-bcs-physics-logic-questions.md) · [image](../BCS/06_45th-bcs-physics-logic-questions.jpg)

## Nyquist bit rate (signal levels)

### Q10 <sub>Q0841</sub>

*paper not shown · Written*

We need to send 265 kbps over a noiseless channel with bandwidth 20 kHz. How many signal levels are needed?

- **Printed answer:** 265000 = 2×20000×log2 L → log2 L = 6.625 → L ≈ 98.7; use 128 levels (→ 280 kbps) or reduce bit rate
- **Note:** Minor typo: writes 256000 for 265000; result is correct.
- **Source:** [PETROBANGLA/01_rpgcl-assistant-manager-2022.md](../PETROBANGLA/01_rpgcl-assistant-manager-2022.md) · [image](../PETROBANGLA/01_rpgcl-assistant-manager-2022.jpg)

## Nyquist sampling rate

### Q2(a) <sub>Q0036</sub>

*38th BCS Written · 2018 · Written*

Determine the Nyquist sampling rate and the Nyquist sampling interval for x(t) = sin(2100πt).

- **Printed answer:** Only a 'related answer' is printed: general text on sampling, the Nyquist theorem (sample at 2× the highest frequency) and oversampling figures. No numbers are given.
- **Correction:** No numerical result is given, and the formula 'Nyquist sampling (f) = d/2' is wrong. The correct answer: f_max = 1050 Hz, so the Nyquist rate is 2100 samples/s and the Nyquist interval is 1/2100 s ≈ 0.476 ms.
- **Source:** [BCS/23_karnaugh-map-nyquist-sampling.md](../BCS/23_karnaugh-map-nyquist-sampling.md) · [image](../BCS/23_karnaugh-map-nyquist-sampling.jpg); [BCS/21_sampling-rate-and-modulation.md](../BCS/21_sampling-rate-and-modulation.md) · [image](../BCS/21_sampling-rate-and-modulation.jpg)

## Optical fiber first use

### Viva p31 Q14 <sub>Q0754</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Where was Optical Fiber first used?

- **Printed answer:** Optical fiber was first widely used in the telecommunications industry for long-distance telephone communication due to its high speed and low signal loss
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p31](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Optical fiber splicing

### Q2(c) <sub>Q0255</sub>

*BPDB Assistant Engineer (CSE) (inferred from page order) · 2021 · Written*

What are the main requirements of optical fiber splicing?

- **Note:** No answer printed. Expected: core alignment, clean square cleave, low loss/reflection, mechanical protection.
- **Source:** [BUET JOB/35_mcq-short-and-written-questions.md](../BUET%20JOB/35_mcq-short-and-written-questions.md) · [image](../BUET%20JOB/35_mcq-short-and-written-questions.jpg)

## Optical link power budget

### Q4 <sub>Q0287</sub>

*Islamic Bank PLC SQA, Senior Officer (Network) · 2025-03-14 · Written*

Single-mode fibre 0.35 dB/km, splitter 14 dB, two splices 0.1 dB each, two connectors 0.75 dB each, Tx 5 dBm, Rx sensitivity −14 dBm. Find the maximum OLT–ONU fibre length.

- **Note:** No answer printed. Budget 19 dB − (14 + 0.2 + 1.5) = 3.3 dB → D = 3.3/0.35 ≈ 9.43 km.
- **Source:** [BUET JOB/27_islamic-bank-network-questions-1-6.md](../BUET%20JOB/27_islamic-bank-network-questions-1-6.md) · [image](../BUET%20JOB/27_islamic-bank-network-questions-1-6.jpg)

## Polarization

### Viva p12 Q16 <sub>Q0599</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is Polarization?

- **Printed answer:** Polarization is the orientation of an electromagnetic wave's electric field. It is important in wireless, microwave, and satellite communication to improve signal quality
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p12](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Pulse code modulation

### Q2(b) <sub>Q0037</sub>

*38th BCS Written · 2018 · Written*

What is modulation? Describe the pulse code modulation (PCM) technique. State the advantages and disadvantages of PCM.

- **Printed answer:** Modulation varies a carrier with the message. PCM is LPF, sampler, quantizer and encoder, then regenerative repeaters, then regeneration, decoder and reconstruction filter. Advantages: long distance, high efficiency and noise immunity. Disadvantages: large bandwidth and complex circuits.
- **Source:** [BCS/21_sampling-rate-and-modulation.md](../BCS/21_sampling-rate-and-modulation.md) · [image](../BCS/21_sampling-rate-and-modulation.jpg); [BCS/22_pulse-code-modulation.md](../BCS/22_pulse-code-modulation.md) · [image](../BCS/22_pulse-code-modulation.jpg); [BCS/19_pcm-and-computer-building-blocks.md](../BCS/19_pcm-and-computer-building-blocks.md) · [image](../BCS/19_pcm-and-computer-building-blocks.jpg)

## Radio frequency bands

### Q47 <sub>Q0109</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Frequency range of the VHF band? (3–30 MHz / 30–300 MHz / 300 MHz–3 GHz / 3–30 GHz)

- **Printed answer:** (খ) 30–300 MHz
- **Source:** [BCS/50_class-a-vhf-8086-anticoincidence.md](../BCS/50_class-a-vhf-8086-anticoincidence.md) · [image](../BCS/50_class-a-vhf-8086-anticoincidence.jpg)

## Satellite and submarine cable uses

### Viva p27 Q2 <sub>Q0724</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What are their uses?

- **Printed answer:** Satellite: TV broadcasting, GPS, remote communication, disaster recovery, and aviation; Submarine Cable: International Internet, voice communication, banking, and global data transmission
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Satellite Communication vs Submarine Cable

### Viva p27 Q1 <sub>Q0723</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Difference between Satellite Communication and Submarine Cable.

- **Printed answer:** Satellite Communication: Transmits data through satellites; suitable for remote areas but has higher latency; Submarine Cable: Uses undersea fiber-optic cables; provides faster speed, lower latency, and higher bandwidth
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## SEA-ME-WE

### Viva p27 Q3 <sub>Q0725</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

What is SEA-ME-WE?

- **Printed answer:** SEA-ME-WE (South East Asia–Middle East–Western Europe) is an international submarine fiber-optic cable system that connects Asia, the Middle East, and Europe
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p27](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md); [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p28](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## SEA-ME-WE landing stations in Bangladesh

### Viva p28 Q4 <sub>Q0726</sub>

*Bank IT viva (compiled from candidates' viva experiences) · Viva*

Where are SEA-ME-WE landing stations located in Bangladesh?

- **Printed answer:** Bangladesh's SEA-ME-WE landing stations are located at Cox's Bazar (SEA-ME-WE-4 & SEA-ME-WE-5) and Kuakata, Patuakhali (SEA-ME-WE-6)
- **Correction:** Landing stations are swapped: SEA-ME-WE-4 lands at Cox's Bazar (Jhilongja), SEA-ME-WE-5 at Kuakata (Patuakhali), and SEA-ME-WE-6 at Cox's Bazar.
- **Source:** [PDF-TEXT/Viva Questions Extracted from Viva Experiences.md p28](../PDF-TEXT/Viva%20Questions%20Extracted%20from%20Viva%20Experiences.md)

## Shannon channel capacity

### Q9 <sub>Q0850</sub>

*RPGCL Assistant Manager (ICT) (BUET) · 2022 · Written*

A telephone line has bandwidth 3000 Hz (300-3300 Hz) and SNR 3162. Calculate the channel capacity.

- **Printed answer:** C = 3000 log2(3163) = 3000 × 11.62 ≈ 34,860 bps ≈ 34.86 kbps
- **Source:** [PETROBANGLA/16_sha-channel-capacity-nsda.md](../PETROBANGLA/16_sha-channel-capacity-nsda.md) · [image](../PETROBANGLA/16_sha-channel-capacity-nsda.jpg)

## Shannon-Hartley channel capacity

### Q10 <sub>Q0078</sub>

*49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ) · 2025 · MCQ · 1 mark*

Channel capacity (kbps) of a band-limited Gaussian channel with SNR = 15 and bandwidth 16 kHz? (32 / 64 / 18 / 128)

- **Printed answer:** (খ) 64 kbps = 16000 × log₂16
- **Source:** [BCS/40_big-o-firewall-scheduling-shannon-hartley.md](../BCS/40_big-o-firewall-scheduling-shannon-hartley.md) · [image](../BCS/40_big-o-firewall-scheduling-shannon-hartley.jpg); [BCS/61_gantt-chart-rsa-binary-conversion.md](../BCS/61_gantt-chart-rsa-binary-conversion.md) · [image](../BCS/61_gantt-chart-rsa-binary-conversion.jpg)

## TDM

### 2. Time Division Multiplexing (TDM) <sub>Q0361</sub>

*paper not shown · Study note*

TDM: multiple signals share the same channel by dividing access to it over time (rather than by frequency). Text is cut off on this page.

- **Source:** [Network/01_guard-band-fdm-bandwidth.md](../Network/01_guard-band-fdm-bandwidth.md) · [image](../Network/01_guard-band-fdm-bandwidth.jpg)

## Transmission modes

### MCQ 11 <sub>Q0208</sub>

*BCC Assistant Programmer (BUET) · 2021-02-12 · MCQ*

Which communication mode uses serial communication? (duplex/half duplex/simplex/all)

- **Printed answer:** d (All)
- **Source:** [BUET JOB/10_stages-osi-model-bcc-mcq.md](../BUET%20JOB/10_stages-osi-model-bcc-mcq.md) · [image](../BUET%20JOB/10_stages-osi-model-bcc-mcq.jpg)
