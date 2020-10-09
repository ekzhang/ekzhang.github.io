---
title: Polygon Triangulation with Holes
date: May 2019
repo: ekzhang/triangulate
topics: C++,Algorithms,Emscripten,Graphics
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">Fast computational geometry algorithms in WebAssembly.</p>
    <p>
      This was an experiment to implement the <em>ear clipping</em> algorithm
      from computational geometry for
      <a href="https://en.wikipedia.org/wiki/Polygon_triangulation"
        >polygon triangulation</a
      >. Although easy to describe, triangulation is a surprisingly difficult
      problem, as there's a lot of corner cases involving concave polygons,
      holes, and nested polygons, which show up in practice. Luckily there are
      some
      <a
        href="https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf"
        >clever techniques</a
      >
      to make this easier.
    </p>
    <p>
      Note that there is also a randomized O(N log<sup>*</sup> N) algorithm for
      this problem (<a
        href="https://www.sciencedirect.com/science/article/pii/0925772191900124"
        >Seidel 1991</a
      >). However, for most practical applications, ear clipping is fast enough
      and produces more robust results, while having a lower constant-factor
      overhead from using simpler data structures.
    </p>
    <p>
      I implemented the algorithm in C++ from scratch, then compiled it to
      WebAssembly using <a href="https://emscripten.org/">Emscripten</a> to
      produce code that could be run by the browser in the demo below.
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/triangulate">GitHub</a>,
      <a href="https://triangulate.surge.sh/">Website</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/triangulate-1.png">
      <img
        class="img-fluid"
        alt="Polygon triangulation"
        src="/assets/images/triangulate-1.png"
      />
    </a>
  </div>
</div>

<div class="row">
  <div class="col-md-4 d-none d-md-block">
    <a href="/assets/images/triangulate-2.png">
      <img
        class="img-fluid img-thumbnail"
        alt="Polygon triangulation - step 1"
        src="/assets/images/triangulate-2.png"
      />
    </a>
  </div>
  <div class="col-md-4 d-none d-md-block">
    <a href="/assets/images/triangulate-3.png">
      <img
        class="img-fluid img-thumbnail"
        alt="Polygon triangulation - step 2"
        src="/assets/images/triangulate-3.png"
      />
    </a>
  </div>
  <div class="col-md-4 d-none d-md-block">
    <a href="/assets/images/triangulate-4.png">
      <img
        class="img-fluid img-thumbnail"
        alt="Polygon triangulation - step 3"
        src="/assets/images/triangulate-4.png"
      />
    </a>
  </div>
</div>
