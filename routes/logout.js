const express = require('express')
const router = express()

router.get('/', function(req,res){
    // res.send('ini sudah mau logout')
    delete req.session.userName
    res.redirect('/')
})


module.exports = router