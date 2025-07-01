import mongoose from 'mongoose';
import{randomUUID} from 'crypto';


const chatSchema=mongoose.Schema({
  id:{type:String,default:randomUUID()},
  role:{type:String,require:true},
  content:{type:String, required:true}
});

const userSchema= mongoose.Schema({
    userName:{  type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String,required:true},
    chats:[chatSchema]
  
},{Timestamps:true})

const User = mongoose.model('User', userSchema);
export default User;