//app.js file for server
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  Sequelize = require('sequelize'),
  Op = Sequelize.Op,
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  SALT_ROUNDS = 10,
  myPlaintextPassword = 's0/\/\P4$$w0rD',
  someOtherPlaintextPassword = 'not_bacon',
  // schedule = require('node-schedule'),
  PORT = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//app.get
//app.post

app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT} `);
});
