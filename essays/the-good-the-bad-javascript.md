---
layout: essay
type: essay
published: true
title: The good, the bad, javascript
date: 2019-6-09-06
labels:
  - Javascript
  - Learning
---

## **THE GOOD**
  Javascript is a great language for beginners as it is a very basic language. Variables are defined by let, const, or var rather than int, string, float, etc. Since javascript has this feature, it makes it easy for anyone to define a variable and perform actions upon it without having to worry about if they defined the variable correctly. 

## **THE BAD**
  Since javascript is such a basic language, a lot of the good aspects of it can be seen as bad to more advanced computer scientist. Since variables are defined by let, const, or var rather than a specific datatype, javascript will allow you to compare a string to an integer, even if that is not what you intended to do. For example, this code:
  
  let x = 5;
  let y = "Five";
  if (x == y)
  {
    console.log("5ive");
  }  
