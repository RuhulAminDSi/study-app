# Heap construction by successive insertion and deletion of element 7

- **Source image:** `04_heap-insert-and-delete-7.jpg` (original file name `494185262_9672704129511818_5082414217428534650_n.jpg`)
- **Page:** 4 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **276**
- **Paper / Post:** not shown (no paper banner is printed on this page; the next page carries the banner "PGCB, Sub-Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)")
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page. The trailing paragraph about blacklists is the tail of the answer to the preceding question, and questions 8–9 of this same paper appear on printed page 277, where the banner reads "PGCB, Sub-Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)". Recorded here as "not shown" because it is not printed on this page.
- **Figures transcribed as text.** All seven tree diagrams (six insertion steps plus the final post-deletion tree) have been re-rendered as indented text trees inside code blocks. Node values and parent/child relationships are exactly as printed; no values were added or changed.
- The six insertion diagrams are printed on the page in two columns, step (1)–(2) on the top row, (3)–(4) on the middle row, (5)–(6) on the bottom row. They are linearised here in numeric order.
- The compiled document prints the coach's own worked answer inline with the question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Tail of the answer to the preceding question)

Blacklist is more secure. Because blacklists can be compiled manually or automatically, and can be created by analyzing data traffic and identifying malicious or unauthorized connections. Blacklisting is often used for filtering out unwanted content from social networks or websites.

**7. Given an array of 6 elements: {15, 19, 10, 7, 17, 16}. Draw heap tree and again draw the tree after deletion of element 7 from this tree.**

**Answer:** The tree will be constructed as explained below-

**(1) Insert: 15**

```
15
```

**(2) Insert: 19**

```
15
 \
  19
```

**(3) Insert: 10**

```
      15
     /  \
   10    19
```

**(4) Insert: 7**

```
        15
       /  \
     10    19
    /
   7
```

**(5) Insert: 17**

```
        15
       /  \
     10    19
    /      \
   7        17
```

**(6) Insert: 16**

```
          15
         /  \
       10    19
      /        \
     7          17
                /
               16
```

After deletion element 7, the tree s: the element 7 has no child node, so simply delete the element 7. And the tree is:

```
          15
         /  \
       10    19
                \
                 17
                 /
                16
```

[Note: the sentence "After deletion element 7, the tree s:" is printed with a stray "s" in the source and is reproduced verbatim.]
