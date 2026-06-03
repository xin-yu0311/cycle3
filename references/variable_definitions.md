# Variable Definitions

## WhatIsYourSex
Group variable for the approved two-sample comparison.

- Code 1 = Female
- Code 2 = Male

Rows with missing or invalid values were removed from the analysis.

## SadOrHopeless
Response variable. This is a binary categorical variable.

- Code 1 = Yes, the student reported feeling sad or hopeless
- Code 2 = No, the student did not report feeling sad or hopeless

For analysis, a new variable `SadOrHopeless_binary` was created:

- 1 = Yes / success
- 0 = No / failure

## CurrentAlcoholUse
Supplementary factor added to make the analysis more informative. It is not the approved main group variable. It is used for stratified and adjusted analyses.

Original codes:

- 1 = 0 days
- 2 = 1 or 2 days
- 3 = 3 to 5 days
- 4 = 6 to 9 days
- 5 = 10 to 19 days
- 6 = 20 to 29 days
- 7 = all 30 days

For the supplementary analysis, a new variable `CurrentAlcoholUse_binary` was created:

- 0 = no current alcohol use, original code 1
- 1 = current alcohol use, original codes 2-7

The original raw variable was not modified.
