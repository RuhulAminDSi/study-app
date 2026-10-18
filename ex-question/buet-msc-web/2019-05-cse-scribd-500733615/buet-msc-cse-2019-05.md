# BUET M.Sc. Admission Test (CSE), May 2019 (April 2019 session, test 21 May 2019): 27 recalled questions (NAND/NOR, Java strings, Bellman-Ford, assembly push/pop, SQL update/trigger, NFA, UML, IDDFS, P/NP, subnetting, pigeonhole)

- **Source:** Scribd document 500733615 "CSE BUET - 2019" (https://www.scribd.com/document/500733615/CSE-BUET-2019). Saved as the public viewer fragments `page-*.jsonp`; raw text in `scribd-500733615.raw.txt`, decoded text in `scribd-500733615.txt` (see notes).
- **Compiled by:** the Facebook group https://www.facebook.com/groups/msc.cse.buet (link printed in the footer). A candidate recollection, not a scan. The same list is also posted as "Buet M.Sc Admission Test(May 2019)" at https://hackimpossible.com/career/buet-msc-admission-test-qeustion/ (folder `../2019-05-cse-hackimpossible/`, stub only).
- **Pages:** 2
- **Document type:** exam paper (memory-based reconstruction)

## Transcription Notes

- The Scribd text layer uses a font with a scrambled character map (e.g. "DWGZ @.Sc." for "BUET M.Sc."). It was decoded with a fixed one-to-one character table derived from the header and checked letter by letter against the HackImpossible copy; the two agree word for word except where noted. No OCR was used.
- Printed header: "BUET M.Sc. Admission Test Question (CSE) May -2019", answer each of 30 questions, 5 marks each, total time 1.30 hour. Only 27 questions are recalled.
- Date: the CSE department's official schedule for the April 2019 session (`../_reference/cse/april2019_*.pdf`) puts the written admission test on 21/05/2019 at 10:00 am.
- Q1(b): Scribd reads "Use the minimum NOT gate", HackImpossible reads "minimum NOR gate". NOR is the likely intent (pairing with NAND in (a)); both readings are shown.
- Q3 code kept as recalled, including the unbalanced parenthesis in `print(s.compareTo(ss);` and the repeated `print(s==sp)`.
- Q16 and Q22 end with an opening bracket and nothing after it; the poster did not recall the code / the remaining sub-questions. Q26 and Q27 are in Banglish ("deya chilo" = was given, "ekta question chilo" = there was a question); kept as printed.
- Q20 "neq" is printed as is (probably `bne`).
- **Duplicates:** an AI-paraphrased copy is in the GitHub repo golammostafa13/buet-msc-cse-questions (`April_2019.md`), not saved. In `ex-question/` the tags "BUET M.Sc. 2019" (cache-bit split, in `bit to exabyte/53_*`) and "BUET M.Sc. October 2019" (software maintenance life cycle, unit/acceptance testing) exist. The October 2019 items match Q13/Q14 here in topic; they may be the same paper mislabelled, or a later paper repeating the topics. Not merged.

## Content

### BUET M.Sc. CSE May 2019

BUET, Department of CSE: M.Sc./M.Engg. admission test, May 2019 (April 2019 session; held 21/05/2019 per the official schedule) - **Exam taker: BUET** - 30 questions x 5 marks - Time: 1.30 hour - pages 1-2. Document type: exam paper (recollection, 27 of 30 questions).

**1.** *(5 marks)* F1=A+B and F2=AB. (a) Use the minimum NAND gate for F1 and F2 and (b) Use the minimum NOT gate for F1 and F2.

> Note: HackImpossible copy reads (b) "Use the minimum NOR gate for F1 and F2".

**2.** *(5 marks)* For a graph representation where vertices are 100 edges are more than 300 which will be preferred?

**3.** *(5 marks)* java code find output.

```java
[ public static void main(string args[]) { String s = new
String(“hello”);String ss = “hello”;String sp= “hello”;print(s.compareTo(ss);
print(s==ss);print(s==sp);print(s==sp)}]
```

> Note: with the obvious fixes: compareTo gives 0, s==ss false (new object), s==sp false; ss==sp would be true (interned literals).

**4.** *(5 marks)* Bellman-Ford Algorithm with negative weight...

**5.** *(5 marks)* Enqueue and Dequeue using single linked list in O(1) time.

**6.** *(5 marks)* Write assembly code for Push and Pop using given instructions [ mov a,b add a,b add a,k].

**7.** *(5 marks)* Creating object of Inner class.

**8.** *(5 marks)* Update sql. Update the price i) rise cost by 10% when cost <500 ; i) less cost by 10% when cost>1000

> Note: the second "i)" is printed as is (meant "ii)").

**9.** *(5 marks)* Fill in the gaps with Trigger sql.

**10.** *(5 marks)* Construct NFA that accepts binary strings having odd number of 1's or even number of 0's.

**11.** *(5 marks)* Class diagram of an online shopping website.

**12.** *(5 marks)* State diagram for the above website.

**13.** *(5 marks)* Software Maintenance life cycle.

**14.** *(5 marks)* software testing [ unit test, acceptance test,... ]

**15.** *(5 marks)* Draw a state space explaining when IDDFS performs worse than DFS.

**16.** *(5 marks)* Given a C code using pointers. Explain if there is any problem with this code. If not then what is the output. [

**17.** *(5 marks)* Draw relationship diagram for P, NP, NP hard and Np complete.

**18.** *(5 marks)* Write a function to reverse a string without using global variable.

**19.** *(5 marks)* Elimination of left recursion.

**20.** *(5 marks)* Given an assembly code, what is its limitations? [beq a,b,c neq x,y,z]

**21.** *(5 marks)* Given a Java code using strings, what is the output?

**22.** *(5 marks)* 5 short questions of 1 mark each from networking.[1) which topology will be if each devices connected with each other 2) ]

**23.** *(5 marks)* Given a network address and 512 subnets needed. What should be the subnet mask?

**24.** *(5 marks)* Compute the sum of palindrome numbers between 100 and 999( like, 101, 313 etc.).

> Note: worked out: 90 palindromes aba, sum = sum over a=1..9, b=0..9 of (101a + 10b) = 101*45*10 + 10*45*9 = 45450 + 4050 = 49500.

**25.** *(5 marks)* Pigeonhole problem ( An auditorium has a seating capacity of 800. How many seats must be occupied to guarantee that at least two people seated in the auditorium have the same first and last initials? )

> Note: 26 x 26 = 676 initial pairs, so 677 seats.

**26.** *(5 marks)* Page size 4KB deya chilo, memory calculation related ekta question chilo.

**27.** *(5 marks)* Bank memory related ekta question chilo.
