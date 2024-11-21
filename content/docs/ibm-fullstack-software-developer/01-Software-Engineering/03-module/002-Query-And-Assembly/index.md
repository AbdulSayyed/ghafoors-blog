---
title: Query and Assembly Programming Languages
linkTitle: Query and Assembly
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
 - /images/se/mod3/program.jpeg
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

## High and Low Level Programming Languages

Programming languages can be categorized into high-level and low-level languages. In this section, we will compare these two levels, focusing on query languages and assembly languages.

### High-Level Programming Languages Characteristics

- Human-readable: Uses syntax close to natural language for ease of coding and debugging.
- Examples:
  - Query languages: Used to interact with databases.
  - Structured programming languages: Pascal.
  - Object-oriented programming languages: Python.

### Query Languages Definition

- A query language enables communication with databases, allowing users to retrieve or manipulate data efficiently.

- Use predefined instructions to create, read, update, and delete (CRUD) data in databases.
- Often operate on structured tables of rows and columns.

#### SQL and NoSQL

1. SQL (Structured Query Language):

   - Most prevalent query language.
   - Relational databases with predefined schemas.
   - Examples of statements:
     - SELECT: Retrieve data.
     - CREATE: Define new database objects.
     - UPDATE: Modify existing records.
     - DELETE: Remove data.

2. NoSQL (Not Only SQL):
   - Non-relational databases with dynamic schemas for unstructured data.
   - Designed for flexibility and scalability.

#### Other Query Languages

<!-- q: What does AQL stands for in Query language? -->

- AQL: ArangoDB Query Language.
- CQL: Cassandra Query Language.
- Datalog: Declarative query language for logic programming.
- DMX: Data Mining Extensions for predictive analytics.

---

## Low-Level Programming Languages

### Characteristics

- Machine-Oriented: Uses symbols to represent machine code instructions (binary: 0s and 1s).
- Processor-Specific: Tied closely to the hardware architecture.

---

### Assembly Languages

#### Definition

- A low-level programming language that represents machine code instructions using mnemonic symbols.

#### Syntax and Structure

- Standard Format: One statement per line, with optional fields:
  - Instruction/Mnemonic: Specifies the operation (e.g., ADD, SUB, LDA).
  - Operands: Specify the data or location for the operation.
  - Comments: Optional explanations for clarity.

#### Translation Process

- Translated by an assembler, not a compiler or interpreter.
- One assembly instruction corresponds directly to one machine code instruction.

#### Examples of Assembly Languages

- ARM: Used in mobile devices.
- MIPS: Found in embedded systems.
- x86: Common in personal computers.

> Since assembly language is not used these days, for those who have never encountered its syntax here is an example of adding two numbers ussing x86 assembly language:

```Assembly
.data
    num1    DWORD   5         ; First number
    num2    DWORD   10        ; Second number
    result  DWORD   ?         ; Result of addition

.code
main PROC
    mov eax, num1             ; Load num1 into the EAX register
    add eax, num2             ; Add num2 to EAX
    mov result, eax           ; Store the result in the 'result' variable

    ; Optional: End the program (required for proper exit in Windows)
    invoke ExitProcess, 0     ; Terminate program
main ENDP
END main

```

---

## Key Differences Between Query and Assembly Languages

| **Aspect**               | **Query Languages**                    | **Assembly Languages**                   |
| ------------------------ | -------------------------------------- | ---------------------------------------- |
| **Category**             | High-Level                             | Low-Level                                |
| **Purpose**              | Database queries and manipulation      | Direct machine code representation       |
| **Translation Tool**     | Database Management System (DBMS)      | Assembler                                |
| **Examples**             | SQL, AQL, CQL                          | ARM, MIPS, x86                           |
| **Operation Complexity** | Single query can perform complex tasks | Single instruction per machine operation |

---

## Summary

- High-Level Languages:

  - Include query languages like SQL, structured languages like Pascal, and object-oriented languages like Python.
  - Query languages are widely used for database management (CRUD operations).
  - SQL remains the dominant query language, with alternatives like AQL and NoSQL.

- Low-Level Languages:
  - Include assembly languages like ARM, MIPS, and x86.
  - Translate one-to-one to machine code and are hardware-specific.
  - Assemblers are used for translation, with mnemonics representing operations.

By understanding these languages, developers can select the right tool for tasks ranging from database management to hardware-level programming.

---

## FAQ

{{< bs/accordion " " >}}
