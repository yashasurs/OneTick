import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, enum: ['Student', 'Faculty', 'Admin'],
        required: true
    },
    department: {
        type: String
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }] 
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
export default User;