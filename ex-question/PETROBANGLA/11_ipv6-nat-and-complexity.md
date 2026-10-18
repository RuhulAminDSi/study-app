# Tail of the string-removal C program, Q2 (IPv4/IPv6 bit sizes, why NAT is not needed in IPv6), Q3 (complexities), Q4 (PCB), Q5 (IPv4 validation program)

- **Source image:** `11_ipv6-nat-and-complexity.jpg` (original file name `496845113_9767686520013578_1839818320119859695_n.jpg`)
- **Page:** 11 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** RPGCL (Rupantaritrita Prakritik Gas Company Limited) — Assistant Manager (ICT); Exam: 2022 (BUET). (This banner is on the previous page; questions 1–5 belong to that paper.)
- **Exam date:** not shown (printed only as "Exam: 2022 (BUET)")
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- No exam banner appears on this page itself; it continues the RPGCL Assistant Manager (ICT) Exam: 2022 (BUET) paper whose banner is on the preceding page. That paper also carries a cross-reference to BPSC (Ministry of Home Affairs), Assistant Database Administrator, Exam: 2022 (CSE).
- The page opens mid-`main()` of Q1's C program (remove given character from string), started two pages earlier. Note the printed `scanf("%[^\n]%c",str,&c);` — reproduced verbatim.
- The `printf("String after removing '%c': %s", ch, str);` line is printed as such; the quoted format is reproduced exactly.
- Q3's answer prints "Binary search complexity: Best case: O(1), Worst case: O(log n)" and "Quick sort: Best case: O(n), Worst case: O(n²)" — reproduced as printed even though the binary-search worst case is normally given as log n; no correction made.
- Q4's answer is a cross-reference only ("[See BPSC (Security Services Division), Assistant Maintenance Engineer, Exam: 2021]") — the referenced answer is not on this page.
- Q5's answer is cut off by the bottom of the page immediately after the `#include` line.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

```
        scanf("%[^\n]%c",str,&c);
        printf("Enter a char you want to remove : ");
        scanf("%c",&ch);
        removeChar(str,ch);
        printf("String after removing '%c': %s", ch, str);
        getch();
    }
```

**2. IPv4 and IPv6 how many bits and Why is NAT not needed in IPv6?**

**Answer:**

**IPv4:** IPv4 is an IP version widely used to identify devices on a network using an addressing system. It was the first version of IP deployed for production in the ARPANET in 1983. It uses a 32-bit address scheme to store 2^32 addresses which is more than 4 billion addresses. It is considered the primary Internet Protocol and carries 94% of Internet traffic.

**IPv6:** IPv6 is the most recent version of the Internet Protocol. This new IP address version is being deployed to fulfill the need for more Internet addresses. It was aimed to resolve issues that are associated with IPv4. With 128-bit address space, it allows 340 undecilion unique address space. IPv6 is also called IPng (Internet Protocol next generation).

**NAT not needed in IPv6:**

Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large. The large number of public IPv6 addresses eliminates the need for NAT. Sites from the largest enterprises to single households can get public IPv6 network addresses. This avoids some of the NAT-induced application problems that are experienced by applications that require end-to-end connectivity.

**3. Find out Best case, Worst case complexity of Binary search, Quick sort, Depth First Search.**

**Answer: Binary search complexity–**

```
    Best case: O(1)
    Worst case: O(log n)
```

**Quick sort–**

```
    Best case: O(n)
    Worst case: O(n^2)
```

**Depth First Search–**

```
    Time Complexity: O (V+E) where V is vertices and E is edges.
```

**4. Write down the name of four information stored in PCB (Process Control Block).**

**Answer:** [See BPSC (Security Services Division), Assistant Maintenance Engineer, Exam: 2021]

**5. Write a program IPv4 IP validation from given IP with valid and not valid.**

**Answer:**

```c
    #include <bits/stdc++.h>
    [cut off — the program continues on the next page]
```
