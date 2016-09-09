---
layout: essay
type: essay
title: Smart Questions
date: 2016-09-08
labels:
  - Stack Overflow
  - Communication
  - Problem Solving
---

<img class="ui medium right floated rounded image" src="../images/red_question_man.jpg">
<h2>Intro</h2>
I found the essay on asking smart questions to be quite helpful.
I tend to hesitate before asking questions, because I do not want to appear stupid and I enjoy finding out answers on my own.
However if finding an answer proves to be too difficult, it helps to try to consult others for solutions.
<br /><br />


<h2>Smart Question</h2>
```
Question title: "Enforce utf8 encoding in call from node to Java"
Question body: "I am making a call from a node middle-tier to a Java backend and passing a string as a query param. Everything works great until non-English alphabet character are used (ex: ř,ý). When Java receives these characters it throws:

parse exception: org.eclipse.jetty.util.Utf8Appendable$NotUtf8Exception: Not valid UTF8!

This call works perfectly:

GET http://localhost:8000/server/name?name=smith

This call fails with the above error:

GET http://localhost:8000/server/name?name=sořovský

My question involves where to address this issue. I have found this utf8 encoder for node and was thinking about encoding my strings as utf8 before calling my Java layer in the future. Is that the correct approach or should I be doing something within Java?

Note, this is what my relevant request headers look like:

{
  ...
  accept: 'application/json, text/plain, */*',
  'accept-encoding': 'gzip, deflate, sdch',
  'accept-language': 'en-US,en;q=0.8,el;q=0.6',
  ...
}"
```

This question demonstrates properties of "smartness" through giving a specific example where the problem occurs. The asker also demonstrates that they have taken steps
to solve the problem on their own, by mentioning using an encoder they found as a possible solution. They then still ask for advice to make sure this is a proper solution.
They also start by mentioning the problem they have instead of skipping straight to a method of solving the problem with a specific tool. That allows the responders to 
give their own solutions to the problem rather than be forced to use a certain solution.

By keeping the content of their question fairly concise, the asker further increases the usefulness of their question. Cluttering a question with useless information only
makes it harder for someone to go through and understand the question.



<h2>Bad Question</h2>
```
Question title: "Where can I host my Node.js app, must be on a UK server".
Question body: "My Node.js app requires logging in to a service, the service is strict and requests must come from the UK. 
Does anyone know where I can host my Node.js app. I found Evennode and liked it but its not based in the UK."

This question has some attributes of "smartness" but in many ways still falls short. Minor grammar errors like using "its" instead of it's give an air of carelessness.
The overall tone of the question gives an air of laziness as well, as if the asker has only done the bare minimum amount of research. If they had mentioned ways they
had researched, that would give more credence to having to ask a question on stack exchange. The essay on smart questions reiterates that the hackers who answer questions
value their time just like other people. By putting in due diligence to try to figure a problem before asking for help, an asker gains significantly more respect (and likeliness of their
question being answered, possibly even figuring out an answer on their own!).

The question also seems to be not quite on topic, since it was asked on Stack Overflow, which is more geared towards questions about writing and debugging code 
rather than where that code can be hosted. It might have been a better option for a more networking and hosting based section of Stack Exchange.
```

<h2>Summary</h2>
Overall, by going over the essay on asking smart questions and analyzing questions on Stack Exchange, I feel more prepared to ask effective questions.
I like the emphasis on testing solutions that place less demand on others like googling problems and answers and reading related manuals.
Providing concise context like code snippets should help.
I also found the advice about writing one's own steps in troubleshooting and debugging to be helpful. The fact that it demonstrates personal initiative on the asker's part
and helps the asker gain the respect of other users shows how important the human and social aspects of this problem solving method are.
I want to continue to hone my communication and writing skills; if I can figure out ways to better summarize my problems and not clutter my questions with 
irrelevant or excessive information, I should be able to receive more effective answers.
