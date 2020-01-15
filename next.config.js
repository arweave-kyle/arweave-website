const withSass = require('@zeit/next-sass')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  exportTrailingSlash: true,
  env: {},
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};

module.exports = withSass(withMDX(nextConfig));