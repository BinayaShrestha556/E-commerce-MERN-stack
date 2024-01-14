const  express = require('express')
const router=express.Router()
const user = require("../modals/userModal")

router.post('/createUser', async (req,res)=>{
    
    try {
        if (!req.body.userName||!req.body.email|| !req.body.password){
            return res.json({error: "not enough params"})

        }
        else{
            if( await user.findOne({userName:req.body.userName} )){
                return res.json({message: "username already exixts"})
            }
            else if( await user.findOne({email:req.body.email })){
                return res.json({message: "email already exists"})
            }
            else{ user.create({
                firstName:req.body.firstName,
                lastName: req.body.lastName,
           userName: req.body.userName,

           email: req.body.email,
           password: req.body.password
        }).then(()=>{
            console.log("added")
            res.json({message:"success"})
        })}
        }
       
    } catch (error) {
        console.log(error)
        res.json({success:false})

        
    }
})
router.post('/login',async (req,res)=>{
    try{
    const body=req.body

    const User=await user.findOne({userName:body.userName})
    if(User){
        if(body.password===User.password) return res.json({login: true,_id:User._id})
        else res.json({login: false, message: "password incorrect"})

    }
    else res.json({message: "user not exist"})
} catch(err){
    res.json({message: err.message})
}

    // console.log(User)
})
module.exports=router;