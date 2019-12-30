var mongoose = require('mongoose')
 var schoolmodel = require('../models/SCHOOL')

function schoolAPI(app){
app.post('/insertname' , (req ,res)=>{
    const {name} = req.body
let school = new schoolmodel({
    _id:mongoose.Types.ObjectId(),
    name

})
school.save((err , sucsses)=>{
err?
res.json({massage:'error'})
:
res.json({massage:"sucsses"})
})
})

app.post('getschoolbyID' , (req ,res)=>{
    const {_id} = req.body
    schoolmodel.find({_id}).exec((err , sucsses)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses' , 'data':sucsses})

    })
})
}
module.exports = schoolAPI