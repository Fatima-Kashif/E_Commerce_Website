import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Email and password are required" }, { status: 400 });
  }

  // Find user
  const { data: user, error } = await supabase
    .from("users")
    .select("id, first_name, last_name, email, password")
    .eq("email", email)
    .single();

  if (error || !user) {
    return Response.json({ error: "Invalid email or password" }, { status: 401 });
  }

  // Check password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return Response.json({ error: "Invalid email or password" }, { status: 401 });
  }

  // Return user without password
  const { password: _, ...safeUser } = user;
  return Response.json({ message: "Signed in successfully", user: safeUser }, { status: 200 });
}