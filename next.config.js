const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  env: {}
};

module.exports = withSass(withCSS(withMDX(nextConfig)));