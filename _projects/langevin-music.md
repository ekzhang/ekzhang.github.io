---
title: Langevin Dynamics for Composition
date: November 2020
repo: ekzhang/langevin-music
topics: Python,Machine Learning,Music,Transformers
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Generative modeling of Bach chorales by gradient estimation.
    </p>
    <p markdown="1">
      This research project introduces a new generative model for music composition, based on annealed Langevin dynamics and a noise-conditional score matching algorithm using transformers. Unlike implicit models such as GANs, this learns an explicit distribution of the input data.
    </p>
    <p markdown="1">
      We study if Langevin dynamics and score matching can combine the controllability of Markov chain Monte Carlo (MCMC) methods with the global view and fast convergence of stochastic gradient descent, to produce high-quality, structured musical compositions.
    </p>
    <p markdown="1">
      Our contribution is to look in the direction of designing generative deep learning models for music that strongly _avoid local minima_, while _retaining controllability_.
    </p>
    <p class="font-weight-bold" markdown="1">
      Links:
      [GitHub](https://github.com/ekzhang/langevin-music), [Paper](https://www.ekzhang.com/assets/pdf/Generative_Music_Modeling.pdf)
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/langevin-music.png">
      <img
        class="img-fluid"
        alt="Langevin music teaser image"
        src="/assets/images/langevin-music.png"
      />
    </a>
  </div>
</div>
