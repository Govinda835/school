const mongoose = require("mongoose")
const { type } = require("os")
const blogSchema = new mongoose.Schema({
    Name : {
        type : String,
        require : true,
        unique : true,
    },
    Class : {
        type : Number,
        require : true,
    },
    rollNo : {
        type : Number,
        require : true,
    },


})


const Blog = mongoose.model("Blog",blogSchema)

module.exports={
    Blog
}

