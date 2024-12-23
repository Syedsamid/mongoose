import express from "express"
import userModel from "../../models/Users/index.js";

const router = express.Router()


router.get("/getallusers",async(req,res)=>{
    try {
        console.log("GEt all users");

        let allUsers = await userModel.find({})
        res.status(200).json(allUsers)

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"user data added"})
    }
})


router.get("/getone/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        let getOneData = await userModel.find({_id:userId})
        res.status(200).json(getOneData)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"user id"})
    }
})


router.post("/register",async(req,res)=>{
    try {
        console.log("Add Register");
        let userData = req.body;
        console.log(userData);
        await userModel.create(userData);
        res.status(201).json({msg: "Users added Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.put("/updateone/:id",async(req,res)=>{
    try {
        console.log("hello");
        let userId = req.params.id;
        let userData = req.body;
        await userModel.updateOne({_id:userId},{$set:userData})
        res.status(200).json({msg:"User updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteone/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        await userModel.deleteOne({_id:userId})
        res.status(200).json({msg:"user deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"user data added"})
    }
})

router.delete("/deleteuserall",async(req,res)=>{
        try {
            let userData = await userModel.deleteMany({})
        console.log(userData);
        res.status(200).json({msg:"all the user deleted"})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: error})
        }
    })




export default router


//! method 2

// router.post("/registerUser",async(req,res)=>{
//     try {
//         let userData = req.body;
//         console.log(userData);

//         // insertOne      
//         await userModel.create(userData)
//         res.status(200).json({mes:"registed user succesfully "})

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })

// router.put("/updateuser",async(req,res)=>{
//     try {
//         let userData = req.body;
//         console.log(userData);

//          await userModel.updateOne(
//             { email: "suhailbhai@gmail.com" },
//             { $set: { firstname: "Ali" } }
//           );
//           res.status(200).json({msg:"user update sussfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })

// router.delete("/deleteuserOne",async(req,res)=>{
//     try {
//         let userData = req.body;
//         console.log(userData);

//         await userModel.deleteOne({
//             firstname: "Ali",
//           });
//           res.status(200).json({msg:"user delete sussfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })


// router.delete("/deleteuserMany",async(req,res)=>{
//     try {
//         let userData = req.body;
//         console.log(userData);

//         await userModel.deleteMany();
//           res.status(200).json({msg:"user delete sussfully"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })


// router.post("/bulkregister",async(req,res)=>{
//     try {
//         let userData = req.body;
//         console.log(userData);

         
//         await userModel.create(userData)
//         res.status(200).json({mes:"registed user succesfully "})

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: error})
//     }
// })

