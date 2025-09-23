---
title: ssh-hypervisor
date: 2025-09-23
repo: ekzhang/ssh-hypervisor
topics: ["Go", "Systems"]
lead: Lightweight, per-user virtual machines that start as you SSH in.
image: ssh-hypervisor.png
image_rounded: true
---

Just like SSH, but each user gets their own Firecracker microVM. ssh-hypervisor
is a single binary that spins up tiny Linux VMs on demand when receiving a
connection—my little “SimCity for VMs.” I deployed it on a tiny instance with
nested KVM virtualization.

This was a fun weekend project, but it hints at a simple building block for
per-user sandboxes and lightweight VM provisioning via SSH.

**Links: [GitHub](https://github.com/ekzhang/ssh-hypervisor),
[Worklog](https://ekzhang.substack.com/p/ssh-hypervisor-simcity-for-vms)**
