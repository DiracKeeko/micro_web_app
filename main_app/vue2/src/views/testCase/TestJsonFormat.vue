<template>
  <div class="test-json-format">
    <el-input v-model="textContent" type="textarea" :rows="4" placeholder="请输入JSON"> </el-input>
    <el-button @click="handleJsonFormat">jsonFormat</el-button>
  </div>
</template>

<script>
export default {
  name: 'TestJsonFormat',
  data() {
    return {
      textContent: ''
    };
  },
  mounted() {},
  methods: {
    trimJson(jsonStr) {
      return jsonStr
        .replace(/\n/g, '')
        .replace(/\r/g, '')
        .replace(/\s|\xA0/g, '');
    },
    handleJsonFormat() {
      try {
        const str = this.trimJson(this.textContent);
        const jsonObj = JSON.parse(str);

        if (typeof str === 'string' && typeof jsonObj === 'object' && jsonObj) {
          const jsonStr = JSON.stringify(jsonObj, null, 2);
          this.textContent = jsonStr;
        } else {
          // this.errorHandler('输入有误, 请检查json输入');
        }
      } catch (err) {
        console.log('err->', err);
        // this.errorHandler('输入有误, 请检查json输入');
      }
    }
  }
};
</script>

<style scoped>
.test-json-format {
  width: 600px;
  height: 400px;
}
</style>
