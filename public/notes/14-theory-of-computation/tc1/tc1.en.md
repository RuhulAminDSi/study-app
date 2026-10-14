# Language Theory & Finite Automata (DFA, NFA, PDA): Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/14-theory-of-computation/tc1.en.html` (handwritten-style PDF: `notes/pdf/14-theory-of-computation/tc1.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Theory of Computation):** "Language theory; Finite automata: **deterministic finite automata**, **nondeterministic finite automata**, **equivalence and conversion of deterministic and nondeterministic finite automata**, **pushdown automata**; Context free languages; Context free grammars; Turing Machines: basic machines, configuration, computing with Turing machines." This notebook covers the language basics, the finite automata and the pushdown automaton; the CFL & CFG lesson carries the grammars and the Turing Machine lesson the rest.

**High-yield:** ① DFA = 5-tuple, PDA = 7-tuple ② a complete DFA has **exactly one** move per (state, symbol) ③ DFA ≡ NFA — same power, mutually convertible ④ subset construction ≤ 2ⁿ states, bound tight ⑤ (N)PDA = context-free, nothing more ⑥ DPDA < NPDA, unlike DFA vs NFA ⑦ pumping lemma proves *not regular*, never regular.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Alphabet, string, language — p. 2 · 2. Chomsky's four types — p. 3 · 3. The finite automaton 5-tuple — p. 4 · 4. The DFA — p. 4 · 5. The NFA and ε-moves — p. 5 · 6. DFA = NFA, subset construction — p. 6 · 7. Minimisation & the pumping lemma — p. 7 · 8. The pushdown automaton — p. 8 · 9. DFA vs NFA vs PDA — p. 9 · 10. Night-before sheet — p. 10 · 11. Practice MCQs + written — p. 11.

---

## 1. Alphabet, String, Language

**Language theory** studies **formal languages**: sets of strings built over a fixed finite alphabet. A machine **accepts** (recognises) a language if it answers "yes" for exactly its strings and "no" for all others.

| Term | Meaning | Example with Σ = {0, 1} |
|---|---|---|
| Alphabet **Σ** | finite, non-empty set of **symbols** | Σ = {0, 1} |
| String **w** | finite sequence of symbols; \|w\| = length | w = 1010, \|w\| = 4 |
| **ε** | the **empty string**, \|ε\| = 0, ε ∈ Σ* | no symbols at all |
| **Σ*** | all strings over Σ, ε included | {ε, 0, 1, 00, 01, 10, 11, …} |
| Language **L** | any subset of Σ* | L = {w \| w ends with 0} |
| Σⁿ | strings of length exactly n; \|Σⁿ\| = \|Σ\|ⁿ | Σ² = {00, 01, 10, 11} |

**Regular expressions: four operators**

| Operator | Means | Reads as |
|---|---|---|
| `a + b` | union: a **or** b | "plus = or" |
| `ab` | concatenation: a then b | "written together" |
| `(a + b)*` | Kleene star: **zero** or more | "any number" |
| `(a + b)+` | one or more | "at least one" |

```
(a+b)*  = a*b* = (a+b)+ U {e}
(a+b)+  = Sigma* \ {e}
ab*a    = {a, aa, aba, abba, ...}
```

- 💡 **Trick:** "**star = zero or more, plus = one or more.**" So `(a+b)*` **includes ε** and `(a+b)+` does not.
- ⚠️ **Trap:** `ab*a` = an a, then **zero** or more b's, then an a — with zero b's the string is **aa**. And "w **contains** 01" ≠ "w **ends with** 01": a finite automaton can remember a suffix, never an arbitrary earlier occurrence.
- 📌 **Operations on languages:** **L₁ ∪ L₂**, **L₁ ∩ L₂**, **Lᶜ = Σ* − L** (always over the same Σ), **L₁ · L₂** = {xy | x ∈ L₁, y ∈ L₂}, **L*** (ε included). Complement is taken over **Σ***, never "over the machine": for Σ = {0,1}, the complement of "ends with 0" is "ends with 1 **or** is empty".

## 2. Chomsky's Hierarchy: Four Types

Noam Chomsky's classification of formal languages into **four nested classes**, each defined by a kind of grammar and matched by a kind of machine. Type **n** sits inside Type **n−1**: every regular language is also context-free, and so on up the ladder.

| Type | Grammar | Automaton | Example language |
|---|---|---|---|
| **Type 0** recursively enumerable | unrestricted | Turing machine | {w # w \| w ∈ {0,1}*} |
| **Type 1** context-sensitive | linear bounded (LBA) | LBA | {aⁿ bⁿ cⁿ \| n ≥ 1} |
| **Type 2** context-free | context-free (CFG) | **pushdown automaton** | {aⁿ bⁿ \| n ≥ 0} |
| **Type 3** regular | regular | **finite automaton** | {w \| w ends with 01} |

**Machine ↔ language, the one-line answer:** FA (DFA / NFA) ⇒ **regular** = Type 3 · PDA ⇒ **context-free** = Type 2 · LBA ⇒ **context-sensitive** = Type 1 · TM ⇒ **recursively enumerable** = Type 0.

- 💡 **Trick:** read the table **upwards** — each step adds one kind of memory: **none** (FA) → **stack** (PDA) → **tape** (LBA, TM). More memory ⇒ more languages.
- ⚠️ **Trap:** {aⁿ bⁿ cⁿ} needs a **linear bounded** automaton, not a PDA: one stack counts only **one** balance, so it accepts aⁿbⁿ but never aⁿbⁿcⁿ. Type 0's example needs the "#" to find the middle.
- 📌 **Neighbouring lessons:** the grammar side (productions, derivation trees, parsing) is in the CFL & CFG lesson; Turing machines, configurations and computability in the Turing Machine lesson.
- 📌 **In practice:** the regex engines inside `grep`, `RegExp` and `lex` are finite automata in disguise: a language's **syntax** is a regular (Type 3) language, its **grammar** is context-free (Type 2) — which is exactly why parsing needs a stack.

## 3. Finite Automaton: the 5-tuple

A **finite automaton** M = (Q, Σ, δ, q₀, F) reads a string left to right, changing state at each symbol, then **accepts** or **rejects**. It has **no memory** beyond its current state — which is why it recognises only regular languages.

| Part | Is | Meaning |
|---|---|---|
| **Q** | finite non-empty set of states, \|Q\| = n | the boxes in the diagram; q₀ ∈ Q |
| **Σ** | input alphabet (finite, non-empty) | the symbols the tape may carry |
| **δ** | transition function, δ: Q × Σ → Q (DFA) | the arrows: read a symbol, move state |
| **q₀** | the single **start** state | where the head begins |
| **F** | set of **final / accepting** states, F ⊆ Q | accept iff the run ends in F |

- 💡 **Trick:** five parts in order — **Q**uestions (states), **Σ**ymbols, the **δ**ecision rule, the quest**0** entry, the **F**inish states. A PDA adds **Γ** (stack alphabet) and **Z₀** (bottom marker) = **7**.
- 📌 **Accept / reject, formally:** extend δ to strings, δ*(q₀, w) = the state reached after the **whole** w is read, so **w ∈ L ⇔ δ*(q₀, w) ∈ F**. A missing move means rejection — which is why a blank cell needs a trap state.

## 4. Deterministic Finite Automaton (DFA)

For **every** pair (state, symbol) there is **exactly one** next state: δ: Q × Σ → Q is **total**. No ε-move, no guessing.

**Worked example — L = {w | w ends with 0}, Σ = {0,1}**

| State | on 0 | on 1 | meaning |
|---|---|---|---|
| → q₀ | q₁ | q₀ | last symbol was 1 |
| * q₁ | q₁ | q₀ | last symbol was 0 |

→ start · * accepting. **Trace 1100:** q₀ -1→ q₀ -1→ q₀ -0→ q₁ -0→ q₁ ∈ F ⇒ **accept**. **Trace 1111:** ends in q₀ ∉ F ⇒ reject.

*(Doodle: q₀ on the left with an incoming start arrow and a "1" self-loop, q₁ on the right drawn as a double circle; a top arc q₀ -0→ q₁ and a bottom arc q₁ -1→ q₀, plus a "0" self-loop on q₁.)*

- ⚠️ **Trap:** "zero or more transitions" and ε-moves are **NFA** features. A blank cell in an option means an **incomplete** machine — add the trap state d with δ(d, a) = d.
- 💡 **Trick:** input **1** separates q₀ from q₁, so this 2-state DFA is already **minimal**.

## 5. Nondeterministic Finite Automaton (NFA)

For a (state, symbol) pair an NFA may have **zero, one or many** next states — δ: Q × (Σ ∪ {ε}) → P(Q) — and it may take an **ε-move**: change state **without consuming input**. It accepts if **some** path reaches a final state when the input runs out.

**Worked example — L = {w | w contains 01}, Σ = {0,1}**

| From | on 0 | on 1 |
|---|---|---|
| → q₀ | q₀ **and** q₁ | q₀ |
| q₁ | — | q₂ |
| * q₂ | q₂ | q₂ |

q₀ guesses "a 0 may have just arrived"; a following 1 confirms it and q₂ keeps that memory for good. **Trace 0110:** q₀ -0→ {q₀,q₁} -1→ {q₀,q₂} -1→ {q₀,q₂} -0→ {q₀,q₂} ∋ q₂ ⇒ accept. **Trace 110:** q₀ -1→ q₀ -1→ q₀ -0→ {q₀,q₁} ⇒ reject.

*(Doodle: q₀ with a "0" self-loop and a top arc "0" to q₁, a long arc "1" to q₂ which is double-circled and loops on 0,1. No ε-move is needed for this language.)*

**How an NFA is really run:** carry a **set** of states; on each symbol replace the set by the union of the successors of **every** member; accept iff the final set meets F.

**When an ε-move really helps — L = {w | w contains ab}:** the machine must not commit to the position of "ab", so it runs two branches at once — q₀ keeps scanning with a 0,1 loop, and the ε-move lets a copy jump to q₁, whose only job is to expect the b that confirms the a.

```
q0 --a--> q0     q0 --b--> q0
q0 --e--> q1     q1 --b--> q2*
q2 --0,1--> q2
```

✍ **Worked trace on "aab":** start {q₀} → a: q₀ -a-> q₀ plus the ε-copy q₁ ⇒ {q₀, q₁} · a: only q₀ has an a-move ⇒ {q₀, q₁} · b: q₀ -b-> q₀ and q₁ -b-> q₂ ⇒ {q₀, q₂} ∋ q₂ ⇒ **accept**. A branch with no defined move simply dies — the "zero transitions" case.

- ⚠️ **Trap:** an NFA with no ε-move and one move per pair is a **DFA** written differently.

## 6. Equivalence of DFA and NFA

**Theorem (high-yield).** DFA and NFA have exactly the same expressive power: both accept **exactly** the regular languages. So **DFA → NFA is trivial** (an NFA may have one move per pair, so a DFA already *is* an NFA), **NFA → DFA is always possible**, an NFA can be **exponentially smaller**, and a DFA runs **faster** because there is no guessing to backtrack.

**Proof sketch.** *DFA ⇒ NFA:* keep the same states and arrows. *NFA ⇒ DFA:* let one DFA state stand for the whole **set** of NFA states the NFA could occupy after the same prefix; then w is accepted iff that set holds an accepting state — which is the definition of a DFA accepting state. ∎

**Subset (powerset) construction**

1. One DFA state = a **set** of NFA states; start with ε-closure(q₀) = q₀ plus every state reachable by ε-moves alone.
2. **next = ε-closure(move(S, a))** — the union of the successors of **every** member of S; the set accepts if it **contains** an accepting NFA state, and the empty set ∅ is the dead state.

✍ **Worked conversion** of the "contains 01" NFA — every cell is a **set**:

| DFA state = a set | on 0 | on 1 | accepting? |
|---|---|---|---|
| → {q₀} | {q₀, q₁} | {q₀} | no |
| {q₀, q₁} | {q₀, q₁} | {q₀, q₂} | no |
| {q₀, q₂} | {q₀, q₁, q₂} | {q₀, q₂} | **yes** |
| {q₀, q₁, q₂} | {q₀, q₁, q₂} | {q₀, q₂} | **yes** |

**Trace 0101:** {q₀} -0→ {q₀,q₁} -1→ {q₀,q₂} -0→ {q₀,q₁,q₂} -1→ {q₀,q₂} ⇒ accept — four sets, far below 2ⁿ = 16.

- 📐 **Size bound:** an n-state NFA gives at most **2ⁿ** DFA states (2ⁿ subsets), and the bound is **tight** — some languages force every subset to appear.
- ⚠️ **Trap:** {q₀, q₂} and {q₀, q₁, q₂} have **identical** moves, so they merge: the minimal DFA for "contains 01" has **3** states, not 4.
- 💡 **Trick:** NFA = "maybe, at once"; DFA = "exactly this one". Count the tuple to name the machine: **5** = FA, **7** = PDA.
- 📌 **IT link:** `grep -E` builds an **NFA**, simulates all its states at once (Thompson's construction), then converts it to a DFA table: cheap description, fast machine.

**Conversion cheat-sheet (the three questions that always come)**

| If the paper asks | Then the answer is |
|---|---|
| "convert this NFA to a DFA" | run subset construction, then **minimise** — the states may merge |
| "how many states will the DFA have?" | **at most 2ⁿ**, and the bound is tight |
| "is DFA and NFA equally powerful?" | **yes**; "DPDA and NPDA?" — **no** |

**State-count cheat-sheet**

| The machine must remember | States needed |
|---|---|
| the last symbol was a | 2 (one parity bit) |
| the last k symbols form a suffix s of length k | k+1 |
| whether the input so far had an even or odd number of a's | 2 |
| the value of a binary string mod m, read MSB first | m (state = remainder, r → (2r+b) mod m) |
| how many a's there are, with no upper bound | **infinitely many** — so no DFA can do it; a PDA can |

## 7. Minimisation & the Pumping Lemma

**Minimising a DFA (table filling)**: (i) drop **unreachable** states; (ii) mark every (accepting, non-accepting) pair, then repeat — mark (p, q) if some symbol sends them to a marked pair; (iii) unmarked pairs are **indistinguishable** ⇒ merge and rebuild. The answer is **unique up to renaming**.

The minimal DFA for strings over {a, b} ending in **ab** has **3** states: q₀ nothing matched yet, q₁ the last symbol was a, q₂ the last two were ab (accepting). Transitions q₀ -a-> q₁, q₀ -b-> q₀; q₁ -a-> q₁, q₁ -b-> q₂; q₂ -a-> q₁, q₂ -b-> q₀.

**Pumping lemma (regular languages).** If L is regular then some length p exists such that **every** w ∈ L with |w| ≥ p splits as w = **xyz** with |xy| < p, |y| > 0 and **xyⁿz ∈ L for every n ≥ 0**. Its only use is the contrapositive: find one w that fails to pump ⇒ **L is not regular**.

- ⚠️ **Trap:** satisfying the lemma does **not** prove regularity — some non-regular languages also satisfy it. "Prove it is regular" is not a pumping-lemma question.

| Language over {a,b} | Regular? | Machine / states |
|---|---|---|
| a* b* · (ab)* | yes | DFA, 2–3 states |
| even number of a's | yes | DFA, 2 states (parity) |
| w ends in ab | yes | DFA, 3 states |
| {aⁿ bⁿ \| n ≥ 0} | **no** | PDA needed |
| {w \| #a = #b} | **no** | PDA needed |
| {aⁿ bⁿ cⁿ \| n ≥ 1} | **no** | not even CF — LBA / TM |

✍ **Worked example — binary divisible by 5.** Read a binary number MSB first; accept when its value ≡ 0 (mod 5), with ε counting as the value 0. Use **one state per remainder** r ∈ {0,1,2,3,4} and move r → **(2r + b) mod 5**: r = 0: 0→0, 1→1 · r = 1: 0→2, 1→3 · r = 2: 0→4, 1→0 · r = 3: 0→1, 1→2 · r = 4: 0→3, 1→4. State 0 is both the **start** and the only **accepting** state. **Trace 1111** (= 15): 0 -1→ 1 -1→ 3 -1→ 2 -1→ 0 ⇒ accept, since 15 mod 5 = 0.

It is minimal: 2 is invertible mod 5, so powers of 2 reach every non-zero residue and any two different remainders can be separated by some suffix of 1s.

## 8. Pushdown Automaton (PDA)

A **pushdown automaton** is a finite automaton plus a **stack** (LIFO memory) — M = (Q, Σ, Γ, δ, q₀, Z₀, F). Each move reads at most one input symbol and one stack symbol, then pushes or pops. One stack remembers **one unbounded count**, so a PDA accepts **exactly the context-free** languages.

| Part | Meaning |
|---|---|
| **Q, Σ, q₀, F** | exactly as in the FA 5-tuple |
| **Γ** *(new)* | the **stack alphabet**: what may sit in the stack |
| **Z₀** *(new)* | bottom marker, Z₀ ∈ Γ; the stack begins as Z₀ and is "bare" when only Z₀ is left |
| **δ** | δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*) — read a symbol (or ε) and a stack top, then replace the top by a **string** |

**Worked example — L = {aⁿ bⁿ | n ≥ 0}, Σ = {a, b}, Γ = {A, Z₀}** (each row reads δ(state, input, top) → (new state, replacement)):

| state | input | top | replaces top | role |
|---|---|---|---|---|
| q₀ | a | Z₀ | A Z₀ | push for the first a |
| q₀ | a | A | A A | push for every further a |
| q₀ → q₁ | b | A | ε | first pop — now counting down |
| q₁ | b | A | ε | keep popping |
| q₁ | ε | A | ε | input over and stack bare ⇒ accept |
| q₀ → q₂ | ε | Z₀ | Z₀ | n = 0: also accept the empty input |

```
input: a a a b b b
stack: Z0 -> AZ0 -> AAZ0 -> AAAZ0 -> AAZ0 -> AZ0 -> Z0  (q2, accept)
```

- ⚠️ **Trap:** the five moves above, on their own, **reject** the empty string — from q₀ with a bare stack there is no ε-move, yet the language reads {aⁿbⁿ | **n ≥ 0**}. So add δ(q₀, ε, Z₀) → (q₂, Z₀), as in the last row, or accept by empty stack. **n ≥ 0 in the statement and no ε-move out of q₀ cannot both be true.**
- ⚠️ **Common misconception:** a **deterministic** PDA does **not** match a nondeterministic one — the opposite of DFA vs NFA. {aⁿbⁿ} and {w c wᴿ} are deterministic context-free; {w wᴿ} needs an **NPDA**, no DPDA can do it.
- 💡 **Trick:** push on the a's, pop on the b's, accept only when the stack is **bare**. "Pushes must equal pops."

## 9. DFA vs NFA vs PDA

| Feature | DFA | NFA | PDA |
|---|---|---|---|
| Formal definition | 5-tuple (Q, Σ, δ, q₀, F) | 5-tuple (Q, Σ, δ, q₀, F) | **7-tuple** (Q, Σ, **Γ**, δ, q₀, **Z₀**, F) |
| Transitions per input | **exactly 1** | 0, 1 or more | 0, 1 or more |
| ε-transitions | not allowed | allowed | allowed |
| Memory | none (state only) | none (state only) | **one stack** |
| Language class | regular (Type 3) | regular (Type 3) | context-free (Type 2) |
| Power compared | DFA and NFA are **equal** — mutually convertible | | strictly stronger than any FA |
| Deterministic form | by definition | nondeterministic | **DPDA < NPDA** — not equal |
| Size / speed | can be exponentially larger, but fastest | often tiny; needs backtracking | states + stack; slower |
| Example language | w ends with 0 | w contains 01 | aⁿ bⁿ, w wᴿ |

| Language | Smallest model |
|---|---|
| a* b* · even number of a's | DFA, 2 states |
| w ends in ab | DFA, 3 states |
| {aⁿ bⁿ \| n ≥ 0} | **DPDA** — deterministic CF |
| {w c wᴿ \| w ∈ {a,b}*} | **DPDA** — deterministic CF |
| {w wᴿ \| w ∈ {a,b}*} | **NPDA only** — no DPDA |
| {aⁿ bⁿ cⁿ} | neither — LBA / TM |

**The ladder of power:** finite automaton ⊂ pushdown automaton ⊂ linear bounded automaton ⊂ Turing machine. Every step up adds memory and accepts **strictly more**.

- 💡 **Trick:** "**FA** = **f**ixation (one state), **PDA** = **p**ile (a stack), **TM** = **t**ape (unbounded, read and write)."
- ⚠️ **Trap:** the inequality students forget — **DPDA ≠ NPDA**, while **DFA = NFA**.
- 📌 **IT link:** a text editor matches brackets with a **stack**; whether a `while`/`if` nests correctly is **not** a finite-automaton property.

---

## Night-before-the-exam fact sheet

- Alphabet Σ, string w, |w|, ε, Σ*, L ⊆ Σ* · |Σⁿ| = |Σ|ⁿ
- star * = zero or more; plus + = one or more; `(a+b)*` = Σ* with ε, `(a+b)+` excludes ε
- `ab*a` = a, zero or more b, then a → "aa" too
- Type 0 ⊃ 1 ⊃ 2 ⊃ 3 (TM, LBA, PDA, FA)
- FA / DFA / NFA = 5-tuple; PDA = 7-tuple + Γ + Z₀
- complete DFA: exactly 1 move per (state, symbol); NFA: 0 or more, ε allowed
- DFA ≡ NFA; subset build ≤ 2ⁿ states, bound tight; DPDA &lt; NPDA
- minimal DFA "ends in ab" = 3 states; binary mod 5 (MSB first) = 5 states, r → (2r+b) mod 5
- pumping lemma proves **NOT** regular, never regular; ε ∈ {aⁿbⁿ | n ≥ 0}

**Which machine does the question want?** Mentions **states, no memory, a tuple of 5** ⇒ DFA · "guess", **several moves** or **ε** ⇒ NFA · **stack**, a tuple of **7**, an aⁿbⁿ-style language ⇒ PDA · needs **two stacks / a tape**, or not context-free at all ⇒ TM.

**Top 12 one-liners for MCQs**

1. DFA = 5-tuple, PDA = 7-tuple
2. Complete DFA ⇒ exactly one transition
3. DFA and NFA accept the same languages
4. Subset construction ≤ 2ⁿ DFA states
5. PDA ⇒ context-free, nothing more
6. star allows zero, plus does not
7. {aⁿbⁿ} is **not** regular — a PDA is needed
8. "ends in ab" needs 3 states
9. binary divisible by 5 needs 5 states
10. the pumping lemma only disproves regularity
11. {w wᴿ} needs nondeterminism
12. ε ∈ {aⁿbⁿ | n ≥ 0}

**All tricks together:** "star = zero or more, plus = one or more" · "five letters, then Γ and Z₀" · "DFA must know, NFA may guess" · "pushes must equal pops" · "FA = fixation, PDA = pile, TM = tape" · "one stack counts one balance".

---

## Practice MCQs (exam pattern, 10 marks)

1. A DFA is a tuple of how many parts? (a) 3 (b) 4 (c) 5 (d) 7
2. In a **complete** DFA, each state has on each symbol: (a) exactly 1 move (b) at most 1 (c) 0 or more (d) at least 2
3. An NPDA accepts exactly the: (a) regular languages (b) context-sensitive (c) recursively enumerable (d) context-free
4. Over {a, b}, (a + b)* denotes: (a) all strings, with ε (b) non-empty ones (c) #a = #b (d) only aⁿbⁿ
5. Which one is **NOT** regular? (a) a* b* (b) (ab)* (c) even # of a (d) {aⁿ bⁿ | n ≥ 0}
6. Which string is in ab*a? (a) ab (b) aa (c) ba (d) abab
7. An n-state NFA gives at most: (a) n states (b) 2n states (c) n² states (d) 2ⁿ states
8. Minimal DFA for "ends in ab": (a) 2 states (b) 3 states (c) 4 states (d) 5 states
9. The pumping lemma proves a language is: (a) minimal (b) convertible (c) NOT regular (d) regular
10. Minimal DFA for binary divisible by 5: (a) 5 states (b) 2 states (c) 4 states (d) 32 states

**Answer key:** 1-c · 2-a · 3-d · 4-a · 5-d · 6-b · 7-d · 8-b · 9-c · 10-a

## Written question (8 marks)

Design a DFA over the alphabet {0, 1} that accepts exactly the strings ending in **01**. Give its transition table and trace it on the input `1101`.

**Model answer:**

1. **States** (2) — **q₀** start, nothing matched; **q₁** the last symbol read was 0; **q₂** the last two symbols were 01 — **accepting**.
2. **Table** (3), one move per symbol: → q₀ | q₁ | q₀ · q₁ | q₁ | q₂ · * q₂ | q₁ | q₀. So M = ({q₀, q₁, q₂}, {0,1}, δ, q₀, {q₂}).
3. **Trace 1101** (3): q₀ -1→ q₀ -1→ q₀ -0→ q₁ -1→ q₂ ∈ F ⇒ **accepted**; and the DFA is minimal, because input 1 separates q₀ from q₁.

**Template to memorise:** a **k**-symbol suffix always needs **k+1** states — q₀ nothing matched … q_k the whole suffix just read (accepting).

**Also practise (written):** ① minimise a 5-state DFA by table filling ② convert the "contains ab" ε-NFA to a DFA ③ a DPDA for {w c wᴿ}, and why {w wᴿ} needs an NPDA ④ a pumping-lemma proof for {aⁿ bⁿ}.

**Before the exam ✓** Can write the 5-tuple and the 7-tuple from memory · Can draw DFAs and NFAs for "ends with" and "contains" · Can run subset construction on a 3-state NFA · Know what the pumping lemma can and cannot prove.