import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    
    email:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    profilePic:{
        type: String,
        require: true
    },
    
    
    
},{timestamps})

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;