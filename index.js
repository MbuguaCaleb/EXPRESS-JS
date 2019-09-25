const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//init Middleware
//app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/member'));

//first checking for port no in env
//Helpful in deployment
const PORT = process.env.PORT || 5000;

//app has listen method
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
