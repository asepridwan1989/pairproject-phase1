<<<<<<< HEAD
const express = require('express')
const router = express()
// const bodyParser = require('body-parser')
// const model = require('../../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Robot,User,RobotMatch} = require('./models')


User.findAll({
  include:[Robot]
})
.then(robotUser=>{
    Robot.findAll({
      include:[RobotMatch]
    })
    .then(alldata=>{
      console.log('=========================>user',robotUser)
      console.log('========================>data',alldata)
    })
}) 
=======
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '!n1P@5sW0rd';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
  });
>>>>>>> 96501fbb1ee8bc64ce89df8167c9d5dd25450a3f
