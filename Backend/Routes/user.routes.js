const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config()

userRouter.get("/", (req, res) => {
  res.send("welcome");
});

userRouter.post("/register", async (req, res) => {
  const {name, email, password, location, age } = req.body;
  try {
const emailcheck= await userModel.findOne({email})
if(emailcheck){
res.send({ msg: "email already used"})
}else{

    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new userModel({name, email, password: hash, location, age });
      await user.save();
      res.status(200).send({ msg: "Registration successfull" });
    });
  }

  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "login successfull",
            token: jwt.sign({ userID: user._id}, process.env.secret_code),
          });
        } else {
          res.status(400).send("wrong credential");
        }
      });
    }else{
      res.status(400).send({"msg":"No user exist"});
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});



module.exports = { userRouter };
