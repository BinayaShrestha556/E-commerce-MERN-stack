const mongoose = require('mongoose')
const schema= new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    }


   

},{
timeStamps: true}
)
module.exports=mongoose.model('contact',schema)
