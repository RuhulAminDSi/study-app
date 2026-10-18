# Expert Systems & Machine Learning Fundamentals: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-expert-systems-ml.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-expert-systems-ml.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** introduction to old and new AI techniques; knowledge representation; propositional and first-order logic; search techniques in AI; probabilistic reasoning; natural language processing; **introduction to expert system**; **introduction to machine learning; learning algorithms: supervised and clustering (unsupervised)**; practical application of machine learning; regression. This notebook covers the two bolded lines. Search, probabilistic reasoning and NLP are the neighbouring lessons; regression and practical applications come next.

**High-yield:** an expert system = knowledge base + inference engine + user interface + explanation facility · the inference cycle **match → fire → update → test** · forward chaining starts from the facts, backward chaining from the goal and asks the user questions · DENDRAL (chemistry, 1965–1972), MYCIN (medicine, ≈ 600 rules, ≈ 65 % correct), EMYCIN (1977), XCON (DEC orders, live from 1980) · ML is a subset of AI, and ML ⊃ deep learning · the three paradigms: supervised (labels), unsupervised (no labels), reinforcement (reward after acting) · split **60 / 20 / 20** train / validation / test, k-fold CV with k = 5 or 10 · **training error ≪ test error = overfitting (high variance)**; both errors high = underfitting (high bias) · **expected error = bias² + variance + irreducible noise** · more data cuts variance, never bias.

---

## 1. What is an expert system?

- **Definition:** a program that reproduces the reasoning of a human expert inside one narrow **domain**. It stores that domain's facts and rules, reasons over them to advise, diagnose or recommend, and — crucially — **explains how it reached the conclusion**.
- The domain must be **narrow enough to be written down**: bacteraemia, tax computation, one family of computers. A domain may be *hard* and still be fully expressible; what disqualifies it is not difficulty but **tacit knowledge** — everything the expert does without noticing.

| Characteristic | What it means | Example |
|---|---|---|
| Domain-specific | one narrow field only | bacterial infection |
| Rule-based | production rules IF–THEN | IF fever > 38 °C THEN flu |
| Uncertainty | certainty factors, fuzzy logic | MYCIN's certainty factors |
| Self-explaining | prints the rules that fired | "because X and Y ⇒ Z" |
| Does not learn | rules hand-encoded by people | nothing fitted at run time |

- 💡 **Trick:** four verbs, four parts — it **stores** what it knows, **works out** what follows, **explains** why, and **asks you** for the rest.
- ⚠ **Trap:** it is **not** a learning system (nothing is learnt from data while it runs) and **not** general purpose (narrowness is the design).
- ✍ **Worked example.** Rules: **R1** IF temperature > 38 °C AND cough AND white-cell count > 6000 THEN influenza (0.8) · **R2** IF influenza AND shortness of breath THEN pneumonia (0.9) · **R3** IF temperature > 38 °C AND rash AND no cough THEN measles (0.7). Working memory: temperature 39, cough true, white-cell count 7200, shortness of breath true. Cycle 1: only R1 matches → add *influenza 0.8*. Cycle 2: R2 now matches → add *pneumonia 0.9*. Cycle 3: R3 fails. Output: **pneumonia**, explained as "influenza, from fever, cough and raised white cells, plus shortness of breath".
- 💻 **IT link:** every loan-scoring rule, tax bracket and fraud rule in production is a miniature expert system — a store of rules, an engine that matches them, a log that explains it: a **policy engine**.

## 2. Architecture of an expert system

- **Knowledge base** — the domain's facts, rules and heuristics. **Inference engine** — matches rules against what is known and fires the ones that match. **Working memory** — the facts of the case in hand. **User interface** — the dialogue. **Explanation facility** — prints the reasoning. **Knowledge acquisition** — how new rules arrive.

| Component | Job | The question it answers |
|---|---|---|
| Knowledge base | facts + rules + heuristics | "what is known?" |
| Inference engine | matches, fires, updates | "what follows from it?" |
| Working memory | facts of this case | "what do we know now?" |
| User interface | asks, takes answers | "what do you need?" |
| Explanation facility | traces the rules fired | "why did you say that?" |
| Knowledge acquisition | elicits and adds rules | "how does a rule arrive?" |

- 💡 **Trick:** ask the four questions in order — **what** is known (knowledge base), **so what** follows (inference engine), **why** (explanation), **what else** do I need (interface).
- ⚠ **Trap:** the inference engine **does not store** the rules — the knowledge base does. The explanation facility is **not** the user interface.
- ✍ **Worked example:** (a) "Is this chest pain a heart attack?" — user interface asks, inference engine decides; (b) "Why do you think so?" — explanation facility; (c) "How much do you weigh?" — interface, and the answer goes into working memory; (d) "Rules 1 and 4 both match; which wins?" — conflict resolution inside the engine, by specificity, recency or priority.
- 💻 **IT link:** the same five boxes appear in every config-driven system — a router's access-list matcher, a tax engine, a spam rule list — with the explanation facility replaced by an audit log.

## 3. Rules, the inference cycle and the two chainings

- A production rule reads **IF \<antecedent\> THEN \<consequent\>**, the antecedent being a conjunction of conditions on working-memory facts.

| Part of a rule | Example |
|---|---|
| Antecedent (IF) | temperature > 38 °C |
| Connectives | AND / OR / NOT |
| Consequent (THEN) | influenza, CF 0.8 |
| Certainty factor | MYCIN: −1 … +1 |
| Firing | copy the THEN into memory |

- The **inference cycle** is **match → fire → update → test**: match every rule against working memory, fire the ones that match, copy each conclusion into working memory, then test the goal.

| Feature | Forward chaining — data-driven | Backward chaining — goal-driven |
|---|---|---|
| Starts from | the facts in working memory | a goal / hypothesis |
| Search style | breadth-first, bottom-up | depth-first, top-down |
| Answers | "what else can be derived?" | "is this goal provable?" |
| Best for | monitoring, prediction | diagnosis, planning |
| Weakness | explores every rule | no rule for the goal |
| Classic user | XCON (configuration) | MYCIN (diagnosis) |

- 💡 **Trick:** "**The milk is here, so the milk is off**" — forward. "**Is the milk off? Then check the date**" — backward. Facts push conclusions out; the goal pulls facts in.
- ⚠ **Trap:** forward chaining can **never prove a negative** — no rule fires on "there is no rash", so "not measles" is never derived.
- ✍ **Worked example (both ways, rules of §1).** Facts: temperature 39, cough true, white-cell count 7200, shortness of breath true. **Forward:** cycle 1 fires R1 → *influenza 0.8*; cycle 2 fires R2 → *pneumonia 0.9*; cycle 3 R3 fails. Result: pneumonia. **Backward:** goal = pneumonia → only R2 concludes it → it needs influenza → only R1 concludes that → it needs temperature, cough, white-cell count → **three questions to the user**, all yes → R1 proved → R2 satisfied.

## 4. The classic systems and the knowledge-acquisition bottleneck

- The **knowledge-acquisition bottleneck** (knowledge-engineering bottleneck): an expert's knowledge is tacit, verbal and full of unstated context; turning it into explicit rules takes interviews, months of work and endless validation. The chain runs **domain expert ⇄ knowledge engineer ⇄ rule base** — nothing in it learns by itself.

| System | Domain, reasoning and dates | Limitation / fate |
|---|---|---|
| **DENDRAL** 1965–1972 | chemistry — infers a molecular structure from a mass spectrum, by splitting the molecule into substructures | the first expert system; hours of computer time where a chemist needed minutes |
| **MYCIN** 1960s–77, **EMYCIN** 1977 | medicine — bacteraemia diagnosis and therapy, ≈ 600 rules, backward chaining + certainty factors; EMYCIN is the same engine with those rules removed | ≈ 65 % correct in blind tests, above the physicians who tested it; never used clinically — but EMYCIN proved the engine is reusable |
| **XCON (R1)** 1980 | DEC — configures VAX-11/780 systems from a customer order, forward chaining; pilot 1978–80 | one company, one product family; reported to save tens of millions of dollars a year |

| Limitation | What it means |
|---|---|
| Knowledge acquisition | slow, costly, hand-made |
| Narrow domain | outside it, unanswerable |
| Brittleness | fails, never degrades |
| No learning | new facts = new interview |
| No common sense | no world model at all |

- 💡 **Trick:** "**D**ENDRAL for **s**tructure, **M**YCIN for **s**ymptoms, XCON for a con**figuration**". All three are dead code today: the bottleneck, not the silicon, ended expert systems.
- ⚠ **Trap:** DENDRAL was **chemistry**, not medicine. MYCIN did **not** learn from patient records. XCON is not general purpose.
- ✍ **Worked example (viva):** *Why was MYCIN never used in hospitals?* Because of its bottleneck and its sociology, not its accuracy: the rule base was elicited by hand from a few specialists, it knew nothing outside infectious disease, and liability, ethics and consent blocked a therapy-recommending machine.

## 5. Machine learning and the three paradigms

- **Machine learning** is the branch of AI in which a system improves its performance on a task by working through **data**, instead of having every rule written down in advance. Samuel used the term in **1959**; Mitchell's definition: a program learns from experience **E** with respect to a task **T**, measured by **P**, if its performance at **T** improves with **E**.

| Term | Meaning | Term | Meaning |
|---|---|---|---|
| Data / example | one data row | Model | the learned f : X → y |
| Feature (X) | one input property | Parameter | a number the fit moves |
| Label (y) | the answer wanted | Hyper-parameter | a setting you choose |
| Training | fitting the parameters | Prediction | running the frozen model |
| Loss / cost | minimised while fitting | Epoch | one pass over training |

| Aspect | Supervised | Unsupervised | Reinforcement |
|---|---|---|---|
| Data | labelled (X, y) | unlabelled X | reward after acting |
| Goal | predict a known answer | discover structure | maximise the reward |
| Tasks | classification, regression | clustering, PCA | control, games, motion |
| Algorithms | tree, k-NN, naive Bayes, SVM | k-means, PCA, DBSCAN | Q-learning, policy gradient |
| Example | spam filter, credit scoring | market segmentation | a robot learning to walk |

- 💡 **Trick:** "**Labels in, prediction out. No labels, groups out. A number afterwards, behaviour out.**" Ask of any algorithm only this: *where does the feedback come from?*
- ⚠ **Trap:** ML is a **subset** of AI; an expert system that never learns is still AI. k-means stays unsupervised even if you afterwards name the clusters.
- ✍ **Worked example:** (a) predict a house price → regression, supervised; (b) label an e-mail spam / not spam → classification, supervised; (c) split a million customers into segments → clustering, unsupervised; (d) cut 900 columns to 20 → dimensionality reduction, unsupervised; (e) a robot learning to walk from a per-step reward → reinforcement.

## 6. Supervised learning and the learning process

- Supervised learning fits a mapping **f : X → y** from labelled examples (X, y). **Classification** predicts a **discrete** label; **regression** predicts a **continuous** number.

| Aspect | Classification | Regression |
|---|---|---|
| Output | one class from a finite set | a real number |
| Examples | spam filter, tumour type, fraud | house price, rainfall, demand |
| Error measured by | accuracy, precision, recall, F1 | MAE, MSE, RMSE, R² |
| Typical loss | cross-entropy | squared error |
| Typical models | tree, k-NN, naive Bayes, SVM | linear regression, tree regression |
| Answers | "which one?" | "how much?" |

1. **Collect** labelled data — most of the work
2. **Preprocess** — missing values, duplicates
3. **Engineer features** — keep the signal
4. **Split** — shuffle, then **60 / 20 / 20**
5. **Choose a model** — start simple
6. **Train** — fit on training data only
7. **Evaluate** — k-fold CV beats one split
8. **Deploy and monitor** — data drifts

- 💡 **Trick:** "**Collect, clean, features, split, fit, evaluate, deploy.**" The two steps everyone forgets are the **split** and the **monitor**.
- ⚠ **Trap:** the **test set is never tuned on**. Scaling **after** the split leaks test information. More trees is not automatically better: depth past the signal is overfitting.
- ✍ **Worked example:** 1 000 labelled e-mails, 12 features. Split 600 / 200 / 200. A depth-3 tree: **96 % train, 84 % validation**. A depth-12 tree: **100 % train, 79 % validation** — memorised noise, so keep depth 3. Open the test set **once**: 85 %. Quote 85 %, never 96 %.

## 7. Split, overfitting and the bias–variance tradeoff

| Set | Share | Used for | Never used for |
|---|---|---|---|
| Training | 60 % | fitting the parameters | scoring the model |
| Validation | 20 % | choosing model, hyper-parameters | fitting parameters |
| Test | 20 % | the one final report | any choice at all |

| Model complexity | Train error | Validation error | Verdict |
|---|---|---|---|
| 1 feature, linear | 14 % | 15 % | underfitting — high bias |
| depth-3 tree | 4 % | 6 % | just right — best choice |
| depth-20 tree + noise | 0.5 % | 22 % | overfitting — high variance |

- **Overfitting:** the model fits the training data so closely that it memorises its noise — **training error ≪ test error**, high variance, no generalisation. **Underfitting:** too simple to capture the structure — **both errors high**, high bias.
- Expected test error = **bias² + variance + irreducible noise**; complexity trades the first two against each other.
- 💡 **Trick:** "**Train low, test high → overfitting. Both high → underfitting.**"
- ⚠ **Trap:** **99 % training accuracy is not success** — a card that memorises the answers also gets 100 % on them. More data reduces **variance** only.
- ✍ **Worked example:** model A: bias² = 0.09, variance = 0.02, noise = 0.01 → total **0.12**. Model B: bias² = 0.01, variance = 0.16, noise = 0.01 → total **0.18**. A wins: B memorised noise.
- **How overfitting is reduced:** more and better data · regularisation (L1 / L2) · k-fold cross-validation · a simpler model · pruning a decision tree · early stopping · dropout · feature selection.

## 8. Evaluating a model: the confusion matrix

For a binary task (worked numbers: TP = 45, TN = 140, FN = 5, FP = 10, total 200):

| | Predicted positive | Predicted negative | |
|---|---|---|---|
| actually positive | TP = **45** — flagged, truly bad | FN = **5** — missed, truly bad | 50 |
| actually negative | FP = **10** — wrongly accused | TN = **140** — cleared, truly good | 150 |
| | | | 185 correct, 15 wrong |

- Accuracy = (TP + TN) / total · Precision = TP / (TP + FP) · Recall (sensitivity) = TP / (TP + FN) · Specificity = TN / (TN + FP) · F1 = 2 · P · R / (P + R)
- For regression: MAE = Σ|y − ŷ| / n · RMSE = √(Σ(y − ŷ)²/n) · R² = 1 − Σ(y − ŷ)² / Σ(y − ȳ)² (1 for a perfect fit, ≤ 0 for a model worse than predicting the mean)
- ✍ **Worked example:** accuracy = 185/200 = **92.5 %** · precision = 45/55 = **81.8 %** · recall = 45/50 = **90 %** · specificity = 140/150 = **93.3 %** · F1 = 2(0.818)(0.900)/(1.718) = **85.7 %**. The filter misses **5 real frauds** and harrasses **10 innocent customers**; raising the threshold raises recall and lowers precision.
- 💡 **Trick:** "**Precision is how many of the things I accused were guilty; recall is how many of the guilty things I caught.**"
- ⚠ **Trap:** accuracy is the wrong single number on an **imbalanced** set — if 99 % of cases are negative, "always predict negative" scores 99 % and is useless.
- 💻 **IT link:** these four numbers are what the ROC curve is built from (recall against 1 − specificity, swept over the decision threshold).

## 9. Three classic learners, by hand

| Property | Decision tree | k-NN | Naive Bayes |
|---|---|---|---|
| Learns by | splits on impurity | storing the data | counting values |
| Predict cost | a few comparisons | distance to all points | one multiply / feature |
| Key knob | depth, leaf size | k, distance metric | Laplace smoothing |
| Weakness | overfits noisy tables | needs scaling, high dim. | independence assumed |
| Readiness | a flow of questions | none (lazy learner) | scale-independent |

- **Impurity.** Gini = 1 − Σ pᵢ² · Entropy H = − Σ pᵢ log₂ pᵢ. Split on the largest **information gain** = H(parent) − Σ (nᵢ/n) H(childᵢ).
- **Naive Bayes.** P(c|x) ∝ P(c) · ∏ᵢ P(xᵢ | c). Conditional independence *is* the assumption; **Laplace smoothing** stops an unseen value zeroing the product.
- 💡 **Trick:** tree = **ask questions**, k-NN = **ask the neighbours**, naive Bayes = **multiply the odds**.
- ⚠ **Trap:** k-NN is a **supervised** learner, not unsupervised. Entropy is **not** a probability.
- ✍ **Worked example 1 (tree).** 10 applicants, 6 approved, 4 rejected. Root Gini = 1 − (0.6² + 0.4²) = **0.48**. Split on income → the 5 high-income are all approved (Gini 0), the 5 low-income are 1 approved and 4 rejected (Gini 0.32); weighted Gini = **0.16**. Split those five on credit score ≥ 700 → Gini 0. 10/10 on the training table, yet a high-income applicant with a terrible score would still be approved: overfitting.
- ✍ **Worked example 2 (k-NN).** The three nearest labelled neighbours of a new applicant in (income, score) space are *approved, approved, rejected*; with **k = 3** the majority vote is **approve**. k = 1 copies the nearest point and inherits its noise; k = 200 predicts the file's majority class and nothing useful. k-NN is a **lazy learner**.
- ✍ **Worked example 3 (naive Bayes).** 14 days of tennis weather: P(yes) = 9/14, P(no) = 5/14. Query sunny, hot, high humidity, strong wind → yes: 0.643 × 0.222 × 0.222 × 0.333 × 0.333 = **0.0035**; no: 0.357 × 0.600 × 0.600 × 0.800 × 0.625 = **0.0643** ⟹ **do not play**, roughly 18 : 1.

---

## Practice MCQs

1. Which part of an expert system applies the rules to the known facts? (a) knowledge base (b) inference engine (c) explanation facility (d) user interface
2. MYCIN reasoned by: (a) forward (b) k-means (c) backward (d) reward learning
3. DENDRAL was built to infer from a mass spectrum: (a) a molecular structure (b) a disease (c) a system configuration (d) a meaning
4. Forward chaining begins from the: (a) goal hypothesis (b) reward signal (c) training set (d) known facts
5. Supervised learning requires: (a) unlabelled data (b) labelled input–output pairs (c) only a reward per action (d) hand-written IF–THEN rules
6. 99 % on training data but 60 % on unseen test data means: (a) overfitting (b) underfitting (c) high bias, low variance (d) the global optimum was reached
7. A k-NN classifier with k = 1 predicts: (a) the class of the nearest neighbour (b) the average of every label (c) the majority class of the file (d) a class chosen at random
8. Naive Bayes assumes the features are, given the class: (a) perfectly separable (b) drawn from the test distribution (c) free of missing values (d) independent of one another
9. Recall (sensitivity) equals: (a) TP / (TP + FP) (b) TN / (TN + FN) (c) TP / (TP + FN) (d) (TP + TN) / total
10. The test set of a 60/20/20 split is used to: (a) fit the parameters (b) tune the hyper-parameters (c) report the result once, after training (d) select the features

**Answer key:** 1-b · 2-c · 3-a · 4-d · 5-b · 6-a · 7-a · 8-d · 9-c · 10-c

## Written question (10 marks)

Explain the architecture of an expert system with a labelled diagram. Explain forward and backward chaining with examples. What is overfitting, how does the bias–variance tradeoff explain it, and how is it reduced?

**Model answer:**

1. **Architecture (3).** **Knowledge base** = the domain's facts, rules, heuristics. **Inference engine** = matches rules against working memory, fires them, returns the conclusions. **User interface** = asks the questions. **Explanation facility** = prints why. Cycle: **match → fire → update → test**.
2. **Forward chaining (2).** Data-driven, bottom-up: start from the facts, fire every rule whose antecedent matches, add each conclusion, repeat until no rule fires. Breadth-first; monitoring and prediction; XCON.
3. **Backward chaining (2).** Goal-driven, top-down: start from a hypothesis, find the rule concluding it, recurse on its conditions, ask the user for what is missing. Depth-first; diagnosis; MYCIN.
4. **Overfitting and bias–variance (3).** The model fits the training data so closely that it memorises noise, so **training error ≪ test error** — high variance. Expected test error = **bias² + variance + irreducible noise**. Remedies: more data, regularisation, k-fold CV, a simpler model, pruning, early stopping, dropout.

## Night-before one-liners

Expert system = KB + IE + UI + EF · firing a rule = copying its THEN into working memory · the cycle is match → fire → update → test · forward starts from the facts, backward from the goal · DENDRAL = chemistry (1965–1972), MYCIN = medicine (≈ 600 rules, ≈ 65 % correct), EMYCIN 1977, XCON from 1980 at DEC · ML ⊂ AI · Samuel 1959, Mitchell E-T-P · supervised / unsupervised / reinforcement · split 60 / 20 / 20, k-fold CV with k = 5 or 10 · 99 % train + 60 % test = overfitting (high variance); both high = underfitting (high bias) · error = bias² + variance + noise · accuracy, precision, recall, specificity, F1 · Gini = 1 − Σpᵢ², H = −Σpᵢ log₂ pᵢ · k-NN is supervised; naive Bayes assumes feature independence.