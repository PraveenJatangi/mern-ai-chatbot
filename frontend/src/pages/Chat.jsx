import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from "react-icons/fa";
import { useAuth } from '../contecxt/AuthContext';

export default function ChatBox() {

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

  return (
     <div className="w-screen h-[calc(100vh-70px)] overflow-y-auto bg-[#0f172a] text-white flex">
      
      <div className="w-72 min-w-[18rem] bg-[#112031] rounded-lg shadow-lg m-4 p-6 flex flex-col items-center">
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
        <button className="mt-auto bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold py-2 px-4 rounded">
          CLEAR CONVERSATION
        </button>
      </div>

      <main className="flex-1 relative flex flex-col items-center">
       
        {/* Page heading */}
        <h1 className="text-4xl font-bold mt-5">Model‑GPT3.5 Turbo</h1>

        {/* (Chat messages would go here) */}
        <div className="flex-1 w-full mt-20 px-10 text-white space-y-3">
  {thread.map((msg, idx) => (
    <div
      key={idx}
      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <p
        className={`inline-block ${
          msg.role === 'user'
            ? 'bg-gray-400 border border-blue-300 text-black'
            : ' text-white'
        } px-4 py-2 ml-20 mr-20 rounded-md text-sm`}
      >
        {msg.content}
      </p>
    </div>
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
