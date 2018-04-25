
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


