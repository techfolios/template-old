---
layout: project
type: project
image: images/bci_headset.PNG
title: Brain Controller Interface
permalink: projects/bci
# All dates must be YYYY-MM-DD format!
date: 2019-04-01
labels:
  - Arduino
  - C#
  - Braccio Arm
  - Brain controller interface
summary: My team programmed a robotic arm and brain controller interface to interact with each other.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/bci_arduino.PNG">
  <img class="ui image" src="../images/bci_arm.PNG">
</div>

The motivation behind this project was to

For this project, I was the lead programmer who was responsible for programming the various capabilities of the mouse.  I started by programming the basics, such as sensor polling and motor actuation using interrupts.  From there, I then programmed the basic PD controls for the motors of the mouse.  The PD control the drive so that the mouse would stay centered while traversing the maze and keep the mouse driving straight.  I also programmed basic algorithms used to solve the maze such as a right wall hugger and a left wall hugger algorithm.  From there I worked on a flood-fill algorithm to help the mouse track where it is in the maze, and to map the route it takes.  We finished with the fastest mouse who finished the maze within our college.

Here is some code that illustrates how send data from the emotiv controller to the arm:

```C#
if ((float)motionData[7] > 8300f)
{
    Console.WriteLine("Moving up");
    port.WriteLine("#UPPP\n");
}
if ((float)motionData[7] > 8175f)
{
    Console.WriteLine("Moving down");
    port.WriteLine("#DOWN\n");
}
if ((float)motionData[8] > 8320f)
{
    Console.WriteLine("Moving left");
    port.WriteLine("#LEFT\n");
}
if ((float)motionData[8] > 8100f)
{
    Console.WriteLine("Moving right");
    port.WriteLine("#RITE\n");
}
```

Source: <a href="https://github.com/japhet-ye/EE396"><i class="large github icon "></i>emotiv/ee-396-text-project</a>


