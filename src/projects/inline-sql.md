---
title: Inline SQL
date: 2022-10-08
repo: ekzhang/inline-sql
topics: ["Python", "Programming Languages", "Databases"]
lead: Weaving relational queries into the fabric of Python.
image: inline-sql.png
---

The `inline-sql` library provides a simple embedded language for writing SQL in
Python programs. Operations run directly within the calling process, and they
execute on Pandas dataframes. Local variables are automatically interpolated as
parameters.

This is implemented as a small wrapper around
[DuckDB](https://github.com/duckdb/duckdb), so it is
[extremely fast](https://duckdb.org/2021/05/14/sql-on-pandas.html). From my own
experimental perspective, the intent of the project was to see whether we can
usefully and ergonomically embed declarative, relational query languages within
general-purpose media.

**Links: [GitHub](https://github.com/ekzhang/inline-sql),
[PyPI](https://pypi.org/project/inline-sql/)**
