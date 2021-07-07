const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/', function(req,res){
    model.Robot.findAll({
        include: [model.User]
    })
    .then(robots => {
        res.render('robot',{
            robots: robots
        })
    })
})

router.post('/add', function(req,res){
    model.User.findOne({
        where: {
            userName: req.session.userName
        }
    })
    .then ( user => {
        model.Robot.create({
            name: req.body.name,
            UserId: user.id
        })
        .then( result => {
            res.redirect('/user')
        })
    })       
})

module.exports = router