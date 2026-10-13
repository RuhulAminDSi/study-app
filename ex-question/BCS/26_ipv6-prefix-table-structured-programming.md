# IPv6 address type prefix table; structured programming language and dynamic memory allocation program

- **Source image:** `26_ipv6-prefix-table-structured-programming.jpg` (original file name `490420093_1232701035525475_3470310426375716747_n.jpg`)
- **Page:** 26 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 572
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- The page opens with the IPv6 address-type table promised at the foot of the previous page (question 4 (c)); the lead-in sentence for the table is not repeated here.
- The "Global Unicast (everything else)" row is printed spanning the full width of the table with empty Binary Prefix and Hex Prefix cells; this is as printed, not an omission in transcription.
- The C program in 5 (b) has irregular indentation in the original (several lines flush left); the code is reproduced as printed.
- The page ends with the bare word "Output:" — the actual program output continues on the next page and is not visible here.
- No handwritten marginalia observed on this page.

## Content

| Address Type | Binary Prefix | Hex Prefix |
|---|---|---|
| Unspecified | 0000...0 (128 bits) | ::/128 |
| Loopback | 000...01 (128 bits) | ::1/128 |
| IPv4 Mapped | 00...011111111111111111 (96 bits) | ::FFFF/96 |
| Multicast | 11111111 | FF00::/8 |
| Link-Local Unicast | 1111111010 | FE80::/10 |
| Unique Local Unicast (ULA) | 1111110 | FC00::/7 |
| Global Unicast (everything else) | | |

**5. (a) What is structured programming language? Explain with example.**

**Answer:**

Structured programming is a logical programming method that is considered a precursor to object-oriented programming (OOP). Structured programming facilitates program understanding and modification and has a top-down design approach, where a system is divided into compositional subsystems. Structured programming is a procedural programming subset that reduces the need for goto statements. In many ways, OOP is considered a type of structured programming that deploys structured programming techniques. Certain languages like- Pascal, Algorithmic Language (ALGOL) and Ada – are designed to enforce structured programming.

**(b) Write a program to store information using structures with dynamically memory allocation.**

**Answer:**

```c
#include <stdio.h>
#include <stdlib.h>
struct course {
    int marks;
    char subject[30];
};
int main() {
    struct course *ptr;
    int i, noOfRecords;
    printf("Enter the number of records: ");
    scanf("%d", &noOfRecords);
    // Memory allocation for noOfRecords structures
ptr=(struct course*)malloc(noOfRecords*sizeof(struct course));
for(i=0;i< noOfRecords;++i) {
printf("Enter name of the subject and marks respectively:\n");
    scanf("%s %d",&(ptr + i)->subject, &(ptr + i)->marks);
    }
    printf("Displaying Information:\n");
    for(i=0;i< noOfRecords;++i)
    printf("%s\t%d\n", (ptr + i)->subject, (ptr + i)->marks);
    return 0;
    }
```

**Output:**