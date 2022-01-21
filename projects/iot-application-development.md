---
layout: project
type: project
image: images/iot-gdb.png
title: IoT Application Developement
permalink: projects/iot-application-framework
# All dates must be YYYY-MM-DD format!
date: 2022-01-20
labels:
  - IoT
  - Node-RED
  - neo4j
summary: A framework for prototyping IoT Applications.
---

<img class="ui image" src="../images/iot-gdb.png">

During and after my graduate studies in the mechanical engineering program, I worked on distributed sensor and control systems in the context of smart grid applications, energy efficiency projects, and simple monitoring, dashboarding, and notification applications. Inspired by a IBM's [course on Node-RED](https://www.ibm.com/blogs/internet-of-things/coursera-iot/) at that time and personal interests in graph databases, our research group put together a little reference architecture for using these tools to develop IoT applications. 

We [published](http://hdl.handle.net/10125/50614) designs and results at the [51st Hawaii International Conference on System Sciences (HICSS-51)](https://scholarspace.manoa.hawaii.edu/handle/10125/49887). While other group members worked on the IoT devices that would publish data, my role revolved around everything on the server side, which included consuming and storing published data, graph database modeling, and web development. Eventually some of this work resulted evolved into my [MS thesis project](https://scholarspace.manoa.hawaii.edu/bitstream/10125/62538/2018-08-ms-smidt.pdf).

While I believe that Node-RED continues to be a great tool for rapid prototyping and development, I wouldn't recommend using the proposed framework for any production-level IoT applications with hundreds of devices and more. Other product offerings, such as [AWS IoT Core](https://aws.amazon.com/iot-core/) are better suited for managing and deploying devices at that scale. Nonetheless, we effectively developed and deployed an [RFID-based attendee sign-in and tracking system](./projects/rfid-attendee-tracking) for the HICSS conference with the tools described int the the publication.
<hr>

Conference Paper: <a href="http://hdl.handle.net/10125/50614"><i class="large book icon "></i>http://hdl.handle.net/10125/50614</a>

