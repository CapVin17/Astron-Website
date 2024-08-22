import dbConnect from "@/lib/dbConnect";
import ContactTwo from "@/model/contactModeltwo";

export async function POST(req){
    await dbConnect();
    const {name, email, message} = req.json();

    try {
        if(!email){
            return new Response(JSON.stringify({ message: 'Please enter Email' }), { status: 400 });
        }
        if(!message){
            return new Response(JSON.stringify({ message: 'Please enter message' }), { status: 400 });
        }

        const newContact = new ContactTwo({name, email, message})
        await newContact.save();
        return new Response(JSON.stringify({ message: 'We will contact you shortly' }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}