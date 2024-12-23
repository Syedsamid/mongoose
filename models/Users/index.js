import mongoose from "mongoose";

// in models you have only scehma

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
  },
});

// 3 params (customName, schemaVariableName, collectionname)
const userModel = mongoose.model("User", userSchema, "users");

export default userModel;
