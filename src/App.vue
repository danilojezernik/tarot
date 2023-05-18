<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div v-if="isLoading || showSpinner" class="image-spinner"
         :class="{ 'fade-out': !isLoading, 'fade-in': showSpinner }">
      <img src="@/assets/thefoolindex.png" alt="loading">
    </div>
    <div v-else class="shadow-main">
      <app-header/>
      <router-view/>
      <app-footer/>
      <app-navrh/>
    </div>
  </div>
</template>

<style>
.shadow-main {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.image-spinner {
  text-align: center;
  font-size: 18px;
  color: #777;
  animation: bounce 2s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.image-spinner.fade-in {
  opacity: 1;
}

.image-spinner.fade-out {
  opacity: 0;
}

.image-spinner img {
  max-height: 300px;
  max-width: 300px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      isLoading: true,
      showSpinner: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
      this.hideSpinner();
    }, 1000);
  },
  beforeUnmount() {
    window.removeEventListener("load", this.hideSpinner);
  },
  methods: {
    hideSpinner() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500); // wait for fade out animation to finish
    }
  }
};
</script>
