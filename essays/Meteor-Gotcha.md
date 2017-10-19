---
layout: essay
type: essay
title: Meteor Gotchas
date: 2017-10-19
labels:
  - Software Engineering
  - Meteor
---

## Personal Issues

Meteor is a javascript web framework, that's widely used because its useful and simple. It is an interesting framework to use, there are many good aspects about it, but I do have some personal issues. One of the biggest problems that I've had is the runtime of meteor. The worst case scenario was having the program install a package that lasted about 40 minutes. I've tried updating my meteor in hopes that the meteor commands would run faster, yet to my avail, it didn't work. I wondered, perhaps my laptop just doesn't have the right specs. However, a friend of mine, with a brand new and powerful gaming computer, couldn't even finish the same meteor command that had taken me 40 minutes to run! 

Another problems that I've had is using meteor in the command terminal on Windows 10. When I change any instances of var to let, meteor fails to run the program. Luckily, this problem was easily fixed by running meteor in a bash terminal instead. Although, this gave me another problem. Originally, in the Windows terminal, I could easily stop meteor from running by pressing ctrl + C twice, but I couldn't do this in bash because ctrl + C simply exits you from the current terminal, leaving meteor to continue to run on a server. To fix this, I had to go back to my Windows terminal and run ```taskkill /im node.exe ``` that kills all currently running node.js servers. 

These issues do detract from the awesomeness that is meteor, but not by much because I know if I spend more time on it, these problems can be fixed somehow. 
