const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const session           = require('express-session')
const authentication    = require('./middlewares/authentication')
const model             = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// USE HELPERS
app.use(function(req, res, next) {
    res.locals.getRobotName = require('./helpers/helperGetRobotName');
    next();
})
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
const index = require('./routes/index')
const register = require('./routes/register')
const robot = require('./routes/robot/robot')
const logout = require('./routes/logout') 
const user = require('./routes/users/user')
const bot = require('./routes/robot')
const userMatch = require('./routes/userMatch')

app.use('/', index)
app.use('/register', register)
app.use('/robot', authentication, robot)
app.use('/logout', logout)
app.use('/user', authentication, user)
app.use('/bot', authentication, bot)
app.use('/userMatch', authentication, userMatch)

app.listen(3000, () => console.log('ini server, app listening on port 3000!'))
