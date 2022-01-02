---
title: Path Tracer
date: 2020-12-23
repo: ekzhang/rpt
topics: ["Rust", "Graphics", "Rendering"]
lead: A physically-based path tracer in Rust.
image: rpt.jpg
---

This a physically based, CPU-only rendering engine written in Rust. It
implements a Monte Carlo path tracing algorithm for global illumination. There's
a lot of features, including k-d tree mesh acceleration, physical material
properties (microfacet BSDF with multiple importance sampling), HDRI environment
maps, OBJ/MTL/STL files, depth of field, and particle physics simulation.

It's also parallelized with [rayon](https://github.com/rayon-rs/rayon) and
available as a library on [crates.io](https://crates.io/). The entire source
code, including code for the example images and more, is very short (~3K SLOC).
We're still looking to extend it with bidirectional path tracing and other
features.

This won top project out of 100 students in MIT's computer graphics class
(6.837, Fall 2020).

**Links: [GitHub](https://github.com/ekzhang/rpt),
[Crates.io](https://crates.io/crates/rpt),
[Documentation](https://docs.rs/rpt)**
