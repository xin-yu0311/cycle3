# Project Cycle 3

## Group Information
- **Group Number:** [19]
- **Member Names:** [王心妤, 112310316 梁展育]

---

## Project Overview
This project is based on **YRBS_2007.csv** and focuses on:

- **two-sample inference**
- **comparison of two population proportions**
- **exploratory data analysis (EDA)**

The goal is to answer one statistical question comparing two groups using the YRBS 2007 dataset.

---

## Dataset Used
- **Dataset:** `YRBS_2007.csv`

---

## Selected Research Question
Is the proportion of students who felt sad or hopeless different between female and male students?

---

## Selected Variables

### Group Variable
- **Variable:** `WhatIsYourSex`
- **Meaning:** student sex
- **Groups Compared:** Female vs Male

### Response Variable
- **Variable:** `SadOrHopeless`
- **Recoded Variable:** `SadOrHopeless_binary`
- **Meaning of Success:** student reported feeling sad or hopeless

---

## Statistical Method
Because the response variable is binary, this project uses a **two-proportion z-test** and a **95% confidence interval for the difference in proportions**.

The difference is defined as:

```text
p_Female - p_Male
```

---

## Key Results
- Female sample size: 6940
- Male sample size: 6893
- Female sample proportion: 0.3718 (37.18%)
- Male sample proportion: 0.2273 (22.73%)
- Estimated difference: 0.1444 (14.44 percentage points)
- 95% confidence interval: [0.1294, 0.1595]
- Test statistic: z = 18.5374
- P-value: 1.032e-76
- Decision at alpha = 0.05: Reject H0

---

## Short Final Conclusion
At the 0.05 significance level, there is sufficient evidence that the proportion of students who reported feeling sad or hopeless differs between female and male students. Female students reported sad or hopeless feelings at a significantly higher proportion than male students in this dataset.

Because the data are observational, this result should be interpreted as an association, not a causal relationship.

---

## Project Structure

```text
project-cycle-3/
├── README.md
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
├── outputs/
│   ├── figures/
│   ├── tables/
│   └── summary/
├── report/
└── references/
```

---

## Project Repository
https://github.com/.....

## Presentation Video
https://.....
