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

app.set('view engine', 'ejs')


// ROUTING
const register = require('./routes/register')
const robot = require('./routes/robot/robot')

app.get('/', function(req,res){
    res.render('login')
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
            res.render('home')
        }
        else{
            res.send('login gagal')
        }
    })
    .catch( error => {
        res.send('ini error findOne')
    })

})
app.use('/register', register)
app.use('/robot', robot)


app.listen(3000, () => console.log('app listening on port 3000!'))
