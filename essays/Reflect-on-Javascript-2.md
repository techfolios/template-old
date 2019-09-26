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
<img src="../images/xkcd-code_quality.png" height="420" width="690">*Me, showing my professional coder friend my first CS project ever*
## What are coding standards
Coding standards are rules or guidelines that a programmer follows when writing code. This can be a certain style that is to be followed (e.g. curly brackets are on their own line, no whitespace at the end of a line, etc), or refraining from using certain operators or statements (e.g. not using break, a for loop, etc.). They are largely used to keep code as standard as possible throughout a file which has many implicit benefits that are not entirely obvious at first. In the following few paragraphs I'm going to discuss those benefits alongside my own thoughts on coding standards as a whole.

## Why use coding standards
Coding standards first and foremost keeps code uniform and documented. Being easy to read allows for quicker understanding of the code, especially when well commented and consistent. This keeps turn around time for code shorter, as you don't have to dig through mountains of uncommented code that have nests inside nests. They also allow for the development of a particular coding style. If a standard bans a use of a certain operator or statement, it's most likely because if you have to use it, then there is a more concise way to do it. This is the theory anyway.

## How I feel about ESLint
ESLint is a neat program since it kind of auto checks our code so we don't have to go line by line, character by character searching for errors. However, I am noticing odd things with the style checker. It seems to not like functional programming at all, and it keeps throwing warnings at me whenever I return a function without a declared variable. This is distressing to me, as I find that delcaring a variable only to fill it with a value and return it is dumb. At that point you might as well just return the function. I do think it is pretty cool that you can run ESLint independently via the commandline, and have it logged right there with the specific locations of the errors. It is one of those things I feel should almost come standard with most IDEs or built into the language itself.

## Built in Coding Standards
I believe Python is a near perfect example of building a language around a coding style/philosophy. It is exemplified in the poem, [The Zen of Python](https://en.wikipedia.org/wiki/Zen_of_Python), which can be found as an easter egg by calling "import this". It is hard for newcomers to get used to the style of Python, which uses whitespace as a way to clarify code. Statements often whitespace in order to allow for clarity, which is why things like if statements do not require parentheses. Nested statements are also denoted purely by indenetation, which allows for forced readability since you cannot accidentally have something not indented. As you can probably tell, I like Python. It's easy to read, works well with parsing and spreadsheets, and shortens developer time as a whole. I attribute this to how it treats its "built in" style to increase readability and production speed.
