import dbConnect from "@/utils/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Handle preflight OPTIONS request (for CORS)
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  setCorsHeaders(res);
  return res;
}

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    const res = NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    setCorsHeaders(res);
    return res;
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    const res = NextResponse.json({ error: "Account does not exist" }, { status: 404 });
    setCorsHeaders(res);
    return res;
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    const res = NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    setCorsHeaders(res);
    return res;
  }

  const res = NextResponse.json({
    message: "Login successful",
    admin: {
      name: admin.name,
      email: admin.email,
      role: "Super_Admin", // hardcoded in response
    },
  }, { status: 200 });

  setCorsHeaders(res);
  return res;
}

function setCorsHeaders(res) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
