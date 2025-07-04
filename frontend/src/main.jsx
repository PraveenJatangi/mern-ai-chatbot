import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials=true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <HashRouter>
    <Toaster position='top-right'/>
    <App />
    </HashRouter>
  </StrictMode>
)
