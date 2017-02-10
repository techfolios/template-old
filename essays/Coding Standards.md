---
layout: essay
type: essay
title: Coding Standards
date: 2017-02-09
labels:
- Software Engineering
- ESLint
- IntelliJ
---

<b>Configuration Management</b>

In the lesson by Philip Johnson on coding standards, he brings up several good points on the importance of coding standards, which include the following: 

<ul>
<li>Improved readability</li>
<li>Detect and remove generic coding mistakes</li>
</ul>

I, myself, believe that coding standards is very important because of the ease in reading code. One of the most important coding standards I hold myself to is the spacing. For example, let's look at the followig code:

<b>function</b> fibberoo (val1, val2) {<br/>
<pre>   </pre><b>let</b> fib = [];<br/>
<pre>   </pre>let</b> first = val1;<br/>
<pre>   </pre>let</b> second = val2;<br/>
<pre>   </pre>fib.<b>push</b>(first, second);<br/>
<pre>   </pre>for</b> (<b>let</b> i = 0, i < 100, i++){<br/>
<pre>   </pre><pre>   </pre>const</b> temp = first + second;<br/>
<pre>   </pre><pre>   </pre>fib.push(temp);<br/>
<pre>   </pre><pre>   </pre>first = second;<br/>
<pre>   </pre><pre>   </pre>second = temp;<br/>
<pre>   </pre>}<br/>
<pre>   </pre><b>return</b> fib;<br/>
}<br/>

This code is easy to read because of the spacing and alignment of the code. The spacing also allow us to find any mistakes easily. Without the spacing, the code would be very hard to read, thus hard for us to fix the code if there is a problem. The next example shows the above code, but without the correct spacing and with an error in it. 

<b>function</b> fibberoo (val1, val2) {<br/>
<b>let</b> fib = [];<br/>
<b>let</b> first = val1;<br/>
<b>let</b> second = val2;<br/>
fib.<b>push</b>(first, second);<br/>
<b>for</b> (<b>let</b> i = 0, i < 100, i++){<br/>
<b>const</b> temp = first + second;<br/>
fib.push(temp);<br/>
first = second;<br/>
second = temp;<br/>
<b>return</b> fib;<br/>
}<br/>

In the above example, the following code wouldn't have been able to compile due to a missing bracket. Was it hard to find the mistake in this code? This was just a minor problem, but if you have program that is 100+ lines, it would have been very difficult to find without the proper coding standards, which is more than just the spacing. 

For me, I was lucky to have had a great teacher when I started to learn how to program. My first computer science program was at the University of New Mexico and the teacher I had was very strict with how we organized our code and how we did it. For example, we were never allowed to use the tab button to put spaces. He was very specific and wanted us to have two spaces instead of the tab space. At first, I didn't understand the importance of doing things in that way. In fact, I hated it since I always managed to forget to do one thing or another. However, we eventually came to the point where we had to work with partners and read code from other people. During that time, I was greatful to see that my partner followed the coding standards of my teacher because when we came across a problem, it was easy to spot (although it wasn't always easy for us to fix). However, when we did the next project, my partner wasn't soo keen on following our teachers coding standard, which caused me a lot of headache when we had to trouble shoot a problem with our code. I ended up having to go over the entire program to input the proper coding standard and it turned out that we were missing a semi-colon. 

This brings me to using ESLint with IntelliJ. Since my first class, I've experienced several different programs that will compile my program or tell me where a problem is and what the problem is. This past week however, I feel that using ESLint is quite helpful, although it is bothersome at times. For example, I had written a program that had gotten a green check without ESLint enabed, however, when I enabled ESLint, I no longer had a green checkmark. In these instances, I get frustrated using ESLint. 