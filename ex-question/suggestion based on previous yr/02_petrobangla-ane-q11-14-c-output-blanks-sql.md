# Bit to Exabyte — Petrobangla Assistant Networking Engineer (ANE): suggested questions, Q11 (code)–14

- **Source image:** `02_petrobangla-ane-q11-14-c-output-blanks-sql.jpg` (original file name `843048510_122143463067191819_2644837407395645742_n.jpg`)
- **Page:** 2 of 10 (folder-wide position; the pages carry no printed page number)
- **Paper / Post:** Assistant Networking Engineer (ANE), Petrobangla, "AP" — **suggested questions** compiled by the coaching from previous years, not a single real paper
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"). A faint logo watermark sits behind the text and hides nothing.
- No per-question exam tags are printed. These items count as "suggested for Petrobangla ANE", not as asked in a dated exam.
- Spelling and grammar are kept as printed; obvious typos are listed here, not corrected in the text.
- Code is reproduced exactly, including the original layout. In Q12 the `printf` after `continue;` is unreachable, and since `i` starts equal to `n` (both 0) the `while` body never runs; the closing braces and `return 0;` placement are as printed.
- Q13(b) reads "names are converted into domain name ." in the source (probably meant "domain names are converted into IP addresses ______").
- Typos kept as printed: "physival", "sevices".

## Content

*(Q11, continued)*

```c
#include <stdio.h>
int main(){
int a=3,b=10;
if(a>b)
printf("A");
else
printf("B");
return 0;
}
```

12. What is the output of the following code.

```c
#include <stdio.h>
int main(){
int i=0;
int n=0;
while(i!=n){
    if(i==3){
    continue;
    printf("%d",i);
    }
    printf("%d",i);
    i++;
    return 0;
}
}
```

13. Write the blanks...
    a. IP address converted into physival address ______.
    b. names are converted into domain name .
    c. Mail transferred between ______ protocol.
    d. ______ is responsible for converting IP address into mac Address.
    e. HTTP sevices provides using which protocol.
14. SQL query to find avg salary of all is greater than the salary of each department. Given table: Employee(emp_id, name,salary,city,dept).

## Subject map (for Phase 2)

| Q | Subject | Topic |
|---|---|---|
| 12 | SPL | Output tracing: while/continue |
| 13 | NET | Fill in: ARP, DNS, SMTP, HTTP/TCP |
| 14 | DBMS | SQL: overall AVG vs department salaries (subquery) |
