import mongoose from "mongoose";

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    
    email:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    fileImg:{
        type: String,
    },

    
    
    
},{createdAt: timestamps})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;