import dotenv from "dotenv";
dotenv.config({ path : "./env" });
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });