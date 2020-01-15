const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  exportTrailingSlash: true,
  env: {},
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
});