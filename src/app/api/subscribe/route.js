import dbConnect from "@/lib/dbConnect";

export async function POST(req){
    await dbConnect();
    const {name, email} = await req.json();

    try {
        const isRegistered = await User
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}