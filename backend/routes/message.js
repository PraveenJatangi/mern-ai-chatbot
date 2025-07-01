import {Router} from 'express';
import {generateChatCompletion} from '../controllers/message.js'
import { verifyToken } from '../middleware/auth.js';

const chatRouter= Router();
chatRouter.post('/new',verifyToken,generateChatCompletion);

export default chatRouter;