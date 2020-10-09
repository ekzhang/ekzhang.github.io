---
title: Canvas Hashlife
date: December 2018
repo: ekzhang/game-of-life
topics: JavaScript,Algorithms,Graphics,Vue
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      An ultra-fast simulation of Conway's Game of Life in the browser.
    </p>
    <p>
      Ever wanted to simulate a 2<sup>100</sup> &times; 2<sup>100</sup> grid of
      cells over 2<sup>50</sup> generations? Well, now you can do that in just
      milliseconds without any specialized software, right in your browser!
    </p>
    <p>
      How is it possible to simulate such a massive pattern? The wonderful
      secret is Bill Gosper's
      <a href="https://en.wikipedia.org/wiki/Hashlife">Hashlife</a> algorithm,
      which combines quadtrees and memoization to
      <a
        href="https://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478"
        >"compress space and time"</a
      >. In the image, you can see the web application computing the
      498,913,509,376<sup>th</sup>
      generation of a Turing machine pattern in Conway's Game of Life, in just
      under a millisecond. Try it yourself at the link below!
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/game-of-life">GitHub</a>,
      <a href="https://ekzhang.github.io/game-of-life/">Website</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/game-of-life.png">
      <img
        class="img-fluid"
        alt="Conway's Game of Life - Turing Machine"
        src="/assets/images/game-of-life.png"
      />
    </a>
  </div>
</div>
