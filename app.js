const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

// app.get('/', (req, res) => res.send('Hello World!'))
const robot = require('./routes/robot/robot')



app.use('/robot', robot)



app.listen(3000, () => console.log('app listening on port 3000!'))
