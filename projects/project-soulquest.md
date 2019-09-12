---
layout: project
type: project
image: images/soulquest_logo.PNG
title: SoulQuest
permalink: projects/soulquest
# All dates must be YYYY-MM-DD format!
date: 2018-04-12
labels:
  - C++
  - GitHub
summary: A text-based rpg dungeon crawler game I developed with a team for EE 205.
---

<img class="ui image" src="{{ site.baseurl }}/images/soulquest_play.PNG">

## About Me

SoulQuest is a fantasy text-based rpg dungeon crawler game I developed applying object oriented programming techniques learned in class and using Github to manage the code within the team. The inspiration of this game came from games like [Slay the Spire](https://en.wikipedia.org/wiki/Slay_the_Spire) and [Oregon Trail](https://en.wikipedia.org/wiki/The_Oregon_Trail_(series)).

## My Contributions

I created the entire display interface using a library called Ncurses. I also programmed the player sprites and classes as well as the weapons. I helped code part of the spells class and game engine. I fixed a lot of the problems that occurred when first running the game through debugging and tested the game many times to balance the game.

## Reflections

Overall this game took a lot of time and effort to develop. It was a huge learning experience because I never had a huge coding project like this up to this point. I also felt like I learned C++ proficiently as well as game development in general. Some things we learned as a team was how to code in union through GitHub and to split up work efficiently. We had many things we wanted to implement into the game but did not have enough time to do so. I would like to improve on this game in the future.

To give you an idea of what the game is like, here is the game overview:

<hr>
<pre>
Concepts Used
-Classes
-Inheritance
-Polymorphism
-Composition
-Vectors
-Getters/Setters
-Source control(Git)
-ncurses

Game Lore
-The Player’s wife died in a fire and tried to bring back her soul with a somewhat sketchy ritual
-The ritual is a trap and a demon has trapped you in its dungeon
-You must fight your way to the demon, defeat it, and reclaim your wife

Game Features
-A variety of ways to slay your enemies (i.e. weapon types and spells)
-A variety of enemies to fight (i.e. beasts, humans, and demons)
-Text-based HUD
-Random drops
-Random encounters

Elements and Weapon Triangle
-"Fire Emblem" Style Weapon Triangle
 :Sword Beats Axe
 :Axe Beats Spear
 :Spear beats Sword
-"Starter Pokemon" Element Triangle
-Horror enemies have a 20% chance of having a element
-It is possible to have both a weapon and element advantage/disadvantage
 :Fire Sword vs Nature Axe Wielder = 40% extra damage
-Any triangle advantage is 20%

Playable Classes
-Warrior
 :Utilizes weapon triangle
  ~Swords
  ~Axes
  ~Spears
 :Skills have no element damage
 :Heals through combat damage
-Mage
 :Uses a staff (Not part of weapon triangle)
 :3 Damage spells
  ~Fireball (Fire Element)
  ~Torrent (Water Element)
  ~Wrath (Nature Element)
 :Heal Spell
 
Display with Ncurses
-Generated a simple text-based HUD using the ncurses library
-Aiming for “Pokemon-eqsue” display
 :4 Options: Attack, Skills, Flee Quit
 :Highlight options with cursor
 
Enemies
-Different Tiers of enemies
 :Ranging from Wolves to Skeletons to Demons
 :Tiers will scale up with the player
 :Generates random mob from a tier
-Enemy properties:
 :HP
 :ATK
 :DEF
 :Elemental Type
 :Weapon Type
</pre>
<hr>

Source: <a href="https://github.com/nchu277/EE205"><i class="large github icon "></i>soulquest/ee-205-text-game</a>

