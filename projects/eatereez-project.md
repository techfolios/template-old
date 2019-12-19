---
layout: project
type: project
image: images/logo.png
title: Eatereez Website
permalink: projects/Eatereez-project
# All dates must be YYYY-MM-DD format!
date: 2019-12-18
labels:
  - Software Engineering
  - Website Development
  - Team Project
  
summary: Developed innovative website for finding local eateries 
---

<img class="ui image" size="big" src="{{ site.baseurl }}/images/eatereez.png">

## The better way to choose a restaurant

When the time comes to decide what to eat, the convention has traditionally been to discuss the type of restaurant.  For example, a common choice would be between Italian, Chinese, or Mexican.  Yelp and other websites have that covered.  However, that method has disadvantages.  What if the Italian place doesn't have gluten-free options?  What if the Mexican place doesn't have vegan options?  Nobody wants to go to a restaurant just to find that there's nothing on the menu they want.  As time becomes increasingly precious and people have more particular dietary needs, we wanted to make it easy to find a place nearby where you can find something just for you.  The website I and my team have developed will provide nearby options for everyone's palate.  With <a href="http://eatereez.meteorapp.com/#/">Eatereez</a>, developed specifically for the University of Hawaii campus at Manoa, students can have the expected conveniences of Yelp with the added benefits of meeting their dietary restrictions and being customized for their locale.  Let me show a few parts of this project I was able to contribute.

## Getting hungry?

First, we have the Food Finder page:

<img class="ui image" size="big" src="{{ site.baseurl }}/images/list.png">

As you can see, not only can the restaurants be sorted by type of food (e.g. Chinese, Sandwich) but also by dietary restrictions.  The prototype includes vegan and vegetarian options, but the ultimate version would include others as determined to be the most common, such as gluten-free options.  Displaying basic info in a list, this page provides links for each restaurant which will provide more information.

## Attention to details

Next is the Restaurant Details page:

<img class="ui image" size="big" src="{{ site.baseurl }}/images/details.png">

This page shows relevant information about the chosen eatery.  While not reinventing the wheel, it does allow logged in users to submit reviews which will be immediately posted, and the restaurant rating will be updated upon refresh.  It also allows them to delete their own review, or to flag others which may be inappropriate.  While many sites require approval before posting reviews, users would be using their student email addresses and thus will be accountable for their word choices.

## Allowing community input helps everyone

Finally, we have the Submit a Restaurant page:

<img class="ui image" size="big" src="{{ site.baseurl }}/images/submit.png">

An additional perk of our website allows users to easily contribute to the website by submitting local eateries not already included in the database.  This is especially important for this area as food trucks come and go.  By allowing this, we can ensure that we have every food joint around the campus.

## The beginning of something more

Working on this project was very challenging, and I learned a lot about overcoming obstacles, debugging code, and solving seemingly inexplicable puzzles.  If you would like to see more, the depository is hosted on <a href="https://github.com/nutrition-positions/eatereez">Github</a>.  While this is just a prototype, there are further options we would like to implement should we continue this project.  For example, ultimately we'd like to include the option to simply choose the dish that the user craves.  This way the restaurants would be filtered by the dish desired.  Personally this is the biggest drawback to Yelp for me.  Fortunately, as I learn to not only code but utilize software engineering to plan and execute projects, I can improve upon software when I see gaps or flaws.  This is just one more step towards making programs that make a difference, and allow me to realize my vision to make more efficient and user-friendly apps.
