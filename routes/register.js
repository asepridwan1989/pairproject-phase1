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
        password: req.body.password,
        battlepoint: 1000   
    })
    .then(user => {
        // res.send('berhasil')
        res.redirect('/')
    })
    .catch(error => {
        res.send(error)
    })

})



module.exports = router