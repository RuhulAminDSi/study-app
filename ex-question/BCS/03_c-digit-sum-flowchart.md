# COMPACT IT Recent Question Bank (Written) — Array passing in C, C program to sum digits of a 5-digit number with flowchart (Q c)

- **Source image:** `03_c-digit-sum-flowchart.jpg` (original file name `487452555_775600261482301_5067812199193547928_n.jpg`)
- **Page:** 3 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 10 for Q(c)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Top of page is a continuation: a pointer/array-passing diagram belonging to part (b), whose question stem is on the preceding page.
- The flowchart is reproduced as a labelled node/branch listing; the printed diagram itself is a graphic.
- The question is printed as "(c)" with the parent question number off-page.
- No handwritten marginalia on this page.

## Content

*[Continuation of part (b) — diagram of passing an array to a function in C]*

- Arrow label top-left: "Pointer to arr"
- Arrow label top-right: "Length of arr"

```
void func(int arr[], int size)
{
}

int main()
{
    int n=5;
    int arr[5] = {1, 2, 3, 4, 5};
    func(arr, n);
    return 0;
}
```

- Left annotation: "Pointer a takes the base address of array arr"
- Right annotation: "The length of arr is passed it is compulsory to pass size is just a pointer"

---

**(c) Write a C program to sum all digits of a 5-digit number. Draw the flowchart of this program.** — **10**

**Answer:**

```c
#include <stdio.h>
int main() {
    int number, sum = 0;
    printf("Enter a 5-digit number: ");
    scanf("%d", &number);
    if (number < 10000 || number > 99999) {
        printf("Error: Input is not a 5-digit number.\n");
        return 1;
    }
    while (number > 0) {
        sum += number % 10;
        number /= 10;
    }
    printf("Sum of digits: %d\n", sum);
    return 0;
}
```

**Flowchart** (as printed):

| Node / Shape | Text | Branch |
| --- | --- | --- |
| Terminator | Start | — |
| Parallelogram | Input n | — |
| Decision | If n>0 | Yes → down to "Print not possible"; No → down to S=0,m=n |
| Process | S=0,m=n | arrow marked `1`<sub>5</sub> |
| Decision (loop) | Repeat until n=0 | No → down to r=n%10 |
| Process | r=n%10 | — |
| Process | S=S+r | — |
| Process | n=n/10 | loop back to "Repeat until n=0" |
| Output | print m, s | — |
| Process | Print not possible | — |
| Terminator | Stop | — |
