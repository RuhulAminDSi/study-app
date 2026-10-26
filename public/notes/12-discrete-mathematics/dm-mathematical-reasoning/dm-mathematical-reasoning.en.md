# Mathematical Reasoning: Induction, Contradiction & Recursion: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/12-discrete-mathematics/dm-mathematical-reasoning.en.html` (handwritten-style PDF: `notes/pdf/12-discrete-mathematics/dm-mathematical-reasoning.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Discrete Mathematics):** "Discrete Mathematics, Theory of Computation and Basic Graph Theory: Set theory; Relations; Functions; Graph theory; Propositional calculus and predicate calculus; **Mathematical reasoning: induction, contradiction and recursion**; Counting; Principles of inclusion and exclusion; Recurrence relations; Algebraic structures: rings and groups." This notebook covers the item in bold. Sets, relations and functions are in the first lesson; graph theory and the two calculi are in the previous one; counting, inclusion–exclusion and algebraic structures are the next.

**High-yield:** ① induction = base case P(1) **+** step **P(k) ⇒ P(k+1)** ② the step must hold for **every** k ≥ 1, and in the **forward** direction ③ 1+2+…+n = **n(n+1)/2** and 1+2+2²+…+2ⁿ = **2ⁿ⁺¹ − 1** ④ contradiction: assume **the negation** of P, derive ⊥ ⑤ √2 irrational: p² = 2q² ⇒ p, q both even ⇒ gcd ≠ 1 ⑥ contrapositive ¬Q → ¬P is **equivalent**, the converse Q → P is not ⑦ n! = 1 (n = 0) else n·(n−1)!; F(n) = F(n−1)+F(n−2) ⑧ recursion must **strictly decrease** or it never ends ⑨ naive fib(5) = **15** calls ≈ 1.618ⁿ, factorial = **6** calls, O(n) ⑩ induction ⇒ **tree: n vertices ⇒ n − 1 edges**; contradiction ⇒ **halting undecidable**.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

**Contents:** 1. What a proof is — p. 2 · 2. Induction: the two parts — p. 3 · 3. Worked proof Σ 1…n — p. 4 · 4. Worked proof Σ powers of 2 and strong induction — p. 5 · 5. Proof by contradiction — p. 6 · 6. Contradiction in action — p. 7 · 7. Contradiction vs contrapositive — p. 8 · 8. Recursion — p. 9 · 9. Recursion ↔ induction and cost — p. 10 · 10. Which method do I use? — p. 11 · 11. Night-before sheet — p. 12 · 12. Practice MCQs + written — p. 13.

---

## 1. What a Proof Is

**Mathematical reasoning** is the logical process of deducing conclusions from given statements or **premises**. A **proof** is an argument whose every inference is valid; it is **valid** when the conclusion cannot fail however the premises turn out, and **sound** when the premises were also true. **A proof must cover every admissible case, not the cases you happened to try.**

| Method | Shape of the argument | Best for |
|---|---|---|
| **Direct proof** | P follows from the premises by known rules | most theorems |
| **Contradiction** | **assume ¬P**, derive the impossible | "no such thing exists" |
| **Contrapositive** | P → Q proved as ¬Q → ¬P — **equivalent** | implications denying a hypothesis |
| **Induction** | P(1) holds, and P(k) ⇒ P(k+1) for every k | statements about ℕ |
| **Counterexample** | one failing case kills a universal claim | disproving, never proving |

**Sound ⇒ valid, never the reverse:** validity is a property of the *steps*, soundness also of the *premises*. An argument can be valid and still conclude something false, because a premise was false.

**What counts as a premise.** **Definitions**, which you may unfold inside the proof · **axioms**, assumed for the branch of mathematics in hand · **lemmas** you have already proved · the **hypotheses** of the statement itself. What does **not** count: "it is well known", "the diagram makes it clear", "it checks out for small cases". An unproved appeal to a lemma is the commonest way marks are lost.

- ⚠️ **Trap:** a **counterexample disproves** but never proves, and a **single true instance** never proves a universal claim. "I checked n = 1 … 10 and it held" is **not** a proof about all n — that gap is exactly what induction was invented to close.
- 💡 **Trick — naming the method from the shape of the question:** "For every n ≥ 1 …" → **induction** · "There is no …" or "show that not …" → **contradiction** · "If … then …" → **contrapositive** · "Is there any …?" → hunt for a **counterexample**.

## 2. Mathematical Induction: the Two Parts

**Mathematical induction** proves a statement P(n) about the natural numbers from a single **principle of mathematical induction**: if P(1) is true **and** P(k) ⇒ P(k+1) for **every** integer k ≥ 1, then P(n) is true for **every** n ≥ 1. Both halves are compulsory — the **base case** alone proves nothing, and the **inductive step** alone starts from nothing.

| Part | What you must write | If you omit it |
|---|---|---|
| **1. Base case** (n = 0 or 1) | "For n = 1, P(1) is **true**." Check it numerically. | the ladder has no bottom rung |
| **2. Inductive step** | "Let **k ≥ 1** be arbitrary and **assume P(k)**; show **P(k+1)**." | one case proved, a theorem claimed |
| **3. Conclusion** | "By the principle of mathematical induction, P(n) holds for all n ≥ 1." | the sentence the examiner looks for |

| Statement P(n) you may be asked to prove | Base case | Shape of the step |
|---|---|---|
| 1 + 2 + … + n = n(n+1)/2 | **n = 1** | add the term k+1 to both sides |
| 1 + 2 + 2² + … + 2ⁿ = 2ⁿ⁺¹ − 1 | **n = 0** | double the whole left-hand side |
| n² ≥ n for every n ≥ 1 | **n = 1** | (k+1)² = k² + 2k + 1 ≥ k² + k |
| n(n+1) is even for every n ≥ 1 | **n = 1** | (k+1)(k+2) = k(k+1) + 2(k+1) |
| n ∣ n! for every n ≥ 1 | **n = 1** | (k+1)! = (k+1) · k! |

**Reading the base case off the statement.** The first value of n is fixed by the formula, not by taste. 1 + 2 + … + n starts at **n = 1**; 1 + 2 + 2² + … + 2ⁿ starts at **n = 0**; n! uses **n = 0**. If the claim says "for all n ≥ 0" the base case **must** be n = 0 — starting at n = 1 leaves n = 0 unproved.

- 💡 **Trick:** "**B**ase **B**uilds the first brick; the **S**tep carries the idea one rung further, and it must carry it **every** time." The step is a **rule**, not a **sample** — write "suppose P(k) is true for an **arbitrary** k ≥ 1", never "let k = 3".

## 3. Worked Proof: 1 + 2 + 3 + … + n = n(n+1)/2

✍ **Full proof.** Let **P(n):** 1 + 2 + 3 + … + n = n(n+1)/2.

**Base case (n = 1).** LHS = 1, RHS = 1(1+1)/2 = 1, so **P(1) is true**.
**Inductive hypothesis.** Let **k ≥ 1** be arbitrary and **suppose P(k):** 1 + 2 + … + k = k(k+1)/2.
**Inductive step.** Show P(k+1): 1 + 2 + … + k + (k+1) = k(k+1)/2 + (k+1) *(by the hypothesis)* = (k+1)[k/2 + 1] = (k+1)(k + 2)/2 = (k+1)((k+1) + 1)/2 — exactly the right-hand side of P(k+1), so **P(k+1) is true**.
**Conclusion.** P(1) holds and P(k) ⇒ P(k+1) for every k ≥ 1, so by the principle of mathematical induction P(n) is true for every n ≥ 1. ∎

- ⚠️ **Trap — the single highest-yield mistake in this lesson.** The inductive step must show **P(k) ⇒ P(k+1) for EVERY integer k ≥ 1**. Three failures score nothing. (i) Verifying the step at **one particular value** of k, say k = 3 — a sample, not a proof. (ii) Writing the **reverse** implication P(k+1) ⇒ P(k), a completely different statement. (iii) Dropping the words "**assume P(k)**" and simply asserting the result for k+1. If a proof can be summarised as "it held for k = 1, 2, 3, 4, 5", it is not induction.
- 📌 **How to write the step so the examiner is satisfied:** (i) name the statement "P(n): …"; (ii) base case, numerically; (iii) "assume P(k) for an arbitrary k ≥ 1"; (iv) compute the k+1 case **starting from the hypothesis** and mark where it was used; (v) finish with "by the principle of mathematical induction". Marks are awarded per line — do not skip (v).
- ✍ **Why the hypothesis matters.** The step is a one-line substitution only **because** "1 + 2 + … + k" was replaced by its closed form k(k+1)/2. Write the line without that substitution and you have merely restated the claim for k+1 — exactly what induction asks you **not** to do.
- ✍ **Two lines that look like proofs and are not.** (i) "It holds for n = 1, 2, 3, so it holds for all n" tests **one** value of k in the step. (ii) "P(k+1) ⇒ P(k), hence by induction" runs the ladder **backwards**: even if the reverse implication is true, it never gets you from the base case to the top.
- 📌 **When induction beats direct algebra.** A claim carrying an **n** on both sides — n!, Fibonacci, running sums, divisibility — cannot be rearranged usefully, and the statement's recursive structure matches the shape of the step. For "n² + n is always even" the one-line factorisation n(n+1) is shorter and just as correct; the examiner accepts either. Reach for induction when the statement is **built from the previous case**.

## 4. Second Worked Proof: 1 + 2 + 2² + … + 2ⁿ = 2ⁿ⁺¹ − 1

✍ **The standard written answer.** Let **P(n):** 1 + 2 + 2² + … + 2ⁿ = 2ⁿ⁺¹ − 1, for every integer n ≥ 0.

**Base case (n = 0).** LHS = 2⁰ = 1, RHS = 2¹ − 1 = 1, so **P(0) is true**.
**Inductive hypothesis.** Let k ≥ 0 be arbitrary and assume P(k): 1 + 2 + 2² + … + 2ᵏ = 2ᵏ⁺¹ − 1.
**Inductive step.** We show P(k+1): 1 + 2 + … + 2ᵏ + 2ᵏ⁺¹ = (2ᵏ⁺¹ − 1) + 2ᵏ⁺¹ *(by the hypothesis)* = 2 · 2ᵏ⁺¹ − 1 = 2ᵏ⁺² − 1 = 2^(k+1)+1 − 1 — this is exactly P(k+1), so **P(k+1) is true**.
**Conclusion.** P(0) holds and P(k) ⇒ P(k+1) for every k ≥ 0, so by the principle of mathematical induction P(n) is true for all integers n ≥ 0. ∎

**Strong (complete) induction.** To prove P(n) for all n ≥ 1 it is enough to show **(a)** P(1) is true, and **(b)** for every k ≥ 1, if **P(1), P(2), …, P(k) are all true, then P(k+1) is true**. **Strong induction is ordinary induction with a stronger hypothesis**, and the two are equivalent — nothing can be proved by one that the other cannot. It is used exactly when the k+1 case genuinely needs several earlier cases at once.

✍ **Strong induction, worked.** Prove every integer n ≥ 2 has a prime divisor. Base n = 2: 2 is prime, so 2 ∣ 2. Step: suppose every integer in 2 … k has a prime divisor and consider k+1. If k+1 is prime the claim is immediate; if it is composite it has a divisor d with 1 < d < k+1, and by the strong hypothesis d has a prime divisor p, which then also divides k+1. Hence every n ≥ 2 has a prime divisor.

✍ **A third routine proof.** Prove 1 + 1/2 + 1/2² + … + 1/2ⁿ = 2 − 1/2ⁿ for n ≥ 0. Base n = 0: LHS = 1, RHS = 2 − 1 = 1 ✓. Step: assume the sum to k is 2 − 1/2ᵏ; then the sum to k+1 is (2 − 1/2ᵏ) + 1/2ᵏ⁺¹ = 2 − 2/2ᵏ⁺¹ + 1/2ᵏ⁺¹ = **2 − 1/2ᵏ⁺¹** ✓ — exactly P(k+1). Three statements, the same three lines.

- ⚠️ **Trap:** (i) induction proves statements about **ℕ** only; (ii) the step must read "**for every k ≥ 1**", not "for some k"; (iii) the hypothesis must actually be **used** — if the k+1 line follows without it the argument is circular; (iv) if the k+1 case needs two earlier cases, either use **strong** induction or the statement is false as written.
- 📌 **When induction must not be used.** A claim quantified over the reals ("the square of an irrational is irrational" — false) cannot be settled by it. Equally, a claim that fails for one natural n is **disproved**, not proved: no induction can rescue a false statement.

## 5. Proof by Contradiction

Also called **reductio ad absurdum**. To prove P: **assume ¬P** — the assumption is a temporary **supposition**, not a claim — and from it derive something impossible: a statement together with its negation, 0 = 1, a division by zero, an object with contradictory properties. That impossibility is written **⊥**. Since ¬P leads to absurdity, **P must be true**.

| What counts as a contradiction ⊥ | Classic use |
|---|---|
| a statement together with its **negation** | "p even **and** odd" |
| **0 = 1**, or any false arithmetic identity | √2 rational |
| **division by zero** | 1 has no multiplicative inverse |
| an object with impossible properties | "the largest prime", "a largest integer" |
| a set both **non-empty and empty** | no bijection ℕ → ℕ \ ℕ |

**The recipe, in the four lines an examiner expects.** **(1)** State the claim P explicitly. **(2)** Write "suppose, for contradiction, that ¬P", and keep the negation as a **supposition**. **(3)** Derive a chain of consequences and push it to an impossibility ⊥. **(4)** Close with "the assumption is false, therefore P" — the contradiction is about the **assumption**, never about P.

- 💡 **Trick:** "**As**tract the **p**ositive: assume the **n**egation, **p**ush it to the **absurd**, and the original falls out." The tell-tale of the method is the word "suppose" followed by something you immediately start attacking.
- ⚠️ **Trap:** "A proof by contradiction begins by assuming" — the answer is **the negation of the statement to be proved**. Not "the statement is true" (that is circular reasoning), not "the converse", not "the base case P(1)". And the derivation must end in something **impossible**, not merely **unlikely**.
- 📌 **When contradiction is the wrong tool:** if a claim fails for **one** value, exhibit the **counterexample** and stop. And a claim about **real** numbers cannot be settled by induction.

## 6. Contradiction in Action

✍ **The canonical proof that √2 is irrational.**

1. **Suppose, for contradiction, that √2 is rational.** Then √2 = p/q with integers p, q, q ≠ 0 and **gcd(p, q) = 1** in lowest terms.
2. Square both sides: 2 = p²/q², hence **p² = 2q²**.
3. p² is even, so **p is even** (an odd p has an odd p²) — write p = 2k.
4. Substitute: (2k)² = 2q² ⇒ 4k² = 2q² ⇒ **q² = 2k²**.
5. q² is even, so **q is even**.
6. Then 2 divides both p and q, so **gcd(p, q) ≥ 2** — contradicting gcd(p, q) = 1. **⊥**
7. Therefore the assumption was false and **√2 is irrational**. ∎

✍ **Infinite descent.** **Claim:** no sequence of positive integers can descend for ever. **Suppose** one does: *a*₁ > *a*₂ > *a*₃ > …, all positive integers. By **well-ordering** {*a*₁, *a*₂, …} has a least member *a*ₘ. But *a*ₘ₊₁ < *a*ₘ is *also* in the set and smaller — contradicting leastness. Contradiction ⇒ every set of positive integers has a least member. This is **infinite descent**, the engine behind "√2 is irrational".

✍ **A family that fails.** **Claim:** f(n) = n² + n + 41 is prime for every natural n. **Suppose** it is prime for all n. Take **n = 41**: f(41) = 1681 + 41 + 41 = **1763 = 41 × 43**, which is not prime. A single **counterexample** destroys the universal claim — which is why one bad case is the cheapest refutation a candidate can offer. (f(n) is prime for n = 0 … 39, which is what makes it tempting.)

✍ **There is no largest prime.** **Claim:** the primes are unbounded. **Suppose** p₁, …, pₘ is a list of **all** the primes and let Q = p₁p₂ … pₘ. Every pᵢ divides Q, so every pᵢ leaves remainder 1 on Q + 1. Set N = Q + 1 > 1 — N has a prime divisor, and it is not on the list. Contradiction.

✍ **√3 in one line.** Suppose √3 = p/q in lowest terms. Then p² = 3q², so **3 ∣ p²**, so **3 ∣ p**; write p = 3k, giving 9k² = 3q², so q² = 3k² and hence **3 ∣ q**. 3 divides both p and q, so gcd ≥ 3 ≠ 1 — contradiction; √3 is irrational.

- ⚠️ **Trap:** in the √2 proof the **lowest-terms** hypothesis gcd(p, q) = 1 is what makes the final contradiction bite; without it the derivation is circular. Also "p² is even ⇒ p is even" is a **lemma** that must be stated: what is immediate from p² = 2q² is only that p² is even, and the step to p is the **contrapositive** of "p odd ⇒ p² odd".
- ⚠️ **Trap — assume the FULL negation.** For "every A is a B" the negation is **"there is an A that is not a B"** — not "not every A is a B" left hanging.
- 📌 **IT link:** the same shape proves that no total computable function decides a Turing machine's halting behaviour — assume the decider D exists, ask D about D, and D must be wrong about itself.

## 7. Contradiction vs Contrapositive

To prove **P → Q** by the **contrapositive** you prove **¬Q → ¬P**. That is a different argument with the same power, because **P → Q is logically equivalent to ¬Q → ¬P**. Contradiction, by contrast, assumes **¬(P → Q)** = **P ∧ ¬Q** — the hypothesis **true** and the conclusion **false** at once. The **converse** Q → P and the **inverse** ¬P → ¬Q are **not** equivalent to P → Q, though they are equivalent to each other.

| Form | Called | Equivalent to P → Q? | Example with P = "n is even", Q = "n² is even" |
|---|---|---|---|
| **P → Q** | the statement itself | — | true |
| **¬Q → ¬P** | **contrapositive** | **yes — always** | "n² odd ⇒ n odd" — true |
| **Q → P** | **converse** | **no** | "n² even ⇒ n even" — false, n = 3 |
| **¬P → ¬Q** | **inverse** | **no** (but converse ≡ inverse) | "n odd ⇒ n² odd" — true, yet not equivalent |

✍ **The contrapositive doing the work.** Prove: if n² is divisible by 4 then n is even. **Contrapositive:** suppose n² is **not** divisible by 4; then n is odd, n = 2k+1, so n² = 4k² + 4k + 1, which is 1 more than a multiple of 4 — **not** divisible by 4. The impossible remainder 1 is the ⊥.

- ⚠️ **Trap:** calling **¬Q → ¬P** the "converse" — it is the **contrapositive**; and believing that a true inverse makes P → Q true. Equivalence is a statement about **all** cases, not one.
- 📌 **IT link — the same machinery, next chapter.** Contradiction settles an **undecidability**: the **halting problem** is proved undecidable by assuming a decider D exists and asking D about D itself. Ordinary **induction** settles a **theorem**: every tree with n vertices has exactly **n − 1** edges is proved on n, using the leaf lemma (a longest path ends in a leaf) and deleting it. **One method proves a thing exists; the other proves nothing can.**

## 8. Recursion

A **recursive** definition defines an object **in terms of smaller instances of itself**; a **recurrence relation** does the same for sequences. Every recursive definition has exactly two parts: a set of **base cases** where the recursion stops, and a **recursive step** whose argument is **strictly closer to the base case**. A function that calls itself on an argument which does not decrease is not a recursion — it is an **infinite loop** that overflows the stack.

| Object | Base case(s) | Recursive step |
|---|---|---|
| **Factorial** n! | n! = 1 if n = 0 | n! = n × (n−1)! for n > 0 |
| **Fibonacci** F(n) | F(0) = 0, F(1) = 1 | F(n) = F(n−1) + F(n−2) for n > 1 |
| **Power** aⁿ | a⁰ = 1 | aⁿ = a × aⁿ⁻¹ |
| **Sum** S(n) | S(0) = 0 | S(n) = S(n−1) + n |
| **Euclid** gcd(a, b) | gcd(a, 0) = a | gcd(a, b) = gcd(b, a mod b) |

```
function factorial(n):
    if n == 0:            # base case — the recursion stops here
        return 1
    else:                 # step: n − 1 is strictly smaller than n
        return n * factorial(n - 1)
```

```
F(0)=0  F(1)=1  F(2)=1  F(3)=2  F(4)=3  F(5)=5  F(6)=8  F(7)=13  F(8)=21
```

**Why "smaller" is the whole condition.** Termination rests on a **well-founded measure**: some quantity — the argument n, a list size, a tree depth — must **strictly decrease** at every call and must have a **lower bound**. ℕ has none, so repeated decrease forces arrival at 0 or 1. That is why the factorial step uses **n − 1** and not **n + 1**.

- ⚠️ **Trap:** (i) **0! = 1** — the factorial base case is n = 0, not n = 1; since n! = 1 for both n = 0 and n = 1, checking only n = 1 does not verify the base case. (ii) Recursion and iteration compute the **same** result; neither is "the correct one", but naive recursion may be **exponentially slower**. (iii) A **recurrence relation** (an n → n+1 rule plus starting values) is **not** the same thing as a recursive algorithm; solving one is usually the other run backwards.
- 📌 **Fibonacci indexing:** the same sequence is written **F(0) = 0, F(1) = 1** or **F(1) = 1, F(2) = 1** — one index apart. A question that says "F(1) = 1, F(2) = 1" is asking for the 7th value as **13**, not 8.

## 9. Recursion ↔ Induction, and What It Costs

A recursive definition **supplies** the base cases and the step; a proof by induction **verifies** exactly those. So **to prove a recursive function correct, run induction on its argument**: base case — evaluate it at the base input; step — assume correctness for n, then the recursive call on **n−1** is covered by the hypothesis, and finish the algebra. This is the standard template for **algorithm correctness proofs**.

✍ **The template, applied.** **Claim:** the function above returns n! for every n ≥ 0. **Base:** factorial(0) returns 1 = 0!. **Step:** assume factorial(k) returns k! for some k ≥ 0; then factorial(k+1) returns (k+1) × factorial(k) = (k+1) × k! = (k+1)!. Hence by induction the function is correct for all n ≥ 0. Correctness proved; cost still open.

| Naive algorithm | Calls made | Cost |
|---|---|---|
| **factorial(5)** | 5!, 4!, 3!, 2!, 1!, 0! = **6** | **O(n)** time, **O(n)** stack |
| **fib(5)**, naive | T(n) = T(n−1)+T(n−2)+1 ⇒ T(n) = **2F(n+1) − 1**; T(5) = **15** | **O(φⁿ)**, φ = (1+√5)/2 ≈ 1.618 |
| **fib(5)**, memoised | each F(i) computed once: **n** calls | **O(n)** time |

- ⚠️ **Trap:** "factorial is recursive so it must be slow" is **false**: it makes only n + 1 calls, i.e. **O(n)**, the same as a loop. The blow-up is **Fibonacci**, whose call tree branches into two. A **tail** call (the recursive call is the last operation) can be rewritten as a loop and then costs O(1) stack.
- 📌 **Where this earns marks:** **correctness by induction**, **complexity of the call tree**, **program verification** and **theorem proving** are the applications the syllabus names. **Loop invariants** plus induction give total correctness of loops; **structural induction** on trees and lists proves compiler and datatype theorems; **diagonalisation** is contradiction applied to computability.

## 10. Which Method Do I Use?

| Method | Key idea | You must supply | Fails when |
|---|---|---|---|
| **Induction** | prove true for a base case, then **step by step** | P(b) true, and P(k) ⇒ P(k+1) for **every** k | the claim is about ℝ, or the step needs several earlier cases |
| **Contradiction** | **assume false**, derive an impossible result | ¬P, then a genuine ⊥ (P ∧ ¬P, 0 = 1, ÷ 0) | you assume P itself, or derive something merely **unlikely** |
| **Recursion** | **define in terms of smaller instances** | base cases, plus a strictly decreasing step | the argument does not shrink — the recursion never terminates |

**The three in one line each.** **Induction** — "it is true once, and if it is true at k then it is true at k+1", so the truth spreads over all of ℕ. **Contradiction** — "if it were false we would get an impossibility", so it cannot be false. **Recursion** — "define it from the smaller ones", which is the **same information** the induction proof then verifies. **Induction and recursion are two halves of one object.**

- 📌 **Applications — the four the syllabus names:** **algorithm correctness proofs** (induction on the loop counter or the recursion depth) · **complexity analysis** (solve a recurrence by expansion or the master method) · **program verification** (pre-condition, post-condition and invariants proved by induction) · **mathematical theorem proving**.
- ⚠️ **Trap:** the three are **not** three varieties of one thing — induction and contradiction are **proof techniques**, while recursion is a **definition and a computational technique**. "Proving by recursion" is only meaningful as "proving the recursive program correct", and that proof is an **induction**.

---

## Night-Before-the-Exam Sheet

**Fact sheet:** proof = **valid** + true premises = **sound** · sound ⇒ valid, never the reverse · induction: **base case** P(1) · induction: **step** P(k) ⇒ P(k+1) · the step must hold for **every** k ≥ 1 · P(k+1) ⇒ P(k) is not it · Σ 1…n = **n(n+1)/2** · Σ 2⁰…2ⁿ = **2ⁿ⁺¹ − 1** · strong induction uses **P(1)…P(k)** and is equivalent to ordinary induction · contradiction: assume **¬P** · ⊥ = P∧¬P, 0 = 1, ÷ 0 · √2 irrational: p, q both even, so gcd ≥ 2 ≠ 1 · contrapositive **¬Q → ¬P** ≡ P → Q, converse and inverse are not · n! = 1 (n = 0) else n·(n−1)! · F(0) = 0, F(1) = 1, else F(n−1)+F(n−2) · recursion must **strictly decrease** · factorial(5) = **6** calls, O(n) · naive fib T(n) = **2F(n+1) − 1**, T(5) = **15**, O(φⁿ), φ ≈ 1.618 · memoised fib ⇒ **O(n)** · tail call ⇒ O(1) stack · tree: n vertices ⇒ **n − 1** edges (induction) · halting undecidable (contradiction).

**Top 12 one-liners for MCQs**

1. Induction needs **both** base case and step
2. The step is for **every** k, not one k
3. Contradiction assumes the **negation** of the goal
4. Contrapositive is **equivalent**; converse is not
5. **0! = 1** is the base case
6. Recursion needs a **smaller** argument
7. Naive fib is **exponential**, factorial is **linear**
8. A counterexample **refutes**, never proves
9. Finishing line: **"by the principle of induction"**
10. Sound ⇒ valid, never the reverse

**Top traps:** checking the inductive step at one value of k · writing **P(k+1) ⇒ P(k)** instead · starting the base case at n = 1 when the claim says n ≥ 0 · assuming P instead of **¬P** in a contradiction proof · calling the contrapositive the converse · treating recursion as a proof rather than a definition · claiming naive factorial is slow · a recursive definition with no base case · "it held for the first few n, so it always holds".

**All tricks together:** "**B**ase **B**uilds, the **S**tep carries it **every** time" · "**As**tract the **p**ositive: assume the **n**egation and push it to the absurd" · "recursion must be **smaller**, or it is not recursion at all" · "the **contra**positive is the twin; the **con**verse is the liar" · "one counterexample ends the argument" · "fib **branches**, factorial **stretches**" · "correctness by induction, termination by shrinking".

---

## Practice MCQs (exam pattern, 10 marks)

1. A proof by contradiction begins by assuming: (a) the statement is true (b) the converse (c) the base case P(1) (d) the negation
2. In induction on P(n), the step must show: (a) for every k ≥ 1, P(k) ⇒ P(k + 1) (b) P(1) is true (c) P(k + 1) for one particular k (d) P(k + 1) ⇒ P(k)
3. a(1) = 1, a(n) = 2a(n−1) + 1. What is a(5)? (a) 31 (b) 15 (c) 32 (d) 63
4. Which is equivalent to P → Q? (a) Q → P (b) ¬P → ¬Q (c) ¬Q → ¬P (d) P ∧ Q
5. 1 + 2 + 2² + … + 2ⁿ at n = 0 equals: (a) 0 (b) 1 (c) 2 (d) 3
6. 0! equals: (a) undefined (b) 1 (c) 0 (d) 2
7. Calls made by naive fib(5): (a) 5 (b) 11 (c) 15 (d) 25
8. Calls made by naive factorial(5): (a) 5 (b) 6 (c) 25 (d) 120
9. A single n where a claimed identity fails is: (a) an induction step (b) a contradiction (c) a counterexample (d) a base case
10. Always required of a recursive definition: (a) it must use a loop (b) it must call itself on a strictly smaller argument (c) it must run in O(n) time (d) it must have a closed form

**Answer key:** 1-d · 2-a · 3-a · 4-c · 5-b · 6-b · 7-c · 8-b · 9-c · 10-b

## Written question (10 marks)

(i) State the principle of mathematical induction and prove 1 + 2 + 2² + … + 2ⁿ = 2ⁿ⁺¹ − 1 for every integer n ≥ 0. (ii) Prove by contradiction that √2 is irrational. (iii) Give the recursive definition of the factorial function and the number of calls naive factorial(5) makes. (iv) Is the contrapositive of "if n² is even then n is even" true?

**Model answer:**

1. **Principle (3)** — if P(1) holds and P(k) ⇒ P(k+1) for every k ≥ 1, then P(n) holds for every n ≥ 1. **Base n = 0:** 2⁰ = 1 = 2¹ − 1 ✓. **Step:** assume 1 + 2 + … + 2ᵏ = 2ᵏ⁺¹ − 1; then 1 + 2 + … + 2ᵏ + 2ᵏ⁺¹ = (2ᵏ⁺¹ − 1) + 2ᵏ⁺¹ = 2 · 2ᵏ⁺¹ − 1 = 2ᵏ⁺² − 1, which is 2^(k+1)+1 − 1 ✓. Hence P(n) for all n ≥ 0.
2. **√2 (3)** — suppose √2 = p/q in lowest terms. Squaring gives 2 = p²/q², so p² = 2q². Since p² is even, p is even; write p = 2k. Then 4k² = 2q², so q² = 2k², and q is even too. **Both p and q are even, so gcd(p, q) ≥ 2 ≠ 1 — contradiction.** Hence √2 is irrational. ∎
3. **Factorial (2)** — n! = 1 if n = 0, and n! = n × (n−1)! for n > 0. It terminates because the argument strictly decreases to 0 at every call. Naive factorial(5) makes **6** calls: 5!, 4!, 3!, 2!, 1!, 0!.
4. **Contrapositive (2)** — the contrapositive is "if n² is **odd** then n is odd", which is **true** and logically equivalent to the original statement. The original statement "if n² is even then n is even" is **false** (take n = 3), which is exactly why it needs the counterexample and not a proof.

**More practice (written):** ① Prove by induction that 1 + 3 + 5 + … + (2n−1) = n² for every n ≥ 1 ② Prove by induction that n ∣ n! for every n ≥ 1 ③ Prove by contradiction that √3 is irrational, and state the lemma you use ④ Prove by contradiction that there is no largest prime ⑤ Write the recursive definition of the Fibonacci sequence, explain why the naive version is exponential, and state the number of calls fib(5) makes ⑥ Prove by contrapositive that if n² is divisible by 4 then n is even, and explain why the converse is false.

**Before the exam ✓** write **both** halves of an induction proof · say "for every k ≥ 1" in the step · start a contradiction with the **negation** · name the principle in the closing line.