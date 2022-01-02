---
title: Canvas Hashlife
date: 2018-12-23
repo: ekzhang/game-of-life
topics: ["JavaScript", "Algorithms", "Graphics", "Vue"]
lead: An ultra-fast simulation of Conway's Game of Life in the browser.
image: game-of-life.png
---

Ever wanted to simulate a 2<sup>100</sup> &times; 2<sup>100</sup> grid of cells
over 2<sup>50</sup> generations? Well, now you can do that in just milliseconds
without any specialized software, right in your browser!

How is it possible to simulate such a massive pattern without running out of CPU
or memory? The secret is Bill Gosper's
[Hashlife](https://en.wikipedia.org/wiki/Hashlife) algorithm, which combines
quadtrees and memoization to
[compress space and time](https://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478).
In the image, you can see a frontend web application computing the
498,913,509,376<sup>th</sup> generation of a Turing machine pattern in just
under a millisecond.

**Links: [GitHub](https://github.com/ekzhang/game-of-life),
[Website](https://ekzhang.github.io/game-of-life/)**
