<template>
  <v-app>
    <div v-if="mobile">
      <MobileNavbar />
    </div>
    <div v-else>
      <HomeDesktopNav />
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
      mobile: isMobile
    }
  }
}
</script>

<style></style>
