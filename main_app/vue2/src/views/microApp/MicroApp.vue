<template>
  <div class="micro-app-outer">
    <div id="micro-app-container"></div>
  </div>
</template>

<script>

export default {
  name: 'MicroApp',
  components: {
  },
  props: {
    basicData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
#micro-app-container {
  border: 1px solid blue;
}
</style>