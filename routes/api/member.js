const express = require('express');
const members = require('../../Members');
const router = express.Router();

//Gets All Members
router.get('/', (req, res) => {
  res.json(members);
});

//Get Single Member
router.get('/:id', (req, res) => {
  //res.send(req.params.id);

  //checking if a particular ID is existent
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
      msg: `No member with the id of ${req.params.id}`
    });
  }
});

module.exports = router;
