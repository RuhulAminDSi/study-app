# Networking math from a figure (router/switch/PC topology) and Islamic Bank PLC SQA Senior Officer (Network) exam, 14.03.2025 — questions 1 to 6

- **Source image:** `27_islamic-bank-network-questions-1-6.jpg` (original file name `837065079_4531100567129372_4555098787748105498_n.jpg`)
- **Page:** 27 of 38 (folder-wide position)
- **Paper / Post:** Two papers. (1) Unidentified earlier paper (Q14 only, with a network figure). (2) Islamic Bank PLC — SQA, Senior Officer (Network)
- **Exam date:** 14.03.2025 (Islamic Bank PLC paper); not shown for the continuation
- **Marks:** not shown

## Transcription Notes

- **Q14 explicitly says "(just figure is given)"** — no numeric values, ask or instruction text accompany it beyond that. All the data for Q14 lives inside the diagram, so the diagram's labels are transcribed into a table below rather than reproduced as an image.
- **Figure transcription caveat:** interface labels are as printed. Two labels are worth checking against the original: the Switch 1 uplink is printed `Fa0/1` while the Router 1 side of that same link is printed `G0/1: 192.168.10.1/24`; and the Router 1 serial/WAN side is printed `network/Internet via G0/0: 10.0.0.1/30`. MAC addresses in the figure are small; the Switch 2 MAC is the least certain (`00:5F:4E:3D:2C:1B`).
- No handwriting, ticks or marginalia are visible on this page.
- The translucent coaching watermark/crest is ignored.

## Content

### Continuation of an earlier paper (unidentified)

**14.** Networking Related Math: (just figure is given)

*Figure labels, transcribed:*

| Device | Interface | Label |
|---|---|---|
| Router_1 | G0/0 | network/Internet via G0/0: 10.0.0.1/30 |
| Router_1 | G0/1 | (to Switch_1) |
| Router_1 | G0/2 | (to Switch_2) |
| Link | G0/1: 192.168.10.1/24 | Router_1 ↔ Switch_1 |
| Link | G0/2: 192.168.20.1/24 | Router_1 ↔ Switch_2 |
| Switch_1 | Fa0/1 | (uplink to Router_1) |
| Switch_1 | Fa0/1 | to PC 1 |
| Switch_1 | Fa0/2 | to PC 2 |
| Switch_2 | G0/2 | (uplink to Router_1) |
| Switch_2 | Fa0/1 | to PC 3 |
| Switch_2 | Fa0/1 | to PC 4 |

| Device | IP | MAC |
|---|---|---|
| Switch_1 (Switch_1) | 192.168.10.254 | 00:1A:2B:3C:4D:5E |
| Switch_2 (Switch_2) | 192.168.20.254 | 00:5F:4E:3D:2C:1B |
| PC 1 | 192.168.10.11/24 | 00:A1:B2:C3:D4:E5 |
| PC 2 | 192.168.10.12/24 | 00:F6:E5:D4:C3:B2 |
| PC 3 | 192.168.20.11/24 | 00:7E:6F:5E:4D:3C |
| PC 4 | 192.168.20.12/24 | 00:D9:C8:B7:A6:95 |

---

## Islamic Bank PLC
Post Name: SQA, Senior Officer (Network)
Exam Date: 14.03.2025

**1.** Write down the difference between Next-Generation Firewall (NGFW) and Web Application Firewall (WAF).

**2.** Write Linux commands for the following:
- (a) Give a file Read, Write, and Execute permission.
- (b) Show the IP address.
- (c) Delete all files in a folder.
- (d) Show disk partitions.

**3.** Static Route Configuration: Configure R0 to reach PC1. You may assume any vendor, such as Cisco, Huawei, or Juniper.

**4.** A fiber optic network is designed using single-mode fiber with an attenuation of 0.35 dB/km. The network includes a splitter with a 14 dB loss as specified in the datasheet. Additionally, there are two mechanical splices, each with 0.1 dB loss, and two connectors, each with 0.75 dB loss. Given a transmitter power of 5 dBm and receiver sensitivity of −14 dBm, calculate the maximum fiber length (D) that can be used between the OLT (Optical Line Terminal) and ONU (Optical Network Unit) while maintaining an acceptable signal level.

**5.** What are the major limitations of a DBMS? Explain how NewSQL differs from and relates to traditional SQL and NoSQL databases.

**6.** Differentiate between Black Box Testing and White Box Testing.

`[cut off — questions 7 onward are not printed on this page; they continue on folder page 28]`
