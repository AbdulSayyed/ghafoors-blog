---
title: 'Language Fundamentals'
linkTitle: Language Fundamentals
date: 2024-12-09T15:17:21Z
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

---

## Programming Language Fundamentals (1.)

A programming language is a formal system of communication between humans and computers.

### Core Components (1.1)

- **Purpose**:
  1. Automating repetitive tasks
  2. Solving problems
  3. Building applications and systems
  4. Communicating with hardware

#### Variables

## Data Types (2.)

### Primitive Types (2.1)

1. **Numeric**:
   1. Integer
   2. Floating Point
2. **Boolean**
3. **Character**
4. **String**
5. **Null**
6. **Undefined**

### Non-Primitive Types (2.2)

1. **Objects and Collections**:
   1. Objects
   2. Arrays
   3. Maps
   4. Sets
2. **Language-Specific Types**:

   1. Python:

      - Tuples
      - Dictionaries
      - Frozen Sets
      - Bytes and ByteArrays

   2. JavaScript:
      - Date Objects
      - RegExp
      - Functions as Objects
      - WeakMaps/WeakSets

### Type Systems (2.3)

1. **Type Coercion**:

   1. Implicit Conversion
   2. Explicit Conversion

2. **Type Checking**:
   1. Static Type Checking
   2. Dynamic Type Checking

## Implementation Considerations (3.)

1. **Memory Management**:

   1. Efficient Usage
   2. Resource Allocation

2. **Error Prevention**:

   1. Type Safety
   2. Bug Prevention

3. **Performance**:
   1. Optimization Techniques
   2. Best Practices

---

### 2. Building Blocks of a Programming Language

| Concept         | Description                                            |
| --------------- | ------------------------------------------------------ |
| **Tokens**      | Keywords, identifiers, operators, delimiters, literals |
| **Variables**   | Named storage locations                                |
| **Expressions** | Combinations that evaluate to a value                  |
| **Statements**  | Complete units of execution                            |
| **Functions**   | Reusable blocks of code                                |

#### Tokens

| Category        | Description                                           | Example                      |
| --------------- | ----------------------------------------------------- | ---------------------------- |
| **Keywords**    | Reserved words predefined by the language             | `if`, `else`, `for`          |
| **Identifiers** | Names of variables, functions, user-defined elements  | `myVariable`, `calculateSum` |
| **Operators**   | Symbols that perform operations                       | `+`, `-`, `*`, `==`          |
| **Delimiters**  | Characters that separate statements or groups of code | `;`, `{}`, `()`              |
| **Literals**    | Fixed values such as numbers, strings, or booleans    | `42`, `"hello"`, `true`      |

#### Variables

| Characteristic | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Name**       | Identifier used to reference the variable                                                |
| **Data type**  | Type of data the variable can hold (e.g., integer, string)                               |
| **Scope**      | Context in which the variable is accessible (e.g., global, local)                        |
| **Mutability** | Whether the variable can be changed after its initial assignment (constant vs. variable) |

#### Expressions

- A combination of values, variables, and operators that evaluate to a value.

Example:

```javascript
let result = (5 + 3) * 2; // Expression that evaluates to 16
```

#### Statements

- Instructions that perform actions or control the flow of a program.
- Types:
  - **Declaration**: Defining variables or functions.
  - **Assignment**: Assigning values to variables.
  - **Control flow**: Making decisions (e.g., `if`, `switch`) or loops (`for`, `while`).

#### Functions

- Reusable blocks of code designed to perform a specific task.
- Consist of:
  - **Function name**
  - **Parameters** (optional)
  - **Return value** (optional)

---

## 3. Data Types in Programming

### 3.1 What are Data Types?

Data types define the kind of data that can be stored and manipulated in a program. They ensure that operations on data are performed correctly.

### 3.2 Primitive Data Types

- Primitive types are the basic, low-level building blocks for representing data. They are immutable in nature (values cannot be altered after creation). Common primitive data types include:

#### Common Immutable Primitive Data Types

| Data Type          | Description                                       | Example           |
| ------------------ | ------------------------------------------------- | ----------------- |
| **Integer**        | Whole numbers                                     | `1`, `-45`, `0`   |
| **Floating Point** | Numbers with decimals                             | `3.14`, `-0.001`  |
| **Boolean**        | Represents truth values                           | `true`, `false`   |
| **Character**      | A single character                                | `A`, `z`, `7`     |
| **String**         | A sequence of characters                          | `"Hello, World!"` |
| **Null**           | Represents the absence of a value or object       | `null`            |
| **Undefined**      | Represents an uninitialized variable (JavaScript) | `undefined`       |

- Non-primitive data types, on the other hand, are mutable and can store multiple values or data of different types. They include:

#### Common Non-Primitive Data Types

| Data Type                   | Description                                 | Example                                           |
| --------------------------- | ------------------------------------------- | ------------------------------------------------- |
| **Objects**                 | Collections of key-value pairs              | `let person = { name: 'John', age: 30 };`         |
| **Arrays**                  | Ordered lists of elements                   | `let numbers = [1, 2, 3, 4];`                     |
| **Functions**               | Treated as objects, passed as arguments     | `function greet() { return 'Hello!'; }`           |
| **Tuples**                  | Ordered, immutable sequences (Python)       | `coordinates = (10, 20)`                          |
| **Date**                    | Represents dates and times (JavaScript)     | `let today = new Date();`                         |
| **RegExp**                  | RE objects for pattern matching             | `let pattern = /[A-Z]+/g;`                        |
| **Special Data Structures** | Maps, Sets, WeakMaps, WeakSets (JavaScript) | `let map = new Map(); map.set('key1', 'value1');` |
| **Sets**                    | Collections of unique elements              | `let uniqueNumbers = new Set([1, 2, 3]);`         |
| **Dictionaries**            | Collections of key-value pairs (Python)     | `let dictionary = { 'key': 'value' };`            |
| **Bytes and ByteArrays**    | Handling binary data (Python)               | `binary_data = bytes([65, 66, 67])`               |
| **Frozen Sets**             | Immutable version of sets (Python)          | `frozen = frozenset([1, 2, 3])`                   |

- **Lists**: They are ordered collections of elements that can contain duplicates. They are known by different names in various programming languages, commonly used for storing sequences of data.:

| Language   | Name       | Example                                        |
| ---------- | ---------- | ---------------------------------------------- |
| Python     | Lists      | `my_list = [1, 2, 3]`                          |
| JavaScript | Arrays     | `let arr = [1, 2, 3];`                         |
| Java       | ArrayLists | `ArrayList<Integer> list = new ArrayList<>();` |
| C++        | Vectors    | `std::vector<int> vec = {1, 2, 3};`            |
| C#         | Lists      | `List<int> list = new List<int>();`            |
| Ruby       | Arrays     | `arr = [1, 2, 3]`                              |
| Swift      | Arrays     | `var arr = [1, 2, 3]`                          |
| Kotlin     | Lists      | `val list = listOf(1, 2, 3)`                   |
| Scala      | Lists      | `val list = List(1, 2, 3)`                     |

#### Numeric Types

- **Integer**: Whole numbers (e.g., `1`, `-45`, `0`).
- **Floating Point**: Numbers with decimals (e.g., `3.14`, `-0.001`).

Example in JavaScript:

```javascript
let age = 25; // Integer
let pi = 3.14159; // Floating Point
```

#### Boolean

- Represents truth values: `true` or `false`.
- Used in conditions and logical operations.

Example:

```javascript
let isActive = true;
if (isActive) {
  console.log('Active');
}
```

#### Character

- A single character (e.g., `A`, `z`, `7`).
- Represented using single quotes in many languages (`'a'`).

#### String

- A sequence of characters (e.g., `"Hello, World!"`).
- Often enclosed in double or single quotes.

Example:

```javascript
let greeting = 'Hello, World!';
```

#### Null

- Represents the absence of a value or object.

Example:

```javascript
let value = null;
```

#### Undefined (specific to JavaScript)

- Represents an uninitialized variable.

Example:

```javascript
let result;
console.log(result); // undefined
```

---

#### 3.3 Non-Primitive Data Types

Non-primitive data types are more complex and can store multiple values or data of different types.

1. **Objects**:

   - Collections of key-value pairs.

   Example:

   ```javascript
   let person = {
     name: 'John',
     age: 30,
     isActive: true,
   };
   console.log(person.name); // "John"
   ```

2. **Arrays**:

   - Ordered lists of elements, indexed starting from 0.

   Example:

   ```javascript
   let numbers = [1, 2, 3, 4];
   console.log(numbers[0]); // 1
   ```

3. **Functions (First-Class Citizens)**:

   - Functions in JavaScript are treated as objects and can be passed as arguments or assigned to variables.

   Example:

   ```javascript
   function greet() {
     return 'Hello!';
   }
   ```

4. **Specialized Data Structures**:

   - Maps, Sets, WeakMaps, WeakSets (in JavaScript).

   Examples:

   - **Map**: Key-value pairs with unique keys.

   ```javascript
   let map = new Map();
   map.set('key1', 'value1');
   ```

5. **Tuples** (specific to Python):

   - Ordered, immutable sequences of elements.
   - Similar to lists but cannot be modified after creation.

   Example (Python):

   ```python
   coordinates = (10, 20)
   person = ('John', 30, True)
   ```

6. **Date Objects** (JavaScript):

   - Represents dates and times.

   Example:

   ```javascript
   let today = new Date();
   let specific = new Date('2024-01-01');
   ```

7. **RegExp Objects** (JavaScript):

   - Used for pattern matching and text manipulation.

   Example:

   ```javascript
   let pattern = /[A-Z]+/g;
   let email = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
   ```

8. **Bytes and ByteArrays** (Python):

   - Used for handling binary data.

   Example (Python):

   ```python
   binary_data = bytes([65, 66, 67])  # Creates b'ABC'
   mutable_binary = bytearray([65, 66, 67])  # Creates mutable binary data
   ```

9. **Frozen Sets** (Python):

   - Immutable version of sets.

   Example (Python):

   ```python
   frozen = frozenset([1, 2, 3])
   ```

---

### 4. Why Understanding Data Types is Crucial

1. **Efficient Memory Usage**:

- Choosing the right type minimizes memory usage.
- Example: Using an `int` for counters instead of `float`.

#### Memory Space Taken by Different Types of Numeric Variables

| Data Type | Memory Space | Example Usage                    |
| --------- | ------------ | -------------------------------- |
| `int`     | 4 bytes      | `int counter = 10;`              |
| `float`   | 4 bytes      | `float temperature = 23.5f;`     |
| `double`  | 8 bytes      | `double distance = 12345.678;`   |
| `short`   | 2 bytes      | `short age = 25;`                |
| `long`    | 8 bytes      | `long population = 7000000000L;` |

- Using an `int` for simple counters instead of a `float` can save memory and improve performance.
- For large numbers, `long` is preferred, but it uses more memory compared to `int`.

Example in C++:

```cpp
int counter = 10; // Uses 4 bytes
float temperature = 23.5f; // Uses 4 bytes
double distance = 12345.678; // Uses 8 bytes
short age = 25; // Uses 2 bytes
long population = 7000000000L; // Uses 8 bytes
```

Example in Python:

```python
counter = 10 # int, memory usage depends on the implementation
temperature = 23.5 # float, typically 24 bytes in CPython
distance = 12345.678 # float, typically 24 bytes in CPython
```

Understanding the memory space taken by different types helps in writing efficient and optimized code.

2. **Error Prevention**:

   - Data type mismatches can cause errors. Languages like TypeScript enforce type safety.

3. **Performance Optimization**:

   - Knowing the difference between mutable and immutable types can improve performance.

4. **Enabling Polymorphism**:
   - Understanding objects and their types helps implement reusable and dynamic code.

---

---

### **1. Type Coercion**

**Definition**: Type coercion is the automatic or implicit conversion of values from one data type to another in a programming language. For example, a string might be coerced into a number or vice versa, depending on the operation.

#### Example (JavaScript):

```javascript
console.log('5' - 3); // Output: 2 (string '5' coerced to number)
console.log('5' + 3); // Output: '53' (number 3 coerced to string)
```

**Explanation**:

- In the subtraction operation (`'5' - 3`), JavaScript converts the string `'5'` into a number because subtraction is a numerical operation.
- In the addition operation (`'5' + 3`), JavaScript treats the `+` as a string concatenation operator when one operand is a string.

#### Importance:

- While type coercion can be useful, it can lead to bugs if not understood or anticipated. Many developers prefer stricter type systems to avoid such issues.

---

### **2. Type Checking**

**Definition**: Type checking refers to verifying the data types of values to ensure operations are performed correctly.

- **Static Type Checking**: Performed at compile-time (e.g., in TypeScript or Java).
- **Dynamic Type Checking**: Performed at runtime (e.g., in Python or JavaScript).

#### Static Example (TypeScript):

```typescript
function add(a: number, b: number): number {
  return a + b;
}
add(1, '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

#### Dynamic Example (Python):

```python
def add(a, b):
    return a + b

print(add(1, "2")) # TypeError at runtime
```

#### Importance

- Static type checking helps catch errors early during development.
- Dynamic type checking offers flexibility, but errors might only appear during execution.

---

### **3. Dynamic vs. Static Typing**

**Dynamic Typing**:

- Variables can hold values of any type, and the type is determined at runtime.
- Found in languages like Python, Ruby, and JavaScript.

**Static Typing**:

- Variables must have a defined type at compile time.
- Found in languages like Java, C++, and TypeScript.

#### Comparison Example:

**Dynamic Typing (JavaScript)**:

```javascript
let x = 5; // x is a number
x = 'Hello'; // x is now a string
```

**Static Typing (TypeScript)**:

```typescript
let x: number = 5;
x = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.
```

#### Trade-Offs:

- Dynamic typing allows quick prototyping and flexibility but can lead to runtime errors.
- Static typing provides robustness and early error detection but can be verbose.

---

### **Why These Concepts Matter**

- **Maintainability**: Understanding type coercion and type systems helps in writing more predictable code.
- **Performance**: Static typing can lead to optimized code as types are known at compile time.
- **Error Reduction**: Static checking avoids type-related bugs, while dynamic typing provides flexibility in rapidly changing codebases.

If you'd like to explore these concepts further or dive into additional examples, let me know!

<!--More-->
