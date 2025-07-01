import  mongoose from 'mongoose'; 
const ConnectDB= async()=>{
try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB is connected")
}
catch(error){
  console.log(error);
  throw new Error("cannot conect to mongodb")
}
}

export default ConnectDB;