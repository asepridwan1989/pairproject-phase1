const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/', function(req,res){
    // res.send('ini routing robot')
    model.Robot.findAll({
        include: [model.User]
    })
    .then(robots => {
        // res.send(robots)
        res.render('robot',{
            robots: robots
            // User: User
        })
    })
})

router.post('/add', function(req,res){
    // res.send({
    //     body:req.body,
    //     ses: req.session.userName
    // })
    model.User.findOne({
        where: {
            userName: req.session.userName
        }
    })
    .then ( user => {
        // res.send({
        //         robotName:req.body.name,
        //         userName: user.userName,
        //         userId: user.id
        // })
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