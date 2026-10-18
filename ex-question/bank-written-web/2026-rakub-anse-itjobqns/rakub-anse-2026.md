# RAKUB Assistant Network System Engineer (Job ID 10230), 05 June 2026 — IT Job QnS recollection

- **Source:** IT Job QnS — https://it.jobqns.com/rakub-assistant-network-system-engineer-2026/ (page text saved as `rakub-assistant-network-system-engineer-2026.html.txt`) — same items in https://it.jobqns.com/previous2021-2026bank-ame-ane-ae-qns/
- **Publisher:** IT Job QnS (it.jobqns.com), with the site's own solutions
- **Pages:** 1 web page
- **Document type:** exam paper (candidates' recollection, wording reconstructed; items 6–13 are unnumbered on the page)

## Transcription Notes

- Header as printed: "Rajshahi Krishi Unnayan Bank / Post: Assistant Network System Engineer; (Job ID: 10230) / Exam: 05-Jun-2026". **Exam taker, marks and time not stated.**
- Items 1–5 are numbered on the page; the remaining eight are unnumbered and labelled 6–13 here in page order.
- The wording is clearly recalled, not copied from the paper ("unerlying", "bound rate", "an a administrator", "administrative active", "withing"); kept verbatim.
- The site also has a separate "RAKUB, ANSE, 26 (Viva Experience)" page (https://it.jobqns.com/rakub-anse-26-viva-experience/); not transcribed here.
- Duplicate check: `exam-tags.json` has `RAKUB ANSE 2023` (03.11.2023 BIBM, held in duranta 1777536660); no 2026 RAKUB paper in `ex-question/`. New.

## Content

### Rajshahi Krishi Unnayan Bank (RAKUB) — Assistant Network System Engineer (Job ID 10230) — 05-Jun-2026 — Exam taker: not stated — marks not printed — recollection (13 items)

**1.** A satellite link has a one way propagation delay of 250 ms and a transmission rate 1 Mbps. Frame size 1000 bytes , calculate utilization efficiency if stop-and-wait protocol is used what is minimum window size required to achieve 100% efficiency.

> Worked answer: Tt = 8 ms, a = 250/8 = 31.25, stop-and-wait U = 1/(1+2a) ≈ 1.57 %; window ≥ 1+2a = 63.5 → 64 frames.

**2.** A core router receives a packet with destination IP address 192.168.20.45. The router's forwarding table contains the following overlapping routes:

192.168.0.0/16
192.168.16.0/20
192.168.20.0/22
192.168.20.32/25
Identify the exact routing interface the router will use to forward this packet

> Worked answer: longest prefix match → the /25 entry. Note: 192.168.20.32/25 is not a proper /25 boundary (it normalises to 192.168.20.0/25, which contains .45); kept as recalled.

**3.** A net link utilize 16QAM. If the unerlying signal system operates at bound rate 2400 Baud. Calculate exact Corresponding data in bps.

> Worked answer: log2 16 = 4 bits/baud → 9600 bps.

**4.** Why does IPv6 header architecture faster processing than IPv4 architecture.

**5.** An engineering model is deployed to identify critical network hardware failures. Explain why an a administrator must optimize for recall instead of precision if the business penalty for a missed failure is catastrophic.

**6.** Define Amdahl's law. How does it mathematically dictate the absolute maximum performance speedup a system can achieve when adding more cpu cores.

**7.** State the exact administrative active performed by running the command chmod 755 script.sh on a linux target file.

> Worked answer: owner rwx, group r-x, others r-x.

**8.** A high traffic web application suddenly begins failing with database connection timeouts under peak load. At the same time, the underlying Linux OS kernel hosting the database reports "too many open files" error and network socket exhaustion. Explain the root cause of this failure at the linux os kernel level.

**9.** Explain the distinct filtering behaviors of a WHERE clause versus a HAVING clause withing a SQL statement containing an aggregate execution layout.

**10.** Reflected XSS & stored XSS in terms of how the payload is delivered to the victim

**11.** A corporate network pool experience IP exhaustion due to a high volume of transient guest devices. What lease duration parameter adjustment resolves this?

> Printed answer: shorten the DHCP lease time.

**12.** A network admin notice excessive broadcast traffic in a LAN. cause & solution.

**13.** Difference between Compile time error & Runtime Error

