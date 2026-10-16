# BUET IICT Masters (ICT) admission MCQ test, April 2021 semester (1 July 2021): 60 MCQs (electrical circuits, DLD, C/C++, networking, microprocessors)

- **Source:** "BUET MSc in IICT Admission Test, April 2021 circular all Questions and Correct Answers", ITJobExam blog, https://www.itjobexam.com/2021/07/buet-iict-admission-test-2021-questions-answers.html. The site no longer resolves (DNS fails); saved from the Internet Archive snapshot of 5 July 2022, http://web.archive.org/web/20220705123533/https://www.itjobexam.com/2021/07/buet-iict-admission-test-2021-questions-answers.html (`itjobexam-post.html`, text in `itjobexam-post.txt`).
- **Publisher:** ITJobExam ("IT Job Exam"); the post ends "Collected From: Md. Muntasir Hasan, Lecturer, IICT, BUET".
- **Pages:** 1 web page
- **Document type:** exam paper (questions with the blog's answer key)

## Transcription Notes

- Header as posted: "BUET MSc in IICT Admission Test 2021 Questions and Answers. Total Questions: 60. Time: 40 Min. Exam Date: July 1, 2021." The title says "April 2021 circular", i.e. the April 2021 semester. Marks per question are not given.
- This is the MCQ stage of the IICT Masters (ICT) test. The topic list in IICT notices (Programming Languages, DLD, Communication Theory, Computer Architecture and Microprocessors, Computer Networks, Electronic Devices; see `../_reference/iict/`) fits the mix here, which also has many Electrical Circuits items (tagged EC). No written-part questions are posted.
- The answer key is the blog's, not an official one. Five keys are wrong or mislabelled (Q6, Q13, Q32, Q40, Q46) and two are doubtful (Q24, Q30); each has an "Answer issue" line, worked out by hand.
- Typos kept as posted: "Flipflip" (Q33), "youare" (Q35), "the1st" (Q36), "andCD" (Q57), "database & 32-bit address base" (Q27, meaning data bus / address bus), "If we apply 0001 to a to the input" (Q42). Q29 has a stray line break inside "b = b mod (b - 3)", kept in the code block.
- **Duplicates:** none. No IICT paper is in `ex-question/` yet.

## Content

### BUET IICT M.Sc. ICT April 2021 (1 July 2021)

BUET Institute of Information and Communication Technology (IICT): Masters (ICT) admission test, April 2021 semester, held 1 July 2021 - **Exam taker: BUET (IICT)** - 60 MCQs - Time: 40 min. Document type: exam paper (MCQ stage).

**1.** A capacitor in an RC circuit with R=2 ohm and C=4 F is being charged. The time required for the capacitor voltage to reach 63.2 percent of its steady-state value is:

- (a) 4 s
- (b) 8 s
- (c) 1/2 s
- (d) None of these

> Printed answer: (b) 8 s

**2.** How many valid hosts are available for the network segment 192.166.2.16/28?

- (a) 16
- (b) 8
- (c) 15
- (d) 14

> Printed answer: (d) 14

**3.** What is the output of the following code segment:

```cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
cout<<cars[3];
cout<<cars[2];
```

- (a) Mazda, Ford
- (b) Ford BMW
- (c) MazdaFord
- (d) Mazda Ford

> Printed answer: (c) MazdaFord

**4.** Which circuit can be used as a parallel to the serial converter?

- (a) A decoder
- (b) An encoder
- (c) Demultiplexer
- (d) Multiplexer

> Printed answer: (d) Multiplexer

**5.** Which function in the following expression will be called first?  
a = func3(6)-func2(4,5)/func1(1,2,3);

- (a) func1();
- (b) func2();
- (c) func3();
- (d) Cannot be predicted

> Printed answer: (d) Cannot be predicted

**6.** An organization is granted block 130.34.12.64 / 26. Find the no. of addresses for the whole network.

- (a) 128
- (b) 32
- (c) 256
- (d) None

> Printed answer: (c) 256

> Answer issue: a /26 block has 2^(32-26) = 64 addresses, so the answer is (d) None.

**7.** Difference between Latch and Flipflop is:

- (a) Flipflop has a clock but Latch doesn’t have
- (b) Flipflop is edge-triggered but Latch is level triggered
- (c) Both are true
- (d) None are true

> Printed answer: (c) Both are true

**8.** Which of the following sequence that a microprocessor follows?

- (a) Fetch, decode, execute
- (b) Fetch, execute, decode
- (c) Decode, fetch, execute
- (d) Execute, decode, fetch

> Printed answer: (a) Fetch, decode, execute

**9.** If the message bit is 111 then the Even-parity bit will be:

- (a) 1111
- (b) 1
- (c) 0
- (d) None

> Printed answer: (b) 1

**10.** What is the content of Stack Pointer (SP)?

- (a) Address of the current instruction
- (b) Address of the next instruction
- (c) Address of the top element of the stack
- (d) Size of the stack.

> Printed answer: (c) Address of the top element of the stack

**11.** An address in the main memory is called--

- (a) Physical address
- (b) Logical address
- (c) Memory address
- (d) Word address

> Printed answer: (a) Physical address

**12.** Which of the following format is usually used to store data?

- (a) Decimal
- (b) BCD
- (c) Octal
- (d) Hexadecimal

> Printed answer: (b) BCD

**13.** If in an RLC series circuit source voltage 100sinωt V, Resistance 10 Ohm, inductive reactance 10 ohm and capacitive reactance 10 ohm then current in the circuit will be:

- (a) 10 A
- (b) 3.33 A
- (c) 3.33sinωt A
- (d) 10 sinωt A

> Printed answer: "10 A" (no option letter)

> Answer issue: with X_L = X_C the circuit is resonant, Z = R = 10 ohm, so i = 100 sinωt / 10 = (d) 10 sinωt A; "10 A" is only its peak value.

**14.** The voltage induced in an inductor is represented as,

- (a) product of its inductance and current through it
- (b) ratio of its inductance to the current through it.
- (c) ratio of current through it to its inductance.
- (d) product of its inductance and rate of change of current through it.

> Printed answer: (d) product of its inductance and rate of change of current through it.

**15.** What will be the output of the following C code?

```c
#include<stdio.h>
int main()
{
register static int i = 10;
i = 11;
printf("%d\n", i);
return 0;
}
```

- (a) 10
- (b) Compile-time error
- (c) Undefined behavior
- (d) 11

> Printed answer: (b) Compile-time error

**16.** ………………. is a group of networks and routers under the authority of a single administration.

- (a) An autonomous system
- (b) An Area
- (c) A System
- (d) Both an autonomous system and an area

> Printed answer: (a) An autonomous system

**17.** Bridges are used at ……………….. layer.

- (a) Physical layer
- (b) MAC layer
- (c) Network layer
- (d) Transport layer

> Printed answer: (b) MAC layer

**18.** DMA stands for?

- (a) Direct Memory Access
- (b) Direction Memory Access
- (c) Dictate Memory Accumulator
- (d) Direct Memory Accumulator

> Printed answer: (a) Direct Memory Access

**19.** A D flip-flop is having three inputs D, CLK, and CLR Which input is asynchronous:

- (a) D
- (b) CLK
- (c) CLR
- (d) None

> Printed answer: (c) CLR

**20.** Superposition principle states that at a time __________ source(S) acts.

- (a) all the given sources
- (b) only voltage sources
- (c) only one source
- (d) only current sources

> Printed answer: (c) only one source

**21.** At __________ frequencies the parallel R-L circuit behaves as purely resistive.

- (a) low very
- (b) low
- (c) high
- (d) very high

> Printed answer: (d) very high

**22.** A number of operations processes per second by a processor is called-

- (a) Instruction processor
- (b) Bandwidth
- (c) Clock Speed
- (d) Frequency

> Printed answer: (c) Clock Speed

**23.** Which of the following is the correct syntax to pass a Function Pointer as an argument?

- (a) void pass(int (*fptr)(int, float, char)){}
- (b) void pass(*fptr(int, float, char)){}
- (c) void pass(int (*fptr)){}
- (d) void pass(*fptr){}

> Printed answer: (a) void pass(int (*fptr)(int, float, char)){}

**24.** What will be the output of the following C code?

```c
#include<stdio.h>
int mul(int a, int b, int c)
{
return a * b * c;
}
int main()
{
int (*function_pointer)(int, int);
function_pointer = mul;
printf("The product of three numbers is: %d\n", function_pointer(2, 3));
return 0;
}
```

- (a) Output: The product of three numbers is: 24
- (b) The code is incorrect
- (c) Output: The product of three numbers is: 6
- (d) None

> Printed answer: "The product of three numbers is: 9479040" (no option letter)

> Answer issue: assigning `mul` (three parameters) to a two-parameter function pointer is an incompatible-pointer assignment, and calling it is undefined behaviour; the printed number is one run's garbage. The defensible choice is (b) The code is incorrect.

**25.** An electrical series circuit consists of a 100 V battery, 20-ohm resistance, and a 5 uF capacitance. The voltage drop across 20-ohm resistance is :

- (a) 5 V
- (b) 4 V
- (c) 0 V
- (d) 100 V

> Printed answer: (c) 0 V

**26.** Imaginary part of Admittance of an AC circuit is:

- (a) Resistance
- (b) conductance
- (c) Reactance
- (d) Susceptance

> Printed answer: (d) Susceptance

**27.** The maximum addressing capacity of a microprocessor that uses 16-bit database & 32-bit address base is:

- (a) 64 K.
- (b) 4 GB
- (c) Both 64 K and 4 GB
- (d) None of these

> Printed answer: (b) 4 GB

**28.** What will be the output of the following C code?

```c
#include<stdio.h>
int main()
{
int x;
int i = 5;
int l = i /-2;
int k = i % -2;
printf("%d %d\n", l, k);
x = 5 % 1;
printf("%d\n", x);
return 0;
}
```

- (a) -2 1
- (b) -1 1
- (c) 1 -1
- (d) Implementation defined

> Printed answer: (a) -2 1

> Note: the program also prints a second line "0" (5 % 1); option (a) gives only the first line.

**29.** What will be the output of the following pseudocode?

```text
Integer a, b
Set a = 15, b = 7
a = a mod (a - 3)
b = b
mod (b - 3)
a = a mod 1
b = b mod 1
Print a + b
```

- (a) 15
- (b) 7
- (c) 0
- (d) 2

> Printed answer: (c) 0

**30.** Generally, Dynamic RAM is used as main memory in a computer system as it:

- (a) Consumes less power
- (b) has higher speed
- (c) has lower cell density
- (d) needs refreshing circuitry

> Printed answer: (b) has higher speed

> Answer issue: DRAM is slower than SRAM; it is used for main memory because it is denser, cheaper and uses less power per bit. Of the options, (a) Consumes less power is the usual key.

**31.** 2’s complement of 00000000 is:

- (a) 11111111
- (b) 10000000
- (c) 00000000
- (d) 00000001

> Printed answer: (c) 00000000

**32.** Which of the following is NOT passive elements?

- (a) Resistor
- (b) Bulb
- (c) Op-Amp
- (d) Electric Iron

> Printed answer: "Not Mentioned"

> Answer issue: the op-amp is an active device, so the answer is (c) Op-Amp.

**33.** How to convert a JK Flipflip to T Flipflop ?

- (a) by adding an NOT Gate
- (b) by adding an AND Gate
- (c) by adding an X-OR Gate
- (d) No extra gate is required

> Printed answer: (d) No extra gate is required

**34.** If object is passed by value ______________

- (a) Copy constructor is used to copy the values into temporary object
- (b) Copy constructor is used to copy the values into another object in the function
- (c) Reference to the object is used to access the values of the object
- (d) Reference to the object is used to created new object in its place

> Printed answer: (b) Copy constructor is used to copy the values into another object in the function

**35.** Suppose you have many 4/1 MUXes. You need a 16/1 MUX. How many 4/1 MUX youare required to build a 16/1 MUX :

- (a) 3
- (b) 4
- (c) 5
- (d) 6

> Printed answer: (c) 5

**36.** Consider an array of float. Calculate the difference between the address of the1st and 4th element, assuming float occupies 4 bytes of memory.

- (a) 12
- (b) 4
- (c) 16
- (d) 8

> Printed answer: (a) 12

**37.** In a Johnson counter :

- (a) the output of the first flipflop is connected to the input of the last flipflop
- (b) the output of the last flipflop is connected to the input of the first flipflop
- (c) the inverted output of the last flipflop is connected to the input of the first flipflop
- (d) None

> Printed answer: (c) the inverted output of the last flipflop is connected to the input of the first flipflop

**38.** IP Address of a network is 192.120.105.0. What will be the maximum subnet number fulfilling the condition that each subnet can accommodate at max 14 hosts-

- (a) 20
- (b) 32
- (c) 16
- (d) 8

> Printed answer: (c) 16

**39.** The term ‘%i’ is used for _____ data type too.

- (a) char
- (b) int
- (c) none of the above
- (d) float

> Printed answer: (b) int

**40.** You are working with 3 networks that have the network IDs 192.168.5.0,192.168.6.0 and 192.168.7.0. What subnet mask can you use to combine these addresses into one?

- (a) 255.255.252.0
- (b) 255.255.254.0
- (c) 255.155.240.0
- (d) 255.255.255.252

> Printed answer: (d) 255.255.255.252

> Answer issue: a /30 mask cannot hold three class-C networks; the supernet 192.168.4.0/22 covers .5, .6 and .7, so the answer is (a) 255.255.252.0.

**41.** In an IP packet, what is the maximum size of an IP header?

- (a) 20B,
- (b) 4B,
- (c) 14B,
- (d) 60B

> Printed answer: (d) 60B

**42.** If we apply 0001 to a to the input of a seven-segment decoder then what will be the outputs,

- (a) 0110000 for a seven-segment display with common-cathode
- (b) 1001111 for a seven-segment display with common-anode
- (c) Both A and B are true
- (d) None are true

> Printed answer: (c) Both a and b are true

**43.** What remains always local on the LAN and never goes through a router?

- (a) MAC address
- (b) IP Address
- (c) Logical Address
- (d) None of the above

> Printed answer: (a) MAC address

**44.** If class C inherits class B. And B has inherited class A. Then while creating the object of class C, what will be the sequence of constructors getting called?

- (a) Constructor of C then B, finally of A
- (b) Constructor of A then C, finally of B
- (c) Constructor of A then B, finally C
- (d) Constructor of C then A, finally B

> Printed answer: (c) Constructor of A then B, finally C

**45.** If IP address of a device is 172.192.20.10/20, then what will be the network address in which the device belongs?

- (a) 172.192.0.0
- (b) 172.192.16.10
- (c) 172.192.20.0
- (d) 172.192.16.0

> Printed answer: (d) 172.192.16.0

**46.** An electrical Y network consists of each arm's 1-ohm resistor. The equivalent Delta network will have each arm with:

- (a) 3 ohm
- (b) 1/3 ohm
- (c) 4 ohm
- (d) 1 ohm

> Printed answer: "d) 3 ohm"

> Answer issue: R_delta = 3 R_Y = 3 ohm is right, but that is option (a); option (d) is 1 ohm.

**47.** A Program Counter contains the number 825 and addresses part of the instruction contains the number 24. The effective address in the relative address mode, when an instruction is read from the memory is:

- (a) 849.
- (b) 850
- (c) 801
- (d) 802

> Printed answer: (b) 850

**48.** What will be the output of the following C code?

```c
#include<stdio.h>
void main()
{
int k = 7;
int *p = &k;
int **m = &p;
printf("%d%d%d\n", k, *p, **m);
return 0;
}
```

- (a) 5 5 5
- (b) 5 5 junk value
- (c) 7 7 7
- (d) Compile-time error

> Printed answer: (c) 7 7 7

> Note: the format string has no spaces, so the program prints "777"; `return 0;` in a `void` function draws a compiler diagnostic.

**49.** If V1=50sin (ωt+10) and V2=30sin (ωt+50) then :

- (a) V1 leads V2
- (b) V2 leads V1
- (c) V2 lags V1
- (d) V1 and V2 in phase

> Printed answer: (b) V2 leads V1

**50.** Which one is an example of routed protocol?

- (a) IP
- (b) RIP
- (c) IGRP
- (d) OSPF

> Printed answer: (a) IP

**51.** The average time required to reach a storage location in memory and obtain its contents is called the-

- (a) seek time
- (b) turnaround time
- (c) access time
- (d) transfer time

> Printed answer: (c) access time

**52.** Which routing protocol does not consume the bandwidth of the network?

- (a) A default routing
- (b) Dynamic routing
- (c) Static routing
- (d) None of the above

> Printed answer: (c) Static routing

**53.** Advantage of JK Flip-flop over SR Flipflop is:

- (a) It is faster than SR
- (b) It has no forbidden state
- (c) It has no toggle state
- (d) All of the above

> Printed answer: (b) It has no forbidden state

**54.** What is the expression for Thevenin’s current if there is an external resistance in series with the Rth?

- (a) Vth/It
- (b) Vth/ (Rth-R)
- (c) Vth/ (Rth+R)
- (d) Vth/Rth

> Printed answer: (c) Vth/ (Rth+R)

**55.** In priority encoder:

- (a) first bit is considered don’t care
- (b) higher priority bit is considered don’t care
- (c) lower priority bit is considered don’t care
- (d) None

> Printed answer: (c) lower priority bit is considered don’t care

**56.** Which of the following is NOT the components of a microprocessor?

- (a) ALU
- (b) Register Array
- (c) Hard Disk
- (d) Control Unit

> Printed answer: (c) Hard Disk

**57.** Assume A̅, B̅, C̅ and D̅ represent the complements of A, B, C, and D, respectively. Now in a 4-variable (ABCD) logic circuit K-map (AB makes Row andCD makes Column) the cell of first row and then the third column will be indicated by:

- (a) A B̅ C D
- (b) A̅ B̅ C D̅
- (c) A̅ B̅ C D
- (d) ABCD

> Printed answer: (c) A̅ B̅ C D

**58.** An instruction pipeline can be implemented by means of:

- (a) LIFO buffer
- (b) FIFO buffer
- (c) Stack
- (d) None of the above

> Printed answer: (b) FIFO buffer

**59.** Internet group management protocol (IGMP) ………………….. protocol.

- (a) An error reporting
- (b) A group management
- (c) A transmission
- (d) None of the above.

> Printed answer: (b) A group management

**60.** The r.m.s. value of alternating current is given by steady (D.C.) current which when flowing through a given circuit for a given time produces.

- (a) the more heat than produced by A.C. when flowing through the same circuit,
- (b) the same heat as produced by A.C. when flowing through the same circuit,
- (c) the less heat than produced by A.C. flowing through the same circuit,
- (d) None

> Printed answer: (b) the same heat as produced by A.C. when flowing through the same circuit
