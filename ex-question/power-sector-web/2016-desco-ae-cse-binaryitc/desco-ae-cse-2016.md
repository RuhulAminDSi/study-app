# DESCO Assistant Engineer (Tech/CSE), 27.05.2016 (BUET): SQL joins and DISTINCT, indexing and hashing, Java inheritance, C macro and static-variable output, max of three, algorithm MCQs, use-case diagram

- **Source pages (HTML text saved):**
  - `desco-ae-cse-2016.html.txt` from https://binaryitc.blogspot.com/2020/08/desco-assistant-engineer-cse-2016.html (posted 2020-08-19, fetched through the public Blogger feed)
  - `onlineicttutor-desco-ae-2016.html.txt` from http://www.onlineicttutor.com/desco-assistant-engineer-recruitment-exam-paper-2016/ (posted 2016-05-27, the original; the site is offline, fetched from the Wayback Machine capture)
- **Images:** `img-form.png` (a "Student Registeration Form" screenshot) and `img-usecase.png` (an "Online Survey System" use-case diagram) are the binaryitc blogger's answer illustrations for Q7/Q8, not exam figures. The exam figure for Q8 (`desco_exam_diagram.jpg` on onlineicttutor) was not archived and could not be fetched.
- **Publisher:** candidate's recollection posted on onlineicttutor.com (admin), reposted with answers on binaryitc.blogspot.com
- **Pages:** 1 web page each
- **Document type:** exam paper (candidate's recollection)

## Transcription Notes

- **Recollection, not the printed paper.** The writer says: "They didn't give us the questions paper so I just writing here from my memory" and "[Note: Questions serial may not match]". Q9–Q13 are recalled only as topics ("IP related questions", "Fill out the table from given circuit"…). They are kept as recalled.
- The onlineicttutor original gives the date (27 May 2016), the taker (BUET), the post ("Assistant Engineer (Tech) … (CSE)"), the format: 100 marks = 30 MCQ (60 MCQ × 0.5) + 70 written, 1 h 30 min, 14 written CSE questions. Only 13 written items are recalled.
- The binaryitc copy adds sample answers (SQL, Java classes, C programs). They are summarised in one line each.
- Q3 is recalled with a lower-case `max(...)` call against an upper-case `MAX` macro, and without `main()` in the onlineicttutor copy. Kept as printed. See the answer note.
- Q8's diagram is missing from both copies (see above).
- MCQ part: 15 of 60 MCQs are recalled. Q1–Q8 and Q14–Q15 are GK, Bangla and English (10 items, not transcribed). Q9–Q13 are IT and are transcribed. Neither copy marks a key.
- **Overlap with existing files:** none. No DESCO 2016 paper exists in `ex-question/` (grep for "DESCO" with "2016" finds nothing; `exam-tags.json` has no DESCO 2016 key).

## Content

### DESCO Assistant Engineer (CSE) 27.05.2016

Dhaka Electric Supply Company Limited (DESCO) — Assistant Engineer (Tech), CSE — **Exam taker: BUET** (as printed: "This exam is taken by BUET in May 27, 2016") — Time: 1 h 30 min — Marks: 100 (30 MCQ + 70 written); 60 MCQ at 0.5 mark; 14 written CSE questions. Document type: exam paper (candidate's recollection).

#### Written part

**Q1.**
(i) Which type of JOIN is used to find not matched data from table?
(ii) In which keyword is used for retrieving data from table without duplicate row data?
(iii) What is the output of the following query –

```sql
SELECT  *
 FROM myTbale
WHERE id>0
ORDER BY id DESC, NAME DESC
```

(iv) Why indexing is used in database? How hash table works?

> Printed answer (binaryitc): a UNION ALL … GROUP BY … HAVING COUNT(*) = 1 query for unmatched rows; SELECT DISTINCT; indexes avoid full scans; a hash table maps keys to array slots with a hash function.

**Q2.** Java Programming: Write a class named Bicycle and create a constructor of its and initialize the class member names cadense as Integer, gear as Integer speed as Integer. Write another class MountainBike and create also a constructor of its and add this field seatHeight as Integer and a method to set its from this class and extend Bicycle class.

> Printed answer: `Bicycle` with three int fields and a constructor; `MountainBike extends Bicycle` calling `super(...)` with `seatHeight` and `setHeight()`.

**Q3.** Write the output of the following program

```c
#define MAX(A,B) ((A)>(B)) ? A:B
void main(){
  int i=1;
  int j=2;
  int val=max(++i,++j);
  printf("%d",val);
}
```

[Note: My written variable may not match]

> Printed answer: Output: 3
> Answer issue: as recalled it does not compile (`max` is not the macro `MAX`). With `MAX`, the expansion is `((++i)>(++j)) ? ++i:++j`: i becomes 2, j becomes 3, the test is false, and `++j` makes it 4, so it prints **4**, not 3.

**Q4.** Write a program in any programming language to find maximum number from given three numbers.

> Printed answer: three C versions (nested if-else, if-else-if with &&, ternary operator).

**Q5.** Write the output of the following program

```c
int sum(int val){
  static int myResult=0;
  myResult += val;
  return myResult;
}
void main(){
  int i, value;
  for(i=1;i<10;i++)
    value=sum(i);
  printf("%d",value);
}
```

> No answer printed. (Worked out: the static variable accumulates 1+2+…+9 = 45.)

**Q6.**
(i) Divide and Conquer method is used in
(a) Merge Sort (b) Bubble Sort (c) Quick Sort (d) Both a & c
(ii) Dynamic programming approach is used to solve
(a) Dijkstra algorithm (b) Kruskal's Algoritm (c) Prim's Algorithm (d) None of these
(iii) Binary search worst time complexity is
(a) O(n) (b) O(1) (c) O(log n) (d) O(n^2)

> No key printed.

**Q7.** A company have a web based survey system where visitor browse the website login page. Only authorized visitor can access this survey system by using username and password. After login, visitor get a survey form and submit by filling the required information.
Now draw the use-case diagram of this web based survey system.

> Printed answer: a use-case diagram (Surveyee/Surveyor actors; Log in, Manage survey, Answer survey, View results).

**Q8.** Drawing interface from following diagram
[diagram not available: the exam figure was not archived]
Now draw a interface of this system for the user in a convenient way from where user get proper instruction.

**Q9.** IP related questions
**Q10.** Program analyzing and writing output
**Q11.** Fill out the table from given circuit
**Q12.** Describe different part of given microprocessor block diagram
**Q13.** Write the device name according to the given criteria. (This question is related with Router, Switch, Hub, Gateway)

#### MCQ part (60 questions, 15 recalled)

Non-IT items (not transcribed): Q1–Q2 GK, Q3–Q8 Bangla, Q14 English, Q15 GK (10 items).

**Q9.** Which is the faster Memory?
(a) RAM (b) Secondary Memory (c) DRAM (d) Cache

**Q10.** Which is not a application software?
(a) Redhat Linux (b) MS Office (c) Open Office (d) Adobe illustrator

**Q11.** Microprocessor is used first in which generation computers?
(a) Second Generation (b) Third Generation (c) Fourth Generation (d) Fifth Generation

**Q12.** When we browse internet, browser store some data in the computer. We are talking about
(a) Session (b) File (c) Memory (d) Cookie

**Q13.** In client-server system what does the client program?
(a) Share data with other computer (b) Serve information to others computer (c) Control others connected computers (d) Asked for information

> No key printed.
