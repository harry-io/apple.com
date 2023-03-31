const express = require("express")
const { produtModel } = require("../Models/products.model")
const productRouter =  express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     NewProduct:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: product name.
 *         category:
 *           type: string
 *           description: category of product.
 *         image:
 *           type: string
 *           description: link of product image.
 *         price:
 *           type: integer
 *           description: price of product.
 *     RegResult:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: message
 *           example: User Registered Succesfully. 
 *     LogReq:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: message
 *           example: Albin@gmail.com.
 *         password:
 *           type: string
 *           description: message
 *           example: Albin123.
 *     AddResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: message
 *           example: Product Added Succesfully.
 */

/**
 * @swagger
 * /products/add:
 *  post:
 *    summary: To post details of new user/admin.
 *    tags: [Products]
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/NewProduct' 
 *    responses:
 *     200:
 *       description: The user was successfully registered
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/AddResponse'
 *     400:
 *       description: Bad Request      
 */


//CREATE
productRouter.post("/add",async(req,res)=>{
   try {
    const newProduct = new produtModel(req.body)
    await newProduct.save()
    res.status(200).send({"msg":"Product added successfully"})
   } catch (error) {
    res.status(400).send({error:error.message})
   }
})



/**
 * @swagger
 * /products/:
 *  get:
 *    summary: To get  all products.
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *     200:
 *       description: List of all Products
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/NewProduct'
 *     400:
 *       description: Bad Request      
 */



//READ
productRouter.get("/",async(req,res)=>{
    console.log(req.query)
    let {category} = req.query
    category = category ?  category.toLowerCase() : null
   try {
    const products = await produtModel.find({"category":category||["mac","iphone","ipad","apple watch"]})
    res.status(200).send(products)
   } catch (error) {
    res.status(400).send({"msg":error.message})
   }
})



//DELETE
productRouter.delete("/:id",async(req,res)=>{
  try {
     const idExist = await produtModel.findOne({"_id":req.params.id})
     if(idExist){
        await produtModel.findByIdAndDelete(req.params.id)
        res.status(200).send({"msg":"Product deleted successfully"})
     }else{
        res.status(400).send({"msg":"Product id invalid"})
     }
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})



//UPDATE
productRouter.patch("/:id",async(req,res)=>{
    try {
       const idExist = await produtModel.findOne({"_id":req.params.id})
       if(idExist){
          await produtModel.findByIdAndUpdate(req.params.id,req.body)
          res.status(200).send({"msg":"Product updated successfully"})
       }else{
          res.status(400).send({"msg":"Product id invalid"})
       }
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  })


//SEARCH
productRouter.get("/search",async(req,res)=>{
    const {q} = req.query
    try {
        const products = await produtModel.find({ title: { $regex: new RegExp(q, "i") } })
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


//GET BY ID
productRouter.get("/search/:id",async(req,res)=>{
   const {id} = req.params
   try {
       const products = await produtModel.findOne({_id:id})
       res.status(200).send(products)
   } catch (error) {
       res.status(400).send({"msg":error})
   }
})




module.exports = {productRouter}