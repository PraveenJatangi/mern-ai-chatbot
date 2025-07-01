import axios from 'axios'
export const loginUser =async (credentails)=>{
   const res = await axios.post("/user/login",credentails,{withCredentials: true});
   if(res.status!==200){
    throw new Error("unable to login");
   }
   const data= res.data;
   return data;
}
export const checkAuthStatus =async ()=>{
   const res = await axios.get("/user/auth-status");
   console.log("checkAuth from api - com data",res)
   if(res.status!==200){
    throw new Error("unable to authenticate");
   }
   const data= res.data;
   return data;
}