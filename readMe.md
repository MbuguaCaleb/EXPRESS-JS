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
const express = require('express')


//Init Express

const app = express();


//Create your endpoints/route handlers

app.get('/'. function(req, res){

res.send('Hello World!');

});

//Listen on a Port

app.listen(5000);


```

**Basic Route Handling**

```
From within your route the following can be achieved:

(I)

app.get('/'. function(req, res){

(a)Fetch  data from a database
(b)Load Pages
(c)Return Json
(d)Full access to request and response.

});


(II)


```


