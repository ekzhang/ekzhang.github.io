---
title: Procedural Harmony
date: February 2019
repo: ekzhang/harmony
topics: Python,Music,Algorithms,Flask
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">Dynamic programming applied to four-part harmony.</p>
    <p>
      This is a Python program that takes as input a string containing
      <a href="https://en.wikipedia.org/wiki/Key_signature">keys</a>
      and
      <a href="https://en.wikipedia.org/wiki/Roman_numeral_analysis"
        >roman numerals</a
      >
      representing a chord progression, and voices the resulting chords
      according to common practice four-part SATB
      <a href="https://en.wikipedia.org/wiki/Voice_leading">voice leading</a>
      conventions. This can be used to try out chord progressions, compose a
      chorale, or quickly solve exercises on music theory homework.
    </p>
    <p>
      Parsing and interpreting the roman numerals was done with
      <a href="https://web.mit.edu/music21/">Music21</a>. To handle a very
      technical set of
      <a href="http://derekremes.com/wp-content/uploads/voiceleadingsummary.pdf"
        >voice leading constraints</a
      >, I chose to frame this as a combinatorial optimization problem. Although
      the set of possible chorale voicings is exponential in size, you can use
      dynamic programming on intermediate states for a relatively fast
      algorithm. See the website below for an interactive version deployed with
      Flask.
    </p>
    <p markdown="1">
      The open-source code and idea behind this project was independently used as the basis for a [research paper published in ISMIR 2020](https://program.ismir2020.net/lbd_432.html), by researchers at McGill University working in computational music theory and deep learning.
    </p>
    <p class="font-weight-bold">
      Links:
      <a href="https://github.com/ekzhang/harmony">GitHub</a>,
      <a href="https://autoharmony.herokuapp.com/">Website</a>
    </p>
  </div>
  <div class="col-md-4">
    <a href="/assets/images/harmony.png">
      <img
        class="img-fluid img-thumbnail"
        alt="Autoharmony"
        src="/assets/images/harmony.png"
      />
    </a>
  </div>
</div>
