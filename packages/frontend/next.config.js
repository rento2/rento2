const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // workaround as per https://github.com/vercel/next.js/issues/11368#issuecomment-894822002
  sassOptions: {
    prependData: `
@use '${path.join(__dirname, 'src', 'styles', 'core', 'breakpoints')}' as *;
@use '${path.join(__dirname, 'src', 'styles', 'core', 'colors')}' as *;
@use '${path.join(__dirname, 'src', 'styles', 'core', 'typography')}' as *;
`
  }
}

module.exports = nextConfig
