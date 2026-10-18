# Guard Band and FDM Bandwidth Calculation

- **Source image:** `01_guard-band-fdm-bandwidth.jpg` (original file name `797753705_3015581282106353_3632828363833965568_n.jpg`)
- **Page:** 1 of 6
- **Paper / Post:** not shown (coaching study notes — Debug IT Job Solution)
- **Exam date:** not shown
- **Marks:** not shown
- **Coaching brand:** Debug IT Job Solution / পরিশীলন প্রয়োজন হয় / *Tech Talent and Refined*

## Transcription Notes

- The scan holds two printed pages: printed **Page | 29** (complete) followed by the start of the next page, which is cut off by the bottom edge of the image.
- The next page's body text is partly covered on the right by a black "Ask AI" sticker overlay; the hidden words are marked `[obscured by overlay]`.
- The guard-band diagram is reproduced below in a fenced block: solid black blocks = channels A, B, C; dotted blocks = guard bands.
- The reference printed with the worked example is a job circular, not a formal exam paper; the coaching centre supplies the answer, which is reproduced as printed.
- Watermark, logo and any advertisement content are ignored.

## Content

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

### Guard Band

A guard band is a small unused frequency range placed between two adjacent channels to prevent interference and overlapping.

```
A        Guard     B        Guard     C
██████   ░░░░░░   ██████   ░░░░░░   ██████
```

### FDM Bandwidth Calculation

| | Where |
|---|---|
| **Number of Guard Bands = N-1**<br>**Total Bandwidth=NB+(N–1) G** | Number of channels = N<br>Bandwidth of each channel = B<br>Guard band = G |

---

**Five channels, each with a 100-kHz bandwidth, are to be multiplexed together. What is the minimum bandwidth of the link if there is a need for a guard band of 10 kHz between the channels to prevent interference?** *(Combined bank, SO(IT)-25104:25.07.26(E-zone))*

*Answer:*

| We know, In FDM | *Given,* |
|---|---|
| **Total Bandwidth=NB+(N–1) G**<br>&nbsp;&nbsp;`= 5 x 100 + (5-1) x 10`<br>&nbsp;&nbsp;`= 540 kHz` | *Number of Channel N = 5*<br>*Bandwidth of each channel B = 100 kHz*<br>*Guard Band G = 10 kHz* |

Page | 29

---

### 2.Time Division Multiplexing (TDM)

In TDM, multiple signals share the same channel by using diff[obscured by overlay] dividing frequency, TDM divides access to the channel over time. `[cut off]`

---