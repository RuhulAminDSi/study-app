# Sections 14–16: Hamming Code, Parity Bit Positions and Number of Parity Bits

- **Source image:** `06_hamming-code.jpg` (original file name `818761269_3015581402106341_8472247359493538941_n.jpg`)
- **Page:** 6 of 6
- **Paper / Post:** not shown (coaching study notes — Debug IT Job Solution)
- **Exam date:** not shown
- **Marks:** not shown
- **Coaching brand:** Debug IT Job Solution / পরিশীলন প্রয়োজন হয় / *Tech Talent and Refined*

## Transcription Notes

- The scan holds two printed pages: printed **Page | 53** (complete, containing sections 14 and 15 plus the heading of section 16) followed by the continuation page (its own page number is not visible in the scan).
- On the continuation page a black "Ask AI" sticker overlay covers the right margin beside the worked example; it does not appear to hide any main body text, but the page number is not visible.
- The formula is printed as `2ʳ >= m+r+1` (and, in the example, inconsistently as `2ʳ >= m+r+1` / `2^3 = 8 >= 4+3+1=8`); it is reproduced exactly as printed.
- Watermark, logo and advertisement content are ignored.

## Content

### 14. Hamming Code

**Hamming Code** is an error-control technique used to **detect and correct** errors by adding carefully positioned parity bits. It can correct **Single-bit** errors.

With extended Hamming (SEC-DED) can provide single-error correction and double-error detection.

### 15. Position of Hamming Parity Bits

Hamming parity bits are placed at positions that are powers of 2: 1, 2, 4, 8, 16, ...

**Example: 7-bit Hamming Code**

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Bit type | P1 | P2 | D1 | P4 | D2 | D3 | D4 |

Where:

- P = Parity Bit
- D = Data Bit

### 16. Number of Parity Bits in Hamming Code

Page | 53

---

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

The number of parity bits required can be calculated using:

| | Where: |
|---|---|
| **2ʳ >= m+r+1** | **m** = number of data bits<br>**r** = number of parity bits |

**Example: For 4 data bits:**

```
2ʳ >= m+r+1

If r=3, then 2^3 = 8 >= 4+3+1=8

Therefore: 3 parity bits are required.

Total bits: 4+3=7

So, 4 data bits require a 7-bit Hamming code.
```

---