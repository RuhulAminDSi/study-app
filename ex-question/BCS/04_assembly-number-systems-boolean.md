# COMPACT IT Recent Question Bank (Written) — Assembly language, decimal/octal/binary of (E)₁₆, and Boolean function (Q19d, Q20a-b)

- **Source image:** `04_assembly-number-systems-boolean.jpg` (original file name `487454802_775600591482268_7836187799881260770_n.jpg`)
- **Page:** 4 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 5 for each of (d), 20(a), 20(b)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Part (d) has no parent question number on this page (stem is on the preceding page).
- The printed answer for Q20(a) is internally garbled as it appears in the scan: it writes `(E)16 = (?)10` and `Binary to Octal = 001 111 ∴ (001111)2 = (17)8`, with the arrows labelled 1 and 7 beneath. Transcribed as printed, including the apparent errors.
- No handwritten marginalia on this page.
- Reviewer note: (E)₁₆ = (14)₁₀ = (1110)₂ = (16)₈ — the printed 15, 1111 and 17 are each off by one (E×16⁰ = 14×1, not E×15⁰ = 15×1). The sequence part (6FC, 6FE → 700, 702, 704, 706) is not answered on this page.
- Re-transcribed from the image on 2026-10-08 (fixed: Q20(b) function is F = A'B'C + A'BC + AB', not A'B'C' + …; rest of the page checked against the image and unchanged).

## Content

**(d) What is assembly language? Write its features. Write a program in assembly language to add and multiply two numbers.** — **5**

**Answer:** Assembly language, type of low-level computer programming language consisting mostly of symbolic equivalents of a particular computer's machine language. Computers produced by different manufacturers have different machine languages and require different assemblers and assembly languages.

**Features of assembly language:** The following are the characteristics of the assembly language:

- It may use a mnemonic rather than a numeric operation code, and it also reports any code faults.
- Using this language to specify the symbolic operand eliminates the requirement to provide the operand's machine address. It is possible to represent it with a symbol. The data can be declared using decimal notation.

**Assembly language to add and multiply two numbers:**

```asm
section .data
    number1 dd 10;
    number2 dd 5;
    result_add dd 0;
    result_mul dd 0;
section .text
    global _start
_start:
    ; Add the numbers
    mov eax, dword [number1] ;
    add eax, dword [number2] ;
    mov dword [result_add], eax;
    ; Multiply the numbers
    mov eax, dword [number1] ;
    imul eax, dword [number2] ;
    mov dword [result_mul], eax ;
    ; Exit the program
    mov eax, 1; System call number for exit
    xor ebx, ebx; Exit code 0
    int 0x80; Perform system call
```

---

**20. (a) Write the decimal, octal and binary form of the number (E)₁₆. Write the next four numbers in the following hexadecimal sequences: 6FC, 6FE, ________, ________, ________.** — **5**

**Answer:**

- (E)₁₆ to Decimal = E×15⁰ = 15×1 = (15)₁₀
- (E)₁₆ = (?)₁₀

Firstly, (E)₁₆ = (1111)₂ ; Now, Binary to Octal = 001 111 ∴ (001111)₂ = (17)₈
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;↓
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;7

- (E)₁₆ to Binary = (1111)₂

**(b) What is Boolean function? How can we simplify the following Boolean function?** — **5**

**F = A'B'C + A'BC + AB'**

**Answer:**
