import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Optional: CORS preflight
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export async function POST(req) {
  await dbConnect();

  const { contactEmail, password } = await req.json();

  if (!contactEmail || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const recruiter = await Recruiter.findOne({ contactEmail });
  if (!recruiter) {
    return NextResponse.json({ error: "Recruiter not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, recruiter.password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const safeRecruiter = {
    _id: recruiter._id,
    companyName: recruiter.companyName,
    contactEmail: recruiter.contactEmail,
    contactPhone: recruiter.contactPhone,
    companyWebsite: recruiter.companyWebsite,
    companyLogo: recruiter.companyLogo,
    description: recruiter.description,
    address: recruiter.address,
    role: recruiter.role,
  };

  const res = NextResponse.json({ message: "Login successful", recruiter: safeRecruiter }, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}
