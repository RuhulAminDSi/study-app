# C recursion output, SQL count/COUNT DISTINCT, and Java class completion

- **Source image:** `06_c-recursion-sql-java-completion.jpg` (original file name `494203872_9665564330225798_1785922879015373598_n.jpg`)
- **Page:** 6 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **224**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- The page **begins mid-question**: the C program is already running when the page starts (the question heading and the first few lines of the program are on the preceding page of the original document, not in this set). The program is reproduced from its first visible line.
- **Cut off at the bottom edge:** question 6 ("Complete the following java program.") ends mid-class declaration at `class Gamma extends A{` / `int gamma;` — the closing part of the code is on the following page of the original document (printed page 225). Marked `[cut off]`.
- **Handwritten marginalia:** there is a short red pen stroke/mark in the left margin beside question 5. It carries no legible text and **is not part of the official paper**.
- Question 6 contains grey-highlighted boxes drawn around parts of the printed answer (`public Gamma(int alpha, int beta, int gamma){ … }` and `super.display(); System.out.println("Gamma"+gamma);`) — that highlighting belongs to the printed answer on the continuation page, not to this scan.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected. (Note that the printed "Output" list for question 5 gives "Total number of value: 6" and "val_count 5" — reproduced verbatim.)
- Marks are not printed anywhere in this compilation.

## Content

```c
#include<stdio.h>
int function(int x[],int i){
        int s=x[i];
        if(i>0){
                s+=function(x,i-1);
        }
        printf("%d",s);
        return s;
}
int main(){
        int y[]={1,3,2,8};
        function(y,2);
        return 0;
}
```

**Output:** 146

**5. What will be the output after running all the following queries?**

```sql
CREATE Table t(
val INT
);
INSERT INTO t(val)
values (1), (2), (3), (null), (null), (4), (5);
SELECT count (*) val_count
From t;
SELECT count(Distint val) val_count
From t;
```

**Output:**

- Create table name "t" with one attribute name "val", which type is integer.
- Insert value into "val" attribute.
- Total number of value: 6
- val_count 5

**6. Complete the following java program.**

```java
class A{
int alpha;
int beta;
public A(int alpha, int beta){
      this.alpha = alpha;
      this.beta = beta;
}
public void display(){
System.out.println("Alpha"+alpha+ "\nBeta"+beta);
}
}
class Gamma extends A{
      int gamma;
```

`[cut off — remainder of the java program is on the following page of the original document]`
