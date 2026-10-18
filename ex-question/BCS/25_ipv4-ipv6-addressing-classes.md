# IPv4/IPv6 host address question with subnets, hosts and address classes

- **Source image:** `25_ipv4-ipv6-addressing-classes.jpg` (original file name `490412670_1232701138858798_4913180421558033192_n.jpg`)
- **Page:** 25 of 63 (folder-wide position, i.e. 22-42 here)
- **Paper / Post:** not shown (header reads only "Previous Exam Questions")
- **Exam date:** not shown
- **Marks:** not shown
- **Printed page number:** 571
- **Prepared by (compilation):** COMPACT IT Written

## Transcription Notes

- The first line of the page is a carry-over bullet ("Then it continues the process which was doing before interrupt.") belonging to the answer of question 3, which is not visible on this image.
- The question's IPv6 address is printed as "3FFE:85B:IFIF :: A9:1234" in the question line and as "3FFE:85B:IFIF::A9:1234" in the answers; transcribed exactly as printed, including the letter "I" in "IFIF".
- The answer to 9 (a)-style lists are reproduced verbatim including the source's grammatical errors.
- The final line ("The high-order (left-most) bits of an IPv6 address are used to identify its type, as shown here:") refers to a figure that does not appear on this page — the figure is [cut off].
- No handwritten marginalia observed on this page.

## Content

- ☞ Then it continues the process which was doing before interrupt.

**4. Given a host IP address in a network is written as both 192.68.25.16/28 and 3FFE:85B:IFIF :: A9:1234.**

**a) Which one is IPv6 address? How many bits are used for IPv6 address? How does the above IPv6 address completely with the addressing scheme?**

**Answer:**

- ☞ 3FFE:85B:IFIF::A9:1234 is IPv6 address.
- ☞ 128 bits are used for IPv6 address.

- An IPv6 address is represented as eight groups of four hexadecimal digits, each group representing 16 bits (two octets, a group sometimes also called a hextet). The groups are separated by colons (:). An example of an IPv6 address is: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- 3FFE:85B:IFIF::A9:1234 is the simplified form of 3FFE:85B:IFIF:0000:0000:0000:00A9:1234

**b) How many subnets and hosts are to be supported by the above mentioned IPv4 address?**

**Answer:** Subnets=4 and total valid host= 2⁴-2=16-2=14 [2ⁿ-2, Here n=host bit]

**c) Classifies IPv4 and IPv6 address.**

**Answer:** Five classes **IPv4** is allows for a range of valid IP addresses, shown in the following table-

- Class A: 0.0.0.0 to 127.255.255.255
- Class B: 128.0.0.0 to 191.255.255.255
- Class C: 192.0.0.0 to 223.255.255.255
- Class D: 224.0.0.0 to 239.255.255.255
- Class E: 240.0.0.0 to 255.255.255.255

**IPv6** addresses come in several types, based on how they represent those interfaces. IPv6 has three types of addresses:

- **Unicast:** An IPv6 unicast address is used to identify a single interface. Packets sent to a unicast address are delivered to that specific interface.
- **Anycast:** IPv6 anycast addresses identify groups of interfaces, which typically belong to different nodes. Packets destined to an anycast address are sent to the nearest interface in the group, as determined by the active routing protocols.
- **Multicast:** An IPv6 a multicast addresses also identifies a group of interfaces, again typically belonging to different nodes. Packets sent to a multicast address are delivered to all interfaces in the group.

The high-order (left-most) bits of an IPv6 address are used to identify its type, as shown here:

[cut off]