import dbConnect from "@/lib/dbConnect";
import Blog from "@/model/blogModel";

export async function POST(req){
    await dbConnect();
    const {title, description, coverImg, email} = await req.json();
    try {
        const titleDb = await Blog.findOne({title})
        if(titleDb){
            return new Response(JSON.stringify({ message: 'Please change the title' }), { status: 400 });
        }

        if (!description || description.trim() === "") {
            return new Response(JSON.stringify({ message: 'Content cannot be empty' }), { status: 400 });
        }

        const uploadedImage = await cloudinary.uploader.upload(coverImg, {
            folder: 'blogs',
            resource_type: 'image',
        });

        
        const newBlog = new Blog({
            title,
            email,
            description,
            coverImg: uploadedImage.secure_url 
        });

        await newBlog.save()

        return new Response(JSON.stringify({message:"Blog saved"}),{status:200})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}