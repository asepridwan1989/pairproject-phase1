const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

// routing
const register = require('./routes/register')
const robot = require('./routes/robot')

app.get('/', function(req,res){
    res.render('index')
})
app.use('/register', register)
app.use('/robot', robot)



app.listen(3000, () => console.log('app listening on port 3000!'))