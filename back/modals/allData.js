const mongoose = require('mongoose')
const schema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    photos:{
        type:[String],
        required: true
    },
    category:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        required: true
    },
    noOfReviews:{
        type:Number,
        required: true
    },
    oldprice:{
        type:String,
        required: false
    },
    newprice:{
        type:String,
        required: false
    }


   

},{
timeStamps: true}
)
module.exports=mongoose.model('store_datas',schema)
