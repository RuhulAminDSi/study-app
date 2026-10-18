# Section 4.8 Checksum — Example 1 and start of Example 2

- **Source image:** `03_checksum-examples.jpg` (original file name `817329449_3015581362106345_3919711624621963458_n.jpg`)
- **Page:** 3 of 6
- **Paper / Post:** not shown (coaching study notes — Debug IT Job Solution)
- **Exam date:** not shown
- **Marks:** not shown
- **Coaching brand:** Debug IT Job Solution / পরিশীলন প্রয়োজন হয় / *Tech Talent and Refined*

## Transcription Notes

- The scan holds two printed pages: printed **Page | 50** (complete, containing section 4.8 and Example 1) followed by the start of the next page, which is cut off by the bottom edge of the image.
- On the second page, a black "Ask AI" sticker overlay covers the right end of the Example 2 sentence and the column headers below it, so those words are marked `[obscured by overlay]`.
- The binary-arithmetic columns of Example 1 are reproduced as printed (including the blank carry row and the separator rules), even where the printed arithmetic is inconsistent.
- Watermark, logo and advertisement content are ignored.

## Content

### 4.8 Checksum

A Checksum is an error-detection technique in which data is divided into fixed-size units, added using one's-complement arithmetic, and the complement of the sum is transmitted as the checksum.

The receiver performs a corresponding calculation to verify the data.

#### Example 1:

At sender end, calculate the checksum of: 1001, 1011, 1100

**Solution**

| Binary Addition | End-around carry: |
|---|---|
| ```<br> 1001<br>+  1011<br>----------<br> 1010<br>``` | ```<br> 0100<br>+    1<br>----------<br> 0101<br>``` |

| Binary Addition | End-around carry: |
|---|---|
| Now add 1100<br>```<br> 0101<br>+ 1100<br>------------<br> 10001<br>``` | End-around carry:<br>```<br> 0001<br>+    1<br>------------<br> 0010 (Sum)<br>``` |

**Checksum = 1's complement of SUM**

```
0010 -> 1101 (Answer)
```

Page | 50

---

**Debug IT Job Solution**
পরিশীলন প্রয়োজন হয়
*Tech Talent and Refined*

#### Example 2:

Suppose the transmitted data is: 1010, 1100, 0110 and checksu[obscured by overlay] `[cut off]`

Verify the data at receiver end, is Error occured or not?

| Binary Addition | End-around carry: |
|---|---|
| `[cut off]` | `[cut off]` |

---