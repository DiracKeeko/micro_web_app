
const config = {
  publicPath: "/main",
  productionSourceMap: false,
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 7788,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-main-vue2`,
    },
  },
};

module.exports = config;
