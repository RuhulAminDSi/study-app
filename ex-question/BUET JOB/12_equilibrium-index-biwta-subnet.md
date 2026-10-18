# Equilibrium index algorithm; BIWTA Assistant Engineer (CSE) 24.02.2023 subnetting

- **Source image:** `12_equilibrium-index-biwta-subnet.jpg` (original file name `494712232_9680213498760881_3598984991539828217_n.jpg`)
- **Page:** 12 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **25**
- **Paper / Post:** Two papers on this page. Top: end of an earlier paper (not shown, no banner visible above it). Then banner: **BIWTA, Assistant Engineer (CSE), Exam: 24.02.2023 (BUET)** — coaching compilation: "COMPACT IT Written" / Previous Exam Questions, COMPACT IT JOB SOLUTION
- **Exam date:** 24.02.2023 (BIWTA Assistant Engineer); not shown for the preceding section
- **Marks:** not shown

## Transcription Notes

- The page carries two distinct papers. The "Input / Output / Answer" equilibrium-index material at the top belongs to the preceding paper (no banner for it appears on this page). The "BIWTA, Assistant Engineer (CSE), Exam: 24.02.2023 (BUET)" banner then starts a new paper, whose question 1 appears below it. Question numbering therefore restarts; this is as printed and is preserved.
- **The page begins mid-question:** the question heading and the "Input: A[ ] = {1, 2, 3} / Output: -1" lines are printed, but the question text itself is on the preceding page of the original document, not in this set.
- **Question 1 is cut off** at the bottom edge: the answer stops after "…for the given IP address and subnet mask, follow these steps:" with the actual steps falling on the following page of the original document. Marked `[cut off]`.
- Two different sample inputs for the same equilibrium problem appear on this page (`A[ ] = {1, 2, 3}` → `-1` here, and `A[ ] = {-7, 1, 5, 2, -4, 3, 0}` → `3` on printed page 24). Both are reproduced as printed; the discrepancy in `arr` literal length between the worked `main()` on this page (7 values) and the printed input line is as given in the source and has not been altered.
- C++ source is reproduced verbatim in a fenced `cpp` block.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (End of preceding paper — no banner shown)

**Input:** A[ ] = {1, 2, 3}

**Output:** -1

**Answer:**

Steps to solve the problem:

1. iterate through i=1 to n:
   - \*declare a leftsum variable to zero.
   - \*iterate through 0 till i and add arr[i] to leftsum.
   - \*declare a rightsum variable to zero.
   - \*iterate through i+1 till n and add arr[i] to rightsum.
   - \*check if leftsum is equal to rightsum than return arr[i].
2. return -1 in case of no point.

Below is the implementation of the above approach:

```cpp
#include <bits/stdc++.h>
using namespace std;
int equilibrium(int arr[], int n){
    int i, j;
    int leftsum, rightsum;
    for(i = 0; i < n; ++i) {
        leftsum = 0;
        for(j = 0; j < i; j++)
            leftsum += arr[j];
        rightsum = 0;
        for(j = i + 1; j < n; j++)
            rightsum += arr[j];
        if(leftsum == rightsum)
            return i;
    }
    return -1;
}
int main(){
    int arr[] = { -7, 1, 5, 2, -4, 3, 0 };
    int arr_size = sizeof(arr)/sizeof(arr[0]);
    cout << equilibrium(arr, arr_size);
    return 0;
}
```

---

## BIWTA
### Assistant Engineer (CSE)
### Exam: 24.02.2023 (BUET)

**1. Give IP 192.168.1.50 and subnet mask 255.255.255.240; Find valid host, Network address, and Broadcast address.**

**Answer:**

To calculate the valid host range, network address, and broadcast address for the given IP address and subnet mask, follow these steps:

`[cut off — the remaining steps are on the following page of the original document]`
