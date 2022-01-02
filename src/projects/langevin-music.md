---
title: Langevin Dynamics for Composition
date: 2020-11-23
repo: ekzhang/langevin-music
topics: ["Python", "Machine Learning", "Music", "Transformers"]
lead: Generative modeling of Bach chorales by gradient estimation.
image: langevin-music.png
---

This research project introduces a new generative model for music composition,
based on annealed Langevin dynamics and a noise-conditional score matching
algorithm using transformers. Unlike implicit models such as GANs, this learns
an explicit distribution of the input data.

We study if Langevin dynamics and score matching can combine the controllability
of Markov chain Monte Carlo (MCMC) methods with the global view and fast
convergence of stochastic gradient descent, to produce high-quality, structured
musical compositions.

Our contribution is to look in the direction of designing generative deep
learning models for music that strongly _avoid local minima_, while _retaining
controllability_.

**Links: [GitHub](https://github.com/ekzhang/langevin-music),
[Paper](https://www.ekzhang.com/assets/pdf/Generative_Music_Modeling.pdf)**
