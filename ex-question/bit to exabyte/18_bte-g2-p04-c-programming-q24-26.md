# Bit to Exabyte — Super ICT 150++ Questions Book (previous questions, chapter by chapter), book page 4 — C Programming, Q24–26 (output tracing)

- **Source image:** `18_bte-g2-p04-c-programming-q24-26.jpg` (original file name `837950049_122143270665191819_2486654123295340346_n.jpg`)
- **Page:** printed "Bit to Exabyte | 4"; folder position 18 of 71
- **Paper / Post:** none: a **compiled list of previous recruitment-exam questions**, grouped by topic; every question carries its own exam tag(s) in square brackets
- **Exam date:** per question (year inside each tag)
- **Marks:** not printed

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"); Part A of the book indexed in `../Standard Pattern/`. A faint logo watermark sits behind the text and hides nothing.
- Questions and exam tags are verbatim (tag spelling as printed, e.g. post abbreviations AME, AP, SAE, AE(CSE), ANE). Typos in questions are kept.
- Second upload group of this folder: a separate "Previous Questions" chapter set whose page numbering restarts at 1 (book pages here are group-2 page numbers).
- Q24 gives the array but no explicit task beyond the definition (maximum subarray; answer 3 for [2, 1]).
- Q25 prints a code fragment without `main` or headers, as printed. Q26 second program continues on page 5.

## Content

24. The maximum subarray is the task of finding a contiguous subarray with the largest sum within a given one dimensional array of numbers. Suppose the array is:
    A: [-2, 1, -3, -1, 2, 1, -5, 4] *[BPDB AE(CSE) 2023]*
25. Find the output of following program: *[BGDCL AE (CSE) 2021]*

```c
int i, j, p, sum;
sum = 0;
for(i = -1, p = 0; i <= 10; i = i + 2) {
    p = i * i;
    if(i > 5)
        break;
    sum = sum + (i + p);
    printf("i=%d, p=%d, sum=%d\n", i, p, sum);
}
printf("\n Outsite Loop, i=%d, p=%d, sum=%d\n", i, p, sum);
return 0;
```

26. Find the output of following program: *[PSB AP 2018]*

```c
int main() {
    int n = 10;
    for(;;)
        printf("%d", n);
    return 0;
}
```
Or
```c
int main() {
    int i = 2, j = 2;
    while(i ? --i : j++)
```
*(continued on page 5)*
