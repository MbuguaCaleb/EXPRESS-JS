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

//Update Member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    //remeber data from the body has already been parsed.
    const updMember = req.body;
    //fetching a Member
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;

        member.email = updMember.email ? updMember.email : member.email;

        //return a response
        res.json({ msg: 'Member updated', member });
      }
    });
  } else {
    res.status(400).json({
      msg: `No member with the id of ${req.params.id}`
    });
  }
});

//Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    //filtering out all members apart from the one who was deleted.
    //returning the Json Object.
    res.json({
      msg: 'Member Deleted!',
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({
      msg: `No member with the id of ${req.params.id}`
    });
  }
});

module.exports = router;
