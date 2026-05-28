# Recoding Rules

## Dataset
- **Dataset Name:** YRBS_2007.csv

This file documents the cleaning and recoding rules used in Project Cycle 3.

---

# 1. General Data Cleaning Rules

The following cleaning steps were applied before analysis:

- Only the variables `WhatIsYourSex` and `SadOrHopeless` were selected.
- Both variables were converted to numeric values where necessary.
- Missing values were excluded from the final analysis.
- Invalid values outside the required codes were excluded.
- Cleaned data were saved as:

```text
data/processed/yrbs_cleaned.csv
```

---

# 2. Group Variable Recoding

## Variable Name
`WhatIsYourSex`

## Original Coding Used
- **Code 1** = Female
- **Code 2** = Male

## Final Group Variable Created
`Sex`

## Final Coding Meaning
- **Female** = students coded as 1 in `WhatIsYourSex`
- **Male** = students coded as 2 in `WhatIsYourSex`

Rows with missing or invalid values for `WhatIsYourSex` were removed.

---

# 3. Response Variable Recoding

## Variable Name
`SadOrHopeless`

## Original Coding Used
- **Code 1** = Yes, the student reported feeling sad or hopeless
- **Code 2** = No, the student did not report feeling sad or hopeless

## Binary Variable Created
`SadOrHopeless_binary`

## Binary Coding Meaning
- **1** = success = Yes, reported feeling sad or hopeless
- **0** = failure = No, did not report feeling sad or hopeless

Rows with missing or invalid values for `SadOrHopeless` were removed.

---

# 4. Final Recoded Data

The final recoded dataset was saved as:

```text
data/processed/yrbs_recoded.csv
```

The final usable sample size after cleaning was **13833** students.
