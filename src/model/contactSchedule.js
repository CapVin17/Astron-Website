import mongoose from "mongoose";

const contactSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    
    email:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    option:{
        type: String,
        require: true
    }
    
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;