---
date: "2016-11-08"
draft: false
title: "JavaScript Variables"
categories:
  - "Programming Languages"
description: "All about JavaScript Variables."
tags:
  - "JavaScript"
  - "Variables"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---


## Introduction to variables

In computer programming, a variable represents a very small chunk of  memory which is a part of memory pool reserved for a program in which it is declared to allow the manipulation of its value. 

For example, if you want to add two numbers, say 5 and 8 and would like to see the result displayed on your standard output. You would ideally need to have three variables so that you can hold their values into these variables. Let's say `x,y and z` are those variables which will hold the values of 5,8 and their sum respectively.

The process of instructing to a computer program to hold some space for one of these variables  is known as **declaring a variable**. Declaration of variables put a request to the program in which it is written, asking for a small piece of memory to be used. How much memory you need is not decided by your program but it is you who tells the program how much you need. And this is done by specifying its type, therefore, a request for a variable which is going to hold  only true or false value would not require a lot of space from the memory, compare to the variable which is meant to hold your home address.

In [strongly typed languages](link), a variable type is mentioned at the time of declaring a variable so the program knows how much memory it has to allocate to a particular variable from its own given heap of memory. That is right, every program when run are allocated some space by the operating system and from within that space a variable declared by you gets its portion of memory.

Since JavaScript was not intended to be a strongly typed language by design, it had never offered this option to declare variables with its type until recently when [ECMA Script 6](#) was released. This topic will be discussed in chapter [book-mark](#). Coming back to our topic of variables, a programmer  must have some concept of what goes on  when the program  is run.

In JavaScript it is the host environment commonly known as the interpreter or the [engine](#) decides how much memory is needed and when to free that memory. Freeing the memory means that if you are done with that declared variables you must free that space by instructing the program. It is by the design of this language that all handling with memory is left to the interpreter. So the programmer only declares the variable uses it and forgets about the memory manipulation.

once you declare a variable in JavaScript using a keyword `var` followed by itsName ( known as identifier), a space is reserved in a memory that space has the address just like your or mine home address but obviously, it has not got a post code or a zip code but it is simply an address in a language that a computer understand. Thus, a variable declared like `var x` is stored in a table like fashion by the interpreter so that it knows which address of the memory is pointed by x, y or z. By keeping this information the interpreter, compiler or any other internal program responsible for handling memory management is capable of managing an allocated space. A typical declaration of variable in JavaScript would look like as follows

```javascript
        var x; // declaring a variable, 
        var myName = "Ghafoor Sayyed"; // declaration and assignment
```

where the  `var` is a keyword already known to JavaScript interpreter, so that when it comes across, the interpreter knows it has to reserve some space in memory. So it does, but it has to point that space in a memory so that it can remember and manipulate it according to the programmer's wish. And this pointing is done by using the name you have provided in this case it is `myName`. And what is the word `myName` is doing here is identifying the address where either something is stored or will be stored. In the above case, we already have stored the value in string format. By nature of its job the declared variable name is known as an **identifier**. The value stored in the space reserved by the keyword `var`is not manipulated by its contents but by the address where it is kept therefore what you keep it in this space is of no importance from the storage point of view, whether it is Jack or Jill or anything else.

once we have some idea about the variable declaration it is also time to pay some attention towards its contents. A student of secondary class knows that the value of small `g` in an equation of `w = mg ` is a constant and never changes on the Earth thus it would be a right decision to store it in a constant instead  of variable.

The above brief discussion is no way near the articles and books are written about them but is just an introduction to what a programmer must understand and ponder over before starting the journey of writing a piece  of code.
Following are the names of  books which you may like to refer in your own time.

1. JavaScript:The Definitive Guide by David Flanagan published by O'REILLY
2. JavaScript:The Good Parts by Douglas Crockford published by O'Reilly

### Declaring a variable

In order to use a variable, in JavaScript or in any other computer programming language,  it has to be declared first. So that a compiler, interpreter or any other piece of software responsible for handling user-defined values, does the initial preparation like reserving some space in memory.

Basically, a  variable is a place holder in  memory to store its value. Since there are different types of values which can be stored inside a variable. The exact type of the variable concerned is not known until it has been assigned a value. Once a value has been assigned its type can be checked using JavaScript `typeof`  operator  and its value can be also be logged to any output device. For example, to output the value to specific console another function called `console.log(x)` can be used.

Let's start the ball rolling and look at the example below.

```javascript
    x;        // Ref-Error x is not defined
    console.log(x);        // Execution never reaches here
```

The error produced or  ( more precisely the exception thrown )  is **ReferenceError x is not defined** can be avoided by using a   keyword `var`. The keyword `var` preceded by a legal variable name declares the existence of a variable to the interpreter so that it can do its initial preparation and **identify** it if this word comes across again. 

```javascript
    var x;     // a semicolon is not needed but a good practice to use it
    console.log(x);     // undefined
```

Once a `var` keyword is used the JavaScript V8 engine does not complain. The keyword `var` instructs the interpreter to hold some space into memory and deals with this variable by identifying it as a user defined variable. At this stage,  neither the type nor the value of this variable is  known.

>Note:In JS declaring a variable also initialized it with a predefined value of undefined.

Understand the difference between not identifying the variable thus throwing an error and identifying it and logging its value as undefined. The code below may define the state of your variable.

```javascript
    The key word var holds a space into memory pointed by variable x and initialize it with default value of undefined
         _______________________________________
        |    console.log(x) => undefined        |
        |    console.log(typeof(x)) => undefined|
        |_______________________________________|
                            ^
                            |      
                            |     
                            x
```

Since no value is assigned to `x`, The JavaScript engine provides a special built-in primitive type  called `undefined`. This is right `undefined` is not an error but it is a JavaScript way to handle the variables by providing a built-in type. This is one of the reasons that JavaScript is known as loosely typed language. In strongly typed language a compiler may have complained about its type of not being defined.

### Variables are hoisted.

The word hoisting refers to lifting something up. This exactly happens when the variable `x` is used before it is even declared.

```javascript
    console.log(x);        // undefined
    var x;
```

The above produced no errors. It happens because the way the code is interpreted. Whether it is a variable declaration or a function declaration both of them are moved up or treated as they are declared at the top of the code before they are executed. Thus, the above code will be treated exactly the same way as in its predecessor code block. **This behaviour in JavaScript is called  hoisting**.

The hoisting only takes place with variable or function deceleration and not with variable or functions assignment. Look at the following example where variable named `x` is assigned a value.

>Note: It is good practice to use semantic name of variables where possible

### Assignment

Assigning a value to any declared variable requires two steps first is to delete whatever is already there and secondly place a new value in that place.

```javascript
    var x = 10;
    console.log(x);     // 10
    console.log(typeof(x));        // number
```

The above code `var x = 10;` consist of two operations and  can be rightly  interpreted in two parts as follows:

1. First, variable `x` is declared. Declaring variable reserves a space in memory which is referenced by the variable identifier in above case it is `x`
2. Second, variable `x` is assigned a value of 10, whose type is of `number` as shown in above code.

The above two steps are known as initialization compare to the declaration which is a one step process. Thus, it can be said that variable `x` has been initialized with a value 10. The part `var x ` declares a variable while the assignment operator `=`  is a command which places 10 into  space reserved by a declaration of `x` . This location in the memory is  pointed by its  identifier  `x`.

In order to use the value of any variable stored in a memory and referenced by the identifier, the variable literal is used. Thus `console.log(x)` logs the value of `x` to a console. To find out its type  a `typeof ` operator is used.

Once a variable is assigned any value, it can be redeclared. Re declaring does not loose the variable value, it remains the same.

```javascript
  var y = 100;
  console.log(y); // 100
  var y; // o.k no error is thrown this time
  console.log(y); // 100
```


### Variables declaration is hoisted not its assignment

What happens when the variable `x` is used before it has been initialized? Keep in mind the difference b/w declaring and initializing.

```javascript
    console.log(x);     // undefined
    var x = 10;
```

The result is `undefined`. The code `var x = 10;` is an initialization
not a mere declaration. Thus, before execution, the existence of variable `x` is known to the interpreter so it won't  throw a `ReferenceError` exception but it will not give you the expected result either.

Instead, it will treat it as a mere declaration, not as initialization. This is what meant when said above that only declaration  is hoisted not an assignment. And when these two steps happen in one statement only the first part is hoisted because the actual assignment takes place after the execution of line 2 thus till the line 2 is executed the value of `x` is not defined. The above code is interpreted as  explained below.

```javascript
    var x;
    console.log(x);     //undefined
    x = 10;
```

>Note:Initialized first use second.

So a rule of thumb is that if a variable is used before it has been initialized its existence is known but its assignment is not. And while it existence in known an exception of "ReferenceError" in not thrown and the assignment operation  does not take place so neither its value nor its type is known.

Once a variable has been initialized with some value. It will always yield that value unless its reference is changed or its value is changed.

```javascript
    var x = 10; // x----> |  10  |<---- place in memory reserved by var and referenced by x

    var y = 20; // y----> |  20   |<---- place in memory reserved by var and referenced by y

    // assign value of y to x
    x = y; // After this command both x and y refer to a same location
            // the initial place reserved by "var x" is lost

            // y-----> |    20   | <-----x

    //note if you defined a variable or a function twice the last assigned value is used.
    var z = 10;
    var z = 20; // this value will be used
    var result = function(){console.log("first defined " + z)};
    var result = function(){console.log("second defined" + z)}; // this will be invoked
    result();
```


## Variables' Scope

The scope of a variable is determined according to the place where it is declared. A variable is said to either have a global or local scope. Variables having global scope means that they are available from anywhere in the program including any functions or a any conditional block. On the contrary a variable of having local scope is not available from anywhere but within its local block. Having said that in JavaScript things are bit different with respect to the local scope. Strictly speaking JavaScript never had local scope as found in other languages, but a function-level scope until ECMAScript-6, where it has introduced a new key word `let` which provides a local scope to any variable in a  block where it is declared.

### How Variables' are assigned scope

JavaScript keyword `var` plays important role in providing scope to a variable but the keyword `var` is not must. JavaScript allows  variables to be declared without them being preceded by `var` in different circumstances.

When a program is run, JavaScript engine has to perform many task even before it is really executed. For example it will first parse the file, look for all the variables and functions declaration and will hoist them at the top level. Next it deals with variables deciding to which group they belong to Global or non-global. If they are global, are they true global or implied global? Consequently  setting their attributes and values accordingly and so on. All these small bits are must for a programmer to understand the process which happens behind the scene even before a code is run.

### What is a true global or implied global variable ?

The answer is very simple  those variables which are declared explicitly i.e., preceded by keyword `var` are grouped as true global variable while those which are not declared but assigned a value are treated as implied global.
```javascript
   var age = 29;    // true global
   height = 5.8;    // implied global
```
### Why is it important?

When a global variable is created, it becomes a property of a Global object. JavaScript engine assigns four attributes to this  this property. The values of theses attributes depends how a variable is declared. For example one of the attribute is `configurable` which value is set to false provided it is a true global. If it was an implied global the value of `configurable` would be set to true. And when it is set to true, the variable can be deleted. Once a variable is deleted it no longer exist hence can not be accessed again as shown below.

```javascript
   var trueGlobal = true;
   impliedGlobal = true;
   //......
   delete.impliedGlobal;
   console.log(impliedGlobal) ;// error 
```

## What are other attributes of a global property?

When a global variable is created it becomes the property of a global object it is also known as the member of that object, this property or member whatever you call it gets some attributes associated with it. The values of these attributes get set depending how they are declared as a true global or implied global. Let's look at the example below which finds out a newly declared global variable's associated attributes. Since it becomes the member of a `global` object the keyword `global` is used in the function.

```javascript
   var price = 100; // true global variable
   console.log(Object.getOwnPropertyDescriptor(global,"price"));
   //{   value: 100,writable: true,enumerable: true, configurable: false } 
```

The above shows that, a  global variable has four attribute namely `value, writable, enumerable and configurable`. We saw earlier if it is not a true global the value of **configurable** is set to true thus it can be deleted otherwise not. If **enumerable** is set to false it can not be enumerated using `for... in ` loop. If **writable** is set to true it indicates that it is not a constant and its value can be changed. Similarly the first one **value** has  its value set to whatever you assigned it when declaring a variable. If you do not assign the value when declaring, it gets assigned the `undefined`. Lets also look at the attributes of an implied global. Its configurable is set to true thus can be deleted.

```javascript
   vat = 0.2;
   console.log(Object.getOwnPropertyDescriptor(global,"vat"));
   // { value: 0.2, writable: true, enumerable: true,  configurable: true }
   delete vat; // o.k 
```

### Global Object's properties attributes

- **Value**: Its value assigned when you declared a variable, if not it gets the default value of `undefined`.
- **Writable**:It can be assigned a new value, the old value can be deleted and new values can be assigned.
- **Enumerable**:As the name indicates that if set to true the variable can be accessed using enumeration like `for..in` loop using `object.keys`. And can be saved permanently using `JSON.stringify` method. In case of false these methods of enumeration can not be applied.
- **Configurable**:To control the other two attributes i.e., its behaviour can be modified which simply means that you can change the value of other attributes. For example you can make them non-enumerable or non writeable or even non configurable.

## Are there many global objects?

You will be using JavaScript either in node.js environment or in a browser. If it is browser, the global object is `window` and if it is a node.js environment it is a `global` itself. This global object gets many functions associated with it to be used which will be discussed in Objects Chapter.

### Is a key word `var` optional?

The common question or say point of discussion among new JavaScript programmers found to be the declaration of a key word `var` whether it is optional or not. The answer lies in understanding of what happens with explicit declaration of a key word `var` or without it, as discussed above the keyword `var` makes it true global. Let's look at the code below. 


```javascript
   var a ; // An explicit declaration of a variable making it a true global
    b ; // it is an error since b is neither declared nor assigned any value
```

When JavaScript  sees a keyword `var` it basically informs the interpreter to do the necessary work and it also dictates  the interpreter:

 1. Not to use reverse traversal  look up for this identifier but use this one. 
 2. And provide it a scope according to the location where it is declared. If it is declared within a function, it gets a local scope or if it is declared outside the function either on the top or somewhere in the file it gets a global scope.

But when it comes across the variable which is declared without a key word `var` as  `b`, first it has to resolve its identity and it does it by traversing back to see if it had already been defined or not. If not, it throws an error. But if it finds the entry, it associates that variable with the first found entry and provide it the corresponding scope.

### How the scope is determined if a same identifier is used to declare a variable more than once ?

If a same identifier is used to declare a variable inside and outside a function. They are two completely different variables. A variable inside a function life only exist when the function code is executed. It gets created and destroyed as many times as the function is invoked and said to have a function scope or local scope, as opposed to the top level identifier which life exist so long the program is being executed.

```js
    var c ;
    //..........
    //........
    c = 20; 
```

The above code shows a variable `c` declared on top, and somewhere else in the program it has been assigned a value. The variable `c` is said to have a global scope as it is not a part of any function. It is also possible to declare a local variable with the same name as global variable.

```javascript
    var d;
    //......
    function fn(){
        var d;  // first found entry of d
        //.....
        d = 20;
        console.log("It is local d :" + d);
    }
    fn();
    console.log("it is global d :" + d);
```

As long as local variable is declared with a keyword `var` it is different from the global variable but if it is not declared but used in a function it will be associated with  the first found entry of that variable thus having a functional level scope.

### What is the difference between function scope and block  scope?

To understand the difference one should understand that programming languages uses a local scope as compared to global scope where a variable is said to have a local scope if it is declared in a block of curly braces. These pair of curly braces can be of an if statement or any other loop like `for` or `do-while`or mere `while` loop but it is not true when it comes to JavaScript. Let's look at the example below and decide whether a variable has a local scope or not.

```javascript
    var x = 11; // global variable accessible from anywhere in the program    
    {
        console.log(x); // o.k global x is accessible from here
             var y = 12; // should get a local scope
    }
    console.log(y);// oops! y is  visible here as well.
```

In the above example the code block should get a local scope and having local scope means that the variable defined inside the block should only exist within the block. But this is not what happens above,the value of variable `y`is printed outside the block which indicates  that JavaScript does not have block level scope. And this statement is true and applies to all ECMAScript  except ECMAScript-6 in which block level scope is defined using two new keywords `let` and `const`. Let's see another example where a local variable is declared in a for loop.

```javascript
   var index = 1;
   for (index; index <= 10; index++){
    var multiplier = 5;
    var product = multiplier * index;
    console.log("The product of "+ multiplier +" * "+ index + " = " + product);
   } 
   console.log("\n\nThe multiplier declared in For block is:" + multiplier);   
```

The out put of the above code shows that the variable `multiplier` is accessible out side the curly bracket which is not expected from a local variable. A local variable only exists within the block where it is declared. We can define a local scope to any variable declared in any block using `let`. Thus a variable declared with `let` having a block scope is not accessible outside that block as shown below.

```javascript
    var index = 1;
   for (index; index <= 10; index++){
        let multiplier = 5;
        var product = multiplier * index;
        console.log("The product of "+ multiplier +" * "+ index + " = " + product);
   } 
   // the code below will throw an error 
   console.log("\n\nThe multiplier declared in For block is:" + multiplier);   
```

Once it is clear that JavaScript does not provide block scope unless a new keyword `let` is used to force a variable of having a block sope. It is also must that you understand that JavaScript function does provide variables local scope. if the above code is written inside a function then it is available only inside the function regardless of being declared as preceded by a keyword `let ` or not.

```javascript
   function addThem(a,b) {
        var result = a + b;
        console.log("The sum of "+ a " and " + b + " is :"+result);
   }
    addThem(10,10);
    console.log("The variable result is not accessible here " + result);
```

>Note: Values in different context get different scopes

Variable always exist in some scope which is determined by the location where it is declared. No matters what scope a variable has a programmer must be clear in mind what exactly he wants to do with the variables. 

>Note: Always remember to declare the variable first and used next.



### Naming a variable

When deciding about variable name, like most other languages JavaScript is also a case-sensitive language. Thus upper case `X` is not same as lower case `x`. Apart from case sensitivity following rules must be met.

1. The first character can be a letter [a-z, A-Z] or an under score `_` or a dollar sign `$`. Numbers can't  be used as the first character of a variable to distinguish between a letter and number.

```javascript
    var 1;    // unexpected error
    var one; // o.k
    var one1; // o.k, They can be used after the first character
    var he1lo; // o.k but confusing
    var Na_m-e; // o.k but ambiguous
    var $variable // o.k  can  come first
    var _valid_variable // o.k and so on.
```
 

2. When you type letters from your keyboard e.g., `a` it is translated into ASCII code first . Since most of us have  keyboard which displays only English language characters does not mean that other language characters are not used. They are commonly used by thousands of people if not million. JavaScript also allows unicode characters but use it if you know about encoding so it is wise and safe  to use ASCII range which most people are familiar with.

3. The intended variable name must not be a [keyword (link) or a reserved word.

```javascript
     var return = 100; // not allowed
     var this = "that"; // not allowed
```

4. You can check if your variable is legal or not on [Validator](https://mothereff.in/js-variables)


#### Different ways of declaring a variable

A variable can be declared individually, separate from others or they may be declared in one line. They can also be declared and initialized in one line.

```javascript
    var greetings = "Hello To JavaScript Learners!!" // single declaration
    var last_name , first_name , full_name; // multiple declaration
    var age = 32 , height = 5.8 , weight = 69; // declaring and initialization
    var x = 10,
        y = 11,
        z = 23,
```

#### Coding Convention

It is an old saying that `a bad/old habit dies hard` thus always try to follow the guidelines of the language in used. It improves readability and makes it easier to understand and alter.
A style of writing code is known as [camelCase](https://en.wikipedia.org/wiki/CamelCase) has become the  de facto style among developers. You may find two varieties even in camelCasing, stick to any one and use the same style in your entire program. Do not change it , it will create confusion for yourself after sometime in future.

#### Do the following.

- Start variable and function names  with lower case as `var last`.
- If The second word is present  use the capital letter to start with as `var lastName`.
- Always end the statement with a semicolon as `var lastName = "Sayyed";`, leave spacing around the operator as done.
- Always use four spaces for indenting your code block.

```javascript
var lastName = "Sayyed"; // o.k but does not adhere to styles
    var lastName = "Sayyed"; // Good
```

- When writing a block of code with curly brackets pay attention to white spaces and put the opening bracket at the end of the first line. It does improve your code readability. End the block with a closing bracket on a new line without any spaces so that it aligns with the function declaration.

```javascript
    function greetingsToAll(message) {
        //your code
    }
```

- Leave space when dealing with loops declaration

```javascript
    for (var index = 1; index === 10; index++) {
        //your code
    }
    // same code below does not follow style guides by omitting spaces
    for(var index=1; index===10; index++){
        //your code
    }

```

- Global variables are usually written in UPPERCASE, but avoid using global variables if possibles.
- Constants are also written in UPPERCASE.



>Note:
To find out more about JavaScript Code Convention and other development visit [idiomatic.js](https://github.com/rwaldron/idiomatic.js)


## Which Version of JavaScript am I using?

Before we go any further we must stop here and ask this question which version of JavaScript I am working with. The best answer is to use the command prompt to find out which version of the Node you are using and then go to `Nodejs.org` site to find out what is supported by this node version.

 But the simplest answer to this question would be that node uses `V8 engine` and `V8` implements ECMAScript specification specified in ECMA-262 third edition and this 3rd edition is JavaScript 1.5. To cut the answer short, programmer are no longer interested in what version of JavaScript is used as JavaScript is only the trade-of name. The actual language specification is known and understood by ECMA-262. And, so far has version 1,2,3,5 and the last one released is version 6 to this date.

 1. ECMAScript-262 First Edition released in June 1997
 2. ECMAScript-262 Second Edition released in August 1998
 3. ECMAScript-262 Third Edition released in December 1999
 4. ECMAScript-262 Fourth Edition does not exist
 5. ECMAScript-262 Fifth Edition released in December 2009
 6. ECMAScript-262 5.1 Edition released in June 2011
 7. ECMAScript-262 Sixth  Edition released in June 2015 is the latest version of at the time of writing this notes.


Continuous effort is going on by NodeJs organization to support the latest release specification which is ECMAScript-6. The latest work can be seen [here](https://nodejs.org/en/docs/es6/).
## How to check if a variable is undefined

Following example shows different attempt to find out if a variable exists and if exist what is its type. An undefined variable always yields to false in boolean context.

```javascript
    var x;
    if(x){
        console.log(x);
    }else{
        console.log("1. x is :" + x);
    }

    // The above can be done in more elegant way
    if(x === undefined) console.log("2. x is :" + x);

    //but it can not be done by the following
    if(typeof(x) === undefined) console.log("3. x is :" + x);

    // though it can be corrected
    if(typeof(x) === "undefined") console.log("4. x is :" + x);

    // An attempt to do the following can be deceptive as
    // it will always yield to true
    if(typeof(x)) console.log("5. x is :" + x);
```

## Accepted way of assigning a value to a variable
```javascript
  function(number){
    var x = number || 0; // at first it is undefined so get the value to 0
  }
  
```

## Public, Protected or Private variables in JS
In Js when dealing with objects, there is very clear distinction between class based Object Oriented languages and the way js does the job. First of all, JS provides a quick way of creating singleton object from the built in constructor or using its short cut literal {}. When adding members to a singleton object, one does not have any way of providing the access modifiers to member variables. All members are by default public and can be accessed by the singleton object. In this form of pattern creation this is the default behaviour of JS. To get the variables defined private or public one needs to take help from the `function` construct and define the variable in function with `var` making them `private` to the function.

```javascript
  // Normal way of creating a singleton where members are public
    var o ={x: 1, getOne:function(){return x;}}
    console.log(o.x); /*x is available directly on the object which makes is public. To make it private it should be available through the public method console.log(o1.getOne()) ;// 1.*/

    // Make it private using function
    var o = (function(){
      var x = 1;
      return {
        getOne:function(){return x;}
      };
    })();
    console.log(o + "");
    console.log(o.x);
    console.log(o.getOne());
  }
```

If one wants to add private function it can be done is a same manner, that is to add them as a private variable to a function and access them from the object that needs to be returned which is done as follows;
```javascript
  var o = (function(){
    var _x = 1; // private variable
    var _setX = function(x){ // private function
        _x = x; 
    }
  return {
    getOne:function(){return _x;},
    // public method of this object 
    setOne:function(x){ if(x != null && x!= undefined)_setX(x);} 
    };
  })();
  console.log(o + "");
  console.log(o.x);
  console.log(o.getOne());
  // setting new value to x
  o.setOne(10);
  console.log(o.getOne()); // 10;
```

### We can summarise the above as follows:

1. Private variable are always declared with the `var` keyword in a given scope usually inside a function the same rule apply for the mehtods.
2. Public variable and method are declared using `this` keyword which refers that they belong to instance and are directly accessible from outside the object.
3. Public variable and method can also be added to "Prototype" object using `classname.prototype.proertyName = ` sharing code with all instances.
4. Static property can be defined using `classname.propertyName = `

Although JavaScript has been a class less language until ECMAScript-6 yet does not fully qualify as a pure Object Oriented Language. Though it  has been known to provide code reuse or sharing behaviour through Prototypal inheritance.  And it is definitely an object based language.