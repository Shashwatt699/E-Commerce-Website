import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 10000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
const corsOptions = {
    origin: "https://e-commerce-website-frontend-0ofq.onrender.com", // Specify your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // If you need to include credentials (like cookies)
};

app.use(cors(corsOptions));

// Api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    console.log("helloo");

    res.send("API Working")
})

app.listen(port, () => console.log('Server Started on PORT : ' + port))