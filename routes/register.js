const express = require('express')
const router = express()
const { User } = require('../models')

router.get('/', function(req,res){
    res.render('register')
})

router.post('/', function(req,res){
    User.create({
        name: req.body.userName,
        userName: req.body.userName,
        password: req.body.password   
    })
    .then(user => {
        res.send('berhasil')
    })
    .catch(error => {
        res.send(error)
    })

})



module.exports = router