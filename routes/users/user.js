const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../../models')

router.get('/', function(req,res){
    // res.send('ini routing robot')
    model.User.findOne({
        include: [model.Robot],
        where:{
            userName: req.session.userName
        }
    })
    .then(users => {
        // res.render('robot',{
        //     robots: robots
        //     // User: User
        // })
        model.Robot.findAll({
            include: [model.RobotMatch],
            where: {
                UserId: users.id
            }
        })
        .then( robotMatch => {
            model.Robot.findAll({
                include: [model.Match],
                where: {
                    UserId: users.id
                }
            })
            .then( matches => {
                // res.send({
                //     users:users,
                //     robotMatch: robotMatch,
                //     matches: matches
                // })

                res.render('home',{
                    users:users,
                    robotMatch: robotMatch,
                    matches: matches
                })

            })

    
        })
        
    })
})


module.exports = router