# BTCL Assistant Manager (Technical) 05.02.2021 and BTCL Assistant Engineer (CSE) 2017: written parts (TDMA, PCM, fibre link budget, subnetting, SQL, pipelining, MUX)

- **Source:** Scribd document 534777028 "BTCL Assistant Manager Previous Year Question by Stack IT Job Solution" (https://www.scribd.com/document/534777028/BTCL-Assistant-Manager-Previous-Year-Question-by-Stack-IT-Job-Solution). The same file is mirrored on SlideShare (https://www.slideshare.net/slideshow/btcl-assistant-manager-previous-year-question-by-stack-it-job-solution-250514803/250514803) and pdfcoffee. Saved here as the public viewer fragments `page-*.jsonp` and the page background images `img-*.jpg` (circuit figures); text extracted column by column to `scribd-534777028.txt`.
- **Publisher:** Stack IT Job Solution ("StacKit", stackvaly.com), a coaching compilation. Footer watermark "Stack IT Question Bank | 01789741518, 01761719838 | Buy Book: stackvaly.com | Online Exam: exam.stackvaly.com".
- **Pages:** 4 (cover, two content pages, one blank page)
- **Document type:** exam compilation (two papers)

## Transcription Notes

- The cover lists "Exam 1: AM-2021, Exam 2: AM-2017", but the second paper's own banner reads **"Assistant Engineer (CSE)-2017"**. The banner is followed here; the exam is tagged `BTCL AE(CSE) 2017`.
- Pages are two-column; the text layer interleaves the columns, so text was re-read column by column from the span coordinates and checked against the page images.
- **Figures (Q1-Q5 of the 2021 paper)** are drawings on the page-2 image (`img-2-21dfc111cc.jpg`), transcribed as text:
  - Q1: terminal a, 25 Ω to node X; X to node Y 10 Ω; Y to node Z 20 Ω; X to Z 30 Ω (top branch); Y to the bottom rail 5 Ω; Z to the bottom rail 15 Ω; terminal b on the bottom rail.
  - Q2: source 10∠0° V; series 4 Ω; shunt branch 8 Ω in series with -j6 Ω; then series j5 Ω to the load Z_L.
  - Q3: input Vi a triangle wave between +5 and -5; 5 kΩ series resistor; then in parallel to ground a 10 kΩ resistor, a Zener diode and a 10 kΩ load across which Vo is taken.
  - Q5: op-amp; Vin through 10 kΩ into a node that has 10 kΩ to ground and feeds the + input; 100 kΩ from the output back to that node; the - input is grounded. Printed as drawn (the feedback goes to the + input).
- Q4's degree signs are printed as superscript zeros ("20 0 C", "75 0 C"); written as °C here.
- 2021 paper, Q6 "quantize at step size 2 v", "quantification noise ration"; Q9 "Link if of 50km", "conductors" (for connectors), "lunched in to the fiver in order to Tarantian": typos kept.
- 2021 paper, Q10 and Q13 ask the same four protocols in two forms; both are kept as printed.
- 2017 paper, Q6: the code line hidden in the column break is `Char str[] = "abpqx\n";` (read from the raw fragment). Q5 prints "Is" for `ls`. Q18 is printed as "Probably a SQL query", i.e. the coaching's recollection. Q17 and Q18 are given only as topic outlines.
- The bracketed tags "[Stack IT Job Solution-1341]" etc. are the coaching's cross-reference numbers, not exam tags; they are left out of the question text.
- Printed solutions exist only for 2021 Q10, Q12 and Q13; one summary line each.
- **Duplicates:** six 2021 questions are already in `bit to exabyte/` tagged "BTCL AM (Technical) 2021": PCM step size 2 V (`63_...`), TDMA 8 pairs, fibre low-loss windows (`64_...`), the protocol table (`70_...`) and 192.168.10.0/23 (`03_...`, `60_...`). Q1-Q5, Q9 (fibre link budget) and Q12 (sumdigits) are new. The 2017 Assistant Engineer (CSE) paper is **not held anywhere** in `ex-question/`.

## Content

### BTCL Assistant Manager (Technical) 05.02.2021

Bangladesh Telecommunications Company Limited, Recruitment Test-2021, Assistant Manager (Technical) - Date: 05-02-2021 - **Exam taker: BUET** - marks and time not printed - pages 2-3. Document type: exam paper (coaching compilation). A combined EEE/CSE technical paper.

**1.** Find R_ab? *(figure: see notes)*

**2.** Determine the load impedance Z_L that maximizes the average power drawn from the circuit of Figure.(2). What is the maximum average power? *(figure: see notes)*

**3.** Sketch the time Variation of output voltage(VoVst) for given input voltage Vi. Assume Vz =3. *(figure: see notes)*

**4.** The measured equivalent DC Resistance between two line for the HT winding of a 11/0.415kv 200kva, 3φ Δ-Y Conductor distribution Transformer is 6 ohm at 20 °C. Calculate the DC Resistance of each phase winding in the HT Side of Transformer for 75 °C. Where temperature co efficient α =0.00393/°C

**5.** Find Vo/Vin *(figure: see notes)*

**6.** Consider PCM system with a uniform quantize at step size 2 v. The input is a sinusoidal signal with amplitude of 10v. Calculate the signal to quantification noise ration in dB and number of bits per sample to be used in the system.

**7.** Assume a TDMA Communication system having 8 transmitter-Receiver pairs. Each is sampled at 8khz that generated 16 bit per sample. If two synchronous bits are used in each frame. Calculate the data rate of the TDMA Link.

**8.** Where are the Low loss transmission windows of silicon based optical fiber and which window is the most popular in communication and wave. Draw diagram of a long haul WDM Transmission system.

**9.** A 1550nm fiber optic transmission Link if of 50km length without repeating with a single mode fiber having loss of 0.2dB /km. The fiber is joined every two km with conductors each with 0.5dB loss. Determine the minimum average power which should be lunched in to the fiver in order to Tarantian an average optical power level of 10 micro-Watt at the receiver.

**10.** Identify the Protocols
1. Sending Mail from sender computer to receivers mail server.
2. Dynamically assign IP Address
3. IP Address to MAC Address
4. Send error to the source ip of the originating packet.

> Printed answer: SMTP, DHCP, ARP, ICMP.

**11.** An IP Address 192.168.10.0/23. Find-
1. Subnet Mask
2. Unique ID(Host)
3. Broadcast ID
4. Last usable host address.

**12.** Write a function sumdigits to find output like below

```text
Input: 123
Output: 6
```

```c
#include <stdio.h>
int main()
{
 int n, sum;
 printf("Enter an integer\n");
 scanf("%d", &n);
 sum= sumdigits(n);
 printf("Sum of digits of %d = %d\n", n, sum);
 return 0;
}
```

> Printed answer: a recursive `sumdigits` returning `num%10 + sumdigits(num/10)`, 0 when `num==0`.

**13.** For the following description of various IP networking protocols write down the protocol name and its full form in the following table:

| Description | Answer |
|---|---|
| Sending mail from sender computer to receivers mail server | |
| Network management protocol used to automate the process of configuring devices on IP networks | |
| Mapping a dynamic internet protocol address (IP address) to a permanent physical machine address in a local area network(LAN) | |
| Messages are typically used for diagnostic or control purpose or generated in response to errors in IP operations | |

> Printed answer: SMTP (Simple Mail Transfer Protocol), DHCP (Dynamic Host Configuration Protocol), ARP (Address Resolution Protocol), ICMP (Internet Control Message Protocol).

---

### BTCL Assistant Engineer (CSE) 2017

Bangladesh Telecommunications Company Limited (BTCL), Assistant Engineer (CSE)-2017 - **Exam taker: BUET** - Exam Date: 2017 (day not printed) - Total Marks-100 [Dept. 40 Written, Non Dept. 60 MCQ] - page 3. Document type: exam paper (coaching compilation, partly recollected). Per-question marks not printed.

**1.** Design 4x1 MUX with two selection line & 4 input (A,B,C,D).

**2.** Find the smallest and second smallest elements in an array.

**3.** Salesperson (ID, Name, Age, Salary), Customer (ID, Name, City, Industry, Type) Orders (Number, order_date, cust_id, salesperson_id, Amount). Given table above find the following:
a) The names of all salespeople that have an order with Samsonic.
b) The names of all salespeople that do not have any order with Samsonic.
c) The name of all salespeople that have 2 or more orders.

**4.** What is pipelining? Explain execution stages?

**5.** Linux command explain with example: mkdir, passwd, telnet, cat, Is, ping, su, nslookup.

**6.** Find the output of the following program

```c
#include<stdio.h>
#define N 7
int main() {
    Char str[] = "abpqx\n";
    int i = 0;
    for(i=0; i<N-2; i++)
        if(i%2)
            printf("%c", str[i]++);
        else
            printf("%c", str[i]--);
    return 0;
}
```

**7.** What's MAC flood in switch? How to prevent the MAC Flooding Attack?

**8.** What are the disadvantages of manual/static IP? Name the protocol of dynamic IP assigning. DHCP how work?

**9.** What is query to display even rows from the employees table?

**10.** How to get distinct records from the employees table without using distinct keyword.

**11.** Write an SQL query to print the name of employees having the highest salary in each department.

**12.** Subnet the class C IP address 195.1.1.0 So that you have at least 2 subnets each subnet must have room for 48 hosts. What are the two possible subnet masks?

**13.** (a) The attenuation of a signal is 10dB. What is the final signal power of it was originally 5W?
(b) A signal has passed through three cascaded amplifiers, each with a 4dB gain.
(c) If the bandwidth of the channel is 5Kbps, how long does it take to send a frame of 100000 bits out of this device?

**14.** Given an IP address 10.2.3.20/22, Find out the number of host and subnet mask.

**15.** Write a program to find out the minimum number from a series.

**16.** Using pipeline calculate the value of fetch and execution cycle.

**17.** Given a database table with some column
a) find out the min salary from table
b) find out a matched string

**18)** Probably a SQL query
a) show the branch name with the minimum balance
b) select all dept_name, roll from Student
