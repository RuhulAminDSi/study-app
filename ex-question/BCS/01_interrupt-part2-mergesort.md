# COMPACT IT Recent Question Bank (Written) — Software Interrupts, Time Period, and Part II opening (Q23 MergeSort)

- **Source image:** `01_interrupt-part2-mergesort.jpg` (original file name `487404660_775600688148925_832623617646629305_n.jpg`)
- **Page:** 1 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 5 for Q23(a); Part II stated as "Marks 25x4=100"

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution"). Recorded here once as the publisher of this sheet.
- Page opens mid-answer: the first bullet continues a previous question's answer about interrupts; the parent question is on a preceding page and is not visible here.
- The pseudocode block for Q23(a) is cut off at the bottom edge of the image mid-statement (after `arr[k] = leftArr[i]` / `i++` / `else`).
- No handwritten marginalia on this page.

## Content

- **Software Interrupts:** Software interrupt can also have divided in to two types. They are
  - **Normal Interrupts:** the interrupts which are caused by the software instructions are called software instructions.
  - **Exception:** unplanned interrupts while executing a program is called Exception. For example: while executing a program if we got a value which should be divided by zero is called a exception.

To find the corresponding time period for a processor speed of **1.8 GHz**, we can use the formula: Time Period = 1 / Frequency
Where:

- Time Period is the duration of one cycle (measured in seconds)
- Frequency is the processor speed (measured in Hertz)

Given that the processor speed is 1.8 GHz (1.8 billion cycles per second), we can plug this value into the formula:
Time Period = 1 / 1.8 GHz
First, we need to convert 1.8 GHz to Hz: 1.8 GHz = 1.8 × 10⁹ Hz
Now, we can calculate the time period: Time Period = 1 / (1.8 × 10⁹ Hz) ≈ 5.556 × 10^(-10) seconds
So, the corresponding time period for a processor speed of 1.8 GHz is approximately 5.556 × 10^-10 seconds.

---

## Part II
**(Answer all of the following questions)**

**Marks 25x4=100**

**23. (a) Write the Mergesort algorithm to sort n elements using divide and conquer strategy.** — **5**

**Answer:**

```
MergeSort(arr, start, end)
    if start < end then
        mid = (start + end) / 2
        MergeSort(arr, start, mid) // Recursive call for left half
        MergeSort(arr, mid +1, end)  //Recursive call for right half
        Merge(arr, start, mid, end)  //Merge the sorted halves

Merge(arr, start, mid, end)
    n1 = mid - start + 1       // Size of left subarray
    n2 = end - mid             // Size of right subarray
    leftArr[n1]
    rightArr[n2]
    for i = 0 to n1 -1 do
        leftArr[i] = arr[start + i]
    for j = 0 to n2 - 1 do
        rightArr[j] = arr[mid + 1 + j]
    i = 0     // Initial index of left subarray
    j = 0     // Initial index of right subarray
    k = start // Initial index of merged array
    while i < n1 and j < n2 do
        if leftArr[i] <= rightArr[j] then
            arr[k] = leftArr[i]
            i++
        else
            [cut off]
```
