# BAPEX Assistant General Manager (ICT) 20.01.2023 (BUET) continued — longest prefix match result, Q2 (XOR output function), Q3 (hire schema: ERD + SQL)

- **Source image:** `07_routing-and-erd-schema.jpg` (original file name `496462880_9767686656680231_3394198549542917852_n.jpg`)
- **Page:** 7 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** BAPEX — Assistant General Manager (ICT); Exam: 20.01.2023 (BUET)
- **Exam date:** 20.01.2023
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- The exam banner is on the previous page; this is a plain continuation page of the BAPEX Assistant General Manager (ICT) 20.01.2023 (BUET) paper.
- Q2's answer includes a logic-circuit figure (two inputs A, B through AND/OR/NOR gates into a NOR, with the labelled nets `AB`, `AB + Ā + B`, `A+B`, and output `F = AB + Ā + B̄`). The figure is described; it cannot be rendered in markdown.
- Q2's statement refers to "the input" without printing a figure or input combination on this page — the circuit figure on the page is the printed answer.
- The source prints the final output function twice in two notations (`Y = ĀB + AB̄` and `Y = A ⊕ B`); both are reproduced.
- The truth table header for the last column is printed as `AB + Ā + B̄` (only the final term visibly barred in the source).
- Q3's answer is not on this page; only the word "Answer:" is printed and the SQL continues onto the next page. The ERD figure is not present on this page.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

- For the IP address 172.168.165.121, the longest matching prefix is 172.168.164.0/23, which has a prefix length of 23 bits and covers the range of IP addresses from 172.168.164.0 to 172.168.165.255. Therefore, the outgoing interface is Interface 0.
- For the IP address 172.168.167.151, the longest matching prefix is 172.168.166.0/23, which has a prefix length of 23 bits and covers the range of IP addresses from 172.168.166.0 to 172.168.167.255. Therefore, the outgoing interface is Interface 1.
- For the IP address 172.168.163.151, the longest matching prefix is 172.168.168.0/23, which has a prefix length of 23 bits and covers the range of IP addresses from 172.168.168.0 to 172.168.169.255. Therefore, the outgoing interface is Interface 2.
- For the IP address 172.168.171.92, the longest matching prefix is 172.168.170.0/23, which has a prefix length of 23 bits and covers the range of IP addresses from 172.168.170.0 to 172.168.171.255. Therefore, the outgoing interface is Interface 3.
- For the IP address 0.0.0.0, there is a default route with a destination of 0.0.0.0/0 and a next-hop interface of Interface 4. Therefore, the outgoing interface is Interface 4. Note that the default route matches any IP address that does not match any other entry in the routing table.

**2. Write the function for which the output is 1 for that input.**

*[Figure: logic circuit with inputs A and B. A and B feed an AND gate (output labelled `AB`); A and B feed an OR gate (output labelled `A+B`) whose output passes through an inverter (output labelled `overline{A+B}`). Both labelled nets enter a NOR gate whose output bubble is inverted, with the intermediate node labelled `AB + Ā + B` and the final output labelled `F = AB + Ā + B̄`.]*

Output function from the figure–

F = overline(AB + Ā + B̄)

According to the condition the truth table is–

| A | B | AB | A+B | overline(A+B) | AB+Ā+B | overline(AB+Ā+B̄) |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 | 0 |

So, Output function according to condition

    Y = ĀB + AB̄
    Y = A ⊕ B

**3. Consider the Schema employee(id, name,salary), equipment(id, name, price), hire(employee_id, equipment_id)**
**(i) Draw the ERD digram for the relation**
**(ii) Write the SQL query to show the name of employee who borrow the maximum equipment?**

**Answer:**

[cut off — the SQL query continues on the next page; the ERD figure is not on this page]
