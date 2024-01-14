const express = require("express");
// const connectDB = require("./db");
const mongoose3 = require("mongoose");
const Data=require("./modals/allData.js")
const Contact=require("./modals/contact.js")
const Cart=require("./modals/cart.js")

const User=require("./routes/login_signup.js")

const cors = require('cors')
const dataRoute=require('./routes/Route.js');
const cart = require("./modals/cart.js");
const DBurl ="mongodb+srv://Binaya:Binaya@database.impyte5.mongodb.net/store?retryWrites=true&w=majority"
// const loginSignup= require('./routes/login_signup')

const app = express();
app.use(express.json());
app.use(cors())


mongoose3.connect(DBurl).then(() => {
  console.log("connected");
  app.listen(3000, () => {
    console.log("online");
  });
});
app.use("/user",User)
app.get("/", async (req , res ) => {
  res.json(await Data.find({}))

});
app.use('/data',dataRoute)
app.post('/contact',async (req,res)=>{
   const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (req.body.email.match(validRegex)) {
try{
    await Contact.create({email:req.body.email,description:req.body.description})
    return res.status(200).json("success")
  }catch(err){
      console.log(err)

    }
    } else {

    res.status(500).json("Invalid email address!");

  

  }
})
// app.post('/cart',async(req,res)=>{
//   try{
//   const id=req.body.id
//   if(await Cart.findById(id))
//   {
//     await Cart.updateOne({id:id},{$push:{productId:req.body.productId}})
//     res.json("success")
//   }else{
//   await  Cart.create({id:req.body.id,productId:req.body.productId})
//   res.json("success")}}
//   catch(err){
//     console.log(err)
//   }

// })
// app.get('/cart/:id',async(req,res)=>{
//     try{
//       const id= req.params.id
//        const data=await Cart.findById(id)
//       if(data){
        
//         res.json(data)
//       }
//       else{ res.json({message:"no items in cart"})}
//     }catch(err){
//       console.log(err)
//     }
// })