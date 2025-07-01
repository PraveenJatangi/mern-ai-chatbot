import dotenv from 'dotenv';
dotenv.config();
import  jwt from 'jsonwebtoken';
const secret= process.env.JWT_SECRET;
function createJsonToken(user){
 const payload={
    id:user._id,
    email:user.email,
    userName:user.UserName
 }
 const token=jwt.sign(payload,secret,{expiresIn:"7d"});
 return token;
}


export{createJsonToken};