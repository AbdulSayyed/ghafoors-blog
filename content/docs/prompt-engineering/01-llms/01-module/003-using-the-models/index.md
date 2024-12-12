---
title: 'Using the Model'
linkTitle: 'Using the Model'
date: 2024-12-12T09:34:43Z
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

## Guide lines for prompting

Two prompts principles are used in this notebook to write `effictive` prompts for large language models.

### Setting Up the environment

1. Load api key and relevant python libraries.

```python
import os

from openai import OpenAI
from dotenv import load_dotenv, find_dotenv

_= load_dotenv(find_dotenv())

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
```

```python
# import openai
import os

from openai import OpenAI
from dotenv import load_dotenv, find_dotenv

_= load_dotenv(find_dotenv())

# openai.api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
```

- A helper function is created to get the model working

```py
def get_answer(prompt):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return completion.choices[0].message.content
```

### Prompting principles

1. Write clear and specfic prompt
2. Give the model time to think

When writing prompt use delimiters to indiacate distinct part of the input, they can be anyting like `...`, `<....>`, `<tag>...</tag>`.

```python
def get_answer(prompt):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return completion.choices[0].message.content
```

### Preparing the prompt to test

- Paragraph with spelling mistakes

paragraph_with_errors = """
Ths is a smple paragraf with severl speling erors. It is meant to test the abilty of the model to corect these mistkes.
"""

- Prepare the prompt

prompt = f"Please correct the spelling mistakes in the following paragraph:\n\n{paragraph_with_errors}"

- to run the above call the function by passing the prompt

```py
response = get_answer(prompt)
print(response)
```

```python
paragraph_with_errors = """
Ths is a smple paragraf with severl speling erors. It is meant to test the abilty of the model to corect these mistkes.
"""

# Prepare the prompt

prompt = f"Please correct the spelling mistakes in the following paragraph:\n\n{paragraph_with_errors}"

response = get_answer(prompt)
print(response)
```

    This is a simple paragraph with several spelling errors. It is meant to test the ability of the model to correct these mistakes.

```python

```

## Conclusion

---

## FAQ
