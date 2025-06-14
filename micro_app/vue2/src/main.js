import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  const { container, routerBase } = props;
  
  const router = createRouter(routerBase || "/microVue2")
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app'); // 限制查找范围
}

// function render(props) {
//   instance = new Vue({
//     router,
//     render: h => h(App)
//   }).$mount('#app'); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
// }


if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render();
}

// 父应用加载子应用，子应用必须暴露三个接口：bootstrap、mount、unmount
// 子组件的协议就ok了
export async function bootstrap(props) {

};

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  // ↓ 同一应用之间通过主应用路由控制，这里不能销毁
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;
}
