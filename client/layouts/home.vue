<template>
  <v-app>
    <div v-resize="onResize">
      <MobileNavbar v-if="mobile" />
      <HomeDesktopNav v-else />
    </div>
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable */

import MobileNavbar from '../components/MobileNavbar'
import HomeDesktopNav from '../components/HomeDesktopNav'
import Footer from '../components/Footer'

export default {
  components: {
    MobileNavbar,
    HomeDesktopNav,
    Footer
  },
  data() {
    return {
      mobile: ''
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      const resize =
        window.innerWidth < 900 ? (this.mobile = true) : (this.mobile = false)
      return resize
    }
  }
}
</script>

<style></style>
