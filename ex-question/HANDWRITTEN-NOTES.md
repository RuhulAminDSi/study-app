# Handwritten revision notes for the past exam questions

The **question** side of this folder is the photographed sheets (`BCS/`, `BANK/`, `DLD/`, `VIVA/`, …) regrouped by
subject in [`by-subject/`](by-subject/). This file is the **answer side**: the handwritten A4 revision notebooks
built from those same questions, kept here so a question and its worked notebook sit in the same folder.

PDFs are in [`notes-pdf/`](notes-pdf/). The live, in-app versions of every note set (with a web viewer and
downloads) live in [`../public/notes/`](../public/notes/).

---

## Exam-question note sets (PYQ)

Three solved-past-question notebooks, each built from the actual questions in this folder and tagged to the
subject file it answers.

### `pyq-ai` — Artificial Intelligence: Solved Past Questions

[handwritten PDF (12 sheets)](notes-pdf/pyq-ai.en.pdf) · [cover](notes-pdf/pyq-ai.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-ai.en.note.pdf) ·
[answers this subject →](by-subject/19_AI.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | Machine Learning: three paradigms |
| 3 | Reinforcement learning: policy, reward, ε-greedy · Local search: hill climbing & random search |
| 4 | Intelligent & rational agents |
| 5 | Heuristic (A\*) vs blind (BFS) search |
| 6 | High training / low test accuracy · Weak vs strong learners (ensembles) |
| 7 | Agentic AI vs traditional chatbots |
| 8 | Market basket analysis: Apriori |
| 9 | Deep learning, backpropagation, RNN · NLP |
| 10 | MCQs asked (49th BCS ICT-281, 2025) · Viva rapid-fire (bank IT vivas) |
| 11 | Night-before-the-exam sheet |
| 12 | Practice MCQs |

### `pyq-eln` — Electronics, Circuits & Physics: Solved Past Questions

[handwritten PDF (10 sheets)](notes-pdf/pyq-eln.en.pdf) · [cover](notes-pdf/pyq-eln.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-eln.en.note.pdf) ·
[Basic Electronics →](by-subject/05_ELN.md) · [Electrical Circuits →](by-subject/03_EC.md) ·
[Basic Physics →](by-subject/01_PHY.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | n-channel JFET: working principle & regions |
| 3 | BJT: cut-off, active & saturation regions |
| 4 | Counter-type (digital-ramp) ADC |
| 5 | Electronic devices MCQs asked · Filters |
| 6 | Circuits: solved past questions |
| 7 | Physics: E vs B field · Coulomb's law · Gauss's law |
| 8 | Maxwell's equations · Waves & quantum MCQs asked |
| 9 | Night-before-the-exam sheet |
| 10 | Practice MCQs (exam pattern) |

### `pyq-net-viva` — Viva Questions Solved: Networking & Security

[handwritten PDF (12 sheets)](notes-pdf/pyq-net-viva.en.pdf) · [cover](notes-pdf/pyq-net-viva.en.cover.jpg) ·
[typed PDF](notes-pdf/pyq-net-viva.en.note.pdf) ·
[answers this subject →](by-subject/09_NET.md)

| Sheet | Covers |
|---|---|
| 1 | Cover · mind-map · high-yield list |
| 2 | OSI & TCP/IP reference models |
| 3 | Network devices & their OSI layers |
| 4 | Topologies & network types · Transmission media & Ethernet |
| 5 | IP & MAC addressing, casting · PING & troubleshooting |
| 6 | Application protocols & ports |
| 7 | VLAN, VPN & Active Directory · Bank WAN, routing & ATM |
| 8 | Cryptography & encryption · Security principles & authentication |
| 9 | Firewalls, IDS/IPS, DMZ & honeypots |
| 10 | Phishing, malware, DoS & ethical hacking |
| 11 | Night-before-the-viva sheet |
| 12 | Practice MCQs (exam pattern) |

---

## Topic note sets

Per-topic notebooks (theory plus the asked questions). These are **not** copied into this folder — they stay in
`../notes/pdf/` and `../public/notes/` because there are 22 of them and they are not question-specific.

| Topic | Answers |
|---|---|
| `dld-logic-gates` | [DLD](by-subject/04_DLD.md) · gate-only merged view: [04_DLD_logic-gates.md](by-subject/04_DLD_logic-gates.md) |
| `dld-boolean-algebra`, `dld-number-systems`, `dld-combinational`, `dld-sequential` | [DLD](by-subject/04_DLD.md) |
| `ics-history-computing`, `ics-hardware-architecture`, `ics-software-os`, `ics-it-internet`, `ics-number-systems` | [ICS](by-subject/02_ICS.md) |
| `ec-basic-laws`, `ec-analysis-theorems`, `ec-ac-phasors` | [EC](by-subject/03_EC.md) |
| `eln-diodes`, `eln-bjt`, `eln-amplifiers-fet` | [ELN](by-subject/05_ELN.md) |
| `mpi-8086`, `mpi-memory-io-8255`, `mpi-timer-serial`, `mpi-interrupts-dma` | [MPI](by-subject/06_MPI.md) |
| `ca-cpu-organization` | [CA](by-subject/07_CA.md) |
| `ch1-basic-physics` | [PHY](by-subject/01_PHY.md) |

---

## Not yet built

Fourteen `pyq-*` note sets exist as source only — **no PDF, not published, not in the app**. Twelve of them
currently **overflow their A4 sheets** (content spills off the page), so a PDF rendered from them would clip
content; they need layout fixes first.

| Set | Sheets | State |
|---|---|---|
| `pyq-net-written` | 12 | overflows 2 sheets — closest to ready |
| `pyq-dbms`, `pyq-ics`, `pyq-com`, `pyq-se` | 12 | overflows 6–7 sheets |
| `pyq-dld` (en + bn), `pyq-dsa`, `pyq-mpi-ca`, `pyq-os` | 12 | overflows 8–10 sheets |
| `pyq-oop`, `pyq-spl` | 12 | overflows every sheet |
| `pyq-ai`, `pyq-eln`, `pyq-net-viva` | — | **built, published, in `notes-pdf/`** |