---
layout: essay
type: essay
title: Meteor, the Ultimate Landing Package
date: 2017-03-23
labels:
  - Meteor
  - Web - Application
---

## Meteor came along saving us all from archiac monstronsities of earlier millennium web designs

I'm interested in streamlining my ability to get things done by focusing on learning meteor. Knowing that Meteor seems focused on SPAs, I'd like to run my checklist of "other important things I need to be able to build" by you guys to see where I may be limiting myself (I'm prepared to learn other languages/frameworks including Node to fill the gaps, it would just slow me down at the moment).

Meteor is capable of doing all of those things, but, why would you use it for any of them?
If you want a static site, just write a static site. Or use Hugo.
Meteor can run node scripts in its back end, sure. Buy why not just run the scripts in node and skip building a whole website around it?
Meteor's back end can be made to respond as an API. But why not just write the API and skip building a while meteor site?

My main focus is time to production. If I can skip the learning curve of Node for a small performance decrease, that's an easy decision for me. I can learn Node later.
I think I'll dive into Meteor! I have some web scrapers on my list at the moment.  don't think Meteor will reduce the time your projects will take like you think it will. Part of the development process is to pick the right tool for the project. Like /u/RevMen said, Meteor can do all of the things you want in some way or another (it is just a Node application after all and can therefore use other Node packages) but it's not a good pick for any of them and it might even end up increasing development time because you'll have to figure out how to do things properly in Meteor. Edit to clarify: If there's a thing Meteor normally doesn't support out of the box you'll have to figure out how to coax Meteor into doing it anyway without breaking things.

 I think it's up to you really, if you want better encapsulation, then pass it down the tree, but it will mean that you will extra code passing it from component to component, rather that just referencing it directly when you need it, which could seem counter intuitive.
It's kind of anti-React to not pass the prop down, but is there any real point when it's always readily available. In many ways I would struggle to sleep if I didn't pass it down, but the trade off is that your code may be easier to debug, perhaps slightly more efficient, however if/when Meteor becomes an NPM package, it may be that the Meteor object is not globally available.