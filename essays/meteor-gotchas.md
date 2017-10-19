---
layout: essay
type: essay
title: "Meteor Gotchas"
date: 2017-10-19
labels:
  - Software Engineering
  - Meteor
---
<div class="ui image">
  <img class="ui small image" src="http://docs.meteor.com/images/logo-coralspace-left.svg">
  
<h2>Learn From Your Mistakes</h2>
<br/>
Like every first-time doing something, there is always some problems that you encounter during the learning curve, and there is no better way to learn than solving your own problems. Fortunately, that's the way I learn. In other words, I always fail a lot whenever I try something new, and learning Meteor is not an exception.
<br />

<h2>Variable Twins</h2>
<br/>
First of all, the problem that I encountered with Meteor was variables. In Meteor, there are so many different files in many different directories. So it's not easy to use variables because if you call one wrong, it's hard to track the problem. Especially, if you use the same variable name, that even make it harder because you can easily get lost if the debugger does not point exactly the location of your errors. That's why when I name a variable in a Meteor project, I always try to be as creative as possible to come up with a new name for each variables to make it easier to track.
<br />

<h2>Meteor's Debugger? What's that?</h2>
<br/>
Second of all, Meteor's debugger is not really helpful. Like I mention above, "when the debugger does not point exactly the location of your errors", and in most cases it does not. So when you make a mistake, you are on your own to track down the problem. And in a Meteor project, there are so many files and directories to track that makes it almost impossible to find the root of your problem. So the only thing I could do to deal with this problem is whenever I work on a big file, or working on multiple files at the same time, I always do a backup of those files, or to make sure, a backup of the whole project before I make those changes, so whenever I get lost, I can always go back without screwing up everything.
