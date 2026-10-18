# Regular expression for consecutive binary 0s and 1s, and the high-level method of DES

- **Source image:** `18_regex-and-des-structure.jpg` (original file name `495162029_9680213245427573_8605379380424857258_n.jpg`)
- **Page:** 18 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **18**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **Verbatim oddities in the source are preserved, not corrected:** the question 5 stem prints "0s" as "0s" with a lowercase letter in one place and "0s"/"1s" as "0s"/"1s" elsewhere; the printed answer paragraph reads "…having two consecutive 0s and two consecutive 1s is option (b)" (dropping the "and"); and option (d) in the list is printed as "00 (0 + 1)*11 + 11 (0 + 1)*00" without a trailing "(0 + 1)*". All reproduced exactly as printed.
- Regular expressions are reproduced in fenced code blocks so that the `+`, `*`, `|` and parentheses are not mangled by markdown.
- **Figure transcribed as text.** The DES general-structure block diagram has been re-rendered as an ASCII block diagram inside a code block so that every printed label is preserved: 64-bit plaintext, DES, Initial permutation, Round 1 … Round 16, K₁ 48-bit, K₂ 48-bit, K₁₆ 48-bit, Round-key generator, 56-bit cipher key, Final permutation, 64-bit ciphertext.
- Question 6's answer is **cut off at the page end**: the sentence "General Structure of DES is depicted in the following illustration-" ends the printed text, with the figure at the foot of the page. The three bullets that complete the answer ("Round function", "Key schedule", "Any additional processing-Initial and final permutation") are on printed page 19 and are not on this scan.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

**5. Which one of the following regular expressions represents the language: the set of all binary strings having two consecutive 0s and two consecutive 1s?**

| | Regular expression |
|---|---|
| **a.** | `(0 + 1) *0011 (0 + 1)* + (0 + 1) *1100 (0 + 1)*` |
| **b.** | `(0 + 1) *(00(0 + 1)*11 + 11 (0 + 1)*00) (0 + 1)*` |
| **c.** | `(0 + 1) *00 (0 + 1)* + (0 + 1) *11 (0 + 1)*` |
| **d.** | `00 (0 + 1) *11 + 11 (0 + 1) *00` |

**Answer:**

The regular expression that represents the language of all binary strings having two consecutive 0s and two consecutive 1s is option (b):

```
(0 + 1) *(00(0 + 1)*11 + 11(0 + 1)*00) (0 + 1)*
```

**Explanation:**

- `(0 + 1)*`: Zero or more occurrences of 0s or 1s.
- `00(0 + 1)*11`: A sequence of 0s followed by 1s with at least two consecutive 0s and at least two consecutive 1s.
- `11(0 + 1)*00`: A sequence of 1s followed by 0s with at least two consecutive 0s and at least two consecutive 1s.
- `(0 + 1)*`: Zero or more occurrences of 0s or 1s.

This regular expression describes all possible combinations of binary strings with two consecutive 0s and two consecutive 1s.

**6. The high level method of DES...**

**Answer:** The Data Encryption Standard (DES) is a symmetric-key block cipher published by the National Institute of Standards and Technology (NIST).

DES is an implementation of a Feistel Cipher. It uses 16 round Feistel structure. The block size is 64-bit. Though, key length is 64-bit, DES has an effective key length of 56 bits, since 8 of the 64 bits of the key are not used by the encryption algorithm (function as check bits only). General Structure of DES is depicted in the following illustration-

```
                              64-bit plaintext
                                     │
        ┌────────────────────────────────────────────────────────────┐
        │  DES                                                        │
        │  ┌──────────────────┐                                      │
   ───► │  │ Initial          │                                      │
        │  │ permutation      │                                      │
        │  └────────┬─────────┘                                      │
        │           │                                                │
        │  ┌────────▼─────────┐        K₁ 48-bit     ┌───────────┐   │
        │  │     Round 1      │◄─────────────────────┤           │   │
        │  ├──────────────────┤        K₂ 48-bit     │  Round-   │   │
        │  │     Round 2      │◄─────────────────────┤  key      │◄──┼─── 56-bit
        │  │        ⋮         │        ⋮             │  generator│   │    cipher key
        │  ├──────────────────┤       K₁₆ 48-bit     │           │   │
        │  │     Round 16     │◄─────────────────────┤           │   │
        │  └────────┬─────────┘                      └───────────┘   │
        │           │                                                │
        │  ┌────────▼─────────┐                                      │
        │  │ Final            │                                      │
   ───► │  │ permutation      │                                      │
        │  └──────────────────┘                                      │
        └────────────────────────────────────────────────────────────┘
                                     │
                              64-bit ciphertext
```

`[cut off — the answer continues on the following page of the original document, which adds: "Since DES is based on the Feistel Cipher, all that is required to specify DES is – Round function / Key schedule / Any additional processing-Initial and final permutation"]`
