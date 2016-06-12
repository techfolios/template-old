---
layout: essay
type: essay
published: true
title: Five tips for bootstrapping a research software development team
date: 2014-09-29
labels:
  - Research process
---
A junior faculty member emailed me recently with the following question:


*Do you have any advice on best practices for training students who are new to programming, and at the same time building a usable product? I do a lot of programming myself, but I’ve usually run as a solo operator, and I haven’t used any formal methodology — I just get an idea of the problem and gradually build up and test the pieces needed to solve it. But this project is well beyond the students’ current skill level, and we also need a way to coordinate work by a number of students. So I’m thinking I should use some (semi-?)formalized approach to break the work down into manageable pieces.*

After a few minutes of scribbling, I had listed almost 20 practices employed by my research group, which is way too many to implement all at once.  So here are my top five recommendations for bootstrapping a student and research-oriented software development team.

**1. Use git and GitHub.**

For team-based development of software of any complexity (and, by definition, research software is complex), version control is a fundamental requirement.  I’ve tried all the major version control systems and cloud-based hosting over the years, and I believe the best choice at present is git and GitHub. While I prefer development in the open, educational accounts are provided with 5 free private repos, so you can develop in stealth mode if you must.  While git and GitHub have a learning curve, I recommend you suffer through it; you will almost certainly have a net positive return on investment.

**2. Two meetings a week (Mon-Thu or Tue-Fri).**

The simplest way to increase development velocity by 50% is to have two meetings a week, not one.  With weekly meetings, students will typically wait at least three days before beginning work on their tasks. With two weekly meetings, they will only wait a day or so before starting work. Two meetings a week also forces you as project manager to break the work down into significantly smaller pieces, which helps everything.   If a team member can’t get to the meeting occasionally, skype meetings or google hangouts can work well.  If a student doesn’t want to meet twice a week (for whatever reason), then maybe they aren’t committed enough to be an effective member of the team. Note that it is very easy for a student to be a net negative on a project.

**3. Enforce coding standards.**

Creating high quality code is something you will struggle with indefinitely.   For bootstrapping, the quality assurance technique with the most bang for the buck is to enforce a coding standard.   To do this, you must specify a standard as well as a tool to find violations.  For Python, try PyLint. For Java, try Checkstyle.  For Ruby, try Rubocop.  A coding standard will catch some basic bad practices and by providing a consistent look-and-feel, will make the code significantly more maintainable and readable over time. And, it adds almost no overhead to development.

**4. Write tests.**

The reason to require beginning programmers to write tests is not to verify that the code works (that is typically beyond their skill level), but rather that it helps students to: (1) write APIs to allow testing, which will significantly improve the design, (2) generate executable documentation on how the code works, and (3) feel more confident about making changes, as tests will often catch regressions.

**5. Eat your own dogfood.**

None of the above bootstrapping tips will work well unless you are actively involved in development, writing your share of code, and practicing all of the above yourself.  If you lead by example, if you take on your own share of programming tasks at each meeting, you will help them better when they run into problems, you will be more sympathetic when they run into problems, and you will also naturally start to refine and extend these practices.