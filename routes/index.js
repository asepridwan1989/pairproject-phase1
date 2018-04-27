const express       = require('express')
const router        = express()
const bodyParser    = require('body-parser')
const model         = require('../models')
const checkLogin    = require('../helpers/checkLogin')

router.get('/', function(req,res){
    let msg = 0
    let fail = {msg: msg}
    res.render('login', {fail})
})

router.post('/', function(req,res){
    // res.send(req.body)
    model.User.findOne({
        where: {
            userName:req.body.userName
        }
    })
    .then( user => {
        // res.send(user)
        if(checkLogin(req.body.password, user.password)){
            req.session.userName = user.id
            req.session.userName = user.userName
            res.redirect('/user')
        }
        else{
            let msg = "Password or Username is wrong!!!"
            let fail = {msg: msg}
            res.render('login', {fail})            
        }
    })
    .catch( error => {
        let msg = "Username Belum terdaftar"
        let fail = {msg: msg}
        res.render('login', {fail})
            
    })

})


module.exports = router