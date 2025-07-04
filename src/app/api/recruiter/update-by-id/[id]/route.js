import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// CORS support
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "PUT, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export async function PUT(req, { params }) {
  await dbConnect();

  const { id } = params;
  const updates = await req.json();

  // Validate required fields
  if (!id || Object.keys(updates).length === 0) {
    return NextResponse.json(
      { error: "Recruiter ID and update data required" },
      { status: 400 }
    );
  }

  // If password is being updated, hash it
  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }

  const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, updates, {
    new: true,
  });

  if (!updatedRecruiter) {
    return NextResponse.json({ error: "Recruiter not found" }, { status: 404 });
  }

  const safeRecruiter = {
    _id: updatedRecruiter._id,
    companyName: updatedRecruiter.companyName,
    contactEmail: updatedRecruiter.contactEmail,
    contactPhone: updatedRecruiter.contactPhone,
    companyWebsite: updatedRecruiter.companyWebsite,
    companyLogo: updatedRecruiter.companyLogo,
    description: updatedRecruiter.description,
    address: updatedRecruiter.address,
    role: updatedRecruiter.role,
  };

  const res = NextResponse.json(
    { message: "Recruiter updated", recruiter: safeRecruiter },
    { status: 200 }
  );
  res.headers.set("Access-Control-Allow-Origin", "*");
  return res;
}
