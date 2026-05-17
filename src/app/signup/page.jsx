"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../Components/AuthProvider";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      signIn(data.user);
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-custom">
      {/* Breadcrumb */}
      <div className="bg-[#F9F1E7] py-16 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
          <Link href="/" className="font-semibold text-black">Home</Link>
          <svg width="6" height="10" viewBox="0 0 8 14" fill="none">
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#9F9F9F"/>
          </svg>
          <span>Sign Up</span>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10">
            <h2 className="text-2xl font-bold mb-1">Create an account</h2>
            <p className="text-gray-400 text-sm mb-8">Join Furniro and start shopping</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-medium">First Name *</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-medium">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600 font-medium">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600 font-medium">Password *</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 6 characters"
                  required
                  className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600 font-medium">Confirm Password *</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  required
                  className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B88E2F]"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-[#B88E2F] transition-colors disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/signin" className="text-[#B88E2F] font-medium hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}