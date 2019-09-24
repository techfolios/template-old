---
layout: essay
type: essay
title: Reflections on Javascript Coding Standards
# All dates must be YYYY-MM-DD format!
date: 2019-09-23
labels:
  - Javascript
  - Coding standards
---

## What are coding standards
Coding standards are rules or guidelines that a programmer follows when writing code. This can be a certain style that is to be followed (e.g. curly brackets are on their own line, no whitespace at the end of a line, etc), or refraining from using certain operators or statements (e.g. not using break, a for loop, etc.). They are largely used to keep code as standard as possible throughout a file which has many implicit benefits that are not entirely obvious at first. In the following few paragraphs I'm going to discuss those benefits alongside my own thoughts on coding standards as a whole.

## Why coding standards
Coding standards first and foremost keeps code uniform and documented. Being easy to read allows for quicker understanding

I believe that coding standards are very important for practical, long term use of a program. It stops code from looking like garbage and gives a semblance of order to the whole thing. Being nice to look at isn't the only reason to stick to coding standards. A lot of the time, specific functions and operations are off limits as they make the code overly complicated for the user. A lot of these make sense to me, like not using GOTOs, others do not, like using while loops instead of for loops. I understand using functional programming with Underscore instead of a for loop as its much more compact and easy to read.
It also encourages certain habits that are very useful, like only using soft tabs, and removing unneccesary whitespace. That being said, I find some parts of some coding standards a little odd. One of those things are brackets being on their own line. It stretches things out way to far out vertically, and is the antithesis of the look of functional programming which I like. 
For the Intellij IDE, achieving a green check mark is not hard at all to get, as I am being told the issues in real time. Fixing small things as they come is easier than doing a mountain of edits at once. The only issue is that sometimes seemingly random things keep popping up that
