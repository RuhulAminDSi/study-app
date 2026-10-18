# Recursion, Sorting, Searching, Hashing & Algorithm Analysis: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/15-data-structures-and-algorithms/dsa-recursion-sorting-hashing.en.html` (handwritten-style PDF: `notes/pdf/15-data-structures-and-algorithms/dsa-recursion-sorting-hashing.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Data Structures & Algorithms):** "**Recursion, sorting, searching, hashing, storage management. Techniques for analysis of algorithms.**" Heap internals are in the Heaps & B-Trees lesson, divide-and-conquer / greedy / DP as design methods in the Design Methods lesson, and the lower-bound proof in the NP-Completeness lesson.

**High-yield:** ① Hanoi: 2ⁿ − 1 moves ② 2T(n/2) + n = Θ(n log n) ③ O ≠ worst, Θ ≠ average ④ quick sort worst O(n²): bad pivot ⑤ stable: merge, insertion, bubble ⑥ not stable: quick, heap, selection ⑦ binary search ≤ ⌈log₂(n+1)⌉ probes ⑧ comparison sort ≥ Ω(n log n) ⑨ expected probes ≈ 1/(1 − α) ⑩ reference counting fails on cycles.

**Legend:** yellow = key term · red circle = must-memorise fact · purple box = memory trick · red box = exam trap · green = worked example.

*(Cover doodle: a mind-map around "ALGORITHMS" — Recursion · Hanoi 2ⁿ − 1, O · Ω · Θ, Master theorem ★, Sort table ★, Binary search ⌈log₂(n+1)⌉ ★, Quick partition (pivot = trap), Hashing & probing (α = n/m), Storage: buddy, fits, GC.)*

**Contents:** 1. Recursion & the call stack — p. 2 · 2. Asymptotic notation & analysis — p. 3 · 3. Recurrences & Master theorem — p. 4 · 4. Simple, heap & linear-time sorts — p. 5 · 5. Merge, quick & the sort table — p. 6 · 6. Searching — p. 7 · 7. Hashing & collisions — p. 8 · 8. Storage management & GC — p. 9 · Night-before sheet — p. 10 · Practice MCQs + written — p. 11.

---

## 1. Recursion & the Call Stack

A **recursive** function solves a problem by calling itself on a **smaller** instance. It needs a **base case** that stops without a call and a **recursive case** that moves strictly towards it. Every call pushes an **activation record** (parameters, locals, return address) on the stack, so recursion depth d costs **O(d) space**.

| Problem | Recurrence | Cost |
|---|---|---|
| Factorial | n! = n·(n−1)!, 0! = 1 | Θ(n) time & stack |
| Fibonacci, naive | F(n) = F(n−1) + F(n−2); F(0)=0, F(1)=1 | **Θ(φⁿ)**, φ ≈ 1.618 (quoted O(2ⁿ)) |
| Fibonacci, memo / loop | each F(i) once | Θ(n) |
| Tower of Hanoi | M(n) = 2M(n−1) + 1, M(1) = 1 | **2ⁿ − 1** moves |
| Fast power xⁿ | xⁿ = (x^⌊n/2⌋)² (× x if n odd) | Θ(log n) |

*(Doodle: recursion tree of naive fib(4) — F4 → F3, F2; F3 → F2, F1; each F2 → F1, F0. F2 is solved twice (red), 9 calls in total: overlapping sub-problems explode exponentially.)*

```c
/* not tail-recursive: × after return */
int fact(int n) {
  if (n == 0) return 1;      /* base */
  return n * fact(n - 1);
}
/* tail-recursive: call is the last act */
int factT(int n, int acc) {
  if (n == 0) return acc;
  return factT(n - 1, n * acc);
}
```

**Kinds of recursion.** **Direct**: f calls f. **Indirect**: f → g → f. **Linear**: one call per activation (factorial). **Tree**: two or more (Fibonacci, Hanoi). **Tail**: the call is the final action, so a compiler can reuse the frame (**tail-call elimination**) → O(1) stack. Every recursion can be rewritten as a loop with an explicit stack.

✍ **Tower of Hanoi.** Move n − 1 discs A → B (via C), the largest A → C, then n − 1 discs B → C. So M(n) = 2M(n−1) + 1 ⇒ M(n) + 1 = 2[M(n−1) + 1] ⇒ M(n) + 1 = 2ⁿ ⇒ **M(n) = 2ⁿ − 1**. n = 3: A→C, A→B, C→B, **A→C**, B→A, B→C, A→C = **7** moves; n = 4 → 15; n = 64 → 2⁶⁴ − 1 ≈ 1.8 × 10¹⁹. The smallest disc moves on every odd step.

- 💡 **Trick:** "**Base first, smaller next.**" Write the stop condition before the self-call, and check that the argument shrinks. Naive fib(n) makes **2F(n+1) − 1** calls: fib(4) → 9, fib(5) → 15.
- ⚠️ **Trap:** A missing base case gives **stack overflow**, not an endless loop. Recursion is usually **slower** than the equivalent loop (call overhead). C and Java do **not** guarantee tail-call elimination. Recursion depth of naive fib(n) is only n, even though calls are exponential.

## 2. Asymptotic Notation & Analysis Techniques

| Notation | Formal definition (∃ c, n₀ > 0, ∀ n ≥ n₀) | Meaning | Like |
|---|---|---|---|
| **f = O(g)** | 0 ≤ f(n) ≤ c·g(n) | asymptotic **upper bound** | ≤ |
| **f = Ω(g)** | f(n) ≥ c·g(n) ≥ 0 | asymptotic **lower bound** | ≥ |
| **f = Θ(g)** | c₁·g(n) ≤ f(n) ≤ c₂·g(n) | **tight bound**: both O and Ω | = |
| **f = o(g)** | for **every** c > 0; lim f/g = 0 | strictly slower growth | < |
| **f = ω(g)** | lim f/g = ∞ | strictly faster growth | > |

*(Doodle: growth curves 1, log n, n, n log n, n², 2ⁿ against input size n — for large n the order never changes, whatever the constants.)*

**Growth ladder:** 1 < log log n < log n < √n < n < **n log n** < n² < n³ < 2ⁿ < n! < nⁿ. Log base does not matter (logₐn = Θ(log_b n)), but exponent base does: 2ⁿ = o(3ⁿ). log(n!) = Θ(n log n); 1 + 2 + … + n = Θ(n²); 1 + ½ + … + 1/n ≈ ln n.

✍ **Prove a Θ bound.** f(n) = 3n² + 5n + 2. For n ≥ 1: 3n² ≤ f(n) ≤ 3n² + 5n² + 2n² = 10n². So c₁ = 3, c₂ = 10, n₀ = 1 ⇒ **f = Θ(n²)**. Also 2ⁿ⁺¹ = O(2ⁿ) (c = 2) but 2²ⁿ = 4ⁿ ≠ O(2ⁿ).

| Loop pattern | Basic steps | Order |
|---|---|---|
| for i = 1..n: for j = 1..i | n(n+1)/2 | Θ(n²) |
| for (i = 1; i < n; i *= 2) | ⌈log₂ n⌉ | Θ(log n) |
| for i = 1..n: for (j = i; j ≤ n; j += i) | n(1 + ½ + … + 1/n) | Θ(n log n) |
| while (n > 2) n = √n | log₂ log₂ n | Θ(log log n) |

- ⚠️ **Common misconception:** **O ≠ worst case**, Ω ≠ best case, Θ ≠ average case. Notations bound a **function**; cases pick the **input**. Insertion sort: worst case Θ(n²), best case Θ(n); so its running time is O(n²) and Ω(n), but not Θ(n²) for every input.
- **Best · average · worst:** **Worst** = maximum steps over all inputs of size n (a guarantee). **Best** = minimum. **Average** = expected steps under a stated input distribution, e.g. linear search: (n + 1)/2 comparisons if the key is equally likely anywhere.
- **Amortized analysis:** the **worst-case total** of a sequence of n operations divided by n — no probability. Dynamic array that doubles when full: n pushes cost ≤ n + (1 + 2 + 4 + … + n) < 3n ⇒ **O(1) amortized** per push, though one push costs O(n). Methods: **aggregate**, **accounting** (banker's), **potential**.
- 💡 **Trick:** "**Oh = ceiling, Omega = floor, Theta = both walls.**" Little o / ω are the strict versions — like < and >. To compare two functions, take lim f/g: 0 → o, constant → Θ, ∞ → ω. Space complexity is analysed the same way, counting memory cells.

## 3. Recurrences & the Master Theorem

A **recurrence** gives T(n) in terms of T on smaller inputs. Solve it by **substitution** (guess, prove by induction), **iteration / recursion tree** (add the cost of every level), or the **Master theorem** for divide-and-conquer forms T(n) = a·T(n/b) + f(n), a ≥ 1, b > 1.

**Master theorem.** Compare f(n) with **n^(log_b a)**, the total cost of the leaves.
1. **Case 1** — f(n) = O(n^(log_b a − ε)) for some ε > 0 (leaves dominate) ⇒ **T(n) = Θ(n^(log_b a))**.
2. **Case 2** — f(n) = Θ(n^(log_b a)) (every level equal) ⇒ **T(n) = Θ(n^(log_b a) · log n)**. Extended: f = Θ(n^(log_b a) logᵏ n) ⇒ Θ(n^(log_b a) logᵏ⁺¹ n).
3. **Case 3** — f(n) = Ω(n^(log_b a + ε)) **and** regularity a·f(n/b) ≤ c·f(n) for some c < 1 (root dominates) ⇒ **T(n) = Θ(f(n))**.

Short form for f(n) = Θ(nᵈ): log_b a > d → Θ(n^(log_b a)); = d → Θ(nᵈ log n); < d → Θ(nᵈ).

*(Doodle: recursion tree of T(n) = 2T(n/2) + n — n; n/2, n/2; four n/4 … n leaves of cost 1. Each level = n, log₂ n levels, total = Θ(n log n).)*

| Recurrence | leaves n^(log_b a) | Case | Solution |
|---|---|---|---|
| T(n/2) + 1 | 1 | 2 | Θ(log n) |
| 2T(n/2) + 1 | n | 1 | Θ(n) |
| 2T(n/2) + n | n | 2 | **Θ(n log n)** |
| 4T(n/2) + n | n² | 1 | Θ(n²) |
| 4T(n/2) + n² | n² | 2 | Θ(n² log n) |
| 4T(n/2) + n³ | n² | 3 | Θ(n³) |
| 7T(n/2) + n² | n^2.81 | 1 | Θ(n^log₂7) |
| 3T(n/4) + n log n | n^0.79 | 3 | Θ(n log n) |

| Not in Master form | Method | Solution |
|---|---|---|
| T(n) = T(n−1) + 1 · T(n−1) + n | iteration: 1 + 1 + … · n + (n−1) + … + 1 | Θ(n) · **Θ(n²)** |
| T(n) = 2T(n−1) + 1 | iteration (Hanoi) | Θ(2ⁿ) |
| T(n) = T(n/3) + T(2n/3) + n | recursion tree: ≤ n per level, log₃/₂ n levels | Θ(n log n) |
| T(n) = 2T(n/2) + n log n | gap between cases → extended case 2 | Θ(n log² n) |

✍ **Substitution.** Guess T(n) ≤ c·n log₂ n for T(n) = 2T(n/2) + n. Then T(n) ≤ 2·c(n/2)log₂(n/2) + n = c·n log₂ n − c·n + n ≤ c·n log₂ n whenever **c ≥ 1** ✓. Hence T(n) = O(n log n).

- 💡 **Trick:** "**Leaves vs root.**" Work out n^(log_b a) first. Leaves bigger → case 1, answer = leaves. Tie → multiply by **log n**. Root bigger → answer = f(n).
- ⚠️ **Trap:** The Master theorem does **not** apply to T(n−1) forms, a < 1, non-constant a (e.g. 2ⁿT(n/2)), or a **non-polynomial gap** like n log n vs n. Case 3 also needs regularity.

## 4. Simple, Heap & Linear-Time Sorts

**Vocabulary.** **Stable**: equal keys keep their input order. **In-place**: O(1) extra memory (O(log n) stack is usually allowed). **Adaptive**: faster on nearly sorted input. **Online**: can sort as data arrives. An **inversion** is a pair i < j with a[i] > a[j]; at most n(n−1)/2.

| Sort | Idea | Key facts |
|---|---|---|
| **Bubble** | swap adjacent pairs; pass i floats the i-th largest to the end | ≤ n(n−1)/2 comparisons; swaps = inversions; **O(n) best** only with a "no swap → stop" flag |
| **Selection** | find the minimum of the rest, swap it to the front | always n(n−1)/2 comparisons, **≤ n − 1 swaps**; not stable, not adaptive |
| **Insertion** | insert a[i] into the sorted prefix by shifting | n − 1 comparisons if sorted; shifts = inversions; stable, adaptive, online |
| **Shell** (1959) | insertion sort on gaps h, shrinking to 1 | gaps n/2, n/4… → O(n²); Knuth 1, 4, 13, 40 → O(n^1.5); not stable |
| **Heap** | build max-heap O(n), then n − 1 × (swap root, sift-down) | Θ(n log n) always, O(1) space, not stable |

| Insertion | 5 2 4 6 1 3 |
|---|---|
| key 2 | **2 5** 4 6 1 3 |
| key 4 | **2 4 5** 6 1 3 |
| key 6 | **2 4 5 6** 1 3 |
| key 1 | **1 2 4 5 6** 3 |
| key 3 | **1 2 3 4 5 6** ✓ |

| Bubble | 5 1 4 2 8 |
|---|---|
| pass 1 | 1 4 2 5 **8** |
| pass 2 | 1 2 4 **5 8** |
| pass 3 | no swap → **stop** |
| Selection | 5ᵃ 5ᵇ 2 → 2 5ᵇ 5ᵃ (5ᵃ jumped past 5ᵇ: unstable) |

**Linear-time (non-comparison) sorts.** **Counting sort** (keys 0..k): count each key, prefix-sum the counts, place elements scanning **right to left** (keeps it stable) → Θ(n + k) time and space. A = 2 5 3 0 2 3 0 3: counts 2 0 2 3 0 1 → prefix 2 2 4 7 7 8 → 0 0 2 2 3 3 3 5. **Radix sort** (LSD): stable counting sort on each of d digits → **Θ(d(n + k))**. **Bucket sort**: uniform input in [0, 1) into n buckets, insertion-sort each → Θ(n) average, O(n²) worst.

✍ **LSD radix sort.** 170 45 75 90 802 24 2 66 → by units: 170 90 802 2 24 45 75 66 → by tens: 802 2 24 45 66 170 75 90 → by hundreds: **2 24 45 66 75 90 170 802**. Each pass must be **stable**, or the earlier digit order is lost.

- 💡 **Trick:** "**Selection Swaps least, Insertion Shifts.**" Fewest writes → selection (n − 1 swaps). Nearly sorted or tiny → insertion (used inside Timsort and introsort).
- ⚠️ **Trap:** Every comparison sort needs **Ω(n log n)** comparisons in the worst case (log₂ n! — proof in the NP-Completeness lesson). Counting and radix sort beat it only because they **never compare keys**.

## 5. Merge Sort, Quick Sort & the Sort Table

*(Doodle: merge-sort tree of 38 27 43 3 9 82 10 → split [38 27 43 3] [9 82 10] → [38 27] [43 3] [9 82] [10] → merged [27 38] [3 43] [9 82] [10] → [3 27 38 43] [9 10 82] → **3 9 10 27 38 43 82**. Blue = split (free), green = merge (the real work).)*

**Merge sort.** Split in half, sort both, **merge** in linear time: T(n) = 2T(n/2) + Θ(n) = **Θ(n log n)** in **every** case. Merging lists of m and k items takes at most m + k − 1 comparisons (at least min(m, k)). Stable if ties take from the left (≤). Θ(n) extra array; ideal for **linked lists** and **external** (k-way) sorting.

**Quick sort** (Hoare, 1961). Pick a **pivot**, **partition** so smaller keys sit left and larger right, recurse on both sides. Best/average Θ(n log n) (≈ 1.39 n log₂ n comparisons); **worst Θ(n²)** when the pivot is always the min or max, e.g. sorted input with first/last pivot: T(n) = T(n−1) + Θ(n). Fix: **random** or **median-of-three** pivot.

| Lomuto, pivot 4 | array (i = boundary) |
|---|---|
| start, i = −1 | 2 8 7 1 3 5 6 **4** |
| j=0: 2 ≤ 4, i=0 | **2** 8 7 1 3 5 6 4 |
| j=3: 1 ≤ 4, i=1 | **2 1** 7 8 3 5 6 4 |
| j=4: 3 ≤ 4, i=2 | **2 1 3** 8 7 5 6 4 |
| swap a[i+1], pivot | 2 1 3 **(4)** 7 5 6 8 |

- 💡 **Trick:** "**Merge: easy split, hard join. Quick: hard split, easy join.**" Both are divide-and-conquer (design method covered in the Design Methods lesson); merge works in **combine**, quick works in **divide**.

| Algorithm | Best | Average | Worst | Extra space | Stable | In-place |
|---|---|---|---|---|---|---|
| Bubble (flag) | n | n² | n² | 1 | ✓ | ✓ |
| Selection | n² | n² | n² | 1 | ✗ | ✓ |
| Insertion | n | n² | n² | 1 | ✓ | ✓ |
| Shell (Knuth) | n log n | n^1.25 | n^1.5 | 1 | ✗ | ✓ |
| Merge | n log n | n log n | n log n | n | ✓ | ✗ |
| Quick | n log n | n log n | **n²** | log n | ✗ | ✓ |
| Heap | n log n | n log n | n log n | 1 | ✗ | ✓ |
| Counting | n + k | n + k | n + k | n + k | ✓ | ✗ |
| Radix (d digits) | d(n+k) | d(n+k) | d(n+k) | n + k | ✓ | ✗ |
| Bucket | n + k | n + k | n² | n + k | ✓ | ✗ |

- ⚠️ **Trap:** (i) Quick sort's log n space is the **average** stack (naive worst O(n); recurse on the **smaller** side first). (ii) Selection sort is Θ(n²) even on sorted input. (iii) "Fastest in practice" for RAM arrays → **quick sort**; "guaranteed n log n and stable" → **merge sort**; "guaranteed n log n in O(1) space" → **heap sort**.

## 6. Searching

| Search | Needs | Best | Average | Worst |
|---|---|---|---|---|
| **Linear** | nothing; any list | O(1) | (n+1)/2 | O(n) |
| **Binary** | **sorted + random access** | O(1) | O(log n) | **⌈log₂(n+1)⌉** |
| **Interpolation** | sorted, uniform keys | O(1) | O(log log n) | O(n) |
| **Ternary** | sorted / unimodal | O(1) | O(log₃ n) | O(log n) |
| **Jump** | sorted | O(1) | O(√n) | O(√n) |
| **Hashing** | a hash table | O(1) | O(1) | O(n) |
| **Exponential** | sorted, unbounded (i = position) | O(1) | O(log i) | O(log i) |

```c
int bsearch(const int a[], int n, int key) {
  int lo = 0, hi = n - 1;
  while (lo <= hi) {
    int mid = lo + (hi - lo) / 2;
    if (a[mid] == key) return mid;
    if (a[mid] < key) lo = mid + 1;
    else              hi = mid - 1;
  }
  return -1;          /* not found */
}
```

*(Doodle: search 42 in 3 8 15 23 42 57 91 — mid 23 → go right, mid 57 → go left, mid 42 ✓. n = 7 → at most 3 probes; 7 → 3 → 1 elements left.)*

✍ **Trace and count.** a = 3 8 15 23 42 57 91 (indices 0–6). **key 42**: (lo, hi, mid) = (0, 6, 3) → 23 < 42 → lo = 4; (4, 6, 5) → 57 > 42 → hi = 4; (4, 4, 4) → found at index 4 after **3** probes. **key 10**: mid 3 (23) → hi = 2; mid 1 (8) → lo = 2; mid 2 (15) → hi = 1; lo > hi → **−1**, also 3 probes. Maximum probes = ⌊log₂ n⌋ + 1 = ⌈log₂(n + 1)⌉: n = 7 → 3, **n = 1000 → 10**, n = 1024 → 11, n = 10⁶ → 20.

- **The others in one line:** **Interpolation**: pos = lo + (key − a[lo])·(hi − lo) / (a[hi] − a[lo]) — guesses like a dictionary. **Ternary**: two mids split into thirds; fewer iterations but more comparisons than binary, so binary wins on arrays — ternary is for the max/min of a unimodal function. **Jump**: step √n, then linear. **Exponential**: probe 1, 2, 4, 8 … then binary.
- ⚠️ **Trap:** Binary search on a **linked list** is O(n) — no random access. On **unsorted** data it is simply wrong. mid = (lo + hi)/2 can **overflow** int; use lo + (hi − lo)/2. Linear search unsuccessful = n comparisons (n + 1 with a sentinel).
- 💡 **Trick:** "**Halve until one: count the doublings.**" 2¹⁰ ≈ 1000, 2²⁰ ≈ 10⁶, 2³⁰ ≈ 10⁹ → 10, 20, 30 probes. Best case O(1): the key sits at the first mid. Used in C `bsearch`, Python `bisect`, B-tree node search, `git bisect`.

## 7. Hashing & Collision Resolution

**Hashing** maps a key k to a slot h(k) ∈ {0 … m − 1} of a table of size m, giving search/insert/delete in **O(1) average** (O(n) worst). Two keys with the same slot **collide**. **Load factor α = n / m** (keys ÷ slots) decides the speed.

| Function | Rule | Example (m = 100 unless stated) |
|---|---|---|
| **Division** | k mod m; m prime, not near 2ᵖ | m = 11: 59 → 4 |
| **Multiplication** | ⌊m · frac(kA)⌋, A ≈ 0.618 (Knuth) | 123A = 76.018 → 1 |
| **Mid-square** | square k, take the middle digits | 56² = 3136 → 13 |
| **Folding** | split into parts and add, drop carry | 123+456+789 = 1368 → 368 (m = 1000) |

*(Doodle: separate chaining, m = 10, h(k) = k mod 10 — slot 0: 50 → 60; slot 2: 22 → 32 → 42; slot 4: 34. Chain length ≈ α.)*

| Scheme | Probe i (all mod m), α ≤ 1 |
|---|---|
| **Linear** | h + i → **primary clustering** |
| **Quadratic** | h + c₁i + c₂i² (often h + i²) → secondary clustering |
| **Double** | h₁ + i·h₂; h₂ ≠ 0, coprime to m → near uniform |
| **Chaining** | a list per slot; α may exceed 1 |

✍ **Insert 10, 22, 31, 4, 15, 28, 17, 88, 59 into m = 11, h₁ = k mod 11.**

| slot | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| linear = quadratic | 22 | 88 | – | – | 4 | 15 | 28 | 17 | **59** | 31 | 10 |
| double | 22 | – | **59** | 17 | 4 | 15 | 28 | 88 | – | 31 | 10 |

59 → h₁ = 4. Linear: 4, 5, 6, 7 full → slot 8 (**5 probes**). Quadratic: 4, 5 → 4 + 4 = 8 (3 probes). Double (h₂ = 1 + k mod 10): h₂(59) = 10, so 4 → 14 mod 11 = 3 (17) → 24 mod 11 = **2**.

| Expected probes | Unsuccessful | Successful | α = 0.5 |
|---|---|---|---|
| Chaining | 1 + α | 1 + α/2 | 1.5 · 1.25 |
| Uniform open addressing | **1/(1 − α)** | (1/α) ln 1/(1 − α) | 2 · 1.39 |
| Linear probing (Knuth) | ½(1 + 1/(1 − α)²) | ½(1 + 1/(1 − α)) | 2.5 · 1.5 |

- ⚠️ **Trap:** Open addressing cannot simply empty a slot on delete — later keys become unreachable; mark it **DELETED** (tombstone). Quadratic probing may miss free slots unless m is prime and α ≤ ½. Rehash (double m) when α passes a threshold (0.75 in Java's HashMap).
- 💡 **Trick:** "**Linear Lumps, Quadratic Quietens, Double Disperses.**" Probe count blows up near α = 1: α = 0.9 → 10 probes for a miss. Uses: symbol tables, DB hash indexes, caches (Redis, Memcached), sets/dictionaries.

## 8. Storage Management & Garbage Collection

**Storage management** hands out and takes back **heap** blocks (malloc/free, new/delete). Free blocks sit on a **free list**; a **placement policy** serves each request and freed neighbours are **coalesced**. The enemies: **fragmentation** and **garbage** (unreachable, unreleased blocks).

**Placement policies.** **First fit**: first hole big enough — fastest. **Next fit**: first fit resumed where the last search stopped. **Best fit**: the **smallest** hole that fits — scans the whole list, leaves tiny slivers. **Worst fit**: the largest hole — leaves big leftovers. In the example below **only best fit** places all four.

✍ **Holes 100, 500, 200, 300, 600 KB; requests 212, 417, 112, 426 (in order).**

| Policy | 212 | 417 | 112 | 426 |
|---|---|---|---|---|
| First fit | 500 (→288) | 600 (→183) | 288 (→176) | **waits** |
| Best fit | 300 (→88) | 500 (→83) | 200 (→88) | **600 ✓** |
| Worst fit | 600 (→388) | 500 (→83) | 388 (→276) | **waits** |

**Fragmentation.** **External**: enough free memory in total but no single hole is large enough — cured by **compaction** (slide live blocks together; needs run-time relocation, costly). **Internal**: a block larger than the request — the unused tail is wasted (buddy system, fixed partitions, paging).

*(Doodle: buddy split of 1 MB — 1024 KB → 512 + 512 free → 256 + 256 free → 128 (allocated) + 128. A 100 KB request gets a 128 KB block, 28 KB lost.)*

**Buddy system.** Blocks are powers of 2. A request is **rounded up** to 2ᵏ; a larger block is split into two halves (**buddies**) until it fits. On free, a block merges with its buddy if the buddy is free; buddy address = addr **XOR** size. Fast split/merge, but internal fragmentation up to ~50%.

| Garbage collector | How it works | Strength · weakness |
|---|---|---|
| **Reference counting** | free when pointer count = 0 | immediate · **fails on cycles** |
| **Mark-and-sweep** | mark from **roots** (stack, globals), sweep rest | handles cycles · pauses (Lisp, 1960) |
| **Copying** | copy live objects to the other semi-space | compacts · wastes half the heap |
| **Generational** | collect the young area often | short pauses (Java, .NET) |

- ⚠️ **Trap:** Two unreachable objects pointing at each other keep count 1 → **leak** under pure reference counting. **Dangling pointer** = freed but still used; **leak** = unused but never freed. Compaction cures external fragmentation only.
- 💡 **Trick:** "**First is Fast, Best leaves Bits, Worst leaves Wide.**" GC: "**count, mark, copy**" — counting misses cycles, copying needs twice the room.

---

## Night-Before-the-Exam Sheet

**Fact sheet**
- Hanoi: **2ⁿ − 1** moves · naive fib: Θ(φⁿ), 2F(n+1) − 1 calls
- recursion depth d → O(d) stack · tail call → reusable frame
- O ≤ · Ω ≥ · Θ = · o < · ω > · log n! = Θ(n log n)
- Master: compare f with n^(log_b a) · tie ⇒ × log n
- 2T(n/2) + n = **Θ(n log n)** · T(n/2) + 1 = Θ(log n)
- T(n−1) + n = Θ(n²) · 7T(n/2) + n² = Θ(n^2.81)
- comparison sort ≥ **Ω(n log n)** · counting Θ(n + k), radix Θ(d(n + k))
- binary search ≤ **⌈log₂(n+1)⌉** · interpolation O(log log n) avg
- α = n/m · miss ≈ 1/(1 − α) · linear probe → primary cluster
- buddy: round up to 2ᵏ · ref-count misses cycles

**Top 12 one-liners for MCQs**
1. Stable: **bubble, insertion, merge**, counting, radix
2. Not stable: **selection, quick, heap**, shell
3. Quick worst Θ(n²): sorted input, end pivot
4. Merge: Θ(n log n) always, Θ(n) space
5. Heap: Θ(n log n) always, O(1) space
6. Fewest swaps: **selection** (n − 1)
7. Best for nearly sorted: **insertion**
8. Binary search needs sorted + random access
9. Max probes, n = 1000 → **10**
10. Double hashing ≈ uniform hashing
11. Delete in open addressing → tombstone
12. Only best fit placed all four requests

⚠️ **Top traps:** O is a bound, not "the worst case" · Master theorem needs a·T(n/b), not T(n−1) · bubble sort is O(n) best **only** with the early-exit flag · quick sort's O(log n) space is average stack · binary search on a linked list is O(n) · mid = (lo + hi)/2 can overflow · emptying a slot breaks open-addressing search · amortized ≠ average case.

💡 **All tricks together:** "base first, smaller next" · "Oh = ceiling, Omega = floor, Theta = both walls" · "leaves vs root" · "Selection Swaps least, Insertion Shifts" · "Merge: easy split, hard join; Quick: hard split, easy join" · "halve until one — 10, 20, 30" · "Linear Lumps, Quadratic Quietens, Double Disperses" · "First is Fast, Best leaves Bits, Worst leaves Wide" · "count, mark, copy".

*(Doodle: two boxes — STABLE: bubble · insertion · merge · counting · radix · bucket; NOT STABLE: selection · quick · heap · shell. Long-distance swaps break stability.)*

---

## Practice MCQs (exam pattern, 10 marks)

1. Moves for Hanoi with 5 discs: (a) 31 (b) 32 (c) 25 (d) 63
2. T(n) = 2T(n/2) + n is: (a) Θ(n) (b) Θ(n²) (c) Θ(n log n) (d) Θ(log n)
3. Stable in standard form: (a) quick sort (b) heap sort (c) selection (d) merge sort
4. Quick sort, first pivot, sorted input: (a) O(n log n) (b) O(n²) (c) O(n) (d) O(log n)
5. Max binary-search probes, n = 1000: (a) 9 (b) 10 (c) 11 (d) 500
6. m = 7, k mod 7, linear probing; 10, 17, 24 inserted. 24 goes to: (a) 3 (b) 4 (c) 5 (d) 6
7. f = Θ(g) means g is: (a) upper only (b) lower only (c) average case (d) tight bound
8. Cannot reclaim cyclic garbage: (a) mark-sweep (b) ref counting (c) copying (d) generational
9. T(n) = 4T(n/2) + n² is: (a) Θ(n²) (b) Θ(n² log n) (c) Θ(n³) (d) Θ(n log n)
10. Buddy system, 1 MB pool, 100 KB request gets: (a) 100 KB (b) 64 KB (c) 128 KB (d) 256 KB

**Answer key →** 1-a · 2-c · 3-d · 4-b · 5-b · 6-c · 7-d · 8-b · 9-b · 10-c

**Written question (10 marks).** State the Master theorem and solve T(n) = 2T(n/2) + n and T(n) = 7T(n/2) + n². Trace Lomuto partition on 2 8 7 1 3 5 6 4 (pivot = last). Give quick sort's best and worst cases with their recurrences, and one way to avoid the worst case.

1. **Theorem** — T(n) = aT(n/b) + f(n), a ≥ 1, b > 1. Compare f with n^(log_b a): smaller by n^ε → Θ(n^(log_b a)); equal → Θ(n^(log_b a) log n); larger by n^ε with a·f(n/b) ≤ c·f(n), c < 1 → Θ(f(n)). *[3]*
2. **Solve** — 2T(n/2) + n: n^(log₂2) = n = f → case 2 → **Θ(n log n)**. 7T(n/2) + n²: n^(log₂7) ≈ n^2.81 > n² → case 1 → **Θ(n^log₂7)**. *[2]*
3. **Partition** — i = −1; j = 0 (2 ≤ 4) i = 0; j = 3 (1) i = 1 → 2 1 7 8 3 5 6 4; j = 4 (3) i = 2 → 2 1 3 8 7 5 6 4; swap a[3] with pivot → **2 1 3 4 7 5 6 8**, pivot at index 3. *[3]*
4. **Cases** — best: balanced split, T(n) = 2T(n/2) + Θ(n) = Θ(n log n). Worst: split 0 / n − 1, T(n) = T(n−1) + Θ(n) = Θ(n²) (sorted input, end pivot). Avoid with a random or median-of-three pivot. *[2]*

**Before the exam ✓**
- [ ] Can solve any a·T(n/b) + f(n) in 30 s
- [ ] Can fill the sort table from memory
- [ ] Can insert keys with 3 probing schemes
- [ ] Can count binary-search probes
