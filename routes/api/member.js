const express = require('express');
const uuid = require('uuid');
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

//Create Member
router.post('/', (req, res) => {
  //returning the request body
  //res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  //validations check for whether you have put the name and email
  if (!newMember.name || !newMember.email) {
    return res.status(401).json({
      msg: 'Please include a name and email'
    });
  }

  members.push(newMember);

  //sending back a response

  res.json(members);
});

module.exports = router;
