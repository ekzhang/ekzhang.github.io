---
title: Bore – Localhost Tunnels
date: 2022-04-06
repo: ekzhang/bore
topics: ["Rust", "Systems", "CLI"]
lead: A modern, simple TCP tunnel in 400 lines of Rust.
image: bore.png
---

`bore` is a minimal CLI tool that exposes local ports to a remote server,
bypassing standard NAT connection firewalls. That's all it does: no more, and no
less.

With a single binary, you can expose any number of local TCP ports to the public
internet at a specified remote server address. There is a public instance of the
tunneling server running at `bore.pub`, available for anyone to use, similar to
[ngrok](https://ngrok.com/) or
[localtunnel](https://github.com/localtunnel/localtunnel). It's also very easy
to host your own server with a single `bore server` command in the same binary
executable, with optional authentication.

**Links: [GitHub](https://github.com/ekzhang/bore),
[Crates.io](https://crates.io/crates/bore-cli),
[Documentation](https://docs.rs/bore-cli)**
