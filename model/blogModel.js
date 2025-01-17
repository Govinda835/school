const mongoose = require("mongoose")
const { type } = require("os")
const blogSchema = new mongoose.Schema({
    Name : {
        type : String,
        require : true,
    },
    Class : {
        type : String,
        require : true,
    },
    rollNo : {
        type : Number,
        require : true,
        unique : true
    },


})


const Blog = mongoose.model("Blog",blogSchema)

module.exports={
    Blog
}

