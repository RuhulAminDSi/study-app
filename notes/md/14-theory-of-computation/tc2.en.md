# Context-Free Languages & Context-Free Grammars (CFG): Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/14-theory-of-computation/tc2.en.html` (handwritten-style PDF: `notes/pdf/14-theory-of-computation/tc2.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Theory of Computation):** "Language theory; Finite automata: deterministic finite automata, nondeterministic finite automata, equivalence and conversion of deterministic and nondeterministic finite automata, pushdown automata; **Context free languages**; **Context free grammars**; Turing Machines: basic machines, configuration, computing with Turing machines." This notebook carries the context-free languages and context-free grammars themselves; the pushdown automaton that recognises them was in the automata lesson, and Turing machines are the next one.

**High-yield:** ① CFG = 4-tuple (V, Σ, P, S) ② context-free means exactly **one variable on each left-hand side** ③ S → aSb | ε gives {aⁿ bⁿ | **n ≥ 0**} — n = 0 is the empty string ④ CNF allows only A → BC or A → a; A → aα is **Greibach**; A → aB is right-linear = regular ⑤ CFLs are closed under union, concatenation and Kleene star, **not** under intersection or complement ⑥ but CFL ∩ **regular** **is** a CFL ⑦ the CFL pumping lemma pumps v and y with the **same** exponent.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Context-free languages — p. 2 · 2. The CFG 4-tuple — p. 3 · 3. Derivations, parse trees, ambiguity — p. 4 · 4. Worked grammar: balanced parentheses — p. 5 · 5. Simplifying a CFG: CNF & GNF — p. 6 · 6. Pumping lemma for CFLs, CYK, step counts — p. 7 · 7. CFG ↔ PDA and applications — p. 8 · 8. Night-before sheet — p. 9 · 9. Practice MCQs + written — p. 10.

---

## 1. Context-Free Languages

A language is **context-free** when a **context-free grammar** can generate it and a **pushdown automaton** can recognise it — Chomsky **Type 2**. A stack holds one nested structure at a time, and no more.

| Context-free language | What it says | Grammar |
|---|---|---|
| {aⁿ bⁿ \| n ≥ 0} | as many a's as b's | S → aSb \| ε |
| {w wᴿ \| w ∈ {a,b}*} | every palindrome over {a,b} | S → aSa \| bSb \| a \| b \| ε |
| {aⁿ bᵐ cᵐ \| n,m ≥ 0} | one free block, then two matched | S → aSb \| T · T → bTc \| ε |
| {(ⁿ )ⁿ \| n ≥ 0} | balanced parentheses | S → (S) \| SS \| ε |
| {aⁿ bⁿ cⁿ} | **not** context-free | needs two stacks |

**Closure properties — the whole table**

| Operation on languages | CFL closed? | Because |
|---|---|---|
| union | **yes** | a new start symbol chooses either grammar |
| concatenation | **yes** | S₁ → S₂, then L₂'s rules |
| Kleene star | **yes** | S → SS \| ε, then L's rules |
| complement | **no** | flipping the final states of a PDA yields no CFG |
| intersection | **no** | see the trap below |
| intersection with a **regular** language | **yes** | run the PDA, then the finite automaton on top |

- ⚠️ **Trap:** "not closed under intersection" needs its proof: L₁ = **{aⁿ bⁿ cᵐ}** and L₂ = **{aᵐ bⁿ cⁿ}** are context-free, but L₁ ∩ L₂ = **{aⁿ bⁿ cⁿ}** is **not**. So "not closed under ∩" means *not in general* — yet CFL ∩ **regular** is always a CFL.
- 💡 **Trick:** regular = **∪ ∩ ¬ \*** · CFL = **∪ · \***. The only closure regular languages have that CFLs lack is **intersection**.
- ✍ **Worked example — the grammar for {aⁿ bᵐ cᵐ | n,m ≥ 0}:** V = {S, T}, Σ = {a, b, c}, S = S, P = { S → a S b | T , T → b T c | ε }. Derivation of `aabbcc`: S ⇒ aSb ⇒ aaSbb ⇒ aaTbb ⇒ aabTcb ⇒ aabbTcc ⇒ aabbcc. The first rule leaves the a-block free, the second pairs b with c — so n and m may differ. Pairing **all three** blocks (aⁿbⁿcⁿ) is beyond one stack.

## 2. Context-Free Grammar: the 4-Tuple

A **context-free grammar** is G = (**V**, **Σ**, **P**, **S**) — variables, terminals, productions, start symbol. It generates L(G) by repeatedly replacing a variable with the right-hand side of one of its productions. It is context-free exactly when **every production carries one single variable on its left**: nothing ever sits beside it.

| Part | Is | In the example G |
|---|---|---|
| **V** | finite set of **variables**; S ∈ V | V = {S, A, B} |
| **Σ** | finite set of **terminals**; V ∩ Σ = ∅ | Σ = {a, b} |
| **P** | set of **productions** A → α, α ∈ (V ∪ Σ)\* | P = { S → aSb, S → ε } |
| **S** | the **start symbol**, S ∈ V | S = S |

**The grammar for {aⁿ bⁿ | n ≥ 0}**

```
G = ( {S}, {a, b}, P, S )
P = { S -> a S b ,  S -> e }

leftmost derivation of "aaabbb":
S => aSb => aaSbb => aaaSbbb => aaabbb
```

Each use of **S → aSb** wraps one more a on the left and one b on the right; **S → ε** stops it. After n uses you have **aⁿbⁿ**, and n = 0 gives **ε** — so the language is **{aⁿ bⁿ | n ≥ 0}**, **not** n ≥ 1.

| Notation | Means |
|---|---|
| a, b, 0, 1 | **terminal** — a real character |
| S, A, T | **variable** — a placeholder to replace |
| A → α | a **production** |
| A ⇒ β | one **derivation** step |
| A ⇒\* w | zero or more steps, w all terminals |
| ε | the empty string, \|ε\| = 0 |

- 💡 **Trick:** four letters in order — **V**ariables, the **Σ**ymbols they sit on, the **P**roductions, the **S**tart. "V–Σ–P–S".
- ⚠️ **Trap:** the condition sits on the **left**, never on the right. `A → aSb` is context-free; `AB → aSb` is not, whatever its right side looks like.
        S → ε       one variable on the left of every rule  ⇒ context-free
        E → E + T   no matter how long the right-hand side is ⇒ context-free
        AB → aSb    two symbols on the left  ⇒ NOT context-free

- 📌 **In practice:** every programming language ships a CFG in **BNF** as the **definition** of its syntax; a parser generator turns that grammar into the tables that validate a program.
- 📎 **The picture in one line:** a production is a box with the variable on the left and its replacement on the right; every arrow leaving a node spells one production. Context-freeness is the statement that the left box never holds more than one letter.

## 3. Derivations, Parse Trees and Ambiguity

Start from **S**, replacing one variable at a time until only terminals remain. A **leftmost** derivation always replaces the leftmost remaining variable, a **rightmost** one the rightmost. Both reach the same string — only the **order of work** differs, which is why parsers are built leftmost.

```
LEFTMOST          RIGHTMOST
S                  S
S => aSb           S => aSb
S => aaSbb         S => aSbb
S => aaaSbbb       S => aaSbb
S => aaabbb        S => aaabbb
```

**Parse tree = the derivation, drawn.** Every variable is a node; every applied production is a node whose children are that rule's right-hand symbols, left to right. *leaves read left to right* give the derived string, so **leaves = the string** — and for n terminals the tree has exactly **n − 1** internal nodes.

        S                     the start symbol, the root
       /|\
      a S b                  S -> aSb : three children a, S, b
       /|\
      a S b                  the new S expands the same way
       /|\
      a S b                  and again
         |
         ε                   S -> ε : a leaf with no children

        leaves, left to right: a a a b b b   =   the derived string

**Ambiguity: two trees for one string.** A grammar is **ambiguous** if **some** string has **two or more distinct leftmost derivations** — equivalently two parse trees. One bad string is enough.

**Worked example — the classic ambiguous grammar**

```
E -> E + E | E * E | id      (id+id*id has TWO trees)

tree 1: (id+id)*id          tree 2: id+(id*id)
        *                          +
       / \                        / \
      +   id                    id   *
     / \                            / \
   id   id                        id  id
```

Same four terminals, two groupings — so **id+id\*id** is ambiguous. Fixing it needs one extra level per operator: **E → E + T | T**, **T → T \* F | F**, **F → id**.

- 💡 **Trick:** "Ambiguous = **a**lternative tree". If one string can be **built two ways**, the parser cannot know what was meant.
- ⚠️ **Trap:** ambiguity has nothing to do with ε-productions, with the number of variables, or with an infinite language. And it is not nondeterminism: a PDA is nondeterministic on **every** CFL.

## 4. Worked Grammar: Balanced Parentheses

The language of **balanced** parentheses over Σ = { (, ) } is {(ⁿ )ⁿ | n ≥ 0}: every ( is closed by a later ), and the nesting is proper. It is context-free, and it is what the pushdown automaton from the automata lesson accepts by pushing on ( and popping on ).

```
V = {S},  Sigma = { ( , ) },  S = S
P = { S -> SS ,      two groups side by side
      S -> (S) ,      one group inside another
      S -> e }        the empty group

leftmost derivation of "(())()":
S => SS => (S)S => ((S))S => (())S => (())(S) => (())()
```

| Production | The idea it encodes | Strings it can finish |
|---|---|---|
| S → ε | the base case: the empty group | ε, and only ε |
| S → (S) | wrap **one** group in one pair | ( ), ( () ), ( (()) ) … |
| S → SS | concatenate two balanced groups | ()(), (())(), (()()) … |

- 💡 **Trick:** **SS = side by side, (S) = inside, ε = nothing.** The same three-rule shape builds balanced **{}**, balanced **[ ]**, and — with a third pair — balanced **{ } [ ]**.
- ⚠️ **Trap:** write **S → SS**, never **S → SS | SS**. The order of alternatives is irrelevant — a CFG's productions are a **set**, not a program: any rule may fire at any step. This is also why {aⁿbⁿcⁿ} cannot be built this way: one stack cannot close one bracket while a second count is still open.
             S                    S -> SS : two children
            / \
           S   S                  each S -> (S) : ( , S , )
          /|\  /|\
         ( S )( S )              each S -> ε
          |     |
          ε     ε                leaves: ( ( ) ) ( )   =   (())()

- 📌 **In practice:** an editor's bracket matcher is a PDA — push on an opening symbol, pop on the matching one, refuse to pop an empty stack. Also context-free: Dyck-style languages over any k kinds of matched brackets, and well-formed XML/HTML tag nesting.

## 5. Simplifying a CFG: CNF and GNF

1. **Remove useless symbols:** the **non-generating** variables, then the **unreachable** ones.
2. **Remove ε-productions** A → ε: find every **nullable** variable and drop its ε-rule.
3. **Remove unit productions** A → B by copying B's productions in their place (repeat — chains occur).
4. **Convert to Chomsky Normal Form** — what CYK and the parser generators demand.
5. **Convert to Greibach Normal Form**, where every rule starts with a terminal.

| Normal form | Every production is | Buys |
|---|---|---|
| **CNF** | **A → BC** or **A → a**; S → ε only when ε ∈ L | CYK, yacc/bison |
| **GNF** | **A → aα** | one-symbol prediction |
| right-linear | A → aB | a **regular** Type 3 grammar |

**Worked conversion — S → aSb | ε into CNF**

```
original   S -> a S b | e
step 1     wrap the left terminal, then the right:  S -> A S B
step 2     THREE symbols on the right, so split the tail:
           S -> A X   ,   X -> S B   ,   A -> a   ,   B -> b
result     S -> A X | e ,  X -> S B ,  A -> a ,  B -> b
```

        S -> aSb | e     (original)
              |
              v
        S -> ASB | e      WRONG: three symbols on the right of the arrow
              |
              v
        S -> AX | e , X -> SB , A -> a , B -> b      CORRECT: two, or one

**Why S → ε survives:** CNF allows it only when ε ∈ L **and** S appears on no right-hand side. Here S **does**, inside **X → SB**, so the strictly correct form adds a fresh start symbol **S₀ → S** and keeps the other four rules.

- ⚠️ **Trap:** `S → ASB` is **not** CNF — exactly **two** variables or **one** terminal, never three symbols. And `A → aα` is **Greibach**, not CNF.
- 💡 **Trick:** **CNF = two or one, GNF = starts with a terminal.** Count the right-hand symbols: 2 or 1 ⇒ CNF; "a then variables" ⇒ GNF; "aB" ⇒ regular.

## 6. Pumping Lemma for CFLs, CYK and Step Counts

If L is context-free then some length **p** exists such that every s ∈ L with |s| ≥ p splits as **s = uvxyz** with **|vxy| ≤ p**, **|vy| ≥ 1** and **uvⁱxyⁱz ∈ L for every i ≥ 0**. Read it as: inside a short window lies a balanced piece that may be repeated as often as you like. Like the regular version it is a **disproof** tool only.

| Condition | Says |
|---|---|
| \|vxy\| ≤ p | the pumpable window is **short** |
| \|vy\| ≥ 1 | v and y together are **non-empty** |
| uvⁱxyⁱz ∈ L, ∀i ≥ 0 | v and y repeat **together** |

- ⚠️ **Trap:** the regular lemma pumps **xyⁿz**; the CFL lemma pumps **uvⁱxyⁱz** — **two** exponents, and they are **equal**. Writing u(vxy)ⁿz is wrong. And satisfying the lemma never proves a language **is** context-free.

**Worked disproof — {aⁿ bⁿ cⁿ | n ≥ 0} is not context-free.** Take pumping length p and s = **aᵖbᵖcᵖ**. Every decomposition with |vxy| ≤ p and |vy| ≥ 1 puts y wholly inside the **a-block** (y = aᵏ, k ≥ 1) or wholly inside the **b-block** (y = bᵏ). Pumping y alone breaks the match, and pumping v and y **together** cannot restore it, because they sit in different blocks. The condition fails ⇒ **L is not context-free**. In one line: it needs three simultaneous counts, and one stack holds one.

**CYK and the step count.** **CYK** decides membership for a **fixed CNF** grammar in **O(n³)** time (O(n³·|G|) in general): a bottom-up table over O(n²) substrings, trying O(n) split points each. In CNF a string of length **n ≥ 1** takes exactly **2n − 1** steps — **n − 1** of A → BC to turn one variable into n variables, then **n** of A → a.

|  u  |  v  |  x  |  y  |   z   |     s = u v x y z
                 ^^^^             the pumpable window, |vxy| <= p
             ^         ^          v and y together, |vy| >= 1, pumped equally

- 💡 **Trick:** **"n − 1 splits, then n terminals = 2n − 1 altogether"** — and **CYK is cubic**: three nested loops over substrings, split points and rules.
- 📎 **Why one stack is the limit:** the machine pushes on the opening half and pops on the closing half, so it can hold exactly **one** unfinished nesting. That is why aⁿbⁿ and w wᴿ are context-free, while aⁿbⁿcⁿ and (aⁿbⁿ) (aᵐbᵐ) with two balances are not.

## 7. CFG ↔ PDA and Where CFGs Are Used

**Equivalence theorem:** **context-free ⇔ some PDA recognises it.** "If" is trivial — read the grammar as a leftmost derivation. "Only if" is the surprise: the PDA's **states become variables**, so the machine writes its own grammar.

1. **Push the start symbol** S on the stack above the bottom marker Z₀.
2. If the **stack top is a variable** A with A → α in P, pop A and push α in **reverse** order.
3. If the **stack top is a terminal** a, match it with the next input symbol: equal → pop and advance; unequal → reject.
4. Accept when the input is exhausted **and** only Z₀ is left on the stack.
5. **Reverse direction:** a variable **[pXq]** for every state pair p, q and stack symbol X, **[pXq] → a** per transition, **S₀ → [q₀ Z₀ q]** per accepting state q.

| Application | How the CFG is used |
|---|---|
| **Programming languages** | C, Java, Pascal syntax is defined in BNF/EBNF — the grammar **is** the definition |
| **Compilers** | **parser generators** (yacc, bison, ANTLR) read the grammar and emit the tables |
| **Markup languages** | XML / HTML nesting is a CFG; the validator is a PDA over the tag stream |
| **Natural language** | sentence structure as a grammar; parsing opens every NLP pipeline |
| **Expressions** | precedence climbing = one extra grammar level per operator |
| **Query languages** | SQL's `SELECT … WHERE …` is a recursive-descent grammar |

        P : S -> aSb | e                the grammar drives the machine
              |
              v
        stack:  Z0 -> S Z0 -> a S b Z0  pop the top variable, push the
              |                         right-hand side REVERSED
              v
        input "aaabbb" consumed, stack bare  =>  accept

- 💡 **Trick:** push the **start symbol**, replace the **top of stack**, accept on a **bare stack**. The reverse conversion names its variables **[pXq]** — "from p, on X, to q".
- ⚠️ **Trap:** in CFG → PDA the right-hand side is pushed **reversed**: the stack is last-in-first-out. Push α in written order and the PDA builds the string **backwards**.
- 📌 **In practice:** bracket matching, `if`/`for` nesting checks and JSON validation are all the same PDA of section 4.

## Night-before sheet

CFL = made by a CFG, read by a PDA · CFL is Chomsky **Type 2** · CFG = **(V, Σ, P, S)** · CF ⇔ one variable per left side · V ∩ Σ = ∅; S ∈ V; P ⊆ V × (V ∪ Σ)\* · A ⇒ one step · A ⇒\* w · ε = empty · S → aSb | ε ⇒ **{aⁿ bⁿ | n ≥ 0}** · S → aSa | bSb | a | b | ε ⇒ palindromes · S → SS | (S) | ε ⇒ balanced brackets · Leftmost = leftmost variable first · Parse-tree leaves = the string · Ambiguous ⇔ ≥ 2 leftmost derivations · E → E+E | E\*E | id is ambiguous · Closed: ∪, concatenation, Kleene star · Not closed: ∩ and complement · but CFL ∩ **regular** **is** a CFL · {aⁿbⁿcᵐ} ∩ {aᵐbⁿcⁿ} = {aⁿbⁿcⁿ} = not CF · CNF: A → BC or A → a (+ S → ε) · GNF: A → aα · A → aB = regular · CFL pumping: s = **uvxyz**, |vxy| ≤ p, |vy| ≥ 1 · uvⁱxyⁱz ∈ L ∀ i ≥ 0 — equal exponents · CYK on a fixed CNF grammar: **O(n³)** · CNF derivation of length n ≥ 1: **2n − 1** · CFG ⇔ PDA; PDA → CFG uses **[pXq]**.

**Top 12 one-liners for MCQs.** ① CFG = 4-tuple, PDA = 7-tuple ② one variable on the left = context-free ③ S → aSb | ε gives **n ≥ 0**, ε included ④ Type-3 grammars generate **regular** languages ⑤ CFL closed under ∪ · \* — **not** ∩ ⑥ CNF allows **only** A → BC or A → a ⑦ A → aα is **Greibach**, A → aB is right-linear ⑧ ambiguous = one string, two leftmost derivations ⑨ the CFL lemma splits into **five** pieces uvxyz ⑩ CYK is **cubic** in the input length ⑪ the CNF step count is **2n − 1** ⑫ CFL ∩ regular is still a CFL.

**Which form does the question want?** Mentions **variables, productions, start symbol, a 4-tuple** ⇒ CFG · **one variable on the left** ⇒ context-free · **two variables** on the right of an arrow ⇒ CNF · **a terminal then variables** ⇒ GNF · **a terminal then one variable** ⇒ regular / Type 3 · **stack, 7-tuple, bare stack** ⇒ PDA.

**Top traps.** A three-symbol right-hand side is **not** CNF · "not closed under intersection" needs the regular-language qualification · the CFL pumping lemma pumps v and y with the **same** exponent · satisfying a pumping lemma never proves context-freeness · a PDA pushes a production's right side in **reverse** order · an n ≥ 0 language contains ε.

**All tricks together.** "V–Σ–P–S, four parts" · "one variable on the left is the whole definition" · "SS = side by side, (S) = inside, ε = nothing" · "leaves read left to right = the string" · "CNF = two or one, GNF = starts with a terminal" · "five pieces, two exponents" · "n − 1 splits plus n terminals = 2n − 1".

---

## Practice MCQs (exam pattern, 10 marks)

1. A CFG is a tuple of how many parts? (a) 3 (b) 4 (c) 5 (d) 7
2. In CNF every production has the form: (a) A → aα (b) A → aB (c) A → BC | A → a (d) any α, |α| ≤ 2
3. Type-3 grammars generate: (a) context-free (b) context-sens. (c) regular (d) r. enum.
4. CFLs are **NOT** closed under: (a) union (b) concat. (c) Kleene star (d) intersect.
5. S → aSb | ε generates: (a) {aⁿbⁿ | n ≥ 1} (b) {aⁿbⁿ | n ≥ 0} (c) (ab)\* (d) a\*b\*
6. A grammar is ambiguous when: (a) 2+ trees, 1 string (b) has ε-rule (c) infinite lang. (d) >1 variable
7. CYK decides membership in: (a) O(n) (b) O(n log n) (c) O(n²) (d) O(n³)
8. In CNF, deriving length n ≥ 1 takes: (a) n steps (b) 2n − 1 steps (c) 2n steps (d) n² steps
9. {aⁿ bⁿ cⁿ | n ≥ 1} is: (a) regular (b) context-free (c) neither, not CF (d) both
10. CFL ∩ a **regular** language is: (a) always a CFL (b) no guarantee (c) never a CFL (d) regular lang.

**Answer key:** 1-b · 2-c · 3-c · 4-d · 5-b · 6-a · 7-d · 8-b · 9-c · 10-a

## Written question (10 marks)

Write a CFG for all palindromes over {a, b}; derive `abba` and `aba` leftmost; say why it is context-free but not regular.

**Model answer:**

1. **Grammar (3)** — G = ({S}, {a,b}, P, S), P = { **S → aSa | bSb | a | b | ε** }: wrap both ends, finish the middle.
2. **Derivations (3)** — abba: S ⇒ aSa ⇒ abSba ⇒ **abba** · aba: S ⇒ aSa ⇒ **aba**.
3. **Why context-free (2)** — one variable per left side; an NPDA pushes the first half, **guesses** the middle, pops the second.
4. **Why not regular (2)** — with pumping length p, w = aᵖ b aᵖ splits with y = aᵏ in the **first** block, so xy²z is not a palindrome.

**Template to memorise** — palindromes **S → aSa | bSb | a | b | ε** · brackets **S → SS | (S) | ε** · "wrap the ends, finish the middle".

**Before the exam ✓** Can write (V, Σ, P, S) from memory · Can give a grammar for aⁿbⁿ, palindromes, brackets · Can convert a grammar into CNF correctly · Knows that the pumping lemma only disproves context-freeness.
