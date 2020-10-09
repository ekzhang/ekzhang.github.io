---
title: Fast Semantic Segmentation
date: August 2020
repo: ekzhang/fastseg
topics: Python,Machine Learning,Vision
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      State-of-the-art, real-time semantic segmentation with MobileNetV3.
    </p>
    <p>
      While working at Nvidia, I open sourced PyTorch code and pretrained
      weights for real-time semantic segmentation of street images. The goal was
      to make it easy for anyone to use cutting-edge machine learning algorithms
      for semantic segmentation tasks, especially in embedded applications.
    </p>
    <p>
      This was a time-consuming effort aided by researchers from
      <a href="https://nv-adlr.github.io/">ADLR</a>. Although
      <a href="https://arxiv.org/abs/1905.02244v5">the MobileNetV3 paper</a>
      reported 72.6% mIoU accuracy, previous public implementations only scored
      around 40-55% mIoU. After many adjustments to model architecture, loss
      functions (<a href="https://arxiv.org/abs/1910.12037">RMI</a>), and
      hyperparameters, I was able to train models reaching 72.3% mIoU, while
      running inference at up to 37.3 FPS on a modern GPU.
    </p>
    <p>
      I currently maintain this code as a
      <a href="https://pypi.org/project/fastseg/">package on PyPI</a>, along
      with scripts for inference and exporting models to different formats for
      deployment.
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/fastseg">GitHub</a>,
      <a
        href="https://colab.research.google.com/github/ekzhang/fastseg/blob/master/demo/fastseg-semantic-segmentation.ipynb"
        >Colab</a
      >
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/fastseg.jpg">
      <img
        class="img-fluid"
        alt="Cityscapes semantic segmentation"
        src="/assets/images/fastseg.jpg"
      />
    </a>
  </div>
</div>
