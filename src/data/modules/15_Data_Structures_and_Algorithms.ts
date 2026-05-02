import type { Module } from '../../types'

const m15: Module = {
  title: "15. Data Structures and Algorithms",
  titleBn: "১৫. ডেটা স্ট্রাকচার ও অ্যালগরিদম",
  level: "Advanced",
  lessons: [
    {
      id: "dsa1",
      title: "Internal Data Representation & Abstract Data Types",
      titleBn: "অভ্যন্তরীণ ডেটা উপস্থাপন ও অ্যাবস্ট্রাক্ট ডেটা টাইপ",
      content: `📌 INTERNAL DATA REPRESENTATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 What is Internal Data Representation?
Internal data representation refers to how computers store and manipulate data internally. All data (numbers, characters, instructions) must be represented in binary for the digital system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Number Representation

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Binary System       │ Base-2: digits 0 or 1                       │
│                     │ 1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Sign-Magnitude      │ First bit = sign (0=+, 1=-)                 │
│                     │ +5 → 0101, -5 → 1101                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ One's Complement    │ Negative = invert all bits                  │
│                     │ +5 → 0101, -5 → 1010                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Two's Complement    │ Invert bits + 1 (most common)               │
│                     │ +5 → 0101, -5 → 1011                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Floating Point      │ IEEE 754: mantissa + exponent               │
│                     │ Single: 32 bits, Double: 64 bits            │
├─────────────────────┼─────────────────────────────────────────────┤
│ BCD (Binary-Coded   │ Each decimal digit → 4 bits                 │
│ Decimal)            │ 59 → 0101 1001                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ASCII / Unicode     │ Characters encoded in binary                │
│                     │ ASCII: 7/8 bits, Unicode: 16/32 bits        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ABSTRACT DATA TYPES (ADT)

Definition: A mathematical model for data types where the type is defined by its behavior (operations) rather than implementation.

Key ADTs:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ADT                 │ Operations                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ List                │ insert(), delete(), search(), traverse()    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Stack               │ push(), pop(), peek(), isEmpty()            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Queue               │ enqueue(), dequeue(), front(), rear()       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tree                │ insert(), delete(), search(), traverse()    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Graph               │ addEdge(), removeEdge(), BFS(), DFS()       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Map / Dictionary    │ put(), get(), remove(), containsKey()       │
└─────────────────────┴─────────────────────────────────────────────┘

Benefits of ADT:
• Encapsulation: Implementation hidden from user
• Reusability: Same ADT can be implemented multiple ways
• Modularity: Easier to maintain and debug

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ELEMENTARY DATA STRUCTURES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Structure           │ Organization & Operations                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Array               │ Contiguous memory, index-based access       │
│                     │ Access: O(1), Insert/Delete: O(n)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Singly Linked List  │ Nodes with next pointer                     │
│                     │ Insert/Delete: O(1) at head                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Doubly Linked List  │ Nodes with prev + next pointers             │
│                     │ Can traverse both directions                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Circular Linked List│ Last node points to head                    │
│                     │ Useful for round-robin scheduling           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Stack (LIFO)        │ Push, Pop, Peek                             │
│                     │ Expression evaluation, undo/redo            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Queue (FIFO)        │ Enqueue, Dequeue, Front, Rear               │
│                     │ Scheduling, buffering                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tree                │ Hierarchical structure, root, children      │
│                     │ Binary Tree, BST, AVL                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Graph               │ Vertices + edges, directed/undirected       │
│                     │ Adjacency matrix / list representation      │
└─────────────────────┴─────────────────────────────────────────────┘

Tree Visualization:
        ┌─────┐
        │Root │
        └──┬──┘
       ┌───┴───┐
       ▼       ▼
    ┌───┐   ┌───┐
    │ L │   │ R │
    └───┘   └───┘
   ┌─┴─┐   ┌─┴─┐
   ▼   ▼   ▼   ▼
  ┌─┐ ┌─┐ ┌─┐ ┌─┐
  │ │ │ │ │ │ │ │
  └─┘ └─┘ └─┘ └─┘

✅ SUMMARY
• Internal representation: Binary, Two's complement, IEEE 754, ASCII
• ADT: Defines behavior, not implementation
• Elementary structures: Arrays, Lists, Stacks, Queues, Trees, Graphs`,
      contentBn: `📌 অভ্যন্তরীণ ডেটা উপস্থাপন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 অভ্যন্তরীণ ডেটা উপস্থাপন কী?
অভ্যন্তরীণ ডেটা উপস্থাপন বলতে বোঝায় কিভাবে কম্পিউটার অভ্যন্তরীণভাবে ডেটা সংরক্ষণ ও ম্যানিপুলেট করে। সমস্ত ডেটা (সংখ্যা, অক্ষর, নির্দেশনা) ডিজিটাল সিস্টেমের জন্য বাইনারি আকারে উপস্থাপন করতে হয়।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সংখ্যা উপস্থাপন

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ বাইনারি পদ্ধতি     │ ভিত্তি-২: অঙ্ক ০ বা ১                        │
│                     │ 1011₂ = ১×৮ + ০×৪ + ১×২ + ১×১ = ১১₁₀        │
├─────────────────────┼─────────────────────────────────────────────┤
│ সাইন-ম্যাগনিচুড    │ প্রথম বিট = চিহ্ন (০=+, ১=-)                 │
│                     │ +৫ → ০১০১, -৫ → ১১০১                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়ানস কমপ্লিমেন্ট │ ঋণাত্মক = সব বিট ইনভার্ট                      │
│                     │ +৫ → ০১০১, -৫ → ১০১০                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ টুয়াস কমপ্লিমেন্ট │ বিট ইনভার্ট + ১ (সবচেয়ে সাধারণ)             │
│                     │ +৫ → ০১০১, -৫ → ১০১১                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফ্লোটিং পয়েন্ট    │ IEEE 754: ম্যান্টিসা + এক্সপোনেন্ট           │
│                     │ সিঙ্গেল: ৩২ বিট, ডাবল: ৬৪ বিট               │
├─────────────────────┼─────────────────────────────────────────────┤
│ বিসিডি (বাইনারি-    │ প্রতিটি দশমিক অঙ্ক → ৪ বিট                   │
│ কোডেড দশমিক)       │ ৫৯ → ০১০১ ১০০১                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ ASCII / ইউনিকোড    │ অক্ষর বাইনারিতে এনকোড করা                    │
│                     │ ASCII: ৭/৮ বিট, ইউনিকোড: ১৬/৩২ বিট          │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• অভ্যন্তরীণ উপস্থাপন: বাইনারি, টুয়াস কমপ্লিমেন্ট, IEEE 754, ASCII
• ADT: আচরণ সংজ্ঞায়িত করে, বাস্তবায়ন নয়
• প্রাথমিক স্ট্রাকচার: অ্যারে, লিস্ট, স্ট্যাক, কিউ, ট্রি, গ্রাফ`,
      takeaways: [
        "Internal representation uses binary, two's complement, IEEE 754",
        "ADT defines behavior, hides implementation",
        "Elementary structures: Arrays, Lists, Stacks, Queues, Trees, Graphs",
        "Each structure has different time/space trade-offs"
      ],
      takeawaysBn: [
        "অভ্যন্তরীণ উপস্থাপন বাইনারি, টুয়াস কমপ্লিমেন্ট, IEEE 754 ব্যবহার করে",
        "ADT আচরণ সংজ্ঞায়িত করে, বাস্তবায়ন লুকায়",
        "প্রাথমিক স্ট্রাকচার: অ্যারে, লিস্ট, স্ট্যাক, কিউ, ট্রি, গ্রাফ",
        "প্রতিটি স্ট্রাকচারের ভিন্ন সময়/স্থান ট্রেড-অফ আছে"
      ],
      level: "Advanced"
    },
    {
      id: "dsa2",
      title: "Advanced Data Structures: Heaps, Fibonacci Heaps, B-Trees",
      titleBn: "উন্নত ডেটা স্ট্রাকচার: হিপ, ফিবোনাচ্চি হিপ, বি-ট্রি",
      content: `📌 ADVANCED DATA STRUCTURES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. HEAPS

Definition: A complete binary tree that satisfies the heap property.

Heap Property:
• Max-Heap: Parent ≥ Children
• Min-Heap: Parent ≤ Children

Heap Structure:
             50 (Max-Heap)
           /    \\
          30     40
         /  \\   /
        10  20 35

Operations:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Operation           │ Time Complexity                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Insert              │ O(log n)                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Extract Min/Max     │ O(log n)                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Peek (Get Root)     │ O(1)                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Heapify             │ O(n)                                        │
└─────────────────────┴─────────────────────────────────────────────┘

Applications:
• Priority Queues
• Heap Sort
• Scheduling Algorithms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. FIBONACCI HEAPS

Definition: A heap-based data structure optimized for decrease-key and merge operations.

Structure: Collection of heap-ordered trees with lazy consolidation.

Operations (Amortized):
┌─────────────────────┬─────────────────────────────────────────────┐
│ Operation           │ Amortized Time Complexity                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Insert              │ O(1)                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Find Minimum        │ O(1)                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Extract Minimum     │ O(log n)                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Decrease Key        │ O(1)                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Merge / Union       │ O(1)                                        │
└─────────────────────┴─────────────────────────────────────────────┘

Applications:
• Dijkstra's Shortest Path Algorithm
• Prim's Minimum Spanning Tree
• Network Optimization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. B-TREES

Definition: A balanced search tree optimized for disk storage.

Properties:
• All leaves at the same level
• Each node can have multiple keys and children
• Maintains sorted order for fast search, insert, delete

B-Tree of Order m:
• Each node has at most m children
• Each node (except root) has at least ⌈m/2⌉ children
• Root has at least 2 children (unless leaf)

B-Tree Structure (Order 5):
                    [30, 60]
                   /    |    \\
            [10,20]  [40,50]  [70,80,90]
              ↓         ↓         ↓
            Data      Data      Data

Operations: O(log n) for Search, Insert, Delete

Applications:
• Database Indexing
• File Systems (NTFS, ext4)
• Large-scale data storage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 4. B+ TREES

Definition: Variant of B-Tree with all values stored in leaf nodes.

Features:
• Internal nodes store only keys (for navigation)
• Leaf nodes contain all values + links to next leaf
• Efficient for range queries

B+ Tree Structure:
                    [30, 60]
                   /    |    \\
            [10,20]  [40,50]  [70,80,90]
              ↓         ↓         ↓
            [10,20]→[30,40,50]→[60,70,80,90]
              ↑         ↑         ↑
            Leaf     Leaf      Leaf

Applications:
• Database Indexing (MySQL, PostgreSQL)
• File Systems (NTFS, ReiserFS)
• Range Queries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison Table

┌─────────────────────┬──────────────┬──────────────────┬──────────────────┐
│ Data Structure      │ Search Time  │ Insert Time      │ Best For         │
├─────────────────────┼──────────────┼──────────────────┼──────────────────┤
│ Heap                │ O(1) for min │ O(log n)         │ Priority Queue   │
├─────────────────────┼──────────────┼──────────────────┼──────────────────┤
│ Fibonacci Heap      │ O(1)         │ O(1) amortized   │ Graph Algorithms │
├─────────────────────┼──────────────┼──────────────────┼──────────────────┤
│ B-Tree              │ O(log n)     │ O(log n)         │ Disk Storage     │
├─────────────────────┼──────────────┼──────────────────┼──────────────────┤
│ B+ Tree             │ O(log n)     │ O(log n)         │ Range Queries    │
└─────────────────────┴──────────────┴──────────────────┴──────────────────┘

✅ SUMMARY
• Heaps: Complete binary trees for priority queues
• Fibonacci Heaps: Efficient decrease-key for graph algorithms
• B-Trees: Balanced trees for disk-based storage
• B+ Trees: B-Tree variant with linked leaves for range queries`,
      contentBn: `📌 উন্নত ডেটা স্ট্রাকচার

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. হিপ

সংজ্ঞা: একটি সম্পূর্ণ বাইনারি ট্রি যা হিপ বৈশিষ্ট্য পূরণ করে।

হিপ বৈশিষ্ট্য:
• ম্যাক্স-হিপ: প্যারেন্ট ≥ চাইল্ড
• মিন-হিপ: প্যারেন্ট ≤ চাইল্ড

হিপ গঠন:
             50 (ম্যাক্স-হিপ)
           /    \\
          30     40
         /  \\   /
        10  20 35

অপারেশন:
• ইনসার্ট: O(log n)
• এক্সট্র্যাক্ট মিন/ম্যাক্স: O(log n)
• পিক (রুট দেখা): O(1)

অ্যাপ্লিকেশন:
• প্রায়োরিটি কিউ
• হিপ সর্ট
• শিডিউলিং অ্যালগরিদম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. ফিবোনাচ্চি হিপ

সংজ্ঞা: ডিক্রিজ-কি ও মার্জ অপারেশনের জন্য অপটিমাইজড হিপ-ভিত্তিক ডেটা স্ট্রাকচার।

অপারেশন (অ্যামোর্টাইজড):
• ইনসার্ট: O(1)
• ফাইন্ড মিনিমাম: O(1)
• এক্সট্র্যাক্ট মিনিমাম: O(log n)
• ডিক্রিজ কী: O(1)

অ্যাপ্লিকেশন:
• ডাইজস্ট্রার শর্টেস্ট পাথ অ্যালগরিদম
• প্রিমস মিনিমাম স্প্যানিং ট্রি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৩. বি-ট্রি

সংজ্ঞা: ডিস্ক স্টোরেজের জন্য অপটিমাইজড সুষম সার্চ ট্রি।

বৈশিষ্ট্য:
• সব লিভ একই স্তরে
• প্রতিটি নোডে একাধিক কী ও চাইল্ড থাকতে পারে
• দ্রুত সার্চ, ইনসার্ট, ডিলিটের জন্য সাজানো ক্রম বজায় রাখে

অপারেশন: সার্চ, ইনসার্ট, ডিলিট → O(log n)

অ্যাপ্লিকেশন:
• ডেটাবেস ইনডেক্সিং
• ফাইল সিস্টেম (NTFS, ext4)

✅ সারাংশ
• হিপ: প্রায়োরিটি কিউর জন্য সম্পূর্ণ বাইনারি ট্রি
• ফিবোনাচ্চি হিপ: গ্রাফ অ্যালগরিদমের জন্য দক্ষ ডিক্রিজ-কি
• বি-ট্রি: ডিস্ক-ভিত্তিক স্টোরেজের জন্য সুষম ট্রি
• বি+ ট্রি: রেঞ্জ কোয়েরির জন্য লিংকড লিভ সহ বি-ট্রি ভেরিয়েন্ট`,
      takeaways: [
        "Heaps: O(log n) insert/extract, used for priority queues",
        "Fibonacci Heaps: O(1) amortized decrease-key",
        "B-Trees: Balanced trees for disk storage",
        "B+ Trees: Linked leaves enable efficient range queries"
      ],
      takeawaysBn: [
        "হিপ: O(log n) ইনসার্ট/এক্সট্র্যাক্ট, প্রায়োরিটি কিউর জন্য ব্যবহৃত",
        "ফিবোনাচ্চি হিপ: O(1) অ্যামোর্টাইজড ডিক্রিজ-কি",
        "বি-ট্রি: ডিস্ক স্টোরেজের জন্য সুষম ট্রি",
        "বি+ ট্রি: লিংকড লিভ দক্ষ রেঞ্জ কোয়েরি সক্ষম করে"
      ],
      level: "Advanced"
    },
    {
      id: "dsa3",
      title: "Recursion, Sorting, Searching, Hashing & Algorithm Analysis",
      titleBn: "রিকার্শন, সর্টিং, সার্চিং, হ্যাশিং ও অ্যালগরিদম বিশ্লেষণ",
      content: `📌 RECURSION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A function that calls itself to solve a problem.

Components:
1. Base Case: Stops recursion
2. Recursive Case: Breaks problem into smaller subproblems

Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ Recursive Formula                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Factorial           │ n! = n × (n-1)!, base: 0! = 1              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fibonacci           │ F(n) = F(n-1) + F(n-2), base: F(0)=0, F(1)=1│
├─────────────────────┼─────────────────────────────────────────────┤
│ Tower of Hanoi      │ T(n) = 2T(n-1) + 1                          │
└─────────────────────┴─────────────────────────────────────────────┘

Advantages: Simplifies code, elegant solutions
Disadvantages: Memory overhead, risk of stack overflow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SORTING ALGORITHMS

┌─────────────────────┬──────────────┬──────────────┬─────────────────┐
│ Algorithm           │ Best Case    │ Worst Case   │ Space           │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Bubble Sort         │ O(n)         │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Selection Sort      │ O(n²)        │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Insertion Sort      │ O(n)         │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Merge Sort          │ O(n log n)   │ O(n log n)   │ O(n)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Quick Sort          │ O(n log n)   │ O(n²)        │ O(log n)        │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Heap Sort           │ O(n log n)   │ O(n log n)   │ O(1)            │
└─────────────────────┴──────────────┴──────────────┴─────────────────┘

Merge Sort Visualization:
        [38,27,43,3,9,82,10]
              /         \\
    [38,27,43,3]    [9,82,10]
       /    \\         /    \\
   [38,27]  [43,3]  [9,82] [10]
    /  \\     /  \\    /  \\   |
 [38][27] [43][3] [9][82] [10]
    \\  /     \\  /    \\  /   |
   [27,38]  [3,43]  [9,82] [10]
       \\    /         \\    /
    [3,27,38,43]    [9,10,82]
            \\         /
        [3,9,10,27,38,43,82]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 SEARCHING ALGORITHMS

┌─────────────────────┬──────────────┬─────────────────────────────────┐
│ Algorithm           │ Complexity   │ Requirement                     │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ Linear Search       │ O(n)         │ None (works on unsorted)        │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ Binary Search       │ O(log n)     │ Sorted array                    │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ Ternary Search      │ O(log n)     │ Unimodal function               │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ Jump Search         │ O(√n)        │ Sorted array                    │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ Exponential Search  │ O(log n)     │ Sorted array, unbounded         │
└─────────────────────┴──────────────┴─────────────────────────────────┘

Binary Search Algorithm:
function binarySearch(arr, target):
    left = 0, right = n-1
    while left <= right:
        mid = (left + right) / 2
        if arr[mid] == target: return mid
        else if arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 HASHING

Definition: Technique to map keys to memory locations using a hash function.

Hash Function: h(key) = key mod table_size

Collision Handling:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Technique           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Chaining            │ Each bucket has linked list of collisions   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Linear Probing      │ Find next available slot                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Quadratic Probing   │ Probe at i² offset                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Double Hashing      │ Use second hash function for step           │
└─────────────────────┴─────────────────────────────────────────────┘

Hash Table Visualization:
Index:   0    1    2    3    4    5    6
        ┌────┬────┬────┬────┬────┬────┬────┐
        │ 50 │    │ 22 │    │ 34 │    │    │
        └────┴────┴────┴────┴────┴────┴────┘
         │         │
         ↓         ↓
      [50]→[60]  [22]→[32]→[42]

Applications:
• Symbol Tables
• Database Indexing
• Caching (Memcached, Redis)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 TECHNIQUES FOR ANALYSIS OF ALGORITHMS

Asymptotic Notations:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Notation            │ Meaning                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ O(f(n))             │ Upper bound (worst case)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Ω(f(n))             │ Lower bound (best case)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Θ(f(n))             │ Tight bound (average case)                  │
└─────────────────────┴─────────────────────────────────────────────┘

Common Complexities:
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)

Analysis Techniques:
1. Recurrence Relations: T(n) = aT(n/b) + f(n)
2. Master Theorem: T(n) = aT(n/b) + O(n^d)
3. Amortized Analysis: Average time per operation
4. Space Complexity: Memory usage analysis

Master Theorem Cases:
Case 1: If log_b(a) > d → T(n) = Θ(n^log_b(a))
Case 2: If log_b(a) = d → T(n) = Θ(n^d log n)
Case 3: If log_b(a) < d → T(n) = Θ(n^d)

Example (Merge Sort): T(n) = 2T(n/2) + O(n)
Here a=2, b=2, d=1 → log_b(a) = 1 = d → Case 2
∴ T(n) = Θ(n log n)

✅ SUMMARY
• Recursion: Function calling itself with base case
• Sorting: Merge O(n log n), Quick O(n log n) avg
• Searching: Binary O(log n) for sorted arrays
• Hashing: O(1) average with good hash function
• Analysis: Big-O, Ω, Θ notations and Master Theorem`,
      contentBn: `📌 রিকার্শন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি ফাংশন যা সমস্যা সমাধানের জন্য নিজেকে কল করে।

উপাদান:
১. বেস কেস: রিকার্শন বন্ধ করে
২. রিকার্সিভ কেস: সমস্যা ছোট উপসমস্যায় ভাঙে

উদাহরণ:
• ফ্যাক্টরিয়াল: n! = n × (n-1)!, বেস: 0! = 1
• ফিবোনাচ্চি: F(n) = F(n-1) + F(n-2), বেস: F(0)=0, F(1)=1

সুবিধা: কোড সরল করে, মার্জিত সমাধান
অসুবিধা: মেমোরি ওভারহেড, স্ট্যাক ওভারফ্লোর ঝুঁকি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সর্টিং অ্যালগরিদম

┌─────────────────────┬──────────────┬──────────────┬─────────────────┐
│ অ্যালগরিদম         │ বেস্ট কেস    │ ওয়ার্স্ট কেস │ স্থান           │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ বাবল সর্ট          │ O(n)         │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ সিলেকশন সর্ট       │ O(n²)        │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ ইনসার্শন সর্ট      │ O(n)         │ O(n²)        │ O(1)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ মার্জ সর্ট          │ O(n log n)   │ O(n log n)   │ O(n)            │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ কুইক সর্ট          │ O(n log n)   │ O(n²)        │ O(log n)        │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ হিপ সর্ট           │ O(n log n)   │ O(n log n)   │ O(1)            │
└─────────────────────┴──────────────┴──────────────┴─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 সার্চিং অ্যালগরিদম

┌─────────────────────┬──────────────┬─────────────────────────────────┐
│ অ্যালগরিদম         │ জটিলতা      │ প্রয়োজনীয়তা                   │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ লিনিয়ার সার্চ      │ O(n)         │ কোনো প্রয়োজন নেই              │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ বাইনারি সার্চ       │ O(log n)     │ সাজানো অ্যারে                   │
├─────────────────────┼──────────────┼─────────────────────────────────┤
│ জাম্প সার্চ         │ O(√n)        │ সাজানো অ্যারে                   │
└─────────────────────┴──────────────┴─────────────────────────────────┘

✅ সারাংশ
• রিকার্শন: বেস কেস সহ ফাংশন নিজেকে কল করা
• সর্টিং: মার্জ O(n log n), কুইক O(n log n) গড়
• সার্চিং: সাজানো অ্যারের জন্য বাইনারি O(log n)
• হ্যাশিং: ভালো হ্যাশ ফাংশন সহ O(1) গড়
• বিশ্লেষণ: বিগ-ও, Ω, Θ নোটেশন ও মাস্টার থিওরেম`,
      takeaways: [
        "Recursion: function calls itself with base case",
        "Merge Sort and Quick Sort: O(n log n) efficient sorting",
        "Binary Search: O(log n) requires sorted array",
        "Hashing: O(1) average with good hash function",
        "Algorithm Analysis: Big-O, Ω, Θ notations"
      ],
      takeawaysBn: [
        "রিকার্শন: বেস কেস সহ ফাংশন নিজেকে কল করা",
        "মার্জ সর্ট ও কুইক সর্ট: O(n log n) দক্ষ সর্টিং",
        "বাইনারি সার্চ: O(log n) এর জন্য সাজানো অ্যারে প্রয়োজন",
        "হ্যাশিং: ভালো হ্যাশ ফাংশন সহ O(1) গড়",
        "অ্যালগরিদম বিশ্লেষণ: বিগ-ও, Ω, Θ নোটেশন"
      ],
      level: "Advanced"
    },
    {
      id: "dsa4",
      title: "Algorithm Design Methods & Graph Algorithms",
      titleBn: "অ্যালগরিদম ডিজাইন পদ্ধতি ও গ্রাফ অ্যালগরিদম",
      content: `📌 METHODS FOR EFFICIENT ALGORITHM DESIGN

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. DIVIDE AND CONQUER

Definition: Break problem into smaller subproblems, solve recursively, combine results.

Steps:
1. Divide: Split into subproblems
2. Conquer: Solve recursively
3. Combine: Merge solutions

Examples:
• Merge Sort
• Quick Sort
• Binary Search
• Strassen's Matrix Multiplication

Complexity: T(n) = aT(n/b) + f(n)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. GREEDY METHOD

Definition: Build solution step by step, choosing best option at current step (local optimum).

Characteristics:
• Works when local optimum = global optimum
• Simple and fast
• Not guaranteed for all problems

Examples:
• Prim's MST
• Kruskal's MST
• Dijkstra's Shortest Path
• Fractional Knapsack
• Huffman Coding

Greedy vs DP:
• Greedy: One choice, no reconsideration
• DP: Considers all choices, optimal substructure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 3. DYNAMIC PROGRAMMING (DP)

Definition: Solve problems by breaking into overlapping subproblems and storing results.

Steps:
1. Identify subproblems
2. Solve each subproblem once
3. Store results (memoization/tabulation)
4. Use stored results for larger problem

Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ DP Approach                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Fibonacci           │ DP[i] = DP[i-1] + DP[i-2]                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Longest Common      │ LCS(i,j) = LCS(i-1,j-1)+1 if match         │
│ Subsequence (LCS)   │ else max(LCS(i-1,j), LCS(i,j-1))           │
├─────────────────────┼─────────────────────────────────────────────┤
│ 0/1 Knapsack        │ DP[w] = max(val[i] + DP[w-wt[i]], DP[w])   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Matrix Chain        │ MCM(i,j) = min(MCM(i,k)+MCM(k+1,j)+cost)   │
│ Multiplication      │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

DP Table Example (Fibonacci):
Index: 0   1   2   3   4   5   6
Value: 0   1   1   2   3   5   8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 4. BACKTRACKING

Definition: Explore all possible solutions recursively, prune infeasible paths.

Characteristics:
• Systematic search
• Prune branches that cannot lead to solution
• Often used for constraint satisfaction

Examples:
• N-Queens Problem
• Sudoku Solver
• Hamiltonian Path
• Graph Coloring
• Subset Sum

N-Queens Backtracking:
Place queen → check conflicts → if safe → next row
If no safe position → backtrack to previous row

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 5. BRANCH AND BOUND

Definition: Systematically explore solution space using state-space tree, prune using bounds.

Characteristics:
• Uses upper and lower bounds
• Prunes unpromising branches
• Often for optimization problems

Examples:
• Traveling Salesman Problem (TSP)
• 0/1 Knapsack (optimization)
• Job Scheduling

Bound Calculation:
• Lower Bound: Minimum possible cost from current state
• Upper Bound: Best solution found so far
• Prune if LB > UB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 COMPARISON TABLE

┌─────────────────────┬──────────────┬──────────────┬─────────────────┐
│ Method              │ Approach     │ Best For     │ Examples        │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Divide & Conquer    │ Split & merge│ Recursive    │ Merge Sort      │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Greedy              │ Local optimum│ Optimization │ Prim's, Dijkstra│
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Dynamic Programming │ Overlap store│ Optimization │ LCS, Knapsack   │
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Backtracking        │ Explore & prune│ Constraint  │ N-Queens, Sudoku│
├─────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Branch & Bound      │ Bounds & prune│ Combinatorial│ TSP             │
└─────────────────────┴──────────────┴──────────────┴─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 BASIC SEARCH AND TRAVERSAL TECHNIQUES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Technique           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Linear Search       │ Check each element O(n)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Binary Search       │ Divide and conquer O(log n) on sorted       │
├─────────────────────┼─────────────────────────────────────────────┤
│ DFS (Depth-First)   │ Stack-based, go deep first O(V+E)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ BFS (Breadth-First) │ Queue-based, level by level O(V+E)         │
└─────────────────────┴─────────────────────────────────────────────┘

DFS vs BFS:
DFS: Preorder, Inorder, Postorder traversal
BFS: Level order traversal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 TOPOLOGICAL SORTING

Definition: Linear ordering of DAG vertices such that for every edge u→v, u comes before v.

Applications:
• Task scheduling with dependencies
• Course prerequisite ordering
• Build systems

Kahn's Algorithm (BFS-based):
1. Compute in-degree of each vertex
2. Queue vertices with in-degree 0
3. While queue not empty:
   - Remove vertex, add to order
   - Decrease in-degree of neighbors
   - If in-degree becomes 0, enqueue

Time Complexity: O(V + E)

Example (Course Prerequisites):
Math → Data Structures → Algorithms
Physics → Robotics

Valid Topological Order:
Math, Physics, Data Structures, Algorithms, Robotics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 CONNECTED COMPONENTS, SPANNING TREES, SHORTEST PATHS

Connected Components:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component Type      │ Algorithm                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Undirected Graph    │ DFS/BFS from each unvisited vertex          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Strongly Connected  │ Kosaraju's or Tarjan's Algorithm           │
│ Components (SCC)    │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

Spanning Trees:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Complexity      │ Best For                  │
├─────────────────────┼─────────────────┼───────────────────────────┤
│ Prim's Algorithm    │ O(E log V)      │ Dense graphs              │
├─────────────────────┼─────────────────┼───────────────────────────┤
│ Kruskal's Algorithm │ O(E log E)      │ Sparse graphs             │
└─────────────────────┴─────────────────┴───────────────────────────┘

Prim's Algorithm:
1. Start from arbitrary vertex
2. Add minimum weight edge connecting tree to new vertex
3. Repeat until V-1 edges

Kruskal's Algorithm:
1. Sort edges by weight
2. Add edge if it doesn't form cycle (Union-Find)
3. Repeat until V-1 edges

Shortest Path Algorithms:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Complexity      │ Handles Negative Weights  │
├─────────────────────┼─────────────────┼───────────────────────────┤
│ Dijkstra            │ O(E log V)      │ No                        │
├─────────────────────┼─────────────────┼───────────────────────────┤
│ Bellman-Ford        │ O(V × E)        │ Yes (detects cycles)      │
├─────────────────────┼─────────────────┼───────────────────────────┤
│ Floyd-Warshall      │ O(V³)           │ Yes (all pairs)           │
└─────────────────────┴─────────────────┴───────────────────────────┘

✅ SUMMARY
• Divide & Conquer: Split, solve, combine
• Greedy: Local optimum choices
• DP: Store overlapping subproblem results
• Backtracking: Explore and prune
• B&B: Use bounds to prune
• Graph: DFS, BFS, Topological Sort, MST, Shortest Path`,
      contentBn: `📌 দক্ষ অ্যালগরিদম ডিজাইনের পদ্ধতি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. ডিভাইড অ্যান্ড কনকার

সংজ্ঞা: সমস্যাকে ছোট উপসমস্যায় ভাঙা, পুনরাবৃত্তিমূলক সমাধান, ফলাফল একত্রিত করা।

ধাপ:
১. ভাগ করুন: উপসমস্যায় বিভক্ত করুন
২. কনকার: পুনরাবৃত্তিমূলক সমাধান করুন
৩. একত্রিত করুন: সমাধান মার্জ করুন

উদাহরণ: মার্জ সর্ট, কুইক সর্ট, বাইনারি সার্চ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. গ্রিডি পদ্ধতি

সংজ্ঞা: ধাপে ধাপে সমাধান তৈরি, বর্তমান ধাপে সেরা বিকল্প বেছে নেওয়া।

উদাহরণ: প্রিমস MST, ক্রুস্কালস MST, ডাইজস্ট্রার শর্টেস্ট পাথ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৩. ডায়নামিক প্রোগ্রামিং (DP)

সংজ্ঞা: ওভারল্যাপিং উপসমস্যায় ভাঙিয়ে এবং ফলাফল সংরক্ষণ করে সমস্যা সমাধান।

উদাহরণ: ফিবোনাচ্চি, LCS, ০/১ ন্যাপস্যাক

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৪. ব্যাকট্র্যাকিং

সংজ্ঞা: সব সম্ভাব্য সমাধান পুনরাবৃত্তিমূলক অন্বেষণ, অসম্ভব পথ ছাঁটাই।

উদাহরণ: N-কুইন, সুডোকু, হ্যামিলটোনিয়ান পাথ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ৫. ব্রাঞ্চ অ্যান্ড বাউন্ড

সংজ্ঞা: স্টেট-স্পেস ট্রি ব্যবহার করে পদ্ধতিগত অন্বেষণ, বাউন্ড ব্যবহার করে ছাঁটাই।

উদাহরণ: TSP, ০/১ ন্যাপস্যাক

✅ সারাংশ
• ডিভাইড অ্যান্ড কনকার: ভাগ, সমাধান, একত্রিত
• গ্রিডি: স্থানীয় অপটিমাম পছন্দ
• DP: ওভারল্যাপিং উপসমস্যার ফলাফল সংরক্ষণ
• ব্যাকট্র্যাকিং: অন্বেষণ ও ছাঁটাই
• B&B: ছাঁটাইয়ের জন্য বাউন্ড ব্যবহার
• গ্রাফ: DFS, BFS, টপোলজিক্যাল সর্ট, MST, শর্টেস্ট পাথ`,
      takeaways: [
        "Divide & Conquer: Merge Sort, Quick Sort, Binary Search",
        "Greedy: Prim's, Kruskal's, Dijkstra's algorithms",
        "Dynamic Programming: LCS, Knapsack, Matrix Chain",
        "Backtracking: N-Queens, Sudoku, Hamiltonian Path",
        "B&B: TSP, optimization problems",
        "Graph algorithms: DFS, BFS, Topological Sort, MST, Shortest Path"
      ],
      takeawaysBn: [
        "ডিভাইড অ্যান্ড কনকার: মার্জ সর্ট, কুইক সর্ট, বাইনারি সার্চ",
        "গ্রিডি: প্রিমস, ক্রুস্কালস, ডাইজস্ট্রাস অ্যালগরিদম",
        "ডায়নামিক প্রোগ্রামিং: LCS, ন্যাপস্যাক, ম্যাট্রিক্স চেইন",
        "ব্যাকট্র্যাকিং: এন-কুইন, সুডোকু, হ্যামিলটোনিয়ান পাথ",
        "B&B: টিএসপি, অপটিমাইজেশন সমস্যা",
        "গ্রাফ অ্যালগরিদম: DFS, BFS, টপোলজিক্যাল সর্ট, MST, শর্টেস্ট পাথ"
      ],
      level: "Advanced"
    },
    {
      id: "dsa5",
      title: "Flow Algorithms, Approximation & Parallel Algorithms",
      titleBn: "ফ্লো অ্যালগরিদম, অ্যাপ্রক্সিমেশন ও প্যারালাল অ্যালগরিদম",
      content: `📌 FLOW ALGORITHMS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Algorithms that deal with networks where resources flow from source to sink through edges with capacities.

Flow Network Components:
• Source (s): Where flow originates
• Sink (t): Where flow terminates
• Capacity: Maximum flow each edge can carry
• Flow: Actual amount passing through edge

Constraints:
• Capacity: 0 ≤ f(u,v) ≤ c(u,v)
• Conservation: Incoming flow = Outgoing flow (except s,t)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maximum Flow Algorithms:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Algorithm           │ Complexity                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Ford-Fulkerson      │ O(E × max_flow)                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Edmonds-Karp        │ O(V × E²)                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Push-Relabel        │ O(V² × E)                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Dinic's Algorithm   │ O(min(V^{2/3}, E^{1/2}) × E)                │
└─────────────────────┴─────────────────────────────────────────────┘

Ford-Fulkerson Algorithm:
1. Initialize flow = 0
2. While augmenting path exists from s to t in residual graph:
   - Find path with available capacity
   - Add path flow to total flow
   - Update residual capacities
3. Return total flow

Max-Flow Min-Cut Theorem:
Maximum flow = Capacity of minimum cut

Applications:
• Network routing
• Bipartite matching
• Transportation logistics
• Image segmentation

Flow Network Visualization:
        (10)      (5)
    s ──────► A ──────► B
     \        │        /
      (15)    │(10)   (15)
       \      ▼      /
        ───► C ────► t
            (10)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 APPROXIMATION ALGORITHMS

Definition: Algorithms that find near-optimal solutions for NP-hard problems in polynomial time.

Approximation Ratio (ρ):
• Minimization: ρ = Algorithm_Solution / Optimal_Solution ≥ 1
• Maximization: ρ = Optimal_Solution / Algorithm_Solution ≥ 1

Common Approximation Algorithms:

┌─────────────────────┬─────────────────────┬─────────────────────┐
│ Problem             │ Algorithm           │ Approximation Ratio │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Vertex Cover        │ Greedy (pick edge)  │ 2                   │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Metric TSP          │ MST-based (DFS)     │ 2                   │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Set Cover           │ Greedy              │ ln(n)               │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Knapsack (0/1)      │ PTAS (FPTAS)        │ (1 + ε)             │
└─────────────────────┴─────────────────────┴─────────────────────┘

PTAS (Polynomial-Time Approximation Scheme):
• Produces solution within (1 + ε) of optimal for any ε > 0
• Runtime depends on ε

FPTAS (Fully Polynomial-Time Approximation Scheme):
• Runtime polynomial in both n and 1/ε

Applications:
• Network design
• Scheduling
• Resource allocation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 PARALLEL ALGORITHMS

Definition: Algorithms designed to divide problem into subproblems solved simultaneously on multiple processors.

Key Concepts:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Speedup (S)         │ S = T_sequential / T_parallel              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Efficiency (E)      │ E = Speedup / Number of processors         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Granularity         │ Size of subproblems (fine/coarse)          │
└─────────────────────┴─────────────────────────────────────────────┘

Types of Parallelism:
1. Data Parallelism: Same operation on different data
   Example: Vector addition, matrix multiplication

2. Task Parallelism: Different tasks in parallel
   Example: Pipeline processing

Common Parallel Algorithms:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ Parallel Approach                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Sorting             │ Parallel Merge Sort, Bitonic Sort          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Matrix              │ Block-wise multiplication, Cannon's algo   │
│ Multiplication      │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Graph Algorithms    │ Parallel BFS/DFS, Parallel Dijkstra        │
└─────────────────────┴─────────────────────────────────────────────┘

Challenges:
• Synchronization
• Communication overhead
• Load balancing
• Race conditions / Deadlocks

Parallel Sorting Example (Parallel Merge Sort):
Divide array across P processors:
Processor 0: [38,27,43] → sort → [27,38,43]
Processor 1: [3,9,82,10] → sort → [3,9,10,82]
Merge results → [3,9,10,27,38,43,82]

Applications:
• Scientific simulations
• Big data processing (Hadoop, Spark)
• Graphics rendering
• Machine learning (distributed training)

Amdahl's Law (Speedup Limit):
S_max = 1 / ( (1 - P) + P/N )
where P = parallel portion, N = processors

✅ SUMMARY
• Flow Algorithms: Max flow in networks (Ford-Fulkerson, Edmonds-Karp)
• Approximation: Near-optimal for NP-hard (Vertex Cover: 2-approx)
• Parallel Algorithms: Multiple processors for speedup
• Key metrics: Speedup, Efficiency, Granularity`,
      contentBn: `📌 ফ্লো অ্যালগরিদম

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: অ্যালগরিদম যা নেটওয়ার্ক নিয়ে কাজ করে যেখানে সম্পদ ক্ষমতাসম্পন্ন প্রান্তের মাধ্যমে উৎস থেকে সিঙ্কে প্রবাহিত হয়।

ফ্লো নেটওয়ার্ক উপাদান:
• সোর্স (s): যেখান থেকে প্রবাহ originates
• সিঙ্ক (t): যেখানে প্রবাহ terminates
• ক্যাপাসিটি: প্রতিটি প্রান্ত বহন করতে পারে সর্বোচ্চ প্রবাহ

সীমাবদ্ধতা:
• ক্যাপাসিটি: 0 ≤ f(u,v) ≤ c(u,v)
• কনজারভেশন: ইনকামিং ফ্লো = আউটগোয়িং ফ্লো (s,t ছাড়া)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ম্যাক্সিমাম ফ্লো অ্যালগরিদম:

┌─────────────────────┬─────────────────────────────────────────────┐
│ অ্যালগরিদম         │ জটিলতা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফোর্ড-ফুলকারসন     │ O(E × max_flow)                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ এডমন্ডস-কার্প       │ O(V × E²)                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ পুশ-রিলেবেল        │ O(V² × E)                                   │
└─────────────────────┴─────────────────────────────────────────────┘

ম্যাক্স-ফ্লো মিন-কাট থিওরেম:
ম্যাক্সিমাম ফ্লো = মিনিমাম কাটের ক্যাপাসিটি

অ্যাপ্লিকেশন:
• নেটওয়ার্ক রাউটিং
• বাইপারটাইট ম্যাচিং
• ট্রান্সপোর্টেশন লজিস্টিকস

✅ সারাংশ
• ফ্লো অ্যালগরিদম: নেটওয়ার্কে ম্যাক্স ফ্লো (ফোর্ড-ফুলকারসন)
• অ্যাপ্রক্সিমেশন: এনপি-হার্ডের জন্য নিয়ার-অপটিমাল (ভারটেক্স কভার: ২-অ্যাপ্রক্স)
• প্যারালাল অ্যালগরিদম: স্পিডআপের জন্য একাধিক প্রসেসর
• মূল মেট্রিক: স্পিডআপ, এফিসিয়েন্সি, গ্র্যানুলারিটি`,
      takeaways: [
        "Flow Algorithms: Ford-Fulkerson for maximum flow",
        "Max-Flow Min-Cut Theorem: Flow equals cut capacity",
        "Approximation Algorithms: Near-optimal for NP-hard problems",
        "Parallel Algorithms: Multiple processors for speedup"
      ],
      takeawaysBn: [
        "ফ্লো অ্যালগরিদম: ম্যাক্সিমাম ফ্লোর জন্য ফোর্ড-ফুলকারসন",
        "ম্যাক্স-ফ্লো মিন-কাট থিওরেম: ফ্লো সমান কাট ক্যাপাসিটি",
        "অ্যাপ্রক্সিমেশন অ্যালগরিদম: এনপি-হার্ড সমস্যার জন্য নিয়ার-অপটিমাল",
        "প্যারালাল অ্যালগরিদম: স্পিডআপের জন্য একাধিক প্রসেসর"
      ],
      level: "Advanced"
    },
    {
      id: "dsa6",
      title: "Algebraic Simplification, Lower Bound & NP-Completeness",
      titleBn: "বীজগাণিতিক সরলীকরণ, লোয়ার বাউন্ড ও এনপি-সম্পূর্ণতা",
      content: `📌 ALGEBRAIC SIMPLIFICATION AND TRANSFORMATIONS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Boolean Algebra Laws:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Law                 │ Expression                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Identity            │ A + 0 = A,  A · 1 = A                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Null                │ A + 1 = 1,  A · 0 = 0                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Idempotent          │ A + A = A,  A · A = A                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complement          │ A + A' = 1,  A · A' = 0                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Commutative         │ A + B = B + A,  A · B = B · A               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Associative         │ (A+B)+C = A+(B+C), (A·B)·C = A·(B·C)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distributive        │ A·(B+C) = A·B + A·C                         │
│                     │ A + (B·C) = (A+B)·(A+C)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ De Morgan's         │ (A·B)' = A' + B',  (A+B)' = A'·B'           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Absorption          │ A + A·B = A,  A·(A+B) = A                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Consensus           │ AB + A'C + BC = AB + A'C                    │
└─────────────────────┴─────────────────────────────────────────────┘

Simplification Example:
F = A·B + A·B'
= A·(B + B')           [Distributive]
= A·1                  [Complement]
= A                    [Identity]

K-Map (Karnaugh Map) for 2-3 variables:
    AB
    00 01 11 10
C 0  0  1  1  0
  1  0  0  1  1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 LOWER BOUND THEORY

Definition: Minimum number of steps any algorithm must take to solve a problem in worst case.

Asymptotic Bounds:
• Lower Bound (Ω): Minimum operations required
• Upper Bound (O): Maximum algorithm might take
• Tight Bound (Θ): When upper = lower bound

Known Lower Bounds:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ Lower Bound                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Comparison Sorting  │ Ω(n log n)                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Searching (unsorted)│ Ω(n)                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Graph Connectivity  │ Ω(V + E)                                    │
└─────────────────────┴─────────────────────────────────────────────┘

Techniques to Find Lower Bounds:
1. Decision Tree Model
   - Each comparison is a binary decision
   - Height of tree = minimum comparisons

2. Adversary Argument
   - Adversary gives worst-case inputs
   - Forces algorithm to make many steps

3. Information-Theoretic Argument
   - Count possible outcomes
   - Minimum information needed

Decision Tree for Sorting 3 elements:
                a:b
               /   \\
            a<b     a>b
            /         \\
          b:c         a:c
         /   \\       /   \\
      b<c   b>c    a<c   a>c
       |     |      |     |
     a,b,c  a,c,b  b,a,c  b,c,a
                          /   \\
                       c<a   c>a
                        |     |
                      c,a,b  c,b,a
Height = log₂(3!) = log₂(6) ≈ 2.58 → need 3 comparisons

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 NP-COMPLETENESS

Complexity Classes:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Class               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ P                   │ Solvable in polynomial time                 │
│                     │ Examples: Sorting, Search                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ NP                  │ Verifiable in polynomial time               │
│                     │ Examples: Subset Sum, Hamiltonian Path      │
├─────────────────────┼─────────────────────────────────────────────┤
│ NP-Hard             │ At least as hard as hardest NP problems     │
│                     │ Examples: Halting Problem, TSP (optimization)│
├─────────────────────┼─────────────────────────────────────────────┤
│ NP-Complete         │ In NP and NP-Hard                           │
│                     │ Examples: 3-SAT, Vertex Cover, Clique       │
└─────────────────────┴─────────────────────────────────────────────┘

Relationship Diagram:
        ┌─────────────────────────────────────┐
        │              NP-Hard                 │
        │  ┌─────────────────────────────┐    │
        │  │        NP-Complete           │    │
        │  │  ┌─────────────────────┐    │    │
        │  │  │        NP           │    │    │
        │  │  │  ┌─────────────┐    │    │    │
        │  │  │  │     P       │    │    │    │
        │  │  │  └─────────────┘    │    │    │
        │  │  └─────────────────────┘    │    │
        │  └─────────────────────────────┘    │
        └─────────────────────────────────────┘

P vs NP Question:
• If P = NP: All NP problems solvable in polynomial time
• If P ≠ NP: NP-Complete problems have no polynomial solution
• Open problem (million dollar prize)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NP-Complete Problems:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ 3-SAT               │ Boolean formula with 3 literals per clause  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hamiltonian Cycle   │ Cycle visiting all vertices exactly once    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Traveling Salesman  │ Shortest tour visiting all cities (decision)│
│ Problem (TSP)       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Vertex Cover        │ Set of vertices covering all edges          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clique Problem      │ Complete subgraph of size k                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Subset Sum          │ Subset of numbers summing to target         │
├─────────────────────┼─────────────────────────────────────────────┤
│ 0/1 Knapsack        │ Maximize value within weight limit (decision)│
└─────────────────────┴─────────────────────────────────────────────┘

How to Prove NP-Completeness:
1. Show problem is in NP (verifiable in polynomial time)
2. Reduce a known NP-Complete problem to this problem
   Example: 3-SAT → Vertex Cover → Clique → Hamiltonian

Cook-Levin Theorem:
SAT (Boolean Satisfiability) is NP-Complete.
First problem proven to be NP-Complete.

Implications of NP-Completeness:
• If you solve one NP-Complete problem in P time → All NP problems solved
• Practical approach: Use approximation, heuristics, or exponential for small n

✅ SUMMARY
• Algebraic Simplification: Boolean laws, De Morgan's, K-Map
• Lower Bound: Ω(n log n) for sorting, decision tree model
• P: Polynomial time solvable
• NP: Polynomial time verifiable
• NP-Complete: Hardest in NP, if solved → all NP solved
• NP-Hard: At least as hard as NP-Complete`,
      contentBn: `📌 বীজগাণিতিক সরলীকরণ ও রূপান্তর

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

বুলিয়ান বীজগণিতের সূত্র:

• আইডেনটিটি: A + 0 = A,  A · 1 = A
• নাল: A + 1 = 1,  A · 0 = 0
• আইডেম্পোটেন্ট: A + A = A,  A · A = A
• কমপ্লিমেন্ট: A + A' = 1,  A · A' = 0
• কমিউটেটিভ: A + B = B + A,  A · B = B · A
• ডি মরগানের সূত্র: (A·B)' = A' + B', (A+B)' = A'·B'

সরলীকরণ উদাহরণ:
F = A·B + A·B' = A·(B + B') = A·1 = A

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 লোয়ার বাউন্ড থিওরি

সংজ্ঞা: সবচেয়ে খারাপ ক্ষেত্রে কোনো সমস্যা সমাধানের জন্য প্রয়োজনীয় ন্যূনতম ধাপের সংখ্যা।

জ্ঞাত লোয়ার বাউন্ড:
• তুলনামূলক সর্টিং: Ω(n log n)
• অসাজানো অ্যারেতে সার্চ: Ω(n)
• গ্রাফ সংযোগ: Ω(V + E)

লোয়ার বাউন্ড খোঁজার কৌশল:
১. ডিসিশন ট্রি মডেল
২. অ্যাডভার্সারি আর্গুমেন্ট
৩. ইনফরমেশন-থিওরেটিক আর্গুমেন্ট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 এনপি-সম্পূর্ণতা

জটিলতা শ্রেণি:
• P: বহুপদী সময়ে সমাধানযোগ্য (সর্টিং, সার্চ)
• NP: বহুপদী সময়ে যাচাইযোগ্য (সাবসেট সাম, হ্যামিলটোনিয়ান পাথ)
• NP-হার্ড: এনপি সমস্যার মতো কঠিন (হলটিং সমস্যা)
• NP-সম্পূর্ণ: NP ও NP-হার্ড উভয়ই (৩-SAT, ভারটেক্স কভার)

এনপি-সম্পূর্ণ সমস্যার উদাহরণ:
• ৩-SAT
• হ্যামিলটোনিয়ান সাইকেল
• ট্রাভেলিং সেলসম্যান (TSP)
• ভারটেক্স কভার
• ক্লিক সমস্যা
• সাবসেট সাম

✅ সারাংশ
• বীজগাণিতিক সরলীকরণ: বুলিয়ান সূত্র, ডি মরগান, কে-ম্যাপ
• লোয়ার বাউন্ড: সর্টিংয়ের জন্য Ω(n log n)
• P: বহুপদী সময় সমাধানযোগ্য
• NP: বহুপদী সময় যাচাইযোগ্য
• NP-সম্পূর্ণ: NP-তে সবচেয়ে কঠিন
• NP-হার্ড: NP-সম্পূর্ণর মতো কঠিন"`,
      takeaways: [
        "Boolean algebra: Identity, Null, Idempotent, De Morgan's laws",
        "Lower bound: Ω(n log n) for comparison sorting",
        "P: polynomial time solvable, NP: polynomial time verifiable",
        "NP-Complete: hardest in NP, if solved → all NP solved",
        "Cook-Levin Theorem: SAT is NP-Complete"
      ],
      takeawaysBn: [
        "বুলিয়ান বীজগণিত: আইডেনটিটি, নাল, আইডেম্পোটেন্ট, ডি মরগানের সূত্র",
        "লোয়ার বাউন্ড: তুলনামূলক সর্টিংয়ের জন্য Ω(n log n)",
        "P: বহুপদী সময় সমাধানযোগ্য, NP: বহুপদী সময় যাচাইযোগ্য",
        "NP-সম্পূর্ণ: NP-তে সবচেয়ে কঠিন, সমাধান হলে সব NP সমাধান হবে",
        "কুক-লেভিন থিওরেম: SAT এনপি-সম্পূর্ণ"
      ],
      level: "Advanced"
    }
  ]
}

export const module15 = m15