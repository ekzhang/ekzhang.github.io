---
title: Pencil Sketch Rendering
date: 2021-05-23
repo: ekzhang/sketching
topics: ["OpenGL", "Graphics", "Geometry", "Algorithms"]
lead: Geometry processing for real-time pencil sketching.
image: sketching.png
image_border: true
---

This research project explores the task of drawing 3D objects, either triangle
meshes or implicitly represented as signed distance fields (SDFs), in the art
style of a pencil sketch. We review, implement, and extend existing methods with
geometry processing techniques.

Our primary contribution is a new scale-invariant algorithm for estimating
surface curvatures of an SDF within the graphics pipeline, which was a
previously unexplored topic. This algorithm has the advantage of enabling
real-time rendering of dynamic geometries at arbitrary scales (modeled by
implicit functions), without the noise sensitivity of mesh-based methods.

**Links: [GitHub](https://github.com/ekzhang/sketching),
[Website](https://pencil-sketching.vercel.app/),
[Paper](https://pencil-sketching.vercel.app/Pencil-Sketching.pdf)**
