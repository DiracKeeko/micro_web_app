// craco.config.js
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src') // 允许通过@符号来表示 src目录
    }
  },
  devServer: {
    port: 7800, // 这里的端口是必须和父应用配置的子应用端口一致
    open: false,
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许跨域
    },
    // historyApiFallback: true, // 解决 react-router 刷新 404 问题
  },
}
