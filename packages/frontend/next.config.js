/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // workaround as per https://github.com/vercel/next.js/issues/11368#issuecomment-894822002
  sassOptions: {
    prependData: `
@use 'src/styles/core/colors' as *;
@use 'src/styles/core/typography' as *;
@use 'src/styles/core/breakpoints' as *;
`
  }
}

module.exports = nextConfig
