var mongoose = require("mongoose")
 var classmodel = require('../models/CLASSMODEL')

function classAPI(app){
app.post('/eventclass' , (req ,res)=>{
    const {name  , age } = req.body
    let class1 = new classmodel({
        _id:mongoose.Types.ObjectId(),
        name ,
        age , 

    })
    class1.save((error , data)=>{
        error?
        res.json(console.log(error))
        :
        res.json({massage:"sucsses"})

    })

})

app.post('/getallcasses' , (req ,res)=>{
    const {_id:_id} = req.body

    classmodel.find({_id}).exec((err , data)=>{
        err?
        res.json({massage:'error'})
        :
        res.json({massage:'sucsses' , 'data':data})

    })
})

}
module.exports = classAPI