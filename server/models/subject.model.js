import mongoose from 'mongoose';

const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    department: {
        type: String,
        required: true
    }
});

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;