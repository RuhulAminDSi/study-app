# SNR Example (page 14 tail) and Section 2.6 Shannon Capacity

- **Source image:** `04_shannon-capacity.jpg` (original file name `818453378_3015581238773024_4284868423027377181_n.jpg`)
- **Page:** 4 of 6
- **Paper / Post:** Q1 — MRA, AME: 2022; Q2 — RPGCL, AM(ICT):2022(BUET)
- **Exam date:** not shown (2022 circular year for both questions)
- **Marks:** not shown
- **Coaching brand:** Debug IT Job Solution / পরিশীলন প্রয়োজন হয় / *Tech Talent and Refined*

## Transcription Notes

- The scan holds two printed pages: a narrow **cut-off strip at the top edge** that is the tail of printed **Page | 14**, followed by a complete following page (its own page number is not visible in the scan).
- The question line in the top strip is cut off at the top edge; only its lower half is legible and is transcribed as far as visible.
- On the second page a black "Ask AI" sticker overlay covers the lower-right corner, partly hiding the tail of Q2's answer box and its page number; the hidden text is marked `[obscured by overlay]`.
- Printed values that are arithmetically inconsistent (e.g. `3 dB` vs `SNR = 30DB` in Q1, `3162` vs `3162 dB` in Q2) are reproduced exactly as printed, without correction.
- Watermark, logo and advertisement content are ignored.

## Content

*[Top strip — cut off at image edge]*

`[cut off]` values of SNR and 1 mW. *(Moment, Internet/Mobile/88CE/SL))*

| Solution | Given: |
|---|---|
| SNR= 10000/1 = 10000<br><br>SNR_db = 10log₁₀ (10000/1) = 40 db | S = 10 mW = 10,000 μW<br>N = 1 μW |

Page | 14

---

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

### 2.6 Shannon Capacity

Shannon's theorem determines the maximum theoretical data rate of a noisy communication channel without considering signal levels.

| For a noisy channel: | Where: |
|---|---|
| Capacity= **B** *log₂* (1+ S/N )<br><br>If S/N is given in decibels: S/N = **10**^(SNR_db/10) | - B = Bandwidth<br>- S = Signal power<br>- N = Noise power |

#### Example:

**Q1. What is the channel capacity for a teleprinter channel with a 300 Hz bandwidth and a signal-to-noise ratio of 3 dB?** *(MRA, AME: 2022)*

| Given: |
|---|
| B=300Hz, SNR = 30DB<br><br>Convert SNR to ratio: S/N = 10^(3/10) = 1.995 (approximately)<br><br>C = B *log₂* (1+ S/N ) = 300 *log₂* (1+1.995) = 474.7 bps (approximately) |

**Q2. A telephone line normally has a bandwidth of 3000 Hz assigned for data communications. The signal-to-noise ratio is usually 3162. Calculate the capacity for this channel?** *(RPGCL, AM(ICT):2022(BUET))*

| Given: |
|---|
| B=3000Hz, SNR = 3162dB<br><br>C = B *log₂* (1+ S/N ) = 3000 *log₂* (1+3162) = 34,878 bps (approximately) `[obscured by overlay]` |

---