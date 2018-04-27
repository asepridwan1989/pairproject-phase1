const express = require('express')
const router = express()
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Match,Robot,User,RobotMatch,Commenter } = require('../../models')


router.get('/', function(req,res){
    Match.findAll({
        include: [Robot]
    })
    .then(matches => {
        res.render('./matches/match',{matches})
    })
})

router.get('/:id/detail', function(req,res){
    let id = req.params.id
    console.log(id)
    Match.findOne({
        where: {id:id}
    })
    .then(match => {
      Robot.findAll({
        include:[{model:RobotMatch,where:{MatchId:id}}]
      })
      .then(robot=>{
          Commenter.findAll({where:{MatchId:id}})
          .then(komen=>{
            res.render('./matches/match-detail',{match,robot,komen})
          })
      })
    })
})

router.post('/:id/detail', function(req,res){
    let id = parseInt(req.params.id)
    Commenter.create({
      MatchId : parseInt(id),
      poster : req.session.userName,
      comment: req.body.komentator
    })
    .then(result=>res.redirect(`/matches/${id}/detail`))
})


router.get('/add', function(req,res){
    let id = 1
    User.findOne({where:{id:id},include:[Robot]})
    .then(user=>{
        res.render('./matches/match-create',{user})
    })
})

router.post('/add', function(req,res){
    Match.create({
      name : req.body.name,
      location: req.body.location,
      dateBattle: req.body.date,
      betPoint : req.body.betPoint,
      status: "pending"
    })
    .then(last=>{
      res.send(last)
        // res.render('./matches/match-create',{user})
    })
})
module.exports = router;
