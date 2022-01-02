---
title: Char-RNN Keras
date: 2018-10-23
repo: ekzhang/char-rnn-keras
topics: ["Python", "Machine Learning", "Music"]
lead: Character-level language models with recurrent neural networks in Keras.
image: char-rnn-keras.png
---

Inspired by Andrej Karpathy's
[blog post](https://karpathy.github.io/2015/05/21/rnn-effectiveness/), this is
an implementation of a multi-layer long short-term memory (LSTM) network in
Keras, for learning and sampling from character-level patterns in text. This was
trained to generate writing in the style of historical authors, like
Shakespeare, Hugo, and Carroll.

A really interesting application was training this model on a text-based corpus
of folk music, from which it could compose fairly convincing new music samples.
See the <code>music-gen</code> demo below.

**Links: [GitHub](https://github.com/ekzhang/char-rnn-keras),
[Demo](https://ekzhang.github.io/music-gen/)**
