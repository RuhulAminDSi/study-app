# Protocol-to-layer table, SQL for below-department-average salaries, GUI/RAID/API/LRU terms

- **Source image:** `19_protocol-layer-sql-terms.jpg` (original file name `495180457_9680213375427560_5310995071767692895_n.jpg`)
- **Page:** 19 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **22**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-solution:** "Step 5: Verify the output." with the three output lines is the tail of question 8 (Facade pattern) that begins on printed page 20. Reproduced verbatim as a continuation block.
- **Question 11's table is cut off** at the bottom edge: only the GUI row and the RAID row are visible, and the RAID description itself stops mid-sentence at "There are different RAID levels such as RAID 0, RAID 1,". The API and LRU rows are on printed page 233. Marked `[cut off]`.
- Question 9's wording "Fill up the following protocol table by work at which layer?" is reproduced verbatim.
- Question 10's SQL answer is reproduced verbatim, including the nested subquery structure and its original indentation.
- The compiled document prints the coach's own worked answers inline with each question. Reproduced faithfully as printed; **not** verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Continuation of question 8, Facade pattern — "Step 5: Verify the output.")

**Step 5:** Verify the output.

```
Circle::draw()
Rectangle::draw()
Square::draw()
```

**9. Fill up the following protocol table by work at which layer?**

**Answer:**

| Protocol Name | Layer |
|---|---|
| **Carrier-Sense Multiple Access (CSMA)** | Datalink layer |
| **Open Shortest Path First (OSPF)** | Network layer |
| **Transmission Control Protocol (TCP)** | Transport layer |
| **Routing Information Protocol (RIP)** | Network layer |
| **User datagram protocol (UDP)** | Transport layer |

**10. Write following EMPLOYEE database table write an SQL query to find employee who work is a department where the average salary is lower then the average salary all the department…….**

**Answer:**

Assuming the name of the database table is "employee" and it contains the following columns: employee_id, employee_name, department, salary.

The SQL query to find employees who work in a department where the average salary is lower than the average salary of all departments can be written as:

```sql
SELECT e.employee_id, e.employee_name, e.department, e.salary
FROM employee e
WHERE e.salary < (SELECT AVG(salary) FROM employee)
AND e.department IN (
        SELECT department
        FROM employee
        GROUP BY department
        HAVING AVG(salary) < (SELECT AVG(salary) FROM employee)
);
```

**11. Here some idea in computer architecture. You fill the idea part of the table which describe the best? GUI, RAID, API, LRU**

**Answer:**

| Term | Description |
|---|---|
| GUI | GUI stands for Graphical User Interface. It refers to the visual elements such as windows, icons, menus, and buttons that enable users to interact with a computer system. A good GUI should be intuitive, user-friendly, and response. |
| RAID | RAID stands for Redundant Array of Inexpensive Disks. It is a data storage technology that uses multiple disk drives to improve performance, reliability, and capacity. There are different RAID levels such as RAID 0, RAID 1, `[cut off — the RAID row continues on printed page 233, and the API and LRU rows follow it]` |
