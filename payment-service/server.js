const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: [
    "https://e-commerce-website-beige-rho.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}));
app.use(express.json());


const payments = new Map();

app.get("/", (req, res) => {
  res.json({ service: "Payment Service", status: "running", port: process.env.PORT || 4002 });
});


app.post("/payments/process", (req, res) => {
  const { orderId, amount, currency = "PKR", method = "card" } = req.body;

  if (!orderId || !amount) {
    return res.status(400).json({ error: "orderId and amount are required" });
  }

  const isSuccess = Math.random() > 0.1;

  const payment = {
    id: uuidv4(),
    transactionId: `txn_${uuidv4().replace(/-/g, "").slice(0, 16)}`,
    orderId,
    amount: parseFloat(amount),
    currency,
    method,                       
    status: isSuccess ? "succeeded" : "failed",
    failureReason: isSuccess ? null : "Insufficient funds or card declined",
    createdAt: new Date().toISOString(),
  };

  payments.set(payment.id, payment);

  setTimeout(() => {
    if (payment.status === "failed") {
      return res.status(402).json({
        error: "Payment failed",
        payment,
      });
    }
    res.status(201).json({
      message: "Payment successful",
      payment,
    });
  }, 800);
});

app.get("/payments/:paymentId", (req, res) => {
  const payment = payments.get(req.params.paymentId);
  if (!payment) return res.status(404).json({ error: "Payment not found" });
  res.json({ payment });
});

app.get("/payments/order/:orderId", (req, res) => {
  const result = [...payments.values()].find(
    (p) => p.orderId === req.params.orderId
  );
  if (!result) return res.status(404).json({ error: "No payment found for this order" });
  res.json({ payment: result });
});

app.get("/payments", (req, res) => {
  res.json({ payments: [...payments.values()] });
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));