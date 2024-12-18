import express from "express";
import config from "config"


const app = express();

const PORT = config.get("PORT")

app.get("/sam",(req,res)=>{
    try {
        res.status(200).json("HELLO");
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`server is started ${PORT}`);
})

