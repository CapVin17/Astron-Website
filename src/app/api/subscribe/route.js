import dbConnect from "@/lib/dbConnect";
import User from "@/model/userModel";

export async function POST(req){
    await dbConnect();
    const {name, email} = await req.json();

    try {
        const isRegistered = await User.findOne({email});
        if(isRegistered){
            return new Response(JSON.stringify({ message: 'Already Subscribed' }), { status: 400 });
        }
        const newUser = new User({name, email});
        await newUser.save();
        return new Response(JSON.stringify({ message: 'Subscribed' }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}