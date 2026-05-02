import type { Module } from '../../types'

const m9: Module = {
  title: "9. Computer Networking and Security",
  titleBn: "৯. কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা",
  level: "Intermediate",
  lessons: [
    {
      id: "ns1",
      title: "Protocol Hierarchies, Data Link Control, LAN Protocols & IEEE 802",
      titleBn: "প্রোটোকল হায়ারার্কি, ডেটা লিংক কন্ট্রোল, LAN প্রোটোকল ও IEEE 802",
      content: `📌 PROTOCOL HIERARCHIES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A protocol hierarchy is a layered set of communication rules that networked devices follow to exchange data reliably.

Purpose: Splitting communication into layers makes complex networking tasks manageable.

OSI Model (7 Layers):
┌─────────────────────────────────────────────────────────────────┐
│ Layer 7: Application   → HTTP, FTP, SMTP, DNS                  │
│ Layer 6: Presentation  → Encryption, compression (TLS/SSL)     │
│ Layer 5: Session       → Session management (NetBIOS, RPC)     │
│ Layer 4: Transport     → TCP, UDP (reliable/fast delivery)     │
│ Layer 3: Network       → IP, ICMP, ARP (routing, addressing)   │
│ Layer 2: Data Link     → Ethernet, Wi-Fi, MAC, HDLC, ATM       │
│ Layer 1: Physical      → Cables, fiber, radio waves            │
└─────────────────────────────────────────────────────────────────┘

TCP/IP Model (4 Layers):
┌─────────────────────────────────────────────────────────────────┐
│ Application Layer  → HTTP, FTP, SMTP, DNS (OSI 7-5-6)          │
│ Transport Layer    → TCP, UDP (OSI 4)                          │
│ Internet Layer     → IP, ICMP, ARP (OSI 3)                     │
│ Link Layer         → Ethernet, Wi-Fi, ATM (OSI 2-1)            │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 DATA LINK CONTROL: HDLC

High-Level Data Link Control (HDLC) is a bit-oriented data link protocol.

HDLC Frame Structure:
┌────────┬──────────┬──────────┬──────────────┬─────────┬────────┐
│ Flag   │ Address  │ Control  │ Information  │ FCS     │ Flag   │
│ 01111110│ 8 bits   │ 8/16 bits│ Variable     │16/32 bits│01111110│
└────────┴──────────┴──────────┴──────────────┴─────────┴────────┘

Frame Types:
• I-frames (Information): Carry user data
• S-frames (Supervisory): ACK, NACK, flow control
• U-frames (Unnumbered): Link management

HDLC Modes:
• Normal Response Mode (NRM): Primary controls secondary
• Asynchronous Balanced Mode (ABM): Peer-to-peer
• Asynchronous Response Mode (ARM): Secondary can send without permission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 DLL IN INTERNET & ATM

Internet DLL Protocols:
• Ethernet (IEEE 802.3) – Wired LANs
• Wi-Fi (IEEE 802.11) – Wireless LANs
• PPP (Point-to-Point Protocol) – Direct links
• Frame Relay – WAN links

ATM DLL (Asynchronous Transfer Mode):
• Cell-based: Fixed 53-byte cells (48 bytes payload + 5 byte header)
• Header Error Control (HEC): 8-bit error detection/correction
• Virtual Circuits: Uses VPI/VCI instead of MAC addresses

Comparison:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Internet DLL         │ ATM DLL              │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Framing             │ Variable frames      │ 53-byte fixed cells  │
│ Addressing         │ MAC addresses         │ VPI/VCI              │
│ Error Control      │ CRC                   │ HEC in header        │
│ Flow Control       │ Protocol-dependent    │ QoS-based shaping    │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 LAN PROTOCOLS: IEEE 802 STANDARDS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Standard            │ Technology & Features                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.1               │ Bridging & Management (STP, VLANs, 802.1X) │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.2               │ Logical Link Control (LLC)                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.3               │ Ethernet (10 Mbps → 10/40/100 GbE)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.4               │ Token Bus (obsolete)                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.5               │ Token Ring (obsolete)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.11              │ Wireless LAN (Wi-Fi) a/b/g/n/ac/ax          │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.15              │ WPAN (Bluetooth, ZigBee)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ 802.16              │ WiMAX (Wireless MAN)                        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 HUBS, BRIDGES, SWITCHES, FDDI, FAST ETHERNET

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Device              │ Layer    │ Function                         │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Hub                 │ Physical │ Simple repeater, no filtering    │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Bridge              │ Data Link│ Filters by MAC, segments LAN     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Switch              │ Data Link│ Intelligent forwarding per port  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ FDDI                │ 1 & 2    │ Fiber, 100 Mbps, dual ring       │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Fast Ethernet       │ 1 & 2    │ 100 Mbps, star topology          │
└─────────────────────┴──────────┴─────────────────────────────────┘

✅ SUMMARY
• Protocol hierarchies: OSI (7 layers) and TCP/IP (4 layers)
• HDLC: Bit-oriented data link protocol with I/S/U frames
• ATM DLL: 53-byte fixed cells with VPI/VCI addressing
• IEEE 802: Family of LAN standards (Ethernet, Wi-Fi)
• Hubs (L1), Bridges (L2), Switches (L2/L3)`,
      contentBn: `📌 প্রোটোকল হায়ারার্কি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: প্রোটোকল হায়ারার্কি হল লেয়ার্ড যোগাযোগ নিয়মের সেট যা নেটওয়ার্ক ডিভাইসগুলো ডেটা আদান-প্রদানের জন্য অনুসরণ করে।

OSI মডেল (৭ স্তর):
• স্তর ৭: অ্যাপ্লিকেশন → HTTP, FTP, SMTP, DNS
• স্তর ৬: প্রেজেন্টেশন → এনক্রিপশন, কম্প্রেশন
• স্তর ৫: সেশন → সেশন ম্যানেজমেন্ট
• স্তর ৪: ট্রান্সপোর্ট → TCP, UDP
• স্তর ৩: নেটওয়ার্ক → IP, ICMP, ARP
• স্তর ২: ডেটা লিংক → ইথারনেট, Wi-Fi, HDLC
• স্তর ১: ফিজিক্যাল → কেবল, ফাইবার

TCP/IP মডেল (৪ স্তর):
• অ্যাপ্লিকেশন লেয়ার → HTTP, FTP, SMTP
• ট্রান্সপোর্ট লেয়ার → TCP, UDP
• ইন্টারনেট লেয়ার → IP, ICMP
• লিংক লেয়ার → ইথারনেট, Wi-Fi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ডেটা লিংক কন্ট্রোল: HDLC

HDLC ফ্রেম কাঠামো:
[ফ্ল্যাগ] [অ্যাড্রেস] [কন্ট্রোল] [ইনফরমেশন] [FCS] [ফ্ল্যাগ]

ফ্রেম প্রকার:
• I-ফ্রেম: ব্যবহারকারী ডেটা বহন করে
• S-ফ্রেম: ACK, NACK, ফ্লো কন্ট্রোল
• U-ফ্রেম: লিংক ম্যানেজমেন্ট

✅ সারাংশ
• প্রোটোকল হায়ারার্কি: OSI (৭ স্তর) এবং TCP/IP (৪ স্তর)
• HDLC: বিট-ওরিয়েন্টেড ডেটা লিংক প্রোটোকল
• ATM DLL: ৫৩-বাইট সেল ভিত্তিক
• IEEE 802: LAN স্ট্যান্ডার্ডের পরিবার
• হাব (L1), ব্রিজ (L2), সুইচ (L2/L3)`,
      takeaways: [
        "OSI has 7 layers, TCP/IP has 4 layers",
        "HDLC: bit-oriented data link protocol with I/S/U frames",
        "ATM DLL: 53-byte fixed cells with VPI/VCI addressing",
        "IEEE 802: Ethernet (802.3), Wi-Fi (802.11), Bluetooth (802.15)",
        "Hubs (L1), Bridges (L2), Switches (L2/L3)"
      ],
      takeawaysBn: [
        "OSI-তে ৭ স্তর, TCP/IP-তে ৪ স্তর",
        "HDLC: বিট-ওরিয়েন্টেড ডেটা লিংক প্রোটোকল",
        "ATM DLL: ৫৩-বাইট সেল ভিত্তিক",
        "IEEE 802: ইথারনেট (802.3), Wi-Fi (802.11), ব্লুটুথ (802.15)",
        "হাব (L1), ব্রিজ (L2), সুইচ (L2/L3)"
      ],
      level: "Intermediate"
    },
    {
      id: "ns2",
      title: "Routing Algorithms, Congestion Control, Internetworking, WAN, Fragmentation",
      titleBn: "রাউটিং অ্যালগরিদম, কনজেশন কন্ট্রোল, ইন্টারনেটওয়ার্কিং, WAN, ফ্র্যাগমেন্টেশন",
      content: `📌 ROUTING ALGORITHMS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A routing algorithm decides the best path for packets from source to destination.

Routing Algorithm Families:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Protocols                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distance Vector     │ Bellman-Ford, shares distance to neighbors │
│                     │ RIP (Routing Information Protocol)         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Link State          │ Dijkstra's SPF, knows full network map     │
│                     │ OSPF (Open Shortest Path First), IS-IS     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Path Vector         │ Advertises entire path, used for BGP       │
│                     │ BGP (Border Gateway Protocol)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hybrid              │ Combines features, EIGRP (Cisco)           │
└─────────────────────┴─────────────────────────────────────────────┘

Routing Metrics:
• Hop count (RIP)
• Bandwidth / Link speed
• Delay / Latency
• Load / Reliability

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ CONGESTION CONTROL

Definition: Techniques to prevent or relieve network overload.

Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Open-Loop           │ Preventive (capacity planning, admission)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closed-Loop         │ Reactive (feedback-based)                   │
└─────────────────────┴─────────────────────────────────────────────┘

TCP Congestion Control Algorithms:
1. Slow Start: Exponential increase until threshold
2. Congestion Avoidance: Linear increase (AIMD)
3. Fast Retransmit: Retransmit on 3 duplicate ACKs
4. Fast Recovery: Moderate reduction after loss

Router Mechanisms:
• RED (Random Early Detection): Drop/mark packets before queue full
• ECN (Explicit Congestion Notification): Mark packets instead of drop

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 INTERNETWORKING & WAN

Internetworking: Connecting multiple distinct networks into a unified network.

WAN (Wide Area Network):
• Spans large geographic areas (cities, countries, continents)
• Uses leased lines, MPLS, VPN, satellite, cellular

WAN Technologies:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Technology          │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Leased Lines        │ Dedicated point-to-point (T1/E1, T3)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ MPLS                │ Modern high-performance private WAN         │
├─────────────────────┼─────────────────────────────────────────────┤
│ VPN                 │ Site-to-site over public Internet (IPsec)   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Satellite/Cellular  │ Remote/backup connections                   │
└─────────────────────┴─────────────────────────────────────────────┘

Core Components:
• Routers/Gateways
• WAN switches
• Firewalls/VPN gateways

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 FRAGMENTATION

Definition: Breaking a large packet into smaller pieces to traverse links with smaller MTU.

IPv4 Fragmentation:
• Routers can fragment packets
• Uses Identification, Flags (MF), Fragment Offset
• Reassembly only at destination

IPv6 Fragmentation:
• Routers do NOT fragment
• Source must perform Path MTU Discovery
• Uses Fragment Extension Header if needed

Path MTU Discovery (PMTUD):
1. Sender sets Don't Fragment (DF) bit
2. If router can't forward, returns ICMP "Fragmentation Needed"
3. Sender reduces packet size

Fragmentation Fields:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Field               │ Purpose                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Identification      │ Same for all fragments of original packet  │
├─────────────────────┼─────────────────────────────────────────────┤
│ More Fragments (MF) │ 1 = more fragments, 0 = last fragment      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fragment Offset     │ Position in original packet (8-byte units)  │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Routing: Distance Vector (RIP), Link State (OSPF), Path Vector (BGP)
• Congestion Control: TCP algorithms (Slow Start, AIMD), RED, ECN
• Internetworking: Connecting networks via routers
• WAN: Leased lines, MPLS, VPN for long-distance connectivity
• Fragmentation: IPv4 (routers), IPv6 (source only)`,
      contentBn: `📌 রাউটিং অ্যালগরিদম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: রাউটিং অ্যালগরিদম উৎস থেকে গন্তব্যে প্যাকেটের সর্বোত্তম পথ নির্ধারণ করে।

রাউটিং অ্যালগরিদমের প্রকার:
• ডিসটেন্স ভেক্টর: Bellman-Ford (RIP)
• লিংক স্টেট: Dijkstra's SPF (OSPF, IS-IS)
• পাথ ভেক্টর: BGP
• হাইব্রিড: EIGRP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ কনজেশন কন্ট্রোল

সংজ্ঞা: নেটওয়ার্ক ওভারলোড প্রতিরোধ বা কমানোর কৌশল।

TCP কনজেশন কন্ট্রোল অ্যালগরিদম:
১. স্লো স্টার্ট: থ্রেশহোল্ড পর্যন্ত সূচকীয় বৃদ্ধি
২. কনজেশন অ্যাভয়েডেন্স: রৈখিক বৃদ্ধি (AIMD)
৩. ফাস্ট রিট্রান্সমিট: ৩টি ডুপ্লিকেট ACK-এ রিট্রান্সমিট
৪. ফাস্ট রিকভারি: লসের পর মাঝারি হ্রাস

রাউটার মেকানিজম:
• RED: কিউ পূর্ণ হওয়ার আগে প্যাকেট ড্রপ/মার্ক
• ECN: ড্রপের পরিবর্তে প্যাকেট মার্ক

✅ সারাংশ
• রাউটিং: ডিসটেন্স ভেক্টর (RIP), লিংক স্টেট (OSPF), পাথ ভেক্টর (BGP)
• কনজেশন কন্ট্রোল: TCP অ্যালগরিদম, RED, ECN
• ইন্টারনেটওয়ার্কিং: রাউটারের মাধ্যমে নেটওয়ার্ক সংযুক্ত করা
• WAN: লীজড লাইন, MPLS, VPN
• ফ্র্যাগমেন্টেশন: IPv4 (রাউটার), IPv6 (শুধু উৎস)`,
      takeaways: [
        "Routing: Distance Vector (RIP), Link State (OSPF), Path Vector (BGP)",
        "Congestion Control: TCP algorithms (Slow Start, AIMD), RED, ECN",
        "Internetworking: Connecting networks via routers",
        "WAN: Leased lines, MPLS, VPN for long-distance connectivity",
        "Fragmentation: IPv4 (routers), IPv6 (source only)"
      ],
      takeawaysBn: [
        "রাউটিং: ডিসটেন্স ভেক্টর (RIP), লিংক স্টেট (OSPF), পাথ ভেক্টর (BGP)",
        "কনজেশন কন্ট্রোল: TCP অ্যালগরিদম, RED, ECN",
        "ইন্টারনেটওয়ার্কিং: রাউটারের মাধ্যমে নেটওয়ার্ক সংযুক্ত করা",
        "WAN: লীজড লাইন, MPLS, VPN",
        "ফ্র্যাগমেন্টেশন: IPv4 (রাউটার), IPv6 (শুধু উৎস)"
      ],
      level: "Advanced"
    },
    {
      id: "ns3",
      title: "Firewalls, IPv4, IPv6, ARP, RARP, Mobile IP, ATM Network Layer",
      titleBn: "ফায়ারওয়াল, IPv4, IPv6, ARP, RARP, মোবাইল IP, ATM নেটওয়ার্ক লেয়ার",
      content: `📌 FIREWALLS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A firewall monitors, filters, and controls network traffic based on security rules.

Types of Firewalls:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Packet Filtering    │ Examines packet headers (IP, port, protocol)│
├─────────────────────┼─────────────────────────────────────────────┤
│ Stateful Inspection │ Tracks connection state                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Proxy / Application │ Inspects application-layer content          │
│ Gateway             │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Next-Generation     │ DPI, IPS, application awareness             │
│ (NGFW)              │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

Firewall Deployment:
• Network-based: Hardware device between networks
• Host-based: Software on individual device (Windows Firewall, iptables)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 IPv4 & IPv6

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ IPv4                 │ IPv6                 │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Address Size        │ 32-bit (4.3B)        │ 128-bit (unlimited)  │
│ Format              │ 192.168.1.1          │ 2001:0db8::1         │
│ Header Size         │ 20-60 bytes          │ 40 bytes (fixed)     │
│ Fragmentation       │ Routers can fragment │ Source only (PMTUD)  │
│ Security            │ Optional (IPsec)     │ Built-in IPsec       │
│ Auto-configuration  │ DHCP                 │ SLAAC, DHCPv6        │
│ NAT                 │ Commonly used        │ Not needed           │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 ARP & RARP

ARP (Address Resolution Protocol):
• Maps IP address → MAC address on local network
• Broadcast request: "Who has IP X.X.X.X?"
• Reply contains MAC address

RARP (Reverse ARP):
• Maps MAC address → IP address
• Used by diskless workstations
• Largely replaced by BOOTP/DHCP

ARP Request/Reply Flow:
Host A (IP: 10.0.0.1, MAC: AA:AA) wants to send to Host B (IP: 10.0.0.2)
1. A broadcasts: "Who has 10.0.0.2?"
2. B replies: "10.0.0.2 is at BB:BB"
3. A caches the mapping

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 MOBILE IP

Definition: Allows mobile device to maintain same IP address while moving across networks.

Components:
• Home Agent (HA): Tracks mobile node's home address
• Foreign Agent (FA): Provides care-of address in visited network
• Mobile Node (MN): Device moving across networks

Operation:
1. MN registers with HA via FA
2. HA tunnels packets to MN's current location
3. Packets are forwarded through tunnel

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏛️ NETWORK LAYER OF ATM

ATM Network Layer Functions:
• Virtual Circuit Management: Assigns VPI/VCI
• Quality of Service (QoS): Manages CBR, VBR, ABR traffic
• Cell Forwarding: Based on VPI/VCI values
• Addressing: Hierarchical (VPI/VCI instead of IP)

ATM Cell Structure (53 bytes):
┌─────────────────────────────────────────────────────────────────┐
│ Header (5 bytes) │ Payload (48 bytes)                           │
├─────────────────────────────────────────────────────────────────┤
│ GFC │ VPI │ VCI │ PT │ CLP │ HEC │ Payload (48 bytes)           │
└─────────────────────────────────────────────────────────────────┘

• VPI (Virtual Path Identifier): 8-12 bits
• VCI (Virtual Channel Identifier): 16 bits
• HEC (Header Error Control): 8-bit CRC

✅ SUMMARY
• Firewalls: Packet filtering, stateful, proxy, NGFW
• IPv4: 32-bit, IPv6: 128-bit with built-in security
• ARP: IP → MAC, RARP: MAC → IP (legacy)
• Mobile IP: Home Agent, Foreign Agent for roaming
• ATM Network Layer: VPI/VCI-based routing, QoS, 53-byte cells`,
      contentBn: `📌 ফায়ারওয়াল

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: ফায়ারওয়াল নিরাপত্তা নিয়মের ভিত্তিতে নেটওয়ার্ক ট্রাফিক মনিটর, ফিল্টার ও নিয়ন্ত্রণ করে।

ফায়ারওয়ালের প্রকার:
• প্যাকেট ফিল্টারিং: হেডার পরীক্ষা করে
• স্টেটফুল ইন্সপেকশন: সংযোগ অবস্থা ট্র্যাক করে
• প্রক্সি/অ্যাপ্লিকেশন গেটওয়ে: অ্যাপ্লিকেশন-লেয়ার কন্টেন্ট পরীক্ষা করে
• এনজিএফডব্লিউ: ডিপি, আইপিএস, অ্যাপ্লিকেশন সচেতনতা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 IPv4 ও IPv6

IPv4: ৩২-বিট, ১৯২.১৬৮.১.১ ফরম্যাট
IPv6: ১২৮-বিট, ২০০১:০db৮::১ ফরম্যাট

IPv6 সুবিধা:
• বিশাল অ্যাড্রেস স্পেস
• বিল্ট-ইন আইপিসেক
• অটো-কনফিগারেশন
• NAT-এর প্রয়োজন নেই

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 ARP ও RARP

ARP: আইপি অ্যাড্রেস → MAC অ্যাড্রেস
RARP: MAC অ্যাড্রেস → আইপি অ্যাড্রেস (লিগ্যাসি)

✅ সারাংশ
• ফায়ারওয়াল: প্যাকেট ফিল্টারিং, স্টেটফুল, প্রক্সি, এনজিএফডব্লিউ
• IPv4: ৩২-বিট, IPv6: ১২৮-বিট বিল্ট-ইন নিরাপত্তা সহ
• ARP: IP → MAC, RARP: MAC → IP
• মোবাইল IP: হোম এজেন্ট, ফরেন এজেন্ট
• ATM নেটওয়ার্ক লেয়ার: VPI/VCI ভিত্তিক রাউটিং, QoS, ৫৩-বাইট সেল`,
      takeaways: [
        "Firewalls: Packet filtering, stateful, proxy, NGFW",
        "IPv4: 32-bit, IPv6: 128-bit with built-in IPsec",
        "ARP: IP → MAC, RARP: MAC → IP (legacy)",
        "Mobile IP: Home Agent, Foreign Agent for roaming",
        "ATM Network Layer: VPI/VCI-based routing, 53-byte cells"
      ],
      takeawaysBn: [
        "ফায়ারওয়াল: প্যাকেট ফিল্টারিং, স্টেটফুল, প্রক্সি, এনজিএফডব্লিউ",
        "IPv4: ৩২-বিট, IPv6: ১২৮-বিট বিল্ট-ইন আইপিসেক সহ",
        "ARP: IP → MAC, RARP: MAC → IP",
        "মোবাইল IP: হোম এজেন্ট, ফরেন এজেন্ট",
        "ATM নেটওয়ার্ক লেয়ার: VPI/VCI ভিত্তিক রাউটিং, ৫৩-বাইট সেল"
      ],
      level: "Advanced"
    },
    {
      id: "ns4",
      title: "Transport Protocols, TCP, LJDP, AAL, Cryptography, DES, IDEA, Public Key",
      titleBn: "ট্রান্সপোর্ট প্রোটোকল, TCP, LJDP, AAL, ক্রিপ্টোগ্রাফি, DES, IDEA, পাবলিক কী",
      content: `📌 TRANSPORT PROTOCOLS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────┬─────────────────────────────────────────────┐
│ Protocol            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ TCP (Transmission   │ Connection-oriented, reliable, ordered     │
│ Control Protocol)   │ Flow control, congestion control           │
├─────────────────────┼─────────────────────────────────────────────┤
│ UDP (User Datagram  │ Connectionless, unreliable, fast           │
│ Protocol)           │ No flow/congestion control                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ SCTP (Stream        │ Reliable, multi-streaming, multi-homing    │
│ Control Protocol)   │ Used in telecom signaling                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ DCCP (Datagram      │ Unreliable but congestion-aware            │
│ Congestion Control  │ For streaming media                        │
│ Protocol)           │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 TCP (Transmission Control Protocol)

TCP Connection Management (Three-Way Handshake):
┌─────────┐                              ┌─────────┐
│ Client  │                              │ Server  │
└────┬────┘                              └────┬────┘
     │ 1. SYN (seq=x)                         │
     │────────────────────────────────────────>│
     │                                         │
     │ 2. SYN-ACK (seq=y, ack=x+1)            │
     │<────────────────────────────────────────│
     │                                         │
     │ 3. ACK (ack=y+1)                        │
     │────────────────────────────────────────>│
     │                                         │

TCP Transmission Policy:
• Segmentation: Breaks data into segments
• Sequence Numbers: Ensures ordered delivery
• Acknowledgments (ACKs): Confirms receipt
• Sliding Window Flow Control: Adjusts to receiver capacity

TCP Congestion Control (4 Algorithms):
1. Slow Start: Exponential increase (cwnd doubles per RTT)
2. Congestion Avoidance: Linear increase (AIMD)
3. Fast Retransmit: Retransmit on 3 duplicate ACKs
4. Fast Recovery: Moderate cwnd reduction

TCP Timer Management:
• Retransmission Timer (RTO): Retransmit if no ACK
• Persistence Timer: Prevents deadlock when window=0
• Keep-Alive Timer: Detects idle connection status
• TIME_WAIT Timer: Ensures delayed packets expire

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 LJDP (Link-Joint Discovery Protocol)

Purpose: Layer 2/3 discovery protocol for neighbor discovery and capability sharing.

Similar to LLDP (IEEE 802.1AB) but may be vendor-specific.

Use Cases:
• Network topology mapping
• Detecting misconnected devices
• Gathering device information

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 AAL (ATM Adaptation Layer)

Purpose: Adapts variable-length user data into 53-byte ATM cells.

AAL Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ AAL Type            │ Traffic & Features                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ AAL1                │ Constant Bit Rate (CBR) - voice, leased    │
│                     │ lines, timing-sensitive                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ AAL2                │ Variable Bit Rate (VBR) - compressed       │
│                     │ audio/video, multiplexing                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ AAL3/4              │ Data and signaling (older)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ AAL5                │ Most common - IP, Ethernet over ATM        │
│                     │ Simplified, 8-byte trailer                 │
└─────────────────────┴─────────────────────────────────────────────┘

AAL Sublayers:
• SAR (Segmentation and Reassembly): Splits/combines data
• CS (Convergence Sublayer): Interfaces with upper layers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 CRYPTOGRAPHY

Definition: Science of encoding information so only intended recipients can read it.

Types of Cryptography:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Symmetric (Private  │ Same key for encryption & decryption        │
│ Key)                │ Fast, key must be shared securely          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Asymmetric (Public  │ Key pair: public (encrypt), private (decrypt)│
│ Key)                │ Slower, no key sharing needed              │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 DES (Data Encryption Standard)

• Type: Symmetric block cipher
• Block Size: 64 bits
• Key Size: 56 bits (+8 parity)
• Rounds: 16 Feistel rounds
• Status: Vulnerable to brute force, replaced by AES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 IDEA (International Data Encryption Algorithm)

• Type: Symmetric block cipher
• Block Size: 64 bits
• Key Size: 128 bits
• Structure: Substitution-permutation network
• Operations: Modular addition, multiplication, XOR
• Use Case: PGP (Pretty Good Privacy)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Public Key Algorithms

Key Pair:
• Public Key: Shared openly (for encryption)
• Private Key: Kept secret (for decryption)

Common Algorithms:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ RSA                 │ Based on prime factorization               │
│                     │ Encryption, digital signatures             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Diffie-Hellman      │ Secure key exchange over insecure channel  │
├─────────────────────┼─────────────────────────────────────────────┤
│ ECC (Elliptic Curve │ Smaller keys, same security as RSA         │
│ Cryptography)       │ Used in modern systems                     │
└─────────────────────┴─────────────────────────────────────────────┘

Symmetric vs Asymmetric Summary:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Symmetric (DES/IDEA) │ Asymmetric (RSA/ECC) │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Keys                │ Same key             │ Public + Private     │
│ Speed               │ Fast                 │ Slower               │
│ Key Distribution    │ Difficult            │ Easy                 │
│ Use Case            │ Bulk data encryption │ Key exchange,        │
│                     │                      │ digital signatures   │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Transport: TCP (reliable), UDP (fast), SCTP (multi-stream), DCCP (streaming)
• TCP: 3-way handshake, sliding window, 4 congestion algorithms
• AAL: AAL1 (CBR), AAL2 (VBR), AAL5 (data)
• Cryptography: Symmetric (DES, IDEA), Asymmetric (RSA, ECC)`,
      contentBn: `📌 ট্রান্সপোর্ট প্রোটোকল

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TCP: সংযোগ-ভিত্তিক, নির্ভরযোগ্য, অর্ডারযুক্ত
UDP: সংযোগবিহীন, অবিশ্বস্ত, দ্রুত
SCTP: নির্ভরযোগ্য, মাল্টি-স্ট্রিমিং, মাল্টি-হোমিং
DCCP: অবিশ্বস্ত কিন্তু কনজেশন-সচেতন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 TCP

TCP কানেকশন ম্যানেজমেন্ট (থ্রি-ওয়ে হ্যান্ডশেক):
১. SYN (ক্লায়েন্ট → সার্ভার)
২. SYN-ACK (সার্ভার → ক্লায়েন্ট)
৩. ACK (ক্লায়েন্ট → সার্ভার)

TCP ট্রান্সমিশন পলিসি:
• সেগমেন্টেশন
• সিকোয়েন্স নাম্বার
• অ্যাকনোলেজমেন্ট
• স্লাইডিং উইন্ডো

TCP কনজেশন কন্ট্রোল:
১. স্লো স্টার্ট
২. কনজেশন অ্যাভয়েডেন্স
৩. ফাস্ট রিট্রান্সমিট
৪. ফাস্ট রিকভারি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 ক্রিপ্টোগ্রাফি

ক্রিপ্টোগ্রাফির প্রকার:
• সিমেট্রিক (DES, IDEA): একই কী
• অ্যাসিমেট্রিক (RSA, ECC): পাবলিক + প্রাইভেট কী

DES: ৫৬-বিট কী, ৬৪-বিট ব্লক, ১৬ রাউন্ড (লিগ্যাসি)
IDEA: ১২৮-বিট কী, ৬৪-বিট ব্লক, PGP-তে ব্যবহৃত
RSA: প্রাইম ফ্যাক্টোরাইজেশন ভিত্তিক
ECC: ছোট কী, আধুনিক সিস্টেমে ব্যবহৃত

✅ সারাংশ
• ট্রান্সপোর্ট: TCP (নির্ভরযোগ্য), UDP (দ্রুত)
• TCP: থ্রি-ওয়ে হ্যান্ডশেক, স্লাইডিং উইন্ডো, ৪ কনজেশন অ্যালগরিদম
• AAL: AAL1 (CBR), AAL2 (VBR), AAL5 (ডেটা)
• ক্রিপ্টোগ্রাফি: সিমেট্রিক (DES, IDEA), অ্যাসিমেট্রিক (RSA, ECC)`,
      takeaways: [
        "Transport: TCP (reliable), UDP (fast), SCTP, DCCP",
        "TCP: 3-way handshake, sliding window, 4 congestion algorithms",
        "AAL: AAL1 (CBR), AAL2 (VBR), AAL5 (data)",
        "Cryptography: Symmetric (DES, IDEA), Asymmetric (RSA, ECC)",
        "Public key: RSA (factoring), ECC (elliptic curves)"
      ],
      takeawaysBn: [
        "ট্রান্সপোর্ট: TCP (নির্ভরযোগ্য), UDP (দ্রুত)",
        "TCP: থ্রি-ওয়ে হ্যান্ডশেক, স্লাইডিং উইন্ডো, ৪ কনজেশন অ্যালগরিদম",
        "AAL: AAL1 (CBR), AAL2 (VBR), AAL5 (ডেটা)",
        "ক্রিপ্টোগ্রাফি: সিমেট্রিক (DES, IDEA), অ্যাসিমেট্রিক (RSA, ECC)",
        "পাবলিক কী: RSA (ফ্যাক্টোরাইজেশন), ECC (উপবৃত্তাকার বক্ররেখা)"
      ],
      level: "Advanced"
    },
    {
      id: "ns5",
      title: "Authentication, Digital Signatures, Gigabit Ethernet, DNS, Email Privacy",
      titleBn: "অথেনটিকেশন, ডিজিটাল সিগনেচার, গিগাবিট ইথারনেট, DNS, ইমেইল প্রাইভেসি",
      content: `📌 AUTHENTICATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Process of verifying the identity of a user, device, or system.

Types of Authentication:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Password-Based      │ User provides secret password/PIN          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Token-Based         │ Physical or software token (OTP, RSA token)│
├─────────────────────┼─────────────────────────────────────────────┤
│ Biometric           │ Fingerprint, iris scan, facial recognition │
├─────────────────────┼─────────────────────────────────────────────┤
│ Certificate-Based   │ Digital certificates (PKI), smart cards    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multi-Factor (MFA)  │ Combines 2+ methods (password + OTP)       │
└─────────────────────┴─────────────────────────────────────────────┘

Authentication Protocols:
• RADIUS: Centralized AAA for remote access
• TACACS+: Cisco proprietary AAA
• Kerberos: Ticket-based mutual authentication
• EAP: Framework for Wi-Fi authentication

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔏 DIGITAL SIGNATURES

Definition: Cryptographic mechanism providing authentication, integrity, and non-repudiation.

How Digital Signatures Work:
1. Sender generates hash of message (SHA-256)
2. Sender encrypts hash with private key → signature
3. Sender sends message + signature
4. Receiver decrypts signature with sender's public key → hash1
5. Receiver hashes received message → hash2
6. If hash1 = hash2 → authentic and unaltered

Digital Signature Algorithms:
• RSA: Most widely used
• DSA (Digital Signature Algorithm): NIST standard
• ECDSA: Elliptic Curve variant (smaller keys)

Applications:
• Email security (S/MIME, PGP)
• Software distribution verification
• Electronic transactions
• Legal digital contracts
• Blockchain transactions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ GIGABIT ETHERNET

Definition: Ethernet standard supporting 1 Gbps (1000 Mbps) data rate.

IEEE Standards:
• 802.3ab: Gigabit over copper (1000BASE-T)
• 802.3z: Gigabit over fiber (1000BASE-SX/LX)

Transmission Media:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Media               │ Standard    │ Max Distance                  │
├─────────────────────┼─────────────┼───────────────────────────────┤
│ Copper (Cat5e/6)    │ 1000BASE-T  │ 100 m                         │
├─────────────────────┼─────────────┼───────────────────────────────┤
│ Multimode Fiber     │ 1000BASE-SX │ 550 m                         │
├─────────────────────┼─────────────┼───────────────────────────────┤
│ Single-mode Fiber   │ 1000BASE-LX │ 5 km                          │
└─────────────────────┴─────────────┴───────────────────────────────┘

Features:
• 10× faster than Fast Ethernet
• Full-duplex operation (no collisions)
• Backward compatible with Ethernet/Fast Ethernet
• Auto-negotiation support

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 DOMAIN NAME SYSTEM (DNS)

Definition: Hierarchical, distributed system that translates domain names → IP addresses.

Name Server Types:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Server Type         │ Function                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Root Name Server    │ Points to TLD servers (.com, .org)         │
├─────────────────────┼─────────────────────────────────────────────┤
│ TLD Name Server     │ Points to authoritative servers for domain │
├─────────────────────┼─────────────────────────────────────────────┤
│ Authoritative       │ Returns definitive answers for domain      │
│ Name Server         │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Caching/Resolver    │ Stores previous queries for speed          │
│ Server              │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

DNS Resolution Process:
1. Client → Resolver: "What is www.example.com?"
2. Resolver → Root Server: Returns .com TLD server
3. Resolver → TLD Server: Returns example.com authoritative server
4. Resolver → Authoritative Server: Returns IP address
5. Resolver → Client: Returns IP address

DNS Record Types:
• A Record: Domain → IPv4 address
• AAAA Record: Domain → IPv6 address
• CNAME: Alias for domain
• MX Record: Mail exchange server
• NS Record: Authoritative name servers
• PTR Record: IP → Domain (reverse lookup)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 EMAIL AND ITS PRIVACY

Email Components:
• MUA (Mail User Agent): Email client (Outlook, Gmail)
• MTA (Mail Transfer Agent): Routes emails (Sendmail, Postfix)
• MDA (Mail Delivery Agent): Stores incoming emails

Email Protocols:
• SMTP (Port 25/587): Sending emails
• POP3 (Port 110): Downloads emails to client
• IMAP (Port 143): Keeps emails on server (sync)

Email Privacy Issues:
• Eavesdropping: Emails can be intercepted
• Spoofing: Fake emails from trusted sources
• Tampering: Messages altered in transit
• Unauthorized access: Mail server breaches

Email Privacy Solutions:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Solution            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ PGP (Pretty Good    │ End-to-end encryption using public key     │
│ Privacy)            │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ S/MIME              │ X.509 certificate-based encryption/signing │
├─────────────────────┼─────────────────────────────────────────────┤
│ TLS/STARTTLS        │ Encrypts email in transit between servers  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Digital Signatures  │ Verifies sender identity and integrity     │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Authentication: Password, token, biometric, MFA (RADIUS, Kerberos)
• Digital Signatures: RSA, DSA, ECDSA for authenticity & non-repudiation
• Gigabit Ethernet: 1000BASE-T (copper, 100m), 1000BASE-SX/LX (fiber)
• DNS: Root, TLD, Authoritative servers; A, AAAA, CNAME, MX records
• Email: SMTP (send), POP3/IMAP (receive); PGP, S/MIME for privacy`,
      contentBn: `📌 অথেনটিকেশন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: ব্যবহারকারী, ডিভাইস বা সিস্টেমের পরিচয় যাচাইয়ের প্রক্রিয়া।

অথেনটিকেশনের প্রকার:
• পাসওয়ার্ড-ভিত্তিক: গোপন পাসওয়ার্ড/PIN
• টোকেন-ভিত্তিক: OTP, RSA টোকেন
• বায়োমেট্রিক: ফিঙ্গারপ্রিন্ট, আইরিস স্ক্যান
• সার্টিফিকেট-ভিত্তিক: ডিজিটাল সার্টিফিকেট
• মাল্টি-ফ্যাক্টর (MFA): একাধিক পদ্ধতির সংমিশ্রণ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔏 ডিজিটাল সিগনেচার

ডিজিটাল সিগনেচার কীভাবে কাজ করে:
১. সেন্ডার মেসেজের হ্যাশ জেনারেট করে
২. প্রাইভেট কী দিয়ে হ্যাশ এনক্রিপ্ট করে → সিগনেচার
৩. মেসেজ + সিগনেচার পাঠায়
৪. রিসিভার পাবলিক কী দিয়ে ডিক্রিপ্ট করে → হ্যাশ১
৫. রিসিভার মেসেজের হ্যাশ বের করে → হ্যাশ২
৬. হ্যাশ১ = হ্যাশ২ হলে → প্রমাণিক ও অপরিবর্তিত

অ্যালগরিদম: RSA, DSA, ECDSA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 ডোমেইন নেম সিস্টেম (DNS)

নেম সার্ভারের প্রকার:
• রুট নেম সার্ভার: টিএলডি সার্ভারের নির্দেশনা দেয়
• টিএলডি নেম সার্ভার: ডোমেইনের অথরিটেটিভ সার্ভার নির্দেশনা দেয়
• অথরিটেটিভ নেম সার্ভার: ডোমেইনের জন্য চূড়ান্ত উত্তর দেয়
• ক্যাচিং/রিজলভার সার্ভার: পূর্ববর্তী কোয়েরি সংরক্ষণ করে

DNS রেকর্ড প্রকার:
• A: ডোমেইন → IPv4
• AAAA: ডোমেইন → IPv6
• CNAME: ডোমেইনের উপনাম
• MX: মেইল এক্সচেঞ্জ সার্ভার

✅ সারাংশ
• অথেনটিকেশন: পাসওয়ার্ড, টোকেন, বায়োমেট্রিক, MFA
• ডিজিটাল সিগনেচার: RSA, DSA, ECDSA
• গিগাবিট ইথারনেট: ১০০০বেস-টি (কপার), ১০০০বেস-এসএক্স/এলএক্স (ফাইবার)
• DNS: রুট, টিএলডি, অথরিটেটিভ সার্ভার
• ইমেইল: SMTP (পাঠানো), POP3/IMAP (গ্রহণ); PGP, S/MIME`,
      takeaways: [
        "Authentication: Password, token, biometric, MFA (RADIUS, Kerberos)",
        "Digital Signatures: RSA, DSA, ECDSA for authenticity & non-repudiation",
        "Gigabit Ethernet: 1000BASE-T (copper, 100m), 1000BASE-SX/LX (fiber)",
        "DNS: Root, TLD, Authoritative servers; A, AAAA, CNAME, MX records",
        "Email: SMTP (send), POP3/IMAP (receive); PGP, S/MIME for privacy"
      ],
      takeawaysBn: [
        "অথেনটিকেশন: পাসওয়ার্ড, টোকেন, বায়োমেট্রিক, MFA",
        "ডিজিটাল সিগনেচার: RSA, DSA, ECDSA",
        "গিগাবিট ইথারনেট: ১০০০বেস-টি (কপার), ১০০০বেস-এসএক্স/এলএক্স (ফাইবার)",
        "DNS: রুট, টিএলডি, অথরিটেটিভ সার্ভার",
        "ইমেইল: SMTP (পাঠানো), POP3/IMAP (গ্রহণ); PGP, S/MIME"
      ],
      level: "Advanced"
    },
    {
      id: "ns6",
      title: "SNMP, HTTP, WWW, Internet Protocols, OSI Model, Data Travel",
      titleBn: "SNMP, HTTP, WWW, ইন্টারনেট প্রোটোকল, OSI মডেল, ডেটা যাত্রা",
      content: `📌 SNMP (Simple Network Management Protocol)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Network management protocol for monitoring and configuring network devices.

Components:
• Managed Device: Router, switch, server, printer
• Agent: Software on device collecting data
• NMS (Network Management System): Central monitoring system
• MIB (Management Information Base): Database of managed objects

SNMP Operations:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Operation           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ GET                 │ Retrieve value of managed object           │
├─────────────────────┼─────────────────────────────────────────────┤
│ GET-NEXT            │ Retrieve next object in sequence           │
├─────────────────────┼─────────────────────────────────────────────┤
│ SET                 │ Change value of managed object             │
├─────────────────────┼─────────────────────────────────────────────┤
│ TRAP                │ Device sends unsolicited notification      │
└─────────────────────┴─────────────────────────────────────────────┘

SNMP Versions:
• SNMPv1: Basic monitoring, community strings
• SNMPv2: Improved performance, error handling
• SNMPv3: Authentication, encryption, access control

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 HTTP (Hypertext Transfer Protocol)

Definition: Protocol for transferring web pages over the Internet.

HTTP Request-Response Model:
┌─────────┐         ┌─────────┐
│ Browser │ ──────> │ Server  │  Request (GET, POST, etc.)
│ (Client)│ <────── │         │  Response (HTML, status code)
└─────────┘         └─────────┘

HTTP Methods:
• GET: Retrieve data
• POST: Submit data
• PUT: Update resource
• DELETE: Remove resource
• HEAD: Retrieve headers only

HTTP Status Codes:
• 200 OK: Success
• 301/302: Redirect
• 400: Bad request
• 401/403: Unauthorized/Forbidden
• 404: Not found
• 500: Internal server error

HTTP vs HTTPS:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ HTTP                 │ HTTPS                │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Security            │ Unencrypted          │ Encrypted (TLS/SSL)  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Port                │ 80                   │ 443                  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Use Case            │ Public content       │ Secure transactions  │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌍 WORLD WIDE WEB (WWW)

Definition: System of interlinked hypertext documents accessed via the Internet.

Components:
• Web Page: HTML document
• Website: Collection of web pages
• Web Server: Hosts and delivers web pages
• Web Browser: Displays web pages (Chrome, Firefox, Edge)
• URL: Unique address of web page

URL Structure:
https://www.example.com:443/path?query=value#section
├─┬─┘ ├────┬───┘ ├─┬─┘ ├──┬──┘ ├───┬───┘ ├───┬───┘
Protocol Subdomain Domain Port Path Query Fragment

Internet vs WWW:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ Internet             │ World Wide Web       │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Definition          │ Network of networks  │ System of web pages  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Hardware/Software   │ Hardware (routers,   │ Software (web pages, │
│                     │ cables, servers)     │ browsers)            │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Services            │ Email, FTP, VoIP,    │ Web browsing only    │
│                     │ Web, etc.            │                      │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📡 HOW DATA TRAVELS ON THE INTERNET

Step-by-Step Journey:
1. Your computer breaks data into packets
2. Each packet gets source/destination IP
3. Packets sent to router/gateway
4. Routers direct packets hop-by-hop
5. Packets travel through multiple networks
6. Destination server reassembles packets (TCP)

Packet Structure:
┌─────────────────────────────────────────────────────────────────┐
│ Header (Source IP, Dest IP, Port, Sequence #) │ Payload (Data) │
└─────────────────────────────────────────────────────────────────┘

Hop-by-Hop Routing:
Your PC → Router → ISP → Core Router → Data Center → Server

Traceroute command shows the path:
tracert www.google.com (Windows)
traceroute www.google.com (Linux/Mac)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏛️ OSI MODEL DETAILED

Layer 7 – Application (User interaction): HTTP, FTP, SMTP, DNS
Layer 6 – Presentation (Format/encrypt): TLS/SSL, JPEG, MPEG
Layer 5 – Session (Session control): NetBIOS, RPC
Layer 4 – Transport (Reliable delivery): TCP, UDP
Layer 3 – Network (Routing/addressing): IP, ICMP, ARP
Layer 2 – Data Link (Framing, MAC): Ethernet, Wi-Fi
Layer 1 – Physical (Bits on wire): Cables, fiber, radio

Mnemonic: "All People Seem To Need Data Processing"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 COMMON INTERNET PROTOCOLS

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Protocol            │ Port     │ Function                        │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ HTTP                │ 80       │ Web browsing                     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ HTTPS               │ 443      │ Secure web browsing             │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ FTP                 │ 20,21    │ File transfer                   │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ SMTP                │ 25,587   │ Sending emails                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ POP3                │ 110      │ Receiving emails (download)     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ IMAP                │ 143      │ Receiving emails (sync)         │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ DNS                 │ 53       │ Domain name resolution          │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ DHCP                │ 67,68    │ Automatic IP assignment         │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ SNMP                │ 161,162  │ Network management              │
└─────────────────────┴──────────┴─────────────────────────────────┘

✅ SUMMARY
• SNMP: Network management with GET/SET/TRAP, MIB, versions v1/v2/v3
• HTTP: Web protocol with GET/POST/PUT/DELETE methods, status codes
• HTTPS: HTTP + TLS/SSL encryption (port 443)
• WWW: System of interlinked web pages on the Internet
• Data Travel: Packets, routing, hop-by-hop, reassembly
• OSI Model: 7 layers from Physical to Application
• Common Protocols: HTTP(80), HTTPS(443), FTP(21), SMTP(25), DNS(53), SNMP(161)`,
      contentBn: `📌 SNMP (সিম্পল নেটওয়ার্ক ম্যানেজমেন্ট প্রোটোকল)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: নেটওয়ার্ক ডিভাইস মনিটরিং ও কনফিগারেশনের প্রোটোকল।

SNMP অপারেশন:
• GET: ম্যানেজড অবজেক্টের মান পড়ে
• SET: ম্যানেজড অবজেক্টের মান পরিবর্তন করে
• TRAP: ডিভাইস থেকে অনুরোধহীন নোটিফিকেশন

SNMP সংস্করণ:
• v1: বেসিক মনিটরিং (কমিউনিটি স্ট্রিং)
• v2: উন্নত পারফরম্যান্স
• v3: অথেনটিকেশন, এনক্রিপশন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 HTTP ও HTTPS

HTTP মেথড: GET, POST, PUT, DELETE, HEAD
HTTP স্ট্যাটাস কোড: 200 (সাফল্য), 404 (পাওয়া যায়নি), 500 (সার্ভার ত্রুটি)

HTTP বনাম HTTPS:
• HTTP: পোর্ট ৮০, আনএনক্রিপ্টেড
• HTTPS: পোর্ট ৪৪৩, TLS/SSL এনক্রিপ্টেড

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌍 ওয়ার্ল্ড ওয়াইড ওয়েব (WWW)

WWW = ইন্টারলিংকড হাইপারটেক্সট ডকুমেন্টের সিস্টেম

ইন্টারনেট বনাম WWW:
• ইন্টারনেট: নেটওয়ার্কের নেটওয়ার্ক (হার্ডওয়্যার)
• WWW: ওয়েব পৃষ্ঠার সিস্টেম (সফটওয়্যার)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📡 ডেটা কীভাবে ইন্টারনেটে ভ্রমণ করে

ধাপসমূহ:
১. কম্পিউটার ডেটা প্যাকেটে ভাঙে
২. প্রতিটি প্যাকেটে উৎস ও গন্তব্য IP দেয়
৩. প্যাকেট রাউটারে পাঠায়
৪. রাউটার হপ-বাই-হপ নির্দেশনা দেয়
৫. প্যাকেট একাধিক নেটওয়ার্ক অতিক্রম করে
৬. গন্তব্য সার্ভার প্যাকেট পুনরায় একত্রিত করে (TCP)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏛️ OSI মডেল (৭ স্তর)

স্তর ৭ – অ্যাপ্লিকেশন: HTTP, FTP, SMTP (ব্যবহারকারীর ইন্টারফেস)
স্তর ৬ – প্রেজেন্টেশন: এনক্রিপশন, কম্প্রেশন (TLS/SSL)
স্তর ৫ – সেশন: সেশন ম্যানেজমেন্ট (NetBIOS, RPC)
স্তর ৪ – ট্রান্সপোর্ট: নির্ভরযোগ্য ডেলিভারি (TCP, UDP)
স্তর ৩ – নেটওয়ার্ক: রাউটিং, অ্যাড্রেসিং (IP, ICMP, ARP)
স্তর ২ – ডেটা লিংক: ফ্রেমিং, MAC (ইথারনেট, Wi-Fi)
স্তর ১ – ফিজিক্যাল: বিট সংক্রমণ (কেবল, ফাইবার)

✅ সারাংশ
• SNMP: নেটওয়ার্ক ম্যানেজমেন্ট
• HTTP: ওয়েব প্রোটোকল
• WWW: ওয়েব পৃষ্ঠার সিস্টেম
• ডেটা যাত্রা: প্যাকেট → রাউটার → গন্তব্য
• OSI মডেল: ৭ স্তর (ফিজিক্যাল থেকে অ্যাপ্লিকেশন)`,
      takeaways: [
        "SNMP: Network management with GET/SET/TRAP, versions v1/v2/v3",
        "HTTP: Web protocol with GET/POST/PUT/DELETE methods, status codes",
        "HTTPS: HTTP + TLS/SSL encryption (port 443)",
        "WWW: System of interlinked web pages on the Internet",
        "Data Travel: Packets, routers, hop-by-hop, reassembly (TCP)",
        "OSI Model: 7 layers (Physical to Application)",
        "Common Protocols: HTTP(80), HTTPS(443), FTP(21), SMTP(25), DNS(53), SNMP(161)"
      ],
      takeawaysBn: [
        "SNMP: নেটওয়ার্ক ম্যানেজমেন্ট",
        "HTTP: ওয়েব প্রোটোকল",
        "HTTPS: HTTP + TLS/SSL এনক্রিপশন (পোর্ট ৪৪৩)",
        "WWW: ইন্টারনেটে ওয়েব পৃষ্ঠার সিস্টেম",
        "ডেটা যাত্রা: প্যাকেট, রাউটার, হপ-বাই-হপ, পুনঃএকত্রীকরণ",
        "OSI মডেল: ৭ স্তর (ফিজিক্যাল থেকে অ্যাপ্লিকেশন)",
        "সাধারণ প্রোটোকল: HTTP(৮০), HTTPS(৪৪৩), FTP(২১), SMTP(২৫), DNS(৫৩), SNMP(১৬১)"
      ],
      level: "Advanced"
    }
  ]
}

export const module9 = m9