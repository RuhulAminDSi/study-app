# Cache tag/index/offset solution (part 2) and parity method with "Delta" ASCII question

- **Source image:** `01_parity-method-and-delta-ascii.jpg` (original file name `489448134_1231536232308622_5970478222278140387_n.jpg`)
- **Page:** 1 of 8
- **Paper / Post:** Bangladesh Bank — Assistant Maintenance Engineer (Exam: 04.02.2023, BIBM); compiled as "Previous Exam Questions" / "COMPACT IT Written"
- **Exam date:** 04.02.2023
- **Marks:** not shown

## Transcription Notes

This page is a continuation: it opens mid-answer to Question 1 (direct-mapped cache) with no question number or given-statement visible on this page. The page footer reads `Page | 8`, so in the printed booklet this is page 8. No question numbers, marks, or lettered sub-parts appear on this page. The coaching branding ("Previous Exam Questions", "COMPACT IT Written") is a watermark/footer, not part of the official paper; no handwritten marginalia were observed.

## Content

Given:

- 16 KB of data = 2^14 bytes of data
- Block size = 4 words = 4 × 4 bytes = 2^4 bytes

The number of blocks in the cache can be calculated as follows:

- Number of blocks = Total cache size / Block size
- Number of blocks = (2^14 bytes) / (2^4 bytes/block) = 2^10 blocks

To determine the size of the fields, we need to determine the number of bits required to represent the tag, index, and offset fields. Since we have a 32-bit architecture, the memory address is 32 bits long.

The offset field specifies the byte within the block and requires log2(block size) bits.

- Offset field = log2(2^4 bytes) = 4 bits

The index field specifies the block within the cache and requires log2(number of blocks) bits.

- Index field = log2(2^10 blocks) = 10 bits

The remaining bits in the memory address are used for the tag field.

- Tag field = 32 - (4 + 10) = 18 bits

Therefore, the size of the tag field is 18 bits, the size of the index field is 10 bits, and the size of the offset field is 4 bits.

**2. Explain parity method for error detection. Write down the bit strings of "Delta" using ASCII.**

**Answer:** The parity method for error detection is a simple technique used to detect errors in data transmission. It involves adding an extra bit, called a parity bit, to the end of a block of data. The parity bit is set to either 0 or 1 depending on whether the number of 1 bits in the data block is even or odd.

When the data is received, the receiver counts the number of 1 bits in the received block, including the parity bit. If the number of 1 bits is even, it assumes that the transmission was error-free. If the number of 1 bits is odd, it assumes that an error has occurred during transmission.

Here's an example: Suppose we want to transmit the 4-bit block of data 1011. To use parity for error detection, we would add a parity bit at the end, making the total number of bits 5. Since the data block contains three 1s, we would set the parity bit to 1, making the transmitted block 10111.

If the receiver receives the block 10110, it would count the number of 1 bits and find that there are two, which is even. Therefore, it would assume that the transmission was error-free. However, if it receives the block 10101, it would count three 1 bits, which is odd, and assume that an error has occurred.