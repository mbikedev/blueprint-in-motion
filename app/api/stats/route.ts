import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const [totalUsers, totalPosts, activeMembers] = await Promise.all([
      prisma.user.count(),
      prisma.post.count(),
      prisma.membership.count({
        where: { status: 'ACTIVE' }
      })
    ])

    return NextResponse.json({
      totalUsers,
      totalPosts,
      activeMembers,
    })
  } catch (error) {
    console.error('Get stats error:', error)
    return NextResponse.json(
      { error: 'Failed to get stats' },
      { status: 500 }
    )
  }
}
