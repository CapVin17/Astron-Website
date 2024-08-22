import mongoose from "mongoose";

const contacttwoSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    
    email:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    }
    
    
})

const ContactTwo = mongoose.models.ContactTwo || mongoose.model('ContactTwo', contacttwoSchema);

export default ContactTwo;