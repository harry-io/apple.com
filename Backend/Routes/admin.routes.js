const express = require("express")
const { adminModel } = require("../Models/admin.model")
const adminRouter =  express.Router()


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
 * /adminProducts/add:
 *  post:
 *    summary: To add new Products.
 *    tags: [Admin]
 *    security:
 *      - bearerAuth: []
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
adminRouter.post("/add",async(req,res)=>{
   try {
    const newProduct = new adminModel(req.body)
    await newProduct.save()
    res.status(200).send({"msg":"Product added successfully"})
   } catch (error) {
    res.status(400).send({error:error.message})
   }
})


/**
 * @swagger
 * /adminProducts/:
 *  get:
 *    summary: To get  all products.
 *    tags: [Admin]
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



/**
 * @swagger
 * /adminProducts/{id}:
 *  delete:
 *    summary: To remove product by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product.
 *         schema:
 *           type: string
 *    tags: [Admin]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *     200:
 *       description: Product deleted 
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Product deleted successfully
 *     400:
 *       description: Bad Request 
 *       content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Invalid id    
 */




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



/**
 * @swagger
 * /adminProducts/{id}:
 *  patch:
 *    summary: To update product by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product.
 *         schema:
 *           type: string
 *    tags: [Admin]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/NewProduct'
 *    responses:
 *     200:
 *       description: Product updated
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Product updated successfully
 *     400:
 *       description: Bad Request 
 *       content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Invalid id    
 */




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




  /**
 * @swagger
 * /adminProducts/search?q={Title}:
 *  get:
 *    summary: To Search product by title.
 *    parameters:
 *       - in: path
 *         name: Title
 *         required: true
 *         description: Title of the product.
 *         schema:
 *           type: string
 *    tags: [Admin]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *     200:
 *       description: Product updated
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Product updated successfully
 *     400:
 *       description: Bad Request 
 *       content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Invalid id    
 */



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



/**
 * @swagger
 * /adminProducts/search/{id}:
 *  get:
 *    summary: To get product by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product.
 *         schema:
 *           type: string
 *    tags: [Admin]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *     200:
 *       description: Single Product 
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/NewProduct'
 *     400:
 *       description: Bad Request 
 *       content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  msg:
 *                    type: string
 *                    description: message 
 *                    example: Invalid id    
 */


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