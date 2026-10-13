# Introduction to AI: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-introduction.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-introduction.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** the syllabus opens with "introduction to **old and new AI techniques**", before knowledge representation, logic, search, probabilistic reasoning and NLP. This note covers exactly that opening line: what AI is, how the field arose, the two winters, the four families of approach, and why the modern techniques displaced the old ones.

**High-yield:** AI ⊃ ML ⊃ DL · the test is behavioural, never "does it understand?" · 1950 Turing test · 1955 McCarthy coins the term · 1956 Dartmouth, the field's birth · winters 1974–80 and 1987–93 · four families: symbolic, connectionist, evolutionary, probabilistic · expert systems never learn but always explain · single-layer perceptron cannot learn XOR · weak AI = one task and exists; strong AI = any task and does not · rational agent = best action *given what it knows* · P-E-A-S · supervised needs labels, RL needs reward · stemming is mechanical, lemmatisation is lexical.

---

## 1. What is AI? Definition and the Turing Test

- **Artificial Intelligence** is the branch of computer science that builds systems able to perform tasks which normally require human intelligence — reasoning, learning, perception, planning. The test is **behavioural**: *can the system do the task?*, never "does it understand?". The nesting used in almost every paper is **AI ⊃ machine learning ⊃ deep learning**.

**The Turing Test, 1950.** Turing set the *imitation game* in *Computing Machinery and Intelligence*: an interrogator holds a written conversation with a hidden human and a hidden machine, one reply stream at a time. The machine **passes if the interrogator cannot reliably tell which one is the machine**. Conditions: **natural language**, **no prior information**, a **third human** as a safety valve.

| Capability | What it must do | Example | Capability | What it must do | Example |
|---|---|---|---|---|---|
| Reasoning | solve new problems | chess engine, A* | Language | read and write text | translator |
| Knowledge | store facts | semantic network | Perception | read the sensors | speech-to-text |
| Learning | improve from data | classifier | Planning | pick actions in order | route planner |

- 💡 **Trick:** "Turing tested the **output**, not the brain." Nothing in the test asks the machine to report what it is doing inside — only whether a human can sort the replies into "person" and "machine".
- ⚠ **Trap:** passing proves **indistinguishability of behaviour**, never consciousness. **ELIZA** (Weizenbaum, **1966**) fooled many users while understanding nothing; **Chinese room**: Searle, **1980**.
- ✍ Worked example — is each system AI? A calculator evaluating 2 + 2 is **not** AI: no inference, no adaptation. A rule-based system returning an infection and a drug from symptoms **is** AI — it reasons over stored knowledge to produce something the user did not supply. A CNN labelling chest X-rays is AI and specifically **machine learning**.

## 2. How AI began: history and the two winters

- An **AI winter** is a period in which funding, publications and interest collapse because promised results failed to arrive. AI has had **two**: roughly **1974–1980** and **1987–1993**. The pattern repeats — over-promise, under-deliver, funding stops.

| Year | Event | Why it matters | Year | Event | Why it matters |
|---|---|---|---|---|---|
| 1943 | McCulloch & Pitts neuron | first mathematical neuron | 1969 | Minsky & Papert, *Perceptrons* | one layer's limits |
| 1950 | Turing test, *Mind* | intelligence testable | 1974 | Lighthill report; DARPA cuts | winter 1 begins |
| 1951 | Minsky & Edmonds, SNARC | first machine tuning weights | 1980s | expert-system boom; XCON | commercial peak |
| **1955** | McCarthy uses the term "AI" | name precedes field | 1987 | Lisp machines unsellable | winter 2 begins |
| **1956** | Dartmouth workshop | birth of the discipline | 1997 | Deep Blue beats Kasparov | search beats a champion |
| 1958 | Rosenblatt's perceptron | first trainable network | 2012 | AlexNet wins ImageNet | deep learning mainstream |

| Winter | Immediate cause | What had gone wrong |
|---|---|---|
| 1974–80 | Lighthill report, UK cuts | translation over-promised; systems did not scale |
| 1987–93 | Lisp machines unsellable | expert systems too narrow; Fifth Generation fell short |

- 💡 **Trick:** "**Test, name, birth**": **1950** test → **1955** name → **1956** birth. A winter starts when a **report** appears — Lighthill 1974, ALPAC 1983.
- ⚠ **Trap:** three dates get confused — **1950** is the Turing test, **1955** is when McCarthy coined the *term*, **1956** is the workshop at which the *field* was born.
- ✍ Which claim explains which winter? (a) "The Lighthill report said AI had delivered none of its promises, so funding stopped" → **winter 1**, 1974–1980. (b) "Companies bought Lisp machines whose expert systems were too slow and too narrow" → **winter 2**, 1987–1993. (c) "A single-layer perceptron cannot learn XOR" → not a winter but a **technical limit**, exposed in 1969.

## 3. Old AI: symbolic / rule-based AI

- **Symbolic AI** — also classical, rule-based or knowledge-based AI — represents intelligence as **explicit symbols and rules** that a program manipulates. Knowledge is written down by people; inference is a formal procedure: deduction, search, or rule chaining.

| Family | Core idea | Representative system | Family | Core idea | Representative system |
|---|---|---|---|---|---|
| Expert systems | IF–THEN rules + inference engine | MYCIN, DENDRAL, XCON | Knowledge rep. | facts as graphs, frames, rules | semantic network, production rules |
| Search | explore a state space with a heuristic | BFS, DFS, A* (1968) | Planning | build an action sequence from a goal | STRIPS (1971) |
| Logic | deduction over predicates | propositional / first-order logic | Belief revision | revise beliefs when facts change | truth-maintenance systems |

Every expert system has the same parts: user + facts → knowledge base (IF–THEN rules) → inference engine (forward / backward) → explanation facility ("rule 37 fired") → diagnosis + therapy with a reason attached.

- 💡 **Trick:** "Symbols are written by **people**, so the bottleneck is human." No rule, no knowledge — and no way to discover a rule the expert never told you.
- ⚠ **Trap:** an expert system **never learns**: every rule was written in advance, so adding one can silently break another — the knowledge-acquisition problem. **Forward chaining** is data-driven (fire rules as facts arrive); **backward chaining** is goal-driven (ask what must be true to prove the goal). STRIPS is **planning**, not logic.
- ✍ MYCIN (Stanford, early 1970s) held a few hundred IF–THEN rules on bacterial infections and drug choice. **Forward:** the patient has a fever, so fire every rule whose IF matches. **Backward:** the goal is "recommend ampicillin"; ask which conditions must hold, then look for each one. Its advice was rated as acceptable as a specialist's, yet it was never used routinely: **maintaining the rule base cost more than the consultations saved**.
- **The one clear commercial success:** **XCON** (DEC, 1980) configured VAX systems from a customer order; reports put its savings at tens of millions of dollars a year. Narrow, repetitive, rule-shaped work is what symbolic AI is good at.

## 4. Connectionist AI: from the neuron to deep learning

- **Connectionist AI** — sub-symbolic, neural or machine-learning AI — builds intelligence out of many simple units wired in layers. Each unit computes a weighted sum of its inputs and passes it through an activation; the knowledge lives not in written rules but in the **weights**, which are fitted to data by an optimisation algorithm.

| Year | Milestone | What it added | Year | Milestone | What it added |
|---|---|---|---|---|---|
| 1943 | McCulloch–Pitts neuron | logic gates as a neuron, no learning | 1989 | LeNet / CNN | one filter shared across an image |
| 1958 | Rosenblatt's perceptron | first network trained from data | 1997 | LSTM | a cell that remembers across sequences |
| 1969 | Minsky & Papert | one layer cannot represent XOR | 2014 | GAN | two networks compete to generate |
| 1986 | backpropagation | train many layers, credit layer by layer | 2017 | Transformer | attention only; basis of language models |

Every edge in the network carries a weight w·x + b; training nudges the weights until the answer is right.

- 💡 **Trick:** "Symbolic AI is a **laws book**; connectionist AI is a **trained reflex**." Laws are written and argued with; reflexes are fitted and used without explanation.
- ⚠ **Trap:** a single-layer perceptron can learn **AND, OR, NOT** but **not XOR** — XOR is not linearly separable. That 1969 result was never a proof that networks cannot work. And **deep** = many hidden layers, not many neurons in one layer.
- ✍ A unit computes y = 1 if Σwᵢxᵢ ≥ θ. For **AND** take w = (1, 1), θ = 1.5 → only (1,1) passes; for **OR** take θ = 0.5. For **XOR** a single unit cannot do it, because one straight line cannot separate (0,1),(1,0) from (0,0),(1,1). With two layers it is trivial: hidden units computing OR and AND, then an output unit weighting them (1, 1) with threshold 1.
- **Which architecture for which data:** **CNN** for images · **RNN/LSTM** for sequences read in order · **Transformer** when long-range attention matters, which is what language models use · the price of all of them is **data and compute**, paid for in **interpretability**.

## 5. Evolutionary and probabilistic AI

- **Evolutionary AI** keeps a **population of candidate solutions** and breeds the fitter ones — selection, crossover, mutation — exactly as natural selection does. **Probabilistic AI** refuses to be certain: it keeps a **distribution over possibilities** and updates it with Bayes' rule as evidence arrives.

| Family | Where the knowledge sits | Representative methods | Fails when |
|---|---|---|---|
| Symbolic | in rules written by humans | expert systems, A*, resolution, STRIPS | the rules are missing or wrong |
| Connectionist | in weights fitted to data | perceptron, CNN, RNN, Transformer | data is thin, or an explanation is required |
| Evolutionary | in the fittest of a population | genetic algorithm, genetic programming, ant colony | evaluation is slow, or the space is huge |
| Probabilistic | in conditional probability tables | Bayesian network, HMM, Naive Bayes | the independence assumptions break |

A genetic algorithm: population → fitness test (score each one) → select + breed (crossover, mutate) → keep the best → loop until the score stops rising.

- 💡 **Trick:** "GA is **guided random**: probability does the mutating, fitness does the choosing." Bayes asks which explanation the **evidence** makes most likely, not which explanation is true.
- ⚠ **Trap:** a genetic algorithm is **not** random guessing: selection is directed and the best candidates are carried unchanged (elitism). In a Bayesian network arrows run from cause to effect and every node carries a conditional probability table; an HMM has hidden states plus emissions and powers speech recognition.
- ✍ **One generation:** population {(3, 7), (5, 2), (2, 4)} maximising xy. Fitness: 21, 10, 8. Keep (3,7), copy it twice, mutate the copies slightly → {(3,7), (3,6), (4,8)}. The best product rises from **21 to 32** in one generation.
- ✍ **One Bayes base rate:** a disease hits 1 % of people; a test finds it in 90 % of the sick and wrongly flags 10 % of the healthy. Of 10 000 people, 100 are sick and 90 test positive; of the 9 900 healthy, 990 test positive. So P(sick | positive) = 90/(90 + 990) = **1/12 ≈ 8.3 %** — the base rate dominates, which is why "the test is 90 % accurate" does not mean a positive result means 90 %.

## 6. Old vs new AI techniques, compared

- "Old AI" is the symbolic, rule-based work of the **1950s–1980s**; "new AI" is the statistical, data-driven work that took over from the **1990s onward**. The dividing line is not "old = wrong, new = right" — it is where the knowledge comes from: **a person wrote it** versus **data supplied it**.

| Feature | Old AI | New AI | Feature | Old AI | New AI |
|---|---|---|---|---|---|
| Approach | symbolic, rule-based | data-driven, statistical | Data needed | none, if rules complete | large, often labelled |
| Knowledge from | an expert writes rules | learned from data | Interpretability | **high** — rule shown | low — "black box" |
| Reasoning | deduction, search | generalisation | Scalability | poor — rules collide | good — data helps |
| Uncertainty | binary true / false | probabilities | Compute | small machines | GPUs / TPUs |
| Adaptability | low — means rewriting | high — retrain | Systems | MYCIN, STRIPS, A* | k-means, CNN, LLM |

- 💡 **Trick:** "Old AI is **brittle and honest**: it breaks on anything unanticipated but always shows its work. New AI is **flexible and opaque**: it handles anything in distribution but cannot say why."
- ⚠ **Trap:** "Symbolic AI is obsolete" is **false** — SAT and theorem provers, planners, compilers and test-case generators are symbolic systems working today. What changed is the **default** for perception and language, not the existence of reasoning. New AI is not "AI plus data": **knowledge representation** and **search** are still AI whether the symbols were typed by a person or extracted from data. Interpretability is a requirement, not a luxury — in medicine, credit and public administration a system that cannot justify a decision is not deployable at all.
- ✍ Choose the approach: admit patients whose lab values match **eleven published rules** → **symbolic expert system**: the rules exist and are auditable. Flag tumours in a new hospital's scans with **no labels yet** → **deep learning**: there is nothing to write rules from, and images are what CNNs handle. Choose routes for 500 vans from **last year's traffic data** → **learned prediction**: the answer is a number nobody can write a rule for.

## 7. Strong AI vs weak AI

- **Weak AI** (narrow AI, ANI) is built for **one specific task** and displays intelligence inside that task and nowhere else — a chess engine, a spam filter, a face unlock. **Strong AI** (general AI, AGI) would match **humans across every cognitive task**, learn any task from few examples, and form its own goals. Superintelligence (ASI) would exceed the best human performance on everything.

| Property | Weak AI (all that exists today) | Strong AI (the goal) |
|---|---|---|
| Scope | one task, narrow domain | any task a human can do |
| Transfer between tasks | nothing carries over | one skill supports the next |
| Training data | millions of examples for that task | a few examples, or none |
| Own goals | none — objectives sit in code | forms, revises, pursues its own |
| Consciousness | not required, not claimed | usually assumed, still undefined |
| Exists? | **yes — every AI product on sale** | no, never demonstrated |

- 💡 **Trick:** "Weak is **wide but shallow** across data; strong is **deep** across tasks." Today AI has breadth without understanding — a million narrow skills, no mind behind them.
- ⚠ **Trap:** winning at chess or Go is **not** strong AI: **Deep Blue** (1997) and **AlphaGo** (2016, 4–1 over Lee Sedol) beat world champions at *one* game and were helpless at everything else. The Chinese-room argument (Searle, **1980**) says running the right symbols is not understanding them.
- **Where the real debate sits:** not on whether machines can beat humans at games — that is settled. It sits on whether understanding can exist **without** consciousness, and on aligning an objective with human intent.
- ✍ Classify four systems: a **chess engine** → weak AI; a **hospital triage rule base** → weak AI (one narrow task, but it can state which rule fired); a **large language model that writes code and translates** → weak AI (many tasks, yet it needs a new fine-tune for a new domain); a **system that learns one task, carries the skill into a second and sets its own goals** → the **only** strong AI candidate, and none exists.

## 8. The agent view: rational agents and PEAS

- An **agent** is anything that **perceives its environment through sensors and acts on it through actuators**. An **agent function** maps the whole history of percepts to the next action. A **rational agent** takes the action best for its goals — best **given what it knows**, not best in reality. A goal-oriented system is specified with **PEAS**: Performance, Environment, Actuators, Sensors.

| Agent type | How it decides | Weakness | Agent type | How it decides | Weakness |
|---|---|---|---|---|---|
| Simple reflex | current percept → fixed rule | loops forever; no memory | Goal-based | searches for a sequence to a goal | only as good as the goal given |
| Model-based reflex | keeps an internal world model | the model can be stale | Utility-based | maximises a utility score | needs to compare outcomes |
| Learning agent | improves its own decision rule | can learn the wrong thing | Example: vacuum | suck if dirty, else move right | needs memory to stop looping |

| Agent | Environment | Actuators | Sensors |
|---|---|---|---|
| vacuum | two dirty rooms | move, suck | position, dirt |
| drone | airspace, partly observable | rotors, drop | GPS, IMU |
| spam filter | one mailbox | spam / inbox | headers, body |

The loop is always the same: **percept → action → percept**.

- ⚠ **Trap:** rational does **not** mean human-like, and an agent need not have a body — a spam filter is an agent. A simple reflex agent with no memory can never leave a loop, and a utility-based agent differs from a goal-based one by comparing **several goals at once**.
- ✍ **The vacuum agent.** *Simple reflex:* dirt here → suck, else move right. In a two-room world it walks back and forth *through the dirt it just cleaned* — an infinite loop, having no memory of where it has been. *Model-based reflex:* record which squares are clean — two extra states, no search, loop gone. *Goal-based:* plan the move sequence first. *Utility-based:* add cleaning time and battery to the score.
- **IT link:** a monitoring or autoscaling system gets the same four-part description in its design document: what good looks like, where it runs, what it can change, what it can read.

## 9. Current techniques: ML, deep learning, NLP

- "New AI" is not one technique but a **stack**. **Machine learning** is the base: systems that fit parameters to data instead of being handed rules. **Deep learning** is machine learning with many layers. **Probabilistic reasoning** handles uncertainty, **evolutionary computation** searches, and **NLP** is the application area that drove the last decade.

| Paradigm | Feedback | Standard algorithms | Typical task |
|---|---|---|---|
| Supervised | **labelled** output per input | linear & logistic regression, decision tree, SVM, k-NN | classification, regression |
| Unsupervised | none — structure discovered | k-means, hierarchical, DBSCAN, PCA, Apriori | clustering, association |
| Reinforcement | a scalar **reward** after acting | Q-learning, SARSA, policy gradient | games, control, scheduling |

| Layer | What it contributes |
|---|---|
| Deep learning | CNN for images, RNN/LSTM for sequences, **Transformer** for language models |
| Probabilistic | Bayes' rule, Bayesian networks, HMM, Gaussian models |
| Evolutionary | genetic algorithms, genetic programming, annealing, ant colony |
| NLP | tokenisation, stemming, lemmatisation, POS tagging, NER, translation |

- 💡 **Trick:** "A **teacher** gives answers (supervised) · **no teacher**, find groups (unsupervised) · a **critic** gives only a score (reinforcement)."
- ⚠ **Trap:** supervised learning **requires labelled outputs**; clustering without labels is unsupervised, and reward after an action is reinforcement. **Stemming** chops suffixes mechanically ("studies" → "studi"); **lemmatisation** uses the dictionary ("studies" → "study").
- ✍ Label each scenario: labelled e-mails marked spam / not spam → **supervised** classification. Grouping shopkeepers by basket similarity, no labels → **unsupervised** clustering. A rover rewarded for distance without falling → **reinforcement** learning. Finding "diaper ⇒ beer" rules from baskets → **unsupervised** association rules (Apriori). Estimating the chance a loan defaults → **supervised**; a 0–1 probability is **logistic** regression. Predicting house prices from size, location, age → **supervised** regression; least squares minimises the **sum of squared residuals**.

---

## Practice MCQs

1. The term "AI" was coined in connection with: (a) the 1943 neuron (b) Dartmouth, 1956 (c) the ARPANET launch (d) Deep Blue, 1997
2. The Turing Test checks whether: (a) all maths is solved (b) the program halts (c) a human cannot tell it apart (d) a race is won
3. Breeding a population by selection and mutation is: (a) symbolic reasoning (b) Bayesian inference (c) backpropagation (d) evolutionary search
4. Given a goal, a system seeks facts that prove it. That is: (a) backward chaining (b) forward chaining (c) model-based control (d) gradient descent
5. The first AI winter began about 1974 because of: (a) the GPU (b) a report, fund cuts (c) the Dartmouth meeting (d) Turing's death
6. Which part of an expert system explains a conclusion? (a) knowledge base (b) acquisition module (c) explanation facility (d) inference engine
7. Deep Blue beating Kasparov in 1997 is: (a) weak AI (b) strong AI (c) consciousness (d) first-order logic
8. AlphaGo (2016) combined deep learning with: (a) if–then rules (b) a knowledge base (c) Monte Carlo tree search (d) semantic networks
9. STRIPS is an example of: (a) knowledge representation (b) automated planning (c) computer vision (d) evolutionary search
10. A single-layer perceptron cannot learn: (a) AND (b) NOT (c) XOR (d) OR

**Answer key:** 1-b · 2-c · 3-d · 4-a · 5-b · 6-c · 7-a · 8-c · 9-b · 10-c

## Written question (10 marks)

Define AI. Explain Turing's test, name the four families of AI approach with one example each, and account for the two AI winters.

**Model answer:**
1. **Definition (2):** AI builds systems that perform tasks normally needing human intelligence — reasoning, learning, perception, planning.
2. **Turing test (2):** Turing, 1950. An interrogator holds a written conversation with a hidden human and a hidden machine; the machine passes if he cannot reliably tell which is which. Conditions: natural language, no prior information, a third human as safety valve.
3. **Four families (3):** symbolic — expert systems such as MYCIN, knowledge in written rules; connectionist — neural networks, knowledge in weights fitted to data; evolutionary — genetic algorithms, knowledge in the fittest of a population; probabilistic — Bayesian networks and HMM.
4. **The winters (3):** 1974–1980, after the Lighthill report and funding cuts; 1987–1993, when the expert-system boom collapsed with the Lisp machine market.

## Night-before one-liners

AI ⊃ ML ⊃ DL · Turing test asks whether replies can be told from a human's · McCarthy named AI, Dartmouth 1956 is its birth · two winters, both after over-promising · symbolic AI: rules written by people · connectionist AI: weights fitted to data · single-layer perceptron cannot learn XOR · four families: symbolic, connectionist, evolutionary, probabilistic · weak AI = one task, strong AI = any task and does not exist · an expert system never learns and can always explain · forward chaining is data-driven, backward is goal-driven · rational = best action for the goal given what it knows · symbolic AI is a laws book, connectionist AI a trained reflex · old AI is brittle but honest, new AI flexible but opaque · GA is guided random: probability mutates, fitness chooses · a teacher, no teacher, a critic · stemming is mechanical, lemmatisation is lexical · P-E-A-S.