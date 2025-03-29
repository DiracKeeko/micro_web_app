<template>
  <div class="about">
    <h1>In Vue2, This is an about page</h1>
    <div>fundId: {{ fundId }}</div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    fundId() {
      return this.$route.query.fundId || "--";
    }
  }
}
</script>
