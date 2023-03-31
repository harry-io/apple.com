const express = require("express")
const { adminModel } = require("../Models/admin.model")
const adminRouter =  express.Router()




//CREATE
adminRouter.post("/add",async(req,res)=>{
   try {
    const newProduct = new adminModel(req.body)
    await newProduct.save()
    res.status(200).send({"msg":"Product added successfully"})
   } catch (error) {
    res.status(400).send({error:error.message})
   }
})



//READ
adminRouter.get("/",async(req,res)=>{
    let {category} = req.query
    category = category ?  category.toLowerCase() : null
   try {
    const products = await adminModel.find({"category":category||["mac","iphone","ipad","apple watch"]})
    res.status(200).send(products)
   } catch (error) {
    res.status(400).send({"msg":error.message})
   }
})



//DELETE
adminRouter.delete("/:id",async(req,res)=>{
  try {
     const idExist = await adminModel.findOne({"_id":req.params.id})
     console.log(idExist)
     if(idExist){
        await adminModel.findByIdAndDelete(req.params.id)
        res.status(200).send({"msg":"Product deleted successfully"})
     }else{
        res.status(400).send({"msg":"Product id invalid"})
     }
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})



//UPDATE
adminRouter.patch("/:id",async(req,res)=>{
    try {
       const idExist = await adminModel.findOne({"_id":req.params.id})
       console.log(idExist)
       if(idExist){
          await adminModel.findByIdAndUpdate(req.params.id,req.body)
          res.status(200).send({"msg":"Product updated successfully"})
       }else{
          res.status(400).send({"msg":"Product id invalid"})
       }
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  })


//SEARCH
adminRouter.get("/search",async(req,res)=>{
    const {q} = req.query
   // console.log(q)
    try {
        const products = await adminModel.find({ title: { $regex: new RegExp(q, "i") } })
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


//GET BY ID
adminRouter.get("/search/:id",async(req,res)=>{
   const {id} = req.params
   try {
       const products = await produtModel.findOne({_id:id})
       res.status(200).send(products)
   } catch (error) {
       res.status(400).send({"msg":error})
   }
})




module.exports = {adminRouter}