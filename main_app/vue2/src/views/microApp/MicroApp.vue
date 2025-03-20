<template>
  <div class="micro-app-container">
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
        this.activationHandleChange(newPath);
      },
      immediate: true,
    },
  },
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      registerApps();
      this.activationHandleChange(this.$route.path);
    }
    addGlobalUncaughtErrorHandler((event) => console.log(event));
  },
  beforeDestroy() {
    window.qiankunStarted = false;
    Object.values(this.microList).forEach((mic) => {
      mic.unmount();
    });
  },
  methods: {
    async activationHandleChange(path) {
      const activeRules = microApps.map((app) => app.activeRule);
      const isMicro = activeRules.some((rule) => path.startsWith(rule));
      if (!isMicro) {
        return;
      }

      const microItem = microApps.find((app) =>
        path.startsWith(app.activeRule.toString())
      );
      if (!microItem) {
        return;
      }

      if (this.microList[microItem.activeRule.toString()]) {
        return;
      }

      const micro = loadMicroApp({ ...microItem });
      this.$set(this.microList, microItem.activeRule.toString(), micro);
      try {
        await micro.mountPromise;
      } catch (e) {
        console.error("=======", e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.micro-container {
  background: var(--system-container-main-background);
}
</style>
