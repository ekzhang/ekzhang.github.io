---
title: Handwriting Generator
date: August 2018
repo: ekzhang/vae-cnn-mnist
topics: Python,Machine Learning,Graphics
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Variational autoencoder that learns latent features in handwriting.
    </p>
    <p>
      This is a neural network that encodes 28&times;28 images of handwritten
      characters in a 6-dimensional latent space using unsupervised learning. It
      consists of two parts: an encoder network that puts the input through
      several convolutional and downsampling layers to extract latent variables,
      and a decoder network that takes latent variables and a label to
      reconstruct the original image, minimizing mean squared error. After
      adding some trained Gaussian noise to the latent space, the result is
      sometimes called a
      <a
        href="https://papers.nips.cc/paper/5775-learning-structured-output-representation-using-deep-conditional"
        >conditional variational autoencoder</a
      >.
    </p>
    <p>
      I implemented the model in Keras and trained it on a dataset of over
      400,000 handwritten characters. You can see the results in the web demo
      below, which stitches the outputs together on a canvas. Without any prior
      knowledge, we can isolate the six most important distinguishing
      characteristics of a person's handwriting. You could use this to copy
      anyone's writing style given a sample!
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/vae-cnn-mnist">GitHub</a>,
      <a href="https://ekzhang.github.io/vae-cnn-mnist/">Demo</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/vae-cnn-mnist.png">
      <img
        class="img-fluid"
        alt="Learned handwriting samples"
        src="/assets/images/vae-cnn-mnist.png"
      />
    </a>
  </div>
</div>
