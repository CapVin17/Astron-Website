// import dbConnect from "@/lib/dbConnect";
// import Admin from "@/model/adminModel";
// import Blog from "@/model/blogModel";

// export async function POST(req){
//     await dbConnect();
//     const {email, description, title, fileImg, createdAt, coverImg } = req.json();

//     try {
//         const isAdmin = await Admin.findOne({email});
//         if(!isAdmin){
//             return new Response(JSON.stringify({ message: 'Unauthorised ' }), { status: 400 });
//         }

//         const exDesc = await Blog.findOne({title});
//         if(exDesc){
//             return new Response(JSON.stringify({ message: 'Already existing title' }), { status: 400 });
//         }

//         const newBlog = new Blog({description, title, fileImg, createdAt, email, coverImg})
//         await newBlog.save();
//         return new Response(JSON.stringify({ message: 'Blog saved' }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ message: 'Internal Error' }), { status: 500 });
//     }
// }