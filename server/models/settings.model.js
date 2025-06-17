import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
    attendanceThreshold: {
        type: Number,
        default: 75
    }
});

const Settings = mongoose.model("Settings", settingsSchema);
export default Settings;