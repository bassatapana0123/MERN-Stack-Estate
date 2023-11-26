import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
    },
},{timestamps: true});  

const User = mongoose.model('User', userSchema);

export default User;
