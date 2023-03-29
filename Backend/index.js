const express=require("express")
const {connection}=require("./db")
const app=express()
app.use(express.json())

app.get("",(req,res)=>{
    res.send("this is testing")
})



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.port} `)
})

