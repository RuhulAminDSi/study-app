# Q9 (six processes, shortest job first) and BAPEX Assistant General Manager (ICT) 20.01.2023 (BUET) — Q1 (routing table, longest prefix match)

- **Source image:** `06_sjf-table-and-routing-table.jpg` (original file name `496005718_9767686453346918_2897771115057314578_n.jpg`)
- **Page:** 6 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** BAPEX — Assistant General Manager (ICT); Exam: 20.01.2023 (BUET)
- **Exam date:** 20.01.2023
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- Q9 at the top of the page belongs to the preceding paper, whose banner is not on this page; its organisation/post is not determinable from this image.
- Q9 has no printed answer on this page; the SJF requirement is stated as the final line of the question.
- The banner for the BAPEX paper is the only place a date is printed on this page ("Exam: 20.01.2023 (BUET)").
- The source prints the subnet mask as `255.255.254.0` for every entry of the routing table and prints "172.168" for the first two network rows. Both are reproduced exactly as printed.
- Q1's answer begins on this page and continues onto the next page.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

**9. Consider the following six processes each having its own unique processing time and arrival time.**

| Processes | Arrival time | Processing time |
|---|---|---|
| P1 | 0 | 8 |
| P2 | 0 | 4 |
| P3 | 0 | 5 |
| P4 | 1 | 9 |
| P5 | 1 | 7 |
| P6 | 0 | 1 |

Find average turnaround time using shortest job first scheduling algorithm.

---

**BAPEX**
**Assistant General Manager (ICT)**
**Exam: 20.01.2023 (BUET)**

**1. Consider the following routing table at an IP router:**

| Network | Subnet mask | Outgoing Interface |
|---|---|---|
| 172.168.164.0 | 255.255.254.0 | Interface 0 |
| 172.168.166.0 | 255.255.254.0 | Interface 1 |
| 172.168.168.0 | 255.255.254.0 | Interface 2 |
| 172.168.170.0 | 255.255.254.0 | Interface 3 |
| 0.0.0.0 | Default | Interface 4 |

For each IP address in Group: I indentify the correct choice of the outgoing from Group: II using the entries from the routing table above.

| Group: I | Group: II |
|---|---|
| 172.168.165.121 | Interface 0 |
| 172.168.167.151 | Interface 1 |
| 172.168.163.151 | Interface 2 |
| 172.168.171.92 | Interface 3 |
| 0.0.0.0 | Interface 4 |

**Answer:**

For each IP address in Group I, the correct outgoing interface from Group II can be determined using the longest prefix match algorithm. The IP address is compared with each network address in the routing table, and the one with the longest matching prefix is selected. If there are multiple matches with the same prefix length, the entry with the lowest metric (if available) is chosen.

Using this algorithm, we can determine the outgoing interfaces for each IP address in Group I as follows:

[cut off — answer continues on the next page]
