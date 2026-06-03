# Recoding Rules

This project follows the Cycle 3 recoding rules. Raw data are kept unchanged in `data/raw/YRBS_2007.csv`. Recoded variables are saved only in `data/processed/yrbs_cycle3_cleaned_recoded.csv`.

## Main approved question
Question 3: Gender and Sad or Hopeless Feeling.

## Sex
`WhatIsYourSex` was used only when the value was 1 or 2.

- 1 = Female
- 2 = Male

## Sad or Hopeless Feeling
`SadOrHopeless` was used only when the value was 1 or 2.

- 1 = Yes, success
- 2 = No, failure

New binary variable:

- `SadOrHopeless_binary = 1` if `SadOrHopeless == 1`
- `SadOrHopeless_binary = 0` if `SadOrHopeless == 2`

## Current Alcohol Use
`CurrentAlcoholUse` was used only when the value was 1 through 7.

Following the Cycle 3 rule for current alcohol use:

- success / exposed group = codes 2-7
- failure / comparison group = code 1

New binary variable:

- `CurrentAlcoholUse_binary = 1` if `CurrentAlcoholUse` is 2-7
- `CurrentAlcoholUse_binary = 0` if `CurrentAlcoholUse` is 1

Important: this does not change the raw data. It creates a documented analysis variable.
