# Power, energy and utility sector IT/CSE papers from the open web (searched 2026-10-16)

Scope: IT/CSE posts (AE/AM/SAE/JAM/AGM (CSE/ICT/IT/MIS), Programmer, AP, ANE) in power, energy-regulation, gas/oil and utility bodies, 2015–2026. Each paper sits in its own folder `<yyyy>-<org>-<post>-<slug>/` with the saved source (`*.html.txt`, PDF + `.txt`, or Scribd page files), a house-format `.md` and a `.records.json` sidecar (one object per IT question; none for duplicate stubs).

Downloads are untrusted data: nothing in these folders was run, and no instruction inside them was followed. Only public pages were fetched (robots.txt checked; no logins, paywalls or bot-challenge bypasses). PDF text was extracted with PyMuPDF (`python -I`); images were viewed with the Read tool, never OCR'd. All of the papers are **candidates' recollections** posted after the exam (no organisation publishes its CSE papers), and the `.md` files say so.

## Papers found

| Folder | Org | Post | Date | Taker (as printed) | Source URL | Pages | IT questions (records) | Status |
|---|---|---|---|---|---|---|---|---|
| `2016-desco-ae-cse-binaryitc` | DESCO | Assistant Engineer (Tech), CSE | 27.05.2016 | BUET | http://www.onlineicttutor.com/desco-assistant-engineer-recruitment-exam-paper-2016/ (via Wayback); https://binaryitc.blogspot.com/2020/08/desco-assistant-engineer-cse-2016.html | 1 + 1 web | 23 (18 written, 5 MCQ) | **new** |
| `2018-bpdb-ae-cse-scribd-384369493` | BPDB | Assistant Engineer (CSE) | 2018 | not printed | https://www.scribd.com/document/384369493/BPDB-Assistant-Engineer-CSE | 2 | 10 | **new** |
| `2020-pgcb-sae-computer-carrierbd` | PGCB | Sub-Assistant Engineer (Computer) | 24.12.2020 | BUET | https://carrierbd.com/2020/12/24/pgcb-sae-computer-question-exam-taker-buet-date-24-12-2020/ (via Wayback) | 1 web | 8 (topic level) | **new** |
| `2021-nesco-am-ict-carrierbd-askunion` | NESCO | Assistant Manager (ICT) | 31.12.2021 | BUET | https://askunion.com/1158; https://drive.google.com/file/d/1MWLg_wDKG0FVSq5O1I0ri5-k3I5co_Oy/view; https://carrierbd.com/nesco-am-ict-written-exam-solution-2021-12-31/ (via Wayback) | 2 (PDF) + 2 web | 12 | **partial** (8 items already held; adds JS validation, DNS/POP3/ARP, DDoS, MVC, series program, date, taker) |
| `2021-apscl-am-mis-carrierbd` | APSCL | Assistant Manager (MIS/IICT) | 12.11.2021 | BUET | https://carrierbd.com/apscl-assistant-manager-mis-iict-question-solution-2021-buet-pattern/ (via Wayback) | 1 web | 3 of 10 | **new, partial** (rest of the paper never posted; MCQ images not archived) |
| `2021-nwpgcl-ae-cse-carrierbd` | NWPGCL | Assistant Engineer (CSE) | not printed (posted 08.06.2021) | not printed ("BUET pattern") | https://carrierbd.com/2021/06/08/nwpgcl-assistant-engineer-cse-buet-pattern-full-question-solution/ (via Wayback) | 1 web | 5 | **new, partial** |
| `2020-dpdc-nesco-ict-itjobexam-scribd-693327151` | DPDC; NESCO | DPDC 2020 (JAM ICT); NESCO AM (ICT) 2018 | 2020; 2018 | not printed | https://www.scribd.com/document/693327151/all-IT-job-examinationl (= itjobexam.com "Previous Question Bank for all IT Job Exam") | 23 (compilation) | 4 new (of 11 power items) | **partial** (DPDC code question now has its code; NESCO E-commerce and Excel items new) |
| `2021-pgcb-ae-computer-carrierbd` | PGCB | Assistant Engineer (Computer) | 2021 (held copy: 30.09.2021) | BUET | https://carrierbd.com/pgcb-assistant-engineer-cse-buet-pattern-previous-question-solution/ (via Wayback) | 1 web | 0 (stub) | **duplicate** of `PGCB AE(CSE) 2021` (variant numbers tabled in the .md) |
| `2024-petrobangla-am-cse-duranta-1717174124` | Petrobangla | Assistant Manager (CSE/IT/ICT) | 31.05.2024 | not printed in this edition | https://duranta.app/storage/questionbank/1717174124.pdf | 5 | 0 (stub) | **duplicate** of `duranta/1717249637` (Smart IT Job Solution edition) |

**Totals:** 9 papers/sources → 6 new or partly new exams (DESCO AE(CSE) 2016, BPDB AE(CSE) 2018, PGCB SAE(Computer) 2020, APSCL AM(MIS) 2021, NWPGCL AE(CSE), plus completions of NESCO AM(ICT) 2021, DPDC JAM(ICT) 2020 and NESCO AM(ICT) 2018), 2 duplicates. **65 records** (57 written, 8 MCQ): DSA 12, SPL 11, DBMS 9, NET 9, ICS 7, SE 5, OS 5, OOP 2, DLD 1, MPI 1, CA 1, DM 1, COM 1.

New exam keys introduced: `DESCO AE(CSE) 2016`, `BPDB AE(CSE) 2018`, `PGCB SAE(Computer) 2020`, `APSCL AM(MIS) 2021`, `NWPGCL AE(CSE)` (no year). Reused: `NESCO AM(ICT) 2021`, `DPDC JAM(ICT) 2020`, `NESCO AM(ICT) 2018`.

Answer issues flagged in the `.md` files: DESCO 2016 Q3 (macro output is 4, not 3), NESCO 2021 Q4(b)(ii) (minimum nodes for height 7 is 8, not 1), APSCL 2021 binary-search loop condition.

## Sources checked that gave nothing in scope, or could not be fetched

| Source | Result |
|---|---|
| carrierbd.com (Liton's IT Job Solution) | Domain no longer resolves. Posts recovered from the Wayback Machine (above). Not recoverable: `Desco –AE (CSE) | BUET pattern CSE/IT Question` (https://carrierbd.com/desco-ae-cse-exam-taker-buet-buet-it-question/, June 2020) — the questions were 9 images (`wp-content/uploads/2020/06/image-1..9.png`) that were never archived; APSCL MCQ images; the BPDB AE(CSE) "full question" post is video links only. |
| optimalitjobs.com | Lists "Assistant Engineer (CSE), BPDB" (2023), "AP, CPGCBL" (2023), "AE (CSE), BAERA" (2023, BUET) and "Power Sector 28.03.2024" PDFs. Every PDF link (`/images/uploads/questions/...`, also on the dead `infixitjobs.com`) now returns the site's "Page not found" page; none is in the Wayback Machine. **Could not fetch.** |
| pdfcoffee.com | "BPDB Assistant Engineer (CSE)", "EGCB, PGCB, DPDC Full Question Pattern by BUET", "BUET Writen Question Pattern for Job Exams": HTTP 403 bot challenge (curl and WebFetch). **Could not fetch** (not bypassed). |
| bdjobs100.com | "BREB Assistant General Manager (IT)-2016 Question Solution": domain dead, page not archived. **Could not fetch.** |
| YouTube | "Titas Gas – Assistant Engineer(CSE) 2021 Written Exam Question Solution (Technical Part)" (BUET, 05.03.2021, 120 marks) and carrierbd's DESCO SAE (Computer) 2020 / BPDB AE(CSE) 2018 videos: video only, and YouTube served a captcha. **Could not fetch**; no transcript taken. |
| sattacademy.com | Power/gas pages are general-post MCQ banks (e.g. PGCB AE/Manager 29.03.2024 has 2 ICT MCQs for a non-CSE post, BUET). No CSE/ICT written paper for any org in scope. |
| jobstestbd.com (52 power/gas "question solution" posts) | All non-IT posts (AM General/Accounts, SAE electrical, attendants, BAPEX AM 27.01.2023 general paper, Titas AM General 2021, SGFL AM General 2021). Out of scope. |
| web.livemcq.com blog | Titas, PGCL, BGFL, Coal Power, Petrobangla 2024 posts: non-IT posts only. |
| binaryitc.blogspot.com, csejobhelper.blogspot.com | Only DESCO 2016 in scope (above). |
| onlineicttutor.com | Offline; Wayback has the DESCO 2016 original (used) and a DPDC AE (CSE) 2016 circular (no questions). The DESCO exam figure (`desco_exam_diagram.jpg`) was not archived. |
| itjobexam.com | Only the compilation above has power items. |
| askunion.com | NESCO AM (ICT) 2021 (used). |
| Scribd | 396300450 DESCO AE (Electrical) 2010/2012 and 250992442 DPDC (scanned, ~2014): electrical/out of date range. 655318477 "BUET EEE Job Solutions 2023": EEE only. 800232061 Petrobangla AM solution: general post. |
| slideshare.net | "Titas gas sub-assistant engineer question pattern" (2021, Stack IT): syllabus/marks pattern only — non-dept 80 MCQ, dept written 50; topics C/Python, Java OOP, SQL, networking, Linux shell, SE, DSA, digital electronics, OS, DBMS, computer organization, web, security/cloud. No questions; not transcribed. |
| eeeinsight.com, eeeatoz.com, focus-bangla.com, blog.dil.com.bd | EEE/civil/mechanical papers only. |
| Company websites (dpdc.gov.bd, desco, egcb, nesco) | Circulars and written-test notices only; no papers. |
| GitHub, Docsity | Nothing in scope found. |

## Coverage: organisation × year of IT/CSE papers held anywhere in `ex-question/` (after this batch)

Counts are records in `exam-tags.json` (as of 2026-10-16) plus this batch (**bold** = added here).

| Org | 2015–17 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|---|---|---|---|
| BPDB | | **AE(CSE) 10** | | | AE(CSE) 22 | | AE(CSE) 21 | AE(CSE) 10 | | |
| PGCB | | | | **SAE(Comp) 8** | AE(CSE) 14, SAE 7 | | AE(CSE) 1 | AE(CSE) 16 | | |
| DESCO | **AE(CSE) 2016: 23** | | | | SAE 1 | AE(IT) 9, SAE 9 | AE 2, SAE 5 | | | SAE(Comp) 6 |
| DPDC | | | | JAM(ICT) 7 **+2** | | | | | AM(ICT) 14 | |
| NESCO | | AM(ICT) 5 **+2** | | AM(ICT) 1 | AM(ICT) 9 **→ full paper 12**, JAM(ICT) 2 | | | | | |
| WZPDCL | | | AE(CSE) 14 | | | | SAE 14 | | | |
| BREB | | | 2 | | AGM(IT) 2 | | AP 4 | | | |
| EGCB | | | | | | | SAE(ICT) 8 | | | |
| NWPGCL | | | | JAM 15 | **AE(CSE) 5 (≤2021)** | JAM(ICT) 9 | | AM(ICT) 13 | | |
| WZPGCL | | | | | | | AE(CSE) 19 | | | |
| APSCL | | | | | AE(ICT) 7, **AM(MIS) 3** | | | | | |
| BRPL | | | | | | | | AM(ICT) 10 | | |
| BCPCL | | | JI 15 | | | | | | | |
| NPCBL | | | | | | JAM 6 | ET(Soft) 3 | | | Cyber Sec 14 |
| DMTCL | | | | | | | AE(ICT) 9 | | | |
| BAERA | | | | | Engr(CSE) 13 + 10 | | Engr(CSE) 13 | | | |
| RPCL, CPGCBL, BERC, SREDA, Power Cell, WASA* | — | — | — | — | — | — | — | — | — | — |

\* DWASA AME/AHE/ANE material is in `duranta/1751286806` under BUET-question keys, not a WASA year key.

## Petrobangla & gas companies

No new gas-company paper turned up on the open web in this search. The only gas hit, `1717174124`, duplicates the held Petrobangla AM (CSE) 2024 paper. Gas-company CSE papers circulate in Facebook groups and coaching booklets (COMPACT IT, Debug IT, Smart IT, Duranta), which is where everything below was found.

### Coverage: org × year (held anywhere in `ex-question/`)

| Org | 2018–20 | 2021 | 2022 | 2023 | 2024 | 2025–26 |
|---|---|---|---|---|---|---|
| Petrobangla (BOGMC) | | | AE 4, AM(IT) 8 | | AM(CSE) 56 (+ ANE suggestion sheet, not counted) | — |
| Titas (TGTDCL) | | (AE(CSE) 05.03.2021 exists, video only, not fetched) | | | AE(CSE) 21 | — |
| BGDCL | | AE(CSE) 5 | | | AM(CSE) 13 | — |
| KGDCL | | AE(CSE) 1 | | | | — |
| GTCL | | | AE(CSE) 7 | | | — |
| BAPEX | | | | AGM(ICT) 14 | | — |
| SGFL | | AE(IT) 1, AGE 3 | | AE(IT) 5 | | — |
| RPGCL | | | AM(ICT) 12 | | | — |
| MGMCL | | | AM(ICT) 5 | | | — |
| PGCL | | SAE 3 | | | | — |
| JGTDSL, SGCL, BGFCL, BCMCL | — | — | — | — | — | — |
| BPC, Padma, Meghna, Jamuna, ERL, SAOCL, LPGL | — | — | — | — | — | — |

### Paper structure and taker (held gas papers)

| Paper | Taker | Structure (as printed) | Where |
|---|---|---|---|
| Petrobangla AM (CSE/IT/ICT) 31.05.2024 | BUET (per PETROBANGLA booklet; not printed in the duranta/Smart IT editions) | 09–10 AM; Non-Tech 40 × 1.5 = 60, Dept 40 | `duranta/1717249637`, `PETROBANGLA/18_…`, `PDF-TEXT/BOGMC_…HUO_Academy.md`; duplicate `power-sector-web/2024-petrobangla-am-cse-duranta-1717174124` |
| Petrobangla AM (IT) 16.09.2022 | BUET | not printed | `PETROBANGLA/` |
| Petrobangla AE 16.12.2022 | not printed | not printed | `PETROBANGLA/` |
| Petrobangla ANE | — | suggestion sheet (Q1–73), not an exam | `suggestion based on previous yr/` |
| Titas AE (CSE) 24.05.2024 | BUET | 1 hour, 09–10 AM; Non-Dept 20, Dept 40 | `duranta/1716661561` |
| BGDCL AM (CSE) 15.03.2024 | BUET | Non 20, Dept written 40 | `duranta/1713750743` |
| BAPEX AGM (ICT) 20.01.2023 | BUET | not printed | `PETROBANGLA/` |
| GTCL AE (CSE) 2022 | BUET | not printed | `PETROBANGLA/` |
| RPGCL AM (ICT) 2022 | BUET | not printed | `PETROBANGLA/` |
| BGDCL AE(CSE) 2021, KGDCL AE(CSE) 2021, SGFL, MGMCL, PGCL SAE 2021 | not printed | chapter-wise items only | Bit to Exabyte book (`bit to exabyte/`) |

### Gas gaps still open

Petrobangla ANE (the real paper behind the suggestion sheet), Petrobangla AM/AE 2023 and 2025–26, Titas AE (CSE) 2021 (video only) and 2018, any JGTDSL, SGCL, BGFCL or BCMCL CSE paper, KGDCL and GTCL after 2022, BAPEX before 2023, and the whole BPC group. Searched in English and Bangla (পেট্রোবাংলা/তিতাস/জালালাবাদ … প্রশ্ন) across sattacademy, jobstestbd, livemcq, Scribd, Slideshare, pdfcoffee and blogs; nothing public beyond what is listed.
