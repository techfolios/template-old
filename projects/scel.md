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

In this project, I am a part of the Firmware team and our job is to maintain and improve the code and algorithms as well as help hardware teams troubleshoot the issues they face with their boards as they build weather boxes.

## Firmware Structure

<img class="ui image" src="{{ site.baseurl }}/images/firmware.png">

As seen in the image above, the weatherbox is where the firmware code is uploaded. The data is transmitted between the different sensors and the microcontroller. The firmware also encodes the data and sends it through the onboard XBee router to the coordinator located in the lab. From there, the data is decoded on the gateway and saved into CSV files. These files are stored in the database through the Postgres protocol and can then be pulled by dashboard and forecasting teams. The dashboard team will gather the data and upload it to the front end so that users can access it, while the forecasting team can use the data to create statistical models in order to predict meteorological trends.

## Team Accomplishments

I joined SCEL last semester and the main focus of our team was on assisting the hardware teams. I was able to aid in the building of a functioning bare Apple board allowing the hardware team to troubleshoot it and solve problems that they may have faced in building their weatherbox. I also was a part of creating a Firmware Handbook. Our team felt that as members come and go a lot of the information is lost along the way so throughout the course of the lab I would take record of insstructions and information on a certain procedure, and also included some common problems our team faced and how we were able to solve it. Lastly, our team also began research and testing of a sleep mode as well as a real time clock for the Guava weatherbox.

This project taught me a lot about working as a group and having to come up with our own improvements and solutions in order to make the existing project and algorithm better. It also involved a lot of self-driven work and research, and to be honest at some points I did feel lost and stuck and felt like I needed to be given direction. I would say it felt a bit like a job as the professor doesn't set up everything for you or give you instructions on how to do it. Through this team I was able to learn a lot about the process of creating something from the research to the design, as well as having to plan out a timeline for your team on how and when we would get the job done.

You can learn more at the [Smart Campus Energy Lab](http://scel-hawaii.org/).
