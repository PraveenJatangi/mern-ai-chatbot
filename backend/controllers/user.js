import  User from '../models/user.js';
import {createJsonToken} from '../services/jwtToken.js';
import {hash,compare} from 'bcrypt';

async function getAllUsers (req,res,next){
     try{
      const users= await User.find();
     return res.status(200).json({message:"got all users",users})
     }catch(error){
       console.log(error);
       return res.status(200).json({message:"error occured in getallusers",error})
     }
}
async function handleUserSignUp(req,res){
     const {userName,email,password}=req.body;
     const hashedPassword= await hash(password,10);
       try{
        const user= await User.create({userName,email,password:hashedPassword});
         const token= createJsonToken(user);
             res.cookie('ai-cookie', token, {
              httpOnly: true,
              sameSite: 'Lax',
              maxAge: 24 * 60 * 60 * 1000, 
             });

        res.status(200).json({ message: "User created successfully",token ,user });
       }catch (error) {
         console.error("Signup error:", error); 
         if (error.code === 11000) {
           res.status(400).json({ message: "Email already exists" });
         } else {
           res.status(500).json({ message: "Signup failed", error });
         }
       }
    
}

async function handleUserLogin(req,res){
      const {email,password}=req.body;
      try{
         const user= await User.findOne({email}).lean();
         if(!user){
         return  res.status(401).send("user not not found");  
         }
         console.log("user data",user);
         // check the password 
         const isPasswordCorrect= await compare(password,user.password);
         if(!isPasswordCorrect){
          return res.status(403).send("incorrect pasword")
         }  
         const token= createJsonToken(user);
             res.cookie('ai-cookie', token, {
              httpOnly: true,
                sameSite: 'none',
              secure: true,
              maxAge: 24 * 60 * 60 * 1000, 
             });
             
    return res.status(200).json({message: "User logged in successfully",  token ,user  });    
      }catch(error){
        console.log(error);
        return res.status(500).json({message:"ERROR",cause:error.message});
      }

}
async function verifyAuth(req,res){ 
   try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Account no longer exists' });
    
    if(user.id !==req.user.id) return res.status(404).json({message:"user access got removed "})
    return res.status(200).json(user); 
    
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};
async function logout (req,res){
     res.clearCookie('ai-cookie');
  return res.status(200).json({ message: 'Logged out successfully' });
}

export{handleUserSignUp,handleUserLogin,getAllUsers,verifyAuth,logout};