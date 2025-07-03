import {Router} from 'express';
import {generateChatCompletion,sendAllChats,deleteAllChats} from '../controllers/message.js'
import { verifyToken } from '../middleware/auth.js';

const chatRouter= Router();
chatRouter.post('/new',verifyToken,generateChatCompletion);
chatRouter.get('/all-chats',verifyToken,sendAllChats);
chatRouter.delete('/delete-chats',verifyToken,deleteAllChats);

export default chatRouter;