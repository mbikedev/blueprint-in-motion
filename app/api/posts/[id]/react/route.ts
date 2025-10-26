import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || 'your-secret-key'
    ) as { userId: string; email: string }

    const { id: postId } = await params
    const { type } = await req.json()

    // Check if user already reacted
    const existingReaction = await prisma.reaction.findUnique({
      where: {
        userId_postId_type: {
          userId: decoded.userId,
          postId,
          type: type || 'LIKE',
        }
      }
    })

    if (existingReaction) {
      // Remove reaction (toggle)
      await prisma.reaction.delete({
        where: { id: existingReaction.id }
      })

      return NextResponse.json({
        success: true,
        action: 'removed',
      })
    } else {
      // Add reaction
      await prisma.reaction.create({
        data: {
          type: type || 'LIKE',
          userId: decoded.userId,
          postId,
        }
      })

      return NextResponse.json({
        success: true,
        action: 'added',
      })
    }
  } catch (error) {
    console.error('React error:', error)
    return NextResponse.json(
      { error: 'Failed to react to post' },
      { status: 500 }
    )
  }
}
