---
layout: project
type: project
image: images/roombrah.png
title: ICS 111 Roombrah
permalink: projects/roombrah
# All dates must be YYYY-MM-DD format!
date: 2017-11-05
labels:
  - Java
  - Eclipse
  - Object collision
summary: A 2D game where a roombrah bounces around a room and picks up dirt.
---

## **ROOMBRAH**

Roombrah is a project I worked on in ICS 111 where you have a roomba bounce around a room and collect dirt as it passes over it. The game completes once the roomba collects all the dirt. The project was made in java with the help of the resource package ez.java. Here is a [Youtube Link](https://youtu.be/R8NAsBJUOyI) that shows the program in action. This was my second coding project and helped teach me about collisions and synchronizing sound with the collisions. It also helped me learn simple map design and development. 

Here is an example of the code for the roombrah movement:

    public class Roombrah {
	    EZImage img;
	    int posx;
	    int posy;

	    Roombrah(String file_name, int x, int y) {
		    img = EZ.addImage(file_name, x, y);
	    }

	    int getx() {
		    return img.getXCenter();
	    }

	    int gety() {
		    return img.getYCenter();
	    }

	    void move(int posx, int posy) {
		    img.translateTo(posx, posy);
	    }
    }
    
Source Code: <a href="https://github.com/trey-sumida/roombrah"><i class="large github icon "></i>trey-sumida/roombrah</a>

