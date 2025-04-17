// craco.config.js
const path = require("path");
const { name } = require("./package");
const CracoOutputPlugin = require("./cracoConfig/craco-output");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"), // 允许通过@符号来表示 src目录
    },
    configure: (webpackConfig, { env, paths }) => {
      // 设置项目的上下文目录
      // 设置静态资源公共路径
      webpackConfig.output.library = { name: `${name}-[name]`, type: "umd" };
      // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      webpackConfig.output.globalObject = "window";
      return webpackConfig;
    },
  },
  // ↓ 无效配置
  // plugins: [
  //   {
  //     plugin: CracoOutputPlugin,
  //     options: {
  //       publicPath: '/main/micro-react'
  //     }
  //   }
  // ],
  publicPath: "/main/micro-react",
  devServer: {
    port: 7800, // 这里的端口是必须和父应用配置的子应用端口一致
    open: false,
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域
    },
    // historyApiFallback: true, // 解决 react-router 刷新 404 问题
  },
};
