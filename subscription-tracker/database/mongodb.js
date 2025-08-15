import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";
if(!DB_URI){
    throw new Error("Please won't you provide DB_URI in the .env.local")
}
const connectToDatabase = async() =>{
    try {
        await mongoose.connect(DB_URI)
        console.log("Running")
    } catch (error) {
        console.error("Error connecting to datadbase",error)
        process.exit(1)
    }
}

export default connectToDatabase