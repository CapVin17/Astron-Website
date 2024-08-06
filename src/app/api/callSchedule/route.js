import dbConnect from "@/lib/dbConnect";
import Contact from "@/model/contactSchedule";

export async function POST(req){
    await dbConnect();
    const {name, email, reason, date} = req.json();
    try {
        const isRegistered = Contact.findOne({email});
        if(isRegistered){
            return new Response(JSON.stringify({ message: 'Call already scheduled' }), { status: 400 });
        }

        const newContact = new Contact({name, email, reason, date});
        await newContact.save();
        return new Response(JSON.stringify({ message: 'Contact Saved' }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}