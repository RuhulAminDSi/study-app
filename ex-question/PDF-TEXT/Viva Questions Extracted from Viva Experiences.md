# Viva Questions Extracted from Viva Experiences

| | |
|---|---|
| Source PDF | `Viva Questions Extracted from Viva Experiences.pdf` |
| Pages | 45 |
| What it is | A compiled viva (oral exam) question bank with model answers, gathered from candidates' viva experiences for bank IT / ICT officer recruitment in Bangladesh (several questions refer to Sonali Bank and Bangladesh Bank). No exam, post or date is stated. |
| Coverage | Banking and payment systems (BACPS, BEFTN, RTGS, NPSB, CBS, MFS), networking, security, data structures, OOP/Java, web, databases, data centers, cloud/AI/IoT, computer hardware, software testing, ERP, Sonali Bank / Bangladesh Bank general knowledge, digital banking. |
| Extraction | Text layer extracted with PyMuPDF. A repeated page header "muEID" was removed; lines broken by the page width were rejoined; bullet glyphs became Markdown list items; three two-column tables (pages 10, 20, 30) were rebuilt as Markdown tables. Question numbering restarts at 1 for each topic block, as in the PDF. Wording is unchanged (including the truncated "blockchain technolog" on page 3). |

## Page 1

BACPS (Bangladesh Automated Cheque Processing System): BACPS is Bangladesh's electronic cheque clearing system. It uses MICR and cheque image processing to clear cheques quickly under the Bangladesh Automated Clearing House (BACH).

BEFTN (Bangladesh Electronic Funds Transfer Network): BEFTN is an electronic fund transfer system used for low-value, bulk transactions such as salary payments, utility bills, pensions, and dividends. Transactions are processed in batches, not instantly.

RTGS (Real Time Gross Settlement): RTGS is used for high-value interbank fund transfers. Transactions are processed individually and in real time, so the money is transferred immediately. This is controlled by central bank.

**Difference between BEFTN and RTGS.**

- BEFTN: Processes transactions in batches and is mainly used for regular fund transfers.
- RTGS: Processes high-value transactions individually in real time.

Bangla QR: Bangla QR is Bangladesh Bank's national QR payment standard. It allows customers to pay using one QR code from any participating bank, Mobile Financial Service (MFS) like bKash/Nagad, or Payment Service Provider (PSP) app.

CBS (Core Banking System): CBS is the centralized banking software that connects all branches of a bank. It manages accounts, customer information, loans, deposits, and transactions in real time.

Retail Banking: Retail banking provides banking services directly to individual customers and small businesses. Services include savings accounts, current accounts, loans, debit cards, and internet banking.

Agent Banking: Agent banking allows banks to provide basic banking services through authorized agents instead of branches. It mainly serves rural and remote areas to increase financial inclusion.

Online Banking: Online banking allows customers to access their bank accounts and perform transactions through a website or internet portal using a computer or mobile device.

SMS Banking: SMS banking provides banking services through text messages, such as balance inquiries, transaction alerts, mini statements, and OTP notifications.

MICR (Magnetic Ink Character Recognition): MICR is a technology used to read the special magnetic characters printed at the bottom of cheques. It speeds up cheque verification and clearing.

Batch Processing: Batch processing is a method where multiple transactions are collected and processed together at scheduled times instead of immediately. BEFTN uses batch processing.

## Page 2

ATM Card (Automated Teller Machine Card): An ATM card is a bank-issued debit card that allows customers to withdraw cash, check balances, transfer funds, and perform other banking services through an ATM.

**What is ATM?**

ATM (Automated Teller Machine) is an electronic banking machine that allows customers to perform transactions like cash withdrawal, balance inquiry, and fund transfer without visiting a bank branch.

**How does an ATM work?**

An ATM reads the customer's card information, verifies PIN details with the bank server, checks account balance, and completes the requested transaction.

**How does ATM work in a network?**

ATM connects to the bank's network through a secure communication link. The ATM sends transaction requests to the bank server, which verifies and responds.

POS (Point of Sale) / POP (Point of Purchase): A POS terminal is the payment machine used in shops and stores where customers pay using debit cards, credit cards, or mobile payments.

Payment Gateway: A payment gateway is a secure online payment service that encrypts, authorizes, and processes digital payments for e-commerce websites and mobile applications.

SWIFT (Society for Worldwide Interbank Financial Telecommunication): SWIFT is a secure international messaging network that allows banks around the world to exchange payment instructions for international money transfers. It does not transfer money directly; it securely sends payment messages between banks.

PayPal: PayPal is an online payment platform that enables individuals and businesses to send and receive money electronically, especially for international transactions and online shopping.

FinTech (Financial Technology): FinTech refers to the use of technology to improve and automate financial services. Examples include mobile banking (bKash, Nagad), digital wallets, online lending, and digital payment systems.

Blockchain: Blockchain is a decentralized digital ledger that stores transaction records across many computers. Once recorded, data is very difficult to alter, making blockchain secure and transparent.

**Difference between Blockchain and Database.**

- Database: Usually controlled by a central authority and allows modification of data.

## Page 3

- Blockchain: Distributed across multiple nodes and provides tamper-resistant records.

Bitcoin: Bitcoin is the first decentralized cryptocurrency. It operates on blockchain technology and allows users to transfer digital money without a central bank or government.

Cryptocurrency: A cryptocurrency is a digital currency secured by cryptography and usually operates on decentralized blockchain networks.

**Difference between Cryptocurrency and Traditional Currency.**

- Cryptocurrency: Digital, decentralized, and uses blockchain technology.
- Traditional Currency: Issued and controlled by governments and central banks.
- Smart Contract: A Smart Contract is a self-executing digital contract where terms are automatically enforced using blockchain technolog

**1. What is a Firewall?**

A Firewall is a network security device or software that monitors and filters incoming and outgoing network traffic. It blocks unauthorized access while allowing legitimate communication.

**2. How does a Firewall work?**

A firewall checks network packets based on predefined security rules. It allows trusted traffic and blocks suspicious or unauthorized traffic.

**3. What is a Router?**

A Router is a networking device that connects different networks and forwards data packets between them. It uses IP addresses to determine the best path.

**4. What is the main function of a Router?**

The main function of a router is to route data packets between different networks and provide Internet connectivity by selecting the best path.

**5. What is a Switch?**

A Switch is a networking device that connects multiple devices within the same LAN. It forwards data using MAC addresses.

**6. Difference between Switch and Router.**

## Page 4

- Switch: Connects devices within the same network using MAC addresses.
- Router: Connects different networks using IP addresses.

**7. Which OSI layer does a Switch work on?**

A standard switch works at the Data Link Layer (Layer 2) of the OSI model. Layer 3 switches can also operate at the Network Layer.

**8. Which OSI layer does a Router work on?**

A router works at the Network Layer (Layer 3) of the OSI model because it forwards packets using IP addresses.

**9. What is VLAN?**

A VLAN (Virtual Local Area Network) is a logical grouping of devices within a LAN. It improves security and reduces unnecessary network traffic.

**10. What is VPN?**

A VPN (Virtual Private Network) creates a secure, encrypted connection over the Internet. It protects data and hides the user's IP address.

**11. How does VPN work?**

A VPN encrypts user data and sends it through a secure tunnel to a VPN server. The server forwards the traffic to the destination securely.

**12. What is DHCP?**

DHCP (Dynamic Host Configuration Protocol) is a protocol that automatically assigns IP addresses and other network settings to devices.

**13. How does DHCP work?**

When a device joins a network, it requests an IP address from the DHCP server. The server assigns an available IP address automatically.

**14. Difference between Static IP and Dynamic IP.**

- Static IP: Fixed IP address that does not change.
- Dynamic IP: Automatically assigned by DHCP and may change over time.

**15. What is Internet?**

## Page 5

The Internet is a worldwide network of interconnected computers that communicate using the TCP/IP protocol.

**16. What is Intranet?**

An Intranet is a private network used within an organization. Only authorized users can access it.

**17. What is Extranet?**

An Extranet is an extension of an intranet that allows limited access to external users such as customers, suppliers, or business partners.

**18. Difference between Internet and Intranet.**

- Internet: Public network accessible by everyone.
- Intranet: Private network accessible only to authorized members of an organization.

**19. Does Sonali Bank use an Intranet?**

Yes. Banks like Sonali Bank use an Intranet to securely connect branches and allow employees to access internal banking systems.

**20. What is Framing?**

Framing is the process of dividing data into smaller units called frames for transmission over a network. Each frame contains addressing and error-checking information.

**21. Which layer performs framing?**

The Data Link Layer performs framing before transmitting data across the physical network.

**22. Which OSI layer is responsible for framing?**

The Data Link Layer (Layer 2) is responsible for framing, physical addressing, and error detection.

**23. What is a USB-based Router?**

A USB-based Router is a portable router that uses a USB modem or mobile broadband dongle to provide Internet access. It is commonly used for mobile or backup connectivity.

**1. What is DNS?**

DNS (Domain Name System) translates domain names (e.g., google.com) into IP addresses. It allows users to access websites using names instead of numbers.

## Page 6

**2. What is DHCP?**

DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network settings to devices. It reduces manual network configuration.

**3. How does DHCP work?**

A device requests an IP address from the DHCP server. The server assigns an available IP address along with subnet mask, gateway, and DNS information.

**4. What is DHCP Lease Time?**

DHCP Lease Time is the duration for which a device can use an assigned IP address. After it expires, the device renews or receives a new IP.

**5. What is Active Directory?**

Active Directory (AD) is Microsoft's directory service used to manage users, computers, and resources in a network. It provides centralized authentication and access control.

**6. What is Domain Controller?**

A Domain Controller (DC) is a server that runs Active Directory services. It authenticates users, manages security policies, and controls access to network resources.

**7. What is VPN?**

A VPN (Virtual Private Network) creates a secure, encrypted connection over the Internet. It protects data and hides the user's IP address.

**8. How does VPN work?**

A VPN encrypts data and sends it through a secure tunnel to a VPN server. The server then forwards the traffic securely to its destination.

**9. What is VPN Tunneling?**

VPN Tunneling is the process of securely transmitting encrypted data through a virtual tunnel over a public network. It protects data from interception.

**10. What is VLAN?**

A VLAN (Virtual Local Area Network) is a logical division of a physical network into separate broadcast domains. It improves security and network management.

**11. Why is VLAN used?**

## Page 7

VLAN is used to improve network security, reduce broadcast traffic, and logically separate users without changing physical connections.

**12. Difference between VPN and VLAN.**

- VPN: Securely connects remote users or networks over the Internet.
- VLAN: Logically separates devices within the same local network.

**13. What is a Router?**

A Router is a networking device that connects different networks and forwards data packets using IP addresses.

**14. What is the main function of a Router?**

The main function of a router is to route data between different networks and provide Internet connectivity.

**15. What is a Switch?**

A Switch connects multiple devices within the same LAN. It forwards data using MAC addresses.

**16. Difference between Switch and Router.**

- Switch: Connects devices within the same LAN using MAC addresses.
- Router: Connects different networks using IP addresses.

**17. What is a Repeater?**

A Repeater is a network device that regenerates weak signals to extend the communication distance. It works at the Physical Layer.

**18. What is Topology?**

Network Topology is the physical or logical arrangement of devices and communication links in a network.

**19. Types of Network Topology.**

The main types are Bus, Star, Ring, Mesh, Tree, and Hybrid Topology.

**20. Which topology is commonly used in offices?**

Star Topology is most commonly used in offices because it is easy to manage, reliable, and simple to troubleshoot.

## Page 8

**21. What is PAN?**

PAN (Personal Area Network) is a small network that connects personal devices within a short distance, usually around 10 meters.

**22. Give an example of PAN.**

A smartphone connected to a wireless headset or smartwatch via Bluetooth is an example of a PAN.

**23. Difference between TCP/IP and OSI Model.**

- OSI Model: A 7-layer conceptual reference model for networking.
- TCP/IP Model: A practical 4-layer protocol suite used on the Internet.

**24. Name the seven layers of the OSI Model.**

Physical → Data Link → Network → Transport → Session → Presentation → Application.

**25. What is Framing?**

Framing is the process of dividing data into frames by adding headers and trailers for transmission over a network.

**26. Which layer performs Framing?**

The Data Link Layer performs framing before sending data over the physical medium.

**27. Which OSI layer performs Framing?**

The Data Link Layer (Layer 2) of the OSI model is responsible for framing.

**1. What is 10Base-T?**

10Base-T is an Ethernet standard that provides 10 Mbps data transmission over twisted-pair (UTP) cables. It commonly uses RJ-45 connectors.

**2. What is the maximum distance of 10Base-T?**

The maximum cable length for 10Base-T is 100 meters (328 feet) between a device and a switch or hub.

**3. How are Head Office and Branch connected?**

Head Office and Branches are connected through WAN (Wide Area Network) using technologies like MPLS, VPN, or leased lines.

## Page 9

**4. What protocols are used between branches?**

Common protocols include TCP/IP, MPLS, IPsec VPN, OSPF, BGP, and RIP, depending on the network design.

**5. What physical media connect bank branches?**

Bank branches are mainly connected using optical fiber, leased lines, or MPLS links. In some cases, microwave or cellular links are used as backup.

**6. Can a switch communicate among multiple computers?**

Yes. A switch connects multiple computers within the same LAN and forwards data only to the intended destination using MAC addresses.

**7. What should you do if a branch PC has no internet?**

Check the network cable, IP configuration, gateway, DNS, switch/router status, and ISP/WAN connection. Then troubleshoot step by step.

**8. What is a Routing Protocol?**

A Routing Protocol is a set of rules that enables routers to exchange routing information and determine the best path for data.

**9. Name some Routing Protocols.**

Common routing protocols are RIP, OSPF, EIGRP, BGP, and IS-IS.

**10. Difference between Router and Switch.**

- Router: Connects different networks using IP addresses.
- Switch: Connects devices within the same LAN using MAC addresses.

**11. Is a Hub obsolete? Why?**

Yes. A Hub is mostly obsolete because it sends data to all connected devices, causing collisions and poor performance. Switches are faster and more secure.

**12. What is a MAC Address?**

A MAC (Media Access Control) Address is a unique 48-bit hardware address assigned to a network interface card (NIC). It identifies devices within a local network.

**13. Difference between Router, Hub, and Switch.**

## Page 10

| Device | Function |
|---|---|
| Hub | Broadcasts data to all connected devices. |
| Switch | Sends data only to the intended device using MAC addresses. |
| Router | Connects different networks and routes packets using IP addresses. |

**14. Can a network be built using only a Router?**

No. A router alone cannot efficiently connect multiple wired devices because it has limited LAN ports. A switch is usually needed to expand the network.

**15. Can a network be built using only a Hub?**

Yes, but not recommended. A hub can connect multiple devices, but it broadcasts all traffic, causing collisions and poor network performance.

**16. What is ISO?**

ISO (International Organization for Standardization) is an international organization that develops standards to ensure quality, safety, and interoperability across industries.

**17. How is ISO applied in Hardware?**

ISO standards ensure hardware quality, compatibility, safety, and manufacturing consistency, allowing devices from different vendors to work together.

**18. How is ISO applied in Software?**

ISO provides standards for software quality, security, testing, and development processes, such as ISO/IEC 25010 and ISO/IEC 27001.

**19. How is ISO applied in Networking?**

ISO developed the OSI (Open Systems Interconnection) Model, which standardizes how network devices communicate and ensures interoperability between different vendors.

**20. What is Cisco?**

Cisco is a multinational technology company that manufactures networking hardware and develops networking, security, and collaboration solutions.

**21. What does Cisco do?**

Cisco designs and supplies routers, switches, firewalls, wireless devices, network management software, and cybersecurity solutions for enterprises and service providers.

## Page 11

**1. How are all bank branches connected with each other?**

Bank branches are connected through a Wide Area Network (WAN) using MPLS, leased lines, or secure VPNs. This enables secure communication with the Head Office and data centers.

**2. What is Multicast?**

Multicast is a communication method where data is sent from one sender to a selected group of receivers. It saves bandwidth by sending one copy to multiple intended users.

**3. What is Broadcast?**

Broadcast is a communication method where data is sent from one device to all devices on the same network segment.

**4. Difference between Multicast and Broadcast.**

- Broadcast: Sends data to every device in the network.
- Multicast: Sends data only to a specific group of subscribed devices.

**5. What is DHCP?**

DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network settings to devices on a network.

**6. Describe DHCP.**

DHCP works through a DHCP server, which automatically provides an IP address, subnet mask, default gateway, and DNS server to client devices.

**7. What is HTTPS?**

HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP. It encrypts communication between a web browser and a web server using SSL/TLS.

**8. Is HTTPS a protocol?**

Yes. HTTPS is a communication protocol used for secure web browsing by combining HTTP with SSL/TLS encryption.

**9. Which OSI layer does HTTPS work on?**

HTTPS operates at the Application Layer (Layer 7) of the OSI model. It uses TLS/SSL to provide secure communication.

**10. Difference between IPv4 and IPv6.**

## Page 12

- IPv4: 32-bit address, about 4.3 billion unique addresses.
- IPv6: 128-bit address, provides a vastly larger address space and improved security/features.

**11. What is Subnetting?**

Subnetting is the process of dividing a large network into smaller subnetworks. It improves network performance, management, and security.

**12. What is VPN?**

A VPN (Virtual Private Network) creates a secure, encrypted connection over the Internet. It protects data and allows secure remote access.

**13. How does VPN work?**

A VPN encrypts user data and sends it through a secure tunnel to a VPN server. The server then forwards the traffic to the destination securely.

**14. What is PING?**

PING is a network utility used to test connectivity between two devices. It also measures the response time (latency).

**15. What is the full form of PING?**

PING stands for Packet Internet Groper.

**16. What is Polarization?**

Polarization is the orientation of an electromagnetic wave's electric field. It is important in wireless, microwave, and satellite communication to improve signal quality.

**17. What is SMTP?**

SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending emails between mail servers and from email clients to mail servers.

**18. What are SMTP port numbers?**

- Port 25: Standard SMTP (server-to-server).
- Port 587: Secure SMTP with STARTTLS (most common).
- Port 465: SMTP over SSL/TLS.

**19. What is IPv4?**

## Page 13

IPv4 (Internet Protocol Version 4) is a 32-bit addressing protocol used to identify devices on a network. Example: 192.168.1.1.

**20. What is IPv6?**

IPv6 (Internet Protocol Version 6) is a 128-bit addressing protocol designed to replace IPv4.

Example: 2001:db8::1.

**21. Difference between IPv4 and IPv6.**

- IPv4: 32-bit, dotted-decimal notation, limited address space.
- IPv6: 128-bit, hexadecimal notation, much larger address space and built-in support for modern networking.

**22. What is HTTPS?**

HTTPS (HyperText Transfer Protocol Secure) secures web communication by encrypting data using SSL/TLS, protecting it from eavesdropping and tampering.

**23. What is SMTP?**

SMTP (Simple Mail Transfer Protocol) is used to send emails, while protocols like IMAP or POP3 are used to receive emails.

### Data Structures & Algorithms

**1. Why do we use Tree data structures?**

A Tree is used to store hierarchical data efficiently, such as file systems and databases. It provides fast searching, insertion, and deletion compared to linear structures.

**2. Array vs Linked List — which one is better?**

Neither is always better; it depends on the application. Arrays are faster for indexing, while Linked Lists are better for frequent insertions and deletions.

**3. Difference between Array and Linked List.**

- Array: Stores elements in contiguous memory and supports fast random access.
- Linked List: Stores elements using nodes connected by pointers, allowing dynamic memory allocation.

**4. What are the problems with Array and Linked List?**

## Page 14

- Array: Fixed size and expensive insertion/deletion due to shifting elements.
- Linked List: Slow random access and requires extra memory for pointers.

**5. Why is Binary Search faster than Sequential Search?**

Binary Search repeatedly divides the search space in half, giving O(log n) time complexity. Sequential Search checks elements one by one, taking O(n) time.

**6. Can Divide and Conquer be applied to Linked Lists?**

Yes, but not efficiently for searching because linked lists don't support direct access. It is commonly used for algorithms like Merge Sort on linked lists.

**7. Difference between Stack and Queue.**

- Stack: Follows LIFO (Last In, First Out); insertion and deletion occur at the same end.
- Queue: Follows FIFO (First In, First Out); insertion occurs at the rear and deletion at the front.

### Computer Science Fundamentals

**8. What is a Tree?**

A Tree is a non-linear data structure made up of nodes connected by edges. It has a root node and parent-child relationships.

**9. Why are Trees used?**

Trees are used to represent hierarchical data and enable efficient searching, sorting, and indexing. Examples include file systems and database indexes.

**10. What is an Array?**

An Array is a linear data structure that stores elements of the same type in contiguous memory locations. It allows fast access using an index.

**11. What is a Linked List?**

A Linked List is a linear data structure where each node contains data and a pointer to the next node. It supports dynamic memory allocation and easy insertion/deletion.

**12. What is Stack?**

A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Common operations are Push (insert) and Pop (remove).

## Page 15

**13. What is Queue?**

A Queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are enqueued at the rear and dequeued from the front.

**1. What is Phishing?**

Phishing is a social engineering attack where attackers use fake emails, messages, or websites to steal sensitive information like passwords and banking details.

**2. What is Honeypot?**

A Honeypot is a security system designed to attract attackers and monitor their activities. It helps organizations detect and analyze attacks.

**3. What is Data Encryption?**

Data Encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) to protect it from unauthorized access.

**4. What encryption tools/algorithms are available?**

Common encryption algorithms include AES, RSA, DES, 3DES, Blowfish, and ECC. Tools include VeraCrypt, BitLocker, and OpenSSL.

**5. What is Plaintext?**

Plaintext is the original readable data before encryption is applied.

**6. What is Ciphertext?**

Ciphertext is the encrypted, unreadable form of data produced after applying an encryption algorithm.

**7. Name some antivirus software.**

Examples: Windows Defender, Kaspersky, Bitdefender, Norton, McAfee, Avast, and ESET.

**8. What is Firewall?**

A Firewall is a network security device/software that monitors and filters incoming and outgoing traffic based on security rules.

## Page 16

**9. How does Firewall work?**

A firewall checks packets against predefined rules and allows legitimate traffic while blocking unauthorized or suspicious connections.

**10. What is NGFW?**

NGFW (Next-Generation Firewall) is an advanced firewall that provides traditional firewall features along with application control, intrusion prevention, and threat intelligence.

**11. What is WAF?**

WAF (Web Application Firewall) protects web applications by filtering and monitoring HTTP/HTTPS traffic to prevent attacks like SQL injection and XSS.

**12. Difference between NGFW and WAF.**

- NGFW: Protects the entire network from various threats.
- WAF: Specifically protects web applications from web-based attacks.

**13. What is IDS?**

IDS (Intrusion Detection System) monitors network traffic and detects suspicious activities. It generates alerts but does not block attacks automatically.

**14. What is IPS?**

IPS (Intrusion Prevention System) detects and automatically blocks malicious network activities in real time.

**15. Difference between IDS and IPS.**

- IDS: Detects threats and sends alerts.
- IPS: Detects threats and takes preventive action by blocking them.

**16. How do you identify a phishing attack?**

Check for suspicious links, unknown senders, urgent requests, spelling mistakes, fake websites, and requests for sensitive information.

**17. What is Malware?**

Malware is malicious software designed to damage systems, steal information, or gain unauthorized access.

**18. Types of Malware.**

## Page 17

Common types include Virus, Worm, Trojan, Ransomware, Spyware, Adware, Rootkit, and Keylogger.

**19. What is Antivirus?**

Antivirus is security software that detects, prevents, and removes malware from computer systems.

**20. Difference between Plaintext and Ciphertext.**

- Plaintext: Original readable information.
- Ciphertext: Encrypted unreadable information.

**21. What is HTTPS?**

HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP that encrypts communication between a browser and server using TLS/SSL.

**22. Which OSI layer does HTTPS work on?**

HTTPS works at the Application Layer (Layer 7) of the OSI model.

**23. What is DoS?**

DoS (Denial of Service) is an attack that makes a service unavailable by overwhelming it with excessive requests from a single source.

**24. What is DDoS?**

DDoS (Distributed Denial of Service) is an attack where multiple compromised systems send massive traffic to make a service unavailable.

**25. Difference between DoS and DDoS.**

- DoS: Attack comes from one source.
- DDoS: Attack comes from multiple distributed sources.

**26. What is Two-Factor Authentication (2FA)?**

2FA adds an extra security layer by requiring two verification methods, such as a password and OTP.

**27. What is Multi-Factor Authentication (MFA)?**

MFA requires two or more authentication factors, such as password, OTP, fingerprint, or security token.

## Page 18

**28. What is DMZ?**

DMZ (Demilitarized Zone) is a separate network area that hosts public-facing services while isolating the internal network.

**29. Difference between DMZ and Internal Zone.**

- DMZ: Contains public services like web servers and has limited access.
- Internal Zone: Contains private systems and sensitive organizational data.

**30. How can DoS attacks be prevented?**

Use firewalls, rate limiting, traffic monitoring, load balancing, and DDoS protection services.

**31. What is Penetration Testing?**

Penetration Testing is an authorized security test where ethical hackers simulate attacks to find vulnerabilities.

**32. Difference between Hacking and Ethical Hacking.**

- Hacking: Unauthorized access to systems.
- Ethical Hacking: Authorized testing to improve security.

**33. How do you secure a database?**

Use strong authentication, encryption, access control, regular backups, patch updates, and SQL injection prevention.

**34. If a social media account is hacked, is it phishing?**

Not necessarily. It may be caused by phishing, weak passwords, malware, or other attacks. Phishing is only one possible method.

**35. What is Host Security?**

Host Security protects individual computers, servers, and devices from unauthorized access and malware.

**36. What is Data Security?**

Data Security protects information from unauthorized access, modification, disclosure, or destruction.

**37. Is Phishing ethical or unethical?**

## Page 19

Phishing is unethical and illegal when used to steal information. Authorized phishing simulations for security training are ethical.

**38. What are the basic principles of Security?**

The main principles are Confidentiality, Integrity, Availability, Authentication, Authorization, and Non-repudiation.

**39. What is the CIA Triad?**

The CIA Triad is the foundation of information security:

- Confidentiality: Protects data from unauthorized access.
- Integrity: Ensures data accuracy and prevents unauthorized modification.
- Availability: Ensures systems and data are accessible when needed.

**1. What is a Data Center?**

A Data Center is a facility that houses servers, storage systems, networking equipment, and security systems to store, process, and manage data and applications.

**2. What hardware is required in a Data Center?**

Required hardware includes servers, storage devices, routers, switches, firewalls, racks, UPS, backup systems, and monitoring devices.

**3. What components are found in a Data Center?**

Main components are computing systems, storage, networking equipment, power systems, cooling systems, security systems, and monitoring systems.

**4. What security systems are used in a Data Center?**

Security systems include CCTV surveillance, biometric access control, fire detection, fire suppression systems, security guards, and network security tools.

**5. Why is a cooling system necessary?**

Servers generate a large amount of heat. Cooling systems maintain proper temperature and humidity to prevent hardware failure and ensure continuous operation.

**6. UPS vs IPS—which is used in a Data Center and why?**

## Page 20

UPS (Uninterruptible Power Supply) is used in data centers because it provides backup power during electricity failure and prevents sudden shutdowns.

IPS (Intrusion Prevention System) is a security device, not a power backup system.

**7. What problems could occur if a computer does not power on?**

Possible causes include power supply failure, faulty cables, motherboard issues, RAM problems, overheating, or hardware failure.

**8. What network monitoring tools are used in a Data Center?**

Common tools include Nagios, Zabbix, SolarWinds, PRTG, and Cisco monitoring tools to monitor servers, networks, and performance.

**9. Why is cooling required in a Data Center?**

Cooling prevents overheating of servers and networking equipment. It maintains system reliability and increases hardware lifespan.

**10. UPS or IPS—which should be used and why?**

A UPS should be used for power backup in a data center. An IPS is used for network security and cannot provide electrical backup.

**11. Difference between Tier II and Tier III Data Centers.**

| Tier II | Tier III |
|---|---|
| Has redundant power and cooling components | Has multiple redundant systems |
| Requires some downtime for maintenance | Allows maintenance without shutdown |
| Lower availability | Higher availability (around 99.982%) |

**12. What is Disaster Recovery Site (DRS)?**

A Disaster Recovery Site (DRS) is a backup facility that maintains copies of critical systems and data to restore operations after disasters or failures.

**13. Difference between Data Center and DRS.**

- Data Center: Primary location where daily operations and data processing occur.
- DRS: Backup location used during emergencies or disasters.

**14. What should be done if the bank database crashes?**

## Page 21

First, identify the cause and isolate the problem. Then restore data from backups or switch to the Disaster Recovery Site (DRS) to continue banking operations while recovery is performed.

**2. Do you know Python?**

Yes. Python is a high-level, interpreted programming language known for its simple syntax and extensive libraries.

**3. Why is Python so popular?**

Python is popular because it is easy to learn, readable, cross-platform, and has a rich ecosystem of libraries for web development, automation, data science, and AI.

**4. What Java Framework have you used?**

Common Java frameworks include Spring Boot, Spring MVC, Hibernate, and JavaServer Faces (JSF). (Mention the one you actually know.)

**5. Advantages of Java Framework.**

Java frameworks reduce development time by providing pre-built components, security, dependency management, scalability, and easier maintenance.

**6. Do you know App Development?**

Yes. Mobile app development involves creating applications for Android or iOS using languages like Java, Kotlin, Flutter (Dart), or Swift.

**7. Difference between Java and Kotlin.**

- Java: Older, more verbose, widely used.
- Kotlin: Modern, concise, null-safe, and officially recommended for Android development.

**8. What is an API?**

API (Application Programming Interface) is a set of rules that allows different software applications to communicate and exchange data.

**9. How does an API work?**

A client sends a request to the API, the API processes it, communicates with the server or database, and returns a response.

## Page 22

**10. What is a Mobile Operating System?**

A Mobile Operating System is software that manages smartphone hardware and applications. Examples include Android and iOS.

**11. What Java Frameworks do you know?**

Popular Java frameworks are Spring Boot, Spring MVC, Hibernate, Struts, and JSF.

**12. Advantages of Spring Boot.**

Spring Boot enables rapid development, auto-configuration, embedded servers, simplified dependency management, and microservices support.

**13. What is Hibernate?**

Hibernate is a Java ORM (Object Relational Mapping) framework that maps Java objects to database tables and simplifies database operations.

**14. Why is Python widely used in AI?**

Python offers powerful AI libraries such as TensorFlow, PyTorch, Scikit-learn, and Keras, making AI development faster and easier.

**15. What is OOP?**

Object-Oriented Programming (OOP) is a programming paradigm that organizes software using objects and classes.

**16. Advantages of OOP.**

OOP provides code reusability, modularity, scalability, easier maintenance, and better security through encapsulation.

**17. What is Polymorphism?**

Polymorphism allows the same method or interface to perform different behaviors depending on the object.

**18. Advantages of Polymorphism.**

It improves code flexibility, reusability, and maintainability by allowing one interface to support multiple implementations.

**19. What is a Class?**

## Page 23

A Class is a blueprint or template that defines the properties and behaviors of objects.

**20. What is a Superclass?**

A Superclass is the parent class whose properties and methods are inherited by another class.

**21. What is a Subclass?**

A Subclass is a child class that inherits properties and methods from its superclass.

**22. What is Multiple Inheritance?**

Multiple Inheritance means inheriting from more than one parent class. Java does not support it for classes but supports it through interfaces.

**23. Where are Objects created in Java?**

Objects are created in the Heap Memory using the new keyword.

**24. What are the basic features of OOP?**

The four main features are Encapsulation, Inheritance, Polymorphism, and Abstraction.

**25. What is Encapsulation?**

Encapsulation is wrapping data and methods into a single unit (class) and restricting direct access using access modifiers.

**26. What is Inheritance?**

Inheritance allows one class to acquire the properties and methods of another class, promoting code reuse.

**27. What is Abstraction?**

Abstraction hides implementation details and exposes only the essential features to the user.

**28. Difference between Method Overloading and Method Overriding.**

- Overloading: Same method name, different parameters, occurs in the same class.
- Overriding: Same method signature in parent and child classes to provide a new implementation.

**29. Difference between throw and throws.**

## Page 24

- throw: Used to explicitly throw an exception.
- throws: Declares that a method may throw exceptions.

**30. How do you handle exceptions?**

Exceptions are handled using try, catch, finally, throw, and throws blocks to prevent program crashes.

**31. What are Web Design Technologies?**

Common web technologies include HTML, CSS, JavaScript, Bootstrap, PHP, and React for building websites and web applications.

**32. Why is JavaScript widely used?**

JavaScript is widely used because it makes web pages interactive, dynamic, and responsive, and works in all modern browsers.

**33. What is Structured Programming Language?**

A Structured Programming Language follows a top-down approach using functions, loops, and conditional statements instead of objects.

**34. Difference between OOP and Structured Programming.**

- OOP: Organizes programs using classes and objects.
- Structured Programming: Organizes programs using functions and procedures.

**35. Difference between POST and GET methods.**

- GET: Retrieves data; parameters appear in the URL.
- POST: Sends data securely in the request body and is used for creating or updating data.

**36. How to connect PHP with MySQL database?**

PHP connects to MySQL using MySQLi or PDO by specifying the host, username, password, and database name.

**37. Explain PHP database connection method/code.**

A basic PHP connection uses the mysqli_connect() function or the PDO class to establish a connection with the MySQL database. If the connection succeeds, PHP can execute SQL queries; otherwise, it returns an error.

## Page 25

**1. What is a Database Schema?**

A Database Schema is the logical structure of a database that defines tables, columns, relationships, constraints, and data types.

**2. What is a View?**

A View is a virtual table created from one or more SQL queries. It stores only the query, not the actual data.

**3. What is a Materialized View?**

A Materialized View stores the query result physically in the database. It improves query performance but requires periodic refresh.

**4. Difference between View and Materialized View.**

- View: Stores only the SQL query; data is fetched every time.
- Materialized View: Stores the query result physically; faster but needs refreshing.

**5. What is Oracle RAC?**

Oracle RAC (Real Application Clusters) allows multiple servers to access the same database simultaneously, providing high availability, scalability, and fault tolerance.

**6. What is the role of a DBA?**

A Database Administrator (DBA) installs, configures, secures, backs up, monitors, and maintains databases while ensuring high availability and performance.

**7. What is the difference between Branch User access and DBA access?**

- Branch User: Can perform only authorized business operations like viewing or updating permitted records.
- DBA: Has administrative privileges to manage the entire database, users, security, backup, and recovery.

**8. What is Database Normalization?**

Normalization is the process of organizing database tables to reduce redundancy and improve data integrity.

**9. Why is Normalization important?**

Normalization eliminates duplicate data, improves consistency, saves storage, and makes database maintenance easier.

**10. What are the different Normal Forms?**

## Page 26

The common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF, and 5NF.

**11. What is SQL JOIN?**

A JOIN combines rows from two or more tables based on a related column.

**12. What are the different types of JOIN?**

Common JOINs are INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN.

**13. What is Data?**

Data is raw facts or figures that can be processed to produce meaningful information.

**14. What is a Database?**

A Database is an organized collection of related data that allows efficient storage, retrieval, and management.

**15. What is a Trigger?**

A Trigger is a stored database object that automatically executes when a specified event (INSERT, UPDATE, or DELETE) occurs.

**16. What is the function of a Trigger?**

Triggers automatically perform tasks such as auditing, logging, enforcing business rules, and maintaining data integrity.

**17. How is a database secured?**

A database is secured using authentication, authorization, encryption, firewalls, regular backups, access control, and auditing.

**18. What are the responsibilities of an Assistant Database Administrator (ADBA)?**

An ADBA assists in database monitoring, backup and recovery, user management, performance monitoring, security implementation, and troubleshooting.

**19. What are the risks associated with the ADBA role?**

Risks include data loss, unauthorized access, accidental deletion, misconfiguration, downtime, and security breaches if proper procedures are not followed.

**20. What is the difference between Primary Key and Foreign Key?**

- Primary Key: Uniquely identifies each record in a table.
- Foreign Key: References the primary key of another table to establish relationships.

**21. What is the relationship between Primary Key and Foreign Key?**

## Page 27

A Foreign Key references a Primary Key in another table, maintaining referential integrity between related tables.

**22. What is a Super Key?**

A Super Key is any set of one or more columns that can uniquely identify a record in a table.

**23. Difference between Primary Key, Super Key, and Foreign Key.**

- Primary Key: Unique identifier; cannot be NULL.
- Super Key: Any attribute(s) that uniquely identify a row; may contain extra attributes.
- Foreign Key: References the primary key of another table.

**24. What is the real-life application of a Database Trigger?**

A trigger can automatically record transaction logs, update account balances, maintain audit trails, or generate notifications after database changes.

**25. How can you ensure Database Security?**

Ensure database security by using strong passwords, role-based access control, encryption, regular backups, software updates, auditing, and firewalls.

**26. What is Information System?**

An Information System (IS) is a combination of people, hardware, software, data, and procedures that collects, processes, stores, and distributes information.

**27. What is Database Security?**

Database Security is the practice of protecting databases from unauthorized access, data theft, corruption, and misuse while ensuring confidentiality, integrity, and availability.

**1. Difference between Satellite Communication and Submarine Cable.**

- Satellite Communication: Transmits data through satellites; suitable for remote areas but has higher latency.
- Submarine Cable: Uses undersea fiber-optic cables; provides faster speed, lower latency, and higher bandwidth.

**2. What are their uses?**

Satellite: TV broadcasting, GPS, remote communication, disaster recovery, and aviation.

Submarine Cable: International Internet, voice communication, banking, and global data transmission.

**3. What is SEA-ME-WE?**

## Page 28

SEA-ME-WE (South East Asia–Middle East–Western Europe) is an international submarine fiber-optic cable system that connects Asia, the Middle East, and Europe.

**4. Where are SEA-ME-WE landing stations located in Bangladesh?**

Bangladesh's SEA-ME-WE landing stations are located at Cox's Bazar (SEA-ME-WE-4 & SEA-ME-WE-5) and Kuakata, Patuakhali (SEA-ME-WE-6).

**5. What is Artificial Intelligence (AI)?**

Artificial Intelligence (AI) is the simulation of human intelligence in machines, enabling them to learn, reason, and make decisions.

**6. What is Machine Learning (ML)?**

Machine Learning is a branch of AI where computers learn patterns from data and improve performance without being explicitly programmed.

**7. What is Deep Learning?**

Deep Learning is a subset of Machine Learning that uses artificial neural networks with multiple layers to solve complex problems.

**8. Difference between Machine Learning and Deep Learning.**

- Machine Learning: Uses algorithms and often requires manual feature selection.
- Deep Learning: Uses deep neural networks and automatically learns features from large datasets.

**9. Difference between Normal AI and Super AI.**

- Normal AI (Narrow AI): Performs specific tasks, such as voice assistants or recommendation systems.
- Super AI: A theoretical AI that would surpass human intelligence in all fields.

**10. What are Autonomous Weapons?**

Autonomous Weapons are military systems that can detect, select, and engage targets with little or no human intervention.

**11. How do Autonomous Weapons work?**

They use AI, sensors, cameras, GPS, and machine learning to identify targets, make decisions, and perform actions automatically.

**12. What is Big Data?**

Big Data refers to extremely large and complex datasets that cannot be processed efficiently using traditional methods.

## Page 29

**13. Examples of Big Data.**

Examples include social media data, online banking transactions, IoT sensor data, healthcare records, and e-commerce logs.

**14. What is IoT?**

IoT (Internet of Things) is a network of physical devices connected to the Internet that collect and exchange data.

**15. What is Cloud Computing?**

Cloud Computing is the delivery of computing services such as servers, storage, databases, and software over the Internet.

**16. Give examples of Cloud Computing.**

Examples include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Dropbox, and Google Drive.

**17. What are the challenges of Cloud Computing?**

Major challenges include security, privacy, downtime, Internet dependency, vendor lock-in, and compliance issues.

**18. How can Cloud Computing challenges be solved?**

Challenges can be reduced by using strong encryption, multi-factor authentication, regular backups, disaster recovery plans, and reliable cloud providers.

**19. Difference between Data Center and Cloud Computing.**

- Data Center: Physical facility owned or managed by an organization to host IT infrastructure.
- Cloud Computing: Provides computing resources over the Internet on demand without owning physical infrastructure.

**20. What are the different Cloud Service Models?**

The three main cloud service models are:

- IaaS (Infrastructure as a Service)
- PaaS (Platform as a Service)
- SaaS (Software as a Service)

**21. What are the benefits of Cloud Computing?**

Cloud computing offers scalability, cost savings, high availability, flexibility, remote access, automatic updates, and disaster recovery support.

**1. Difference between Register and Cache Memory.**

## Page 30

| Register | Cache Memory |
|---|---|
| Located inside the CPU. | Located inside/very close to the CPU. |
| Fastest memory in a computer. | Very fast, but slower than registers. |
| Stores data currently being processed. | Stores frequently used data. |
| Very small capacity. | Larger capacity than registers. |

**2. What are the components inside a computer?**

The main components are Motherboard, CPU, RAM, ROM/BIOS, HDD/SSD, Power Supply (PSU), CPU Cooler, Graphics Card (GPU), Network Card (NIC), and CMOS Battery.

**4. What problems can occur if a PC does not power on?**

Possible causes include faulty power supply, loose power cable, damaged motherboard, faulty RAM, defective power button, or CPU overheating.

**5. Difference between CPU and GPU.**

- CPU: Handles general-purpose processing and executes program instructions.
- GPU: Performs parallel processing for graphics rendering, AI, and high-performance computations.

**6. What are the components of a Microprocessor?**

The main components are Arithmetic Logic Unit (ALU), Control Unit (CU), Registers, Cache Memory, and Buses (Address, Data, and Control Bus).

**7. Difference between Cache Memory and Registers.**

- Registers: Fastest memory inside the CPU used for immediate processing.
- Cache Memory: Stores frequently used data to reduce access time to RAM.

**8. What is CPU?**

CPU (Central Processing Unit) is the brain of the computer. It executes instructions, performs calculations, and controls all system operations.

**9. What is RAM?**

RAM (Random Access Memory) is temporary, volatile memory that stores data and programs currently being used by the CPU.

**10. What is ROM?**

ROM (Read Only Memory) is non-volatile memory that permanently stores firmware or boot instructions.

## Page 31

**11. Difference between RAM and ROM.**

- RAM: Volatile, temporary storage; data is lost when power is off.
- ROM: Non-volatile, permanent storage; retains data without power.

**12. What is EPROM?**

EPROM (Erasable Programmable Read-Only Memory) is a type of ROM that can be erased using ultraviolet (UV) light and reprogrammed.

**13. What is a Microprocessor?**

A Microprocessor is an integrated circuit (IC) that contains the CPU on a single chip. It performs arithmetic, logic, and control operations.

**14. Where was Optical Fiber first used?**

Optical fiber was first widely used in the telecommunications industry for long-distance telephone communication due to its high speed and low signal loss.

**15. What is Boolean Logic?**

Boolean Logic is a system of logic based on two values: True (1) and False (0). It uses operations like AND, OR, and NOT to make logical decisions

**1. What are the levels of Software Testing?**

The four main software testing levels are Unit Testing, Integration Testing, System Testing, and Acceptance Testing (UAT).

**2. What is Unit Testing?**

Unit Testing tests individual functions, methods, or modules to ensure each component works correctly. It is usually performed by developers.

**3. What is Integration Testing?**

Integration Testing verifies that multiple modules work correctly together and checks the interaction between integrated components.

**4. What is System Testing?**

System Testing tests the complete integrated application to verify that it meets all functional and non-functional requirements.

**5. What is Acceptance Testing?**

Acceptance Testing (UAT) is the final testing phase where users or clients verify that the software meets business requirements before deployment.

**6. What are Software Testing Levels?**

## Page 32

The software testing levels are:

- Unit Testing
- Integration Testing
- System Testing
- Acceptance Testing (UAT)

**7. Explain Software Testing Levels.**

- Unit Testing: Tests individual components.
- Integration Testing: Tests interaction between modules.
- System Testing: Tests the complete application.
- Acceptance Testing: Confirms the software is ready for the customer or production.

**8. What are Software Testing Methods?**

The main testing methods are Black Box Testing, White Box Testing, and Grey Box Testing.

**1. What is Management Software?**

Management Software is software used to manage and automate an organization's business processes, resources, and daily operations. It improves efficiency and decision-making.

**2. Give examples of Management Software.**

Examples include SAP ERP, Oracle ERP, Microsoft Dynamics 365, Odoo, Tally ERP, and Zoho ERP.

**3. What is ERP?**

ERP (Enterprise Resource Planning) is an integrated software system that manages different business functions such as finance, HR, inventory, sales, and procurement through a single database.

**4. What is MRP?**

MRP (Material Requirements Planning) is a system used to plan and manage manufacturing materials, inventory, and production schedules.

**5. Difference between MRP and ERP.**

- MRP: Focuses mainly on material planning, inventory, and production.
- ERP: Manages the entire organization, including finance, HR, sales, procurement, inventory, and manufacturing.

**6. Why is ERP used in organizations?**

## Page 33

ERP is used to integrate all departments into one system, improve data accuracy, automate business processes, reduce operational costs, and support better decision-making.

**1. What is Artificial Intelligence (AI)?**

Artificial Intelligence (AI) is the simulation of human intelligence in machines, enabling them to learn, reason, solve problems, and make decisions.

**2. What is Machine Learning (ML)?**

Machine Learning (ML) is a branch of AI where computers learn patterns from data and improve their performance without being explicitly programmed.

**3. What is Deep Learning (DL)?**

Deep Learning is a subset of Machine Learning that uses artificial neural networks with multiple layers to solve complex problems.

**4. Difference between Machine Learning and Deep Learning.**

- Machine Learning: Uses algorithms and often requires manual feature selection.
- Deep Learning: Uses deep neural networks and automatically learns features from large datasets.

**5. Difference between Normal AI and Super AI.**

- Normal AI (Narrow AI): Designed for specific tasks (e.g., chatbots, voice assistants).
- Super AI: A hypothetical AI that would exceed human intelligence in all fields.

**6. What are Autonomous Weapons?**

Autonomous Weapons are military systems that can identify, select, and engage targets with little or no human intervention using AI.

**7. How do Autonomous Weapons work?**

They use AI, sensors, cameras, GPS, and machine learning to detect targets, analyze data, make decisions, and perform actions automatically.

**8. Why is Python widely used for AI?**

Python is popular for AI because it is easy to learn, has simple syntax, and provides powerful libraries such as TensorFlow, PyTorch, Scikit-learn, and Keras.

**9. What is Big Data?**

Big Data refers to extremely large and complex datasets that cannot be efficiently processed using traditional data processing tools.

**10. Examples of Big Data.**

## Page 34

Examples include social media data, banking transactions, IoT sensor data, healthcare records, e-commerce logs, and video streaming data.

**11. What is IoT (Internet of Things)?**

IoT is a network of physical devices connected to the Internet that collect, exchange, and process data automatically.

**12. What is Cloud Computing?**

Cloud Computing is the delivery of computing services such as servers, storage, databases, and software over the Internet on demand.

**13. Give examples of Cloud Computing.**

Examples include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Google Drive, Microsoft OneDrive, and Dropbox.

**14. What are the challenges of Cloud Computing?**

Challenges include security, privacy, Internet dependency, downtime, vendor lock-in, and regulatory compliance.

**15. How can Cloud Computing challenges be solved?**

They can be addressed using encryption, multi-factor authentication (MFA), regular backups, disaster recovery plans, reliable cloud providers, and continuous monitoring.

**16. What is Robotics?**

Robotics is the field of designing, building, and programming robots to perform tasks automatically or with minimal human intervention.

**17. What is an Embedded System?**

An Embedded System is a specialized computer system built into a device to perform a dedicated function, such as in ATMs, routers, or washing machines.

**18. How is Robotics used in Banking?**

Robotics is used for cash handling, document processing, customer service (robots/chatbots), ATM maintenance, and Robotic Process Automation (RPA) to automate repetitive banking tasks.

**1. What is SEO?**

SEO (Search Engine Optimization) is the process of improving a website's visibility in search engine results to increase organic traffic.

**2. What is Image SEO?**

## Page 35

Image SEO is optimizing images using descriptive file names, alt text, proper size, and compression to improve search rankings and page speed.

**3. What is Link SEO?**

Link SEO involves optimizing internal links and gaining high-quality backlinks to improve a website's authority and search ranking.

**4. Which SEO tools do you know?**

Popular SEO tools include Google Search Console, Google Analytics, Ahrefs, SEMrush, Moz, and Screaming Frog.

**5. Why does an Office PC suddenly shut down?**

Common causes include overheating, faulty power supply (PSU), RAM issues, hardware failure, malware, power fluctuations, or software crashes.

**6. How would you solve sudden PC shutdown problems?**

Check the power supply, cooling fan, CPU temperature, RAM, hard disk, and power cables. Scan for malware and update drivers if necessary.

**7. How can you protect an Office PC?**

Use strong passwords, antivirus software, firewalls, regular updates, encrypted storage, limited user access, and regular data backups.

**8. What are the benefits of a cashless banking system?**

A cashless banking system provides faster transactions, improved security, lower cash-handling costs, transparency, and better financial tracking.

**9. How can a cashless economy increase government revenue?**

Digital transactions are easier to track, which reduces tax evasion, increases transparency, and improves tax collection.

**10. What are the advantages of digital payments?**

Digital payments are fast, secure, convenient, paperless, and available 24/7, reducing the need to carry cash.

**11. What are the benefits of e-payment systems?**

E-payment systems offer quick transactions, lower operational costs, improved security, accurate record-keeping, and greater customer convenience.

**12. What are the possible reasons a printer may not work?**

Possible causes include no power, loose cables, paper jam, empty ink/toner, driver issues, incorrect printer settings, or network connectivity problems.

## Page 36

**13. How would you troubleshoot a printer problem?**

Check the power supply, cables, paper, ink/toner, printer status, drivers, and network connection. Restart the printer and print a test page.

**14. How would you troubleshoot a network problem?**

Check the network cable/Wi-Fi, IP configuration, router/switch status, gateway, DNS, and Internet connectivity. Use ping and restart network devices if needed.

**15. What is the role of Blockchain in banking?**

Blockchain provides secure, transparent, and tamper-resistant transaction records. It helps reduce fraud, speeds up payments, and improves transaction traceability.

**16. What is the role of Information Systems in organizations?**

An Information System (IS) collects, processes, stores, and distributes information to support business operations, decision-making, communication, and resource management.

**1. What type of bank is Sonali Bank?**

Sonali Bank PLC is a state-owned commercial bank of Bangladesh. It is the largest government-owned commercial bank in the country.

**2. Who owns Sonali Bank?**

Sonali Bank is owned by the Government of Bangladesh. It was formed as a nationalized commercial bank in 1972 and later converted into a public limited company.

**3. Who is the Managing Director (MD)?**

The current Managing Director and CEO of Sonali Bank PLC is Md. Shawkat Ali Khan.

**4. Is there currently a Chairman?**

Yes. The current Chairman (Current Charge) of Sonali Bank PLC is Muhammed Mahbubur Rahman.

**5. How many branches does Sonali Bank have?**

Sonali Bank PLC currently has 1,235 branches across Bangladesh.

**6. Where is the latest/newest branch?**

The latest branch is Dasar Branch, Madaripur, which became Sonali Bank's 1,235th branch.

**7. What is Sonali Bank's Core Banking Solution (CBS) called?**

## Page 37

Sonali Bank uses Sonali Integrated Banking System (SIBS) as its Core Banking Solution (CBS).

**8. What is the name of Sonali Bank's mobile banking app?**

Sonali Bank provides mobile banking services through apps such as Sonali eSheba and Sonali eWallet.

**10. What is Sonali Bank's role in digital banking?**

Sonali Bank provides digital services such as online banking, mobile banking, ATM services, electronic fund transfers, and automated banking solutions to improve customer service.

**11. What software does Sonali Bank use?**

Sonali Bank mainly uses its Core Banking Solution (CBS) – Sonali Integrated Banking System (SIBS) along with other banking applications for operations.

**12. What challenges does Sonali Bank face in expanding CBS?**

Major challenges include large branch networks, system integration, cybersecurity risks, data migration, maintaining availability, and training employees for new technologies.

**1. What are the functions of a bank?**

A bank accepts deposits, provides loans, facilitates payments, creates credit, offers investment services, and provides financial services to individuals and businesses.

**2. How do commercial banks earn money?**

Commercial banks mainly earn money through interest income from loans. They also earn from service charges, fees, commissions, foreign exchange, and investment activities.

**3. How does Sonali Bank earn money?**

Sonali Bank earns money mainly through loan interest, investment income, government transactions, remittance services, foreign exchange operations, and various banking fees.

**4. What is interest spread (difference between lending and deposit rates)?**

Interest spread is the difference between the interest rate a bank charges on loans and the interest rate it pays to depositors.

- Example: If a bank gives loans at 10% and accepts deposits at 5%, the spread is 5%.

**5. When does a bank make a profit?**

A bank makes a profit when its total income (interest, fees, investments, etc.) is higher than its operating costs, loan losses, and other expenses.

**6. What happens to the bank's profit?**

## Page 38

Profit is used for business expansion, maintaining reserves, paying dividends to shareholders, investing in technology, and strengthening financial stability.

**7. Who receives the bank's profit?**

For government-owned banks like Sonali Bank, profit belongs to the Government of Bangladesh after maintaining required reserves and fulfilling regulatory requirements.

**8. Besides loan interest, how else does a bank earn money?**

Banks earn from:

- Service charges and account fees
- Foreign exchange transactions
- Remittance services
- Investment in securities
- ATM and card service charges
- Commission-based services

**9. What types of bank accounts are there?**

Common bank accounts are:

- Savings Account
- Current Account
- Fixed Deposit Account (FDR)
- Recurring Deposit Account
- Loan Account

**10. When can a current account become a loan account?**

A current account can become a loan account when a customer uses overdraft or credit facilities beyond available balance, creating a debit balance that must be repaid.

**11. When do banks charge higher interest rates?**

Banks charge higher interest rates when the risk of lending is high, such as unsecured loans, poor credit history, long-term loans, or unstable market conditions.

**12. What is Retail Banking?**

Retail Banking provides banking services directly to individual customers, such as savings accounts, personal loans, credit cards, and mortgages.

**13. What is Agent Banking?**

## Page 39

Agent Banking is a banking service where authorized agents provide basic banking services on behalf of a bank in areas without traditional branches.

**14. What is a Commercial Bank?**

A Commercial Bank is a financial institution that accepts deposits from customers and provides loans to individuals and businesses to earn profit.

**15. What are the main functions of Commercial Banks?**

The main functions are:

- Accepting deposits
- Providing loans and advances
- Creating credit
- Facilitating payments
- Foreign exchange services
- Investment activities

**16. What is the source of funds for a newly established bank to provide loans?**

A new bank collects funds from:

- Customer deposits
- Paid-up capital from shareholders
- Borrowing from other financial institutions
- Central bank facilities (when applicable)

**17. Why do people keep money in banks?**

People keep money in banks for security, earning interest/profit, easy transactions, digital payment facilities, and access to financial services.

**18. Difference between Savings Account and Current Account.**

- Savings Account: Mainly for individuals; earns interest and has transaction limits.
- Current Account: Mainly for businesses; allows frequent transactions but usually does not provide interest.

**1. What is Bangladesh Bank?**

Bangladesh Bank is the central bank of Bangladesh. It regulates the country's monetary system, controls money supply, and supervises banks and financial institutions.

## Page 40

**2. What are the functions of Bangladesh Bank?**

Main functions include:

- Formulating and implementing monetary policy
- Issuing currency notes
- Controlling inflation
- Managing foreign exchange reserves
- Regulating and supervising banks
- Operating payment systems
- Acting as a banker to the government

**3. What is the role of Bangladesh Bank in the banking sector?**

Bangladesh Bank ensures banking stability, regulates commercial banks, monitors financial activities, and protects customers' interests through rules and supervision.

**4. Who formulates Monetary Policy?**

Bangladesh Bank formulates the Monetary Policy of Bangladesh through its Monetary Policy Committee and related departments.

**5. Who implements Monetary Policy?**

Bangladesh Bank implements monetary policy using tools such as policy rates, reserve requirements, and open market operations.

**6. Does Bangladesh Bank use a Core Banking System (CBS)?**

Yes, Bangladesh Bank uses integrated banking and financial systems to manage its internal operations, payment systems, and regulatory activities.

**7. What is the current IT status of Bangladesh Bank?**

Bangladesh Bank uses modern IT infrastructure including central banking systems, payment platforms, cybersecurity systems, data centers, and digital monitoring systems.

**8. Why did the Bangladesh Bank reserve heist happen?**

The 2016 Bangladesh Bank reserve heist occurred due to a combination of cybersecurity weaknesses, compromised systems, stolen credentials, and weaknesses in international payment security controls.

**9. Which banks have recently merged in Bangladesh?**

Several weak banks in Bangladesh have been merged as part of banking sector reforms. Examples include mergers involving Shahjalal Islami Bank-related processes and other

## Page 41

distressed banks under regulatory initiatives. (For viva, mention the latest Bangladesh Bank-approved merger list if asked.)

**10. What is the central bank of the United States?**

The central bank of the United States is the Federal Reserve System (The Fed).

**1. What is Core Banking System (CBS)?**

Core Banking System (CBS) is a centralized banking software platform that manages essential banking operations such as accounts, deposits, loans, transactions, and customer information.

**2. Why do banks use CBS?**

Banks use CBS to:

- Connect all branches through a centralized system
- Provide real-time banking services
- Improve transaction speed and accuracy
- Reduce manual work
- Improve security and monitoring

**3. How does CBS connect all bank branches?**

CBS connects branches through a secure WAN network. All branches access a centralized database where customer information and transactions are updated in real time.

**4. Why does a bank choose a specific CBS?**

A bank chooses CBS based on:

- Scalability
- Security features
- Reliability
- Integration capability
- Cost
- Regulatory compliance
- Support and maintenance

**5. What is the difference between a System and a Solution?**

- System: A collection of hardware, software, and processes that perform a specific function.

## Page 42

Solution: A complete approach that solves a business problem using one or more systems.

**6. What is Sonali Bank's Core Banking Solution (CBS)?**

Sonali Bank uses Sonali Integrated Banking System (SIBS) as its Core Banking Solution.

**7. Why did Sonali Bank choose its current CBS?**

Sonali Bank selected its CBS to achieve centralized banking operations, real-time transactions, branch connectivity, improved customer service, and better management of banking data.

**8. How many modules does a CBS usually have?**

A CBS generally contains modules such as:

- Customer Management
- Deposit Management
- Loan Management
- General Ledger
- Treasury
- Foreign Exchange
- Payment Processing
- Reporting and MIS

**1. What is Digital Banking?**

Digital Banking is the use of digital technologies to provide banking services electronically without requiring customers to visit a physical branch.

Examples include mobile banking, internet banking, digital payments, and online account services.

**2. What is E-Banking?**

E-Banking (Electronic Banking) is a system that allows customers to perform banking activities electronically through the Internet, mobile devices, ATMs, or other electronic channels.

**3. Difference between Digital Banking and E-Banking.**

- E-Banking: Mainly focuses on providing traditional banking services through electronic channels.

## Page 43

Digital Banking: A broader concept that includes complete digital transformation of banking services, operations, and customer experience.

**4. What is an E-Payment System?**

An E-Payment System is an electronic method of transferring money without using physical cash. It enables online transactions through cards, mobile wallets, and bank transfers.

**6. Is there an e-payment market in Bangladesh?**

Yes. Bangladesh has a growing e-payment market driven by mobile financial services, online shopping, digital banking, QR payments, and electronic fund transfer systems.

**7. What are the benefits of a cashless banking system?**

Benefits include:

- Faster transactions
- Reduced cash handling costs
- Improved security
- Greater transparency
- Easy transaction tracking
- Reduced risk of cash theft

**8. How can cashless banking increase government revenue?**

Digital transactions create transparent financial records, which help reduce tax evasion, illegal transactions, and the informal economy, increasing government tax collection.

**9. What is Mobile Banking?**

Mobile Banking allows customers to perform banking activities using mobile phones, such as balance checking, fund transfer, bill payment, and mobile recharge.

**10. What is Internet Banking?**

Internet Banking is a service that allows customers to access banking facilities through a website using the Internet.

**11. What is Mobile Financial Service (MFS)?**

MFS provides financial services through mobile phones, allowing users to send money, receive payments, pay bills, and perform transactions without a traditional bank branch.

Examples: bKash, Nagad, Rocket

**12. What is NPSB?**

## Page 44

NPSB (National Payment Switch Bangladesh) is a payment infrastructure operated by Bangladesh Bank that connects banks and enables electronic transactions between them.

**13. How does NPSB work?**

NPSB receives transaction requests from one bank, verifies the transaction, and forwards it to the receiving bank for completing payments such as ATM, card, and fund transfer transactions.

**17. What is a Cashless Economy?**

A Cashless Economy is an economic system where most transactions are performed electronically instead of using physical cash.

**18. Advantages of Digital Payments.**

- Fast and convenient transactions
- Available 24/7
- Reduced cash dependency
- Better transaction records
- Increased financial inclusion
- Improved security

**19. What is Financial Inclusion?**

Financial Inclusion means providing affordable financial services like banking, payments, and credit facilities to all sections of society, including underserved populations.

**20. What challenges exist in Digital Banking?**

Challenges include:

- Cybersecurity threats
- Internet dependency
- Digital literacy issues
- Privacy concerns
- Fraud and scams
- Infrastructure limitations

**21. How can Digital Banking security be improved?**

Security can be improved through:

- Encryption

## Page 45

- Multi-Factor Authentication (MFA)
- Biometric verification
- Fraud monitoring systems
- Regular security updates
- Customer awareness programs
