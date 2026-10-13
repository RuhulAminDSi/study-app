# COMPACT IT Recent Question Bank (Written) — Structured vs object-oriented programming table, and initializing / passing a 1-D array in C (Q19a-b)

- **Source image:** `13_structured-vs-oop-and-arrays.jpg` (original file name `488588291_775600288148965_2841918621393511497_n.jpg`)
- **Page:** 13 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 5 for part (b)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Top of page is a continuation: the opening paragraph and bullet list belong to part (a) whose stem is on the preceding page.
- Part (b)'s mark value is printed inline at the end of the question stem ("in C? 5"); rendered here as a separate marks value.
- No handwritten marginalia on this page.

## Content

*[Continuation of part (a) answer]*

implement them using programming languages and tools. Here are some key aspects of programming problem-solving techniques:

- Understanding the Problem
- Divide and Conquer
- Algorithm Design
- Data Structures
- Coding and Implementation
- Testing and Debugging
- Optimization and Refinement
- Documentation and Communication:

**Differences between structured programming and object-oriented programming:**

| Procedural Oriented Programming | Object Oriented Programming |
| --- | --- |
| In procedural programming, program is divided into small parts called functions. | In object oriented programming, program is divided into small parts called objects. |
| Procedural programming follows top down approach. | Object oriented programming follows bottom up approach. |
| Adding new data and function is not easy. | Adding new data and function is easy. |
| In procedural programming, overloading is not possible. | Overloading is possible in object oriented programming. |
| In procedural programming, function is more important than data. | In object oriented programming, data is more important than function. |
| Examples: C, FORTRAN, Pascal, Basic etc. | Examples: C++, Java, Python, C# etc. |

**(b) How can we initialize 1-D array? How can we pass the array to a function in C?** — **5**

**Answer:** The One-dimensional arrays, also known as 1-D arrays in C are those arrays that have only one dimension. Syntax of 1D Array in C:

```c
    array_name [size];
    int myArray[] = {1, 2, 3, 4, 5};
```

Arrays in C are always passed to the function as pointers pointing to the first element of the array.

**Syntax:** In C, we have three ways to pass an array as a parameter to the function. In the function definition, use the following syntax:

```c
    return_type foo (array_type array_name[size], ...);
```

Mentioning the size of the array is optional. So the syntax can be written as:

```c
    return_type foo (array_type array_name[], ...);
```

In both of the above syntax, even though we are defining the argument as array it will still be passed as a pointer. So we can also write the syntax as:

```c
    return_type foo ( array_type* array_name, ...);
```

But passing an array to function results in array decay due to which the array loses information about its size. It means that the size of the array or the number of elements of the array cannot be determined anymore.
