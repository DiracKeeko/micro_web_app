const pkgName = "microVue2"

module.exports = {
  publicPath: '/micro-vue2',
  devServer: {
    port: 7700, //这里的端口是必须和父应用配置的子应用端口一致
    headers: {
      //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: (config) => {
    config.module.rule('fonts').use('url-loader').loader('url-loader').options({}).end();
    config.module.rule('images').use('url-loader').loader('url-loader').options({}).end();
  },
  configureWebpack: {
    output: {
      //资源打包路径
      library: `${pkgName}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${pkgName}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  }
}
