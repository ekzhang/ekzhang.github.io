---
title: Julia Fractal Renderers
date: 2018-04-23
repo: ekzhang/julia-fractal
topics: ["C++", "Java", "Graphics", "TypeScript", "OpenGL"]
lead: Fast, interactive fractal renderers in C++, Java, and WebGL.
image: julia-1.jpg
subimages: ["julia-2.jpg", "julia-3.jpg", "julia-4.jpg"]
---

Originally, this project started out as a multithreaded Julia fractal renderer
in C++, which I used to create high-quality static images and animations.
However, I also wanted to interactively explore the fractals by zooming and
panning, so I created a Java Swing app with similar multithreaded performance.

The speed of these implementations was heavily CPU-bound though, so I finally
implemented an
[OpenGL shader](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) that
could render Julia fractals with blazing-fast speed, fast enough to be explored
interactively with almost no lag. I rendered using WebGL and connected it to
mobile-friendly controls with TypeScript. You can play with this fractal
explorer in the website linked below.

**Links: [GitHub](https://github.com/ekzhang/julia-fractal),
[GitHub (Java)](https://github.com/ekzhang/julia-viewer),
[GitHub (WebGL)](https://github.com/ekzhang/webgl-julia-viewer),
[Website](https://ekzhang.github.io/webgl-julia-viewer/)**
