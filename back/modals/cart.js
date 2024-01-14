const mongoose = require('mongoose')
const schema= new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    productId:{
        type:[String],
        required: true
    },
    



   

},{
timeStamps: true}
)
module.exports=mongoose.model('cart',schema)
