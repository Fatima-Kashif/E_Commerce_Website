const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Health check
app.get("/", (req, res) => {
  res.json({ service: "Order Service", status: "running", port: 4001 });
});

// CREATE ORDER
app.post("/orders", async (req, res) => {
  const { items, subtotal, billing } = req.body;

  if (!items || !subtotal) {
    return res.status(400).json({ error: "items and subtotal are required" });
  }

  const { data, error } = await supabase
    .from("orders")
    .insert([{ 
      user_id: billing?.email || "guest",
      items, 
      subtotal, 
      billing, 
      status: "pending" 
    }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: "Order created", order: data });
});

// GET ORDERS BY EMAIL
app.get("/orders/email/:email", async (req, res) => {
  const { email } = req.params;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("billing->>email", email)
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.json({ orders: data });
});

// GET ORDERS BY USER ID (keep for backward compatibility)
app.get("/orders/:userId", async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.json({ orders: data });
});

// GET SINGLE ORDER
app.get("/orders/single/:orderId", async (req, res) => {
  const { orderId } = req.params;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (error) return res.status(404).json({ error: "Order not found" });

  res.json({ order: data });
});

// UPDATE ORDER STATUS
app.patch("/orders/:orderId/status", async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const validStatuses = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", orderId)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Order status updated", order: data });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));