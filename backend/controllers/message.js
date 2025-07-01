
import User from '../models/user.js';
//import Conversation from "../models/conversation.js";
import  groqConfig  from "../services/aiservices.js";

export const generateChatCompletion = async (req, res) => {
  try {
    const {message} = req.body;
   if (!message) return res.status(400).json({ msg: 'Message required' });

  const user = await User.findById(req.user.id)
   if(!user){
     return res.status(401).json({message:"user not regidtred or token not found"});
   }

  // push user message into database (optional can wait till grok replies);
  
    const chats = [];
    chats.push({ role: 'user', content: message });
    user.chats.push({ role: 'user', content: message });

  const chatResponse = await groqConfig.chat.completions.create({
    model:"llama3-8b-8192",
    messages:chats,
  });

  const aiReply = chatResponse.choices[0].message.content.trim();
  
  user.chats.push({ role: 'assistant', content: aiReply });
  
  await user.save();

                          
  res.status(200).json({  reply: aiReply, chats:user.chats});
  } catch (err) {
    if (err.status === 429) {
    const retryAfter = 80 * 1000; 
    console.warn("Rate limit hit. Retrying after", retryAfter / 1000, "seconds...");
    setTimeout(() => handleSubmit(), retryAfter); }
    else{
    console.error("Other error:", err);}
  
  }
};
