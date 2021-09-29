module.exports = {
  chainWebpack (config) {
    // see: https://github.com/neutrinojs/webpack-chain
    config.module
    .rule('md')
    .test(/\.md$/)
    .use('html-loader')
    .loader('html-loader')
    .end()
    .use('markdown-loader')
    .loader('markdown-loader')
    .end()
  }
}
