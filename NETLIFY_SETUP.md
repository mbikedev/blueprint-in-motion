# Netlify Deployment Setup

## Critical Issue Fixed

The login was failing with a 500 error because the application was configured to use SQLite, which **does not work on Netlify's serverless functions**. SQLite requires persistent file system access, which is not available in serverless environments.

## Required Setup Steps

### 1. Set Up PostgreSQL Database

You need a PostgreSQL database for production. Choose one of these options:

#### Option A: Neon (Recommended - Free tier available)
1. Go to https://neon.tech
2. Create a new project
3. Copy the connection string (starts with `postgresql://`)

#### Option B: Supabase (Free tier available)
1. Go to https://supabase.com
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string

#### Option C: Railway (Paid but easy)
1. Go to https://railway.app
2. Create a new PostgreSQL database
3. Copy the connection string

### 2. Configure Environment Variables in Netlify

Go to your Netlify dashboard:
1. Navigate to Site configuration > Environment variables
2. Add the following variables:

```
DATABASE_URL=postgresql://[your-connection-string-here]
NEXTAUTH_SECRET=[generate-with: openssl rand -base64 32]
NEXTAUTH_URL=https://bluepri.netlify.app

# Stripe (if using payments)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 3. Run Database Migrations

After setting up the PostgreSQL database, you need to run migrations:

```bash
# Set your production DATABASE_URL temporarily
export DATABASE_URL="postgresql://your-connection-string"

# Run migrations
npx prisma migrate deploy

# Seed the database with initial data
npm run seed
```

### 4. Trigger Redeployment

After setting environment variables in Netlify:
1. Go to Deploys
2. Click "Trigger deploy" > "Deploy site"
3. Wait for the build to complete

## Verification

After deployment, test the login at https://bluepri.netlify.app/members/login

Use the admin credentials from the seed file:
- Email: admin@blueprintinmotion.com
- Password: ChangeMeImmediately123!

## Troubleshooting

### Still getting 500 errors?

Check Netlify function logs:
1. Go to Functions in Netlify dashboard
2. Check the logs for the API routes
3. Look for Prisma connection errors

### Common Issues:

1. **DATABASE_URL not set**: Verify in Netlify environment variables
2. **Database not migrated**: Run `npx prisma migrate deploy` with production DATABASE_URL
3. **Connection string format**: Ensure it starts with `postgresql://` not `postgres://`
4. **Prisma client not generated**: The build should handle this, but you can force it with `npx prisma generate`

## What Changed

1. ✅ Updated Prisma schema from SQLite to PostgreSQL
2. ✅ Created Prisma client singleton for serverless environments
3. ✅ Updated all API routes to use shared Prisma instance
4. ✅ Added better error logging

## Next Steps

After fixing the database setup:
1. ⚠️  Change the default admin password immediately
2. Set up regular database backups
3. Configure Stripe for payments
4. Set up email service for notifications
