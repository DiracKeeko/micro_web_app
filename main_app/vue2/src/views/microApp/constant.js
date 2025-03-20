import { registerMicroApps, start } from "qiankun";
import store from "@/store";
// import utils from '@/assets/js/utils';

export const microApps = [
  {
    name: "micro-app",
    entry: "http://localhost:8001",
    activeRule: "/micro-app",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/micro-react",
      mainStore: store,
      // user: utils.getStorage('user')
    },
  },
];

export const registerApps = () => {
  registerMicroApps(microApps, {
    beforeLoad: (app) => {
      store.commit("app/loadingMicro", true);
      console.log("before load app.name====>>>>>", app.name);
    },
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterMount: [
      (app) => {
        store.commit("app/loadingMicro", false);
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  });

  start({
    sandbox: {
      // 默认开启预加载
      prefetch: "all",
      // qiankun提供的样式隔离方法（严格模式）
      strictStyleIsolation: true,
      experimentalStyleIsolation: true,
    },
  });
};
