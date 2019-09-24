const express = require('express');
//importing path node JS Module where you can render a file path
const path = require('path');

const app = express();

const members = [
  {
    id: 1,
    name: 'Mbugua Caleb',
    email: 'mbuguacaleb30@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Wanjiru Mercy',
    email: 'wanjirukerei@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Humphrey Karanja',
    email: 'kereihumphrey@gmail.com',
    status: 'incative'
  }
];

//GETS ALL MEMBERS
app.get('/api/members', (req, res) => {
  res.json(members);
});

//set static folder
//a Better way to laod all your pages is via static routes.
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World!</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//first checking for port no in env
//Helpful in deployment
const PORT = process.env.PORT || 5000;

//app has listen method
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
