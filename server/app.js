import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));
app.use(express.json({ limit: '16kb' }));
app.use(urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//routes
import userRoutes from './routes/user.routes.js';


// Use the routes
app.use('/api/v1/users', userRoutes);

export default app;