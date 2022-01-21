---
layout: project
type: project
image: images/hicss-square.png
title: HICSS Conference Management System
permalink: projects/hicss-cms
# All dates must be YYYY-MM-DD format!
date: 2022-01-20
labels:
  - HICSS
  - Web Development
summary: A paper submission and review system for the HICSS conference.
---

<img class="ui centered large image" src="../images/hicss-header.png">

As part of my continued work for [HICSS](https://hicss.hawaii.edu), I work on the design and development of our own conference management system. Some requirements of the system are as follow: 

**System Functionalities**
* double-blind review process:
    * paper submissions, resubmissions, and final submissions
    * paper reviewing
    * reviewer assignments
* virtual conference features:
    * upload of presentations and 
    * scheduling of synchronous virtual meetings
* conference registration

**User Roles**

The different roles that a user can have are:
* author
* reviewer
* chair (conference, track, or minitrack)
* conference organizer
* attendee

**Conference Phases**

As submissions begin April and the conference takes place in January, there are various phases during which the various roles can see and do different things. This includes phases such as:
* initial submission / resubmission / final submission
* review assignment
* reviews
* decision making
* conference phase
* and others

I've developed the system using the [Phoenix framework](https://www.phoenixframework.org), a relational Postgres DB, and S3 for file storage. As the sole developer, I maintain the code in a private Gitlab repo. The application is hosted on AWS using mainly [AWS Fargate](https://aws.amazon.com/fargate/), [AWS RDS](https://aws.amazon.com/rds/postgresql/), [AWS S3](https://aws.amazon.com/s3), and [AWS SES](https://aws.amazon.com/ses/).

I'm currently looking into porting to a Typescript-based tech stack that keeps the relational DB as is, but makes use of [React]([React](https://reactjs.org)) for frontend matters and [hasura.io](https://hasura.io) for providing a GraphQL API. While it's been a lot of fun learning the Phoenix framework, a major drawback is that it's simply lesser known, which can causes problems when trying to find other contributors for the project. 

<hr>

Link: <a href="https://hicss-submissions.org"><i class="large upload icon "></i>HICSS Conference System</a>

