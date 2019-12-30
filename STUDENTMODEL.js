var mongoose = require('mongoose')
var student_module = new mongoose.model('student', {
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:Number,
    // classes:{Types:mongoose.Schema.Types.ObjectId , ref:'classes'}
})
module.exports = student_module