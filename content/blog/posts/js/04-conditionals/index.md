---
date: "2016-12-10"
draft: false
title: "JavaScript Conditionals"
categories:
  - "Programming Languages"
description: "An overview of JavaScript conditionals."
tags:
  - "JavaScript"
  - "Conditionals"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---



## What are conditions

Programming is all about using logic of `if and then`. No matter what computer language you are using the rules always revolves around if and then. If this happens do that otherwise do something else, and so on

JavaScript is not different from other languages, in fact it is a c-based language and most of its syntax is like c language. But it is not a high level language like C. It has almost same procedure to check the conditions of any statement like the way it is done in c-language.

Programming is not an alien concept, on the contrary from the day we are born till the day we die our brain is going through the process of trial and error. And this process of trial and error result in programming our mind. An infant does not know the danger of  hot iron rod unless its mind either learns it through experiencing itself by touching it or by some other means. The learning process in children mind is all based upon if and then logic.

In JavaScript `if` block is written as shown below

```javascript
	if ( expression ) {
		// if true execute this block
	}
	
```

JavaScript provide support for three different forms of  ` if ` statement.

1. only ` if ` statement.
2. `if` with `else` statement.
3. And `if`  with `else if` statement.

Their format is given below.

```javascript
	// 1. only if format

	if ( expression ) {

		// if true execute this block
	}

	// 2. if with else format
	if ( expression ) {

				// if true execute this block 
	} else {

				// if false execute this block
	}

	// 3. if with else...if format
	if ( expression ) {

			// if true execute this block 
	} else if ( anotherexpression) {

				// if true execute this block
		} else {

					// if the above two are not true this block is executed
			}	
```

The actual testing of any condition happens within the brackets. These pair of brackets `( )` are called **parenthesis** while these `{ }`  are known as **curly braces**. There is another one which is commonly used when creating an array `[ ]` is known as **square brackets**. They always come in pairs and have their special purpose and  are not interchangeable. Let's see the first use of `if` block.

```javascript
	var condition = true; // condition can either be true or false
	if ( condition ) { 
		//do something
		console.log("Hello To Conditionals !");
	}
```

 The code block followed by the `if` statement is executed only if the expression or a variable places within the parentheses yields to true but in case of being false this code block is never executed. If there are only two possibilities exist  then else block can be used comfortably. 

```javascript
	var condition = false

	if ( condition ){
		console.log("it is true");
	} else {    
		console.log("it is false");
		}
```

In  above logic there is no need to check the condition being false but it is implied and understood that if it is not true then `else` block get executed. What if we are dealing with the case of more than two options. One way is to write multiple `if` blocks as shown below.

```javascript
	var number ;
	if ( number == 1 ) { }// execute this block}
	if ( number == 2 ) { }// execute this block}
	if ( number == 3 ) { }// execute this block}
```


Using separate `if` blocks as done above is not only bad logic but also take more cpu ( central processing unit ) cycles. Here we are talking about mutual exclusive case, in which if one possibility is met the other can not be true. Thus above example may generate the same result yet it is not the correct way of writing a programme logic. The above can be written correctly in the following way

```javascript
	var number ;
	if ( number == 1) {
		// execute this block	
	} else {
		if ( number == 2) {
			// execute this block
		} else {
			if (number == 3) {
				// execute this one
			}
		}
	}
```

There is nothing wrong in the above code block except that JavaScript language also provide `else if` block so you do not have to create extra block with else and check `if` logic inside this block the above is more clearly written as given below.

```javascript
	var number ;
	if ( number == 1) {
		// execute this block	
	} else if ( number == 2) {
			// execute this block
		} else {
				// execute this one
			}
		}
	}
	
```

## Nested blocks

The above example uses nested `if` blocks, but the deeper you go of `if` blocks  more confusing it gets. Our brain can handle the complexity if it comprehends it otherwise it tends to filter it out tagging it as un necessary. In programming most of nested logic can be written alternatively using logic other than `if logic` . First let's see this scenario.

```javascript
var number = throwDice() ;

	if( number == 1 ) {
		console.log("it is one : " + number);
		// do whatever you want
	} else if ( number == 2) {
		//if number is not 1 check for another one
			console.log("it is two : " + number);
		} else if ( number == 3 ) {
			//if number is neither 1 nor 2 check another one and so on
				console.log("it is three : " + number);
			} else if ( number == 4 ) {
					console.log("it is four : " + number);
				} else if ( number == 5 ){
						console.log("it is five : " + number);
					} else {
							console.log("it is six : " + number);
					}

	function throwDice(){
		var result = Math.floor(( Math.random() * 6 ) + 1 );
		return result;
	}
	
```

If the condition being checked has many options, it  can be written elegantly using `switch` block. Let's first see the general pattern of `switch` statement followed by the above same example  written in using `switch` statement.

```javascript
	switch ( expression ) {
		case 1:
		// case 1 code block
		case 2:
		//case 2 code block
		....
		default:
		// default code block
	}
	
```



The purpose of `switch` statement is to check the value of expression against each provided case where a value is already mentioned. If the match is found, the code is executed and the process is broken by the use of key word `break` so that it does not fall freely and start checking the other cases.

Here is outer block of switch statement with `break` keyword
```javascript
	switch ( expression ) {
		case A:
		//code to execute if the expression yields to A
		break;
		case B:
		// code to execute if the expression yields to B
		break;
		......
		default :
		// this code gets executed if the above does not match
	}
```



In above code block, the default keyword tells the interpreter to run it only if there is no match found above. But it does not have to be the last one either. Here is the block of code for above example using switch statement.

```javascript
	var number = throwDice();
	switch (number){
		case 1:
		 	console.log("it is one : " + number);
		 	break;
		case 2:
			console.log("it is two : " + number);
			break;
		case 3:
			console.log("it is three : " + number);
			break;
		case 4:
			console.log("it is four : " + number);
			break;
		case 5:
			console.log("it is five : " + number);
			break;
		case 6:
			console.log("it is six : " + number);
			break;
		default:
			console.log( " it is not within the range!");
	}

	function throwDice(){
		var result;
		result = Math.floor(( Math.random() * 6 ) + 1 );
		return result;
	}
```

When learning about switch statement in JavaScript. It should be noted that sometimes you would want to execute a particular code block or statement for more than one case. It is done by writing  a default block just after the same cases. For example the code below will execute the default code for case 1 to 3. Then for case 4 and 5 same block of code is used without using default.

```javascript
	var number = throwDice();

	switch ( number ){
		case 1:
		case 2:
		case 3:
		default :
			console.log("it is either one, two or three");
			// do something
			break;
		case 4:
		case 5:
			console.log("it is either 4 or 5");
			// do your work 
			break;
		case 6:
			console.log("it is definitely six");
			break:
	}
	function throwDice(){
		var result;
		result = Math.floor(( Math.random() * 6 ) + 1 );
		return result;
	}

```

[//]:# ( Hard link: mmmm)










