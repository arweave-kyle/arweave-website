const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  env: {
    AUTH0_DOMAIN: "auth.arweave.org",
    AUTH0_CLIENT_ID: "zrl99vvZ97hiNQ5zsI5oofqk39DLN9Ca"
  }
};

module.exports = withSass(withCSS(withMDX(nextConfig)));