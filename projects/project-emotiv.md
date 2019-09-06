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

The goal of this project was to find an effective way to use this brain controller interface technology called [Emotiv Epoc+](https://www.emotiv.com/) for the benefit of the user. This technology is still quite new and not many advancements have been made to find out the full extent of the devices capabilties.

<hr>

<pre>

The motivation behind this project was to explore the capabilities of the Emotiv Epoc+ for futre ambient lab use. We would develop a test case for controlling a robotic arm mostly unassisted. The goal of this was to aim at helping those with movement disabilties. Other ideas were to explore its capabilities as a gaming device.

For this project, I was the lead programmer who was resposible for getting the Emotiv headset to communicate with the arm. To do this I used the existing prebuilt libraries for the Emotiv Epoc to gather motion data and send commands via serial to Arduino. I then programmed the Arduino to interpret commands and adjust the servos in the Braccio arm accordingly with specific head movements. The final design had 12 mappable commands to control the servos using two buttons and four head commands.

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
</pre>

<hr>
Source: <a href="https://github.com/japhet-ye/EE396"><i class="large github icon "></i>emotiv/ee-396-text-project</a>


