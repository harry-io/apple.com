const mongoose=require("mongoose")
require("dotenv").config()


let connection=mongoose.connect(process.env.mongoURL)



module.exports={connection}