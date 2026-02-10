import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected")
    }
    catch(error){
        console.error("MongoDb connection error:",error);
        process.exit(1);
    }
}