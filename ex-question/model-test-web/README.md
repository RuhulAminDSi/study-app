# Model tests and pattern sheets from the web (BUET pattern, bank IT, BPSC AP)

This folder holds coaching **model tests** (mock papers) and **pattern sheets** for Bangladesh govt and bank IT/CSE recruitment exams, found on the web on 2026-10-16. Searches were run in English and Bangla, standard and extended.

**Nothing here counts as an exam.** The one compilation of real-paper recollections (`scribd-buet-pattern-it-questions/`) is also filed as a suggestion, with each printed exam kept in `printed_tag`. Every record has `doc_type: "suggestion"` and `exam: null`, so nothing here adds to PYQ frequency. No model test found here reprints a tagged past question, so in the model tests no record uses `printed_tag`. No model-test file embeds a whole real paper.

Each source has its own folder, which holds:

- the downloaded material, kept as untrusted data (Scribd page layers in `_pages/`, page images in `_img/`, blog text as `<slug>.html.txt`)
- a `.md` transcription
- a `.records.json` sidecar, but only for files that contain IT questions

Nothing was run from these folders.

## Sources found

| Folder | Publisher | Title | Date | Imitates | Structure | URL | IT questions (records) |
|---|---|---|---|---|---|---|---|
| `scribd-govtjobcarebd-ap-final-model-test/` | Govt Job Care BD | BPSc Assistant Programmer Final Model Test | not printed (about 2020–21; it advertises a "41st BCS special" batch) | BPSC non-cadre Assistant Programmer, MCQ stage | 100 MCQ × 1 mark, 1 hour, −0.5 per wrong answer, 4 options, all MCQ. Counted mix: technical 40 (CSE 33, EEE/electronics 6, web GK 1), English 21, Bangla and GK 39. | https://www.scribd.com/document/565591928/Assistant-Programmer-final-model-test | 42 (40 MCQs plus 2 orphan stems) |
| `daudbd-uttara-bank-so-it-model-written-tests/` | DaudBD (blog) | Uttara Bank PLC Senior Officer (CSE/IT) Model Written Tests: Paper I, Paper II, Model Test #3 | Dec 2025 | A bank's own IT written test (Uttara Bank SO CSE/IT). Not BIBM-styled. | Each paper: 100 marks, 90 minutes, all written, no general part, 5 sections with choices. I: 10/12×3, 5/7×6, 4/5×5, 2/3×10, 1/3×10. II: 12×2, 6/7×6, 3×8, 2/3×8, 1/3×10. III: 10/12×3, 5/7×6, 3×8, 2/3×8, 1/3×10. | https://www.daudbd.com/2025/12/uttara-bank-plc-senior-officer-cseit.html | 86 (30 + 28 + 28) |
| `daudbd-uttara-bank-so-it-pattern/` | DaudBD | Uttara Bank Senior Officer (IT) question pattern, with samples | Nov 2025 | Uttara Bank SO (IT) | Described as MCQ, 60–90 min, with English, maths and reasoning, GK and banking, and core IT parts | https://www.daudbd.com/2025/11/uttara-bank-plc-senior-officer-cse-it.html | 4 MCQ |
| `daudbd-buet-model-practice-set/` | DaudBD | BUET-style Model Practice Set | Aug 2025 | English part of BUET-run tests | 100 English items in 12 sections, answers inline, no marks or time | https://www.daudbd.com/2025/08/buet-model-practice-set.html | 0 (English only) |
| `daudbd-dmtcl-2025-suggestion/` | DaudBD | DMTCL 2025 Written Exam Suggestion | Aug 2025 (exam 15 Aug 2025, BUET ECE building) | BUET-run DMTCL engineering/telecom test | "Expected": 1 h, 70–75 marks; GK 10, Bangla 10, English 10 (MCQ plus a short paragraph or essay); technical 40 = 10 MCQ × 2 + 1 written × 20 | https://www.daudbd.com/2025/08/buet-dmtcl-2025-written-exam-suggestion.html | 4 (suggested written tasks) |
| `scribd-cse-buet-pattern-job-prep/` | Govt Job Care BD | "BUET Pattern IT Job Recruitment Exam" (pattern sheet) | not printed (about Jan 2021) | BUET-run BCC, BPDB, BTCL, gas and power company tests | 1:30 h; "MCQ 60/40 each carries .50 marks" (non-technical); "Written 12 questions each carries 5 marks" (technical) | https://www.scribd.com/document/490566987/CSE-BUET-pattern-job-preperation | none (pattern only) |
| `slideshare-manikuddin-buet-pattern-deck/` | Md. Manik Uddin (Duranta teacher; FB group "Govt CSE or IT JOB : OUR GOAL") | Govt CSE/IT Job Preparation BUET Pattern | 2024-11-21 | BUET-run power, telecom and gas sector tests | Marks-split table for 7 employers, plus per-subject counts of topics that "came in BUET job exams" | https://www.slideshare.net/slideshow/govt-cse-it-job-preparation-buet-pattern-pptx/273489525 | none (pattern only) |
| `scribd-bb-ad-ict-free-model-test-routine/` | educativesite.com | 40-Days Bangladesh Bank AD (ICT) Free Model Test Routine | 9 Aug – 17 Sep 2026 | Bangladesh Bank AD (ICT), MCQ stage | Online MCQ, one topic test a day for 39 days, then a full timed mock on day 40 | https://www.scribd.com/document/1072717594/BB-AD-ICT-Free-Model-Test-Routine | none (routine only) |
| `scribd-buet-pattern-it-questions/` | Duranta (watermark "Manik Vai Duranta Academy") | "BUET 2025 CSE Job Exam Questions" | 2024–2025 | — (candidates' recollections of **real** BUET-run papers, not a model test) | 8 papers transcribed: BCIC AP 14.02.2025; BUET AP 22.02.2025; BUET ICT Cell AHE 12.04.2025; IFIC MTO 17.05.2025; Jamuna Oil JO(IT & MIS) 23.05.2025; BUET AP (Exam Controller) 21.06.2025; DPDC AM ICT 27.06.2025; Dhaka WASA AME(Network) 04.07.2025. The DPDC AE(CSE) 18.10.2025 banner has no questions. | https://www.scribd.com/document/973052916/BUET-Pattern-IT-Questions | 91, all `suggestion`, each with a `printed_tag`, as the coordinator directed. The BSCPLC 13.12.2024 paper (pp. 1–2) is skipped because it is already transcribed in `telecom-web/2024-bscplc-am-engineering-scribd-973052916/`. DPDC AM ICT 27.06.2025 overlaps `BUET JOB/28`. |

**Records: 227 in total** (42 + 86 + 4 + 4 + 0 + 91).

| Subject | Records |
|---|---|
| NET | 70 |
| OS | 28 |
| ICS | 26 |
| DBMS | 20 |
| SPL | 14 |
| SE | 11 |
| CA | 9 |
| DSA | 9 |
| EC | 9 |
| OOP | 8 |
| COM | 7 |
| DLD | 6 |
| ELN | 5 |
| AI | 2 |
| MPI | 1 |
| DM | 1 |
| GRAPH | 1 |

The DaudBD Uttara papers make up most of the NET weight.

Every download was fetched, or fetched again, with TLS certificate checks on (Git's Schannel curl uses the Windows store, which holds the Kaspersky root). The re-fetched files were byte-identical to the first copies.

Already held, so not fetched again: `model test/` (Bit to Exabyte Model Test 01), `Standard Pattern/`, `suggestion based on previous yr/`, and the duranta pattern and suggestion PDFs (1750496884, 1775695828, 1780933203, 1732800614, 1732968747, 1734830068).

## Reliability notes

- **Govt Job Care BD = Duranta.** Both Govt Job Care BD documents print +8801949527839, the same number as Duranta's course pages (teacher Md. Manik Uddin, who also made the SlideShare deck). Treat these three sources as one coaching lineage, not three independent views.
- **The DaudBD posts look machine-generated.** Uttara Paper I ends with a chatbot sign-off ("If you would like, I can provide a fully worked answer key…"). Use them for format ideas only, and give them less weight than the coaching papers.
- **Scribd text is font-encoded.** The two Govt Job Care BD files were decoded with a character map built from known words and checked against whole sentences and the phone number. The details are in each `.md`.

## Synthesis: the BUET-pattern model-test blueprint

What the coaching sources agree on, read together with the papers already held (`model test/01_bte-model-test-01`, `duranta/1750496884` BUET-pattern syllabus, `duranta/1775695828` MIST pattern):

1. **Two parts.**
   - The non-technical part is Bangla, English, maths and GK. It is usually MCQ, sometimes with a short paragraph, essay or translation.
   - The technical ("departmental") part is short written answers.
   - Technical weight varies by employer. The deck's table gives EGCB 40/100, BTRC 55/75, BR Power 65/90, PGCB 120/200, TGTDCL 80. The pattern sheet gives written 60 against MCQ 20–30. The DMTCL suggestion gives 40 of 70–75. As a single default, use **about 60% technical**.
2. **Time and marks.**
   - BUET-run tests: **60–90 minutes** at BUET, totals of **70–100 marks** (200 for PGCB). The pattern sheet says "1:30 hours in ECE building, BUET". The DMTCL suggestion says 1 hour.
   - The Bit to Exabyte mock: 100 marks in 60 minutes, plus 15 minutes to submit a PDF.
3. **Item granularity.** The technical part is **8–12 written questions of 5–10 marks**: "12 questions each carries 5 marks", or 8 technical questions in the BTE mock. Each question is a short, self-contained task, often with two parts ("define X; differentiate X and Y", "write SQL for (a) (b)").
4. **MCQ conventions.**
   - The non-technical MCQ is worth **0.5 marks per item**. The pattern sheet says ".50 marks", with 40–60 items.
   - Where a model test imitates the BPSC AP MCQ stage instead, it is 100 items × 1 mark in 1 hour with −0.5 negative marking, about 40% technical and the rest Bangla, English and GK.
5. **Technical topic mix.** The deck's "came in BUET job exams" counts put **networking first** (subnetting alone 16, communication maths 5). Database comes next (ER diagram 7, SQL clauses and triggers, ACID). Then come algorithms and DS (greedy, DP, BST, MST, shortest paths, traversals), OS (Linux permission commands, page replacement, memory access time), and software engineering (UML, testing types, SDLC models). Architecture/microprocessor and DLD each get one written item in most papers. AI, cloud and TOC appear occasionally.
6. **Question styles.** Every source uses these:
   - SQL against a given two-table schema (employee/department, course/instructor, accounts/transactions)
   - a short C/C++/Java/Python program or output trace
   - one subnet/VLSM calculation
   - "difference between" pairs (TCP/UDP, process/program, min/max heap, stateful/stateless firewall)
   - a definition with types (RAID levels, cloud types, inheritance types)
   - a small numeric problem (Shannon capacity, cache or memory access time, number-base arithmetic)
   - a diagram to draw (process states, OSI, network design)

   Bank-IT mock papers add banking-flavoured design tasks: CBS architecture, branch network with VLANs, DR with RTO/RPO, 2FA, SSL/TLS.
7. **Sensible app blueprints.**
   - *BUET power/telecom written:* 100 marks, 90 min. Non-technical 40 = 40 MCQ × 0.5 + one 10-mark essay or translation, with −0.25 per wrong MCQ. Technical 60 = 10 written × 6: NET 2, DBMS 2 (SQL + theory), SPL/OOP 2 (program + output), OS 1, DSA 1, SE 1, CA/DLD 1.
   - *BPSC AP MCQ:* 100 × 1, 60 min, −0.5. About 40 technical items (NET, OS and ICS heavy) and 60 Bangla, English and GK.
   - *Bank IT written:* 100 marks, 90 min, all technical, sectioned by item size (2–3 marks short, 5–6 marks medium, 8–10 marks design or problem) with "answer any N of M" choices.

   The −0.25 and the exact counts above are proposals; none of the sources prints them for BUET written tests.

## Sources searched that gave nothing usable or could not be fetched

| Source | URL | Result |
|---|---|---|
| duranta.app model tests | https://duranta.app/all-courses/govt-cse-it-job-preparation-courses and course-details pages (DPDC 245, Somvabona 2025, 241, 244, 265) | Model tests ("চূড়ান্ত মডেল টেস্ট ০২ টি", the free "IT Engineer's Somvabona Exam 2025", 2 h, MCQ + written) are behind the student login. The public pages give only syllabus lists. Question-bank ID 1733247591 is a known duplicate of NWPGCL JAM. |
| pdfcoffee "BUET Writen Question Pattern for Job Exams" | https://pdfcoffee.com/buet-writen-question-pattern-for-job-exams-pdf-free.html | Cloudflare JavaScript challenge; not bypassed |
| carrierbd.com (Liton's IT Job Solution) "Model Test" category | https://carrierbd.com/category/model-test/ | Domain does not resolve (ENOTFOUND) |
| cse.jobeguide.com | https://cse.jobeguide.com/ | Connection failed |
| BIBM / DSBM model question | https://bibm.org.bd/pdf_files/Model_Question.pdf | HTTP 403. It is also a DSBM admission paper, not a recruitment test. |
| COMPACT IT, Web Institute | https://compactit.org/courses/9, https://www.webinstitute.com.bd/course-details/compact-it-job-preparation | Paid courses; their model tests are not public |
| ARBS Academy IT Jobs | https://itjobs.arbsacademy.com/ | Real past papers, not model tests. Most content is behind sign-up. |
| Scribd 495815731 "Non-Tech BUET" (104 pp.) | https://www.scribd.com/document/495815731/Non-Tech-Buet | Non-technical (Bangla, English, maths, GK) BUET question collection; outside IT scope |
| Scribd 825956209, 999762779 | https://www.scribd.com/document/825956209, https://www.scribd.com/document/999762779 | A BUP MBA admission test and an HSC-level ICT test; not relevant |
| Scribd 526264561, 517961915 "BUET Preli … Model Test" | https://www.scribd.com/document/526264561 | BUET undergraduate admission prelims, not job tests |
| Bit to Exabyte, Smart IT Job Solution, CSE Career Master Guide, Programmer's Panel, HUO Academy, Optimal IT Jobs | web search (English and Bangla) | No public model-test pages indexed. Their material is on Facebook groups and pages, which search does not index. |
| csejobhelper.blogspot.com, onlineicttutor.com, Stack IT (Scribd/SlideShare/pdfcoffee) | various | Only real past papers (BB AP 2016, BTCL, BPSC), no model tests |
| GitHub | web search | Nothing relevant |

## Note added 2026-10-16 (main session)

The 91 records in `scribd-buet-pattern-it-questions/` are recollections of 8 named, dated 2025 BUET-run papers (BCIC AP, BUET AP, BUET ICT Cell AHE, IFIC Bank MTO, Jamuna Oil, BUET AP (Exam Controller), DPDC AM(ICT), Dhaka WASA AME(Network)). They were promoted from `suggestion` to `exam` (exam = printed_tag), consistent with other recollected papers in the corpus. The original sidecar is kept in the session scratchpad.
