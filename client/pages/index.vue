<template>
  <v-container>
    <!-- Hero section -->
    <div class="hero">
      <v-row justify="center" align="center" style="height: 200px">
        <div class="title text-center">
          <img src="/title.svg" alt="" />
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style scoped>
.title {
  width: 400px;
}
@media (max-width: 750px) and (orientation: portrait) and (max-width: 1000px) and (orientation: landscape) {
  .title {
    width: 300px;
  }
}
</style>
