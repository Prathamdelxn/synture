import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/utils/db'; 
import User from '@/models/User';        

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { fullName, email, password, phone, location } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      location,
    });

    const userData = newUser.toObject();
    delete userData.password;

    return NextResponse.json({
      message: 'User created successfully',
      user: userData,
    }, { status: 201 });
  } catch (error) {
    console.error('User creation error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
