---
layout: essay
type: essay
title: Swipe Right on Coding Standards and ESLint?
# All dates must be YYYY-MM-DD format!
date: 2018-09-20
labels:
  - Coding Standards
  - ESLint
---

## Design Patterns Explained for Bridesmaids, Computer Nerds and everyone in between

### Bridesmaids and Computer Nerds?

Never did I imagine being 22 years old, finishing my last year of my Computer Science major and simultaneously planning my best friend’s ‘English Afternoon Tea party’ themed Bridal Shower. These two personas are the most polar opposite and mutually exclusive entities out there, yet somehow I have found myself applying the same lessons to both roles. What could planning a  ‘English Afternoon Tea party’ themed Bridal Shower have in common with software development? Actually— Design Patterns. 

### Design Patterns

Design patterns are template solutions to any recurring problem. It applies in any case where there is a problem repeats itself in many instances and where a general solution can be used and then modified to address the specifics of a said problem. I will explain this concept by describing two example design patterns, Singleton and Observer, with planning a bridal shower to explain the theory and my UH-Clubr web application group project to illustrate the implementation in software development. 

### Singleton

Singleton is defined as a class that addresses cases where only a single instance can exist. For my best friend’s bridal shower, as there is only one wedding, there is only one bridal shower. The class would represent all of the information involved in a bridal shower such as decorations, food, drinks, attendees, activities etc. Correspondingly the single instance of this class are the details for each of these entities that are specific to the bridal shower coming up in December. As my best friend, Andie, only plans on getting married once, we would only need one instance of this class and formatting the Bridal Shower class such that it suggests multiple marriages or instances of the class may undo my status in the bridal party. 

In turn, I also applied the Singleton design pattern while developing the code for the ‘UH-Clubr’ web application. In this group project, I was responsible for developing the backend database that would hold all of the clubs and their respective information. In order to implement this, I created the ‘Clubs’ collection which is the MongoDB database of all the clubs at UH Manoa. This is a case in which only one instance of the ‘Clubs’ collection exists in the web program and is similar to declaring a global variable.
