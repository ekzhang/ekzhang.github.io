---
title: Redis Rope
date: 2022-07-30
repo: ekzhang/redis-rope
topics: ["Zig", "Rust", "Systems", "Algorithms"]
lead: Fast native data type for manipulating large strings in Redis.
image: redis-rope.svg
---

`redis-rope` is a fast and versatile
[rope](<https://en.wikipedia.org/wiki/Rope_(data_structure)>) data type for
large strings in [Redis](https://redis.io), distributed as a native
[module](https://redis.io/docs/reference/modules/). It's primarily written in
Zig and tested with Rust.

The ropes in this module are backed by
[splay trees](https://en.wikipedia.org/wiki/Splay_tree), which are a
self-adjusting data structure that has logarithmic amortized worst-case
performance, while recently-accessed indices are also quick to access in
subsequent operations. Each splay tree node stores between 64 and 127 bytes of
data.

More than just being theoretically interesting, this module also tries to be
somewhat _practical_ by caring about safety, correctness, and speed. It
approaches the performance of ordinary strings for simple operations and is
hundreds of times faster for complex operations.

**Links: [GitHub](https://github.com/ekzhang/redis-rope),
[Releases](https://github.com/ekzhang/redis-rope/releases)**
