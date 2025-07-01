import {Router} from 'express';
const userRouter=Router();

import  {handleUserSignUp,handleUserLogin,getAllUsers,verifyAuth} from '../controllers/user.js';

//midle ware 
import validate, {signupValidation} from '../util/userValidation.js'
import { verifyToken } from '../middleware/auth.js';

userRouter.get('/',getAllUsers); //domain/api/v1/user
userRouter.post('/signup',validate(signupValidation),handleUserSignUp);//domain/api/v1/user/signup
userRouter.post('/login',handleUserLogin); //domain/api/v1/user/login
userRouter.get('/auth-status',verifyToken,verifyAuth);

export default userRouter;