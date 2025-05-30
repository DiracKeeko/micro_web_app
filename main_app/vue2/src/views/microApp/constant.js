import { registerMicroApps, start } from "qiankun";
import store from "@/store";
// import utils from '@/assets/js/utils';

let entryMap = {
  microVue2: "http://localhost:7700/microVue2",
  microReact: "http://localhost:7800/microReact18",
};

const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  entryMap = {
    microVue2: "http://qiankun.case.com/microVue2",
    microReact: "http://qiankun.case.com/microReact18",
  };
}

export const microApps = [
  {
    name: "microVue2",
    entry: entryMap.microVue2,
    activeRule: "/mv2",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/main/mv2",
      // mainStore: store,
      // user: utils.getStorage('user')
    },
  },
  {
    name: "microReact",
    entry: entryMap.microReact,
    activeRule: "/mr18",
    container: "#micro-app-container", // 子应用挂载的div
    props: {
      routerBase: "/main/mr18",
      // mainStore: store,
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
