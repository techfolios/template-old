---
layout: project
type: project
image: images/projects/project-6/main.jpg
title: Hawaii Alert System
permalink: projects/hawaii-alert-system
date: 2018-05-03
labels:
  - JavaFX

summary: A Java app that designed to prevent mistakes like the false missiles alarm mistake that happened in Hawaii on Jan 13, 2018.
---

This is a group project for one of my Software Engineering II in Spring 2018 semester. The idea for the project is inspired by the false alarm that happened on Jan 13, 2018 about a nuclear missile that was fired from North Korea. The event that caused outrages all over Hawaii, and it all happens because this very confusing user interface. 
<div class="ui centered">
	<img class="ui centered medium image" src="/images/projects/project-6/hawaii-alert-ui.jpg"/>
</div>

Our goal was to create a more reliable system with a better user interface to prevent mistakes like that to happen again. For that purpose, our team decided to use JavaFX which is a Java platform for Java with GUI application. The app that we created include many features such as:

<div class="ui items">
  <div class="item">
    <div class="image">
      <img src="/images/projects/project-6/login.jpg">
    </div>
    <div class="content">
      <a class="header">User Authorization</a>
      <div class="meta">
        <span>Only users with authorization can access the app</span>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/projects/project-6/main.jpg">
    </div>
    <div class="content">
      <a class="header">Send Test or Real Alert</a>
      <div class="meta">
        <span>User can either send drill or real alert to notify others about the threat</span>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/projects/project-6/alert-confirm.jpg">
    </div>
    <div class="content">
      <a class="header">Type to Confirm</a>
      <div class="meta">
        <span>For the real alert, the user need to type in a capcha before the messages can be send. This step is to avoid misclicks</span>
      </div>
    </div>
  </div>
</div>

My contributions for this project are implementing the user authorization, design the UI for Main, Test, and Alert page, implement the FXLM and FXML controllers, so that each page can be control separately and to avoid spaghetti codes.

What I learned from this projects are how to create a GUI app using JavaFX, how to do app testing on users with very little knowledge about computers, and how to design the UI that's easy for the users, and to prevent mistakes and slips when the users are using the app.

You can checkout our code on [GitHub <i class="github icon"/>](https://github.com/ICS414-Team-1/hawaii-alert-fx)