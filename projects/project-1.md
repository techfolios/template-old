---
layout: project
type: project
image: 
title: Buffon's Regular Polygons
permalink:
# All dates must be YYYY-MM-DD format!
date: 2018-09-04
labels:
summary: I developed a program to simulate dropping a regular polygon on a striped background and calculated the probability of an arbitrary regular polygon landing on the boundary between two stripes.
---

In an unexpected union of my ICS 111 and MATH 244 final projects, I decided to focus on the famous Buffon's Needle Problem. Thus came the idea for, "Buffon's Regular Polygons." The objective was to calculate the probability that a regular n-gon, dropped, at random, on a striped floor, would intersect with the boundry of two stripes. To demonstrate my ability to implement a GUI in Java, I developed a program to simulate just such an experiment. In practice, the program would run the experiment whenever the frame was refreshed. To simulate a single drop, the program would generate a random point within a specified region, a random integer between 3 and 5 for the number of sides, and finally a random angle depending on this number. By changing a few variables within the program, one could set the width of each stripe, the minimum and maximum number of sides, the scale of the polygons, and the number of times the experiment was run per refresh. Finally, using what I had learned about multiple integrals in Calculus IV, I calculated the probability for the special case when the generalized diameter was less than the width of the stripes. After this, I gave an formal proof on the results and communicated my findings in a presentation.

Although, my work on Buffon's Regular Polygons did help to cement my understanding of GUIs in Java, I believe that my main takeaway from the project was learning how to write math. Since it was my first experience writing mathematics for an audience, I didn't know how important it was to write in complete sentences, instead of equations. Neither did I understand how best to organize my writing. I realize, now, that the goal of mathematical writing is to convince the reader as to the authenticity of a statement, not just to convince oneself. On top of being factually sound, mathematical writing must be grammatically correct, making it easy for the reader to understand precisely what one is trying to convey, and it must have a logical structure, subdividing difficult to parse concepts into easily digestible claims and propositions. After all, what is an idea worth if it cannot be communicated?
