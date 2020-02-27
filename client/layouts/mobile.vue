<template>
  <v-app>
    <Navbar />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
