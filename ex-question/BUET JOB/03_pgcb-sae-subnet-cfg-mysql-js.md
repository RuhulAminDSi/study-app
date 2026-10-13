# PGCB Sub-Assistant Engineer (CSE) 30.09.2021 — Class A subnetting, context-free grammar, MySQL backup, JavaScript if-else

- **Source image:** `03_pgcb-sae-subnet-cfg-mysql-js.jpg` (original file name `494179898_9672703732845191_8843041113094488582_n.jpg`)
- **Page:** 3 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **277**
- **Paper / Post:** Two papers on this page. Top: end of an earlier paper (not shown, no banner visible above it). Then banner: **PGCB, Sub-Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)** — coaching compilation: "COMPACT IT Written" / Previous Exam Questions, COMPACT IT JOB SOLUTION
- **Exam date:** 30.09.2021 (PGCB Sub-Assistant Engineer); not shown for the preceding section
- **Marks:** not shown

## Transcription Notes

- The page carries two distinct papers. Questions 8 and 9 belong to the preceding paper (no banner for it appears on this page). The "PGCB, Sub-Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)" banner then starts a new paper, whose questions 1 and 2 appear below it. Question numbers therefore restart at 1 mid-page; this is as printed and has been preserved.
- **Bengali preserved verbatim, not translated.** Question 1: "MySQL database এর ক্ষেত্রে Backup and Restore করার কমান্ড লিখ?" Question 2: "if-else ব্যবহার করে Javascript দিয়ে নিচের কোডটি সম্পন্ন কর, যেন Output ডান পাশের মত আসে।"
- Question 2 prints the code in a left column and the expected "Output:" in a right column; reproduced here as a two-column table to preserve that side-by-side pairing.
- The compiled document prints the coach's own worked answers inline with each question. These are reproduced faithfully as they appear and have **not** been corrected, verified, or added to.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (End of preceding paper — no banner shown)

**8. In a "Class A" network total 20 subnets are needed with maximum 260 hosts per subnets. Can 255.255.255.0 subnet mask be used in this?**

**Answer:** No, subnet mask 255.255.255.0 has 16 bits for the subnet and 8 bits of the host. And possible 2⁸ – 2 hosts = 254 which is not enough.

**9. Context free Grammar: (like as…..)**

**Answer:** A context-free grammar (CFG) consisting of a finite set of grammar rules is a quadruple (N, T, P, S) where

N is a set of non-terminal symbols.

- T is a set of terminals where N ∩ T = NULL.
- P is a set of rules, P: N → (N ∪ T) \*, i.e., the left-hand side of the production rule P does have any right context or left context.
- S is the start symbol.

**Example**

- The grammar ({A}, {a, b, c}, P, A), P: A → aA, A → abc.
- The grammar ({S, a, b}, {a, b}, P, S), P: S → aSa, S → bSb, S → ε
- The grammar ({S, F}, {0, 1}, P, S), P: S → 00S | 11F, F → 00F | ε

---

## PGCB, Sub-Assistant Engineer (CSE), Exam: 30.09.2021 (BUET)

**1. MySQL database এর ক্ষেত্রে Backup and Restore করার কমান্ড লিখ?**

**Answer:**

**Backup Command:**

```
sudo mysqldump -u [user] -p [database_name] > [filename].sql
```

**Restore Command:**

```
mysql -u [user] -p [database_name] < [filename].sql
```

**2. if-else ব্যবহার করে Javascript দিয়ে নিচের কোডটি সম্পন্ন কর, যেন Output ডান পাশের মত আসে।**

| Code | Output |
|---|---|
| `<html>`<br>`<body>`<br>&nbsp;&nbsp;`<script>`<br>&nbsp;&nbsp;`for(var x=1;x<=9; x++) {`<br>&nbsp;&nbsp;&nbsp;&nbsp;`if(x%2==0) {`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`console.log(x+"is an even value.");`<br>&nbsp;&nbsp;&nbsp;&nbsp;`}`<br>&nbsp;&nbsp;&nbsp;&nbsp;`else{`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`console.log(x+ "is an odd value.");`<br>&nbsp;&nbsp;&nbsp;&nbsp;`}`<br>&nbsp;&nbsp;`}`<br>&nbsp;&nbsp;`</script>`<br>`</body>`<br>`</html>` | **Output:**<br>1is an odd value.<br>2is an even value.<br>3is an odd value.<br>4is an even value.<br>5is an odd value.<br>6is an even value.<br>7is an odd value.<br>8is an even value.<br>9is an odd value. |

[question continues on the following page of the original document]
