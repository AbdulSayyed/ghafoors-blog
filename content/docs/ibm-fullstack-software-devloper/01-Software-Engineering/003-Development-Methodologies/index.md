---
date: 2024-11-17T22:42:23+08:00
title: Software Development Methodologies
# linkTitle: Why 
series:
  - IBM-FD
categories:
  - Software-Engineer
tags:
  - SDLC
images:
  - "/images/fsdc/sdlc.webp?height=640"
featured: false
nav_weight: 3
---



## Introduction

- Software development methodologies help teams improve communication, clarify processes, and manage information sharing.
- Three approaches are discussed: **Waterfall**, **V-Shape Model**, and **Agile**.

## Waterfall Method

- **Process**: Sequential; each phase completes before the next starts.
- **Planning**: All requirements and designs are defined upfront.
- **Customer Involvement**: Minimal until the testing phase.
- **Pros**:
  - Easy to understand and follow.
  - Clear stages make role allocation straightforward.
  - Planning upfront aids in budgeting and resource allocation.
- **Cons**:
  - Inflexible to changes in requirements.
  - Long intervals between releases.
  - Difficult to address unforeseen complications.

## V-Shape Model

- **Process**: Sequential; phases form a "V" shape with verification on the left and validation on the right.
- **Testing**: Test plans are created during verification and executed during validation.
- **Stages**:
  - Verification: Planning, system design, architecture design, module design.
  - Validation: Unit testing, integration testing, system testing, acceptance testing.
- **Pros**:
  - Easy to understand and use.
  - Rigid structure saves time during validation.
- **Cons**:
  - Very rigid; does not accommodate changes well.
  - Difficult to address issues during the testing phase.

## Agile Method

- **Process**: Iterative; work is done in short cycles called sprints (1-4 weeks).
- **Customer Involvement**: Feedback is integrated at the end of each sprint.
- **Key Features**:
  - Deliverables: Working code in every sprint demo.
  - Focus: Incremental development of a **Minimum Viable Product (MVP)**.
  - Adheres to the **Agile Manifesto**:
    - Individuals and interactions > processes and tools.
    - Working software > comprehensive documentation.
    - Customer collaboration > contract negotiation.
    - Responding to change > following a plan.
- **Pros**:
  - Accommodates changing requirements.
  - Encourages ongoing research, planning, and testing.
  - Modular design supports integration of smaller code chunks.
- **Cons**:
  - Difficult to plan budgets and schedules upfront.
  - Overall product scope can remain undefined for a longer time.

## Comparison

| Method       | Type       | Pros                                | Cons                                  |
|--------------|------------|-------------------------------------|---------------------------------------|
| Waterfall    | Sequential | Easy to follow, clear stages.       | Inflexible, hard to change mid-cycle. |
| V-Shape      | Sequential | Saves time with planned testing.    | Extremely rigid, tough to revise.     |
| Agile        | Iterative  | Flexible, continuous feedback.      | Hard to estimate costs and timelines. |

## Conclusion

- Waterfall and V-Shape models are structured and straightforward but struggle with adaptability.
- Agile excels in flexibility and customer feedback but poses challenges in upfront planning and scope definition.

---

## FAQ

{{< bs/accordion "methodologies.faq" >}}