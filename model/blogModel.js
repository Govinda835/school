const mongoose = require("mongoose")
const { type } = require("os")
const { stringify } = require("querystring")
const blogSchema = new mongoose.Schema({
    Name : {
        type : String,
    },
    Class : {
        type : String,
    },
    rollNo : {
        type : Number,
    },
    image : {
        type : String,
    }

})


const Blog = mongoose.model("Blog",blogSchema)

module.exports={
    Blog
}

