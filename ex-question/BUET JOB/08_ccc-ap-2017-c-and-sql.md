# BCC Assistant Programmer Written Test 2017 — C programs, second-highest salary SQL, output traces

- **Source image:** `08_ccc-ap-2017-c-and-sql.jpg` (original file name `494416211_9665564206892477_1496909958117221864_n.jpg`)
- **Page:** 8 of 38 (folder-wide position, i.e. 1-19 here) — printed page numbers on the scan: **627 and 628** (two book pages captured in a single scan)
- **Paper / Post:** **BCC, Assistant Programmer, Written Test: 2017** — coaching compilation: "COMPACT IT Written" / Previous Exam Questions, COMPACT IT JOB SOLUTION
- **Exam date:** 2017
- **Marks:** not shown

## Transcription Notes

- **This single scan contains two printed pages of the original book: page 627 (top half) and page 628 (bottom half).** Both are transcribed in full below, in order.
- On page 627 the very first line is a partial fragment carried over from the preceding page of the original document — only the words `FROM Student;` are visible (top half of the letters clipped). Recorded verbatim with a `[cut off]` marker.
- **Question 2 spans the page break.** Its heading and first lines (`#include <stdio.h>`, `int main(){`, the `array[100], n, c, d, position, t;` declaration and the first `printf`) are on page 627; the code block is physically interrupted there by the footer, and the remaining lines resume at the top of page 628. The two halves have been joined here for readability, and the break is noted explicitly.
- **Question 5 is cut off** at the bottom edge of page 628: the program ends at `return 0;` with the closing `}` and the printed `Output:` line falling on the following page of the original document. Marked `[cut off]`.
- Note: page 628's header rule is the "Previous Exam Questions" running head and its footer is the standard "COMPACT IT Written / Page | 628" — these repeated running heads and footers have been omitted per the transcription rules.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.
- Re-transcribed from the image on 2026-10-08 (fixed: the paper is **BCC** (Bangladesh Computer Council), not CCC — title, metadata and heading corrected, file name kept; Q4 reads `m=++i && ++j && ++k;` (was `+i`); Q5 reads `*((a)?&b:&a)=a?b:c;` (outer parentheses were dropped); Q2's input loop `for (c = 0; c < n; c++)` has no opening brace in print (a stray `{` had been added); top fragment is `FROM Student;` in capitals). The printed Q4 output `-19, 0, 2, 0` checks out.

## Content

`[cut off — carried over from the preceding page of the original document]`

```
FROM Student;
```

---

## BCC, Assistant Programmer, Written Test: 2017

*(printed page 627)*

**1. Write a C program to reverse an integer number.**

**Answer:**

```c
#include <stdio.h>
int main() {
   int n, rev = 0, remainder;
   printf("Enter an integer: ");
   scanf("%d", &n);
   while(n!=0) {
       remainder = n % 10;
       rev = rev * 10 + remainder;
       n/= 10;
   }
   printf("Reversed number = %d", rev);
   return 0;
}
```

**2. Write a C program to acending (A-Z) using selection sort.**

**Answer:**

```c
#include <stdio.h>
int main(){
    int array[100], n, c, d, position, t;
    printf("Enter number of elements\n");
```

`[page break — code continues at the top of printed page 628]`

```c
    scanf("%d", &n);
    printf("Enter %d integers\n", n);
    for (c = 0; c < n; c++)
        scanf("%d", &array[c]);
    for(c=0; c<(n - 1); c++) {
        position = c;       // finding minimum element (n-1) times
        for (d = c + 1; d < n; d++){
            if (array[position] > array[d])
                position = d;
        }
        if (position != c){
            t = array[c];
            array[c] = array[position];
            array[position] = t;
        }
    }
    printf("Sorted list in ascending order:\n");
    for (c = 0; c < n; c++)
        printf("%d\n", array[c]);
    return 0;
}
```

**3. Write a SQL query to get second highest salary from Employee table.**

**Answer:**

```sql
SELECT MAX(salary) FROM Employee WHERE Salary NOT IN (SELECT Max(Salary) FROM Employee);

SELECT MAX(Salary) From Employee WHERE Salary<(SELECT Max(Salary) FROM Employee);

SELECT Salary FROM (SELECT Salary FROM Employee ORDER BY salary DESC LIMIT 2) AS Emp ORDER BY salary LIMIT 1;
```

**4. Write output:**

```c
#include <stdio.h>
int main(){
   int i=-20, j=-1, k=2,m;
   m=++i && ++j && ++k;
   printf("%d, %d, %d, %d\n", i,j,k,m);
   return 0;
}
```

**Output:** -19, 0, 2, 0

**5. Write output:**

```c
#include <stdio.h>
int main(){
   int a=0, b=1, c=2;
   *((a)?&b:&a)=a?b:c;
   printf("%d, %d, %d\n",a,b,c);
   return 0;
```

`[cut off — closing brace and the printed Output: line fall on the following page of the original document]`
