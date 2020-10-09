---
title: Crepe – Logic Programming in Rust
date: September 2020
repo: ekzhang/crepe
topics: Rust,Programming Languages,Datalog
---

<div class="row">
  <div class="col-md-8">
    <p class="lead">
      Fast, compiled Datalog for static analysis, with Rust integration.
    </p>
    <p markdown="1">
      _Crepe_ is a library that allows you to write declarative logic
      programs in Rust, with a
      [Datalog](https://en.wikipedia.org/wiki/Datalog)-like syntax.
      It provides a procedural macro that generates efficient, safe code and
      interoperates seamlessly with Rust programs.
    </p>
    <p markdown="1">
      Inspired by the power of [Souffle](https://souffle-lang.github.io/) and
      [Formulog](https://github.com/HarvardPL/formulog), this project
      is unique in enabling safe integration of arbitrary functions from the
      host language (Rust) within compiled Horn clauses. It also includes many
      features of modern Datalog implementations: stratified negation,
      semi-naive evaluation, and automatic index generation.
    </p>
    <p class="font-weight-bold" markdown="1">
      Links:
      [GitHub](https://github.com/ekzhang/crepe),
      [Crates.io](https://crates.io/crates/crepe),
      [Documentation](https://docs.rs/crepe)
    </p>
  </div>
  <div class="d-none d-md-block col-md-4">
    <a href="/assets/images/crepe.png">
      <img class="img-fluid" alt="Crepe logo" src="/assets/images/crepe.png" />
    </a>
  </div>
</div>
