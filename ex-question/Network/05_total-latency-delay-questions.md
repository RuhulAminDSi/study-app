# Total Latency Questions Q1 and Q2 (Propagation, Transmission, Queuing)

- **Source image:** `05_total-latency-delay-questions.jpg` (original file name `818730232_3015581202106361_8637319139087486134_n.jpg`)
- **Page:** 5 of 6
- **Paper / Post:** Q2 — BB, AD(ICT): 06.02.25(DU); Q1 — no reference printed
- **Exam date:** Q2 — 06.02.25 as printed; Q1 — not shown
- **Marks:** not shown
- **Coaching brand:** Debug IT Job Solution / পরিশীলন প্রয়োজন হয় / *Tech Talent and Refined*

## Transcription Notes

- The scan holds two printed pages: printed **Page | 11** (complete, containing Q1 and the start of Q2) followed by the start of the next page, which is cut off by the bottom edge of the image.
- On the second page a black "Ask AI" sticker overlay covers the right side of "Step 2: Propagation Delay" and part of its Given column, so those words are marked `[obscured by overlay]`.
- Printed values are reproduced exactly as printed, including inconsistencies (e.g. `Processing delay T_p processing = 1 ms` in the Given column while the question says processing delay = 1 ms and queuing delay = 2 ms; the total line prints `0.5+2+1+2=5.5ms`).
- Watermark, logo and advertisement content are ignored.

## Content

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

**Q1. A packet travels 100 km over a link. Propagation speed is 2 X 10⁸. Packet size is 8,000 bits, and data rate is 4 Mbps. Processing delay = 1 ms, queuing delay = 2 ms. Find total latency.**

| Solution | Given: |
|---|---|
| **1. Propagation delay**<br>T_p = *Distance* / *Propogation Speed*<br>T_p = 100000 / (2 x 10⁸) = 0.5 ms<br><br>**2. Transmission delay**<br>T_t = *Packet Size* / *Data Rate*<br>T_t = 8000 / (4 x 10⁶) = 0.002 s = 2ms<br><br>**3. Total latency**<br>Total Latency =T_p + T_t + T_processing + T_delay<br>= 0.5+2+1+2 =**5.5ms** | Distance = 100 km = 100,000 m<br>Propagation speed = 2 X 10⁸m/s<br>Packet size = 8,000 bits<br>Data rate = 4 Mbps = 4 x 10⁶ bps<br>Processing delay T_p processing = 1 ms<br>Queuing delay T_q = 2 ms |

**Q2. What is Total Latency for a 3 Kbyte message (an e-mail) if the bandwidth of the network is 1Gbps? Assume that the distance between the sender and the receiver is 300 km and that light travels at 3 x 10⁸ m/s. Round Trip Time 50ms Queuing Time 5ms?** *(BB, AD(ICT): 06.02.25(DU))*

| Step 1: Transmission Delay | Given |
|---|---|
| T_t = *Packet Size* / *Data Rate*<br><br>T_t = 24000 / (1 x 10⁹) = 0.000024 s = 0.024ms | Message size<br>= 3 Kbyte = 3000 bytes = 24000 bits<br><br>Bandwidth = 1 Gbps = 1 x 10⁹<br>Distance = 300 km = 300000 m |

Page | 11

---

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

| Step 2: Propagation Delay | [obscured by overlay] |
|---|---|
| T_p = *Distance* / `[cut off]` | Propagation `[obscured by overlay]`<br>RTT = 50 ms<br>Queuing time T_q = 5 ms |

---