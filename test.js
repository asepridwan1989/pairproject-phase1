const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const session           = require('express-session')
const authentication    = require('./middlewares/authentication')
const model             = require('./models')
const checkLogin        = require('./helpers/checkLogin')
const match = require('./routes/matchs/match')
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use('/matches', match)

app.listen(3002, () => console.log('ini server, app listening on port 3000!'))
