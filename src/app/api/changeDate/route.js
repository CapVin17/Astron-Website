import dbConnect from "@/lib/dbConnect";
import Contact from "@/model/contactSchedule";

export async function POST(req){
    await dbConnect();
    const {email, name, date, reason} = await req.json();
    try {
        const isRegistered = Contact.findOne({email});
        if(!isRegistered){
            return new Response(JSON.stringify({ message: 'Please register' }), { status: 400 });
        }
        await isRegistered.deleteOne({email, name, date, reason});
        
        const newDateSavior = new Contact({name, email, date,reason })
        await newDateSavior.saved();
        return new Response(JSON.stringify({ message: 'Changes Saved' }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
        
    }
}