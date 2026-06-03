# Final Interpretation - Project Cycle 3

## Research Question

Is the proportion of students who felt sad or hopeless different between female and male students?

This is the approved Cycle 3 Question 3.

## Variables

- Group variable: `WhatIsYourSex`
  - Female vs Male
- Response variable: `SadOrHopeless`
  - 1 = Yes, felt sad or hopeless
  - 0 = No, did not feel sad or hopeless
- Supplementary variable: `CurrentAlcoholUse`
  - 1 = Current alcohol use, original codes 2-7
  - 0 = No current alcohol use, original code 1

The original raw dataset was not modified. Recoded variables were created as new analysis columns and saved in `data/processed/`.

## Main Method

Because the response variable is binary and the project compares two independent groups, the required main method is a two-proportion z-test. The project also reports a 95% confidence interval for the difference in proportions.

To make the analysis more informative, the project also includes effect-size measures:

- risk difference;
- relative risk;
- odds ratio;
- alcohol-stratified summaries;
- Mantel-Haenszel adjusted odds ratio;
- logistic regression adjusted for current alcohol use.

The chi-square test is not used as the main presentation method.

## Main Result

The complete-case sample for the main two-sample comparison included 13,833 students.

Female students had a sad/hopeless proportion of 37.2%, while male students had a sad/hopeless proportion of 22.7%.

The estimated difference was:

**Female - Male = 14.4 percentage points**

The 95% confidence interval for the difference was:

**[12.9, 15.9] percentage points**

The two-proportion z-test gave:

- z statistic = 18.54
- p-value < 0.001

At alpha = 0.05, we reject the null hypothesis. The data provide strong evidence that the proportion of students reporting sad or hopeless feelings differs between female and male students.

## Alcohol-Use Extension

Current alcohol use was added as a supplementary factor, not as a replacement for the approved two-sample research question. The extension complete-case sample included 12,601 students.

In the logistic regression model adjusted for current alcohol use:

- Female vs Male adjusted odds ratio = 2.13
- Current alcohol use vs no current alcohol use adjusted odds ratio = 1.90

This means the female-male difference remains visible after accounting for current alcohol use.

## Type I and Type II Error Discussion

A Type I error would occur if we conclude that female and male students differ in sad/hopeless feelings when there is actually no true population difference.

A Type II error would occur if we fail to detect a real female-male difference that actually exists in the population.

Because the sample size is large, the test has strong ability to detect differences. However, a large sample can also make small effects statistically significant, so this project reports the size of the difference and effect estimates, not only the p-value.

## Final Conclusion

In this YRBS 2007 dataset, female students reported sad or hopeless feelings more often than male students. The estimated difference was about 14.4 percentage points, and the 95% confidence interval did not include 0. Supplementary analysis showed that the pattern remained visible even after adding current alcohol use.

Because this is observational survey data, the result should be interpreted as an association, not causation.
