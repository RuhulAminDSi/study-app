# BUET M.Sc. Admission Test (CSE), May 2016: 30 written questions (bit multiplication, heap sort, routing, PERT, Java/C++, discrete proofs, AI search, compiler, OS)

- **Source:** Scribd document 852677045 "M.Sc. CSE Admission Test Questions" (https://www.scribd.com/document/852677045/2016), uploaded by "1802-21Anik Biswas". Saved here as the public viewer fragments `page-*.jsonp` (the text layer Scribd serves to every visitor, no login) and the three figure images `img-*.jpg`; text extracted to `scribd-852677045.txt`.
- **Compiled by:** the Facebook group https://www.facebook.com/groups/msc.cse.buet (link printed in the footer). A candidate recollection typed after the test, not a scan of the official paper.
- **Pages:** 4
- **Document type:** exam paper (memory-based reconstruction)

## Transcription Notes

- Printed header: "BUET M.Sc. Admission Test Question (CSE) May -2016". Instructions as printed: answer each of 30 questions, 5 marks each, total time 1.30 hour.
- Q15 to Q24 are printed as bare topic phrases ("Kmap", "relational algebra", "cache math"...); the recollection gives no further detail, and they are kept as printed.
- Q5 figure (router network) is a hand drawing, transcribed as an edge list. Edges read: A-B 2, A-C 3, B-E 1, B-D 2, B-C 4, E-F 7, D-F 8, D-G 3, C-G 5, C-I 3, F-G 1, F-H 6, G-H 2, G-I 1, H-I 5, plus a D-C line whose weight is not legible. The F-G weight could also be read as 4.
- Q6 prints no figure of its own. The page-2 image holds a 4x4 adjacency matrix (for Q7) and a 6-node weighted graph captioned "Fig for Ques #1(d)" with a watermark of another site, evidently borrowed; its nodes A-F match the six-entry vectors of Q6, so it is placed with Q6.
- Q7 matrix is a 0/1 matrix although the question says "weighted graph"; kept as printed.
- Q8 table header "Department" is printed for what is clearly the dependency (predecessor) row; kept as printed.
- Typos kept: "exmaple", "pallindrome", "c++to", "c++using".
- **Duplicates:** the same paper is posted, with Q11 onward run together in one paragraph, at hackimpossible.com (folder `../2016-05-cse-hackimpossible/`, stub only). Three of its questions already sit in `bit to exabyte/` tagged "BUET M.Sc. May-2016"/"May 2016" (role of a linker, object instantiation count in Java, processor types for Python/C/C++/Java) and the weighted-graph question there is tagged "April 2017, May 2016". This is the first complete copy of the paper in `ex-question/`.

## Content

### BUET M.Sc. CSE May 2016

BUET, Department of CSE: M.Sc./M.Engg. admission test, May 2016 - **Exam taker: BUET** - 30 questions x 5 marks - Time: 1.30 hour - pages 1-4. Document type: exam paper (recollection).

**1.** *(5 marks)* Multiply the following two 2 digit numbers with only three 1 bit multiplication.

```text
  16
x 35
--------
  ??
```

> Note: "three 1 bit multiplication" points to the Karatsuba split (three single-digit products: 1x3, 6x5, (1+6)(3+5)); 16 x 35 = 560.

**2.** *(5 marks)* Implement max heap sort for the following numbers. 4, 3, 7, 1, 8, 5

**3.** *(5 marks)* Why Pentium is superscalar processor?

**4.** *(5 marks)* Write down advantages of microcontroller over microprocessor.

**5.** *(5 marks)* Consider the following network of routers where the numbers on the link indicate link cost. Find out the shortest path of all routers from router A.

*[Figure (img-1): routers A-I. Links: A-B 2, A-C 3, B-E 1, B-D 2, B-C 4, E-F 7, D-F 8, D-G 3, D-C (weight not legible), C-G 5, C-I 3, F-G 1, F-H 6, G-H 2, G-I 1, H-I 5.]*

**6.** *(5 marks)* Consider the subnet as shown below where distance vector routing is used and following vectors have just come to router C: from B(5, 0, 8, 12,6,2); from D(16, 12,6, 0,9, 10); and from E(7, 6, 3, 9, 0,4). The measured delays to B, D and E are 6,3 and 5, (10) respectively. What is C's new routing table?

*[Figure (img-2, lower half, captioned "Fig for Ques #1(d)"): nodes A-F. Links: A-B 4, A-E 5, B-C 6, B-F 4, C-E 5, C-D 3, D-F 7, E-F 8.]*

> Note: "(10)" after the delays is printed as is; it is probably the question's marks from the source the recollection copied. The vectors are the classic Tanenbaum example.

**7.** *(5 marks)* Draw a weighted graph using the following adjacency matrix.

|   | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 2 | 0 | 1 | 0 | 0 |
| 3 | 0 | 1 | 0 | 0 |

**8.** *(5 marks)* Draw a PERT chart from the following table. Find out the critical path & projected time.

| Tasks | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Duration | 5 | 15 | 20 | 10 | 25 | 15 | 30 | 10 | 5 | 15 | 10 | 35 |
| Department | | T1 | T1 | T2 | T3,T4 | T3 | T5 | T6,T7 | T8 | T8 | T9,T10 | T11 |

> Note: worked out: critical path T1-T2-T4-T5-T7-T8-T10-T11-T12, projected time 5+15+10+25+30+10+15+10+35 = 155.

**9.** *(5 marks)* Write down a method to find out how many times an object has been instantiated in java.

**10.** *(5 marks)* Write down a method in c++to reverse a char array. You are not permitted to use temp array and STL lib function.

**11.** *(5 marks)* Write down a program in c++using copy constructor to initialize its member variable from another object.

**12.** *(5 marks)* Write down a function that will check whether a year is leap year or not.

**13.** *(5 marks)* In any 6 numbers, show at least 2 of them having same remainder after dividing 5.

**14.** *(5 marks)* Prove the following lemma by contradiction:  
a^2+b^2=c^2,there exists only 1 case such that a,b,c are consecutive non negative integers(3,4,5).

**15.** *(5 marks)* verify list is sorted(procedure writing)

**16.** *(5 marks)* defect removal efficiency

**17.** *(5 marks)* AI local search,Global search(exmaple application of both)

**18.** *(5 marks)* AI A*, RBFS

**19.** *(5 marks)* 2*4 decoder using only basic gates(AND,OR,NOT)

**20.** *(5 marks)* Kmap

**21.** *(5 marks)* relational algebra

**22.** *(5 marks)* ERD(constraint)

**23.** *(5 marks)* CFG(odd length pallindrome)

**24.** *(5 marks)* cache math

**25.** *(5 marks)* Implement stack using single linked list.(Write down pseudo-code only)

**26.** *(5 marks)* Draw process state diagram for e-commerce application.

**27.** *(5 marks)* Explain binary semaphore with an example

**28.** *(5 marks)* Write down relationships in use case diagram. Describe any of them.

**29.** *(5 marks)* Write down role of a linker.

**30.** *(5 marks)* Define types of processor for the following language: python,c/c++,java

> Note: "types of processor" here means language processors (interpreter, compiler, compiler + JVM interpreter/JIT).
