const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

userRouter.get("/", (req, res) => {
  res.send("welcome");
});

/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: name.
 *         email:
 *           type: string
 *           description: email of user/admin.
 *         password:
 *           type: string
 *           description: password of user/admin.
 *         age:
 *           type: integer
 *           description: age of user/admin.
 *         location:
 *           type: string
 *           description: location of user/admin.
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
 *     LogResult:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: message
 *           example: User logged in Succesfully.
 *         token:
 *           type: string
 *           description: token
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
 */

/**
 * @swagger
 * /users/register:
 *  post:
 *    summary: To post details of new user/admin.
 *    tags: [Users]
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/NewUser' 
 *    responses:
 *     200:
 *       description: The user was successfully registered
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/LogResult'
 *     500:
 *       description: Bad Request      
 */

userRouter.post("/register", async (req, res) => {
  const { name, email, password, location, age } = req.body;
  try {
    const emailcheck = await userModel.findOne({ email });
    if (emailcheck) {
      res.send({ msg: "email already used" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new userModel({
          name,
          email,
          password: hash,
          location,
          age,
        });
        await user.save();
        res.status(200).send({ msg: "Registration successfull" });
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});




/**
 * @swagger
 * /users/login:
 *  post:
 *    summary: To post credentials of new user/admin.
 *    tags: [Users]
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *            $ref: '#/components/schemas/LogReq' 
 *    responses:
 *     200:
 *       description: user logged in successfully
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/LogResult'
 *     500:
 *       description: Bad Request      
 */


userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "login successfull",
            token: jwt.sign({ userID: user._id }, process.env.secret_code),
          });
        } else {
          res.status(400).send("wrong credential");
        }
      });
    } else {
      res.status(400).send({ msg: "No user exist" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { userRouter };
