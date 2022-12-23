---
title: Procedural Harmony
date: 2019-02-23
repo: ekzhang/harmony
topics: ["Python", "Music", "Algorithms", "Flask"]
lead: Dynamic programming applied to four-part harmony.
image: harmony.png
image_border: true
---

This is a Python program that takes as input a string containing
[keys](https://en.wikipedia.org/wiki/Key_signature) and
[roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
representing a chord progression, and voices the resulting chords according to
common practice [voice leading](https://en.wikipedia.org/wiki/Voice_leading)
conventions. This can be used to try out chord progressions, compose a short
chorale, and solve music theory exercises.

Parsing and interpreting the roman numerals was done with
[Music21](https://web.mit.edu/music21/). This project required satisfying a
technical set of
[voice leading constraints](http://derekremes.com/wp-content/uploads/voiceleadingsummary.pdf),
which I framed as a combinatorial optimization problem. Although the set of
possible voicings is exponential in size, you can use dynamic programming on
intermediate states for a relatively fast algorithm. See the website below for
an interactive version deployed with Flask.

The code and idea behind this project were used as the basis for an
[abstract at ISMIR 2020](https://program.ismir2020.net/lbd_432.html), written by
computational music theory researchers at McGill University.

**Links: [GitHub](https://github.com/ekzhang/harmony),
[Website](https://autoharmony.herokuapp.com/)**
