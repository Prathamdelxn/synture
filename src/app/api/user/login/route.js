import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import dbConnect from '@/utils/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey'; // Use env in production

export async function POST(req) {
  try {
    await dbConnect();
    
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log("jwt token:", token)

    const userData = user.toObject();
    delete userData.password;

    return NextResponse.json({
      message: 'Login successful',
      token,         // ✅ return token
      user: userData // ✅ return user info
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
