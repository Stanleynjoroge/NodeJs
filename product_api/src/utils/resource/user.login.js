import express from 'express';
import { generateToken,comparePassword} from '../auth.js';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();


router.post('/', async(req,res)=>{
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: "Username and password are required" });
        }
        const loginUser= await prisma.user.findUnique({
            where:
            {username: req.body.username}
        });
        if(!loginUser){
            throw new Error("User not found");
        }

        const isValid = await comparePassword(req.body.password, loginUser.password);
        console.log(isValid);
     if (!isValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

            // Generate JWT token for user.Remember tokens are stored in sessions using cookies👌🍪 
            const token = generateToken(loginUser);

            // Return token and user details
            res.status(200).json({token,loginUser});
            console.log('Login successful:'+loginUser.username);//try sending 'Nganga' '123456' 😊
      
    } catch (error) {
        console.log('Error in GET /src/user.login.js');
        console.error(error);
        return res.status(500).json({message:'Internal Server Error'});
    }finally{
        await  prisma.$disconnect();// this is to help prisma disconnect peacefully🤣🤣🤣
    }
})
export default router;