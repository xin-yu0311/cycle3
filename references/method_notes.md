# Statistical Method Notes

## Required two-sample method
Because the response variable `SadOrHopeless_binary` is binary and the group variable `WhatIsYourSex` defines two independent groups, the required method is a **two-proportion z-test**.

The main parameter is:

`p_Female - p_Male`

where `p` is the population proportion of students who report sad or hopeless feelings.

## Hypotheses

Null hypothesis:

`H0: p_Female - p_Male = 0`

Alternative hypothesis:

`H1: p_Female - p_Male != 0`

Significance level: alpha = 0.05.

## Additional methods
To avoid relying only on one test result, the project also reports:

- confidence interval for the difference in proportions
- risk difference
- relative risk
- odds ratio
- logistic regression adjusted for current alcohol use
- Mantel-Haenszel adjusted odds ratio across alcohol strata

These additional methods do not replace the required two-sample inference. They support interpretation of the size and direction of the association.

## Type I and Type II Errors

A Type I error would occur if we conclude that the proportion of sad or hopeless feelings differs between female and male students, when in the true population there is no difference.

A Type II error would occur if we fail to detect a real difference between female and male students.

Because the analytic sample is large (n = 12,601), the test has strong ability to detect differences. However, a large sample can make small differences statistically significant, so effect sizes and confidence intervals are also reported.
