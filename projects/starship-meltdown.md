---
layout: project
type: project
image: images/cplusplus.png
title: Starship Meltdown
permalink: projects/starship-meltdown
# All dates must be YYYY-MM-DD format!
date: 2020-05-08
labels:
- C++
- Object-Oriented Programming
summary: As a final project for EE 205, my group created a game called Starship Meltdown.
---

In the spring of 2020, after going into lockdown due COVID-19, Starship Meltdown was created. Starship Meltdown was a game created by me and my partners Joseph Roberts and Jason Enojardo; it's written in the C++ programming language, using the SFML library and was the culmination of our first time experimenting with object-oriented programming. The game itself is quite simple, it's a 2d game where the user controls a spaceship or "Starship" and tries to dodge or shoot asteroids of many different sizes that approach the ship at many different speeds. For every asteroid you destroy, points are added to you score and if you get hit by an asteroid you lose health and if you lose enough health, you lose one out of your three lives. Once you hit a hit a certain a score, a boss is summoned that fire moves from left to right at the top of the screen and fires a big beam that can damage you; at that point the goal is to defeat the boss before it kills you.

Although the game was simple, there were just so many aspects to that game that I didn't even think of until we were testing it and we realized that there were things that were happening that weren't supposed to be happening. Things like resetting the position and speeds of the asteroids after one "wave" of asteroids pass or resetting the position of the ship after losing a life or my personal favorite, making sure the asteroid resets instantly after hitting you instead of "hitting" you 15 million times because you forgot to do collision detection for the asteroid. But besides all that this was a fun project to work on and I hope I can do more in the future.

Code for collision detection between the ship and asteroids:
```
//drawing the asteroids and adding collision conditions
	for(int i = 0; i < ass.size(); i++){
		ass[i].sendAsteroid();

		if(Collision::PixelPerfectTest(ass[i].getSprite(), star_ship.getSprite())){
			sfx.boom(); //plays explosion if player takes damage
			star_ship.TakingDamage(10); //loss of health if player collides with asteroid
			if(star_ship.getHealth() <= 0){ //losing lives if statement
				star_ship.LosingLife();
				star_ship.setHealth();
				playerHUD.updateHealth(star_ship.getHealth());
				playerHUD.updateLives(star_ship.getLives());
				star_ship.reset();	
			}	
			
			window.draw(ass[i].getExplodedAsteroid());
			ass[i].reset();
			hitbyAsteroid++;
		}
		window.draw(ass[i].getSprite());
	}
```

I wish I could include the GitHub repository, but we made it private and I'm no the original owner of the repository :(
