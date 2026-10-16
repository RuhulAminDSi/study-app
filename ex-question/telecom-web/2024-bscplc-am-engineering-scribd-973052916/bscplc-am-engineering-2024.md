# Bangladesh Submarine Cables PLC (BSCPLC) Assistant Manager (Engineering) 13.12.2024, BUET: CSE paper (SQL self-join, CPU registers, submarine fibre vs satellite, C output, ML, statistics, routing table)

- **Source:** Scribd document 973052916 "BUET 2025 CSE Job Exam Questions" (https://www.scribd.com/document/973052916/BUET-Pattern-IT-Questions), a 12-page excerpt of a coaching compilation; the BSCPLC paper is on its pages 1-2 (book page 73). Saved as the public viewer fragments `page-1-*.jsonp`, `page-2-*.jsonp` with their background images; text in `scribd-973052916-p1-2.txt`.
- **Second source:** it.jobqns.com "Bangladesh Submarine Cables PLC AM(Engineering) 2024" (https://it.jobqns.com/bangladesh-submarine-cables-plc-amengineering-2024/); only Q1 is public (the rest needs a paid login and was not accessed). Saved as `jobqns-bscplc-am-engineering.html.txt`.
- **Publisher:** watermark "Manik Vai Duranta Academy" (Duranta), running head "BUET 2025 CSE Job Exam Questions".
- **Pages:** 2 of the 12-page excerpt
- **Document type:** exam paper (coaching compilation)

## Transcription Notes

- Banner as printed: "Bangladesh Submarine Cables PLC (BSCPLC) / Exam Taker: BUET / Question Type: CSE Based / Date: 13 December, 2024 / Time: 10:00-11:00 AM / Marks: 100". The post is not printed in the compilation; the jobqns URL names it "AM(Engineering) 2024", and BSCPLC's written exam for Assistant Manager (Engineering) and Deputy Assistant Manager (Engineering) was held on 13.12.2024. Tagged `BSCPLC AM(Engineering) 2024`.
- The jobqns page's own header reads "Post: Assistant Maintenance Engineer, Exam Date: 08/05/2026", which conflicts with its URL and with the Duranta banner. Its Q1 is the same SQL question in other wording (Employees(EMP_ID, EMP_Name, Manager_ID, Dept_ID); Departments(Dept_ID, Salary, Dept_Name, Emp_ID); (a) names of the manager of each employee; (b) sort the employees of each department by salary, descending). Treated as a second copy of this paper, not as a 2026 exam.
- The questions sit in a table whose numbering is partly lost in the text layer: the item after Q3(b) is printed "(b) Print the output:" with no "4." and no (a); it is numbered **4** here. Its code lacks the closing brace and declares `int arr[a]` but indexes `a[2]`; kept as printed.
- Q2's right-hand column (the answers to match) is blank in the compilation.
- Q6 (routing table) spans pages 1-2 and its number is not printed. Its Bangla instruction on page 2 is in a broken legacy font and unreadable in the text layer ("উপর Data  অযায়ী নর  IP গরা কা  Line Interface  নরয় াজ রে"); the gist is "using the data above, find the line interface for each IP address". Marked `[garbled]`. The binary masks and the dotted values printed beside them are kept as printed.
- Per-question marks not printed.
- **Duplicates:** this paper is not transcribed anywhere in `ex-question/`. The **same Scribd document** was saved, untranscribed, by another session at `model-test-web/scribd-buet-pattern-it-questions/` (12 pages, several BUET-taken 2025 papers). If that folder is transcribed later, its BSCPLC section duplicates this one; keep only one set of records.

## Content

### BSCPLC Assistant Manager (Engineering) 13.12.2024

Bangladesh Submarine Cables PLC (BSCPLC), post not printed (Assistant Manager (Engineering) per the jobqns URL) - Date: 13 December, 2024, 10:00-11:00 AM - **Exam taker: BUET** - Question Type: CSE Based - Marks: 100 - pages 1-2. Document type: exam paper (coaching compilation).

**1.** Employees (Employee_id, Name, Salary, Manager_id, Department_id)
Department (Department_id, Department_name, Manager_id, City, DOB, Joining_date)
(a) Find out the names of employee under a manager.
(b) Sort the employees of each department based on paid salary where city = 'Dhaka' department wise in descending order .

**2.** Answer right portion according to left portion.

| Left portion | Right portion |
|---|---|
| (i) Which bus transfers data between data and I/O devices? | |
| (ii) Which register contains the address next instructions | |
| (iii) Which register does the arithmetic and logical operation | |
| (iv) Which system connects the hardware and software | |
| (v) Microprocessor and other hardware's are interfaced with which board | |

**3.** (a) Why Fiber optic cable is used in Submarine instead of satellite?
(b) Why the submarine cable is damaged under water?

**4.** (b) Print the output: *(number and part (a) not printed; see notes)*

```c
#include <stdio.h>
int main() {
int arr[a] = {5,3,2,1,4};
int b[] = {66,55,30,20,45};
 printf("%d", b[a[2]]);
```

**5.** (a) Given some features of diabetic dataset. From this it can be predict whether this patient is diabetic or not. Is this supervised learning or unsupervised learning problem. Explain in one sentence.
(b) Find Mean, median, mode value from the below data set:
24, 24, 23, 25, 28, 30, 22, 12

**6.** *(routing table; number not printed)*

| Subnet Mask | Line Interface |
|---|---|
| 11111111.11111111.11111111.11****** (255.255.255.192) | 0 |
| 11111111.11111111.000000**.******** (255.255.) | 1 |
| 11111111.11111100.111100**.******** | 2 |
| Otherwise | 3 |

[garbled Bangla instruction: using the data above, find the Line Interface for each IP address]

| IP Address | Line Interface |
|---|---|
| 11111111.11111111.00011111.11100000 (255.255.31.224) | ? |
| 11111111.11111111.00011111.00100000 (255.255.31.32) | ? |
| 11111111.11111100.11100000.11110100 (255.252.224.244) | ? |
