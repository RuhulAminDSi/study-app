# SQL for the hire schema, Q4 (identify MD5 / AES / RSA / Diffie-Hellman), Q5 (BFS and DFS for a binary tree)

- **Source image:** `09_crypto-algorithms-and-bfs-dfs.jpg` (original file name `496844228_9767686653346898_7296981189530948827_n.jpg`)
- **Page:** 9 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** not shown (no exam banner on this page; Q3's SQL continues from the previous page)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- No exam banner appears anywhere on this page. The questions continue the BAPEX Assistant General Manager (ICT) paper started on page 6, but that banner is not repeated here.
- The page opens mid-`SELECT` statement — the SQL answer to Q3 (hire schema, employee who borrowed the maximum equipment) whose question text is on the previous page.
- Q5's answer includes a binary-tree figure: root `1`, left child `2`, right child `3`, and `2` having left child `4` and right child `5`. The figure is described; the printed answer line below gives only the Breadth First Traversal.
- Q5's answer is cut off by the bottom of the page after the Breadth First Traversal line — the Depth First Traversal line and any further text continue onto the next page. The traversal variants printed on this page are reproduced verbatim.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

```sql
    SELECT e.name
    FROM employee e
    JOIN hire h ON e.id = h.emp_id
    JOIN (
        SELECT eqp_id, COUNT(*) AS num_borrowed
        FROM hire
        GROUP BY eqp_id
        ORDER BY num_borrowed DESC
        LIMIT 1
    ) AS max_equip ON h.eqp_id = max_equip.eqp_id
```

**4. Identify the type of algorithm? (i) MD5 (ii) AES (iii) RSA (iv) Diffie-Hellman**

**Answer:**

The given names are cryptographic algorithms used for different purposes:

**(i) MD5 (Message Digest 5)** is a cryptographic hash function, which is used to produce a fixed-size, unique hash value from a variable-length input message. It is commonly used for data integrity checks to verify if the data has been altered in transit.

**(ii) AES (Advanced Encryption Standard)** is a symmetric encryption algorithm, which is used to encrypt and decrypt data. It is a widely used encryption standard, and its security is considered strong when used properly.

**(iii) RSA (Rivest-Shamir-Adleman)** is an asymmetric encryption algorithm, which uses a pair of keys (public and private) to encrypt and decrypt data. It is commonly used for secure data transmission and digital signatures.

**(iv) Diffie-Hellman** is a key exchange algorithm, which is used to establish a shared secret between two parties over an insecure communication channel. It enables the two parties to negotiate a shared secret key that can be used for symmetric encryption.

Therefore, (i) MD5 is a hash algorithm, (ii) AES is a symmetric key encryption algorithm, (iii) RSA is an asymmetric key encryption algorithm, and (iv) Diffie-Hellman is a key exchange algorithm.

**5. What are BFS and DFS for Binary Tree?**

*[Figure: binary tree — root node `1`; left child `2` and right child `3`; node `2` has left child `4` and right child `5`.]*

**Answer:**

Breadth First Traversal: 1 2 3 4 5 or 1 2 3 5 4 or 1 3 2 4 5 or 1 3 2 5 4

[cut off — the Depth First Traversal line continues on the next page]
