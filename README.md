# Project Cycle 3 - Two-Sample Inference using YRBS 2007

## Group Information
- Group number: Group 19 
- Member 1: Liang Chan-Yu / 梁展育, Student ID: 112310316
- Member 2: 王心妤 113370209

## Project Repository
https://github.com/xin-yu0311/cycle3

## Presentation Video
https://drive.google.com/file/d/11wPaeQKP7zFqHT00fsF_VaoCeLvGrr_E/view?usp=sharing

## Selected Approved Research Question
**Question 3: Gender and Sad or Hopeless Feeling**

Research question: Is the proportion of students who felt sad or hopeless different between male and female students?

## Creative Extension
To make the analysis richer while still keeping the approved two-sample question, we added **CurrentAlcoholUse** as a supplementary explanatory factor. Alcohol use is not used to redefine the raw data. It is recoded according to the official Cycle 3 rule: code 1 = no current alcohol use, codes 2-7 = current alcohol use.

## Variables
- Group variable: `WhatIsYourSex`
  - 1 = Female
  - 2 = Male
- Response variable: `SadOrHopeless`
  - 1 = Yes, felt sad or hopeless
  - 2 = No
- Supplementary factor: `CurrentAlcoholUse`
  - 1 = 0 days
  - 2-7 = at least 1 day during the past 30 days

## Methods Used
Main required two-sample method:
- Two-proportion z-test
- 95% confidence interval for the difference in proportions

Additional methods for stronger interpretation and a less plain visual story:
- Effect-size dashboard
- Alcohol-stratified comparison
- Logistic-regression predicted probabilities

Additional methods for stronger interpretation:
- Risk difference
- Relative risk
- Odds ratio
- Logistic regression with sex and current alcohol use
- Mantel-Haenszel adjusted odds ratio by alcohol stratum
- Type I and Type II error discussion

## Key Results
- Analytic sample: n = 13,833 for the main comparison; 12,601 for the alcohol extension
- Female sadness/hopelessness proportion: 37.2%
- Male sadness/hopelessness proportion: 22.7%
- Difference: 14.4 percentage points
- 95% CI: [12.9, 15.9] percentage points
- z = 18.54, p < 0.001
- Adjusted odds ratio for female vs male after accounting for alcohol use: 2.13

## Final Conclusion
Female students reported sad or hopeless feelings at a higher proportion than male students. The difference was statistically significant at alpha = 0.05 and remained clear after considering current alcohol use. Since the YRBS data are observational and self-reported, the result should be interpreted as an association, not causation.

## Project Structure
```
project-cycle-3/
  README.md
  data/
    raw/
    processed/
  notebooks/
  outputs/
    figures/
    tables/
    summary/
  report/
  references/
```


## Main Code File

The complete reproducible workflow is in `notebooks/00_full_analysis.ipynb`. This notebook includes data loading, raw checks, recoding, cleaning, descriptive summaries, inference, alcohol-use extension, logistic regression, figures, tables, and saved outputs.

##Presentation Video
https://drive.google.com/file/d/11wPaeQKP7zFqHT00fsF_VaoCeLvGrr_E/view?usp=sharing
