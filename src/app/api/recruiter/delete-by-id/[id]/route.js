import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await dbConnect();

  const { id } = params;

  const deleted = await Recruiter.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ error: "Recruiter not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Recruiter deleted successfully" });
}
