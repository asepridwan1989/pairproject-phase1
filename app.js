const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const session           = require('express-session')
const authentication    = require('./middlewares/authentication')
const model             = require('./models')
const checkLogin        = require('./helpers/checkLogin')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(function(req, res, next) {
    res.locals.winRate = require('./helpers/helperWinRate');
    next();
})
app.use(function(req, res, next) {
    res.locals.winRateUser = require('./helpers/helperWinRateUser');
    next();
})


app.set('view engine', 'ejs')


// ROUTING
const register = require('./routes/register')
const robot = require('./routes/robot/robot')
const logout = require('./routes/logout') 
const user = require('./routes/users/user')

app.get('/', function(req,res){
    // res.render('login', {fail:0})
    let msg = 0
            let fail = {msg: msg}
            console.log(fail.msg)
            res.render('login', {fail})
})
app.post('/', function(req,res){
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
            // res.render('home')
            res.redirect('/user')
            // res.send(req.session.userName)
        }
        else{
            let msg = "Password or Username is wrong!!!"
            let fail = {msg: msg}
            res.render('login', {fail})
            
            // {
            //     msg:msg
            // })
        }
    })
    .catch( error => {
        let msg = "Username Belum terdaftar"
        let fail = {msg: msg}
            res.render('login', {fail})
            
    })

})

app.use('/register', authentication, register)
app.use('/robot', authentication, robot)
app.use('/logout', logout)
app.use('/user', authentication, user)

app.listen(3000, () => console.log('ini server, app listening on port 3000!'))
