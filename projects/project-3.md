---
layout: project
type: project
image: images/places.png
title: Check-In
permalink: projects/check-in
date: 2016
labels:
  - API
  - PHP
  - MYSQL
  - Javascript
summary: A GPS location based app for mobile devices that I developed in my ICS 321
---

Check-In is an app that simply identifies your location using , and save your location, timestamp, and place name (if available) into the database that you can view it later.

In this project, we used [Ionic Creator](http://blog.ionic.io/ionic-creator/) to create a template and user-interface for mobile devices. Also, in order to identify the location of the users, we used [Google Maps Geolocation API](https://developers.google.com/maps/documentation/geolocation/intro)
<hr>
```java
.service('GetPlaces', function($http){
    return {
        getPost: function(location, type, key) {
            var query = "?location="+location;
            query += "&key=" + key;
            query += "&type=" + type;
            query += "&rankby=distance";
            return $http.get("https://busa345.com/api/place/nearbysearch/"+query)
            .then(function (response) {
                return response.data;
            });
        }
    };
})
```
<hr>
In this project, I gained more experience about how to use tool such as **Ionic Creator** to create a web-based app with mobile friendly user-interface, and used available API like **Google Geolocation**. Also, we also had a chance to experience with **MySQL** to retrieve and store data from and into database. We also used **Javascript** to work with both server and client-sided programming.
<hr>

Source: Click [Here](https://nn4.ics321.com/places) to check it out!

