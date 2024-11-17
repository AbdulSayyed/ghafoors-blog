---
date: "2017-02-22"
draft: false
title: "JavaScript Objects"
description: "Exploring JavaScript objects and their properties."
categories:
  - "Programming Languages"
tags:
  - "JavaScript"
  - "Objects"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---


[//]:# (original date is of 2016-11-21)

## 1.0 Object Oriented Programming

JavaScript was not at all intended to be an Object Oriented Programming Language. At the time of its creation there were already other languages present which were doing this task, namely C++ was the modified version of C with Classes and other object oriented features. Another language which took the grounds was Java which was basically designed to serve the concept revolving around Object Oriented Programming and to overcome the shortcomings present in C++.

JavaScript was not introduced for such a programming concept yet the designer was aware of the paradigm shift, which was moving from procedural programming to Object oriented programming. Therefore to say that it was an Object Oriented Programming Language would be completely unfair. No Programmer who knew C++ and Java or any other language like small-talk would agree that JavaScript was not meant to be Object Oriented. However, it had the facilities provided by the designer to have some features of Object Oriented Languages. For example to share the code from other object JavaScript use prototypal inheritance as opposed to class inheritance. Similarly JavaScript also provided features of functional programming such as treating functions as values and passed around to other functions which is only found in functional language. Thus to summarise, JavaScript is a prototypal based  functional language which has evolved in last two decades.

### 1.1 Objects Data Type

An individual piece of data is usually stored in a variable of some type but when you have number of variables which relates to a single entity then  they are usually stored in some sort of structure so they can be more easily defined, maintained and manipulated while having interaction with other units.
JavaScript way of grouping related variables in a self contained unit is to store each of them in key/name and its value pair, known as  properties of the
object and their values. This  technique of storing variables is known as associative arrays, dictionary or  hash tables. Since the  key is stored as a string , It basically provides a mapping between key {string} to  value thus also known as map.

One of the uses of objects is to organize self contained unit possessing some properties and providing some methods. Before ECMAScript-6 there was no concept of classes in JavaScript and inheritance was implemented through a special property `__proto__` called Prototype. But with ECMAScript-6 class syntax is introduced to help programmers coming from class based object oriented language. This introduction is only  regarded as synthetic sugar coated technique, what does it mean is that internal system is same as before.

## 2.0 Creating JavaScript Objects

- In JavaScript there are different  ways to create an object which way you choose depends upon its use. Some of common ways of creating the object are mentioned below followed by their examples. 

1. Using  literals ` var obj = { }` // ECMAScript-3
2. Using Object constructor `var obj = new Object()` // ECMAScrip-3
3. Using Constructor function `var obj = new <function name>`
4. Using `Object.create(prototype)` from a given prototype // ECMAScript-5
5. Using classes and instantiating the object `class <identifier>{ .....}`   // ECMAScript-6


### 2.1 Creating Objects with Literal { }

- The easiest and preferred way of creating an object is to  create it with curly brackets known as `Literal notation`.

```javascript
    var obj = {};//an empty object
```

- A name does not have to be generic, it can be descriptive so that it makes us easy to comprehend.

```javascript
   var obj = {}; 
```

- In above case, JS provides a quick way of creating an object which is created internally using the special function called constructor function. it does not have any state as no members exist yet. But properties and methods can be added later on when needed. This way of adding properties  is regraded as expando properties and regarded as extending the object.

[//]: # (In class based Object Oriented Languages when a class is designed it is designed with due care so that the instance or new object created from this class gets its initial state. This state is maintained by the "properties / member variables" of the class And  its behaviour is maintained by the methods exposed by this class. )

### 2.2 Properties of Objects

- Until ECMAScript-5 there has been two ways to define properties of objects but ECMAScript-5 introduced a new way to define the property with more control over them;

- At the time of object creation,`var myObject = {x: 10 , y: 20}`.
- Assign properties to object by extending the object, known as `expando property`,`mObject.z = 30`
- Use ECMAScript-5 provided built in methods `Object.defineProperty({obj,prop,itsValue})` for a single property or for more than one use `Object.defineProperties(obj......)`.

- The first way  is to define the properties at the time of object creation. So when an object is created they already have he properties of the object  The second way is to add properties to the object after the object has been created. This is a very useful  which allows you to add more properties on the fly to any object and delete them when not needed. These properties are also known as `expando propertie`s and done by extending the object.

- Prior to  ECMAScript-5, properties had only one attribute, that is every property had its value but ECMAScript-5 added other attributes using the `property descriptor object`.

### 2.3 What is JS property descriptor?

- A property descriptor is another object that holds information about the properties, it is sort of meta data object. It can be of two types either `Data Descriptor` or `Accessor Descriptor`. In JS it is also a separate object created whenever an object gets created to keep track of new object's properties. It can be accessed using `Object.getOwnPropertyDescriptor(obj)` function. **Data Descriptor** deals with the four properties of the descriptor object `{value: "",writable:"",enumerable:"",configurable:""}` while **Accessor Descriptor** deals with `get` or `set` or with both of them. 


### 2.4 Properties' attributes

- Property attributes can be set at the time of creating properties but  if not created explicitly, they get default values assigned to them. Let's see what are those default values;

```javascript
    var x ;
    Object.getOwnPropertyDescriptor(global,"x");
    /*{ value: undefined,  writable: true,  enumerable: true,  configurable: false }*/
```

- **Value**  Its value assigned when you declared a variable, if not it gets the default value of `undefined`.

- **Writable** means that the old value can be deleted and new values can be assigned by default it is assigned `true` thus can be updated.

- **Enumerable**:As the name indicates that if set to true the variable can be accessed using enumeration like `for..in` loop or using `object.keys`. And can be saved permanently using `JSON.stringify` method. By default it is assigned `true`. In case of being `false` this property is not enumerated.

- **Configurable**:To control the above two attributes behaviour i.e., whether the above two can be set to other values or not. If allowed that is `configurable = true` , they can be set to either `true` or `false` . But if `configurable = false` the above two can not be changed. Their attributes remains as it is as the time of creation and the property can not be deleted.


### 2.5 Adding Properties to Object

In real life, objects have properties and behaviours, they do not exist without them. In JS, one can create  objects with the associated properties or may add them later on as needed and  delete them when not needed.

```javascript
    var obj = {}; 
    obj.fname = "Jack";      //adding properties using . dot notation
    obj.fname = "Jill";      //it can be updated, it is not a constant
    console.log(obj.fname);// Jill. accessing properties using dot(.) 
    console.log(obj['fname']);// Jill.  using square brackets []  
    delete obj.fname;    //deleting properties
    /*Note: you can not delete inherited properties. Every object when created inherit
    some properties automatically*/
    console.log(obj.fname);//undefined
```

### 2.6 Object Properties can be accessed in two ways

To access object properties javaScript provides two ways, either use dot notation `.` or use square brackets notation`[]`. Therefore `console.log(obj.fname)` and `console.log(obj['fname'])` will produce the same result. When using square brackets notation an expression can be used to access object's property, provided expression must yield to a property name. For example, if ` var alias = "fname"` then `console.log(obj[alias])` will provide same result. Just like other variables behaviour, if a property is not defined, accessing it will return an `undefined`. And if an attempt is made to get the value of an `undefined` the compiler will throw `TypeError`.

#### 1.2.7 Creating Object with defined properties

- It is not necessary that you first create an empty object and then start adding properties to it. Objects can be created with their existing properties.

```javascript
   var point = {x:10,y:20,draw: function(dx,dy){console.log("Drawn");}} 
```

#### 1.2.8 Why to use square bracket notation?

- It is either used  to access or set properties. If you want to use any [reserved](link) words as a name of your property or use any special characters or spaces between the property name or any numerical value then you will have to use square brackets notation to access it and enclosed it with quotes, instead of dot notation otherwise it will be flagged as an error. Similarly there will be times when accessing properties dynamically using dot operator would not be possible but square bracket would be used instead. 

Another place where you would use the square bracket notation instead of dot is when you do not know the property before hand. This happens often when dealing with web pages and making changes dynamically.

```javascript
    //var point = { x: 10, y: 20, z axis: 0} // error b/c of space, 
    var point = { x: 10, y: 20, 'z axis': 0, '!': "Exclamation"} // correct
    // To access the properties enclosed with quotes, you can not use dot (.)
    //console.log(point.!);//error
    console.log(point['!']);// Exclamation. o.k
    console.log(point.time);//time is not defined
    console.log(point.time.show); // can not read property of undefined. 
    /* TypeError: The above line comes out as a type error, and very common specially in dynamic environment where one tries to invoke some service on an object which does not exist. In the above example the `time` never existed but error is thrown not when it was accessed but when a service is invoked upon it.*/
```

#### 1.2.9 What are assessor properties?

- Sometimes properties values are not needed or get changed or computed whatever the case, setter provides the way to assign values to properties. You can set the value to the property or provide the setter method to do it, **both can not be done at the same time**. If setter or getter is used property may be called as `assessor properties` to differentiate from **Data properties**.

If a property has both getter and setter method it is called read and write property. To make the property readable only, one can only provide getter method. Similarly if it has only setter it acts as a write only property which makes it unique in a way that Data properties can not be made write only unless ECMAScript-5 attribute `write ` is set to `false`.

In the example below one **Data property** `start` is set to an object as well as Assessor property ( by using the key word `get`). The name of this property is `startPlusPlus`, since only getter is used it is only readable. Note the clever technique used here , it is the getter which computes the value of assessor property using given expression. It should be noted that  a new property does not exist until it is accessed but its initial value is based on **Data property**. 

#### 1.2.10 Read only assessor property

```javascript
    'use strict'
    var obj = {
        start : 0, // Data property
        get startPlusPlus(){return ++this.start;} // Assessor property
    };
    obj.startPlusPlus = 10; // in non strict mode ignored silently
    /*TypeError: Cannot set property startPlusPlus of #<Object> which has only a getter*/

    console.log(obj.start); //0
    console.log(obj.startPlusPlus); // 1
    console.log(obj.startPlusPlus); // 2
```

#### 1.2.11 Read and Write assessor property

```javascript
    var obj = {
    seed : 0,
    get randomNumber(){ return Math.floor(Math.random() * this.seed)},
    set setSeed(num){this.seed = num;}
};
    obj.setSeed = 256; // This will yield a number between 0 and 255
    console.log(obj.seed); // 256
    console.log(obj.randomNumber); //249
```

-   It should be noted that get and set may look like functions but they are not. This getter and setter method was provided in ECMAScript-3 API. Now ECMAScript-5 has define property method which is more elegant and provide options which were not possible earlier. For example prior to ECMAScript-5, properties were writable, enumerable and configurable (set to true by default) and there was no way to change this behaviour. Therefore it is better to avoid set/get API of ECMAScrit-3 and use ECMAScript-5 instead.

#### 1.2.12 Like other variables object's properties have some attributes

When any property is added to JavaScript object it automatically gets some attributes associated with it. Thus property does not have only values but also other attributes namely `writeable enumerable,  and configurable `. These attributes tells  if the property can be enumerated ( if enumerable), can be changed ( if writeable  ) and these `writable and enumerable` can be reset ( configurable) that is the status can neither be changed nor the property can be redefine. Thus the default behaviour is shown below

```javascript
// This is the behaviour of Repell shell
    var x = 10;
     console.log(Object.getOwnPropertyDeiscriptor(global,"x"));
    /*{ value: 10, 
        writable: true, // can be updated
        enumerable: true, // can be enumerated when needed
        configurable: false // the above behaviour can not be changed
     }*/
// This is the behaviour of file.js where global is not a host variable, 
    x = 10;
    console.log(Object.getOwnPropertyDescriptor(global,"x"));
    //{ value: 10,writable: true,enumerable: true,configurable: true }
// This the behaviour when an object is defined whether in file.js or in REPELL
    var o = {y:23};
    console.log(Object.getOwnPropertyDescriptor(o,"y"));
    //{ value: 23,writable: true,enumerable: true, configurable: true }
```

By default if these attributes are not set, then property can be changed and enumerated and this behaviour can not be changed.To have control over this behaviour, ECMASCript-5 provides a method which can be used to define a property with greater control. Once this function is used to set the value of a property and if others are not set. Then by default they are set to false thus this property can not changed and this behaviour can not altered. Thus you need to pay attention when using this method.

As it is shown above when working within nodeJS environment, a variable defined in an object can be redefine with `Object.defineProperty()` method which allows its attributes to be changed as discussed in section below.

```javascript
    var o = { y: 23 }; // by default attribute writeable is true
    o.y = 100; // value is updated 
    console.log(o.y); // 100
    Object.defineProperty(o, "y", { writable: false });
    o.y = 200; // fails silently
    console.log(o.y);
```

#### 1.2.13 Adding properties with ECMAScript-5 approach

- ECMAScript-5 provides a built in function to set the attributes of the property of the object. There are two functions to define the property one is to use when defining only one property and the other one is when defining more than one.

```javascript
    var obj = {};
    Object.defineProperty(obj,"x",{value:200});
    console.log(obj.x); //200
    console.log(Object.keys(obj));// if not define enumerable is false 
    obj.x = 300; // can not be done as if not define, writeable is false.
    console.log(obj.x); // 200 remains same 
    // it can not be redefined as well
```

Let's define all the attributes as shown below.
```javascript
    var o = {};
    Object.defineProperty(o,"x",{value:100,
                                writable:false,
                                enumerable: true,
                                configurable: false});
    console.log(o.x); // 100. 
  // Since writable is set to false it can not be re assigned any value.
    o.x = 20; // silent failure
    // In strict mode it is flagged as a TypeError: Cannot assign to read only property 'x' of object
    console.log(o.x); // 100
    console.log(Object.keys(o)); // [x] . Since enumerable is true
    // Try to reassign x
    Object.defineProperty(o,"x",{value:200,writable:true}); 
    //TypeError: Cannot redefine property: x
```

- The above shows that if a property is defined with `configurable : false` the same property can not be redefined at all unless when it was being defined, was set to true. It should be noted that, these attributes are set to individual properties and not to the object. Thus other properties can be added and configured.

```javascript
    var o ={};
   Object.defineProperty(o,"y",{value:100,writable:false,configurable:true});
   console.log(Object.keys(o)); // []
   Object.defineProperty(o,"y",{enumerable:true});
   console.log(Object.keys(o)); // [y]
```

#### 1.2.14 Setting more than one property Object.defineProperties()

```javascript
    var obj = {};
    console.log(obj);
    Object.defineProperties(obj, {
        "x": { value: 2, writable: true, configurable: true },
        "y": { value: 3, writable: true, configurable: true },
        "r": { value: 10, writable: false, configurable: false }
    });
    console.log(Object.keys(obj)); // []. empty
    console.log(obj.propertyIsEnumerable("x")); // false
    // Following loop will not run because condition is not true.
    for (var prop in obj) {
        console.log("properties are " + prop);
    }
// Either change the attribute individually
Object.defineProperty(obj,"x",{value : 20,enumerable:true}); 
// Or use the following to see the property only
console.log(Object.getOwnPropertyNames(obj));//[ 'x', 'y', 'r' ]
console.log(Object.getOwnPropertyNames(obj).sort());//[ 'r', 'x', 'y' ]
```

## 1.3 Object Attributes

- Not only object's properties have attribute but object itself has attributes which defines its behaviour. These attributes are `prototype,class and extensible`. 

### 1.3.1 Prototype Attribute of an Object

- ECMAScript-5 provides a way to get object's prototype by using `Object.getPrototypeOf(target)` method. Before ECMAScript-5 it was made possible by using the object inherited property `__proto__` or using `o.constructor.prototype` for the object created by a given prototype `Object.create(fromP)` method. To find out if one object is prototype of the other or is part of the prototype chain `a.isPrototypeOf(b)` ( to find out if "a" is prototype of "b") is used.

```javascript
    function fn(){ var age = 10;}
    var a = {size:10}; // a gets default prototype
    var b =  Object.create(a); // b is created from prototype a
    var c =  Object.create(fn);// c is created from prototype fn
console.log(Object.getPrototypeOf(a));  // {}
console.log(Object.getPrototypeOf(b)); // {size:10}
console.log(Object.getPrototypeOf(c)); // [Function fn]

console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b) );// false
console.log(Object.getPrototypeOf(b) === Object.getPrototypeOf(c) );// false
console.log(Object.getPrototypeOf(c) === Object.getPrototypeOf(a) ); // false

//Constructor Prototype
```


[//]: # ( The following topic needs to be done )
### 1.3.2 Class Attribute

- Since JS never had any classes or class syntax before ECMAScript-5. Thus more attention to be paid here. In JS the user type is created from the `constructor function` and this is the function which acts as class of its type.

```javascript
   function Animal() {
    var breath = true;
   }
   var rabbit = new Animal();
   console.log(rabbit)
```

### 1.3.3 Extensible Attribute

If the properties of the object can be added to the object after its creation the object is said to be extensible. All built in and user defined objects are implicitly extensible unless they are explicitly made non extensible. To make it non extensible, it can be passed to `Object.preventExtensions()` once is it non extensible it locks down the object into a locked state and prevent it from the outside tampering.

```javascript
   var o = {}; // By default it is extensible
     o.x = 10; console.log(o); // { x: 10}
    Object.preventExtensions(o); //can not be extended
    o.y = 10; // fails silently , y is not added
    console.log(o); // Still { x: 10}
    // property is still configurable and can be changed and deleted
    o.x = 100; 
    console.log(o); // { x: 100}
    delete o.x; // it can still be deleted 
    console.log(o);
    o.x = 20; // fails silently because it can not be extended.
    console.log(o); 
```

Though the above code prevent the object to be extended but already existing properties can still be set and deleted. To make an object non extensible and as well as make its properties non configurable another method ` Object.seal()` can be used instead of the above as shown below. Making object properties non  configurable means that whatever attributes the properties  are set with can not be reset. If a property is set with `writable true`, it can cont be made `false`  because it can not be re configured. 

```javascript
    var  o = {x:10,y:20}; 
     Object.seal(o); // Making it sealed 
     o.z = 100; // fails silently 
     delete o.x; // fails silently
     console.log(o);
     // changing the value of properties
     o.x = 1000; o.y = 898; //if it was allowed before,will still be allowed
         console.log(o);// { x: 1000, y:898}
// Properties can also be reset because before sealing the object 
// their writable state was set to true
     console.log(Object.isExtensible(o)); // false
     console.log(Object.isSealed(o)); // true
     console.log(Object.isFrozen(o)); // false
```

Object which needs to be provided high level protection can be frozen by using `Object.freeze(o)`. If an object is made frozen, it automatically prevents its `extension` and makes it non `configurable` but at the same time it also makes its properties read only. To see if the object is frozen one can use `Object.isFrozen()` just like other method used to see if the object is sealed `Object.isSealed(o)` or extensible. `Object.isExtensible(o)` 

```javascript
    var o = {x:20,y:30}; Object.freeze(o);
    console.log(Object.isFrozen(o));//true
    // All below commands fails silently
    o.x = 100;  // can not be reset
    delete o.y; // can not be deleted
    o.z = 200; // new properties can not be added
    console.log(o); // {x:20, y:30}
```

## Object main services and static methods

All JS objects by default share services from their corresponding prototype. These services are mainly methods which are used by newly created instance. An instance of `Array` class gets to share everything from the `Array.prototype` and being an object it also get to share from `Object.prototype` and so on until the prototype inheritance reaches the point where the prototype becomes the `null`. Apart from these shared methods, a programmer often use `static` method define on Object constructor which are given below.

```javascript
    var arrayProp = Object.getOwnPropertyNames(Object);
    var fun = arrayProp.filter(function (element){
        return  typeof Object[element] === 'function';
        });
    console.log(JSON.stringify(fun));
    /* ["assign","create","freeze","getOwnPropertyDescriptor","getOwnPropertyNames","getOwnPropertySymbols","is","isExtensible","isFrozen","isSealed","keys","preventExtensions","seal","defineProperty","defineProperties","getPrototypeOf","setPrototypeOf"]
    */
```

When discussing about shared services from the prototype object, there are some methods which can be over ridden to provide object specific details. For example `toString()` method which gets shared from `Object.prototype` when applied to any object does not show much. Note whenever you apply concatenating operator `+` to something which is not an string JS automatically apply `toString()` function to convert it string.

```javascript
    var o = { x : 1, y : 2};
    console.log(o.toString()); // [object Object]
    console.log(o); //{x: 1, y: 2}
    console.log(o + ""); // [object Object]
    console.log(JSON.stringify(o)); //{"x":1,"y":2}
```

Because there is no useful information provided by the `toString()` method, the other classes defines their own behaviour of `toString()` method. For example the `Array , Date and Function` classes over rides this function to provide useful information as shown below.

```javascript
    var y = [123,4567]; // An array object
    console.log(y); // [123,4567]
    console.log(y.toString()); // 123,4567
    var fn = function(){console.log("I am a function");};
    console.log(fn); // [Function: fn]
    console.log(fn + "");// function(){.....}
```


## Creating objects with Object constructor i.e., using `new` operator

Programmers who come from class based object oriented background often get puzzled with the way JavaScript works. For example it is the very basis of Object oriented programming to instantiate the object in order to create it from its class. And to do so they are programmed to use class constructor with the help of `new`  operator. In JavaScript the following method is used to create either user defined or pre defined objects with `new` operator. They are known as built in constructor.

```javascript
    // User defined object
    var point = new Object();   //same as {}
    point.x = 10;
    point[y] = 20;
    console.log(point);
    // Predefined object
    var myObject = new Object();   // same as creating from literals {}
    var grid = new Array();     //same as creating from square brackets []
    var today = new Date();     //No short cut present
    var word = new RegExp("JavaScript");    //No short cut
```

>No matter which book or article you read, there will be an advice "Don't use `new`" to create an object, use object literal `{}` instead.

Both methods do the same job as long as you are not doing any special computation which requires memory optimization. Keep in mind `with object literal no instantiation is required and your code is optimized` as far as less typing  is concerned, on the contrary with `new` more typing is involved and `object instantiation is performed`.

### Objects have behaviour

Objects not only have some properties ( object's attributes) attached to them but they contain  methods. Functions in JS, when defined in object are called methods ( and in all other languages too). A function's typical job is to do something (compute some values) and return the result. This can be understood as objects' behaviour.  In JavaScript object's properties are assigned to functions to exhibit the behaviour of an object and known as methods.

```javascript
    var point = { 
        x:10,
        y:20,
        move: function(){ 
            console.log("point has moved")}
    }
    // invoking a function
    point.move();
    //or
    point['move']();
```

### Calling or Invoking objects' methods

In above code  apart from `x` and `y` the word `move` is also a property of the object but since move property is assigned an anonymous function. It behaves like function identifier and regarded as object's method. As we have learned before to execute this method we will have to use trailing brackets when invoking a function. Thus ` point.move()` will invoke this function. It will be interesting to note that just like the other way of accessing the property i.e., using square brackets notion, you can also use square bracket notation to invoke the method. After all it is a legal property of this object. To do so,  `point['move']()` will be used. But it is not the accepted practise among programmers. Hence be aware of what can be done and what is accepted as a good practice.

>Note: When a method is invoked upon on any object. A key word `this` is set/given to that method by providing it a way to access objects' variables/properties.

### Accessing object's properties from within its own method

When a function is defined in an object it can only be invoked through that object. Therefore inside the definition of the function  referring to the same object  needs to be done explicitly by using the object name or with the keyword `this` which is given to function when it is invoked with respect to its execution context.

```javascript
     var point = { 
        x:10,
        y:20,
        move: function(){ 
            //console.log(x,y) // error x and y are not accessible here 
            console.log("x  is " + point.x + " while y is " + point.y);
            console.log("x is " + this.x + " while y is " + this.y)}
    }
    point.move();
    console.log(point.x); // both x and y are public members
    console.log(point.y);
```


### Object's properties are mutable

In the above code the values of `x` and `y` are accessible to everybody (public ), what it means that a user can access the values using the object without having to worry about anything. Not only the values can be accessed but changed easily as done here. In fact, the `mutability of any object's properties` reflects  the objects' change in state.

```javascript
    var point = { x:10, y:20,
        move: function (dx,dy){ 
            this.x = this.x + dx; this.y = this.y + dy;
            console.log("new x is " + this.x + " while new y is " + this.y);
            },
        deleteThem: function (){
            delete this.x;
            delete this.y;
            console.log("new x is " + this.x + " while new y is " + this.y);
        }
}
    point.move(100,10); // object state is changed
    point.deleteThem(); // object state is changed
```

### Object can contain other objects as its properties

It is very common in JavaScript code to see an object containing another object for one or the other reasons. It may be that they have containing relationship or the programmer has chosen this design. Let say I have a car that has an alarm. I decide to have an alarm property of the car as an object.

```javascript
   var car = {
        make: "Toyota",
        model: "Prius",
        // alarm is a property of a car which itself is an object
        alarm: { type:"standard", isModified:false,isOn:true},
        starts: function(){
            if(this.alarm.isOn){
                console.log("starting"); 
                }else{console.log("can not start")}
        }
   }
   car.starts();    //starting
   car.alarm.isOn = false;  // car state is changed
   car.starts();    // can not start
```

### Enumerating object's properties

Often you need to see what is present in  concerned objects. JavaScript provides a built in function known as `for...in` loop . It loops through the given object and its prototype chain and returns  properties names along with their values in a string format. A very handy function to see what is present in your object. There are some other functions which we will discuss later on.

```javascript
   var courseNames = { x:1,y:2,z:11};
   for(var prop in courseNames){
        console.log("courseNames." + prop + " =" +courseNames[prop]);
   } 
```

Since there was no prototype chain the function returns not only the property names but associated values of the target object only. When retrieving with `for...in`loop it also retrieves methods and the other objects from the target object therefore you need to write code to filter them out as done  following.

```javascript
    var courseNames = { x:1,y:2,z:11, anyFunction:function(){},emptyObject:{}};
    var propName;   // you can add code to filter objects as well if you need
   for(propName in courseNames){
        if(typeof courseNames[propName] !== 'function' ){
            console.log(courseNames[propName]);
        }
    }
```

In order to filter any prototype values use `hasOwnPropertyNames()` in your logic

### When enumerating which function to use?

If the object's property  enumerable attribute is set to true ( thus enumerable) it can be enumerated using either `for...in`loop or `Object.key(obj)` method. The difference between them is that `for...in` loop enumerates properties in the prototype chains as well ( if there is any ) while `Object.keys()` method only returns the properties of object's own enumerable  properties( only enumerable ).

```javascript
   var courseNames = { x:1,y:2,z:11, anyFunction:function(){},emptyObject:{}};
    // Use of Object.keys(obj) function
    console.log(Object.keys(courseNames));
    // will return [ 'x', 'y', 'z', 'anyFunction', 'emptyObject' ]
```

To see if the property is enumerable or not use `propertyIsEnumerable(prop)` function on the object whose property attribute is to be checked.

```javascript
    var courseNames = { x:1,y:2,z:11, anyFunction:function(){},emptyObject:{}};
    console.log(courseNames.propertyIsEnumerable('x')); // true
    console.log(courseNames.propertyIsEnumerable('abc')); // false 
    // Note the use of quotation marks, the property name must be quoted
```

There are other functions which can provide help about properties and their associated attributes provided by EcamaScript-6 which we will be using later on  like  ` getOwnPropertyDiscriptro()` function and `getOwnPropertyNames(obj)` 

### Looking for a particular property

Often there is a case when you only want to look for a unique property to make sure whether it is present or not in your object. There are different approaches present some are discussed below. The conventional method would be to write a loop and go through each and every property and comparing the one you want.

>Be clear what exactly you are comparing is it a property **key** or its **value**. 

```javascript
    var courseNames = {Ms012:"Cognitive Science",Bs310:"Physics"}
        //checking through property's value
        for(var prop in courseNames){
            if(courseNames[prop] === "Cognitive Science"){
                console.log("Yes " + courseNames[prop] + " is present");
            }
        }
        //checking through property's key
        for(var prop in courseNames){
            if(prop === "Bs310"){
                console.log("Yes " + prop+ " is present");
            }
        }
    
```

The above does the job but as we said earlier there are other more elegant approaches present. Though there are subtle differences but both does the same job.

```javascript
    var courseNames = {Ms012:"Cognitive Science",Bs310:"Physics"}
        if('Ms012' in courseNames){
            console.log("Yes it is present");
        }  
        //or
        if(courseNames.hasOwnProperty('Bs310')){
            console.log("Yes it is also present");
        }
```

## What goes behind Object creation

When an object is created with its literal `{}` notation or using `new Object()` constructor, only and only one instance of a specific type is created. And there is no other object like it. Thus `var o1 = {x:1};` and var `o2 = {x:1};` are not same at all. They are only equal to themselves.

```javascript
   var o1= {x:1}; var o2 = {x:1};
      console.log(01 == 02);        //false
      console.log(01 === 02);       //false
      console.log(01 == 01);        //true
      console.log(02 === 02);       //true 
```

> In memory they are two separate objects holding different spaces. The object identifier `o1` and `o2` both are basically the pointers to their respective objects.

```javascript

       {x:1}                           {x:1}
    ++++++++++                      ++++++++++
    |        |                      |        |
    |        |                      |        |
    ++++++++++                      ++++++++++
      AFE12B                          FEBC41
        ^                               ^
        |                               |
        |                               |
        o1                              o2
```

- Since when object is created, the question comes in mind how to delete them. JavaScript is a dynamic language and takes this responsibility itself. It is the job of the garbage collector to delete any dangling object which has no reference to it. But if you want to release memory you may assign it to a `null`value but it does not guarantee an immediate release of memory. There are some other techniques used to delete the memory.

>Note: You can not delete object using delete operator as you would delete any variable or any object's property if it is deletable.

```javascript
    delete o1; // not allowed and not possible
    delete o1.x         // allowed and possible
```

### Object testifies itself

When an object is created, it also get another object created by the system that works as a prototype of newly created object. The newly created object not only has access to its own properties but also the properties of its prototype. If a newly created object is searched for a property that it can not find, its prototype is searched and the search goes on until the top of chain is reached. This secrete internal link of invisible objects is known as  **prototype chain**. 

For example, in above case when `o1` is created with one property but  it automatically inherits ( gets available ) some properties and methods from a special object named **prototype** which is defined in **Object** as its one of the properties thus can be accessed as `Object.prototype`. 

[//]:# (Correct this one)

To get more detail about this special object which a newly created object receive you may take the help of of its own provided methods, such as `toSring , to String() , getPrototypeOf()`  and so on. These available methods ( or some may call it **services**) and others are always available to the object you create to ease your work as shown below

```javascript
    var stomach = {};
    var apple = { juicy: true };
    var banana = new Object({ juicy : false });
    var pear = Object();    // forget to write new
   console.log(Object.getPrototypeOf(stomach)); // {}
   console.log(Object.getPrototypeOf(apple)); // {}
   console.log(Object.getPrototypeOf(banana)); // {}
   console.log(Object.getPrototypeOf(pear)); // {}
   console.log(apple.constructor); //Object
   console.log(banana.constructor);//Object
   console.log(stomach.constructor);//Object
   console.log(pear.constructor);   //Object 
   //you may use typeof operator as well
   console.log(typeof stomach); // object
   console.log(typeof stomach.prototype); //
```

The code above testifies few things:

 1. Objects created with a literal `{}` or with a constructor `new Object()` also get a prototype object `{}` to share its behaviour. 
 2. They all are created from the same constructor. 
 3. If you forget to write `new` before built-in constructor it is taken care of.
 4. Objects created by user get number of services available to it automatically by design. These services are  exposed by the `Object.prototype` object `{ }`.
 5. Two internal links are established among user defined object and the object that provides services and the object that creates it.

It is important to understand that if this internal link is lost your program may not behave the way it is expected. The `constructor` property points to the constructor that creates it. If you write your own constructor function then this property will point to the user defined constructor. Let see this whole in figure given below

```javascript
     var anObject = {}; or var anObject = new Object()

                    prototype property of Object
                            |               |
      Object()              |               V
    =============           v           ==========
    |constructor | Object.prototype--->|prototype |- constructor:
    |   object   |                     |  object  |- __proto__:
    =============                       ========== -        |
          ^                                 ^      -hasOwnProperty() 
          |                                 |      -isPrototypeOf() 
          |                                 |       -.....  |
          |                                 |       -.....  |
          |                                 |               |
          |                                 |       services shared
    anObject.constructor                anObject._proto_
                        ==========
                        |anObject |
                        ==========          
```

### Assigning objects to other variables

Once an object is created it can be assigned to any other variable. In JavaScript this assignment is known as `shallow copying` in object oriented programming. Thus following code does not create a new object but another pointer to the same object already present in the memory.

```javascript
    var o3 = o1; 
    console.log("Are they equal " + ( o3 === o1));
    o2 = null;      //o2 no longer points out to previous space in memory
                    // it has been de referenced

                      {x:1}                          
                    ++++++++++                      
        o1 ----->   |        |      o2 ---> null                
        o3 ----->   |        |                      
                    ++++++++++                      
                     AFE12B 
```

### JavaScript Objects are mutable and manipulated by reference

It is clear from the above example that the objects are passed by reference when they are assigned to new variables or passed to any function. `Passing by reference` put more responsibility upon the user. If an object gets changed by one reference the change is shown by others immediately.

```javascript
    var o1 = {x:1}, o2 = {x:1}, o3 = {x:1}; // They are all different objects
    // but now they are going to refer same object
    var o1 = o2 = o3 = {x:1};       // All referring to same object
    // the original objects memory taken by o2 and o3 are deleted automatically ( ??)
```

### Object.prototype and Prototype object are different things

For new comers the term prototype becomes confusing. In classed based Object Oriented languages, class provides the blue print or die  for objects of same type to be created. These objects are known as instances of a class and they share the services provided by the class. In JavaScript since there has been no concept of classes until recently when ES6 has come out in the market.

When programmer started using **c** and other contemporary  languages twenty years ago they did not have thousand lines  of code already written and ready to be used available for their programme. They had to write everything from scratch. But then came along Class based Object Oriented programming providing libraries and other facilities to be used without re inventing the wheel. Most of the time the code reuse was achieved by having the top level Object already written for the user which would expose commonly used services for the user defined newly objects. And this technique was known as inheritance which involved the concept of classing and sub classing by way of inheriting properties from their super class based on the notion of having a relation known as `is-a ` or `a kind of `. For example, rabbit is an animal so is a frog and others. They may have same attributes and some would differ and so on. Hence the idea was to keep the top class more generic and subclasses specific.

Since JavaScript was not at all an Object Oriented language, this `is-a` relation was achieved using  techniques called `composition ` and `containment` as opposed to `inheritance`. Therefore the term prototype was used to indicate the top most class which types of object were needed. In JavaScirpt When you create any object, the language provides a prototype object to the new object to share the services from. This is a default behaviour of the JS. To manipulate the new object JS allows you to use a global object called  `Object`, it should be interested to know that the prototype object which were given to you to use the services is also defined as property of this `Object` thus written like `Object.prototype`.  Having explained this, it is important to understand that when a user wants to create  a class ( since JavaScript never provide the facility to write classes), it was  left to define their own constructor function which acted like super class and came to be known as the Prototype for creating the same type of objects.

>**Object.prototype**  means that the **Object** has a property named prototype which itself is an object. And its properties gets inherited automatically by any object created by either object literal or Object constructor. { we will discuss this automatic inheritance later on }

#### A rough shape of **Object**

```javascript
   Object = {
        .....//other properties
        .....
        prototype: {
            constructor:....
            _proto_:.....
            .....
        }
            ....//other methods
            hasOwnProperty: function(property){.....}
            isPrototypeOf:  function() {......}
            propertyIsEnumerable:   function(){......}
            toString:   function() {.....}
            ......
   } 
    
```

`Object.prototype` itself, does not inherit any property from any object. To see if it is true or not simply type `console.log(Object.getPrototypeOf(Object.prototype));` and you will get the `null` answer.

All built in constructors first inherit properties from their corresponding built in constructor and then from `Object.prototype` as well. This inheritance is known as **prototype chain**. 

All built in objects like `Array , Date , RegExp etc` are also type of `Object`that is they descend from top most object. Similarly they all get to share code from their corresponding prototype which in turns also inherit code from object prototype. For example `new Date()` and  `new Array()`  first inherit properties from `Date.prototype` and from `Array.prototype` respectively but also inherit properties from `Object.prototype` too.

To find out the exact constructor of a newly created object  we can use `constructor` as inherited property,  `Object.prototype.constructor` which returns the function constructor that creates given object's prototype. In other words when a new object is created it inherits this property which points to the constructor which created the new object.

```javascript
    var o1 = {}, today = new Date(), grid = new Array();
    var n = new Object(1);  

    console.log("o1 is created  by " + o1.constructor); // function Object()
    console.log("today is created  by " + today.constructor); //function Date()
    console.log("grid is created  by " + grid.constructor); //function Array()
    
    // Another way of testing would be
    if(n.constructor === Number){
        console.log("n is created  by " + n.constructor); //function Number()
    }
    // Even a function in JavaScript is created using Function() constructor
    var f = function(){};
    if(f.constructor === Function)
        console.log("f is created by " + f.constructor);
```

### Creating Object with Constructor function

>Creating objects with object literal or Object constructor both provides a way to create a single object pattern. What it means that you are only able to create only one  object of a particular type. To create multiple objects of a same type you need to use ` Constructor function`. That is to create as many instances as you want from a blue print.

In OOP you can write a class and create many instances from that blue print. In JavaScript making different instances from its prototype is achieved using a technique called `creating objects with Constructor Function`. The following code writes a Constructor function so that multiple instances of this function can be created. This is an interface like a class providing a  constructor pattern to create same type of objects.

```javascript
// Constructor function,a prototype for other objects, it acts like a class
    function Animal(itsName){//note Animal with Capital A to identify as a CTOR
        this.name = itsName;
    }
//Create different instances of Animal using new operator from its prototype
    var rabbit = new Animal("Bunny");
    var cat = new Animal("Nimy");
```

The  code ` var rabbit = new Animal("Bunny") ` is just like creating an instance from its class in class based Object Oriented Languages. But here we know that `Animal` is not a class but a mere function declaration. In JavaScript it is one of the ways to create multiple instances of a same object.
It is either rabbit or cat both have their own data and do not share their state from each other. Thus the code `console.log(rabbit.name);` will yield to "Bunny" while the code `console.log(cat.name);` will yield to "Nimy". If you like to add a variable which gets available to all instances of the class then you have to make it a class variable not the instance variable or what is known as static variable. A static variable is shared among all instances of a same class and can only be invoked by the class name itself. It can not be invoked by the instance of that class. A class can not only have static properties but can also have static methods which can only be invoked by the class itself. The example of static methods are Object class methods most of them are only static and can only be used by the Object itself and not by the instances of the Object class. `Object.create(),Object.getPrototypeOf()` are just two examples of static object defined on Object.

```javascript
   function Animal(itsName) {
        Animal.counter = (Animal.counter || 0) + 1;
        this.name = itsName;
   }
   console.log(Animal.counter); // undefined
   var rabbit = new Animal("Bunny");
   console.log(Animal.counter); // 1
   var cat = new Animal("Nimmy");
   console.log(Animal.counter); //2
   condole.log(rabbit.counter); // undefined
```


Though the above is a very simple example yet explains the point. You can also add functions to the constructor function.

### Adding properties
It is important to note that member variables of an object  known as properties ( can either be a simple property or a method) can be added to an individual object or to objects' prototype. 

#### Adding properties and methods to individual objects
```javascript
   function Animal(itsName){
        this.name = itsName;
   }
    var rabbit = new Animal("Bunny");
    rabbit.maxAge = 18;

    var dog = new Animal("Wosh");
    dog.maxAge = 16;
    dog.barks = function(){ return this.name + " says Hello" ;};

    var cow = new Animal ("mo");
    cow.maxAge = 20;
    cow.milks = function(){return "Hi, it is delicious";};

    console.log(rabbit);//{ name: 'Bunny', maxAge: 18 }
    console.log(dog);//{ name: 'Wosh', maxAge: 16, barks: [Function] }
    console.log(cow);//{ name: 'mo', maxAge: 20, milks: [Function] }
    console.log(cow.milks());//Hi, it is delicious
    console.log(dog.barks());//Wosh says Hello
```

In above code the property `maxAge` which is shared by all instances should be added directly to the constructor function. So it is shared among all instances. However there are some situations where a new property is needed to be added dynamically in that case it is added to  prototype object instead of adding separately to each object. 

### Adding properties to prototype object

In order to add a property or a method to the `function objec`t, JavaScript allows a built-in property to be used to achieve this task. This property is called `prototype` and is only available to the `function object` and not to the object. Thus the code `Animal.prototype.maxAge` will add property `maxAge` to the prototype object. And in this case the prototype object is the default prototype object `Object.prototype`.

```javascript
    function Animal(itsName){
        this.name = itsName;
   }
   Animal.prototype.maxAge;
   var rabbit = new Animal("Bunny");
   rabbit.maxAge = 18;

   var dog = new Animal("Wosh");
   dog.maxAge = 16;

   var cow = new Animal("Mo");

   console.log(rabbit);
   console.log(dog);
   console.log(cow);  
```

>Note: Adding property to a prototype object gets available to be used by all instances of Constructor function but it does not become the member of a constructor function. To add a new member to constructor function it has to be added manually. You can not add a new property to a constructor function by `Animal.newproperty`. As `Animal` is not an object.


### How CTOR function( the prototype ) initialized?

- The code `var cat = new Animal("Nimy")` when executed does the following things.

1. It creates an empty object and keep a reference on it by using a reserved word `this`. 
2. An internal link is established between this newly created object and `Object.prototype` so that it inherits properties from  `Object.prototype` making all properties and methods available to the newly created object.
3. It also sets the constructor property of the `Object.prototype` to `Animal`
4. This object is returned implicitly if no other object is returned explicitly from this constructor.

This newly created object  now becomes an instance of an `Animal` which you have defined.

### Public and Private members & use of `this` in Constructor function

Members variables which can be accessed directly by the instance of the class after they have been instantiated are regarded as public members. By design objects have to provide public methods which can be invoked upon the object and inside the implementation of the object member variables are accessed keeping them private. In Js when creating an object with constructor function, private variable are written using `var` keyword which provides them function scope making them impossible to access from the instance variable outside the constructor function.

```javascript
    //file-name:13.js
    function Animal(itsName){
        this.name = itsName;        //public member
        var breathes = true;        //private member
        var age =1;
        this.isAlive = function(){  //public member
                return (breathes === true)?"yes":"no";
        }
        var changeAge = function(x) { //private member
                age =+ x;
        }
    }    
    var rabbit = new Animal("Bunny");   // A new object is created and returned
    console.log(rabbit.name) ;     // allowed , public members
    console.log(rabbit.breathes);//undefined, private members
    console.log(rabbit.isAlive()); //allowed
    rabbit.changeAge(1); //error ;not allowed, it is not visible here
```

From the above it should be clear that all local variables or functions defined using `var` key words make them private members. While those defined by `this` keyword become public members.

### Can the new instance testifies itself ?

The instance of `Animal` which is just created and now referenced by `rabbit` should be able to give some detail about itself if it is an instance of `Animal`. To get those details we take the help from functions that it inherits implicitly as well as with the available operators.

```javascript
    //using inherited methods, a robust way of checking
    console.log(rabbit.constructor); // [Function:Animal]
    console.log(Object.getPrototypeOf(rabbit));//Animal {}
    //using operators , can be deceptive in some situations
    console.log(typeof rabbit); //object
    console.log(rabbit instanceof Animal); //true
```

The above code testifies that the object created and returned is the right one you intended.

### Forget to use `new`! face the music

Imagine you create an instance of `Animal` and forget to use the `new` operator ` var cat = Animal("Nimmy")` . There will be no error nor any warning but your programme will not behave the way you would want. Therefore it is best practice to use code pattern . A code pattern is just a unique way of writing some code which makes/forces code do what it is supposed to do despite lacking of strongly typed language. Now what happens if the `new ` is not typed.

```javascript
    var cat = Animal("Nimmy");
    console.log(cat.constructor) // error: cat is not an object
    console.log(Object.getPrototypeOf(cat));//error
    console.log(typeof cat);    //undefined
    console.log(cat instanceof Animal)  //error
```

Without the use of `new` operator before the constructor function  no object gets created thus the use of inherited properties results in error. The members of Animal constructor function does not get bind to `this` and become the property of the global object. It is  just like variables declared inside the function without the keyword `var` are regarded as implied global. Thus can be accessed using `global.name` , `window.name` or anything else depending upon the host environment. To see what exactly `this ` refers to you can add this code in your programme `console.log(this)`.

### Why not flag it as an error?

Forgetting to write `new`, raises issues which  were not anticipated and tackled when constructor function was written. In an ideal situation an error should have been raised warning the mistake but it does not happen. To tackle this problem there has been many ways and one of them is to use code pattern while the other is to raise the error using JavaScript provided `throw `. Using code pattern or any other approach is a way to tackle the problem but the language itself provide the safe mechanism and urges programmer to use it which is known as `use strict`. We will talk about it coming topic [](link)

### Tackling issue with Code Pattern

To make sure that in case of forgetting to write `new` your code behaves correctly. You need to change the code of constructor function by explicitly returning an object as done below.

```javascript
    //file-name:13-1.js
   function Animal(itsName) {
    var temp = {}
    temp.name = itsName;
    return temp
   }  
   var dog = new Animal("wof");
    
    console.log(dog.constructor);   //[Function:Object]
    console.log(Object.getPrototypeOf(dog));// {}
    console.log(typeof dog);    //object
    console.log(dog instance of Animal); // false
```

The above make sure that an object is always created and returned. It may be interesting to note that the convention of writing this pattern uses a `that` identifier instead of `temp`, but you may use whatever you like. It is also not necessary to return a named object you may return an object using its literal as shown below.

```javascript
    function Animal(itsName){
        return {
            name: itsName;
        }
    }  
```

### Problem with the code pattern approach

Though code pattern seem to solve the issue encountered by forgetting to write `new` but raises others concern. The whole chemistry of our idea to be able to create multiple instances from a prototype is changed for the following reasons;

 - First of all the object returned is not an instance of an `Animal` but a generic object.
 - Its prototype is not `Animal` but an empty object `{}`
 - Its constructor is `Object` not `Animal ` any more.

In short it all happens because the code pattern did not do the job fully. it did create an object took care of problem arising from the issue of forgetting to write `new` but failed to provide *the `prototype` link b/w newly created object and the object that it inherits from*.

### How to fix the prototype link in constructor function.

To fix this issue in constructor function, a logic is added to check if an executing context is an instance or not, if not we call it with a `new` operator that is a **self execution** . Thus new constructor function would look like as shown below.

```javascript
    function Animal(itsName) {
        if(!(this instanceof Animal))
            return new Animal(itsName); // execute itself
        this.name = itsName;
   } 
```

The above approach seems to work fine even if we forget to write `new` operator with constructor function. This technique is known as **scope-safe** and adopted internally by most built in constructor to first see if the user has called the constructor using `new` operator or not, otherwise it executes itself. The above code can also use the `arguments.callee` but it is not preferred and may be remove from new versions.

### Tackle this issue by raising as an error.

Another way to tackle this problem of forgetting to write `new` operator is to nip the evil in the bud, approach. A logic is provided in your constructor to see if it is invoked with `new` or not if not raise an error as done below.

```javascript
    function Animal(itsName) {
        if(!(this instanceof Animal))
            throw new Error("call with new keyword");
            
        this.name = itsName;
   }   
```

### A Real World example of a constructor function

MetalSmith is a static web site generator which exposes a function as a module named `metalsmith`. The declaration of this function is shown below.

```javascript
   module.exports = Metalsmith;

/**
 * Initialize a new `Metalsmith` builder with a working `directory`.
 *
 * @param {String} directory
 */

function Metalsmith(directory) {
    if (!(this instanceof Metalsmith)) return new Metalsmith(directory);
    assert(directory, 'You must pass a working directory path.');
    this.plugins = [];
    this.ignores = [];
    this.directory(directory);
    this.metadata({});
    this.source('src');
    this.destination('build');
    this.concurrency(Infinity);
    this.clean(true);
    this.frontmatter(true);
} 

// only plugins and ignores are properties which are assigned an empty array the rest are functions. These functions are declared somewhere in the programme
```

### Adding methods to constructor function

Once you overcome the problem of creating the constructor function, you are through to creating different instances from this prototype. Every instance you create from this blue print gets its own copy of members variable. Say if you create ten instances of from `Animal` constructor. Each instance gets its own copy of members ( variables and functions ).

There is nothing wrong with this in fact this is exactly what we wanted to achieve . To be able to create  multiple instances of a same type. However we have to reconsider the issue of dealing with members which are not ordinary variables but functions added as are part of the constructor function. The reason being that ordinary variables and functions differ in many ways . Every time a function is created there are more overheads to be considered as compared to ordinary variables and this can lead to memory optimization issues.

### Using `prototype` property to add functionality / Augmenting Built-in Objects through prototype

First of all be clear  that JavaScript provides you many  built in constructor of different type to start creating your objects without writing your own from the scratch. These built in objects behave like a die ( a moulding die ) or commonly knowns as blue print or prototype. In addition to creating the object from this constructor, JavaScirpt also allows you to add different services which may not be provided by built in constructor. When you add extra functionality into built in object's prototype, the object is said to be augmented.

```javascript
   var pen = {};
   pen.writes();    //error write is neither a member of pen nor its prototype

   // get the prototype of pen object and add this function to it.
   (Object.getPrototypeOf(pen)).writes = function(){console.log("It works")}
   //call this function on pen
   pen.writes();    // It works
   // create a new object with the same prototype {} and use this function.
   var pencil = {};
   pencil.writes();    // It works
```

Thus adding any functionality to the prototype of any object gets available to all its instances hence sharing the same code for all instances. In order to add any functionality to objects' prototype ( its die / blue print ). Javascript exposes an object through a member of **Object** also named as `prototype` which itself is an object. Therefore in the code above it is not necessary to call the function `Object.getPrototypeOf(object)` on any object but to use the `prototype` property which is available to all objects.

```javascript
    // Adding functionality to built in Date object
    Date.prototype.showAlienDate = function () {console.log("☺♂↓☺☻•☻")};
    var d1 = new Date();
    d1.showAlienDate(); // it works
```

Not only you can  enhance the functionality of built in object but also to any user defined object using its Constructor.

```javascript
    //file-name:chap-02-02.js
    function Animal(itsName){
        this.name = itsName;        //public member
    }  
    var rat = new Animal("Gerry");
    console.log(Animal.prototype)//

    // Adding methods to prototype
    Animal.prototype.move = function (steps) {
        console.log("It has moved " + steps + " steps");
    }
```

By doing this we make sure that method `moves` get added to the prototype `Animal` and all instances can use it safely. Not to mention that there is nothing stopping you to add new properties to your object dynamically taking help from `prototype` object. Thus `Animal.prototype.age = 0 ;` will add a new property to an existing object.

It should be noted that when adding functions to prototype, it can be done safely in the following way only exposing the interface as shown below. This technique is know as revealing prototype pattern

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
        turnOrganiteOn : on,
        turnOrganiteOff : off,
    };
 }();
 var myOrganite = new OrganiteModel();
 myOrganite.turnOrganiteOn();//It has been turned on
 myOrganite.turnOrganiteOff();//It is off!
```

### Use of helper functions defined outside the constructor to access properties

It is possible to create any function outside the constructor which can access object properties. Since these functions live in global context can easily start to create problems with other functions. This situation is known as polluting the **Global Namespace** which may results eventually in conflicting with other names. Secondly, it violets the basic principle of encapsulation. Your object should provide its services not an outsider thus also regarded as anti pattern as shown below.

```javascript
    function Animal(itsName){
        this.name = itsName;        //public member
    } 
    // new instance is created 
    var rat = new Animal("Gerry");
    // function to access object properties
    function showName(){
        console.log(rat.name);
    }
    showName():
```

### Methods defined in constructor

The above function can easily be defined inside the object constructor making it more safe from any possible conflicts and adhering to Object Oriented principles as follows. 

```javascript
    function Animal(itsName) {
        this.name = itsName;
        this.showName = function(){
            console.log(this.name);
        };
    }
    var rat = new Animal("Gerry");
    rat.showName();
```

> It should be noted that if a same function is added to the prototype ( name conflict) then only method defined on an object that is in constructor gets called. JavaScript will not throw an error if you use the same name as done in the constructor. A method is invoked on an object, it first look through its instance function list, if it finds it there, fine the instance function will be called . If it does not find there it will look into its prototype. See the example below

```javascript
    function Foo(){
        this.instanceFunction = function(){
            console.log("This is an instance function");
        };
    }
//
    Foo.prototype.instanceFunction = function (){
        console.log("This is a prototype's function");
    };
    new Foo().instanceFunction();
    //This is an instance function
```

The above always uses the instance function. If instance function was not there, it would look inside the prototype and call the prototype function.

```javascript
    function Foo(){
    }
//
    Foo.prototype.instanceFunction = function (){
        console.log("This is a prototype's function");
    };
    new Foo().instanceFunction();
    // This is a prototype function.
    
```

### The difference b/w function defined in constructor function and added using prototype.
Both ways have some pros and cons which are not difficult to understand. When methods are initialized within the constructor function they become the part of the instance which is created using new operator. 

#### Advantage of using methods within constructor
 1. They can take advantage of closures so that local variables declared becomes private and are only available to be manipulated by instance methods making data more secured. Being part of an object they avoid naming collision.
 
#### Disadvantage of using methods within constructor
 1. They are bound to create memory issues if number of instances increases. It gets very important specially when dealing with  page load timing.

#### Advantage of using prototype approach
 1. They share same logic and data among all instances reducing the overhead of creating a method for each individual instance providing memory optimization. For example a factory makes toys the price of all toys are same but name and color may be different. Then using the price as an instance variable is an over head and can be safely put in the prototype so that it can be shared among all users.


```javascript
    function LaserGadget(name,color) {
        this.name = name;
        this.color = color;
    }
    LaserGadget.prototype.price = 100;
```



#### Disadvantage of using prototype approach
 1. They can not access local variables directly and there will be a slight overhead of searching the prototype chain. In order to access private variable an instance method can be called which returns the private variable as shown below.
 ```javascript
     function Foo() {
    var private = 10;
    this.getPrivateVaribale = function() {
        return private;
    };
}
//
    Foo.prototype.accessPrivateVariable = function() {
    console.log("This is a prototype's function " + this.getPrivateVaribale());
    };
    new Foo().accessPrivateVariable();
    // This is a prototype's function 10;
 ```
 
From above it should be clear that whether it is prototype function or simple value defined on a prototype. The first preference is given to instance members not prototype members. Thus a variable defined on both as done above using function will yield same result giving preference to instance variable rather than prototypal variable as shown below;

```javascript
   function Thing(name) {
        this.name = name;
   } 
   Thing.prototype.name = "foo";
   var thing = new Thing("computer");
   console.log(thing.name); // computer
   delete thing.name; // true
   console.log(thing.name); // foo
```

#### Hybrid Approach
The best way may be to use hybrid approach, it all depends upon the case and differ from one to another. If you take example of JQuery and look into the code you will find that  methods are initialized within constructor while the other approach may be more suitable when the constructor object may need extending like in coffee script and 

[//]:# ( need more explanation.)

> So far we have discussed creating objects with object literal, Object constructor and from user defined Constructor to create multiple instances from the prototype. There exist another way of creating object in JavaScript language known as creating with Factory function.

### Constructor function can also be defined as function expression
To write the same constructor function as a function expression is also common among programmers. Both function declaration of a constructor function and function expression of a constructor function are correct with one already discussed difference of hoisting. They are also known as `pseudo class`

```javascript
   var Animal = function (itsName) {
        this.name = itsName;
        this.showName = function () {
            console.log("This is " + this.name);
        }
   };
    
   var cat = new Animal("Timmy");
   cat.showName();//
```

### Constructor function example from *Metalsmith project*

```javascript
function Metalsmith(directory) {
    if (!(this instanceof Metalsmith)) return new Metalsmith(directory);
    assert(directory, 'You must pass a working directory path.');
    this.plugins = [];
    this.ignores = [];
    this.directory(directory);
    this.metadata({});
    this.source('src');
    this.destination('build');
    this.concurrency(Infinity);
    this.clean(true);
    this.frontmatter(true);
} 
```

The constructor makes sure that if `new` is forgotten it calls itself and assign two properties and then carry on invoking functions. But these functions are not declared so how it is possible to do this. Well this constructor takes help from  inheritance. These functions are presumably inherited. If they are not inherited an error will be thrown.

They are added in prototype as shown below.

```javascript
   Metalsmith.prototype.directory = function(dirName){
    if (! successful) return (some error or warning)
    // use assertion
    this._dirName = dirName;
    return this;
   } 
```

[//]:# ( The above seems to be completed)

## Creating objects with factory functions

Factory function is  a name given to a unique way of creating objects either from other objects in prototype based programming or from a class in class based programming. Factory pattern deals with the problem of creating objects without the need to specify the exact class of the object being created providing  an abstraction to constructing objects. 
The way they differ from constructor functions  that they do not make use of a `new` operator because there are no constructor functions. The above `Animal(itsName)` constructor may be written in its simplest form as a factory function in a following way:

```javascript
    //Factory function
    function Animal(itsName){
        // A new object created and referenced by that
        var that = {
            name: itsName,
            isAlive: function (){
                return (breathes === true) ? "yes" : "no";
            },
            showName: function () {
                // console.log(name); error 
                console.log(that.name);
            }
        };
        //private members not visible outside the function
        var breathes = true;
        // returning object
        return that;
    } 
    var dear = Animal("beauty");
    dear.isAlive(); //yes
    dear.breathes;  //error breathes is private dear has no access to it
```

>Note:
 -1.No use of `new` operator. 
 -2.The object **that** can have any  name.
 -3.Properties are accessed either by using object name and dot (.) notation or using `this`. 

Similarly there is very clear distinction between private and public members. Variables defined outside the objects within the factory function are visible to the objects but not to the outside world. On the other hand object properties act as public members and used by the instances outside the function. Note inside the object's member function the property `name` can not be accessed by its name. 

It should also be noted that there is no need to return a named object, an unnamed object can also be returned as shown.

```javascript
    function Animal(itsName){
    return {
        name: itsName,
        isAlive: function(){
            return ( breathes === true ) ? "yes" : "no";
        },
        showName: function () {
                // console.log(name); error 
                console.log(this.name);
        }
    };// un-named object return
    //private members
    var breathes = true;    
}
```

### Practical use of Factory Pattern
The factory pattern suggest defining an interface for creating an object where you allow the subclasses to decide which class to instantiate. This pattern handles the problem by defining a completely separate method for the creation of objects and which sub-classes are able to override so they can specify the ‘type’ of factory product that will be created. This is quite useful, in particular if the creation process involved is complex. You can often find factory methods in frameworks where the code for a library may need to create objects of particular types which may be sub-classed by scripts using the
frameworks.

```javascript
    function penFactory(){}
        penFactory.prototype.penClass = Pen;
        penFactory.prototype.getPen = function (options) {
            return new this.penClass(options);
        };
```

### Anothe example of JavaScript Factory Function
[//]:# ( change the example taken by code project by )

```javascript
    var Person = {
          name: "Person",
          properties: {
            firstName: {range:"NonEmptyString", label:"First name", 
                writable: true, enumerable: true},
            lastName: {range:"NonEmptyString", label:"Last name", 
                writable: true, enumerable: true}
          },
          methods: {
            getFullName: function () {
              return this.firstName +" "+ this.lastName; 
            }
          },
          create: function (slots) {
            // create object
            var obj = Object.create( this.methods, this.properties);
            // add special property for *direct type* of object
            Object.defineProperty( obj, "type", 
                {value: this, writable: false, enumerable: true});
            // initialize object
            Object.keys( slots).forEach( function (prop) {
              if (prop in this.properties) obj[prop] = slots[prop];
            })
            return obj;
          }
};
```

Notice that the JS object Person actually represents a factory-based class. An instance of such a factory-based class is created by invoking its create method:
`var pers1 = Person.create( {firstName:"Tom", lastName:"Smith"});`

The method getFullName is invoked on the object pers1 of type Person by using the 'dot notation', like in the constructor-based approach:

`console.log ("The full name of the person is: " + pers1.getFullName());`

Notice that each property declaration for an object created with `Object.create`  has to include the 'descriptors' writable: true and enumerable: true, as in lines 5 and 7 of the Person object definition above.

### Advantage of Factory function over Constructor function
[//]: # ( Check to see if you can add advantages here)

## Creating Object with `Object.create(prototype)` method

When building `is-a` relation in JavaScript that is to create more specific object from generalized objects,the process is performed what is known as  as prototyping. It is a process where one object is created using already defined object with the help of a function `Object.create(prototype)`. A newly created object shares behaviour from not only its prototype but from the chain above, if it exist until a null is found.

This process also takes place implicitly when you create a singleton object using literal or using a `Object()` constructor whereby a new object is created with system provided prototype object which is already defined in, and placed as a property of the `Object`. This process is shown below to explain that both object are created from the same constructor internally and with the same prototype object.

```javascript
   var obj1 = {};
    var obj2 = Object.create(Object.prototype);
    console.log(obj1.constructor === obj2.constructor); //true
console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2));//true
    console.log(obj1.__proto__); // {}. Object.prototype
```

The above lines testifies that an object created with object literal is same as object created with the default prototype. The last line of code `Obj1.__proto__` returns a prototype object. This internal property `__proto__` is set to default prototype object when object is created. 

Let's see another example where a new object is created with another object as its prototype. 

```javascript
    var animal = {breathe:true}; // A prototype object
    var rabbit = Object.create(animal);
    console.log(Object.getPrototypeOf(rabbit)); // { breathe:true}
    console.log(rabbit.__proto__); // {breathe: true}
    // creating another object and using __proto__ property
    var kangroo = {};
    kangroo.__proto__ = animal;
    console.log(Object.getPrototypeOf(kangroo)); //{ breathe: true}
```

Before ECAMScript-5 `Object.create()` method, `__proto__` property was used to point new objects' prototype which can still be used. In above example rabbit was created from animal and animal by default have its prototype set to `Object.prototype`. Thus rabbit gets to share all the code from prototype chain. In order to stop inheriting the prototype chain, this property needs to point to  a `null` object. This can be done directly or using ECMAScript-6 function. It is explained below.

```javascript
    var animal = {breath:true};
    Object.setPrototypeOf(animal, null);// or animal.__proto__ = null;
    console.log(Object.getOwnPropertyNames(animal)); // [`breath`]
    console.log(Object.getPrototypeOf(animal)); // null
    var rabbit = Object.create(animal);
    console.log(rabbit.breath); // true. Inherited property
```

The use of property `__proto__` is an old style when other methods were not available. The same result is achieved by using a static function defined on Object in ECMAScript-6, like many others `Object.setPrototypeOf(obj,prototype)`.

### Changing the prototype when working with constructor function.
Not always we are dealing with a singleton object but types i.e., often  with many instances of a same type. As learned before, constructor function provides a blue print for the required type to be created. Thus all item created from the constructor share the properties set in the constructor. If an object is created from the constructor function. This constructor provides the new object its identity or known as type and act like a class. Since in JavaScript there are no classes, they are regarded as pseudo classes, an achievement of duck typing. By default when a new object  is created using a  `new` operator from its constructor function, the returned object by default gets access to all members including variables and methods as well as share all services/code from the constructor function prototype, the default happens to be `Object.prototype` object. Let's see the scenario explained below.

```javascript
    function Animal(name) {
            this.name = name;
        }
        var rabbit = new Animal("Bunny");
        console.log(Object.getPrototypeOf(rabbit)); // Animal{}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(rabbit)));//{}. default
        console.log(Object.getOwnPropertyNames(rabbit)); // [`name`]
        // to get the inherited properties
        var allProp = [];
            for(var o = rabbit; o !== null; o = Object.getPrototypeOf(o)){
                for (var name of Object.getOwnPropertyNames(o)){
                    allProp.push(name);
            }
    }
    console.log(JSON.stringify(allProp));
/* ["name","constructor","hasOwnProperty","constructor","toString","toLocaleString","valueOf","isPrototypeOf","propertyIsEnumerable","__defineGetter__","__lookupGetter__","__defineSetter__","__lookupSetter__","__proto__"] */
// Note if at this stage, Animal is augmented using its prototype property by adding any function or variable. That addition will show here.
```

To change the default prototype `Object.setDefaultPrototype()`  can also be used to set it to  `null` so that it no longer inherits services from the the default prototype automatically. One might get tempted to change it into a constructor function though it will work but it will be semantically wrong

```javascript
   function Animal(name) {
    this.name = name;
    Object.setPrototypeOf(this,null);
}
var rabbit = new Animal("Bunny");
console.log(Object.getPrototypeOf(rabbit)); // null
```

The result above shows that rabbit has no prototype or in other words no class which is not right. What needs to be achieved is that this class does not share any code from its default prototype. This is done below using a property called `prototype` available to function object when created. This property was used earlier to add method or properties to a default `Object.prototype`. Now it can be used to set the prototype of this `Object.prototype` object `__proto__` property to `null` stopping to inherit any more.

```javascript
            function Animal(name) {
            this.name = name;
        }
        var rabbit = new Animal("Bunny");
        console.log(Object.getPrototypeOf(rabbit)); // Animal
        // Setting default prototype to null
        Animal.prototype.__proto__ = null;
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(rabbit)));//null
```

What is shown above requires understanding of JavaScript design and prototypal inheritance.

### Prototypal Inheritance
In JavaScript there is no concept of one class extending another class. Inheritance which is one of the bases of Object Oriented Programming is implemented by a Prototypal inheritance. In JavaScript every object created is a type of `Object` and inherits some properties implicitly from `Object.prototype` object to share.

A user defined object can also use its inherited property `__proto__` to extend another object.

```javascript
    var animal = {eats:true}
    var kangroo = {jump:true}
    // kangroo is a kind of animal
    // extending animal
    kangroo.__proto__ = animal; 
    console.log(kangroo.eats); //true
```

When an object is a prototype of another object it inherits its' (super object) properties. If the same property is also defined in the object which is inheriting the properties ( called derived objects )then its prototype is not checked. This process is of defining a same property in subclasses is known as overriding. 

```javascript
    var lameKangroo = {jump:false}
    lameKangroo.__proto__= kangroo;
    console.log(lameKangroo.jump);//false
```

If a property is not found in the derived object its prototype is checked if it is also not found there, it is assigned  `undefined` type. 

```javascript
    var fish = {swims:true}
    fish.__proto__ = animal;
    console.log(fish.hasLegs); // undefined
    var result = (fish.hasLegs === undefined)?"true":"false"; // true
    var result = (fish.hasLegs)?"true":"false"; // false
    //console.log("result = " + result); 
```

It is a user responsibility to override the properties in subclass otherwise they may get assigned properties which many not be true.

```javascript
    //add new property to super class
    animal.hasLegs = true;
    console.log(fish.hasLegs); //true(?)
    //override `haslegs` property in fish class
    fish.hasLegs = false;
    console.log(fish.hasLegs); //false
```

To avoid the ambiguity either designed the super class intelligently making no assumptions or override which is not true in derived class. A method can be added to objects in a same way

```javascript
    //a method can be added to a class
    animal.moves = function moves(steps){
        console.log("I have walked " + steps + " steps");
    }
    kangroo.moves(2);
    fish.moves(3);
    //overriding moves in fish class
    fish.moves = function moves(meter){
        console.log("I have swam " +  meter + " meters");
    }
    fish.moves(4);
    //similarly kangroo can override move method too
    kangroo.moves = function(jump){
        console.log("I have done " + jump + " jumps" );
    }
    kangroo.moves(10);
```


```javascript
//
    var animal = {
        hasmoved:false,
        eats:true,
        moves:function(steps){ console.log("I have moved " + steps + "steps");
        }
    }
    var kangroo = {
        jumps:true,
        moves:function(jump){console.log("I have done " + jump + " jumps");
        this.hasmoved = true;
        }
    }
    var fish = {
        swims:true,
        moves:function(swim){console.log("I have swam " + swim + " meters");
        this.hasmoved = true;
        }
    }
    kangroo.__proto__ = animal; fish.__proto__ = animal;
    kangroo.moves(2);
    console.log(kangroo.hasmoved);//true
    console.log(fish.hasmoved);//false
    fish.moves(10); 
    console.log(fish.hasmvoed); // now true
```

The above code tells us that a property of a super class in not shared among derived classes every derived class gets its own set of properties which gets updated irrespective of others. Since properties belong to individual derived object reading the property `this.prop` or deleting the property `delete.prop` only effects the object referred by `this` key word.

### Working with `prototypes`

- There is another way of working with prototypes objects that is creating an object from its prototype by using a function `Object.create(<prototype>)`. This is regarded as a standard way of creating a prototype object. The reason being that not all JavaScript engine supports `__proto__` property but all support this way of creating an object.Thus the above can be done in a following way

```javascript
    var animal = { 
        eats:true,
        hasmoved:false,
        hasmoved:function(){}
    }
    kangroo = Object.create(animal);
    console.log(kangroo.eats);  //true
    //adding properties to kangroo
    kangroo.jumps = true;
    //to find out the prototype of any object use `getPrototypeOf(object)`
    console.log(Object.getPrototypeOf(kangroo));//returns the base object
    //checking if kangroo is akind of animal
    var result = (Object.getPrototypeOf(kangroo) === animal)?true:false;
    console.log(result);
```

## Creating object with `class` using ES6

- Classes in ES6 are not hoisted. Conventionally the name starts with a capital letter.

```js
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
```

- Unlike function class must be defined before they are to be used.

```js
const p1 = new Point(10,20); // will throw an error

class Point {

}

var square = new Rectangle(20,20); // ok function declartion will be hoisted

function Rectangle (width, height){

}
````


### Class Expressions

- Another way of defining a class, it can be named or unnamed. If unnamed it can be found with its identifier name using `name` property.
- Like functions it can be assigned to any identifier

```js
// unnamed
let Rectangle = class {
    constructor(){

    }
}
console.log(Rectangle.name); // Rectangle

let Rectangle = class Rectangle1 {
    constructor() {

    }
}
console.log(Rectangle.name) // Rectangle1


````

### ES6 class body and methods

- Class fields / members such as `methods, constructors` are defined within curly brackets {}.
- There can only be one constructor, it is to create and initialize and object created with a `class` constructs.
- The key word `super` can be used to call the constructor of the parent class.
- In class method can be defined without a keyword function.
- Both static fields and method can be defined in a class, they are only to be used by the class and not to be shared with instances.
- Classes can have both public and private properties.
- Public properties can be used by instances but private properties can only be used within the class.
- Public fields / properties are declared first just before the constructor.
- Private fields / properties are declared preceded with `#`. They must be declared upfront and can not be declared

### Sub classing

- A child or more specialized class is created by using the word `extend` from its parent.
- If a child class introduces a constructor it must call parent constructor first.
- If a child class over rides parent class method, it can first call parent method using `super.method()`

```js
Class Animal{
    constructor(name){
        this.name = name;
    }
    speaks(){
        console.log(`${this.name} does speak.`);
    }
}

Class Rabbit extends Animal {
    constructor(name){
        super(name); // calls parent / super class constructor
    }

    // over riding parent method
    speak(){
        // can call super method super.speak()
        console.log('${this.name} does not speak.');
    }
}

let buny = new Animal('Buny');
buny.speak(); // buny does not speak

```

### Mix-ins

- Classes can not extend regular objects, to do so you must use `Object.setPrototypeOf()` method.

```js
const Animal = {
    speak(){
        console.log("This is a normal object created with object literals");
    }
}
class Dog {
    constructor(name){
        this.name = name;
    }
    speaks(){
        console.log('${this.name} barks');
    }
}
// Class Dog now inherits from Animal
Object.setPrototypeOf(Dog.prototype,Animal);
let d = new Dog('Mori');
d.speaks(); // Mori barks
``
[//]: # ( End of this file)

### Code used

```javascript

/**
 * Autohor:Abdul Ghafoor Sayyed
 * Date:04/11/2015
 */
//Creating different  objects
var empty = {}; //an empty object created with object litrels.
var emptyWithNew = new Object();        //same as above but used new operator though not prefered
var point = { x : 0, y : 0};        //an object with two properties note "=" sign is not used but ":""
var anotherPoint = {x:point.x, y:poit.y};       //value of property itself is an expression ( complex)
var line ={p1:point,p2:point};      //
//o1 and o2 both inherits methods from Object.prototype

o1.x = 1;       //o1 object set its property name x  and give value 1.

var p =  Object.create(o1);     // A static method to create another object from a prototype
p.x = 2;        //p also set its property x , it does not change o1 property 
console.log(p.x , o1.x);
```

[//]:# ( Hiding)
[//]: # ( Hiding )

Above both ways do create an object but fails to provide a way to create same type of objects without repeating the code.


```javascript
   var Dictionary = {
  If: {
    you: {
      can: '',
      make: ''
    },
    sense: ''
  },
  of: {
    the: {
      sentence: {
        it: '',
        worked: ''
      }
    }
  }
};

function Iterate(obj) {
  for (prop in obj) {
    if (obj.hasOwnProperty(prop) && isNaN(prop)) {
      console.log(prop + ': ' + obj[prop]);
      Iterate(obj[prop]);
    }
  }
}
Iterate(Dictionary); 
    
```

[//]:# ( properties can be deleted variables can not : what it means that when you declare a variable without a `var` it becomes the property of the Golbla object thus can be deleted as opposed to true global variable which can not be deleted.)



