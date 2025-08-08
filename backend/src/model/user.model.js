import mongoose from "mongoose"



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        lowercase: true,
        trime: true,

    },
    email: {
        type: String,
        require: true,
        unique: true,
        trime: true,
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    }
},{
    timestamps:true
})


export const UserModel = mongoose.model("User",userSchema)