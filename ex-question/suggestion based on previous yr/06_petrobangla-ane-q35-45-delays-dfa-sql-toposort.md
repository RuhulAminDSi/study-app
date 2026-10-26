# Bit to Exabyte — Petrobangla Assistant Networking Engineer (ANE): suggested questions, Q35–45

- **Source image:** `06_petrobangla-ane-q35-45-delays-dfa-sql-toposort.jpg` (original file name `842473310_122143463235191819_3318639327876549287_n.jpg`)
- **Page:** 6 of 10 (folder-wide position; the pages carry no printed page number)
- **Paper / Post:** Assistant Networking Engineer (ANE), Petrobangla, "AP" — **suggested questions** compiled by the coaching from previous years, not a single real paper
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"). A faint logo watermark sits behind the text and hides nothing.
- No per-question exam tags are printed. These items count as "suggested for Petrobangla ANE", not as asked in a dated exam.
- Spelling and grammar are kept as printed; obvious typos are listed here, not corrected in the text.
- Q35 is the Kurose & Ross P6 delay problem.
- Q40 lists the schema; Q41–Q44 are its sub-questions, numbered as separate questions in the source.
- Q45 is marked "(unable to collect question)" in the source.
- Q39 wording as printed: "binary strings having 0 with multiple of 3" (number of 0s divisible by 3).

## Content

35. Consider two hosts, A and B, connected by a single link of rate R bps. Suppose that the two hosts are separated by m meters, and suppose the propagation speed along the link is s meters/sec. Host A is to send a packet of size L bits to Host B.
    a. Express the propagation delay, $d_{prop}$, in terms of m and s.
    b. Determine the transmission time of the packet, $d_{trans}$, in terms of L and R.
    c. Suppose Host A begins to transmit the packet at time $t = 0$. At time $t = d_{trans}$, where is the last bit of the packet?
    d. Suppose $d_{prop}$ is greater than $d_{trans}$. At time $t = d_{trans}$, where is the first bit of the packet?
    e. Suppose, $s = 2.5 \times 10^8$ m/s, and $L = 120$ bits, and $R = 56$ kbps. Find the distance m so that $d_{prop}$ equals $d_{trans}$.
36. What is Web Caching? Why it is important?
37. Write a pseudocode or a program using any high-level language to find the common elements between two arrays and count those common elements.
38. Two Systems 500 Km apart are communicating through a direct Metallic cable (note: signal speed is $2 \times 10^8$ m/s). The data is in the form of 64 KB packets with transmission rate 1M bps. Calculate the data transmission time per packet, propagation delay and latency in the cable between the sender and receiver.
39. State diagram of DFA using binary strings having 0 with multiple of 3.
40. Write SQL command from the following tables -
    i. Employee (ename, street, city)
    ii. Works (ename, cname, salary, joindate)
    iii. Company (cname, city)
    iv. Manager (ename, mname)
41. Find name, street, city who work for First Corporation Bank and earn more than 30000
42. Find name of all employees, who live in the same city and company for which they works.
43. Give all employees of First Century Bank 10 percent salary raise
44. Find the company with payroll less than 100000
45. C/C++ Program for topological sorting of DAG in a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. *(unable to collect question)*

## Subject map (for Phase 2)

| Q | Subject | Topic |
|---|---|---|
| 35 | NET | Propagation vs transmission delay |
| 36 | NET | Web caching |
| 37 | DSA | Common elements of two arrays |
| 38 | NET | Transmission time, propagation delay, latency |
| 39 | TOC | DFA: number of 0s divisible by 3 |
| 40–44 | DBMS | SQL on Employee/Works/Company/Manager (join, UPDATE, GROUP BY HAVING SUM) |
| 45 | GRAPH | Topological sort of a DAG |
