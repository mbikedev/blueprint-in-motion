import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
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

    const { title, content, categoryId, subcategory, type } = await req.json()

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // If no categoryId provided, create or get a default category
    let finalCategoryId = categoryId
    if (!categoryId) {
      let defaultCategory = await prisma.category.findFirst({
        where: { slug: 'general' }
      })

      if (!defaultCategory) {
        defaultCategory = await prisma.category.create({
          data: {
            name: 'General',
            slug: 'general',
            description: 'General discussions',
            order: 0
          }
        })
      }
      finalCategoryId = defaultCategory.id
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        type: type || 'TEXT',
        authorId: decoded.userId,
        categoryId: finalCategoryId,
        subcategory: subcategory || null,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        category: true,
      }
    })

    return NextResponse.json({
      success: true,
      post,
    })
  } catch (error) {
    console.error('Create post error:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        },
        category: true,
        _count: {
          select: {
            comments: true,
            reactions: true,
          }
        }
      },
      take: 50,
    })

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Get posts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
