---
layout: project
type: project
image: images/projects/project-5/python-socket.jpg
title: Multithreading Parallel SQL Processing
permalink: projects/multithreading-parallel-sql-processing
date: 2018-03-30
labels:
  - Python
  - SQLite3
  - Multithreading
summary: In the Spring 2018 semester at UH Manoa, one of my projects is to design a multithreaded parallel sql processing program that can load as well as distribute data through multiple nodes in a cluster.
---

This is the first project that I experienced with Python and socket program. It was difficult at first since I have to learn everything from scratch on my own. However when I started to get a hang of it, things start to get a lot easier.

First of all, I learned that Python is a very powerful language with a lot of built-in modules and packages that I can install and use by using `python-pip`. In this project, my goal is to design a networking program that run on both client and server machines in a cluster.  I used an SQL package called **SQLite3** as the database engine. 

I designed this program so that it can read `csv` files as data files to load data into the database in the cluster server. It can also read `SQL` files as command to be executed in the cluster machines. If the clients send an SQL command, it will execute the command and then return the data to the client computer up on request. It returns either `success` or `failure` based on the status of the command. Also if the command is `SELECT`, the return data would also include the data requested.

Moreover, I wrote this program using multithreading, which makes the program runs faster the more the machines in the cluster.

By finishing this project, I gained experience on working on networking and database program with Python, which I hope will become helpful if one day I can work as a database management programmer.

You can find the code for this project here [<i class="github icon"/> Multithreading Parallel SQL Processing](https://github.com/jonathanMNg/Parallel-SQL-Processing-Supporting-Joins)