---
date: "2017-04-01"
draft: false
title: "How to Understand Functional Programming"
description: "An overview of functional programming concepts in JavaScript."
categories:
  - "Programming Languages"
tags:
  - "JavaScript"
  - "Functional Programming"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---


[//]:# (original date is of 2016-12-01)

## Functional programming

Early languages like C, BASIC were not functional languages. Then came OOP C++ was a super set of C with Object Oriented approach the came Java but none of them offered functional programming technique. The only functional programming from early days was and still is LISP and its descendant like PROLOG. When Brenden Eich was hired by Netscape to write a language that can be embedded in their web browser. He came up with JavaScript, which was not an object oriented language but object based prototype language. But it was not all, there were some features of functional programming. As JavaScript evolved it turned out that functional programming technique can prove to be more powerful than its counterparts. To understand these techniques, one has to have at least some concept of what a function is and how it works. The term function has come from Mathematics.

[//]:# ( Mathematics)

### Why there is a need of paradigm

Computer languages exist because of computers. We made machines and wanted to control machines. These machines are composed of micro chips or semi conductor technologies that understand instructions in forms of electrical signals[01010100]. It started with instructions which were given to micro processors and came to be knows as **machine language** e.g., *Assembly language*. It exist at the lowest level where it deals with memory addresses directly. They were also called *First generation languages*. Assembly language was and still used for embedded systems because it gives the direct control over what machines can do or can not. But with everything as it happens in the nature when grows get complicated and requires more abstraction to keep track of it. Then started the concept of high level languages which would be easy to write and understand for human. Once written with ease then can be compiled to machine code. This gave birth to different models of programming

### Programming Paradigms Or Models

 After assembly language came a different style of programming which came to know as a procedural language which allowed programmer to write code in more humane style compared to machine instructions, using vocabulary like , input, output, for , goto, continue , lable , quit , exit and so on. The early examples of procedure languages are * COBOL, FORTAN , ALGOL , BASIC , and then came the C language. They all allow you to write code step by step using conditions like if this happens do this otherwise do that . So it was like to write a recipe to prepare something as you would do in the kitchen thus were called Procedural languages because they always have to follow a procedure to solve the problem.

 When dealing with solving the problem there came two approaches. One dealt with how to solve the problem and the other dealt with what to solve and what to accomplish without worrying how to solve . The later called *Declarative Programming* while the former was known as *Imperative programming*. Procedural languages use the imperative mode as it happens with humans when instructing one another to accomplish the task. Then faced with the issues of maintaining the programme came another idea of structured programming because using goto or jump from one part to another part in the programme was not the way to dealing the complexity. Structured programming used block structure , sub routines and loops which were proved  a better approach to the clarity and maintainable of the programme. Imperative moode of programming gave rise to declarative programming where focused was put on how to write clean routines so a programmer can only look at the comments or name, arguments and return type of a routine or sub routines which came to be knows as functions, and have an idea what is that this function accomplishes without going into the details of how it does it.
 
 In 1980s came a concept of dealing with objects which have state and behaviour and interact with each other in an environment like human do in real life having their identity and unique behaviour. The idea was that data is not to be stored separately in variables but inside an object which carries the whole state which can only be changed by the object not by the environment directly. The concept of encapsulation, inheritance , compositions, polymorphism and others were introduced making the language more robust than procedural languages. The first Object Oriented Language which became famous was small talk developed in Xerox then came Objective C and then C++ , Java and others. But at the same time or probably little earlier, using concept o code sharing which was achieved by class inheritance in OOP languages, came to be known another language called self which was a functional language. As mentioned above functions were another name  routine or subroutine to solve the problem, and a mathematical concept. A functional programming language was based on mathematical concept of functions .... where ...... The..

### What makes  language a Functional Programming Language?

The above mathematics can easily be expressed as following.
That a functional programming languages treat functions as a first class citizens allowing them to act as higher order functions not the first order only by having the ability;

  1. To [pass a function](#) as an arguments to other function,
  2. To [return them ](#) as the values from other functions, 
  3. To assign them to a variable,
  4. To store them in data structures
  5. To supports anonymous function which are literals without names
  6. To have their own type like an object, they have their own type also known as `function`
  7. To [define a function](#) as an argument when invoking a function ( implementing call back)
  8. To infer the type if necessary [//]: # (? explain)
  9. To implement dynamic scoping, providing lexically scoped functions ( nested or inner functions)
  10. To handle references to functions as closures a kind of function pointers 

### Examples

To understand the concept behind functional programming and the full power, a small function is written in a procedural style as it would be written in C like languages.

```javascript
    //file-name:chap-02-02.js
    function joinMe(args) { 
     var result = "";
         for(var i = 0; i < args.length ; i++) { 
           result = result + args[i] ;
         } 
        return result;
    }

    console.log(joinMe(["S","A","Y","Y","E","D"]));//SAYYED
    console.log(joinMe(["It's ","a number ",1,]));//It's a number 1
```

The above function does the great job it goes through the array provided and store the value in a variable provided one by one and return the result which is then printed. This is how an imperative style does the job, writing every details of a programme one after another and once finished returns the result. If we were to write the same logic in Obejct Oriented language, this function will be the part of any object and every instance of the object will share the same code. When invoked this method on any object will yield the result. There is no need to change anything. Let's see how it is done on JavaScript.

```javascript
   var obj = {};
   obj.joinMe = function(args) { 
     var result = "";
         for(var i = 0; i < args.length ; i++) { 
           result = result + args[i] ;
         } 
        return result;
    };
    console.log(obj.joinMe(["hello ",'to everybody']));// hello to everybody
```

The above version of object oriented language does not change the procedure applied or logic applied to the function. The only difference is that it was added to object and invoked or called upon the object which it belonged to. This way of adding the method to the object results in becoming an instance method and does not share the code with other objects of same type.

To share the code with other objects of same type the method has to belong either to the class in class based language or to a constructor function which acts like a class in prototype based language. Since we are not defining our class or a constructor function. We are left with one choice, which is to add this function to the corresponding **Prototype** object where all particular type of objects shared the code from . This is the language provided prototype object in JavaScript which by nature allows you to add new functionality to the built in one directly. Once any method is added into the prototype object all instances of the same type can use them.

```javascript
    // Adding method to prototype object.
   Array.prototype.joinMe = function(args) { 
     var result = "";
         for(var i = 0; i < args.length ; i++) { 
           result = result + args[i] ;
         } 
        return result;
    };
    var arr = [];
    var arr1 = ["James bond ",0,0,"7"];

    console.log(arr.joinMe([true," or ", false, " depends upon you!"]));
    console.log(arr1.joinMe(arr1));
    console.log(arr1.joinMe([1,2,3]));
```

The above version of the function remains the same except that it belongs to the prototype object. Now lets see how this same function can be written in functional programming.

```javascript
    function joinMe(args,index,result){
        if(index === args.length){
            return result;
        }else{
            result = result + args[index];
            index++;
            return joinMe(args,index,result);
        }
    }
    console.log(joinMe(["this ", "is ", "how ","it is ", "done."],0,""));
    // this is how it is done.
```

The only obvious difference we can see is that instead of using for loop it uses the recursion and second difference is that it passes all the arguments when invoking the function, that is input, output and the counter. Inside the function if block is used which is again a legacy of procedural programming. It can also be avoided as given below.

```javascript
    function joinMe(args,index,result){
        result = result + args[index];
        index++;
        return (index === args.length)?  result :  joinMe(args,index,result);
    }
    console.log(joinMe(["this ", "is ", "how ", "it is ","done. "],0,""));
    // this is how it is done.
```

Even if above still does not look more functional, you can write code in one line provided you know what exactly to do.

```javascript
    function joinMe(args,index,result){
        return(index === args.length-1)?result:joinMe(args,++index,result=result + args[index]);
        }
    console.log(joinMe(["this ", "is ", "how ","it is ", "done."],0,""));
```

well the question is what is that we want to achieve, less code or clarity of a module. The above function does the job gracefully. But little mistake like replacing `++index` to `index++` will lead to wrong results. Functional programming uses recursion instead of loop. JavaScript still does not provide full support for recursive calls and tail call optimization. 

Let's look at another example of functional programming using Array class built in methods to see how functions are used to achieve the goal. The following programme takes two dimensional arrays and merged into one.

```javascript
    function merge2dArrayIntoOne(arrays) {
        var count = arrays.length;
        var merged = new Array(count);
        var c = 0;
        for (var i = 0; i < count; ++i) {
            for (var j = 0, jlen = arrays[i].length; j < jlen; ++j) {
            merged[c++] = arrays[i][j];
            }
        }
      return merged;
    }
    console.dir(merge2dArrayIntoOne([[1,2],[3,4],[5,6]]));//[1,2,3,4,5,6]
```

The same above programme can be written using functions that already there provided by the language. You do not need to understand the inner workings of these functions at all. Only thing important is that by their name and signature and return value you understand their task and know how to use them, what to pass them and as a result what to expect as a value. This is an example of declarative mode of programming.

```js
    //And using functional techniques, it could be written as follows:
    var merge2dArrayInto1 = function(arrays) {
      return arrays.reduce(function(p,n){
          return p.concat(n);
      });
    };
    console.log(merge2dArrayInto1([[9,8,7],[6,5],[4,3],[2,1,0]]));
    // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

Another concise way of doing the above is shown below.

```js
    //Look at another more concise version of the above
    var twodarray = [[10,20],[1,2],[30,40],[50,60]];
    console.log([].concat.apply([],twodarray));

    // Another one that also checks if array is passed
    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    }
    // Add this small behaviour and it will check the input as well
    function flatten(arr) {
        return Array.isArray(arr)? arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) :  toFlatten);
            }, []) : "It is not an array";
    }
    console.log(flatten(10,"string"));// It is not an arry
    console.log(flatten("this is not an array")); It is not an array
```

The above examples should be enough to understand the power of functions as well as learning to understand how to use functions without writing the same functionality which is already there. Before starting to talk more about functional programming, first examine the nature of a method of an Array class called `forEach(callback[,thisArg]` 

### forEach() [ Array.prototype.forEach(callback,thisArg)]

The reason to have this function in Array class is that most of the time when working with an array object containing elements, any specific  job is to be performed on each element one by one. So rather than invoking a same function  different times with passing individual items to the function one by one, a helper method can be provided which can be invoked upon an array object and at the same time passing a target function as an argument to the helper function. e.g., `[10,20,30].forEach(printThem)` Here `forEach()` is a helper function which can be invoked on any array object whereas the target function is passed as an argument. Therefore `forEach()` job is to call this target function on each element of the array object. Since the job of this function to call the target function time and time again, it is called a callback function. Therefore any helper function which is supposed to call a particular function on any given object or on any given arguments is very helpful. So a bare bone structure would be

```javascript
    //helper function
    function myHelper(callback,thisArg){ 
        /* from here the given function is invoked indirectly using call or apply providing it the right execution context */
        var thisPointer = thisArg;
        callback.call(thisPointer,arg1,arg2,arg3......); // or
        callback. apply(thisPointer,arg[]);
    }
```

Let's see how `forEach()` method is called. 

```javascript
    function printIt(elements) {
        console.log("Array elements are: " + elements);
    }
    /* instead of invoking
        printIt(100);,printIt(20);....... this helper function can be used
    */
    [100,20,30,40,88].forEach(printIt);
    /* There is no need to define it separately it can be defined at the same time */
    [100,20,30,40,88].forEach(function(elements){
        console.log("++" + elements + "++");
    });
```

What actions are to be performed and how to be performed are left on the user.  The arguments which are passed to callback function is not limited to elements, the second arguments can be passed as an index of an array and third one can be the array that is to be traversed. Let's see if we were writing such a helper function how would it be written.

```javascript
    function forEachx(fun ,thisArg){
        var len = thisArg.length;
        if (typeof fun != "function")
                throw new TypeError();
      
            var thisp = arguments[1]; //
        for (var i = 0; i < len; i++){
            if (i in thisArg)
            fun.call(thisp,thisArg[i],i,thisArg);// passing three args
        }
    }
        // A helper function which call the callback with given array items
    forEachx(function(elem,index,array){
        console.log(elem);
        console.log(index);
        console.log(array);
    },[11,20,30]);
    
```

### map() [ Array.prototype.map()]

To understand the map function let's see an example of the function which doubles the given number in an array object

```javascript
    [1,2,3,4,5].forEach(function(elem){
            console.log("the double of " + elem + "  is " + elem * 2);
        });
    // The above does the job pretty good, now use the map function
    var doubleNumber = [1,2,3,4,5].map(function(elem){
        return elem * 2;
        });
    console.log(doubleNumber); // [2,4,6,8,10]
```

Both  seem to be doing the same job except the map function requires you to return the result and it stored in array object mapped to the original one exactly at the same position. When working with `Array.prototype.map()` method, following rules apply;

1. Every output element corresponds to the input elements in the same position and shuffling is not allowed
2. Callback function should not change the original object. Make a copy and work with it. Similarly action that causes side effects to the working environment is not prohibited.

#### When to use map() function

Map function job is to provide mapping b/w two items of given array according to the criteria set by the programmer. For example an array containing three items when mapped using the criteria of doubling. The new array will be as shown. To display the result in pair 
```javascript
   1 ---------------> 2
   4 ---------------> 8
   5 ---------------> 25 
    
```

### filter() [ Array.prototype.filter()]

If an array requires some sort of operation to choose the right items before applying to map use `filter()` method.  Note the `filter()` method returns the boolean value `true` for yes and `false` for no. If the return value is true the result will be an array of filtered value. Applying filter and then map can be done on any level or any number of times. This is regarded chaining of functions. Let's see the example of `filter()` mehtod

```javascript
    
    
```

### Is JavaScript a Functional Programming language?

JavaScript is a multi paradigm language. It uses imperative as well as declarative mode of programming. It is also object based language, almost everything in JavaScript is object specially functions are also objects. It provides code sharing which is an essential characteristics of Object Oriented languages using inheritance through prototyping. And it also implements most features of functional programming making it more robust language of web.


### Function Programming libraries fro JavaScript

-  [ Mori ] (http://swannodette.github.io/mori/)
- [ Immutabel.js ] ( https://facebook.github.io/immutable-js)
- [ Underscore ] (http://underscoresjs.org)
- [ Lodash ] (https://lodash.com/)
- [ Ramda ] (http://ramdajs.com/)


