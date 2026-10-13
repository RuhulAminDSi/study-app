# End of an IPv4-validation program, then Q6 (SJF starvation), Q7 (server rack diagram) and Q8 (SHA-256 / SHA-512, avalanche effect)

- **Source image:** `03_sjf-scheduling-and-sha.jpg` (original file name `495731501_9767686533346910_5957483500803876452_n.jpg`)
- **Page:** 3 of 22 (folder-wide position, i.e. 1-11 here)
- **Paper / Post:** not shown (no exam banner on this page; Q5's code continues from the previous page)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION (Question Bank)

## Transcription Notes

- No exam banner appears anywhere on this page, so the paper/post cannot be identified from this image alone.
- The page is a plain continuation page: it starts mid-`main()` of an IPv4-validation program whose question text is on the preceding page.
- Q7's answer is a graphic (two server-rack elevations with callout labels). The labels have been transcribed; the rack artwork itself cannot be rendered in markdown.
- Q8's answer is not on this page — it continues onto the next page.
- The printed note "(Question not clear)" after Q6 is part of the source page.
- A repeated advertising watermark strip (COMPACT IT repeated in micro-text) runs across the page top; it is omitted.
- No handwritten marginalia are present. Nothing on this page is handwritten.

## Content

```
    is_valid_ip(ip1)  ? cout<<"Valid\n" : cout<<"Not valid\n";
    is_valid_ip(ip2)  ? cout<<"Valid\n" : cout<<"Not valid\n";
    is_valid_ip(ip3)  ? cout<<"Valid\n" : cout<<"Not valid\n";
    is_valid_ip(ip4)  ? cout<<"Valid\n" : cout<<"Not valid\n";
    return 0;
}
```

**Output:**

```
    Valid
    Valid
    Not valid
    Not valid
```

**6. Starvation in SJF, Starvation free scheduling algorithm name. *(Question not clear)***

**Answer:**

Round Robin scheduling works efficiently here because it does not cause starvation and also gives equal time quantum for each process.

**7. Server rack diagram to draw horizontal and vertical scalling.**

**Answer:**

*[Figure: two server-rack elevations, each annotated with labelled callouts. Labels transcribed below.]*

Left rack (top to bottom):

| Label |
|---|
| 2U Ethernet Switch/Hub |
| C2560 Switch |
| C2560 Switch |
| C2560 Switch |
| 1U 19 LCD Monitor Keyboard/KVM |
| 1U Tray |
| 1U Spacer |
| 2U RAID Array |
| 3U Server |
| 3U Server |
| 2U Server |
| 2U RAID Array |
| 3U Server |
| 2U Server |
| 3U Server |
| UPS |

Right rack (top to bottom):

| Label |
|---|
| 1U Ethernet Switch/Hub |
| 1U KVM Switch |
| C3560 Switch |
| 2U Server |
| 2U Server |
| 1U Power Strip |
| 3U Server |
| 3U Server |
| 1U Patch Panel |
| 1U Patch Panel |
| 2U RAID Array |
| 3U Server |
| UPS |

**8. What is SHA-256 and SHA-512 in network security, what is avalanche effect, is it desirable or undesirable.**

**Answer:**

[cut off — answer continues on the next page]
