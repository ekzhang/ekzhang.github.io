---
title: Handwriting Generator
date: 2018-08-23
repo: ekzhang/vae-cnn-mnist
topics: ["Python", "Machine Learning", "Graphics"]
lead: Variational autoencoder that learns latent features in handwriting.
image: vae-cnn-mnist.png
---

This is a neural network that encodes 28&times;28 images of handwritten
characters in a 6-dimensional latent space using deep learning. It consists of
two parts: an encoder block that puts the input through several convolutional
and downsampling layers to extract latent variables, and a decoder block that
takes latent variables and a label to reconstruct the original image, minimizing
mean squared error. During the training process, we add some Gaussian noise to
the latent space, which is the so-called "reparameterization trick" of a
[variational autoencoder](https://papers.nips.cc/paper/5775-learning-structured-output-representation-using-deep-conditional).

I implemented the model in Keras and trained it on a dataset of over 400,000
handwritten characters. You can see the results in the web demo below, which
stitches the outputs together onto a canvas. Without any prior knowledge, the
model is able to isolate six of the most important characteristics in human
handwriting.

**Links: [GitHub](https://github.com/ekzhang/vae-cnn-mnist),
[Demo](https://ekzhang.github.io/vae-cnn-mnist/)**
