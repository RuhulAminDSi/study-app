# Protocol Hierarchies, Data Link & LANs: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/09-computer-networking-and-security/net-protocols-datalink.en.html` (handwritten-style PDF: `notes/pdf/09-computer-networking-and-security/net-protocols-datalink.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Computer Networking and Security):** "Computer Networking and Security: **Protocol hierarchies**; **Data link control: HDLC**; DLL in Internet; DLL of ATM; **LAN Protocols: Standards IEEE 802.\***; Hubs, Bridges, and Switches, FDDI, Fast Ethernet; …". Framing, error and flow control and medium access are added because every DLL question rests on them. Routing, IP, TCP, security and the full OSI-vs-TCP/IP comparison are in the other lessons of this chapter.

**High-yield:** ① PDU name per layer ② bit stuffing, flag 7E ③ CRC & Hamming bits ④ GBN 2ᵐ − 1, SR 2ᵐ⁻¹ ⑤ ALOHA 18.4% / 36.8% ⑥ Ethernet 64–1518 B ⑦ hub L1 · switch L2.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Protocol hierarchies, DLL services — p. 2 · 2. Framing, parity, checksum — p. 3 · 3. CRC & Hamming code — p. 4 · 4. Flow control & ARQ — p. 5 · 5. HDLC — p. 6 · 6. PPP, SLIP & ATM data link — p. 7 · 7. ALOHA, CSMA/CD, CSMA/CA — p. 8 · 8. Wi-Fi, Token Ring, FDDI, IEEE 802 — p. 9 · 9. Ethernet, hubs, switches, VLAN — p. 10 · 10. Night-before sheet — p. 11 · 11. Practice MCQs + written — p. 12.

---

## 1. Protocol Hierarchies: Why Layers?

A network is a **stack of layers**; each layer offers a **service** to the layer above and hides how it does it. Layer n talks to layer n on the other machine — its **peer** — through the **layer-n protocol**. **Architecture** = layers + protocols; a **protocol stack** = one protocol per layer.

- **Protocol**: the rules between **peers** (horizontal)
- **Service**: what a layer gives to the layer above (vertical)
- **Interface**: the boundary between two adjacent layers
- **SAP (service access point)**: the port, IP, MAC
- **Encapsulation**: each layer adds its header on the way down

| Layer (OSI no.) | PDU | Address | Device | Example protocols |
|---|---|---|---|---|
| Application (7) | message | name / URL | gateway | HTTP, SMTP, DNS |
| Transport (4) | segment | port (16 bit) | (end hosts) | TCP, UDP |
| Network (3) | packet | IP (32/128 bit) | router | IP, ICMP |
| **Data link (2)** | **frame** | **MAC (48 bit)** | bridge, switch | Ethernet, HDLC, PPP |
| Physical (1) | bits | none | hub, repeater | RS-232, 10Base-T |

The diagram: Host A and Host B each carry Application, Transport, Network, Data link, Physical from top to bottom; four dashed purple arrows between them are the **virtual peer protocols** (one per peer layer, data link included), while the only real path is the **physical medium** joining the two Physical layers.

OSI 7 vs TCP/IP 4: full comparison in the OSI Model lesson.

**Connection-oriented** (set up → use → release: TCP, ATM) vs **connectionless** (the full address is in every unit: IP, UDP, Ethernet). **OSI primitives:** Request → Indication → Response → Confirm. **Design issues:** addressing, error and flow control, multiplexing, routing, fragmentation.

## 2. The Data Link Layer: Jobs & Services

- **Framing**: cut the bit stream into frames
- **Physical addressing**: the MAC address in the header
- **Error control**: detect (CRC) and retransmit
- **Flow control**: don't swamp the receiver
- **Access control**: who uses a shared link

**IEEE sublayers.** **LLC (802.2)**: flow and error control, which network protocol is carried. **MAC (802.3, 802.5, 802.11 …)**: access + framing on one medium.

Three service types: **unacknowledged connectionless** (Ethernet) · **acknowledged connectionless** (Wi-Fi) · **acknowledged connection-oriented** (HDLC). DLL delivery is **hop-to-hop**; transport is end-to-end.

- ⚠️ **Trap:** the data link layer adds a **trailer** (the FCS) as well as a header; the layers above add headers only.

## 3. Framing: Where Does a Frame Start?

| Method | How | Weakness / user |
|---|---|---|
| Byte count | a header field gives the frame length | one bad count → **sync lost** |
| Flag + **byte stuffing** | FLAG at both ends; ESC before FLAG/ESC in the data | byte-oriented: PPP, BISYNC |
| Flag + **bit stuffing** | flag **01111110**; 0 after five 1s | bit-oriented: HDLC, SDLC |
| Coding violations | symbols that never occur in the data | 4B/5B (Fast Ethernet, FDDI) |
| Fixed size | every frame the same length | ATM 53-byte cells |

**The bit-stuffing picture.** Data `0110 11111 11111 00` → sent `0110 11111 **0** 11111 **0** 00`: five consecutive 1s make the sender stuff a 0 (red). The HDLC frame is `01111110` | stuffed payload + FCS | `01111110`, so the flag pattern can never appear inside the frame.

- 💡 **Trick:** "**Five ones, then a zero.**" The receiver, after 11111: the next bit 0 → delete it; `0111111`**`0`** → flag; seven 1s → abort.
- ✍ **Byte stuffing.** A FLAG B → A **ESC** FLAG B · A ESC B → A **ESC** ESC B · A ESC FLAG B → A ESC ESC ESC FLAG B
- ⚠️ **Trap:** the 0 is stuffed after five 1s **even if the next data bit is already 0**; the receiver always removes it. Worst case: one extra bit per five data bits.

## 4. Errors, Parity & Checksum

**Burst error** length = first to last bad bit (1 μs of noise at 10 Mbps hits 10 bits). **Detection** + resend = **ARQ** (LANs, TCP); **correction** = **FEC** (satellite, broadcast, ECC memory).

| Method | Detects | Misses | Used in |
|---|---|---|---|
| 1-D parity | any **odd** number of bit errors | any **even** number | serial ASCII |
| 2-D parity | all 1-, 2-, 3-bit errors; corrects 1 | some 4-bit | block codes |
| Checksum | 16-bit 1's-complement sum | swapped words | IP, TCP, UDP |
| CRC | all bursts ≤ r bits, most others | very few | Ethernet, HDLC, PPP |

✍ **Checksum (4-bit words).** Data 7, 11, 12, 0, 6 → sum = 36 = `10 0100`₂ → wrap the carry: `0100 + 10 = 0110` (6) → checksum = complement = **1001 (9)**. Receiver: 36 + 9 = 45 = `10 1101` → `1101 + 10 = 1111` → complement `0000` → accept.

## 5. CRC (Cyclic Redundancy Check)

**Method.** Generator **G(x)** of degree **r** (r + 1 bits): append **r zeros**, divide by G in **modulo-2** (XOR); the r-bit remainder is the CRC; send data + CRC. The receiver divides by G: **remainder 0 → accept**.

✍ **Worked example.** Data 100100, G = 1101 (x³ + x² + 1, r = 3)

1. Dividend `100100`**`000`**
2. `1001⊕1101 = 0100` → `1000⊕1101 = 0101`
3. `1010⊕1101 = 0111` → `1110⊕1101 = 0011`
4. `0110` (leading 0: ⊕0000) → `1100⊕1101` = **001** → send **100100 001**

**What CRC catches**

- all single-bit errors
- all odd-count errors if (x + 1) divides G
- **all bursts ≤ r**
- burst of r + 1 bits: 1 − (½)^(r−1)
- longer bursts: 1 − (½)^r

**CRC-8** ATM HEC · **CRC-16** HDLC, PPP · **CRC-32** Ethernet, Wi-Fi

- ⚠️ **Trap:** append **degree** zeros (3 for 1101), not the number of generator bits (4). Modulo-2 subtraction = XOR: there are no borrows.

## 6. Hamming Distance & Hamming Code

**Hamming distance** d(x, y) = the positions where two codewords differ = the number of 1s in x ⊕ y; d(10101, 11110) = 01011 → **3**. **d_min** = the smallest distance between any two valid codewords.

**Rules.** Detect s errors: **d_min ≥ s + 1** · correct t errors: **d_min ≥ 2t + 1** · number of check bits: **2^r ≥ m + r + 1** → m = 4: 3 (7, 4) · m = 7: 4 (11, 7) · m = 8: 4 (12, 8) · m = 16: 5 · m = 32: 6

**The (7, 4) layout for data 1011.** Positions 1…7 hold P1, P2, D, P4, D, D, D; the codeword is `0 1 1 0 0 1 1`.
- **P1** checks positions 1, 3, 5, 7
- **P2** checks positions 2, 3, 6, 7
- **P4** checks positions 4, 5, 6, 7

✍ **Worked example.** Data 1011 placed in positions 3, 5, 6, 7 (even parity):

1. P1 = 3⊕5⊕7 = 1⊕0⊕1 = 0
2. P2 = 3⊕6⊕7 = 1⊕1⊕1 = 1
3. P4 = 5⊕6⊕7 = 0⊕1⊕1 = 0 → **0110011**
4. Bit 6 flips: `0110001` → checks C4 C2 C1 = 1 1 0 = **6** → flip bit 6

- 💡 **Trick:** parity bits sit at **powers of 2**; position k is checked by the bits whose numbers sum to k: 6 = 4 + 2.
- ⚠️ **Trap:** Hamming (7, 4) has d_min = 3: it corrects 1 **or** detects 2. One extra parity bit gives SEC-DED (ECC RAM).

## 7. Flow Control: Stop-and-Wait

**Flow control** stops a fast sender flooding a slow receiver. **Error control** = **ARQ** (automatic repeat request): detect, ACK/NAK, timeout, resend. **Stop-and-wait**: send one frame, then wait for its ACK; sequence numbers 0 and 1 catch duplicates. The line sits idle for ≈ 2Tp per frame while the frame travels Tt out and the ACK Tp back.

**Formulas**

- Tt = L / B (frame bits ÷ bandwidth)
- Tp = d / v (v ≈ 2 × 10⁸ m/s in cable)
- **a = Tp / Tt**
- Stop-and-wait: **η = 1 / (1 + 2a)**
- Sliding window: η = W / (1 + 2a), maximum 1
- 100% busy line needs **W ≥ 1 + 2a**
- Throughput = η × B · BDP = B × RTT

✍ **Worked example.** B = 1 Mbps, L = 1000 bits, Tp = 20 ms. Tt = 1 ms → a = 20 → stop-and-wait η = 1/41 = **2.4%** (24 kbps). Full use needs W ≥ 41 → Go-Back-N: 2ᵐ − 1 ≥ 41 → **m = 6**; Selective Repeat: 2ᵐ⁻¹ ≥ 41 → **m = 7**.

## 8. Sliding Window: Go-Back-N vs Selective Repeat

| Point | Stop-and-Wait | Go-Back-N | Selective Repeat |
|---|---|---|---|
| Sender window | 1 | **2ᵐ − 1** | **2ᵐ⁻¹** |
| Receiver window | 1 | 1 | 2ᵐ⁻¹ |
| Frame lost | resend it | resend it **and all after it** | resend **only** that frame |
| ACK style | one per frame | cumulative | individual (+ NAK) |
| Out-of-order frames | n/a | discarded | buffered |

m = 3 → sequence numbers 0–7: GBN window **7**, SR window **4**. **Piggybacking**: the ACK rides in a reverse-direction data frame (the HDLC N(R)). GBN wastes bandwidth on errors; SR needs the most buffers.

- 💡 **Trick:** GBN = "**all but one**" (2ᵐ − 1). SR = "**half**" (2ᵐ⁻¹).
- ⚠️ **Trap:** an SR window over half → an old and a new frame share a **number**.

## 9. HDLC (High-Level Data Link Control)

ISO's **bit-oriented** protocol (from IBM's SDLC), point-to-point or multipoint, half or full duplex: **bit stuffing**, flag **01111110 (7E)**, sliding-window ARQ. Family: **LAPB** (X.25), **LAPD** (ISDN), LAPM (modems); it is the basis of PPP and of 802.2 LLC framing.

**The frame**

| Field | Flag | Address | Control | Information | FCS | Flag |
|---|---|---|---|---|---|---|
| Size | 8 bits | 8 bits (extendable) | 8 or 16 bits | variable (I-frames) | 16 or 32 bits (CRC) | 8 bits |

The FCS covers address + control + information. One flag may close one frame and open the next.

**Stations.** **Primary** sends commands, **secondary** sends responses, **combined** does both. **Configurations:** **unbalanced** = 1 primary + n secondaries; **balanced** = 2 combined stations (point-to-point).

| Transfer mode | Config. | Who may start sending? |
|---|---|---|
| **NRM** Normal Response Mode | unbalanced | secondary only when **polled** (multipoint) |
| **ARM** Asynchronous Response Mode | unbalanced | secondary without permission (rare) |
| **ABM** Asynchronous Balanced Mode | balanced | either station, any time (LAPB; most common) |

**Control field (8-bit, modulo 8)**

| Frame | Bits 1 → 8 | Job |
|---|---|---|
| **I**-frame | **0** · N(S) 3 · P/F · N(R) 3 | user data + piggybacked ACK |
| **S**-frame | **10** · code 2 · P/F · N(R) 3 | ACK / NAK, flow control (no data) |
| **U**-frame | **11** · M 2 · P/F · M 3 | link management: SNRM, SABM, DISC, UA, FRMR |

| S code | Name | Meaning |
|---|---|---|
| 00 | RR | ACK, ready |
| 10 | RNR | ACK, but stop |
| 01 | REJ | NAK: Go-Back-N |
| 11 | SREJ | NAK: Selective |

3-bit N(S)/N(R) → window ≤ **7**; with extended 16-bit control (SABME) → modulo 128, window ≤ 127. **P/F**: Poll in a command, Final in a response.

- 💡 **Trick:** I-S-U start with **0, 10, 11**. RR/RNR = "Ready / Not Ready", REJ = reject all, SREJ = reject one.
- ⚠️ **Trap:** N(R) = the **next frame expected**, not the last one received: an I-frame with N(S) = 3, N(R) = 5 is frame 3 and acknowledges frames up to 4. HDLC is bit-oriented; PPP looks similar but is **byte-oriented**.

## 10. DLL in the Internet: SLIP & PPP

Point-to-point links (dial-up, leased lines, DSL as PPPoE, router-to-router over SONET) use **PPP** (RFC 1661), the successor of SLIP. On LANs the Internet runs over Ethernet and Wi-Fi.

**The frame**

| Field | 7E | FF | 03 | Protocol | Payload | FCS | 7E |
|---|---|---|---|---|---|---|---|
| Meaning | flag | all stations | unnumbered | 1–2 bytes | ≤ 1500 B (default MRU) | 2 or 4 B | flag |

Protocol numbers: **0021 = IPv4 · C021 = LCP · C023 = PAP · C223 = CHAP · 8021 = IPCP**. The frame is HDLC-like but byte-oriented.

| Point | SLIP (RFC 1055) | PPP (RFC 1661) |
|---|---|---|
| Framing | END byte C0, escape DB | flag 7E, escape **7D**, byte ⊕ 20 |
| Error detection | none | FCS (CRC-16 or CRC-32) |
| Network protocols | IP only | many (protocol field, NCPs) |
| IP address | configured by hand | negotiated (IPCP) |
| Authentication | none | PAP or CHAP |

**PPP phases:** Dead → Establish (**LCP**: link options) → Authenticate (optional) → Network (**NCP**, e.g. IPCP) → Open → Terminate → Dead. **PAP**: 2-way, password in clear text, once. **CHAP**: 3-way challenge–response (MD5 hash of challenge + secret), the secret is never sent, repeated during the session. Stuffing: 7E → 7D 5E, 7D → 7D 5D.

- ⚠️ **Trap:** PPP **detects** errors (FCS) but in its default mode has no sequence numbers, ACKs or flow control: a bad frame is simply dropped and the upper layers recover.

## 11. Data Link Layer of ATM

**Idea.** ATM switches fixed **53-byte cells** = 5-byte header + 48-byte payload over virtual circuits (VPI/VCI instead of MAC addresses). The data-link-type work is done by the **TC (Transmission Convergence) sublayer** under the ATM layer.

**The UNI cell header (5 bytes = 40 bits)**

| Byte | Fields |
|---|---|
| 1 | GFC 4 · VPI 4 |
| 2 | VPI 4 · VCI 4 |
| 3 | VCI 8 |
| 4 | VCI 4 · PT 3 · CLP |
| 5 | HEC 8 (CRC-8) |

+ 48 B payload. At the NNI the VPI is 12 bits and there is no GFC.

- **HEC**: CRC-8 (x⁸ + x² + x + 1) over the first **4 header bytes only**; it corrects 1-bit and detects multi-bit header errors
- **Cell delineation**: find cell edges by checking HEC (hunt → presync → sync)
- Cell-rate decoupling (idle cells); fit cells into SONET/SDH frames
- **CLP = 1**: this cell is dropped first under congestion

- 💡 **Trick:** "**5 + 48 = 53**". 48 was a compromise between 32 and 64 bytes. Cell tax = 5/53 ≈ **9.4%**.
- 📌 **Elsewhere:** AAL → Transport lesson; ATM network layer (VPI/VCI switching) → IP lesson.

## 12. Medium Access Control: Who Talks Next?

**Random access:** ALOHA, CSMA, CSMA/CD, CSMA/CA · **Controlled access:** reservation, polling, **token passing** · **Channelization:** FDMA, TDMA, CDMA.

| | Pure ALOHA | Slotted ALOHA |
|---|---|---|
| Send | any time | only at a slot start |
| Vulnerable for | 2 × T_fr | T_fr |
| Throughput S | G·e^(−2G) | G·e^(−G) |
| Max S | **18.4%** | **36.8%** |
| at load | G = 0.5 | G = 1 |

The curves: the slotted curve peaks at 36.8% at G = 1, the pure curve peaks at 18.4% at G = 0.5.

✍ **Worked example.** 200-bit frames on a 200 kbps channel → T_fr = 1 ms. Load 1000 frames/s → G = 1. Pure: S = e⁻² = 0.135 → **135 frames/s** succeed. Slotted: S = e⁻¹ = 0.368 → **368 frames/s**.

| CSMA type | Channel idle | Channel busy | Note |
|---|---|---|---|
| 1-persistent | send at once | keep sensing, send when idle | Ethernet; the most collisions |
| Non-persistent | send at once | wait a random time, sense again | fewer collisions, more delay |
| p-persistent | send with probability p | wait for the next slot | slotted channels |

### CSMA/CD (classic half-duplex Ethernet)

Listen before **and while** sending; on a collision send a **jam** signal, abort, back off. To detect a collision the sender must still be sending when the signal returns: **T_fr ≥ 2 × T_p** → **L_min = 2 × T_p × B**.

✍ **Example.** 10 Mbps, worst round trip 51.2 μs → L_min = 10⁷ × 51.2 × 10⁻⁶ = **512 bits = 64 bytes**, the Ethernet minimum frame.

**Binary exponential backoff:** after the n-th collision wait K × 512 bit-times, with K random in 0 … 2^min(n,10) − 1; give up after **16** tries.

- ⚠️ **Trap:** full-duplex switched Ethernet has **no collisions**, so CSMA/CD is switched off. Carrier sensing cannot stop all collisions because of propagation delay.

**CSMA/CA (wireless).** A radio cannot hear a collision while it transmits (its own signal swamps the receiver), and some stations cannot hear each other. So Wi-Fi **avoids** collisions: interframe spaces, a random contention window and a **positive ACK** for every frame.

## 13. IEEE 802.11 (Wi-Fi)

The **hidden-station problem**: stations A and C are each in range of B but cannot hear each other, so they collide at B. It is cured by **RTS/CTS**.

- **RTS/CTS**: the sender asks (RTS), the receiver grants (CTS); everyone who hears the CTS keeps quiet
- **NAV**: virtual carrier sense, the "busy until" timer
- IFS order: **SIFS < PIFS < DIFS**; ACK/CTS wait only SIFS, so they win
- **DCF** (contention, mandatory) · **PCF** (the AP polls, optional)
- A frame carries up to **4 MAC addresses** (via the AP)

| Standard | Band | Rate | Modulation / notes |
|---|---|---|---|
| 802.11b | 2.4 GHz | 11 Mbps | DSSS |
| 802.11a | 5 GHz | 54 Mbps | OFDM |
| 802.11g | 2.4 GHz | 54 Mbps | OFDM |
| 802.11n (Wi-Fi 4) | 2.4 / 5 GHz | 600 Mbps | MIMO |
| 802.11ac (Wi-Fi 5) | 5 GHz | ≈ 6.9 Gbps | MU-MIMO |
| 802.11ax (Wi-Fi 6/6E) | up to 6 GHz | ≈ 9.6 Gbps | OFDMA |

**Topology terms.** BSS = an AP + its stations; ESS = several BSSs joined on a distribution system; IBSS = ad hoc. **Security:** WEP (broken) → WPA → **WPA2** (802.11i, AES-CCMP) → WPA3.

- 💡 **Trick:** wired = **D**etect (CD), wireless = **A**void (CA). "**S**hort waits win": SIFS is the shortest.

## 14. Token Passing: Token Ring & FDDI

**Token Ring (IEEE 802.5).** 4 or 16 Mbps; a 3-byte **token** circulates and only its holder may send; differential Manchester coding; star-wired ring through an MAU; **no collisions, deterministic delay**. Token Bus = 802.4.

**FDDI (ANSI X3T9.5).** **100 Mbps** over fibre; **dual counter-rotating rings** (on a break the ring wraps around); timed token; 4B/5B + NRZ-I; ring ≤ 100 km, ≈ 500 stations. **Trap:** it is **ANSI**, not IEEE 802.

## 15. The IEEE 802 Family

| Standard | Covers | Standard | Covers |
|---|---|---|---|
| 802.1D | bridges, Spanning Tree | **802.3** | Ethernet (CSMA/CD) |
| 802.1Q · 802.1X | VLAN tag · port access control | 802.4 · 802.5 | Token Bus · Token Ring |
| 802.2 | LLC | 802.6 | DQDB (MAN) |
| 802.3u | Fast Ethernet 100 Mbps | **802.11** | wireless LAN (CSMA/CA) |
| 802.3z / ab | Gigabit (fibre / UTP) | 802.15 | WPAN: .1 Bluetooth, .4 (ZigBee) |
| 802.3ae · af | 10 GbE · Power over Ethernet | 802.16 | WiMAX (wireless MAN) |

## 16. Ethernet Frame & MAC Address

**The frame**

| Field | Preamble | SFD | Destination | Source | Type/Len | Data + pad | FCS |
|---|---|---|---|---|---|---|---|
| Size | 7 B | 1 B | 6 B | 6 B | 2 B | 46–1500 B | 4 B (CRC-32) |

**Frame = 64 to 1518 bytes (1522 with a VLAN tag).** The Preamble and SFD are added by the PHY.

- Preamble 10101010 × 7, SFD **10101011** (not counted in the frame size); data below 46 B is **padded**; interframe gap 96 bit-times. Type ≥ 0x0600 → **EtherType** (0800 IPv4, 0806 ARP, 86DD IPv6); ≤ 1500 → a length.
- **MAC address** **48 bits**: the first 24 bits = **OUI** (vendor); LSB of the first byte: 0 unicast, 1 multicast; broadcast **FF-FF-FF-FF-FF-FF**.

**Media:** 10Base5 thick coax 500 m · 10Base2 thin coax 185 m · 10Base-T UTP 100 m · 10Base-F 2 km (Manchester) · Fast Ethernet 802.3u: **100Base-TX** Cat 5, 100 m, 4B/5B + MLT-3 · 100Base-FX fibre 2 km · 100Base-T4 Cat 3, 8B/6T.

- ⚠️ **Trap:** minimum frame **64 B**, minimum data **46 B**; maximum frame 1518 B, MTU 1500 B. Fast Ethernet keeps the 64-byte minimum.

📌 Gigabit Ethernet: Authentication & DNS lesson.

## 17. Hubs, Bridges, Switches & VLANs

| Device | Layer | Forwards by | Collision domain | Broadcast domain |
|---|---|---|---|---|
| Repeater / **hub** | 1 | nothing: repeats to all ports | 1 for all ports | 1 |
| **Bridge** / **switch** | 2 | MAC address | 1 per port | 1 (per VLAN) |
| **Router** / L3 switch | 3 | IP address | 1 per port | **1 per port** |

A switch with ports 1–4 and hosts A (1), B (2), C (3), D (4) **learns source MAC → port**, and an **unknown destination → flood**.

**Transparent bridge** (802.1D): **backward learning** of each **source** MAC → port; then **forward** to the known port, **filter** if it came in on the same port, **flood** if unknown or broadcast. Switch modes: **store-and-forward** (CRC checked) · **cut-through** (after the destination MAC) · **fragment-free** (first 64 B).

**STP (802.1D).** Loops cause **broadcast storms**; STP elects a **root bridge** (lowest priority + MAC) and blocks ports → one loop-free tree. RSTP = 802.1w.

**VLAN (802.1Q).** A software **broadcast domain**. 4-byte tag: TPID 8100, PCP 3, DEI 1, VID 12 bits → **4094**; trunks carry tags.

✍ **Worked example.** Router → switch (4 PCs) and → hub (3 PCs). Collision domains = 5 switch ports + 1 hub = **6**; broadcast domains = **2**.

---

## Night-before-the-exam fact sheet

- PDU: bits → frame → packet → segment
- DLL adds header + trailer (FCS)
- Bit stuffing: 0 after five 1s · flag 7E
- PPP escape 7D, byte ⊕ 20 · SLIP C0
- Parity catches odd-count errors only
- CRC: degree r → r zeros, bursts ≤ r
- Detect s: d_min ≥ s + 1
- Correct t: d_min ≥ 2t + 1
- Hamming: 2^r ≥ m + r + 1
- m = 4 → 3 · 7 → 4 · 8 → 4 · 16 → 5
- a = Tp / Tt · S&W η = 1/(1 + 2a)
- window η = W/(1 + 2a); W ≥ 1 + 2a
- GBN W ≤ 2ᵐ − 1 · SR W ≤ 2ᵐ⁻¹
- HDLC NRM · ARM · ABM; I/S/U
- S-frames RR 00 · REJ 01 · RNR 10 · SREJ 11
- ATM 53 = 5 + 48; HEC = CRC-8
- Pure ALOHA 18.4% at G = 0.5
- Slotted ALOHA 36.8% at G = 1
- CSMA/CD: L_min = 2 · Tp · B
- Backoff 0 … 2^min(n,10) − 1; quit at 16
- Ethernet 64–1518 B, data 46–1500
- MAC 48 bit, OUI 24 · bcast FF…FF
- SIFS < PIFS < DIFS · RTS/CTS
- FDDI 100 Mbps dual ring (ANSI)
- 802.3 · 802.5 · 802.11 · 802.1Q
- VLAN tag 4 B, VID 12 bit, 4094

## Top 12 one-liners for MCQs

1. MAC address = 48 bits
2. Ethernet = IEEE 802.3, Wi-Fi = 802.11
3. Token Ring = 802.5, Token Bus = 802.4
4. HDLC is bit-oriented; PPP byte-oriented
5. 3-bit sequence numbers: GBN window 7, SR window 4
6. Wi-Fi uses CSMA/CA, not CSMA/CD
7. Hub L1 · bridge, switch L2 · router L3
8. Router separates broadcast domains
9. ATM HEC protects the header only
10. CHAP: 3-way, the secret is never sent
11. STP = 802.1D; VLAN = 802.1Q
12. Fast Ethernet 802.3u, 100Base-TX

**Top traps:** CRC zeros = degree, not generator length · N(R) = next frame expected · Hamming (7, 4) corrects 1 **or** detects 2 · stuff the 0 even if the next bit is 0 · full-duplex Ethernet has no CSMA/CD · minimum frame 64 B vs minimum data 46 B · FDDI is ANSI, not IEEE.

**All tricks together:** five ones, then a zero · parity bits at powers of 2 · GBN all but one, SR half · I-S-U = 0, 10, 11 · 5 + 48 = 53 · wired detects, wireless avoids · short waits win (SIFS) · hub hears all, switch splits collisions, router splits broadcasts.

**The device staircase** — each step up reads one more header: L1 hub · L2 switch (frame · MAC) · L3 router (packet · IP) · gateway (all layers, protocol conversion).

---

## Practice MCQs (exam pattern, 10 marks)

1. Go-Back-N with 4-bit sequence numbers: maximum sender window? (a) 16 (b) 8 (c) 15 (d) 7
2. Maximum throughput of pure ALOHA: (a) 18.4% (b) 36.8% (c) 50% (d) 100%
3. HDLC bit stuffing inserts a 0 after: (a) four 1s (b) six 1s (c) eight 1s (d) five consecutive 1s
4. The HEC field of an ATM cell protects: (a) the 48-byte payload (b) the cell header only (c) the whole 53-byte cell (d) the AAL trailer
5. Minimum Ethernet frame size: (a) 64 bytes (b) 46 bytes (c) 512 bytes (d) 1518 bytes
6. Which device separates broadcast domains? (a) hub (b) switch (c) router (d) bridge
7. Hamming check bits needed for 7 data bits: (a) 3 (b) 5 (c) 7 (d) 4
8. Medium access method of IEEE 802.11: (a) CSMA/CD (b) CSMA/CA (c) token passing (d) pure ALOHA
9. IEEE 802.1Q defines: (a) Spanning Tree (b) LLC (c) VLAN tagging (d) Token Ring
10. HDLC frames used for link set-up and disconnect: (a) U-frames (b) I-frames (c) S-frames (d) P-frames

**Answer key:** 1-c · 2-a · 3-d · 4-b · 5-a · 6-c · 7-d · 8-b · 9-c · 10-a

## Written question (8 marks)

A 1 Mbps satellite link has a one-way propagation delay of 270 ms and carries 1000-bit frames. Find (i) the link utilization with stop-and-wait, (ii) the window size for full utilization, (iii) the minimum sequence-number bits for Go-Back-N and for Selective Repeat.

**Model answer:**

1. **Tt and a (1)** — Tt = L/B = 1000 / 10⁶ = 1 ms; a = Tp/Tt = 270
2. **Utilization (2)** — stop-and-wait η = 1/(1 + 2a) = 1/541 ≈ **0.18%** (throughput ≈ 1.85 kbps)
3. **Window (2)** — full use: W ≥ 1 + 2a = **541 frames** (bandwidth × RTT = 541 000 bits)
4. **Sequence bits (3)** — GBN: 2ᵐ − 1 ≥ 541 → **m = 10** (window 1023). SR: 2ᵐ⁻¹ ≥ 541 → **m = 11** (window 1024)

**Also practise (written):** ① CRC of 1101 with G = 1011 ② HDLC modes and frame types ③ CSMA/CD minimum frame, 1 Gbps, 1 km ④ hidden station and RTS/CTS.

**Before the exam ✓** Can name PDU, address and device for each layer · Can bit-stuff and byte-stuff a data stream · Can compute a CRC and a Hamming (7, 4) code · Can count collision and broadcast domains.