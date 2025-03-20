<template>
  <div class="el-popover-case">

    <div style="margin-bottom: 50px">
      <el-button type="primary" @click="switchPop">switch popover show</el-button>
    </div>

    <el-popover
      :value="popShow"
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      @visibleChange="visibleChange"
      @show="showEvent"
      @hide="hideEvent"
    >
      <el-button slot="reference" @click="popShow = !popShow">手动激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "ElPopoverCase",
  components: {},
  props: {},
  data() {
    return {
      popShow: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    switchPop() {
      this.popShow = !this.popShow;
    },
    // 实测 el-popover 没有visiableChange事件
    // 那么 控制el-popover content展示状态应该用 :value传入 而不是用v-model双向绑定
    visibleChange(val) {
      console.log("visibleChange val->", val);
    },
    showEvent(val) {
      console.log("showEvent val->", val);
    },
    hideEvent(val) {
      console.log("hideEvent val->", val);
    }
  }
};
</script>

<style lang="scss" scoped></style>
