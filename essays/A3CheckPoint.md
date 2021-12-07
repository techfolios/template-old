---
layout: essay
type: essay
title: Assignment 3 Check Point by Krizel T and Maggie M
date: 2021-11-18
labels:
  - Assignment 3 Plan
---


Link to Slides: https://docs.google.com/presentation/d/10CWmHIczKkuuOpbtNRHYdvzyWOl4fdEDz2E_1Rwj_yw/edit?usp=sharing

Describe your design for your site’s shopping cart. That is, will it be a separate page that the user can view and edit, or will it be integrated into the product pages? If so, describe in detail how this will work on your site. Provide several examples of using the cart.
-------
For our shopping cart's design, we'll be making a separate page where the user can view and edit their order. There will also be a navigation bar tab on the display pages that shows the shopping cart’s quantities. Once they press checkout on the display pages, it will take them to the actual shopping cart page.

If the user isn’t logged in, when they try to add something to the cart,  the “add to cart” button will take them to the login page. Once they’re logged in, they can freely navigate through the site, while keeping their items in the shopping cart. Users cannot add anything to the cart without logging in first, therefore they won’t be able to reach the shopping cart or checkout page without being logged in. 

Once they are finished shopping on the display pages, they can click the “# in cart” button in the navigation bar that brings the user to the shopping cart page. There, they can view and edit their quantities ordered if they wish. They can also use the navigation bar to continue shopping or use the “checkout” button to go to the check out page. There on the checkout page, they will enter their payment information.



Explain specifically how you will use sessions to manage your shopping cart. In particular, what shopping cart data will be stored in the session, what data format will be used (NOT what data type, but the format like with the data format used for your registration data). Use code examples showing what data structures (such as arrays and their objects) you will use to manage the shopping cart data and how they will be used in a session.
-------

If the user is already logged in, once they add quantities into the shopping cart, it will save it in a cookie. That cookie is saved to the browser on the display.html page. Once they navigate to the shopping cart page from the display, the cookie will be sent, with their username, to the server where it will be stored in a session. That session will be used to feed the data into the shopping cart. 

We are saving the shopping cart information in a variable called cart:
var cart = request.session.cart;

We later reference it when bringing the cart quantity information to the shopping cart html page:

app.get('/checkout', function(request, response){
  if(typeof request.session.cart == 'undefined' || request.session.cart.length == 0){
    response.redirect('/shoppingcart.html?error= no products in cart');
  }
  response.redirect('/checkout.html');

});
This checks if there are any quantities ordered (saved and referenced by checking if the length of the cart variable is equal to 0).
We will later reference the session on the final invoice page. When we send the user the confirmation email, we will reference the order information that is stored in the session so they can view their receipt. Once they receive the confirmation email, their session will be deleted using sessions.destroy().


How will you avoid access to your application when the user has not logged in or registered? 
-------
We will use an if statement so when a user adds to the cart, if they are not logged in, they cannot add the item. Instead they will be redirected to the login page. If they are a first time customer, they will have to register. The only way to get to the shopping cart, check out or invoice confirmation pages is to go through the login page first. However, users who are not logged in or registered can still view the index, products_display.html and display.html pages. 

What are the particular security concerns you must address?
-------
We will be addressing security concerns regarding if the account is real and registered, password encryption, and not allowing users to access the shopping cart or invoice without logging in. If the user tries entering the URL for the invoice page, but is not already logged in, we will not allow it and the user will get a popup error message.
We also validate passwords in the login, to make sure they are correct. In the registration, we check if the password matches the minimum requirements and make the user enter the password twice to confirm. We also destroy the session after the invoice is emailed, to protect the user.

Upon a successful login, how do you provide personalization in your UI? Explain how you did or will do this (paste code if necessary).
-------
Once logged in, the user will be brought to the shopping cart where it will display “<user’s name>’s shopping cart. We will also personalize the check out page where the user enters their payment information. We will have text saying “ <user’s name> please enter your payment information below”. Also, on the invoice page, we will thank the user by name for ordering. 

If you are working with partners, how will you split up the work in your team so that you are working in parallel as effectively as possible? That is, who is doing what and when?
--------
Maggie will be working on mainly the sessions, the index, and login.
Krizel will be working on mainly the product pages, registration page, and .css.
We both will be working on the navigation bar, products.display, prototype, checkout.html, server, and invoice.html pages together. We assign each other individual tasks, and then we meet and update each other everyday. When we meet we troubleshoot, connect our individual parts together, and plan our next tasks. Everyday we update each other, and assign due dates for when a task needs to be done. For example, we finished the index.html and products_display.html, and worked on the navigation bar on Sunday. 

How are you approaching Assignment 3 differently than Assignment 2?
--------
We approached assignment three very differently than assignment two. We started a lot earlier and we made a schedule on when we will meet each day. We are working on the assignment for at least three hours a day until it is due. 
