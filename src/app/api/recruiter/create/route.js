import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Optional: CORS for preflight
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export async function POST(req) {
  await dbConnect();

  const {
    companyName,
    contactEmail,
    contactPhone,
    password,
    companyWebsite,
    companyLogo,
    description,
    address,
  } = await req.json();

  // Basic validation
  if (!companyName || !contactEmail || !password) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 }
    );
  }

  const existing = await Recruiter.findOne({ contactEmail });
  if (existing) {
    return NextResponse.json({ error: "Recruiter already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const recruiter = await Recruiter.create({
    companyName,
    contactEmail,
    contactPhone,
    password: hashedPassword,
    companyWebsite,
    companyLogo,
    description,
    address,
  });

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

  const res = NextResponse.json({ message: "Recruiter created", recruiter: safeRecruiter }, { status: 201 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}
