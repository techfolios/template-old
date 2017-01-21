---
layout: project
type: project
image: images/sudoku-web-t-2.png
title: Sudoku Solver
permalink: projects/Sudoku
date: 2016
labels:
  - C++
summary: This is my final project for my object oriented programming class and it is a Sudoku solver.
---

<div class="ui embed" data-source="vimeo" data-id="200444415" >
</div>

        Features:
        
  Solves 9x9, 16x16, 25x25 sudoku puzzles
  Takes in file name and determines size of grid
  Stores file information
  Solves puzzle using backtracking solving algorithm
  Displays progress and final solution

Method used Backtracking Algorithm:

• If there are no unassigned cells return true

• If the current cell is solved, solve next cell

• For digits from 1 to 9

• If there is no conflict for digit at row, column, or box assign digit to   cell and recursively try to fill in rest of grid

• If recursion successful, return true

• Otherwise remove digit and try another

• If all digits have been tried and nothing worked, return false

My contribution for this project is building the display, mutators and solving functions. The whole team contributed equally honestly because all the header files depends on one another. I had a lot of fun and learned a lot from this project.



You can learn more about the project [here](https://github.com/LamAnhProj/Sudoku).



