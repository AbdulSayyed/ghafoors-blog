---
title: "Basics of Bash"
date: 2024-11-04T18:48:26Z
draft: true
description: Learn the basics of Bash, the powerful Unix shell, in this comprehensive guide. Perfect for beginners and intermediate users.
noindex: false
featured: false
pinned: false
# comments: false
series:
  - "Bash" 
categories:
  - "shell"
tags:
  - "bash" 
images:
  - "bash-basics.webp"
---

## Bash Overview (1.0)

The behavior of Bash when starting up depends on the environment—whether you are on Linux, macOS, or Windows. For more on Bash scripting, refer to the [Advanced Bash Scripting Guide](https://www.tldp.org/LDP/abs/html/index.html).

### Bourne Again Shell (1.1)

The **Bourne Again Shell** (Bash) is a powerful command-line interface shell that originated under the GNU Project, developed as a more feature-rich version of the **Bourne Shell** (sh).

### Important Files in macOS (1.2)

These files play key roles in defining the environment for Bash in macOS:

- `~/.profile` – Loaded each time the Terminal app launches; sets up user-specific environment preferences.
- `~/.bashrc` – Contains export statements and environment configurations specific to Bash sessions.
- `/etc/paths` – The main file listing default system paths that build the PATH environment variable across users.
  
    > *Note:* Non-terminal applications in macOS do not inherit the system-wide PATH and MANPATH variables that Terminal does. To set environment variables for GUI applications, use `~/.MacOSX/environment.plist` as recommended by Apple (see Technical Q&A QA1067).
  
- `~/.bash_profile` – Only read once upon logging in, making it specific to login sessions.

### How These Files Are Loaded (1.3)

As documented on Wikipedia, Bash reads configuration files in a specific order depending on the session type (login vs. non-login):

- `~/.bash_profile` – Executed when you log in; it often sources `~/.bashrc`.
- `~/.bashrc` – Primarily for setting up interactive, non-login shells.
- `~/.bash_login`, `~/.bash_logout`, and `~/.bash_history` – Used for login/logout events and storing command history.

When a user logs in, Bash runs `~/.bash_profile`, which often sources `~/.bashrc`. While `~/.bashrc` is not a login initialization file by itself, it sets up shell-specific configurations that `~/.bash_profile` can reference.
