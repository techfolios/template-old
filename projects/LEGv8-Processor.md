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
<img class="ui image" src="{{ site.baseurl }}/images/legv8.png">

In this project, my partner and I were able to implement the five-staged pipeline computer. In this project, we implemented three new instructions: ADD, SUBI, and CBZ. We also saw the effect of using NOPs in the code to avoid data and control hazards. NOPs are an operation that does nothing and causes a delay in the pipeline. In addition to using NOPs, we implemented the use of stalling which is a hardware insertion of NOPs to handle these hazards.

There were a total of four test benches that we needed to get working. We mostly worked on the code together, but I mainly focused on the first and third testbench. In the first testbench, the ADD and SUBI instructions were implemented and the CBZ instruction was implemented in the third testbench. I was also in charge of using the NOPs to deal with control hazards that would occur from branching from one instruction to the other.

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

One of the instructions we implemented is the CBZ instruction. CBZ is a conditional branch instruction that performs a branch if the register is equal to zero. The conditional branch is a test that determines what the next PC value will be. Thus, it requires three NOPs to handle control hazards compared to the two NOPs necessary for handling data hazards. We added the CBZ instruction in the controller of the CPU, setting the necessary inputs for each part of the controller.

Through this project, I was able to gain a better understanding of how the pipeline works by implementing the new computer instructions and writing code to deal with the hazards that can occur in the pipeline by using NOPs both in the program and in the CPU. This is also one of the projects that developed my interest in how the hardware of a computer works.
