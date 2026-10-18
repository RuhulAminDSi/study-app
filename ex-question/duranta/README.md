# duranta.app question bank (downloaded 2026-10-16)

Source: the public question bank at https://duranta.app/question-bank. robots.txt allows crawling, and these 67 PDFs
are linked openly (not behind "Job & QB Plans"). Each PDF sits in its own folder `<id>-<slug>/` with:
- `<id>.pdf` (original)
- `<id>.txt` (PyMuPDF text layer, `===== page N =====` separators)
- `<id>.md` (house-format transcription, see `/pyq-ingest`)

`_extract.json` lists page counts and text density.

The documents are coaching material (Duranta, Smart IT Job Solution and others). Following the 2026-10-15 spec,
we reuse the **questions and exam names** (facts of what was asked), never their answer text, layout or branding.

## Exam takers printed in the papers

| Exam taker | Sector |
|---|---|
| **BIBM** (Bangladesh Institute of Bank Management) | combined bank IT exams 2020–2026 (most bank headers) |
| **CTI** | some bank exams (2021) |
| **BUET** | power, gas and telecom (PGCB, BPDB, Titas, BGDCL, Petrobangla, BRPL, NWPGCL, BAERA, BERC) |
| **DUET** | NWPGCL JAM/SAE, NPCBL (2026) |
| **KUET** | WZPDCL |
| **MIST** | some 2025–26 exams |
| **BCC** | at least one paper |
| **Dhaka Polytechnic** | at least one paper |

This corrects the web research, which had found only AUST for banks (see
`docs/superpowers/specs/2026-10-16-exam-edge-research.md`).

## Catalogue

### Real exam papers and compilations (ingested)

| Group | Folders (id) |
|---|---|
| Bank (BIBM/CTI) | 1777536660 bank 2020–26 (20 exams) · 1770185804 (**duplicate** of 1777536660, reordered) · 1728262949 Officer(IT) · 1785328629 / 1785503716 SO(IT) · 1707373769 DBBL 2019 (private) |
| Bangladesh Bank / BSCS | 1737452307 BB AD(ICT)/AP · 1737542359 BB AME/AD(ICT) 2023 · 1769271736 BSCS AE(IT)/AME · 1783405234 BSCS AME/AE IT |
| BPSC / ministries | 1783757387 BPSC non-cadre · 1758501721 BPSC non-cadre CSE · 1741131167 Directorate of Food AP practical + viva 2022 · 1708869322 BRICM 2024 |
| Power / energy / telecom | 1716050174 PGCB AE 2024 · 1716661561 TGTDCL 2024 · 1713750743 BGDCL 2024 · 1717249637 Petrobangla 2024 · 1713804982 BRPL 2024 · 1705173540 NWPGCL AM 2024 · 1734525457 NWPGCL JAM 2024 · 1781868667 NWPGCL JAM (DUET) · 1713450345 / 1713711956 BTCL JAM 2024 · 1720852216 / 1720853431 BTRC 2021 / 2019 · 1704037243 / 1766849158 / 1766849185 WZPDCL · 1782205758 BAERA · 1783762106 NPCBL SAE CSA · 1751286806 previous BUET AME/AHE/ANE · 1708532200 power-sector previous questions · 1750496884 DPDC AM/JAM (+ BUET-pattern suggestions) |
| BCS / NTRCA | 1706697796 / 1706697836 / 1706697857 36th–38th BCS Lecturer ICT · 1706697945 36–38 chapter-wise · 1706723189 45th BCS Lecturer ICT · 1775612046 BCS CSE + ICT · 1744364817 47th BCS prelim · 1707458917 / 1707458946 15th NTRCA · 1707468692 16th NTRCA · 1707459059 / 1707459097 / 1707459159 17th NTRCA · 1710606589 18th NTRCA prelim (scanned) |

The duplicate of 1733247591 (NWPGCL JAM, identical file) was removed.

### Suggestions and patterns (transcribed, never counted as exams)

1732800614 46th BCS written suggestions · 1732968747 46th/47th BCS code 971 suggestions · 1734830068 SE question
pattern · 1775695828 MIST pattern · 1780933203 NPCBL suggestions · 1727257633 VLSM practice (problem list only)

### Notes, info and syllabi (reference only, not transcribed)

| Kind | Folders (id) |
|---|---|
| Notes | 1709774500 TOC notes (scanned) · 1709774527 DLD (scanned) · 1750384969 DLD hand note · 1743570786 AI/ML/cloud notes |
| Info booklets | 1750299615 power-sector booklet · 1708856591 / 1778502578 EGCB info |
| Syllabi | 1733291289 BCS 281 syllabus (scanned) · 1744631605 IICT BUET M.Sc. syllabus (scanned) |

### Out of scope

1742704212 NSI AD/Field Officer · 1753586519 Bangladesh Railway · 1783932569 MIST cadet college
