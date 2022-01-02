---
title: Crepe – Logic Programming in Rust
date: 2020-09-23
repo: ekzhang/crepe
topics: ["Rust", "Programming Languages", "Datalog"]
lead: Fast, compiled Datalog for static analysis, with Rust integration.
image: crepe.png
---

_Crepe_ is a library that allows you to write declarative logic programs in
Rust, with a [Datalog](https://en.wikipedia.org/wiki/Datalog)-like syntax. It
provides a procedural macro that generates efficient, safe code and
interoperates seamlessly with Rust programs.

Inspired by the power of [Souffle](https://souffle-lang.github.io/) and
[Formulog](https://github.com/HarvardPL/formulog), this project is unique in
enabling safe integration of arbitrary functions from the host language (Rust)
within compiled Horn clauses. It also includes many features of modern Datalog
implementations: stratified negation, semi-naive evaluation, and automatic index
generation.

**Links: [GitHub](https://github.com/ekzhang/crepe),
[Crates.io](https://crates.io/crates/crepe),
[Documentation](https://docs.rs/crepe)**
