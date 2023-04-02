const express = require("express")
const { cartModel } = require("../Models/cart.model")

const cartRouter =  express.Router()



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
 * /cartProducts/add:
 *  post:
 *    summary: To add new Products in Cart.
 *    tags: [Cart]
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
 *       description: Product successfully Added Cart
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/AddResponse'
 *     400:
 *       description: Bad Request      
 */



//CREATE
cartRouter.post("/add",async(req,res)=>{
   try {
    const newProduct = new cartModel(req.body)
    await newProduct.save()
    res.status(200).send({"msg":"Product added successfully"})
   } catch (error) {
    res.status(400).send({error:error.message})
   }
})


/**
 * @swagger
 * /cartProducts/:
 *  get:
 *    summary: To get  all products.
 *    tags: [Cart]
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
cartRouter.get("/",async(req,res)=>{
    console.log(req.query)
    let {category} = req.query
    category = category ?  category.toLowerCase() : null
   try {
    const products = await cartModel.find({"category":category||["mac","iphone","ipad","apple watch"]})
    res.status(200).send(products)
   } catch (error) {
    res.status(400).send({"msg":error.message})
   }
})


/**
 * @swagger
 * /cartProducts/{id}:
 *  delete:
 *    summary: To remove product by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product.
 *         schema:
 *           type: string
 *    tags: [Cart]
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
cartRouter.delete("/:id",async(req,res)=>{
  try {
     const idExist = await cartModel.findOne({"_id":req.params.id})
     if(idExist){
        await cartRouter.findByIdAndDelete(req.params.id)
        res.status(200).send({"msg":"Product deleted successfully"})
     }else{
        res.status(400).send({"msg":"Product id invalid"})
     }
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})



//UPDATE
cartRouter.patch("/:id",async(req,res)=>{
    try {
       const idExist = await cartModel.findOne({"_id":req.params.id})
       if(idExist){
          await cartRouter.findByIdAndUpdate(req.params.id,req.body)
          res.status(200).send({"msg":"Product updated successfully"})
       }else{
          res.status(400).send({"msg":"Product id invalid"})
       }
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  })


//SEARCH
cartRouter.get("/search",async(req,res)=>{
    const {q} = req.query
    try {
        const products = await cartModel.find({ title: { $regex: new RegExp(q, "i") } })
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})


/**
 * @swagger
 * /cartProducts/search/{id}:
 *  get:
 *    summary: To get product by id.
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product.
 *         schema:
 *           type: string
 *    tags: [Cart]
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
cartRouter.get("/search/:id",async(req,res)=>{
   const {id} = req.params
   try {
       const products = await produtModel.findOne({_id:id})
       res.status(200).send(products)
   } catch (error) {
       res.status(400).send({"msg":error})
   }
})




module.exports = {cartRouter}