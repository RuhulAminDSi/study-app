# Numeric pattern in C++, processor data/address widths, blacklisting vs whitelisting

- **Source image:** `13_pattern-processor-widths-blacklist.jpg` (original file name `494739171_9672704126178485_2689948913954828500_n.jpg`)
- **Page:** 13 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **275**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-calculation:** the `= 0.8 * 5 + 0.2*50` / `= 4 + 10` / `= 14 ns` lines are the tail of the answer to the preceding question (the average read access time question), whose statement and the first lines of the working are on printed page 274 of the original document. Reproduced verbatim as a continuation block.
- **Question 4's output pattern is a printed monospace block**, shown here in a fenced code block with the original line breaks preserved.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected. (Note question 6's answer opens with "Whitelisting" bolded in both of its first two paragraphs — this is how the source prints it, and it has been left exactly as printed rather than "corrected" to Blacklisting.)
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Tail of the answer to the preceding question)

```
= 0.8 * 5 + 0.2*50
= 4 + 10
= 14 ns
```

**4.** *(the following printed pattern)*

```text
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

**Pattern this print using C++ program-**

**Answer:**

```cpp
#include <stdio.h>
int main() {
    int i, j;
    for(i=5;i>=1;i--) {
        for(j=1;j<=i;j++) {
            printf("%d",j);
        }
        printf("\n");
    }
    return 0;
}
```

**5. 8-bit microprocessor and 16-bit microprocessor write the data and address widths?**

**Answer:**

| | |
|---|---|
| 8-bit microprocessor data width | = 8-bit |
| 8-bit microprocessor address width | = 16-bit |
| 16-bit microprocessor data width | = 16-bit |
| 16-bit microprocessor address width | = 20-bit |

**6. Difference between blacklisting and whitelisting. Which is more secure and why?**

**Answer:**

**Whitelisting** is a defensive measure, used to protect against malware and other malicious software. It works by allowing only trusted executables, applications and websites to run on an organization's systems.

**Whitelisting** is a cybersecurity term that refers to the process of identifying and permitting safe content. It means blocking all other content from entering the network by default and then only permitting specific files that have been pre-approved.

**Blacklisting** is a security measure that keeps certain people, web sites or programs from a computer or network. In other words, it refers to the practice of blocking unauthorized access to a system resource.

A **blacklist** is a list of hosts that are not allowed to access a certain service, and this list is often used by antivirus software as well as firewalls.

[answer continues on the following page of the original document, which states that "Blacklist is more secure."]
