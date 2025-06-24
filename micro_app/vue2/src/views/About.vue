<template>
  <div class="about">
    <h1>In Vue2, This is an about page</h1>
    <div>fundId: {{ fundId }}</div>
    <button @click="gotoSubReact()">从当前子应用内跳转到`react`子应用</button>
    <div>
      <button @click="gotoSubReact(123)">从当前子应用内带参跳转到`react`子应用</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    fundId() {
      return this.$route.query.fundId || "--";
    }
  },
  methods: {
    gotoSubReact(fundId) {
      let reactBaseUrl = '/main/mr18/about';
      if (fundId) {
        reactBaseUrl = `${reactBaseUrl}?fundId=${fundId}`;
      }
      history.pushState(null, 'sub-react', reactBaseUrl)
    },
  }
}
</script>
