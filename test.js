
const express = require('express')
const router = express()
// const bodyParser = require('body-parser')
// const model = require('../../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Robot,User,RobotMatch,Match} = require('./models')


Robot.findOne({
  include:[{
    model: Match,
    on: {
      id:1
    }
  }]
})
.then( robots => {
  console.log(robots)
})
// .then(robotUser=>{
//     Robot.findAll({
//       include:[RobotMatch]
//     })
//     .then(alldata=>{
//       console.log('=========================>user',robotUser)
//       console.log('========================>data',alldata)
//     })
// }) 

