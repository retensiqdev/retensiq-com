const path = require('path');

/** PM2: Astro production build + preview (serves dist/). Port matches prior `pm2 serve` setup. */
module.exports = {
  apps: [
    {
      name: 'retensiq-com',
      cwd: path.resolve(__dirname),
      script: 'npm',
      args: 'run pm2:serve',
      interpreter: 'none',
      watch: false,
      autorestart: true,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
