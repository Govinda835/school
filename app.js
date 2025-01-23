require("dotenv").config()
const express = require("express")
const { connectToDatabase } = require("./database")
const { Blog } = require("./model/blogModel")

const {multer, storage } = require("./middleware/multerConfig")
//const { MulterError } = require("multer")

const upload = multer({ storage : storage})

const app = express()


connectToDatabase()

app.use(express.json())

app.get("/home",(req,res)=>{
    res.status(200).json({
        message : "This is a home page of the server...."
    })
})




app.post("/blog", upload.single("image"), async (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const {Name, Class, rollNo} = req.body
    const filename = req.file.filename
      
   await Blog.create({
        Name : Name,
        Class : Class,
        rollNo : rollNo,
        image : filename
    })

    res.status(200).json({
        message : "api hit successfull"
    })
})

app.get("/blog",async (req,res)=>{
    const blog = await Blog.find()
    res.status(200).json({
        message : "Blog api fetched successfully.... ",
        datas : blog
    })
})
app.use(express.static("./storage"))


app.listen(process.env.PORT, ()=>{
    console.log("The server is running in port number 5000...")
})
