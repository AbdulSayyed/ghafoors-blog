---
date: "2016-04-17"
draft: false
title: "History of JavaScript"
categories:
  - "Programming Languages"
description: "A detailed overview of JavaScript's history and development."
tags:
  - "JavaScript"
  - "History"
series:
  - "js"
images:
  - "path/to/your/image.jpg"
---



[//]:# ( the original date was 2016-04-17)

## Early Web

When the World Wide Web was first created in the early 1990s. Web pages used to  be static there was no animation and there was no way you can interact with the pages.

Thus, programmer started  thinking of Being able to interact with  web pages and  have it do something in response to some  actions. The answer was simple to send a request to a server and get the work done. But this is not what was required it was already present . The idea was that the browser should complete the task locally without making a request to a server.

## Web Browsers

At the time, there were two browsers that were reasonably popular. Netscape Navigator and Internet Explorer. Netscape was the first to bring out a programming language that would allow web pages to become interactive. 

They called it Live script and it was integrated into the browser. What it means was that the browser would interpret the commands directly without requiring the code to be compiled and without requiring a plug-in to be able to run it.

I have intentionally used the word plug-in because at the same time when this effort was going on  another language called Java introduced a concept of an applet. So that applet can  run as a plug-in to the web page and  interact with the user in a more or less same way as other application on the desktop does.

## LiveScript to JavaScript { quick and bad decision }

But here we are not going to talk about Java language. Coming back to our topic of  a Live script. It was just a scripting language that needed a host environment such as a web page so that it can run within that host. Netscape realized the popularity of Java language and changed the name of their scripting language from Live Script to JavaScript. And since then this confusion started that Java and JavaScript both have something to do with each other.

## Envious Microsoft { Almost copied JavaScript and named it JScript}

Microsoft also introduced vb Script which was based on BASIC programming language but envied with the popularity of JavaScript they also introduced a local version of JavaScript called JScript. 

## Standardization

In 1996, JavaScript was presented to International Standard body called ECMA. Since then ECMA became the responsible for the subsequent development of  ECMAScript . It should be noted that it is not a JavaScript but ECMAScript that is being  further developed  but its trading as a JavaScript.

It is worthwhile to note and understand that a body such as ECMA does not write any language. It only defines what a proposed language should do. 
It is the implementer who is responsible to fully implement the specification in its program also known  as JavaScript engine.

Before we start talking about JavaScript engines, first look at the history of Standard JavaScript. That is since it was published by ECMA standard body. The very first edition of standardized JavaScript was published in June 1997, known as **ECMA-262**. Following is a list of the ECMA-262 subsequent edition to date.

 . *ECMA-262-first edition published in 1997*
 . *ECMA-262-second edition published in 1998*
 . *ECMA-262-third edition published in 1999*
 . *ECMA-262-fifth edition published in 2009*
 . *ECMA-262-5.1 edition published in 2011*
 . *ECMA-262-sixth edition published in 2015.*

## Clever Move by Microsoft

The latest edition is the sixth edition also known as ECMAScript-6 released in June 2015. To date, not a single platform exist that fully implements ECMAScript-6 with an exception of Microsoft Typescript Language which claims to implement ECMAScript 6th edition. But it has its own reasons. In this latest edition, it is a first time that a computer's high-level language concepts such as classes , block scope and much more , are  specified and thus implemented by Microsoft. 

Microsoft has been the pioneer in implementing because programmer coming from its main language C# Sharp background does not have to spend time learning the traditional JavaScript good and bad parts. They only have to learn typescript, write programs as they are written like in Java or C#, transpile them into JavaScript code and run it where JavaScript code is expected. So the current wave is to use, transpilers, linters , module systems and so on.

## The big change

Coming back to the history of JavaScript, the biggest edition of standardized JavaScript was the third edition published in 1999. According to its creator Brenden Eich **"The things which we take as granted like nested function, regular expression, switch statements  were not present before. so this edition was a big one."**

As you can see that,  in above list of specification  ES-4 is not present because  it never happened. Though it did exist yet never came into being due to many conflicts. in fact after ECMA-262 3rd edition came the fifth edition where **strict mode** was introduced. { but it does not mean, the things which were part of ES-4 were abandoned. They are still coming slowly with newer version of ECMAScripts}

## Host Environment

Specification of any language is important but without the implementation it serves no purpose. Since JavaScript is a scripting language that requires a host environment or a program to run it. The hosting program has to provide all the facilities specified in latest specification. but it does not happen overnight. Presently, we have browsers who acts as JavaScript host , but not all browsers may implement everything that is present in all specifications. 

In this brief history, it is not possible to talk about all the stuff supported or not supported  by which platform as it would take the whole day and it would not finish. If you ever wondered to find out more about what is supported by what you can visit this [site](http://kangax.github.io/compat-table/es6/)

By now you should  have some idea about  this scripting language and its host environment. By far the most popular host environments are web browsers. But with the popularity of Node js. It has also become the most used host environment on computers without the need of any browsers.

## Engines drives it

Before we finish this topic, let's look at some popular JavaScript engines, the word engine was probably used instead of a program, because of its core functionality. It is this program which runs the JavaScript code when it sees it in the host environment.

The first engine was created by the  JavaScript author Brendan Eich at Netscape Communications for Netscape Navigator, this engine is now an ECMA-262 edition-3 compliant that is, it conforms to the standard of ECMA-262 third edition. The code name for this engine was and still is Spider Monkey written in C++. 

Another engine written by Norris Boyd is called Rhino implemented in Java language. The most popular one these days is known as V8 from Google which excelled the performance when compared to Mozilla's engine  Trace Monkey and others. It is also used in Node js and gradually providing support for ECMAScript 6. Another popular used by apple in safari browser is a WebKit. Since who uses what may change with time thus, it is best to find out about them by searching the net.

The above is not by far a complete history of JavaScript Language but merely an introduction to this language. In computer technologies, things change by leaps and bounds and within next ten years time , there will be a lot of changes but at least for a decade or two JavaScript will be treated as an assembly language of the web as agreed by many.

## What is in ES-6

ECAMScript-6 introduced main awaiting features such as immutable variables using `const` , block scoped variables and functions through `let`, arrow functions `=>`, classes making object-oriented programming easier, symbols for debugging , generators, typed arrays and much more for internationalization and localization.

## Beyond ES-6

As the technology grows our need will grow as well, and programmers will be requiring new ideas to be specified and then implemented. To date, there are already many proposed features for ES-7 and beyond. As mentioned above proposing new ideas , agreeing with them  and specifying is not all. The practical aspect is to see if it is implemented or not in the host environment. At the moment, there is a huge gap in specification and implementation. Hopefully,  this gap will be narrowing down as the technology progress in right direction.

## what is coming





