# GTCL Assistant Engineer (CSE) 2022 (BUET) continued — Q2 (subnet of 192.168.100.128/26), Q3 (Linux command), Q4 (DNS poisoning attack)

- **Source image:** `04_subnet-mask-and-dns-poisoning.jpg` (original file name `495746293_9767686410013589_5239863626002897811_n.jpg`)
- **Page:** 4 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** GTCL (Gas Transmission Company Limited) — Assistant Engineer (CSE); Exam: 2022 (BUET)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- This page continues the GTCL Assistant Engineer (CSE) 2022 (BUET) paper; the exam banner itself is on the preceding page, so it is not repeated here.
- The page opens mid-`sum_of_digit()` from Q1 (started on the previous page).
- Q4's answer continues onto the following page (DNS-spoofing diagram), so this page ends mid-solution.
- Q3's answer is a cross-reference only ("[See MGMCL, Assistant Manager (ICT), Exam: 2022 (BUET)]") — the referenced answer is not on this page.
- The source prints "Number of Valid host = 2^6 -2 = 62" while also printing "Number of host = 2^6 = 64"; both are reproduced as printed.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

```
        return (n % 10 + sum_of_digit(n/10));
    }
    int main(){
        int num = 3426;
        int result = sum_of_digit(num);
        printf("Sum of digits in %d is %d\n", num, result);
        return 0;
    }
```

**2. Find network address, subnet mask, broadcast address and IP host range of 192.168.100.128/26**

**Answer:**

- Network Address: 192.168.100.128
- Subnet Mask: 255.255.255.192
- Number of host = 2^6 = 64 (192.168.100.129 to 192.168.100.191)
  - Number of Valid host = 2^6-2 = 62
- Broadcast Address: 192.168.100.191

**3. Linux command:**

**Answer:** [See MGMCL, Assistant Manager (ICT), Exam: 2022 (BUET)]

**4. What do you mean by a DNS poisoning attack, and how does it work?**

**Answer:**

DNS poisoning is a type of spoofing attack in which hackers impersonate another device, client or user. This disguise then makes it easier to do things like intercept protected information or interrupt the normal flow of web traffic.

In a DNS cache poisoning attack, hackers alter a domain name system (DNS) to a "spoofed" DNS so that when a legitimate user goes to visit a website, instead of landing on their intended destination they actually end up at an entirely different site. Usually, this happens without users even knowing, as the fake sites are often made to look like the real ones.

**How does it work:**

Fully understanding how DNS poisoning works requires a bit of context on how the internet routes users to visit different websites.

Every device and server has a unique internet protocol (IP) address, which is a series of numbers used as identifiers in communications. Every website has a domain name (e.g. www.compactit.com) that sits on top of that to make it easy for internet users to visit the websites they want. The domain name system then maps the domain name that users enter to the appropriate IP address to properly route their traffic, all of which gets handled through DNS servers. DNS poisoning takes advantage of weaknesses in this process to redirect traffic to an illegitimate IP address. Specifically, hackers gain access to a DNS server so that they can adjust its directory to point the domain name users enter to a different, incorrect IP address.

[cut off — answer continues on the next page]
