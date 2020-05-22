const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const { age } = req.query;
  let users = fs.readFileSync('usersAge.json');
  const userJSON = JSON.parse(users);
  res.send(userJSON[age]);
});

module.exports = app;
