# BUET M.Sc. Admission Test (CSE), April 2024 session: 16 recalled written questions (overfitting, pumping lemma, DHCP attack, subnetting, unsigned compare, SQL group by, LL(1), loop detection, P/NP, XOR from decoder, A*)

- **Source:** "BUET MSC Admission Questions(April 2024)", https://hackimpossible.com/career/BUET-MSC-Admission-Questions-April-2024/ (saved as `page.html`, text in `page.txt`); first posted at https://mahamudhasan124.home.blog/2024/09/16/buet-msc-admission-questionsapril-2024/ (16 Sep 2024), "Courtesy and thanks to Khadija".
- **Second recollection (same exam):** "BUET CSE MSc. Question 2024", https://campus.engineerdiary.com/admission/buet-cse-msc-question-2024/ (folder `../2024-04-cse-campusconnect-recall/`, stub only; its extra details are folded into the notes below).
- **Pages:** 1 web page
- **Document type:** exam paper (memory-based reconstruction)

## Transcription Notes

- The post repeats the old instruction block "answer each of 30 questions, 5 marks each, 1.30 hour", which may be copied from earlier posts: the department's 2024-25 format (quoted in `../_reference/duranta/67a60c9b7952b.txt`) is a 50-question MCQ (50 marks, 50 min, -0.5 per wrong answer) followed by a 10-question written part (100 marks, 1 hour). Only the written questions are recalled. Marks are left blank here.
- The test date is not posted. Exam tag `BUET M.Sc. April 2024` (session).
- Campus Connect's list (two candidates' memories) adds detail: Q5 is "A code in bash using multiple for loops. Output was required"; Q6 is printed there as C (`unsigned int var = 10; If (var > -5) printf("yes"); else printf("No");`); Q7 is "A database table was given. Then some queries were written... find out several tuples"; Q10 is phrased as "snake or snail" (last node points to NULL = snake, to the first node = snail); Q12 asks "Probabilistic search and Heuristic search" in one version; Q4 asks for the subnet mask, broadcast address and number of subnets. It also lists one more item: "2 questions from Automata Language. One was to find the string. Another way to generate the parsing table, maybe" (the parsing-table half is Q9), and "A question was DHCP-related" (Q3).
- Q9 "A ->∞" is printed as is; it stands for A -> α (the poster typed infinity for alpha). Q11 is garbled in the recollection; kept as posted.
- **Duplicates:** an AI-paraphrased copy is in the GitHub repo golammostafa13/buet-msc-cse-questions (`April_2024.md`), not saved. Nothing from 2024 BUET M.Sc. is in `ex-question/` yet.

## Content

### BUET M.Sc. CSE April 2024

BUET, Department of CSE: M.Sc./M.Engg. admission test, April 2024 session - **Exam taker: BUET** - written part as recalled (16 questions). Document type: exam paper (recollection).

**1.** What is over fitting? How to avoid it?

**2.** Why pumping lemma is only used for negative proofing?

**3.** How DHCP attack works

**4.** Networking question: Derive subnet, host range, network ip

**5.** Scripting code, output derive (Quick sort)

**6.** Output: Unsign int i = 10; if(i>-1) cout <<“Yes”; else cout<<“No”;

> Note: -1 is converted to UINT_MAX in the comparison, so the output is "No" (same for the Campus Connect version with -5).

**7.** DBMS Query: Number of topic select count(*) group by name 4 more queries

**8.** What is functional Interface in java.example?

**9.** Predictive parsing cell entry in A ->∞ and A->∈. Describe it in terms of First and Follow.

**10.** Algorithm for checking loop in singly linked list

**11.** Explain length of 1st Run and 2nd Run with 1 with probability with P and O with probability Q.

**12.** Define P and NP classes. Differentiate between approximation and heuristic algorithm.

**13.** Build XOR with 2 to 4 decoder and NOR gate

**14.** Strategy pattern has 3 algorithm and they are: insertion sort, selection sort and quick sort. Describe something about the system.

**15.** Why is A* optimal? Give condition when it is optimal.

**16.** Main reason of failure in SW project.
