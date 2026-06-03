# Assumption Checks

## Independence
YRBS is a survey dataset. Students are treated as separate observations. This project does not claim repeated measurements from the same student.

## Correct response type
The response variable is binary, not quantitative. Therefore, a two-proportion method is appropriate.

## Group definition
The two groups are Female and Male based on `WhatIsYourSex`. Missing or invalid sex values are removed.

## Success/failure counts
Female group:

- successes = 2580
- failures = 4360

Male group:

- successes = 1567
- failures = 5326

All counts are much larger than 10, so the normal approximation used by the two-proportion z-test is reasonable.

## Missing values
For the main two-sample analysis, rows with missing or invalid values for `WhatIsYourSex` or `SadOrHopeless` were removed. For the alcohol-use extension, rows also needed valid `CurrentAlcoholUse` values.

## Causality limitation
This is observational, self-reported survey data. The analysis can support association, not causation.
