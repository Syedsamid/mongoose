import express from "express"

const router = express.Router()
router.post("/registeradmin",(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);
        res.status(200).json(userData)

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

export default router