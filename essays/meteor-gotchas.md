---
layout: essay
type: essay
title: Meteor Gotchas
date: 2017-01-20
labels:
	- Software Engineering
	- Learning
---

# Meteor Gotchas
<br>
Meteor is something that I am slowly beginning to like. Slowly. Like learning anything new, there are ups and downs when learning something new and in the case of Metoer, if something goes wrong, my app will crash immediately. On one hand, we are fortunate enough to be using IntelliJ to write all our files for our app. IntelliJ is something I'm also starting to like (although it took a month for me to decide this). One of the best features on IntelliJ is telling us what problem can arise in our code, which helps when I'm crunched for time trying to find out what is wrong. On the other hand, because we are dealing with so many files, it's sometimes hard for us to find something that we may have misspelled. In this essay, I will be talking about two problems that I've personally faced while working with Meteor. 

## The First Problem

Like I mentioned before, it's sometimes hard for us to find a problem when it's not necessarily a coding problem but rather a misspelling error. However, one small, missplaced letter or missplaced command can cause your entire app to crash and I've found that out during the Digits 2 excercise. In the Digits 2 excercise, we were tasked with adding a "add contact" page and an "edit contact" page. This excercise looked so easy that I tried to do the add contact section all at once without looking at my app and, of course, when I finally went to load the page, the page kept crashing. Luckily, ESLint was able to tell me where I had my problem, which happened to be on my add contact html page. The error I got was "Element form not closed". Of course, this was around 11:00 at night, so when I looked at my code, everything seemed alright to me. 

```
<template name="Edit_Contact_Page">
	<div style="margin-top: 20px" class="ui container">
		<form class="ui form">
			<h4 class="ui dividing header">Edit Contact</h4>
			<div class="field">
				<label>Name</label>
				<div class="two fields">
					<div class="field">
						<input type="text" name="first-name" placeholder="First Name">
					</div>
					<div class="field">
						<input type="text" name="last-name" placeholder="Last Name">
					</div>
				</div>
			</div>
			<div class="field">
				<label>Address</label>
				<div class="field">
					<div class="field">
						<input type="text" name="address" placeholder="Address">
					</div>
				</div>
			</div>
			<div class="field">
				<label>Telephone/Email</label>
				<div class="two fields">
					<div class="field">
						<input type="text" name="telephone" placeholder="XXX-XXX-XXXX">
					</div>
					<div class="field">
						<input type="text" name="email" placeholder="foo@bar.com">
					</div>
				</div>
			</div>
			<button class="ui button" type="submit">Submit</button>
			</div>
		</form>
</template>

```
I spend about half an hour trying to figure out why my code wasn't working, but I just couldn't see it, so I decided to sleep on it and hopefully I would be able to figure it out in the morning. Of course, within five minutes of looking at it in the morning, I was able to clearly see my problem and felt incredibly blind. I had but the closing tag for my first div before the closing tag of the form tag, which was really supposed to go after the form closing tag. 

```
<template name="Edit_Contact_Page">
	<div style="margin-top: 20px" class="ui container">
		<form class="ui form">
			<h4 class="ui dividing header">Edit Contact</h4>
			<div class="field">
				<label>Name</label>
				<div class="two fields">
					<div class="field">
						<input type="text" name="first-name" placeholder="First Name">
					</div>
					<div class="field">
						<input type="text" name="last-name" placeholder="Last Name">
					</div>
				</div>
			</div>
			<div class="field">
				<label>Address</label>
				<div class="field">
					<div class="field">
						<input type="text" name="address" placeholder="Address">
					</div>
				</div>
			</div>
			<div class="field">
				<label>Telephone/Email</label>
				<div class="two fields">
					<div class="field">
						<input type="text" name="telephone" placeholder="XXX-XXX-XXXX">
					</div>
					<div class="field">
						<input type="text" name="email" placeholder="foo@bar.com">
					</div>
				</div>
			</div>
			<button class="ui button" type="submit">Submit</button>
		</form>
	</div>
</template>

```

Thus, once I fixed this "small" error, I was able to get my page working again. I was so happy, but at the same time, it was really irritating to me since I know that I had been looking at my code for half an hour just for this small mistake. I think what threw me off was that the error said it was missing, not missplaced or something like that, so I was set on finding out which tag did not have a closing tag rather than a missplaced tag. 

## Problem Two

Of course, I can't just only have one problem working with metoer. My second problem stemmed from my lack of attention to detail however. It was a small mistake where I put an s where it wasn't supposed to be. 
