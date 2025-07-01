import {Router } from 'express';

import  userRoutes from './user.js';
import  chatRouter from './message.js';

const appRouter=Router();


appRouter.use('/user',userRoutes);// domain/api/v1/user
appRouter.use('/chat',chatRouter); //domain//api/v1/message

export default appRouter;