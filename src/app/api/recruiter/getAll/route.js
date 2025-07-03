import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const recruiters = await Recruiter.find().select("-password");
  return NextResponse.json(recruiters);
}
