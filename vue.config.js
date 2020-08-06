module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid/'
    : '/',
  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'https://2019ncov.asia',
  //             changeOrigin: true,
  //         },
  //     },
  // },
};
