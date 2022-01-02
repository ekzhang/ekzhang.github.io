---
title: Polygon Triangulation with Holes
date: 2019-05-23
repo: ekzhang/triangulate
topics: ["C++", "Algorithms", "Emscripten", "Graphics"]
lead: Fast computational geometry algorithms in WebAssembly.
image: triangulate.png
---

This was an experiment to implement the <em>ear clipping</em> algorithm from
computational geometry for
[polygon triangulation](https://en.wikipedia.org/wiki/Polygon_triangulation).
Although easy to describe, triangulation is a surprisingly difficult problem, as
there are many corner cases involving concave polygons, holes, and nested
polygons. Therefore, we need to use some
[clever techniques](https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf)
to make the problem tractable.

Note that there is a randomized O(N log<sup>\*</sup> N) algorithm for this
problem
([Seidel 1991](https://www.sciencedirect.com/science/article/pii/0925772191900124)).
However, for most practical applications, ear clipping is fast enough and
produces more robust results, while having lower constant-factor overhead due to
the use of simpler data structures.

I implemented the algorithm in C++ from scratch, then compiled it to WebAssembly
using [Emscripten](https://emscripten.org/) to produce code that could be run by
the browser.

**Links: [GitHub](https://github.com/ekzhang/triangulate),
[Website](https://triangulate.surge.sh/)**
