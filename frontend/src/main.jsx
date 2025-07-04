import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials=true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster position='top-right'/>
    <App />
    </BrowserRouter>
  </StrictMode>
)
