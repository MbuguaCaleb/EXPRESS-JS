//middleware function
//next class to move to the next function in the stack

const moment = require('moment');

const logger = (req, res, next) => {
  console.log(`${req.protocal}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger;
