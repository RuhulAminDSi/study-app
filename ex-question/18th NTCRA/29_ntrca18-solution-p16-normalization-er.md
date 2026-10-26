# 18th NTRCA Lecturer ICT (code ৪৫২) — solved paper, page 16 of 19

- **Source image:** `29_ntrca18-solution-p16-normalization-er.jpg` (original file name `836277687_122142846159191819_5133739562075961939_n.jpg`)
- **Page:** printed "পৃষ্ঠা 16 / 19"; folder position 29 of 32
- **Paper / Post:** **18th NTRCA** শিক্ষক ও প্রভাষক নিবন্ধন লিখিত পরীক্ষা, প্রভাষক, তথ্য ও যোগাযোগ প্রযুক্তি (৪৫২) — question paper in `12_`/`13_` of this folder
- **Exam date:** not printed
- **Marks:** per question below (paper total ১০০, ৩ ঘণ্টা)

## Transcription Notes

- Publisher of the solutions: **Bit to Exabyte** (running header "NTRCA Questions Bank Book"). The solutions are summarised in one line each, as the PYQ notes write their own model answers; the questions are verbatim.
- The solution marks Assignment's keys as [FK]; in the question paper both are underlined (composite PK). Both are true: they form the composite PK and are each an FK.

## Content

### Questions starting on this page

- ৯. (ক) Normalization কী? কত প্রকার ও কী কী? ব্যাখ্যা করুন। [মার্ক ৫]
- ৯. (খ) নিম্নের ডেটাবেস অনুযায়ী E-R ডায়াগ্রাম তৈরি করুন। [মার্ক ৫] — tables: Worker (Worker ID [PK], Worker Name, Hour Rate, Skill Type); Assignment (Worker ID [FK], Building ID [FK], Start Date, Num Days); Building (Building ID [PK], Address, Building Type)

### Printed solution (summary)

- ৯(ক): normalization removes redundancy and insert/update/delete anomalies; staircase 1NF (atomic values) → 2NF (no partial dependency) → 3NF (no transitive dependency) → BCNF (every determinant a super key).
- ৯(খ) begins: Worker and Building are strong entities.
