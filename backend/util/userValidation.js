import {body,validationResult} from 'express-validator';

const validate=(validations)=>{
     return async(req,res,next)=>{
        for(let validation of validations){
           await validation.run(req)
        }
         const error=validationResult(req);
         if(error.isEmpty()){
             return next();
         }  
          return res.status(422).json({error:error.array()})
        
     }
}

export const signupValidation=[
    body('userName').notEmpty().withMessage("name should not be empty"),
    body('email').notEmpty().trim().isEmail().withMessage("enter a valid email"),
    body('password').notEmpty().isLength({min:6}).withMessage("password should be more than 6 chars"),
];


export default validate;