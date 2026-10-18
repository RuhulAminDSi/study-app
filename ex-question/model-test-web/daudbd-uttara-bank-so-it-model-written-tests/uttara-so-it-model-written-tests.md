# DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Tests 1–3

- **Source:** https://www.daudbd.com/2025/12/uttara-bank-plc-senior-officer-cseit.html (blog post, December 2025; `robots.txt` allows `/`, disallows only `/search`)
- **Local file:** `uttara-so-it-model-written-tests.html.txt` (post body text only)
- **Publisher:** DaudBD (daudbd.com, a general Bangla blog). No author or coaching name is printed.
- **Document type:** model test (`suggestion`), three model papers in one post. **Not** a real exam.
- **Date:** posted December 2025 (URL path `/2025/12/`)

## Transcription Notes

- The questions are unnumbered bullet points in the post; I number them within each section (`A1`, `A2`, …) so the records can point at them. Section headers, instructions and marks are copied as printed.
- **The post looks machine-generated.** Paper I ends with "Note to candidates: If you would like, I can provide a fully worked answer key for this model test, sample solutions for the subnetting and SQL questions, and a downloadable PDF version formatted for printing. Please tell me which you prefer." That is a chatbot sign-off left in the post. Treat the papers as an unverified view of the bank-IT pattern, not as coaching that tracks real papers. Nothing in them is tagged as a past question.
- No answers are printed.
- A sister post (`daudbd-uttara-bank-so-it-pattern/`) claims the real Uttara Bank SO (IT) test is MCQ-based with English, maths, GK and IT sections, which these all-written papers do not follow.

## Content

### DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper I) (suggestion)

- **Printed header:** UTTARA BANK PLC · Senior Officer (CSE/IT) — Model Written Test · Time: 1 Hour 30 Minutes (1:30 hrs) · Full Marks: 100
- Instructions: Read the questions carefully. Answer exactly as directed. Write neatly. Use allotted time wisely.
- **Structure:** all written, 100 marks, 90 minutes, no MCQ, no negative marking; 5 sections, choose-from lists: A 10 of 12 × 3 = 30; B 5 of 7 × 6 = 30; C 4 of 5 × 5 = 20; D 2 of 3 × 10 = 20; E 1 of 3 × 10 = 10. No Bangla, English, maths or GK.
- **Imitates:** a bank's own IT written test (Uttara Bank Senior Officer CSE/IT); not BIBM-styled (BIBM papers carry general sections)


**SECTION – A: SHORT QUESTIONS (10 × 3 = 30 Marks)**

Answer any TEN (10) questions. Each question carries 3 marks.

- **A1.** What is SDLC? Explain its phases briefly.  *[3]*
- **A2.** Define Operating System. Write any four functions of an OS.  *[3]*
- **A3.** What is Cloud Computing? Mention its types.  *[3]*
- **A4.** Define IPv4 and IPv6 with examples.  *[3]*
- **A5.** What is Subnet Mask? Explain with an example.  *[3]*
- **A6.** What is RAID? Why is RAID used in servers?  *[3]*
- **A7.** Difference between TCP and UDP.  *[3]*
- **A8.** What is DNS? How does it work?  *[3]*
- **A9.** Define Firewall and mention its types.  *[3]*
- **A10.** What is Database Normalization? Explain 1NF and 2NF.  *[3]*
- **A11.** What is Virtualization? Mention two hypervisors.  *[3]*
- **A12.** Write short notes on: (a) VLAN (b) NAT  *[3]*

**SECTION – B: NETWORK & SECURITY (5 × 6 = 30 Marks)**

Answer any FIVE (5) questions. Each question carries 6 marks.

- **B1.** Explain the OSI Model with the function of each layer.  *[6]*
- **B2.** What is DHCP? Describe how a device obtains an IP address using DHCP (include DHCP message flow).  *[6]*
- **B3.** What are ARP and RARP? Explain their purpose and show simple request/response diagrams.  *[6]*
- **B4.** Explain Public IP vs Private IP with examples and mention private ranges for classes A, B, and C.  *[6]*
- **B5.** What is the difference between a Switch, a Router, and a Hub? Give practical use-cases for each.  *[6]*
- **B6.** Explain SSL/TLS. Why is it essential for online banking transactions?  *[6]*
- **B7.** List and explain three major cyber security threats that banks commonly face and basic mitigation measures for each.  *[6]*

**SECTION – C: DATABASE & PROGRAMMING (4 × 5 = 20 Marks)**

Answer any FOUR (4) questions. Each question carries 5 marks.

- **C1.** Define Primary Key and Foreign Key. Provide SQL examples to create two related tables (Employees and Departments) showing keys.  *[5]*
- **C2.** Write SQL queries for:<br>
  a) Display all employees whose salary > 40,000.<br>
  b) Count the number of transactions recorded today (assume a table transactions with a date column).  *[5]*
- **C3.** What is the ACID property in DBMS? Explain Atomicity, Consistency, Isolation and Durability with short examples.  *[5]*
- **C4.** Write a simple program (C or Python) to find the largest number in an integer array. (Show code and brief explanation.)  *[5]*
- **C5.** Explain indexing in databases. Why is indexing important in Core Banking Systems (CBS)?  *[5]*

**SECTION – D: NETWORKING & SYSTEM DESIGN PROBLEMS (2 × 10 = 20 Marks)**

Answer any TWO (2) questions. Each question carries 10 marks.

- **D1.** Subnetting Problem (10 Marks)<br>
  Your bank branch network is 192.168.10.0/24. You need 4 equal subnets.<br>
  Calculate the new subnet mask (CIDR notation and dotted-decimal).<br>
  Calculate the number of usable hosts per subnet.<br>
  List the network address, first usable IP, last usable IP and broadcast address for each subnet.  *[10]*
- **D2.** Network Design for a Branch (10 Marks)<br>
  Design a simple network for a bank branch with the following resources:<br>
  1 Router, 2 Switches, 40 PCs, 2 Servers (CBS Server & Backup Server), 2 VLANs (HR and General Banking), Internet link plus 4G backup modem.<br>
  Draw a labeled network diagram (hand-drawn or described), propose an IP addressing plan (subnet per VLAN), and explain VLAN segmentation and routing between VLANs (mention if router-on-stick or Layer-3 switch is used).  *[10]*
- **D3.** Optional System Design (alternative to above) — Online Banking Login System (10 Marks)<br>
  Provide a short system design covering:<br>
  Authentication flow (login, OTP, session handling).<br>
  Database tables required (users, login_attempts, otp_logs).<br>
  Security features: Captcha, rate-limiting, IP blocking, account lockout, encryption at rest and in transit.<br>
  Logging and audit requirements.  *[10]*

**SECTION – E: BANKING TECHNOLOGY (Any 1 × 10 = 10 Marks)**

Answer any ONE (1) question. Each question carries 10 marks.

- **E1.** Explain the role of ICT in modern banking. Provide examples of how ICT improves customer service and operational efficiency.  *[10]*
- **E2.** What is a Core Banking System (CBS)? Describe a high-level CBS architecture and key components (transaction engine, GL, customer master, teller module).  *[10]*
- **E3.** Discuss digital banking risks (fraud, phishing, account takeover, third-party risk) and describe technical and procedural mitigations banks use.  *[10]*

### DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test (Paper II) (suggestion)

- **Printed header:** UTTARA BANK PLC · Senior Officer (CSE/IT) — Model Written Test (Paper II) · Time: 1 Hour 30 Minutes (1:30 hrs) · Full Marks: 100
- Instructions: Answer as directed. Use clear diagrams where required. Marks are indicated for each section. No extra sheets unless permitted.
- **Structure:** all written, 100 marks, 90 minutes, no MCQ, no negative marking; 5 sections, choose-from lists: A 12 of 12 × 2 = 24; B 6 of 7 × 6 = 36; C 3 of 3 × 8 = 24; D 2 of 3 × 8 = 16; E 1 of 3 × 10 = 10. No Bangla, English, maths or GK.
- **Imitates:** a bank's own IT written test (Uttara Bank Senior Officer CSE/IT); not BIBM-styled (BIBM papers carry general sections)


**SECTION – A: VERY SHORT QUESTIONS (12 × 2 = 24 Marks)**

Answer any TWELVE (12) questions. Each question carries 2 marks.

- **A1.** Define Virtual Memory.  *[2]*
- **A2.** What is a MAC Address? Give its format.  *[2]*
- **A3.** What does HTTPS mean and why use it?  *[2]*
- **A4.** Define Backup and Recovery in DBMS (brief).  *[2]*
- **A5.** What is OAuth (one-line)?  *[2]*
- **A6.** Mention two examples of PaaS providers.  *[2]*
- **A7.** What is a Load Balancer? (one-line)  *[2]*
- **A8.** Write the default gateway purpose in one sentence.  *[2]*
- **A9.** What is a CAPTCHA and why is it used?  *[2]*
- **A10.** Define 'Hot Standby' in server context.  *[2]*
- **A11.** What is JSON? (short)  *[2]*
- **A12.** Give one difference between SSD and HDD.  *[2]*

**SECTION – B: SHORT ANSWER QUESTIONS (6 × 6 = 36 Marks)**

Answer any SIX (6) questions. Each question carries 6 marks.

- **B1.** Explain RAID 5: structure, advantages, and a typical use-case in banks.  *[6]*
- **B2.** Explain DNS hierarchy and the role of root and authoritative name servers.  *[6]*
- **B3.** Describe the differences between symmetric and asymmetric encryption with examples.  *[6]*
- **B4.** Explain the concept of Session Management in web applications and common vulnerabilities.  *[6]*
- **B5.** What is a Proxy Server? Describe forward and reverse proxy use-cases.  *[6]*
- **B6.** Explain the principle of 'Least Privilege' and its importance in bank IT environments.  *[6]*
- **B7.** Describe how two-factor authentication (2FA) enhances security; give two 2FA methods.  *[6]*

**SECTION – C: PRACTICAL / DATABASE (3 × 8 = 24 Marks)**

Answer any THREE (3) questions. Each question carries 8 marks.

- **C1.** SQL Task:<br>
  Given a table accounts(account_id INT, customer_id INT, balance DECIMAL, status VARCHAR) write SQL queries for:<br>
  a) List accounts with balance < 1000.00.<br>
  b) Increase balance by 5% for active accounts.<br>
  c) Delete accounts flagged 'closed' older than 365 days (assume a closed_date exists).  *[8]*
- **C2.** Programming Task:<br>
  Write a Python function that accepts a list of transaction amounts (positive for credit, negative for debit) and returns the final balance and number of overdrafts (balance < 0). Show example input/output.  *[8]*
- **C3.** DB Design:<br>
  Design simple table structures for an ATM transaction log. Include fields for transaction_id, atm_id, account_no (masked), txn_type, amount, timestamp, status, and machine_location. Show SQL CREATE TABLE for the log and mention indexes you would create.  *[8]*

**SECTION – D: NETWORK DESIGN & PROBLEMS (2 × 8 = 16 Marks)**

Answer any TWO (2) questions. Each question carries 8 marks.

- **D1.** Subnetting:<br>
  You have network 10.10.0.0/22. Create 4 subnets with equal size.<br>
  a) Give the new subnet mask and CIDR.<br>
  b) List network address and usable IP range for each subnet.  *[8]*
- **D2.** High Availability Design:<br>
  Propose a simple high-availability setup for a core banking application using two application servers, two database servers (primary + replica), a load balancer, and shared storage. Draw/describe components and failover behavior.  *[8]*
- **D3.** Alternative (optional):<br>
  Explain how NAT and PAT work in a small branch with 30 hosts sharing a single public IP. Include an example mapping.  *[8]*

**SECTION – E: BANKING & IT MANAGEMENT (Any 1 × 10 = 10 Marks)**

Answer any ONE (1) question. Each question carries 10 marks.

- **E1.** Explain Core Banking System (CBS) testing types (unit, integration, UAT, regression) and why each is important before go-live.  *[10]*
- **E2.** Discuss Disaster Recovery Planning for a bank: RTO, RPO, alternate site types (cold, warm, hot) and a short runbook for failover.  *[10]*
- **E3.** Explain vendor risk management in banking IT: what checks should a bank perform before onboarding a third-party software vendor?  *[10]*

### DaudBD — Uttara Bank PLC Senior Officer (CSE/IT) Model Written Test #3 (suggestion)

- **Printed header:** UTTARA BANK PLC · Senior Officer (CSE/IT) — Model Written Test (Model Test #3 – IMPORTANT) · Time: 1 Hour 30 Minutes (1:30 hrs) · Total Marks: 100
- Instructions: Attempt all questions as directed. Show diagrams wherever needed. Use clear and concise answers.
- **Structure:** all written, 100 marks, 90 minutes, no MCQ, no negative marking; 5 sections, choose-from lists: A 10 of 12 × 3 = 30; B 5 of 7 × 6 = 30; C 3 of 3 × 8 = 24; D 2 of 3 × 8 = 16; E 1 of 3 × 10 = 10. No Bangla, English, maths or GK.
- **Imitates:** a bank's own IT written test (Uttara Bank Senior Officer CSE/IT); not BIBM-styled (BIBM papers carry general sections)


**SECTION – A: SHORT QUESTIONS (10 × 3 = 30 Marks)**

Answer any TEN (10). Each question carries 3 marks.

- **A1.** What are the main responsibilities of a Database Administrator (DBA)?  *[3]*
- **A2.** Explain the term “Checksum” and its use in networking.  *[3]*
- **A3.** What is API? Mention two examples used in banking applications.  *[3]*
- **A4.** Write short notes on: (a) Deadlock (b) Semaphore.  *[3]*
- **A5.** What is Encryption? Distinguish between AES and RSA.  *[3]*
- **A6.** What is Multi-threading? Give one real-life example.  *[3]*
- **A7.** Explain the purpose of a Kernel inside an Operating System.  *[3]*
- **A8.** What is Docker? Why is containerization popular?  *[3]*
- **A9.** Write the difference between Static and Dynamic Routing.  *[3]*
- **A10.** What is “Failover”? Explain with a banking example.  *[3]*
- **A11.** Define Big Data. Mention any two Big Data technologies.  *[3]*
- **A12.** What is a Log File? Why are logs important in banking servers?  *[3]*

**SECTION – B: NETWORKING & SECURITY (5 × 6 = 30 Marks)**

Answer any FIVE (5). Each question carries 6 marks.

- **B1.** Explain Firewall architecture and write differences between stateful and stateless firewalls.  *[6]*
- **B2.** Describe how HTTPS works. Include SSL handshake steps.  *[6]*
- **B3.** Explain VLAN Trunking. How does 802.1Q tagging work?  *[6]*
- **B4.** What is Man-in-the-Middle (MITM) attack? Explain two methods to prevent it.  *[6]*
- **B5.** Describe DMZ (Demilitarized Zone) and its importance in bank network security.  *[6]*
- **B6.** Explain how a Router uses Routing Table with an example.  *[6]*
- **B7.** Describe IPsec. Mention its modes and uses in banking VPN.  *[6]*

**SECTION – C: DATABASE & SYSTEM DESIGN (3 × 8 = 24 Marks)**

Answer any THREE (3). Each question carries 8 marks.

- **C1.** SQL Task:<br>
  Given tables:<br>
  customers(customer_id, name, phone)<br>
  transactions(txn_id, customer_id, amount, txn_date, type)<br>
  Write SQL for:<br>
  a) List total transaction amount per customer.<br>
  b) Find customers who made no transactions this month.<br>
  c) Display highest transaction amount of each type.  *[8]*
- **C2.** System Design Task:<br>
  Design a small-scale **Loan Management System** including:<br>
  a) Key modules (Loan processing, Approval workflow, EMI generator).<br>
  b) Required database tables.<br>
  c) Security controls (audit logs, data validation, access roles).  *[8]*
- **C3.** Programming Task:<br>
  Write a C or Python program to validate a user login by checking:<br>
  - Username length (min 4 chars)<br>
  - Password must contain a number<br>
  - Print "Login Valid" or "Invalid Credentials"<br>
  Include sample input & output.  *[8]*

**SECTION – D: NETWORKING PROBLEMS (2 × 8 = 16 Marks)**

Answer any TWO (2). Each carries 8 marks.

- **D1.** Subnetting Task:<br>
  Your network is 172.16.0.0/20.<br>
  Create **8 subnets** and provide:<br>
  a) New subnet mask.<br>
  b) Network address of each subnet.<br>
  c) Usable range & broadcast of first two subnets.  *[8]*
- **D2.** Branch Network Diagram:<br>
  Design a network for a branch containing:<br>
  - 1 Router<br>
  - 3 Switches<br>
  - 60 Staff PCs<br>
  - 3 VLANs (IT, Teller, General Banking)<br>
  - UTM Firewall<br>
  - Internet + MPLS link to Head Office<br>
  Include IP plan and inter-VLAN routing concept.  *[8]*
- **D3.** Alternate Task:<br>
  Write how a Load Balancer works. Compare L4 vs L7 load balancing.<br>
  Give an example relevant to banking applications.  *[8]*

**SECTION – E: BANKING & IT GOVERNANCE (Any 1 × 10 = 10 Marks)**

Answer any ONE (1).

- **E1.** What is ICT Governance? Explain COBIT Framework and its relevance in banking.  *[10]*
- **E2.** Explain Business Continuity Plan (BCP) steps for a bank during a major system outage.  *[10]*
- **E3.** Discuss Cybersecurity Operation Center (SOC) activities and why a bank needs SOC monitoring 24/7.  *[10]*
