---
title: Confirmatory Factor Analysis
tags:
  - fleeting_note
---

# Confirmatory Factor Analysis
created: 2022-06-14 02:40

Variables are related to each other somehow, that is why we are doing factor analysis.

A hypothesis is already formed. You are testing against a null hypothesis.

CFA was developed after EFA.

- Factor loadings should be > 0.7, remove everything below 0.6 (it is Std.all)
- CFI, TLI > 0.9
- RMSEA, SRMR < 0.08

- \# =~ for reflective \# <~ formative 

-> Explore package Mplus for CFA

-> Use [Johny Lin's](https://www.youtube.com/watch?v=2M6VQY_OFvM&t=48s) diagram definition

## Lavaan

An example for the diagram:
![[Pasted image 20220625105828.png]]

Automatic standardisation in Lavaan:

![[Pasted image 20220625111400.png]]

1 standard deviation increase in factor `f` causes -0.7 decrease in variable `q04`

Caution: we of course don't want loadings looking opposite direction (like +- loadings under Std.all)


Baseline and Saturated Models:

![[Pasted image 20220625140511.png]]

We want CLI/TFI to approach one because we are dividing the *distance* between baseline model and *user_model* by the distance between *baseline* model and *saturated* model:
![[Pasted image 20220625140904.png]]

And RMSEA should satisfy the following criteria:

![[Pasted image 20220625141117.png]]


### Model Fitting
What to do with a bad fitting model?

- Add more factors
- Remove variables according to the factor loadings (in Lavaan's automatic standardisation, they are under `Std.all`)
- Cross-validation: After train test split, test the test split also with the same model description, how do the stats relate to each other?

### Understanding model summary
Squared values of the factor loadings show how variance of each variable is explained by the factor/ latent variable

![[Pasted image 20220625143350.png]]

In the example above, $0.619^2 = 0.38 \implies$ 38% of the variance of `q01` is explained by `f1`.

Covariances between the factors show how much they are related:
![[Pasted image 20220625144838.png]]


### ordered = T
with `ordered` argument, Lavaan will handle the dataset as ordinal variables. Note that the `estimator` argument has to be set as `WLSMV` which calculates the results with `Diagonally Weighted Least Squares` estimator. The documentation of this approach can be [accessed here](https://lavaan.ugent.be/tutorial/cat.html).

### Modification indices
The following syntax shows how to find out variables better fitting with each other

```r
modificationindices(fit.miro_model_ordered) %>%
  arrange(-mi) %>%
  head(10)  
```

Additionally `parameterestimates()` delivers a good overview on the relations between the factors and variables. If `Std.lv` is set to `TRUE`, we will be getting the correlations between the factors at the bottom.

### Sharing covariance matrix
the matrix gathered by `cov(data)` can be shared to replicate the study

### Path diagram
An automised approach to draw path diagrams is with `semPlot` library with the following syntax

```r
semPaths(fit2b,

what = "std", # this argument controls what the color of edges represent. In this case, standardized parameters

whatLabels = "est", # This argument controls what the edge labels represent. In this case, parameter estimates

style = "lisrel", # This will plot residuals as arrows, closer to what we use in class

residScale = 8, # This makes the residuals larger

theme = "colorblind", # qgraph colorblind friendly theme

nCharNodes = 0, # Setting this to 0 disables abbreviation of nodes

manifests = paste0("Q",1:10), # Names of manifests, to order them appropriatly.

reorder = FALSE, # This disables the default reordering

nodeNames = nodeNames, # Add a legend with node names

legend.cex = 0.5, # Makes the legend smaller

rotation = 2, # Rotates the plot

layout = "tree2", # tree layout options are "tree", "tree2", and "tree3"

cardinal = "lat cov", # This makes the latent covariances connet at a cardinal center point

curvePivot = TRUE, # Changes curve into rounded straight lines

sizeMan = 4, # Size of manifest variables

sizeLat = 10, # Size of latent variables

mar = c(2,5,2,5.5), # Figure margins

filetype = "pdf", width = 8, height = 6, filename = "StarWars" # Save to PDF

)
```

[Explained here!](https://www.youtube.com/watch?v=rUUzF1_yaXg&list=PLliBbGBc5nn0NdoFO4nlbwZrT9TJ5V9sJ&index=9)
## Referenceces

1. [[Factor Analysis]]
2. [[Latent Variable Analysis]]
3. https://www.youtube.com/watch?v=2M6VQY_OFvM&t=48s
4. https://www.youtube.com/watch?v=4Nlq4JubO6g
5. https://www.youtube.com/watch?v=XnHFWe7RFr0
6. [[Quantitative Methods]]
7. [[R]]