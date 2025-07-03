import React from 'react';
import { motion } from 'framer-motion';
import{ TypingAnimation} from '../components/typeAnimation/Type'
export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-72px)]  flex justify-end   md:flex-row bg-[#0f172a] text-white ">
      <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center mb-10 justify-center">
        <motion.img
          src="pngwing.com.png"
          alt="robot"
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-100 hidden md:block mt-8 ml-4"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center px-6 py-1 mb-20">
        <motion.div
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-center md:text-left"
        >
          < TypingAnimation/>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-500">MERN AI Chat Bot</span>
          </h1>
          <p className="text-lg text-gray-300  ">
            Your intelligent assistant powered by MongoDB, Express, React, and Node.js.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
