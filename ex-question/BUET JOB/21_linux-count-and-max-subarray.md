# BPDB Assistant Engineer (CSE) exam — Q2 answer continued, Q3 and Q4 (with printed answers)

- **Source image:** `21_linux-count-and-max-subarray.jpg` (original file name `495369633_9680213192094245_5666637659591902362_n.jpg`)
- **Page:** 21 of 38 (folder-wide position)
- **Paper / Post:** BPDB Assistant Engineer (CSE) Exam 24.02.2023 (BUET)
- **Exam date:** 24.02.2023
- **Marks:** not shown

## Transcription Notes

- Compiled by a coaching source ("COMPACT IT Written"); its repeated banner, watermarks and printed footer page number ("Page | 17") are ignored.
- This is a direct continuation of the previous folder page (20). It opens mid-answer to Q2 (the "Group" and "Other" bullets) and then carries Q3 and Q4.
- The **printed model answers are reproduced verbatim as they appear on the page**. They are not solutions supplied by me.
- No handwriting or marginalia are visible on this page.
- Q3's question wording is grammatically broken in the original ("total number of linux of the .c and .h file in the current directory formulas the linux commands"); reproduced as printed.

## Content

*(Continuation of the Q2 answer)*

- **Group:** A collection of users who share the same access permissions to the file or directory. The group can be assigned specific read, write, and execute permissions to the file or directory.
- **Other:** Any user who is not the owner or a member of the group assigned to the file or directory. The other user can be assigned specific read, write, and execute permissions to the file or directory.

Note that file permissions on Linux can be set using the chmod command, which allows the owner, group, and other users to be assigned specific access permissions to the file or directory.

---

**3. You need to find the total number of linux of the .c and .h file in the current directory formulas the linux commands to display this......... (Approximate)**

**Answer:**
You can use the 'ls' command with the wildcard character '*' to list all files in the current directory that have a .c or .h extension, and then pipe the output to the wc command with the '-l' option to count the number of files:

```
ls -l *.c *.h | wc -l
```

This will display the total number of .c and .h files in the current directory.

---

**4. The maximum subarray is the task of finding a contiguous subarray with the largest sum within a given one dimensional array of numbers. Suppose the array is: A: [-2, 1, -3, -1, 2, 1, -5, 4]**

**Answer:**
Using the Kadane's algorithm, we can find the maximum subarray sum and the corresponding subarray within the given one-dimensional array A:

- Initialize two variables, max_so_far and max_ending_here, to the first element of the array A.
  ```
  max_so_far = A[0]
  max_ending_here = A[0]
  ```
- Loop through the array A, starting from the second element:
  ```
  for i in range(1, len(A)):
  ```
- For each element A[i], update max_ending_here to be the maximum of A[i] and A[i] + max_ending_here:
  ```
  max_ending_here = max(A[i], A[i] + max_ending_here)
  ```
- Update max_so_far to be the maximum of max_so_far and max_ending_here:
  ```
  max_so_far = max(max_so_far, max_ending_here)
  ```
- At the end of the loop, max_so_far will contain the maximum subarray sum.

The maximum subarray sum within the given array A is 6, and the corresponding subarray is [1, -3, -1, 2, 1, -5, 4].
