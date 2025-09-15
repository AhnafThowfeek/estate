import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true, 
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,        
    },
    avatar:{
        type: String,
        default:  "https://th.bing.com/th/id/OIP.RKrPgszyZzEt38bVz8yeTQHaHa?w=160&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },

},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;