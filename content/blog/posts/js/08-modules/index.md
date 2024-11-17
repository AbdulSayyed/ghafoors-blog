---
date: "2017-04-12"
draft: false
title: "JavaScript Modules"
description: "Understanding the use of modules in JavaScript."
categories:
  - "Programming Languages"
tags:
  - "JavaScript"
  - "Modules"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---


[//]:# (original date is of 2016-11-21)


## 1.0 What are modules

- Modules play a crucial role in organizing and structuring code within an application. They allow developers to break down large codebases into smaller, manageable pieces. In this article, we'll delve into the concept of modules, their evolution, and how JavaScript and TypeScript handle them.

- It is a technique which keep the code organizes in any programme. Java Script default way of creating object using literals is one of the ways of module pattern.

### 1.1 Object literals

```javascript
	var myModule = {
	 // data
	 }
```

- The above is also a pattern where data can be organized within the curly brackets. This method has some shortcoming from data hiding point of view which is deemed essential in `object based or object oriented programming.`

### 1.2 Module Pattern

- It is a `unique style of writing  code` that makes the code behave as a separate unit known as a `module`. It is commonly achieved by making use of Immediately Invoked function expression that creates an anonymous function. The code inside the anonymous function lives in a scope that provides privacy and state. 

```JavaScript
	(function() {
    // declare private variables functions
    return {
      // declare public variables or functions
    }
})();
```

- In above section variables declared as private are only accessible inside this function and are not visible outside thus providing `data encapsulation` let's look at this example below.

```javascript
	var myModule = (function(){
		var guestCounter = 0;
		return {
			increaseCounter = function () { return guestCounter++;},
			restartCounter = function () { guestCounter = 0;}
				};
		});
		// Testing the module
		// Using the module upon the guest entry
		myModule.increseCounter();
		// When need to restart the counter
		myModule.restartCounter();
```

- The difference between using object literal as opposed to module pattern is that here  the local variable `guestCounter` is hidden from the global scope and tightly encapsulated. The two functions used within this module can not be accessed by the outside world except the variable receiving the return object thus regarded as effectively name-spaced. What it means that the functions defined inside the module can only be accessed by a `name-space ( variable receiving the return object)` hence a template of a module can be defined in  a following way

```js
var nameSpace = ( function () {
	// private variable
	var privateVariable1 = 0;
	var privateVariable2 = 1;
	// private method
	var privateMethod = function (anyValue) {
		console.log(anyValue);
	};
// object that needs to be returned so available to nameSpace
	return {
			publicVariable : "public",
			publicFunction : function (value) {
				privateVariable1++; privateVariable2--;
				privateMethod(value);
			}
		}// end of return
});
```

- From the above pattern it can be seen that avoiding object literal and using module pattern, significant amount of benefits can be achieved which leads to safe programming. The methods which needs to be exposed can either be defined within the return object or can be defined separately as functions and can be referred in the return object as shown below.

```js
	var nameSpace = (function (){
		//private variable
		//private method
		//method to Expose can be defined here
		var printName = function (){ console.log("Printing Name")}
		//Object to return
		return {
			print:printName,	// function defined above
			......
				}
		});
```

### 1.3 Prototype Design Pattern

- Below a JavaScript constructor function is created then a method name `run`is added to this object. This is a how it is done. The property `prototype` is inherited implicitly when a JavaScript object is created

```javascript
	var OrganiteModel = function () {
		this.shape: "pyramid",
		this.energyType:"Scalar",
		this.use:"nonCommercial"
	};
	OrganiteModel.prototype.run = function (){
		// running
	};
```

- In above construction an instance can be created using a constructor function which will retain the state initialized in the constructor sharing the function `run` with other instances. Adding function to prototype can done in the following manner

> Note the outside world can not touch anything except what is exposed to them by returning an object with two properties.

```javascript
	var OrganiteModel = function () {
		this.shape = "pyramid";
		this.energyType = "Scalar";
		this.use = "nonCommercial";
	};

// Adding prototype
 OrganiteModel.prototype = function (){
 	var on = function (){ console.log("It has been turned on");};
 	var off = function () { console.log("It is off!");};
 	//return 
 	return {
 		// returning two properties
 		turnOrganiteOn : on,
 		turnOrganiteOff : off,
 	};
 }();
 var myOrganite = new OrganiteModel();
 myOrganite.turnOrganiteOn();
 myOrganite.turnOrganiteOff();
 
```

- The above example also shows how function `on` and `off` are protected from outside world.

### 1.4 Observer Design Pattern

- In above example no 
- 
-  
-    is passed to this module but if passed, the data within this module  can be used  as their local variables. For example the following code accepts two parameters to be used in this module.

```javascript
	var myApp = {};
	..........
	..........
	// other code
	
	// module
	(function (app,$) {
		// app and $ are available inside the module
			.........//some code
		}(myApp,JQuery));
```

- In the above code JQuery is a third party global but myApp is probably the only one global  defined at the top level. When a third party global is used in your module you are said to have `imported` a module. And the third party library, module or a package used in your program  is said to have exported their package. In case of JQuery you would either include it in your webpage or you would use in other method to load it in your programme. JQuery defines one global variable `$` that is used to get the functionality provided by this library.

- The global variable above `myApp` can be declared inside the module too so it can be used  with the rest of the code and return to be used by other code in the programme. Returning the object using this pattern is known as `exporting module` . The receiving variable is said to become the closure that have access to internal state of the object returned. Let's look this scenario  below.

```javascript
	var myCar = ( function () {
		var myApp = {};
		var itsName = "Farari";
		var value = 300,000; // private variable
		var getValue : function(){return value;}
		//module properties
		myApp.name = itsName; 
		myApp.getName = function() {console.log("myApp name is" + myApp.name);}
		//
		return myApp;
		}());
```



## 2.0 Factory pattern


### Module systems in js



1. CommonJs
2. AMD 
3. UMD 
4. ES 
   


### 2.1 NodeJS module Systems

- NodeJs uses CommonJs
  
1. Code resides in separate files
2. Code in one file is not visible to another file unless it is exported explicitly.
3. From a simple variable to object can be exported.
4. Usually a function is exported and used in other files.
5. Follow the standards [require](https://requirejs.org/docs/api.html) if there is any doubt.
6. The file name becomes the module name which is loaded using require with the correct path.
7. It has two key words `exports` and `require`. NodeJs has a `module.exports` property that can assigned a new value.
8. Example showing a function is exported

```javascript
	var addThem = function(x,y){
			return (x + y);
	};
	module.exports = addThem
```

Save this code in file `addThem.js` and have it available anywhere in node by first using the `require` method using the correct path.

```javascript
	var addThem = require('addThem'); or 
	var adding = require('./addThem'); or
	var result = require('addThem')

	result(10,20); // 30 or

	// do it directly at the time of lading.
	require('addThem')(10,20); //30
```

- There are some disadvantages of CommonJs
  
1. You can have only one module in a JavaScript file.
2. If you want to use it in a browser, additional tools are required.
3. Not suitable in some situation being synchronous.

### 2.2 ES modules

- They keyword `export` is used before any line of code to be exported, it may be a `variable, function` etc. Give this file any name, it becomes a module  and import it in another file.
- When importing use `import { my-file-name} form `./my-file-name.js` 

### 2.3  Different way of using export and import module

1. **Named export and Named import**
   + Whatever you are exporting from your module should have a name.
   + variable name, class name or a function name. It can be used if you only use a particular property and not the whole file.

```js
// js/sum.js
export function sum(a,b) { return (a + b) }
// there are more exports present
export function square (a,b) { return ( a * b) }
```

- And when you want to import only one function in another file 

```text
// main.js
import {sum} from './sum.js`
//use sum here
```

2. **Default export and default import**
   + You add the `default` key word before what you like to export. 
   + Do no use more than one default export, though you are allowed to have more than one.
   + In this case curly brackets are removed otherwise you will get an error.


3. **Default export as a named export**
   + JavaScript allows an alias using the `as` keyword, but when you export it you use an export clause, you must use `as` to work otherwise it will throw an error. The clause is given below.
  
```
// file sum.js
function sum ( a, b) {
	return (a + b);

// named default export
export {
	sum as default
	// other items can be present here.
}

// Note in export you can have number of items and can rename them as well.

```

4. Rename exports and Name imports
   + JavaScript allows you to rename your export and use the new name to be exported

```
// sum.js

function sum ( a, b) {
	return ( a + b );
}
export {
	sum as add,
}
```

- When importing use 

```
// main file
import { add } from './sum.js`

console.log ( add(2 + 3));

```

4. **Namespace import**
   + So far a we used a named property to be exported and imported, but you can use all of them using namespace `*`. This symbol `*` means everything.
  
```
import * as <newName> from ./<file-name.js>

newName.sum(2,8)


```




- 

### 2.4 Dynamic imports

- The above are called static imports, they must be at the top level of the file and you can not use inside a block.
- In dynamic imports an `import()` operator can be used to load the code on demand. For more see the articles below.
- 
---

## Typescript and modules



## 1. **Modules in JavaScript Before ES6**

Before ECMAScript 6 (ES6), JavaScript lacked a standardized module system. However, developers adopted two popular strategies:

- **CommonJS (CJS)**: CommonJS was widely used in server-side environments (e.g., Node.js). It allowed developers to define modules using `require` and `module.exports`. CommonJS modules were synchronous and loaded dynamically at runtime.

- **Asynchronous Module Definition (AMD)**: AMD emerged for browser-based applications. It used libraries like RequireJS to load modules asynchronously. AMD modules were suitable for client-side development and supported dynamic loading.

## 2. **Modules in JavaScript with ES6**

ES6 introduced native support for modules in JavaScript. The ES6 module system provides a unified syntax for defining and importing/exporting modules. Key features include:

- **`import` and `export` Keywords**: Developers can use `import` to bring in functionality from other modules and `export` to expose functionality from their own modules.

- **Static Analysis**: ES6 modules are statically analyzable, allowing tools to optimize and tree-shake unused code during bundling.

## 3. **TypeScript's Role in Modules**

TypeScript shares the same module concept as JavaScript. Here's how TypeScript handles modules:

- **Unified Syntax**: TypeScript's module system aligns with the ES6 module syntax. Developers can use `import` and `export` just like in ES6.

- **Targeting Different Module Loaders**: TypeScript allows developers to target various module loaders when emitting JavaScript code. Supported targets include Node.js (CommonJS), require.js (AMD), Universal Module Definition (UMD), SystemJS, and native ES6 modules.

## Conclusion

Modules are essential for maintaining code quality, reusability, and scalability. Whether you're working with JavaScript or TypeScript, understanding modules and their role is crucial for building robust applications.

Remember to explore further resources and experiment with modules in your projects. Happy coding! 🚀

---

**References**:
1. [How To Use Modules in TypeScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript) ¹  
2. [TypeScript Modules](https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/) ²
3. [TypeScript: Documentation - Modules - Theory](https://www.typescriptlang.org/docs/handbook/modules/theory.html) ³
4. [Understanding JavaScript Modules As A TypeScript User - geekAbyte](https://www.geekabyte.io/2018/12/understanding-javascript-modules-as.html) ⁴

Source: Conversation with Bing, 14/05/2024
(1) How To Use Modules in TypeScript | DigitalOcean. https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript.
(2) TypeScript Modules. https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/.
(3) TypeScript: Documentation - Modules - Theory. https://www.typescriptlang.org/docs/handbook/modules/theory.html.
(4) Understanding JavaScript Modules As A TypeScript User - geekAbyte. https://www.geekabyte.io/2018/12/understanding-javascript-modules-as.html.


















### References

- [modules](https://blog.logrocket.com/javascript-reference-guide-js-modules/)

- [Read this article for more](https://gohugo.io/content-management/cross-references/)