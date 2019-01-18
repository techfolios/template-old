---
layout: project
type: project
image: images/micromouse.jpg
title: Sha1-Encryption
permalink: projects/micromouse
# All dates must be YYYY-MM-DD format!
date: 2015-07-01
labels:
  - Robotics
  - Arduino
  - C++
summary: My team developed a robotic mouse that won first place in the 2015 UH Micromouse competition.
---

<div class="">
  <img class="ui image" src="../images/cyberlogo.png">
</div>

Sha1 hash generator is one of the algorithms used by the United States National Security Agency to encrypt strings into hash codes. It is these kinds of algorithms that are needed in the world of Computers to protect users of their privacy, passwords, and programs owned by others. The Sha1 has code generator takes in a string and produes a 160-bit hash value specific to the string being sent in by using a number of different formulas that seem to another non-computer user randomizing the values within the string.

<div class="ui large rounded images">
  <img class="ui image" src="../images/encryption.jpg">
</div>


In my ICS 212 Class, we had a final project that was to recreate the Sha1 hash code generator in c++. This project was by far the most difficult assignment i had to do throughout my ICS eductation. The project needed the user to learn and traverse through the algorithm in order to create it. The most important lesson this project has taught me is to take breaks. As this project covers a lot of formulas and can take hours of coding to finish. Taking breaks refreshes my mind when proking on projects and assignments and allows me to think clearly about the task at hand. 

Here are the different functions that i had to use to create finish this project.

```js
unsigned int readFile(unsigned char[]);
unsigned int calculateBlocks(unsigned int);
void convertCharArrayToIntArray(unsigned char[], unsigned int[], unsigned int);
void addBitCountToLastBlock(unsigned int[], unsigned int, unsigned int);
void computeMessageDigest(unsigned int[], unsigned int);
unsigned int circleLeftShift(unsigned int, unsigned int);
unsigned int f(unsigned int, unsigned int, unsigned int, unsigned int);
unsigned int k(unsigned int);
```

You can learn more at the [SHA-1 WIKIPEDIA LINK](https://en.wikipedia.org/wiki/SHA-1).



