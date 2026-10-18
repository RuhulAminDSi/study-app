# BUET CSE M.Sc. Admission Test, April 2021 (online, 24 June 2021): 100 MCQs in four Google-Form parts (C/Java/C++, DSA, discrete maths, TOC/compilers, DBMS, networks, 8086, cache/CPI, OS, AI/ML, security, graphics, communication)

- **Source:** four PDFs (`cse-2021-part1.pdf` ... `part4.pdf`), printouts of the Google Forms "BUET CSE MSc Admission Test, April 2021 Part n of 4" dated 6/24/2021, shared on public Google Drive links from the ITJobExam post "BUET MSc engg in Computer Science and Engineering Online Exam 2021 Question with Solution - 100 MCQ time 1 hour", https://www.itjobexam.com/2021/06/buet-msc-in-cse-online-exam-2021-question-with-solution.html (site now dead; post saved from the Internet Archive snapshot of 5 July 2022 as `itjobexam-post.html`). Drive files: https://drive.google.com/file/d/17JoG3b7JMyYgVP_McmldlHNS8PabWvuK , https://drive.google.com/file/d/1CPIaT_itulYvpLunilZkHCKxN_FcD66v , https://drive.google.com/file/d/1AszvAnq0xZxUfW8c7NETF90tehBrvzIJ , https://drive.google.com/file/d/12yyGzxt_gvYYncHacA4dy1of0aZFz_J7 .
- **Origin:** the forms footer reads "This form was created inside of Department of Computer Science and Engineering, BUET". These are screen prints of the real exam forms, so the question text is the official wording.
- **Pages:** 46 (13 + 9 + 12 + 12)
- **Document type:** exam paper

## Transcription Notes

- Format from the post and the official notice (`../_reference/cse/april2021_*.pdf`): online, open-book MCQ test on Zoom + Google Forms, 24 June 2021, camera on; 100 MCQs in four 25-question forms, 1 hour in total. Marks per question are not printed.
- The printouts carry one examinee's radio-button selections. They are **not** an answer key (several are plainly wrong, e.g. "n logn < log logn", "ArrayList<String> list = new List<>();"), so they are not reproduced. No printed solutions exist; the ITJobExam post promised them but never added them.
- The PDF text layer lists each page's options before its questions; questions were paired with their options by reading the page renders. Code snippets, tables and diagrams are images in the forms; code and tables are transcribed from the renders, diagrams are described in brackets. Two figures are only described: the four trees in P1-Q14 and the differential-Manchester waveform in P4-Q14.
- Questions have no printed numbers; they are numbered here P<part>-Q<n> in form order.
- Typos kept as printed: "0 .75", "0 .25" (P1-Q1), "a problems" (P1-Q19), "upazilla" (P1-Q18), "a letter following by" (P2-Q8), "How faster it is" (P3-Q14).
- P1-Q24 (struct passed by value): the hint "arrays are passed using call by reference" is a distractor; see the note there.
- Subjects: computer-graphics items (reflection, rotation, shear, orthographic projection, plane equation) are tagged ICS; ML items AI; line coding, Nyquist and delta modulation COM.
- **Duplicates:** Part 2 is also on Scribd as document 653947109 "BUET CSE MSc Admission Test Questions" (https://www.scribd.com/document/653947109/part-2), the same printout; not saved. Nothing from the 2021 CSE test is in `ex-question/` yet.

## Content

### BUET M.Sc. CSE April 2021 online MCQ (24 June 2021)

BUET, Department of CSE: M.Sc./M.Engg. admission test, April 2021 session, held online 24 June 2021 - **Exam taker: BUET** - 100 MCQs (4 x 25) - Time: 1 hour, open book. Document type: exam paper.

#### Part 1 of 4 (25 MCQs) - `cse-2021-part1.pdf`

**P1-Q1.** We call an integer a central element of a set of integers if at least a quarter of the elements are smaller than it and at least a quarter of the elements are larger than it. If you choose an element randomly then what is the probability of choosing a central element?

- (a) 0.5
- (b) 0 .75
- (c) 0.9
- (d) 0 .25

**P1-Q2.** Which of the following is true for X, Y, and Z for the Java statement "public class G<A extends X & Y & Z>" regarding generics?

- (a) X and Y are Java classes, and Z is Java interface
- (b) X and Y are Java interfaces, and Z is Java class
- (c) X, Y, and Z are all Java interfaces
- (d) X, Y, and Z are all Java classes

**P1-Q3.** In the below code snippet, what is the value of x right before the return statement?

```c
int main()
{
    int x = 5, y = 10;
    int *p;

    p = &x;
    y = *p;
    y++;
    return 0;
}
```

- (a) 10
- (b) 11
- (c) 6
- (d) 5

**P1-Q4.** The length of a Huffman code for the message "effervescence" is

- (a) 39 bits
- (b) 104 bits
- (c) 33 bits
- (d) None of the above

**P1-Q5.** Consider a binary max-heap implemented using an array. Which one of the following arrays represents a binary max-heap?

- (a) 25,14,16,13,10,8,12
- (b) 25,14,13,16,10,8,12
- (c) 25,12,16,13,10,8,14
- (d) 25,13,16,14,8,10,12

**P1-Q6.** In how many ways Rafiq can select nine story books from a pool of 12 books where three are fictions, three are novels, three are comics and three are thrillers?

- (a) 20
- (b) 224
- (c) 24
- (d) 220

**P1-Q7.** A class called “X” has the following operator overloading functions: 1) X operator*(X temp); 2) X operator*(int num); 3) X operator+(X temp); Let, ob1, ob2 and ob3 are three objects of “X”. Now which of the following statements will compile correctly for the given set of operator functions?

- (a) ob1 = ob2 + 2*ob3;
- (b) ob1 = ob2*2 + ob3;
- (c) ob1 = (ob2 + 2) *ob3;
- (d) None of the above

**P1-Q8.** You are given the following complete binary tree. The children of the node with index k are in 2k and 2k + 1. You store the node in an array by traversing the nodes using breadth-first tree. If the index of the array starts from 1, what will be the index of children of node 5.

*[Figure: complete binary tree, level order: 3 / 9, 5 / 14, 10, 6, 8 / 17, 15, 13, 23, 12.]*

- (a) 2, 3
- (b) 6, 7
- (c) 8, 9
- (d) 4, 5

**P1-Q9.** You are performing a depth-first traversal in a graph, where for a vertex v, d[v] is the discovery time, and f[v] is the finishing time. Now, which of the following statement is false.

- (a) d[u] < d[v] < f[u] < f[v]
- (b) d[u] < f[u] < d[v] < f[v]
- (c) d[v] < f[v] < d[u] < f[u]
- (d) None of the above

**P1-Q10.** Rashida wanted to invite her friends to her birthday and she was born in April. In a leap year she started sending invitation from February 16 and completed by March 15. At least one invitation was sent each day but no more than 50 invitations in total. Therefore, there has been a specific consecutive of days where exactly N invitations had to be sent. What is the value of N?

- (a) 8
- (b) 7
- (c) 29
- (d) 2

**P1-Q11.** Let p be a pointer to float that is pointing to the first element of an array of floats. Let the value of p be 0x002a32e4. What is the value of &p[5] ?

- (a) 0x002a32e9
- (b) 0x002a3304
- (c) 0x002a32f8
- (d) None of the above

**P1-Q12.** The * represents a cryptographic operation where a symbol can be mapped to a different symbol. The following table represents the operation where the symbol set S is {A, B, C, D, E, F}. For the following table the inverse of E is-

| * | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | A | B | C | D | E | F |
| B | B | A | E | F | C | D |
| C | C | F | A | E | D | B |
| D | D | E | F | A | B | C |
| E | E | D | B | C | F | A |
| F | F | C | D | B | A | E |

- (a) F
- (b) A
- (c) E
- (d) C

**P1-Q13.** Considering the following definition of the function, named “bitwise”, what will be returned when we call bitwise(2147483649)?

```c
unsigned int bitwise(unsigned int x)
{
    int n = sizeof(x) * 8;
    int i, j;
    unsigned int mask1 = 1;
    unsigned int mask2 = 1<<31;

    while (mask1 < mask2)
    {
        int i = ((x & mask1) != 0);
        int j = ((x & mask2) != 0);

        if (i^j != 0)
        {
            x = ((x ^ mask1) ^ mask2);
        }

        mask1 <<= 1;
        mask2 >>= 1;
    }

    return x;
}
```

- (a) 0
- (b) 2147483647
- (c) 4294967295
- (d) 2147483649

**P1-Q14.** Given the following trees, which of the following is true ?

*[Figure: four trees (i)-(iv) drawn on the same keys (3, 15, 22, 23, 29, 40, 42, 46, 50, 57, 59, 65, 73, 88, 91): (i) a balanced tree rooted at 46; (ii) a tree rooted at 3 whose only child is 50; (iii) a tree rooted at 29; (iv) a chain 3 - 15 - 22 - 23 - 29 - 40 - 42 - 46 - 50 - 57 - 59 - 65 - 73 - 88 - 91, each node the right child of the previous. Every node in all four has at most two children.]*

- (a) (iv) is not a binary tree
- (b) (i), (ii), (iii) are binary trees, whereas, (iv) is not a binary tree
- (c) (i), (ii), (iii), and (iv) are binary trees
- (d) None of the above

**P1-Q15.** Let A be a 30 × 35 matrix, B be a 35 × 15 matrix and C is a 15 × 5 matrix. Then the minimum number of scalar multiplications for the matrix-chain-multiplication ABC is

- (a) 7875
- (b) 5250
- (c) 4375
- (d) None of the above

**P1-Q16.** If there is chance of rain or the raincoat is missing then Pathao driver Shafiq will not go for the service. If the sun is shining more there is no chance for rain. Today there is sunshine and Shafiq is wearing raincoat. Which is correct?

- (a) “Shafiq is going out for the service” -is a valid statement.
- (b) “Shafiq is not going out for the service” -is an invalid statement.
- (c) “Shafiq is going out for the service” -is an invalid statement.
- (d) None of the above

**P1-Q17.** Which of the following statements can fix the compiler error in the following Java code?

```java
interface Alpha {
   default void reset () {
   }
}

interface Beta {
   default void reset () {
   }
}

class Gamma implements Beta, Alpha {

}
```

- (a) There is no error in the above code
- (b) interface Beta extends Alpha
- (c) class Gamma extends Alpha implements Beta
- (d) class Gamma implements Alpha, Beta

**P1-Q18.** An upazilla map represents N villages which is actually a planar graph. The 8 vertices of that graph have degrees 4, 3, 4, 3, 3, 3, 3, 3. How many villages can be in that upazilla?

- (a) 8
- (b) 4
- (c) 6
- (d) 3

**P1-Q19.** Algorithm A solves a problems of size n by dividing it into seven subproblems of size n/2 each, recursively solving each subproblems, and then combining the solutions in O(n^2) time. Then the time complexity of the algorithm is closer to

- (a) O(n^2.64)
- (b) O(n^2.81)
- (c) O(n logn)
- (d) None of the above

**P1-Q20.** Let G = (V,E) be a graph where V={a,b,c,d,e,f,g,h,i,j,k}. If S={a,c,g,h,k} is a maximum independent set in G then a minimum vertex cover can have

- (a) less than 5 vertices
- (b) more than 5 vertices
- (c) more than 6 vertices
- (d) None of the above

**P1-Q21.** What will be the output of the following code snippet?

```c
int calc(int x)
{
    if (x >= 50) x = 50;
    else if (x <= 20) x = 20;
    else x = 35;
    return 2*x;
}
int main()
{
    int y = 25, z = 35;

    z = calc(y);
    printf("y = %d, z = %d\n", y, z);
    return 0;
}
```

- (a) y = 35, z = 35
- (b) y = 25, z = 35
- (c) y = 25, z = 70
- (d) y = 35, z = 70

**P1-Q22.** Which one of the following option is a valid C++ constructor for class B?

```cpp
class A {
private:
    int a;
public:
    A (int a) {
        this->a = a;
    }
};

class B: A {
private:
    int b;
public:

};
```

- (a) B (int a, int b): A(a), b(b) { }
- (b) B (int a, int b) { super(a); this->b=b; }
- (c) B (int a, int b): A(a), this->b(b) { }
- (d) None of the above

**P1-Q23.** In the below code snippet, assume that the layout of structure does not have any padding, i.e. you can calculate its size by summing over the size of its fields. If a variable of type S is passed to a function, how much data will be copied? Recall that arrays are passed using call by reference convention.

```c
typedef struct {
    int roll;
    char name[28];
    double cgpa;
} S;
```

- (a) 12
- (b) 40
- (c) 36
- (d) 16

> Note: a struct is copied whole when passed by value (the array decay rule does not apply to an array inside a struct): 4 + 28 + 8 = 40 bytes.

**P1-Q24.** Which of the following is true for a group of growth functions?

- (a) n<logn
- (b) 2^n > n^100
- (c) n! < n^100
- (d) n logn < log logn

**P1-Q25.** Which of the following is a valid declaration of an ArrayList of String in Java?

- (a) List<String> list = new ArrayList<>();
- (b) List<> list = new ArrayList<String>();
- (c) List<String> list = new List<>();
- (d) ArrayList<String> list = new List<>();

#### Part 2 of 4 (25 MCQs) - `cse-2021-part2.pdf`

**P2-Q1.** What language does the following deterministic finite automaton (DFA) accept?

*[Figure: Start -> q0 (self-loop on 1); q0 --0--> q2 (self-loop on 0); q2 --1--> q1 (accepting, self-loop on 0, 1).]*

- (a) The set of all binary strings that start with a 1
- (b) The set of all binary strings with equal number of 0s and 1s
- (c) The set of all binary strings with a 01 substring
- (d) All of the above

**P2-Q2.** There are two relations student (id, name, CGPA) and takes(id, course-id, semester) . The student relation has 5 tuples and takes relation has 15 tuples. How many tuples will be the output for the SQL: SELECT * FROM student, takes?

- (a) 5+15
- (b) 5
- (c) 15
- (d) 5*15

**P2-Q3.** Which one of the following is not included in ACID property of transaction?

- (a) Isolation
- (b) Concurrency
- (c) Durability
- (d) Atomicity

**P2-Q4.** The value of ‘n’ of a B+ tree index is 100. What will be the maximum record pointers for a leaf node?

- (a) 98
- (b) 50
- (c) 100
- (d) 99

**P2-Q5.** In the mobile phones we are using today, users from both sides in a live call can talk simultaneously. Sometimes the simultaneous talking causes noise in conversation. Therefore, let, a new mobile phone is designed where a user cannot talk while another user is talking, i.e., a user cannot transmit own speech while listening the other user talking. This simple one-way data transmission can though be initiated from any of the sides of the two users in a call. How can we term this mode of data transmission in the newly designed mobile phone?

- (a) Simplex
- (b) Half-duplex
- (c) Full-duplex
- (d) None of the above

**P2-Q6.** Which one of the following is (are) not true?  
(i) A basic block is a sequence of instructions where control enters the sequence at the beginning and exits at the end.  
(ii) Expression analysis can be used for common subexpression elimination.  
(iii) Live variable analysis can be used for dead code elimination.

- (a) (i) and (ii)
- (b) (i) and (iii)
- (c) (i), (ii) and (iii)
- (d) None of the above

**P2-Q7.** Which of the following context-free grammars (CFG) generates all palindromes over the binary alphabet of length at least one?

- (a) P → 1P1 | 0P0 | 00 | 11 | 0 | 1
- (b) P → 1P1 | 0P0 | 0 | 1
- (c) P → 1P1 | 0P0 | 00 | 11 | ε
- (d) P → 1P1 | 0P0 | 0 | 1 | ε

**P2-Q8.** In certain programming languages, an identifier consists of a letter following by any number of letters or digits. If L and D denote the sets of letters and digits respectively, which of the following expressions correctly defines an identifier?

- (a) L(L.D)*
- (b) (L.D)*
- (c) L(L ∪ D)*
- (d) (L ∪ D)⁺

**P2-Q9.** There are 6 disks of 2TB each in a storage system. What will be the effective storage capacity using RAID 1 storage system?

- (a) 12 TB
- (b) 6 TB
- (c) 10 TB
- (d) None of the above

**P2-Q10.** In a database management system we can use sequence number for identification of rows in table. What will be the best software engineering pattern when multiple users want to generate sequence numbers?

- (a) Adapter
- (b) Observer
- (c) Factory
- (d) Singleton

**P2-Q11.** DNS (Domain Name System) is a kind of phonebook of the Internet, which connects web browsers with websites. In case of DNS, which of the following is false?

- (a) Using TCP for DNS could involve several TCP connections to be established, as several name servers may need to be contacted to translate a name. This results in a high overhead in delay that is not acceptable for DNS queries and responses.
- (b) UDP involves a smaller packet size imposing a smaller load on name servers due to its simplicity. Therefore, UDP is used for DNS.
- (c) Both of the above
- (d) None of the above

**P2-Q12.** In socket programming, which of the following is only applicable to the Client side of a Server-Client network paradigm?

- (a) int sockfd = socket(domain, type, protocol);
- (b) int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
- (c) int listen(int sockfd, int backlog);
- (d) None of the above

**P2-Q13.** If a router port has an IP address 192.168.2.1/23, which of the following can be valid host IDs on the LAN interface attached to the router port?  
i. 192.168.1.100  
ii. 192.168.1.198  
iii. 192.168.2.255  
iv. 192.168.3.0

- (a) i only
- (b) ii and iii only
- (c) iii and iv only
- (d) None of the above

**P2-Q14.** Which of the following regular expressions describe the set of all binary strings containing at least one 0 and at least one 1? (‘∪’ is analogous to ‘+’)

- (a) 0*1*
- (b) (0⁺1⁺) ∪ (1⁺0⁺)
- (c) 0⁺1⁺
- (d) (0|1)*((01)|(10))(0|1)*

**P2-Q15.** The algebra for the SQL "SELECT nid FROM person" is  
a) σ nid (person) b) π nid (person) c) π nid (σ nid (person)) d) σ nid ( π nid (person) )

- (a) Option a
- (b) Option b
- (c) Option c
- (d) Option d

**P2-Q16.** Which of the following correctly portrays the number of states in the parsing tables for the corresponding parsing techniques?

- (a) States(CLR) < States(SLR) < States(LALR)
- (b) States(CLR) > States(SLR) = States(LALR)
- (c) States(CLR) = States(SLR) > States(LALR)
- (d) States(CLR) > States(SLR) > States(LALR)

**P2-Q17.** Which of the following is not the advantage of using factory pattern?

- (a) The programmers get a unified way of creating classes
- (b) New classes could be incorporated without changing the code of programmer using the factory
- (c) It encapsulates the users from the details of classes.
- (d) The programmers do not need to know the different classes produced in the factory

**P2-Q18.** Which regular expression describes the language that the following non-deterministic finite automaton (NFA) accepts? (‘∪’ is analogous to ‘+’)

*[Figure: Start -> q0 (self-loop on 0, 1); q0 --0--> q1; q1 --1--> q2 (accepting).]*

- (a) (0∪1)⁺(01)*
- (b) (0∪1)⁺01
- (c) (0∪1)*01
- (d) (0∪1)*(01)*

**P2-Q19.** You are taking maximum 10 integers as input and calculating the average of them using loop. Which of the following indicates all possible number of integers to be considered in designing the loop test?

- (a) 0, 1, 3, 9, 10
- (b) 0, 2, 4, 5, 9, 10, 11
- (c) 0, 1, 2, 4, 9, 10, 11
- (d) 0, 1, 3, 10, 11

**P2-Q20.** Which of the following is not true about Turing machines?

- (a) There are languages that cannot be decided by any Turing machine
- (b) Turing machines read from and write to a tape of finite length
- (c) Turing machines can decide all regular languages
- (d) Turing machines can decide all context-free languages

**P2-Q21.** Eliminate left-recursion from the grammar: S → Sab | SBb | bSs | s

- (a) S → bSsT | sT, T → abT | BbT | ϵ
- (b) S → bSsT | T s, T → abT | BbT | ϵ
- (c) S → bSsT | sT, T → abT | BbT
- (d) None of the above

**P2-Q22.** Which one will be the best strategy for defect removal efficiency in software development?

- (a) Stress Testing
- (b) Code review
- (c) White box testing
- (d) Black box testing

**P2-Q23.** Which of the following software metric is independent of programming language?

- (a) Line of Codes
- (b) Function Point
- (c) Token Count
- (d) None of the above

**P2-Q24.** Which of the following statements is (are) true for lexical analyzer?  
(i) Checks every character of the source text including the comments.  
(ii) Proceeds even if the input program is not syntactically correct.  
(iii) The order of definitions for keywords and identifiers is important.

- (a) (i) and (iii)
- (b) (i) and (ii)
- (c) (ii) and (iii)
- (d) (i), (ii), and (iii)

**P2-Q25.** Assume 5 computer devices are connected in a mesh network topology. How many cables are needed in the topology? How many ports are needed for each device in the topology?

- (a) 6 cables and 3 ports
- (b) 10 cables and 4 ports
- (c) 15 cables and 5 ports
- (d) 5 cables and 5 ports

#### Part 3 of 4 (25 MCQs) - `cse-2021-part3.pdf`

**P3-Q1.** Which of the following is an example of register relative addressing in an 8086 microprocessor?

- (a) MOV CL, [BX+4]
- (b) MOV [BX], CL
- (c) MOV AX, [BX + DI + 4]
- (d) MOV [BX+SI], BP

**P3-Q2.** What will the contents of register AL look like after the following instructions are executed?

```asm
MOV BL, 8C
MOV AL, 7E
ADD AL, BL
```

- (a) FA and carry flag is set
- (b) 0A and carry flag is reset
- (c) 0A and carry flag is set
- (d) FA and carry flag is reset

**P3-Q3.** What will be output function F (X, Y, Z) in the sum-of-minterms form? Assume X as the most significant bit and Z as the least significant bit.

*[Figure: 4-to-1 MUX; inputs I0 = Z̅, I1 = Z̅, I2 = 0, I3 = 1; selects S1 = X, S0 = Y; output F.]*

- (a) ∑(0, 1, 2, 3)
- (b) ∑(0, 2, 6, 7)
- (c) ∑(2, 3)
- (d) ∑(0, 1)

**P3-Q4.** Which of the following pairs represents hardware interrupt in an 8086 microprocessor?

- (a) INT0 and INTR
- (b) NMI and INT5
- (c) INTR and NMI
- (d) INTA and NMI

**P3-Q5.** A computer system has enough room to hold five programs in its main memory. These programs are idle waiting for I/O half the time. What fraction of the CPU time is wasted?

- (a) (0.2)^0.5
- (b) (0.5)^5
- (c) (0.5)^0.5
- (d) (0.2)^5

**P3-Q6.** What is the size of a Direct-Mapped cache with 16 KB of data and 4-word blocks, assuming a 32-bit address (byte addressable) and 32-bit words? There is a dirty bit.

- (a) 150 KB
- (b) 148 KB
- (c) 147 KB
- (d) 149 KB

**P3-Q7.** A majority circuit is a combinational circuit whose output is equal to 1 if the input variables have more 1’s than 0’s. The output is 0 otherwise. What will be the simplified Boolean equation for the output of a 3-input (a, b, c) majority circuit?

- (a) ab+bc+ac
- (b) abc
- (c) abc+ab+bc
- (d) abc+abc’+a’bc+ab’c

**P3-Q8.** One of the main pitfalls of any greedy algorithm is trapping at local optima. This problem can be efficiently tackled by

- (a) restarting the algorithm.
- (b) using simulated annealing in conjunction with greedy algorithm.
- (c) changing the cost function of greedy algorithm.
- (d) None of the above.

**P3-Q9.** In an 8086 microprocessor, a memory location pointed by a segment address of 2000H and offset address of 1000H is written as 2000:1000. What is the actual/physical memory location for 2000:1000?

- (a) 12000
- (b) 21000
- (c) 2100
- (d) 3000

**P3-Q10.** Consider a 32-bit computer architecture and a byte addressable memory. Now there is a jump instruction that takes an immediate address as part of the instruction where the execution jumps directly. To give an example, if ‘j 2020h’ is executed, the next instruction is fetched from the memory address 2020h. Each instruction is 32 bit long and the opcode requires 4 bit. Up to which address can it jump?

- (a) 2^28 - 1
- (b) cannot be determined
- (c) depends on the current address
- (d) 2^28

**P3-Q11.** Suppose at a given period, four jobs have arrived with the following data. Assume, a job waits 80% of the time for I/O while in memory. Now, calculate the total amount of time needed for all four jobs to be completed.

| Job | Arrival Time | CPU minutes needed |
|---|---|---|
| A | 1:00 PM | 2 |
| B | 1:05 PM | 3 |
| C | 1:15 PM | 3 |
| D | 1:20 PM | 4 |

- (a) 31 min
- (b) 37 min
- (c) 46 min
- (d) 24 min

**P3-Q12.** Which of the following is not a feature of a microprocessor?

- (a) Built-in debugger program with interrupt capability
- (b) High computational capacity
- (c) Parallel I/O
- (d) Built-in memory and I/O components

**P3-Q13.** Consider an artificial agent is operating in a partially observable and nondeterministic environment. The most suitable agent type for such an environment is

- (a) model-based reflex agents.
- (b) Goal-based agents.
- (c) Autonomous agents.
- (d) simple reflex agents.

**P3-Q14.** Suppose we have the following instruction mix data and the cycles per instruction in a multi-cycle architecture. How faster it is than a single cycle version?

| Type | Instruction Mix | Clock Cycles |
|---|---|---|
| Memory | 30% | 6 |
| ALU instructions | 60% | 4 |
| Jumps | 10% | 2 |

- (a) 2 times
- (b) 1.5 times
- (c) 2.36 times
- (d) 1.36 times

**P3-Q15.** What is the next state equation for A(t+1) for the following circuit?

*[Figure: JK flip-flop with clock CLK. J is driven by an XOR gate whose inputs are X and the fed-back Q; K is driven by an inverter on X; the output A is taken from Q̅.]*

- (a) 1
- (b) X(t)+A(t)
- (c) 0
- (d) X’(t)

**P3-Q16.** What is the overhead of a Direct-Mapped cache with 16 KB of data and 4-word blocks, assuming a 32-bit address (word addressable) and 32-bit words?

- (a) 13.51%
- (b) 14.09%
- (c) 12.93%
- (d) 14.66%

**P3-Q17.** What will be the simplified form of the following Boolean expression in terms of the minimum number of literals: wx+ w x’+xyz’ + x’yz’ + xy’z’ + x’y’z’ + z?

- (a) 1
- (b) w
- (c) w+z
- (d) 0

**P3-Q18.** In a multithreaded system, it takes 25 msec to get a request for work, dispatch it and do the rest of the necessary processing assuming that the data needed are in the block cache. Otherwise disk operation is needed. If a disk operation is needed, an additional 75 ms is required, during which time the thread sleeps. One-third of the time data needed are not in the block cache. How many requests/sec can the server handle on average?

- (a) 66.67
- (b) 25.00
- (c) 23.08
- (d) 40.00

**P3-Q19.** In a disk, disk requests come in to the disk driver for cylinders 10, 22, 20, 2, 40, 6 and 38. A seek takes 6 msec per cylinder moved. How much seek time in msec is needed for the Elevator Algorithm, if the initial arm position is at cylinder 20 moving upward.

- (a) 876
- (b) 58
- (c) 348
- (d) 360

**P3-Q20.** To improve the performance of adversarial search, we can use lookup table rather than search

- (a) only at the beginning of a game.
- (b) only at the ending of a game.
- (c) both at the beginning and ending of a game.
- (d) None of the above.

**P3-Q21.** Suppose we have the following instruction mix data and the cycles per instruction in an architecture. Calculate the CPI.

| Type | Instruction Mix | Clock Cycles |
|---|---|---|
| Loads | 25% | 5 |
| Stores | 10% | 4 |
| ALU instructions | 52% | 4 |
| Branches | 11% | 3 |
| Jumps | 2% | 3 |

- (a) 3.8
- (b) 4
- (c) 4.12
- (d) 4.4

**P3-Q22.** Hybridization of local and global searches is suitable for

- (a) exploring and exploiting search space.
- (b) exploring search space.
- (c) exploiting search space.
- (d) None of the above.

**P3-Q23.** A well-defined problem in AI has five components: initial state, a description of the possible actions available, transition model, the goal test and path cost. The most important component with respect to problem formulation is

- (a) initial state.
- (b) path cost.
- (c) Goal test.
- (d) None of the above.

**P3-Q24.** Two concurrent processes, A and B, each need same three records, R1, R2, and R3 in a database. If A asks for them in the order R2, R3, R1, then which of the following order for B, is deadlock free?

- (a) R1, R3, R2
- (b) R3, R1, R2
- (c) R2, R1, R3
- (d) R3, R2, R1

**P3-Q25.** Consider the following truth table for a 4-input priority encoder. What is the priority order of the inputs?

| D3 | D2 | D1 | D0 | X | Y |
|---|---|---|---|---|---|
| X | X | 1 | X | 0 | 1 |
| X | X | 0 | 1 | 0 | 0 |
| 1 | X | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 |

- (a) 1, 0, 3, 2
- (b) 1, 2, 3, 4
- (c) 4, 3, 2, 1
- (d) 1, 2, 4, 3

#### Part 4 of 4 (25 MCQs) - `cse-2021-part4.pdf`

**P4-Q1.** What was the main reason for WannaCry attack to be successful?

- (a) An exploit was stolen from NSA which made it possible to attack successfully
- (b) Users did not patch the system even though it was available online
- (c) It was an OS vulnerability that the developer did not know
- (d) People were not willing to pay the amount asked by the attacker

**P4-Q2.** Which one is used to exchange a shared secret key?

- (a) Digital signature
- (b) Steganography
- (c) Public key cryptosystem
- (d) Symmetric key

**P4-Q3.** Two data points are given (1) y = 1, x = (1, 1) and (2) y = 1, x = (1, 0). Also, the classification hyperplane is defined by the line y = x₁ – 2 x₂ which may be expressed as y = (1, -2)ᵀ x = Wᵀ x  
What can be said regarding the performance of the classifier?

- (a) Data point (2) is correctly classified but (1) is incorrectly classified
- (b) Both data points are correctly classified
- (c) Data point (1) is correctly classified but (2) is incorrectly classified
- (d) Both data points are incorrectly classified

**P4-Q4.** Which of the following can be actor of a Use case that describes ATM transaction?

- (a) ATM machine
- (b) Core Banking System
- (c) Time-based data backup event
- (d) All of the above

**P4-Q5.** Suppose you are building a decision tree. The tree building algorithm selects an attribute that has highest information gain as the decision node. For the data given below, select the attribute which has the highest information gain and which will be the root node of the decision tree.

"Playing Tennis Example"

| Day | Outlook | Temp | Humid | Wind | Play? |
|---|---|---|---|---|---|
| 1 | Sunny | Hot | High | Weak | No |
| 2 | Sunny | Hot | High | Strong | No |
| 3 | Overcast | Hot | High | Weak | Yes |
| 4 | Rain | Mild | High | Weak | Yes |
| 5 | Rain | Cool | Normal | Weak | Yes |
| 6 | Rain | Cool | Normal | Strong | No |
| 7 | Overcast | Cool | Normal | Strong | Yes |
| 8 | Sunny | Mild | High | Weak | No |
| 9 | Sunny | Cool | Normal | Weak | Yes |
| 10 | Rain | Mild | Normal | Weak | Yes |
| 11 | Sunny | Mild | Normal | Strong | Yes |
| 12 | Overcast | Mild | High | Strong | Yes |
| 13 | Overcast | Hot | Normal | Weak | Yes |
| 14 | Rain | Mild | High | Strong | No |

- (a) Temp
- (b) Outlook
- (c) Humid
- (d) Wind

**P4-Q6.** Which of the following can be used by the rootkit to remain stealthy in the system?

- (a) Using function hooking
- (b) Using ransomware
- (c) Using a Trojan horse
- (d) Using the ARP protocol

**P4-Q7.** Given a 3D triangle with coordinate points A(3, 4, 1), B(6, 4, 2), C(5, 6, 3). What are the new coordinates of point A of the object after the reflection on the XZ plane?

- (a) (6,2,8)
- (b) (4,3,1)
- (c) (3,-4,1)
- (d) (3,1,4)

**P4-Q8.** The signal sin (2πBt) is band limited to B Hz. Then, the signal sinⁿ (2πBt) is band limited to

- (a) (2^n)B Hz
- (b) B/n Hz
- (c) nB Hz
- (d) 2nB Hz

**P4-Q9.** In an Assignment Submission System, a Student cannot deny to have edited submission after the deadline. Which software security requirement signifies it?

- (a) Integrity
- (b) Confidentiality
- (c) Non-repudiation
- (d) Authorization

**P4-Q10.** Which among the following error curves indicate faster convergence rate?

*[Figure: four Error-vs-Epochs plots, each with Training, Validation and Testing curves. A: training error rises and flattens high while validation and testing fall slowly. B: validation stays high; training and testing fall gradually. C: all three curves drop steeply within the first few epochs and flatten low. D: testing error rises from low while training and validation settle; the curves cross.]*

- (a) Case A
- (b) Case B
- (c) Case C
- (d) Case D

**P4-Q11.** For the Student Management System of BUET, which one is not a Non-functional requirement?

- (a) CGPA cannot be higher than 4
- (b) Students other than BUET cannot read or modify course materials
- (c) It has to allow 1000 students to register at a time
- (d) All of the above

**P4-Q12.** If the bit stream 1110000100110101 is converted using 4B/5B block coding, what will be the maximum number of consecutive zeros in the output bit stream?

- (a) 1
- (b) 4
- (c) 2
- (d) 3

**P4-Q13.** Given a homogeneous point (1, 2, 3). What will be the new coordinate of the point if a rotation of 90 degree is applied towards the Z axis?

- (a) (1,2,-3)
- (b) (-2, 1, 3).
- (c) (2,1,-3)
- (d) (2,-1,-3)

**P4-Q14.** Which is the correct bit stream according to the following figure that indicates differential Manchester line coding scheme?

*[Figure: Amplitude-vs-Time waveform over 8 bit periods (dashed bit boundaries) with a mid-bit transition in every period; not reproduced. See page 8 of `cse-2021-part4.pdf`.]*

- (a) 10000111
- (b) 01000100
- (c) 01111000
- (d) 10111011

**P4-Q15.** Which is the characteristic of a signal g(t), band limited to B Hz, whose Nyquist sampled values are zero everywhere except at t = 0 where its sampled value is 1?

- (a) g(t) is an impulse signal whose impulse location is at t =0.
- (b) g(t) is an odd periodic signal.
- (c) g(t) = 0 for |t| > 1/2B
- (d) g(t) = 0 for t = n/2B, where n is any nonzero integer.

**P4-Q16.** In orthographic projection, the object is placed with one of its faces with ___________ to the picture plane.

- (a) Inclined
- (b) Parallel
- (c) Perpendicular
- (d) None of the above

**P4-Q17.** Which statement is true in case of Delta modulation?

- (a) Larger threshold of coding decreases granular noise.
- (b) Smaller threshold of coding increases slope overload.
- (c) Smaller threshold of coding increases granular noise.
- (d) Larger threshold of coding increases slope overload.

**P4-Q18.** Suppose, you are working on a binary classification problem with 3 input features. And you chose to apply a bagging algorithm (X) on this data. You chose max_features = 2 and the n_estimators = 3. Here, max_features refers to the maximum number of features to consider at each split and n_estimators refers to the number of trees to train to be aggregated. Now, assume that each estimator has 70% accuracy. Also, note that Algorithm X is aggregating the results of individual estimators based on maximum voting. What will be the maximum accuracy that you can get?

- (a) 70%
- (b) 80%
- (c) 100%
- (d) 90%

**P4-Q19.** What are the computed values of precision and sensitivity, if you are given the following confusion matrix?

| Prediction \ Ground Truth | + | - |
|---|---|---|
| + | 10 | 2 |
| - | 3 | 5 |

- (a) 0.83, 0.77
- (b) 0.67, 0.84
- (c) 0.77, 0.63
- (d) 0.63, 0.83

**P4-Q20.** Which of the following is not an advantage of Microservice architecture?

- (a) Better deployability
- (b) Improve maintainability
- (c) Low memory requirement
- (d) Better testability

**P4-Q21.** Given a triangle with points (1, 1), (0, 0) and (1, 0). If shear parameter 2 is applied on X axis what will be the new coordinates of the object?

- (a) A (3, 1), B(0, 0), C(1, 0).
- (b) A (3, 1), B(0, 0), C(1, 1).
- (c) A (2, 1), B(0, 0), C(1, 0).
- (d) A (2, 1), B(0, 1), C(1, 0).

**P4-Q22.** Which of the following takes advantage of the TCP congestion control algorithm?

- (a) TCP blind injection attack
- (b) Optimistic ACK attack
- (c) TCP Syn flood attack
- (d) DDoS attack using TCP reset flag

**P4-Q23.** How can you guess that some machine is probably sniffing the packets in a LAN?

- (a) Internet traffic will be blocked by the sniffer machine causing timeouts
- (b) A ping response from the suspected machine will be slower than that of others
- (c) The suspected machine will launch a lot of ARP requests
- (d) There will be huge UDP streaming traffic in the LAN which will disrupt the network

**P4-Q24.** Which of the following is false?

- (a) A Sequence diagram shows lifetime of an object.
- (b) A Sequence diagram may show condition
- (c) A Sequence diagram does not show loop
- (d) None of the above

**P4-Q25.** Given two points P1(0, 0, 0) and P2(2, 2, 0) which of the following is the plane equation equidistant from P1 and P2?

- (a) x-y+2=0
- (b) x+y+2=0
- (c) x+y-2=0
- (d) 2x-y=0
