var mongoose = require('mongoose')
var classmodel = new mongoose.model('classes',{
    _id:mongoose.Schema.Types.ObjectId,
    name :String,
    age:Number,
    // student:{Types:mongoose.Schema.Types.ObjectId, ref:'student'}
})
module.exports = classmodel