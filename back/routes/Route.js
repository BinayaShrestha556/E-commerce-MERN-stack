// const mongoose=require("mongoose")
const express=require('express')
const Data =require("../modals/allData")
const router=express.Router();
router.get("/allData/:page", async (req, res) => {
    try {
    const data = await Data.find({}).skip(req.params.page*10).limit(10);
      return res.status(200).json({count:data.length,data:data});
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

router.get("/category/kids/:page",async(req,res)=>{
    try {
       const {page}=req.params
        // if(page==undefined) {page=0}
        const data=await Data.find({category:"kids outfit"}).skip(page*10).limit(10)
        return res.status(200).json({count:data.length,data:data});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.get("/category/women/:page",async(req,res)=>{
    try {
       const {page}=req.params
        // if(page==undefined) {page=0}
        const data=await Data.find({category:"women outfit"}).skip(page*10).limit(10)
        return res.status(200).json({count:data.length,data:data});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.get("/category/men/:page",async(req,res)=>{
    try {
       const {page}=req.params
        // if(page==undefined) {page=0}
        const data=await Data.find({category:"men outfit"}).skip(page*10).limit(10)
        return res.status(200).json({count:data.length,data:data});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.get("/new-collection",async(req,res)=>{
    try {
       
        // if(page==undefined) {page=0}
        const data1=await Data.find({category:"kids outfit"}).limit(7)
        const data2=await Data.find({category:"women outfit"}).limit(7)
        const data3=await Data.find({category:"men outfit"}).limit(7)

        data2.map((e)=>data1.push(e))
        data3.map((e)=>data1.push(e))

        // console.log(data1)
        return res.status(200).json({count:data1.length,data:data1});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.get("/id/:id", async (req, res) => {
    try {
      const data = await Data.findById(req.params.id);
  
      if (!data) {
        // If data is not found, respond with a 404 status
        return res.status(404).json({ message: "Data not found" });
      }
  
      // If data is found, respond with a 200 status and the data
      res.status(200).json(data);
    } catch (err) {
      // Handle errors during the findById operation
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
module.exports=router