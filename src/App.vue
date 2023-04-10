<template>

<div>
  <app-header class="index-two"></app-header>

  <router-view/>

  <app-footer></app-footer>

  <div class="fixed-bottom text-end m-3 index-one">
    <button class="btn btn-dark rounded-circle me-1 shadow" @click="goBack">◄</button>
    <button class="btn btn-dark rounded-circle me-1 shadow" @click="scrollToTop">▲</button>
  </div>
</div>

</template>

<style>
.index-one {
  z-index: 1;
}

.index-two {
  z-index: 2;
}
</style>

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
