# Question 9 (class diagram), questions 10–13, and start of Question 1 (cache)

- **Source image:** `02_class-diagram-and-short-questions.jpg` (original file name `489652201_1231536202308625_4419017559297215925_n.jpg`)
- **Page:** 2 of 8
- **Paper / Post:** Bangladesh Bank — Assistant Maintenance Engineer (Exam: 04.02.2023, BIBM); compiled as "Previous Exam Questions" / "COMPACT IT Written"
- **Exam date:** 04.02.2023
- **Marks:** not shown

## Transcription Notes

This page contains the printed paper's title block (a scroll graphic) for the Bangladesh Bank Assistant Maintenance Engineer exam, dated 04.02.2023 (BIBM). The opening two paragraphs are a continuation of the answer to Question 8 (end-to-end encryption at the transport vs. application layer) — the question itself is on a previous page and is not visible here. Question 9's answer is a UML class diagram, reproduced below as a textual description of its boxes and connectors since it is a graphic. No question numbers or marks are printed for 9–13. Page footer reads `Page | 7`. Coaching branding is a watermark/footer only; no handwritten marginalia were observed.

## Content

In terms of development cost, it may be more expensive to implement encryption at the transport layer, as it requires more involvement from network infrastructure teams and may require more complex network configurations. Conversely, implementing encryption at the application layer may be less expensive, as it can be implemented directly within the application code.

Ultimately, the choice of layer for implementing end-to-end encryption will depend on the specific requirements and constraints of the system.

**9. Draw A class diagram. A token-ring based local area network (LAN) is a network consisting of nodes in which network packets are sent around. Every node has a unique name within the network, and refers to its next node. Different kinds of nodes exist: Workstations are originators of messages; servers and printers are network nodes that can receive messages. Packets contain an originator a destination and content, and are sent around on a network. A LAN is a circular configuration of nodes.**

**Answer:**

*[UML class diagram as printed. Boxes and labelled relations:]*

**Lan**

| Lan |
|---|
| -name : String |

**Node**

| Node |
|---|
| -name : String |
| -nextNode : Node |
| +accept(p : Packet) |
| +getNextNode() : Node |
| +setNextNode(n : Node) |

**Packet**

| Packet |
|---|
| -originator : String |
| -destination : String |
| -content : String |
| +isOriginator(n : Node) : boolean |
| +isDestination(n : Node) : boolean |
| +getContent() : String |

**Workstation**

| Workstation |
|---|
| +originate() |

**Server**

| Server |
|---|
| +isForMe(p : Packet) : boolean |

**Printer**

| Printer |
|---|
| +print(p : Packet) |

**FileServer**

| FileServer |
|---|
| +save(p : Packet) |

Relations (as annotated in the diagram):

| From | To | Label / notation |
|---|---|---|
| Lan | Node | Class → Association |
| Node | Node | Self-Association |
| Node | Node (`-nextNode`) | Role (association role at the target end) |
| Node | Workstation | Generalization (arrow from Workstation/Server side up to Node) |
| Node | Server | Generalization (arrow from Server side up to Node) |
| Server | Printer | Generalization (arrow from Printer side up to Server) |
| Server | FileServer | Generalization (arrow from FileServer side up to Server) |

Diagram key labels appearing on the figure: Class, Association, Self-Association, Role, Generalization, Attribute, Operation.

**10. Growing use to technology in the Financial Service Industry.**

**11. Given x + 1/x = 17/4, x − 1/x = ?**

**12. Translation English to Bangla.**

**13. Translation Bangla to English.**

---

**Bangladesh Bank**
**Assistant Maintenance Engineer**
**Exam: 04.02.2023 (BIBM)**

**1. Suppose we have a 16 KB of data in a direct mapped cache with 4 word blocks. Determine the size of the tag, index and offset fields if we are using a 32-bit architecture.**

**Answer:** In a direct mapped cache, the memory address is divided into three fields: the tag field, the index field, and the offset field.