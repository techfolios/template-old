---
layout: project
type: project
image: images/addressbook-image.png
title: Address Book
permalink: projects/adress book
date: 2015
labels:
  - C++
summary: This is my project of making address book which was for ICS212.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/addressbook-image.png">
</div>

The ddress book is a project for ICS212 at the University of Hawaii at Manoa.  This project is done by C++.  This address book contains the functions of adding a new contact, modifying a contact, printing a contact or all contacts, deleting a contact, and reversing all contacts.  The information that each contact gather is its full name, address, the year of birth, and telephone number.  If users modify and there are two or more contacts that have the same name, this program modifies all of them.  It is the same thing for deleting.  There is a feedback for the each step and it confirms the users what they are doing.

I did this project by myself.  I used a linked list for this address book and for keeping all the records.  I had an addrecord function, a printrecord function, a printall function, a modifyrecord function, deleterecord function and deleteall function.  Additionally, there were readfile and writefile function so that all the records would write on a file.  The records will keep in the file so that even the users quit the program and start again, they can continue from wherever they finished last time.

What I learned from this project was how the address book on my phone or laptop actually worked.  For this assignment, I was not assigned to consider preventing functions not to work on contacts that had the same names.  However, there are tons of additional functions in order for the address book in the phone to work as it is.  Also, this was the first approach to readfile and writefile functions.  This could use for different projects that need to write on text, save it, and can continue working from there again by reading the text.

You can find the code for this project from [GitHub](https://github.com/minakod/ICS).

