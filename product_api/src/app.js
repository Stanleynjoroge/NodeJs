import express from 'express'; 
import dotenv from 'dotenv';
import userRouter from './utils/resource/user.signup.js';

import loginRouter from  './utils/resource/user.login.js'

dotenv.config();

const app = express(); 

app.use(express.json()); 

const port = process.env.PORT || 5000; 
app.get('/',(req, res)=>{
    res.send('pls work')
})

app.use('/register', userRouter);
app.use('/login' ,loginRouter)




app.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`);
});
