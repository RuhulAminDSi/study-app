# I/O, Files, Errors & Linking in C: Revision Notes (Govt IT Exam)

> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Structured programming language):** "Structured programming language: data types, operators, expressions, control structures; Functions and program structure: parameter passing conventions, scope rules and storage classes, recursion; Header files; Preprocessor; Pointers and arrays; Strings; Multidimensional array; User defined data types: structures, unions, enumerations; **Input and Output: standard input and output, formatted input and output, file access; Variable length argument list; Command line parameters; Error Handling; Graphics; Linking; Library functions**." This lesson covers the bold part. Data types and operators, functions and storage classes, header files/preprocessor/pointers/strings, and structures/unions/enums each have their own lesson in this chapter.

**High-yield:** ① scanf: **%f** = float, **%lf** = double ② size_t (strlen, sizeof) → **%zu** ③ fopen fails ⇒ returns **NULL** ④ "w" truncates · "a" always writes at the end ⑤ `./prog one two` ⇒ argc = 3, argv[3] = NULL ⑥ never `va_arg(ap, float)` — use double ⑦ perror writes to **stderr** ⑧ static linking copies only the **needed object modules**; `-lm` links libm.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Standard streams & printf — p. 2 · 2. scanf & character/line I/O — p. 3 · 3. File access & modes — p. 4 · 4. Random access & EOF — p. 5 · 5–6. Variadic functions & argc/argv — p. 6 · 7. Error handling — p. 7 · 8–9. Graphics & library functions — p. 8 · 10. Compiling & linking — p. 9 · Night-before sheet — p. 10 · Practice MCQs + written — p. 11.

**What the whole lesson is for:** a C program talks to the outside world only through **streams** and the **return values** of library calls, and becomes runnable only after the **linker** joins it to those libraries — *streams in, checks on, linker last*.

*(Cover doodle: a mind-map with "C I/O + LINKING" in the centre and eight branches — stdin/stdout/stderr and buffering; printf/scanf ★; fopen modes ★ and text vs binary; the FILE stream (open · use · close); argc/argv ★ and variadic `...`; errno/perror ★ with assert and exit status; graphics.h (BGI); linking ★ static vs dynamic and -lm.)*

---

## 1. Standard Streams & Formatted Output (printf)

A **stream** is C's uniform view of any source or destination of bytes — keyboard, screen, file, pipe — reached through a `FILE *`. Every hosted C program starts with **three streams already open**, declared in `<stdio.h>`:

- **stdin** (fd 0) — keyboard; line-buffered on a terminal.
- **stdout** (fd 1) — screen; line-buffered on a terminal, **fully buffered** when redirected into a file.
- **stderr** (fd 2) — screen; **unbuffered**, shows at once.

*(Doodle: keyboard → stdin → program (printf · scanf) → two arrows to "screen": a green one for stdout (fd 1), a red one for stderr (fd 2); note that `> out.txt` moves stdout only.)*

- ⚠️ **Exam trap:** (i) **stderr** is not a log file: it goes to the screen too, but `prog > out.txt` redirects only stdout, so errors still show. (ii) Text left in the stdout buffer is **lost if the program crashes** — `fflush(stdout)` forces it out.

| Spec. | Argument | Prints |
|---|---|---|
| `%d` `%i` | int | -42 |
| `%u` | unsigned int | 42 |
| `%ld` `%lld` | long, long long | 123456789 |
| `%f` | **double (a float is promoted)** | 3.140000 |
| `%Lf` | long double | 3.140000 |
| `%e` `%g` | double: exponent / shorter form | 3.14e+00 · 3.14 |
| `%c` | char (passed as int) | A |
| `%s` | char * string | Dhaka |
| `%p` | void * pointer | 0x7ffd… |
| `%x` `%X` `%o` | unsigned: hex / octal | ff · FF · 377 |
| `%zu` | **size_t** | 5 |
| `%%` | nothing | a literal % |

**Anatomy of a conversion:** `% [flags] [width] [.precision] [length] letter`

- flags: `-` left-justify · `+` always show the sign · `0` pad with zeros · `#` alternate form (0x for %x, leading 0 for %o) · space = blank before a positive number.
- **width** = a **minimum**, never truncates; `*` takes it from an argument.
- **.precision**: digits after the point for %f/%e; maximum characters for %s.
- **length**: hh, h, l, ll, L, z — the size of the argument.
- **printf returns** the number of characters printed (negative on error) — so `printf("%d", printf("Hello"))` prints **Hello5**.

**Worked example ✍ predict the output** (_ = a space):

| Call | Output |
|---|---|
| `printf("%5d\|", 42)` | `___42\|` |
| `printf("%-5d\|", 42)` | `42___\|` |
| `printf("%05d", 42)` | `00042` |
| `printf("%+d", 42)` | `+42` |
| `printf("%.2f", 3.14159)` | `3.14` |
| `printf("%8.3f\|", 3.14159)` | `___3.142\|` |
| `printf("%#x %X %o", 255, 255, 255)` | `0xff FF 377` |
| `printf("%.3s", "Bangladesh")` | `Ban` |
| `printf("%2d", 12345)` | `12345` (width never cuts) |

- ⚠️ **Trap:** (i) in **printf**, %f serves float *and* double — a float is promoted to double; the split matters only in scanf. (ii) `printf("%d", 3.5)` is **undefined behaviour** — printf never converts. (iii) `strlen` returns **size_t**: print it with **%zu**, not %d or %lu.
- 🟣 **Trick:** "**Flags, Width, Dot, Length, Letter**" — always in that order. "**Minus moves left, zero fills, plus shows.**"

## 2. Formatted Input (scanf) & Character / Line I/O

**scanf** reads characters from stdin, converts them according to the format and **stores each result through a pointer** — so every non-array argument needs `&`. It returns the **number of items assigned**, or **EOF** if input fails before the first conversion. %d, %f and %s skip leading white space; **%c does not**.

| Type | printf | scanf | Why they differ |
|---|---|---|---|
| float | %f | %f | scanf gets a `float *` — 4 bytes |
| double | %f (also %lf since C99) | **%lf** | a `double *` is 8 bytes; %f would fill only 4 |
| long double | %Lf | %Lf | capital L |
| short / long | %hd / %ld | %hd / %ld | the size must match the pointer |
| char | %c | %c, or `" %c"` | the space skips the leftover '\n' |
| string | %s | %s with **no &** | an array name already is an address; stops at white space |

*(Doodle: the keyboard buffer after typing `42 3.5⏎` — cells 4, 2, space, 3, ., 5, \n. `%d` takes 42, `%f` skips the space and takes 3.5, and the red '\n' is left behind for the next %c. Caption: `scanf("%d %f", &n, &x)` stops before the Enter key.)*

| Function | Does |
|---|---|
| `getchar()` / `putchar(c)` | one character in / out; getchar returns an **int** so EOF fits |
| `gets(s)` | **removed in C11** — no size limit, buffer overflow |
| `fgets(s, n, stdin)` | at most **n − 1** characters, **keeps the '\n'**, adds '\0' |
| `puts(s)` / `fputs(s, fp)` | puts adds a '\n'; fputs adds nothing |
| `getch()` / `getche()` | a key without Enter — **conio.h**, DOS/Turbo C only, not standard |

**Worked example ✍ what does scanf return?** `int a = 0, b = 0, r = scanf("%d %d", &a, &b);`
(a) input `10 20` → r = **2**, a = 10, b = 20. (b) input `10 abc` → r = **1**, b stays 0 and "abc" **stays in the buffer** for the next read. (c) input `abc` → r = **0**. (d) end of input (Ctrl+Z on Windows / Ctrl+D on Linux) → r = **EOF**. Safe loop: `while (scanf("%d", &x) == 1) sum += x;` — it stops on bad input *and* at end of input.

**Three scanf tools:** `%9s` — width limit, at most 9 characters into `char s[10]` · `%[^\n]` — scanset, a whole line with spaces · `%*d` — read and **discard**, not counted in the return value.

- ⚠️ **Trap:** (i) `scanf("%d", x)` without & passes a value as an address — undefined behaviour, usually a crash. (ii) `char c = getchar();` can never equal EOF where char is unsigned — keep it **int**. (iii) `fflush(stdin)` is undefined in standard C. (iv) %s reads **one word** only.
- 🟣 **Trick:** "**printf takes values, scanf takes addresses.**" And "**lf = long float = double**": in scanf the `l` is the only thing between a float and a double.

## 3. File Access: FILE *, fopen Modes, Text vs Binary

A file is used through a **pointer to a FILE** structure (declared in `<stdio.h>`) that holds the **buffer**, the **current position** and the **end-of-file and error flags**. Every file job has three steps: **open** with `fopen(name, mode)`, which **returns NULL on failure**; **process**; **close** with `fclose(fp)`, which flushes the buffer and returns 0 (or EOF on failure).

*(Doodle: program (holds fp) → FILE box (buffer · position · EOF/error flags) → disk file cylinder. "fp = fopen(...) — check it for NULL"; "fclose(fp) flushes the buffer to disk".)*

| Mode | If the file exists | If it is missing | Allows |
|---|---|---|---|
| "r" | opened at the start | **NULL** | read |
| "w" | **truncated to 0** | created | write |
| "a" | kept; **every** write goes to the end | created | append |
| "r+" | opened, **not** truncated | **NULL** | read + write |
| "w+" | truncated | created | write + read |
| "a+" | kept; reads anywhere, writes at the end | created | read + append |

Add **b** for **binary**: "rb", "wb", "ab", "r+b" (= "rb+"), "w+b", "a+b". C11 adds **x** ("wx"): fail instead of overwriting an existing file. Note `printf(…)` ≡ `fprintf(stdout, …)` and `scanf(…)` ≡ `fscanf(stdin, …)`.

| Level | Read | Write | Signal at end / error |
|---|---|---|---|
| character | fgetc(fp), getc(fp) | fputc(c, fp), putc(c, fp) | EOF |
| line / string | fgets(s, n, fp) | fputs(s, fp) | NULL · EOF |
| formatted | fscanf(fp, fmt, …) | fprintf(fp, fmt, …) | count or EOF · negative |
| block (binary) ★ | fread(ptr, size, n, fp) | fwrite(ptr, size, n, fp) | items done; **< n** on end or error |

```c
/* copy in.txt to out.txt */
FILE *in  = fopen("in.txt", "r");
FILE *out = fopen("out.txt", "w");
if (in == NULL || out == NULL) {
    perror("fopen");
    return 1;
}
int c;              /* int, not char */
while ((c = fgetc(in)) != EOF)
    fputc(c, out);
fclose(in);
fclose(out);
```

- **Text vs binary.** In **text mode** the library may translate line ends — on Windows '\n' is written as "\r\n" and read back as '\n'. **Binary mode** moves bytes exactly. On Linux/UNIX the two modes are identical. `fprintf(fp, "%d", 12345)` writes **5 characters**; `fwrite(&n, sizeof n, 1, fp)` writes **sizeof(int) bytes** (4 on most systems).
- ⚠️ **Trap:** (i) **"w" destroys** the old contents; use "a" to keep them. (ii) **"r+"** never creates a file. (iii) fopen signals failure with **NULL**, not EOF or −1. (iv) Forgetting fclose can **lose buffered data**. (v) In "a"/"a+" a write lands at the end even after fseek.
- 🟣 **Trick:** "**r reads, w wipes, a adds — and + gives the other half.**" "**b means bytes.**" Only the two r-modes fail on a missing file; every w- and a-mode creates it.

## 4. Random Access: fseek, ftell, rewind & the EOF Rules

Every open stream has a **file position indicator** — the byte offset where the next read or write happens. Sequential I/O moves it forward by itself; **random access** moves it directly with `fseek(fp, offset, whence)`, so record *k* of a binary file can be read without reading the *k* − 1 before it.

*(Doodle: a file drawn as five records rec 0 … rec 4. A green arrow from byte 0 is SEEK_SET (0); a purple one "from here" is SEEK_CUR (1); a red one from the end is SEEK_END (2) with offset ≤ 0. Record k starts at byte k × sizeof(record).)*

| Call | Effect · return |
|---|---|
| `fseek(fp, off, whence)` | move to origin + off · **0** on success |
| `ftell(fp)` | current offset as **long** · −1L on error |
| `rewind(fp)` | back to 0 **and** clears the error flag · void |
| `feof(fp)` | non-zero once a read has **already hit** the end |
| `ferror(fp)` / `clearerr(fp)` | error flag set? / reset both flags |
| `fflush(fp)` | write an output buffer out now |
| `remove(n)` / `rename(o, n)` | delete / rename a file · 0 on success |

**Worked example ✍ a binary file of student records.** `struct student { int roll; char name[16]; float cgpa; };` — 4 + 16 + 4 = **24 bytes** (no padding needed here; padding rules are in the structures lesson).
- (a) File size: `fseek(fp, 0, SEEK_END); long n = ftell(fp);` → n = 240 ⇒ 240 ÷ 24 = **10 records**.
- (b) Read the **5th** record (k = 4): `fseek(fp, 4 * sizeof(struct student), SEEK_SET)` → byte **96**, then `fread(&s, sizeof s, 1, fp)` returns 1.
- (c) Now `ftell(fp)` = 96 + 24 = **120**.
- (d) Update it in place: open with **"rb+"**, `fseek(fp, -24L, SEEK_CUR)`, then `fwrite(&s, sizeof s, 1, fp)`.
- (e) The last record: `fseek(fp, -24L, SEEK_END)` → byte 216.

```c
/* WRONG: the last line prints twice */
while (!feof(fp)) {
    fgets(line, 80, fp);
    fputs(line, stdout);
}
/* RIGHT: test the read itself */
while (fgets(line, sizeof line, fp) != NULL)
    fputs(line, stdout);
```

- **EOF is a value, not a byte.** EOF is a macro in `<stdio.h>` for a **negative int** (usually −1) that input functions return when nothing is left. No EOF character is stored in the file; a file simply ends. That is why **fgetc returns int**: it must fit all 256 byte values *and* EOF.
- ⚠️ **Trap:** (i) **feof() does not look ahead**: it turns true only after a read has failed, so a `while (!feof(fp))` loop runs once too often. (ii) Byte arithmetic with ftell needs **binary** mode (on a text stream its value is only good for handing back to fseek). (iii) Between a write and a read on the same stream, call fseek or fflush.
- 🟣 **Trick:** "**SET, CUR, END = 0, 1, 2 — start, here, end.**" And "**read first, then ask**": test the value fgetc/fgets/fread returned; ask feof() only to learn *why* it stopped.

## 5. Variable-Length Argument Lists (stdarg.h)

A **variadic function** takes a variable number of arguments, declared with an ellipsis `...` after **at least one named parameter**: `int printf(const char *fmt, ...);`. The macros of `<stdarg.h>` walk the unnamed arguments one by one; the function itself has **no way to know how many** arrived.

```c
#include <stdarg.h>
int sum(int count, ...) {
    va_list ap;
    int total = 0;
    va_start(ap, count);
    for (int i = 0; i < count; i++)
        total += va_arg(ap, int);
    va_end(ap);
    return total;
}
sum(4, 10, 20, 30, 40)   → 100
sum(2, 5, 15)            → 20
```

| Macro / type | Job |
|---|---|
| `va_list ap` | the cursor over the arguments |
| `va_start(ap, last)` | start after the **last named** parameter |
| `va_arg(ap, T)` | fetch the next one as type T |
| `va_copy(d, s)` | duplicate the cursor (C99) |
| `va_end(ap)` | clean up — one per va_start |

- ⚠️ **Trap:** unnamed arguments undergo the **default argument promotions**: char, short → **int**; float → **double**. So `va_arg(ap, float)` and `va_arg(ap, char)` are undefined — ask for double / int. Reading past the last argument is also undefined.
- **How the callee learns the count:** a **count** argument (sum above) · a **sentinel** at the end (NULL, −1) · a **format string** — printf counts the % signs. Get the count wrong and va_arg reads garbage.

## 6. Command-Line Parameters (argc, argv)

`int main(int argc, char *argv[])` (or `char **argv`) receives the words typed after the command. **argc** = how many words, **the program name included**; **argv[0]** = the program name; argv[1] … argv[argc − 1] = the arguments, **always as strings**; and **argv[argc] = NULL**.

*(Doodle: `$ ./prog one two ⇒ argc = 3`. An array of four boxes argv[0]…argv[3]; the first three point to the strings "./prog\0", "one\0", "two\0"; argv[3] is NULL and ends the list. Caption: argv is an array of pointers to strings.)*

**Worked example ✍ `$ ./sum 10 20 30`** — argc = **4**; argv[1] is the **string** "10", so the sum needs a conversion: `for (i = 1; i < argc; i++) s += atoi(argv[i]);` → **60**. (b) `$ ./prog "hello world"` → argc = **2**: the shell's quotes make one argument. (c) `$ ./prog` alone → argc = 1, argv[1] = NULL — test `argc < 2` before touching it. (d) `atoi("12ab")` silently gives 12 — **strtol** can report errors.

- ⚠️ **Trap:** (i) argc is never 0 in practice — the name counts. (ii) `argv[1] + argv[2]` adds **pointers**, not numbers. (iii) The names argc/argv are only convention; the standard fixes the **types**.
- 🟣 **Trick:** "**argc counts the name; argv ends in NULL.**" For stdarg: "**start, arg, arg, …, end**" — and "**small things grow**": char → int, float → double.

## 7. Error Handling: Return Values, errno, perror, assert, exit

C has **no exceptions**. A library function reports failure through its **return value** and, for many, by storing a code in **errno**; the program must **check**, report on **stderr**, and end with a **failure exit status**. Nothing happens automatically if the check is skipped.

| Call | Failure looks like |
|---|---|
| fopen, malloc, calloc, fgets | **NULL** |
| scanf, fscanf | fewer items than asked, or **EOF** |
| fgetc, getchar, fclose, fputs | **EOF** |
| printf, fprintf | a **negative** value |
| fseek / ftell | non-zero / **−1L** |
| fread, fwrite | fewer than **n** items |
| sqrt(−1) · strtol overflow | errno = **EDOM** · **ERANGE** |

*(Doodle: a flowchart — `fp = fopen(...)` → diamond "fp == NULL ?" — yes (red): perror → stderr, then exit(EXIT_FAILURE); no (green): use, then fclose, then return 0. Caption: check, tell, leave — every library call.)*

```c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("data.txt");
    fprintf(stderr, "code %d: %s\n",
            errno, strerror(errno));
    exit(EXIT_FAILURE);
}
```

- **errno · perror · strerror.** `errno` (`<errno.h>`) is set to a positive code by a failing call and **never reset to 0** by the library — set `errno = 0` before a call if you plan to test it. ISO C defines only **EDOM, ERANGE, EILSEQ**; ENOENT and the rest are POSIX. `perror("data.txt")` prints **data.txt: No such file or directory** to stderr; `strerror(errno)` (`<string.h>`) returns that text as a string.

**assert, exit, abort — how a program ends**
- `assert(expr)` (`<assert.h>`): if false, prints the expression, file and line to stderr, then calls **abort()**.
- `#define NDEBUG` before including `<assert.h>` ⇒ every assert **disappears** — a debugging tool only.
- `exit(status)` (`<stdlib.h>`): flushes and closes all streams, runs atexit() handlers, returns the status to the OS.
- `return n;` in main ≡ `exit(n)` · **EXIT_SUCCESS** = 0 · **EXIT_FAILURE** ≠ 0 (usually 1).
- `abort()`: abnormal end (SIGABRT), no atexit handlers, flushing not guaranteed.
- The shell reads the status as `$?` (Linux) or `%ERRORLEVEL%` (Windows).

**Worked example ✍ division by zero.** Integer `a / b` with b = 0 is **undefined behaviour** — no return code, no errno, usually a crash (SIGFPE) — so **test first**: `if (b == 0) { fputs("divide by zero\n", stderr); return EXIT_FAILURE; }`. IEEE 754 floating point is different: 1.0 / 0.0 = **inf**.

- ⚠️ **Trap:** (i) errno is meaningful only **right after** a call that failed. (ii) **assert** is not input validation — it vanishes in a release build. (iii) Report errors on **stderr**, not stdout. (iv) **0 = success**, non-zero = failure — not the reverse.
- 🟣 **Trick:** "**Check, tell, leave.**" Check the return value, tell stderr (perror), leave with EXIT_FAILURE. "**Assert for bugs, if for users.**"

## 8. Graphics in C (graphics.h, Turbo C)

**graphics.h** is Borland's **BGI** (Borland Graphics Interface) for Turbo C/C++ under DOS — **not part of ISO C** (gcc has no such header; ports such as WinBGIm exist, and modern code uses SDL or OpenGL). The screen is a pixel grid with the **origin (0, 0) at the top-left** and **y growing downward**; in VGA high mode (640 × 480, 16 colours) `getmaxx()` = 639 and `getmaxy()` = 479.

*(Doodle: the screen as a rectangle with (0,0) at the top-left, an x arrow to the right, a y arrow pointing down, (639, 479) at the bottom-right; inside, rectangle(60,52,120,112) with a circle in it and a slanted line(). Caption: screen coordinates — y points down.)*

| Function | Does |
|---|---|
| `initgraph(&gd, &gm, path)` | enter graphics mode; `gd = DETECT` auto-detects |
| `graphresult()` · `closegraph()` | **grOk** (0) if init worked · back to text mode |
| `putpixel(x,y,c)` · `line(x1,y1,x2,y2)` | a pixel · a line |
| `circle(x,y,r)` · `rectangle(l,t,r,b)` | centre + radius · **two corners** |
| `setcolor(c)` · `setbkcolor(c)` | 16 colours: BLACK 0 · BLUE 1 · RED 4 · WHITE 15 |
| `setfillstyle(p,c)` + `floodfill(x,y,b)` | fill a region up to border colour b |
| `outtextxy(x,y,s)` · `cleardevice()` | text at a pixel · clear the screen |

```c
#include <graphics.h>
#include <conio.h>    /* getch() */
int main(void) {
  int gd = DETECT, gm;
  initgraph(&gd, &gm, "C:\\TC\\BGI");
  if (graphresult() != grOk) return 1;
  setcolor(RED);  rectangle(100,100,200,200);
  setcolor(BLUE); circle(150, 150, 50);
  outtextxy(110, 220, "Graphics Example");
  getch(); closegraph(); return 0;
}
```

- ⚠️ **Trap:** (i) **getch()** is in **conio.h**, not graphics.h — it just holds the picture until a key is pressed. (ii) rectangle takes **two corners**, not width and height. (iii) A larger y is **lower** on the screen. (iv) BGI is a DOS library, not standard C.

## 9. Standard Library Functions & Headers

The **C standard library** is precompiled code shipped with the compiler. A **header declares** (prototypes, macros, types); the **library archive defines** (the machine code the linker adds). C89 had **15** standard headers, C99 **24**, C11 **29**.

| Header | High-yield members |
|---|---|
| `<stdio.h>` | printf, scanf, fopen, fgets, fread, perror, EOF, FILE, NULL |
| `<stdlib.h>` | malloc, calloc, realloc, free, atoi, strtol, **rand, srand, exit, abs**, qsort, system |
| `<string.h>` | strlen, strcpy, strcat, strcmp, strchr, strstr, memcpy, memset, strerror |
| `<math.h>` | sqrt, pow, fabs, ceil, floor, sin, cos, log, log10, exp — all return **double** |
| `<ctype.h>` · `<time.h>` | isalpha, isdigit, toupper, tolower · time, clock, difftime |
| `<limits.h>` · `<stddef.h>` | INT_MAX, CHAR_BIT · size_t, NULL, offsetof |

**Worked example ✍ outputs:** `strlen("Dhaka")` = **5** but `sizeof("Dhaka")` = **6** · `pow(2, 10)` = **1024.000000** · `floor(-2.1)` = **−3.0** · `rand() % 6 + 1` = a die roll after `srand(time(NULL))`.

- 🟣 **Trick:** "**abs in stdlib, fabs in math.**" "**Header declares, library defines**" — #include tells the compiler a function exists; only the linker brings its code.

## 10. From Source to Executable: Compiling & Linking

Building a C program takes four stages, and the **linker** is the last: it combines object files and libraries into one executable by **resolving symbols** — matching every use of an external name with exactly one definition — and **relocating** addresses. The **loader** then places the executable in memory and starts it.

*(Doodle: hello.c → preprocessor (-E → hello.i) → compiler (-S → hello.s) → assembler (-c → hello.o) → linker ★ (resolves names; libc · libm · .a / .so feed in from below) → a.out / .exe. "gcc runs all four by default: gcc hello.c -o hello"; then the loader puts the program in memory and calls main.)*

| Stage | In → out | What it does · typical error |
|---|---|---|
| Preprocessor | .c → .i | #include, #define, #if; strips comments (preprocessor lesson) · missing header file |
| Compiler | .i → .s | syntax and type checks, assembly code · missing semicolon, type mismatch |
| Assembler | .s → .o / .obj | machine code with **unresolved** external symbols |
| Linker ★ | .o + libs → exe | resolves and relocates · **undefined reference**, multiple definition |

| Aspect | Static linking | Dynamic (shared) linking |
|---|---|---|
| Library file | .a (Linux) · .lib (Windows) | .so (Linux) · .dll (Windows) |
| When bound | at link time: **only the needed object modules** are copied in | at load time by the dynamic linker (or run time: dlopen, LoadLibrary) |
| Size · memory | larger file; each program has its own copy | smaller file; **one copy shared** in memory |
| Updating the library | relink every program | replace the .so/.dll once |
| Risk | none at run time — self-contained | missing or wrong version ("DLL hell") |

```c
/* util.h */ extern int counter;
              int add(int a, int b);
/* util.c */ int counter = 0;
              int add(int a, int b)
              { counter++; return a + b; }
/* main.c */ #include "util.h"
gcc -c main.c      → main.o
gcc -c util.c      → util.o
gcc main.o util.o -o prog
gcc prog.c -o prog -lm   (libm)
```

- **extern & linkage.** `extern` declares a name defined **elsewhere**; the definition must appear in exactly **one** file. `static` at file scope gives **internal linkage**: the name is invisible to the linker and to other files (storage classes lesson). `-lm` links libm, the maths library; put it **after** the source files.
- ⚠️ **Trap:** (i) `#include <math.h>` gives only prototypes; "**undefined reference to sqrt**" is a **linker** error cured by -lm. (ii) Static linking does **not** copy the whole library. (iii) A missing semicolon is a **compile** error, not a link error.
- 🟣 **Trick:** "**Please Compile And Link**" — Preprocess, Compile, Assemble, Link; the flags **-E -S -c** stop after the first three. "**Static = suitcase, dynamic = borrow on arrival.**"

---

## Night-before sheet

**Fact sheet:** stdin 0 · stdout 1 · stderr 2 · stderr is **unbuffered** · %d int · %u unsigned · %ld long · %c char · %s string · %p void * · %x hex · %o octal · %e exponent · **size_t → %zu** · printf %f = float *and* double · **scanf: %f float, %lf double** · % flags width .precision length letter · width is a minimum, never cuts · printf returns characters printed · scanf returns items assigned / EOF · scanf needs &, but not for arrays · gets removed in C11 → fgets · fgets keeps '\n', reads n − 1 · getchar returns **int** · fopen fails ⇒ **NULL** · "w" truncates · "a" appends · "r", "r+" never create a file · b = binary · x = exclusive (C11) · fread/fwrite return items done · SEEK_SET 0 · CUR 1 · END 2 · size = fseek END + ftell · rewind = seek 0 + clear error · feof true only **after** a failed read · EOF = negative int, usually −1 · va_start · va_arg · va_end · float → double, char → int · argc counts the program name · argv[argc] = NULL · perror → stderr · errno: EDOM · ERANGE · EILSEQ · assert off with NDEBUG · EXIT_SUCCESS 0 · EXIT_FAILURE · getch() is conio.h · BGI: (0,0) top-left, y down · -E · -S · -c · link · static .a/.lib · dynamic .so/.dll · -lm links the maths library · abs stdlib · fabs math.

**Top 12 one-liners for MCQs**
1. printf and scanf are declared in **<stdio.h>**
2. `printf("%d", printf("Hello"))` ⇒ **Hello5**
3. `"%8.3f"` of 3.14159 ⇒ **___3.142**
4. Read a double: **scanf("%lf", &d)**
5. fopen on a missing file in "r" ⇒ **NULL**
6. Record 5 of 24-byte records starts at byte **96**
7. `./prog one two` ⇒ argc = **3**
8. Variadic macros live in **<stdarg.h>**
9. perror("x") ⇒ "x: <reason>" on **stderr**
10. assert false ⇒ message + **abort()**
11. undefined reference to sqrt ⇒ add **-lm**
12. A shared library is bound at **load time**

**Top traps:** %f for a double in scanf · %lu or %d for size_t · & forgotten in scanf, or added to an array name · `char c = getchar()` · **while (!feof(fp))** · "w" when the data had to be kept · fopen checked against EOF instead of NULL · va_arg(ap, float) · argc said to exclude the program name · atoi trusted with bad input · errors printed on stdout · assert used to validate input · getch() put in graphics.h · **static linking said to copy the whole library** · a missing -lm called a compile error.

**All tricks together:** "Flags, Width, Dot, Length, Letter" · "printf takes values, scanf takes addresses" · "lf = long float = double" · "r reads, w wipes, a adds; + gives the other half; b means bytes" · "SET, CUR, END = 0, 1, 2" · "read first, then ask" · "start, arg, arg, …, end; small things grow" · "argc counts the name; argv ends in NULL" · "Check, tell, leave" · "Assert for bugs, if for users" · "abs in stdlib, fabs in math" · "Please Compile And Link" · "Static = suitcase, dynamic = borrow on arrival".

---

## Practice MCQs (exam pattern, 10 marks)

1. Which conversion reads a **double** with scanf? (a) %f (b) %d (c) %lf (d) %Lf
2. What does fopen() return when it cannot open the file? (a) a NULL pointer (b) EOF (c) −1 (d) an empty FILE
3. A program with `int main(int argc, char *argv[])` is run as `./prog one two`. argc is: (a) 1 (b) 2 (c) 4 (d) 3
4. Which mode opens a file for writing and **erases** any existing contents? (a) "a" (b) "w" (c) "r+" (d) "a+"
5. `printf("%5.2f|", 3.14159);` prints (_ = a space): (a) 3.14| (b) _3.14| (c) 3.14159| (d) 00003.14|
6. va_start, va_arg and va_end are defined in: (a) <stdio.h> (b) <stdlib.h> (c) <stdarg.h> (d) <conio.h>
7. gcc reports "undefined reference to sqrt". The fix is to: (a) add -lm when linking (b) add #include <math.h> (c) compile with -c (d) compile with -E
8. Which is true of **feof(fp)**? (a) it predicts the next read will fail (b) it returns the EOF character (c) it is declared in conio.h (d) it is true only after a read has hit the end
9. perror() writes its message to: (a) stdout (b) a log file (c) stderr (d) stdin
10. In **static** linking the linker: (a) loads the library at run time (b) copies only the needed object modules (c) makes the executable smaller (d) needs the .dll at run time

**Answer key:** 1-c · 2-a · 3-d · 4-b · 5-b · 6-c · 7-a · 8-d · 9-c · 10-b

## Written question (10 marks)

Write a C program that takes a file name on the command line, reads the integers in that file and prints their sum, handling every error properly. Explain argc/argv and each check you make.

**Model answer:**

1. **Arguments (2)** — `int main(int argc, char *argv[])`; argc counts the program name, so one file name means **argc == 2**, and argv[1] is the name. If `argc != 2`, print a usage line to stderr and `return EXIT_FAILURE;`.
2. **Open (2)** — `FILE *fp = fopen(argv[1], "r");` and `if (fp == NULL) { perror(argv[1]); return EXIT_FAILURE; }` — perror adds the reason from errno, on stderr.
3. **Read (3)** — `long sum = 0; int x; while (fscanf(fp, "%d", &x) == 1) sum += x;` — the loop tests the **return value** (not feof), so it stops at end of file and on bad data; then `if (ferror(fp))` report a read error.
4. **Finish (1)** — `fclose(fp); printf("Sum = %ld\n", sum); return EXIT_SUCCESS;` — fclose flushes and releases the stream; status 0 tells the shell it worked.
5. **Explain (2)** — argv holds strings and argv[argc] is NULL; every library call is checked because C has no exceptions: NULL from fopen, the item count from fscanf, the flag from ferror.

```c
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char *argv[]) {
    if (argc != 2) { fprintf(stderr, "usage: %s file\n", argv[0]); return EXIT_FAILURE; }
    FILE *fp = fopen(argv[1], "r");
    if (fp == NULL) { perror(argv[1]); return EXIT_FAILURE; }
    long sum = 0; int x;
    while (fscanf(fp, "%d", &x) == 1) sum += x;
    if (ferror(fp)) { perror("read"); fclose(fp); return EXIT_FAILURE; }
    fclose(fp);
    printf("Sum = %ld\n", sum);
    return EXIT_SUCCESS;
}
```

**Also practise (written):** ① a variadic `average(int n, ...)` returning a double, and why `va_arg(ap, float)` is wrong ② a program that appends a struct record to a binary file and reads record k back with fseek/fread ③ the four stages of compilation with the gcc flag for each, and static vs dynamic linking in a table ④ printf output prediction for a set of width/precision/flag combinations.

**Before the exam ✓** Can predict printf output for any width, precision and flag · Can state all six fopen modes and what each does to an existing file · Can compute fseek offsets for record k · Can name the four build stages and contrast static with dynamic linking.
