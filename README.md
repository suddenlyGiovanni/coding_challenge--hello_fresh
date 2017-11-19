HelloFresh Dev Team - Front-end Developer Test
=============================================

Hello and thanks for taking the time to try out the Front-end Developer test.

The goal of this test is to assert your coding, UI, HTML and CSS skills (to some degree).

Feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result. Take as much time as you want on the test, please do over-engineer we would like to assess all your skills!

_Note: While we love open source here at HelloFresh, please do not create a public repo with your test in! This challenge is only shared with people interviewing, and for obvious reasons we'd like it to remain this way._

Instructions
------------

1. Clone this repo.
2. Create a new `dev` branch, or create a fork of this repo.
3. Write your code, in various commits so we can see your development timeline. We won't be looking at the time each task took you. We're much more interested in your train of thought!
4. When finished, create a Pull Request with set-up instructions and an explanation for your solution.
5. Reply to the thread your having with our HR department telling us that we may start reviewing your code.

Requirements
------------

- You *MUST* write your test with modern HTML and JS (ES6 or ES7, so no TypeScript, CoffeeScript or other superset languages)
- Your code *MUST* be in english (variable names, comments etc..)
- You *MAY* comment your code wherever you feel necessary
- You *SHOULD* use webpack
- You *MAY* design something nice, but you *COULD* also copy your designs from our [website](https://www.hellofresh.com/recipe-archive/collection/light)
- You *SHOULD NOT* use jQuery, Twitter's Bootstrap or any other CSS framework
- You *SHOULD* use a CSS preprocessor or postprocessor, when you use CSS
- You *COULD* use CSS-in-JS
- You *SHOULD* use some kind of server to serve your code, something like [http-server](https://github.com/indexzero/http-server) would do

Exercise
--------

In this test we will build a recipe review area.

It will contain two pages:

- [Login page](#login-page)
- [Recipe review page](#recipe-review-page)

#### Login page

Implement a login page with a form to login, it doesn't have to actually log you in or do any checks, but things like e-mail validation are appreciated!

#### Recipe overview page

This will show all the recipes that are attached.

The following should be true for this page:

- All the recipes will be displayed here
- The recipes have to be shown with all the data in the JSON displayed in a user-friendly way
- Each recipe can be favorited or unfavorited
- Each recipe can be rated

Evaluation Criteria
-------------------

**IMPORTANT**: Building a back-end or adding a database to this test is optional. Although, it's perfectly fine to approach this test as a refined front-end prototype.

- The app must run.
- Your app is lean and mean (small files that make the page look good).
- You implemented a proper grid.
- Your app is responsive.
- Your app is well structured.
- You implemented the rating functionality without using a third-party library.

Bonus points

- You wrote unit tests for your JavaScript.
- Your application is an SPA.
- You wrote server side code instead of using a utility application like `http-server`.
- You implement actual endpoints to request the recipe data.
- You use our own API instead of the JSON file, read how to do that [here](./USE_THE_API.md).
- Your app is deployed to Github Pages or some other hosting.
- Your application is isomporphic/universal.
- You implemented actual authentication with the use of passport or something similar.

Good luck, and have fun!


---
---

## Execution:
My app is deployed on [hello-fresh.herokuapp](https://hello-fresh.herokuapp.com/)

### Tech Stack:
| **Frontend** | **Backend** | **Database** |
| ------ | ------ | ------ |
**[React.js]** | **[Node.js]** |  **MongoDB**
**[Redux.js]** | **[Express.js]** | **Mongoose**
**Passport.js** |
**Redux-Thunk** |

### New Technologies  
I used this coding challenge as an opportunity to learn and implement new concepts and technologies:
- MongoDB
- Mongoose
- Passport.js
- Redux-Thunk

### Requirements:
- [x] The app must run.
- [x] Your app is lean and mean (small files that make the page look good).
- [x] You implemented a proper grid.
- [x] Your app is responsive.
- [x] Your app is well structured.
- [x] You implemented the rating functionality without using a third-party library.

Bonus points

- [ ] You wrote unit tests for your JavaScript.
- [x] Your application is an SPA.
- [x] You wrote server side code instead of using a utility application like `http-server`.
- [x] You implement actual endpoints to request the recipe data.
- [x] You use our own API instead of the JSON file, read how to do that [here](./USE_THE_API.md).
- [x] Your app is deployed to Github Pages or some other hosting.
- [x] Your application is isomporphic/universal.
- [x] You implemented actual authentication with the use of passport or something similar.

## Installation
to run the code locally follow these installation instructions:
- install MongoDB;
- install Node.js;

```bash
$ git clone -b development https://github.com/hellofreshdevtests/suddenlyGiovanni-frontend-test.git
$ cd suddenlyGiovanni-frontend-test
$ npm install
$ cd client
$ npm install
$ cd ../server
$ mkdir config
$ cd config && touch secrets.json
```

##### Secret.json
Paste in the following code and remember to configure [mongoDB] accordingly...
You should also edit 'hfClientSecret' property with the correct hello fresh api client secret...
```javascript
{
    "dbUri": "mongodb://localhost/hellofresh",
    "hfClientSecret": "**inser_here_hello_fresh_api_client_secret***",
    "jwtSecret": "abracadabra"
}
```

## How to Run it locally:
Start a mongo process:
```bash
$ mongod
```
Then in a new tab/terminal run:
```bash
$ npm run development
```


## Features:
As soon as I read all the requirements, I decided to tackle this project as a full stack proof of concept.
Immediately started building a robust backend to support all the feature needed on the client side.
I have split my codebase into two separate containers: client and server. This decision was informed by my desire to try to include create-react-app on a bespoken restful node/express server.
By doing so, I achieve all the benefits that create-react-app provides while developing on the client side.
I decided to use MongoDB as it allowed me by maintaining an identical data structure on both back and front end, to speed up the development.
```javascript
{
    "_id" : ObjectId("5a0fa3c82b99c20fd60826ab"),
    "email" : "bat@man.com",
    "password" : "$2a$10$5XyItumO38Se0o0K2Ri3YOIi543kC9NaoFBRUQ7qYNoZjwFHmenyS",
    "firstName" : "bat",
    "lastName" : "man",
    "recipes" : [
        {
            "recipeId" : "57acd49f544b1828478b4568",
            "rating" : 3,
            "_id" : ObjectId("5a0fa4c62b99c20fd60826ac"),
            "favorite" : true
        },
    ],
}
```
I have built the client as an SPA on React and managed its state through Redux and redux-thunk.
I have set up my restful server so it could dynamically fetch data from HelloFresh API whenever a client requires it. The client has the option, by specifying different parameres to my restful API, to fetch different dataset to consume. (ex. types of cuisine etc..)
I implemented a fully functional authentication system with Passport.js, JSON Web Tokens. I secured the client side and the API endpoints.
I implemented a rating and favorite system that is persistent for the user across sessions.
I have styled the app to resemble the HelloFresh looks and feel. I developed it as mobile-first by using a grid system that I have built on top of CSS grid.

> as a user, i can signup

![mobile-signup](/readme/01-mobile-signup.gif)

> as a user, i can login

![mobile-login](/readme/02-mobile-login.gif)

> as a user, i can rate the recipes

![mobile-navigation](/readme/03-mobile-navigation.gif)

> as a user, i can favorite a recipe

> as a user, i can resume using the app form where i left in the previous session

![tablet-navigation](/readme/04-tablet-navigation.gif)

> as a user, i can use the app on devices of different sizes an aspect-ratio

![tablet-landscape](/readme/05-tablet-landscape-navigation.gif)

> as a user, i can logout

## Contact
* e-mail: ravalico.giovanni@gmail.com
* Twitter: [@superspacezova](https://twitter.com/superspacezova "twitterhandle on twitter")
* LinkdeIn: [/giovanni-ravalico]
* Facebook: [/RavalicoGiovanni](https://www.facebook.com/RavalicoGiovanni)

License
----
MIT © [suddenlyGiovanni]
**Free Software, Hell Yeah!**



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[//]: # (Contact references:)
   [Spiced Academy]: <https://www.spiced-academy.com/>
   [suddenlyGiovanni]: <https://github.com/suddenlyGiovanni/>
   [/giovanni-ravalico]: <https://www.linkedin.com/in/giovanni-ravalico/>
   [@superspacezova]: <https://twitter.com/superspacezova>

[//]: # (Tech Stack references:)
   [React.js]: <https://reactjs.org/docs/installation.html>
   [Node.js]: <https://nodejs.org/dist/latest-v8.x/docs/api/>
   [Redux.js]: <http://redux.js.org/>
   [Express.js]: <http://expressjs.com/en/4x/api.html>
