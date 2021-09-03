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

The objective of our game is to shoot asteroids while avoiding any collisions. In order to win the game, you must face the final boss and destroy it.

<div class="ui embed" data-source="youtube" data-id="hd2LzxeinUQ" >
</div>

In this project, I was in charge of creating the asteroids that the player would fire at as well as the Big Boss that would show up in the final round. The asteroids had three different sizes, the larger the asteroid, the more shots it took to destroy it. In order to create the asteroid, we needed to spawn it so I made use of a vector to create them and it would spawn from every side of the screen. To make the game more difficult, as more asteroids were destroyed, the speed would increase. For the final boss that the player had to face, it moved slowly from the top of the screen. An HP bar was also displayed and slowly decreased as the player shot at the boss. When you face the final boss and completely kill it, the game has been won.

