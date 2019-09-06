---
layout: project
type: project
image: images/database.png
title: Database
permalink: projects/database
# All dates must be YYYY-MM-DD format!
date: 2018-11-18
labels:
  - C++
  - ICS 212
  - Database
summary: A database that stores the account number, name, and adress of a person, created in ICS 212.
---

<img class="ui medium right floated rounded image" src="../images/writefile.png">

For ICS 212, I created a database in C++ that stores the name, account number, and adress of a person. Records are added by account number in ascending order. The program is able to print information for a given account number, and also has the ability to print the entire database. Accounts are also able to be deleted. Once the program is exited, the function writefile is called which writes to a text file the information that is in the database. When the program is started up again, the readfile is called which then reads the text file and adds the information to the database.
 
<img class="ui medium right floated rounded image" src="../images/print.png">
