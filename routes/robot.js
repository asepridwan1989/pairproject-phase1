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


module.exports = router