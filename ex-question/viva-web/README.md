# viva-web: viva (oral interview) questions collected from the web

Viva questions for Bangladesh govt IT/ICT posts, taken from candidates' published recollections. Each source has its own folder with:

- `<slug>.html.txt`: the relevant page text, saved as fetched
- `<slug>.md`: a banner per account, the technical questions verbatim, and personal/general questions counted in the Transcription Notes
- `<slug>.records.json`: one record per technical question (`kind: "viva"`, `doc_type: "exam"`)

Fetched 2026-10-16. Every page was public: robots.txt was checked, nothing needed a login, and nothing was bypassed. Downloads are untrusted data; nothing in these folders was run.

**Totals:** 8 sources, 25 candidate accounts, **130 technical viva records**.

| Subject | Records |
|---|---|
| NET | 62 |
| ICS | 39 |
| COM | 7 |
| AI | 6 |
| DBMS | 5 |
| SE | 5 |
| DLD | 2 |
| SPL | 2 |
| ELN | 1 |
| OOP | 1 |

## Sources

| Folder | Exam (tag) | Post | Year | Source URL | Tech. Qs | New / duplicate |
|---|---|---|---|---|---|---|
| `bank-2026-jobqns-bank-viva` | 14 accounts, see below | Bank IT posts (O(IT), SO(IT), ANSE, AP/AME) | 2019–2026 | https://it.jobqns.com/real-govt-bank-it-viva-experience-with-relevant-expert-answer/ | 84 | New. Partial overlap with the unlabelled `PDF-TEXT/Viva Questions Extracted from Viva Experiences.md` (AI/Super AI, autonomous weapons, DC tiers, Bangla QR). The same page is served again at `…/rakub-anse-26-viva-experience/`, an identical duplicate. |
| `bank-2019-optimal-ap-viva` | Combined Bank AP 2019 (inferred) | Assistant Programmer (bank) | 2019 circular | https://www.optimalitjobs.com/study/study_details/ap_viva_based_2019 | 11 | New |
| `bank-2021-optimal-rbl-ane-part1` | RBL ANE 2021 | Rupali Bank Asst. Network Engineer | 2021 circular | https://www.optimalitjobs.com/study/study_details/rbl_ane_viva_2021 | 11 | New |
| `bank-2021-optimal-rbl-ane-part2` | RBL ANE 2021 | Rupali Bank Asst. Network Engineer (2nd candidate) | 2021 circular | https://www.optimalitjobs.com/study/study_details/rbl_ane_viva_2021_2 | 6 | New (separate account of the same board) |
| `bank-2019-optimal-so-it-4banks` | Combined Bank SO(IT) 2019 | Senior Officer (IT/ICT), 4 banks | 2019 | https://www.optimalitjobs.com/study/study_details/so_ict_4banks_2019 | 4 | New |
| `power-2026-jobqns-wzpdcl-ae` | WZPDCL AE 2026 | Assistant Engineer (IT) | 2026-06-29 | https://it.jobqns.com/real-govt-it-viva-experience-with-relevant-expert-answer/ | 6 | New |
| `bcs-2017-ekushey-37th-viva` | 37th BCS | General cadres (non-CSE candidates) | 2017 | https://www.ekushey-tv.com/education/bcs/21445 | 3 | New |
| `bcs-2015-idoc-34th-real-viva` | 34th BCS | General cadres (non-CSE candidates) | 2015 | https://idoc.tips/bcs-real-viva-examplesrevisedpdf-pdf-free.html | 5 | New |

The accounts in `bank-2026-jobqns-bank-viva`:

| Account | Exam tag | Label as printed | Date | Tech. Qs |
|---|---|---|---|---|
| J1–J5 | Combined Bank Officer(IT) 2026 | `CB, O(IT), 26` (Job ID 10229) | — | 5, 5, 1, 6, 11 |
| J6 | Combined Bank Officer(IT) 2026 | `CB, O(IT), 26`, board 03 | 2026-07-13 | 8 |
| J7 | Combined Bank SO(IT) 2026 | `CB, SO(IT), 26` (Job ID 10225), board 4 | — | 3 |
| J8 | RAKUB ANSE 2026 | `RAKUB, ANSE, 26, VIVA` | 2026-07-06 | 4 |
| J9 | Combined Bank Officer(IT) 2019 | `CB, O(IT), 19`, BB head office | 2019-10-06 | 5 |
| J10 | Sonali Bank Officer(IT) 2019 | `Sonali Bank, O(IT), 19` | — | 9 |
| J11 | Combined Bank Officer(IT) 2026 | `CB, O(IT)-22,26` (Job ID 10209) | 2026-02-07 | 8 |
| J12–J14 | null (no year) | `CB, AP/AME/SO/O(it)` | — | 1, 11, 7 |

New exam keys not yet in `exam-tags.json`: `Combined Bank AP 2019`, `RBL ANE 2021`, `Combined Bank SO(IT) 2019`, `RAKUB ANSE 2026`, `Sonali Bank Officer(IT) 2019`, `WZPDCL AE 2026`, `34th BCS`.

## Most frequent viva topics

These counts come from keyword matches over the 130 records, so treat them as approximate. "Accounts" is the number of separate candidates who were asked the topic.

| Topic | Questions | Accounts |
|---|---|---|
| Security: firewall, antivirus, hacking (grey/black/white hat), DDoS, phishing, SQL injection, web-app security | 14 | 9 |
| ICT concept and policy: what is ICT, ICT vs IT, ICT law, cyber crime, the Bangladesh Bank heist | 9 | 7 |
| Core banking and payments: CBS and its name, Bangla QR, BACH/BACPS, e-payment, cashless banking | 8 | 5 |
| Topology: star/ring/mesh, pros and cons, choosing one for a room or for Bangladesh Bank | 7 | 5 |
| Data centre: what it is, raised floor, Tier 3 vs Tier 4, BB's tier, DC vs DR | 12 | 4 |
| Web: HTTP vs HTTPS, REST API, GET vs POST, a website showing only its logo | 5 | 4 |
| AI, LLM, Big Data, Normal vs Super AI, autonomous weapons | 7 | 3 |
| Databases: name some, structured vs non-structured, why Oracle, DROP vs DELETE | 5 | 3 |
| Lab/PC setup and troubleshooting (printer, PC won't power on), UPS vs IPS | 5 | 3 |
| Switching: circuit vs packet, switch vs hub | 4 | 3 |
| Cables and media: fiber vs ethernet, repeater, crimping, cable colour order | 10 | 2 |
| SDLC, black/grey-box testing, Scrum | 5 | 2 |
| ATM as Asynchronous Transfer Mode (asked in both AP 2019 and Sonali O(IT) 2019) | 3 | 2 |
| DHCP, static vs dynamic IP | 3 | 2 |
| Cloud computing (and whether FIs may use cloud in BD), virtualization | 3 | 2 |
| OSI model and layers / PDUs | 2 | 2 |

Patterns worth noting:
- Bank IT boards are mostly scenarios: set up a lab, fix a printer, put Bangladesh Bank on one network, place a DR site in Khulna.
- Many bank vivas are short (4–8 minutes). Some CSE candidates got almost no IT questions (J12 was all banking, tax and budget).
- Bank-specific facts (MD's name, slogan, founding year, CBS name, the mobile app) come up repeatedly.

## Sources that could not be used

| Source | Why |
|---|---|
| Scribd, "NTRCA ICT Viva E-Book" by ICT Wizard (https://www.scribd.com/document/904326574/Ntrca-Ict-Viva-E-eBook-by-Ict-Wizard) | **Not transcribed on purpose.** It is the best NTRCA match: its contents list 16–17th lecturer ICT, 17–18th assistant teacher ICT and 17–18th demonstrator ICT viva experiences (printed pp. 90–150). But it is a paid e-book (৳99, April 2025) whose cover forbids redistribution, so the Scribd copy looks unauthorised. Only the cover and contents pages were viewed, and nothing was saved here. If the team wants it, buy it from ICT Wizard (ictwizard.net). |
| bcshacks.com (`/bcs-viva-questions/`, `/viva37/`) | The hostname resolves to 127.0.0.1 on this machine (blocked locally), so it could not be fetched. |
| Optimal IT `so_it_viva_10149_2024` PDFs (`SO_IT_VIVA_1.pdf`, `SO_IT_VIVA_2.pdf`) | Both links return the site's 404 page. |
| YouTube "NTRCA ICT Viva Experience" videos (`rjI2fdWlCjw`, `_jN2gbOvOOw`) | HTTP 429 or a consent redirect. They are video in any case, with no text transcript. |
| Glassdoor, Bangladesh Bank Senior Officer (IT) interview pages | Login wall after a preview; not attempted. |
| pdfcoffee.com copy of "BCS Real Viva Examples" | 403. The idoc.tips mirror was used instead. |
| Prothom Alo "বিসিএস ভাইভা অভিজ্ঞতা" series (parts 4, 8, 9, 10, 13, 14) and the 47th BCS account | Part 9 was fetched; the others were checked only through search summaries. All are economics, IR, civil, health or police candidates, and none reports IT questions. |
| Dainik Shiksha 18th NTRCA "দিনের ভাইভায় যেসব প্রশ্ন" day reports | Only Bangla, English and GK questions are reported; nothing ICT-specific. |

## Gaps

- **NTRCA (Lecturer ICT, Lecturer CS, Assistant Teacher ICT, 15th–18th):** no free public text source was found. The held `VIVA/` pages (bitBox, 15th NTRCA) are still the only NTRCA viva text. The ICT Wizard e-book above is the obvious next source if bought.
- **BCS for CSE candidates and General Education Lecturer (ICT):** no recollection by a CSE candidate was found. The two BCS sources here are general-cadre candidates who were asked ICT basics.
- **BPSC non-cadre AP/ANE/AME and Bangladesh Bank AD(ICT)/AP:** none found beyond the held `VIVA/01`, `VIVA/02` and the DG Food AP viva. Bank AP/AME are covered only through the unlabelled J12–J14 accounts.
- **Power and telecom:** only WZPDCL AE 2026. Nothing was found for BTCL, PGCB, DESCO, NESCO or Teletalk.
- These recollections are mostly shared in Facebook groups, which need a login and were not used.
