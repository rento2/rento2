module.exports = {
  apps: [{
    name: 'rento-backend',
    script: '/var/www/rento/packages/backend/build/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true
  },
  {
    name: 'rento-frontend',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/rento/packages/frontend',
    instances: 'max',
    autorestart: true
  }]
}
