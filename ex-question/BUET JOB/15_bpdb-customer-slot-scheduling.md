# GUI/RAID/API/LRU term table (continued) and BPDB customer time-slot scheduling algorithm

- **Source image:** `15_bpdb-customer-slot-scheduling.jpg` (original file name `494967142_9680213352094229_1493774140514667317_n.jpg`)
- **Page:** 15 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **233**
- **Paper / Post:** not shown (no paper banner is printed on this page; the question text names BPDB, and the same paper's banner appears on printed page 234 of the original document)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown". Question 12's own wording names **BPDB**, and this question is the one that begins on printed page 234, so the paper is the BPDB set — but the banner itself is not on this scan and is therefore not asserted here as printed.
- **The page begins mid-table.** The table for question 11 ("GUI, RAID, API, LRU") starts on printed page 222; only its final fragment is visible here — one orphaned cell reading "RAID 5, etc., each offering different features and benefits.", which is the tail of the RAID row and sits in the *description* column of a row whose label cell is off the top of the page. That orphan row has been marked and not assigned a term.
- **Cut off at the bottom edge:** the Python implementation for question 12 stops at `break`, with the rest of the function (the `if not overlap:` / `schedule.append(...)` / `return len(schedule)` lines) falling on printed page 234. Marked `[cut off]`.
- Python source reproduced verbatim in a fenced `python` block, with the source's non-standard indentation preserved as closely as plain text allows.
- The compiled document prints the coach's own worked answer inline with the question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Continuation of the answer table to question 11 — first row cut off above the page edge)

| Term | Description |
|---|---|
| `[cut off — term cell is above the page edge]` | RAID 5, etc., each offering different features and benefits. |
| API | API stands for Application Programing Interface. It refers to a set of protocols, routines, and tools for building software applications. APIs enable different software components to communicate with each other, exchange data, and access functionalities. A good API should be easy to use, well-documented, and reliable. |
| LRU | LRU stands for Least Recently Used. It is a cache replacement algorithm that evicts the least recently used item from the cache. LRU is widely used in computer architecture to improve memory access performance. It works on the principle that items that are accessed more frequently are more likely to be accessed again in the near future. |

It is not possible to determine which idea is the "best" as they all serve different purposes and have different applications. GUI is important for user interaction and experience, RAID for data storage and reliability, API for software development and integration, and LRU for memory access performance.

**12. BPDB can provide service one customer at a time. BPDB want to provide service multiple customers at same time. If n number of customer at a time requesting for service with the time slot [start, end]. If two customers requesting for the same time slot then only one customer can receive the service. Write an algorithm such that BPDB can provide service maximum number of customer at a time.**

**Answer:**

To maximize the number of customers who can receive service at the same time, we can use a greedy algorithm approach. Here is one possible algorithm:

- Sort the list of customer requests by the starting time of their time slot, breaking ties by the ending time (earlier ending time first).
- Initialize a list called "schedule" to store the time slots of the customers who will receive service.
- For each customer request in the sorted list:
  - a. If the customer's time slot overlaps with any existing time slots in the schedule, skip to the next customer request.
  - b. Otherwise, add the customer's time slot to the schedule.
- Return the length of the schedule as the maximum number of customers who can receive service at the same time.

Here is the Python code implementation of the algorithm:

```python
def max_customers(n, requests):
    requests = sorted(requests, key=lambda x: (x[0], x[1]))
        schedule = [requests[0]]
        for i in range(1, n):
    overlap = False
    for slot in schedule:
        if requests[i][0] < slot[1] and requests[i][1] > slot[0]:
            overlap = True
            break
```

`[cut off — the remainder of the function is on the following page of the original document]`
