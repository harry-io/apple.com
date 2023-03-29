const jwt=require("jsonwebtoken")
require("dotenv").config()
const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,process.env.secret_code)
        if(decode){
            req.body.userID=decode.userID
            next()
        }else{
            res.status(400).send({"msg":"please login first"})
        }
    }else{
        res.status(400).send({"msg":"please login first"})
    }
}
module.exports={auth}