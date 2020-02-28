<template>
  <v-app>
    <MobileNavbar />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import MobileNavbar from '../components/MobileNavbar'
import Footer from '../components/Footer'

export default {
  components: {
    MobileNavbar,
    Footer
  }
}
</script>

<style></style>
