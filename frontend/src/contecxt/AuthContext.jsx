import { useEffect,useState,useCallback } from "react";
import { createContext,useContext } from "react";
import {loginUser,checkAuthStatus,signupUser,logout} from '../helper/api-communication'


const AuthContext= createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); 

 useEffect(()=>{
   async function chechAuth(){
      const data = await checkAuthStatus();
      console.log( 'useEffect',data)
      if(data){
        setUser(data);
        setLoading(true); 
      }
   }
   chechAuth();
 },[]);

  const login = useCallback(async (credentials,navigate) => {
     const data = await loginUser(credentials);
     if(data){
     setUser(data);
     setLoading(true);
     }
  }, []);

    const signup = useCallback(async (credentials) => {
     const data = await signupUser (credentials);
     if(data){
     setUser(data);
     setLoading(true);
     }
  }, []);

      const logoutUser = useCallback(async () => {
     await logout();
     setUser(null);
     setLoading(false);
     
  }, []);

  const value = { user, loading ,login ,signup,logoutUser};

  return (
    <AuthContext.Provider value={value}>
     {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}