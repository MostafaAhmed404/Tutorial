var express = require('express')()
var app = express;
var bodyparser = require('body-parser')
var MONGOCONNECT = require('./connect')
var EXPRESSSESSION = require('express-session')
var uuid = require('uuid/v4')
var SCHOOLAPI = require('./APIS/schoolAPI')
var STUDENTAPI = require('./APIS/studentAPI')
var classAPI = require('./APIS/classAPI')
//////////////////middlewear//////////////////

app.use(bodyparser.json())
app.use(EXPRESSSESSION({
    secret:'mysession',
    genid:uuid
}))

MONGOCONNECT()

SCHOOLAPI(app)
STUDENTAPI(app)
classAPI(app)













var port = process.env.port || 3030;

app.listen(3030 , ()=>console.log(`servr is running on port ${port}`));