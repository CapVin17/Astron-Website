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
    coverImg:{
        type :String,
        require: true
    }

    
    
    
},{timestamps: true})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;