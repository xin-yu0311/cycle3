# Variable Definitions

## Dataset
- **Dataset Name:** YRBS_2007.csv
- **Project Type:** Two-Sample Inference

---

# 1. Research Question

Is the proportion of students who felt sad or hopeless different between female and male students?

---

# 2. Group Variable

## Variable Name
`WhatIsYourSex`

## Variable Type
Categorical group variable

## Purpose in This Project
This variable defines the two independent groups being compared.

## Coding Used
- **1** = Female
- **2** = Male

## Final Group Names
- Female students
- Male students

---

# 3. Response Variable

## Variable Name
`SadOrHopeless`

## Variable Type
Binary categorical response variable

## Purpose in This Project
This variable is used to measure whether a student reported feeling sad or hopeless.

## Original Coding Used
- **1** = Yes
- **2** = No

## Recoded Variable
`SadOrHopeless_binary`

## Binary Coding Meaning
- **1** = success = Yes, reported feeling sad or hopeless
- **0** = failure = No, did not report feeling sad or hopeless

---

# 4. Statistical Method

Because the response variable is binary and the project compares two groups, the appropriate method is a **two-proportion z-test**.

The parameter of interest is:

```text
p_Female - p_Male
```

where:

- `p_Female` = the population proportion of female students who reported feeling sad or hopeless
- `p_Male` = the population proportion of male students who reported feeling sad or hopeless

---

# 5. Hypotheses

```text
H0: p_Female - p_Male = 0
H1: p_Female - p_Male != 0
```

Significance level:

```text
alpha = 0.05
```

---

# 6. Assumptions Considered

- The two groups are independent because each student belongs to only one sex group.
- The response variable is binary, so comparing proportions is appropriate.
- The sample sizes are large enough for the normal approximation because both groups have large Yes and No counts.
- The data come from an observational survey, so the result should be interpreted as an association, not a causal relationship.
