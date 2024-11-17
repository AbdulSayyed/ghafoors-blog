---
date: "2017-01-05"
draft: false
title: "Introduction to Functions"
description: "An introduction to JavaScript functions and their uses."
categories:
  - "Programming Languages"
tags:
  - "JavaScript"
  - "Functions"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---



#### Objectives

At the end of this chapter you will learn to :

- Define all different kinds of functions
- Distinguish between an statement and the expression
- Handle functions from JS perspective
- Invoke functions directly and indirectly
- Understand how functions inherits properties too
- Appreciate functions role in object creation
- Explore the power of functional programming  

### Introduction to JavaScript Functions

They are main building blocks of JavaScript, usually assigned a name so that they can be used time and time again by identifying  with the given name.They are self-contained modular units.The structure of the function is shown below.

```js
    function functionName ( ) {
        //code goes here
    }
```


### Defining a function

In order to use a function in your program it needs to be defined so that  the JavaScript interpreter knows its existence. Creating a function Unlike *"C"* programming language does not require it to be declared  on the top of the file and then defining separately. In JavaScript a function declaration also defines a function.

>Note: The function declaration is not the only way of defining a function. A function expression can also be used to define a function.

### Function declaration and function expression

 A **function** key word is used to define a function along with its name and  zero or more parameters list followed by  the series of statements enclosed within the curly brackets { } known as code blocks or function body, like `function fn() { } `.

 The name of the function depends how you declare a function , the name acts like a label so that you can use a particular function by identifying it from its label thus the name is  known as **identifier**. Function name or identifier has to follow some rules { Syntax rules,Good practice rules, etc } They are case sensitive thus ( do, Do , DO and dO ) are all different.

 Just like variable names, the name can have alpha numeric value [0 to 9  and a to z / A to Z]OR _ , $ and special characters. But it can not start with the numbers [0-9] or any keywords  and can not contain spaces. If in doubt    [check it out](https://mothereff.in/js-variables)


 After parenthesis, a function starts with a curly brackets **{** and ends with it **}**.a pair of curly brackets  **{ }** are also known as code blocks or the body of the function. A semicolon is not needed after the end  code block **};**  if it is  only a function declaration. The actual code, a series of statements are written inside the curly brackets.

```javascript
	// declaring a function also  known as function declaration
	 function fn(){
        console.log("Welcome To JavaScript!");
    }
```

There are four requirements to define the function:

1.	use `function` keyword, which is must
2.	use of function identifier, which is optional
3.	use of parenthesis `(  ) ` which is must but parameter list inside the parenthesis is optional
4.	use of code block { } which is also must, where the actual code resides.

> Note: A function should not be defined inside any conditionals like `if and else` and they can not appear inside of loops or any try , catch and finally block. This only applies to a function declaration . A function expression may appear anywhere in the code. Function defined in conditional blocks will give unexpected result because of the [hoisting](#) .
 
```javascript
//file-name:chap-02-10.js
(function(){
if(false){
        //function declaration will be hoisted
        function doThis(){console.log("shouldn't be executing"); };
   } else if (false) {
        // function expression are not hoisted 
        var doThat = function(){console.log("nothing to log");};
   }else if (true) {
            // function expression invoked immediately
            (function(){
                console.log("don't doThis! doThat");
                doThis();
                //doThat(); Error not a function
            }());
    }
})();
```

If a function is given a name `fn`, this function is also known as a  **named function** as compared to the un-named function, as used in following example.

```javascript
	function () {
		console.log (" Hello and Welcome to the functional language!");
	}
```

The above code also fulfils the required conditions except that it does not provide this function a name, hence called **anonymous function**. using a function is a two step process. The function definition is the first step towards using this function. In order to execute this code the second step is to call this function from somewhere within your program. This process of calling a function is commonly referred  as **invoking a function**. Before we start talking about this second part, the following code block gives you a detailed structure of a function definition.

#### Structure of a function declaration
```js
    Key word
        |     Unique function Name known as function identifier
        |       |    (0 or more , optional parameters list)
        |       |          |
        V       V   _______V_____  
    function name (param1 , param2) {   <----Starting code block
        // adding passed arguments   <-----Single line comments
        var result = param1 + param2; <----An expression
        return result ;           <--------- return statement
        // A statement after return is never executed.
        console.log("I will never be reached");
    };//semi colon not necessary  when declaring a function
```

As mentioned before, there may be more than one function present in your JS file known as source file, the order does not have any importance. If you have ten or more function declared in your source file, they are treated equally. But function expression does make difference where it has been placed in your programme. Execution of a programme  consist of two phases, first one is parsing the code file and second  executing the code. 

During the first process of parsing , variables and function declaration  are hoisted ( are treated as they are written at the top of the file known as lifted up ) and kept separately with the list of parameters being passed.

The second phase is to execute the code keeping the above information in hand. JS does this process so that the engine knows about the existence of variables and functions , no matter where they are declared. And can identify them before the actual code is run, otherwise it would complain as an error if used first and declared later. But this is not the case with function expression, in function expression only the variable declaration part is lifted up, the actual assignment happens at the run time, thus if called first , the engine will say it is not a function but a variable because it is only aware of its declaration not the assignment. `In contrast to this, a mere anonymous function is not at all hoisted. An anonymous function is evaluated where it is situated.`

> Note: Functions can be defined inside other functions known as nested functions. Each consecutive function defined in another function has access to its outer function variables except the `this` keyword. If `this` needs to be accessed it should be copied first `outerThis = this`.

[//]: # ( The above section is complete)

### Functions in JS are also objects !

Whenever a function either named or unnamed is created. It is created like any other object. It has its own constructor and like other objects it has its prototype to share the behaviour. Since most of the time a programmer is creating a function in one way or another it is best to know more about function object and its prototype so that pre written code can be used as its own. First of all, keep in mind that mere function declaration is enough to create a function object. The declaration creates / calls the  Function constructor `Function()` internally and return an object of type function which is referred by its identifier.


```javascript
	function fn() { return}; // fn is now an object of type function
	console.log(fn.constructor); //[Function: Function]
	console.log(typeof fn); // function
	console.log(Object.getPrototypeOf(fn));//Function( Function.prototype)
	var myProto = Object.getPrototypeOf(fn);
	console.log(Object.getPrototypeOf(myProto));//{} . it is an object too
	console.log(JSON.stringify(Object.getOwnPropertyNames(myProto)));
	/*["length","name","arguments","caller","constructor","bind","toString","call","apply"]
	In line no 2 the constructor property was used on function object as if it was its own but, it was inherited through prototype chain from Object.prototype` object.
	*/
```

A function, being an object  is also created with a special function called constructor function  **Function()**. The newly created function  also has its prototype name **Function.prototype**. This prototype provides the services that every instance of **Function** can share. Thus commonly used properties of a prototype are `length,name,arguments` while `call , apply , toSrring` are commonly used methods. Having said that it is also necessary to understand that function ( with capital F ) represent the `Function` object just like other fundamental objects in JS environment e.g.,`Object`,`Array` etc.

>If a function is assigned to the property of an object it is called a method of that object. When this method is invoked through this object `obj.method` then that particular object is the invocation context of this method represented by the keyword `this`. When `this ` is used inside a method it represent the  object that invokes this method.

### Another example of creating an implicit Function object when function are created .

```javascript
    function Animal(){};
    Animal.prototype.eats = true;
    var kangroo = new Animal();
    var rabbit = new Animal();
    console.log(kangroo.eats);//true
    console.log(rabbit.eats); //true
    console.log(kangroo.constructor);//Animal
    console.log(kangroo.__proto__);//Animal{eats:true}
        // a function can also be added
    Animal.prototype.moves = function(steps) {
        console.log("moved " + steps + " steps");

    };
    kangroo.moves(4); //moved 4 steps
```

The above code shows another way of creating object using function objects. Whenever a function is created it is assigned a property called `prototype` this property is used to assign this function object a new property called `eats`. Then two instances of `Animal` are created  both of them get their individual copy of properties. Note the use of `constructor` and `.__propto__` properties inherited and what they returns

[//]: # ( The above section is complete)
### Calling or invoking a function
There may be only one function which exist in the source file, or this piece of code may exist with other function definitions. Writing a function definition is not enough. In order to use the function, it must be called or also known as invoked, either explicitly or implicitly. To call the function, its identifier is used to identify it among other functions. It is just like calling someone's name to get his/her attention. Though you may get his attention yet he/she will not do what you would want him to do unless you specifically mention what needs to be done.

Therefore by writing the function's name, as in above case `fn`, will correctly identify the function but this will not invoke the function  unless you specifically use the command to carry out the function. In other words, using an identifier is not enough, it will only pick up the right function among others present in your source file. To carry out this function you have to make use of parenthesis ` () `, therefore the full command  of invoking a function would be   `fn ()` . It is this pair of parenthesis which execute the function.


>Note:Without the pair of parenthesis, the function name only identify the function. To execute the function it must be followed by a pair of parenthesis.

```js
	// trying to invoke without the parenthesis
	fn; // nothing would happen,  
  console.log(fn); // would print out the fn dedclaration
```


[//]: # ( The above section is complete)
### Directly invoking function declaration

look at this full example in action.

```javascript
	// declaring a function
	 function fn(){
        console.log("Welcome To JavaScript!");
    }
	// invoking a function
	fn();
	//it can also be done by assigning it to any variable
	var f = fn;
	f(); // same as fn()
	// trying to invoke without the parenthesis
	fn;	// nothing happens
	// console.log("The function identifier 'fn' point to --> " + fn);
	// logs  function declaration statement

```

The above example shows how to invoke a named function, in other words a named function was invoked explicitly. But how an unnamed function would be executed. An unnamed function or an anonymous function differs from the normal named function. Since  it has no named it is not possible to invoke it using the above method unless there is some other way exist to invoke it or you may assign it to a variable so that it can act as its identifier. The process of assigning it to a variable has to be done at the same time when writing it, otherwise we have no way to access it. Following examples shows the later scenario first.

```javascript
	// declaring an anonymous function
	function () {
		console.log ("Welcome to Function Expression");
	}

	// trying to  assign it to any variable so that it can be referenced
	var anyVariable = ?
```

Not possible, declaring an anonymous function and assigning it to a variable must be done at the same time.

```js
	// Function expression,
	var fn = function () {
		console.log ("Welcome to function expression")
	};
	// it can be invoked just like a named function.
	fn();//undefined
```
- An anonymous function can have parameters as well

```js
var fn = function(name) {
	console.log("Welcome back : " + this.name )
}

````
[//]: # ( The above section is complete)
#### Function invocation inside another function

The built in function`console.log()` expects some values as an argument to log or display onto the console. This value can be a function call as done in above example `console.log(fn())`. This tells us that function accepts other functions to be passed as an argument in the above case what is logged is the function `fn()` returned value,if no value is returned explicitly the interpreter assigns it  `undefined`as it happened in the above example.

### Indirectly invoking a function

Functions can be invoked indirectly using a built in function provided by the JavaScript knowns as `apply` and `call`. 
```javascript
	function fn(){
		fn.call(); // call itself 
	}
	// it will create infinite loop and will result in maximum call stake
```

The use of these method comes handy when you want to provide the execution context explicitly. In Object Oriented Programming when a method of any object is invoked. It is said to be invoked upon this object by passing a special pointer known as  `this`. This pointer knows what it refers to and it is the object that invokes the method. But if you have a function that you would want to invoke by different context then these two methods allow you to do this task.

```javascript
	var bike1 = {make:"Honda",year:"1992"};
	var bike2 = {make:"Yamaha",year:"1980"}
	// what this refers to is not known until it is invoked
	function showDetail(){
		console.log("This is " + this.make +" from " + this.year);
	}
	showDetail(); // unexpected answer
```

Ideally the function `showDetail()` should have been the part of the singleton object so that it can be invoked on that object. But since it is not. Let's see how to use this function. If you invoke `showDetail()` in global context. The keyword `this` refers to global object which will try to see if it has any property `make` if it finds it, fine otherwise it will say undefined. This global object is also depends upon the host environment where you are running this programme. To solve this issue you can take the help of `apply` and `call` methods both do the same job except `apply` takes arguments in an array form, while call takes arguments individually. By using apply or call method you are providing your helper function the scope for `this` keyword

```javascript
	var bike1 = {make:"Honda",year:"1992"};
	var bike2 = {make:"Yamaha",year:"1980"};

	function showDetail(){
		console.log("This is " + this.make +" from " + this.year);
	}
	showDetail.call(bike1);	// invoked with bike1 context
	showDetial.apply(bike2); // invoked with bike2 context
```

### The difference b/w apply and call function
They both do the same job except that `apply()` takes an array of argument as its second parameter while `call()` expects individual arguments to be passed to it.
```javascript
	function think(name,subject,time){
		console.log(this.anme + " is thinking about " + subject + " for " + time " seconds");
	}
	var dog = {name:"Elsession",food: "pedigree", age: 10 };
	var boy = { name:"Tonny", age:5};
	think.call(dog,"bone",10);
	think.apply(boy,["football,20"]);
```

Another place where `apply ` and `call` is used when calling a function which requires an empty object so that the result can be stored in it. Following example shows the use of `call` method to see how many times a particular number is repeated in an array.

```js
    function frequency(arr){
      var thisp = this;
      arr.forEach(function(element){
          thisp[element] = (thisp[element] || 0) + 1;
      });
      return thisp;
    }// End of frequency
    // calling the function with the accumulator object
    console.log(frequency.call({},[1,2,3,4,3,2,1,3,4,5,3,21,]));
    // { '1': 2, '2': 2, '3': 4, '4': 2, '5': 1, '21': 1 }

```

[//]: # ( The above section is complete)
### Function always returns a value

It should be noted that unlike other languages javaScript functions always return some value even when you do not use ` return ` keyword. In above examples whether it is a function declaration or a function expression there is always a returned value. To see what is returned, lets look at the following code.

```javascript
	var returnedValue;
	returnedValue = fn(){ };
	console.log ( returnedValue); // undefined.
	/*
	The above can be written in one line.
	 */
	console.log (fn());// undefined.
```

If a function simply don not use the `return` statement or use it, but does not return any value specifically, in both case a default value of `undefined` is retuned

```javascript
	function fn1 () {
		console.log ( "I do not return anything explicitly");
	}
	console.log ("function fn1() returned value is : " + fn1()); // undefined
		// or
	var fn2 = function () {
		console.log ( "I do not return anything either");
		return;
	}
	console.log( "This function returned value is also :" + fn2());// undefined
```

The following example shows three different ways where an `undefined` value is returned.

```javascript
	function someFunction(){
		console.log ( "no explicit return");// undefined is retuned implicitly by default
		//or
		return undefined; // an explicit returned
		//or
		return; // an implicit value is returned by default undefined
	}
```

### Same function can be used to return different values

Since a function can be assigned inside another function. This can be done in a following manner.

```javascript
	function squareOf(num1,num2,num3,num4,num5){
		// Actual function that does the job and return the value
		 worker = function(number){
		 	return number * number;
		 }
		 var result = "";
		 result+=worker(num1) + " , ";
 		 result+=worker(num2) + " , ";
		 result+=worker(num3) + " , ";
		 result+=worker(num4) + " , ";
		 return result;
	}
	console.log(squareOf(10,20,30,40,50));
```

The above can be done in more elegant way.

```js
	function squareOf(num1,num2){
				worker = function(number){
		 	return number * number;
		 };
				var result = "";
		for(var i = 0; i<arguments.length; i++){
			 result+=worker(arguments[i]) + " , ";
		}
		return result;
	}
	console.log(squareOf(23,45));
```


[//]: # ( The above section is complete)

### Function expression

When a function is assigned to any variable like a value, it becomes the function expression. The function can be named or unnamed function as shown below. Invoking a function is possible in a same way as done with named function providing trailing brackets.

```js
	//  Un named function expression,
	var fn1 = function () {
		console.log("Welcome to un named function expression")
	}; // semi colon in must
	fn1();
	// Named function expression good for debugging
	var fn2 = function fn() {
		console.log("Welcome to named function expression !");
	}
	// it can be invoked by either identifier.
	fn2();
```
Once an anonymous function is assigned to any variable, it can be invoked using that handle in a same fashion as a named function.

[//]: # ( The above section is complete)

### Difference between function declaration and function expression

When invoking either function declaration or function expression they look same but there is a difference. In case of function declaration The call to invoke a function always succeed because JavaScript variables and functions declaration  are hoisted.

```javascript
	console.log ( " Calling before declaration : " + fn () );
	function fn(){
		console.log("below");
	}
```

But in case of function expression the result will be different. For the simple reason that an expression requires some evaluation and that evaluation only happens when the code is run. Thus in defining the function expression its declaration part is hoisted, but not the assignment. Thus engine would not throw an error of not identifying the variable but it will throw an eroor of type `TypeError` about its use as shown below.

```javascript
	console.log ( " I am called first : " + fn ());
	var fn = function (){
		console.log ( " below ")
	};
  // TypeError: fn is not a function,
```
[//]: # ( The above section is complete)

>Therefore always use the good practice rules, define first use next whether it is a function declaration or function expression.


### Immediately invoked function.

When dealing with anonymous function, they can be made self executable so there is no need of invoking it explicitly. As we know that, to execute a function you need a handle to it which is required by means of its name or identifier. Once a handle or reference is achieved to any function, it can be invoked by adding a pair of parenthesis at the end. Thus by using the same logic, a self execution can be achieved at the time of writing an anonymous function.

```javascript
	// anonymous function
	 function () { console.log ( "I am a self executable");}

	/* enclose  the whole function within a parenthesis so that it can be identified as one unit*/
	// here a pair of parenthesis is acting as a wrapper to function.
	(function(){console.log ( "I am a self executable");})

	//now the above line of code can be run easily followed by `()`
	(function(){console.log ( "I am a self executable");})();

	/* it is same as writing an anonymous function and assigning it to any variable and then using the identifier to invoke the function. as shown below */
	var fn = function () { console.log ( "I am self executable ") ;}
	fn();

	// another style of writing the above
	(function(){console.log("I am a self executable");}());

```

The above is an an example of what is commonly known as `IIFE` pronounced iffe and stands for immediately invoked function expression. In JavaScript anonymous function and IIFE plays great role when writing code. There are number of JavaScript libraries exist that make use of IIFE and anonymous function frequently. As the name suggests they are not required to be invoked. They are invoked automatically as they are expression ,  if list of parameters is defined they can also accept the arguments passed to them. Following describes its skeleton

```javascript
    ( function ( param1,param2) { // code
        }(1,1));
        //The above is same as below
    ( function ( param1,param2) { //code
        })(2,2);
```

For any function identifier  or a function expression to be invoked the existence of parenthesis with or without arguments are must. Both positions shown above will work. It should be noted that variable defined inside the immediately Invoked function expression are private to this function and are not available from outside.

#### Use of IFEE

An IIfE can be used to get the private counter to keep track of some task performed.
```javascript
	
	
```

#### Passing arguments to Immediately invoked functions

JS is said to have functional programming features and one of them is to return a function and accept  function as an argument. When accepting as an argument, it can be defined inside another function.

```javascript
	(function(capital,country){
		console.log(country + "'s capital is :" + capital);
		})("London","England");

```

Or using other style, where a pair of parenthesis are written inside the wrapper.

```javascript
	(function(petrol){
		var result = petrol * 40;
		console.log("Toyota Hybrid  will run for :" + result + " miles in "+petrol+ " litres" );
		}(2));
```

It is also not common but acceptable to pass another function when function is invoked even when dealing with IIFE.

```javascript
	(function(factory){
		console.log(factory.name);
		console.log(factory.length);
		console.log(factory.arguments);
		console.log(factory.constructor);
		}(function(x,y){}));

```

### Functions can accept other functions as an arguments

Just like passing any object as a parameter to any function is allowed and legal so does passing a function too. When passing functions to other functions occurs which is a normal behaviour when complexity grows, functions act like other values and behave as data. Below is `forEach()` function which accepts the first argument as a function. You can either define the function inside the forEach() function or define it separately and pass its identifier as shown below:

```javascript
	var arr = [1,2,3,2,1,23];
  function callback(){console.log("I am called on each array item";)}
  arr.forEach(callback);
  // or define it within the function
  arr.forEach(function(element){
              console.log("I am called on each element " + element);
  });

```

Another example of passing function as an argument

```javascript
    function fn(value,callback){
    console.log(value); //30;
    console.log(callback);// undefined
}
fn(30);
    // you can define it separately
    // function callback(parm){
    //      
    //      }
```

The above code can now be changed slightly to make `callback` parameter points to a function definition which is done when a function is invoked.

```javascript
    function fn(value,callback){
    console.log(value); //10;
    console.log(callback + "");// prints callback function
    return callback(value);
}
// callback function is defined when calling a function
    fn(30,function(number){
        if(number >= 10000)return number;
                return  arguments.callee( number );

    });    
```

#### Callback Function

When a function **A** is passed to another function **B** and **B** executes **A** then **A** is known as callback function.
- function **A** does not need to have a name , it is regarded as an anonymous function. A callback function can be defined separately and passed a reference to the function that executes it. Or it can be defined within the argument of an executing function below is another example of callback function.

```javascript

    function reverse(arr,callback){
        var result = callback(arr);
        return result;
    }

    var result = reverse([1,2,3,4],function(arr){
                for(var i = 0; i<arr.length; i++){
                    var temp = 
                }
        })
```

### Parameters and Arguments

To be able to  accept the arguments, function declaration must define its parameters, they are written inside pair of parenthesis by a comma separated values (param1,param2,.....).These  parameters are only available inside the functions. Being available inside the function means that these values can be accessed and manipulated and act as local variables.` function fn(a,b){return a+b;}`

When you define any function you are expected to provide the parameter list so they can be used within that function by accessing them with the listed names. but unlike other languages in JavaScript specifying the parameters aren't necessary and even if specified they don't need to match the number of arguments being passed to the function.

```javascript
	function fn (name,age){
		console.log("name is :" + name +"\t age is :" + age);
	}
```

The above function expects two arguments to be passed when it is invoked. But if none is provided, there will be no errors. JavaScript will assign them a primitive data type, as discussed before , `undefined`. Therefore you are allowed to pass any number of arguments. Those which matches with the parameters gets its value and the rest are assigned default values. Thus you may invoke the function `fn()` without passing any arguments or passing only the one you want and it  will produce no error, like `fn("Sayyed")` . Similarly if you provide more arguments than expected the superfluous arguments will be ignored.

>Note:If you are coming from C++ or Java or any other language, you may be wondering that this is not what you would do in other languages that is known as function polymorphism. In JavaScript there is no function polymorphism.

#### arguments object
Unlike other languages in JavaScript specifying the parameters aren't necessary and even if specified they don't need to match the arguments being passed. When a function is invoked it is given an array like object named `arguments` by default. This object is used to access the arguments passed to the function, like `arguments[0]` to accesses the first arguments passed to the function and so on.

```javascript
    //file-name:chap-02-11.js    
    function fn(){
        for(var i = 0 ; i<arguments.length  ;i++){
            console.log("arguments are :" + arguments[i]);
        }
    };fn(1,2,3,4);
```

In above example, a function was called with four arguments but it was not mapped with the parameter list at the receiving end. Thus the array object `arguments` is used to access them inside the function because there was no parameter list defined.

If a parameter is defined and function is invoked with the same number of argument they both are correctly mapped with each other. Thus changing either of them effects the other one  as shown below.

```javascript
	    function fn(value){
	    console.log(value); // 5
	    console.log(arguments[0]); // 5
	    value = 10; // value is changed
	    console.log(arguments[0]); // 10 ,it gets changed too
	    arguments[0] = 100; // arjuments[0] contents changed
	    console.log(value); // value is also changed
	}
	fn(5);
```

>Note: A common practice to check if any argument is passed or not when a function is invoked to check the length of the coming arguments. If no argmunets are passed then work is not done other wise carry on as explained below

```javascript
	Metalsmith.prototype.directory = function(directory) {
    if (!arguments.length) return path.resolve(this._directory);
    assert(is.string(directory), 'You must pass a directory path string.');
    this._directory = directory;
    return this;
};
/*
	It is a common practice to write " if without a block if there is only one expression "
	if(success) do a;
	otherwise do b.
	The test if(!argument.length) can be read like if arguments length is not zero then do a or in above case "return path.....""
	otherwise assert and follow the rest
 */
```

>Note: Only write one statement in a line if more than one statement use if block

#### Assigning Default Values to the Parameters

There are number of occasions when a function is expected to provide default values to the function parameters if no arguments are passed or the parameters are undefined. The following two approaches are good ways to provide default values

```js
    function addDetail(fname,lname,gender,title){
        //some code
        if(title === undefined && gender === "male") title = Mr.
    } addDetail("Mike","Rossen","male");
    // another approach 
    function tossIt(value){ // undefined value yields to false in boolean context
        value = value || ["head","tail"] //
        console.log(value);
    } 
    var mystery = ["black","white"];
    tossIt(mystery); // passed arguments will be assigned
    tossIt(); // default values will be provided
    // what happens when number of parameters increased
    function paintIt(baseCol,borderCol,northWalls,ceiling......){some code }
    //calling function from somewhere in the program
    paintIt(null,"offWhite","null","White")
```

But this approach gets more prone to errors when number of arguments increases for one basic reasons that human tends to forget what they had defined and in what order parameters are defined. Though for some it may not be an issue yet one solution is to  assign default values to the  parameters.

```js
    //providing default values when defining a function
    function paint(baseColor,borderColor,northWall,ceiling ...){
        baseColor = baseColor || "white";
        borderColor = borderColor || "cream";
        northWall = northWall || "skyBlue";
        ceiling = ceiling || "white";
    }
    
    console.log(paint(baseColor,borderColor,northWall,ceiling));
```

 
 But there exist an elegant approach to assign default values to the parameters using an Option object.The idea is that you define all your parameters as key value pair in an object and passed the object as an arguments. Passing an object has an advantage of getting updated if needs be without considering the order and number of parameters a function accepts.

```javascript
        //file-name : chap-01-17.js
        function paintIt(options){
        var baseColor = options.baseColor || "white"; //default values
        var borderColor = options.borderColor || "cream";
        var northWall = options.northWall || "skyBlue";
        var ceiling = options.white || "white";
        //......
        console.log("baseColor----> " +baseColor+"\nborderColor----> "+borderColor +
            "\nnorthWall----> "+northWall+"\nceiling----> "+ceiling + "\n");
    }
    //calling above function with only one variable
    // rest of the values will be set to default
    paintIt({northWall:"darkBlue"}) 
    //Creating an object to pass
    var optionsObject = {
        baseColor:"lightBlue",
        borderColor:"darkBlue",
        northWall:"null"
    }
    paintIt(optionsObject);
    // you can update one value depending upon any condition
    
    if(true){
        optionsObject.northWall = "offWhite";
    }
    paintIt(optionsObject);
    console.log(optionsObject.northWall);
```

### Accessing the extra arguments

So far we have established the fact that JavaScript does not throw an error if more arguments are passed than expected or even specifying any parameter list is not necessary,  then how do those passed arguments are accessed within that function body. we will discuss this topic below .

### Arguments are passed by reference or by values

If you are new to programming, you must understand that when a function is invoked with some arguments, those arguments can be passed either using their literal values or a variable referring to those values;

```javascript
	fn ( 2 ); // number literal is passed
	fn ( "hello") // string literal is passed
```

if any variable is passed instead of the literal values, which refers to any primitive data type, it is not passed by the address ( which is also known as passing by reference ) but by value. What it means is that a copy of the value of that variable is made first before passing to the function. But it only applies to the primitive data type such as number and string and not to objects when passed as an argument of any invoking function.

```javascript
    var x = 10;
    function fn(value){
        console.log("Received value is :" + value ); // 20
        // change the value
        value = 20 // Only local variable value  is changed
        console.log("Value is changed :" + value); // 20
    }
    fn(x);
    console.log(x); // 10
```

In above code the value of variable `x` remains unchanged even though it was changed inside the calling function because its original address was not passed but a copy of the variable. If it was passed by reference the original value of the variable would be changed too.

### How to access extra arguments passed to a functions

As we said earlier that a function can be passed more arguments than it is expected to receive, then how is possible to use those extra arguments in that function.To understand how it is done in JavaScript, first clear your mind that when a function is invoked ( called or executed ), it is given an array-like  object named `arguments`. What it means is that whatever is passed to this function regardless of less or more arguments, can be accessed inside the function using this object acting as a local variable to this function. For example the first arguments passed to any function could be reached by using `arguments[0]`, the second one by using `arguments[1]` and so on, thus the extra arguments can also be reached using this array-like object. Lets see this in the following example.

>Note: Here the term array-like object is used instead of an array object the reason is that it is not an array object but behave like an array object to see more detail please visit [mozilla.org](http://developer.mozilla.org/en/docs/web/javaScript/Reference/Functions/arguments)


``` javascript
    function fn(){
        for(var i = 0 ; i<arguments.length  ;i++){
            console.log("arguments are :" + arguments[i]);
        }
    };fn(1,2,3,4);
```

The array-like object `arguments` is kind of a reference to the values passed as an argument. This means changing the one effects the other one. In other words while calling a function and passing same number of arguments as expected in the formal list of parameters in function definition then corresponding values are bound together thus they share the same values as seen below and can be changed interchangeably.

```javascript
    function fn(value){
    console.log(value); // 5
    console.log(arguments[0]); // 5
    value = 10; // value is changed
    console.log(arguments[0]); // 10 ,it gets changed too
    arguments[0] = 100; // arguments[0] contents changed
    console.log(value); // value is also changed
}
fn(5);
```

### Binding b/w passing arguments and formal parameters

It is important to understand this process of binding otherwise it will mislead you easily. Thus keep in mind that if;

 - Equal number of arguments are passed then passing arguments and former parameters are bound together. Changing one of them will change the other.
 - If less number of arguments are passed than expected,then other parameters gets undefined value as a default JavaScript behaviour, and are not ** bound ** to the `arguments` object thus do not share the same value and updating one of them has no impact on the other and vice versa. This scenario is explained below.


```javascript
	function fn(x,y){
	    console.log("1. x is " + x + " y is " + y); // 5 , undefined
	    console.log("2. " + arguments[0]); // 5
	    console.log("3. " + arguments[1]); // undefined
	    // assigning new value to arguments[1]
	    arguments[1] = 100;
	    console.log("4. " + arguments[1]); // 100, gets updated
	    console.log("5. " + y ); // still undefined
	    //assigning new value to y
	    y = 50;
	    console.log("6. " + y ); // 50
	    console.log("7. " + arguments[1]); // 100, doesn't get updated
	}
fn(5);
```

### What happens to operations performed when less arguments are passed than expected

When less arguments are passed than expected, how an execution occurs  depends what operation is being performed with the undefined parameters .  The behaviour of an `undefined` variable depends upon the context it is used. For example when an undefined variable is added,subtracted to a number or multiplied , divided by a number its result is `NaN`. Similarly  an `undefined` variable in boolean context will yield to `false` while with string objects it will converted to behave like another strings.

```javascript
    //file-name:chap-02-02.js  
    var x = 100, y = 200;       //this x and y has no impact on fn()  
    function fn(x,y){ return x + y;}
    console.log(fn(1,8,3,4)); //9
    console.log(fn(1,8)); // 9
    console.log(fn(1)); //NaN
    console.log(fn("hello :")) //hello  : undefined
    console.log(fn(true,"")); //true
    console.log(fn(undefined)); //NaN
    var a = [1,3];console.log(fn(a)); //1,3 undefined
```

### Higher-Order functions
This term has come from mathematics where it represents a function which accepts one or more functions as an arguments and can return a function as a result. These functions provides abstraction and solve problems in a way that looks more simplistic than done otherwise.

### First-Order functions
This term is used for other functions which are not higher order function. They may or many not accept a value and can return some value. They are used to share functionality time and time again.

### Closures
The concept of closures is to do with scope and rules has changed since ECMAScript 6. This section will describe JavaScript behaviour before this specification.
Scope is about where a declared variable or a function can be accessed from . A variable declared within a function is not accessible outside the function and it is called to have local scope or function scope. But if we have nested functions i.e., function inside the function then what happens. Here we are dealing with `scope chain`, nested functions can have access to its own variables plus access to outer function variables in which they are defined further more they can have access to global variable. But it is not all, the power of closures comes from having an access to the parent scope, even when the function has closed. What it means is that if your nested function is returned or it returns some object. Then this object has still access to the local variable of the parent function.

#### Returning an anonymous function
```javascript
    function makeWords(){
        var prefix = ["un","de","in","il","im"];
        return function(word) {
                var pre = prefix.pop();
                console.log(pre + word);
            };
    };
    var getPrefix = makeWords();
    getPrefix("proper"); //improper
    getPrefix("legal"); //illegal
    getPrefix("complete");//incomplete
    getPrefix("rail");//derail
    getPrefix("known");//unknown
    getPrefix("");
```

In above code the nested function  have access to local variable of enclosing function. This access is provided a link between the nested function and its environment where it is created. This unbroken link with its parent function ( enclosing function ) exist even when the execution comes out the enclosing function. In above scenario this is achieved either by returning an anonymous function or an object that defines that function or a reference to a function which can be used by the reverencing variable.Another version of the same code could be written as follows.

#### Returning an object
```javascript
    function makeWords(){
        var prefix = ["un","de","in","il","im"];
        return {
            nextWord : function(word) {
                var pre = prefix.pop();
                console.log(pre + word);
            }
        };
    };
    var getPrefix = makeWords();
    getPrefix.nextWord("proper");
    getPrefix.nextWord("legal");
    getPrefix.nextWord("complete");
    getPrefix.nextWord("rail");
    getPrefix.nextWord("known");
    getPrefix.nextWord("");
```

#### Returning a reference to nested function

```javascript
    function makeWords() {
    var prefix = ["un", "de", "in", "il", "im"];
    var nextWord = function(word) {
        var pre = prefix.pop();
        console.log(pre + word);
    }
    return nextWord;
};
var newWord = makeWords();
 newWord("proper");
 newWord("legal");
 newWord("complete");
 newWord("rail");
 newWord("known");
 newWord("");
```

it is the variable that receives the returned nested function said to become the closure because it has access to local variable of a function which has exited.

### Adding properties to your function
Since functions are also objects the properties can also be added to function but if you just want to add properties to your function because it is an object. Then add it to object directly because this is one of the reasons objects are present and designed. The job of function is to provide you the service to do some job time and time again and not to force it act like an object hence there will be no use of forcing function to behave like objects even though they are internally implemented as objects.

 Despite, there are certain times when adding properties to a function makes sense to achieve the purpose. Before embarking how to do it, make this thing clear that the issue here is to add properties to function and use them accordingly. A function can be named or un named does not change the issue here. Let's see how it is done.

```js
	var guest = function(name) {
	    guest.counter = 0;
	    guest.sirName = name;
	    return (name === undefined) ? guest.counter : ++guest.counter;
	};
	// Before invoking the function
	console.log("//----Before Invoking the function-----//");
	console.log('guest.sirName = ' + guest.sirName);// undefined
	console.log("guest.counter = " + guest.counter);// undefined

	console.log("//----Invoking function-----//");
	console.log('guest() : ' + guest()); // guest() : 0

	console.log("//----After Invoking the function-----//");
	console.log('guest.sirName : ' + guest.sirName); // undefined
	console.log("guest.counter = " + guest.counter); // 0
```

> Number of points to note here:

1. To assign the values assignment operator ` = ` is used instead of usual one ` : ` because it is function body block not an object code block.
2. Since it is not a constructor function no `this` keyword is used with variables instead the function name.

There will be no error but at the same time there will be no output from this function. This function does exist as other normal function but values inside the functions are not assigned any data.

3. To assign the value inside the function it needs to be invoked first. Once it is invoked this function performs correctly. 
To avoid calling it explicitly this function can be made a self executable function making it ready to be used.

```javascript
	var guest = (function(name) {
    		guest.counter = 0;
    		guest.sirName = name;
    		return (name === undefined) ? guest.counter : ++guest.counter;
	})();
	
```	
The above code would not compile because of using " : " operator to assign values within a function, even if you use " = " operator it wont work. First of all `command` refers to a function and to invoke the function you need trailing brackets `()`. Secondly accessing the property using dot notation (.) is allowed with instance of an object. In the above case there is no instance of an object. This topic of using functions as an object leads to the topic of constructor functions where the properties are defined using `this` key word so that an instance invoking the function can access them.

```javascript
	function Animal(){
		this.name = "any name";
	}
	//
	var monkey = new Animal();
	console.log(monkey.name);
```

### Function Scope
-If a function does not return a value and it is assigned to a any variable that variable  value and type both are  **undefined** as `var what = doNothing();`To see the value of a variable  use `console.log()` function and to find out the type of this variable use built in function `typeof()`.

```javascript
var what = doNothing();
console.log("The value of variable what is " + what "\n The type of what is " + typeof(what));
```

If a function does return a value and it is assigned to a variable that variable type becomes the  same type of the returned  item.The value of the returned item ( variable , object or a function ) is assigned to that receiving variable.

### Functions are values

When a variable is declared and assigned a value the assignment operator ** = ** executes the statement and puts that value into the variable. In other words the memory reserved by the variable declaration now holds the assigned value. Similarly that value does not have to be any number or string it can be a function itself thus it is said , in JavaScript functions are values too.

```javascript
        //First declaring a function , it can be used as a value
        function  message(contents){
            console.log("your message:" + contents);
        }
        //note  a function is being assigned to a variable as a value
        
        var firstMessage = message; // no  parenthesis()
        
        //invoking a function not by its name but by a variable that has been 
        //assigned this function. To invoke " ( ) " are necessary if invoked 
        //without  " ( ) " it represent the whole function.
        
        firstMessage("\'your are free to go\'"); // Note arguments are pass to a variable just as it was an original
```

### Calling a function inside the same function
A function in turn can invoke itself  inside its own body this would be regarded as recursion. It needs to be handled carefully.

[//]:# (01.js)

```javascript
var result;
var makeItTen = function addOne(value){
    if ( value < 10){
        console.log("value is = " + value);
        result = addOne(++value); <------------ calling itself
        console.log("just gone back one step when value was " + value);
        }else{
            console.log("Returning  when value is " + value);
            return value; <--------- this return is assigned to variable "result"
        }
return result; <--------- this returns the computed value to the initial callee
};
console.log("The Final value is : " + makeItTen(0));

```

### A Recursion example
The above can be written in much simpler and elegant way calling `return` recursively.


```javascript
    var makeItTen = function(value){
    if(value < 10 ){
        console.log("The value is : " + value );
        return makeItTen(++value);
    }else{
        return value;
    }
}
console.log("Final value is : " + makeItTen(0));

```


The same result can be achieved without using any recursion at all by means of  loops.

[//]:# ( 01.js)

```javascript
    var makeItTen = function(value){
     for(; value < 10 ;value++){ }
        return value;
    };
    console.log("Final value is : " + makeItTen(0));
```

>Notes:
When performing recursion it is not easy to track the flow of code mentally. Thus it should be used when it is really necessary and make sense. Look at the following program and guess what value is returned to the initial callee.

[//]:# ( 02.js)

```javascript
var makeItTen = function(value){
    if( value < 10) {
        console.log("The value is : " + value++);
         makeItTen(value);
    }else{
        return value;
    }//                           |------Calling a function
};                                V                     
console.log("Final value is:" + makeItTen(0));
```

### Using `arguments.callee` to call itself
JavaScript also provides a way to call itself ,  following example uses this option.

```javascript
function makeItTen(value){
        if (value >= 10) return value;
            console.log("The value is : " + value);
            return arguments.callee(++value);
}
console.log("Final value is : " + makeItTen(0));

```

Though the above use of callee does not impose any problem but it is not necessary the name of callee function can be used to call itself. The appropriate use of `arguments.callee` would be within an anonymous function.
>Note: arguments.callee is deprecated in ECMAScript 5 Strict mode because of problems with tail recursion.


### NameSpace
When writing your programme in JavaScript it is best not to expose your variables and functions globally. To hide them from a global context there is no way present in language. However programmers have designed the style of coding which has become the idioms of JavaScirpt and commonly used among the developers. To achieve  this purpose one of the technique used is to make use of IIFE ( Immediately Invoked Function Expression). Thus everything is wrapped around the function which is itself wrapped with curly brackets making the function to become the un available  either to host environment or to other code at the same time making it a module which can be used everywhere without fearing of global Namespace conflicts.

### What makes a language a Functional Programming Language
* The ability to [pass a function](#) as an arguments to other function
* The ability to [define a function](#) as an argument when invoking a function
* The ability to infer the type if necessary
* The ability to provide the [best use of anonymous](#) function
* The ability to use them as high order function









