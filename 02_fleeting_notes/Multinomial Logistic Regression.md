---
title: Multinomial Logistic Regression
tags:
  - fleeting_note
---

# Multinomial Logistic Regression
created: 2022-06-17 08:41

- R library: `nnet`, method: `multinom`
The method does not deliver the p-values but we can calculate those via *Wald Test*:
```r

w <- multi_log_model.2_sum$coefficients / multi_log_model.2_sum$standard.errors
pval <- 2 * (1 - pnorm(abs(w)))

```

## Referenceces
1. https://www.youtube.com/watch?v=N9Ld4zcyh5s
2. https://www.youtube.com/watch?v=11VY8CmNVDQ
3. [[Statistical Modelling]]