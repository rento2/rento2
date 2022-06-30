/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // workaround as per https://github.com/vercel/next.js/issues/11368#issuecomment-894822002
  sassOptions: {
    prependData: `
@use 'src/app/styles/core/variables' as *;
@use 'src/app/styles/core/typography' as *;
@use 'src/app/styles/core/breakpoints' as *;
`
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
