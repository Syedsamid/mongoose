import express from "express"
import userModel from "../../models/Users/index.js";

const router = express.Router()

router.post("/registerUser",async(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);

        // insertOne      
        await userModel.create(userData)
        res.status(200).json({mes:"registed user succesfully "})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.put("/updateuser",async(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);

         await userModel.updateOne(
            { email: "suhailbhai@gmail.com" },
            { $set: { firstname: "Ali" } }
          );
          res.status(200).json({msg:"user update sussfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

router.delete("/deleteuserOne",async(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);

        await userModel.deleteOne({
            firstname: "Ali",
          });
          res.status(200).json({msg:"user delete sussfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


router.delete("/deleteuserMany",async(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);

        await userModel.deleteMany();
          res.status(200).json({msg:"user delete sussfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


router.post("/bulkregister",async(req,res)=>{
    try {
        let userData = req.body;
        console.log(userData);

         
        await userModel.create(userData)
        res.status(200).json({mes:"registed user succesfully "})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

export default router