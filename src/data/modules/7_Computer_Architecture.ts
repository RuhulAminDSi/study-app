import type { Module } from '../../types'

const m7: Module = {
  title: "7. Computer Architecture",
  titleBn: "৭. কম্পিউটার আর্কিটেকচার",
  level: "Intermediate",
  lessons: [
    {
      id: "ca1",
      title: "CPU Organization",
      titleBn: "CPU সংগঠন",
      content: "CPU (Central Processing Unit): Brain of computer.\n\nComponents:\n• ALU: Performs arithmetic/logic operations\n• Registers: Fast internal storage\n• Control Unit: Decodes and executes instructions\n• Cache: Fast memory between CPU and RAM\n\nInstruction Format:\n• Opcode: Operation to perform\n• Operands: Data addresses\n• Mode: Addressing method\n\nInstruction Types:\n• Data Transfer: MOV, LOAD, STORE\n• Data Processing: ADD, SUB, AND, OR\n• Control Flow: JMP, CALL, RET\n• I/O: IN, OUT\n\nPipelining: Overlap instruction execution stages.\n• Stages: Fetch, Decode, Execute, Memory, Writeback\n• Pipeline hazard: Structural, Data, Control\n\nRISC vs CISC:\n• RISC: Simple instructions, pipelining\n• CISC: Complex instructions, variable length",
      contentBn: "CPU (সেন্ট্রাল প্রসেসিং ইউনিট): কম্পিউটারের মস্তিষ্ক।\n\nউপাদান:\n• ALU: পাটিগণিত/লজিক অপারেশন করে\n• রেজ���স্টার: দ্রুত অভ্যন্তরীণ সংরক্ষণ\n• কন্ট্রোল ইউনিট: নির্দেশনা ডিকোড ও বাস্তবায়ন করে\n• ক্যাশে: CPU ও RAM এর মধ্যে দ্রুত মেমোরি\n\nনির্দেশনা ফরম্যাট:\n• অপকোড: করণীয় অপারেশন\n• অপারেন্ড: ডেটা অ্যাড্রেস\n• মোড: অ্যাড্রেসিং পদ্ধতি\n\nনির্দেশনার প্রকার:\n• ডেটা ট্রান্সফার: MOV, LOAD, STORE\n• ডেটা প্রসেসিং: ADD, SUB, AND, OR\n• কন্ট্রোল ফ্লো: JMP, CALL, RET\n• I/O: IN, OUT\n\nপাইপলাইনিং: নির্দেশনা বাস্তবায়ন পর্যায়গুলো ওভারল্যাপ করা।\n• পর্যায়: Fetch, Decode, Execute, Memory, Writeback\n• পাইপলাইন হ্যাজার্ড: স্ট্রাকচারাল, ডেটা, কন্ট্রোল\n\nRISC বনাম CISC:\n• RISC: সহজ নির্দেশনা, পাইপলাইনিং\n• CISC: জটিল নির্দেশনা, পরিবর্তনশীল দৈর্ঘ্য",
      takeaways: [
        "CPU has ALU, control unit, registers, cache",
        "Instruction format: opcode + operands + addressing",
        "Pipelining improves performance by overlapping stages",
        "RISC = simple fast, CISC = complex capable"
      ],
      takeawaysBn: [
        "CPU তে ALU, কন্ট্রোল ইউনিট, রেজিস্টার, ক্যাশে আছে",
        "নির্দেশনা ফরম্যাট: opcode + operands + addressing",
        "পাইপলাইনিং পর্যায় ওভারল্যাপ করে পারফরম্যান্স উন্নতি করে",
        "RISC = সহজ দ্রুত, CISC = জটিল সক্ষম"
      ],
      level: "Intermediate"
    },
    {
      id: "ca2",
      title: "Memory Hierarchy",
      titleBn: "মেমোরি হায়ারার্কি",
      content: "Memory Hierarchy: Organized levels for speed vs cost tradeoff.\n\nLevels (fastest to slowest):\n• Registers: Few bytes, 1 cycle\n• Cache: KB-MB, 1-10 cycles\n• Main Memory (RAM): GB, 50-100 cycles\n• Secondary Storage: TB, millions of cycles\n\nCache:\n• L1: On-chip, fastest\n• L2: On or near chip\n• L3: Shared, larger\n\nMapping:\n• Direct: Each block to one line\n• Associative: Any location\n• Set-Associative: Hybrid\n\nCache Operations:\n• Hit: Data in cache\n• Miss: Data not in cache\n• Write Policy: Write-through, Write-back\n\nVirtual Memory:\n• Pages: Fixed-size blocks\n• Page Table: Maps virtual to physical\n• TLB: Translation lookaside buffer",
      contentBn: "মেমোরি হায়ারার্কি: গতি বনাম খরচ ট্রেডঅফের জন্য সংগঠিত স্তর।\n\nস্তর (দ্রুততম থেকে ধীরতম):\n• রেজিস্টার: কয়েক বাইট, ১ চক্র\n• ক্যাশে: KB-MB, ১-১০ চক্র\n• প্রধান মেমোরি (RAM): GB, ৫০-১০০ চক্র\n• গৌণ সংরক্ষণ: TB, লক্ষ চক্র\n\nক্যাশে:\n• L1: চিপে, দ্রুততম\n• L2: চিপে বা চিপের কাছে\n• L3: শেয়ার্ড, বড়\n\nম্���া��িং:\n• ডাইরেক্ট: প্রতিটি ব্লক একটি লাইনে\n• অ্যাসোসিয়েটিভ: যেকোনো অবস্থান\n• সেট-অ্যাসোসিয়েটিভ: হাইব্রিড\n\nক্যাশে অপারেশন:\n• হিট: ক্যাশেতে ডেটা\n• মিস: ক্যাশেতে ডেটা নেই\n• রাইট পলিসি: রাইট-থ্রু, রাইট-ব্যাক\n\nভার্চুয়াল মেমোরি:\n• পেজ: স্থির-আকারের ব্লক\n• পেজ টেবিল: ভার্চুয়াল থেকে ফিজিক্যাল ম্যাপ করে\n• TLB: ট্রান্সলেশন লুকঅ্যাসাইড বাফার",
      takeaways: [
        "Memory hierarchy balances speed and cost",
        "Cache uses spatial and temporal locality",
        "Virtual memory extends addressable space",
        "Page tables map virtual to physical addresses"
      ],
      takeawaysBn: [
        "মেমোরি হায়ারার্কি গতি ও খরচ ভারসাম্য রাখে",
        "ক্যাশে স্পেশিয়াল ও টেম্পোরাল লোকালিটি ব্যবহার করে",
        "ভার্চুয়াল মেমোরি অ্যাড্রেসযোগ্য স্থান প্রসারিত করে",
        "পেজ টেবিল ভার্চুয়াল থেকে ফিজিক্যাল অ্যাড্রেস ম্যাপ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module7 = m7