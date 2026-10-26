# Bit to Exabyte — Petrobangla Assistant Networking Engineer (ANE): suggested questions, Q24–29

- **Source image:** `04_petrobangla-ane-q24-29-subnet-ipclass-sql-server.jpg` (original file name `843764867_122143463151191819_5407311886950682385_n.jpg`)
- **Page:** 4 of 10 (folder-wide position; the pages carry no printed page number)
- **Paper / Post:** Assistant Networking Engineer (ANE), Petrobangla, "AP" — **suggested questions** compiled by the coaching from previous years, not a single real paper
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"). A faint logo watermark sits behind the text and hides nothing.
- No per-question exam tags are printed. These items count as "suggested for Petrobangla ANE", not as asked in a dated exam.
- Spelling and grammar are kept as printed; obvious typos are listed here, not corrected in the text.
- Q25 table is empty in the source (to be filled by the candidate).
- Q28: `HAVING COUNT ( )>2` is printed with nothing inside the parentheses.
- Typos kept: "Descuss", "serve longevity" (server).

## Content

24. What do you mean by subnet and subnet Mask? The network address of 172.10.0.0/19 provides how many subnets and hosts? What is the function of OSPF?
25. Class A IP Range is 1-126. Why not 0 and 127? Convert the decimal IP address 192.18.101.5 into binary IP address. Fill-up the following in tabular form:

    | Address Class | First Octet Decimal range | Example of IP address | Network ID | Host ID |
    |---|---|---|---|---|
    | Class-A | | | | |
    | Class-B | | | | |
    | Class-C | | | | |

26. In the context of data management, what are the primary difference between data replication and data backup? Provide real-world example of when each is employed effectively.
27. What are the key hardware components that makes up a typical server, and how do they contributes to its overall performance and functionality?
28. Analyze the output of the following SQL.

```sql
Select department_name, AVG(salary) As average_salary
From employee e
JOIN department d ON e.department_id = d.department_id
where salary> (SELECT AVG(salary) FROM employee where department_id = d.department_id)
GROUP BY department_name
HAVING COUNT ( )>2
ORDER BY average_salary DESC;
```

29. Descuss server maintenance best practices, including routine tasks like clearing, monitoring, and applying security patches. How do these practices contributes to serve longevity and performance?

## Subject map (for Phase 2)

| Q | Subject | Topic |
|---|---|---|
| 24 | NET | Subnet mask; /19 subnets and hosts; OSPF |
| 25 | NET | Classful addressing; 0 and 127 reserved; IP to binary |
| 26 | DBMS | Replication vs backup |
| 27 | ICS | Server hardware components |
| 28 | DBMS | SQL output: correlated subquery + GROUP BY/HAVING |
| 29 | ICS | Server maintenance best practices |
