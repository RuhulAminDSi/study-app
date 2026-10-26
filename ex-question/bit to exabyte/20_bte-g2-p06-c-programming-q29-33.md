# Bit to Exabyte — Super ICT 150++ Questions Book (previous questions, chapter by chapter), book page 6 — C Programming, Q29–33

- **Source image:** `20_bte-g2-p06-c-programming-q29-33.jpg` (original file name `833889744_122143270749191819_7080068239763840892_n.jpg`)
- **Page:** printed "Bit to Exabyte | 6"; folder position 20 of 71
- **Paper / Post:** none: a **compiled list of previous recruitment-exam questions**, grouped by topic; every question carries its own exam tag(s) in square brackets
- **Exam date:** per question (year inside each tag)
- **Marks:** not printed

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"); Part A of the book indexed in `../Standard Pattern/`. A faint logo watermark sits behind the text and hides nothing.
- Questions and exam tags are verbatim (tag spelling as printed, e.g. post abbreviations AME, AP, SAE, AE(CSE), ANE). Typos in questions are kept.
- Second upload group of this folder: a separate "Previous Questions" chapter set whose page numbering restarts at 1 (book pages here are group-2 page numbers).
- Q29 and Q30 have no exam tag; Q29's conditional statement is not printed.

## Content

29. What will be the outcome of the following conditional statement if the value of variable s is 10?
30. What would happen to X in this expression: x+=15; (assuming the value of X is 5)
31. Find the output from the following: take input and looks the output: *[BGDCL, AM(CSE)2024]*

```c
#include <stdio.h>
int reverseNumber(int num) {
    int reverse = 0;
    while (num != 0) {
        reverse = reverse * 10 + num % 10;
        num /= 10;
    }
    return reverse;
}
int main() {
    int input, output;
    printf("Enter a number: ");
    scanf("%d", &input);
    output = reverseNumber(input);
    printf("Input: %d\n", input);
    printf("Output: %d\n", output);
    return 0;
}
```

32. Write a C program to print Fibonacci series without using recursion and using recursion. *[17th NTRCA(CSE) 2023; BB AP 2016]*
33. Write a C program to find nth Fibonacci number using Recursion. *[KGDCL AE(CSE) 2021]*
