---
layout: essay
type: essay
title: "Meteor Gotchas"
date: 2017-03-09
labels:
  - Software Engineering
  - Meteor
---

	# Impression of Meteor#
	Meteor is a very awesome tool to build website. In my ICS 314 class, we required to build some basic website using Meteor. when I start using Meteor, I feel like this is not what i can handle. it just
too hard and too complicated, every WODs( work of the day) I had to watch the solution that our professor did, and then I try to solve it by myself. Even though I watched the solution once, I still don't 
know why we need to do that to make it work, I just follow the solution from my professor.

	# Feel more comfortable#
	However, after two weeks I feel more comfortable using Meteor. For now, I can at least try to solve some subproblems before I watch the solution. During the WOD, I found out a problem which make my
code doesnt work. we need to build a simple website to add some contact in the database, and for some reasons my submit button doesn't work. However, I realized one of my teammate had this problem too, and
he found out the way to fix it. This is the code:  ```ruby<div class="ui submit button">Submit</div>``` , this code doesn't work because I think this actully not a button class, it just a regular class. so 
instead of using that code, we need to change to ```rudy<button class="ui submit button">Submit</button>```.
