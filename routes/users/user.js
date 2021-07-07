const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../../models')
const Sequelize         = require('sequelize');
const Op = Sequelize.Op

router.get('/', function(req,res){
    model.User.findOne({
        include: [model.Robot],
        where:{
            userName: req.session.userName
        }
    })
    .then( user => {
        let pengguna = user
        let robots = user.Robots
        let ids = []
        for(let i=0; i<robots.length; i++){
            ids.push(robots[i].id)    
        }
        // res.send(ids)
        model.RobotMatch.findAll({
            include: [model.Match],
            where: {
                RobotId: {
                    [Op.in]: ids
                }
            }
        })
        .then( robotMatches => {
            // res.send({
            //     pengguna:pengguna,
            //     robotMatches:robotMatches
            // })
            res.render('home',{
                pengguna:pengguna,
                robotMatches:robotMatches
            })
        })
        .catch(error => {
            console.log('ngga dapet findAll RobotMatch', error)
        })
    })
    .catch(error => {
        console.log('ngga dapet findOne user',error)
    })
})

// router.get('/', function(req,res){
//     model.User.findOne({
//         include: [model.Robot],
//         where:{
//             userName: req.session.userName
//         }
//     })
//     .then(users => {
//         model.Robot.findAll({
//             include: [model.RobotMatch],
//             where: {
//                 UserId: users.id
//             }
//         })
//         .then( robotMatch => {
//             model.Robot.findAll({
//                 include: [model.Match],
//                 where: {
//                     UserId: users.id
//                 }
//             })
//             .then( matches => {
//                 // res.send({
//                 //     users:users,
//                 //     robotMatch: robotMatch,
//                 //     matches: matches
//                 // })

//                 res.render('home',{
//                     users:users,
//                     robotMatch: robotMatch,
//                     matches: matches
//                 })
//             }) 
//         })
//     })
// })


module.exports = router