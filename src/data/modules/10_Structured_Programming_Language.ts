import type { Module } from '../../types'

const m10: Module = {
    title: "10. Structured Programming Language (C)",
    titleBn: "১০. স্ট্রাকচার্ড প্রোগ্রামিং ল্যাংগুয়েজ (C)",
    level: "Intermediate",
    lessons: [
        {
            id: "sp1",
            title: "Data Types, Operators, Expressions & Control Structures",
            titleBn: "ডেটা টাইপ, অপারেটর, এক্সপ্রেশন ও কন্ট্রোল স্ট্রাকচার",
            content: `📌 DATA TYPES IN C

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data types define what kind of data a variable can hold.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ int                 │ Whole numbers: int age = 25;                │
├─────────────────────┼─────────────────────────────────────────────┤
│ float / double      │ Numbers with decimals: float price = 10.5;  │
├─────────────────────┼─────────────────────────────────────────────┤
│ char                │ Single character: char grade = 'A';         │
├─────────────────────┼─────────────────────────────────────────────┤
│ void                │ No value / empty set                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Derived Types       │ arrays, pointers, structures, unions        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ OPERATORS IN C

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Operators & Example                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Arithmetic          │ +, -, *, /, % (modulus)                     │
│                     │ int sum = a + b;                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Relational          │ >, <, >=, <=, ==, !=                        │
│                     │ if(a > b) { ... }                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Logical             │ && (AND), || (OR), ! (NOT)                  │
│                     │ if(a>0 && b>0) { ... }                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Assignment          │ =, +=, -=, *=, /=, %=                       │
│                     │ a += 5;  // same as a = a + 5               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Increment/Decrement │ ++ (increment), -- (decrement)              │
│                     │ a++;  // post-increment                     │
│                     │ ++a;  // pre-increment                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Bitwise             │ &, |, ^, ~, <<, >>                          │
│                     │ int c = a & b;  // bitwise AND              │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧮 EXPRESSIONS

An expression is a combination of variables, constants, and operators that produces a value.

Example:
int result = (a + b) * c - 10;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔁 CONTROL STRUCTURES

(a) Decision Making:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Structure           │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ if                  │ if(marks >= 40) printf("Pass");             │
├─────────────────────┼─────────────────────────────────────────────┤
│ if-else             │ if(marks>=40) printf("Pass");               │
│                     │ else printf("Fail");                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ else-if ladder      │ if(marks>=80) printf("A");                  │
│                     │ else if(marks>=60) printf("B");             │
│                     │ else printf("C");                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ switch-case         │ switch(day) {                               │
│                     │   case 1: printf("Mon"); break;             │
│                     │   default: printf("Invalid");               │
│                     │ }                                           │
└─────────────────────┴─────────────────────────────────────────────┘

(b) Loops:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Loop Type           │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ for loop            │ for(int i=0; i<5; i++) {                    │
│                     │     printf("%d ", i);                       │
│                     │ }                                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ while loop          │ int i=0;                                    │
│                     │ while(i<5) {                                │
│                     │     printf("%d ", i);                       │
│                     │     i++;                                    │
│                     │ }                                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ do-while loop       │ int i=0;                                    │
│                     │ do {                                        │
│                     │     printf("%d ", i);                       │
│                     │     i++;                                    │
│                     │ } while(i<5);                               │
└─────────────────────┴─────────────────────────────────────────────┘

(c) Jump Statements:
• break → exit from loop/switch
• continue → skip current iteration
• return → exit from function
• goto → jump to labeled statement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Program Structure Example:

┌─────────────────────────────────────────────────────────────────┐
│ #include <stdio.h>    // Header file                            │
│                                                                 │
│ int global = 100;     // Global variable                        │
│                                                                 │
│ int main() {           // Main function                         │
│     int local = 10;    // Local variable                        │
│     printf("Sum: %d\n", global + local);                        │
│     return 0;          // Exit status                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

✅ SUMMARY
• Data Types: int, float, char, void, derived types
• Operators: Arithmetic, Relational, Logical, Assignment, Bitwise
• Expressions: Combine variables, constants, operators
• Control Structures: if-else, switch, for, while, do-while`,
            contentBn: `📌 C তে ডেটা টাইপ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ডেটা টাইপ নির্ধারণ করে একটি ভেরিয়েবল কী ধরনের ডেটা ধারণ করতে পারে।

┌─────────────────────┬─────────────────────────────────────────────┐
│ টাইপ                │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ int                 │ পূর্ণ সংখ্যা: int age = 25;                │
├─────────────────────┼─────────────────────────────────────────────┤
│ float / double      │ দশমিক সংখ্যা: float price = 10.5;           │
├─────────────────────┼─────────────────────────────────────────────┤
│ char                │ একক অক্ষর: char grade = 'A';                │
├─────────────────────┼─────────────────────────────────────────────┤
│ void                │ কোনো মান নেই / খালি সেট                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেরাইভড টাইপ       │ অ্যারে, পয়েন্টার, স্ট্রাকচার, ইউনিয়ন      │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ C তে অপারেটর

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ অপারেটর ও উদাহরণ                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যারিথমেটিক       │ +, -, *, /, %                               │
│                     │ int sum = a + b;                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিলেশনাল           │ >, <, >=, <=, ==, !=                        │
│                     │ if(a > b) { ... }                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ লজিক্যাল           │ && (AND), || (OR), ! (NOT)                  │
│                     │ if(a>0 && b>0) { ... }                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাসাইনমেন্ট       │ =, +=, -=, *=, /=, %=                       │
│                     │ a += 5;  // a = a + 5 এর মতো               │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইনক্রিমেন্ট/        │ ++ (বৃদ্ধি), -- (হ্রাস)                    │
│ ডিক্রিমেন্ট         │ a++;  // পোস্ট-ইনক্রিমেন্ট                  │
│                     │ ++a;  // প্রি-ইনক্রিমেন্ট                   │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• ডেটা টাইপ: int, float, char, void, ডেরাইভড টাইপ
• অপারেটর: অ্যারিথমেটিক, রিলেশনাল, লজিক্যাল, অ্যাসাইনমেন্ট
• এক্সপ্রেশন: ভেরিয়েবল, কনস্ট্যান্ট, অপারেটরের সমন্বয়
• কন্ট্রোল স্ট্রাকচার: if-else, switch, for, while, do-while`,
            takeaways: [
                "Data Types: int, float, char, void, derived types",
                "Operators: Arithmetic, Relational, Logical, Assignment, Bitwise",
                "Expressions: Combine variables, constants, operators",
                "Control Structures: if-else, switch, for, while, do-while"
            ],
            takeawaysBn: [
                "ডেটা টাইপ: int, float, char, void, ডেরাইভড টাইপ",
                "অপারেটর: অ্যারিথমেটিক, রিলেশনাল, লজিক্যাল, অ্যাসাইনমেন্ট",
                "এক্সপ্রেশন: ভেরিয়েবল, কনস্ট্যান্ট, অপারেটরের সমন্বয়",
                "কন্ট্রোল স্ট্রাকচার: if-else, switch, for, while, do-while"
            ],
            level: "Intermediate"
        },
        {
            id: "sp2",
            title: "Functions, Parameter Passing, Scope, Storage Classes, Recursion",
            titleBn: "ফাংশন, প্যারামিটার পাসিং, স্কোপ, স্টোরেজ ক্লাস, রিকার্শন",
            content: `📌 FUNCTIONS AND PROGRAM STRUCTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a block of code that performs a specific task.

Function Syntax:
┌─────────────────────────────────────────────────────────────────┐
│ return_type function_name(parameter list) {                     │
│     // body                                                     │
│     return value;                                               │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

Example:
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("%d", result);  // Output: 8
    return 0;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ PARAMETER PASSING CONVENTIONS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Call by Value       │ Copy of data is sent to function            │
│                     │ Changes inside function don't affect original│
│                     │ void modify(int a) { a = a + 5; }           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Call by Reference   │ Address of variable is sent                 │
│                     │ Changes inside function affect original     │
│                     │ void modify(int *a) { *a = *a + 5; }        │
└─────────────────────┴─────────────────────────────────────────────┘

Example (Call by Value):
void modify(int a) {
    a = a + 5;
}
int main() {
    int x = 10;
    modify(x);
    printf("%d", x); // Output: 10 (no change)
}

Example (Call by Reference in C using pointers):
void modify(int *a) {
    *a = *a + 5;
}
int main() {
    int x = 10;
    modify(&x);
    printf("%d", x); // Output: 15 (changed)
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 SCOPE RULES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Scope Type          │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Local Scope         │ Declared inside function/block              │
│                     │ Accessible only within that block           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Global Scope        │ Declared outside all functions              │
│                     │ Accessible anywhere in program              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Block Scope         │ Declared inside { }                        │
│                     │ Exists only within that block               │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
int global = 100;  // Global variable

void show() {
    int local = 5; // Local variable
    printf("%d", local);
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗂️ STORAGE CLASSES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Keyword             │ Scope, Lifetime, Default Value              │
├─────────────────────┼─────────────────────────────────────────────┤
│ auto                │ Local, function/block, garbage              │
│                     │ Default for local variables                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ static              │ Local/Global, program lifetime, 0           │
│                     │ Keeps value between function calls          │
├─────────────────────┼─────────────────────────────────────────────┤
│ extern              │ Global, program lifetime, 0                 │
│                     │ Declared in another file/outside function   │
├─────────────────────┼─────────────────────────────────────────────┤
│ register            │ Local, function/block, garbage              │
│                     │ Stored in CPU register (faster access)      │
└─────────────────────┴─────────────────────────────────────────────┘

Static Variable Example:
void counter() {
    static int count = 0;
    count++;
    printf("%d ", count);
}
int main() {
    counter(); // 1
    counter(); // 2
    counter(); // 3
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔁 RECURSION

Definition: A function calling itself directly or indirectly.

Factorial Example:
int factorial(int n) {
    if (n == 0 || n == 1)  // Base case
        return 1;
    else
        return n * factorial(n - 1);  // Recursive call
}

int main() {
    printf("%d", factorial(5)); // Output: 120
}

Fibonacci Example:
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

✅ SUMMARY
• Functions: Reusable code blocks
• Parameter Passing: Call by value (copy), Call by reference (address)
• Scope: Local, Global, Block
• Storage Classes: auto, static, extern, register
• Recursion: Function calling itself (requires base case)`,
            contentBn: `📌 ফাংশন ও প্রোগ্রাম কাঠামো

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ফাংশন হল কোডের একটি ব্লক যা একটি নির্দিষ্ট কাজ সম্পাদন করে।

ফাংশন সিনট্যাক্স:
┌─────────────────────────────────────────────────────────────────┐
│ return_type function_name(parameter list) {                     │
│     // body                                                     │
│     return value;                                               │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

উদাহরণ:
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("%d", result);  // আউটপুট: 8
    return 0;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ প্যারামিটার পাসিং পদ্ধতি

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ কল বাই ভ্যালু       │ ডেটার কপি ফাংশনে পাঠানো হয়               │
│                     │ ফাংশনের ভিতরের পরিবর্তন আসলকে প্রভাবিত করে না│
├─────────────────────┼─────────────────────────────────────────────┤
│ কল বাই রেফারেন্স   │ ভেরিয়েবলের অ্যাড্রেস পাঠানো হয়            │
│                     │ ফাংশনের ভিতরের পরিবর্তন আসলকে প্রভাবিত করে  │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• ফাংশন: পুনরায় ব্যবহারযোগ্য কোড ব্লক
• প্যারামিটার পাসিং: কল বাই ভ্যালু (কপি), কল বাই রেফারেন্স (অ্যাড্রেস)
• স্কোপ: লোকাল, গ্লোবাল, ব্লক
• স্টোরেজ ক্লাস: auto, static, extern, register
• রিকার্শন: ফাংশন নিজেকে কল করা (বেস কেস প্রয়োজন)`,
            takeaways: [
                "Functions: Reusable code blocks",
                "Parameter Passing: Call by value (copy), Call by reference (address)",
                "Scope: Local, Global, Block",
                "Storage Classes: auto, static, extern, register",
                "Recursion: Function calling itself (requires base case)"
            ],
            takeawaysBn: [
                "ফাংশন: পুনরায় ব্যবহারযোগ্য কোড ব্লক",
                "প্যারামিটার পাসিং: কল বাই ভ্যালু (কপি), কল বাই রেফারেন্স (অ্যাড্রেস)",
                "স্কোপ: লোকাল, গ্লোবাল, ব্লক",
                "স্টোরেজ ক্লাস: auto, static, extern, register",
                "রিকার্শন: ফাংশন নিজেকে কল করা (বেস কেস প্রয়োজন)"
            ],
            level: "Intermediate"
        },
        {
            id: "sp3",
            title: "Header Files, Preprocessor, Pointers, Arrays, Strings",
            titleBn: "হেডার ফাইল, প্রিপ্রসেসর, পয়েন্টার, অ্যারে, স্ট্রিং",
            content: `📌 HEADER FILES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Header files contain function declarations, macros, constants, and data type definitions.

Common Standard Header Files:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Header File         │ Used For                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ <stdio.h>           │ Standard Input/Output (printf, scanf)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ <conio.h>           │ Console I/O (clrscr, getch) - Turbo C only  │
├─────────────────────┼─────────────────────────────────────────────┤
│ <math.h>            │ Mathematical functions (sqrt, pow)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ <string.h>          │ String handling (strlen, strcpy, strcmp)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ <stdlib.h>          │ General utilities (malloc, free, atoi)      │
├─────────────────────┼─────────────────────────────────────────────┤
│ <ctype.h>           │ Character handling (isalpha, toupper)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ <time.h>            │ Date and time functions                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ <limits.h>          │ Integer limits (INT_MAX, INT_MIN)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ <float.h>           │ Floating-point limits (FLT_MAX)             │
└─────────────────────┴─────────────────────────────────────────────┘

User-Defined Header Files:
#include "myheader.h"  // double quotes for user-defined

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ PREPROCESSOR

Before compilation, the preprocessor handles all lines starting with #.

Directives:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Directive           │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ #include            │ Includes header file                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ #define             │ Defines constants or macros                 │
│                     │ #define PI 3.1416                           │
│                     │ #define SQUARE(x) ((x)*(x))                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ #undef              │ Undefines a macro                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ #ifdef / #ifndef    │ Conditional compilation                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ #if / #elif / #else │ Advanced conditional compilation            │
│ / #endif            │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ #error              │ Generates compile-time error                │
├─────────────────────┼─────────────────────────────────────────────┤
│ #pragma             │ Compiler-specific instructions              │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
#define DEBUG 1

#ifdef DEBUG
    printf("Debug mode ON\\n");
#endif

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 POINTERS

A pointer stores the memory address of another variable.

Syntax:
┌─────────────────────────────────────────────────────────────────┐
│ int a = 10;                                                     │
│ int *p;      // declare pointer                                 │
│ p = &a;      // assign address of a to p                        │
│ printf("%d", *p); // prints value at address (10)               │
└─────────────────────────────────────────────────────────────────┘

Pointer Operators:
• & → Address-of operator
• * → Value-at (dereference) operator

Pointer Arithmetic:
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]
p++;  // now points to arr[1]

Pointer to Pointer:
int a = 10;
int *p = &a;
int **q = &p;
printf("%d", **q); // prints 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 ARRAYS

An array is a collection of elements of the same type stored in contiguous memory.

1D Array:
┌─────────────────────────────────────────────────────────────────┐
│ int arr[5] = {10, 20, 30, 40, 50};                              │
│ for(int i = 0; i < 5; i++) {                                    │
│     printf("%d ", arr[i]);                                      │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

2D Array (Multidimensional):
┌─────────────────────────────────────────────────────────────────┐
│ int matrix[2][3] = { {1,2,3}, {4,5,6} };                        │
│                                                                 │
│ for(int i = 0; i < 2; i++) {                                    │
│     for(int j = 0; j < 3; j++) {                                │
│         printf("%d ", matrix[i][j]);                            │
│     }                                                           │
│     printf("\\n");                                               │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘
Output:
1 2 3
4 5 6

Relationship Between Arrays and Pointers:
• Array name acts like a pointer to first element
• arr[i] is same as *(arr + i)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 STRINGS

A string is a sequence of characters terminated by null character '\0'.

Declaration:
┌─────────────────────────────────────────────────────────────────┐
│ char str1[6] = {'H','e','l','l','o','\\0'};                     │
│ char str2[] = "Hello";  // compiler adds '\\0' automatically    │
└─────────────────────────────────────────────────────────────────┘

String Functions (<string.h>):
┌─────────────────────┬─────────────────────────────────────────────┐
│ Function            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ strlen(str)         │ Returns length (excluding \\0)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ strcpy(dest, src)   │ Copies src to dest                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ strcat(dest, src)   │ Appends src to dest                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ strcmp(s1, s2)      │ Compares strings (0 if equal)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ strchr(str, ch)     │ Finds first occurrence of ch                │
├─────────────────────┼─────────────────────────────────────────────┤
│ strstr(str, sub)    │ Finds first occurrence of substring         │
└─────────────────────┴─────────────────────────────────────────────┘

String Input/Output:
char name[50];
printf("Enter name: ");
scanf("%s", name);  // stops at space
gets(name);  // unsafe, reads line (deprecated)
fgets(name, 50, stdin);  // safe, reads line

✅ SUMMARY
• Header Files: Include function declarations (#include)
• Preprocessor: Handles # directives before compilation
• Pointers: Store memory addresses (& address, * dereference)
• Arrays: Contiguous memory, index-based access
• Strings: Character arrays terminated by '\\0'`,
            contentBn: `📌 হেডার ফাইল

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

হেডার ফাইলে ফাংশন ডিক্লারেশন, ম্যাক্রো, কনস্ট্যান্ট ও ডেটা টাইপ সংজ্ঞা থাকে।

সাধারণ স্ট্যান্ডার্ড হেডার ফাইল:
┌─────────────────────┬─────────────────────────────────────────────┐
│ হেডার ফাইল         │ ব্যবহার                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ <stdio.h>           │ স্ট্যান্ডার্ড ইনপুট/আউটপুট (printf, scanf) │
├─────────────────────┼─────────────────────────────────────────────┤
│ <math.h>            │ গাণিতিক ফাংশন (sqrt, pow)                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ <string.h>          │ স্ট্রিং হ্যান্ডলিং (strlen, strcpy, strcmp) │
├─────────────────────┼─────────────────────────────────────────────┤
│ <stdlib.h>          │ জেনারেল ইউটিলিটি (malloc, free, atoi)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ <ctype.h>           │ ক্যারেক্টার হ্যান্ডলিং (isalpha, toupper)   │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• হেডার ফাইল: ফাংশন ডিক্লারেশন অন্তর্ভুক্ত করে (#include)
• প্রিপ্রসেসর: কম্পাইলেশনের আগে # ডিরেক্টিভ হ্যান্ডেল করে
• পয়েন্টার: মেমোরি অ্যাড্রেস সংরক্ষণ করে (& অ্যাড্রেস, * ডিরেফারেন্স)
• অ্যারে: ক্রমিক মেমোরি, ইনডেক্স-ভিত্তিক অ্যাক্সেস
• স্ট্রিং: '\\0' দিয়ে শেষ হওয়া ক্যারেক্টার অ্যারে`,
            takeaways: [
                "Header Files: Include function declarations (#include)",
                "Preprocessor: Handles # directives before compilation",
                "Pointers: Store memory addresses (& address, * dereference)",
                "Arrays: Contiguous memory, index-based access",
                "Strings: Character arrays terminated by '\\0'",
                "Array name acts as pointer to first element"
            ],
            takeawaysBn: [
                "হেডার ফাইল: ফাংশন ডিক্লারেশন অন্তর্ভুক্ত করে (#include)",
                "প্রিপ্রসেসর: কম্পাইলেশনের আগে # ডিরেক্টিভ হ্যান্ডেল করে",
                "পয়েন্টার: মেমোরি অ্যাড্রেস সংরক্ষণ করে (& অ্যাড্রেস, * ডিরেফারেন্স)",
                "অ্যারে: ক্রমিক মেমোরি, ইনডেক্স-ভিত্তিক অ্যাক্সেস",
                "স্ট্রিং: '\\0' দিয়ে শেষ হওয়া ক্যারেক্টার অ্যারে",
                "অ্যারের নাম প্রথম উপাদানের পয়েন্টার হিসেবে কাজ করে"
            ],
            level: "Intermediate"
        },
        {
            id: "sp4",
            title: "User Defined Data Types: Structures, Unions, Enumerations",
            titleBn: "ইউজার ডিফাইনড ডেটা টাইপ: স্ট্রাকচার, ইউনিয়ন, এনুমারেশন",
            content: `📌 STRUCTURES (struct)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A structure is a user-defined data type that groups different types of data together.

Syntax:
┌─────────────────────────────────────────────────────────────────┐
│ struct structure_name {                                         │
│     data_type member1;                                          │
│     data_type member2;                                          │
│     ...                                                         │
│ };                                                              │
└─────────────────────────────────────────────────────────────────┘

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    int id;
    char name[50];
    float marks;
};

int main() {
    struct Student s1;

    s1.id = 101;
    strcpy(s1.name, "Ruhul");
    s1.marks = 85.5;

    printf("ID: %d\\nName: %s\\nMarks: %.2f\\n", s1.id, s1.name, s1.marks);
    return 0;
}

Array of Structures:
struct Student students[3];
students[0].id = 101;
strcpy(students[0].name, "Alice");

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 UNIONS (union)

A union is similar to a structure, but all members share the same memory location.
Only one member can store a value at a time.

Syntax:
┌─────────────────────────────────────────────────────────────────┐
│ union union_name {                                              │
│     data_type member1;                                          │
│     data_type member2;                                          │
│     ...                                                         │
│ };                                                              │
└─────────────────────────────────────────────────────────────────┘

Example:
#include <stdio.h>
#include <string.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data d;

    d.i = 10;
    printf("i: %d\\n", d.i);

    d.f = 3.14;  // overwrites previous i
    printf("f: %.2f\\n", d.f);

    strcpy(d.str, "Hello");  // overwrites previous f
    printf("str: %s\\n", d.str);

    return 0;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ENUMERATIONS (enum)

An enumeration is a user-defined type consisting of named integer constants.

Syntax:
┌─────────────────────────────────────────────────────────────────┐
│ enum enum_name { name1, name2, ..., nameN };                    │
└─────────────────────────────────────────────────────────────────┘

Example:
#include <stdio.h>

enum Week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

int main() {
    enum Week today;
    today = Wednesday;

    printf("Day number: %d\\n", today);  // Wednesday = 3
    return 0;
}

Custom Values:
enum Month { Jan=1, Feb, Mar, Apr };  // Jan=1, Feb=2, Mar=3, Apr=4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ Comparison: struct vs union vs enum

┌─────────────────────┬─────────────────────────────────────────────┐
│ Feature             │ struct      │ union        │ enum           │
├─────────────────────┼─────────────┼──────────────┼────────────────┤
│ Memory              │ Separate for │ All members  │ Each name =    │
│                     │ each member  │ share memory │ int constant   │
├─────────────────────┼─────────────┼──────────────┼────────────────┤
│ Use                 │ Group       │ Save memory, │ Named constants│
│                     │ different   │ one value at │ for readability│
│                     │ types       │ a time       │                │
├─────────────────────┼─────────────┼──────────────┼────────────────┤
│ Access              │ . operator  │ . operator   │ value directly │
└─────────────────────┴─────────────┴──────────────┴────────────────┘

✅ SUMMARY
• Structure (struct): Groups different types, each member has own memory
• Union (union): Members share memory, saves space, one value at a time
• Enumeration (enum): Named integer constants, improves readability`,
            contentBn: `📌 স্ট্রাকচার (struct)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

স্ট্রাকচার হল একটি ইউজার-ডিফাইনড ডেটা টাইপ যা বিভিন্ন ধরনের ডেটা একসাথে গ্রুপ করে।

সিনট্যাক্স:
┌─────────────────────────────────────────────────────────────────┐
│ struct structure_name {                                         │
│     data_type member1;                                          │
│     data_type member2;                                          │
│     ...                                                         │
│ };                                                              │
└─────────────────────────────────────────────────────────────────┘

উদাহরণ:
struct Student {
    int id;
    char name[50];
    float marks;
};

int main() {
    struct Student s1;
    s1.id = 101;
    strcpy(s1.name, "রুহুল");
    s1.marks = 85.5;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ইউনিয়ন (union)

ইউনিয়ন স্ট্রাকচারের মতো, কিন্তু সব সদস্য একই মেমোরি লোকেশন শেয়ার করে।
একবারে শুধুমাত্র একটি সদস্য মান সংরক্ষণ করতে পারে।

উদাহরণ:
union Data {
    int i;
    float f;
    char str[20];
};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 এনুমারেশন (enum)

এনুমারেশন হল নামকৃত ইন্টিজার কনস্ট্যান্ট নিয়ে গঠিত ইউজার-ডিফাইনড টাইপ।

উদাহরণ:
enum Week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
enum Week today = Wednesday;  // today = 3

✅ সারাংশ
• স্ট্রাকচার (struct): বিভিন্ন টাইপ গ্রুপ করে, প্রতিটি সদস্যের নিজস্ব মেমোরি
• ইউনিয়ন (union): সদস্যরা মেমোরি শেয়ার করে, স্থান বাঁচায়, একবারে একটি মান
• এনুমারেশন (enum): নামকৃত ইন্টিজার কনস্ট্যান্ট, পঠনযোগ্যতা বাড়ায়`,
            takeaways: [
                "Structure (struct): Groups different types, each member has own memory",
                "Union (union): Members share memory, saves space, one value at a time",
                "Enumeration (enum): Named integer constants, improves readability",
                "Access members using dot (.) operator"
            ],
            takeawaysBn: [
                "স্ট্রাকচার (struct): বিভিন্ন টাইপ গ্রুপ করে, প্রতিটি সদস্যের নিজস্ব মেমোরি",
                "ইউনিয়ন (union): সদস্যরা মেমোরি শেয়ার করে, স্থান বাঁচায়, একবারে একটি মান",
                "এনুমারেশন (enum): নামকৃত ইন্টিজার কনস্ট্যান্ট, পঠনযোগ্যতা বাড়ায়",
                "ডট (.) অপারেটর ব্যবহার করে সদস্য অ্যাক্সেস"
            ],
            level: "Intermediate"
        },
        {
            id: "sp5",
            title: "I/O, File Access, Variable Arguments, Command Line, Error Handling, Graphics, Linking, Library Functions",
            titleBn: "I/O, ফাইল অ্যাক্সেস, ভেরিয়েবল আর্গুমেন্ট, কমান্ড লাইন, এরর হ্যান্ডলিং, গ্রাফিক্স, লিংকিং, লাইব্রেরি ফাংশন",
            content: `📌 INPUT AND OUTPUT (I/O)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Standard I/O Streams:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Stream              │ Symbol │ Description                        │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Standard Input      │ stdin  │ Keyboard (scanf)                    │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Standard Output     │ stdout │ Screen (printf)                     │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Standard Error      │ stderr │ Error messages (usually console)    │
└─────────────────────┴────────┴─────────────────────────────────────┘

Formatted Output (printf):
printf("%10d", 50);    // prints 50 in width 10
printf("%.2f", 3.14159); // prints 3.14
printf("%-10s", "Hi"); // left-align in width 10

Format Specifiers:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Specifier           │ Data Type                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ %d, %i              │ int                                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ %f                  │ float / double                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ %c                  │ char                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ %s                  │ string (char array)                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ %p                  │ pointer address                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ %x, %X              │ hexadecimal                                 │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 FILE ACCESS

File Operations:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Function            │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ fopen()             │ Open file                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ fclose()            │ Close file                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ fprintf()           │ Formatted write to file                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ fscanf()            │ Formatted read from file                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ fgets()             │ Read string from file                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ fputs()             │ Write string to file                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ fread()             │ Read binary data                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ fwrite()            │ Write binary data                           │
└─────────────────────┴─────────────────────────────────────────────┘

File Modes:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Mode                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ "r"                 │ Read (file must exist)                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ "w"                 │ Write (creates or overwrites)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ "a"                 │ Append (writes at end of file)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ "r+"                │ Read and write                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ "w+"                │ Write and read (overwrites)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ "a+"                │ Append and read                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ "rb", "wb", "ab"    │ Binary modes                                │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
FILE *fp = fopen("data.txt", "w");
if(fp == NULL) {
    printf("Error opening file!\\n");
    return 1;
}
fprintf(fp, "Hello, World!\\n");
fclose(fp);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 VARIABLE LENGTH ARGUMENT LIST (Variadic Functions)

Functions that can accept a variable number of arguments.

Header: <stdarg.h>

Macros:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Macro               │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ va_list             │ Declare variable to hold argument list      │
├─────────────────────┼─────────────────────────────────────────────┤
│ va_start()          │ Initialize argument list                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ va_arg()            │ Access next argument                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ va_end()            │ Clean up                                    │
└─────────────────────┴─────────────────────────────────────────────┘

Example (Sum function):
#include <stdio.h>
#include <stdarg.h>

int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    
    int total = 0;
    for(int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    
    va_end(args);
    return total;
}

int main() {
    printf("Sum: %d\\n", sum(4, 10, 20, 30, 40));  // Output: 100
    printf("Sum: %d\\n", sum(2, 5, 15));           // Output: 20
    return 0;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 COMMAND LINE PARAMETERS

Parameters passed to program when executed from terminal.

Syntax:
int main(int argc, char *argv[])

Parameters:
• argc → Argument count (including program name)
• argv → Argument vector (array of strings)

Example:
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\\n", argc);
    
    for(int i = 0; i < argc; i++) {
        printf("argv[%d]: %s\\n", i, argv[i]);
    }
    
    // Sum numbers passed as arguments
    int sum = 0;
    for(int i = 1; i < argc; i++) {
        sum += atoi(argv[i]);
    }
    printf("Sum: %d\\n", sum);
    
    return 0;
}

Execution: ./program 10 20 30
Output:
Number of arguments: 4
argv[0]: ./program
argv[1]: 10
argv[2]: 20
argv[3]: 30
Sum: 60

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ ERROR HANDLING

Techniques:

1. Check return values:
FILE *fp = fopen("file.txt", "r");
if(fp == NULL) {
    printf("File not found!\\n");
    return 1;
}

2. Check scanf() return:
if(scanf("%d", &num) != 1) {
    printf("Invalid input!\\n");
}

3. Using errno (<errno.h>):
#include <errno.h>
#include <string.h>
if(fp == NULL) {
    printf("Error: %s\\n", strerror(errno));
}

4. Using assert() for debugging:
#include <assert.h>
assert(x >= 0);  // Program stops if x < 0

5. Division by zero check:
if(b == 0) {
    printf("Error: Division by zero!\\n");
    return 1;
}

Exit Status:
• 0 → Success
• Non-zero → Error occurred

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 GRAPHICS IN C (graphics.h - Turbo C)

Basic Graphics Functions:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Function            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ initgraph()         │ Initialize graphics mode                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ closegraph()        │ Close graphics mode                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ line(x1,y1,x2,y2)   │ Draw line                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ circle(x,y,r)       │ Draw circle                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ rectangle(x1,y1,x2,y2) │ Draw rectangle                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ outtextxy(x,y,text) │ Display text at position                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ setcolor(color)     │ Set drawing color                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ getch()             │ Wait for key press                          │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
#include <graphics.h>
#include <conio.h>

int main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "");
    
    setcolor(RED);
    rectangle(100, 100, 200, 200);
    
    setcolor(BLUE);
    circle(150, 150, 50);
    
    outtextxy(120, 220, "Graphics Example");
    
    getch();
    closegraph();
    return 0;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 LINKING

Linking is the process of combining object files and libraries to create an executable.

Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Static Linking      │ Libraries copied into executable            │
│                     │ Larger size, independent runtime            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Dynamic Linking     │ Libraries linked at runtime                 │
│                     │ Smaller size, requires library present      │
└─────────────────────┴─────────────────────────────────────────────┘

Compilation & Linking Flow:
Source Code (.c) → Preprocessor → Compiler → Assembler → Linker → Executable (.exe)

Linking Multiple Files:
gcc -c main.c      # produces main.o
gcc -c mathlib.c   # produces mathlib.o
gcc main.o mathlib.o -o program   # linker combines

Linking with math library (Linux):
gcc program.c -o program -lm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 LIBRARY FUNCTIONS

Categories of Library Functions:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Category            │ Header File  │ Examples                     │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Input/Output        │ <stdio.h>    │ printf, scanf, fprintf       │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ String Handling     │ <string.h>   │ strlen, strcpy, strcmp       │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Mathematics         │ <math.h>     │ sqrt, pow, sin, cos          │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Character Handling  │ <ctype.h>    │ isalpha, isdigit, toupper    │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Memory Management   │ <stdlib.h>   │ malloc, free, calloc         │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Time Functions      │ <time.h>     │ time, clock, difftime        │
├─────────────────────┼──────────────┼──────────────────────────────┤
│ Utilities           │ <stdlib.h>   │ exit, system, rand, abs      │
└─────────────────────┴──────────────┴──────────────────────────────┘

Example (Math Functions):
#include <stdio.h>
#include <math.h>

int main() {
    double x = 9.0;
    printf("sqrt(%.1f) = %.2f\\n", x, sqrt(x));
    printf("pow(%.1f, 2) = %.2f\\n", x, pow(x, 2));
    return 0;
}

Note: Compile with -lm flag:
gcc program.c -o program -lm

Example (String Functions):
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20];
    
    strcpy(str2, str1);
    printf("Copied: %s\\n", str2);
    printf("Length: %lu\\n", strlen(str1));
    
    return 0;
}

✅ SUMMARY
• Standard I/O: printf, scanf for console I/O
• File I/O: fopen, fclose, fprintf, fscanf
• Variable Arguments: stdarg.h, va_list macros
• Command Line: argc, argv parameters
• Error Handling: Check return values, errno, assert
• Graphics: initgraph, closegraph, drawing functions
• Linking: Combines object files into executable
• Library Functions: Predefined functions in standard libraries`,
            contentBn: `📌 ইনপুট ও আউটপুট (I/O)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

স্ট্যান্ডার্ড I/O স্ট্রিম:
┌─────────────────────┬────────┬─────────────────────────────────────┐
│ স্ট্রিম             │ চিহ্ন  │ বর্ণনা                              │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ স্ট্যান্ডার্ড ইনপুট │ stdin  │ কীবোর্ড (scanf)                     │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ স্ট্যান্ডার্ড আউটপুট│ stdout │ স্ক্রিন (printf)                    │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ স্ট্যান্ডার্ড এরর  │ stderr │ ত্রুটি বার্তা                       │
└─────────────────────┴────────┴─────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 ফাইল অ্যাক্সেস

ফাইল অপারেশন:
• fopen() → ফাইল খোলা
• fclose() → ফাইল বন্ধ করা
• fprintf() → ফাইলে ফরম্যাটেড লেখা
• fscanf() → ফাইল থেকে ফরম্যাটেড পড়া
• fgets() → ফাইল থেকে স্ট্রিং পড়া
• fputs() → ফাইলে স্ট্রিং লেখা

ফাইল মোড:
• "r" → পড়া
• "w" → লেখা (ওভাররাইট)
• "a" → যোগ করা
• "rb", "wb" → বাইনারি মোড

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 কমান্ড লাইন প্যারামিটার

int main(int argc, char *argv[])
• argc → আর্গুমেন্ট সংখ্যা
• argv → আর্গুমেন্ট ভেক্টর

উদাহরণ:
./program 10 20 30
argv[0] = "./program"
argv[1] = "10"
argv[2] = "20"
argv[3] = "30"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ এরর হ্যান্ডলিং

কৌশল:
1. রিটার্ন মান পরীক্ষা করা
2. scanf() রিটার্ন পরীক্ষা করা
3. errno ব্যবহার করা
4. assert() ব্যবহার করা
5. শূন্য দ্বারা ভাগ পরীক্ষা করা

এক্সিট স্ট্যাটাস:
• 0 → সাফল্য
• অ-শূন্য → ত্রুটি

✅ সারাংশ
• স্ট্যান্ডার্ড I/O: printf, scanf কনসোল I/O-র জন্য
• ফাইল I/O: fopen, fclose, fprintf, fscanf
• ভেরিয়েবল আর্গুমেন্ট: stdarg.h, va_list ম্যাক্রো
• কমান্ড লাইন: argc, argv প্যারামিটার
• এরর হ্যান্ডলিং: রিটার্ন মান পরীক্ষা, errno, assert
• গ্রাফিক্স: initgraph, closegraph, ড্রয়িং ফাংশন
• লিংকিং: অবজেক্ট ফাইল এক্সিকিউটেবলে সংযুক্ত করে
• লাইব্রেরি ফাংশন: স্ট্যান্ডার্ড লাইব্রেরিতে প্রিডিফাইনড ফাংশন`,
            takeaways: [
                "Standard I/O: printf, scanf for console I/O",
                "File I/O: fopen, fclose, fprintf, fscanf",
                "Variable Arguments: stdarg.h, va_list macros",
                "Command Line: argc, argv parameters",
                "Error Handling: Check return values, errno, assert",
                "Graphics: initgraph, closegraph, drawing functions",
                "Linking: Combines object files into executable",
                "Library Functions: Predefined functions in standard libraries"
            ],
            takeawaysBn: [
                "স্ট্যান্ডার্ড I/O: printf, scanf কনসোল I/O-র জন্য",
                "ফাইল I/O: fopen, fclose, fprintf, fscanf",
                "ভেরিয়েবল আর্গুমেন্ট: stdarg.h, va_list ম্যাক্রো",
                "কমান্ড লাইন: argc, argv প্যারামিটার",
                "এরর হ্যান্ডলিং: রিটার্ন মান পরীক্ষা, errno, assert",
                "গ্রাফিক্স: initgraph, closegraph, ড্রয়িং ফাংশন",
                "লিংকিং: অবজেক্ট ফাইল এক্সিকিউটেবলে সংযুক্ত করে",
                "লাইব্রেরি ফাংশন: স্ট্যান্ডার্ড লাইব্রেরিতে প্রিডিফাইনড ফাংশন"
            ],
            level: "Advanced"
        }
    ]
}

export const module10 = m10