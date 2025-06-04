/* eslint-disable */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  __webpack_public_path__ = process.env.PUBLIC_URL || '/';
}

/* 
  __webpack_public_path__ 不是 window 上的变量，而是一个由 Webpack 提供的 特殊全局变量，它的作用是 在运行时动态设置 Webpack 打包资源（如 JS、CSS）加载的公共路径。

  __webpack_public_path__ 是 Webpack 编译时插入到模块中的。它在模块作用域内生效

  只能在模块顶部设置，必须在应用加载任何资源之前设置（如懒加载 chunk、CSS、图片等） (在index.tsx 最上方引入)
*/