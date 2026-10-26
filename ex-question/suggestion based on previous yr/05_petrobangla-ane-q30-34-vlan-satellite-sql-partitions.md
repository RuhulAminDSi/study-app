# Bit to Exabyte — Petrobangla Assistant Networking Engineer (ANE): suggested questions, Q30–34

- **Source image:** `05_petrobangla-ane-q30-34-vlan-satellite-sql-partitions.jpg` (original file name `840642323_122143463193191819_351699776588948817_n.jpg`)
- **Page:** 5 of 10 (folder-wide position; the pages carry no printed page number)
- **Paper / Post:** Assistant Networking Engineer (ANE), Petrobangla, "AP" — **suggested questions** compiled by the coaching from previous years, not a single real paper
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- Publisher: **Bit to Exabyte** ("Your IT/CSE Job consultant"; running header "SUPER ICT 150++ QUESTIONS BOOK"). A faint logo watermark sits behind the text and hides nothing.
- No per-question exam tags are printed. These items count as "suggested for Petrobangla ANE", not as asked in a dated exam.
- Spelling and grammar are kept as printed; obvious typos are listed here, not corrected in the text.
- Q32 is the Kurose & Ross satellite problem (P-type textbook exercise).
- Q34: the partitions are fixed (10, 12, 18, 20 MB), so this is internal fragmentation.

## Content

30. What is VLAN? Write down the types of VLAN (static and dynamic). Also draw the VLAN.
31. Explain these terms and also mention the layer: Framing, Flow control, Error control, Reliability.
32. Suppose, there are a 10 Mbps microwave link between a geostationary satellite and its base station on Earth. Every minute the satellite takes a digital photo and sends it to the base station. Assume a propagation speed of $2.4 \times 10^8$ meters/sec.
    a. What is the propagation delay of the link?
    b. What is the bandwidth-delay product, $R \cdot d_{prop}$?
    c. Let $x$ denote the size of the photo. What is the minimum value of $x$ for the microwave link to be continuously transmitting?
33. Answer the following question based on the following table in DBMS.
    Actor (actor_id, name, age ...)
    Play (play_id, writer ...)
    Role (play_id, actor_id ...)
    i. Count the number of actors who plays role in the 3 or more time that is written by "Shakespeare".
    ii. Show the actor name who played the role that is written by "Chekhov" but never played roles that are written by "Shakespeare".
34. A multiprogramming operating system uses an apportioning scheme and divides the 60 MB of available memory into four partitions of 10 MB, 12 MB, 18 MB, and 20 MB. The first program to be run needs 17 MB and occupies the third partition. The second program needs 8 MB and occupies the first partition. The third program needs 10.5 MB and occupies the second partition. Finally, the fourth program needs 20 MB and occupies the fourth partition.
    1. What is the total memory unit?
    2. What is the total memory used?
    3. What is the total memory allocated?
    4. What is the total memory wasted?
    5. What percentage of memory is wasted?

## Subject map (for Phase 2)

| Q | Subject | Topic |
|---|---|---|
| 30 | NET | VLAN: static vs dynamic |
| 31 | NET | Framing, flow/error control, reliability and their layers |
| 32 | NET | Propagation delay, bandwidth-delay product (GEO satellite) |
| 33 | DBMS | SQL: GROUP BY/HAVING count; EXCEPT/NOT IN |
| 34 | OS | Fixed partitioning: internal fragmentation |
