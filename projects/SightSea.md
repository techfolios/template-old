---
layout: project
type: project
published: false
image: images/wait_state_project_cover.PNG
title: SightSea
permalink: projects/sightsea
# All dates must be YYYY-MM-DD format!
date: 2021-11-20
labels:
  - Expo
  - IoS
  - Android
  - Web
  - Firebase Realtime
summary: HMAR sighting and reporting application for HACC.
---

## The Team

For this project there was a group of 5 of us including myself who came together to work on it.

* [Jake](https://jimanaka.github.io/)
* [Tsz](https://github.com/Queendy38)
* [Justin](https://justinhwong.github.io/)
* [Clyde](https://github.com/cjfelixx)

## Sea Something - Report It!

This application was designed for Hawaii Marine Animal Response, a non-profit group that deploys volunteers to animals in distress. The goal is to allow the general-public to help out with the reporting of sightings of Hawaii's native seals, birds, and turtles. Prior to our application the only way for HMAR to get information was for people to call into the hotline number which took up a lot of volunteer time. Not to mention can be difficult to hear the person calling with the sea noise in the background. Enter SightSea!

SightSea was designed to allow anyone from either the IoS or and Google Play Store to download an application fill out the form and get the information to HMAR. Utilizing GPS data, if allowed, or getting the GPS data from a dropdown list to allow for more accurate reporting, as the location was deemed most important. There was also a web application that was built, primarily, to allow the dispatchers and administrators at HMAR to manage the incoming reports. 

Building an IoS, Andriod, and Web Application in 30 days was an ambititous goal with its fair share of headaches. 

## Cross Platform High and Lows

To prevent the group from doing three seperate projects with seperate deployments, levels of polish, and levels of functionality. We decided to build a cross-platform application. This allowed us to build in one repo, and build out to the correct test enviroments to check/test/verify functionality. To do this we used Expo. Expo was great for this task, however, building a cross-platform application ended up being much more challenging task than we thought it was going to be.

For example, we wanted to use Google Maps to display GPS coordinates that are captured from the Form page. This was a nightmare the plauged us until the very last day of deployment for technical, as well as for the presentation. The issue is that the npm package that allows you to use Google Maps API on mobile doesn't work for the web and the package that works on Web doesn't work on Mobile. This made bug fixing and testing the maps section very challenging. As the errors that were displayed on Expo were literally nothing. It was radio silence, well and a blank screen with any page that had the maps enabled.

Another issue was package versions. Expo is great in that you get to build to and test any of the platforms, but because of this flexability there are specific versions of the packages that are supported. For example react-native-maps @0.62 is accepted and works fine. However, the newest package, which is grabbed automatically via ```npm install react-natives-maps``` is @0.63 and is not supported. Which causes issues such as the map pins no longer allowing the color to be set and throws warnings with ```react-natvie-web``` as it deprecated in that version.

All in all, without Expo we would not have had an Ios, Andriod, and Web Application to deploy and share. We as a team vastly under-estimated the amount of work that needs to go into the simplest things such as npm package version integration.

## Excel Spreadsheets are *Not* Databases

If the heading of this section makes you say "well duh" then thank you. For everyone else please read it again until it is internalized. No seriously.

With HMAR being a non-profit I can understand, and sympathize because of non-profit I am a part of, why they need/want a low to no cost solution. Excel certainly fits this bill. However, it made my contribution a bit more complicated. My task for this project was to create the Staff Page. Additionally I was make the form page accept the correct information. Making sure to include all the required and optional columns that were present in the spreadsheet for that animal. This made the form page quite long and cumbersome as while there are columns that are certainly the same many for not. For example the "How Identified?" column is only on the Seal page, and not on the others, while the "Island" column was only on the Turtle page etc.

This also further complicated the validation of information that was entered into the form. For columns that had specific accepted values, a dropdown was created to prevent incorrect data from being entered. Typed input selections where unfortuately not verified as there was not enough time 









<div style="text-align: center">
<img src="../images/homepage.PNG" alt = 'waitState homepage'> 
 </div>


If want to know more please see this [readme](https://github.com/WaitState/WaitState#readme) that goes into a bit more depth.




If this made you interested please take a look at the source [code](https://github.com/WaitState).
