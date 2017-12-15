---
layout: essay
type: essay
title: "I'm coming like a Meteor"
date: 2017-10-26
labels:
  - Meteor
  - Web Application
---

<img style="margin-top: 20px" class="ui medium image centered" 
	src="/images/meteor.jpg">

	
# Meteor 

My first impression with Meteor was that it describes itself as a [Ultra Simple Environment](https://github.com/meteor/meteor) to develop web applications, and how it can help to rapidly develop a project because it can *accomplish what takes other 1000 lines in just 10 lines of codes* (I guess that's how it got its name). It's also has a built-in database called [MongoDB](https://docs.meteor.com/api/collections.html). 

The cool thing about MongoDB is that it can work in both client and server side, so it's really convenient to test and debug. Especially if you install the [Meteor DevTools](Meteor DevTools - Chrome Web Store) extension, you can easily trace almost everything within your apps (except for bugs. Yeah, how ironic!)

## What I like about Meteor


### Ultra Simple Environment
Meteor did not lie about its ability to help rapidly speed up the process of the app development. Since Meteor is a framework for Javascript (just like how [Semantic UI](https://semantic-ui.com) is a framework for HTML & CSS), it has its built-in functions that can simplify a whole process in just one line of code.

For example, to create a table with the name **Contacts** with MySQL in PHP, you would need something like this:
```
//createDB.php
...
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$sql = "CREATE TABLE Contacts (
...
```

Meanwhile, in Meteor, all you need is:
```
export const Contacts = new Mongo.Collection('Contacts');
```
### Instantly Update UI

Meteor has an interesting feature called **live-browser reloading** that will auto reload and update the client-side's UI every time there is something change on the server-side.

### Easy to Organize

In Meteor, every output is stored in a HTML tag called **Template**, and in the javascript file, every template has its own codes that are declared under its name. Therefore, it's easy to organize the files. For each template, there is a HTML and a javascript file, and to combine all the templates together, I just need to include them into the *index.js* file in the same directory. It's super convenient!

## What I hate about Meteor

### Too many rules

On my first Meteor project, there is a task that I need to make the table become *sortable*. At first, I thought this is easy, since with the Semantic UI already built-in, I only need to add some class to make the table sortable. However, it took me a whole day, and...a new screen...LOL JK, but seriously, it was so ridiculous that there was some point I would want to break something...physically.  I was able to implement the sortable class into the table. I was able to click on the table headers, but it didn't sort. 

The problem is to make the table become sortable, I need to find a place to put one line of **jQuery** into my code, and I had no idea where to put it. I searched through everything, and followed the old template to see how jQuery works in Meteor. I finally found a good place to put it. *Template.Name.onCreated(...)* And it finally become sortable...but when I refreshed the page, it stopped working!!!
It took me a disappointed amount of hours to figure out that in order for the jQuery code to work, I need to put it right after the page finish loading (after the app successfully subscribe to the collection).
<img style="margin-top: 20px" class="ui medium image centered" 
	src="/images/meteor.gif">


### Hard to debug

Meteor is a very nice framework. However, its debug is not helpful at all. It only gives me the error from the root files where I never even touch. That makes it very difficult to debug because I have no idea which files to look into.

## Conclusion

In my opinion, Meteor is a great JS Framework with many amazing features. However, people need to be careful when using it. Meteor can make complicated process become simple, but it can also make simple process become complicated if you don't know how to do it right. (My example about subscription above).