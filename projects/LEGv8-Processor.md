---
layout: project
type: project
image: images/intel.jpeg
title: 16-bit Single-Cycle LEGv8 Processor
permalink: projects/legv8processor
# All dates must be YYYY-MM-DD format!
date: 2020-12-11
labels:
  - SystemVerilog
  - LEGv8
  - Assembly Language
summary: Worked on implementing a 16-bit Single-Cycle LEGv8 Processor in SystemVerilog, while learning about computer architecture and circuit design.
---

This project was an implementation of a simplified five-stage pipeline processor. It went over the implementation of CPU instructions and handling data and control hazards in the pipeline. 

We were able to implement the five-staged pipeline computer. From the addition of the three new instructions: ADD, SUBI, and CBZ. We also saw the effect of using NOPs in the code to avoid data and control hazards. In addition to using NOPs to deal with hazards, we were able to implement the use of stalling which is a hardware insertion of NOPs to handle these hazards. After this lab, we were able to see how the five-stage pipeline works since we implemented the instructions into the CPU as well as the introduction of NOPs in hardware. In implementing the pipeline, we practiced the use of inserting NOPs in the program, as well as the hardware insertion of NOPs using stalls that we learned about in lecture. Although we weren’t able to implement the final test bench that handled both control and data hazards, we have an idea of how this testbench should be achieved, and it can later be implemented in the future.

Through this project, we were able to gain a better understanding of how the pipeline works by implementing the instructions and writing code to deal with the possible hazards that can occur in the pipeline by using NOPs both in the program and in the CPU.
