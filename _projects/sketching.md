---
title: Pencil Sketch Rendering
date: May 2021
repo: ekzhang/sketching
topics: OpenGL,Graphics,Geometry,Algorithms
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Geometry processing for real-time pencil sketching.
    </p>
    <p markdown="1">
      This research project explores the task of drawing 3D objects, either triangle meshes or implicitly represented as signed distance fields (SDFs), in the art style of a pencil sketch. We review, implement, and extend existing methods with geometry processing techniques.
    </p>
    <p markdown="1">
      Our primary contribution is a new scale-invariant algorithm for estimating surface curvatures of an SDF within the graphics pipeline, which was a previously unexplored topic. This algorithm has the advantage of enabling real-time rendering of dynamic geometries at arbitrary scales (modeled by implicit functions), without the noise sensitivity of mesh-based methods.
    </p>
    <p class="font-weight-bold" markdown="1">
      Links:
      [GitHub](https://github.com/ekzhang/sketching), [Website](https://pencil-sketching.vercel.app/), [Paper](https://pencil-sketching.vercel.app/Pencil-Sketching.pdf)
    </p>

  </div>
  <div class="col-md-4">
    <a href="/assets/images/sketching.png">
      <img
        class="img-fluid border"
        alt="Sketching teaser image"
        src="/assets/images/sketching.png"
      />
    </a>
  </div>
</div>
