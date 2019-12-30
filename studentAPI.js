var mongosoe = require('mongoose')
var STUDENTMODULE = require('../models/STUDENTMODEL')


function studentAPI(app){
app.post('/addstudent' , (req ,res)=>{
    const {name , age} = req.body
    var student = new STUDENTMODULE({
        _id:mongosoe.Types.ObjectId(),
        name,
        age


    });
    student.save((err , sucsses)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses'})

    })
})
app.post('/getstudentbyID' , (req ,res)=>{
    const {_id} = req.body
    STUDENTMODULE.find({_id}).exec((err , data)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses' , 'data':data})

    })
})

}
module.exports = studentAPI