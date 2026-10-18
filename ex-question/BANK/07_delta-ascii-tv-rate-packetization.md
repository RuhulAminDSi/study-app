# "Delta" ASCII bit string, Question 3 (TV source rate) and Question 4 (packetization delay)

- **Source image:** `07_delta-ascii-tv-rate-packetization.jpg` (original file name `490035124_1231536005641978_7828574644670337893_n.jpg`)
- **Page:** 7 of 8
- **Paper / Post:** Bangladesh Bank — Assistant Maintenance Engineer (Exam: 04.02.2023, BIBM); compiled as "Previous Exam Questions" / "COMPACT IT Written"
- **Exam date:** 04.02.2023
- **Marks:** not shown

## Transcription Notes

The page opens mid-answer to Question 2 (the ASCII bit string part of the parity/"Delta" question on page 1); the question statement and the earlier parity discussion are not on this image. Question 4's answer continues onto the next page — the payload-size calculation is not on this image. Printed wording is verbatim including typographical errors (e.g. "That's 2 raised to the power of 5", missing multiplication symbol in "Packets contain an originator a destination"). Page footer reads `Page | 9`. Coaching branding is a watermark/footer only; no handwritten marginalia were observed.

## Content

Now, the ASCII code for "Delta" is: 68 65 6C 74 61

These are the decimal values for the ASCII codes for each letter in "Delta". To get the bit string, we convert each decimal value to binary, which gives us:

```
01000100 01100101 01101100 01110100 01100001
```

Therefore, the bit string of "Delta" using ASCII is:

```
0100010001100101011011000111010001100001
```

**3. Suppose that a digitized TV picture is to be transmitted from a source that uses a matrix of 480 times 500 picture elements (pixels), where each pixel can take on one of 32 intensity values. Assume that 30 pictures are sent per second. (This digital source is roughly equivalent to broadcast TV standards that have been adopted.) Find the source rate R (bps).**

**Answer:**

Matrix of 480 by 500 = 480×500 = 240,000 pixels

Intensity values per pixel = 32. This simply means the color variations in this TV. The bit per pixel for an intensity value of 32 is 5 (That's 2 raised to the power of 5)

Pictures sent per second = 30

Source rate R (bps) = Total number of pixels in the matrix×bit per pixel×Number of pictures sent per second.

Source rate R (bps) = 240,000×5×30 = 36,000,000 bps

**4. One of the drawbacks of a small packet size is that a large function of link bandwidth is consumed by overhead bytes. To this end, supposed that the packet consists of P bytes and 5 bytes of header. Consider sending a digitally encoded voice source directly. Suppose the source is encoded a constant rate of 128 kbps. Assume each packet is entirely filled before the source sends the packet into the network. The time required to fill a packet is the packetization delay. Determine the packetization delay for length L = 1500 bytes (roughly corresponding to maximum-sized Ethernet packet).**

**Answer:**

Given:

- Packet size (P) = 1500 bytes
- Header size = 5 bytes
- Digitally encoded voice source rate = 128 kbps

We can calculate the packetization delay as follows:

First, we need to calculate the payload size (i.e., the size of the data being transmitted, excluding the header). The payload size for a packet of size P and header size H can be calculated as follows:

[continues on the next page]