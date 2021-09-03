---
layout: project
type: project
image: images/scel.png
title: Smart Campus Energy Lab
permalink: projects/scel
# All dates must be YYYY-MM-DD format!
date: 2021-05-01
labels:
  - Arduino
  - GitHub
  - C/C++
summary: A Vertically Integrated Project team. It is a student led lab that creates weatherboxes which collect meteorological data aiding in UH Manoa's renewable energy goals.
---

In this project, I am a part of the Firmware team and our job is to maintain and improve the code and algroithms as well as help hardware teams troubleshoot the issues they face with their boards as they build weather boxes.

## Firmware Structure

<img class="ui image" src="{{ site.baseurl }}/images/firmware.png">

As seen in the image above, the weatherbox is where the firmware code is uploaded. The data is then transmitted between the different sensors and the microcontroller. The firmware encodes the data and sends it through the onboard XBee router to the XBee coordinator located in the lab. From there, the data is decoded on the gateway and saved into CSV files. These files are stored in the database through the Postgres protocol and can then be pulled by dashboard and forecasting teams. The dashboard team will gather the data and upload it to the front end so that users can access it, while the forecasting team can use the data to create statistical models in order to predict meteorological trends.

## Team Accomplishments

I joined SCEL last semester and our main focus was on assisting the hardware teams. We were able to build a functioning bare Apple board allowing the hardware team to troubleshoot it and solve problems that they may have faced in building their weatherbox. We also created a Firmware Handbook as we saw that new members that came in to our group would become familiar with what we have been doing throughout the course of the lab as well as some common problems and solutions. Lastly, we began research and testing of a sleep mode as well as a real time clock for the Guava weatherbox.
