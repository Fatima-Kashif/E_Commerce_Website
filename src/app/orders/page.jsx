"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

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
  const { user, isLoaded } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded || !user) return;

    fetch(`${ORDER_SERVICE_URL}/orders/${user.id}`)
      .then((r) => r.json())
      .then((data) => setOrders(data.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, [user, isLoaded]);

  if (!isLoaded || loading) {
    return (
      <div className="font-custom min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#B88E2F] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="font-custom max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">My Orders</h1>
      <p className="text-gray-400 text-sm mb-8">{user?.firstName}'s order history</p>

      {orders.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-5xl mb-4">📦</p>
          <p className="text-lg">No orders yet.</p>
          <a href="/shop" className="mt-4 inline-block text-[#B88E2F] underline text-sm">Start shopping →</a>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-xs text-gray-400">#{order.id.slice(0, 8).toUpperCase()}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(order.created_at).toLocaleDateString("en-PK", {
                      day: "numeric", month: "long", year: "numeric"
                    })}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}>
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="mt-4 flex flex-wrap gap-3">
                {order.items?.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#F9F1E7] rounded-lg px-3 py-2">
                    <img src={item.img} alt={item.name} className="w-8 h-8 rounded object-cover" />
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
                <span className="text-sm text-gray-500">{order.items?.length} item(s)</span>
                <span className="font-bold text-[#B88E2F]">Rs. {Number(order.subtotal).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
