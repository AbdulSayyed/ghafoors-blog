---
title: '001 Llm Types'
# linkTitle:
date: 2024-12-12T03:53:21Z
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

Summary.

<!--More-->

## Types of LLMS

According to ... there are 3 types of LLMS:

1. Type 1: Base LLM
2. Type 2: Instruction Tuned LLM
3. Type 3: Instruction and Data Tuned LLM

### Type 1: Base LLM

- This is the simplest form of LLM where the LLM is used to predict next words, based on the next training data.
- The LLM is trained on a large corpus of text data. This training data is used to predict the next word in a sentence.
- For example, if you write a sentence like "I am going to the", the LLM will predict the next word as "store". This is because the training data has a lot of sentences that start with "I am going to the store".
- Similarly if you write a sentence like "I am going to the", the LLM will predict the next word as "park". This is because the training data has a lot of sentences that start with "I am going to the park".
- But if you are writing a shakespeare poem, and you have written one line "To be or not to be", the LLM will predict the next word as "that" because the training data has a lot of sentences that start with "To be or not to be that is the question".

This is the simplest form of LLM which predicts the next word based on the training data. However, it does not read your mind but follows the patterns in the training data to predict the next word or sentence. For example, if you write "What is the population of India?" the LLM might predict "What is the population of China?" because the training data contains many sentences that start with "What is the population of China?". It will also predict the next word or phrase based on the context of the current text. For instance, while you are writing this paragraph, it will continue to predict the next word or phrase based on what is present in the training data.

### Type 2: Instruction Tuned LLM

- it tries to follow the instrucions insted of following the training data.
- It tires to first understand the instructions by fine tuning it and then predict the next word or sentence based on the instructions.
- So in this type if you are to write "What is the population of India?" the LLM would give you the correct answer by searching the topic related to your instructions.
- This type of LLM is more accurate than the base LLM because it follows the instructions given by the user but it does not mean that the answer will be correct. So you have to be careful.
- This model uses RHLF (Reinforcement Learning with Human Feedback) and they are becoming more popular as they are said to be `Helpful, Hones and Harmless`.
- Think of this module as a smart person who does well but needs to instructed clearly. So if you write a prompt that is not clear and concise, the LLM will not be able to give you the correct answer.

So the first rule of using this type of LLM is to be `clear and concise or specific` in your instructions. If you are not clear, the LLM will not be able to give you the correct answer.

---

## Conclusion

---

## FAQ
