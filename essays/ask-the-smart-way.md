---
layout: essay
type: essay
title: Asking the Smart Way
# All dates must be YYYY-MM-DD format!
date: 2021-09-09
labels:
  - Questions
  - Answers
  - StackOverflow
---

<img class="ui medium right floated image" src="../images/dumbq2.jpeg">

## The Trouble with Questions

I've always had trouble asking questions when I needed help. Most of the time, I end up figuring out the solution to my problem on my own, which does waste a lot of time. Despite hearing every single professor say, "Ask questions because there's no such thing as a stupid question," I find it difficult when I ask a question but get an answer that I can't quite understand myself.

There are definitely stupid questions, and along with that, usually unhelpful answers.

## Difference Between Smart and Stupid Questions

Stack Overflow, a question and answer site for programmers, is a great resource for anyone who may have issues with code or who may simply want to learn new or different methods of doing something. There I found examples of good questions and bad questions, which could probably be improved.

In the following example, we examine the components of a decent question. In this case, the asker is trying to figure out a way to get the date of the previous month in Python.

```
Q: How do I find all files containing specific text on Linux?

I'm trying to find a way to scan my entire Linux system for all files containing a specific string of text. Just to clarify, I'm looking for text within the file, not in the file name.

When I was looking up how to do this, I came across this solution twice:
  find / -type f -exec grep -H 'text-to-find-here' {} \;

However, it doesn't work. It seems to display every single file in the system.

Is this close to the proper way to do it? If not, how should I? This ability to find text strings in files would be extraordinarily useful for some programming projects I'm doing.
```

While the heading of his question could be better, it does convey what he’s trying to figure out. Usually something as brief as “python date of previous month” is what other users would enter in as search terms on Google, making it easily found. Another good thing about the question is that it’s not just a question. The asker shows what he or she has done and that he or she has put in some effort to answer the question. And while it may not be as important as the question itself, the asker shows courtesy, which does increase the chance of getting an answer.

```
A: datetime and the datetime.timedelta classes are your friend.

1. find today
2. use that to find the first day of this month.
3. use timedelta to backup a single day, to the last day of the previous month.
4. print the YYYYMM string you're looking for.

Like this:

 >>> import datetime
 >>> today = datetime.date.today()
 >>> first = datetime.date(day=1, month=today.month, year=today.year)
 >>> lastMonth = first - datetime.timedelta(days=1)
 >>> print lastMonth.strftime("%Y%m")
 201202
 >>>

```
 
The asker received six possible answers, and he or she was successful in inciting discussion from multiple users. The answers themselves were clear and were devoid of the rumored sarcasm and hostility of “hackers.” Since I myself have referenced this page and found it useful, I can confidently say that it is a good question.

## The foolproof way to get ignored.

While there are decent questions that benefit everyone, there are those one can ask to create an entirely different effect. In the following example, a user asks how he would, in short, create a desktop application with Facebook.

```
Q: Binary Tree Height

I need a general formula to calculate the minimum height of the binary tree and the maximum height of the binary tree. (not the binary search tree)
```

A simple “yes” would have answered the question, but we know that’s not the sort of answer he or she is looking for. Fortunately, someone kindly responded with a link to Facebook’s developer website. The asker should have done more research on his or her potential project. Then further down the road, he or she could have asked more specific and detailed questions that wouldn’t require a thousand-paged response for a sufficient answer.

## Conclusion

When we rely on others’ generosity and expertise to provide answers to our questions, it should hold that the question we ask should be one that leads to efficient and effective help that not only benefits us, but also the people we ask and others who might ask the same question in the future. Thus, if you have a question… make it a smart one! Asking questions may not always get you the best answer, but asking them in a way that will make others want to answer them will increase the success of finding a good solution and make it a positive experience on all sides.
