import express from "express"
import config from "config"

import "./utils/dbConnect.js"
import userRouter from "./controllers/users/index.js";
import adminsRouter from "./controllers/admins/index.js"


const app = express()

const PORT = config.get("PORT")

app.use(express.json())

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello howld"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/users",userRouter)
app.use("/admins",adminsRouter)

app.listen(PORT,()=>{
    console.log(`Server is running  ${PORT}`);
})