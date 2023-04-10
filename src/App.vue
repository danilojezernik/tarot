<template>

  <div class="shadow-main">
    <app-header></app-header>

    <router-view/>

    <app-footer></app-footer>

    <app-navrh/>
  </div>

</template>

<style>

.shadow-main {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
</style>

<script>
</script>
