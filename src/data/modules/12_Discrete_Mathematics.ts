import type { Module } from '../../types'

const m12: Module = {
  title: "12. Discrete Mathematics",
  titleBn: "১২. ডিসক্রিট গণিত",
  level: "Intermediate",
  lessons: [
    {
      id: "dm1",
      title: "Set Theory, Relations & Functions",
      titleBn: "সেট তত্ত্ব, সম্পর্ক ও ফাংশন",
      content: `📌 SET THEORY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A set is a collection of distinct, well-defined objects (elements or members).

Example: A = {1, 2, 3, 4}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Representation of Sets:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Form                │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Roster Form         │ Listing all elements                        │
│                     │ A = {2, 4, 6, 8}                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Set-Builder Form    │ Describes elements using a property         │
│                     │ A = {x | x is even number less than 10}     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Types of Sets:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description & Example                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Finite Set          │ Limited number of elements                   │
│                     │ {1, 2, 3}                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Infinite Set        │ Unlimited elements                          │
│                     │ {1, 2, 3, ...}                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Null/Empty Set (Ø)  │ No elements                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Singleton Set       │ Only one element {a}                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Equal Sets          │ Same elements {1,2,3} = {3,2,1}             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Subset (A ⊆ B)      │ All elements of A are in B                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Proper Subset (A⊂B) │ A ⊆ B and A ≠ B                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Universal Set (U)   │ All possible elements under discussion      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complement (A')     │ Elements not in A but in U                  │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Set Operations:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Operation           │ Symbol & Example                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Union               │ A ∪ B = {x | x ∈ A or x ∈ B}                │
│                     │ {1,2} ∪ {2,3} = {1,2,3}                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Intersection        │ A ∩ B = {x | x ∈ A and x ∈ B}               │
│                     │ {1,2} ∩ {2,3} = {2}                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Difference          │ A - B = {x | x ∈ A and x ∉ B}               │
│                     │ {1,2,3} - {2,3} = {1}                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complement          │ A' = {x | x ∈ U and x ∉ A}                  │
│                     │ U={1,2,3,4}, A={1,2} → A'={3,4}             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cartesian Product   │ A × B = {(a,b) | a ∈ A, b ∈ B}              │
│                     │ {1,2} × {x,y} = {(1,x),(1,y),(2,x),(2,y)}   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 Laws of Set Algebra:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Law                 │ Expression                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Commutative         │ A ∪ B = B ∪ A,  A ∩ B = B ∩ A               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Associative         │ (A ∪ B) ∪ C = A ∪ (B ∪ C)                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distributive        │ A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Identity            │ A ∪ ∅ = A,  A ∩ U = A                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complement          │ A ∪ A' = U,  A ∩ A' = ∅                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Idempotent          │ A ∪ A = A,  A ∩ A = A                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ De Morgan's Laws    │ (A ∪ B)' = A' ∩ B',  (A ∩ B)' = A' ∪ B'     │
└─────────────────────┴─────────────────────────────────────────────┘

Venn Diagram Visualization:
        ┌─────────────────┐
        │      U          │
        │   ┌───┐ ┌───┐   │
        │   │ A │ │ B │   │
        │   └───┘ └───┘   │
        │    A ∪ B        │
        └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 RELATIONS

Definition: A relation R from set A to set B is a subset of A × B.
R ⊆ A × B

Example: A = {1, 2, 3}, B = {x, y}
R = {(1, x), (2, y)} is a relation from A to B

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Relations:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Definition                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reflexive           │ (a, a) ∈ R for all a ∈ A                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Symmetric           │ (a, b) ∈ R → (b, a) ∈ R                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Transitive          │ (a,b)∈R and (b,c)∈R → (a,c)∈R               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Antisymmetric       │ (a,b)∈R and (b,a)∈R → a = b                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Equivalence         │ Reflexive + Symmetric + Transitive          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Partial Order       │ Reflexive + Antisymmetric + Transitive      │
└─────────────────────┴─────────────────────────────────────────────┘

Representation of Relations:
• Set of ordered pairs: R = {(1,x), (2,y)}
• Matrix representation: 0-1 matrix
• Graphical: Vertices and directed edges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ FUNCTIONS

Definition: A function f: A → B is a relation where every element of A maps to exactly one element of B.

• Domain: Set A
• Codomain: Set B
• Range: Actual elements in B mapped from A

Example: A = {1, 2, 3}, B = {x, y, z}
f = {(1, x), (2, y), (3, z)} → function

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Functions:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ One-to-One          │ No two elements of A map to same element    │
│ (Injective)         │ in B. f(a₁) = f(a₂) ⇒ a₁ = a₂               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Onto (Surjective)   │ Every element of B is mapped by some        │
│                     │ element of A. ∀b∈B ∃a∈A: f(a)=b             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Bijective           │ Both one-to-one and onto                    │
└─────────────────────┴─────────────────────────────────────────────┘

Function Operations:
• Composition: (f ∘ g)(x) = f(g(x))
• Inverse: f⁻¹(y) = x if f(x) = y
• Identity: I(x) = x

✅ SUMMARY
• Set: Collection of distinct elements
• Set Operations: Union (∪), Intersection (∩), Difference (-), Complement (')
• Relations: Subset of Cartesian product
• Functions: Each input maps to exactly one output
• Injective: one-to-one, Surjective: onto, Bijective: both`,
      contentBn: `📌 সেট তত্ত্ব

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি সেট হল স্বতন্ত্র, সু-সংজ্ঞায়িত বস্তুর সংগ্রহ (উপাদান বা সদস্য)।

উদাহরণ: A = {1, 2, 3, 4}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 সেটের উপস্থাপন:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ফর্ম                │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ রোস্টার ফর্ম       │ সব উপাদান তালিকাভুক্ত                       │
│                     │ A = {2, 4, 6, 8}                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ সেট-বিল্ডার ফর্ম    │ একটি বৈশিষ্ট্য ব্যবহার করে উপাদান বর্ণনা     │
│                     │ A = {x | x জোড় সংখ্যা এবং ১০-এর কম}       │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 সেটের প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ সসীম সেট            │ সীমিত সংখ্যক উপাদান                         │
│                     │ {1, 2, 3}                                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ অসীম সেট            │ অসীম উপাদান                                 │
│                     │ {1, 2, 3, ...}                              │
├─────────────────────┼─────────────────────────────────────────────┤
│ শূন্য সেট (Ø)       │ কোনো উপাদান নেই                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ একক সেট             │ শুধুমাত্র একটি উপাদান {a}                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ সমান সেট            │ একই উপাদান {1,2,3} = {3,2,1}                │
├─────────────────────┼─────────────────────────────────────────────┤
│ উপসেট (A ⊆ B)       │ A-এর সব উপাদান B-তে আছে                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রকৃত উপসেট (A⊂B)  │ A ⊆ B এবং A ≠ B                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ সার্বজনীন সেট (U)   │ আলোচনার অধীনে সব সম্ভাব্য উপাদান            │
├─────────────────────┼─────────────────────────────────────────────┤
│ পূরক (A')           │ A-তে নেই কিন্তু U-তে আছে এমন উপাদান         │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 সেট অপারেশন:

┌─────────────────────┬─────────────────────────────────────────────┐
│ অপারেশন             │ প্রতীক ও উদাহরণ                            │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইউনিয়ন             │ A ∪ B = {x | x ∈ A অথবা x ∈ B}              │
│                     │ {1,2} ∪ {2,3} = {1,2,3}                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইন্টারসেকশন        │ A ∩ B = {x | x ∈ A এবং x ∈ B}               │
│                     │ {1,2} ∩ {2,3} = {2}                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডিফারেন্স          │ A - B = {x | x ∈ A এবং x ∉ B}               │
│                     │ {1,2,3} - {2,3} = {1}                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ পূরক                │ A' = {x | x ∈ U এবং x ∉ A}                  │
│                     │ U={1,2,3,4}, A={1,2} → A'={3,4}             │
├─────────────────────┼─────────────────────────────────────────────┤
│ কার্টেশিয়ান প্রোডাক্ট│ A × B = {(a,b) | a ∈ A, b ∈ B}            │
│                     │ {1,2} × {x,y} = {(1,x),(1,y),(2,x),(2,y)}   │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• সেট: স্বতন্ত্র উপাদানের সংগ্রহ
• সেট অপারেশন: ইউনিয়ন (∪), ইন্টারসেকশন (∩), ডিফারেন্স (-), পূরক (')
• সম্পর্ক: কার্টেশিয়ান প্রোডাক্টের উপসেট
• ফাংশন: প্রতিটি ইনপুট ঠিক একটি আউটপুটে ম্যাপ করে
• ইনজেক্টিভ: এক-থেকে-এক, সার্জেক্টিভ: onto, বাইজেক্টিভ: উভয়ই`,
      takeaways: [
        "Set: Collection of distinct elements",
        "Set Operations: Union (∪), Intersection (∩), Difference (-), Complement (')",
        "Relations: Subset of Cartesian product (A × B)",
        "Functions: Each input maps to exactly one output",
        "Injective: one-to-one, Surjective: onto, Bijective: both"
      ],
      takeawaysBn: [
        "সেট: স্বতন্ত্র উপাদানের সংগ্রহ",
        "সেট অপারেশন: ইউনিয়ন (∪), ইন্টারসেকশন (∩), ডিফারেন্স (-), পূরক (')",
        "সম্পর্ক: কার্টেশিয়ান প্রোডাক্টের উপসেট (A × B)",
        "ফাংশন: প্রতিটি ইনপুট ঠিক একটি আউটপুটে ম্যাপ করে",
        "ইনজেক্টিভ: এক-থেকে-এক, সার্জেক্টিভ: onto, বাইজেক্টিভ: উভয়ই"
      ],
      level: "Intermediate"
    },
    {
      id: "dm2",
      title: "Graph Theory, Propositional & Predicate Calculus",
      titleBn: "গ্রাফ তত্ত্ব, প্রপোজিশনাল ও প্রেডিকেট ক্যালকুলাস",
      content: `📌 GRAPH THEORY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: A graph G = (V, E) where V = set of vertices (nodes), E = set of edges (connections).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Types of Graphs:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Undirected Graph    │ Edges have no direction                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Directed Graph      │ Edges have direction (u → v)                │
│ (Digraph)           │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ Weighted Graph      │ Edges carry weights                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Simple Graph        │ No loops, no multiple edges                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complete Graph (Kₙ) │ Every vertex connected to every other       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Bipartite Graph     │ Vertices in two sets, edges only between    │
│                     │ sets                                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Tree                │ Connected, acyclic graph                    │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Graph Terminology:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Term                │ Definition                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Vertex (Node)       │ A point in a graph                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Edge (Link)         │ Connection between vertices                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Degree              │ Number of edges incident to a vertex        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Path                │ Sequence of edges connecting vertices       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Cycle               │ Path that starts and ends at same vertex    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Connected Graph     │ Path exists between any two vertices        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Subgraph            │ Graph formed from subset of vertices/edges  │
└─────────────────────┴─────────────────────────────────────────────┘

Graph Representation:
• Adjacency Matrix: n × n matrix (O(V²) space)
• Adjacency List: Array of lists per vertex (O(V+E) space)

Tree Properties:
• n vertices → n-1 edges
• Unique path between any two vertices
• Adding any edge creates a cycle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 PROPOSITIONAL CALCULUS

Definition: Propositional logic deals with statements that are either true or false.

Proposition: Statement that is either true or false.
Example: P = "It is raining", Q = "2 + 2 = 4"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Logical Connectives:

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Connective          │ Symbol   │ Truth                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Negation            │ ¬P       │ T→F, F→T                        │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Conjunction (AND)   │ P ∧ Q    │ T only if both T                 │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Disjunction (OR)    │ P ∨ Q    │ F only if both F                 │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Exclusive OR (XOR)  │ P ⊕ Q    │ T if exactly one is T            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Implication         │ P → Q    │ F only when P=T, Q=F             │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Biconditional       │ P ↔ Q    │ T if both same truth value       │
└─────────────────────┴──────────┴─────────────────────────────────┘

Truth Table for P → Q:
┌───────┬───────┬─────────────┐
│ P     │ Q     │ P → Q       │
├───────┼───────┼─────────────┤
│ T     │ T     │ T           │
│ T     │ F     │ F           │
│ F     │ T     │ T           │
│ F     │ F     │ T           │
└───────┴───────┴─────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Laws of Propositional Logic:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Law                 │ Expression                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Identity            │ P ∧ T ≡ P,  P ∨ F ≡ P                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Domination          │ P ∧ F ≡ F,  P ∨ T ≡ T                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Idempotent          │ P ∧ P ≡ P,  P ∨ P ≡ P                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Complement          │ P ∧ ¬P ≡ F,  P ∨ ¬P ≡ T                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Commutative         │ P ∧ Q ≡ Q ∧ P,  P ∨ Q ≡ Q ∨ P               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Associative         │ (P∧Q)∧R ≡ P∧(Q∧R), (P∨Q)∨R ≡ P∨(Q∨R)        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Distributive        │ P∧(Q∨R) ≡ (P∧Q)∨(P∧R)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ De Morgan's         │ ¬(P∧Q) ≡ ¬P ∨ ¬Q, ¬(P∨Q) ≡ ¬P ∧ ¬Q           │
└─────────────────────┴─────────────────────────────────────────────┘

Special Terms:
• Tautology: Always true (e.g., P ∨ ¬P)
• Contradiction: Always false (e.g., P ∧ ¬P)
• Contingency: Sometimes true, sometimes false

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 PREDICATE CALCULUS (First-Order Logic)

Definition: Predicate logic extends propositional logic with variables, predicates, and quantifiers.

Predicate: Property or relation involving variables
Example: P(x): "x is even"

Quantifiers:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ Quantifier          │ Symbol   │ Meaning                         │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Universal           │ ∀x       │ "For all x"                     │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ Existential         │ ∃x       │ "There exists x"                │
└─────────────────────┴──────────┴─────────────────────────────────┘

Examples:
• "All humans are mortal" → ∀x (Human(x) → Mortal(x))
• "There exists a prime number greater than 100" → ∃x (Prime(x) ∧ x > 100)

Difference from Propositional Logic:
┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ Propositional Logic  │ Predicate Logic      │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Deals with          │ Whole statements     │ Internal structure   │
│ Variables           │ No                   │ Yes (x, y, ...)      │
│ Quantifiers         │ Not used             │ ∀ (for all), ∃ (exists)│
│ Expressiveness      │ Limited              │ Much more expressive │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Graph: G = (V, E) with vertices and edges
• Tree: Connected, acyclic, n-1 edges
• Propositional Logic: True/false statements with connectives
• Predicate Logic: Adds variables, predicates, quantifiers (∀, ∃)
• Applications: Logic circuits, algorithms, AI, formal proofs`,
      contentBn: `📌 গ্রাফ তত্ত্ব

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: একটি গ্রাফ G = (V, E) যেখানে V = শীর্ষবিন্দুর সেট, E = এজের সেট।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 গ্রাফের প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ আনডিরেক্টেড গ্রাফ  │ এজের দিক নেই                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ ডিরেক্টেড গ্রাফ     │ এজের দিক আছে (u → v)                       │
│ (ডাইগ্রাফ)          │                                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ ওয়েটেড গ্রাফ       │ এজের ওজন আছে                               │
├─────────────────────┼─────────────────────────────────────────────┤
│ সরল গ্রাফ           │ কোনো লুপ নেই, কোনো একাধিক এজ নেই           │
├─────────────────────┼─────────────────────────────────────────────┤
│ সম্পূর্ণ গ্রাফ (Kₙ) │ প্রতিটি শীর্ষবিন্দু অপরটির সাথে সংযুক্ত     │
├─────────────────────┼─────────────────────────────────────────────┤
│ বাইপার্টাইট গ্রাফ   │ শীর্ষবিন্দু দুই সেটে, এজ শুধুমাত্র সেটের মধ্যে│
├─────────────────────┼─────────────────────────────────────────────┤
│ ট্রি                │ সংযুক্ত, অ্যাসাইক্লিক গ্রাফ                 │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 প্রপোজিশনাল ক্যালকুলাস

সংজ্ঞা: প্রপোজিশনাল লজিক এমন বিবৃতি নিয়ে কাজ করে যা সত্য বা মিথ্যা।

প্রতিজ্ঞা: বিবৃতি যা সত্য অথবা মিথ্যা।
উদাহরণ: P = "বৃষ্টি হচ্ছে", Q = "২ + ২ = ৪"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

লজিক্যাল কানেক্টিভ:

┌─────────────────────┬──────────┬─────────────────────────────────┐
│ কানেক্টিভ           │ চিহ্ন    │ সত্যতা                          │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ নিগেশন              │ ¬P       │ T→F, F→T                        │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ কনজাংশন (AND)       │ P ∧ Q    │ T শুধু যদি উভয় T হয়           │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ডিসজাংশন (OR)       │ P ∨ Q    │ F শুধু যদি উভয় F হয়           │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ইমপ্লিকেশন          │ P → Q    │ F শুধু যখন P=T, Q=F             │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ বাইকন্ডিশনাল       │ P ↔ Q    │ T যদি উভয়ের সত্য মান সমান হয়   │
└─────────────────────┴──────────┴─────────────────────────────────┘

বিশেষ পদ:
• টটোলজি: সবসময় সত্য (যেমন, P ∨ ¬P)
• কন্ট্রাডিকশন: সবসময় মিথ্যা (যেমন, P ∧ ¬P)
• কন্টিঞ্জেন্সি: কখনো সত্য, কখনো মিথ্যা

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 প্রেডিকেট ক্যালকুলাস (ফার্স্ট-অর্ডার লজিক)

সংজ্ঞা: প্রেডিকেট লজিক প্রপোজিশনাল লজিককে ভেরিয়েবল, প্রেডিকেট ও কোয়ান্টিফায়ার দিয়ে প্রসারিত করে।

প্রেডিকেট: ভেরিয়েবল জড়িত বৈশিষ্ট্য বা সম্পর্ক
উদাহরণ: P(x): "x জোড়"

কোয়ান্টিফায়ার:
┌─────────────────────┬──────────┬─────────────────────────────────┐
│ কোয়ান্টিফায়ার     │ চিহ্ন    │ অর্থ                            │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ ইউনিভার্সাল        │ ∀x       │ "সব x-এর জন্য"                  │
├─────────────────────┼──────────┼─────────────────────────────────┤
│ এক্সিস্টেনশিয়াল   │ ∃x       │ "এমন x আছে"                     │
└─────────────────────┴──────────┴─────────────────────────────────┘

উদাহরণ:
• "সব মানুষ নশ্বর" → ∀x (Human(x) → Mortal(x))
• "১০০-এর চেয়ে বড় একটি মৌলিক সংখ্যা আছে" → ∃x (Prime(x) ∧ x > 100)

✅ সারাংশ
• গ্রাফ: G = (V, E) শীর্ষবিন্দু ও এজ সহ
• ট্রি: সংযুক্ত, অ্যাসাইক্লিক, n-1 এজ
• প্রপোজিশনাল লজিক: কানেক্টিভ সহ সত্য/মিথ্যা বিবৃতি
• প্রেডিকেট লজিক: ভেরিয়েবল, প্রেডিকেট, কোয়ান্টিফায়ার যোগ করে (∀, ∃)`,
      takeaways: [
        "Graph: G = (V, E) with vertices and edges",
        "Tree: Connected, acyclic, n vertices → n-1 edges",
        "Propositional Logic: True/false statements with connectives (∧, ∨, ¬, →, ↔)",
        "Predicate Logic: Adds variables, predicates, quantifiers (∀, ∃)",
        "Tautology: always true, Contradiction: always false"
      ],
      takeawaysBn: [
        "গ্রাফ: G = (V, E) শীর্ষবিন্দু ও এজ সহ",
        "ট্রি: সংযুক্ত, অ্যাসাইক্লিক, n শীর্ষবিন্দু → n-1 এজ",
        "প্রপোজিশনাল লজিক: কানেক্টিভ সহ সত্য/মিথ্যা বিবৃতি (∧, ∨, ¬, →, ↔)",
        "প্রেডিকেট লজিক: ভেরিয়েবল, প্রেডিকেট, কোয়ান্টিফায়ার যোগ করে (∀, ∃)",
        "টটোলজি: সবসময় সত্য, কন্ট্রাডিকশন: সবসময় মিথ্যা"
      ],
      level: "Intermediate"
    },
    {
      id: "dm3",
      title: "Mathematical Reasoning: Induction, Contradiction & Recursion",
      titleBn: "গাণিতিক যুক্তি: ইন্ডাকশন, কন্ট্রাডিকশন ও রিকার্শন",
      content: `📌 MATHEMATICAL REASONING

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Mathematical reasoning is the logical process of deducing conclusions from given statements or premises.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 1. MATHEMATICAL INDUCTION

Definition: A technique to prove statements about natural numbers.

Steps:
1. Base Case: Verify statement true for first value (n = 0 or 1)
2. Induction Step: Assume true for n = k, prove for n = k + 1

Example: Prove 1 + 2 + 3 + ... + n = n(n+1)/2

Base Case (n=1):
LHS = 1, RHS = 1(1+1)/2 = 1 ✓

Induction Hypothesis: Assume true for n = k
1 + 2 + ... + k = k(k+1)/2

Induction Step (n = k+1):
1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1)
= (k+1)(k/2 + 1) = (k+1)(k+2)/2 ✓

Thus, statement holds for all n ≥ 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2. PROOF BY CONTRADICTION

Definition: Assume the statement is false and show this leads to a contradiction.

Example: Prove √2 is irrational.

Proof:
1. Assume √2 is rational → √2 = p/q, gcd(p,q)=1
2. Square both sides: 2 = p²/q² → p² = 2q²
3. p² is even → p is even → p = 2k
4. Substitute: (2k)² = 2q² → 4k² = 2q² → q² = 2k²
5. q² is even → q is even
6. Both p and q even → gcd(p,q) ≠ 1 ❌ Contradiction
7. Therefore, √2 is irrational ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 3. RECURSION

Definition: A method of defining functions or sequences in terms of smaller instances of themselves.

Examples:

Factorial Function:
┌─────────────────────────────────────────────────────────────────┐
│ n! = { 1                    if n = 0                           │
│       { n × (n-1)!          if n > 0                           │
└─────────────────────────────────────────────────────────────────┘

Fibonacci Sequence:
┌─────────────────────────────────────────────────────────────────┐
│ F(n) = { 0                    if n = 0                         │
│        { 1                    if n = 1                         │
│        { F(n-1) + F(n-2)      if n > 1                         │
└─────────────────────────────────────────────────────────────────┘

Recursive Algorithm Example (Factorial):
function factorial(n):
    if n == 0:
        return 1
    else:
        return n × factorial(n-1)

Relation with Induction:
Recursive definitions often lead to proofs by mathematical induction, since each step depends on previous cases.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison Table:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Method              │ Key Idea                                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Induction           │ Prove true for base case, then step by step │
├─────────────────────┼─────────────────────────────────────────────┤
│ Contradiction       │ Assume false, derive impossible result      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Recursion           │ Define in terms of smaller instances        │
└─────────────────────┴─────────────────────────────────────────────┘

Applications:
• Algorithm correctness proofs
• Complexity analysis
• Program verification
• Mathematical theorem proving

✅ SUMMARY
• Induction: Build proof step-by-step (base + induction step)
• Contradiction: Prove by showing false assumption fails
• Recursion: Define sequences/functions in terms of themselves
• These methods are fundamental for algorithm design and verification`,
      contentBn: `📌 গাণিতিক যুক্তি

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: গাণিতিক যুক্তি হল প্রদত্ত বিবৃতি বা প্রতিজ্ঞা থেকে সিদ্ধান্তে পৌঁছানোর যৌক্তিক প্রক্রিয়া।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ১. গাণিতিক আরোহ (ইন্ডাকশন)

সংজ্ঞা: প্রাকৃতিক সংখ্যা সম্পর্কিত বিবৃতি প্রমাণের কৌশল।

ধাপ:
১. ভিত্তি ক্ষেত্র: প্রথম মানের জন্য বিবৃতি সত্য যাচাই (n = 0 বা 1)
২. আরোহ ধাপ: n = k-এর জন্য সত্য ধরে n = k + 1-এর জন্য প্রমাণ

উদাহরণ: প্রমাণ করুন 1 + 2 + 3 + ... + n = n(n+1)/2

ভিত্তি ক্ষেত্র (n=1):
LHS = 1, RHS = 1(1+1)/2 = 1 ✓

আরোহ অনুকল্প: ধরি n = k-এর জন্য সত্য
1 + 2 + ... + k = k(k+1)/2

আরোহ ধাপ (n = k+1):
1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1)
= (k+1)(k/2 + 1) = (k+1)(k+2)/2 ✓

সুতরাং, বিবৃতিটি সব n ≥ 1-এর জন্য সত্য।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২. অসঙ্গতি প্রমাণ (কন্ট্রাডিকশন)

সংজ্ঞা: বিবৃতিটি মিথ্যা ধরে নিন এবং দেখান এটি একটি অসঙ্গতির দিকে নিয়ে যায়।

উদাহরণ: প্রমাণ করুন √2 অমূলদ।

প্রমাণ:
১. ধরি √2 মূলদ → √2 = p/q, gcd(p,q)=1
২. উভয় পক্ষ বর্গ: 2 = p²/q² → p² = 2q²
৩. p² জোড় → p জোড় → p = 2k
৪. বসিয়ে: (2k)² = 2q² → 4k² = 2q² → q² = 2k²
৫. q² জোড় → q জোড়
৬. p ও q উভয় জোড় → gcd(p,q) ≠ 1 ❌ অসঙ্গতি
৭. অতএব, √2 অমূলদ ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ৩. পুনরাবৃত্তি (রিকার্শন)

সংজ্ঞা: ফাংশন বা ধারাকে নিজের ছোট উদাহরণের মাধ্যমে সংজ্ঞায়িত করার পদ্ধতি।

উদাহরণ:

ফ্যাক্টরিয়াল ফাংশন:
┌─────────────────────────────────────────────────────────────────┐
│ n! = { 1                    যদি n = 0                           │
│       { n × (n-1)!          যদি n > 0                           │
└─────────────────────────────────────────────────────────────────┘

ফিবোনাচ্চি ধারা:
┌─────────────────────────────────────────────────────────────────┐
│ F(n) = { 0                    যদি n = 0                         │
│        { 1                    যদি n = 1                         │
│        { F(n-1) + F(n-2)      যদি n > 1                         │
└─────────────────────────────────────────────────────────────────┘

পুনরাবৃত্তিমূলক অ্যালগরিদম উদাহরণ (ফ্যাক্টরিয়াল):
function factorial(n):
    if n == 0:
        return 1
    else:
        return n × factorial(n-1)

ইন্ডাকশনের সাথে সম্পর্ক:
পুনরাবৃত্তিমূলক সংজ্ঞা প্রায়ই গাণিতিক আরোহ দ্বারা প্রমাণের দিকে নিয়ে যায়, কারণ প্রতিটি ধাপ পূর্ববর্তী ক্ষেত্রের উপর নির্ভর করে।

✅ সারাংশ
• ইন্ডাকশন: ধাপে ধাপে প্রমাণ তৈরি করা (ভিত্তি + আরোহ ধাপ)
• কন্ট্রাডিকশন: মিথ্যা অনুকল্প ব্যর্থ দেখিয়ে প্রমাণ করা
• রিকার্শন: ধারা/ফাংশনকে নিজের মাধ্যমে সংজ্ঞায়িত করা
• এই পদ্ধতিগুলি অ্যালগরিদম ডিজাইন ও যাচাইয়ের জন্য মৌলিক`,
      takeaways: [
        "Induction: Prove base case, then inductive step (n → n+1)",
        "Contradiction: Assume false, derive contradiction",
        "Recursion: Define in terms of smaller instances",
        "These methods are fundamental for algorithm design and verification"
      ],
      takeawaysBn: [
        "ইন্ডাকশন: ভিত্তি ক্ষেত্র প্রমাণ, তারপর আরোহ ধাপ (n → n+1)",
        "কন্ট্রাডিকশন: মিথ্যা ধরে নিয়ে অসঙ্গতি তৈরি করা",
        "রিকার্শন: ছোট উদাহরণের মাধ্যমে সংজ্ঞায়িত করা",
        "এই পদ্ধতিগুলি অ্যালগরিদম ডিজাইন ও যাচাইয়ের জন্য মৌলিক"
      ],
      level: "Intermediate"
    },
    {
      id: "dm4",
      title: "Counting, Inclusion-Exclusion, Recurrence & Algebraic Structures",
      titleBn: "গণনা, ইনক্লুশন-এক্সক্লুশন, রিকারেন্স ও বীজগাণিতিক কাঠামো",
      content: `📌 COUNTING (COMBINATORICS)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: Counting is the study of ways to select or arrange objects.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Basic Counting Principles:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Principle           │ Formula & Example                           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Addition Principle  │ If tasks cannot occur together:             │
│                     │ Total = m + n                               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multiplication      │ If tasks occur sequentially:                │
│ Principle           │ Total = m × n                               │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Permutations and Combinations:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Formula & Meaning                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Permutation (nPr)   │ nPr = n! / (n-r)!                          │
│                     │ Arrangements (order matters)               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Combination (nCr)   │ nCr = n! / (r! × (n-r)!)                   │
│                     │ Selections (order doesn't matter)          │
└─────────────────────┴─────────────────────────────────────────────┘

Examples:
• 5 books, choose 2:
  Permutation: 5P2 = 5×4 = 20 (arrangement matters)
  Combination: 5C2 = 5×4/2 = 10 (arrangement doesn't matter)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 PRINCIPLE OF INCLUSION-EXCLUSION (PIE)

Definition: PIE is used to count the number of elements in the union of overlapping sets.

For 2 Sets: |A ∪ B| = |A| + |B| - |A ∩ B|

For 3 Sets:
|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|

General Pattern:
• Add sizes of individual sets
• Subtract sizes of pairwise intersections
• Add sizes of triple intersections
• Continue alternating ± for higher intersections

Example:
In a class of 50 students:
• 30 study Math (M), 25 study Physics (P), 10 study both
• How many study at least one?
|M ∪ P| = 30 + 25 - 10 = 45

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RECURRENCE RELATIONS

Definition: An equation that defines a sequence in terms of its previous terms.

Example: Fibonacci sequence
F(n) = F(n-1) + F(n-2), with F(0)=0, F(1)=1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Types of Recurrence Relations:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Type                │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Linear              │ a_n = 2a_{n-1} + 3                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Homogeneous         │ a_n = a_{n-1} + a_{n-2}                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-homogeneous     │ a_n = 2a_{n-1} + n                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ First-order         │ a_n = 2a_{n-1} + 1                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ Higher-order        │ F_n = F_{n-1} + F_{n-2} (Fibonacci)         │
└─────────────────────┴─────────────────────────────────────────────┘

Solving Methods:

1. Iteration Method:
   Expand recurrence step by step to find pattern.
   Example: a_n = a_{n-1} + 3, a_0=2
   a_1=5, a_2=8 → a_n = 2 + 3n

2. Characteristic Equation Method (for linear homogeneous):
   Assume a_n = r^n, solve characteristic equation
   Example: F_n = F_{n-1} + F_{n-2} → r² - r - 1 = 0
   r = (1 ± √5)/2 → F_n = A r₁ⁿ + B r₂ⁿ

3. Generating Functions:
   Convert recurrence to power series and solve

Common Sequences:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Sequence            │ Recurrence                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Arithmetic          │ a_n = a_{n-1} + d → a_n = a + nd            │
├─────────────────────┼─────────────────────────────────────────────┤
│ Geometric           │ a_n = r × a_{n-1} → a_n = a × rⁿ            │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 ALGEBRAIC STRUCTURES: RINGS AND GROUPS

Definition: Algebraic structures are sets with operations that satisfy specific axioms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Group (G, *):
A set G with binary operation * satisfying:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Property            │ Definition                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Closure             │ a * b ∈ G for all a, b ∈ G                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Associativity       │ (a * b) * c = a * (b * c)                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Identity            │ ∃ e ∈ G such that a * e = e * a = a         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Inverse             │ ∀ a ∈ G, ∃ a⁻¹ such that a * a⁻¹ = e        │
└─────────────────────┴─────────────────────────────────────────────┘

Example: (ℤ, +) is a group (integers under addition)
• Closure: sum of integers is integer
• Associative: (a+b)+c = a+(b+c)
• Identity: 0
• Inverse: -a

If also commutative (a * b = b * a) → Abelian Group

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ring (R, +, ×):
A set with two operations (addition and multiplication) satisfying:

• (R, +) is an Abelian group
• (R, ×) is associative and closed
• Distributive laws: a×(b+c) = a×b + a×c, (a+b)×c = a×c + b×c

Example: (ℤ, +, ×) is a ring (integers under addition and multiplication)

Additional properties:
• Ring with unity: Has multiplicative identity (1)
• Commutative ring: Multiplication is commutative (a×b = b×a)
• Field: Commutative ring where every non-zero element has multiplicative inverse

Examples:
┌─────────────────────┬─────────────────────────────────────────────┐
│ Structure           │ Example                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Group               │ (ℤ, +), (GL(n), matrix multiplication)      │
├─────────────────────┼─────────────────────────────────────────────┤
│ Ring                │ (ℤ, +, ×), (M₂(ℝ), +, ×)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ Field               │ (ℚ, +, ×), (ℝ, +, ×), (ℂ, +, ×)             │
└─────────────────────┴─────────────────────────────────────────────┘

Applications:
• Cryptography (RSA, elliptic curve)
• Coding theory
• Computer algebra systems
• Error-correcting codes

✅ SUMMARY
• Counting: Permutations (order matters) vs Combinations (order doesn't)
• PIE: |A∪B| = |A|+|B|-|A∩B| for overlapping sets
• Recurrence: Sequence defined by previous terms
• Group: Set with one operation (closure, associativity, identity, inverse)
• Ring: Set with two operations (addition group + multiplication semigroup)
• Field: Commutative ring with multiplicative inverses`,
      contentBn: `📌 গণনা (কম্বিনেটরিক্স)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: গণনা হল বস্তু নির্বাচন বা সাজানোর উপায় অধ্যয়ন।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

মৌলিক গণনা নীতি:

┌─────────────────────┬─────────────────────────────────────────────┐
│ নীতি                │ সূত্র ও উদাহরণ                             │
├─────────────────────┼─────────────────────────────────────────────┤
│ যোগ নীতি            │ যদি কাজগুলো একসাথে না হয়:                  │
│                     │ মোট = m + n                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ গুণ নীতি            │ যদি কাজগুলো ক্রমিক হয়:                     │
│                     │ মোট = m × n                                 │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

পারমুটেশন ও কম্বিনেশন:

┌─────────────────────┬─────────────────────────────────────────────┐
│ ধারণা               │ সূত্র ও অর্থ                                │
├─────────────────────┼─────────────────────────────────────────────┤
│ পারমুটেশন (nPr)     │ nPr = n! / (n-r)!                          │
│                     │ সাজানো (ক্রম গুরুত্বপূর্ণ)                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ কম্বিনেশন (nCr)     │ nCr = n! / (r! × (n-r)!)                    │
│                     │ নির্বাচন (ক্রম গুরুত্বপূর্ণ নয়)            │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 ইনক্লুশন-এক্সক্লুশন নীতি (PIE)

সংজ্ঞা: PIE ওভারল্যাপিং সেটের ইউনিয়নে উপাদানের সংখ্যা গণনা করতে ব্যবহৃত হয়।

২টি সেটের জন্য: |A ∪ B| = |A| + |B| - |A ∩ B|

৩টি সেটের জন্য:
|A ∪ B ∪ C| = |A|+|B|+|C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|

সাধারণ ধরণ:
• পৃথক সেটের আকার যোগ করুন
• জোড়া ইন্টারসেকশনের আকার বিয়োগ করুন
• ত্রিক ইন্টারসেকশনের আকার যোগ করুন
• উচ্চতর ইন্টারসেকশনের জন্য ± পর্যায়ক্রমে চালিয়ে যান

উদাহরণ:
৫০ শিক্ষার্থীর ক্লাসে:
• ৩০ জন গণিত পড়ে (M), ২৫ জন পদার্থবিজ্ঞান পড়ে (P), ১০ জন উভয়ই পড়ে
• কমপক্ষে একটি বিষয় কতজন পড়ে?
|M ∪ P| = 30 + 25 - 10 = 45

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 রিকারেন্স সম্পর্ক

সংজ্ঞা: একটি সমীকরণ যা একটি ধারাকে তার পূর্ববর্তী পদের মাধ্যমে সংজ্ঞায়িত করে।

উদাহরণ: ফিবোনাচ্চি ধারা
F(n) = F(n-1) + F(n-2), যেখানে F(0)=0, F(1)=1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

রিকারেন্স সম্পর্কের প্রকার:

┌─────────────────────┬─────────────────────────────────────────────┐
│ প্রকার              │ উদাহরণ                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ রৈখিক               │ a_n = 2a_{n-1} + 3                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ সমঘাতী              │ a_n = a_{n-1} + a_{n-2}                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ-সমঘাতী            │ a_n = 2a_{n-1} + n                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ প্রথম ক্রমের        │ a_n = 2a_{n-1} + 1                          │
├─────────────────────┼─────────────────────────────────────────────┤
│ উচ্চ ক্রমের         │ F_n = F_{n-1} + F_{n-2} (ফিবোনাচ্চি)       │
└─────────────────────┴─────────────────────────────────────────────┘

সমাধানের পদ্ধতি:

১. পুনরাবৃত্তি পদ্ধতি:
   ধাপে ধাপে প্রসারিত করে ধরণ খুঁজুন

২. বৈশিষ্ট্যসূচক সমীকরণ পদ্ধতি (রৈখিক সমঘাতীর জন্য):
   a_n = r^n ধরে নিন, বৈশিষ্ট্যসূচক সমীকরণ সমাধান করুন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 বীজগাণিতিক কাঠামো: রিং ও গ্রুপ

সংজ্ঞা: বীজগাণিতিক কাঠামো হল সেট যার নির্দিষ্ট স্বতঃসিদ্ধ পূরণকারী অপারেশন রয়েছে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

গ্রুপ (G, *):
G সেট এবং * বাইনারি অপারেশন যা পূরণ করে:

┌─────────────────────┬─────────────────────────────────────────────┐
│ বৈশিষ্ট্য           │ সংজ্ঞা                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্লোজার             │ সব a, b ∈ G-এর জন্য a * b ∈ G               │
├─────────────────────┼─────────────────────────────────────────────┤
│ সংযোগ বিধি          │ (a * b) * c = a * (b * c)                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ অভেদক উপাদান        │ ∃ e ∈ G যাতে a * e = e * a = a             │
├─────────────────────┼─────────────────────────────────────────────┤
│ বিপরীত উপাদান       │ ∀ a ∈ G, ∃ a⁻¹ যাতে a * a⁻¹ = e             │
└─────────────────────┴─────────────────────────────────────────────┘

উদাহরণ: (ℤ, +) একটি গ্রুপ (যোগের অধীনে পূর্ণসংখ্যা)

যদি কমিউটেটিভও হয় (a * b = b * a) → আবেলীয় গ্রুপ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

রিং (R, +, ×):
দুটি অপারেশন (যোগ ও গুণ) সহ সেট যা পূরণ করে:

• (R, +) একটি আবেলীয় গ্রুপ
• (R, ×) সংযোগ বিধি মেনে চলে এবং ক্লোজার থাকে
• বিতরণ বিধি: a×(b+c) = a×b + a×c, (a+b)×c = a×c + b×c

উদাহরণ: (ℤ, +, ×) একটি রিং (যোগ ও গুণের অধীনে পূর্ণসংখ্যা)

অতিরিক্ত বৈশিষ্ট্য:
• এককসহ রিং: গুণগত অভেদক আছে (1)
• কমিউটেটিভ রিং: গুণ কমিউটেটিভ (a×b = b×a)
• ক্ষেত্র: কমিউটেটিভ রিং যেখানে প্রতিটি অ-শূন্য উপাদানের গুণগত বিপরীত আছে

উদাহরণ:
┌─────────────────────┬─────────────────────────────────────────────┐
│ কাঠামো              │ উদাহরণ                                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ গ্রুপ               │ (ℤ, +), (GL(n), ম্যাট্রিক্স গুণ)            │
├─────────────────────┼─────────────────────────────────────────────┤
│ রিং                 │ (ℤ, +, ×), (M₂(ℝ), +, ×)                    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ক্ষেত্র              │ (ℚ, +, ×), (ℝ, +, ×), (ℂ, +, ×)             │
└─────────────────────┴─────────────────────────────────────────────┘

অ্যাপ্লিকেশন:
• ক্রিপ্টোগ্রাফি (RSA, উপবৃত্তাকার বক্ররেখা)
• কোডিং তত্ত্ব
• কম্পিউটার বীজগণিত পদ্ধতি
• ত্রুটি-সংশোধনী কোড

✅ সারাংশ
• গণনা: পারমুটেশন (ক্রম গুরুত্বপূর্ণ) বনাম কম্বিনেশন (ক্রম গুরুত্বপূর্ণ নয়)
• PIE: ওভারল্যাপিং সেটের জন্য |A∪B| = |A|+|B|-|A∩B|
• রিকারেন্স: পূর্ববর্তী পদ দ্বারা সংজ্ঞায়িত ধারা
• গ্রুপ: একটি অপারেশন সহ সেট (ক্লোজার, সংযোগ, অভেদক, বিপরীত)
• রিং: দুটি অপারেশন সহ সেট (যোগ গ্রুপ + গুণ সেমিগ্রুপ)
• ক্ষেত্র: কমিউটেটিভ রিং যেখানে গুণগত বিপরীত আছে`,
      takeaways: [
        "Counting: Permutations (order matters) vs Combinations (order doesn't)",
        "PIE: |A∪B| = |A| + |B| - |A∩B| for overlapping sets",
        "Recurrence: Sequence defined by previous terms",
        "Group: Set with one operation (closure, associativity, identity, inverse)",
        "Ring: Set with two operations (addition group + multiplication semigroup)",
        "Field: Commutative ring with multiplicative inverses"
      ],
      takeawaysBn: [
        "গণনা: পারমুটেশন (ক্রম গুরুত্বপূর্ণ) বনাম কম্বিনেশন (ক্রম গুরুত্বপূর্ণ নয়)",
        "PIE: ওভারল্যাপিং সেটের জন্য |A∪B| = |A| + |B| - |A∩B|",
        "রিকারেন্স: পূর্ববর্তী পদ দ্বারা সংজ্ঞায়িত ধারা",
        "গ্রুপ: একটি অপারেশন সহ সেট (ক্লোজার, সংযোগ, অভেদক, বিপরীত)",
        "রিং: দুটি অপারেশন সহ সেট (যোগ গ্রুপ + গুণ সেমিগ্রুপ)",
        "ক্ষেত্র: কমিউটেটিভ রিং যেখানে গুণগত বিপরীত আছে"
      ],
      level: "Intermediate"
    }
  ]
}

export const module12 = m12