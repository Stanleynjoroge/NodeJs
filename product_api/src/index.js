
// here is quick way to get started with prisma methods


// import express from 'express'

// app.use(express.json())

// dotenv.config()

// const app= express();
// const port= process.env.PORT ?? 3306 ;
// app.listen(port, (req, res)=>{
//     console.log(`Server is running on port ${port}`)
// })

// const { PrismaClient } = require('@prisma/client')
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const main = async () => {
  // ... you will write your Prisma Client queries here

  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })
//   await prisma.user.create({
    
//         data: {
//                 name:'Stanley',
//                 email:'njorogestanley@gmail.com',
//                 posts: {
//                   create: { title: 'My coding life',
//                     content: "This is my first post"
//                 },
//                 },
//                 profile: {
//                   create: { bio: 'coding is good' },
//                 },
//               },
            
//   });
//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allUsers, { depth: null })
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   });
//   console.log(post);

//  more prisma methods can be found here : https://www.prisma.io/docs/reference/api-reference/prisma-client-reference
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const main = async () => {

// await prisma.user.update({
//   data:{
//     username:"Stanley",
//     email:"stanley@gmail.com",
//     password:"",
//     role:"ADMIN",

    
//   }

// })

// const user = await prisma.user.findUnique({
//   where: {email: "stanley@gmail.com"}
// });
// console.log("User: ", user)
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });


