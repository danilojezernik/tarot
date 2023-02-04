<template>
  <div class="fixed-bottom text-end m-3">
    <button class="btn btn-dark rounded-circle me-1 shadow" @click="goBack">◄</button>
    <button class="btn btn-dark rounded-circle me-1 shadow" @click="scrollToTop">▲</button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>
