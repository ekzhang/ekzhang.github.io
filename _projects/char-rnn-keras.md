---
title: Char-RNN Keras
date: October 2018
repo: ekzhang/char-rnn-keras
topics: Python,Machine Learning,Music
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Character-level language models with recurrent neural networks in Keras.
    </p>
    <p>
      Inspired by Andrej Karpathy's
      <a href="https://karpathy.github.io/2015/05/21/rnn-effectiveness/"
        >blog post</a
      >, this is an implementation of a multi-layer long short-term memory
      (LSTM) network in Keras, for learning and sampling from character-level
      patterns in text. This was trained to generate writing in the style of
      historical authors, like Shakespeare, Hugo, and Caroll.
    </p>
    <p>
      A really interesting application was training this model on a text-based
      corpus of folk music, from which it could compose fairly convincing new
      music samples. See the <code>music-gen</code> demo below.
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/char-rnn-keras">GitHub</a>,
      <a href="https://ekzhang.github.io/music-gen/">Demo</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/char-rnn-keras.png">
      <img
        class="img-fluid"
        alt="Neural network music composition"
        src="/assets/images/char-rnn-keras.png"
      />
    </a>
  </div>
</div>
