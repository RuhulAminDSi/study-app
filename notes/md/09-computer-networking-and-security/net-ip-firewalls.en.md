# Firewalls, IPv4, IPv6, ARP, Mobile IP & ATM: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/09-computer-networking-and-security/net-ip-firewalls.en.html` (handwritten-style PDF: `notes/pdf/09-computer-networking-and-security/net-ip-firewalls.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Computer Networking and Security):** "Computer Networking and Security: … Fragmentation; **Firewalls**; **IPv4, IPv6, ARP, RARP, Mobile IP, Network layer of ATM**; Transport protocols …". This note covers the firewall at the network border, IPv4/IPv6 packets and addresses, the helpers (ARP, RARP, ICMP, NAT), mobility and the ATM network layer. Fragmentation arithmetic and routing: see the Routing notes.

**High-yield:** ① firewall types · DMZ ② IHL × 4 · TTL ③ private ranges ④ hosts = 2ʰ − 2 ⑤ IPv6 "::" once ⑥ ARP: IP → MAC ⑦ HA · FA · CoA ⑧ ATM 53 = 5 + 48.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Firewalls, DMZ, ACLs — p. 2 · 2. IPv4 header — p. 3 · 3. Classes, special ranges, NAT — p. 4 · 4. Subnetting, CIDR, VLSM — p. 5 · 5. IPv6 addresses — p. 6 · 6. IPv6 header & transition — p. 7 · 7. ARP, RARP, ICMP — p. 8 · 8. Mobile IP & ATM network layer — p. 9 · 9. Night-before sheet — p. 10 · 10. Practice MCQs + written — p. 11.

---

## 1. Firewalls

A **firewall** is hardware or software at a network boundary that **permits or blocks traffic according to a rule set** (security policy). **All** traffic between inside and outside must pass through it. The safe policy is **default deny**: whatever is not explicitly allowed is blocked.

| Type | Layer | Decides on | + / − |
|---|---|---|---|
| **Packet filter** (stateless) | 3–4 | IP addresses, ports, protocol, TCP flags; each packet alone | fast, cheap (router ACL) / no state, fooled by spoofing |
| **Stateful inspection** | 3–4 | packet + **state table** of open connections | replies pass automatically / table can be flooded |
| **Circuit-level gateway** | 5 | validates the session set-up, then relays (SOCKS) | hides inside hosts / no content check |
| **Application gateway** (proxy) | 7 | full content of one protocol (HTTP, FTP, SMTP), user login, logs | strongest control / slow, one proxy per service |
| **NGFW** (next-generation) | 3–7 | deep packet inspection, IPS, application and user identity | all in one box / cost, latency |

**The DMZ picture.** Internet → **outer FW** → **DMZ (screened subnet)** holding a web server, a mail server and a public DNS → **inner FW** → internal LAN. Screened subnet: public servers sit between two firewalls; the inside LAN is never reached directly.

**Architectures**

- **Screening router**: packet filtering only
- **Dual-homed host**: **bastion host**, two NICs, forwarding off
- **Screened host**: filtering router + bastion host
- **Screened subnet (DMZ)**: two firewalls or one three-legged firewall
- **Host-based** (Windows Defender Firewall, iptables) vs **network-based**

**ACL: first match wins**

```
permit tcp any host 203.0.113.10 eq 443
permit tcp any host 203.0.113.25 eq 25
permit tcp any 10.0.0.0/8 established
deny   ip  any any   # implicit anyway
```

A broad **permit** above a narrow **deny** makes the deny useless.

- 💡 **Trick:** the **packet filter reads the envelope**, the **stateful** firewall **remembers the conversation**, the **proxy opens the letter**.
- ⚠️ **Trap:** a firewall cannot stop traffic that **bypasses** it (insider, USB stick, rogue Wi-Fi) or malware hidden in allowed, encrypted traffic. **IDS** only detects and alerts; **IPS** sits inline and blocks.

## 2. The IPv4 datagram header

**IPv4** (RFC 791, **1981**): a **connectionless, best-effort** network-layer protocol: no acknowledgements, no ordering, no retransmission (TCP adds those). Datagram = header (**20–60 bytes**) + data; maximum total size **65,535 bytes**.

The fixed part is **5 rows × 32 bits = 160 bits = 20 bytes**, drawn between bit 0 and bit 31; options + padding add up to 40 bytes beyond it.

| Field | Bits | What to remember |
|---|---|---|
| Version | 4 | value 4 (0100); IPv6 packets carry 6 |
| IHL (header length) | 4 | counts **32-bit words**: 5–15 → **20–60 bytes** |
| DSCP + ECN (old ToS) | 6 + 2 | QoS class (DiffServ) and congestion marking |
| Total length | 16 | header + data in bytes, max 2¹⁶ − 1 = 65,535 |
| Identification, Flags, Fragment offset | 16, 3, 13 | fragmentation: flags = reserved, **DF**, **MF**; offset in 8-byte units |
| TTL (time to live) | 8 | −1 at every router; at 0 the packet is dropped and ICMP **Time Exceeded** is sent |
| Protocol | 8 | **1 ICMP · 6 TCP · 17 UDP** · 2 IGMP · 41 IPv6 · 50 ESP · 51 AH · 89 OSPF |
| Header checksum | 16 | covers the **header only**; recomputed at every hop (TTL changes) |
| Source, Destination | 32 + 32 | IPv4 addresses; unchanged end to end (except by NAT) |

The first byte of the diagram is Ver 4 + IHL 4, then DSCP 6 + ECN 2 and Total length 16 across row 1; Identification 16, Flags 3 and Fragment offset 13 across row 2; TTL 8, Protocol 8 and Header checksum 16 across row 3; Source address 32 and Destination address 32 on rows 4 and 5.

**0x45** = the usual first byte.

✍ **Worked example.** First byte **0x45** → version 4, IHL 5 → header 5 × 4 = **20 bytes**. If IHL = 8, header = 32 bytes, so 12 bytes are options. With total length 1500 and IHL 5, data = 1500 − 20 = **1480 bytes**. Largest possible data in one datagram: 65,535 − 20 = 65,515 bytes.

- 💡 **Trick:** "**IHL × 4, offset × 8**": header length counts 4-byte words, fragment offset counts 8-byte blocks. Protocol numbers: "**1 ping, 6 TCP, 17 UDP**".
- ⚠️ **Trap:** the IPv4 checksum does **not** protect the data (TCP/UDP checksums do). TTL is in practice a **hop count**, not seconds. Offset/MF arithmetic: see the Fragmentation sheet of the Routing notes.

## 3. IPv4 addresses, classes & special ranges

An **address** is 32 bits, four decimal octets; **2³² ≈ 4.3 billion** addresses, each = **network ID + host ID**. Classful (1981) split by the first bits; **CIDR** (1993) allows any prefix /n.

| Class (bits) | First octet | Default mask | Networks | Hosts / network |
|---|---|---|---|---|
| A (0) | **1–126** | /8 = 255.0.0.0 | 2⁷ − 2 = 126 | 2²⁴ − 2 = 16,777,214 |
| B (10) | **128–191** | /16 = 255.255.0.0 | 2¹⁴ = 16,384 | 2¹⁶ − 2 = 65,534 |
| C (110) | **192–223** | /24 = 255.255.255.0 | 2²¹ = 2,097,152 | 2⁸ − 2 = 254 |
| D (1110) | 224–239 | multicast (no network/host split) | | |
| E (1111) | 240–255 | reserved / experimental | | |

| Special address | Meaning |
|---|---|
| 0.0.0.0 | this host / default route |
| **127.0.0.0/8** | loopback (127.0.0.1) |
| 255.255.255.255 | limited broadcast |
| host bits all 0 / 1 | network / directed bcast |
| 169.254.0.0/16 | link-local (APIPA) |
| 100.64.0.0/10 | carrier-grade NAT |

**Private (RFC 1918)**

- **10.0.0.0/8** · 10.x.x.x
- **172.16.0.0/12** — 172.16.x.x – 172.31.x.x
- **192.168.0.0/16** · 192.168.x.x
- not routed on the Internet

- ⚠️ **Trap:** 172.**32**.x.x and 192.**169**.x.x are **public**. 127 is kept for loopback, so usable class A first octets are 1–126, not 0–127.

## 4. NAT (Network Address Translation)

The border router **rewrites private source addresses to a public one** (RFC 3022) and reverses it for replies.

- **Static NAT**: 1 private ↔ 1 public (to publish a server)
- **Dynamic NAT**: a shared pool of public addresses
- **PAT / NAPT** ("overload"): many hosts → **one** public IP, told apart by **port numbers**

Worked picture: inside 192.168.1.10 :51000 → NAT → outside 203.0.113.5 :40001; one table row per connection. PAT rewrites address and port.

- 💡 **Trick:** private = "**10 · 172.16 to 31 · 192.168**": one /8, sixteen class-B blocks, 256 class-C blocks.
- ⚠️ **Trap:** NAT is **not** a firewall, though it drops unsolicited inbound packets. It breaks end-to-end addressing: IPsec AH, active FTP and peer-to-peer need ALGs or NAT traversal.

## 5. Subnetting, CIDR & VLSM

**The formulas.** prefix /n → host bits **h = 32 − n** · addresses per subnet = **2ʰ** · usable hosts = **2ʰ − 2** (network and broadcast removed) · borrowing s bits gives **2ˢ** subnets · **block size = 256 − mask octet** · network = largest multiple of the block ≤ the address · broadcast = next network − 1.

| Prefix | Mask | Block | Hosts |
|---|---|---|---|
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | …255.128 | 128 | 126 |
| /26 | …255.192 | 64 | 62 |
| /27 | …255.224 | 32 | 30 |
| /28 | …255.240 | 16 | 14 |
| /29 | …255.248 | 8 | 6 |
| /30 | …255.252 | 4 | **2** |
| /20 | 255.255.240.0 | 16 (3rd) | 4,094 |
| /22 | 255.255.252.0 | 4 (3rd) | 1,022 |

**Counting a /27 in blocks of 32:** block boundaries at 0, 32, 64, 96, 128. The address .77 falls in the block starting at **.64**, so the network is **.64** and the broadcast **.95**.

/31 (RFC 3021) is used on point-to-point links: 2 addresses, both usable. /32 = a single host route.

- 💡 **Trick:** "**Magic number = 256 − mask octet**". Count up in magic numbers; the address falls in one block.

✍ **Example 1.** 192.168.10.130/26 → block 64: blocks start .0, .64, **.128**, .192 → network **192.168.10.128**, hosts .129–.190, broadcast **.191**, 2⁶ − 2 = 62 hosts.

✍ **Example 2.** 172.16.45.200/20 → mask 255.255.240.0, block 16 in the **third** octet: 32 ≤ 45 &lt; 48 → network **172.16.32.0**, broadcast 172.16.47.255, hosts 172.16.32.1–172.16.47.254 (2¹² − 2 = 4,094).

✍ **Example 3: VLSM.** Split 192.168.1.0/24 for LAN A (100 hosts), LAN B (50 hosts) and a router link (2). **Largest first:**

1. A needs 2⁷ − 2 = 126 ≥ 100 → /25: **192.168.1.0/25** (.1–.126, bcast .127)
2. B needs 2⁶ − 2 = 62 ≥ 50 → /26: **192.168.1.128/26** (.129–.190, bcast .191)
3. Link needs 2 → /30: **192.168.1.192/30** (.193, .194); .196–.255 is left free

✍ **Example 4: supernetting (route aggregation).** 200.10.0.0/24, 200.10.1.0/24, 200.10.2.0/24, 200.10.3.0/24: third octets 0–3 = 000000**00**…000000**11** share 16 + 6 = 22 bits → one route **200.10.0.0/22**. Rule: a power-of-2 count of contiguous blocks, the first one divisible by that count.

- ⚠️ **Trap:** "addresses" = 2ʰ but "usable hosts" = 2ʰ − 2. A /30 has only **2** usable hosts. Subnets = **2ˢ** (old no-subnet-zero rule: 2ˢ − 2).

## 6. IPv6 addresses

**IPv6** (RFC 8200) has **128-bit** addresses: 2¹²⁸ ≈ **3.4 × 10³⁸** (vast, not unlimited), written as **8 groups of 4 hex digits** (16 bits each) separated by colons: 2001:0db8:0000:0000:0000:ff00:0042:8329.

A typical global unicast address splits into **global routing prefix 48** + **subnet 16** + **interface ID 64**; the network prefix /64 comes from the ISP plus the site, and the host part is built by SLAAC / EUI-64 / random. Example layout: `2001:db8:acad:0001:0000:0000:0000:0001` — every LAN gets a /64.

**Abbreviation rules**

1. Drop **leading zeros** in each group: 0db8 → db8, 0042 → 42, 0000 → 0
2. Replace **one** run of consecutive all-zero groups by **::** (only once per address; use it for the longest run)
3. Write hex in lowercase (RFC 5952); do not use :: for a single zero group

✍ **Compress.** 2001:0db8:0000:0000:0000:ff00:0042:8329 → 2001:db8:0:0:0:ff00:42:8329 → **2001:db8::ff00:42:8329**

✍ **Expand.** fe80::1:2 shows 3 groups, so :: = 8 − 3 = **5** zero groups → fe80:0:0:0:0:0:1:2 = fe80:0000:0000:0000:0000:0000:0001:0002

| Type | Prefix | Notes |
|---|---|---|
| Global unicast | **2000::/3** | public; 2001:db8::/32 = documentation |
| Link-local | **fe80::/10** | automatic on every interface; never routed |
| Unique local | fc00::/7 (fd00::/8) | like RFC 1918 private space |
| Loopback · unspecified | ::1/128 · ::/128 | like 127.0.0.1 · 0.0.0.0 |
| Multicast | **ff00::/8** | ff02::1 all nodes, ff02::2 all routers |
| Anycast | (from unicast space) | delivered to the **nearest** member of a group |
| IPv4-mapped | ::ffff:0:0/96 | ::ffff:192.0.2.1 (dual-stack sockets) |

✍ **EUI-64.** MAC 00:1A:2B:3C:4D:5E → split in half and insert **ff:fe** → flip the 7th bit (U/L) of the first byte, 00 → 02 → interface ID **021a:2bff:fe3c:4d5e**, address fe80::21a:2bff:fe3c:4d5e.

- 💡 **Trick:** "**Double colon, single use**": two :: make the length ambiguous. Prefixes: **2**… global, **fe80** link-local, **ff** multicast.
- ⚠️ **Trap:** 2001:db8::1::2 is **invalid** (two ::), so is a group of 5 hex digits. IPv6 has unicast, multicast and anycast, but **no broadcast**.

## 7. The IPv6 header (40 bytes, fixed)

| Field | Bits | Note |
|---|---|---|
| Version | 4 | value 6 |
| Traffic class | 8 | was ToS |
| Flow label | 20 | |
| Payload length | 16 | |
| Next header | 8 | was Protocol |
| Hop limit | 8 | was TTL |
| Source address | 128 (4 rows) | |
| Destination address | 128 (4 rows) | |

**8 fields: 64 bits + 2 × 128 bits = 320 bits = 40 bytes**, drawn between bit 0 and bit 31.

**Removed** from IPv4: IHL, **header checksum**, identification/flags/offset (moved to the Fragment extension header), options. **Renamed:** TTL → Hop limit, Protocol → Next header, ToS → Traffic class.

**Next-header values:** 0 Hop-by-Hop · 43 Routing · **44 Fragment** · 50 ESP · 51 AH · 60 Destination options · 6 TCP · 17 UDP · **58 ICMPv6** · 59 none.

**Extension headers** form a chain: each one's Next header names the one after it, ending in TCP/UDP. Routers normally read only the base header, so forwarding is faster. Fragmentation is done **only by the source** after Path MTU Discovery; every link must carry at least **1280 bytes**.

| Feature | IPv4 | IPv6 |
|---|---|---|
| Address | 32-bit, dotted decimal | 128-bit, colon hex |
| Header | 20–60 B, 12 fields + options | 40 B fixed, 8 fields + extension headers |
| Checksum / fragments | yes / source + routers | none / source only |
| Resolution / config | ARP / manual, DHCP | NDP (ICMPv6) / SLAAC, DHCPv6 |
| IPsec | optional add-on | built in (AH/ESP); **use** still optional |
| QoS / broadcast | DSCP / yes | traffic class + flow label / none |

## 8. IPv4 → IPv6 transition

- **Dual stack**: devices run IPv4 and IPv6 side by side (most common)
- **Tunnelling**: IPv6 inside IPv4 (protocol **41**): 6in4, **6to4** (2002::/16), **Teredo** (UDP, through NAT), ISATAP
- **Translation**: NAT64 + DNS64 (64:ff9b::/96): IPv6-only hosts reach IPv4 servers

Tunnelling = a 6-4-6 sandwich: IPv6 → v4 hdr → v6 packet → IPv6 across an IPv4-only network in between.

- 💡 **Trick:** the three transition roads: "**both, wrap, translate**" = dual stack, tunnel, NAT64.
- ⚠️ **Trap:** IPv6 header: **fewer fields** but **bigger** than IPv4's minimum (40 vs 20 bytes).

## 9. ARP (Address Resolution Protocol)

**ARP** (RFC 826, 1982) finds the **MAC address for a known IPv4 address** on the same LAN. Request = **broadcast**, reply = **unicast**; results go in the ARP cache. **EtherType 0x0806**; never crosses a router.

Exchange: A 10.0.0.1 (MAC AA:AA…) broadcasts ① "Who has 10.0.0.2?" — C ignores it, B 10.0.0.2 (MAC BB:BB…) unicast-replies ② "10.0.0.2 is at BB:BB…".

**ARP packet: 28 bytes (Ethernet/IPv4).** HW type 2 (1 = Ethernet) · protocol type 2 (0x0800) · HW len 1 (6) · protocol len 1 (4) · **opcode 2**: 1 request, 2 reply (RARP 3, 4) · sender MAC 6, IP 4 · target MAC 6 (zeros in a request), IP 4

- Destination on **another** network → ARP for the **default gateway's MAC**, not the remote host's
- **Gratuitous ARP**: announces its own IP · **Proxy ARP**: a router answers for another subnet
- **ARP spoofing**: forged replies → man-in-the-middle; IPv6 uses NDP instead

## 10. RARP → BOOTP → DHCP

| Protocol | Gives the host | Crosses routers? |
|---|---|---|
| **RARP** (RFC 903, 1984) | MAC → its IP only | no: a server on every LAN (EtherType 0x8035) |
| **BOOTP** (RFC 951, 1985) | IP, mask, gateway, boot file | yes, relay agent (UDP 67/68) |
| **DHCP** (RFC 2131) | all that + a **lease** (DORA) | yes, relay agent (UDP 67/68) |

## 11. ICMP (Internet Control Message Protocol)

RFC 792; reports errors and answers queries for IP. Carried **inside IP** (protocol **1**) yet counted as network layer. It reports problems but repairs nothing.

- **ping**: Echo request 8 → Echo reply 0
- **traceroute**: probes with TTL 1, 2, 3 … each draw a Time Exceeded from the next router
- No error message about an ICMP error, a broadcast or a non-first fragment

| Type | Message |
|---|---|
| 0 / 8 | Echo reply / request |
| 3 | Dest. unreachable (0 net, 1 host, 3 port, 4 frag. needed + DF) |
| 5 | Redirect (a better route) |
| **11** | Time exceeded (0 TTL, 1 reassembly) |
| 12 | Parameter problem |

- 💡 **Trick:** ARP asks "**who has this IP?**", RARP asks "**who am I?**". "**Ping 8, pong 0**; traceroute counts the 11s."
- ⚠️ **Trap:** ARP: IP → MAC; **RARP: MAC → IP**. RARP could not cross routers and gave no mask or gateway, so BOOTP and then DHCP replaced it.

## 12. Mobile IP

**Idea.** Mobile IP (RFC 5944) lets a mobile node keep its **permanent home address** while it moves, so peers and open connections keep working.

- **Mobile node (MN)**: the roaming host; **correspondent node (CN)**: its peer
- **Home agent (HA)**: router on the home network; keeps the binding, tunnels packets on
- **Foreign agent (FA)**: router on the visited network; offers a CoA, unwraps packets
- **Care-of address (CoA)**: the temporary address; **FA CoA** (the FA's, shared) or **co-located CoA** (from DHCP; the MN unwraps itself)

1. **Agent discovery**: **agent advertisements** (ICMP router-advertisement extension) or a solicitation
2. **Registration**: MN → FA → HA on **UDP 434**; the HA binds home address ↔ CoA
3. **Tunnelling**: the HA intercepts (proxy ARP) and sends **IP-in-IP** (protocol 4) to the CoA

Path shape: triangle — in via the HA, out direct. ① packet to the home address, ② HA tunnels it to FA + MN on the CoA, ③ reply MN → CN direct.

- ⚠️ **Trap:** replies go MN → CN directly, so traffic makes a **triangle** ("triangle routing"). Fixes: route optimisation (the CN learns the CoA), reverse tunnelling. **Mobile IPv6** (RFC 6275) has **no foreign agent**.

## 13. Network layer of ATM

**Idea.** **Connection-oriented, cell-switched**: a **virtual circuit** is set up once, then 53-byte cells are switched by **VPI/VCI labels** under the agreed QoS; cells stay in order.

**The cell: header 5 B + payload 48 B (cell = 53 bytes).** Header fields: GFC 4 · VPI 8 · VCI 16 · PT 3 · CLP · HEC 8. The UNI header is 40 bits; at the NNI the VPI has 12 bits and there is no GFC.

- VPI: 256 paths at the UNI, **4,096** at the NNI; VCI: 65,536 per path
- **VP switch** rewrites only the VPI; **VC switch** rewrites VPI and VCI; labels are **local** to each link
- **PVC** (configured) or **SVC** (signalled, Q.2931)
- ATM addresses (20-byte NSAP or E.164) are used only at set-up

| Service class | Typical use |
|---|---|
| **CBR** | voice, circuit emulation |
| rt-/nrt-VBR | video / bursty data |
| ABR | RM-cell feedback |
| UBR | best effort |

Policing: GCRA (leaky bucket); CLP = 1 cells are dropped first.

- 💡 **Trick:** "**Path is the motorway, channel is the lane**": the VPI picks the bundle, the VCI the circuit inside it. HEC = CRC-8 over the header only; efficiency 48/53 ≈ 90.6%. Cell delineation: ATM data-link notes; AAL: transport notes.

---

## Night-before fact sheet

- IPv4 header 20–60 B · IHL × 4
- Total length max 65,535 B
- Protocol: 1 ICMP, 6 TCP, 17 UDP
- TTL 0 → drop + ICMP type 11
- A 1–126 · B 128–191 · C 192–223
- D 224–239 multicast · E 240–255
- 10/8 · 172.16/12 · 192.168/16 private
- 127/8 loopback · 169.254/16 APIPA
- hosts = 2ʰ − 2 · block = 256 − mask
- /26 = .192, 62 hosts · /30 = 2 hosts
- IPv6 128-bit, header 40 B, 8 fields
- :: only once · no broadcast
- fe80::/10 link-local · ff00::/8 multicast
- 2000::/3 global · ::1 loopback
- ARP IP → MAC, 0x0806, 28 B
- RARP MAC → IP → BOOTP → DHCP
- Mobile IP: HA, FA, CoA, UDP 434
- ATM 53 = 5 + 48 · VPI 8/12, VCI 16

**How a host sends one IPv4 packet:** IP address 10.0.0.2 → **same subnet?** AND with mask → **ARP for host** or **for gateway** → **Ethernet frame sent**.

## Top 14 one-liners for MCQs

1. Proxy = application-level gateway (layer 7)
2. Stateful firewall keeps a state table
3. DMZ = screened subnet for public servers
4. IPv4 checksum covers the header only
5. DF = don't fragment, MF = more fragments
6. PAT maps many hosts to one IP by port
7. 200.10.0.0–3.0/24 aggregate to /22
8. IPv6 = 2¹²⁸ ≈ 3.4 × 10³⁸ addresses
9. IPv6 fragments at the source only; min MTU 1280
10. NDP (ICMPv6) replaces ARP in IPv6
11. Dual stack, tunnelling, NAT64
12. ping = ICMP echo 8 / 0
13. MIPv4 tunnel: IP-in-IP, HA → CoA
14. ATM HEC protects the 5-byte header only

**Top traps:** 172.32.x.x is public · usable hosts = 2ʰ − 2, not 2ʰ · /30 = 2 hosts · two :: are invalid · IPv6 has no broadcast and no header checksum · IPsec is designed into IPv6 but its use is optional · NAT is not a firewall · ARP reply is unicast · VPI/VCI are local labels, not addresses.

**All tricks together:** envelope / conversation / letter (filter / stateful / proxy) · IHL × 4, offset × 8 · "1 ping, 6 TCP, 17 UDP" · magic number = 256 − mask · double colon, single use · both, wrap, translate · ping 8, pong 0 · path = motorway, channel = lane.

---

## Practice MCQs (exam pattern, 10 marks)

1. A packet filter decides mainly on: (a) application data (b) IP, port, protocol (c) the user's login (d) MAC address only
2. An IPv4 header with IHL = 6 is how long? (a) 6 bytes (b) 12 bytes (c) 24 bytes (d) 48 bytes
3. Which address is private (RFC 1918)? (a) 172.31.200.1 (b) 172.32.0.1 (c) 192.169.0.1 (d) 11.0.0.1
4. Usable host addresses in a /28 subnet: (a) 16 (b) 30 (c) 6 (d) 14
5. Broadcast address of 192.168.10.130/26: (a) 192.168.10.127 (b) 192.168.10.255 (c) 192.168.10.192 (d) 192.168.10.191
6. 2001:0db8:0:0:0:0:0:0001 compresses to: (a) 2001:db8::1 (b) 2001:db8:::1 (c) 2001::db8::1 (d) 21:db8::1
7. Size of the IPv6 base header: (a) 20 bytes (b) 60 bytes (c) 40 bytes (d) 128 bytes
8. RARP maps: (a) IP → MAC (b) MAC → IP (c) name → IP (d) IP → name
9. In Mobile IP, the temporary address of a mobile node in a foreign network is its: (a) home address (b) MAC address (c) loopback address (d) care-of address
10. Size of an ATM cell header: (a) 48 bytes (b) 53 bytes (c) 5 bytes (d) 8 bytes

**Answer key:** 1-b · 2-c · 3-a · 4-d · 5-d · 6-a · 7-c · 8-b · 9-d · 10-c

## Written question (8 marks)

The network 192.168.5.0/24 must be divided into 4 equal subnets. Find the new mask, the usable hosts per subnet, and for each subnet its network address, first and last usable host and broadcast address.

**Model answer:**

1. **Prefix (2)** — 4 = 2² → borrow **2** bits → **/26** (255.255.255.192)
2. **Hosts (2)** — h = 32 − 26 = 6 → 64 addresses, **62 usable**; block 256 − 192 = 64
3. **Subnets (4)** — subnets start at multiples of 64:

| Network | First | Last | Bcast |
|---|---|---|---|
| 192.168.5.0 | .1 | .62 | .63 |
| 192.168.5.64 | .65 | .126 | .127 |
| 192.168.5.128 | .129 | .190 | .191 |
| 192.168.5.192 | .193 | .254 | .255 |

**Also practise (written):** ① Mobile IP with a diagram ② ARP request/reply steps ③ VLSM for 100, 50, 2 hosts ④ IPv4 vs IPv6 (8 points).

**Before the exam ✓** Firewall types and a DMZ diagram · IPv4 / IPv6 headers with field sizes · network, broadcast, hosts for any /n · compress / expand an IPv6 address.