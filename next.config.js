const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  exportTrailingSlash: true,
  env: {},
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
});