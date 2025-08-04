---
title: Definition of GenAI, LMs
tags:
  - project_note 2024
  - uni
  - powi
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# Definition of GenAI, LMs
> <mark class="hltr-grey">Similar to [14], we understand the term language model (LM) to refer to systems which are trained on string prediction tasks: that is, predicting the likelihood of a token (character, word or string) given either its preceding context or (in bidirectional and masked LMs) its surrounding context. ([[@bender2021b]], 610)</mark>

## Revolutionary AI possibilities
><mark class="hltr-grey">The experiencer aspect of the system, however, emerges through its engagement with external feedback loops. For example, the AI receives feedback from scientific evaluations of its predictions, critiques from researchers, and integrations of previously unseen data sets. Through this feedback, the AI refines its internal representations, enhancing the accuracy and scope of its models. As it adapts, the system begins to map these localized understandings onto a more abstract, global framework—capturing phenomena that may not align neatly with human interpretative schemas, such as non-linear and chaotic interactions between various ecological systems. In this iterative process, the AI system constructs transjective subjectivity: its ability to generate meaning that bridges internal, computational representations and external, relational dynamics. [[@rijos]]
These dynamics underscores the potential of computational systems to engage in a co-creative process with humans, not merely solving problems but redefining the frameworks of meaning itself. [[@rijos]]

Given the dispersed nature of these relationships, a singular weight doesn’t hold any conceptual content; instead, it obtains relevance through extensive interaction patterns. [@maas] -> He is referring to Cilliers(2002) but it also connects with Deleuze</mark>

<mark class="hltr-grey">## Architecture
> However, there are also some important differences. Transformer Networks do not inherently involve the same kind of recursive, feedback loops that characterize RNNs. They do not take the output of a node and return it as input to the same node. Instead, the self-attention mechanism allows every token to simultaneously consider every other token, in a kind of ‘global’ context. This gives transformers a form of ‘awareness’ of the entire sequence at once, which is different from the recursive, deferential nature of RNNs described by Cilliers. Arguably, this could be seen as bringing modern LLMs closer to Derrida’s original ideas regarding the trace, as the self-attention mechanism bakes in the haunting of other words in the representation of each word’s meaning within the LLM. [@maas]</mark>
## References
1. [[Chapters]]