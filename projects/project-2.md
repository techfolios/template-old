---
layout: project
type: project
image: images/vacay-square.png
title: Infinite Monkey Theorem
permalink: projects/imt
# All dates must be YYYY-MM-DD format!
date: 2018-11-01
labels:
  - Java
  - Discrete Mathematics
  - Probability
summary: Implimented the Infinite Monkey Theorem in Java.
---

<img class="ui medium right floated rounded image" src="../images/vacay-home-page.png">

This small side project stemmed from pure curiousity. During my time being involved in ICS 141 (Discrete Mathematics for Computer Science), I gained familiarity with the concept of sets. Sets are a big part of discrete math, and there are many different insights one can gain from observing and working with their properites. 

In 141, we learned about the probability, for example the probability of a certain event occuring with particular conditions. Related to this, we learned about strings, and how many different strings can be formed using a certain set of characters (for example the set containing the alphabet, or set containing numbers). 

Before taking ICS 141, I had come across this idea known as "the Infinite Monkey Theorem". It is the idea that if a monkey sat at a keyboard and typed random keys (since a monkey cannot read letters), eventually the monkey will have typed some kind of readible English, perhaps a basic sentence. Given enough time (up to infinity), the monkey will have typed everything that has ever been known, even complex works such as Shakespeare. 

However, the math behind this actually shows that typing certain works, like a chapter book, is extremely unlikely, to the point where it would take millions upon millions of times the universe's existance to actually accomplish. For example, say we used the set of alphabetical letters as well as the space character (26 + 1 = 27). The chance to type "dog" would be 1 out of (27 * 27 * 27). Or, simplified, a 1 in 19683 chance of occuring. The more characters you require, the more that this number shrinks absurdly low. 

After being exposed to ICS 141 and ICS 211, I decided to try and code this idea in Java, to see if I print anything legible using random characters. To my delight, I managed to create a simple program that simulated this concept. The three elements behind this project were the set of alphabetical characters (including space), an int to count how many characters I've ran through, and a timer.

Here is the code:

 
Source: <a href="https://github.com/theVacay/vacay"><i class="large github icon"></i>theVacay/vacay</a>
