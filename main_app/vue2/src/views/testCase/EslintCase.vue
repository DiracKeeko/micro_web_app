<template>
  <div class="eslint-case">
    <div>{{ showText }}</div>
    <div>保留两位小数: {{ showNumber }}</div>
    <div>收益率: {{ navYield }}</div>
  </div>
</template>

<script>
/* 
  一些eslint的报错展示
*/
export default {
  name: "EslintCase",
  data() {
    return {
      text: "",
      navObj: {
        pre: 1.0001,
        cur: 1.0003
      }
    };
  },
  computed: {
    showText() {
      return this.getText();
    },
    showNumber() {
      return this.formatNumber();
    },
    navYield() {
      const { navObj, getNavYield } = this;
      if (!this.navObj.navYield) {
        getNavYield(navObj);
      }
      return navObj.yield;
    }
  },
  watch: {},
  methods: {
    getText() {
      const { text } = this;
      if (!text) {
        return "空串";
      } else if (text.length >= 10) {
        return `${text.slice(0, 3)}...`;
      }
    },
    formatNumber(val) {
      if (isNaN(val)) {
        return "--";
      }
      return val.toFixed(2);
    },
    getNavYield(obj) {
      const { pre, cur } = obj;
      obj.yield = (cur - pre) / pre;
    }
  }
};
</script>

<style lang="scss" scoped>
.eslint-case {
  padding: 10px;
}
</style>
