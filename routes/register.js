const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const model = require('../models')

router.get('/', function(req,res){
    res.render('register')
})



module.exports = router