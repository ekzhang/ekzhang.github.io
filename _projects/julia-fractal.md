---
title: Julia Fractal Renderers
date: April 2018
repo: ekzhang/julia-fractal
topics: C++,Java,Graphics,TypeScript,OpenGL
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Fast, interactive fractal renderers in C++, Java, and WebGL.
    </p>
    <p>
      Originally, this project started out as a multithreaded Julia fractal
      renderer in C++, which I used to create high-quality static images and
      animations. However, I also wanted to interactively explore the fractals
      by zooming and panning, so I created a Java Swing app with similar
      multithreaded performance.
    </p>
    <p>
      The speed of these implementations was heavily CPU-bound though, so I
      finally implemented an
      <a href="https://en.wikipedia.org/wiki/OpenGL_Shading_Language"
        >OpenGL shader</a
      >
      that could render Julia fractals with blazing-fast speed, fast enough to
      be explored interactively with almost no lag. I rendered using WebGL and
      connected it to mobile-friendly controls with TypeScript. You can play
      with this fractal explorer in the website linked below.
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/julia-fractal">GitHub</a>,
      <a href="https://github.com/ekzhang/julia-viewer">GitHub (Java)</a>,
      <a href="https://github.com/ekzhang/webgl-julia-viewer">GitHub (WebGL)</a
      >,
      <a href="https://ekzhang.github.io/webgl-julia-viewer/">Website</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/julia-1.jpg">
      <img
        class="img-fluid mb-2"
        alt="Julia fractal render"
        src="/assets/images/julia-1.jpg"
      />
    </a>
  </div>
</div>

<div class="row">
  <div class="col-md-4">
    <a href="/assets/images/julia-2.jpg">
      <img
        class="img-fluid"
        alt="Julia fractal render"
        src="/assets/images/julia-2.jpg"
      />
    </a>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/julia-3.jpg">
      <img
        class="img-fluid"
        alt="Julia fractal render"
        src="/assets/images/julia-3.jpg"
      />
    </a>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/julia-4.jpg">
      <img
        class="img-fluid"
        alt="Julia fractal render"
        src="/assets/images/julia-4.jpg"
      />
    </a>
  </div>
</div>
