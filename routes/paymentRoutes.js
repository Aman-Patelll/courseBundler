import express from "express";
import { authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";
import {
    buySubscription,
    cancelSubscription,
    getRazorPayKey,
    paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

// Verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// Get Razorpay Key
router.route("/razorpaykey").get(getRazorPayKey);

// Cencel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, authorizeSubscribers, cancelSubscription);

export default router;
