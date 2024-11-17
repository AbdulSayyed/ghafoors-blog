---
date: "2017-05-04"
draft: false
title: "What and why in JS"
description: "Key JavaScript code concepts for achieving success in programming."
categories:
  - "Programming Languages"
tags:
  - "JavaScript"
  - "JS Best Practices"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---


[//]: # (original date: "2016-12-05")

## 1.0 Since JS has no interfaces how it is implemented?

To understand what interface do and what is required one needs to have some object oriented programming knowledge. It is similar to class but can not be instantiated. It only exposed methods that interested object or class can implement the way they want. When a class implements an interface it is said to inherits the abstract functions, along with any other members defined in interface. e.g, any constant , methods , static methods and any nested types. NOte> Abstract methods do not have any code that are only blue prints for those who inherit them so provide the body by writing the code.

### 1.1 What is Duck Typing in JS?

{{< bs/alert >}}
Duck typing is a technique used to copy concepts from class-based OOP languages like interfaces or classes. The idea is that "If it walks like a duck, and quacks like a duck, it's a duck." If your object has `quack()`, `walk()`, and `fly()` methods, it can be used wherever an object that can walk, quack, and fly is expected, without needing a "Duckable" interface.
{{< /bs/alert >}}


### 1.2 What does it mean to say JavaScript needs a host environment to run ?

Traditionally a programme written in high level computer language is either compiled or interpreted into machine language so that it can be run by the machine operating system. This is the direct approach of running a programme. There exist another way which allows a programme to be written or scripted for another programme known as host. Now it is the responsibility of the host programme to run the script this may be regarded as an indirect approach .
Javascript belongs to the second group which needs a host environment to be run. For example when a programme written in JS is included in an html page it is said to be embedded in html. This html page is run by the browser. The browser has the ability to start JS programme because another piece of code called interpreter also known as JS engine is embedded in the browser. Therefore browser which itself is a computer programme probably written in C or C++ loads the JS engine when encounters the JS script in Html page and let the interpreter do the rest of the job of executing the JS script or code or programme.
In modern day computing, the term script and programme are used interchangeably. But in early days scripting was regarded much easier than programming.
With the advent of NodeJS, JavaScript can be run in nodeJs environment acting as a host for JavaScript programme. NodeJs is itself a programme where a popular v8 engine is embedded to run JavaScript programmes


### 1.3 What was the need behind the JavaScript creation?

In early 1990s, the company called Netscape communications wanted Netscape browser to have the ability to run external programme to achieve more flexibility over html pages.The company hired Brendan Eich to attach/embed another language in HTML. Soon "LiveScript" was born, but its name was changed into "JavaScript" because of the reasons that Java language at that time was getting popularity as an alternative to c++ and was much easier to learn and programme than its counterparts. Though JavaScript and Java may sound related but they were not. Java language was designed as an Object oriented class based languages from top down providing code re use through classical inheritance, while JavaScript was Object based language with features of functional programming disguised in c style coding , providing code reuse through prototype inheritance.  Having one programme to be able to run another programme which can control the contents of first programme was turned out to be very beneficial.*/


### 1.4 What are global variables of host environment?

A host environment that runs the JS programme expose some variables to be used in JS programme this variable or variables are called "global" variables. These global variables can be used in the programme so that they can be manipulated. For example browsers exposes a variable called "window" which is commonly used in JS script. Similarly nodeJS also exposes a global variable known as "global" when working in REPL shell. 

### 1.5 What are user defined global or local variables?

The word global or local refers to variables visibility and has to do with the scope of the variable. It is the scope which defines whether a given variable can be accessed from certain position in the programme or not. All variables which are declared globally ( not inside any function or any object ) are accessible from anywhere in the programme. In contrast variables defined in functions are known as local variable  and only visible inside the function.

### 1.6 What are static variables?

A static variable as the name suggest is static by creation. It comes into being when the programme is compiled and lasts for the entire life of the programme. In OOPs a static member variable, which is a class variable that belongs to the type and not to every instance or every object of a that particular type . Being static means that it can not be controlled by the instantiated object but by its blueprint. Since Js is class less language the closest thing is the constructor function that defines the type, thus can be shared by all instances of that type. Though it can be shared among all type but can only be updated by the blue print or the class itself.
The common use of the static variable to keep the count of the same type being created.

```js
	// Declare your constructor
	var Animal = function(name){
		Animal.count++;
		this.name = name;
	};
	//Initialize the static variable with the help of the constructor name
	var Animal.count = 0;
	// create an instance of Animal
	var rabbit = new Animal("bunny");
	var cat = new Animal("nimmy");
	console.log("Animal count is " + Animal.count); //2
```

### 1.7 How to avoid static variable defined globally?

```javascript
	/* The above can be avoided as shown below */
	var Animal = function(name){
		Animal.count = ++Animal.count || 1; // first time it is undefined
		this.name = name;
	}
	var fish = new Animal("gold");
	var pony = new Animal("gil");
	console.log("Animal count is " + Animal.count); // 2
	/* If we could see closely the constructor function has no special construct, but because of calling with `new` operator it returns an object by default. As long as it is returning the object, this special function would be regarded as constructor function otherwise it would be an another normal function. Having said that, this technique could be used for keeping track of how many times the function was called. A normal generic function can be written as follows:*/
	
	function fn(){
		argument.callee.count = ++arguments.callee.count || 1;
		console.log(arguments.callee.count);
	}
	// Now the above function can be renamed to what ever you want.

```

### 1.8 What is a leaking global variable?

```javascript
/*
If you add variable to global space, it is available to global objects and becomes the property of the global object.
 */
var x = 10;
console.log(global.x); // 
/*
The x variable can be accessed by any global object. This is regarded leaking the global variable. To avoid this, if yo do not need to make it global, always write in a closure/ anonymous function or have some other mechanism that does it for you.
 */
	
```

### 1.9 What is the proper way of avoiding the global variable leakage?

```javascript
	(function(){
		var x = 10;
	}());
/*
If you need to  expose this variable to any object then have a function to do this which is passed that object as an argument.
 */
function initialize(obj){
	obj.x = 10;
}
// or more precisely
function initialize(myObject){
	myObject.myVariable = " private to only this object"
}
/*
The above is a function and its invocation can be deferred until we need it.
This discussion is about how to make you code modular
 */
```

---

[//]:# (//////////////////////////////////////////////////////////////)
[//]:# ( Properties in JavaScript)

### 1.10 What is a property in JavaScript?

```javascript
	/* JS is object based language. Object is a Data type,that represent more structured data than primitive data types.Data in objects are stored in pairs what is known as name and value or more often key/value pair. The name/key in JavaScript is known as the "property" of the object, which always maps itself to its assigned "value". This property in JS is a string a non numeric value.*/
	var o = { x : 1 , y : 2};
	/* In above code x and y are properties  of object o when accessed they are turned into string before accessing the values. Therefore o.x is equal to o["x"].
		 */
	// The same is usually written like this 
	var o = {
		x : 1,
		y : 2
	}
```

### 1.11 Does properties of object have associated attributes?

```javascript
	/* All properties when declared are given some default attributes. Number one is a "value" which needs to be assigned, there are three more attributes attached to them. Below are given all four attributes:*/
	> var x = 10;
	> console.log(Object.getOwnPropertyDeiscriptor(global,"x"));
	> {	value: 10,
	 	writable: true, // can be updated
	 	enumerable: true, // can be enumerated when needed
	 	configurable: false // the above behaviour can not be changed
	 }
	 /* if " writable " become false, it can not be changed, it act like a constant variable. If "enumerable" is set to false, it can not be enumerated using `for(prop in object)` loop or in `Object.keys()` method It remains hidden. JavaScript most `fundamental object` sets this property to false on some properties if they are not be shown. Similarly if a configurable attribute is set to false, it simply means that the other two attributes can not be assigned any other value. Or this property  attributes can not be assigned again. In case of re assignment it throws an error*/
```


### 1.12 What happens to globally declared variables?

```javascript
	/* When variables are declared globally. JavaScript make them properties of a global object exposed by the host environment. In browser this global object is "window" and in nodeJS working with REPL shell it is "global" but in js file, it is the programmer that defines the global object.
	 */
```

### 1.13 How property attributes can be seen??

```javascript
	/* Use "getOwnPropertyDescript(target) static method on Object by providing the target object as an argument to get the result as shown below."
	 */
	> var o = {}
	> Object.definePropterty(o,x,{value:10,writable:true,enumerable:true,configurable:false});
	>console.log(Object.getOwnPropertyDescriptor(o,"x"));
	/*{ value: 100,
  writable: false,
  enumerable: true,
  configurable: false }*/
```

### 1.14 How property can be made constant so it can not be either changed or deleted?

### 1.16 How to make a property readable?

```javascript
	/* Make its writeable attribute false as well as configurable false too*/
```

### 1.16 What does it mean to say that a property can not be redefined?

```javascript
	/* If a configurable attribute of any property is set to false, then it can not be redefine again.
	 */
	'use strict'
	var o = {};
	Object.defineProperty(o,"x",{value:100,
								writable:false,
								enumerable: true,
								configurable: false});
	console.log(o.x); // should be 100.
	o.x = 11; // TypeError. An error is thrown in strict mode, 
	console.log(o.x); // it can not be assigned any value	
```

### 1.17 How to iterate over all properties enumerable or not?

```javascript
	/* Non enumerable properties does not show in `..in..` operator. To see them `console.log(Object.getOwnPropertyNames(obj))` This will give an array of all properties available. This method can be changed with others
	 */
	var obj = {x:1,y:2,r:10}; // supposing they were defined non numerable
	console.log(Object.getOwnPropertyNames(obj));//[ 'x', 'y', 'r' ]
	console.log(Object.getOwnPropertyNames(obj).sort());//[ 'r', 'x', 'y' ]
```


### 1.18 What is a property descriptor object?

```javascript
	/* It is the object created internally to keep track the attributes of any object's properties. To get the reference to this object " Object.getOwnPropertyDiscriptore(target)" function is used.
	 */
```


[//]:# ( Variables in JavaScript)

## 2.0 Variables

### 2.1 How to declare a variable?

```javascript
	/* Simply use a keyword `var` preceded by legal variable name. JS by default assigns it a special data type known as `undefined` */
	var a; // a is declared, by default it is assigned an `undefined`
	console.log(a);
```

### 2.2 How to declare more than one variable ?

```javascript
	/*
	A common pattern used in nodejs when importing module, 
	 */
		var assert = require('assert')
			,should = require('should')
			,express = require('express');
	
	// Or
	var var1,var2,var3;

```

### 2.3 What is a type in JavaScript

```javascript
	/* A type defines the nature of the data you want to store. There are primitive data type and structured data type known as objects.
	primitive data type: number,string,boolean,null,undefined and symbols(ES-6)
	structured data type: object
	When a variable is declared without being assigned any value its type is not assigned yet. When the programme runs JS engine assigns it a default type known as "undefined".
	 */
```

### 2.4 How a type is assigned to a variable that stores the value?

```javascript
	/* JS is loosely typed language, when a variable is declared its type is not defined like in C , C++ or Java.
	When a variable is assigned any value , the value determines the type of the variable at run time. This is one of the reasons it is called dynamic language.
	 var x ; // type is not undefined.
	 console.log(typeof x); // undefined.
	 x = 10; console.log(typeof x); // number. values(integer,floating,double)
	 x = true; console.log(typeof x); // boolean. values(true or false )
	 x = "JS"; console.log(typeof x); // string. value( any combination of characters enclosed in single or double quotation marks)
	 x = null; console.log(typeof x); // null value(null)
	 */
```

### 2.5 How primitive data types are declared?

```javascript
	/* Primitive data type are not created as object, but simply declared. Declaration is enough for their existence.*/
	var x; // a variable is declared
```

### 2.6 How primitive data types are assigned values?

```javascript
	/* variables are assigned values using assignment "=" operator
	var x = 100; // There are two operation performed 1. previous value of x is deleted if any present then new value is assigned to it. This process is called initialisation. It is equal to the following.*/
	var x;
	x = 10;
	/* If same variable is assigned a value more than once, only the last value is valid */
	x = 20; x = 30;
	console.log(x); // 30. 10 and 20 are lost
	/* If previous value needs to be saved it must be assigned to any other variable */
```

### 2.7 How primitive data types are copied?

```js
	/* They are copied by value and not by reference */
	x = 30
	var y = x;
	x = 100;
	console.log(x); // 100.
	console.log(y); // 30.
	/*
	The above behaviour happens because primitive data type are copied by value and not by reference. When the expression `y = x` is executed value of x is created and assigned to y. Having done this if x value is changed, it will not make any difference to y.
	Note: If they were copied by reference the value of `y` would always show the last value assigned to x. Because it was pointer to x.
	*/
```

### 2.8 Is function a type in JS?

```javascript
	/* When a variable is declared and assigned any value, it gets its type according to its value. Similarly when a function is declared it gets it type as function. This type comes from the built in constructor "Function()". Thus an object returned by this constructor is denoted by a function type.
	> Note: You do not need to call this function constructor explicitly. Declaring a function automatically calls it and returns a new object of type function which is referred by the function name you provided.
	 */
```

### 2.9 What does it mean to say that primitive data types are mutable?

```javascript
	/* A variable that holds the value can be changed as shown below;
		var x = 10;
		x = true;
		x = "JS";
	It is the last value that is taken the rest are thrown away.
	Js primitive data types can be changed once they are assigned. To find out about the type of any variable  a `typeof()` operator is used.
	*/
```

### 2.10 What does it mean to say variables are hoisted in JS?

```javascript
	console.log(x);        // undefined
    var x;

	/* In above code, variable x is used before it was declared. It is not possible if execution happens in sequential manner. When JS programme is run it is first parsed,one of the job of this parsing is to collect all declaration of variables and functions as well as the arguments passed in function to gather at one place. So when they are referred again in program, JS environment knows about their existence. This process is also known as hoisting. If it was not declared at all it would have thrown an error.
	---------------------------------------------------------------------------
	var x = 10
	// other code
	...........
	console.log(y); // ReferenceError: y is not defined anywhere in the programme
	---------------------------------------------------------------------------
	Similarly only declaration is hoisted not the assignment.
	var x = 10;
	// other code
	console.log(x + y); // NAN. (10 + undefined)?
	var y;
	 */
```

### 2.11 What is a global variable?

```javascript
	/* JavaScript allows variables to be declared anywhere in the programme. They can be declared either at the top of the programme or in the middle of the programme or at the end of the programme. As long as they are not declared within any function or inside any object. They are labelled as global variable.
	 */
```

### 2.12 What is true-global vs implied-global variable?

```javascript
	/* If a variable is declared with a key word "var" like " var x = 10", it is regarded as true global variable. Being a true global variable sets the value of its "configurable" attribute to false that is, it can neither be deleted by using a "delete" operator, nor the other two attributes can be changed.
	*/
	> var x = 10;
	> delete x;
	> false;
	> console.log(x); // 10. It still exist.
	/* But if a variable is assigned a value without it being declared  using "var", it is taken an implied global and can be deleted using "delete" operator. */
	> y = x;
	> delete y;
	> true;
	> console.log(y); // ReferenceError. y is not defined
```


### 2.13 How to avoid global variables becoming the property of the global object exposed by the host environment?

```javascript
	/* Provide them a scope or declare them in an object.*/
```


### 2.14 Can JavaScript variables be declared without the keyword `var`?

```javascript
	/* Declaring a variable is seen within the context where it is declared. Variables declared in global context varies from the variables declared inside any functions. For example any variable declared globally without `var` is flagged as an error unless it is used with in any expression.
	 */
	var x = 10; // A true global 
	y = x ; // y is implied global
	console.log(x+a); // undefined. No error thrown
	z; // error.
	// Declaring inside a function
	function fn(){
		t;
		console.log(t);
	}
	// The above will not throw an error unless it is run. A function declaration is not a function expression. When a function is invoked , it is flagged an an error.
```

[//]:# ( Functions in JavaScript)

## 3.0 Functions in JavaScript

### 3.1 What is a Function with capital F?

```javascript
	/* JS environment provides number of built in objects ready to be used. They are known by different names like universal objects,global objects or fundamental objects. They are more than 70 objects. Some of commonly used one are given below.
	>Object,Array,Date,Function,
	>>Boolean,Number,Math,
	>>>RegExp,Error,TypeError,Map,Set,Iterator etc
	Function is also an object in JS and can be used to create functions from Function constructor.
	 */
```

### 3.2 If everything in JS is objects how are they created?

{{< bs/alert >}}
All built in objects are created from their constructor functions unless a short cut is available. For example an object of type Object is created from Object() constructor or an object of type Array is created from Array() constructor.
{{< /bs/alert >}}


### 3.3 How to declare a named function?

```javascript
	function fn() { };
	/* A function declaration always hoisted */
```

### 3.4 What happens if a same identifier is used to define other function?

```javascript
	/* JavaScript behaviour of assignment operator is as follows:
	1. Primitive data type are assigned by value.
	2. Objects data type are assigned by reference.
	When variables are copied they are copied by value, thus the new variable has its own contents and change in the original does not depict in the copy.
	Dealing with object is different,since function is also a type of object thus assigning one function to another function only copies the pointer. Therefore change in the original reflects in the copy. 
	 */
	function fn(){console.log("I am first  fn");}
	function fn(){console.log("I am second  fn");}
	fn(); // I am second fn. The first one is lost
	function f1(){console.log("I am no 1");}
	// Have a pointer to f1, 
	var pf = f1; // 
	// Now declare it again using same identifier
	function f1(){console.log("I am no 2");}
	f1();// I am no 2
	pf();// I am no 2 // why not "no 1" ? 

	/* The pointer of f1 gets the same result because function was not copied only the pointer. Second point is to note that. `pf = f1` expression evaluates on run time. At run time the value of f1 will point to the last value assigned to it because of hoisting. Thus it will always show " I am no 2" 
	 */
```

### 3.5 How to store the pointer to function declaration before it is changed?

```javascript
	/* No matter where you declare the function in a same scope ( being an object ), Js will hoist its declaration. Thus avoid declaring a same function  again down the line . If you have to change, do not declare them again, assign the new value. This is how the reference to the old value is not lost. */
	function fn() {console.log("This is fn");}
	// copy fn to another variable
	var f = fn;
	f(); // This is fn
	fn();// this is fn
	/*
	The  above shows that function object fn is now pointed by another variable f and can be invoked by both of them.
	 */
	function f1(){console.log("I am no 1");}
	f1(); // I am no 2. Why because down the line it has been re declared
	// Have a pointer to f1, 
	var pf = f1;
	// Now declare it again using same identifier
	function f1(){console.log("I am no 2");}
	f1();// I am no 2
	pf();// I am no 2
	 /* 
	 To store the pointer to previous declaration, this is how it is done
	 */
	function fn() {console.log("first fn");}
	// copy fn to another variable
	var f = fn;
	// now assign new value to fn.
	fn = function fn(){
	console.log("second fn");
	};
	f();// first fn
	fn();// second fn
	f();// first fn
```

### 3.6 How to re assign a function?

```javascript
	/* Re assigning function is different from declaring it again within the same scope. If you re declare it, because of hoisting all variable or identifier or pointer to the original declaration will have point to new declaration. But in case or re assigning it a new value either a new function or anything else will divert its pointer to a new value leaving all other identifier as it as.
	 */
	function fn(){console.log("This is old");}
	var pfn = fn;
	// assign new value to fn
	fn = function(){console.log("This is new");}
	// invoke them
	fn(); // This is new;
	pfn();// This is old .
	/* The reference to old value of function was saved and used */
```


### What happens when a function is declared?

```javascript
	/* Declaring a function is not same as invoking the function. Only declaring a function does not execute the function. If a function is only declared as shown */
	function fn(){}.
	/*
	 The following things happens when the code is compiled
	1. The function identifier is stored as a reference variable to the function. This identifier or a name of a function, in above case "fn" represent an object of type "Function". In other words, when code is compiled, the built in constructor function "Function()" is used to create the function.
	*/
	console.log(fn); // [Function:fn]
	console.log("fn---> " + fn); // fn--->function fn(){}
	/*
	Variable fn ( which is a Function object ) now refers to a function--->function fn() {}
	2. A list of parameters are stored if any passed.
	3. Determine the value of `this` according to function's scope
	*/
	console.log(typeof fn); // function.
	console.log(fn instanceOf Function); true.
	console.log(fn.constructor); //[Function:Function]
```

### What happens when a function is executed?

```js
	/* 
	A function must be executed with respect to its scope. Thus, attention must be paid at the time of function declaration because the place it is declared provide its scope.
	When a function is executed. Following steps are taken by the run time.
	1. The code inside the function body is run
	2. Once done, all list of local variables are destroyed
	3. A value is returned.

	 */
```

### How to be sure if it is a legal function name?

```javascript
	/* Visit the site and see if it is legal or not [link](address);
	 */
```

### How to assign a named function to a variable?

```javascript
	var foo = function fn() { }; // semicolon is must b/c it is an expression.
	/* There is no need to write a function name as done above. It is superfluous here. The above expression can rightly be re written as shown below */
	var foo = function (){};
	>Note: The function created is an anonymous function which is referenced by the variable foo. For debugging purpose, it can be defined as shown below.
	var foo = function foo(){}; // They are known as Named function expression NFEs
```

### How to write an anonymous function?

```javascript
	function(){}
	/* it has to be assigned or returned for further reference*/
	var fn = function(){ }; 
	return function() { }; // probably from its enclosing function
```

### In how many ways a function expression can be written?

```javascript
	/* There are three ways a function expression can be written
	In second way when a name function is assigned to a variable, probably only good for function tracing call, otherwise invoking the function with its name foo does not work.
	 */
	// Anonymous function expression
	var fn = function(){}; fn(); // works
	// Named function expression
	var fn = function foo(){}; fn();//works but not foo();
	// Immediately Invoked function expression
	(function fn(){})(); // or (function fn(){}(););
```

### What does an anonymous function return?

```javascript
	/* Whether it is a named or unnamed , IIFEE or not an IIFEE , all functions returns `undefined` by default.
	*/
	console.log(function(){}());//undefined
```

### How to write nested / inner function?

```javascript
	function fn() {
		return function () {};
	} // or
	//
	function fn () {
		function welcome() {
			return "Welcome To";
		}
		return welcome() + " JS"
	}
	console.log(fn());// Welcome to JS.
```

### How nested functions Scope Chain is established?

```javascript
	/* Nested functions, no matter on what level they exist have access to their parents function / enclosing function.  */
	var x = 100;
	function one(args){
		/* This has access to global variable and to arguments passed. The functions below get to access the argument passed to this functions because of having a lexical scope
		*/ 
		function two(){
			// This has access to all variable defined above;
			function three(){
				// This has access to all variable defined above;
				function four(){
					// This has access to all variable defined above;
					function five() {
						// This has access to all variable defined above;
					}
				}
			}
		}
	}
```

### How to find out the type of function?

```javascript
	/* When objects are created, they are created from their corresponding constructors. The constructor function  is a special function that represent your object acting as a class thus providing an object its identity. So the best bet is to look for its constructor property.	
	 */
	function fn() { };
	/* Since a function in Js is also an object, look for its constructor*/
	console.log( fn.constructor );/* [Function: Function] . It is an object of type Function which is created from the constructor function name `Function()` */
	console.log( typeof fn); //function
	console.log( fn instanceof Function); // true. 
	// similarly
	var o = Object();
	console.log(o.constructor); //[Function: Object]
	console.log(typeof o); // object
	/* The first argument tells that it is created from a function constructor of type Object. */
```

### How to create a function from its constructor?

```javascript
	/* In normal situation a function declaration is enough, but if there is a need to use a function constructor, it is done in the following way
	*/
	var fn = new Function("a","b"," return a +b");
	console.log(fn(10,20)); // 30
	console.log(fn + ""); // function anonymous(a,b){return a +b}
	// The constructor signature is Function("arg1","arg2",...."body")
```

### What is returned by the function implicitly?

```javascript
	function fn() { };// or function fn() { return }
	console.log(fn()); // undefined.
	/* undefined is returned implicitly in both cases */
```

### What is the prototype of a function object?

```javascript
	console.log(Object.getPrototypeOf(fn));//Function
```

### What services are provided by the function's prototype to be shared?

```javascript
	function fn () { }
	var myProto = Object.getPrototypeOf(fn);
	console.log(JSON.stringify(Object.getOwnPropertyNames(myProto)));
	/*["length","name","arguments","caller","constructor","bind","toString","call","apply"]*/
```

### How to get all the services inherited from the prototype chain

```javascript
	/* JS does not provide any function to traverse the prototype chain. It has to be done manually. Following three built in objects when created shares code from their corresponding prototype.*/

	function fn() {}
	var arr = [];
	var date = new Date();
	
	// check function's inherited properties
	var allProp = [];
	for(var o = fn; o !== null; o = Object.getPrototypeOf(o)){
		for (var name of Object.getOwnPropertyNames(o)){
			allProp.push(name);
		}
		// next object in prototype chain
		allProp.push("Next in Chain--->");
	}
	console.log(JSON.stringify(allProp));
	/* In above code o.__proto__ property can be used to replace Object.getPrototypeOf(o) method. The result will be same
	 */
/*["length","name","arguments","caller","prototype","Next in Chain--->","length","name","arguments","caller","apply","bind","call","toString","constructor","Next in Chain--->","hasOwnProperty","constructor","toString","toLocaleString","valueOf","isPrototypeOf","propertyIsEnumerable","__defineGetter__","__lookupGetter__","__defineSetter__","__lookupSetter__","__proto__","Next in Chain--->"]
 */
```

### How to invoke a function?

```javascript
	/* Having an engine does not do anything unless it is started. Functions have to be executed/called/invoked or started. They all refer to same thing. To invoke a function you must precede it by trailing brackets*/
	function fn() {}
	fn(); // it is invoked in global context
	function outer() {
		function inner(){
		}
		inner(); // it is invoked by outer context
	}
	outer(); // it is invoked by the global context
```

### Does outer/enclosing function invoke an inner function ?

```javascript
	/* Nested functions have to be executed explicitly, calling outer does not call an inner function automatically*/
	function outer(){
		function inner(){
			console.log("I am not executed by myself");
		}
	}
	outer(); // only outer is invoked
```

### How to execute an inner function?

```javascript
	/* Either execute in outer context or make it IIFE */
	function outer(){
		function inner(){
			console.log("I am executed with the right context");
		}
		inner(); // ok. inner is available
	}
	// Or
	function (){
		(function(){
			console.log("I am IIFE");
		}());
	}
	outer();
```

### How to invoke an inner function outside its context?

```javascript
	/* return it from its enclosing function and assigned it to variable then invoke it using trailing brackets */
	function outer(){
		return function(){
			console.log("I am invoked by my beneficiary");
		};
	}
	outer()(); // direct invocation by the global context
	var beneficiary = outer();
	beneficiary(); // I am invoked by my beneficiary
```

### What is the difference b/w returning an anonymous function or named function?

```javascript
	/* There is technically no difference,both of them need to be invoked explicitly by the receiving variable or context */
	function outer(){
		return function inner(){
			console.log("I am invoked by my beneficiary");
		};
	}
	outer()(); //Or
	var beneficiary = outer();
	beneficiary();
	
```

### What is the benefit of returning a function?

```javascript
	/* In JS a function having been returned from its enclosing function still have access to its enclosing function's state and can be used to alter or update  it.*/
	function party(){
		var guestList = ["Barbara","Michael","Louise"]; // private members
		function showGuest(){							// private function
			console.log("Party guests :" + guestList);
		}
		showGuest();
		return function(guest){
			if(!guest){
				guestList.pop();
				showGuest();
			}else{
				guestList.push(guest);
				showGuest();
			}
		};
	}
	var guestCounter = party();	//Party guests :Barbara,Michael,Louise
	// one guest left
	guestCounter(); //Party guests :Barbara,Michael
	// another entered
	guestCounter("Neil"); //Party guests :Barbara,Michael,Neel
	/* The variable guestCounter is the beneficiary or the receiving function, becomes or act as a closure having an access to its parent / enclosing function state which exited long ago.*/
```


### Are closures only implemented by nested functions

```javascript
	/* In functional programming, higher order function accept simple values along with functions and also return a function. When a function is returned it  comes out of its enclosing function but still has the access to its enclosing function state. This is known as closures. Nested functions provide the access to its outer function and when returned holds that link acting as a closure as shown in above example. But closures are not restricted to function only. An object returned from a function also acts as a closures*/

	//module pattern uses closures
	var PartyModule = (function() {
	    //private variable and methods
	    var guest = ["Barbara", "Michael", "Louise"];
	    function showGuest() {
	        console.log(guest);
	    }
	    // an object returned
	    return {
	        //public members
	        guestList: function() {
	            showGuest();
	        },
	        popIn: function(newGuest) {
	            guest.push(newGuest);
	        },
	        popOut: function() {
	            guest.pop();
	        }
	    }; // end of return
	})();
	//console.log(PartyModule);
	PartyModule.guestList();
	PartyModule.popOut();
	PartyModule.popOut();
	PartyModule.guestList();
	PartyModule.popIn("Ronald");
	PartyModule.guestList();
	PartyModule.popOut();

```

### What is the execution context?

```javascript
	/* Whenever a function in invoked, it is invoked by something. This something can be understood by the function execution context. Thus whatever invokes a function is said to own the code of the currently running function. It is represented by the keyword `this`*/
	var obj = {x:1, move:functtion( return this;){}};
	obj.move(); // A method move is invoked  and given `this` as a reference
	var car = new MyCar(); // /* An instance of MyCar is created and given a reference `this` */ 

	/* To see if it is the case, test the return value  */
	console.log( obj.move() === obj ); // true
	> function fn() { return this;}
	> console.log(fn() == global); // true, working with node REPL console
```

### What is `this` keyword refer to inside a function?

```javascript
	/* When a JS programme is run, the process that runs the programme is said to execute the programme. This process may expose one or more global variables to be used in your programme. Therefore inside the function key word "this" refers to that global object. In browser the global object is `window`. In nodeJs, when working in `REPL` shell it refers to `global` variable.*/
	function f1(){
		return this;
	}
	console.log((f1()=== undefined)? "it is undefined":f1());// logs to global object
	/* in Strict mode the value of this remains undefined because when the function was run, it was undefined.*/
	function f1(){
		"use strict";
		return this;
	}
	console.log((f1()=== undefined)? "it is undefined":f1());// logs to undefined
```

### What is a global execution context?

```javascript
	/* When JS interpreter first time executes the code, it enters into a state what is known as global execution context. It can be divided into two phases:
	 1. Creation Phase, where declared variables and functions defined and arguments are stored in one place and scope chain is established ( part of this process is what is known as hoisting). Next the value of `this` is determined,if possible.
	 2. Execution Phase, where code is interpreted and executed.*/
```

### What is the difference b/w function and a method?

```javascript

   /* When a function is defined inside an object, it is commonly called a method. Since a method is defined inside an object, it has to be invoked by the object. It can not  be invoked by the global execution context. When a method is invoked upon any object it is given a keyword `this` to be used inside the object or inside the method. While only function declaration in global context belongs to a global object and the keyword `this` inside that function refers to a global object */
```

### How methods are different from functions?

```javascript
   /* When a function is defined inside an object is commonly called a method. Since a method is defined inside an object, it has to be invoked by the object. It can not  be invoked by the global execution context. When a method is invoked upon any object it is given a keyword `this` to be used inside the object or inside the method. Having said that it is quite common to retrieve a function from an object as shown below, and invoking it in global context*/ 
   var obj = { x: 1,
            getX: function() { return this.x;}
        };
        // getting a reference to getX
        var ref = obj.getX; // note a method is not called 
        ref;    // ?. ref is a function 
        ref(); // o.k . ref is function but what is returned ? undefined
    /* here is lurking a potential danger, when ref() is invoked how  is it invoked? It is invoked by global context, when run, the code inside referring to context would be wondering for the right context e.g., what is `this` would be referring to. Therefore before it is invoked it needs to be bound to the right context. When you got the access to the object method you broke the context in with it was supposed to be run. ECMAScript-5 provides `bind()` function for this purpose. */
```


### What does it mean to have a reference to object's method?

```javascript
   /* It is quite common to retrieve a function from an object as shown below, and invoking it in global context*/ 

   var obj = { x: 1,
            getX: function() { return this.x;}
        };
        // getting a reference to getX
        var ref = obj.getX; // note a method is not called 
        ref;    // ?. ref is a function 
        ref(); // o.k . ref is function but what is returned ? undefined

    /* here is lurking a potential danger, when ref() is invoked how,  is it invoked? It is invoked by a global context, when run, the code inside referring to context would be wondering for the right context e.g., what is `this` would be referring to. Therefore before it is invoked it needs to be bound to the right context. When you got the access to the object method you broke the context in which it was supposed to run. ECMAScript-5 provides `bind()` function for this purpose. */

    var boundIt = ref.bind(obj);
    boundIt(); // 1. this will  give you the expected result
```

### How an execution context be manipulated?

```javascript

	/* As shown in above example ECMAScript-5 provides a way to bind execution context to any function that needed it.
	Bind() function can also copy your function to another identifier
	*/
	function fn(){console.log("I am fn")}
	fn(); // I am fn
	var f = fn.bind({});
	console.log(f());
```

### What is the difference when invoking a function with new operator  `new fn()`and without it `fn()`

```javascript
	/* fn(); invokes the function by the global context and by default it returns  undefined if nothing is returned explicitly. While the `new` operator when used returns a new object and regards this call as constructor function call.*/

	console.log(fn());  /* undefined. It results in execution of the function and shows the returned value */

	console.log(new fn()); /* fn {}. A new object of type `function` created using `Function` constructor and returned. The returned function object  can be hold in another variable.
	*/
	var f = new fn();
	/* "f" represent an object which is returned as a result of new operator returning the value. The type of returned object is "Object"*/

```

### What is the `Function` object in JS?

```javascript

	/* JS provides an environment which is full of predefined objects. These objects are available anywhere in the program to be used and regarded as universal objects or global objects. They are called global objects because they are available everywhere in the programme to be used. They are different from JS language **global** variable or objects. There are more than 70 objects. Among them 12 are known as Fundamental objects. Function object is one of them which provides facility for object creation. */
```

### What are global function properties?

```javascript
	/* JavaScript environment not only provides fundamental objects to be used anywhere in the programme but also provides global function. These global functions are invoked globally and not on any object. When run they return the value to the caller
	*/
	console.log(isNaN(true));
```

### What is a functor?

```javascript
	
	console.log( fn instanceof Object); // true. 
	/* instanceof operator checksif the object"*/
	/* `fn` being an object is allowed to use `Object`s services*/
	console.log(fn.name + "," fn.arguments "," fn.length);
```

## 4.0 Function as an object

### 4.1 If function is also an object of type Function, how properties can be added to it?

```javascript
	/* A function in JavaScript is also a special kind of object, it gets created when a function is declared. And referenced by the function identifier or any other variable it is referenced.
	 */
	function add()
	{
		console.log("I am a function");
	}
	/* when the call comes here we already have a handle or a reference to the function object. Let's add some expando properties to it.*/
	add.x = 10;
	add.y = 20;
	// Now two properties are added to the function. 
	console.log(Object.getOwnPropertyNames(add));
	//[ 'length', 'name', 'arguments', 'caller', 'prototype', 'x', 'y' ]
	console.log(add.x); // 10
	// a function can also be added this way
	add.fn = function(a,b){return a+b;}
	console.log(add.fn(2,3)); // 5
```

### 4.2 Can the properties of a function object be added inside a function.

```javascript
	/*
	Since a function object is a special kind of object, it allows you to add properties to it outside and inside the function. But when properties are declared inside the function. They are not available until the function is run explicitly or implicitly.
	 */
	function fn(){
		fn.x = 10;
	}
	console.log(fn.x); // undefined. 
	// Invoke the function and then access
	fn();
	console.log(fn.x); // 10
	// Similarly function can be added inside the function as a property.
	function fn(){
		fn.x = 10;
		fn.add = function(a,b){return a+b;}
	}
```

### 4.3 How variables or methods attached to a function object be used? / What is the correct use of function object?

```javascript
	/* The function object is not intended to be used as a replacement of object but  understanding the inner working of a function is helpful and lead to define user data type. For example if multiple instance of a particular type is required, the first step is to write the blueprint for it. In JS this blue print is written as a constructor function equivalent to class in class based oo programming. The constructor function is basically the way to start creating your own data type rather than using singleton. Constructor function are dealt in next section of object. A variable or a method attached to a function object can be used to keep track of some other object or keep track of himself.
	 */
	function Animal(name){
		Animal.count = ++Animal.count || 1 ;
		this.name = name;
	}
	// Attaching method to function object
	Animal.showCount = function(){
		console.log(Animal.count);
	}
	var dear = new Animal("beauty");
	var lion = new Animal("king");
	console.log(Animal.showCount());//2
```

### 4.5 What is the difference between adding normal variables  inside a function and adding them as a property?

```javascript
	/* As discussed earlier, variables and function added as a property of function object using its name do not get initialized until the function is run. Once the values are initialized they belong to function object
	>Note: When properties are added to any object, they all act as public members of an object. To change this behaviour, these can be added to a function and from that function you can return an object which has access to them.
	 */
```

### 4.6 How to get multiple references ( pointers ) to same function?

```js
	/* A function object can be referred to by as many pointers as you want. It acts like a value. */
	function sayGreetings(messages)
		{console.log( messages + " to everyone!");}
	var french = {},english = {},arabic = {};
		// assign same functions to all objects
	french.say = sayGreetings;	english.say = sayGreetings;
	arabic.say = sayGreetings;
	//
	french.say("Bonjor"); english.say("Welcome");arabic.say("Ahlan wa Sahlan");
	
	/* The above scenario can easily be written by providing a class or F that exposes its functionality */
	function  Language(){
		this.sayGreetings = function(message){
			console.log( message + " to everyone!");
		};
	}
	var french = new  Language(); french.sayGreetings("Bonjor");
	var english = new  Language(); english.sayGreetings("Welcome");
	var arabic = new  Language(); arabic.sayGreetings("Ahlan wa Sahlan");
```

### 4.7 How to copy a pointer or reference to same function?

```javascript
	/* JS functions are first class citizen, that is they act like values. When pointed by different identifiers, any change inside the function is visible to all.
	 */
	function greetings(){
		console.log(greetings.message);
	}
	greetings.message = "This becomes static";
	// Assign greetings to other variables
	var p1 = greetings,
		p2 = greetings,
	// Invoking p1 and p2 will result in sharing the same function.
	console.log(p1());// This becomes static
	console.log(p2()); // This becomes static
	// changing message
	greetings.message = "This is also static";
	console.log(p1());// This is also static
	console.log(p2());// This is also static
```



[//]:# ( Objects in JavaScript)

## 5.0 Objects

### 5.1 How objects are created by constructor function in JS?

```javascript
	/* JS creates all objects using either built in constructor or user defined constructor. These constructor or normal functions started with capital letter ( by convention ) to make it look different from normal functions. Inside these constructor function they make use of a key word `this` which is given to this function when it is invoked with `new` operator. */

	function House(){}; // constructor function
	var myHouse = new House(); // House {}
	/* Here Js internally creates an empty object `{}` and give it to this constructor. Now it is constructor job to do its work. Since inside this constructor `this` refers to **myHouse** you can do what ever you like to do with your instance of `House`. Note by default every function returns something and in this case your empty object is returned.
	If you return not an object but a function or any other value then it will not be regarded as a function constructor*/
	function House(){
		counter = 0;
		console.log("I am a house. My counter is " + counter);
		return function(){
			counter++;
			console.log(" I am incremented by one " + counter);
			return counter;
		};
	}
	// Invoke the function
	var myHouse = House(); // I am a house. My counter is 0
	// Inner function is returned, invoke it now
	myHouse();// I am incremented by one 1 
	var hisHouse = new House(); // I am a house. My counter is 0
	husHouse();//I am incremented by one 1
	/* The above function is not a constructor since it returned a function.*/
```

### 5.2 How to set constructor function's prototype to `null` so instances created form the constructor function does not inherit code from default `Object.prototype`

```javascript
	/* When a function is declared, a function object is created from its constructor function internally. Among the default properties/code it gets to share there is one property called `prototype`. This property is commonly used to add method and new properties to default prototype object.
	For example, if you want to add code that is shared by all the instances of the class, it has to be added to the prototype object using this property `prototype`. Note this `prototype` property only available to function object. In order to add to the object of any type, first get its prototype using`Object.getPrototypeOf(target)` and then add any property of function using dot operator.
	 */	
	// Adding functionality to built in Date object
    Date.prototype.showAlienDate = function () {console.log("☺♂↓☺☻•☻")};
    var d1 = new Date();
    d1.showAlienDate(); // it works
    // Adding to object
    var pen = {};
   pen.writes();    //error write is neither a member of pen nor its prototype

   // get the prototype of pen object and add this function to it.
   (Object.getPrototypeOf(pen)).writes = function(){console.log("It works")}
   //call this function on pen
   pen.writes();    // It works
   /* Another way to add properties or method to constructor function is to use its prototype property. This property is defined on Function object for only this purpose */
   Object.prototype.writes = function(){console.log("it also works")}
   pen.writes() = // it also works
   #
```

### 5.4 How to create objects in JavaScript from built in Constructor?

```javascript
	/* Use built in constructor provided for built-in objects */
	var ob = {}; // or
	var ob = new Object();
```

### How to create objects with predefined properties using Object constructor?

```javascript
	/* Object constructor only allows you to create objects with only one value. This value can be any value. If no value is provided or if it is `null` or undefined. The Object constructor creates an empty object and return it. Thus there exist no way to create object with properties except you have to use ECMAScript-5 definceProperties method*/
	var ob = new Object(); // Or
	var ob = new Object(null);// Or
	var ob = new Object(undefined) // are all same
#
```

### What can be other valid values of the Object constructor?

```javascript
	/* The prime candidate would be the primitive data type, which are not objects e.g., number,boolean,string,...  */
	var n_ob = new Object(10); // A Number object is created
	var b_ob = new Object(true); // A Boolean object is created
	var s_ob = new Object("Hello"); // A String object is created
	var obj = new Object(hello); // Error hello? is what, not a string
	/* When using console to see the object, an object wrapper is returned as shown below */
	console.log(n_ob); // [Number:10], which indicates that, it is wrapper
	consle.log({}); // {} , which indicates that it is an object not a wrapper
```

### The Object constructor creates an object wrapper what does it mean?/ If a value is primitive data type it creates a box what does it mean?

```javascript
	/* As shown in above example neither the value 10,true or Hello are objects but this constructor function make them act as an object. This making of primitive data type to act as an object is regarded as creating an object wrapper around it. Or sometimes referred as creating a box for a given value.*/
	var a = 10; /*A primitive data type. No operation of object can be performed on it*/
	a.x = 100; // Error the variable a is not an object
	var ob = new Object(a); // An object wrapper is created of type number.
	/* The above is same as */
	var ob = new Number(a); // Using built in Number constructor provided
	ob.x = 100; // O.k  ob is an object wrapper
```

### How to get the constructor of the newly created object?

```javascript
	/* Use `constructor` property upon any object to find its constructor */
	console.log(ob.constructor); // [Function: Object]
	/*[Function:Object] --> it is created from a function named Object Or in other words the Object constructor  type is a Function*/
	console.log(typeof ob); // funciton
```

### How to get the print out of the constructor function?

```javascript
	/* One can use the console.log function to print the constructor fucnton with the help of   */
	console.log(ob.constructor.toString()) // function Object(){[native code]}
	// Or simply use + ""
	console.log(ob.constructor. + ""); /* native code indicates the language used to implement this function */
```

### How to get only the name of the constructor?

```javascript
	/*Since (ob.constructor) itself is a function, it can safely apply all services provided by its prototype.*/
	console.log((ob.constructor).name)); // Object
```

### How to instantiate only one object of a class from the constructor function?

```javascript
 	/* When a new object is instantiated through its constructor, the logic can be used in the constructor to make sure if it already exist or not. If it does exist it should not create another instance at all. But it creates an infinite loop and needs to be handled properly as shown below.*/

 	var singleton =( function Anyobject(){
	var instance;
	function createInstance(){
		var object = new Anyobject();
	}
	return {
		getInstance : function (){
		if(! instance){
			instance = createInstance();
			return instance;
		}
		} // function ends here
	}; // end of return
})();

var object1 =singleton.getInstance();
var object2 = singleton.getInstance();

if( object1 === object2){
	console.log("They are same instance");
}
 	
```


### How Object are protected?

```javascript
	/* JavaScript now provides three different levels of Protection directly to the object by;
	1.) Making Object non extensible: So new properties can not be added
	2.) Making Object sealed: So properties can not be reset or deleted
	3.) Making Object frozen: So that it can be be made read only as well.
	 */
```

### How to prevent extension to the objects? { First level of security }

```javascript
	/* Once object is prevented by applying `preventExtension()` method it can be undone. In other words once locked for extension can not be unlocked for extension. Note preventing extension of the object does not provide any other security.
	 */
	var o = { x: 10 }
	Object.preventExtension(o);
	o.y = 20; //fails silently, but x can be reset or  deleted
```

### How to make the object non configurable? { Second level of protection }

```javascript
	/* 
	When an object is non configurable its properties can not be reset or deleted. JS provides a `seal()` method to make object non configurable. 
	>Note: Non Configurable means that whatever the configuration it is created with can not be changed later on. If at the time of configuration its enumerable attribute was set to false it can no longer be reset.
	When an object is non configurable, it automatically becomes non extensible. Therefore when level 2 security is applied level one is automatically applied.
	 */
	var o = { x: 10 };
	Object.seal(o); 
	o.x = 30; // o.k, b/c  by default its writable attribute is set to true.
	o.y = 10; // not possible because it is also non extensible
	console.log(o); // { x: 30}
```

### How to make object frozen { highest level of protection }

```javascript
	/* Once an object is frozen, it gets the highest level of protection. All existing properties becomes readable only.
	*/
	var o = {x:20,y:30}; Object.freeze(o);
    console.log(Object.isFrozen(o));//true
    // All below commands fails silently
    o.x = 100;  // can not be reset
    delete o.y; // can not be deleted
    o.z = 200; // new properties can not be added
    console.log(o); // {x:20, y:30}
```

### What are static function defined on Object?

```javascript
	/* In class based OOP languages static methods are defined to be used only with the class name and not with the instances of the class.Similarly in JS static method is used with the object constructor instead of a class name, since an object constructor acts like a class name. Following are static methods of Object which are used very often;
	*/
	var arrayProp = Object.getOwnPropertyNames(Object);
	var fun = arrayProp.filter(function (element){
		return  typeof Object[element] === 'function';
		});
	console.log(JSON.stringify(fun));
	/* ["assign","create","freeze","getOwnPropertyDescriptor","getOwnPropertyNames","getOwnPropertySymbols","is","isExtensible","isFrozen","isSealed","keys","preventExtensions","seal","defineProperty","defineProperties","getPrototypeOf","setPrototypeOf"]
	 */
```

### What is a default prototype object?

```javascript
	/* JS has many standard built in objects. All of these objects descend from the one object known as `Object`. Thus giving them an identity of being objects. All these objects have their corresponding prototype e.g., an Array object would have its prototype set to `Array.prototype` which is regarded as its default prototype. Similarly this default prototype also has its prototype until reaches to `Object.prototype` which itself has no prototype thus set to `null`.
	In other words object created from literal or Object constructor has default prototype of `Object.prototype`	
	 */
	var obj = {}; var arr = [];
	console.log(Object.getPrototypeOf(obj) == Object.prototype) // true
	console.log(Object.getPrototypeOf(arr) == Array.prototype) // true
#
```

### How to change the default prototype of any object?

```javascript
	/* JS provides two ways to change the default prototype . One is an old style using inherited property known as `__proto__`, the other is a new static function defined on Object known as `Object.setPrototype(object,"prototype")` as shown below.
	 */
	function Form(){
		// Constructor function
	}
	//Add properties to Form prototype so that it can be shared among all
	Form.prototype.hasBoundries = true;
	var obj = {};
	obj.__proto__ = Form.prototype;
	console.log(obj.hasBoundries); // true
	// Another way of creating object with it prototype set to non default
	var obj = {
		__proto__ = // Set to anything you want
	};
	// Using ECMAScript-5 function
	var p = { x : 10 };
	var obj = {};
	Object.setPrototypeOf(obj,p);
	console.log(obj.x); // 10;
```

[//]:# ( Adding properties to objects in JavaScript)
## 5.0 Adding Properties to objects:

### In How many ways properties can be added to JS objects?

```javascript
	/* Properties can be added to object, either using expando properties by extending the object or by using method provided by ECMAScript-5 `defineProperty()` for only one property, if more than one property needs to be added use `defineProperties()`
	 */
	var obj = {};
	Object.defineProperty(obj,"x",{/* define its attributes here*/});
```

### When a property is defined what are the default attributes value set to?

```javascript
	/* It depends upon the environment where a property is declared and how it is declared as shown below:
	WORKING IN REPELL: when a variable is declared*/
	 var x = 10;
     console.log(Object.getOwnPropertyDeiscriptor(global,"x"));
    { value: 10, writable: true, // can be updated
        enumerable: true, // can be enumerated when needed
        configurable: false // the above behaviour can not be changed
     }
     // When object is declared with a property.
     var o = { z : 10};
		console.log(Object.getOwnPropertyDescriptor(o,"z"));
		{ value: 10,writable: true,enumerable: true,configurable: true }
```

### What are the default attributes value when declaring with `Object.defineProperty()` method

```javascript
	/* The rule of thumb is that the attributes which are not set gets the default value set to false.If only value is set and the rest are not touched,all the other attributes are set to false. Thus the property  can not be changed, enumerated or reconfigured. In order to be changed their behaviour configurable must be set to true.
	 */
	var obj = {};
	Object.defineProperty(obj,"x",{value:200});
	console.log(Object.getOwnPropertyDescriptor(obj,"x"));
//{ value: 200,writable: false,enumerable: false,configurable: false }
```

### What is an instance indexer?

```javascript
	/* It is a name given, when accessing object's property using `[]`. This method is useful when the  property name is not known and calculated at run time. */
	var obj = {fName:"Abdul", lName:"Sayyed",book_1:"ABC",book_2:"DEF"};
	var prop = "book_" + getPropertyValue(); // either 1 or 2 
	console.log(obj[prop]); // this[propertyName:String]:Object
```


[//]:# ( Arrays in JavaScript)

## 6.0 Array


### What does it mean to say JavaScript has an Array Class?

```javascript
	/* Array class terminology is used for referring to Constructor Function Array() by the programmer who comes from class based Object Oriented Language. Therefore all built in constructor whether Array , Object , Date , RegExp etc may be regarded as having their own class */
```



[//]: # ( Date in JS)

## 7.0 Date

### How to create a Date object with formatting?

```javascript
	var todayDate = function(){
		return (new Date()).toLocaleDateString('en-UK', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
console.log(todayDate());// Tuesday, Jan 10, 2017, 6:15 PM
```

[//]: # ( Loops in JS)

## Loops in JS

### What is the difference b/w for...in and for...of loop?

```javascript
	/* for...in iterates over a property names while for...of iterates over property values.
	 */
	var arr = ["one","two","three"];
	for (var i in arr){
		console.log(i); // 0,1,2
	}

	for (var i of arr) {
		console.log(i); // "one","two","three";
	}

	
```

## Iterating objects in JS

[//]: # ( ///////////////////////////////////////////////////////////////////)
[//]: # ( Git )

### If you run `git status` and it shows no change what does it mean?

```javascript
	It simply means that there are no changes in three trees, namely `HEAD,Index and Working Directory`
```

