---
layout: project
type: project
image: images/asteroid.png
title: Asteroid Survival
permalink: projects/asteroidsurvival
# All dates must be YYYY-MM-DD format!
date: 2020-04-06
labels:
  - Object-oriented programming
  - C++
summary: My team developed a Asteroid Survival game in C++. This project was the capstone of our EE205 class, making use of what we learned throughout the semester on object-oriented programming into creating this final project.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/micromouse-robot.png">
  <img class="ui image" src="../images/micromouse-robot-2.jpg">
  <img class="ui image" src="../images/micromouse.jpg">
  <img class="ui image" src="../images/micromouse-circuit.png">
</div>

The objective of our game is to shoot asteroids while avoiding any collisions. In order to win the game, you must face the final boss and destroy it.

In this project, I was in charge of creating the bullets that the player would fire as well as the Big Boss that would show up in the final round.


Here is some code that illustrates how we read values from the line sensors:

```js
byte ADCRead(byte ch)
{
    word value;
    ADC1SC1 = ch;
    while (ADC1SC1_COCO != 1)
    {   // wait until ADC conversion is completed   
    }
    return ADC1RL;  // lower 8-bit value out of 10-bit data from the ADC
}
```

You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).



