# Transport Layer & Cryptography: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/09-computer-networking-and-security/net-transport-crypto.en.html` (handwritten-style PDF: `notes/pdf/09-computer-networking-and-security/net-transport-crypto.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Computer Networking and Security):** "**Transport protocols**; Transmission control protocol: **connection management, transmission policy, congestion control, timer management**; UDP; **AAL of ATM**; Network security: **Cryptography, DES, IDEA, public key algorithm**". In the printed syllabus the UDP item is sometimes printed "**LJDP**" — read it as **UDP** (section 7). Authentication and digital signatures follow in the next lesson; the ATM cell and the network layer are covered in the Firewalls/IP/ATM lesson.

**High-yield:** ① TCP 20–60 B · UDP 8 B ② SYN, SYN+ACK, ACK ③ slow start ×2 · AIMD ④ 3 dup ACKs ⑤ DES 64/56/16 ⑥ IDEA 64/128/8.5 ⑦ RSA: e·d ≡ 1 mod φ

**Markers used below:** **bold** = key term · 💡 = memory trick · ⚠️ = exam trap · ✍ = worked example.

**Topic map (11 sheets, ★ = high-yield):** ports · sockets · **TCP header & handshake ★** · UDP · SCTP · **cwnd: slow start ★** · **DES · 3DES · IDEA ★** · AAL 1 · 2 · 3/4 · 5 · **RSA · Diffie–Hellman ★** · classical ciphers · AES.

| Contents | Page | Contents | Page |
|---|---|---|---|
| Transport layer, ports, TCP header | 2 | DES, 3DES, IDEA, AES | 8 |
| Connection setup, release, states | 3 | Public key: RSA, Diffie–Hellman | 9 |
| Flow control, transmission policy, timers | 4 | Night-before sheet | 10 |
| Congestion control + cwnd trace | 5 | Practice MCQs + written | 11 |
| UDP, TCP vs UDP, SCTP | 6 | | |
| AAL of ATM, cryptography basics | 7 | | |

---

## 1. The Transport Layer

**Tag: MCQ + Written.** Layer 4 (OSI) gives **process-to-process (end-to-end)** delivery; the network layer (IP) gives only host-to-host delivery. Services: multiplexing/demultiplexing by **port**, segmentation and reassembly, and (in TCP) reliability, ordering, flow control and congestion control. It runs only in the **end hosts**, never in routers.

- **Port** = 16-bit number → **0–65,535**
  - **Well-known** 0–1023 (servers)
  - Registered 1024–49,151
  - Dynamic / ephemeral 49,152–65,535 (clients)
- **Socket** = IP address + port. A TCP connection is identified by the **4-tuple** (src IP, src port, dst IP, dst port).
- **PDU:** TCP **segment** · UDP **datagram**. IP protocol no. **TCP = 6, UDP = 17**.

| Service | Port | Over |
|---|---|---|
| FTP data · control | 20 · 21 | TCP |
| SSH · Telnet | 22 · 23 | TCP |
| SMTP | 25 | TCP |
| DNS | 53 | UDP/TCP |
| DHCP · TFTP | 67/68 · 69 | UDP |
| HTTP · HTTPS | 80 · 443 | TCP |
| POP3 · IMAP | 110 · 143 | TCP |
| SNMP · trap | 161 · 162 | UDP |

## 2. TCP Segment Header

**Tag: high-yield.** The fixed part is **20 B**; everything below is inside it, and **options + padding** may add up to 40 more bytes.

| Bits | Field | Size | Note |
|---|---|---|---|
| 0–15 | Source port | 16 | sender's port |
| 16–31 | Destination port | 16 | receiver's port |
| 32–63 | Sequence number | 32 | numbers **bytes**; the ISN is random |
| 64–95 | Acknowledgement number | 32 | **next byte expected**, cumulative |
| 96–99 | HLEN | 4 | counts **32-bit words**: 5 → 20 B, 15 → **60 B** |
| 100–102 | reserved | 3 | — |
| 103–111 | **flags** | 9 | URG · ACK · PSH · RST · SYN · FIN (+ ECN bits CWR, ECE) |
| 112–127 | Window size | 16 | receiver's free buffer, ≤ 65,535 B unless scaled |
| 128–143 | Checksum | 16 | mandatory, covers a pseudo-header |
| 144–159 | Urgent pointer | 16 | — |
| 160+ | Options + padding | 0–40 bytes | outside the 20 B fixed part |

- 💡 **Trick — flags.** "**U**nskilled **A**ttackers **P**ester **R**eal **S**ecurity **F**olks" = URG ACK PSH RST SYN FIN, in header order.
- ⚠️ **Trap.** HLEN = 8 means 8 × 4 = **32 bytes** of header, not 8.

## 3. TCP Connection Management

**Tag: high-yield.** **3-way open (blue) · 4-way close (red):**

| Step | Client → Server | Server → Client |
|---|---|---|
| open ① | SYN, seq = x | |
| open ② | | SYN+ACK, seq = y, ack = x+1 |
| open ③ | ACK, seq = x+1, ack = y+1 | |
| data | data in both directions | |
| close ① | FIN, seq = u | |
| close ② | | ACK, ack = u+1 — *half-close: server may still send* |
| close ③ | | FIN, seq = w |
| close ④ | ACK, ack = w+1 | |

| Side | States, in order |
|---|---|
| Client | CLOSED · SYN_SENT · ESTABLISHED · FIN_WAIT_1 · FIN_WAIT_2 · **TIME_WAIT (2 MSL)** |
| Server | LISTEN · SYN_RCVD · ESTABLISHED · CLOSE_WAIT · LAST_ACK · CLOSED |

- **3-way handshake** — both sides choose and confirm their **initial sequence numbers**. SYN and FIN each **consume one sequence number**; a pure ACK consumes none.
- **4-way close** — TCP is **full duplex**, so each direction is closed separately (FIN + ACK each way). The server's ACK and FIN may be combined → 3 segments.
- **States** — TCP has **11 states**. The **active closer** waits in **TIME_WAIT for 2 MSL** so a lost final ACK can be resent and old duplicates die out.

| State | Meaning | State | Meaning |
|---|---|---|---|
| LISTEN | server waits for a SYN (passive open) | CLOSE_WAIT | got peer's FIN; app not closed yet |
| SYN_SENT | client sent SYN (active open) | LAST_ACK | sent own FIN, awaits its ACK |
| SYN_RCVD | half-open: SYN+ACK sent | CLOSING | both sides sent FIN at once |

**Why three segments, not two?** Each side must have its own ISN **acknowledged**; a two-way exchange would let an old, delayed SYN open a ghost connection.

✍ **Worked example.** Client ISN = 1000, server ISN = 5000. ① SYN seq = 1000 ② SYN+ACK seq = 5000, ack = **1001** ③ ACK seq = 1001, ack = 5001. The client now sends 400 bytes: seq = 1001 (bytes 1001–1400); the server replies ack = **1401**.

- ⚠️ **Trap.** **RST** aborts a connection at once (no 4-way exchange). **SYN flood**: the attacker never sends the final ACK, filling the server's half-open (SYN_RCVD) queue; defence = **SYN cookies**.
- 💡 **Trick.** Open = "**knock, knock-back, enter**". Close = two **goodbyes and two nods**. Whoever says goodbye first waits at the door (TIME_WAIT).

## 4. Flow Control: the Sliding Window

**Tag: MCQ + Written.** The receiver advertises **rwnd** (free buffer) in every segment; the sender keeps unacknowledged bytes ≤ window. Effective window = **min(rwnd, cwnd)**: flow control protects the **receiver**, congestion control protects the **network**.

| Region of the byte stream seen by the sender | State |
|---|---|
| leftmost | sent & ACKed |
| next | sent, not yet ACKed |
| inside the send window = min(rwnd, cwnd) | **may send now** |
| right of the window | cannot send yet |

The window slides right as ACKs arrive.

✍ **Worked example.** Max throughput ≈ window / RTT. Window 65,535 B, RTT 100 ms → 65,535 × 8 / 0.1 ≈ **5.24 Mbps**, whatever the link speed. That is why the **window-scale** option (shift up to 14, window up to 2<sup>30</sup> B ≈ 1 GB) exists for long fat networks.

**Transmission policy (efficiency):**

| Problem / mechanism | What it does |
|---|---|
| **Silly window syndrome** | tiny segments waste bandwidth (40 B header for 1 B data) |
| Nagle's algorithm (sender) | hold small data until the outstanding data is ACKed or an MSS fills |
| Clark's solution (receiver) | advertise 0 until min(MSS, half the buffer) is free |
| Delayed ACK | wait (≤ 500 ms, typically 200 ms) to piggyback or combine ACKs |
| Zero window | sender stops; probes with the persist timer |

## 5. TCP Timer Management

- **Retransmission (RTO)**: resend if no ACK in time.
- **Persist**: breaks the zero-window **deadlock** with window probes.
- **Keepalive**: checks an idle peer (default 2 hours).
- **TIME_WAIT**: 2 × MSL after an active close.

**RTO: Jacobson / Karn**

```
SRTT   = ⅞ SRTT + ⅛ R
RTTVAR = ¾ RTTVAR + ¼ |SRTT − R|
RTO    = SRTT + 4 × RTTVAR
```

**Karn**: no RTT sample from a retransmitted segment; **double** RTO on every timeout.

✍ **Worked example.** SRTT = 100 ms, RTTVAR = 20 ms, new sample R = 120 ms. RTTVAR = 15 + ¼(20) = 20 ms; SRTT = 87.5 + 15 = 102.5 ms; RTO = 102.5 + 80 = **182.5 ms** (RFC 6298 then applies a 1 s floor).

## 6. TCP Congestion Control

**Tag: high-yield.** The sender keeps a **congestion window (cwnd)**, counted in MSS, and a threshold **ssthresh**. Loss is taken as the sign of congestion. Overall rule: **AIMD** — additive increase, multiplicative decrease.

| Phase / event | Rule | Growth |
|---|---|---|
| **Slow start** (cwnd < ssthresh) | +1 MSS per ACK | **×2 every RTT** |
| **Congestion avoidance** (≥ ssthresh) | +1 MSS per RTT | linear |
| **Timeout** (Tahoe, Reno) | ssthresh = cwnd/2; cwnd = **1 MSS** | slow start again |
| **3 dup ACKs**: fast retransmit | resend the lost segment now, no RTO wait | — |
| … then **fast recovery** (Reno) | ssthresh = cwnd/2; cwnd = ssthresh | linear |
| … Tahoe instead | ssthresh = cwnd/2; cwnd = 1 | slow start |

**Worked trace: ssthresh = 16 at the start** — cwnd (MSS) vs transmission round, Reno:

| Round | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| cwnd | 1 | 2 | 4 | 8 | 16 | 17 | 18 | 19 | **20** |

| Round | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|---|---|---|---|---|---|---|---|---|---|
| cwnd | 1 | 2 | 4 | 8 | 10 | 11 | **12** | 6 | 7 |

Reading the trace: **ssthresh 16** → slow start to 16, then congestion avoidance to 20 → **timeout** → **ssthresh 10** → slow start stops at ssthresh (8 → 10, not 16) → congestion avoidance to 12 → **3 dup ACKs** → **ssthresh 6** → linear growth 6, 7.

Timeout at 20 → ssthresh = **10**, cwnd = 1. Slow start stops at ssthresh (8 → 10, not 16). Three duplicate ACKs at 12 → ssthresh = cwnd = **6** (Reno skips slow start).

- 💡 **Trick.** "**Timeout = start over from 1; dup ACKs = cut in half**." 3 dup ACKs show later segments still get through.
- ⚠️ **Trap.** "Slow" start is actually **exponential**. It is slow only because cwnd starts at 1 MSS (modern stacks start at up to 10). Tahoe 1988, Reno 1990; CUBIC is the Linux default.

## 7. UDP: User Datagram Protocol

**Tag: MCQ favourite.** UDP (RFC 768, 1980) is a **connectionless, unreliable** transport: no handshake, no ACKs, no retransmission, no ordering, no flow or congestion control. It adds only ports and a checksum to IP, and **preserves message boundaries**.

| Bits | Field | Size |
|---|---|---|
| 0–15 | Source port | 16 |
| 16–31 | Destination port | 16 |
| 32–47 | Length | 16 |
| 48–63 | Checksum | 16 |
| 64+ | data | — |

4 fields × 16 bits = **8 bytes**.

- Header fixed at **8 bytes** (TCP: 20–60).
- **Length** = header + data, minimum 8.
- Checksum **optional in IPv4** (0 = unused), **mandatory in IPv6**.
- Max payload over IPv4: 65,535 − 20 − 8 = **65,507 B**.
- Only UDP supports **broadcast and multicast**.

**Used by:** **DNS** queries, DHCP, TFTP, SNMP, RIP (520), NTP (123), VoIP/RTP, live streaming, online games, and **QUIC** (HTTP/3 over UDP 443).

## 8. TCP vs UDP

**Tag: written favourite.**

| Feature | TCP | UDP |
|---|---|---|
| Connection | connection-oriented (handshake) | connectionless |
| Reliability | ACK + retransmission, in-order | best effort; may lose, reorder |
| Data unit | byte stream (segments) | messages (datagrams) |
| Header | 20–60 bytes | 8 bytes |
| Flow / congestion ctrl | yes / yes | no / no |
| Delivery | unicast only | unicast, broadcast, multicast |
| Examples | HTTP, HTTPS, FTP, SMTP, SSH | DNS, DHCP, SNMP, VoIP |

**Other transport protocols.** **SCTP** is reliable and **message-oriented**, with **multi-streaming** and **multi-homing**; 4-way handshake (INIT, INIT-ACK, COOKIE-ECHO, COOKIE-ACK); used for telecom signalling (SIGTRAN). **DCCP** gives unreliable datagrams **with** congestion control, for streaming media. **RTP** runs over UDP and adds timestamps and sequence numbers for real-time audio/video.

- ⚠️ **Trap.** "UDP is unreliable" means it gives **no delivery guarantee**, not that it corrupts data: the checksum still detects errors. DNS uses **TCP** 53 for zone transfers and large replies.

## 9. ATM Adaptation Layer (AAL)

**Tag: MCQ.** An ATM cell is **53 bytes** (5 header + 48 payload). The AAL, above the ATM layer, adapts upper-layer data to cells through two sublayers: **CS** (convergence) and **SAR** (segmentation and reassembly).

| AAL | Class | Traffic | Payload / cell | Typical use |
|---|---|---|---|---|
| AAL1 | A | CBR, timed | 47 B | circuit emulation, voice |
| AAL2 | B | VBR, timed | mini-packets | compressed voice/video |
| AAL3/4 | C, D | data (conn. / connless) | 44 B | SMDS, legacy data |
| **AAL5** | C, D | data, simple (SEAL) | **48 B** | **IP over ATM**, LANE |

**AAL5: one frame → many cells**

| Part | Size |
|---|---|
| user data | 1500 B |
| pad | 28 B |
| trailer | 8 B |
| each cell | 5 + 48 |
| cells | × 32 |

✍ **Worked example.** 1500-byte IP packet over AAL5: 1500 + 8 = 1508 → ⌈1508/48⌉ = **32 cells** (pad 28 B). On the wire 32 × 53 = 1696 B, efficiency 1500/1696 ≈ **88.4 %**. Trailer: UU, CPI, length, **CRC-32**; the PTI bit marks the last cell.

💡 **Trick.** "**1 = Constant, 2 = Variable, 3/4 = old data, 5 = the data workhorse**." Class letters A → D follow the AAL numbers.

## 10. Cryptography: Basics

**Tag: MCQ + Written.** **Plaintext** → (encryption with a **key**) → **ciphertext** → (decryption) → plaintext. **Cryptology** = cryptography (making codes) + cryptanalysis (breaking them). Goals: confidentiality, integrity, authentication, non-repudiation. **Kerckhoffs**: security rests on the key alone.

| | Symmetric (secret key) | Asymmetric (public key) |
|---|---|---|
| Keys | one shared key | public + private pair |
| Speed | fast (bulk data) | 100–1000× slower |
| Keys for n users | **n(n − 1)/2** | 2n |
| Examples | DES, 3DES, IDEA, AES, RC4, Blowfish | RSA, Diffie–Hellman, ECC, ElGamal |

## 11. Classical Ciphers

- ✍ **Substitution.** Replace each letter. **Caesar** (shift 3): ATTACK → **DWWDFN**. Monoalphabetic: 26! keys, but broken by **letter frequency**. Polyalphabetic: Vigenère, Playfair. One-time pad: perfect secrecy.
- ✍ **Transposition.** Reorder the letters. **Rail fence** (2 rails): ATTACKATDAWN → row 1 ATCADW + row 2 TAKTAN = **ATCADWTAKTAN**. Letter frequencies stay unchanged.

Shannon: a strong cipher needs **confusion** (substitution, S-boxes) and **diffusion** (permutation, P-boxes). Block ciphers (DES, AES) encrypt fixed blocks; stream ciphers (RC4, ChaCha20) encrypt bit by bit or byte by byte.

## 12. DES and Triple DES

**Tag: high-yield.**

- IBM (from Lucifer), FIPS 46, **1977**.
- Block **64 bits**; key 64 bits, **56** effective (8 parity).
- **16 Feistel rounds**, 48-bit round keys; IP … IP⁻¹.
- f: expand 32 → 48, XOR key, **8 S-boxes (6 → 4 bits)**, P-box.
- S-boxes = the only **non-linear** part.
- Brute-forced: EFF "Deep Crack", 1998 (56 h).

**One Feistel round**

```
L_i, R_i
  f <- f(R_i) XOR K_i
L_(i+1) = R_i
R_(i+1) = L_i XOR f(R_i)
```

**3DES (EDE):** C = E<sub>K3</sub>(D<sub>K2</sub>(E<sub>K1</sub>(P))). 3 keys: 168-bit key, ≈ 112-bit strength; 2 keys (K1 = K3): 112-bit key. K1 = K2 = K3 → single DES. **Double DES** ≈ 57 bits only (**meet-in-the-middle**).

## 13. IDEA and AES

IDEA: Lai & Massey (ETH Zürich). AES: Rijndael (Daemen & Rijmen), FIPS 197; each round = SubBytes, ShiftRows, MixColumns, AddRoundKey.

| Cipher | Block | Key | Rounds | Structure / note |
|---|---|---|---|---|
| DES | 64 | 56 | 16 | Feistel |
| **IDEA** 1991 | 64 | **128** | 8 + ½ | XOR, + mod 2<sup>16</sup>, × mod 2<sup>16</sup>+1; PGP |
| **AES** 2001 | 128 | 128/192/256 | **10/12/14** | SPN (Rijndael) |

- 💡 **Trick.** DES "**64-56-16**" (block, key, rounds). IDEA "**64-128-8**". AES rounds "**10-12-14**" = key/32 + 6.
- ⚠️ **Trap.** IDEA is **not Feistel**: 6 subkeys × 8 rounds + 4 (half-round) = **52** subkeys. AES is not Feistel either.

## 14. Public-Key Cryptography

**Tag: high-yield.** Each user has a **public key** (published) and a **private key** (secret). For confidentiality: encrypt with the receiver's public key, decrypt with the receiver's private key. Security rests on a hard problem: **factoring** (RSA) or the **discrete logarithm** (Diffie–Hellman, ElGamal, ECC). Diffie–Hellman (**1976**) came first, RSA (1977) next.

**RSA (Rivest, Shamir, Adleman, 1977)**

1. Choose primes p, q; **n = p × q**
2. **φ(n) = (p − 1)(q − 1)**
3. Choose e with 1 < e < φ(n), gcd(e, φ(n)) = 1
4. d = e⁻¹ mod φ(n), i.e. **e · d ≡ 1 (mod φ(n))**
5. Public key (e, n) · private key (d, n)
6. Encrypt C = M<sup>e</sup> mod n · decrypt M = C<sup>d</sup> mod n

✍ **Worked example.**

```
p = 3, q = 11  →  n = 33, φ = 2 × 10 = 20
e = 7           (gcd(7, 20) = 1)
7d ≡ 1 (mod 20):  7 × 3 = 21 = 20 + 1  →  d = 3
M = 2 :  C = 2⁷ mod 33 = 128 − 99 = 29
Check: 29³ mod 33;  29 ≡ −4, (−4)³ = −64 ≡ −64 + 66 = 2   ✓
```

Real keys: n of **2048 bits** or more. RSA is slow, so it is used to exchange a session key or to sign (see the Authentication & Digital Signatures lesson), while AES encrypts the bulk data: the **hybrid** scheme used by TLS and PGP.

**Diffie–Hellman key exchange** — key agreement over an open channel. Public: **p = 23, g = 5**.

| Party | Secret | Sends over the wire | Computes |
|---|---|---|---|
| Alice | a = 4 | A = 5⁴ mod 23 = 4 | K = 10⁴ mod 23 = 18 |
| Bob | b = 3 | B = 5³ mod 23 = 10 | K = 4³ mod 23 = 18 |

Both get **K = g^(ab) mod p = 18**; a, b and K never cross the wire.

✍ **Check the arithmetic.** 5⁴ = 625 = 27 × 23 + 4 → A = 4. 5³ = 125 = 5 × 23 + 10 → B = 10. Alice: 10² = 100 ≡ 8, 8² = 64 ≡ **18**. Bob: 4³ = 64 ≡ **18** ✓

- ⚠️ **Trap.** Plain Diffie–Hellman **agrees on a key; it does not encrypt** and has no authentication, so it falls to a **man-in-the-middle** attack. A and B are public values, not the key.
- 💡 **Trick.** RSA: "**Public Encrypts, Private Decrypts**" for secrecy. **ECC**: 256-bit ECC ≈ 3072-bit RSA ≈ AES-128 strength, so much smaller keys.

---

## Night-before-the-exam sheet

**Fact sheet**

| | |
|---|---|
| Ports 16 bits: 0–1023 well-known | TCP = 6, UDP = 17 (IP protocol no.) |
| TCP header 20–60 B · HLEN × 4 | UDP header 8 B · max payload 65,507 B |
| SYN → SYN+ACK → ACK; SYN/FIN use 1 seq no. | TIME_WAIT = 2 MSL · 11 TCP states |
| window = min(rwnd, cwnd) · rate ≤ W/RTT | RTO = SRTT + 4 · RTTVAR |
| slow start ×2 per RTT · CA +1 MSS per RTT | timeout: cwnd = 1 · 3 dup ACKs: cwnd = ½ |
| ATM cell 53 = 5 + 48 · AAL5 trailer 8 B | symmetric keys n(n − 1)/2 · public 2n |
| DES 64/56/16 · 3DES 168 (≈112) | IDEA 64/128/8.5, 52 subkeys |
| AES block 128; rounds 10/12/14 | RSA φ = (p − 1)(q − 1), ed ≡ 1 mod φ |

**Top 12 one-liners for MCQs**

1. Transport layer: process-to-process delivery
2. TCP is full duplex, byte-stream
3. Persist timer: zero-window deadlock
4. Nagle = sender side, Clark = receiver side
5. Fast retransmit: 3 duplicate ACKs
6. Reno adds fast recovery to Tahoe
7. AAL1 = CBR; AAL5 = IP over ATM
8. Caesar = substitution; rail fence = transposition
9. DES S-box: 6 bits in, 4 bits out
10. IDEA used in PGP
11. RSA rests on factoring n
12. DH: key exchange, open to MITM

**Top traps**

HLEN counts 4-byte words · ack no. = next byte expected · "slow" start is exponential · Reno: timeout → 1, dup ACKs → half · UDP checksum optional only in IPv4 · DES key 64 bits written, 56 effective · IDEA and AES are not Feistel · Double DES ≈ single DES strength · DH does not encrypt

**All tricks together**

URG ACK PSH RST SYN FIN = "Unskilled Attackers Pester Real Security Folks" · knock, knock-back, enter · whoever says goodbye first waits (TIME_WAIT) · timeout = start over, dup ACKs = halve · AAL 1 constant, 2 variable, 5 data · 64-56-16, 64-128-8, 10-12-14 · Public Encrypts, Private Decrypts

**Hybrid encryption in TLS**

| Stage | Box | Role |
|---|---|---|
| 1 | RSA / DH | share session key |
| 2 | AES session key | bulk encryption |
| 3 | over TCP 443 | reliable stream |

One HTTPS session uses the whole lesson.

---

## Practice MCQs (exam pattern, 10 marks)

1. Size of the UDP header: (a) 20 bytes (b) 8 bytes (c) 16 bytes (d) 4 bytes
2. Which TCP flag opens a connection? (a) FIN (b) RST (c) PSH (d) SYN
3. After a retransmission timeout, TCP sets cwnd to: (a) 1 MSS (b) half of cwnd (c) ssthresh + 3 (d) unchanged
4. The AAL most used to carry IP over ATM: (a) AAL1 (b) AAL2 (c) AAL3/4 (d) AAL5
5. DES block size and effective key length: (a) 64 / 56 bits (b) 128 / 128 bits (c) 64 / 128 bits (d) 56 / 64 bits
6. The key length of IDEA: (a) 56 bits (b) 64 bits (c) 128 bits (d) 256 bits
7. Number of rounds in AES-256: (a) 10 (b) 12 (c) 14 (d) 16
8. In RSA with p = 3 and q = 11, φ(n) is: (a) 33 (b) 20 (c) 22 (d) 30
9. TCP fast retransmit is triggered by: (a) a timeout (b) 3 duplicate ACKs (c) a zero window (d) an RST
10. Ports 0–1023 are called: (a) well-known (b) registered (c) dynamic (d) ephemeral

**Answer key:** 1-b · 2-d · 3-a · 4-d · 5-a · 6-c · 7-c · 8-b · 9-b · 10-a

## Written question (8 marks)

Explain slow start and congestion avoidance. With ssthresh = 8 MSS and cwnd = 1 at round 1, a timeout occurs when cwnd = 12. Trace cwnd up to round 13.

**Model answer:**

1. **Slow start (2)** — cwnd += 1 MSS per ACK, so it doubles every RTT until it reaches ssthresh.
2. **Congestion avoidance (2)** — cwnd += 1 MSS per RTT (additive increase); loss → multiplicative decrease.
3. **Rounds 1–8 (2)** — 1, 2, 4, **8**, 9, 10, 11, **12** → timeout.
4. **Rounds 9–13 (2)** — ssthresh = 12/2 = **6**, cwnd = 1. Rounds 9–13: 1, 2, 4, **6** (capped at ssthresh), 7.

## Before the exam ✓

- Can draw the TCP header with field sizes.
- Can draw the handshake and close with seq/ack numbers.
- Can trace cwnd through a timeout and 3 dup ACKs.
- Can do an RSA and a DH example by hand.

**Also practise (written):** ① TCP vs UDP with 2 apps each ② AAL types with uses ③ DES round structure ④ RSA: p = 5, q = 11, e = 3 → d = 27

## Night-before one-liners

Transport layer = process-to-process, end hosts only · TCP = full duplex byte-stream, 20–60 B header · ports 0–1023 well-known, TCP = 6 / UDP = 17 · HLEN counts 4-byte words · SYN → SYN+ACK → ACK, SYN and FIN use one seq no. · TIME_WAIT = 2 MSL, 11 states · window = min(rwnd, cwnd), rate ≤ W/RTT · persist timer beats the zero-window deadlock · Nagle sender-side, Clark receiver-side · RTO = SRTT + 4 · RTTVAR, Karn doubles it · slow start ×2 per RTT, CA +1 MSS per RTT · timeout → cwnd = 1, 3 dup ACKs → halve · UDP 8 B header, max payload 65,507 B, checksum optional only in IPv4 · only UDP broadcasts and multicasts · SCTP = multi-streaming + multi-homing · ATM cell 53 = 5 + 48, AAL5 carries IP over ATM with an 8 B trailer · DES 64/56/16, 3DES 168 (≈112), Double DES ≈ 57 · IDEA 64/128/8.5 with 52 subkeys, used in PGP · AES block 128, rounds 10/12/14 = key/32 + 6 · Caesar is substitution, rail fence is transposition · symmetric keys n(n − 1)/2, public-key 2n · RSA φ = (p − 1)(q − 1), e · d ≡ 1 mod φ · DH agrees a key, never encrypts, and is open to MITM · TLS = RSA/DH for the key + AES for the bulk.
