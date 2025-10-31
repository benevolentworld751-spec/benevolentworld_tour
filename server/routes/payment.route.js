import express from "express";
import  createPaymentIntent  from "../controllers/payment.controller.js";

const router = express.Router();

// Route for creating payment intent (Stripe)
router.post("/create-payment-intent", createPaymentIntent);

export default router;
