---
date: "2016-11-26"
draft: false
title: "JavaScript Arrays"
categories:
  - "Programming Languages"
description: "Understanding JavaScript Arrays."
tags:
  - "JavaScript"
  - "Arrays"
series:
  - "js"
images:
  - "/images/js/js-feature-image.webp"
authors:
  - Ghafoor Sayyed
---

## Arrays

Array is a topic of data structure and deals with collecting of data known as data collection. Data can be homogeneous or heterogeneous, arrays usually deal with homogeneous items. The item in an array or a component (element stored) in an array is accessed by its position using index. Thus there is one-to-one relationship between each index and its component. Take an example of student marks achieved in five subjects ` var result = [70,69,83,93,73]`. Marks are stored in an array which is referenced by the identifier `result.` Thus the relationship b/w its index and value can be shown as below.

```javascript
	var result = [70,69,83,93,73]
	result[0]--------------->70, result[0]------>ABF12C(70)
	result[1]--------------->69,
	..........................
	result[4]--------------->73
```

Arrays index always start with zero ( 0 ). In above figure the `result[0]` points to the address in memory `ABF12C` which holds the value `70`. When the space for the array is reserved in memory it may be a contiguous space or may not.  The size of the array, may grow or may not depends upon the language being used. For example when programming started with procedural languages, they only support static arrays that is the programmer must establish the size of the array. If the array needs to  grow it can not be extended. It was programmer responsibility to take care of the expanding or contracting arrays by tracking the index position. There was nothing wrong with it and the same logic still used  deep down which has been hidden from the programmer so that attention can be paid in solving problems in hand on high level.

## Type of Arrays in JavaScript

- JavaScript provides support for dynamic arrays and can store different types of elements. It supports

- *Homogeneous Arrays*:
	- Arrays of String   `var arr = ["Physics", "Chemistry", "Mathematics"]`
	- Arrays of Numbers  `var arr = [20,49,100,45]`
	- Arrays of boolean  `var arr = [true,false,true,true]`
	- Arrays of function `var arr = [function f1(){},function f2(){}]`
	- Arrays of objects  `var arr = [{x:1,y:2},new Object{},myObject}`
	- Arrays with gaps   `var arr = [ ,"words", ,"another word", ,]`
	- Arrays can have expression `var arr = [200,1.1+2.3, a = new Object()]`
	- Arrays with trailing comma `var arr = [1,2, ]`//only 2 items not three
- *Heterogeneous Arrays*:
	+ Arrays of mixed type `var arr = ["Physics",49,true,null,1.23]`
	+ Arrays of mixed type `var arr =[function(x,y){return x+y;},{a:10,b:20}]`
- *Multidimensional Arrays*:
	+ They are arrays of array, can be two dimensional or multidimensional and commonly used in mathematics `var arr = [["A",200],["B",230],["C",0]]`
	+ A multidimensional Array does not have to have a uniform set of data stored in it . It is free to store any length and any type within it as shown below

```javascript
 		var arr = [ [ "A", 200],
 					[ "B", 400,true],
 					[ null,"Physics","undefined",NAN],
 					["It is all true folks"],
 				  ];
```

The above example of multidimensional array is known as mixed array or *jagged Array*.

> Note:Another point to note is that arrays in JavaScript can be *sparse arrays*. It exactly means what the word sparse refers to that they are not equally distributed. What it means that it can have holes in it.


### JavaScript Arrays are objects

JavaScript provides many built in constructors to create singleton objects. One of those constructor is of `Array` object. It provides both ways of creating arrays using a constructor with new operator or an array literal. An Array object has its own prototype which gets available to be used whenever you create an `Array` object. This prototype provides built in services for manipulating arrays related tasks which makes life much simpler and make JavaScript more functional Programming Language. Thus when you create even an empty  object `var arr = []` it has all the services available to it by default.

### Creating an Array in JavaScript

JavaScript provides three ways of creating an Array object.

 1. Using an Array literal `[]`
 2. Using an Array Constructor with `new` operator
 3. Writing your own Array Constructor

#### Creating an array object using Array literal

```javascript
	var arr = [];		// An empty array object
	console.log(arr);	// []
	console.log(arr[0]);	//undefined
	console.log(Object.getPrototypeOf(arr)); // []-->Array.prototype
	console.log(arr.constructor);	//[Function: Array]
	console.log(typeof arr); // object
	console.log(Object.getPrototypeOf(Array.prototype));//{}-->Object.prototype
	console.log({}.constructor);	//[Function: Object]
```

The above code tells us that the Array object `arr` is created from a prototype `[]-->Array.prototype` using Array literal notation `[]`. The constructor used in creation of this Array object is `Array()`. In other words it is same as using an Array constructor thus can be taken as a short cut of creating an Array object.

The prototype of `Array.prototype` is itself an `{}` object which is created from Object constructor. Thus this simple line figure will explain the whole story.

```txt
	var arr = [] or var arr = new Array()
 	 `arr ----> Array ------> Object`
```

From the code above we can say that  the identifier `arr` is an  object of  type Array which is constructed using an `Array` constructor which in turn is also a type of Object which is constructed using an `Object` constructor.

The point to understand this relation is to accept that the object created above gets to use services freely as of its own because of the prototype inheritance.

#### Creating an Array object using Array constructor
There is no difference of creating an object with object literal or using its constructor with new operator. However, it is worth knowing the format to create the Array object using its constructor.

```javascript
	var arr = new Array();	// same as []
	var arr = new Array(2,3,4);	//	same as [2,3,4]
	var arr = new Array("It is String");	//same as ["it is String"]
	var arr = new Array(2);		// **it is not same as [2]**
```

When creating an Array object using Array constructor, the constructor arguments becomes the elements of the new array. However at least two or more values need to be defined for arrays values. *Only one numeric value is considered to be its length*. Though a non numeric value is allowed. The following code shows the difference.

```javascript
	var arr1 = new Array(4);// an array is created with length 4,
	console.log(arr1);	//[ , , ,  ]
	console.log("arr1 length is " + arr1.length);	// 4
	console.log(arr1[0]);		// undefined
	var arr2 = new Array(2,3);	// an array is created with length 2
	console.log(arr2);	// [ 2, 3]
	console.log(arr2.length);	//2
	console.log(arr2[0] + " , " + arr2[1] + " , " + arr2[2]);//2,3,undefined
	var arr3 = [2];		// an array is created with length 1 with value 2
	console.log(arr3);	// [ 2 ]
	console.log(arr3.length);	//1
	console.log(arr3[0]);	// 2;
	var arr4 = new Array("A");// an array is created with length 1, value is A
	console.log(arr4);	// [ 'A' ]
	console.log(arr4.length);	//1
	console.log(arr4[0]);	// A
```

### Common Mistakes declaring an array syntax using the array identifier.

When declaring an array, it is common to use the practice allowed in other languages. For example following ways are flagged as syntax errors

```javascript
 	/* C style declaration of array not allowed in JS */
 	var arr[]; // error
 	var arr[10];//error
 	var arr[] = [];//error
 	var arr[2] = [10,8]; // error

 	/* The correct way is to keep the nature of the Array in mind. it is a type of object thus need to be created either using constructor function or its short cut which is using an array literal [] */
 	var arr = new Array();
 	var arr = [];
 	// once it is created, use it.
 	var arr[0] = 10; // o.k
```

When an array object is created and shown using `console.log() ` function as shown below. The array identifier represent the Array object and shown as it is `["a","b"]` with array literal containing two different elements of array. But when this identifier is used with concatenated operator `+` it first changes the array object to primitive data type string thus ["a","b"] will be first changed to "a,b" then further concatenation will be applied as shown below. The whole operation is not performed on the array object. The array object remains the same

```javascript
	var arr = ["a","b"];
	console.log(arr); // ['a','b']
	console.log(arr + ""); // a,b
	console.log(arr + ",c");//a,b,c
	console.log(arr);// ['a','b']
```

### Sparse Array
The very first example above `var arr1 = new Array(4);` creates an array `[ , , , ]` of length 4 with no elements. Similarly the code `var myArry = []; myArray[4] = 4; ` would create an array of length 5 with the last element value set to 4 `[ , , , ,4]`. Both arrays have hole in them or you may call it empty spaces. We will be dealing with this situation after few topics.

### Accessing Array elements

Whether reading or writing the array elements, same method is used. An Array literal provides this facility with the help of index number that always start with zero. It works as an operator taking array's identifier on its left and a non negative integer value within it. This value can be an expression evaluating to a non negative integer. Thus `var arr[0], var arr[1+1],arr[2*3] or arr [10/2]` are all allowed. Even other operators can also be used provided they yield to positive integer ` arr[x++],arr[x = x -1]`.

### Populating an Array

It is also possible to populate your array only on desired indexes, the rest of the places will be filled with `undefined` by default but be careful, if you fill the spaces arbitrary the rest of the spaces are not filled with `undefined` but they are holes or empty spaces which have not been defined yet.

```javascript
	var arr = [];
	arr[0] = 100; arr[1] = 101; arr[99] = 109; //it is  sparse array
	console.log(arr[0]); // 100
	console.log(arr[99]); // 109
	console.log(arr[2]);  // undefined
```

#### Reading and Writing at the same time
It is also common to assign one element of an array to another array or to itself as shown below

```javascript
	var arr1 = [100,101, ,103];
	console.log(arr1[2]);	// no element exist at this place,undefined
	// assign the value form index 3 to 2 value
	arr1[2] = arr1[3];
	console.log(arr1);	// [100,101,103,103]
	var arr2 = [];
	// assign to a new arr2
	arr2[0] = arr1[3];
	console.log(arr2);	//[103]
```

JavaScript does not stop you reading or writing from an arbitrary place of your array whether that index or its value exist or not. It simply returns an undefined but it imposes a limit of (2^32-1) range, it is the maximum length which can be assigned to "length" property. Having said that it would also depend upon your host environment and the machine being used.

```javascript
	var arr = [];
	//Reading from an arbitrary position
	console.log(arr[0]);	//undefined
	console.log(arr[100]);	//undefined
	console.log(arr[-1]);	//undefined
	console.log(arr);	// []
	arr[-1] = "index is not possible";
	console.log(arr);//['1':'index is not possible']
	console.log(arr[-1]); // index is not possible
```

What is happening above requires you to understand the nature of the JavaScript behaviour. This is important to know that JavaScript array are object as well. And objects can access their property in two ways either using dot `(.)` notation and using square brackets `[]`. Thus the following code should make sense.

```javascript
	var obj = {};
	obj.-1 = " its value" ;	//SyntaxError:Unexpected token
	obj."-1" = "its value " ; // SyntaxError:Unexpected token
	obj[-1] = "its value "; // allowed
	obj["-2"] = "another value"; // allowed
	console.log(obj[-1]);	// its value
```

When JavaScript comes across the code `arr[-1]` or `arr[-1] = "some value` what it does is to add `-1` as a property name to the array object  referenced by `arr`. If its value is not defined it will assign it `undefined` by default. Therefore it will not be wrong to say that all indexes are property names of array object. When doing so JavaScript will convert the numeric value of `-1` to string `"-1" `.

>Note:All indexes of any array are internally properties of an Array object. But JavaScript arrays only use integer indexes not string indexes or also known as named indexes. In other words they are numerical arrays [] not an associative arrays {}.

[//]:# (But is this true the other way round?. Are all properties of any object also indexes? Yes, only those property names that are integer between 0 and (2^32 -1);)

If we take this point bit further, it can also be said  that a negative integer  becomes the property of an Array object instead of an indexes of an Array and are not the part of an array which was initially created.

In fact the array remain same as before when it was created. Whenever an element  is added to an array a special property of an array object is updated to maintain its size. This property is known as a `length` property of an array object and plays a vital role in distinguishing array index from its property name.

```javascript
var arr = [];
	// All expression below creates a property on array object
	arr[-1] = 100;
	arr[-2] = 200;
	arr[-3] = 300;
	//check the array object arr
	console.log(arr); //[ '-1': 100, '-2': 200, '-3': 300 ]
	//get the value at index 0 of arr
	console.log(arr[0]);	//undefined
	//check if it is an array
	console.log(Array.isArray(arr)); //true
	//what is the length of the array arr
	console.log(arr.length); // 0
	//Now access the property of array object using square bracket
	console.log(arr[-1]); //100
	console.log(arr["-2"]); //200
	console.log(arr[-3]); //300
```

From the above it is clear that a negative integer creates a property on the object and not its index, but what about a floating point number that evaluates to an non negative integer or a string of a numeric value. The code below explains this situation.

```javascript
	var arr = [];
	arr[-1] = 20; // will create a property and attach it to the arr object
	arr["2"] = null;	// [ , ,null]: string is changed to numeric value
	arr[1.00] = "A";	//[ ,'A']: 1.00 = 1, treated as numeric value
```

By creating a property on array object does not create an element in an array nor it effects the length property.

### Array `length` property

It is clear from the above code that this property is maintained internally and is updated only when an element is added to an array .

```javascript
	var arr1 = [];
	var arr2 = new Array(0)
	var arr3 = new Array();
		//check if length is a property of an array object
	console.log("length" in arr1);//true. property of Array object
	console.log("toSring" in arr2); // true. inherited from Object

	console.log(arr1.length); // 0
	console.log(arr2.length); // 0
	console.log(arr3.length); // 0 or
	console.log([].length); //0
	console.log([1,"hello"].length); // highest index is 1, the length is 2
```

The value of length property is always greater than one of its highest index if the array is dense as shown in last line of the above example. The `length` property can be used to shorten the array or delete it all or may be set to the higher length as explained below. To delete the individual property in an array `delete` operator can also be used provided the  writable attribute of the property is not set to false,  but the `delete` operator only deletes the property value not its index.

#### Shortening the array

```javascript
	var arr = [10,100,100,10000]; // 4 elements are set
	console.log(arr.length); // 4
	arr.length = 0; // all elements are deleted
	console.log(arr.length); //0
	console.log(arr); // []
	arr.push(9,99,999,9999,99999); //populate array again using push method
	console.log(arr); [ 9, 99, 999, 9999, 99999 ]
	arr.length = 4; // length is shortened by 1 from the top
	console.log(arr);[ 9, 99, 999, 9999 ]
	arr.length = 10; // length is set to more than elements defined
	console.log(arr);//[ 9, 99, 999, 9999, , , , , ,  ]
	delete arr[2]; // delete the value at index 2
	console.log(arr);[ 9, 99, , 9999, , , , , ,  ] only value is deleted
```

### Setting the size of an Array explicitly

JavaScript arrays are dynamic. They expand and contract automatically so there is no need to bother about it, but it does not stop you to define its initial size. Therefore it is also possible to create an array with a fixed size explicitly at the time of its creation using either a literal or Array constructor. When using  array literal, it is the programmer responsibility to get the whole job done properly.

```javascript
	var arr1 = new Array(10);	// array size is provided
	console.log(arr1); // [ , , , , , , , , ,  ]
	console.log(arr1.length); //10
	console.log(arr1[0]); // undefined
	// setting the size using array literal
	var arr2 = [];
	arr2[9] = undefined; // a technique to assign size
	console.log(arr2); //[ , , , , , , , , , undefined ]
	console.log(arr2.length); //10
	console.log(arr2[0]); // undefined
```

Though the above two ways seem to be doing more or less same job but the second way is just an un necessary effort to do what is done simply and seamlessly. The only thing you have to be careful when using the Array constructor that the constructor takes only one  numeric value otherwise the result will be different. Thus ` new Array("10")` will not create an array of length 10 but an array of length 1 whose value is 10. Therefore if you really want to create an initial size of an array and populate it with some value,the safest way is to do it yourself .

```javascript
	function denseArray(arr){
			var result = [];
		for(var i = 0; i<arr.length	; i++){
			result[i] = arr[i];
		}
		return result;
	}
	console.log(denseArray([1, ,2])); // [[1,undefined,2]]
```

>Note:When you create an array with empty holes in it by any means you are creating sparse arrays. In this case you should know how to deal with it. Thus the length of your array will be greater than the elements you have inside an array. It is better to have a dense array then creating a sparse array

### Creating dense array with the specified size using built in function.
If you are creating an array with an initial size set to some numeric value then it becomes your responsibility to fill it with some value . Following are different ways to use built in function.

```javascript
	var arr = Array.apply(null,Array(3));
	console.log(arr); // [undefined,undefined,undefined];

```

### Different ways of finding the key/property in object
There are different ways to find out if the key or its value is present in an array or not either using built in functions or use your own.

### 1. Using `in` and  operator with Arrays

The `in` operator  can also be used to see if the property exist in the object. Since Array is also an object it can be applied to when queering use key or the property as string not as numeric value.


```javascript
	var  arr1 = [];
	// property must be a string
	console.log(0 in arr1); // false. But wrong way
	console.log("0" in arr1); // false. correct way
	console.log("0" in [ , ,20]); // false
	console.log([10,20, ,] in [2]); //false

	var arr3 = [, ,1234];
	console.log(!("0" in arr3)); // true. index 0 is not set
	console.log("2" in arr3); //true. index 2 exist

	var arr4 = [undefined,undefined];
	console.log("0" in arr4);	// true. index 0 exist
	delete arr4[0];
	console.log("0" in arr4); // false. it has been deleted
```

### 2. Accessing it with object

The simplest way to access any property of the object to access it using an instance of the object with the help of dot (.) notation or square brackets []. as shown below. But the million dollar question is that where is the key in sparse array?. In sparse array, there lies holes and no indexes are present. The correct way is to use built in function `hasownProperty()`.

```javascript
	var arr1 = [ , ];
	// console.log(arr1.?) what to use here ! There is a hole
	console.log([ , ][0]); // undefined, same as below
	console.log(arr1[0]);// undefined.  we are looking for a key not value
	// correct way
	console.log(arr1.hasOwnProperty("0")); // false
```

### Iterating Arrays

Since they are objects they can also be iterated in a same way as done for any other instances of Objects using built in `for...in` loop or provide your own or use `for...of` method which looks for object not a property.

```javascript
	var arr = [10,100,100,10000]; // 4 elements are set
	console.log(arr.length); // 4
	for (var i = 0; i<arr.length; i++) {
		console.log(arr[i]);
	}
		// or use the built in  for...in (it looks for property)
	for( var prop in arr){
		console.log(arr[prop]);
	}
		// or use the built in  for...of ( it looks for object)
	for( var name of arr){
		console.log(name);
	}
```

How you iterate depends what are you looking for in the array. If interested in particular value in the array you may use `indexOf()` or `lastIndexOf()`function which returns the index number against the value found, if successful. Otherwise it will return -1.

#### Looking for a particular property

```javascript
	function find(arr){
		var index = arr.indexOf("98");
		if ( index != -1) {
			console.log("it is present at index " + index);
		}else{
			console.log("it is not present");
		}
	}
	find([12,"he","98", ,10]);

```

## Purpose of Array

Having more than one items organized in an array object is to somehow use them one by one against some function. To full fill this purpose JS provides `forEach()` method.

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

Both are seem to be doing the same job except the map function requires you to return the result and it stored in array object mapped to the original one exactly at the same position. When working with `Array.prototype.map()` method, following rules apply;

1. Every output element corresponds to the input elements in the same position and shuffling is not allowed
2. Callback function should not change the original object. Make a copy and work with it. Similarly action that causes side effects to the working environment is not prohibited.

#### When to use map() function

Map function job is to provide mapping b/w two items of given array according to the criteria set by the programmer. For example an array containing three items when mapped using the criteria of doubling. The new array will be as shown. To display the result in pair
```javascript
   1 ---------------> 2
   4 ---------------> 8
   5 ---------------> 25
```

#### Important functions in Array

In early day of programming the language never provided the built in helper functions. It was the programmer job to write the function every time as and when needed which led to the question of re writing the same code time and time again. Modern days language provide most commonly used function in one way or the another to be used. JavaScript is not different, Whenever an object of array is created it inherits properties from the **Array.prototype** object. These properties include method that provide commonly used functions to be used by the user. These method are well written and do the job perfectly provided one should know how to use them. Let's see what is present to share:

```javascript
	var arr = [];
	var arrProto = Object.getPrototypeOf(arr);
	console.log(JSON.stringify(Object.getOwnPropertyNames(arrProto)));
	/*["length","constructor","toString","toLocaleString","join","pop","push","concat","reverse","shift","unshift","slice","splice","sort","filter","forEach","some","every","map","indexOf","lastIndexOf","reduce","reduceRight","entries","keys","copyWithin","find","findIndex","fill"]
	 */
```

The above methods and properties are called Array's API which is used to solve the problems without re writing the code. For example to separate even numbers from the odd one in a given array. You may write your own function or use the provided one.

Here comes the power of functional programming. You don't need to programme how to do it but you need to learn how given API can be used to solve the problem. If a problem is not solved by one functions then feed the result of one function into next function and keep doing it by building the chain of methods until the problem is solved. This whole scenario is to utilize the power of given API and chaining them. When using these APIs and chaining them together what is to be provided is the **logic** to solve the issue in hand. There may be present more than one way to solve the problem. And they all be the correct ways. It is the programmer responsibility to keep the balance among readability , optimization and performance.

#### Separating evens from odds

> Use the logic of `Remainder`,that is divide a number from  2 if the remainder is 0 the number is even otherwise odd. In JS the symbol "%" is used to achieve the result.
>
**Method**: The conventional method would be to have the input in form of array object. And  get the answers stored in two different arrays leaving the original one intact.

```javascript
	var evens = [];
	var odds = [];
	function EvensAndOdds(array){
			for(var index = 0; index < array.length; index++){
				(array[index] % 2 === 0) ? evens.push(array[index]) : odds.push(array[index]);
			}
		}
	EvensAndOdds([1,2,3,4,5,6,6,7,8,5]);
	console.log(evens); // [ 2, 4, 6, 6, 8 ]
	console.log(odds); // [ 1, 3, 5, 7, 5 ]
```

To avoid global variables, programme can be written whith simple change.

```javascript
	function EvensAndOdds(array){
	var evens = [];
	var odds = [];
		for(var index = 0; index < array.length; index++){
			(array[index] % 2 === 0) ? evens.push(array[index]) : odds.push(array[index]);
		}
		console.log(evens);
		console.log(odds);
	}
	EvensAndOdds([1,2,3,4,5,6,6,7,8,5]);
```

To get the result returned, a `return` statement can be used. How to return the result depends upon you. JS allows you to return a primitive type as well as object and even a function can be returned. Thus to return even number `return evens` and to add odd numbers `return odds` would be sufficient. If both needs to be returned they can be made a part of an object which can be returned safely. Similarly declaring two local arrays evens and odds can be avoided by changing the signature of function `function EvensAndOdds(array,evens,odds){..return...}` thus passing the array literals when invoking the functions.

```javascript
	function EvensAndOdds(array,evens,odds){
		for(var index = 0; index < array.length; index++){
			(array[index] % 2 === 0) ? evens.push(array[index]) : odds.push(array[index]);
		}
		//returning an object
	return {
				getEvens: function(){return evens},
				getOdds: function(){return odds}
			};
}// End of EvensAndOdds
	var result = EvensAndOdds([1,2,3,4,5,6,6,7,8,5],[],[]);
	console.log(result.getEvens());
	console.log(result.getOdds());
```

The above process can be done using array class provided methods, these methods are there providing the mechanism which a programmer may need to complete any task. Functions like `filter()` job is to provide you the opportunity to filter  the given array by applying a certain conditions. The result  is achieved by giving the user opportunity to write his own implementation in the form of callback functions as shown below.

## Built-in Array Class methods.

### filter() [ Array.prototype.filter()]

If an array requires some sort of operation to choose the right items before applying to map use `filter()` method.  Note the `filter()` method returns the boolean value `true` for yes and `false` for no. If the return value is true the result will be an array of filtered value. Applying filter and then map can be done on any level or any number of times. This is regarded chaining of functions. Let's see the example of `filter()` method

```javascript
	// callback function.
	function isEven(value){
		return (value % 2 === 0) // only even number passes this conditions
	}
	var evenNumbers = [1,2,3,4,5,6,7,8,9,99].filter(isEven);
	console.log(oddNumbers); // [ 2, 4, 6, 6, 8 ]
```

Similarly one can use the same function `filter()` providing a different callback function and getting the required result.

```javascript
	function isOdd(value){
		return (value % 2 !== 0) // false
			}
	var oddNumbers = [1,2,3,4,5,6,7,8,9,99].filter(isOdd);
	console.log(oddNumbers); // [ 1, 3, 5, 7, 9, 99 ]
```

> In order to take the advantage of full potential of a callback function, one must know how many arguments and what arguments can be passed to a callback function when writing the implementation.

For example in above two callback functions only one argument is used. When looking  at the API of `filter(callback,thisArg)` method. It tells that callback function can take three arguments, in fact most Array class API take three arguments to provide the opportunity to writhe the implementation of the callback functions. Number one being the element second is the index and third is array to be passed so the programmer can manipulate them easily.

#### Use of reduce()

This function job is to reduce the array by applying elements to a  given callback function and return the first argument which is known as the accumulator. This first argument can be the first value of an array or the value provided. The  difference b/w `filter()` and this fucniton is that this callback takes four arguments

1. `accumulator`: This argument stores the value which comes from applying the function to array element. This is an accumulated value and can be set to any initial value as well. this is the value which is returned as well
2. `currentValue`: This is the current element being processed
3. `currentIndex`: The index of the current element of the array starts at index 0 as usual but if the `initialValue` is provided otherwise at index 1.
4. `initialValue`: Optional value to use as the first argument to the first call of the callback


```javascript
	function maxNumber(previous,current) {
		return Math.max(previous,current);
	}
	console.log([1000,20,2000,33,23].reduce(maxNumber));
```

The first time the callback is called, accumulator and currentValue can be one of two values. If no initialValue was provided, then accumulator will be equal to the first value in the array and currentValue will be equal to the second.
Note: If initialValue isn't provided, reduce will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0. If the array is empty and no initialValue was provided, TypeError would be thrown. If the array has only one element (regardless of position) and no initialValue was provided, or if initialValue is provided but the array is empty, the solo value would be returned without calling callback.

```javascript
	function maxNumber(previous,current,index,array) {
	console.log(" previous is " + previous);
	console.log(" current is " + current);
	console.log(" index is " + index);
	console.log(" array is " + array + " next--->");
	}
	console.log([1000,20,2000,].reduce(maxNumber));
	/*previous is 1000 current is 20 index is 1 array is 1000,20,2000 next--->
 	  previous is undefined, current is 2000, index is 2, array is 1000,20,2000 next--->
	 */
```

 If initialValue is provided in the call to reduce, then accumulator will be equal to initialValue and currentValue will be equal to the first value in the array.

```javascript
	function maxNumber(previous,current,index,array) {
	console.log(" previous is " + previous);
	console.log(" current is " + current);
	console.log(" index is " + index);
	console.log(" array is " + array " next--->");
}
	console.log([1000,20,2000,].reduce(maxNumber,{}));
	/* previous is [object Object] current is 1000 index is 0 array is 1000,20,2000 next---> previous is undefined current is 20 index is 1
 	array is 1000,20,2000
 	 */
```

### Finding out the frequency of value being repeated in an array and mapped it with the value.

```javascript
	function maxNumber(accumulator,current,index,array) {
		accumulator[current] = (accumulator[current] || 0 ) + 1;
		//console.log(accumulator);
		return accumulator;
	}
	console.log([1,2,2,3,1].reduce(maxNumber,{}));
	//{ '1': 2, '2': 2, '3': 1 }
	/*
	The technique is to check the object with next number in an array as its property ` accumulator[current]` represents the property of the object. First time, it yields to undefined but since orred (||ed)with 0 gives 0 when is added to 1 and becomes `accumulator['1'] = 1;` The first property happened to be 1, it could be anything. When it returned, a key and its value was returned in an object. The next time if the same key is repeated that is '1' it will yield to 1 because it has already come and added to 1 becomes 2,thus updating its value and so on. When we look at the code , it looks as if we are dealing with array object but it is not the array object but it is the object whose property is being added by using the index operator []. Since the code `accumulator.current` is not sufficient to evaluate the current variable `accumulator[current]` is used instead.
	 */
```

The same technique can be applied to other values as well

```javascript
	function maxNumber(accumulator,current,index,array) {
	accumulator[current] = (accumulator[current] || 0 ) + 1;
	//console.log(accumulator);
	return accumulator;
}
console.log([true,1,"abc",false,20,"bcd",false,"abc"].reduce(maxNumber,{}));
	//{ '1': 1, '20': 1, true: 2, abc: 2, false: 2, bcd: 1 }
```

If `reduce()` is not used then same result can be achieved using another call back function providing the accumulator object.
```javascript
var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
	function frequency(arr,acc){
	    arr.forEach(function(element){
	                // no need to use loop as it is called back on each element
	                acc[element] = (acc[element] || 0 ) + 1;
	  	});
	  return acc;
	}
	console.log(frequency(arr,{}));//
	// or
	function frequency(arr){
		var obj = {};
		arr.forEach(function(element){
			obj[element] = ( obj[element] || 0 ) + 1;
			});
			return obj;
	}
	console.log(frequency(arr))
```

To achieve the same result, call and apply functions can be used by providing the context object as an accumulator.
```javascript
var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
	function frequency(arr){
		var thisp = this;
		arr.forEach(function(element){
			thisp[element] = ( thisp[element] || 0 ) + 1;
			});
			return thisp;
	}
	console.log(frequency.call({},arr));
```

### Chaining methods

The following example shows how to apply two methods together to find out the highest odd number from the array.
```js
	var arr = [100, 9, 87, 456, 33, 45, 2, 3, 11, 22,87,33, 45];
	console.log(arr.filter(function(elements) {
			return (elements % 2 !== 0);
			}).reduce(function(prev, curr) {
				return Math.max(prev, curr);
		}));
		//87

```

[//]:# ( An example of defining function in array, use it somewhere to show the complexity))

```JavaScript
var arr =[function(x,y){return x+y;},{a:10,b:20}];console.log(arr[0](2,3));	console.log(arr[1]['a']);console.log(arr[0](arr[1]['a'],arr[1]['b']));
```

---


