# Combined 2 Bank (BSCS) Assistant Database Administrator (ADA) MCQ, 25.09.2021 — Stack IT MCQ sheet

- **Source:** https://www.slideshare.net/slideshow/combined-2-bank-compiled-post-ada-date-25092021-taker-aust-250319950/250319950 (slide images s01–s09 in this folder; URLs in `source-urls.txt`)
- **Publisher:** Stack IT Job Solution ("Compiled By: Stack IT Job Solution", stackvaly.com)
- **Pages:** 9
- **Document type:** exam paper — **MCQ (preliminary) part only**, with the coach's answers and explanations

## Transcription Notes

- Banner as printed: "Banker Selection Commettiee / Combined 2 Bank / Compiled By: Stack IT Job Solution / Post: ADA Exam Type: MCQ / Date: 25.09.2021 Time: 1 Hour / Exam Taker: AUST".
- **Exam taker as printed by the coaching banner — unverified attribution.**
- Transcribed 2026-10-18 from the page images. The paper has 100 MCQs with IT and general items interleaved. 61 are IT (mostly DBMS and Oracle) and are recorded; the other 39 (Bangla, English, GK, maths) are not transcribed: Q1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90.
- The sheet's yellow cross-references ("Stack IT Job solution page-…") point to the publisher's own book and are dropped. Each question keeps its options and the sheet's key; the explanations are not copied. Where the key is wrong or missing, a `> Answer issue:` line gives the checked answer (10 questions: Q10, Q16, Q24, Q34, Q48, Q50, Q53, Q63, Q93, Q95).
- Obvious typos are fixed (Q2 "anomailes … normazized", Q14 "Lsps", Q28 "shema … F" → E, Q30 "nay attrivutes", Q49 "Nedding", Q96 "Embeddes", Q100 "invled").
- Duplicate check: no ADA paper of 2021 was in `ex-question/` before; key `Combined Bank ADA 2021` is new. Q7 (Oracle LGWR) of the SO(IT) paper on the same day is close to Q26 here.

## Content

### Banker Selection Committee — Combined 2 Bank — Assistant Database Administrator (ADA) — MCQ — 25.09.2021 — Exam taker: AUST (as printed by Stack IT; unverified) — 61 IT MCQs of 100

**2.** Which of the following anomalies occur when the database is not normalized?

- (a) Data Insert
- (b) Data Update
- (c) Data delete
- (d) All of the above

Key (sheet): d

**4.** In a database, a network structure model

- (a) Allows many to many relationship
- (b) Is a physical representation of the data
- (c) Allows only one to one relationship.
- (d) Is related to JSON data structure

Key (sheet): a

**6.** A database can be hacked by

- (a) Exploiting weak passwords
- (b) SQL injection
- (c) Delivering a trojan
- (d) All of the above

Key (sheet): d

**8.** Which of the following is not a DDL command?

- (a) ALTER
- (b) DROP
- (c) CREATE
- (d) UPDATE

Key (sheet): d

**10.** Business Intelligence (BI) reporting analyses can be performed using

> Answer issue: key a (standard SQL only); BI reporting uses standard SQL and also SQL extensions (OLAP functions such as ROLLUP and CUBE, windowing). The textbook answer (Kroenke, Database Processing) is (d) Both standard SQL and extensions to SQL.

- (a) Standard SQL Only
- (b) Extensions to SQL only
- (c) OLAP only
- (d) Both standard SQL and extensions to SQL

Key (sheet): a

**12.** The SQL statement "Select round (15.326, -1) from table_1"

- (a) Has syntax error
- (b) Will return garbage
- (c) Will return 326
- (d) Will return 20

Key (sheet): d

**14.** Assume that you want to improve database performance and willing to see the amount of swap space. Which command you can use in LINUX OS environment?

- (a) lsps -a
- (b) swapinfo -m
- (c) swapon -s
- (d) swap -l and swap -s

Key (sheet): c

**16.** In Oracle to change the DB_BLOCK_SIZE parameter, you need to

> Answer issue: key b; DB_BLOCK_SIZE is fixed when the database is created and cannot be changed by ALTER SYSTEM/ALTER DATABASE (the sheet's `alter system set db_block_size=4096 scope=spfile` is rejected). The database has to be re-created, option (a). Other block sizes can only be added per tablespace via DB_nK_CACHE_SIZE.

- (a) Re-create the database
- (b) Alter the database
- (c) Move the database to temporary
- (d) Update the table types of the database

Key (sheet): b

**18.** Which of the following controls the execution of application program and UI in a two tier client/server architecture.

- (a) Server Side
- (b) Host Side
- (c) Modulation Side
- (d) None of the Above

Key (sheet): d

Note: sheet: the client side controls them, which is not an option

**20.** Which one of the following is a failure to a database system?

- (a) System crash
- (b) Execution failure
- (c) Transaction failure
- (d) All of a, b, c

Key (sheet): c

**22.** Referential integrity in a DBMS is a special form of

- (a) Foreign key
- (b) Primary key
- (c) Assertion
- (d) Referential constraint

Key (sheet): c

**24.** How can you rollback a committed transaction in any DBMS?

> Answer issue: key d contradicts the sheet's own explanation ("You cannot roll back a transaction once it has committed"); ROLLBACK cannot undo a commit, so the answer is (b) restoring from backups (or point-in-time recovery).

- (a) Using SQL rollback command
- (b) Restoring the data from backups
- (c) Run the transaction again in reverse order
- (d) All of the Above.

Key (sheet): d

**26.** In Oracle DBMS, LGWR process writes information into

- (a) Database files
- (b) Control files
- (c) Redolog files
- (d) All of a, b, c

Key (sheet): c

**28.** In a schema with attributes A, B, C, D and E following set of functional dependencies are given: A -> B, A -> C, CD -> E, B -> D, E -> A. Which of the following functional dependencies is not implied by the above set?

- (a) CD -> AC
- (b) BD -> CD
- (c) BC -> CD
- (d) AC -> BC

Key (sheet): b

**30.** Let E1 and E2 be two entities in an E/R diagram with simple single valued attributes. R1 and R2 are two relationships between E1 and E2, where R1 is one to many, and R2 is many to many. R1 and R2 do not have any attributes of their own. What is the minimum number of tables required to represent this situation in the relational model?

- (a) 2
- (b) 3
- (c) 4
- (d) 5

Key (sheet): b

**32.** Which of the following is an appropriate category of system maintenance performed for the purpose of modifying the system to cope with changes in the software environment (e.g. DBMS, Operating System)?

- (a) Adaptive maintenance
- (b) Corrective maintenance
- (c) Perfective maintenance
- (d) Preventive maintenance

Key (sheet): a

**34.** The packaged procedure that makes data in form permanent in the database is

> Answer issue: key d; in Oracle Forms the built-in COMMIT_FORM writes the form's changes and commits them, making them permanent (POST only writes them without a commit), option (c).

- (a) Post
- (b) Post form
- (c) Commit form
- (d) None of a, b, c

Key (sheet): d

**36.** Which of the following is correct for the Create index command?

- (a) Insert index index_name on table_name
- (b) Insert index index_name on database_name;
- (c) Create index index_name on database_name;
- (d) Create index index_name on table_name;

Key (sheet): d

**38.** Third Normal form is based on the concept of

- (a) Closure dependency
- (b) Transitive Dependency
- (c) Normal Dependency
- (d) Functional Dependency

Key (sheet): b

**39.** EDSAC কম্পিউটার এ ডাটা সংরক্ষণের জন্য কি ধরণের মেমরি ব্যবহার হত? (What kind of memory did the EDSAC computer use to store data?)

- (a) RAM
- (b) ROM
- (c) Mercury Delay Lines
- (d) Registers

Key (sheet): c

**40.** What are the different events in Triggers?

- (a) Define, Create
- (b) Drop, Comment
- (c) Insert, Update, Delete
- (d) All of a, b, c

Key (sheet): c

**41.** Which one of the following is true for a tuple in a database?

- (a) A tuple in a database represents a column
- (b) A tuple in a database represents database schema.
- (c) A tuple in a database represents a Record
- (d) A tuple in a database represents a Database topology.

Key (sheet): c

**42.** Which one of the following is not a non-volatile storage device?

- (a) SSD
- (b) Hard Disk Drive
- (c) LPDDR
- (d) NVRAM

Key (sheet): c

**43.** XSLT processors evaluate each statement in the context of the match that has been made. That is, XSLT processors are

- (a) Context oriented
- (b) Procedural oriented
- (c) Object oriented.
- (d) Relational oriented

Key (sheet): a

**44.** When three or more AND and OR conditions are combined, it is easier to use the SQL keyword(s)

- (a) NOT IN only
- (b) LIKE only
- (c) IN only
- (d) Both IN and NOT IN

Key (sheet): d

**45.** How to select all data from student table starting the name from letter 'r'?

- (a) Select * from student where name like 'r%';
- (b) Select * from student where name like '%r%';
- (c) Select * from student where name like '%r';
- (d) Select * from student where name like '_r%';

Key (sheet): a

**46.** In an asymmetric key encryption process, the key used to encrypt the data is known as a

- (a) Private key
- (b) Encryption key
- (c) Public key
- (d) Modulation key

Key (sheet): c

**47.** Why is set transaction used in an Oracle DBMS?

- (a) For placing a name on a transaction
- (b) For committing a transaction
- (c) For locking a transaction
- (d) To setup transaction user parameters.

Key (sheet): d

**48.** Your backup strategy includes the use of incremental backups using the export utility. Which export parameter indicates that an export should be incremental?

> Answer issue: key a (DIRECT selects direct-path export, not incremental). In Oracle's original exp utility, INCTYPE=INCREMENTAL (or CUMULATIVE/COMPLETE) makes the export incremental, option (c).

- (a) Direct
- (b) ExpType
- (c) INCTYPE
- (d) None of the above

Key (sheet): a

**49.** Needing to assess the validity of assumed referential integrity constraints on foreign keys is a(n) ___ of normalization.

- (a) Advantage
- (b) disadvantage
- (c) Either an advantage or disadvantage
- (d) Neither an advantage nor disadvantage.

Key (sheet): d

**50.** Which is the Oracle component that contains the memory structures and background processes?

> Answer issue: no key printed (the explanation only describes the SGA). An Oracle instance is the SGA memory structures plus the background processes, option (a).

- (a) Instance
- (b) Server
- (c) Database
- (d) Database files

Key (sheet): none printed

**51.** The three different application logic components are. Which of the following?

- (a) Presentation, Client and Storage
- (b) Presentation, Client and processing
- (c) Presentation, Processing and Storage
- (d) Presentation, processing and Network

Key (sheet): c

**53.** Data integrity problem in a DBMS is caused due to

> Answer issue: key b names the symptom, not the cause. Data integrity problems arise because the same data is stored in several places (data redundancy), which then lets copies disagree (inconsistency), option (c).

- (a) Missing data
- (b) Data inconsistency
- (c) Data redundancy
- (d) Security constraints

Key (sheet): b

**55.** A collection of theoretical tools for describing data, relationships among data, data semantics and data constraints is referred to as

- (a) Data Model
- (b) DBMS
- (c) Database
- (d) ER Model

Key (sheet): a

**57.** The fastest read/write time and most efficient data storage of any disk array type is

- (a) RAID-0
- (b) RAID-1
- (c) RAID-2
- (d) RAID-3

Key (sheet): a

**59.** Which of the following is not a factor in determining the concurrency control behavior of SQL-Server?

- (a) Lock Level
- (b) Transaction isolation level
- (c) Cursor concurrency setting
- (d) Locking hints

Key (sheet): a

**61.** Which of the following is an appropriate description of the mapping between the relational model and relational database as its implementation?

- (a) A domain is mapped to a character type or a character string type.
- (b) A relation is mapped to a table.
- (c) Attributes and columns are ordered from left to right
- (d) Neither tuples nor rows have duplicates.

Key (sheet): b

**63.** In a DBMS, when multiple transaction programs update the same database simultaneously, which of the following is a technology that is used to prevent logical contradictions?

> Answer issue: key b; keeping concurrent updates from producing contradictions is the job of exclusive control (locking), option (a). This is a Japanese IT Engineers Examination item whose official answer is exclusive control; integrity constraints check single values, not concurrent updates.

- (a) Exclusive Control
- (b) Integrity constraint
- (c) Normalization
- (d) Reorganization

Key (sheet): b

**65.** The application program interface in a two-tier architecture DBMS is provided by

- (a) Close module connectivity
- (b) Open module connectivity
- (c) Open database connectivity
- (d) Close database connectivity

Key (sheet): c

**67.** Which of the below is responsible for controlling the interaction among simultaneous transactions?

- (a) Serializable controller
- (b) Concurrency Control Manager
- (c) Transportation management system
- (d) Multiple Access Protocol.

Key (sheet): b

**69.** Of the functions provided by a DBMS, which of the following is a means for achieving protection for data confidentiality?

- (a) Checking referential constraints when the data is updated
- (b) Managing a transaction that combines a series of processes as a logical unit.
- (c) Managing the data access rights of users.
- (d) Placing an exclusive lock on the data before it is updated.

Key (sheet): c

**71.** In strict two phase locking protocol

- (a) All exclusive mode locks taken by transaction be held until transaction commit
- (b) All exclusive mode locks taken by transaction can be released before transaction commits.
- (c) All locks can be released before transaction commits.
- (d) None of these

Key (sheet): a

**73.** The maximum number of super keys for the relation schema R(E, F, G, H) with E as the key is

- (a) 5
- (b) 6
- (c) 7
- (d) 8

Key (sheet): d

**75.** Oracle materialized views or SNAPSHOTS is used for

- (a) Hiding data from users
- (b) Dynamic data replication
- (c) Table Space Reduction
- (d) Data Abstraction

Key (sheet): b

**77.** A distributed database is advantageous over a centralized database system in terms of

- (a) Fast Response
- (b) Software Complexity
- (c) Modular Growth
- (d) Software cost

Key (sheet): c

**79.** Which is not the UTL_FILE function?

- (a) FOPEN()
- (b) File_Close()
- (c) FCOPY
- (d) FFLUSH()

Key (sheet): b

**81.** How can you generate debugging output from PL/SQL?

- (a) DBMS_SQL
- (b) DBMS_OUTPUT
- (c) DBMS_PIPE
- (d) DBMS_LOB

Key (sheet): b

**83.** Database index speeds up

- (a) Select queries
- (b) Where clauses
- (c) Update query
- (d) Both a and b

Key (sheet): d

**85.** Which of the following index is automatically created by the database server when an object is created?

- (a) Implicit
- (b) Single column
- (c) Unique
- (d) Composite

Key (sheet): a

**87.** GET_BLOCK_PROPERTY is a

- (a) Restricted procedure
- (b) Unrestricted procedure
- (c) Library function
- (d) None of the Above

Key (sheet): d

**89.** Which of these is not a common reason a business chooses to go with a data center colocation service for disaster recovery instead of building a new data center?

- (a) Full control of Hardware
- (b) Security and location
- (c) Cost of building data centers.
- (d) Granular climate control

Key (sheet): c

**91.** Which of the following are the five built in functions provided by SQL?

- (a) COUNT, SUM, AVG, MAX, MIN
- (b) SUM, AVG, MIN, MAX, MULT
- (c) SUM, AVG, MULT, DIV, MIN
- (d) SUM, AVG, MIN, MAX, NAME

Key (sheet): a

**92.** Which of the following is a technique for hiding the internal implementation details of an object?

- (a) Encapsulation
- (b) Polymorphism
- (c) Inheritance
- (d) All of a, b & c

Key (sheet): a

**93.** How does RAID provide data protection?

> Answer issue: key b; striping alone (RAID 0) gives no protection. RAID protects data by mirroring (RAID 1) or parity (RAID 5/6), option (a).

- (a) Using either data mirroring or parity
- (b) Using either data mirroring or striping
- (c) Using high quality disk drives
- (d) Using dedicated data protection hardware.

Key (sheet): b

**94.** A DNS client is called a

- (a) DNS Updater
- (b) DNS handler
- (c) DNS resolver
- (d) DNS host

Key (sheet): c

**95.** ROLLBACK command is used to undo the changes made by

> Answer issue: key d contradicts the sheet's own explanation (ROLLBACK reverts changes "since last COMMIT"); it cannot undo a COMMIT. ROLLBACK undoes uncommitted DML changes, option (c).

- (a) DDL commands
- (b) TCL commands
- (c) DML Commands.
- (d) Commit command

Key (sheet): d

**96.** Embedded SQL is which of the following?

- (a) Hard coded SQL statements in a programming language such as Java.
- (b) The process of making an application capable of generating specific SQL code on the fly.
- (c) Hard-coded SQL statements in a procedure.
- (d) Hard coded SQL statements in a trigger

Key (sheet): a

**97.** In a comparatively small organization, if you want data forwarding among departments based on IP addresses, which one of the following will be a better bet for networking?

- (a) Using Layer-3 routers
- (b) Using Layer-3 switches
- (c) Using Unmanaged switches
- (d) Combining a and b

Key (sheet): d

**98.** A star schema has what type of relationship between a dimension and fact table?

- (a) Many to many
- (b) One to one
- (c) One to many
- (d) All of the above

Key (sheet): c

**99.** What does this query do?
```text
Select employee_number, name from employees as parent where salary > (select avg(salary) from employees where department = parent.department)
```

- (a) Finds the name and ID of employees who get more than average salaries.
- (b) Finds the employee's name and ID of those who get more than average salaries of all the departments
- (c) Finds the name and ID of employees who get more than average salaries of his own department.
- (d) None

Key (sheet): c

**100.** What is invoked via HTTP on the web server computer when it responds to requests from a user's Web browser?

- (a) A Java Application
- (b) A Java Applet
- (c) A Java Servlet
- (d) None of the Above.

Key (sheet): c
