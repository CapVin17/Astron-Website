// import dbConnect from "@/lib/dbConnect";
// import Blog from "@/model/blogModel";

// export async function POST(req){
//     await dbConnect();
//     const {email, description, title, fileImg, createdAt, coverImg } = req.json();

//     try {
//         const isWriter = req.user._id == email;
//         if(!isWriter){
//             return new Response(JSON.stringify({ message: 'You are not the author' }), { status: 400 });
//         }

//         const existingBlog = Blog.findOne({title});
//         if(!existingBlog){
//             return new Response(JSON.stringify({ message: 'No such blog' }), { status: 400 });
//         }

//         existingBlog.title = title
//         existingBlog.description = description
        
        
//     } catch (error) {
//         return new Response(JSON.stringify({ message: 'Internal Error' }), { status: 500 });
//     }
// }