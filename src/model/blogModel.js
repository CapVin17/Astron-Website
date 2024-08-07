import mongoose from "mongoose";
import Admin from "./adminModel";

const blogSchema= new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    
    author:{
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

    user:{
        type: Admin,
        require: true
    }
    
    
    
},{timestamps})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;