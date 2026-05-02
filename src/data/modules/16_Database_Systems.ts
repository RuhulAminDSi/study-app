import type { Module } from '../../types'

const m16: Module = {
  title: "16. Database Systems",
  titleBn: "১৬. ডেটাবেস সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "db1",
      title: "Database Concepts & Data Models (ER, Relational)",
      titleBn: "ডেটাবেস ধারণা ও ডেটা মডেল (ER, রিলেশনাল)",
      content: `📌 CONCEPTS OF DATABASE SYSTEMS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 What is a Database System?
A Database System is a structured way to store, manage, and retrieve data efficiently. It combines databases (the data itself) with DBMS (Database Management System – the software to manage data).

🔑 Key Concepts:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Database            │ Collection of related data                  │
│                     │ Example: University DB (students, courses)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ DBMS                │ Software that manages databases             │
│                     │ MySQL, Oracle, PostgreSQL, MongoDB          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Schema              │ Structure/blueprint of database             │
│                     │ Student(id, name, dept)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Instance            │ Actual data at a point in time              │
│                     │ (101, "Alice", "CSE")                       │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ Three-Level Database Architecture

┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL LEVEL (User Views)                │
│            View 1          View 2          View 3               │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                   CONCEPTUAL LEVEL (Logical Structure)          │
│              Tables, Relationships, Constraints                 │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│                    INTERNAL LEVEL (Physical Storage)            │
│                 Files, Blocks, Indexes, Compression             │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 DATA MODELS

🔹 1. Entity-Relationship (E-R) Model
High-level conceptual model for database design.

Components:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Component           │ Symbol & Example                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Entity              │ Rectangle → Student, Course                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Attribute           │ Oval → name, id, dept                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Relationship        │ Diamond → Enrolls                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary Key         │ Underlined attribute → id                  │
└─────────────────────┴─────────────────────────────────────────────┘

Cardinality Types:
• 1:1 (One-to-One) → Person ↔ Passport
• 1:N (One-to-Many) → Department ↔ Students
• M:N (Many-to-Many) → Student ↔ Courses

E-R Diagram Example:
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Student  │     │ Enrolls  │     │ Course   │
├──────────┤     │   M:N    │     ├──────────┤
│ id (PK)  │────▶│          │◀────│ code (PK)│
│ name     │     └──────────┘     │ title    │
│ dept     │                      │ credit   │
└──────────┘                      └──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2. Relational Model
Logical model using tables (relations) with rows and columns.

Key Concepts:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Relation (Table)    │ Set of tuples (rows) with attributes       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tuple (Row)         │ A record (1, "Alice", "CSE")               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Attribute (Column)  │ Field (Name, Dept)                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Domain              │ Allowed values for an attribute            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary Key         │ Unique identifier for each row             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Foreign Key         │ References key in another table            │
└─────────────────────┴─────────────────────────────────────────────┘

Example Tables (from E-R model):
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Enrolls         │     │ Course          │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id (PK)         │────▶│ student_id (FK) │     │ code (PK)       │
│ name            │     │ course_code (FK)│◀────│ title           │
│ dept            │     └─────────────────┘     │ credit          │
└─────────────────┘                             └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 Database Keys

┌─────────────────────┬─────────────────────────────────────────────┐
│ Key Type            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary Key         │ Uniquely identifies each row (NOT NULL + UNIQUE)│
├─────────────────────┼─────────────────────────────────────────────┤
│ Foreign Key         │ References primary key in another table     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Candidate Key       │ Any attribute that could be primary key     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Composite Key       │ Key formed from multiple attributes         │
│                     │ Example: (StudentID, CourseID)              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Super Key           │ Set of attributes that uniquely identifies  │
│                     │ a row (can be superset of candidate key)    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CONSTRAINTS AND TRIGGERS

🔹 Constraints: Rules to maintain data integrity.

┌─────────────────────┬─────────────────────────────────────────────┐
│ Constraint          │ SQL Example                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ NOT NULL            │ Name VARCHAR(50) NOT NULL                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ UNIQUE              │ Email VARCHAR(100) UNIQUE                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ PRIMARY KEY         │ id INT PRIMARY KEY                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ FOREIGN KEY         │ dept_id INT REFERENCES Dept(id)             │
├─────────────────────┼─────────────────────────────────────────────┤
│ CHECK               │ CHECK (Age >= 18)                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ DEFAULT             │ status VARCHAR(20) DEFAULT 'active'         │
└─────────────────────┴─────────────────────────────────────────────┘

🔹 Triggers: Stored procedures that execute automatically on events.

SQL Trigger Example:
CREATE TRIGGER update_student_count
AFTER INSERT ON Students
FOR EACH ROW
BEGIN
   UPDATE Department
   SET StudentCount = StudentCount + 1
   WHERE DeptID = NEW.DeptID;
END;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison: E-R Model vs Relational Model

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ E-R Model (Conceptual)│ Relational Model     │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Purpose             │ Database design      │ Database implementation│
│ Representation      │ Entities, attributes │ Tables, rows, columns│
│ Abstraction Level   │ High-level           │ Low-level            │
│ Human friendly      │ Yes                  │ Moderate             │
│ Machine friendly    │ No                   │ Yes                  │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Database System = Database + DBMS
• Three-level architecture: External → Conceptual → Internal
• E-R Model: Entities, attributes, relationships for design
• Relational Model: Tables, rows, columns for implementation
• Keys: Primary, Foreign, Candidate, Composite, Super
• Constraints & Triggers ensure data integrity`,
      contentBn: `📌 ডেটাবেস সিস্টেমের ধারণা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ডেটাবেস সিস্টেম কী?
একটি ডেটাবেস সিস্টেম হল ডেটা দক্ষতার সাথে সংরক্ষণ, পরিচালনা এবং পুনরুদ্ধারের একটি কাঠামোবদ্ধ উপায়। এটি ডেটাবেস (ডেটা নিজেই) এবং DBMS (ডেটাবেস ম্যানেজমেন্ট সিস্টেম – ডেটা পরিচালনার সফটওয়্যার) একত্রিত করে।

🔑 মূল ধারণা:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডেটাবেস             │ সম্পর্কিত ডেটার সংগ্রহ                      │
│                     │ উদাহরণ: বিশ্ববিদ্যালয় ডেটাবেস             │
├─────────────────────┼─────────────────────────────────────────────┤
│ DBMS                │ ডেটাবেস পরিচালনাকারী সফটওয়্যার            │
│                     │ মাইএসকিউএল, ওরাকল, পোস্টগ্রেএসকিউএল         │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্কিমা              │ ডেটাবেসের কাঠামো/ব্লুপ্রিন্ট                │
│                     │ Student(id, name, dept)                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইনস্ট্যান্স         │ একটি নির্দিষ্ট সময়ের প্রকৃত ডেটা           │
│                     │ (101, "আলিস", "CSE")                        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ ত্রি-স্তরের ডেটাবেস আর্কিটেকচার

┌─────────────────────────────────────────────────────────────────┐
│                      এক্সটার্নাল লেভেল (ইউজার ভিউ)             │
│            ভিউ ১          ভিউ ২          ভিউ ৩                  │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│              কনসেপচুয়াল লেভেল (লজিক্যাল কাঠামো)              │
│                 টেবিল, সম্পর্ক, সীমাবদ্ধতা                      │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│               ইন্টার্নাল লেভেল (ফিজিক্যাল স্টোরেজ)             │
│                 ফাইল, ব্লক, ইনডেক্স, কম্প্রেশন                 │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ডেটা মডেল

🔹 ১. এন্টিটি-রিলেশনশিপ (E-R) মডেল
ডেটাবেস ডিজাইনের জন্য উচ্চ-স্তরের কনসেপচুয়াল মডেল।

উপাদান:
┌─────────────────────┬─────────────────────────────────────────────┐
│ উপাদান              │ প্রতীক ও উদাহরণ                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ এন্টিটি             │ আয়তক্ষেত্র → Student, Course              │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাট্রিবিউট        │ ডিম্বাকৃতি → name, id, dept                │
├─────────────────────┼─────────────────────────────────────────────┤
│ সম্পর্ক             │ হীরক → Enrolls                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রাইমারি কী        │ আন্ডারলাইন অ্যাট্রিবিউট → id               │
└─────────────────────┴─────────────────────────────────────────────┘

কার্ডিনালিটি প্রকার:
• 1:1 (এক-থেকে-এক) → ব্যক্তি ↔ পাসপোর্ট
• 1:N (এক-থেকে-অনেক) → বিভাগ ↔ ছাত্র
• M:N (অনেক-থেকে-অনেক) → ছাত্র ↔ কোর্স

E-R ডায়াগ্রাম উদাহরণ:
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Student  │     │ Enrolls  │     │ Course   │
├──────────┤     │   M:N    │     ├──────────┤
│ id (PK)  │────▶│          │◀────│ code (PK)│
│ name     │     └──────────┘     │ title    │
│ dept     │                      │ credit   │
└──────────┘                      └──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২. রিলেশনাল মডেল
সারি ও কলাম সহ টেবিল (রিলেশন) ব্যবহার করে লজিক্যাল মডেল।

মূল ধারণা:
┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিলেশন (টেবিল)      │ অ্যাট্রিবিউট সহ টাপল (সারি) এর সেট          │
├─────────────────────┼─────────────────────────────────────────────┤
│ টাপল (সারি)         │ একটি রেকর্ড (1, "আলিস", "CSE")              │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাট্রিবিউট (কলাম) │ ক্ষেত্র (নাম, বিভাগ)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডোমেইন              │ একটি অ্যাট্রিবিউটের জন্য অনুমোদিত মান       │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রাইমারি কী        │ প্রতিটি সারির জন্য অনন্য শনাক্তকারী         │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফরেন কী             │ অন্য টেবিলের কী রেফারেন্স করে              │
└─────────────────────┴─────────────────────────────────────────────┘

উদাহরণ টেবিল (E-R মডেল থেকে):
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Enrolls         │     │ Course          │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id (PK)         │────▶│ student_id (FK) │     │ code (PK)       │
│ name            │     │ course_code (FK)│◀────│ title           │
│ dept            │     └─────────────────┘     │ credit          │
└─────────────────┘                             └─────────────────┘

✅ সারাংশ
• ডেটাবেস সিস্টেম = ডেটাবেস + DBMS
• ত্রি-স্তরের আর্কিটেকচার: এক্সটার্নাল → কনসেপচুয়াল → ইন্টার্নাল
• E-R মডেল: ডিজাইনের জন্য এন্টিটি, অ্যাট্রিবিউট, সম্পর্ক
• রিলেশনাল মডেল: ইমপ্লিমেন্টেশনের জন্য টেবিল, সারি, কলাম
• কী: প্রাইমারি, ফরেন, ক্যান্ডিডেট, কম্পোজিট, সুপার
• কনস্ট্রেইন্ট ও ট্রিগার ডেটা ইন্টিগ্রিটি নিশ্চিত করে`,
      takeaways: [
        "Database System = Database + DBMS",
        "Three-level architecture: External, Conceptual, Internal",
        "E-R Model: Entities, attributes, relationships for design",
        "Relational Model: Tables with rows and columns",
        "Keys: Primary, Foreign, Candidate, Composite",
        "Constraints and triggers ensure data integrity"
      ],
      takeawaysBn: [
        "ডেটাবেস সিস্টেম = ডেটাবেস + DBMS",
        "ত্রি-স্তরের আর্কিটেকচার: এক্সটার্নাল, কনসেপচুয়াল, ইন্টার্নাল",
        "E-R মডেল: ডিজাইনের জন্য এন্টিটি, অ্যাট্রিবিউট, সম্পর্ক",
        "রিলেশনাল মডেল: সারি ও কলাম সহ টেবিল",
        "কী: প্রাইমারি, ফরেন, ক্যান্ডিডেট, কম্পোজিট",
        "কনস্ট্রেইন্ট ও ট্রিগার ডেটা ইন্টিগ্রিটি নিশ্চিত করে"
      ],
      level: "Advanced"
    },
    {
      id: "db2",
      title: "Query Languages: Relational Algebra & SQL",
      titleBn: "কোয়েরি ল্যাংগুয়েজ: রিলেশনাল অ্যালজেবরা ও SQL",
      content: `📌 QUERY LANGUAGES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 1. RELATIONAL ALGEBRA (RA)
Theoretical language for describing queries using mathematical operations on relations.

Basic Operations:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Operation           │ Symbol │ Description & Example              │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Selection           │ σ      │ Filter rows (σ salary>50000 Emp)   │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Projection          │ π      │ Select columns (π name,salary Emp) │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Union               │ ∪      │ Combine tuples (A ∪ B)             │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Set Difference      │ −      │ Tuples in A not in B (A − B)       │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Cartesian Product   │ ×      │ All combinations (A × B)           │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Rename              │ ρ      │ Rename attributes (ρ new/old)      │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ Join (Natural/θ)    │ ⋈      │ Combine based on condition         │
└─────────────────────┴────────┴─────────────────────────────────────┘

Example Database:
┌─────────────────┐     ┌─────────────────┐
│ Students        │     │ Courses         │
├─────────────────┤     ├─────────────────┤
│ id │ name │ dept│     │ cid │ name      │
├─────────────────┤     ├─────────────────┤
│ 1  │ Alice│ CSE │     │ C1  │ DBMS      │
│ 2  │ Bob  │ EEE │     │ C2  │ Algorithms│
└─────────────────┘     └─────────────────┘

RA Query Examples:
• Find all CSE students: σ dept='CSE' (Students)
• Get only names: π name (Students)
• Cartesian product: Students × Courses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 2. SQL (Structured Query Language)
Practical language used in real DBMS (MySQL, PostgreSQL, Oracle).

SQL Command Types:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Commands                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ DDL (Data Definition│ CREATE, ALTER, DROP, TRUNCATE              │
│ Language)           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ DML (Data Manipulation│ SELECT, INSERT, UPDATE, DELETE           │
│ Language)           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ DCL (Data Control   │ GRANT, REVOKE                               │
│ Language)           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ TCL (Transaction    │ COMMIT, ROLLBACK, SAVEPOINT                 │
│ Control Language)   │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SQL JOIN TYPES (with Example)

Sample Tables:
t1 (Employees)              t2 (Departments)
┌────┬───────┬────────┐     ┌─────────┬───────────┐
│ id │ name  │ dept_id│     │ dept_id │ dept_name │
├────┼───────┼────────┤     ├─────────┼───────────┤
│ 1  │ Alice │ 10     │     │ 10      │ HR        │
│ 2  │ Bob   │ 20     │     │ 20      │ IT        │
│ 3  │ Charlie│ 30    │     │ 40      │ Finance   │
└────┴───────┴────────┘     └─────────┴───────────┘

1. INNER JOIN (Matching rows only):
SELECT * FROM t1 JOIN t2 ON t1.dept_id = t2.dept_id;
Result:
id │ name   │ dept_id │ dept_id │ dept_name
1  │ Alice  │ 10      │ 10      │ HR
2  │ Bob    │ 20      │ 20      │ IT

2. LEFT JOIN (All from left, matched from right):
SELECT * FROM t1 LEFT JOIN t2 ON t1.dept_id = t2.dept_id;
Result:
id │ name    │ dept_id │ dept_id │ dept_name
1  │ Alice   │ 10      │ 10      │ HR
2  │ Bob     │ 20      │ 20      │ IT
3  │ Charlie │ 30      │ NULL    │ NULL

3. RIGHT JOIN (All from right, matched from left):
SELECT * FROM t1 RIGHT JOIN t2 ON t1.dept_id = t2.dept_id;
Result:
id │ name   │ dept_id │ dept_id │ dept_name
1  │ Alice  │ 10      │ 10      │ HR
2  │ Bob    │ 20      │ 20      │ IT
NULL│ NULL  │ NULL    │ 40      │ Finance

4. FULL OUTER JOIN (All rows from both):
SELECT * FROM t1 FULL OUTER JOIN t2 ON t1.dept_id = t2.dept_id;
Result:
id │ name    │ dept_id │ dept_id │ dept_name
1  │ Alice   │ 10      │ 10      │ HR
2  │ Bob     │ 20      │ 20      │ IT
3  │ Charlie │ 30      │ NULL    │ NULL
NULL│ NULL   │ NULL    │ 40      │ Finance

5. CROSS JOIN (Cartesian product):
SELECT * FROM t1 CROSS JOIN t2;
Result: 3 × 3 = 9 rows

6. SELF JOIN (Table joined with itself):
SELECT a.name AS emp, b.name AS manager
FROM employees a JOIN employees b ON a.manager_id = b.id;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Relational Algebra vs SQL

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Relational Algebra   │ SQL                  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Type                │ Theoretical          │ Practical            │
│ Level               │ Procedural           │ Declarative          │
│ Duplicates          │ No (set theory)      │ Yes (unless DISTINCT)│
│ Query Example       │ σ salary>50000(Emp)  │ SELECT * FROM Emp    │
│                     │                      │ WHERE salary>50000   │
│ Optimization Basis  │ Yes (internal)       │ Optimizer uses RA    │
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 SQL Query Examples

-- SELECT with condition
SELECT name, salary FROM Employees WHERE salary > 50000;

-- INSERT
INSERT INTO Students (id, name, dept) VALUES (101, 'Alice', 'CSE');

-- UPDATE
UPDATE Employees SET salary = salary * 1.10 WHERE dept = 'IT';

-- DELETE
DELETE FROM Students WHERE id = 101;

-- GROUP BY with aggregate
SELECT dept, COUNT(*) FROM Students GROUP BY dept;

-- ORDER BY
SELECT name, salary FROM Employees ORDER BY salary DESC;

-- Subquery
SELECT name FROM Students 
WHERE id IN (SELECT student_id FROM Enrollments);

✅ SUMMARY
• Relational Algebra: Theoretical foundation (σ, π, ∪, −, ×, ⋈)
• SQL: Practical implementation (DDL, DML, DCL, TCL)
• Joins: INNER, LEFT, RIGHT, FULL, CROSS, SELF
• SQL is declarative; internally DBMS converts to RA for optimization`,
      contentBn: `📌 কোয়েরি ল্যাংগুয়েজ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ১. রিলেশনাল অ্যালজেবরা (RA)
রিলেশনে গাণিতিক অপারেশন ব্যবহার করে কোয়েরি বর্ণনার তাত্ত্বিক ভাষা।

মৌলিক অপারেশন:

┌─────────────────────┬────────┬─────────────────────────────────────┐
│ অপারেশন             │ চিহ্ন  │ বর্ণনা ও উদাহরণ                    │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ সিলেকশন            │ σ      │ সারি ফিল্টার (σ salary>50000 Emp)   │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ প্রজেকশন           │ π      │ কলাম নির্বাচন (π name,salary Emp)   │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ ইউনিয়ন             │ ∪      │ টাপল একত্রিত করা (A ∪ B)            │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ সেট ডিফারেন্স      │ −      │ A-তে থাকা B-তে নেই এমন টাপল (A − B)  │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ কার্টেসিয়ান প্রোডাক্ট│ ×     │ সব কম্বিনেশন (A × B)                │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ রিনেম              │ ρ      │ অ্যাট্রিবিউট পুনঃনামকরণ              │
├─────────────────────┼────────┼─────────────────────────────────────┤
│ জয়েন (ন্যাচারাল/θ)│ ⋈      │ শর্ত অনুযায়ী একত্রিত করা            │
└─────────────────────┴────────┴─────────────────────────────────────┘

RA কোয়েরি উদাহরণ:
• সব CSE ছাত্র খুঁজুন: σ dept='CSE' (Students)
• শুধু নাম নিন: π name (Students)
• কার্টেসিয়ান প্রোডাক্ট: Students × Courses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ২. SQL (স্ট্রাকচার্ড কোয়েরি ল্যাংগুয়েজ)
বাস্তব DBMS-এ ব্যবহৃত ব্যবহারিক ভাষা (মাইএসকিউএল, পোস্টগ্রেএসকিউএল, ওরাকল)।

SQL কমান্ড প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ কমান্ড                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ DDL (ডেটা ডেফিনিশন│ CREATE, ALTER, DROP, TRUNCATE               │
│ ল্যাংগুয়েজ)       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ DML (ডেটা ম্যানিপুলেশন│ SELECT, INSERT, UPDATE, DELETE           │
│ ল্যাংগুয়েজ)       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ DCL (ডেটা কন্ট্রোল │ GRANT, REVOKE                               │
│ ল্যাংগুয়েজ)       │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ TCL (ট্রানজেকশন   │ COMMIT, ROLLBACK, SAVEPOINT                 │
│ কন্ট্রোল ল্যাংগুয়েজ)│                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SQL জয়েন প্রকার (উদাহরণ সহ)

নমুনা টেবিল:
t1 (কর্মচারী)              t2 (বিভাগ)
┌────┬───────┬────────┐     ┌─────────┬───────────┐
│ id │ name  │ dept_id│     │ dept_id │ dept_name │
├────┼───────┼────────┤     ├─────────┼───────────┤
│ 1  │ আলিস │ 10     │     │ 10      │ এইচআর     │
│ 2  │ বব   │ 20     │     │ 20      │ আইটি      │
│ 3  │ চার্লি│ 30    │     │ 40      │ ফাইন্যান্স │
└────┴───────┴────────┘     └─────────┴───────────┘

১. INNER JOIN (শুধু ম্যাচিং সারি):
SELECT * FROM t1 JOIN t2 ON t1.dept_id = t2.dept_id;
ফলাফল:
id │ name   │ dept_id │ dept_id │ dept_name
1  │ আলিস  │ 10      │ 10      │ এইচআর
2  │ বব    │ 20      │ 20      │ আইটি

২. LEFT JOIN (বাম থেকে সব, ডান থেকে ম্যাচিং):
SELECT * FROM t1 LEFT JOIN t2 ON t1.dept_id = t2.dept_id;
ফলাফল:
id │ name    │ dept_id │ dept_id │ dept_name
1  │ আলিস   │ 10      │ 10      │ এইচআর
2  │ বব     │ 20      │ 20      │ আইটি
3  │ চার্লি │ 30      │ NULL    │ NULL

৩. RIGHT JOIN (ডান থেকে সব, বাম থেকে ম্যাচিং):
SELECT * FROM t1 RIGHT JOIN t2 ON t1.dept_id = t2.dept_id;
ফলাফল:
id │ name   │ dept_id │ dept_id │ dept_name
1  │ আলিস  │ 10      │ 10      │ এইচআর
2  │ বব    │ 20      │ 20      │ আইটি
NULL│ NULL  │ NULL    │ 40      │ ফাইন্যান্স

৪. FULL OUTER JOIN (উভয় টেবিল থেকে সব সারি):
SELECT * FROM t1 FULL OUTER JOIN t2 ON t1.dept_id = t2.dept_id;
ফলাফল:
id │ name    │ dept_id │ dept_id │ dept_name
1  │ আলিস   │ 10      │ 10      │ এইচআর
2  │ বব     │ 20      │ 20      │ আইটি
3  │ চার্লি │ 30      │ NULL    │ NULL
NULL│ NULL   │ NULL    │ 40      │ ফাইন্যান্স

৫. CROSS JOIN (কার্টেসিয়ান প্রোডাক্ট):
SELECT * FROM t1 CROSS JOIN t2;
ফলাফল: ৩ × ৩ = ৯টি সারি

৬. SELF JOIN (টেবিল নিজের সাথে জয়েন):
SELECT a.name AS কর্মচারী, b.name AS ম্যানেজার
FROM employees a JOIN employees b ON a.manager_id = b.id;

✅ সারাংশ
• রিলেশনাল অ্যালজেবরা: তাত্ত্বিক ভিত্তি (σ, π, ∪, −, ×, ⋈)
• SQL: ব্যবহারিক বাস্তবায়ন (DDL, DML, DCL, TCL)
• জয়েন: INNER, LEFT, RIGHT, FULL, CROSS, SELF
• SQL ডিক্লারেটিভ; অভ্যন্তরীণভাবে DBMS অপটিমাইজেশনের জন্য RA-তে রূপান্তর করে`,
      takeaways: [
        "Relational Algebra: theoretical foundation (σ, π, ∪, −, ×, ⋈)",
        "SQL: practical implementation (SELECT, INSERT, UPDATE, DELETE)",
        "Joins: INNER, LEFT, RIGHT, FULL, CROSS, SELF",
        "SQL is declarative; DBMS converts to RA internally"
      ],
      takeawaysBn: [
        "রিলেশনাল অ্যালজেবরা: তাত্ত্বিক ভিত্তি (σ, π, ∪, −, ×, ⋈)",
        "SQL: ব্যবহারিক বাস্তবায়ন (SELECT, INSERT, UPDATE, DELETE)",
        "জয়েন: INNER, LEFT, RIGHT, FULL, CROSS, SELF",
        "SQL ডিক্লারেটিভ; DBMS অভ্যন্তরীণভাবে RA-তে রূপান্তর করে"
      ],
      level: "Advanced"
    },
    {
      id: "db3",
      title: "Functional Dependencies & Normalization",
      titleBn: "ফাংশনাল ডিপেন্ডেন্সি ও নরমালাইজেশন",
      content: `📌 FUNCTIONAL DEPENDENCIES & NORMALIZATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 FUNCTIONAL DEPENDENCIES (FDs)

Definition: A relationship where one attribute uniquely determines another.

Notation: A → B (A determines B, B is functionally dependent on A)

Example: StudentID → Name (StudentID uniquely determines Name)

Types of Functional Dependencies:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Trivial FD          │ B is subset of A (A,B → A)                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-Trivial FD      │ B is not subset of A (StudentID → Name)    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Full FD             │ B depends on whole A, not part             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Partial FD          │ B depends on part of composite key         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Transitive FD       │ A → B and B → C ⇒ A → C                    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 NORMALIZATION

Definition: Process of organizing data to reduce redundancy and improve integrity.

┌─────────────────────────────────────────────────────────────────┐
│                    NORMAL FORMS HIERARCHY                       │
│                                                                 │
│                         BCNF                                    │
│                          ↑                                      │
│                         3NF                                     │
│                          ↑                                      │
│                         2NF                                     │
│                          ↑                                      │
│                         1NF                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 1NF (First Normal Form)
Rule: Atomic values (no repeating groups or arrays)

Before 1NF:
┌─────────────┬─────────────────────┐
│ StudentID   │ Courses             │
├─────────────┼─────────────────────┤
│ 101         │ CSE101, MAT201      │ ← Not atomic
└─────────────┴─────────────────────┘

After 1NF:
┌─────────────┬─────────┐
│ StudentID   │ Course  │
├─────────────┼─────────┤
│ 101         │ CSE101  │
│ 101         │ MAT201  │
└─────────────┴─────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2NF (Second Normal Form)
Rule: 1NF + No partial dependency (non-key depends on whole primary key)

Before 2NF:
Table: {StudentID, CourseID} → {StudentName, Instructor}
Problems:
• StudentName depends only on StudentID (partial)
• Instructor depends only on CourseID (partial)

After 2NF:
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Course          │     │ Enrollment      │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ StudentID (PK)  │     │ CourseID (PK)   │     │ StudentID (FK)  │
│ StudentName     │     │ Instructor      │     │ CourseID (FK)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 3NF (Third Normal Form)
Rule: 2NF + No transitive dependency

Before 3NF:
Table: {StudentID} → {DeptID, DeptHead}
Problems: DeptID → DeptHead (transitive dependency)

After 3NF:
┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Department      │
├─────────────────┤     ├─────────────────┤
│ StudentID (PK)  │     │ DeptID (PK)     │
│ DeptID (FK)     │     │ DeptHead        │
└─────────────────┘     └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 BCNF (Boyce-Codd Normal Form)
Rule: 3NF + Every determinant must be a candidate key

Example violation:
Table: {CourseID, Semester} → Instructor, but Instructor → CourseID
(Neither CourseID nor Instructor alone is a superkey)

BCNF Solution: Split into separate tables.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Normal Forms Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Normal Form         │ Requirement                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ 1NF                 │ Atomic values, no repeating groups         │
├─────────────────────┼─────────────────────────────────────────────┤
│ 2NF                 │ 1NF + no partial dependency                │
├─────────────────────┼─────────────────────────────────────────────┤
│ 3NF                 │ 2NF + no transitive dependency             │
├─────────────────────┼─────────────────────────────────────────────┤
│ BCNF                │ Every determinant is a candidate key       │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Normalization Example (Step by Step)

Original Table (Unnormalized):
StudentID | Name | DeptID | DeptName | CourseID | CourseName | Grade
   101    | Alice|   10   |    CSE   |   C101   |   DBMS     |   A
   101    | Alice|   10   |    CSE   |   C102   | Algorithms |   B

Problems: Redundancy, update anomalies, insert/delete anomalies

Step 1 (1NF): Already atomic

Step 2 (2NF): Remove partial dependencies
Table1: Student(StudentID, Name, DeptID)
Table2: Course(CourseID, CourseName)
Table3: Enrollment(StudentID, CourseID, Grade)
Table4: Department(DeptID, DeptName)

Step 3 (3NF): Remove transitive dependency
Student → DeptID → DeptName (transitive)
Already handled by separating Department table.

Final Normalized Database:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Student     │ │ Department  │ │ Course      │ │ Enrollment  │
├─────────────┤ ├─────────────┤ ├─────────────┤ ├─────────────┤
│ StudentID   │ │ DeptID      │ │ CourseID    │ │ StudentID   │
│ Name        │ │ DeptName    │ │ CourseName  │ │ CourseID    │
│ DeptID (FK) │ └─────────────┘ └─────────────┘ │ Grade       │
└─────────────┘                                 └─────────────┘

✅ SUMMARY
• Functional Dependencies: A → B (A determines B)
• Normalization: 1NF → 2NF → 3NF → BCNF
• 1NF: Atomic values
• 2NF: No partial dependency
• 3NF: No transitive dependency
• BCNF: Every determinant is a candidate key
• Benefits: Less redundancy, better integrity, fewer anomalies`,
      contentBn: `📌 ফাংশনাল ডিপেন্ডেন্সি ও নরমালাইজেশন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ফাংশনাল ডিপেন্ডেন্সি (FD)

সংজ্ঞা: একটি সম্পর্ক যেখানে একটি অ্যাট্রিবিউট অনন্যভাবে আরেকটি অ্যাট্রিবিউট নির্ধারণ করে।

নোটেশন: A → B (A, B নির্ধারণ করে)

উদাহরণ: StudentID → Name (StudentID অনন্যভাবে Name নির্ধারণ করে)

ফাংশনাল ডিপেন্ডেন্সির প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ট্রিভিয়াল FD       │ B, A-এর উপসেট (A,B → A)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ নন-ট্রিভিয়াল FD    │ B, A-এর উপসেট নয় (StudentID → Name)       │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফুল FD              │ B পুরো A-এর উপর নির্ভর করে                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ পার্শিয়াল FD       │ B কম্পোজিট কী-এর অংশের উপর নির্ভর করে      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ট্রানজিটিভ FD       │ A → B এবং B → C ⇒ A → C                    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 নরমালাইজেশন

সংজ্ঞা: রিডান্ড্যান্সি কমাতে ও ইন্টিগ্রিটি উন্নত করতে ডেটা সংগঠিত করার প্রক্রিয়া।

┌─────────────────────────────────────────────────────────────────┐
│                    নরমাল ফর্মস হায়ারার্কি                      │
│                                                                 │
│                         BCNF                                    │
│                          ↑                                      │
│                         3NF                                     │
│                          ↑                                      │
│                         2NF                                     │
│                          ↑                                      │
│                         1NF                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ১NF (প্রথম নরমাল ফর্ম)
নিয়ম: অ্যাটমিক মান (কোনো রিপিটিং গ্রুপ বা অ্যারে নেই)

১NF-এর আগে:
┌─────────────┬─────────────────────┐
│ StudentID   │ Courses             │
├─────────────┼─────────────────────┤
│ 101         │ CSE101, MAT201      │ ← অ্যাটমিক নয়
└─────────────┴─────────────────────┘

১NF-এর পরে:
┌─────────────┬─────────┐
│ StudentID   │ Course  │
├─────────────┼─────────┤
│ 101         │ CSE101  │
│ 101         │ MAT201  │
└─────────────┴─────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২NF (দ্বিতীয় নরমাল ফর্ম)
নিয়ম: ১NF + কোনো পার্শিয়াল ডিপেন্ডেন্সি নেই

২NF-এর পরে:
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Course          │     │ Enrollment      │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ StudentID (PK)  │     │ CourseID (PK)   │     │ StudentID (FK)  │
│ StudentName     │     │ Instructor      │     │ CourseID (FK)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৩NF (তৃতীয় নরমাল ফর্ম)
নিয়ম: ২NF + কোনো ট্রানজিটিভ ডিপেন্ডেন্সি নেই

৩NF-এর পরে:
┌─────────────────┐     ┌─────────────────┐
│ Student         │     │ Department      │
├─────────────────┤     ├─────────────────┤
│ StudentID (PK)  │     │ DeptID (PK)     │
│ DeptID (FK)     │     │ DeptHead        │
└─────────────────┘     └─────────────────┘

✅ সারাংশ
• ফাংশনাল ডিপেন্ডেন্সি: A → B (A, B নির্ধারণ করে)
• নরমালাইজেশন: ১NF → ২NF → ৩NF → BCNF
• ১NF: অ্যাটমিক মান
• ২NF: কোনো পার্শিয়াল ডিপেন্ডেন্সি নেই
• ৩NF: কোনো ট্রানজিটিভ ডিপেন্ডেন্সি নেই
• BCNF: প্রতিটি ডিটারমিনেন্ট একটি ক্যান্ডিডেট কী
• সুবিধা: কম রিডান্ড্যান্সি, ভালো ইন্টিগ্রিটি, কম অ্যানোমালি`,
      takeaways: [
        "Functional Dependency: A → B (A determines B)",
        "Normalization: 1NF → 2NF → 3NF → BCNF",
        "1NF: Atomic values, 2NF: No partial dependency",
        "3NF: No transitive dependency, BCNF: Every determinant is candidate key",
        "Benefits: Less redundancy, better integrity"
      ],
      takeawaysBn: [
        "ফাংশনাল ডিপেন্ডেন্সি: A → B (A, B নির্ধারণ করে)",
        "নরমালাইজেশন: ১NF → ২NF → ৩NF → BCNF",
        "১NF: অ্যাটমিক মান, ২NF: কোনো পার্শিয়াল ডিপেন্ডেন্সি নেই",
        "৩NF: কোনো ট্রানজিটিভ ডিপেন্ডেন্সি নেই, BCNF: প্রতিটি ডিটারমিনেন্ট ক্যান্ডিডেট কী",
        "সুবিধা: কম রিডান্ড্যান্সি, ভালো ইন্টিগ্রিটি"
      ],
      level: "Advanced"
    },
    {
      id: "db4",
      title: "File Organization, Indexing & Query Optimization",
      titleBn: "ফাইল অর্গানাইজেশন, ইনডেক্সিং ও কোয়েরি অপ্টিমাইজেশন",
      content: `📌 FILE ORGANIZATION & DATA STORAGE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 File Organization: How records are stored physically on storage media.

Types of File Organization:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Organization        │ Description & Characteristics              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Heap (Unordered)    │ Records in no order. Insertion fast,       │
│                     │ search slow (O(n)).                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Sequential          │ Sorted by key field. Search fast,          │
│                     │ insertion slow (needs shifting).           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Hashed              │ Uses hash function for direct access.      │
│                     │ Fast equality search, collisions possible. │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clustered/Indexed   │ Data stored with index pointers.           │
│                     │ Very fast search, extra space for index.   │
└─────────────────────┴─────────────────────────────────────────────┘

Comparison:
┌─────────────────────┬──────────┬──────────┬──────────┬──────────┐
│ Organization        │ Insert   │ Delete   │ Search   │ Space    │
├─────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Heap                │ Fast     │ Moderate │ Slow     │ Minimal  │
│ Sequential          │ Slow     │ Slow     │ Fast     │ Minimal  │
│ Hashed              │ Moderate │ Moderate │ Fast     │ Moderate │
│ Indexed             │ Moderate │ Moderate │ Very Fast│ Extra    │
└─────────────────────┴──────────┴──────────┴──────────┴──────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗂️ DATA STORAGE TYPES

┌─────────────────────┬─────────────────────────────────────────────┐
│ Storage Type        │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary (RAM)       │ Fast access, volatile (data lost on power)  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Secondary (HDD/SSD) │ Persistent, slower than RAM                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tertiary (Tape/CD)  │ Very slow, used for archiving              │
└─────────────────────┴─────────────────────────────────────────────┘

Storage Units: Bit → Byte → Block/Page → File → Database

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 INDEXING

Definition: Data structure that improves speed of data retrieval operations.

Types of Indexes:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Index Type          │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Primary Index       │ On primary key, physically orders data      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Secondary Index     │ On non-key columns, provides alternate path │
├─────────────────────┼─────────────────────────────────────────────┤
│ Clustered Index     │ Data physically ordered by index key        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-clustered Index │ Logical pointer to data (separate structure)│
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌲 B+ TREES

Most common indexing structure in databases.

Properties:
• Balanced tree structure
• All leaves at same level
• Internal nodes contain keys + pointers
• Leaf nodes contain keys + data pointers

B+ Tree Structure:
                    [50]
                   /    \
                [30]     [70]
               /   \     /   \
            [10,20] [40] [60] [80,90]
              ↓      ↓    ↓     ↓
            Data   Data Data  Data

Advantages:
• O(log n) search, insert, delete
• Efficient range queries
• High fanout → shallow tree

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 HASH TABLES

Uses hash function to compute storage location.

Structure:
Hash Function: h(key) = key mod N

      ┌─────┐
Key=10 → h=0 → Bucket 0: [10, 20, 30]
Key=20 → h=0 → (collision)
Key=25 → h=1 → Bucket 1: [25, 35]

Collision Handling:
• Chaining: Linked list per bucket
• Open addressing: Find next empty slot

Advantages: O(1) average for equality search
Disadvantages: Poor for range queries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ QUERY OPTIMIZATION

Definition: Process of choosing most efficient execution plan for a SQL query.

Query Processing Stages:
SQL Query → Parser → Optimizer → Execution Plan → Result

Optimization Techniques:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Technique           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Use Indexes         │ On columns in WHERE, JOIN, ORDER BY        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Avoid SELECT *      │ Select only needed columns                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Efficient Joins     │ Hash join (large), Merge join (sorted),     │
│                     │ Nested loop (small)                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Avoid Subqueries    │ Replace with JOIN or EXISTS                │
├─────────────────────┼─────────────────────────────────────────────┤
│ Query Hints         │ DB-specific optimization directives        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Partitioning        │ Split large tables                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Caching             │ Materialized views, query cache            │
└─────────────────────┴─────────────────────────────────────────────┘

Cost Model Factors:
• I/O cost (disk page reads/writes)
• CPU cost (operations)
• Communication cost (network in distributed DBs)

Heuristic (Rule-Based) Optimization:
• Perform SELECT early (reduce rows)
• Perform projections early (reduce columns)
• Perform most restrictive joins first

✅ SUMMARY
• File Organization: Heap, Sequential, Hashed, Indexed
• Storage: Primary (RAM), Secondary (HDD/SSD), Tertiary (Tape)
• Indexing: Primary, Secondary, Clustered, Non-clustered
• B+ Trees: Balanced, O(log n), efficient for range queries
• Hash Tables: O(1) for equality, poor for ranges
• Query Optimization: Choose best execution plan using cost model`,
      contentBn: `📌 ফাইল অর্গানাইজেশন ও ডেটা স্টোরেজ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ফাইল অর্গানাইজেশন: স্টোরেজ মিডিয়ায় কীভাবে রেকর্ড ফিজিক্যালি সংরক্ষিত হয়।

ফাইল অর্গানাইজেশনের প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ অর্গানাইজেশন       │ বর্ণনা ও বৈশিষ্ট্য                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ হিপ (আনঅর্ডার্ড)   │ কোনো ক্রম নেই। ইনসার্ট দ্রুত, সার্চ ধীর    │
├─────────────────────┼─────────────────────────────────────────────┤
│ সিকোয়েনশিয়াল     │ কী ফিল্ড অনুযায়ী সাজানো। সার্চ দ্রুত,      │
│                     │ ইনসার্ট ধীর                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ হ্যাশড             │ ডাইরেক্ট অ্যাক্সেসের জন্য হ্যাশ ফাংশন       │
│                     │ সমতা সার্চ দ্রুত, কলিশন সম্ভব               │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্লাস্টার্ড/ইনডেক্সড│ ইনডেক্স পয়েন্টার সহ ডেটা। খুব দ্রুত সার্চ │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 ইনডেক্সিং

সংজ্ঞা: ডেটা পুনরুদ্ধারের গতি বাড়ানোর ডেটা স্ট্রাকচার।

ইনডেক্সের প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ইনডেক্স প্রকার     │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রাইমারি ইনডেক্স  │ প্রাইমারি কী-তে, ফিজিক্যালি ডেটা অর্ডার করে│
├─────────────────────┼─────────────────────────────────────────────┤
│ সেকেন্ডারি ইনডেক্স │ নন-কী কলামে, বিকল্প পাথ প্রদান করে         │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্লাস্টার্ড ইনডেক্স│ ইনডেক্স কী অনুযায়ী ফিজিক্যালি ডেটা সাজানো  │
├─────────────────────┼─────────────────────────────────────────────┤
│ নন-ক্লাস্টার্ড     │ ডেটায় লজিক্যাল পয়েন্টার (পৃথক কাঠামো)    │
│ ইনডেক্স            │                                             │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌲 B+ ট্রি

ডেটাবেসে সবচেয়ে সাধারণ ইনডেক্সিং কাঠামো।

বৈশিষ্ট্য:
• সুষম ট্রি কাঠামো
• সব লিভ একই স্তরে
• অভ্যন্তরীণ নোডে কী + পয়েন্টার থাকে
• লিভ নোডে কী + ডেটা পয়েন্টার থাকে

সুবিধা:
• O(log n) সার্চ, ইনসার্ট, ডিলিট
• দক্ষ রেঞ্জ কোয়েরি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 হ্যাশ টেবিল

স্টোরেজ অবস্থান গণনা করতে হ্যাশ ফাংশন ব্যবহার করে।

কলিশন হ্যান্ডলিং:
• চেইনিং: প্রতি বাকেটে লিংকড লিস্ট
• ওপেন অ্যাড্রেসিং: পরবর্তী খালি স্লট খোঁজা

সুবিধা: সমতা সার্চের জন্য O(1) গড়
অসুবিধা: রেঞ্জ কোয়েরির জন্য অনুপযুক্ত

✅ সারাংশ
• ফাইল অর্গানাইজেশন: হিপ, সিকোয়েনশিয়াল, হ্যাশড, ইনডেক্সড
• স্টোরেজ: প্রাইমারি (RAM), সেকেন্ডারি (HDD/SSD), টারশিয়ারি (টেপ)
• ইনডেক্সিং: প্রাইমারি, সেকেন্ডারি, ক্লাস্টার্ড, নন-ক্লাস্টার্ড
• B+ ট্রি: সুষম, O(log n), রেঞ্জ কোয়েরির জন্য দক্ষ
• হ্যাশ টেবিল: সমতার জন্য O(1), রেঞ্জের জন্য দুর্বল
• কোয়েরি অপ্টিমাইজেশন: কস্ট মডেল ব্যবহার করে সেরা এক্সিকিউশন প্ল্যান বেছে নেওয়া`,
      takeaways: [
        "File Organization: Heap, Sequential, Hashed, Indexed",
        "Storage: Primary (RAM), Secondary (HDD/SSD), Tertiary (Tape)",
        "Indexing: Primary, Secondary, Clustered, Non-clustered",
        "B+ Trees: Balanced, O(log n), efficient for range queries",
        "Hash Tables: O(1) for equality, poor for ranges",
        "Query Optimization: Choose best execution plan using cost model"
      ],
      takeawaysBn: [
        "ফাইল অর্গানাইজেশন: হিপ, সিকোয়েনশিয়াল, হ্যাশড, ইনডেক্সড",
        "স্টোরেজ: প্রাইমারি (RAM), সেকেন্ডারি (HDD/SSD), টারশিয়ারি (টেপ)",
        "ইনডেক্সিং: প্রাইমারি, সেকেন্ডারি, ক্লাস্টার্ড, নন-ক্লাস্টার্ড",
        "B+ ট্রি: সুষম, O(log n), রেঞ্জ কোয়েরির জন্য দক্ষ",
        "হ্যাশ টেবিল: সমতার জন্য O(1), রেঞ্জের জন্য দুর্বল",
        "কোয়েরি অপ্টিমাইজেশন: কস্ট মডেল ব্যবহার করে সেরা এক্সিকিউশন প্ল্যান বেছে নেওয়া"
      ],
      level: "Advanced"
    },
    {
      id: "db5",
      title: "Transactions, Concurrency, Recovery & Advanced Topics",
      titleBn: "ট্রানজেকশন, কনকারেন্সি, রিকভারি ও উন্নত বিষয়",
      content: `📌 TRANSACTION MANAGEMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 What is a Transaction?
A transaction is a sequence of operations performed as a single logical unit of work.
👉 Either all succeed (COMMIT) or none take effect (ROLLBACK).

Example (Bank Transfer):
1. Deduct ₹1000 from Account A
2. Add ₹1000 to Account B

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 ACID Properties

┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Atomicity           │ All or nothing (COMMIT/ROLLBACK)           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Consistency         │ DB remains in valid state before/after     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Isolation           │ Transactions execute as if alone           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Durability          │ Committed changes persist after crash      │
└─────────────────────┴─────────────────────────────────────────────┘

Transaction States:
Active → Partially Committed → Committed
   ↓           ↓
Failed → Aborted

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ CONCURRENCY PROBLEMS

┌─────────────────────┬─────────────────────────────────────────────┐
│ Problem             │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Dirty Read          │ Read uncommitted data from another          │
│                     │ transaction                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Lost Update         │ Two transactions overwrite each other       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-Repeatable Read │ Same query gives different results          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Phantom Read        │ New rows appear/disappear between queries   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 CONCURRENCY CONTROL TECHNIQUES

1. Lock-Based Protocols
• Shared Lock (S): For reading (multiple allowed)
• Exclusive Lock (X): For writing (only one allowed)

Two-Phase Locking (2PL):
• Growing phase: Acquire locks
• Shrinking phase: Release locks

2. Timestamp Ordering
• Each transaction gets unique timestamp
• Operations ordered by timestamp

3. Optimistic Concurrency Control
• Assume conflicts rare
• Execute without locks, validate before commit

4. Multiversion Concurrency Control (MVCC)
• Multiple versions of records
• Readers see snapshot (no locks)
• Used by PostgreSQL, Oracle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ISOLATION LEVELS (SQL Standard)

┌─────────────────────┬───────────┬───────────┬───────────┬──────────┐
│ Isolation Level     │ Dirty Read│ Non-Repeat│ Phantom   │ Performance│
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ Read Uncommitted    │ ✅ Allowed│ ✅ Allowed│ ✅ Allowed│ Fastest    │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ Read Committed      │ ❌ No     │ ✅ Allowed│ ✅ Allowed│ Fast       │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ Repeatable Read     │ ❌ No     │ ❌ No     │ ✅ Allowed│ Slower     │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ Serializable        │ ❌ No     │ ❌ No     │ ❌ No     │ Slowest    │
└─────────────────────┴───────────┴───────────┴───────────┴────────────┘

SQL Example:
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
-- queries here
COMMIT;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💾 RECOVERY

Definition: Restoring database to correct state after failure.

Types of Failures:
• Transaction Failure (error, deadlock)
• System Crash (power, hardware)
• Disk Failure (corruption, bad sectors)

Recovery Techniques:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Technique           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Write-Ahead Logging │ Log changes before writing to database      │
│ (WAL)               │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Checkpointing       │ Periodic snapshot + log truncation          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Backup & Restore    │ Full, incremental, differential backups     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Shadow Paging       │ Shadow copy, switch on commit               │
└─────────────────────┴─────────────────────────────────────────────┘

UNDO for uncommitted, REDO for committed transactions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 ACCESS CONTROL & SECURITY

┌─────────────────────┬─────────────────────────────────────────────┐
│ Mechanism           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Authentication      │ Verify user identity (password, 2FA)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Authorization       │ Decide what user can do (GRANT/REVOKE)      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Encryption          │ Protect data at rest and in transit         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Auditing            │ Track who accessed what                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Views               │ Restrict access to specific columns/rows    │
└─────────────────────┴─────────────────────────────────────────────┘

Access Control Types:
• DAC (Discretionary) - Owner decides
• MAC (Mandatory) - Security labels
• RBAC (Role-Based) - Permissions via roles

SQL Security:
GRANT SELECT ON Employees TO User1;
REVOKE SELECT ON Employees FROM User1;
CREATE ROLE Manager;
GRANT SELECT, UPDATE ON Employees TO Manager;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 SEMI-STRUCTURED DATABASES: XML, XPath, XQuery

XML (eXtensible Markup Language):
<library>
   <book id="1">
      <title>Database Systems</title>
      <author>Navathe</author>
   </book>
   <book id="2">
      <title>Introduction to Algorithms</title>
      <author>CLRS</author>
   </book>
</library>

XPath (XML Path Language):
/library/book/title                    → All titles
/library/book[@id="2"]/author          → Author of book id=2
/library/book/@id                      → All book IDs

XQuery (XML Query Language):
for $b in /library/book
where $b/author = "CLRS"
return $b/title

JSON Alternative (Modern):
{
  "library": {
    "books": [
      {"id": 1, "title": "Database Systems", "author": "Navathe"},
      {"id": 2, "title": "Introduction to Algorithms", "author": "CLRS"}
    ]
  }
}

JSONPath: $.library.books[*].title

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 OBJECT-ORIENTED & OBJECT-RELATIONAL DATABASES

Object-Oriented Database (OODB):
• Stores data as objects (like OOP)
• Supports inheritance, polymorphism, encapsulation
• Examples: db4o, ObjectDB

Object-Relational Database (ORDB):
• Hybrid: Tables + object extensions
• Supports user-defined types, nested tables, inheritance
• Examples: PostgreSQL, Oracle

Comparison:

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ OODB                  │ ORDB                 │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Data Model          │ Objects               │ Tables + objects     │
│ Query Language      │ OQL                   │ SQL with extensions  │
│ Best for            │ Complex apps (CAD)    │ Business + complex   │
│ Examples            │ db4o, ObjectDB        │ PostgreSQL, Oracle   │
└─────────────────────┴──────────────────────┴──────────────────────┘

PostgreSQL ORDB Example:
CREATE TYPE Course AS (courseId INT, courseName TEXT);
CREATE TABLE Students (
   id INT,
   name TEXT,
   courses Course[]
);

✅ SUMMARY
• ACID: Atomicity, Consistency, Isolation, Durability
• Concurrency Control: Locks (2PL), Timestamp, MVCC
• Isolation Levels: Read Uncommitted → Serializable
• Recovery: WAL, Checkpointing, Backups
• Security: Authentication, Authorization (DAC, MAC, RBAC)
• Semi-structured: XML, XPath, XQuery; JSON, JSONPath
• OODB vs ORDB: Objects vs Tables + objects`,
      contentBn: `📌 ট্রানজেকশন ম্যানেজমেন্ট

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ট্রানজেকশন কী?
একটি ট্রানজেকশন হল অপারেশনের একটি ক্রম যা একটি একক লজিক্যাল ইউনিট হিসেবে সম্পাদিত হয়।
👉 হয় সব সফল (COMMIT) অথবা কিছুই হয় না (ROLLBACK)।

উদাহরণ (ব্যাংক ট্রান্সফার):
১. অ্যাকাউন্ট A থেকে ₹1000 কেটে নেওয়া
২. অ্যাকাউন্ট B-তে ₹1000 যোগ করা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔑 ACID বৈশিষ্ট্য

┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাটমিসিটি        │ সব অথবা কিছুই না (COMMIT/ROLLBACK)          │
├─────────────────────┼─────────────────────────────────────────────┤
│ কনসিসটেন্সি        │ DB পূর্বে ও পরে বৈধ অবস্থায় থাকে           │
├─────────────────────┼─────────────────────────────────────────────┤
│ আইসোলেশন           │ ট্রানজেকশন একা চলছে মনে হয়                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডিওরেবিলিটি        │ কমিট করা পরিবর্তন ক্র্যাশের পরও স্থায়ী     │
└─────────────────────┴─────────────────────────────────────────────┘

ট্রানজেকশন অবস্থা:
অ্যাক্টিভ → পার্শিয়ালি কমিটেড → কমিটেড
   ↓           ↓
ফেইলড → অ্যাবোর্টেড

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ কনকারেন্সি সমস্যা

┌─────────────────────┬─────────────────────────────────────────────┐
│ সমস্যা              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডার্টি রিড          │ অন্য ট্রানজেকশনের আনকমিটেড ডেটা পড়া       │
├─────────────────────┼─────────────────────────────────────────────┤
│ লস্ট আপডেট          │ দুটি ট্রানজেকশন একে অপরকে ওভাররাইট করে     │
├─────────────────────┼─────────────────────────────────────────────┤
│ নন-রিপিটেবল রিড    │ একই কোয়েরি ভিন্ন ফলাফল দেয়                │
├─────────────────────┼─────────────────────────────────────────────┤
│ ফ্যান্টম রিড        │ কোয়েরির মধ্যে নতুন সারি দেখা/অদৃশ্য হওয়া  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 কনকারেন্সি কন্ট্রোল কৌশল

১. লক-ভিত্তিক প্রোটোকল
• শেয়ার্ড লক (S): পড়ার জন্য (একাধিক অনুমোদিত)
• এক্সক্লুসিভ লক (X): লেখার জন্য (শুধু একটি অনুমোদিত)

টু-ফেজ লকিং (2PL):
• গ্রোয়িং ফেজ: লক অর্জন
• শ্রিংকিং ফেজ: লক মুক্তি

২. টাইমস্ট্যাম্প অর্ডারিং
• প্রতিটি ট্রানজেকশন অনন্য টাইমস্ট্যাম্প পায়
• টাইমস্ট্যাম্প অনুযায়ী অপারেশন অর্ডার

৩. অপটিমিস্টিক কনকারেন্সি কন্ট্রোল
• দ্বন্দ্ব বিরল ধরে নেয়
• লক ছাড়া এক্সিকিউট, কমিটের আগে বৈধকরণ

৪. মাল্টিভার্সন কনকারেন্সি কন্ট্রোল (MVCC)
• রেকর্ডের একাধিক সংস্করণ
• পাঠকরা স্ন্যাপশট দেখেন (কোনো লক নেই)
• পোস্টগ্রেএসকিউএল, ওরাকল ব্যবহার করে

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 আইসোলেশন লেভেল (SQL স্ট্যান্ডার্ড)

┌─────────────────────┬───────────┬───────────┬───────────┬──────────┐
│ আইসোলেশন লেভেল     │ ডার্টি রিড│ নন-রিপিট│ ফ্যান্টম   │ পারফরম্যান্স│
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ রিড আনকমিটেড       │ ✅ অনুমোদিত│✅ অনুমোদিত│✅ অনুমোদিত│ দ্রুততম   │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ রিড কমিটেড          │ ❌ না     │ ✅ অনুমোদিত│✅ অনুমোদিত│ দ্রুত      │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ রিপিটেবল রিড        │ ❌ না     │ ❌ না     │ ✅ অনুমোদিত│ ধীর       │
├─────────────────────┼───────────┼───────────┼───────────┼────────────┤
│ সিরিয়ালাইজেবল      │ ❌ না     │ ❌ না     │ ❌ না     │ সবচেয়ে ধীর│
└─────────────────────┴───────────┴───────────┴───────────┴────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💾 রিকভারি

সংজ্ঞা: ব্যর্থতার পরে ডেটাবেস সঠিক অবস্থায় পুনরুদ্ধার করা।

ব্যর্থতার প্রকার:
• ট্রানজেকশন ব্যর্থতা (এরর, ডেডলক)
• সিস্টেম ক্র্যাশ (পাওয়ার, হার্ডওয়্যার)
• ডিস্ক ব্যর্থতা (করাপশন, খারাপ সেক্টর)

রিকভারি কৌশল:
• রাইট-অ্যাহেড লগিং (WAL): ডেটাবেসে লেখার আগে লগে পরিবর্তন
• চেকপয়েন্টিং: পর্যায়ক্রমিক স্ন্যাপশট
• ব্যাকআপ ও রিস্টোর: ফুল, ইনক্রিমেন্টাল, ডিফারেনশিয়াল

আনকমিটেডের জন্য UNDO, কমিটেডের জন্য REDO।

✅ সারাংশ
• ACID: অ্যাটমিসিটি, কনসিসটেন্সি, আইসোলেশন, ডিওরেবিলিটি
• কনকারেন্সি কন্ট্রোল: লক (2PL), টাইমস্ট্যাম্প, MVCC
• আইসোলেশন লেভেল: রিড আনকমিটেড → সিরিয়ালাইজেবল
• রিকভারি: WAL, চেকপয়েন্টিং, ব্যাকআপ
• নিরাপত্তা: প্রমাণীকরণ, অনুমোদন (DAC, MAC, RBAC)
• আধা-কাঠামোবদ্ধ: XML, XPath, XQuery; JSON, JSONPath
• OODB বনাম ORDB: অবজেক্ট বনাম টেবিল + অবজেক্ট`,
      takeaways: [
        "ACID ensures reliable transactions",
        "Concurrency control prevents dirty reads, lost updates, phantoms",
        "Isolation levels balance consistency vs performance",
        "Recovery uses WAL, checkpoints, and backups",
        "Security: Authentication, Authorization (DAC, MAC, RBAC)",
        "Semi-structured: XML/XPath/XQuery; JSON/JSONPath",
        "OODB: pure objects; ORDB: tables with object extensions"
      ],
      takeawaysBn: [
        "ACID নির্ভরযোগ্য ট্রানজেকশন নিশ্চিত করে",
        "কনকারেন্সি কন্ট্রোল ডার্টি রিড, লস্ট আপডেট, ফ্যান্টম প্রতিরোধ করে",
        "আইসোলেশন লেভেল কনসিসটেন্সি বনাম পারফরম্যান্স ট্রেড করে",
        "রিকভারি WAL, চেকপয়েন্ট ও ব্যাকআপ ব্যবহার করে",
        "নিরাপত্তা: প্রমাণীকরণ, অনুমোদন (DAC, MAC, RBAC)",
        "আধা-কাঠামোবদ্ধ: XML/XPath/XQuery; JSON/JSONPath",
        "OODB: বিশুদ্ধ অবজেক্ট; ORDB: অবজেক্ট এক্সটেনশন সহ টেবিল"
      ],
      level: "Advanced"
    }
  ]
}

export const module16 = m16