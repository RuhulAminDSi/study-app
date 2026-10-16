# "BUET 2025 CSE Job Exam Questions" (Scribd 973052916, Duranta handout): 8 BUET-run papers of 2025, transcribed as suggestions

- **Source:** Scribd document 973052916: https://www.scribd.com/document/973052916/BUET-Pattern-IT-Questions (12 pages; public page layers)
- **Local files:** `_pages/` (Scribd `.jsonp` page layers), `_img/` (page background images), `buet-pattern-it-questions.txt` (text layer), `.cols.txt` / `.flat.txt` (ordered text)
- **Publisher:** Duranta. Every page carries the watermark "Manik Vai Duranta Academy". Printed book page numbers 73–82 show it is an extract of a larger compilation.
- **Document type:** coaching compilation of candidates' recollections of BUET-run 2024–2025 papers. **Every record here is `doc_type: "suggestion"` with `exam: null`**, as the coordinator directed; the printed exam is kept in `printed_tag`.

## Transcription Notes

- **BSCPLC 13.12.2024 (pages 1–2, book p. 73) is skipped.** It is already transcribed at `ex-question/telecom-web/2024-bscplc-am-engineering-scribd-973052916/`. This file starts at the BCIC banner in the lower half of page 2.
- **DPDC AM(ICT) 27.06.2025 overlaps** `BUET JOB/28_islamic-bank-cont-and-dpdc.md`, which holds a different recollection of the same exam. Check before promoting any of these records to exam records.
- The last banner, "Dhaka Power Distribution Company Limited (DPDC), Post: Assistant Engineer (CSE), Exam Taker: BUET, Time: 1 hour 30 minutes, Exam Date: 18.10.2025 (Technical 50 marks written and Non-technical 20 marks MCQ)" (book p. 82), is followed only by "???". It has no questions.
- Many questions are recollections in candidates' own words ("Then bla bla don’t remember", "question says cash but i am quite sure it should be cache"). They are kept verbatim, along with the typos (`*a!==””`, `Int`, `Return`, `I`/`i` mix-ups, `192.178.10.0/24`).
- BCIC Q8 opens with Bangla in a broken legacy font; it is summarised in brackets. The Q9 multiplexer figure is described from the page image. A few unnumbered items are labelled `[10]`, `[11]`, `W1…`, `P1…` (W = written, P = practical session).
- No answers are printed. Non-technical parts (BUET AP 22/02/2025: aptitude 10 MCQ, English 5 MCQ, translation) are listed only.
- Fetched with TLS verification (Windows certificate store).

## Content

### Bangladesh Chemical Industries Corporation (BCIC) — Assistant Programmer, 14/02/2025 (BUET) (suggestion)

- **Printed banner:** Book p. 74 · Exam Taker: BUET · Post Name: Assistant Programmer, Exam Date: 14/02/2025 · Time: 09-10 AM, Non Tech: 25, Dept: 75 Marks · pages 2–4
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `BCIC AP 2025`.

**1.** Implement a queue using two stack code where enqueue and dequeue is possible.

**2.** Implement abstract method where exist interface. A output was given with main function, You have to write child class of interface.

```text

interface Fly {
void print(); // Abstract method
}
//Write code
public class Main {
public static void main(String[] args) {
// Create objects of Dog and Bird
Fly dog = new Dog();
Fly bird = new Bird();
// Call the print method for each object
dog.print();
bird.print();
}
}
Output:
```
> Note: The expected output lines after "Output:" are not in the text layer.

**3.** Which one of the following is NOT desired in a good Software requirement specification document?<br>
A. Functional Requirements<br>
B. Non-Functional Requirements<br>
C. Goals of Implementation<br>
D. Algorithm for Software Implementation

**4.** One array {4, 3, 2, 1, 5} is given, which should be applied between (bubble/insertion/selection sort after two phase iterations for ascending order sorting?

**5.** Write the advantages and disadvantages of Direct and Associative mapping

**6.** In a Job Scheduling algorithm there is a 2-second interval, Find Average waiting time.<br>
Process | Arrival Time | Burst Time<br>
P1 | 0 | 3<br>
P2 | 0 | 4<br>
P3 | 0 | 5

**7.** Cache hit rate = 90% (0.9)<br>
Cache miss rate = 10% (0.1)<br>
Hit time = 2 ns<br>
Miss penalty = 20 ns<br>
Find Effective Memory Access Time (EMAT):

**8.** [Bangla instruction, garbled in the text layer: it mentions an employee table, insert queries, employees whose salary is above the avg salary, and "Partition by dept_id"]

```text
CREATE TABLE employee (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(50),
dept_id INT,
salary DECIMAL(10, 2)
);
INSERT INTO employee (emp_id, emp_name, dept_id, salary)
VALUES
(1, 'John Doe', 101, 50000.00),
(2, 'Jane Smith', 102, 60000.00),
(3, 'Alice Johnson', 101, 55000.00),
(4, 'Bob Brown', 102, 70000.00),
(5, 'Charlie Davis', 103, 45000.00);
Find the output:
SELECT emp_name, salary
FROM employee
WHERE salary > (SELECT AVG(salary) FROM employee);
SELECT emp_name, salary,
AVG(salary) OVER (PARTITION BY dept_id) AS avg_dept_salary
FROM employee;
```
> Note: The Bangla lead-in is in a broken legacy font and is summarised in brackets, not transcribed.

**9.** The output of a 2-input multiplexer is connected back to one of its inputs as shown in the figure.<br>
[Figure: a 2-to-1 multiplexer whose output Q is fed back to input 0; input 1 and select S are external]<br>
Match the functional equivalence of this circuit to one of the following options.<br>
A. D Flip-flop<br>
B. D Latch<br>
C. Half-adder<br>
D. Demultiplexer

**10.** When a message was sent how SMTP and POP3 works?

**11.** Given an IP range: 10.16.0.2-10.16.3.255. Find the CIDR notation of this.

**12.** S can launch a birthday attack to replace m with a fraudulent message A third party attacker can launch a birthday attack to replace m with a fraudulent message R can launch a birthday attack to replace m with a fraudulent message. II<br>
Which of the following are possible security violations?<br>
A. I and II only<br>
B. I only<br>
C. II only<br>
D. II and III only
> Note: The statement numbers I/II/III and the scenario before them (sender S, receiver R, message m) are not in the text layer; the three statements are run together as printed.

**13.** Write down the difference between structure and class

**14.** Using “CARBON” word Put vowel in even/odd position. How many ways permutation possible?

**15.** Write in brief of the usage of the below Linux command:<br>
grep, top, free, df

### Bangladesh University of Engineering and Technology (BUET) — Assistant Programmer, 22/02/2025 (suggestion)

- **Printed banner:** Book p. 75 · Exam Taker: BUET · Post Name: Assistant Programmer, Exam Date: 22/02/2025 · First Session: Written Exam, Second Session: Practical Exam · marks and time not printed · pages 4–5
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `BUET AP 2025`.

**W1.** Difference between offline ups and online ups and their advantages and disadvantages.

**W2.** What is Dynamic Ram and Static Ram. What is the purpose of cash(question says cash but i am quite sure it should be cache)

**W3.** What is MAC flooded attack ? How to prevent it

**W4.** Update a price where current price is less than 1000

**W5.** Subnetting basic ( divide into 4 subnet 192.178.10.0/24 )<br>
Write their mask , range and network address of each subnet and also show some calculation

**W6.** Write the operator overloading function in C++ for the following

```text
Class Integer {
Private int i
//
}
Int main() {
Integer P;
P++;
++P;
}
```

**W7.** Write the output of the following

```text
i)
Int foo(int x, int y)
{
if(x==0)
Return y
Return foo(x-1,x+y)
}
Int main()
{
foo(3,4)
}
ii)
Int foo(char *a)
{
if(*a && *a!==””)
{
foo(a+1)
putchar(*a)
}
}
Int main()
{
Char a[] = “COVID-19”
foo(a)
}
```

**P1.** Create 3 table in Oracle DB<br>
All data where given<br>
Then you are asked to show a single web page<br>
Where there will be 3 button<br>
1. Show student ( clicking thai will show student list from DB)<br>
2. Show subject wise mark ( You have to find subject id from one table and mark from another to show it)<br>
3. Show total marks of each students ( you have to query all there table student marks and subject to show this result)
*(practical session)*

**P2.** Make a python class name BankAccount<br>
It has a name and a balance<br>
Then we can perform 3 operation<br>
1. Deposit<br>
2. Withdraw<br>
3. Show current balance
*(practical session)*

### Bangladesh University of Engineering and Technology (BUET) — Assistant Hardware Engineer, ICT Cell, 12/04/2025 (suggestion)

- **Printed banner:** Book p. 76 · Exam Taker: BUET, Marks: 60, Time: 1 hour, (No general & no MCQ) · Post Name: Assistant Hardware Engineer, ICT Cell Exam Date: 12/04/2025 · First Session: Written Exam, Second Session: Practical Exam · pages 6–7
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `BUET ICT Cell AHE 2025`.

**1.** Draw the I-V characteristics of a diode and an NPN transistor.

**2.** What is the role of DNS in a computer network?

**3.** What are the common stages of a CI/CD pipeline?

**4.** What are the steps to deploy a web and backend microservice in a Docker environment? How do you verify that the deployment was successful?

**5.** What is the difference between vertical and horizontal scaling? What is auto scaling and how does it work?

**6.** In Linux OS, why is direct root login disabled? How can a user execute commands with root privileges?

**7.** What are the main components of Kubernetes architecture?

**8.** What is a hypervisor? What are the different types of hypervisors? Provide some examples?

**9.** What is the subnet mask, network address, broadcast address, first and last usable IP addresses, and the total number of valid hosts for the network 192.168.2.64/26?

**10.** What is the total number of bits in IPv6? What do the following acronyms stand for?<br>
DIMM, TDP,SSD & HTTP.

**11.** What is the difference between SSD and SATA in terms of:<br>
(i) Interface (ii) Speed (iii) Reliability

**12.** What is RAID? Explain the different types of RAID levels below:<br>
(i) RAID 0 (ii) RAID 1 (iii) RAID 5 (iv) RAID 10

**13.** Circuit Math Calculation : Amp 20v & Frequency 1KHz (Then bla bla don’t remember)

**P1.** Install putty in your computer and connect with the server.<br>
Username:<br>
IP:<br>
Password:
*(practical session)*

**P2.** Write a script to back up your system and schedule it every day 3pm at an given IP
*(practical session)*

**P3.** Create a webpage and deploy this page into the server and run it with apache server.
*(practical session)*

**P4.** Write Linux Command and output<br>
a) System info<br>
b) find free memory of the system<br>
c) find total memory<br>
d) run apache2 server and show its status<br>
e) search index.html file and show result
*(practical session)*

### IFIC Bank PLC — MTO, 17/05/2025 (practical by BUET) (suggestion)

- **Printed banner:** Book p. 77 · Marks: 100 Time: 3 hours · Post Name: MTO, Exam Taker (Practical): BUET Exam Date: 17/05/2025 · First : Written Exam, Second: Practical Exam (only the practical is printed) · page 7
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `IFIC Bank MTO 2025`.

**P1.** Reversing a string without using any built-in library functions can be done manually using a loop. Here's a simple example in C++:
*(practical session)*
> Note: Only this line is printed; no code follows it.

**P2.** There was a small payroll project based on inheritance, overloading, and overriding. The structure was already provided — I just had to write the methods correctly in the appropriate places, along with accurate calculations.
*(practical session)*

**P3.** Merge Sort
*(practical session)*

**P4.** BFS shortest path
*(practical session)*

**P5.** "There were several tables, and I had to write a query to get the output using JOIN, GROUP BY, LIMIT, and OFFSET."
*(practical session)*

**P6.** Networking-related commands:<br>
Find the current IP address.<br>
View active TCP connections.<br>
Use ping to test connectivity.<br>
Trace the number of hops to a destination.
*(practical session)*

**P7.** Operating system-related commands:<br>
• Check if a specific file exists in a given location.<br>
• Display all .txt files within a folder and its subfolders.<br>
• List all system users.<br>
• Show the currently logged-in user.
*(practical session)*

### Jamuna Oil Company Limited — Junior Officer (IT & MIS), 23/05/2025 (BUET) (suggestion)

- **Printed banner:** Book p. 78 · Exam Taker: BUET · Post Name: Junior Officer (IT & MIS), Exam Date: 23/05/2025 · "Marks Distribution:" left blank · pages 7–8
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `Jamuna Oil JO(IT & MIS) 2025`.

**1.** What are the five states of a process in an operating system?

**2.** Write the names of three linear and three non-linear data structures. Also, mention which type is more memory efficient — linear or non-linear?

**3.** Apply the Merge Sort algorithm using the divide and conquer approach to sort the following list of numbers: 5, 1, 6, 3, 7, 2, 8, 4.

**4.** Draw diagrams of Bus, Star, and Mesh network topologies.

**5.** SQL Query: Table was given.<br>
(a) Write an SQL query to show the top 10 highest marks from the Result table.<br>
(b) Write an SQL query to show the number of male and female students who passed, individually.<br>
(c) Write an SQL query to show the absent students in the Result table.

**6.** Write a program that takes a single alphanumeric string as input. The string may contain both letters (a–z, A–Z) and digits (0–9). Your task is to calculate and print the sum of all numeric digit characters in the string.

**7.** Computer A has a 2 GHz processor and takes 250 picoseconds to execute a single instruction, while Computer B has a 2.5 GHz processor and takes 500 picoseconds per instruction. Which computer is faster?

**8.** What are the data units of the Physical layer, Data Link layer, Network layer, and Transport layer?

**9.** A software needs to be developed for an important government sector of Bangladesh. The requirements for this software must be finalized very quickly, possibly within 18 months. It will be reviewed every 6 months, and many important files will be stored in it. In this case, which model is perfect—Agile or Waterfall? Give justification.

**[10].** What are the four necessary conditions for a deadlock to occur?
> Note: Number not printed; it follows Q9 in the same table cell.

**[11].** In a 3-input logic circuit (inputs A, B, and C), the output F is 1 if at least two or all three inputs are 1.<br>
(a) Construct the truth table.<br>
(b) Use the truth table to find the POS (Product of Sums) expression using K-map simplification.
> Note: Number not printed.

### Bangladesh University of Engineering & Technology — AP (Exam Controller), 21/06/2025 (suggestion)

- **Printed banner:** Book p. 79 · Exam Taker: BUET · Post Name: AP (Exam Controller), Exam Date: 21/06/2025 · Marks Distribution: Non:40, Dept: 60 · page 8
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `BUET AP (Exam Controller) 2025`.

**1.** Check a given integer is palindrome or not

**2.** Students (id,name,dep)<br>
Enrollments(id,grade,course)<br>
1. Print name, name of the students<br>
2. Name student whose grade is A and from CSE dept

**3.** Packet Switching vs circuit switching

**4.** Cache vs floppy disk

**5.** a. SRAM vs DRAM.
> Note: Only part a is printed.

**6.** Deadlock's condition and a system to prevent it

### Dhaka Power Distribution Company Limited — AM ICT (Exam Controller), 27/06/2025 (BUET) (suggestion)

- **Printed banner:** Book p. 80 · Exam Taker: BUET · Post Name: AM ICT (Exam Controller), Exam Date: 27/06/2025 · Marks Distribution: Non:20, Dept: 80 · pages 9–10
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `DPDC AM(ICT) 2025`.

**1.** A robot will go to a specific destination of a grid map . which searching algorithm can apply for the shortest path. Now Write the algorithm name and how it works. - [5]

**2.** Given a dataset of customer (age,name,purchase history). If they bought a product it shows (YES/No)<br>
Which type of Machine Learning Algorithm can be used to predict to by next buy.<br>
Which machine learning model can be used to this case and how it works.? [5]

**3.** Given an IP address 10.10.0.0/16. Divide it into eight equal subnets. Fill up the below box. Write down the first usable ip, last usable ip, subnet mask of the third subnet.

**4.** A Content Management System (CMS) allows users to write blog posts. Assume that the blog post body supports HTML content. A JavaScript code snippet can be injected through this input.

```text
<div class="post">
<h2>Title</h2>
<div class="body">
{{body}}
</div>
<div class="footer">
Posted by {{username}}<br>
Role: {{role}}
</div>
</div>
Now write an XSS payload for the body that sends the cookies Write XSS payloads for the body that sends cookies to attacker.com/steal?cookie = only when the visitor is an admin (role:admin). Content Security Policy (CSP) or script blocking mechanisms are enabled.
```

**5.** Write a C program to take input a set of integers from command line. Print the summation of integers.

**6.** Write C/ Java Function to convert given String to Integers without using a library function.

**7.** Design a traffic light system, when there is Sunlight, It will OFF and No Sunlight, It will ON.

**8.** Write a SQL query to find full name and region when employee is same region to managers.

**9.** Write the complexities for the given sorting algorithm:<br>
(table: Quicksort, Merge Sort, Heap Sort, Selection Sort, Insertion Sort × Best Case, Worst Case, Average Case)

**10.** You have designed a binary tree. You have to traverse (right, Left and Root). Now Traverse the tree as given order.<br>
8<br>
3 10<br>
1 6 14<br>
4 7 13
> Note: The tree is printed as levels: root 8; 3, 10; 1, 6, 14; 4, 7, 13 (the BST of 8, 3, 10, 1, 6, 14, 4, 7, 13).

**11.** There are four conditions of deadlock (no preemption circular wait, mutual exclusion and hold and wait). Give an Examples of deadlock cannot occur at a resource.

**12.** Write a Code examples of the following terms:<br>
i) Feature Entry ii) Shotgun Surgery iii) Duplicate Code iv) Dead Code

**13.** Find iL current over the 20 voltages.
> Note: The circuit figure is not in the text layer or the page image set.

**14.** A source transmits one of the four symbols A, B, C, D, each of which is represented using a 2-bit pulse as follows:<br>
• A → 00<br>
• B → 01<br>
• C → 10<br>
• D → 11<br>
Each bit in the pulse is transmitted with an interleaving time of 5 nanoseconds (ns).<br>
The probabilities of the symbols are given as:<br>
• P(A) = 1/5<br>
• P(B) = 1/4<br>
• P(C) = 1/4<br>
• P(D) = 3/10<br>
Calculate the average rate of information transmission in bits per second

### Dhaka WASA — Assistant Maintenance Engineer (Network), 04.07.2025 (BUET) (suggestion)

- **Printed banner:** Book p. 81 · Post: Assistant Maintenance Engineer (Network) · Exam Taker: BUET Time: 1 hour 30 minutes · Exam Date: 04.07.2025 · (Technical 50 marks written and Non-technical 20 marks MCQ) · pages 10–12
- **Document type:** `suggestion` (as the coordinator directed for this compilation). Printed tag kept in `printed_tag`: `Dhaka WASA AME(Network) 2025`.

**1(a).** Find the Norton equivalent circuit for a DC power supply that has a 30 V terminal voltage when delivering 400 mA and a 28 V terminal voltage when delivering 600 mA.

**1(b).** A two-element series circuit has an average power of 940 W and a power factor of 0.707 (leading). Determine the circuit elements if the applied voltage is V = 99 Cos ( 600t + 30° ) V.
> Note: Printed under Q1 without its own number.

**2.** N-Channel MOS operating in the linear region. Calculate the current passing through the channel of the transistor. Given: μn Cox (W/L) = 1.3 mA/V², VGs = 2.5 V, Vt = 0.95 V. Assume reasonable values for missing parameters if necessary.

**3.** Design a three-input X-OR gate with the output function f = w1 ⊕ w2 ⊕ w3 using 2-to-1 multiplexers.

**4.** A system uses 16-bit logical address and a page size of 1 KB.<br>
(i) How many pages are in logical address space?<br>
(ii) How many bits are used for the page number and offset?

**5.** Write a Linux command to display the first 10 lines of the file wasacustomers.txt

**6.** Determine the current passing through a 10 kΩ resistor. Assume a forward voltage drop of 0.75 V across the diode. (Picture Given).

**8.** An Internet Service Provider (ISP) has the following chunk of CIDR-based IP addresses available with it: 245.248.128/20. The ISP wants to give half of this chunk of addresses to Admin Department, and a quarter to the HR Department, while retaining the remaining with Central Department. Which of the following is a valid allocation to A and B?<br>
For each department, determine:<br>
CIDR | IP Addressing | Usable Hosts<br>
Admin<br>
HR<br>
Central
> Note: Q7 is not printed (numbering jumps from 6 to 8).

**9.** Output Problem

```text
#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main() {
string S = “Wasa Authority”;
string s = S; // Assuming s is a lowercase-modified version
string R = S;
for (int I = 0; I < s.length(); i++) {
if (I % 2 == 0) {
S[i] = toupper(S[i]);
s[i] = tolower(s[i]);
}
cout << “s: “ << s << endl;
cout << “r: “ << R << endl;
return 0; // return inside loop
}
}
```

**10.** Class test(){

```text
Int
Public:
t(int value = 0){}
t.getone(value)
t.gettwo(value+10)}
Int main(){
Test (5);
cout<<”Get One”<<getone<<endl;
cout<<”Get One”<<gettwo<<endl;
}
```
> Note: No instruction is printed with the code (presumably "find the output" or "find the errors").

**11.** Employees (emp_id, first_name, last_name, manager_id, salary, department_id)<br>
Department (department_id, department_name)<br>
Show Manager in which an employee is under supervision. Which employee is more than 2 years, show them and average salary.DESC sort of the employee<br>
Manager_id, num_ofemployee, average salary

**12.** A scenario was given where a traffic flood was initiated from a single IP address. Later, the traffic flood originated from many IP addresses across the world.<br>
What are the names of these types of attacks?
