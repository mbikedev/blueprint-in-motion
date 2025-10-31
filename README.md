# Blueprint In Motion

A comprehensive digital platform for personal development through structured growth across seven key dimensions.

## Features

- **Public Website**: Marketing and information pages
- **Member Platform (BIM-Labs)**: Exclusive forum with 7 dimension categories
- **Membership Tiers**: Initiation (€9.11/mo) and Commitment (€19.11/mo) cycles
- **Secure Authentication**: Email/password with session management
- **Payment Integration**: Stripe subscriptions with automatic billing
- **GDPR Compliant**: Privacy-focused with EU hosting support

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Custom JWT implementation
- **Payments**: Stripe API
- **Hosting**: Vercel/Railway (recommended)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
- Database connection string
- Stripe API keys
- NextAuth secret

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Seed initial categories:
```bash
npm run seed
```

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
blueprint-in-motion/
├── app/                    # Next.js app directory
│   ├── (public)/          # Public pages
│   ├── members/           # Member area
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utilities and helpers
├── prisma/               # Database schema
└── public/               # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy

### Railway

1. Create new project
2. Add PostgreSQL database
3. Deploy from GitHub
4. Set environment variables

## Security Features

- Password hashing with bcrypt
- JWT session management
- HTTPS enforcement
- Rate limiting on auth endpoints
- SQL injection prevention via Prisma
- XSS protection
- CSRF protection

## Database Schema

- **Users**: Member accounts with profiles
- **Memberships**: Subscription tiers and status
- **Categories**: 7 dimensions of development
- **Posts**: Forum content (text, video, audio)
- **Comments**: Threaded discussions
- **Invoices**: Payment records

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - End session

### Forum (Coming Soon)
- `GET /api/posts` - List posts
- `POST /api/posts` - Create post
- `POST /api/comments` - Add comment

### Payments (Coming Soon)
- `POST /api/stripe/checkout` - Create session
- `POST /api/stripe/webhook` - Handle events

## Maintenance

### Daily
- Monitor server status
- Check error logs

### Weekly
- Review security updates
- Database backups
- Performance monitoring

### Monthly
- Generate reports
- Update dependencies
- Security audit

## Support

For technical issues, contact the development team.

## License

Proprietary - All rights reserved