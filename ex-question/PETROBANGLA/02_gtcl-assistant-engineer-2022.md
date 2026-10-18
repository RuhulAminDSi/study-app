# GTCL Assistant Engineer (CSE) 2022 (BUET) — Q34 (DBMS-provided vs application-provided security) and Q1 (recursive sum of digits)

- **Source image:** `02_gtcl-assistant-engineer-2022.jpg` (original file name `495711923_9767686406680256_2906160229476847447_n.jpg`)
- **Page:** 2 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** GTCL (Gas Transmission Company Limited) — Assistant Engineer (CSE); Exam: 2022 (BUET)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- Q34 is the tail of the preceding paper's question numbering; the paper banner for that question is not on this page, so its organisation/post cannot be identified from this image.
- The `if (n == 0)` guard in the Q1 code is printed as `if (n = 0)` (single `=`). Reproduced verbatim as printed.
- The Q1 code is cut off by the bottom of the page immediately after `return 0;` — the remainder of `sum_of_digit()` and the whole of `main()` continue onto the next page.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

**34. Describe the advantages and disadvantages of DBMS-provided and application provided security.**

**Answer:**

**DBMS provided security:** Any database system requires to login and then process the data depending on the rights given by the DBA to the user who has logged in. The advantage of such a system is securing the data and providing the user and the DBA the secured platform. Any user who logs in cannot do whatever he want but his role can be defined very easily. There is no major disadvantage about the DBMS provided security apart from overhead of storing the rights and privileges about the users.

**Application-provided security:** It is much similar to the DBMS provided security but the only difference is that it's the duty of the programmer creating the application to provide all the securities so that the data is not mishandled.

**Advantages of DBMS**

- Controls database redundancy: All the data is stored in one place, and that recorded in the database and hence controls the redundancy in the database.
- Data sharing: DBMS allows users with authority to share the data in the database with multiple users.
- Easy Maintenance: The centralized nature of the database helps in the easy maintenance of the data.
- Reduce time: It reduces the maintenance need and development time.
- Backup: It automatically backs up data to maintain its integrity in case of failure.
- Multiple user interfaces: It offers a number of user interface to multiple users.

**Disadvantages of DBMS:**

- Database is quite costly and demanding.
- Lower efficiency

---

**GTCL**
**(Gas Transmission Company Limited)**
**Assistant Engineer (CSE)**
**Exam: 2022 (BUET)**

**1. Write a program with a recursive function that shows the sum of its digits. For example, input =3426, output will be 3+4+2+6=15.**

**Answer:**

```c
    #include <stdio.h>
    int sum_of_digit(int n){
        if (n == 0)
            return 0;
        [cut off]
```
