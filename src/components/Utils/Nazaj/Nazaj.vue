<template>
  <button class="btn btn-primary" @click="goBack">Pojdi nazaj</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>