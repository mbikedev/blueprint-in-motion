# Blueprint In Motion - Setup Guide

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Configure Environment**
Create `.env` file with:
```
DATABASE_URL="postgresql://user:password@localhost:5432/blueprint_in_motion"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

3. **Setup Database**
```bash
npx prisma generate
npx prisma db push
npm run seed
```

4. **Run Development Server**
```bash
npm run dev
```

## Production Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Add environment variables
5. Deploy

### Option 2: Railway

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Add PostgreSQL service
4. Deploy from GitHub
5. Set environment variables

### Option 3: Self-Hosted (VPS)

1. **Server Requirements**
   - Ubuntu 20.04+ or similar
   - Node.js 18+
   - PostgreSQL 14+
   - Nginx
   - PM2

2. **Setup Commands**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Clone repository
git clone [your-repo-url]
cd blueprint-in-motion

# Install dependencies
npm install

# Build application
npm run build

# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "bim" -- start

# Setup Nginx proxy
sudo nano /etc/nginx/sites-available/bim
```

3. **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Stripe Setup

1. Create Stripe account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. Create products:
   - Initiation Cycle: €9.11/month
   - Commitment Cycle: €19.11/month
4. Add price IDs to `.env`

## Database Management

### Backup
```bash
pg_dump blueprint_in_motion > backup.sql
```

### Restore
```bash
psql blueprint_in_motion < backup.sql
```

### Migrations
```bash
npx prisma migrate dev --name your_migration_name
```

## Security Checklist

- [ ] Change default admin password
- [ ] Set strong NEXTAUTH_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall
- [ ] Set up rate limiting
- [ ] Enable 2FA for admin
- [ ] Regular security updates
- [ ] Database backups

## Monitoring

### Health Check Endpoints
- `/api/health` - Basic health check
- `/api/health/db` - Database connection

### Recommended Tools
- **Uptime**: UptimeRobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Error Tracking**: Sentry
- **Logging**: LogRocket, Datadog

## Maintenance Tasks

### Daily
- Check server status
- Monitor error logs
- Review user registrations

### Weekly
- Database backup
- Security updates check
- Performance review

### Monthly
- Full system backup
- Dependency updates
- Security audit
- Usage report

## Support Contacts

- **Technical Issues**: Contact developer
- **Payment Issues**: Check Stripe dashboard
- **User Issues**: Review admin panel

## Common Issues

### Database Connection Failed
- Check DATABASE_URL format
- Verify PostgreSQL is running
- Check firewall settings

### Stripe Webhook Errors
- Verify webhook secret
- Check endpoint URL
- Review Stripe logs

### Build Failures
- Clear node_modules and reinstall
- Check Node.js version
- Review build logs

## API Documentation

### Authentication
```
POST /api/auth/register
{
  "name": "string",
  "email": "string",
  "password": "string",
  "tier": "initiation|commitment"
}

POST /api/auth/login
{
  "email": "string",
  "password": "string"
}
```

### Forum (To be implemented)
```
GET /api/posts?category={id}
POST /api/posts
POST /api/comments
```

## Important Files

- `.env` - Environment variables
- `prisma/schema.prisma` - Database schema
- `app/api/` - API endpoints
- `components/` - UI components
- `lib/` - Utilities

## Version Control

Always commit:
- Code changes
- Schema updates
- Documentation

Never commit:
- `.env` file
- `node_modules/`
- Build output
- Credentials

---

**Last Updated**: October 2025
**Version**: 1.0.0