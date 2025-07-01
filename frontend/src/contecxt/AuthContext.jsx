import { useEffect,useState,useCallback } from "react";
import { createContext,useContext } from "react";
import {loginUser,checkAuthStatus} from '../helper/api-communication'


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

  const login = useCallback(async (credentials) => {
     const data = await loginUser(credentials);
     if(data){
     setUser(data);
     setLoading(true);
     }
  }, []);

  const value = { user, loading ,login };

  return (
    <AuthContext.Provider value={value}>
     {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}