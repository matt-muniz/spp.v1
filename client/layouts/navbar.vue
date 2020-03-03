<template>
  <v-app>
    <div v-resize="onResize">
      <MobileNavbar v-if="mobile" />
      <DesktopNavbar v-else />
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
import DesktopNavbar from '../components/DesktopNavbar'
import Footer from '../components/Footer'

export default {
  components: {
    MobileNavbar,
    DesktopNavbar,
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
        window.innerWidth < 1000 ? (this.mobile = true) : (this.mobile = false)
      return resize
    }
  }
}
</script>

<style></style>
