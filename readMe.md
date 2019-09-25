**ExpressJS**

```
It is the most popular NodeJS framework.

```

```
It is a fast unapinionated and minimalist framework for NodeJS.

```

```
(a)Unopinionated means it is not a high Level framrwork like laravel or django and therefore it means that it has a simpler structure.

You do not code in any particular stuructured way and it is you who does determine everything.
```

```
Express is a serverside or backend framework.It is not comparable to client-side frameworks eg React,Angular and Vue.It however may be used in combination with these frameworks to build full stack applications..

```

```
You may also render views from within express..using either plain HTML or template engines like handle bars.

```

**Advantages of using Express**

```

(a)Makes bilding applications with nodeJS way easier as it has far much less code than when using pure NodeJs.

(b)Used for backend applications that render pages on the server as well as in making APIs/Microservices.

(c)It is extremely light,fast and free.

(d)You have full control of request and response

(e)It is by far the most popular nodeJS framework..other frameworks include Koa.js. ... and Hapi.js...the latter two are almost similar to Node JS and adonas-(addonas is much higher level..almost similar to laravel )..Hoewever express is the most popular of them all.

(f)It is great to use with client side frameworks as it is all JavaScript.


```

**Must Learn**

```

Asynchronous JavaScript ,Fetch Api  and Promises.

```

**Must Master**

```
(a)Http Status  codes.(Many times when sending a  request you have a response.

Depending on the type of response ,you have a status code.)

(b)Json

(c)High Order Array Methods

(d)Arrow Functions

```

**Basic Express App Structure**

```
(a)Import express.
const express = require('express')


(b)Initialize express.
//Init Express
const app = express();


(c)Creating your endpoints/route handlers  which incoporate a Call back function which takes in a request and a response.

app.get('/'. function(req, res){

res.send('Hello World!');

});

(d)Listening on a Port

app.listen(5000);


```

**NOTICE**

```
You cannot use ES2016 MODULES Directly with node.
You normally use a transpiler an example being Babel

```

**Basic Route Handling**

```
From within your route the following can be achieved:

(I)

app.get('/'. function(req, res){

(a)Fetch  data from a database(PGSQL,MONGO MYSQL)
(b)Load Pages
(c)Return Json
(d)Full access to request and response.

});


(II)Handling requests/routes is simple.

(III)Express has a router so we can store routes in separate
files and export...Wow!!

(IV)We can parse incoming data into express with body parser.

```

**EXPRESS MIDDLEWARE**

```
Middleware functions are functions that have access to the request and response object.Just as we do within routes

Express has built in middleware but middleware comes from 3rd party packages as well as custom middleware.

The middleware is capable of :

(a)Executing any code.
(b)Making changes to the request/response objects
(c)Ending the response cycle
(d)Calling the next middleware in the stack.

It more or less a stack of functions that execute whenever a request is made to the server.

You can do a lot of things with regards to manipulating a request when using a middleware.

```

```
(1)npm init -y -initialize package.json

(2)npm i express -install express

(3)node nameofFile -eg node index..react npm start.

(4)Every route we create has got access to the request and response object.There are properties of a HTTP Object eg contentType,Headers etc.

(5)Installing nodemon for automatic page reload-npm i -D nodemon

(6)Res Methods.
We have different options entailing the sending of a response.
eg..


(i)res.send...
app.get('/', (req, res) => {
  // res.send('<h1>Hello World!</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


(ii)res.render() -if we have a template engine.we can render a HTML Template where we can put in variables etc.

(iii)res.json()

(7)
It is rather using a static folder rather than path module which will lead you into having much more routes in one file..

(8)You can hit an express route with any technologies of your choice..whether react, vue,angular or postman this this is the enpoints approach.


 res.json() takes care of everything when using express and you do not have even to stringify.



 (9)Whenever you are importing a module you must use require.


```

**Middleware**

```

How it is initialized and how it has got access to the request and response object.

Passing it to the endpoint passes it as an URL Parameter.

Refreshing you knowledge on what is a request and what is a response.Notice res.send() is returning back a response.


```

```
Request parameters are strings , so there are times you have to parse espacially the id.

Higher order array methods.There is one that is called some which checks if an item exists or not.


(a)Map
(b)Filter
(c)Some
(d)Array Reduce.

Whenever you pass an ID to a request notice that it is a parameter.Thus you can fetch it as {req.params.id}

```

**ExpressRouter**

```
Helps in the grouping of routes instead of having all your routes in index.js

Api routes in particular serve Json..
Routes may also serve templates hence it is great grouping them into a folder.

Introducing a router file in express that helps you group all your routes in one file is
like a blueprint in flask.
You use the router key word instead of app.

Knowing how to include files as well as imports like in python is paramount
when using require of a file in express.

You then import your routes in the main index since this is where your routes are initialized.



```
