const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../models')

router.post('/add', function(req,res){
    // res.send(req.body)
    model.Match.create({
        name:req.body.name,
        location:req.body.location,
        betPoint:req.body.betPoint
    })
    .then( match => {
        model.Match.findOne({
            where:{
                name: req.body.name
            }
        })
        .then( pertarungan => {
            // res.send({
            //     pertarungan:pertarungan,
            //     RobotId: req.body.RobotId
            // })
            model.RobotMatch.create({
                RobotId:req.body.RobotId,
                MatchId:pertarungan.id
            })
            .then( insertRobotMatch => {
                res.redirect('/user')
            })
            .catch(err => {
                res.send('ngga bisa nput ke robotmatch', err)
            })
        })
        .catch(err => {
            res.send('ngga nemu match')
        })
    })
    .catch( error => {
        res.send('error ngga bisa insert ke match',error)
    })
})


module.exports = router