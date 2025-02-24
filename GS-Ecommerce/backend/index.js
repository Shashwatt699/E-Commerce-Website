import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

// App Config
const app = express();
const port = process.env.PORT || 10000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

const allowedOrigins = [
  "https://e-commerce-website-frontend-0ofq.onrender.com",
  "https://ecom-admin-panel-g6ke.onrender.com"
];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
};

app.use(cors(corsOptions));

// Serve static files from the frontend build folder
const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the current directory's path
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the 'build' folder

// Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    console.log("helloo");
    res.send("API Working");
});

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log('Server Started on PORT : ' + port));