const express = require('express')
const router = express()
// const bodyParser = require('body-parser')

router.get('/', function(req,res){
    res.render('login')
})

module.exports = router