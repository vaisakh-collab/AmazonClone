/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const {onRequest} = require("firebase-functions/https");


const express = require("express");
const cors = require("cors");
/* eslint-disable max-len */
const stripe = require("stripe")("process.env.STRIPE_SECRET_KEY");
/* eslint-enable max-len */
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  try {
    const total = request.query.total;

    console.log("Payment Request Received >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // OK- Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe Error:", error);

    response.status(500).send({
      error: error.message,
    });
  }
});

// - Listen command
exports.api = onRequest(app);

// example endpoint
// http://127.0.0.1:5001/e-clone-ada38/us-central1/api
