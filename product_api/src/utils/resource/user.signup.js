// user.js

import express from 'express';
import { generateToken, hashPassword } from '../auth.js';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Register user route
router.post('/', async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Hash the password
        req.body.password = await hashPassword(req.body.password);

        // Check if the user already exists in the database
        const userExist = await prisma.user.findUnique({
            where: {
                email: req.body.email // Check for existing email only
            }
        });

        if (userExist) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Create the new user
        const newUser = await prisma.user.create({
            data: req.body
            
        });

        // Generate token for the new user
        const token = generateToken(newUser);

        res.header('token', token).status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
    
    
    
    
    
    finally{
        await prisma.$disconnect()
    }   
})



export default router;
