import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from "react-icons/fa";
import { useAuth } from '../contecxt/AuthContext';
import ChatItem from '../components/chat/chatitem';
import toast from 'react-hot-toast';
import {getAllChats,deleteChats } from '../helper/api-communication'
import { useNavigate } from 'react-router-dom';


export default function ChatBox() {
  const navigate =useNavigate();
  const auth=useAuth();
  // local state
  const [input, setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const [thread, setThread] = useState([]);  

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setThread((prev) => [...prev, { role: 'user', content: input }]);
    setLoading(true);
    try {
      const res = await axios.post('/chat/new', {
        message: input,
      });

      setThread((prev) => [
        ...prev,
        { role: 'assistant', content: res.data.reply },
      ]);
    } catch (err) {
      console.error(err);
      setThread((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Something went wrong.' },
      ]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };
 const handleDeteleChat= async()=>{
      try {
        toast.loading(" Deleting Chats",{id:"deletingChat"})
         await  deleteChats();
         setThread([]);
         toast.success(' chats deleted',{id:"deletingChat"})
      } catch (error) {
        toast.error("error accoured ",{id:"deletingChat"})
      }
 }

  useEffect(()=>{
    if(auth?.loading &&auth?.user){
      toast.loading("loading chats",{id:"loadChats"});
      getAllChats().then((data)=>{
        setThread([...data.chats]);
        toast.success("chats sucessfull",{id:"loadChats"});
      }).catch((erorr)=>{
        console.log(erorr);
        toast.error("error accured",{id:"loadChats"})
      })
    }
  },[auth]);

   useEffect(()=>{
          if(!auth?.user){
            return navigate('/')
          }
      },[auth])

  return (
     <div className="w-screen h-[calc(100vh-72px)] overflow-y-auto bg-[#0f172a] text-white flex  ">
      
      <div className="hidden md:flex w-72 min-w-[18rem] bg-[#112031] rounded-lg shadow-lg m-4 p-6  flex-col items-center">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center text-2xl font-semibold mb-6">
         {auth?.user?.userName[0]}{auth?.user?.userName[2]}
        </div>

        {/* Info text */}
        <p className="text-sm leading-relaxed mb-8 text-center">
          You are talking to a ChatBOT <br />
          <br />
          You can ask some questions related to Knowledge, Business,
          Advices, Education, etc. But avoid sharing personal information
        </p>

        {/* Clear button (sticks to bottom) */}
        <button onClick={handleDeteleChat} className="mt-auto bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold py-2 px-4 rounded">
          CLEAR CONVERSATION
        </button>
      </div>

      <main className="flex-1 relative flex flex-col items-center">
       
        {/* Page heading */}
        <h1 className="text-4xl font-bold mt-5">Model‑GPT3.5 Turbo</h1>

        {/* (Chat messages would go here) */}
        <div className="flex-1 w-full mt-20 px-4 sm:px-10 overflow-y-auto text-white space-y-3 ">

  {thread.map((msg, idx) => (
    <ChatItem content={msg.content} role={msg.role} key={idx}/>
  ))}
      </div>


        {/* Message input bar */}
        <form
          className="w-[85%] max-w-4xl mb-8"
          onSubmit={handleSubmit}
        >
          <label className="w-full flex items-center bg-[#1e293b] rounded-lg focus-within:ring-2 focus-within:ring-cyan-500">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none py-3 px-4 placeholder:text-slate-400"
            />
            <button type="submit" className="p-3 cursor-pointer">
              <FaPaperPlane size={18} />
            </button>
          </label>
        </form>
       <div>
        {}
       </div>
      </main>
    </div>
  );
}
