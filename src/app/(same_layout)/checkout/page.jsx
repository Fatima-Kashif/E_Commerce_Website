"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../lib/store/hooks";
import { clearCart } from "../../../lib/store/features/cart/cart"; // add this action
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ORDER_SERVICE_URL = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL || "http://localhost:4001";
const PAYMENT_SERVICE_URL = process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL || "http://localhost:4002";

const CheckoutForm = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const router = useRouter();

  const [billing, setBilling] = useState({
    firstName: "", lastName: "", company: "",
    country: "Pakistan", city: "", province: "",
    zip: "", phone: "", email: "", notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState(null); // { success, orderId, transactionId }
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBilling((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = async () => {
    if (!user) {
      setError("You must be signed in to place an order.");
      return;
    }
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    if (!billing.firstName || !billing.phone || !billing.city) {
      setError("Please fill in First Name, Phone, and City at minimum.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // ── Step 1: Create order in Order Service ──────────
      const orderRes = await fetch(`${ORDER_SERVICE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          items: cartItems,
          subtotal,
          billing,
        }),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Order creation failed");

      const orderId = orderData.order.id;

      // ── Step 2: Process payment in Payment Service ─────
      const paymentRes = await fetch(`${PAYMENT_SERVICE_URL}/payments/process`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          amount: subtotal,
          currency: "PKR",
          method: paymentMethod,
        }),
      });

      const paymentData = await paymentRes.json();

      if (!paymentRes.ok) {
        // Payment failed — update order status to cancelled
        await fetch(`${ORDER_SERVICE_URL}/orders/${orderId}/status`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "cancelled" }),
        });
        throw new Error(paymentData.payment?.failureReason || "Payment failed");
      }

      // ── Step 3: Confirm order ──────────────────────────
      await fetch(`${ORDER_SERVICE_URL}/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "confirmed" }),
      });

      // ── Step 4: Clear cart ─────────────────────────────
      dispatch(clearCart());

      setOrderResult({
        success: true,
        orderId,
        transactionId: paymentData.payment.transactionId,
      });

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── ORDER SUCCESS SCREEN ───────────────────────────────
  if (orderResult?.success) {
    return (
      <div className="font-custom min-h-[60vh] flex items-center justify-center">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-12 text-center max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Order Placed!</h2>
          <p className="text-gray-500 mb-6">Thank you for shopping with Furniro.</p>
          <div className="bg-[#F9F1E7] rounded-xl p-4 text-left space-y-2 text-sm mb-8">
            <p><span className="text-gray-400">Order ID:</span> <span className="font-mono font-medium">{orderResult.orderId.slice(0, 8)}...</span></p>
            <p><span className="text-gray-400">Transaction:</span> <span className="font-mono font-medium">{orderResult.transactionId}</span></p>
            <p><span className="text-gray-400">Amount:</span> <span className="font-semibold text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span></p>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={() => router.push("/orders")}
              className="border-2 border-black px-6 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition-colors">
              View Orders
            </button>
            <button onClick={() => router.push("/shop")}
              className="bg-[#B88E2F] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#a07828] transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-custom">
      {/* ── BREADCRUMB ─────────────────────────────── */}
      <div className="bg-[#F9F1E7] py-8 px-10">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          <span>Home</span>
          <svg width="6" height="10" viewBox="0 0 8 14" fill="none"><path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#9F9F9F"/></svg>
          <span>Checkout</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* ── LEFT: BILLING FORM ─────────────────────────── */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b">Billing Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">First Name *</label>
              <input name="firstName" value={billing.firstName} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Last Name</label>
              <input name="lastName" value={billing.lastName} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label className="text-sm text-gray-600">Company Name (Optional)</label>
            <input name="company" value={billing.company} onChange={handleChange}
              className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Country</label>
              <select name="country" value={billing.country} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]">
                <option>Pakistan</option>
                <option>Sri Lanka</option>
                <option>United Kingdom</option>
                <option>United States</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Town / City *</label>
              <input name="city" value={billing.city} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Province</label>
              <input name="province" value={billing.province} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">ZIP Code</label>
              <input name="zip" value={billing.zip} onChange={handleChange}
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Phone *</label>
              <input name="phone" value={billing.phone} onChange={handleChange} type="tel"
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Email Address</label>
              <input name="email" value={billing.email} onChange={handleChange} type="email"
                className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]" />
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label className="text-sm text-gray-600">Additional Information</label>
            <textarea name="notes" value={billing.notes} onChange={handleChange} rows={3}
              className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F] resize-none" />
          </div>
        </div>

        {/* ── RIGHT: ORDER SUMMARY ───────────────────────── */}
        <div className="lg:w-[380px]">
          <div className="bg-[#F9F1E7] rounded-2xl p-6 sticky top-28">
            <h2 className="text-xl font-bold mb-5 pb-2 border-b border-[#e5d7be]">Order Summary</h2>

            {/* Cart Items */}
            <div className="space-y-3 mb-5 max-h-52 overflow-y-auto">
              {cartItems.length > 0 ? cartItems.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="text-gray-600 max-w-[140px] truncate">{item.name}</span>
                  </div>
                  <span className="font-medium">Rs. {item.price.toLocaleString()}</span>
                </div>
              )) : (
                <p className="text-gray-400 text-sm text-center py-4">Cart is empty</p>
              )}
            </div>

            <div className="border-t border-[#e5d7be] pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-[#e5d7be]">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-5">
              <p className="text-sm font-semibold mb-3">Payment Method</p>
              <div className="space-y-2">
                {[
                  { value: "card", label: "Credit / Debit Card" },
                  { value: "wallet", label: "Digital Wallet" },
                  { value: "cod", label: "Cash on Delivery" },
                ].map((m) => (
                  <label key={m.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${paymentMethod === m.value ? "border-[#B88E2F] bg-white" : "border-transparent bg-white/50"}`}>
                    <input type="radio" name="payment" value={m.value}
                      checked={paymentMethod === m.value}
                      onChange={() => setPaymentMethod(m.value)}
                      className="accent-[#B88E2F]" />
                    <span className="text-sm">{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={loading || cartItems.length === 0}
              className="mt-5 w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-[#B88E2F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Processing...
                </>
              ) : "Place Order"}
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
              Your data is processed securely via Clerk Auth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
