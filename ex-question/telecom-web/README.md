# telecom-web: telecom-sector IT/CSE/ETE job exam papers found on the public web (2015-2026)

Bangladesh telecom-sector recruitment papers (BTCL, Teletalk, BTRC, BSCL, BSCPLC/BSCCL, BCSCL, BDCCL, Posts & Telecom, Post Office, TSS, Betar/BTV) collected on 16.10.2026. One folder per source document, named `<yyyy>-<org>-<post>-<slug>/`. Each holds the downloaded public material (Scribd viewer fragments `page-*.jsonp`, page images, or the relevant page text as `*.html.txt`), a transcription `.md` in the house format, and a `.records.json` sidecar (one object per IT/technical question).

Downloads are untrusted data: nothing in these folders was run, and nothing behind a login or paywall was opened (it.jobqns.com pages were read only up to their public cut-off). robots.txt was checked for sattacademy.com, jobstestbd.com, scribd.com, slideshare.net, pdfcoffee.com, it.jobqns.com and yumpu.com; none disallows the pages used.

TLS: the first downloads were made with `curl -k` (certificate checks off). Every saved file was then fetched again with certificate verification on (`curl --ca-native`, the Windows certificate store), and all of them matched byte for byte, or as identical extracted text for the web pages. The sattacademy answer keys were checked again the same way.

## Papers

| Folder | Org | Post | Date | Taker | URL | Pages | IT/tech Qs (records) | Status |
|---|---|---|---|---|---|---|---|---|
| `2015-teletalk-executive-technical-scribd-427357146` | Teletalk | Executive (Technical) | 2015 | IBA, DU | https://www.scribd.com/document/427357146/Teletalk-Executive-Technical-Question-2015-pdf | 1 | 3 | new (recollection, topics only) |
| `2017-btcl-am-technical-gk-scribd-362501904` | BTCL | Assistant Manager (Tech.) | 22.09.201[?] (probably 2017) | BUET | https://www.scribd.com/document/362501904/BTCL-EXAM-Assistant-Manger-Technical | 1 | 0 | new, but GK only (stub) |
| `2021-btcl-am-technical-stackit-scribd-534777028` | BTCL | Assistant Manager (Technical) | 05.02.2021 | BUET | https://www.scribd.com/document/534777028/BTCL-Assistant-Manager-Previous-Year-Question-by-Stack-IT-Job-Solution | 4 | 13 | partial (6 of 13 already in `bit to exabyte/`) |
| same folder | BTCL | Assistant Engineer (CSE) | 2017 | BUET | same | (p. 3) | 18 | **new** |
| `2019-teletalk-executive-jobstestbd` | Teletalk | Executive (Technical/General) | 08.11.2019 | not printed | https://jobstestbd.com/teletalk-bangladesh-limited-tbl-exam-question-solution-2019/ | web page | 16 (9 MCQ + 7 written) | **new** |
| `2021-btrc-sad-technical-jobstestbd` | BTRC | Sub Assistant Director (Technical) | 19.02.2021 | not printed | https://jobstestbd.com/btrc-exam-question-solution-2021/ | web page | 12 MCQ | new (the MCQ part; 2 written items held) |
| `2022-bdccl-am-transmission-jobqns` | BDCCL | Assistant Manager (Transmission) | 2022 | BUET | https://it.jobqns.com/bdccl-assistant-manager-transmission-2022/ (re-post: https://it.jobqns.com/bdccl-assistant-managertransmission-2023-mcq/) | web pages | 18 MCQ | **new** |
| `2022-bdccl-am-cloud-jobqns` | BDCCL | Assistant Manager (Cloud) | 14.10.2022 | not printed | https://it.jobqns.com/bdccl-assistant-manager-cloud-2022/ | web page | 0 | non-tech only (stub) |
| `2022-btcl-jam-technical-jobqns` | BTCL | Junior Assistant Manager (Technical) | 08.04.2022 | BUET | https://it.jobqns.com/btcl-junior-assistant-manager-2022/ , https://it.jobqns.com/btcl-junior-assistant-manager-2022-2/ , sattacademy BTCL bank | web pages | 10 (2 written + 8 MCQ) | partial (written Q1(a) held; Q1(b) and MCQs new) |
| `2023-teletalk-am-it-jobqns` | Teletalk | Assistant Manager (IT) | 2023 | not printed | https://it.jobqns.com/teletalk-bangladesh-ltd-assistant-managerit-2023/ | web page | 10 | partial (3 of 10 held; first full list) |
| `2024-bscplc-am-engineering-scribd-973052916` | BSCPLC (Submarine Cables) | Assistant Manager (Engineering) | 13.12.2024 | BUET | https://www.scribd.com/document/973052916/BUET-Pattern-IT-Questions (+ https://it.jobqns.com/bangladesh-submarine-cables-plc-amengineering-2024/) | 2 of 12 | 7 | **new** (but see the overlap note below) |
| `2024-btcl-jam-it-jobqns` | BTCL | Junior Assistant Manager (IT) | 05.04.2024 | BUET | https://it.jobqns.com/bangladesh-telecommunication-company-limited-junior-assistant-management-it-2024/ | web page | 1 | duplicate of `duranta/1713450345` except Q1(b) |

Totals: 11 folders, 12 papers (one document holds two), **108 records**. By subject: ELN 23, COM 14, NET 13, PHY 12, ICS 9, SPL 8, DBMS 8, DLD 5, CA 4, OS 3, SE 2, DSA 2, MPI 2, AI 2, DM 1.

New exam keys used: `BTCL AE(CSE) 2017`, `Teletalk Executive(Technical) 2015`, `Teletalk Executive 2019`, `BDCCL AM(Transmission) 2022`, `BSCPLC AM(Engineering) 2024`. Existing keys reused: `BTCL AM(Technical) 2021`, `BTCL JAM 2022`, `BTCL JAM 2024`, `BTRC SAD 2021`, `Teletalk AM(IT) 2023`.

**Overlap with another session:** the Scribd document 973052916 is also saved, untranscribed, at `model-test-web/scribd-buet-pattern-it-questions/` (all 12 pages). If that folder is transcribed, drop its BSCPLC section or this folder's records, not both.

## Found but not transcribed

| What | URL | Why |
|---|---|---|
| BTCL Technical Assistant paper ("BTCL-17-1", 3 pages; bandwidth/FDM guard band, 4×1 MUX, Linux, Excel) | https://www.scribd.com/document/469898277/BTCL-17-1 | post out of scope (diploma-level Technical Assistant); its English text is also font-scrambled |
| Teletalk Manager → Senior Manager promotion "probable technical questions" (32 pages) | https://www.scribd.com/document/956707069/Answer-of-Probable-Technical-Questions | internal promotion guide, not a recruitment paper |
| Compact IT Job Solution index (lists BTCL JAM 2022/2024, BTRC AD 2022, BTRC SAD 2019/2021, BDCCL AM (Transmission) 2022/2023, BSCPLC AM 2024, Teletalk AM(IT) 2023) | https://www.scribd.com/document/872683458/67def94f1b30d | preview holds only the index and a Bangladesh Bank paper; the papers are in the paid book |
| MoPT Assistant Programmer 18.05.2017 MCQ (sattacademy) | https://sattacademy.com/job-solution/mcq/ডাক-টেলিযোগাযোগ-ও-তথ্যপ্রযুক্তি-মন্ত্রণালয়ের-সহকারী-প্রোগ্রামার-18052017/all | 100 MCQs, all Bangla/English/Maths/GK; no IT item. The written part is held as `ICT Ministry AP 2017` |
| BTRC written and MCQ question banks (sattacademy) | https://sattacademy.com/job-solution/institute/বাংলাদেশ-টেলিযোগাযোগ-নিয়ন্ত্রণ-কমিশন-বিটিআরসি/written | only Bangla, English, maths and GK items (BTRC AD 2021, SAD 2021, Conductor 2022) |

## Sources that could not be fetched

| URL | Problem |
|---|---|
| https://eeeinsight.com/bangladesh-telecommunications-company-limited-btcl-assistant-managertechnical-exam-question-solution-2023/ (BTCL AM (Technical) 23.06.2023, EEE & CSE) | domain is now a parked "for sale" page; no Wayback snapshot |
| https://www.bdniyog.com/btcl-exam-question-solution/ and https://www.bdniyog.com/bsccl-exam-question-solution/ | redirect to the home page; the Wayback copy of the BTCL page is boilerplate with no questions |
| https://www.youtube.com/watch?v=V0NV5xDNNm4 (Teletalk AM (IT) solutions) | YouTube returned a captcha |
| https://it.jobqns.com (BTCL JAM 2022, BTCL JAM 2024, BSCPLC 2024 written pages) | everything past the first questions requires a paid login; not accessed |
| https://stackvaly.com/product/stack-it-btrc-special-job-solution-pdf-for-written--viva-44617 (BTRC AD/DAD to 10.12.2021) | paid product |
| https://web.livemcq.com/btcl-exam-question-solution-pdf/ | not opened: livemcq.com serves no robots.txt (404 page) and the result pointed to a PDF-download landing page |
| https://www.yumpu.com/en/document/view/38894204/questions-btcl | a 2015 BTCL tender Q&A, not an exam |

No public copy was found of: the BTCL AM (Technical) 23.06.2023 CSE written part; any BTCL paper from 2015, 2016, 2019, 2020, 2025 or 2026; Teletalk papers for 2016-2018 and 2020-2026 other than AM(IT) 2023; BTRC papers for 2022-2026; BSCL papers before 2025; BSCCL papers before 2024; BCSCL other than 2017; BDCCL Cloud/Transmission written parts; Bangladesh Post Office, Posts & Telecom Division, TSS and Bangladesh Betar IT posts.

## Coverage: org × year held anywhere in `ex-question/` (after this folder)

`H` = held before this run, `N` = added by this folder, `H+N` = held and extended, `-` = none.

| Org | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BTCL | - | - | N (AE(CSE); AM GK stub) | H (JAM) | - | - | H+N (AM(Technical)) | H+N (JAM) | H (AME) | H+N (JAM) | - | - |
| Teletalk | N (Executive Technical) | - | - | - | N (Executive) | - | - | - | H+N (AM(IT)) | - | - | - |
| BTRC | - | - | - | - | H (AD/DAD Technical) | - | H+N (AD, DAD, SAD) | - | - | - | - | - |
| BSCL (Satellite) | - | - | - | - | - | - | - | - | - | - | H (AE(CSE)) | H (AE(CSE)) |
| BSCPLC / BSCCL (Submarine) | - | - | - | - | - | - | - | - | - | N (AM(Engineering)) | - | - |
| BCSCL | - | - | H (NE) | - | - | - | - | - | - | - | - | - |
| BDCCL | - | - | - | - | - | - | - | H+N (AM Cloud; AM Transmission) | - | - | - | - |
| Posts & Telecom ministry / Division | - | - | H (`ICT Ministry AP 2017`, written) | - | - | - | - | - | - | - | - | - |
| Bangladesh Post Office (IT posts) | - | - | - | - | - | - | - | - | - | - | - | - |
| TSS | - | - | - | - | - | - | - | - | - | - | - | - |
| Bangladesh Betar / BTV | - | - | - | - | H (BTV AP) | - | - | - | - | - | - | - |
