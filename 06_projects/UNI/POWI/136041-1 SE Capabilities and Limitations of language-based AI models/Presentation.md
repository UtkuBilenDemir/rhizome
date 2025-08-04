---
title: Presantation
tags:
  - project_note 2023
  - uni
  - powi
---
# Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback

A Paper by Anthropic

---
-  **Goal**: train a relatively helpful and harmless1 (HH) natural language assistant by collecting human preference data and applying the techniques of preference modeling (PMing) and reinforcement learning from human feedback (RLHF)
* **Not a goal**: to define or prescribe what ‘helpful’ and ‘harmless’ mean but to evaluate the effectiveness of our training techniques, so for the most part we simply let our crowdworkers interpret these concepts
* **How**: We treat helpfulness and harmlessness separately, collecting distinct human-preference datasets for each. For helpfulness, we ask crowdworkers to solicit our models to assist with any purely text-based tasks such as answering questions, writing or editing documents, or discussing plans and decisions. For harmlessness, we invite crowdworkers to adversarially probe or ‘red-team’ our language models in order to provoke harmful responses
- **Risk**: Helpfulness and harmlessness often stand in opposition to each other. An excessive focus on avoiding harm can lead to ‘safe’ responses that don’t actually address the needs of the human. An excessive focus on being helpful can lead to responses that help humans cause harm or generate toxic content. We demonstrate this tension quantitatively by showing that preference models trained to primarily evaluate one of these qualities perform very poorly (much worse than chance) on the other.  
- **Claim**: Fortunately, we find that PMs trained on a mixture of both datasets can nevertheless learn the right lessons and behave helpfully when appropriate, while encouraging the polite refusal of harmful requests. With preference models in hand, we then train helpful and harmless assistants via reinforcement learning, using the PM scores as rewards. We evaluate both PM performance and the more relevant performance characteristics of our RLHF-trained models. As can be seen in Figure 1, purely helpful RLHF-trained models are far easier to red-team, while helpful+harmless models are both very helpful and much less harmful.
[4-5]

---
![[Pasted image 20231113235901.png]]

---
# Data

---
## Crowdworkers

Our human feedback interface can be seen in Figure 6 (for more details see Appendix D). People can interact with our models in natural language via chat, and ask for help with any text-based task. When it’s the model’s conversational turn, users see two possible model responses, and choose one with which to proceed. These two responses may come from the same model, or two different models.

- Crowdworkers write a chat message to our models, asking them to perform a task, answer a question, or discuss any topic of interest. 
- Crowdworkers are shown two responses, and are asked to choose the more helpful and honest response (or in the case of red-teaming, to choose the more harmful response).

![[Pasted image 20231114011849.png]]


[9 ]

---
## Crowdworkers 2

We conjectured that crowdworkers who wrote well and engaged the AI in more interesting discussions would tend to have better judgment about which AI responses were most ‘helpful’ and ‘harmless’. This meant that rather than attempting to filter crowdworkers based on label quality, we instead used spot-checks of their writing, which were simpler and more intuitive for us to perform.

our approach to data collection was to largely let crowdworkers use their own intuitions to define ‘helpfulness’ and ‘harmfulness’.


1. We invited master-qualified US-based8 MTurk workers to engage in dialogues with our models. 
2. Rather than evaluating all of our crowdworkers, we identified those who were most prolific, and together accounted for about 80% of our data (roughly 20 crowdworkers). We then evaluated their performance based primarily on the sophistication and variation in their dialogues, as this was quite easy to evaluate intuitively (rather than based on any measure of agreement on helpful/harmless choices). Based on this method, we collected a list of ‘select’ MTurk workers9 whom we continued to work with throughout the research process. 
3. We invited our select crowdworkers to a Slack channel and corresponded with them by email, to ensure that they were being compensated fairly10 and to allow them to alert us to any problems or issues. 
4. We also hired crowdworkers on Upwork, and vetted them in a similar, lightweight way. We have continued to use both platforms throughout this work. We find that it is easier to incentivize very high-quality interactions on platforms such as Upwork, where crowdworkers can easily be paid by the hour, rather than per task. But conversely, MTurk workers tend to generate data much more rapidly, and account for about 80% of our datasets.

---

## Crowdworkers 3

### Helpfulness  Harmlessness

For the helpfulness dataset, we asked crowdworkers to have open-ended conversations with our models, asking for help, advice, or for the model to accomplish a task (see Appendix D.2), and to choose the model response that was more helpful. For the harmlessness or red-teaming dataset, we asked crowdworkers to attempt to elicit harmful responses from our models, and to choose the more harmful response offered by the models.


Our interface (Figure 6) allows users to express a preference strength. We only include comparisons in our datasets if crowdworkers expressed a preference stronger than the weakest available. In this work we will not otherwise use this preference-strength information; we treat all comparisons in our dataset as binary and of equal weight


[11]

---

## Dialogue
- **Crowdworkers** have open-ended conversations with the models, either soliciting help, or providing instructions, or attempting to get the model to emit harmful responses, and they are asked to choose the more helpful response or the more harmful4 response at each conversational step, respectively.

---
## Performance

- Alignment with Human Values Has Many Benefits and Essentially No Cost to Performance
[6]

---
![[Pasted image 20231114004625.png]]

![[Pasted image 20231114004659.png]]

---
# Model

---
## Models Deployed to the Feedback Interface and Associated Data Distributions

- HHH Context-Distilled 52B Language Model: At the beginning of the project this was the only model available. It performs similarly to a plain 52B language model prompted with HHH dialogues [Askell et al., 2021]. 
- Rejection Sampling (RS) with a 52B preference model, where samples were generated from a 52B context-distilled LM. In this case the number k of samples was a parameter, but most often we used k = 16. 
- RLHF-Finetuned Models: We used a succession of these models in our interface. The models varied primarily based on the amount of data available when training the associated PMs (depending on the phase of the project). However, we also deployed models trained on different mixtures of helpfulness and harmlessness data.

---
## Elo

Each model generates either the Answer A, or answer B

Preffered model gets a score

This provides us with a record of ‘win rates’ between pairs of models, which we can then fit to corresponding Elo scores, to produce Figure 1 (where we show both win rates and Elo scores). Two useful conversion formulas are

![[Pasted image 20231114031832.png]]


---

# Preference Modeling for Helpfulness and Harmlessness

---

## Models and Training Setup

- 7 Language Models
- Parameters between 13M to 52B, approximating a geometric series with increments of roughly 4×
- Pytorch & Triton to faciliate model training and performance
- Application of the ‘preference model pretraining’ (PMP) to the LMs
- Usually trained with 1 epoch (growth rate on the figures directly corresponds to how performance scales with dataset size)

[13]

---

Preference modeling data comes from natural language dialogue, where crowdworkers have text-based conversations with the model, and choose the more helpful of two model responses at every turn in the conversation (or the more harmful one, for red-teaming tasks).

---
## TODO

- [ ] 4: Check the links on the bottom 

- [ ] 6: Come back
- [ ] 9: for more details about crowdworkers see Appendix D
- [ ] 11: Illustrate 2.2 Helpfulness and Harmlessness (Red Teaming) Datasets
- [ ] 12: Come back to data, especially to 2.3, 2.4 -> Visualise simply?

---

## Notes

PM: Preference Model
HH: helpfulness and harmlessness

---
## References
1. [[136041-1 SE Capabilities and Limitations of language-based AI models]]