# Practical ML Applications & Regression: Revision Notes (Govt IT Exam)

> Plain-text companion to `notes/src/19-artificial-intelligence/ai-ml-applications-regression.en.html` (handwritten-style PDF: `notes/pdf/19-artificial-intelligence/ai-ml-applications-regression.en.pdf`).
> Audience: Bangladesh govt IT recruitment exams (BPSC Assistant Programmer, Bangladesh Bank Assistant Programmer/AME, Bankers' Selection Committee Officer (IT)). MCQ + written.

**Syllabus coverage (Artificial Intelligence):** introduction to old and new AI techniques; knowledge representation; propositional and first-order logic; search techniques in AI; probabilistic reasoning; natural language processing; introduction to expert system; introduction to machine learning; learning algorithms — supervised and clustering (unsupervised); **practical application of machine learning**; **regression**. This notebook covers exactly the last two lines; the three learning paradigms and overfitting in general belong to the ML-fundamentals lesson, Bayes and NLP theory to the probabilistic-reasoning lesson.

**High-yield:** regression predicts a continuous number, classification a label · ŷ = β₀ + β₁x, written y = mx + c (m slope, c intercept) · OLS minimises Σ(yᵢ − ŷᵢ)² · MAE = mean|y − ŷ|, MSE = mean(y − ŷ)², RMSE = √MSE · R² = 1 − SSres/SStot, and R² = r² for a simple line · MAE ≤ RMSE and MSE ≥ MAE² always · overfitting = train ≫ test = high variance, cured with L2 (ridge), L1 (lasso), more data · Pearson r ∈ [−1, 1] is not causation.

---

## 1. ML in practice: pipeline and task

- A machine-learning system is a **function fitted to data**, not a bundle of hand-written rules. Given input features **X**, produce an output **y** — and the kind of output decides the method.

| Task | Output | Typical method | One-line example |
|---|---|---|---|
| Regression | real number ŷ | linear / polynomial regression, SVR, GBM | tomorrow's sales |
| Classification | label + probability | logistic regression, decision tree, SVM, CNN | spam or not spam |
| Clustering | a group id | k-means, hierarchical, DBSCAN | customer segments |
| Reinforcement | a policy | Q-learning, SARSA, DQN | a robot learning to walk |

- 💡 **Trick:** ask one question of the stem — *"is the answer a ruler or a yes/no?"* Ruler → regression. Yes/no → classification. Neither → grouping (unsupervised), or rewards after acting (RL).
- ⚠️ **Trap:** "ML predicts the future" is **wrong**; ML fits a function to **past data** and extrapolates. The test set must stay **unseen** — scoring on the training set measures memorisation.
- ✍ Label the task: (i) sale price of a flat → regression; (ii) is a transaction fraudulent → classification; (iii) group ATMs by usage with no labels → clustering; (iv) an agent trades and is paid or fined → reinforcement learning.
- ✍ Same data, two models: a bank wants the **probability of default** (logistic regression → a number in 0…1) and, once the loan is approved, the **expected loss in taka** (linear regression).
- Deployment is the hard part: offline 0.92 can still fail once the input distribution moves — that is **model drift**. A **feature** is one input column: floor area, age, RMS, a word of the text.

## 2. Applications I: healthcare, finance, trade

**Practical application of machine learning** means putting a fitted model behind a real decision: a diagnosis, a loan, a shelf, a machine part. Every row is a **prediction**; the exam wants the **task** and the **model family**.

| Application | What the model does | Task |
|---|---|---|
| Health · medical diagnosis | X-ray or MRI → tumour marked (CNN) | classification |
| Health · drug discovery | a compound's activity, its toxicity | regression |
| Health · patient monitoring | ICU sensors → deterioration | regression |
| Health · readmission risk | back again within 30 days? | classification |
| Finance · credit scoring | probability of default | classification |
| Finance · fraud detection | the fake 0.01 % of payments | mostly unsupervised |
| Finance · algorithmic trading | the next price move | regression |
| Finance · cash demand | what an ATM needs next week | regression |
| Trade · recommendation | "bought X also bought Y" | ranking |
| Trade · segmentation | group buyers with k-means | unsupervised |
| Trade · demand forecasting | units to stock next month | regression |

- 💡 **Trick:** read the **output word** in the stem: price, demand, temperature, amount, risk score → **regression**; spam, fraud, disease, default, defect → **classification**; segment, group, cluster → **unsupervised**. "Rank" or "recommend" means the model sorts rather than predicts.
- ⚠️ **Trap:** credit scoring is **classification**, not regression, even though banks quote a "score". A recommender outputs a **ranking**, not a price. Fraud data are tiny-class, so anomaly detection trained mostly on normal traffic is the useful model and accuracy is a useless score.
- ✍ Metric choice: 99 900 normal and 100 fraudulent payments. A model answering "normal" for everything scores **99.9 % accuracy and finds zero fraud**; the honest scores are **recall on the fraud class** and the false positives an analyst must clear.
- The **expert systems** lesson covers the older rule-based alternative to every row; the **ML fundamentals** lesson defines the three paradigms.

## 3. Applications II: text to security

Same pipeline, non-tabular input. Text becomes tokens and embeddings, an image becomes pixels, a machine becomes a **sensor time series**, a road becomes a stream of detector counts.

| Application | Input → output | Task |
|---|---|---|
| NLP · sentiment analysis | review text → positive / negative | classification |
| NLP · machine translation | sentence A → sentence B | conditional mapping |
| NLP · spam & phishing filter | email → keep or quarantine | classification |
| Vision · self-driving perception | frames → objects, lanes, distance | detection + regression |
| Vision · industrial quality control | line-scan image → pass / reject | classification |
| Industry · predictive maintenance | vibration + temperature → days to failure | **regression** |
| Industry · process control | sensor set → best set-point | regression |
| Transport · traffic forecasting | loop detectors → speed, flow | regression |
| Transport · ride-hailing demand | hour + weather → trips | regression |
| Agriculture · crop yield & disease | soil, rainfall, NDVI → tonnes/ha | regression + classification |
| Security · intrusion detection | network flows → normal or attack | mostly unsupervised |
| Security · malware classification | binary / behaviour → malware family | classification |

- 💡 **Trick:** "Image or sensor in, a number out for predictive maintenance and traffic." Whenever the stem says *how much / how many / how long / when will*, you are in regression — even if the input was a photograph.
- ⚠️ **Trap:** predictive maintenance is **regression** (how many days of life are left) while **fault detection** is classification (is it faulty now?). In "intrusion detection", **unsupervised** usually means trained on normal traffic only, so a novel attack is still caught.
- ✍ Maintenance end to end: a bearing's vibration RMS grows almost linearly from 0.4 to 1.8 mm/s over the last 400 hours before failure. Fit **remaining life = 400 − 220 × RMS**; at RMS = 1.2 mm/s the model warns **136 hours** ahead, at 1.6 mm/s **48 hours**.

## 4. Regression and the model y = mx + c

**Regression** is **supervised learning for a continuous numerical output**. With one feature it is the **simple linear regression** line **ŷ = m x + c**: m is the **slope** (change in ŷ per unit x), c the **intercept** (ŷ when x = 0). With p features it becomes **multiple linear regression**, ŷ = β₀ + β₁x₁ + … + βₚxₚ + ε.

| Point of comparison | Regression | Classification |
|---|---|---|
| Output | any real number, unbounded | one of a fixed label set |
| Typical loss | squared error (MSE), absolute error (MAE) | cross-entropy, 0–1 loss |
| Typical scores | MAE, MSE, RMSE, R² | accuracy, precision, recall, F1 |
| Baseline to beat | always predict the mean of y | always predict the majority class |
| Symbolic form | ŷ = mx + c | P(Y = 1 \| X) = 1/(1 + e^−z) |
| Examples | house price, temperature | spam or not spam |

- ✍ Why the line always passes through (x̄, ȳ): least squares picks m, c to minimise the vertical errors; both derivatives zero give Σŷ = Σy, hence c = ȳ − m x̄.
- **m = Σ(xᵢ − x̄)(yᵢ − ȳ) / Σ(xᵢ − x̄)²** and **c = ȳ − m x̄**; also m = r · σ_y/σ_x, so the slope takes the sign of the correlation r.
- 💡 **Trick:** "m moves, c anchors." m answers *how much does ŷ change when x rises by 1?*; c answers *what is ŷ at x = 0?* The fitted line always threads the mean point (x̄, ȳ).
- ⚠️ **Trap:** the intercept is **ŷ at x = 0**, not the mean of y; **logistic regression is classification** despite the name; a best-fit line need not pass through the origin; regression needs no balanced class structure.
- ✍ Read the model: ŷ = 18.5 + 3.2 × (area in m²). For 90 m², ŷ = **306.5** lakh. Each extra m² adds 3.2 lakh (m); a zero-area plot would be valued at 18.5 lakh (c) — really the price of the land.

## 5. Least squares (OLS)

**Ordinary least squares** chooses the coefficients that minimise the **sum of squared residuals**: minimise SSE = Σ(yᵢ − ŷᵢ)² over every training point. Counting wrong answers belongs to classification; OLS never counts — it **squares and adds**.

✍ Derivation of the normal equations:

1. Objective: SSE(a, b) = Σ(yᵢ − a − b xᵢ)²
2. Partials zero: ∂SSE/∂a = −2Σ(yᵢ − a − b xᵢ) = 0 and ∂SSE/∂b = −2Σxᵢ(yᵢ − a − b xᵢ) = 0
3. Two **normal equations**: na + b Σx = Σy and a Σx + b Σx² = Σxy
4. Solving: **b = [nΣxy − (Σx)(Σy)] / [nΣx² − (Σx)²]** and **a = ȳ − b x̄**

Worked fit for (1, 2), (2, 4), (3, 5): n = 3, Σx = 6, Σy = 11, Σxy = 25, Σx² = 14

| x | 1 | 2 | 3 | Σ |
|---|---|---|---|---|
| y | 2 | 4 | 5 | 11 |
| xy | 2 | 8 | 15 | 25 |
| x² | 1 | 4 | 9 | 14 |

b = [3(25) − 6(11)] / [3(14) − 6²] = (75 − 66) / (42 − 36) = 9/6 = **1.5**; a = 11/3 − 1.5(2) = **2/3 ≈ 0.67**; so **ŷ = 0.67 + 1.5x**.

| x | actual y | fitted ŷ | residual e | e² |
|---|---|---|---|---|
| 1 | 2.000 | 2.167 | −0.167 | 0.028 |
| 2 | 4.000 | 3.667 | +0.333 | 0.111 |
| 3 | 5.000 | 5.167 | −0.167 | 0.028 |
| Σ | 11.000 | 11.000 | 0 | SSE = **0.167** |

- 💡 **Trick:** "**O**ne line, **L**east **S**quares, so the **S**um is what shrinks." On a correct OLS fit the residuals **sum to zero** and the fitted values **sum to the actuals**.
- ⚠️ **Trap:** OLS is *ordinary* because it weights every point equally — **weighted least squares** is the variant that does not. Squaring lets one huge residual dominate, so with outliers use MAE-fitting, Huber loss or quantile regression.
- IT link: `b = (n*Sxy - Sx*Sy) / (n*Sxx - Sx^2);  a = ybar - b*xbar`

## 6. MAE, MSE, RMSE and R²

Every metric is built from the residual **eᵢ = yᵢ − ŷᵢ**. MAE and MSE average the error in two different ways, RMSE is MSE brought back into the units of y, and **R² compares the model against the "always predict the mean" baseline**.

| Metric | Formula | Property and when to use it |
|---|---|---|
| **MAE** mean absolute error | (1/n) Σ\|yᵢ − ŷᵢ\| | in the units of y; **robust** — outliers barely matter |
| **MSE** mean squared error | (1/n) Σ(yᵢ − ŷᵢ)² | units are y²; **punishes large errors much harder**; trains the model |
| **RMSE** root mean squared error | √MSE | back in the units of y; "off by X units on average" |
| **R²** coefficient of determination | 1 − SS_res/SS_tot | fraction of variance explained; **can be negative**; R² = r² for a simple line |

- ✍ The OLS fit above: MAE = 0.667/3 = **0.222** · MSE = 0.167/3 = **0.0556** · RMSE = √0.0556 = **0.236** in the units of y. SS_res = 0.167, SS_tot = 2.778 + 0.111 + 1.778 = 4.667, so R² = 1 − 0.167/4.667 = **0.964**.
- **MAE ≤ RMSE** always · **MSE ≥ MAE²** always, with equality only when every residual has the same size · SS_tot = SS_reg + SS_res · R² = SS_reg/SS_tot · adjusted R² = 1 − (1 − R²)(n − 1)/(n − p − 1).
- ✍ One outlier flips MSE: four residuals 10, 10, 10, 10 give MAE = 10, MSE = 100. Change the last to 40 → MAE = 17.5, MSE = 475, RMSE = 21.8: **MAE rose 75 %, MSE rose 375 %**.
- 💡 **Trick:** "square, average, root." R²: **1** = perfect, **0** = no better than the mean, **negative** = worse than the mean.
- ⚠️ **Trap:** R² is not a percentage and can be negative; MSE is in y², so only RMSE is readable; MAE is not "more accurate", only differently behaved.

## 7. Overfitting, bias–variance, L1/L2

**Overfitting** is fitting the training data so closely — noise included — that the model fails on unseen data. The symptom is the **train–test gap**: 99 % on training, 60 % on test, formally **high variance**. The opposite failure, poor scores on *both*, is **underfitting = high bias**.

| Symptom | Train | Test | Diagnosis |
|---|---|---|---|
| memorising noise | 99% | 60% | **overfitting, high variance** |
| model too simple | 58% | 55% | underfitting, high bias |
| healthy fit | 88% | 86% | generalising ✓ |

| Method | Penalty added to the loss | Effect on the coefficients |
|---|---|---|
| **L2** ridge | λ Σ β² | shrinks every coefficient, **none exactly 0** |
| **L1** lasso | λ Σ \|β\| | sets some coefficients **exactly 0 → feature selection** |
| **Elastic Net** | λ₁Σ\|β\| + λ₂Σβ² | L1's sparsity with L2's stability |

- Objective: minimise **Σ(yᵢ − β₀ − Σβⱼxⱼ)² + λ Σβⱼ²** (L2) or **+ λ Σ\|βⱼ\|** (L1). A bigger λ means heavier shrinkage, more bias and less variance; the intercept β₀ is not penalised.
- 💡 **Trick:** "lasso zeroes, ridge shrinks." L1's absolute-value penalty is kinked at zero, so a coefficient that is not earning its place is pushed all the way to 0 and its feature is dropped.
- ⚠️ **Trap:** overfitting is **high variance**, underfitting is **high bias**; a larger λ = more regularisation; regularisation adds no information; only **L1** selects features.
- ✍ Reading the gap: train 99 %, test 60 % ⟹ a 39-point gap ⟹ overfitting. Fix in order of cost: more data, L2 / L1, cross-validation to choose λ, a simpler model.
- Only a held-out test set — or k-fold cross-validation — exposes the gap; a common split is 60 / 20 / 20.

## 8. Polynomial regression and correlation vs causation

**Polynomial regression** keeps the linear least-squares machinery but adds powers of the feature: **ŷ = β₀ + β₁x + β₂x² + … + βₙxⁿ**. **Correlation** is the standardised strength of a *linear* association, Pearson's r = cov(x, y)/(σ_x σ_y), and it always lies in **[−1, +1]**.

| Model | Form | Shape and main risk |
|---|---|---|
| Linear | ŷ = mx + c | one straight line; cannot bend, so it underfits curved data |
| Polynomial, degree n | ŷ = β₀ + β₁x + … + βₙxⁿ | at most n − 1 turning points; **overfits** and oscillates between points |
| Logistic | 1/(1 + e^−z) | S-shaped probability in 0…1; classification only, boundary linear in x |

- ✍ A line under-fits, a curve nails it: data (0, 1), (1, 3), (2, 7), (3, 13). Second differences 2, 2 — constant, so the data are exactly quadratic: **ŷ = 1 + x + x²**, SSE = **0**. The **linear** fit gives b = 20/5 = 4, a = 0, so ŷ = 4x with residuals **+1, −1, −1, +1**: MAE = 1, MSE = 1, R² = 1 − 4/84 = 0.952.
- 💡 **Trick:** a linear fit that is wrong but not random leaves a residual pattern: **+ − − +** is a curve, random signs is just noise.
- **Correlation is not causation:** r = 0.98 between ice-cream sales and drownings, and neither causes the other — both are driven by a **confounding variable** (hot weather). r says nothing about direction or non-linearity, and can vanish per individual (**Simpson's paradox**).
- ⚠️ **Trap:** r = 0.9 does not prove causation; r = 0 does not prove independence (it rules out only a linear relation); for a simple line R² = r² exactly; a degree-n polynomial bends at most n − 1 times.
- ✍ Two coefficients, one data set: r = 20/√(5 × 84) = **0.976** and the linear R² = r² = 0.952. Add x² and R² becomes 1.000 while r is unchanged.

---

## Practice MCQs

1. Regression predicts: (a) a cluster id (b) a real number (c) a yes/no label (d) a best move
2. OLS minimises: (a) wrong answers (b) Σ(y − ŷ)² (c) the sum of x (d) correlation r
3. Least upset by one outlier: (a) MAE (b) MSE (c) RMSE (d) none of them
4. For a simple line, R² is: (a) the slope (b) SSres/SStot (c) the mean ȳ (d) r squared
5. L1 (lasso) can: (a) shrink equally (b) ignore labels (c) zero some β (d) add no penalty
6. Train 99 %, test 60 %: (a) overfitting (b) underfitting (c) the optimum (d) rate too small
7. True of correlation: (a) r proves cause (b) linear only (c) needs r = 1 (d) p-value proves
8. MAE = 4 ⟹ MSE is: (a) ≤ 4 (b) = 4 (c) < 16 (d) ≥ 16
9. Logistic regression predicts: (a) a sigmoid label (b) a real price (c) clusters (d) fewer features
10. A polynomial adds: (a) no extra term (b) no overfit risk (c) x², x³ … terms (d) images only

**Answer key:** 1-b · 2-b · 3-a · 4-d · 5-c · 6-a · 7-b · 8-d · 9-a · 10-c

## Written question (10 marks)

Fit an ordinary least-squares line to (1, 2), (2, 4), (3, 5). Give the slope, the intercept, the fitted values, MAE, MSE, RMSE and R², and comment on the fit.

**Model answer:**
1. **Set-up (2 marks)** — n = 3; Σx = 6, Σy = 11, Σxy = 25, Σx² = 14; minimise SSE = Σ(yᵢ − a − b xᵢ)².
2. **Coefficients (3 marks)** — b = [nΣxy − (Σx)(Σy)]/[nΣx² − (Σx)²] = (75 − 66)/(42 − 36) = **1.5**; a = ȳ − b x̄ = 11/3 − 3 = **2/3 ≈ 0.67**; so **ŷ = 0.67 + 1.5x**.
3. **Fitted values (2 marks)** — ŷ = 2.167, 3.667, 5.167; residuals e = −0.167, +0.333, −0.167. Check: Σe = 0 and Σŷ = Σy, since the line passes through (x̄, ȳ).
4. **Metrics (2 marks)** — MAE = 0.667/3 = **0.222**; MSE = 0.167/3 = **0.0556**; RMSE = √0.0556 = **0.236** in the units of y.
5. **R² and comment (1 mark)** — SS_res = 0.167, SS_tot = 4.667, R² = 1 − 0.167/4.667 = **0.964**: 96.4 % of the variance in y is explained and there is no train–test gap at this size.

## Night-before one-liners

Regression predicts a continuous number, classification a label · logistic regression is classification · the intercept is ŷ at x = 0, not the mean of y · OLS minimises Σ(y − ŷ)², never a count · RMSE = √MSE, in the units of y · MAE is robust, MSE punishes big errors · MSE ≥ MAE² and MAE ≤ RMSE always · R² can be negative · R² = r² for a simple line · overfitting = high variance, train ≫ test · lasso zeroes features, ridge only shrinks · r ∈ [−1, 1]; correlation ≠ causation · a degree-n polynomial bends at most n − 1 times · fraud and intrusion data are tiny-class, so accuracy means nothing · the test set must be unseen.