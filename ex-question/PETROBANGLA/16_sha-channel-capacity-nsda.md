# Written Q8 (SHA-256/SHA-512, Avalanche Effect), Q9 (Channel Capacity) + NSDA Assistant Programmer Q1

- **Source image:** `16_sha-channel-capacity-nsda.jpg` (original file name `497461774_9767686413346922_5367655885920927757_n.jpg`)
- **Page:** 16 of 22 (folder-wide position)
- **Paper / Post:** Two papers — (1) preceding paper (banner on an earlier page), continued at the top; (2) **National Skills Development Authority (NSDA) — Assistant Programmer, Exam Date: 04-03-2022** (banner printed mid-page)
- **Exam date:** 04-03-2022 (for the NSDA section); not shown for the top block
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION

## Transcription Notes

- The page opens **mid-answer** to question 8 of the preceding paper — the question 8 wording is on an earlier page.
- Q9's printed calculation contains an internal inconsistency that is reproduced exactly as printed: `= 3000 × 11.62 = 34860 bps` followed by `= 34.86 Kbps`.
- The NSDA Q1 answer is **cut off** at the foot of the page after "STEP 5: If the temp is equal to 0," — steps 5 onward are on the next page.
- The decorative bullet glyphs on the NSDA STEP lines are printed as an ornamental flourish (❧-like); they are reproduced as a bullet.
- No handwritten marginalia are present on this page.

## Content

*(running heads: "Question Bank" — "Written")*

### [Continuation — preceding paper]

**[Question 8, continued]**

**SHA-256** stands for Secure Hash Algorithm 256-bit and it's used for cryptographic security. Cryptographic hash algorithms produce irreversible and unique hashes. The larger the number of possible hashes, the smaller the chance that two values will create the same hash.

**SHA-512**, or Secure Hash Algorithm 512, is a hashing algorithm used to convert text of any length into a fixed-size string. Each output produces a SHA-512 length of 512 bits (64 bytes). This algorithm is commonly used for email addresses hashing, password hashing, and digital record verification.

**Avalanche Effect:** In cryptography, the avalanche effect is a term associated with a specific behavior of mathematical functions used for encryption. Avalanche effect is considered as one of the desirable property of any encryption algorithm. A slight change in either the key or the plain-text should result in a significant change in the cipher-text. This property is termed as avalanche effect.

In cryptography, the avalanche effect is the desirable property of cryptographic algorithms, typically block ciphers and cryptographic hash functions, wherein if an input is changed slightly (for example, flipping a single bit), the output changes significantly (e.g., half the output bits' flip).

**9. A telephone line normally has a bandwidth of 3000 Hz (300 to 3300 Hz) assigned foe data communications. The signal-to-noise ratio is usually 3162. Calculate the capacity for this channel?**
**Answer:**

```
Capacity   = B log₂(1+SNR)
           = 3000 log₂(1+3162)
           = 3000 × 11.62 = 34860 bps
           = 34.86 Kbps
```

---

### National Skills Development Authority (NSDA) — Assistant Programmer — Exam Date: 04-03-2022

**1. Write an Algorithm to check a number is Prime or not Prime.**
**Answer:**
- STEP 1: Take num as input.
- STEP 2: Initialize a variable temp to 0.
- STEP 3: Iterate a "for" loop from 2 to num/2.
- STEP 4: If num is divisible by loop iterator, then increment temp.
- STEP 5: If the temp is equal to 0,

*[answer continues on the next page — cut off]*