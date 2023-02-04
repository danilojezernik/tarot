<template>
  <div class="container-fluid bg-light">
    <div class="container p-4">

      <div class="fs-1 fw-bold">
        Tarot karte!
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Domov</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">404!</li>
        </ol>
      </nav>

    </div>
  </div>
  <div class="container text-center p-5">
    <h2>Ups, stran ni bila najdena ali ne obstaja!</h2>
      <img v-for="random in tarot" :src="require(`@/assets/majorarcana/${random.img}`)">
    <p>
      <button class="btn btn-danger my-3" @click="$router.go(-1)">Nazaj</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarot: [
        {
          id: 1,
          img: "the-devil.png"
        }
      ]
    }
  }
}
</script>