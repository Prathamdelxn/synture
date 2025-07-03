import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await dbConnect();
  const { id, updates } = await req.json(); // `updates` is an object with fields to update

  const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedRecruiter) {
    return NextResponse.json({ error: "Recruiter not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Recruiter updated", recruiter: updatedRecruiter });
}
