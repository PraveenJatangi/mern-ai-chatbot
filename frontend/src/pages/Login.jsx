import React, { useState } from 'react'
import { CgLogIn, CgPassword } from "react-icons/cg";
import {useAuth} from '../contecxt/AuthContext'
import toast from 'react-hot-toast';


export default function login() {
  const auth = useAuth();

 const [formData, setFormData]=useState({
    email:'',
    password:''
 });
  const handleChange=(e)=>{
        setFormData((prev)=>({
               ...prev,
               [e.target.name]:e.target.value
        }));
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      toast.loading("signin in ",{id:"login"})
       await auth?.login(formData)
       toast.success("signed in",{id:"login"})   
    } catch (error) {
       console.log(error);
       toast.error("Signin falied ",{id:"login"})
    }

  }
 return (
    <div className="min-h-screen flex flex-col md:flex-row bg-transparent">
      
      {/* Left Section - Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src="pngwing.com.png"
          alt="robot"
          className="w-100  hidden md:block mt-8 ml-8" 
        />
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-8  ">
        <div className="w-full max-w-md shadow-2xl  p-2  bg-gray-500 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name='password'
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2  bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
            >
              Login <CgLogIn size={20} />
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
