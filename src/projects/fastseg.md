---
title: Fast Semantic Segmentation
date: 2020-08-23
repo: ekzhang/fastseg
topics: ["Python", "Machine Learning", "Vision"]
lead: State-of-the-art, real-time semantic segmentation with MobileNetV3.
image: fastseg.jpg
---

While working at Nvidia, I open sourced PyTorch code and pretrained weights for
real-time semantic segmentation of street images. The goal was to make it easy
for anyone to use cutting-edge machine learning algorithms for semantic
segmentation tasks, especially in embedded applications.

This was a time-consuming effort aided by researchers from
[ADLR](https://nv-adlr.github.io/). Although
[the MobileNetV3 paper](https://arxiv.org/abs/1905.02244v5) reported 72.6% mIoU
accuracy, previous public implementations only scored around 40-55% mIoU. After
many adjustments to model architecture, loss functions
([RMI](https://arxiv.org/abs/1910.12037)), and hyperparameters, I was able to
train models reaching 72.3% mIoU, while running inference at up to 37.3 FPS on a
modern GPU.

I currently maintain this code as a
<a href="https://pypi.org/project/fastseg/">package on PyPI</a>, along with
scripts for inference and exporting models to different formats for deployment.

**Links: [GitHub](https://github.com/ekzhang/fastseg),
[Colab](https://colab.research.google.com/github/ekzhang/fastseg/blob/master/demo/fastseg-semantic-segmentation.ipynb)**
