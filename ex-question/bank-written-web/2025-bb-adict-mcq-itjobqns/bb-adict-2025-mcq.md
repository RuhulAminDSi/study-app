# Bangladesh Bank Assistant Director (ICT), MCQ part, 07.02.2025 — IT Job QnS recollection

- **Source:** IT Job QnS, "Bangladesh Bank, Assistant Director(ICT), 2025 (MCQ)" — https://it.jobqns.com/bangladesh-bank-assistant-directorict-2025-mcq/ (published 2026-02-24; page text saved as `bangladesh-bank-assistant-directorict-2025-mcq.html.txt`). Same quiz is embedded at https://it.jobqns.com/previous-bangladesh-bank-it-qns/.
- **Publisher:** IT Job QnS (it.jobqns.com), a coaching/quiz site; questions shown as a QSM quiz, answers behind "See Answer or take exam" (not fetched — the answer view needs the quiz to be taken).
- **Pages:** 1 web page, 49 questions
- **Document type:** exam paper (candidates' recollection of the MCQ part; not an official paper)

## Transcription Notes

- Page header as printed: "Bangladesh Bank / Post: Assistant Director (ICT) / Exam Date: 07.02.2025, Exam Taker: FBS / Here Total Question: 49".
- **Recollection:** the set is the site's reconstruction from candidates; the official MCQ count and marks are not given. Some options are clearly rebuilt (Q7 has two identical options; Q39 reuses Q49's options).
- **Exam taker: FBS — unverified attribution.** "FBS" (Faculty of Business Studies, University of Dhaka) is the site's label only. Another coaching sheet already in the repo (`Network/05_total-latency-delay-questions.md`, Debug IT Job Solution) labels the written paper "BB, AD(ICT): 06.02.25 (DU)". No Bangladesh Bank notice or news report naming the conducting body was found. The Bangladesh Bank result notice (5 March 2025, via LiveMCQ) confirms only that the written exam was held on 7 February 2025 and 180 candidates passed (Job ID 271, circular 76/2023; 48 finally selected, notice 25 March 2025).
- Each quiz item ends with an extra radio option "None" (a quiz-plugin artefact); dropped.
- **Key:** not shown on the public page. Where a question is computational, a checked "Worked answer" is given instead. The same site's written-paper compilation (`../2025-bb-adict-written-itjobqns/`) has a short recollection list with a few answers ("NOR and NAND", "Heap", "TLS", "RSA", "Internal Server Error", "Indexing", "Rectifier").
- Non-IT items (GK and mental arithmetic): Q25, Q27–Q34, Q44 — 10 questions, listed by number only.
- Duplicate check: `exam-tags.json` has a `BB AD(ICT) 2025` key holding one written numerical (latency); no MCQ from this exam is in `ex-question/`. New.

## Content

### Bangladesh Bank — Assistant Director (ICT) (Job ID 271, circular 76/2023) — MCQ — 07.02.2025 — Exam taker: FBS (as labelled by IT Job QnS; unverified) — 49 recalled MCQs

- Non-IT: GK Q25, Q27, Q28, Q29, Q44; mental arithmetic Q30–Q34 — 10 questions.

**1.** Find output-
```text
 int fun(int *p) {
  *p = *p + 10;
  return *p;
}
int main() {
  int x = 5;
  cout << fun(&x);
  return 0;
}
```

- (a) 15
- (b) 10
- (c) 25
- (d) 5

> Key: not shown on the page
> Worked answer: 15 (a).

**2.** Find output
```text
 int main() {
  int x = 3, y = 2;
  if (x == 3)
    y = 2;
  else
    y = 3;
  cout << x << " " << y << endl;
  return 0;
}
```

- (a) 3 3
- (b) 3 2
- (c) 2 3
- (d) 3 1

> Key: not shown on the page
> Worked answer: 3 2 (b). The recollection list on the same site prints the variant `if (x==2)` with answer "2, 3".

**3.** Which one is a Universal Logic Gate?

- (a) NAND
- (b) AND
- (c) OR
- (d) NOT

> Key: not shown on the page

**4.** Which data structure is preferred for Priority Queue?

- (a) Heap Tree
- (b) Graph
- (c) Stack
- (d) Table

> Key: not shown on the page

**5.** What is the Work of a Rectifier?

- (a) Converts DC to AC
- (b) Converts AC to DC
- (c) Stores Electrical Energy
- (d) ncreases Voltage

> Key: not shown on the page

**6.** A to B transfer balance but not sent to B? Which property in ACID is responsible?

- (a) Atomicity
- (b) Consistency
- (c) Isolation
- (d) Durability

> Key: not shown on the page

**7.** What is the 2’s complement of (67)₁₀

- (a) 01000011
- (b) 01000011

> Key: not shown on the page
> Transcription note: the page prints only two options, both "01000011" (options cut on the site). Worked answer: +67 = 01000011; the 8-bit two's complement of 67 (i.e. −67) is 10111101.

**8.** What does inductance depend on?

- (a) Number of turns in the coil
- (b) Permeability of the core material
- (c) Cross-sectional area of the coil
- (d) All of the above

> Key: not shown on the page

**9.** Zener diode is a ______ conducting device.

- (a) Unidirectional
- (b) Bidirectional
- (c) Multidirectional
- (d) Tri-directional

> Key: not shown on the page

**10.** Which of the following does NOT achieve encapsulation?

- (a) Using private access specifier
- (b) Using classes in object-oriented programming
- (c) Using getter and setter methods
- (d) Using global variables

> Key: not shown on the page

**11.** Which algorithm is used in email security?

- (a) AES
- (b) RSA
- (c) SHA
- (d) All of the above

> Key: not shown on the page

**12.** In the given circuit, resistors of 10Ω, 20Ω, and 30Ω are connected in parallel, and 60V is applied. What is the equivalent current?

- (a) 8 A
- (b) 9 A
- (c) 11 A
- (d) 12 A

> Key: not shown on the page
> Worked answer: I = 60/10 + 60/20 + 60/30 = 6 + 3 + 2 = 11 A (c).

**13.** A process needs I/O operations, it switches to ______.

- (a) Ready
- (b) Running
- (c) Waiting (Blocked)
- (d) Terminated

> Key: not shown on the page

**14.** Which of the following is NOT a web server?

- (a) Apache Tomcat
- (b) PHP
- (c) Jetty

> Key: not shown on the page

**15.** Which clause is executed first in an SQL query?

- (a) WHERE
- (b) SELECT
- (c) FROM
- (d) ORDER BY

> Key: not shown on the page

**16.** What should be true for a Zener Diode?

- (a) Reverse bias for amplifying
- (b) Operates in forward bias only
- (c) Works in reverse breakdown region
- (d) Used for rectification

> Key: not shown on the page

**17.** Which of the following is a DML (Data Manipulation Language) command?

- (a) CREATE
- (b) DELETE
- (c) DROP
- (d) ALTER

> Key: not shown on the page

**18.** What kind of encryption is used for securing emails in transit?

- (a) Symmetric Encryption
- (b) Asymmetric Encryption
- (c) TLS (Transport Layer Security)
- (d) Hashing

> Key: not shown on the page

**19.** Digital Signature uses which algorithm?

- (a) AES
- (b) RSA
- (c) DES
- (d) Diffie-Hellman

> Key: not shown on the page

**20.** What does HTTP Status Code 500 indicate?

- (a) Bad Request
- (b) Unauthorized Access
- (c) Internal Server Error
- (d) Not Found

> Key: not shown on the page

**21.** Which data structure is best suited for implementing a scheduler in an operating system?

- (a) Stack
- (b) Queue
- (c) Heap
- (d) Tree

> Key: not shown on the page

**22.** Priority Scheduling (Non-Preemptive) with with No Arrival Time Consider the following set of processes with respective burst time and priority. (lower number = higher priority). What is the Average turnaround time?

|  | Process | Burst Time (BT) | Priority
| P1 | 10 | 3
| P2 | 1 | 1
| P3 | 2 | 4
| P4 | 1 | 5
| P5 | 5 | 2


- (a) 10
- (b) 12
- (c) 9.2
- (d) 8.6

> Key: not shown on the page
> Worked answer: order P2, P5, P1, P3, P4 → completion 1, 6, 16, 18, 19 → average turnaround 60/5 = 12 (b). The site's own recollection list prints "Ans.: 0".

**23.** What is the major drawback of Waterfall Model?

- (a) It is difficult to manage
- (b) It requires too many resources
- (c) It is inflexible and not suitable for changing requirements
- (d) It lacks proper documentation

> Key: not shown on the page

**24.** Which of the following is a command of Data Definition Language (DDL)?

- (a) SELECT
- (b) INSERT
- (c) UPDATE
- (d) CREATE

> Key: not shown on the page

**26.** Which protocol is primarily used to securely transfer files over the internet?

- (a) FTP
- (b) HTTP
- (c) SFTP
- (d) SMTP

> Key: not shown on the page

**35.** Which of the following is an application of Queue data structure?

- (a) Expression evaluation
- (b) Function call management
- (c) CPU scheduling
- (d) Undo operation

> Key: not shown on the page

**36.** Which operator should be preferred to overload as a global function rather than a member method?

- (a) Postfix ++
- (b) Comparison operator
- (c) Arithmetic operator <<
- (d) Prefix ++

> Key: not shown on the page

**37.** What are the advantages of Linear Search over Binary Search?

- (a) The array is ordered
- (b) Less number of comparisons
- (c) Less time and space complexity
- (d) inear search can be used irrespective of whether the array is sorted or not

> Key: not shown on the page

**38.** Integration testing is the process of testing the ______ between two software units or modules.

- (a) Performance
- (b) Interface
- (c) Functionality
- (d) Security

> Key: not shown on the page

**39.** Digital signature uses which algorithm for encryption?

- (a) Transformer
- (b) Rectifier
- (c) Inverter
- (d) Amplifier

> Key: not shown on the page
> Transcription note: the stem repeats Q19 and the options are copied from Q49 (Transformer, Rectifier, Inverter, Amplifier) — a site error, kept as printed.

**40.** What is Docker Hub and Docker?

- (a) Docker is a container platform, and Docker Hub is a cloud repository for Docker images
- (b) Docker is a virtual machine software, and Docker Hub is a database
- (c) Docker is a programming language, and Docker Hub is a code editor
- (d) Docker is a firewall, and Docker Hub is a security tool

> Key: not shown on the page

**41.** An IP address is given 192.168.3.0, need 254 usable hosts. What is the CIDR value and subnet mask?

- (a) 255.255.255.0
- (b) 255.255.255.128
- (c) 255.255.255.192
- (d) 255.255.254.0

> Key: not shown on the page
> Worked answer: 254 hosts → /24, 255.255.255.0 (a).

**42.** Which one makes data access from a database faster?

- (a) Indexing
- (b) Normalization
- (c) Denormalization
- (d) All of the above

> Key: not shown on the page

**43.** Which ACID property ensures that a transaction, once committed, will remain permanent even after a system failure?

- (a) Atomicity
- (b) Consistency
- (c) Isolation
- (d) Durability

> Key: not shown on the page

**45.** Which sorting algorithm guarantees O(n log n) time complexity in the worst case?

- (a) Quick Sort
- (b) Bubble Sort
- (c) Merge Sort
- (d) nsertion Sort

> Key: not shown on the page

**46.** What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order?

- (a) Θ(n)
- (b) Θ(n log n)
- (c) Θ(n²)
- (d) Θ(1)

> Key: not shown on the page

**47.** Which one of the following is an application of Stack Data Structure?

- (a) Managing function calls
- (b) The stock span problem
- (c) Arithmetic expression evaluation
- (d) All of the above

> Key: not shown on the page

**48.** What is the best way to implement priority queue?

- (a) Array
- (b) Linked List
- (c) Heap
- (d) Stack

> Key: not shown on the page

**49.** Which device is needed to convert AC to DC?

- (a) Transformer
- (b) Rectifier
- (c) Inverter
- (d) Amplifier

> Key: not shown on the page
