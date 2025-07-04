
//import './App.css'
import Headers from './components/Header' ;
import{Route,Routes}from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Singin';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contecxt/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <Headers/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/chat" element={<Chat/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signin/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthProvider>   
    </>
  )
}

export default App
