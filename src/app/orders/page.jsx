"use client";
import { useState, useEffect } from "react";
import { useAuth } from "../Components/AuthProvider";

const ORDER_SERVICE_URL = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL || "http://localhost:4001";

const statusColors = {
  pending:    "bg-yellow-100 text-yellow-700",
  confirmed:  "bg-blue-100 text-blue-700",
  processing: "bg-purple-100 text-purple-700",
  shipped:    "bg-indigo-100 text-indigo-700",
  delivered:  "bg-green-100 text-green-700",
  cancelled:  "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  // ✅ FIX 2: Auto-fetch orders when the user is signed in
  useEffect(() => {
    if (user?.email) {
      fetchOrders(user.email);
    }
  }, [user]);

  const fetchOrders = async (emailToSearch) => {
    setLoading(true);
    setError("");
    setSearched(false);

    try {
      const res = await fetch(
        `${ORDER_SERVICE_URL}/orders/email/${encodeURIComponent(emailToSearch)}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setOrders(data.orders || []);
      setSearched(true);
    } catch (err) {
      setError("Could not load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    fetchOrders(email);
  };

  // The email to display in results (signed-in user's email or the searched email)
  const displayEmail = user?.email || email;

  return (
    <div className="font-custom max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">My Orders</h1>

      {/* ✅ FIX 2: Show different subtitle based on auth state */}
      {user ? (
        <p className="text-gray-400 text-sm mb-8">
          Showing orders for{" "}
          <span className="font-medium text-black">{user.email}</span>
        </p>
      ) : (
        <p className="text-gray-400 text-sm mb-8">
          Enter the email you used at checkout to view your orders
        </p>
      )}

      {/* ✅ FIX 2: Only show the search bar for guests (not signed-in users) */}
      {!user && (
        <div className="flex gap-3 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter your email address..."
            className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#a07828] transition-colors disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      )}

      {/* Loading spinner for auto-fetch */}
      {loading && (
        <div className="flex justify-center py-16">
          <svg className="animate-spin w-8 h-8 text-[#B88E2F]" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* No results */}
      {!loading && searched && orders.length === 0 && (
        <div className="text-center py-24 text-gray-400">
          <p className="text-5xl mb-4">📦</p>
          <p className="text-lg">No orders found{user ? "." : " for this email."}</p>
          <a
            href="/shop"
            className="mt-4 inline-block text-[#B88E2F] underline text-sm"
          >
            Start shopping →
          </a>
        </div>
      )}

      {/* Orders list */}
      {!loading && orders.length > 0 && (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 mb-4">
            {orders.length} order(s) found for{" "}
            <span className="font-medium text-black">{displayEmail}</span>
          </p>
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-xs text-gray-400">
                    #{order.id.slice(0, 8).toUpperCase()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(order.created_at).toLocaleDateString("en-PK", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                    statusColors[order.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {order.items?.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[#F9F1E7] rounded-lg px-3 py-2"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 rounded object-cover"
                    />
                    <span className="text-xs font-medium">{item.name}</span>
                  </div>
                ))}
                {order.items?.length > 3 && (
                  <div className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-xs text-gray-500">
                    +{order.items.length - 3} more
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-between items-center border-t pt-4">
                <span className="text-sm text-gray-500">
                  {order.items?.length} item(s)
                </span>
                <span className="font-bold text-[#B88E2F]">
                  Rs. {Number(order.subtotal).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
