# Tail of tree-traversal answer, Q6 (stack Push/Pop), Q7 (Teletalk Assistant Manager (IT) 2023 — Q1 minimize function with K-map)

- **Source image:** `05_stack-ops-and-teletalk-kmap.jpg` (original file name `495816483_9767686526680244_4509464646330824143_n.jpg`)
- **Page:** 5 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** Teletalk — Assistant Manager (IT); Exam: 2023. (Questions at the top of the page belong to the preceding, unidentified paper.)
- **Exam date:** not shown (printed only as "Exam: 2023")
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- Two papers share this page. The banner visible on the page identifies the **Teletalk Assistant Manager (IT), Exam: 2023** paper that begins at Q1 near the bottom. The Q6/Q7 items above the banner belong to the preceding paper, whose banner is not on this page, so its organisation/post is not determinable from this image.
- The only Bengali text on the page is the parenthetical gloss to Q7, reproduced verbatim: (লেসপুল ধর্ম সম্পর্কিত কোন স্থবর হয় নি!!). It is printed in Bengali script exactly as shown and has not been transliterated or translated.
- The stack push/pop answer contains two diagrams: (a) a stack schematic labelled "Push", "Pop" and "Top of the Stack"; (b) two tabular stack states. Only (b) is tabulated below; the schematic labels are noted.
- Q1's answer is a cross-reference only ("[See BPSC, (Ministry of Home Affairs), Assistant Database Administrator, Exam: 2022 (CSE)]") — the referenced answer is not on this page, and the K-map/function to be minimized is not printed on this page either.
- The source prints the resulting stack immediately after the pushes as top=100 / 500 / 200, i.e. before the Pop. Reproduced as printed.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

**Depth First Traversals:**

- Preorder Traversal: 1 2 4 5 3
- Inorder Traversal: 4 2 5 1 3
- Postorder Traversal: 4 5 2 3 1

**6. Push(200), Push(500), Push(100), S= Pop(). What is the value of S after the Operation?**

**Answer:** The stack data structure has the two most important operations that are push and pop. The push operation inserts an element into the stack and pop operation removes an element from the top of the stack.

*[Figure: a vertical stack of four cells with an arrow entering the top labelled "Push" and an arrow leaving the top labelled "Pop"; a pointer at the topmost cell is labelled "Top of the Stack".]*

Assuming that this question refers to a stack data structure, the given operations can be interpreted as follows:

- push(200) adds the value 200 to the top of the stack.
- push(500) adds the value 500 to the top of the stack.
- push(100) adds the value 100 to the top of the stack.
- s=pop() removes the top element from the stack and assigns its value to the variable s.

If we perform these operations in order, the resulting stack will be:

| | |
|---|---|
| top | 100 |
| | 500 |
| bottom | 200 |

After the pop() operation, the value 100 will be removed from the top of the stack and assigned to the variable s. Therefore, the value of s will be 100. The resulting stack will be:

| | |
|---|---|
| top | 500 |
| bottom | 200 |

So the final answer is: S = 100.

**7. Explain following program while part in step for the input 1221 and 3456 and also write the output of the program. (লেসপুল ধর্ম সম্পর্কিত কোন স্থবর হয় নি!!)**

---

**Teletalk**
**Assistant Manager (IT)**
**Exam: 2023**

**1. Minimize the following function in SOP minimal form using K-map:**

**Answer:** [See BPSC, (Ministry of Home Affairs), Assistant Database Administrator, Exam: 2022 (CSE)]
