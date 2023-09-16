---
title: Rushlight
date: 2023-06-26
repo: ekzhang/rushlight
topics: ["TypeScript", "Systems", "Redis"]
lead: Collaborative code editors that run on your own infrastructure.
image: rushlight.jpg
---

Rushlight is my take on the _essence_ of a persistent, collaborative text editor
based on operational transformation, as a library you would embed in a larger
app.

It supports multiple real-time documents, with live cursors, based on
CodeMirror 6. The backend is stateless, and you bring your own transport — even
a boring HTTP handler works. There aren't any proprietary gadgets or opaque
configurations. It's just a distributed data structure in its purest pragmatic
form.

**Links: [GitHub](https://github.com/ekzhang/rushlight),
[Demo](https://rushlight.up.railway.app/)**
