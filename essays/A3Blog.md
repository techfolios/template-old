---
layout: essay
type: essay
title: "Assignment 3 Checkpoint Blog"
# All dates must be YYYY-MM-DD format!
date: 2020-12-03
labels:
  - Checkpoint Blog
  - Assignment 3
---

Checkpoint A:
Describe your design for your site's shopping cart. That is, will it be a separate page that the user can view and edit, or will it be integrated into the product pages? If so, describe in detail how this will work on your site. Provide several examples of using the cart. <br>
My shopping cart will allow users to remove or add quantities to the products they want to buy before going to the login, registration, or personalized invoice. It will be a separate page that the user can view and edit. Just as most my other pages load separated on the server (login, registration, invoice), I plan to do the same for my site's shopping cart. <br>

Checkpoint B:
Explain specifically how you will use sessions to manage your shopping cart. In particular, what shopping cart data will be stored in the session, what data format will be used (NOT what data type, but the format like with the data format used for your registration data). Use code examples showing what data structures (such as arrays and their keys) you will use to manage the shopping cart data and how they will beused in Session. <br>
I will be using session to ensure that my site can be used my multiple users logged in at the same time and also have an expiring time for how long users can be on the page for. This is important so that people don't overwrite each other's invoices and requests. I will hopefully be able to know what specific coding to utilize after we finish Lab15. <br>
An example of data structures I may use for arrays would be as follows: "session_start();
 $_SESSION['name_here'] = $_POST;" <br>

Checkpoint C:
How will you avoid access to your application when the user has not logged in or registered? What are the particular security concerns you must address? <br>
I will have to have code to prevent users from accessing the invoice when not logged in or registered. I will likely utilize what I completed in Assignment 2 to ensure this. A major concern I have as of now would be users overwriting each other's invoices and requests, so it is important that I use sessions and cookies along with expiration times to prevent this. <br>

Checkpoint D:
Upon a successful login, how do you provide personalization in your UI? Explain how you did or will do this (paste code if necessary): <br>
We can reference the username and have their name appear in the invoice to have personalization in the UI. I did this in Assignment 2 through the following code: <br>
"<span "id"=(result)>"</span> 
<script> { document.getElementById("result").innerHTML = localStorage.getItem("textvalue"); }' <br>
  <br>

Checkpoint E:
If you are working with partners, how will you split up the work in your team so that you are working in parallel as effectively as possible? That is, who is doing what and when? <br>
I will be doing this assignment by myself. <br>

Checkpoint F:
How are you approching Assigment 3 differently than Aassignment 2? <br>
I am approaching this Assignment 3 differently in that I hope to reach out for help and ask questions in class when I need help. I often try to figure things out my own by searching online, but that doesn't always prove helpful. I definitely want to continue starting ahead early so that I am not rushing to finish before the deadline. This assignment is very important, so I want to fix and understand any mistakes I made in the previous assignments so I do not make the same errors again.
 
