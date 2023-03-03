<template>
<div>
  <app-header></app-header>

  <router-view/>

  <!-- <app-footer></app-footer> -->
</div>

</template>

<style>
</style>

<script>

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Nikoli ne obupajte!";
});

window.addEventListener("focus", () => {
  document.title = docTitle
})

</script>
