const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

//init Middleware
//app.use(logger);

//Handlebars MiddleWare
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Alt one Render templates via tempate Engine
//Handlebar routes
//similar to the routes in Laravel.
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
//Alt two rendering templates with file sytem
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
//Completely different routes for the API.
app.use('/api/members', require('./routes/api/member'));

//first checking for port no in env
//Helpful in deployment
const PORT = process.env.PORT || 5000;

//app has listen method
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
