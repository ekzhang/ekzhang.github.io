---
title: Path Tracer
date: December 2020
repo: ekzhang/rpt
topics: Rust,Graphics,Rendering
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      A physically-based path tracer in Rust.
    </p>
    <p markdown="1">
      This a physically based, CPU-only rendering engine written in Rust. It implements a Monte Carlo path tracing algorithm for global illumination. There's a lot of features, including kd-tree mesh acceleration, physical material properties (microfacet BSDF with multiple importance sampling), HDRI environment maps, OBJ/MTL/STL files, depth of field, and particle physics simulation.
    </p>
    <p markdown="1">
      It's also parallelized with [rayon](https://github.com/rayon-rs/rayon) and available as a library on [crates.io](https://crates.io/). The entire source code, including code for the example images and more, is very short (~3K SLOC). We're still looking to extend it with bidirectional path tracing and other features.
    </p>
    <p markdown="1">
      This won top project out of 100 students in MIT's computer graphics class (6.837, Fall 2020).
    </p>
    <p class="font-weight-bold" markdown="1">
      Links:
      [GitHub](https://github.com/ekzhang/rpt),
      [Crates.io](https://crates.io/crates/rpt),
      [Documentation](https://docs.rs/rpt)
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/rpt.jpg">
      <img
        class="img-fluid"
        alt="Stanford Dragon Render"
        src="/assets/images/rpt.jpg"
      />
    </a>
  </div>
</div>
