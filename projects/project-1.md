---
layout: project
type: project
image: 
title: Viva Lingua
permalink: 
# All dates must be YYYY-MM-DD format!
date: 2015-07-01
labels:

---

Overview: VivaLingua is a language crowdsourcing app. In this app you are able to create posts about a variety of endangered languages from all around the world to help revitalize them. You can also create a user profile, view your own posts, and view posts from other users uniquely from a specified language.

The Team:
Shaiah Wren: https://github.com/ShaiahWren
Primary Team Role: PostgreSQL, Back-end & Front-end Development and Lead Syling/Design.
Dylan Cooper: https://github.com/Dcooper15
Primary Team Role: PostgreSQL, Back-end & Front-end development.
Aliyah Gamble: https://github.com/AGamble7
Primary Team Role: Scrum Master, Back-end Development, and Styling.
Annemarie Thomas: https://github.com/Athomas9sa
Primary Team Role: Back-end Development, Debugging, and Design.

Technologies Used: HTML5, CSS, JavaScript, Node.js, Express, PostgreSQL

Here is some code that illustrates how we solved a big challenge for this project to get the correct data to pull from our database and display dynamically on our various pages. We solved this problem by using a variety of SQL statements such as INNER JOINS, LEFT JOINS, and RIGHT JOINS to link our data tables properly.:

```js
static async getDynLang(language) {
        try {
            const response = await db.any(`SELECT * FROM posts LEFT JOIN users ON posts.user_id = users.id INNER JOIN languages ON posts.language = languages.id WHERE language = ${language};`)
            return response;
        } catch(error) {
            console.error("DYN LANG ERROR: ", error.message);
            return error.message;
        }
    }

    }
 

You can learn more at the (http://https://github.com/Athomas9sa/Viva_Lingua).



