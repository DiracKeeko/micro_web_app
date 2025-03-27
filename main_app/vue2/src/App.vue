<template>
  <div id="foundation-app">
    <CusHeader></CusHeader>
    <div class="app-container">
      <router-view></router-view>
      <div id="all-micro-container"></div>
    </div>
  </div>
</template>

<script>
import CusHeader from "@/components/CusHeader.vue";

export default {
  name: 'FoundationApp',
  components: {
    CusHeader
  }
}
</script>

<style lang="scss" scoped>
#foundation-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  .app-container {
    background-color: #f5f5f5;
    min-height: calc(100vh - 150px);
    padding-top: 60px;
    overflow-x: hidden;
  }
}
</style>
