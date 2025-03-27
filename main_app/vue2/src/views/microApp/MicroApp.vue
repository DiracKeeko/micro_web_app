<template>
  <div class="micro-app">
    <div class="micro-app-title">micro-app-title</div>
    <div id="micro-app-container"></div>
  </div>
</template>

<script>
import { loadMicroApp, addGlobalUncaughtErrorHandler } from "qiankun";

import { microApps, registerApps } from "./constant";

export default {
  name: "MicroApp",
  data() {
    return {
      microList: {},
      elementLink: null,
    };
  },
  watch: {
    "$route.path": {
      handler(newPath) {
        this.clearMicroApp();
        this.processMicroApp(newPath);
      },
      immediate: true,
    },
  },
  mounted() {
    if (!window.qiankunStarted) {
      // registerApps();
      this.processMicroApp(this.$route.path);
    }
    addGlobalUncaughtErrorHandler((event) => console.log(event));
  },
  beforeDestroy() {
    this.clearMicroApp();
  },
  methods: {
    async processMicroApp(path) {
      console.log("path->", path);
      console.log("processMicroApp start");

      window.qiankunStarted = true;

      const activeRules = microApps.map((app) => app.activeRule);
      const isMicro = activeRules.some((rule) => path.startsWith(rule));
      if (!isMicro) {
        return;
      }

      const microItem = microApps.find((app) =>
        path.startsWith(app.activeRule.toString())
      );
      if (!microItem) {
        console.log("000");
        return;
      }

      if (this.microList[microItem.activeRule.toString()]) {
        console.log("001");
        return;
      }

      const { name, entry, container } = microItem;
      let integralEntry = entry;

      const pathPartArr = path.split("/"); // ['', 'micro-vue2'] 或者 ['', 'micro-vue2', 'about']
      // ↑ --todo 对生产环境的特殊情况这里需要换个连接符
      const pathParam = pathPartArr[2];

      if (pathParam) {
        integralEntry = `${entry}/${pathParam}`;
      }

      console.log("integralEntry->", integralEntry);

      const micro = loadMicroApp({ name, entry: integralEntry, container });
      this.$set(this.microList, microItem.activeRule.toString(), micro);
      try {
        await micro.mountPromise;
      } catch (e) {
        console.error("=======", e);
      }
    },
    clearMicroApp() {
      window.qiankunStarted = false;
      Object.values(this.microList).forEach((microItem) => {
        microItem.unmount();
      });
      this.microList = {};
    },
  },
};
</script>

<style lang="scss" scoped>
#micro-app-container {
  width: 800px;
  height: 500px;
  // background: var(--system-container-main-background);
  border: 1px solid blue;
}
</style>
