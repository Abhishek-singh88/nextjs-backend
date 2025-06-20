import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:string,
        required: [true,"please provide username"],
        unique: true
    },
    email:{
        type:string,
        required: [true,"please provide an email"],
        unique: true
    },
    password:{
        type:string,
        required: [true,"please provide username"]
    },
    isVerified:{
        type:boolean,
        default:false
    },
    isAdmin:{
        type:boolean,
        default:false
    },
    forgotPasswordToken:string,
    forgotPasswordTokenExpiry:Date,
    verifyToken:string,
    verifyTokenExpiry:Date

})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User