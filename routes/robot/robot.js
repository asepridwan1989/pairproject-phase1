const express = require('express')
const router = express()
// const bodyParser = require('body-parser')
// const model = require('../../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Robot,User} = require('../../models')

router.get('/', function(req,res){
    // res.send('ini routing robot')
    Robot.findAll({
        include: [User]
    })
    .then(robots => {
        // res.send(robots)
        res.render('./robot/robot',{
            robots: robots
            // User: User
        })
    })
})

router.get('/addrobot',function(req,res){
    res.render('./robot/addrobot')
})

router.post('/addrobot',function(req,res){
  console.log(req.body)
    Robot.create({
      name:req.body.name,
      UserId:req.body.id
    })
    .then(newRobot=>{
      res.redirect('/robot')
    })
    .catch(err=>{
      console.log(err)
    })
})

router.get('/robot-search?=:search',function (req,res) {
  console.log(req.query)
  Robot.findAll({
      include: [User],
      where: {
         name: {
           [Sequelize.Op.like]: '%' + req.body.search + '%'
         }
       }
  })
  .then(robots => {
      // res.send(robots)
      res.render('./robot/robotsearch',{
          robots: robots
          // User: User
      })
  })
})

router.post('/robot-search',function (req,res) {
  console.log(req.query)
  Robot.findAll({
      include: [User],
      where: {
         name: {
           [Sequelize.Op.like]: '%' + req.body.search + '%'
         }
       }
  })
  .then(robots => {
      // res.send(robots)
      res.render('./robot/robotsearch',{
          robots: robots
          // User: User
      })
  })
})


module.exports = router
