import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function POST(req) {
  const { firstName, lastName, email, password } = await req.json();

  if (!firstName || !email || !password) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  if (password.length < 6) {
    return Response.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  // Check if user already exists
  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (existing) {
    return Response.json({ error: "Email already registered" }, { status: 409 });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  const { data, error } = await supabase
    .from("users")
    .insert([{ first_name: firstName, last_name: lastName, email, password: hashedPassword }])
    .select("id, first_name, last_name, email")
    .single();

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ message: "Account created successfully", user: data }, { status: 201 });
}