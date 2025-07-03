import dbConnect from "@/utils/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Handle preflight OPTIONS request (for CORS)
export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

// Handle POST request for signup
export async function POST(req) {
  await dbConnect();

  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    const response = NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    const response = NextResponse.json(
      { error: "Admin already exists" },
      { status: 409 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
    role: "Super_Admin", // Hardcoded role
  });

  const response = NextResponse.json(
    {
      message: "Admin registered successfully",
      admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    },
    { status: 201 }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
