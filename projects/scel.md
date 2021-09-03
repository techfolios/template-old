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

Our role as the Firmware team is to help the hardware teams troubleshoot issues with their boards and to maintain and improve code and algorithms.

<img class="ui image" src="{{ site.baseurl }}/images/firmware.png">

As seen in the image above, the weatherbox is where the firmware code is uploaded. The data is then transmitted between the different sensors and the microcontroller. The firmware encodes the data and sends it through the onboard XBee router to the XBee coordinator located in the lab. From there, the data is decoded on the gateway and saved into CSV files. These files are stored in the database through the Postgres protocol and can then be pulled by dashboard and forecasting teams. The dashboard team will gather the data and upload it to the front end so that users can access it, while the forecasting team can use the data to create statistical models in order to predict meteorological trends.
