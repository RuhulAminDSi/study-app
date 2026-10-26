# Counting, Inclusion-Exclusion, Recurrence & Algebraic Structures: Revision Notes (Govt IT Exam)

> Plain-text companion to the handwritten-style PDF of this lesson (11 sheets).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Discrete Mathematics):** "… Mathematical reasoning: induction, contradiction and recursion; **Counting; Principles of inclusion and exclusion; Recurrence relations; Algebraic structures: rings and groups**." Those four items are this notebook; sets, relations, induction and graph theory belong to other lessons of the chapter.

**High-yield:** ① Addition = **OR**, multiplication = **AND** ② n! arrangements, **0! = 1**, subsets = **2ⁿ** ③ ⁿP_r = n!/(n−r)!, ⁿC_r = n!/[r!(n−r)!] ④ **nCr = nPr / r!** ⑤ LEVEL ⇒ 5!/(2!·2!) = **30** ⑥ |A ∪ B| = |A|+|B|−|A∩B|; a 3-set adds the triple back ⑦ 1..100 by 3 or 5 = 33+20−6 = **47** ⑧ pigeonhole on months ⇒ **13** ⑨ Dₙ = n!(1−1+1/2!−1/3!+…); **D₄ = 9** ⑩ Fibonacci ⇒ r² − r − 1 = 0; a(n) = a(n−1)+6a(n−2) ⇒ r = 3, −2 ⑪ Lagrange: **|H| divides |G|** ⑫ field = commutative ring, every non-zero invertible.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. Counting principles, subsets & pigeonhole — p. 2 · 2. Permutations & combinations — p. 3 · 3. Inclusion–exclusion — p. 4 · 4. PIE in depth & derangements — p. 5 · 5. Recurrence relations: definition & types — p. 6 · 6. Characteristic-equation method — p. 7 · 7. Semigroups, groups & Lagrange — p. 8 · 8. Rings, integral domains & fields — p. 9 · 9. Night-before sheet — p. 10 · 10. Practice MCQs + written — p. 11.

---

## 1. Counting Principles, Subsets & Pigeonhole

**Counting** (combinatorics) is the study of **how many** ways a collection of objects can be selected, arranged or distributed. **n! = n(n−1)···1** counts the ways of putting n distinct objects in a row, and **0! = 1** — the one empty arrangement.

| Principle | Exact statement | Use it when |
|---|---|---|
| **Addition (Sum)** | a task is done in m ways **or** n ways, never both ⇒ **m + n** | the cases are **mutually exclusive** |
| **Multiplication (Product)** | a task needs m ways **and** then n ways ⇒ **m × n** | the stages happen **one after another** |
| **Bijection** | two sets have the same size iff a **one-to-one pairing** exists | you can **rename** one set as the other |

**The pigeonhole principle (Dirichlet).** Put n objects into k boxes. **If n > k, at least one box holds two or more.** A "guarantee" question therefore answers **n = k + 1**, and some box gets at least **⌈n/k⌉**.

*(Doodle: three month-boxes (Jan, Feb, Mar) with four dots; three of them land on the first two boxes and the fourth overflows. Caption: pigeonhole — objects > boxes forces a collision.)*

✍ **Worked example — birthdays.** Months are the boxes, k = 12. With 12 students every one **could** be born in a different month; with **13** a repeat is forced ⇒ **13**. The day version needs k = 366 and gives 367.

- 💡 **Trick:** "**O**R **A**dds, **A**ND **M**ultiplies." Read the word joining the two conditions: **or** means add the two counts, "must happen together" means multiply.
- ⚠️ **Trap:** (i) addition needs **disjoint** cases; overlapping ones need inclusion–exclusion (§3); (ii) **n! counts order** — 5 people in 5 chairs is 5! = **120**, and 720 is 6!, the trap; (iii) 0! = **1**; (iv) for a pigeonhole guarantee, "12 months" is **not** the answer.

✍ **Worked example — subsets and power sets.** A set with n elements has exactly **2ⁿ subsets**, because every element is independently in or out. It has **2ⁿ − 1** proper subsets and **2ⁿ − 1** non-empty subsets — the two counts coincide. A 5-element set therefore has 32, 31 and 31. **Splitting a set into two labelled parts is also 2ⁿ.**

📌 **IT link.** Binary representation of a k-bit string has **2ᵏ** values, and the addition principle is literally how address ranges are summed. Choosing a bitmask with n set bits out of 32 is ³²C_n, which is why subnet masks are counted that way. Pigeonhole reappears in hashing: n keys in m buckets forces a collision as soon as **n > m**, which is the entire reason hash tables have a load factor.

## 2. Permutations & Combinations

An **arrangement** of r objects chosen from n distinct objects, **in which order matters**, is a **permutation**: **ⁿP_r = n! / (n − r)!**. When order **does not** matter it is a **combination**: **ⁿC_r = n! / [r! (n − r)!]**. Each combination generates exactly r! orderings of its members, so **ⁿC_r = ⁿP_r / r!**, and ⁿC_r = ⁿC_(n−r).

| Question type | Tool | Watch out |
|---|---|---|
| seating, ranking, lining up, codes without repetition | **ⁿP_r** | order matters |
| committee, team, hand of cards, choose r dates | **ⁿC_r** | order irrelevant |
| select all r, then arrange them | **ⁿC_r · r!** | gives back ⁿP_r |
| objects repeated p, q, … times | **n! / (p! q! …)** | divide by **every** repeat |
| circular seating of n people | **(n − 1)!** | rotations are identical |

*(Doodle: a hub labelled "A B" with four boxes — two blue (order on: AB · BA) and two red (order off: AB once); the footer reads 30 ÷ 2! = 15 — committee.)*

- 💡 **Trick:** "**P**ermutation **P**ositions — order is a position, so it counts; **C**ombination is a **C**ommunity — no chair, no order." Divide the permutation answer by **r!** to strip the order off: that is the size of the error.

✍ **Worked examples.** **(a)** Committee of 2 from 6: order irrelevant ⇒ ⁶C₂ = 15. **30** = ⁶P₂ counts **ordered** pairs, the standard distractor. **(b)** 5 books, 2 chosen and placed: ⁵P₂ = 20; "which two" alone is ⁵C₂ = 10. **(c)** 5 people in 5 chairs = 5! = **120**; round a table (5−1)! = 24.

✍ **Worked example — letters with repeats.** **LEVEL**: 5 letters, L twice and E twice, so distinct arrangements = **5!/(2!·2!) = 120/4 = 30**. Divide once per repeated letter in **BOOKKEEPER**, and check the quotient is a **whole number**.

- ⚠️ **Trap:** (i) ⁿC_r = ⁿP_r/**r!**, not /n!; (ii) at r = n the combination is 1 and the permutation is n!; (iii) "round a table" removes rotations, so divide by n; (iv) two identical coins **are** indistinguishable, two people who merely look alike are not; (v) a password is a permutation even when digits repeat.

## 3. Principle of Inclusion–Exclusion (PIE)

The **principle of inclusion–exclusion** counts the elements of a union of overlapping sets. For two sets **|A ∪ B| = |A| + |B| − |A ∩ B|**: adding the two sizes counts the overlap twice, so subtract it once. For three sets **|A ∪ B ∪ C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|** — the triple was added once and subtracted three times, so it must be **added back once**.

*(Doodle: three overlapping circles A, B, C with the triple region shaded red and labelled ABC; caption: subtract each pairwise overlap, add the triple back.)*

| Quantity you want | Formula |
|---|---|
| **none** of the sets | \|U\| − \|A ∪ B ∪ C\| |
| **exactly one** set | Σ\|single\| − 2 Σ\|pair\| + 3 \|triple\| |
| **at least one** | \|U\| − \|A′ ∩ B′ ∩ C′\| |
| **at least two** | Σ\|pair\| − 2 \|triple\| |

**General alternating form.** |A₁ ∪ … ∪ Aₙ| = Σ|Aᵢ| − Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| − ⋯ + (−1)ⁿ⁻¹Σ_all Aᵢ. The signs strictly alternate **+**, **−**, **+**, **−**; the k-th term combines **k** sets at a time.

✍ **Worked example — integers 1 to 100 divisible by 3 or by 5.** Let A = multiples of 3, B = multiples of 5. |A| = ⌊100/3⌋ = **33**, |B| = ⌊100/5⌋ = **20**, A ∩ B = multiples of 15 so |A ∩ B| = ⌊100/15⌋ = **6**. Hence **|A ∪ B| = 33 + 20 − 6 = 47**. Trap options: 33 alone, 53 = 33 + 20 with no subtraction, 41 = 33 + 20 − 12.

✍ **Worked example — none of three subjects.** 100 students; 45 read M, 40 read P, 35 read C; 15 read M and P, 10 read P and C, 12 read M and C; 5 read all three. |M ∪ P ∪ C| = 45 + 40 + 35 − 15 − 10 − 12 + 5 = 120 − 37 + 5 = **88**, so those reading **none** = 100 − 88 = **12**. Forgetting to add the 5 back gives 17, the standard wrong option.

- 💡 **Trick:** "**P**lus the singles, **m**inus the pairs, **p**lus the triples", then keep flipping the sign. An element in exactly **k** sets must finish counted once, and the alternating sum 1 − (k−1) + (k−2 choose 2) − ⋯ = (1 − 1)ᵏ = 0 guarantees it.
- ⚠️ **Trap:** (i) "at least one" is a **union**, "none" is its complement; (ii) the triple intersection is added **once** — dropping it is the commonest error; (iii) write the six pairwise terms out before substituting; (iv) a universal set of size n is **assumed** unless stated.

✍ **Worked example — exactly one subject.** In the class above, exactly **one** subject = 45 + 40 + 35 − 2(15 + 10 + 12) + 3(5) = 120 − 74 + 15 = **61**. Exactly **two** = 15 + 10 + 12 − 3(5) = **22**, and 61 + 22 + 5 = 88 with the 12 outside making 100 — a useful internal check.

**Counting by complements — the habit that saves time.** When a question says **at least one**, compute **none** and subtract, because the "none" count is always the easier one. "Not both" = total − both; "at least one of each kind" = total − (no A) − (no B) + (no A and no B).

## 4. PIE in Depth & Derangements

A **derangement** of n objects is a permutation in which **no object is in its own place**. Let Dₙ count them. Inclusion–exclusion applied to the n events "object i is in its place" gives **Dₙ = n! (1 − 1/1! + 1/2! − 1/3! + ⋯ + (−1)ⁿ/n!)**, and an equivalent two-step recurrence is **Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂)**.

| n | n! | Dₙ by the formula | Dₙ by (n−1)(Dₙ₋₁+Dₙ₋₂) |
|---|---|---|---|
| 1 | 1 | 0 | — |
| 2 | 2 | 1 | 1 × (1 + 0) = 1 |
| 3 | 6 | 2 | 2 × (1 + 1) = 2 |
| 4 | 24 | **9** | 3 × (2 + 1) = 9 |
| 5 | 120 | 44 | 4 × (9 + 2) = 44 |
| 6 | 720 | 265 | 5 × (44 + 9) = 265 |

*(Doodle: two columns — letters and addressed envelopes — with the diagonal crossed out in red; the green arrows show the six allowed derangements. Caption: the red cross kills the four fixed points.)*

✍ **Worked example — four letters into four addressed envelopes.** D₄ = 4! (1 − 1 + 1/2 − 1/6 + 1/24) = 0 + 24/2 − 24/6 + 24/24 = 0 + 12 − 4 + 1 = **9**. Quick route: D₄ = 3(D₃ + D₂) = 3 × (2 + 1) = **9**. Near misses: 6, 11, 23.

**How to read the derangement formula.** Start from all **n!** arrangements and apply PIE to the "in its place" events: subtract the arrangements with a specified letter home, add back the pairs that are both home, subtract the triples, and so on to the n-th sign. The events are symmetric, so each k-fold intersection contains **(n−k)!** arrangements — that is exactly where the 1/k! terms come from.

- ⚠️ **Trap:** (i) the first two terms **cancel**: n! − n!/1! = 0; (ii) D₁ = **0**, which is why the recurrence needs two initial values; (iii) for n ≥ 2, Dₙ is never more than **n!/2**; (iv) "no two letters adjacent" is a different PIE problem with blocks, and the plain formula will not give it.

📌 **IT link.** A spell checker or a firewall rule base avoids double counting: a packet rejected by several rules must be subtracted back into the "rejected at least once" count. The same arithmetic decides how many inputs a **k-of-n** threshold circuit accepts.

✍ **Worked example — a derangement variant.** "Nobody in place, and A must not be first." Split on where A goes: it can go to position 2 or 3, and each branch contributes D₃ + D₂ = 3, so the answer is 2 × 3 = **6**. This case split on one object is the standard attack on any restricted-arrangement question. **Stirling numbers** S(n, k) — partitions of n objects into k non-empty unordered groups — refine this further: S(n, 2) = 2ⁿ⁻¹ − 1.

## 5. Recurrence Relations: Definition & Types

A **recurrence relation** is an equation expressing **aₙ** in terms of a fixed number of its **preceding terms**. The number of preceding terms used is the **order**: aₙ = aₙ₋₁ + 6aₙ₋₂ is of **order 2**. The independent values are the **initial conditions**, and **a recurrence of order k needs exactly k initial values** to fix the whole sequence.

| Classification | Test | Example |
|---|---|---|
| **Linear** | aₙ appears to the **first power** only | aₙ = 2aₙ₋₁ + 3 |
| **Non-linear** | aₙ multiplied by itself or to a variable power | aₙ = aₙ₋₁², &nbsp; aₙ = n·aₙ₋₁ |
| **Homogeneous** | no term depending on **n alone** | aₙ = aₙ₋₁ + aₙ₋₂ |
| **Non-homogeneous** | a term such as 3, n or 2ⁿ appears | aₙ = 2aₙ₋₁ + n |
| **Order 1 / order 2** | one / two preceding terms | aₙ = 2aₙ₋₁ + 1 / Fibonacci |
| **Constant coefficients** | the multipliers of aₙ₋₁, aₙ₋₂ … do not vary with n | aₙ = 3aₙ₋₁ − 2aₙ₋₂ |

**The three solving methods.** **1. Iteration** — write a₁, a₂, a₃ … and read the pattern. **2. Characteristic equation** — for a linear homogeneous relation with constant coefficients; the standard method and the one that carries marks. **3. Generating function** — replace aₙ by A(x) = Σ aₙxⁿ, multiply by xⁿ and sum, then read off a rational function whose coefficient expansion is the sequence.

*(Doodle: three nodes a₀ → a₁ → a₂ linked by green "+3" arrows; the first two are initial values (yellow and blue) and only the third is forced. Caption: iteration — each arrow is one application, never a division.)*

✍ **Worked example — iteration.** aₙ = aₙ₋₁ + 3 with a₀ = 2 gives 5, 8, 11 — each step adds the **same** 3, so aₙ = **2 + 3n**. For aₙ = 2aₙ₋₁ + 3 with a₀ = 1 the values 5, 13, 29 **double then add 3**, which is not geometric, so shift: set bₙ = aₙ + 3, then bₙ = 2bₙ₋₁ and **aₙ = 4·2ⁿ − 3**.

- ⚠️ **Trap:** (i) "homogeneous" is about the **n-dependent term** — aₙ = n·aₙ₋₁ is non-homogeneous; (ii) order counts the **highest lag**, so aₙ = aₙ₋₂ is still order 2; (iii) iteration is only a legal written method if the closed form is then **proved** by induction; (iv) a repeated root needs the extra n factor (see §6).

## 6. Characteristic-Equation Method

For **aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ⋯ + c_k aₙ₋ₖ** substitute the trial solution **aₙ = rⁿ**. Dividing by rⁿ⁻ᵏ gives the **characteristic equation** **rᵏ − c₁rᵏ⁻¹ − c₂rᵏ⁻² − ⋯ − c_k = 0**. Each **distinct** root rᵢ contributes Aᵢrᵢⁿ; a root repeated m times contributes rⁿ(A + Bn + ⋯). The constants come from the initial conditions.

*(Doodle: a decaying exponential curve meeting the axis at r₁ = 3 and a second curve at r₂ = −2, with the ordinate |r₁| marked. Caption: each root gives one term of the general solution.)*

✍ **Worked example — a(n) = a(n−1) + 6a(n−2), a₀ = 2, a₁ = 1.**
**Step 1 — type.** Order 2, linear, homogeneous, constant coefficients ⇒ the characteristic method applies.
**Step 2 — characteristic equation.** Put aₙ = rⁿ: rⁿ = rⁿ⁻¹ + 6rⁿ⁻² ⇒ **r² = r + 6 ⇒ r² − r − 6 = 0 ⇒ (r − 3)(r + 2) = 0**, so r₁ = 3, r₂ = −2, distinct.
**Step 3 — general solution.** **aₙ = A·3ⁿ + B·(−2)ⁿ**.
**Step 4 — initial conditions.** n = 0: A + B = 2. n = 1: 3A − 2B = 1. Twice the first plus the second gives 5A = 5 ⇒ A = 1, and B = 1.
**Step 5 — check.** **aₙ = 3ⁿ + (−2)ⁿ**. From the recurrence a₂ = 1 + 6·2 = **13**, and the formula gives 9 + 4 = 13 ✓. a₃ = 13 + 6·1 = **19**, and the formula gives 27 − 8 = 19 ✓.

| Recurrence | Characteristic equation | Roots |
|---|---|---|
| Fibonacci Fₙ = Fₙ₋₁ + Fₙ₋₂ | r² − r − 1 = 0 | (1 ± √5)/2 |
| aₙ = aₙ₋₁ + 6aₙ₋₂ | r² − r − 6 = 0 | 3, −2 |
| aₙ = 2aₙ₋₁ + aₙ₋₂ | r² − 2r − 1 = 0 | 1 ± √2 |
| aₙ = 3aₙ₋₁ (order 1) | r − 3 = 0 | 3 |
| aₙ = 2aₙ₋₁ − aₙ₋₂ (double root) | (r − 1)² = 0 | 1 twice ⇒ A + Bn |

**Two sequences worth memorising.** **Arithmetic** — aₙ = aₙ₋₁ + d, giving **aₙ = a + nd**, with Σₖ₌₁ⁿ aₖ = n/2·(2a + (n−1)d). **Geometric** — aₙ = r·aₙ₋₁, giving **aₙ = a·rⁿ**, with Σₖ₌₁ⁿ aₖ = a(rⁿ − 1)/(r − 1) for r ≠ 1.

- ⚠️ **Trap:** (i) Fibonacci's characteristic equation is **r² − r − 1 = 0**; r² − r + 1 = 0 is the classic slip; (ii) move everything to one side first: aₙ = aₙ₋₁ + 6aₙ₋₂ gives r² − r − 6, **not** r² − r + 6; (iii) a repeated root needs (A + Bn)rⁿ, never Arⁿ; (iv) order 2 means **two** initial values.

📌 **Where recurrences earn their keep.** Master-s Theorem analyses divide-and-conquer algorithms. For T(n) = 2T(n/2) + n: a = 2, b = 2, so n^(log_b a) = n, and f(n) = n is Θ(n) — **case 2**, giving **T(n) = Θ(n log n)**. Case 1 is when f(n) dominates (merge sort), case 3 when it is polynomially smaller (binary search). Fibonacci is the cost of naive recursion, so an app reporting "how many calls" is solving a recurrence. Dynamic-programming tables (edit distance, coin change) are the same idea written bottom-up.

## 7. Semigroups, Groups & Lagrange's Theorem

A **binary operation** * on a set G assigns to every ordered pair (a, b) exactly one element of G. The four **group axioms** are **closure** (a*b ∈ G), **associativity** ((a*b)*c = a*(b*c)), **identity** (∃e with a*e = e*a = a) and **inverse** (∀a, ∃a⁻¹ with a*a⁻¹ = e). Add **a*b = b*a** and the group is **Abelian**. **Associativity and commutativity are different properties.**

| Structure | What it adds |
|---|---|
| **Semigroup** | closure + associativity only |
| **Monoid** | a semigroup with an identity element |
| **Group** | a monoid in which every element has an inverse |
| **Abelian group** | a group that is also commutative |
| **Cyclic group** | generated by one element g: {g⁰, g¹, …} |
| **Subgroup H ≤ G** | a subset that is itself a group under the same operation |

*(Doodle: four nested boxes — group G → Abelian group → group → monoid → semigroup — one axiom per step. Caption: each box keeps every outer axiom.)*

**Lagrange's theorem.** Let H be a subgroup of a finite group G. Then **|H| divides |G|**, and |G| = |H| × (number of distinct cosets). In words: **the order of a subgroup must divide the order of the group**, and the cosets cut G into equal pieces. Corollary: a group of prime order p has **no non-trivial proper subgroup**.

✍ **Worked example.** **(ℤ, +)** is an **Abelian group**: closure, associativity, identity **0**, inverse **−a**, commutative. **(ℤ₆, +)** is a **cyclic** Abelian group of order 6 generated by 1; by Lagrange it has subgroups of order 1, 2 and 3 only. **(ℚ\*, ×)** is an Abelian group with identity 1, but **(ℤ\*, ×)** is not, since 2 has no inverse in ℤ.

- ⚠️ **Trap:** (i) Lagrange is **necessity, not sufficiency**: 4 divides 12, but a group of order 12 need not contain a subgroup of order 4 (A₄ does not); (ii) in (ℤ₆, +) the element 2 has order 3 and 3 has order 2; (iii) a **semigroup has no identity**; (iv) closure is not automatic: on ℤ the operation − is **not** closed, since 1 − 2 = −1 ∉ ℤ.

**Order of an element, two groups to recognise, and the crypto link.** The **order of g** is the least positive k with gᵏ = e; in ℤₙ it is n/gcd(n, g), so ord(2) in ℤ₆ is 3 and ord(3) is 2. The **symmetric group Sₙ** of all permutations of n objects is a group of order n! — not Abelian for n ≥ 3, because composition reverses order. The **alternating group Aₙ** is the subgroup of even permutations and has order n!/2, exactly as Lagrange demands. Every public-key cipher is a group in disguise: encryption is an element of a finite group, decryption is its inverse, and security means nobody can compute that inverse without the private key. RSA works in ℤₙ\*, of order φ(n).

## 8. Rings, Integral Domains & Fields

A **ring** (R, +, ×) has two binary operations: (R, +) is an **Abelian group**, (R, ×) is a **semigroup** (closed and associative, identity not required), and multiplication **distributes** over addition both ways. Add a multiplicative identity 1 and it is a **ring with unity**; add commutativity of × and it is **commutative**; add "no zero divisors" and it is an **integral domain**; add "every non-zero element is invertible" and it is a **field**.

| Set with operations | Abelian group? | Ring with unity? | Integral domain? | Field? |
|---|---|---|---|---|
| (ℤ, +, ×) | yes, under + | **yes** | **yes** | **no** |
| (ℚ, +, ×) | yes, under + | **yes** | **yes** | **yes** |
| (ℝ, +, ×) | yes, under + | **yes** | **yes** | **yes** |
| (ℂ, +, ×) | yes, under + | **yes** | **yes** | **yes** |
| (ℤ₆, +, ×) | yes, under + | **yes** | **no** | **no** |
| M₂(ℝ), matrix + and × | yes, under + | **yes** | **no** | **no** |
| GL(n), × only | yes; Abelian only n ≤ 2 | n/a | n/a | n/a |

*(Doodle: four nested boxes — ring → ring with unity → commutative ring → integral domain → field. Caption: each inner box adds exactly one condition.)*

**Why each row reads that way.** **ℤ** fails only the field test: 2 has no inverse in ℤ. **ℚ**, **ℝ** and **ℂ** are fields — 1/z is the conjugate of z scaled by |z|². **ℤ₆** has zero divisors (2·3 = 0) and **M₂(ℝ)** contains a zero matrix, so neither is a domain; **GL(n)** is settled by the **determinant**.

- 💡 **Trick:** "**G**roup = **one** operation, and it must have an **I**nverse; **R**ing = **two** operations, and multiplication need **not** have one." Read the hierarchy downward as **F**ield → **I**ntegral **D**omain → **C**ommutative ring → ring → semigroup: the extra letters are exactly the extra conditions.
- ⚠️ **Trap:** (i) a **ring need not have an identity** — that is the whole difference between "ring" and "ring with unity"; (ii) ℤ is an integral domain but **not** a field: only ±1 are units; (iii) 6 being composite is not why ℤ₆ fails, the zero divisors are; (iv) every ring is an **Abelian group under +**.

**Applications.** **Cryptography.** RSA works in ℤₙ under multiplication: the public key uses e with gcd(e, φ(n)) = 1, the private key d with ed ≡ 1 mod φ(n). **Elliptic-curve cryptography** swaps that multiplicative group for the points on a curve — still a group, with far smaller keys. **Coding theory** builds linear codes as subgroups of ℤ₂ⁿ, measured by minimum Hamming distance: correcting t errors needs d ≥ 2t + 1. **Computer algebra** works over fields so a non-zero polynomial has at most its degree many roots, which is what makes gcd and integration terminate.

## Night-Before-the-Exam Sheet

**Fact sheet.** OR adds, AND multiplies · n! arrangements, **0! = 1** · n-element set ⇒ **2ⁿ** subsets, proper subsets = 2ⁿ − 1 · pigeonhole: n > k ⇒ a clash, guarantee needs **k + 1** · months ⇒ **13**, days ⇒ 367 · ⁿP_r = n!/(n−r)! · ⁿC_r = n!/[r!(n−r)!] · **nCr = nPr/r!** · nCr = nC_(n−r) · repeats: n!/(p! q! …) · LEVEL ⇒ 5!/(2!2!) = **30** · round a table ⇒ (n−1)! · |A ∪ B| = |A|+|B|−|A∩B|, 3-set adds the triple back · 1..100 by 3 or 5 = **47**, none of three = **12** · Dₙ = n!(1−1+1/2!−1/3!+…), **D₄ = 9**, D₅ = 44, D₆ = 265 · Dₙ = (n−1)(Dₙ₋₁+Dₙ₋₂), order k ⇒ k initial values · arithmetic aₙ = a + nd, geometric aₙ = a·rⁿ · Fibonacci ⇒ r² − r − 1 = 0 · a(n)=a(n−1)+6a(n−2) ⇒ r = 3, −2 · solution aₙ = **3ⁿ + (−2)ⁿ**, a₂ = 13, a₃ = 19 ✓ · repeated root ⇒ (A + Bn)rⁿ · Lagrange: |H| **divides** |G| · semigroup ⊂ monoid ⊂ group · field = commutative ring + inverses · ℤ is a domain, **not** a field · ℤ₆ has zero divisors · M₂(ℝ) is a ring, not a domain · GL(n) under × is a group.

**Top 12 one-liners for MCQs.**
1. Order matters ⇒ **nPr**, not nCr
2. **nCr = nPr / r!**
3. Three-set PIE **adds** the triple back
4. "At least one" is a **union**
5. Derangements: **D₄ = 9**
6. Pigeonhole guarantee = **holes + 1**
7. Homogeneous ⇒ no **n-only** term
8. Fibonacci ⇒ **r² − r − 1 = 0**
9. Order 2 ⇒ **two** initial conditions
10. Lagrange is **necessity only**
11. A ring need **not** have 1
12. ℤ is a domain, **not** a field

**Top traps.** "5 people in 5 chairs = 720" (that is 6!) · reading a committee question as ordered, so 30 instead of 15 · forgetting the + |A∩B∩C| term and getting 17 instead of 12 · answering "12 months" to a pigeonhole guarantee question · forgetting the 2!·2! divisor and getting 120 for LEVEL · treating Dₙ as n! · writing r² − r + 6 for a(n) = a(n−1) + 6a(n−2) · using one initial value for an order-2 recurrence · quoting Lagrange as "every divisor appears" · calling ℤ a field.

*(Doodle: two boxes — COUNT RIGHT (green) and COUNT WRONG (red) — with the eight numbers and four traps split between them.)*

## Practice MCQs (exam pattern, 10 marks)

1. 5 people in a row of 5 chairs: (a) 120 (b) 720 (c) 60 (d) 24
2. A committee of 2 from 6 people: (a) 30 (b) 15 (c) 12 (d) 36
3. Integers 1..100 divisible by 3 or 5: (a) 53 (b) 41 (c) 47 (d) 33
4. Students needed to guarantee two born in one month: (a) 12 (b) 24 (c) 366 (d) 13
5. Distinct arrangements of LEVEL: (a) 30 (b) 60 (c) 120 (d) 20
6. Four letters into four envelopes, none correct: (a) 11 (b) 23 (c) 6 (d) 9
7. 100 students, 45 M / 40 P / 35 C, 15 MP / 10 PC / 12 MC, 5 all — study none: (a) 17 (b) 12 (c) 22 (d) 7
8. Subsets of a 5-element set: (a) 31 (b) 16 (c) 32 (d) 25
9. Characteristic equation of Fibonacci: (a) r² − r − 1 = 0 (b) r² + r − 1 = 0 (c) r² − r + 1 = 0 (d) r² − 2r − 1 = 0
10. A group of order 12 must have a subgroup of order: (a) 5 (b) 7 (c) 4 (d) 8

**Answer key:** 1-a · 2-b · 3-c · 4-d · 5-a · 6-d · 7-b · 8-c · 9-a · 10-c

## Written question (10 marks)

(i) Solve a(n) = a(n−1) + 6a(n−2), n ≥ 2, a(0) = 2, a(1) = 1, verifying at n = 2, 3. (ii) How many integers 1..100 are divisible by 3 or 5, and by neither? (iii) Classify (ℤ, +, ×), (ℤ₆, +, ×), M₂(ℝ), (ℚ, +, ×). (iv) State Lagrange's theorem and list the possible subgroup orders of a group of order 12.

**Model answer:**

1. **Recurrence (3)** — aₙ = rⁿ gives r² − r − 6 = 0 ⇒ r = 3, −2. Then A + B = 2 and 3A − 2B = 1 ⇒ A = B = 1, so **aₙ = 3ⁿ + (−2)ⁿ**. Check a₂ = 13 = 9 + 4 ✓, a₃ = 19 = 27 − 8 ✓.
2. **Inclusion–exclusion (2)** — 33 + 20 − 6 ⇒ **47** by 3 or 5, **53** by neither.
3. **Classification (3)** — ℤ: domain, **not** a field. ℤ₆ and M₂(ℝ): rings with unity with zero divisors, so neither domain nor field. ℚ: all four. Every ring is an **Abelian group under +**.
4. **Lagrange (2)** — **|H| divides |G|**; for |G| = 12 the orders are **1, 2, 3, 4, 6, 12**, necessary only.

**Also practise (written):** ① show by induction that aₙ = 3ⁿ + (−2)ⁿ satisfies the recurrence of (i) ② use PIE on three sets of your own numbers and verify each of the five standard forms ③ give a bijective proof that ⁿC_r = ⁿP_r/r! ④ classify (ℤ₂ × ℤ₂, +, ×) and decide whether it is a field ⑤ list the subgroups of ℤ₁₂ by order.

**Before the exam ✓** decide nPr vs nCr from the word "order" · write out the six pairwise PIE terms · build the characteristic equation before any algebra · quote "field = domain + every non-zero invertible" · remember D₄ = 9 and LEVEL = 30.