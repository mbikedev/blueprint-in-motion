import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  // Create categories
  const categories = [
    { name: 'Physical', slug: 'physical', description: 'Health, fitness, and vitality', order: 1 },
    { name: 'Emotional', slug: 'emotional', description: 'Emotional intelligence and regulation', order: 2 },
    { name: 'Psychological', slug: 'psychological', description: 'Mental clarity and cognitive development', order: 3 },
    { name: 'Relational', slug: 'relational', description: 'Connections and relationships', order: 4 },
    { name: 'Financial', slug: 'financial', description: 'Abundance and resource management', order: 5 },
    { name: 'Spiritual', slug: 'spiritual', description: 'Purpose and meaning', order: 6 },
    { name: 'Quantum', slug: 'quantum', description: 'Consciousness and infinite potential', order: 7 },
  ]
  
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }
  
  console.log('Categories created')
  
  // Create admin user (optional)
  const adminEmail = 'admin@blueprintinmotion.com'
  const adminPassword = 'ChangeMeImmediately123!'
  
  const bcrypt = require('bcryptjs')
  const hashedPassword = await bcrypt.hash(adminPassword, 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: 'Admin',
      emailVerified: new Date(),
    },
  })
  
  await prisma.membership.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      tier: 'COMMITMENT',
      status: 'ACTIVE',
    },
  })
  
  console.log('Admin user created')
  console.log(`Email: ${adminEmail}`)
  console.log(`Password: ${adminPassword}`)
  console.log('⚠️  IMPORTANT: Change this password immediately!')
  
  console.log('Seeding completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })