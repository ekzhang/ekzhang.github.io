---
title: Rustpad
date: June 2021
repo: ekzhang/rustpad
topics: Rust,Systems,TypeScript,React
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      A self-hosted online collaborative code editor.
    </p>
    <p markdown="1">
      Rustpad is an efficient and minimal collaborative text editor based on the _operational transformation_ algorithm. It lets users collaborate in real time while writing code in their browser. Rustpad is completely self-hosted and fits in a tiny Docker image, no database required.
    </p>
    <p markdown="1">
      Architecturally, client-side code communicates via WebSocket with a central server that stores in-memory data structures. This makes the editor very fast, allows us to avoid provisioning a database, and makes testing much easier. It showcases the power of distributed systems and concurrent network programming, designing while taking the entire stack into consideration.
    </p>
    <p class="font-weight-bold" markdown="1">
      Links:
      [GitHub](https://github.com/ekzhang/rustpad), [Website](https://rustpad.io/)
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/rustpad.png">
      <img
        class="img-fluid"
        alt="Rustpad teaser image"
        src="/assets/images/rustpad.png"
      />
    </a>
  </div>
</div>
