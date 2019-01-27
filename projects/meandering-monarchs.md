---
layout: project
type: project
image:
title: Meandering Monarchs
permalink: projects/meandering-monarchs
date: 2019-01-27
labels:
  - Javascript
  - Github
  - Latex
summary: An exploration of the Meandering Monarchs probability problem, including solutions in specific cases and a simulation.
---

A basic description of the meandering monarch problem is as follows: Given a board that is four tiles wide and four tiles tall and a chess piece, which falls uniformly and at random on the board. Find the probability that the chess piece lands on a given tile after n turns, if at the start of each turn the chess piece moves uniformly and at random to any of the adjacent tiles, and where adjacent may be defined differently for different chess pieces. For a solution in the case when chessPiece  = king, and chessPiece = queen please visit the following overleaf document: [solution](https://www.overleaf.com/read/pvtxkrgtwtcx). If you are interested in a simulation of the experiment, then please refer to this GitHub repository: [simulation](https://github.com/MorganStremick/meandering-monarchs). Just as a note, you can change the dimension of the board to be anything you want. You can even make it 3-dimensional, or 4. 
The inspiration for this problem came from an exercise in my probability textbook. In fact, the problem is identical in the case when chessPiece = king. What appealed to me about this problem is that the results coincide very nicely with our intuition. For example, you may expect the probability in the corners to be lower than the probability in the center, and indeed, you’d be right.
	While the solution draws from probability, of course, I was happy to be able to use some of my linear algebra experience as well. To calculate the eigenvalues required a short visit to Octave, which I became more familiar with in my numerical analysis course, and to simulate the experiment I used javascript, which is maybe not the best choice, but nevertheless gave me the chance to demonstrate my current understanding of the language and learn a bit more about prototypal inheritance. Lastly, I used Latex to summarize my findings, which came from writing lab reports in physics. In summary, while the project wasn’t expansive by any means, it allowed me to dip into a breadth of past experience, which was fun and also refreshing.
