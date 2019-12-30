var mongoose = require("mongoose");


function connectDB(){
    mongoose.connect('mongodb+srv://dbuser:dbuser123@cluster0-lrfgx.mongodb.net/test?retryWrites=true&w=majority')
   
}

module.exports = connectDB