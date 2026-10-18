// Exam-name normaliser shared by the Phase 2 scripts.
// parseTag(raw) -> [{ org, post, year, month }]  for one printed tag such as "BPSC ADA, AP 2022; PSB AP 2018"
// examKey(e) / examName(e) give the canonical identity and display name.
// OLD_EXAMS maps the free-text `exam` names of the first 956 records onto the same identities.

// Whole-tag fixes for tags that are garbled in print (kept explicit so they are easy to review).
const TAG_FIX = {
  'BPSCAP2023': 'BPSC AP 2023',
  'BPSCS, AE 2021': 'BPSC SAE 2021',
  'APSCL AE (ICT 2021)': 'APSCL AE(ICT) 2021',
  'PBL SQA 2023, BPSC, AP 20': 'PBL SQA 2023, BPSC AP',
  'BB, Combined 5 Bank AME 2019': 'BB AME 2019, Combined Bank AME 2019',
  'NPCBL ET(Soft); WZPGCL AE(CSE) 2023, BPSC SAE 2021': 'NPCBL ET(Soft) 2023; WZPGCL AE(CSE) 2023, BPSC SAE 2021',
  'BUET M.Sc. April 2017, May 2016': 'BUET M.Sc. April 2017; BUET M.Sc. May 2016',
  'Combined Bank, IT/ICT-2018': 'Combined Bank Officer(IT) 2018',
  'Officer IT/ICT- 2019': 'Combined Bank Officer(IT) 2019',
  'PKB Programmer- 2019': 'PKB Programmer 2019',
  '18th NTRCA Lecturer ICT(452) 2024': '18th NTRCA College ICT 2024',
  'Exam name/year omitted in source': '',
  'DPDC 2020': 'DPDC JAM(ICT) 2020',
  '১৫তম NTRCA': '15th NTRCA',
  '১৬তম NTRCA': '16th NTRCA',
  '১৭তম NTRCA': '17th NTRCA',
  '১৫তম ও ১৭তম NTRCA': '15th NTRCA; 17th NTRCA',
};

// Organisation aliases (left: as printed, right: canonical short name).
const ORG = [
  [/^(combined\s*\d*\s*banks?|\d+\s*bank|bank|BSCS)$/i, 'Combined Bank'], // BSCS = Bankers' Selection Committee Secretariat
  [/^RBL$/i, 'Rupali Bank'], [/^Rupali Bank$/i, 'Rupali Bank'],
  [/^BICIC$/i, 'BCIC'], [/^(SB PLC|SB PCL|SBL)$/i, 'Sonali Bank'], [/^BriCM$/i, 'BRICM'], [/^NPCNL$/i, 'NPCBL'],
  [/^Milk Vita$/i, 'Milk Vita'], [/^Titas Gas$/i, 'Titas Gas'], [/^ICT Ministry$/i, 'ICT Ministry'],
];
const ORG_FULL = {
  'Combined Bank': 'Combined Bank (Bankers\' Selection Committee)', BB: 'Bangladesh Bank', BPSC: 'BPSC', BCC: 'Bangladesh Computer Council',
  BPDB: 'BPDB', PGCB: 'PGCB', BTCL: 'BTCL', RAKUB: 'RAKUB', 'Rupali Bank': 'Rupali Bank', BCIC: 'BCIC',
};

// Post tokens: an item made only of these is a post that belongs to the organisation before it.
const POST_RE = /^(\(?(AP|AME|AHE|AME\/AHE|AME\/AE\(IT\)|AE|SAE|ADA|ADBA|AGM|AGE|ANE|ANSE|NSE|NE|ME|SO|JAM|AM|AD|HE|PO|SCO|SQA|SAD|ET|IT|ICT|CSE|Officer|Programmer|Lecturer|School|College)\b.*)$/i;
const norm = (s) => s.replace(/\s+/g, ' ').replace(/\s*\(\s*/g, '(').replace(/\s*\)/g, ')').trim();
const normPost = (p) => {
  if (!p) return null;
  let x = norm(p).replace(/^\((.*)\)$/, '$1');
  x = x.replace(/^Officer\(IT\)$/i, 'Officer(IT)').replace(/^SO\(?IT\)?$/i, 'SO(IT)').replace(/^AE$/, 'AE')
    .replace(/^\(General\)\s*/i, '').replace(/^SO\(ANE\)$/i, 'SO(ANE)')
    .replace(/^SAE\(CSE\)$/i, 'SAE'); // SAE posts in these exams are all CSE/ICT
  return x || null;
};
const MONTHS = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/i;

function splitOrgPost(item) {
  let s = norm(item.replace(/[–-]$/, ''));
  let m;
  if ((m = s.match(/^(\d+)(st|nd|rd|th)\s*BCS\b\s*(.*)$/i))) {
    // "45th BCS (General), ICT" is the ICT part of the general-cadre Science & Technology paper, not the
    // technical-cadre ICT (281) / CSE (971) papers, so it is kept apart.
    if (/General/i.test(m[3])) return { org: `${m[1]}th BCS`, post: 'General (Sci & Tech)' };
    const post = normPost(m[3].replace(/[(),]/g, ' ').trim()) || null;
    return { org: `${m[1]}th BCS`.replace(/^(\d*1)th/, '$1st').replace(/^(\d*2)th/, '$1nd').replace(/^(\d*3)th/, '$1rd').replace(/^1(\d)(st|nd|rd)/, '1$1th'), post };
  }
  if ((m = s.match(/^(\d+)(st|nd|rd|th)\s*NTRCA\s*(.*)$/i))) return { org: `${m[1]}th NTRCA`, post: normPost(m[3]) };
  if ((m = s.match(/^BUET M\.?\s*Sc\.?\s*(CSE)?\s*(.*)$/i))) return { org: 'BUET M.Sc.', post: (m[2].match(MONTHS)?.[1] ?? '') || null };
  // IICT (ICT/InfoSec) admission tests are a separate exam from the CSE department's, same counting rule
  if ((m = s.match(/^BUET IICT\s+(?:M\.?\s*Sc\.?|PGD)\s*(.*)$/i))) return { org: 'BUET IICT', post: (m[1].match(MONTHS)?.[1] ?? '') || null };
  if ((m = s.match(/^PSC Lecturer$/i))) return { org: 'BPSC', post: 'Lecturer' };
  const words = s.split(' ');
  let i = words.findIndex((w, k) => k > 0 && POST_RE.test(w));
  if (i === -1) return { org: s, post: null };
  return { org: words.slice(0, i).join(' '), post: normPost(words.slice(i).join(' ')) };
}
const canonOrg = (o) => {
  const x = norm(o).replace(/,$/, '');
  for (const [re, c] of ORG) if (re.test(x)) return c;
  return x;
};

export function parseTag(raw) {
  // "45th BCS CSE (2024)" (sidecar style) -> "45th BCS CSE 2024", so the year is read as a year, not a post
  const fixed = (TAG_FIX[raw] ?? raw).replace(/\s*\(((?:19|20)\d\d)\)/g, ' $1').replace(/\)((?:19|20)\d\d)/g, ') $1');
  if (!fixed) return [];
  const out = [];
  for (const group of fixed.split(/\s*;\s*|\s+\/\s+/)) {
    const items = group.split(/\s*,\s*/).filter(Boolean);
    // years propagate leftwards: "BPSC AP, 17th NTRCA(ICT) 2023" -> both 2023
    let year = null;
    const withYear = items.reverse().map((it) => {
      const y = it.match(/(?:^|\s|-)((?:19|20)\d\d)\)?$/);
      if (y) { year = +y[1]; it = it.replace(/[\s-]*(19|20)\d\d\)?$/, (mm) => (mm.endsWith(')') ? ')' : '')).trim(); }
      return { it, year, month: it.match(MONTHS)?.[1] ?? null };
    }).reverse();
    let prev = null;
    for (const { it, year: y, month } of withYear) {
      if (!it) continue;
      if (POST_RE.test(it) && !/^\d/.test(it) && prev) {
        if (!prev.post) { prev.post = normPost(it); continue; } // "BCIC, AP" -> BCIC AP
        if (prev.post === 'General (Sci & Tech)') continue; // "45th BCS (General), ICT"
        const e = { org: prev.org, post: normPost(it), year: y, month: null }; // "BPSC ADA, AP" -> BPSC AP
        out.push(e); prev = e; continue;
      }
      // "BAERA Engineer(CSE) January 2021": the month is kept as the month, not repeated in the org/post
      const { org, post } = splitOrgPost(month && !/^BUET/i.test(it) ? it.replace(MONTHS, '').trim() : it);
      const e = { org: canonOrg(org), post, year: y, month: /^BUET (M.Sc.|IICT)$/.test(org) ? post : month };
      if (/^BUET (M.Sc.|IICT)$/.test(e.org)) e.post = null;
      out.push(e); prev = e;
    }
  }
  return out;
}

// BCS / NTRCA rounds are identified by their number; other exams by organisation + post + year (+ month for BUET MSc).
export function examKey(e) {
  if (/BCS$|NTRCA$/.test(e.org)) return `${e.org}|${e.post ?? ''}`;
  return `${e.org}|${e.post ?? ''}|${e.year ?? ''}|${e.month ?? ''}`;
}
export function examName(e) {
  const post = e.post ? ` ${e.post}` : '';
  if (/BCS$|NTRCA$/.test(e.org)) return `${e.org}${post}${e.year ? ` (${e.year})` : ''}`;
  return `${e.org}${post}${e.month ? ` ${e.month}` : ''}${e.year ? ` ${e.year}` : ''}`;
}
export { ORG_FULL };

// Exam families. Every type in COUNTED counts towards "asked in N exams". BUET M.Sc. admission tests count
// as job exams (BUET sets most of the corporation papers in the same style); only private-bank exams are counted apart.
export const COUNTED = new Set(['bcs', 'ntrca', 'bpsc', 'bank', 'public-body', 'admission']);
const PRIVATE_BANK = /^(DBBL|IBBL|PBL|IFIC|City Bank|BRAC Bank|EBL|Prime Bank|MTB|Dhaka Bank|Uttara Bank)\b/; // Dutch-Bangla, Islami, Pubali, IFIC and other private banks; ABL = Agrani and SB PLC = Sonali are state-owned
export function examType(e) {
  if (/BCS$/.test(e.org)) return 'bcs';
  if (/NTRCA$/.test(e.org)) return 'ntrca';
  if (/^BUET (M.Sc.|IICT)$/.test(e.org)) return 'admission';
  if (e.org === 'BPSC') return 'bpsc';
  if (PRIVATE_BANK.test(e.org)) return 'private';
  if (/Bank|^BB$|^JBL|^ABL|^RAKUB|^BKKB|^BDB|^PSB|^PKB|^CB$|^BBL/.test(e.org)) return 'bank';
  return 'public-body';
}

// Old records: exam (free text) -> exams, or a non-exam marker.
// viva: compiled viva experiences (counted apart from written exams); null: paper not shown.
export const OLD_EXAMS = {
  '38th BCS Written': [{ org: '38th BCS', post: null, year: 2018 }],
  '45th BCS Written (CSE-971)': [{ org: '45th BCS', post: 'CSE', year: 2024 }],
  '45th BCS Written Technical Cadre (ICT-281)': [{ org: '45th BCS', post: 'ICT', year: 2024 }],
  '46th BCS CSE': [{ org: '46th BCS', post: 'CSE', year: null }],
  '46th BCS ICT': [{ org: '46th BCS', post: 'ICT', year: null }],
  '47th BCS ICT': [{ org: '47th BCS', post: 'ICT', year: null }],
  '49th BCS written exam 2025 — ICT (281), question paper 2 (100 MCQ)': [{ org: '49th BCS', post: 'ICT', year: 2025 }],
  '46th BCS Written Technical (Computer Science/ICT) course outline (coaching batch)': 'outline',
  'BAPEX Assistant General Manager (ICT) (BUET)': [{ org: 'BAPEX', post: 'AGM(ICT)', year: 2023 }],
  'BB AD(ICT) (DU)': [{ org: 'BB', post: 'AD(ICT)', year: 2025 }],
  'BBA Assistant Maintenance Engineer': [{ org: 'BBA', post: 'AME', year: 2025 }],
  'BCC Assistant Programmer (BUET)': [{ org: 'BCC', post: 'AP', year: 2021 }],
  'BCC Assistant Programmer Written Test': [{ org: 'BCC', post: 'AP', year: 2017 }],
  'BDCCL Assistant Manager (Cloud)': [{ org: 'BDCCL', post: 'AM(Cloud)', year: 2022 }],
  'BIWTA Assistant Engineer (CSE) (BUET)': [{ org: 'BIWTA', post: 'AE(CSE)', year: 2023 }],
  // BOGMC is Petrobangla itself; the HUO solution PDF has the same questions, in the same order, as the 31 May 2024 AM(CSE) paper.
  'BOGMC (Petrobangla) Assistant Manager': [{ org: 'Petrobangla', post: 'AM(CSE)', year: 2024 }],
  'BPDB Assistant Engineer (CSE) (BUET)': [{ org: 'BPDB', post: 'AE(CSE)', year: 2023 }],
  'BPDB Assistant Engineer (CSE)': [{ org: 'BPDB', post: 'AE(CSE)', year: 2021 }],
  'BPDM AE(CSE) 10.05.2024; Teletalk AM(IT) 2023': [{ org: 'BPDB', post: 'AE(CSE)', year: 2024 }, { org: 'Teletalk', post: 'AM(IT)', year: 2023 }],
  'BPSC (Ministry of Home Affairs) Senior Computer Operator': [{ org: 'BPSC', post: 'SCO', year: 2022 }],
  'BPSC AP': 'by-date', // two records, 2023 and 2026
  'BPSC SAE': [{ org: 'BPSC', post: 'SAE', year: 2021 }],
  'BPSC viva 2023': 'viva', 'BPSC viva': 'viva', 'NTRCA 15th registration viva (2019)': 'viva',
  'NTRCA 17th registration viva 2023': 'viva', "Bank IT viva (compiled from candidates' viva experiences)": 'viva',
  'BUET MSc in CSE': [{ org: 'BUET M.Sc.', post: null, year: null, month: null }], // sheet shows no date (the stored 2026-10-03 was the upload date)
  'Bangladesh Bank Assistant Maintenance Engineer (BIBM)': [{ org: 'BB', post: 'AME', year: 2023 }],
  'Bangladesh Ordnance Factory AP 2022 (MIST)': [{ org: 'BOF', post: 'AP', year: 2022 }],
  'Bangladesh Satellite Company PLC Assistant Engineer (CSE)': 'by-date',
  'Bangladesh Water Development Board Assistant Programmer Written': [{ org: 'BWDB', post: 'AP', year: 2018 }],
  "Bank (name cut off, 'B... Ltd') Assistant Programmer Written": [{ org: 'Bank (name cut off)', post: 'AP', year: null }],
  'Bank AME 08.05.2026; Bank SO IT 25.07.2026; 46th BCS ICT': [{ org: 'Combined Bank', post: 'AME', year: 2026 }, { org: 'Combined Bank', post: 'SO(IT)', year: 2026 }, { org: '46th BCS', post: 'ICT', year: null }],
  'Combined Bank SO(IT) (E-zone)': [{ org: 'Combined Bank', post: 'SO(IT)', year: 2026 }],
  'DPDC Assistant Manager (ICT)': [{ org: 'DPDC', post: 'AM(ICT)', year: 2025 }],
  'GTCL Assistant Engineer (CSE) (BUET)': [{ org: 'GTCL', post: 'AE(CSE)', year: 2022 }],
  'ICB Securities Trading Company Limited Assistant Programmer': [{ org: 'ICB Securities', post: 'AP', year: 2026 }],
  'Islamic Bank PLC SQA, Senior Officer (Network)': [{ org: 'IBBL', post: 'SO(Network)', year: 2025 }],
  'Janata Bank ANE 2020; BPSC Network Engineer 21.05.2025': [{ org: 'JBL', post: 'SO(ANE)', year: 2020 }, { org: 'BPSC', post: 'NE', year: 2025 }], // = book's "JBL SO(ANE) 2020"
  'MGMCL AM(ICT) 2022 (BUET) (reference partly cut off)': [{ org: 'MGMCL', post: 'AM(ICT)', year: 2022 }],
  'MRA AME 2022': [{ org: 'MRA', post: 'AME', year: 2022 }],
  'MRA SCO': [{ org: 'MRA', post: 'SCO', year: 2023 }],
  'NSDA Assistant Programmer': [{ org: 'NSDA', post: 'AP', year: 2022 }],
  'PGCB Assistant Engineer (CSE) (BUET)': [{ org: 'PGCB', post: 'AE(CSE)', year: 2021 }],
  'PGCB Sub-Assistant Engineer (CSE) (BUET)': [{ org: 'PGCB', post: 'SAE', year: 2021 }],
  'Petrobangla Assistant Engineer': [{ org: 'Petrobangla', post: 'AE', year: 2022 }],
  'Petrobangla Assistant Manager (CSE) (BUET)': [{ org: 'Petrobangla', post: 'AM(CSE)', year: 2024 }],
  'Petrobangla Assistant Manager (CSE)': [{ org: 'Petrobangla', post: 'AM(CSE)', year: 2024 }],
  'Petrobangla Assistant Manager (IT) (BUET)': [{ org: 'Petrobangla', post: 'AM(IT)', year: 2022 }],
  'RPGCL AM(ICT) 2022 (BUET)': [{ org: 'RPGCL', post: 'AM(ICT)', year: 2022 }],
  'RPGCL Assistant Manager (ICT) (BUET)': [{ org: 'RPGCL', post: 'AM(ICT)', year: 2022 }],
  'Teletalk Assistant Manager (IT)': [{ org: 'Teletalk', post: 'AM(IT)', year: 2023 }],
};
