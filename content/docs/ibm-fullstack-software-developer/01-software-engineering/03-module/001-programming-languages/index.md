---
title: Compiled and Interpreted Programming Languages
linkTitle: Programming Languages
date: 2024-11-18T22:42:23+08:00
draft: true
description:
noindex: false
# comments: false
nav_weight: 1
# nav_icon:
#   vendor: bootstrap
#   name: toggles
#   color: '#e24d0e'
series:
  - Docs
  - IBM-FD
categories:
#  -
tags:
#  -
images:
#  -
# menu:
#   main:
#     weight: 100
#     params:
#       icon:
#         vendor: bs
#         name: book
#         color: '#e24d0e'
---

## What Are Programming Languages?

Programming languages help us communicate with computers. Unlike humans, computers don't use natural language; they understand **machine code**, which is binary—**1s and 0s**. To bridge the gap, we use **human-readable programming languages**, which make it easier to write instructions for computers.

Programming languages generally fall into two broad categories:

- **Interpreted languages**
- **Compiled languages**

Each category serves specific purposes, and the choice of language often depends on the goals of the project.

### Interpreted Programming Languages

Interpreted languages, sometimes called **scripted languages**, rely on an **interpreter** to execute code. This interpreter translates **human-readable source code** into machine code at runtime.

Interpreted programming languages are designed for smaller tasks, often referred to as scripting. The source code runs through an interpreter, which is integrated into the operating system or web browser.

#### Features of Interpreted Languages

- **Platform Versatility**: Code can run on different platforms, as long as the appropriate interpreter is available.
- **Ease of Use**: Many interpreted languages are beginner-friendly, making them popular for quick development tasks.
- **Repetitive Scripts**: Ideal for tasks that need frequent execution, such as automating processes.
- **Performance**: Slower than compiled languages because translation happens during execution.
- - **Script Code**: Automates tasks by executing source code line by line.
- **Flexibility**: Can run on almost any operating system with the appropriate interpreter.

#### Examples of Interpreted Languages

- **JavaScript**: A lightweight scripting language commonly used in web browsers.
- **Python**: Known for its simplicity and wide adoption in web development, data science, and automation.
- **Lua**: A lightweight scripting language often used in game development.
- **HTML**: A markup language interpreted by web browsers to structure and display web pages.

---

### Compiled Programming Languages

Compiled languages are used to create **standalone executable programs**. Instead of translating code during runtime, these languages use a **compiler** to convert human-readable source code into machine code before execution.

A **compiler program** processes the source code and converts it into a machine-readable **executable file**. Once compiled, the program can be executed directly on the device without the need for additional translation.

Compiled programming languages create executable files, suited for more complex, larger tasks. These programs are installed directly on a device.#### Features of Compiled Languages

- **Performance**: Programs run faster since translation into machine code is done beforehand. They run faster as they are installed on the device.
- **Complexity**: Best suited for large, complex applications. Writing code takes longer but offers significant performance benefits.
- **Reusable Executables**: The compiled file can be run repeatedly without recompiling.

#### Examples of Compiled Languages

- **C, C++, and C#**: Used to create operating systems like Linux, Microsoft Windows, and macOS.
- **Java**: Popular for cross-platform applications, such as the Android operating system. It requires the Java Virtual Machine (JVM) to run, and is cross-platform, working on macOS, Windows, and Linux.
- **Go (Golang)**: A modern compiled language developed by Google, known for its simplicity and performance in building scalable systems.
- **Rust**: A systems programming language that focuses on safety and concurrency, often used as an alternative to C++ in performance-critical applications.

### Real-World Usage

For instance, when you update your operating system (e.g., Microsoft Windows), the process involves downloading an **installation program**. This program, written in a compiled language, contains machine code instructions that your device can execute directly.

---

## Key Takeaways

- **Interpreted Languages**:

  - Run scripts dynamically at runtime.
  - Examples include JavaScript, Python, and HTML.

- **Compiled Languages**:
  - Generate standalone executable files for larger, more complex programs.
  - Examples include C, C++, and Java.

Understanding these categories helps us choose the right tools for specific tasks, ensuring optimal performance and ease of development.

---

### Comparing Compiled and Interpreted Programming Languages

In this section, a comparison between interpreted and compiled programming languages is presented, highlighting their distinct characteristics. Understanding these differences aids developers in selecting the most appropriate language based on their experience, user requirements, and efficiency.

### Choosing a Programming Language

Developers select a programming language based on:

- Their experience and trust in the language.
- What is best for their users.
- The efficiency of the language for the task at hand.

The use case of interpreted Languages: for a client requesting webpage views data, an interpreted language can script the task to retrieve and display the data efficiently.

The use case of compiled languages: for creating a spreadsheet program to view and manage data, a compiled language like C could be used to develop a robust application.

### Key Differences

| Feature              | Interpreted Languages                                    | Compiled Languages                                   |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| **Availability**     | Runs across multiple platforms or in the cloud           | Available to users with the same operating system    |
| **Ease of Learning** | Easier to learn and use                                  | More difficult due to larger program complexity      |
| **Task Suitability** | Better for small, repeated processes (e.g., web scripts) | Ideal for large tasks like running operating systems |

---

## Examples of Programming Languages

### C Family

- **C**: The foundational programming language, highly efficient and case-sensitive. It's widely used for operating systems, embedded systems, and applications requiring high performance.
- **C++**: An extension of C that supports object-oriented programming. It is commonly used in game development, real-time simulations, and software requiring high performance.
- **C#**: A modern, object-oriented language developed by Microsoft, often used in web and desktop application development, as well as game development with Unity.

### Java

- **Java**: A compiled, case-sensitive, object-oriented programming language designed for portability. Its "write once, run anywhere" capability makes it popular for enterprise applications and Android development.

### Python and JavaScript

- **Python**: A versatile and interpreted programming language, known for its readability and extensive libraries. It's used in web development, data science, machine learning, and automation.
- **JavaScript**: An interpreted, high-level language primarily used for adding interactivity to websites. It can be used both client-side (in web browsers) and server-side (with Node.js).

### HTML

- **HTML (HyperText Markup Language)**: While technically a markup language rather than a programming language, HTML is crucial for structuring and displaying content on web pages. It is primarily case-insensitive and uses tags to define elements on a page.

## Conclusion

Interpreted programming languages execute source code through an interpreter, making them suitable for repetitive tasks on browsers or operating systems. Compiled programming languages create executable files for larger programs, like operating systems. Each has its advantages and specific use cases, making them essential tools in a developer's toolkit.

---

## FAQ

{{< bs/accordion "languages.faq" >}}
