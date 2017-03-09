---
layout: essay
type: essay
title: "Meteor Gotchas"
date: 2017-03-09
labels:
  - Software Engineering
  - Meteor
---

## Since I have only been using Meteor web application development, I am still trying to get down the structure of how the framwork works. One of the problems I ran into was form submitting. For the digits 3, when I input the correct data for the collections for the contacts data in the home page, nothing happened when I clicked submit. There were no no error, no submission on the submit call. I think the reason is that no events were bound because the submit wasn't detected. If this is the case I suspect adding a console.warn() may be useful so the developer knows something is missing. But it could be something else entirely. Then I looked online for some answers and users on github forums suggested to turn on debug (SimpleSchema.debug = true in client code). The required field was not included on the form and the validation errors would cause submission to stop before onSubmit and before the update call.

## Another problem newbie problem I ran into was earlier wih digits 2 was importing .js and .html into the correct index.html file. After some reading, I found out that if template files are in an imports/ subdirectory they don't get automatically compiled and placed on the Template namespace. This would allow to build packages that are built with a bunch of templates but only export one of them. 
