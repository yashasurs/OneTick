import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const port= process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/mydatabase')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });