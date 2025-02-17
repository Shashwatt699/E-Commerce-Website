import orderModel from "../models/orderModel.js"
import userModel from './../models/userModel.js';

{/* Placing order using COD Method */ }
const PlaceOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} }) //To clear the cart data after payment

        res.json({ success: true, message: "Order Placeed" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

{/* Placing order using Stripe Method */ }
const PlaceOrderStripe = async (req, res) => {

}

{/* Placing order using RazorPay Method */ }
const PlaceOrderRazorpay = async (req, res) => {

}

// All orders data for Admin Panel
const allOrders = async (req, res) => {

}

// User Order Data for Frontend
const userOrders = async (req, res) => {

    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success: true , orders})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {

}

export { PlaceOrder, PlaceOrderStripe, PlaceOrderRazorpay, allOrders, userOrders, updateStatus }