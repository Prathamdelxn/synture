import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();

    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
