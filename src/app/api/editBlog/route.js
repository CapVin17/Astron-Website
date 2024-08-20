// import dbConnect from "@/lib/dbConnect";
// import Blog from "@/model/blogModel";

export async function PUT(req) {
    await dbConnect();
    const { id, title, email, description, coverImg } = await req.json();

    try {
        // Find the blog by ID
        const blog = await Blog.findById(id);
        if (!blog) {
            return new Response(JSON.stringify({ message: 'Blog not found' }), { status: 404 });
        }

        // Check if the email matches the author of the blog
        if (blog.email !== email) {
            return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 403 });
        }

        // Update the blog details
        blog.title = title || blog.title;
        blog.description = description || blog.description;
        blog.coverImg = coverImg || blog.coverImg;

        await blog.save();
        return new Response(JSON.stringify({ message: 'Blog updated' }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}
