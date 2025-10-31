// scripts/postinstall.js
const { spawnSync } = require('child_process');

// Skip in Netlify or generic CI
if (process.env.NETLIFY || process.env.CI) {
  console.log('Skipping prisma generate in CI/Netlify build.');
  process.exit(0);
}

// Otherwise run prisma generate and forward output
const res = spawnSync('npx', ['prisma', 'generate'], { stdio: 'inherit' });
process.exit(res.status);
