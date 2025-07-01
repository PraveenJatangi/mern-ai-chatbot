import   jwt  from 'jsonwebtoken';


 export const  verifyToken= async(req, res,next)=> {
  const token = req.cookies["ai-cookie"]
  if (!token) return res.status(401).json({ msg: 'No token found' });
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET||"praveen1");
    console.log("from backend middleware req.user:",user);
    req.user = user;
    next();

  } catch {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
}


