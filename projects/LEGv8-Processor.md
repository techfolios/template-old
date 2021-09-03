---
layout: project
type: project
image: images/cpu.jpeg
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

In this project, my partner and I were able to implement the five-staged pipeline computer. In this project we implemented three new instructions: ADD, SUBI, and CBZ. We also saw the effect of using NOPs in the code to avoid data and control hazards. NOPs are basically an operation that does nothing. In addition to using NOPs, we implemented the use of stalling which is a hardware insertion of NOPs to handle these hazards.

Through this project, we were able to gain a better understanding of how the pipeline works by implementing the instructions and writing code to deal with the hazards that can occur in the pipeline by using NOPs both in the program and in the CPU.

Here is some code in SystemVerilog of the CBZ instruction that was implemented in the CPU controller:

```js
       opCBZ:
        begin
          ctl.regWrite=0;
          ctl.reg2loc=0;
          ctl.aluSrc=1;
          ctl.aluSel=aluPASSFromInput1;
          ctl.memRead=0;
          ctl.memWrite=0;
          ctl.mem2reg=0;
          ctl.branch=branchCB;
        end
```

One of the instruction we implemented is the CBZ instruction. CBZ is a conditional branch instruction that performs a branch if the register is equal to zero. The conditional branch is a test that determines what the next PC value will be. Thus, it requires three NOPs to handle control hazards compared to the two NOPs necessary for handling data hazards. We added the CBZ instruction in the controller of the CPU, setting the necessary inputs for each part of the controller.
