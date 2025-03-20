<template>
  <div class="home">
    <div class="home-page">HomePage</div>
    <el-button type="primary" @click="emitMessage">主要按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    async emitMessage() {
      await this.$message("这是一条消息提示");
      await this.$message({
        message: "警告，这是一条警告消息",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.home-page {
  margin: 200px 0 0 0;
}
</style>
