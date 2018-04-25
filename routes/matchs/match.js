const express = require('express')
const router = express()
// const bodyParser = require('body-parser')
// const model = require('../../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Match } = require('../../models')
