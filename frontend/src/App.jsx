
//import './App.css'
import Headers from './components/header' ;
import{Route,Routes}from 'react-router-dom';
import Chat from './pages/chat';
import Home from './pages/home';
import Login from './pages/login';
import Signin from './pages/singin';
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
