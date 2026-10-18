# COMPACT IT Recent Question Bank (Written) — DNS resolution using "mygov.bd", and TCP vs UDP differences (Q a, Q b)

- **Source image:** `07_dns-tcp-udp-differences.jpg` (original file name `487483260_775600588148935_6163809225149943587_n.jpg`)
- **Page:** 7 of 63 (folder-wide position)
- **Paper / Post:** not shown (compiled "COMPACT IT Recent Question Bank — Written" job-solution sheet)
- **Exam date:** not shown
- **Marks:** 3 for part (b)

## Transcription Notes

- Coaching brand: **COMPACT IT** ("COMPACT IT Recent Question Bank — Written", footer "COMPACT IT Job Solution").
- Part (a) has no question number visible on this page (stem is on the preceding page).
- No handwritten marginalia on this page.

## Content

**DNS (Domain Name System) works using "mygov.bd" as an example:**

- **Query Initiation:** When you type "mygov.bd" into your web browser's address bar or attempt to access any resource under the "mygov.bd" domain (such as www.nygov.bd), your device needs to determine the corresponding IP address to establish a connection.
- **Local DNS Cache:** Your device first checks its local DNS cache to see if it has recently resolved "mygov.bd" or any subdomains within it. If the information is available in the cache and hasn't expired, the IP address can be retrieved directly without querying external DNS servers.
- **DNS Query to Recursive DNS Server:** If the information is not in the local cache or has expired, your device sends a DNS query to a recursive DNS server. The recursive DNS server is typically provided by your internet service provider (ISP) or configured in your network settings. It acts as an intermediary in the DNS resolution process.
- **Root DNS Server:** The recursive DNS server starts the resolution process by contacting a root DNS server. Root DNS servers are authoritative servers that maintain information about the top-level domains (TLDs) such as ".com," ".org," ".bd," etc.
- **TLD DNS Server (".bd" DNS Server):** The root DNS server responds to the recursive DNS server with the IP addresses of the DNS servers responsible for the ".bd" TLD. The recursive DNS server then queries one of the DNS servers responsible for the ".bd" TLD to find the authoritative DNS server for the "mygov.bd" domain.
- **Authoritative DNS Server for "mygov.bd":** The TLD DNS server responds with the IP address of the authoritative DNS server for "mygov.bd." The recursive DNS server then queries the authoritative DNS server for "mygov.bd" directly.
- **DNS Response and Caching:** The authoritative DNS server for "mygov.bd" responds with the IP address associated with "mygov.bd" (e.g., 192.0.2.1). The recursive DNS server caches this information for future use and sends the IP address back to your device.
- **Establishing Connection:** With the IP address of "mygov.bd" obtained from the DNS resolution process, your device can now establish a connection to the web server hosting the "mygov.bd" website or resource.

**(b) TCP and UDP are the example of transport layer protocol. What are the differences between these two protocols?** — **3**

**Answer:** Yes, TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are indeed examples of transport layer protocols in computer networking.

**Difference between TCP and UDP:**

| Transmission Control Protocol (TCP) | User Datagram Protocol (UDP) |
| --- | --- |
| TCP is a connection-oriented protocol. | UDP is the Datagram Connectionless protocol. |
| TCP provides extensive error checking mechanisms. | UDP has only the basic error checking mechanism using checksums. |
| TCP header size is 20 bytes. | UDP Header size is 8 bytes. |
| TCP is heavy-weight. | UDP is lightweight. |
| TCP is used by protocol HTTP, HTTPS, FTP, SMTP and Telnet | UDP is used by protocol DNS, DHCP, TFTP, SNMP, RIP and VoIP. |
