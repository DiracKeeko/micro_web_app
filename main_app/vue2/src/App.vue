<template>
  <div id="foundation-app">
    <CusHeader></CusHeader>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CusHeader from "@/components/CusHeader.vue";

export default {
  name: "FoundationApp",
  components: {
    CusHeader,
  },
  // methods: {
  //   bindCurrent() {
  //     const path = window.location.pathname;
  //     if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
  //       this.current = path;
  //     }
  //   },
  //   listenRouterChange() {
  //     const _wr = function (type) {
  //       const orig = history[type];
  //       return function () {
  //         const rv = orig.apply(this, arguments);
  //         const e = new Event(type);
  //         e.arguments = arguments;
  //         window.dispatchEvent(e);
  //         return rv;
  //       };
  //     };
  //     history.pushState = _wr("pushState");

  //     window.addEventListener("pushState", this.bindCurrent);
  //     window.addEventListener("popstate", this.bindCurrent);

  //     this.$once("hook:beforeDestroy", () => {
  //       window.removeEventListener("pushState", this.bindCurrent);
  //       window.removeEventListener("popstate", this.bindCurrent);
  //     });
  //   },
  // },
  // mounted() {
  //   this.listenRouterChange();
  // },
};
</script>

<style lang="scss" scoped>
#foundation-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: left;
  .app-container {
    background-color: #f5f5f5;
    min-height: calc(100vh - 150px);
    padding-top: 60px;
    overflow-x: hidden;
  }
}
</style>
