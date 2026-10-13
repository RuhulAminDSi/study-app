# Probabilistic Reasoning & NLP: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-probabilistic-nlp.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-probabilistic-nlp.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** introduction to old and new AI techniques; knowledge representation; propositional and first-order logic; search techniques in AI; **probabilistic reasoning**; **natural language processing**; introduction to expert system; introduction to machine learning; regression. This notebook covers exactly the two bolded lines. Knowledge representation, search, expert systems and machine learning have their own notes in this chapter.

**High-yield:** P(A|B) = P(A∧B)/P(B) · Bayes' theorem, **1763**, Laplace's first effective use **1813** · naive Bayes = **conditional independence given the class**, nothing else · add-one smoothing (c+1)/(c<sub>·</sub>+|V|) · a Bayesian network is a **DAG**, one CPT row per parent assignment, joint = ∏ᵢ P(xᵢ | Pa(xᵢ)) · variable elimination = **multiply first, sum out after**, smallest scope first · noisy-OR = 1 − ∏ᵢ(1−pᵢ), so 0.4, 0.3, 0.2 → **0.664** and never 0.9 · Dempster–Shafer: Bel(A) ≤ P(A) ≤ Pl(A), m(∅) = 0 · Markov = memoryless; **HMM = (S, O, A, B, π)** · forward **sums**, Viterbi takes the **max**, backward looks forward in time · Penn Treebank **45** tags, Universal POS **17**, Universal Dependencies **16** relations · Porter stemmer **1980** · perplexity = **exp(NLL)**, lower is better · Word2Vec **2013**, GloVe **2014**, FastText **2016**, Transformer **2017**, BERT **2018**.

---

## 1. Uncertainty, the rules of probability and Bayes

- **Definition.** Probabilistic reasoning is reasoning under uncertainty: a probability says *how much* to believe an alternative, instead of true/false. A **random variable** is a quantity not known before observation (rain = yes/no). Discretely valued variables have a finite set; continuously valued ones live on a continuum. AI needs it because sensor data is noisy and evidence is incomplete.
- The probability of an event is a number in [0, 1]; P(Ω) = 1 for the certain event. **Joint** P(A∧B) is both happening; **conditional** P(A|B) is A given B; **marginal** P(A) = Σ_B P(A∧B) is A with B forgotten; events are **independent** when P(A∧B) = P(A)P(B).

| Definition | Meaning |
|---|---|
| Random variable | rain = yes or no |
| Probability | P(A) ∈ [0, 1] |
| Joint | P(A∧B), both together |
| Conditional | P(A\|B) = P(A∧B)/P(B) |
| Marginal | P(A) = Σ<sub>B</sub> P(A∧B) |
| Independence | P(A∧B) = P(A)P(B) |

- **Kolmogorov's axioms (1933):** 0 ≤ P(A) ≤ 1; P(Ω) = 1; for disjoint A, B, P(A∪B) = P(A) + P(B). From these: complement P(A′) = 1 − P(A); product rule P(A∧B) = P(A)P(B|A); total probability P(B) = Σᵢ P(B|hᵢ)P(hᵢ).
- **Bayes' theorem.** P(H|E) = **P(E|H)·P(H)/P(E)**, symmetrically P(E|H)P(H) = P(H|E)P(E). In **odds form**: posterior odds = prior odds × likelihood ratio. Bayes' paper appeared posthumously in 1763; Laplace (1813) gave the first genuinely useful applications.
- 💡 **Trick:** "**prior goes in, posterior comes out.**" Multiply the prior by the likelihood, divide by the evidence. In odds form you **never divide** — the evidence only exists to make the alternatives sum to one.
- ⚠ **Trap:** the four names are fixed. **Prior** P(H) is before the evidence; **likelihood** P(E|H) is the evidence if H holds; **evidence** P(E) is the normaliser; **posterior** P(H|E) is after. Swapping "likelihood" and "posterior" is the single most common wrong answer in this section.
- ✍ **Worked example 1 (base rates).** Prevalence 1 %, test 90 % sensitive and 10 % false-positive. P(D|+) = (0.9 × 0.01)/[(0.9 × 0.01) + (0.1 × 0.99)] = 0.009/0.108 = **0.083**. A small prior keeps the posterior small even for a good test — you may never drop the evidence term.
- ✍ **Worked example 2 (odds form).** Prior odds 0.01/0.99 = 1/99; likelihood ratio 0.9/0.1 = 9; posterior odds 9/99 = 1/11, so P = (1/11)/(1 + 1/11) = **1/12 = 0.083** ✓ — the same answer with no division. Use odds form when the fractions get messy.
- 💻 **IT link:** the same two-step shape is every ranking system — a prior score per item, a multiplicative evidence factor per feature, then a normalisation pass at the end.

## 2. Naive Bayes classification

- **Definition.** A naive Bayes classifier multiplies one conditional probability per feature and picks the class with the largest score. The normaliser P(x) is the same for every class, so it cancels:
  - **Ĉ = argmax<sub>C</sub> P(C)·P(x₁|C)·P(x₂|C)···P(xₙ|C)**
- **What "naive" means.** Exactly one thing: **P(x₁,…,xₙ|C) = ∏ᵢ P(xᵢ|C)** — the features are independent *given the class*. It does **not** mean equal priors, equal feature weights, or linear separability. The assumption is almost never true, yet the classifier works, which is why it runs spam filters.
- Three flavours: **multinomial** for word counts, P(w|C) = count(w,C)/Σ count(·,C); **Bernoulli** for present/absent words; **Gaussian** for real-valued features, P(xᵢ|C) = 𝒩(xᵢ; μ, σ²).

| Part | Meaning |
|---|---|
| P(C) | prior — how common the class is |
| P(xᵢ\|C) | probability of feature i inside class C |
| ∏ᵢ P(xᵢ\|C) | **the naive step** |
| argmax | the class with the highest score |

- ⚠ **Trap — the zero-count problem.** A word never seen in class C has P(w|C) = 0, and a single zero kills the whole product. The fix is **add-one smoothing**, (count+1)/(total+|V|); with 1 200 words and |V| = 5 000 an unseen word scores **1/6200**.
- ⚠ **Trap — Laplace's rule of succession.** Ten heads, then the next: (10+1)/(10+2) = **11/12 = 0.917**. The same arithmetic; never write a count as a probability.
- 💡 **Trick:** "**multiply the per-feature probabilities, then add the prior once**" — and always work in **log space**, which is the only way 10 000 features can be scored without underflowing to zero.
- 💡 **Second trick:** over-smoothing flattens the model and destroys the signal of rare words. For imbalanced text, **complement naive Bayes** or **Bernoulli** is better. MNB is linear in the features and trains in one pass — that is why spam filters keep using it.
- ✍ **Worked example.** 100 spam and 200 ham mails. Spam has 2 000 words (offer 40, free 60, money 30); ham has 1 200 (offer 5, free 10, money 8). Spam = (1/3)(40/2000)(60/2000)(30/2000) = **3.0 × 10⁻⁶**; ham = (2/3)(5/1200)(10/1200)(8/1200) = **1.54 × 10⁻⁷**. Ratio 19.4, so P(spam) = **95.1 %**.
- 💻 Everyday work: spam filters · sentiment analysis · named-entity recognition · news classification · email triage · review rating · medical coding from free text. "Naive" only means **features are independent once the class is known** — never equal priors, never equal weights.

## 3. Bayesian networks: DAG, CPT and the factorisation

- **Definition.** A Bayesian network (belief network) is a directed acyclic graph (DAG) whose nodes are random variables, where X → Y means "**X is a direct cause of Y**". Each node carries a **CPT** (conditional probability table) **P(node | its parents)**, or a marginal if it has none. The whole joint distribution is written
  - **P(x₁,…,xₙ) = ∏ᵢ P(xᵢ | Pa(xᵢ))**
  One big 2ⁿ table is replaced by **n** small ones.

| What the graph says | Rule |
|---|---|
| Root node | keeps the marginal P(X) |
| Child node | keeps P(child \| parent) |
| Local Markov | given the parents, **independent** of everything else |
| d-separation | a blocked path ⇒ independent |
| Why a DAG | a cycle would leave no valid ordering |

- The standard test network: **Rain** and **Sprinkler** are two independent causes of **WetGrass**; P(Rain) = 0.30, P(S=on|Rain) = 0.10, P(S=on|¬Rain) = 0.50. WetGrass CPT, one row per parent set: (yes, yes) 0.90 · (yes, no) 0.80 · (no, yes) 0.40 · (no, no) 0.10.
- ✍ **Worked example (marginalise, then condition).** P(W=yes) = Σ<sub>r,s</sub> P(r)P(s|r)P(W|r,s) = 0.30[0.10(0.90) + 0.90(0.80)] + 0.70[0.50(0.40) + 0.50(0.10)] = 0.30(0.86) + 0.70(0.25) = **0.418**. Then P(Rain|yes) = 0.243/0.418 = **0.581** — wet grass nearly triples the rain probability. P(Sprinkler|yes) = 0.167/0.418 = 0.399.
- 💡 **Trick:** "a BN keeps **one row per parent assignment**, never the whole table." The factorisation is just the product rule plus a local Markov assumption: **multiply the factors, then Σ over whatever is still unknown**.
- ⚠ **Trap:** (i) a BN is a **DAG** — a cycle makes a node its own ancestor, so no ordering and no valid CPT exist; (ii) an arrow means direct dependence, **not proven causation**; (iii) two parents A → C ← B are marginally independent, but **become dependent once C is observed**.
- **Learning the parameters.** **MLE** maximises P(data | θ) — for a Bernoulli, p̂ = 7/20 = 0.35. **EM** alternates: the **E**-step computes expected hidden labels, the **M**-step re-estimates θ; the likelihood never decreases. EM trains mixture models and HMM parameters.
- **Three ways to answer a query:** **full enumeration** — multiply the CPTs and Σ over every hidden variable, exact up to about ten variables; **variable elimination** — the same sum, one variable at a time (next section); **sampling** — importance sampling or MCMC when the tree is too large, approximate but it scales.

## 4. Inference: variable elimination, noisy-OR, Dempster–Shafer

- **Variable elimination.** Exact inference in a BN means summing over every assignment of the hidden variables: fine for three variables, impossible for three hundred. **Variable elimination** performs the same sum **one variable at a time**: multiply the factors that contain the variable, then Σ it away. The cost is the size of the largest intermediate factor, roughly **treedwidth + 1** variables — so *which* variable you eliminate first is a real decision.

| Factor | Statement |
|---|---|
| f₁ | P(R) |
| f₂ | P(S\|R) |
| f₃ | P(W\|R,S) |

- ✍ **Worked example (eliminate Rain first).** f₁ · f₂ both mention R, so multiply and then Σ<sub>R</sub>: P(R)P(S|R) = P(S) = 0.30(0.10) + 0.70(0.50) = **0.38**. The factor now speaks only about S, so the next product is tiny. Eliminating R **last** leaves the (R, S, W) factor behind — same answer, far more work.
- **Noisy-OR — a compact causal model.** When several independent causes can each produce an effect, it is enough for one to fire:
  - **P(Y|X₁…Xₙ) = 1 − ∏ᵢ (1 − P(Y|Xᵢ = 1, all others 0))**
  - 0.4, 0.3 and 0.2 give 1 − 0.6·0.7·0.8 = **0.664**, and never the naive sum 0.9. It needs **n** parameters instead of 2ⁿ, which is why deterministic OR nodes in a BN use it.
- **Dempster–Shafer — talking about ignorance.** A mass m(A) is assigned to a whole **focal element** (a set) rather than a point. Under the **closed-world** assumption m(∅) = 0, and every mass sits in a closed set:
  - **Bel(A) = Σ<sub>B⊆A</sub> m(B) ≤ P(A) ≤ Σ<sub>B∩A≠∅</sub> m(B) = Pl(A)**
  Dempster's rule of combination merges two sources and renormalises by the conflict k = Σ<sub>B∩C=∅</sub> m₁(B)m₂(C).
- ⚠ **Trap:** Bayes assumes exactly **one** true state whose probabilities sum to 1, and treats anything not listed as impossible; Dempster–Shafer admits **ignorance** and therefore can only give a **bound**. Bel ≤ Pl always. Two sensors with {s} = 0.6 and {s, f} = 0.4 give Bel(s) = **0.84** and Pl(s) = **1.00**.
- 💡 **Trick:** evidence combination has three shapes and three pictures — **Σ** means eliminating a variable, **∏(1−p)** means noisy-OR, **m(∅) = 0 plus one closed set** means Dempster–Shafer. One principle underneath: **multiply first, then normalise**.
- 💻 **IT link:** variable elimination is exactly the join order in a relational database: multiplying factors is joining relations, summing a variable away is dropping a column. "Smallest scope first" is the query-planner rule by another name.

## 5. Markov chains and hidden Markov models

- **Definition.** Markov's chain says that instead of the whole past, only the **most recent state** determines the future distribution:
  - **P(Xₜ₊₁ | Xₜ, Xₜ₋₁, …) = P(Xₜ₊₁ | Xₜ)** — the **first-order Markov property**.
  A **hidden Markov model** is the same thing with the true state **hidden** and only observations visible. An HMM is fixed by five things:

| Part of the HMM | What it holds |
|---|---|
| S = {s₁,…,sN} | the hidden states |
| O = {o₁,…,oM} | the observation alphabet |
| aᵢⱼ | sᵢ → sⱼ transition |
| bⱼ(o) | probability of o from sⱼ |
| πᵢ | the initial-state distribution |

- **Assumptions:** the Markov property plus emissions independent of each other. Without them an HMM is not an HMM — speech recognition relaxes them into a space-dependent model.

| Weather | → Sunny | → Cloudy | → Rainy |
|---|---|---|---|
| Sunny (π) | 0.50 | 0.30 | 0.20 |
| Sunny | 0.50 | 0.30 | 0.20 |
| Cloudy | 0.20 | 0.40 | 0.40 |
| Rainy | 0.40 | 0.40 | 0.20 |

- ✍ **Worked example (two days on).** π = (0.5, 0.3, 0.2). Day two: π·A = (0.39, 0.35, 0.26). Day three: (0.369, 0.361, 0.270). So **P(day three rainy) = 0.27** — yesterday's rain is exactly why today's chance is high.
- 💡 **Trick:** "**memory is one step.**" Markov = memory of 1; add a hidden state and you have an HMM; pair it with emissions and you have language modelling.
- ⚠ **Trap:** "an HMM is a Markov chain" is **false**. In a Markov chain the state is not hidden; in an HMM the state is hidden from the **observer** while only observations are seen. An HMM *models* states; it is not a Markov chain.
- 💻 Uses: ASR · language identification (early systems) · bioinformatics, DNA and protein structure · spam filtering with a Markov chain or a Markov random field.

## 6. Forward, backward and Viterbi decoding

- **Definition.** Given observations o₁,…,oT we ask three different questions: (i) **forward** — how likely is the whole sequence? (ii) **backward** — how likely is the current state once all future evidence is folded in? (iii) **Viterbi** — which is the single most likely state path? All three are product-sum dynamic programming; only the aggregation differs.

| Algorithm | Question it answers | Combines with |
|---|---|---|
| Forward | P(O) — how surprised are we? | Σ over all states |
| Backward | the "future" weight of state j | Σ over all states |
| Forward–backward | P(stateₜ\|O) — **posterior smoothing** | α(j)β(j)/P(O) |
| Viterbi | the best single path | max over states |
| Baum–Welch | learns A, B and π (EM) | E-step, M-step |

- **Forward (sums every path).** α<sub>t</sub>(j) = P(o₁…o<sub>t</sub>, q<sub>t</sub> = s<sub>j</sub>) = **b<sub>j</sub>(o<sub>t</sub>)·Σ<sub>i</sub> a<sub>ij</sub> α<sub>t−1</sub>(i)**, with α₁(j) = π<sub>j</sub>b<sub>j</sub>(o₁) and **P(O) = Σ<sub>j</sub> α<sub>T</sub>(j)**. Cost O(TN²).
- **Backward (what is still possible).** β<sub>t</sub>(j) = P(o<sub>t+1</sub>…o<sub>T</sub> | q<sub>t</sub> = s<sub>j</sub>) = **Σ<sub>i</sub> a<sub>ji</sub> b<sub>i</sub>(o<sub>t+1</sub>) β<sub>t+1</sub>(i)**, with β<sub>T</sub>(j) = 1. Smoothing: **P(q<sub>t</sub> = s<sub>j</sub>|O) = α<sub>t</sub>(j)β<sub>t</sub>(j)/P(O)**.
- **Viterbi (the one best path).** δ<sub>t</sub>(j) = max<sub>i</sub> [δ<sub>t−1</sub>(i)·a<sub>ij</sub>]·b<sub>j</sub>(o<sub>t</sub>), with ψ storing the argmax, then backtrack along ψ. The **only** difference from forward is **max, not Σ**.
- ✍ **Worked example 1 (three states, dry, dry, wet).** π = (0.5, 0.3, 0.2); A as on the previous sheet; b(dry) = (0.9, 0.6, 0.1), b(wet) = (0.1, 0.4, 0.9). α₁ = (0.45, 0.18, 0.02) · α₂ = (0.1998, 0.1926, 0.0107) · α₃ = (0.0122, 0.0798, 0.0738) · **P(O) = 0.1658** · δ₃ = (0.0065, 0.0324, 0.0365) ⇒ best path **S₁ → S₂ → S₃**.
- ✍ **Worked example 2 (marginals differ from the best path).** γ₃ = α₃(j)β₃(j)/P(O) = (0.073, 0.481, 0.445): the most likely state at t = 3 is S₂, yet the most likely **path** ends in S₃. A marginal is not a path.
- ⚠ **Trap:** forward gives **P(O)**, Viterbi gives the **best path**, and the best path is **not** the most probable state at every instant. Long sequences underflow: divide by c<sub>t</sub> = Σ<sub>j</sub> α<sub>t</sub>(j) each step and multiply it back at the end.
- 💡 **Trick:** "**forward adds, Viterbi takes the max, backward looks ahead.**" Write forward once; then replace Σ with **max**, replace α with ψ, and you have Viterbi.
- **EM and HMM.** The E-step computes the expectation with γ, the M-step re-estimates a and b. γ uses only observations, so forward–backward **is** EM for an HMM; Viterbi is hard EM.
- 💻 **IT link:** these recursions are a **dynamic-programming shortest path over a lattice** — the same shape as a shortest path in a weighted DAG, and the same shape as the beam search inside a speech recogniser.

## 7. NLP I: pipeline, morphology and tokenisation

- **Definition.** Natural language processing (NLP) is the branch of AI that lets a computer **understand, interpret, generate and respond** to human language. It is a **pipeline**: every stage consumes the tokens the previous stage produced, so a mistake at the bottom is never repairable at the top.

| Stage | What it does |
|---|---|
| Tokenisation | splits text into words and sentences |
| Normalisation | lowercases, strips markup and code numerals |
| Stop-word removal | drops *a, the, of, is, and…* |
| Stemming | chops a word back to its stem |
| Lemmatisation | returns the word to its dictionary form |

- **Tokenisation.** Splitting raw text into **tokens** is the first non-trivial step. English separates on whitespace and punctuation; a **language-specific tokenizer** handles contractions and clitics. Aggressive normalisation (lowercasing, stripping digits) helps retrieval but destroys negation and casing signals used for sentiment and NER.

| Feature | Good for | Bad for |
|---|---|---|
| Lowercasing | case-insensitive matching | proper nouns, "US" vs "us" |
| Removing punctuation | token counts | parsing, sentiment |
| Removing digits | boilerplate | years, prices, units |
| Stop-word removal | frequency-based scoring | negation, meaning |

- **Stop words.** The frequent function words *a, the, of, is, and, to* carry little topic information and are usually dropped for retrieval. But they are not useless: **not**, **no** and **but** flip polarity, so removing stop words from a sentiment model can invert the result.
- **Morphology and word formation.** English builds words from a root plus affixes: **prefix** (un-, re-, dis-), **infix** (-ize-), **suffix** (-ing, -ed, -ly, -ness, -tion). A morphological analyser strips the affix and recovers the root; a stemmer is the crude version of that, and a lemmatizer the careful one.
- ✍ **Worked example.** "The boys, having played, are winning" → tokens `The / boys / , / having / played / , / are / winning`. Lemmas: *boy, have, play, win*; stop words *the, having, are* removed.
- 💡 **Trick:** stop words are **noise for topics, signal for polarity**. Keep *not, no, never, but, although*.
- 💻 **IT link:** the same pipeline is an ETL job — extract (tokenise), transform (normalise), load (index). A bad upstream stage silently corrupts every downstream query.

## 8. NLP II: stemming, POS, chunking, parsing

- **Stemming vs lemmatisation.** **Stemming** chops suffixes with heuristic rules (Porter, **1980**): relational → relat, connected → connect — the output is **not a real word**. **Lemmatisation** uses a vocabulary plus the part of speech: better → good, teeth → tooth.

| Word | Stem | Lemma | Tag |
|---|---|---|---|
| playing | play | play | VBG |
| played | play | play | VBD |
| better | better | **good** | JJR |
| flies | fli | **fly** | NNS |
| mice | mice | **mouse** | NNS |

- **POS tagging** labels every token's part of speech. **Penn Treebank: 45 tags** (a 36-tag reduced set is also quoted); the **Universal POS** set has **17 tags**. **Chunking** (shallow parsing) groups tags into flat phrases — NP, VP, PP.
- ✍ **Worked example 1 (tag the sentence).** "The *flies* hit the wall" → The/DT flies/NNS hit/VBD the/DT wall/NN. But "The flies *hit* the wall" is a complete grammatical sentence too, and only context decides.
- **Parsing.** **Constituency parsing** uses a context-free grammar and produces nested phrases. **Dependency parsing** links every word to its grammatical **head**; Universal Dependencies defines **16 universal relations** — nsubj, obj, det, amod, ROOT, case, nmod.
- ✍ **Worked example 2 (chunk the sentence).** "The boy hit the ball in the park" → [**NP** The boy] [**VP** hit the ball] [**PP** in the park]. Chunking stops there — it never says which noun phrase attaches to which verb.
- 💡 **Trick:** "stemming is the **scissors**, lemmatisation is the **dictionary**." A POS tag says what kind of word it is, chunking adds one level of phrase, parsing adds all of them. Counts: **45** Penn · **17** Universal POS · **16** UD relations.
- ⚠ **Trap:** **POS tagging is not parsing** — a tagger answers "what kind of word is this?", a parser "how do the words hang together?". Stemming is **not** lemmatisation. And "flies" alone carries **three** readings: plural noun, third-person verb, or acrobats.
- **Ambiguity — four types, all tested.** **Lexical** (bank: river / money) · **syntactic** ("I saw the man with the telescope") · **semantic** ("He kicked the bucket") · **pragmatic / scope** ("He saw her with the dog").
- 💻 **IT link:** an **inverted index** stores, for every term, the sorted list of documents containing it; chunks and dependency arcs sit beside it. A ranker then scores each (document, term) pair — the same shape as a naive Bayes document score with TF-IDF weights.

## 9. NLP III: embeddings and n-gram language models

- **Definition.** A **word embedding** maps every word to a short dense vector so that words used in similar contexts end up near each other — Firth's distributional hypothesis, *"you shall know a word by the company it keeps"*. One-hot vectors are the opposite: sparse, all distances equal, no semantics.

| Model | Idea |
|---|---|
| Word2Vec (2013) | CBOW from the context; skip-gram from the centre word |
| GloVe (2014) | factorises **global** co-occurrence counts |
| FastText (2016) | embeds **subwords**, so rare words get vectors |
| Transformer (2017) | attention over long range — parallel |
| BERT (2018) | two-sided Transformer encoder; pretrained language-understanding model |

- **CBOW vs skip-gram.** **CBOW** predicts the centre word from its surroundings — faster, better on frequent words. **Skip-gram** predicts the surroundings from the centre word — slower, but much better on rare words. Both are shallow neural networks trained with negative sampling.
- **Attention.** The model decides for itself which part of the sentence matters most: each word draws information from **every** other word, weighted by a learned score. Distances stop hurting, so many layers become feasible.

| | One-hot | Embedding |
|---|---|---|
| Size | N-dimensional, mostly zeros | small and dense |
| Distance | all pairs equal | semantically graded |
| Similar words | none | king ≈ queen |
| Cost | high dimension, O(N²) | low dimension, cheap |

- ✍ **Worked example.** "Ravi is playing", "Ravi is studying" — Ravi is the same person, but the surrounding words differ, so a static Word2Vec vector can only give *Ravi* one meaning. Contextual embeddings change the vector with the context — that is the whole point of BERT.
- 💡 **Trick:** "**Word2Vec says when, GloVe says how much, FastText says what, BERT says who.**" 2013 → 2014 → 2016 → 2017 → 2018 — learning the years in order makes it easy.
- ⚠ **Trap:** FastText **is** subword, never "not subword". BERT is an **encoder**, GPT a **decoder**.
- 💻 **IT link:** embeddings live in vector databases (Chroma, FAISS, pgvector); "find the k nearest vectors" is an ANN index lookup — the same retrieval, in a different shape.

## 10. n-grams, smoothing and perplexity

- **Definition.** The simplest language model: an **n-gram** is a run of **n** consecutive words. n = 1 unigram, n = 2 bigram, n = 3 trigram. The justification: people look up the next word among the **few words just seen**.
- **Conditional probabilities.** P(wᵢ | wᵢ₋₁) for bigrams, P(wᵢ | wᵢ₋₂, wᵢ₋₁) for trigrams, P(w | previous n−1) in general, all from **P(wᵢ | previous) = count(previous, wᵢ)/count(previous)**.

| Model | Remembers |
|---|---|
| Unigram | single word counts |
| Bigram | word pairs — the next word |
| Trigram | three words — a touch of grammar |
| Skip-gram | **all word pairs** |
| CBOW | **all word pairs**, summed |

- ✍ **Worked example.** In "I am a student" there are 4 words, N = 19 (with the previous sentence), V = 6. P(I) = 6/19, P(am|I) = 3/12, P(a|am) = 3/9, P(student|a) = 4/11, so **P = 0.0789** unsmoothed. Add-one smoothing with |V| = 7 gives 6/26 · 3/12 · 3/9 · 4/11 = **0.0070** — no word can be unseen any more.
- **Three smoothing methods.** **Laplace / add-one** — (count+1)/(total+|V|). **Good–Turing** — redistributes the count of words seen exactly once to unseen ones. **Kneser–Ney** — looks not just at *how often* but at *which word preceded it*.

| Target | Correct conditioning | Wrong conditioning |
|---|---|---|
| bigram | count(wᵢ₋₁, wᵢ)/count(wᵢ₋₁) | count(wᵢ₋₁, wᵢ)/N |
| trigram | count(wᵢ₋₂, wᵢ₋₁, wᵢ)/count(wᵢ₋₂, wᵢ₋₁) | count(wᵢ₋₁, wᵢ)/count(wᵢ₋₁) |

- 💡 **Trick:** longer n means a better model and more zero counts; in practice n = 3–5 is where the trade-off turns.
- ⚠ **Trap:** the bigram probability conditions on the **preceding** word, never on the following one, and the denominator is the count of the context, not of all tokens.
- 💻 **IT link:** counting n-grams is a MapReduce word-count pattern; without smoothing the future probability collapses to zero, which is why production systems use Kneser–Ney.

## 11. Evaluation, applications and exam map

- **Perplexity.** **PPL = exp(NLL)** where NLL = −(1/N) Σ log P(wᵢ) — the *effective branching factor* of the model. Lower perplexity = a better model. It only makes sense **relative** to the same tokenisation and the same test set.
- ✍ **Worked example.** m₁ = (0.4, 0.4, 0.2): NLL = 1.147, **PPL = 3.15**. m₂ = (0.2, 0.2, 0.6): NLL = 1.243, **PPL = 3.47**. The first distribution is better because it is closer to the truth.
- ⚠ **Trap:** perplexity is an **exponential**, never a probability, and it is **not comparable** across tokenisations.
- **Applications.** Spam filtering (naive Bayes) · sentiment analysis and chatbots (transformers) · machine translation · speech recognition (HMM → deep models) · question answering and RAG (embeddings + vector search) · named-entity recognition (CRF) · spell and grammar checking (n-gram + dictionary) · OCR and document search.

| If the question says… | The method is… |
|---|---|
| "classify a document, multiply scores" | naive Bayes |
| "assume one true cause, graph of causes" | Bayesian network |
| "combine weak pieces of evidence" | noisy-OR, Dempster–Shafer |
| "infer from partial evidence" | variable elimination |
| "predict the next state from the last one" | Markov chain |
| "states are hidden, only observations are seen" | HMM |
| "find the most likely path" | Viterbi |
| "probability of the whole sequence" | forward |
| "chop the suffix off a word" | stemming |
| "map words to vectors" | embedding |
| "which model predicts better?" | lower perplexity |

- **Exam map.** Most repeated definitions: Bayes' theorem, naive Bayes independence, the BN factorisation, Markov's first-order property, the HMM tuple, the three recursions. Most repeated traps: swapping prior and posterior, equal priors for "naive", noisy-OR written as a sum, confusing stemming with lemmatisation, and POS tagging with parsing.

---

## Practice MCQs

1. P(A|B) = 0.4, P(A) = 0.3 ⇒: (a) 0.7 (b) P(A∧B) = 0.12 (c) 1.33 (d) 0.24
2. Prevalence 1 %, test 99 % sensitive, 99 % specific: (a) 0.99 (b) 0.10 (c) ≈ 0.50 (d) 0.01
3. "Naive" in naive Bayes means: (a) independence given the class (b) equal priors (c) linear separability (d) uniform features
4. A Bayesian network factorises: (a) ∏ᵢ P(xᵢ) (b) max over all assignments (c) Σᵢ P(xᵢ | Pa) (d) ∏ᵢ P(xᵢ | Pa(xᵢ))
5. A Bayesian network must be a DAG because: (a) arrows point downward (b) a cycle makes a node its own ancestor (c) a CPT needs two parents (d) the joint is uniform
6. noisy-OR with two causes of 0.4: (a) 0.80 (b) 0.16 (c) 0.64 (d) 0.36
7. True of Dempster–Shafer: (a) Bel ≤ P ≤ Pl (b) Pl ≤ Bel always (c) one probability per event (d) it equals naive Bayes
8. Forward and Viterbi differ in: (a) forward ignores the data (b) Viterbi is exact and forward is not (c) they use different HMMs (d) sum over paths vs max over one path
9. "flies" → "fly" using a dictionary is: (a) stemming (b) lemmatisation (c) tokenisation (d) chunking
10. True of word embeddings: (a) one-hot vectors carry semantics (b) GloVe models parallel sentence pairs (c) king and queen land near each other (d) a trigram is an embedding

**Answer key:** 1-b · 2-c · 3-a · 4-d · 5-b · 6-c · 7-a · 8-d · 9-b · 10-c

## Written question (10 marks)

State Bayes' theorem with its four terms. A test detects a disease in 90 % of cases, the disease affects 1 % of the population and the test is positive for 10 % of healthy people — find P(disease | positive), then write the naive Bayes rule and say why it is called naive.

**Model answer:**

1. **Theorem (3).** **P(H|E) = P(E|H)P(H)/P(E)**. **Prior** P(H): before the evidence. **Likelihood** P(E|H): the evidence if H is true. **Evidence** P(E): the normaliser. **Posterior** P(H|E): after.
2. **Numerator (2).** 0.9 × 0.01 = 0.009.
3. **Denominator (2).** 0.009 + 0.1 × 0.99 = 0.108, so P(D|+) = 0.009/0.108 = **0.083** — a good test, a tiny prior, a small posterior.
4. **The naive Bayes rule (2).** **Ĉ = argmax<sub>C</sub> P(C)P(x₁|C)···P(xₙ|C)**; the normaliser P(x) is identical for every class and cancels.
5. **Why naive (1).** It assumes **P(x₁,…,xₙ|C) = ∏ᵢP(xᵢ|C)** — features independent given the class.

## Night-before one-liners

P(A|B) = P(A∧B)/P(B) · Bayes 1763, Laplace 1813 · odds form: posterior = prior × likelihood ratio · naive Bayes = independence **given the class**, and nothing else · add-one (c+1)/(c<sub>·</sub>+|V|) · BN = DAG, one CPT row per parent set, joint = ∏P(xᵢ|Pa) · eliminate: multiply, then Σ out, smallest scope first · noisy-OR 0.4, 0.3, 0.2 → **0.664**, never 0.9 · Bel ≤ P ≤ Pl, m(∅) = 0 · Markov = memoryless · HMM = (S, O, A, B, π) · αₜ = bⱼ(oₜ)·Σᵢaᵢⱼαₜ₋₁(i) · βₜ = Σⱼaᵢⱼbⱼ(oₜ₊₁)βₜ₊₁(j) · γ = αβ/P(O), Viterbi takes the max · bigram = count(w₋₁,w)/count(w₋₁) · perplexity = exp(NLL) · stemming is the scissors, lemmatisation the dictionary · Penn 45 · Universal POS 17 · UD 16 · Porter 1980 · Word2Vec 2013, GloVe 2014, FastText 2016, Transformer 2017, BERT 2018.