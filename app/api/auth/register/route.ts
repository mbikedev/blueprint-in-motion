import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/lib/auth'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, tier } = await req.json()
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }
    
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }
    
    const user = await createUser(email, password, name)
    
    const membershipTier = tier === 'commitment' ? 'COMMITMENT' : 'INITIATION'
    
    await prisma.membership.create({
      data: {
        userId: user.id,
        tier: membershipTier as any,
        status: 'ACTIVE',
      },
    })
    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.NEXTAUTH_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )
    
    cookies().set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    )
  }
}