import axios from 'axios'

export const loginUser =async (credentails)=>{
  
   const res = await axios.post("/user/login",credentails,{withCredentials: true});
   if(res.status!==200){
    throw new Error("unable to login");
   }
   const data= res.data;
   
   return data;
}
export const signupUser =async (credentails)=>{
   console.log('credentials from sign:',credentails);
   const res = await axios.post("/user/signup",credentails,{withCredentials: true});
   
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

export const getAllChats =async ()=>{
   const res = await axios.get("/chat/all-chats");
   if(res.status!==200){
    throw new Error("unable to get chats");
   }
   const data= res.data;
   return data;
}

 export const logout = async () => {
 
    try {
      await axios.post('/user/logout');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

export async function deleteChats(){
   const res = await axios.delete('/chat/delete-chats');
   if(res.status !== 200) throw new Error("unable to delete chat");
   const data = res.data;
   return data;
}