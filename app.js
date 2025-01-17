require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const { Blog } = require("./model/blogModel")

const app = express()

connectToDatabase()

app.use(express.json())

app.get("/home",(req,res)=>{
    res.status(200).json({
        message : "This is a home page of the server...."
    })
})


app.post("/blog",(req,res)=>{
    // console.log(req.body)
    const {Name, Class, rollNo} = req.body
    
    if (!Name)
    {
        res.status(200).json({
            message : "Please enter the name ..."
        })
    }

    Blog.create({
        Name : Name,
        Class : Class,
        rollNo : rollNo
    })

    res.status(200).json({
        message : "api hit successfull"
    })
})


app.listen(process.env.PORT, ()=>{
    console.log("The server is running in port number 5000...")
})
