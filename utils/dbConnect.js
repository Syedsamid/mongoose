import mongose from "mongoose"
import config from "config"
import mongoose from "mongoose";

async function dbConnect(){
    try {
        let DB_URL = config.get("DB_URL")
        await mongoose.connect(DB_URL)
        console.log("database added successfully");
    } catch (error) {
        console.log(error);
    }
}
dbConnect()