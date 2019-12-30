var mongoose = require('mongoose')
var schoolmodel = new mongoose.model('school',{
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    // class:[{types:mongoose.types.ObjectId(), ref:'class'}]

})
module.exports = schoolmodel