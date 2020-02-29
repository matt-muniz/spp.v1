<template>
  <v-app>
    <div v-if="mobile">
      <MobileNavbar />
    </div>
    <div v-else>
      <DesktopNavbar />
    </div>
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

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
      mobile: isMobile
    }
  }
}
</script>

<style></style>
