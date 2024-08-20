import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/blogModel";

export async function POST(req){
    await dbConnect();
    const {title, email, description, coverImg} = req.json();

    try {
        const blogDb = await Blog.findOne({title});
        if(blogDb){
            return new Response(JSON.stringify({ message: 'Please change the title' }), { status: 400 });
        }

        const newBlog = new Blog({title, email, description, coverImg});
        await newBlog.save();
        return new Response(JSON.stringify({ message: 'Blog saved' }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }

    
}